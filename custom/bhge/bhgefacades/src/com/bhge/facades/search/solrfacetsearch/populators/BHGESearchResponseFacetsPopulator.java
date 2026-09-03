/**
 *
 */
package com.bhge.facades.search.solrfacetsearch.populators;

import de.hybris.platform.commerceservices.search.facetdata.FacetData;
import de.hybris.platform.commerceservices.search.facetdata.FacetValueData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchQueryData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.populators.SearchResponseFacetsPopulator;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.IndexedType;
import de.hybris.platform.solrfacetsearch.search.Facet;
import de.hybris.platform.solrfacetsearch.search.FacetValue;
import de.hybris.platform.solrfacetsearch.search.SearchResult;

import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.util.CollectionUtils;

import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;
import com.bhge.product.service.BHGEProductService;


/**
 * @author 212695810 This is a custom populator used to populate factes based on category restrictions for B2BUnit and
 *         anonymous user
 *
 */
public class BHGESearchResponseFacetsPopulator extends SearchResponseFacetsPopulator
{
	public static final String CATEGORY_NAME_LIST = "categoryNameList";

	private static final Logger LOG = Logger.getLogger(BHGESearchResponseFacetsPopulator.class);

	@Resource(name = "bhgeCommerceCategoryService")
	private BHGECommerceCategoryService bhgeCommerceCategoryService;

	@Resource(name = "productService")
	private BHGEProductService productService;

	@Resource(name = "sessionService")
	private SessionService sessionService;

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * de.hybris.platform.commerceservices.search.solrfacetsearch.populators.SearchResponseFacetsPopulator#buildFacets(de
	 * .hybris.platform.solrfacetsearch.search.SearchResult,
	 * de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchQueryData,
	 * de.hybris.platform.solrfacetsearch.config.IndexedType)
	 */
	@Override
	protected List<FacetData<SolrSearchQueryData>> buildFacets(final SearchResult solrSearchResult,
			final SolrSearchQueryData searchQueryData, final IndexedType indexedType)
	{
		final List<Facet> solrSearchResultFacets = solrSearchResult.getFacets();
		final List<FacetData<SolrSearchQueryData>> result = new ArrayList<>(solrSearchResultFacets.size());

		for (final Facet facet : solrSearchResultFacets)
		{
			final IndexedProperty indexedProperty = indexedType.getIndexedProperties().get(facet.getName());

			// Ignore any facets with a priority less than or equal to 0 as they are for internal use only
			final FacetData<SolrSearchQueryData> facetData = createFacetData();
			facetData.setCode(facet.getName());
			facetData.setCategory(indexedProperty.isCategoryField());
			final String displayName = indexedProperty.getDisplayName();
			facetData.setName(displayName == null ? facet.getName() : displayName);
			facetData.setMultiSelect(facet.isMultiselect());
			facetData.setPriority(facet.getPriority());
			facetData.setVisible(indexedProperty.isVisible());

			buildFacetValuesWithAvailabilityCondition(facetData, facet, indexedProperty, solrSearchResult, searchQueryData);

			// Only add the facet if there are values
			if (facetData.getValues() != null && !facetData.getValues().isEmpty())
			{
				result.add(facetData);
			}
		}

		return result;
	}

	/**
	 * Method to build facet values based on restrictions
	 *
	 * @param facetData
	 * @param facet
	 * @param indexedProperty
	 * @param solrSearchResult
	 * @param searchQueryData
	 */
	public void buildFacetValuesWithAvailabilityCondition(final FacetData<SolrSearchQueryData> facetData, final Facet facet,
			final IndexedProperty indexedProperty, final SearchResult solrSearchResult, final SolrSearchQueryData searchQueryData)
	{
		final List<FacetValue> facetValues = facet.getFacetValues();
		if (facetValues != null && !facetValues.isEmpty())
		{
			final List<FacetValueData<SolrSearchQueryData>> allFacetValues = new ArrayList<>(facetValues.size());
			for (final FacetValue facetValue : facetValues)
			{
				
				buildFacetValueWithAvailabilityCheck(facetData, facet, solrSearchResult, searchQueryData, allFacetValues, facetValue);
			}

			facetData.setValues(allFacetValues);

			if (!CollectionUtils.isEmpty(facet.getTopFacetValues()))
			{
				final List<FacetValueData<SolrSearchQueryData>> topFacetValuesData = new ArrayList<>();
				for (final FacetValue facetValue : facet.getTopFacetValues())
				{
					buildFacetValueWithAvailabilityCheck(facetData, facet, solrSearchResult, searchQueryData, topFacetValuesData,
							facetValue);

				}
				facetData.setTopValues(topFacetValuesData);
				
				
			}
			
		}
	}

	/**
	 * Method to build facet values based on restrictions
	 *
	 * @param facetData
	 * @param facet
	 * @param solrSearchResult
	 * @param searchQueryData
	 * @param allFacetValues
	 * @param facetValue
	 */
	private void buildFacetValueWithAvailabilityCheck(final FacetData<SolrSearchQueryData> facetData, final Facet facet,
			final SearchResult solrSearchResult, final SolrSearchQueryData searchQueryData,
			final List<FacetValueData<SolrSearchQueryData>> facetValues, final FacetValue facetValue)
	{
		//		if (facet.getName().equalsIgnoreCase(CATEGORY_NAME_LIST))
		//		{
		//			final CategoryModel category = bhgeCommerceCategoryService.getCategoryForCode(facetValue.getName());
		//			if (productService.isVisibleForCurrentUser(category))
		//			{
		//				buildFacetValue(facetData, facet, solrSearchResult, searchQueryData, facetValues, facetValue);
		//			}
		//		}
		//		else
		//		{
		buildFacetValue(facetData, facet, solrSearchResult, searchQueryData, facetValues, facetValue);
		//		}
	}

	/**
	 * Method to build facet values based on restrictions
	 *
	 * @param facetData
	 * @param facet
	 * @param solrSearchResult
	 * @param searchQueryData
	 * @param facetValueData
	 * @param facetValue
	 */
	private void buildFacetValue(final FacetData<SolrSearchQueryData> facetData, final Facet facet,
			final SearchResult solrSearchResult, final SolrSearchQueryData searchQueryData,
			final List<FacetValueData<SolrSearchQueryData>> topFacetValuesData, final FacetValue facetValue)
	{
		final FacetValueData<SolrSearchQueryData> facetValueData = buildFacetValue(facetData, facet, facetValue, solrSearchResult,
				searchQueryData);
		if (facetValueData != null)
		{
			topFacetValuesData.add(facetValueData);
		}
	}
}
