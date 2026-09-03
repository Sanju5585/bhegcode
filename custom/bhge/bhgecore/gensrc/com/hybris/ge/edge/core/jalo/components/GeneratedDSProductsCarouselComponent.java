/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.hybris.ge.edge.core.jalo.components;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.cms2lib.components.ProductCarouselComponent;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.components.DSProductsCarouselComponent DSProductsCarouselComponent}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedDSProductsCarouselComponent extends ProductCarouselComponent
{
	/** Qualifier of the <code>DSProductsCarouselComponent.componentType</code> attribute **/
	public static final String COMPONENTTYPE = "componentType";
	/** Qualifier of the <code>DSProductsCarouselComponent.maxNumber</code> attribute **/
	public static final String MAXNUMBER = "maxNumber";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(ProductCarouselComponent.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(COMPONENTTYPE, AttributeMode.INITIAL);
		tmp.put(MAXNUMBER, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSProductsCarouselComponent.componentType</code> attribute.
	 * @return the componentType - Type of products
	 */
	public EnumerationValue getComponentType(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, COMPONENTTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSProductsCarouselComponent.componentType</code> attribute.
	 * @return the componentType - Type of products
	 */
	public EnumerationValue getComponentType()
	{
		return getComponentType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSProductsCarouselComponent.componentType</code> attribute. 
	 * @param value the componentType - Type of products
	 */
	public void setComponentType(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, COMPONENTTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSProductsCarouselComponent.componentType</code> attribute. 
	 * @param value the componentType - Type of products
	 */
	public void setComponentType(final EnumerationValue value)
	{
		setComponentType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSProductsCarouselComponent.maxNumber</code> attribute.
	 * @return the maxNumber - Maximum number of products to show
	 */
	public Integer getMaxNumber(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, MAXNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSProductsCarouselComponent.maxNumber</code> attribute.
	 * @return the maxNumber - Maximum number of products to show
	 */
	public Integer getMaxNumber()
	{
		return getMaxNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSProductsCarouselComponent.maxNumber</code> attribute. 
	 * @return the maxNumber - Maximum number of products to show
	 */
	public int getMaxNumberAsPrimitive(final SessionContext ctx)
	{
		Integer value = getMaxNumber( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSProductsCarouselComponent.maxNumber</code> attribute. 
	 * @return the maxNumber - Maximum number of products to show
	 */
	public int getMaxNumberAsPrimitive()
	{
		return getMaxNumberAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSProductsCarouselComponent.maxNumber</code> attribute. 
	 * @param value the maxNumber - Maximum number of products to show
	 */
	public void setMaxNumber(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, MAXNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSProductsCarouselComponent.maxNumber</code> attribute. 
	 * @param value the maxNumber - Maximum number of products to show
	 */
	public void setMaxNumber(final Integer value)
	{
		setMaxNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSProductsCarouselComponent.maxNumber</code> attribute. 
	 * @param value the maxNumber - Maximum number of products to show
	 */
	public void setMaxNumber(final SessionContext ctx, final int value)
	{
		setMaxNumber( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSProductsCarouselComponent.maxNumber</code> attribute. 
	 * @param value the maxNumber - Maximum number of products to show
	 */
	public void setMaxNumber(final int value)
	{
		setMaxNumber( getSession().getSessionContext(), value );
	}
	
}
