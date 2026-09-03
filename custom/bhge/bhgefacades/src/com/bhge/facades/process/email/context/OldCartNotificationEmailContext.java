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
package com.bhge.facades.process.email.context;

import com.bhge.core.model.OldCartNotificationEmailProcessModel;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.util.Config;
import org.apache.commons.lang3.StringUtils;

import jakarta.annotation.Resource;


/**
 * Velocity context for a old cart notification email.
 */
public class OldCartNotificationEmailContext extends AbstractEmailContext<OldCartNotificationEmailProcessModel>
{
	@Resource
	private CommonI18NService commonI18NService;
	private String mediaBaseUrl;
	private static final String BASE_URL = "bhge.ecommerce.url";
	private static final String MEDIA_URL="bhge.store.base.url";
	private String userName;
	private String cartURL;
	private String cartId;
	private String contactusURL;
	private String customerAcc;
	private String customerName;
	private String salesArea;

	public String getCustomerAcc() {
		return customerAcc;
	}

	public void setCustomerAcc(String customerAcc) {
		this.customerAcc = customerAcc;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getSalesArea() {
		return salesArea;
	}

	public void setSalesArea(String salesArea) {
		this.salesArea = salesArea;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getCartURL() {
		return cartURL;
	}

	public void setCartURL(String cartURL) {
		this.cartURL = cartURL;
	}

	public String getCartId() {
		return cartId;
	}

	public void setCartId(String cartId) {
		this.cartId = cartId;
	}

	public String getContactusURL() {
		return contactusURL;
	}

	public void setContactusURL(String contactusURL) {
		this.contactusURL = contactusURL;
	}

	@Override
	public String getMediaBaseUrl() {
		return mediaBaseUrl;
	}

	public void setMediaBaseUrl(String mediaBaseUrl) {
		this.mediaBaseUrl = mediaBaseUrl;
	}

	@Override
	public void init(final OldCartNotificationEmailProcessModel oldCartNotificationEmailProcessModel, final EmailPageModel emailPageModel)
	{
		super.init(oldCartNotificationEmailProcessModel, emailPageModel);
		setUserName(oldCartNotificationEmailProcessModel.getCart().getUser().getName());
		setCartId(oldCartNotificationEmailProcessModel.getCart().getCode());
		setCartURL(Config.getParameter(BASE_URL));
		setContactusURL(Config.getParameter(BASE_URL)+ "/contactus");
		setMediaBaseUrl(Config.getParameter(MEDIA_URL));
		String regionId = "";
		String custNum = "";
		String[] defaultB2BId = null;
		String defaultUnitId = oldCartNotificationEmailProcessModel.getCart().getSoldToForCart().getUid();
		if (StringUtils.isNotEmpty((defaultUnitId)) && defaultUnitId.contains("_")) {
			defaultB2BId = defaultUnitId.split("_");
			custNum = defaultB2BId[0];
			regionId = defaultB2BId[1];
		}
		setCustomerAcc(custNum);
		setCustomerName(oldCartNotificationEmailProcessModel.getCart().getSoldToForCart().getName());
		setSalesArea(regionId);
	}

	@Override
	protected BaseSiteModel getSite(OldCartNotificationEmailProcessModel businessProcessModel) {
		return businessProcessModel.getCart().getSite();
	}

	@Override
	protected CustomerModel getCustomer(OldCartNotificationEmailProcessModel businessProcessModel) {
		return (CustomerModel) businessProcessModel.getCart().getUser();
	}

	@Override
	protected LanguageModel getEmailLanguage(OldCartNotificationEmailProcessModel businessProcessModel) {
		LanguageModel languageModel = businessProcessModel.getCart().getUser().getSessionLanguage();
		if(languageModel == null)
		{
			languageModel = commonI18NService.getLanguage("en");
		}
		return  languageModel;
	}
}
