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
package com.bhge.core.constants;

/**
 * Global class for all BhgeCore constants. You can add global constants for your extension into this class.
 */
public final class BhgeCoreConstants extends GeneratedBhgeCoreConstants
{
	public static final String EXTENSIONNAME = "bhgecore";

	private BhgeCoreConstants()
	{
		//empty
	}


	// implement here constants used by this extension
	public static final String QUOTE_CREATION_PROCESS = "quote-creation-process";
	public static final String QUOTE_CONVERSION_PROCESS = "quote-conversion-process";
	public static final String QUOTE_BUYER_PROCESS = "quote-buyer-process";
	public static final String QUOTE_SALES_REP_PROCESS = "quote-salesrep-process";
	public static final String QUOTE_USER_TYPE = "QUOTE_USER_TYPE";
	public static final String QUOTE_SELLER_APPROVER_PROCESS = "quote-seller-approval-process";
	public static final String QUOTE_TO_EXPIRE_SOON_EMAIL_PROCESS = "quote-to-expire-soon-email-process";
	public static final String QUOTE_EXPIRED_EMAIL_PROCESS = "quote-expired-email-process";
	public static final String QUOTE_POST_CANCELLATION_PROCESS = "quote-post-cancellation-process";

	public static final String DEFAULT_SESSION_SOLDTO = "sessionSoldTo";
	public static final String DEFAULT_SESSION_SOLDTO_NAME = "sessionSoldToName";
	public static final String DEFAULT_SESSION_SALESAREA = "sessionSalesArea";
	public static final String SESSION_BRANCH = "branch";
	public static final String SESSION_UNIT = "unit";
	public static final String SESSION_SALESAREA_BASESTORE_DATA = "baseStoreData";
	public static final String DEFAULT_SOLDTO_NAME = "defaultSoldToName";
	public static final String DEFAULT_SHIP_TO = "defaultShipToAddress";

	public static final String DELIVERY_OPTIONS = "deliveryOptions";
	public static final String DELIVERY_ACCOUNT = "deliveryAccount";
	public static final String CUSTOMER_PO = "customerPO";
	public static final String SHIP_TO_CONTACT_NAME = "shipToContactName";
	public static final String SHIP_TO_CONTACT_PHONE = "shipToContactPhone";
	public static final String END_CUSTOMER_PO = "endCustomerPo";
	public static final String NOTES = "notes";
	public static final String ORDER_CONFIRMATION = "orderConfirmation";
	public static final String SHIP_NOTIFICATION_EMAIL = "shipNotificationEmail";
	public static final String INVOICE_EMAIL = "invoiceEmail";
	public static final String ISGOVERNMENT = "isGovernment";
	public static final String IS_EXPORT = "isExport";
	public static final String PLAN_TO_EXPORT = "planToExport";
	public static final String EXPORT_ADDRESS = "exportAddress";
	public static final String ADD_ADDRESS = "addAddress";
	public static final String DELIVERY_POINT = "deliveryPoint";
	public static final String COMPANY_NAME = "companyName";
	public static final String IS_DEFAULT_PLANT_CHANGED = "isDefaultPlantChanged";

	public static final String STREET1 = "street1";
	public static final String STREET2 = "street2";
	public static final String CITY = "city";
	public static final String STATE = "state";
	public static final String COUNTRY = "country";
	public static final String PINCODE = "pincode";
	public static final String SOLDTOADDRESSSEASRCH = "soldToAddressSearch";
	public static final String DOCUMENT_RFC_ERROR_STATUS = "RFCDcoumentErrorStatus";
	public static final String DETAIL_ORDERS_PAGE = "detailOrders";

	/** Added for Excel upload page - shipping address **/
	public static final String SHIPTO_STREET1 = "street1";
	public static final String SHIPTO_STREET2 = "street2";
	public static final String SHIPTO_CITY = "city";
	public static final String SHIPTO_STATE = "state";
	public static final String SHIPTO_COUNTRY = "country";
	public static final String SHIPTO_PINCODE = "pincode";

	public static final String GE_REVIEW_NEEDED = "geReview";
	public static final String GE_REVIEW_REASON = "reason";
	/** **/

	/**
	 * Constant added for Order status
	 */

	public static final String PROCESSING = "Processing";
	public static final String ORDER_RECEIVED = "Order received";
	public static final String SHIPPED_AWAITNG_INVOICES = "Shipped, awaiting invoicing";
	public static final String SHIPPED_AWAITNG_INVOICES_LT10 = "Shipped & invoiced status for less than 10 days";
	public static final String SHIPPED_AWAITNG_INVOICES_GT10 = "Shipped & invoiced status for more than 10 days";
	public static final String ORDER_IN_PROGRESS = "Order In Progress";

	// ATP CALL RELATED CONSTANTS
	public static final String IM_ORDER_HEADER_IN = "IM_ORDER_HEADER_IN";
	public static final String DOC_TYPE = "DOC_TYPE";
	public static final String SALES_ORG = "SALES_ORG";
	public static final String DISTR_CHAN = "DISTR_CHAN";
	public static final String DIVISION = "DIVISION";
	public static final String ORDER_SCHEDULE_TABLE_ITEM_NUMBER = "ITM_NUMBER";
	public static final String ORDER_SCHEDULE_TABLE_REQ_DATE = "REQ_DATE";
	public static final String ORDER_SCHEDULE_TABLE_CONFIR_QTY = "CONFIR_QTY";
	public static final String T_ORDER_ITEMS_IN = "T_ORDER_ITEMS_IN";
	public static final String T_ORDER_PARTNERS = "T_ORDER_PARTNERS";
	public static final String PO_ITEM = "PO_ITM_NO";
	public static final String MATERIAL = "MATERIAL";
	public static final String REQ_QTY = "REQ_QTY";
	public static final String ATP_CHECK = "ATP_CHECK";
	public static final String PARTN_NUMB = "PARTN_NUMB";
	public static final String PARTN_ROLE = "PARTN_ROLE";
	public static final String PARTN_ROLE_VALUE = "AG";
	public static final String T_MESSAGETABLE = "T_MESSAGETABLE";
	public static final String T_MESSAGETABLE_TYPE = "TYPE";
	public static final String T_MESSAGETABLE_ID = "ID";
	public static final String T_MESSAGETABLE_NUMBER = "NUMBER";
	public static final String T_MESSAGETABLE_MESSAGE = "MESSAGE";
	public static final String ORDER_ITEMS_TABLE = "T_ORDER_ITEMS_OUT";
	public static final String ORDER_ITEMS_TABLE_NET_VALUE = "NET_VALUE1";
	public static final String ORDER_ITEMS_TABLE_ITEM_NUMBER = "ITM_NUMBER";
	public static final String ORDER_SCHEDULE_TABLE = "T_ORDER_SCHEDULE_EX";
	public static final String EX_RETURN_STRUCTURE = "EX_RETURN";
	public static final String EX_RETURN_STRUCTURE_TYPE = "TYPE";
	public static final String DOC_NUMBER = "DOC_NUMBER";
	public static final String COURIER = "COURIER";
	public static final String DELIV_ACC = "DELIV_ACC";
	public static final String PURCH_NO_C = "PURCH_NO_C";
	public static final String END_USER = "END_USER";
	public static final String SHIPPING_REMARKS = "SHIPPING_REMARKS";
	public static final String SHIP_EMAIL = "SHIP_EMAIL";
	public static final String SOA_EMAIL = "SOA_EMAIL";
	public static final String SAVE_FOR_FUTURE = "SAVE_FOR_FUTURE";
	public static final String INVOICE_EMAIL_HEADER = "INVOICE_EMAIL";
	public static final String GOVT_FLAG = "GOVT_FLAG";
	public static final String NUC_FLAG = "NUC_FLAG";
	public static final String SHP_CHRG = "SHP_CHRG";
	public static final String EXPORT_ADDRESS_HEADER = "EXPORT_ADDRESS";
	public static final String ISSHIPCOMPLETEORDER = "ISSHIPCOMPLETEORDER";
	public static final String SHIP_TO_NAME1 = "SHIP_TO_NAME1";
	public static final String SHIP_TO_NAME2 = "SHIP_TO_NAME2";
	public static final String SHIP_TO_PHONE = "SHIP_TO_PHONE";
	public static final String SHIP_TO_CONTACT = "SHIP_TO_CONTACT";
	public static final String T_PARTNER_TABLE = "T_PARTNER";
	public static final String Z_SORDERCREATE = "Z_SORDERCREATE";
	public static final String T_PARTNER = "T_PARTNER";
	public static final String T_PARTNER_PARTNER_NUMBER = "PARTNER_NUMBER";
	public static final String T_PARTNER_PARTNER_FUNCTION = "PARTNER_FUNCTION";
	public static final String T_PARTNER_STREET = "STREET";
	public static final String T_PARTNER_STREET2 = "STREET2";
	public static final String T_PARTNER_CITY = "CITY";
	public static final String T_PARTNER_STATE = "STATE";
	public static final String T_PARTNER_ZIP = "ZIP";
	public static final String T_ITEMS = "T_ITEMS";
	public static final String T_ITEMS_MATERIAL = "MATERIAL";
	public static final String T_ITEMS_TARGET_QTY = "TARGET_QTY";
	public static final String T_ITEMS_BLW_LINE_TEXT = "BLW_LINE_TEXT";

