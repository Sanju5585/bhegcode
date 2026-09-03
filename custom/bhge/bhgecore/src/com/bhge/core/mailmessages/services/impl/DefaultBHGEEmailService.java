/**
 *
 */
package com.bhge.core.mailmessages.services.impl;

import com.bhge.core.data.BHGEOrderUpdateEmailNotificationData;
import com.bhge.core.dataimport.service.BHGEBlobDataImportService;
import com.bhge.core.enums.BHGERMACommerceType;
import com.bhge.core.enums.GEEdgeCartType;
import com.bhge.core.mailmessages.context.*;
import de.hybris.platform.acceleratorservices.email.impl.DefaultEmailService;
import de.hybris.platform.acceleratorservices.model.email.EmailAddressModel;
import de.hybris.platform.acceleratorservices.model.email.EmailAttachmentModel;
import de.hybris.platform.acceleratorservices.model.email.EmailMessageModel;
import de.hybris.platform.acceleratorservices.process.strategies.EmailTemplateTranslationStrategy;
import de.hybris.platform.acceleratorservices.urlresolver.SiteBaseUrlResolutionService;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.commercefacades.order.data.OrderHistoryViewData;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.enumeration.EnumerationService;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.servicelayer.user.daos.UserDao;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.mail.MailUtils;

import java.io.File;
import java.io.StringWriter;
import java.net.URLDecoder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

import jakarta.activation.FileDataSource;
import jakarta.annotation.Resource;
import jakarta.mail.internet.InternetAddress;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.mail2.core.EmailException;
import org.apache.commons.mail2.jakarta.HtmlEmail;
import org.apache.log4j.Logger;


import com.bhge.commons.renderer.BHGEVelocityTemplateRenderer;
import com.bhge.core.cronjob.BHGENonCrticalErrorVO;
import com.bhge.core.cronjob.BHGESavedCartExpiryMailVO;
import com.bhge.core.data.context.BHGEOrderShareEmailContext;
import com.bhge.core.email.dao.BHGEEmailServiceDao;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.product.BHGEMaterialPushData;
import com.bhge.core.registeruser.dto.BHGERegisterUserMultipleSSOData;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.facades.order.data.BHGEOrderHistoryData;
import com.bhge.register.webservices.model.BHGEAppAccessLevelModel;
import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import com.bhge.register.webservices.model.BHGEInquiryEmailModel;
import com.bhge.register.webservices.model.BHGEMnCEcommMatrixModel;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import de.hybris.platform.commerceservices.enums.CustomerType;
import com.bhge.core.user.service.BHGEUserProfileService;

public class DefaultBHGEEmailService extends DefaultEmailService implements BHGEEmailService
{


	private static final String USERMANAGERCHECK = "UserManager";
	private static final String USERMANAGERUSERCHECK = "UserManagerUser";
	private static final Logger LOG = Logger.getLogger(DefaultBHGEEmailService.class);
	private final File logo = new File(Config.getParameter("EMAIL_LOGO_PATH"));
	private static final String USERCHECK = "CustomerEmail";

	///Csr
	private static final String CSR_APPLICATIONACCESS_REJECT = "CSR REJECT";
	private static final String CSR_IQM_APPLICATIONACCESS_REJECT = "CSR IQM REJECT";
	private static final String IQM_REQUEST_SUBMIT = "IQM REQUEST SUBMIT";
	private static final String CSR_FPT_APPLICATIONACCESS_REJECT = "CSR FPT REJECT";
	private static final String CSR_OFS_APPLICATIONACCESS_REJECT = "CSR OFS REJECT";
	//CSr

	private static final String NOT_REGISTERED = "Not Registered";
	private static final String DIGITAL_SOLUTIONS_STORE = Config.getString("bhge.application.name", "Digital Solutions Store");

	//Migration changes start
	private static final String BLOB_CONTAINER_NAME="blob.media.containerName";
	private static final String BLOB_FILE_NAME_TO_BE_READ="blob.media.ge.top.banner.image";
	//Migration changes end
	
	private static final String ORDER_STATUS_ERROR_DESCRIPTION="order response not received from SAP";

	@Resource(name = "bhgeVelocityTemplateRenderer")
	private BHGEVelocityTemplateRenderer bhgeVelocityTemplateRenderer;

	@Resource(name = "rendererService")
	private RendererService rendererService;

	@Resource(name = "enumerationService")
	private EnumerationService enumerationService;

	private BHGEEmailServiceDao bhgeEmailServiceDao;

	private B2BUnitService<B2BUnitModel, UserModel> b2bUnitService;

	@Resource(name = "userService")
	UserService userService;

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	private EmailTemplateTranslationStrategy emailTemplateTranslationStrategy;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;

	//Migration changes start
	@Resource(name="configurationService")
	private ConfigurationService configurationService;
	@Resource(name = "bhgeBlobDataImportService")
	private BHGEBlobDataImportService bhgeBlobDataImportService;

	@Resource(name = "userDao")
	private UserDao userDao;
	
	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	//Migration changes end

	/**
	 * @return the rendererService
	 */
	public RendererService getRendererService()
	{
		return rendererService;
	}

	/**
	 * @param rendererService
	 *           the rendererService to set
	 */
	public void setRendererService(final RendererService rendererService)
	{
		this.rendererService = rendererService;
	}

	/**
	 * @return the b2bUnitService
	 */
	public B2BUnitService<B2BUnitModel, UserModel> getB2bUnitService()
	{
		return b2bUnitService;
	}

	/**
	 * @param b2bUnitService
	 *           the b2bUnitService to set
	 */
	public void setB2bUnitService(final B2BUnitService<B2BUnitModel, UserModel> b2bUnitService)
	{
		this.b2bUnitService = b2bUnitService;
	}

	/**
	 * @return the bhgeVelocityTemplateRenderer
	 */
	public BHGEVelocityTemplateRenderer getBhgeVelocityTemplateRenderer()
	{
		return bhgeVelocityTemplateRenderer;
	}



	/**
	 * @return the bhgeEmailServiceDao
	 */
	public BHGEEmailServiceDao getBhgeEmailServiceDao()
	{
		return bhgeEmailServiceDao;
	}

	/**
	 * @param bhgeEmailServiceDao
	 *           the bhgeEmailServiceDao to set
	 */
	public void setBhgeEmailServiceDao(final BHGEEmailServiceDao bhgeEmailServiceDao)
	{
		this.bhgeEmailServiceDao = bhgeEmailServiceDao;
	}





	public void setBhgeVelocityTemplateRenderer(final BHGEVelocityTemplateRenderer bhgeVelocityTemplateRenderer)
	{
		this.bhgeVelocityTemplateRenderer = bhgeVelocityTemplateRenderer;
	}

	private BaseSiteService baseSiteService;
	private SiteBaseUrlResolutionService siteBaseUrlResolutionService;


	public BaseSiteService getBaseSiteService()
	{
		return baseSiteService;
	}

	public void setBaseSiteService(final BaseSiteService baseSiteService)
	{
		this.baseSiteService = baseSiteService;
	}

	public SiteBaseUrlResolutionService getSiteBaseUrlResolutionService()
	{
		return siteBaseUrlResolutionService;
	}

	public void setSiteBaseUrlResolutionService(final SiteBaseUrlResolutionService siteBaseUrlResolutionService)
	{
		this.siteBaseUrlResolutionService = siteBaseUrlResolutionService;
	}


	@Override
	public void sendMailForInvalidData(final File file, final String subject, final String to)
	{
		try
		{
			final RendererTemplateModel templateModel = rendererService
					.getRendererTemplateForCode("BHGEInvalidDataReportMailTemplate");

			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true")));
			htmlEmail.setSubject(subject);


			final StringWriter mailMessage = new StringWriter();

			final BHGEInvalidDataReportMailContext mailContext = new BHGEInvalidDataReportMailContext();
			/*
			 * mailContext.setMediaBaseUrl(
			 * getSiteBaseUrlResolutionService().getMediaUrlForSite(getBaseSiteService().getCurrentBaseSite(), false));
			 */
			mailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url"));

			bhgeVelocityTemplateRenderer.render(templateModel, mailContext, mailMessage, Locale.ENGLISH);

			final String delimiter = ",";
			final String[] emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				//MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}
			htmlEmail.embed(file);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.send();
			LOG.debug("Invalid data sent successfully");
		}
		catch (final Exception e)
		{
			LOG.error("Error sending invalid data mail", e);
		}

	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.mailmessages.services.BHGEEmailService#sendMailForWeeklyOrders(java.io.File, java.lang.String,
	 * java.lang.String)
	 */
	public void sendMailForWeeklyOrders(final File file, final String subject, final String to, final String fromDate,
			final String toDate)
	{
		try
		{
			final RendererTemplateModel templateModel = rendererService
					.getRendererTemplateForCode("BHGEWeeklyOrderReportMailTemplate");

			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true")));
			htmlEmail.setSubject(subject);


			final StringWriter mailMessage = new StringWriter();

			final BHGEWeeklyOrdersReportMailContext mailContext = new BHGEWeeklyOrdersReportMailContext();
			mailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url"));
			mailContext.setFromDate(fromDate);
			mailContext.setToDate(toDate);

			bhgeVelocityTemplateRenderer.render(templateModel, mailContext, mailMessage, Locale.ENGLISH);

			final String delimiter = ",";
			final String[] emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				//MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}

			//htmlEmail.addTo(to);
			htmlEmail.embed(file);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.send();
			LOG.info("*** Weekly Orders Report has sent successfully ***");
		}
		catch (final Exception e)
		{
			LOG.error("Error in sending weekly orders report mail", e);
		}

	}



