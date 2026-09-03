/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.register.webservices.jalo;

import com.bhge.register.webservices.constants.BhgeregisterwebservicesConstants;
import com.bhge.register.webservices.jalo.BHGERegisterKeyValueData;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGERegisterKeyValueData}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGERegisterKeyValueData extends GenericItem
{
	/** Qualifier of the <code>BHGERegisterKeyValueData.attributeId</code> attribute **/
	public static final String ATTRIBUTEID = "attributeId";
	/** Qualifier of the <code>BHGERegisterKeyValueData.attributeType</code> attribute **/
	public static final String ATTRIBUTETYPE = "attributeType";
	/** Qualifier of the <code>BHGERegisterKeyValueData.attributeKey</code> attribute **/
	public static final String ATTRIBUTEKEY = "attributeKey";
	/** Qualifier of the <code>BHGERegisterKeyValueData.attributeValue</code> attribute **/
	public static final String ATTRIBUTEVALUE = "attributeValue";
	/** Qualifier of the <code>BHGERegisterKeyValueData.activeStatus</code> attribute **/
	public static final String ACTIVESTATUS = "activeStatus";
	/** Qualifier of the <code>BHGERegisterKeyValueData.parentAttrib</code> attribute **/
	public static final String PARENTATTRIB = "parentAttrib";
	/** Qualifier of the <code>BHGERegisterKeyValueData.externalLookupId</code> attribute **/
	public static final String EXTERNALLOOKUPID = "externalLookupId";
	/** Qualifier of the <code>BHGERegisterKeyValueData.refPL</code> attribute **/
	public static final String REFPL = "refPL";
	/** Qualifier of the <code>BHGERegisterKeyValueData.riskClassification</code> attribute **/
	public static final String RISKCLASSIFICATION = "riskClassification";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(ATTRIBUTEID, AttributeMode.INITIAL);
		tmp.put(ATTRIBUTETYPE, AttributeMode.INITIAL);
		tmp.put(ATTRIBUTEKEY, AttributeMode.INITIAL);
		tmp.put(ATTRIBUTEVALUE, AttributeMode.INITIAL);
		tmp.put(ACTIVESTATUS, AttributeMode.INITIAL);
		tmp.put(PARENTATTRIB, AttributeMode.INITIAL);
		tmp.put(EXTERNALLOOKUPID, AttributeMode.INITIAL);
		tmp.put(REFPL, AttributeMode.INITIAL);
		tmp.put(RISKCLASSIFICATION, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.activeStatus</code> attribute.
	 * @return the activeStatus - Active Status
	 */
	public Boolean isActiveStatus(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ACTIVESTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.activeStatus</code> attribute.
	 * @return the activeStatus - Active Status
	 */
	public Boolean isActiveStatus()
	{
		return isActiveStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.activeStatus</code> attribute. 
	 * @return the activeStatus - Active Status
	 */
	public boolean isActiveStatusAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isActiveStatus( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.activeStatus</code> attribute. 
	 * @return the activeStatus - Active Status
	 */
	public boolean isActiveStatusAsPrimitive()
	{
		return isActiveStatusAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.activeStatus</code> attribute. 
	 * @param value the activeStatus - Active Status
	 */
	public void setActiveStatus(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ACTIVESTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.activeStatus</code> attribute. 
	 * @param value the activeStatus - Active Status
	 */
	public void setActiveStatus(final Boolean value)
	{
		setActiveStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.activeStatus</code> attribute. 
	 * @param value the activeStatus - Active Status
	 */
	public void setActiveStatus(final SessionContext ctx, final boolean value)
	{
		setActiveStatus( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.activeStatus</code> attribute. 
	 * @param value the activeStatus - Active Status
	 */
	public void setActiveStatus(final boolean value)
	{
		setActiveStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.attributeId</code> attribute.
	 * @return the attributeId - Attribute ID
	 */
	public String getAttributeId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ATTRIBUTEID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.attributeId</code> attribute.
	 * @return the attributeId - Attribute ID
	 */
	public String getAttributeId()
	{
		return getAttributeId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.attributeId</code> attribute. 
	 * @param value the attributeId - Attribute ID
	 */
	public void setAttributeId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ATTRIBUTEID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.attributeId</code> attribute. 
	 * @param value the attributeId - Attribute ID
	 */
	public void setAttributeId(final String value)
	{
		setAttributeId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.attributeKey</code> attribute.
	 * @return the attributeKey - Attribute Key
	 */
	public String getAttributeKey(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ATTRIBUTEKEY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.attributeKey</code> attribute.
	 * @return the attributeKey - Attribute Key
	 */
	public String getAttributeKey()
	{
		return getAttributeKey( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.attributeKey</code> attribute. 
	 * @param value the attributeKey - Attribute Key
	 */
	public void setAttributeKey(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ATTRIBUTEKEY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.attributeKey</code> attribute. 
	 * @param value the attributeKey - Attribute Key
	 */
	public void setAttributeKey(final String value)
	{
		setAttributeKey( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.attributeType</code> attribute.
	 * @return the attributeType - Key Value Attribute Type
	 */
	public String getAttributeType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ATTRIBUTETYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.attributeType</code> attribute.
	 * @return the attributeType - Key Value Attribute Type
	 */
	public String getAttributeType()
	{
		return getAttributeType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.attributeType</code> attribute. 
	 * @param value the attributeType - Key Value Attribute Type
	 */
	public void setAttributeType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ATTRIBUTETYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.attributeType</code> attribute. 
	 * @param value the attributeType - Key Value Attribute Type
	 */
	public void setAttributeType(final String value)
	{
		setAttributeType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.attributeValue</code> attribute.
	 * @return the attributeValue - Attribute Value
	 */
	public String getAttributeValue(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ATTRIBUTEVALUE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.attributeValue</code> attribute.
	 * @return the attributeValue - Attribute Value
	 */
	public String getAttributeValue()
	{
		return getAttributeValue( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.attributeValue</code> attribute. 
	 * @param value the attributeValue - Attribute Value
	 */
	public void setAttributeValue(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ATTRIBUTEVALUE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.attributeValue</code> attribute. 
	 * @param value the attributeValue - Attribute Value
	 */
	public void setAttributeValue(final String value)
	{
		setAttributeValue( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.externalLookupId</code> attribute.
	 * @return the externalLookupId - External Looup Id
	 */
	public String getExternalLookupId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EXTERNALLOOKUPID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.externalLookupId</code> attribute.
	 * @return the externalLookupId - External Looup Id
	 */
	public String getExternalLookupId()
	{
		return getExternalLookupId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.externalLookupId</code> attribute. 
	 * @param value the externalLookupId - External Looup Id
	 */
	public void setExternalLookupId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EXTERNALLOOKUPID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.externalLookupId</code> attribute. 
	 * @param value the externalLookupId - External Looup Id
	 */
	public void setExternalLookupId(final String value)
	{
		setExternalLookupId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.parentAttrib</code> attribute.
	 * @return the parentAttrib - Parent Attribute
	 */
	public BHGERegisterKeyValueData getParentAttrib(final SessionContext ctx)
	{
		return (BHGERegisterKeyValueData)getProperty( ctx, PARENTATTRIB);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.parentAttrib</code> attribute.
	 * @return the parentAttrib - Parent Attribute
	 */
	public BHGERegisterKeyValueData getParentAttrib()
	{
		return getParentAttrib( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.parentAttrib</code> attribute. 
	 * @param value the parentAttrib - Parent Attribute
	 */
	public void setParentAttrib(final SessionContext ctx, final BHGERegisterKeyValueData value)
	{
		setProperty(ctx, PARENTATTRIB,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.parentAttrib</code> attribute. 
	 * @param value the parentAttrib - Parent Attribute
	 */
	public void setParentAttrib(final BHGERegisterKeyValueData value)
	{
		setParentAttrib( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.refPL</code> attribute.
	 * @return the refPL - Reference for Product Line relation with SubproductLine, Role, Market,
	 */
	public String getRefPL(final SessionContext ctx)
	{
		return (String)getProperty( ctx, REFPL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.refPL</code> attribute.
	 * @return the refPL - Reference for Product Line relation with SubproductLine, Role, Market,
	 */
	public String getRefPL()
	{
		return getRefPL( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.refPL</code> attribute. 
	 * @param value the refPL - Reference for Product Line relation with SubproductLine, Role, Market,
	 */
	public void setRefPL(final SessionContext ctx, final String value)
	{
		setProperty(ctx, REFPL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.refPL</code> attribute. 
	 * @param value the refPL - Reference for Product Line relation with SubproductLine, Role, Market,
	 */
	public void setRefPL(final String value)
	{
		setRefPL( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.riskClassification</code> attribute.
	 * @return the riskClassification - Risk Classification
	 */
	public String getRiskClassification(final SessionContext ctx)
	{
		return (String)getProperty( ctx, RISKCLASSIFICATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegisterKeyValueData.riskClassification</code> attribute.
	 * @return the riskClassification - Risk Classification
	 */
	public String getRiskClassification()
	{
		return getRiskClassification( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.riskClassification</code> attribute. 
	 * @param value the riskClassification - Risk Classification
	 */
	public void setRiskClassification(final SessionContext ctx, final String value)
	{
		setProperty(ctx, RISKCLASSIFICATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegisterKeyValueData.riskClassification</code> attribute. 
	 * @param value the riskClassification - Risk Classification
	 */
	public void setRiskClassification(final String value)
	{
		setRiskClassification( getSession().getSessionContext(), value );
	}
	
}
