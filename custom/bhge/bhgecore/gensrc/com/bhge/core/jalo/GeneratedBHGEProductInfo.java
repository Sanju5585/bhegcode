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
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.order.AbstractOrderEntry;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.util.BidirectionalOneToManyHandler;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEProductInfo}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEProductInfo extends GenericItem
{
	/** Qualifier of the <code>BHGEProductInfo.cpqCharacteristicName</code> attribute **/
	public static final String CPQCHARACTERISTICNAME = "cpqCharacteristicName";
	/** Qualifier of the <code>BHGEProductInfo.cpqCharacteristicAssignedValues</code> attribute **/
	public static final String CPQCHARACTERISTICASSIGNEDVALUES = "cpqCharacteristicAssignedValues";
	/** Qualifier of the <code>BHGEProductInfo.author</code> attribute **/
	public static final String AUTHOR = "author";
	/** Qualifier of the <code>BHGEProductInfo.instanceId</code> attribute **/
	public static final String INSTANCEID = "instanceId";
	/** Qualifier of the <code>BHGEProductInfo.orderEntryPOS</code> attribute **/
	public static final String ORDERENTRYPOS = "orderEntryPOS";
	/** Qualifier of the <code>BHGEProductInfo.orderEntry</code> attribute **/
	public static final String ORDERENTRY = "orderEntry";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n ORDERENTRY's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedBHGEProductInfo> ORDERENTRYHANDLER = new BidirectionalOneToManyHandler<GeneratedBHGEProductInfo>(
	BhgeCoreConstants.TC.BHGEPRODUCTINFO,
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
		tmp.put(CPQCHARACTERISTICNAME, AttributeMode.INITIAL);
		tmp.put(CPQCHARACTERISTICASSIGNEDVALUES, AttributeMode.INITIAL);
		tmp.put(AUTHOR, AttributeMode.INITIAL);
		tmp.put(INSTANCEID, AttributeMode.INITIAL);
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
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.author</code> attribute.
	 * @return the author - author value of configuration
	 */
	public String getAuthor(final SessionContext ctx)
	{
		return (String)getProperty( ctx, AUTHOR);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.author</code> attribute.
	 * @return the author - author value of configuration
	 */
	public String getAuthor()
	{
		return getAuthor( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.author</code> attribute. 
	 * @param value the author - author value of configuration
	 */
	public void setAuthor(final SessionContext ctx, final String value)
	{
		setProperty(ctx, AUTHOR,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.author</code> attribute. 
	 * @param value the author - author value of configuration
	 */
	public void setAuthor(final String value)
	{
		setAuthor( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.cpqCharacteristicAssignedValues</code> attribute.
	 * @return the cpqCharacteristicAssignedValues - Language independent name of the characteristic assigned values for the inline configuration display
	 */
	public String getCpqCharacteristicAssignedValues(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CPQCHARACTERISTICASSIGNEDVALUES);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.cpqCharacteristicAssignedValues</code> attribute.
	 * @return the cpqCharacteristicAssignedValues - Language independent name of the characteristic assigned values for the inline configuration display
	 */
	public String getCpqCharacteristicAssignedValues()
	{
		return getCpqCharacteristicAssignedValues( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.cpqCharacteristicAssignedValues</code> attribute. 
	 * @param value the cpqCharacteristicAssignedValues - Language independent name of the characteristic assigned values for the inline configuration display
	 */
	public void setCpqCharacteristicAssignedValues(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CPQCHARACTERISTICASSIGNEDVALUES,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.cpqCharacteristicAssignedValues</code> attribute. 
	 * @param value the cpqCharacteristicAssignedValues - Language independent name of the characteristic assigned values for the inline configuration display
	 */
	public void setCpqCharacteristicAssignedValues(final String value)
	{
		setCpqCharacteristicAssignedValues( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.cpqCharacteristicName</code> attribute.
	 * @return the cpqCharacteristicName - Language independent name of the characteristic for the inline configuration display
	 */
	public String getCpqCharacteristicName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CPQCHARACTERISTICNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.cpqCharacteristicName</code> attribute.
	 * @return the cpqCharacteristicName - Language independent name of the characteristic for the inline configuration display
	 */
	public String getCpqCharacteristicName()
	{
		return getCpqCharacteristicName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.cpqCharacteristicName</code> attribute. 
	 * @param value the cpqCharacteristicName - Language independent name of the characteristic for the inline configuration display
	 */
	public void setCpqCharacteristicName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CPQCHARACTERISTICNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.cpqCharacteristicName</code> attribute. 
	 * @param value the cpqCharacteristicName - Language independent name of the characteristic for the inline configuration display
	 */
	public void setCpqCharacteristicName(final String value)
	{
		setCpqCharacteristicName( getSession().getSessionContext(), value );
	}
	
	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes) throws JaloBusinessException
	{
		ORDERENTRYHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.instanceId</code> attribute.
	 * @return the instanceId - Instance id of configuration
	 */
	public String getInstanceId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, INSTANCEID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.instanceId</code> attribute.
	 * @return the instanceId - Instance id of configuration
	 */
	public String getInstanceId()
	{
		return getInstanceId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.instanceId</code> attribute. 
	 * @param value the instanceId - Instance id of configuration
	 */
	public void setInstanceId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, INSTANCEID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.instanceId</code> attribute. 
	 * @param value the instanceId - Instance id of configuration
	 */
	public void setInstanceId(final String value)
	{
		setInstanceId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.orderEntry</code> attribute.
	 * @return the orderEntry
	 */
	public AbstractOrderEntry getOrderEntry(final SessionContext ctx)
	{
		return (AbstractOrderEntry)getProperty( ctx, ORDERENTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.orderEntry</code> attribute.
	 * @return the orderEntry
	 */
	public AbstractOrderEntry getOrderEntry()
	{
		return getOrderEntry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.orderEntry</code> attribute. 
	 * @param value the orderEntry
	 */
	protected void setOrderEntry(final SessionContext ctx, final AbstractOrderEntry value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		// initial-only attribute: make sure this attribute can be set during item creation only
		if ( ctx.getAttribute( "core.types.creation.initial") != Boolean.TRUE )
		{
			throw new JaloInvalidParameterException( "attribute '"+ORDERENTRY+"' is not changeable", 0 );
		}
		ORDERENTRYHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.orderEntry</code> attribute. 
	 * @param value the orderEntry
	 */
	protected void setOrderEntry(final AbstractOrderEntry value)
	{
		setOrderEntry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.orderEntryPOS</code> attribute.
	 * @return the orderEntryPOS
	 */
	 Integer getOrderEntryPOS(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, ORDERENTRYPOS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.orderEntryPOS</code> attribute.
	 * @return the orderEntryPOS
	 */
	 Integer getOrderEntryPOS()
	{
		return getOrderEntryPOS( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.orderEntryPOS</code> attribute. 
	 * @return the orderEntryPOS
	 */
	 int getOrderEntryPOSAsPrimitive(final SessionContext ctx)
	{
		Integer value = getOrderEntryPOS( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductInfo.orderEntryPOS</code> attribute. 
	 * @return the orderEntryPOS
	 */
	 int getOrderEntryPOSAsPrimitive()
	{
		return getOrderEntryPOSAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, ORDERENTRYPOS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final Integer value)
	{
		setOrderEntryPOS( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final SessionContext ctx, final int value)
	{
		setOrderEntryPOS( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductInfo.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final int value)
	{
		setOrderEntryPOS( getSession().getSessionContext(), value );
	}
	
}
