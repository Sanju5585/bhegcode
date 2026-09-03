package com.bhge.facades.user.populators;
import org.springframework.util.Assert;

import com.bhge.facades.calportal.CalibrationProductFamilyData;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;


public class CalibrationProductFamilyPopulator implements Populator<BHGERegisterKeyValueDataModel, CalibrationProductFamilyData> {

	@Override
	public void populate(BHGERegisterKeyValueDataModel source, CalibrationProductFamilyData target) throws ConversionException {
		// TODO Auto-generated method stub
		
		Assert.notNull(source, "Parameter source cannot be null.");
		Assert.notNull(target, "Parameter target cannot be null.");

		target.setAttributeType(source.getAttributeType());
		target.setAttributeKey(source.getAttributeKey());
		target.setAttributeId(source.getAttributeId());
		target.setAttributeValue(source.getAttributeValue());
		target.setExternalLookupId(source.getExternalLookupId());
				
	}

}
