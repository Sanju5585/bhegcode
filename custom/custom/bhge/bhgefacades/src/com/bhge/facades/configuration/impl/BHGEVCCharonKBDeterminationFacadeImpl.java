package com.bhge.facades.configuration.impl;

import com.bhge.facades.configuration.BHGEVCCharonKBDeterminationFacade;
import de.hybris.platform.sap.productconfig.runtime.cps.impl.CharonKbDeterminationFacadeImpl;
import de.hybris.platform.sap.productconfig.runtime.cps.model.masterdata.common.CPSMasterDataKBHeaderInfo;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.log4j.Logger;

import java.util.Date;
import java.util.List;

public class BHGEVCCharonKBDeterminationFacadeImpl extends CharonKbDeterminationFacadeImpl implements BHGEVCCharonKBDeterminationFacade {


    private static final Logger LOG = Logger.getLogger(BHGEVCCharonKBDeterminationFacadeImpl.class);

    @Override
    public List<CPSMasterDataKBHeaderInfo> readAllKbsForDate(final String productcode, final Date kbDate)
    {
        LOG.info("BHGEVCCharonKBDeterminationFacadeImpl:: Entered in readAllKbsForDate");
        List<CPSMasterDataKBHeaderInfo> knowledgebases = getAllKBsOfProduct(productcode);
        knowledgebases = filterKBsByDate(kbDate, knowledgebases);
        if (CollectionUtils.isEmpty(knowledgebases))
        {
            throw new IllegalStateException("BHGEVCCharonKBDeterminationFacadeImpl:: No KB found for product and date: " + productcode + " / " + kbDate);
        }
        return knowledgebases;
    }


}
