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
package com.bhge.register.integration.oidc.setup;

import static com.bhge.register.integration.oidc.constants.BhgeregisteroidcintegrationConstants.PLATFORM_LOGO_CODE;

import de.hybris.platform.core.initialization.SystemSetup;

import com.bhge.register.integration.oidc.constants.BhgeregisteroidcintegrationConstants;
import com.bhge.register.integration.oidc.service.BhgeregisteroidcintegrationService;


@SystemSetup(extension = BhgeregisteroidcintegrationConstants.EXTENSIONNAME)
public class BhgeregisteroidcintegrationSystemSetup
{
	private final BhgeregisteroidcintegrationService bhgeregisteroidcintegrationService;

	public BhgeregisteroidcintegrationSystemSetup(final BhgeregisteroidcintegrationService bhgeregisteroidcintegrationService)
	{
		this.bhgeregisteroidcintegrationService = bhgeregisteroidcintegrationService;
	}

	@SystemSetup(process = SystemSetup.Process.INIT, type = SystemSetup.Type.ESSENTIAL)
	public void createEssentialData()
	{
		bhgeregisteroidcintegrationService.createLogo(PLATFORM_LOGO_CODE);
	}
}
