/**
 *
 */
package com.bhge.core.mailmessages.context;

import java.util.Map;


/**
 * @author 667142
 *
 */
public class BHGEOrderEnquiryEmailContext
{

	private String userName;
	private String emailIds;
	private String businessName;
	private String orderNumber;
	private String poNumber;
	private String datePlaced;
	private String enquiryType;
	private String inquiryDetails;
	private String subject;
	private String soldToId;
	private String loggedInUser;
	private String lineData;
	private String bhgeBasePath;
	private String productLine;
	private String googleCaptcha;
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
	 * @return the googleCaptcha
	 */
	public String getGoogleCaptcha()
	{
		return googleCaptcha;
	}

	/**
	 * @param googleCaptcha
	 *           the googleCaptcha to set
	 */
	public void setGoogleCaptcha(final String googleCaptcha)
	{
		this.googleCaptcha = googleCaptcha;
	}

	/**
	 * @return the lineData
	 */
	public String getLineData()
	{
		return lineData;
	}

	/**
	 * @param lineData
	 *           the lineData to set
	 */
	public void setLineData(final String lineData)
	{
		this.lineData = lineData;
	}

	/**
	 * @return the loggedInUser
	 */
	public String getLoggedInUser()
	{
		return loggedInUser;
	}

	/**
	 * @param loggedInUser
	 *           the loggedInUser to set
	 */
	public void setLoggedInUser(final String loggedInUser)
	{
		this.loggedInUser = loggedInUser;
	}

	/**
	 * @return the soldToId
	 */
	public String getSoldToId()
	{
		return soldToId;
	}

	/**
	 * @param soldToId
	 *           the soldToId to set
	 */
	public void setSoldToId(final String soldToId)
	{
		this.soldToId = soldToId;
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
	 * @return the emailIds
	 */
	public String getEmailIds()
	{
		return emailIds;
	}

	/**
	 * @param emailIds
	 *           the emailIds to set
	 */
	public void setEmailIds(final String emailIds)
	{
		this.emailIds = emailIds;
	}

	/**
	 * @return the businessName
	 */
	public String getBusinessName()
	{
		return businessName;
	}

	/**
	 * @param businessName
	 *           the businessName to set
	 */
	public void setBusinessName(final String businessName)
	{
		this.businessName = businessName;
	}

	/**
	 * @return the orderNumber
	 */
	public String getOrderNumber()
	{
		return orderNumber;
	}

	/**
	 * @param orderNumber
	 *           the orderNumber to set
	 */
	public void setOrderNumber(final String orderNumber)
	{
		this.orderNumber = orderNumber;
	}

	/**
	 * @return the poNumber
	 */
	public String getPoNumber()
	{
		return poNumber;
	}

	/**
	 * @param poNumber
	 *           the poNumber to set
	 */
	public void setPoNumber(final String poNumber)
	{
		this.poNumber = poNumber;
	}

	/**
	 * @return the datePlaced
	 */
	public String getDatePlaced()
	{
		return datePlaced;
	}

	/**
	 * @param datePlaced
	 *           the datePlaced to set
	 */
	public void setDatePlaced(final String datePlaced)
	{
		this.datePlaced = datePlaced;
	}

	/**
	 * @return the enquiryType
	 */
	public String getEnquiryType()
	{
		return enquiryType;
	}

	/**
	 * @param enquiryType
	 *           the enquiryType to set
	 */
	public void setEnquiryType(final String enquiryType)
	{
		this.enquiryType = enquiryType;
	}

	/**
	 * @return the inquiryDetails
	 */
	public String getInquiryDetails()
	{
		return inquiryDetails;
	}

	/**
	 * @param inquiryDetails
	 *           the inquiryDetails to set
	 */
	public void setInquiryDetails(final String inquiryDetails)
	{
		this.inquiryDetails = inquiryDetails;
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
	 * @return the productLine
	 */
	public String getProductLine()
	{
		return productLine;
	}

	/**
	 * @param productLine
	 *           the productLine to set
	 */
	public void setProductLine(final String productLine)
	{
		this.productLine = productLine;
	}

}
