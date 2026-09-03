/**
 *
 */
package com.bhge.core.ordersplit.strategy;

import de.hybris.platform.ordersplitting.strategy.SplittingStrategy;

import com.bhge.core.ordersplit.exception.CommerceSplitOrderException;
import com.bhge.servicelayer.ordersplit.CommerceSplitOrderParameters;
import com.bhge.servicelayer.ordersplit.CommerceSplitOrderResult;


public interface BHGEOrderSplittingStrategy extends SplittingStrategy
{
	CommerceSplitOrderResult splitOrder(final CommerceSplitOrderParameters parameters) throws CommerceSplitOrderException;
}
