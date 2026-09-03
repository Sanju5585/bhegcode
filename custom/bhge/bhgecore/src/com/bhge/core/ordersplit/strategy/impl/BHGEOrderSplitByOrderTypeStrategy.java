/**
 *
 */
package com.bhge.core.ordersplit.strategy.impl;



import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.commerceservices.order.CommerceCartService;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.ordersplitting.model.ConsignmentModel;
import de.hybris.platform.ordersplitting.strategy.impl.OrderEntryGroup;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.DiscountValue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.MapUtils;
import org.apache.log4j.Logger;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.GEEdgeCartType;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.ordersplit.exception.CommerceSplitOrderException;
import com.bhge.core.ordersplit.strategy.AbstractBHGEOrderSplittingStrategy;
import com.bhge.core.ordersplit.strategy.BHGEOrderSplittingStrategy;
import com.bhge.servicelayer.ordersplit.CommerceSplitOrderParameters;
import com.bhge.servicelayer.ordersplit.CommerceSplitOrderResult;



public class BHGEOrderSplitByOrderTypeStrategy extends AbstractBHGEOrderSplittingStrategy implements BHGEOrderSplittingStrategy
{
	private static final Logger LOG = Logger.getLogger(BHGEOrderSplitByOrderTypeStrategy.class);

	private ModelService modelService;

	private CommerceCartService commerceCartService;

	private BHGECartService bhgeCartService;



	@Override
	public CommerceSplitOrderResult splitOrder(final CommerceSplitOrderParameters parameters) throws CommerceSplitOrderException
	{
		final CommerceSplitOrderResult result = new CommerceSplitOrderResult();
		beforeSplitOrder(parameters);
		doSplit(parameters, result);
		afterSplitOrder(parameters, result);
		return result;
	}

	private void doSplit(final CommerceSplitOrderParameters parameters, final CommerceSplitOrderResult result)
			throws CommerceSplitOrderException
	{
		try
		{
			final CartModel parentCart = parameters.getParentCart();
			Map<AbstractOrderEntryModel, List<DiscountValue>> entryDiscountMap = new HashMap<AbstractOrderEntryModel, List<DiscountValue>>();
			//Control is brought down to strategy level as all strategies will get invoked everytime
			if (null != parentCart && !(parentCart.getCartType().getCode().equals(GEEdgeCartType.HYBRID.getCode()))
					|| (null != parentCart && null == parentCart.getCartType()))
			{
				//If its not a hybrid cart or cart type is null, exit the strategy setting only parent cart
				result.setChildCarts(new ArrayList<CartModel>(Arrays.asList(parentCart)));
				return;
			}
			final Map<String, CartModel> childCartsWithOrderTypes = new HashMap<String, CartModel>();
			if (null != parentCart && CollectionUtils.isNotEmpty(parentCart.getEntries()))
			{
				int counter = 1;
				for (final AbstractOrderEntryModel entry : parentCart.getEntries())
				{
					if(!entry.getDiscountValues().isEmpty()) 
					{
						entryDiscountMap.put(entry, entry.getDiscountValues());
					}
				}
				for (final AbstractOrderEntryModel entry : parentCart.getEntries())
				{
					//Splitting by product code. Must be changed to product type when it arrives
					if (null != entry.getProduct() && entry.getProduct() instanceof GEEdgeProductModel)
					{
						//Two or more entries can have same product type( Film or non film)
						final GEEdgeProductModel product = (GEEdgeProductModel) entry.getProduct();
						if (null != product.getProductType())
						{
							final GEEdgeCartType cartType = getBhgeCartService().getCartTypeForProductType(product.getProductType());
							if (MapUtils.isNotEmpty(childCartsWithOrderTypes)
									&& childCartsWithOrderTypes.containsKey(cartType.getCode()))
							{
								//Add entry to existing child cart
								//								doAddToCart(childCartsWithOrderTypes.get(cartType.getCode()), entry);
								continue;
							}
							//Create new child cart and add entry to it
							final CartModel childCart = createNewChildCart(parentCart, counter, cartType);
							//							doAddToCart(childCart, entry);
							childCartsWithOrderTypes.put(cartType.getCode(), childCart);
							counter++;
						}
					}
				}
				for (Map.Entry<AbstractOrderEntryModel, List<DiscountValue>> mapEntry : entryDiscountMap.entrySet())  
				{
					mapEntry.getKey().setDiscountValues(mapEntry.getValue());
					getModelService().save(mapEntry.getKey());
				}			
			}
			if (MapUtils.isNotEmpty(childCartsWithOrderTypes) && parentCart != null)
			{
				final List<CartModel> childCarts = new ArrayList<CartModel>(childCartsWithOrderTypes.values());
				doSort(childCarts);
				setEntriesForChildCarts(childCarts, parentCart);
				result.setChildCarts(childCarts);
			}
			else
			{
				//Return parent cart if product type is empty. Just a fallback check
				result.setChildCarts(new ArrayList<CartModel>(Arrays.asList(parentCart)));
				return;
			}
		}
		catch (final Exception e)
		{
			throw new CommerceSplitOrderException("Commerce Split Order Exception : ORDER-TYPE : ", e);
		}

	}

