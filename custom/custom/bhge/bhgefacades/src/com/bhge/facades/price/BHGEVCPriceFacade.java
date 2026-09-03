package com.bhge.facades.price;

import com.bhge.facades.data.InventoryRequestData;

import de.hybris.platform.sap.productconfig.facades.PricingData;

public interface BHGEVCPriceFacade {

    public PricingData getVCPriceSummary(final InventoryRequestData requestData);

}
