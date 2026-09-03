package com.bhge.facades.savecart;

import java.util.List;

import de.hybris.platform.commercefacades.order.SaveCartFacade;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.enums.OrderStatus;


public interface BHGESaveCartFacade extends SaveCartFacade
{

	Boolean checkIfAlreadyExists(final PageableData pageableData, final String cartName);
	void deleteSavedCart (String cartId);
	SearchPageData<CartData> getSavedCartsForUser(final PageableData pageableData,
			final List<OrderStatus> orderStatus);

}
