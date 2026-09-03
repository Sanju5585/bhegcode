/**
 *
 */
package com.bhge.core.mailmessages.context;

import java.io.UnsupportedEncodingException;

import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.bhge.core.registeruser.dto.BHGERegisterUserMultipleSSOData;

/**
 * @author 1121219
 *
 */
public class BHGERegisterEmailContext
{
	private String subject;
	private List<String> toAddresses;
	private String userName;
	private String status;
	private String sso;
	private String email;
	private List<String> userMessageList;
	private String supportMail;
	private String companyEmail;
	private String url;
	private String resendUrl;
	private String cancelUrl;
	private String app;
	private String appStatus;
	private List<String> attribName;
	private List<String> attribValue;
	private String errorMessage;
	private String stackTraceMessage;
	private String bhgeBasePath;
	private String corpPwdLink;
	private String accessRequest;
	private List<BHGERegisterUserMultipleSSOData> multipleSSODetails;
	private String loginLink;
	private String registerLink;
	private String forgotPasswordLink;
	private String managerId;
	private String managerName;
	private String ManagerEmailId;
	private static final Logger LOG = Logger.getLogger(BHGERegisterEmailContext.class);
	private Class urlDecoder;
	private Class escapUtils;
	private Map<String, Object> messages;
	private String accessType;
	private String CustID;
	private String Name;

	public String getAccessType() {
		return accessType;
	}

