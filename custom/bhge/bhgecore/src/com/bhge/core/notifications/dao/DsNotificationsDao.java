package com.bhge.core.notifications.dao;

import java.util.List;

import com.bhge.core.model.DSNotificationModel;

public interface DsNotificationsDao {
	
	public DSNotificationModel searchNotifications(String serialNumber, String partNumber, String customerNumber);
	
	public List<DSNotificationModel> searchNotificationsBySerialNo();
	
	public DSNotificationModel calculateTimeForNotification(String notificationID);

}
