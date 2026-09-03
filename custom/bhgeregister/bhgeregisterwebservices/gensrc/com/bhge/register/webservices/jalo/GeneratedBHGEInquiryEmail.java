/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.register.webservices.jalo;

import com.bhge.register.webservices.constants.BhgeregisterwebservicesConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEInquiryEmail}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEInquiryEmail extends GenericItem
{
	/** Qualifier of the <code>BHGEInquiryEmail.id</code> attribute **/
	public static final String ID = "id";
	/** Qualifier of the <code>BHGEInquiryEmail.governmentUser</code> attribute **/
	public static final String GOVERNMENTUSER = "governmentUser";
	/** Qualifier of the <code>BHGEInquiryEmail.quoteOrderInquiry</code> attribute **/
	public static final String QUOTEORDERINQUIRY = "quoteOrderInquiry";
	/** Qualifier of the <code>BHGEInquiryEmail.serviceReturnsInquiry</code> attribute **/
	public static final String SERVICERETURNSINQUIRY = "serviceReturnsInquiry";
	/** Qualifier of the <code>BHGEInquiryEmail.shippingInquiry</code> attribute **/
	public static final String SHIPPINGINQUIRY = "shippingInquiry";
	/** Qualifier of the <code>BHGEInquiryEmail.invoicingInquiry</code> attribute **/
	public static final String INVOICINGINQUIRY = "invoicingInquiry";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(ID, AttributeMode.INITIAL);
		tmp.put(GOVERNMENTUSER, AttributeMode.INITIAL);
		tmp.put(QUOTEORDERINQUIRY, AttributeMode.INITIAL);
		tmp.put(SERVICERETURNSINQUIRY, AttributeMode.INITIAL);
		tmp.put(SHIPPINGINQUIRY, AttributeMode.INITIAL);
		tmp.put(INVOICINGINQUIRY, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.governmentUser</code> attribute.
	 * @return the governmentUser - Government User
	 */
	public String getGovernmentUser(final SessionContext ctx)
	{
		return (String)getProperty( ctx, GOVERNMENTUSER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.governmentUser</code> attribute.
	 * @return the governmentUser - Government User
	 */
	public String getGovernmentUser()
	{
		return getGovernmentUser( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.governmentUser</code> attribute. 
	 * @param value the governmentUser - Government User
	 */
	public void setGovernmentUser(final SessionContext ctx, final String value)
	{
		setProperty(ctx, GOVERNMENTUSER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.governmentUser</code> attribute. 
	 * @param value the governmentUser - Government User
	 */
	public void setGovernmentUser(final String value)
	{
		setGovernmentUser( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.id</code> attribute.
	 * @return the id - Government User Id
	 */
	public Long getId(final SessionContext ctx)
	{
		return (Long)getProperty( ctx, ID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.id</code> attribute.
	 * @return the id - Government User Id
	 */
	public Long getId()
	{
		return getId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.id</code> attribute. 
	 * @return the id - Government User Id
	 */
	public long getIdAsPrimitive(final SessionContext ctx)
	{
		Long value = getId( ctx );
		return value != null ? value.longValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.id</code> attribute. 
	 * @return the id - Government User Id
	 */
	public long getIdAsPrimitive()
	{
		return getIdAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.id</code> attribute. 
	 * @param value the id - Government User Id
	 */
	public void setId(final SessionContext ctx, final Long value)
	{
		setProperty(ctx, ID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.id</code> attribute. 
	 * @param value the id - Government User Id
	 */
	public void setId(final Long value)
	{
		setId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.id</code> attribute. 
	 * @param value the id - Government User Id
	 */
	public void setId(final SessionContext ctx, final long value)
	{
		setId( ctx,Long.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.id</code> attribute. 
	 * @param value the id - Government User Id
	 */
	public void setId(final long value)
	{
		setId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.invoicingInquiry</code> attribute.
	 * @return the invoicingInquiry - Invoicing Inquiry
	 */
	public String getInvoicingInquiry(final SessionContext ctx)
	{
		return (String)getProperty( ctx, INVOICINGINQUIRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.invoicingInquiry</code> attribute.
	 * @return the invoicingInquiry - Invoicing Inquiry
	 */
	public String getInvoicingInquiry()
	{
		return getInvoicingInquiry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.invoicingInquiry</code> attribute. 
	 * @param value the invoicingInquiry - Invoicing Inquiry
	 */
	public void setInvoicingInquiry(final SessionContext ctx, final String value)
	{
		setProperty(ctx, INVOICINGINQUIRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.invoicingInquiry</code> attribute. 
	 * @param value the invoicingInquiry - Invoicing Inquiry
	 */
	public void setInvoicingInquiry(final String value)
	{
		setInvoicingInquiry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.quoteOrderInquiry</code> attribute.
	 * @return the quoteOrderInquiry - Quote Order Inquiry
	 */
	public String getQuoteOrderInquiry(final SessionContext ctx)
	{
		return (String)getProperty( ctx, QUOTEORDERINQUIRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.quoteOrderInquiry</code> attribute.
	 * @return the quoteOrderInquiry - Quote Order Inquiry
	 */
	public String getQuoteOrderInquiry()
	{
		return getQuoteOrderInquiry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.quoteOrderInquiry</code> attribute. 
	 * @param value the quoteOrderInquiry - Quote Order Inquiry
	 */
	public void setQuoteOrderInquiry(final SessionContext ctx, final String value)
	{
		setProperty(ctx, QUOTEORDERINQUIRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.quoteOrderInquiry</code> attribute. 
	 * @param value the quoteOrderInquiry - Quote Order Inquiry
	 */
	public void setQuoteOrderInquiry(final String value)
	{
		setQuoteOrderInquiry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.serviceReturnsInquiry</code> attribute.
	 * @return the serviceReturnsInquiry - Service Returns Inquiry
	 */
	public String getServiceReturnsInquiry(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SERVICERETURNSINQUIRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.serviceReturnsInquiry</code> attribute.
	 * @return the serviceReturnsInquiry - Service Returns Inquiry
	 */
	public String getServiceReturnsInquiry()
	{
		return getServiceReturnsInquiry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.serviceReturnsInquiry</code> attribute. 
	 * @param value the serviceReturnsInquiry - Service Returns Inquiry
	 */
	public void setServiceReturnsInquiry(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SERVICERETURNSINQUIRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.serviceReturnsInquiry</code> attribute. 
	 * @param value the serviceReturnsInquiry - Service Returns Inquiry
	 */
	public void setServiceReturnsInquiry(final String value)
	{
		setServiceReturnsInquiry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.shippingInquiry</code> attribute.
	 * @return the shippingInquiry - Shipping Inquiry
	 */
	public String getShippingInquiry(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SHIPPINGINQUIRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEInquiryEmail.shippingInquiry</code> attribute.
	 * @return the shippingInquiry - Shipping Inquiry
	 */
	public String getShippingInquiry()
	{
		return getShippingInquiry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.shippingInquiry</code> attribute. 
	 * @param value the shippingInquiry - Shipping Inquiry
	 */
	public void setShippingInquiry(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SHIPPINGINQUIRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEInquiryEmail.shippingInquiry</code> attribute. 
	 * @param value the shippingInquiry - Shipping Inquiry
	 */
	public void setShippingInquiry(final String value)
	{
		setShippingInquiry( getSession().getSessionContext(), value );
	}
	
}
