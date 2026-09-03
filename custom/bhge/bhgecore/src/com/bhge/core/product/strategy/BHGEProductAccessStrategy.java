/**
 *
 */
package com.bhge.core.product.strategy;

import de.hybris.platform.core.model.product.ProductModel;

import com.bhge.facades.product.data.BHGEProductAccessData;


/**
 * @author 212695810
 * This interface is defined as parent interface for all the product access strategy classes
 *
 */
public interface BHGEProductAccessStrategy
{
	BHGEProductAccessData isProductAccessible(ProductModel product, BHGEProductAccessData accessData);
}
