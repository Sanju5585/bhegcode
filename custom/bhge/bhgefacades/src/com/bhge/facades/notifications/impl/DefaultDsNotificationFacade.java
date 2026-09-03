package com.bhge.facades.notifications.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.text.ParseException; 

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.data.AddToMSEInputData;
import com.bhge.core.data.EquipmentData;
import com.bhge.core.model.DSNotificationModel;
import com.bhge.core.notifications.service.DsNotificationsService;
import com.bhge.facades.mysite.MySiteEquipmentFacade;
import com.bhge.facades.notifications.DsNotificationFacade;
import com.bhge.facades.product.data.DSNotificationData;
import com.bhge.facades.user.populators.DsNotificationsReversePopulator;

import de.hybris.platform.servicelayer.model.ModelService;

public class DefaultDsNotificationFacade implements DsNotificationFacade{
	
	@Resource(name = "mySiteEquipmentFacade")
	private MySiteEquipmentFacade mySiteEquipmentFacade;
	
	@Resource(name = "dsNotificationsService")
	private DsNotificationsService dsNotificationsService;
	
	@Resource(name = "dsNotificationsReversePopulator")
	private DsNotificationsReversePopulator dsNotificationsReversePopulator;
	
	@Resource(name = "modelService")
	private ModelService modelService;


	
	private static final Logger LOG = Logger.getLogger(DefaultDsNotificationFacade.class);
	
	@Override
	public List<DSNotificationData> getNotifications(final String customerNumber, final String mANorMELflag, final boolean refreshFlag,
			final String fromDate, final String toDate, final String endCustomerID) {
		
		final EquipmentData equipmentData = mySiteEquipmentFacade.getMSECacheData(customerNumber, mANorMELflag, refreshFlag,
				fromDate, toDate, endCustomerID);
		
		List<DSNotificationData> notificationDataList = new ArrayList<DSNotificationData>();
		if (equipmentData != null)
		{
			for(AddToMSEInputData calportalData : equipmentData.getEquipmentData()) {
				DSNotificationData dSNotificationData = new DSNotificationData();
				if(calportalData.isHasCalData() && StringUtils.isNotBlank(calportalData.getPinned()) && calportalData.isNotificationDue()) {
					DSNotificationModel notifications = dsNotificationsService.searchNotifications(calportalData.getSerialNumber(), calportalData.getPartNumber(), calportalData.getCustomer());
				if (notifications != null)
				{
				dSNotificationData.setNotificationID(notifications.getNotificationID());
				dSNotificationData.setIsFlagged(notifications.getIsFlagged());
				dSNotificationData.setIsDismissed(notifications.getIsDismissed());
				dSNotificationData.setIsRead(notifications.getIsRead());
				}
				else {
					notifications = modelService.create(DSNotificationModel.class);
				}
				if(notifications.getNotificationID() == null) {
				String notificationId = calportalData.getCustomer()+"_"+calportalData.getPartNumber()+"_"+calportalData.getSerialNumber();
				dSNotificationData.setNotificationID(notificationId);
				}
				dSNotificationData.setSerialNumber(calportalData.getSerialNumber());
				dSNotificationData.setPartNumber(calportalData.getPartNumber());
				dSNotificationData.setPartName(calportalData.getPartName());
				dSNotificationData.setCustomer(calportalData.getCustomer());
				dSNotificationData.setEndCustomer(calportalData.getEndCustomer());
				dSNotificationData.setEndCustomerName(calportalData.getEndCustomerName());
				dSNotificationData.setServiceInterval(calportalData.getServiceInterval());
				dSNotificationData.setLastServiceDate(calportalData.getLastServiceDate());
				dSNotificationData.setServiceDueDate(calportalData.getServiceDueDate());
				dSNotificationData.setLastCalibrationDate(calportalData.getLastCalibrationDate());
				dSNotificationData.setNextServiceDueInMonths(calportalData.getNextServiceDueInMonths());
				dSNotificationData.setNotificationMessage(calportalData.getNotificationMessage());
				dsNotificationsReversePopulator.populate(dSNotificationData, notifications);
				dsNotificationsService.saveNotifications(notifications);
				notificationDataList.add(dSNotificationData);
				
			}
				
			}
			
			
		}

		return notificationDataList;
	}

