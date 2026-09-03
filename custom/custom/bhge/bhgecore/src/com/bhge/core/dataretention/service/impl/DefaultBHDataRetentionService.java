package com.bhge.core.dataretention.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.MapUtils;
import org.apache.log4j.Logger;

import com.bhge.core.dataretention.dao.BHDataRetentionDAO;
import com.bhge.core.dataretention.service.BHDataRetentionService;

import de.hybris.platform.core.model.order.OrderModel;

public class DefaultBHDataRetentionService implements BHDataRetentionService {
	
	private static final Logger LOG = Logger.getLogger(DefaultBHDataRetentionService.class);
	
	@Resource
	private BHDataRetentionDAO bhDataRetentionDAO;

	@Override
	public List<OrderModel> getOrdersListToArchive() {
		
		List<OrderModel> ordersToArchive = new ArrayList<>();
		Map<String, Integer> retentionCountryData = bhDataRetentionDAO.getRetentionCountryList();
		if(!MapUtils.isEmpty(retentionCountryData))
		{
			for (Entry<String, Integer> entry : retentionCountryData.entrySet()) 
			{
				List<OrderModel> orders = new ArrayList<>();
				orders = bhDataRetentionDAO.getArchiveListForCountry(entry.getKey(), entry.getValue());
				if(!CollectionUtils.isEmpty(orders))
				{
					ordersToArchive.addAll(orders);
				}
			}
			List<String> countriesList = new ArrayList<>();
			countriesList.addAll(retentionCountryData.keySet());
			ordersToArchive.addAll(bhDataRetentionDAO.getArchiveListForCountries(countriesList));
		}
		return ordersToArchive;
	}

}
