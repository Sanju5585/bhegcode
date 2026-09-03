package com.bhge.facades.configuration;

import de.hybris.platform.sap.productconfig.runtime.cps.CharonKbDeterminationFacade;
import de.hybris.platform.sap.productconfig.runtime.cps.model.masterdata.common.CPSMasterDataKBHeaderInfo;

import java.util.Date;
import java.util.List;

public interface BHGEVCCharonKBDeterminationFacade extends CharonKbDeterminationFacade {

    public List<CPSMasterDataKBHeaderInfo> readAllKbsForDate(final String productcode, final Date kbDate);
}
