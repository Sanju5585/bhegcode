package com.bhge.core.wygate.impl;

import org.apache.log4j.Logger;
import org.apache.commons.lang3.StringUtils;

import com.bhge.core.model.DSChemistryDataModel;
import com.bhge.core.model.DSFilmDataModel;
import com.bhge.core.wygate.WygateCalPortalService;
import com.bhge.core.wygate.dao.WygateCalPortalDao;
import com.bhge.core.wygate.dao.impl.DefaultWygateCalPortalDao;

public class DefaultWygateCalPortalService implements WygateCalPortalService {

	private static final Logger LOG = Logger.getLogger(DefaultWygateCalPortalService.class);
	
    private WygateCalPortalDao wygateCalPortalDao;
	
	@Override
	public DSFilmDataModel getWygateBatchData(String number) {
		return wygateCalPortalDao.getWygateBatchData(number);
	}

	@Override
	public DSChemistryDataModel getWygateFabricationData(String number) {
		//number = validateFabricationNumber(number);
		return wygateCalPortalDao.getWygateFabricationData(number);
		
	}
	
	
	public WygateCalPortalDao getWygateCalPortalDao() {
		return wygateCalPortalDao;
	}

	public void setWygateCalPortalDao(WygateCalPortalDao wygateCalPortalDao) {
		this.wygateCalPortalDao = wygateCalPortalDao;
	}
	
	public String validateFabricationNumber(String number) {
		if (number.length() >= 8) {
			number = number.substring(0,8);			
		}
		LOG.info("Number for f-nr: 8 digit: " + number);
		return number;
	}
}
