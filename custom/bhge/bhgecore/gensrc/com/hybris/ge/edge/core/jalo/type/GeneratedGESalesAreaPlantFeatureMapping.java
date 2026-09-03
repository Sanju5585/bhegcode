/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.hybris.ge.edge.core.jalo.type;

import com.bhge.core.constants.BhgeCoreConstants;
import com.hybris.ge.edge.core.jalo.model.GEEdgeSAPPlantLogSysOrg;
import com.hybris.ge.edge.core.jalo.type.FeatureSet;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.util.OneToManyHandler;
import de.hybris.platform.util.Utilities;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.GESalesAreaPlantFeatureMapping GESalesAreaPlantFeatureMapping}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGESalesAreaPlantFeatureMapping extends GenericItem
{
	/** Qualifier of the <code>GESalesAreaPlantFeatureMapping.isEnabled</code> attribute **/
	public static final String ISENABLED = "isEnabled";
	/** Qualifier of the <code>GESalesAreaPlantFeatureMapping.sapPlantLogSysOrg</code> attribute **/
	public static final String SAPPLANTLOGSYSORG = "sapPlantLogSysOrg";
	/** Qualifier of the <code>GESalesAreaPlantFeatureMapping.featureSet</code> attribute **/
	public static final String FEATURESET = "featureSet";
	/** Relation ordering override parameter constants for GESalesAreaPlantFeatureMapping2FeatureSet from ((bhgecore))*/
	protected static String GESALESAREAPLANTFEATUREMAPPING2FEATURESET_SRC_ORDERED = "relation.GESalesAreaPlantFeatureMapping2FeatureSet.source.ordered";
	protected static String GESALESAREAPLANTFEATUREMAPPING2FEATURESET_TGT_ORDERED = "relation.GESalesAreaPlantFeatureMapping2FeatureSet.target.ordered";
	/** Relation disable markmodifed parameter constants for GESalesAreaPlantFeatureMapping2FeatureSet from ((bhgecore))*/
	protected static String GESALESAREAPLANTFEATUREMAPPING2FEATURESET_MARKMODIFIED = "relation.GESalesAreaPlantFeatureMapping2FeatureSet.markmodified";
	/**
	* {@link OneToManyHandler} for handling 1:n SAPPLANTLOGSYSORG's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<GEEdgeSAPPlantLogSysOrg> SAPPLANTLOGSYSORGHANDLER = new OneToManyHandler<GEEdgeSAPPlantLogSysOrg>(
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
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(ISENABLED, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GESalesAreaPlantFeatureMapping.featureSet</code> attribute.
	 * @return the featureSet
	 */
	public Set<FeatureSet> getFeatureSet(final SessionContext ctx)
	{
		final List<FeatureSet> items = getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.GESALESAREAPLANTFEATUREMAPPING2FEATURESET,
			"FeatureSet",
			null,
			false,
			false
		);
		return new LinkedHashSet<FeatureSet>(items);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GESalesAreaPlantFeatureMapping.featureSet</code> attribute.
	 * @return the featureSet
	 */
	public Set<FeatureSet> getFeatureSet()
	{
		return getFeatureSet( getSession().getSessionContext() );
	}
	
	public long getFeatureSetCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.GESALESAREAPLANTFEATUREMAPPING2FEATURESET,
			"FeatureSet",
			null
		);
	}
	
	public long getFeatureSetCount()
	{
		return getFeatureSetCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GESalesAreaPlantFeatureMapping.featureSet</code> attribute. 
	 * @param value the featureSet
	 */
	public void setFeatureSet(final SessionContext ctx, final Set<FeatureSet> value)
	{
		setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.GESALESAREAPLANTFEATUREMAPPING2FEATURESET,
			null,
			value,
			false,
			false,
			Utilities.getMarkModifiedOverride(GESALESAREAPLANTFEATUREMAPPING2FEATURESET_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GESalesAreaPlantFeatureMapping.featureSet</code> attribute. 
	 * @param value the featureSet
	 */
	public void setFeatureSet(final Set<FeatureSet> value)
	{
		setFeatureSet( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to featureSet. 
	 * @param value the item to add to featureSet
	 */
	public void addToFeatureSet(final SessionContext ctx, final FeatureSet value)
	{
		addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.GESALESAREAPLANTFEATUREMAPPING2FEATURESET,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(GESALESAREAPLANTFEATUREMAPPING2FEATURESET_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to featureSet. 
	 * @param value the item to add to featureSet
	 */
	public void addToFeatureSet(final FeatureSet value)
	{
		addToFeatureSet( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from featureSet. 
	 * @param value the item to remove from featureSet
	 */
	public void removeFromFeatureSet(final SessionContext ctx, final FeatureSet value)
	{
		removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.GESALESAREAPLANTFEATUREMAPPING2FEATURESET,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(GESALESAREAPLANTFEATUREMAPPING2FEATURESET_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from featureSet. 
	 * @param value the item to remove from featureSet
	 */
	public void removeFromFeatureSet(final FeatureSet value)
	{
		removeFromFeatureSet( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GESalesAreaPlantFeatureMapping.isEnabled</code> attribute.
	 * @return the isEnabled
	 */
	public Boolean isIsEnabled(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISENABLED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GESalesAreaPlantFeatureMapping.isEnabled</code> attribute.
	 * @return the isEnabled
	 */
	public Boolean isIsEnabled()
	{
		return isIsEnabled( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GESalesAreaPlantFeatureMapping.isEnabled</code> attribute. 
	 * @return the isEnabled
	 */
	public boolean isIsEnabledAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsEnabled( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GESalesAreaPlantFeatureMapping.isEnabled</code> attribute. 
	 * @return the isEnabled
	 */
	public boolean isIsEnabledAsPrimitive()
	{
		return isIsEnabledAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GESalesAreaPlantFeatureMapping.isEnabled</code> attribute. 
	 * @param value the isEnabled
	 */
	public void setIsEnabled(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISENABLED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GESalesAreaPlantFeatureMapping.isEnabled</code> attribute. 
	 * @param value the isEnabled
	 */
	public void setIsEnabled(final Boolean value)
	{
		setIsEnabled( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GESalesAreaPlantFeatureMapping.isEnabled</code> attribute. 
	 * @param value the isEnabled
	 */
	public void setIsEnabled(final SessionContext ctx, final boolean value)
	{
		setIsEnabled( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GESalesAreaPlantFeatureMapping.isEnabled</code> attribute. 
	 * @param value the isEnabled
	 */
	public void setIsEnabled(final boolean value)
	{
		setIsEnabled( getSession().getSessionContext(), value );
	}
	
	/**
	 * @deprecated since 2011, use {@link Utilities#getMarkModifiedOverride(de.hybris.platform.jalo.type.RelationType)
	 */
	@Override
	@Deprecated(since = "2105", forRemoval = true)
	public boolean isMarkModifiedDisabled(final Item referencedItem)
	{
		ComposedType relationSecondEnd0 = TypeManager.getInstance().getComposedType("FeatureSet");
		if(relationSecondEnd0.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(GESALESAREAPLANTFEATUREMAPPING2FEATURESET_MARKMODIFIED);
		}
		return true;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GESalesAreaPlantFeatureMapping.sapPlantLogSysOrg</code> attribute.
	 * @return the sapPlantLogSysOrg
	 */
	public Set<GEEdgeSAPPlantLogSysOrg> getSapPlantLogSysOrg(final SessionContext ctx)
	{
		return (Set<GEEdgeSAPPlantLogSysOrg>)SAPPLANTLOGSYSORGHANDLER.getValues( ctx, this );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GESalesAreaPlantFeatureMapping.sapPlantLogSysOrg</code> attribute.
	 * @return the sapPlantLogSysOrg
	 */
	public Set<GEEdgeSAPPlantLogSysOrg> getSapPlantLogSysOrg()
	{
		return getSapPlantLogSysOrg( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GESalesAreaPlantFeatureMapping.sapPlantLogSysOrg</code> attribute. 
	 * @param value the sapPlantLogSysOrg
	 */
	public void setSapPlantLogSysOrg(final SessionContext ctx, final Set<GEEdgeSAPPlantLogSysOrg> value)
	{
		SAPPLANTLOGSYSORGHANDLER.setValues( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GESalesAreaPlantFeatureMapping.sapPlantLogSysOrg</code> attribute. 
	 * @param value the sapPlantLogSysOrg
	 */
	public void setSapPlantLogSysOrg(final Set<GEEdgeSAPPlantLogSysOrg> value)
	{
		setSapPlantLogSysOrg( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to sapPlantLogSysOrg. 
	 * @param value the item to add to sapPlantLogSysOrg
	 */
	public void addToSapPlantLogSysOrg(final SessionContext ctx, final GEEdgeSAPPlantLogSysOrg value)
	{
		SAPPLANTLOGSYSORGHANDLER.addValue( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to sapPlantLogSysOrg. 
	 * @param value the item to add to sapPlantLogSysOrg
	 */
	public void addToSapPlantLogSysOrg(final GEEdgeSAPPlantLogSysOrg value)
	{
		addToSapPlantLogSysOrg( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from sapPlantLogSysOrg. 
	 * @param value the item to remove from sapPlantLogSysOrg
	 */
	public void removeFromSapPlantLogSysOrg(final SessionContext ctx, final GEEdgeSAPPlantLogSysOrg value)
	{
		SAPPLANTLOGSYSORGHANDLER.removeValue( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from sapPlantLogSysOrg. 
	 * @param value the item to remove from sapPlantLogSysOrg
	 */
	public void removeFromSapPlantLogSysOrg(final GEEdgeSAPPlantLogSysOrg value)
	{
		removeFromSapPlantLogSysOrg( getSession().getSessionContext(), value );
	}
	
}
