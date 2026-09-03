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
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem ExcludeProductCharacterisctic}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedExcludeProductCharacterisctic extends GenericItem
{
	/** Qualifier of the <code>ExcludeProductCharacterisctic.productCode</code> attribute **/
	public static final String PRODUCTCODE = "productCode";
	/** Qualifier of the <code>ExcludeProductCharacterisctic.cheracteristicCodes</code> attribute **/
	public static final String CHERACTERISTICCODES = "cheracteristicCodes";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(PRODUCTCODE, AttributeMode.INITIAL);
		tmp.put(CHERACTERISTICCODES, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ExcludeProductCharacterisctic.cheracteristicCodes</code> attribute.
	 * @return the cheracteristicCodes
	 */
	public List<String> getCheracteristicCodes(final SessionContext ctx)
	{
		List<String> coll = (List<String>)getProperty( ctx, CHERACTERISTICCODES);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ExcludeProductCharacterisctic.cheracteristicCodes</code> attribute.
	 * @return the cheracteristicCodes
	 */
	public List<String> getCheracteristicCodes()
	{
		return getCheracteristicCodes( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ExcludeProductCharacterisctic.cheracteristicCodes</code> attribute. 
	 * @param value the cheracteristicCodes
	 */
	public void setCheracteristicCodes(final SessionContext ctx, final List<String> value)
	{
		setProperty(ctx, CHERACTERISTICCODES,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ExcludeProductCharacterisctic.cheracteristicCodes</code> attribute. 
	 * @param value the cheracteristicCodes
	 */
	public void setCheracteristicCodes(final List<String> value)
	{
		setCheracteristicCodes( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ExcludeProductCharacterisctic.productCode</code> attribute.
	 * @return the productCode
	 */
	public String getProductCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PRODUCTCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ExcludeProductCharacterisctic.productCode</code> attribute.
	 * @return the productCode
	 */
	public String getProductCode()
	{
		return getProductCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ExcludeProductCharacterisctic.productCode</code> attribute. 
	 * @param value the productCode
	 */
	public void setProductCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PRODUCTCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ExcludeProductCharacterisctic.productCode</code> attribute. 
	 * @param value the productCode
	 */
	public void setProductCode(final String value)
	{
		setProductCode( getSession().getSessionContext(), value );
	}
	
}
