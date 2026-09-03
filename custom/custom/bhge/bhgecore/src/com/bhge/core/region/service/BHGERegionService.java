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
package com.bhge.core.region.service;

import de.hybris.platform.core.model.c2l.RegionModel;

import java.util.List;


public interface BHGERegionService
{
	RegionModel getRegionByCountryAndCode(final String countryCode, final String regionCode);

	List<RegionModel> getRegionsForCountryCode(final String countryCode);

}
