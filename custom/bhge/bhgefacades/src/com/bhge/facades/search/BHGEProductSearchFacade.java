/**
 *
 */
package com.bhge.facades.search;

import de.hybris.platform.commercefacades.product.data.CategoryData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.search.ProductSearchFacade;
import de.hybris.platform.commercefacades.search.data.SearchStateData;
import de.hybris.platform.commerceservices.search.facetdata.ProductCategorySearchPageData;
import de.hybris.platform.commerceservices.search.facetdata.ProductSearchPageData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;


/**
 * @author 212695810
 *
 */
public interface BHGEProductSearchFacade<ITEM extends ProductData> extends ProductSearchFacade
{
	/**
	 * Initiate a new search in category with view
	 *
	 * @param categoryCode
	 *           the category to search in
	 * @return the search results
	 */
	ProductCategorySearchPageData<SearchStateData, ITEM, CategoryData> categorySearch(String categoryCode, PageableData data,
			String filter);

	/**
	 * Pass the BUY , RETURN filter to OTTB method
	 *
	 * @param categoryCode
	 * @param searchState
	 * @param pageableData
	 * @param filter
	 * @return
	 */
	ProductCategorySearchPageData<SearchStateData, ITEM, CategoryData> categorySearch(String categoryCode,
			SearchStateData searchState, PageableData pageableData, String filter);

	/**
	 * Pass the BUY , RETURN filter to OTTB textSearch method
	 * 
	 * @param searchState
	 * @param pageableData
	 * @param filter
	 * @return
	 */
	
	ProductSearchPageData<SearchStateData, ITEM> textSearch(SearchStateData searchState, PageableData pageableData, String filter);

	
	ProductSearchPageData<SearchStateData, ITEM> textSearch(SearchStateData searchState, PageableData pageableData, String filter, String guestSalesArea);
}
