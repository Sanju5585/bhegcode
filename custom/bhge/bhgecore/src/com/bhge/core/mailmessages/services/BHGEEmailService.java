/**
 *
 */
package com.bhge.core.mailmessages.services;

import com.bhge.core.data.BHGEOrderUpdateEmailNotificationData;
import de.hybris.platform.acceleratorservices.model.email.EmailMessageModel;
import de.hybris.platform.commercefacades.order.data.OrderHistoryViewData;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;

import java.io.File;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import com.bhge.core.cronjob.BHGENonCrticalErrorVO;
import com.bhge.core.cronjob.BHGESavedCartExpiryMailVO;
import com.bhge.core.mailmessages.context.EmailResponse;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.product.BHGEMaterialPushData;
import com.bhge.facades.order.data.BHGEOrderHistoryData;
import com.bhge.core.enums.GEEdgeCartType;
import com.bhge.core.enums.BHGERMACommerceType;
import de.hybris.platform.core.model.order.OrderModel;

public interface BHGEEmailService
{

	public void sendMailForInvalidData(File file, String subject, String to);

	public void sendMailForWeeklyOrders(File file, String subject, String to, String fromDate, String toDate);

	public void sendEmailForRFCFailure(final String subject, final String to, final String msg);

	void materialPushEmail(RendererTemplateModel templateModel, String subject, String to, File materialPushExcel,
			List<BHGEMaterialPushData> materialPushDataList, Integer materialPushCount, Integer customerPushCount,
			Integer addressPushCount, Integer pricePushCount);

	public void orderSubmissionFailureEmail(RendererTemplateModel templateModel, String subject, String to,
			BHGERfcCallErrorModel model, String orderId, String userSSO);

	public void orderSubmissionNonCriticalErrorEmail(RendererTemplateModel templateModel, String subject, String to,
			File nonCriticalErrorDetails, List<BHGENonCrticalErrorVO> newBhgeErrorModelLst);

	public void sendEmailForOrderConfEmailFailure(String subject, String to, String msg, String orderId, String confirmationMail,
			String soldToForCart,String userSSO);

	public void sendGuestOrderNotificationEmail(final OrderModel order);

	boolean quoteSend(EmailMessageModel message);

	/**
	 * @param templateModel
	 * @param subject
	 * @param to
	 * @param model
	 * @param errorCode
	 */
	public void orderHistoryFailureEmail(RendererTemplateModel templateModel, String subject, String to,
			BHGERfcCallErrorModel model, String errorCode,String userSSO);

	public boolean createOrderLineDataEmail(String TEMPLATECODE, final ArrayList<OrderHistoryViewData> orderData, String subject,
			String to);

	public boolean createShareOrderEmail(final String SHARETEMPLATECODE, final BHGEOrderHistoryData headerData,
			final String subject, final String toAddress) throws ParseException;

	public boolean registerMail(final String temlateCode, final String subject, final String to, final String userName,
			final String dispName, final String flag, final String supportMail, final String companyMail, final String app,
			final String appStatus, final String approverEmail, final String accessType);

	public boolean processCSRMail(final String temlateCode, final String subject, final String to, final String dispName,
			final String accessRequest, final String supportMail, final String app, final String appStatus);

	public boolean createManualWorkflowEmail(final String temlateCode, final String subject, final String to,
			final String userName, final String sso, final String flag, final String processedBy, final String reason,
			final String supportMail, final String companyMail, final String approverEmail);



	public EmailResponse createEnquiryForm(final String TEMPLATECODE, String userName, String emailIds, String businessName,
			String orderNumber, String poNumber, String datePlaced, String enquiryType, String inquiryDetails, String subject,
			String soldToId, String productHeirarchy, final String productLine);

	public boolean createUserManagerEmail(final String temlateCode, final String subject, final String to,
			final String requestorName, final String requestorEmail, final String userManagerName, final String accesstype,
			final String userManagerLink, final String flag, final String currentAccessType);

	public boolean createUserSSOEmail(final String temlateCode, final String subject, final String to, final String userName,
			final String flag, final List<String> userMessageList, final String supportMail, final String companyEmail);

