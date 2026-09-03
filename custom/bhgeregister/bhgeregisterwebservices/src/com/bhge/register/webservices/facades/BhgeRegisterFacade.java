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
package com.bhge.register.webservices.facades;

import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;

import java.util.Map;

import org.apache.commons.mail2.core.EmailException;

import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import com.bhgeregister.dto.BHGEUserManagerRequest;
import com.bhgeregister.dto.BHGEUserManagerResponse;


public interface BhgeRegisterFacade
{
	public BHGERegisterResponse createB2BSSO(BHGERegisterRequest ssoDetails);

	public BHGERegisterResponse checkSSOAvailability(BHGERegisterRequest ssoDetails);

	public BHGERegisterResponse getAvailableSSOIds(BHGERegisterRequest ssoDetails);

	public BHGERegisterResponse fetchSSOForEmail(BHGERegisterRequest ssoDetails);

	public BHGERegisterResponse executeSAPLookup(final BHGERegisterRequest customerDetails);

	public BHGERegisterResponse submitDetails(final BHGERegisterRequest submitDetails);

	public BHGERegisterResponse customerNumberValidation(final BHGERegisterRequest customerNumberDetails);

	public boolean revokeAccess(BHGEUserManagerRequest serviceRequest);

	public BHGEUserManagerResponse addToGroup(BHGEUserManagerRequest serviceRequest);

	public BHGEUserManagerResponse fetchUsers(BHGEUserManagerRequest serviceRequest);

	/* Anish */
	public BHGEUserManagerResponse fetchUpdateProfileUsers(BHGEUserManagerRequest serviceRequest);

	public Map<String, Object> fetchAllUsers(BHGEUserManagerRequest serviceRequest);

	public boolean submitAccessRequest(final String role, final String comment, final String curr_uid);
	/* Anish */

	public String loadActivateAccount(String userName) throws CMSItemNotFoundException, EmailException;

	public BHGERegisterResponse validateActivateAccount(String userName, String userToken)
			throws CMSItemNotFoundException, EmailException;

	public BHGERegisterResponse cancelRequest(String userName, String userToken) throws CMSItemNotFoundException, EmailException;

	public boolean managerProcessRequest(BHGEUserManagerRequest serviceRequest);

	public boolean provideAccess(BHGEUserManagerRequest serviceRequest);

	public BHGERegisterResponse ssoAssignment(final BHGERegisterRequest ssoDetails);

	public BHGERegisterResponse fetchApplications(String userName);

	public BHGERegisterResponse fetchCountry();

	public BHGERegisterResponse fetchProducts(String appName, String productLine);

	public String fetchOrderTrackingAccess(String userSSO);

	public String loadReactivateAccount(String userName) throws CMSItemNotFoundException, EmailException;

	public BHGERegisterResponse validateReactivateAccount(String userName, String userToken)
			throws CMSItemNotFoundException, EmailException;

	public boolean isSystemDisabled(String accountCode);

	// US8159 : FPT Valv store changes start
	public BHGERegisterResponse fetchUserRolesFPT(String appName);


	public BHGERegisterResponse fetchVSLegalEntities(String appName);

	public BHGERegisterResponse fetchSapForCustomer(String customerAccNumber);
	
	public String customerDetails(String uid);
	
	public String allowAllAddress();
	
	public boolean accessToApplication(final String applicationId);
	// US8159: FPT Valv store changes end
	public BHGERegisterResponse fetchAccountType(String accounttype);

}
