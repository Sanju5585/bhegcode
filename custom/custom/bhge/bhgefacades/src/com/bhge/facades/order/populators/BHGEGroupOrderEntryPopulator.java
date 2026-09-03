/**
 *
 */
package com.bhge.facades.order.populators;

import de.hybris.platform.commercefacades.order.converters.populator.GroupOrderEntryPopulator;
import de.hybris.platform.commercefacades.order.data.AbstractOrderData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import org.apache.log4j.Logger;


/**
 * @author 212695810 Custom populator to populator line level price for order confirmation page display
 *
 */
public class BHGEGroupOrderEntryPopulator extends GroupOrderEntryPopulator
{
	private static final Logger LOG = Logger.getLogger(BHGEGroupOrderEntryPopulator.class);

	@Override
	public void populate(final AbstractOrderModel source, final AbstractOrderData target) throws ConversionException
	{
		LOG.info("Inside BHGEGroupOrderEntryPopulator populate() method");
		for (final OrderEntryData entryData : target.getEntries())
		{
			if (entryData.getTotalPrice() != null && entryData.getTotalPrice().getValue() != null && entryData.getQuantity() != null)
			{
				entryData
						.setLineLevelPrice(entryData.getTotalPrice().getValue().doubleValue() / entryData.getQuantity().doubleValue());
			}
		}
	}

}
