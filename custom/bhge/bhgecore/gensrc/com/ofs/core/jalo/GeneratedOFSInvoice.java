/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.ofs.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.Currency;
import de.hybris.platform.jalo.order.payment.PaymentMode;
import de.hybris.platform.jalo.user.Customer;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.ofs.core.jalo.OFSInvoice Invoice}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedOFSInvoice extends GenericItem
{
	/** Qualifier of the <code>Invoice.invoiceID</code> attribute **/
	public static final String INVOICEID = "invoiceID";
	/** Qualifier of the <code>Invoice.totalAmount</code> attribute **/
	public static final String TOTALAMOUNT = "totalAmount";
	/** Qualifier of the <code>Invoice.invoiceCurrency</code> attribute **/
	public static final String INVOICECURRENCY = "invoiceCurrency";
	/** Qualifier of the <code>Invoice.paymentDate</code> attribute **/
	public static final String PAYMENTDATE = "paymentDate";
	/** Qualifier of the <code>Invoice.paymentDueDate</code> attribute **/
	public static final String PAYMENTDUEDATE = "paymentDueDate";
	/** Qualifier of the <code>Invoice.paymentMode</code> attribute **/
	public static final String PAYMENTMODE = "paymentMode";
	/** Qualifier of the <code>Invoice.paidByUser</code> attribute **/
	public static final String PAIDBYUSER = "paidByUser";
	/** Qualifier of the <code>Invoice.docType</code> attribute **/
	public static final String DOCTYPE = "docType";
	/** Qualifier of the <code>Invoice.checkoutSessionId</code> attribute **/
	public static final String CHECKOUTSESSIONID = "checkoutSessionId";
	/** Qualifier of the <code>Invoice.transactionStatus</code> attribute **/
	public static final String TRANSACTIONSTATUS = "transactionStatus";
	/** Qualifier of the <code>Invoice.paymentType</code> attribute **/
	public static final String PAYMENTTYPE = "paymentType";
	/** Qualifier of the <code>Invoice.paymentStatus</code> attribute **/
	public static final String PAYMENTSTATUS = "paymentStatus";
	/** Qualifier of the <code>Invoice.failureMsg</code> attribute **/
	public static final String FAILUREMSG = "failureMsg";
	/** Qualifier of the <code>Invoice.paymentFailedDate</code> attribute **/
	public static final String PAYMENTFAILEDDATE = "paymentFailedDate";
	/** Qualifier of the <code>Invoice.isSuccessMailSent</code> attribute **/
	public static final String ISSUCCESSMAILSENT = "isSuccessMailSent";
	/** Qualifier of the <code>Invoice.isFailedMailSent</code> attribute **/
	public static final String ISFAILEDMAILSENT = "isFailedMailSent";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(INVOICEID, AttributeMode.INITIAL);
		tmp.put(TOTALAMOUNT, AttributeMode.INITIAL);
		tmp.put(INVOICECURRENCY, AttributeMode.INITIAL);
		tmp.put(PAYMENTDATE, AttributeMode.INITIAL);
		tmp.put(PAYMENTDUEDATE, AttributeMode.INITIAL);
		tmp.put(PAYMENTMODE, AttributeMode.INITIAL);
		tmp.put(PAIDBYUSER, AttributeMode.INITIAL);
		tmp.put(DOCTYPE, AttributeMode.INITIAL);
		tmp.put(CHECKOUTSESSIONID, AttributeMode.INITIAL);
		tmp.put(TRANSACTIONSTATUS, AttributeMode.INITIAL);
		tmp.put(PAYMENTTYPE, AttributeMode.INITIAL);
		tmp.put(PAYMENTSTATUS, AttributeMode.INITIAL);
		tmp.put(FAILUREMSG, AttributeMode.INITIAL);
		tmp.put(PAYMENTFAILEDDATE, AttributeMode.INITIAL);
		tmp.put(ISSUCCESSMAILSENT, AttributeMode.INITIAL);
		tmp.put(ISFAILEDMAILSENT, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.checkoutSessionId</code> attribute.
	 * @return the checkoutSessionId - Checkout Session  Id
	 */
	public String getCheckoutSessionId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CHECKOUTSESSIONID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.checkoutSessionId</code> attribute.
	 * @return the checkoutSessionId - Checkout Session  Id
	 */
	public String getCheckoutSessionId()
	{
		return getCheckoutSessionId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.checkoutSessionId</code> attribute. 
	 * @param value the checkoutSessionId - Checkout Session  Id
	 */
	public void setCheckoutSessionId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CHECKOUTSESSIONID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.checkoutSessionId</code> attribute. 
	 * @param value the checkoutSessionId - Checkout Session  Id
	 */
	public void setCheckoutSessionId(final String value)
	{
		setCheckoutSessionId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.docType</code> attribute.
	 * @return the docType - Doc Type
	 */
	public String getDocType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DOCTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.docType</code> attribute.
	 * @return the docType - Doc Type
	 */
	public String getDocType()
	{
		return getDocType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.docType</code> attribute. 
	 * @param value the docType - Doc Type
	 */
	public void setDocType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DOCTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.docType</code> attribute. 
	 * @param value the docType - Doc Type
	 */
	public void setDocType(final String value)
	{
		setDocType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.failureMsg</code> attribute.
	 * @return the failureMsg
	 */
	public String getFailureMsg(final SessionContext ctx)
	{
		return (String)getProperty( ctx, FAILUREMSG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.failureMsg</code> attribute.
	 * @return the failureMsg
	 */
	public String getFailureMsg()
	{
		return getFailureMsg( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.failureMsg</code> attribute. 
	 * @param value the failureMsg
	 */
	public void setFailureMsg(final SessionContext ctx, final String value)
	{
		setProperty(ctx, FAILUREMSG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.failureMsg</code> attribute. 
	 * @param value the failureMsg
	 */
	public void setFailureMsg(final String value)
	{
		setFailureMsg( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.invoiceCurrency</code> attribute.
	 * @return the invoiceCurrency - Currency of the invoice
	 */
	public Currency getInvoiceCurrency(final SessionContext ctx)
	{
		return (Currency)getProperty( ctx, INVOICECURRENCY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.invoiceCurrency</code> attribute.
	 * @return the invoiceCurrency - Currency of the invoice
	 */
	public Currency getInvoiceCurrency()
	{
		return getInvoiceCurrency( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.invoiceCurrency</code> attribute. 
	 * @param value the invoiceCurrency - Currency of the invoice
	 */
	public void setInvoiceCurrency(final SessionContext ctx, final Currency value)
	{
		setProperty(ctx, INVOICECURRENCY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.invoiceCurrency</code> attribute. 
	 * @param value the invoiceCurrency - Currency of the invoice
	 */
	public void setInvoiceCurrency(final Currency value)
	{
		setInvoiceCurrency( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.invoiceID</code> attribute.
	 * @return the invoiceID - ID against every invoice
	 */
	public String getInvoiceID(final SessionContext ctx)
	{
		return (String)getProperty( ctx, INVOICEID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.invoiceID</code> attribute.
	 * @return the invoiceID - ID against every invoice
	 */
	public String getInvoiceID()
	{
		return getInvoiceID( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.invoiceID</code> attribute. 
	 * @param value the invoiceID - ID against every invoice
	 */
	public void setInvoiceID(final SessionContext ctx, final String value)
	{
		setProperty(ctx, INVOICEID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.invoiceID</code> attribute. 
	 * @param value the invoiceID - ID against every invoice
	 */
	public void setInvoiceID(final String value)
	{
		setInvoiceID( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.isFailedMailSent</code> attribute.
	 * @return the isFailedMailSent - To check if success mail sent
	 */
	public Boolean isIsFailedMailSent(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISFAILEDMAILSENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.isFailedMailSent</code> attribute.
	 * @return the isFailedMailSent - To check if success mail sent
	 */
	public Boolean isIsFailedMailSent()
	{
		return isIsFailedMailSent( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.isFailedMailSent</code> attribute. 
	 * @return the isFailedMailSent - To check if success mail sent
	 */
	public boolean isIsFailedMailSentAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsFailedMailSent( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.isFailedMailSent</code> attribute. 
	 * @return the isFailedMailSent - To check if success mail sent
	 */
	public boolean isIsFailedMailSentAsPrimitive()
	{
		return isIsFailedMailSentAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.isFailedMailSent</code> attribute. 
	 * @param value the isFailedMailSent - To check if success mail sent
	 */
	public void setIsFailedMailSent(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISFAILEDMAILSENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.isFailedMailSent</code> attribute. 
	 * @param value the isFailedMailSent - To check if success mail sent
	 */
	public void setIsFailedMailSent(final Boolean value)
	{
		setIsFailedMailSent( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.isFailedMailSent</code> attribute. 
	 * @param value the isFailedMailSent - To check if success mail sent
	 */
	public void setIsFailedMailSent(final SessionContext ctx, final boolean value)
	{
		setIsFailedMailSent( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.isFailedMailSent</code> attribute. 
	 * @param value the isFailedMailSent - To check if success mail sent
	 */
	public void setIsFailedMailSent(final boolean value)
	{
		setIsFailedMailSent( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.isSuccessMailSent</code> attribute.
	 * @return the isSuccessMailSent - To check if success mail sent
	 */
	public Boolean isIsSuccessMailSent(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISSUCCESSMAILSENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.isSuccessMailSent</code> attribute.
	 * @return the isSuccessMailSent - To check if success mail sent
	 */
	public Boolean isIsSuccessMailSent()
	{
		return isIsSuccessMailSent( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.isSuccessMailSent</code> attribute. 
	 * @return the isSuccessMailSent - To check if success mail sent
	 */
	public boolean isIsSuccessMailSentAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsSuccessMailSent( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.isSuccessMailSent</code> attribute. 
	 * @return the isSuccessMailSent - To check if success mail sent
	 */
	public boolean isIsSuccessMailSentAsPrimitive()
	{
		return isIsSuccessMailSentAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.isSuccessMailSent</code> attribute. 
	 * @param value the isSuccessMailSent - To check if success mail sent
	 */
	public void setIsSuccessMailSent(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISSUCCESSMAILSENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.isSuccessMailSent</code> attribute. 
	 * @param value the isSuccessMailSent - To check if success mail sent
	 */
	public void setIsSuccessMailSent(final Boolean value)
	{
		setIsSuccessMailSent( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.isSuccessMailSent</code> attribute. 
	 * @param value the isSuccessMailSent - To check if success mail sent
	 */
	public void setIsSuccessMailSent(final SessionContext ctx, final boolean value)
	{
		setIsSuccessMailSent( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.isSuccessMailSent</code> attribute. 
	 * @param value the isSuccessMailSent - To check if success mail sent
	 */
	public void setIsSuccessMailSent(final boolean value)
	{
		setIsSuccessMailSent( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paidByUser</code> attribute.
	 * @return the paidByUser - Invoice paid by
	 */
	public Customer getPaidByUser(final SessionContext ctx)
	{
		return (Customer)getProperty( ctx, PAIDBYUSER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paidByUser</code> attribute.
	 * @return the paidByUser - Invoice paid by
	 */
	public Customer getPaidByUser()
	{
		return getPaidByUser( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paidByUser</code> attribute. 
	 * @param value the paidByUser - Invoice paid by
	 */
	public void setPaidByUser(final SessionContext ctx, final Customer value)
	{
		setProperty(ctx, PAIDBYUSER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paidByUser</code> attribute. 
	 * @param value the paidByUser - Invoice paid by
	 */
	public void setPaidByUser(final Customer value)
	{
		setPaidByUser( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paymentDate</code> attribute.
	 * @return the paymentDate - Date on which invoice was paid
	 */
	public Date getPaymentDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, PAYMENTDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paymentDate</code> attribute.
	 * @return the paymentDate - Date on which invoice was paid
	 */
	public Date getPaymentDate()
	{
		return getPaymentDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paymentDate</code> attribute. 
	 * @param value the paymentDate - Date on which invoice was paid
	 */
	public void setPaymentDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, PAYMENTDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paymentDate</code> attribute. 
	 * @param value the paymentDate - Date on which invoice was paid
	 */
	public void setPaymentDate(final Date value)
	{
		setPaymentDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paymentDueDate</code> attribute.
	 * @return the paymentDueDate - Date on which invoice was due for payment
	 */
	public Date getPaymentDueDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, PAYMENTDUEDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paymentDueDate</code> attribute.
	 * @return the paymentDueDate - Date on which invoice was due for payment
	 */
	public Date getPaymentDueDate()
	{
		return getPaymentDueDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paymentDueDate</code> attribute. 
	 * @param value the paymentDueDate - Date on which invoice was due for payment
	 */
	public void setPaymentDueDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, PAYMENTDUEDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paymentDueDate</code> attribute. 
	 * @param value the paymentDueDate - Date on which invoice was due for payment
	 */
	public void setPaymentDueDate(final Date value)
	{
		setPaymentDueDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paymentFailedDate</code> attribute.
	 * @return the paymentFailedDate - Date on which invoice was payment failed
	 */
	public Date getPaymentFailedDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, PAYMENTFAILEDDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paymentFailedDate</code> attribute.
	 * @return the paymentFailedDate - Date on which invoice was payment failed
	 */
	public Date getPaymentFailedDate()
	{
		return getPaymentFailedDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paymentFailedDate</code> attribute. 
	 * @param value the paymentFailedDate - Date on which invoice was payment failed
	 */
	public void setPaymentFailedDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, PAYMENTFAILEDDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paymentFailedDate</code> attribute. 
	 * @param value the paymentFailedDate - Date on which invoice was payment failed
	 */
	public void setPaymentFailedDate(final Date value)
	{
		setPaymentFailedDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paymentMode</code> attribute.
	 * @return the paymentMode - Payment mode for invoice. SAP credit or CC or both
	 */
	public PaymentMode getPaymentMode(final SessionContext ctx)
	{
		return (PaymentMode)getProperty( ctx, PAYMENTMODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paymentMode</code> attribute.
	 * @return the paymentMode - Payment mode for invoice. SAP credit or CC or both
	 */
	public PaymentMode getPaymentMode()
	{
		return getPaymentMode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paymentMode</code> attribute. 
	 * @param value the paymentMode - Payment mode for invoice. SAP credit or CC or both
	 */
	public void setPaymentMode(final SessionContext ctx, final PaymentMode value)
	{
		setProperty(ctx, PAYMENTMODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paymentMode</code> attribute. 
	 * @param value the paymentMode - Payment mode for invoice. SAP credit or CC or both
	 */
	public void setPaymentMode(final PaymentMode value)
	{
		setPaymentMode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paymentStatus</code> attribute.
	 * @return the paymentStatus
	 */
	public String getPaymentStatus(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PAYMENTSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paymentStatus</code> attribute.
	 * @return the paymentStatus
	 */
	public String getPaymentStatus()
	{
		return getPaymentStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paymentStatus</code> attribute. 
	 * @param value the paymentStatus
	 */
	public void setPaymentStatus(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PAYMENTSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paymentStatus</code> attribute. 
	 * @param value the paymentStatus
	 */
	public void setPaymentStatus(final String value)
	{
		setPaymentStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paymentType</code> attribute.
	 * @return the paymentType - Payment Type - CC
	 */
	public String getPaymentType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PAYMENTTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.paymentType</code> attribute.
	 * @return the paymentType - Payment Type - CC
	 */
	public String getPaymentType()
	{
		return getPaymentType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paymentType</code> attribute. 
	 * @param value the paymentType - Payment Type - CC
	 */
	public void setPaymentType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PAYMENTTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.paymentType</code> attribute. 
	 * @param value the paymentType - Payment Type - CC
	 */
	public void setPaymentType(final String value)
	{
		setPaymentType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.totalAmount</code> attribute.
	 * @return the totalAmount - Total amount for the invoice
	 */
	public Double getTotalAmount(final SessionContext ctx)
	{
		return (Double)getProperty( ctx, TOTALAMOUNT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.totalAmount</code> attribute.
	 * @return the totalAmount - Total amount for the invoice
	 */
	public Double getTotalAmount()
	{
		return getTotalAmount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.totalAmount</code> attribute. 
	 * @return the totalAmount - Total amount for the invoice
	 */
	public double getTotalAmountAsPrimitive(final SessionContext ctx)
	{
		Double value = getTotalAmount( ctx );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.totalAmount</code> attribute. 
	 * @return the totalAmount - Total amount for the invoice
	 */
	public double getTotalAmountAsPrimitive()
	{
		return getTotalAmountAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.totalAmount</code> attribute. 
	 * @param value the totalAmount - Total amount for the invoice
	 */
	public void setTotalAmount(final SessionContext ctx, final Double value)
	{
		setProperty(ctx, TOTALAMOUNT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.totalAmount</code> attribute. 
	 * @param value the totalAmount - Total amount for the invoice
	 */
	public void setTotalAmount(final Double value)
	{
		setTotalAmount( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.totalAmount</code> attribute. 
	 * @param value the totalAmount - Total amount for the invoice
	 */
	public void setTotalAmount(final SessionContext ctx, final double value)
	{
		setTotalAmount( ctx,Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.totalAmount</code> attribute. 
	 * @param value the totalAmount - Total amount for the invoice
	 */
	public void setTotalAmount(final double value)
	{
		setTotalAmount( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.transactionStatus</code> attribute.
	 * @return the transactionStatus - Invoice transaction Status
	 */
	public String getTransactionStatus(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TRANSACTIONSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Invoice.transactionStatus</code> attribute.
	 * @return the transactionStatus - Invoice transaction Status
	 */
	public String getTransactionStatus()
	{
		return getTransactionStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.transactionStatus</code> attribute. 
	 * @param value the transactionStatus - Invoice transaction Status
	 */
	public void setTransactionStatus(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TRANSACTIONSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Invoice.transactionStatus</code> attribute. 
	 * @param value the transactionStatus - Invoice transaction Status
	 */
	public void setTransactionStatus(final String value)
	{
		setTransactionStatus( getSession().getSessionContext(), value );
	}
	
}
