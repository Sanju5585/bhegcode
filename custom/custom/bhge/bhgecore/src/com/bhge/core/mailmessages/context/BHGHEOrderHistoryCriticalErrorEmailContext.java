package com.bhge.core.mailmessages.context;

public class BHGHEOrderHistoryCriticalErrorEmailContext
{

	private String errorDesc;

	private String errorTime;

	private String userEmail;

	private String emailSoldTo;

	private String orderType;

	private String subject;

	public String getSubject()
	{
		return subject;
	}

	public void setSubject(final String subject)
	{
		this.subject = subject;
	}

	public String getErrorDesc()
	{
		return errorDesc;
	}

	public void setErrorDesc(final String errorDesc)
	{
		this.errorDesc = errorDesc;
	}

	public String getErrorTime()
	{
		return errorTime;
	}

	public void setErrorTime(final String errorTime)
	{
		this.errorTime = errorTime;
	}

	public String getUserEmail()
	{
		return userEmail;
	}

	public void setUserEmail(final String userEmail)
	{
		this.userEmail = userEmail;
	}

	public String getEmailSoldTo()
	{
		return emailSoldTo;
	}

	public void setEmailSoldTo(final String emailSoldTo)
	{
		this.emailSoldTo = emailSoldTo;
	}

	public String getOrderType()
	{
		return orderType;
	}

	public void setOrderType(final String orderType)
	{
		this.orderType = orderType;
	}
}
