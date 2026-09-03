package com.bhge.core.b2bunit.service.impl;

import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import de.hybris.platform.b2b.company.B2BCommerceUserService;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.impl.DefaultB2BUnitService;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;
import de.hybris.platform.servicelayer.exceptions.ClassMismatchException;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import de.hybris.platform.servicelayer.session.SessionExecutionBody;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.b2bunit.dao.BHGEB2BUnitDAO;
import com.bhge.core.b2bunit.service.BHGEB2BUnitService;

import jakarta.annotation.Resource;


public class BHGEB2BUnitServiceImpl extends DefaultB2BUnitService implements BHGEB2BUnitService
{

	@Autowired
	private BHGEB2BUnitDAO bhgeB2BUnitDao;

	@Resource(name = "b2bCommerceUserService")
	private B2BCommerceUserService b2BCommerceUserService;

	private static final String UG_ADMIN_ORDER_STORE = "UG_ADMIN_ORDER_STORE";
	private static final String UG_VIEW_STORE = "UG_VIEW_STORE";


	private static final Logger LOG = Logger.getLogger(BHGEB2BUnitServiceImpl.class);

	@Override
	public List<B2BUnitModel> getB2bUnitsForSearchCriteria(final String text)
	{
		return bhgeB2BUnitDao.getB2bUnitsForSearchCriteria(text);

	}

	@Override
	public List<B2BUnitModel> getB2bUnitsForSearchCriteria(final String text, final PageableData pageableData)
	{
		return bhgeB2BUnitDao.getB2bUnitsForSearchCriteria(text, pageableData);

	}

	@Override
	public List<B2BUnitModel> getSalesAreaForB2BUnit(final String soldTo)
	{
		return bhgeB2BUnitDao.getSalesAreaForB2bUnit(soldTo);
	}

