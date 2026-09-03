/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.register.webservices.interceptors;

import de.hybris.platform.core.PK;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.tx.AfterSaveEvent;
import de.hybris.platform.tx.AfterSaveListener;

import java.util.Collection;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.register.webservices.services.SubmitRegisterRequestService;
import com.bhgeregister.dto.BHGERegisterRequest;


public class CommerceCustomerListener implements AfterSaveListener
{
	private static final Logger LOGGER = Logger.getLogger(CommerceCustomerListener.class);

	private ModelService modelService;
	
	@Autowired
	private BHGEB2BUnitService bhgeB2BUnitService;

	private SubmitRegisterRequestService submitRegisterRequestService;

	@SuppressWarnings("deprecation")
	@Override
	public void afterSave(final Collection<AfterSaveEvent> events)
	{
		int operationType;
		PK keyValue;
		final String functionalVal = null;
		final String typeValue = null;
		final Map<String, Object> emailParamMap = null;
		for (final AfterSaveEvent event : events)
		{
			try
			{
				operationType = event.getType();
				keyValue = event.getPk();
				//LOGGER.info("Update Event Trigger - " + keyValue.getTypeCode() + " & Operation - " + operationType);
				if (AfterSaveEvent.CREATE == operationType && modelService.get(keyValue) instanceof GEEdgeCustomerModel)
				{
					final GEEdgeCustomerModel customerModel = (GEEdgeCustomerModel) modelService.get(keyValue);
					LOGGER.info("CreateCommerce Customer Modification Triggered." + customerModel.getUid());

					//if ("BHGERegisterIDoc".equals(customerModel.getDefaultB2BUnit().getUid()))
					//{
					if(customerModel.getGroups().contains(bhgeB2BUnitService.getUnitForUid("BHGERegisterIDoc")))
					{
						final BHGERegisterRequest registerRequest = new BHGERegisterRequest();
						if (customerModel.getName() != null)
						{
							if (customerModel.getName().indexOf(" ") == -1)
							{
								registerRequest.setFirstName(customerModel.getName());
							}
							else
							{
								registerRequest.setFirstName(customerModel.getName().substring(0, customerModel.getName().indexOf(" ")));
								registerRequest.setLastName(customerModel.getName().substring(customerModel.getName().indexOf(" ") + 1));
							}
						}
						registerRequest.setUserId(customerModel.getUid());
						if(null != customerModel.getDefaultB2BUnit())
						{
							registerRequest.setCustomerNumber(customerModel.getDefaultB2BUnit().getUid());
						}
						registerRequest.setEmail(customerModel.getEmail());
						registerRequest.setSapContactId(customerModel.getSapContactID());
						registerRequest.setCustomerNumber(customerModel.getSapConsumerID());
						submitRegisterRequestService.createReverseFlowForIdoc(registerRequest, customerModel);
					  }

				}
				/*
				 * if (AfterSaveEvent.UPDATE == operationType && modelService.get(keyValue)
				 * instanceof GEEdgeCustomerModel) { final GEEdgeCustomerModel customerModel =
				 * (GEEdgeCustomerModel) modelService.get(keyValue);
				 * LOGGER.info("UpdateCommerce Customer Modification Triggered." +
				 * customerModel.getUid()); if(null != customerModel.getDefaultSoldTo()) {
				 * LOGGER.info("Update Commerce DefaultSoldTo ." +
				 * customerModel.getDefaultSoldTo().getUid()); }
				 * 
				 * if ("BHGERegisterIDoc".equals(customerModel.getDefaultB2BUnit().getUid())) {
				 * final BHGERegisterRequest registerRequest = new BHGERegisterRequest();
				 * registerRequest.setUserId(customerModel.getUid());
				 * registerRequest.setCustomerNumber(customerModel.getDefaultB2BUnit().getUid())
				 * ; registerRequest.setSapContactId(customerModel.getSapContactID());
				 * submitRegisterRequestService.updateReverseFlowForIdoc(registerRequest,
				 * customerModel); }
				 * 
				 * }
				 */
			}
			catch (final Exception ex)
			{
				ex.printStackTrace();
			}
		}
	}

	public static void main(final String args[])
	{

	}

	/**
	 * @return the modelService
	 */
	public ModelService getModelService()
	{
		return modelService;
	}

	/**
	 * @param modelService
	 *           the modelService to set
	 */
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	/**
	 * @return the submitRegisterRequestService
	 */
	public SubmitRegisterRequestService getSubmitRegisterRequestService()
	{
		return submitRegisterRequestService;
	}

	/**
	 * @param submitRegisterRequestService
	 *           the submitRegisterRequestService to set
	 */
	public void setSubmitRegisterRequestService(final SubmitRegisterRequestService submitRegisterRequestService)
	{
		this.submitRegisterRequestService = submitRegisterRequestService;
	}

}