	public boolean createUserSSOEmail(final String temlateCode, final String subject, final String to,
			final List<String> selectedApp, final String userName, final String flag, final List<String> userMessageList,
			final String supportMail, final String companyEmail, final String lastName);

	public boolean createVerificationEmail(String userVerificationTemplate, String subject, String emailId, String userName,
			String url, String resendUrl, String cancelUrl, String supportMail, String companyEmail, String displayName,
			String bhgeAppList);

	/* Anish */
	public boolean createAccessRequestEmail(final String temlateCode, final String subject, final String requestorEmailId,
			final String requestorName, final String accessRequested, final String txtAdditionalComments,
			final String userManagerEmail, final String userManagerName);

	/*
	 * public boolean createAccessUpdateEmail(String userVerificationTemplate, String subject, String emailId, String
	 * userName, String url, String resendUrl, String cancelUrl, String supportMail, String companyEmail, String
	 * displayName, String bhgeAppList);
	 */
	/* Anish */

    public String fetchEmailforcc(String soldToId, String productLine);

    public boolean createAutoApprovalEmail(String userAutoApprovalTemplate, String subject, String email, String givenName,
                                           String uid);

	public boolean registerFailureScenario(String emailTemplate, String emailSubject, String emailTo, String errorEntry,
			List attribName, List attribValue);

	public boolean registerFailureMailGeneric(String emailTemplate, String emailSubject, String emailTo, String errorEntry,
			String stackTrace, List attribName, List attribValue);

	/**
	 * @param template
	 * @param subject
	 * @param to
	 * @param geEdgeSavedCartExpiryMailVO
	 */
	public void createSavedCartExpiryEmail(RendererTemplateModel template, String subject, String to,
			BHGESavedCartExpiryMailVO bhgeSavedCartExpiryMailVO);

	/**
	 * @param templateModel
	 * @param subject
	 * @param to
	 * @param inactiveUsersExcel
	 * @param customersDataList
	 */
	public void activeUsersReportEmail(RendererTemplateModel templateModel, String subject, String to, File activeUsersExcel);

	public boolean registerSubmitWorkflowEmail(final String temlateCode, final String subject, final String to,
			final String userName, final String sso, final String flag, final String supportMail, final String approvalEmail);

	public boolean loadReactiveMail(String userVerificationTemplate, String subject, String emailId, String userName, String url,
			String resendUrl, String supportMail, String companyEmail, String displayName);

	public boolean managetDetailsMail(String userVerificationTemplate, String subject, String emailId, String userName,
			final String managerId, final String managerName, final String managerEmailId, String supportMail);

	public void attachmentFailureEmail(final String orderId, final String soldTo, final String error, final String userEmail,
									   final String orderNumber, GEEdgeCartType cartType,BHGERMACommerceType commerceType, String userSSO);

	public void sendMailForPendingActivationUsers(File file, String subject, String to);
	public void sendMailForInactiveUser(File file, String subject, String to, final int inactiveUserCount,final int disabledUserCount);
	public boolean accessPendingMail(final String temlateCode, final String subject, final String to, List<String> attribName, List<String> attribValue);

	public boolean registerFPTMail(String templateCode, String subject, String to, String userName, String dispName, String flag,
			String supportMail, String companyMail, String app, String appStatus, String approverEmail);
	
	public boolean registerOFSMail(final String temlateCode, final String subject, final String to, final String userName,
			final String dispName, final String flag, final String supportMail, final String companyMail, final String app,
			final String appStatus, final String approverEmail);
	
	public boolean registerOFSFailureMailGeneric(String emailTemplate, String emailSubject, String emailTo, String errorEntry,
			String stackTrace,String Name, String CustID, String Email); 
			
	public void orderStatusNotificationEmail (final RendererTemplateModel templateModel, final String subject, final String to,
			  final OrderModel order);

    public void orderUpdateNotificationEmail(final RendererTemplateModel templateModel, final String subject, final String to,
                                             final List<BHGEOrderUpdateEmailNotificationData> orderUpdateEmailList, final String customerName);

}
