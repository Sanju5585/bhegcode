/**
 *
 */
package com.bhge.facades.search.solrfacetsearch.populators;

import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commerceservices.search.solrfacetsearch.populators.SearchResponseSubCategoriesPopulator;
import de.hybris.platform.solrfacetsearch.search.Facet;
import de.hybris.platform.solrfacetsearch.search.FacetValue;
import de.hybris.platform.solrfacetsearch.search.SearchResult;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.annotation.Resource;

import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;
import com.bhge.product.service.BHGEProductService;


/**
 * @author 212695810 This is custom populator to consider category restrictions during subcategory population
 *
 */
public class BHGESearchResponseSubCategoriesPopulator extends SearchResponseSubCategoriesPopulator
{

	@Resource(name = "productService")
	private BHGEProductService productService;

	@Resource(name = "bhgeCommerceCategoryService")
	private BHGECommerceCategoryService bhgeCommerceCategoryService;

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.commerceservices.search.solrfacetsearch.populators.SearchResponseSubCategoriesPopulator#
	 * buildSubCategories(java.lang.String, de.hybris.platform.solrfacetsearch.search.SearchResult)
	 */
	@Override
	protected List<CategoryModel> buildSubCategories(final String categoryCode, final SearchResult solrSearchResult)
	{
		if (solrSearchResult != null && solrSearchResult.getNumberOfResults() > 0)
		{
			final Facet categoryPathFacet = solrSearchResult.getFacet("categoryPath");
			if (categoryPathFacet != null && categoryCode != null && !categoryCode.isEmpty())
			{
				final CategoryModel currentCategory = bhgeCommerceCategoryService.getCategoryForCode(categoryCode);
				if (currentCategory != null)
				{
					final Set<String> prefixFilters = getPathsForCategory(currentCategory);
					// Take all category path facets
					// Filter paths by the current selected path
					final Set<String> subCategoryCodes = new HashSet<String>();
					// Extract direct children

					for (final FacetValue facetValue : categoryPathFacet.getFacetValues())
					{
						final String subCategoryPath = extractCategorySubPath(prefixFilters, facetValue.getName());
						if (subCategoryPath != null && !subCategoryPath.isEmpty())
						{
							subCategoryCodes.add(subCategoryPath);
						}
					}

					// Build SubCategories
					final List<CategoryModel> subCategories = new ArrayList<CategoryModel>();
					for (final String subCategoryCode : subCategoryCodes)
					{
						final CategoryModel subCategory = bhgeCommerceCategoryService.getCategoryForCode(subCategoryCode);
						subCategories.add(bhgeCommerceCategoryService.getCategoryForCode(subCategoryCode));
					}

					// Sort the sub-categories by name
					Collections.sort(subCategories, CategoryComparator.INSTANCE);

					return subCategories;
				}
			}
		}
		return null;
	}
}
