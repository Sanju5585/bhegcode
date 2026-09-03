/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.catalog.constants.CatalogConstants;
import de.hybris.platform.catalog.jalo.classification.ClassificationClass;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.util.OneToManyHandler;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem GEEdgeProductLineMapping}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeProductLineMapping extends GenericItem
{
	/** Qualifier of the <code>GEEdgeProductLineMapping.productType</code> attribute **/
	public static final String PRODUCTTYPE = "productType";
	/** Qualifier of the <code>GEEdgeProductLineMapping.categories</code> attribute **/
	public static final String CATEGORIES = "categories";
	/**
	* {@link OneToManyHandler} for handling 1:n CATEGORIES's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<ClassificationClass> CATEGORIESHANDLER = new OneToManyHandler<ClassificationClass>(
	CatalogConstants.TC.CLASSIFICATIONCLASS,
	false,
	"productType",
	null,
	false,
	true,
	CollectionType.COLLECTION
	);
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(PRODUCTTYPE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProductLineMapping.categories</code> attribute.
	 * @return the categories
	 */
	public Collection<ClassificationClass> getCategories(final SessionContext ctx)
	{
		return CATEGORIESHANDLER.getValues( ctx, this );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProductLineMapping.categories</code> attribute.
	 * @return the categories
	 */
	public Collection<ClassificationClass> getCategories()
	{
		return getCategories( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProductLineMapping.categories</code> attribute. 
	 * @param value the categories
	 */
	public void setCategories(final SessionContext ctx, final Collection<ClassificationClass> value)
	{
		CATEGORIESHANDLER.setValues( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProductLineMapping.categories</code> attribute. 
	 * @param value the categories
	 */
	public void setCategories(final Collection<ClassificationClass> value)
	{
		setCategories( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to categories. 
	 * @param value the item to add to categories
	 */
	public void addToCategories(final SessionContext ctx, final ClassificationClass value)
	{
		CATEGORIESHANDLER.addValue( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to categories. 
	 * @param value the item to add to categories
	 */
	public void addToCategories(final ClassificationClass value)
	{
		addToCategories( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from categories. 
	 * @param value the item to remove from categories
	 */
	public void removeFromCategories(final SessionContext ctx, final ClassificationClass value)
	{
		CATEGORIESHANDLER.removeValue( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from categories. 
	 * @param value the item to remove from categories
	 */
	public void removeFromCategories(final ClassificationClass value)
	{
		removeFromCategories( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProductLineMapping.productType</code> attribute.
	 * @return the productType
	 */
	public EnumerationValue getProductType(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, PRODUCTTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeProductLineMapping.productType</code> attribute.
	 * @return the productType
	 */
	public EnumerationValue getProductType()
	{
		return getProductType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProductLineMapping.productType</code> attribute. 
	 * @param value the productType
	 */
	public void setProductType(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, PRODUCTTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeProductLineMapping.productType</code> attribute. 
	 * @param value the productType
	 */
	public void setProductType(final EnumerationValue value)
	{
		setProductType( getSession().getSessionContext(), value );
	}
	
}
