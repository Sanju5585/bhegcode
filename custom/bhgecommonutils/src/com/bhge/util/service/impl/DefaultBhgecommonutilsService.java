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
package com.bhge.util.service.impl;

import de.hybris.platform.catalog.model.CatalogUnawareMediaModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.servicelayer.exceptions.SystemException;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Optional;


import javax.imageio.ImageIO;

import jakarta.annotation.Resource;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;


import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.logging.log4j.core.config.plugins.validation.constraints.Required;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.bhge.core.model.BHGEGlobalPropertiesModel;
import com.bhge.util.exception.BhgeUtilException;
import com.bhge.util.service.BhgecommonutilsService;
import com.bhge.util.setup.RecaptchaResponse;


public class DefaultBhgecommonutilsService implements BhgecommonutilsService
{
	private static final Logger LOG = LoggerFactory.getLogger(DefaultBhgecommonutilsService.class);

	private MediaService mediaService;
	private ModelService modelService;
	private FlexibleSearchService flexibleSearchService;
	
	@Resource(name = "userService")
	private UserService userService;
	
	public static final String FILE_TYPE = "jpeg";
	public static final String GUESTCHECKOUT = "guestCheckout";
	private static final String CAPTCHA_SCORE = "captchaScore";
	private static final String CAPTCHA_PAGE_FOR_SCORE = "captchaPageForScore";
	public static final String INVALIDSCORE = "-1";

	@Override
	public String getHybrisLogoUrl(final String logoCode)
	{
		final MediaModel media = mediaService.getMedia(logoCode);

		// Keep in mind that with Slf4j you don't need to check if debug is enabled, it is done under the hood.
		LOG.debug("Found media [code: {}]", media.getCode());

		return media.getURL();
	}

	@Override
	public void createLogo(final String logoCode)
	{
		final Optional<CatalogUnawareMediaModel> existingLogo = findExistingLogo(logoCode);

		final CatalogUnawareMediaModel media = existingLogo.isPresent() ? existingLogo.get()
				: modelService.create(CatalogUnawareMediaModel.class);
		media.setCode(logoCode);
		media.setRealFileName("sap-hybris-platform.png");
		modelService.save(media);

		mediaService.setStreamForMedia(media, getImageStream());
	}

	private final static String FIND_LOGO_QUERY = "SELECT {" + CatalogUnawareMediaModel.PK + "} FROM {"
			+ CatalogUnawareMediaModel._TYPECODE + "} WHERE {" + CatalogUnawareMediaModel.CODE + "}=?code";
	
	private final static String CAPTCHA_QUERY = "SELECT {" + BHGEGlobalPropertiesModel.PK + "} FROM {"
			+ BHGEGlobalPropertiesModel._TYPECODE + "} WHERE {" + BHGEGlobalPropertiesModel.UID + "}=?uid";
	
