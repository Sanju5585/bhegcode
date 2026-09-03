/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.cronjob.jalo.CronJob;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.cronjob.jalo.CronJob GEEdgeCacheCleanerJob}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeCacheCleanerJob extends CronJob
{
	/** Qualifier of the <code>GEEdgeCacheCleanerJob.CacheRegionName</code> attribute **/
	public static final String CACHEREGIONNAME = "CacheRegionName";
	/** Qualifier of the <code>GEEdgeCacheCleanerJob.CacheRegionNameExt</code> attribute **/
	public static final String CACHEREGIONNAMEEXT = "CacheRegionNameExt";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(CronJob.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(CACHEREGIONNAME, AttributeMode.INITIAL);
		tmp.put(CACHEREGIONNAMEEXT, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCacheCleanerJob.CacheRegionName</code> attribute.
	 * @return the CacheRegionName - Cache Region Name(s) to cleanup separated by blank
	 */
	public String getCacheRegionName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CACHEREGIONNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCacheCleanerJob.CacheRegionName</code> attribute.
	 * @return the CacheRegionName - Cache Region Name(s) to cleanup separated by blank
	 */
	public String getCacheRegionName()
	{
		return getCacheRegionName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCacheCleanerJob.CacheRegionName</code> attribute. 
	 * @param value the CacheRegionName - Cache Region Name(s) to cleanup separated by blank
	 */
	public void setCacheRegionName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CACHEREGIONNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCacheCleanerJob.CacheRegionName</code> attribute. 
	 * @param value the CacheRegionName - Cache Region Name(s) to cleanup separated by blank
	 */
	public void setCacheRegionName(final String value)
	{
		setCacheRegionName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCacheCleanerJob.CacheRegionNameExt</code> attribute.
	 * @return the CacheRegionNameExt - Extended Cache Region Name(s) to cleanup separated by blank
	 */
	public String getCacheRegionNameExt(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CACHEREGIONNAMEEXT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeCacheCleanerJob.CacheRegionNameExt</code> attribute.
	 * @return the CacheRegionNameExt - Extended Cache Region Name(s) to cleanup separated by blank
	 */
	public String getCacheRegionNameExt()
	{
		return getCacheRegionNameExt( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCacheCleanerJob.CacheRegionNameExt</code> attribute. 
	 * @param value the CacheRegionNameExt - Extended Cache Region Name(s) to cleanup separated by blank
	 */
	public void setCacheRegionNameExt(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CACHEREGIONNAMEEXT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeCacheCleanerJob.CacheRegionNameExt</code> attribute. 
	 * @param value the CacheRegionNameExt - Extended Cache Region Name(s) to cleanup separated by blank
	 */
	public void setCacheRegionNameExt(final String value)
	{
		setCacheRegionNameExt( getSession().getSessionContext(), value );
	}
	
}
