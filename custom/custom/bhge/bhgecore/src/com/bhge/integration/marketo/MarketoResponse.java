/**
 *
 */
package com.bhge.integration.marketo;

import java.util.List;


/**
 * @author 1551247
 *
 */
public class MarketoResponse
{

	private String requestId;
	private List<Result> result;
	private boolean success;

	/**
	 * @return the requestId
	 */
	public String getRequestId()
	{
		return requestId;
	}

	/**
	 * @param requestId
	 *           the requestId to set
	 */
	public void setRequestId(final String requestId)
	{
		this.requestId = requestId;
	}

	/**
	 * @return the result
	 */
	public List<Result> getResult()
	{
		return result;
	}

	/**
	 * @param result
	 *           the result to set
	 */
	public void setResult(final List<Result> result)
	{
		this.result = result;
	}

	/**
	 * @return the success
	 */
	public boolean isSuccess()
	{
		return success;
	}

	/**
	 * @param success
	 *           the success to set
	 */
	public void setSuccess(final boolean success)
	{
		this.success = success;
	}


}
