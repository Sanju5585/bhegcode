/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.register.webservices.jalo;

import com.bhge.register.webservices.constants.BhgeregisterwebservicesConstants;
import com.bhge.register.webservices.jalo.BHGEApprovalDetails;
import de.hybris.platform.core.model.BHGERegieterCustomer;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.util.Utilities;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEUserAccessRequest}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEUserAccessRequest extends GenericItem
{
	/** Qualifier of the <code>BHGEUserAccessRequest.accessRequestId</code> attribute **/
	public static final String ACCESSREQUESTID = "accessRequestId";
	/** Qualifier of the <code>BHGEUserAccessRequest.requesterId</code> attribute **/
	public static final String REQUESTERID = "requesterId";
	/** Qualifier of the <code>BHGEUserAccessRequest.approverDetails</code> attribute **/
	public static final String APPROVERDETAILS = "approverDetails";
	/** Qualifier of the <code>BHGEUserAccessRequest.accessRequestSource</code> attribute **/
	public static final String ACCESSREQUESTSOURCE = "accessRequestSource";
	/** Qualifier of the <code>BHGEUserAccessRequest.requestStatus</code> attribute **/
	public static final String REQUESTSTATUS = "requestStatus";
	/** Qualifier of the <code>BHGEUserAccessRequest.approverResponse</code> attribute **/
	public static final String APPROVERRESPONSE = "approverResponse";
	/** Qualifier of the <code>BHGEUserAccessRequest.requestorComment</code> attribute **/
	public static final String REQUESTORCOMMENT = "requestorComment";
	/** Qualifier of the <code>BHGEUserAccessRequest.approverResponseLong</code> attribute **/
	public static final String APPROVERRESPONSELONG = "approverResponseLong";
	/** Qualifier of the <code>BHGEUserAccessRequest.processedBy</code> attribute **/
	public static final String PROCESSEDBY = "processedBy";
	/** Qualifier of the <code>BHGEUserAccessRequest.linkedWithRegister</code> attribute **/
	public static final String LINKEDWITHREGISTER = "linkedWithRegister";
	/** Qualifier of the <code>BHGEUserAccessRequest.requesterState</code> attribute **/
	public static final String REQUESTERSTATE = "requesterState";
	/** Qualifier of the <code>BHGEUserAccessRequest.processDate</code> attribute **/
	public static final String PROCESSDATE = "processDate";
	/** Qualifier of the <code>BHGEUserAccessRequest.fptApproverDetailsList</code> attribute **/
	public static final String FPTAPPROVERDETAILSLIST = "fptApproverDetailsList";
	/** Qualifier of the <code>BHGEUserAccessRequest.fptApproverCustomerDetails</code> attribute **/
	public static final String FPTAPPROVERCUSTOMERDETAILS = "fptApproverCustomerDetails";
	/** Qualifier of the <code>BHGEUserAccessRequest.bhgeApprovals</code> attribute **/
	public static final String BHGEAPPROVALS = "bhgeApprovals";
	/** Relation ordering override parameter constants for FPTApprover2UserAcessRelation from ((bhgeregisterwebservices))*/
	protected static String FPTAPPROVER2USERACESSRELATION_SRC_ORDERED = "relation.FPTApprover2UserAcessRelation.source.ordered";
	protected static String FPTAPPROVER2USERACESSRELATION_TGT_ORDERED = "relation.FPTApprover2UserAcessRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for FPTApprover2UserAcessRelation from ((bhgeregisterwebservices))*/
	protected static String FPTAPPROVER2USERACESSRELATION_MARKMODIFIED = "relation.FPTApprover2UserAcessRelation.markmodified";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(ACCESSREQUESTID, AttributeMode.INITIAL);
		tmp.put(REQUESTERID, AttributeMode.INITIAL);
		tmp.put(APPROVERDETAILS, AttributeMode.INITIAL);
		tmp.put(ACCESSREQUESTSOURCE, AttributeMode.INITIAL);
		tmp.put(REQUESTSTATUS, AttributeMode.INITIAL);
		tmp.put(APPROVERRESPONSE, AttributeMode.INITIAL);
		tmp.put(REQUESTORCOMMENT, AttributeMode.INITIAL);
		tmp.put(APPROVERRESPONSELONG, AttributeMode.INITIAL);
		tmp.put(PROCESSEDBY, AttributeMode.INITIAL);
		tmp.put(LINKEDWITHREGISTER, AttributeMode.INITIAL);
		tmp.put(REQUESTERSTATE, AttributeMode.INITIAL);
		tmp.put(PROCESSDATE, AttributeMode.INITIAL);
		tmp.put(FPTAPPROVERDETAILSLIST, AttributeMode.INITIAL);
		tmp.put(FPTAPPROVERCUSTOMERDETAILS, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.accessRequestId</code> attribute.
	 * @return the accessRequestId - Access Request ID
	 */
	public Long getAccessRequestId(final SessionContext ctx)
	{
		return (Long)getProperty( ctx, ACCESSREQUESTID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.accessRequestId</code> attribute.
	 * @return the accessRequestId - Access Request ID
	 */
	public Long getAccessRequestId()
	{
		return getAccessRequestId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.accessRequestId</code> attribute. 
	 * @return the accessRequestId - Access Request ID
	 */
	public long getAccessRequestIdAsPrimitive(final SessionContext ctx)
	{
		Long value = getAccessRequestId( ctx );
		return value != null ? value.longValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.accessRequestId</code> attribute. 
	 * @return the accessRequestId - Access Request ID
	 */
	public long getAccessRequestIdAsPrimitive()
	{
		return getAccessRequestIdAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.accessRequestId</code> attribute. 
	 * @param value the accessRequestId - Access Request ID
	 */
	public void setAccessRequestId(final SessionContext ctx, final Long value)
	{
		setProperty(ctx, ACCESSREQUESTID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.accessRequestId</code> attribute. 
	 * @param value the accessRequestId - Access Request ID
	 */
	public void setAccessRequestId(final Long value)
	{
		setAccessRequestId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.accessRequestId</code> attribute. 
	 * @param value the accessRequestId - Access Request ID
	 */
	public void setAccessRequestId(final SessionContext ctx, final long value)
	{
		setAccessRequestId( ctx,Long.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.accessRequestId</code> attribute. 
	 * @param value the accessRequestId - Access Request ID
	 */
	public void setAccessRequestId(final long value)
	{
		setAccessRequestId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.accessRequestSource</code> attribute.
	 * @return the accessRequestSource - Access Request Source
	 */
	public EnumerationValue getAccessRequestSource(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, ACCESSREQUESTSOURCE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.accessRequestSource</code> attribute.
	 * @return the accessRequestSource - Access Request Source
	 */
	public EnumerationValue getAccessRequestSource()
	{
		return getAccessRequestSource( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.accessRequestSource</code> attribute. 
	 * @param value the accessRequestSource - Access Request Source
	 */
	public void setAccessRequestSource(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, ACCESSREQUESTSOURCE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.accessRequestSource</code> attribute. 
	 * @param value the accessRequestSource - Access Request Source
	 */
	public void setAccessRequestSource(final EnumerationValue value)
	{
		setAccessRequestSource( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.approverDetails</code> attribute.
	 * @return the approverDetails - Approver Details
	 */
	public BHGEApprovalDetails getApproverDetails(final SessionContext ctx)
	{
		return (BHGEApprovalDetails)getProperty( ctx, APPROVERDETAILS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.approverDetails</code> attribute.
	 * @return the approverDetails - Approver Details
	 */
	public BHGEApprovalDetails getApproverDetails()
	{
		return getApproverDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.approverDetails</code> attribute. 
	 * @param value the approverDetails - Approver Details
	 */
	public void setApproverDetails(final SessionContext ctx, final BHGEApprovalDetails value)
	{
		setProperty(ctx, APPROVERDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.approverDetails</code> attribute. 
	 * @param value the approverDetails - Approver Details
	 */
	public void setApproverDetails(final BHGEApprovalDetails value)
	{
		setApproverDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.approverResponse</code> attribute.
	 * @return the approverResponse - Approver Response
	 */
	public String getApproverResponse(final SessionContext ctx)
	{
		return (String)getProperty( ctx, APPROVERRESPONSE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.approverResponse</code> attribute.
	 * @return the approverResponse - Approver Response
	 */
	public String getApproverResponse()
	{
		return getApproverResponse( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.approverResponse</code> attribute. 
	 * @param value the approverResponse - Approver Response
	 */
	public void setApproverResponse(final SessionContext ctx, final String value)
	{
		setProperty(ctx, APPROVERRESPONSE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.approverResponse</code> attribute. 
	 * @param value the approverResponse - Approver Response
	 */
	public void setApproverResponse(final String value)
	{
		setApproverResponse( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.approverResponseLong</code> attribute.
	 * @return the approverResponseLong - Approver Response Long
	 */
	public String getApproverResponseLong(final SessionContext ctx)
	{
		return (String)getProperty( ctx, APPROVERRESPONSELONG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.approverResponseLong</code> attribute.
	 * @return the approverResponseLong - Approver Response Long
	 */
	public String getApproverResponseLong()
	{
		return getApproverResponseLong( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.approverResponseLong</code> attribute. 
	 * @param value the approverResponseLong - Approver Response Long
	 */
	public void setApproverResponseLong(final SessionContext ctx, final String value)
	{
		setProperty(ctx, APPROVERRESPONSELONG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.approverResponseLong</code> attribute. 
	 * @param value the approverResponseLong - Approver Response Long
	 */
	public void setApproverResponseLong(final String value)
	{
		setApproverResponseLong( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.bhgeApprovals</code> attribute.
	 * @return the bhgeApprovals - Approvers List
	 */
	public List<BHGEApprovalDetails> getBhgeApprovals(final SessionContext ctx)
	{
		final List<BHGEApprovalDetails> items = getLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.FPTAPPROVER2USERACESSRELATION,
			"BHGEApprovalDetails",
			null,
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_TGT_ORDERED, true)
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.bhgeApprovals</code> attribute.
	 * @return the bhgeApprovals - Approvers List
	 */
	public List<BHGEApprovalDetails> getBhgeApprovals()
	{
		return getBhgeApprovals( getSession().getSessionContext() );
	}
	
	public long getBhgeApprovalsCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.FPTAPPROVER2USERACESSRELATION,
			"BHGEApprovalDetails",
			null
		);
	}
	
	public long getBhgeApprovalsCount()
	{
		return getBhgeApprovalsCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.bhgeApprovals</code> attribute. 
	 * @param value the bhgeApprovals - Approvers List
	 */
	public void setBhgeApprovals(final SessionContext ctx, final List<BHGEApprovalDetails> value)
	{
		setLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.FPTAPPROVER2USERACESSRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(FPTAPPROVER2USERACESSRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.bhgeApprovals</code> attribute. 
	 * @param value the bhgeApprovals - Approvers List
	 */
	public void setBhgeApprovals(final List<BHGEApprovalDetails> value)
	{
		setBhgeApprovals( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeApprovals. 
	 * @param value the item to add to bhgeApprovals - Approvers List
	 */
	public void addToBhgeApprovals(final SessionContext ctx, final BHGEApprovalDetails value)
	{
		addLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.FPTAPPROVER2USERACESSRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(FPTAPPROVER2USERACESSRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeApprovals. 
	 * @param value the item to add to bhgeApprovals - Approvers List
	 */
	public void addToBhgeApprovals(final BHGEApprovalDetails value)
	{
		addToBhgeApprovals( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeApprovals. 
	 * @param value the item to remove from bhgeApprovals - Approvers List
	 */
	public void removeFromBhgeApprovals(final SessionContext ctx, final BHGEApprovalDetails value)
	{
		removeLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.FPTAPPROVER2USERACESSRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(FPTAPPROVER2USERACESSRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeApprovals. 
	 * @param value the item to remove from bhgeApprovals - Approvers List
	 */
	public void removeFromBhgeApprovals(final BHGEApprovalDetails value)
	{
		removeFromBhgeApprovals( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.fptApproverCustomerDetails</code> attribute.
	 * @return the fptApproverCustomerDetails - User SAP Sales Area for FPT
	 */
	public Collection<String> getFptApproverCustomerDetails(final SessionContext ctx)
	{
		Collection<String> coll = (Collection<String>)getProperty( ctx, FPTAPPROVERCUSTOMERDETAILS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.fptApproverCustomerDetails</code> attribute.
	 * @return the fptApproverCustomerDetails - User SAP Sales Area for FPT
	 */
	public Collection<String> getFptApproverCustomerDetails()
	{
		return getFptApproverCustomerDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.fptApproverCustomerDetails</code> attribute. 
	 * @param value the fptApproverCustomerDetails - User SAP Sales Area for FPT
	 */
	public void setFptApproverCustomerDetails(final SessionContext ctx, final Collection<String> value)
	{
		setProperty(ctx, FPTAPPROVERCUSTOMERDETAILS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.fptApproverCustomerDetails</code> attribute. 
	 * @param value the fptApproverCustomerDetails - User SAP Sales Area for FPT
	 */
	public void setFptApproverCustomerDetails(final Collection<String> value)
	{
		setFptApproverCustomerDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.fptApproverDetailsList</code> attribute.
	 * @return the fptApproverDetailsList - Approver Detail List for FPT Store
	 */
	public Collection<BHGEApprovalDetails> getFptApproverDetailsList(final SessionContext ctx)
	{
		Collection<BHGEApprovalDetails> coll = (Collection<BHGEApprovalDetails>)getProperty( ctx, FPTAPPROVERDETAILSLIST);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.fptApproverDetailsList</code> attribute.
	 * @return the fptApproverDetailsList - Approver Detail List for FPT Store
	 */
	public Collection<BHGEApprovalDetails> getFptApproverDetailsList()
	{
		return getFptApproverDetailsList( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.fptApproverDetailsList</code> attribute. 
	 * @param value the fptApproverDetailsList - Approver Detail List for FPT Store
	 */
	public void setFptApproverDetailsList(final SessionContext ctx, final Collection<BHGEApprovalDetails> value)
	{
		setProperty(ctx, FPTAPPROVERDETAILSLIST,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.fptApproverDetailsList</code> attribute. 
	 * @param value the fptApproverDetailsList - Approver Detail List for FPT Store
	 */
	public void setFptApproverDetailsList(final Collection<BHGEApprovalDetails> value)
	{
		setFptApproverDetailsList( getSession().getSessionContext(), value );
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
			return Utilities.getMarkModifiedOverride(FPTAPPROVER2USERACESSRELATION_MARKMODIFIED);
		}
		return true;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.linkedWithRegister</code> attribute.
	 * @return the linkedWithRegister - Access linked with Register Request
	 */
	public Boolean isLinkedWithRegister(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, LINKEDWITHREGISTER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.linkedWithRegister</code> attribute.
	 * @return the linkedWithRegister - Access linked with Register Request
	 */
	public Boolean isLinkedWithRegister()
	{
		return isLinkedWithRegister( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.linkedWithRegister</code> attribute. 
	 * @return the linkedWithRegister - Access linked with Register Request
	 */
	public boolean isLinkedWithRegisterAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isLinkedWithRegister( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.linkedWithRegister</code> attribute. 
	 * @return the linkedWithRegister - Access linked with Register Request
	 */
	public boolean isLinkedWithRegisterAsPrimitive()
	{
		return isLinkedWithRegisterAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.linkedWithRegister</code> attribute. 
	 * @param value the linkedWithRegister - Access linked with Register Request
	 */
	public void setLinkedWithRegister(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, LINKEDWITHREGISTER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.linkedWithRegister</code> attribute. 
	 * @param value the linkedWithRegister - Access linked with Register Request
	 */
	public void setLinkedWithRegister(final Boolean value)
	{
		setLinkedWithRegister( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.linkedWithRegister</code> attribute. 
	 * @param value the linkedWithRegister - Access linked with Register Request
	 */
	public void setLinkedWithRegister(final SessionContext ctx, final boolean value)
	{
		setLinkedWithRegister( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.linkedWithRegister</code> attribute. 
	 * @param value the linkedWithRegister - Access linked with Register Request
	 */
	public void setLinkedWithRegister(final boolean value)
	{
		setLinkedWithRegister( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.processDate</code> attribute.
	 * @return the processDate - Process Date
	 */
	public Date getProcessDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, PROCESSDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.processDate</code> attribute.
	 * @return the processDate - Process Date
	 */
	public Date getProcessDate()
	{
		return getProcessDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.processDate</code> attribute. 
	 * @param value the processDate - Process Date
	 */
	public void setProcessDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, PROCESSDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.processDate</code> attribute. 
	 * @param value the processDate - Process Date
	 */
	public void setProcessDate(final Date value)
	{
		setProcessDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.processedBy</code> attribute.
	 * @return the processedBy - Processed By
	 */
	public BHGERegieterCustomer getProcessedBy(final SessionContext ctx)
	{
		return (BHGERegieterCustomer)getProperty( ctx, PROCESSEDBY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.processedBy</code> attribute.
	 * @return the processedBy - Processed By
	 */
	public BHGERegieterCustomer getProcessedBy()
	{
		return getProcessedBy( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.processedBy</code> attribute. 
	 * @param value the processedBy - Processed By
	 */
	public void setProcessedBy(final SessionContext ctx, final BHGERegieterCustomer value)
	{
		setProperty(ctx, PROCESSEDBY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.processedBy</code> attribute. 
	 * @param value the processedBy - Processed By
	 */
	public void setProcessedBy(final BHGERegieterCustomer value)
	{
		setProcessedBy( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.requesterId</code> attribute.
	 * @return the requesterId - Requestor Id
	 */
	public BHGERegieterCustomer getRequesterId(final SessionContext ctx)
	{
		return (BHGERegieterCustomer)getProperty( ctx, REQUESTERID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.requesterId</code> attribute.
	 * @return the requesterId - Requestor Id
	 */
	public BHGERegieterCustomer getRequesterId()
	{
		return getRequesterId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.requesterId</code> attribute. 
	 * @param value the requesterId - Requestor Id
	 */
	public void setRequesterId(final SessionContext ctx, final BHGERegieterCustomer value)
	{
		setProperty(ctx, REQUESTERID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.requesterId</code> attribute. 
	 * @param value the requesterId - Requestor Id
	 */
	public void setRequesterId(final BHGERegieterCustomer value)
	{
		setRequesterId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.requesterState</code> attribute.
	 * @return the requesterState - Requester State
	 */
	public String getRequesterState(final SessionContext ctx)
	{
		return (String)getProperty( ctx, REQUESTERSTATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.requesterState</code> attribute.
	 * @return the requesterState - Requester State
	 */
	public String getRequesterState()
	{
		return getRequesterState( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.requesterState</code> attribute. 
	 * @param value the requesterState - Requester State
	 */
	public void setRequesterState(final SessionContext ctx, final String value)
	{
		setProperty(ctx, REQUESTERSTATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.requesterState</code> attribute. 
	 * @param value the requesterState - Requester State
	 */
	public void setRequesterState(final String value)
	{
		setRequesterState( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.requestorComment</code> attribute.
	 * @return the requestorComment - Requestor Comment
	 */
	public String getRequestorComment(final SessionContext ctx)
	{
		return (String)getProperty( ctx, REQUESTORCOMMENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.requestorComment</code> attribute.
	 * @return the requestorComment - Requestor Comment
	 */
	public String getRequestorComment()
	{
		return getRequestorComment( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.requestorComment</code> attribute. 
	 * @param value the requestorComment - Requestor Comment
	 */
	public void setRequestorComment(final SessionContext ctx, final String value)
	{
		setProperty(ctx, REQUESTORCOMMENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.requestorComment</code> attribute. 
	 * @param value the requestorComment - Requestor Comment
	 */
	public void setRequestorComment(final String value)
	{
		setRequestorComment( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.requestStatus</code> attribute.
	 * @return the requestStatus - Approval Status
	 */
	public EnumerationValue getRequestStatus(final SessionContext ctx)
	{
		return (EnumerationValue)getProperty( ctx, REQUESTSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEUserAccessRequest.requestStatus</code> attribute.
	 * @return the requestStatus - Approval Status
	 */
	public EnumerationValue getRequestStatus()
	{
		return getRequestStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.requestStatus</code> attribute. 
	 * @param value the requestStatus - Approval Status
	 */
	public void setRequestStatus(final SessionContext ctx, final EnumerationValue value)
	{
		setProperty(ctx, REQUESTSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEUserAccessRequest.requestStatus</code> attribute. 
	 * @param value the requestStatus - Approval Status
	 */
	public void setRequestStatus(final EnumerationValue value)
	{
		setRequestStatus( getSession().getSessionContext(), value );
	}
	
}