	public static final String ROOT_ID = "00000001";
	public static final String INST_ID = "00000001";
	public static final String OBJ_TYPE = "MARA";
	public static final String CLASS_TYPE = "300";
	public static final String ORDER_COFG_REF = "T_ORDER_CFGS_REF";
	public static final String ORDER_COFG_INST = "T_ORDER_CFGS_INST";
	public static final String ORDER_COFG_VALUE = "T_ORDER_CFGS_VALUE";
	public static final String POSEX_TEXT = "POSEX";
	public static final String CONFIG_ID_TEXT = "CONFIG_ID";
	public static final String ROOT_ID_TEXT = "ROOT_ID";
	public static final String INST_ID_TEXT = "INST_ID";
	public static final String OBJ_TYPE_TEXT = "OBJ_TYPE";
	public static final String CLASS_TYPE_TEXT = "CLASS_TYPE";
	public static final String OBJ_KEY_TEXT = "OBJ_KEY";
	public static final String CHARC_TEXT = "CHARC";
	public static final String VALUE_TEXT = "VALUE";
	public static final String ITM_NUMBER_TEXT = "ITM_NUMBER";
	public static final String T_VC_TEXT = "T_VC";
	public static final String ATP_CHECK_DATA = "KP";
	public static final String ITM_NUMBER = "ITM_NUMBER";
	public static final String SAP_SALES_ORDER_SOURCE = "IM_SALES_ORDER";
	public static final String SAP_INVOICE_NUMBER_SOURCE = "IM_INVOICE_NUMBER";
	public static final String SAP_SOA_NUMBER_SOURCE = "IM_SOA_NUMBER";
	public static final String SAP_SOA_IM_IDENTIFIER = "IM_IDENTIFIER";
	public static final String SAP_DELIVERY_NOTE_IDENTIFIER = "IM_DELIVERY_NUMBER";
	public static final String SAP_SOA_IM_IDENTIFIER_VALUE = "X";
	public static final String SAP_PO_IDENTIFIER = "IM_PO_NUMBER";
	public static final String SAP_PO_IDENTIFIER_VALUE = "P";
	public static final String SAP_CUSTOMER_ACCOUNT_VALUE = "CUSTOMER";


	public static final String ERROR_CRITICALITY_HIGH = "HIGH";
	public static final String ERROR_CRITICALITY_LOW = "LOW";
	public static final String SHIPPING_CARRIER_METHOD_PREPAY = "prepay_add";
	public static final String SHIPPING_CARRIER_METHOD_COLLECT = "collect";
	public static final String IS_COMPLETE_WITH_DIFF_PLANT = "isShipCompleteWithDiffPlantSelected";
	public static final String DIFF_WAREHOUSE_NO_FLAG = "multipleWarehouseNoFlag";
	public static final String COMP_MARTERIAL = "COMP_MATERIAL";
	public static final String OBJECT_DESC = "OBJ_DESC";
	public static final String COMP_QTY = "COMP_QTY";
	public static final String COMP_UOM = "COMP_UOM";
	public static final String EXPLOSION_LEVEL = "BOM_LEVEL";
	public static final String ITEM_NUMBER = "ITEM_NO";
	public static final String LIST_PRICE = "PRICE";
	public static final String LEAD_TIME = "LEAD_TIME";
	public static final String COUNTRY_OF_ORIGIN = "COO_MAT";
	public static final String COUNTRY_NAME = "COUNTRY";
	public static final String BOM_MATERIAL = "BOM_MATERIAL";
	/** R1.1 Enhancement **/
	public static final String SHIP_DEL_POINT = "DELIV_POINT";
	public static final String SHIP_COMPANY_NAME = "COMP_NAME";
	public static final String SHIP_COUNTRY_NAME = "COUNTRY";
	public static final String NUC_OPPTY_FLAG = "NUC_OPPTY_FLAG";
	public static final String DISC_CODE = "DISC_CODE";

	public static final String UPLOAD_FORM_DATA = "geBulkUploadForm";
	public static final String UPLOAD_FORM_INPUT_VALUES = "inputBulkUploadValues";
	public static final String ADDED_CONFIG_PART = "addedConfigPart";
	public static final String UPLOAD_VALIDATED_DATA = "geBulkUploadValidatedData";
	public static final String EXPRESS_ORDER_UPLOAD_FORM_DATA = "geExpressOrderUploadForm";


