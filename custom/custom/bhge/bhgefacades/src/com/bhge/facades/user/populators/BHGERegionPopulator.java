/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.bhge.facades.user.populators;

import de.hybris.platform.commercefacades.user.data.RegionData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.c2l.RegionModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.commercefacades.user.converters.populator.RegionPopulator;
import org.apache.log4j.Logger;
import org.apache.commons.lang3.StringUtils;

import org.springframework.util.Assert;


/**
 *
 */
public class BHGERegionPopulator extends RegionPopulator
{
	private static final Logger LOG = Logger.getLogger(BHGERegionPopulator.class);
	@Override
	public void populate(final RegionModel source, final RegionData target) throws ConversionException
	{
		Assert.notNull(source, "Parameter source cannot be null.");
		Assert.notNull(target, "Parameter target cannot be null.");
				
		if((source.getActive() == true) && StringUtils.isNotBlank(source.getName()))
		{	
		target.setName(source.getName());
		target.setIsocode(source.getIsocode());
		target.setIsocodeShort(source.getIsocodeShort());
		target.setCountryIso(source.getCountry().getIsocode());
		}
	}
}
