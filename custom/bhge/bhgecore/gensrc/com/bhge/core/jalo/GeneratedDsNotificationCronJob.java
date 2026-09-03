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
 * Generated class for type {@link de.hybris.platform.cronjob.jalo.CronJob DsNotificationCronJob}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedDsNotificationCronJob extends CronJob
{
	/** Qualifier of the <code>DsNotificationCronJob.customerNumber</code> attribute **/
	public static final String CUSTOMERNUMBER = "customerNumber";
	/** Qualifier of the <code>DsNotificationCronJob.division</code> attribute **/
	public static final String DIVISION = "division";
	/** Qualifier of the <code>DsNotificationCronJob.flag</code> attribute **/
	public static final String FLAG = "flag";
	/** Qualifier of the <code>DsNotificationCronJob.salesOrg</code> attribute **/
	public static final String SALESORG = "salesOrg";
	/** Qualifier of the <code>DsNotificationCronJob.startDate</code> attribute **/
	public static final String STARTDATE = "startDate";
	/** Qualifier of the <code>DsNotificationCronJob.soNumber</code> attribute **/
	public static final String SONUMBER = "soNumber";
	/** Qualifier of the <code>DsNotificationCronJob.endDate</code> attribute **/
	public static final String ENDDATE = "endDate";
	/** Qualifier of the <code>DsNotificationCronJob.soType</code> attribute **/
	public static final String SOTYPE = "soType";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(CronJob.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(CUSTOMERNUMBER, AttributeMode.INITIAL);
		tmp.put(DIVISION, AttributeMode.INITIAL);
		tmp.put(FLAG, AttributeMode.INITIAL);
		tmp.put(SALESORG, AttributeMode.INITIAL);
		tmp.put(STARTDATE, AttributeMode.INITIAL);
		tmp.put(SONUMBER, AttributeMode.INITIAL);
		tmp.put(ENDDATE, AttributeMode.INITIAL);
		tmp.put(SOTYPE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.customerNumber</code> attribute.
	 * @return the customerNumber - customer Number
	 */
	public String getCustomerNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CUSTOMERNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.customerNumber</code> attribute.
	 * @return the customerNumber - customer Number
	 */
	public String getCustomerNumber()
	{
		return getCustomerNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.customerNumber</code> attribute. 
	 * @param value the customerNumber - customer Number
	 */
	public void setCustomerNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CUSTOMERNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.customerNumber</code> attribute. 
	 * @param value the customerNumber - customer Number
	 */
	public void setCustomerNumber(final String value)
	{
		setCustomerNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.division</code> attribute.
	 * @return the division - Division
	 */
	public String getDivision(final SessionContext ctx)
	{
		return (String)getProperty( ctx, DIVISION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.division</code> attribute.
	 * @return the division - Division
	 */
	public String getDivision()
	{
		return getDivision( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.division</code> attribute. 
	 * @param value the division - Division
	 */
	public void setDivision(final SessionContext ctx, final String value)
	{
		setProperty(ctx, DIVISION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.division</code> attribute. 
	 * @param value the division - Division
	 */
	public void setDivision(final String value)
	{
		setDivision( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.endDate</code> attribute.
	 * @return the endDate - EndDate
	 */
	public Date getEndDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, ENDDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.endDate</code> attribute.
	 * @return the endDate - EndDate
	 */
	public Date getEndDate()
	{
		return getEndDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.endDate</code> attribute. 
	 * @param value the endDate - EndDate
	 */
	public void setEndDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, ENDDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.endDate</code> attribute. 
	 * @param value the endDate - EndDate
	 */
	public void setEndDate(final Date value)
	{
		setEndDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.flag</code> attribute.
	 * @return the flag - Flag
	 */
	public String getFlag(final SessionContext ctx)
	{
		return (String)getProperty( ctx, FLAG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.flag</code> attribute.
	 * @return the flag - Flag
	 */
	public String getFlag()
	{
		return getFlag( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.flag</code> attribute. 
	 * @param value the flag - Flag
	 */
	public void setFlag(final SessionContext ctx, final String value)
	{
		setProperty(ctx, FLAG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.flag</code> attribute. 
	 * @param value the flag - Flag
	 */
	public void setFlag(final String value)
	{
		setFlag( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.salesOrg</code> attribute.
	 * @return the salesOrg - SalesOrg
	 */
	public String getSalesOrg(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SALESORG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.salesOrg</code> attribute.
	 * @return the salesOrg - SalesOrg
	 */
	public String getSalesOrg()
	{
		return getSalesOrg( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.salesOrg</code> attribute. 
	 * @param value the salesOrg - SalesOrg
	 */
	public void setSalesOrg(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SALESORG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.salesOrg</code> attribute. 
	 * @param value the salesOrg - SalesOrg
	 */
	public void setSalesOrg(final String value)
	{
		setSalesOrg( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.soNumber</code> attribute.
	 * @return the soNumber - SoNumber
	 */
	public String getSoNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SONUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.soNumber</code> attribute.
	 * @return the soNumber - SoNumber
	 */
	public String getSoNumber()
	{
		return getSoNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.soNumber</code> attribute. 
	 * @param value the soNumber - SoNumber
	 */
	public void setSoNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SONUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.soNumber</code> attribute. 
	 * @param value the soNumber - SoNumber
	 */
	public void setSoNumber(final String value)
	{
		setSoNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.soType</code> attribute.
	 * @return the soType - So Type
	 */
	public String getSoType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SOTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.soType</code> attribute.
	 * @return the soType - So Type
	 */
	public String getSoType()
	{
		return getSoType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.soType</code> attribute. 
	 * @param value the soType - So Type
	 */
	public void setSoType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SOTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.soType</code> attribute. 
	 * @param value the soType - So Type
	 */
	public void setSoType(final String value)
	{
		setSoType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.startDate</code> attribute.
	 * @return the startDate - Start Date
	 */
	public Date getStartDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, STARTDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DsNotificationCronJob.startDate</code> attribute.
	 * @return the startDate - Start Date
	 */
	public Date getStartDate()
	{
		return getStartDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.startDate</code> attribute. 
	 * @param value the startDate - Start Date
	 */
	public void setStartDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, STARTDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DsNotificationCronJob.startDate</code> attribute. 
	 * @param value the startDate - Start Date
	 */
	public void setStartDate(final Date value)
	{
		setStartDate( getSession().getSessionContext(), value );
	}
	
}
