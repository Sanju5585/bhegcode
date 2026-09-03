/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.constants.CoreConstants;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.order.AbstractOrder;
import de.hybris.platform.jalo.order.Cart;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.util.OneToManyHandler;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.order.Cart BHGECartProfile}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGECartProfile extends Cart
{
	/** Qualifier of the <code>BHGECartProfile.defaultFlag</code> attribute **/
	public static final String DEFAULTFLAG = "defaultFlag";
	/** Qualifier of the <code>BHGECartProfile.order</code> attribute **/
	public static final String ORDER = "order";
	/**
	* {@link OneToManyHandler} for handling 1:n ORDER's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<AbstractOrder> ORDERHANDLER = new OneToManyHandler<AbstractOrder>(
	CoreConstants.TC.ABSTRACTORDER,
	false,
	"cartProfile",
	null,
	false,
	true,
	CollectionType.LIST
	);
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(Cart.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(DEFAULTFLAG, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECartProfile.defaultFlag</code> attribute.
	 * @return the defaultFlag - Flag to indicate profile is Default or Quick Cart
	 */
	public Boolean isDefaultFlag(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, DEFAULTFLAG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECartProfile.defaultFlag</code> attribute.
	 * @return the defaultFlag - Flag to indicate profile is Default or Quick Cart
	 */
	public Boolean isDefaultFlag()
	{
		return isDefaultFlag( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECartProfile.defaultFlag</code> attribute. 
	 * @return the defaultFlag - Flag to indicate profile is Default or Quick Cart
	 */
	public boolean isDefaultFlagAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isDefaultFlag( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECartProfile.defaultFlag</code> attribute. 
	 * @return the defaultFlag - Flag to indicate profile is Default or Quick Cart
	 */
	public boolean isDefaultFlagAsPrimitive()
	{
		return isDefaultFlagAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECartProfile.defaultFlag</code> attribute. 
	 * @param value the defaultFlag - Flag to indicate profile is Default or Quick Cart
	 */
	public void setDefaultFlag(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, DEFAULTFLAG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECartProfile.defaultFlag</code> attribute. 
	 * @param value the defaultFlag - Flag to indicate profile is Default or Quick Cart
	 */
	public void setDefaultFlag(final Boolean value)
	{
		setDefaultFlag( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECartProfile.defaultFlag</code> attribute. 
	 * @param value the defaultFlag - Flag to indicate profile is Default or Quick Cart
	 */
	public void setDefaultFlag(final SessionContext ctx, final boolean value)
	{
		setDefaultFlag( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECartProfile.defaultFlag</code> attribute. 
	 * @param value the defaultFlag - Flag to indicate profile is Default or Quick Cart
	 */
	public void setDefaultFlag(final boolean value)
	{
		setDefaultFlag( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECartProfile.order</code> attribute.
	 * @return the order
	 */
	public List<AbstractOrder> getOrder(final SessionContext ctx)
	{
		return (List<AbstractOrder>)ORDERHANDLER.getValues( ctx, this );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECartProfile.order</code> attribute.
	 * @return the order
	 */
	public List<AbstractOrder> getOrder()
	{
		return getOrder( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECartProfile.order</code> attribute. 
	 * @param value the order
	 */
	public void setOrder(final SessionContext ctx, final List<AbstractOrder> value)
	{
		ORDERHANDLER.setValues( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECartProfile.order</code> attribute. 
	 * @param value the order
	 */
	public void setOrder(final List<AbstractOrder> value)
	{
		setOrder( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to order. 
	 * @param value the item to add to order
	 */
	public void addToOrder(final SessionContext ctx, final AbstractOrder value)
	{
		ORDERHANDLER.addValue( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to order. 
	 * @param value the item to add to order
	 */
	public void addToOrder(final AbstractOrder value)
	{
		addToOrder( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from order. 
	 * @param value the item to remove from order
	 */
	public void removeFromOrder(final SessionContext ctx, final AbstractOrder value)
	{
		ORDERHANDLER.removeValue( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from order. 
	 * @param value the item to remove from order
	 */
	public void removeFromOrder(final AbstractOrder value)
	{
		removeFromOrder( getSession().getSessionContext(), value );
	}
	
}
