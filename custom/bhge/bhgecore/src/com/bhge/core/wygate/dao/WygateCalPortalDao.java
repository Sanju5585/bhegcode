package com.bhge.core.wygate.dao;

import com.bhge.core.model.DSChemistryDataModel;
import com.bhge.core.model.DSFilmDataModel;

public interface WygateCalPortalDao {
	
	public DSFilmDataModel getWygateBatchData(String number);
	
	public DSChemistryDataModel getWygateFabricationData(String number);
}
