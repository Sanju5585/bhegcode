package com.bhge.basecommerce.strategies.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import com.bhge.core.model.ContactUsEmailProcessModel;
import de.hybris.platform.acceleratorservices.model.email.EmailAddressModel;

import de.hybris.platform.acceleratorservices.email.impl.DefaultEmailGenerationService;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.model.email.EmailMessageModel;
import de.hybris.platform.processengine.model.BusinessProcessModel;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.acceleratorservices.model.email.EmailAttachmentModel;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class GuestUserEmailGenerationService extends DefaultEmailGenerationService {
	
	private static final Logger LOG = LoggerFactory.getLogger(GuestUserEmailGenerationService.class);
	
	private ModelService modelService;
	
	
	/**
	 * @return the modelService
	 */
	public ModelService getModelService() {
		return modelService;
	}


	/**
	 * @param modelService the modelService to set
	 */
	public void setModelService(ModelService modelService) {
		this.modelService = modelService;
	}


	@Override
	public EmailMessageModel generate(final BusinessProcessModel businessProcessModel, final EmailPageModel emailPageModel)
	{
        LOG.info("Default Email generation service for email process {}", businessProcessModel.getCode());
		final EmailMessageModel emailMessage = super.generate(businessProcessModel, emailPageModel);
		 List<EmailAttachmentModel> attachments = businessProcessModel.getAttachmentss();
		 emailMessage.setAttachments(attachments);
		 //In case of Contact us Request email, populate cc Email ids.
		 if (businessProcessModel instanceof ContactUsEmailProcessModel emailProcessModel){
             LOG.info("Inside ContactUsEmail model {}", emailProcessModel.getCode());
			 final List<String> ccEmailList = new ArrayList<>();
			 if (StringUtils.isNotBlank(emailProcessModel.getContactUsForm().getCompanyEmailAddress())) {
				 ccEmailList.add(emailProcessModel.getContactUsForm().getCompanyEmailAddress());
				 emailMessage.setCcAddresses(loadEmailAddresses(ccEmailList));
			 }
		 }
		 getModelService().saveAll(emailMessage);
		 return emailMessage;
	}

	protected List<EmailAddressModel> loadEmailAddresses(final Collection<String> emailAddresses)
	{
		LOG.info("Inside loadEmailAddresses");
		final List<EmailAddressModel> emails = new ArrayList<>();
		for (final String mailId : emailAddresses)
		{
            LOG.info("Inside loadEmailAddresses for email id{}", mailId);
			if (mailId != null && !mailId.isEmpty())
			{
				emails.add(getEmailService().getOrCreateEmailAddressForEmail(mailId,
						mailId.contains("@") ? mailId.split("@")[0] : mailId));
			}
		}
		return emails;
	}

}
