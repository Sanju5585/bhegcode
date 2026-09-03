package com.bhge.register.integration.oidc.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class ReadData
{

	@JsonProperty("directoryBranch")
	private String directoryBranch;

	@JsonProperty("permitAbbreviatedRecords")
	private String permitAbbreviatedRecords;

	@JsonProperty("abbreviatedFieldList")
	private AbbreviatedFieldListReadData abbreviatedFieldList;

	@JsonProperty("primaryKey")
	private PrimaryKeyReadData primaryKeyReadData;

	@JsonProperty("fieldList")
	private FieldListReadData fieldList;

	public ReadData()
	{

	}

	public ReadData(final String directoryBranch, final String permitAbbreviatedRecords,
			final AbbreviatedFieldListReadData abbreviatedFieldList, final PrimaryKeyReadData primaryKeyReadData,
			final FieldListReadData fieldList)
	{
		this.directoryBranch = directoryBranch;
		this.permitAbbreviatedRecords = permitAbbreviatedRecords;
		this.abbreviatedFieldList = abbreviatedFieldList;
		this.primaryKeyReadData = primaryKeyReadData;
		this.fieldList = fieldList;
	}


	public String getDirectoryBranch()
	{
		return directoryBranch;
	}

	public void setDirectoryBranch(final String directoryBranch)
	{
		this.directoryBranch = directoryBranch;
	}

	public String getPermitAbbreviatedRecords()
	{
		return permitAbbreviatedRecords;
	}

	public void setPermitAbbreviatedRecords(final String permitAbbreviatedRecords)
	{
		this.permitAbbreviatedRecords = permitAbbreviatedRecords;
	}

	public AbbreviatedFieldListReadData getAbbreviatedFieldList()
	{
		return abbreviatedFieldList;
	}

	public void setAbbreviatedFieldList(final AbbreviatedFieldListReadData abbreviatedFieldList)
	{
		this.abbreviatedFieldList = abbreviatedFieldList;
	}

	public PrimaryKeyReadData getPrimaryKey()
	{
		return primaryKeyReadData;
	}

	public void setPrimaryKey(final PrimaryKeyReadData primaryKey)
	{
		this.primaryKeyReadData = primaryKey;
	}

	public FieldListReadData getFieldList()
	{
		return fieldList;
	}

	public void setFieldList(final FieldListReadData fieldList)
	{
		this.fieldList = fieldList;
	}

}
