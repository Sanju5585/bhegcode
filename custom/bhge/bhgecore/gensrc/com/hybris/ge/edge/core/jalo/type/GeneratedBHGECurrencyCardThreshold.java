/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.hybris.ge.edge.core.jalo.type;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.Currency;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.BHGECurrencyCardThreshold BHGECurrencyCardThreshold}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGECurrencyCardThreshold extends GenericItem
{
	/** Qualifier of the <code>BHGECurrencyCardThreshold.currency</code> attribute **/
	public static final String CURRENCY = "currency";
	/** Qualifier of the <code>BHGECurrencyCardThreshold.cardLimit</code> attribute **/
	public static final String CARDLIMIT = "cardLimit";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CURRENCY, AttributeMode.INITIAL);
		tmp.put(CARDLIMIT, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyCardThreshold.cardLimit</code> attribute.
	 * @return the cardLimit
	 */
	public Double getCardLimit(final SessionContext ctx)
	{
		return (Double)getProperty( ctx, CARDLIMIT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyCardThreshold.cardLimit</code> attribute.
	 * @return the cardLimit
	 */
	public Double getCardLimit()
	{
		return getCardLimit( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyCardThreshold.cardLimit</code> attribute. 
	 * @return the cardLimit
	 */
	public double getCardLimitAsPrimitive(final SessionContext ctx)
	{
		Double value = getCardLimit( ctx );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyCardThreshold.cardLimit</code> attribute. 
	 * @return the cardLimit
	 */
	public double getCardLimitAsPrimitive()
	{
		return getCardLimitAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyCardThreshold.cardLimit</code> attribute. 
	 * @param value the cardLimit
	 */
	public void setCardLimit(final SessionContext ctx, final Double value)
	{
		setProperty(ctx, CARDLIMIT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyCardThreshold.cardLimit</code> attribute. 
	 * @param value the cardLimit
	 */
	public void setCardLimit(final Double value)
	{
		setCardLimit( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyCardThreshold.cardLimit</code> attribute. 
	 * @param value the cardLimit
	 */
	public void setCardLimit(final SessionContext ctx, final double value)
	{
		setCardLimit( ctx,Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyCardThreshold.cardLimit</code> attribute. 
	 * @param value the cardLimit
	 */
	public void setCardLimit(final double value)
	{
		setCardLimit( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyCardThreshold.currency</code> attribute.
	 * @return the currency
	 */
	public Currency getCurrency(final SessionContext ctx)
	{
		return (Currency)getProperty( ctx, CURRENCY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrencyCardThreshold.currency</code> attribute.
	 * @return the currency
	 */
	public Currency getCurrency()
	{
		return getCurrency( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyCardThreshold.currency</code> attribute. 
	 * @param value the currency
	 */
	public void setCurrency(final SessionContext ctx, final Currency value)
	{
		setProperty(ctx, CURRENCY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrencyCardThreshold.currency</code> attribute. 
	 * @param value the currency
	 */
	public void setCurrency(final Currency value)
	{
		setCurrency( getSession().getSessionContext(), value );
	}
	
}