	/**
	 * @param childCarts
	 * @param parentCart
	 */
	private void setEntriesForChildCarts(final List<CartModel> childCarts, final CartModel parentCart)
	{

		final List<AbstractOrderEntryModel> filmEntries = new ArrayList<AbstractOrderEntryModel>();
		final List<AbstractOrderEntryModel> nonFilmEntries = new ArrayList<AbstractOrderEntryModel>();

		for (final AbstractOrderEntryModel entry : parentCart.getEntries())
		{
			if (null != entry.getProduct() && entry.getProduct() instanceof GEEdgeProductModel)
			{
				//Two or more entries can have same product type( Film or non film)
				final GEEdgeProductModel product = (GEEdgeProductModel) entry.getProduct();

				if (null != product.getProductType())
				{
					final GEEdgeCartType cartType = getBhgeCartService().getCartTypeForProductType(product.getProductType());
					final AbstractOrderEntryModel newEntry = getModelService().clone(entry);
					if (GEEdgeCartType.FILM.equals(cartType))
					{
						filmEntries.add(newEntry);
					}
					else
					{
						nonFilmEntries.add(newEntry);
					}

				}
			}
		}
		for (final CartModel cart : childCarts)
		{
			modelService.save(cart);
			int entryCount = 0;
			if (GEEdgeCartType.FILM.equals(cart.getCartType()))
			{
				for (final AbstractOrderEntryModel entry : filmEntries)
				{
					entry.setEntryNumber(Integer.valueOf(entryCount));
					entry.setOrder(cart);
					modelService.save(entry);
					entryCount++;
				}
				cart.setEntries(filmEntries);
			}
			else
			{
				for (final AbstractOrderEntryModel entry : nonFilmEntries)
				{
					entry.setEntryNumber(Integer.valueOf(entryCount));
					entry.setOrder(cart);
					modelService.save(entry);
					entryCount++;
				}
				cart.setEntries(nonFilmEntries);
			}
			modelService.save(cart);
		}
	}

	private void doSort(final List<CartModel> childCarts)
	{
		Collections.sort(childCarts, new Comparator<CartModel>()
		{
			@Override
			public int compare(final CartModel cart1, final CartModel cart2)
			{
				if (cart1.getCartType().getCode() == GEEdgeCartType.FILM.getCode()
						&& cart2.getCartType().getCode() == GEEdgeCartType.NONFILM.getCode())
				{
					return -1;
				}
				else if (cart1.getCartType().getCode() == GEEdgeCartType.NONFILM.getCode()
						&& cart2.getCartType().getCode() == GEEdgeCartType.FILM.getCode())
				{
					return 1;
				}
				return 0;
			}
		});
	}

	private CartModel createNewChildCart(final CartModel parentCart, final int counter, final GEEdgeCartType cartType)
	{
		//SDS changes to be done here.
		final CartModel childCart = getModelService().clone(parentCart);
		childCart.setCode(parentCart.getCode() + BhgeCoreConstants.HYPHEN + counter);
		childCart.setCartType(cartType);
		getModelService().save(childCart);
		final CommerceCartParameter parameter = new CommerceCartParameter();
		parameter.setEnableHooks(true);
		parameter.setCart(childCart);
		getCommerceCartService().removeAllEntries(parameter);
		getModelService().refresh(childCart);
		return childCart;
	}

	@SuppressWarnings("boxing")
	private void doAddToCart(final CartModel cart, final AbstractOrderEntryModel entry) throws CommerceCartModificationException
	{
		final CommerceCartParameter parameter = new CommerceCartParameter();
		parameter.setEnableHooks(true);
		parameter.setCart(cart);
		parameter.setProduct(entry.getProduct());
		parameter.setQuantity(entry.getQuantity());
		parameter.setUnit(entry.getUnit());
		parameter.setCreateNewEntry(false);
		getCommerceCartService().addToCart(parameter);
	}

	@Override
	public List<OrderEntryGroup> perform(final List<OrderEntryGroup> paramList)
	{
		return null;
	}

	@Override
	public void afterSplitting(final OrderEntryGroup paramOrderEntryGroup, final ConsignmentModel paramConsignmentModel)
	{
		// do nothing

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

	/**
	 * @return the commerceCartService
	 */
	public CommerceCartService getCommerceCartService()
	{
		return commerceCartService;
	}

	/**
	 * @param commerceCartService
	 *           the commerceCartService to set
	 */
	public void setCommerceCartService(final CommerceCartService commerceCartService)
	{
		this.commerceCartService = commerceCartService;
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

}
