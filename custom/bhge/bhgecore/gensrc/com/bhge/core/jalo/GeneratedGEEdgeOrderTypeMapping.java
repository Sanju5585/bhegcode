/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem GEEdgeOrderTypeMapping}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeOrderTypeMapping extends GenericItem
{
	/** Qualifier of the <code>GEEdgeOrderTypeMapping.productType</code> attribute **/
	public static final String PRODUCTTYPE = "productType";
	/** Qualifier of the <code>GEEdgeOrderTypeMapping.orderType</code> attribute **/
	public static final String ORDERTYPE = "orderType";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(PRODUCTTYPE, AttributeMode.INITIAL);
		tmp.put(ORDERTYPE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeOrderTypeMapping.orderType</code> attribute.
	 * @return the orderType
	 */
	public EnumerationValue getOrderType(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, ORDERTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeOrderTypeMapping.orderType</code> attribute.
	 * @return the orderType
	 */
	public EnumerationValue getOrderType()
	{
		return getOrderType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeOrderTypeMapping.orderType</code> attribute. 
	 * @param value the orderType
	 */
	public void setOrderType(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, ORDERTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeOrderTypeMapping.orderType</code> attribute. 
	 * @param value the orderType
	 */
	public void setOrderType(final EnumerationValue value)
	{
		setOrderType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeOrderTypeMapping.productType</code> attribute.
	 * @return the productType
	 */
	public EnumerationValue getProductType(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, PRODUCTTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeOrderTypeMapping.productType</code> attribute.
	 * @return the productType
	 */
	public EnumerationValue getProductType()
	{
		return getProductType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeOrderTypeMapping.productType</code> attribute. 
	 * @param value the productType
	 */
	public void setProductType(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, PRODUCTTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeOrderTypeMapping.productType</code> attribute. 
	 * @param value the productType
	 */
	public void setProductType(final EnumerationValue value)
	{
		setProductType( getSession().getSessionContext(), value );
	}
	
}
