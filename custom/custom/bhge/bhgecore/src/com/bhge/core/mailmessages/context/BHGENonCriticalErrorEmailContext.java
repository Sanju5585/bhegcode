package com.bhge.core.mailmessages.context;

import java.util.List;

import com.bhge.core.cronjob.BHGENonCrticalErrorVO;
import com.bhge.core.model.BHGERfcCallErrorModel;

public class BHGENonCriticalErrorEmailContext {

	List<BHGENonCrticalErrorVO> bhgePeriodicErrorLst;

	public List<BHGENonCrticalErrorVO> getBhgePeriodicErrorLst() {
		return bhgePeriodicErrorLst;
	}

	public void setBhgePeriodicErrorLst(
			final List<BHGENonCrticalErrorVO> bhgePeriodicErrorLst) {
		this.bhgePeriodicErrorLst = bhgePeriodicErrorLst;
	}

}
