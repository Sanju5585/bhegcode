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
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.commerceservices.jalo.process.GEEdgeShippingAddressProcess GEEdgeShippingAddressProcess}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeShippingAddressProcess extends StoreFrontProcess
{
	/** Qualifier of the <code>GEEdgeShippingAddressProcess.companyName</code> attribute **/
	public static final String COMPANYNAME = "companyName";
	/** Qualifier of the <code>GEEdgeShippingAddressProcess.address1</code> attribute **/
	public static final String ADDRESS1 = "address1";
	/** Qualifier of the <code>GEEdgeShippingAddressProcess.address2</code> attribute **/
	public static final String ADDRESS2 = "address2";
	/** Qualifier of the <code>GEEdgeShippingAddressProcess.deliveryPoint</code> attribute **/
	public static final String DELIVERYPOINT = "deliveryPoint";
	/** Qualifier of the <code>GEEdgeShippingAddressProcess.stateName</code> attribute **/
	public static final String STATENAME = "stateName";
	/** Qualifier of the <code>GEEdgeShippingAddressProcess.country</code> attribute **/
	public static final String COUNTRY = "country";
	/** Qualifier of the <code>GEEdgeShippingAddressProcess.zipCode</code> attribute **/
	public static final String ZIPCODE = "zipCode";
	/** Qualifier of the <code>GEEdgeShippingAddressProcess.email</code> attribute **/
	public static final String EMAIL = "email";
	/** Qualifier of the <code>GEEdgeShippingAddressProcess.fromEmail</code> attribute **/
	public static final String FROMEMAIL = "fromEmail";
	/** Qualifier of the <code>GEEdgeShippingAddressProcess.fromName</code> attribute **/
	public static final String FROMNAME = "fromName";
	/** Qualifier of the <code>GEEdgeShippingAddressProcess.emailSubject</code> attribute **/
	public static final String EMAILSUBJECT = "emailSubject";
	/** Qualifier of the <code>GEEdgeShippingAddressProcess.customerName</code> attribute **/
	public static final String CUSTOMERNAME = "customerName";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(StoreFrontProcess.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(COMPANYNAME, AttributeMode.INITIAL);
		tmp.put(ADDRESS1, AttributeMode.INITIAL);
		tmp.put(ADDRESS2, AttributeMode.INITIAL);
		tmp.put(DELIVERYPOINT, AttributeMode.INITIAL);
		tmp.put(STATENAME, AttributeMode.INITIAL);
		tmp.put(COUNTRY, AttributeMode.INITIAL);
		tmp.put(ZIPCODE, AttributeMode.INITIAL);
		tmp.put(EMAIL, AttributeMode.INITIAL);
		tmp.put(FROMEMAIL, AttributeMode.INITIAL);
		tmp.put(FROMNAME, AttributeMode.INITIAL);
		tmp.put(EMAILSUBJECT, AttributeMode.INITIAL);
		tmp.put(CUSTOMERNAME, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.address1</code> attribute.
	 * @return the address1
	 */
	public String getAddress1(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ADDRESS1);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.address1</code> attribute.
	 * @return the address1
	 */
	public String getAddress1()
	{
		return getAddress1( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.address1</code> attribute. 
	 * @param value the address1
	 */
	public void setAddress1(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ADDRESS1,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.address1</code> attribute. 
	 * @param value the address1
	 */
	public void setAddress1(final String value)
	{
		setAddress1( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.address2</code> attribute.
	 * @return the address2
	 */
	public String getAddress2(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ADDRESS2);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.address2</code> attribute.
	 * @return the address2
	 */
	public String getAddress2()
	{
		return getAddress2( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.address2</code> attribute. 
	 * @param value the address2
	 */
	public void setAddress2(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ADDRESS2,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.address2</code> attribute. 
	 * @param value the address2
	 */
	public void setAddress2(final String value)
	{
		setAddress2( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.companyName</code> attribute.
	 * @return the companyName
	 */
	public String getCompanyName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COMPANYNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.companyName</code> attribute.
	 * @return the companyName
	 */
	public String getCompanyName()
	{
		return getCompanyName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.companyName</code> attribute. 
	 * @param value the companyName
	 */
	public void setCompanyName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COMPANYNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.companyName</code> attribute. 
	 * @param value the companyName
	 */
	public void setCompanyName(final String value)
	{
		setCompanyName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.country</code> attribute.
	 * @return the country
	 */
	public String getCountry(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COUNTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.country</code> attribute.
	 * @return the country
	 */
	public String getCountry()
	{
		return getCountry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.country</code> attribute. 
	 * @param value the country
	 */
	public void setCountry(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COUNTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.country</code> attribute. 
	 * @param value the country
	 */
	public void setCountry(final String value)
	{
		setCountry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.customerName</code> attribute.
	 * @return the customerName
	 */
	public String getCustomerName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CUSTOMERNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.customerName</code> attribute.
	 * @return the customerName
	 */
	public String getCustomerName()
	{
		return getCustomerName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.customerName</code> attribute. 
	 * @param value the customerName
	 */
	public void setCustomerName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CUSTOMERNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.customerName</code> attribute. 
	 * @param value the customerName
	 */
	public void setCustomerName(final String value)
	{
		setCustomerName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.deliveryPoint</code> attribute.
	 * @return the deliveryPoint
	 */
	public String getDeliveryPoint(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DELIVERYPOINT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.deliveryPoint</code> attribute.
	 * @return the deliveryPoint
	 */
	public String getDeliveryPoint()
	{
		return getDeliveryPoint( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.deliveryPoint</code> attribute. 
	 * @param value the deliveryPoint
	 */
	public void setDeliveryPoint(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DELIVERYPOINT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.deliveryPoint</code> attribute. 
	 * @param value the deliveryPoint
	 */
	public void setDeliveryPoint(final String value)
	{
		setDeliveryPoint( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.email</code> attribute.
	 * @return the email
	 */
	public String getEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.email</code> attribute.
	 * @return the email
	 */
	public String getEmail()
	{
		return getEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.email</code> attribute. 
	 * @param value the email
	 */
	public void setEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.email</code> attribute. 
	 * @param value the email
	 */
	public void setEmail(final String value)
	{
		setEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.emailSubject</code> attribute.
	 * @return the emailSubject
	 */
	public String getEmailSubject(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAILSUBJECT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.emailSubject</code> attribute.
	 * @return the emailSubject
	 */
	public String getEmailSubject()
	{
		return getEmailSubject( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.emailSubject</code> attribute. 
	 * @param value the emailSubject
	 */
	public void setEmailSubject(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAILSUBJECT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.emailSubject</code> attribute. 
	 * @param value the emailSubject
	 */
	public void setEmailSubject(final String value)
	{
		setEmailSubject( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.fromEmail</code> attribute.
	 * @return the fromEmail
	 */
	public String getFromEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, FROMEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.fromEmail</code> attribute.
	 * @return the fromEmail
	 */
	public String getFromEmail()
	{
		return getFromEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.fromEmail</code> attribute. 
	 * @param value the fromEmail
	 */
	public void setFromEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, FROMEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.fromEmail</code> attribute. 
	 * @param value the fromEmail
	 */
	public void setFromEmail(final String value)
	{
		setFromEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.fromName</code> attribute.
	 * @return the fromName
	 */
	public String getFromName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, FROMNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.fromName</code> attribute.
	 * @return the fromName
	 */
	public String getFromName()
	{
		return getFromName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.fromName</code> attribute. 
	 * @param value the fromName
	 */
	public void setFromName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, FROMNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.fromName</code> attribute. 
	 * @param value the fromName
	 */
	public void setFromName(final String value)
	{
		setFromName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.stateName</code> attribute.
	 * @return the stateName
	 */
	public String getStateName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, STATENAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.stateName</code> attribute.
	 * @return the stateName
	 */
	public String getStateName()
	{
		return getStateName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.stateName</code> attribute. 
	 * @param value the stateName
	 */
	public void setStateName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, STATENAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.stateName</code> attribute. 
	 * @param value the stateName
	 */
	public void setStateName(final String value)
	{
		setStateName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.zipCode</code> attribute.
	 * @return the zipCode
	 */
	public String getZipCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ZIPCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeShippingAddressProcess.zipCode</code> attribute.
	 * @return the zipCode
	 */
	public String getZipCode()
	{
		return getZipCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.zipCode</code> attribute. 
	 * @param value the zipCode
	 */
	public void setZipCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ZIPCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeShippingAddressProcess.zipCode</code> attribute. 
	 * @param value the zipCode
	 */
	public void setZipCode(final String value)
	{
		setZipCode( getSession().getSessionContext(), value );
	}
	
}
