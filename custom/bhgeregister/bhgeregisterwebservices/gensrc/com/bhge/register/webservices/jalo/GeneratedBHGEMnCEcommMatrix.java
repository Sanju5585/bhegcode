/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.register.webservices.jalo;

import com.bhge.register.webservices.constants.BhgeregisterwebservicesConstants;
import com.bhge.register.webservices.jalo.BHGEApprovalDetails;
import com.bhge.register.webservices.jalo.BHGEInquiryEmail;
import com.bhge.register.webservices.jalo.BHGERegisterKeyValueData;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEMnCEcommMatrix}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEMnCEcommMatrix extends GenericItem
{
	/** Qualifier of the <code>BHGEMnCEcommMatrix.matrixRuleId</code> attribute **/
	public static final String MATRIXRULEID = "matrixRuleId";
	/** Qualifier of the <code>BHGEMnCEcommMatrix.regionAttrib</code> attribute **/
	public static final String REGIONATTRIB = "regionAttrib";
	/** Qualifier of the <code>BHGEMnCEcommMatrix.subregionAttrib</code> attribute **/
	public static final String SUBREGIONATTRIB = "subregionAttrib";
	/** Qualifier of the <code>BHGEMnCEcommMatrix.countryAttrib</code> attribute **/
	public static final String COUNTRYATTRIB = "countryAttrib";
	/** Qualifier of the <code>BHGEMnCEcommMatrix.productlineAttrib</code> attribute **/
	public static final String PRODUCTLINEATTRIB = "productlineAttrib";
	/** Qualifier of the <code>BHGEMnCEcommMatrix.csrApproverValue</code> attribute **/
	public static final String CSRAPPROVERVALUE = "csrApproverValue";
	/** Qualifier of the <code>BHGEMnCEcommMatrix.emailInquiryType</code> attribute **/
	public static final String EMAILINQUIRYTYPE = "emailInquiryType";
	/** Qualifier of the <code>BHGEMnCEcommMatrix.legalEntity</code> attribute **/
	public static final String LEGALENTITY = "legalEntity";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(MATRIXRULEID, AttributeMode.INITIAL);
		tmp.put(REGIONATTRIB, AttributeMode.INITIAL);
		tmp.put(SUBREGIONATTRIB, AttributeMode.INITIAL);
		tmp.put(COUNTRYATTRIB, AttributeMode.INITIAL);
		tmp.put(PRODUCTLINEATTRIB, AttributeMode.INITIAL);
		tmp.put(CSRAPPROVERVALUE, AttributeMode.INITIAL);
		tmp.put(EMAILINQUIRYTYPE, AttributeMode.INITIAL);
		tmp.put(LEGALENTITY, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.countryAttrib</code> attribute.
	 * @return the countryAttrib - Country Attribute
	 */
	public BHGERegisterKeyValueData getCountryAttrib(final SessionContext ctx)
	{
		return (BHGERegisterKeyValueData)getProperty( ctx, COUNTRYATTRIB);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.countryAttrib</code> attribute.
	 * @return the countryAttrib - Country Attribute
	 */
	public BHGERegisterKeyValueData getCountryAttrib()
	{
		return getCountryAttrib( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.countryAttrib</code> attribute. 
	 * @param value the countryAttrib - Country Attribute
	 */
	public void setCountryAttrib(final SessionContext ctx, final BHGERegisterKeyValueData value)
	{
		setProperty(ctx, COUNTRYATTRIB,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.countryAttrib</code> attribute. 
	 * @param value the countryAttrib - Country Attribute
	 */
	public void setCountryAttrib(final BHGERegisterKeyValueData value)
	{
		setCountryAttrib( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.csrApproverValue</code> attribute.
	 * @return the csrApproverValue - Approver Value
	 */
	public BHGEApprovalDetails getCsrApproverValue(final SessionContext ctx)
	{
		return (BHGEApprovalDetails)getProperty( ctx, CSRAPPROVERVALUE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.csrApproverValue</code> attribute.
	 * @return the csrApproverValue - Approver Value
	 */
	public BHGEApprovalDetails getCsrApproverValue()
	{
		return getCsrApproverValue( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.csrApproverValue</code> attribute. 
	 * @param value the csrApproverValue - Approver Value
	 */
	public void setCsrApproverValue(final SessionContext ctx, final BHGEApprovalDetails value)
	{
		setProperty(ctx, CSRAPPROVERVALUE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.csrApproverValue</code> attribute. 
	 * @param value the csrApproverValue - Approver Value
	 */
	public void setCsrApproverValue(final BHGEApprovalDetails value)
	{
		setCsrApproverValue( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.emailInquiryType</code> attribute.
	 * @return the emailInquiryType - InquiryType Value
	 */
	public BHGEInquiryEmail getEmailInquiryType(final SessionContext ctx)
	{
		return (BHGEInquiryEmail)getProperty( ctx, EMAILINQUIRYTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.emailInquiryType</code> attribute.
	 * @return the emailInquiryType - InquiryType Value
	 */
	public BHGEInquiryEmail getEmailInquiryType()
	{
		return getEmailInquiryType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.emailInquiryType</code> attribute. 
	 * @param value the emailInquiryType - InquiryType Value
	 */
	public void setEmailInquiryType(final SessionContext ctx, final BHGEInquiryEmail value)
	{
		setProperty(ctx, EMAILINQUIRYTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.emailInquiryType</code> attribute. 
	 * @param value the emailInquiryType - InquiryType Value
	 */
	public void setEmailInquiryType(final BHGEInquiryEmail value)
	{
		setEmailInquiryType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.legalEntity</code> attribute.
	 * @return the legalEntity - Legal Entity
	 */
	public BHGERegisterKeyValueData getLegalEntity(final SessionContext ctx)
	{
		return (BHGERegisterKeyValueData)getProperty( ctx, LEGALENTITY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.legalEntity</code> attribute.
	 * @return the legalEntity - Legal Entity
	 */
	public BHGERegisterKeyValueData getLegalEntity()
	{
		return getLegalEntity( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.legalEntity</code> attribute. 
	 * @param value the legalEntity - Legal Entity
	 */
	public void setLegalEntity(final SessionContext ctx, final BHGERegisterKeyValueData value)
	{
		setProperty(ctx, LEGALENTITY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.legalEntity</code> attribute. 
	 * @param value the legalEntity - Legal Entity
	 */
	public void setLegalEntity(final BHGERegisterKeyValueData value)
	{
		setLegalEntity( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.matrixRuleId</code> attribute.
	 * @return the matrixRuleId - Decision Matrix Rule ID
	 */
	public BHGERegisterKeyValueData getMatrixRuleId(final SessionContext ctx)
	{
		return (BHGERegisterKeyValueData)getProperty( ctx, MATRIXRULEID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.matrixRuleId</code> attribute.
	 * @return the matrixRuleId - Decision Matrix Rule ID
	 */
	public BHGERegisterKeyValueData getMatrixRuleId()
	{
		return getMatrixRuleId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.matrixRuleId</code> attribute. 
	 * @param value the matrixRuleId - Decision Matrix Rule ID
	 */
	public void setMatrixRuleId(final SessionContext ctx, final BHGERegisterKeyValueData value)
	{
		setProperty(ctx, MATRIXRULEID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.matrixRuleId</code> attribute. 
	 * @param value the matrixRuleId - Decision Matrix Rule ID
	 */
	public void setMatrixRuleId(final BHGERegisterKeyValueData value)
	{
		setMatrixRuleId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.productlineAttrib</code> attribute.
	 * @return the productlineAttrib - Product Line Attribute
	 */
	public BHGERegisterKeyValueData getProductlineAttrib(final SessionContext ctx)
	{
		return (BHGERegisterKeyValueData)getProperty( ctx, PRODUCTLINEATTRIB);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.productlineAttrib</code> attribute.
	 * @return the productlineAttrib - Product Line Attribute
	 */
	public BHGERegisterKeyValueData getProductlineAttrib()
	{
		return getProductlineAttrib( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.productlineAttrib</code> attribute. 
	 * @param value the productlineAttrib - Product Line Attribute
	 */
	public void setProductlineAttrib(final SessionContext ctx, final BHGERegisterKeyValueData value)
	{
		setProperty(ctx, PRODUCTLINEATTRIB,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.productlineAttrib</code> attribute. 
	 * @param value the productlineAttrib - Product Line Attribute
	 */
	public void setProductlineAttrib(final BHGERegisterKeyValueData value)
	{
		setProductlineAttrib( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.regionAttrib</code> attribute.
	 * @return the regionAttrib - Region Attribute
	 */
	public BHGERegisterKeyValueData getRegionAttrib(final SessionContext ctx)
	{
		return (BHGERegisterKeyValueData)getProperty( ctx, REGIONATTRIB);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.regionAttrib</code> attribute.
	 * @return the regionAttrib - Region Attribute
	 */
	public BHGERegisterKeyValueData getRegionAttrib()
	{
		return getRegionAttrib( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.regionAttrib</code> attribute. 
	 * @param value the regionAttrib - Region Attribute
	 */
	public void setRegionAttrib(final SessionContext ctx, final BHGERegisterKeyValueData value)
	{
		setProperty(ctx, REGIONATTRIB,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.regionAttrib</code> attribute. 
	 * @param value the regionAttrib - Region Attribute
	 */
	public void setRegionAttrib(final BHGERegisterKeyValueData value)
	{
		setRegionAttrib( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.subregionAttrib</code> attribute.
	 * @return the subregionAttrib - Sub Region Attribute
	 */
	public BHGERegisterKeyValueData getSubregionAttrib(final SessionContext ctx)
	{
		return (BHGERegisterKeyValueData)getProperty( ctx, SUBREGIONATTRIB);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEMnCEcommMatrix.subregionAttrib</code> attribute.
	 * @return the subregionAttrib - Sub Region Attribute
	 */
	public BHGERegisterKeyValueData getSubregionAttrib()
	{
		return getSubregionAttrib( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.subregionAttrib</code> attribute. 
	 * @param value the subregionAttrib - Sub Region Attribute
	 */
	public void setSubregionAttrib(final SessionContext ctx, final BHGERegisterKeyValueData value)
	{
		setProperty(ctx, SUBREGIONATTRIB,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEMnCEcommMatrix.subregionAttrib</code> attribute. 
	 * @param value the subregionAttrib - Sub Region Attribute
	 */
	public void setSubregionAttrib(final BHGERegisterKeyValueData value)
	{
		setSubregionAttrib( getSession().getSessionContext(), value );
	}
	
}