	private Optional<CatalogUnawareMediaModel> findExistingLogo(final String logoCode)
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FIND_LOGO_QUERY);
		fQuery.addQueryParameter("code", logoCode);

		try
		{
			return Optional.of(flexibleSearchService.searchUnique(fQuery));
		}
		catch (final SystemException e)
		{
			return Optional.empty();
		}
	}

	public void buildCustomCaptcha(final HttpServletRequest request, final HttpServletResponse response)
			throws ServletException, IOException
	{
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Expires", 0);
		response.setHeader("Pragma", "no-cache");
		response.setDateHeader("Max-Age", 0);

		final String captchaStr = generateCaptchaToken(6);
		final int width = 100;
		final int height = 40;
		final Color bg = new Color(58, 93, 174);
		final Color fg = new Color(255, 255, 255);
		final Font font = new Font("Arial", Font.BOLD, 20);
		final BufferedImage cpimg = new BufferedImage(width, height, BufferedImage.OPAQUE);
		final Graphics g = cpimg.createGraphics();

		g.setFont(font);
		g.setColor(bg);
		g.fillRect(0, 0, width, height);
		g.setColor(fg);
		g.drawString(captchaStr, 10, 25);

		final HttpSession session = request.getSession(false);
		session.setAttribute("CAPTCHA", captchaStr);
		session.invalidate();
		final OutputStream outputStream = response.getOutputStream();
		ImageIO.write(cpimg, FILE_TYPE, outputStream);
		outputStream.close();

	}

	public boolean validateGoogleCaptcha(final HttpServletRequest request, final HttpSession session,
			final RestTemplate restTemplate) throws BhgeUtilException
	{
		LOG.info("inside validate Google Captcha for request: " + request + " session: " + session + " and restTemplate: "
				+ restTemplate);
		final String reCaptchaResponse = request.getParameter("g-recaptcha-response");
		LOG.info("reCaptchaResponse String is " + reCaptchaResponse);
		boolean isValid = false;
		if (StringUtils.isNotEmpty(reCaptchaResponse))
		{

			LOG.info("Inside Google condition");


			RecaptchaResponse recaptchaResponse;
			final String recaptchaSecretKey = Config.getParameter("recaptcha.privatekey");
			final String recaptchaSecretKeyV2 = Config.getParameter("recaptcha.privatekey.v2");
			try
			{
				recaptchaResponse = restTemplate
						.postForEntity(Config.getParameter("recaptcha.url"),
								createBody(recaptchaSecretKey, getRemoteIp(request), reCaptchaResponse), RecaptchaResponse.class)
						.getBody();
				if (!recaptchaResponse.isSuccess())
				{
					LOG.info("trying recaptcha with v2");
					recaptchaResponse = restTemplate
							.postForEntity(Config.getParameter("recaptcha.url"),
									createBody(recaptchaSecretKeyV2, getRemoteIp(request), reCaptchaResponse), RecaptchaResponse.class)
							.getBody();
				}
				LOG.info("recaptchaResponse in validateCaptcha " + recaptchaResponse);
			}
			catch (final RestClientException e)
			{
				LOG.error("Error logged on Captcha Validation " + e);
				throw new BhgeUtilException("Recaptcha API not available due to exception", e);
			}
			isValid = recaptchaResponse.isSuccess();

		}
		else
		{
			LOG.info("Inside Custom condition");
			isValid = validateCustomCaptcha(request, session);
		}
		LOG.info("Captcha response is success:" + isValid);
		return isValid;
	}



	public boolean validateGoogleCaptchaNew(final HttpServletRequest request, final HttpSession session,
			final RestTemplate restTemplate, final String captcha) throws BhgeUtilException
	{
//		LOG.info("inside validate Google Captcha for request: " + request + " session: " + session + " and restTemplate: "
//				+ restTemplate);
		//final String reCaptchaResponse = request.getParameter("g-recaptcha-response");
		final String reCaptchaResponse = captcha;
		LOG.info("reCaptchaResponse String is " + reCaptchaResponse);
		boolean isValid = false;
		if (StringUtils.isNotEmpty(reCaptchaResponse))
		{

			LOG.info("Inside Google condition");


			RecaptchaResponse recaptchaResponse;
			final String recaptchaSecretKey = Config.getParameter("recaptcha.privatekey");
			LOG.info("============= secretKey 1============ " + recaptchaSecretKey);
			final String recaptchaSecretKeyV2 = Config.getParameter("recaptcha.privatekey.v2");
			LOG.info("============= secretKey 2============ " + recaptchaSecretKeyV2);
			try
			{
				LOG.info("============= recaptcha url ============ " + Config.getParameter("recaptcha.url"));
				LOG.info("============= remote IP METHOD 1 ============ " + getRemoteIp(request));
				recaptchaResponse = restTemplate
						.postForEntity(Config.getParameter("recaptcha.url"),
								createBody(recaptchaSecretKey, getRemoteIp(request), reCaptchaResponse), RecaptchaResponse.class)
						.getBody();
				LOG.info("******************* RECAPTCHA RESPONSE IS 1: ===================" + recaptchaResponse);
				LOG.info("--------------------- RESPONSE 1 status ------------------------ " + recaptchaResponse.isSuccess());

				if (!recaptchaResponse.isSuccess())
				{
					LOG.info("******************* RECAPTCHA RESPONSE IS 2: ===================" + recaptchaResponse);
					LOG.info("============= remote IP METHOD 2 ============ " + getRemoteIp(request));
					LOG.info("trying recaptcha with v2");
					recaptchaResponse = restTemplate
							.postForEntity(Config.getParameter("recaptcha.url"),
									createBody(recaptchaSecretKeyV2, getRemoteIp(request), reCaptchaResponse), RecaptchaResponse.class)
							.getBody();
					LOG.info("******************* RECAPTCHA RESPONSE IS 3: ===================" + recaptchaResponse);
				}
				LOG.info("recaptchaResponse in validateCaptcha 4 " + recaptchaResponse);
			}
			catch (final RestClientException e)
			{
				LOG.error("Error logged on Captcha Validation " + e);
				throw new BhgeUtilException("Recaptcha API not available due to exception", e);
			}
			isValid = recaptchaResponse.isSuccess();
			if (userService.isAnonymousUser(userService.getCurrentUser()) && isValid)
			{
				LOG.info("******************* RECAPTCHA isAnonymousUser is True and captcha is " + isValid);

				final FlexibleSearchQuery query = new FlexibleSearchQuery(CAPTCHA_QUERY);
				query.addQueryParameter("uid", CAPTCHA_PAGE_FOR_SCORE);
				final SearchResult<BHGEGlobalPropertiesModel> results = flexibleSearchService.search(query);
				final BHGEGlobalPropertiesModel allowedCaptchaPages = CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult().get(0) : null;
				if(Objects.nonNull(allowedCaptchaPages))
				{
					LOG.info("******************* RECAPTCHA allowedCaptchaPages  true " );
					final List<String> allowedCaptchaPagesList = StringUtils.isNotBlank(allowedCaptchaPages.getValue())
							? Arrays.asList(allowedCaptchaPages.getValue().split(","))
							: new ArrayList<String>();	
					if(StringUtils.isNotEmpty(recaptchaResponse.getAction()) && null != recaptchaResponse.getAction() 
							&& allowedCaptchaPagesList.contains(recaptchaResponse.getAction()))
					{
						final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(CAPTCHA_QUERY);
						fQuery.addQueryParameter("uid", CAPTCHA_SCORE);
						final SearchResult<BHGEGlobalPropertiesModel> result = flexibleSearchService.search(fQuery);
						final BHGEGlobalPropertiesModel captchaProperty = CollectionUtils.isNotEmpty(result.getResult()) ? result.getResult().get(0) : null;
						if(Objects.nonNull(captchaProperty) && StringUtils.isNotEmpty(captchaProperty.getValue()))
						{
							LOG.info("******************* RECAPTCHA captchaProperty score is  " + captchaProperty.getValue());

							if(captchaProperty.getValue().equalsIgnoreCase(INVALIDSCORE))
							{
								isValid = true;
							}
							else
							{
								if(recaptchaResponse.getScore() >= Double.valueOf(captchaProperty.getValue()))
								{
									isValid = true;
								}
								else
								{
									LOG.info("******************* RECAPTCHA captchaProperty score is  NOT more the threshhold  " + recaptchaResponse.getScore());

									isValid = false;
								}
							}
						}
					}
				}
			}

		}
		else
		{
			LOG.info("Inside Custom condition");
			isValid = validateCustomCaptcha(request, session);
		}
		LOG.info("Captcha response is success:" + isValid);
		return isValid;
	}





	public boolean validateCustomCaptcha(final HttpServletRequest request, final HttpSession session)
	{
		boolean isValid = false;
		if (StringUtils.isNotEmpty(request.getParameter("captchaText")))
		{
			final String captcha = (String) session.getAttribute("CAPTCHA");
			final String captchaText = StringEscapeUtils.escapeHtml4(request.getParameter("captchaText"));
			if (StringUtils.equals(captcha, captchaText))
			{
				isValid = true;
			}
		}
		return isValid;
	}

	private static String generateCaptchaToken(final int captchaLength)
	{
		final String saltChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
		final StringBuilder captchaStrBuffer = new StringBuilder();
		final SecureRandom secRandom = new SecureRandom();
		// build a random captchaLength chars salt
		while (captchaStrBuffer.length() < captchaLength)
		{
			final int index = Math.abs(secRandom.nextInt()) % saltChars.length();
			captchaStrBuffer.append(saltChars.substring(index, index + 1));
		}
		return captchaStrBuffer.toString();
	}

	private String getRemoteIp(final HttpServletRequest request)
	{

		LOG.info("Inside remote ip");
		String ip = request.getHeader("x-forwarded-for");
		LOG.info("----------------- IP IS: 1 ================== " + ip);
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip))
		{
			ip = request.getRemoteAddr();
			LOG.info("----------------- IP IS: 2 ================== " + ip);
		}
		return ip;
	}

	private MultiValueMap<String, String> createBody(final String secret, final String remoteIp, final String response)
	{

		final MultiValueMap<String, String> form = new LinkedMultiValueMap<>();
		form.add("secret", secret);
		form.add("remoteip", remoteIp);
		form.add("response", response);
		return form;
	}

	private InputStream getImageStream()
	{
		return DefaultBhgecommonutilsService.class.getResourceAsStream("/bhgecommonutils/sap-hybris-platform.png");
	}

	public void setMediaService(final MediaService mediaService)
	{
		this.mediaService = mediaService;
	}

	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
	{
		this.flexibleSearchService = flexibleSearchService;
	}

}
