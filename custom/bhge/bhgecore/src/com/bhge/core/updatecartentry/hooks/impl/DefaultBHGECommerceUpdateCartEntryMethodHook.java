/**
 *
 */
package com.bhge.core.updatecartentry.hooks.impl;

import de.hybris.platform.commerceservices.order.CommerceCartModification;
import de.hybris.platform.commerceservices.order.hook.CommerceUpdateCartEntryHook;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.servicelayer.model.ModelService;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;

import com.bhge.core.addtocart.hooks.impl.DefaultBHGECommerceAddToCartMethodHook;
import com.bhge.core.enums.GEEdgeCartType;
import com.bhge.core.order.service.BHGECartService;


/**
 *
 *
 * Hook to set cart type post update cart entry
 *
 */
public class DefaultBHGECommerceUpdateCartEntryMethodHook implements CommerceUpdateCartEntryHook
{

	private ModelService modelService;

	private BHGECartService bhgeCartService;


	private static final Logger LOG = Logger.getLogger(DefaultBHGECommerceAddToCartMethodHook.class);



	@Override
	public void beforeUpdateCartEntry(final CommerceCartParameter parameters)
	{
		// do nothing

	}

	@Override
	public void afterUpdateCartEntry(final CommerceCartParameter parameters, final CommerceCartModification result)

	{
		try
		{
			if (null != result && null != result.getEntry() && null != result.getEntry().getOrder()
					&& result.getEntry().getOrder() instanceof CartModel)
			{
				final CartModel cart = (CartModel) result.getEntry().getOrder();
				final GEEdgeCartType cartType = getBhgeCartService().getCartTypeForCart(cart);
				cart.setCartType(cartType);
				if (cartType !=null && cartType.equals(GEEdgeCartType.NONFILM))
				{
					cart.setEndUserNumber("");
				}
				getModelService().save(cart);

			}
		}
		catch (final Exception e)
		{
			LOG.error("Error setting carttype in after add to cart hook" + ExceptionUtils.getStackTrace(e));
		}

	}

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

	/**
	 * @return the bhgeCartService
	 */
	public BHGECartService getBhgeCartService()
	{
		return bhgeCartService;
	}

	/**
	 * @param bhgeCartService
	 *           the bhgeCartService to set
	 */
	public void setBhgeCartService(final BHGECartService bhgeCartService)
	{
		this.bhgeCartService = bhgeCartService;
	}



}
