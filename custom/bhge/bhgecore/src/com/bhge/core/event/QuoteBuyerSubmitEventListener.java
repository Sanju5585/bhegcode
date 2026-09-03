/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.core.event;


import de.hybris.platform.commerceservices.event.QuoteBuyerSubmitEvent;
import de.hybris.platform.commerceservices.model.process.QuoteProcessModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.event.impl.AbstractEventListener;
import de.hybris.platform.servicelayer.model.ModelService;
import com.bhge.core.constants.BhgeCoreConstants;

import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;



/**
 * Event Listener for {@link QuoteBuyerSubmitEvent}. This Event Listener starts the quote buyer business process.
 */
public class QuoteBuyerSubmitEventListener extends AbstractEventListener<QuoteBuyerSubmitEvent>
{
	private ModelService modelService;
	private BusinessProcessService businessProcessService;
	private static final Logger LOG = Logger.getLogger(QuoteBuyerSubmitEventListener.class);

	@Override
	protected void onEvent(final QuoteBuyerSubmitEvent event)
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("Received QuoteBuyerSubmitEvent..");
		}

		LOG.info("########## Inside the QuoteBuyerSubmitEventListener flow ###############" );
		final Map<String, Object> contextParams = new HashMap<String, Object>();
		contextParams.put(BhgeCoreConstants.QUOTE_USER_TYPE, event.getQuoteUserType());

		final QuoteProcessModel quoteBuyerProcessModel = (QuoteProcessModel) getBusinessProcessService().createProcess(
				"quoteBuyerProcess" + "-" + event.getQuote().getCode() + "-" + event.getQuote().getStore().getUid() + "-"
						+ System.currentTimeMillis(), BhgeCoreConstants.QUOTE_BUYER_PROCESS, contextParams);

		if (LOG.isDebugEnabled())
		{
			LOG.debug(String.format("Created business process for QuoteBuyerSubmitEvent. Process code : [%s] ...",
					quoteBuyerProcessModel.getCode()));
		}
		LOG.info("########## Created business process for QuoteBuyerSubmitEvent in QuoteBuyerSubmitEventListener flow " +  quoteBuyerProcessModel.getCode());
		final QuoteModel quoteModel = event.getQuote();
		quoteBuyerProcessModel.setQuoteCode(quoteModel.getCode());
		getModelService().save(quoteBuyerProcessModel);
		//start the business process
		LOG.info("########## Quote code in QuoteBuyerSubmitEventListener flow is " +  event.getQuote().getCode());
		getBusinessProcessService().startProcess(quoteBuyerProcessModel);
		LOG.info("########## Business Process in QuoteBuyerSubmitEventListener flow is complete ###############" );

	}

	protected BusinessProcessService getBusinessProcessService()
	{
		return businessProcessService;
	}

	
	public void setBusinessProcessService(final BusinessProcessService businessProcessService)
	{
		this.businessProcessService = businessProcessService;
	}

	protected ModelService getModelService()
	{
		return modelService;
	}

	
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}
}
