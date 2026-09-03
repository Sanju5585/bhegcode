/**
 *
 */
package com.bhge.core.product.impl;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.order.OrderManager;
import de.hybris.platform.jalo.user.User;
import de.hybris.platform.order.impl.DefaultCartFactory;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.store.services.BaseStoreService;
import de.hybris.platform.util.Config;

import java.util.Date;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.product.BHGECartFactory;


public class BHGECartFactoryImpl extends DefaultCartFactory implements BHGECartFactory
{
	private static final Logger LOG = Logger.getLogger(BHGECartFactoryImpl.class);
	private static final String PRODUCTLINE = "productLine";

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;

	@Resource(name = "modelService")
	private ModelService modelService;

	@Resource(name = "baseSiteService")
	private BaseSiteService baseSiteService;

	@Resource(name = "baseStoreService")
	private BaseStoreService baseStoreService;
	
	@Resource(name = "orderCodeGenerator")
	private KeyGenerator keyGenerator;

	/**
	 * Creates a new {@link CartModel} instance without persisting it.
	 *
	 * @return {@link CartModel} - a fully initialized, not persisted {@link CartModel} instance
	 */
	@Override
	protected CartModel createCartInternal()
	{
		final UserModel user = userService.getCurrentUser();
		final CurrencyModel currency = commonI18NService.getCurrentCurrency();
		final String cartModelTypeCode = Config.getString(JaloSession.CART_TYPE, "Cart");
		final CartModel cart = modelService.create(cartModelTypeCode);
		/* Changing to take cart code from OOTB hybris. Order code will follow SAP sequence during conversion */
		cart.setCode(String.valueOf(keyGenerator.generate()));
		cart.setUser(user);
		cart.setCurrency(currency);
		cart.setDate(new Date());
		cart.setNet(isNetUser(user));
		cart.setSite(baseSiteService.getCurrentBaseSite());
		cart.setStore(baseStoreService.getCurrentBaseStore());

		// Logged in user - save default sold to as sold to for cart
		if (user instanceof GEEdgeCustomerModel currentUser)
		{
			//LOG.info("In createCartInternal " + ((GEEdgeCustomerModel) user).getDefaultB2BUnit().getUid());
			cart.setSoldToForCart(currentUser.getDefaultB2BUnit());
			final B2BUnitModel defaultB2bUnit = currentUser.getDefaultB2BUnit();
			String productLine = currentUser.getProductLineMap().get(defaultB2bUnit.getUid());
			if (StringUtils.isNotBlank(productLine)) {
				cart.setProductLine(productLine);
			}
		}
		return cart;
	}

	private Boolean isNetUser(final UserModel user)
	{
		final User userItem = modelService.getSource(user);
		final boolean result = OrderManager.getInstance().getPriceFactory().isNetUser(userItem);
		return Boolean.valueOf(result);
	}

	@Override
	public CartModel createCart()
	{
		final CartModel cart = createCartInternal();
		modelService.save(cart);
		return cart;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.bhge.core.product.BHGECartFactory#updateCartForLoggedInuser(de.hybris.platform.core.model.order.CartModel)
	 */
	@Override
	public CartModel updateCartForLoggedInuser(final CartModel cart)
	{
		final UserModel user = userService.getCurrentUser();
		final CurrencyModel currency = commonI18NService.getCurrentCurrency();
		LOG.info("Inside updateCartForLoggedInuser method"+cart.getCode()+"User"+user.getUid()+"Currency"+currency.getIsocode());
		cart.setUser(user);
		cart.setCurrency(currency);
		cart.setDate(new Date());
		cart.setNet(isNetUser(user));
		cart.setSite(baseSiteService.getCurrentBaseSite());
		cart.setStore(baseStoreService.getCurrentBaseStore());
		LOG.info("In updateCartForLoggedInuser Cart Details: User - " + cart.getUser().getUid() + " Currency - "
				+ cart.getCurrency().getIsocode() + " Site - " + cart.getSite().getUid() + " Store - "
				+ cart.getStore().getUid());

		// Logged in user - save default sold to as sold to for cart
		if (user instanceof GEEdgeCustomerModel)
		{
			//LOG.info("In createCartInternal " + ((GEEdgeCustomerModel) user).getDefaultB2BUnit().getUid());
			cart.setSoldToForCart(((GEEdgeCustomerModel) user).getDefaultB2BUnit());
		}
		return cart;
	}

}
