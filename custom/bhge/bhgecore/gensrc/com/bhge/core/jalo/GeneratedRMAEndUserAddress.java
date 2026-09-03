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
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem RMAEndUserAddress}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedRMAEndUserAddress extends GenericItem
{
	/** Qualifier of the <code>RMAEndUserAddress.alternateContactEmail</code> attribute **/
	public static final String ALTERNATECONTACTEMAIL = "alternateContactEmail";
	/** Qualifier of the <code>RMAEndUserAddress.endUserCategory</code> attribute **/
	public static final String ENDUSERCATEGORY = "endUserCategory";
	/** Qualifier of the <code>RMAEndUserAddress.endUserName</code> attribute **/
	public static final String ENDUSERNAME = "endUserName";
	/** Qualifier of the <code>RMAEndUserAddress.endUserAddressLine1</code> attribute **/
	public static final String ENDUSERADDRESSLINE1 = "endUserAddressLine1";
	/** Qualifier of the <code>RMAEndUserAddress.endUserAddressLine2</code> attribute **/
	public static final String ENDUSERADDRESSLINE2 = "endUserAddressLine2";
	/** Qualifier of the <code>RMAEndUserAddress.endUserCountry</code> attribute **/
	public static final String ENDUSERCOUNTRY = "endUserCountry";
	/** Qualifier of the <code>RMAEndUserAddress.endUserState</code> attribute **/
	public static final String ENDUSERSTATE = "endUserState";
	/** Qualifier of the <code>RMAEndUserAddress.endUserPostalCode</code> attribute **/
	public static final String ENDUSERPOSTALCODE = "endUserPostalCode";
	/** Qualifier of the <code>RMAEndUserAddress.endUserCity</code> attribute **/
	public static final String ENDUSERCITY = "endUserCity";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(ALTERNATECONTACTEMAIL, AttributeMode.INITIAL);
		tmp.put(ENDUSERCATEGORY, AttributeMode.INITIAL);
		tmp.put(ENDUSERNAME, AttributeMode.INITIAL);
		tmp.put(ENDUSERADDRESSLINE1, AttributeMode.INITIAL);
		tmp.put(ENDUSERADDRESSLINE2, AttributeMode.INITIAL);
		tmp.put(ENDUSERCOUNTRY, AttributeMode.INITIAL);
		tmp.put(ENDUSERSTATE, AttributeMode.INITIAL);
		tmp.put(ENDUSERPOSTALCODE, AttributeMode.INITIAL);
		tmp.put(ENDUSERCITY, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.alternateContactEmail</code> attribute.
	 * @return the alternateContactEmail
	 */
	public String getAlternateContactEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ALTERNATECONTACTEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.alternateContactEmail</code> attribute.
	 * @return the alternateContactEmail
	 */
	public String getAlternateContactEmail()
	{
		return getAlternateContactEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.alternateContactEmail</code> attribute. 
	 * @param value the alternateContactEmail
	 */
	public void setAlternateContactEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ALTERNATECONTACTEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.alternateContactEmail</code> attribute. 
	 * @param value the alternateContactEmail
	 */
	public void setAlternateContactEmail(final String value)
	{
		setAlternateContactEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserAddressLine1</code> attribute.
	 * @return the endUserAddressLine1
	 */
	public String getEndUserAddressLine1(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ENDUSERADDRESSLINE1);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserAddressLine1</code> attribute.
	 * @return the endUserAddressLine1
	 */
	public String getEndUserAddressLine1()
	{
		return getEndUserAddressLine1( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserAddressLine1</code> attribute. 
	 * @param value the endUserAddressLine1
	 */
	public void setEndUserAddressLine1(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ENDUSERADDRESSLINE1,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserAddressLine1</code> attribute. 
	 * @param value the endUserAddressLine1
	 */
	public void setEndUserAddressLine1(final String value)
	{
		setEndUserAddressLine1( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserAddressLine2</code> attribute.
	 * @return the endUserAddressLine2
	 */
	public String getEndUserAddressLine2(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ENDUSERADDRESSLINE2);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserAddressLine2</code> attribute.
	 * @return the endUserAddressLine2
	 */
	public String getEndUserAddressLine2()
	{
		return getEndUserAddressLine2( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserAddressLine2</code> attribute. 
	 * @param value the endUserAddressLine2
	 */
	public void setEndUserAddressLine2(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ENDUSERADDRESSLINE2,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserAddressLine2</code> attribute. 
	 * @param value the endUserAddressLine2
	 */
	public void setEndUserAddressLine2(final String value)
	{
		setEndUserAddressLine2( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserCategory</code> attribute.
	 * @return the endUserCategory
	 */
	public String getEndUserCategory(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ENDUSERCATEGORY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserCategory</code> attribute.
	 * @return the endUserCategory
	 */
	public String getEndUserCategory()
	{
		return getEndUserCategory( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserCategory</code> attribute. 
	 * @param value the endUserCategory
	 */
	public void setEndUserCategory(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ENDUSERCATEGORY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserCategory</code> attribute. 
	 * @param value the endUserCategory
	 */
	public void setEndUserCategory(final String value)
	{
		setEndUserCategory( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserCity</code> attribute.
	 * @return the endUserCity
	 */
	public String getEndUserCity(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ENDUSERCITY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserCity</code> attribute.
	 * @return the endUserCity
	 */
	public String getEndUserCity()
	{
		return getEndUserCity( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserCity</code> attribute. 
	 * @param value the endUserCity
	 */
	public void setEndUserCity(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ENDUSERCITY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserCity</code> attribute. 
	 * @param value the endUserCity
	 */
	public void setEndUserCity(final String value)
	{
		setEndUserCity( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserCountry</code> attribute.
	 * @return the endUserCountry
	 */
	public String getEndUserCountry(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ENDUSERCOUNTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserCountry</code> attribute.
	 * @return the endUserCountry
	 */
	public String getEndUserCountry()
	{
		return getEndUserCountry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserCountry</code> attribute. 
	 * @param value the endUserCountry
	 */
	public void setEndUserCountry(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ENDUSERCOUNTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserCountry</code> attribute. 
	 * @param value the endUserCountry
	 */
	public void setEndUserCountry(final String value)
	{
		setEndUserCountry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserName</code> attribute.
	 * @return the endUserName
	 */
	public String getEndUserName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ENDUSERNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserName</code> attribute.
	 * @return the endUserName
	 */
	public String getEndUserName()
	{
		return getEndUserName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserName</code> attribute. 
	 * @param value the endUserName
	 */
	public void setEndUserName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ENDUSERNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserName</code> attribute. 
	 * @param value the endUserName
	 */
	public void setEndUserName(final String value)
	{
		setEndUserName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserPostalCode</code> attribute.
	 * @return the endUserPostalCode
	 */
	public String getEndUserPostalCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ENDUSERPOSTALCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserPostalCode</code> attribute.
	 * @return the endUserPostalCode
	 */
	public String getEndUserPostalCode()
	{
		return getEndUserPostalCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserPostalCode</code> attribute. 
	 * @param value the endUserPostalCode
	 */
	public void setEndUserPostalCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ENDUSERPOSTALCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserPostalCode</code> attribute. 
	 * @param value the endUserPostalCode
	 */
	public void setEndUserPostalCode(final String value)
	{
		setEndUserPostalCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserState</code> attribute.
	 * @return the endUserState
	 */
	public String getEndUserState(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ENDUSERSTATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>RMAEndUserAddress.endUserState</code> attribute.
	 * @return the endUserState
	 */
	public String getEndUserState()
	{
		return getEndUserState( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserState</code> attribute. 
	 * @param value the endUserState
	 */
	public void setEndUserState(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ENDUSERSTATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>RMAEndUserAddress.endUserState</code> attribute. 
	 * @param value the endUserState
	 */
	public void setEndUserState(final String value)
	{
		setEndUserState( getSession().getSessionContext(), value );
	}
	
}
