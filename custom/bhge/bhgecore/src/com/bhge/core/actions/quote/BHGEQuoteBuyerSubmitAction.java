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
package com.bhge.core.actions.quote;

import static com.bhge.core.constants.BhgeCoreConstants.QUOTE_USER_TYPE;

import java.io.DataInputStream;
import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import de.hybris.platform.acceleratorservices.email.EmailService;
import de.hybris.platform.acceleratorservices.model.email.EmailAttachmentModel;
import de.hybris.platform.commerceservices.enums.QuoteUserType;
import de.hybris.platform.commerceservices.model.process.BHGEQuoteProcessModel;
import de.hybris.platform.commerceservices.order.CommerceQuoteService;
import de.hybris.platform.core.enums.QuoteState;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.order.QuoteService;
import de.hybris.platform.processengine.action.AbstractSimpleDecisionAction;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.task.RetryLaterException;

import org.apache.log4j.Logger;



/**
 * This action class creates a sales representative snapshot.
 */
public class BHGEQuoteBuyerSubmitAction extends AbstractSimpleDecisionAction<BHGEQuoteProcessModel>
{
	private static final Logger LOG = Logger.getLogger(BHGEQuoteBuyerSubmitAction.class);
	private CommerceQuoteService commerceQuoteService;
	private QuoteService quoteService;
	
	@Resource(name = "mediaService")
	private MediaService mediaService;
	
	@Resource(name = "emailService")
	private EmailService emailService;

	@Override
	public Transition executeAction(final BHGEQuoteProcessModel process) throws RetryLaterException, Exception
	{
		Transition result;
		
		LOG.info("In BHGEQuoteBuyerSubmitAction for process code : " + process.getCode());
		if (LOG.isDebugEnabled())
		{
			LOG.debug(String.format("In BHGEQuoteBuyerSubmitAction for process code : [%s]", process.getCode()));
		}

		final QuoteUserType quoteUserType = (QuoteUserType) processParameterHelper.getProcessParameterByName(process,
				QUOTE_USER_TYPE).getValue();

		final QuoteModel quoteModel = getQuoteService().getCurrentQuoteForCode(process.getQuoteCode());
		
		process.setUserName(quoteModel.getUserName());
		process.setCompany(quoteModel.getCompany());
		process.setContactNumber(quoteModel.getContactNumber());
		process.setEmailAddress(quoteModel.getEmailAddress());
		process.setAddress1(quoteModel.getAddress1());
		process.setAddress2(quoteModel.getAddress2());
		process.setCountry(quoteModel.getCountry());
		process.setRegion(quoteModel.getRegion());
		process.setCity(quoteModel.getCity());
		process.setPostalCode(quoteModel.getPostalCode());
		process.setEmailtype(quoteModel.getEmailtype());
		getModelService().save(process);
		if (QuoteUserType.BUYER.equals(quoteUserType))
		{
			getCommerceQuoteService().createQuoteSnapshotWithState(quoteModel, QuoteState.SELLER_REQUEST);
			result = Transition.OK;
		}
		else
		{
			result = Transition.NOK;
		}

		return result;
	}


	protected QuoteService getQuoteService()
	{
		return quoteService;
	}


	public void setQuoteService(final QuoteService quoteService)
	{
		this.quoteService = quoteService;
	}

	protected CommerceQuoteService getCommerceQuoteService()
	{
		return commerceQuoteService;
	}


	public void setCommerceQuoteService(final CommerceQuoteService commerceQuoteService)
	{
		this.commerceQuoteService = commerceQuoteService;
	}
}
