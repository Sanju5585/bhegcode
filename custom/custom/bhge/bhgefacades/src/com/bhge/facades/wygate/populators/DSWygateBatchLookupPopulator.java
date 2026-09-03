package com.bhge.facades.wygate.populators;

import com.bhge.core.model.DSWaygateBatchLookupModel;
import com.bhge.facades.data.DSWygateBatchLookupData;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

public class DSWygateBatchLookupPopulator  implements Populator<DSWaygateBatchLookupModel, DSWygateBatchLookupData>{

	@Override
	public void populate(DSWaygateBatchLookupModel source, DSWygateBatchLookupData target) throws ConversionException {
		if(source != null) {
			target.setType(source.getType());
			target.setClassType(source.getClas());
			target.setAvgContrast(source.getAvgContrast());
			target.setG2(source.getG2());
			target.setG4(source.getG4());
			target.setGSigmaD(source.getGSigmaD());
			target.setIr192(source.getIR192());
			target.setIsoSpeed(source.getISOSpeed());
			target.setKsmGy(source.getKsmGy());
			target.setKv120(source.getKV120());
			target.setSigmaD2(source.getSigmaD2());
		}
	}

}
