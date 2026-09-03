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
package com.bhge.core.region.service.impl;


import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.RegionModel;
import de.hybris.platform.servicelayer.i18n.daos.CountryDao;
import de.hybris.platform.servicelayer.i18n.daos.RegionDao;

import java.util.Collections;
import java.util.List;

import org.apache.log4j.Logger;


import com.bhge.core.region.service.BHGERegionService;


public class BHGERegionServiceImpl implements BHGERegionService
{

	private static final Logger LOG = Logger.getLogger(BHGERegionServiceImpl.class);

	private RegionDao regionDao;
	private CountryDao countryDao;


	/*
	 * (non-Javadoc)
	 * 
	 * @see de.hybris.platform.chinaacceleratorservices.core.service.RegionService#getRegionForCode(java.lang.String)
	 */
	@Override
	public RegionModel getRegionByCountryAndCode(final String countryCode, final String regionCode)
	{
		final List<CountryModel> countries = countryDao.findCountriesByCode(countryCode);
		if (countries.isEmpty())
		{
			return null;
		}
		final CountryModel countryModel = countries.get(0);


		final List<RegionModel> result = regionDao.findRegionsByCountryAndCode(countryModel, regionCode);
		if (result == null || result.size() == 0)
		{
			LOG.info("Returning null. No region found for countrycode=" + countryCode + " and regionCode=" + regionCode);
			return null;
		}
		else
		{
			if (result.size() > 1)
			{
				LOG.warn("Returning 1st one found. More than 1 region found! For countryCode=" + countryCode + " and regionCode="
						+ regionCode);
			}
			final RegionModel region = result.get(0);

			return region;
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * de.hybris.platform.chinaacceleratorservices.core.service.RegionService#getRegionsForCountryCode(java.lang.String)
	 */
	@Override
	public List<RegionModel> getRegionsForCountryCode(final String countryCode)
	{
		final List<CountryModel> countries = countryDao.findCountriesByCode(countryCode);

		if (countries.isEmpty())
		{
			return Collections.EMPTY_LIST;
		}
		else
		{
			final CountryModel countryModel = countries.get(0);
			final List<RegionModel> regions = this.regionDao.findRegionsByCountry(countryModel);

			if (regions == null || regions.size() == 0)
			{
				LOG.info("Returning null. No regions found for countrycode=" + countryCode);
				return null;
			}
			else
			{
				return regions;
			}
		}
	}

	
	public void setRegionDao(final RegionDao regionDao)
	{
		this.regionDao = regionDao;
	}

	
	public void setCountryDao(final CountryDao countryDao)
	{
		this.countryDao = countryDao;
	}
}
