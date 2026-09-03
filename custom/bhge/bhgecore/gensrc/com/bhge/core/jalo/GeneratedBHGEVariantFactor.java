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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEVariantFactor}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEVariantFactor extends GenericItem
{
	/** Qualifier of the <code>BHGEVariantFactor.instanceId</code> attribute **/
	public static final String INSTANCEID = "instanceId";
	/** Qualifier of the <code>BHGEVariantFactor.variantKey</code> attribute **/
	public static final String VARIANTKEY = "variantKey";
	/** Qualifier of the <code>BHGEVariantFactor.variantFactor</code> attribute **/
	public static final String VARIANTFACTOR = "variantFactor";
	/** Qualifier of the <code>BHGEVariantFactor.orderEntryPOS</code> attribute **/
	public static final String ORDERENTRYPOS = "orderEntryPOS";
	/** Qualifier of the <code>BHGEVariantFactor.orderEntry</code> attribute **/
	public static final String ORDERENTRY = "orderEntry";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n ORDERENTRY's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedBHGEVariantFactor> ORDERENTRYHANDLER = new BidirectionalOneToManyHandler<GeneratedBHGEVariantFactor>(
	BhgeCoreConstants.TC.BHGEVARIANTFACTOR,
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
		tmp.put(VARIANTKEY, AttributeMode.INITIAL);
		tmp.put(VARIANTFACTOR, AttributeMode.INITIAL);
		tmp.put(ORDERENTRYPOS, AttributeMode.INITIAL);
		tmp.put(ORDERENTRY, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes) throws JaloBusinessException
	{
		ORDERENTRYHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEVariantFactor.instanceId</code> attribute.
	 * @return the instanceId
	 */
	public String getInstanceId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, INSTANCEID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEVariantFactor.instanceId</code> attribute.
	 * @return the instanceId
	 */
	public String getInstanceId()
	{
		return getInstanceId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEVariantFactor.instanceId</code> attribute. 
	 * @param value the instanceId
	 */
	public void setInstanceId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, INSTANCEID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEVariantFactor.instanceId</code> attribute. 
	 * @param value the instanceId
	 */
	public void setInstanceId(final String value)
	{
		setInstanceId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEVariantFactor.orderEntry</code> attribute.
	 * @return the orderEntry
	 */
	public AbstractOrderEntry getOrderEntry(final SessionContext ctx)
	{
		return (AbstractOrderEntry)getProperty( ctx, ORDERENTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEVariantFactor.orderEntry</code> attribute.
	 * @return the orderEntry
	 */
	public AbstractOrderEntry getOrderEntry()
	{
		return getOrderEntry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEVariantFactor.orderEntry</code> attribute. 
	 * @param value the orderEntry
	 */
	public void setOrderEntry(final SessionContext ctx, final AbstractOrderEntry value)
	{
		ORDERENTRYHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEVariantFactor.orderEntry</code> attribute. 
	 * @param value the orderEntry
	 */
	public void setOrderEntry(final AbstractOrderEntry value)
	{
		setOrderEntry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEVariantFactor.orderEntryPOS</code> attribute.
	 * @return the orderEntryPOS
	 */
	 Integer getOrderEntryPOS(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, ORDERENTRYPOS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEVariantFactor.orderEntryPOS</code> attribute.
	 * @return the orderEntryPOS
	 */
	 Integer getOrderEntryPOS()
	{
		return getOrderEntryPOS( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEVariantFactor.orderEntryPOS</code> attribute. 
	 * @return the orderEntryPOS
	 */
	 int getOrderEntryPOSAsPrimitive(final SessionContext ctx)
	{
		Integer value = getOrderEntryPOS( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEVariantFactor.orderEntryPOS</code> attribute. 
	 * @return the orderEntryPOS
	 */
	 int getOrderEntryPOSAsPrimitive()
	{
		return getOrderEntryPOSAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEVariantFactor.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, ORDERENTRYPOS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEVariantFactor.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final Integer value)
	{
		setOrderEntryPOS( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEVariantFactor.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final SessionContext ctx, final int value)
	{
		setOrderEntryPOS( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEVariantFactor.orderEntryPOS</code> attribute. 
	 * @param value the orderEntryPOS
	 */
	 void setOrderEntryPOS(final int value)
	{
		setOrderEntryPOS( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEVariantFactor.variantFactor</code> attribute.
	 * @return the variantFactor
	 */
	public String getVariantFactor(final SessionContext ctx)
	{
		return (String)getProperty( ctx, VARIANTFACTOR);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEVariantFactor.variantFactor</code> attribute.
	 * @return the variantFactor
	 */
	public String getVariantFactor()
	{
		return getVariantFactor( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEVariantFactor.variantFactor</code> attribute. 
	 * @param value the variantFactor
	 */
	public void setVariantFactor(final SessionContext ctx, final String value)
	{
		setProperty(ctx, VARIANTFACTOR,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEVariantFactor.variantFactor</code> attribute. 
	 * @param value the variantFactor
	 */
	public void setVariantFactor(final String value)
	{
		setVariantFactor( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEVariantFactor.variantKey</code> attribute.
	 * @return the variantKey
	 */
	public String getVariantKey(final SessionContext ctx)
	{
		return (String)getProperty( ctx, VARIANTKEY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEVariantFactor.variantKey</code> attribute.
	 * @return the variantKey
	 */
	public String getVariantKey()
	{
		return getVariantKey( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEVariantFactor.variantKey</code> attribute. 
	 * @param value the variantKey
	 */
	public void setVariantKey(final SessionContext ctx, final String value)
	{
		setProperty(ctx, VARIANTKEY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEVariantFactor.variantKey</code> attribute. 
	 * @param value the variantKey
	 */
	public void setVariantKey(final String value)
	{
		setVariantKey( getSession().getSessionContext(), value );
	}
	
}
