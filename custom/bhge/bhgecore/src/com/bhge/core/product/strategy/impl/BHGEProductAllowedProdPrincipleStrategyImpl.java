/**
 *
 */
package com.bhge.core.product.strategy.impl;

import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.servicelayer.user.UserService;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;

import com.bhge.core.product.strategy.BHGEProductAccessStrategy;
import com.bhge.facades.product.data.BHGEProductAccessData;


/**
 * @author 212695810
 * This strategy populates the category restriction on the product
 *
 */
public class BHGEProductAllowedProdPrincipleStrategyImpl implements BHGEProductAccessStrategy
{
	@Resource(name = "userService")
	UserService userService;

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.bhge.core.product.strategy.BHGEProductAccessStrategy#isProductAccessible(de.hybris.platform.core.model.product
	 * .ProductModel)
	 */
	@Override
	public BHGEProductAccessData isProductAccessible(final ProductModel product, final BHGEProductAccessData accessData)
	{
		accessData.setIsPresentInAllowedProdPrincipal(false);
		if (product instanceof GEEdgeProductModel && userService.getCurrentUser() instanceof GEEdgeCustomerModel
				&& accessData.isIsBuy())
		{
			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			final GEEdgeProductModel geEdgeProduct = (GEEdgeProductModel) product;
			if (CollectionUtils.isNotEmpty(geEdgeProduct.getAllowedProdPrincipals())
					&& geEdgeProduct.getAllowedProdPrincipals().contains(currentUser.getDefaultB2BUnit()))
			{
				accessData.setIsPresentInAllowedProdPrincipal(true);
			}
			else
			{
				accessData.setIsBuy(false);
			}
		}
		return accessData;
	}

}