	/** R2.0 Enhancement **/
	public static final String DEFAULT_DATE_VALUE = "0000-00-00";
	public static final String ORDER_ATTACHMENT_FILE_DATA = "FILE_DATA";
	public static final String ORDER_ATTACHMENT_FILE_NAME = "FILE_NAME";
	public static final String ORDER_ATTACHMENT_FILE_TYPE = "FILE_TYPE";
	public static final String ORDER_ATTACHMENT_IMPORT_TABLE = "INPUT";
	public static final String ORDER_ATTACHMENT_EXPORT_TABLE = "OUTPUT";
	//public static final String ZGET_FILE_FROM_HYBRIS = "ZGET_FILE_FROM_HYBRIS";
	public static final String WORD_FILE_DOC = "doc";
	public static final String WORD_FILE_DOCX = "docx";
	public static final String SPREADSHEET_FILE_XLS = "xls";
	public static final String SPREADSHEET_FILE_XLSX = "xlsx";
	public static final String PDF_FILE = "pdf";
	public static final String IMAGE_JPG = "jpg";
	public static final String IMAGE_JPEG = "jpeg";
	public static final String ORDER_ATTACHMENT_EXPORT_MSGTXT = "MESSAGE_TXT";
	public static final String ORDER_ATTACHMENT_EXPORT_MSGTYPE = "MESSAGE_TYP";


	public static final String HEADER_REQUESTED_DELIVERY_DATE = "REQUEST_DEL_DATE";
	public static final String ITEM_REQUESTED_DELIVERY_DATE = "SERV_DATE";
	public static final String CURRENCY_DATA = "CURRENCY";
	public static final String NO_RDD = "NO_RDD";
	public static final String PLANT = "PLANT";

	/* Price and Availability Check - ATP CALL RELATED CONSTANTS - BEGINS */
	public static final String IS_GLOBAL_JCOSTRUCTURE = "IS_GLOBAL";
	public static final String T_ET_RESULT_EXT = "ET_RESULT_EXT";
	public static final String T_IT_HEAD = "IT_HEAD";
	public static final String T_IT_ITEM = "IT_ITEM";
	public static final String T_IT_ITEM_VARCOND = "VARCOND";
	public static final String T_ET_RETURN = "ET_RETURN";
	public static final String T_ET_WMDVEX = "ET_WMDVEX";
	public static final String T_ORDER_CFGS_VALUE = "ORDER_CFGS_VALUE";
	public static final String T_ET_WMDVSX = "ET_WMDVSX";
	public static final String T_ET_WERKS = "WERKS";
	public static final String T_ET_RESULT_EXT_ITEM = "ITEM";
	public static final String T_ET_RESULT_EXT_ITEM_COND = "COND";
	public static final String T_ET_MAT_WERK_QTY = "ET_MAT_WERK_QTY";
	public static final String AVAIL_LINE_TEXT = "AVAIL_LINE_TEXT";
	public static final String T_IT_PARTNER = "IT_PARTNER";
	public static final String T_VC = "T_VC";
	public static final String T_MULTI_FLAG = "MULTILEVEL_FLG";
	public static final String T_BOM = "T_BOM";
	public static final String IM_MATERIAL_IN = "IM_MATERIAL_IN";

	public static final String DEFAULT_LOCALE = "EN";
	public static final String LANGU = "LANGU";
	public static final String I_FLAG_PA = "FLAG_PA";
	public static final String PARVW = "PARVW";
	public static final String LAND1 = "LAND1";
	public static final String REGIO = "REGIO";
	public static final String KUNNR = "KUNNR";
	public static final String COND_TYPE_ZK09 = "ZK09";
	public static final String IS_GLOBAL_AUART = "AUART";
	public static final String IS_GLOBAL_VKORG = "VKORG";
	public static final String IS_GLOBAL_VTWEG = "VTWEG";
	public static final String IS_GLOBAL_SPART = "SPART";
	public static final String IS_GLOBAL_PRSDT = "PRSDT";
	public static final String IT_HEAD_KUNNR = "KUNNR";
	public static final String IT_HEAD_SPRAS = "SPRAS";
	public static final String IT_HEAD_VBELN = "VBELN";
	public static final String IT_ITEM_KPOSN = "KPOSN";
	public static final String VC_ITEM = "ITEM";
	public static final String IT_ITEM_MATNR = "MATNR";
	public static final String IT_ITEM_MGAME = "MGAME";
	public static final String IT_ITEM_VRKME = "VRKME";
	public static final String IT_ITEM_PROD_CAT_FLAG = "PROD_CAT_FLAG";
	public static final String IT_ITEM_VARCOND = "VARCOND";
	public static final String IT_ITEM_VARCOND_VARCOND = "VARCOND";
	public static final String IT_ITEM_VARCOND_FACTOR = "FACTOR";
	public static final String IT_ITEM_WERKS = "WERKS";
	public static final String IT_ITEM_AVBT_CHECK = "AVBT_CHECK";
	public static final String IT_HEAD_VBELN_VALUE = "$000000001";
	public static final String IT_ITEM_KPOSN_VALUE = "100000";
	public static final String ET_WMDVSX_REQ_DATE = "REQ_DATE";
	public static final String ET_WMDVSX_REQ_QTY = "REQ_QTY";
	public static final String ET_WMDVSX_DELKZ = "DELKZ";
	public static final String ET_WMDVSX_YLINE = "YLINE";
	public static final String ET_WMDVSX_MATNR = "MATNR";
	public static final String ET_RESULT_EXT_ITEM_COND_KSCHL = "KSCHL";
	public static final String ET_RESULT_EXT_ITEM_COND_KBETR = "KBETR";
	public static final String ET_RESULT_EXT_ITEM_COND_KWERT = "KWERT";
	public static final String VC_VARCOND = "VARCOND";
	public static final String VC_VCTEXT = "VCTEXT";
	public static final String T_VC_COMPONENT_PRICE = "VC_COMPONENT_PRICE";
	public static final String VC_COND_VALUE = "COND_VALUE";
	public static final String VC_CONDVALUE = "CONDVALUE";
	public static final String VC_CURRENCY = "CURRENCY";
	public static final String GR_PRICING = "GR_PRICING";
	public static final String IT_ITEM_WERKS_LIST = "WERKS_LIST";
	public static final String ET_WMDVEX_PLANT = "PLANT";
	public static final String ET_WMDVEX_COM_DATE = "COM_DATE";
	public static final String ET_WMDVEX_COM_QTY = "COM_QTY";
	public static final String ET_WMDVEX_MATNR = "MATNR";
	public static final String ET_WMDVEX_DEFAULT_PLANT = "DEFAULT";
	public static final String T_MESSAGETABLE_CODE = "CODE";
	public static final String T_MESSAGETABLE_LOG_MSGNO = "LOG_MSG_NO";
	public static final String ET_MAT_WERK_QTY_MATNR = "MATNR";
	public static final String ET_MAT_WERK_QTY_WERKS = "WERKS";
	public static final String ET_MAT_WERK_QTY_QTY = "QTY";
	public static final String ET_RESULT_EXT_ITEM_COND_WAERS = "WAERS";

	public static final String FLAG_A = "A";
	public static final String FLAG_P = "P";
	public static final String FLAG_PA = "PA";
	public static final String FLAG_VC = "VC";
	public static final String FLAG_VL = "VL";
	public static final String FLAG_LN = "LN";
	public static final String FLAG_C = "C";
	public static final String PROD_CAT_FLAG_FL = "FL";
	public static final String PROD_CAT_FLAG_IT = "IT";
	public static final String PLANT_SEPERATOR = "-";
	public static final String END_USER_ERROR_CODE = "EU01";

