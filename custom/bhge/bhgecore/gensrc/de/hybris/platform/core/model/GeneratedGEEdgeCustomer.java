/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 *  
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.core.model;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.jalo.BHGECurrencyFormat;
import de.hybris.platform.b2b.jalo.B2BCustomer;
import de.hybris.platform.b2b.jalo.B2BUnit;
import de.hybris.platform.category.jalo.Category;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.jalo.user.Address;
import de.hybris.platform.util.Utilities;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.core.model.GEEdgeCustomer GEEdgeCustomer}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeCustomer extends B2BCustomer
{
	/** Qualifier of the <code>GEEdgeCustomer.orderConfirmEmail</code> attribute **/
	public static final String ORDERCONFIRMEMAIL = "orderConfirmEmail";
	/** Qualifier of the <code>GEEdgeCustomer.defaultSoldTo</code> attribute **/
	public static final String DEFAULTSOLDTO = "defaultSoldTo";
	/** Qualifier of the <code>GEEdgeCustomer.defaultShipTo</code> attribute **/
	public static final String DEFAULTSHIPTO = "defaultShipTo";
	/** Qualifier of the <code>GEEdgeCustomer.sendSalesOrderEmail</code> attribute **/
	public static final String SENDSALESORDEREMAIL = "sendSalesOrderEmail";
	/** Qualifier of the <code>GEEdgeCustomer.sendShippingNotificationEmail</code> attribute **/
	public static final String SENDSHIPPINGNOTIFICATIONEMAIL = "sendShippingNotificationEmail";
	/** Qualifier of the <code>GEEdgeCustomer.sendInvoiceEmail</code> attribute **/
	public static final String SENDINVOICEEMAIL = "sendInvoiceEmail";
	/** Qualifier of the <code>GEEdgeCustomer.shippingContactName</code> attribute **/
	public static final String SHIPPINGCONTACTNAME = "shippingContactName";
	/** Qualifier of the <code>GEEdgeCustomer.shippingContactNumber</code> attribute **/
	public static final String SHIPPINGCONTACTNUMBER = "shippingContactNumber";
	/** Qualifier of the <code>GEEdgeCustomer.deliveryCarrier</code> attribute **/
	public static final String DELIVERYCARRIER = "deliveryCarrier";
	/** Qualifier of the <code>GEEdgeCustomer.deliveryOptions</code> attribute **/
	public static final String DELIVERYOPTIONS = "deliveryOptions";
	/** Qualifier of the <code>GEEdgeCustomer.deliveryAccount</code> attribute **/
	public static final String DELIVERYACCOUNT = "deliveryAccount";
	/** Qualifier of the <code>GEEdgeCustomer.isShipCompleteOrder</code> attribute **/
	public static final String ISSHIPCOMPLETEORDER = "isShipCompleteOrder";
	/** Qualifier of the <code>GEEdgeCustomer.defaultCurrencyFormat</code> attribute **/
	public static final String DEFAULTCURRENCYFORMAT = "defaultCurrencyFormat";
	/** Qualifier of the <code>GEEdgeCustomer.isInternalUser</code> attribute **/
	public static final String ISINTERNALUSER = "isInternalUser";
	/** Qualifier of the <code>GEEdgeCustomer.favoriteSoldTos</code> attribute **/
	public static final String FAVORITESOLDTOS = "favoriteSoldTos";
	/** Qualifier of the <code>GEEdgeCustomer.recentUsedSoldtos</code> attribute **/
	public static final String RECENTUSEDSOLDTOS = "recentUsedSoldtos";
	/** Qualifier of the <code>GEEdgeCustomer.recentSoldtoTime</code> attribute **/
	public static final String RECENTSOLDTOTIME = "recentSoldtoTime";
	/** Qualifier of the <code>GEEdgeCustomer.reactiveTokenValue</code> attribute **/
	public static final String REACTIVETOKENVALUE = "reactiveTokenValue";
	/** Qualifier of the <code>GEEdgeCustomer.disabledBySso</code> attribute **/
	public static final String DISABLEDBYSSO = "disabledBySso";
	/** Qualifier of the <code>GEEdgeCustomer.customerActivationComments</code> attribute **/
	public static final String CUSTOMERACTIVATIONCOMMENTS = "customerActivationComments";
	/** Qualifier of the <code>GEEdgeCustomer.invoiceContact</code> attribute **/
	public static final String INVOICECONTACT = "invoiceContact";
	/** Qualifier of the <code>GEEdgeCustomer.invoicePhone</code> attribute **/
	public static final String INVOICEPHONE = "invoicePhone";
	/** Qualifier of the <code>GEEdgeCustomer.soaContact</code> attribute **/
	public static final String SOACONTACT = "soaContact";
	/** Qualifier of the <code>GEEdgeCustomer.soaPhone</code> attribute **/
	public static final String SOAPHONE = "soaPhone";
	/** Qualifier of the <code>GEEdgeCustomer.firstName</code> attribute **/
	public static final String FIRSTNAME = "firstName";
	/** Qualifier of the <code>GEEdgeCustomer.lastName</code> attribute **/
	public static final String LASTNAME = "lastName";
	/** Qualifier of the <code>GEEdgeCustomer.isPrivateFolderExists</code> attribute **/
	public static final String ISPRIVATEFOLDEREXISTS = "isPrivateFolderExists";
	/** Qualifier of the <code>GEEdgeCustomer.productLineMap</code> attribute **/
	public static final String PRODUCTLINEMAP = "productLineMap";
	/** Qualifier of the <code>GEEdgeCustomer.lastEditedUser</code> attribute **/
	public static final String LASTEDITEDUSER = "lastEditedUser";
	/** Qualifier of the <code>GEEdgeCustomer.lastEditedTime</code> attribute **/
	public static final String LASTEDITEDTIME = "lastEditedTime";
	/** Qualifier of the <code>GEEdgeCustomer.userCreationChannel</code> attribute **/
	public static final String USERCREATIONCHANNEL = "userCreationChannel";
	/** Qualifier of the <code>GEEdgeCustomer.orderBlockEmailNotification</code> attribute **/
	public static final String ORDERBLOCKEMAILNOTIFICATION = "orderBlockEmailNotification";
	/** Qualifier of the <code>GEEdgeCustomer.orderBlockReleaseEmailNotification</code> attribute **/
	public static final String ORDERBLOCKRELEASEEMAILNOTIFICATION = "orderBlockReleaseEmailNotification";
	/** Qualifier of the <code>GEEdgeCustomer.orderShipDateChanged</code> attribute **/
	public static final String ORDERSHIPDATECHANGED = "orderShipDateChanged";
	/** Qualifier of the <code>GEEdgeCustomer.userAccessibleCategories</code> attribute **/
	public static final String USERACCESSIBLECATEGORIES = "userAccessibleCategories";
	/** Relation ordering override parameter constants for GEEdgeCustomer2CategoryRelation from ((bhgecore))*/
	protected static String GEEDGECUSTOMER2CATEGORYRELATION_SRC_ORDERED = "relation.GEEdgeCustomer2CategoryRelation.source.ordered";
	protected static String GEEDGECUSTOMER2CATEGORYRELATION_TGT_ORDERED = "relation.GEEdgeCustomer2CategoryRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for GEEdgeCustomer2CategoryRelation from ((bhgecore))*/
	protected static String GEEDGECUSTOMER2CATEGORYRELATION_MARKMODIFIED = "relation.GEEdgeCustomer2CategoryRelation.markmodified";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(B2BCustomer.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(ORDERCONFIRMEMAIL, AttributeMode.INITIAL);
		tmp.put(DEFAULTSOLDTO, AttributeMode.INITIAL);
		tmp.put(DEFAULTSHIPTO, AttributeMode.INITIAL);
		tmp.put(SENDSALESORDEREMAIL, AttributeMode.INITIAL);
		tmp.put(SENDSHIPPINGNOTIFICATIONEMAIL, AttributeMode.INITIAL);
		tmp.put(SENDINVOICEEMAIL, AttributeMode.INITIAL);
		tmp.put(SHIPPINGCONTACTNAME, AttributeMode.INITIAL);
		tmp.put(SHIPPINGCONTACTNUMBER, AttributeMode.INITIAL);
		tmp.put(DELIVERYCARRIER, AttributeMode.INITIAL);
		tmp.put(DELIVERYOPTIONS, AttributeMode.INITIAL);
		tmp.put(DELIVERYACCOUNT, AttributeMode.INITIAL);
		tmp.put(ISSHIPCOMPLETEORDER, AttributeMode.INITIAL);
		tmp.put(DEFAULTCURRENCYFORMAT, AttributeMode.INITIAL);
		tmp.put(ISINTERNALUSER, AttributeMode.INITIAL);
		tmp.put(FAVORITESOLDTOS, AttributeMode.INITIAL);
		tmp.put(RECENTUSEDSOLDTOS, AttributeMode.INITIAL);
		tmp.put(RECENTSOLDTOTIME, AttributeMode.INITIAL);
		tmp.put(REACTIVETOKENVALUE, AttributeMode.INITIAL);
		tmp.put(DISABLEDBYSSO, AttributeMode.INITIAL);
		tmp.put(CUSTOMERACTIVATIONCOMMENTS, AttributeMode.INITIAL);
		tmp.put(INVOICECONTACT, AttributeMode.INITIAL);
		tmp.put(INVOICEPHONE, AttributeMode.INITIAL);
		tmp.put(SOACONTACT, AttributeMode.INITIAL);
		tmp.put(SOAPHONE, AttributeMode.INITIAL);
		tmp.put(FIRSTNAME, AttributeMode.INITIAL);
		tmp.put(LASTNAME, AttributeMode.INITIAL);
		tmp.put(ISPRIVATEFOLDEREXISTS, AttributeMode.INITIAL);
		tmp.put(PRODUCTLINEMAP, AttributeMode.INITIAL);
		tmp.put(LASTEDITEDUSER, AttributeMode.INITIAL);
		tmp.put(LASTEDITEDTIME, AttributeMode.INITIAL);
		tmp.put(USERCREATIONCHANNEL, AttributeMode.INITIAL);
		tmp.put(ORDERBLOCKEMAILNOTIFICATION, AttributeMode.INITIAL);
		tmp.put(ORDERBLOCKRELEASEEMAILNOTIFICATION, AttributeMode.INITIAL);
		tmp.put(ORDERSHIPDATECHANGED, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.customerActivationComments</code> attribute.
	 * @return the customerActivationComments
	 */
	public Collection<String> getCustomerActivationComments(final SessionContext ctx)
	{
		Collection<String> coll = (Collection<String>)getProperty( ctx, CUSTOMERACTIVATIONCOMMENTS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.customerActivationComments</code> attribute.
	 * @return the customerActivationComments
	 */
	public Collection<String> getCustomerActivationComments()
	{
		return getCustomerActivationComments( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.customerActivationComments</code> attribute. 
	 * @param value the customerActivationComments
	 */
	public void setCustomerActivationComments(final SessionContext ctx, final Collection<String> value)
	{
		setProperty(ctx, CUSTOMERACTIVATIONCOMMENTS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.customerActivationComments</code> attribute. 
	 * @param value the customerActivationComments
	 */
	public void setCustomerActivationComments(final Collection<String> value)
	{
		setCustomerActivationComments( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.defaultCurrencyFormat</code> attribute.
	 * @return the defaultCurrencyFormat - stores default Locale currency format option selected from user.
	 */
	public BHGECurrencyFormat getDefaultCurrencyFormat(final SessionContext ctx)
	{
		return (BHGECurrencyFormat)getProperty( ctx, DEFAULTCURRENCYFORMAT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.defaultCurrencyFormat</code> attribute.
	 * @return the defaultCurrencyFormat - stores default Locale currency format option selected from user.
	 */
	public BHGECurrencyFormat getDefaultCurrencyFormat()
	{
		return getDefaultCurrencyFormat( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.defaultCurrencyFormat</code> attribute. 
	 * @param value the defaultCurrencyFormat - stores default Locale currency format option selected from user.
	 */
	public void setDefaultCurrencyFormat(final SessionContext ctx, final BHGECurrencyFormat value)
	{
		setProperty(ctx, DEFAULTCURRENCYFORMAT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.defaultCurrencyFormat</code> attribute. 
	 * @param value the defaultCurrencyFormat - stores default Locale currency format option selected from user.
	 */
	public void setDefaultCurrencyFormat(final BHGECurrencyFormat value)
	{
		setDefaultCurrencyFormat( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.defaultShipTo</code> attribute.
	 * @return the defaultShipTo - Default Ship To
	 */
	public Address getDefaultShipTo(final SessionContext ctx)
	{
		return (Address)getProperty( ctx, DEFAULTSHIPTO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.defaultShipTo</code> attribute.
	 * @return the defaultShipTo - Default Ship To
	 */
	public Address getDefaultShipTo()
	{
		return getDefaultShipTo( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.defaultShipTo</code> attribute. 
	 * @param value the defaultShipTo - Default Ship To
	 */
	public void setDefaultShipTo(final SessionContext ctx, final Address value)
	{
		setProperty(ctx, DEFAULTSHIPTO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.defaultShipTo</code> attribute. 
	 * @param value the defaultShipTo - Default Ship To
	 */
	public void setDefaultShipTo(final Address value)
	{
		setDefaultShipTo( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.defaultSoldTo</code> attribute.
	 * @return the defaultSoldTo - Default Sold To
	 */
	public B2BUnit getDefaultSoldTo(final SessionContext ctx)
	{
		return (B2BUnit)getProperty( ctx, DEFAULTSOLDTO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.defaultSoldTo</code> attribute.
	 * @return the defaultSoldTo - Default Sold To
	 */
	public B2BUnit getDefaultSoldTo()
	{
		return getDefaultSoldTo( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.defaultSoldTo</code> attribute. 
	 * @param value the defaultSoldTo - Default Sold To
	 */
	public void setDefaultSoldTo(final SessionContext ctx, final B2BUnit value)
	{
		setProperty(ctx, DEFAULTSOLDTO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.defaultSoldTo</code> attribute. 
	 * @param value the defaultSoldTo - Default Sold To
	 */
	public void setDefaultSoldTo(final B2BUnit value)
	{
		setDefaultSoldTo( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.deliveryAccount</code> attribute.
	 * @return the deliveryAccount - Delivery Account No
	 */
	public String getDeliveryAccount(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DELIVERYACCOUNT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.deliveryAccount</code> attribute.
	 * @return the deliveryAccount - Delivery Account No
	 */
	public String getDeliveryAccount()
	{
		return getDeliveryAccount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.deliveryAccount</code> attribute. 
	 * @param value the deliveryAccount - Delivery Account No
	 */
	public void setDeliveryAccount(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DELIVERYACCOUNT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.deliveryAccount</code> attribute. 
	 * @param value the deliveryAccount - Delivery Account No
	 */
	public void setDeliveryAccount(final String value)
	{
		setDeliveryAccount( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.deliveryCarrier</code> attribute.
	 * @return the deliveryCarrier - Carrier Type
	 */
	public EnumerationValue getDeliveryCarrier(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, DELIVERYCARRIER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.deliveryCarrier</code> attribute.
	 * @return the deliveryCarrier - Carrier Type
	 */
	public EnumerationValue getDeliveryCarrier()
	{
		return getDeliveryCarrier( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.deliveryCarrier</code> attribute. 
	 * @param value the deliveryCarrier - Carrier Type
	 */
	public void setDeliveryCarrier(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, DELIVERYCARRIER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.deliveryCarrier</code> attribute. 
	 * @param value the deliveryCarrier - Carrier Type
	 */
	public void setDeliveryCarrier(final EnumerationValue value)
	{
		setDeliveryCarrier( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.deliveryOptions</code> attribute.
	 * @return the deliveryOptions - Delivery Option
	 */
	public EnumerationValue getDeliveryOptions(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, DELIVERYOPTIONS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.deliveryOptions</code> attribute.
	 * @return the deliveryOptions - Delivery Option
	 */
	public EnumerationValue getDeliveryOptions()
	{
		return getDeliveryOptions( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.deliveryOptions</code> attribute. 
	 * @param value the deliveryOptions - Delivery Option
	 */
	public void setDeliveryOptions(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, DELIVERYOPTIONS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.deliveryOptions</code> attribute. 
	 * @param value the deliveryOptions - Delivery Option
	 */
	public void setDeliveryOptions(final EnumerationValue value)
	{
		setDeliveryOptions( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.disabledBySso</code> attribute.
	 * @return the disabledBySso - SSO of User Manager who disabled It.
	 */
	public String getDisabledBySso(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DISABLEDBYSSO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.disabledBySso</code> attribute.
	 * @return the disabledBySso - SSO of User Manager who disabled It.
	 */
	public String getDisabledBySso()
	{
		return getDisabledBySso( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.disabledBySso</code> attribute. 
	 * @param value the disabledBySso - SSO of User Manager who disabled It.
	 */
	public void setDisabledBySso(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DISABLEDBYSSO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.disabledBySso</code> attribute. 
	 * @param value the disabledBySso - SSO of User Manager who disabled It.
	 */
	public void setDisabledBySso(final String value)
	{
		setDisabledBySso( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.favoriteSoldTos</code> attribute.
	 * @return the favoriteSoldTos - favorite Sold To List
	 */
	public List<B2BUnit> getFavoriteSoldTos(final SessionContext ctx)
	{
		List<B2BUnit> coll = (List<B2BUnit>)getProperty( ctx, FAVORITESOLDTOS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.favoriteSoldTos</code> attribute.
	 * @return the favoriteSoldTos - favorite Sold To List
	 */
	public List<B2BUnit> getFavoriteSoldTos()
	{
		return getFavoriteSoldTos( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.favoriteSoldTos</code> attribute. 
	 * @param value the favoriteSoldTos - favorite Sold To List
	 */
	public void setFavoriteSoldTos(final SessionContext ctx, final List<B2BUnit> value)
	{
		setProperty(ctx, FAVORITESOLDTOS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.favoriteSoldTos</code> attribute. 
	 * @param value the favoriteSoldTos - favorite Sold To List
	 */
	public void setFavoriteSoldTos(final List<B2BUnit> value)
	{
		setFavoriteSoldTos( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.firstName</code> attribute.
	 * @return the firstName - User First Name
	 */
	public String getFirstName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, FIRSTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.firstName</code> attribute.
	 * @return the firstName - User First Name
	 */
	public String getFirstName()
	{
		return getFirstName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.firstName</code> attribute. 
	 * @param value the firstName - User First Name
	 */
	public void setFirstName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, FIRSTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.firstName</code> attribute. 
	 * @param value the firstName - User First Name
	 */
	public void setFirstName(final String value)
	{
		setFirstName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.invoiceContact</code> attribute.
	 * @return the invoiceContact
	 */
	public String getInvoiceContact(final SessionContext ctx)
	{
		return (String)getProperty( ctx, INVOICECONTACT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.invoiceContact</code> attribute.
	 * @return the invoiceContact
	 */
	public String getInvoiceContact()
	{
		return getInvoiceContact( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.invoiceContact</code> attribute. 
	 * @param value the invoiceContact
	 */
	public void setInvoiceContact(final SessionContext ctx, final String value)
	{
		setProperty(ctx, INVOICECONTACT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.invoiceContact</code> attribute. 
	 * @param value the invoiceContact
	 */
	public void setInvoiceContact(final String value)
	{
		setInvoiceContact( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.invoicePhone</code> attribute.
	 * @return the invoicePhone
	 */
	public String getInvoicePhone(final SessionContext ctx)
	{
		return (String)getProperty( ctx, INVOICEPHONE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.invoicePhone</code> attribute.
	 * @return the invoicePhone
	 */
	public String getInvoicePhone()
	{
		return getInvoicePhone( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.invoicePhone</code> attribute. 
	 * @param value the invoicePhone
	 */
	public void setInvoicePhone(final SessionContext ctx, final String value)
	{
		setProperty(ctx, INVOICEPHONE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.invoicePhone</code> attribute. 
	 * @param value the invoicePhone
	 */
	public void setInvoicePhone(final String value)
	{
		setInvoicePhone( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.isInternalUser</code> attribute.
	 * @return the isInternalUser - Internal user flag
	 */
	public Boolean isIsInternalUser(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISINTERNALUSER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.isInternalUser</code> attribute.
	 * @return the isInternalUser - Internal user flag
	 */
	public Boolean isIsInternalUser()
	{
		return isIsInternalUser( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.isInternalUser</code> attribute. 
	 * @return the isInternalUser - Internal user flag
	 */
	public boolean isIsInternalUserAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsInternalUser( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.isInternalUser</code> attribute. 
	 * @return the isInternalUser - Internal user flag
	 */
	public boolean isIsInternalUserAsPrimitive()
	{
		return isIsInternalUserAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.isInternalUser</code> attribute. 
	 * @param value the isInternalUser - Internal user flag
	 */
	public void setIsInternalUser(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISINTERNALUSER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.isInternalUser</code> attribute. 
	 * @param value the isInternalUser - Internal user flag
	 */
	public void setIsInternalUser(final Boolean value)
	{
		setIsInternalUser( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.isInternalUser</code> attribute. 
	 * @param value the isInternalUser - Internal user flag
	 */
	public void setIsInternalUser(final SessionContext ctx, final boolean value)
	{
		setIsInternalUser( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.isInternalUser</code> attribute. 
	 * @param value the isInternalUser - Internal user flag
	 */
	public void setIsInternalUser(final boolean value)
	{
		setIsInternalUser( getSession().getSessionContext(), value );
	}
	
	/**
	 * @deprecated since 2011, use {@link Utilities#getMarkModifiedOverride(de.hybris.platform.jalo.type.RelationType)
	 */
	@Override
	@Deprecated(since = "2105", forRemoval = true)
	public boolean isMarkModifiedDisabled(final Item referencedItem)
	{
		ComposedType relationSecondEnd0 = TypeManager.getInstance().getComposedType("Category");
		if(relationSecondEnd0.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(GEEDGECUSTOMER2CATEGORYRELATION_MARKMODIFIED);
		}
		return true;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.isPrivateFolderExists</code> attribute.
	 * @return the isPrivateFolderExists - Private Folder Exists flag for User
	 */
	public Boolean isIsPrivateFolderExists(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISPRIVATEFOLDEREXISTS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.isPrivateFolderExists</code> attribute.
	 * @return the isPrivateFolderExists - Private Folder Exists flag for User
	 */
	public Boolean isIsPrivateFolderExists()
	{
		return isIsPrivateFolderExists( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.isPrivateFolderExists</code> attribute. 
	 * @return the isPrivateFolderExists - Private Folder Exists flag for User
	 */
	public boolean isIsPrivateFolderExistsAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsPrivateFolderExists( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.isPrivateFolderExists</code> attribute. 
	 * @return the isPrivateFolderExists - Private Folder Exists flag for User
	 */
	public boolean isIsPrivateFolderExistsAsPrimitive()
	{
		return isIsPrivateFolderExistsAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.isPrivateFolderExists</code> attribute. 
	 * @param value the isPrivateFolderExists - Private Folder Exists flag for User
	 */
	public void setIsPrivateFolderExists(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISPRIVATEFOLDEREXISTS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.isPrivateFolderExists</code> attribute. 
	 * @param value the isPrivateFolderExists - Private Folder Exists flag for User
	 */
	public void setIsPrivateFolderExists(final Boolean value)
	{
		setIsPrivateFolderExists( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.isPrivateFolderExists</code> attribute. 
	 * @param value the isPrivateFolderExists - Private Folder Exists flag for User
	 */
	public void setIsPrivateFolderExists(final SessionContext ctx, final boolean value)
	{
		setIsPrivateFolderExists( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.isPrivateFolderExists</code> attribute. 
	 * @param value the isPrivateFolderExists - Private Folder Exists flag for User
	 */
	public void setIsPrivateFolderExists(final boolean value)
	{
		setIsPrivateFolderExists( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.isShipCompleteOrder</code> attribute.
	 * @return the isShipCompleteOrder - ShipComplete
	 */
	public Boolean isIsShipCompleteOrder(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISSHIPCOMPLETEORDER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.isShipCompleteOrder</code> attribute.
	 * @return the isShipCompleteOrder - ShipComplete
	 */
	public Boolean isIsShipCompleteOrder()
	{
		return isIsShipCompleteOrder( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.isShipCompleteOrder</code> attribute. 
	 * @return the isShipCompleteOrder - ShipComplete
	 */
	public boolean isIsShipCompleteOrderAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsShipCompleteOrder( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.isShipCompleteOrder</code> attribute. 
	 * @return the isShipCompleteOrder - ShipComplete
	 */
	public boolean isIsShipCompleteOrderAsPrimitive()
	{
		return isIsShipCompleteOrderAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.isShipCompleteOrder</code> attribute. 
	 * @param value the isShipCompleteOrder - ShipComplete
	 */
	public void setIsShipCompleteOrder(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISSHIPCOMPLETEORDER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.isShipCompleteOrder</code> attribute. 
	 * @param value the isShipCompleteOrder - ShipComplete
	 */
	public void setIsShipCompleteOrder(final Boolean value)
	{
		setIsShipCompleteOrder( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.isShipCompleteOrder</code> attribute. 
	 * @param value the isShipCompleteOrder - ShipComplete
	 */
	public void setIsShipCompleteOrder(final SessionContext ctx, final boolean value)
	{
		setIsShipCompleteOrder( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.isShipCompleteOrder</code> attribute. 
	 * @param value the isShipCompleteOrder - ShipComplete
	 */
	public void setIsShipCompleteOrder(final boolean value)
	{
		setIsShipCompleteOrder( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.lastEditedTime</code> attribute.
	 * @return the lastEditedTime - Last Edited Time
	 */
	public Date getLastEditedTime(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, LASTEDITEDTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.lastEditedTime</code> attribute.
	 * @return the lastEditedTime - Last Edited Time
	 */
	public Date getLastEditedTime()
	{
		return getLastEditedTime( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.lastEditedTime</code> attribute. 
	 * @param value the lastEditedTime - Last Edited Time
	 */
	public void setLastEditedTime(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, LASTEDITEDTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.lastEditedTime</code> attribute. 
	 * @param value the lastEditedTime - Last Edited Time
	 */
	public void setLastEditedTime(final Date value)
	{
		setLastEditedTime( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.lastEditedUser</code> attribute.
	 * @return the lastEditedUser - Last Edited By User
	 */
	public String getLastEditedUser(final SessionContext ctx)
	{
		return (String)getProperty( ctx, LASTEDITEDUSER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.lastEditedUser</code> attribute.
	 * @return the lastEditedUser - Last Edited By User
	 */
	public String getLastEditedUser()
	{
		return getLastEditedUser( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.lastEditedUser</code> attribute. 
	 * @param value the lastEditedUser - Last Edited By User
	 */
	public void setLastEditedUser(final SessionContext ctx, final String value)
	{
		setProperty(ctx, LASTEDITEDUSER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.lastEditedUser</code> attribute. 
	 * @param value the lastEditedUser - Last Edited By User
	 */
	public void setLastEditedUser(final String value)
	{
		setLastEditedUser( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.lastName</code> attribute.
	 * @return the lastName - User Last Name
	 */
	public String getLastName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, LASTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.lastName</code> attribute.
	 * @return the lastName - User Last Name
	 */
	public String getLastName()
	{
		return getLastName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.lastName</code> attribute. 
	 * @param value the lastName - User Last Name
	 */
	public void setLastName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, LASTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.lastName</code> attribute. 
	 * @param value the lastName - User Last Name
	 */
	public void setLastName(final String value)
	{
		setLastName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderBlockEmailNotification</code> attribute.
	 * @return the orderBlockEmailNotification - Order Block email Notification check box
	 */
	public Boolean isOrderBlockEmailNotification(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ORDERBLOCKEMAILNOTIFICATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderBlockEmailNotification</code> attribute.
	 * @return the orderBlockEmailNotification - Order Block email Notification check box
	 */
	public Boolean isOrderBlockEmailNotification()
	{
		return isOrderBlockEmailNotification( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderBlockEmailNotification</code> attribute. 
	 * @return the orderBlockEmailNotification - Order Block email Notification check box
	 */
	public boolean isOrderBlockEmailNotificationAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isOrderBlockEmailNotification( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderBlockEmailNotification</code> attribute. 
	 * @return the orderBlockEmailNotification - Order Block email Notification check box
	 */
	public boolean isOrderBlockEmailNotificationAsPrimitive()
	{
		return isOrderBlockEmailNotificationAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderBlockEmailNotification</code> attribute. 
	 * @param value the orderBlockEmailNotification - Order Block email Notification check box
	 */
	public void setOrderBlockEmailNotification(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ORDERBLOCKEMAILNOTIFICATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderBlockEmailNotification</code> attribute. 
	 * @param value the orderBlockEmailNotification - Order Block email Notification check box
	 */
	public void setOrderBlockEmailNotification(final Boolean value)
	{
		setOrderBlockEmailNotification( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderBlockEmailNotification</code> attribute. 
	 * @param value the orderBlockEmailNotification - Order Block email Notification check box
	 */
	public void setOrderBlockEmailNotification(final SessionContext ctx, final boolean value)
	{
		setOrderBlockEmailNotification( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderBlockEmailNotification</code> attribute. 
	 * @param value the orderBlockEmailNotification - Order Block email Notification check box
	 */
	public void setOrderBlockEmailNotification(final boolean value)
	{
		setOrderBlockEmailNotification( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderBlockReleaseEmailNotification</code> attribute.
	 * @return the orderBlockReleaseEmailNotification - Order Block Release email Notification check box
	 */
	public Boolean isOrderBlockReleaseEmailNotification(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ORDERBLOCKRELEASEEMAILNOTIFICATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderBlockReleaseEmailNotification</code> attribute.
	 * @return the orderBlockReleaseEmailNotification - Order Block Release email Notification check box
	 */
	public Boolean isOrderBlockReleaseEmailNotification()
	{
		return isOrderBlockReleaseEmailNotification( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderBlockReleaseEmailNotification</code> attribute. 
	 * @return the orderBlockReleaseEmailNotification - Order Block Release email Notification check box
	 */
	public boolean isOrderBlockReleaseEmailNotificationAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isOrderBlockReleaseEmailNotification( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderBlockReleaseEmailNotification</code> attribute. 
	 * @return the orderBlockReleaseEmailNotification - Order Block Release email Notification check box
	 */
	public boolean isOrderBlockReleaseEmailNotificationAsPrimitive()
	{
		return isOrderBlockReleaseEmailNotificationAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderBlockReleaseEmailNotification</code> attribute. 
	 * @param value the orderBlockReleaseEmailNotification - Order Block Release email Notification check box
	 */
	public void setOrderBlockReleaseEmailNotification(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ORDERBLOCKRELEASEEMAILNOTIFICATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderBlockReleaseEmailNotification</code> attribute. 
	 * @param value the orderBlockReleaseEmailNotification - Order Block Release email Notification check box
	 */
	public void setOrderBlockReleaseEmailNotification(final Boolean value)
	{
		setOrderBlockReleaseEmailNotification( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderBlockReleaseEmailNotification</code> attribute. 
	 * @param value the orderBlockReleaseEmailNotification - Order Block Release email Notification check box
	 */
	public void setOrderBlockReleaseEmailNotification(final SessionContext ctx, final boolean value)
	{
		setOrderBlockReleaseEmailNotification( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderBlockReleaseEmailNotification</code> attribute. 
	 * @param value the orderBlockReleaseEmailNotification - Order Block Release email Notification check box
	 */
	public void setOrderBlockReleaseEmailNotification(final boolean value)
	{
		setOrderBlockReleaseEmailNotification( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderConfirmEmail</code> attribute.
	 * @return the orderConfirmEmail - Order Confirm Email check box
	 */
	public Boolean isOrderConfirmEmail(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ORDERCONFIRMEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderConfirmEmail</code> attribute.
	 * @return the orderConfirmEmail - Order Confirm Email check box
	 */
	public Boolean isOrderConfirmEmail()
	{
		return isOrderConfirmEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderConfirmEmail</code> attribute. 
	 * @return the orderConfirmEmail - Order Confirm Email check box
	 */
	public boolean isOrderConfirmEmailAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isOrderConfirmEmail( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderConfirmEmail</code> attribute. 
	 * @return the orderConfirmEmail - Order Confirm Email check box
	 */
	public boolean isOrderConfirmEmailAsPrimitive()
	{
		return isOrderConfirmEmailAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderConfirmEmail</code> attribute. 
	 * @param value the orderConfirmEmail - Order Confirm Email check box
	 */
	public void setOrderConfirmEmail(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ORDERCONFIRMEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderConfirmEmail</code> attribute. 
	 * @param value the orderConfirmEmail - Order Confirm Email check box
	 */
	public void setOrderConfirmEmail(final Boolean value)
	{
		setOrderConfirmEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderConfirmEmail</code> attribute. 
	 * @param value the orderConfirmEmail - Order Confirm Email check box
	 */
	public void setOrderConfirmEmail(final SessionContext ctx, final boolean value)
	{
		setOrderConfirmEmail( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderConfirmEmail</code> attribute. 
	 * @param value the orderConfirmEmail - Order Confirm Email check box
	 */
	public void setOrderConfirmEmail(final boolean value)
	{
		setOrderConfirmEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderShipDateChanged</code> attribute.
	 * @return the orderShipDateChanged - Order Ship Date change email Notification check box
	 */
	public Boolean isOrderShipDateChanged(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ORDERSHIPDATECHANGED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderShipDateChanged</code> attribute.
	 * @return the orderShipDateChanged - Order Ship Date change email Notification check box
	 */
	public Boolean isOrderShipDateChanged()
	{
		return isOrderShipDateChanged( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderShipDateChanged</code> attribute. 
	 * @return the orderShipDateChanged - Order Ship Date change email Notification check box
	 */
	public boolean isOrderShipDateChangedAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isOrderShipDateChanged( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.orderShipDateChanged</code> attribute. 
	 * @return the orderShipDateChanged - Order Ship Date change email Notification check box
	 */
	public boolean isOrderShipDateChangedAsPrimitive()
	{
		return isOrderShipDateChangedAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderShipDateChanged</code> attribute. 
	 * @param value the orderShipDateChanged - Order Ship Date change email Notification check box
	 */
	public void setOrderShipDateChanged(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ORDERSHIPDATECHANGED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderShipDateChanged</code> attribute. 
	 * @param value the orderShipDateChanged - Order Ship Date change email Notification check box
	 */
	public void setOrderShipDateChanged(final Boolean value)
	{
		setOrderShipDateChanged( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderShipDateChanged</code> attribute. 
	 * @param value the orderShipDateChanged - Order Ship Date change email Notification check box
	 */
	public void setOrderShipDateChanged(final SessionContext ctx, final boolean value)
	{
		setOrderShipDateChanged( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.orderShipDateChanged</code> attribute. 
	 * @param value the orderShipDateChanged - Order Ship Date change email Notification check box
	 */
	public void setOrderShipDateChanged(final boolean value)
	{
		setOrderShipDateChanged( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.productLineMap</code> attribute.
	 * @return the productLineMap - B2bUnit and Product Line of the user
	 */
	public Map<String,String> getAllProductLineMap(final SessionContext ctx)
	{
		Map<String,String> map = (Map<String,String>)getProperty( ctx, PRODUCTLINEMAP);
		return map != null ? map : Collections.EMPTY_MAP;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.productLineMap</code> attribute.
	 * @return the productLineMap - B2bUnit and Product Line of the user
	 */
	public Map<String,String> getAllProductLineMap()
	{
		return getAllProductLineMap( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.productLineMap</code> attribute. 
	 * @param value the productLineMap - B2bUnit and Product Line of the user
	 */
	public void setAllProductLineMap(final SessionContext ctx, final Map<String,String> value)
	{
		setProperty(ctx, PRODUCTLINEMAP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.productLineMap</code> attribute. 
	 * @param value the productLineMap - B2bUnit and Product Line of the user
	 */
	public void setAllProductLineMap(final Map<String,String> value)
	{
		setAllProductLineMap( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.reactiveTokenValue</code> attribute.
	 * @return the reactiveTokenValue - Token Value for Reactivation
	 */
	public String getReactiveTokenValue(final SessionContext ctx)
	{
		return (String)getProperty( ctx, REACTIVETOKENVALUE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.reactiveTokenValue</code> attribute.
	 * @return the reactiveTokenValue - Token Value for Reactivation
	 */
	public String getReactiveTokenValue()
	{
		return getReactiveTokenValue( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.reactiveTokenValue</code> attribute. 
	 * @param value the reactiveTokenValue - Token Value for Reactivation
	 */
	public void setReactiveTokenValue(final SessionContext ctx, final String value)
	{
		setProperty(ctx, REACTIVETOKENVALUE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.reactiveTokenValue</code> attribute. 
	 * @param value the reactiveTokenValue - Token Value for Reactivation
	 */
	public void setReactiveTokenValue(final String value)
	{
		setReactiveTokenValue( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.recentSoldtoTime</code> attribute.
	 * @return the recentSoldtoTime - Recently Used Sold To List
	 */
	public Map<B2BUnit,Date> getAllRecentSoldtoTime(final SessionContext ctx)
	{
		Map<B2BUnit,Date> map = (Map<B2BUnit,Date>)getProperty( ctx, RECENTSOLDTOTIME);
		return map != null ? map : Collections.EMPTY_MAP;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.recentSoldtoTime</code> attribute.
	 * @return the recentSoldtoTime - Recently Used Sold To List
	 */
	public Map<B2BUnit,Date> getAllRecentSoldtoTime()
	{
		return getAllRecentSoldtoTime( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.recentSoldtoTime</code> attribute. 
	 * @param value the recentSoldtoTime - Recently Used Sold To List
	 */
	public void setAllRecentSoldtoTime(final SessionContext ctx, final Map<B2BUnit,Date> value)
	{
		setProperty(ctx, RECENTSOLDTOTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.recentSoldtoTime</code> attribute. 
	 * @param value the recentSoldtoTime - Recently Used Sold To List
	 */
	public void setAllRecentSoldtoTime(final Map<B2BUnit,Date> value)
	{
		setAllRecentSoldtoTime( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.recentUsedSoldtos</code> attribute.
	 * @return the recentUsedSoldtos - favorite Sold To List
	 */
	public List<B2BUnit> getRecentUsedSoldtos(final SessionContext ctx)
	{
		List<B2BUnit> coll = (List<B2BUnit>)getProperty( ctx, RECENTUSEDSOLDTOS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.recentUsedSoldtos</code> attribute.
	 * @return the recentUsedSoldtos - favorite Sold To List
	 */
	public List<B2BUnit> getRecentUsedSoldtos()
	{
		return getRecentUsedSoldtos( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.recentUsedSoldtos</code> attribute. 
	 * @param value the recentUsedSoldtos - favorite Sold To List
	 */
	public void setRecentUsedSoldtos(final SessionContext ctx, final List<B2BUnit> value)
	{
		setProperty(ctx, RECENTUSEDSOLDTOS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.recentUsedSoldtos</code> attribute. 
	 * @param value the recentUsedSoldtos - favorite Sold To List
	 */
	public void setRecentUsedSoldtos(final List<B2BUnit> value)
	{
		setRecentUsedSoldtos( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.sendInvoiceEmail</code> attribute.
	 * @return the sendInvoiceEmail - Send Invoices To
	 */
	public String getSendInvoiceEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SENDINVOICEEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.sendInvoiceEmail</code> attribute.
	 * @return the sendInvoiceEmail - Send Invoices To
	 */
	public String getSendInvoiceEmail()
	{
		return getSendInvoiceEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.sendInvoiceEmail</code> attribute. 
	 * @param value the sendInvoiceEmail - Send Invoices To
	 */
	public void setSendInvoiceEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SENDINVOICEEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.sendInvoiceEmail</code> attribute. 
	 * @param value the sendInvoiceEmail - Send Invoices To
	 */
	public void setSendInvoiceEmail(final String value)
	{
		setSendInvoiceEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.sendSalesOrderEmail</code> attribute.
	 * @return the sendSalesOrderEmail - Send Sales Order Acknowledgement To
	 */
	public String getSendSalesOrderEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SENDSALESORDEREMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.sendSalesOrderEmail</code> attribute.
	 * @return the sendSalesOrderEmail - Send Sales Order Acknowledgement To
	 */
	public String getSendSalesOrderEmail()
	{
		return getSendSalesOrderEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.sendSalesOrderEmail</code> attribute. 
	 * @param value the sendSalesOrderEmail - Send Sales Order Acknowledgement To
	 */
	public void setSendSalesOrderEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SENDSALESORDEREMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.sendSalesOrderEmail</code> attribute. 
	 * @param value the sendSalesOrderEmail - Send Sales Order Acknowledgement To
	 */
	public void setSendSalesOrderEmail(final String value)
	{
		setSendSalesOrderEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.sendShippingNotificationEmail</code> attribute.
	 * @return the sendShippingNotificationEmail - Send Shipping Notification To
	 */
	public String getSendShippingNotificationEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SENDSHIPPINGNOTIFICATIONEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.sendShippingNotificationEmail</code> attribute.
	 * @return the sendShippingNotificationEmail - Send Shipping Notification To
	 */
	public String getSendShippingNotificationEmail()
	{
		return getSendShippingNotificationEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.sendShippingNotificationEmail</code> attribute. 
	 * @param value the sendShippingNotificationEmail - Send Shipping Notification To
	 */
	public void setSendShippingNotificationEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SENDSHIPPINGNOTIFICATIONEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.sendShippingNotificationEmail</code> attribute. 
	 * @param value the sendShippingNotificationEmail - Send Shipping Notification To
	 */
	public void setSendShippingNotificationEmail(final String value)
	{
		setSendShippingNotificationEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.shippingContactName</code> attribute.
	 * @return the shippingContactName - Shipping contact name
	 */
	public String getShippingContactName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SHIPPINGCONTACTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.shippingContactName</code> attribute.
	 * @return the shippingContactName - Shipping contact name
	 */
	public String getShippingContactName()
	{
		return getShippingContactName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.shippingContactName</code> attribute. 
	 * @param value the shippingContactName - Shipping contact name
	 */
	public void setShippingContactName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SHIPPINGCONTACTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.shippingContactName</code> attribute. 
	 * @param value the shippingContactName - Shipping contact name
	 */
	public void setShippingContactName(final String value)
	{
		setShippingContactName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.shippingContactNumber</code> attribute.
	 * @return the shippingContactNumber - Shipping contact number
	 */
	public String getShippingContactNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SHIPPINGCONTACTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.shippingContactNumber</code> attribute.
	 * @return the shippingContactNumber - Shipping contact number
	 */
	public String getShippingContactNumber()
	{
		return getShippingContactNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.shippingContactNumber</code> attribute. 
	 * @param value the shippingContactNumber - Shipping contact number
	 */
	public void setShippingContactNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SHIPPINGCONTACTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.shippingContactNumber</code> attribute. 
	 * @param value the shippingContactNumber - Shipping contact number
	 */
	public void setShippingContactNumber(final String value)
	{
		setShippingContactNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.soaContact</code> attribute.
	 * @return the soaContact
	 */
	public String getSoaContact(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SOACONTACT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.soaContact</code> attribute.
	 * @return the soaContact
	 */
	public String getSoaContact()
	{
		return getSoaContact( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.soaContact</code> attribute. 
	 * @param value the soaContact
	 */
	public void setSoaContact(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SOACONTACT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.soaContact</code> attribute. 
	 * @param value the soaContact
	 */
	public void setSoaContact(final String value)
	{
		setSoaContact( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.soaPhone</code> attribute.
	 * @return the soaPhone
	 */
	public String getSoaPhone(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SOAPHONE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.soaPhone</code> attribute.
	 * @return the soaPhone
	 */
	public String getSoaPhone()
	{
		return getSoaPhone( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.soaPhone</code> attribute. 
	 * @param value the soaPhone
	 */
	public void setSoaPhone(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SOAPHONE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.soaPhone</code> attribute. 
	 * @param value the soaPhone
	 */
	public void setSoaPhone(final String value)
	{
		setSoaPhone( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.userAccessibleCategories</code> attribute.
	 * @return the userAccessibleCategories - catalog categories which are visible for this User
	 */
	public Collection<Category> getUserAccessibleCategories(final SessionContext ctx)
	{
		final List<Category> items = getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.GEEDGECUSTOMER2CATEGORYRELATION,
			"Category",
			null,
			Utilities.getRelationOrderingOverride(GEEDGECUSTOMER2CATEGORYRELATION_SRC_ORDERED, true),
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.userAccessibleCategories</code> attribute.
	 * @return the userAccessibleCategories - catalog categories which are visible for this User
	 */
	public Collection<Category> getUserAccessibleCategories()
	{
		return getUserAccessibleCategories( getSession().getSessionContext() );
	}
	
	public long getUserAccessibleCategoriesCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.GEEDGECUSTOMER2CATEGORYRELATION,
			"Category",
			null
		);
	}
	
	public long getUserAccessibleCategoriesCount()
	{
		return getUserAccessibleCategoriesCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.userAccessibleCategories</code> attribute. 
	 * @param value the userAccessibleCategories - catalog categories which are visible for this User
	 */
	public void setUserAccessibleCategories(final SessionContext ctx, final Collection<Category> value)
	{
		setLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.GEEDGECUSTOMER2CATEGORYRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(GEEDGECUSTOMER2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(GEEDGECUSTOMER2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.userAccessibleCategories</code> attribute. 
	 * @param value the userAccessibleCategories - catalog categories which are visible for this User
	 */
	public void setUserAccessibleCategories(final Collection<Category> value)
	{
		setUserAccessibleCategories( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to userAccessibleCategories. 
	 * @param value the item to add to userAccessibleCategories - catalog categories which are visible for this User
	 */
	public void addToUserAccessibleCategories(final SessionContext ctx, final Category value)
	{
		addLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.GEEDGECUSTOMER2CATEGORYRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(GEEDGECUSTOMER2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(GEEDGECUSTOMER2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to userAccessibleCategories. 
	 * @param value the item to add to userAccessibleCategories - catalog categories which are visible for this User
	 */
	public void addToUserAccessibleCategories(final Category value)
	{
		addToUserAccessibleCategories( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from userAccessibleCategories. 
	 * @param value the item to remove from userAccessibleCategories - catalog categories which are visible for this User
	 */
	public void removeFromUserAccessibleCategories(final SessionContext ctx, final Category value)
	{
		removeLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.GEEDGECUSTOMER2CATEGORYRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(GEEDGECUSTOMER2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(GEEDGECUSTOMER2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from userAccessibleCategories. 
	 * @param value the item to remove from userAccessibleCategories - catalog categories which are visible for this User
	 */
	public void removeFromUserAccessibleCategories(final Category value)
	{
		removeFromUserAccessibleCategories( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.userCreationChannel</code> attribute.
	 * @return the userCreationChannel
	 */
	public EnumerationValue getUserCreationChannel(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, USERCREATIONCHANNEL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCustomer.userCreationChannel</code> attribute.
	 * @return the userCreationChannel
	 */
	public EnumerationValue getUserCreationChannel()
	{
		return getUserCreationChannel( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.userCreationChannel</code> attribute. 
	 * @param value the userCreationChannel
	 */
	public void setUserCreationChannel(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, USERCREATIONCHANNEL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCustomer.userCreationChannel</code> attribute. 
	 * @param value the userCreationChannel
	 */
	public void setUserCreationChannel(final EnumerationValue value)
	{
		setUserCreationChannel( getSession().getSessionContext(), value );
	}
	
}
