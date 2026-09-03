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
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.C2LManager;
import de.hybris.platform.jalo.c2l.Language;
import de.hybris.platform.jalo.order.AbstractOrderEntry;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.util.BidirectionalOneToManyHandler;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem Chemicals}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedChemicals extends GenericItem
{
	/** Qualifier of the <code>Chemicals.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>Chemicals.chemicalName</code> attribute **/
	public static final String CHEMICALNAME = "chemicalName";
	/** Qualifier of the <code>Chemicals.unitNumber</code> attribute **/
	public static final String UNITNUMBER = "unitNumber";
	/** Qualifier of the <code>Chemicals.isMSDSSupplied</code> attribute **/
	public static final String ISMSDSSUPPLIED = "isMSDSSupplied";
	/** Qualifier of the <code>Chemicals.notes</code> attribute **/
	public static final String NOTES = "notes";
	/** Qualifier of the <code>Chemicals.product</code> attribute **/
	public static final String PRODUCT = "product";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n PRODUCT's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedChemicals> PRODUCTHANDLER = new BidirectionalOneToManyHandler<GeneratedChemicals>(
	BhgeCoreConstants.TC.CHEMICALS,
	false,
	"product",
	null,
	false,
	true,
	CollectionType.LIST
	);
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CODE, AttributeMode.INITIAL);
		tmp.put(CHEMICALNAME, AttributeMode.INITIAL);
		tmp.put(UNITNUMBER, AttributeMode.INITIAL);
		tmp.put(ISMSDSSUPPLIED, AttributeMode.INITIAL);
		tmp.put(NOTES, AttributeMode.INITIAL);
		tmp.put(PRODUCT, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.chemicalName</code> attribute.
	 * @return the chemicalName
	 */
	public String getChemicalName(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedChemicals.getChemicalName requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, CHEMICALNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.chemicalName</code> attribute.
	 * @return the chemicalName
	 */
	public String getChemicalName()
	{
		return getChemicalName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.chemicalName</code> attribute. 
	 * @return the localized chemicalName
	 */
	public Map<Language,String> getAllChemicalName(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,CHEMICALNAME,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.chemicalName</code> attribute. 
	 * @return the localized chemicalName
	 */
	public Map<Language,String> getAllChemicalName()
	{
		return getAllChemicalName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.chemicalName</code> attribute. 
	 * @param value the chemicalName
	 */
	public void setChemicalName(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedChemicals.setChemicalName requires a session language", 0 );
		}
		setLocalizedProperty(ctx, CHEMICALNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.chemicalName</code> attribute. 
	 * @param value the chemicalName
	 */
	public void setChemicalName(final String value)
	{
		setChemicalName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.chemicalName</code> attribute. 
	 * @param value the chemicalName
	 */
	public void setAllChemicalName(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,CHEMICALNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.chemicalName</code> attribute. 
	 * @param value the chemicalName
	 */
	public void setAllChemicalName(final Map<Language,String> value)
	{
		setAllChemicalName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.code</code> attribute.
	 * @return the code
	 */
	public String getCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.code</code> attribute.
	 * @return the code
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.code</code> attribute. 
	 * @param value the code
	 */
	public void setCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.code</code> attribute. 
	 * @param value the code
	 */
	public void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes) throws JaloBusinessException
	{
		PRODUCTHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.isMSDSSupplied</code> attribute.
	 * @return the isMSDSSupplied
	 */
	public Boolean isIsMSDSSupplied(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISMSDSSUPPLIED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.isMSDSSupplied</code> attribute.
	 * @return the isMSDSSupplied
	 */
	public Boolean isIsMSDSSupplied()
	{
		return isIsMSDSSupplied( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.isMSDSSupplied</code> attribute. 
	 * @return the isMSDSSupplied
	 */
	public boolean isIsMSDSSuppliedAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsMSDSSupplied( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.isMSDSSupplied</code> attribute. 
	 * @return the isMSDSSupplied
	 */
	public boolean isIsMSDSSuppliedAsPrimitive()
	{
		return isIsMSDSSuppliedAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.isMSDSSupplied</code> attribute. 
	 * @param value the isMSDSSupplied
	 */
	public void setIsMSDSSupplied(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISMSDSSUPPLIED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.isMSDSSupplied</code> attribute. 
	 * @param value the isMSDSSupplied
	 */
	public void setIsMSDSSupplied(final Boolean value)
	{
		setIsMSDSSupplied( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.isMSDSSupplied</code> attribute. 
	 * @param value the isMSDSSupplied
	 */
	public void setIsMSDSSupplied(final SessionContext ctx, final boolean value)
	{
		setIsMSDSSupplied( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.isMSDSSupplied</code> attribute. 
	 * @param value the isMSDSSupplied
	 */
	public void setIsMSDSSupplied(final boolean value)
	{
		setIsMSDSSupplied( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.notes</code> attribute.
	 * @return the notes
	 */
	public String getNotes(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedChemicals.getNotes requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, NOTES);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.notes</code> attribute.
	 * @return the notes
	 */
	public String getNotes()
	{
		return getNotes( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.notes</code> attribute. 
	 * @return the localized notes
	 */
	public Map<Language,String> getAllNotes(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,NOTES,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.notes</code> attribute. 
	 * @return the localized notes
	 */
	public Map<Language,String> getAllNotes()
	{
		return getAllNotes( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.notes</code> attribute. 
	 * @param value the notes
	 */
	public void setNotes(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedChemicals.setNotes requires a session language", 0 );
		}
		setLocalizedProperty(ctx, NOTES,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.notes</code> attribute. 
	 * @param value the notes
	 */
	public void setNotes(final String value)
	{
		setNotes( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.notes</code> attribute. 
	 * @param value the notes
	 */
	public void setAllNotes(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,NOTES,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.notes</code> attribute. 
	 * @param value the notes
	 */
	public void setAllNotes(final Map<Language,String> value)
	{
		setAllNotes( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.product</code> attribute.
	 * @return the product
	 */
	public AbstractOrderEntry getProduct(final SessionContext ctx)
	{
		return (AbstractOrderEntry)getProperty( ctx, PRODUCT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.product</code> attribute.
	 * @return the product
	 */
	public AbstractOrderEntry getProduct()
	{
		return getProduct( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.product</code> attribute. 
	 * @param value the product
	 */
	public void setProduct(final SessionContext ctx, final AbstractOrderEntry value)
	{
		PRODUCTHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.product</code> attribute. 
	 * @param value the product
	 */
	public void setProduct(final AbstractOrderEntry value)
	{
		setProduct( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.unitNumber</code> attribute.
	 * @return the unitNumber
	 */
	public String getUnitNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, UNITNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Chemicals.unitNumber</code> attribute.
	 * @return the unitNumber
	 */
	public String getUnitNumber()
	{
		return getUnitNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.unitNumber</code> attribute. 
	 * @param value the unitNumber
	 */
	public void setUnitNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, UNITNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Chemicals.unitNumber</code> attribute. 
	 * @param value the unitNumber
	 */
	public void setUnitNumber(final String value)
	{
		setUnitNumber( getSession().getSessionContext(), value );
	}
	
}
