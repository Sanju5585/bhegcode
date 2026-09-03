package com.bhge.core.mailmessages.context;
import com.bhge.core.enums.BHGERMACommerceType;
import com.bhge.core.enums.GEEdgeCartType;
public class BHGECriticalErrorEmailContext {

	private String errorDesc;

	private String errorTime;

	private String userEmail;

	private String emailSoldTo;

	private String orderId;

	private String subject;

	private String mediaBaseUrl;

	private String userSSO;

	private GEEdgeCartType cartType;

	private BHGERMACommerceType commerceType;

	public String getUserSSO() {
		return userSSO;
	}

	public void setUserSSO(String userSSO) {
		this.userSSO = userSSO;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getErrorDesc() {
		return errorDesc;
	}

	public void setErrorDesc(String errorDesc) {
		this.errorDesc = errorDesc;
	}

	public String getErrorTime() {
		return errorTime;
	}

	public void setErrorTime(String errorTime) {
		this.errorTime = errorTime;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getEmailSoldTo() {
		return emailSoldTo;
	}

	public void setEmailSoldTo(String emailSoldTo) {
		this.emailSoldTo = emailSoldTo;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
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
	public void setMediaBaseUrl(String mediaBaseUrl)
	{
		this.mediaBaseUrl = mediaBaseUrl;
	}


	/**
	 * @return the cartType
	 */
	public GEEdgeCartType getCartType()
	{
		return cartType;
	}

	/**
	 * @param cartType
	 *           the cartType to set
	 */
	public void setCartType(final GEEdgeCartType cartType)
	{
		this.cartType = cartType;
	}

	/**
	 * @return the commerceType
	 */
	public BHGERMACommerceType getCommerceType()
	{
		return commerceType;
	}

	/**
	 * @param commerceType
	 *           the commerceType to set
	 */
	public void setCommerceType(final BHGERMACommerceType commerceType)
	{
		this.commerceType = commerceType;
	}

}
