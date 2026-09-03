/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.media.Media;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEContactUs}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEContactUs extends GenericItem
{
	/** Qualifier of the <code>BHGEContactUs.firstName</code> attribute **/
	public static final String FIRSTNAME = "firstName";
	/** Qualifier of the <code>BHGEContactUs.lastName</code> attribute **/
	public static final String LASTNAME = "lastName";
	/** Qualifier of the <code>BHGEContactUs.companyName</code> attribute **/
	public static final String COMPANYNAME = "companyName";
	/** Qualifier of the <code>BHGEContactUs.jobRole</code> attribute **/
	public static final String JOBROLE = "jobRole";
	/** Qualifier of the <code>BHGEContactUs.companyEmailAddress</code> attribute **/
	public static final String COMPANYEMAILADDRESS = "companyEmailAddress";
	/** Qualifier of the <code>BHGEContactUs.phoneNum</code> attribute **/
	public static final String PHONENUM = "phoneNum";
	/** Qualifier of the <code>BHGEContactUs.country</code> attribute **/
	public static final String COUNTRY = "country";
	/** Qualifier of the <code>BHGEContactUs.state</code> attribute **/
	public static final String STATE = "state";
	/** Qualifier of the <code>BHGEContactUs.city</code> attribute **/
	public static final String CITY = "city";
	/** Qualifier of the <code>BHGEContactUs.zipCode</code> attribute **/
	public static final String ZIPCODE = "zipCode";
	/** Qualifier of the <code>BHGEContactUs.areaOfInterest</code> attribute **/
	public static final String AREAOFINTEREST = "areaOfInterest";
	/** Qualifier of the <code>BHGEContactUs.contactUsNotes</code> attribute **/
	public static final String CONTACTUSNOTES = "contactUsNotes";
	/** Qualifier of the <code>BHGEContactUs.communicationsPreference</code> attribute **/
	public static final String COMMUNICATIONSPREFERENCE = "communicationsPreference";
	/** Qualifier of the <code>BHGEContactUs.productLine</code> attribute **/
	public static final String PRODUCTLINE = "productLine";
	/** Qualifier of the <code>BHGEContactUs.requestType</code> attribute **/
	public static final String REQUESTTYPE = "requestType";
	/** Qualifier of the <code>BHGEContactUs.subProductLine</code> attribute **/
	public static final String SUBPRODUCTLINE = "subProductLine";
	/** Qualifier of the <code>BHGEContactUs.rmaNumber</code> attribute **/
	public static final String RMANUMBER = "rmaNumber";
	/** Qualifier of the <code>BHGEContactUs.orderNumber</code> attribute **/
	public static final String ORDERNUMBER = "orderNumber";
	/** Qualifier of the <code>BHGEContactUs.contactUsMedia</code> attribute **/
	public static final String CONTACTUSMEDIA = "contactUsMedia";
	/** Qualifier of the <code>BHGEContactUs.contactUsEmail</code> attribute **/
	public static final String CONTACTUSEMAIL = "contactUsEmail";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(FIRSTNAME, AttributeMode.INITIAL);
		tmp.put(LASTNAME, AttributeMode.INITIAL);
		tmp.put(COMPANYNAME, AttributeMode.INITIAL);
		tmp.put(JOBROLE, AttributeMode.INITIAL);
		tmp.put(COMPANYEMAILADDRESS, AttributeMode.INITIAL);
		tmp.put(PHONENUM, AttributeMode.INITIAL);
		tmp.put(COUNTRY, AttributeMode.INITIAL);
		tmp.put(STATE, AttributeMode.INITIAL);
		tmp.put(CITY, AttributeMode.INITIAL);
		tmp.put(ZIPCODE, AttributeMode.INITIAL);
		tmp.put(AREAOFINTEREST, AttributeMode.INITIAL);
		tmp.put(CONTACTUSNOTES, AttributeMode.INITIAL);
		tmp.put(COMMUNICATIONSPREFERENCE, AttributeMode.INITIAL);
		tmp.put(PRODUCTLINE, AttributeMode.INITIAL);
		tmp.put(REQUESTTYPE, AttributeMode.INITIAL);
		tmp.put(SUBPRODUCTLINE, AttributeMode.INITIAL);
		tmp.put(RMANUMBER, AttributeMode.INITIAL);
		tmp.put(ORDERNUMBER, AttributeMode.INITIAL);
		tmp.put(CONTACTUSMEDIA, AttributeMode.INITIAL);
		tmp.put(CONTACTUSEMAIL, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.areaOfInterest</code> attribute.
	 * @return the areaOfInterest - Zip Code
	 */
	public String getAreaOfInterest(final SessionContext ctx)
	{
		return (String)getProperty( ctx, AREAOFINTEREST);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.areaOfInterest</code> attribute.
	 * @return the areaOfInterest - Zip Code
	 */
	public String getAreaOfInterest()
	{
		return getAreaOfInterest( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.areaOfInterest</code> attribute. 
	 * @param value the areaOfInterest - Zip Code
	 */
	public void setAreaOfInterest(final SessionContext ctx, final String value)
	{
		setProperty(ctx, AREAOFINTEREST,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.areaOfInterest</code> attribute. 
	 * @param value the areaOfInterest - Zip Code
	 */
	public void setAreaOfInterest(final String value)
	{
		setAreaOfInterest( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.city</code> attribute.
	 * @return the city - City
	 */
	public String getCity(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CITY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.city</code> attribute.
	 * @return the city - City
	 */
	public String getCity()
	{
		return getCity( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.city</code> attribute. 
	 * @param value the city - City
	 */
	public void setCity(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CITY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.city</code> attribute. 
	 * @param value the city - City
	 */
	public void setCity(final String value)
	{
		setCity( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.communicationsPreference</code> attribute.
	 * @return the communicationsPreference - Communication preference opt in
	 */
	public Boolean isCommunicationsPreference(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, COMMUNICATIONSPREFERENCE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.communicationsPreference</code> attribute.
	 * @return the communicationsPreference - Communication preference opt in
	 */
	public Boolean isCommunicationsPreference()
	{
		return isCommunicationsPreference( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.communicationsPreference</code> attribute. 
	 * @return the communicationsPreference - Communication preference opt in
	 */
	public boolean isCommunicationsPreferenceAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isCommunicationsPreference( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.communicationsPreference</code> attribute. 
	 * @return the communicationsPreference - Communication preference opt in
	 */
	public boolean isCommunicationsPreferenceAsPrimitive()
	{
		return isCommunicationsPreferenceAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.communicationsPreference</code> attribute. 
	 * @param value the communicationsPreference - Communication preference opt in
	 */
	public void setCommunicationsPreference(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, COMMUNICATIONSPREFERENCE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.communicationsPreference</code> attribute. 
	 * @param value the communicationsPreference - Communication preference opt in
	 */
	public void setCommunicationsPreference(final Boolean value)
	{
		setCommunicationsPreference( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.communicationsPreference</code> attribute. 
	 * @param value the communicationsPreference - Communication preference opt in
	 */
	public void setCommunicationsPreference(final SessionContext ctx, final boolean value)
	{
		setCommunicationsPreference( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.communicationsPreference</code> attribute. 
	 * @param value the communicationsPreference - Communication preference opt in
	 */
	public void setCommunicationsPreference(final boolean value)
	{
		setCommunicationsPreference( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.companyEmailAddress</code> attribute.
	 * @return the companyEmailAddress - Company Email Address
	 */
	public String getCompanyEmailAddress(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COMPANYEMAILADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.companyEmailAddress</code> attribute.
	 * @return the companyEmailAddress - Company Email Address
	 */
	public String getCompanyEmailAddress()
	{
		return getCompanyEmailAddress( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.companyEmailAddress</code> attribute. 
	 * @param value the companyEmailAddress - Company Email Address
	 */
	public void setCompanyEmailAddress(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COMPANYEMAILADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.companyEmailAddress</code> attribute. 
	 * @param value the companyEmailAddress - Company Email Address
	 */
	public void setCompanyEmailAddress(final String value)
	{
		setCompanyEmailAddress( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.companyName</code> attribute.
	 * @return the companyName - Region for contact us page
	 */
	public String getCompanyName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COMPANYNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.companyName</code> attribute.
	 * @return the companyName - Region for contact us page
	 */
	public String getCompanyName()
	{
		return getCompanyName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.companyName</code> attribute. 
	 * @param value the companyName - Region for contact us page
	 */
	public void setCompanyName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COMPANYNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.companyName</code> attribute. 
	 * @param value the companyName - Region for contact us page
	 */
	public void setCompanyName(final String value)
	{
		setCompanyName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.contactUsEmail</code> attribute.
	 * @return the contactUsEmail - This field will hold the corresponding contact us email id
	 */
	public String getContactUsEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONTACTUSEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.contactUsEmail</code> attribute.
	 * @return the contactUsEmail - This field will hold the corresponding contact us email id
	 */
	public String getContactUsEmail()
	{
		return getContactUsEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.contactUsEmail</code> attribute. 
	 * @param value the contactUsEmail - This field will hold the corresponding contact us email id
	 */
	public void setContactUsEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONTACTUSEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.contactUsEmail</code> attribute. 
	 * @param value the contactUsEmail - This field will hold the corresponding contact us email id
	 */
	public void setContactUsEmail(final String value)
	{
		setContactUsEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.contactUsMedia</code> attribute.
	 * @return the contactUsMedia - contact Us Media
	 */
	public Media getContactUsMedia(final SessionContext ctx)
	{
		return (Media)getProperty( ctx, CONTACTUSMEDIA);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.contactUsMedia</code> attribute.
	 * @return the contactUsMedia - contact Us Media
	 */
	public Media getContactUsMedia()
	{
		return getContactUsMedia( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.contactUsMedia</code> attribute. 
	 * @param value the contactUsMedia - contact Us Media
	 */
	public void setContactUsMedia(final SessionContext ctx, final Media value)
	{
		setProperty(ctx, CONTACTUSMEDIA,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.contactUsMedia</code> attribute. 
	 * @param value the contactUsMedia - contact Us Media
	 */
	public void setContactUsMedia(final Media value)
	{
		setContactUsMedia( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.contactUsNotes</code> attribute.
	 * @return the contactUsNotes - Contact Us Request Notes
	 */
	public String getContactUsNotes(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONTACTUSNOTES);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.contactUsNotes</code> attribute.
	 * @return the contactUsNotes - Contact Us Request Notes
	 */
	public String getContactUsNotes()
	{
		return getContactUsNotes( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.contactUsNotes</code> attribute. 
	 * @param value the contactUsNotes - Contact Us Request Notes
	 */
	public void setContactUsNotes(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONTACTUSNOTES,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.contactUsNotes</code> attribute. 
	 * @param value the contactUsNotes - Contact Us Request Notes
	 */
	public void setContactUsNotes(final String value)
	{
		setContactUsNotes( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.country</code> attribute.
	 * @return the country - Value
	 */
	public String getCountry(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COUNTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.country</code> attribute.
	 * @return the country - Value
	 */
	public String getCountry()
	{
		return getCountry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.country</code> attribute. 
	 * @param value the country - Value
	 */
	public void setCountry(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COUNTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.country</code> attribute. 
	 * @param value the country - Value
	 */
	public void setCountry(final String value)
	{
		setCountry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.firstName</code> attribute.
	 * @return the firstName - First Name
	 */
	public String getFirstName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, FIRSTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.firstName</code> attribute.
	 * @return the firstName - First Name
	 */
	public String getFirstName()
	{
		return getFirstName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.firstName</code> attribute. 
	 * @param value the firstName - First Name
	 */
	public void setFirstName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, FIRSTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.firstName</code> attribute. 
	 * @param value the firstName - First Name
	 */
	public void setFirstName(final String value)
	{
		setFirstName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.jobRole</code> attribute.
	 * @return the jobRole - Job Role
	 */
	public String getJobRole(final SessionContext ctx)
	{
		return (String)getProperty( ctx, JOBROLE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.jobRole</code> attribute.
	 * @return the jobRole - Job Role
	 */
	public String getJobRole()
	{
		return getJobRole( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.jobRole</code> attribute. 
	 * @param value the jobRole - Job Role
	 */
	public void setJobRole(final SessionContext ctx, final String value)
	{
		setProperty(ctx, JOBROLE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.jobRole</code> attribute. 
	 * @param value the jobRole - Job Role
	 */
	public void setJobRole(final String value)
	{
		setJobRole( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.lastName</code> attribute.
	 * @return the lastName - Last Name
	 */
	public String getLastName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, LASTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.lastName</code> attribute.
	 * @return the lastName - Last Name
	 */
	public String getLastName()
	{
		return getLastName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.lastName</code> attribute. 
	 * @param value the lastName - Last Name
	 */
	public void setLastName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, LASTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.lastName</code> attribute. 
	 * @param value the lastName - Last Name
	 */
	public void setLastName(final String value)
	{
		setLastName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.orderNumber</code> attribute.
	 * @return the orderNumber
	 */
	public String getOrderNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ORDERNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.orderNumber</code> attribute.
	 * @return the orderNumber
	 */
	public String getOrderNumber()
	{
		return getOrderNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.orderNumber</code> attribute. 
	 * @param value the orderNumber
	 */
	public void setOrderNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ORDERNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.orderNumber</code> attribute. 
	 * @param value the orderNumber
	 */
	public void setOrderNumber(final String value)
	{
		setOrderNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.phoneNum</code> attribute.
	 * @return the phoneNum - Phone Number
	 */
	public String getPhoneNum(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PHONENUM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.phoneNum</code> attribute.
	 * @return the phoneNum - Phone Number
	 */
	public String getPhoneNum()
	{
		return getPhoneNum( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.phoneNum</code> attribute. 
	 * @param value the phoneNum - Phone Number
	 */
	public void setPhoneNum(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PHONENUM,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.phoneNum</code> attribute. 
	 * @param value the phoneNum - Phone Number
	 */
	public void setPhoneNum(final String value)
	{
		setPhoneNum( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.productLine</code> attribute.
	 * @return the productLine - Product Line
	 */
	public String getProductLine(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PRODUCTLINE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.productLine</code> attribute.
	 * @return the productLine - Product Line
	 */
	public String getProductLine()
	{
		return getProductLine( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.productLine</code> attribute. 
	 * @param value the productLine - Product Line
	 */
	public void setProductLine(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PRODUCTLINE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.productLine</code> attribute. 
	 * @param value the productLine - Product Line
	 */
	public void setProductLine(final String value)
	{
		setProductLine( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.requestType</code> attribute.
	 * @return the requestType
	 */
	public String getRequestType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, REQUESTTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.requestType</code> attribute.
	 * @return the requestType
	 */
	public String getRequestType()
	{
		return getRequestType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.requestType</code> attribute. 
	 * @param value the requestType
	 */
	public void setRequestType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, REQUESTTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.requestType</code> attribute. 
	 * @param value the requestType
	 */
	public void setRequestType(final String value)
	{
		setRequestType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.rmaNumber</code> attribute.
	 * @return the rmaNumber
	 */
	public String getRmaNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, RMANUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.rmaNumber</code> attribute.
	 * @return the rmaNumber
	 */
	public String getRmaNumber()
	{
		return getRmaNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.rmaNumber</code> attribute. 
	 * @param value the rmaNumber
	 */
	public void setRmaNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, RMANUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.rmaNumber</code> attribute. 
	 * @param value the rmaNumber
	 */
	public void setRmaNumber(final String value)
	{
		setRmaNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.state</code> attribute.
	 * @return the state - State
	 */
	public String getState(final SessionContext ctx)
	{
		return (String)getProperty( ctx, STATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.state</code> attribute.
	 * @return the state - State
	 */
	public String getState()
	{
		return getState( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.state</code> attribute. 
	 * @param value the state - State
	 */
	public void setState(final SessionContext ctx, final String value)
	{
		setProperty(ctx, STATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.state</code> attribute. 
	 * @param value the state - State
	 */
	public void setState(final String value)
	{
		setState( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.subProductLine</code> attribute.
	 * @return the subProductLine - Sub Product Line
	 */
	public String getSubProductLine(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SUBPRODUCTLINE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.subProductLine</code> attribute.
	 * @return the subProductLine - Sub Product Line
	 */
	public String getSubProductLine()
	{
		return getSubProductLine( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.subProductLine</code> attribute. 
	 * @param value the subProductLine - Sub Product Line
	 */
	public void setSubProductLine(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SUBPRODUCTLINE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.subProductLine</code> attribute. 
	 * @param value the subProductLine - Sub Product Line
	 */
	public void setSubProductLine(final String value)
	{
		setSubProductLine( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.zipCode</code> attribute.
	 * @return the zipCode - Zip Code
	 */
	public String getZipCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ZIPCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUs.zipCode</code> attribute.
	 * @return the zipCode - Zip Code
	 */
	public String getZipCode()
	{
		return getZipCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.zipCode</code> attribute. 
	 * @param value the zipCode - Zip Code
	 */
	public void setZipCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ZIPCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUs.zipCode</code> attribute. 
	 * @param value the zipCode - Zip Code
	 */
	public void setZipCode(final String value)
	{
		setZipCode( getSession().getSessionContext(), value );
	}
	
}
