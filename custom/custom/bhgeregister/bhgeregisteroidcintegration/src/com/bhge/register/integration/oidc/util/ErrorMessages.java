package com.bhge.register.integration.oidc.util;

public class ErrorMessages
{

	private ErrorMessages()
	{
	}

	public static final String INVALID_JSON = "Input Json is not valid <%s>";
	public static final String SSO_ID_ALREADY_PRESENT = "There is an existing record with the same SSO number";
	public static final String UNSUCCESSFUL_LDAP_SSO_CREATION = "Issue with creation of SSO in LDAP";
	public static final String PASSWORD_VALIDATION_FAILED = "Api validation failed: password";


}
