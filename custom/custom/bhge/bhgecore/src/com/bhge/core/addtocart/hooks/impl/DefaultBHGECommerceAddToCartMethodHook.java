/**
 *
 */
package com.bhge.core.addtocart.hooks.impl;

import de.hybris.platform.commerceservices.order.CommerceCartModification;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.commerceservices.order.hook.CommerceAddToCartMethodHook;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.servicelayer.model.ModelService;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;

import com.bhge.core.enums.GEEdgeCartType;
import com.bhge.core.order.service.BHGECartService;


/**
 *
 *
 * Hook to set cart type post add to cart
 *
 */
public class DefaultBHGECommerceAddToCartMethodHook implements CommerceAddToCartMethodHook
{

	private ModelService modelService;

	private BHGECartService bhgeCartService;


	private static final Logger LOG = Logger.getLogger(DefaultBHGECommerceAddToCartMethodHook.class);



	@Override
	public void beforeAddToCart(final CommerceCartParameter parameters) throws CommerceCartModificationException
	{
		parameters.setCreateNewEntry(true);

	}

	@Override
	public void afterAddToCart(final CommerceCartParameter parameters, final CommerceCartModification result)
			throws CommerceCartModificationException
	{
		try
		{
			if (null != result && null != result.getEntry() && null != result.getEntry().getOrder()
					&& result.getEntry().getOrder() instanceof CartModel)
			{
				final CartModel cart = (CartModel) result.getEntry().getOrder();

				//validate Cart For Non Sellable Products
				//				for (final AbstractOrderEntryModel orderEntry : cart.getEntries())
				//				{
				//					if (orderEntry.getListPrice() != null && orderEntry.getListPrice().doubleValue() == 0
				//							&& BooleanUtils.isFalse(orderEntry.getProduct().getSapConfigurable()))
				//					{
				//						modelService.remove(orderEntry);
				//					}
				//
				//					if (BooleanUtils.isTrue(orderEntry.getProduct().getSapConfigurable()))
				//					{
				//						final double vcListPrice = orderEntry.getListPrice().doubleValue()
				//								+ orderEntry.getVcOptionsPrice().doubleValue();
				//						double vcDiscountprice = 0.0;
				//						if (NumberUtils.isNumber(orderEntry.getDiscountPrice()))
				//						{
				//							vcDiscountprice = Double.valueOf(orderEntry.getDiscountPrice()).doubleValue();
				//						}
				//						final double vcYourPrice = vcDiscountprice + orderEntry.getVcOptionsPrice().doubleValue();
				//						if (vcListPrice == 0 && vcYourPrice == 0)
				//						{
				//							modelService.remove(orderEntry);
				//						}
				//					}
				//				}

				//Setting Cart Type
				if (null == cart.getCartType()
						|| (null != cart.getCartType() && !(cart.getCartType().getCode().equals(GEEdgeCartType.HYBRID.getCode()))))
				{
					cart.setCartType(getBhgeCartService().getCartTypeForCart(cart));
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
