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
package com.bhge.register.application.mncecommerce.service;

import java.util.List;

import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;


public interface BhgeregistermncecommapplicationService
{
	String getHybrisLogoUrl(String logoCode);

	void createLogo(String logoCode);

	public BHGERegisterResponse executeSAPLookup(final List<BHGERegisterRequest> registerRequestList);

	public BHGERegisterResponse executeSAPLookup(final List<BHGERegisterRequest> registerRequestList, final String store);
	public BHGERegisterResponse executeSAPSalesArea(final List<BHGERegisterRequest> registerRequestList);

}
