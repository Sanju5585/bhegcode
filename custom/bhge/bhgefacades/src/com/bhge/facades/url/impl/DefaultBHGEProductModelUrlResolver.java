/*
 * [y] hybris Platform
 *
 * Copyright (c) 2018 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.facades.url.impl;

import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.catalog.model.classification.ClassificationClassModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commerceservices.url.impl.DefaultProductModelUrlResolver;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.variants.model.VariantProductModel;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import jakarta.annotation.Resource;



import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;


/**
 * URL resolver for ProductData instances. The pattern could be of the form:
 * /{category-path}/{product-name}/p/{product-code}
 */
public class DefaultBHGEProductModelUrlResolver extends DefaultProductModelUrlResolver
{
	private final String CACHE_KEY = DefaultProductModelUrlResolver.class.getName();

	@Resource(name = "bhgeCommerceCategoryService")
	private BHGECommerceCategoryService bhgeCommerceCategoryService;
	private BaseSiteService baseSiteService;
	private String defaultPattern;

	@Override
	protected String getDefaultPattern()
	{
		return defaultPattern;
	}

	@Override

	public void setDefaultPattern(final String defaultPattern)
	{
		this.defaultPattern = defaultPattern;
	}

	@Override
	protected BaseSiteService getBaseSiteService()
	{
		return baseSiteService;
	}

	@Override

	public void setBaseSiteService(final BaseSiteService baseSiteService)
	{
		this.baseSiteService = baseSiteService;
	}

	@Override
	protected String getPattern()
	{
		return getDefaultPattern();
	}

	@Override
	protected String getKey(final ProductModel source)
	{
		return CACHE_KEY + "." + source.getPk().toString();
	}

	@Override
	protected String resolveInternal(final ProductModel source)
	{
		final ProductModel baseProduct = getBaseProduct(source);

		final BaseSiteModel currentBaseSite = getBaseSiteService().getCurrentBaseSite();

		String url = getPattern();

		if (currentBaseSite != null && url.contains("{baseSite-uid}"))
		{
			url = url.replace("{baseSite-uid}", urlEncode(currentBaseSite.getUid()));
		}
		if (url.contains("{category-path}"))
		{
			url = url.replace("{category-path}", buildPathString(getCategoryPath(baseProduct)));
		}

		if (url.contains("{product-name}"))
		{
			url = url.replace("{product-name}", urlSafe(baseProduct.getName()));
		}
		if (url.contains("{product-code}"))
		{
			url = url.replace("{product-code}", slashHandler(urlEncode(source.getCode())));
		}

		return url;
	}

	@Override
	protected String buildPathString(final List<CategoryModel> path)
	{
		if (path == null || path.isEmpty())
		{
			return "c"; // Default category part of path when missing category
		}

		final StringBuilder result = new StringBuilder();

		for (int i = 0; i < path.size(); i++)
		{
			if (i != 0)
			{
				result.append('/');
			}
			result.append(urlSafe(path.get(i).getName()));
		}

		return result.toString();
	}

	@Override
	protected List<CategoryModel> getCategoryPath(final ProductModel product)
	{
		final CategoryModel category = getPrimaryCategoryForProduct(product);
		if (category != null)
		{
			return getCategoryPath(category);
		}
		return Collections.emptyList();
	}

	@Override
	protected CategoryModel getPrimaryCategoryForProduct(final ProductModel product)
	{
		// Get the first super-category from the product that isn't a classification category
		for (final CategoryModel category : product.getSupercategories())
		{
			if (!(category instanceof ClassificationClassModel))
			{
				return category;
			}
		}
		return null;
	}

	@Override
	protected List<CategoryModel> getCategoryPath(final CategoryModel category)
	{
		final Collection<List<CategoryModel>> paths = bhgeCommerceCategoryService.getPathsForCategory(category);
		// Return first - there will always be at least 1
		return paths.iterator().next();
	}

	protected ProductModel getBaseProduct(final ProductModel product)
	{
		ProductModel current = product;

		while (current instanceof VariantProductModel)
		{
			final ProductModel baseProduct = ((VariantProductModel) current).getBaseProduct();
			if (baseProduct == null)
			{
				break;
			}
			else
			{
				current = baseProduct;
			}
		}
		return current;
	}

	protected String slashHandler(final String product)
	{
		if (product.contains("%2F"))
		{
			final String handledString = product.replaceAll("%2F", "%252F");
			return handledString;
		}
		return product;
	}
}
