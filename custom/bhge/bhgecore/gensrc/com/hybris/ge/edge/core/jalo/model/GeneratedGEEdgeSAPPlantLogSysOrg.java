/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.hybris.ge.edge.core.jalo.model;

import com.bhge.core.constants.BhgeCoreConstants;
import com.hybris.ge.edge.core.jalo.type.GESalesAreaPlantFeatureMapping;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.sap.sapmodel.jalo.SAPPlantLogSysOrg;
import de.hybris.platform.util.BidirectionalOneToManyHandler;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.model.GEEdgeSAPPlantLogSysOrg GEEdgeSAPPlantLogSysOrg}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeSAPPlantLogSysOrg extends SAPPlantLogSysOrg
{
	/** Qualifier of the <code>GEEdgeSAPPlantLogSysOrg.shippingFee</code> attribute **/
	public static final String SHIPPINGFEE = "shippingFee";
	/** Qualifier of the <code>GEEdgeSAPPlantLogSysOrg.gESalesAreaPlantFeatureMapping</code> attribute **/
	public static final String GESALESAREAPLANTFEATUREMAPPING = "gESalesAreaPlantFeatureMapping";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n GESALESAREAPLANTFEATUREMAPPING's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedGEEdgeSAPPlantLogSysOrg> GESALESAREAPLANTFEATUREMAPPINGHANDLER = new BidirectionalOneToManyHandler<GeneratedGEEdgeSAPPlantLogSysOrg>(
	BhgeCoreConstants.TC.GEEDGESAPPLANTLOGSYSORG,
	false,
	"gESalesAreaPlantFeatureMapping",
	null,
	false,
	true,
	CollectionType.SET
	);
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(SAPPlantLogSysOrg.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(SHIPPINGFEE, AttributeMode.INITIAL);
		tmp.put(GESALESAREAPLANTFEATUREMAPPING, AttributeMode.INITIAL);
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
		GESALESAREAPLANTFEATUREMAPPINGHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSAPPlantLogSysOrg.gESalesAreaPlantFeatureMapping</code> attribute.
	 * @return the gESalesAreaPlantFeatureMapping
	 */
	public GESalesAreaPlantFeatureMapping getGESalesAreaPlantFeatureMapping(final SessionContext ctx)
	{
		return (GESalesAreaPlantFeatureMapping)getProperty( ctx, GESALESAREAPLANTFEATUREMAPPING);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSAPPlantLogSysOrg.gESalesAreaPlantFeatureMapping</code> attribute.
	 * @return the gESalesAreaPlantFeatureMapping
	 */
	public GESalesAreaPlantFeatureMapping getGESalesAreaPlantFeatureMapping()
	{
		return getGESalesAreaPlantFeatureMapping( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSAPPlantLogSysOrg.gESalesAreaPlantFeatureMapping</code> attribute. 
	 * @param value the gESalesAreaPlantFeatureMapping
	 */
	public void setGESalesAreaPlantFeatureMapping(final SessionContext ctx, final GESalesAreaPlantFeatureMapping value)
	{
		GESALESAREAPLANTFEATUREMAPPINGHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSAPPlantLogSysOrg.gESalesAreaPlantFeatureMapping</code> attribute. 
	 * @param value the gESalesAreaPlantFeatureMapping
	 */
	public void setGESalesAreaPlantFeatureMapping(final GESalesAreaPlantFeatureMapping value)
	{
		setGESalesAreaPlantFeatureMapping( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSAPPlantLogSysOrg.shippingFee</code> attribute.
	 * @return the shippingFee
	 */
	public Double getShippingFee(final SessionContext ctx)
	{
		return (Double)getProperty( ctx, SHIPPINGFEE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSAPPlantLogSysOrg.shippingFee</code> attribute.
	 * @return the shippingFee
	 */
	public Double getShippingFee()
	{
		return getShippingFee( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSAPPlantLogSysOrg.shippingFee</code> attribute. 
	 * @return the shippingFee
	 */
	public double getShippingFeeAsPrimitive(final SessionContext ctx)
	{
		Double value = getShippingFee( ctx );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeSAPPlantLogSysOrg.shippingFee</code> attribute. 
	 * @return the shippingFee
	 */
	public double getShippingFeeAsPrimitive()
	{
		return getShippingFeeAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSAPPlantLogSysOrg.shippingFee</code> attribute. 
	 * @param value the shippingFee
	 */
	public void setShippingFee(final SessionContext ctx, final Double value)
	{
		setProperty(ctx, SHIPPINGFEE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSAPPlantLogSysOrg.shippingFee</code> attribute. 
	 * @param value the shippingFee
	 */
	public void setShippingFee(final Double value)
	{
		setShippingFee( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSAPPlantLogSysOrg.shippingFee</code> attribute. 
	 * @param value the shippingFee
	 */
	public void setShippingFee(final SessionContext ctx, final double value)
	{
		setShippingFee( ctx,Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeSAPPlantLogSysOrg.shippingFee</code> attribute. 
	 * @param value the shippingFee
	 */
	public void setShippingFee(final double value)
	{
		setShippingFee( getSession().getSessionContext(), value );
	}
	
}
