/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.cms2.jalo.contents.components.SimpleCMSComponent;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.bhge.core.jalo.ResourceComponent ResourceComponent}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedResourceComponent extends SimpleCMSComponent
{
	/** Qualifier of the <code>ResourceComponent.link</code> attribute **/
	public static final String LINK = "link";
	/** Qualifier of the <code>ResourceComponent.documentType</code> attribute **/
	public static final String DOCUMENTTYPE = "documentType";
	/** Qualifier of the <code>ResourceComponent.lastUpdated</code> attribute **/
	public static final String LASTUPDATED = "lastUpdated";
	/** Qualifier of the <code>ResourceComponent.size</code> attribute **/
	public static final String SIZE = "size";
	/** Qualifier of the <code>ResourceComponent.category</code> attribute **/
	public static final String CATEGORY = "category";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(SimpleCMSComponent.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(LINK, AttributeMode.INITIAL);
		tmp.put(DOCUMENTTYPE, AttributeMode.INITIAL);
		tmp.put(LASTUPDATED, AttributeMode.INITIAL);
		tmp.put(SIZE, AttributeMode.INITIAL);
		tmp.put(CATEGORY, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ResourceComponent.category</code> attribute.
	 * @return the category
	 */
	public String getCategory(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CATEGORY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ResourceComponent.category</code> attribute.
	 * @return the category
	 */
	public String getCategory()
	{
		return getCategory( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ResourceComponent.category</code> attribute. 
	 * @param value the category
	 */
	public void setCategory(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CATEGORY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ResourceComponent.category</code> attribute. 
	 * @param value the category
	 */
	public void setCategory(final String value)
	{
		setCategory( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ResourceComponent.documentType</code> attribute.
	 * @return the documentType
	 */
	public String getDocumentType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DOCUMENTTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ResourceComponent.documentType</code> attribute.
	 * @return the documentType
	 */
	public String getDocumentType()
	{
		return getDocumentType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ResourceComponent.documentType</code> attribute. 
	 * @param value the documentType
	 */
	public void setDocumentType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DOCUMENTTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ResourceComponent.documentType</code> attribute. 
	 * @param value the documentType
	 */
	public void setDocumentType(final String value)
	{
		setDocumentType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ResourceComponent.lastUpdated</code> attribute.
	 * @return the lastUpdated
	 */
	public Date getLastUpdated(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, LASTUPDATED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ResourceComponent.lastUpdated</code> attribute.
	 * @return the lastUpdated
	 */
	public Date getLastUpdated()
	{
		return getLastUpdated( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ResourceComponent.lastUpdated</code> attribute. 
	 * @param value the lastUpdated
	 */
	public void setLastUpdated(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, LASTUPDATED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ResourceComponent.lastUpdated</code> attribute. 
	 * @param value the lastUpdated
	 */
	public void setLastUpdated(final Date value)
	{
		setLastUpdated( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ResourceComponent.link</code> attribute.
	 * @return the link
	 */
	public String getLink(final SessionContext ctx)
	{
		return (String)getProperty( ctx, LINK);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ResourceComponent.link</code> attribute.
	 * @return the link
	 */
	public String getLink()
	{
		return getLink( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ResourceComponent.link</code> attribute. 
	 * @param value the link
	 */
	public void setLink(final SessionContext ctx, final String value)
	{
		setProperty(ctx, LINK,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ResourceComponent.link</code> attribute. 
	 * @param value the link
	 */
	public void setLink(final String value)
	{
		setLink( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ResourceComponent.size</code> attribute.
	 * @return the size
	 */
	public String getSize(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SIZE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ResourceComponent.size</code> attribute.
	 * @return the size
	 */
	public String getSize()
	{
		return getSize( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ResourceComponent.size</code> attribute. 
	 * @param value the size
	 */
	public void setSize(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SIZE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ResourceComponent.size</code> attribute. 
	 * @param value the size
	 */
	public void setSize(final String value)
	{
		setSize( getSession().getSessionContext(), value );
	}
	
}
