/**
 *
 */
package com.bhge.core.registeruser.dto;

import java.util.List;

/**
 * @author 212695810
 *
 */
public class BHGERegisterUserMultipleSSOData
{
	String userSSO;
	String appAccessName;
	String accessRequestStatus;
	String registerLink;
	String LoginLink;
	String supportMail;
	
	public String getSupportMail() {
		return supportMail;
	}

	public void setSupportMail(String supportMail) {
		this.supportMail = supportMail;
	}

	public String getLoginLink() {
		return LoginLink;
	}

	public void setLoginLink(String LoginLink) {
		this.LoginLink = LoginLink;
	}

	/**
	 * @return the registerLink
	 */
	public String getRegisterLink()
	{
		return registerLink;
	}

	/**
	 * @param registerLink the registerLink to set
	 */
	public void setRegisterLink(String registerLink)
	{
		this.registerLink = registerLink;
	}

	/**
	 * @return the userSSO
	 */
	public String getUserSSO()
	{
		return userSSO;
	}

	/**
	 * @param userSSO
	 *           the userSSO to set
	 */
	public void setUserSSO(final String userSSO)
	{
		this.userSSO = userSSO;
	}

	/**
	 * @return the appAccessName
	 */
	public String getAppAccessName()
	{
		return appAccessName;
	}

	/**
	 * @param appAccessName
	 *           the appAccessName to set
	 */
	public void setAppAccessName(final String appAccessName)
	{
		this.appAccessName = appAccessName;
	}

	/**
	 * @return the accessRequestStatus
	 */
	public String getAccessRequestStatus()
	{
		return accessRequestStatus;
	}

	/**
	 * @param accessRequestStatus
	 *           the accessRequestStatus to set
	 */
	public void setAccessRequestStatus(final String accessRequestStatus)
	{
		this.accessRequestStatus = accessRequestStatus;
	}


}
