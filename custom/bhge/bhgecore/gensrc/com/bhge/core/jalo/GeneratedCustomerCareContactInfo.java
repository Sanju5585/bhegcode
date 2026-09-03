/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.b2b.jalo.B2BUnit;
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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem CustomerCareContactInfo}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedCustomerCareContactInfo extends GenericItem
{
	/** Qualifier of the <code>CustomerCareContactInfo.contactUsEmail</code> attribute **/
	public static final String CONTACTUSEMAIL = "contactUsEmail";
	/** Qualifier of the <code>CustomerCareContactInfo.contactUsPhone</code> attribute **/
	public static final String CONTACTUSPHONE = "contactUsPhone";
	/** Qualifier of the <code>CustomerCareContactInfo.isDefault</code> attribute **/
	public static final String ISDEFAULT = "isDefault";
	/** Qualifier of the <code>CustomerCareContactInfo.sapSalesArea</code> attribute **/
	public static final String SAPSALESAREA = "sapSalesArea";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n SAPSALESAREA's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedCustomerCareContactInfo> SAPSALESAREAHANDLER = new BidirectionalOneToManyHandler<GeneratedCustomerCareContactInfo>(
	BhgeCoreConstants.TC.CUSTOMERCARECONTACTINFO,
	false,
	"sapSalesArea",
	null,
	false,
	true,
	CollectionType.COLLECTION
	);
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CONTACTUSEMAIL, AttributeMode.INITIAL);
		tmp.put(CONTACTUSPHONE, AttributeMode.INITIAL);
		tmp.put(ISDEFAULT, AttributeMode.INITIAL);
		tmp.put(SAPSALESAREA, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CustomerCareContactInfo.contactUsEmail</code> attribute.
	 * @return the contactUsEmail
	 */
	public String getContactUsEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONTACTUSEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CustomerCareContactInfo.contactUsEmail</code> attribute.
	 * @return the contactUsEmail
	 */
	public String getContactUsEmail()
	{
		return getContactUsEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CustomerCareContactInfo.contactUsEmail</code> attribute. 
	 * @param value the contactUsEmail
	 */
	public void setContactUsEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONTACTUSEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CustomerCareContactInfo.contactUsEmail</code> attribute. 
	 * @param value the contactUsEmail
	 */
	public void setContactUsEmail(final String value)
	{
		setContactUsEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CustomerCareContactInfo.contactUsPhone</code> attribute.
	 * @return the contactUsPhone
	 */
	public String getContactUsPhone(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONTACTUSPHONE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CustomerCareContactInfo.contactUsPhone</code> attribute.
	 * @return the contactUsPhone
	 */
	public String getContactUsPhone()
	{
		return getContactUsPhone( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CustomerCareContactInfo.contactUsPhone</code> attribute. 
	 * @param value the contactUsPhone
	 */
	public void setContactUsPhone(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONTACTUSPHONE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CustomerCareContactInfo.contactUsPhone</code> attribute. 
	 * @param value the contactUsPhone
	 */
	public void setContactUsPhone(final String value)
	{
		setContactUsPhone( getSession().getSessionContext(), value );
	}
	
	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes) throws JaloBusinessException
	{
		SAPSALESAREAHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CustomerCareContactInfo.isDefault</code> attribute.
	 * @return the isDefault
	 */
	public Boolean isIsDefault(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISDEFAULT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CustomerCareContactInfo.isDefault</code> attribute.
	 * @return the isDefault
	 */
	public Boolean isIsDefault()
	{
		return isIsDefault( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CustomerCareContactInfo.isDefault</code> attribute. 
	 * @return the isDefault
	 */
	public boolean isIsDefaultAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsDefault( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CustomerCareContactInfo.isDefault</code> attribute. 
	 * @return the isDefault
	 */
	public boolean isIsDefaultAsPrimitive()
	{
		return isIsDefaultAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CustomerCareContactInfo.isDefault</code> attribute. 
	 * @param value the isDefault
	 */
	public void setIsDefault(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISDEFAULT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CustomerCareContactInfo.isDefault</code> attribute. 
	 * @param value the isDefault
	 */
	public void setIsDefault(final Boolean value)
	{
		setIsDefault( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CustomerCareContactInfo.isDefault</code> attribute. 
	 * @param value the isDefault
	 */
	public void setIsDefault(final SessionContext ctx, final boolean value)
	{
		setIsDefault( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CustomerCareContactInfo.isDefault</code> attribute. 
	 * @param value the isDefault
	 */
	public void setIsDefault(final boolean value)
	{
		setIsDefault( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CustomerCareContactInfo.sapSalesArea</code> attribute.
	 * @return the sapSalesArea
	 */
	public B2BUnit getSapSalesArea(final SessionContext ctx)
	{
		return (B2BUnit)getProperty( ctx, SAPSALESAREA);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CustomerCareContactInfo.sapSalesArea</code> attribute.
	 * @return the sapSalesArea
	 */
	public B2BUnit getSapSalesArea()
	{
		return getSapSalesArea( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CustomerCareContactInfo.sapSalesArea</code> attribute. 
	 * @param value the sapSalesArea
	 */
	public void setSapSalesArea(final SessionContext ctx, final B2BUnit value)
	{
		SAPSALESAREAHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CustomerCareContactInfo.sapSalesArea</code> attribute. 
	 * @param value the sapSalesArea
	 */
	public void setSapSalesArea(final B2BUnit value)
	{
		setSapSalesArea( getSession().getSessionContext(), value );
	}
	
}
