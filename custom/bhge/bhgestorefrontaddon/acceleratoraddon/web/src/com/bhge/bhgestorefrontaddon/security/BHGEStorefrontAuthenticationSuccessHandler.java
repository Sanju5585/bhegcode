/*
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2013 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 *
 *
 */
package com.bhge.bhgestorefrontaddon.security;

import de.hybris.platform.acceleratorstorefrontcommons.constants.WebConstants;
import de.hybris.platform.acceleratorstorefrontcommons.security.StorefrontAuthenticationSuccessHandler;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.b2bcommercefacades.company.data.B2BUnitData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.core.Constants;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.concurrent.TimeUnit;

import jakarta.annotation.Resource;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.store.services.BHGEBaseStoreService;
import com.google.common.base.Stopwatch;


/**
 * Success handler initializing user settings and ensuring the cart is handled correctly
 */
public class BHGEStorefrontAuthenticationSuccessHandler extends StorefrontAuthenticationSuccessHandler
{

	@Resource(name = "userService")
	private UserService userService;

	@Resource
	SessionService sessionService;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	@Resource(name = "addressConverter")
	private Converter<AddressModel, AddressData> addressConverter;

	@Resource(name = "bhgeSoldToUtil")
	private BHGESoldToUtil bhgeSoldToUtil;

	@Resource
	B2BUnitService b2bUnitService;

	private static final Logger LOG = Logger.getLogger(BHGEStorefrontAuthenticationSuccessHandler.class);


	@Override
	public void onAuthenticationSuccess(final HttpServletRequest request, final HttpServletResponse response,
			final Authentication authentication) throws IOException, ServletException
	{

		// Setting B2B Selection component after user logged in
		final UserModel user = userService.getCurrentUser();
		if (user instanceof GEEdgeCustomerModel)
		{
			populateSoldToSelectionData(request);
			request.getSession().setAttribute("isGuestUser", Boolean.FALSE);
		}

		//if redirected from some specific url, need to remove the cachedRequest to force use defaultTargetUrl
		final RequestCache requestCache = new HttpSessionRequestCache();
		final SavedRequest savedRequest = requestCache.getRequest(request, response);

		if (savedRequest != null)
		{
			for (final String redirectUrlForceDefaultTarget : getListRedirectUrlsForceDefaultTarget())
			{
				if (savedRequest.getRedirectUrl().contains(redirectUrlForceDefaultTarget))
				{
					requestCache.removeRequest(request, response);
					break;
				}
			}
		}
		getCustomerFacade().loginSuccess();
		request.setAttribute(WebConstants.CART_MERGED, Boolean.FALSE);

		// Check if the user is in role admingroup
		if (!isAdminAuthority(authentication))
		{
			getCartRestorationStrategy().restoreCart(request);
			getBruteForceAttackCounter().resetUserCounter(getCustomerFacade().getCurrentCustomerUid());
			getCustomerConsentDataStrategy().populateCustomerConsentDataInSession();
			super.onAuthenticationSuccess(request, response, authentication);
		}
		else
		{
			LOG.warn("Invalidating session for user in the " + Constants.USER.ADMIN_USERGROUP + " group");
			invalidateSession(request, response);
		}

	}

	/**
	 * @param request
	 */
	private void populateSoldToSelectionData(final HttpServletRequest request)
	{
		Stopwatch stopwatch = Stopwatch.createStarted();
		LOG.info("populateSoldToSelectionData BHGEStorefrontAuthenticationSuccessHandler - Start: "+ stopwatch );
		
		final UserModel user = userService.getCurrentUser();
		if (null != user && user instanceof GEEdgeCustomerModel)
		{
			final GEEdgeCustomerModel geEdgeCustomer = (GEEdgeCustomerModel) user;
			final Set<B2BUnitModel> soldToList = bhgeUserProfileFacade.getSoldToListForUser();
			final B2BUnitModel defaultB2BUnitModel = geEdgeCustomer.getDefaultB2BUnit();

			if (defaultB2BUnitModel != null)
			{
				sessionService.setAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO,
						bhgeSoldToUtil.getBHGESoldToData(defaultB2BUnitModel));
				sessionService.setAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO_NAME,
						defaultB2BUnitModel.getLocName() + " - " + defaultB2BUnitModel.getUid());
			}

