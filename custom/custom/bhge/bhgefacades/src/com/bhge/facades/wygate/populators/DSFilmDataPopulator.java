package com.bhge.facades.wygate.populators;

import com.bhge.core.model.DSFilmDataModel;
import com.bhge.core.model.DSWaygateBatchLookupModel;
import com.bhge.facades.data.DSWygateBatchLookupData;
import com.bhge.facades.data.DSWygateFilmData;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.dto.converter.Converter;

public class DSFilmDataPopulator implements Populator<DSFilmDataModel, DSWygateFilmData>{

	private Converter<DSWaygateBatchLookupModel, DSWygateBatchLookupData> wygateBatchLookupConverter;
	
	@Override
	public void populate(DSFilmDataModel source, DSWygateFilmData target) throws ConversionException {
		// TODO Auto-generated method stub		
		if(source != null) {
			if(source.getType() != null) {
				target.setType(wygateBatchLookupConverter.convert(source.getType()));
			}
			target.setBatch(source.getBatch());
			target.setControl(source.getControl());
			target.setCper(source.getCper());
			target.setEmNr(source.getEmNr());
			target.setExpiry(source.getExpiry());
			target.setRol(source.getRol());
			target.setSper(source.getSper());
		}
	}

	public Converter<DSWaygateBatchLookupModel, DSWygateBatchLookupData> getWygateBatchLookupConverter() {
		return wygateBatchLookupConverter;
	}

	public void setWygateBatchLookupConverter(
			Converter<DSWaygateBatchLookupModel, DSWygateBatchLookupData> wygateBatchLookupConverter) {
		this.wygateBatchLookupConverter = wygateBatchLookupConverter;
	}

	
}
