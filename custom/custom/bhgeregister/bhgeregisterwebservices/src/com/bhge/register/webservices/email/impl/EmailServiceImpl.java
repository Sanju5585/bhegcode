/**
 *
 */
package com.bhge.register.webservices.email.impl;

import com.bhge.register.webservices.dao.UserManagerDao;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.util.Config;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;

import org.apache.commons.mail2.core.EmailException;
import org.apache.log4j.Logger;

import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.register.webservices.email.EmailService;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import org.springframework.web.util.UriComponentsBuilder;


public class EmailServiceImpl implements EmailService
{
	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeB2bEmailService;

	@Resource
	private UserManagerDao userManagerDao;

	private static final String BASE_URL = "bhge.register.base.url";
	private static final String STORE_URL = "bhge.store.base.url";
	private static final String VERIFICATION_URL = "bhge.register.verify.url";
	private static final String RE_VERIFICATION_URL = "bhge.register.verify.resend.url";
	private static final String CANCEL_URL = "bhge.register.cancel.url";
	private static final String DIGITAL_SOLUTIONS_STORE = Config.getString("bhge.application.name", "Digital Solutions Store");
	
	private static final String OFS_RE_VERIFICATION_URL = "bhge.ofs.register.verify.resend.url";

	/**
	 * @return the bhgeB2bEmailService
	 */
	public BHGEEmailService getBhgeB2bEmailService()
	{
		return bhgeB2bEmailService;
	}

	/**
	 * @param bhgeB2bEmailService
	 *           the bhgeB2bEmailService to set
	 */
	public void setBhgeB2bEmailService(final BHGEEmailService bhgeB2bEmailService)
	{
		this.bhgeB2bEmailService = bhgeB2bEmailService;
	}

	///Csr
	private static final String CSR_APPLICATIONACCESS_APPROVED = "Manual Approval User Approved";
	private static final String CSR_APPLICATIONACCESS_REJECT = "CSR REJECT";
	private static final String CSR_APPLICATIONACCESS_ONHOLD = "CSR OHHOLD User";
	private static final String CSR_APPLICATIONACCESS_ONHOLD_CSR = "CSR OHHOLD";
	//CSr


	private final static Logger LOG = Logger.getLogger(EmailServiceImpl.class);
	private static final String USERMANAGERCHECK = "UserManager";
	private static final String USERMANAGERUSERCHECK = "UserManagerUser";
	private static final String USERCHECK = "CustomerEmail";
	private static final String CUSTOMERAUTOAPPROVALCHECK = "Customerautoapprove";
	private static final String CUSTOMERAUTOAPPROVECHECK = "Customermodelcheck";
	private static final String CUSTOMERMANUALAPPROVECHECK = "WithoutCustomermodelcheck";
	private static final String CHECKSSO = "CheckSsoandEmail";
	private static final String USER_VERIFICATION_TEMPLATE = "UserVerificationTemplate";
	private static final String OFS_USER_VERIFICATION_TEMPLATE = "OFSUserVerificationTemplate";
	private static final String REGISTEROFSFAILURETEMPLATE = "registerOFSFailureTemplate";
	private static final String FPT_USER_VERIFICATION_TEMPLATE = "FPTUserVerificationTemplate";
	private static final String ACCESS_REQUEST_TEMPLATE = "AccessRequestTemplate";
	private static final String ACCESS_UPDATE_TEMPLATE = "AccessUpdateTemplate";
	private static final String USER_AUTO_APPROVAL_TEMPLATE = "AutoApprovedTemplate";
	/*
	 * private static final String SUBJECT_ACTIVATE_ACCOUNT = "BHGE Digital Solutions Store access: Confirm your Request";
	 */
	//private static final String SUBJECT_ACTIVATE_ACCOUNT = Config.getParameter("subjectActivateAccount");
	//private static final String SUBJECT_ACCOUNT_APPROVED = "Digital Solutions Store Registration Request Approved";
	private static final String IDOCUSERCALL = "IdocEmailCall";
	private static final String ACCESS_GRANTED = "AccessGranted";

	private static final String REGISTERFAILURETEMPLATE = "registerFailureTemplate";
	private static final String REGISTERFPTFAILURETEMPLATE = "VsRegisterFailureTemplate";
	private static final String SUBJECT_MSG1202 = "Self Register - SAP Insert Failure";
	//	private static final String SUBJECT = "Self Register Failure: ";
	private static final String LOAD_REACTIVATION_TEMPLATE = "LoadReactivationTemplate";
	private static final String VALIDATE_ACTIVATION_URL = "bhge.reactivation.validate.url";
	private static final String LOAD_ACTIVATION_URL = "bhge.reactivation.load.url";
	private static final String MANAGER_DETAILS_TEMPLATE = "ManagerDetailsTemplate";


