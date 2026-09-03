package com.bhge.core.savecart.service;

import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commerceservices.order.CommerceSaveCartService;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.store.BaseStoreModel;

import java.util.List;


public interface BHGECommerceSaveCartService extends CommerceSaveCartService
{

	SearchPageData<CartModel> getSavedCartsForBasestoreAndUser(PageableData pageableData, BaseSiteModel baseSite,
			BaseStoreModel baseStore, UserModel user, List<OrderStatus> orderStatus);

	Integer getSavedCartsCountForBasestoreAndUser(BaseSiteModel baseSite, BaseStoreModel baseStore, UserModel user);

	SearchPageData<CartModel> getSavedCartsForUser(PageableData pageableData, BaseSiteModel baseSite, BaseStoreModel baseStore,
			UserModel user, List<OrderStatus> orderStatus);

}
