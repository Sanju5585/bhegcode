/**
 *
 */
package com.bhge.core.mailmessages.context;

/**
 * @author 212722447
 *
 */
public class BHGEInactiveUsersMailContext
{
	private String mediaBaseUrl;
	private int inactiveUserCount;
	private int disabledUserCount;

	/**
	 * @return the inactiveUserCount
	 */
	public int getInactiveUserCount()
	{
		return inactiveUserCount;
	}

	/**
	 * @param inactiveUserCount
	 *           the inactiveUserCount to set
	 */
	public void setInactiveUserCount(final int inactiveUserCount)
	{
		this.inactiveUserCount = inactiveUserCount;
	}

	/**
	 * @return the disabledUserCount
	 */
	public int getDisabledUserCount()
	{
		return disabledUserCount;
	}

	/**
	 * @param disabledUserCount
	 *           the disabledUserCount to set
	 */
	public void setDisabledUserCount(final int disabledUserCount)
	{
		this.disabledUserCount = disabledUserCount;
	}

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
}
