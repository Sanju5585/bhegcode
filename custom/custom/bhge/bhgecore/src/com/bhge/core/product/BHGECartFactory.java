/**
 *
 */
package com.bhge.core.product;

import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.order.CartFactory;


public interface BHGECartFactory extends CartFactory
{
	public CartModel updateCartForLoggedInuser(CartModel cart);
}
