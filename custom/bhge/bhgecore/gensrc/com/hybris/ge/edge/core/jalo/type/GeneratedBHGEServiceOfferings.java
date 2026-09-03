/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.hybris.ge.edge.core.jalo.type;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import de.hybris.platform.jalo.order.AbstractOrderEntry;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.util.BidirectionalOneToManyHandler;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.BHGEServiceOfferings BHGEServiceOfferings}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEServiceOfferings extends GenericItem
{
	/** Qualifier of the <code>BHGEServiceOfferings.offeringType</code> attribute **/
	public static final String OFFERINGTYPE = "offeringType";
	/** Qualifier of the <code>BHGEServiceOfferings.offeringCode</code> attribute **/
	public static final String OFFERINGCODE = "offeringCode";
	/** Qualifier of the <code>BHGEServiceOfferings.offeringPrice</code> attribute **/
	public static final String OFFERINGPRICE = "offeringPrice";
	/** Qualifier of the <code>BHGEServiceOfferings.offeringDiscount</code> attribute **/
	public static final String OFFERINGDISCOUNT = "offeringDiscount";
	/** Qualifier of the <code>BHGEServiceOfferings.offeringText</code> attribute **/
	public static final String OFFERINGTEXT = "offeringText";
	/** Qualifier of the <code>BHGEServiceOfferings.problemDescription</code> attribute **/
	public static final String PROBLEMDESCRIPTION = "problemDescription";
	/** Qualifier of the <code>BHGEServiceOfferings.problemDescLong</code> attribute **/
	public static final String PROBLEMDESCLONG = "problemDescLong";
	/** Qualifier of the <code>BHGEServiceOfferings.otherDetails</code> attribute **/
	public static final String OTHERDETAILS = "otherDetails";
	/** Qualifier of the <code>BHGEServiceOfferings.planningSite</code> attribute **/
	public static final String PLANNINGSITE = "planningSite";
	/** Qualifier of the <code>BHGEServiceOfferings.serviceOfferingLongText</code> attribute **/
	public static final String SERVICEOFFERINGLONGTEXT = "serviceOfferingLongText";
	/** Qualifier of the <code>BHGEServiceOfferings.serviceOfferingLongTextConfirmation</code> attribute **/
	public static final String SERVICEOFFERINGLONGTEXTCONFIRMATION = "serviceOfferingLongTextConfirmation";
	/** Qualifier of the <code>BHGEServiceOfferings.rmaForm</code> attribute **/
	public static final String RMAFORM = "rmaForm";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n RMAFORM's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedBHGEServiceOfferings> RMAFORMHANDLER = new BidirectionalOneToManyHandler<GeneratedBHGEServiceOfferings>(
	BhgeCoreConstants.TC.BHGESERVICEOFFERINGS,
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
		tmp.put(OFFERINGTYPE, AttributeMode.INITIAL);
		tmp.put(OFFERINGCODE, AttributeMode.INITIAL);
		tmp.put(OFFERINGPRICE, AttributeMode.INITIAL);
		tmp.put(OFFERINGDISCOUNT, AttributeMode.INITIAL);
		tmp.put(OFFERINGTEXT, AttributeMode.INITIAL);
		tmp.put(PROBLEMDESCRIPTION, AttributeMode.INITIAL);
		tmp.put(PROBLEMDESCLONG, AttributeMode.INITIAL);
		tmp.put(OTHERDETAILS, AttributeMode.INITIAL);
		tmp.put(PLANNINGSITE, AttributeMode.INITIAL);
		tmp.put(SERVICEOFFERINGLONGTEXT, AttributeMode.INITIAL);
		tmp.put(SERVICEOFFERINGLONGTEXTCONFIRMATION, AttributeMode.INITIAL);
		tmp.put(RMAFORM, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes) throws JaloBusinessException
	{
		RMAFORMHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.offeringCode</code> attribute.
	 * @return the offeringCode
	 */
	public String getOfferingCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, OFFERINGCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.offeringCode</code> attribute.
	 * @return the offeringCode
	 */
	public String getOfferingCode()
	{
		return getOfferingCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.offeringCode</code> attribute. 
	 * @param value the offeringCode
	 */
	public void setOfferingCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, OFFERINGCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.offeringCode</code> attribute. 
	 * @param value the offeringCode
	 */
	public void setOfferingCode(final String value)
	{
		setOfferingCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.offeringDiscount</code> attribute.
	 * @return the offeringDiscount
	 */
	public String getOfferingDiscount(final SessionContext ctx)
	{
		return (String)getProperty( ctx, OFFERINGDISCOUNT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.offeringDiscount</code> attribute.
	 * @return the offeringDiscount
	 */
	public String getOfferingDiscount()
	{
		return getOfferingDiscount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.offeringDiscount</code> attribute. 
	 * @param value the offeringDiscount
	 */
	public void setOfferingDiscount(final SessionContext ctx, final String value)
	{
		setProperty(ctx, OFFERINGDISCOUNT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.offeringDiscount</code> attribute. 
	 * @param value the offeringDiscount
	 */
	public void setOfferingDiscount(final String value)
	{
		setOfferingDiscount( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.offeringPrice</code> attribute.
	 * @return the offeringPrice
	 */
	public Double getOfferingPrice(final SessionContext ctx)
	{
		return (Double)getProperty( ctx, OFFERINGPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.offeringPrice</code> attribute.
	 * @return the offeringPrice
	 */
	public Double getOfferingPrice()
	{
		return getOfferingPrice( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.offeringPrice</code> attribute. 
	 * @return the offeringPrice
	 */
	public double getOfferingPriceAsPrimitive(final SessionContext ctx)
	{
		Double value = getOfferingPrice( ctx );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.offeringPrice</code> attribute. 
	 * @return the offeringPrice
	 */
	public double getOfferingPriceAsPrimitive()
	{
		return getOfferingPriceAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.offeringPrice</code> attribute. 
	 * @param value the offeringPrice
	 */
	public void setOfferingPrice(final SessionContext ctx, final Double value)
	{
		setProperty(ctx, OFFERINGPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.offeringPrice</code> attribute. 
	 * @param value the offeringPrice
	 */
	public void setOfferingPrice(final Double value)
	{
		setOfferingPrice( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.offeringPrice</code> attribute. 
	 * @param value the offeringPrice
	 */
	public void setOfferingPrice(final SessionContext ctx, final double value)
	{
		setOfferingPrice( ctx,Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.offeringPrice</code> attribute. 
	 * @param value the offeringPrice
	 */
	public void setOfferingPrice(final double value)
	{
		setOfferingPrice( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.offeringText</code> attribute.
	 * @return the offeringText
	 */
	public String getOfferingText(final SessionContext ctx)
	{
		return (String)getProperty( ctx, OFFERINGTEXT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.offeringText</code> attribute.
	 * @return the offeringText
	 */
	public String getOfferingText()
	{
		return getOfferingText( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.offeringText</code> attribute. 
	 * @param value the offeringText
	 */
	public void setOfferingText(final SessionContext ctx, final String value)
	{
		setProperty(ctx, OFFERINGTEXT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.offeringText</code> attribute. 
	 * @param value the offeringText
	 */
	public void setOfferingText(final String value)
	{
		setOfferingText( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.offeringType</code> attribute.
	 * @return the offeringType - The offering type  enum
	 */
	public EnumerationValue getOfferingType(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, OFFERINGTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.offeringType</code> attribute.
	 * @return the offeringType - The offering type  enum
	 */
	public EnumerationValue getOfferingType()
	{
		return getOfferingType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.offeringType</code> attribute. 
	 * @param value the offeringType - The offering type  enum
	 */
	public void setOfferingType(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, OFFERINGTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.offeringType</code> attribute. 
	 * @param value the offeringType - The offering type  enum
	 */
	public void setOfferingType(final EnumerationValue value)
	{
		setOfferingType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.otherDetails</code> attribute.
	 * @return the otherDetails
	 */
	public String getOtherDetails(final SessionContext ctx)
	{
		return (String)getProperty( ctx, OTHERDETAILS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.otherDetails</code> attribute.
	 * @return the otherDetails
	 */
	public String getOtherDetails()
	{
		return getOtherDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.otherDetails</code> attribute. 
	 * @param value the otherDetails
	 */
	public void setOtherDetails(final SessionContext ctx, final String value)
	{
		setProperty(ctx, OTHERDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.otherDetails</code> attribute. 
	 * @param value the otherDetails
	 */
	public void setOtherDetails(final String value)
	{
		setOtherDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.planningSite</code> attribute.
	 * @return the planningSite
	 */
	public String getPlanningSite(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PLANNINGSITE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.planningSite</code> attribute.
	 * @return the planningSite
	 */
	public String getPlanningSite()
	{
		return getPlanningSite( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.planningSite</code> attribute. 
	 * @param value the planningSite
	 */
	public void setPlanningSite(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PLANNINGSITE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.planningSite</code> attribute. 
	 * @param value the planningSite
	 */
	public void setPlanningSite(final String value)
	{
		setPlanningSite( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.problemDescLong</code> attribute.
	 * @return the problemDescLong
	 */
	public String getProblemDescLong(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PROBLEMDESCLONG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.problemDescLong</code> attribute.
	 * @return the problemDescLong
	 */
	public String getProblemDescLong()
	{
		return getProblemDescLong( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.problemDescLong</code> attribute. 
	 * @param value the problemDescLong
	 */
	public void setProblemDescLong(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PROBLEMDESCLONG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.problemDescLong</code> attribute. 
	 * @param value the problemDescLong
	 */
	public void setProblemDescLong(final String value)
	{
		setProblemDescLong( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.problemDescription</code> attribute.
	 * @return the problemDescription
	 */
	public String getProblemDescription(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PROBLEMDESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.problemDescription</code> attribute.
	 * @return the problemDescription
	 */
	public String getProblemDescription()
	{
		return getProblemDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.problemDescription</code> attribute. 
	 * @param value the problemDescription
	 */
	public void setProblemDescription(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PROBLEMDESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.problemDescription</code> attribute. 
	 * @param value the problemDescription
	 */
	public void setProblemDescription(final String value)
	{
		setProblemDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.rmaForm</code> attribute.
	 * @return the rmaForm
	 */
	public AbstractOrderEntry getRmaForm(final SessionContext ctx)
	{
		return (AbstractOrderEntry)getProperty( ctx, RMAFORM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.rmaForm</code> attribute.
	 * @return the rmaForm
	 */
	public AbstractOrderEntry getRmaForm()
	{
		return getRmaForm( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.rmaForm</code> attribute. 
	 * @param value the rmaForm
	 */
	public void setRmaForm(final SessionContext ctx, final AbstractOrderEntry value)
	{
		RMAFORMHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.rmaForm</code> attribute. 
	 * @param value the rmaForm
	 */
	public void setRmaForm(final AbstractOrderEntry value)
	{
		setRmaForm( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.serviceOfferingLongText</code> attribute.
	 * @return the serviceOfferingLongText
	 */
	public String getServiceOfferingLongText(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SERVICEOFFERINGLONGTEXT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.serviceOfferingLongText</code> attribute.
	 * @return the serviceOfferingLongText
	 */
	public String getServiceOfferingLongText()
	{
		return getServiceOfferingLongText( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.serviceOfferingLongText</code> attribute. 
	 * @param value the serviceOfferingLongText
	 */
	public void setServiceOfferingLongText(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SERVICEOFFERINGLONGTEXT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.serviceOfferingLongText</code> attribute. 
	 * @param value the serviceOfferingLongText
	 */
	public void setServiceOfferingLongText(final String value)
	{
		setServiceOfferingLongText( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.serviceOfferingLongTextConfirmation</code> attribute.
	 * @return the serviceOfferingLongTextConfirmation
	 */
	public String getServiceOfferingLongTextConfirmation(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SERVICEOFFERINGLONGTEXTCONFIRMATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceOfferings.serviceOfferingLongTextConfirmation</code> attribute.
	 * @return the serviceOfferingLongTextConfirmation
	 */
	public String getServiceOfferingLongTextConfirmation()
	{
		return getServiceOfferingLongTextConfirmation( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.serviceOfferingLongTextConfirmation</code> attribute. 
	 * @param value the serviceOfferingLongTextConfirmation
	 */
	public void setServiceOfferingLongTextConfirmation(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SERVICEOFFERINGLONGTEXTCONFIRMATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceOfferings.serviceOfferingLongTextConfirmation</code> attribute. 
	 * @param value the serviceOfferingLongTextConfirmation
	 */
	public void setServiceOfferingLongTextConfirmation(final String value)
	{
		setServiceOfferingLongTextConfirmation( getSession().getSessionContext(), value );
	}
	
}
