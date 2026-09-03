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
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.GEEdgeStockDetail GEEdgeStockDetail}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeStockDetail extends GenericItem
{
	/** Qualifier of the <code>GEEdgeStockDetail.plant</code> attribute **/
	public static final String PLANT = "plant";
	/** Qualifier of the <code>GEEdgeStockDetail.plantName</code> attribute **/
	public static final String PLANTNAME = "plantName";
	/** Qualifier of the <code>GEEdgeStockDetail.actualStockQty</code> attribute **/
	public static final String ACTUALSTOCKQTY = "actualStockQty";
	/** Qualifier of the <code>GEEdgeStockDetail.material</code> attribute **/
	public static final String MATERIAL = "material";
	/** Qualifier of the <code>GEEdgeStockDetail.leadtime</code> attribute **/
	public static final String LEADTIME = "leadtime";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(PLANT, AttributeMode.INITIAL);
		tmp.put(PLANTNAME, AttributeMode.INITIAL);
		tmp.put(ACTUALSTOCKQTY, AttributeMode.INITIAL);
		tmp.put(MATERIAL, AttributeMode.INITIAL);
		tmp.put(LEADTIME, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeStockDetail.actualStockQty</code> attribute.
	 * @return the actualStockQty - Actual Stock available in Inventory
	 */
	public String getActualStockQty(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ACTUALSTOCKQTY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeStockDetail.actualStockQty</code> attribute.
	 * @return the actualStockQty - Actual Stock available in Inventory
	 */
	public String getActualStockQty()
	{
		return getActualStockQty( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeStockDetail.actualStockQty</code> attribute. 
	 * @param value the actualStockQty - Actual Stock available in Inventory
	 */
	public void setActualStockQty(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ACTUALSTOCKQTY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeStockDetail.actualStockQty</code> attribute. 
	 * @param value the actualStockQty - Actual Stock available in Inventory
	 */
	public void setActualStockQty(final String value)
	{
		setActualStockQty( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeStockDetail.leadtime</code> attribute.
	 * @return the leadtime - leadtime
	 */
	public Integer getLeadtime(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, LEADTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeStockDetail.leadtime</code> attribute.
	 * @return the leadtime - leadtime
	 */
	public Integer getLeadtime()
	{
		return getLeadtime( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeStockDetail.leadtime</code> attribute. 
	 * @return the leadtime - leadtime
	 */
	public int getLeadtimeAsPrimitive(final SessionContext ctx)
	{
		Integer value = getLeadtime( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeStockDetail.leadtime</code> attribute. 
	 * @return the leadtime - leadtime
	 */
	public int getLeadtimeAsPrimitive()
	{
		return getLeadtimeAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeStockDetail.leadtime</code> attribute. 
	 * @param value the leadtime - leadtime
	 */
	public void setLeadtime(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, LEADTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeStockDetail.leadtime</code> attribute. 
	 * @param value the leadtime - leadtime
	 */
	public void setLeadtime(final Integer value)
	{
		setLeadtime( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeStockDetail.leadtime</code> attribute. 
	 * @param value the leadtime - leadtime
	 */
	public void setLeadtime(final SessionContext ctx, final int value)
	{
		setLeadtime( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeStockDetail.leadtime</code> attribute. 
	 * @param value the leadtime - leadtime
	 */
	public void setLeadtime(final int value)
	{
		setLeadtime( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeStockDetail.material</code> attribute.
	 * @return the material - Material Number
	 */
	public String getMaterial(final SessionContext ctx)
	{
		return (String)getProperty( ctx, MATERIAL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeStockDetail.material</code> attribute.
	 * @return the material - Material Number
	 */
	public String getMaterial()
	{
		return getMaterial( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeStockDetail.material</code> attribute. 
	 * @param value the material - Material Number
	 */
	public void setMaterial(final SessionContext ctx, final String value)
	{
		setProperty(ctx, MATERIAL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeStockDetail.material</code> attribute. 
	 * @param value the material - Material Number
	 */
	public void setMaterial(final String value)
	{
		setMaterial( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeStockDetail.plant</code> attribute.
	 * @return the plant - Plant Number
	 */
	public String getPlant(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PLANT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeStockDetail.plant</code> attribute.
	 * @return the plant - Plant Number
	 */
	public String getPlant()
	{
		return getPlant( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeStockDetail.plant</code> attribute. 
	 * @param value the plant - Plant Number
	 */
	public void setPlant(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PLANT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeStockDetail.plant</code> attribute. 
	 * @param value the plant - Plant Number
	 */
	public void setPlant(final String value)
	{
		setPlant( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeStockDetail.plantName</code> attribute.
	 * @return the plantName - Plant Name
	 */
	public String getPlantName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PLANTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeStockDetail.plantName</code> attribute.
	 * @return the plantName - Plant Name
	 */
	public String getPlantName()
	{
		return getPlantName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeStockDetail.plantName</code> attribute. 
	 * @param value the plantName - Plant Name
	 */
	public void setPlantName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PLANTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeStockDetail.plantName</code> attribute. 
	 * @param value the plantName - Plant Name
	 */
	public void setPlantName(final String value)
	{
		setPlantName( getSession().getSessionContext(), value );
	}
	
}
