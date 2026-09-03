package com.bhge.core.ordersplit.exception;

import de.hybris.platform.servicelayer.exceptions.BusinessException;


/**
 * Exception thrown if the cart split fails
 */
public class CommerceSplitOrderException extends BusinessException
{
	public CommerceSplitOrderException(final String message)
	{
		super(message);
	}

	public CommerceSplitOrderException(final String message, final Throwable cause)
	{
		super(message, cause);
	}
}