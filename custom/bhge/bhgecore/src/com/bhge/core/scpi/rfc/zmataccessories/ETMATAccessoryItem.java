package com.bhge.core.scpi.rfc.zmataccessories;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;


@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
@JsonPropertyOrder(
{ "MATNR", "ZZSRV_OFF", "UPMAT" })
public class ETMATAccessoryItem
{

	@JacksonXmlProperty(localName = "MATNR")
	private String materialNumber;
	@JacksonXmlProperty(localName = "ZZSRV_OFF")
	private String serviceOffering;
	@JacksonXmlProperty(localName = "UPMAT")
	private String upMaterial;

	public String getMaterialNumber()
	{
		return materialNumber;
	}

	public void setMaterialNumber(final String materialNumber)
	{
		this.materialNumber = materialNumber;
	}

	public String getServiceOffering()
	{
		return serviceOffering;
	}

	public void setServiceOffering(final String serviceOffering)
	{
		this.serviceOffering = serviceOffering;
	}

	public String getUpMaterial()
	{
		return upMaterial;
	}

	public void setUpMaterial(final String upMaterial)
	{
		this.upMaterial = upMaterial;
	}


}
