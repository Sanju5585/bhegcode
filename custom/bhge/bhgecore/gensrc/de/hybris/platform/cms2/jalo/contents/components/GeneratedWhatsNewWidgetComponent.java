/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 *  
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.cms2.jalo.contents.components;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.cms2.jalo.contents.components.CMSFlexComponent;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.C2LManager;
import de.hybris.platform.jalo.c2l.Language;
import de.hybris.platform.jalo.media.Media;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.cms2.jalo.contents.components.WhatsNewWidgetComponent WhatsNewWidgetComponent}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedWhatsNewWidgetComponent extends CMSFlexComponent
{
	/** Qualifier of the <code>WhatsNewWidgetComponent.title</code> attribute **/
	public static final String TITLE = "title";
	/** Qualifier of the <code>WhatsNewWidgetComponent.content</code> attribute **/
	public static final String CONTENT = "content";
	/** Qualifier of the <code>WhatsNewWidgetComponent.icon</code> attribute **/
	public static final String ICON = "icon";
	/** Qualifier of the <code>WhatsNewWidgetComponent.releaseNumber</code> attribute **/
	public static final String RELEASENUMBER = "releaseNumber";
	/** Qualifier of the <code>WhatsNewWidgetComponent.releaseDate</code> attribute **/
	public static final String RELEASEDATE = "releaseDate";
	/** Qualifier of the <code>WhatsNewWidgetComponent.image</code> attribute **/
	public static final String IMAGE = "image";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(CMSFlexComponent.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(TITLE, AttributeMode.INITIAL);
		tmp.put(CONTENT, AttributeMode.INITIAL);
		tmp.put(ICON, AttributeMode.INITIAL);
		tmp.put(RELEASENUMBER, AttributeMode.INITIAL);
		tmp.put(RELEASEDATE, AttributeMode.INITIAL);
		tmp.put(IMAGE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.content</code> attribute.
	 * @return the content - Description/text
	 */
	public String getContent(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedWhatsNewWidgetComponent.getContent requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, CONTENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.content</code> attribute.
	 * @return the content - Description/text
	 */
	public String getContent()
	{
		return getContent( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.content</code> attribute. 
	 * @return the localized content - Description/text
	 */
	public Map<Language,String> getAllContent(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,CONTENT,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.content</code> attribute. 
	 * @return the localized content - Description/text
	 */
	public Map<Language,String> getAllContent()
	{
		return getAllContent( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.content</code> attribute. 
	 * @param value the content - Description/text
	 */
	public void setContent(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedWhatsNewWidgetComponent.setContent requires a session language", 0 );
		}
		setLocalizedProperty(ctx, CONTENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.content</code> attribute. 
	 * @param value the content - Description/text
	 */
	public void setContent(final String value)
	{
		setContent( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.content</code> attribute. 
	 * @param value the content - Description/text
	 */
	public void setAllContent(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,CONTENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.content</code> attribute. 
	 * @param value the content - Description/text
	 */
	public void setAllContent(final Map<Language,String> value)
	{
		setAllContent( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.icon</code> attribute.
	 * @return the icon - Icon
	 */
	public String getIcon(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ICON);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.icon</code> attribute.
	 * @return the icon - Icon
	 */
	public String getIcon()
	{
		return getIcon( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.icon</code> attribute. 
	 * @param value the icon - Icon
	 */
	public void setIcon(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ICON,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.icon</code> attribute. 
	 * @param value the icon - Icon
	 */
	public void setIcon(final String value)
	{
		setIcon( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.image</code> attribute.
	 * @return the image - Image
	 */
	public Media getImage(final SessionContext ctx)
	{
		return (Media)getProperty( ctx, IMAGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.image</code> attribute.
	 * @return the image - Image
	 */
	public Media getImage()
	{
		return getImage( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.image</code> attribute. 
	 * @param value the image - Image
	 */
	public void setImage(final SessionContext ctx, final Media value)
	{
		setProperty(ctx, IMAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.image</code> attribute. 
	 * @param value the image - Image
	 */
	public void setImage(final Media value)
	{
		setImage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.releaseDate</code> attribute.
	 * @return the releaseDate - Release Date
	 */
	public Date getReleaseDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, RELEASEDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.releaseDate</code> attribute.
	 * @return the releaseDate - Release Date
	 */
	public Date getReleaseDate()
	{
		return getReleaseDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.releaseDate</code> attribute. 
	 * @param value the releaseDate - Release Date
	 */
	public void setReleaseDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, RELEASEDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.releaseDate</code> attribute. 
	 * @param value the releaseDate - Release Date
	 */
	public void setReleaseDate(final Date value)
	{
		setReleaseDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.releaseNumber</code> attribute.
	 * @return the releaseNumber - Release number
	 */
	public String getReleaseNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, RELEASENUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.releaseNumber</code> attribute.
	 * @return the releaseNumber - Release number
	 */
	public String getReleaseNumber()
	{
		return getReleaseNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.releaseNumber</code> attribute. 
	 * @param value the releaseNumber - Release number
	 */
	public void setReleaseNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, RELEASENUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.releaseNumber</code> attribute. 
	 * @param value the releaseNumber - Release number
	 */
	public void setReleaseNumber(final String value)
	{
		setReleaseNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.title</code> attribute.
	 * @return the title - Header
	 */
	public String getTitle(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedWhatsNewWidgetComponent.getTitle requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, TITLE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.title</code> attribute.
	 * @return the title - Header
	 */
	public String getTitle()
	{
		return getTitle( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.title</code> attribute. 
	 * @return the localized title - Header
	 */
	public Map<Language,String> getAllTitle(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,TITLE,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WhatsNewWidgetComponent.title</code> attribute. 
	 * @return the localized title - Header
	 */
	public Map<Language,String> getAllTitle()
	{
		return getAllTitle( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.title</code> attribute. 
	 * @param value the title - Header
	 */
	public void setTitle(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedWhatsNewWidgetComponent.setTitle requires a session language", 0 );
		}
		setLocalizedProperty(ctx, TITLE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.title</code> attribute. 
	 * @param value the title - Header
	 */
	public void setTitle(final String value)
	{
		setTitle( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.title</code> attribute. 
	 * @param value the title - Header
	 */
	public void setAllTitle(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,TITLE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WhatsNewWidgetComponent.title</code> attribute. 
	 * @param value the title - Header
	 */
	public void setAllTitle(final Map<Language,String> value)
	{
		setAllTitle( getSession().getSessionContext(), value );
	}
	
}
