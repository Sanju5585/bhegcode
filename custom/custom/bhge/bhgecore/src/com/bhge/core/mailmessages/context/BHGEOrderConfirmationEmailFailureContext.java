/**
 *
 */
package com.bhge.core.mailmessages.context;


public class BHGEOrderConfirmationEmailFailureContext
{
	private String errorDesc;

	private String errorTime;

	private String userEmail;

	private String emailSoldTo;

	private String orderType;

	private String subject;

	private String mediaBaseUrl;

	private String orderId;

	private String userSSO;


	public String getUserSSO() {
		return userSSO;
	}

	public void setUserSSO(String userSSO) {
		this.userSSO = userSSO;
	}

	public String getErrorDesc()
	{
		return errorDesc;
	}

	/**
	 * @param errorDesc the errorDesc to set
	 */
	public void setErrorDesc(String errorDesc)
	{
		this.errorDesc = errorDesc;
	}

	/**
	 * @return the errorTime
	 */
	public String getErrorTime()
	{
		return errorTime;
	}

	/**
	 * @param errorTime the errorTime to set
	 */
	public void setErrorTime(String errorTime)
	{
		this.errorTime = errorTime;
	}

	/**
	 * @return the userEmail
	 */
	public String getUserEmail()
	{
		return userEmail;
	}

	/**
	 * @param userEmail the userEmail to set
	 */
	public void setUserEmail(String userEmail)
	{
		this.userEmail = userEmail;
	}

	/**
	 * @return the emailSoldTo
	 */
	public String getEmailSoldTo()
	{
		return emailSoldTo;
	}

	/**
	 * @param emailSoldTo the emailSoldTo to set
	 */
	public void setEmailSoldTo(String emailSoldTo)
	{
		this.emailSoldTo = emailSoldTo;
	}

	/**
	 * @return the orderType
	 */
	public String getOrderType()
	{
		return orderType;
	}

	/**
	 * @param orderType the orderType to set
	 */
	public void setOrderType(String orderType)
	{
		this.orderType = orderType;
	}

	/**
	 * @return the subject
	 */
	public String getSubject()
	{
		return subject;
	}

	/**
	 * @param subject the subject to set
	 */
	public void setSubject(String subject)
	{
		this.subject = subject;
	}

	/**
	 * @return the mediaBaseUrl
	 */
	public String getMediaBaseUrl()
	{
		return mediaBaseUrl;
	}

	/**
	 * @param mediaBaseUrl the mediaBaseUrl to set
	 */
	public void setMediaBaseUrl(String mediaBaseUrl)
	{
		this.mediaBaseUrl = mediaBaseUrl;
	}


	/**
	 * @return the orderId
	 */
	public String getOrderId()
	{
		return orderId;
	}

	/**
	 * @param orderId
	 *           the orderId to set
	 */
	public void setOrderId(String orderId)
	{
		this.orderId = orderId;
	}
}
