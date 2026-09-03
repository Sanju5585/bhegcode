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
import de.hybris.platform.jalo.security.Principal;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.util.Utilities;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem PrincipalRelation}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedPrincipalRelation extends GenericItem
{
	/** Qualifier of the <code>PrincipalRelation.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>PrincipalRelation.name</code> attribute **/
	public static final String NAME = "name";
	/** Qualifier of the <code>PrincipalRelation.description</code> attribute **/
	public static final String DESCRIPTION = "description";
	/** Qualifier of the <code>PrincipalRelation.sourceRelation</code> attribute **/
	public static final String SOURCERELATION = "sourceRelation";
	/** Relation ordering override parameter constants for Principal2PrincipalSourceRelation from ((bhgecore))*/
	protected static String PRINCIPAL2PRINCIPALSOURCERELATION_SRC_ORDERED = "relation.Principal2PrincipalSourceRelation.source.ordered";
	protected static String PRINCIPAL2PRINCIPALSOURCERELATION_TGT_ORDERED = "relation.Principal2PrincipalSourceRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for Principal2PrincipalSourceRelation from ((bhgecore))*/
	protected static String PRINCIPAL2PRINCIPALSOURCERELATION_MARKMODIFIED = "relation.Principal2PrincipalSourceRelation.markmodified";
	/** Qualifier of the <code>PrincipalRelation.targetRelation</code> attribute **/
	public static final String TARGETRELATION = "targetRelation";
	/** Relation ordering override parameter constants for Principal2PrincipalTargetRelation from ((bhgecore))*/
	protected static String PRINCIPAL2PRINCIPALTARGETRELATION_SRC_ORDERED = "relation.Principal2PrincipalTargetRelation.source.ordered";
	protected static String PRINCIPAL2PRINCIPALTARGETRELATION_TGT_ORDERED = "relation.Principal2PrincipalTargetRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for Principal2PrincipalTargetRelation from ((bhgecore))*/
	protected static String PRINCIPAL2PRINCIPALTARGETRELATION_MARKMODIFIED = "relation.Principal2PrincipalTargetRelation.markmodified";
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
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.code</code> attribute.
	 * @return the code
	 */
	public String getCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.code</code> attribute.
	 * @return the code
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.code</code> attribute. 
	 * @param value the code
	 */
	public void setCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.code</code> attribute. 
	 * @param value the code
	 */
	public void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.description</code> attribute.
	 * @return the description
	 */
	public String getDescription(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedPrincipalRelation.getDescription requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, DESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.description</code> attribute.
	 * @return the description
	 */
	public String getDescription()
	{
		return getDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.description</code> attribute. 
	 * @return the localized description
	 */
	public Map<Language,String> getAllDescription(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,DESCRIPTION,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.description</code> attribute. 
	 * @return the localized description
	 */
	public Map<Language,String> getAllDescription()
	{
		return getAllDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.description</code> attribute. 
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
			throw new JaloInvalidParameterException("GeneratedPrincipalRelation.setDescription requires a session language", 0 );
		}
		setLocalizedProperty(ctx, DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final String value)
	{
		setDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.description</code> attribute. 
	 * @param value the description
	 */
	public void setAllDescription(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.description</code> attribute. 
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
		ComposedType relationSecondEnd0 = TypeManager.getInstance().getComposedType("Principal");
		if(relationSecondEnd0.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALSOURCERELATION_MARKMODIFIED);
		}
		ComposedType relationSecondEnd1 = TypeManager.getInstance().getComposedType("Principal");
		if(relationSecondEnd1.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALTARGETRELATION_MARKMODIFIED);
		}
		return true;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.name</code> attribute.
	 * @return the name
	 */
	public String getName(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedPrincipalRelation.getName requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.name</code> attribute.
	 * @return the name
	 */
	public String getName()
	{
		return getName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.name</code> attribute. 
	 * @return the localized name
	 */
	public Map<Language,String> getAllName(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,NAME,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.name</code> attribute. 
	 * @return the localized name
	 */
	public Map<Language,String> getAllName()
	{
		return getAllName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedPrincipalRelation.setName requires a session language", 0 );
		}
		setLocalizedProperty(ctx, NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final String value)
	{
		setName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.name</code> attribute. 
	 * @param value the name
	 */
	public void setAllName(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.name</code> attribute. 
	 * @param value the name
	 */
	public void setAllName(final Map<Language,String> value)
	{
		setAllName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.sourceRelation</code> attribute.
	 * @return the sourceRelation
	 */
	public List<Principal> getSourceRelation(final SessionContext ctx)
	{
		final List<Principal> items = getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALSOURCERELATION,
			"Principal",
			null,
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_TGT_ORDERED, true)
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.sourceRelation</code> attribute.
	 * @return the sourceRelation
	 */
	public List<Principal> getSourceRelation()
	{
		return getSourceRelation( getSession().getSessionContext() );
	}
	
	public long getSourceRelationCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALSOURCERELATION,
			"Principal",
			null
		);
	}
	
	public long getSourceRelationCount()
	{
		return getSourceRelationCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.sourceRelation</code> attribute. 
	 * @param value the sourceRelation
	 */
	public void setSourceRelation(final SessionContext ctx, final List<Principal> value)
	{
		setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALSOURCERELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALSOURCERELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.sourceRelation</code> attribute. 
	 * @param value the sourceRelation
	 */
	public void setSourceRelation(final List<Principal> value)
	{
		setSourceRelation( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to sourceRelation. 
	 * @param value the item to add to sourceRelation
	 */
	public void addToSourceRelation(final SessionContext ctx, final Principal value)
	{
		addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALSOURCERELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALSOURCERELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to sourceRelation. 
	 * @param value the item to add to sourceRelation
	 */
	public void addToSourceRelation(final Principal value)
	{
		addToSourceRelation( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from sourceRelation. 
	 * @param value the item to remove from sourceRelation
	 */
	public void removeFromSourceRelation(final SessionContext ctx, final Principal value)
	{
		removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALSOURCERELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALSOURCERELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from sourceRelation. 
	 * @param value the item to remove from sourceRelation
	 */
	public void removeFromSourceRelation(final Principal value)
	{
		removeFromSourceRelation( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.targetRelation</code> attribute.
	 * @return the targetRelation
	 */
	public List<Principal> getTargetRelation(final SessionContext ctx)
	{
		final List<Principal> items = getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALTARGETRELATION,
			"Principal",
			null,
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_TGT_ORDERED, true)
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PrincipalRelation.targetRelation</code> attribute.
	 * @return the targetRelation
	 */
	public List<Principal> getTargetRelation()
	{
		return getTargetRelation( getSession().getSessionContext() );
	}
	
	public long getTargetRelationCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALTARGETRELATION,
			"Principal",
			null
		);
	}
	
	public long getTargetRelationCount()
	{
		return getTargetRelationCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.targetRelation</code> attribute. 
	 * @param value the targetRelation
	 */
	public void setTargetRelation(final SessionContext ctx, final List<Principal> value)
	{
		setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALTARGETRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALTARGETRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PrincipalRelation.targetRelation</code> attribute. 
	 * @param value the targetRelation
	 */
	public void setTargetRelation(final List<Principal> value)
	{
		setTargetRelation( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to targetRelation. 
	 * @param value the item to add to targetRelation
	 */
	public void addToTargetRelation(final SessionContext ctx, final Principal value)
	{
		addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALTARGETRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALTARGETRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to targetRelation. 
	 * @param value the item to add to targetRelation
	 */
	public void addToTargetRelation(final Principal value)
	{
		addToTargetRelation( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from targetRelation. 
	 * @param value the item to remove from targetRelation
	 */
	public void removeFromTargetRelation(final SessionContext ctx, final Principal value)
	{
		removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALTARGETRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALTARGETRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from targetRelation. 
	 * @param value the item to remove from targetRelation
	 */
	public void removeFromTargetRelation(final Principal value)
	{
		removeFromTargetRelation( getSession().getSessionContext(), value );
	}
	
}
