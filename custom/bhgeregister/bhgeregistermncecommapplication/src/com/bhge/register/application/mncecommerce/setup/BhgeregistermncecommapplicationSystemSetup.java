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
package com.bhge.register.application.mncecommerce.setup;

import static com.bhge.register.application.mncecommerce.constants.BhgeregistermncecommapplicationConstants.PLATFORM_LOGO_CODE;

import de.hybris.platform.core.initialization.SystemSetup;

import com.bhge.register.application.mncecommerce.constants.BhgeregistermncecommapplicationConstants;
import com.bhge.register.application.mncecommerce.service.BhgeregistermncecommapplicationService;


@SystemSetup(extension = BhgeregistermncecommapplicationConstants.EXTENSIONNAME)
public class BhgeregistermncecommapplicationSystemSetup
{
	private final BhgeregistermncecommapplicationService bhgeregistermncecommapplicationService;

	public BhgeregistermncecommapplicationSystemSetup(
			final BhgeregistermncecommapplicationService bhgeregistermncecommapplicationService)
	{
		this.bhgeregistermncecommapplicationService = bhgeregistermncecommapplicationService;
	}

	@SystemSetup(process = SystemSetup.Process.INIT, type = SystemSetup.Type.ESSENTIAL)
	public void createEssentialData()
	{
		bhgeregistermncecommapplicationService.createLogo(PLATFORM_LOGO_CODE);
	}
}
