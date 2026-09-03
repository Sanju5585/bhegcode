/**
 *
 */
package com.bhge.core.calportal.service.marketo;

import com.fasterxml.jackson.annotation.JsonProperty;


public class Input
{
	private String firstName;
	private String lastName;
	private String company;
	private String title;
	private String email;
	private String phone;
//	private String addressLine1;
//	private String addressLine2;
	@JsonProperty("GE_HQ_Country__c")
	private String country;
	private String state;
	private String city;
	private String postalCode;
	
	private String leadSource;
	@JsonProperty("GE_HQ_LeadSrcDtls__c")
	private String leadSourceDetails;
	@JsonProperty("Inquiry_Type__c")
	private String inquiryTypec;
	private String apiFormName;

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
	 * @return the company
	 */
	public String getCompany()
	{
		return company;
	}

	/**
	 * @param company
	 *           the company to set
	 */
	public void setCompany(final String company)
	{
		this.company = company;
	}

	/**
	 * @return the title
	 */
	public String getTitle()
	{
		return title;
	}

	/**
	 * @param title
	 *           the title to set
	 */
	public void setTitle(final String title)
	{
		this.title = title;
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
	 * @return the phone
	 */
	public String getPhone()
	{
		return phone;
	}

	/**
	 * @param phone
	 *           the phone to set
	 */
	public void setPhone(final String phone)
	{
		this.phone = phone;
	}

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

	
	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	/**
	 * @return the city
	 */
	public String getCity()
	{
		return city;
	}

	/**
	 * @param city
	 *           the city to set
	 */
	public void setCity(final String city)
	{
		this.city = city;
	}

	/**
	 * @return the postalCode
	 */
	public String getPostalCode()
	{
		return postalCode;
	}

	/**
	 * @param postalCode
	 *           the postalCode to set
	 */
	public void setPostalCode(final String postalCode)
	{
		this.postalCode = postalCode;
	}

	
	

	
	/**
	 * @return the leadSource
	 */
	public String getLeadSource()
	{
		return leadSource;
	}

	/**
	 * @param leadSource
	 *           the leadSource to set
	 */
	public void setLeadSource(final String leadSource)
	{
		this.leadSource = leadSource;
	}

	/**
	 * @return the leadSourceDetails
	 */
	public String getLeadSourceDetails()
	{
		return leadSourceDetails;
	}

	/**
	 * @param leadSourceDetails
	 *           the leadSourceDetails to set
	 */
	public void setLeadSourceDetails(final String leadSourceDetails)
	{
		this.leadSourceDetails = leadSourceDetails;
	}

	/**
	 * @return the inquiryTypec
	 */
	public String getInquiryTypec()
	{
		return inquiryTypec;
	}

	/**
	 * @param inquiryTypec
	 *           the inquiryTypec to set
	 */
	public void setInquiryTypec(final String inquiryTypec)
	{
		this.inquiryTypec = inquiryTypec;
	}

	/**
	 * @return the apiFormName
	 */
	public String getApiFormName()
	{
		return apiFormName;
	}

	/**
	 * @param apiformname
	 *           the apiFormName to set
	 */
	public void setApiFormName(final String apiFormName)
	{
		this.apiFormName = apiFormName;
	}
}
