package com.bhge.core.notifications.dao.impl;

import com.bhge.core.model.DSNotificationModel;
import com.bhge.core.notifications.dao.DsNotificationsDao;

import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.collections4.CollectionUtils;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

public class DefaultDsNotificationsDao implements DsNotificationsDao {
	
	@Autowired
	private FlexibleSearchService flexibleSearchService;
	
	private static final Logger LOG = Logger.getLogger(DefaultDsNotificationsDao.class);
	
	private static final String GET_NOTIFICATIONS = "Select {pk} from {DSNotification} where {serialNumber}=?serialNumber and {partNumber}=?partNumber and {customer}=?customerNumber";

	private static final String GET_NOTIFICATIONS_BY_SERIALNO = "Select {pk} from {DSNotification}";
	
	private static final String GET_NOTIFICATIONS_BY_ID = "Select {pk} from {DSNotification} where {notificationID}=?notificationID";

	@Override
	public DSNotificationModel searchNotifications(String serialNumber, String partNumber, String customerNumber) {
		// TODO Auto-generated method stub
		final Map<String, Object> queryParams = new HashMap<String, Object>();
		queryParams.put("serialNumber", serialNumber);
		queryParams.put("partNumber", partNumber);
		queryParams.put("customerNumber", customerNumber);
		final SearchResult<DSNotificationModel> result = flexibleSearchService
				.search(new FlexibleSearchQuery(GET_NOTIFICATIONS, queryParams));
		return CollectionUtils.isNotEmpty(result.getResult()) ? result.getResult().get(0) : null;
	}
	
	@Override
	public List<DSNotificationModel> searchNotificationsBySerialNo() {
		final SearchResult<DSNotificationModel> result = flexibleSearchService
				.search(new FlexibleSearchQuery(GET_NOTIFICATIONS_BY_SERIALNO));
		return result.getResult();
	}

	@Override
	public DSNotificationModel calculateTimeForNotification(String notificationID) {
		
		final Map<String, Object> queryParams = new HashMap<String, Object>();
		queryParams.put("notificationID", notificationID);
		final SearchResult<DSNotificationModel> result = flexibleSearchService
				.search(new FlexibleSearchQuery(GET_NOTIFICATIONS_BY_ID, queryParams));
		return CollectionUtils.isNotEmpty(result.getResult()) ? result.getResult().get(0) : null;
	}
}
