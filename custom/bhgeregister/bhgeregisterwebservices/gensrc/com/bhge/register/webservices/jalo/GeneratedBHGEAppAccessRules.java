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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEAppAccessRules}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEAppAccessRules extends GenericItem
{
	/** Qualifier of the <code>BHGEAppAccessRules.applicationInfo</code> attribute **/
	public static final String APPLICATIONINFO = "applicationInfo";
	/** Qualifier of the <code>BHGEAppAccessRules.appAccessRuleId</code> attribute **/
	public static final String APPACCESSRULEID = "appAccessRuleId";
	/** Qualifier of the <code>BHGEAppAccessRules.appAccessRuleName</code> attribute **/
	public static final String APPACCESSRULENAME = "appAccessRuleName";
	/** Qualifier of the <code>BHGEAppAccessRules.appAccessRuleDetails</code> attribute **/
	public static final String APPACCESSRULEDETAILS = "appAccessRuleDetails";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(APPLICATIONINFO, AttributeMode.INITIAL);
		tmp.put(APPACCESSRULEID, AttributeMode.INITIAL);
		tmp.put(APPACCESSRULENAME, AttributeMode.INITIAL);
		tmp.put(APPACCESSRULEDETAILS, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.appAccessRuleDetails</code> attribute.
	 * @return the appAccessRuleDetails - Application Access Rule Details
	 */
	public String getAppAccessRuleDetails(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEAppAccessRules.getAppAccessRuleDetails requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, APPACCESSRULEDETAILS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.appAccessRuleDetails</code> attribute.
	 * @return the appAccessRuleDetails - Application Access Rule Details
	 */
	public String getAppAccessRuleDetails()
	{
		return getAppAccessRuleDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.appAccessRuleDetails</code> attribute. 
	 * @return the localized appAccessRuleDetails - Application Access Rule Details
	 */
	public Map<Language,String> getAllAppAccessRuleDetails(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,APPACCESSRULEDETAILS,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.appAccessRuleDetails</code> attribute. 
	 * @return the localized appAccessRuleDetails - Application Access Rule Details
	 */
	public Map<Language,String> getAllAppAccessRuleDetails()
	{
		return getAllAppAccessRuleDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.appAccessRuleDetails</code> attribute. 
	 * @param value the appAccessRuleDetails - Application Access Rule Details
	 */
	public void setAppAccessRuleDetails(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEAppAccessRules.setAppAccessRuleDetails requires a session language", 0 );
		}
		setLocalizedProperty(ctx, APPACCESSRULEDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.appAccessRuleDetails</code> attribute. 
	 * @param value the appAccessRuleDetails - Application Access Rule Details
	 */
	public void setAppAccessRuleDetails(final String value)
	{
		setAppAccessRuleDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.appAccessRuleDetails</code> attribute. 
	 * @param value the appAccessRuleDetails - Application Access Rule Details
	 */
	public void setAllAppAccessRuleDetails(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,APPACCESSRULEDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.appAccessRuleDetails</code> attribute. 
	 * @param value the appAccessRuleDetails - Application Access Rule Details
	 */
	public void setAllAppAccessRuleDetails(final Map<Language,String> value)
	{
		setAllAppAccessRuleDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.appAccessRuleId</code> attribute.
	 * @return the appAccessRuleId - Application Access Rule Id
	 */
	public Long getAppAccessRuleId(final SessionContext ctx)
	{
		return (Long)getProperty( ctx, APPACCESSRULEID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.appAccessRuleId</code> attribute.
	 * @return the appAccessRuleId - Application Access Rule Id
	 */
	public Long getAppAccessRuleId()
	{
		return getAppAccessRuleId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.appAccessRuleId</code> attribute. 
	 * @return the appAccessRuleId - Application Access Rule Id
	 */
	public long getAppAccessRuleIdAsPrimitive(final SessionContext ctx)
	{
		Long value = getAppAccessRuleId( ctx );
		return value != null ? value.longValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.appAccessRuleId</code> attribute. 
	 * @return the appAccessRuleId - Application Access Rule Id
	 */
	public long getAppAccessRuleIdAsPrimitive()
	{
		return getAppAccessRuleIdAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.appAccessRuleId</code> attribute. 
	 * @param value the appAccessRuleId - Application Access Rule Id
	 */
	public void setAppAccessRuleId(final SessionContext ctx, final Long value)
	{
		setProperty(ctx, APPACCESSRULEID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.appAccessRuleId</code> attribute. 
	 * @param value the appAccessRuleId - Application Access Rule Id
	 */
	public void setAppAccessRuleId(final Long value)
	{
		setAppAccessRuleId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.appAccessRuleId</code> attribute. 
	 * @param value the appAccessRuleId - Application Access Rule Id
	 */
	public void setAppAccessRuleId(final SessionContext ctx, final long value)
	{
		setAppAccessRuleId( ctx,Long.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.appAccessRuleId</code> attribute. 
	 * @param value the appAccessRuleId - Application Access Rule Id
	 */
	public void setAppAccessRuleId(final long value)
	{
		setAppAccessRuleId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.appAccessRuleName</code> attribute.
	 * @return the appAccessRuleName - Application Access Rule Name
	 */
	public String getAppAccessRuleName(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEAppAccessRules.getAppAccessRuleName requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, APPACCESSRULENAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.appAccessRuleName</code> attribute.
	 * @return the appAccessRuleName - Application Access Rule Name
	 */
	public String getAppAccessRuleName()
	{
		return getAppAccessRuleName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.appAccessRuleName</code> attribute. 
	 * @return the localized appAccessRuleName - Application Access Rule Name
	 */
	public Map<Language,String> getAllAppAccessRuleName(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,APPACCESSRULENAME,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.appAccessRuleName</code> attribute. 
	 * @return the localized appAccessRuleName - Application Access Rule Name
	 */
	public Map<Language,String> getAllAppAccessRuleName()
	{
		return getAllAppAccessRuleName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.appAccessRuleName</code> attribute. 
	 * @param value the appAccessRuleName - Application Access Rule Name
	 */
	public void setAppAccessRuleName(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEAppAccessRules.setAppAccessRuleName requires a session language", 0 );
		}
		setLocalizedProperty(ctx, APPACCESSRULENAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.appAccessRuleName</code> attribute. 
	 * @param value the appAccessRuleName - Application Access Rule Name
	 */
	public void setAppAccessRuleName(final String value)
	{
		setAppAccessRuleName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.appAccessRuleName</code> attribute. 
	 * @param value the appAccessRuleName - Application Access Rule Name
	 */
	public void setAllAppAccessRuleName(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,APPACCESSRULENAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.appAccessRuleName</code> attribute. 
	 * @param value the appAccessRuleName - Application Access Rule Name
	 */
	public void setAllAppAccessRuleName(final Map<Language,String> value)
	{
		setAllAppAccessRuleName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.applicationInfo</code> attribute.
	 * @return the applicationInfo - Application Information
	 */
	public BHGEApplicationDetails getApplicationInfo(final SessionContext ctx)
	{
		return (BHGEApplicationDetails)getProperty( ctx, APPLICATIONINFO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAppAccessRules.applicationInfo</code> attribute.
	 * @return the applicationInfo - Application Information
	 */
	public BHGEApplicationDetails getApplicationInfo()
	{
		return getApplicationInfo( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.applicationInfo</code> attribute. 
	 * @param value the applicationInfo - Application Information
	 */
	public void setApplicationInfo(final SessionContext ctx, final BHGEApplicationDetails value)
	{
		setProperty(ctx, APPLICATIONINFO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAppAccessRules.applicationInfo</code> attribute. 
	 * @param value the applicationInfo - Application Information
	 */
	public void setApplicationInfo(final BHGEApplicationDetails value)
	{
		setApplicationInfo( getSession().getSessionContext(), value );
	}
	
}
