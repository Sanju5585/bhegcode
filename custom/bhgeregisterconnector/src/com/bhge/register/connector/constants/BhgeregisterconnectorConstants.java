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
package com.bhge.register.connector.constants;

/**
 * Global class for all Bhgeregisterconnector constants. You can add global constants for your extension into this
 * class.
 */
@SuppressWarnings(
{ "deprecation", "squid:CallToDeprecatedMethod" })
public final class BhgeregisterconnectorConstants extends GeneratedBhgeregisterconnectorConstants
{
	public static final String EXTENSIONNAME = "bhgeregisterconnector";
	public static final String AUTHORIZATION_SCOPE_PROPERTY = EXTENSIONNAME + ".oauth.scope";
	public static final String LICENSE_URL_PROPERTY = EXTENSIONNAME + ".license.url";
	public static final String TERMS_OF_SERVICE_URL_PROPERTY = EXTENSIONNAME + ".terms.of.service.url";
	public static final String LICENSE_PROPERTY = EXTENSIONNAME + ".licence";
	public static final String DOCUMENTATION_DESC_PROPERTY = EXTENSIONNAME + ".documentation.desc";
	public static final String DOCUMENTATION_TITLE_PROPERTY = EXTENSIONNAME + ".documentation.title";
	public static final String API_VERSION = "1.0.0";

	public static final String AUTHORIZATION_URL = "/authorizationserver/oauth/token";
	public static final String CLIENT_CREDENTIAL_AUTHORIZATION_NAME = "oauth2_client_credentials";

	public static final String SERVICE_STATUS_SUCCESS = "SUCCESS";
	public static final String SERVICE_STATUS_FAILURE = "FAILURE";

	public static final String DAM_USER_STATUS_ACTIVE = "active";
	public static final String DAM_USER_TRUEVALUE = "true";
	public static final String DAM_USER_DEFAULT_PASSWORD = "Pass#word9";

	private BhgeregisterconnectorConstants()
	{
		//empty to avoid instantiating this constant class
	}

	// implement here constants used by this extension
}
