/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 *  
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.commerceservices.jalo.process;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.commerceservices.jalo.process.QuoteProcess;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.Country;
import de.hybris.platform.jalo.c2l.Region;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.commerceservices.jalo.process.BHGEQuoteProcess BHGEQuoteProcess}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEQuoteProcess extends QuoteProcess
{
	/** Qualifier of the <code>BHGEQuoteProcess.emailID</code> attribute **/
	public static final String EMAILID = "emailID";
	/** Qualifier of the <code>BHGEQuoteProcess.emailSubject</code> attribute **/
	public static final String EMAILSUBJECT = "emailSubject";
	/** Qualifier of the <code>BHGEQuoteProcess.emailBody</code> attribute **/
	public static final String EMAILBODY = "emailBody";
	/** Qualifier of the <code>BHGEQuoteProcess.userName</code> attribute **/
	public static final String USERNAME = "userName";
	/** Qualifier of the <code>BHGEQuoteProcess.company</code> attribute **/
	public static final String COMPANY = "company";
	/** Qualifier of the <code>BHGEQuoteProcess.contactNumber</code> attribute **/
	public static final String CONTACTNUMBER = "contactNumber";
	/** Qualifier of the <code>BHGEQuoteProcess.emailAddress</code> attribute **/
	public static final String EMAILADDRESS = "emailAddress";
	/** Qualifier of the <code>BHGEQuoteProcess.address1</code> attribute **/
	public static final String ADDRESS1 = "address1";
	/** Qualifier of the <code>BHGEQuoteProcess.address2</code> attribute **/
	public static final String ADDRESS2 = "address2";
	/** Qualifier of the <code>BHGEQuoteProcess.country</code> attribute **/
	public static final String COUNTRY = "country";
	/** Qualifier of the <code>BHGEQuoteProcess.region</code> attribute **/
	public static final String REGION = "region";
	/** Qualifier of the <code>BHGEQuoteProcess.city</code> attribute **/
	public static final String CITY = "city";
	/** Qualifier of the <code>BHGEQuoteProcess.postalCode</code> attribute **/
	public static final String POSTALCODE = "postalCode";
	/** Qualifier of the <code>BHGEQuoteProcess.emailtype</code> attribute **/
	public static final String EMAILTYPE = "emailtype";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(QuoteProcess.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(EMAILID, AttributeMode.INITIAL);
		tmp.put(EMAILSUBJECT, AttributeMode.INITIAL);
		tmp.put(EMAILBODY, AttributeMode.INITIAL);
		tmp.put(USERNAME, AttributeMode.INITIAL);
		tmp.put(COMPANY, AttributeMode.INITIAL);
		tmp.put(CONTACTNUMBER, AttributeMode.INITIAL);
		tmp.put(EMAILADDRESS, AttributeMode.INITIAL);
		tmp.put(ADDRESS1, AttributeMode.INITIAL);
		tmp.put(ADDRESS2, AttributeMode.INITIAL);
		tmp.put(COUNTRY, AttributeMode.INITIAL);
		tmp.put(REGION, AttributeMode.INITIAL);
		tmp.put(CITY, AttributeMode.INITIAL);
		tmp.put(POSTALCODE, AttributeMode.INITIAL);
		tmp.put(EMAILTYPE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.address1</code> attribute.
	 * @return the address1
	 */
	public String getAddress1(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ADDRESS1);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.address1</code> attribute.
	 * @return the address1
	 */
	public String getAddress1()
	{
		return getAddress1( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.address1</code> attribute. 
	 * @param value the address1
	 */
	public void setAddress1(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ADDRESS1,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.address1</code> attribute. 
	 * @param value the address1
	 */
	public void setAddress1(final String value)
	{
		setAddress1( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.address2</code> attribute.
	 * @return the address2
	 */
	public String getAddress2(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ADDRESS2);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.address2</code> attribute.
	 * @return the address2
	 */
	public String getAddress2()
	{
		return getAddress2( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.address2</code> attribute. 
	 * @param value the address2
	 */
	public void setAddress2(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ADDRESS2,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.address2</code> attribute. 
	 * @param value the address2
	 */
	public void setAddress2(final String value)
	{
		setAddress2( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.city</code> attribute.
	 * @return the city
	 */
	public String getCity(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CITY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.city</code> attribute.
	 * @return the city
	 */
	public String getCity()
	{
		return getCity( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.city</code> attribute. 
	 * @param value the city
	 */
	public void setCity(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CITY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.city</code> attribute. 
	 * @param value the city
	 */
	public void setCity(final String value)
	{
		setCity( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.company</code> attribute.
	 * @return the company
	 */
	public String getCompany(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COMPANY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.company</code> attribute.
	 * @return the company
	 */
	public String getCompany()
	{
		return getCompany( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.company</code> attribute. 
	 * @param value the company
	 */
	public void setCompany(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COMPANY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.company</code> attribute. 
	 * @param value the company
	 */
	public void setCompany(final String value)
	{
		setCompany( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.contactNumber</code> attribute.
	 * @return the contactNumber
	 */
	public String getContactNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONTACTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.contactNumber</code> attribute.
	 * @return the contactNumber
	 */
	public String getContactNumber()
	{
		return getContactNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.contactNumber</code> attribute. 
	 * @param value the contactNumber
	 */
	public void setContactNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONTACTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.contactNumber</code> attribute. 
	 * @param value the contactNumber
	 */
	public void setContactNumber(final String value)
	{
		setContactNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.country</code> attribute.
	 * @return the country - Value
	 */
	public Country getCountry(final SessionContext ctx)
	{
		return (Country)getProperty( ctx, COUNTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.country</code> attribute.
	 * @return the country - Value
	 */
	public Country getCountry()
	{
		return getCountry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.country</code> attribute. 
	 * @param value the country - Value
	 */
	public void setCountry(final SessionContext ctx, final Country value)
	{
		setProperty(ctx, COUNTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.country</code> attribute. 
	 * @param value the country - Value
	 */
	public void setCountry(final Country value)
	{
		setCountry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.emailAddress</code> attribute.
	 * @return the emailAddress
	 */
	public String getEmailAddress(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAILADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.emailAddress</code> attribute.
	 * @return the emailAddress
	 */
	public String getEmailAddress()
	{
		return getEmailAddress( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.emailAddress</code> attribute. 
	 * @param value the emailAddress
	 */
	public void setEmailAddress(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAILADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.emailAddress</code> attribute. 
	 * @param value the emailAddress
	 */
	public void setEmailAddress(final String value)
	{
		setEmailAddress( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.emailBody</code> attribute.
	 * @return the emailBody
	 */
	public String getEmailBody(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAILBODY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.emailBody</code> attribute.
	 * @return the emailBody
	 */
	public String getEmailBody()
	{
		return getEmailBody( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.emailBody</code> attribute. 
	 * @param value the emailBody
	 */
	public void setEmailBody(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAILBODY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.emailBody</code> attribute. 
	 * @param value the emailBody
	 */
	public void setEmailBody(final String value)
	{
		setEmailBody( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.emailID</code> attribute.
	 * @return the emailID
	 */
	public String getEmailID(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAILID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.emailID</code> attribute.
	 * @return the emailID
	 */
	public String getEmailID()
	{
		return getEmailID( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.emailID</code> attribute. 
	 * @param value the emailID
	 */
	public void setEmailID(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAILID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.emailID</code> attribute. 
	 * @param value the emailID
	 */
	public void setEmailID(final String value)
	{
		setEmailID( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.emailSubject</code> attribute.
	 * @return the emailSubject
	 */
	public String getEmailSubject(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAILSUBJECT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.emailSubject</code> attribute.
	 * @return the emailSubject
	 */
	public String getEmailSubject()
	{
		return getEmailSubject( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.emailSubject</code> attribute. 
	 * @param value the emailSubject
	 */
	public void setEmailSubject(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAILSUBJECT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.emailSubject</code> attribute. 
	 * @param value the emailSubject
	 */
	public void setEmailSubject(final String value)
	{
		setEmailSubject( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.emailtype</code> attribute.
	 * @return the emailtype
	 */
	public String getEmailtype(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAILTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.emailtype</code> attribute.
	 * @return the emailtype
	 */
	public String getEmailtype()
	{
		return getEmailtype( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.emailtype</code> attribute. 
	 * @param value the emailtype
	 */
	public void setEmailtype(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAILTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.emailtype</code> attribute. 
	 * @param value the emailtype
	 */
	public void setEmailtype(final String value)
	{
		setEmailtype( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.postalCode</code> attribute.
	 * @return the postalCode
	 */
	public String getPostalCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, POSTALCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.postalCode</code> attribute.
	 * @return the postalCode
	 */
	public String getPostalCode()
	{
		return getPostalCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.postalCode</code> attribute. 
	 * @param value the postalCode
	 */
	public void setPostalCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, POSTALCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.postalCode</code> attribute. 
	 * @param value the postalCode
	 */
	public void setPostalCode(final String value)
	{
		setPostalCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.region</code> attribute.
	 * @return the region - Region for Quote page
	 */
	public Region getRegion(final SessionContext ctx)
	{
		return (Region)getProperty( ctx, REGION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.region</code> attribute.
	 * @return the region - Region for Quote page
	 */
	public Region getRegion()
	{
		return getRegion( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.region</code> attribute. 
	 * @param value the region - Region for Quote page
	 */
	public void setRegion(final SessionContext ctx, final Region value)
	{
		setProperty(ctx, REGION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.region</code> attribute. 
	 * @param value the region - Region for Quote page
	 */
	public void setRegion(final Region value)
	{
		setRegion( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.userName</code> attribute.
	 * @return the userName
	 */
	public String getUserName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, USERNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEQuoteProcess.userName</code> attribute.
	 * @return the userName
	 */
	public String getUserName()
	{
		return getUserName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.userName</code> attribute. 
	 * @param value the userName
	 */
	public void setUserName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, USERNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEQuoteProcess.userName</code> attribute. 
	 * @param value the userName
	 */
	public void setUserName(final String value)
	{
		setUserName( getSession().getSessionContext(), value );
	}
	
}
