/**
 *
 */
package com.bhge.core.scpi.rfc.registration;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;


/**
 * @author 212722447
 *
 */

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
public class BHGEZSoldtoValidationRequestItem
{


	private List<BHGEZSoldtoValidationRequestItem> items;

	@JacksonXmlProperty(localName = "item")
	@JacksonXmlElementWrapper(useWrapping = false)
	public List<BHGEZSoldtoValidationRequestItem> getItems()
	{
		this.items = items == null ? new ArrayList<BHGEZSoldtoValidationRequestItem>() : items;
		return items;
	}

	public void setItems(final List<BHGEZSoldtoValidationRequestItem> items)
	{
		this.items = items;
	}


	//@JacksonXmlProperty(localName = "CUST_NO")
	@JsonProperty(value = "CUST_NO")
	private String custNo;
	@JacksonXmlProperty(localName = "CONTACT_ID")
	private String contactId;
	@JacksonXmlProperty(localName = "EMAIL_ID")
	private String emailId;
	@JacksonXmlProperty(localName = "SSO")
	private String sso;
	@JacksonXmlProperty(localName = "TYPE")
	private String type;
	@JacksonXmlProperty(localName = "ID")
	private String id;
	@JacksonXmlProperty(localName = "NUMBER")
	private String number;
	@JacksonXmlProperty(localName = "MESSAGE")
	private String message;
	@JacksonXmlProperty(localName = "LOG_NO")
	private String logNo;
	@JacksonXmlProperty(localName = "MESSAGE_V1")
	private String messageV1;
	@JacksonXmlProperty(localName = "LOG_MSG_NO")
	private String logMsgNo;
	@JacksonXmlProperty(localName = "MESSAGE_V2")
	private String messageV2;
	@JacksonXmlProperty(localName = "COUNTRY")
	private String country;
	@JacksonXmlProperty(localName = "REGION")
	private String region;
	@JacksonXmlProperty(localName = "F_NAME")
	private String firstName;
	@JacksonXmlProperty(localName = "L_NAME")
	private String lastName;
	@JacksonXmlProperty(localName = "I_FLAG")
	private String insertFlag;
	@JacksonXmlProperty(localName = "SALES_ORG")
	private String salesOrg;
	@JacksonXmlProperty(localName = "DISTRIBUTION")
	private String distribution;
	@JacksonXmlProperty(localName = "SRC_SYSTEM")
	private String srcSystem;
	@JacksonXmlProperty(localName = "USER_EVENT")
	private String userEvent;
	@JacksonXmlProperty(localName = "ATTRIBUTE5")
	private String attribute5;
			
	/**
	 * @return the attribute5
	 */
	public String getAttribute5()
	{
		return attribute5;
	}

	/**
	 * @param attribute5
	 *           the attribute5 to set
	 */
	public void setAttribute5(final String attribute5)
	{
		this.attribute5 = attribute5;
	}
	
	/**
	 * @return the srcSystem
	 */
	public String getSrcSystem()
	{
		return srcSystem;
	}

	/**
	 * @param srcSystem the srcSystem to set
	 */
	public void setSrcSystem(String srcSystem)
	{
		this.srcSystem = srcSystem;
	}

	/**
	 * @return the userEvent
	 */
	public String getUserEvent()
	{
		return userEvent;
	}

	/**
	 * @param userEvent the userEvent to set
	 */
	public void setUserEvent(String userEvent)
	{
		this.userEvent = userEvent;
	}

	/**
	 * @return the salesOrg
	 */
	public String getSalesOrg()
	{
		return salesOrg;
	}

	/**
	 * @param salesOrg the salesOrg to set
	 */
	public void setSalesOrg(String salesOrg)
	{
		this.salesOrg = salesOrg;
	}

	/**
	 * @return the distribution
	 */
	public String getDistribution()
	{
		return distribution;
	}

	/**
	 * @param distribution the distribution to set
	 */
	public void setDistribution(String distribution)
	{
		this.distribution = distribution;
	}

	/**
	 * @return the division
	 */
	public String getDivision()
	{
		return division;
	}

	/**
	 * @param division the division to set
	 */
	public void setDivision(String division)
	{
		this.division = division;
	}


	@JacksonXmlProperty(localName = "DIVISION")
	private String division;


	/**
	 * @return the firstName
	 */
	public String getFirstName()
	{
		return firstName;
	}

	/**
	 * @param firstName
	 *           the firstName to set
	 */
	public void setFirstName(final String firstName)
	{
		this.firstName = firstName;
	}

	/**
	 * @return the lastName
	 */
	public String getLastName()
	{
		return lastName;
	}

	/**
	 * @param lastName
	 *           the lastName to set
	 */
	public void setLastName(final String lastName)
	{
		this.lastName = lastName;
	}

	/**
	 * @return the insertFlag
	 */
	public String getInsertFlag()
	{
		return insertFlag;
	}

	/**
	 * @param insertFlag
	 *           the insertFlag to set
	 */
	public void setInsertFlag(final String insertFlag)
	{
		this.insertFlag = insertFlag;
	}

	/**
	 * @return the serviceIndicator
	 */
	public String getServiceIndicator()
	{
		return serviceIndicator;
	}

	/**
	 * @param serviceIndicator
	 *           the serviceIndicator to set
	 */
	public void setServiceIndicator(final String serviceIndicator)
	{
		this.serviceIndicator = serviceIndicator;
	}


