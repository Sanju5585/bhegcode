/**
 * 
 */
package com.bhge.core.savecart.service.impl;

import de.hybris.platform.commerceservices.search.flexiblesearch.impl.DefaultPagedFlexibleSearchService;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.servicelayer.search.SearchResult;

/**
 * @author marchaka
 *
 */
public class DefaultBHGEPagedFlexibleSearchService extends DefaultPagedFlexibleSearchService
{

	@Override
	protected <T> PaginationData createPagination(final PageableData pageableData, final SearchResult<T> searchResult)
	{
		// Calculate the number of pages
		double totalCount = searchResult.getTotalCount();
		double temp = totalCount / pageableData.getPageSize();
		int noOfPages = (int) Math.ceil(temp);
		
		final PaginationData paginationData = createPaginationData();
		paginationData.setPageSize(searchResult.getCount());
		paginationData.setSort(pageableData.getSort());
		paginationData.setTotalNumberOfResults(searchResult.getTotalCount());

		paginationData.setNumberOfPages(noOfPages);
		paginationData.setCurrentPage(pageableData.getCurrentPage());

		return paginationData;
	}
	
}