			final Map<String, List<SalesAreaData>> soldToSalesAreaMap = new TreeMap<String, List<SalesAreaData>>();
			final List<B2BUnitData> allParentSoldTos = new ArrayList<B2BUnitData>();
			for (final B2BUnitModel parentSoldTo : soldToList)
			{
				final B2BUnitData parentSoldToData = new B2BUnitData();
				parentSoldToData.setUid(parentSoldTo.getUid());
				parentSoldToData.setName(parentSoldTo.getName());
				allParentSoldTos.add(parentSoldToData);

				final Set<B2BUnitModel> childSoldTos = bhgeUserProfileFacade.getSalesAreaForSoldTo(parentSoldTo.getUid(),
						geEdgeCustomer);
				for (final B2BUnitModel childSoldTo : childSoldTos)
				{
					if (childSoldTo.getUid() != null && childSoldTo.getUid().contains("_"))
					{
						final String[] salesAreaArr = childSoldTo.getUid().split("_");
						if (salesAreaArr != null && salesAreaArr.length >= 3)
						{
							final SalesAreaData salesAreaData = new SalesAreaData();
							final SAPConfigurationModel baseStoreConfiguration = baseStoreService
									.findSAPConfigurationWithParams(salesAreaArr[1], salesAreaArr[2], salesAreaArr[3]);
							if (baseStoreConfiguration != null)
							{
								final BaseStoreModel baseStore = baseStoreService
										.findBaseStoreBySAPConfiguration(baseStoreConfiguration.getPk().toString());
								if (baseStore != null)
								{
									salesAreaData.setBaseStoreName(baseStore.getName());
									salesAreaData.setB2bUnitUid(childSoldTo.getUid());
									salesAreaData.setB2bUnitName(childSoldTo.getName());
									if (childSoldTo.getCurrency() != null)
									{
										salesAreaData.setCurrencyIso(childSoldTo.getCurrency().getIsocode());
										salesAreaData.setCurrencySymbol(childSoldTo.getCurrency().getSymbol());
									}
									salesAreaData.setSalesOrg(baseStoreConfiguration.getSapcommon_salesOrganization());
								}
							}

							if (soldToSalesAreaMap.get(parentSoldToData.getUid()) != null)
							{
								soldToSalesAreaMap.get(parentSoldToData.getUid()).add(salesAreaData);
							}
							else
							{
								final List<SalesAreaData> salesAreaList = new ArrayList<SalesAreaData>();
								salesAreaList.add(salesAreaData);
								soldToSalesAreaMap.put(parentSoldToData.getUid(), salesAreaList);
							}

							if (defaultB2BUnitModel.getUid().equalsIgnoreCase(childSoldTo.getUid()))
							{
								final String[] defaultParentB2BUnit = StringUtils.split(defaultB2BUnitModel.getUid(), "_");
								if (StringUtils.isNotEmpty(defaultParentB2BUnit[0]))
								{
									final B2BUnitModel soldtoUnit = (B2BUnitModel) b2bUnitService.getUnitForUid(defaultParentB2BUnit[0]);
									final String mediaURL = CollectionUtils.isNotEmpty(soldtoUnit.getMedias())
											&& soldtoUnit.getMedias().iterator().hasNext()
													? soldtoUnit.getMedias().iterator().next().getURL().toString()
													: "";
									salesAreaData.setCompanyLogoURL(mediaURL);
								}

								request.getSession().setAttribute("defaultSalesAreaData", salesAreaData);
								sessionService.setAttribute("defaultSalesAreaData", salesAreaData);
							}
						}
					}
				}
			}

			request.getSession().setAttribute("allParentSoldTos", allParentSoldTos);
			sessionService.setAttribute("allParentSoldTos", allParentSoldTos);

			request.getSession().setAttribute("soldToListMap", soldToSalesAreaMap);
			sessionService.setAttribute("soldToListMap", soldToSalesAreaMap);
		}
		
		stopwatch.stop();
		long timeElapsed = stopwatch.elapsed(TimeUnit.MILLISECONDS);
		LOG.info("populateSoldToSelectionData BHGEStorefrontAuthenticationSuccessHandler - End: "+ timeElapsed);
	}

}
