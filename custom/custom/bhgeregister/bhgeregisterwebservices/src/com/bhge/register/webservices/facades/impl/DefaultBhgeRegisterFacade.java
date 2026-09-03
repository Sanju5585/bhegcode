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

import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.region.CacheRegion;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.mail2.core.EmailException;
import org.apache.log4j.Logger;

import com.bhge.register.application.mncecommerce.service.BhgeregistermncecommapplicationService;
import com.bhge.register.connector.services.UserManagerService;
import com.bhge.register.integration.oidc.service.BhgeregisteroidcintegrationService;
import com.bhge.register.webservices.email.EmailService;
import com.bhge.register.webservices.facades.BhgeRegisterFacade;
import com.bhge.register.webservices.services.SubmitRegisterRequestService;
import com.bhge.register.webservices.services.UserManagerRegisterService;
import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import com.bhgeregister.dto.BHGEUserManagerRequest;
import com.bhgeregister.dto.BHGEUserManagerResponse;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import com.bhge.register.webservices.dao.RegisterUserDao;


public class DefaultBhgeRegisterFacade implements BhgeRegisterFacade
{

	private static final Logger LOG = Logger.getLogger(DefaultBhgeRegisterFacade.class);

	BhgeregisteroidcintegrationService bhgeregisteroidcintegrationService;

	BhgeregistermncecommapplicationService bhgeregistermncecommapplicationService;

	SubmitRegisterRequestService submitRegisterRequestService;

	UserManagerService userManagerService;

	UserManagerRegisterService userManagerRegisterService;

	private CacheRegion registerCacheRegion;

	private CacheValueLoader registerCacheValueLoader;

	private EmailService emailService;
	private RegisterUserDao registerDao;
		
	/**
	 * @return the registerDao
	 */
	public RegisterUserDao getRegisterDao() {
		return registerDao;
	}

	/**
	 * @param registerDao the registerDao to set
	 */
	public void setRegisterDao(final RegisterUserDao registerDao) {
		this.registerDao = registerDao;
	}

	/**
	 * @return the emailService
	 */
	public EmailService getEmailService()
	{
		return emailService;
	}

	/**
	 * @param emailService
	 *           the emailService to set
	 */
	public void setEmailService(final EmailService emailService)
	{
		this.emailService = emailService;
	}

	/**
	 * @return the userManagerRegisterService
	 */
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

	/**
	 * @return the submitRegisterRequestService
	 */
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

	@Override
	public BHGERegisterResponse createB2BSSO(final BHGERegisterRequest ssoDetails)
	{
		return bhgeregisteroidcintegrationService.createB2BSSO(ssoDetails);
	}

	@Override
	public BHGERegisterResponse checkSSOAvailability(final BHGERegisterRequest ssoDetails)
	{
		return bhgeregisteroidcintegrationService.checkSSOAvailability(ssoDetails);
	}

	@Override
	public BHGERegisterResponse getAvailableSSOIds(final BHGERegisterRequest ssoDetails)
	{
		return bhgeregisteroidcintegrationService.getAvailableSSOIds(ssoDetails);
	}

	@Override
	public BHGERegisterResponse fetchSSOForEmail(final BHGERegisterRequest ssoDetails)
	{
		return bhgeregisteroidcintegrationService.fetchSSOForEmail(ssoDetails);
	}

