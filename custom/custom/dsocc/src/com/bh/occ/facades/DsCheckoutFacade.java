package com.bh.occ.facades;

import com.bh.occ.forms.BHGEPlaceOrderForm;
import com.ds.facades.orderDetails.OrderDetailsData;

import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.core.model.order.CartModel;

public interface DsCheckoutFacade {
	
	/* DS spartacus revamp changes */
	public String placeOrderForDsSpartacusStore(final BHGEPlaceOrderForm bhgePlaceOrderForm,final CartData cartData,final CartModel cartModel);
	
	public OrderDetailsData processOrderCodeForDS(String orderCodes,String guestSalesArea);

}
