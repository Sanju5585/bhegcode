package com.bhge.facades.user.populators;

import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.model.BHGECategorytoSalesOrgModel;
import com.bhge.facades.user.data.BHGEAnonymousUserCatalogData;
import com.bhge.facades.user.data.BHGECategorytoSalesOrgData;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

public class BHGEAnonymousGuestSalesPopulaor implements Populator<BHGECategorytoSalesOrgModel, BHGECategorytoSalesOrgData>
{

	@Override
	public void populate(BHGECategorytoSalesOrgModel source, BHGECategorytoSalesOrgData target)
			throws ConversionException {
		target.setSalesOrg(source.getSalesOrg());
		target.setDistributionChannel(source.getDistributionChannel());
		target.setDivision(source.getDivision());

	}

	
	
}
