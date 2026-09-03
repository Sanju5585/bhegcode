/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.order.AbstractOrderEntry;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.util.BidirectionalOneToManyHandler;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGERmaEquipSerialNumber}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGERmaEquipSerialNumber extends GenericItem
{
	/** Qualifier of the <code>BHGERmaEquipSerialNumber.serialNumber</code> attribute **/
	public static final String SERIALNUMBER = "serialNumber";
	/** Qualifier of the <code>BHGERmaEquipSerialNumber.SapStatus</code> attribute **/
	public static final String SAPSTATUS = "SapStatus";
	/** Qualifier of the <code>BHGERmaEquipSerialNumber.SapMessage</code> attribute **/
	public static final String SAPMESSAGE = "SapMessage";
	/** Qualifier of the <code>BHGERmaEquipSerialNumber.rmaForm</code> attribute **/
	public static final String RMAFORM = "rmaForm";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n RMAFORM's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedBHGERmaEquipSerialNumber> RMAFORMHANDLER = new BidirectionalOneToManyHandler<GeneratedBHGERmaEquipSerialNumber>(
	BhgeCoreConstants.TC.BHGERMAEQUIPSERIALNUMBER,
	false,
	"rmaForm",
	null,
	false,
	true,
	CollectionType.COLLECTION
	);
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(SERIALNUMBER, AttributeMode.INITIAL);
		tmp.put(SAPSTATUS, AttributeMode.INITIAL);
		tmp.put(SAPMESSAGE, AttributeMode.INITIAL);
		tmp.put(RMAFORM, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes) throws JaloBusinessException
	{
		RMAFORMHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERmaEquipSerialNumber.rmaForm</code> attribute.
	 * @return the rmaForm
	 */
	public AbstractOrderEntry getRmaForm(final SessionContext ctx)
	{
		return (AbstractOrderEntry)getProperty( ctx, RMAFORM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERmaEquipSerialNumber.rmaForm</code> attribute.
	 * @return the rmaForm
	 */
	public AbstractOrderEntry getRmaForm()
	{
		return getRmaForm( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERmaEquipSerialNumber.rmaForm</code> attribute. 
	 * @param value the rmaForm
	 */
	public void setRmaForm(final SessionContext ctx, final AbstractOrderEntry value)
	{
		RMAFORMHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERmaEquipSerialNumber.rmaForm</code> attribute. 
	 * @param value the rmaForm
	 */
	public void setRmaForm(final AbstractOrderEntry value)
	{
		setRmaForm( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERmaEquipSerialNumber.SapMessage</code> attribute.
	 * @return the SapMessage - Sap Message
	 */
	public String getSapMessage(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SAPMESSAGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERmaEquipSerialNumber.SapMessage</code> attribute.
	 * @return the SapMessage - Sap Message
	 */
	public String getSapMessage()
	{
		return getSapMessage( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERmaEquipSerialNumber.SapMessage</code> attribute. 
	 * @param value the SapMessage - Sap Message
	 */
	public void setSapMessage(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SAPMESSAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERmaEquipSerialNumber.SapMessage</code> attribute. 
	 * @param value the SapMessage - Sap Message
	 */
	public void setSapMessage(final String value)
	{
		setSapMessage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERmaEquipSerialNumber.SapStatus</code> attribute.
	 * @return the SapStatus - Sap Status
	 */
	public String getSapStatus(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SAPSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERmaEquipSerialNumber.SapStatus</code> attribute.
	 * @return the SapStatus - Sap Status
	 */
	public String getSapStatus()
	{
		return getSapStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERmaEquipSerialNumber.SapStatus</code> attribute. 
	 * @param value the SapStatus - Sap Status
	 */
	public void setSapStatus(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SAPSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERmaEquipSerialNumber.SapStatus</code> attribute. 
	 * @param value the SapStatus - Sap Status
	 */
	public void setSapStatus(final String value)
	{
		setSapStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERmaEquipSerialNumber.serialNumber</code> attribute.
	 * @return the serialNumber - Material Number
	 */
	public String getSerialNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SERIALNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERmaEquipSerialNumber.serialNumber</code> attribute.
	 * @return the serialNumber - Material Number
	 */
	public String getSerialNumber()
	{
		return getSerialNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERmaEquipSerialNumber.serialNumber</code> attribute. 
	 * @param value the serialNumber - Material Number
	 */
	public void setSerialNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SERIALNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERmaEquipSerialNumber.serialNumber</code> attribute. 
	 * @param value the serialNumber - Material Number
	 */
	public void setSerialNumber(final String value)
	{
		setSerialNumber( getSession().getSessionContext(), value );
	}
	
}
