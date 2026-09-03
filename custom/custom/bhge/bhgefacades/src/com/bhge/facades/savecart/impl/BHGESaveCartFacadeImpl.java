package com.bhge.facades.savecart.impl;

import com.bhge.core.order.service.BHGECartService;
import com.bhge.facades.order.BHGECartFacade;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.CartRestorationData;
import de.hybris.platform.commercefacades.order.data.CommerceSaveCartParameterData;
import de.hybris.platform.commercefacades.order.impl.DefaultSaveCartFacade;
import de.hybris.platform.commerceservices.order.CommerceSaveCartException;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commerceservices.service.data.CommerceSaveCartParameter;
import de.hybris.platform.converters.Converters;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.store.services.BaseStoreService;
import de.hybris.platform.util.localization.Localization;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;


import com.bhge.core.savecart.service.BHGECommerceSaveCartService;
import com.bhge.facades.savecart.BHGESaveCartFacade;

import jakarta.annotation.Resource;



public class BHGESaveCartFacadeImpl extends DefaultSaveCartFacade implements BHGESaveCartFacade
{
	private static final Logger LOG = Logger.getLogger(BHGESaveCartFacadeImpl.class);

	private BaseStoreService baseStoreService;

	private BHGECommerceSaveCartService bhgeCommerceSaveCartServiceImpl;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	public BaseStoreService getBaseStoreService()
	{
		return baseStoreService;
	}

	
	public void setBaseStoreService(final BaseStoreService baseStoreService)
	{
		this.baseStoreService = baseStoreService;
	}




	/**
	 * @return the bhgeCommerceSaveCartServiceImpl
	 */
	public BHGECommerceSaveCartService getBhgeCommerceSaveCartServiceImpl()
	{
		return bhgeCommerceSaveCartServiceImpl;
	}

	/**
	 * @param bhgeCommerceSaveCartServiceImpl
	 *           the bhgeCommerceSaveCartServiceImpl to set
	 */
	
	public void setBhgeCommerceSaveCartServiceImpl(final BHGECommerceSaveCartService bhgeCommerceSaveCartServiceImpl)
	{
		this.bhgeCommerceSaveCartServiceImpl = bhgeCommerceSaveCartServiceImpl;
	}

	/*
	 * Added to base store as additional parameter as GE Base Store is dictated by Sales Areas
	 */
	@Override
	public SearchPageData<CartData> getSavedCartsForCurrentUser(final PageableData pageableData,
			final List<OrderStatus> orderStatus)
	{
		final SearchPageData<CartData> result = new SearchPageData<>();
		List<CartData> savedCartDatas = new ArrayList<CartData>();
		final SearchPageData<CartModel> savedCartModels = bhgeCommerceSaveCartServiceImpl.getSavedCartsForBasestoreAndUser(
				pageableData, getBaseSiteService().getCurrentBaseSite(), getBaseStoreService().getCurrentBaseStore(),
				getUserService().getCurrentUser(), orderStatus);

		if (null != savedCartModels)
		{
			result.setPagination(savedCartModels.getPagination());
			result.setSorts(savedCartModels.getSorts());
			savedCartDatas = Converters.convertAll(savedCartModels.getResults(), getCartConverter());
		}
		result.setResults(savedCartDatas);
		return result;
	}
	@Override
	/* @Override */
	protected String generateSaveCartName(final CartModel cartModel, final String name, final boolean clone)
	{
		final String baseCartName = StringUtils.trim(cartModel.getName());
		if (clone && StringUtils.isNotEmpty(baseCartName))
		{
			final String copyCountRegex = ""/*
													   * getConfigurationService().getConfiguration().getString(
													   * "commerceservices.clone.savecart.name.regex" + "." +
													   * getBaseSiteService().getCurrentBaseSite().getUid())
													   */;
			if (StringUtils.isNotEmpty(copyCountRegex))
			{
				return ""/* getSaveCartTextGenerationStrategy().generateCloneSaveCartName(cartModel, copyCountRegex) */;
			}
		}

		final String clonePrefix = Localization.getLocalizedString("gecore.cart.copyof");
		final StringBuilder nameBuffer = clone ? new StringBuilder(clonePrefix).append(" ") : new StringBuilder();

		if (StringUtils.isNotEmpty(name))
		{
			return nameBuffer.append(name).toString();
		}
		else if (StringUtils.isNotEmpty(baseCartName))
		{
			return nameBuffer.append(baseCartName).toString();
		}

		return ""/* getSaveCartTextGenerationStrategy().generateSaveCartName(cartModel) */;
	}

