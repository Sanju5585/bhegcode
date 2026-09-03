package com.bhge.core.dataretention.dao;

import java.util.List;
import java.util.Map;

import de.hybris.platform.core.model.order.OrderModel;

public interface BHDataRetentionDAO {
	
	Map<String, Integer> getRetentionCountryList();
	
	List<OrderModel> getArchiveListForCountry(String country, Integer years);
	List<OrderModel> getArchiveListForCountries(List<String> countries);
}