	@Override
	public BHGERegisterResponse executeSAPLookup(final BHGERegisterRequest customerDetails)
	{
		final List<BHGERegisterRequest> registerRequestList = new ArrayList<>();
		registerRequestList.add(customerDetails);
		return bhgeregistermncecommapplicationService.executeSAPLookup(registerRequestList);
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

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.facades.BhgeRegisterFacade#revokeAccess(com.bhgeregister.dto.BHGERegisterRequest)
	 */
	@Override
	public boolean revokeAccess(final BHGEUserManagerRequest serviceRequest)
	{
		return getUserManagerRegisterService().revokeAccess(serviceRequest);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.facades.BhgeRegisterFacade#addToGroup(com.bhgeregister.dto.BHGERegisterRequest)
	 */
	@Override
	public BHGEUserManagerResponse addToGroup(final BHGEUserManagerRequest serviceRequest)
	{
		return getUserManagerService().addToGroup(serviceRequest);
	}

	@Override
	public BHGERegisterResponse ssoAssignment(final BHGERegisterRequest ssoDetails)
	{
		return submitRegisterRequestService.createReverseFlowForIdoc(ssoDetails, null);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.facades.BhgeRegisterFacade#fetchUsers(com.bhgeregister.dto.BHGERegisterRequest)
	 */
	@Override
	public BHGEUserManagerResponse fetchUsers(final BHGEUserManagerRequest serviceRequest)
	{
		return getUserManagerRegisterService().fetchUsers(serviceRequest);
	}

	/* Anish */
	@Override
	public Map<String, Object> fetchAllUsers(final BHGEUserManagerRequest serviceRequest)
	{
		return getUserManagerRegisterService().fetchAllUsers(serviceRequest);
	}

	@Override
	public BHGEUserManagerResponse fetchUpdateProfileUsers(final BHGEUserManagerRequest serviceRequest)
	{
		return getUserManagerRegisterService().fetchUpdateProfileUsers(serviceRequest);
	}

	@Override
	public boolean submitAccessRequest(final String role, final String comment, final String curr_uid)
	{
		return submitRegisterRequestService.submitAccessRequest(role, comment, curr_uid);
	}

	/* Anish */

	public String loadActivateAccount(final String userName) throws CMSItemNotFoundException, EmailException
	{
		if (submitRegisterRequestService.checkActivateAccount(userName))
		{
			return "ACTIVE";
		}
		return submitRegisterRequestService.loadActivateAccount(userName);
	}

	public BHGERegisterResponse validateActivateAccount(final String userName, final String userToken)
			throws CMSItemNotFoundException, EmailException
	{
		final BHGERegisterResponse registerResponse = new BHGERegisterResponse();
		final List<BHGEUserAccessRequestModel> fetchedModelList = registerDao.fetchOrderTrackingAccess(userName);
		for (final BHGEUserAccessRequestModel bhgeUserAccessRequestModel : fetchedModelList) {
			final String flag = bhgeUserAccessRequestModel.getRequestStatus().toString();
			if (flag.equalsIgnoreCase("CANCELLED"))
			{
				LOG.info("Request Cancelled - " + userName);
				registerResponse.setStatusCode("CANCEL");
				return registerResponse;
			}
		}
		if (submitRegisterRequestService.checkActivateAccount(userName))
		{
			registerResponse.setStatusCode("ACTIVE");
			return registerResponse;
		}
		final String storeToken = submitRegisterRequestService.loadActivateAccount(userName);
		if (storeToken != null && storeToken.equals(userToken))
		{
			LOG.info("Activation PASS - " + userName);
			submitRegisterRequestService.validateActivateAccount(userName);
			registerResponse.setStatusCode("SUCCESS");
		}
		else
		{
			LOG.info("Activation FAIL - " + userName);
			registerResponse.setStatusCode("FAILURE");
		}
		return registerResponse;
	}


	public BHGERegisterResponse cancelRequest(final String userName, final String userToken)
			throws CMSItemNotFoundException, EmailException
	{
		final BHGERegisterResponse registerResponse = new BHGERegisterResponse();
		if (submitRegisterRequestService.checkActivateAccount(userName))
		{
			registerResponse.setStatusCode("ACTIVE");
			return registerResponse;
		}
		final String storeToken = submitRegisterRequestService.loadActivateAccount(userName);
		if (storeToken != null && storeToken.equals(userToken))
		{
			LOG.info("Activation PASS - " + userName);
			submitRegisterRequestService.cancelAccessRequest(userName);
			registerResponse.setStatusCode("CANCEL");
		}
		else
		{
			LOG.info("Activation FAIL - " + userName);
			registerResponse.setStatusCode("FAILURE");
		}
		return registerResponse;
	}

	/**
	 * @return the registerCacheRegion
	 */
	public CacheRegion getRegisterCacheRegion()
	{
		return registerCacheRegion;
	}

	/**
	 * @param registerCacheRegion
	 *           the registerCacheRegion to set
	 */
	public void setRegisterCacheRegion(final CacheRegion registerCacheRegion)
	{
		this.registerCacheRegion = registerCacheRegion;
	}

	/**
	 * @return the registerCacheValueLoader
	 */
	public CacheValueLoader getRegisterCacheValueLoader()
	{
		return registerCacheValueLoader;
	}

	/**
	 * @param registerCacheValueLoader
	 *           the registerCacheValueLoader to set
	 */
	public void setRegisterCacheValueLoader(final CacheValueLoader registerCacheValueLoader)
	{
		this.registerCacheValueLoader = registerCacheValueLoader;
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.facades.BhgeRegisterFacade#managerProcessRequest(com.bhgeregister.dto.
	 * BHGEUserManagerRequest)
	 */
	@Override
	public boolean managerProcessRequest(final BHGEUserManagerRequest serviceRequest)
	{
		boolean processRequest;
		processRequest = getUserManagerRegisterService().managerProcessRequest(serviceRequest);
		return processRequest;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.bhge.register.webservices.facades.BhgeRegisterFacade#provideAccess(com.bhgeregister.dto.BHGEUserManagerRequest)
	 */
	@Override
	public boolean provideAccess(final BHGEUserManagerRequest serviceRequest)
	{
		return getUserManagerRegisterService().provideAccess(serviceRequest);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.facades.BhgeRegisterFacade#fetchApplications()
	 */
	@Override
	public BHGERegisterResponse fetchApplications(final String userName)
	{
		return submitRegisterRequestService.fetchApplications(userName);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.facades.BhgeRegisterFacade#fetchProductLines()
	 */
	@Override
	public BHGERegisterResponse fetchCountry()
	{
		return submitRegisterRequestService.fetchCountry();
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.facades.BhgeRegisterFacade#fetchProducts()
	 */
	@Override
	public BHGERegisterResponse fetchProducts(final String appName, String productLine)
	{
		return submitRegisterRequestService.fetchProducts(appName, productLine);
	}

	// US8159: FPT Valv store changes start
	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.facades.BhgeRegisterFacade#fetchUserRolesFPT()
	 */
	public BHGERegisterResponse fetchUserRolesFPT(final String appName)
	{
		return submitRegisterRequestService.fetchUserRolesFPT(appName);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.facades.BhgeRegisterFacade#fetchUserRolesFPT()
	 */
	public BHGERegisterResponse fetchVSLegalEntities(final String appName)
	{
		return submitRegisterRequestService.fetchVSLegalEntities(appName);
	}

	// US8159: FPT Valv store changes end
	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.facades.BhgeRegisterFacade#fetchOrderTrackingAccess()
	 */
	@Override
	public String fetchOrderTrackingAccess(final String userSSO)
	{
		return submitRegisterRequestService.fetchOrderTrackingAccess(userSSO);
	}

	public String loadReactivateAccount(final String userName) throws CMSItemNotFoundException, EmailException
	{
		if (submitRegisterRequestService.checkReactivateAccount(userName))
		{
			return "NOCHANGE";
		}
		return submitRegisterRequestService.loadReactivateAccount(userName);
	}

	public BHGERegisterResponse validateReactivateAccount(final String userName, final String userToken)
			throws CMSItemNotFoundException, EmailException
	{
		final BHGERegisterResponse registerResponse = new BHGERegisterResponse();
		if (submitRegisterRequestService.checkReactivateAccount(userName))
		{
			registerResponse.setStatusCode("NOCHANGE");
			return registerResponse;
		}
		final String storeToken = submitRegisterRequestService.loadReactivateAccount(userName);
		if (storeToken != null && storeToken.equals(userToken))
		{
			LOG.info("Activation PASS - " + userName);
			submitRegisterRequestService.validateReactivateAccount(userName);
			registerResponse.setStatusCode("ENABLED");
		}
		else
		{
			LOG.info("Activation FAIL - " + userName);
			registerResponse.setStatusCode("DISABLED");
		}
		return registerResponse;
	}
	
	@Override
	public boolean accessToApplication(final String applicationId)
	{
		return submitRegisterRequestService.accessToApplication(applicationId);
	}

	@Override
	public BHGERegisterResponse fetchAccountType(String appName) {
		return submitRegisterRequestService.fetchAccountType(appName);
	}

	public boolean isSystemDisabled(final String accountCode)
	{
		return submitRegisterRequestService.isSystemDisabled(accountCode);
	}

	/* F&PT Customer Account Number SAP check start */
	@Override
	public BHGERegisterResponse fetchSapForCustomer(final String customerAccNumber)
	{
		return submitRegisterRequestService.fetchSapForCustomer(customerAccNumber);
	}
	
	@Override
	public String customerDetails(final String uid)
	{
		return submitRegisterRequestService.customerDetails(uid);
	}
	
	@Override
	public String allowAllAddress()
	{
		return submitRegisterRequestService.allowAllAddress();
	}
	/* F&PT Customer Account Number SAP check end */
}
