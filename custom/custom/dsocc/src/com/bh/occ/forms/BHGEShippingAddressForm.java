/**
 *
 */
package com.bh.occ.forms;

import java.util.Map;


/**
 * @author 503047662
 *
 */
public class BHGEShippingAddressForm extends AddressForm
{
	private String companyName;
	private String deliveryPoint;
	private String endUserType;
	private Boolean customAddressSaveFlag;

	/**
	 * @return the customAddressSaveFlag
	 */
	public Boolean getCustomAddressSaveFlag()
	{
		return customAddressSaveFlag;
	}

	/**
	 * @param customAddressSaveFlag
	 *           the customAddressSaveFlag to set
	 */
	public void setCustomAddressSaveFlag(final Boolean customAddressSaveFlag)
	{
		this.customAddressSaveFlag = customAddressSaveFlag;
	}

	private Map<String, String> endUserTypes;


	public BHGEShippingAddressForm()
	{
		super();
	}

	public Map<String, String> getEndUserTypes()
	{
		return endUserTypes;
	}

	public String getEndUserType()
	{
		return endUserType;
	}

	public void setEndUserType(final String endUserType)
	{
		this.endUserType = endUserType;
	}

	public void setEndUserTypes(final Map<String, String> endUserTypes)
	{
		this.endUserTypes = endUserTypes;
	}

	/**
	 * @return the companyName
	 */
	public String getCompanyName()
	{
		return companyName;
	}

	/**
	 * @param companyName
	 *           the companyName to set
	 */
	public void setCompanyName(final String companyName)
	{
		this.companyName = companyName;
	}

	/**
	 * @return the deliveryPoint
	 */
	public String getDeliveryPoint()
	{
		return deliveryPoint;
	}

	/**
	 * @param deliveryPoint
	 *           the deliveryPoint to set
	 */
	public void setDeliveryPoint(final String deliveryPoint)
	{
		this.deliveryPoint = deliveryPoint;
	}
}
