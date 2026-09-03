/**
 *
 */
package com.bhge.facades.mailmessages.impl;

import de.hybris.platform.acceleratorservices.email.impl.DefaultEmailService;
import de.hybris.platform.acceleratorservices.model.email.EmailAddressModel;
import de.hybris.platform.acceleratorservices.model.email.EmailMessageModel;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.servicelayer.internal.service.ServicelayerUtils;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.task.RetryLaterException;
import de.hybris.platform.task.TaskModel;
import de.hybris.platform.task.TaskRunner;
import de.hybris.platform.task.TaskService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.mail.MailUtils;

import java.io.StringWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.mail2.core.EmailException;
import org.apache.commons.mail2.jakarta.HtmlEmail;
import org.apache.log4j.Logger;

import com.bhge.commons.renderer.BHGEVelocityTemplateRenderer;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.mailmessages.context.BHGEExceptionEmailContext;
import com.bhge.core.mailmessages.context.BHGERegisterEmailContext;
import com.bhge.core.mailmessages.services.impl.DefaultBHGEEmailService;
import com.bhge.facades.data.BhgeExceptionData;


/**
 * @author riyan
 *
 */
public class BHGEExceptionMailerTask implements TaskRunner<TaskModel>
{
	private SessionService sessionService;

	private ModelService modelService;

	private DefaultEmailService emailService;

	private UserService userService;

	@Resource(name = "rendererService")
	private RendererService rendererService;

	@Resource(name = "bhgeVelocityTemplateRenderer")
	private BHGEVelocityTemplateRenderer bhgeVelocityTemplateRenderer;



	private static final String EXCEPTION_EMAIL_TEMPLATE = "ExceptionEmailTemplate";

	private static final Logger LOG = Logger.getLogger(BHGEExceptionMailerTask.class);

	public void run(final TaskService taskService, final TaskModel task) throws RetryLaterException
	{


		LOG.info("Inside BHGEExceptionMailerTask - " + EXCEPTION_EMAIL_TEMPLATE);
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(EXCEPTION_EMAIL_TEMPLATE);
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			final String toEmailIDList = Config.getParameter(BhgeCoreConstants.DEFAULT_SUPPORT_EMAIL);
			final String fromEmail = Config.getParameter(BhgeCoreConstants.EXCEPTIONMAIL);
			emails = toEmailIDList.trim().split(BhgeCoreConstants.SEMI_COLON);
			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}
			final BHGEExceptionEmailContext myMailContext = new BHGEExceptionEmailContext();
			final BhgeExceptionData userData = (BhgeExceptionData) task.getContext();


			//Check for Exception text restriction
			String exceptionMessage = "";
			final String emailfromAddress = userData.getExceptionFromAddress();
			if (userData.getExceptionString() != null && !userData.getExceptionString().isEmpty()
					&& userData.getExceptionString().length() > 2500)
			{
				exceptionMessage = userData.getExceptionString().substring(0, 2500);
			}
			else
			{
				exceptionMessage = userData.getExceptionString();
			}

			String customerName = "NA";
			String customerNumber = "NA";
			String customerEmail = "NA";

			if (null != userData.getCustomer() && null != userData.getCustomer().getUnit())
			{
				customerNumber = userData.getCustomer().getUnit().getUid();
				customerName = userData.getCustomer().getUnit().getName();

			}
			if (null != userData.getCustomer() && StringUtils.isNotEmpty(userData.getCustomer().getEmail()))
			{

				customerEmail = userData.getCustomer().getEmail();
			}


			myMailContext.setUrl(userData.getRequestUrl());
			myMailContext.setNodeId(userData.getNodeId());
			myMailContext.setExceptionTime(userData.getExceptionTime());
			myMailContext.setCustomerNumber(customerNumber);
			myMailContext.setCustomerName(customerName);
			myMailContext.setBrowser(userData.getBrowser());
			myMailContext.setSiteLanguage(userData.getSiteLanguage());
			myMailContext.setExceptionMessage(exceptionMessage);
			myMailContext.setMediaBaseUrl(Config.getParameter("bhge.email.resource"));
			myMailContext.setEmail(customerEmail);
			myMailContext.setEnvironment(userData.getEnvironment());
			myMailContext.setSso(userData.getCustomer().getUid());
			myMailContext.setUserName(userData.getCustomer().getFirstName() + " " + userData.getCustomer().getLastName());
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setSubject(userData.getCustomer().getUid() + "," + userData.getCustomer().getFirstName() + ", "
					+ userData.getCustomer().getLastName() + ": Exception occured in Baker Hughes DSS Portal");
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.setFrom(fromEmail, emailfromAddress);
			htmlEmail.send();

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

	}

	/**
	 * @return the sessionService
	 */
	public SessionService getSessionService()
	{
		return sessionService;
	}

	/**
	 * @param sessionService
	 *           the sessionService to set
	 */
	public void setSessionService(final SessionService sessionService)
	{
		this.sessionService = sessionService;
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
	 * @return the emailService
	 */
	public DefaultEmailService getEmailService()
	{
		return emailService;
	}

	/**
	 * @param emailService
	 *           the emailService to set
	 */
	public void setEmailService(final DefaultEmailService emailService)
	{
		this.emailService = emailService;
	}

	/**
	 * @return the userService
	 */
	public UserService getUserService()
	{
		return userService;
	}

	/**
	 * @param userService
	 *           the userService to set
	 */
	public void setUserService(final UserService userService)
	{
		this.userService = userService;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.task.TaskRunner#handleError(de.hybris.platform.task.TaskService,
	 * de.hybris.platform.task.TaskModel, java.lang.Throwable)
	 */
	@Override
	public void handleError(final TaskService arg0, final TaskModel arg1, final Throwable arg2)
	{
		// YTODO Auto-generated method stub

	}

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
	 * @return the bhgeVelocityTemplateRenderer
	 */
	public BHGEVelocityTemplateRenderer getBhgeVelocityTemplateRenderer()
	{
		return bhgeVelocityTemplateRenderer;
	}

	/**
	 * @param bhgeVelocityTemplateRenderer
	 *           the bhgeVelocityTemplateRenderer to set
	 */
	public void setBhgeVelocityTemplateRenderer(final BHGEVelocityTemplateRenderer bhgeVelocityTemplateRenderer)
	{
		this.bhgeVelocityTemplateRenderer = bhgeVelocityTemplateRenderer;
	}
}
