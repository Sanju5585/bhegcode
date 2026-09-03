package com.bhge.core.productconfig.runtime.cps.populator.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hybris.platform.sap.productconfig.runtime.cps.model.pricing.PricingItemInput;
import de.hybris.platform.sap.productconfig.runtime.cps.model.runtime.CPSItem;
import de.hybris.platform.sap.productconfig.runtime.interf.ContextualPopulator;
import de.hybris.platform.sap.productconfig.runtime.interf.impl.ConfigurationRetrievalOptions;

public class BHGEVCPricingItemInputPopulator extends BHGEVCAbstractPricingItemInputPopulator implements ContextualPopulator<CPSItem, PricingItemInput, ConfigurationRetrievalOptions>{
	
	private static final Logger LOG = LoggerFactory.getLogger(BHGEVCPricingItemInputPopulator.class);
	
	@Override
	public void populate(CPSItem source, PricingItemInput target, ConfigurationRetrievalOptions context) {
		LOG.info("inside BHGEVCPricingItemInputPopulator ..");
		fillBHGEVCPricingAttributes(target);
	}


}