	public String registerMail(final String flag, final String emailId, final String userName, final String dispName,
			final String app, final String appStatus) throws CMSItemNotFoundException, EmailException
	{
		LOG.info("Email Flag" + flag);
		String TEMPLATECODE = "";

		final String customerSupportMail = Config.getParameter("bhge.register.email.failure.technical");
		final String storeUrl = Config.getParameter("bhge.ecommerce.url");
		final String registerUrl = Config.getParameter("bhge.register.url");
		String subject = null;
		String accessType=getAccessType(userName);
		if (flag.equalsIgnoreCase(CUSTOMERAUTOAPPROVALCHECK))
		{
			subject = "Your credentials : BHGE User Registration";
			TEMPLATECODE = "WorkflowEmailTemplate";
		}
		else if (flag.equalsIgnoreCase(ACCESS_GRANTED))
		{
			subject = DIGITAL_SOLUTIONS_STORE + " Registration Successful";
			TEMPLATECODE = "RegisterCompleteMailTemplate";
		}

		LOG.info("Inside - /emailWorkflow");
		final boolean isEmailSentSuccessfully = false;
		try
		{
			LOG.info("Inside -try");
			bhgeB2bEmailService.registerMail(TEMPLATECODE, subject, emailId, userName, dispName, flag, customerSupportMail, storeUrl,
					null, null, null,accessType);

			LOG.info("ServiceExecuted-Controller");
		}
		catch (final Exception e)
		{
			LOG.error("Error sending Order Status Email to " + emailId);
			e.printStackTrace();
		}
		LOG.info("Flag" + isEmailSentSuccessfully);
		return "Success";
	}
	
	public String registerOFSMail(final String flag, final String emailId, final String userName, final String dispName,
			final String app, final String appStatus) throws CMSItemNotFoundException, EmailException
	{
		LOG.info("Email Flag" + flag);
		String TEMPLATECODE = "";

		final String customerSupportMail = Config.getParameter("bhge.ofs.register.email.failure.technical");
		final String storeUrl = Config.getParameter("bhge.ofs.ecommerce.url");
		final String registerUrl = Config.getParameter("bhge.register.url");
		String subject = null;

		if (flag.equalsIgnoreCase(CUSTOMERAUTOAPPROVALCHECK))
		{
			subject = "Your credentials : BHGE User Registration";
			TEMPLATECODE = "WorkflowOFSEmailTemplate";
		}
		else if (flag.equalsIgnoreCase(ACCESS_GRANTED))
		{
			subject = Config.getParameter("ofsregistrationApproved");
			TEMPLATECODE = "WorkflowOFSEmailTemplate";
		}

		LOG.info("Inside - /emailWorkflow");
		final boolean isEmailSentSuccessfully = false;
		try
		{
			LOG.info("Inside -try");
			bhgeB2bEmailService.registerOFSMail(TEMPLATECODE, subject, emailId, userName, dispName, flag, customerSupportMail, storeUrl,
					null, null, null);

			LOG.info("ServiceExecuted-Controller");
		}
		catch (final Exception e)
		{
			LOG.error("Error sending Order Status Email to " + emailId);
			e.printStackTrace();
		}
		LOG.info("Flag" + isEmailSentSuccessfully);
		return "Success";
	}
	
	@Override
	public String registerOFSFailureMail(final String messageCode, String errorEntry, String stackTraceMessage,String Name,
			String CustID, String Email)
	{
		errorEntry = (null == errorEntry) ? "Error occured" : errorEntry;
		stackTraceMessage = (null == stackTraceMessage) ? "Error occured" : stackTraceMessage;
		final String subject = Config.getParameter("selfregisterfailure");
		bhgeB2bEmailService.registerOFSFailureMailGeneric(REGISTEROFSFAILURETEMPLATE, subject + messageCode,
				Config.getParameter("bhge.ofs.register.email.failure.technical"), errorEntry, stackTraceMessage,Name, CustID, Email);

		return "SUCCESS";
	}

	@Override
	public String userCheckMail(String flag, String emailId, String selectedApp, String userName, List<String> userMessageList, String lastName) throws CMSItemNotFoundException, EmailException {
		LOG.info("Under userCheckMail 199 flag: "+flag+" emailId: "+emailId+" selectedApp: "+selectedApp+" userName: "+userName+" userMessageList: "+userMessageList+" lastName: "+lastName);
		List<String> supportMail = new ArrayList<String>();
		supportMail.add(Config.getParameter("bhge.register.email.failure.technical"));

		String customerSupportMail = supportMail.stream().collect(Collectors.joining(" & "));
		LOG.info("customerSupportMail 204: "+customerSupportMail);

		final String storeUrl = Config.getParameter("bhge.ecommerce.url");
		LOG.info("Email Flag" + flag);
		String TEMPLATECODE = "";
		if (flag.equalsIgnoreCase(USERCHECK))
		{
			TEMPLATECODE = "MultipleSSoRegisterTemplate";
		}
		LOG.info("Inside - MultipleSSoRegisterTemplate ");
		final boolean isEmailSentSuccessfully = false;
		try
		{
			LOG.info("Inside -try");
			final String subject = Config.getParameter("emailalreadyused");

			bhgeB2bEmailService.createUserSSOEmail(TEMPLATECODE, subject, emailId, Collections.singletonList(selectedApp), userName, flag, userMessageList,
					customerSupportMail, storeUrl, lastName);
			LOG.info("ServiceExecuted-OCC Controller");
		}
		catch (final Exception e)
		{
			LOG.info("Sending the email failed for OCC Order Status through EmailService File, exception: "+ e);
			LOG.error("Error sending OCC Order Status Email to " + emailId);
		}
		LOG.info("OCC Flag" + isEmailSentSuccessfully);
		return "Success";
	}

