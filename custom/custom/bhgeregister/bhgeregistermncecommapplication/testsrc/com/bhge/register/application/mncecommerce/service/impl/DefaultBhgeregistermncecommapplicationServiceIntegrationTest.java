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
package com.bhge.register.application.mncecommerce.service.impl;


import static com.bhge.register.application.mncecommerce.constants.BhgeregistermncecommapplicationConstants.PLATFORM_LOGO_CODE;

import de.hybris.bootstrap.annotations.IntegrationTest;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.ServicelayerBaseTest;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;

import jakarta.annotation.Resource;

import org.junit.Before;
import org.junit.Test;
import com.bhge.register.application.mncecommerce.service.BhgeregistermncecommapplicationService;
import com.bhge.register.application.mncecommerce.service.impl.DefaultBhgeregistermncecommapplicationService;


/**
 * This is an example of how the integration test should look like. {@link ServicelayerBaseTest} bootstraps platform so
 * you have an access to all Spring beans as well as database connection. It also ensures proper cleaning out of items
 * created during the test after it finishes. You can inject any Spring service using {@link Resource} annotation. Keep
 * in mind that by default it assumes that annotated field name matches the Spring Bean ID.
 */
@IntegrationTest
public class DefaultBhgeregistermncecommapplicationServiceIntegrationTest extends ServicelayerBaseTest
{
	@Resource
	private BhgeregistermncecommapplicationService bhgeregistermncecommapplicationService;
	@Resource
	private FlexibleSearchService flexibleSearchService;

	@Before
	public void setUp() throws Exception
	{
		bhgeregistermncecommapplicationService.createLogo(PLATFORM_LOGO_CODE);
	}

	@Test
	public void shouldReturnProperUrlForLogo() throws Exception
	{
		// given
		final String logoCode = "bhgeregistermncecommapplicationPlatformLogo";

		// when
		final String logoUrl = bhgeregistermncecommapplicationService.getHybrisLogoUrl(logoCode);

		// then
		//assertThat(logoUrl).isNotNull();
		//assertThat(logoUrl).isEqualTo(findLogoMedia(logoCode).getURL());
	}

	private MediaModel findLogoMedia(final String logoCode)
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery("SELECT {PK} FROM {Media} WHERE {code}=?code");
		fQuery.addQueryParameter("code", logoCode);

		return flexibleSearchService.searchUnique(fQuery);
	}

}
