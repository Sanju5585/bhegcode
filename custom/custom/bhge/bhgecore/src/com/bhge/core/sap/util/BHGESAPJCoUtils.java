/**
 *
 */
package com.bhge.core.sap.util;

import de.hybris.platform.core.model.user.AddressModel;

import java.text.DecimalFormat;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.constants.BhgeCoreConstants;


/**
 * @author sagbharatha
 *
 */
public class BHGESAPJCoUtils
{

	private static final Logger LOG = Logger.getLogger(BHGESAPJCoUtils.class);

	private static final String IS_TRUE = "X";

	public static String getFormattedPrice(String price)
	{
		// Following code is to remove the leading zeros which we get from SAP system.
		price = price.replaceFirst("^0*", "");
		if (price.isEmpty())
		{
			return "0";
		}
		return price;
	}

	public static String addLeadingZeros(String qty, final int noOfZeros)
	{
		if (qty == null)
		{
			qty = "0";
		}
		while (qty.length() < noOfZeros)
		{
			qty = "0" + qty;
		}
		return qty;
	}

	public static boolean isNumericData(final String str)
	{
		if (str == null)
		{
			return false;
		}
		else
		{
			final int sz = str.length();
			for (int i = 0; i < sz; ++i)
			{
				if (!Character.isDigit(str.charAt(i)))
				{
					return false;
				}
			}
			return true;
		}
	}


	public static char getBooleanValue(final Boolean value)
	{
		if (value != null && value == Boolean.TRUE)
		{
			return 'T';
		}
		else
		{
			return 'F';
		}
	}

	public static Boolean getBooleanValueForString(final String value)
	{
		if (StringUtils.isNotEmpty(value) && StringUtils.isNotBlank(value) && IS_TRUE.equals(value))
		{
			return Boolean.TRUE;
		}
		else
		{
			return Boolean.FALSE;
		}
	}

	public static String getFormattedDiscountPercentage(String discPercentage)
	{
		try
		{
			if (StringUtils.isNotBlank(discPercentage))
			{
				// Removing '-' sign, if its present in the discount percentage
				if ("-".equals(discPercentage.substring(discPercentage.length() - 1)))
				{
					discPercentage = discPercentage.substring(0, discPercentage.length() - 1);
				}

				final double discount = Double.parseDouble(discPercentage);
				final DecimalFormat df = new DecimalFormat("0.00");
				df.setMaximumFractionDigits(2);
				return df.format(discount);
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while formatting the discount percentage " + e);
		}
		return "0.00";
	}
	
	public static String formatDiscountPercentage(Double discPercentage) {
		try {
			if (discPercentage != null && discPercentage > 0) {
				final DecimalFormat df = new DecimalFormat("0.00");
				df.setMaximumFractionDigits(2);
				return df.format(discPercentage);
			}
		} catch (final Exception e) {
			LOG.error("Error occured while formatting the discount percentage " + e);
		}
		return "0.00";
	}

	public static String getSilverClauseDiscPercentage(String price)
	{
		if (StringUtils.isNotBlank(price))
		{
			price = price.trim();
			if (price.contains(BhgeCoreConstants.HYPHEN))
			{
				final String tempPrice = price.split(BhgeCoreConstants.HYPHEN)[0];
				price = BhgeCoreConstants.HYPHEN + tempPrice;
			}
		}
		return price;
	}

	public static String checkNullForString(final String checkvalue)
	{
		if (checkvalue != null && !checkvalue.isEmpty())
		{
			return checkvalue;
		}
		else
		{
			return "";
		}
	}

	public static String checkBooleanValues(final Boolean checkvalue)
	{
		if (checkvalue != null && checkvalue == true)
		{
			return "X";
		}
		else
		{
			return "";
		}
	}


	public static String processAddressTextInLineByLineFormat(final AddressModel addressModelData)
	{
		final StringBuffer addressData = new StringBuffer();

		boolean ifDataPresent = false;

		if (StringUtils.isNotBlank(addressModelData.getCompany()))
		{
			addressData.append(addressModelData.getCompany());
			ifDataPresent = true;
		}
		if (StringUtils.isNotBlank(addressModelData.getLine1()))
		{
			if (ifDataPresent)
			{
				addressData.append("\n");
			}
			addressData.append(addressModelData.getLine1());
			ifDataPresent = true;
		}
		if (StringUtils.isNotBlank(addressModelData.getLine2()))
		{
			if (ifDataPresent)
			{
				addressData.append("\n");
			}
			addressData.append(addressModelData.getLine2());
			ifDataPresent = true;
		}
		if (StringUtils.isNotBlank(addressModelData.getTown()))
		{
			if (ifDataPresent)
			{
				addressData.append("\n");
			}
			addressData.append(addressModelData.getTown());
			ifDataPresent = true;
		}
		if (addressModelData.getRegion() != null)
		{
			if (ifDataPresent)
			{
				addressData.append("\n");
			}
			addressData.append(addressModelData.getRegion().getIsocodeShort());
			ifDataPresent = true;
		}
		if (StringUtils.isNotBlank(addressModelData.getPostalcode()))
		{
			if (ifDataPresent)
			{
				addressData.append("\n");
			}
			addressData.append(addressModelData.getPostalcode());
			ifDataPresent = true;
		}
		if (addressModelData.getCountry() != null)
		{
			if (ifDataPresent)
			{
				addressData.append("\n");
			}
			addressData.append(addressModelData.getCountry().getIsocode());
			ifDataPresent = true;
		}
		if (ifDataPresent)
		{
			addressData.append(".");
		}

		return addressData.toString();
	}


	public static String processAddressText(final AddressModel addressModelData)
	{
		final StringBuffer addressData = new StringBuffer();

		boolean ifDataPresent = false;

		if (StringUtils.isNotBlank(addressModelData.getCompany()))
		{
			addressData.append(addressModelData.getCompany());
			ifDataPresent = true;
		}
		if (StringUtils.isNotBlank(addressModelData.getLine1()))
		{
			if (ifDataPresent)
			{
				addressData.append(", ");
			}
			addressData.append(addressModelData.getLine1());
			ifDataPresent = true;
		}
		if (StringUtils.isNotBlank(addressModelData.getLine2()))
		{
			if (ifDataPresent)
			{
				addressData.append(", ");
			}
			addressData.append(addressModelData.getLine2());
			ifDataPresent = true;
		}
		if (StringUtils.isNotBlank(addressModelData.getTown()))
		{
			if (ifDataPresent)
			{
				addressData.append(", ");
			}
			addressData.append(addressModelData.getTown());
			ifDataPresent = true;
		}
		if (addressModelData.getRegion() != null)
		{
			if (ifDataPresent)
			{
				addressData.append(", ");
			}
			addressData.append(addressModelData.getRegion().getIsocodeShort());
			ifDataPresent = true;
		}
		if (StringUtils.isNotBlank(addressModelData.getPostalcode()))
		{
			if (ifDataPresent)
			{
				addressData.append(", ");
			}
			addressData.append(addressModelData.getPostalcode());
			ifDataPresent = true;
		}
		if (addressModelData.getCountry() != null)
		{
			if (ifDataPresent)
			{
				addressData.append(", ");
			}
			addressData.append(addressModelData.getCountry().getIsocode());
			ifDataPresent = true;
		}
		if (ifDataPresent)
		{
			addressData.append(".");
		}

		return addressData.toString();
	}

}
