package com.bhge.core.rma.service;

import com.bhge.facades.rma.data.BHGERmaOfferingData;

import java.util.List;

public interface BHGERmaFormSearchService {

        /**
         * @param partNo
         * @return
         */
        List<String> getPartNumsForSearch(String partNo, String srNo) ;
}
