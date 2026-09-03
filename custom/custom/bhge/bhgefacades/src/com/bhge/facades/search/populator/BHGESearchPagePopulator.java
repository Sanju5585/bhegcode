/**
 *
 */
package com.bhge.facades.search.populator;

import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SearchQueryPageableData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchQueryData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchRequest;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.solrfacetsearch.search.SearchQuery;

import jakarta.annotation.Resource;


/**
 * @author 212695810
 *
 */
public class BHGESearchPagePopulator<FACET_SEARCH_CONFIG_TYPE, INDEXED_TYPE_TYPE, INDEXED_PROPERTY_TYPE, INDEXED_TYPE_SORT_TYPE>
		implements
		Populator<SearchQueryPageableData<SolrSearchQueryData>, SolrSearchRequest<FACET_SEARCH_CONFIG_TYPE, INDEXED_TYPE_TYPE, INDEXED_PROPERTY_TYPE, SearchQuery, INDEXED_TYPE_SORT_TYPE>>
{
	public static final int MAX_PAGE_LIMIT = 1000;
	public static final String MAX_PAGE_LIMIT_PROP = "product.list.max.page.limit";
	@Resource(name = "configurationService")
	ConfigurationService configurationService;

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.converters.Populator#populate(java.lang.Object, java.lang.Object)
	 */
	@Override
	public void populate(final SearchQueryPageableData<SolrSearchQueryData> source,
			final SolrSearchRequest<FACET_SEARCH_CONFIG_TYPE, INDEXED_TYPE_TYPE, INDEXED_PROPERTY_TYPE, SearchQuery, INDEXED_TYPE_SORT_TYPE> target)
			throws ConversionException
	{
		if (target.getPageableData() != null)
		{
			// Set the page size
			final int pageSize = Math.min(configurationService.getConfiguration().getInt(MAX_PAGE_LIMIT_PROP, MAX_PAGE_LIMIT),
					target.getPageableData().getPageSize());
			if (pageSize > 0)
			{
				target.getSearchQuery().setPageSize(pageSize);
			}

			final int currentPage = target.getPageableData().getCurrentPage();
			if (currentPage >= 0)
			{
				target.getSearchQuery().setOffset(currentPage);
			}
		}
		else
		{
			// We want the first page of results
			target.getSearchQuery().setOffset(0);
		}
	}
}