	@Override
	public B2BUnitModel getSoldToB2bUnit(final String soldTo)
	{
		return bhgeB2BUnitDao.getSoldToB2bUnit(soldTo);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.b2b.services.impl.DefaultB2BUnitService#getUnitForUid(java.lang.String)
	 */
	@Override
	public B2BUnitModel getUnitForUid(final String uid)
	{
		//LOG.info("Inside custom getUnitForUid in BHGEB2BUnitServiceImpl class");
		B2BUnitModel unit;
		try
		{
			unit = getUserService().getUserGroupForUID(uid, B2BUnitModel.class);
		}
		catch (final UnknownIdentifierException | ClassMismatchException e)
		{
			unit = null;
			//LOG.error("Failed to get unit: " + uid);
		}
		return unit;
	}
	
	/*
	 * (non-Javadoc)
	 * 
	 * @see com.bhge.core.b2bunit.service.BHGEB2BUnitService#getCustomerClassList()
	 */
	@Override
	public List<String> getCustomerClassList()
	{
		return bhgeB2BUnitDao.getCustomerClassList();
	}
	
	@Override
	public List<String> getCustomerAccountGroupsforB2bUnit()
	
	{
		return bhgeB2BUnitDao.getCustomerAccountGroupsforB2bUnit();
	}

	@Override
	public Collection<CategoryModel> getCategoriesFromSalesOrg(String salesOrg, String distributionChannel, String division) {
		Collection<CategoryModel> categoryModels=null;
		SAPSalesOrganizationModel sapSalesOrganizationModel = bhgeB2BUnitDao.getCategoriesFromSalesOrg(salesOrg,distributionChannel,division);
		if(sapSalesOrganizationModel != null) {
			categoryModels = sapSalesOrganizationModel.getVisibleCategories();
		}
		return categoryModels != null ? categoryModels : Collections.EMPTY_LIST;
	}

	@Override
	public Collection<BHGEApprovalDetailsModel> fetchProductLinesForCSRAccess(String user)
	{
		try {
			Collection<BHGEApprovalDetailsModel> bhgeApprovalDetailsModels = null;
			LOG.info("fetchProductLinesForCSRAccess method entry");
			BHGERegieterCustomerModel bhgeRegieterCustomerModel=getRegisterCustomer(user);
			LOG.info("fetchProductLinesForCSRAccess bhgeRegieterCustomerModel:-" + bhgeRegieterCustomerModel);
			if (bhgeRegieterCustomerModel != null) {
				bhgeApprovalDetailsModels = bhgeRegieterCustomerModel.getBhgeApprovers();
				LOG.info("fetchProductLinesForCSRAccess BhgeApprovers:-" + bhgeRegieterCustomerModel.getBhgeApprovers());
			}
			return bhgeApprovalDetailsModels != null ? bhgeApprovalDetailsModels : Collections.EMPTY_LIST;
		}
		catch(Exception ex){
			LOG.info("fetchProductLinesForCSRAccess ex:- "+ ex);
		}
		return Collections.EMPTY_LIST;
	}

	private BHGERegieterCustomerModel getRegisterCustomer(final String userId)
	{
		return getSessionService().executeInLocalView(new SessionExecutionBody()
		{
			@Override
			public Object execute()
			{
				return bhgeB2BUnitDao.getUserBySSO(userId);
			}
		}, getUserService().getAdminUser());
	}

	@Override
	public SearchPageData<B2BCustomerModel> getAllCustoomersForB2bUnits(final PageableData pageableData, String unitCustomerNumber, String searchTerm, List<String> filterRoles, String currentUserId, boolean isInternalUsers)
	{
		return getSessionService().executeInLocalView(new SessionExecutionBody()
		{
			@Override
			public Object execute()
			{
				return bhgeB2BUnitDao.getAllCustoomersForB2bUnits(pageableData,unitCustomerNumber, searchTerm, filterRoles,currentUserId, isInternalUsers);
			}
		}, getUserService().getAdminUser());
	}

	@Override
	public boolean updateUserDetails(String uid, String role, boolean loginDisabled, String adminId) {
		return getSessionService().executeInLocalView(new SessionExecutionBody()
		{
			@Override
			public Object execute()
			{
				boolean userUpdated = false;
				UserModel user=getUserService().getUserForUID(uid);
				if(user instanceof GEEdgeCustomerModel customer)
				{
					if(role.equalsIgnoreCase(UG_ADMIN_ORDER_STORE))
					{
						b2BCommerceUserService.addUserRole(uid, UG_ADMIN_ORDER_STORE);
						b2BCommerceUserService.removeUserRole(uid, UG_VIEW_STORE);
						userUpdated = true;
					}
					else if(role.equalsIgnoreCase(UG_VIEW_STORE)){
						b2BCommerceUserService.addUserRole(uid, UG_VIEW_STORE);
						b2BCommerceUserService.removeUserRole(uid, UG_ADMIN_ORDER_STORE);
						userUpdated = true;
					}
					if(customer.isLoginDisabled()!=loginDisabled)
					{
						user.setLoginDisabled(loginDisabled);
						userUpdated = true;
					}
					if (BooleanUtils.isTrue(userUpdated)) {
						customer.setLastEditedUser(adminId);
						final Date modifiedTime = new Date();
						customer.setLastEditedTime(modifiedTime);
					}
					getModelService().save(user);
					return true;
				}
				return false;
			}
		}, getUserService().getAdminUser());

	}

	@Override
	public SearchPageData<B2BUnitModel> getAllB2bUnits(PageableData pageableData, String searchTerm) {
		return getSessionService().executeInLocalView(new SessionExecutionBody()
		{
			@Override
			public Object execute()
			{
				return bhgeB2BUnitDao.getAllB2bUnits(pageableData, searchTerm);
			}
		}, getUserService().getAdminUser());
	}

	@Override
	public B2BUnitModel getB2bUnit(String searchTerm) {
		return getSessionService().executeInLocalView(new SessionExecutionBody()
		{
			@Override
			public Object execute()
			{
				return bhgeB2BUnitDao.getB2bUnit( searchTerm );
			}
		}, getUserService().getAdminUser());
	}
}