	@JacksonXmlProperty(localName = "IS_SERVICE")
	private String serviceIndicator;

	/**
	 * @return the country
	 */
	public String getCountry()
	{
		return country;
	}

	/**
	 * @param country
	 *           the country to set
	 */
	public void setCountry(final String country)
	{
		this.country = country;
	}

	/**
	 * @return the region
	 */
	public String getRegion()
	{
		return region;
	}

	/**
	 * @param region
	 *           the region to set
	 */
	public void setRegion(final String region)
	{
		this.region = region;
	}

	/**
	 * @return the custNo
	 */
	public String getCustNo()
	{
		return custNo;
	}

	/**
	 * @param custNo
	 *           the custNo to set
	 */
	public void setCustNo(final String custNo)
	{
		this.custNo = custNo;
	}

	/**
	 * @return the contactId
	 */
	public String getContactId()
	{
		return contactId;
	}

	/**
	 * @param contactId
	 *           the contactId to set
	 */
	public void setContactId(final String contactId)
	{
		this.contactId = contactId;
	}

	/**
	 * @return the emailId
	 */
	public String getEmailId()
	{
		return emailId;
	}

	/**
	 * @param emailId
	 *           the emailId to set
	 */
	public void setEmailId(final String emailId)
	{
		this.emailId = emailId;
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
	 * @return the type
	 */
	public String getType()
	{
		return type;
	}

	/**
	 * @param type
	 *           the type to set
	 */
	public void setType(final String type)
	{
		this.type = type;
	}

	/**
	 * @return the id
	 */
	public String getId()
	{
		return id;
	}

	/**
	 * @param id
	 *           the id to set
	 */
	public void setId(final String id)
	{
		this.id = id;
	}

	/**
	 * @return the number
	 */
	public String getNumber()
	{
		return number;
	}

	/**
	 * @param number
	 *           the number to set
	 */
	public void setNumber(final String number)
	{
		this.number = number;
	}

	/**
	 * @return the message
	 */
	public String getMessage()
	{
		return message;
	}

	/**
	 * @param message
	 *           the message to set
	 */
	public void setMessage(final String message)
	{
		this.message = message;
	}

	/**
	 * @return the logNo
	 */
	public String getLogNo()
	{
		return logNo;
	}

	/**
	 * @param logNo
	 *           the logNo to set
	 */
	public void setLogNo(final String logNo)
	{
		this.logNo = logNo;
	}

	/**
	 * @return the messageV1
	 */
	public String getMessageV1()
	{
		return messageV1;
	}

	/**
	 * @param messageV1
	 *           the messageV1 to set
	 */
	public void setMessageV1(final String messageV1)
	{
		this.messageV1 = messageV1;
	}

	/**
	 * @return the logMsgNo
	 */
	public String getLogMsgNo()
	{
		return logMsgNo;
	}

	/**
	 * @param logMsgNo
	 *           the logMsgNo to set
	 */
	public void setLogMsgNo(final String logMsgNo)
	{
		this.logMsgNo = logMsgNo;
	}

	/**
	 * @return the messageV2
	 */
	public String getMessageV2()
	{
		return messageV2;
	}

	/**
	 * @param messageV2
	 *           the messageV2 to set
	 */
	public void setMessageV2(final String messageV2)
	{
		this.messageV2 = messageV2;
	}

	/**
	 * @return the messageV3
	 */
	public String getMessageV3()
	{
		return messageV3;
	}

	/**
	 * @param messageV3
	 *           the messageV3 to set
	 */
	public void setMessageV3(final String messageV3)
	{
		this.messageV3 = messageV3;
	}

	/**
	 * @return the messageV4
	 */
	public String getMessageV4()
	{
		return messageV4;
	}

	/**
	 * @param messageV4
	 *           the messageV4 to set
	 */
	public void setMessageV4(final String messageV4)
	{
		this.messageV4 = messageV4;
	}

	/**
	 * @return the parameter
	 */
	public String getParameter()
	{
		return parameter;
	}

	/**
	 * @param parameter
	 *           the parameter to set
	 */
	public void setParameter(final String parameter)
	{
		this.parameter = parameter;
	}

	/**
	 * @return the row
	 */
	public String getRow()
	{
		return row;
	}

	/**
	 * @param row
	 *           the row to set
	 */
	public void setRow(final String row)
	{
		this.row = row;
	}

	/**
	 * @return the field
	 */
	public String getField()
	{
		return field;
	}

	/**
	 * @param field
	 *           the field to set
	 */
	public void setField(final String field)
	{
		this.field = field;
	}

	/**
	 * @return the system
	 */
	public String getSystem()
	{
		return system;
	}

	/**
	 * @param system
	 *           the system to set
	 */
	public void setSystem(final String system)
	{
		this.system = system;
	}


	@JacksonXmlProperty(localName = "MESSAGE_V3")
	private String messageV3;
	@JacksonXmlProperty(localName = "MESSAGE_V4")
	private String messageV4;
	@JacksonXmlProperty(localName = "PARAMETER")
	private String parameter;
	@JacksonXmlProperty(localName = "ROW")
	private String row;
	@JacksonXmlProperty(localName = "FIELD")
	private String field;
	@JacksonXmlProperty(localName = "SYSTEM")
	private String system;
}
