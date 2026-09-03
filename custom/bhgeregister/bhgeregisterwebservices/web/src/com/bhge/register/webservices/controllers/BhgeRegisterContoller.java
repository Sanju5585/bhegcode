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
package com.bhge.register.webservices.controllers;

import static com.bhge.register.webservices.constants.BhgeregisterwebservicesConstants.CLIENT_CREDENTIAL_AUTHORIZATION_NAME;

import jakarta.annotation.Resource;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.bhge.register.webservices.facades.BHGEManualApprovalFacade;
import com.bhge.register.webservices.facades.BhgeRegisterFacade;
import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;



/**
 * Sample Controller
 */
@Controller
@RequestMapping(value = "/register")
@Tag(name = "register")
public class BhgeRegisterContoller
{
	private static final Logger LOG = Logger.getLogger(BhgeRegisterContoller.class);

	@Resource
	private BhgeRegisterFacade bhgeRegisterFacade;

	@Resource
	private BHGEManualApprovalFacade bhgeManualApprovalFacade;

	/**
	 *
	 */
	@RequestMapping(value = "/createB2BSSO", method = RequestMethod.POST, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE },consumes = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseStatus(HttpStatus.CREATED)
	@ResponseBody
	@Operation(operationId = "B2B SSO Details", security =
	@SecurityRequirement(name = CLIENT_CREDENTIAL_AUTHORIZATION_NAME))
	public BHGERegisterResponse createB2BSSO(
			@Parameter(description = "B2B SSO Details", required = true) @RequestBody final BHGERegisterRequest ssoDetails)
	{
		if (ssoDetails != null)
		{
			return bhgeRegisterFacade.createB2BSSO(ssoDetails);
		}
		return null;
	}

	/**
	 *
	 */
	@RequestMapping(value = "/checkSSOAvailability", method = RequestMethod.POST, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, consumes = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	@Operation(operationId = "Check if SSO ID is available to use", security =
	@SecurityRequirement(name = CLIENT_CREDENTIAL_AUTHORIZATION_NAME))
	public BHGERegisterResponse checkSSOAvailability(
			@Parameter(description = "Check if SSO ID is available to use", required = true) @RequestBody final BHGERegisterRequest ssoDetails)
	{
		if (ssoDetails != null)
		{
			return bhgeRegisterFacade.checkSSOAvailability(ssoDetails);
		}
		return null;
	}

	/**
	 *
	 */
	@RequestMapping(value = "/fetchSSOForEmail", method = RequestMethod.POST, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	@Operation(operationId = "Fetch SSO IDs with attached with Email ID", security =
	@SecurityRequirement(name = CLIENT_CREDENTIAL_AUTHORIZATION_NAME))
	public BHGERegisterResponse fetchSSOForEmail(
			@Parameter(description = "Fetch SSO IDs with attached with Email ID", required = true) @RequestBody final BHGERegisterRequest ssoDetails)
	{
		if (ssoDetails != null)
		{
			return bhgeRegisterFacade.fetchSSOForEmail(ssoDetails);
		}
		return null;
	}

	/**
	 *
	 */
	@RequestMapping(value = "/getAvailableSSOIds", method = RequestMethod.POST, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	@Operation(operationId = "Get Available SSO IDs", security =
	@SecurityRequirement(name = CLIENT_CREDENTIAL_AUTHORIZATION_NAME))
	public BHGERegisterResponse getAvailableSSOIds(
			@Parameter(description = "Get Available SSO IDs", required = true) @RequestBody final BHGERegisterRequest ssoDetails)
	{
		if (ssoDetails != null)
		{
			return bhgeRegisterFacade.getAvailableSSOIds(ssoDetails);
		}
		return null;
	}

	@RequestMapping(value = "/fetchApplicationDetails", method = RequestMethod.GET, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	@Operation(operationId = "Get Application List", security =
	@SecurityRequirement(name = CLIENT_CREDENTIAL_AUTHORIZATION_NAME))
	public BHGERegisterResponse fetchApplicationDetails(
			@Parameter(description = "Get Application List", required = true) @RequestBody final BHGERegisterRequest ssoDetails)
	{
		if (ssoDetails != null)
		{
			return bhgeRegisterFacade.fetchApplications(ssoDetails.getUserId());
		}
		return null;
	}

	/**
	 *
	 */
	@RequestMapping(value = "/processCustomerData", method = RequestMethod.POST, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	@Operation(operationId = "Process Customer Record in SAP", security =
	@SecurityRequirement(name = CLIENT_CREDENTIAL_AUTHORIZATION_NAME))
	public BHGERegisterResponse executeSAPLookup(
			@Parameter(description = "Get Available SSO IDs", required = true) @RequestBody final BHGERegisterRequest ssoDetails)
	{
		if (ssoDetails != null)
		{
			return bhgeRegisterFacade.executeSAPLookup(ssoDetails);
		}
		return null;
	}


	/**
	 *
	 */
	@RequestMapping(value = "/submit", method = RequestMethod.POST, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	@Operation(operationId = "Submitting data for registration", security =
	@SecurityRequirement(name = CLIENT_CREDENTIAL_AUTHORIZATION_NAME))
	public BHGERegisterResponse submit(
			@Parameter(description = "Submitting data for registration", required = true) @RequestBody final BHGERegisterRequest submitDetails)
	{
		if (submitDetails != null)
		{
			return bhgeRegisterFacade.submitDetails(submitDetails);
		}
		return null;
	}

	@RequestMapping(value = "/ssoAssignment", method = RequestMethod.POST)
	@ResponseBody
	public BHGERegisterResponse ssoAssignment(
			@Parameter(description = "Submitting data for registration", required = true) @RequestBody final BHGERegisterRequest submitDetails)
	{
		if (submitDetails != null)
		{
			return bhgeRegisterFacade.ssoAssignment(submitDetails);//
		}
		return null;
	}

	/**
	 *
	 */
	@RequestMapping(value = "/fetchProductLines", method = RequestMethod.POST, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	@Operation(operationId = "Fetching Product lines for user", security =
	@SecurityRequirement(name = CLIENT_CREDENTIAL_AUTHORIZATION_NAME))
	public BHGERegisterResponse fetchProductLines()
	{
		return null;
	}

	/**
	 * @return the bhgeRegisterFacade
	 */

	public BhgeRegisterFacade getBhgeRegisterFacade()
	{
		return bhgeRegisterFacade;
	}

	/**
	 * @param bhgeRegisterFacade
	 *           the bhgeRegisterFacade to set
	 */
	public void setBhgeRegisterFacade(final BhgeRegisterFacade bhgeRegisterFacade)
	{
		this.bhgeRegisterFacade = bhgeRegisterFacade;
	}

	/**
	 * @return the bhgeManualApprovalFacade
	 */
	public BHGEManualApprovalFacade getBhgeManualApprovalFacade()
	{
		return bhgeManualApprovalFacade;
	}

	/**
	 * @param bhgeManualApprovalFacade
	 *           the bhgeManualApprovalFacade to set
	 */
	public void setBhgeManualApprovalFacade(final BHGEManualApprovalFacade bhgeManualApprovalFacade)
	{
		this.bhgeManualApprovalFacade = bhgeManualApprovalFacade;
	}

}
