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
package com.bhge.util.service;

import java.io.IOException;


import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.client.RestTemplate;

import com.bhge.util.exception.BhgeUtilException;


public interface BhgecommonutilsService
{
	String getHybrisLogoUrl(String logoCode);

	void createLogo(String logoCode);

	public void buildCustomCaptcha(final HttpServletRequest request, final HttpServletResponse response)
			throws ServletException, IOException;

	public boolean validateGoogleCaptcha(final HttpServletRequest request, final HttpSession session,
			final RestTemplate restTemplate) throws BhgeUtilException;

	public boolean validateCustomCaptcha(final HttpServletRequest request, final HttpSession session);

	boolean validateGoogleCaptchaNew(HttpServletRequest request, HttpSession session, RestTemplate restTemplate, String captcha)
			throws BhgeUtilException;

}
