/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.jalo.OfflineOrder;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.util.BidirectionalOneToManyHandler;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem OfflineOrderEntry}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedOfflineOrderEntry extends GenericItem
{
	/** Qualifier of the <code>OfflineOrderEntry.productName</code> attribute **/
	public static final String PRODUCTNAME = "productName";
	/** Qualifier of the <code>OfflineOrderEntry.partNumber</code> attribute **/
	public static final String PARTNUMBER = "partNumber";
	/** Qualifier of the <code>OfflineOrderEntry.bhgeServiceLineNumber</code> attribute **/
	public static final String BHGESERVICELINENUMBER = "bhgeServiceLineNumber";
	/** Qualifier of the <code>OfflineOrderEntry.serialNumber</code> attribute **/
	public static final String SERIALNUMBER = "serialNumber";
	/** Qualifier of the <code>OfflineOrderEntry.status</code> attribute **/
	public static final String STATUS = "status";
	/** Qualifier of the <code>OfflineOrderEntry.estimatedShipDate</code> attribute **/
	public static final String ESTIMATEDSHIPDATE = "estimatedShipDate";
	/** Qualifier of the <code>OfflineOrderEntry.offlineOrder</code> attribute **/
	public static final String OFFLINEORDER = "offlineOrder";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n OFFLINEORDER's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedOfflineOrderEntry> OFFLINEORDERHANDLER = new BidirectionalOneToManyHandler<GeneratedOfflineOrderEntry>(
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
		tmp.put(PRODUCTNAME, AttributeMode.INITIAL);
		tmp.put(PARTNUMBER, AttributeMode.INITIAL);
		tmp.put(BHGESERVICELINENUMBER, AttributeMode.INITIAL);
		tmp.put(SERIALNUMBER, AttributeMode.INITIAL);
		tmp.put(STATUS, AttributeMode.INITIAL);
		tmp.put(ESTIMATEDSHIPDATE, AttributeMode.INITIAL);
		tmp.put(OFFLINEORDER, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.bhgeServiceLineNumber</code> attribute.
	 * @return the bhgeServiceLineNumber
	 */
	public String getBhgeServiceLineNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, BHGESERVICELINENUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.bhgeServiceLineNumber</code> attribute.
	 * @return the bhgeServiceLineNumber
	 */
	public String getBhgeServiceLineNumber()
	{
		return getBhgeServiceLineNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.bhgeServiceLineNumber</code> attribute. 
	 * @param value the bhgeServiceLineNumber
	 */
	public void setBhgeServiceLineNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, BHGESERVICELINENUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.bhgeServiceLineNumber</code> attribute. 
	 * @param value the bhgeServiceLineNumber
	 */
	public void setBhgeServiceLineNumber(final String value)
	{
		setBhgeServiceLineNumber( getSession().getSessionContext(), value );
	}
	
	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes) throws JaloBusinessException
	{
		OFFLINEORDERHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.estimatedShipDate</code> attribute.
	 * @return the estimatedShipDate
	 */
	public Date getEstimatedShipDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, ESTIMATEDSHIPDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.estimatedShipDate</code> attribute.
	 * @return the estimatedShipDate
	 */
	public Date getEstimatedShipDate()
	{
		return getEstimatedShipDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.estimatedShipDate</code> attribute. 
	 * @param value the estimatedShipDate
	 */
	public void setEstimatedShipDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, ESTIMATEDSHIPDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.estimatedShipDate</code> attribute. 
	 * @param value the estimatedShipDate
	 */
	public void setEstimatedShipDate(final Date value)
	{
		setEstimatedShipDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.offlineOrder</code> attribute.
	 * @return the offlineOrder
	 */
	public OfflineOrder getOfflineOrder(final SessionContext ctx)
	{
		return (OfflineOrder)getProperty( ctx, OFFLINEORDER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.offlineOrder</code> attribute.
	 * @return the offlineOrder
	 */
	public OfflineOrder getOfflineOrder()
	{
		return getOfflineOrder( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.offlineOrder</code> attribute. 
	 * @param value the offlineOrder
	 */
	public void setOfflineOrder(final SessionContext ctx, final OfflineOrder value)
	{
		OFFLINEORDERHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.offlineOrder</code> attribute. 
	 * @param value the offlineOrder
	 */
	public void setOfflineOrder(final OfflineOrder value)
	{
		setOfflineOrder( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.partNumber</code> attribute.
	 * @return the partNumber
	 */
	public String getPartNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PARTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.partNumber</code> attribute.
	 * @return the partNumber
	 */
	public String getPartNumber()
	{
		return getPartNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.partNumber</code> attribute. 
	 * @param value the partNumber
	 */
	public void setPartNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PARTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.partNumber</code> attribute. 
	 * @param value the partNumber
	 */
	public void setPartNumber(final String value)
	{
		setPartNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.productName</code> attribute.
	 * @return the productName - To hold the ERP RMA Number
	 */
	public String getProductName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PRODUCTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.productName</code> attribute.
	 * @return the productName - To hold the ERP RMA Number
	 */
	public String getProductName()
	{
		return getProductName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.productName</code> attribute. 
	 * @param value the productName - To hold the ERP RMA Number
	 */
	public void setProductName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PRODUCTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.productName</code> attribute. 
	 * @param value the productName - To hold the ERP RMA Number
	 */
	public void setProductName(final String value)
	{
		setProductName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.serialNumber</code> attribute.
	 * @return the serialNumber
	 */
	public String getSerialNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SERIALNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.serialNumber</code> attribute.
	 * @return the serialNumber
	 */
	public String getSerialNumber()
	{
		return getSerialNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.serialNumber</code> attribute. 
	 * @param value the serialNumber
	 */
	public void setSerialNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SERIALNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.serialNumber</code> attribute. 
	 * @param value the serialNumber
	 */
	public void setSerialNumber(final String value)
	{
		setSerialNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.status</code> attribute.
	 * @return the status
	 */
	public String getStatus(final SessionContext ctx)
	{
		return (String)getProperty( ctx, STATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OfflineOrderEntry.status</code> attribute.
	 * @return the status
	 */
	public String getStatus()
	{
		return getStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.status</code> attribute. 
	 * @param value the status
	 */
	public void setStatus(final SessionContext ctx, final String value)
	{
		setProperty(ctx, STATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OfflineOrderEntry.status</code> attribute. 
	 * @param value the status
	 */
	public void setStatus(final String value)
	{
		setStatus( getSession().getSessionContext(), value );
	}
	
}
