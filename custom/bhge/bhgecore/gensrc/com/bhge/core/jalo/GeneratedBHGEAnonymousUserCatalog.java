/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.b2b.jalo.B2BUnit;
import de.hybris.platform.category.jalo.Category;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.Country;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.util.Utilities;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEAnonymousUserCatalog}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEAnonymousUserCatalog extends GenericItem
{
	/** Qualifier of the <code>BHGEAnonymousUserCatalog.country</code> attribute **/
	public static final String COUNTRY = "country";
	/** Qualifier of the <code>BHGEAnonymousUserCatalog.b2BUnit</code> attribute **/
	public static final String B2BUNIT = "b2BUnit";
	/** Qualifier of the <code>BHGEAnonymousUserCatalog.plants</code> attribute **/
	public static final String PLANTS = "plants";
	/** Qualifier of the <code>BHGEAnonymousUserCatalog.salesOrg</code> attribute **/
	public static final String SALESORG = "salesOrg";
	/** Qualifier of the <code>BHGEAnonymousUserCatalog.distributionChannel</code> attribute **/
	public static final String DISTRIBUTIONCHANNEL = "distributionChannel";
	/** Qualifier of the <code>BHGEAnonymousUserCatalog.division</code> attribute **/
	public static final String DIVISION = "division";
	/** Qualifier of the <code>BHGEAnonymousUserCatalog.defaultSalesOrg</code> attribute **/
	public static final String DEFAULTSALESORG = "defaultSalesOrg";
	/** Qualifier of the <code>BHGEAnonymousUserCatalog.categories</code> attribute **/
	public static final String CATEGORIES = "categories";
	/** Relation ordering override parameter constants for BHGEAnonymousToCategoryMapping from ((bhgecore))*/
	protected static String BHGEANONYMOUSTOCATEGORYMAPPING_SRC_ORDERED = "relation.BHGEAnonymousToCategoryMapping.source.ordered";
	protected static String BHGEANONYMOUSTOCATEGORYMAPPING_TGT_ORDERED = "relation.BHGEAnonymousToCategoryMapping.target.ordered";
	/** Relation disable markmodifed parameter constants for BHGEAnonymousToCategoryMapping from ((bhgecore))*/
	protected static String BHGEANONYMOUSTOCATEGORYMAPPING_MARKMODIFIED = "relation.BHGEAnonymousToCategoryMapping.markmodified";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(COUNTRY, AttributeMode.INITIAL);
		tmp.put(B2BUNIT, AttributeMode.INITIAL);
		tmp.put(PLANTS, AttributeMode.INITIAL);
		tmp.put(SALESORG, AttributeMode.INITIAL);
		tmp.put(DISTRIBUTIONCHANNEL, AttributeMode.INITIAL);
		tmp.put(DIVISION, AttributeMode.INITIAL);
		tmp.put(DEFAULTSALESORG, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.b2BUnit</code> attribute.
	 * @return the b2BUnit - Enabled B2BUnit
	 */
	public B2BUnit getB2BUnit(final SessionContext ctx)
	{
		return (B2BUnit)getProperty( ctx, B2BUNIT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.b2BUnit</code> attribute.
	 * @return the b2BUnit - Enabled B2BUnit
	 */
	public B2BUnit getB2BUnit()
	{
		return getB2BUnit( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.b2BUnit</code> attribute. 
	 * @param value the b2BUnit - Enabled B2BUnit
	 */
	public void setB2BUnit(final SessionContext ctx, final B2BUnit value)
	{
		setProperty(ctx, B2BUNIT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.b2BUnit</code> attribute. 
	 * @param value the b2BUnit - Enabled B2BUnit
	 */
	public void setB2BUnit(final B2BUnit value)
	{
		setB2BUnit( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.categories</code> attribute.
	 * @return the categories
	 */
	public List<Category> getCategories(final SessionContext ctx)
	{
		final List<Category> items = getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.BHGEANONYMOUSTOCATEGORYMAPPING,
			"Category",
			null,
			Utilities.getRelationOrderingOverride(BHGEANONYMOUSTOCATEGORYMAPPING_SRC_ORDERED, true),
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.categories</code> attribute.
	 * @return the categories
	 */
	public List<Category> getCategories()
	{
		return getCategories( getSession().getSessionContext() );
	}
	
	public long getCategoriesCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.BHGEANONYMOUSTOCATEGORYMAPPING,
			"Category",
			null
		);
	}
	
	public long getCategoriesCount()
	{
		return getCategoriesCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.categories</code> attribute. 
	 * @param value the categories
	 */
	public void setCategories(final SessionContext ctx, final List<Category> value)
	{
		setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.BHGEANONYMOUSTOCATEGORYMAPPING,
			null,
			value,
			Utilities.getRelationOrderingOverride(BHGEANONYMOUSTOCATEGORYMAPPING_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(BHGEANONYMOUSTOCATEGORYMAPPING_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.categories</code> attribute. 
	 * @param value the categories
	 */
	public void setCategories(final List<Category> value)
	{
		setCategories( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to categories. 
	 * @param value the item to add to categories
	 */
	public void addToCategories(final SessionContext ctx, final Category value)
	{
		addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.BHGEANONYMOUSTOCATEGORYMAPPING,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEANONYMOUSTOCATEGORYMAPPING_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(BHGEANONYMOUSTOCATEGORYMAPPING_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to categories. 
	 * @param value the item to add to categories
	 */
	public void addToCategories(final Category value)
	{
		addToCategories( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from categories. 
	 * @param value the item to remove from categories
	 */
	public void removeFromCategories(final SessionContext ctx, final Category value)
	{
		removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.BHGEANONYMOUSTOCATEGORYMAPPING,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEANONYMOUSTOCATEGORYMAPPING_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(BHGEANONYMOUSTOCATEGORYMAPPING_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from categories. 
	 * @param value the item to remove from categories
	 */
	public void removeFromCategories(final Category value)
	{
		removeFromCategories( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.country</code> attribute.
	 * @return the country - Country
	 */
	public Country getCountry(final SessionContext ctx)
	{
		return (Country)getProperty( ctx, COUNTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.country</code> attribute.
	 * @return the country - Country
	 */
	public Country getCountry()
	{
		return getCountry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.country</code> attribute. 
	 * @param value the country - Country
	 */
	public void setCountry(final SessionContext ctx, final Country value)
	{
		setProperty(ctx, COUNTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.country</code> attribute. 
	 * @param value the country - Country
	 */
	public void setCountry(final Country value)
	{
		setCountry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.defaultSalesOrg</code> attribute.
	 * @return the defaultSalesOrg - Default SalesOrg
	 */
	public Boolean isDefaultSalesOrg(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, DEFAULTSALESORG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.defaultSalesOrg</code> attribute.
	 * @return the defaultSalesOrg - Default SalesOrg
	 */
	public Boolean isDefaultSalesOrg()
	{
		return isDefaultSalesOrg( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.defaultSalesOrg</code> attribute. 
	 * @return the defaultSalesOrg - Default SalesOrg
	 */
	public boolean isDefaultSalesOrgAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isDefaultSalesOrg( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.defaultSalesOrg</code> attribute. 
	 * @return the defaultSalesOrg - Default SalesOrg
	 */
	public boolean isDefaultSalesOrgAsPrimitive()
	{
		return isDefaultSalesOrgAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.defaultSalesOrg</code> attribute. 
	 * @param value the defaultSalesOrg - Default SalesOrg
	 */
	public void setDefaultSalesOrg(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, DEFAULTSALESORG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.defaultSalesOrg</code> attribute. 
	 * @param value the defaultSalesOrg - Default SalesOrg
	 */
	public void setDefaultSalesOrg(final Boolean value)
	{
		setDefaultSalesOrg( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.defaultSalesOrg</code> attribute. 
	 * @param value the defaultSalesOrg - Default SalesOrg
	 */
	public void setDefaultSalesOrg(final SessionContext ctx, final boolean value)
	{
		setDefaultSalesOrg( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.defaultSalesOrg</code> attribute. 
	 * @param value the defaultSalesOrg - Default SalesOrg
	 */
	public void setDefaultSalesOrg(final boolean value)
	{
		setDefaultSalesOrg( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.distributionChannel</code> attribute.
	 * @return the distributionChannel - Distribution Channel
	 */
	public String getDistributionChannel(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DISTRIBUTIONCHANNEL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.distributionChannel</code> attribute.
	 * @return the distributionChannel - Distribution Channel
	 */
	public String getDistributionChannel()
	{
		return getDistributionChannel( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.distributionChannel</code> attribute. 
	 * @param value the distributionChannel - Distribution Channel
	 */
	public void setDistributionChannel(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DISTRIBUTIONCHANNEL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.distributionChannel</code> attribute. 
	 * @param value the distributionChannel - Distribution Channel
	 */
	public void setDistributionChannel(final String value)
	{
		setDistributionChannel( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.division</code> attribute.
	 * @return the division - Division
	 */
	public String getDivision(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DIVISION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.division</code> attribute.
	 * @return the division - Division
	 */
	public String getDivision()
	{
		return getDivision( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.division</code> attribute. 
	 * @param value the division - Division
	 */
	public void setDivision(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DIVISION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.division</code> attribute. 
	 * @param value the division - Division
	 */
	public void setDivision(final String value)
	{
		setDivision( getSession().getSessionContext(), value );
	}
	
	/**
	 * @deprecated since 2011, use {@link Utilities#getMarkModifiedOverride(de.hybris.platform.jalo.type.RelationType)
	 */
	@Override
	@Deprecated(since = "2105", forRemoval = true)
	public boolean isMarkModifiedDisabled(final Item referencedItem)
	{
		ComposedType relationSecondEnd0 = TypeManager.getInstance().getComposedType("Category");
		if(relationSecondEnd0.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(BHGEANONYMOUSTOCATEGORYMAPPING_MARKMODIFIED);
		}
		return true;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.plants</code> attribute.
	 * @return the plants - Plants List
	 */
	public Collection<String> getPlants(final SessionContext ctx)
	{
		Collection<String> coll = (Collection<String>)getProperty( ctx, PLANTS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.plants</code> attribute.
	 * @return the plants - Plants List
	 */
	public Collection<String> getPlants()
	{
		return getPlants( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.plants</code> attribute. 
	 * @param value the plants - Plants List
	 */
	public void setPlants(final SessionContext ctx, final Collection<String> value)
	{
		setProperty(ctx, PLANTS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.plants</code> attribute. 
	 * @param value the plants - Plants List
	 */
	public void setPlants(final Collection<String> value)
	{
		setPlants( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.salesOrg</code> attribute.
	 * @return the salesOrg - Sales Org
	 */
	public String getSalesOrg(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SALESORG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAnonymousUserCatalog.salesOrg</code> attribute.
	 * @return the salesOrg - Sales Org
	 */
	public String getSalesOrg()
	{
		return getSalesOrg( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.salesOrg</code> attribute. 
	 * @param value the salesOrg - Sales Org
	 */
	public void setSalesOrg(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SALESORG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAnonymousUserCatalog.salesOrg</code> attribute. 
	 * @param value the salesOrg - Sales Org
	 */
	public void setSalesOrg(final String value)
	{
		setSalesOrg( getSession().getSessionContext(), value );
	}
	
}
