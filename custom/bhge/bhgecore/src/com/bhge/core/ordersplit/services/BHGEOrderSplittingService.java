/**
 *
 */
package com.bhge.core.ordersplit.services;

import de.hybris.platform.core.model.order.CartModel;

import java.util.List;

import com.bhge.servicelayer.ordersplit.CommerceSplitOrderParameters;


public interface BHGEOrderSplittingService
{

	List<CartModel> splitOrder(final CommerceSplitOrderParameters parameters);
}
