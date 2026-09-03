package com.bhge.facades.wygate.populators;

import org.apache.log4j.Logger;

import com.bhge.core.model.DSFilmDataModel;
import com.bhge.facades.data.WygateCaliberationData;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

public class BatchNumberDataPopulator implements Populator<DSFilmDataModel, WygateCaliberationData> {

	private static final Logger LOG = Logger.getLogger(BatchNumberDataPopulator.class);

	@Override
	public void populate(DSFilmDataModel source, WygateCaliberationData target) throws ConversionException {
		LOG.info("Inside DSChemistryDataPopulator");
		if(source != null && source.getBatch() != null) {
			target.setNumber(source.getBatch());
			target.setFoundInDB(true);
			target.setCaliberationType("BATCH");
		}
		else {
			target.setFoundInDB(false);	
		}
	}
}