	public void setFlagNotification(String serialNumber, String partNumber, String customerNumber,
			boolean setFlag) {
		
		dsNotificationsService.setFlagNotification(serialNumber, partNumber, customerNumber, setFlag);
		
	}
	

	public void dismissNotifications(String serialNumber, String partNumber, String customerNumber,
			boolean setDismissed) {
		
		dsNotificationsService.dismissNotifications(serialNumber, partNumber, customerNumber, setDismissed);
		
	}
	
	public void markasReadNotifications(String serialNumber, String partNumber, String customerNumber,
			boolean marksRead) {
		
		dsNotificationsService.markasReadNotifications(serialNumber, partNumber, customerNumber, marksRead);
		
	}

	@Override
	public List<DSNotificationData> searchNotificationsBySerialNo(String serialNumber, String customerNumber) {
		// TODO Auto-generated method stub
		List<DSNotificationModel> dSNotificationList = dsNotificationsService.searchNotificationsBySerialNo(serialNumber, customerNumber);
		
		List<DSNotificationData> notificationDataList = new ArrayList<DSNotificationData>();
		if(CollectionUtils.isNotEmpty(dSNotificationList))
		{
			for(DSNotificationModel dSNotificationModel: dSNotificationList) {
				
				if((dSNotificationModel.getSerialNumber().equals(serialNumber) || dSNotificationModel.getPartNumber().equalsIgnoreCase(serialNumber)) && dSNotificationModel.getCustomer().equals(customerNumber)) {
		DSNotificationData notificationData = new DSNotificationData();
		notificationData.setNotificationID(dSNotificationModel.getNotificationID());
		notificationData.setIsFlagged(dSNotificationModel.getIsFlagged());
		notificationData.setIsDismissed(dSNotificationModel.getIsDismissed());
		notificationData.setIsRead(dSNotificationModel.getIsRead());
		notificationData.setSerialNumber(dSNotificationModel.getSerialNumber());
		notificationData.setPartNumber(dSNotificationModel.getPartNumber());
		notificationData.setPartName(dSNotificationModel.getPartName());
		notificationData.setCustomer(dSNotificationModel.getCustomer());
		notificationData.setEndCustomer(dSNotificationModel.getEndCustomer());
		notificationData.setEndCustomerName(dSNotificationModel.getEndCustomerName());
				notificationData.setServiceInterval(dSNotificationModel.getServiceIntervel());
		notificationData.setLastServiceDate(dSNotificationModel.getLastServiceDate());
		notificationData.setServiceDueDate(dSNotificationModel.getServiceDueDate());
		notificationData.setLastCalibrationDate(dSNotificationModel.getLastCalibrationDate());
		notificationData.setNextServiceDueInMonths(dSNotificationModel.getNextServiceDueInMonths());
		notificationData.setNotificationMessage(dSNotificationModel.getNotificationMessage());
		String notificationTime = calculateTimeForNotification(dSNotificationModel.getNotificationID(), dSNotificationModel.getServiceDueDate());
		notificationData.setNotificationTime(notificationTime);
		notificationDataList.add(notificationData);
		}
			}
		
	}
		return notificationDataList;
	}
	
