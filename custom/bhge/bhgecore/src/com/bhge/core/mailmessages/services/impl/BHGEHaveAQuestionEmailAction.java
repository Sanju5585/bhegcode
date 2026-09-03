package com.bhge.core.mailmessages.services.impl;

import java.io.DataInputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;


import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.model.BHGEHaveAQuestionProcessModel;

import de.hybris.platform.acceleratorservices.email.CMSEmailPageService;
import de.hybris.platform.acceleratorservices.email.EmailGenerationService;
import de.hybris.platform.acceleratorservices.email.EmailService;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.model.email.EmailAddressModel;
import de.hybris.platform.acceleratorservices.model.email.EmailAttachmentModel;
import de.hybris.platform.acceleratorservices.model.email.EmailMessageModel;
import de.hybris.platform.acceleratorservices.process.strategies.ProcessContextResolutionStrategy;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.processengine.action.AbstractSimpleDecisionAction;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.task.RetryLaterException;
import de.hybris.platform.util.Config;

public class BHGEHaveAQuestionEmailAction extends AbstractSimpleDecisionAction<BHGEHaveAQuestionProcessModel> {

	@Resource(name = "emailService")
	private EmailService emailService;

	private static final Logger LOG = Logger.getLogger(BHGEHaveAQuestionEmailAction.class);

	@Resource(name = "cmsEmailPageService")
	private CMSEmailPageService cmsEmailPageService;

	@Resource(name = "processContextResolutionStrategy")
	private ProcessContextResolutionStrategy processContextResolutionStrategy;

	@Resource(name = "emailGenerationService")
	private EmailGenerationService emailGenerationService;
	
	@Resource(name = "mediaService")
	private MediaService mediaService;

	private String frontendTemplateName;

	@Override
	public Transition executeAction(final BHGEHaveAQuestionProcessModel businessProcessModel)
			throws RetryLaterException, Exception {

		getProcessContextResolutionStrategy().initializeContext(businessProcessModel);
		final CatalogVersionModel contentCatalogVersion = getProcessContextResolutionStrategy().getContentCatalogVersion(businessProcessModel);

		final EmailPageModel emailPageModel = getCmsEmailPageService().getEmailPageForFrontendTemplate(getFrontendTemplateName(), contentCatalogVersion);

		if (emailPageModel == null) {
			LOG.warn("Could not retrieve email page model for " + getFrontendTemplateName() + " and "
					+ contentCatalogVersion.getCatalog().getName() + ":" + contentCatalogVersion.getVersion()
					+ ", cannot generate email content");
			return Transition.NOK;
		}
		emailPageModel.setFromEmail(Config.getParameter("customer.fromEmail.default"));

		final EmailMessageModel emailMessageModel = getEmailGenerationService().generate(businessProcessModel,
				emailPageModel);

		if (emailMessageModel == null) {
			LOG.warn("Failed to generate email message");
			return Transition.NOK;
		} else {
			
			try {
				final String toEmailId = getTOEmailAddress(businessProcessModel.getBusinessLine());

				final List<EmailAddressModel> toEmails = new ArrayList<EmailAddressModel>();
				final List<EmailAttachmentModel> attachements = new ArrayList<EmailAttachmentModel>();

				final EmailAddressModel toAddress = emailService.getOrCreateEmailAddressForEmail(toEmailId,
						StringUtils.EMPTY);
				
				toEmails.add(toAddress);
				emailMessageModel.setToAddresses(toEmails);
				
				final MediaModel attachmentMediaModel = businessProcessModel.getHaveAQuestionAttachmentFile();
				
				if (attachmentMediaModel != null) {
					
					final String timeStamp = new SimpleDateFormat("yyyyMMddHHmmss").format(new java.util.Date());
					final String fileName = attachmentMediaModel.getRealFileName().concat("_").concat(timeStamp);
					final DataInputStream dataInputStream = new DataInputStream(mediaService.getStreamFromMedia(attachmentMediaModel));
					final EmailAttachmentModel emailAttachmentModel = emailService.createEmailAttachment(dataInputStream, fileName, attachmentMediaModel.getMime());
					LOG.debug("Inside BHGEHaveAQuestionEmailAction -- email attachment has been created successfully");
					attachements.add(emailAttachmentModel);
					emailMessageModel.setAttachments(attachements);
				}
				
				getModelService().save(emailMessageModel);

				final List<EmailMessageModel> emails = new ArrayList<EmailMessageModel>();
				emails.addAll(businessProcessModel.getEmails());
				emails.add(emailMessageModel);
				businessProcessModel.setEmails(emails);
				getModelService().save(businessProcessModel);

				LOG.info("Query of Customer sent successfully to customer care for product code and businessLine {} "
						+ businessProcessModel.getProductCode() + " " + businessProcessModel.getBusinessLine());
				return Transition.OK;
				
			} catch (Exception ex) {
				LOG.error("Error in BHGEHaveAQuestionEmailAction during sending have a question email ", ex);
				return Transition.NOK;
			}
		}

	}

	private final String getTOEmailAddress(final String businessLine) {

		String customerCareEmail = StringUtils.EMPTY;
		if (businessLine != null) {

			if ((businessLine.equalsIgnoreCase(BhgeCoreConstants.BENTLY_NEVADA))) {
				customerCareEmail = Config.getParameter("bhge.customerCare.bently.url");
				LOG.debug("Setting customer care email address for Bentley ");
			} else if (businessLine.equalsIgnoreCase(BhgeCoreConstants.WAYGATE_PRODUCTLINE)) {
				customerCareEmail = Config.getParameter("bhge.customerCare.waygate.url");
				LOG.debug("Setting customer care email address for Waygate ");

			} else if (businessLine.equalsIgnoreCase(BhgeCoreConstants.DRUCK_PRODUCTLINE)) {

				customerCareEmail = Config.getParameter("bhge.customerCare.druck.url");
				LOG.debug("Setting customer care email address for Druck ");

			} else if (businessLine.equalsIgnoreCase(BhgeCoreConstants.PANA_PRODUCTLINE)) {
				customerCareEmail = Config.getParameter("bhge.customerCare.panametrics.url");
				LOG.debug("Setting customer care email address for Panametrics ");
			}
		}

		return customerCareEmail;
	}

	protected EmailGenerationService getEmailGenerationService() {
		return emailGenerationService;
	}


	public void setEmailGenerationService(final EmailGenerationService emailGenerationService) {
		this.emailGenerationService = emailGenerationService;
	}

	protected CMSEmailPageService getCmsEmailPageService() {
		return cmsEmailPageService;
	}


	public void setCmsEmailPageService(final CMSEmailPageService cmsEmailPageService) {
		this.cmsEmailPageService = cmsEmailPageService;
	}

	protected String getFrontendTemplateName() {
		return frontendTemplateName;
	}


	public void setFrontendTemplateName(final String frontendTemplateName) {
		this.frontendTemplateName = frontendTemplateName;
	}

	public ProcessContextResolutionStrategy getProcessContextResolutionStrategy() {
		return processContextResolutionStrategy;
	}

	public void setProcessContextResolutionStrategy(
			final ProcessContextResolutionStrategy processContextResolutionStrategy) {
		this.processContextResolutionStrategy = processContextResolutionStrategy;
	}
}
