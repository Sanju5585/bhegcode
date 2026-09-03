
package com.bh.occ.common.exception;

import de.hybris.platform.webservicescommons.errors.exceptions.WebserviceException;

public class DSLoginException extends WebserviceException {
	
	private static final String SUBJECT_TYPE = "login";
	private static final String TYPE = "loginError";
	public static final String USER_NOT_REGISTERED = "2000";
	public static final String USER_DISABLED = "2001";
	public static final String USER_TOKEN_ERROR = "2002";
	public static final String PROCESSING_ERROR = "2003";
	public static final String PENDING_ACTIVATION = "2004";
	public static final String PENDING_APPROVAL = "2005";
	public static final String REJECTED = "2006";
	public static final String USERNOTASSIGNED= "2007";
	public static final String PENDING_ACCESS ="2008";
	public static final String UNAUTHORIZED_SIGNIN="2009";
	public static final String USER_DISABLEDBYSYSTEM="2010";
	public static final String USER_DISABLEDBYMANAGER="2011";
	
	@Override
	public String getSubjectType() {
			return SUBJECT_TYPE;
	}

	@Override
	public String getType() {
		return TYPE;
	}
	
	
	public DSLoginException(final String message)
	{
		super(message);
	}

	public DSLoginException(final String message, final String reason)
	{
		super(message, reason);
	}

	public DSLoginException(final String message, final String reason, final Throwable cause)
	{
		super(message, reason, cause);
	}

	public DSLoginException(final String message, final String reason, final String subject)
	{
		super(message, reason, subject);
	}

	public DSLoginException(final String message, final String reason, final String subject, final Throwable cause)
	{
		super(message, reason, subject, cause);
	}

	
}
