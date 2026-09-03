package com.bhge.register.integration.oidc.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class AddB2BInput
{

	@JsonProperty("directorybranch")
	private String directorybranch;

	@JsonProperty("registeredBy")
	private String registeredBy;

	@JsonProperty("primaryKey")
	private PrimaryKey primaryKey;

	@JsonProperty("updatelist")
	private Updatelist updatelist;

	public AddB2BInput(final String directorybranch, final String registeredBy, /*
																										  * String emailRequired, String uidChangeAllowed,
																										  */
			final PrimaryKey primaryKey, final Updatelist updatelist)
	{
		super();
		this.directorybranch = directorybranch;
		this.registeredBy = registeredBy;
		this.primaryKey = primaryKey;
		this.updatelist = updatelist;
	}

	public AddB2BInput()
	{

	}

	public String getDirectorybranch()
	{
		return directorybranch;
	}

	public void setDirectorybranch(final String directorybranch)
	{
		this.directorybranch = directorybranch;
	}

	public String getRegisteredBy()
	{
		return registeredBy;
	}

	public void setRegisteredBy(final String registeredBy)
	{
		this.registeredBy = registeredBy;
	}

	public PrimaryKey getPrimaryKey()
	{
		return primaryKey;
	}

	public void setPrimaryKey(final PrimaryKey primaryKey)
	{
		this.primaryKey = primaryKey;
	}

	public Updatelist getUpdatelist()
	{
		return updatelist;
	}

	public void setUpdatelist(final Updatelist updatelist)
	{
		this.updatelist = updatelist;
	}

	@Override
	public String toString()
	{
		return "directorybranch:" + directorybranch + ",registeredBy:" + registeredBy + ",primaryKey:" + primaryKey;
	}

}
