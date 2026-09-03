/**
 *
 */
package com.bhge.core.mailmessages.context;

/**
 * @author 1714555
 *
 */
public class BHGEWeeklyOrdersReportMailContext
{

	private String mediaBaseUrl;
	private String fromDate;
	private String toDate;

	/**
	 * @return the mediaBaseUrl
	 */
	public String getMediaBaseUrl()
	{
		return mediaBaseUrl;
	}

	/**
	 * @param mediaBaseUrl
	 *           the mediaBaseUrl to set
	 */
	public void setMediaBaseUrl(final String mediaBaseUrl)
	{
		this.mediaBaseUrl = mediaBaseUrl;
	}

	/**
	 * @return the fromDate
	 */
	public String getFromDate() {
		return fromDate;
	}

	/**
	 * @param fromDate
	 *           the fromDate to set
	 */
	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	/**
	 * @return the toDate
	 */
	public String getToDate() {
		return toDate;
	}

	/**
	 * @param toDate
	 *           the toDate to set
	 */
	public void setToDate(String toDate) {
		this.toDate = toDate;
	}



}