	public static final String CART_TYPE_FILM = "FILM";
	public static final String CART_TYPE_NONFILM = "NONFILM";
	public static final String CART_TYPE_HYBRID = "HYBRID";
	public static final String ZFLM_TYPE = "ZFLM";
	public static final String ZDEM_TYPE = "ZDEM";
	public static final String ZOR_TYPE = "ZOR";
	public static final String NON_SELLABLE_PROD_CODES = "nonsellableProductCodes";
	public static final String PLANT_FOR_BOM = "plantForBOM";
	/* Price and Availability Check - ATP CALL RELATED CONSTANTS - ENDS */


	/* Order Tracking - ATP Call Constants - BEGINS */
	public static final String PAST_ORDER_PAGE = "pastOrderHistory";
	public static final String CURRENT_ORDER_PAGE = "currentOrderHistory";
	public static final String RECENT_ORDERS_PAGE = "recentOrders";

	public static final String T_CUST_NO = "CUST_NO";
	public static final String T_MT_SALES_ORDER_HEADER = "MT_SALES_ORDER_HEADER";
	public static final String T_MT_SALES_ORDER_ITEM = "MT_SALES_ORDER_ITEM";
	public static final String T_MT_SALES_ORDER_DELIVERY = "MT_SALES_ORDER_DELIVERY";

	public static final String CUST_NO_KUNNR = "KUNNR";
	public static final String CP_TYPE = "CP_TYPE";
	public static final String F_BSTKD = "BSTKD";
	public static final String F_FROM_DATE = "FROM_DATE";
	public static final String F_TO_DATE = "TO_DATE";
	public static final String F_MATNR = "MATNR";
	public static final String F_VBELN = "VBELN";
	public static final String F_AUART = "AUART";

	public static final String ERROR = "ERROR";
	public static final String GE_SALES_ORDER = "GE_SALES_ORDER";
	public static final String DATE_ORDER_PLACED = "DATE_ORDER_PLACED";
	public static final String PO_DATE = "PO_DATE";
	public static final String ORDER_UPDATED_DATE = "ORDER_UPDATED_DATE";
	public static final String SOLD_TO = "SOLD_TO";
	public static final String VBELN = "VBELN";
	public static final String ITEM_NO = "ITEM_NO";
	public static final String PROD_HEIRARCHY = "PROD_H";
	public static final String MAT_NO = "MAT_NO";
	public static final String MAT_DESC = "MAT_DESC";
	public static final String ITEM_CUSTOMER_PO = "CUSTOMER_PO";
	public static final String QUAN = "QUAN";
	public static final String SHIP_STATUS = "SHIP_STATUS";
	public static final String SHIP_DATE = "EXP_SHIP_DATE";
	public static final String SALES_ORDER_ITEM_COURIER = "COURIER";
	public static final String TRACKING_NO = "TRACKING_NO";
	public static final String SHIPPING_NAME = "SHIPPING_NAME";
	public static final String SHIPPING_DESTINATION = "SHIPPING_DESTINATION";
	public static final String CUSTOMER_INVOICE = "CUSTOMER_INVOICE";
	public static final String NOTIFICATION_FLAG = "NOTIFICATION_FLAG";

	public static final String UOM_FIELD = "UOM";

	public static final String SHIPPING_METHOD = "SHIPPING_METHOD";
	public static final String REQ_SHIP_DATE = "REQ_SHIP_DATE";
	public static final String SHIPPING_ADDRESS = "SHIPPING_ADDRESS";
	public static final String NET_PRICE = "NET_PRICE";

	public static final String T_ORDERLIST = "T_ORDER";
	public static final String T_INVOICELIST = "T_INVOICELIST";
	public static final String T_CUSTOM_INVOICE = "T_CUSTOM_INVOICE";
	public static final String T_DELIVERY = "T_DELIVERY";
	public static final String T_PO = "T_PO";

	public static final String SOA_ATTACHMENT_VBELN = "VBELN";
	public static final String SOA_EX_PDF_DATA = "EX_PDF_DATA";

	public static final String SOA_FILENAME = "SOA";
	public static final String INV_FILENAME = "Invoice";
	public static final String CUSTOM_INV_FILENAME = "Custom_Invoice";
	public static final String DEL_NOTE_FILENAME = "Delivery_Note";
	public static final String SOA_IDENTIFIER_FLAG = "FLAG";
	public static final String SOA_FLAG_VALUE = "X";
	public static final String PO_FILENAME = "Purchase_Order";
	/* Order Tracking - ATP Call Constants - ENDS */


	/* Promotion and Voucher */
	public static final String T_PRICE = "T_PRICE";
	public static final String COND_TYPE = "COND_TYPE";
	public static final String COND_VALUE = "COND_VALUE";
	public static final String COND_CURR = "COND_CURR";
	public static final String DISC_REASON = "DISC_REASON";
	public static final String VOUCHER_CODE = "VOUCHER_CODE";
	public static final String VOUCHER_TYPE = "ZDOA";
	public static final String SDS_TYPE = "ZDSH";
	public static final String POSNR = "POSNR";


	public static final String DISC_CODE_PERCENTAGE_ON_LP = "DFP";
	public static final String DISC_CODE_FIXED_PRICE_ON_PRODUCT_LP = "DFV";
	public static final String DISC_CODE_FIXED_VALUE_ON_LP = "DOV";

	public static final String DISC_CODE_PERCENTAGE_ON_YP = "DPY";
	public static final String DISC_CODE_FIXED_PRICE_ON_PRODUCT_YP = "DVY";
	public static final String DISC_CODE_FIXED_VALUE_ON_YP = "DVP";

	public static final String ACCOUNT_GROUP = "0001";
	public static final String ECOMMFLAG_NE = "NE";

	//Exception Mail Task
	public static final String DEFAULT_SUPPORT_EMAIL = "supportteam.emailaddress";
	public static final String SEMI_COLON = ";";
	public static final String EXCEPTIONMAIL = "gedge.exception.email";

	//Content Catalog
	public static final String CONTENT_CATALOG = "bhgeContentCatalog";

	/** Added for Shipping Options Page **/
	public static final String SHIP_STREET1 = "shipStreet1";
	public static final String SHIP_STREET2 = "shipStreet2";
	public static final String SHIP_CITY = "shipCity";
	public static final String SHIP_STATE = "shipState";
	public static final String SHIP_COUNTRY = "shipCountry";
	public static final String SHIP_PINCODE = "shipPincode";
	public static final String SHIP_DELIVERYPOINT = "shipDeliveryPointOT";

	public static final String ENDUSER_NUMBER = "endUserNumber";

	public static final String HYPHEN = "-";

	public static final String PIPELINE = "|";

	public static final String FILM = "ITFILM";
	public static final String NON_FILM = "IT";
	public static final String MS = "MS";
	public static final String FPT = "FPT";
	public static final String FILM_PRICE_TYPE = "ZUMU";

