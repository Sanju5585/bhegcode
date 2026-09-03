/**
 *
 */
package com.bhge.core.ordersplit.strategy;


import java.util.List;

import org.apache.commons.collections4.CollectionUtils;

import com.bhge.core.ordersplit.hooks.CommerceSplitOrderHook;
import com.bhge.servicelayer.ordersplit.CommerceSplitOrderParameters;
import com.bhge.servicelayer.ordersplit.CommerceSplitOrderResult;



public abstract class AbstractBHGEOrderSplittingStrategy
{

	private List<CommerceSplitOrderHook> commerceSplitOrderHooks;

	/**
	 * @return the commerceSplitOrderHooks
	 */
	public List<CommerceSplitOrderHook> getCommerceSplitOrderHooks()
	{
		return commerceSplitOrderHooks;
	}

	/**
	 * @param commerceSplitOrderHooks
	 *           the commerceSplitOrderHooks to set
	 */
	public void setCommerceSplitOrderHooks(final List<CommerceSplitOrderHook> commerceSplitOrderHooks)
	{
		this.commerceSplitOrderHooks = commerceSplitOrderHooks;
	}

	protected void beforeSplitOrder(final CommerceSplitOrderParameters parameters)
	{
		if (CollectionUtils.isNotEmpty(getCommerceSplitOrderHooks()) && null != parameters && parameters.isEnableHooks())
		{
			for (final CommerceSplitOrderHook hook : getCommerceSplitOrderHooks())
			{
				hook.beforeSplitOrder(parameters);
			}
		}
	}

	protected void afterSplitOrder(final CommerceSplitOrderParameters parameters, final CommerceSplitOrderResult result)
	{
		if (CollectionUtils.isNotEmpty(getCommerceSplitOrderHooks()) && null != parameters && parameters.isEnableHooks())
		{
			for (final CommerceSplitOrderHook hook : getCommerceSplitOrderHooks())
			{
				hook.afterSplitOrder(parameters, result);
			}
		}
	}

}