	public String registerIQMMail(final String flag, final String emailId, final String userName, final String dispName,
			final String app, final String appStatus, final String approverEmail) throws CMSItemNotFoundException, EmailException
	{
		LOG.info("Email Flag" + flag);
		String TEMPLATECODE = "";

		final String customerSupportMail = Config.getParameter("iqm.bhge.register.email.failure.technical");
		final String storeUrl = Config.getParameter("bhge.ecommerce.url");
		final String registerUrl = Config.getParameter("bhge.register.url");
		String subject = null;
		String accessType=getAccessType(userName);

		/*
		 * if (flag.equalsIgnoreCase(CUSTOMERAUTOAPPROVALCHECK)) { subject = "Your credentials : BHGE User Registration";
		 * TEMPLATECODE = "WorkflowEmailTemplate"; } else if (flag.equalsIgnoreCase(ACCESS_GRANTED)) { subject =
		 * DIGITAL_SOLUTIONS_STORE+" Registration Successful"; TEMPLATECODE = "RegisterCompleteMailTemplate"; }
		 */
		if (flag.equalsIgnoreCase(ACCESS_GRANTED))
		{
			subject = Config.getParameter("iqmregistrationApproved");
			TEMPLATECODE = "IQMRegisterCompleteMailTemplate";
		}

		LOG.info("Inside - /emailWorkflow");
		final boolean isEmailSentSuccessfully = false;
		try
		{
			LOG.info("Inside -try");
			bhgeB2bEmailService.registerMail(TEMPLATECODE, subject, emailId, userName, dispName, flag, customerSupportMail, storeUrl,
					null, null, approverEmail, accessType);

			LOG.info("ServiceExecuted-Controller");
		}
		catch (final Exception e)
		{
			LOG.error("Error sending Order Status Email to " + emailId);
			e.printStackTrace();
		}
		LOG.info("Flag" + isEmailSentSuccessfully);
		return "Success";
	}

	/* FPT Register Mail start */
	public String registerFPTMail(final String flag, final String emailId, final String userName, final String dispName,
			final String app, final String appStatus, final String approverEmail) throws CMSItemNotFoundException, EmailException
	{
		LOG.info("Email Flag" + flag);
		String TEMPLATECODE = "";

		final String customerSupportMail = Config.getParameter("fpt.bhge.register.email.failure.technical");
		final String storeUrl = Config.getParameter("bhge.ecommerce.url");
		final String registerUrl = Config.getParameter("bhge.register.url");
		String subject = null;

		if (flag.equalsIgnoreCase(ACCESS_GRANTED))
		{
			subject = Config.getParameter("fptregistrationApproved");
			TEMPLATECODE = "WorkflowFptEmailTemplate";
		}

		LOG.info("Inside - /emailWorkflow");
		final boolean isEmailSentSuccessfully = false;
		try
		{
			LOG.info("Inside -try");
			bhgeB2bEmailService.registerFPTMail(TEMPLATECODE, subject, emailId, userName, dispName, flag, customerSupportMail,
					storeUrl, null, null, approverEmail);

			LOG.info("ServiceExecuted-Controller");
		}
		catch (final Exception e)
		{
			LOG.error("Error sending Order Status Email to " + emailId);
			e.printStackTrace();
		}
		LOG.info("Flag" + isEmailSentSuccessfully);
		return "Success";
	}
	private String getAccessType(String userName){
		final GEEdgeCustomerModel geEdgeCustomerModel = userManagerDao.fetchEdgeCustomer(userName);
		String accessType=null;

		if (null != geEdgeCustomerModel && !geEdgeCustomerModel.getGroups().isEmpty())
		{
			try
			{
				System.out.println("Get Groups Started : ");
				for (final PrincipalGroupModel eachGroup : geEdgeCustomerModel.getGroups())
				{
					System.out.println(eachGroup.getUid());
					final String eachAccess = eachGroup.getUid();
					switch (eachAccess)
					{
						case "UG_ADMIN_ORDER_STORE":
							accessType="UG_ADMIN_ORDER_STORE";
							break;
						case "UG_VIEW_STORE":
							accessType="UG_VIEW_STORE";
							break;
						case "UG_ORDER_TRACKING":
							accessType="UG_ORDER_TRACKING";
							break;

					}
				}
			}
			catch (final Exception ex)
			{
				ex.printStackTrace();
			}

		}
		return accessType;
	}

	/* FPT Register Mail end */

