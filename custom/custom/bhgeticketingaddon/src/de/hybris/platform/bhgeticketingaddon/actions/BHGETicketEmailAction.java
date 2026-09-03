/**
 *
 */
package de.hybris.platform.bhgeticketingaddon.actions;

import de.hybris.platform.acceleratorservices.email.CMSEmailPageService;
import de.hybris.platform.acceleratorservices.email.EmailGenerationService;
import de.hybris.platform.acceleratorservices.email.EmailService;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.model.email.EmailAddressModel;
import de.hybris.platform.acceleratorservices.model.email.EmailAttachmentModel;
import de.hybris.platform.acceleratorservices.model.email.EmailMessageModel;
import de.hybris.platform.acceleratorservices.process.strategies.ProcessContextResolutionStrategy;
import de.hybris.platform.bhgeticketingaddon.model.process.BHGETicketProcessModel;
import de.hybris.platform.bhgeticketingaddon.services.BHGETicketBusinessService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.processengine.action.AbstractSimpleDecisionAction;
import de.hybris.platform.servicelayer.exceptions.ModelSavingException;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.store.services.BaseStoreService;
import de.hybris.platform.task.RetryLaterException;
import de.hybris.platform.util.AtomicCounter;
import de.hybris.platform.util.Config;

import java.io.DataInputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.log4j.Logger;


/**
 * @author ashvyas
 *
 */
public class BHGETicketEmailAction extends AbstractSimpleDecisionAction<BHGETicketProcessModel>
{
	private static final Logger LOG = Logger.getLogger(BHGETicketEmailAction.class);

	@Resource(name = "bhgeTicketBusinessService")
	public BHGETicketBusinessService bhgeTicketBusinessService;

	@Resource(name = "cmsEmailPageService")
	private CMSEmailPageService cmsEmailPageService;

	private String frontendTemplateName;

	@Resource(name = "emailGenerationService")
	private EmailGenerationService emailGenerationService;

	@Resource(name = "baseSiteService")
	private BaseSiteService baseSiteService;

	@Resource(name = "baseStoreService")
	private BaseStoreService baseStoreService;

	@Resource(name = "processContextResolutionStrategy")
	private ProcessContextResolutionStrategy processContextResolutionStrategy;

	@Resource(name = "emailService")
	private EmailService emailService;

	@Resource(name = "mediaService")
	private MediaService mediaService;

	/**
	 * @return the emailService
	 */
	public EmailService getEmailService()
	{
		return emailService;
	}


	/**
	 * @param emailService
	 *           the emailService to set
	 */
	public void setEmailService(final EmailService emailService)
	{
		this.emailService = emailService;
	}


	/**
	 * @return the bhgeTicketBusinessService
	 */
	public BHGETicketBusinessService getBhgeTicketBusinessService()
	{
		return bhgeTicketBusinessService;
	}


	/**
	 * @param bhgeTicketBusinessService
	 *           the bhgeTicketBusinessService to set
	 */
	public void setBhgeTicketBusinessService(final BHGETicketBusinessService bhgeTicketBusinessService)
	{
		this.bhgeTicketBusinessService = bhgeTicketBusinessService;
	}




	/**
	 * @return the baseSiteService
	 */
	public BaseSiteService getBaseSiteService()
	{
		return baseSiteService;
	}


	/**
	 * @param baseSiteService
	 *           the baseSiteService to set
	 */
	public void setBaseSiteService(final BaseSiteService baseSiteService)
	{
		this.baseSiteService = baseSiteService;
	}


	/**
	 * @return the baseStoreService
	 */
	public BaseStoreService getBaseStoreService()
	{
		return baseStoreService;
	}


	/**
	 * @param baseStoreService
	 *           the baseStoreService to set
	 */
	public void setBaseStoreService(final BaseStoreService baseStoreService)
	{
		this.baseStoreService = baseStoreService;
	}


	/**
	 * @return the processContextResolutionStrategy
	 */
	public ProcessContextResolutionStrategy getProcessContextResolutionStrategy()
	{
		return processContextResolutionStrategy;
	}


	/**
	 * @param processContextResolutionStrategy
	 *           the processContextResolutionStrategy to set
	 */
	public void setProcessContextResolutionStrategy(final ProcessContextResolutionStrategy processContextResolutionStrategy)
	{
		this.processContextResolutionStrategy = processContextResolutionStrategy;
	}


	/**
	 * @return the cmsEmailPageService
	 */
	public CMSEmailPageService getCmsEmailPageService()
	{
		return cmsEmailPageService;
	}


	/**
	 * @param cmsEmailPageService
	 *           the cmsEmailPageService to set
	 */
	public void setCmsEmailPageService(final CMSEmailPageService cmsEmailPageService)
	{
		this.cmsEmailPageService = cmsEmailPageService;
	}


	/**
	 * @return the frontendTemplateName
	 */
	public String getFrontendTemplateName()
	{
		return frontendTemplateName;
	}


	/**
	 * @param frontendTemplateName
	 *           the frontendTemplateName to set
	 */
	public void setFrontendTemplateName(final String frontendTemplateName)
	{
		this.frontendTemplateName = frontendTemplateName;
	}




	/**
	 * @return the emailGenerationService
	 */
	public EmailGenerationService getEmailGenerationService()
	{
		return emailGenerationService;
	}


	/**
	 * @param emailGenerationService
	 *           the emailGenerationService to set
	 */
	public void setEmailGenerationService(final EmailGenerationService emailGenerationService)
	{
		this.emailGenerationService = emailGenerationService;
	}

