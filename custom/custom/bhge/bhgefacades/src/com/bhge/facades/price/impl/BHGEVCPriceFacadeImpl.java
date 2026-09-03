package com.bhge.facades.price.impl;

import com.bhge.core.pricing.handler.BHGEVCPricingHandler;
import com.bhge.facades.data.InventoryRequestData;
import com.bhge.facades.price.BHGEVCPriceFacade;
import de.hybris.platform.sap.productconfig.facades.PricingData;
import de.hybris.platform.sap.productconfig.runtime.interf.model.PriceSummaryModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import org.springframework.beans.factory.annotation.Autowired;

public class BHGEVCPriceFacadeImpl implements BHGEVCPriceFacade {


    @Autowired
    private BHGEVCPricingHandler bhgevcPricingHandler;

    private Converter<PriceSummaryModel, PricingData> priceSummaryConverter;


    @Override
    public PricingData getVCPriceSummary(InventoryRequestData requestData) {
    	final PriceSummaryModel priceSummaryModel = bhgevcPricingHandler.getVCPriceSummary(requestData);
    	return getPriceSummaryConverter().convert(priceSummaryModel);
    }

    public Converter<PriceSummaryModel, PricingData> getPriceSummaryConverter() {
        return priceSummaryConverter;
    }

    public void setPriceSummaryConverter(Converter<PriceSummaryModel, PricingData> priceSummaryConverter) {
        this.priceSummaryConverter = priceSummaryConverter;
    }

}
