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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem PaymentMerchantInfo}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedPaymentMerchantInfo extends GenericItem
{
	/** Qualifier of the <code>PaymentMerchantInfo.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>PaymentMerchantInfo.description</code> attribute **/
	public static final String DESCRIPTION = "description";
	/** Qualifier of the <code>PaymentMerchantInfo.sharedKey</code> attribute **/
	public static final String SHAREDKEY = "sharedKey";
	/** Qualifier of the <code>PaymentMerchantInfo.serviceProvider</code> attribute **/
	public static final String SERVICEPROVIDER = "serviceProvider";
	/** Qualifier of the <code>PaymentMerchantInfo.hopURL</code> attribute **/
	public static final String HOPURL = "hopURL";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CODE, AttributeMode.INITIAL);
		tmp.put(DESCRIPTION, AttributeMode.INITIAL);
		tmp.put(SHAREDKEY, AttributeMode.INITIAL);
		tmp.put(SERVICEPROVIDER, AttributeMode.INITIAL);
		tmp.put(HOPURL, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PaymentMerchantInfo.code</code> attribute.
	 * @return the code - MerchantId for Payment Gateway
	 */
	public String getCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PaymentMerchantInfo.code</code> attribute.
	 * @return the code - MerchantId for Payment Gateway
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PaymentMerchantInfo.code</code> attribute. 
	 * @param value the code - MerchantId for Payment Gateway
	 */
	public void setCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PaymentMerchantInfo.code</code> attribute. 
	 * @param value the code - MerchantId for Payment Gateway
	 */
	public void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PaymentMerchantInfo.description</code> attribute.
	 * @return the description - Description for Payment Gateway
	 */
	public String getDescription(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PaymentMerchantInfo.description</code> attribute.
	 * @return the description - Description for Payment Gateway
	 */
	public String getDescription()
	{
		return getDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PaymentMerchantInfo.description</code> attribute. 
	 * @param value the description - Description for Payment Gateway
	 */
	public void setDescription(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PaymentMerchantInfo.description</code> attribute. 
	 * @param value the description - Description for Payment Gateway
	 */
	public void setDescription(final String value)
	{
		setDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PaymentMerchantInfo.hopURL</code> attribute.
	 * @return the hopURL - Hosted Order Page URL of Service Provider
	 */
	public String getHopURL(final SessionContext ctx)
	{
		return (String)getProperty( ctx, HOPURL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PaymentMerchantInfo.hopURL</code> attribute.
	 * @return the hopURL - Hosted Order Page URL of Service Provider
	 */
	public String getHopURL()
	{
		return getHopURL( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PaymentMerchantInfo.hopURL</code> attribute. 
	 * @param value the hopURL - Hosted Order Page URL of Service Provider
	 */
	public void setHopURL(final SessionContext ctx, final String value)
	{
		setProperty(ctx, HOPURL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PaymentMerchantInfo.hopURL</code> attribute. 
	 * @param value the hopURL - Hosted Order Page URL of Service Provider
	 */
	public void setHopURL(final String value)
	{
		setHopURL( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PaymentMerchantInfo.serviceProvider</code> attribute.
	 * @return the serviceProvider - Merchant Account Provider
	 */
	public String getServiceProvider(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SERVICEPROVIDER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PaymentMerchantInfo.serviceProvider</code> attribute.
	 * @return the serviceProvider - Merchant Account Provider
	 */
	public String getServiceProvider()
	{
		return getServiceProvider( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PaymentMerchantInfo.serviceProvider</code> attribute. 
	 * @param value the serviceProvider - Merchant Account Provider
	 */
	public void setServiceProvider(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SERVICEPROVIDER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PaymentMerchantInfo.serviceProvider</code> attribute. 
	 * @param value the serviceProvider - Merchant Account Provider
	 */
	public void setServiceProvider(final String value)
	{
		setServiceProvider( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PaymentMerchantInfo.sharedKey</code> attribute.
	 * @return the sharedKey - SharedKey for Payment Gateway
	 */
	public String getSharedKey(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SHAREDKEY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PaymentMerchantInfo.sharedKey</code> attribute.
	 * @return the sharedKey - SharedKey for Payment Gateway
	 */
	public String getSharedKey()
	{
		return getSharedKey( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PaymentMerchantInfo.sharedKey</code> attribute. 
	 * @param value the sharedKey - SharedKey for Payment Gateway
	 */
	public void setSharedKey(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SHAREDKEY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PaymentMerchantInfo.sharedKey</code> attribute. 
	 * @param value the sharedKey - SharedKey for Payment Gateway
	 */
	public void setSharedKey(final String value)
	{
		setSharedKey( getSession().getSessionContext(), value );
	}
	
}