	public static final String EMPTY_STRING = "";
	public static final String SPLIT_DELIMITER = "~~";

	public static final String CHECKOUT_STEP_CART = "CHECKOUT_STEP_CART";
	public static final String CHECKOUT_STEP_SHIPPING = "CHECKOUT_STEP_SHIPPING";
	public static final String CHECKOUT_STEP_COMPLIANCE = "CHECKOUT_STEP_COMPLIANCE";
	public static final String CHECKOUT_STEP_NOTIFICATION = "CHECKOUT_STEP_NOTIFICATION";
	public static final String CHECKOUT_STEP_REVIEW = "CHECKOUT_STEP_REVIEW";

	public static final String ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR = "000";
	// PLP list grid constants
	public static final String GRID_TEXT = "grid";
	public static final String LIST_TEXT = "list";
	public static final String PRODUCTGRID_TEXT = "productGrid";
	public static final String PRODUCTLIST_TEXT = "productList";

	public static final String REQ_SHP_DT = "REQ_SHP_DT";
	public static final String ACT_SHP_DT = "ACT_SHP_DT";
	public static final String GE_PROM_DT = "GE_PROM_DT";
	public static final String INCOTERM = "INCOTERM";
	public static final String BLK_ID = "BLK_ID";
	public static final String BLK_TXT = "BLK_TXT";
	public static final String ORDER_STAT = "ORDER_STAT";

	public static final String SALES_AREA = "SALES_AREA";
	public static final String PLAN_SETTL_DATE = "PLAN_SETTL_DATE";
	public static final String NOTIF_PROM_DT = "NOTIF_PROM_DT";
	public static final String OLD_AUTH_AMT = "OLD_AUTH_AMT";
	public static final String OLD_AUTH_DATE = "OLD_AUTH_DATE";
	public static final String NOTIF_AUTH_AMT = "NOTIF_AUTH_AMT";
	public static final String NOTIF_NET_PRICE = "NOTIF_NET_PRICE";


	public static final String Hybris_Status_E1 = "E1";
	public static final String Hybris_Status_E3 = "E3";
	public static final String Hybris_Status_E5 = "E5";
	public static final String Hybris_Status_EX = "EX";


	public static final String CUST_NUM = "CUST_NUM";
	public static final String DISTR_CHNL = "DISTR_CHNL";
	public static final String MATERIAL_NUM = "MATERIAL_NUM";
	public static final String SERIAL_NUM = "SERIAL_NUM";
	public static final String LANGUAGE = "LANGUAGE";
	//public static final String CURRENCY = "CURRENCY"; // removing duplicate
	public static final String FLAG = "FLAG";

	//RMA Offering Table
	public static final String PartNumber = "MATNR";
	public static final String PLANNING_PLANT = "IWERK";
	public static final String DROP_SHIP_PLANT = "ZZWERKS";
	public static final String ALTERNATE_PLANT = "ZZIWERK";
	public static final String SERVICE_OFFERING_RMAFORM = "ZSRV_OFF";

	//RMA Pricing Table
	public static final String OFFERING_PLANT = "WERKS";
	public static final String OFFERING_CURRENCY = "WAERS";
	public static final String UNIT_PRICE = "KBETR";
	public static final String DISCOUNT_PRICE = "KBETR_D";
	//RMA Warranty Table
	// public static final String PART_SERIAL_NUMBER = "SERNR"; // Duplicate code
	public static final String EQUIP_NUMBER = "EQUNR";
	public static final String WARRANTY_DATE = "WARRANTY_DATE";
	public static final String WARRANTY_TXT = "WARRANTY_TXT";

	//RMA Description Table

	public static final String SERVICE_OFFERING_DESCRIPTION = "DESCRIPTION";
	public static final String SERVICE_OFFERING_LONGDESC = "LONG_OFF_DESC";
	public static final String SERVICE_OFFERING_SHORTDESC = "SHORT_OFF_DESC";
	public static final String CATEGORY = "SRV_OFF_CAT";

	public static final String ET_OFFERING_DATA = "ET_OFFERING_DATA";
	public static final String ET_OFFERING_DESCR = "ET_OFFERING_DESCR";
	public static final String ET_WARRANTY_DATA = "ET_WARRANTY_DATA";
	public static final String ET_MAT_ACCESSORIES = "ET_MAT_ACCESSORIES";
	public static final String ET_PRICING_DATA = "ET_PRICING_DATA";

