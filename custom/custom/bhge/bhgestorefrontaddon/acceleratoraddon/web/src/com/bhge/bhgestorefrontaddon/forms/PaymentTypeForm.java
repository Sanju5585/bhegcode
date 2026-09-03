/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.bhgestorefrontaddon.forms;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import org.springframework.format.annotation.NumberFormat;
import org.springframework.format.annotation.NumberFormat.Style;


public class PaymentTypeForm
{
	private String paymentType;
	private String costCenterId;
	private String purchaseOrderNumber;
	private String endCustomerOrderNumber;
	private String endUserNumber;
	private String googleCaptcha;

	/**
	 * @NotNull(message = "{general.required}")
	 * @Size(min = 1, max = 255, message = "{general.required}")
	 *
	 *           Currently this field is not in use
	 */
	public String getPaymentType()
	{
		return paymentType;
	}

	/**
	 * @return the googleCaptcha
	 */
	public String getGoogleCaptcha()
	{
		return googleCaptcha;
	}

	/**
	 * @param googleCaptcha
	 *           the googleCaptcha to set
	 */
	public void setGoogleCaptcha(final String googleCaptcha)
	{
		this.googleCaptcha = googleCaptcha;
	}

	public void setPaymentType(final String paymentType)
	{
		this.paymentType = paymentType;
	}

	public String getCostCenterId()
	{
		return costCenterId;
	}

	public void setCostCenterId(final String costCenterId)
	{
		this.costCenterId = costCenterId;
	}

	@NotNull(message = "{general.required}")
	@Size(min = 1, message = "{general.required}")
	public String getPurchaseOrderNumber()
	{
		return purchaseOrderNumber;
	}

	public void setPurchaseOrderNumber(final String purchaseOrderNumber)
	{
		this.purchaseOrderNumber = purchaseOrderNumber;
	}

	/**
	 * @return the endCustomerOrderNumber
	 */
	public String getEndCustomerOrderNumber()
	{
		return endCustomerOrderNumber;
	}

	/**
	 * @param endCustomerOrderNumber
	 *           the endCustomerOrderNumber to set
	 */
	public void setEndCustomerOrderNumber(final String endCustomerOrderNumber)
	{
		this.endCustomerOrderNumber = endCustomerOrderNumber;
	}

	/**
	 * @return the endUserNumber
	 */
	@NumberFormat(style = Style.NUMBER)
	public String getEndUserNumber()
	{
		return endUserNumber;
	}

	/**
	 * @param endUserNumber
	 *           the endUserNumber to set
	 */
	public void setEndUserNumber(final String endUserNumber)
	{
		this.endUserNumber = endUserNumber;
	}
}
