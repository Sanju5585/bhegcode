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
import de.hybris.platform.commerceservices.jalo.process.StoreFrontProcess;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.media.Media;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.commerceservices.jalo.process.GuestUserCalportalDataSheetPDFEmailProcess GuestUserCalportalDataSheetPDFEmailProcess}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGuestUserCalportalDataSheetPDFEmailProcess extends StoreFrontProcess
{
	/** Qualifier of the <code>GuestUserCalportalDataSheetPDFEmailProcess.firstName</code> attribute **/
	public static final String FIRSTNAME = "firstName";
	/** Qualifier of the <code>GuestUserCalportalDataSheetPDFEmailProcess.lastName</code> attribute **/
	public static final String LASTNAME = "lastName";
	/** Qualifier of the <code>GuestUserCalportalDataSheetPDFEmailProcess.title</code> attribute **/
	public static final String TITLE = "title";
	/** Qualifier of the <code>GuestUserCalportalDataSheetPDFEmailProcess.organization</code> attribute **/
	public static final String ORGANIZATION = "organization";
	/** Qualifier of the <code>GuestUserCalportalDataSheetPDFEmailProcess.streetAddress</code> attribute **/
	public static final String STREETADDRESS = "streetAddress";
	/** Qualifier of the <code>GuestUserCalportalDataSheetPDFEmailProcess.address</code> attribute **/
	public static final String ADDRESS = "address";
	/** Qualifier of the <code>GuestUserCalportalDataSheetPDFEmailProcess.zipCode</code> attribute **/
	public static final String ZIPCODE = "zipCode";
	/** Qualifier of the <code>GuestUserCalportalDataSheetPDFEmailProcess.email</code> attribute **/
	public static final String EMAIL = "email";
	/** Qualifier of the <code>GuestUserCalportalDataSheetPDFEmailProcess.city</code> attribute **/
	public static final String CITY = "city";
	/** Qualifier of the <code>GuestUserCalportalDataSheetPDFEmailProcess.addressState</code> attribute **/
	public static final String ADDRESSSTATE = "addressState";
	/** Qualifier of the <code>GuestUserCalportalDataSheetPDFEmailProcess.country</code> attribute **/
	public static final String COUNTRY = "country";
	/** Qualifier of the <code>GuestUserCalportalDataSheetPDFEmailProcess.workPhone</code> attribute **/
	public static final String WORKPHONE = "workPhone";
	/** Qualifier of the <code>GuestUserCalportalDataSheetPDFEmailProcess.caliberationPDF</code> attribute **/
	public static final String CALIBERATIONPDF = "caliberationPDF";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(StoreFrontProcess.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(FIRSTNAME, AttributeMode.INITIAL);
		tmp.put(LASTNAME, AttributeMode.INITIAL);
		tmp.put(TITLE, AttributeMode.INITIAL);
		tmp.put(ORGANIZATION, AttributeMode.INITIAL);
		tmp.put(STREETADDRESS, AttributeMode.INITIAL);
		tmp.put(ADDRESS, AttributeMode.INITIAL);
		tmp.put(ZIPCODE, AttributeMode.INITIAL);
		tmp.put(EMAIL, AttributeMode.INITIAL);
		tmp.put(CITY, AttributeMode.INITIAL);
		tmp.put(ADDRESSSTATE, AttributeMode.INITIAL);
		tmp.put(COUNTRY, AttributeMode.INITIAL);
		tmp.put(WORKPHONE, AttributeMode.INITIAL);
		tmp.put(CALIBERATIONPDF, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.address</code> attribute.
	 * @return the address
	 */
	public String getAddress(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.address</code> attribute.
	 * @return the address
	 */
	public String getAddress()
	{
		return getAddress( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.address</code> attribute. 
	 * @param value the address
	 */
	public void setAddress(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.address</code> attribute. 
	 * @param value the address
	 */
	public void setAddress(final String value)
	{
		setAddress( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.addressState</code> attribute.
	 * @return the addressState
	 */
	public String getAddressState(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ADDRESSSTATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.addressState</code> attribute.
	 * @return the addressState
	 */
	public String getAddressState()
	{
		return getAddressState( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.addressState</code> attribute. 
	 * @param value the addressState
	 */
	public void setAddressState(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ADDRESSSTATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.addressState</code> attribute. 
	 * @param value the addressState
	 */
	public void setAddressState(final String value)
	{
		setAddressState( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.caliberationPDF</code> attribute.
	 * @return the caliberationPDF - hazard Info Doc
	 */
	public Media getCaliberationPDF(final SessionContext ctx)
	{
		return (Media)getProperty( ctx, CALIBERATIONPDF);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.caliberationPDF</code> attribute.
	 * @return the caliberationPDF - hazard Info Doc
	 */
	public Media getCaliberationPDF()
	{
		return getCaliberationPDF( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.caliberationPDF</code> attribute. 
	 * @param value the caliberationPDF - hazard Info Doc
	 */
	public void setCaliberationPDF(final SessionContext ctx, final Media value)
	{
		setProperty(ctx, CALIBERATIONPDF,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.caliberationPDF</code> attribute. 
	 * @param value the caliberationPDF - hazard Info Doc
	 */
	public void setCaliberationPDF(final Media value)
	{
		setCaliberationPDF( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.city</code> attribute.
	 * @return the city
	 */
	public String getCity(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CITY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.city</code> attribute.
	 * @return the city
	 */
	public String getCity()
	{
		return getCity( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.city</code> attribute. 
	 * @param value the city
	 */
	public void setCity(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CITY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.city</code> attribute. 
	 * @param value the city
	 */
	public void setCity(final String value)
	{
		setCity( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.country</code> attribute.
	 * @return the country
	 */
	public String getCountry(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COUNTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.country</code> attribute.
	 * @return the country
	 */
	public String getCountry()
	{
		return getCountry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.country</code> attribute. 
	 * @param value the country
	 */
	public void setCountry(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COUNTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.country</code> attribute. 
	 * @param value the country
	 */
	public void setCountry(final String value)
	{
		setCountry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.email</code> attribute.
	 * @return the email
	 */
	public String getEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.email</code> attribute.
	 * @return the email
	 */
	public String getEmail()
	{
		return getEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.email</code> attribute. 
	 * @param value the email
	 */
	public void setEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.email</code> attribute. 
	 * @param value the email
	 */
	public void setEmail(final String value)
	{
		setEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.firstName</code> attribute.
	 * @return the firstName
	 */
	public String getFirstName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, FIRSTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.firstName</code> attribute.
	 * @return the firstName
	 */
	public String getFirstName()
	{
		return getFirstName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.firstName</code> attribute. 
	 * @param value the firstName
	 */
	public void setFirstName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, FIRSTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.firstName</code> attribute. 
	 * @param value the firstName
	 */
	public void setFirstName(final String value)
	{
		setFirstName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.lastName</code> attribute.
	 * @return the lastName
	 */
	public String getLastName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, LASTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.lastName</code> attribute.
	 * @return the lastName
	 */
	public String getLastName()
	{
		return getLastName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.lastName</code> attribute. 
	 * @param value the lastName
	 */
	public void setLastName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, LASTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.lastName</code> attribute. 
	 * @param value the lastName
	 */
	public void setLastName(final String value)
	{
		setLastName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.organization</code> attribute.
	 * @return the organization
	 */
	public String getOrganization(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ORGANIZATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.organization</code> attribute.
	 * @return the organization
	 */
	public String getOrganization()
	{
		return getOrganization( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.organization</code> attribute. 
	 * @param value the organization
	 */
	public void setOrganization(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ORGANIZATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.organization</code> attribute. 
	 * @param value the organization
	 */
	public void setOrganization(final String value)
	{
		setOrganization( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.streetAddress</code> attribute.
	 * @return the streetAddress
	 */
	public String getStreetAddress(final SessionContext ctx)
	{
		return (String)getProperty( ctx, STREETADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.streetAddress</code> attribute.
	 * @return the streetAddress
	 */
	public String getStreetAddress()
	{
		return getStreetAddress( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.streetAddress</code> attribute. 
	 * @param value the streetAddress
	 */
	public void setStreetAddress(final SessionContext ctx, final String value)
	{
		setProperty(ctx, STREETADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.streetAddress</code> attribute. 
	 * @param value the streetAddress
	 */
	public void setStreetAddress(final String value)
	{
		setStreetAddress( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.title</code> attribute.
	 * @return the title
	 */
	public String getTitle(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TITLE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.title</code> attribute.
	 * @return the title
	 */
	public String getTitle()
	{
		return getTitle( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.title</code> attribute. 
	 * @param value the title
	 */
	public void setTitle(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TITLE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.title</code> attribute. 
	 * @param value the title
	 */
	public void setTitle(final String value)
	{
		setTitle( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.workPhone</code> attribute.
	 * @return the workPhone
	 */
	public String getWorkPhone(final SessionContext ctx)
	{
		return (String)getProperty( ctx, WORKPHONE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.workPhone</code> attribute.
	 * @return the workPhone
	 */
	public String getWorkPhone()
	{
		return getWorkPhone( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.workPhone</code> attribute. 
	 * @param value the workPhone
	 */
	public void setWorkPhone(final SessionContext ctx, final String value)
	{
		setProperty(ctx, WORKPHONE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.workPhone</code> attribute. 
	 * @param value the workPhone
	 */
	public void setWorkPhone(final String value)
	{
		setWorkPhone( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.zipCode</code> attribute.
	 * @return the zipCode
	 */
	public String getZipCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ZIPCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.zipCode</code> attribute.
	 * @return the zipCode
	 */
	public String getZipCode()
	{
		return getZipCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.zipCode</code> attribute. 
	 * @param value the zipCode
	 */
	public void setZipCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ZIPCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GuestUserCalportalDataSheetPDFEmailProcess.zipCode</code> attribute. 
	 * @param value the zipCode
	 */
	public void setZipCode(final String value)
	{
		setZipCode( getSession().getSessionContext(), value );
	}
	
}
