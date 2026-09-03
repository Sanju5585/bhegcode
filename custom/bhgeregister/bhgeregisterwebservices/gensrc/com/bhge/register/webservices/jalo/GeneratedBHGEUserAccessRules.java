/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.register.webservices.jalo;

import com.bhge.register.webservices.constants.BhgeregisterwebservicesConstants;
import com.bhge.register.webservices.jalo.BHGEUserAccessRequest;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEUserAccessRules}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEUserAccessRules extends GenericItem
{
	/** Qualifier of the <code>BHGEUserAccessRules.userAccessRuleId</code> attribute **/
	public static final String USERACCESSRULEID = "userAccessRuleId";
	/** Qualifier of the <code>BHGEUserAccessRules.userAccessRequest</code> attribute **/
	public static final String USERACCESSREQUEST = "userAccessRequest";
	/** Qualifier of the <code>BHGEUserAccessRules.appAccessRuleDetails</code> attribute **/
	public static final String APPACCESSRULEDETAILS = "appAccessRuleDetails";
	/** Qualifier of the <code>BHGEUserAccessRules.ruleStatus</code> attribute **/
	public static final String RULESTATUS = "ruleStatus";
	/** Qualifier of the <code>BHGEUserAccessRules.ruleReasoning</code> attribute **/
	public static final String RULEREASONING = "ruleReasoning";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(USERACCESSRULEID, AttributeMode.INITIAL);
		tmp.put(USERACCESSREQUEST, AttributeMode.INITIAL);
		tmp.put(APPACCESSRULEDETAILS, AttributeMode.INITIAL);
		tmp.put(RULESTATUS, AttributeMode.INITIAL);
		tmp.put(RULEREASONING, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRules.appAccessRuleDetails</code> attribute.
	 * @return the appAccessRuleDetails - Application Access Rule
	 */
	public String getAppAccessRuleDetails(final SessionContext ctx)
	{
		return (String)getProperty( ctx, APPACCESSRULEDETAILS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRules.appAccessRuleDetails</code> attribute.
	 * @return the appAccessRuleDetails - Application Access Rule
	 */
	public String getAppAccessRuleDetails()
	{
		return getAppAccessRuleDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRules.appAccessRuleDetails</code> attribute. 
	 * @param value the appAccessRuleDetails - Application Access Rule
	 */
	public void setAppAccessRuleDetails(final SessionContext ctx, final String value)
	{
		setProperty(ctx, APPACCESSRULEDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRules.appAccessRuleDetails</code> attribute. 
	 * @param value the appAccessRuleDetails - Application Access Rule
	 */
	public void setAppAccessRuleDetails(final String value)
	{
		setAppAccessRuleDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRules.ruleReasoning</code> attribute.
	 * @return the ruleReasoning - Rule Reasoning
	 */
	public String getRuleReasoning(final SessionContext ctx)
	{
		return (String)getProperty( ctx, RULEREASONING);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRules.ruleReasoning</code> attribute.
	 * @return the ruleReasoning - Rule Reasoning
	 */
	public String getRuleReasoning()
	{
		return getRuleReasoning( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRules.ruleReasoning</code> attribute. 
	 * @param value the ruleReasoning - Rule Reasoning
	 */
	public void setRuleReasoning(final SessionContext ctx, final String value)
	{
		setProperty(ctx, RULEREASONING,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRules.ruleReasoning</code> attribute. 
	 * @param value the ruleReasoning - Rule Reasoning
	 */
	public void setRuleReasoning(final String value)
	{
		setRuleReasoning( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRules.ruleStatus</code> attribute.
	 * @return the ruleStatus - Rule Status
	 */
	public EnumerationValue getRuleStatus(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, RULESTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRules.ruleStatus</code> attribute.
	 * @return the ruleStatus - Rule Status
	 */
	public EnumerationValue getRuleStatus()
	{
		return getRuleStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRules.ruleStatus</code> attribute. 
	 * @param value the ruleStatus - Rule Status
	 */
	public void setRuleStatus(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, RULESTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRules.ruleStatus</code> attribute. 
	 * @param value the ruleStatus - Rule Status
	 */
	public void setRuleStatus(final EnumerationValue value)
	{
		setRuleStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRules.userAccessRequest</code> attribute.
	 * @return the userAccessRequest - User Access Request
	 */
	public BHGEUserAccessRequest getUserAccessRequest(final SessionContext ctx)
	{
		return (BHGEUserAccessRequest)getProperty( ctx, USERACCESSREQUEST);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRules.userAccessRequest</code> attribute.
	 * @return the userAccessRequest - User Access Request
	 */
	public BHGEUserAccessRequest getUserAccessRequest()
	{
		return getUserAccessRequest( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRules.userAccessRequest</code> attribute. 
	 * @param value the userAccessRequest - User Access Request
	 */
	public void setUserAccessRequest(final SessionContext ctx, final BHGEUserAccessRequest value)
	{
		setProperty(ctx, USERACCESSREQUEST,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRules.userAccessRequest</code> attribute. 
	 * @param value the userAccessRequest - User Access Request
	 */
	public void setUserAccessRequest(final BHGEUserAccessRequest value)
	{
		setUserAccessRequest( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRules.userAccessRuleId</code> attribute.
	 * @return the userAccessRuleId - User Access Rule Id
	 */
	public Long getUserAccessRuleId(final SessionContext ctx)
	{
		return (Long)getProperty( ctx, USERACCESSRULEID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRules.userAccessRuleId</code> attribute.
	 * @return the userAccessRuleId - User Access Rule Id
	 */
	public Long getUserAccessRuleId()
	{
		return getUserAccessRuleId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRules.userAccessRuleId</code> attribute. 
	 * @return the userAccessRuleId - User Access Rule Id
	 */
	public long getUserAccessRuleIdAsPrimitive(final SessionContext ctx)
	{
		Long value = getUserAccessRuleId( ctx );
		return value != null ? value.longValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRules.userAccessRuleId</code> attribute. 
	 * @return the userAccessRuleId - User Access Rule Id
	 */
	public long getUserAccessRuleIdAsPrimitive()
	{
		return getUserAccessRuleIdAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRules.userAccessRuleId</code> attribute. 
	 * @param value the userAccessRuleId - User Access Rule Id
	 */
	public void setUserAccessRuleId(final SessionContext ctx, final Long value)
	{
		setProperty(ctx, USERACCESSRULEID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRules.userAccessRuleId</code> attribute. 
	 * @param value the userAccessRuleId - User Access Rule Id
	 */
	public void setUserAccessRuleId(final Long value)
	{
		setUserAccessRuleId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRules.userAccessRuleId</code> attribute. 
	 * @param value the userAccessRuleId - User Access Rule Id
	 */
	public void setUserAccessRuleId(final SessionContext ctx, final long value)
	{
		setUserAccessRuleId( ctx,Long.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRules.userAccessRuleId</code> attribute. 
	 * @param value the userAccessRuleId - User Access Rule Id
	 */
	public void setUserAccessRuleId(final long value)
	{
		setUserAccessRuleId( getSession().getSessionContext(), value );
	}
	
}
