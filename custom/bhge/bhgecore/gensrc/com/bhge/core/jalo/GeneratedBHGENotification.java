/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.catalog.jalo.CatalogVersion;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.C2LManager;
import de.hybris.platform.jalo.c2l.Language;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGENotification}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGENotification extends GenericItem
{
	/** Qualifier of the <code>BHGENotification.id</code> attribute **/
	public static final String ID = "id";
	/** Qualifier of the <code>BHGENotification.catalogVersion</code> attribute **/
	public static final String CATALOGVERSION = "catalogVersion";
	/** Qualifier of the <code>BHGENotification.starttime</code> attribute **/
	public static final String STARTTIME = "starttime";
	/** Qualifier of the <code>BHGENotification.endtime</code> attribute **/
	public static final String ENDTIME = "endtime";
	/** Qualifier of the <code>BHGENotification.notificationType</code> attribute **/
	public static final String NOTIFICATIONTYPE = "notificationType";
	/** Qualifier of the <code>BHGENotification.title</code> attribute **/
	public static final String TITLE = "title";
	/** Qualifier of the <code>BHGENotification.message</code> attribute **/
	public static final String MESSAGE = "message";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(ID, AttributeMode.INITIAL);
		tmp.put(CATALOGVERSION, AttributeMode.INITIAL);
		tmp.put(STARTTIME, AttributeMode.INITIAL);
		tmp.put(ENDTIME, AttributeMode.INITIAL);
		tmp.put(NOTIFICATIONTYPE, AttributeMode.INITIAL);
		tmp.put(TITLE, AttributeMode.INITIAL);
		tmp.put(MESSAGE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.catalogVersion</code> attribute.
	 * @return the catalogVersion
	 */
	public CatalogVersion getCatalogVersion(final SessionContext ctx)
	{
		return (CatalogVersion)getProperty( ctx, CATALOGVERSION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.catalogVersion</code> attribute.
	 * @return the catalogVersion
	 */
	public CatalogVersion getCatalogVersion()
	{
		return getCatalogVersion( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.catalogVersion</code> attribute. 
	 * @param value the catalogVersion
	 */
	protected void setCatalogVersion(final SessionContext ctx, final CatalogVersion value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		// initial-only attribute: make sure this attribute can be set during item creation only
		if ( ctx.getAttribute( "core.types.creation.initial") != Boolean.TRUE )
		{
			throw new JaloInvalidParameterException( "attribute '"+CATALOGVERSION+"' is not changeable", 0 );
		}
		setProperty(ctx, CATALOGVERSION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.catalogVersion</code> attribute. 
	 * @param value the catalogVersion
	 */
	protected void setCatalogVersion(final CatalogVersion value)
	{
		setCatalogVersion( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.endtime</code> attribute.
	 * @return the endtime - End datetime for this notification
	 */
	public Date getEndtime(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, ENDTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.endtime</code> attribute.
	 * @return the endtime - End datetime for this notification
	 */
	public Date getEndtime()
	{
		return getEndtime( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.endtime</code> attribute. 
	 * @param value the endtime - End datetime for this notification
	 */
	public void setEndtime(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, ENDTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.endtime</code> attribute. 
	 * @param value the endtime - End datetime for this notification
	 */
	public void setEndtime(final Date value)
	{
		setEndtime( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.id</code> attribute.
	 * @return the id
	 */
	public String getId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.id</code> attribute.
	 * @return the id
	 */
	public String getId()
	{
		return getId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.id</code> attribute. 
	 * @param value the id
	 */
	protected void setId(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		// initial-only attribute: make sure this attribute can be set during item creation only
		if ( ctx.getAttribute( "core.types.creation.initial") != Boolean.TRUE )
		{
			throw new JaloInvalidParameterException( "attribute '"+ID+"' is not changeable", 0 );
		}
		setProperty(ctx, ID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.id</code> attribute. 
	 * @param value the id
	 */
	protected void setId(final String value)
	{
		setId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.message</code> attribute.
	 * @return the message - The notification message
	 */
	public String getMessage(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGENotification.getMessage requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, MESSAGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.message</code> attribute.
	 * @return the message - The notification message
	 */
	public String getMessage()
	{
		return getMessage( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.message</code> attribute. 
	 * @return the localized message - The notification message
	 */
	public Map<Language,String> getAllMessage(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,MESSAGE,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.message</code> attribute. 
	 * @return the localized message - The notification message
	 */
	public Map<Language,String> getAllMessage()
	{
		return getAllMessage( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.message</code> attribute. 
	 * @param value the message - The notification message
	 */
	public void setMessage(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGENotification.setMessage requires a session language", 0 );
		}
		setLocalizedProperty(ctx, MESSAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.message</code> attribute. 
	 * @param value the message - The notification message
	 */
	public void setMessage(final String value)
	{
		setMessage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.message</code> attribute. 
	 * @param value the message - The notification message
	 */
	public void setAllMessage(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,MESSAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.message</code> attribute. 
	 * @param value the message - The notification message
	 */
	public void setAllMessage(final Map<Language,String> value)
	{
		setAllMessage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.notificationType</code> attribute.
	 * @return the notificationType - The type of notification - typically this is used as the CSS class for rendering
	 */
	public EnumerationValue getNotificationType(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, NOTIFICATIONTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.notificationType</code> attribute.
	 * @return the notificationType - The type of notification - typically this is used as the CSS class for rendering
	 */
	public EnumerationValue getNotificationType()
	{
		return getNotificationType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.notificationType</code> attribute. 
	 * @param value the notificationType - The type of notification - typically this is used as the CSS class for rendering
	 */
	public void setNotificationType(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, NOTIFICATIONTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.notificationType</code> attribute. 
	 * @param value the notificationType - The type of notification - typically this is used as the CSS class for rendering
	 */
	public void setNotificationType(final EnumerationValue value)
	{
		setNotificationType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.starttime</code> attribute.
	 * @return the starttime - Start datetime for this notification
	 */
	public Date getStarttime(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, STARTTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.starttime</code> attribute.
	 * @return the starttime - Start datetime for this notification
	 */
	public Date getStarttime()
	{
		return getStarttime( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.starttime</code> attribute. 
	 * @param value the starttime - Start datetime for this notification
	 */
	public void setStarttime(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, STARTTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.starttime</code> attribute. 
	 * @param value the starttime - Start datetime for this notification
	 */
	public void setStarttime(final Date value)
	{
		setStarttime( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.title</code> attribute.
	 * @return the title - The title of this notification
	 */
	public String getTitle(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGENotification.getTitle requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, TITLE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.title</code> attribute.
	 * @return the title - The title of this notification
	 */
	public String getTitle()
	{
		return getTitle( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.title</code> attribute. 
	 * @return the localized title - The title of this notification
	 */
	public Map<Language,String> getAllTitle(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,TITLE,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGENotification.title</code> attribute. 
	 * @return the localized title - The title of this notification
	 */
	public Map<Language,String> getAllTitle()
	{
		return getAllTitle( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.title</code> attribute. 
	 * @param value the title - The title of this notification
	 */
	public void setTitle(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGENotification.setTitle requires a session language", 0 );
		}
		setLocalizedProperty(ctx, TITLE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.title</code> attribute. 
	 * @param value the title - The title of this notification
	 */
	public void setTitle(final String value)
	{
		setTitle( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.title</code> attribute. 
	 * @param value the title - The title of this notification
	 */
	public void setAllTitle(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,TITLE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGENotification.title</code> attribute. 
	 * @param value the title - The title of this notification
	 */
	public void setAllTitle(final Map<Language,String> value)
	{
		setAllTitle( getSession().getSessionContext(), value );
	}
	
}
