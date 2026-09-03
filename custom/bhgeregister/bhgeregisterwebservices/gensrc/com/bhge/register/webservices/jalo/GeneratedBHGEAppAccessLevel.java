/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.register.webservices.jalo;

import com.bhge.register.webservices.constants.BhgeregisterwebservicesConstants;
import com.bhge.register.webservices.jalo.BHGEApplicationDetails;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.C2LManager;
import de.hybris.platform.jalo.c2l.Language;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEAppAccessLevel}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEAppAccessLevel extends GenericItem
{
	/** Qualifier of the <code>BHGEAppAccessLevel.applicationInfo</code> attribute **/
	public static final String APPLICATIONINFO = "applicationInfo";
	/** Qualifier of the <code>BHGEAppAccessLevel.appAccessLevelId</code> attribute **/
	public static final String APPACCESSLEVELID = "appAccessLevelId";
	/** Qualifier of the <code>BHGEAppAccessLevel.appAccessLevelName</code> attribute **/
	public static final String APPACCESSLEVELNAME = "appAccessLevelName";
	/** Qualifier of the <code>BHGEAppAccessLevel.appAccessLevelDetails</code> attribute **/
	public static final String APPACCESSLEVELDETAILS = "appAccessLevelDetails";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(APPLICATIONINFO, AttributeMode.INITIAL);
		tmp.put(APPACCESSLEVELID, AttributeMode.INITIAL);
		tmp.put(APPACCESSLEVELNAME, AttributeMode.INITIAL);
		tmp.put(APPACCESSLEVELDETAILS, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.appAccessLevelDetails</code> attribute.
	 * @return the appAccessLevelDetails - Application Access Level Details
	 */
	public String getAppAccessLevelDetails(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEAppAccessLevel.getAppAccessLevelDetails requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, APPACCESSLEVELDETAILS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.appAccessLevelDetails</code> attribute.
	 * @return the appAccessLevelDetails - Application Access Level Details
	 */
	public String getAppAccessLevelDetails()
	{
		return getAppAccessLevelDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.appAccessLevelDetails</code> attribute. 
	 * @return the localized appAccessLevelDetails - Application Access Level Details
	 */
	public Map<Language,String> getAllAppAccessLevelDetails(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,APPACCESSLEVELDETAILS,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.appAccessLevelDetails</code> attribute. 
	 * @return the localized appAccessLevelDetails - Application Access Level Details
	 */
	public Map<Language,String> getAllAppAccessLevelDetails()
	{
		return getAllAppAccessLevelDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.appAccessLevelDetails</code> attribute. 
	 * @param value the appAccessLevelDetails - Application Access Level Details
	 */
	public void setAppAccessLevelDetails(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEAppAccessLevel.setAppAccessLevelDetails requires a session language", 0 );
		}
		setLocalizedProperty(ctx, APPACCESSLEVELDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.appAccessLevelDetails</code> attribute. 
	 * @param value the appAccessLevelDetails - Application Access Level Details
	 */
	public void setAppAccessLevelDetails(final String value)
	{
		setAppAccessLevelDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.appAccessLevelDetails</code> attribute. 
	 * @param value the appAccessLevelDetails - Application Access Level Details
	 */
	public void setAllAppAccessLevelDetails(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,APPACCESSLEVELDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.appAccessLevelDetails</code> attribute. 
	 * @param value the appAccessLevelDetails - Application Access Level Details
	 */
	public void setAllAppAccessLevelDetails(final Map<Language,String> value)
	{
		setAllAppAccessLevelDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.appAccessLevelId</code> attribute.
	 * @return the appAccessLevelId - Application Access Level ID
	 */
	public Long getAppAccessLevelId(final SessionContext ctx)
	{
		return (Long)getProperty( ctx, APPACCESSLEVELID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.appAccessLevelId</code> attribute.
	 * @return the appAccessLevelId - Application Access Level ID
	 */
	public Long getAppAccessLevelId()
	{
		return getAppAccessLevelId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.appAccessLevelId</code> attribute. 
	 * @return the appAccessLevelId - Application Access Level ID
	 */
	public long getAppAccessLevelIdAsPrimitive(final SessionContext ctx)
	{
		Long value = getAppAccessLevelId( ctx );
		return value != null ? value.longValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.appAccessLevelId</code> attribute. 
	 * @return the appAccessLevelId - Application Access Level ID
	 */
	public long getAppAccessLevelIdAsPrimitive()
	{
		return getAppAccessLevelIdAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.appAccessLevelId</code> attribute. 
	 * @param value the appAccessLevelId - Application Access Level ID
	 */
	public void setAppAccessLevelId(final SessionContext ctx, final Long value)
	{
		setProperty(ctx, APPACCESSLEVELID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.appAccessLevelId</code> attribute. 
	 * @param value the appAccessLevelId - Application Access Level ID
	 */
	public void setAppAccessLevelId(final Long value)
	{
		setAppAccessLevelId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.appAccessLevelId</code> attribute. 
	 * @param value the appAccessLevelId - Application Access Level ID
	 */
	public void setAppAccessLevelId(final SessionContext ctx, final long value)
	{
		setAppAccessLevelId( ctx,Long.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.appAccessLevelId</code> attribute. 
	 * @param value the appAccessLevelId - Application Access Level ID
	 */
	public void setAppAccessLevelId(final long value)
	{
		setAppAccessLevelId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.appAccessLevelName</code> attribute.
	 * @return the appAccessLevelName - Application Access Level Name
	 */
	public String getAppAccessLevelName(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEAppAccessLevel.getAppAccessLevelName requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, APPACCESSLEVELNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.appAccessLevelName</code> attribute.
	 * @return the appAccessLevelName - Application Access Level Name
	 */
	public String getAppAccessLevelName()
	{
		return getAppAccessLevelName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.appAccessLevelName</code> attribute. 
	 * @return the localized appAccessLevelName - Application Access Level Name
	 */
	public Map<Language,String> getAllAppAccessLevelName(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,APPACCESSLEVELNAME,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.appAccessLevelName</code> attribute. 
	 * @return the localized appAccessLevelName - Application Access Level Name
	 */
	public Map<Language,String> getAllAppAccessLevelName()
	{
		return getAllAppAccessLevelName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.appAccessLevelName</code> attribute. 
	 * @param value the appAccessLevelName - Application Access Level Name
	 */
	public void setAppAccessLevelName(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEAppAccessLevel.setAppAccessLevelName requires a session language", 0 );
		}
		setLocalizedProperty(ctx, APPACCESSLEVELNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.appAccessLevelName</code> attribute. 
	 * @param value the appAccessLevelName - Application Access Level Name
	 */
	public void setAppAccessLevelName(final String value)
	{
		setAppAccessLevelName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.appAccessLevelName</code> attribute. 
	 * @param value the appAccessLevelName - Application Access Level Name
	 */
	public void setAllAppAccessLevelName(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,APPACCESSLEVELNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.appAccessLevelName</code> attribute. 
	 * @param value the appAccessLevelName - Application Access Level Name
	 */
	public void setAllAppAccessLevelName(final Map<Language,String> value)
	{
		setAllAppAccessLevelName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.applicationInfo</code> attribute.
	 * @return the applicationInfo - Application Information
	 */
	public BHGEApplicationDetails getApplicationInfo(final SessionContext ctx)
	{
		return (BHGEApplicationDetails)getProperty( ctx, APPLICATIONINFO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessLevel.applicationInfo</code> attribute.
	 * @return the applicationInfo - Application Information
	 */
	public BHGEApplicationDetails getApplicationInfo()
	{
		return getApplicationInfo( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.applicationInfo</code> attribute. 
	 * @param value the applicationInfo - Application Information
	 */
	public void setApplicationInfo(final SessionContext ctx, final BHGEApplicationDetails value)
	{
		setProperty(ctx, APPLICATIONINFO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessLevel.applicationInfo</code> attribute. 
	 * @param value the applicationInfo - Application Information
	 */
	public void setApplicationInfo(final BHGEApplicationDetails value)
	{
		setApplicationInfo( getSession().getSessionContext(), value );
	}
	
}
