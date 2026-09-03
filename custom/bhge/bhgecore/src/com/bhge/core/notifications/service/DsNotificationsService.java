package com.bhge.core.notifications.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.bhge.core.data.BHGEOrderUpdateEmailNotificationData;
import com.bhge.core.data.DsEmailNotificationData;
import com.bhge.core.model.DSNotificationModel;
import com.bhge.core.scpi.rfc.dsNotification.BHGEMtSalesOrderHdr;
import com.bhge.facades.product.data.DSNotificationData;
import de.hybris.platform.core.model.order.OrderModel;

public interface DsNotificationsService {
	public DSNotificationModel searchNotifications(String serialNumber, String partNumber, String customerNumber);
	
	public List<DSNotificationModel> searchNotificationsBySerialNo(String serialNumber,String customerNumber);
	
	public void saveNotifications(DSNotificationModel dSNotificationModel);
	
	public void setFlagNotification(String serialNumber, String partNumber, String customerNumber,
			boolean setFlag);


	public void dismissNotifications(String serialNumber, String partNumber, String customerNumber,
			boolean setDismissed);
	
	public void markasReadNotifications(String serialNumber, String partNumber, String customerNumber,
			boolean marksRead);
	
	public void dismissAllNotifications(List<DSNotificationData> dSNotificationDataList, String dismissAll);
	
	public String calculateTimeForNotification(String notificationID, Date serviceDueDate);

    public Map<String, List<BHGEOrderUpdateEmailNotificationData>>  getEmailNotificationsMap (DsEmailNotificationData dsEmailNotificationData);

    public void sendOrderUpdateEmail(final List<BHGEOrderUpdateEmailNotificationData> orderUpdateEmailList, String customerMailId, String customerName);

}
