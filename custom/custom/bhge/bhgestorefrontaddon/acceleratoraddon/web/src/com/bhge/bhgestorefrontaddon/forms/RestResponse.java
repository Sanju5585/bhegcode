/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 *
 */
package com.bhge.bhgestorefrontaddon.forms;

/**
 * Pojo for 'response' form. This pojo is to capture error or success
 * from the rest api  call.
 */
public class RestResponse {

	public enum STATUS {SUCCESS, ERROR}

	private STATUS status;

	private String message;

	public RestResponse() {
	}

	public RestResponse(STATUS status, String message) {
		this.status = status;
		this.message = message;
	}

	public STATUS getStatus() {
		return status;
	}

	public void setStatus(STATUS status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
