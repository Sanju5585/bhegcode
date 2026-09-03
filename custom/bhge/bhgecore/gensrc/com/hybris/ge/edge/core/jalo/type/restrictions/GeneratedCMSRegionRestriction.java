/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.hybris.ge.edge.core.jalo.type.restrictions;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.cms2.jalo.restrictions.AbstractRestriction;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.restrictions.CMSRegionRestriction CMSRegionRestriction}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedCMSRegionRestriction extends AbstractRestriction
{
	/** Qualifier of the <code>CMSRegionRestriction.regionId</code> attribute **/
	public static final String REGIONID = "regionId";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(AbstractRestriction.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(REGIONID, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CMSRegionRestriction.regionId</code> attribute.
	 * @return the regionId
	 */
	public String getRegionId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, REGIONID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CMSRegionRestriction.regionId</code> attribute.
	 * @return the regionId
	 */
	public String getRegionId()
	{
		return getRegionId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CMSRegionRestriction.regionId</code> attribute. 
	 * @param value the regionId
	 */
	public void setRegionId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, REGIONID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CMSRegionRestriction.regionId</code> attribute. 
	 * @param value the regionId
	 */
	public void setRegionId(final String value)
	{
		setRegionId( getSession().getSessionContext(), value );
	}
	
}
