package com.bhge.facades.productconfig.populator;

import java.util.Objects;

import org.apache.log4j.Logger;

import com.bhge.core.enums.BHGERMACommerceType;

import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.sap.productconfig.facades.populator.CartConfigurationPopulator;
import de.hybris.platform.sap.productconfig.runtime.interf.model.ConfigModel;

public class BHGECartConfigurationPopulator extends CartConfigurationPopulator {
	
	private static final Logger LOG = Logger.getLogger(BHGECartConfigurationPopulator.class);
	
	@Override
	public void populate(final CartModel source, final CartData target) {
		
		LOG.info("Inside BHGECartConfigurationPopulator !!");
		final BHGERMACommerceType  cartCommerceType = source.getCommerceType() != null ? source.getCommerceType() : BHGERMACommerceType.BUY;
		LOG.info("Inside BHGECartConfigurationPopulator - Cart type is " + cartCommerceType.getCode() 
		+ " for cart pk " + source.getPk().toString());
		try {
			if (BHGERMACommerceType.BUY.getCode().equals(cartCommerceType.getCode())
					|| BHGERMACommerceType.GUESTBUY.getCode().equals(cartCommerceType.getCode())) {
				super.populate(source, target);
			}
		}
		catch(Exception e){
			LOG.error("Exception occurred while population cart data:" + e.getMessage(),e);
		}
	}
	
	@Override
	protected boolean populateCartEntry(final AbstractOrderEntryModel entry, final CartData target) {
		// In case in parallel the cart entry has been removed
		if (getModelService().isRemoved(entry))
		{
			LOG.warn("Cart entry has been removed!");
			return false;
		}
		boolean longConfigEntry = false;
		if(Objects.nonNull(entry.getLongConfigEntry()) && entry.getLongConfigEntry()) {
			longConfigEntry = true;
		}

		if (!longConfigEntry && getCpqConfigurableChecker().isCPQConfiguratorApplicableProduct(entry.getProduct()))
		{
			if (LOG.isDebugEnabled())
			{
				LOG.debug("CartItem with PK " + entry.getPk() + " is Configurable ==> populating DTO.");
			}
			final ConfigModel configModel = getConfigurationAbstractOrderIntegrationStrategy()
					.getConfigurationForAbstractOrderEntry(entry);
			final OrderEntryData targetEntry = findTargetEntry(target, entry.getEntryNumber());

			writeToTargetEntry(entry, targetEntry);
			validateChangedInBackground(configModel, entry, targetEntry);
			if (hasUnresolvableIssue(configModel))
			{
				return validateUnresolvableIssues(entry, targetEntry);
			}
			else
			{
				return validatePrice(configModel, entry, targetEntry);
			}
		}
		else
		{
			if (LOG.isDebugEnabled())
			{
				LOG.debug("CartItem with PK " + entry.getPk() + " is NOT Configurable ==> skipping population of DTO.");
			}
		}
		return false;
	}

}
