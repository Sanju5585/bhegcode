package com.bhge.core.productconfig.runtime.cps.populator.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hybris.platform.sap.productconfig.runtime.cps.model.masterdata.cache.CPSMasterDataProductContainer;
import de.hybris.platform.sap.productconfig.runtime.cps.model.pricing.PricingItemInput;
import de.hybris.platform.sap.productconfig.runtime.cps.populator.impl.MasterDataContext;
import de.hybris.platform.sap.productconfig.runtime.interf.ContextualPopulator;

public class BHGEVCPricingItemInputKBProductPopulator extends BHGEVCAbstractPricingItemInputPopulator implements ContextualPopulator<CPSMasterDataProductContainer, PricingItemInput, MasterDataContext> {

	private static final Logger LOG = LoggerFactory.getLogger(BHGEVCPricingItemInputKBProductPopulator.class);
	
	@Override
	public void populate(CPSMasterDataProductContainer source, PricingItemInput target, MasterDataContext context) {
		LOG.info("inside BHGEVCPricingItemInputKBProductPopulator ..");
		fillBHGEVCPricingAttributes(target);
	}
	
	
}
