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
import de.hybris.platform.jalo.media.Media;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem ReturnPO}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedReturnPO extends GenericItem
{
	/** Qualifier of the <code>ReturnPO.poNumber</code> attribute **/
	public static final String PONUMBER = "poNumber";
	/** Qualifier of the <code>ReturnPO.endCustomerPo</code> attribute **/
	public static final String ENDCUSTOMERPO = "endCustomerPo";
	/** Qualifier of the <code>ReturnPO.poAttachments</code> attribute **/
	public static final String POATTACHMENTS = "poAttachments";
	/** Qualifier of the <code>ReturnPO.returnLocation</code> attribute **/
	public static final String RETURNLOCATION = "returnLocation";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(PONUMBER, AttributeMode.INITIAL);
		tmp.put(ENDCUSTOMERPO, AttributeMode.INITIAL);
		tmp.put(POATTACHMENTS, AttributeMode.INITIAL);
		tmp.put(RETURNLOCATION, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ReturnPO.endCustomerPo</code> attribute.
	 * @return the endCustomerPo
	 */
	public String getEndCustomerPo(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ENDCUSTOMERPO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ReturnPO.endCustomerPo</code> attribute.
	 * @return the endCustomerPo
	 */
	public String getEndCustomerPo()
	{
		return getEndCustomerPo( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ReturnPO.endCustomerPo</code> attribute. 
	 * @param value the endCustomerPo
	 */
	public void setEndCustomerPo(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ENDCUSTOMERPO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ReturnPO.endCustomerPo</code> attribute. 
	 * @param value the endCustomerPo
	 */
	public void setEndCustomerPo(final String value)
	{
		setEndCustomerPo( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ReturnPO.poAttachments</code> attribute.
	 * @return the poAttachments - The orders attachments
	 */
	public Collection<Media> getPoAttachments(final SessionContext ctx)
	{
		Collection<Media> coll = (Collection<Media>)getProperty( ctx, POATTACHMENTS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ReturnPO.poAttachments</code> attribute.
	 * @return the poAttachments - The orders attachments
	 */
	public Collection<Media> getPoAttachments()
	{
		return getPoAttachments( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ReturnPO.poAttachments</code> attribute. 
	 * @param value the poAttachments - The orders attachments
	 */
	public void setPoAttachments(final SessionContext ctx, final Collection<Media> value)
	{
		setProperty(ctx, POATTACHMENTS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ReturnPO.poAttachments</code> attribute. 
	 * @param value the poAttachments - The orders attachments
	 */
	public void setPoAttachments(final Collection<Media> value)
	{
		setPoAttachments( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ReturnPO.poNumber</code> attribute.
	 * @return the poNumber
	 */
	public String getPoNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PONUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ReturnPO.poNumber</code> attribute.
	 * @return the poNumber
	 */
	public String getPoNumber()
	{
		return getPoNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ReturnPO.poNumber</code> attribute. 
	 * @param value the poNumber
	 */
	public void setPoNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PONUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ReturnPO.poNumber</code> attribute. 
	 * @param value the poNumber
	 */
	public void setPoNumber(final String value)
	{
		setPoNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ReturnPO.returnLocation</code> attribute.
	 * @return the returnLocation
	 */
	public String getReturnLocation(final SessionContext ctx)
	{
		return (String)getProperty( ctx, RETURNLOCATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ReturnPO.returnLocation</code> attribute.
	 * @return the returnLocation
	 */
	public String getReturnLocation()
	{
		return getReturnLocation( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ReturnPO.returnLocation</code> attribute. 
	 * @param value the returnLocation
	 */
	public void setReturnLocation(final SessionContext ctx, final String value)
	{
		setProperty(ctx, RETURNLOCATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ReturnPO.returnLocation</code> attribute. 
	 * @param value the returnLocation
	 */
	public void setReturnLocation(final String value)
	{
		setReturnLocation( getSession().getSessionContext(), value );
	}
	
}
