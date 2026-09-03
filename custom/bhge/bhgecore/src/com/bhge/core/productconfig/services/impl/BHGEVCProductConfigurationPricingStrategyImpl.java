package com.bhge.core.productconfig.services.impl;

import java.math.BigDecimal;
import java.math.RoundingMode;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.sap.productconfig.runtime.interf.model.ConfigModel;
import de.hybris.platform.sap.productconfig.runtime.interf.model.PriceModel;
import de.hybris.platform.sap.productconfig.runtime.interf.model.PriceSummaryModel;
import de.hybris.platform.sap.productconfig.services.impl.ProductConfigurationPricingStrategyImpl;

public class BHGEVCProductConfigurationPricingStrategyImpl extends ProductConfigurationPricingStrategyImpl {
	
	private static final Logger LOG = LoggerFactory.getLogger(BHGEVCProductConfigurationPricingStrategyImpl.class);
	
	protected PriceModel retrieveCurrentTotalPrice(final String configId, final AbstractOrderEntryModel entry) {
		
		if (getPricingService().isActive()) {
			LOG.info("Inside BHGEVCProductConfigurationPricingStrategyImpl -- Asynchronous pricing is active.");
			if (configId == null) {
				return null;
			}
			final PriceSummaryModel priceSummary = getPricingService().getPriceSummary(configId);
			if (priceSummary == null) {
				return null;
			}
			validateCurrency(priceSummary.getCurrentTotalPrice());
			LOG.info("Inside BHGEVCProductConfigurationPricingStrategyImpl -- discount price is {} ", priceSummary.getCurrentTotalSavings().getPriceValue().doubleValue());
			entry.setYourPriceDiscount(priceSummary.getCurrentTotalSavings().getPriceValue().doubleValue());
			entry.setDiscountPrice(priceSummary.getCurrentTotalPrice().getPriceValue().toString());
			setDiscountPercenatge(priceSummary.getBasePrice(), priceSummary.getCurrentTotalSavings(), entry);
			return priceSummary.getBasePrice();
		}
		else {
			LOG.info("Inside BHGEVCProductConfigurationPricingStrategyImpl -- Asynchronous pricing is NOT active.");
			if (configId == null) {
				final ConfigModel configModel = getConfigurationAbstractOrderIntegrationStrategy()
						.getConfigurationForAbstractOrderEntry(entry);
				return configModel.getCurrentTotalPrice();
			}
			PriceModel currentTotalPrice = getConfigurationService().retrieveConfigurationOverview(configId).getCurrentTotalPrice();
			if (currentTotalPrice == null) {
				return null;
			}
			if (!PriceModel.NO_PRICE.equals(currentTotalPrice) && !PriceModel.PRICE_NA.equals(currentTotalPrice)
					&& !isSessionCurrencyMatching(currentTotalPrice.getCurrency())) {
				LOG.info("Session currency has changed, so configuration model has to be reloaded with new currency");
				currentTotalPrice = reloadCurrentTotalWithCurrentCurrency(entry);
			}
			validateCurrency(currentTotalPrice);
			return currentTotalPrice;
		}
	}
	
	private void setDiscountPercenatge(final PriceModel basePrice, final PriceModel discountPrice, final AbstractOrderEntryModel entry) {
		
		if (basePrice != null && discountPrice != null) {
			if (discountPrice.getPriceValue().doubleValue() > 0 && basePrice.getPriceValue().doubleValue() > 0) {
				final BigDecimal discountPercentage = discountPrice.getPriceValue().multiply(BigDecimal.valueOf(100)).divide(basePrice.getPriceValue(), 2, RoundingMode.HALF_UP);
				LOG.info("Discount percenatage {} for entry PK is {} ", discountPercentage, entry.getPk());
				entry.setDiscountPercentage(discountPercentage.toString());
			}
		}
		
	}

}