	public String registerDAMMail(final String flag, final String emailId, final String userName, final String dispName,
			final String app, final String appStatus, final String approverEmail) throws CMSItemNotFoundException, EmailException
	{
		LOG.info("Email Flag" + flag);
		String TEMPLATECODE = "";

		final String customerSupportMail = Config.getParameter("iqm.bhge.register.email.failure.technical");
		final String storeUrl = Config.getParameter("bhge.ecommerce.url");
		final String registerUrl = Config.getParameter("bhge.register.url");
		String subject = null;
		String accessType=getAccessType(userName);

		/*
		 * if (flag.equalsIgnoreCase(CUSTOMERAUTOAPPROVALCHECK)) { subject = "Your credentials : BHGE User Registration";
		 * TEMPLATECODE = "WorkflowEmailTemplate"; } else if (flag.equalsIgnoreCase(ACCESS_GRANTED)) { subject =
		 * DIGITAL_SOLUTIONS_STORE+" Registration Successful"; TEMPLATECODE = "RegisterCompleteMailTemplate"; }
		 */
		String fromEmail = null;
		if (flag.equalsIgnoreCase(ACCESS_GRANTED))
		{
			subject = Config.getParameter("damregistrationApproved");
			TEMPLATECODE = "DAMRegisterCompleteMailTemplate";
			fromEmail = approverEmail;
		}

		LOG.info("Inside - /emailWorkflow");
		final boolean isEmailSentSuccessfully = false;
		try
		{
			LOG.info("Inside -try");
			bhgeB2bEmailService.registerMail(TEMPLATECODE, subject, emailId, userName, dispName, flag, customerSupportMail, storeUrl,
					null, null, fromEmail, accessType);

			LOG.info("ServiceExecuted-Controller");
		}
		catch (final Exception e)
		{
			LOG.error("Error sending Order Status Email to " + emailId);
			e.printStackTrace();
		}
		LOG.info("Flag" + isEmailSentSuccessfully);
		return "Success";
	}

	public String processCSRMail(final String flag, final BHGEUserAccessRequestModel accessRequestData, final String app,
			final String appStatus) throws CMSItemNotFoundException, EmailException
	{
		String TEMPLATECODE = null;
		String customerSupportMail = null;
		final String storeUrl = Config.getParameter("bhge.ecommerce.url");
		final String registerUrl = Config.getParameter("bhge.register.url");
		final String dispName = accessRequestData.getRequesterId().getGivenName() + " "
				+ accessRequestData.getRequesterId().getFamilyName();
		//	final String subject = "ACTION REQUIRED: Digital Solutions Store Approval Needed - " + dispName;
		String subject = null;
		LOG.info("Email Flag" + flag);
		
		if (accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 1
		|| accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 2
		|| accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 3)
		{

			TEMPLATECODE = "WorkflowEmailcsrTemplate";
			customerSupportMail = Config.getParameter("bhge.register.email.failure.technical");
			//	final String subject = "ACTION REQUIRED: Digital Solutions Store Approval Needed - " + dispName;
			subject = Config.getParameter("actionRequired") + dispName;
		}
		if (accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 4)
		{

			TEMPLATECODE = "WorkflowEmailVscsrTemplate";
			customerSupportMail = Config.getParameter("fpt.bhge.register.email.failure.technical");
			subject = Config.getParameter("fptactionRequired") + dispName;
		}
		// OFS Store Changes For Sending CSR Email Start
		if (accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 5)
		{
			TEMPLATECODE = "WorkflowEmailOFScsrTemplate";
			customerSupportMail = Config.getParameter("bhge.ofs.register.email.failure.technical");
			subject = Config.getParameter("ofsActionRequired") + dispName;
		}
		// End
		
		LOG.info("Inside - /emailWorkflow");
		final boolean isEmailSentSuccessfully = false;
		try
		{
			LOG.info("Inside -try");
			bhgeB2bEmailService.processCSRMail(TEMPLATECODE, subject, accessRequestData.getApproverDetails().getEmailDistribList(),
					dispName, accessRequestData.getAccessRequestId().toString(), customerSupportMail, null, null);

			LOG.info("ServiceExecuted-Controller");
		}
		catch (final Exception e)
		{
			LOG.error("Error sending Order Status Email to " + accessRequestData.getApproverDetails().getEmailDistribList());
			e.printStackTrace();
		}
		LOG.info("Flag" + isEmailSentSuccessfully);
		return "Success";
	}

	public String mannualWorkflowEmail(final String flag, final String emailId, final String userName, final String sso,
			final String processedBy, final String reason, final String csrDbList) throws CMSItemNotFoundException, EmailException
	{
		String customerSupportMail = null;
		final String storeUrl = Config.getParameter("bhge.ecommerce.url");

		LOG.info("Email Flag" + flag);
		String TEMPLATECODE = "";
		String subjecttoReject = null;
		String approverEmail = null;
		if (flag.equalsIgnoreCase("CSR REJECT"))
		{
			LOG.info("Inside - M&C emailWorkflow");
			TEMPLATECODE = "ManualWorkflowUserTemplate";
			subjecttoReject = Config.getParameter("registrationDenied");
			customerSupportMail = Config.getParameter("bhge.register.email.failure.technical");
		}
		else if (flag.equalsIgnoreCase("CSR IQM REJECT"))
		{
			LOG.info("Inside - IQM emailWorkflow");
			TEMPLATECODE = "IQMManualWorkflowUserTemplate";
			subjecttoReject = Config.getParameter("iqmregistrationDenied");
			customerSupportMail = Config.getParameter("iqm.bhge.register.email.failure.technical");
			approverEmail = csrDbList;
		}
		else if (flag.equalsIgnoreCase("CSR FPT REJECT"))
		{
			LOG.info("Inside - FPT emailWorkflow");
			TEMPLATECODE = "ManualFptWorkflowUserTemplate";
			subjecttoReject = Config.getParameter("fptregistrationDenied");
			customerSupportMail = Config.getParameter("fpt.bhge.register.email.failure.technical");
			approverEmail = Config.getParameter("register.fromMail");//SVC-Prod-DSStore@bakerhughes.com
		}
		else if (flag.equalsIgnoreCase("CSR OFS REJECT"))
		{
			LOG.info("Inside - OFS emailWorkflow");
			TEMPLATECODE = "ManualOfsWorkflowUserTemplate";
			subjecttoReject = Config.getParameter("ofsregistrationDenied");
			customerSupportMail = Config.getParameter("bhge.ofs.register.email.failure.technical");
			approverEmail = Config.getParameter("register.fromMail");//SVC-Prod-DSStore@bakerhughes.com
		}
		//TEMPLATECODE = "ManualWorkflowUserTemplate";
		//LOG.info("Inside - /emailWorkflow");
		final boolean isEmailSentSuccessfully = false;
		try
		{
			LOG.info("Inside -try");
			//final String subject = "BHGE Digital Solutions Store Registration Denied";
			//final String subject = Config.getParameter("registrationDenied");
			final String subject = subjecttoReject;
			bhgeB2bEmailService.createManualWorkflowEmail(TEMPLATECODE, subject, emailId, userName, sso, flag, processedBy, reason,
					customerSupportMail, storeUrl, approverEmail);
			LOG.info("ServiceExecuted-Controller");
		}
		catch (final Exception e)
		{
			LOG.error("Error sending Order Status Email to " + emailId);
			e.printStackTrace();
		}
		LOG.info("Flag" + isEmailSentSuccessfully);
		return "Success";
	}

