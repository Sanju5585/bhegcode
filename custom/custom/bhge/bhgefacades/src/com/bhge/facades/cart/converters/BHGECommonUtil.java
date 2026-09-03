package com.bhge.facades.cart.converters;

import de.hybris.platform.util.Config;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;

import com.bhge.core.constants.BhgeCoreConstants;


public class BHGECommonUtil
{


	private static final Logger LOG = Logger.getLogger(BHGECommonUtil.class);

	public static String parseDateToyyyyMMdd(final String reqDate)
	{
		if (StringUtils.isNotBlank(reqDate))
		{
			final SimpleDateFormat formatter = new SimpleDateFormat("mm/dd/yyyy");
			try
			{
				final Date date = formatter.parse(reqDate);
				final SimpleDateFormat formatr = new SimpleDateFormat("YYYYmmDD");
				return formatr.format(date);
			}
			catch (final ParseException e)
			{
				LOG.error(": formatDateToyyyyMMdd() : Error while formatting date string.");
			}
		}
		return reqDate;
	}

	public static Date parseStringToDate(final String date)
	{
		final SimpleDateFormat format1 = new SimpleDateFormat("dd-MM-yyyy");
		final SimpleDateFormat format2 = new SimpleDateFormat("MM/dd/yyyy");
		//final SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");
		//Date requiredDate = null;
		Date date1 = null;
		try
		{
			date1 = format1.parse(date);
		}
		catch (final ParseException e)
		{
			e.printStackTrace();
		}
		final String date2 = format2.format(date1);
		Date requiredDate = null;
		try
		{
			requiredDate = new SimpleDateFormat("MM/dd/yyyy").parse(date2);
		}
		catch (final ParseException e)
		{
			e.printStackTrace();
		}
		/*
		 * try { requiredDate = formatter.parse(date); } catch (final Exception e) {
		 * LOG.error("Parse exception occured while parsing the Ship Date " + formatter); getStackTrace(e); }
		 */
		return requiredDate;
	}

	/**
	 * Returns date string that is compatible across browsers
	 *
	 * @param date
	 * @return
	 */
	public static String parseDateForCompatibility(final Date date)
	{
		final SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd");
		String leadTime = null;
		if (null != date)
		{
			leadTime = formatter.format(date);
		}
		return leadTime;
	}

	public static String formatDate(final Date date)
	{
		final SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
		String leadTime = null;
		if (null != date)
		{
			leadTime = formatter.format(date);
		}
		return leadTime;
	}

	public static Date getNextDayDate()
	{
		final Calendar calendar = Calendar.getInstance();
		calendar.setTime(Calendar.getInstance().getTime());
		calendar.set(Calendar.HOUR_OF_DAY, 0);
		calendar.add(Calendar.DAY_OF_YEAR, 1);
		return calendar.getTime();
	}

	public static Date parseEstimatedDate(final String date)
	{
		if (StringUtils.isNotBlank(date) && !BhgeCoreConstants.DEFAULT_DATE_VALUE.equals(date))
		{
			Date actualDate = null;
			Date requiredDate = null;
			final String actualDateFormat = Config.getString("ATP_SHIP_DATE_FORMAT", "dd-MMM-yyyy");
			final SimpleDateFormat actualDateFormatter = new SimpleDateFormat(actualDateFormat);
			final SimpleDateFormat requiredDateFormatter = new SimpleDateFormat("MM-dd-yyyy");
			try
			{
				actualDate = actualDateFormatter.parse(date);
				LOG.info("126 actualDate: " +actualDate);
				requiredDate = requiredDateFormatter.parse(requiredDateFormatter.format(actualDate));
				LOG.info("128 requiredDate: "+requiredDate);
			}
			catch (final Exception e)
			{
				LOG.error(
						"Parse exception occured while parsing the estimated ship date obtained from ATP RFC call: The Date obtained is not in the format of "
								+ actualDateFormatter);
				getStackTrace(e);
			}
			return requiredDate;
		}
		return null;
	}


	public static String getStackTrace(final Throwable e)
	{
		final Writer writer = new StringWriter();
		final PrintWriter printWriter = new PrintWriter(writer);
		//e.printStackTrace(printWriter);
		LOG.error("getstacktrace" + ExceptionUtils.getStackTrace(e));
		final String s = writer.toString();
		return s;
	}

}
