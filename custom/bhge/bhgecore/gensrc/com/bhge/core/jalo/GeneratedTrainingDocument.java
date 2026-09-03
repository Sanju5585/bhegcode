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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem TrainingDocument}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedTrainingDocument extends GenericItem
{
	/** Qualifier of the <code>TrainingDocument.name</code> attribute **/
	public static final String NAME = "name";
	/** Qualifier of the <code>TrainingDocument.mediaslink</code> attribute **/
	public static final String MEDIASLINK = "mediaslink";
	/** Qualifier of the <code>TrainingDocument.youtubeURL</code> attribute **/
	public static final String YOUTUBEURL = "youtubeURL";
	/** Qualifier of the <code>TrainingDocument.active</code> attribute **/
	public static final String ACTIVE = "active";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(NAME, AttributeMode.INITIAL);
		tmp.put(MEDIASLINK, AttributeMode.INITIAL);
		tmp.put(YOUTUBEURL, AttributeMode.INITIAL);
		tmp.put(ACTIVE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>TrainingDocument.active</code> attribute.
	 * @return the active
	 */
	public Boolean isActive(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ACTIVE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>TrainingDocument.active</code> attribute.
	 * @return the active
	 */
	public Boolean isActive()
	{
		return isActive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>TrainingDocument.active</code> attribute. 
	 * @return the active
	 */
	public boolean isActiveAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isActive( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>TrainingDocument.active</code> attribute. 
	 * @return the active
	 */
	public boolean isActiveAsPrimitive()
	{
		return isActiveAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>TrainingDocument.active</code> attribute. 
	 * @param value the active
	 */
	public void setActive(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ACTIVE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>TrainingDocument.active</code> attribute. 
	 * @param value the active
	 */
	public void setActive(final Boolean value)
	{
		setActive( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>TrainingDocument.active</code> attribute. 
	 * @param value the active
	 */
	public void setActive(final SessionContext ctx, final boolean value)
	{
		setActive( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>TrainingDocument.active</code> attribute. 
	 * @param value the active
	 */
	public void setActive(final boolean value)
	{
		setActive( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>TrainingDocument.mediaslink</code> attribute.
	 * @return the mediaslink
	 */
	public Media getMediaslink(final SessionContext ctx)
	{
		return (Media)getProperty( ctx, MEDIASLINK);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>TrainingDocument.mediaslink</code> attribute.
	 * @return the mediaslink
	 */
	public Media getMediaslink()
	{
		return getMediaslink( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>TrainingDocument.mediaslink</code> attribute. 
	 * @param value the mediaslink
	 */
	public void setMediaslink(final SessionContext ctx, final Media value)
	{
		setProperty(ctx, MEDIASLINK,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>TrainingDocument.mediaslink</code> attribute. 
	 * @param value the mediaslink
	 */
	public void setMediaslink(final Media value)
	{
		setMediaslink( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>TrainingDocument.name</code> attribute.
	 * @return the name
	 */
	public String getName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>TrainingDocument.name</code> attribute.
	 * @return the name
	 */
	public String getName()
	{
		return getName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>TrainingDocument.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>TrainingDocument.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final String value)
	{
		setName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>TrainingDocument.youtubeURL</code> attribute.
	 * @return the youtubeURL
	 */
	public String getYoutubeURL(final SessionContext ctx)
	{
		return (String)getProperty( ctx, YOUTUBEURL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>TrainingDocument.youtubeURL</code> attribute.
	 * @return the youtubeURL
	 */
	public String getYoutubeURL()
	{
		return getYoutubeURL( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>TrainingDocument.youtubeURL</code> attribute. 
	 * @param value the youtubeURL
	 */
	public void setYoutubeURL(final SessionContext ctx, final String value)
	{
		setProperty(ctx, YOUTUBEURL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>TrainingDocument.youtubeURL</code> attribute. 
	 * @param value the youtubeURL
	 */
	public void setYoutubeURL(final String value)
	{
		setYoutubeURL( getSession().getSessionContext(), value );
	}
	
}
