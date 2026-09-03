package com.bhge.core.pricing.handler;

import com.bhge.facades.data.InventoryRequestData;

import de.hybris.platform.sap.productconfig.runtime.interf.model.PriceSummaryModel;

public interface BHGEVCPricingHandler {
	
	PriceSummaryModel getVCPriceSummary(final InventoryRequestData requestData);

}
