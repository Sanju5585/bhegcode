package com.bhge.sap.orderfulfilment.util;

import org.apache.commons.lang3.StringUtils;

import com.bhge.sap.orderfulfilment.constants.BhgesaporderfulfillmentConstants;

import de.hybris.platform.core.model.user.AddressModel;


public final class BHGESAPOrderUtils {

	public static char getBooleanValue(final Boolean value) {
		
		if (value != null && value == Boolean.TRUE) {
			return BhgesaporderfulfillmentConstants.T;
		}
		else {
			return BhgesaporderfulfillmentConstants.F;
		}
	}

	public static String checkBooleanValues(final Boolean checkvalue) {
		
		if (checkvalue != null && checkvalue == true) {
			return BhgesaporderfulfillmentConstants.X;
		}
		else {
			return StringUtils.EMPTY;
		}
	}

	public static String checkNullForString(final String checkvalue) {
		
		if (checkvalue != null && !checkvalue.isEmpty()) {
			return checkvalue;
		}
		else {
			return StringUtils.EMPTY;
		}
	}

	public static String processAddressText(final AddressModel addressModelData) {
		
		final StringBuffer addressData = new StringBuffer();
		boolean ifDataPresent = false;

		if (StringUtils.isNotBlank(addressModelData.getCompany())) {
			addressData.append(addressModelData.getCompany());
			ifDataPresent = true;
		}
		
		if (StringUtils.isNotBlank(addressModelData.getLine1())) {
			if (ifDataPresent) {
				addressData.append(BhgesaporderfulfillmentConstants.CONCAT);
			}
			addressData.append(addressModelData.getLine1());
			ifDataPresent = true;
		}
		
		if (StringUtils.isNotBlank(addressModelData.getLine2())) {
			if (ifDataPresent) {
				addressData.append(BhgesaporderfulfillmentConstants.CONCAT);
			}
			addressData.append(addressModelData.getLine2());
			ifDataPresent = true;
		}
		
		if (StringUtils.isNotBlank(addressModelData.getTown())) {
			if (ifDataPresent) {
				addressData.append(BhgesaporderfulfillmentConstants.CONCAT);
			}
			addressData.append(addressModelData.getTown());
			ifDataPresent = true;
		}
		
		if (addressModelData.getRegion() != null) {
			if (ifDataPresent) {
				addressData.append(BhgesaporderfulfillmentConstants.CONCAT);
			}
			addressData.append(addressModelData.getRegion().getIsocodeShort());
			ifDataPresent = true;
		}
		
		if (StringUtils.isNotBlank(addressModelData.getPostalcode())) {
			if (ifDataPresent) {
				addressData.append(BhgesaporderfulfillmentConstants.CONCAT);
			}
			addressData.append(addressModelData.getPostalcode());
			ifDataPresent = true;
		}
		
		if (addressModelData.getCountry() != null) {
			if (ifDataPresent) {
				addressData.append(BhgesaporderfulfillmentConstants.CONCAT);
			}
			addressData.append(addressModelData.getCountry().getIsocode());
			ifDataPresent = true;
		}
		
		if (ifDataPresent) {
			addressData.append(BhgesaporderfulfillmentConstants.DOT);
		}

		return addressData.toString();
	}


	public static String addLeadingZeros(String qty, final int noOfZeros) {
		
		if (qty == null) {
			qty = BhgesaporderfulfillmentConstants.ZERO;
		}
		
		while (qty.length() < noOfZeros) {
			qty = BhgesaporderfulfillmentConstants.ZERO + qty;
		}
		return qty;
	}
	
	public static String processAddressTextInLineByLineFormat(final AddressModel addressModelData) {
		
		final StringBuffer addressData = new StringBuffer();

		boolean ifDataPresent = false;

		if (StringUtils.isNotBlank(addressModelData.getCompany())) {
			addressData.append(addressModelData.getCompany());
			ifDataPresent = true;
		}
		 
		if (StringUtils.isNotBlank(addressModelData.getLine1())) {
			if (ifDataPresent) {
				addressData.append("\n");
			}
			addressData.append(addressModelData.getLine1());
			ifDataPresent = true;
		}
		
		if (StringUtils.isNotBlank(addressModelData.getLine2())) {
			if (ifDataPresent) {
				addressData.append("\n");
			}
			addressData.append(addressModelData.getLine2());
			ifDataPresent = true;
		}
		
		if (StringUtils.isNotBlank(addressModelData.getTown())) {
			if (ifDataPresent) {
				addressData.append("\n");
			}
			addressData.append(addressModelData.getTown());
			ifDataPresent = true;
		}
		
		if (addressModelData.getRegion() != null) {
			if (ifDataPresent) {
				addressData.append("\n");
			}
			addressData.append(addressModelData.getRegion().getIsocodeShort());
			ifDataPresent = true;
		}
		
		if (StringUtils.isNotBlank(addressModelData.getPostalcode())) {
			if (ifDataPresent) {
				addressData.append("\n");
			}
			addressData.append(addressModelData.getPostalcode());
			ifDataPresent = true;
		}
		
		if (addressModelData.getCountry() != null) {
			if (ifDataPresent) {
				addressData.append("\n");
			}
			addressData.append(addressModelData.getCountry().getIsocode());
			ifDataPresent = true;
		}
		
		if (ifDataPresent) {
			addressData.append(".");
		}

		return addressData.toString();
	}


}

