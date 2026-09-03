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
package com.bhge.register.integration.oidc.service;

import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;


public interface BhgeregisteroidcintegrationService
{
	String getHybrisLogoUrl(String logoCode);

	void createLogo(String logoCode);

	public BHGERegisterResponse createB2BSSO(BHGERegisterRequest ssoDetails);
	
	public BHGERegisterResponse updateExistingUserInOKTA(BHGERegisterRequest ssoDetails);

	public BHGERegisterResponse checkSSOAvailability(BHGERegisterRequest ssoDetails);

	public BHGERegisterResponse getAvailableSSOIds(BHGERegisterRequest ssoDetails);

	public BHGERegisterResponse fetchSSOForEmail(BHGERegisterRequest ssoDetails);


}
