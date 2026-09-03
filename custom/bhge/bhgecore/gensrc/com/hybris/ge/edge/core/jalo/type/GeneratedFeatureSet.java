/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.hybris.ge.edge.core.jalo.type;

import com.bhge.core.constants.BhgeCoreConstants;
import com.hybris.ge.edge.core.jalo.type.GESalesAreaPlantFeatureMapping;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.util.Utilities;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.FeatureSet FeatureSet}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedFeatureSet extends GenericItem
{
	/** Qualifier of the <code>FeatureSet.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>FeatureSet.name</code> attribute **/
	public static final String NAME = "name";
	/** Qualifier of the <code>FeatureSet.description</code> attribute **/
	public static final String DESCRIPTION = "description";
	/** Qualifier of the <code>FeatureSet.gESalesAreaPlantFeatureMapping</code> attribute **/
	public static final String GESALESAREAPLANTFEATUREMAPPING = "gESalesAreaPlantFeatureMapping";
	/** Relation ordering override parameter constants for GESalesAreaPlantFeatureMapping2FeatureSet from ((bhgecore))*/
	protected static String GESALESAREAPLANTFEATUREMAPPING2FEATURESET_SRC_ORDERED = "relation.GESalesAreaPlantFeatureMapping2FeatureSet.source.ordered";
	protected static String GESALESAREAPLANTFEATUREMAPPING2FEATURESET_TGT_ORDERED = "relation.GESalesAreaPlantFeatureMapping2FeatureSet.target.ordered";
	/** Relation disable markmodifed parameter constants for GESalesAreaPlantFeatureMapping2FeatureSet from ((bhgecore))*/
	protected static String GESALESAREAPLANTFEATUREMAPPING2FEATURESET_MARKMODIFIED = "relation.GESalesAreaPlantFeatureMapping2FeatureSet.markmodified";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CODE, AttributeMode.INITIAL);
		tmp.put(NAME, AttributeMode.INITIAL);
		tmp.put(DESCRIPTION, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FeatureSet.code</code> attribute.
	 * @return the code
	 */
	public String getCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FeatureSet.code</code> attribute.
	 * @return the code
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FeatureSet.code</code> attribute. 
	 * @param value the code
	 */
	public void setCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FeatureSet.code</code> attribute. 
	 * @param value the code
	 */
	public void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FeatureSet.description</code> attribute.
	 * @return the description
	 */
	public String getDescription(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FeatureSet.description</code> attribute.
	 * @return the description
	 */
	public String getDescription()
	{
		return getDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FeatureSet.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FeatureSet.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final String value)
	{
		setDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FeatureSet.gESalesAreaPlantFeatureMapping</code> attribute.
	 * @return the gESalesAreaPlantFeatureMapping
	 */
	public Collection<GESalesAreaPlantFeatureMapping> getGESalesAreaPlantFeatureMapping(final SessionContext ctx)
	{
		final List<GESalesAreaPlantFeatureMapping> items = getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.GESALESAREAPLANTFEATUREMAPPING2FEATURESET,
			"GESalesAreaPlantFeatureMapping",
			null,
			false,
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FeatureSet.gESalesAreaPlantFeatureMapping</code> attribute.
	 * @return the gESalesAreaPlantFeatureMapping
	 */
	public Collection<GESalesAreaPlantFeatureMapping> getGESalesAreaPlantFeatureMapping()
	{
		return getGESalesAreaPlantFeatureMapping( getSession().getSessionContext() );
	}
	
	public long getGESalesAreaPlantFeatureMappingCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.GESALESAREAPLANTFEATUREMAPPING2FEATURESET,
			"GESalesAreaPlantFeatureMapping",
			null
		);
	}
	
	public long getGESalesAreaPlantFeatureMappingCount()
	{
		return getGESalesAreaPlantFeatureMappingCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FeatureSet.gESalesAreaPlantFeatureMapping</code> attribute. 
	 * @param value the gESalesAreaPlantFeatureMapping
	 */
	public void setGESalesAreaPlantFeatureMapping(final SessionContext ctx, final Collection<GESalesAreaPlantFeatureMapping> value)
	{
		setLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.GESALESAREAPLANTFEATUREMAPPING2FEATURESET,
			null,
			value,
			false,
			false,
			Utilities.getMarkModifiedOverride(GESALESAREAPLANTFEATUREMAPPING2FEATURESET_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FeatureSet.gESalesAreaPlantFeatureMapping</code> attribute. 
	 * @param value the gESalesAreaPlantFeatureMapping
	 */
	public void setGESalesAreaPlantFeatureMapping(final Collection<GESalesAreaPlantFeatureMapping> value)
	{
		setGESalesAreaPlantFeatureMapping( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to gESalesAreaPlantFeatureMapping. 
	 * @param value the item to add to gESalesAreaPlantFeatureMapping
	 */
	public void addToGESalesAreaPlantFeatureMapping(final SessionContext ctx, final GESalesAreaPlantFeatureMapping value)
	{
		addLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.GESALESAREAPLANTFEATUREMAPPING2FEATURESET,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(GESALESAREAPLANTFEATUREMAPPING2FEATURESET_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to gESalesAreaPlantFeatureMapping. 
	 * @param value the item to add to gESalesAreaPlantFeatureMapping
	 */
	public void addToGESalesAreaPlantFeatureMapping(final GESalesAreaPlantFeatureMapping value)
	{
		addToGESalesAreaPlantFeatureMapping( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from gESalesAreaPlantFeatureMapping. 
	 * @param value the item to remove from gESalesAreaPlantFeatureMapping
	 */
	public void removeFromGESalesAreaPlantFeatureMapping(final SessionContext ctx, final GESalesAreaPlantFeatureMapping value)
	{
		removeLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.GESALESAREAPLANTFEATUREMAPPING2FEATURESET,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(GESALESAREAPLANTFEATUREMAPPING2FEATURESET_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from gESalesAreaPlantFeatureMapping. 
	 * @param value the item to remove from gESalesAreaPlantFeatureMapping
	 */
	public void removeFromGESalesAreaPlantFeatureMapping(final GESalesAreaPlantFeatureMapping value)
	{
		removeFromGESalesAreaPlantFeatureMapping( getSession().getSessionContext(), value );
	}
	
	/**
	 * @deprecated since 2011, use {@link Utilities#getMarkModifiedOverride(de.hybris.platform.jalo.type.RelationType)
	 */
	@Override
	@Deprecated(since = "2105", forRemoval = true)
	public boolean isMarkModifiedDisabled(final Item referencedItem)
	{
		ComposedType relationSecondEnd0 = TypeManager.getInstance().getComposedType("GESalesAreaPlantFeatureMapping");
		if(relationSecondEnd0.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(GESALESAREAPLANTFEATUREMAPPING2FEATURESET_MARKMODIFIED);
		}
		return true;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FeatureSet.name</code> attribute.
	 * @return the name
	 */
	public String getName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FeatureSet.name</code> attribute.
	 * @return the name
	 */
	public String getName()
	{
		return getName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FeatureSet.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FeatureSet.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final String value)
	{
		setName( getSession().getSessionContext(), value );
	}
	
}
