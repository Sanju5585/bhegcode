/**
 *
 */
package com.bhge.core.mailmessages.context;

/**
 * @author 1689456
 *
 */
public class BHGEExceptionEmailContext
{
	private String userName;
	private String sso;
	private String email;
	private String url;
	private String mediaBaseUrl;
	private String nodeId;
	private String customerNumber;
	private String customerName;
	private String requestUrl;
	private String siteLanguage;
	private String browser;
	private String exceptionMessage;
	private String exceptionTime;
	private String environment;

	/**
	 * @return the environment
	 */
	public String getEnvironment()
	{
		return environment;
	}

	/**
	 * @param environment
	 *           the environment to set
	 */
	public void setEnvironment(String environment)
	{
		this.environment = environment;
	}

	/**
	 * @return the exceptionTime
	 */
	public String getExceptionTime()
	{
		return exceptionTime;
	}

	/**
	 * @param exceptionTime
	 *           the exceptionTime to set
	 */
	public void setExceptionTime(String exceptionTime)
	{
		this.exceptionTime = exceptionTime;
	}

	/**
	 * @return the nodeId
	 */
	public String getNodeId()
	{
		return nodeId;
	}

	/**
	 * @param nodeId
	 *           the nodeId to set
	 */
	public void setNodeId(String nodeId)
	{
		this.nodeId = nodeId;
	}

	/**
	 * @return the customerNumber
	 */
	public String getCustomerNumber()
	{
		return customerNumber;
	}

	/**
	 * @param customerNumber
	 *           the customerNumber to set
	 */
	public void setCustomerNumber(String customerNumber)
	{
		this.customerNumber = customerNumber;
	}

	/**
	 * @return the customerName
	 */
	public String getCustomerName()
	{
		return customerName;
	}

	/**
	 * @param customerName
	 *           the customerName to set
	 */
	public void setCustomerName(String customerName)
	{
		this.customerName = customerName;
	}

	/**
	 * @return the requestUrl
	 */
	public String getRequestUrl()
	{
		return requestUrl;
	}

	/**
	 * @param requestUrl
	 *           the requestUrl to set
	 */
	public void setRequestUrl(String requestUrl)
	{
		this.requestUrl = requestUrl;
	}

	/**
	 * @return the siteLanguage
	 */
	public String getSiteLanguage()
	{
		return siteLanguage;
	}

	/**
	 * @param siteLanguage
	 *           the siteLanguage to set
	 */
	public void setSiteLanguage(String siteLanguage)
	{
		this.siteLanguage = siteLanguage;
	}

	/**
	 * @return the browser
	 */
	public String getBrowser()
	{
		return browser;
	}

	/**
	 * @param browser
	 *           the browser to set
	 */
	public void setBrowser(String browser)
	{
		this.browser = browser;
	}

	/**
	 * @return the exceptionMessage
	 */
	public String getExceptionMessage()
	{
		return exceptionMessage;
	}

	/**
	 * @param exceptionMessage
	 *           the exceptionMessage to set
	 */
	public void setExceptionMessage(String exceptionMessage)
	{
		this.exceptionMessage = exceptionMessage;
	}



	/**
	 * @return the mediaBaseUrl
	 */
	public String getMediaBaseUrl()
	{
		return mediaBaseUrl;
	}

	/**
	 * @param mediaBaseUrl
	 *           the mediaBaseUrl to set
	 */
	public void setMediaBaseUrl(String mediaBaseUrl)
	{
		this.mediaBaseUrl = mediaBaseUrl;
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
	public void setUserName(String userName)
	{
		this.userName = userName;
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
	public void setSso(String sso)
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
	public void setEmail(String email)
	{
		this.email = email;
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
	public void setUrl(String url)
	{
		this.url = url;
	}

}
