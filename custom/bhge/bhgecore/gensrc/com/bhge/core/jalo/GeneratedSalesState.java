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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem SalesState}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedSalesState extends GenericItem
{
	/** Qualifier of the <code>SalesState.salseStCode</code> attribute **/
	public static final String SALSESTCODE = "salseStCode";
	/** Qualifier of the <code>SalesState.countryCode</code> attribute **/
	public static final String COUNTRYCODE = "countryCode";
	/** Qualifier of the <code>SalesState.stateCode</code> attribute **/
	public static final String STATECODE = "stateCode";
	/** Qualifier of the <code>SalesState.stateName</code> attribute **/
	public static final String STATENAME = "stateName";
	/** Qualifier of the <code>SalesState.displayOrder</code> attribute **/
	public static final String DISPLAYORDER = "displayOrder";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(SALSESTCODE, AttributeMode.INITIAL);
		tmp.put(COUNTRYCODE, AttributeMode.INITIAL);
		tmp.put(STATECODE, AttributeMode.INITIAL);
		tmp.put(STATENAME, AttributeMode.INITIAL);
		tmp.put(DISPLAYORDER, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SalesState.countryCode</code> attribute.
	 * @return the countryCode - Country Code
	 */
	public String getCountryCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COUNTRYCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SalesState.countryCode</code> attribute.
	 * @return the countryCode - Country Code
	 */
	public String getCountryCode()
	{
		return getCountryCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SalesState.countryCode</code> attribute. 
	 * @param value the countryCode - Country Code
	 */
	public void setCountryCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COUNTRYCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SalesState.countryCode</code> attribute. 
	 * @param value the countryCode - Country Code
	 */
	public void setCountryCode(final String value)
	{
		setCountryCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SalesState.displayOrder</code> attribute.
	 * @return the displayOrder - Display Order
	 */
	public String getDisplayOrder(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DISPLAYORDER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SalesState.displayOrder</code> attribute.
	 * @return the displayOrder - Display Order
	 */
	public String getDisplayOrder()
	{
		return getDisplayOrder( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SalesState.displayOrder</code> attribute. 
	 * @param value the displayOrder - Display Order
	 */
	public void setDisplayOrder(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DISPLAYORDER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SalesState.displayOrder</code> attribute. 
	 * @param value the displayOrder - Display Order
	 */
	public void setDisplayOrder(final String value)
	{
		setDisplayOrder( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SalesState.salseStCode</code> attribute.
	 * @return the salseStCode - Salse St Code
	 */
	public String getSalseStCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SALSESTCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SalesState.salseStCode</code> attribute.
	 * @return the salseStCode - Salse St Code
	 */
	public String getSalseStCode()
	{
		return getSalseStCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SalesState.salseStCode</code> attribute. 
	 * @param value the salseStCode - Salse St Code
	 */
	public void setSalseStCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SALSESTCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SalesState.salseStCode</code> attribute. 
	 * @param value the salseStCode - Salse St Code
	 */
	public void setSalseStCode(final String value)
	{
		setSalseStCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SalesState.stateCode</code> attribute.
	 * @return the stateCode - State Code
	 */
	public String getStateCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, STATECODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SalesState.stateCode</code> attribute.
	 * @return the stateCode - State Code
	 */
	public String getStateCode()
	{
		return getStateCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SalesState.stateCode</code> attribute. 
	 * @param value the stateCode - State Code
	 */
	public void setStateCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, STATECODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SalesState.stateCode</code> attribute. 
	 * @param value the stateCode - State Code
	 */
	public void setStateCode(final String value)
	{
		setStateCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SalesState.stateName</code> attribute.
	 * @return the stateName - State Name
	 */
	public String getStateName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, STATENAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SalesState.stateName</code> attribute.
	 * @return the stateName - State Name
	 */
	public String getStateName()
	{
		return getStateName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SalesState.stateName</code> attribute. 
	 * @param value the stateName - State Name
	 */
	public void setStateName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, STATENAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SalesState.stateName</code> attribute. 
	 * @param value the stateName - State Name
	 */
	public void setStateName(final String value)
	{
		setStateName( getSession().getSessionContext(), value );
	}
	
}
