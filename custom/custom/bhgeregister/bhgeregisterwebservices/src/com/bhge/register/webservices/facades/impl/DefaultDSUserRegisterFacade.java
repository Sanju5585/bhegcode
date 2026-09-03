/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.register.webservices.facades.impl;

import com.bhge.register.application.mncecommerce.service.BhgeregistermncecommapplicationService;
import com.bhge.register.connector.services.UserManagerService;
import com.bhge.register.integration.oidc.service.BhgeregisteroidcintegrationService;
import com.bhge.register.webservices.facades.DSUserRegisterFacade;
import com.bhge.register.webservices.services.SubmitRegisterRequestService;
import com.bhge.register.webservices.services.UserManagerRegisterService;
import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.region.CacheRegion;
import de.hybris.platform.servicelayer.user.UserService;
import org.apache.log4j.Logger;
import org.springframework.web.multipart.MultipartFile;
import de.hybris.platform.core.model.media.MediaModel;

import jakarta.annotation.Resource;


public class DefaultDSUserRegisterFacade implements DSUserRegisterFacade
{
	private static final Logger LOG = Logger.getLogger(DefaultDSUserRegisterFacade.class);
	SubmitRegisterRequestService submitRegisterRequestService;
	BhgeregisteroidcintegrationService bhgeregisteroidcintegrationService;
	BhgeregistermncecommapplicationService bhgeregistermncecommapplicationService;
	UserManagerService userManagerService;
	UserManagerRegisterService userManagerRegisterService;

	@Resource(name="userService")
	UserService userService;

	private CacheRegion registerCacheRegion;

	private CacheValueLoader registerCacheValueLoader;
	@Override
	public BHGERegisterResponse getDetails(String productLine){
		BHGERegisterResponse bhgeRegisterResponse = new BHGERegisterResponse();
		BHGERegisterResponse tempBHFEResponse = null;
		//sub product line
		tempBHFEResponse = submitRegisterRequestService.fetchProducts("SUBPRODUCTLINE", productLine);
		if(tempBHFEResponse != null)
		{
			bhgeRegisterResponse.setSubProductList(tempBHFEResponse.getProductList());
		}
		tempBHFEResponse=submitRegisterRequestService.fetchCountry();
		if(tempBHFEResponse != null)
		{
			bhgeRegisterResponse.setCountryList(tempBHFEResponse.getCountryList());
		}
		//market organization
		tempBHFEResponse=submitRegisterRequestService.fetchAccountType("ACCOUNTTYPE");
		if(tempBHFEResponse != null)
		{
			bhgeRegisterResponse.setAccountTypeList(tempBHFEResponse.getAccountTypeList());
		}
		//market operates
		tempBHFEResponse = submitRegisterRequestService.fetchProducts("DSMARKET", productLine);
		if(tempBHFEResponse != null)
		{
			bhgeRegisterResponse.setDsMarket(tempBHFEResponse.getProductList());
		}
		//roles
		tempBHFEResponse = submitRegisterRequestService.fetchProducts("DSROLES", productLine);
		if(tempBHFEResponse != null)
		{
			bhgeRegisterResponse.setDsRoles(tempBHFEResponse.getProductList());
		}
		return bhgeRegisterResponse;
	}

	@Override
	public BHGERegisterResponse fetchSSOForEmail(final BHGERegisterRequest ssoDetails)
	{
		return bhgeregisteroidcintegrationService.fetchSSOForEmail(ssoDetails);
	}

	@Override
	public BHGERegisterResponse checkSSOAvailability(final BHGERegisterRequest ssoDetails)
	{
		return bhgeregisteroidcintegrationService.checkSSOAvailability(ssoDetails);
	}


	/**
	 * @return the bhgeregisteroidcintegrationService
	 */
	public BhgeregisteroidcintegrationService getBhgeregisteroidcintegrationService()
	{
		return bhgeregisteroidcintegrationService;
	}

	/**
	 * @param bhgeregisteroidcintegrationService
	 *           the bhgeregisteroidcintegrationService to set
	 */
	public void setBhgeregisteroidcintegrationService(final BhgeregisteroidcintegrationService bhgeregisteroidcintegrationService)
	{
		this.bhgeregisteroidcintegrationService = bhgeregisteroidcintegrationService;
	}

	/**
	 * @return the bhgeregistermncecommapplicationService
	 */
	public BhgeregistermncecommapplicationService getBhgeregistermncecommapplicationService()
	{
		return bhgeregistermncecommapplicationService;
	}

	/**
	 * @param bhgeregistermncecommapplicationService
	 *           the bhgeregistermncecommapplicationService to set
	 */
	public void setBhgeregistermncecommapplicationService(
			final BhgeregistermncecommapplicationService bhgeregistermncecommapplicationService)
	{
		this.bhgeregistermncecommapplicationService = bhgeregistermncecommapplicationService;
	}
	public MediaModel saveKYCAttachment(MultipartFile KYCAttachment) {
		return submitRegisterRequestService.saveKYCAttachment(KYCAttachment);
	}
	public MediaModel saveOSAttachment(MultipartFile OSAttachment) {
		return submitRegisterRequestService.saveOSAttachment(OSAttachment);
	}

	@Override
	public BHGERegisterResponse submitDetails(final BHGERegisterRequest submitDetails)
	{
		return submitRegisterRequestService.submitDetails(submitDetails);
	}

	@Override
	public BHGERegisterResponse customerNumberValidation(final BHGERegisterRequest customerNumberDetails)
	{
		return submitRegisterRequestService.customerNumberValidation(customerNumberDetails);
	}

	public UserManagerRegisterService getUserManagerRegisterService()
	{
		return userManagerRegisterService;
	}

	/**
	 * @param userManagerRegisterService
	 *           the userManagerRegisterService to set
	 */
	public void setUserManagerRegisterService(final UserManagerRegisterService userManagerRegisterService)
	{
		this.userManagerRegisterService = userManagerRegisterService;
	}

	/**
	 * @return the userManagerService
	 */
	public UserManagerService getUserManagerService()
	{
		return userManagerService;
	}

	/**
	 * @param userManagerService
	 *           the userManagerService to set
	 */
	public void setUserManagerService(final UserManagerService userManagerService)
	{
		this.userManagerService = userManagerService;
	}

	public SubmitRegisterRequestService getSubmitRegisterRequestService()
	{
		return submitRegisterRequestService;
	}

	/**
	 * @param submitRegisterRequestService
	 *           the submitRegisterRequestService to set
	 */
	public void setSubmitRegisterRequestService(final SubmitRegisterRequestService submitRegisterRequestService)
	{
		this.submitRegisterRequestService = submitRegisterRequestService;
	}

}
