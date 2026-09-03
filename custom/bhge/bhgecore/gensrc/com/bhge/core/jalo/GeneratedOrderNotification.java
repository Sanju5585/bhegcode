/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.b2b.jalo.B2BUnit;
import de.hybris.platform.core.model.GEEdgeCustomer;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem OrderNotification}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedOrderNotification extends GenericItem
{
	/** Qualifier of the <code>OrderNotification.customer</code> attribute **/
	public static final String CUSTOMER = "customer";
	/** Qualifier of the <code>OrderNotification.b2bUnit</code> attribute **/
	public static final String B2BUNIT = "b2bUnit";
	/** Qualifier of the <code>OrderNotification.orderId</code> attribute **/
	public static final String ORDERID = "orderId";
	/** Qualifier of the <code>OrderNotification.lineNo</code> attribute **/
	public static final String LINENO = "lineNo";
	/** Qualifier of the <code>OrderNotification.isOrderRead</code> attribute **/
	public static final String ISORDERREAD = "isOrderRead";
	/** Qualifier of the <code>OrderNotification.isOrderEmailSent</code> attribute **/
	public static final String ISORDEREMAILSENT = "isOrderEmailSent";
	/** Qualifier of the <code>OrderNotification.orderStatus</code> attribute **/
	public static final String ORDERSTATUS = "orderStatus";
	/** Qualifier of the <code>OrderNotification.updatedDate</code> attribute **/
	public static final String UPDATEDDATE = "updatedDate";
	/** Qualifier of the <code>OrderNotification.blockReason</code> attribute **/
	public static final String BLOCKREASON = "blockReason";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CUSTOMER, AttributeMode.INITIAL);
		tmp.put(B2BUNIT, AttributeMode.INITIAL);
		tmp.put(ORDERID, AttributeMode.INITIAL);
		tmp.put(LINENO, AttributeMode.INITIAL);
		tmp.put(ISORDERREAD, AttributeMode.INITIAL);
		tmp.put(ISORDEREMAILSENT, AttributeMode.INITIAL);
		tmp.put(ORDERSTATUS, AttributeMode.INITIAL);
		tmp.put(UPDATEDDATE, AttributeMode.INITIAL);
		tmp.put(BLOCKREASON, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.b2bUnit</code> attribute.
	 * @return the b2bUnit - Session User's Default B2bUnit
	 */
	public B2BUnit getB2bUnit(final SessionContext ctx)
	{
		return (B2BUnit)getProperty( ctx, B2BUNIT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.b2bUnit</code> attribute.
	 * @return the b2bUnit - Session User's Default B2bUnit
	 */
	public B2BUnit getB2bUnit()
	{
		return getB2bUnit( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.b2bUnit</code> attribute. 
	 * @param value the b2bUnit - Session User's Default B2bUnit
	 */
	public void setB2bUnit(final SessionContext ctx, final B2BUnit value)
	{
		setProperty(ctx, B2BUNIT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.b2bUnit</code> attribute. 
	 * @param value the b2bUnit - Session User's Default B2bUnit
	 */
	public void setB2bUnit(final B2BUnit value)
	{
		setB2bUnit( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.blockReason</code> attribute.
	 * @return the blockReason - ERP Order Blocked Reason
	 */
	public String getBlockReason(final SessionContext ctx)
	{
		return (String)getProperty( ctx, BLOCKREASON);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.blockReason</code> attribute.
	 * @return the blockReason - ERP Order Blocked Reason
	 */
	public String getBlockReason()
	{
		return getBlockReason( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.blockReason</code> attribute. 
	 * @param value the blockReason - ERP Order Blocked Reason
	 */
	public void setBlockReason(final SessionContext ctx, final String value)
	{
		setProperty(ctx, BLOCKREASON,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.blockReason</code> attribute. 
	 * @param value the blockReason - ERP Order Blocked Reason
	 */
	public void setBlockReason(final String value)
	{
		setBlockReason( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.customer</code> attribute.
	 * @return the customer - Session User
	 */
	public GEEdgeCustomer getCustomer(final SessionContext ctx)
	{
		return (GEEdgeCustomer)getProperty( ctx, CUSTOMER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.customer</code> attribute.
	 * @return the customer - Session User
	 */
	public GEEdgeCustomer getCustomer()
	{
		return getCustomer( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.customer</code> attribute. 
	 * @param value the customer - Session User
	 */
	public void setCustomer(final SessionContext ctx, final GEEdgeCustomer value)
	{
		setProperty(ctx, CUSTOMER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.customer</code> attribute. 
	 * @param value the customer - Session User
	 */
	public void setCustomer(final GEEdgeCustomer value)
	{
		setCustomer( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.isOrderEmailSent</code> attribute.
	 * @return the isOrderEmailSent - Send Order Notification Email to Use
	 */
	public Boolean isIsOrderEmailSent(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISORDEREMAILSENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.isOrderEmailSent</code> attribute.
	 * @return the isOrderEmailSent - Send Order Notification Email to Use
	 */
	public Boolean isIsOrderEmailSent()
	{
		return isIsOrderEmailSent( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.isOrderEmailSent</code> attribute. 
	 * @return the isOrderEmailSent - Send Order Notification Email to Use
	 */
	public boolean isIsOrderEmailSentAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsOrderEmailSent( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.isOrderEmailSent</code> attribute. 
	 * @return the isOrderEmailSent - Send Order Notification Email to Use
	 */
	public boolean isIsOrderEmailSentAsPrimitive()
	{
		return isIsOrderEmailSentAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.isOrderEmailSent</code> attribute. 
	 * @param value the isOrderEmailSent - Send Order Notification Email to Use
	 */
	public void setIsOrderEmailSent(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISORDEREMAILSENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.isOrderEmailSent</code> attribute. 
	 * @param value the isOrderEmailSent - Send Order Notification Email to Use
	 */
	public void setIsOrderEmailSent(final Boolean value)
	{
		setIsOrderEmailSent( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.isOrderEmailSent</code> attribute. 
	 * @param value the isOrderEmailSent - Send Order Notification Email to Use
	 */
	public void setIsOrderEmailSent(final SessionContext ctx, final boolean value)
	{
		setIsOrderEmailSent( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.isOrderEmailSent</code> attribute. 
	 * @param value the isOrderEmailSent - Send Order Notification Email to Use
	 */
	public void setIsOrderEmailSent(final boolean value)
	{
		setIsOrderEmailSent( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.isOrderRead</code> attribute.
	 * @return the isOrderRead - Session User read the notification
	 */
	public Boolean isIsOrderRead(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISORDERREAD);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.isOrderRead</code> attribute.
	 * @return the isOrderRead - Session User read the notification
	 */
	public Boolean isIsOrderRead()
	{
		return isIsOrderRead( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.isOrderRead</code> attribute. 
	 * @return the isOrderRead - Session User read the notification
	 */
	public boolean isIsOrderReadAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsOrderRead( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.isOrderRead</code> attribute. 
	 * @return the isOrderRead - Session User read the notification
	 */
	public boolean isIsOrderReadAsPrimitive()
	{
		return isIsOrderReadAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.isOrderRead</code> attribute. 
	 * @param value the isOrderRead - Session User read the notification
	 */
	public void setIsOrderRead(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISORDERREAD,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.isOrderRead</code> attribute. 
	 * @param value the isOrderRead - Session User read the notification
	 */
	public void setIsOrderRead(final Boolean value)
	{
		setIsOrderRead( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.isOrderRead</code> attribute. 
	 * @param value the isOrderRead - Session User read the notification
	 */
	public void setIsOrderRead(final SessionContext ctx, final boolean value)
	{
		setIsOrderRead( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.isOrderRead</code> attribute. 
	 * @param value the isOrderRead - Session User read the notification
	 */
	public void setIsOrderRead(final boolean value)
	{
		setIsOrderRead( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.lineNo</code> attribute.
	 * @return the lineNo - Line Item No from SAP ERP
	 */
	public String getLineNo(final SessionContext ctx)
	{
		return (String)getProperty( ctx, LINENO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.lineNo</code> attribute.
	 * @return the lineNo - Line Item No from SAP ERP
	 */
	public String getLineNo()
	{
		return getLineNo( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.lineNo</code> attribute. 
	 * @param value the lineNo - Line Item No from SAP ERP
	 */
	public void setLineNo(final SessionContext ctx, final String value)
	{
		setProperty(ctx, LINENO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.lineNo</code> attribute. 
	 * @param value the lineNo - Line Item No from SAP ERP
	 */
	public void setLineNo(final String value)
	{
		setLineNo( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.orderId</code> attribute.
	 * @return the orderId - Order Id from SAP ERP
	 */
	public String getOrderId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ORDERID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.orderId</code> attribute.
	 * @return the orderId - Order Id from SAP ERP
	 */
	public String getOrderId()
	{
		return getOrderId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.orderId</code> attribute. 
	 * @param value the orderId - Order Id from SAP ERP
	 */
	public void setOrderId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ORDERID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.orderId</code> attribute. 
	 * @param value the orderId - Order Id from SAP ERP
	 */
	public void setOrderId(final String value)
	{
		setOrderId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.orderStatus</code> attribute.
	 * @return the orderStatus - SAP ERP Order Status
	 */
	public String getOrderStatus(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ORDERSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.orderStatus</code> attribute.
	 * @return the orderStatus - SAP ERP Order Status
	 */
	public String getOrderStatus()
	{
		return getOrderStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.orderStatus</code> attribute. 
	 * @param value the orderStatus - SAP ERP Order Status
	 */
	public void setOrderStatus(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ORDERSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.orderStatus</code> attribute. 
	 * @param value the orderStatus - SAP ERP Order Status
	 */
	public void setOrderStatus(final String value)
	{
		setOrderStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.updatedDate</code> attribute.
	 * @return the updatedDate - ERP Order Date. Will be used for removing entry from DB based on config value
	 */
	public Date getUpdatedDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, UPDATEDDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotification.updatedDate</code> attribute.
	 * @return the updatedDate - ERP Order Date. Will be used for removing entry from DB based on config value
	 */
	public Date getUpdatedDate()
	{
		return getUpdatedDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.updatedDate</code> attribute. 
	 * @param value the updatedDate - ERP Order Date. Will be used for removing entry from DB based on config value
	 */
	public void setUpdatedDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, UPDATEDDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotification.updatedDate</code> attribute. 
	 * @param value the updatedDate - ERP Order Date. Will be used for removing entry from DB based on config value
	 */
	public void setUpdatedDate(final Date value)
	{
		setUpdatedDate( getSession().getSessionContext(), value );
	}
	
}
