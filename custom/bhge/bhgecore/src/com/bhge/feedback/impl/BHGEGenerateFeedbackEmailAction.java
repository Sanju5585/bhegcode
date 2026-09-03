/**
 *
 */
package com.bhge.feedback.impl;

import de.hybris.platform.acceleratorservices.email.CMSEmailPageService;
import de.hybris.platform.acceleratorservices.email.EmailGenerationService;
import de.hybris.platform.acceleratorservices.email.EmailService;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.model.email.EmailAddressModel;
import de.hybris.platform.acceleratorservices.model.email.EmailAttachmentModel;
import de.hybris.platform.acceleratorservices.model.email.EmailMessageModel;
import de.hybris.platform.acceleratorservices.process.strategies.ProcessContextResolutionStrategy;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.commerceservices.model.process.GEEdgeFeedbackProcessModel;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.processengine.action.AbstractSimpleDecisionAction;
import de.hybris.platform.processengine.model.BusinessProcessModel;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.task.RetryLaterException;
import de.hybris.platform.util.Config;

import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;



/**
 * @author ransubra
 *
 */
public class BHGEGenerateFeedbackEmailAction extends AbstractSimpleDecisionAction
{


	@Resource(name = "emailService")
	private EmailService emailService;

	private static final Logger LOG = Logger.getLogger(BHGEGenerateFeedbackEmailAction.class);

	private CMSEmailPageService cmsEmailPageService;
	private String frontendTemplateName;
	private ProcessContextResolutionStrategy contextResolutionStrategy;
	private EmailGenerationService emailGenerationService;
	private BusinessProcessService geEgdeBusinessProcessService;

	@Resource(name = "mediaService")
	private MediaService mediaService;

