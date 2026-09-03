/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.jalo.GEEdgeContactUsRegion;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHStaticContactUs}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHStaticContactUs extends GenericItem
{
	/** Qualifier of the <code>BHStaticContactUs.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>BHStaticContactUs.commerceTypeValue</code> attribute **/
	public static final String COMMERCETYPEVALUE = "commerceTypeValue";
	/** Qualifier of the <code>BHStaticContactUs.region</code> attribute **/
	public static final String REGION = "region";
	/** Qualifier of the <code>BHStaticContactUs.subRegion</code> attribute **/
	public static final String SUBREGION = "subRegion";
	/** Qualifier of the <code>BHStaticContactUs.country</code> attribute **/
	public static final String COUNTRY = "country";
	/** Qualifier of the <code>BHStaticContactUs.contactUsProductLine</code> attribute **/
	public static final String CONTACTUSPRODUCTLINE = "contactUsProductLine";
	/** Qualifier of the <code>BHStaticContactUs.email</code> attribute **/
	public static final String EMAIL = "email";
	/** Qualifier of the <code>BHStaticContactUs.phoneNum</code> attribute **/
	public static final String PHONENUM = "phoneNum";
	/** Qualifier of the <code>BHStaticContactUs.workingHours</code> attribute **/
	public static final String WORKINGHOURS = "workingHours";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CODE, AttributeMode.INITIAL);
		tmp.put(COMMERCETYPEVALUE, AttributeMode.INITIAL);
		tmp.put(REGION, AttributeMode.INITIAL);
		tmp.put(SUBREGION, AttributeMode.INITIAL);
		tmp.put(COUNTRY, AttributeMode.INITIAL);
		tmp.put(CONTACTUSPRODUCTLINE, AttributeMode.INITIAL);
		tmp.put(EMAIL, AttributeMode.INITIAL);
		tmp.put(PHONENUM, AttributeMode.INITIAL);
		tmp.put(WORKINGHOURS, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.code</code> attribute.
	 * @return the code - Unique Code
	 */
	public String getCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.code</code> attribute.
	 * @return the code - Unique Code
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.code</code> attribute. 
	 * @param value the code - Unique Code
	 */
	public void setCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.code</code> attribute. 
	 * @param value the code - Unique Code
	 */
	public void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.commerceTypeValue</code> attribute.
	 * @return the commerceTypeValue - CommerceType which holds "Sales" or "Return" Value
	 */
	public String getCommerceTypeValue(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COMMERCETYPEVALUE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.commerceTypeValue</code> attribute.
	 * @return the commerceTypeValue - CommerceType which holds "Sales" or "Return" Value
	 */
	public String getCommerceTypeValue()
	{
		return getCommerceTypeValue( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.commerceTypeValue</code> attribute. 
	 * @param value the commerceTypeValue - CommerceType which holds "Sales" or "Return" Value
	 */
	public void setCommerceTypeValue(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COMMERCETYPEVALUE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.commerceTypeValue</code> attribute. 
	 * @param value the commerceTypeValue - CommerceType which holds "Sales" or "Return" Value
	 */
	public void setCommerceTypeValue(final String value)
	{
		setCommerceTypeValue( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.contactUsProductLine</code> attribute.
	 * @return the contactUsProductLine - Product Line value
	 */
	public String getContactUsProductLine(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONTACTUSPRODUCTLINE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.contactUsProductLine</code> attribute.
	 * @return the contactUsProductLine - Product Line value
	 */
	public String getContactUsProductLine()
	{
		return getContactUsProductLine( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.contactUsProductLine</code> attribute. 
	 * @param value the contactUsProductLine - Product Line value
	 */
	public void setContactUsProductLine(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONTACTUSPRODUCTLINE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.contactUsProductLine</code> attribute. 
	 * @param value the contactUsProductLine - Product Line value
	 */
	public void setContactUsProductLine(final String value)
	{
		setContactUsProductLine( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.country</code> attribute.
	 * @return the country - Country
	 */
	public String getCountry(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COUNTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.country</code> attribute.
	 * @return the country - Country
	 */
	public String getCountry()
	{
		return getCountry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.country</code> attribute. 
	 * @param value the country - Country
	 */
	public void setCountry(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COUNTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.country</code> attribute. 
	 * @param value the country - Country
	 */
	public void setCountry(final String value)
	{
		setCountry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.email</code> attribute.
	 * @return the email - Email
	 */
	public String getEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.email</code> attribute.
	 * @return the email - Email
	 */
	public String getEmail()
	{
		return getEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.email</code> attribute. 
	 * @param value the email - Email
	 */
	public void setEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.email</code> attribute. 
	 * @param value the email - Email
	 */
	public void setEmail(final String value)
	{
		setEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.phoneNum</code> attribute.
	 * @return the phoneNum - Phone Number
	 */
	public String getPhoneNum(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PHONENUM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.phoneNum</code> attribute.
	 * @return the phoneNum - Phone Number
	 */
	public String getPhoneNum()
	{
		return getPhoneNum( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.phoneNum</code> attribute. 
	 * @param value the phoneNum - Phone Number
	 */
	public void setPhoneNum(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PHONENUM,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.phoneNum</code> attribute. 
	 * @param value the phoneNum - Phone Number
	 */
	public void setPhoneNum(final String value)
	{
		setPhoneNum( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.region</code> attribute.
	 * @return the region - Region for contact us page
	 */
	public GEEdgeContactUsRegion getRegion(final SessionContext ctx)
	{
		return (GEEdgeContactUsRegion)getProperty( ctx, REGION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.region</code> attribute.
	 * @return the region - Region for contact us page
	 */
	public GEEdgeContactUsRegion getRegion()
	{
		return getRegion( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.region</code> attribute. 
	 * @param value the region - Region for contact us page
	 */
	public void setRegion(final SessionContext ctx, final GEEdgeContactUsRegion value)
	{
		setProperty(ctx, REGION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.region</code> attribute. 
	 * @param value the region - Region for contact us page
	 */
	public void setRegion(final GEEdgeContactUsRegion value)
	{
		setRegion( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.subRegion</code> attribute.
	 * @return the subRegion - Sub Region
	 */
	public String getSubRegion(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SUBREGION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.subRegion</code> attribute.
	 * @return the subRegion - Sub Region
	 */
	public String getSubRegion()
	{
		return getSubRegion( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.subRegion</code> attribute. 
	 * @param value the subRegion - Sub Region
	 */
	public void setSubRegion(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SUBREGION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.subRegion</code> attribute. 
	 * @param value the subRegion - Sub Region
	 */
	public void setSubRegion(final String value)
	{
		setSubRegion( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.workingHours</code> attribute.
	 * @return the workingHours - Working Hours
	 */
	public String getWorkingHours(final SessionContext ctx)
	{
		return (String)getProperty( ctx, WORKINGHOURS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHStaticContactUs.workingHours</code> attribute.
	 * @return the workingHours - Working Hours
	 */
	public String getWorkingHours()
	{
		return getWorkingHours( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.workingHours</code> attribute. 
	 * @param value the workingHours - Working Hours
	 */
	public void setWorkingHours(final SessionContext ctx, final String value)
	{
		setProperty(ctx, WORKINGHOURS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHStaticContactUs.workingHours</code> attribute. 
	 * @param value the workingHours - Working Hours
	 */
	public void setWorkingHours(final String value)
	{
		setWorkingHours( getSession().getSessionContext(), value );
	}
	
}
