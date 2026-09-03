/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.register.webservices.jalo;

import com.bhge.register.webservices.constants.BhgeregisterwebservicesConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.C2LManager;
import de.hybris.platform.jalo.c2l.Language;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEApplicationDetails}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEApplicationDetails extends GenericItem
{
	/** Qualifier of the <code>BHGEApplicationDetails.applicationId</code> attribute **/
	public static final String APPLICATIONID = "applicationId";
	/** Qualifier of the <code>BHGEApplicationDetails.applicationName</code> attribute **/
	public static final String APPLICATIONNAME = "applicationName";
	/** Qualifier of the <code>BHGEApplicationDetails.applicationDetails</code> attribute **/
	public static final String APPLICATIONDETAILS = "applicationDetails";
	/** Qualifier of the <code>BHGEApplicationDetails.applicationLink</code> attribute **/
	public static final String APPLICATIONLINK = "applicationLink";
	/** Qualifier of the <code>BHGEApplicationDetails.appAttribList</code> attribute **/
	public static final String APPATTRIBLIST = "appAttribList";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(APPLICATIONID, AttributeMode.INITIAL);
		tmp.put(APPLICATIONNAME, AttributeMode.INITIAL);
		tmp.put(APPLICATIONDETAILS, AttributeMode.INITIAL);
		tmp.put(APPLICATIONLINK, AttributeMode.INITIAL);
		tmp.put(APPATTRIBLIST, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.appAttribList</code> attribute.
	 * @return the appAttribList - Application Attribute List
	 */
	public Collection<String> getAppAttribList(final SessionContext ctx)
	{
		Collection<String> coll = (Collection<String>)getProperty( ctx, APPATTRIBLIST);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.appAttribList</code> attribute.
	 * @return the appAttribList - Application Attribute List
	 */
	public Collection<String> getAppAttribList()
	{
		return getAppAttribList( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.appAttribList</code> attribute. 
	 * @param value the appAttribList - Application Attribute List
	 */
	public void setAppAttribList(final SessionContext ctx, final Collection<String> value)
	{
		setProperty(ctx, APPATTRIBLIST,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.appAttribList</code> attribute. 
	 * @param value the appAttribList - Application Attribute List
	 */
	public void setAppAttribList(final Collection<String> value)
	{
		setAppAttribList( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationDetails</code> attribute.
	 * @return the applicationDetails - Application Details
	 */
	public String getApplicationDetails(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEApplicationDetails.getApplicationDetails requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, APPLICATIONDETAILS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationDetails</code> attribute.
	 * @return the applicationDetails - Application Details
	 */
	public String getApplicationDetails()
	{
		return getApplicationDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationDetails</code> attribute. 
	 * @return the localized applicationDetails - Application Details
	 */
	public Map<Language,String> getAllApplicationDetails(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,APPLICATIONDETAILS,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationDetails</code> attribute. 
	 * @return the localized applicationDetails - Application Details
	 */
	public Map<Language,String> getAllApplicationDetails()
	{
		return getAllApplicationDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationDetails</code> attribute. 
	 * @param value the applicationDetails - Application Details
	 */
	public void setApplicationDetails(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEApplicationDetails.setApplicationDetails requires a session language", 0 );
		}
		setLocalizedProperty(ctx, APPLICATIONDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationDetails</code> attribute. 
	 * @param value the applicationDetails - Application Details
	 */
	public void setApplicationDetails(final String value)
	{
		setApplicationDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationDetails</code> attribute. 
	 * @param value the applicationDetails - Application Details
	 */
	public void setAllApplicationDetails(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,APPLICATIONDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationDetails</code> attribute. 
	 * @param value the applicationDetails - Application Details
	 */
	public void setAllApplicationDetails(final Map<Language,String> value)
	{
		setAllApplicationDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationId</code> attribute.
	 * @return the applicationId - Application ID
	 */
	public Long getApplicationId(final SessionContext ctx)
	{
		return (Long)getProperty( ctx, APPLICATIONID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationId</code> attribute.
	 * @return the applicationId - Application ID
	 */
	public Long getApplicationId()
	{
		return getApplicationId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationId</code> attribute. 
	 * @return the applicationId - Application ID
	 */
	public long getApplicationIdAsPrimitive(final SessionContext ctx)
	{
		Long value = getApplicationId( ctx );
		return value != null ? value.longValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationId</code> attribute. 
	 * @return the applicationId - Application ID
	 */
	public long getApplicationIdAsPrimitive()
	{
		return getApplicationIdAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationId</code> attribute. 
	 * @param value the applicationId - Application ID
	 */
	public void setApplicationId(final SessionContext ctx, final Long value)
	{
		setProperty(ctx, APPLICATIONID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationId</code> attribute. 
	 * @param value the applicationId - Application ID
	 */
	public void setApplicationId(final Long value)
	{
		setApplicationId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationId</code> attribute. 
	 * @param value the applicationId - Application ID
	 */
	public void setApplicationId(final SessionContext ctx, final long value)
	{
		setApplicationId( ctx,Long.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationId</code> attribute. 
	 * @param value the applicationId - Application ID
	 */
	public void setApplicationId(final long value)
	{
		setApplicationId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationLink</code> attribute.
	 * @return the applicationLink - Application Link
	 */
	public String getApplicationLink(final SessionContext ctx)
	{
		return (String)getProperty( ctx, APPLICATIONLINK);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationLink</code> attribute.
	 * @return the applicationLink - Application Link
	 */
	public String getApplicationLink()
	{
		return getApplicationLink( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationLink</code> attribute. 
	 * @param value the applicationLink - Application Link
	 */
	public void setApplicationLink(final SessionContext ctx, final String value)
	{
		setProperty(ctx, APPLICATIONLINK,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationLink</code> attribute. 
	 * @param value the applicationLink - Application Link
	 */
	public void setApplicationLink(final String value)
	{
		setApplicationLink( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationName</code> attribute.
	 * @return the applicationName - Application Name
	 */
	public String getApplicationName(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEApplicationDetails.getApplicationName requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, APPLICATIONNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationName</code> attribute.
	 * @return the applicationName - Application Name
	 */
	public String getApplicationName()
	{
		return getApplicationName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationName</code> attribute. 
	 * @return the localized applicationName - Application Name
	 */
	public Map<Language,String> getAllApplicationName(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,APPLICATIONNAME,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApplicationDetails.applicationName</code> attribute. 
	 * @return the localized applicationName - Application Name
	 */
	public Map<Language,String> getAllApplicationName()
	{
		return getAllApplicationName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationName</code> attribute. 
	 * @param value the applicationName - Application Name
	 */
	public void setApplicationName(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEApplicationDetails.setApplicationName requires a session language", 0 );
		}
		setLocalizedProperty(ctx, APPLICATIONNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationName</code> attribute. 
	 * @param value the applicationName - Application Name
	 */
	public void setApplicationName(final String value)
	{
		setApplicationName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationName</code> attribute. 
	 * @param value the applicationName - Application Name
	 */
	public void setAllApplicationName(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,APPLICATIONNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApplicationDetails.applicationName</code> attribute. 
	 * @param value the applicationName - Application Name
	 */
	public void setAllApplicationName(final Map<Language,String> value)
	{
		setAllApplicationName( getSession().getSessionContext(), value );
	}
	
}
