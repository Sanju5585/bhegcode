/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.couponservices.jalo.SingleCodeCoupon;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.couponservices.jalo.SingleCodeCoupon BHGECoupon}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGECoupon extends SingleCodeCoupon
{
	/** Qualifier of the <code>BHGECoupon.doaNumber</code> attribute **/
	public static final String DOANUMBER = "doaNumber";
	/** Qualifier of the <code>BHGECoupon.applyOnlistPrice</code> attribute **/
	public static final String APPLYONLISTPRICE = "applyOnlistPrice";
	/** Qualifier of the <code>BHGECoupon.maxQuantityRedemptions</code> attribute **/
	public static final String MAXQUANTITYREDEMPTIONS = "maxQuantityRedemptions";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(SingleCodeCoupon.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(DOANUMBER, AttributeMode.INITIAL);
		tmp.put(APPLYONLISTPRICE, AttributeMode.INITIAL);
		tmp.put(MAXQUANTITYREDEMPTIONS, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECoupon.applyOnlistPrice</code> attribute.
	 * @return the applyOnlistPrice
	 */
	public Boolean isApplyOnlistPrice(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, APPLYONLISTPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECoupon.applyOnlistPrice</code> attribute.
	 * @return the applyOnlistPrice
	 */
	public Boolean isApplyOnlistPrice()
	{
		return isApplyOnlistPrice( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECoupon.applyOnlistPrice</code> attribute. 
	 * @return the applyOnlistPrice
	 */
	public boolean isApplyOnlistPriceAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isApplyOnlistPrice( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECoupon.applyOnlistPrice</code> attribute. 
	 * @return the applyOnlistPrice
	 */
	public boolean isApplyOnlistPriceAsPrimitive()
	{
		return isApplyOnlistPriceAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECoupon.applyOnlistPrice</code> attribute. 
	 * @param value the applyOnlistPrice
	 */
	public void setApplyOnlistPrice(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, APPLYONLISTPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECoupon.applyOnlistPrice</code> attribute. 
	 * @param value the applyOnlistPrice
	 */
	public void setApplyOnlistPrice(final Boolean value)
	{
		setApplyOnlistPrice( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECoupon.applyOnlistPrice</code> attribute. 
	 * @param value the applyOnlistPrice
	 */
	public void setApplyOnlistPrice(final SessionContext ctx, final boolean value)
	{
		setApplyOnlistPrice( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECoupon.applyOnlistPrice</code> attribute. 
	 * @param value the applyOnlistPrice
	 */
	public void setApplyOnlistPrice(final boolean value)
	{
		setApplyOnlistPrice( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECoupon.doaNumber</code> attribute.
	 * @return the doaNumber
	 */
	public String getDoaNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DOANUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECoupon.doaNumber</code> attribute.
	 * @return the doaNumber
	 */
	public String getDoaNumber()
	{
		return getDoaNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECoupon.doaNumber</code> attribute. 
	 * @param value the doaNumber
	 */
	public void setDoaNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DOANUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECoupon.doaNumber</code> attribute. 
	 * @param value the doaNumber
	 */
	public void setDoaNumber(final String value)
	{
		setDoaNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECoupon.maxQuantityRedemptions</code> attribute.
	 * @return the maxQuantityRedemptions
	 */
	public Long getMaxQuantityRedemptions(final SessionContext ctx)
	{
		return (Long)getProperty( ctx, MAXQUANTITYREDEMPTIONS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECoupon.maxQuantityRedemptions</code> attribute.
	 * @return the maxQuantityRedemptions
	 */
	public Long getMaxQuantityRedemptions()
	{
		return getMaxQuantityRedemptions( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECoupon.maxQuantityRedemptions</code> attribute. 
	 * @return the maxQuantityRedemptions
	 */
	public long getMaxQuantityRedemptionsAsPrimitive(final SessionContext ctx)
	{
		Long value = getMaxQuantityRedemptions( ctx );
		return value != null ? value.longValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECoupon.maxQuantityRedemptions</code> attribute. 
	 * @return the maxQuantityRedemptions
	 */
	public long getMaxQuantityRedemptionsAsPrimitive()
	{
		return getMaxQuantityRedemptionsAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECoupon.maxQuantityRedemptions</code> attribute. 
	 * @param value the maxQuantityRedemptions
	 */
	public void setMaxQuantityRedemptions(final SessionContext ctx, final Long value)
	{
		setProperty(ctx, MAXQUANTITYREDEMPTIONS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECoupon.maxQuantityRedemptions</code> attribute. 
	 * @param value the maxQuantityRedemptions
	 */
	public void setMaxQuantityRedemptions(final Long value)
	{
		setMaxQuantityRedemptions( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECoupon.maxQuantityRedemptions</code> attribute. 
	 * @param value the maxQuantityRedemptions
	 */
	public void setMaxQuantityRedemptions(final SessionContext ctx, final long value)
	{
		setMaxQuantityRedemptions( ctx,Long.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECoupon.maxQuantityRedemptions</code> attribute. 
	 * @param value the maxQuantityRedemptions
	 */
	public void setMaxQuantityRedemptions(final long value)
	{
		setMaxQuantityRedemptions( getSession().getSessionContext(), value );
	}
	
}
