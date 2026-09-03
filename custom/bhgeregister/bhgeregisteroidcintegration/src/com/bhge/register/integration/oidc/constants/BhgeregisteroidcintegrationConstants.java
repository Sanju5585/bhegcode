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
package com.bhge.register.integration.oidc.constants;

/**
 * Global class for all Bhgeregisteroidcintegration constants. You can add global constants for your extension into this
 * class.
 */
public final class BhgeregisteroidcintegrationConstants extends GeneratedBhgeregisteroidcintegrationConstants
{
	public static final String EXTENSIONNAME = "bhgeregisteroidcintegration";

	private BhgeregisteroidcintegrationConstants()
	{
		//empty to avoid instantiating this constant class
	}

	// implement here constants used by this extension
	public static final String PLATFORM_LOGO_CODE = "bhgeregisteroidcintegrationPlatformLogo";


	//Operation List
	public static final String REGISTER_OIDC = "registerData";
	public static final String READ_OIDC = "readData";

	//OIDC Integration - Schema Formats
	public static final String WRITE_OIDC_SCHEMA = "writeOIDCSchema.json";
	public static final String READ_OIDC_SCHEMA = "readOIDCSchema.json";

	//OIDC Integration - Constants
	public static final String B2B_DIRECTORY = "200";
	public static final String REGISTERED_BY = "Self";
	public static final String GE_SSO_LINKED_BU = "CORPBEN200,CORPBEN400";
	public static final String GE_SSO_THE_BLOB = "0";
	public static final String LDAP_ENTRY = "ldapEntry";
	public static final String SSO_ALREADY_PRESENT_STATUS_CODE = "5029";
	public static final String SSO_NOT_FOUND_IN_LDAP_STATUS_CODE = "5026";
	public static final String RESPONSE_TYPE = "responsetype";
	public static final String JSON = "json";
	public static final String FALSE = "false";
	public static final String GIVEN_NAME = "givenName";
	public static final String UID = "uid";
	public static final String B2C_DIRECTORY = "100";
	public static final String GE_DIRECTORY = "400";

	//OIDC Environment Variables
	public static final String REGISTER_OIDC_WEBURL = "https://stage.api.ge.com/digital/b2bandb2c/v2/addB2BAccount";
	public static final String READ_OIDC_WEBURL = "https://stage.api.ge.com:8444/digital/ssogenericread/v2/ReadData";
	public static final String OAUTH_OIDC_WEBURL = "https://fssfed.stage.ge.com/fss/as/token.oauth2";
	public static final String OAUTH_OIDC_GRANTTYPE = "client_credentials";
	public static final String OAUTH_OIDC_CLIENTID = "BHGE_DOT";
	public static final String OAUTH_OIDC_CLIENTSECRET = "20e1806773809a4dc6671d18f132d24707d41ba3";
	public static final String OAUTH_OIDC_SCOPE = "api";

}