	public String requestSubmitEmail(final String flag, final String emailId, final String userName, final String sso,
			final String approvalEmail)
	{
		final String customerSupportMail = Config.getParameter("iqm.bhge.register.email.failure.technical");
		//final String storeUrl = Config.getParameter("bhge.ecommerce.url");

		LOG.info("Email Flag" + flag);
		String TEMPLATECODE = "";
		final String subject = Config.getParameter("iqmregistrationSubmit");
		TEMPLATECODE = "IQMRequestSubmitTemplate";
		LOG.info("Inside - IQM RequestSubmit flow ");
		final boolean isEmailSentSuccessfully = false;
		try
		{
			LOG.info("Inside -try");
			bhgeB2bEmailService.registerSubmitWorkflowEmail(TEMPLATECODE, subject, emailId, userName, sso, flag, customerSupportMail,
					approvalEmail);
			LOG.info("ServiceExecuted-Controller");
		}
		catch (final Exception e)
		{
			LOG.error("Error sending Order Status Email to " + emailId);
			e.printStackTrace();
		}
		LOG.info("Flag" + isEmailSentSuccessfully);
		return "Success";
	}

	public String userCheckMail(final String flag, final String emailId, final String userName, final List<String> userMessageList)
			throws CMSItemNotFoundException, EmailException
	{
		final String customerSupportMail = Config.getParameter("bhge.register.email.failure.technical");
		final String storeUrl = Config.getParameter("bhge.ecommerce.url");

		LOG.info("Email Flag" + flag);
		String TEMPLATECODE = "";

		if (flag.equalsIgnoreCase(USERCHECK))
		{
			TEMPLATECODE = "MultipleSSoRegisterTemplate";
		}

		LOG.info("Inside - MultipleSSoRegisterTemplate ");
		final boolean isEmailSentSuccessfully = false;
		try
		{
			LOG.info("Inside -try");
			//	final String subject = "Request for M&C Store access : Email already used";
			final String subject = Config.getParameter("emailalreadyused");
			bhgeB2bEmailService.createUserSSOEmail(TEMPLATECODE, subject, emailId, userName, flag, userMessageList,
					customerSupportMail, storeUrl);
			LOG.info("ServiceExecuted-Controller");
		}
		catch (final Exception e)
		{
			LOG.info("Sending the email failed for User Check through EmailService File, exception: "+ e);
			LOG.error("Error sending Order Status Email to " + emailId);
		}
		LOG.info("Flag" + isEmailSentSuccessfully);
		return "Success";
	}

	public String userCheckMail(final String flag, final String emailId, final List<String> selectedApp, final String userName,
			final List<String> userMessageList, final String lastName) throws CMSItemNotFoundException, EmailException
	{
		List<String> supportMail = new ArrayList<String>();
		for(int i = 0; i < selectedApp.size(); i++)
		{
			if (selectedApp.get(i).equalsIgnoreCase("1"))
			{
				supportMail.add(Config.getParameter("bhge.register.email.failure.technical"));
			}
			if (selectedApp.get(i).equalsIgnoreCase("4"))
			{
				supportMail.add(Config.getParameter("fpt.bhge.register.email.failure.technical"));
			}
			if (selectedApp.get(i).equalsIgnoreCase("5"))
			{
				supportMail.add(Config.getParameter("bhge.ofs.register.email.failure.technical"));
			}
		}				
		String customerSupportMail = supportMail.stream().collect(Collectors.joining(" & "));
		
		//final String customerSupportMail = Config.getParameter("bhge.register.email.failure.technical");
		final String storeUrl = Config.getParameter("bhge.ecommerce.url");
		LOG.info("Email Flag" + flag);
		String TEMPLATECODE = "";
			if (flag.equalsIgnoreCase(USERCHECK))
			{
				TEMPLATECODE = "MultipleSSoRegisterTemplate";
			}
			if (flag.equalsIgnoreCase(USERCHECK) && selectedApp.contains("5"))
			{
				TEMPLATECODE = "OfsMultipleSSoRegisterTemplate";
			}
		LOG.info("Inside - MultipleSSoRegisterTemplate ");
		final boolean isEmailSentSuccessfully = false;
		try
		{
			LOG.info("Inside -try");
			//	final String subject = "Request for M&C Store access : Email already used";
			final String subject = Config.getParameter("emailalreadyused");
			/*
			 * bhgeB2bEmailService.createUserSSOEmail(TEMPLATECODE, subject, emailId, userName, flag, userMessageList,
			 * customerSupportMail, storeUrl);
			 */
			bhgeB2bEmailService.createUserSSOEmail(TEMPLATECODE, subject, emailId, selectedApp, userName, flag, userMessageList,
					customerSupportMail, storeUrl, lastName);
			LOG.info("ServiceExecuted-Controller");
		}
		catch (final Exception e)
		{
			LOG.info("Sending the email failed for User Check Mail through EmailService File, exception: "+ e);
			LOG.error("Error sending Order Status Email to " + emailId);
		}
		LOG.info("Flag" + isEmailSentSuccessfully);
		return "Success";
	}

