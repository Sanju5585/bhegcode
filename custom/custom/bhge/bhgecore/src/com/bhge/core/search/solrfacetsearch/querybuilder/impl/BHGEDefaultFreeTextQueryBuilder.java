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
package com.bhge.core.search.solrfacetsearch.querybuilder.impl;

import de.hybris.platform.commerceservices.search.solrfacetsearch.querybuilder.impl.DefaultFreeTextQueryBuilder;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.search.RawQuery;
import de.hybris.platform.solrfacetsearch.search.SearchQuery;
import de.hybris.platform.solrfacetsearch.search.SearchQuery.Operator;

import org.apache.log4j.Logger;
import org.apache.solr.client.solrj.util.ClientUtils;


/**
 * Base class for building free text queries.
 *
 * @deprecated Since 6.4, default search mode (instead of legacy) should be used.
 */
@Deprecated
public class BHGEDefaultFreeTextQueryBuilder extends DefaultFreeTextQueryBuilder
{
	private static final Logger LOG = Logger.getLogger(BHGEDefaultFreeTextQueryBuilder.class);

	@Override
	protected void addFreeTextQuery(final SearchQuery searchQuery, final IndexedProperty indexedProperty, final String fullText,
			final String[] textWords, final int boost)
	{
		addFreeTextQuery(searchQuery, indexedProperty, fullText, boost * 2.0d);

		if (textWords != null && textWords.length > 1)
		{
			for (final String word : textWords)
			{
				addFreeTextQuery(searchQuery, indexedProperty, word, boost);
			}
		}
	}

	@Override
	protected void addFreeTextQuery(final SearchQuery searchQuery, final IndexedProperty indexedProperty, final String value,
			final double boost)
	{
		final String field = indexedProperty.getName();
		if (!indexedProperty.isFacet())
		{
			if ("text".equalsIgnoreCase(indexedProperty.getType()))
			{
				addFreeTextQuery(searchQuery, field, value.toLowerCase(), "", boost);
				addFreeTextQuery(searchQuery, field, value.toLowerCase(), "*", boost / 2.0d);
				addFreeTextQuery(searchQuery, field, value.toLowerCase(), "~1", boost / 4.0d);
			}
			else
			{
				addFreeTextQuery(searchQuery, field, value.toLowerCase(), "", boost);
				if(field.equals("code")) {
					if(indexedProperty.getFtsWildcardQueryType().name().equals("PREFIX_AND_POSTFIX")) {
						addFreeTextQuery(searchQuery, field, value.toLowerCase(), "*", boost * 0.75d);
						addFreeTextBoostQuery(searchQuery, field, value.toLowerCase(), "*", boost / 2.0d);
					} else {
						addFreeTextQuery(searchQuery, field, value.toLowerCase(), "*", boost / 2.0d);
					}
				} else {
					addFreeTextQuery(searchQuery, field, value.toLowerCase(), "*", boost / 2.0d);
				}


			}
		}
		else
		{
			LOG.warn("Not searching " + indexedProperty
					+ ". Free text search not available in facet property. Configure an additional text property for searching.");
		}
	}

	/**
	 * Add a search term
	 *
	 * @param searchQuery
	 *           the search query
	 * @param field
	 *           the field to search in
	 * @param value
	 *           the value to search for (not solr escaped)
	 * @param suffixOp
	 *           suffix field operator
	 * @param boost
	 *           the boost factor for the term
	 */
	@Override
	@SuppressWarnings("deprecation")
	protected void addFreeTextQuery(final SearchQuery searchQuery, final String field, final String value, final String suffixOp,
			final double boost)
	{
		final RawQuery rawQuery = new RawQuery(field, ClientUtils.escapeQueryChars(value) + suffixOp + "^" + boost, Operator.OR);
		searchQuery.addRawQuery(rawQuery);
	}

	protected void addFreeTextBoostQuery(final SearchQuery searchQuery, final String field, final String value, final String suffixOp,
									final double boost)
	{
		final RawQuery rawQuery = new RawQuery(field, suffixOp + ClientUtils.escapeQueryChars(value) + suffixOp + "^" + boost, Operator.OR);
		searchQuery.addRawQuery(rawQuery);
	}
}
