package com.bhge.core.dataretention.dao.impl;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.dataretention.dao.BHDataRetentionDAO;
import com.bhge.core.model.BHCountryDataRetentionModel;

import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.util.Config;

public class DefaultBHDataRetentionDAO implements BHDataRetentionDAO {
	
	private static final Logger LOG = Logger.getLogger(DefaultBHDataRetentionDAO.class);
	
	private static String QUERY_TO_GET_RETENTION_YEARS = "select {pk} from {BHCountryDataRetention}";
	
	private static String QUERY_TO_GET_ORDERS_FOR_COUNTRY = "SELECT {O.pk} FROM " 
			+ " { Order as O LEFT JOIN B2BUNIT AS B2B ON {O:soldtoforcart}={B2B:PK} "
			+ " LEFT JOIN B2BUNIT AS B2B1 ON {B2B1:UID} = SUBSTRING({B2B.UID},0,11) "
			+ " } where {B2B1:countryCP} = ?country and CURRENT_TIMESTAMP > DATEADD(month, ?months, {O.creationtime})";
	
	private static String QUERY_TO_GET_ORDERS_FOR_COUNTRIES = "SELECT {O.pk} FROM " 
			+ " { Order as O LEFT JOIN B2BUNIT AS B2B ON {O:soldtoforcart}={B2B:PK} "
			+ " LEFT JOIN B2BUNIT AS B2B1 ON {B2B1:UID} = SUBSTRING({B2B.UID},0,11) "
			+ " } where {B2B1:countryCP} not in (?countries) and CURRENT_TIMESTAMP > DATEADD(month, ?months, {O.creationtime})";
	
	@Override
	public Map<String, Integer> getRetentionCountryList() {
		
		FlexibleSearchQuery query = new FlexibleSearchQuery(QUERY_TO_GET_RETENTION_YEARS);
		final SearchResult<BHCountryDataRetentionModel> result = getFlexibleSearchService().search(query);
		Map<String, Integer> retentionCoutryDataMap = new HashMap<String, Integer>();
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			result.getResult().forEach(model -> retentionCoutryDataMap.put(model.getCountry().getIsocode(), model.getDataRetentionPeriod())); 
		}
		return retentionCoutryDataMap;
	}

	@Override
	public List<OrderModel> getArchiveListForCountry(String country, Integer months) {
		FlexibleSearchQuery query = new FlexibleSearchQuery(QUERY_TO_GET_ORDERS_FOR_COUNTRY);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("country", country);
		params.put("months", months);
		query.addQueryParameters(params);
		final SearchResult<OrderModel> result = getFlexibleSearchService().search(query);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			LOG.info("Orders to be archived for country : " + country + " which are aged " + months + " months");
			List<OrderModel> orders = result.getResult();
			orders.forEach(order -> LOG.info(country + " -> " + order.getCode()));
			return orders;
		}
		return Collections.emptyList();
	}
	
	/*This method is used to get list of orders to be archived for the countries those does not present in BHCountryDataRetention table
	  with default retention period as 7 years/84 months
	*/
	@Override
	public List<OrderModel> getArchiveListForCountries(List<String> countries) {
		FlexibleSearchQuery query = new FlexibleSearchQuery(QUERY_TO_GET_ORDERS_FOR_COUNTRIES);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("countries", countries);
		params.put("months", Config.getInt("default.retention.period", 84));
		query.addQueryParameters(params);
		LOG.info("Query to get archive list for remaining countries: " + query);
		final SearchResult<OrderModel> result = getFlexibleSearchService().search(query);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult();
		}
		return Collections.emptyList();
	}

	@Resource
	private FlexibleSearchService flexibleSearchService;
	
	public FlexibleSearchService getFlexibleSearchService()
	{
		return flexibleSearchService;
	}

	public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
	{
		this.flexibleSearchService = flexibleSearchService;
	}
}