	public String userManagerMail(final String flag, final String emailId, final String requestorName, final String requestorEmail,
			final String userManagerName, final String accesstype, final String userManagerLink, final String currentAccessType)
			throws CMSItemNotFoundException, EmailException
	{
		LOG.info("Email Flag" + flag);
		String TEMPLATECODE = "";

		if (flag.equalsIgnoreCase(USERMANAGERUSERCHECK))
		{
			TEMPLATECODE = "UserManagerUserTemplate";
		}
		else if (flag.equalsIgnoreCase(USERMANAGERCHECK))
		{
			TEMPLATECODE = "UserManagerTemplate";

		}
		LOG.info("Inside - /emailWorkflow");
		final boolean isEmailSentSuccessfully = false;
		try
		{
			LOG.info("Inside -try");
			//final String subject = "Digital Solutions Store : Access request for your company";
			final String subject = Config.getParameter("accessrequestforyourcompany");
			bhgeB2bEmailService.createUserManagerEmail(TEMPLATECODE, subject, emailId, requestorName, requestorEmail,
					userManagerName, accesstype, userManagerLink, flag, currentAccessType);
			LOG.info("ServiceExecuted-Controller");
		}
		catch (final Exception e)
		{
			LOG.error("Error sending Order Status Email to " + emailId);
		}
		LOG.info("Flag" + isEmailSentSuccessfully);
		return "Success";
	}

	@Override
	public String userVerifyMail(final String emailId, final String userName, final String token, final String userId,
								 final String bhgeAppList, String productLine) throws CMSItemNotFoundException, EmailException {
		if (bhgeAppList != null && bhgeAppList.length() > 0) {
			if (bhgeAppList.contains(Config.getParameter("register.appList.mncStore"))
					|| bhgeAppList.contains(Config.getParameter("register.appList.iqmApp"))
					|| bhgeAppList.contains(Config.getParameter("register.appList.damApp"))) {
				final String customerSupportMail = Config.getParameter("bhge.register.email.failure.technical");
				final String storeUrl = Config.getParameter("bhge.ecommerce.url");
				LOG.info("Inside userVerifyMail for email: " + emailId + " and username: " + userName);
				boolean response = false;
				try {
					LOG.info("Service support mail " + customerSupportMail);
					final String subject = Config.getParameter("subjectActivateAccount");

					// Retrieve Config Parameters
					final String baseUrl = Config.getParameter(BASE_URL);
					final String verificationUrlPath = Config.getParameter(VERIFICATION_URL);
					final String resendUrlPath = Config.getParameter(RE_VERIFICATION_URL);
					final String cancelUrlPath = Config.getParameter(CANCEL_URL);
					// Build URLs
					String verificationUrl = UriComponentsBuilder
							.fromHttpUrl(buildBaseUrl(baseUrl, productLine, verificationUrlPath))
							.queryParam("email", userId)
							.queryParam("token", token)
							.toUriString();

					String resendURL = UriComponentsBuilder
							.fromHttpUrl(buildBaseUrl(baseUrl, productLine, resendUrlPath))
							.queryParam("email", userId)
							.toUriString();

					String cancelURL = UriComponentsBuilder
							.fromHttpUrl(buildBaseUrl( baseUrl, productLine, cancelUrlPath))
							.queryParam("email", userId)
							.queryParam("token", token)
							.toUriString();

					// Send Email
					response = bhgeB2bEmailService.createVerificationEmail(
							USER_VERIFICATION_TEMPLATE,
							subject,
							emailId,
							userName,
							verificationUrl,
							resendURL,
							cancelURL,
							customerSupportMail,
							storeUrl,
							userId,
							bhgeAppList
					);

				} catch (final Exception e) {
					LOG.info("Sending the email failed for User verification through EmailService File, exception: "+ e);
					LOG.error("Error sending User Verification Email to " + emailId);
					e.printStackTrace();
				}
				LOG.info("Response: " + response);
			}
			if (bhgeAppList.contains(Config.getParameter("register.appList.fptApp"))) {
				final String customerSupportMail = Config.getParameter("fpt.bhge.register.email.failure.technical");
				final String storeUrl = Config.getParameter("fpt.bhge.ecommerce.url");
				LOG.info("Inside userVerifyMail for email: " + emailId + " and username: " + userName);
				boolean response = false;
				try {
					LOG.info("Service support mail" + customerSupportMail);
					final String subject = Config.getParameter("fptsubjectActivateAccount");
					response = bhgeB2bEmailService.createVerificationEmail(FPT_USER_VERIFICATION_TEMPLATE, subject, emailId, userName,
							Config.getParameter(BASE_URL) + Config.getParameter(VERIFICATION_URL) + "/" + userId + "/" + token + "/",
							Config.getParameter(BASE_URL) + Config.getParameter(RE_VERIFICATION_URL) + "/" + userId + "/" + token,
							Config.getParameter(BASE_URL) + Config.getParameter(CANCEL_URL) + "/" + userId + "/" + token + "/",
							customerSupportMail, storeUrl, userId, bhgeAppList);
				} catch (final Exception e) {
					LOG.error("Error sending User Verification Email to " + emailId + " with Error " + e);
					e.printStackTrace();
				}
				LOG.info("Response: " + response);
			}
			if (bhgeAppList.contains(Config.getParameter("register.appList.ofsStore"))) {

				final String customerSupportMail = Config.getParameter("bhge.ofs.register.email.failure.technical");
				final String storeUrl = Config.getParameter("bhge.ecommerce.url");
				LOG.info("Inside userVerifyMail for OFS email: " + emailId + " and username: " + userName);
				boolean response = false;
				try {
					LOG.info("Service support mail " + customerSupportMail);
					final String subject = Config.getParameter("ofssubjectActivateAccount");
					response = bhgeB2bEmailService.createVerificationEmail(OFS_USER_VERIFICATION_TEMPLATE, subject, emailId, userName,
							Config.getParameter(BASE_URL) + Config.getParameter(VERIFICATION_URL) + "/" + userId + "/" + token,
							Config.getParameter(BASE_URL) + Config.getParameter(OFS_RE_VERIFICATION_URL) + "/" + userId + "/",
							Config.getParameter(BASE_URL) + Config.getParameter(CANCEL_URL) + "/" + userId + "/" + token,
							customerSupportMail, storeUrl, userId, bhgeAppList);
				} catch (final Exception e) {
					LOG.error("Error sending User Verification Email to " + emailId);
					e.printStackTrace();
				}
				LOG.info("Response: " + response);

			}
		}
		return "Success";
	}

