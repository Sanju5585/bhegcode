package com.bhge.register.integration.oidc.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class AddB2bOutputDTO
{

	@JsonProperty("StatusCode")
	private String statusCode;

	@JsonProperty("Error Message")
	private String errorMessage;

	@JsonProperty("status")
	private String status;

	@JsonProperty("code")
	private String code;

	@JsonProperty("message")
	private String message;

	@JsonProperty("customMessage")
	private String customMessage;


	public String getStatusCode()
	{
		return statusCode;
	}

	public void setStatusCode(final String statusCode)
	{
		this.statusCode = statusCode;
	}

	public String getErrorMessage()
	{
		return errorMessage;
	}

	public void setErrorMessage(final String errorMessage)
	{
		this.errorMessage = errorMessage;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(final String status)
	{
		this.status = status;
	}

	public String getCode()
	{
		return code;
	}

	public void setCode(final String code)
	{
		this.code = code;
	}

	public String getMessage()
	{
		return message;
	}

	public void setMessage(final String message)
	{
		this.message = message;
	}

	public String getCustomMessage()
	{
		return customMessage;
	}

	public void setCustomMessage(final String customMessage)
	{
		this.customMessage = customMessage;
	}

}
