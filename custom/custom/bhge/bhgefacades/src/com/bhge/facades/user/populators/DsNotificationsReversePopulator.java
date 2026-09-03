package com.bhge.facades.user.populators;

import org.springframework.util.Assert;

import com.bhge.core.model.DSNotificationModel;
import com.bhge.facades.product.data.DSNotificationData;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

public class DsNotificationsReversePopulator implements Populator<DSNotificationData, DSNotificationModel> {

	@Override
	public void populate(DSNotificationData source, DSNotificationModel target) throws ConversionException {
		// TODO Auto-generated method stub
		Assert.notNull(source, "Parameter source cannot be null.");
		Assert.notNull(target, "Parameter target cannot be null.");
		
		target.setNotificationID(source.getNotificationID());
		target.setSerialNumber(source.getSerialNumber());
		target.setPartNumber(source.getPartNumber());
		target.setPartName(source.getPartName()); 
		target.setLastServiceDate(source.getLastServiceDate());
		target.setNextServiceDueInMonths(source.getNextServiceDueInMonths());
		target.setServiceDueDate(source.getServiceDueDate());
		target.setServiceIntervel(source.getServiceInterval());
		target.setEndCustomer(source.getEndCustomer());
		target.setCustomer(source.getCustomer());
		target.setEndCustomerName(source.getEndCustomerName());
		target.setNotificationMessage(source.getNotificationMessage());
		target.setLastCalibrationDate(source.getLastCalibrationDate());
		if(source.getIsDismissed() == null) {
			target.setIsDismissed(false);
		}
		if(source.getIsFlagged() == null) {
		target.setIsFlagged(false);
		}
		if(source.getIsRead() == null) {
		target.setIsRead(false);
		}
		
	}

}