	public void dismissAllNotifications(List<DSNotificationData> dSNotificationDataList, String dismissAll) {
		// TODO Auto-generated method stub
		dsNotificationsService.dismissAllNotifications(dSNotificationDataList, dismissAll);
		
	}
	
public String calculateTimeForNotification(String notificationID, Date serviceDueDate) { 
		
		String modifiedTime = dsNotificationsService.calculateTimeForNotification(notificationID, serviceDueDate);
		String notificationTime = "";
	    SimpleDateFormat formatter = new SimpleDateFormat("MM-dd-yyyy HH:mm:ss"); 
	    final Calendar c = Calendar.getInstance();
		String toDate = formatter.format(c.getTime());
	    try {   
           
            Date date1 = formatter.parse(modifiedTime);   
            Date date2 = formatter.parse(toDate);   
             
            final long time_difference = date2.getTime() - date1.getTime(); 
    		final long diffInDays = TimeUnit.MILLISECONDS.toDays(time_difference);
    		if (diffInDays >= 30)
    		{
    			final long diffInMonths = diffInDays / 30;
    			if (diffInMonths > 1)
    			{
    			notificationTime = (" " + String.valueOf(diffInMonths) + " Months" + " ago");
    			}
    			else
    			{
    				notificationTime = (" " + String.valueOf(diffInMonths) + " Month" + " ago");
    			}
    		}
    			else if (diffInDays < 30 && diffInDays > 1)
    			{
    				notificationTime = (" " + String.valueOf(diffInDays) + " days" + " ago");
    			}
    			else if (diffInDays == 1)
    			{
    				notificationTime = (" " + String.valueOf(diffInDays) + " day" + " ago");	
    			}
    			else if (diffInDays == 0)
    			{
    				 long hours_difference = (time_difference / (1000*60*60)) % 24;
    				 long minutes_difference = (time_difference / (1000*60)) % 60; 
    				 if (hours_difference < 24 && hours_difference > 1) {
    					 notificationTime = (" " + String.valueOf(hours_difference) + " hours" + " ago"); 
    				 }
    				 else if(hours_difference == 1)
    				 {
    					 notificationTime = (" " + String.valueOf(hours_difference) + " hour" + " ago"); 
    				 }
    				 
    				 else if(minutes_difference < 60 && minutes_difference > 1) {
    				 notificationTime = (" " + String.valueOf(minutes_difference) + " minutes" + " ago");
    				 }
    				 else if(minutes_difference == 1) {
    					 notificationTime = (" " + String.valueOf(minutes_difference) + " minute" + " ago");
    				 }
    				 else if(minutes_difference == 0) {
    					 notificationTime = (" just now");
    				 }
    			}
    			
	    }   
    		
        // Catch parse exception   
        catch (ParseException excep) {   
            excep.printStackTrace();   
        }   
		return notificationTime;
		
	}
	
public List<DSNotificationData> applyBySort(List<DSNotificationData> dSNotificationDataList, String sortByValue){
	
	if (CollectionUtils.isNotEmpty(dSNotificationDataList))
	{
		if (null != sortByValue)
		{
			Collections.sort(dSNotificationDataList, new NotificationLatestToOldestComparator<DSNotificationData>());
		}
		if (null != sortByValue && sortByValue.equalsIgnoreCase("latestToOldest"))
		{
			Collections.reverse(dSNotificationDataList);
			
		}
	}
	
	return dSNotificationDataList;
	
}

protected class NotificationLatestToOldestComparator<DSNotificationData> implements java.util.Comparator<DSNotificationData>
{
	@Override
	public int compare(final DSNotificationData data1, final DSNotificationData data2)
	{
		int result = 0;
		try
		{
			if (null != data1 && null != data2)
			{
				if (null != ((com.bhge.facades.product.data.DSNotificationData) data2).getServiceDueDate()
						&& null != ((com.bhge.facades.product.data.DSNotificationData) data1).getServiceDueDate())
				{
					result = ((com.bhge.facades.product.data.DSNotificationData) data1).getServiceDueDate()
							.compareTo(((com.bhge.facades.product.data.DSNotificationData) data2).getServiceDueDate());
				}
				else if (((com.bhge.facades.product.data.DSNotificationData) data2).getServiceDueDate() != null
						&& ((com.bhge.facades.product.data.DSNotificationData) data1).getServiceDueDate() == null)
				{
					result = 1;
				}
				else if (((com.bhge.facades.product.data.DSNotificationData) data2).getServiceDueDate() == null
						&& ((com.bhge.facades.product.data.DSNotificationData) data1).getServiceDueDate() != null)
				{
					result = -1;
				}
				else if (((com.bhge.facades.product.data.DSNotificationData) data2).getServiceDueDate() == null
						&& ((com.bhge.facades.product.data.DSNotificationData) data1).getServiceDueDate() == null)
				{
					result = 0;
				}
			}

		}
		catch (final Exception e)
		{
			LOG.error("Error occured while sorting the MSE data " + e);
		}
		return result;
	}
}

}