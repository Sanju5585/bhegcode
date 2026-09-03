package com.bhge.core.dataretention.service;

import java.util.List;

import de.hybris.platform.core.model.order.OrderModel;

public interface BHDataRetentionService {

	List<OrderModel> getOrdersListToArchive();
	
}
