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
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.VCComponentPrice VCComponentPrice}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedVCComponentPrice extends GenericItem
{
	/** Qualifier of the <code>VCComponentPrice.name</code> attribute **/
	public static final String NAME = "name";
	/** Qualifier of the <code>VCComponentPrice.description</code> attribute **/
	public static final String DESCRIPTION = "description";
	/** Qualifier of the <code>VCComponentPrice.currency</code> attribute **/
	public static final String CURRENCY = "currency";
	/** Qualifier of the <code>VCComponentPrice.componentPrice</code> attribute **/
	public static final String COMPONENTPRICE = "componentPrice";
	/** Qualifier of the <code>VCComponentPrice.totalPrice</code> attribute **/
	public static final String TOTALPRICE = "totalPrice";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(NAME, AttributeMode.INITIAL);
		tmp.put(DESCRIPTION, AttributeMode.INITIAL);
		tmp.put(CURRENCY, AttributeMode.INITIAL);
		tmp.put(COMPONENTPRICE, AttributeMode.INITIAL);
		tmp.put(TOTALPRICE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.componentPrice</code> attribute.
	 * @return the componentPrice
	 */
	public Double getComponentPrice(final SessionContext ctx)
	{
		return (Double)getProperty( ctx, COMPONENTPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.componentPrice</code> attribute.
	 * @return the componentPrice
	 */
	public Double getComponentPrice()
	{
		return getComponentPrice( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.componentPrice</code> attribute. 
	 * @return the componentPrice
	 */
	public double getComponentPriceAsPrimitive(final SessionContext ctx)
	{
		Double value = getComponentPrice( ctx );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.componentPrice</code> attribute. 
	 * @return the componentPrice
	 */
	public double getComponentPriceAsPrimitive()
	{
		return getComponentPriceAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.componentPrice</code> attribute. 
	 * @param value the componentPrice
	 */
	public void setComponentPrice(final SessionContext ctx, final Double value)
	{
		setProperty(ctx, COMPONENTPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.componentPrice</code> attribute. 
	 * @param value the componentPrice
	 */
	public void setComponentPrice(final Double value)
	{
		setComponentPrice( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.componentPrice</code> attribute. 
	 * @param value the componentPrice
	 */
	public void setComponentPrice(final SessionContext ctx, final double value)
	{
		setComponentPrice( ctx,Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.componentPrice</code> attribute. 
	 * @param value the componentPrice
	 */
	public void setComponentPrice(final double value)
	{
		setComponentPrice( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.currency</code> attribute.
	 * @return the currency
	 */
	public String getCurrency(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CURRENCY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.currency</code> attribute.
	 * @return the currency
	 */
	public String getCurrency()
	{
		return getCurrency( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.currency</code> attribute. 
	 * @param value the currency
	 */
	public void setCurrency(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CURRENCY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.currency</code> attribute. 
	 * @param value the currency
	 */
	public void setCurrency(final String value)
	{
		setCurrency( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.description</code> attribute.
	 * @return the description
	 */
	public String getDescription(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.description</code> attribute.
	 * @return the description
	 */
	public String getDescription()
	{
		return getDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final String value)
	{
		setDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.name</code> attribute.
	 * @return the name
	 */
	public String getName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.name</code> attribute.
	 * @return the name
	 */
	public String getName()
	{
		return getName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final String value)
	{
		setName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.totalPrice</code> attribute.
	 * @return the totalPrice
	 */
	public Double getTotalPrice(final SessionContext ctx)
	{
		return (Double)getProperty( ctx, TOTALPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.totalPrice</code> attribute.
	 * @return the totalPrice
	 */
	public Double getTotalPrice()
	{
		return getTotalPrice( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.totalPrice</code> attribute. 
	 * @return the totalPrice
	 */
	public double getTotalPriceAsPrimitive(final SessionContext ctx)
	{
		Double value = getTotalPrice( ctx );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>VCComponentPrice.totalPrice</code> attribute. 
	 * @return the totalPrice
	 */
	public double getTotalPriceAsPrimitive()
	{
		return getTotalPriceAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.totalPrice</code> attribute. 
	 * @param value the totalPrice
	 */
	public void setTotalPrice(final SessionContext ctx, final Double value)
	{
		setProperty(ctx, TOTALPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.totalPrice</code> attribute. 
	 * @param value the totalPrice
	 */
	public void setTotalPrice(final Double value)
	{
		setTotalPrice( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.totalPrice</code> attribute. 
	 * @param value the totalPrice
	 */
	public void setTotalPrice(final SessionContext ctx, final double value)
	{
		setTotalPrice( ctx,Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>VCComponentPrice.totalPrice</code> attribute. 
	 * @param value the totalPrice
	 */
	public void setTotalPrice(final double value)
	{
		setTotalPrice( getSession().getSessionContext(), value );
	}
	
}
