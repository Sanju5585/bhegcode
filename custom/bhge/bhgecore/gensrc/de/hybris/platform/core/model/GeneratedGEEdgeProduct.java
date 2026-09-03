/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 *  
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.core.model;

import com.bhge.core.constants.BhgeCoreConstants;
import com.hybris.ge.edge.core.jalo.type.GEEdgeLegacyID;
import de.hybris.platform.commerceservices.jalo.process.BHGESalesAreaData;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import de.hybris.platform.jalo.media.Media;
import de.hybris.platform.jalo.product.Product;
import de.hybris.platform.jalo.security.Principal;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.util.OneToManyHandler;
import de.hybris.platform.util.Utilities;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Generated class for type {@link de.hybris.platform.core.model.GEEdgeProduct GEEdgeProduct}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeProduct extends Product
{
	/** Qualifier of the <code>GEEdgeProduct.materialStatus</code> attribute **/
	public static final String MATERIALSTATUS = "materialStatus";
	/** Qualifier of the <code>GEEdgeProduct.hybrisStatus</code> attribute **/
	public static final String HYBRISSTATUS = "hybrisStatus";
	/** Qualifier of the <code>GEEdgeProduct.leadTimeMaxQty</code> attribute **/
	public static final String LEADTIMEMAXQTY = "leadTimeMaxQty";
	/** Qualifier of the <code>GEEdgeProduct.maxOrderQty</code> attribute **/
	public static final String MAXORDERQTY = "maxOrderQty";
	/** Qualifier of the <code>GEEdgeProduct.leadTimeType</code> attribute **/
	public static final String LEADTIMETYPE = "leadTimeType";
	/** Qualifier of the <code>GEEdgeProduct.en</code> attribute **/
	public static final String EN = "en";
	/** Qualifier of the <code>GEEdgeProduct.usdn</code> attribute **/
	public static final String USDN = "usdn";
	/** Qualifier of the <code>GEEdgeProduct.connectorImage</code> attribute **/
	public static final String CONNECTORIMAGE = "connectorImage";
	/** Qualifier of the <code>GEEdgeProduct.productSpecs</code> attribute **/
	public static final String PRODUCTSPECS = "productSpecs";
	/** Qualifier of the <code>GEEdgeProduct.atp</code> attribute **/
	public static final String ATP = "atp";
	/** Qualifier of the <code>GEEdgeProduct.productType</code> attribute **/
	public static final String PRODUCTTYPE = "productType";
	/** Qualifier of the <code>GEEdgeProduct.globalPartNumber</code> attribute **/
	public static final String GLOBALPARTNUMBER = "globalPartNumber";
	/** Qualifier of the <code>GEEdgeProduct.erpPartNumber</code> attribute **/
	public static final String ERPPARTNUMBER = "erpPartNumber";
	/** Qualifier of the <code>GEEdgeProduct.customTarrifNumber</code> attribute **/
	public static final String CUSTOMTARRIFNUMBER = "customTarrifNumber";
	/** Qualifier of the <code>GEEdgeProduct.applicableTroubleshooting</code> attribute **/
	public static final String APPLICABLETROUBLESHOOTING = "applicableTroubleshooting";
	/** Qualifier of the <code>GEEdgeProduct.requiredCOSHHForm</code> attribute **/
	public static final String REQUIREDCOSHHFORM = "requiredCOSHHForm";
	/** Qualifier of the <code>GEEdgeProduct.introducedYear</code> attribute **/
	public static final String INTRODUCEDYEAR = "introducedYear";
	/** Qualifier of the <code>GEEdgeProduct.warrantyPeriod</code> attribute **/
	public static final String WARRANTYPERIOD = "warrantyPeriod";
	/** Qualifier of the <code>GEEdgeProduct.equipmentImage</code> attribute **/
	public static final String EQUIPMENTIMAGE = "equipmentImage";
	/** Qualifier of the <code>GEEdgeProduct.geProductHierarchy</code> attribute **/
	public static final String GEPRODUCTHIERARCHY = "geProductHierarchy";
	/** Qualifier of the <code>GEEdgeProduct.legacyIDList</code> attribute **/
	public static final String LEGACYIDLIST = "legacyIDList";
	/** Qualifier of the <code>GEEdgeProduct.disallowedProdPrincipals</code> attribute **/
	public static final String DISALLOWEDPRODPRINCIPALS = "disallowedProdPrincipals";
	/** Relation ordering override parameter constants for Product2PrincipalRelation from ((bhgecore))*/
	protected static String PRODUCT2PRINCIPALRELATION_SRC_ORDERED = "relation.Product2PrincipalRelation.source.ordered";
	protected static String PRODUCT2PRINCIPALRELATION_TGT_ORDERED = "relation.Product2PrincipalRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for Product2PrincipalRelation from ((bhgecore))*/
	protected static String PRODUCT2PRINCIPALRELATION_MARKMODIFIED = "relation.Product2PrincipalRelation.markmodified";
	/** Qualifier of the <code>GEEdgeProduct.allowedProdPrincipals</code> attribute **/
	public static final String ALLOWEDPRODPRINCIPALS = "allowedProdPrincipals";
	/** Relation ordering override parameter constants for Products2PrincipalsRelation from ((bhgecore))*/
	protected static String PRODUCTS2PRINCIPALSRELATION_SRC_ORDERED = "relation.Products2PrincipalsRelation.source.ordered";
	protected static String PRODUCTS2PRINCIPALSRELATION_TGT_ORDERED = "relation.Products2PrincipalsRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for Products2PrincipalsRelation from ((bhgecore))*/
	protected static String PRODUCTS2PRINCIPALSRELATION_MARKMODIFIED = "relation.Products2PrincipalsRelation.markmodified";
	/** Qualifier of the <code>GEEdgeProduct.salesAreaData</code> attribute **/
	public static final String SALESAREADATA = "salesAreaData";
	/** Relation ordering override parameter constants for Product2SalesAreaRelation from ((bhgecore))*/
	protected static String PRODUCT2SALESAREARELATION_SRC_ORDERED = "relation.Product2SalesAreaRelation.source.ordered";
	protected static String PRODUCT2SALESAREARELATION_TGT_ORDERED = "relation.Product2SalesAreaRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for Product2SalesAreaRelation from ((bhgecore))*/
	protected static String PRODUCT2SALESAREARELATION_MARKMODIFIED = "relation.Product2SalesAreaRelation.markmodified";
	/**
	* {@link OneToManyHandler} for handling 1:n LEGACYIDLIST's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<GEEdgeLegacyID> LEGACYIDLISTHANDLER = new OneToManyHandler<GEEdgeLegacyID>(
	BhgeCoreConstants.TC.GEEDGELEGACYID,
	true,
	"product",
	null,
	false,
	true,
	CollectionType.COLLECTION
	);
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(Product.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(MATERIALSTATUS, AttributeMode.INITIAL);
		tmp.put(HYBRISSTATUS, AttributeMode.INITIAL);
		tmp.put(LEADTIMEMAXQTY, AttributeMode.INITIAL);
		tmp.put(MAXORDERQTY, AttributeMode.INITIAL);
		tmp.put(LEADTIMETYPE, AttributeMode.INITIAL);
		tmp.put(EN, AttributeMode.INITIAL);
		tmp.put(USDN, AttributeMode.INITIAL);
		tmp.put(CONNECTORIMAGE, AttributeMode.INITIAL);
		tmp.put(PRODUCTSPECS, AttributeMode.INITIAL);
		tmp.put(ATP, AttributeMode.INITIAL);
		tmp.put(PRODUCTTYPE, AttributeMode.INITIAL);
		tmp.put(GLOBALPARTNUMBER, AttributeMode.INITIAL);
		tmp.put(ERPPARTNUMBER, AttributeMode.INITIAL);
		tmp.put(CUSTOMTARRIFNUMBER, AttributeMode.INITIAL);
		tmp.put(APPLICABLETROUBLESHOOTING, AttributeMode.INITIAL);
		tmp.put(REQUIREDCOSHHFORM, AttributeMode.INITIAL);
		tmp.put(INTRODUCEDYEAR, AttributeMode.INITIAL);
		tmp.put(WARRANTYPERIOD, AttributeMode.INITIAL);
		tmp.put(EQUIPMENTIMAGE, AttributeMode.INITIAL);
		tmp.put(GEPRODUCTHIERARCHY, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.allowedProdPrincipals</code> attribute.
	 * @return the allowedProdPrincipals - Principals which are allowed to access this catalog category
	 */
	public Set<Principal> getAllowedProdPrincipals(final SessionContext ctx)
	{
		final List<Principal> items = getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCTS2PRINCIPALSRELATION,
			"Principal",
			null,
			false,
			false
		);
		return new LinkedHashSet<Principal>(items);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.allowedProdPrincipals</code> attribute.
	 * @return the allowedProdPrincipals - Principals which are allowed to access this catalog category
	 */
	public Set<Principal> getAllowedProdPrincipals()
	{
		return getAllowedProdPrincipals( getSession().getSessionContext() );
	}
	
	public long getAllowedProdPrincipalsCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCTS2PRINCIPALSRELATION,
			"Principal",
			null
		);
	}
	
	public long getAllowedProdPrincipalsCount()
	{
		return getAllowedProdPrincipalsCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.allowedProdPrincipals</code> attribute. 
	 * @param value the allowedProdPrincipals - Principals which are allowed to access this catalog category
	 */
	public void setAllowedProdPrincipals(final SessionContext ctx, final Set<Principal> value)
	{
		setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCTS2PRINCIPALSRELATION,
			null,
			value,
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCTS2PRINCIPALSRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.allowedProdPrincipals</code> attribute. 
	 * @param value the allowedProdPrincipals - Principals which are allowed to access this catalog category
	 */
	public void setAllowedProdPrincipals(final Set<Principal> value)
	{
		setAllowedProdPrincipals( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to allowedProdPrincipals. 
	 * @param value the item to add to allowedProdPrincipals - Principals which are allowed to access this catalog category
	 */
	public void addToAllowedProdPrincipals(final SessionContext ctx, final Principal value)
	{
		addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCTS2PRINCIPALSRELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCTS2PRINCIPALSRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to allowedProdPrincipals. 
	 * @param value the item to add to allowedProdPrincipals - Principals which are allowed to access this catalog category
	 */
	public void addToAllowedProdPrincipals(final Principal value)
	{
		addToAllowedProdPrincipals( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from allowedProdPrincipals. 
	 * @param value the item to remove from allowedProdPrincipals - Principals which are allowed to access this catalog category
	 */
	public void removeFromAllowedProdPrincipals(final SessionContext ctx, final Principal value)
	{
		removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCTS2PRINCIPALSRELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCTS2PRINCIPALSRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from allowedProdPrincipals. 
	 * @param value the item to remove from allowedProdPrincipals - Principals which are allowed to access this catalog category
	 */
	public void removeFromAllowedProdPrincipals(final Principal value)
	{
		removeFromAllowedProdPrincipals( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.applicableTroubleshooting</code> attribute.
	 * @return the applicableTroubleshooting
	 */
	public String getApplicableTroubleshooting(final SessionContext ctx)
	{
		return (String)getProperty( ctx, APPLICABLETROUBLESHOOTING);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.applicableTroubleshooting</code> attribute.
	 * @return the applicableTroubleshooting
	 */
	public String getApplicableTroubleshooting()
	{
		return getApplicableTroubleshooting( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.applicableTroubleshooting</code> attribute. 
	 * @param value the applicableTroubleshooting
	 */
	public void setApplicableTroubleshooting(final SessionContext ctx, final String value)
	{
		setProperty(ctx, APPLICABLETROUBLESHOOTING,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.applicableTroubleshooting</code> attribute. 
	 * @param value the applicableTroubleshooting
	 */
	public void setApplicableTroubleshooting(final String value)
	{
		setApplicableTroubleshooting( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.atp</code> attribute.
	 * @return the atp - Describes if the product is an ATP product
	 */
	public String getAtp(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ATP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.atp</code> attribute.
	 * @return the atp - Describes if the product is an ATP product
	 */
	public String getAtp()
	{
		return getAtp( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.atp</code> attribute. 
	 * @param value the atp - Describes if the product is an ATP product
	 */
	public void setAtp(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ATP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.atp</code> attribute. 
	 * @param value the atp - Describes if the product is an ATP product
	 */
	public void setAtp(final String value)
	{
		setAtp( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.connectorImage</code> attribute.
	 * @return the connectorImage - Image of connecter
	 */
	public String getConnectorImage(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONNECTORIMAGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.connectorImage</code> attribute.
	 * @return the connectorImage - Image of connecter
	 */
	public String getConnectorImage()
	{
		return getConnectorImage( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.connectorImage</code> attribute. 
	 * @param value the connectorImage - Image of connecter
	 */
	public void setConnectorImage(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONNECTORIMAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.connectorImage</code> attribute. 
	 * @param value the connectorImage - Image of connecter
	 */
	public void setConnectorImage(final String value)
	{
		setConnectorImage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.customTarrifNumber</code> attribute.
	 * @return the customTarrifNumber
	 */
	public String getCustomTarrifNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CUSTOMTARRIFNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.customTarrifNumber</code> attribute.
	 * @return the customTarrifNumber
	 */
	public String getCustomTarrifNumber()
	{
		return getCustomTarrifNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.customTarrifNumber</code> attribute. 
	 * @param value the customTarrifNumber
	 */
	public void setCustomTarrifNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CUSTOMTARRIFNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.customTarrifNumber</code> attribute. 
	 * @param value the customTarrifNumber
	 */
	public void setCustomTarrifNumber(final String value)
	{
		setCustomTarrifNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.disallowedProdPrincipals</code> attribute.
	 * @return the disallowedProdPrincipals - Principals which are not allowed to access this catalog category
	 */
	public Set<Principal> getDisallowedProdPrincipals(final SessionContext ctx)
	{
		final List<Principal> items = getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2PRINCIPALRELATION,
			"Principal",
			null,
			false,
			false
		);
		return new LinkedHashSet<Principal>(items);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.disallowedProdPrincipals</code> attribute.
	 * @return the disallowedProdPrincipals - Principals which are not allowed to access this catalog category
	 */
	public Set<Principal> getDisallowedProdPrincipals()
	{
		return getDisallowedProdPrincipals( getSession().getSessionContext() );
	}
	
	public long getDisallowedProdPrincipalsCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2PRINCIPALRELATION,
			"Principal",
			null
		);
	}
	
	public long getDisallowedProdPrincipalsCount()
	{
		return getDisallowedProdPrincipalsCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.disallowedProdPrincipals</code> attribute. 
	 * @param value the disallowedProdPrincipals - Principals which are not allowed to access this catalog category
	 */
	public void setDisallowedProdPrincipals(final SessionContext ctx, final Set<Principal> value)
	{
		setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2PRINCIPALRELATION,
			null,
			value,
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCT2PRINCIPALRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.disallowedProdPrincipals</code> attribute. 
	 * @param value the disallowedProdPrincipals - Principals which are not allowed to access this catalog category
	 */
	public void setDisallowedProdPrincipals(final Set<Principal> value)
	{
		setDisallowedProdPrincipals( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to disallowedProdPrincipals. 
	 * @param value the item to add to disallowedProdPrincipals - Principals which are not allowed to access this catalog category
	 */
	public void addToDisallowedProdPrincipals(final SessionContext ctx, final Principal value)
	{
		addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2PRINCIPALRELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCT2PRINCIPALRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to disallowedProdPrincipals. 
	 * @param value the item to add to disallowedProdPrincipals - Principals which are not allowed to access this catalog category
	 */
	public void addToDisallowedProdPrincipals(final Principal value)
	{
		addToDisallowedProdPrincipals( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from disallowedProdPrincipals. 
	 * @param value the item to remove from disallowedProdPrincipals - Principals which are not allowed to access this catalog category
	 */
	public void removeFromDisallowedProdPrincipals(final SessionContext ctx, final Principal value)
	{
		removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2PRINCIPALRELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCT2PRINCIPALRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from disallowedProdPrincipals. 
	 * @param value the item to remove from disallowedProdPrincipals - Principals which are not allowed to access this catalog category
	 */
	public void removeFromDisallowedProdPrincipals(final Principal value)
	{
		removeFromDisallowedProdPrincipals( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.en</code> attribute.
	 * @return the en - Comments required for product
	 */
	public Boolean isEn(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, EN);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.en</code> attribute.
	 * @return the en - Comments required for product
	 */
	public Boolean isEn()
	{
		return isEn( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.en</code> attribute. 
	 * @return the en - Comments required for product
	 */
	public boolean isEnAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isEn( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.en</code> attribute. 
	 * @return the en - Comments required for product
	 */
	public boolean isEnAsPrimitive()
	{
		return isEnAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.en</code> attribute. 
	 * @param value the en - Comments required for product
	 */
	public void setEn(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, EN,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.en</code> attribute. 
	 * @param value the en - Comments required for product
	 */
	public void setEn(final Boolean value)
	{
		setEn( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.en</code> attribute. 
	 * @param value the en - Comments required for product
	 */
	public void setEn(final SessionContext ctx, final boolean value)
	{
		setEn( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.en</code> attribute. 
	 * @param value the en - Comments required for product
	 */
	public void setEn(final boolean value)
	{
		setEn( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.equipmentImage</code> attribute.
	 * @return the equipmentImage
	 */
	public Media getEquipmentImage(final SessionContext ctx)
	{
		return (Media)getProperty( ctx, EQUIPMENTIMAGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.equipmentImage</code> attribute.
	 * @return the equipmentImage
	 */
	public Media getEquipmentImage()
	{
		return getEquipmentImage( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.equipmentImage</code> attribute. 
	 * @param value the equipmentImage
	 */
	public void setEquipmentImage(final SessionContext ctx, final Media value)
	{
		setProperty(ctx, EQUIPMENTIMAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.equipmentImage</code> attribute. 
	 * @param value the equipmentImage
	 */
	public void setEquipmentImage(final Media value)
	{
		setEquipmentImage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.erpPartNumber</code> attribute.
	 * @return the erpPartNumber
	 */
	public String getErpPartNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ERPPARTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.erpPartNumber</code> attribute.
	 * @return the erpPartNumber
	 */
	public String getErpPartNumber()
	{
		return getErpPartNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.erpPartNumber</code> attribute. 
	 * @param value the erpPartNumber
	 */
	public void setErpPartNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ERPPARTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.erpPartNumber</code> attribute. 
	 * @param value the erpPartNumber
	 */
	public void setErpPartNumber(final String value)
	{
		setErpPartNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.geProductHierarchy</code> attribute.
	 * @return the geProductHierarchy
	 */
	public String getGeProductHierarchy(final SessionContext ctx)
	{
		return (String)getProperty( ctx, GEPRODUCTHIERARCHY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.geProductHierarchy</code> attribute.
	 * @return the geProductHierarchy
	 */
	public String getGeProductHierarchy()
	{
		return getGeProductHierarchy( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.geProductHierarchy</code> attribute. 
	 * @param value the geProductHierarchy
	 */
	public void setGeProductHierarchy(final SessionContext ctx, final String value)
	{
		setProperty(ctx, GEPRODUCTHIERARCHY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.geProductHierarchy</code> attribute. 
	 * @param value the geProductHierarchy
	 */
	public void setGeProductHierarchy(final String value)
	{
		setGeProductHierarchy( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.globalPartNumber</code> attribute.
	 * @return the globalPartNumber
	 */
	public String getGlobalPartNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, GLOBALPARTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.globalPartNumber</code> attribute.
	 * @return the globalPartNumber
	 */
	public String getGlobalPartNumber()
	{
		return getGlobalPartNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.globalPartNumber</code> attribute. 
	 * @param value the globalPartNumber
	 */
	public void setGlobalPartNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, GLOBALPARTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.globalPartNumber</code> attribute. 
	 * @param value the globalPartNumber
	 */
	public void setGlobalPartNumber(final String value)
	{
		setGlobalPartNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.hybrisStatus</code> attribute.
	 * @return the hybrisStatus - Describes the Material Status
	 */
	public EnumerationValue getHybrisStatus(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, HYBRISSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.hybrisStatus</code> attribute.
	 * @return the hybrisStatus - Describes the Material Status
	 */
	public EnumerationValue getHybrisStatus()
	{
		return getHybrisStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.hybrisStatus</code> attribute. 
	 * @param value the hybrisStatus - Describes the Material Status
	 */
	public void setHybrisStatus(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, HYBRISSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.hybrisStatus</code> attribute. 
	 * @param value the hybrisStatus - Describes the Material Status
	 */
	public void setHybrisStatus(final EnumerationValue value)
	{
		setHybrisStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.introducedYear</code> attribute.
	 * @return the introducedYear
	 */
	public Integer getIntroducedYear(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, INTRODUCEDYEAR);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.introducedYear</code> attribute.
	 * @return the introducedYear
	 */
	public Integer getIntroducedYear()
	{
		return getIntroducedYear( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.introducedYear</code> attribute. 
	 * @return the introducedYear
	 */
	public int getIntroducedYearAsPrimitive(final SessionContext ctx)
	{
		Integer value = getIntroducedYear( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.introducedYear</code> attribute. 
	 * @return the introducedYear
	 */
	public int getIntroducedYearAsPrimitive()
	{
		return getIntroducedYearAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.introducedYear</code> attribute. 
	 * @param value the introducedYear
	 */
	public void setIntroducedYear(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, INTRODUCEDYEAR,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.introducedYear</code> attribute. 
	 * @param value the introducedYear
	 */
	public void setIntroducedYear(final Integer value)
	{
		setIntroducedYear( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.introducedYear</code> attribute. 
	 * @param value the introducedYear
	 */
	public void setIntroducedYear(final SessionContext ctx, final int value)
	{
		setIntroducedYear( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.introducedYear</code> attribute. 
	 * @param value the introducedYear
	 */
	public void setIntroducedYear(final int value)
	{
		setIntroducedYear( getSession().getSessionContext(), value );
	}
	
	/**
	 * @deprecated since 2011, use {@link Utilities#getMarkModifiedOverride(de.hybris.platform.jalo.type.RelationType)
	 */
	@Override
	@Deprecated(since = "2105", forRemoval = true)
	public boolean isMarkModifiedDisabled(final Item referencedItem)
	{
		ComposedType relationSecondEnd0 = TypeManager.getInstance().getComposedType("Principal");
		if(relationSecondEnd0.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(PRODUCT2PRINCIPALRELATION_MARKMODIFIED);
		}
		ComposedType relationSecondEnd1 = TypeManager.getInstance().getComposedType("Principal");
		if(relationSecondEnd1.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(PRODUCTS2PRINCIPALSRELATION_MARKMODIFIED);
		}
		ComposedType relationSecondEnd2 = TypeManager.getInstance().getComposedType("BHGESalesAreaData");
		if(relationSecondEnd2.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(PRODUCT2SALESAREARELATION_MARKMODIFIED);
		}
		return true;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.leadTimeMaxQty</code> attribute.
	 * @return the leadTimeMaxQty - Lead time for max quantity
	 */
	public Integer getLeadTimeMaxQty(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, LEADTIMEMAXQTY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.leadTimeMaxQty</code> attribute.
	 * @return the leadTimeMaxQty - Lead time for max quantity
	 */
	public Integer getLeadTimeMaxQty()
	{
		return getLeadTimeMaxQty( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.leadTimeMaxQty</code> attribute. 
	 * @return the leadTimeMaxQty - Lead time for max quantity
	 */
	public int getLeadTimeMaxQtyAsPrimitive(final SessionContext ctx)
	{
		Integer value = getLeadTimeMaxQty( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.leadTimeMaxQty</code> attribute. 
	 * @return the leadTimeMaxQty - Lead time for max quantity
	 */
	public int getLeadTimeMaxQtyAsPrimitive()
	{
		return getLeadTimeMaxQtyAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.leadTimeMaxQty</code> attribute. 
	 * @param value the leadTimeMaxQty - Lead time for max quantity
	 */
	public void setLeadTimeMaxQty(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, LEADTIMEMAXQTY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.leadTimeMaxQty</code> attribute. 
	 * @param value the leadTimeMaxQty - Lead time for max quantity
	 */
	public void setLeadTimeMaxQty(final Integer value)
	{
		setLeadTimeMaxQty( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.leadTimeMaxQty</code> attribute. 
	 * @param value the leadTimeMaxQty - Lead time for max quantity
	 */
	public void setLeadTimeMaxQty(final SessionContext ctx, final int value)
	{
		setLeadTimeMaxQty( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.leadTimeMaxQty</code> attribute. 
	 * @param value the leadTimeMaxQty - Lead time for max quantity
	 */
	public void setLeadTimeMaxQty(final int value)
	{
		setLeadTimeMaxQty( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.leadTimeType</code> attribute.
	 * @return the leadTimeType - Comments required for product
	 */
	public String getLeadTimeType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, LEADTIMETYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.leadTimeType</code> attribute.
	 * @return the leadTimeType - Comments required for product
	 */
	public String getLeadTimeType()
	{
		return getLeadTimeType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.leadTimeType</code> attribute. 
	 * @param value the leadTimeType - Comments required for product
	 */
	public void setLeadTimeType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, LEADTIMETYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.leadTimeType</code> attribute. 
	 * @param value the leadTimeType - Comments required for product
	 */
	public void setLeadTimeType(final String value)
	{
		setLeadTimeType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.legacyIDList</code> attribute.
	 * @return the legacyIDList
	 */
	public Collection<GEEdgeLegacyID> getLegacyIDList(final SessionContext ctx)
	{
		return LEGACYIDLISTHANDLER.getValues( ctx, this );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.legacyIDList</code> attribute.
	 * @return the legacyIDList
	 */
	public Collection<GEEdgeLegacyID> getLegacyIDList()
	{
		return getLegacyIDList( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.legacyIDList</code> attribute. 
	 * @param value the legacyIDList
	 */
	public void setLegacyIDList(final SessionContext ctx, final Collection<GEEdgeLegacyID> value)
	{
		LEGACYIDLISTHANDLER.setValues( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.legacyIDList</code> attribute. 
	 * @param value the legacyIDList
	 */
	public void setLegacyIDList(final Collection<GEEdgeLegacyID> value)
	{
		setLegacyIDList( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to legacyIDList. 
	 * @param value the item to add to legacyIDList
	 */
	public void addToLegacyIDList(final SessionContext ctx, final GEEdgeLegacyID value)
	{
		LEGACYIDLISTHANDLER.addValue( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to legacyIDList. 
	 * @param value the item to add to legacyIDList
	 */
	public void addToLegacyIDList(final GEEdgeLegacyID value)
	{
		addToLegacyIDList( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from legacyIDList. 
	 * @param value the item to remove from legacyIDList
	 */
	public void removeFromLegacyIDList(final SessionContext ctx, final GEEdgeLegacyID value)
	{
		LEGACYIDLISTHANDLER.removeValue( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from legacyIDList. 
	 * @param value the item to remove from legacyIDList
	 */
	public void removeFromLegacyIDList(final GEEdgeLegacyID value)
	{
		removeFromLegacyIDList( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.materialStatus</code> attribute.
	 * @return the materialStatus - Describes the Material Status
	 */
	public EnumerationValue getMaterialStatus(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, MATERIALSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.materialStatus</code> attribute.
	 * @return the materialStatus - Describes the Material Status
	 */
	public EnumerationValue getMaterialStatus()
	{
		return getMaterialStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.materialStatus</code> attribute. 
	 * @param value the materialStatus - Describes the Material Status
	 */
	public void setMaterialStatus(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, MATERIALSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.materialStatus</code> attribute. 
	 * @param value the materialStatus - Describes the Material Status
	 */
	public void setMaterialStatus(final EnumerationValue value)
	{
		setMaterialStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.maxOrderQty</code> attribute.
	 * @return the maxOrderQty - Describes maximum  quantity
	 */
	public Integer getMaxOrderQty(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, MAXORDERQTY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.maxOrderQty</code> attribute.
	 * @return the maxOrderQty - Describes maximum  quantity
	 */
	public Integer getMaxOrderQty()
	{
		return getMaxOrderQty( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.maxOrderQty</code> attribute. 
	 * @return the maxOrderQty - Describes maximum  quantity
	 */
	public int getMaxOrderQtyAsPrimitive(final SessionContext ctx)
	{
		Integer value = getMaxOrderQty( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.maxOrderQty</code> attribute. 
	 * @return the maxOrderQty - Describes maximum  quantity
	 */
	public int getMaxOrderQtyAsPrimitive()
	{
		return getMaxOrderQtyAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.maxOrderQty</code> attribute. 
	 * @param value the maxOrderQty - Describes maximum  quantity
	 */
	public void setMaxOrderQty(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, MAXORDERQTY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.maxOrderQty</code> attribute. 
	 * @param value the maxOrderQty - Describes maximum  quantity
	 */
	public void setMaxOrderQty(final Integer value)
	{
		setMaxOrderQty( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.maxOrderQty</code> attribute. 
	 * @param value the maxOrderQty - Describes maximum  quantity
	 */
	public void setMaxOrderQty(final SessionContext ctx, final int value)
	{
		setMaxOrderQty( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.maxOrderQty</code> attribute. 
	 * @param value the maxOrderQty - Describes maximum  quantity
	 */
	public void setMaxOrderQty(final int value)
	{
		setMaxOrderQty( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.productSpecs</code> attribute.
	 * @return the productSpecs - Describes product speces
	 */
	public String getProductSpecs(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PRODUCTSPECS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.productSpecs</code> attribute.
	 * @return the productSpecs - Describes product speces
	 */
	public String getProductSpecs()
	{
		return getProductSpecs( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.productSpecs</code> attribute. 
	 * @param value the productSpecs - Describes product speces
	 */
	public void setProductSpecs(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PRODUCTSPECS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.productSpecs</code> attribute. 
	 * @param value the productSpecs - Describes product speces
	 */
	public void setProductSpecs(final String value)
	{
		setProductSpecs( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.productType</code> attribute.
	 * @return the productType - Product Line
	 */
	public EnumerationValue getProductType(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, PRODUCTTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.productType</code> attribute.
	 * @return the productType - Product Line
	 */
	public EnumerationValue getProductType()
	{
		return getProductType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.productType</code> attribute. 
	 * @param value the productType - Product Line
	 */
	public void setProductType(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, PRODUCTTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.productType</code> attribute. 
	 * @param value the productType - Product Line
	 */
	public void setProductType(final EnumerationValue value)
	{
		setProductType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.requiredCOSHHForm</code> attribute.
	 * @return the requiredCOSHHForm
	 */
	public Boolean isRequiredCOSHHForm(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, REQUIREDCOSHHFORM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.requiredCOSHHForm</code> attribute.
	 * @return the requiredCOSHHForm
	 */
	public Boolean isRequiredCOSHHForm()
	{
		return isRequiredCOSHHForm( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.requiredCOSHHForm</code> attribute. 
	 * @return the requiredCOSHHForm
	 */
	public boolean isRequiredCOSHHFormAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isRequiredCOSHHForm( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.requiredCOSHHForm</code> attribute. 
	 * @return the requiredCOSHHForm
	 */
	public boolean isRequiredCOSHHFormAsPrimitive()
	{
		return isRequiredCOSHHFormAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.requiredCOSHHForm</code> attribute. 
	 * @param value the requiredCOSHHForm
	 */
	public void setRequiredCOSHHForm(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, REQUIREDCOSHHFORM,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.requiredCOSHHForm</code> attribute. 
	 * @param value the requiredCOSHHForm
	 */
	public void setRequiredCOSHHForm(final Boolean value)
	{
		setRequiredCOSHHForm( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.requiredCOSHHForm</code> attribute. 
	 * @param value the requiredCOSHHForm
	 */
	public void setRequiredCOSHHForm(final SessionContext ctx, final boolean value)
	{
		setRequiredCOSHHForm( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.requiredCOSHHForm</code> attribute. 
	 * @param value the requiredCOSHHForm
	 */
	public void setRequiredCOSHHForm(final boolean value)
	{
		setRequiredCOSHHForm( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.salesAreaData</code> attribute.
	 * @return the salesAreaData
	 */
	public Collection<BHGESalesAreaData> getSalesAreaData(final SessionContext ctx)
	{
		final List<BHGESalesAreaData> items = getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2SALESAREARELATION,
			"BHGESalesAreaData",
			null,
			false,
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.salesAreaData</code> attribute.
	 * @return the salesAreaData
	 */
	public Collection<BHGESalesAreaData> getSalesAreaData()
	{
		return getSalesAreaData( getSession().getSessionContext() );
	}
	
	public long getSalesAreaDataCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2SALESAREARELATION,
			"BHGESalesAreaData",
			null
		);
	}
	
	public long getSalesAreaDataCount()
	{
		return getSalesAreaDataCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.salesAreaData</code> attribute. 
	 * @param value the salesAreaData
	 */
	public void setSalesAreaData(final SessionContext ctx, final Collection<BHGESalesAreaData> value)
	{
		setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2SALESAREARELATION,
			null,
			value,
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCT2SALESAREARELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.salesAreaData</code> attribute. 
	 * @param value the salesAreaData
	 */
	public void setSalesAreaData(final Collection<BHGESalesAreaData> value)
	{
		setSalesAreaData( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to salesAreaData. 
	 * @param value the item to add to salesAreaData
	 */
	public void addToSalesAreaData(final SessionContext ctx, final BHGESalesAreaData value)
	{
		addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2SALESAREARELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCT2SALESAREARELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to salesAreaData. 
	 * @param value the item to add to salesAreaData
	 */
	public void addToSalesAreaData(final BHGESalesAreaData value)
	{
		addToSalesAreaData( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from salesAreaData. 
	 * @param value the item to remove from salesAreaData
	 */
	public void removeFromSalesAreaData(final SessionContext ctx, final BHGESalesAreaData value)
	{
		removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2SALESAREARELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCT2SALESAREARELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from salesAreaData. 
	 * @param value the item to remove from salesAreaData
	 */
	public void removeFromSalesAreaData(final BHGESalesAreaData value)
	{
		removeFromSalesAreaData( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.usdn</code> attribute.
	 * @return the usdn - Comments required for product
	 */
	public String getUsdn(final SessionContext ctx)
	{
		return (String)getProperty( ctx, USDN);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.usdn</code> attribute.
	 * @return the usdn - Comments required for product
	 */
	public String getUsdn()
	{
		return getUsdn( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.usdn</code> attribute. 
	 * @param value the usdn - Comments required for product
	 */
	public void setUsdn(final SessionContext ctx, final String value)
	{
		setProperty(ctx, USDN,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.usdn</code> attribute. 
	 * @param value the usdn - Comments required for product
	 */
	public void setUsdn(final String value)
	{
		setUsdn( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.warrantyPeriod</code> attribute.
	 * @return the warrantyPeriod
	 */
	public Integer getWarrantyPeriod(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, WARRANTYPERIOD);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.warrantyPeriod</code> attribute.
	 * @return the warrantyPeriod
	 */
	public Integer getWarrantyPeriod()
	{
		return getWarrantyPeriod( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.warrantyPeriod</code> attribute. 
	 * @return the warrantyPeriod
	 */
	public int getWarrantyPeriodAsPrimitive(final SessionContext ctx)
	{
		Integer value = getWarrantyPeriod( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProduct.warrantyPeriod</code> attribute. 
	 * @return the warrantyPeriod
	 */
	public int getWarrantyPeriodAsPrimitive()
	{
		return getWarrantyPeriodAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.warrantyPeriod</code> attribute. 
	 * @param value the warrantyPeriod
	 */
	public void setWarrantyPeriod(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, WARRANTYPERIOD,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.warrantyPeriod</code> attribute. 
	 * @param value the warrantyPeriod
	 */
	public void setWarrantyPeriod(final Integer value)
	{
		setWarrantyPeriod( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.warrantyPeriod</code> attribute. 
	 * @param value the warrantyPeriod
	 */
	public void setWarrantyPeriod(final SessionContext ctx, final int value)
	{
		setWarrantyPeriod( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProduct.warrantyPeriod</code> attribute. 
	 * @param value the warrantyPeriod
	 */
	public void setWarrantyPeriod(final int value)
	{
		setWarrantyPeriod( getSession().getSessionContext(), value );
	}
	
}
