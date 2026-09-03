/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.hybris.ge.edge.core.jalo.type;

import com.bhge.core.constants.BhgeCoreConstants;
import com.hybris.ge.edge.core.jalo.type.BHGEHazardousInfo;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.util.BidirectionalOneToManyHandler;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.BHGEChemicalDetails BHGEChemicalDetails}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEChemicalDetails extends GenericItem
{
	/** Qualifier of the <code>BHGEChemicalDetails.chemicalName</code> attribute **/
	public static final String CHEMICALNAME = "chemicalName";
	/** Qualifier of the <code>BHGEChemicalDetails.un</code> attribute **/
	public static final String UN = "un";
	/** Qualifier of the <code>BHGEChemicalDetails.isMsdnSupplied</code> attribute **/
	public static final String ISMSDNSUPPLIED = "isMsdnSupplied";
	/** Qualifier of the <code>BHGEChemicalDetails.chemicalNotes</code> attribute **/
	public static final String CHEMICALNOTES = "chemicalNotes";
	/** Qualifier of the <code>BHGEChemicalDetails.rmaForm</code> attribute **/
	public static final String RMAFORM = "rmaForm";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n RMAFORM's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedBHGEChemicalDetails> RMAFORMHANDLER = new BidirectionalOneToManyHandler<GeneratedBHGEChemicalDetails>(
	BhgeCoreConstants.TC.BHGECHEMICALDETAILS,
	false,
	"rmaForm",
	null,
	false,
	true,
	CollectionType.COLLECTION
	);
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CHEMICALNAME, AttributeMode.INITIAL);
		tmp.put(UN, AttributeMode.INITIAL);
		tmp.put(ISMSDNSUPPLIED, AttributeMode.INITIAL);
		tmp.put(CHEMICALNOTES, AttributeMode.INITIAL);
		tmp.put(RMAFORM, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEChemicalDetails.chemicalName</code> attribute.
	 * @return the chemicalName
	 */
	public String getChemicalName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CHEMICALNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEChemicalDetails.chemicalName</code> attribute.
	 * @return the chemicalName
	 */
	public String getChemicalName()
	{
		return getChemicalName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEChemicalDetails.chemicalName</code> attribute. 
	 * @param value the chemicalName
	 */
	public void setChemicalName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CHEMICALNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEChemicalDetails.chemicalName</code> attribute. 
	 * @param value the chemicalName
	 */
	public void setChemicalName(final String value)
	{
		setChemicalName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEChemicalDetails.chemicalNotes</code> attribute.
	 * @return the chemicalNotes
	 */
	public String getChemicalNotes(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CHEMICALNOTES);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEChemicalDetails.chemicalNotes</code> attribute.
	 * @return the chemicalNotes
	 */
	public String getChemicalNotes()
	{
		return getChemicalNotes( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEChemicalDetails.chemicalNotes</code> attribute. 
	 * @param value the chemicalNotes
	 */
	public void setChemicalNotes(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CHEMICALNOTES,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEChemicalDetails.chemicalNotes</code> attribute. 
	 * @param value the chemicalNotes
	 */
	public void setChemicalNotes(final String value)
	{
		setChemicalNotes( getSession().getSessionContext(), value );
	}
	
	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes) throws JaloBusinessException
	{
		RMAFORMHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEChemicalDetails.isMsdnSupplied</code> attribute.
	 * @return the isMsdnSupplied
	 */
	public Boolean isIsMsdnSupplied(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISMSDNSUPPLIED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEChemicalDetails.isMsdnSupplied</code> attribute.
	 * @return the isMsdnSupplied
	 */
	public Boolean isIsMsdnSupplied()
	{
		return isIsMsdnSupplied( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEChemicalDetails.isMsdnSupplied</code> attribute. 
	 * @return the isMsdnSupplied
	 */
	public boolean isIsMsdnSuppliedAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsMsdnSupplied( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEChemicalDetails.isMsdnSupplied</code> attribute. 
	 * @return the isMsdnSupplied
	 */
	public boolean isIsMsdnSuppliedAsPrimitive()
	{
		return isIsMsdnSuppliedAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEChemicalDetails.isMsdnSupplied</code> attribute. 
	 * @param value the isMsdnSupplied
	 */
	public void setIsMsdnSupplied(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISMSDNSUPPLIED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEChemicalDetails.isMsdnSupplied</code> attribute. 
	 * @param value the isMsdnSupplied
	 */
	public void setIsMsdnSupplied(final Boolean value)
	{
		setIsMsdnSupplied( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEChemicalDetails.isMsdnSupplied</code> attribute. 
	 * @param value the isMsdnSupplied
	 */
	public void setIsMsdnSupplied(final SessionContext ctx, final boolean value)
	{
		setIsMsdnSupplied( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEChemicalDetails.isMsdnSupplied</code> attribute. 
	 * @param value the isMsdnSupplied
	 */
	public void setIsMsdnSupplied(final boolean value)
	{
		setIsMsdnSupplied( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEChemicalDetails.rmaForm</code> attribute.
	 * @return the rmaForm
	 */
	public BHGEHazardousInfo getRmaForm(final SessionContext ctx)
	{
		return (BHGEHazardousInfo)getProperty( ctx, RMAFORM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEChemicalDetails.rmaForm</code> attribute.
	 * @return the rmaForm
	 */
	public BHGEHazardousInfo getRmaForm()
	{
		return getRmaForm( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEChemicalDetails.rmaForm</code> attribute. 
	 * @param value the rmaForm
	 */
	public void setRmaForm(final SessionContext ctx, final BHGEHazardousInfo value)
	{
		RMAFORMHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEChemicalDetails.rmaForm</code> attribute. 
	 * @param value the rmaForm
	 */
	public void setRmaForm(final BHGEHazardousInfo value)
	{
		setRmaForm( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEChemicalDetails.un</code> attribute.
	 * @return the un
	 */
	public String getUn(final SessionContext ctx)
	{
		return (String)getProperty( ctx, UN);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEChemicalDetails.un</code> attribute.
	 * @return the un
	 */
	public String getUn()
	{
		return getUn( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEChemicalDetails.un</code> attribute. 
	 * @param value the un
	 */
	public void setUn(final SessionContext ctx, final String value)
	{
		setProperty(ctx, UN,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEChemicalDetails.un</code> attribute. 
	 * @param value the un
	 */
	public void setUn(final String value)
	{
		setUn( getSession().getSessionContext(), value );
	}
	
}
