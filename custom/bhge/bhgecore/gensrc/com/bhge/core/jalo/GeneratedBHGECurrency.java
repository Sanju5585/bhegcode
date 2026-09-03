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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGECurrency}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGECurrency extends GenericItem
{
	/** Qualifier of the <code>BHGECurrency.salesOrg</code> attribute **/
	public static final String SALESORG = "salesOrg";
	/** Qualifier of the <code>BHGECurrency.customerId</code> attribute **/
	public static final String CUSTOMERID = "customerId";
	/** Qualifier of the <code>BHGECurrency.productType</code> attribute **/
	public static final String PRODUCTTYPE = "productType";
	/** Qualifier of the <code>BHGECurrency.currency</code> attribute **/
	public static final String CURRENCY = "currency";
	/** Qualifier of the <code>BHGECurrency.pricingProcedure</code> attribute **/
	public static final String PRICINGPROCEDURE = "pricingProcedure";
	/** Qualifier of the <code>BHGECurrency.remit</code> attribute **/
	public static final String REMIT = "remit";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(SALESORG, AttributeMode.INITIAL);
		tmp.put(CUSTOMERID, AttributeMode.INITIAL);
		tmp.put(PRODUCTTYPE, AttributeMode.INITIAL);
		tmp.put(CURRENCY, AttributeMode.INITIAL);
		tmp.put(PRICINGPROCEDURE, AttributeMode.INITIAL);
		tmp.put(REMIT, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrency.currency</code> attribute.
	 * @return the currency - Customer Currency details
	 */
	public String getCurrency(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CURRENCY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrency.currency</code> attribute.
	 * @return the currency - Customer Currency details
	 */
	public String getCurrency()
	{
		return getCurrency( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrency.currency</code> attribute. 
	 * @param value the currency - Customer Currency details
	 */
	public void setCurrency(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CURRENCY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrency.currency</code> attribute. 
	 * @param value the currency - Customer Currency details
	 */
	public void setCurrency(final String value)
	{
		setCurrency( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrency.customerId</code> attribute.
	 * @return the customerId - B2B unit Name
	 */
	public String getCustomerId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CUSTOMERID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrency.customerId</code> attribute.
	 * @return the customerId - B2B unit Name
	 */
	public String getCustomerId()
	{
		return getCustomerId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrency.customerId</code> attribute. 
	 * @param value the customerId - B2B unit Name
	 */
	public void setCustomerId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CUSTOMERID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrency.customerId</code> attribute. 
	 * @param value the customerId - B2B unit Name
	 */
	public void setCustomerId(final String value)
	{
		setCustomerId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrency.pricingProcedure</code> attribute.
	 * @return the pricingProcedure - Pricing procedure
	 */
	public String getPricingProcedure(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PRICINGPROCEDURE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrency.pricingProcedure</code> attribute.
	 * @return the pricingProcedure - Pricing procedure
	 */
	public String getPricingProcedure()
	{
		return getPricingProcedure( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrency.pricingProcedure</code> attribute. 
	 * @param value the pricingProcedure - Pricing procedure
	 */
	public void setPricingProcedure(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PRICINGPROCEDURE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrency.pricingProcedure</code> attribute. 
	 * @param value the pricingProcedure - Pricing procedure
	 */
	public void setPricingProcedure(final String value)
	{
		setPricingProcedure( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrency.productType</code> attribute.
	 * @return the productType - Product Type
	 */
	public String getProductType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PRODUCTTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrency.productType</code> attribute.
	 * @return the productType - Product Type
	 */
	public String getProductType()
	{
		return getProductType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrency.productType</code> attribute. 
	 * @param value the productType - Product Type
	 */
	public void setProductType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PRODUCTTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrency.productType</code> attribute. 
	 * @param value the productType - Product Type
	 */
	public void setProductType(final String value)
	{
		setProductType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrency.remit</code> attribute.
	 * @return the remit - Remit charge
	 */
	public String getRemit(final SessionContext ctx)
	{
		return (String)getProperty( ctx, REMIT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrency.remit</code> attribute.
	 * @return the remit - Remit charge
	 */
	public String getRemit()
	{
		return getRemit( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrency.remit</code> attribute. 
	 * @param value the remit - Remit charge
	 */
	public void setRemit(final SessionContext ctx, final String value)
	{
		setProperty(ctx, REMIT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrency.remit</code> attribute. 
	 * @param value the remit - Remit charge
	 */
	public void setRemit(final String value)
	{
		setRemit( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrency.salesOrg</code> attribute.
	 * @return the salesOrg - Sales Organisation
	 */
	public String getSalesOrg(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SALESORG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECurrency.salesOrg</code> attribute.
	 * @return the salesOrg - Sales Organisation
	 */
	public String getSalesOrg()
	{
		return getSalesOrg( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrency.salesOrg</code> attribute. 
	 * @param value the salesOrg - Sales Organisation
	 */
	public void setSalesOrg(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SALESORG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECurrency.salesOrg</code> attribute. 
	 * @param value the salesOrg - Sales Organisation
	 */
	public void setSalesOrg(final String value)
	{
		setSalesOrg( getSession().getSessionContext(), value );
	}
	
}