	//RMA SAP Integration
	public static final String RMA_ORDER_CREATE_FLAG = "FLAG";
	public static final String RMA_HEADERDATA_TABLE = "RMA_HEADERDATA";
	public static final String RMA_ITEMDATA_TABLE = "RMA_ITEMDATA";
	public static final String IT_MAT_OFF_INPUT_TABLE = "IT_MAT_OFF_INPUT";
	public static final String IT_MAT_OFF = "IT_MAT_OFF";
	public static final String NOTIF_TYPE = "NOTIF_TYPE";
	public static final String USTAXEXEMPT_ID = "USTAXEXEMPT_ID";
	public static final String CUSTOMER = "CUSTOMER";
	public static final String DIST_CHANNEL = "DIST_CHANNEL";
	public static final String SALES_AREA_ORG = "SALES_AREA_ORG";
	public static final String SHIPCONTACT1NAME_ORDER_CREATE = "SHIPCONTACT1NAME";
	public static final String SHIPCONTACT2NAME_ORDER_CREATE = "SHIPCONTACT2NAME";
	public static final String PRIORITY_REQ = "PRIORITY_REQ";
	public static final String ISGOVERNMENT_ORDER_CREATE = "ISGOVERNMENT";
	public static final String CARRIERNAME_ORDER_CREATE = "CARRIERNAME";
	public static final String SHIPPING_METHOD_ORDER_CREATE = "SHIPPING_METHOD";
	public static final String USERCOMMENTS_ORDER_CREATE = "USERCOMMENTS";
	public static final String DELIVERY_PT_ORDER_CREATE = "DELIVERY_PT";
	public static final String DELIVERY_ACC_NUM_ORDER_CREATE = "DELIVERY_ACC_NUM";
	public static final String SHIP_TO_ADDR_ORDER_CREATE = "SHIP_TO_ADDR";
	public static final String RETUN_TO_SITE_ORDER_CREATE = "RETUN_TO_SITE";
	public static final String END_CUST_REF_NUM_ORDER_CREATE = "END_CUST_REF_NUM";
	public static final String END_CUST_DETAILS_ORDER_CREATE = "END_CUST_DETAILS";
	public static final String EXPORT_ADD_TEXT_ORDER_CREATE = "EXPORT_ADD_TEXT";
	public static final String SHIPPING_MAIL_ORDER_CREATE = "SHIPPING_MAIL";
	public static final String INVOICE_MAIL_ORDER_CREATE = "INVOICE_MAIL";
	public static final String ORDER_CONF_MAIL_ORDER_CREATE = "ORDER_CONF_MAIL";
	public static final String PURCHASE_ORD_NUM_ORDER_CREATE = "PURCHASE_ORD_NUM";
	public static final String ALTERNATE_CONT_MAIL_ORDER_CREATE = "ALTERNATE_CONT_MAIL";
	public static final String IS_NUCLEAR_ORDER_CREATE = "NUCLEAR_ORDER";
	public static final String EXPORT_ORDER_ORDER_CREATE = "EXPORT_ORDER";
	public static final String IS_GOV_BUYER_ORDER_CREATE = "IS_GOV_BUYER";
	public static final String HEADER_DELIVERY_DATE_ORDER_CREATE = "HEADER_DELIVERY_DATE";
	public static final String RMA_CREATE_CSR_FLAG = "CSR_FLAG";
	public static final String RMA_CREATE_CSR_HELP_TEXT = "CSR_HELP_TEXT";
	public static final String RMA_CREATE_TECHNICAL_FLAG = "TECHNICAL_FLAG";
	//public static final String SALES_AREA = "SALES_AREA";
	public static final String SHIPCONTACT1NAME = "SHIPCONTACT1NAME";
	public static final String REPAIR_PLANT = "REPAIR_PLANT";
	public static final String SHIPCONTACT1NUM = "SHIPCONTACT1NUM";
	public static final String SHIP_TO_PARTY = "SHIP_TO_PARTY";
	public static final String SHIPCONTACT2NAME = "SHIPCONTACT2NAME";
	public static final String BILL_TO_PARTY = "BILL_TO_PARTY";
	public static final String SHIPCONTACT2NUM = "SHIPCONTACT2NUM";
	public static final String ISGOVERNMENTRMA = "ISGOVERNMENT";
	public static final String CARRIERNAME = "CARRIERNAME";
	//public static final String SHIPPING_METHOD = "SHIPPING_METHOD";
	public static final String USERCOMMENTS = "USERCOMMENTS";
	//public static final String MATERIAL = "MATERIAL";
	public static final String QUANTITY = "QUANTITY";
	public static final String EQUIPMENT_NUM = "EQUIPMENT_NUM";
	//public static final String SERIAL_NUM = "SERIAL_NUM";
	public static final String OFFERINGS = "OFFERINGS";
	public static final String PRODUCT_DETAILS = "PRODUCT_DETAILS";
	public static final String PROBLEM_DESCRIPTION = "PROBLEM_DESCRIPTION";
	public static final String LINE_NOTES = "LINE_NOTES";
	public static final String OFFERING_TEXT = "OFFERING_TEXT";
	public static final String ISACCESSORY_PRESENT = "ISACCESSORY_PRESENT";
	public static final String ACCESSORIES_NOTES = "ACCESSORIES_NOTES";
	public static final String PRICE_RANGE = "PRICE_RANGE";
	public static final String CHARGES_EXPEDITE = "CHARGES_EXPEDITE";
	public static final String LINE_ITEM = "LINE_ITEM";
	public static final String TIL_DETAILS_RMA_ORDER_CREATE = "TIL_DETAILS";
	public static final String OFFERING1_RMA_ORDER_CREATE = "OFFERING1";
	public static final String OFFERING2_RMA_ORDER_CREATE = "OFFERING2";
	public static final String OFFERING3_RMA_ORDER_CREATE = "OFFERING3";
	public static final String OFFERING4_RMA_ORDER_CREATE = "OFFERING4";
	public static final String OFFERING5_RMA_ORDER_CREATE = "OFFERING5";
	public static final String HAZARDOUS_PART_ORDER_CREATE = "HAZARDOUS_PART";
	public static final String SIMILAR_PART_RMA_ORDER_CREATE = "SIMILAR_PART";
	public static final String MFG_YEAR_RMA_ORDER_CREATE = "MFG_YEAR";
	public static final String SERIAL_NUM_RMA_ORDER_CREATE = "SERIAL_NUM";
	public static final String MATERIAL_NUM_RMA_ORDER_CREATE = "MATERIAL";
	public static final String UNDER_WARRANTY_RMA_ORDER_CREATE = "WARRANTY_CLAIM_INFO";


	// public static final String RMA_NUMBER = "RMA_NUMBER";
	public static final String OUTPUT = "OUTPUT";
	public static final String ET_ERROR_REC = "ET_ERROR_REC";
	public static final String MATNR = "MATNR";
	public static final String SERNR = "SERNR";
	public static final String WERKS = "WERKS";
	public static final String ZSRV_OFF = "ZSRV_OFF";
	//public static final String MESSAGE = "MESSAGE";
	public static final String RMA_FORM_RMA_NUMBER = "RMA_NUMBER";






	//RMA Status
	public static final String RMA_NUMBER = "RMA_NUM";
	//public static final String RMA_NUMBER = "RMA_NUMBER";

