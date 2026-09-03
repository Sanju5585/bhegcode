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
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.GEEdgeAvailabilityDetail GEEdgeAvailabilityDetail}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeAvailabilityDetail extends GenericItem
{
	/** Qualifier of the <code>GEEdgeAvailabilityDetail.plant</code> attribute **/
	public static final String PLANT = "plant";
	/** Qualifier of the <code>GEEdgeAvailabilityDetail.plantName</code> attribute **/
	public static final String PLANTNAME = "plantName";
	/** Qualifier of the <code>GEEdgeAvailabilityDetail.committedQuantity</code> attribute **/
	public static final String COMMITTEDQUANTITY = "committedQuantity";
	/** Qualifier of the <code>GEEdgeAvailabilityDetail.committedDate</code> attribute **/
	public static final String COMMITTEDDATE = "committedDate";
	/** Qualifier of the <code>GEEdgeAvailabilityDetail.actualStockQty</code> attribute **/
	public static final String ACTUALSTOCKQTY = "actualStockQty";
	/** Qualifier of the <code>GEEdgeAvailabilityDetail.isDefaultPlant</code> attribute **/
	public static final String ISDEFAULTPLANT = "isDefaultPlant";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(PLANT, AttributeMode.INITIAL);
		tmp.put(PLANTNAME, AttributeMode.INITIAL);
		tmp.put(COMMITTEDQUANTITY, AttributeMode.INITIAL);
		tmp.put(COMMITTEDDATE, AttributeMode.INITIAL);
		tmp.put(ACTUALSTOCKQTY, AttributeMode.INITIAL);
		tmp.put(ISDEFAULTPLANT, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.actualStockQty</code> attribute.
	 * @return the actualStockQty - Actual Stock available in Inventory
	 */
	public String getActualStockQty(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ACTUALSTOCKQTY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.actualStockQty</code> attribute.
	 * @return the actualStockQty - Actual Stock available in Inventory
	 */
	public String getActualStockQty()
	{
		return getActualStockQty( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.actualStockQty</code> attribute. 
	 * @param value the actualStockQty - Actual Stock available in Inventory
	 */
	public void setActualStockQty(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ACTUALSTOCKQTY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.actualStockQty</code> attribute. 
	 * @param value the actualStockQty - Actual Stock available in Inventory
	 */
	public void setActualStockQty(final String value)
	{
		setActualStockQty( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.committedDate</code> attribute.
	 * @return the committedDate - Committed Date
	 */
	public String getCommittedDate(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COMMITTEDDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.committedDate</code> attribute.
	 * @return the committedDate - Committed Date
	 */
	public String getCommittedDate()
	{
		return getCommittedDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.committedDate</code> attribute. 
	 * @param value the committedDate - Committed Date
	 */
	public void setCommittedDate(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COMMITTEDDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.committedDate</code> attribute. 
	 * @param value the committedDate - Committed Date
	 */
	public void setCommittedDate(final String value)
	{
		setCommittedDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.committedQuantity</code> attribute.
	 * @return the committedQuantity - Committed Quantity
	 */
	public String getCommittedQuantity(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COMMITTEDQUANTITY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.committedQuantity</code> attribute.
	 * @return the committedQuantity - Committed Quantity
	 */
	public String getCommittedQuantity()
	{
		return getCommittedQuantity( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.committedQuantity</code> attribute. 
	 * @param value the committedQuantity - Committed Quantity
	 */
	public void setCommittedQuantity(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COMMITTEDQUANTITY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.committedQuantity</code> attribute. 
	 * @param value the committedQuantity - Committed Quantity
	 */
	public void setCommittedQuantity(final String value)
	{
		setCommittedQuantity( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.isDefaultPlant</code> attribute.
	 * @return the isDefaultPlant - Flag to identify the Default plant for the Cart item
	 */
	public Boolean isIsDefaultPlant(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISDEFAULTPLANT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.isDefaultPlant</code> attribute.
	 * @return the isDefaultPlant - Flag to identify the Default plant for the Cart item
	 */
	public Boolean isIsDefaultPlant()
	{
		return isIsDefaultPlant( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.isDefaultPlant</code> attribute. 
	 * @return the isDefaultPlant - Flag to identify the Default plant for the Cart item
	 */
	public boolean isIsDefaultPlantAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsDefaultPlant( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.isDefaultPlant</code> attribute. 
	 * @return the isDefaultPlant - Flag to identify the Default plant for the Cart item
	 */
	public boolean isIsDefaultPlantAsPrimitive()
	{
		return isIsDefaultPlantAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.isDefaultPlant</code> attribute. 
	 * @param value the isDefaultPlant - Flag to identify the Default plant for the Cart item
	 */
	public void setIsDefaultPlant(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISDEFAULTPLANT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.isDefaultPlant</code> attribute. 
	 * @param value the isDefaultPlant - Flag to identify the Default plant for the Cart item
	 */
	public void setIsDefaultPlant(final Boolean value)
	{
		setIsDefaultPlant( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.isDefaultPlant</code> attribute. 
	 * @param value the isDefaultPlant - Flag to identify the Default plant for the Cart item
	 */
	public void setIsDefaultPlant(final SessionContext ctx, final boolean value)
	{
		setIsDefaultPlant( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.isDefaultPlant</code> attribute. 
	 * @param value the isDefaultPlant - Flag to identify the Default plant for the Cart item
	 */
	public void setIsDefaultPlant(final boolean value)
	{
		setIsDefaultPlant( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.plant</code> attribute.
	 * @return the plant - Plant Number
	 */
	public String getPlant(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PLANT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.plant</code> attribute.
	 * @return the plant - Plant Number
	 */
	public String getPlant()
	{
		return getPlant( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.plant</code> attribute. 
	 * @param value the plant - Plant Number
	 */
	public void setPlant(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PLANT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.plant</code> attribute. 
	 * @param value the plant - Plant Number
	 */
	public void setPlant(final String value)
	{
		setPlant( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.plantName</code> attribute.
	 * @return the plantName - Plant Name
	 */
	public String getPlantName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PLANTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeAvailabilityDetail.plantName</code> attribute.
	 * @return the plantName - Plant Name
	 */
	public String getPlantName()
	{
		return getPlantName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.plantName</code> attribute. 
	 * @param value the plantName - Plant Name
	 */
	public void setPlantName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PLANTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeAvailabilityDetail.plantName</code> attribute. 
	 * @param value the plantName - Plant Name
	 */
	public void setPlantName(final String value)
	{
		setPlantName( getSession().getSessionContext(), value );
	}
	
}
