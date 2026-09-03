/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.hybris.ge.edge.core.jalo.type;

import com.bhge.core.constants.BhgeCoreConstants;
import com.hybris.ge.edge.core.jalo.type.BHGEChemicalDetails;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import de.hybris.platform.jalo.media.Media;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.util.OneToManyHandler;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.BHGEHazardousInfo BHGEHazardousInfo}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEHazardousInfo extends GenericItem
{
	/** Qualifier of the <code>BHGEHazardousInfo.hazardType</code> attribute **/
	public static final String HAZARDTYPE = "hazardType";
	/** Qualifier of the <code>BHGEHazardousInfo.hazardInfo</code> attribute **/
	public static final String HAZARDINFO = "hazardInfo";
	/** Qualifier of the <code>BHGEHazardousInfo.hazardDescription</code> attribute **/
	public static final String HAZARDDESCRIPTION = "hazardDescription";
	/** Qualifier of the <code>BHGEHazardousInfo.declerationA</code> attribute **/
	public static final String DECLERATIONA = "declerationA";
	/** Qualifier of the <code>BHGEHazardousInfo.declerationB</code> attribute **/
	public static final String DECLERATIONB = "declerationB";
	/** Qualifier of the <code>BHGEHazardousInfo.contaminationMethod</code> attribute **/
	public static final String CONTAMINATIONMETHOD = "contaminationMethod";
	/** Qualifier of the <code>BHGEHazardousInfo.Decontaminated</code> attribute **/
	public static final String DECONTAMINATED = "Decontaminated";
	/** Qualifier of the <code>BHGEHazardousInfo.containsFluids</code> attribute **/
	public static final String CONTAINSFLUIDS = "containsFluids";
	/** Qualifier of the <code>BHGEHazardousInfo.isOther</code> attribute **/
	public static final String ISOTHER = "isOther";
	/** Qualifier of the <code>BHGEHazardousInfo.fluidText</code> attribute **/
	public static final String FLUIDTEXT = "fluidText";
	/** Qualifier of the <code>BHGEHazardousInfo.otherText</code> attribute **/
	public static final String OTHERTEXT = "otherText";
	/** Qualifier of the <code>BHGEHazardousInfo.HazardformAttachments</code> attribute **/
	public static final String HAZARDFORMATTACHMENTS = "HazardformAttachments";
	/** Qualifier of the <code>BHGEHazardousInfo.bhgeChemicalDetails</code> attribute **/
	public static final String BHGECHEMICALDETAILS = "bhgeChemicalDetails";
	/**
	* {@link OneToManyHandler} for handling 1:n BHGECHEMICALDETAILS's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<BHGEChemicalDetails> BHGECHEMICALDETAILSHANDLER = new OneToManyHandler<BHGEChemicalDetails>(
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
		tmp.put(HAZARDTYPE, AttributeMode.INITIAL);
		tmp.put(HAZARDINFO, AttributeMode.INITIAL);
		tmp.put(HAZARDDESCRIPTION, AttributeMode.INITIAL);
		tmp.put(DECLERATIONA, AttributeMode.INITIAL);
		tmp.put(DECLERATIONB, AttributeMode.INITIAL);
		tmp.put(CONTAMINATIONMETHOD, AttributeMode.INITIAL);
		tmp.put(DECONTAMINATED, AttributeMode.INITIAL);
		tmp.put(CONTAINSFLUIDS, AttributeMode.INITIAL);
		tmp.put(ISOTHER, AttributeMode.INITIAL);
		tmp.put(FLUIDTEXT, AttributeMode.INITIAL);
		tmp.put(OTHERTEXT, AttributeMode.INITIAL);
		tmp.put(HAZARDFORMATTACHMENTS, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.bhgeChemicalDetails</code> attribute.
	 * @return the bhgeChemicalDetails
	 */
	public Collection<BHGEChemicalDetails> getBhgeChemicalDetails(final SessionContext ctx)
	{
		return BHGECHEMICALDETAILSHANDLER.getValues( ctx, this );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.bhgeChemicalDetails</code> attribute.
	 * @return the bhgeChemicalDetails
	 */
	public Collection<BHGEChemicalDetails> getBhgeChemicalDetails()
	{
		return getBhgeChemicalDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.bhgeChemicalDetails</code> attribute. 
	 * @param value the bhgeChemicalDetails
	 */
	public void setBhgeChemicalDetails(final SessionContext ctx, final Collection<BHGEChemicalDetails> value)
	{
		BHGECHEMICALDETAILSHANDLER.setValues( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.bhgeChemicalDetails</code> attribute. 
	 * @param value the bhgeChemicalDetails
	 */
	public void setBhgeChemicalDetails(final Collection<BHGEChemicalDetails> value)
	{
		setBhgeChemicalDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeChemicalDetails. 
	 * @param value the item to add to bhgeChemicalDetails
	 */
	public void addToBhgeChemicalDetails(final SessionContext ctx, final BHGEChemicalDetails value)
	{
		BHGECHEMICALDETAILSHANDLER.addValue( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeChemicalDetails. 
	 * @param value the item to add to bhgeChemicalDetails
	 */
	public void addToBhgeChemicalDetails(final BHGEChemicalDetails value)
	{
		addToBhgeChemicalDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeChemicalDetails. 
	 * @param value the item to remove from bhgeChemicalDetails
	 */
	public void removeFromBhgeChemicalDetails(final SessionContext ctx, final BHGEChemicalDetails value)
	{
		BHGECHEMICALDETAILSHANDLER.removeValue( ctx, this, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeChemicalDetails. 
	 * @param value the item to remove from bhgeChemicalDetails
	 */
	public void removeFromBhgeChemicalDetails(final BHGEChemicalDetails value)
	{
		removeFromBhgeChemicalDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.containsFluids</code> attribute.
	 * @return the containsFluids
	 */
	public Boolean isContainsFluids(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, CONTAINSFLUIDS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.containsFluids</code> attribute.
	 * @return the containsFluids
	 */
	public Boolean isContainsFluids()
	{
		return isContainsFluids( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.containsFluids</code> attribute. 
	 * @return the containsFluids
	 */
	public boolean isContainsFluidsAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isContainsFluids( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.containsFluids</code> attribute. 
	 * @return the containsFluids
	 */
	public boolean isContainsFluidsAsPrimitive()
	{
		return isContainsFluidsAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.containsFluids</code> attribute. 
	 * @param value the containsFluids
	 */
	public void setContainsFluids(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, CONTAINSFLUIDS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.containsFluids</code> attribute. 
	 * @param value the containsFluids
	 */
	public void setContainsFluids(final Boolean value)
	{
		setContainsFluids( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.containsFluids</code> attribute. 
	 * @param value the containsFluids
	 */
	public void setContainsFluids(final SessionContext ctx, final boolean value)
	{
		setContainsFluids( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.containsFluids</code> attribute. 
	 * @param value the containsFluids
	 */
	public void setContainsFluids(final boolean value)
	{
		setContainsFluids( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.contaminationMethod</code> attribute.
	 * @return the contaminationMethod
	 */
	public String getContaminationMethod(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONTAMINATIONMETHOD);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.contaminationMethod</code> attribute.
	 * @return the contaminationMethod
	 */
	public String getContaminationMethod()
	{
		return getContaminationMethod( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.contaminationMethod</code> attribute. 
	 * @param value the contaminationMethod
	 */
	public void setContaminationMethod(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONTAMINATIONMETHOD,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.contaminationMethod</code> attribute. 
	 * @param value the contaminationMethod
	 */
	public void setContaminationMethod(final String value)
	{
		setContaminationMethod( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.declerationA</code> attribute.
	 * @return the declerationA
	 */
	public Boolean isDeclerationA(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, DECLERATIONA);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.declerationA</code> attribute.
	 * @return the declerationA
	 */
	public Boolean isDeclerationA()
	{
		return isDeclerationA( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.declerationA</code> attribute. 
	 * @return the declerationA
	 */
	public boolean isDeclerationAAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isDeclerationA( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.declerationA</code> attribute. 
	 * @return the declerationA
	 */
	public boolean isDeclerationAAsPrimitive()
	{
		return isDeclerationAAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.declerationA</code> attribute. 
	 * @param value the declerationA
	 */
	public void setDeclerationA(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, DECLERATIONA,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.declerationA</code> attribute. 
	 * @param value the declerationA
	 */
	public void setDeclerationA(final Boolean value)
	{
		setDeclerationA( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.declerationA</code> attribute. 
	 * @param value the declerationA
	 */
	public void setDeclerationA(final SessionContext ctx, final boolean value)
	{
		setDeclerationA( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.declerationA</code> attribute. 
	 * @param value the declerationA
	 */
	public void setDeclerationA(final boolean value)
	{
		setDeclerationA( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.declerationB</code> attribute.
	 * @return the declerationB
	 */
	public Boolean isDeclerationB(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, DECLERATIONB);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.declerationB</code> attribute.
	 * @return the declerationB
	 */
	public Boolean isDeclerationB()
	{
		return isDeclerationB( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.declerationB</code> attribute. 
	 * @return the declerationB
	 */
	public boolean isDeclerationBAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isDeclerationB( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.declerationB</code> attribute. 
	 * @return the declerationB
	 */
	public boolean isDeclerationBAsPrimitive()
	{
		return isDeclerationBAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.declerationB</code> attribute. 
	 * @param value the declerationB
	 */
	public void setDeclerationB(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, DECLERATIONB,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.declerationB</code> attribute. 
	 * @param value the declerationB
	 */
	public void setDeclerationB(final Boolean value)
	{
		setDeclerationB( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.declerationB</code> attribute. 
	 * @param value the declerationB
	 */
	public void setDeclerationB(final SessionContext ctx, final boolean value)
	{
		setDeclerationB( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.declerationB</code> attribute. 
	 * @param value the declerationB
	 */
	public void setDeclerationB(final boolean value)
	{
		setDeclerationB( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.Decontaminated</code> attribute.
	 * @return the Decontaminated
	 */
	public Boolean isDecontaminated(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, DECONTAMINATED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.Decontaminated</code> attribute.
	 * @return the Decontaminated
	 */
	public Boolean isDecontaminated()
	{
		return isDecontaminated( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.Decontaminated</code> attribute. 
	 * @return the Decontaminated
	 */
	public boolean isDecontaminatedAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isDecontaminated( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.Decontaminated</code> attribute. 
	 * @return the Decontaminated
	 */
	public boolean isDecontaminatedAsPrimitive()
	{
		return isDecontaminatedAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.Decontaminated</code> attribute. 
	 * @param value the Decontaminated
	 */
	public void setDecontaminated(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, DECONTAMINATED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.Decontaminated</code> attribute. 
	 * @param value the Decontaminated
	 */
	public void setDecontaminated(final Boolean value)
	{
		setDecontaminated( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.Decontaminated</code> attribute. 
	 * @param value the Decontaminated
	 */
	public void setDecontaminated(final SessionContext ctx, final boolean value)
	{
		setDecontaminated( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.Decontaminated</code> attribute. 
	 * @param value the Decontaminated
	 */
	public void setDecontaminated(final boolean value)
	{
		setDecontaminated( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.fluidText</code> attribute.
	 * @return the fluidText
	 */
	public String getFluidText(final SessionContext ctx)
	{
		return (String)getProperty( ctx, FLUIDTEXT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.fluidText</code> attribute.
	 * @return the fluidText
	 */
	public String getFluidText()
	{
		return getFluidText( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.fluidText</code> attribute. 
	 * @param value the fluidText
	 */
	public void setFluidText(final SessionContext ctx, final String value)
	{
		setProperty(ctx, FLUIDTEXT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.fluidText</code> attribute. 
	 * @param value the fluidText
	 */
	public void setFluidText(final String value)
	{
		setFluidText( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.hazardDescription</code> attribute.
	 * @return the hazardDescription
	 */
	public String getHazardDescription(final SessionContext ctx)
	{
		return (String)getProperty( ctx, HAZARDDESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.hazardDescription</code> attribute.
	 * @return the hazardDescription
	 */
	public String getHazardDescription()
	{
		return getHazardDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.hazardDescription</code> attribute. 
	 * @param value the hazardDescription
	 */
	public void setHazardDescription(final SessionContext ctx, final String value)
	{
		setProperty(ctx, HAZARDDESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.hazardDescription</code> attribute. 
	 * @param value the hazardDescription
	 */
	public void setHazardDescription(final String value)
	{
		setHazardDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.HazardformAttachments</code> attribute.
	 * @return the HazardformAttachments - The Hazard Form attachments
	 */
	public Collection<Media> getHazardformAttachments(final SessionContext ctx)
	{
		Collection<Media> coll = (Collection<Media>)getProperty( ctx, HAZARDFORMATTACHMENTS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.HazardformAttachments</code> attribute.
	 * @return the HazardformAttachments - The Hazard Form attachments
	 */
	public Collection<Media> getHazardformAttachments()
	{
		return getHazardformAttachments( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.HazardformAttachments</code> attribute. 
	 * @param value the HazardformAttachments - The Hazard Form attachments
	 */
	public void setHazardformAttachments(final SessionContext ctx, final Collection<Media> value)
	{
		setProperty(ctx, HAZARDFORMATTACHMENTS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.HazardformAttachments</code> attribute. 
	 * @param value the HazardformAttachments - The Hazard Form attachments
	 */
	public void setHazardformAttachments(final Collection<Media> value)
	{
		setHazardformAttachments( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.hazardInfo</code> attribute.
	 * @return the hazardInfo
	 */
	public String getHazardInfo(final SessionContext ctx)
	{
		return (String)getProperty( ctx, HAZARDINFO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.hazardInfo</code> attribute.
	 * @return the hazardInfo
	 */
	public String getHazardInfo()
	{
		return getHazardInfo( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.hazardInfo</code> attribute. 
	 * @param value the hazardInfo
	 */
	public void setHazardInfo(final SessionContext ctx, final String value)
	{
		setProperty(ctx, HAZARDINFO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.hazardInfo</code> attribute. 
	 * @param value the hazardInfo
	 */
	public void setHazardInfo(final String value)
	{
		setHazardInfo( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.hazardType</code> attribute.
	 * @return the hazardType
	 */
	public List<EnumerationValue> getHazardType(final SessionContext ctx)
	{
		List<EnumerationValue> coll = (List<EnumerationValue>)getProperty( ctx, HAZARDTYPE);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.hazardType</code> attribute.
	 * @return the hazardType
	 */
	public List<EnumerationValue> getHazardType()
	{
		return getHazardType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.hazardType</code> attribute. 
	 * @param value the hazardType
	 */
	public void setHazardType(final SessionContext ctx, final List<EnumerationValue> value)
	{
		setProperty(ctx, HAZARDTYPE,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.hazardType</code> attribute. 
	 * @param value the hazardType
	 */
	public void setHazardType(final List<EnumerationValue> value)
	{
		setHazardType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.isOther</code> attribute.
	 * @return the isOther
	 */
	public Boolean isIsOther(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISOTHER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.isOther</code> attribute.
	 * @return the isOther
	 */
	public Boolean isIsOther()
	{
		return isIsOther( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.isOther</code> attribute. 
	 * @return the isOther
	 */
	public boolean isIsOtherAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsOther( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.isOther</code> attribute. 
	 * @return the isOther
	 */
	public boolean isIsOtherAsPrimitive()
	{
		return isIsOtherAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.isOther</code> attribute. 
	 * @param value the isOther
	 */
	public void setIsOther(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISOTHER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.isOther</code> attribute. 
	 * @param value the isOther
	 */
	public void setIsOther(final Boolean value)
	{
		setIsOther( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.isOther</code> attribute. 
	 * @param value the isOther
	 */
	public void setIsOther(final SessionContext ctx, final boolean value)
	{
		setIsOther( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.isOther</code> attribute. 
	 * @param value the isOther
	 */
	public void setIsOther(final boolean value)
	{
		setIsOther( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.otherText</code> attribute.
	 * @return the otherText
	 */
	public String getOtherText(final SessionContext ctx)
	{
		return (String)getProperty( ctx, OTHERTEXT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHazardousInfo.otherText</code> attribute.
	 * @return the otherText
	 */
	public String getOtherText()
	{
		return getOtherText( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.otherText</code> attribute. 
	 * @param value the otherText
	 */
	public void setOtherText(final SessionContext ctx, final String value)
	{
		setProperty(ctx, OTHERTEXT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHazardousInfo.otherText</code> attribute. 
	 * @param value the otherText
	 */
	public void setOtherText(final String value)
	{
		setOtherText( getSession().getSessionContext(), value );
	}
	
}
