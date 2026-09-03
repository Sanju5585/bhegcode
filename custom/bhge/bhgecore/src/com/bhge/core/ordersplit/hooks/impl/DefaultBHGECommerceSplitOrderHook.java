/**
 *
 */
package com.bhge.core.ordersplit.hooks.impl;

import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.servicelayer.model.ModelService;

import org.apache.commons.collections4.CollectionUtils;

import com.bhge.core.ordersplit.hooks.CommerceSplitOrderHook;
import com.bhge.servicelayer.ordersplit.CommerceSplitOrderParameters;
import com.bhge.servicelayer.ordersplit.CommerceSplitOrderResult;



public class DefaultBHGECommerceSplitOrderHook implements CommerceSplitOrderHook
{

	private ModelService modelService;

	/**
	 * @return the modelService
	 */
	public ModelService getModelService()
	{
		return modelService;
	}

	/**
	 * @param modelService
	 *           the modelService to set
	 */
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	@Override
	public void beforeSplitOrder(final CommerceSplitOrderParameters parameters)
	{
		// do nothing

	}

	@Override
	public void afterSplitOrder(final CommerceSplitOrderParameters parameters, final CommerceSplitOrderResult result)
	{
		if (parameters.isEnableHooks() && null != parameters.getParentCart() && CollectionUtils.isNotEmpty(result.getChildCarts()))
		{
			for (final CartModel childCart : result.getChildCarts())
			{
				childCart.setOrderReferenceId(parameters.getParentCart().getCode());
				getModelService().save(childCart);
			}
		}

	}

}
