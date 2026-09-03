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
package com.bhge.facades.order.populators;

import de.hybris.platform.commercefacades.order.converters.populator.AbstractOrderPopulator;
import de.hybris.platform.commercefacades.quote.data.QuoteData;
import de.hybris.platform.commerceservices.order.CommerceOrderService;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.core.model.user.AddressModel;


import org.springframework.util.Assert;


public class BHGEQuotePopulator extends AbstractOrderPopulator<QuoteModel, QuoteData>
{
	private CommerceOrderService commerceOrderService;

	@Override
	public void populate(final QuoteModel source, final QuoteData target)
	{
		Assert.notNull(source, "Parameter source cannot be null.");
		Assert.notNull(target, "Parameter target cannot be null.");

		addCommon(source, target);
		addDetails(source, target);
		addTotals(source, target);
		addEntries(source, target);
		addPromotions(source, target);
		addComments(source, target);
		addQuoteInfo(source, target);
		target.setHasCart(Boolean.valueOf(source.getCartReference() != null));
	}

	protected void addQuoteInfo(final QuoteModel source, final QuoteData target)
	{
		final OrderModel orderFromQuote = getCommerceOrderService().getOrderForQuote(source);
		if (orderFromQuote != null)
		{
			target.setOrderCode(orderFromQuote.getCode());
		}
	}

	protected void addDetails(final QuoteModel source, final QuoteData target)
	{
		target.setCode(source.getCode());
		target.setVersion(source.getVersion());
		target.setExpirationTime(source.getExpirationTime());
		target.setState(source.getState());
		target.setUserName(source.getUserName());
		target.setCompany(source.getCompany());
		target.setContactNumber(source.getContactNumber());
		target.setEmailAddress(source.getEmailAddress());
		target.setAddress1(source.getAddress1());
		target.setAddress2(source.getAddress2());
		if (source.getCountry() == null)
		{
			target.setCountry("");
		}
		else
		{
			target.setCountry(source.getCountry().getName());
		}
		if (source.getRegion() == null)
		{
			target.setRegion("");
		}
		else
		{
			target.setRegion(source.getRegion().getName());
		}

		target.setCity(source.getCity());
		target.setPostalCode(source.getPostalCode());
		target.setCreationTime(source.getCreationtime());
		target.setUpdatedTime(source.getModifiedtime());
		target.setEmailtype(source.getEmailtype());
		target.setPreviousEstimatedTotal(createPrice(source, source.getPreviousEstimatedTotal()));
		//Setting end user address details
		if (source.getRMAEndUserAddress() != null)
		{
			final AddressModel rmaEndUserAddress = source.getRMAEndUserAddress();
			target.setEndUserCompanyName(rmaEndUserAddress.getCompany());
			target.setEndUserType(rmaEndUserAddress.getEndUserType());
			target.setEndUserLine1(rmaEndUserAddress.getLine1());
			target.setEndUserLine2(rmaEndUserAddress.getLine2());
			target.setEndUserCountryIso(rmaEndUserAddress.getCountry() != null ? rmaEndUserAddress.getCountry().getIsocode() : null);
			target.setEndUserRegionIso(rmaEndUserAddress.getRegion() != null ? rmaEndUserAddress.getRegion().getIsocode() : null);
			target.setEndUserRegionName(rmaEndUserAddress.getRegion() != null ? rmaEndUserAddress.getRegion().getName() : null);
			target.setEndUserTownCity(rmaEndUserAddress.getTown());
			target.setEndUserPostcode(rmaEndUserAddress.getPostalcode());
		}
	}

	protected CommerceOrderService getCommerceOrderService()
	{
		return commerceOrderService;
	}

	
	public void setCommerceOrderService(final CommerceOrderService commerceOrderService)
	{
		this.commerceOrderService = commerceOrderService;
	}
}