	@Override
	public Transition executeAction(final BusinessProcessModel businessProcessModel) throws RetryLaterException
	{
		//6.5 Upgrade Changes
		getContextResolutionStrategy().initializeContext(businessProcessModel);
		final CatalogVersionModel contentCatalogVersion = getContextResolutionStrategy().getContentCatalogVersion(
				businessProcessModel);
		if (contentCatalogVersion != null)
		{
			final String feedbackProcesCode = businessProcessModel.getCode();
			final GEEdgeFeedbackProcessModel feedbackProcessModel = (GEEdgeFeedbackProcessModel) getBusinessProcessService()
					.getProcess(feedbackProcesCode);
			final EmailPageModel emailPageModel = getCmsEmailPageService().getEmailPageForFrontendTemplate(
					getFrontendTemplateName(), contentCatalogVersion);
			if (emailPageModel != null)
			{
				final EmailMessageModel emailMessageModel = getEmailGenerationService()
						.generate(businessProcessModel, emailPageModel);

				String feedbackToEmailId = null;
				if (feedbackProcessModel.getEmailType().equalsIgnoreCase("contactHelpDeskEmail"))
				{
					feedbackToEmailId = Config.getParameter("Help_Desk_To_Mail"); //to email id
				}
				else
				{
					feedbackToEmailId = Config.getParameter("Feedback_To_Email"); //to email id
				}
				String[] emailIds;
				final String delimiter = ",";
				emailIds = feedbackToEmailId.split(delimiter);
				final List<EmailAddressModel> toEmails = new ArrayList<EmailAddressModel>();
				final List<EmailAttachmentModel> attachements = new ArrayList<EmailAttachmentModel>();
				if (emailMessageModel != null)
				{
					for (int i = 0; i < emailIds.length; i++)
					{
						final EmailAddressModel toAddress = emailService.getOrCreateEmailAddressForEmail(emailIds[i], " ");
						toEmails.add(toAddress);
					}
					emailMessageModel.setToAddresses(toEmails);
					//FIXME:US3
					if (feedbackProcessModel.getFeedbackAttachmentFiles() != null
							&& feedbackProcessModel.getFeedbackAttachmentFiles().size() > 0)
					{
						EmailAttachmentModel attachmentModel = null;
						for (final MediaModel feedbackProcess : feedbackProcessModel.getFeedbackAttachmentFiles())
						{
							if (feedbackProcess != null && feedbackProcess.getSize() > 0)
							{
								attachmentModel = modelService.create(EmailAttachmentModel.class);
								attachmentModel.setCode(feedbackProcess.getPk().toString());
								attachmentModel.setMime(feedbackProcess.getMime());
								attachmentModel.setRealFileName(feedbackProcess.getRealFileName());
								attachmentModel.setCatalogVersion(feedbackProcess.getCatalogVersion());
								attachmentModel.setLocation(feedbackProcess.getLocation());
								attachmentModel.setSize(feedbackProcess.getSize());
								final MediaFolderModel mediaFolder = mediaService.getFolder(Config.getString("awss3userdata", "customerdata"));
								attachmentModel.setFolder(mediaFolder);
								attachements.add(attachmentModel);
							}
						}
						emailMessageModel.setAttachments(attachements);
					}

					if (feedbackProcessModel.getFeedbackAttachmentFile() != null
							&& feedbackProcessModel.getFeedbackAttachmentFile().getSize() > 0)
					{
						final EmailAttachmentModel attachment = modelService.create(EmailAttachmentModel.class);
						attachment.setCode(emailMessageModel.getPk().toString());
						attachment.setMime(feedbackProcessModel.getFeedbackAttachmentFile().getMime());
						attachment.setRealFileName(feedbackProcessModel.getFeedbackAttachmentFile().getRealFileName());
						attachment.setCatalogVersion(feedbackProcessModel.getFeedbackAttachmentFile().getCatalogVersion());
						attachment.setLocation(feedbackProcessModel.getFeedbackAttachmentFile().getLocation());
						attachment.setSize(feedbackProcessModel.getFeedbackAttachmentFile().getSize());
						final MediaFolderModel mediaFolder = mediaService.getFolder(Config.getString("awss3userdata", "customerdata"));
						attachment.setFolder(mediaFolder);
						//						final List<EmailAttachmentModel> attachements = new ArrayList<EmailAttachmentModel>();

						attachements.add(attachment);
						if (!attachements.isEmpty())
						{
							emailMessageModel.setAttachments(attachements);
						}
						getModelService().save(emailMessageModel);
					}
					else
					{
						getModelService().save(emailMessageModel);
					}

					final List<EmailMessageModel> emails = new ArrayList<EmailMessageModel>();
					emails.addAll(businessProcessModel.getEmails());
					emails.add(emailMessageModel);
					businessProcessModel.setEmails(emails);
					getModelService().save(businessProcessModel);

					LOG.info("Email message generated");
					return Transition.OK;
				}
				else
				{
					LOG.warn("Failed to generate email message");
				}
			}
			else
			{
				LOG.warn("Could not retrieve email page model for " + getFrontendTemplateName() + " and "
						+ contentCatalogVersion.getCatalog().getName() + ":" + contentCatalogVersion.getVersion()
						+ ", cannot generate email content");
			}
		}
		else
		{
			LOG.warn("Could not resolve the content catalog version, cannot generate email content");
		}

		return Transition.NOK;
	}

	protected CMSEmailPageService getCmsEmailPageService()
	{
		return cmsEmailPageService;
	}

	
	public void setCmsEmailPageService(final CMSEmailPageService cmsEmailPageService)
	{
		this.cmsEmailPageService = cmsEmailPageService;
	}

	protected String getFrontendTemplateName()
	{
		return frontendTemplateName;
	}

	
	public void setFrontendTemplateName(final String frontendTemplateName)
	{
		this.frontendTemplateName = frontendTemplateName;
	}

	protected ProcessContextResolutionStrategy getContextResolutionStrategy()
	{
		return contextResolutionStrategy;
	}

	
	public void setContextResolutionStrategy(final ProcessContextResolutionStrategy contextResolutionStrategy)
	{
		this.contextResolutionStrategy = contextResolutionStrategy;
	}

	protected EmailGenerationService getEmailGenerationService()
	{
		return emailGenerationService;
	}

	
	public void setEmailGenerationService(final EmailGenerationService emailGenerationService)
	{
		this.emailGenerationService = emailGenerationService;
	}

	/**
	 * @return
	 */
	public BusinessProcessService getBusinessProcessService()
	{
		// YTODO Auto-generated method stub
		return geEgdeBusinessProcessService;
	}

	
	public void setBusinessProcessService(final BusinessProcessService geEgdeBusinessProcessService)
	{
		this.geEgdeBusinessProcessService = geEgdeBusinessProcessService;
	}

}
