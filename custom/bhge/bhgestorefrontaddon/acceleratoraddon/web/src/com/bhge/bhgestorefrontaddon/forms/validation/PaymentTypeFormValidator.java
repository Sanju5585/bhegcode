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
package com.bhge.bhgestorefrontaddon.forms.validation;

import java.util.regex.Pattern;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.bhge.bhgestorefrontaddon.forms.PaymentTypeForm;


/**
 * Validator for {@link PaymentTypeForm}.
 */
@Component("paymentTypeFormValidator")
public class PaymentTypeFormValidator implements Validator
{
	private final static String PO_REGEX = "^[a-zA-Z0-9-/ ]*$";

	@Override
	public boolean supports(final Class<?> clazz)
	{
		return PaymentTypeForm.class.equals(clazz);
	}

	@Override
	public void validate(final Object object, final Errors errors)
	{
		if (object instanceof PaymentTypeForm)
		{
			final PaymentTypeForm paymentTypeForm = (PaymentTypeForm) object;

			if (StringUtils.isNotBlank(paymentTypeForm.getPurchaseOrderNumber())
					&& !Pattern.compile(PO_REGEX).matcher(paymentTypeForm.getPurchaseOrderNumber()).matches())
			{
				errors.rejectValue("purchaseOrderNumber", "general.required");
			}

			if (paymentTypeForm.getEndUserNumber() != null)
			{
				try
				{
					final long endUser = Long.parseLong(paymentTypeForm.getEndUserNumber());
					if (endUser != Math.floor(endUser))
					{
						errors.rejectValue("endUserNumber", "typeMismatch.endUserNumber");
					}
				}
				catch (final NumberFormatException e)
				{
					e.getMessage();
					errors.rejectValue("endUserNumber", "typeMismatch.endUserNumber");
				}
			}
		}
	}

}
