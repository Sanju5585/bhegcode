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
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem ProductLineTable}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedProductLineTable extends GenericItem
{
	/** Qualifier of the <code>ProductLineTable.productLine</code> attribute **/
	public static final String PRODUCTLINE = "productLine";
	/** Qualifier of the <code>ProductLineTable.productHierarchy</code> attribute **/
	public static final String PRODUCTHIERARCHY = "productHierarchy";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(PRODUCTLINE, AttributeMode.INITIAL);
		tmp.put(PRODUCTHIERARCHY, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductLineTable.productHierarchy</code> attribute.
	 * @return the productHierarchy
	 */
	public String getProductHierarchy(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PRODUCTHIERARCHY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductLineTable.productHierarchy</code> attribute.
	 * @return the productHierarchy
	 */
	public String getProductHierarchy()
	{
		return getProductHierarchy( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductLineTable.productHierarchy</code> attribute. 
	 * @param value the productHierarchy
	 */
	public void setProductHierarchy(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PRODUCTHIERARCHY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductLineTable.productHierarchy</code> attribute. 
	 * @param value the productHierarchy
	 */
	public void setProductHierarchy(final String value)
	{
		setProductHierarchy( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductLineTable.productLine</code> attribute.
	 * @return the productLine
	 */
	public String getProductLine(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PRODUCTLINE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductLineTable.productLine</code> attribute.
	 * @return the productLine
	 */
	public String getProductLine()
	{
		return getProductLine( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductLineTable.productLine</code> attribute. 
	 * @param value the productLine
	 */
	public void setProductLine(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PRODUCTLINE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductLineTable.productLine</code> attribute. 
	 * @param value the productLine
	 */
	public void setProductLine(final String value)
	{
		setProductLine( getSession().getSessionContext(), value );
	}
	
}
