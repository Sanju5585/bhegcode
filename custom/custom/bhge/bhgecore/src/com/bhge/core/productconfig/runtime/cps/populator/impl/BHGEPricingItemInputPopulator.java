package com.bhge.core.productconfig.runtime.cps.populator.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.sap.productconfig.runtime.cps.model.pricing.AlternateProductUnit;
import de.hybris.platform.sap.productconfig.runtime.cps.model.pricing.PricingItemInput;
import de.hybris.platform.sap.productconfig.runtime.cps.model.pricing.ProductInfo;
import de.hybris.platform.sap.productconfig.runtime.cps.model.runtime.CPSItem;
import de.hybris.platform.sap.productconfig.runtime.cps.model.runtime.CPSPricingQuantity;
import de.hybris.platform.sap.productconfig.runtime.cps.populator.impl.PricingItemInputPopulator;
import de.hybris.platform.sap.productconfig.runtime.interf.impl.ConfigurationRetrievalOptions;

public class BHGEPricingItemInputPopulator extends PricingItemInputPopulator {
	
	private static final Logger LOG = LoggerFactory.getLogger(BHGEPricingItemInputPopulator.class);
	
	@Override
	public void populate(final CPSItem source, final PricingItemInput target, final ConfigurationRetrievalOptions context) {
		LOG.info("Inside Populate of BHGEPricingItemInputPopulator");
		fillCoreAttributes(retrievePricingProduct(source, context), source.getId(), calculateQuantity(source), target);
		fillPricingAttributes(retrievePricingProduct(source, context), target);
		fillAccessDates(target, context);
		fillVariantConditions(source, target, context);
	}
	
	protected void fillCoreAttributes(final String productCode, final String id, final CPSPricingQuantity quantity, final PricingItemInput target) {
		target.setItemId(id);
		target.setQuantity(quantity);
		target.setProductDetails(createProductInfo(productCode, quantity.getUnit()));
		target.setStatistical(STATISTICAL);
	}
	
	protected ProductInfo createProductInfo(final String productCode, final String uom) {
		final ProductInfo productInfo = new ProductInfo();
		productInfo.setProductId(EMPTY_STRING);
		productInfo.setBaseUnit(uom);
		productInfo.setAlternateProductUnits(setAlternateUnits(productCode));
		return productInfo;
	}
	
	protected List<AlternateProductUnit> setAlternateUnits(final String productCode) {
		LOG.info("Inside BHGEPricingItemInputPopulator -- Setting Alternate Product Unit for product {} ", productCode);
		final List<AlternateProductUnit> alternateProductUnits = new ArrayList<AlternateProductUnit>();
		final AlternateProductUnit alternateProductUnit = new AlternateProductUnit();
		try {
			final ProductModel productModel = getProductService().getProductForCode(productCode);
			if (productModel != null && productModel.getUnitOfMeasure() != null) {
				alternateProductUnit.setAlternateUnitName(productModel.getUnitOfMeasure());
				alternateProductUnit.setDenominator(1);
				alternateProductUnit.setNumerator(1);
				
				alternateProductUnits.add(alternateProductUnit);
			}
		} catch (Exception e) {
			LOG.error("Product not found for productcode {} ", productCode);
		}
		
		
		return alternateProductUnits;
		
	}
	
	

}