	public static final String CP_FLAG = "CP_FLAG";
	public static final String ET_HEADER_STATUS = "ET_HEADER_STATUS";
	public static final String PURCHASE_ORDER_NUMBER = "PO_NUM";
	public static final String PURCHASE_ORDER_DATE = "PO_DATE";
	public static final String RMA_STATUS = "RMA_STATUS";
	public static final String RETURN_SITE = "RETURN_SITE";
	public static final String CUSTOMER_ACCT = "CUSTOMER_ACCOUNT";
	public static final String ET_ITEM_STATUS = "ET_ITEM_STATUS";
	public static final String LINE_ITEM_NUMBER = "LINE_NO";
	public static final String PART_NUMBER = "PART_NUM";
	public static final String PART_DESCRIPTION = "PART_DESCR";
	public static final String NET_PRICE_ITEM = "NET_PRICE";
	public static final String CURRENCY = "CURRENCY";
	public static final String SHIP_TO_ADDRESS = "SHIP_TO";
	public static final String DELIVERY_NUMBER = "OUTBOUND_DEL_NR";
	public static final String ACTUAL_SHIP_DATE = "ACTUAL_SHIP_DT";
	public static final String CARRIER_DETAILS = "CARRIER";
	public static final String SERVICE_OFFERING = "SERVICE_OFF";
	public static final String PART_SERIAL_NUMBER = "SERIAL_NUM";
	public static final String CUST_NUMBER = "CUST_NUM";
	public static final String PROMISED_SHIP_DATE = "PROM_SHIP_DT";
	public static final String CUSTOMER_TABLE = "ET_CUST_NUM";
	public static final String CUSTOMER_NUM = "CUST_NUM";
	public static final String QUANTITY_RMASTATUS = "QUANTITY_RMASTATUS";
	public static final String NAME = "NAME1";
	public static final String SALES_ORDER = "SALES_ORDER";
	public static final String BLOCK_ID = "BLK_ID";
	public static final String BLOCK_TEXT = "BLK_TXT";
	public static final String RMA_CREATED_DATE = "RMA_CREATED_DATE";
	public static final String LAST_UPDATED_DATE = "LAST_UPDATED_DATE";
	public static final String INCOTERMS = "INCOTERMS";
	public static final String PRODUCT_HIERARCHY = "PRODUCT_HIERARCHY";
	public static final String REPAIR_REASON = "REPAIR_REASON";
	public static final String ENDUSER = "ENDUSER";
	public static final String ET_MESSAGETABLE = "ET_MESSAGETABLE";
	public static final String TYPE = "TYPE";
	public static final String ID = "ID";
	public static final String NUMBER = "NUMBER";
	public static final String MESSAGE = "MESSAGE";
	public static final String LOG_NO = "LOG_NO";
	public static final String LOG_MSG_NO = "LOG_MSG_NO";
	public static final String MESSAGE_V1 = "MESSAGE_V1";
	public static final String MESSAGE_V2 = "MESSAGE_V2";
	public static final String MESSAGE_V3 = "MESSAGE_V3";
	public static final String MESSAGE_V4 = "MESSAGE_V4";
	public static final String PARAMETER = "PARAMETER";
	public static final String ROW = "ROW";
	public static final String FIELD = "FIELD";
	public static final String SYSTEM = "SYSTEM";
	public static final String NOTIF_NO = "NOTIF_NO";
	public static final String EX_NOTIF_ATTC = "EX_NOTIF_ATTC";
	public static final String FILE_NAME = "FILE_NAME";
	public static final String FILE_TYPE = "FILE_TYPE";
	public static final String HEX_DATA = "HEX_DATA";
	public static final String VKORG = "VKORG";
	public static final String VTWEG = "VTWEG";
	public static final String SPART = "SPART";
	public static final String ZTERM = "ZTERM";
	public static final String MNF_YEAR = "MNF_YEAR";
	public static final String ACCESSORIES_LIST = "ACCESSORIES_LIST";
	public static final String SERVICE_NOTES = "SERVICE_NOTES";
	public static final String WARRANTY_CLAIM_INFO = "WARRANTY_CLAIM_INFO";
	public static final String ET_DELIVERY = "ET_DELIVERY";
	public static final String ORDER_LINE = "ORDER_LINE";
	public static final String DELIVERY_LINE = "DELIVERY_LINE";
	public static final String CARRIER = "CARRIER";
	public static final String ORDER = "ORDER";
	public static final String DELIVERY = "DELIVERY";
	public static final String STATUS = "STATUS";
	public static final String IM_FLAG = "IM_FLAG";
	public static final String PO_NUMBER = "PO_NUMBER";
	//public static final String ZHYB_RMA_ATTACHMENTS = "ZHYB_RMA_ATTACHMENTS";
	public static final String UPLOAD_RMA_NUMBER = "RMA_NUMBER";
	//RMA Status

	//RMA PLP/PDP constants
	public static final String SELL = "SELL";
	public static final String RETURN = "RETURN";
	public static final String SELLANDRETURN = "SELLANDRETURN";
	public static final String CATALOG = "CATALOG";
	public static final String OBSOLETE = "OBSOLETE";
	public static final String BUY = "BUY";
	public static final String RMA = "RMA";
	public static final String RFQ = "RFQ";

	//Buy order New Attributes
	public static final String BUYORDER_GOVT_BUYER = "GOVT_BUYER";
	public static final String BUYORDER_ALT_CONT_NUM = "ALT_CONT_NUM";
	public static final String BUYORDER_ALT_CONT_NAME = "ALT_CONT_NAME";
	public static final String BUYORDER_ALT_CONT_EMAIL = "ALT_CONT_EMAIL";
	public static final String BUYORDER_ENDUSER_NEW_DTL = "ENDUSER_NEW_DTL";
	public static final String BUYORDER_CSR_HELP = "CSR_HELP";
	public static final String BUYORDER_ENDUSER_PO = "ENDUSER_PO";

	//RMA Offering Variable
	public static final String RMA_OFFER_CURRENCY = "CURRENCY";











	//My Site Equipment Variables
	public static final String ET_MYEQUIPMENT = "ET_MYEQUIPMENT";
	public static final String ET_EQUIPMENT = "ET_EQUIPMENT";
	public static final String ET_DETAIL = "ET_DETAIL";

	public static final String MSE_TYPE = "CP_FLAG";
	public static final String MSE_CP_DETAIL = "CP_DETAIL";
	public static final String MSE_CUSTOMER_ACCOUNT = "CUSTOMER";
	public static final String MSE_MEL_FLAG = "MEL_FLAG";

	public static final String MSE_PART_NUMBER = "PART_NUMBER";
	public static final String MSE_PART_NUM = "PART_NUM";
	public static final String MSE_SERIAL_NUMBER = "SERIAL_NUMBER";
	public static final String MSE_SER_NUM = "SER_NUM";
	public static final String MSE_PART_NAME = "PART_NAME";
	public static final String MSE_STATUS = "STATUS";
	public static final String MSE_ASSET_NUMBER = "ASSET_NUMBER";
	public static final String MSE_LOCATION = "LOCATION";
	public static final String MSE_LAST_SERVICE_DATE = "LAST_SERVICE_DATE";
	public static final String MSE_HTS_CODE = "HTS_CODE";
	public static final String MSE_SERVICE_INTERVAL = "SERVICE_INTERVAL";
	public static final String MSE_ADDITIONAL_INFO = "ADDITIONAL_INFO";
	public static final String MSE_END_CUSTOMER = "END_CUSTOMER";
	public static final String MSE_END_CUSTOMER_NUM = "END_CUST_NUM";
	public static final String MSE_END_CUSTOMER_NAME = "END_CUSTOMER_NAME";
	public static final String MSE_NXT_SERVICE_DUE = "NXT_SERVICE_DUE";
	//public static final String MSE_DOCUMENT = "DOCUMENT";
	public static final String MANEL_FLAG = "MANEL_FLAG";
	public static final String OWNER_MISMATCH_FLAG = "CUST_MISMATCH_FLAG";
	public static final String MSE_PRODUCT_HIERARCHY = "PRODH";
	public static final String MSE_FAV_FLAG = "FAV_FLAG";
	public static final String MSE_FAV_FLAG_VALUE = "X";
	public static final String MSE_RMA_FLAG_VALUE = "O";



	public static final String MSE_RESPONSE_TYPE = "TYPE";
	public static final String MSE_NUMBER = "NUMBER";
	public static final String MSE_MESSAGE = "MESSAGE";
	public static final String MSE_LOG_MSG_NO = "LOG_MSG_NO";
	public static final String MSE_MESSAGE_V1 = "MESSAGE_V1";
	public static final String MSE_MESSAGE_V2 = "MESSAGE_V2";


	public static final String MSE_NOTIFICATION = "NOTIFICATION";
	public static final String MSE_RMA_CREATED_ON = "RMA_CREATED_ON";
	public static final String MSE_RETURNED_ON = "RETURNED_ON";
	public static final String MSE_SERVICE = "SERVICE";
	public static final String MSE_SERVICE_COMMENT = "SERVICE_COMMENT";
	public static final String MSE_INDEX = "INDEX_NO";
	public static final String MSE_FLAG = "FLAG";
	public static final String MSE_PROB_DESC = "PROB_DESC";
	public static final String MSE_SERVICE_DATE = "SERVICE_DATE";
	public static final String MSE_ACTIVE = "ACTIVE";
	public static final String MSE_INACTIVE = "INACTIVE";
	public static final String MSE_REMOVED = "REMOVED";
	public static final String MSE_PINNED = "PINNED";
	public static final String MSE_NOT_PINNED = "NOT_PINNED";