	@Override
	public void sendEmailForRFCFailure(final String subject, final String to, final String msg)
	{
		try
		{
			final boolean emailFlag = Boolean.parseBoolean(Config.getParameter("geedge.support.mail.flag"));
			if (emailFlag)
			{
				final RendererTemplateModel templateModel = rendererService
						.getRendererTemplateForCode("GeEdgeRFCFailureMailTemplate");

				if (templateModel == null)
				{
					throw new EmailException("Email Template Not found");
				}
				final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
				htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true")));
				htmlEmail.setSubject(subject);


				final StringWriter mailMessage = new StringWriter();

				final BHGERFCFailureMailContext mailContext = new BHGERFCFailureMailContext();
				mailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url"));
				mailContext.setErrorDesc(msg);
				bhgeVelocityTemplateRenderer.render(templateModel, mailContext, mailMessage, Locale.ENGLISH);

				htmlEmail.addTo(to);
				htmlEmail.setHtmlMsg(mailMessage.toString());
				htmlEmail.send();
				LOG.debug("Alert sent successfully");
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error sending mail", e);
		}


	}

	@Override
	public void materialPushEmail(final RendererTemplateModel templateModel, final String subject, final String to,
			final File materialPushExcel, final List<BHGEMaterialPushData> materialPushDataList, final Integer materialPushCount,
			final Integer customerPushCount, final Integer addressPushCount, final Integer pricePushCount)
	{
		try
		{
			LOG.info("START - Send Material Push Email Notification");
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();

			if (templateModel == null)
			{
				throw new EmailException("Material Push Email Template Not found");
			}
			else
			{
				final StringWriter mailMessage = new StringWriter();
				String[] emails;
				final String delimiter = ",";
				htmlEmail.setCharset("UTF-8");
				emails = to.split(delimiter);
				for (int i = 0; i < emails.length; i++)
				{
					final String email = emails[i];
					MailUtils.validateEmailAddress(email, "TO");
					htmlEmail.addTo(email);
				}
				final String environment = Config.getParameter("current.env");
				if (StringUtils.isNotBlank(environment))
				{
					htmlEmail.setSubject(subject + "-" + environment);
				}
				else
				{
					htmlEmail.setSubject(subject);
				}
				final BHGEMaterialPushEmailContext mailContext = new BHGEMaterialPushEmailContext();
				if (CollectionUtils.isNotEmpty(materialPushDataList))
				{
					mailContext.setMaterialPushDataList(materialPushDataList);
				}
				mailContext.setReceipientEmailList(emails);



				mailContext.setSecureBaseUrl(getSiteBaseUrlResolutionService()
						.getWebsiteUrlForSite(getBaseSiteService().getBaseSiteForUID("bhge"), false, ""));

				mailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url"));
				if (null != materialPushExcel)
				{
					mailContext.setAttachmentAvailable(Boolean.TRUE);
				}
				mailContext.setCustomerPushCount(customerPushCount);
				mailContext.setAddressPushCount(addressPushCount);
				mailContext.setMaterialPushCount(materialPushCount);
				mailContext.setPricePushCount(pricePushCount);

				bhgeVelocityTemplateRenderer.render(templateModel, mailContext, mailMessage, Locale.ENGLISH);
				htmlEmail.setHtmlMsg(mailMessage.toString());
				if (null != materialPushExcel)
				{
					htmlEmail.embed(materialPushExcel);
				}

				try
				{
					//Migration changes start
					//final File img = new File(Config.getParameter("GE_TOP_BANNER_IMAGE_EMAIL"));
					final File img=getTopBannerImage();
					//Migration changes end

					//final File footerimg = new File(Config.getParameter("GE_FOOTER_IMAGE_EMAIL"));

					//final FileDataSource fdsfooter = new FileDataSource(footerimg);
					final FileDataSource fds = new FileDataSource(img);

					//final String cidfooter = htmlEmail.embed(fdsfooter, "cidForHomeImagefooter", "cidForHomeImagefooter");

					final String cid = htmlEmail.embed(fds, "cidForHomeImage", "cidForHomeImage");
				}
				catch (final Exception e)
				{
					LOG.error("Error while embedding file in Mail", e);
				}
				htmlEmail.send();
				LOG.info("END - Send Material Push Email Notification");
			}
		}
		catch (final Exception e)
		{
			LOG.error("Email sending failed" + e);
			return;
		}

	}

	@Override
	public void attachmentFailureEmail(final String orderId, final String soldTo, final String error, final String userEmail,
									   final String orderNumber, GEEdgeCartType cartType, BHGERMACommerceType commerceType, String userSSO)
	{
		final String templateCodeCriticalError = "CriticalErrorMailTemplate";
		final String subject = Config.getString("ORDER_SUBMIT_SUBJECT", "EdgeNet Attachment Critical Error Alert");
		final String to = Config.getParameter("ATTACHMENTFAIL_MAIL_TO_ADDRESS");

		final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(templateCodeCriticalError);
		try
		{
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true")));
			htmlEmail.setSubject(subject + " " + commerceType);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			else
			{
				final StringWriter mailMessage = new StringWriter();
				String[] emails;
				final String delimiter = ",";
				emails = to.split(delimiter);
				for (int i = 0; i < emails.length; i++)
				{
					final String email = emails[0];
					MailUtils.validateEmailAddress(email, "TO");
					htmlEmail.addTo(email);

				}

				final BHGECriticalErrorEmailContext myMailContext = new BHGECriticalErrorEmailContext();
				myMailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url.api"));
				myMailContext.setSubject(subject);
				LOG.info("Email to subject is " + subject + " " + commerceType);
				myMailContext.setEmailSoldTo(soldTo);
				LOG.info("Email to setEmailSoldTo is " + soldTo);
				myMailContext.setErrorDesc(error);
				LOG.info("Email to order id is " + error);
				myMailContext.setCartType(cartType);
				myMailContext.setCommerceType(commerceType);
				if (orderId.isEmpty())
				{
					myMailContext.setOrderId(orderNumber);
					LOG.info("Email to order id is " + orderNumber);
				}
				else
				{
					final StringBuilder sb = new StringBuilder(orderId);
					myMailContext.setOrderId(sb.append("-").append(orderNumber).toString());
					LOG.info("Email to order id is " + sb.append("-").append(orderNumber).toString());
				}

				myMailContext.setUserEmail(userEmail);
				myMailContext.setUserSSO(userSSO);
				LOG.info("Email to user email id is " + userEmail);
				final Calendar cal = Calendar.getInstance();
				final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				myMailContext.setErrorTime(sdf.format(cal.getTime()));

				bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);

				htmlEmail.setHtmlMsg(mailMessage.toString());
				try
				{
					//Migration changes start
					//final File img = new File(Config.getParameter("GE_TOP_BANNER_IMAGE_EMAIL"));
					final File img=getTopBannerImage();
					//Migration changes end
					final FileDataSource fds = new FileDataSource(img);
					final String cid = htmlEmail.embed(fds, "cidForHomeImage", "cidForHomeImage");
				}
				catch (final Exception e)
				{
					LOG.error("Error while embedding file in Mail", e);
				}
				htmlEmail.send();
			}
		}
		catch (final Exception e)
		{
			LOG.error("Email Sending Failed for Critical Error Alert- Failed Attachment Scenario" + e);
			return;
		}
	}

