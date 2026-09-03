/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo.List;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.bhge.core.jalo.List.ListOfPortals ListOfPortals}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedListOfPortals extends GenericItem
{
	/** Qualifier of the <code>ListOfPortals.url</code> attribute **/
	public static final String URL = "url";
	/** Qualifier of the <code>ListOfPortals.siteName</code> attribute **/
	public static final String SITENAME = "siteName";
	/** Qualifier of the <code>ListOfPortals.productLine</code> attribute **/
	public static final String PRODUCTLINE = "productLine";
	/** Qualifier of the <code>ListOfPortals.description</code> attribute **/
	public static final String DESCRIPTION = "description";
	/** Qualifier of the <code>ListOfPortals.type</code> attribute **/
	public static final String TYPE = "type";
	/** Qualifier of the <code>ListOfPortals.loginRequired</code> attribute **/
	public static final String LOGINREQUIRED = "loginRequired";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(URL, AttributeMode.INITIAL);
		tmp.put(SITENAME, AttributeMode.INITIAL);
		tmp.put(PRODUCTLINE, AttributeMode.INITIAL);
		tmp.put(DESCRIPTION, AttributeMode.INITIAL);
		tmp.put(TYPE, AttributeMode.INITIAL);
		tmp.put(LOGINREQUIRED, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ListOfPortals.description</code> attribute.
	 * @return the description
	 */
	public String getDescription(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ListOfPortals.description</code> attribute.
	 * @return the description
	 */
	public String getDescription()
	{
		return getDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ListOfPortals.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ListOfPortals.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final String value)
	{
		setDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ListOfPortals.loginRequired</code> attribute.
	 * @return the loginRequired
	 */
	public String getLoginRequired(final SessionContext ctx)
	{
		return (String)getProperty( ctx, LOGINREQUIRED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ListOfPortals.loginRequired</code> attribute.
	 * @return the loginRequired
	 */
	public String getLoginRequired()
	{
		return getLoginRequired( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ListOfPortals.loginRequired</code> attribute. 
	 * @param value the loginRequired
	 */
	public void setLoginRequired(final SessionContext ctx, final String value)
	{
		setProperty(ctx, LOGINREQUIRED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ListOfPortals.loginRequired</code> attribute. 
	 * @param value the loginRequired
	 */
	public void setLoginRequired(final String value)
	{
		setLoginRequired( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ListOfPortals.productLine</code> attribute.
	 * @return the productLine
	 */
	public String getProductLine(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PRODUCTLINE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ListOfPortals.productLine</code> attribute.
	 * @return the productLine
	 */
	public String getProductLine()
	{
		return getProductLine( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ListOfPortals.productLine</code> attribute. 
	 * @param value the productLine
	 */
	public void setProductLine(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PRODUCTLINE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ListOfPortals.productLine</code> attribute. 
	 * @param value the productLine
	 */
	public void setProductLine(final String value)
	{
		setProductLine( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ListOfPortals.siteName</code> attribute.
	 * @return the siteName
	 */
	public String getSiteName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SITENAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ListOfPortals.siteName</code> attribute.
	 * @return the siteName
	 */
	public String getSiteName()
	{
		return getSiteName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ListOfPortals.siteName</code> attribute. 
	 * @param value the siteName
	 */
	public void setSiteName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SITENAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ListOfPortals.siteName</code> attribute. 
	 * @param value the siteName
	 */
	public void setSiteName(final String value)
	{
		setSiteName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ListOfPortals.type</code> attribute.
	 * @return the type
	 */
	public String getType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ListOfPortals.type</code> attribute.
	 * @return the type
	 */
	public String getType()
	{
		return getType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ListOfPortals.type</code> attribute. 
	 * @param value the type
	 */
	public void setType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ListOfPortals.type</code> attribute. 
	 * @param value the type
	 */
	public void setType(final String value)
	{
		setType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ListOfPortals.url</code> attribute.
	 * @return the url
	 */
	public String getUrl(final SessionContext ctx)
	{
		return (String)getProperty( ctx, URL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ListOfPortals.url</code> attribute.
	 * @return the url
	 */
	public String getUrl()
	{
		return getUrl( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ListOfPortals.url</code> attribute. 
	 * @param value the url
	 */
	public void setUrl(final SessionContext ctx, final String value)
	{
		setProperty(ctx, URL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ListOfPortals.url</code> attribute. 
	 * @param value the url
	 */
	public void setUrl(final String value)
	{
		setUrl( getSession().getSessionContext(), value );
	}
	
}
