/**
 *
 */
package com.bhge.core.mailmessages.context;

/**
 * @author 1273158
 *
 */
public class UserProfileEmailContext
{
	private String requestorName;
	private String requestorEmail;
	private String requestorComment;
	private String userManagerName;
	private String userManagerEmail;
	private String approvedAccessList;
	private String pendingAccessList;
	private String bhgeBasePath;

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
	 * @return the requestorComment
	 */
	public String getRequestorComment()
	{
		return requestorComment;
	}

	/**
	 * @param requestorComment
	 *           the requestorComment to set
	 */
	public void setRequestorComment(final String requestorComment)
	{
		this.requestorComment = requestorComment;
	}

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
	 * @return the userManagerEmail
	 */
	public String getUserManagerEmail()
	{
		return userManagerEmail;
	}

	/**
	 * @param userManagerEmail
	 *           the userManagerEmail to set
	 */
	public void setUserManagerEmail(final String userManagerEmail)
	{
		this.userManagerEmail = userManagerEmail;
	}

	/**
	 * @return the approvedAccessList
	 */
	public String getApprovedAccessList()
	{
		return approvedAccessList;
	}

	/**
	 * @param approvedAccessList
	 *           the approvedAccessList to set
	 */
	public void setApprovedAccessList(final String approvedAccessList)
	{
		this.approvedAccessList = approvedAccessList;
	}

	/**
	 * @return the pendingAccessList
	 */
	public String getPendingAccessList()
	{
		return pendingAccessList;
	}

	/**
	 * @param pendingAccessList
	 *           the pendingAccessList to set
	 */
	public void setPendingAccessList(final String pendingAccessList)
	{
		this.pendingAccessList = pendingAccessList;
	}
}