	public void orderSubmissionFailureEmail(final RendererTemplateModel templateModel, final String subject, final String to,
			final BHGERfcCallErrorModel model, final String orderId, final String userSSO)
	{

		try
		{
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true")));
			htmlEmail.setSubject(subject + " " + model.getCommerceType());
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			else
			{
				final StringWriter mailMessage = new StringWriter();
				String[] emails;
				final String delimiter = ",";
				emails = to.split(delimiter);
				for (int i = 0; i < emails.length; i++)
				{
					final String email = emails[i];
					//MailUtils.validateEmailAddress(email, "TO");
					htmlEmail.addTo(email);

				}

				final BHGECriticalErrorEmailContext myMailContext = new BHGECriticalErrorEmailContext();
				myMailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url.api"));
				myMailContext.setSubject(subject);
				LOG.info("Email to subject is " + subject + " " + model.getCommerceType());
				myMailContext.setEmailSoldTo(model.getCurrentSoldToId());
				LOG.info("Email to setEmailSoldTo is " + model.getCurrentSoldToId());
				myMailContext.setErrorDesc(model.getErrorDescription());
				myMailContext.setOrderId(orderId);
				LOG.info("Email to order id is " + orderId);
				myMailContext.setUserEmail(model.getCurrentUserEmail());
				LOG.info("Email to user email id is " + model.getCurrentUserEmail());
				myMailContext.setErrorTime(model.getErrorTime());
				myMailContext.setCartType(model.getCartType());
				myMailContext.setCommerceType(model.getCommerceType());
				myMailContext.setUserSSO(userSSO);
				bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);

				htmlEmail.setHtmlMsg(mailMessage.toString());
				try
				{
					//Migration changes start
					//final File img = new File(Config.getParameter("GE_TOP_BANNER_IMAGE_EMAIL"));
					final File img=getTopBannerImage();
					//Migration changes end

					final FileDataSource fds = new FileDataSource(img);
					final String cid = htmlEmail.embed(fds, "cidForHomeImage", "cidForHomeImage");
				}
				catch (final Exception e)
				{
					LOG.error("Error while embedding file in Mail", e);
				}
				htmlEmail.send();
			}
		}
		catch (final Exception e)
		{
			LOG.error("Email Sending Failed for Critical Error Alert" + e);
			return;
		}
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.mailmessages.services.BHGEEmailService#orderSubmissionNonCriticalErrorEmail(de.hybris.platform.
	 * commons .model.renderer.RendererTemplateModel, java.lang.String, java.lang.String, java.io.File, java.util.List)
	 */
	@Override
	public void orderSubmissionNonCriticalErrorEmail(final RendererTemplateModel templateModel, final String subject,
			final String to, final File nonCriticalErrorDetails, final List<BHGENonCrticalErrorVO> newBhgeErrorModelLst)
	{

		try
		{

			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true")));
			htmlEmail.setSubject(subject);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			else
			{
				final StringWriter mailMessage = new StringWriter();
				String[] emails;
				final String delimiter = ",";
				emails = to.split(delimiter);
				for (int i = 0; i < emails.length; i++)
				{
					final String email = emails[i];
					//MailUtils.validateEmailAddress(email, "TO");
					htmlEmail.addTo(email);

				}

				final BHGENonCriticalErrorEmailContext myMailContext = new BHGENonCriticalErrorEmailContext();
				myMailContext.setBhgePeriodicErrorLst(newBhgeErrorModelLst);
				bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
				htmlEmail.setHtmlMsg(mailMessage.toString());
				htmlEmail.embed(nonCriticalErrorDetails);

				try
				{
					//Migration changes start
					//final File img = new File(Config.getParameter("GE_TOP_BANNER_IMAGE_EMAIL"));
					final File img=getTopBannerImage();
					//Migration changes end
					final FileDataSource fds = new FileDataSource(img);
					final String cid = htmlEmail.embed(fds, "cidForHomeImage", "cidForHomeImage");
				}
				catch (final Exception e)
				{
					LOG.error("Error while embedding file in Mail", e);
				}

				htmlEmail.send();
			}
		}
		catch (final Exception e)
		{
			LOG.error("Email sending failed " + e);
			return;
		}
	}


	@Override
	public final boolean quoteSend(final EmailMessageModel message)
	{
		if (message == null)
		{
			throw new IllegalArgumentException("message must not be null");
		}

		final boolean sendEnabled = getConfigurationService().getConfiguration().getBoolean(EMAILSERVICE_SEND_ENABLED_CONFIG_KEY,
				true);
		if (sendEnabled)
		{
			try
			{
				final HtmlEmail email = getPerConfiguredEmail();
				email.setCharset("UTF-8");

				final List<EmailAddressModel> toAddresses = message.getToAddresses();
				setAddresses(message, email, toAddresses);

				final EmailAddressModel fromAddress = message.getFromAddress();
				email.setFrom(fromAddress.getEmailAddress(), nullifyEmpty(fromAddress.getDisplayName()));

				addReplyTo(message, email);
				final Collection<InternetAddress> internet = new ArrayList<InternetAddress>();
				for (final EmailAddressModel emailAddress : message.getCcAddresses())
				{
					final InternetAddress internetAddress = new InternetAddress();
					internetAddress.setAddress(emailAddress.getEmailAddress());
					internet.add(internetAddress);
				}
				email.setCc(internet);

				if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
				{
					email.setSubject(message.getSubject());
				}
				else
				{
					email.setSubject(message.getSubject() + " " + "(" + Config.getParameter("current.env") + ")");
				}
				email.setHtmlMsg(getBody(message));

				// To support plain text parts use email.setTextMsg()

				final List<EmailAttachmentModel> attachments = message.getAttachments();
				if (!processAttachmentsSuccessful(email, attachments))
				{
					return false;
				}

				// Important to log all emails sent out
				LOG.info("Sending Email [" + message.getPk() + "] To [" + convertToStrings(toAddresses) + "] From ["
						+ fromAddress.getEmailAddress() + "] Subject [" + email.getSubject() + "]");

				// Send the email and capture the message ID
				final String messageID = email.send();

				message.setSent(true);
				message.setSentMessageID(messageID);
				message.setSentDate(new Date());
				getModelService().save(message);

				return true;
			}
			catch (final EmailException e)
			{
				logInfo(message, e);
			}
		}
		else
		{
			LOG.warn("Could not send e-mail pk [" + message.getPk() + "] subject [" + message.getSubject() + "]");
			LOG.info("Email sending has been disabled. Check the config property 'emailservice.send.enabled'");
			return true;
		}

		return false;
	}

	// YTODO Auto-generated method stub

	@Override
	public void sendEmailForOrderConfEmailFailure(final String subject, final String to, final String msg, final String orderId,
			final String confirmationMail, final String soldToForCart, final String userSSO)
	{

		try
		{
			final boolean emailFlag = Boolean.parseBoolean(Config.getParameter("geedge.support.mail.flag"));
			if (emailFlag)
			{
				final RendererTemplateModel templateModel = rendererService
						.getRendererTemplateForCode("BHGEOrderConfEmailFaliureTemplate");

				if (templateModel == null)
				{
					throw new EmailException("Email Template Not found");
				}
				final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
				/* htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true"))); */
				if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
				{
					htmlEmail.setSubject(subject);
				}
				else
				{
					htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				}


				final StringWriter mailMessage = new StringWriter();
				final Calendar cal = Calendar.getInstance();
				final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				final BHGEOrderConfirmationEmailFailureContext mailContext = new BHGEOrderConfirmationEmailFailureContext();
				mailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url"));
				mailContext.setErrorDesc(msg);
				mailContext.setEmailSoldTo(soldToForCart);
				mailContext.setOrderId(orderId);
				mailContext.setErrorTime(sdf.format(cal.getTime()));
				mailContext.setUserEmail(confirmationMail);
				mailContext.setUserSSO(userSSO);

				bhgeVelocityTemplateRenderer.render(templateModel, mailContext, mailMessage, Locale.ENGLISH);

				htmlEmail.addTo(to);
				htmlEmail.setHtmlMsg(mailMessage.toString());
				htmlEmail.send();
				LOG.debug("Alert sent successfully");
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error sending Order Confirmation email Failure Alert", e);
		}



	}

	@Override
	public void sendGuestOrderNotificationEmail(final OrderModel order)
	{
		try
		{
			LOG.info("Inside sendGuestOrderNotificationEmail for Guest order Notification - Start");

			final String subject = Config.getString("GUEST_ORDER_SUBMIT_SUBJECT", "Order Status");
			final String to = Config.getString("ORDER_SUBMITION_TO_ADDRESS", "");
			final String msg = "";

			final RendererTemplateModel templateModel = rendererService
					.getRendererTemplateForCode("GuestOrderNotificationMailTemplate");

			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			/* htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true"))); */
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}

			// Setting From email i.e SVC-Prod-DSStore@bakerhughes.com
			htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("FROM_NAME"));

			LOG.info("TO address of the email is : " + to);
			LOG.info("Subject of the Email is :" + subject);
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String val = emails[i];
				htmlEmail.addTo(val);
			}

			final BHGEGuestOrderNotificationEmailContext mailContext = new BHGEGuestOrderNotificationEmailContext();
			mailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url"));
			mailContext.setSubject(subject);

			String userName = "";
			String email = "";
			final UserModel customer = userDao.findUserByUID(order.getUser().getUid());
			//email = ((CustomerModel) customer).getContactEmail();

			if(customer instanceof CustomerModel){
				CustomerModel customerModel = (CustomerModel) customer;
				//userName = customerModel.getName();
				email = customerModel.getContactEmail();
			}

			mailContext.setUserName(order.getShippingConatct2Name());
			LOG.info("Email to user Name is " + order.getShippingConatct2Name());

			mailContext.setUserEmail(email);
			LOG.info("Email to user email id is " + email);

			final String SoldToId = order.getSoldToForCart().getUid();
			mailContext.setUserSoldTo(SoldToId);
			LOG.info("Email to setEmailSoldTo is " + SoldToId);

			mailContext.setHybrisOrderNumber(order.getCode());
			LOG.info("Email to order id is " + order.getCode());

			mailContext.setOrderStatus(order.getStatus().getCode());
			LOG.info("Email to order status is " + order.getStatus().getCode());

			final StringWriter mailMessage = new StringWriter();
			bhgeVelocityTemplateRenderer.render(templateModel, mailContext, mailMessage, Locale.ENGLISH);

			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.send();
			LOG.info("Guest order Notification sent Successfully");
		}
		catch (final Exception e)
		{
			LOG.error("Error sending Guest Order Confirmation email Failure Alert", e);
			e.printStackTrace();
		}
		LOG.info("Inside sendGuestOrderNotificationEmail for Guest order Notification - End");
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.mailmessages.services.BHGEEmailService#orderHistoryFailureEmail(de.hybris.platform.commons.model.
	 * renderer.RendererTemplateModel, java.lang.String, java.lang.String, com.bhge.core.model.BHGERfcCallErrorModel,
	 * java.lang.String)
	 */
	@Override
	public void orderHistoryFailureEmail(final RendererTemplateModel templateModel, final String subject, final String to,
			final BHGERfcCallErrorModel model, final String errorCode, final String userSSO)
	{
		// YTODO Auto-generated method stub

		LOG.info("Inside orderHistoryFailureEmail - Mail Function: " + model.getCurrentSoldToId());
		try
		{
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}
			final BHGERFCFailureMailContext myMailContext = new BHGERFCFailureMailContext();
			//myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			myMailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url"));
			htmlEmail.setSubject(subject);
			myMailContext.setSubject(subject);
			if(null !=model.getCurrentSoldToId()) {
				myMailContext.setEmailSoldTo(model.getCurrentSoldToId());
				LOG.info("Email to setEmailSoldTo is " + model.getCurrentSoldToId());
			}
			myMailContext.setErrorDesc(model.getErrorDescription());
			myMailContext.setUserEmail(model.getCurrentUserEmail());
			myMailContext.setErrorTime(model.getErrorTime());
			myMailContext.setUserSSO(userSSO);
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.send();

		}
		catch (final Exception e)
		{
			e.printStackTrace();
			LOG.error("Email Sending Failed for Critical Error Alert - " + e);
			return;
		}


	}

	@Override
	public boolean registerMail(final String temlateCode, final String subject, final String to, final String userName,
			final String dispName, final String flag, final String supportMail, final String companyMail, final String app,
			final String appStatus, final String approverEmail, String accessType)
	{
		LOG.info("Inside registerMail - " + temlateCode + " & Flag " + flag);
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}
			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			final LanguageModel language = commonI18NService.getCurrentLanguage();
			String languageIso = "en";
			Locale currentLocale = new Locale("en");
			if (null != language && StringUtils.isNotEmpty(language.getIsocode()))
			{
				languageIso = language.getIsocode();
				currentLocale = commonI18NService.getLocaleForLanguage(language);
			}
			LOG.info("Language has been set to " + languageIso + " for registerMail");
			myMailContext
					.setMessages(getEmailTemplateTranslationStrategy().translateMessagesForTemplate(templateModel, languageIso));

			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			myMailContext.setCorpPwdLink(Config.getParameter("ge.corp.ssolink.password"));
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			myMailContext.setAccessType(accessType);
			myMailContext.setSso(userName);
			myMailContext.setUserName(dispName);
			myMailContext.setCompanyEmail(companyMail);
			myMailContext.setSupportMail(supportMail);
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, currentLocale);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			if (approverEmail != null && !"".equals(approverEmail))
			{
				htmlEmail.setFrom(approverEmail);
			}
			else
			{
				htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			}

			htmlEmail.send();
			return true;
		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				e.printStackTrace();
			}
		}
		return false;

	}
	
	@Override
	public boolean registerOFSMail(final String temlateCode, final String subject, final String to, final String userName,
			final String dispName, final String flag, final String supportMail, final String companyMail, final String app,
			final String appStatus, final String approverEmail)
	{
		LOG.info("Inside registerMail - " + temlateCode + " & Flag " + flag);
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}
			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			final LanguageModel language = commonI18NService.getCurrentLanguage();
			String languageIso = "en";
			if (null != language && StringUtils.isNotEmpty(language.getIsocode()))
			{
				languageIso = language.getIsocode();
			}
			myMailContext
					.setMessages(getEmailTemplateTranslationStrategy().translateMessagesForTemplate(templateModel, languageIso));

			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			myMailContext.setCorpPwdLink(Config.getParameter("ge.corp.ssolink.password"));
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			myMailContext.setSso(to);
			myMailContext.setUserName(dispName);
			myMailContext.setCompanyEmail(companyMail);
			myMailContext.setSupportMail(supportMail);
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			if (approverEmail != null && !"".equals(approverEmail))
			{
				htmlEmail.setFrom(approverEmail);
			}
			else
			{
				htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			}

			htmlEmail.send();
			return true;
		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				e.printStackTrace();
			}
		}
		return false;

	}
	
	@Override
	public boolean registerOFSFailureMailGeneric(final String emailTemplate, final String subject, final String emailTo,
			final String errorEntry, final String stackTraceMessage,final String Name, final String CustID, final String Email)
	{
		LOG.info("Inside registerFailureScenario");
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(emailTemplate);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = emailTo.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);

			}
			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			myMailContext.setName(Name);
			myMailContext.setCustID(CustID);
			myMailContext.setEmail(Email);
			myMailContext.setErrorMessage(errorEntry);
			myMailContext.setStackTraceMessage(stackTraceMessage);

			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);

			htmlEmail.setHtmlMsg(mailMessage.toString());

			htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));

			htmlEmail.send();
			return true;

		}
		catch (final EmailException ex)
		{
			LOG.error("Error in Email for Failure Sceanrio", ex);
		}
		return false;

	}

	@Override
	public boolean accessPendingMail(final String temlateCode, final String subject, final String to, List<String> attribName, List<String> attribValue) {
		LOG.info("Inside accessPendingMail - Start");
		try {
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}
			BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));

				myMailContext.setAttribName(attribName);
				myMailContext.setAttribValue(attribValue);
				myMailContext.setErrorMessage(" "); // Setting the empty value
				myMailContext.setStackTraceMessage(" "); // Setting the empty value

			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.setSubject(subject+ " " + "(" + Config.getParameter("current.env") + ")");
			htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			htmlEmail.send();
			LOG.info("Successfully sent access pending mail");
			return true;

		} catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				e.printStackTrace();
			}
		}
		catch (RuntimeException re) {
			LOG.info("Exception Inside accessPendingMail");
		}
		LOG.info("Inside accessPendingMail - End");
		return false;
	}

	@Override	public boolean registerFPTMail(final String temlateCode, final String subject, final String to, final String userName,
			final String dispName, final String flag, final String supportMail, final String companyMail, final String app,
			final String appStatus, final String approverEmail)
	{
		LOG.info("Inside registerMail - " + temlateCode + " & Flag " + flag);
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}
			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			final LanguageModel language = commonI18NService.getCurrentLanguage();
			String languageIso = "en";
			if (null != language && StringUtils.isNotEmpty(language.getIsocode()))
			{
				languageIso = language.getIsocode();
			}
			myMailContext
					.setMessages(getEmailTemplateTranslationStrategy().translateMessagesForTemplate(templateModel, languageIso));

			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			myMailContext.setCorpPwdLink(Config.getParameter("ge.corp.ssolink.password"));
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			myMailContext.setSso(userName);
			myMailContext.setUserName(dispName);
			myMailContext.setCompanyEmail(companyMail);
			myMailContext.setSupportMail(supportMail);
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			if (approverEmail != null && !"".equals(approverEmail))
			{
				htmlEmail.setFrom(approverEmail);
			}
			else
			{
				htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			}

			htmlEmail.send();
			return true;
		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				e.printStackTrace();
			}
		}
		return false;

	}	
	@Override
	public boolean processCSRMail(final String temlateCode, final String subject, final String to, final String dispName,
			final String accessRequest, final String supportMail, final String app, final String appStatus)
	{
		LOG.info("Inside processCSRMail: START - " + temlateCode);
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			final ArrayList<String> toEmail = new ArrayList<String>();
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
				toEmail.add(email);
			}

			final String accessRequestUrl = Config.getParameter("bhge.register.base.url")
					+ Config.getParameter("bhge.register.csr.request.url");

			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			myMailContext.setAccessRequest(accessRequestUrl.replace("<RequestID>", accessRequest));
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			myMailContext.setUserName(StringEscapeUtils.escapeHtml4(dispName));
			myMailContext.setEscapUtils(StringEscapeUtils.class);
			myMailContext.setSupportMail(supportMail);
			myMailContext.setToAddresses(toEmail);
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			htmlEmail.send();
			LOG.info("Inside processCSRMail: CLOSE - " + temlateCode + "and dispName" + dispName);
			return true;
		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				e.printStackTrace();
			}
		}
		return false;

	}

	@Override
	public boolean createVerificationEmail(final String temlateCode, final String subject, final String to, final String userName,
			final String url, final String resendUrl, final String cancelUrl, final String supportMail, final String companyEmail,
			final String sso, final String bhgeAppList)
	{
		LOG.info("Inside createVerificationEmail for userName: " + userName);
		try
		{

			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);

			if (templateModel == null)
			{

				throw new EmailException("Email Template Not found");
			}

			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();

			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);

			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);

			}
			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();

			final LanguageModel language = commonI18NService.getCurrentLanguage();
			String languageIso = "en";
			Locale currentLocale = new Locale("en");
			if (null != language && StringUtils.isNotEmpty(language.getIsocode()))
			{
				languageIso = language.getIsocode();
				currentLocale = commonI18NService.getLocaleForLanguage(language);
			}
			LOG.info("Language has been set to " + languageIso + " for createVerificationEmail");
			myMailContext
					.setMessages(getEmailTemplateTranslationStrategy().translateMessagesForTemplate(templateModel, languageIso));

			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			
			LOG.info("Inside beforeSettingMailContext for userName: " + userName);			
			myMailContext.setUserName(StringEscapeUtils.escapeHtml4(userName));
			myMailContext.setEscapUtils(StringEscapeUtils.class);
			myMailContext.setUrl(url);
			myMailContext.setResendUrl(resendUrl);
			myMailContext.setCancelUrl(cancelUrl);
			myMailContext.setCompanyEmail(companyEmail);
			myMailContext.setSupportMail(supportMail);
			myMailContext.setSso(sso);
			myMailContext.setApp(bhgeAppList);
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, currentLocale);
			htmlEmail.setCharset("UTF-8");
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			LOG.info("Inside afterSettingMailContext for userName: " + userName);
			htmlEmail.send();
			return true;
		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				LOG.error("Email sending failed ", e);
			}
		}
		return false;

	}

	/* Anish */
	@Override
	public boolean createAccessRequestEmail(final String temlateCode, final String subject, final String requestorEmailId,
			final String requestorName, final String accessRequested, final String txtAdditionalComments,
			final String userManagerEmail, final String userManagerName)
	{
		LOG.info("Inside createAccessRequestEmail for userName: " + temlateCode);
		try
		{

			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);

			if (templateModel == null)
			{

				throw new EmailException("Email Template Not found");
			}

			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();

			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = userManagerEmail.split(delimiter);

			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);

			}
			//final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			final UserProfileEmailContext myMailContext = new UserProfileEmailContext();
			//myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				//myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				//myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			myMailContext.setRequestorName(requestorName);
			myMailContext.setApprovedAccessList(accessRequested);
			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			myMailContext.setPendingAccessList(accessRequested);
			myMailContext.setUserManagerEmail(userManagerEmail);
			myMailContext.setUserManagerName(userManagerName);
			myMailContext.setRequestorComment(txtAdditionalComments);
			myMailContext.setRequestorEmail(requestorEmailId);
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			htmlEmail.send();
			return true;
		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				LOG.error("Email sending failed ", e);
			}
		}
		return false;

	}
	/* Anish */




	@Override
	public boolean createUserManagerEmail(final String temlateCode, final String subject, final String to,
			final String requestorName, final String requestorEmail, final String userManagerName, final String accesstype,
			final String userManagerLink, final String flag, final String currentAccessType)
	{
		LOG.info("Email sending context ");
		try
		{
			LOG.info("Email sending context 1");
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);
			LOG.info("Email sending context 3");
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			/* htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true"))); */
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);

			}
			final BHGEUserManagerEmailContext myMailContext = new BHGEUserManagerEmailContext();
			if (flag != null && flag.equalsIgnoreCase(USERMANAGERCHECK))
			{
				LOG.info("Email sending context 4 and Flag" + flag);
				if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
				{
					htmlEmail.setSubject(subject);
					myMailContext.setSubject(subject);
				}
				else
				{
					htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
					myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				}
				myMailContext.setEmail(to);
				myMailContext.setRequestorName(requestorName);
				myMailContext.setRequestorEmail(requestorEmail);
				myMailContext.setAccesstype(accesstype);
				myMailContext.setUserManagerLink(userManagerLink);
				myMailContext.setUserManagerName(userManagerName);
				myMailContext.setCurrentAccessType(currentAccessType);
				LOG.info("Email sending context 5");
			}
			if (flag != null && flag.equalsIgnoreCase(USERMANAGERUSERCHECK))
			{
				LOG.info("Email sending context 4 and Flag" + flag);
				myMailContext.setSubject(subject);
				myMailContext.setUserName(userManagerName);
				LOG.info("Email sending context 5");
			}
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			LOG.info("Email sending context 6");
			htmlEmail.setHtmlMsg(mailMessage.toString());
			LOG.info("Email sending conext  7");
			//htmlEmail.embed(logo);
			htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			htmlEmail.send();
			LOG.info("Email sending context 8");
			return true;

		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				// YTODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return false;

	}

	@Override
	public boolean createUserSSOEmail(final String temlateCode, final String subject, final String to, final String userName,
			final String flag, final List<String> userMessageList, final String supportMail, final String companyEmail)
	{
		LOG.info("Inside createUserSSOEmail - " + temlateCode);
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);
			final LanguageModel language = commonI18NService.getCurrentLanguage();
			String languageIso = "en";
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			/* htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true"))); */
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);

			}
			LOG.info("Flag in context - " + flag);
			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			final List<BHGERegisterUserMultipleSSOData> tableDetails = new ArrayList<BHGERegisterUserMultipleSSOData>();
			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			if (flag != null && flag.equalsIgnoreCase(USERCHECK))
			{
				populateAccessRequestDetailsForAllSSOs(userMessageList, tableDetails);
				myMailContext.setForgotPasswordLink(Config.getParameter("bhge.sso.forgot.password.url"));
				myMailContext.setLoginLink(Config.getParameter("bhge.ecommerce.login"));
				myMailContext.setRegisterLink(Config.getParameter("bhge.register.login"));
				myMailContext.setMultipleSSODetails(tableDetails);
				myMailContext.setEmail(to);
				myMailContext.setCompanyEmail(companyEmail);
				myMailContext.setSupportMail(supportMail);
				myMailContext.setUrlDecoder(URLDecoder.class);
				if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
				{
					htmlEmail.setSubject(subject);
					myMailContext.setSubject(subject);
				}
				else
				{
					htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
					myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				}
				myMailContext.setUserName(userName);
				myMailContext.setUserMessageList(userMessageList);
			}


			if (null != language && StringUtils.isNotEmpty(language.getIsocode()))
			{
				languageIso = language.getIsocode();
			}
			myMailContext
					.setMessages(getEmailTemplateTranslationStrategy().translateMessagesForTemplate(templateModel, languageIso));
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			htmlEmail.send();
			return true;

		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			ex.printStackTrace();
		}
		return false;

	}



	@Override
	public boolean createUserSSOEmail(final String temlateCode, final String subject, final String to,
			final List<String> selectedApp, final String userName, final String flag, final List<String> userMessageList,
			final String supportMail, final String companyEmail, final String lastName)
	{
		LOG.info("Inside createUserSSOEmail - " + temlateCode);
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);
			final LanguageModel language = commonI18NService.getCurrentLanguage();
			String languageIso = "en";
			Locale currentLocale = new Locale("en");
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			/* htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true"))); */
			htmlEmail.setSubject(subject);
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}
			LOG.info("Flag in context - " + flag);
			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			final List<BHGERegisterUserMultipleSSOData> tableDetails = new ArrayList<BHGERegisterUserMultipleSSOData>();
			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			if (flag != null && flag.equalsIgnoreCase(USERCHECK))
			{
				LOG.info("Under if condition 1776 emailService ");
				//populateAccessRequestDetailsForAllSSOs(userMessageList, tableDetails);
				populateAccessRequestDetailsForAllSSOs(userMessageList, tableDetails, selectedApp);
				myMailContext.setForgotPasswordLink(Config.getParameter("bhge.sso.forgot.password.url"));
				myMailContext.setLoginLink(Config.getParameter("bhge.ecommerce.login"));
				//myMailContext.setRegisterLink(Config.getParameter("bhge.register.login"));
				myMailContext.setMultipleSSODetails(tableDetails);
				myMailContext.setEmail(to);
				myMailContext.setCompanyEmail(companyEmail);
				myMailContext.setSupportMail(supportMail);
				myMailContext.setSubject(subject);
				myMailContext.setUserName(userName);
				myMailContext.setUserMessageList(userMessageList);
				myMailContext.setUrlDecoder(URLDecoder.class);
				LOG.info("Selected App----" + selectedApp);
				//selectedApp = selectedApp.stream().map(app ->app.replace("1", "Digital Solutions Store"))
						//.map(app ->app.replace("4", "F&PT Valvstore")).collect(Collectors.toList());
				for(int i = 0; i < selectedApp.size(); i++)
				{
					if (selectedApp.get(i).equalsIgnoreCase("1"))
					{
						selectedApp.set(i, "Digital Solutions Store");
					}
					if (selectedApp.get(i).equalsIgnoreCase("4"))
					{
						selectedApp.set(i, "F&PT Valvstore");
					}
					if (selectedApp.get(i).equalsIgnoreCase("5"))
					{
						selectedApp.set(i, "Shop Baker Hughes");
						myMailContext.setUserName(userName+" "+lastName);
					}
				}				
				String slisttest = selectedApp.stream().collect(Collectors.joining(","));
				myMailContext.setApp(slisttest);
			}
			if (null != language && StringUtils.isNotEmpty(language.getIsocode()))
			{
				languageIso = language.getIsocode();
				currentLocale = commonI18NService.getLocaleForLanguage(language);
			}
			LOG.info("Language has been set to " + languageIso + " for createUserSSOEmail 1820");
			myMailContext
					.setMessages(getEmailTemplateTranslationStrategy().translateMessagesForTemplate(templateModel, languageIso));


			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, currentLocale);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			htmlEmail.send();
			LOG.info("Email sent successfully to "+(Objects.nonNull(htmlEmail.getToAddresses())?htmlEmail.getToAddresses():"-"));
			return true;

		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			ex.printStackTrace();
		}
		return false;

	}

	/**
	 * Populates all request details for user email for all SSOs
	 *
	 * @param userMessageList
	 * @param tableDetails
	 */
	private void populateAccessRequestDetailsForAllSSOs(final List<String> userMessageList,
			final List<BHGERegisterUserMultipleSSOData> tableDetails)
	{
		for (final String userSSO : userMessageList)
		{
			try
			{
				final BHGERegieterCustomerModel registerCustomerModel = bhgeUserProfileDao.getRegisterCustomerModelFromSSO(userSSO);
				final List<BHGEUserAccessRequestModel> accessRequestModels = bhgeUserProfileDao
						.getUserAccessRequestfromRegisterCustUID(registerCustomerModel.getUid());
				for (final BHGEUserAccessRequestModel accessRequestModel : accessRequestModels)
				{
					final BHGERegisterUserMultipleSSOData lineItem = new BHGERegisterUserMultipleSSOData();
					lineItem.setUserSSO(userSSO);
					lineItem.setAppAccessName("");
					lineItem.setAccessRequestStatus("");
					if (accessRequestModel.getRequestStatus() != null)
					{
						lineItem.setAccessRequestStatus(enumerationService.getEnumerationName(accessRequestModel.getRequestStatus()));
					}
					final BHGEApprovalDetailsModel approvalDetailsModel = accessRequestModel.getApproverDetails();
					if (approvalDetailsModel != null)
					{
						final BHGEAppAccessLevelModel appAccessLevel = approvalDetailsModel.getAppAccessLevel();
						if (appAccessLevel != null)
						{
							//final String appName = appAccessLevel.getAppAccessLevelName();
							if (appAccessLevel.getApplicationInfo().getApplicationId() == 1)
							{
								lineItem.setAppAccessName(DIGITAL_SOLUTIONS_STORE); // To be changed after multiple applications is in scope
							}
							if (appAccessLevel.getApplicationInfo().getApplicationId() == 2)
							{
								lineItem.setAppAccessName("IQM by BHGE"); // To be changed after multiple applications is in scope
							}
							if (appAccessLevel.getApplicationInfo().getApplicationId() == 3)
							{
								lineItem.setAppAccessName("Dcoumentation Portal"); // To be changed after multiple applications is in scope
							}
							if (appAccessLevel.getApplicationInfo().getApplicationId() == 4)
							{
								lineItem.setAppAccessName("F&PT Valvstore"); // To be changed after multiple applications is in scope
							}
						}
					}
					tableDetails.add(lineItem);
				}

			}
			catch (final UnknownIdentifierException e)
			{
				final BHGERegisterUserMultipleSSOData lineItem = new BHGERegisterUserMultipleSSOData();
				lineItem.setUserSSO(userSSO);
				lineItem.setAppAccessName(DIGITAL_SOLUTIONS_STORE);
				lineItem.setAccessRequestStatus(NOT_REGISTERED);
				tableDetails.add(lineItem);
				LOG.debug("SSO not found in the system" + userSSO);
			}
		}
	}

	private void populateAccessRequestDetailsForAllSSOs(final List<String> userMessageList,
			final List<BHGERegisterUserMultipleSSOData> tableDetails, final List<String> selectedApp)
	{
		LOG.info("size of userMessageList 1906: "+userMessageList.size() + " size of selectedApp: "+selectedApp.size());
		for (final String userSSO : userMessageList)
		{
			for (int i = 0; i < selectedApp.size(); i++)
			{
				try
				{
					LOG.info("Inside try condition of populator 1913");
					final BHGERegieterCustomerModel registerCustomerModel = bhgeUserProfileDao
							.getRegisterCustomerModelFromSSO(userSSO);
					final List<BHGEUserAccessRequestModel> accessRequestModels = bhgeUserProfileDao
							.getUserAccessRequestfromRegisterCustUID(registerCustomerModel.getUid(), selectedApp.get(i));
					if (!accessRequestModels.isEmpty())
					{
						LOG.info("Inside if condition found accessRequestModel: "+accessRequestModels.size());
						for (final BHGEUserAccessRequestModel accessRequestModel : accessRequestModels)
						{
							final BHGERegisterUserMultipleSSOData lineItem = new BHGERegisterUserMultipleSSOData();
							lineItem.setUserSSO(userSSO);
							lineItem.setAppAccessName("");
							lineItem.setAccessRequestStatus("");
							if (accessRequestModel.getRequestStatus() != null)
							{
								lineItem.setAccessRequestStatus(
										enumerationService.getEnumerationName(accessRequestModel.getRequestStatus()));
							}
							final BHGEApprovalDetailsModel approvalDetailsModel = accessRequestModel.getApproverDetails();
							if (approvalDetailsModel != null)
							{
								final BHGEAppAccessLevelModel appAccessLevel = approvalDetailsModel.getAppAccessLevel();
								if (appAccessLevel != null)
								{
									//final String appName = appAccessLevel.getAppAccessLevelName();
									if (appAccessLevel.getApplicationInfo().getApplicationId() == 1)
									{
										lineItem.setAppAccessName(DIGITAL_SOLUTIONS_STORE); // To be changed after multiple applications is in scope
										lineItem.setLoginLink(Config.getParameter("bhge.ecommerce.login"));
										lineItem.setSupportMail(Config.getParameter("bhge.register.email.failure.technical"));
									}
									if (appAccessLevel.getApplicationInfo().getApplicationId() == 2)
									{
										lineItem.setAppAccessName("IQM by BHGE"); // To be changed after multiple applications is in scope
									}
									if (appAccessLevel.getApplicationInfo().getApplicationId() == 3)
									{
										lineItem.setAppAccessName("Documentation Portal"); // To be changed after multiple applications is in scope
									}
									if (appAccessLevel.getApplicationInfo().getApplicationId() == 4)
									{
										lineItem.setAppAccessName("F&PT Valvstore"); // To be changed after multiple applications is in scope
										lineItem.setLoginLink(Config.getParameter("bhge.ecommerce.login"));
										lineItem.setSupportMail(Config.getParameter("fpt.bhge.register.email.failure.technical"));
									}
									if (appAccessLevel.getApplicationInfo().getApplicationId() == 5)
									{
										lineItem.setAppAccessName("ShopBakerHughes"); // To be changed after multiple applications is in scope
										lineItem.setLoginLink(Config.getParameter("bhge.login.ofs"));
										lineItem.setSupportMail(Config.getParameter("bhge.ofs.register.email.failure.technical"));
									}
								}
							}
							tableDetails.add(lineItem);
						}
					}
					else if(accessRequestModels.isEmpty()) {
						LOG.info("Inside else condition not found accessRequestModel: "+accessRequestModels.size());
						final BHGERegisterUserMultipleSSOData lineItem = new BHGERegisterUserMultipleSSOData();
						lineItem.setUserSSO(userSSO);
						String registerLink=Config.getParameter("bhge.register.login") + "&userId=" + userSSO + "&emailFlow=true";
						String fptRegisterLink=Config.getParameter("bhge.register.login.fpt") + "&userId=" + userSSO + "&emailFlow=true";
						String OFSRegisterLink=Config.getParameter("bhge.register.login.ofs") + "&userId=" + userSSO + "&emailFlow=true";
						//lineItem.setAppAccessName(selectedApp.get(i));
						if (selectedApp.get(i).equalsIgnoreCase("1"))
						{
							lineItem.setAppAccessName(DIGITAL_SOLUTIONS_STORE);
							lineItem.setRegisterLink(registerLink);
							lineItem.setSupportMail(Config.getParameter("bhge.register.email.failure.technical"));
						}
						if (selectedApp.get(i).equalsIgnoreCase("2"))
						{
							lineItem.setAppAccessName("IQM by BHGE");
							lineItem.setRegisterLink(Config.getParameter("bhge.register.login.iqm"));
						}
						if (selectedApp.get(i).equalsIgnoreCase("3"))
						{
							lineItem.setAppAccessName("Documentation Portal");
							lineItem.setRegisterLink(Config.getParameter("bhge.register.login.dam"));
						}
						if (selectedApp.get(i).equalsIgnoreCase("4"))
						{
							lineItem.setAppAccessName("F&PT Valvstore");
							lineItem.setRegisterLink(fptRegisterLink);
							lineItem.setSupportMail(Config.getParameter("fpt.bhge.register.email.failure.technical"));
						}
						if (selectedApp.get(i).equalsIgnoreCase("5"))
						{
							lineItem.setAppAccessName("Shop Baker Hughes");
							lineItem.setRegisterLink(OFSRegisterLink);
							//lineItem.setRegisterLink(Config.getParameter("bhge.register.login.ofs"));
							lineItem.setSupportMail(Config.getParameter("bhge.ofs.register.email.failure.technical"));
						}
						lineItem.setAccessRequestStatus(NOT_REGISTERED);
						tableDetails.add(lineItem);
						LOG.debug("SSO not found in the system" + userSSO);
					}

				}
				catch (final UnknownIdentifierException e)
				{
					LOG.info("Inside catch condition of populator 2015: "+ e.getMessage() +" Exception: "+e);
					final BHGERegisterUserMultipleSSOData lineItem = new BHGERegisterUserMultipleSSOData();
					lineItem.setUserSSO(userSSO);
					String registerLink=Config.getParameter("bhge.register.login") + "&userId=" + userSSO + "&emailFlow=true";
					String fptRegisterLink=Config.getParameter("bhge.register.login.fpt") + "&userId=" + userSSO + "&emailFlow=true";
					String OFSRegisterLink=Config.getParameter("bhge.register.login.ofs") + "&userId=" + userSSO + "&emailFlow=true";
					//lineItem.setAppAccessName(selectedApp.get(i));
					if (selectedApp.get(i).equalsIgnoreCase("1"))
					{
						lineItem.setAppAccessName(DIGITAL_SOLUTIONS_STORE);
						lineItem.setRegisterLink(registerLink);
						lineItem.setSupportMail(Config.getParameter("bhge.register.email.failure.technical"));
					}
					if (selectedApp.get(i).equalsIgnoreCase("2"))
					{
						lineItem.setAppAccessName("IQM by BHGE");
						lineItem.setRegisterLink(Config.getParameter("bhge.register.login.iqm"));
					}
					if (selectedApp.get(i).equalsIgnoreCase("3"))
					{
						lineItem.setAppAccessName("Documentation Portal");
						lineItem.setRegisterLink(Config.getParameter("bhge.register.login.dam"));
					}
					if (selectedApp.get(i).equalsIgnoreCase("4"))
					{
						lineItem.setAppAccessName("F&PT Valvstore");
						lineItem.setRegisterLink(fptRegisterLink);
						//lineItem.setRegisterLink(Config.getParameter("bhge.register.login.fpt"));
						lineItem.setSupportMail(Config.getParameter("fpt.bhge.register.email.failure.technical"));
					}
					if (selectedApp.get(i).equalsIgnoreCase("5"))
					{
						lineItem.setAppAccessName("Shop Baker Hughes");
						lineItem.setRegisterLink(OFSRegisterLink);
						//lineItem.setRegisterLink(Config.getParameter("bhge.register.login.ofs"));
						lineItem.setSupportMail(Config.getParameter("bhge.ofs.register.email.failure.technical"));
					}
					lineItem.setAccessRequestStatus(NOT_REGISTERED);
					tableDetails.add(lineItem);
					LOG.debug("SSO not found in the system" + userSSO);
				}
			}
		}
	}

	@Override
	public boolean createManualWorkflowEmail(final String temlateCode, final String subject, final String to,
			final String userName, final String sso, final String flag, final String processedBy, final String reason,
			final String supportMail, final String companyMail, final String approverEmail)
	{
		LOG.info("Inside createManualWorkflowEmail - " + temlateCode);
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);

			}
			LOG.info("Flag in context - " + flag);
			final BHGEManualApprovalEmailContext myMailContext = new BHGEManualApprovalEmailContext();
			final LanguageModel language = commonI18NService.getCurrentLanguage();
			String languageIso = "en";
			Locale currentLocale = new Locale("en");
			if (null != language && StringUtils.isNotEmpty(language.getIsocode()))
			{
				languageIso = language.getIsocode();
				currentLocale = commonI18NService.getLocaleForLanguage(language);
			}
			LOG.info("Language has been set to " + languageIso + " for createManualWorkflowEmail 2099");
			myMailContext
					.setMessages(getEmailTemplateTranslationStrategy().translateMessagesForTemplate(templateModel, languageIso));


			if (flag != null
					&& (flag.equalsIgnoreCase(CSR_APPLICATIONACCESS_REJECT) || flag.equalsIgnoreCase(CSR_IQM_APPLICATIONACCESS_REJECT)
							|| flag.equalsIgnoreCase(CSR_FPT_APPLICATIONACCESS_REJECT) || flag.equalsIgnoreCase(CSR_OFS_APPLICATIONACCESS_REJECT)))
			{
				myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
				if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
				{
					htmlEmail.setSubject(subject);
					myMailContext.setSubject(subject);
				}
				else
				{
					htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
					myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				}
				myMailContext.setProcessedBy(processedBy);
				myMailContext.setReason(reason);
				myMailContext.setUserName(userName);
				myMailContext.setSso(sso);
				myMailContext.setEmail(to);
				myMailContext.setCompanyMail(companyMail);
				myMailContext.setSupportMail(supportMail);
			}
			else
			{
				if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
				{
					htmlEmail.setSubject(subject);
					myMailContext.setSubject(subject);
				}
				else
				{
					htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
					myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				}
				myMailContext.setUserName(userName);
				myMailContext.setSso(sso);
				myMailContext.setEmail(to);
			}
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, currentLocale);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			if (approverEmail != null && !"".equals(approverEmail))
			{
				htmlEmail.setFrom(approverEmail);
			}
			else
			{
				htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			}
			htmlEmail.send();
			return true;
		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			ex.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean registerSubmitWorkflowEmail(final String temlateCode, final String subject, final String to,
			final String userName, final String sso, final String flag, final String supportMail, final String approvalEmail)
	{
		LOG.info("Inside registerSubmitWorkflow - " + temlateCode);
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);

			}

			if (approvalEmail != null && !approvalEmail.equals(""))
			{
				htmlEmail.addBcc(approvalEmail);
			}

			LOG.info("Flag in context - " + flag);
			//final BHGEManualApprovalEmailContext myMailContext = new BHGEManualApprovalEmailContext();
			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			final LanguageModel language = commonI18NService.getCurrentLanguage();
			String languageIso = "en";
			if (null != language && StringUtils.isNotEmpty(language.getIsocode()))
			{
				languageIso = language.getIsocode();
			}
			myMailContext
					.setMessages(getEmailTemplateTranslationStrategy().translateMessagesForTemplate(templateModel, languageIso));


			if (flag != null && (flag.equalsIgnoreCase(IQM_REQUEST_SUBMIT)))
			{
				myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
				if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
				{
					htmlEmail.setSubject(subject);
					myMailContext.setSubject(subject);
				}
				else
				{
					htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
					myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				}
				myMailContext.setUserName(userName);
				myMailContext.setSso(sso);
				myMailContext.setEmail(to);
				myMailContext.setSupportMail(supportMail);
			}
			else
			{
				if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
				{
					htmlEmail.setSubject(subject);
					myMailContext.setSubject(subject);
				}
				else
				{
					htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
					myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				}
				myMailContext.setUserName(userName);
				myMailContext.setSso(sso);
				myMailContext.setEmail(to);
			}
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			if (flag != null && (flag.equalsIgnoreCase(IQM_REQUEST_SUBMIT)) && approvalEmail != null && !approvalEmail.equals(""))
			{
				htmlEmail.setFrom(approvalEmail);
			}
			else
			{
				htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			}

			htmlEmail.send();
			return true;
		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			ex.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean createShareOrderEmail(final String SHARETEMPLATECODE, final BHGEOrderHistoryData headerData,
			final String subject, final String toAddress) throws ParseException
	{
		LOG.info("**********************************+ Email sending context ***********************************************");
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(SHARETEMPLATECODE);

			if (templateModel == null)
			{
				throw new EmailException("Share order Email Template Not found");
			}

			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setSubject(subject);
			htmlEmail.setCharset("UTF-8");

			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = toAddress.split(delimiter);

			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}

			final BHGEOrderShareEmailContext myMailContext = new BHGEOrderShareEmailContext();
			myMailContext.setSubject(subject);
			//myMailContext.setMediaBaseUrl(getSiteBaseUrlResolutionService().getMediaUrlForSite(getBaseSiteService().getBaseSiteForUID("bhge"), false));
			myMailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url"));
			myMailContext.setOrderHeaderData(headerData);

			LOG.info("Email sending context");
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.send();

			LOG.info("Inside SendMail Share Order : CLOSE");
			return true;
		}

		catch (

		final EmailException ex)
		{
			LOG.error("Share order Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed." + ex);
			}
			catch (final Exception e)
			{
				// YTODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
	public boolean createOrderLineDataEmail(final String TEMPLATECODE, final ArrayList<OrderHistoryViewData> orderData,
			final String subject, final String to)
	{
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(TEMPLATECODE);
			LOG.info("Email sending conext 3");
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			/* htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true"))); */
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);

			}
			final BHGEOrderTrackingEmailContext myMailContext = new BHGEOrderTrackingEmailContext();

			myMailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url"));
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			if (orderData != null)
			{
				for (final OrderHistoryViewData orderEntry : orderData)
				{
					if ("Received".equalsIgnoreCase(orderEntry.getStatus()))
					{
						orderEntry.setStatus("Order Received");
					}
					else if ("Processing".equalsIgnoreCase(orderEntry.getStatus()))
					{
						orderEntry.setStatus("Order In Progress");
					}
				}
			}
			myMailContext.setOrder(orderData);
			final LanguageModel language = commonI18NService.getCurrentLanguage();
			String languageIso = "en";
			if (null != language && StringUtils.isNotEmpty(language.getIsocode()))
			{
				languageIso = language.getIsocode();
			}
			myMailContext
					.setMessages(getEmailTemplateTranslationStrategy().translateMessagesForTemplate(templateModel, languageIso));

			LOG.info("Email sending conext");
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());

			//htmlEmail.embed(logo);

			htmlEmail.send();
			return true;
		}

		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				// YTODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return false;

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.mailmessages.services.BHGEEmailService#createEnquiryForm(java.lang.String, java.lang.String,
	 * java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)
	 */
	@Override
	public EmailResponse createEnquiryForm(final String TEMPLATECODE, final String userName, final String emailIds,
			final String businessName, final String orderNumber, final String poNumber, final String datePlaced,
			final String enquiryType, final String inquiryDetails, final String subject, final String soldToId,
			final String productHeirarchy, final String productLine)
	{
		final EmailResponse resp = new EmailResponse();
		try
		{
			LOG.info("Inside createEnquiryForm: START - " + orderNumber + " & User - " + userName);
			String emailMatrix = null;

			emailMatrix = fetchEmail(userName, orderNumber, enquiryType, soldToId, productHeirarchy, productLine);

			if (null == emailMatrix)
			{
				emailMatrix = Config.getParameter("orderEnquiry.email");
			}
			LOG.info("Inside createEnquiryForm: EMAIL - " + emailMatrix);
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(TEMPLATECODE);
			
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			LOG.info("============== Order Inquiry templateModel ============ "+templateModel.getCode());
			//	final String emailId = Config.getParameter("orderEnquiry.email");
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setFrom(emailIds);
			htmlEmail.addReplyTo(emailIds);
			//set encoding
			htmlEmail.setCharset("UTF-8");
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = emailMatrix.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}
			final BHGEOrderEnquiryEmailContext myMailContext = new BHGEOrderEnquiryEmailContext();
			myMailContext.setBhgeBasePath(Config.getParameter("bhge.store.base.url"));
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			myMailContext.setBusinessName(businessName);
			myMailContext.setDatePlaced(datePlaced);
			myMailContext.setEnquiryType(enquiryType);
			myMailContext.setInquiryDetails(inquiryDetails);
			myMailContext.setUserName(userName);
			myMailContext.setOrderNumber(orderNumber);
			myMailContext.setPoNumber(poNumber);
			LOG.info("=============== Order Inquiry email values ============= business name : "+myMailContext.getBusinessName()+" date placed : "+myMailContext.getDatePlaced()+
					" inquiry details: "+myMailContext.getInquiryDetails()+" inquiry Type : "+myMailContext.getEnquiryType()+" user name : "+myMailContext.getUserName()+
					" order number : "+myMailContext.getOrderNumber()+ " po number : "+myMailContext.getPoNumber());
			final LanguageModel language = commonI18NService.getCurrentLanguage();
			String languageIso = "en";
			if (null != language && StringUtils.isNotEmpty(language.getIsocode()))
			{
				languageIso = language.getIsocode();
			}
			myMailContext
					.setMessages(getEmailTemplateTranslationStrategy().translateMessagesForTemplate(templateModel, languageIso));


			LOG.info("Inside createEnquiryForm: RENDER");
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.send();
			resp.setEmailid(emailMatrix);
			resp.setStatus(true);
			LOG.info("Inside createEnquiryForm: CLOSE");
			return resp;
		}

		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				// YTODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return resp;


	}

	/**
	 * @param tEMPLATECODE
	 * @param userName
	 * @param emailIds
	 * @param businessName
	 * @param orderNumber
	 * @param poNumber
	 * @param datePlaced
	 * @param enquiryType
	 * @param inquiryDetails
	 * @param subject
	 * @param soldToId
	 * @param productHeirarchy
	 * @return
	 */


	/**
	 * @param enquiryType
	 * @param soldToId
	 * @param productHeirarchy
	 *
	 */
	@Override
	public  String fetchEmailforcc(final String soldToId,final String productLine)


	{
		try {
			final B2BUnitModel soldTo = b2bUnitService.getUnitForUid(null != soldToId ? leftPad(soldToId, 10, '0') : "");
			BHGERegisterKeyValueDataModel countryValueData = fetchCountryData(soldTo.getCountryCP());
			BHGERegisterKeyValueDataModel productLineModel = null;
			String email= null;
			BHGEMnCEcommMatrixModel matrixData= null;
			productLineModel =  getBhgeEmailServiceDao().getBhgeRegisterKeyValueDataModel(productLine, productLineModel);
			for (int i = 0; i < 3; i++)
			{
		       matrixData = fetchInquiryMatrix(countryValueData, productLineModel, i);

				if (null != matrixData)
				{
					break;
				}

			}
			if(null != matrixData)
			{
				email = matrixData.getEmailInquiryType().getQuoteOrderInquiry();
				if(null == email)
				{
					return Config.getParameter("cordant.order.confirmation.cc.global.email");
				}
			}

			return email;
		}
		catch(final Exception ex)
		{
			 LOG.error("Error fetching email for cc in order enquiry", new Exception("Error fetching email for cc in order enquiry"));
			 return Config.getParameter("cordant.order.confirmation.cc.global.email");
		}

	}
	private String fetchEmail(final String userName, final String orderNumber, final String enquiryType, final String soldToId,
			final String productHeirarchy, final String inProductLine)
	{
		String email = null;
		try
		{
			LOG.info("Inside fetchEmail: START - " + userName + " & Order Number - " + orderNumber);

			BHGERegisterKeyValueDataModel countryValueData = getModelService().create(BHGERegisterKeyValueDataModel.class);
			BHGEMnCEcommMatrixModel matrixData = getModelService().create(BHGEMnCEcommMatrixModel.class);
			BHGERegisterKeyValueDataModel productLine = getModelService().create(BHGERegisterKeyValueDataModel.class);


			final B2BUnitModel soldTo = b2bUnitService.getUnitForUid(null != soldToId ? leftPad(soldToId, 10, '0') : "");

			//final B2BUnitModel soldTo = getBhgeEmailServiceDao().fetchSoldTo(soldToId);

			if (null == soldTo || null == soldTo.getCountryCP() || soldTo.getCountryCP().isEmpty())
			{
				//LOG.info("Inside fetchEmail: COUNTRY - " + soldTo.getCountryCP());
				return Config.getParameter("orderEnquiry.email");
			}

			countryValueData = fetchCountryData(soldTo.getCountryCP());
			productLine = fetchLinkedProductLine(productHeirarchy, inProductLine);

			LOG.info("Inside fetchEmail: MATRIX - " + countryValueData.getAttributeKey() + " & Region - "
					+ countryValueData.getParentAttrib().getParentAttrib().getAttributeKey() + " & ProductLine - "
					+ productLine.getAttributeKey());


			for (int i = 0; i < 3; i++)
			{
				matrixData = fetchInquiryMatrix(countryValueData, productLine, i);

				if (null != matrixData)
				{
					break;
				}

			}

			if (null != matrixData)
			{
				if (checkForGovtUser(soldTo))
				{
					email = matrixData.getEmailInquiryType().getGovernmentUser();
				}
				else
				{
					final BHGEInquiryEmailModel enquiryTable = matrixData.getEmailInquiryType();
					email = compareEmailType(enquiryTable, enquiryType);
				}
			}

			else
			{
				return Config.getParameter("orderEnquiry.email");
			}

			return (null != email ? email : Config.getParameter("orderEnquiry.email"));
		}

		catch (final Exception ex)
		{
			ex.printStackTrace();
			if (null == email)
			{
				email = Config.getParameter("orderEnquiry.email");
			}
		}
		return email;
	}

	/**
	 * @param originalString
	 * @param length
	 * @param padCharacter
	 * @return
	 */
	public static String leftPad(final String originalString, final int length, final char padCharacter)
	{
		String paddedString = originalString;
		while (paddedString.length() < length)
		{
			paddedString = padCharacter + paddedString;
		}
		return paddedString;
	}


	/**
	 * @param submitDetails
	 * @return
	 *
	 */
	private BHGEMnCEcommMatrixModel fetchInquiryMatrix(final BHGERegisterKeyValueDataModel countryValueData,
			final BHGERegisterKeyValueDataModel productLine, final int counter)
	{
		LOG.info("Inside fetchInquiryMatrix: START - " + productLine.getAttributeValue() + " & Country - "
				+ countryValueData.getAttributeValue());

		if (counter == 0)
		{

			return getBhgeEmailServiceDao().fetchInquiryMatrixData(countryValueData.getPk().toString(),
					productLine.getPk().toString(), "country");

		}
		else if (counter == 1)
		{
			return getBhgeEmailServiceDao().fetchInquiryMatrixData(countryValueData.getParentAttrib().getPk().toString(),
					productLine.getPk().toString(), "subRegion");

		}
		else if (counter == 2)
		{

			return getBhgeEmailServiceDao().fetchInquiryMatrixData(
					countryValueData.getParentAttrib().getParentAttrib().getPk().toString(), productLine.getPk().toString(), "region");

		}
		LOG.info("Inside fetchInquiryMatrix: NOMATCH - " + productLine + " & Country - " + countryValueData);
		return null;
	}

	/**
	 * @param tEMPLATECODE
	 * @param userName
	 * @param emailIds
	 * @param businessName
	 * @param orderNumber
	 * @param poNumber
	 * @param datePlaced
	 * @param enquiryType
	 * @param inquiryDetails
	 * @param subject
	 * @param soldToId
	 */
	private boolean sendMail(final String tEMPLATECODE, final String userName, final String emailIds, final String businessName,
			final String orderNumber, final String poNumber, final String datePlaced, final String enquiryType,
			final String inquiryDetails, final String subject, final String soldToId)
	{
		try
		{



			// YTODO Auto-generated method stub
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(tEMPLATECODE);
			LOG.info("Email sending conext 3");
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final String emailId = Config.getParameter("orderEnquiry.email");
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();

			htmlEmail.setFrom(emailIds);
			htmlEmail.addReplyTo(emailIds);
			//htmlEmail.addBcc(Config.getParameter("bhge.register.email.failure.technical"));
			/*
			 * htmlEmail.addBcc("jignesh.gandhi@bhge.com"); htmlEmail.setFrom(emailIds);
			 */
			/* htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true"))); */
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = emailId.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				//final String email = emails[i];
				MailUtils.validateEmailAddress(emailId, "TO");
				htmlEmail.addTo(emailId);

			}
			final BHGEOrderEnquiryEmailContext myMailContext = new BHGEOrderEnquiryEmailContext();
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}

			myMailContext.setBusinessName(businessName);
			myMailContext.setDatePlaced(datePlaced);
			myMailContext.setEnquiryType(enquiryType);
			myMailContext.setInquiryDetails(inquiryDetails);
			myMailContext.setUserName(userName);
			myMailContext.setOrderNumber(orderNumber);
			myMailContext.setPoNumber(poNumber);
			myMailContext.setBhgeBasePath(Config.getParameter("bhge.store.base.url"));
			final LanguageModel language = commonI18NService.getCurrentLanguage();
			String languageIso = "en";
			if (null != language && StringUtils.isNotEmpty(language.getIsocode()))
			{
				languageIso = language.getIsocode();
			}
			myMailContext
					.setMessages(getEmailTemplateTranslationStrategy().translateMessagesForTemplate(templateModel, languageIso));

			LOG.info("Email sending conext");
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());

			//htmlEmail.embed(logo);

			htmlEmail.send();
			return true;
		}

		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				// YTODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return false;
	}

	/**
	 * @param enquiryTable
	 * @param enquiryType
	 */
	private String compareEmailType(final BHGEInquiryEmailModel enquiryTable, final String enquiryType)
	{
		String emailId = null;
		LOG.info("Comparing Email UI values for enquiryType : " + enquiryType);

		if (enquiryType.equalsIgnoreCase(Config.getParameter("government.user")))
		{
			emailId = enquiryTable.getGovernmentUser();
		}
		if (enquiryType.equalsIgnoreCase(Config.getParameter("callibration.repair")))
		{
			emailId = enquiryTable.getServiceReturnsInquiry();
		}
		if (enquiryType.equalsIgnoreCase(Config.getParameter("invoicing")))
		{
			emailId = enquiryTable.getInvoicingInquiry();
		}
		if (enquiryType.equalsIgnoreCase(Config.getParameter("shipping")))
		{
			emailId = enquiryTable.getShippingInquiry();
		}
		if (enquiryType.equalsIgnoreCase(Config.getParameter("quotes.orders.returns")))
		{
			emailId = enquiryTable.getQuoteOrderInquiry();
		}
		LOG.info("Email id for Order Inquiry : " + emailId);
		return emailId;
	}

	/**
	 * @param countryCP
	 * @return
	 */
	private BHGERegisterKeyValueDataModel fetchCountryData(final String countryCP)
	{
		return getBhgeEmailServiceDao().fetchLinkedRegion(countryCP);

	}



	/**
	 * @param string
	 * @return
	 */
	private BHGERegisterKeyValueDataModel fetchLinkedProductLine(final String productHeirarchy, final String inProductLine)
	{
		return getBhgeEmailServiceDao().fetchLinkedProductLine(productHeirarchy, inProductLine);

	}

	/**
	 * @param soldTo
	 * @return
	 */
	private boolean checkForGovtUser(final B2BUnitModel soldTo)
	{
		boolean govtUserFlag = false;
		final String govtUser = soldTo.getAccountGroup();
		if (govtUser != null && Config.getParameter("email.goverment.check").indexOf(govtUser) >= 0)
		{
			govtUserFlag = true;
		}

		return govtUserFlag;

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.mailmessages.services.BHGEEmailService#createAutoApprovalEmail(java.lang.String,
	 * java.lang.String, java.lang.String, java.lang.String, java.lang.String)
	 */
	@Override
	public boolean createAutoApprovalEmail(final String userAutoApprovalTemplate, final String subject, final String to,
			final String givenName, final String uid)
	{
		LOG.info("Inside createAutoApprovalEmail for userName: " + uid);
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(userAutoApprovalTemplate);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);

			}
			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			final LanguageModel language = commonI18NService.getCurrentLanguage();
			String languageIso = "en";
			if (null != language && StringUtils.isNotEmpty(language.getIsocode()))
			{
				languageIso = language.getIsocode();
			}
			myMailContext
					.setMessages(getEmailTemplateTranslationStrategy().translateMessagesForTemplate(templateModel, languageIso));

			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));

			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			myMailContext.setUserName(givenName);
			myMailContext.setSso(uid);
			myMailContext.setSupportMail(Config.getParameter("bhge.register.email.failure.technical"));

			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);

			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			htmlEmail.send();
			return true;

		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				LOG.error("Email sending failed ", e);
			}
		}
		return false;

	}

	@Override
	public boolean registerFailureScenario(final String emailTemplate, final String subject, final String emailTo,
			final String errorEntry, final List attribName, final List attribValue)
	{
		LOG.info("Inside registerFailureScenario");
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(emailTemplate);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = emailTo.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);

			}
			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));

			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}

			myMailContext.setAttribName(attribName);
			myMailContext.setAttribValue(attribValue);

			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);

			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));
			htmlEmail.send();
			return true;

		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				LOG.error("Email sending failed ", e);
			}
		}
		return false;

	}


	@Override
	public boolean registerFailureMailGeneric(final String emailTemplate, final String subject, final String emailTo,
			final String errorEntry, final String stackTraceMessage, final List attribName, final List attribValue)
	{
		LOG.info("Inside registerFailureScenario");
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(emailTemplate);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = emailTo.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);

			}
			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			myMailContext.setAttribName(attribName);
			myMailContext.setAttribValue(attribValue);
			myMailContext.setEscapUtils(StringEscapeUtils.class);
			myMailContext.setErrorMessage(errorEntry);
			myMailContext.setStackTraceMessage(stackTraceMessage);

			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);

			htmlEmail.setHtmlMsg(mailMessage.toString());

			htmlEmail.setFrom(Config.getParameter("register.fromMail"), Config.getParameter("register.fromMailName"));

			htmlEmail.send();
			return true;

		}
		catch (final EmailException ex)
		{
			LOG.info("Sending the email failed for Register Failure through EmailService File, exception: "+ ex);
			LOG.error("Error in Email for Failure Sceanrio", ex);
		}
		return false;

	}

	@Override
	public void createSavedCartExpiryEmail(final RendererTemplateModel templateModel, final String subject, final String to,
			final BHGESavedCartExpiryMailVO newGeEdgeSavedCartsDetails)
	{
		try
		{
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true")));
			htmlEmail.setSubject(subject);

			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			else
			{
				final StringWriter mailMessage = new StringWriter();
				String[] emails;
				final String delimiter = ",";
				emails = to.split(delimiter);
				for (int i = 0; i < emails.length; i++)
				{
					final String email = emails[0];
					MailUtils.validateEmailAddress(email, "TO");
					htmlEmail.addTo(email);
				}

				final BHGESavedCartExpiryMailContext myMailContext = new BHGESavedCartExpiryMailContext();
				myMailContext.setGeEdgeSavedCartsDetails(newGeEdgeSavedCartsDetails);

				bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);

				htmlEmail.setHtmlMsg(mailMessage.toString());

				//htmlEmail.embed(logo);

				htmlEmail.send();
				LOG.debug("Saved Cart Email sent successfully");
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error sending saved cart expiry mail", e);
		}

	}


	@Override
	public void activeUsersReportEmail(final RendererTemplateModel templateModel, final String subject, final String to,
			final File activeUsersExcel)
	{
		// YTODO Auto-generated method stub
		try
		{
			LOG.info("START - Send Active Users Report Email Notification");
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();

			if (templateModel == null)
			{
				throw new EmailException("Active Users Report Email Template Not found");
			}
			else
			{
				final StringWriter mailMessage = new StringWriter();
				String[] emails;
				final String delimiter = ",";
				htmlEmail.setCharset("UTF-8");
				emails = to.split(delimiter);
				for (int i = 0; i < emails.length; i++)
				{
					final String email = emails[i];
					MailUtils.validateEmailAddress(email, "TO");
					htmlEmail.addTo(email);
				}
				final String environment = Config.getParameter("current.env");
				if (StringUtils.isNotBlank(environment))
				{
					htmlEmail.setSubject(subject + "-" + environment);
				}
				else
				{
					htmlEmail.setSubject(subject);
				}
				final BHGEActiveUsersEmailContext mailContext = new BHGEActiveUsersEmailContext();
				mailContext.setReceipientEmailList(emails);

				mailContext.setSecureBaseUrl(getSiteBaseUrlResolutionService()
						.getWebsiteUrlForSite(getBaseSiteService().getBaseSiteForUID("bhge"), false, ""));

				mailContext.setMediaBaseUrl(
						getSiteBaseUrlResolutionService().getMediaUrlForSite(getBaseSiteService().getBaseSiteForUID("bhge"), false));


				bhgeVelocityTemplateRenderer.render(templateModel, mailContext, mailMessage, Locale.ENGLISH);
				htmlEmail.setHtmlMsg(mailMessage.toString());
				htmlEmail.embed(activeUsersExcel);
				htmlEmail.send();

				LOG.info("END - Send Active Users Report Email Notification");
			}
		}
		catch (final Exception e)
		{
			LOG.error("Email sending failed" + e);
			return;
		}

	}

	@Override
	public boolean loadReactiveMail(final String temlateCode, final String subject, final String to, final String userName,
			final String url, final String resendUrl, final String supportMail, final String companyEmail, final String sso)
	{
		LOG.info("Inside createVerificationEmail for userName: " + userName);
		try
		{

			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);

			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}

			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();

			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);

			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}
			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			final LanguageModel language = commonI18NService.getCurrentLanguage();
			String languageIso = "en";
			Locale currentLocale = new Locale("en");
			if (null != language && StringUtils.isNotEmpty(language.getIsocode()))
			{
				languageIso = language.getIsocode();
				currentLocale = commonI18NService.getLocaleForLanguage(language);
			}
			LOG.info("Language has been set to " + languageIso + " for LoadReactiveMail");
			myMailContext
					.setMessages(getEmailTemplateTranslationStrategy().translateMessagesForTemplate(templateModel, languageIso));

			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			myMailContext.setUserName(StringEscapeUtils.escapeHtml4(userName));
			myMailContext.setEscapUtils(StringEscapeUtils.class);
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			myMailContext.setUrl(url);
			myMailContext.setResendUrl(resendUrl);
			myMailContext.setCompanyEmail(companyEmail);
			myMailContext.setSupportMail(supportMail);
			myMailContext.setSso(sso);
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, currentLocale);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.send();
			return true;
		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				LOG.error("Email sending failed ", e);
			}
		}
		return false;

	}

	@Override
	public boolean managetDetailsMail(final String temlateCode, final String subject, final String to, final String userName,
			final String managerId, final String managerName, final String managerEmailId, final String supportMail)
	{
		LOG.info("Inside managetDetailsMail for userName: " + userName);
		try
		{

			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(temlateCode);

			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}

			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();

			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = to.split(delimiter);

			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}
			final BHGERegisterEmailContext myMailContext = new BHGERegisterEmailContext();
			myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			myMailContext.setUserName(userName);
			myMailContext.setManagerId(managerId);
			myMailContext.setManagerName(managerName);
			myMailContext.setManagerEmailId(managerEmailId);
			myMailContext.setSupportMail(supportMail);
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.send();
			return true;
		}
		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				LOG.error("Email sending failed ", e);
			}
		}
		return false;
	}


	public void sendMailForPendingActivationUsers(final File file, final String subject, final String to)
	{
		try
		{
			final RendererTemplateModel templateModel = rendererService
					.getRendererTemplateForCode("BHGEPendingActivationUsersMailTemplate");

			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true")));
			htmlEmail.setSubject(subject);
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}


			final StringWriter mailMessage = new StringWriter();

			final BHGEPendingActivationUsersMailContext mailContext = new BHGEPendingActivationUsersMailContext();
			/*
			 * mailContext.setMediaBaseUrl(
			 * getSiteBaseUrlResolutionService().getMediaUrlForSite(getBaseSiteService().getCurrentBaseSite(), false));
			 */
			mailContext.setMediaBaseUrl(Config.getParameter("bhge.email.resource"));
			bhgeVelocityTemplateRenderer.render(templateModel, mailContext, mailMessage, Locale.ENGLISH);

			final String delimiter = ",";
			final String[] emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				//MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}

			//htmlEmail.addTo(to);
			htmlEmail.embed(file);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.send();
			LOG.info("*** Pending Activation Users Report has sent successfully ***");
		}
		catch (final Exception e)
		{
			LOG.error("Error in sending Pending Activation Users report mail", e);
		}

	}

	public void sendMailForInactiveUser(final File file, final String subject, final String to, final int inactiveUserCount,
			final int disabledUserCount)
	{
		try
		{
			LOG.info("inside sendMailForInactiveUser method");
			final RendererTemplateModel templateModel = rendererService
					.getRendererTemplateForCode("BHGEInactiveUserListMailTemplate");

			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true")));
			htmlEmail.setSubject(subject);
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}


			final StringWriter mailMessage = new StringWriter();

			final BHGEInactiveUsersMailContext mailContext = new BHGEInactiveUsersMailContext();
			/*
			 * mailContext.setMediaBaseUrl(
			 * getSiteBaseUrlResolutionService().getMediaUrlForSite(getBaseSiteService().getCurrentBaseSite(), false));
			 */
			mailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url"));
			mailContext.setDisabledUserCount(disabledUserCount);
			mailContext.setInactiveUserCount(inactiveUserCount);
			bhgeVelocityTemplateRenderer.render(templateModel, mailContext, mailMessage, Locale.ENGLISH);

			final String delimiter = ",";
			final String[] emails = to.split(delimiter);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				//MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}

			//htmlEmail.addTo(to);
			htmlEmail.embed(file);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.send();
			LOG.info("*** Inactive Users Report has sent successfully ***");
		}
		catch (final Exception e)
		{
			LOG.error("Error in sending Inactive Users report mail", e);
		}

	}

	protected EmailTemplateTranslationStrategy getEmailTemplateTranslationStrategy()
	{
		return emailTemplateTranslationStrategy;
	}


	public void setEmailTemplateTranslationStrategy(final EmailTemplateTranslationStrategy emailTemplateTranslationStrategy)
	{
		this.emailTemplateTranslationStrategy = emailTemplateTranslationStrategy;
	}

	//Migration changes start
	/**
	 * Gets Top Banner Image from Blob
	 * @return File
	 */
	private File getTopBannerImage(){
		final String containerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME);
		final String fileNameTobeRead=configurationService.getConfiguration().getString(BLOB_FILE_NAME_TO_BE_READ);
		File file=bhgeBlobDataImportService.readFromBlob(fileNameTobeRead,".png",containerName);
		return file;
	}
	//Migration changes end
    
	public void orderStatusNotificationEmail(final RendererTemplateModel templateModel, final String subject,
			final String to, final OrderModel order) {
		LOG.debug("Sending email to customer support for unprocessed order " + order.getCode());
		try {
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true")));
			htmlEmail.setSubject(subject);
			if (templateModel == null) {
				throw new EmailException("Email Template Not found");
			} else {
				final StringWriter mailMessage = new StringWriter();
				String[] emails;
				final String delimiter = ",";
				emails = to.split(delimiter);
				for (int i = 0; i < emails.length; i++) {
					final String email = emails[i];
					htmlEmail.addTo(email);
				}
				String email = StringUtils.EMPTY;
				if (order.getUser() instanceof CustomerModel && ((CustomerModel) order.getUser()).getType() != null
						&& CustomerType.GUEST.getCode().equals(((CustomerModel) order.getUser()).getType().getCode())) {
					final UserModel customer = userDao.findUserByUID(order.getUser().getUid());
					email = ((CustomerModel) customer).getContactEmail();
				} else {
					email = userProfileService.findCurrentUserProfile(order.getUser().getUid()).getEmail();
				}
				final BHGECriticalErrorEmailContext myMailContext = new BHGECriticalErrorEmailContext();
				myMailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url.api"));
				myMailContext.setSubject(subject);
				LOG.info("Email to subject is " + subject);
				if ((order.getSoldToForCart()) != null) {
					myMailContext.setEmailSoldTo(order.getSoldToForCart().getUid());
				}
				LOG.info("Email to setEmailSoldTo is " + order.getSoldToForCart().getUid());
				myMailContext.setErrorDesc(ORDER_STATUS_ERROR_DESCRIPTION);
				myMailContext.setOrderId(order.getCode());
				LOG.info("Email to order id is " + order.getCode());
				myMailContext.setUserEmail(email);
				LOG.info("Email to user email id is " + email);
				myMailContext.setErrorTime(order.getCreationtime().toString());
				myMailContext.setCartType(order.getCartType());
				if ((order.getCommerceType()) != null) {
					myMailContext.setCommerceType(order.getCommerceType());
				}
				myMailContext.setUserSSO(order.getUser().getUid());
				bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
				htmlEmail.setHtmlMsg(mailMessage.toString());
				try {
					final File img = getTopBannerImage();
					final FileDataSource fds = new FileDataSource(img);
					final String cid = htmlEmail.embed(fds, "cidForHomeImage", "cidForHomeImage");
				} catch (final Exception e) {
					LOG.error("Error while embedding file in Mail", e);
				}
				htmlEmail.send();
			}
		} catch (final Exception e) {
			LOG.error("Email to support team Failed for order in uprocessed status" + e);
			return;
		}
	}

    public void orderUpdateNotificationEmail(final RendererTemplateModel templateModel, final String subject, final String to,
                                             final List<BHGEOrderUpdateEmailNotificationData> orderUpdateEmailList, final String customerName){
        LOG.debug("US552962 : inside BHGEEMailService - Sending Updateemail to " + to);

        try {
            final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
            htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true")));
            htmlEmail.setSubject(subject);

            if (templateModel == null) {
                throw new EmailException("US552962: Email Template Not found");
            } else {
                LOG.debug("US552962 : EmailTemplateFound");

                final StringWriter mailMessage = new StringWriter();

//                String[] emails;
//                final String delimiter = ",";
//                emails = to.split(delimiter);
//                for (int i = 0; i < emails.length; i++) {
//                    final String email = emails[i];
//                    htmlEmail.addTo(email);
//                }
                String unitTestmode = configurationService.getConfiguration().getString("bhge.order.update.notification.unittestmode");
                String unitTestmail = configurationService.getConfiguration().getString("bhge.order.update.notiifcation.unittestemail");
                if(unitTestmode.equalsIgnoreCase("A")){
                    LOG.debug("US552962 : UnitTestMode Sending mail to :" + unitTestmail);
                    htmlEmail.addTo(unitTestmail);
                }
                else{
                    LOG.debug("US552962 : Not in UnitTestMode Sending mail to :" + unitTestmail);
                    htmlEmail.addTo(to);
                }


                final BHGEOrderUpdateMailContext myMailContext = new BHGEOrderUpdateMailContext();
                myMailContext.setMediaBaseUrl(Config.getParameter("bhge.store.base.url.api"));
                myMailContext.setSubject(subject);
                myMailContext.setCustomerName(customerName);
                myMailContext.setOrderUpdateEmailNotificatonList(orderUpdateEmailList);
                boolean hasHeaderUpdate = orderUpdateEmailList.stream().anyMatch(item->"HEADER".equalsIgnoreCase(item.getItemNo()));
                boolean hasItemUpdate = orderUpdateEmailList.stream().anyMatch(item->!"HEADER".equalsIgnoreCase(item.getItemNo()));
                LOG.info("US552962 :hasItemUpdate:" +hasHeaderUpdate);
                LOG.info("US552962 :hasItemUpdate:" +hasItemUpdate);
                myMailContext.setHeaderUpdate(hasHeaderUpdate);
                myMailContext.setItemUpdate(hasItemUpdate);
				myMailContext.setJsUrl(Config.getParameter("bhge.jsapps.ecommerce.url"));
				LOG.info("US552962 :Js Url is " + myMailContext.getJsUrl());
                LOG.info("Email to subject is " + subject);
                bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
                htmlEmail.setHtmlMsg(mailMessage.toString());
                try {
                    final File img = getTopBannerImage();
                    final FileDataSource fds = new FileDataSource(img);
                    final String cid = htmlEmail.embed(fds, "cidForHomeImage", "cidForHomeImage");
                } catch (final Exception e) {
                    LOG.error("US552962 : Error while embedding file in Mail", e);
                }
                htmlEmail.send();
            }
        }catch (final Exception e) {
            LOG.error("US552962 : Update Email to Customer Failed" + e);
            return;
        }

    }
	
}
