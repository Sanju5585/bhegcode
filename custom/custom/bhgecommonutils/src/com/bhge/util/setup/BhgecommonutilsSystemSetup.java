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
package com.bhge.util.setup;

import static com.bhge.util.constants.BhgecommonutilsConstants.PLATFORM_LOGO_CODE;

import de.hybris.platform.core.initialization.SystemSetup;

import java.io.InputStream;

import com.bhge.util.constants.BhgecommonutilsConstants;
import com.bhge.util.service.BhgecommonutilsService;


@SystemSetup(extension = BhgecommonutilsConstants.EXTENSIONNAME)
public class BhgecommonutilsSystemSetup
{
	private final BhgecommonutilsService bhgecommonutilsService;

	public BhgecommonutilsSystemSetup(final BhgecommonutilsService bhgecommonutilsService)
	{
		this.bhgecommonutilsService = bhgecommonutilsService;
	}

	@SystemSetup(process = SystemSetup.Process.INIT, type = SystemSetup.Type.ESSENTIAL)
	public void createEssentialData()
	{
		bhgecommonutilsService.createLogo(PLATFORM_LOGO_CODE);
	}

	private InputStream getImageStream()
	{
		return BhgecommonutilsSystemSetup.class.getResourceAsStream("/bhgecommonutils/sap-hybris-platform.png");
	}
}
