/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.register.webservices.jalo;

import com.bhge.register.webservices.constants.BhgeregisterwebservicesConstants;
import com.bhge.register.webservices.jalo.BHGEAppAccessLevel;
import com.bhge.register.webservices.jalo.BHGEUserAccessRequest;
import de.hybris.platform.core.model.BHGERegieterCustomer;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.util.Utilities;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEApprovalDetails}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEApprovalDetails extends GenericItem
{
	/** Qualifier of the <code>BHGEApprovalDetails.appAccessLevel</code> attribute **/
	public static final String APPACCESSLEVEL = "appAccessLevel";
	/** Qualifier of the <code>BHGEApprovalDetails.approverID</code> attribute **/
	public static final String APPROVERID = "approverID";
	/** Qualifier of the <code>BHGEApprovalDetails.approverGroupName</code> attribute **/
	public static final String APPROVERGROUPNAME = "approverGroupName";
	/** Qualifier of the <code>BHGEApprovalDetails.approverGroupDetails</code> attribute **/
	public static final String APPROVERGROUPDETAILS = "approverGroupDetails";
	/** Qualifier of the <code>BHGEApprovalDetails.approverUserId</code> attribute **/
	public static final String APPROVERUSERID = "approverUserId";
	/** Qualifier of the <code>BHGEApprovalDetails.emailDistribList</code> attribute **/
	public static final String EMAILDISTRIBLIST = "emailDistribList";
	/** Qualifier of the <code>BHGEApprovalDetails.bhgeCustomers</code> attribute **/
	public static final String BHGECUSTOMERS = "bhgeCustomers";
	/** Relation ordering override parameter constants for BHGEApprover2CustomerRelation from ((bhgeregisterwebservices))*/
	protected static String BHGEAPPROVER2CUSTOMERRELATION_SRC_ORDERED = "relation.BHGEApprover2CustomerRelation.source.ordered";
	protected static String BHGEAPPROVER2CUSTOMERRELATION_TGT_ORDERED = "relation.BHGEApprover2CustomerRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for BHGEApprover2CustomerRelation from ((bhgeregisterwebservices))*/
	protected static String BHGEAPPROVER2CUSTOMERRELATION_MARKMODIFIED = "relation.BHGEApprover2CustomerRelation.markmodified";
	/** Qualifier of the <code>BHGEApprovalDetails.bhgeUserAccess</code> attribute **/
	public static final String BHGEUSERACCESS = "bhgeUserAccess";
	/** Relation ordering override parameter constants for FPTApprover2UserAcessRelation from ((bhgeregisterwebservices))*/
	protected static String FPTAPPROVER2USERACESSRELATION_SRC_ORDERED = "relation.FPTApprover2UserAcessRelation.source.ordered";
	protected static String FPTAPPROVER2USERACESSRELATION_TGT_ORDERED = "relation.FPTApprover2UserAcessRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for FPTApprover2UserAcessRelation from ((bhgeregisterwebservices))*/
	protected static String FPTAPPROVER2USERACESSRELATION_MARKMODIFIED = "relation.FPTApprover2UserAcessRelation.markmodified";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(APPACCESSLEVEL, AttributeMode.INITIAL);
		tmp.put(APPROVERID, AttributeMode.INITIAL);
		tmp.put(APPROVERGROUPNAME, AttributeMode.INITIAL);
		tmp.put(APPROVERGROUPDETAILS, AttributeMode.INITIAL);
		tmp.put(APPROVERUSERID, AttributeMode.INITIAL);
		tmp.put(EMAILDISTRIBLIST, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.appAccessLevel</code> attribute.
	 * @return the appAccessLevel - Application Access Level
	 */
	public BHGEAppAccessLevel getAppAccessLevel(final SessionContext ctx)
	{
		return (BHGEAppAccessLevel)getProperty( ctx, APPACCESSLEVEL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.appAccessLevel</code> attribute.
	 * @return the appAccessLevel - Application Access Level
	 */
	public BHGEAppAccessLevel getAppAccessLevel()
	{
		return getAppAccessLevel( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.appAccessLevel</code> attribute. 
	 * @param value the appAccessLevel - Application Access Level
	 */
	public void setAppAccessLevel(final SessionContext ctx, final BHGEAppAccessLevel value)
	{
		setProperty(ctx, APPACCESSLEVEL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.appAccessLevel</code> attribute. 
	 * @param value the appAccessLevel - Application Access Level
	 */
	public void setAppAccessLevel(final BHGEAppAccessLevel value)
	{
		setAppAccessLevel( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.approverGroupDetails</code> attribute.
	 * @return the approverGroupDetails - Approver Group Details
	 */
	public String getApproverGroupDetails(final SessionContext ctx)
	{
		return (String)getProperty( ctx, APPROVERGROUPDETAILS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.approverGroupDetails</code> attribute.
	 * @return the approverGroupDetails - Approver Group Details
	 */
	public String getApproverGroupDetails()
	{
		return getApproverGroupDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.approverGroupDetails</code> attribute. 
	 * @param value the approverGroupDetails - Approver Group Details
	 */
	public void setApproverGroupDetails(final SessionContext ctx, final String value)
	{
		setProperty(ctx, APPROVERGROUPDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.approverGroupDetails</code> attribute. 
	 * @param value the approverGroupDetails - Approver Group Details
	 */
	public void setApproverGroupDetails(final String value)
	{
		setApproverGroupDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.approverGroupName</code> attribute.
	 * @return the approverGroupName - Approver Group Name
	 */
	public String getApproverGroupName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, APPROVERGROUPNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.approverGroupName</code> attribute.
	 * @return the approverGroupName - Approver Group Name
	 */
	public String getApproverGroupName()
	{
		return getApproverGroupName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.approverGroupName</code> attribute. 
	 * @param value the approverGroupName - Approver Group Name
	 */
	public void setApproverGroupName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, APPROVERGROUPNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.approverGroupName</code> attribute. 
	 * @param value the approverGroupName - Approver Group Name
	 */
	public void setApproverGroupName(final String value)
	{
		setApproverGroupName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.approverID</code> attribute.
	 * @return the approverID - Approver ID
	 */
	public Long getApproverID(final SessionContext ctx)
	{
		return (Long)getProperty( ctx, APPROVERID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.approverID</code> attribute.
	 * @return the approverID - Approver ID
	 */
	public Long getApproverID()
	{
		return getApproverID( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.approverID</code> attribute. 
	 * @return the approverID - Approver ID
	 */
	public long getApproverIDAsPrimitive(final SessionContext ctx)
	{
		Long value = getApproverID( ctx );
		return value != null ? value.longValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.approverID</code> attribute. 
	 * @return the approverID - Approver ID
	 */
	public long getApproverIDAsPrimitive()
	{
		return getApproverIDAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.approverID</code> attribute. 
	 * @param value the approverID - Approver ID
	 */
	public void setApproverID(final SessionContext ctx, final Long value)
	{
		setProperty(ctx, APPROVERID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.approverID</code> attribute. 
	 * @param value the approverID - Approver ID
	 */
	public void setApproverID(final Long value)
	{
		setApproverID( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.approverID</code> attribute. 
	 * @param value the approverID - Approver ID
	 */
	public void setApproverID(final SessionContext ctx, final long value)
	{
		setApproverID( ctx,Long.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.approverID</code> attribute. 
	 * @param value the approverID - Approver ID
	 */
	public void setApproverID(final long value)
	{
		setApproverID( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.approverUserId</code> attribute.
	 * @return the approverUserId - Approver Group Details
	 */
	public Collection<BHGERegieterCustomer> getApproverUserId(final SessionContext ctx)
	{
		Collection<BHGERegieterCustomer> coll = (Collection<BHGERegieterCustomer>)getProperty( ctx, APPROVERUSERID);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.approverUserId</code> attribute.
	 * @return the approverUserId - Approver Group Details
	 */
	public Collection<BHGERegieterCustomer> getApproverUserId()
	{
		return getApproverUserId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.approverUserId</code> attribute. 
	 * @param value the approverUserId - Approver Group Details
	 */
	public void setApproverUserId(final SessionContext ctx, final Collection<BHGERegieterCustomer> value)
	{
		setProperty(ctx, APPROVERUSERID,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.approverUserId</code> attribute. 
	 * @param value the approverUserId - Approver Group Details
	 */
	public void setApproverUserId(final Collection<BHGERegieterCustomer> value)
	{
		setApproverUserId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.bhgeCustomers</code> attribute.
	 * @return the bhgeCustomers - Customer List
	 */
	public List<BHGERegieterCustomer> getBhgeCustomers(final SessionContext ctx)
	{
		final List<BHGERegieterCustomer> items = getLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.BHGEAPPROVER2CUSTOMERRELATION,
			"BHGERegieterCustomer",
			null,
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_TGT_ORDERED, true)
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.bhgeCustomers</code> attribute.
	 * @return the bhgeCustomers - Customer List
	 */
	public List<BHGERegieterCustomer> getBhgeCustomers()
	{
		return getBhgeCustomers( getSession().getSessionContext() );
	}
	
	public long getBhgeCustomersCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.BHGEAPPROVER2CUSTOMERRELATION,
			"BHGERegieterCustomer",
			null
		);
	}
	
	public long getBhgeCustomersCount()
	{
		return getBhgeCustomersCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.bhgeCustomers</code> attribute. 
	 * @param value the bhgeCustomers - Customer List
	 */
	public void setBhgeCustomers(final SessionContext ctx, final List<BHGERegieterCustomer> value)
	{
		setLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.BHGEAPPROVER2CUSTOMERRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEAPPROVER2CUSTOMERRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.bhgeCustomers</code> attribute. 
	 * @param value the bhgeCustomers - Customer List
	 */
	public void setBhgeCustomers(final List<BHGERegieterCustomer> value)
	{
		setBhgeCustomers( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeCustomers. 
	 * @param value the item to add to bhgeCustomers - Customer List
	 */
	public void addToBhgeCustomers(final SessionContext ctx, final BHGERegieterCustomer value)
	{
		addLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.BHGEAPPROVER2CUSTOMERRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEAPPROVER2CUSTOMERRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeCustomers. 
	 * @param value the item to add to bhgeCustomers - Customer List
	 */
	public void addToBhgeCustomers(final BHGERegieterCustomer value)
	{
		addToBhgeCustomers( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeCustomers. 
	 * @param value the item to remove from bhgeCustomers - Customer List
	 */
	public void removeFromBhgeCustomers(final SessionContext ctx, final BHGERegieterCustomer value)
	{
		removeLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.BHGEAPPROVER2CUSTOMERRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEAPPROVER2CUSTOMERRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEAPPROVER2CUSTOMERRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeCustomers. 
	 * @param value the item to remove from bhgeCustomers - Customer List
	 */
	public void removeFromBhgeCustomers(final BHGERegieterCustomer value)
	{
		removeFromBhgeCustomers( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.bhgeUserAccess</code> attribute.
	 * @return the bhgeUserAccess - User Access Request
	 */
	public List<BHGEUserAccessRequest> getBhgeUserAccess(final SessionContext ctx)
	{
		final List<BHGEUserAccessRequest> items = getLinkedItems( 
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.FPTAPPROVER2USERACESSRELATION,
			"BHGEUserAccessRequest",
			null,
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_TGT_ORDERED, true)
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.bhgeUserAccess</code> attribute.
	 * @return the bhgeUserAccess - User Access Request
	 */
	public List<BHGEUserAccessRequest> getBhgeUserAccess()
	{
		return getBhgeUserAccess( getSession().getSessionContext() );
	}
	
	public long getBhgeUserAccessCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.FPTAPPROVER2USERACESSRELATION,
			"BHGEUserAccessRequest",
			null
		);
	}
	
	public long getBhgeUserAccessCount()
	{
		return getBhgeUserAccessCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.bhgeUserAccess</code> attribute. 
	 * @param value the bhgeUserAccess - User Access Request
	 */
	public void setBhgeUserAccess(final SessionContext ctx, final List<BHGEUserAccessRequest> value)
	{
		setLinkedItems( 
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.FPTAPPROVER2USERACESSRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(FPTAPPROVER2USERACESSRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.bhgeUserAccess</code> attribute. 
	 * @param value the bhgeUserAccess - User Access Request
	 */
	public void setBhgeUserAccess(final List<BHGEUserAccessRequest> value)
	{
		setBhgeUserAccess( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeUserAccess. 
	 * @param value the item to add to bhgeUserAccess - User Access Request
	 */
	public void addToBhgeUserAccess(final SessionContext ctx, final BHGEUserAccessRequest value)
	{
		addLinkedItems( 
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.FPTAPPROVER2USERACESSRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(FPTAPPROVER2USERACESSRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeUserAccess. 
	 * @param value the item to add to bhgeUserAccess - User Access Request
	 */
	public void addToBhgeUserAccess(final BHGEUserAccessRequest value)
	{
		addToBhgeUserAccess( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeUserAccess. 
	 * @param value the item to remove from bhgeUserAccess - User Access Request
	 */
	public void removeFromBhgeUserAccess(final SessionContext ctx, final BHGEUserAccessRequest value)
	{
		removeLinkedItems( 
			ctx,
			false,
			BhgeregisterwebservicesConstants.Relations.FPTAPPROVER2USERACESSRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(FPTAPPROVER2USERACESSRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(FPTAPPROVER2USERACESSRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeUserAccess. 
	 * @param value the item to remove from bhgeUserAccess - User Access Request
	 */
	public void removeFromBhgeUserAccess(final BHGEUserAccessRequest value)
	{
		removeFromBhgeUserAccess( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.emailDistribList</code> attribute.
	 * @return the emailDistribList - Email Distribution List
	 */
	public String getEmailDistribList(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAILDISTRIBLIST);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEApprovalDetails.emailDistribList</code> attribute.
	 * @return the emailDistribList - Email Distribution List
	 */
	public String getEmailDistribList()
	{
		return getEmailDistribList( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.emailDistribList</code> attribute. 
	 * @param value the emailDistribList - Email Distribution List
	 */
	public void setEmailDistribList(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAILDISTRIBLIST,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEApprovalDetails.emailDistribList</code> attribute. 
	 * @param value the emailDistribList - Email Distribution List
	 */
	public void setEmailDistribList(final String value)
	{
		setEmailDistribList( getSession().getSessionContext(), value );
	}
	
	/**
	 * @deprecated since 2011, use {@link Utilities#getMarkModifiedOverride(de.hybris.platform.jalo.type.RelationType)
	 */
	@Override
	@Deprecated(since = "2105", forRemoval = true)
	public boolean isMarkModifiedDisabled(final Item referencedItem)
	{
		ComposedType relationSecondEnd0 = TypeManager.getInstance().getComposedType("BHGERegieterCustomer");
		if(relationSecondEnd0.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(BHGEAPPROVER2CUSTOMERRELATION_MARKMODIFIED);
		}
		ComposedType relationSecondEnd1 = TypeManager.getInstance().getComposedType("BHGEUserAccessRequest");
		if(relationSecondEnd1.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(FPTAPPROVER2USERACESSRELATION_MARKMODIFIED);
		}
		return true;
	}
	
}
