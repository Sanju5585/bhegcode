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
package com.bhge.core.search;

import de.hybris.platform.commerceservices.enums.SearchQueryContext;
import de.hybris.platform.commerceservices.search.ProductSearchService;
import de.hybris.platform.commerceservices.search.facetdata.ProductSearchPageData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;


/**
 *
 * Custom class written to pass BUY/RETURN filter
 *
 * @author 212695810
 *
 * @param <STATE>
 * @param <ITEM>
 * @param <RESULT>
 */
public interface BHGEProductSearchService<STATE, ITEM, RESULT extends ProductSearchPageData<STATE, ITEM>>
		extends ProductSearchService
{
	/**
	 * OTTB category search method with additional BUY/RETURN filter parameter
	 * 
	 * @param categoryCode
	 * @param searchQueryContext
	 * @param pageableData
	 * @param filter
	 * @return
	 */
	RESULT categorySearch(String categoryCode, SearchQueryContext searchQueryContext, PageableData pageableData, String filter);

}
