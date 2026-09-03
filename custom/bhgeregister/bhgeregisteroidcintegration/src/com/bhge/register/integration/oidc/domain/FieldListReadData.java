package com.bhge.register.integration.oidc.domain;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class FieldListReadData
{

	@JsonProperty("field")
	private List<String> field = null;

	public FieldListReadData()
	{

	}

	public FieldListReadData(final List<String> field)
	{
		this.field = field;
	}

	public List<String> getField()
	{
		return field;
	}

	public void setField(final List<String> field)
	{
		this.field = field;
	}

}
