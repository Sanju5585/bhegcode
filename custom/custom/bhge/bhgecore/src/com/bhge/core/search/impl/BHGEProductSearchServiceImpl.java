/**
 *
 */
package com.bhge.core.search.impl;

import de.hybris.platform.commerceservices.enums.SearchQueryContext;
import de.hybris.platform.commerceservices.search.facetdata.ProductSearchPageData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchQueryTermData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.impl.DefaultSolrProductSearchService;

import java.util.Collections;

import com.bhge.core.search.BHGEProductSearchService;
import com.bhge.core.search.solrfacetsearch.data.BHGESolrSearchQueryData;


/**
 * Custom implementation class for BHGEProductSearchService
 * 
 * @author 212695810
 *
 */
public class BHGEProductSearchServiceImpl extends DefaultSolrProductSearchService implements BHGEProductSearchService
{

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.search.BHGEProductSearchService#categorySearch(java.lang.String,
	 * de.hybris.platform.commerceservices.enums.SearchQueryContext,
	 * de.hybris.platform.commerceservices.search.pagedata.PageableData, java.lang.String)
	 */
	@Override
	public ProductSearchPageData categorySearch(final String categoryCode, final SearchQueryContext searchQueryContext,
			final PageableData pageableData, final String filter)
	{
		final BHGESolrSearchQueryData searchQueryData = createSearchQueryData();
		searchQueryData.setCategoryCode(categoryCode);
		searchQueryData.setFilterTerms(Collections.<SolrSearchQueryTermData> emptyList());
		searchQueryData.setSearchQueryContext(searchQueryContext);
		searchQueryData.setFilter(filter);

		return doSearch(searchQueryData, pageableData);
	}

	@Override
	protected BHGESolrSearchQueryData createSearchQueryData()
	{
		return new BHGESolrSearchQueryData();
	}

}
