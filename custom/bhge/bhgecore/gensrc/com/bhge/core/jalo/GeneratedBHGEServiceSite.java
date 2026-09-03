/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.jalo.PaymentMerchantInfo;
import de.hybris.platform.deliveryzone.jalo.Zone;
import de.hybris.platform.europe1.jalo.TaxRow;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.C2LManager;
import de.hybris.platform.jalo.c2l.Language;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.jalo.user.Address;
import de.hybris.platform.jalo.user.User;
import de.hybris.platform.util.Utilities;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEServiceSite}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEServiceSite extends GenericItem
{
	/** Qualifier of the <code>BHGEServiceSite.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>BHGEServiceSite.name</code> attribute **/
	public static final String NAME = "name";
	/** Qualifier of the <code>BHGEServiceSite.description</code> attribute **/
	public static final String DESCRIPTION = "description";
	/** Qualifier of the <code>BHGEServiceSite.siteAddress</code> attribute **/
	public static final String SITEADDRESS = "siteAddress";
	/** Qualifier of the <code>BHGEServiceSite.customerCareEmail</code> attribute **/
	public static final String CUSTOMERCAREEMAIL = "customerCareEmail";
	/** Qualifier of the <code>BHGEServiceSite.zonePK</code> attribute **/
	public static final String ZONEPK = "zonePK";
	/** Qualifier of the <code>BHGEServiceSite.requiredTaxCalculation</code> attribute **/
	public static final String REQUIREDTAXCALCULATION = "requiredTaxCalculation";
	/** Qualifier of the <code>BHGEServiceSite.taxRow</code> attribute **/
	public static final String TAXROW = "taxRow";
	/** Qualifier of the <code>BHGEServiceSite.supportedBhgeServiceCreation</code> attribute **/
	public static final String SUPPORTEDBHGESERVICECREATION = "supportedBhgeServiceCreation";
	/** Qualifier of the <code>BHGEServiceSite.supportsDepreciation</code> attribute **/
	public static final String SUPPORTSDEPRECIATION = "supportsDepreciation";
	/** Qualifier of the <code>BHGEServiceSite.paymentMerchantInfo</code> attribute **/
	public static final String PAYMENTMERCHANTINFO = "paymentMerchantInfo";
	/** Qualifier of the <code>BHGEServiceSite.requiredAdditionalShippingCharge</code> attribute **/
	public static final String REQUIREDADDITIONALSHIPPINGCHARGE = "requiredAdditionalShippingCharge";
	/** Qualifier of the <code>BHGEServiceSite.isBhgeServiceSiteLive</code> attribute **/
	public static final String ISBHGESERVICESITELIVE = "isBhgeServiceSiteLive";
	/** Qualifier of the <code>BHGEServiceSite.siteType</code> attribute **/
	public static final String SITETYPE = "siteType";
	/** Qualifier of the <code>BHGEServiceSite.erpSiteId</code> attribute **/
	public static final String ERPSITEID = "erpSiteId";
	/** Qualifier of the <code>BHGEServiceSite.users</code> attribute **/
	public static final String USERS = "users";
	/** Relation ordering override parameter constants for User2DefaultReturnSitesRelation from ((bhgecore))*/
	protected static String USER2DEFAULTRETURNSITESRELATION_SRC_ORDERED = "relation.User2DefaultReturnSitesRelation.source.ordered";
	protected static String USER2DEFAULTRETURNSITESRELATION_TGT_ORDERED = "relation.User2DefaultReturnSitesRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for User2DefaultReturnSitesRelation from ((bhgecore))*/
	protected static String USER2DEFAULTRETURNSITESRELATION_MARKMODIFIED = "relation.User2DefaultReturnSitesRelation.markmodified";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CODE, AttributeMode.INITIAL);
		tmp.put(NAME, AttributeMode.INITIAL);
		tmp.put(DESCRIPTION, AttributeMode.INITIAL);
		tmp.put(SITEADDRESS, AttributeMode.INITIAL);
		tmp.put(CUSTOMERCAREEMAIL, AttributeMode.INITIAL);
		tmp.put(ZONEPK, AttributeMode.INITIAL);
		tmp.put(REQUIREDTAXCALCULATION, AttributeMode.INITIAL);
		tmp.put(TAXROW, AttributeMode.INITIAL);
		tmp.put(SUPPORTEDBHGESERVICECREATION, AttributeMode.INITIAL);
		tmp.put(SUPPORTSDEPRECIATION, AttributeMode.INITIAL);
		tmp.put(PAYMENTMERCHANTINFO, AttributeMode.INITIAL);
		tmp.put(REQUIREDADDITIONALSHIPPINGCHARGE, AttributeMode.INITIAL);
		tmp.put(ISBHGESERVICESITELIVE, AttributeMode.INITIAL);
		tmp.put(SITETYPE, AttributeMode.INITIAL);
		tmp.put(ERPSITEID, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.code</code> attribute.
	 * @return the code
	 */
	public String getCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.code</code> attribute.
	 * @return the code
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.code</code> attribute. 
	 * @param value the code
	 */
	public void setCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.code</code> attribute. 
	 * @param value the code
	 */
	public void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.customerCareEmail</code> attribute.
	 * @return the customerCareEmail
	 */
	public String getCustomerCareEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CUSTOMERCAREEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.customerCareEmail</code> attribute.
	 * @return the customerCareEmail
	 */
	public String getCustomerCareEmail()
	{
		return getCustomerCareEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.customerCareEmail</code> attribute. 
	 * @param value the customerCareEmail
	 */
	public void setCustomerCareEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CUSTOMERCAREEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.customerCareEmail</code> attribute. 
	 * @param value the customerCareEmail
	 */
	public void setCustomerCareEmail(final String value)
	{
		setCustomerCareEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.description</code> attribute.
	 * @return the description
	 */
	public String getDescription(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEServiceSite.getDescription requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, DESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.description</code> attribute.
	 * @return the description
	 */
	public String getDescription()
	{
		return getDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.description</code> attribute. 
	 * @return the localized description
	 */
	public Map<Language,String> getAllDescription(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,DESCRIPTION,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.description</code> attribute. 
	 * @return the localized description
	 */
	public Map<Language,String> getAllDescription()
	{
		return getAllDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.description</code> attribute. 
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
			throw new JaloInvalidParameterException("GeneratedBHGEServiceSite.setDescription requires a session language", 0 );
		}
		setLocalizedProperty(ctx, DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final String value)
	{
		setDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.description</code> attribute. 
	 * @param value the description
	 */
	public void setAllDescription(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.description</code> attribute. 
	 * @param value the description
	 */
	public void setAllDescription(final Map<Language,String> value)
	{
		setAllDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.erpSiteId</code> attribute.
	 * @return the erpSiteId
	 */
	public String getErpSiteId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ERPSITEID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.erpSiteId</code> attribute.
	 * @return the erpSiteId
	 */
	public String getErpSiteId()
	{
		return getErpSiteId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.erpSiteId</code> attribute. 
	 * @param value the erpSiteId
	 */
	public void setErpSiteId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ERPSITEID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.erpSiteId</code> attribute. 
	 * @param value the erpSiteId
	 */
	public void setErpSiteId(final String value)
	{
		setErpSiteId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.isBhgeServiceSiteLive</code> attribute.
	 * @return the isBhgeServiceSiteLive
	 */
	public Boolean isIsBhgeServiceSiteLive(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISBHGESERVICESITELIVE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.isBhgeServiceSiteLive</code> attribute.
	 * @return the isBhgeServiceSiteLive
	 */
	public Boolean isIsBhgeServiceSiteLive()
	{
		return isIsBhgeServiceSiteLive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.isBhgeServiceSiteLive</code> attribute. 
	 * @return the isBhgeServiceSiteLive
	 */
	public boolean isIsBhgeServiceSiteLiveAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsBhgeServiceSiteLive( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.isBhgeServiceSiteLive</code> attribute. 
	 * @return the isBhgeServiceSiteLive
	 */
	public boolean isIsBhgeServiceSiteLiveAsPrimitive()
	{
		return isIsBhgeServiceSiteLiveAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.isBhgeServiceSiteLive</code> attribute. 
	 * @param value the isBhgeServiceSiteLive
	 */
	public void setIsBhgeServiceSiteLive(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISBHGESERVICESITELIVE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.isBhgeServiceSiteLive</code> attribute. 
	 * @param value the isBhgeServiceSiteLive
	 */
	public void setIsBhgeServiceSiteLive(final Boolean value)
	{
		setIsBhgeServiceSiteLive( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.isBhgeServiceSiteLive</code> attribute. 
	 * @param value the isBhgeServiceSiteLive
	 */
	public void setIsBhgeServiceSiteLive(final SessionContext ctx, final boolean value)
	{
		setIsBhgeServiceSiteLive( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.isBhgeServiceSiteLive</code> attribute. 
	 * @param value the isBhgeServiceSiteLive
	 */
	public void setIsBhgeServiceSiteLive(final boolean value)
	{
		setIsBhgeServiceSiteLive( getSession().getSessionContext(), value );
	}
	
	/**
	 * @deprecated since 2011, use {@link Utilities#getMarkModifiedOverride(de.hybris.platform.jalo.type.RelationType)
	 */
	@Override
	@Deprecated(since = "2105", forRemoval = true)
	public boolean isMarkModifiedDisabled(final Item referencedItem)
	{
		ComposedType relationSecondEnd0 = TypeManager.getInstance().getComposedType("User");
		if(relationSecondEnd0.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(USER2DEFAULTRETURNSITESRELATION_MARKMODIFIED);
		}
		return true;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.name</code> attribute.
	 * @return the name
	 */
	public String getName(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEServiceSite.getName requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.name</code> attribute.
	 * @return the name
	 */
	public String getName()
	{
		return getName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.name</code> attribute. 
	 * @return the localized name
	 */
	public Map<Language,String> getAllName(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,NAME,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.name</code> attribute. 
	 * @return the localized name
	 */
	public Map<Language,String> getAllName()
	{
		return getAllName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.name</code> attribute. 
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
			throw new JaloInvalidParameterException("GeneratedBHGEServiceSite.setName requires a session language", 0 );
		}
		setLocalizedProperty(ctx, NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final String value)
	{
		setName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.name</code> attribute. 
	 * @param value the name
	 */
	public void setAllName(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.name</code> attribute. 
	 * @param value the name
	 */
	public void setAllName(final Map<Language,String> value)
	{
		setAllName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.paymentMerchantInfo</code> attribute.
	 * @return the paymentMerchantInfo - Payment Merchant Information for the Site
	 */
	public PaymentMerchantInfo getPaymentMerchantInfo(final SessionContext ctx)
	{
		return (PaymentMerchantInfo)getProperty( ctx, PAYMENTMERCHANTINFO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.paymentMerchantInfo</code> attribute.
	 * @return the paymentMerchantInfo - Payment Merchant Information for the Site
	 */
	public PaymentMerchantInfo getPaymentMerchantInfo()
	{
		return getPaymentMerchantInfo( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.paymentMerchantInfo</code> attribute. 
	 * @param value the paymentMerchantInfo - Payment Merchant Information for the Site
	 */
	public void setPaymentMerchantInfo(final SessionContext ctx, final PaymentMerchantInfo value)
	{
		setProperty(ctx, PAYMENTMERCHANTINFO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.paymentMerchantInfo</code> attribute. 
	 * @param value the paymentMerchantInfo - Payment Merchant Information for the Site
	 */
	public void setPaymentMerchantInfo(final PaymentMerchantInfo value)
	{
		setPaymentMerchantInfo( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.requiredAdditionalShippingCharge</code> attribute.
	 * @return the requiredAdditionalShippingCharge
	 */
	public Boolean isRequiredAdditionalShippingCharge(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, REQUIREDADDITIONALSHIPPINGCHARGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.requiredAdditionalShippingCharge</code> attribute.
	 * @return the requiredAdditionalShippingCharge
	 */
	public Boolean isRequiredAdditionalShippingCharge()
	{
		return isRequiredAdditionalShippingCharge( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.requiredAdditionalShippingCharge</code> attribute. 
	 * @return the requiredAdditionalShippingCharge
	 */
	public boolean isRequiredAdditionalShippingChargeAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isRequiredAdditionalShippingCharge( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.requiredAdditionalShippingCharge</code> attribute. 
	 * @return the requiredAdditionalShippingCharge
	 */
	public boolean isRequiredAdditionalShippingChargeAsPrimitive()
	{
		return isRequiredAdditionalShippingChargeAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.requiredAdditionalShippingCharge</code> attribute. 
	 * @param value the requiredAdditionalShippingCharge
	 */
	public void setRequiredAdditionalShippingCharge(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, REQUIREDADDITIONALSHIPPINGCHARGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.requiredAdditionalShippingCharge</code> attribute. 
	 * @param value the requiredAdditionalShippingCharge
	 */
	public void setRequiredAdditionalShippingCharge(final Boolean value)
	{
		setRequiredAdditionalShippingCharge( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.requiredAdditionalShippingCharge</code> attribute. 
	 * @param value the requiredAdditionalShippingCharge
	 */
	public void setRequiredAdditionalShippingCharge(final SessionContext ctx, final boolean value)
	{
		setRequiredAdditionalShippingCharge( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.requiredAdditionalShippingCharge</code> attribute. 
	 * @param value the requiredAdditionalShippingCharge
	 */
	public void setRequiredAdditionalShippingCharge(final boolean value)
	{
		setRequiredAdditionalShippingCharge( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.requiredTaxCalculation</code> attribute.
	 * @return the requiredTaxCalculation
	 */
	public Boolean isRequiredTaxCalculation(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, REQUIREDTAXCALCULATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.requiredTaxCalculation</code> attribute.
	 * @return the requiredTaxCalculation
	 */
	public Boolean isRequiredTaxCalculation()
	{
		return isRequiredTaxCalculation( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.requiredTaxCalculation</code> attribute. 
	 * @return the requiredTaxCalculation
	 */
	public boolean isRequiredTaxCalculationAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isRequiredTaxCalculation( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.requiredTaxCalculation</code> attribute. 
	 * @return the requiredTaxCalculation
	 */
	public boolean isRequiredTaxCalculationAsPrimitive()
	{
		return isRequiredTaxCalculationAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.requiredTaxCalculation</code> attribute. 
	 * @param value the requiredTaxCalculation
	 */
	public void setRequiredTaxCalculation(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, REQUIREDTAXCALCULATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.requiredTaxCalculation</code> attribute. 
	 * @param value the requiredTaxCalculation
	 */
	public void setRequiredTaxCalculation(final Boolean value)
	{
		setRequiredTaxCalculation( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.requiredTaxCalculation</code> attribute. 
	 * @param value the requiredTaxCalculation
	 */
	public void setRequiredTaxCalculation(final SessionContext ctx, final boolean value)
	{
		setRequiredTaxCalculation( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.requiredTaxCalculation</code> attribute. 
	 * @param value the requiredTaxCalculation
	 */
	public void setRequiredTaxCalculation(final boolean value)
	{
		setRequiredTaxCalculation( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.siteAddress</code> attribute.
	 * @return the siteAddress
	 */
	public Address getSiteAddress(final SessionContext ctx)
	{
		return (Address)getProperty( ctx, SITEADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.siteAddress</code> attribute.
	 * @return the siteAddress
	 */
	public Address getSiteAddress()
	{
		return getSiteAddress( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.siteAddress</code> attribute. 
	 * @param value the siteAddress
	 */
	public void setSiteAddress(final SessionContext ctx, final Address value)
	{
		setProperty(ctx, SITEADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.siteAddress</code> attribute. 
	 * @param value the siteAddress
	 */
	public void setSiteAddress(final Address value)
	{
		setSiteAddress( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.siteType</code> attribute.
	 * @return the siteType
	 */
	public String getSiteType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SITETYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.siteType</code> attribute.
	 * @return the siteType
	 */
	public String getSiteType()
	{
		return getSiteType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.siteType</code> attribute. 
	 * @param value the siteType
	 */
	public void setSiteType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SITETYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.siteType</code> attribute. 
	 * @param value the siteType
	 */
	public void setSiteType(final String value)
	{
		setSiteType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.supportedBhgeServiceCreation</code> attribute.
	 * @return the supportedBhgeServiceCreation
	 */
	public Boolean isSupportedBhgeServiceCreation(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, SUPPORTEDBHGESERVICECREATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.supportedBhgeServiceCreation</code> attribute.
	 * @return the supportedBhgeServiceCreation
	 */
	public Boolean isSupportedBhgeServiceCreation()
	{
		return isSupportedBhgeServiceCreation( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.supportedBhgeServiceCreation</code> attribute. 
	 * @return the supportedBhgeServiceCreation
	 */
	public boolean isSupportedBhgeServiceCreationAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isSupportedBhgeServiceCreation( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.supportedBhgeServiceCreation</code> attribute. 
	 * @return the supportedBhgeServiceCreation
	 */
	public boolean isSupportedBhgeServiceCreationAsPrimitive()
	{
		return isSupportedBhgeServiceCreationAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.supportedBhgeServiceCreation</code> attribute. 
	 * @param value the supportedBhgeServiceCreation
	 */
	public void setSupportedBhgeServiceCreation(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, SUPPORTEDBHGESERVICECREATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.supportedBhgeServiceCreation</code> attribute. 
	 * @param value the supportedBhgeServiceCreation
	 */
	public void setSupportedBhgeServiceCreation(final Boolean value)
	{
		setSupportedBhgeServiceCreation( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.supportedBhgeServiceCreation</code> attribute. 
	 * @param value the supportedBhgeServiceCreation
	 */
	public void setSupportedBhgeServiceCreation(final SessionContext ctx, final boolean value)
	{
		setSupportedBhgeServiceCreation( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.supportedBhgeServiceCreation</code> attribute. 
	 * @param value the supportedBhgeServiceCreation
	 */
	public void setSupportedBhgeServiceCreation(final boolean value)
	{
		setSupportedBhgeServiceCreation( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.supportsDepreciation</code> attribute.
	 * @return the supportsDepreciation
	 */
	public Boolean isSupportsDepreciation(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, SUPPORTSDEPRECIATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.supportsDepreciation</code> attribute.
	 * @return the supportsDepreciation
	 */
	public Boolean isSupportsDepreciation()
	{
		return isSupportsDepreciation( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.supportsDepreciation</code> attribute. 
	 * @return the supportsDepreciation
	 */
	public boolean isSupportsDepreciationAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isSupportsDepreciation( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.supportsDepreciation</code> attribute. 
	 * @return the supportsDepreciation
	 */
	public boolean isSupportsDepreciationAsPrimitive()
	{
		return isSupportsDepreciationAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.supportsDepreciation</code> attribute. 
	 * @param value the supportsDepreciation
	 */
	public void setSupportsDepreciation(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, SUPPORTSDEPRECIATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.supportsDepreciation</code> attribute. 
	 * @param value the supportsDepreciation
	 */
	public void setSupportsDepreciation(final Boolean value)
	{
		setSupportsDepreciation( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.supportsDepreciation</code> attribute. 
	 * @param value the supportsDepreciation
	 */
	public void setSupportsDepreciation(final SessionContext ctx, final boolean value)
	{
		setSupportsDepreciation( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.supportsDepreciation</code> attribute. 
	 * @param value the supportsDepreciation
	 */
	public void setSupportsDepreciation(final boolean value)
	{
		setSupportsDepreciation( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.taxRow</code> attribute.
	 * @return the taxRow
	 */
	public TaxRow getTaxRow(final SessionContext ctx)
	{
		return (TaxRow)getProperty( ctx, TAXROW);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.taxRow</code> attribute.
	 * @return the taxRow
	 */
	public TaxRow getTaxRow()
	{
		return getTaxRow( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.taxRow</code> attribute. 
	 * @param value the taxRow
	 */
	public void setTaxRow(final SessionContext ctx, final TaxRow value)
	{
		setProperty(ctx, TAXROW,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.taxRow</code> attribute. 
	 * @param value the taxRow
	 */
	public void setTaxRow(final TaxRow value)
	{
		setTaxRow( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.users</code> attribute.
	 * @return the users
	 */
	public Collection<User> getUsers(final SessionContext ctx)
	{
		final List<User> items = getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.USER2DEFAULTRETURNSITESRELATION,
			"User",
			null,
			false,
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.users</code> attribute.
	 * @return the users
	 */
	public Collection<User> getUsers()
	{
		return getUsers( getSession().getSessionContext() );
	}
	
	public long getUsersCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.USER2DEFAULTRETURNSITESRELATION,
			"User",
			null
		);
	}
	
	public long getUsersCount()
	{
		return getUsersCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.users</code> attribute. 
	 * @param value the users
	 */
	public void setUsers(final SessionContext ctx, final Collection<User> value)
	{
		setLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.USER2DEFAULTRETURNSITESRELATION,
			null,
			value,
			false,
			false,
			Utilities.getMarkModifiedOverride(USER2DEFAULTRETURNSITESRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.users</code> attribute. 
	 * @param value the users
	 */
	public void setUsers(final Collection<User> value)
	{
		setUsers( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to users. 
	 * @param value the item to add to users
	 */
	public void addToUsers(final SessionContext ctx, final User value)
	{
		addLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.USER2DEFAULTRETURNSITESRELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(USER2DEFAULTRETURNSITESRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to users. 
	 * @param value the item to add to users
	 */
	public void addToUsers(final User value)
	{
		addToUsers( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from users. 
	 * @param value the item to remove from users
	 */
	public void removeFromUsers(final SessionContext ctx, final User value)
	{
		removeLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.USER2DEFAULTRETURNSITESRELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(USER2DEFAULTRETURNSITESRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from users. 
	 * @param value the item to remove from users
	 */
	public void removeFromUsers(final User value)
	{
		removeFromUsers( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.zonePK</code> attribute.
	 * @return the zonePK
	 */
	public Zone getZonePK(final SessionContext ctx)
	{
		return (Zone)getProperty( ctx, ZONEPK);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceSite.zonePK</code> attribute.
	 * @return the zonePK
	 */
	public Zone getZonePK()
	{
		return getZonePK( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.zonePK</code> attribute. 
	 * @param value the zonePK
	 */
	public void setZonePK(final SessionContext ctx, final Zone value)
	{
		setProperty(ctx, ZONEPK,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceSite.zonePK</code> attribute. 
	 * @param value the zonePK
	 */
	public void setZonePK(final Zone value)
	{
		setZonePK( getSession().getSessionContext(), value );
	}
	
}
