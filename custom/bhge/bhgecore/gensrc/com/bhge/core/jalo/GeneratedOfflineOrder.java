/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.jalo.OfflineOrderEntry;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.util.OneToManyHandler;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem OfflineOrder}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedOfflineOrder extends GenericItem
{
	/** Qualifier of the <code>OfflineOrder.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>OfflineOrder.erpBhgeServiceNumber</code> attribute **/
	public static final String ERPBHGESERVICENUMBER = "erpBhgeServiceNumber";
	/** Qualifier of the <code>OfflineOrder.erpCustomerNumber</code> attribute **/
	public static final String ERPCUSTOMERNUMBER = "erpCustomerNumber";
	/** Qualifier of the <code>OfflineOrder.erpCustomerName</code> attribute **/
	public static final String ERPCUSTOMERNAME = "erpCustomerName";
	/** Qualifier of the <code>OfflineOrder.customerPONumber</code> attribute **/
	public static final String CUSTOMERPONUMBER = "customerPONumber";
	/** Qualifier of the <code>OfflineOrder.status</code> attribute **/
	public static final String STATUS = "status";
	/** Qualifier of the <code>OfflineOrder.erpSiteId</code> attribute **/
	public static final String ERPSITEID = "erpSiteId";
	/** Qualifier of the <code>OfflineOrder.erpSiteCustomerId</code> attribute **/
	public static final String ERPSITECUSTOMERID = "erpSiteCustomerId";
	/** Qualifier of the <code>OfflineOrder.orderEntries</code> attribute **/
	public static final String ORDERENTRIES = "orderEntries";
	/**
	* {@link OneToManyHandler} for handling 1:n ORDERENTRIES's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<OfflineOrderEntry> ORDERENTRIESHANDLER = new OneToManyHandler<OfflineOrderEntry>(
	BhgeCoreConstants.TC.OFFLINEORDERENTRY,
	false,
	"offlineOrder",
	null,
	false,
	true,
	CollectionType.LIST
	);
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CODE, AttributeMode.INITIAL);
		tmp.put(ERPBHGESERVICENUMBER, AttributeMode.INITIAL);
		tmp.put(ERPCUSTOMERNUMBER, AttributeMode.INITIAL);
		tmp.put(ERPCUSTOMERNAME, AttributeMode.INITIAL);
		tmp.put(CUSTOMERPONUMBER, AttributeMode.INITIAL);
		tmp.put(STATUS, AttributeMode.INITIAL);
		tmp.put(ERPSITEID, AttributeMode.INITIAL);
		tmp.put(ERPSITECUSTOMERID, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.code</code> attribute.
	 * @return the code - To provide unique sequence number for each entry
	 */
	public String getCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.code</code> attribute.
	 * @return the code - To provide unique sequence number for each entry
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.code</code> attribute. 
	 * @param value the code - To provide unique sequence number for each entry
	 */
	public void setCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.code</code> attribute. 
	 * @param value the code - To provide unique sequence number for each entry
	 */
	public void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.customerPONumber</code> attribute.
	 * @return the customerPONumber
	 */
	public String getCustomerPONumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CUSTOMERPONUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.customerPONumber</code> attribute.
	 * @return the customerPONumber
	 */
	public String getCustomerPONumber()
	{
		return getCustomerPONumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.customerPONumber</code> attribute. 
	 * @param value the customerPONumber
	 */
	public void setCustomerPONumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CUSTOMERPONUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.customerPONumber</code> attribute. 
	 * @param value the customerPONumber
	 */
	public void setCustomerPONumber(final String value)
	{
		setCustomerPONumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.erpBhgeServiceNumber</code> attribute.
	 * @return the erpBhgeServiceNumber - To hold the ERP RMA Number
	 */
	public String getErpBhgeServiceNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ERPBHGESERVICENUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.erpBhgeServiceNumber</code> attribute.
	 * @return the erpBhgeServiceNumber - To hold the ERP RMA Number
	 */
	public String getErpBhgeServiceNumber()
	{
		return getErpBhgeServiceNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.erpBhgeServiceNumber</code> attribute. 
	 * @param value the erpBhgeServiceNumber - To hold the ERP RMA Number
	 */
	public void setErpBhgeServiceNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ERPBHGESERVICENUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.erpBhgeServiceNumber</code> attribute. 
	 * @param value the erpBhgeServiceNumber - To hold the ERP RMA Number
	 */
	public void setErpBhgeServiceNumber(final String value)
	{
		setErpBhgeServiceNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.erpCustomerName</code> attribute.
	 * @return the erpCustomerName
	 */
	public String getErpCustomerName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ERPCUSTOMERNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.erpCustomerName</code> attribute.
	 * @return the erpCustomerName
	 */
	public String getErpCustomerName()
	{
		return getErpCustomerName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.erpCustomerName</code> attribute. 
	 * @param value the erpCustomerName
	 */
	public void setErpCustomerName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ERPCUSTOMERNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.erpCustomerName</code> attribute. 
	 * @param value the erpCustomerName
	 */
	public void setErpCustomerName(final String value)
	{
		setErpCustomerName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.erpCustomerNumber</code> attribute.
	 * @return the erpCustomerNumber
	 */
	public String getErpCustomerNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ERPCUSTOMERNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.erpCustomerNumber</code> attribute.
	 * @return the erpCustomerNumber
	 */
	public String getErpCustomerNumber()
	{
		return getErpCustomerNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.erpCustomerNumber</code> attribute. 
	 * @param value the erpCustomerNumber
	 */
	public void setErpCustomerNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ERPCUSTOMERNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.erpCustomerNumber</code> attribute. 
	 * @param value the erpCustomerNumber
	 */
	public void setErpCustomerNumber(final String value)
	{
		setErpCustomerNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.erpSiteCustomerId</code> attribute.
	 * @return the erpSiteCustomerId
	 */
	public String getErpSiteCustomerId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ERPSITECUSTOMERID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.erpSiteCustomerId</code> attribute.
	 * @return the erpSiteCustomerId
	 */
	public String getErpSiteCustomerId()
	{
		return getErpSiteCustomerId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.erpSiteCustomerId</code> attribute. 
	 * @param value the erpSiteCustomerId
	 */
	public void setErpSiteCustomerId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ERPSITECUSTOMERID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.erpSiteCustomerId</code> attribute. 
	 * @param value the erpSiteCustomerId
	 */
	public void setErpSiteCustomerId(final String value)
	{
		setErpSiteCustomerId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.erpSiteId</code> attribute.
	 * @return the erpSiteId
	 */
	public String getErpSiteId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ERPSITEID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.erpSiteId</code> attribute.
	 * @return the erpSiteId
	 */
	public String getErpSiteId()
	{
		return getErpSiteId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.erpSiteId</code> attribute. 
	 * @param value the erpSiteId
	 */
	public void setErpSiteId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ERPSITEID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.erpSiteId</code> attribute. 
	 * @param value the erpSiteId
	 */
	public void setErpSiteId(final String value)
	{
		setErpSiteId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.orderEntries</code> attribute.
	 * @return the orderEntries
	 */
	public List<OfflineOrderEntry> getOrderEntries(final SessionContext ctx)
	{
		return (List<OfflineOrderEntry>)ORDERENTRIESHANDLER.getValues( ctx, this );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.orderEntries</code> attribute.
	 * @return the orderEntries
	 */
	public List<OfflineOrderEntry> getOrderEntries()
	{
		return getOrderEntries( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.orderEntries</code> attribute. 
	 * @param value the orderEntries
	 */
	public void setOrderEntries(final SessionContext ctx, final List<OfflineOrderEntry> value)
	{
		ORDERENTRIESHANDLER.setValues( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.orderEntries</code> attribute. 
	 * @param value the orderEntries
	 */
	public void setOrderEntries(final List<OfflineOrderEntry> value)
	{
		setOrderEntries( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to orderEntries. 
	 * @param value the item to add to orderEntries
	 */
	public void addToOrderEntries(final SessionContext ctx, final OfflineOrderEntry value)
	{
		ORDERENTRIESHANDLER.addValue( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to orderEntries. 
	 * @param value the item to add to orderEntries
	 */
	public void addToOrderEntries(final OfflineOrderEntry value)
	{
		addToOrderEntries( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from orderEntries. 
	 * @param value the item to remove from orderEntries
	 */
	public void removeFromOrderEntries(final SessionContext ctx, final OfflineOrderEntry value)
	{
		ORDERENTRIESHANDLER.removeValue( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from orderEntries. 
	 * @param value the item to remove from orderEntries
	 */
	public void removeFromOrderEntries(final OfflineOrderEntry value)
	{
		removeFromOrderEntries( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.status</code> attribute.
	 * @return the status
	 */
	public String getStatus(final SessionContext ctx)
	{
		return (String)getProperty( ctx, STATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrder.status</code> attribute.
	 * @return the status
	 */
	public String getStatus()
	{
		return getStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.status</code> attribute. 
	 * @param value the status
	 */
	public void setStatus(final SessionContext ctx, final String value)
	{
		setProperty(ctx, STATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrder.status</code> attribute. 
	 * @param value the status
	 */
	public void setStatus(final String value)
	{
		setStatus( getSession().getSessionContext(), value );
	}
	
}
