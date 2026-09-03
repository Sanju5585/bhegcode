/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.register.webservices.jalo;

import com.bhge.register.webservices.constants.BhgeregisterwebservicesConstants;
import de.hybris.platform.core.model.BHGERegieterCustomer;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.TypeManager;
import de.hybris.platform.util.Utilities;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEAccountData}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEAccountData extends GenericItem
{
	/** Qualifier of the <code>BHGEAccountData.accountNumber</code> attribute **/
	public static final String ACCOUNTNUMBER = "accountNumber";
	/** Qualifier of the <code>BHGEAccountData.accountName</code> attribute **/
	public static final String ACCOUNTNAME = "accountName";
	/** Qualifier of the <code>BHGEAccountData.bhgeCustomers</code> attribute **/
	public static final String BHGECUSTOMERS = "bhgeCustomers";
	/** Relation ordering override parameter constants for BHGEAccount2CustomerRelation from ((bhgeregisterwebservices))*/
	protected static String BHGEACCOUNT2CUSTOMERRELATION_SRC_ORDERED = "relation.BHGEAccount2CustomerRelation.source.ordered";
	protected static String BHGEACCOUNT2CUSTOMERRELATION_TGT_ORDERED = "relation.BHGEAccount2CustomerRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for BHGEAccount2CustomerRelation from ((bhgeregisterwebservices))*/
	protected static String BHGEACCOUNT2CUSTOMERRELATION_MARKMODIFIED = "relation.BHGEAccount2CustomerRelation.markmodified";
	/** Qualifier of the <code>BHGEAccountData.bhgeManagers</code> attribute **/
	public static final String BHGEMANAGERS = "bhgeManagers";
	/** Relation ordering override parameter constants for BHGEManager2AccountRelation from ((bhgeregisterwebservices))*/
	protected static String BHGEMANAGER2ACCOUNTRELATION_SRC_ORDERED = "relation.BHGEManager2AccountRelation.source.ordered";
	protected static String BHGEMANAGER2ACCOUNTRELATION_TGT_ORDERED = "relation.BHGEManager2AccountRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for BHGEManager2AccountRelation from ((bhgeregisterwebservices))*/
	protected static String BHGEMANAGER2ACCOUNTRELATION_MARKMODIFIED = "relation.BHGEManager2AccountRelation.markmodified";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(ACCOUNTNUMBER, AttributeMode.INITIAL);
		tmp.put(ACCOUNTNAME, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAccountData.accountName</code> attribute.
	 * @return the accountName - Account Name
	 */
	public String getAccountName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ACCOUNTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAccountData.accountName</code> attribute.
	 * @return the accountName - Account Name
	 */
	public String getAccountName()
	{
		return getAccountName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAccountData.accountName</code> attribute. 
	 * @param value the accountName - Account Name
	 */
	public void setAccountName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ACCOUNTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAccountData.accountName</code> attribute. 
	 * @param value the accountName - Account Name
	 */
	public void setAccountName(final String value)
	{
		setAccountName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAccountData.accountNumber</code> attribute.
	 * @return the accountNumber - Account Number
	 */
	public String getAccountNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ACCOUNTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAccountData.accountNumber</code> attribute.
	 * @return the accountNumber - Account Number
	 */
	public String getAccountNumber()
	{
		return getAccountNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAccountData.accountNumber</code> attribute. 
	 * @param value the accountNumber - Account Number
	 */
	public void setAccountNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ACCOUNTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAccountData.accountNumber</code> attribute. 
	 * @param value the accountNumber - Account Number
	 */
	public void setAccountNumber(final String value)
	{
		setAccountNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAccountData.bhgeCustomers</code> attribute.
	 * @return the bhgeCustomers - Customer List
	 */
	public List<BHGERegieterCustomer> getBhgeCustomers(final SessionContext ctx)
	{
		final List<BHGERegieterCustomer> items = getLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.BHGEACCOUNT2CUSTOMERRELATION,
			"BHGERegieterCustomer",
			null,
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_TGT_ORDERED, true)
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAccountData.bhgeCustomers</code> attribute.
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
			BhgeregisterwebservicesConstants.Relations.BHGEACCOUNT2CUSTOMERRELATION,
			"BHGERegieterCustomer",
			null
		);
	}
	
	public long getBhgeCustomersCount()
	{
		return getBhgeCustomersCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAccountData.bhgeCustomers</code> attribute. 
	 * @param value the bhgeCustomers - Customer List
	 */
	public void setBhgeCustomers(final SessionContext ctx, final List<BHGERegieterCustomer> value)
	{
		setLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.BHGEACCOUNT2CUSTOMERRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEACCOUNT2CUSTOMERRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAccountData.bhgeCustomers</code> attribute. 
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
			BhgeregisterwebservicesConstants.Relations.BHGEACCOUNT2CUSTOMERRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEACCOUNT2CUSTOMERRELATION_MARKMODIFIED)
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
			BhgeregisterwebservicesConstants.Relations.BHGEACCOUNT2CUSTOMERRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEACCOUNT2CUSTOMERRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEACCOUNT2CUSTOMERRELATION_MARKMODIFIED)
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
	 * <i>Generated method</i> - Getter of the <code>BHGEAccountData.bhgeManagers</code> attribute.
	 * @return the bhgeManagers - Customer List
	 */
	public List<BHGERegieterCustomer> getBhgeManagers(final SessionContext ctx)
	{
		final List<BHGERegieterCustomer> items = getLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.BHGEMANAGER2ACCOUNTRELATION,
			"BHGERegieterCustomer",
			null,
			Utilities.getRelationOrderingOverride(BHGEMANAGER2ACCOUNTRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEMANAGER2ACCOUNTRELATION_TGT_ORDERED, true)
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAccountData.bhgeManagers</code> attribute.
	 * @return the bhgeManagers - Customer List
	 */
	public List<BHGERegieterCustomer> getBhgeManagers()
	{
		return getBhgeManagers( getSession().getSessionContext() );
	}
	
	public long getBhgeManagersCount(final SessionContext ctx)
	{
		return getLinkedItemsCount(
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.BHGEMANAGER2ACCOUNTRELATION,
			"BHGERegieterCustomer",
			null
		);
	}
	
	public long getBhgeManagersCount()
	{
		return getBhgeManagersCount( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAccountData.bhgeManagers</code> attribute. 
	 * @param value the bhgeManagers - Customer List
	 */
	public void setBhgeManagers(final SessionContext ctx, final List<BHGERegieterCustomer> value)
	{
		setLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.BHGEMANAGER2ACCOUNTRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(BHGEMANAGER2ACCOUNTRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEMANAGER2ACCOUNTRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEMANAGER2ACCOUNTRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAccountData.bhgeManagers</code> attribute. 
	 * @param value the bhgeManagers - Customer List
	 */
	public void setBhgeManagers(final List<BHGERegieterCustomer> value)
	{
		setBhgeManagers( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeManagers. 
	 * @param value the item to add to bhgeManagers - Customer List
	 */
	public void addToBhgeManagers(final SessionContext ctx, final BHGERegieterCustomer value)
	{
		addLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.BHGEMANAGER2ACCOUNTRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEMANAGER2ACCOUNTRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEMANAGER2ACCOUNTRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEMANAGER2ACCOUNTRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeManagers. 
	 * @param value the item to add to bhgeManagers - Customer List
	 */
	public void addToBhgeManagers(final BHGERegieterCustomer value)
	{
		addToBhgeManagers( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeManagers. 
	 * @param value the item to remove from bhgeManagers - Customer List
	 */
	public void removeFromBhgeManagers(final SessionContext ctx, final BHGERegieterCustomer value)
	{
		removeLinkedItems( 
			ctx,
			true,
			BhgeregisterwebservicesConstants.Relations.BHGEMANAGER2ACCOUNTRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEMANAGER2ACCOUNTRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(BHGEMANAGER2ACCOUNTRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(BHGEMANAGER2ACCOUNTRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeManagers. 
	 * @param value the item to remove from bhgeManagers - Customer List
	 */
	public void removeFromBhgeManagers(final BHGERegieterCustomer value)
	{
		removeFromBhgeManagers( getSession().getSessionContext(), value );
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
			return Utilities.getMarkModifiedOverride(BHGEACCOUNT2CUSTOMERRELATION_MARKMODIFIED);
		}
		ComposedType relationSecondEnd1 = TypeManager.getInstance().getComposedType("BHGERegieterCustomer");
		if(relationSecondEnd1.isAssignableFrom(referencedItem.getComposedType()))
		{
			return Utilities.getMarkModifiedOverride(BHGEMANAGER2ACCOUNTRELATION_MARKMODIFIED);
		}
		return true;
	}
	
}
