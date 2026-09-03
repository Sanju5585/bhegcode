package com.bhge.facades.roleAccessCheck.impl;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.bhge.core.model.RestrictedSalesAreaModel;
import com.bhge.register.webservices.data.ManualApprovalData;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.util.Config;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;
import org.assertj.core.error.OptionalShouldBeEmpty;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;

import com.bhge.facades.roleAccessCheck.DSRoleAccessCheckFacade;

import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.cms2.model.pages.AbstractPageModel;
import de.hybris.platform.cms2.model.restrictions.AbstractRestrictionModel;
import de.hybris.platform.cms2.servicelayer.services.CMSPageService;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.user.UserGroupModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.exceptions.ModelNotFoundException;
import de.hybris.platform.servicelayer.user.UserService;

public class DefaultDSRoleAccessCheckFacade implements DSRoleAccessCheckFacade
{
	
	private static final String ROLE_ID = "UG_";
	private static final String RMAPAGEID = "rma.page.uid";
	private static final String UG_ORDER_TRACKING = "UG_ORDER_TRACKING";
	private static final String UG_ADMIN_ORDER_STORE = "UG_ADMIN_ORDER_STORE";
	private static final String UG_VIEW_STORE = "UG_VIEW_STORE";
	private static final String UG_RMA_AUTHORITY = "UG_RMA_AUTHORITY";
	private static final String  RESTRICTED_SALESAREA_QUERY="SELECT {pk} FROM {RestrictedSalesArea} WHERE {uid}=?salesareauid";
	private  static final Logger LOG = Logger.getLogger(DefaultDSRoleAccessCheckFacade.class);
	
	private CMSPageService cmsPageService;
	
	@Resource(name = "userService")
	private UserService userService;
	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	public CMSPageService getCmsPageService() {
		return cmsPageService;
	}

	public void setCmsPageService(CMSPageService cmsPageService) {
		this.cmsPageService = cmsPageService;
	}

	@Override
	public Boolean checkUserAccess(String pageId) throws CMSItemNotFoundException
	{
		boolean userAccess = false;
		try
		{
			//final AbstractPageModel pageModel = cmsPageService.getPageForId(pageId);
			final AbstractPageModel pageModel = cmsPageService.getPageForLabelOrId(pageId);
			String rmaPageUid = Config.getParameter(RMAPAGEID);
			UserModel userModel = userService.getCurrentUser();
			List<String> rmaPageUidList = null != rmaPageUid ? Arrays.asList(rmaPageUid.split(",")) : new ArrayList<String>();
			if(userModel instanceof GEEdgeCustomerModel && null != pageModel)
			{
				GEEdgeCustomerModel user = (GEEdgeCustomerModel) userModel;
				if(CollectionUtils.isNotEmpty(pageModel.getRestrictions()))
				{
					List<String> restrictions = new ArrayList<String>();
					List<String> userRoles = getUserRole(user);
					List<AbstractRestrictionModel> restrictionModels = pageModel.getRestrictions().stream().filter(rest -> null != rest.getUid()).collect(Collectors.toList());
					if(CollectionUtils.isNotEmpty(restrictionModels))
					{
						restrictions = restrictionModels.stream().map(r -> r.getUid()).collect(Collectors.toList());
					}
					if(rmaPageUidList.stream().anyMatch(page -> page.equalsIgnoreCase(pageId)))
					{
						userAccess = roleAccessforRmaCheckOut(userRoles, user);
					}
					else if(CollectionUtils.isNotEmpty(restrictions) && CollectionUtils.isNotEmpty(userRoles) && !Collections.disjoint(userRoles, restrictions))
					{
						userAccess = true;
					}
					else
					{
						userAccess = false;
					}
				}
				else
				{
					userAccess = true;
				}
			}
			else
			{
				userAccess = true;
			}
		}
		catch(ModelNotFoundException e)
		{
			userAccess = false;
		}

		return userAccess;
	}


	public List<String> getUserRole(GEEdgeCustomerModel user)
	{
		return user.getGroups().stream()
				.filter(UserGroupModel.class::isInstance)
				.map(PrincipalGroupModel::getUid)
				.filter(Objects::nonNull)
				.collect(Collectors.toList());
	}
	
	@Override
	public List<String> getUserRole()
	{
		UserModel currentUser = userService.getCurrentUser();
		List<String> userRoles = new ArrayList<String>();
		String userRole = StringUtils.EMPTY;
		if(userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			currentUser = (GEEdgeCustomerModel) currentUser;
			List<PrincipalGroupModel> userGroups = currentUser.getGroups().stream()
					.filter(role -> role instanceof UserGroupModel && role.getUid().contains(ROLE_ID)).collect(Collectors.toList());
			if(CollectionUtils.isNotEmpty(userGroups))
			{
				userRoles = userGroups.stream().map(r -> r.getUid()).collect(Collectors.toList());
			}
		}
		return userRoles;
	}

	@Override
	public Boolean getUserRoleofB2BUnit() {
		B2BUnitModel defaultSoldTo = null;
		RestrictedSalesAreaModel restrictedSalesAreaModel = null;
		GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		defaultSoldTo = currentUser.getDefaultB2BUnit();
		LOG.info(" DefaultDSRoleAccessCheckFacade: getUserRoleofB2BUnit Default B2Bunit: "+ defaultSoldTo);
		if(null != defaultSoldTo) {
			LOG.info(" DefaultDSRoleAccessCheckFacade: getUserRoleofB2BUnit Default SoldTo B2B Unit UID : "+defaultSoldTo.getUid());
			String attributeId = defaultSoldTo.getUid().split("_")[1];
			LOG.info("fetching Restricted sales area for Sales Area ID---" + attributeId);
			try{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(RESTRICTED_SALESAREA_QUERY);
			fQuery.addQueryParameter("salesareauid", attributeId);
			LOG.info("fetching Restricted sales area  details Query ---" + fQuery.getQuery());
			final SearchResult<RestrictedSalesAreaModel> searchResult = flexibleSearchService.search(fQuery);
			if (null != searchResult && searchResult.getCount() > 0 && searchResult.getResult() != null
					&& searchResult.getResult().get(0) != null)
			{
				restrictedSalesAreaModel = searchResult.getResult().get(0);
				LOG.info(" Restricted sales area  details found for B2B unit Model ---" + restrictedSalesAreaModel.getUid());
			}

		}
		catch(Exception e){
			LOG.error("Exception in fetching Restricted sales area  details for B2B unit Model ---" + e.getMessage());
		}
		}
		return null!=restrictedSalesAreaModel;
	}


	public boolean roleAccessforRmaCheckOut(List<String> userRoles, GEEdgeCustomerModel user) {
		if (user.getIsInternalUser()) {
			boolean hasAdminOrderStore = userRoles.stream().anyMatch(role -> role.contains(UG_ADMIN_ORDER_STORE));
			boolean hasOrderTracking = userRoles.stream().anyMatch(role -> role.contains(UG_ORDER_TRACKING));
			boolean hasRmaAuthority = userRoles.stream().anyMatch(role -> role.contains(UG_RMA_AUTHORITY));
			boolean hasViewStore = userRoles.stream().anyMatch(role -> role.contains(UG_VIEW_STORE));

			return hasAdminOrderStore ||
					(hasOrderTracking && hasRmaAuthority) ||
					(hasViewStore && hasRmaAuthority);
		} else {
			return userRoles.stream().anyMatch(role ->
					role.contains(UG_ORDER_TRACKING) ||
							role.contains(UG_ADMIN_ORDER_STORE) ||
							role.contains(UG_VIEW_STORE)
			);
		}
	}


}
