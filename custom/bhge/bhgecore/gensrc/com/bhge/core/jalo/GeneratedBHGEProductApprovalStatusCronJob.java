/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.cronjob.jalo.CronJob;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.cronjob.jalo.CronJob BHGEProductApprovalStatusCronJob}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEProductApprovalStatusCronJob extends CronJob
{
	/** Qualifier of the <code>BHGEProductApprovalStatusCronJob.materialPushFlag</code> attribute **/
	public static final String MATERIALPUSHFLAG = "materialPushFlag";
	/** Qualifier of the <code>BHGEProductApprovalStatusCronJob.customerPushFlag</code> attribute **/
	public static final String CUSTOMERPUSHFLAG = "customerPushFlag";
	/** Qualifier of the <code>BHGEProductApprovalStatusCronJob.addressPushFlag</code> attribute **/
	public static final String ADDRESSPUSHFLAG = "addressPushFlag";
	/** Qualifier of the <code>BHGEProductApprovalStatusCronJob.pricePushFlag</code> attribute **/
	public static final String PRICEPUSHFLAG = "pricePushFlag";
	/** Qualifier of the <code>BHGEProductApprovalStatusCronJob.onDate</code> attribute **/
	public static final String ONDATE = "onDate";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(CronJob.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(MATERIALPUSHFLAG, AttributeMode.INITIAL);
		tmp.put(CUSTOMERPUSHFLAG, AttributeMode.INITIAL);
		tmp.put(ADDRESSPUSHFLAG, AttributeMode.INITIAL);
		tmp.put(PRICEPUSHFLAG, AttributeMode.INITIAL);
		tmp.put(ONDATE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.addressPushFlag</code> attribute.
	 * @return the addressPushFlag - A flag variable to create Updated Address push details in sheet
	 */
	public Boolean isAddressPushFlag(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ADDRESSPUSHFLAG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.addressPushFlag</code> attribute.
	 * @return the addressPushFlag - A flag variable to create Updated Address push details in sheet
	 */
	public Boolean isAddressPushFlag()
	{
		return isAddressPushFlag( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.addressPushFlag</code> attribute. 
	 * @return the addressPushFlag - A flag variable to create Updated Address push details in sheet
	 */
	public boolean isAddressPushFlagAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isAddressPushFlag( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.addressPushFlag</code> attribute. 
	 * @return the addressPushFlag - A flag variable to create Updated Address push details in sheet
	 */
	public boolean isAddressPushFlagAsPrimitive()
	{
		return isAddressPushFlagAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.addressPushFlag</code> attribute. 
	 * @param value the addressPushFlag - A flag variable to create Updated Address push details in sheet
	 */
	public void setAddressPushFlag(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ADDRESSPUSHFLAG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.addressPushFlag</code> attribute. 
	 * @param value the addressPushFlag - A flag variable to create Updated Address push details in sheet
	 */
	public void setAddressPushFlag(final Boolean value)
	{
		setAddressPushFlag( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.addressPushFlag</code> attribute. 
	 * @param value the addressPushFlag - A flag variable to create Updated Address push details in sheet
	 */
	public void setAddressPushFlag(final SessionContext ctx, final boolean value)
	{
		setAddressPushFlag( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.addressPushFlag</code> attribute. 
	 * @param value the addressPushFlag - A flag variable to create Updated Address push details in sheet
	 */
	public void setAddressPushFlag(final boolean value)
	{
		setAddressPushFlag( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.customerPushFlag</code> attribute.
	 * @return the customerPushFlag - A flag variable to create Updated Customer push details in sheet
	 */
	public Boolean isCustomerPushFlag(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, CUSTOMERPUSHFLAG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.customerPushFlag</code> attribute.
	 * @return the customerPushFlag - A flag variable to create Updated Customer push details in sheet
	 */
	public Boolean isCustomerPushFlag()
	{
		return isCustomerPushFlag( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.customerPushFlag</code> attribute. 
	 * @return the customerPushFlag - A flag variable to create Updated Customer push details in sheet
	 */
	public boolean isCustomerPushFlagAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isCustomerPushFlag( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.customerPushFlag</code> attribute. 
	 * @return the customerPushFlag - A flag variable to create Updated Customer push details in sheet
	 */
	public boolean isCustomerPushFlagAsPrimitive()
	{
		return isCustomerPushFlagAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.customerPushFlag</code> attribute. 
	 * @param value the customerPushFlag - A flag variable to create Updated Customer push details in sheet
	 */
	public void setCustomerPushFlag(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, CUSTOMERPUSHFLAG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.customerPushFlag</code> attribute. 
	 * @param value the customerPushFlag - A flag variable to create Updated Customer push details in sheet
	 */
	public void setCustomerPushFlag(final Boolean value)
	{
		setCustomerPushFlag( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.customerPushFlag</code> attribute. 
	 * @param value the customerPushFlag - A flag variable to create Updated Customer push details in sheet
	 */
	public void setCustomerPushFlag(final SessionContext ctx, final boolean value)
	{
		setCustomerPushFlag( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.customerPushFlag</code> attribute. 
	 * @param value the customerPushFlag - A flag variable to create Updated Customer push details in sheet
	 */
	public void setCustomerPushFlag(final boolean value)
	{
		setCustomerPushFlag( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.materialPushFlag</code> attribute.
	 * @return the materialPushFlag - A flag variable to create Updated Material push details in sheet
	 */
	public Boolean isMaterialPushFlag(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, MATERIALPUSHFLAG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.materialPushFlag</code> attribute.
	 * @return the materialPushFlag - A flag variable to create Updated Material push details in sheet
	 */
	public Boolean isMaterialPushFlag()
	{
		return isMaterialPushFlag( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.materialPushFlag</code> attribute. 
	 * @return the materialPushFlag - A flag variable to create Updated Material push details in sheet
	 */
	public boolean isMaterialPushFlagAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isMaterialPushFlag( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.materialPushFlag</code> attribute. 
	 * @return the materialPushFlag - A flag variable to create Updated Material push details in sheet
	 */
	public boolean isMaterialPushFlagAsPrimitive()
	{
		return isMaterialPushFlagAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.materialPushFlag</code> attribute. 
	 * @param value the materialPushFlag - A flag variable to create Updated Material push details in sheet
	 */
	public void setMaterialPushFlag(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, MATERIALPUSHFLAG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.materialPushFlag</code> attribute. 
	 * @param value the materialPushFlag - A flag variable to create Updated Material push details in sheet
	 */
	public void setMaterialPushFlag(final Boolean value)
	{
		setMaterialPushFlag( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.materialPushFlag</code> attribute. 
	 * @param value the materialPushFlag - A flag variable to create Updated Material push details in sheet
	 */
	public void setMaterialPushFlag(final SessionContext ctx, final boolean value)
	{
		setMaterialPushFlag( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.materialPushFlag</code> attribute. 
	 * @param value the materialPushFlag - A flag variable to create Updated Material push details in sheet
	 */
	public void setMaterialPushFlag(final boolean value)
	{
		setMaterialPushFlag( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.onDate</code> attribute.
	 * @return the onDate - Will get the records based on given date
	 */
	public Date getOnDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, ONDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.onDate</code> attribute.
	 * @return the onDate - Will get the records based on given date
	 */
	public Date getOnDate()
	{
		return getOnDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.onDate</code> attribute. 
	 * @param value the onDate - Will get the records based on given date
	 */
	public void setOnDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, ONDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.onDate</code> attribute. 
	 * @param value the onDate - Will get the records based on given date
	 */
	public void setOnDate(final Date value)
	{
		setOnDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.pricePushFlag</code> attribute.
	 * @return the pricePushFlag - A flag variable to create Updated Price push details in sheet
	 */
	public Boolean isPricePushFlag(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, PRICEPUSHFLAG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.pricePushFlag</code> attribute.
	 * @return the pricePushFlag - A flag variable to create Updated Price push details in sheet
	 */
	public Boolean isPricePushFlag()
	{
		return isPricePushFlag( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.pricePushFlag</code> attribute. 
	 * @return the pricePushFlag - A flag variable to create Updated Price push details in sheet
	 */
	public boolean isPricePushFlagAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isPricePushFlag( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEProductApprovalStatusCronJob.pricePushFlag</code> attribute. 
	 * @return the pricePushFlag - A flag variable to create Updated Price push details in sheet
	 */
	public boolean isPricePushFlagAsPrimitive()
	{
		return isPricePushFlagAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.pricePushFlag</code> attribute. 
	 * @param value the pricePushFlag - A flag variable to create Updated Price push details in sheet
	 */
	public void setPricePushFlag(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, PRICEPUSHFLAG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.pricePushFlag</code> attribute. 
	 * @param value the pricePushFlag - A flag variable to create Updated Price push details in sheet
	 */
	public void setPricePushFlag(final Boolean value)
	{
		setPricePushFlag( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.pricePushFlag</code> attribute. 
	 * @param value the pricePushFlag - A flag variable to create Updated Price push details in sheet
	 */
	public void setPricePushFlag(final SessionContext ctx, final boolean value)
	{
		setPricePushFlag( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEProductApprovalStatusCronJob.pricePushFlag</code> attribute. 
	 * @param value the pricePushFlag - A flag variable to create Updated Price push details in sheet
	 */
	public void setPricePushFlag(final boolean value)
	{
		setPricePushFlag( getSession().getSessionContext(), value );
	}
	
}