	public void setAccessType(String accessType) {
		this.accessType = accessType;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getCustID() {
		return CustID;
	}

	public void setCustID(String custID) {
		CustID = custID;
	}	/**
	 * Retrieves a specific localized messageId from the template
	 *
	 * @param messageId
	 * @return the localized messageId
	 */
	public String getMessage(final String messageId)
	{
		return messages.get(messageId).toString();
	}

	public Map<String, Object> getMessages()
	{
		return messages;
	}

	public void setMessages(final Map<String, Object> messages)
	{
		this.messages = messages;
	}

	/**
	 * @return the errorMessage
	 */
	public String getErrorMessage()
	{
		return errorMessage;
	}

	/**
	 * @param errorMessage
	 *           the errorMessage to set
	 */
	public void setErrorMessage(final String errorMessage)
	{
		this.errorMessage = errorMessage;
	}

	/**
	 * @return the stackTraceMessage
	 */
	public String getStackTraceMessage()
	{
		return stackTraceMessage;
	}

	/**
	 * @param stackTraceMessage
	 *           the stackTraceMessage to set
	 */
	public void setStackTraceMessage(final String stackTraceMessage)
	{
		this.stackTraceMessage = stackTraceMessage;
	}




	/**
	 * @return the status
	 */
	public String getStatus()
	{
		return status;
	}

	/**
	 * @return the app
	 */
	public String getApp()
	{
		return app;
	}

	/**
	 * @param app
	 *           the app to set
	 */
	public void setApp(final String app)
	{
		this.app = app;
	}

	/**
	 * @return the appStatus
	 */
	public String getAppStatus()
	{
		return appStatus;
	}

	/**
	 * @param appStatus
	 *           the appStatus to set
	 */
	public void setAppStatus(final String appStatus)
	{
		this.appStatus = appStatus;
	}

	/**
	 * @param status
	 *           the status to set
	 */
	public void setStatus(final String status)
	{
		this.status = status;
	}

	/**
	 * @return the sso
	 */
	public String getSso()
	{
		return sso;
	}

	/**
	 * @param sso
	 *           the sso to set
	 */
	public void setSso(final String sso)
	{
		this.sso = sso;
	}

	/**
	 * @return the email
	 */
	public String getEmail()
	{
		return email;
	}

	/**
	 * @param email
	 *           the email to set
	 */
	public void setEmail(final String email)
	{
		this.email = email;
	}

	/**
	 * @return the userName
	 */
	public String getUserName()
	{
		return userName;
	}

	/**
	 * @param userName
	 *           the userName to set
	 */
	public void setUserName(final String userName)
	{
		this.userName = userName;
	}

	/**
	 * @return the subject
	 */
	public String getSubject()
	{
		return subject;
	}

	/**
	 * @param subject
	 *           the subject to set
	 */
	public void setSubject(final String subject)
	{
		this.subject = subject;
	}

	/**
	 * @return the toAddresses
	 */
	public List<String> getToAddresses()
	{
		return toAddresses;
	}

	/**
	 * @param toAddresses
	 *           the toAddresses to set
	 */
	public void setToAddresses(final List<String> toAddresses)
	{
		this.toAddresses = toAddresses;
	}

	/**
	 * @return the userMessageList
	 */
	public List<String> getUserMessageList()
	{
		return userMessageList;
	}

	/**
	 * @param userMessageList
	 *           the userMessageList to set
	 */
	public void setUserMessageList(final List<String> userMessageList)
	{
		this.userMessageList = userMessageList;
	}

	/**
	 * @return the supportMail
	 */
	public String getSupportMail()
	{
		return supportMail;
	}

	/**
	 * @param supportMail
	 *           the supportMail to set
	 */
	public void setSupportMail(final String supportMail)
	{
		this.supportMail = supportMail;
	}

	/**
	 * @return the companyEmail
	 */
	public String getCompanyEmail()
	{
		return companyEmail;
	}

	/**
	 * @param companyEmail
	 *           the companyEmail to set
	 */
	public void setCompanyEmail(final String companyEmail)
	{
		this.companyEmail = companyEmail;
	}

	/**
	 * @return the url
	 */
	public String getUrl()
	{
		return url;
	}

	/**
	 * @param url
	 *           the url to set
	 */
	public void setUrl(final String url)
	{
		this.url = url;
	}

	/**
	 * @return the resendUrl
	 */
	public String getResendUrl()
	{
		return resendUrl;
	}

	/**
	 * @param resendUrl
	 *           the resendUrl to set
	 */
	public void setResendUrl(final String resendUrl)
	{
		this.resendUrl = resendUrl;
	}

	/**
	 * @return the attribName
	 */
	public List<String> getAttribName()
	{
		return attribName;
	}

	/**
	 * @param attribName
	 *           the attribName to set
	 */
	public void setAttribName(final List<String> attribName)
	{
		this.attribName = attribName;
	}

	/**
	 * @return the attribValue
	 */
	public List<String> getAttribValue()
	{
		return attribValue;
	}

	/**
	 * @param attribValue
	 *           the attribValue to set
	 */
	public void setAttribValue(final List<String> attribValue)
	{
		this.attribValue = attribValue;
	}

	/**
	 * @return the bhgeBasePath
	 */
	public String getBhgeBasePath()
	{
		return bhgeBasePath;
	}

	/**
	 * @param bhgeBasePath
	 *           the bhgeBasePath to set
	 */
	public void setBhgeBasePath(final String bhgeBasePath)
	{
		this.bhgeBasePath = bhgeBasePath;
	}

	/**
	 * @return the cancelUrl
	 */
	public String getCancelUrl()
	{
		return cancelUrl;
	}

	/**
	 * @param cancelUrl
	 *           the cancelUrl to set
	 */
	public void setCancelUrl(final String cancelUrl)
	{
		this.cancelUrl = cancelUrl;
	}

	/**
	 * @return the corpPwdLink
	 */
	public String getCorpPwdLink()
	{
		return corpPwdLink;
	}

	/**
	 * @param corpPwdLink
	 *           the corpPwdLink to set
	 */
	public void setCorpPwdLink(final String corpPwdLink)
	{
		this.corpPwdLink = corpPwdLink;
	}

	/**
	 * @return the accessRequest
	 */
	public String getAccessRequest()
	{
		return accessRequest;
	}

	/**
	 * @param accessRequest
	 *           the accessRequest to set
	 */
	public void setAccessRequest(final String accessRequest)
	{
		this.accessRequest = accessRequest;
	}

	/**
	 * @return the multipleSSODetails
	 */
	public List<BHGERegisterUserMultipleSSOData> getMultipleSSODetails()
	{
		return multipleSSODetails;
	}

	/**
	 * @param multipleSSODetails
	 *           the multipleSSODetails to set
	 */
	public void setMultipleSSODetails(final List<BHGERegisterUserMultipleSSOData> multipleSSODetails)
	{
		this.multipleSSODetails = multipleSSODetails;
	}

	/**
	 * @return the loginLink
	 */
	public String getLoginLink()
	{
		return loginLink;
	}

	/**
	 * @param loginLink
	 *           the loginLink to set
	 */
	public void setLoginLink(final String loginLink)
	{
		this.loginLink = loginLink;
	}

	/**
	 * @return the registerLink
	 */
	public String getRegisterLink()
	{
		return registerLink;
	}

	/**
	 * @param registerLink
	 *           the registerLink to set
	 */
	public void setRegisterLink(final String registerLink)
	{
		this.registerLink = registerLink;
	}


	/**
	 * @return the urlDecoder
	 */
	public Class getUrlDecoder()
	{
		return urlDecoder;
	}

	/**
	 * @param urlDecoder
	 *           the urlDecoder to set
	 */
	public void setUrlDecoder(final Class urlDecoder)
	{
		this.urlDecoder = urlDecoder;
	}

	public String getForgotPasswordLink()
	{
		return forgotPasswordLink;
	}

	public void setForgotPasswordLink(final String forgotPasswordLink)
	{
		//final String salt = SecurePassword.getSalt(30);
		//final String secPassword = SecurePassword.generateSecurePassword(forgotPasswordLink, salt)
		try
		{
			final String secPassword = URLEncoder.encode(forgotPasswordLink, "UTF-8");
			this.forgotPasswordLink = secPassword;
		}
		catch (final UnsupportedEncodingException e)
		{
			LOG.error("Error in ForgotPasswordLink" + e);

		}
	}

	/**
	 * @return the managerId
	 */
	public String getManagerId()
	{
		return managerId;
	}

	/**
	 * @param managerId
	 *           the managerId to set
	 */
	public void setManagerId(final String managerId)
	{
		this.managerId = managerId;
	}

	/**
	 * @return the managerName
	 */
	public String getManagerName()
	{
		return managerName;
	}

	/**
	 * @param managerName
	 *           the managerName to set
	 */
	public void setManagerName(final String managerName)
	{
		this.managerName = managerName;
	}

	/**
	 * @return the managerEmailId
	 */
	public String getManagerEmailId()
	{
		return ManagerEmailId;
	}

	/**
	 * @param managerEmailId
	 *           the managerEmailId to set
	 */
	public void setManagerEmailId(final String managerEmailId)
	{
		ManagerEmailId = managerEmailId;
	}


	/**
	 * @return the escapUtils
	 */
	public Class getEscapUtils()
	{
		return escapUtils;
	}

	/**
	 * @param escapUtils
	 *           the escapUtils to set
	 */
	public void setEscapUtils(final Class escapUtils)
	{
		this.escapUtils = escapUtils;
	}

}