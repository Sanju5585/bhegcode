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
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.C2LManager;
import de.hybris.platform.jalo.c2l.Language;
import de.hybris.platform.jalo.product.Product;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.util.Utilities;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem ProductFailureMode}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedProductFailureMode extends GenericItem
{
	/** Qualifier of the <code>ProductFailureMode.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>ProductFailureMode.description</code> attribute **/
	public static final String DESCRIPTION = "description";
	/** Qualifier of the <code>ProductFailureMode.products</code> attribute **/
	public static final String PRODUCTS = "products";
	/** Relation ordering override parameter constants for Product2FailureReason from ((bhgecore))*/
	protected static String PRODUCT2FAILUREREASON_SRC_ORDERED = "relation.Product2FailureReason.source.ordered";
	protected static String PRODUCT2FAILUREREASON_TGT_ORDERED = "relation.Product2FailureReason.target.ordered";
	/** Relation disable markmodifed parameter constants for Product2FailureReason from ((bhgecore))*/
	protected static String PRODUCT2FAILUREREASON_MARKMODIFIED = "relation.Product2FailureReason.markmodified";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CODE, AttributeMode.INITIAL);
		tmp.put(DESCRIPTION, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductFailureMode.code</code> attribute.
	 * @return the code
	 */
	public String getCode(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedProductFailureMode.getCode requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductFailureMode.code</code> attribute.
	 * @return the code
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductFailureMode.code</code> attribute. 
	 * @return the localized code
	 */
	public Map<Language,String> getAllCode(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,CODE,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductFailureMode.code</code> attribute. 
	 * @return the localized code
	 */
	public Map<Language,String> getAllCode()
	{
		return getAllCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductFailureMode.code</code> attribute. 
	 * @param value the code
	 */
	public void setCode(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedProductFailureMode.setCode requires a session language", 0 );
		}
		setLocalizedProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductFailureMode.code</code> attribute. 
	 * @param value the code
	 */
	public void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductFailureMode.code</code> attribute. 
	 * @param value the code
	 */
	public void setAllCode(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductFailureMode.code</code> attribute. 
	 * @param value the code
	 */
	public void setAllCode(final Map<Language,String> value)
	{
		setAllCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductFailureMode.description</code> attribute.
	 * @return the description
	 */
	public String getDescription(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedProductFailureMode.getDescription requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, DESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductFailureMode.description</code> attribute.
	 * @return the description
	 */
	public String getDescription()
	{
		return getDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductFailureMode.description</code> attribute. 
	 * @return the localized description
	 */
	public Map<Language,String> getAllDescription(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,DESCRIPTION,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductFailureMode.description</code> attribute. 
	 * @return the localized description
	 */
	public Map<Language,String> getAllDescription()
	{
		return getAllDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductFailureMode.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedProductFailureMode.setDescription requires a session language", 0 );
		}
		setLocalizedProperty(ctx, DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductFailureMode.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final String value)
	{
		setDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductFailureMode.description</code> attribute. 
	 * @param value the description
	 */
	public void setAllDescription(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductFailureMode.description</code> attribute. 
	 * @param value the description
	 */
	public void setAllDescription(final Map<Language,String> value)
	{
		setAllDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * @deprecated since 2011, use {@link Utilities#getMarkModifiedOverride(de.hybris.platform.jalo.type.RelationType)
	 */
	@Override
	@Deprecated(since = "2105", forRemoval = true)
	public boolean isMarkModifiedDisabled(final Item referencedItem)
	{
		ComposedType relationSecondEnd0 = TypeManager.getInstance().getComposedType("Product");
		if(relationSecondEnd0.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(PRODUCT2FAILUREREASON_MARKMODIFIED);
		}
		return true;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductFailureMode.products</code> attribute.
	 * @return the products
	 */
	public List<Product> getProducts(final SessionContext ctx)
	{
		final List<Product> items = getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2FAILUREREASON,
			"Product",
			null,
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_TGT_ORDERED, true)
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductFailureMode.products</code> attribute.
	 * @return the products
	 */
	public List<Product> getProducts()
	{
		return getProducts( getSession().getSessionContext() );
	}
	
	public long getProductsCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2FAILUREREASON,
			"Product",
			null
		);
	}
	
	public long getProductsCount()
	{
		return getProductsCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductFailureMode.products</code> attribute. 
	 * @param value the products
	 */
	public void setProducts(final SessionContext ctx, final List<Product> value)
	{
		setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2FAILUREREASON,
			null,
			value,
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRODUCT2FAILUREREASON_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductFailureMode.products</code> attribute. 
	 * @param value the products
	 */
	public void setProducts(final List<Product> value)
	{
		setProducts( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to products. 
	 * @param value the item to add to products
	 */
	public void addToProducts(final SessionContext ctx, final Product value)
	{
		addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2FAILUREREASON,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRODUCT2FAILUREREASON_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to products. 
	 * @param value the item to add to products
	 */
	public void addToProducts(final Product value)
	{
		addToProducts( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from products. 
	 * @param value the item to remove from products
	 */
	public void removeFromProducts(final SessionContext ctx, final Product value)
	{
		removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRODUCT2FAILUREREASON,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRODUCT2FAILUREREASON_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from products. 
	 * @param value the item to remove from products
	 */
	public void removeFromProducts(final Product value)
	{
		removeFromProducts( getSession().getSessionContext(), value );
	}
	
}
