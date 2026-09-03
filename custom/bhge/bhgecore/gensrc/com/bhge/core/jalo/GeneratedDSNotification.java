/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.b2b.jalo.B2BUnit;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem DSNotification}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedDSNotification extends GenericItem
{
	/** Qualifier of the <code>DSNotification.notificationID</code> attribute **/
	public static final String NOTIFICATIONID = "notificationID";
	/** Qualifier of the <code>DSNotification.serialNumber</code> attribute **/
	public static final String SERIALNUMBER = "serialNumber";
	/** Qualifier of the <code>DSNotification.partNumber</code> attribute **/
	public static final String PARTNUMBER = "partNumber";
	/** Qualifier of the <code>DSNotification.partName</code> attribute **/
	public static final String PARTNAME = "partName";
	/** Qualifier of the <code>DSNotification.notificationType</code> attribute **/
	public static final String NOTIFICATIONTYPE = "notificationType";
	/** Qualifier of the <code>DSNotification.userSSO</code> attribute **/
	public static final String USERSSO = "userSSO";
	/** Qualifier of the <code>DSNotification.isFlagged</code> attribute **/
	public static final String ISFLAGGED = "isFlagged";
	/** Qualifier of the <code>DSNotification.isDismissed</code> attribute **/
	public static final String ISDISMISSED = "isDismissed";
	/** Qualifier of the <code>DSNotification.customerSoldTos</code> attribute **/
	public static final String CUSTOMERSOLDTOS = "customerSoldTos";
	/** Qualifier of the <code>DSNotification.isRead</code> attribute **/
	public static final String ISREAD = "isRead";
	/** Qualifier of the <code>DSNotification.lastServiceDate</code> attribute **/
	public static final String LASTSERVICEDATE = "lastServiceDate";
	/** Qualifier of the <code>DSNotification.lastCalibrationDate</code> attribute **/
	public static final String LASTCALIBRATIONDATE = "lastCalibrationDate";
	/** Qualifier of the <code>DSNotification.notificationFreq</code> attribute **/
	public static final String NOTIFICATIONFREQ = "notificationFreq";
	/** Qualifier of the <code>DSNotification.nextServiceDueInMonths</code> attribute **/
	public static final String NEXTSERVICEDUEINMONTHS = "nextServiceDueInMonths";
	/** Qualifier of the <code>DSNotification.serviceDueDate</code> attribute **/
	public static final String SERVICEDUEDATE = "serviceDueDate";
	/** Qualifier of the <code>DSNotification.serviceIntervel</code> attribute **/
	public static final String SERVICEINTERVEL = "serviceIntervel";
	/** Qualifier of the <code>DSNotification.customer</code> attribute **/
	public static final String CUSTOMER = "customer";
	/** Qualifier of the <code>DSNotification.endCustomer</code> attribute **/
	public static final String ENDCUSTOMER = "endCustomer";
	/** Qualifier of the <code>DSNotification.endCustomerName</code> attribute **/
	public static final String ENDCUSTOMERNAME = "endCustomerName";
	/** Qualifier of the <code>DSNotification.notificationMessage</code> attribute **/
	public static final String NOTIFICATIONMESSAGE = "notificationMessage";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(NOTIFICATIONID, AttributeMode.INITIAL);
		tmp.put(SERIALNUMBER, AttributeMode.INITIAL);
		tmp.put(PARTNUMBER, AttributeMode.INITIAL);
		tmp.put(PARTNAME, AttributeMode.INITIAL);
		tmp.put(NOTIFICATIONTYPE, AttributeMode.INITIAL);
		tmp.put(USERSSO, AttributeMode.INITIAL);
		tmp.put(ISFLAGGED, AttributeMode.INITIAL);
		tmp.put(ISDISMISSED, AttributeMode.INITIAL);
		tmp.put(CUSTOMERSOLDTOS, AttributeMode.INITIAL);
		tmp.put(ISREAD, AttributeMode.INITIAL);
		tmp.put(LASTSERVICEDATE, AttributeMode.INITIAL);
		tmp.put(LASTCALIBRATIONDATE, AttributeMode.INITIAL);
		tmp.put(NOTIFICATIONFREQ, AttributeMode.INITIAL);
		tmp.put(NEXTSERVICEDUEINMONTHS, AttributeMode.INITIAL);
		tmp.put(SERVICEDUEDATE, AttributeMode.INITIAL);
		tmp.put(SERVICEINTERVEL, AttributeMode.INITIAL);
		tmp.put(CUSTOMER, AttributeMode.INITIAL);
		tmp.put(ENDCUSTOMER, AttributeMode.INITIAL);
		tmp.put(ENDCUSTOMERNAME, AttributeMode.INITIAL);
		tmp.put(NOTIFICATIONMESSAGE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.customer</code> attribute.
	 * @return the customer - Notification customer
	 */
	public String getCustomer(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CUSTOMER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.customer</code> attribute.
	 * @return the customer - Notification customer
	 */
	public String getCustomer()
	{
		return getCustomer( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.customer</code> attribute. 
	 * @param value the customer - Notification customer
	 */
	public void setCustomer(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CUSTOMER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.customer</code> attribute. 
	 * @param value the customer - Notification customer
	 */
	public void setCustomer(final String value)
	{
		setCustomer( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.customerSoldTos</code> attribute.
	 * @return the customerSoldTos - Customer Sold To List
	 */
	public List<B2BUnit> getCustomerSoldTos(final SessionContext ctx)
	{
		List<B2BUnit> coll = (List<B2BUnit>)getProperty( ctx, CUSTOMERSOLDTOS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.customerSoldTos</code> attribute.
	 * @return the customerSoldTos - Customer Sold To List
	 */
	public List<B2BUnit> getCustomerSoldTos()
	{
		return getCustomerSoldTos( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.customerSoldTos</code> attribute. 
	 * @param value the customerSoldTos - Customer Sold To List
	 */
	public void setCustomerSoldTos(final SessionContext ctx, final List<B2BUnit> value)
	{
		setProperty(ctx, CUSTOMERSOLDTOS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.customerSoldTos</code> attribute. 
	 * @param value the customerSoldTos - Customer Sold To List
	 */
	public void setCustomerSoldTos(final List<B2BUnit> value)
	{
		setCustomerSoldTos( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.endCustomer</code> attribute.
	 * @return the endCustomer - Notification end customer
	 */
	public String getEndCustomer(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ENDCUSTOMER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.endCustomer</code> attribute.
	 * @return the endCustomer - Notification end customer
	 */
	public String getEndCustomer()
	{
		return getEndCustomer( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.endCustomer</code> attribute. 
	 * @param value the endCustomer - Notification end customer
	 */
	public void setEndCustomer(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ENDCUSTOMER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.endCustomer</code> attribute. 
	 * @param value the endCustomer - Notification end customer
	 */
	public void setEndCustomer(final String value)
	{
		setEndCustomer( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.endCustomerName</code> attribute.
	 * @return the endCustomerName - Notification end customer name
	 */
	public String getEndCustomerName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ENDCUSTOMERNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.endCustomerName</code> attribute.
	 * @return the endCustomerName - Notification end customer name
	 */
	public String getEndCustomerName()
	{
		return getEndCustomerName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.endCustomerName</code> attribute. 
	 * @param value the endCustomerName - Notification end customer name
	 */
	public void setEndCustomerName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ENDCUSTOMERNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.endCustomerName</code> attribute. 
	 * @param value the endCustomerName - Notification end customer name
	 */
	public void setEndCustomerName(final String value)
	{
		setEndCustomerName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.isDismissed</code> attribute.
	 * @return the isDismissed - Notification to check dismissed
	 */
	public Boolean isIsDismissed(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISDISMISSED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.isDismissed</code> attribute.
	 * @return the isDismissed - Notification to check dismissed
	 */
	public Boolean isIsDismissed()
	{
		return isIsDismissed( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.isDismissed</code> attribute. 
	 * @return the isDismissed - Notification to check dismissed
	 */
	public boolean isIsDismissedAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsDismissed( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.isDismissed</code> attribute. 
	 * @return the isDismissed - Notification to check dismissed
	 */
	public boolean isIsDismissedAsPrimitive()
	{
		return isIsDismissedAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.isDismissed</code> attribute. 
	 * @param value the isDismissed - Notification to check dismissed
	 */
	public void setIsDismissed(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISDISMISSED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.isDismissed</code> attribute. 
	 * @param value the isDismissed - Notification to check dismissed
	 */
	public void setIsDismissed(final Boolean value)
	{
		setIsDismissed( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.isDismissed</code> attribute. 
	 * @param value the isDismissed - Notification to check dismissed
	 */
	public void setIsDismissed(final SessionContext ctx, final boolean value)
	{
		setIsDismissed( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.isDismissed</code> attribute. 
	 * @param value the isDismissed - Notification to check dismissed
	 */
	public void setIsDismissed(final boolean value)
	{
		setIsDismissed( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.isFlagged</code> attribute.
	 * @return the isFlagged - Flag to indicate notifications
	 */
	public Boolean isIsFlagged(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISFLAGGED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.isFlagged</code> attribute.
	 * @return the isFlagged - Flag to indicate notifications
	 */
	public Boolean isIsFlagged()
	{
		return isIsFlagged( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.isFlagged</code> attribute. 
	 * @return the isFlagged - Flag to indicate notifications
	 */
	public boolean isIsFlaggedAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsFlagged( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.isFlagged</code> attribute. 
	 * @return the isFlagged - Flag to indicate notifications
	 */
	public boolean isIsFlaggedAsPrimitive()
	{
		return isIsFlaggedAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.isFlagged</code> attribute. 
	 * @param value the isFlagged - Flag to indicate notifications
	 */
	public void setIsFlagged(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISFLAGGED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.isFlagged</code> attribute. 
	 * @param value the isFlagged - Flag to indicate notifications
	 */
	public void setIsFlagged(final Boolean value)
	{
		setIsFlagged( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.isFlagged</code> attribute. 
	 * @param value the isFlagged - Flag to indicate notifications
	 */
	public void setIsFlagged(final SessionContext ctx, final boolean value)
	{
		setIsFlagged( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.isFlagged</code> attribute. 
	 * @param value the isFlagged - Flag to indicate notifications
	 */
	public void setIsFlagged(final boolean value)
	{
		setIsFlagged( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.isRead</code> attribute.
	 * @return the isRead - Notification to check is read
	 */
	public Boolean isIsRead(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISREAD);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.isRead</code> attribute.
	 * @return the isRead - Notification to check is read
	 */
	public Boolean isIsRead()
	{
		return isIsRead( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.isRead</code> attribute. 
	 * @return the isRead - Notification to check is read
	 */
	public boolean isIsReadAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsRead( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.isRead</code> attribute. 
	 * @return the isRead - Notification to check is read
	 */
	public boolean isIsReadAsPrimitive()
	{
		return isIsReadAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.isRead</code> attribute. 
	 * @param value the isRead - Notification to check is read
	 */
	public void setIsRead(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISREAD,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.isRead</code> attribute. 
	 * @param value the isRead - Notification to check is read
	 */
	public void setIsRead(final Boolean value)
	{
		setIsRead( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.isRead</code> attribute. 
	 * @param value the isRead - Notification to check is read
	 */
	public void setIsRead(final SessionContext ctx, final boolean value)
	{
		setIsRead( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.isRead</code> attribute. 
	 * @param value the isRead - Notification to check is read
	 */
	public void setIsRead(final boolean value)
	{
		setIsRead( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.lastCalibrationDate</code> attribute.
	 * @return the lastCalibrationDate - Last service Date
	 */
	public String getLastCalibrationDate(final SessionContext ctx)
	{
		return (String)getProperty( ctx, LASTCALIBRATIONDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.lastCalibrationDate</code> attribute.
	 * @return the lastCalibrationDate - Last service Date
	 */
	public String getLastCalibrationDate()
	{
		return getLastCalibrationDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.lastCalibrationDate</code> attribute. 
	 * @param value the lastCalibrationDate - Last service Date
	 */
	public void setLastCalibrationDate(final SessionContext ctx, final String value)
	{
		setProperty(ctx, LASTCALIBRATIONDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.lastCalibrationDate</code> attribute. 
	 * @param value the lastCalibrationDate - Last service Date
	 */
	public void setLastCalibrationDate(final String value)
	{
		setLastCalibrationDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.lastServiceDate</code> attribute.
	 * @return the lastServiceDate - Last service Date
	 */
	public String getLastServiceDate(final SessionContext ctx)
	{
		return (String)getProperty( ctx, LASTSERVICEDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.lastServiceDate</code> attribute.
	 * @return the lastServiceDate - Last service Date
	 */
	public String getLastServiceDate()
	{
		return getLastServiceDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.lastServiceDate</code> attribute. 
	 * @param value the lastServiceDate - Last service Date
	 */
	public void setLastServiceDate(final SessionContext ctx, final String value)
	{
		setProperty(ctx, LASTSERVICEDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.lastServiceDate</code> attribute. 
	 * @param value the lastServiceDate - Last service Date
	 */
	public void setLastServiceDate(final String value)
	{
		setLastServiceDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.nextServiceDueInMonths</code> attribute.
	 * @return the nextServiceDueInMonths - Notification next service due in months
	 */
	public String getNextServiceDueInMonths(final SessionContext ctx)
	{
		return (String)getProperty( ctx, NEXTSERVICEDUEINMONTHS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.nextServiceDueInMonths</code> attribute.
	 * @return the nextServiceDueInMonths - Notification next service due in months
	 */
	public String getNextServiceDueInMonths()
	{
		return getNextServiceDueInMonths( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.nextServiceDueInMonths</code> attribute. 
	 * @param value the nextServiceDueInMonths - Notification next service due in months
	 */
	public void setNextServiceDueInMonths(final SessionContext ctx, final String value)
	{
		setProperty(ctx, NEXTSERVICEDUEINMONTHS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.nextServiceDueInMonths</code> attribute. 
	 * @param value the nextServiceDueInMonths - Notification next service due in months
	 */
	public void setNextServiceDueInMonths(final String value)
	{
		setNextServiceDueInMonths( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.notificationFreq</code> attribute.
	 * @return the notificationFreq - Notification Frequency
	 */
	public EnumerationValue getNotificationFreq(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, NOTIFICATIONFREQ);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.notificationFreq</code> attribute.
	 * @return the notificationFreq - Notification Frequency
	 */
	public EnumerationValue getNotificationFreq()
	{
		return getNotificationFreq( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.notificationFreq</code> attribute. 
	 * @param value the notificationFreq - Notification Frequency
	 */
	public void setNotificationFreq(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, NOTIFICATIONFREQ,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.notificationFreq</code> attribute. 
	 * @param value the notificationFreq - Notification Frequency
	 */
	public void setNotificationFreq(final EnumerationValue value)
	{
		setNotificationFreq( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.notificationID</code> attribute.
	 * @return the notificationID - Notification serial Number
	 */
	public String getNotificationID(final SessionContext ctx)
	{
		return (String)getProperty( ctx, NOTIFICATIONID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.notificationID</code> attribute.
	 * @return the notificationID - Notification serial Number
	 */
	public String getNotificationID()
	{
		return getNotificationID( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.notificationID</code> attribute. 
	 * @param value the notificationID - Notification serial Number
	 */
	public void setNotificationID(final SessionContext ctx, final String value)
	{
		setProperty(ctx, NOTIFICATIONID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.notificationID</code> attribute. 
	 * @param value the notificationID - Notification serial Number
	 */
	public void setNotificationID(final String value)
	{
		setNotificationID( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.notificationMessage</code> attribute.
	 * @return the notificationMessage - Notification message
	 */
	public String getNotificationMessage(final SessionContext ctx)
	{
		return (String)getProperty( ctx, NOTIFICATIONMESSAGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.notificationMessage</code> attribute.
	 * @return the notificationMessage - Notification message
	 */
	public String getNotificationMessage()
	{
		return getNotificationMessage( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.notificationMessage</code> attribute. 
	 * @param value the notificationMessage - Notification message
	 */
	public void setNotificationMessage(final SessionContext ctx, final String value)
	{
		setProperty(ctx, NOTIFICATIONMESSAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.notificationMessage</code> attribute. 
	 * @param value the notificationMessage - Notification message
	 */
	public void setNotificationMessage(final String value)
	{
		setNotificationMessage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.notificationType</code> attribute.
	 * @return the notificationType - Notification Types
	 */
	public EnumerationValue getNotificationType(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, NOTIFICATIONTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.notificationType</code> attribute.
	 * @return the notificationType - Notification Types
	 */
	public EnumerationValue getNotificationType()
	{
		return getNotificationType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.notificationType</code> attribute. 
	 * @param value the notificationType - Notification Types
	 */
	public void setNotificationType(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, NOTIFICATIONTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.notificationType</code> attribute. 
	 * @param value the notificationType - Notification Types
	 */
	public void setNotificationType(final EnumerationValue value)
	{
		setNotificationType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.partName</code> attribute.
	 * @return the partName - Notification part name
	 */
	public String getPartName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PARTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.partName</code> attribute.
	 * @return the partName - Notification part name
	 */
	public String getPartName()
	{
		return getPartName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.partName</code> attribute. 
	 * @param value the partName - Notification part name
	 */
	public void setPartName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PARTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.partName</code> attribute. 
	 * @param value the partName - Notification part name
	 */
	public void setPartName(final String value)
	{
		setPartName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.partNumber</code> attribute.
	 * @return the partNumber - Notification part Number
	 */
	public String getPartNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PARTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.partNumber</code> attribute.
	 * @return the partNumber - Notification part Number
	 */
	public String getPartNumber()
	{
		return getPartNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.partNumber</code> attribute. 
	 * @param value the partNumber - Notification part Number
	 */
	public void setPartNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PARTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.partNumber</code> attribute. 
	 * @param value the partNumber - Notification part Number
	 */
	public void setPartNumber(final String value)
	{
		setPartNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.serialNumber</code> attribute.
	 * @return the serialNumber - Notification part Number
	 */
	public String getSerialNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SERIALNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.serialNumber</code> attribute.
	 * @return the serialNumber - Notification part Number
	 */
	public String getSerialNumber()
	{
		return getSerialNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.serialNumber</code> attribute. 
	 * @param value the serialNumber - Notification part Number
	 */
	public void setSerialNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SERIALNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.serialNumber</code> attribute. 
	 * @param value the serialNumber - Notification part Number
	 */
	public void setSerialNumber(final String value)
	{
		setSerialNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.serviceDueDate</code> attribute.
	 * @return the serviceDueDate - Notification service due date
	 */
	public Date getServiceDueDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, SERVICEDUEDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.serviceDueDate</code> attribute.
	 * @return the serviceDueDate - Notification service due date
	 */
	public Date getServiceDueDate()
	{
		return getServiceDueDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.serviceDueDate</code> attribute. 
	 * @param value the serviceDueDate - Notification service due date
	 */
	public void setServiceDueDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, SERVICEDUEDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.serviceDueDate</code> attribute. 
	 * @param value the serviceDueDate - Notification service due date
	 */
	public void setServiceDueDate(final Date value)
	{
		setServiceDueDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.serviceIntervel</code> attribute.
	 * @return the serviceIntervel - Notification service intervel
	 */
	public String getServiceIntervel(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SERVICEINTERVEL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.serviceIntervel</code> attribute.
	 * @return the serviceIntervel - Notification service intervel
	 */
	public String getServiceIntervel()
	{
		return getServiceIntervel( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.serviceIntervel</code> attribute. 
	 * @param value the serviceIntervel - Notification service intervel
	 */
	public void setServiceIntervel(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SERVICEINTERVEL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.serviceIntervel</code> attribute. 
	 * @param value the serviceIntervel - Notification service intervel
	 */
	public void setServiceIntervel(final String value)
	{
		setServiceIntervel( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.userSSO</code> attribute.
	 * @return the userSSO - User SSO number
	 */
	public String getUserSSO(final SessionContext ctx)
	{
		return (String)getProperty( ctx, USERSSO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSNotification.userSSO</code> attribute.
	 * @return the userSSO - User SSO number
	 */
	public String getUserSSO()
	{
		return getUserSSO( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.userSSO</code> attribute. 
	 * @param value the userSSO - User SSO number
	 */
	public void setUserSSO(final SessionContext ctx, final String value)
	{
		setProperty(ctx, USERSSO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSNotification.userSSO</code> attribute. 
	 * @param value the userSSO - User SSO number
	 */
	public void setUserSSO(final String value)
	{
		setUserSSO( getSession().getSessionContext(), value );
	}
	
}
