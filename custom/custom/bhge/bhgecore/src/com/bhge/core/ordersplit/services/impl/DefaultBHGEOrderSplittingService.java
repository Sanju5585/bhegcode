/**
 *
 */
package com.bhge.core.ordersplit.services.impl;

import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.ordersplitting.impl.DefaultOrderSplittingService;
import de.hybris.platform.ordersplitting.strategy.SplittingStrategy;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.log4j.Logger;

import com.bhge.core.ordersplit.services.BHGEOrderSplittingService;
import com.bhge.core.ordersplit.strategy.BHGEOrderSplittingStrategy;
import com.bhge.servicelayer.ordersplit.CommerceSplitOrderParameters;
import com.bhge.servicelayer.ordersplit.CommerceSplitOrderResult;


public class DefaultBHGEOrderSplittingService extends DefaultOrderSplittingService implements BHGEOrderSplittingService
{



	private static final Logger LOG = Logger.getLogger(DefaultBHGEOrderSplittingService.class);

	@Override
	public List<CartModel> splitOrder(final CommerceSplitOrderParameters parameters)
	{
		final List<CartModel> childCarts = new ArrayList<CartModel>();
		try
		{
			if (CollectionUtils.isNotEmpty(getStrategiesList()))
			{
				for (final SplittingStrategy strategy : getStrategiesList())
				{
					if (strategy instanceof BHGEOrderSplittingStrategy)
					{
						final CommerceSplitOrderResult result = ((BHGEOrderSplittingStrategy) strategy).splitOrder(parameters);
						if (null != result && CollectionUtils.isNotEmpty(result.getChildCarts()))
						{
							childCarts.addAll(result.getChildCarts());
						}
					}
				}
			}
		}
		catch (final Exception e)
		{
			LOG.error("Exception while splitting order" + e);
		}
		if (CollectionUtils.isEmpty(childCarts))
		{
			return new ArrayList<CartModel>(Arrays.asList(parameters.getParentCart()));
		}
		return childCarts;
	}


}
