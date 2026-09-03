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
 * Generated class for type {@link de.hybris.platform.cronjob.jalo.CronJob WeeklyOrderCronJob}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedWeeklyOrderCronJob extends CronJob
{
	/** Qualifier of the <code>WeeklyOrderCronJob.fromDate</code> attribute **/
	public static final String FROMDATE = "fromDate";
	/** Qualifier of the <code>WeeklyOrderCronJob.toDate</code> attribute **/
	public static final String TODATE = "toDate";
	/** Qualifier of the <code>WeeklyOrderCronJob.daysRange</code> attribute **/
	public static final String DAYSRANGE = "daysRange";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(CronJob.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(FROMDATE, AttributeMode.INITIAL);
		tmp.put(TODATE, AttributeMode.INITIAL);
		tmp.put(DAYSRANGE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WeeklyOrderCronJob.daysRange</code> attribute.
	 * @return the daysRange - Specifies the number of days from current day
	 */
	public Long getDaysRange(final SessionContext ctx)
	{
		return (Long)getProperty( ctx, DAYSRANGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WeeklyOrderCronJob.daysRange</code> attribute.
	 * @return the daysRange - Specifies the number of days from current day
	 */
	public Long getDaysRange()
	{
		return getDaysRange( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WeeklyOrderCronJob.daysRange</code> attribute. 
	 * @return the daysRange - Specifies the number of days from current day
	 */
	public long getDaysRangeAsPrimitive(final SessionContext ctx)
	{
		Long value = getDaysRange( ctx );
		return value != null ? value.longValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WeeklyOrderCronJob.daysRange</code> attribute. 
	 * @return the daysRange - Specifies the number of days from current day
	 */
	public long getDaysRangeAsPrimitive()
	{
		return getDaysRangeAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WeeklyOrderCronJob.daysRange</code> attribute. 
	 * @param value the daysRange - Specifies the number of days from current day
	 */
	public void setDaysRange(final SessionContext ctx, final Long value)
	{
		setProperty(ctx, DAYSRANGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WeeklyOrderCronJob.daysRange</code> attribute. 
	 * @param value the daysRange - Specifies the number of days from current day
	 */
	public void setDaysRange(final Long value)
	{
		setDaysRange( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WeeklyOrderCronJob.daysRange</code> attribute. 
	 * @param value the daysRange - Specifies the number of days from current day
	 */
	public void setDaysRange(final SessionContext ctx, final long value)
	{
		setDaysRange( ctx,Long.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WeeklyOrderCronJob.daysRange</code> attribute. 
	 * @param value the daysRange - Specifies the number of days from current day
	 */
	public void setDaysRange(final long value)
	{
		setDaysRange( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WeeklyOrderCronJob.fromDate</code> attribute.
	 * @return the fromDate - From-Date in the range of Order Creation Range
	 */
	public Date getFromDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, FROMDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WeeklyOrderCronJob.fromDate</code> attribute.
	 * @return the fromDate - From-Date in the range of Order Creation Range
	 */
	public Date getFromDate()
	{
		return getFromDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WeeklyOrderCronJob.fromDate</code> attribute. 
	 * @param value the fromDate - From-Date in the range of Order Creation Range
	 */
	public void setFromDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, FROMDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WeeklyOrderCronJob.fromDate</code> attribute. 
	 * @param value the fromDate - From-Date in the range of Order Creation Range
	 */
	public void setFromDate(final Date value)
	{
		setFromDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WeeklyOrderCronJob.toDate</code> attribute.
	 * @return the toDate - To-Date in the range of Order Creation Range
	 */
	public Date getToDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, TODATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>WeeklyOrderCronJob.toDate</code> attribute.
	 * @return the toDate - To-Date in the range of Order Creation Range
	 */
	public Date getToDate()
	{
		return getToDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WeeklyOrderCronJob.toDate</code> attribute. 
	 * @param value the toDate - To-Date in the range of Order Creation Range
	 */
	public void setToDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, TODATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>WeeklyOrderCronJob.toDate</code> attribute. 
	 * @param value the toDate - To-Date in the range of Order Creation Range
	 */
	public void setToDate(final Date value)
	{
		setToDate( getSession().getSessionContext(), value );
	}
	
}