	private String buildBaseUrl(String baseUrl, String productLine, String verificationUrlPath) {
		if (productLine != null && !productLine.trim().isEmpty()) {
			return String.format("%s/%s%s", baseUrl, productLine, verificationUrlPath);
		}
		return String.format("%s%s", baseUrl, verificationUrlPath);
	}

	/* Anish */
	@Override
	public String accessUpdateMail(final String requestorEmailId, final String requestorName, final String accessRequested,
			final String txtAdditionalComments, final String userManagerEmail, final String userManagerName)
			throws CMSItemNotFoundException, EmailException
	{
		final String customerSupportMail = Config.getParameter("bhge.register.email.failure.technical");
		final String storeUrl = Config.getParameter("bhge.ecommerce.url");
		LOG.info("Inside accessRequestMail for email: " + requestorEmailId + " and username: " + requestorName);
		LOG.info("Inside accessRequestMail for accessRequested: " + accessRequested + " and txtAdditionalComments: "
				+ txtAdditionalComments);
		LOG.info("Inside accessRequestMail for userManagerEmail: " + userManagerEmail + " and userManagerName: " + userManagerName);
		boolean response = false;
		try
		{
			final String subject = "Access Updated ";
			response = bhgeB2bEmailService.createAccessRequestEmail(ACCESS_UPDATE_TEMPLATE, subject, requestorEmailId, requestorName,
					accessRequested, txtAdditionalComments, userManagerEmail, userManagerName);
		}
		catch (final Exception e)
		{
			LOG.error("Error sending User Verification Email to " + userManagerEmail);
			e.printStackTrace();
		}
		LOG.info("Response: " + response);
		return "Success";
	}

