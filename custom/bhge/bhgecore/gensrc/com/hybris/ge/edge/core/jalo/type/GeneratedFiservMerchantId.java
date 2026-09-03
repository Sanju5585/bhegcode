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
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.FiservMerchantId FiservMerchantId}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedFiservMerchantId extends GenericItem
{
	/** Qualifier of the <code>FiservMerchantId.salesAreaId</code> attribute **/
	public static final String SALESAREAID = "salesAreaId";
	/** Qualifier of the <code>FiservMerchantId.currency</code> attribute **/
	public static final String CURRENCY = "currency";
	/** Qualifier of the <code>FiservMerchantId.merchantId</code> attribute **/
	public static final String MERCHANTID = "merchantId";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(SALESAREAID, AttributeMode.INITIAL);
		tmp.put(CURRENCY, AttributeMode.INITIAL);
		tmp.put(MERCHANTID, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FiservMerchantId.currency</code> attribute.
	 * @return the currency
	 */
	public Currency getCurrency(final SessionContext ctx)
	{
		return (Currency)getProperty( ctx, CURRENCY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FiservMerchantId.currency</code> attribute.
	 * @return the currency
	 */
	public Currency getCurrency()
	{
		return getCurrency( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FiservMerchantId.currency</code> attribute. 
	 * @param value the currency
	 */
	public void setCurrency(final SessionContext ctx, final Currency value)
	{
		setProperty(ctx, CURRENCY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FiservMerchantId.currency</code> attribute. 
	 * @param value the currency
	 */
	public void setCurrency(final Currency value)
	{
		setCurrency( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FiservMerchantId.merchantId</code> attribute.
	 * @return the merchantId
	 */
	public String getMerchantId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, MERCHANTID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FiservMerchantId.merchantId</code> attribute.
	 * @return the merchantId
	 */
	public String getMerchantId()
	{
		return getMerchantId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FiservMerchantId.merchantId</code> attribute. 
	 * @param value the merchantId
	 */
	public void setMerchantId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, MERCHANTID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FiservMerchantId.merchantId</code> attribute. 
	 * @param value the merchantId
	 */
	public void setMerchantId(final String value)
	{
		setMerchantId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FiservMerchantId.salesAreaId</code> attribute.
	 * @return the salesAreaId
	 */
	public String getSalesAreaId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SALESAREAID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FiservMerchantId.salesAreaId</code> attribute.
	 * @return the salesAreaId
	 */
	public String getSalesAreaId()
	{
		return getSalesAreaId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FiservMerchantId.salesAreaId</code> attribute. 
	 * @param value the salesAreaId
	 */
	public void setSalesAreaId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SALESAREAID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FiservMerchantId.salesAreaId</code> attribute. 
	 * @param value the salesAreaId
	 */
	public void setSalesAreaId(final String value)
	{
		setSalesAreaId( getSession().getSessionContext(), value );
	}
	
}
