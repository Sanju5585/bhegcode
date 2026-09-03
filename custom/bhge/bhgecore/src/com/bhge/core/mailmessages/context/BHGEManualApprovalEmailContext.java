/**
 *
 */
package com.bhge.core.mailmessages.context;

import java.util.Map;


/**
 * @author 1121219
 *
 */
public class BHGEManualApprovalEmailContext
{
	private String email;
	private String toAddress;
	private String sso;
	private String csrGroup;
	private String userName;
	private String processedBy;
	private String comments;
	private String loggedInCsrName;
	private String supportMail;
	private String BhgeBasePath;
	private Map<String, Object> messages;

	/**
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
	 * @return the companyMail
	 */
	public String getCompanyMail()
	{
		return companyMail;
	}

	/**
	 * @param companyMail
	 *           the companyMail to set
	 */
	public void setCompanyMail(final String companyMail)
	{
		this.companyMail = companyMail;
	}

	private String companyMail;

	/**
	 * @return the comments
	 */
	public String getComments()
	{
		return comments;
	}

	/**
	 * @param comments
	 *           the comments to set
	 */
	public void setComments(final String comments)
	{
		this.comments = comments;
	}

	/**
	 * @return the loggedInCsrName
	 */
	public String getLoggedInCsrName()
	{
		return loggedInCsrName;
	}

	/**
	 * @param loggedInCsrName
	 *           the loggedInCsrName to set
	 */
	public void setLoggedInCsrName(final String loggedInCsrName)
	{
		this.loggedInCsrName = loggedInCsrName;
	}

	/**
	 * @return the processedBy
	 */
	public String getProcessedBy()
	{
		return processedBy;
	}

	/**
	 * @param processedBy
	 *           the processedBy to set
	 */
	public void setProcessedBy(final String processedBy)
	{
		this.processedBy = processedBy;
	}

	/**
	 * @return the reason
	 */
	public String getReason()
	{
		return reason;
	}

	/**
	 * @param reason
	 *           the reason to set
	 */
	public void setReason(final String reason)
	{
		this.reason = reason;
	}

	private String reason;


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
	 * @return the toAddress
	 */
	public String getToAddress()
	{
		return toAddress;
	}

	/**
	 * @param toAddress
	 *           the toAddress to set
	 */
	public void setToAddress(final String toAddress)
	{
		this.toAddress = toAddress;
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

	private String subject;

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
	 * @return the csrGroup
	 */
	public String getCsrGroup()
	{
		return csrGroup;
	}

	/**
	 * @param csrGroup
	 *           the csrGroup to set
	 */
	public void setCsrGroup(final String csrGroup)
	{
		this.csrGroup = csrGroup;
	}

	/**
	 * @return the bhgeBasePath
	 */
	public String getBhgeBasePath()
	{
		return BhgeBasePath;
	}

	/**
	 * @param bhgeBasePath
	 *           the bhgeBasePath to set
	 */
	public void setBhgeBasePath(final String bhgeBasePath)
	{
		BhgeBasePath = bhgeBasePath;
	}


}
