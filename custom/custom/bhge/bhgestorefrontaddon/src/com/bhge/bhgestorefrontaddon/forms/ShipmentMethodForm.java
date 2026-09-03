/**
 *
 */
package com.bhge.bhgestorefrontaddon.forms;

import java.io.Serializable;


/**
 * @author ransubra
 *
 */
public class ShipmentMethodForm implements Serializable
{
	private String endCustomerNumber;
	private Boolean shipmentMethod;
	private Boolean isEndCustomerChanged;
	private String guestEmail;
	private String guestConfirmEmail;

	/**
	 * @return the endCustomerNumber
	 */
	public String getEndCustomerNumber()
	{
		return endCustomerNumber;
	}

	/**
	 * @param endCustomerNumber
	 *           the endCustomerNumber to set
	 */
	public void setEndCustomerNumber(final String endCustomerNumber)
	{
		this.endCustomerNumber = endCustomerNumber;
	}

	/**
	 * @return the shipmentMethod
	 */
	public Boolean getShipmentMethod()
	{
		return shipmentMethod;
	}

	/**
	 * @param shipmentMethod
	 *           the shipmentMethod to set
	 */
	public void setShipmentMethod(final Boolean shipmentMethod)
	{
		this.shipmentMethod = shipmentMethod;
	}

	/**
	 * @return the isEndCustomerChanged
	 */
	public Boolean getIsEndCustomerChanged()
	{
		return isEndCustomerChanged;
	}

	/**
	 * @param isEndCustomerChanged
	 *           the isEndCustomerChanged to set
	 */
	public void setIsEndCustomerChanged(final Boolean isEndCustomerChanged)
	{
		this.isEndCustomerChanged = isEndCustomerChanged;
	}

	/**
	 * @return the guestEmail
	 */
	public String getGuestEmail()
	{
		return guestEmail;
	}

	/**
	 * @param guestEmail
	 *           the guestEmail to set
	 */
	public void setGuestEmail(final String guestEmail)
	{
		this.guestEmail = guestEmail;
	}

	/**
	 * @return the guestConfirmEmail
	 */
	public String getGuestConfirmEmail()
	{
		return guestConfirmEmail;
	}

	/**
	 * @param guestConfirmEmail
	 *           the guestConfirmEmail to set
	 */
	public void setGuestConfirmEmail(final String guestConfirmEmail)
	{
		this.guestConfirmEmail = guestConfirmEmail;
	}

}
