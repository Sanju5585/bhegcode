/**
 *
 */
package com.bhge.register.webservices.email;

import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;

import java.util.List;

import org.apache.commons.mail2.core.EmailException;

import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;


public interface EmailService
{
	public String registerMail(final String flag, final String emailId, final String userName, final String dispName,
			final String app, final String appStatus) throws CMSItemNotFoundException, EmailException;

	public String registerIQMMail(final String flag, final String emailId, final String userName, final String dispName,
			final String app, final String appStatus, final String approverEmail) throws CMSItemNotFoundException, EmailException;

	public String registerDAMMail(final String flag, final String emailId, final String userName, final String dispName,
			final String app, final String appStatus, final String approverEmail) throws CMSItemNotFoundException, EmailException;

	public String processCSRMail(final String flag, final BHGEUserAccessRequestModel accessRequestData, final String app,
			final String appStatus) throws CMSItemNotFoundException, EmailException;

	public String mannualWorkflowEmail(final String flag, final String emailId, final String userName, final String sso,
			final String processedBy, final String reason, final String csrDbList) throws CMSItemNotFoundException, EmailException;

	public String userManagerMail(final String flag, final String emailId, final String requestorName, final String requestorEmail,
			final String userManagerName, final String accesstype, final String userManagerLink, final String currentAccessType)
			throws CMSItemNotFoundException, EmailException;

	public String userCheckMail(final String flag, final String emailId, final String userName, List<String> userMessageList)
			throws CMSItemNotFoundException, EmailException;

	public String userCheckMail(final String flag, final String emailId, List<String> selectedApp, final String userName,
			List<String> userMessageList, final String lastName) throws CMSItemNotFoundException, EmailException;

	public String userVerifyMail(final String emailId, final String userName, String token, String userId, String bhgeAppList, String productLine)
			throws CMSItemNotFoundException, EmailException;

	/* Anish */
	public String accessUpdateMail(final String requestorEmailId, final String requestorName, final String accessRequested,
			final String txtAdditionalComments, final String userManagerEmail, final String userManagerName)
			throws CMSItemNotFoundException, EmailException;

	public String accessRequestMail(final String requestorEmailId, final String requestorName, final String accessRequested,
			final String txtAdditionalComments, final String userManagerEmail, final String userManagerName)
			throws CMSItemNotFoundException, EmailException;

	/* Anish */

	public String autoApprovedMail(String email, String givenName, String uid);

	public String registerFailureMail(String messageCode, String errorEntry, String stackTraceMessage,
			final List<String> attribName, final List<String> attribValue);

	public String requestSubmitEmail(final String flag, final String emailId, final String userName, final String sso,
			final String approvalEmail);

	public String loadReactiveMail(final String emailId, final String userName, String token, String userId, boolean reactiveFlag)
			throws CMSItemNotFoundException, EmailException;

	public String managetDetailsMail(final String emailId, final String userName, final String managerId, final String managerName,
			final String managerEmailId) throws CMSItemNotFoundException, EmailException;

	/* FPT Changes start */
	public String registerFptFailureMail(String messageCode, String errorEntry, String stackTraceMessage,
			final List<String> attribName, final List<String> attribValue);

	public String registerFPTMail(String flag, String emailId, String userName, String dispName, String app,
			final String appStatus, final String approverEmail) throws CMSItemNotFoundException, EmailException;

	/* FPT Changes end */
	public String registerOFSMail(final String flag, final String emailId, final String userName, final String dispName,
			final String app, final String appStatus) throws CMSItemNotFoundException, EmailException;
	
	public String registerOFSFailureMail(String messageCode, String errorEntry, String stackTraceMessage,String Name,
			String CustID, String Email);

	public String userCheckMail(final String flag, final String emailId, String selectedApp, final String userName,
								List<String> userMessageList, final String lastName) throws CMSItemNotFoundException, EmailException;
}
