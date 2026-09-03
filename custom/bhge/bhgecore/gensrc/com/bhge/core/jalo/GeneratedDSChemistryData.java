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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem DSChemistryData}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedDSChemistryData extends GenericItem
{
	/** Qualifier of the <code>DSChemistryData.artoms</code> attribute **/
	public static final String ARTOMS = "artoms";
	/** Qualifier of the <code>DSChemistryData.fabricationNumber</code> attribute **/
	public static final String FABRICATIONNUMBER = "fabricationNumber";
	/** Qualifier of the <code>DSChemistryData.part</code> attribute **/
	public static final String PART = "part";
	/** Qualifier of the <code>DSChemistryData.mabcCode</code> attribute **/
	public static final String MABCCODE = "mabcCode";
	/** Qualifier of the <code>DSChemistryData.expiry</code> attribute **/
	public static final String EXPIRY = "expiry";
	/** Qualifier of the <code>DSChemistryData.type</code> attribute **/
	public static final String TYPE = "type";
	/** Qualifier of the <code>DSChemistryData.shippingContent</code> attribute **/
	public static final String SHIPPINGCONTENT = "shippingContent";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(ARTOMS, AttributeMode.INITIAL);
		tmp.put(FABRICATIONNUMBER, AttributeMode.INITIAL);
		tmp.put(PART, AttributeMode.INITIAL);
		tmp.put(MABCCODE, AttributeMode.INITIAL);
		tmp.put(EXPIRY, AttributeMode.INITIAL);
		tmp.put(TYPE, AttributeMode.INITIAL);
		tmp.put(SHIPPINGCONTENT, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.artoms</code> attribute.
	 * @return the artoms
	 */
	public String getArtoms(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ARTOMS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.artoms</code> attribute.
	 * @return the artoms
	 */
	public String getArtoms()
	{
		return getArtoms( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.artoms</code> attribute. 
	 * @param value the artoms
	 */
	public void setArtoms(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ARTOMS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.artoms</code> attribute. 
	 * @param value the artoms
	 */
	public void setArtoms(final String value)
	{
		setArtoms( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.expiry</code> attribute.
	 * @return the expiry
	 */
	public String getExpiry(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EXPIRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.expiry</code> attribute.
	 * @return the expiry
	 */
	public String getExpiry()
	{
		return getExpiry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.expiry</code> attribute. 
	 * @param value the expiry
	 */
	public void setExpiry(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EXPIRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.expiry</code> attribute. 
	 * @param value the expiry
	 */
	public void setExpiry(final String value)
	{
		setExpiry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.fabricationNumber</code> attribute.
	 * @return the fabricationNumber
	 */
	public String getFabricationNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, FABRICATIONNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.fabricationNumber</code> attribute.
	 * @return the fabricationNumber
	 */
	public String getFabricationNumber()
	{
		return getFabricationNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.fabricationNumber</code> attribute. 
	 * @param value the fabricationNumber
	 */
	public void setFabricationNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, FABRICATIONNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.fabricationNumber</code> attribute. 
	 * @param value the fabricationNumber
	 */
	public void setFabricationNumber(final String value)
	{
		setFabricationNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.mabcCode</code> attribute.
	 * @return the mabcCode
	 */
	public String getMabcCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, MABCCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.mabcCode</code> attribute.
	 * @return the mabcCode
	 */
	public String getMabcCode()
	{
		return getMabcCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.mabcCode</code> attribute. 
	 * @param value the mabcCode
	 */
	public void setMabcCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, MABCCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.mabcCode</code> attribute. 
	 * @param value the mabcCode
	 */
	public void setMabcCode(final String value)
	{
		setMabcCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.part</code> attribute.
	 * @return the part
	 */
	public String getPart(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PART);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.part</code> attribute.
	 * @return the part
	 */
	public String getPart()
	{
		return getPart( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.part</code> attribute. 
	 * @param value the part
	 */
	public void setPart(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PART,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.part</code> attribute. 
	 * @param value the part
	 */
	public void setPart(final String value)
	{
		setPart( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.shippingContent</code> attribute.
	 * @return the shippingContent
	 */
	public String getShippingContent(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SHIPPINGCONTENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.shippingContent</code> attribute.
	 * @return the shippingContent
	 */
	public String getShippingContent()
	{
		return getShippingContent( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.shippingContent</code> attribute. 
	 * @param value the shippingContent
	 */
	public void setShippingContent(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SHIPPINGCONTENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.shippingContent</code> attribute. 
	 * @param value the shippingContent
	 */
	public void setShippingContent(final String value)
	{
		setShippingContent( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.type</code> attribute.
	 * @return the type
	 */
	public String getType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSChemistryData.type</code> attribute.
	 * @return the type
	 */
	public String getType()
	{
		return getType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.type</code> attribute. 
	 * @param value the type
	 */
	public void setType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSChemistryData.type</code> attribute. 
	 * @param value the type
	 */
	public void setType(final String value)
	{
		setType( getSession().getSessionContext(), value );
	}
	
}
