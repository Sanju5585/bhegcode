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
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.C2LManager;
import de.hybris.platform.jalo.c2l.Language;
import de.hybris.platform.util.StandardDateRange;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem GEEdgeSystemAlert}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeSystemAlert extends GenericItem
{
	/** Qualifier of the <code>GEEdgeSystemAlert.active</code> attribute **/
	public static final String ACTIVE = "active";
	/** Qualifier of the <code>GEEdgeSystemAlert.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>GEEdgeSystemAlert.message</code> attribute **/
	public static final String MESSAGE = "message";
	/** Qualifier of the <code>GEEdgeSystemAlert.alertmessage</code> attribute **/
	public static final String ALERTMESSAGE = "alertmessage";
	/** Qualifier of the <code>GEEdgeSystemAlert.outagealert</code> attribute **/
	public static final String OUTAGEALERT = "outagealert";
	/** Qualifier of the <code>GEEdgeSystemAlert.dateRange</code> attribute **/
	public static final String DATERANGE = "dateRange";
	/** Qualifier of the <code>GEEdgeSystemAlert.enableWRO</code> attribute **/
	public static final String ENABLEWRO = "enableWRO";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(ACTIVE, AttributeMode.INITIAL);
		tmp.put(CODE, AttributeMode.INITIAL);
		tmp.put(MESSAGE, AttributeMode.INITIAL);
		tmp.put(ALERTMESSAGE, AttributeMode.INITIAL);
		tmp.put(OUTAGEALERT, AttributeMode.INITIAL);
		tmp.put(DATERANGE, AttributeMode.INITIAL);
		tmp.put(ENABLEWRO, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.active</code> attribute.
	 * @return the active
	 */
	public Boolean isActive(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ACTIVE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.active</code> attribute.
	 * @return the active
	 */
	public Boolean isActive()
	{
		return isActive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.active</code> attribute. 
	 * @return the active
	 */
	public boolean isActiveAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isActive( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.active</code> attribute. 
	 * @return the active
	 */
	public boolean isActiveAsPrimitive()
	{
		return isActiveAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.active</code> attribute. 
	 * @param value the active
	 */
	public void setActive(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ACTIVE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.active</code> attribute. 
	 * @param value the active
	 */
	public void setActive(final Boolean value)
	{
		setActive( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.active</code> attribute. 
	 * @param value the active
	 */
	public void setActive(final SessionContext ctx, final boolean value)
	{
		setActive( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.active</code> attribute. 
	 * @param value the active
	 */
	public void setActive(final boolean value)
	{
		setActive( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.alertmessage</code> attribute.
	 * @return the alertmessage - Short system alert message
	 */
	public String getAlertmessage(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedGEEdgeSystemAlert.getAlertmessage requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, ALERTMESSAGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.alertmessage</code> attribute.
	 * @return the alertmessage - Short system alert message
	 */
	public String getAlertmessage()
	{
		return getAlertmessage( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.alertmessage</code> attribute. 
	 * @return the localized alertmessage - Short system alert message
	 */
	public Map<Language,String> getAllAlertmessage(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,ALERTMESSAGE,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.alertmessage</code> attribute. 
	 * @return the localized alertmessage - Short system alert message
	 */
	public Map<Language,String> getAllAlertmessage()
	{
		return getAllAlertmessage( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.alertmessage</code> attribute. 
	 * @param value the alertmessage - Short system alert message
	 */
	public void setAlertmessage(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedGEEdgeSystemAlert.setAlertmessage requires a session language", 0 );
		}
		setLocalizedProperty(ctx, ALERTMESSAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.alertmessage</code> attribute. 
	 * @param value the alertmessage - Short system alert message
	 */
	public void setAlertmessage(final String value)
	{
		setAlertmessage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.alertmessage</code> attribute. 
	 * @param value the alertmessage - Short system alert message
	 */
	public void setAllAlertmessage(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,ALERTMESSAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.alertmessage</code> attribute. 
	 * @param value the alertmessage - Short system alert message
	 */
	public void setAllAlertmessage(final Map<Language,String> value)
	{
		setAllAlertmessage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.code</code> attribute.
	 * @return the code - Unique code
	 */
	public String getCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.code</code> attribute.
	 * @return the code - Unique code
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.code</code> attribute. 
	 * @param value the code - Unique code
	 */
	public void setCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.code</code> attribute. 
	 * @param value the code - Unique code
	 */
	public void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.dateRange</code> attribute.
	 * @return the dateRange - date range the message is active
	 */
	public StandardDateRange getDateRange(final SessionContext ctx)
	{
		return (StandardDateRange)getProperty( ctx, DATERANGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.dateRange</code> attribute.
	 * @return the dateRange - date range the message is active
	 */
	public StandardDateRange getDateRange()
	{
		return getDateRange( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.dateRange</code> attribute. 
	 * @param value the dateRange - date range the message is active
	 */
	public void setDateRange(final SessionContext ctx, final StandardDateRange value)
	{
		setProperty(ctx, DATERANGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.dateRange</code> attribute. 
	 * @param value the dateRange - date range the message is active
	 */
	public void setDateRange(final StandardDateRange value)
	{
		setDateRange( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.enableWRO</code> attribute.
	 * @return the enableWRO
	 */
	public Boolean isEnableWRO(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ENABLEWRO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.enableWRO</code> attribute.
	 * @return the enableWRO
	 */
	public Boolean isEnableWRO()
	{
		return isEnableWRO( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.enableWRO</code> attribute. 
	 * @return the enableWRO
	 */
	public boolean isEnableWROAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isEnableWRO( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.enableWRO</code> attribute. 
	 * @return the enableWRO
	 */
	public boolean isEnableWROAsPrimitive()
	{
		return isEnableWROAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.enableWRO</code> attribute. 
	 * @param value the enableWRO
	 */
	public void setEnableWRO(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ENABLEWRO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.enableWRO</code> attribute. 
	 * @param value the enableWRO
	 */
	public void setEnableWRO(final Boolean value)
	{
		setEnableWRO( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.enableWRO</code> attribute. 
	 * @param value the enableWRO
	 */
	public void setEnableWRO(final SessionContext ctx, final boolean value)
	{
		setEnableWRO( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.enableWRO</code> attribute. 
	 * @param value the enableWRO
	 */
	public void setEnableWRO(final boolean value)
	{
		setEnableWRO( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.message</code> attribute.
	 * @return the message - Short system alert message
	 */
	public String getMessage(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedGEEdgeSystemAlert.getMessage requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, MESSAGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.message</code> attribute.
	 * @return the message - Short system alert message
	 */
	public String getMessage()
	{
		return getMessage( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.message</code> attribute. 
	 * @return the localized message - Short system alert message
	 */
	public Map<Language,String> getAllMessage(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,MESSAGE,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.message</code> attribute. 
	 * @return the localized message - Short system alert message
	 */
	public Map<Language,String> getAllMessage()
	{
		return getAllMessage( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.message</code> attribute. 
	 * @param value the message - Short system alert message
	 */
	public void setMessage(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedGEEdgeSystemAlert.setMessage requires a session language", 0 );
		}
		setLocalizedProperty(ctx, MESSAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.message</code> attribute. 
	 * @param value the message - Short system alert message
	 */
	public void setMessage(final String value)
	{
		setMessage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.message</code> attribute. 
	 * @param value the message - Short system alert message
	 */
	public void setAllMessage(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,MESSAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.message</code> attribute. 
	 * @param value the message - Short system alert message
	 */
	public void setAllMessage(final Map<Language,String> value)
	{
		setAllMessage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.outagealert</code> attribute.
	 * @return the outagealert - Short system alert message
	 */
	public String getOutagealert(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedGEEdgeSystemAlert.getOutagealert requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, OUTAGEALERT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.outagealert</code> attribute.
	 * @return the outagealert - Short system alert message
	 */
	public String getOutagealert()
	{
		return getOutagealert( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.outagealert</code> attribute. 
	 * @return the localized outagealert - Short system alert message
	 */
	public Map<Language,String> getAllOutagealert(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,OUTAGEALERT,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSystemAlert.outagealert</code> attribute. 
	 * @return the localized outagealert - Short system alert message
	 */
	public Map<Language,String> getAllOutagealert()
	{
		return getAllOutagealert( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.outagealert</code> attribute. 
	 * @param value the outagealert - Short system alert message
	 */
	public void setOutagealert(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedGEEdgeSystemAlert.setOutagealert requires a session language", 0 );
		}
		setLocalizedProperty(ctx, OUTAGEALERT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.outagealert</code> attribute. 
	 * @param value the outagealert - Short system alert message
	 */
	public void setOutagealert(final String value)
	{
		setOutagealert( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.outagealert</code> attribute. 
	 * @param value the outagealert - Short system alert message
	 */
	public void setAllOutagealert(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,OUTAGEALERT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSystemAlert.outagealert</code> attribute. 
	 * @param value the outagealert - Short system alert message
	 */
	public void setAllOutagealert(final Map<Language,String> value)
	{
		setAllOutagealert( getSession().getSessionContext(), value );
	}
	
}
