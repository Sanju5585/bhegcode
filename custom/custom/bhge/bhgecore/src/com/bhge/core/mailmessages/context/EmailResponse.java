/**
 *
 */
package com.bhge.core.mailmessages.context;

/**
 * @author 667142
 *
 */
public class EmailResponse
{
	private boolean status;
	private String emailid;

	/**
	 * @return the status
	 */
	/**
	 * @return the status
	 */
	public boolean isStatus()
	{
		return status;
	}

	/**
	 * @param status
	 *           the status to set
	 */
	public void setStatus(final boolean status)
	{
		this.status = status;
	}

	/**
	 * @return the emailid
	 */
	public String getEmailid()
	{
		return emailid;
	}

	/**
	 * @param emailid
	 *           the emailid to set
	 */
	public void setEmailid(final String emailid)
	{
		this.emailid = emailid;
	}

}
