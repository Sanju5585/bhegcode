package com.bhge.register.integration.oidc.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class PrimaryKey
{

	@JsonProperty("uid")
	private String uid;

	public PrimaryKey(final String uid)
	{
		this.uid = uid;
	}

	public PrimaryKey()
	{

	}

	public String getUid()
	{
		return uid;
	}

	public void setUid(final String uid)
	{
		this.uid = uid;
	}

	@Override
	public String toString()
	{
		return "uid:" + uid;
	}
}