	public static final String ET_MANEL = "ET_MANEL";

	//MSE constants
	public static final String CP_LIST = "CP_LIST";
	public static final String CP_MYLIST = "CP_MYLIST";
	public static final String CP_ALL = "CP_ALL";
	public static final String CP_ADD = "CP_ADD";
	public static final String CP_UPDATE = "CP_UPDATE";
	public static final String CP_HIST_ADD = "CP_HIST_ADD";
	public static final String CP_HIST_DEL = "CP_HIST_DEL";
	public static final String DATE_MONTH_YEAR_FORMAT = "dd-MM-yyyy";
	public static final String YEAR_MONTH_DATE_FORMAT = "yyyy-MM-dd";
	public static final String DATE_MONTH_YEAR_FORMAT2 = "dd MMM yyyy";
	public static final String DATE_MONTH_YEAR_FORMAT3 = "dd-MMMM-yyyy";
	public static final String FROM_DATE = "FROM_DATE";
	public static final String TO_DATE = "TO_DATE";

	public static final String OFFERING = "Offering";
	public static final String PRICING = "Pricing";
	public static final String WARRANTY = "warranty";

	//Guest constants
	public static final String GUESTUSER = "GUESTUSER";
	public static final String GUEST_BASE_STORE_UID = "bhge";
	public static final String GUESTBUY = "guestBuy";
	public static final String GUESTRFQ = "guestQuote";
	public static final String DEFAULT_SESSION_SALESORG = "sessionSalesOrg";
	public static final String ARCHIVED_CONST = "A";
	public static final String PINNED_CONST = "P";
	
	// SCPI END POINT URL CONSTANT
	public static final String ZHYB_RMA_ATTACHMENTS = "SCPI_ZHYB_RMA_ATTACHMENTS_ENDPOINT";
	public static final String ZHYB_RMA_NOTIF_DOC_ATTC = "SCPI_ZHYB_RMA_NOTIF_DOC_ATTC_ENDPOINT";
	public static final String ZGET_FILE_FROM_HYBRIS = "SCPI_ZGET_FILE_FROM_HYBRIS_ENDPOINT";
	public static final String Z_S_ORDER_PDF = "SCPI_Z_S_ORDER_PDF_ENDPOINT";
	
	public static final String CREATED = "created";
	public static final String UPDATED = "updated";
	
	
	//Panametric calibration DB constants
	public static final String PANAMETRIC_CALIBRATION_DB_DRIVER = "PANAMETRIC_CALIBRATION_DB_DRIVER";
	public static final String PANAMETRIC_CALIBRATION_DB_USERNAME = "PANAMETRIC_CALIBRATION_DB_USERNAME";
	public static final String PANAMETRIC_CALIBRATION_DB_PASSWORD = "PANAMETRIC_CALIBRATION_DB_PASSWORD";
	public static final String PANAMETRIC_CALIBRATION_DB_PORT = "PANAMETRIC_CALIBRATION_DB_PORT";
	public static final String PANAMETRIC_CALIBRATION_DB_HOST_NAME = "PANAMETRIC_CALIBRATION_DB_HOST_NAME";
	public static final String PANAMETRIC_CALIBRATION_DB_SERVICE_NAME = "PANAMETRIC_CALIBRATION_DB_SERVICE_NAME";

	//L1 Categories
	public static final String WAYGATE = "ECOM_LVL1_00000001";
	public static final String PANAMETRICS = "ECOM_LVL1_00000002";
	public static final String DRUCK = "ECOM_LVL1_00000008";
	public static final String ReuterStokes = "ECOM_LVL1_00000009";
	public static final String BENTLY = "ECOM_LVL1_00000006";
	
	public static final String VC_PRICING_ATTRIBUTE_REGION = "KOMK-KDKG1";

	public static final String VC_PRICING_ATTRIBUTE_AUART = "KOMK-AUART";
	public static final String VC_PRICING_ATTRIBUTE_AUART_SD = "KOMK-AUART_SD";
	public static final String VC_PRICING_ATTRIBUTE_KPOSN = "KOMP-KPOSN";
	public static final String VC_PRICING_ATTRIBUTE_KZNEP = "KOMP-KZNEP";
	public static final String VC_PRICING_ATTRIBUTE_ZZMVGR3P = "KOMP-ZZMVGR3P";
	public static final String VC_PRICING_ATTRIBUTE_PSTYV = "KOMP-PSTYV";
	public static final String VC_MATERIAL_PRICING_GROUP_ATTRIBUTE = "KOMP-KONDM";
	public static final String VC_MATERIAL_PH1_ATTRIBUTE = "KOMP-PRODH1";
	public static final String VC_MATERIAL_PH2_ATTRIBUTE = "KOMP-PRODH2";
	public static final String VC_MATERIAL_PH3_ATTRIBUTE = "KOMP-PRODH3";
	

	//CSR Product Lines
	public static final String CSR_WAYGATE = "WaygateGroup";
	public static final String CSR_PANAMETRICS = "PanametricsGroup";
	public static final String CSR_DRUCK = "DruckGroup";
	public static final String CSR_ReuterStokes = "ReuterStokesGroup";
	public static final String CSR_BENTLY = "CordantGroup";
	public static final String BENTLY_NEVADA = "cordant";
	public static final String WAYGATE_PRODUCTLINE = "waygate";
	public static final String DRUCK_PRODUCTLINE = "druck";
	public static final String PANA_PRODUCTLINE = "panametrics";
	public static final String SUBJECT_FOR_HAVE_A_QUE = "Support needed for product configuration for ";
	public  static final String WAYGATE_CUSTOMER_CARE = "bhge.customerCare.waygate.url";
	public  static final String BENTLY_CUSTOMER_CARE = "bhge.customerCare.bently.url";
	public  static final String PANA_CUSTOMER_CARE = "bhge.customerCare.panametrics.url";
	public  static final String Druck_CUSTOMER_CARE = "bhge.customerCare.druck.url";


	//Bently_product_price
	public  static final Integer LINE_ITEM_COUNT = 100000;
	public  static final Integer CONFIG_KPOSN_COUNTER = 1;
	public  static final Integer CONFIG_KPOSN_VALUE = 1000;

	public static final String BENTLY_NEVADA_STORE = "BN_BN";
	
	public static final String CONTEXT_ATTRIBUTE_VBAK_WAERK = "VBAK-WAERK";
	
	public static final String IS_ZERO_PRICE = "Z";
	public static final String MULTIPLANT_KB_DETERMINATION = "enable.mulitplant.kb.determination.productline";
	public static final String KB_DETERMINATION_PRODUCTLINE_SESSION = "kbDeterminationProductLine";
	public static final String QUICK_ORDER_DUMMY_PRODUCT_UNIT = "quickorder.dummy.product.unit" ;


}
