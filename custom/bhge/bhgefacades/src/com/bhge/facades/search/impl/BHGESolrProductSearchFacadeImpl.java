/**
 *
 */
package com.bhge.facades.search.impl;

import de.hybris.platform.commercefacades.product.data.CategoryData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.search.data.SearchStateData;
import de.hybris.platform.commercefacades.search.solrfacetsearch.impl.DefaultSolrProductSearchFacade;
import de.hybris.platform.commerceservices.search.facetdata.ProductCategorySearchPageData;
import de.hybris.platform.commerceservices.search.facetdata.ProductSearchPageData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchQueryData;
import de.hybris.platform.commerceservices.threadcontext.ThreadContextService;

import jakarta.annotation.Resource;

import org.springframework.util.Assert;

import com.bhge.core.search.BHGEProductSearchService;
import com.bhge.core.search.solrfacetsearch.data.BHGESolrSearchQueryData;
import com.bhge.facades.search.BHGEProductSearchFacade;


/**
 * @author 212695810
 *
 */
public class BHGESolrProductSearchFacadeImpl<ITEM extends ProductData> extends DefaultSolrProductSearchFacade
		implements BHGEProductSearchFacade
{
	@Resource(name = "bhgeProductSearchService")
	private BHGEProductSearchService bhgeProductSearchService;

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.search.BHGEProductSearchFacade#categorySearch(java.lang.String,
	 * de.hybris.platform.commerceservices.search.pagedata.PageableData)
	 */
	@Override
	public ProductCategorySearchPageData categorySearch(final String categoryCode, final PageableData data, final String filter)
	{
		return getThreadContextService().executeInContext(
				new ThreadContextService.Executor<ProductCategorySearchPageData<SearchStateData, ITEM, CategoryData>, ThreadContextService.Nothing>()
				{
					@Override
					public ProductCategorySearchPageData<SearchStateData, ITEM, CategoryData> execute()
					{
						return (ProductCategorySearchPageData<SearchStateData, ITEM, CategoryData>) getProductCategorySearchPageConverter()
								.convert(bhgeProductSearchService.categorySearch(categoryCode, null, data, filter));
					}
				});
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.search.BHGEProductSearchFacade#categorySearch(java.lang.String,
	 * de.hybris.platform.commercefacades.search.data.SearchStateData,
	 * de.hybris.platform.commerceservices.search.pagedata.PageableData, java.lang.String)
	 */
	@Override
	public ProductCategorySearchPageData categorySearch(final String categoryCode, final SearchStateData searchState,
			final PageableData pageableData, final String filter)
	{
		Assert.notNull(searchState, "SearchStateData must not be null.");

		return getThreadContextService().executeInContext(
				new ThreadContextService.Executor<ProductCategorySearchPageData<SearchStateData, ITEM, CategoryData>, ThreadContextService.Nothing>()
				{
					@Override
					public ProductCategorySearchPageData<SearchStateData, ITEM, CategoryData> execute()
					{
						return (ProductCategorySearchPageData<SearchStateData, ITEM, CategoryData>) getProductCategorySearchPageConverter()
								.convert(getProductSearchService().searchAgain(decodeState(searchState, categoryCode, filter),
										pageableData));
					}
				});
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * de.hybris.platform.commercefacades.search.solrfacetsearch.impl.DefaultSolrProductSearchFacade#textSearch(de.hybris
	 * .platform.commercefacades.search.data.SearchStateData,
	 * de.hybris.platform.commerceservices.search.pagedata.PageableData)
	 */
	
	@Override
	public ProductSearchPageData<SearchStateData, ITEM> textSearch(final SearchStateData searchState,
			final PageableData pageableData, final String filter)
	{
		Assert.notNull(searchState, "SearchStateData must not be null.");

		return getThreadContextService().executeInContext(
				new ThreadContextService.Executor<ProductSearchPageData<SearchStateData, ITEM>, ThreadContextService.Nothing>()
				{
					@Override
					public ProductSearchPageData<SearchStateData, ITEM> execute()
					{
						return (ProductSearchPageData<SearchStateData, ITEM>) getProductCategorySearchPageConverter()
								.convert(getProductSearchService().searchAgain(decodeState(searchState, null, filter), pageableData));
					}
				});
	}
	
	
	@Override
	public ProductSearchPageData<SearchStateData, ITEM> textSearch(final SearchStateData searchState,
			final PageableData pageableData, final String filter, final String guestSalesArea)
	{
		Assert.notNull(searchState, "SearchStateData must not be null.");

		return getThreadContextService().executeInContext(
				new ThreadContextService.Executor<ProductSearchPageData<SearchStateData, ITEM>, ThreadContextService.Nothing>()
				{
					@Override
					public ProductSearchPageData<SearchStateData, ITEM> execute()
					{
						return (ProductSearchPageData<SearchStateData, ITEM>) getProductCategorySearchPageConverter()
								.convert(getProductSearchService().searchAgain(decodeState(searchState, null, filter, guestSalesArea), pageableData));
					}
				});
	}

	/**
	 * Passing filter value to the OTTB decode method
	 */
	
	protected SolrSearchQueryData decodeState(final SearchStateData searchState, final String categoryCode, final String filter)
	{
		final BHGESolrSearchQueryData searchQueryData = (BHGESolrSearchQueryData) getSearchQueryDecoder()
				.convert(searchState.getQuery());
		searchQueryData.setFilter(filter);
		if (categoryCode != null)
		{
			searchQueryData.setCategoryCode(categoryCode);
		}

		return searchQueryData;
	}
	
	protected SolrSearchQueryData decodeState(final SearchStateData searchState, final String categoryCode, final String filter,
			final String guestSalesArea)
	{
		final BHGESolrSearchQueryData searchQueryData = (BHGESolrSearchQueryData) getSearchQueryDecoder()
				.convert(searchState.getQuery());
		searchQueryData.setFilter(filter);
		searchQueryData.setGuestSalesArea(guestSalesArea);
		if (categoryCode != null)
		{
			searchQueryData.setCategoryCode(categoryCode);
		}

		return searchQueryData;
	}

}
