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
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.BHGECreditCardPaymnentinfo BHGECreditCardPaymnentinfo}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGECreditCardPaymnentinfo extends GenericItem
{
	/** Qualifier of the <code>BHGECreditCardPaymnentinfo.type</code> attribute **/
	public static final String TYPE = "type";
	/** Qualifier of the <code>BHGECreditCardPaymnentinfo.token</code> attribute **/
	public static final String TOKEN = "token";
	/** Qualifier of the <code>BHGECreditCardPaymnentinfo.validTru</code> attribute **/
	public static final String VALIDTRU = "validTru";
	/** Qualifier of the <code>BHGECreditCardPaymnentinfo.name</code> attribute **/
	public static final String NAME = "name";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(TYPE, AttributeMode.INITIAL);
		tmp.put(TOKEN, AttributeMode.INITIAL);
		tmp.put(VALIDTRU, AttributeMode.INITIAL);
		tmp.put(NAME, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECreditCardPaymnentinfo.name</code> attribute.
	 * @return the name
	 */
	public String getName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECreditCardPaymnentinfo.name</code> attribute.
	 * @return the name
	 */
	public String getName()
	{
		return getName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECreditCardPaymnentinfo.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECreditCardPaymnentinfo.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final String value)
	{
		setName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECreditCardPaymnentinfo.token</code> attribute.
	 * @return the token
	 */
	public String getToken(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TOKEN);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECreditCardPaymnentinfo.token</code> attribute.
	 * @return the token
	 */
	public String getToken()
	{
		return getToken( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECreditCardPaymnentinfo.token</code> attribute. 
	 * @param value the token
	 */
	public void setToken(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TOKEN,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECreditCardPaymnentinfo.token</code> attribute. 
	 * @param value the token
	 */
	public void setToken(final String value)
	{
		setToken( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECreditCardPaymnentinfo.type</code> attribute.
	 * @return the type
	 */
	public String getType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECreditCardPaymnentinfo.type</code> attribute.
	 * @return the type
	 */
	public String getType()
	{
		return getType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECreditCardPaymnentinfo.type</code> attribute. 
	 * @param value the type
	 */
	public void setType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECreditCardPaymnentinfo.type</code> attribute. 
	 * @param value the type
	 */
	public void setType(final String value)
	{
		setType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECreditCardPaymnentinfo.validTru</code> attribute.
	 * @return the validTru
	 */
	public String getValidTru(final SessionContext ctx)
	{
		return (String)getProperty( ctx, VALIDTRU);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGECreditCardPaymnentinfo.validTru</code> attribute.
	 * @return the validTru
	 */
	public String getValidTru()
	{
		return getValidTru( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECreditCardPaymnentinfo.validTru</code> attribute. 
	 * @param value the validTru
	 */
	public void setValidTru(final SessionContext ctx, final String value)
	{
		setProperty(ctx, VALIDTRU,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGECreditCardPaymnentinfo.validTru</code> attribute. 
	 * @param value the validTru
	 */
	public void setValidTru(final String value)
	{
		setValidTru( getSession().getSessionContext(), value );
	}
	
}
