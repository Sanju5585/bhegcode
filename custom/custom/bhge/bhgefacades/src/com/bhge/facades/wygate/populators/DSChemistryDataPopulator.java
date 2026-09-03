package com.bhge.facades.wygate.populators;

import com.bhge.core.model.DSChemistryDataModel;
import com.bhge.facades.data.DSWygateChemistryData;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

public class DSChemistryDataPopulator implements Populator<DSChemistryDataModel, DSWygateChemistryData>{

	@Override
	public void populate(DSChemistryDataModel source, DSWygateChemistryData target) throws ConversionException {
		// TODO Auto-generated method stub
		target.setArtoms(source.getExpiry());
		target.setFabricationNumber(source.getFabricationNumber());
		target.setPart(source.getPart());
		target.setMabcCode(source.getMabcCode());
		target.setShippingContent(source.getShippingContent());
		target.setExpiry(source.getExpiry());
		target.setType(source.getType());	
	}
}
