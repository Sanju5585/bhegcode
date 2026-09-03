package com.bhge.facades.mailmessages.impl;

import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.user.UserFacade;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.internal.service.ServicelayerUtils;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.task.TaskModel;
import de.hybris.platform.task.TaskService;
import de.hybris.platform.util.Config;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.SimpleMappingExceptionResolver;

import com.bhge.facades.data.BhgeExceptionData;


public class BHGECustomSimpleMappingExceptionResolver extends SimpleMappingExceptionResolver
{
	private static final Logger LOGGER = Logger.getLogger(BHGECustomSimpleMappingExceptionResolver.class);

	@Resource(name = "b2bCustomerFacade")
	protected CustomerFacade customerFacade;

	@Resource(name = "userFacade")
	protected UserFacade userFacade;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;

	/**
	 *
	 */
	public BHGECustomSimpleMappingExceptionResolver()
	{
		super();
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see org.springframework.web.servlet.handler.AbstractHandlerExceptionResolver#resolveException(javax.servlet.http.
	 * HttpServletRequest, javax.servlet.http.HttpServletResponse, java.lang.Object, java.lang.Exception)
	 */
	@Override
	public ModelAndView resolveException(final HttpServletRequest request, final HttpServletResponse response,
			final Object handler, final Exception ex)
	{
		LOGGER.error("******************** UNCAUGHT EXCEPTION DETAILS START HERE************************");
		final String stackTrace = getStackTrace(ex);
		LOGGER.error("******************** UNCAUGHT EXCEPTION DETAILS ENDS HERE************************");


		final boolean flag = Boolean.parseBoolean(Config.getParameter("geedge.support.mail.flag"));

		final BhgeExceptionData geEdgeExceptionData = new BhgeExceptionData();
		if (flag && (stackTrace.indexOf("GZIPResponseStream.flush") == -1
				&& stackTrace.indexOf("No page with id [notFound] found") == -1))
		{
			final ModelService modelService = (ModelService) ServicelayerUtils.getApplicationContext().getBean("modelService");
			final TaskService taskService = (TaskService) ServicelayerUtils.getApplicationContext().getBean("taskService");
			final TaskModel task = modelService.create(TaskModel.class);
			final DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss zzz");
			final Calendar cal = Calendar.getInstance();
			final CustomerData customerData = customerFacade.getCurrentCustomer();
			final String currentRequestUrl = StringEscapeUtils.escapeHtml4(request.getRequestURL().toString());
			final LanguageModel language = commonI18NService.getCurrentLanguage();


			if (customerData != null)
			{
				geEdgeExceptionData.setCustomer(customerData);
			}
			try
			{
				getBrowserDetails(request, geEdgeExceptionData);

			}
			catch (final Exception ex1)
			{
				geEdgeExceptionData.setBrowser("While retrieving browser details exception occured");
				LOGGER.error("While retrieving browser details exception occured" + ex1);

			}
			if (null != language)
			{
				geEdgeExceptionData.setSiteLanguage(language.getName());
			}
			else
			{
				geEdgeExceptionData.setSiteLanguage("");
			}

			geEdgeExceptionData.setRequestUrl(currentRequestUrl);
			geEdgeExceptionData.setExceptionTime(dateFormat.format(cal.getTime()));
			task.setContext(geEdgeExceptionData);

			final String subject = Config.getParameter("bhgefacades.exception.email.fromAddress");
			final String environment = Config.getParameter("currentEnv");
			geEdgeExceptionData.setEnvironment(environment);

			if (environment.equalsIgnoreCase("STAGED") || environment.equalsIgnoreCase("PROD"))
			{
				final String node = Config.getParameter("nodeId");
				geEdgeExceptionData.setNodeId(node);
				geEdgeExceptionData.setExceptionFromAddress(subject + " " + environment + " Node(" + node + ") ");
			}
			else
			{
				geEdgeExceptionData.setNodeId("NA");
				geEdgeExceptionData.setExceptionFromAddress(subject + " " + environment);
			}
			geEdgeExceptionData.setExceptionString(stackTrace.toString());
			// the action bean name
			task.setRunnerBean("bhgeExceptionMailerTask");
			// the execution time - here asap
			task.setExecutionDate(new Date());
			modelService.save(task);
			LOGGER.info("Exception From Address is " + geEdgeExceptionData.getExceptionFromAddress());
			taskService.scheduleTask(task);
		}
		return super.resolveException(request, response, handler, ex);
	}

