package com.bhge.facades.notifications;

import java.util.Date;
import java.util.List;

import com.bhge.facades.product.data.DSNotificationData;

public interface DsNotificationFacade {
	
	public List<DSNotificationData> getNotifications(final String customerNumber, final String mANorMELflag, final boolean refreshFlag,
			final String fromDate, final String toDate, final String endCustomerID);
	
	public void setFlagNotification(String serialNumber, String partNumber, String customerNumber,
			boolean setFlag);
	
	public void dismissNotifications(String serialNumber, String partNumber, String customerNumber,
			boolean setDismissed);
	
	public void markasReadNotifications(String serialNumber, String partNumber, String customerNumber,
			boolean marksRead);
	
	public List<DSNotificationData>  searchNotificationsBySerialNo(String serialNumber, String customerNumber);
	
	public void dismissAllNotifications(List<DSNotificationData> dSNotificationDataList, String dismissAll);
	
	public String calculateTimeForNotification(String notificationID, Date serviceDueDate);

	public List<DSNotificationData> applyBySort(List<DSNotificationData> dSNotificationDataList, String sortByValue);

}
