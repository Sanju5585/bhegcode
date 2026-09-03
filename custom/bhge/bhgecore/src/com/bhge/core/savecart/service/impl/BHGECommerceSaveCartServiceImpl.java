package com.bhge.core.savecart.service.impl;

import com.bhge.core.productconfig.services.strategy.impl.BHGEProductConfigurationCartRestorationStrategyImpl;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commerceservices.order.CommerceCartRestoration;
import de.hybris.platform.commerceservices.order.CommerceCartRestorationException;
import de.hybris.platform.commerceservices.order.CommerceCartRestorationStrategy;
import de.hybris.platform.commerceservices.order.CommerceSaveCartException;
import de.hybris.platform.commerceservices.order.impl.DefaultCommerceSaveCartService;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.commerceservices.service.data.CommerceSaveCartParameter;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.store.BaseStoreModel;
import org.apache.log4j.Logger;

import java.util.List;



import com.bhge.core.savecart.dao.BHGESavedCartDao;
import com.bhge.core.savecart.service.BHGECommerceSaveCartService;


public class BHGECommerceSaveCartServiceImpl extends DefaultCommerceSaveCartService implements BHGECommerceSaveCartService
{

	private BHGESavedCartDao bhgeSavedCartDao;

	private BHGEProductConfigurationCartRestorationStrategyImpl bhgeProductConfigurationCartRestorationStrategyImpl;

	private CommerceCartRestorationStrategy commerceCartRestorationStrategy;

	private static final Logger LOG = Logger.getLogger(BHGECommerceSaveCartServiceImpl.class);

	public BHGEProductConfigurationCartRestorationStrategyImpl getBhgeProductConfigurationCartRestorationStrategyImpl() {
		return bhgeProductConfigurationCartRestorationStrategyImpl;
	}

	public void setBhgeProductConfigurationCartRestorationStrategyImpl(BHGEProductConfigurationCartRestorationStrategyImpl bhgeProductConfigurationCartRestorationStrategyImpl) {
		this.bhgeProductConfigurationCartRestorationStrategyImpl = bhgeProductConfigurationCartRestorationStrategyImpl;
	}

	protected CommerceCartRestorationStrategy getCommerceCartRestorationStrategy()
	{
		return commerceCartRestorationStrategy;
	}

	/**
	 * @param commerceCartRestorationStrategy
	 *           the commerceCartRestorationStrategy to set
	 */
	
	public void setCommerceCartRestorationStrategy(final CommerceCartRestorationStrategy commerceCartRestorationStrategy)
	{
		this.commerceCartRestorationStrategy = commerceCartRestorationStrategy;
	}

	/**
	 * @return the bhgeSavedCartDao
	 */
	public BHGESavedCartDao getBhgeSavedCartDao()
	{
		return bhgeSavedCartDao;
	}

	/**
	 * @param bhgeSavedCartDao
	 *           the bhgeSavedCartDao to set
	 */
	
	public void setBhgeSavedCartDao(final BHGESavedCartDao bhgeSavedCartDao)
	{
		this.bhgeSavedCartDao = bhgeSavedCartDao;
	}

	@Override
	public SearchPageData<CartModel> getSavedCartsForBasestoreAndUser(final PageableData pageableData,
			final BaseSiteModel baseSite, final BaseStoreModel baseStore, final UserModel user, final List<OrderStatus> orderStatus)
	{
		return bhgeSavedCartDao.getSavedCartsForBasestoreAndUser(pageableData, baseSite, baseStore, user, orderStatus);
	}

	@Override
	public Integer getSavedCartsCountForBasestoreAndUser(final BaseSiteModel baseSite, final BaseStoreModel baseStore,
			final UserModel user)
	{
		return bhgeSavedCartDao.getSavedCartsCountForBasestoreAndUser(baseSite, baseStore, user);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.bhge.core.savecart.service.BHGECommerceSaveCartService#getSavedCartsForUser(de.hybris.platform.
	 * commerceservices.search.pagedata.PageableData, de.hybris.platform.basecommerce.model.site.BaseSiteModel,
	 * de.hybris.platform.store.BaseStoreModel, de.hybris.platform.core.model.user.UserModel, java.util.List)
	 */
	@Override
	public SearchPageData<CartModel> getSavedCartsForUser(final PageableData pageableData, final BaseSiteModel baseSite,
			final BaseStoreModel baseStore, final UserModel user, final List<OrderStatus> orderStatus)
	{

		return bhgeSavedCartDao.getSavedCartsForUser(pageableData, baseSite, baseStore, user, orderStatus);
	}

	@Override
	public CommerceCartRestoration restoreSavedCart(final CommerceSaveCartParameter parameter) throws CommerceSaveCartException
	{
		LOG.info("In custom service class for restoring saved cart");
		final CommerceCartParameter commerceCartParameter = new CommerceCartParameter();
		commerceCartParameter.setCart(parameter.getCart());
		commerceCartParameter.setEnableHooks(parameter.isEnableHooks());
		try
		{
			LOG.info("Restoring saved cart id "+parameter.getCart().getCode());
			return getBhgeProductConfigurationCartRestorationStrategyImpl().restoreCart(commerceCartParameter);
		}
		catch (final CommerceCartRestorationException e)
		{
			throw new CommerceSaveCartException(e.getMessage(), e);
		}
	}

}
