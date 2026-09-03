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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEContactUsJobRole}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEContactUsJobRole extends GenericItem
{
	/** Qualifier of the <code>BHGEContactUsJobRole.role</code> attribute **/
	public static final String ROLE = "role";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(ROLE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUsJobRole.role</code> attribute.
	 * @return the role - Job Role
	 */
	public String getRole(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ROLE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEContactUsJobRole.role</code> attribute.
	 * @return the role - Job Role
	 */
	public String getRole()
	{
		return getRole( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUsJobRole.role</code> attribute. 
	 * @param value the role - Job Role
	 */
	public void setRole(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ROLE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEContactUsJobRole.role</code> attribute. 
	 * @param value the role - Job Role
	 */
	public void setRole(final String value)
	{
		setRole( getSession().getSessionContext(), value );
	}
	
}
