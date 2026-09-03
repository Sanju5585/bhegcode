/**
 *
 */
package com.bh.occ.forms;

import java.io.Serializable;
import java.util.List;


/**
 * @author 1185137
 *
 */
public class ServiceOffering implements Serializable
{
	private static final long serialVersionUID = 1L;

	private List<ServiceOfferingResponse> offeringList;
	private String responseCode;

	/**
	 * @return the offeringList
	 */
	public List<ServiceOfferingResponse> getOfferingList()
	{
		return offeringList;
	}

	/**
	 * @param offeringList
	 *           the offeringList to set
	 */
	public void setOfferingList(final List<ServiceOfferingResponse> offeringList)
	{
		this.offeringList = offeringList;
	}

	/**
	 * @return the responseCode
	 */
	public String getResponseCode()
	{
		return responseCode;
	}

	/**
	 * @param responseCode
	 *           the responseCode to set
	 */
	public void setResponseCode(final String responseCode)
	{
		this.responseCode = responseCode;
	}



}
