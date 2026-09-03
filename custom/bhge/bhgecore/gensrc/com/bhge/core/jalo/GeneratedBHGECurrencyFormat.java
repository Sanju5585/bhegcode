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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGECurrencyFormat}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGECurrencyFormat extends GenericItem
{
	/** Qualifier of the <code>BHGECurrencyFormat.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>BHGECurrencyFormat.currencyDisplay</code> attribute **/
	public static final String CURRENCYDISPLAY = "currencyDisplay";
	/** Qualifier of the <code>BHGECurrencyFormat.isDefaultLocale</code> attribute **/
	public static final String ISDEFAULTLOCALE = "isDefaultLocale";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CODE, AttributeMode.INITIAL);
		tmp.put(CURRENCYDISPLAY, AttributeMode.INITIAL);
		tmp.put(ISDEFAULTLOCALE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyFormat.code</code> attribute.
	 * @return the code - stores the  of currency Locale ISO i.e en_US .
	 */
	public String getCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyFormat.code</code> attribute.
	 * @return the code - stores the  of currency Locale ISO i.e en_US .
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyFormat.code</code> attribute. 
	 * @param value the code - stores the  of currency Locale ISO i.e en_US .
	 */
	public void setCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyFormat.code</code> attribute. 
	 * @param value the code - stores the  of currency Locale ISO i.e en_US .
	 */
	public void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyFormat.currencyDisplay</code> attribute.
	 * @return the currencyDisplay - display list of currency formats option to user.
	 */
	public String getCurrencyDisplay(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CURRENCYDISPLAY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyFormat.currencyDisplay</code> attribute.
	 * @return the currencyDisplay - display list of currency formats option to user.
	 */
	public String getCurrencyDisplay()
	{
		return getCurrencyDisplay( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyFormat.currencyDisplay</code> attribute. 
	 * @param value the currencyDisplay - display list of currency formats option to user.
	 */
	public void setCurrencyDisplay(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CURRENCYDISPLAY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyFormat.currencyDisplay</code> attribute. 
	 * @param value the currencyDisplay - display list of currency formats option to user.
	 */
	public void setCurrencyDisplay(final String value)
	{
		setCurrencyDisplay( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyFormat.isDefaultLocale</code> attribute.
	 * @return the isDefaultLocale - stores default Locale currency format option.
	 */
	public Boolean isIsDefaultLocale(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISDEFAULTLOCALE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyFormat.isDefaultLocale</code> attribute.
	 * @return the isDefaultLocale - stores default Locale currency format option.
	 */
	public Boolean isIsDefaultLocale()
	{
		return isIsDefaultLocale( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyFormat.isDefaultLocale</code> attribute. 
	 * @return the isDefaultLocale - stores default Locale currency format option.
	 */
	public boolean isIsDefaultLocaleAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsDefaultLocale( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyFormat.isDefaultLocale</code> attribute. 
	 * @return the isDefaultLocale - stores default Locale currency format option.
	 */
	public boolean isIsDefaultLocaleAsPrimitive()
	{
		return isIsDefaultLocaleAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyFormat.isDefaultLocale</code> attribute. 
	 * @param value the isDefaultLocale - stores default Locale currency format option.
	 */
	public void setIsDefaultLocale(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISDEFAULTLOCALE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyFormat.isDefaultLocale</code> attribute. 
	 * @param value the isDefaultLocale - stores default Locale currency format option.
	 */
	public void setIsDefaultLocale(final Boolean value)
	{
		setIsDefaultLocale( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyFormat.isDefaultLocale</code> attribute. 
	 * @param value the isDefaultLocale - stores default Locale currency format option.
	 */
	public void setIsDefaultLocale(final SessionContext ctx, final boolean value)
	{
		setIsDefaultLocale( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyFormat.isDefaultLocale</code> attribute. 
	 * @param value the isDefaultLocale - stores default Locale currency format option.
	 */
	public void setIsDefaultLocale(final boolean value)
	{
		setIsDefaultLocale( getSession().getSessionContext(), value );
	}
	
}
