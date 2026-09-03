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
package com.bhge.core.mailmessages.services;


import de.hybris.platform.acceleratorservices.model.email.EmailMessageModel;
import de.hybris.platform.processengine.action.AbstractProceduralAction;
import de.hybris.platform.task.RetryLaterException;


/**
 * A process action to send emails.
 */
public class QuoteSendEmailAction extends AbstractProceduralAction
{
	/**
	 * @return the bhgeEmailService
	 */
	public BHGEEmailService getBhgeEmailService()
	{
		return bhgeEmailService;
	}



	/**
	 * @param bhgeEmailService
	 *           the bhgeEmailService to set
	 */
	public void setBhgeEmailService(final BHGEEmailService bhgeEmailService)
	{
		this.bhgeEmailService = bhgeEmailService;
	}



	private BHGEEmailService bhgeEmailService;



	@Override
	public void executeAction(final de.hybris.platform.processengine.model.BusinessProcessModel businessProcessModel)
			throws RetryLaterException
	{
		for (final EmailMessageModel email : businessProcessModel.getEmails())
		{
			bhgeEmailService.quoteSend(email);
		}
	}
}
