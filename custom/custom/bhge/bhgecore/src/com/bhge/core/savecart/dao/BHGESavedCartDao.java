package com.bhge.core.savecart.dao;

import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commerceservices.order.dao.SaveCartDao;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.store.BaseStoreModel;

import java.util.List;


public interface BHGESavedCartDao extends SaveCartDao
{

	public SearchPageData<CartModel> getSavedCartsForBasestoreAndUser(PageableData pageableData, BaseSiteModel baseSite,
			BaseStoreModel baseStore, UserModel user, List<OrderStatus> orderStatus);

	public List<CartModel> getSavedCartsExpiryDate(final BaseSiteModel baseSite);

	public Integer getSavedCartsCountForBasestoreAndUser(BaseSiteModel baseSite, BaseStoreModel baseStore, UserModel user);

	public SearchPageData<CartModel> getSavedCartsForUser(PageableData pageableData, BaseSiteModel baseSite,
			BaseStoreModel baseStore, UserModel user, List<OrderStatus> orderStatus);

}
