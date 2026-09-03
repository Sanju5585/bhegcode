/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 *  
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.core.model;

import com.bhge.register.webservices.constants.BhgeregisterwebservicesConstants;
import com.bhge.register.webservices.jalo.BHGEAccountData;
import com.bhge.register.webservices.jalo.BHGEApprovalDetails;
import com.bhge.register.webservices.jalo.BHGERegisterKeyValueData;
import de.hybris.platform.b2b.jalo.B2BCustomer;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import de.hybris.platform.jalo.media.Media;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.jalo.user.Address;
import de.hybris.platform.util.Utilities;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.core.model.BHGERegieterCustomer BHGERegieterCustomer}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGERegieterCustomer extends B2BCustomer
{
	/** Qualifier of the <code>BHGERegieterCustomer.givenName</code> attribute **/
	public static final String GIVENNAME = "givenName";
	/** Qualifier of the <code>BHGERegieterCustomer.familyName</code> attribute **/
	public static final String FAMILYNAME = "familyName";
	/** Qualifier of the <code>BHGERegieterCustomer.companyName</code> attribute **/
	public static final String COMPANYNAME = "companyName";
	/** Qualifier of the <code>BHGERegieterCustomer.companyAddress</code> attribute **/
	public static final String COMPANYADDRESS = "companyAddress";
	/** Qualifier of the <code>BHGERegieterCustomer.productLine</code> attribute **/
	public static final String PRODUCTLINE = "productLine";
	/** Qualifier of the <code>BHGERegieterCustomer.activeStatus</code> attribute **/
	public static final String ACTIVESTATUS = "activeStatus";
	/** Qualifier of the <code>BHGERegieterCustomer.requestCustomerId</code> attribute **/
	public static final String REQUESTCUSTOMERID = "requestCustomerId";
	/** Qualifier of the <code>BHGERegieterCustomer.governmentOrg</code> attribute **/
	public static final String GOVERNMENTORG = "governmentOrg";
	/** Qualifier of the <code>BHGERegieterCustomer.approverCustomerDetails</code> attribute **/
	public static final String APPROVERCUSTOMERDETAILS = "approverCustomerDetails";
	/** Qualifier of the <code>BHGERegieterCustomer.tokenValue</code> attribute **/
	public static final String TOKENVALUE = "tokenValue";
	/** Qualifier of the <code>BHGERegieterCustomer.tokenTime</code> attribute **/
	public static final String TOKENTIME = "tokenTime";
	/** Qualifier of the <code>BHGERegieterCustomer.iqmCompanyAddress</code> attribute **/
	public static final String IQMCOMPANYADDRESS = "iqmCompanyAddress";
	/** Qualifier of the <code>BHGERegieterCustomer.iqmRegion</code> attribute **/
	public static final String IQMREGION = "iqmRegion";
	/** Qualifier of the <code>BHGERegieterCustomer.iqmProductLine</code> attribute **/
	public static final String IQMPRODUCTLINE = "iqmProductLine";
	/** Qualifier of the <code>BHGERegieterCustomer.iqmDunsNumber</code> attribute **/
	public static final String IQMDUNSNUMBER = "iqmDunsNumber";
	/** Qualifier of the <code>BHGERegieterCustomer.damCustomerId</code> attribute **/
	public static final String DAMCUSTOMERID = "damCustomerId";
	/** Qualifier of the <code>BHGERegieterCustomer.damCompanyAddress</code> attribute **/
	public static final String DAMCOMPANYADDRESS = "damCompanyAddress";
	/** Qualifier of the <code>BHGERegieterCustomer.damProductLine</code> attribute **/
	public static final String DAMPRODUCTLINE = "damProductLine";
	/** Qualifier of the <code>BHGERegieterCustomer.fptProductLine</code> attribute **/
	public static final String FPTPRODUCTLINE = "fptProductLine";
	/** Qualifier of the <code>BHGERegieterCustomer.fptLegalEntities</code> attribute **/
	public static final String FPTLEGALENTITIES = "fptLegalEntities";
	/** Qualifier of the <code>BHGERegieterCustomer.fptRoles</code> attribute **/
	public static final String FPTROLES = "fptRoles";
	/** Qualifier of the <code>BHGERegieterCustomer.fptLegalEntity</code> attribute **/
	public static final String FPTLEGALENTITY = "fptLegalEntity";
	/** Qualifier of the <code>BHGERegieterCustomer.fptSaleAreaText</code> attribute **/
	public static final String FPTSALEAREATEXT = "fptSaleAreaText";
	/** Qualifier of the <code>BHGERegieterCustomer.ofsAccountType</code> attribute **/
	public static final String OFSACCOUNTTYPE = "ofsAccountType";
	/** Qualifier of the <code>BHGERegieterCustomer.subProductLine</code> attribute **/
	public static final String SUBPRODUCTLINE = "subProductLine";
	/** Qualifier of the <code>BHGERegieterCustomer.dsMarket</code> attribute **/
	public static final String DSMARKET = "dsMarket";
	/** Qualifier of the <code>BHGERegieterCustomer.dsRole</code> attribute **/
	public static final String DSROLE = "dsRole";
	/** Qualifier of the <code>BHGERegieterCustomer.dsAccountType</code> attribute **/
	public static final String DSACCOUNTTYPE = "dsAccountType";
	/** Qualifier of the <code>BHGERegieterCustomer.endCustomer</code> attribute **/
	public static final String ENDCUSTOMER = "endCustomer";
	/** Qualifier of the <code>BHGERegieterCustomer.governmentEntity</code> attribute **/
	public static final String GOVERNMENTENTITY = "governmentEntity";
	/** Qualifier of the <code>BHGERegieterCustomer.detailNumber</code> attribute **/
	public static final String DETAILNUMBER = "detailNumber";
	/** Qualifier of the <code>BHGERegieterCustomer.addressType</code> attribute **/
	public static final String ADDRESSTYPE = "addressType";
	/** Qualifier of the <code>BHGERegieterCustomer.detailNumberValue</code> attribute **/
	public static final String DETAILNUMBERVALUE = "detailNumberValue";
	/** Qualifier of the <code>BHGERegieterCustomer.addressProof</code> attribute **/
	public static final String ADDRESSPROOF = "addressProof";
	/** Qualifier of the <code>BHGERegieterCustomer.ownershipStructure</code> attribute **/
	public static final String OWNERSHIPSTRUCTURE = "ownershipStructure";
	/** Qualifier of the <code>BHGERegieterCustomer.bhgeApprovers</code> attribute **/
	public static final String BHGEAPPROVERS = "bhgeApprovers";
	/** Relation ordering override parameter constants for BHGEApprover2CustomerRelation from ((bhgeregisterwebservices))*/
	protected static String BHGEAPPROVER2CUSTOMERRELATION_SRC_ORDERED = "relation.BHGEApprover2CustomerRelation.source.ordered";
	protected static String BHGEAPPROVER2CUSTOMERRELATION_TGT_ORDERED = "relation.BHGEApprover2CustomerRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for BHGEApprover2CustomerRelation from ((bhgeregisterwebservices))*/
	protected static String BHGEAPPROVER2CUSTOMERRELATION_MARKMODIFIED = "relation.BHGEApprover2CustomerRelation.markmodified";
	/** Qualifier of the <code>BHGERegieterCustomer.bhgeAccounts</code> attribute **/
	public static final String BHGEACCOUNTS = "bhgeAccounts";
	/** Relation ordering override parameter constants for BHGEAccount2CustomerRelation from ((bhgeregisterwebservices))*/
	protected static String BHGEACCOUNT2CUSTOMERRELATION_SRC_ORDERED = "relation.BHGEAccount2CustomerRelation.source.ordered";
	protected static String BHGEACCOUNT2CUSTOMERRELATION_TGT_ORDERED = "relation.BHGEAccount2CustomerRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for BHGEAccount2CustomerRelation from ((bhgeregisterwebservices))*/
	protected static String BHGEACCOUNT2CUSTOMERRELATION_MARKMODIFIED = "relation.BHGEAccount2CustomerRelation.markmodified";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(B2BCustomer.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(GIVENNAME, AttributeMode.INITIAL);
		tmp.put(FAMILYNAME, AttributeMode.INITIAL);
		tmp.put(COMPANYNAME, AttributeMode.INITIAL);
		tmp.put(COMPANYADDRESS, AttributeMode.INITIAL);
		tmp.put(PRODUCTLINE, AttributeMode.INITIAL);
		tmp.put(ACTIVESTATUS, AttributeMode.INITIAL);
		tmp.put(REQUESTCUSTOMERID, AttributeMode.INITIAL);
		tmp.put(GOVERNMENTORG, AttributeMode.INITIAL);
		tmp.put(APPROVERCUSTOMERDETAILS, AttributeMode.INITIAL);
		tmp.put(TOKENVALUE, AttributeMode.INITIAL);
		tmp.put(TOKENTIME, AttributeMode.INITIAL);
		tmp.put(IQMCOMPANYADDRESS, AttributeMode.INITIAL);
		tmp.put(IQMREGION, AttributeMode.INITIAL);
		tmp.put(IQMPRODUCTLINE, AttributeMode.INITIAL);
		tmp.put(IQMDUNSNUMBER, AttributeMode.INITIAL);
		tmp.put(DAMCUSTOMERID, AttributeMode.INITIAL);
		tmp.put(DAMCOMPANYADDRESS, AttributeMode.INITIAL);
		tmp.put(DAMPRODUCTLINE, AttributeMode.INITIAL);
		tmp.put(FPTPRODUCTLINE, AttributeMode.INITIAL);
		tmp.put(FPTLEGALENTITIES, AttributeMode.INITIAL);
		tmp.put(FPTROLES, AttributeMode.INITIAL);
		tmp.put(FPTLEGALENTITY, AttributeMode.INITIAL);
		tmp.put(FPTSALEAREATEXT, AttributeMode.INITIAL);
		tmp.put(OFSACCOUNTTYPE, AttributeMode.INITIAL);
		tmp.put(SUBPRODUCTLINE, AttributeMode.INITIAL);
		tmp.put(DSMARKET, AttributeMode.INITIAL);
		tmp.put(DSROLE, AttributeMode.INITIAL);
		tmp.put(DSACCOUNTTYPE, AttributeMode.INITIAL);
		tmp.put(ENDCUSTOMER, AttributeMode.INITIAL);
		tmp.put(GOVERNMENTENTITY, AttributeMode.INITIAL);
		tmp.put(DETAILNUMBER, AttributeMode.INITIAL);
		tmp.put(ADDRESSTYPE, AttributeMode.INITIAL);
		tmp.put(DETAILNUMBERVALUE, AttributeMode.INITIAL);
		tmp.put(ADDRESSPROOF, AttributeMode.INITIAL);
		tmp.put(OWNERSHIPSTRUCTURE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.activeStatus</code> attribute.
	 * @return the activeStatus - User Active Status
	 */
	public Boolean isActiveStatus(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ACTIVESTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.activeStatus</code> attribute.
	 * @return the activeStatus - User Active Status
	 */
	public Boolean isActiveStatus()
	{
		return isActiveStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.activeStatus</code> attribute. 
	 * @return the activeStatus - User Active Status
	 */
	public boolean isActiveStatusAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isActiveStatus( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.activeStatus</code> attribute. 
	 * @return the activeStatus - User Active Status
	 */
	public boolean isActiveStatusAsPrimitive()
	{
		return isActiveStatusAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.activeStatus</code> attribute. 
	 * @param value the activeStatus - User Active Status
	 */
	public void setActiveStatus(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ACTIVESTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.activeStatus</code> attribute. 
	 * @param value the activeStatus - User Active Status
	 */
	public void setActiveStatus(final Boolean value)
	{
		setActiveStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.activeStatus</code> attribute. 
	 * @param value the activeStatus - User Active Status
	 */
	public void setActiveStatus(final SessionContext ctx, final boolean value)
	{
		setActiveStatus( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.activeStatus</code> attribute. 
	 * @param value the activeStatus - User Active Status
	 */
	public void setActiveStatus(final boolean value)
	{
		setActiveStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.addressProof</code> attribute.
	 * @return the addressProof - KYC Document
	 */
	public Media getAddressProof(final SessionContext ctx)
	{
		return (Media)getProperty( ctx, ADDRESSPROOF);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.addressProof</code> attribute.
	 * @return the addressProof - KYC Document
	 */
	public Media getAddressProof()
	{
		return getAddressProof( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.addressProof</code> attribute. 
	 * @param value the addressProof - KYC Document
	 */
	public void setAddressProof(final SessionContext ctx, final Media value)
	{
		setProperty(ctx, ADDRESSPROOF,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.addressProof</code> attribute. 
	 * @param value the addressProof - KYC Document
	 */
	public void setAddressProof(final Media value)
	{
		setAddressProof( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.addressType</code> attribute.
	 * @return the addressType - Address Type
	 */
	public EnumerationValue getAddressType(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, ADDRESSTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.addressType</code> attribute.
	 * @return the addressType - Address Type
	 */
	public EnumerationValue getAddressType()
	{
		return getAddressType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.addressType</code> attribute. 
	 * @param value the addressType - Address Type
	 */
	public void setAddressType(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, ADDRESSTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.addressType</code> attribute. 
	 * @param value the addressType - Address Type
	 */
	public void setAddressType(final EnumerationValue value)
	{
		setAddressType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.approverCustomerDetails</code> attribute.
	 * @return the approverCustomerDetails - User SAP Sales Area
	 */
	public Collection<String> getApproverCustomerDetails(final SessionContext ctx)
	{
		Collection<String> coll = (Collection<String>)getProperty( ctx, APPROVERCUSTOMERDETAILS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.approverCustomerDetails</code> attribute.
	 * @return the approverCustomerDetails - User SAP Sales Area
	 */
	public Collection<String> getApproverCustomerDetails()
	{
		return getApproverCustomerDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.approverCustomerDetails</code> attribute. 
	 * @param value the approverCustomerDetails - User SAP Sales Area
	 */
	public void setApproverCustomerDetails(final SessionContext ctx, final Collection<String> value)
	{
		setProperty(ctx, APPROVERCUSTOMERDETAILS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.approverCustomerDetails</code> attribute. 
	 * @param value the approverCustomerDetails - User SAP Sales Area
	 */
	public void setApproverCustomerDetails(final Collection<String> value)
	{
		setApproverCustomerDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.bhgeAccounts</code> attribute.
	 * @return the bhgeAccounts - Approver List
	 */
	public List<BHGEAccountData> getBhgeAccounts(final SessionContext ctx)
	{
		final List<BHGEAccountData> items = getLinkedItems( 
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.BHGEACCOUNT2CUSTOMERRELATION,
			"BHGEAccountData",
			null,
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_TGT_ORDERED, true)
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.bhgeAccounts</code> attribute.
	 * @return the bhgeAccounts - Approver List
	 */
	public List<BHGEAccountData> getBhgeAccounts()
	{
		return getBhgeAccounts( getSession().getSessionContext() );
	}
	
	public long getBhgeAccountsCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.BHGEACCOUNT2CUSTOMERRELATION,
			"BHGEAccountData",
			null
		);
	}
	
	public long getBhgeAccountsCount()
	{
		return getBhgeAccountsCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.bhgeAccounts</code> attribute. 
	 * @param value the bhgeAccounts - Approver List
	 */
	public void setBhgeAccounts(final SessionContext ctx, final List<BHGEAccountData> value)
	{
		setLinkedItems( 
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.BHGEACCOUNT2CUSTOMERRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEACCOUNT2CUSTOMERRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.bhgeAccounts</code> attribute. 
	 * @param value the bhgeAccounts - Approver List
	 */
	public void setBhgeAccounts(final List<BHGEAccountData> value)
	{
		setBhgeAccounts( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeAccounts. 
	 * @param value the item to add to bhgeAccounts - Approver List
	 */
	public void addToBhgeAccounts(final SessionContext ctx, final BHGEAccountData value)
	{
		addLinkedItems( 
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.BHGEACCOUNT2CUSTOMERRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEACCOUNT2CUSTOMERRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeAccounts. 
	 * @param value the item to add to bhgeAccounts - Approver List
	 */
	public void addToBhgeAccounts(final BHGEAccountData value)
	{
		addToBhgeAccounts( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeAccounts. 
	 * @param value the item to remove from bhgeAccounts - Approver List
	 */
	public void removeFromBhgeAccounts(final SessionContext ctx, final BHGEAccountData value)
	{
		removeLinkedItems( 
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.BHGEACCOUNT2CUSTOMERRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEACCOUNT2CUSTOMERRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeAccounts. 
	 * @param value the item to remove from bhgeAccounts - Approver List
	 */
	public void removeFromBhgeAccounts(final BHGEAccountData value)
	{
		removeFromBhgeAccounts( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.bhgeApprovers</code> attribute.
	 * @return the bhgeApprovers - Approver List
	 */
	public List<BHGEApprovalDetails> getBhgeApprovers(final SessionContext ctx)
	{
		final List<BHGEApprovalDetails> items = getLinkedItems( 
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.BHGEAPPROVER2CUSTOMERRELATION,
			"BHGEApprovalDetails",
			null,
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_TGT_ORDERED, true)
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.bhgeApprovers</code> attribute.
	 * @return the bhgeApprovers - Approver List
	 */
	public List<BHGEApprovalDetails> getBhgeApprovers()
	{
		return getBhgeApprovers( getSession().getSessionContext() );
	}
	
	public long getBhgeApproversCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.BHGEAPPROVER2CUSTOMERRELATION,
			"BHGEApprovalDetails",
			null
		);
	}
	
	public long getBhgeApproversCount()
	{
		return getBhgeApproversCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.bhgeApprovers</code> attribute. 
	 * @param value the bhgeApprovers - Approver List
	 */
	public void setBhgeApprovers(final SessionContext ctx, final List<BHGEApprovalDetails> value)
	{
		setLinkedItems( 
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.BHGEAPPROVER2CUSTOMERRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEAPPROVER2CUSTOMERRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.bhgeApprovers</code> attribute. 
	 * @param value the bhgeApprovers - Approver List
	 */
	public void setBhgeApprovers(final List<BHGEApprovalDetails> value)
	{
		setBhgeApprovers( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeApprovers. 
	 * @param value the item to add to bhgeApprovers - Approver List
	 */
	public void addToBhgeApprovers(final SessionContext ctx, final BHGEApprovalDetails value)
	{
		addLinkedItems( 
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.BHGEAPPROVER2CUSTOMERRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEAPPROVER2CUSTOMERRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeApprovers. 
	 * @param value the item to add to bhgeApprovers - Approver List
	 */
	public void addToBhgeApprovers(final BHGEApprovalDetails value)
	{
		addToBhgeApprovers( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeApprovers. 
	 * @param value the item to remove from bhgeApprovers - Approver List
	 */
	public void removeFromBhgeApprovers(final SessionContext ctx, final BHGEApprovalDetails value)
	{
		removeLinkedItems( 
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.BHGEAPPROVER2CUSTOMERRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEAPPROVER2CUSTOMERRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeApprovers. 
	 * @param value the item to remove from bhgeApprovers - Approver List
	 */
	public void removeFromBhgeApprovers(final BHGEApprovalDetails value)
	{
		removeFromBhgeApprovers( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.companyAddress</code> attribute.
	 * @return the companyAddress - User Company Address
	 */
	public Address getCompanyAddress(final SessionContext ctx)
	{
		return (Address)getProperty( ctx, COMPANYADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.companyAddress</code> attribute.
	 * @return the companyAddress - User Company Address
	 */
	public Address getCompanyAddress()
	{
		return getCompanyAddress( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.companyAddress</code> attribute. 
	 * @param value the companyAddress - User Company Address
	 */
	public void setCompanyAddress(final SessionContext ctx, final Address value)
	{
		setProperty(ctx, COMPANYADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.companyAddress</code> attribute. 
	 * @param value the companyAddress - User Company Address
	 */
	public void setCompanyAddress(final Address value)
	{
		setCompanyAddress( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.companyName</code> attribute.
	 * @return the companyName - User Company Name
	 */
	public String getCompanyName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COMPANYNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.companyName</code> attribute.
	 * @return the companyName - User Company Name
	 */
	public String getCompanyName()
	{
		return getCompanyName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.companyName</code> attribute. 
	 * @param value the companyName - User Company Name
	 */
	public void setCompanyName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COMPANYNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.companyName</code> attribute. 
	 * @param value the companyName - User Company Name
	 */
	public void setCompanyName(final String value)
	{
		setCompanyName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.damCompanyAddress</code> attribute.
	 * @return the damCompanyAddress - DAM Company Address
	 */
	public Address getDamCompanyAddress(final SessionContext ctx)
	{
		return (Address)getProperty( ctx, DAMCOMPANYADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.damCompanyAddress</code> attribute.
	 * @return the damCompanyAddress - DAM Company Address
	 */
	public Address getDamCompanyAddress()
	{
		return getDamCompanyAddress( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.damCompanyAddress</code> attribute. 
	 * @param value the damCompanyAddress - DAM Company Address
	 */
	public void setDamCompanyAddress(final SessionContext ctx, final Address value)
	{
		setProperty(ctx, DAMCOMPANYADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.damCompanyAddress</code> attribute. 
	 * @param value the damCompanyAddress - DAM Company Address
	 */
	public void setDamCompanyAddress(final Address value)
	{
		setDamCompanyAddress( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.damCustomerId</code> attribute.
	 * @return the damCustomerId - DAM Customer Id
	 */
	public String getDamCustomerId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DAMCUSTOMERID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.damCustomerId</code> attribute.
	 * @return the damCustomerId - DAM Customer Id
	 */
	public String getDamCustomerId()
	{
		return getDamCustomerId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.damCustomerId</code> attribute. 
	 * @param value the damCustomerId - DAM Customer Id
	 */
	public void setDamCustomerId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DAMCUSTOMERID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.damCustomerId</code> attribute. 
	 * @param value the damCustomerId - DAM Customer Id
	 */
	public void setDamCustomerId(final String value)
	{
		setDamCustomerId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.damProductLine</code> attribute.
	 * @return the damProductLine - DAM Product Line
	 */
	public BHGERegisterKeyValueData getDamProductLine(final SessionContext ctx)
	{
		return (BHGERegisterKeyValueData)getProperty( ctx, DAMPRODUCTLINE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.damProductLine</code> attribute.
	 * @return the damProductLine - DAM Product Line
	 */
	public BHGERegisterKeyValueData getDamProductLine()
	{
		return getDamProductLine( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.damProductLine</code> attribute. 
	 * @param value the damProductLine - DAM Product Line
	 */
	public void setDamProductLine(final SessionContext ctx, final BHGERegisterKeyValueData value)
	{
		setProperty(ctx, DAMPRODUCTLINE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.damProductLine</code> attribute. 
	 * @param value the damProductLine - DAM Product Line
	 */
	public void setDamProductLine(final BHGERegisterKeyValueData value)
	{
		setDamProductLine( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.detailNumber</code> attribute.
	 * @return the detailNumber - Detail Number
	 */
	public EnumerationValue getDetailNumber(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, DETAILNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.detailNumber</code> attribute.
	 * @return the detailNumber - Detail Number
	 */
	public EnumerationValue getDetailNumber()
	{
		return getDetailNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.detailNumber</code> attribute. 
	 * @param value the detailNumber - Detail Number
	 */
	public void setDetailNumber(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, DETAILNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.detailNumber</code> attribute. 
	 * @param value the detailNumber - Detail Number
	 */
	public void setDetailNumber(final EnumerationValue value)
	{
		setDetailNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.detailNumberValue</code> attribute.
	 * @return the detailNumberValue - Detail Number Value
	 */
	public String getDetailNumberValue(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DETAILNUMBERVALUE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.detailNumberValue</code> attribute.
	 * @return the detailNumberValue - Detail Number Value
	 */
	public String getDetailNumberValue()
	{
		return getDetailNumberValue( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.detailNumberValue</code> attribute. 
	 * @param value the detailNumberValue - Detail Number Value
	 */
	public void setDetailNumberValue(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DETAILNUMBERVALUE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.detailNumberValue</code> attribute. 
	 * @param value the detailNumberValue - Detail Number Value
	 */
	public void setDetailNumberValue(final String value)
	{
		setDetailNumberValue( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.dsAccountType</code> attribute.
	 * @return the dsAccountType - Account Type
	 */
	public Collection<BHGERegisterKeyValueData> getDsAccountType(final SessionContext ctx)
	{
		Collection<BHGERegisterKeyValueData> coll = (Collection<BHGERegisterKeyValueData>)getProperty( ctx, DSACCOUNTTYPE);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.dsAccountType</code> attribute.
	 * @return the dsAccountType - Account Type
	 */
	public Collection<BHGERegisterKeyValueData> getDsAccountType()
	{
		return getDsAccountType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.dsAccountType</code> attribute. 
	 * @param value the dsAccountType - Account Type
	 */
	public void setDsAccountType(final SessionContext ctx, final Collection<BHGERegisterKeyValueData> value)
	{
		setProperty(ctx, DSACCOUNTTYPE,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.dsAccountType</code> attribute. 
	 * @param value the dsAccountType - Account Type
	 */
	public void setDsAccountType(final Collection<BHGERegisterKeyValueData> value)
	{
		setDsAccountType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.dsMarket</code> attribute.
	 * @return the dsMarket - Market to operate
	 */
	public Collection<BHGERegisterKeyValueData> getDsMarket(final SessionContext ctx)
	{
		Collection<BHGERegisterKeyValueData> coll = (Collection<BHGERegisterKeyValueData>)getProperty( ctx, DSMARKET);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.dsMarket</code> attribute.
	 * @return the dsMarket - Market to operate
	 */
	public Collection<BHGERegisterKeyValueData> getDsMarket()
	{
		return getDsMarket( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.dsMarket</code> attribute. 
	 * @param value the dsMarket - Market to operate
	 */
	public void setDsMarket(final SessionContext ctx, final Collection<BHGERegisterKeyValueData> value)
	{
		setProperty(ctx, DSMARKET,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.dsMarket</code> attribute. 
	 * @param value the dsMarket - Market to operate
	 */
	public void setDsMarket(final Collection<BHGERegisterKeyValueData> value)
	{
		setDsMarket( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.dsRole</code> attribute.
	 * @return the dsRole - Roles
	 */
	public String getDsRole(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DSROLE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.dsRole</code> attribute.
	 * @return the dsRole - Roles
	 */
	public String getDsRole()
	{
		return getDsRole( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.dsRole</code> attribute. 
	 * @param value the dsRole - Roles
	 */
	public void setDsRole(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DSROLE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.dsRole</code> attribute. 
	 * @param value the dsRole - Roles
	 */
	public void setDsRole(final String value)
	{
		setDsRole( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.endCustomer</code> attribute.
	 * @return the endCustomer - End Customer
	 */
	public Boolean isEndCustomer(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ENDCUSTOMER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.endCustomer</code> attribute.
	 * @return the endCustomer - End Customer
	 */
	public Boolean isEndCustomer()
	{
		return isEndCustomer( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.endCustomer</code> attribute. 
	 * @return the endCustomer - End Customer
	 */
	public boolean isEndCustomerAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isEndCustomer( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.endCustomer</code> attribute. 
	 * @return the endCustomer - End Customer
	 */
	public boolean isEndCustomerAsPrimitive()
	{
		return isEndCustomerAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.endCustomer</code> attribute. 
	 * @param value the endCustomer - End Customer
	 */
	public void setEndCustomer(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ENDCUSTOMER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.endCustomer</code> attribute. 
	 * @param value the endCustomer - End Customer
	 */
	public void setEndCustomer(final Boolean value)
	{
		setEndCustomer( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.endCustomer</code> attribute. 
	 * @param value the endCustomer - End Customer
	 */
	public void setEndCustomer(final SessionContext ctx, final boolean value)
	{
		setEndCustomer( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.endCustomer</code> attribute. 
	 * @param value the endCustomer - End Customer
	 */
	public void setEndCustomer(final boolean value)
	{
		setEndCustomer( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.familyName</code> attribute.
	 * @return the familyName - User Family Name
	 */
	public String getFamilyName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, FAMILYNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.familyName</code> attribute.
	 * @return the familyName - User Family Name
	 */
	public String getFamilyName()
	{
		return getFamilyName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.familyName</code> attribute. 
	 * @param value the familyName - User Family Name
	 */
	public void setFamilyName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, FAMILYNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.familyName</code> attribute. 
	 * @param value the familyName - User Family Name
	 */
	public void setFamilyName(final String value)
	{
		setFamilyName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.fptLegalEntities</code> attribute.
	 * @return the fptLegalEntities - FPT Product Line list
	 */
	public Collection<BHGERegisterKeyValueData> getFptLegalEntities(final SessionContext ctx)
	{
		Collection<BHGERegisterKeyValueData> coll = (Collection<BHGERegisterKeyValueData>)getProperty( ctx, FPTLEGALENTITIES);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.fptLegalEntities</code> attribute.
	 * @return the fptLegalEntities - FPT Product Line list
	 */
	public Collection<BHGERegisterKeyValueData> getFptLegalEntities()
	{
		return getFptLegalEntities( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.fptLegalEntities</code> attribute. 
	 * @param value the fptLegalEntities - FPT Product Line list
	 */
	public void setFptLegalEntities(final SessionContext ctx, final Collection<BHGERegisterKeyValueData> value)
	{
		setProperty(ctx, FPTLEGALENTITIES,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.fptLegalEntities</code> attribute. 
	 * @param value the fptLegalEntities - FPT Product Line list
	 */
	public void setFptLegalEntities(final Collection<BHGERegisterKeyValueData> value)
	{
		setFptLegalEntities( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.fptLegalEntity</code> attribute.
	 * @return the fptLegalEntity - FPT Legal Entity
	 */
	public Collection<String> getFptLegalEntity(final SessionContext ctx)
	{
		Collection<String> coll = (Collection<String>)getProperty( ctx, FPTLEGALENTITY);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.fptLegalEntity</code> attribute.
	 * @return the fptLegalEntity - FPT Legal Entity
	 */
	public Collection<String> getFptLegalEntity()
	{
		return getFptLegalEntity( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.fptLegalEntity</code> attribute. 
	 * @param value the fptLegalEntity - FPT Legal Entity
	 */
	public void setFptLegalEntity(final SessionContext ctx, final Collection<String> value)
	{
		setProperty(ctx, FPTLEGALENTITY,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.fptLegalEntity</code> attribute. 
	 * @param value the fptLegalEntity - FPT Legal Entity
	 */
	public void setFptLegalEntity(final Collection<String> value)
	{
		setFptLegalEntity( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.fptProductLine</code> attribute.
	 * @return the fptProductLine - FPT Product Line list
	 */
	public Collection<BHGERegisterKeyValueData> getFptProductLine(final SessionContext ctx)
	{
		Collection<BHGERegisterKeyValueData> coll = (Collection<BHGERegisterKeyValueData>)getProperty( ctx, FPTPRODUCTLINE);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.fptProductLine</code> attribute.
	 * @return the fptProductLine - FPT Product Line list
	 */
	public Collection<BHGERegisterKeyValueData> getFptProductLine()
	{
		return getFptProductLine( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.fptProductLine</code> attribute. 
	 * @param value the fptProductLine - FPT Product Line list
	 */
	public void setFptProductLine(final SessionContext ctx, final Collection<BHGERegisterKeyValueData> value)
	{
		setProperty(ctx, FPTPRODUCTLINE,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.fptProductLine</code> attribute. 
	 * @param value the fptProductLine - FPT Product Line list
	 */
	public void setFptProductLine(final Collection<BHGERegisterKeyValueData> value)
	{
		setFptProductLine( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.fptRoles</code> attribute.
	 * @return the fptRoles - FPT Roles
	 */
	public BHGERegisterKeyValueData getFptRoles(final SessionContext ctx)
	{
		return (BHGERegisterKeyValueData)getProperty( ctx, FPTROLES);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.fptRoles</code> attribute.
	 * @return the fptRoles - FPT Roles
	 */
	public BHGERegisterKeyValueData getFptRoles()
	{
		return getFptRoles( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.fptRoles</code> attribute. 
	 * @param value the fptRoles - FPT Roles
	 */
	public void setFptRoles(final SessionContext ctx, final BHGERegisterKeyValueData value)
	{
		setProperty(ctx, FPTROLES,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.fptRoles</code> attribute. 
	 * @param value the fptRoles - FPT Roles
	 */
	public void setFptRoles(final BHGERegisterKeyValueData value)
	{
		setFptRoles( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.fptSaleAreaText</code> attribute.
	 * @return the fptSaleAreaText - FPT Legal Entity
	 */
	public Collection<String> getFptSaleAreaText(final SessionContext ctx)
	{
		Collection<String> coll = (Collection<String>)getProperty( ctx, FPTSALEAREATEXT);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.fptSaleAreaText</code> attribute.
	 * @return the fptSaleAreaText - FPT Legal Entity
	 */
	public Collection<String> getFptSaleAreaText()
	{
		return getFptSaleAreaText( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.fptSaleAreaText</code> attribute. 
	 * @param value the fptSaleAreaText - FPT Legal Entity
	 */
	public void setFptSaleAreaText(final SessionContext ctx, final Collection<String> value)
	{
		setProperty(ctx, FPTSALEAREATEXT,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.fptSaleAreaText</code> attribute. 
	 * @param value the fptSaleAreaText - FPT Legal Entity
	 */
	public void setFptSaleAreaText(final Collection<String> value)
	{
		setFptSaleAreaText( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.givenName</code> attribute.
	 * @return the givenName - User Given Name
	 */
	public String getGivenName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, GIVENNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.givenName</code> attribute.
	 * @return the givenName - User Given Name
	 */
	public String getGivenName()
	{
		return getGivenName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.givenName</code> attribute. 
	 * @param value the givenName - User Given Name
	 */
	public void setGivenName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, GIVENNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.givenName</code> attribute. 
	 * @param value the givenName - User Given Name
	 */
	public void setGivenName(final String value)
	{
		setGivenName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.governmentEntity</code> attribute.
	 * @return the governmentEntity - Government Entity
	 */
	public Boolean isGovernmentEntity(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, GOVERNMENTENTITY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.governmentEntity</code> attribute.
	 * @return the governmentEntity - Government Entity
	 */
	public Boolean isGovernmentEntity()
	{
		return isGovernmentEntity( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.governmentEntity</code> attribute. 
	 * @return the governmentEntity - Government Entity
	 */
	public boolean isGovernmentEntityAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isGovernmentEntity( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.governmentEntity</code> attribute. 
	 * @return the governmentEntity - Government Entity
	 */
	public boolean isGovernmentEntityAsPrimitive()
	{
		return isGovernmentEntityAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.governmentEntity</code> attribute. 
	 * @param value the governmentEntity - Government Entity
	 */
	public void setGovernmentEntity(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, GOVERNMENTENTITY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.governmentEntity</code> attribute. 
	 * @param value the governmentEntity - Government Entity
	 */
	public void setGovernmentEntity(final Boolean value)
	{
		setGovernmentEntity( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.governmentEntity</code> attribute. 
	 * @param value the governmentEntity - Government Entity
	 */
	public void setGovernmentEntity(final SessionContext ctx, final boolean value)
	{
		setGovernmentEntity( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.governmentEntity</code> attribute. 
	 * @param value the governmentEntity - Government Entity
	 */
	public void setGovernmentEntity(final boolean value)
	{
		setGovernmentEntity( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.governmentOrg</code> attribute.
	 * @return the governmentOrg - Government Organization
	 */
	public Boolean isGovernmentOrg(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, GOVERNMENTORG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.governmentOrg</code> attribute.
	 * @return the governmentOrg - Government Organization
	 */
	public Boolean isGovernmentOrg()
	{
		return isGovernmentOrg( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.governmentOrg</code> attribute. 
	 * @return the governmentOrg - Government Organization
	 */
	public boolean isGovernmentOrgAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isGovernmentOrg( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.governmentOrg</code> attribute. 
	 * @return the governmentOrg - Government Organization
	 */
	public boolean isGovernmentOrgAsPrimitive()
	{
		return isGovernmentOrgAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.governmentOrg</code> attribute. 
	 * @param value the governmentOrg - Government Organization
	 */
	public void setGovernmentOrg(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, GOVERNMENTORG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.governmentOrg</code> attribute. 
	 * @param value the governmentOrg - Government Organization
	 */
	public void setGovernmentOrg(final Boolean value)
	{
		setGovernmentOrg( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.governmentOrg</code> attribute. 
	 * @param value the governmentOrg - Government Organization
	 */
	public void setGovernmentOrg(final SessionContext ctx, final boolean value)
	{
		setGovernmentOrg( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.governmentOrg</code> attribute. 
	 * @param value the governmentOrg - Government Organization
	 */
	public void setGovernmentOrg(final boolean value)
	{
		setGovernmentOrg( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.iqmCompanyAddress</code> attribute.
	 * @return the iqmCompanyAddress - IQM Company Address
	 */
	public Address getIqmCompanyAddress(final SessionContext ctx)
	{
		return (Address)getProperty( ctx, IQMCOMPANYADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.iqmCompanyAddress</code> attribute.
	 * @return the iqmCompanyAddress - IQM Company Address
	 */
	public Address getIqmCompanyAddress()
	{
		return getIqmCompanyAddress( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.iqmCompanyAddress</code> attribute. 
	 * @param value the iqmCompanyAddress - IQM Company Address
	 */
	public void setIqmCompanyAddress(final SessionContext ctx, final Address value)
	{
		setProperty(ctx, IQMCOMPANYADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.iqmCompanyAddress</code> attribute. 
	 * @param value the iqmCompanyAddress - IQM Company Address
	 */
	public void setIqmCompanyAddress(final Address value)
	{
		setIqmCompanyAddress( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.iqmDunsNumber</code> attribute.
	 * @return the iqmDunsNumber - IQM Duns Number
	 */
	public String getIqmDunsNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, IQMDUNSNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.iqmDunsNumber</code> attribute.
	 * @return the iqmDunsNumber - IQM Duns Number
	 */
	public String getIqmDunsNumber()
	{
		return getIqmDunsNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.iqmDunsNumber</code> attribute. 
	 * @param value the iqmDunsNumber - IQM Duns Number
	 */
	public void setIqmDunsNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, IQMDUNSNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.iqmDunsNumber</code> attribute. 
	 * @param value the iqmDunsNumber - IQM Duns Number
	 */
	public void setIqmDunsNumber(final String value)
	{
		setIqmDunsNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.iqmProductLine</code> attribute.
	 * @return the iqmProductLine - IQM Product Line
	 */
	public BHGERegisterKeyValueData getIqmProductLine(final SessionContext ctx)
	{
		return (BHGERegisterKeyValueData)getProperty( ctx, IQMPRODUCTLINE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.iqmProductLine</code> attribute.
	 * @return the iqmProductLine - IQM Product Line
	 */
	public BHGERegisterKeyValueData getIqmProductLine()
	{
		return getIqmProductLine( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.iqmProductLine</code> attribute. 
	 * @param value the iqmProductLine - IQM Product Line
	 */
	public void setIqmProductLine(final SessionContext ctx, final BHGERegisterKeyValueData value)
	{
		setProperty(ctx, IQMPRODUCTLINE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.iqmProductLine</code> attribute. 
	 * @param value the iqmProductLine - IQM Product Line
	 */
	public void setIqmProductLine(final BHGERegisterKeyValueData value)
	{
		setIqmProductLine( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.iqmRegion</code> attribute.
	 * @return the iqmRegion - IQM Region
	 */
	public BHGERegisterKeyValueData getIqmRegion(final SessionContext ctx)
	{
		return (BHGERegisterKeyValueData)getProperty( ctx, IQMREGION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.iqmRegion</code> attribute.
	 * @return the iqmRegion - IQM Region
	 */
	public BHGERegisterKeyValueData getIqmRegion()
	{
		return getIqmRegion( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.iqmRegion</code> attribute. 
	 * @param value the iqmRegion - IQM Region
	 */
	public void setIqmRegion(final SessionContext ctx, final BHGERegisterKeyValueData value)
	{
		setProperty(ctx, IQMREGION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.iqmRegion</code> attribute. 
	 * @param value the iqmRegion - IQM Region
	 */
	public void setIqmRegion(final BHGERegisterKeyValueData value)
	{
		setIqmRegion( getSession().getSessionContext(), value );
	}
	
	/**
	 * @deprecated since 2011, use {@link Utilities#getMarkModifiedOverride(de.hybris.platform.jalo.type.RelationType)
	 */
	@Override
	@Deprecated(since = "2105", forRemoval = true)
	public boolean isMarkModifiedDisabled(final Item referencedItem)
	{
		ComposedType relationSecondEnd0 = TypeManager.getInstance().getComposedType("BHGEApprovalDetails");
		if(relationSecondEnd0.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(BHGEAPPROVER2CUSTOMERRELATION_MARKMODIFIED);
		}
		ComposedType relationSecondEnd1 = TypeManager.getInstance().getComposedType("BHGEAccountData");
		if(relationSecondEnd1.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(BHGEACCOUNT2CUSTOMERRELATION_MARKMODIFIED);
		}
		return true;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.ofsAccountType</code> attribute.
	 * @return the ofsAccountType - OFS Account Type
	 */
	public BHGERegisterKeyValueData getOfsAccountType(final SessionContext ctx)
	{
		return (BHGERegisterKeyValueData)getProperty( ctx, OFSACCOUNTTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.ofsAccountType</code> attribute.
	 * @return the ofsAccountType - OFS Account Type
	 */
	public BHGERegisterKeyValueData getOfsAccountType()
	{
		return getOfsAccountType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.ofsAccountType</code> attribute. 
	 * @param value the ofsAccountType - OFS Account Type
	 */
	public void setOfsAccountType(final SessionContext ctx, final BHGERegisterKeyValueData value)
	{
		setProperty(ctx, OFSACCOUNTTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.ofsAccountType</code> attribute. 
	 * @param value the ofsAccountType - OFS Account Type
	 */
	public void setOfsAccountType(final BHGERegisterKeyValueData value)
	{
		setOfsAccountType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.ownershipStructure</code> attribute.
	 * @return the ownershipStructure - Ownership Structure
	 */
	public Media getOwnershipStructure(final SessionContext ctx)
	{
		return (Media)getProperty( ctx, OWNERSHIPSTRUCTURE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.ownershipStructure</code> attribute.
	 * @return the ownershipStructure - Ownership Structure
	 */
	public Media getOwnershipStructure()
	{
		return getOwnershipStructure( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.ownershipStructure</code> attribute. 
	 * @param value the ownershipStructure - Ownership Structure
	 */
	public void setOwnershipStructure(final SessionContext ctx, final Media value)
	{
		setProperty(ctx, OWNERSHIPSTRUCTURE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.ownershipStructure</code> attribute. 
	 * @param value the ownershipStructure - Ownership Structure
	 */
	public void setOwnershipStructure(final Media value)
	{
		setOwnershipStructure( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.productLine</code> attribute.
	 * @return the productLine - User Company Address
	 */
	public BHGERegisterKeyValueData getProductLine(final SessionContext ctx)
	{
		return (BHGERegisterKeyValueData)getProperty( ctx, PRODUCTLINE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.productLine</code> attribute.
	 * @return the productLine - User Company Address
	 */
	public BHGERegisterKeyValueData getProductLine()
	{
		return getProductLine( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.productLine</code> attribute. 
	 * @param value the productLine - User Company Address
	 */
	public void setProductLine(final SessionContext ctx, final BHGERegisterKeyValueData value)
	{
		setProperty(ctx, PRODUCTLINE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.productLine</code> attribute. 
	 * @param value the productLine - User Company Address
	 */
	public void setProductLine(final BHGERegisterKeyValueData value)
	{
		setProductLine( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.requestCustomerId</code> attribute.
	 * @return the requestCustomerId - Request Customer Id
	 */
	public String getRequestCustomerId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, REQUESTCUSTOMERID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.requestCustomerId</code> attribute.
	 * @return the requestCustomerId - Request Customer Id
	 */
	public String getRequestCustomerId()
	{
		return getRequestCustomerId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.requestCustomerId</code> attribute. 
	 * @param value the requestCustomerId - Request Customer Id
	 */
	public void setRequestCustomerId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, REQUESTCUSTOMERID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.requestCustomerId</code> attribute. 
	 * @param value the requestCustomerId - Request Customer Id
	 */
	public void setRequestCustomerId(final String value)
	{
		setRequestCustomerId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.subProductLine</code> attribute.
	 * @return the subProductLine - Sub Product Line
	 */
	public Collection<BHGERegisterKeyValueData> getSubProductLine(final SessionContext ctx)
	{
		Collection<BHGERegisterKeyValueData> coll = (Collection<BHGERegisterKeyValueData>)getProperty( ctx, SUBPRODUCTLINE);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.subProductLine</code> attribute.
	 * @return the subProductLine - Sub Product Line
	 */
	public Collection<BHGERegisterKeyValueData> getSubProductLine()
	{
		return getSubProductLine( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.subProductLine</code> attribute. 
	 * @param value the subProductLine - Sub Product Line
	 */
	public void setSubProductLine(final SessionContext ctx, final Collection<BHGERegisterKeyValueData> value)
	{
		setProperty(ctx, SUBPRODUCTLINE,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.subProductLine</code> attribute. 
	 * @param value the subProductLine - Sub Product Line
	 */
	public void setSubProductLine(final Collection<BHGERegisterKeyValueData> value)
	{
		setSubProductLine( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.tokenTime</code> attribute.
	 * @return the tokenTime - Request Customer Id
	 */
	public Long getTokenTime(final SessionContext ctx)
	{
		return (Long)getProperty( ctx, TOKENTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.tokenTime</code> attribute.
	 * @return the tokenTime - Request Customer Id
	 */
	public Long getTokenTime()
	{
		return getTokenTime( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.tokenTime</code> attribute. 
	 * @return the tokenTime - Request Customer Id
	 */
	public long getTokenTimeAsPrimitive(final SessionContext ctx)
	{
		Long value = getTokenTime( ctx );
		return value != null ? value.longValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.tokenTime</code> attribute. 
	 * @return the tokenTime - Request Customer Id
	 */
	public long getTokenTimeAsPrimitive()
	{
		return getTokenTimeAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.tokenTime</code> attribute. 
	 * @param value the tokenTime - Request Customer Id
	 */
	public void setTokenTime(final SessionContext ctx, final Long value)
	{
		setProperty(ctx, TOKENTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.tokenTime</code> attribute. 
	 * @param value the tokenTime - Request Customer Id
	 */
	public void setTokenTime(final Long value)
	{
		setTokenTime( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.tokenTime</code> attribute. 
	 * @param value the tokenTime - Request Customer Id
	 */
	public void setTokenTime(final SessionContext ctx, final long value)
	{
		setTokenTime( ctx,Long.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.tokenTime</code> attribute. 
	 * @param value the tokenTime - Request Customer Id
	 */
	public void setTokenTime(final long value)
	{
		setTokenTime( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.tokenValue</code> attribute.
	 * @return the tokenValue - Request Customer Id
	 */
	public String getTokenValue(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TOKENVALUE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERegieterCustomer.tokenValue</code> attribute.
	 * @return the tokenValue - Request Customer Id
	 */
	public String getTokenValue()
	{
		return getTokenValue( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.tokenValue</code> attribute. 
	 * @param value the tokenValue - Request Customer Id
	 */
	public void setTokenValue(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TOKENVALUE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERegieterCustomer.tokenValue</code> attribute. 
	 * @param value the tokenValue - Request Customer Id
	 */
	public void setTokenValue(final String value)
	{
		setTokenValue( getSession().getSessionContext(), value );
	}
	
}
