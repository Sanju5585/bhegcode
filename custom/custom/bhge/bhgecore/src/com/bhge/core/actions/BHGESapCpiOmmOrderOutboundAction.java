package com.bhge.core.actions;

import static de.hybris.platform.sap.sapcpiadapter.service.SapCpiOutboundService.RESPONSE_MESSAGE;
import static de.hybris.platform.sap.sapcpiadapter.service.SapCpiOutboundService.getPropertyValue;
import static de.hybris.platform.sap.sapcpiadapter.service.SapCpiOutboundService.isSentSuccessfully;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.user.service.BHGEUserProfileService;

import de.hybris.platform.commerceservices.enums.CustomerType;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.enums.ExportStatus;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.orderprocessing.model.OrderProcessModel;
import de.hybris.platform.sap.orderexchange.constants.SapOrderExchangeActionConstants;
import de.hybris.platform.sap.sapcpiorderexchange.actions.SapCpiOmmOrderOutboundAction;
import de.hybris.platform.servicelayer.user.daos.UserDao;
import de.hybris.platform.task.RetryLaterException;
import de.hybris.platform.util.Config;

public class BHGESapCpiOmmOrderOutboundAction extends SapCpiOmmOrderOutboundAction {

	private static final Logger LOG = Logger.getLogger(BHGESapCpiOmmOrderOutboundAction.class);

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	@Resource(name = "rendererService")
	private RendererService rendererService;

	@Resource(name = "userDao")
	private UserDao userDao;

	@Override
	public void executeAction(OrderProcessModel process) throws RetryLaterException {

		final OrderModel order = process.getOrder();

		getSapCpiOutboundService().sendOrder(getSapCpiOrderOutboundConversionService().convertOrderToSapCpiOrder(order))
				.subscribe(

						// onNext
						responseEntityMap -> {

							if (isSentSuccessfully(responseEntityMap)) {

								setOrderStatus(order, ExportStatus.EXPORTED);
								resetEndMessage(process);
								LOG.info(String.format(
										"The OMM order [%s] has been successfully sent to the SAP backend through SCPI! %n%s",
										order.getCode(), getPropertyValue(responseEntityMap, RESPONSE_MESSAGE)));

							} else {

								setOrderStatus(order, ExportStatus.NOTEXPORTED);
								LOG.error(String.format("The OMM order [%s] has not been sent to the SAP backend! %n%s",
										order.getCode(), getPropertyValue(responseEntityMap, RESPONSE_MESSAGE)));

							}

							final String eventName = new StringBuilder()
									.append(SapOrderExchangeActionConstants.ERP_ORDER_SEND_COMPLETION_EVENT)
									.append(order.getCode()).toString();
							getBusinessProcessService().triggerEvent(eventName);

						}

						// onError
						, error -> {

							setOrderStatus(order, ExportStatus.NOTEXPORTED);
							String errorMessage = String.format("The OMM order [%s] has not been sent to the SAP backend through SCPI! %n%s",
									order.getCode(), error.getMessage());
							LOG.error(errorMessage, error);

							final String eventName = new StringBuilder()
									.append(SapOrderExchangeActionConstants.ERP_ORDER_SEND_COMPLETION_EVENT)
									.append(order.getCode()).toString();
							getBusinessProcessService().triggerEvent(eventName);
							handleSAPException(order, errorMessage);

						}

				);

	}

	private void handleSAPException(final OrderModel order, final String message) {
		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
		final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
		// Get the date today using Calendar object.
		final Date today = Calendar.getInstance().getTime();
		final String reportDate = df.format(today);
		String email = StringUtils.EMPTY;
		if (order.getUser() instanceof CustomerModel && ((CustomerModel) order.getUser()).getType() != null
				&& CustomerType.GUEST.getCode().equals(((CustomerModel) order.getUser()).getType().getCode())) {
			final UserModel customer = userDao.findUserByUID(order.getUser().getUid());
			email = ((CustomerModel) customer).getContactEmail();
		} else {
			email = userProfileService.findCurrentUserProfile(order.getUser().getUid()).getEmail();
		}
		model.setCurrentUserEmail(email);
		final String SoldToId = order.getSoldToForCart().getUid();
		model.setErrorCode("BackendException in Order Batch Submission");
		//final String exceptionMsg = exception.getMessage();
		model.setOrderID(order.getCode());
		model.setErrorDescription(message);
		model.setCurrentSoldToId(SoldToId);
		model.setErrorTime(reportDate);
		model.setErrorType("Order Submission Error");
		model.setRequestParameterToSAP("Order with OrderID" + order.getCode());
		model.setResponseParameterFromSAP(message);
		model.setCartType(order.getCartType());
		model.setCommerceType(order.getCommerceType());

		model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_HIGH);
		model.setStatus(Boolean.TRUE);
		modelService.save(model);
		// Email Trigger
		final String templateCodeCriticalError = "CriticalErrorMailTemplate";
		final String subject = Config.getString("ORDER_SUBMIT_SUBJECT", "EdgeNet Critical Error Alert");
		final String to = Config.getString("ORDER_SUBMITION_TO_ADDRESS", "");
		final String orderId = order.getCode();
		final String userSSO = order.getUser().getUid();
		sendEmail(templateCodeCriticalError, subject, to, model, orderId, userSSO);
		// Email Trigger End
		order.setStatus(OrderStatus.ERROR);
		modelService.save(order);
	}

	public void sendEmail(final String templateCode, final String subject, final String to,
						  final BHGERfcCallErrorModel model, final String orderId, final String userSSO) {

		final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(templateCode);

		bhgeEmailService.orderSubmissionFailureEmail(templateModel, subject, to, model, orderId, userSSO);
	}

}