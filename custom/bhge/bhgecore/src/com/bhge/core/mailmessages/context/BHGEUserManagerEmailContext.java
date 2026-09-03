/**
 *
 */
package com.bhge.core.mailmessages.context;

import java.util.List;


/**
 * @author 1121219
 *
 */
public class BHGEUserManagerEmailContext
{
	private String subject;
	private List<String> toAddresses;
	private String userName;
	private String status;
	private String sso;
	private String email;
	private String requestorName;
	private String requestorEmail;
	private String userManagerName;
	private String accesstype;
	private String currentAccessType;

	/**
	 * @return the currentAccessType
	 */
	public String getCurrentAccessType()
	{
		return currentAccessType;
	}

	/**
	 * @param currentAccessType
	 *           the currentAccessType to set
	 */
	public void setCurrentAccessType(final String currentAccessType)
	{
		this.currentAccessType = currentAccessType;
	}

	private String userManagerLink;
	private String flag;

	/**
	 * @return the requestorName
	 */
	public String getRequestorName()
	{
		return requestorName;
	}

	/**
	 * @param requestorName
	 *           the requestorName to set
	 */
	public void setRequestorName(final String requestorName)
	{
		this.requestorName = requestorName;
	}

	/**
	 * @return the requestorEmail
	 */
	public String getRequestorEmail()
	{
		return requestorEmail;
	}

	/**
	 * @param requestorEmail
	 *           the requestorEmail to set
	 */
	public void setRequestorEmail(final String requestorEmail)
	{
		this.requestorEmail = requestorEmail;
	}

	/**
	 * @return the userManagerName
	 */
	public String getUserManagerName()
	{
		return userManagerName;
	}

	/**
	 * @param userManagerName
	 *           the userManagerName to set
	 */
	public void setUserManagerName(final String userManagerName)
	{
		this.userManagerName = userManagerName;
	}

	/**
	 * @return the accesstype
	 */
	public String getAccesstype()
	{
		return accesstype;
	}

	/**
	 * @param accesstype
	 *           the accesstype to set
	 */
	public void setAccesstype(final String accesstype)
	{
		this.accesstype = accesstype;
	}

	/**
	 * @return the userManagerLink
	 */
	public String getUserManagerLink()
	{
		return userManagerLink;
	}

	/**
	 * @param userManagerLink
	 *           the userManagerLink to set
	 */
	public void setUserManagerLink(final String userManagerLink)
	{
		this.userManagerLink = userManagerLink;
	}

	/**
	 * @return the flag
	 */
	public String getFlag()
	{
		return flag;
	}

	/**
	 * @param flag
	 *           the flag to set
	 */
	public void setFlag(final String flag)
	{
		this.flag = flag;
	}

	/**
	 * @return the status
	 */
	public String getStatus()
	{
		return status;
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

}
