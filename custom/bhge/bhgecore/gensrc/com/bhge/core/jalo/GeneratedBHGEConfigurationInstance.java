/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.order.AbstractOrderEntry;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.util.BidirectionalOneToManyHandler;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEConfigurationInstance}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEConfigurationInstance extends GenericItem
{
	/** Qualifier of the <code>BHGEConfigurationInstance.instanceId</code> attribute **/
	public static final String INSTANCEID = "instanceId";
	/** Qualifier of the <code>BHGEConfigurationInstance.objectType</code> attribute **/
	public static final String OBJECTTYPE = "objectType";
	/** Qualifier of the <code>BHGEConfigurationInstance.classType</code> attribute **/
	public static final String CLASSTYPE = "classType";
	/** Qualifier of the <code>BHGEConfigurationInstance.objKey</code> attribute **/
	public static final String OBJKEY = "objKey";
	/** Qualifier of the <code>BHGEConfigurationInstance.quantity</code> attribute **/
	public static final String QUANTITY = "quantity";
	/** Qualifier of the <code>BHGEConfigurationInstance.author</code> attribute **/
	public static final String AUTHOR = "author";
	/** Qualifier of the <code>BHGEConfigurationInstance.quantityUnit</code> attribute **/
	public static final String QUANTITYUNIT = "quantityUnit";
	/** Qualifier of the <code>BHGEConfigurationInstance.complete</code> attribute **/
	public static final String COMPLETE = "complete";
	/** Qualifier of the <code>BHGEConfigurationInstance.consistent</code> attribute **/
	public static final String CONSISTENT = "consistent";
	/** Qualifier of the <code>BHGEConfigurationInstance.orderEntryPOS</code> attribute **/
	public static final String ORDERENTRYPOS = "orderEntryPOS";
	/** Qualifier of the <code>BHGEConfigurationInstance.orderEntry</code> attribute **/
	public static final String ORDERENTRY = "orderEntry";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n ORDERENTRY's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedBHGEConfigurationInstance> ORDERENTRYHANDLER = new BidirectionalOneToManyHandler<GeneratedBHGEConfigurationInstance>(
	BhgeCoreConstants.TC.BHGECONFIGURATIONINSTANCE,
	false,
	"orderEntry",
	"orderEntryPOS",
	true,
	true,
	CollectionType.LIST
	);
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(INSTANCEID, AttributeMode.INITIAL);
		tmp.put(OBJECTTYPE, AttributeMode.INITIAL);
		tmp.put(CLASSTYPE, AttributeMode.INITIAL);
		tmp.put(OBJKEY, AttributeMode.INITIAL);
		tmp.put(QUANTITY, AttributeMode.INITIAL);
		tmp.put(AUTHOR, AttributeMode.INITIAL);
		tmp.put(QUANTITYUNIT, AttributeMode.INITIAL);
		tmp.put(COMPLETE, AttributeMode.INITIAL);
		tmp.put(CONSISTENT, AttributeMode.INITIAL);
		tmp.put(ORDERENTRYPOS, AttributeMode.INITIAL);
		tmp.put(ORDERENTRY, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.author</code> attribute.
	 * @return the author
	 */
	public String getAuthor(final SessionContext ctx)
	{
		return (String)getProperty( ctx, AUTHOR);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.author</code> attribute.
	 * @return the author
	 */
	public String getAuthor()
	{
		return getAuthor( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.author</code> attribute. 
	 * @param value the author
	 */
	public void setAuthor(final SessionContext ctx, final String value)
	{
		setProperty(ctx, AUTHOR,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.author</code> attribute. 
	 * @param value the author
	 */
	public void setAuthor(final String value)
	{
		setAuthor( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.classType</code> attribute.
	 * @return the classType
	 */
	public String getClassType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CLASSTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.classType</code> attribute.
	 * @return the classType
	 */
	public String getClassType()
	{
		return getClassType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.classType</code> attribute. 
	 * @param value the classType
	 */
	public void setClassType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CLASSTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.classType</code> attribute. 
	 * @param value the classType
	 */
	public void setClassType(final String value)
	{
		setClassType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.complete</code> attribute.
	 * @return the complete
	 */
	public String getComplete(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COMPLETE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.complete</code> attribute.
	 * @return the complete
	 */
	public String getComplete()
	{
		return getComplete( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.complete</code> attribute. 
	 * @param value the complete
	 */
	public void setComplete(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COMPLETE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.complete</code> attribute. 
	 * @param value the complete
	 */
	public void setComplete(final String value)
	{
		setComplete( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.consistent</code> attribute.
	 * @return the consistent
	 */
	public String getConsistent(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONSISTENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.consistent</code> attribute.
	 * @return the consistent
	 */
	public String getConsistent()
	{
		return getConsistent( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.consistent</code> attribute. 
	 * @param value the consistent
	 */
	public void setConsistent(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONSISTENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.consistent</code> attribute. 
	 * @param value the consistent
	 */
	public void setConsistent(final String value)
	{
		setConsistent( getSession().getSessionContext(), value );
	}
	
	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes) throws JaloBusinessException
	{
		ORDERENTRYHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.instanceId</code> attribute.
	 * @return the instanceId
	 */
	public String getInstanceId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, INSTANCEID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.instanceId</code> attribute.
	 * @return the instanceId
	 */
	public String getInstanceId()
	{
		return getInstanceId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.instanceId</code> attribute. 
	 * @param value the instanceId
	 */
	public void setInstanceId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, INSTANCEID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.instanceId</code> attribute. 
	 * @param value the instanceId
	 */
	public void setInstanceId(final String value)
	{
		setInstanceId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.objectType</code> attribute.
	 * @return the objectType
	 */
	public String getObjectType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, OBJECTTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.objectType</code> attribute.
	 * @return the objectType
	 */
	public String getObjectType()
	{
		return getObjectType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.objectType</code> attribute. 
	 * @param value the objectType
	 */
	public void setObjectType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, OBJECTTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.objectType</code> attribute. 
	 * @param value the objectType
	 */
	public void setObjectType(final String value)
	{
		setObjectType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.objKey</code> attribute.
	 * @return the objKey
	 */
	public String getObjKey(final SessionContext ctx)
	{
		return (String)getProperty( ctx, OBJKEY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.objKey</code> attribute.
	 * @return the objKey
	 */
	public String getObjKey()
	{
		return getObjKey( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.objKey</code> attribute. 
	 * @param value the objKey
	 */
	public void setObjKey(final SessionContext ctx, final String value)
	{
		setProperty(ctx, OBJKEY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.objKey</code> attribute. 
	 * @param value the objKey
	 */
	public void setObjKey(final String value)
	{
		setObjKey( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.orderEntry</code> attribute.
	 * @return the orderEntry
	 */
	public AbstractOrderEntry getOrderEntry(final SessionContext ctx)
	{
		return (AbstractOrderEntry)getProperty( ctx, ORDERENTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.orderEntry</code> attribute.
	 * @return the orderEntry
	 */
	public AbstractOrderEntry getOrderEntry()
	{
		return getOrderEntry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.orderEntry</code> attribute. 
	 * @param value the orderEntry
	 */
	public void setOrderEntry(final SessionContext ctx, final AbstractOrderEntry value)
	{
		ORDERENTRYHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.orderEntry</code> attribute. 
	 * @param value the orderEntry
	 */
	public void setOrderEntry(final AbstractOrderEntry value)
	{
		setOrderEntry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.orderEntryPOS</code> attribute.
	 * @return the orderEntryPOS
	 */
	 Integer getOrderEntryPOS(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, ORDERENTRYPOS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.orderEntryPOS</code> attribute.
	 * @return the orderEntryPOS
	 */
	 Integer getOrderEntryPOS()
	{
		return getOrderEntryPOS( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.orderEntryPOS</code> attribute. 
	 * @return the orderEntryPOS
	 */
	 int getOrderEntryPOSAsPrimitive(final SessionContext ctx)
	{
		Integer value = getOrderEntryPOS( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.orderEntryPOS</code> attribute. 
	 * @return the orderEntryPOS
	 */
	 int getOrderEntryPOSAsPrimitive()
	{
		return getOrderEntryPOSAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, ORDERENTRYPOS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final Integer value)
	{
		setOrderEntryPOS( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final SessionContext ctx, final int value)
	{
		setOrderEntryPOS( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final int value)
	{
		setOrderEntryPOS( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.quantity</code> attribute.
	 * @return the quantity
	 */
	public String getQuantity(final SessionContext ctx)
	{
		return (String)getProperty( ctx, QUANTITY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.quantity</code> attribute.
	 * @return the quantity
	 */
	public String getQuantity()
	{
		return getQuantity( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.quantity</code> attribute. 
	 * @param value the quantity
	 */
	public void setQuantity(final SessionContext ctx, final String value)
	{
		setProperty(ctx, QUANTITY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.quantity</code> attribute. 
	 * @param value the quantity
	 */
	public void setQuantity(final String value)
	{
		setQuantity( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.quantityUnit</code> attribute.
	 * @return the quantityUnit
	 */
	public String getQuantityUnit(final SessionContext ctx)
	{
		return (String)getProperty( ctx, QUANTITYUNIT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationInstance.quantityUnit</code> attribute.
	 * @return the quantityUnit
	 */
	public String getQuantityUnit()
	{
		return getQuantityUnit( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.quantityUnit</code> attribute. 
	 * @param value the quantityUnit
	 */
	public void setQuantityUnit(final SessionContext ctx, final String value)
	{
		setProperty(ctx, QUANTITYUNIT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationInstance.quantityUnit</code> attribute. 
	 * @param value the quantityUnit
	 */
	public void setQuantityUnit(final String value)
	{
		setQuantityUnit( getSession().getSessionContext(), value );
	}
	
}
