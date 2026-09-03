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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEConfigurationPart}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEConfigurationPart extends GenericItem
{
	/** Qualifier of the <code>BHGEConfigurationPart.parentId</code> attribute **/
	public static final String PARENTID = "parentId";
	/** Qualifier of the <code>BHGEConfigurationPart.instanceId</code> attribute **/
	public static final String INSTANCEID = "instanceId";
	/** Qualifier of the <code>BHGEConfigurationPart.partOfNo</code> attribute **/
	public static final String PARTOFNO = "partOfNo";
	/** Qualifier of the <code>BHGEConfigurationPart.objType</code> attribute **/
	public static final String OBJTYPE = "objType";
	/** Qualifier of the <code>BHGEConfigurationPart.classType</code> attribute **/
	public static final String CLASSTYPE = "classType";
	/** Qualifier of the <code>BHGEConfigurationPart.objKey</code> attribute **/
	public static final String OBJKEY = "objKey";
	/** Qualifier of the <code>BHGEConfigurationPart.author</code> attribute **/
	public static final String AUTHOR = "author";
	/** Qualifier of the <code>BHGEConfigurationPart.salesRelevant</code> attribute **/
	public static final String SALESRELEVANT = "salesRelevant";
	/** Qualifier of the <code>BHGEConfigurationPart.orderEntryPOS</code> attribute **/
	public static final String ORDERENTRYPOS = "orderEntryPOS";
	/** Qualifier of the <code>BHGEConfigurationPart.orderEntry</code> attribute **/
	public static final String ORDERENTRY = "orderEntry";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n ORDERENTRY's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedBHGEConfigurationPart> ORDERENTRYHANDLER = new BidirectionalOneToManyHandler<GeneratedBHGEConfigurationPart>(
	BhgeCoreConstants.TC.BHGECONFIGURATIONPART,
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
		tmp.put(PARENTID, AttributeMode.INITIAL);
		tmp.put(INSTANCEID, AttributeMode.INITIAL);
		tmp.put(PARTOFNO, AttributeMode.INITIAL);
		tmp.put(OBJTYPE, AttributeMode.INITIAL);
		tmp.put(CLASSTYPE, AttributeMode.INITIAL);
		tmp.put(OBJKEY, AttributeMode.INITIAL);
		tmp.put(AUTHOR, AttributeMode.INITIAL);
		tmp.put(SALESRELEVANT, AttributeMode.INITIAL);
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
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.author</code> attribute.
	 * @return the author
	 */
	public String getAuthor(final SessionContext ctx)
	{
		return (String)getProperty( ctx, AUTHOR);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.author</code> attribute.
	 * @return the author
	 */
	public String getAuthor()
	{
		return getAuthor( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.author</code> attribute. 
	 * @param value the author
	 */
	public void setAuthor(final SessionContext ctx, final String value)
	{
		setProperty(ctx, AUTHOR,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.author</code> attribute. 
	 * @param value the author
	 */
	public void setAuthor(final String value)
	{
		setAuthor( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.classType</code> attribute.
	 * @return the classType
	 */
	public String getClassType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CLASSTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.classType</code> attribute.
	 * @return the classType
	 */
	public String getClassType()
	{
		return getClassType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.classType</code> attribute. 
	 * @param value the classType
	 */
	public void setClassType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CLASSTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.classType</code> attribute. 
	 * @param value the classType
	 */
	public void setClassType(final String value)
	{
		setClassType( getSession().getSessionContext(), value );
	}
	
	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes) throws JaloBusinessException
	{
		ORDERENTRYHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.instanceId</code> attribute.
	 * @return the instanceId
	 */
	public String getInstanceId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, INSTANCEID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.instanceId</code> attribute.
	 * @return the instanceId
	 */
	public String getInstanceId()
	{
		return getInstanceId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.instanceId</code> attribute. 
	 * @param value the instanceId
	 */
	public void setInstanceId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, INSTANCEID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.instanceId</code> attribute. 
	 * @param value the instanceId
	 */
	public void setInstanceId(final String value)
	{
		setInstanceId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.objKey</code> attribute.
	 * @return the objKey
	 */
	public String getObjKey(final SessionContext ctx)
	{
		return (String)getProperty( ctx, OBJKEY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.objKey</code> attribute.
	 * @return the objKey
	 */
	public String getObjKey()
	{
		return getObjKey( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.objKey</code> attribute. 
	 * @param value the objKey
	 */
	public void setObjKey(final SessionContext ctx, final String value)
	{
		setProperty(ctx, OBJKEY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.objKey</code> attribute. 
	 * @param value the objKey
	 */
	public void setObjKey(final String value)
	{
		setObjKey( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.objType</code> attribute.
	 * @return the objType
	 */
	public String getObjType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, OBJTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.objType</code> attribute.
	 * @return the objType
	 */
	public String getObjType()
	{
		return getObjType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.objType</code> attribute. 
	 * @param value the objType
	 */
	public void setObjType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, OBJTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.objType</code> attribute. 
	 * @param value the objType
	 */
	public void setObjType(final String value)
	{
		setObjType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.orderEntry</code> attribute.
	 * @return the orderEntry
	 */
	public AbstractOrderEntry getOrderEntry(final SessionContext ctx)
	{
		return (AbstractOrderEntry)getProperty( ctx, ORDERENTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.orderEntry</code> attribute.
	 * @return the orderEntry
	 */
	public AbstractOrderEntry getOrderEntry()
	{
		return getOrderEntry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.orderEntry</code> attribute. 
	 * @param value the orderEntry
	 */
	public void setOrderEntry(final SessionContext ctx, final AbstractOrderEntry value)
	{
		ORDERENTRYHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.orderEntry</code> attribute. 
	 * @param value the orderEntry
	 */
	public void setOrderEntry(final AbstractOrderEntry value)
	{
		setOrderEntry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.orderEntryPOS</code> attribute.
	 * @return the orderEntryPOS
	 */
	 Integer getOrderEntryPOS(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, ORDERENTRYPOS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.orderEntryPOS</code> attribute.
	 * @return the orderEntryPOS
	 */
	 Integer getOrderEntryPOS()
	{
		return getOrderEntryPOS( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.orderEntryPOS</code> attribute. 
	 * @return the orderEntryPOS
	 */
	 int getOrderEntryPOSAsPrimitive(final SessionContext ctx)
	{
		Integer value = getOrderEntryPOS( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.orderEntryPOS</code> attribute. 
	 * @return the orderEntryPOS
	 */
	 int getOrderEntryPOSAsPrimitive()
	{
		return getOrderEntryPOSAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, ORDERENTRYPOS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final Integer value)
	{
		setOrderEntryPOS( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final SessionContext ctx, final int value)
	{
		setOrderEntryPOS( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final int value)
	{
		setOrderEntryPOS( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.parentId</code> attribute.
	 * @return the parentId
	 */
	public String getParentId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PARENTID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.parentId</code> attribute.
	 * @return the parentId
	 */
	public String getParentId()
	{
		return getParentId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.parentId</code> attribute. 
	 * @param value the parentId
	 */
	public void setParentId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PARENTID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.parentId</code> attribute. 
	 * @param value the parentId
	 */
	public void setParentId(final String value)
	{
		setParentId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.partOfNo</code> attribute.
	 * @return the partOfNo
	 */
	public String getPartOfNo(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PARTOFNO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.partOfNo</code> attribute.
	 * @return the partOfNo
	 */
	public String getPartOfNo()
	{
		return getPartOfNo( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.partOfNo</code> attribute. 
	 * @param value the partOfNo
	 */
	public void setPartOfNo(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PARTOFNO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.partOfNo</code> attribute. 
	 * @param value the partOfNo
	 */
	public void setPartOfNo(final String value)
	{
		setPartOfNo( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.salesRelevant</code> attribute.
	 * @return the salesRelevant
	 */
	public String getSalesRelevant(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SALESRELEVANT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEConfigurationPart.salesRelevant</code> attribute.
	 * @return the salesRelevant
	 */
	public String getSalesRelevant()
	{
		return getSalesRelevant( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.salesRelevant</code> attribute. 
	 * @param value the salesRelevant
	 */
	public void setSalesRelevant(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SALESRELEVANT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEConfigurationPart.salesRelevant</code> attribute. 
	 * @param value the salesRelevant
	 */
	public void setSalesRelevant(final String value)
	{
		setSalesRelevant( getSession().getSessionContext(), value );
	}
	
}