	private void getBrowserDetails(final HttpServletRequest request, final BhgeExceptionData geEdgeExceptionData) throws Exception
	{
		// XXX Auto-generated method stub
		final String browserDetails = request.getHeader("User-Agent");
		final String userAgent = browserDetails;
		final String user = browserDetails.toLowerCase();

		String browser = "";

		LOGGER.info("User Agent for the request is===>" + browserDetails);
		//===============Browser===========================
		if (user.contains("msie"))
		{
			final String substring = userAgent.substring(userAgent.indexOf("MSIE")).split(";")[0];
			browser = substring.split(" ")[0].replace("MSIE", "IE") + "-" + substring.split(" ")[1];
		}
		else if (user.contains("edge/"))
		{

			//browser = userAgent.substring(userAgent.indexOf("Edge"));
			browser = userAgent.substring(userAgent.indexOf("edge")).split("/")[1];

		}
		else if (user.contains("safari") && user.contains("version"))
		{
			browser = (userAgent.substring(userAgent.indexOf("Safari")).split(" ")[0]).split("/")[0] + "-"
					+ (userAgent.substring(userAgent.indexOf("Version")).split(" ")[0]).split("/")[1];
		}
		else if (user.contains("opr") || user.contains("opera"))
		{
			if (user.contains("opera"))
			{
				browser = (userAgent.substring(userAgent.indexOf("Opera")).split(" ")[0]).split("/")[0] + "-"
						+ (userAgent.substring(userAgent.indexOf("Version")).split(" ")[0]).split("/")[1];
			}
			else if (user.contains("opr"))
			{
				browser = ((userAgent.substring(userAgent.indexOf("OPR")).split(" ")[0]).replace("/", "-")).replace("OPR", "Opera");
			}
		}
		else if (user.contains("chrome"))
		{
			browser = (userAgent.substring(userAgent.indexOf("Chrome")).split(" ")[0]).replace("/", "-");
		}
		else if ((user.indexOf("mozilla/7.0") > -1) || (user.indexOf("netscape6") != -1) || (user.indexOf("mozilla/4.7") != -1)
				|| (user.indexOf("mozilla/4.78") != -1) || (user.indexOf("mozilla/4.08") != -1) || (user.indexOf("mozilla/3") != -1))
		{
			browser = "Netscape-?";

		}
		else if (user.contains("firefox"))
		{
			browser = (userAgent.substring(userAgent.indexOf("Firefox")).split(" ")[0]).replace("/", "-");
		}
		else if (user.contains("rv"))
		{
			browser = "IE-" + user.substring(user.indexOf("rv") + 3, user.indexOf(")"));
		}

		else
		{
			browser = "UnKnown, More-Info: " + userAgent;
		}
		geEdgeExceptionData.setBrowser(browser);
	}

	/**
	 * @param t
	 *           , Throwable
	 * @return String of the exception
	 */
	public String getStackTrace(final Throwable throwable)
	{
		final StringWriter stringWritter = new StringWriter();
		final PrintWriter printWritter = new PrintWriter(stringWritter, true);
		throwable.printStackTrace(printWritter);
		LOGGER.error("getstacktrace:" + ExceptionUtils.getStackTrace(throwable));
		printWritter.flush();
		stringWritter.flush();
		return stringWritter.toString();
	}
}
