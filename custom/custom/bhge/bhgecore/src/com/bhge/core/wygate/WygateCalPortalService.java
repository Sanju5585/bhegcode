package com.bhge.core.wygate;

import com.bhge.core.model.DSChemistryDataModel;
import com.bhge.core.model.DSFilmDataModel;

public interface WygateCalPortalService {

	public DSFilmDataModel getWygateBatchData(String number);
	
	public DSChemistryDataModel getWygateFabricationData(String number);
}