	@Override
	public String accessRequestMail(final String requestorEmailId, final String requestorName, final String accessRequested,
			final String txtAdditionalComments, final String userManagerEmail, final String userManagerName)
			throws CMSItemNotFoundException, EmailException
	{
		final String customerSupportMail = Config.getParameter("bhge.register.email.failure.technical");
		final String storeUrl = Config.getParameter("bhge.ecommerce.url");
		LOG.info("Inside accessRequestMail for email: " + requestorEmailId + " and username: " + requestorName);
		LOG.info("Inside accessRequestMail for accessRequested: " + accessRequested + " and txtAdditionalComments: "
				+ txtAdditionalComments);
		LOG.info("Inside accessRequestMail for userManagerEmail: " + userManagerEmail + " and userManagerName: " + userManagerName);
		boolean response = false;
		try
		{
			final String subject = "Access Requested ";
			response = bhgeB2bEmailService.createAccessRequestEmail(ACCESS_REQUEST_TEMPLATE, subject, requestorEmailId,
					requestorName, accessRequested, txtAdditionalComments, userManagerEmail, userManagerName);
		}
		catch (final Exception e)
		{
			LOG.error("Error sending User Verification Email to " + userManagerEmail);
			e.printStackTrace();
		}
		LOG.info("Response: " + response);
		return "Success";
	}
	/* Anish */

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.email.EmailService#autoApprovedMail(java.lang.String, java.lang.String,
	 * java.lang.String)
	 */
	@Override
	public String autoApprovedMail(final String email, final String givenName, final String uid)
	{
		LOG.info("Inside autoApprovedMail for email: " + email + " and username: " + givenName);
		boolean response = false;
		try
		{
			final String subject = Config.getParameter("subjectAccountApproved");
			response = bhgeB2bEmailService.createAutoApprovalEmail(USER_AUTO_APPROVAL_TEMPLATE, subject, email, givenName, uid);
		}
		catch (final Exception e)
		{
			LOG.info("Sending the email failed for Auto Approved Mail through EmailService File, exception: "+ e);
			LOG.error("Error sending Auto Approval Email to " + email);
		}
		LOG.info("Response: " + response);
		return "Success";
	}

	@Override
	public String registerFailureMail(final String messageCode, String errorEntry, String stackTraceMessage,
			final List<String> attribName, final List<String> attribValue)
	{
		errorEntry = (null == errorEntry) ? "Error occured" : errorEntry;
		stackTraceMessage = (null == stackTraceMessage) ? "Error occured" : stackTraceMessage;
		final String subject = Config.getParameter("selfregisterfailure");
		bhgeB2bEmailService.registerFailureMailGeneric(REGISTERFAILURETEMPLATE, subject + messageCode,
				Config.getParameter("bhge.register.email.failure.technical"), errorEntry, stackTraceMessage, attribName, attribValue);

		return "SUCCESS";
	}

	/* FPT Valv store Changes start */
	@Override
	public String registerFptFailureMail(final String messageCode, String errorEntry, String stackTraceMessage,
			final List<String> attribName, final List<String> attribValue)
	{
		errorEntry = (null == errorEntry) ? "Error occured" : errorEntry;
		stackTraceMessage = (null == stackTraceMessage) ? "Error occured" : stackTraceMessage;
		final String subject = Config.getParameter("selfregisterfailure");
		bhgeB2bEmailService.registerFailureMailGeneric(REGISTERFPTFAILURETEMPLATE, subject + messageCode,
				Config.getParameter("fpt.bhge.register.email.failure.technical"), errorEntry, stackTraceMessage, attribName,
				attribValue);

		return "SUCCESS";
	}
	/* FPT Valv store Changes end */


	@Override
	public String loadReactiveMail(final String emailId, final String userName, final String token, final String userId,
			final boolean reactiveFlag) throws CMSItemNotFoundException, EmailException
	{
		final String customerSupportMail = Config.getParameter("bhge.register.email.failure.technical");
		final String storeUrl = Config.getParameter("bhge.ecommerce.url");
		LOG.info("Inside loadReactiveMail for email: " + emailId + " and username: " + userName);
		boolean response = false;
		String baseAppUrl = null;
		try
		{

			if (reactiveFlag)
			{
				baseAppUrl = Config.getParameter(STORE_URL);
			}
			else
			{
				baseAppUrl = Config.getParameter(BASE_URL);
			}

			LOG.info("Service support mail" + customerSupportMail);
			final String subject = Config.getParameter("subjectLoadReactiveMail");
			response = bhgeB2bEmailService.loadReactiveMail(LOAD_REACTIVATION_TEMPLATE, subject, emailId, userName,
					baseAppUrl + Config.getParameter(VALIDATE_ACTIVATION_URL) + "/" + userId + "/" + token,
					baseAppUrl + Config.getParameter(LOAD_ACTIVATION_URL) + "/" + userId + "/", customerSupportMail, storeUrl, userId);
		}
		catch (final Exception e)
		{
			LOG.info("Sending the email failed for User Verification Email through EmailService File, exception: "+ e);
			LOG.error("Error sending User Verification Email to " + emailId);
			e.printStackTrace();
		}
		LOG.info("Response: " + response);
		return "Success";
	}


	@Override
	public String managetDetailsMail(final String emailId, final String userName, final String managerId, final String managerName,
			final String managerEmailId) throws CMSItemNotFoundException, EmailException
	{
		final String customerSupportMail = Config.getParameter("bhge.register.email.failure.technical");
		LOG.info("Inside managetDetailsMail for email: " + emailId + " and username: " + userName);
		boolean response = false;
		try
		{
			LOG.info("Service support mail" + customerSupportMail);
			final String subject = Config.getParameter("subjectManagerDetailsMail");
			response = bhgeB2bEmailService.managetDetailsMail(MANAGER_DETAILS_TEMPLATE, subject, emailId, userName, managerId,
					managerName, managerEmailId, customerSupportMail);
		}
		catch (final Exception e)
		{
			LOG.info("Sending the email failed for Manager Details Mail through EmailService File, exception: "+ e);
			LOG.error("Error sending Manager Details Email to " + emailId);
			e.printStackTrace();
		}
		LOG.info("Response managetDetailsMail : " + response);
		return "Success";
	}
}
