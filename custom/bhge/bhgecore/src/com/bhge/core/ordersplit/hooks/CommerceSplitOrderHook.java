/**
 *
 */
package com.bhge.core.ordersplit.hooks;

import com.bhge.servicelayer.ordersplit.CommerceSplitOrderParameters;
import com.bhge.servicelayer.ordersplit.CommerceSplitOrderResult;



public interface CommerceSplitOrderHook
{

	void beforeSplitOrder(final CommerceSplitOrderParameters parameters);

	void afterSplitOrder(final CommerceSplitOrderParameters parameters, final CommerceSplitOrderResult result);

}