	@Override
	public Transition executeAction(final BHGETicketProcessModel businessProcessModel) throws RetryLaterException, Exception
	{
		LOG.info("Start executeAction() method.");
		LOG.info("initializing context..");
		
		getProcessContextResolutionStrategy().initializeContext(businessProcessModel);

		LOG.info("Successfully initialized the context.");

		final CatalogVersionModel contentCatalogVersion = getProcessContextResolutionStrategy()
				.getContentCatalogVersion(businessProcessModel);
		
		if (contentCatalogVersion == null)
		{
			LOG.warn("Could not resolve the content catalog version, cannot generate email content");
			return Transition.NOK;
		}

		final EmailPageModel emailPageModel = getCmsEmailPageService().getEmailPageForFrontendTemplate(getFrontendTemplateName(),
				contentCatalogVersion);
		
		if (emailPageModel == null)
		{
			LOG.warn("Could not retrieve email page model for " + getFrontendTemplateName() + " and "
					+ contentCatalogVersion.getCatalog().getName() + " : " + contentCatalogVersion.getVersion()
					+ ", cannot generate email content");
			return Transition.NOK;
		}
		else
		{
			emailPageModel.setFromEmail(businessProcessModel.getEmailId());
			final EmailMessageModel emailMessageModel = getEmailGenerationService().generate(businessProcessModel, emailPageModel);

			if (emailMessageModel == null)
			{
				LOG.warn("Failed to generate email message");
				return Transition.NOK;
			}
			else
			{
				final String feedbackToEmailId = Config.getParameter("Feedback_To_Email");
				String[] emailIds;
				final String delimiter = ",";
				emailIds = feedbackToEmailId.split(delimiter);
				final List<EmailAddressModel> toEmails = new ArrayList<EmailAddressModel>();

				final List<EmailAttachmentModel> attachements = new ArrayList<EmailAttachmentModel>();
				AtomicInteger count = new AtomicInteger(0);
				for (int i = 0; i < emailIds.length; i++)
				{
					final EmailAddressModel toAddress = emailService.getOrCreateEmailAddressForEmail(emailIds[i],
							" ");
					toEmails.add(toAddress);
				}
				emailMessageModel.setToAddresses(toEmails);
				LOG.info("BHGETicketEmailAction :: getAttachments()" + businessProcessModel.getAttachments());
				if (CollectionUtils.isNotEmpty(businessProcessModel.getAttachments()))
				{
					LOG.info("BHGETicketEmailAction :: getAttachments() Size : " + businessProcessModel.getAttachments().size());
					for(MediaModel emailAttachment : businessProcessModel.getAttachments()) {

						if(emailAttachment.getSize() > 0) {
							try {
								DataInputStream dataInputStream = new DataInputStream(mediaService.getStreamFromMedia(emailAttachment));
								EmailAttachmentModel attachment = emailService.createEmailAttachment(dataInputStream, emailAttachment.getRealFileName(), emailAttachment.getMime());
								modelService.save(attachment);
								attachements.add(attachment);
							} catch (Exception e) {
								LOG.error("unable to attach Document from Ticket:" + businessProcessModel.getCode() + "to the BHGETicketProcess with error:" + e.getMessage());
							}

						}
					}
						if (!attachements.isEmpty()) {
							emailMessageModel.setAttachments(attachements);
						}

						try {
							getModelService().save(emailMessageModel);
						} catch (final ModelSavingException e) {
							LOG.warn("Exception while saving EmailMessageModel : " + e.getMessage() + " and the reason is : " + e.getCause()
									+ " : " + e);
							e.printStackTrace();
						}

				} else if (businessProcessModel.getAttachment() != null && businessProcessModel.getAttachment().getSize() > 0)
				{
					try {
							DataInputStream dataInputStream = new DataInputStream(mediaService.getStreamFromMedia(businessProcessModel.getAttachment()));
							EmailAttachmentModel attachment = emailService.createEmailAttachment(dataInputStream, businessProcessModel.getAttachment().getRealFileName(), businessProcessModel.getAttachment().getMime());
							modelService.save(attachment);
							attachements.add(attachment);
						} catch (Exception e) {
							LOG.error("unable to attach Document from Ticket:" + businessProcessModel.getCode() + "to the BHGETicketProcess with error:" + e.getMessage());
						}

					if (!attachements.isEmpty())
					{
						emailMessageModel.setAttachments(attachements);
					}

					try
					{
						getModelService().save(emailMessageModel);
					}
					catch (final ModelSavingException e)
					{
						LOG.warn("Exception while saving EmailMessageModel : " + e.getMessage() + " and the reason is : " + e.getCause()
								+ " : " + e);
						e.printStackTrace();
					}

				}
				else
				{
					try
					{
						getModelService().save(emailMessageModel);
					}
					catch (final ModelSavingException e)
					{
						LOG.warn("Exception while saving EmailMessageModel : " + e.getMessage() + " and the reason is : " + e.getCause()
								+ " : " + e);
						e.printStackTrace();
					}
				}

				final List<EmailMessageModel> emails = new ArrayList<>();
				emails.addAll(businessProcessModel.getEmails());
				emails.add(emailMessageModel);
				businessProcessModel.setEmails(emails);

				try
				{
					getModelService().save(businessProcessModel);
				}
				catch (final ModelSavingException e)
				{
					LOG.warn("Exception while saving BHGETicketProcessModel : " + e.getMessage() + " and the reason is : "
							+ e.getCause() + " : " + e);
					e.printStackTrace();
				}

				LOG.info("Email message generated");
				LOG.info("End executeAction() method.");
				return Transition.OK;
			}
		}
	}
}
