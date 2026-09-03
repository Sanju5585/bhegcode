package com.bhge.integration.order.history.error.service.impl;

import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.apache.log4j.Logger;

import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.integration.order.history.error.service.BHGEOrderHistoryErrorService;


public class BHGEOrderHistoryErrorServiceImpl implements BHGEOrderHistoryErrorService
{

	private static final Logger LOG = Logger.getLogger(BHGEOrderHistoryErrorServiceImpl.class);


	private ModelService modelService;
	private RendererService rendererService;
	private UserService userService;
	private BHGEEmailService bhgeEmailService;

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

	public UserService getUserService()
	{
		return userService;
	}

	public void setUserService(final UserService userService)
	{
		this.userService = userService;
	}

	ModelService getModelService()
	{
		return modelService;
	}


	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}


	public RendererService getRendererService()
	{
		return rendererService;
	}


	public void setRendererService(final RendererService rendererService)
	{
		this.rendererService = rendererService;
	}


	/*
	 *
	 * @Override public boolean handleCriticalError(String soldToId,String orderType) { try{ BHGERfcCallErrorModel model
	 * = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
	 *
	 * DateFormat df = new SimpleDateFormat("dd-MMM-yy hh:mm a"); // Get the date today using Calendar object. Date today
	 * = Calendar.getInstance().getTime(); // Using DateFormat format method we can create a string String reportDate =
	 * df.format(today);
	 *
	 * GEEdgeCustomerModel geEdgeCustomerModel= (GEEdgeCustomerModel) getUserService().getCurrentUser(); // String
	 * SoldToId=orderModel.getSoldToForCart().getUid(); model.setErrorCode("E");
	 * model.setErrorDesc("CRITICAL ERROR ENCOUNTERED IN ORDER HISTORY WEBSERVICE");
	 * model.setCurrentUserEmail(geEdgeCustomerModel.getEmail()); model.setCurrentSoldToId(soldToId);
	 * model.setErrorTime(reportDate); modelService.save(model);
	 *
	 * //SENDING EMAIL FOR CRITICAL ERROR
	 *
	 * final String templateCodeCriticalError = "CriticalErrorMailTemplate"; final String
	 * subject=Config.getParameter("ORDER_SUBMIT_SUBJECT"); final String
	 * to=Config.getParameter("ORDER_SUBMITION_TO_ADDRESS"); //sendEmail(templateCodeCriticalError,subject,
	 * to,model,soldToId); } catch(Exception ex) { // we are catching all the exception while sending the mail
	 * LOG.error("Error has occured while sendingg the critical error mail",ex); } return false; }
	 */
	@Override
	public boolean handleNonCriticalError(final String soldToId, final String orderType, final String Errmsg)
	{

		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
		LOG.info("Inside Order Tracking Error Mail - " + getUserService().getCurrentUser().getUid());
		final DateFormat df1 = new SimpleDateFormat("dd-MMM-yy hh:mm a");
		// Get the date today using Calendar object.
		final Date today1 = Calendar.getInstance().getTime();
		// Using DateFormat format method we can create a string
		final String reportDate1 = df1.format(today1);
		if (getUserService().getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			final GEEdgeCustomerModel geEdgeCustomerModel = (GEEdgeCustomerModel) getUserService().getCurrentUser();
			model.setErrorCode("WebServiceException");
			model.setErrorDescription(Errmsg + "with OrderType" + orderType);
			model.setErrorType("Order History Web Services");
			model.setCurrentUserEmail(geEdgeCustomerModel.getEmail());
			model.setCurrentSoldToId(soldToId);
			model.setErrorTime(reportDate1);
			model.setStatus(Boolean.FALSE);
			final boolean flag = Boolean.parseBoolean(Config.getParameter("geedge.support.mail.flag"));
			final String templateCodeCriticalError = "bhgeRFCFailureMailTemplate";
			final String subject = Config.getString("ORDER_HISTORY_SUBJECT", "EdgeNet Critical Error Alert - Order History");
			final String to = Config.getString("ORDER_HISTORY_TO_ADDRESS", "");
			final String errorCode = model.getErrorCode();
			if (flag)
			{
				LOG.info("Inside Order Tracking Error Mail - Triggering Mail" + getUserService().getCurrentUser().getUid());
				sendEmail(templateCodeCriticalError, subject, to, model, errorCode, getUserService().getCurrentUser().getUid());
			}
			modelService.save(model);
		}
		return true;
	}











	/*
	 * This method will be moved to Util class after the bean issue related to order submission is fixed.
	 */
	public void sendEmail(final String templateCode, final String subject, final String to, final BHGERfcCallErrorModel model,
			final String errorCode, final String userSSO)
	{

		final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(templateCode);

		bhgeEmailService.orderHistoryFailureEmail(templateModel, subject, to, model, errorCode,userSSO);
	}

	@Override
	public boolean handleNonCriticalErrorForRMA(final String soldToId, final String orderType, final String Errmsg)
	{
		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
		LOG.info("Inside RMA Tracking Error Mail - " + getUserService().getCurrentUser().getUid());
		final DateFormat df1 = new SimpleDateFormat("dd-MMM-yy hh:mm a");
		// Get the date today using Calendar object.
		final Date today1 = Calendar.getInstance().getTime();
		// Using DateFormat format method we can create a string
		final String reportDate1 = df1.format(today1);
		if (getUserService().getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			final GEEdgeCustomerModel geEdgeCustomerModel = (GEEdgeCustomerModel) getUserService().getCurrentUser();
			model.setErrorCode("WebServiceException");
			model.setErrorDescription(Errmsg + "with OrderType" + orderType);
			model.setErrorType("RMA STATUS Web Services");
			model.setCurrentUserEmail(geEdgeCustomerModel.getEmail());
			model.setCurrentSoldToId(soldToId);
			model.setErrorTime(reportDate1);
			model.setStatus(Boolean.FALSE);
			final boolean flag = Boolean.parseBoolean(Config.getParameter("geedge.support.mail.flag"));
			final String templateCodeCriticalError = "bhgeRFCFailureMailTemplate";
			String subject = Config.getString("RMA_STATUS_SUBJECT", "EdgeNet Critical Error Alert - RMA Status");
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				subject = Config.getString("RMA_STATUS_SUBJECT_PROD", "EdgeNet Critical Error Alert - RMA Status");
			}
			else if (Config.getParameter("current.env").equalsIgnoreCase("QA"))
			{
				subject = Config.getString("RMA_STATUS_SUBJECT_QA", "EdgeNet Critical Error Alert - RMA Status");
			}
			else
			{
				subject = Config.getString("RMA_STATUS_SUBJECT_STAGE", "EdgeNet Critical Error Alert - RMA Status");
			}




			final String to = Config.getString("RMA_STATUS_TO_ADDRESS", "");
			final String errorCode = model.getErrorCode();
			if (flag)
			{
				LOG.info("Inside RMA Tracking Error Mail - Triggering Mail" + getUserService().getCurrentUser().getUid());
				sendEmail(templateCodeCriticalError, subject, to, model, errorCode,getUserService().getCurrentUser().getUid());
			}
			modelService.save(model);
		}
		return true;
	}
}