	public Boolean checkIfAlreadyExists(final PageableData pageableData, final String cartName)
	{
		final SearchPageData<CartData> searchPageData = getSavedCartsForCurrentUser(pageableData, null);
		if (null != searchPageData && CollectionUtils.isNotEmpty(searchPageData.getResults()))
		{
			for (final CartData cartData : searchPageData.getResults())
			{
				if (StringUtils.isNotBlank(cartData.getName()) && StringUtils.isNotBlank(cartName)
						&& cartData.getName().equalsIgnoreCase(cartName))
				{
					return Boolean.TRUE;
				}
			}
		}
		return Boolean.FALSE;
	}

	@Override
	public Integer getSavedCartsCountForCurrentUser()
	{
		if (!getUserService().isAnonymousUser(getUserService().getCurrentUser()))
		{
			return bhgeCommerceSaveCartServiceImpl.getSavedCartsCountForBasestoreAndUser(getBaseSiteService().getCurrentBaseSite(),
					getBaseStoreService().getCurrentBaseStore(), getUserService().getCurrentUser());
		}
		else
		{
			return new Integer(0);
		}
	}
	
	@Override
	public SearchPageData<CartData> getSavedCartsForUser(final PageableData pageableData,
			final List<OrderStatus> orderStatus)
	{
		final SearchPageData<CartData> result = new SearchPageData<>();
		List<CartData> savedCartDatas = new ArrayList<CartData>();
		final SearchPageData<CartModel> savedCartModels = bhgeCommerceSaveCartServiceImpl.getSavedCartsForUser(
				pageableData, getBaseSiteService().getCurrentBaseSite(), getBaseStoreService().getCurrentBaseStore(),
				getUserService().getCurrentUser(), orderStatus);

		if (null != savedCartModels)
		{
			result.setPagination(savedCartModels.getPagination());
			result.setSorts(savedCartModels.getSorts());
			LOG.info("TA956171: Before Making Converter Call");
			savedCartDatas = Converters.convertAll(savedCartModels.getResults(), getCartConverter());
		}
		result.setResults(savedCartDatas);
		return result;
	}

	@Override
	public void deleteSavedCart(String cartId) {
		LOG.info("In delete saved cart method line 187");
		CartModel cart = bhgeCartService.getCartByCodeForDSstore(cartId);
		getModelService().remove(cart.getPk());
		LOG.info("Cart " + cartId + " has been deleted successfully line 190");
	}

	@Override
	public CartRestorationData restoreSavedCart(final CommerceSaveCartParameterData parameters) throws CommerceSaveCartException
	{
		final CommerceSaveCartParameter parameter = new CommerceSaveCartParameter();

		final CartModel cartForCodeAndUser = getCommerceCartService().getCartForCodeAndUser(parameters.getCartId(),
				getUserService().getCurrentUser());

		if (null == cartForCodeAndUser)
		{
			throw new CommerceSaveCartException("Cannot find a cart for code [" + parameters.getCartId() + "]");
		}

		parameter.setCart(cartForCodeAndUser);
		parameter.setEnableHooks(parameters.isEnableHooks());

		return getCartRestorationConverter().convert(bhgeCommerceSaveCartServiceImpl.restoreSavedCart(parameter));
	}
}
