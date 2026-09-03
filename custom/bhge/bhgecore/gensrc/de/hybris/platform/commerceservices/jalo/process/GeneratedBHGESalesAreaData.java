/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 *  
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.commerceservices.jalo.process;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.catalog.jalo.CatalogVersion;
import de.hybris.platform.core.model.GEEdgeProduct;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.util.Utilities;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.commerceservices.jalo.process.BHGESalesAreaData BHGESalesAreaData}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGESalesAreaData extends GenericItem
{
	/** Qualifier of the <code>BHGESalesAreaData.uid</code> attribute **/
	public static final String UID = "uid";
	/** Qualifier of the <code>BHGESalesAreaData.catalogVersion</code> attribute **/
	public static final String CATALOGVERSION = "catalogVersion";
	/** Qualifier of the <code>BHGESalesAreaData.salesOrganization</code> attribute **/
	public static final String SALESORGANIZATION = "salesOrganization";
	/** Qualifier of the <code>BHGESalesAreaData.distributionChannel</code> attribute **/
	public static final String DISTRIBUTIONCHANNEL = "distributionChannel";
	/** Qualifier of the <code>BHGESalesAreaData.division</code> attribute **/
	public static final String DIVISION = "division";
	/** Qualifier of the <code>BHGESalesAreaData.hybrisStatus</code> attribute **/
	public static final String HYBRISSTATUS = "hybrisStatus";
	/** Qualifier of the <code>BHGESalesAreaData.materialStatus</code> attribute **/
	public static final String MATERIALSTATUS = "materialStatus";
	/** Qualifier of the <code>BHGESalesAreaData.deliveryTime</code> attribute **/
	public static final String DELIVERYTIME = "deliveryTime";
	/** Qualifier of the <code>BHGESalesAreaData.displayType</code> attribute **/
	public static final String DISPLAYTYPE = "displayType";
	/** Qualifier of the <code>BHGESalesAreaData.atp</code> attribute **/
	public static final String ATP = "atp";
	/** Qualifier of the <code>BHGESalesAreaData.minOrderQuantity</code> attribute **/
	public static final String MINORDERQUANTITY = "minOrderQuantity";
	/** Qualifier of the <code>BHGESalesAreaData.salesUnit</code> attribute **/
	public static final String SALESUNIT = "salesUnit";
	/** Qualifier of the <code>BHGESalesAreaData.eComSetIndicatorDate</code> attribute **/
	public static final String ECOMSETINDICATORDATE = "eComSetIndicatorDate";
	/** Qualifier of the <code>BHGESalesAreaData.materialPriceGroup</code> attribute **/
	public static final String MATERIALPRICEGROUP = "materialPriceGroup";
	/** Qualifier of the <code>BHGESalesAreaData.accountAssignmentGroup</code> attribute **/
	public static final String ACCOUNTASSIGNMENTGROUP = "accountAssignmentGroup";
	/** Qualifier of the <code>BHGESalesAreaData.materialStaticGroup</code> attribute **/
	public static final String MATERIALSTATICGROUP = "materialStaticGroup";
	/** Qualifier of the <code>BHGESalesAreaData.deliveryPlant</code> attribute **/
	public static final String DELIVERYPLANT = "deliveryPlant";
	/** Qualifier of the <code>BHGESalesAreaData.product</code> attribute **/
	public static final String PRODUCT = "product";
	/** Relation ordering override parameter constants for Product2SalesAreaRelation from ((bhgecore))*/
	protected static String PRODUCT2SALESAREARELATION_SRC_ORDERED = "relation.Product2SalesAreaRelation.source.ordered";
	protected static String PRODUCT2SALESAREARELATION_TGT_ORDERED = "relation.Product2SalesAreaRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for Product2SalesAreaRelation from ((bhgecore))*/
	protected static String PRODUCT2SALESAREARELATION_MARKMODIFIED = "relation.Product2SalesAreaRelation.markmodified";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(UID, AttributeMode.INITIAL);
		tmp.put(CATALOGVERSION, AttributeMode.INITIAL);
		tmp.put(SALESORGANIZATION, AttributeMode.INITIAL);
		tmp.put(DISTRIBUTIONCHANNEL, AttributeMode.INITIAL);
		tmp.put(DIVISION, AttributeMode.INITIAL);
		tmp.put(HYBRISSTATUS, AttributeMode.INITIAL);
		tmp.put(MATERIALSTATUS, AttributeMode.INITIAL);
		tmp.put(DELIVERYTIME, AttributeMode.INITIAL);
		tmp.put(DISPLAYTYPE, AttributeMode.INITIAL);
		tmp.put(ATP, AttributeMode.INITIAL);
		tmp.put(MINORDERQUANTITY, AttributeMode.INITIAL);
		tmp.put(SALESUNIT, AttributeMode.INITIAL);
		tmp.put(ECOMSETINDICATORDATE, AttributeMode.INITIAL);
		tmp.put(MATERIALPRICEGROUP, AttributeMode.INITIAL);
		tmp.put(ACCOUNTASSIGNMENTGROUP, AttributeMode.INITIAL);
		tmp.put(MATERIALSTATICGROUP, AttributeMode.INITIAL);
		tmp.put(DELIVERYPLANT, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.accountAssignmentGroup</code> attribute.
	 * @return the accountAssignmentGroup - Account assignment group
	 */
	public String getAccountAssignmentGroup(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ACCOUNTASSIGNMENTGROUP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.accountAssignmentGroup</code> attribute.
	 * @return the accountAssignmentGroup - Account assignment group
	 */
	public String getAccountAssignmentGroup()
	{
		return getAccountAssignmentGroup( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.accountAssignmentGroup</code> attribute. 
	 * @param value the accountAssignmentGroup - Account assignment group
	 */
	public void setAccountAssignmentGroup(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ACCOUNTASSIGNMENTGROUP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.accountAssignmentGroup</code> attribute. 
	 * @param value the accountAssignmentGroup - Account assignment group
	 */
	public void setAccountAssignmentGroup(final String value)
	{
		setAccountAssignmentGroup( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.atp</code> attribute.
	 * @return the atp - Describes if the product is an ATP product
	 */
	public String getAtp(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ATP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.atp</code> attribute.
	 * @return the atp - Describes if the product is an ATP product
	 */
	public String getAtp()
	{
		return getAtp( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.atp</code> attribute. 
	 * @param value the atp - Describes if the product is an ATP product
	 */
	public void setAtp(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ATP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.atp</code> attribute. 
	 * @param value the atp - Describes if the product is an ATP product
	 */
	public void setAtp(final String value)
	{
		setAtp( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.catalogVersion</code> attribute.
	 * @return the catalogVersion - CatalogVersion
	 */
	public CatalogVersion getCatalogVersion(final SessionContext ctx)
	{
		return (CatalogVersion)getProperty( ctx, CATALOGVERSION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.catalogVersion</code> attribute.
	 * @return the catalogVersion - CatalogVersion
	 */
	public CatalogVersion getCatalogVersion()
	{
		return getCatalogVersion( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.catalogVersion</code> attribute. 
	 * @param value the catalogVersion - CatalogVersion
	 */
	public void setCatalogVersion(final SessionContext ctx, final CatalogVersion value)
	{
		setProperty(ctx, CATALOGVERSION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.catalogVersion</code> attribute. 
	 * @param value the catalogVersion - CatalogVersion
	 */
	public void setCatalogVersion(final CatalogVersion value)
	{
		setCatalogVersion( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.deliveryPlant</code> attribute.
	 * @return the deliveryPlant - Delivery Plant
	 */
	public String getDeliveryPlant(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DELIVERYPLANT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.deliveryPlant</code> attribute.
	 * @return the deliveryPlant - Delivery Plant
	 */
	public String getDeliveryPlant()
	{
		return getDeliveryPlant( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.deliveryPlant</code> attribute. 
	 * @param value the deliveryPlant - Delivery Plant
	 */
	public void setDeliveryPlant(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DELIVERYPLANT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.deliveryPlant</code> attribute. 
	 * @param value the deliveryPlant - Delivery Plant
	 */
	public void setDeliveryPlant(final String value)
	{
		setDeliveryPlant( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.deliveryTime</code> attribute.
	 * @return the deliveryTime
	 */
	public Double getDeliveryTime(final SessionContext ctx)
	{
		return (Double)getProperty( ctx, DELIVERYTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.deliveryTime</code> attribute.
	 * @return the deliveryTime
	 */
	public Double getDeliveryTime()
	{
		return getDeliveryTime( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.deliveryTime</code> attribute. 
	 * @return the deliveryTime
	 */
	public double getDeliveryTimeAsPrimitive(final SessionContext ctx)
	{
		Double value = getDeliveryTime( ctx );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.deliveryTime</code> attribute. 
	 * @return the deliveryTime
	 */
	public double getDeliveryTimeAsPrimitive()
	{
		return getDeliveryTimeAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.deliveryTime</code> attribute. 
	 * @param value the deliveryTime
	 */
	public void setDeliveryTime(final SessionContext ctx, final Double value)
	{
		setProperty(ctx, DELIVERYTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.deliveryTime</code> attribute. 
	 * @param value the deliveryTime
	 */
	public void setDeliveryTime(final Double value)
	{
		setDeliveryTime( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.deliveryTime</code> attribute. 
	 * @param value the deliveryTime
	 */
	public void setDeliveryTime(final SessionContext ctx, final double value)
	{
		setDeliveryTime( ctx,Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.deliveryTime</code> attribute. 
	 * @param value the deliveryTime
	 */
	public void setDeliveryTime(final double value)
	{
		setDeliveryTime( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.displayType</code> attribute.
	 * @return the displayType
	 */
	public EnumerationValue getDisplayType(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, DISPLAYTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.displayType</code> attribute.
	 * @return the displayType
	 */
	public EnumerationValue getDisplayType()
	{
		return getDisplayType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.displayType</code> attribute. 
	 * @param value the displayType
	 */
	public void setDisplayType(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, DISPLAYTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.displayType</code> attribute. 
	 * @param value the displayType
	 */
	public void setDisplayType(final EnumerationValue value)
	{
		setDisplayType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.distributionChannel</code> attribute.
	 * @return the distributionChannel - Distribution Channel
	 */
	public String getDistributionChannel(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DISTRIBUTIONCHANNEL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.distributionChannel</code> attribute.
	 * @return the distributionChannel - Distribution Channel
	 */
	public String getDistributionChannel()
	{
		return getDistributionChannel( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.distributionChannel</code> attribute. 
	 * @param value the distributionChannel - Distribution Channel
	 */
	public void setDistributionChannel(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DISTRIBUTIONCHANNEL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.distributionChannel</code> attribute. 
	 * @param value the distributionChannel - Distribution Channel
	 */
	public void setDistributionChannel(final String value)
	{
		setDistributionChannel( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.division</code> attribute.
	 * @return the division - Division
	 */
	public String getDivision(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DIVISION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.division</code> attribute.
	 * @return the division - Division
	 */
	public String getDivision()
	{
		return getDivision( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.division</code> attribute. 
	 * @param value the division - Division
	 */
	public void setDivision(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DIVISION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.division</code> attribute. 
	 * @param value the division - Division
	 */
	public void setDivision(final String value)
	{
		setDivision( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.eComSetIndicatorDate</code> attribute.
	 * @return the eComSetIndicatorDate - ecom set indicator date
	 */
	public String getEComSetIndicatorDate(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ECOMSETINDICATORDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.eComSetIndicatorDate</code> attribute.
	 * @return the eComSetIndicatorDate - ecom set indicator date
	 */
	public String getEComSetIndicatorDate()
	{
		return getEComSetIndicatorDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.eComSetIndicatorDate</code> attribute. 
	 * @param value the eComSetIndicatorDate - ecom set indicator date
	 */
	public void setEComSetIndicatorDate(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ECOMSETINDICATORDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.eComSetIndicatorDate</code> attribute. 
	 * @param value the eComSetIndicatorDate - ecom set indicator date
	 */
	public void setEComSetIndicatorDate(final String value)
	{
		setEComSetIndicatorDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.hybrisStatus</code> attribute.
	 * @return the hybrisStatus - Describes the Material Status
	 */
	public EnumerationValue getHybrisStatus(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, HYBRISSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.hybrisStatus</code> attribute.
	 * @return the hybrisStatus - Describes the Material Status
	 */
	public EnumerationValue getHybrisStatus()
	{
		return getHybrisStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.hybrisStatus</code> attribute. 
	 * @param value the hybrisStatus - Describes the Material Status
	 */
	public void setHybrisStatus(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, HYBRISSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.hybrisStatus</code> attribute. 
	 * @param value the hybrisStatus - Describes the Material Status
	 */
	public void setHybrisStatus(final EnumerationValue value)
	{
		setHybrisStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * @deprecated since 2011, use {@link Utilities#getMarkModifiedOverride(de.hybris.platform.jalo.type.RelationType)
	 */
	@Override
	@Deprecated(since = "2105", forRemoval = true)
	public boolean isMarkModifiedDisabled(final Item referencedItem)
	{
		ComposedType relationSecondEnd0 = TypeManager.getInstance().getComposedType("GEEdgeProduct");
		if(relationSecondEnd0.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(PRODUCT2SALESAREARELATION_MARKMODIFIED);
		}
		return true;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.materialPriceGroup</code> attribute.
	 * @return the materialPriceGroup - Material Price Grp
	 */
	public String getMaterialPriceGroup(final SessionContext ctx)
	{
		return (String)getProperty( ctx, MATERIALPRICEGROUP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.materialPriceGroup</code> attribute.
	 * @return the materialPriceGroup - Material Price Grp
	 */
	public String getMaterialPriceGroup()
	{
		return getMaterialPriceGroup( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.materialPriceGroup</code> attribute. 
	 * @param value the materialPriceGroup - Material Price Grp
	 */
	public void setMaterialPriceGroup(final SessionContext ctx, final String value)
	{
		setProperty(ctx, MATERIALPRICEGROUP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.materialPriceGroup</code> attribute. 
	 * @param value the materialPriceGroup - Material Price Grp
	 */
	public void setMaterialPriceGroup(final String value)
	{
		setMaterialPriceGroup( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.materialStaticGroup</code> attribute.
	 * @return the materialStaticGroup - Material Static Group
	 */
	public String getMaterialStaticGroup(final SessionContext ctx)
	{
		return (String)getProperty( ctx, MATERIALSTATICGROUP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.materialStaticGroup</code> attribute.
	 * @return the materialStaticGroup - Material Static Group
	 */
	public String getMaterialStaticGroup()
	{
		return getMaterialStaticGroup( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.materialStaticGroup</code> attribute. 
	 * @param value the materialStaticGroup - Material Static Group
	 */
	public void setMaterialStaticGroup(final SessionContext ctx, final String value)
	{
		setProperty(ctx, MATERIALSTATICGROUP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.materialStaticGroup</code> attribute. 
	 * @param value the materialStaticGroup - Material Static Group
	 */
	public void setMaterialStaticGroup(final String value)
	{
		setMaterialStaticGroup( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.materialStatus</code> attribute.
	 * @return the materialStatus - Describes the Material Status
	 */
	public EnumerationValue getMaterialStatus(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, MATERIALSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.materialStatus</code> attribute.
	 * @return the materialStatus - Describes the Material Status
	 */
	public EnumerationValue getMaterialStatus()
	{
		return getMaterialStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.materialStatus</code> attribute. 
	 * @param value the materialStatus - Describes the Material Status
	 */
	public void setMaterialStatus(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, MATERIALSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.materialStatus</code> attribute. 
	 * @param value the materialStatus - Describes the Material Status
	 */
	public void setMaterialStatus(final EnumerationValue value)
	{
		setMaterialStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.minOrderQuantity</code> attribute.
	 * @return the minOrderQuantity
	 */
	public Integer getMinOrderQuantity(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, MINORDERQUANTITY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.minOrderQuantity</code> attribute.
	 * @return the minOrderQuantity
	 */
	public Integer getMinOrderQuantity()
	{
		return getMinOrderQuantity( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.minOrderQuantity</code> attribute. 
	 * @return the minOrderQuantity
	 */
	public int getMinOrderQuantityAsPrimitive(final SessionContext ctx)
	{
		Integer value = getMinOrderQuantity( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.minOrderQuantity</code> attribute. 
	 * @return the minOrderQuantity
	 */
	public int getMinOrderQuantityAsPrimitive()
	{
		return getMinOrderQuantityAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.minOrderQuantity</code> attribute. 
	 * @param value the minOrderQuantity
	 */
	public void setMinOrderQuantity(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, MINORDERQUANTITY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.minOrderQuantity</code> attribute. 
	 * @param value the minOrderQuantity
	 */
	public void setMinOrderQuantity(final Integer value)
	{
		setMinOrderQuantity( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.minOrderQuantity</code> attribute. 
	 * @param value the minOrderQuantity
	 */
	public void setMinOrderQuantity(final SessionContext ctx, final int value)
	{
		setMinOrderQuantity( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.minOrderQuantity</code> attribute. 
	 * @param value the minOrderQuantity
	 */
	public void setMinOrderQuantity(final int value)
	{
		setMinOrderQuantity( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.product</code> attribute.
	 * @return the product
	 */
	public Collection<GEEdgeProduct> getProduct(final SessionContext ctx)
	{
		final List<GEEdgeProduct> items = getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2SALESAREARELATION,
			"GEEdgeProduct",
			null,
			false,
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.product</code> attribute.
	 * @return the product
	 */
	public Collection<GEEdgeProduct> getProduct()
	{
		return getProduct( getSession().getSessionContext() );
	}
	
	public long getProductCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2SALESAREARELATION,
			"GEEdgeProduct",
			null
		);
	}
	
	public long getProductCount()
	{
		return getProductCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.product</code> attribute. 
	 * @param value the product
	 */
	public void setProduct(final SessionContext ctx, final Collection<GEEdgeProduct> value)
	{
		setLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2SALESAREARELATION,
			null,
			value,
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCT2SALESAREARELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.product</code> attribute. 
	 * @param value the product
	 */
	public void setProduct(final Collection<GEEdgeProduct> value)
	{
		setProduct( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to product. 
	 * @param value the item to add to product
	 */
	public void addToProduct(final SessionContext ctx, final GEEdgeProduct value)
	{
		addLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2SALESAREARELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCT2SALESAREARELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to product. 
	 * @param value the item to add to product
	 */
	public void addToProduct(final GEEdgeProduct value)
	{
		addToProduct( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from product. 
	 * @param value the item to remove from product
	 */
	public void removeFromProduct(final SessionContext ctx, final GEEdgeProduct value)
	{
		removeLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2SALESAREARELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCT2SALESAREARELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from product. 
	 * @param value the item to remove from product
	 */
	public void removeFromProduct(final GEEdgeProduct value)
	{
		removeFromProduct( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.salesOrganization</code> attribute.
	 * @return the salesOrganization - Sales Organization
	 */
	public String getSalesOrganization(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SALESORGANIZATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.salesOrganization</code> attribute.
	 * @return the salesOrganization - Sales Organization
	 */
	public String getSalesOrganization()
	{
		return getSalesOrganization( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.salesOrganization</code> attribute. 
	 * @param value the salesOrganization - Sales Organization
	 */
	public void setSalesOrganization(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SALESORGANIZATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.salesOrganization</code> attribute. 
	 * @param value the salesOrganization - Sales Organization
	 */
	public void setSalesOrganization(final String value)
	{
		setSalesOrganization( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.salesUnit</code> attribute.
	 * @return the salesUnit - Sales unit of product
	 */
	public String getSalesUnit(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SALESUNIT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.salesUnit</code> attribute.
	 * @return the salesUnit - Sales unit of product
	 */
	public String getSalesUnit()
	{
		return getSalesUnit( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.salesUnit</code> attribute. 
	 * @param value the salesUnit - Sales unit of product
	 */
	public void setSalesUnit(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SALESUNIT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.salesUnit</code> attribute. 
	 * @param value the salesUnit - Sales unit of product
	 */
	public void setSalesUnit(final String value)
	{
		setSalesUnit( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.uid</code> attribute.
	 * @return the uid
	 */
	public String getUid(final SessionContext ctx)
	{
		return (String)getProperty( ctx, UID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESalesAreaData.uid</code> attribute.
	 * @return the uid
	 */
	public String getUid()
	{
		return getUid( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.uid</code> attribute. 
	 * @param value the uid
	 */
	public void setUid(final SessionContext ctx, final String value)
	{
		setProperty(ctx, UID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESalesAreaData.uid</code> attribute. 
	 * @param value the uid
	 */
	public void setUid(final String value)
	{
		setUid( getSession().getSessionContext(), value );
	}
	
}
