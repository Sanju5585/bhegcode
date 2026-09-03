/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.hybris.ge.edge.core.jalo.components;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.cms2.jalo.contents.components.SimpleCMSComponent;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.components.GEEdgeContactHelpDropDownComponent GEEdgeContactHelpDDComponent}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeContactHelpDropDownComponent extends SimpleCMSComponent
{
	/** Qualifier of the <code>GEEdgeContactHelpDDComponent.helpValues</code> attribute **/
	public static final String HELPVALUES = "helpValues";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(SimpleCMSComponent.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(HELPVALUES, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeContactHelpDDComponent.helpValues</code> attribute.
	 * @return the helpValues - The help value
	 */
	public List<String> getHelpValues(final SessionContext ctx)
	{
		List<String> coll = (List<String>)getProperty( ctx, HELPVALUES);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeContactHelpDDComponent.helpValues</code> attribute.
	 * @return the helpValues - The help value
	 */
	public List<String> getHelpValues()
	{
		return getHelpValues( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeContactHelpDDComponent.helpValues</code> attribute. 
	 * @param value the helpValues - The help value
	 */
	public void setHelpValues(final SessionContext ctx, final List<String> value)
	{
		setProperty(ctx, HELPVALUES,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeContactHelpDDComponent.helpValues</code> attribute. 
	 * @param value the helpValues - The help value
	 */
	public void setHelpValues(final List<String> value)
	{
		setHelpValues( getSession().getSessionContext(), value );
	}
	
}
