/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.jalo.GEEdgeContactUsRegion;
import com.bhge.core.jalo.GEEdgeSupportTeam;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.Country;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.store.BaseStore;
import de.hybris.platform.util.BidirectionalOneToManyHandler;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem ContactusSettings}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedContactusSettings extends GenericItem
{
	/** Qualifier of the <code>ContactusSettings.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>ContactusSettings.contactUsProductLine</code> attribute **/
	public static final String CONTACTUSPRODUCTLINE = "contactUsProductLine";
	/** Qualifier of the <code>ContactusSettings.supportTeam</code> attribute **/
	public static final String SUPPORTTEAM = "supportTeam";
	/** Qualifier of the <code>ContactusSettings.contactUsRegion</code> attribute **/
	public static final String CONTACTUSREGION = "contactUsRegion";
	/** Qualifier of the <code>ContactusSettings.email</code> attribute **/
	public static final String EMAIL = "email";
	/** Qualifier of the <code>ContactusSettings.phoneNum</code> attribute **/
	public static final String PHONENUM = "phoneNum";
	/** Qualifier of the <code>ContactusSettings.workingHours</code> attribute **/
	public static final String WORKINGHOURS = "workingHours";
	/** Qualifier of the <code>ContactusSettings.contactUsCountry</code> attribute **/
	public static final String CONTACTUSCOUNTRY = "contactUsCountry";
	/** Qualifier of the <code>ContactusSettings.productLineType</code> attribute **/
	public static final String PRODUCTLINETYPE = "productLineType";
	/** Qualifier of the <code>ContactusSettings.contactUsCommerceType</code> attribute **/
	public static final String CONTACTUSCOMMERCETYPE = "contactUsCommerceType";
	/** Qualifier of the <code>ContactusSettings.commerceTypeValue</code> attribute **/
	public static final String COMMERCETYPEVALUE = "commerceTypeValue";
	/** Qualifier of the <code>ContactusSettings.subRegion</code> attribute **/
	public static final String SUBREGION = "subRegion";
	/** Qualifier of the <code>ContactusSettings.baseStore</code> attribute **/
	public static final String BASESTORE = "baseStore";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n BASESTORE's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedContactusSettings> BASESTOREHANDLER = new BidirectionalOneToManyHandler<GeneratedContactusSettings>(
	BhgeCoreConstants.TC.CONTACTUSSETTINGS,
	false,
	"baseStore",
	null,
	false,
	true,
	CollectionType.COLLECTION
	);
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CODE, AttributeMode.INITIAL);
		tmp.put(CONTACTUSPRODUCTLINE, AttributeMode.INITIAL);
		tmp.put(SUPPORTTEAM, AttributeMode.INITIAL);
		tmp.put(CONTACTUSREGION, AttributeMode.INITIAL);
		tmp.put(EMAIL, AttributeMode.INITIAL);
		tmp.put(PHONENUM, AttributeMode.INITIAL);
		tmp.put(WORKINGHOURS, AttributeMode.INITIAL);
		tmp.put(CONTACTUSCOUNTRY, AttributeMode.INITIAL);
		tmp.put(PRODUCTLINETYPE, AttributeMode.INITIAL);
		tmp.put(CONTACTUSCOMMERCETYPE, AttributeMode.INITIAL);
		tmp.put(COMMERCETYPEVALUE, AttributeMode.INITIAL);
		tmp.put(SUBREGION, AttributeMode.INITIAL);
		tmp.put(BASESTORE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.baseStore</code> attribute.
	 * @return the baseStore
	 */
	public BaseStore getBaseStore(final SessionContext ctx)
	{
		return (BaseStore)getProperty( ctx, BASESTORE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.baseStore</code> attribute.
	 * @return the baseStore
	 */
	public BaseStore getBaseStore()
	{
		return getBaseStore( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.baseStore</code> attribute. 
	 * @param value the baseStore
	 */
	public void setBaseStore(final SessionContext ctx, final BaseStore value)
	{
		BASESTOREHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.baseStore</code> attribute. 
	 * @param value the baseStore
	 */
	public void setBaseStore(final BaseStore value)
	{
		setBaseStore( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.code</code> attribute.
	 * @return the code - Unique Code
	 */
	public String getCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.code</code> attribute.
	 * @return the code - Unique Code
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.code</code> attribute. 
	 * @param value the code - Unique Code
	 */
	public void setCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.code</code> attribute. 
	 * @param value the code - Unique Code
	 */
	public void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.commerceTypeValue</code> attribute.
	 * @return the commerceTypeValue - Value
	 */
	public String getCommerceTypeValue(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COMMERCETYPEVALUE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.commerceTypeValue</code> attribute.
	 * @return the commerceTypeValue - Value
	 */
	public String getCommerceTypeValue()
	{
		return getCommerceTypeValue( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.commerceTypeValue</code> attribute. 
	 * @param value the commerceTypeValue - Value
	 */
	public void setCommerceTypeValue(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COMMERCETYPEVALUE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.commerceTypeValue</code> attribute. 
	 * @param value the commerceTypeValue - Value
	 */
	public void setCommerceTypeValue(final String value)
	{
		setCommerceTypeValue( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.contactUsCommerceType</code> attribute.
	 * @return the contactUsCommerceType - Value
	 */
	public String getContactUsCommerceType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONTACTUSCOMMERCETYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.contactUsCommerceType</code> attribute.
	 * @return the contactUsCommerceType - Value
	 */
	public String getContactUsCommerceType()
	{
		return getContactUsCommerceType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.contactUsCommerceType</code> attribute. 
	 * @param value the contactUsCommerceType - Value
	 */
	public void setContactUsCommerceType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONTACTUSCOMMERCETYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.contactUsCommerceType</code> attribute. 
	 * @param value the contactUsCommerceType - Value
	 */
	public void setContactUsCommerceType(final String value)
	{
		setContactUsCommerceType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.contactUsCountry</code> attribute.
	 * @return the contactUsCountry - Value
	 */
	public Country getContactUsCountry(final SessionContext ctx)
	{
		return (Country)getProperty( ctx, CONTACTUSCOUNTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.contactUsCountry</code> attribute.
	 * @return the contactUsCountry - Value
	 */
	public Country getContactUsCountry()
	{
		return getContactUsCountry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.contactUsCountry</code> attribute. 
	 * @param value the contactUsCountry - Value
	 */
	public void setContactUsCountry(final SessionContext ctx, final Country value)
	{
		setProperty(ctx, CONTACTUSCOUNTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.contactUsCountry</code> attribute. 
	 * @param value the contactUsCountry - Value
	 */
	public void setContactUsCountry(final Country value)
	{
		setContactUsCountry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.contactUsProductLine</code> attribute.
	 * @return the contactUsProductLine - Product Line LoV
	 */
	public String getContactUsProductLine(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONTACTUSPRODUCTLINE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.contactUsProductLine</code> attribute.
	 * @return the contactUsProductLine - Product Line LoV
	 */
	public String getContactUsProductLine()
	{
		return getContactUsProductLine( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.contactUsProductLine</code> attribute. 
	 * @param value the contactUsProductLine - Product Line LoV
	 */
	public void setContactUsProductLine(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONTACTUSPRODUCTLINE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.contactUsProductLine</code> attribute. 
	 * @param value the contactUsProductLine - Product Line LoV
	 */
	public void setContactUsProductLine(final String value)
	{
		setContactUsProductLine( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.contactUsRegion</code> attribute.
	 * @return the contactUsRegion - Region for contact us page
	 */
	public GEEdgeContactUsRegion getContactUsRegion(final SessionContext ctx)
	{
		return (GEEdgeContactUsRegion)getProperty( ctx, CONTACTUSREGION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.contactUsRegion</code> attribute.
	 * @return the contactUsRegion - Region for contact us page
	 */
	public GEEdgeContactUsRegion getContactUsRegion()
	{
		return getContactUsRegion( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.contactUsRegion</code> attribute. 
	 * @param value the contactUsRegion - Region for contact us page
	 */
	public void setContactUsRegion(final SessionContext ctx, final GEEdgeContactUsRegion value)
	{
		setProperty(ctx, CONTACTUSREGION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.contactUsRegion</code> attribute. 
	 * @param value the contactUsRegion - Region for contact us page
	 */
	public void setContactUsRegion(final GEEdgeContactUsRegion value)
	{
		setContactUsRegion( getSession().getSessionContext(), value );
	}
	
	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes) throws JaloBusinessException
	{
		BASESTOREHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.email</code> attribute.
	 * @return the email - Value
	 */
	public String getEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.email</code> attribute.
	 * @return the email - Value
	 */
	public String getEmail()
	{
		return getEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.email</code> attribute. 
	 * @param value the email - Value
	 */
	public void setEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.email</code> attribute. 
	 * @param value the email - Value
	 */
	public void setEmail(final String value)
	{
		setEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.phoneNum</code> attribute.
	 * @return the phoneNum - Value
	 */
	public String getPhoneNum(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PHONENUM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.phoneNum</code> attribute.
	 * @return the phoneNum - Value
	 */
	public String getPhoneNum()
	{
		return getPhoneNum( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.phoneNum</code> attribute. 
	 * @param value the phoneNum - Value
	 */
	public void setPhoneNum(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PHONENUM,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.phoneNum</code> attribute. 
	 * @param value the phoneNum - Value
	 */
	public void setPhoneNum(final String value)
	{
		setPhoneNum( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.productLineType</code> attribute.
	 * @return the productLineType - ProductLineType
	 */
	public EnumerationValue getProductLineType(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, PRODUCTLINETYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.productLineType</code> attribute.
	 * @return the productLineType - ProductLineType
	 */
	public EnumerationValue getProductLineType()
	{
		return getProductLineType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.productLineType</code> attribute. 
	 * @param value the productLineType - ProductLineType
	 */
	public void setProductLineType(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, PRODUCTLINETYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.productLineType</code> attribute. 
	 * @param value the productLineType - ProductLineType
	 */
	public void setProductLineType(final EnumerationValue value)
	{
		setProductLineType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.subRegion</code> attribute.
	 * @return the subRegion - Sub Region
	 */
	public String getSubRegion(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SUBREGION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.subRegion</code> attribute.
	 * @return the subRegion - Sub Region
	 */
	public String getSubRegion()
	{
		return getSubRegion( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.subRegion</code> attribute. 
	 * @param value the subRegion - Sub Region
	 */
	public void setSubRegion(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SUBREGION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.subRegion</code> attribute. 
	 * @param value the subRegion - Sub Region
	 */
	public void setSubRegion(final String value)
	{
		setSubRegion( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.supportTeam</code> attribute.
	 * @return the supportTeam - Support Team LoV
	 */
	public GEEdgeSupportTeam getSupportTeam(final SessionContext ctx)
	{
		return (GEEdgeSupportTeam)getProperty( ctx, SUPPORTTEAM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.supportTeam</code> attribute.
	 * @return the supportTeam - Support Team LoV
	 */
	public GEEdgeSupportTeam getSupportTeam()
	{
		return getSupportTeam( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.supportTeam</code> attribute. 
	 * @param value the supportTeam - Support Team LoV
	 */
	public void setSupportTeam(final SessionContext ctx, final GEEdgeSupportTeam value)
	{
		setProperty(ctx, SUPPORTTEAM,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.supportTeam</code> attribute. 
	 * @param value the supportTeam - Support Team LoV
	 */
	public void setSupportTeam(final GEEdgeSupportTeam value)
	{
		setSupportTeam( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.workingHours</code> attribute.
	 * @return the workingHours - Value
	 */
	public String getWorkingHours(final SessionContext ctx)
	{
		return (String)getProperty( ctx, WORKINGHOURS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactusSettings.workingHours</code> attribute.
	 * @return the workingHours - Value
	 */
	public String getWorkingHours()
	{
		return getWorkingHours( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.workingHours</code> attribute. 
	 * @param value the workingHours - Value
	 */
	public void setWorkingHours(final SessionContext ctx, final String value)
	{
		setProperty(ctx, WORKINGHOURS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactusSettings.workingHours</code> attribute. 
	 * @param value the workingHours - Value
	 */
	public void setWorkingHours(final String value)
	{
		setWorkingHours( getSession().getSessionContext(), value );
	}
	
}
