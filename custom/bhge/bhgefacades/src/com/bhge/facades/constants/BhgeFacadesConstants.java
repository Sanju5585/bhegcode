/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.facades.constants;

/**
 * Global class for all BhgeFacades constants.
 */
@SuppressWarnings("PMD")
public class BhgeFacadesConstants extends GeneratedBhgeFacadesConstants
{
	public static final String EXTENSIONNAME = "bhgefacades";
	public static final String US_COUNTRY_CODE = "US";

	//Hybris status constants
	public static final String SELL = "SELL";
	public static final String RETURN = "RETURN";
	public static final String SELLANDRETURN = "SELLANDRETURN";
	public static final String CATALOG = "CATALOG";
	public static final String OBSOLETE = "OBSOLETE";
	public static final String BUY = "BUY";
	public static final String RFQ = "RFQ";

	//Material status constants
	public static final String P1 = "P1";
	public static final String P2 = "P2";
	public static final String P3 = "P3";
	public static final String P4 = "P4";
	public static final String BS = "BS";
	public static final String SO = "SO";
	public static final String CC = "CC";

	public static final String UPLOAD_BULKUPLOAD = "bulkupload";

	//MSE constants
	public static final String CP_LIST = "CP_LIST";
	public static final String CP_MYLIST = "CP_MYLIST";
	public static final String CP_ALL = "CP_ALL";
	public static final String CUSTOMER_NUMBER = "customerNumber";
	public static final String MAN_MEL_FLAG = "mANOrMELFlag";
	public static final String FROM_DATE = "fromDate";
	public static final String TO_DATE = "toDate";
	public static final String ENDCUSTOMERID = "endCustomerID";
	public static final String MSE_REMOVED = "REMOVED";
	//Guest constants
	public static final String GUESTUSER = "GUESTUSER";
	public static final String ANONYMOUS_CHECKOUT = "anonymous_checkout";
	public static final String GUEST_CART_TYPE = "guestCartType";
	public static final String GUEST_BUY = "guestBuy";
	public static final String GUEST_QUOTE = "guestQuote";
	public static final String GUEST_BASE_STORE_UID = "bhge";
	public static final String DEFAULT_SESSION_SALESORG = "sessionSalesOrg";
	public static final String CategoryNotAuthorized = "401";
	public static final String ProductNotAuthorized = "400";
	public static final String ProductNotFoud = "402";

	private BhgeFacadesConstants()
	{
		//empty
	}
}
