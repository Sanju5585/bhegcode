package com.bhge.facades.listofportals.populators;

import com.bhge.core.model.List.ListOfPortalsModel;
import com.bhge.facades.data.DSListOfPortalsData;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

public class ListOfPortalPopulator implements Populator<ListOfPortalsModel, DSListOfPortalsData>
{
	@Override
	public void populate(final ListOfPortalsModel source, final DSListOfPortalsData target) 
	{
		target.setUrl(source.getUrl());
		target.setSiteName(source.getSiteName());
		target.setProductLine(source.getProductLine());
		target.setDescription(source.getDescription());
		target.setType(source.getType());
		target.setLoginRequired(source.getLoginRequired());
		
	}
}