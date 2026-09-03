
package com.bhge.core.registeruser.util;

public final class Constants
{
	private Constants()
	{
		//empty to avoid instantiating this constant class
	}

	// Local Environment Variables

	//public static final String FETCH_SSO_FROM_MAIL = "https://localhost:7002/bhgeregisterwebservices/register/fetchSSOForEmail";
	//public static final String VALIDATE_SSO = "https://localhost:7002/bhgeregisterwebservices/register/checkSSOAvailability";
	//public static final String FETCH_AVAILABLE_USERNAME = "https://localhost:7002/bhgeregisterwebservices/register/getAvailableSSOIds";
	//public static final String CREATE_B2B_SSO = "https://localhost:7002/bhgeregisterwebservices/register/createB2BSSO";
	//public static final String EXECUTE_SAP_CUSTOMERDATA = "https://localhost:7002/bhgeregisterwebservices/register/processCustomerData";
	//public static final String SUBMIT_REGISTER_DATA = "https://localhost:7002/bhgeregisterwebservices/register/submit";
	//public static final String FETCH_PRODUCT_LINES = "https://localhost:7002/bhgeregisterwebservices/register/fetchProductLines";

	//public static final String OAUTH_LOCAL_WEBURL = "https://localhost:7002/authorizationserver/oauth/token";

	// User Manager Local Changes

	public static final String REVOKE_ACCESS = "https://localhost:7002/bhgeregisterconnector/userManager/revokeAccess";
	public static final String ADD_TO_GROUP = "https://localhost:7002/bhgeregisterconnector/userManager/addToGroup";


	public static final String OAUTH_LOCAL_CLIENTID = "bhgeRegisterStorefrontClient";
	public static final String OAUTH_LOCAL_CLIENTSECRET = "reg123";
	public static final String OAUTH_LOCAL_GRANTTYPE = "client_credentials";
	public static final String OAUTH_LOCAL_SCOPE = "basic";
	public static final String PENDING = "Pending";
	public static final String APPROVED = "Approved";

	// DEV Environment Variables

	public static final String FETCH_SSO_FROM_MAIL = "https://devstore.ibhge.com/bhgeregisterwebservices/register/fetchSSOForEmail";
	public static final String VALIDATE_SSO = "https://devstore.ibhge.com/bhgeregisterwebservices/register/checkSSOAvailability";
	public static final String FETCH_AVAILABLE_USERNAME = "https://devstore.ibhge.com/bhgeregisterwebservices/register/getAvailableSSOIds";
	public static final String CREATE_B2B_SSO = "https://devstore.ibhge.com/bhgeregisterwebservices/register/createB2BSSO";
	public static final String EXECUTE_SAP_CUSTOMERDATA = "https://devstore.ibhge.com/bhgeregisterwebservices/register/processCustomerData";
	public static final String SUBMIT_REGISTER_DATA = "https://devstore.ibhge.com/bhgeregisterwebservices/register/submit";
	public static final String FETCH_PRODUCT_LINES = "https://devstore.ibhge.com/bhgeregisterwebservices/register/fetchProductLines";
	public static final String OAUTH_LOCAL_WEBURL = "https://devstore.ibhge.com/authorizationserver/oauth/token";
	public static final String VIEW_PRODUCTS = "ViewProducts";
	public static final String ORDER_TRACKING = "OrderTracking";
	public static final String SERVICES = "Services";
	public static final String VIEW_PRODUCT_PRICE = "ViewProductPrices";
	public static final String PLACE_ORDER = "PlaceOrder";
	public static final String DEACTIVATED = "Deactivated";
}
