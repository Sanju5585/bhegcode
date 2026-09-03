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
 * Generated class for type {@link de.hybris.platform.commerceservices.jalo.process.GEEdgeSubmitContactProcess GEEdgeSubmitContactProcess}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeSubmitContactProcess extends StoreFrontProcess
{
	/** Qualifier of the <code>GEEdgeSubmitContactProcess.customername</code> attribute **/
	public static final String CUSTOMERNAME = "customername";
	/** Qualifier of the <code>GEEdgeSubmitContactProcess.channelPartnername</code> attribute **/
	public static final String CHANNELPARTNERNAME = "channelPartnername";
	/** Qualifier of the <code>GEEdgeSubmitContactProcess.email</code> attribute **/
	public static final String EMAIL = "email";
	/** Qualifier of the <code>GEEdgeSubmitContactProcess.phone</code> attribute **/
	public static final String PHONE = "phone";
	/** Qualifier of the <code>GEEdgeSubmitContactProcess.contactpreference</code> attribute **/
	public static final String CONTACTPREFERENCE = "contactpreference";
	/** Qualifier of the <code>GEEdgeSubmitContactProcess.howCanWeHelp</code> attribute **/
	public static final String HOWCANWEHELP = "howCanWeHelp";
	/** Qualifier of the <code>GEEdgeSubmitContactProcess.tellUsMore</code> attribute **/
	public static final String TELLUSMORE = "tellUsMore";
	/** Qualifier of the <code>GEEdgeSubmitContactProcess.sessionSoldTo</code> attribute **/
	public static final String SESSIONSOLDTO = "sessionSoldTo";
	/** Qualifier of the <code>GEEdgeSubmitContactProcess.fromName</code> attribute **/
	public static final String FROMNAME = "fromName";
	/** Qualifier of the <code>GEEdgeSubmitContactProcess.fromEmail</code> attribute **/
	public static final String FROMEMAIL = "fromEmail";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(StoreFrontProcess.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(CUSTOMERNAME, AttributeMode.INITIAL);
		tmp.put(CHANNELPARTNERNAME, AttributeMode.INITIAL);
		tmp.put(EMAIL, AttributeMode.INITIAL);
		tmp.put(PHONE, AttributeMode.INITIAL);
		tmp.put(CONTACTPREFERENCE, AttributeMode.INITIAL);
		tmp.put(HOWCANWEHELP, AttributeMode.INITIAL);
		tmp.put(TELLUSMORE, AttributeMode.INITIAL);
		tmp.put(SESSIONSOLDTO, AttributeMode.INITIAL);
		tmp.put(FROMNAME, AttributeMode.INITIAL);
		tmp.put(FROMEMAIL, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.channelPartnername</code> attribute.
	 * @return the channelPartnername
	 */
	public String getChannelPartnername(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CHANNELPARTNERNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.channelPartnername</code> attribute.
	 * @return the channelPartnername
	 */
	public String getChannelPartnername()
	{
		return getChannelPartnername( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.channelPartnername</code> attribute. 
	 * @param value the channelPartnername
	 */
	public void setChannelPartnername(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CHANNELPARTNERNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.channelPartnername</code> attribute. 
	 * @param value the channelPartnername
	 */
	public void setChannelPartnername(final String value)
	{
		setChannelPartnername( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.contactpreference</code> attribute.
	 * @return the contactpreference
	 */
	public String getContactpreference(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONTACTPREFERENCE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.contactpreference</code> attribute.
	 * @return the contactpreference
	 */
	public String getContactpreference()
	{
		return getContactpreference( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.contactpreference</code> attribute. 
	 * @param value the contactpreference
	 */
	public void setContactpreference(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONTACTPREFERENCE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.contactpreference</code> attribute. 
	 * @param value the contactpreference
	 */
	public void setContactpreference(final String value)
	{
		setContactpreference( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.customername</code> attribute.
	 * @return the customername
	 */
	public String getCustomername(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CUSTOMERNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.customername</code> attribute.
	 * @return the customername
	 */
	public String getCustomername()
	{
		return getCustomername( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.customername</code> attribute. 
	 * @param value the customername
	 */
	public void setCustomername(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CUSTOMERNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.customername</code> attribute. 
	 * @param value the customername
	 */
	public void setCustomername(final String value)
	{
		setCustomername( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.email</code> attribute.
	 * @return the email
	 */
	public String getEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.email</code> attribute.
	 * @return the email
	 */
	public String getEmail()
	{
		return getEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.email</code> attribute. 
	 * @param value the email
	 */
	public void setEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.email</code> attribute. 
	 * @param value the email
	 */
	public void setEmail(final String value)
	{
		setEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.fromEmail</code> attribute.
	 * @return the fromEmail
	 */
	public String getFromEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, FROMEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.fromEmail</code> attribute.
	 * @return the fromEmail
	 */
	public String getFromEmail()
	{
		return getFromEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.fromEmail</code> attribute. 
	 * @param value the fromEmail
	 */
	public void setFromEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, FROMEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.fromEmail</code> attribute. 
	 * @param value the fromEmail
	 */
	public void setFromEmail(final String value)
	{
		setFromEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.fromName</code> attribute.
	 * @return the fromName
	 */
	public String getFromName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, FROMNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.fromName</code> attribute.
	 * @return the fromName
	 */
	public String getFromName()
	{
		return getFromName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.fromName</code> attribute. 
	 * @param value the fromName
	 */
	public void setFromName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, FROMNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.fromName</code> attribute. 
	 * @param value the fromName
	 */
	public void setFromName(final String value)
	{
		setFromName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.howCanWeHelp</code> attribute.
	 * @return the howCanWeHelp
	 */
	public String getHowCanWeHelp(final SessionContext ctx)
	{
		return (String)getProperty( ctx, HOWCANWEHELP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.howCanWeHelp</code> attribute.
	 * @return the howCanWeHelp
	 */
	public String getHowCanWeHelp()
	{
		return getHowCanWeHelp( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.howCanWeHelp</code> attribute. 
	 * @param value the howCanWeHelp
	 */
	public void setHowCanWeHelp(final SessionContext ctx, final String value)
	{
		setProperty(ctx, HOWCANWEHELP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.howCanWeHelp</code> attribute. 
	 * @param value the howCanWeHelp
	 */
	public void setHowCanWeHelp(final String value)
	{
		setHowCanWeHelp( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.phone</code> attribute.
	 * @return the phone
	 */
	public String getPhone(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PHONE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.phone</code> attribute.
	 * @return the phone
	 */
	public String getPhone()
	{
		return getPhone( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.phone</code> attribute. 
	 * @param value the phone
	 */
	public void setPhone(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PHONE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.phone</code> attribute. 
	 * @param value the phone
	 */
	public void setPhone(final String value)
	{
		setPhone( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.sessionSoldTo</code> attribute.
	 * @return the sessionSoldTo
	 */
	public String getSessionSoldTo(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SESSIONSOLDTO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.sessionSoldTo</code> attribute.
	 * @return the sessionSoldTo
	 */
	public String getSessionSoldTo()
	{
		return getSessionSoldTo( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.sessionSoldTo</code> attribute. 
	 * @param value the sessionSoldTo
	 */
	public void setSessionSoldTo(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SESSIONSOLDTO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.sessionSoldTo</code> attribute. 
	 * @param value the sessionSoldTo
	 */
	public void setSessionSoldTo(final String value)
	{
		setSessionSoldTo( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.tellUsMore</code> attribute.
	 * @return the tellUsMore
	 */
	public String getTellUsMore(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TELLUSMORE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSubmitContactProcess.tellUsMore</code> attribute.
	 * @return the tellUsMore
	 */
	public String getTellUsMore()
	{
		return getTellUsMore( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.tellUsMore</code> attribute. 
	 * @param value the tellUsMore
	 */
	public void setTellUsMore(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TELLUSMORE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSubmitContactProcess.tellUsMore</code> attribute. 
	 * @param value the tellUsMore
	 */
	public void setTellUsMore(final String value)
	{
		setTellUsMore( getSession().getSessionContext(), value );
	}
	
}
