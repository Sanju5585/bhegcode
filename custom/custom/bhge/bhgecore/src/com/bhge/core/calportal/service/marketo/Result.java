/**
 *
 */
package com.bhge.core.calportal.service.marketo;

import java.util.List;


/**
 * @author 1551247
 *
 */
public class Result
{
	private int id;
	private String status;
	private List<Reason> reasons;

	/**
	 * @return the id
	 */
	public int getId()
	{
		return id;
	}

	/**
	 * @param id
	 *           the id to set
	 */
	public void setId(final int id)
	{
		this.id = id;
	}

	/**
	 * @return the status
	 */
	public String getStatus()
	{
		return status;
	}

	/**
	 * @param status
	 *           the status to set
	 */
	public void setStatus(final String status)
	{
		this.status = status;
	}


	/**
	 * @return the reasons
	 */
	public List<Reason> getReasons()
	{
		return reasons;
	}

	/**
	 * @param reasons
	 *           the reasons to set
	 */
	public void setReasons(final List<Reason> reasons)
	{
		this.reasons = reasons;
	}

}
