package com.bh.occ.common.exception;

/**
 * This class will be used to raise exception from OCC integration layer
 */
public class DSIntegrationException extends Exception
{
	String code;
	String message;

	/**
	 *
	 */
	public DSIntegrationException(String code, String message)
	{
		super(message);
		this.code = code;
		this.message = message;

	}

}
