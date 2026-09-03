/**
 *
 */
package com.bhge.facades.search.populator;

import de.hybris.platform.commerceservices.search.solrfacetsearch.data.IndexedPropertyValueData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SearchQueryPageableData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchFilterQueryData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchQueryData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchQueryTermData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchRequest;
import de.hybris.platform.commerceservices.search.solrfacetsearch.populators.SearchFiltersPopulator;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.IndexedType;
import de.hybris.platform.solrfacetsearch.search.QueryField;
import de.hybris.platform.solrfacetsearch.search.SearchQuery;
import de.hybris.platform.solrfacetsearch.search.SearchQuery.Operator;
import de.hybris.platform.solrfacetsearch.search.SearchQuery.QueryOperator;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;

import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.data.SalesAreaData;


/**
 * @author 212695810
 *
 */
public class BHGESearchFiltersPopulator<FACET_SEARCH_CONFIG_TYPE, INDEXED_TYPE_SORT_TYPE>
		extends SearchFiltersPopulator<FACET_SEARCH_CONFIG_TYPE, INDEXED_TYPE_SORT_TYPE>
{

	@Resource(name = "sessionService")
	SessionService sessionService;
	
	@Resource(name = "bhgeSoldToUtil")
	BHGESoldToUtil bhgeSoldToUtil;
	@Override
	public void populate(final SearchQueryPageableData<SolrSearchQueryData> source,
			final SolrSearchRequest<FACET_SEARCH_CONFIG_TYPE, IndexedType, IndexedProperty, SearchQuery, INDEXED_TYPE_SORT_TYPE> target)
	{
		// Convert the facet filters into IndexedPropertyValueData
		final List<IndexedPropertyValueData<IndexedProperty>> indexedPropertyValues = new ArrayList<IndexedPropertyValueData<IndexedProperty>>();
		final Map<String, SolrSearchFilterQueryData> filterQueriesMap = new HashMap<>();
		final List<SolrSearchQueryTermData> terms = target.getSearchQueryData().getFilterTerms();
		if (terms != null && !terms.isEmpty())
		{
			for (final SolrSearchQueryTermData term : terms)
			{
				final IndexedProperty indexedProperty = target.getIndexedType().getIndexedProperties().get(term.getKey());

				if (indexedProperty != null)
				{
					final IndexedPropertyValueData<IndexedProperty> indexedPropertyValue = new IndexedPropertyValueData<IndexedProperty>();
					indexedPropertyValue.setIndexedProperty(indexedProperty);
					indexedPropertyValue.setValue(term.getValue());
					indexedPropertyValues.add(indexedPropertyValue);
				}
			}
		}
		target.setIndexedPropertyValues(indexedPropertyValues);

		populateFilterQueries(target.getSearchQueryData(), filterQueriesMap);

		// Add the facet filters
		for (final IndexedPropertyValueData<IndexedProperty> indexedPropertyValue : target.getIndexedPropertyValues())
		{
			if (indexedPropertyValue.getIndexedProperty().getName().equalsIgnoreCase("hybrisStatus"))
			{
				final SalesAreaData sessionSalesAreaData = bhgeSoldToUtil.getSalesAreaData() != null ? bhgeSoldToUtil.getSalesAreaData() : null;
				final List<String> salesAreas = new ArrayList<String>();
				if(sessionSalesAreaData !=null){
					final String hybrisStatusWithSalesArea = sessionSalesAreaData.getSalesOrg() + "_" + indexedPropertyValue.getValue();
					salesAreas.add(hybrisStatusWithSalesArea);
				}

				final QueryField filterQuery = new QueryField("hybrisStatusWithSalesAreas_string_mv", Operator.OR,
						QueryOperator.EQUAL_TO, salesAreas.toArray(new String[salesAreas.size()]));
				target.getSearchQuery().addFilterQuery(filterQuery);
			}
			else
			{
				target.getSearchQuery().addFacetValue(indexedPropertyValue.getIndexedProperty().getName(),
						indexedPropertyValue.getValue());
			}
		}

		// Add category restriction
		if (target.getSearchQueryData().getCategoryCode() != null)
		{
			// allCategories field indexes all the separate category hierarchies
			target.getSearchQuery().addFilterQuery("allCategories", target.getSearchQueryData().getCategoryCode());
		}

		// Add filter queries
		final List<SolrSearchFilterQueryData> filterQueries = target.getSearchQueryData().getFilterQueries();

		if (CollectionUtils.isNotEmpty(filterQueries))
		{
			for (final SolrSearchFilterQueryData solrSearchFilterQuery : filterQueries)
			{
				target.getSearchQuery().addFilterQuery(convertFilterQuery(solrSearchFilterQuery));
			}
		}
	}
}