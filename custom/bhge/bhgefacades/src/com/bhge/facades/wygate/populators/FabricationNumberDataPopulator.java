package com.bhge.facades.wygate.populators;

import org.apache.log4j.Logger;

import com.bhge.core.model.DSChemistryDataModel;
import com.bhge.facades.data.WygateCaliberationData;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

public class FabricationNumberDataPopulator implements Populator<DSChemistryDataModel, WygateCaliberationData> {

	private static final Logger LOG = Logger.getLogger(FabricationNumberDataPopulator.class);
	
	@Override
	public void populate(DSChemistryDataModel source, WygateCaliberationData target) throws ConversionException {
		LOG.info("Inside DSChemistryDataPopulator");
		if(source != null && source.getFabricationNumber() != null) {
			target.setNumber(source.getFabricationNumber());
			target.setFoundInDB(true);
			target.setCaliberationType("FABRICATION");
		}
		else {
			target.setFoundInDB(false);			
		}
	}
}
