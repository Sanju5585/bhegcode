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
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.GEEdgeServiceProvider GEEdgeServiceProvider}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeServiceProvider extends GenericItem
{
	/** Qualifier of the <code>GEEdgeServiceProvider.url</code> attribute **/
	public static final String URL = "url";
	/** Qualifier of the <code>GEEdgeServiceProvider.serviceProvider</code> attribute **/
	public static final String SERVICEPROVIDER = "serviceProvider";
	/** Qualifier of the <code>GEEdgeServiceProvider.serviceProviderName</code> attribute **/
	public static final String SERVICEPROVIDERNAME = "serviceProviderName";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(URL, AttributeMode.INITIAL);
		tmp.put(SERVICEPROVIDER, AttributeMode.INITIAL);
		tmp.put(SERVICEPROVIDERNAME, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeServiceProvider.serviceProvider</code> attribute.
	 * @return the serviceProvider
	 */
	public String getServiceProvider(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SERVICEPROVIDER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeServiceProvider.serviceProvider</code> attribute.
	 * @return the serviceProvider
	 */
	public String getServiceProvider()
	{
		return getServiceProvider( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeServiceProvider.serviceProvider</code> attribute. 
	 * @param value the serviceProvider
	 */
	public void setServiceProvider(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SERVICEPROVIDER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeServiceProvider.serviceProvider</code> attribute. 
	 * @param value the serviceProvider
	 */
	public void setServiceProvider(final String value)
	{
		setServiceProvider( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeServiceProvider.serviceProviderName</code> attribute.
	 * @return the serviceProviderName
	 */
	public String getServiceProviderName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SERVICEPROVIDERNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeServiceProvider.serviceProviderName</code> attribute.
	 * @return the serviceProviderName
	 */
	public String getServiceProviderName()
	{
		return getServiceProviderName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeServiceProvider.serviceProviderName</code> attribute. 
	 * @param value the serviceProviderName
	 */
	public void setServiceProviderName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SERVICEPROVIDERNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeServiceProvider.serviceProviderName</code> attribute. 
	 * @param value the serviceProviderName
	 */
	public void setServiceProviderName(final String value)
	{
		setServiceProviderName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeServiceProvider.url</code> attribute.
	 * @return the url
	 */
	public String getUrl(final SessionContext ctx)
	{
		return (String)getProperty( ctx, URL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeServiceProvider.url</code> attribute.
	 * @return the url
	 */
	public String getUrl()
	{
		return getUrl( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeServiceProvider.url</code> attribute. 
	 * @param value the url
	 */
	public void setUrl(final SessionContext ctx, final String value)
	{
		setProperty(ctx, URL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeServiceProvider.url</code> attribute. 
	 * @param value the url
	 */
	public void setUrl(final String value)
	{
		setUrl( getSession().getSessionContext(), value );
	}
	
}
