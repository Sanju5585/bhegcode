/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.hybris.ge.edge.core.jalo.type;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.BHGECustomerClassification BHGECustomerClassification}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGECustomerClassification extends GenericItem
{
	/** Qualifier of the <code>BHGECustomerClassification.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>BHGECustomerClassification.description</code> attribute **/
	public static final String DESCRIPTION = "description";
	/** Qualifier of the <code>BHGECustomerClassification.customerType</code> attribute **/
	public static final String CUSTOMERTYPE = "customerType";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CODE, AttributeMode.INITIAL);
		tmp.put(DESCRIPTION, AttributeMode.INITIAL);
		tmp.put(CUSTOMERTYPE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECustomerClassification.code</code> attribute.
	 * @return the code
	 */
	public String getCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECustomerClassification.code</code> attribute.
	 * @return the code
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECustomerClassification.code</code> attribute. 
	 * @param value the code
	 */
	protected void setCode(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		// initial-only attribute: make sure this attribute can be set during item creation only
		if ( ctx.getAttribute( "core.types.creation.initial") != Boolean.TRUE )
		{
			throw new JaloInvalidParameterException( "attribute '"+CODE+"' is not changeable", 0 );
		}
		setProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECustomerClassification.code</code> attribute. 
	 * @param value the code
	 */
	protected void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECustomerClassification.customerType</code> attribute.
	 * @return the customerType
	 */
	public String getCustomerType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CUSTOMERTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECustomerClassification.customerType</code> attribute.
	 * @return the customerType
	 */
	public String getCustomerType()
	{
		return getCustomerType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECustomerClassification.customerType</code> attribute. 
	 * @param value the customerType
	 */
	public void setCustomerType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CUSTOMERTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECustomerClassification.customerType</code> attribute. 
	 * @param value the customerType
	 */
	public void setCustomerType(final String value)
	{
		setCustomerType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECustomerClassification.description</code> attribute.
	 * @return the description
	 */
	public String getDescription(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECustomerClassification.description</code> attribute.
	 * @return the description
	 */
	public String getDescription()
	{
		return getDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECustomerClassification.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECustomerClassification.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final String value)
	{
		setDescription( getSession().getSessionContext(), value );
	}
	
}
