/**
 *
 */
package com.bhge.core.scpi.rfc.zmataccessories;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;


@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "ZHYB_MAT_ACCESSORIES")
@JsonPropertyOrder(
{ "ET_MAT_ACCESSORIES", "IT_MAT_OFF" })
public class ZHYBMatAccessoriesRequest
{

	@JacksonXmlProperty(localName = "ET_MAT_ACCESSORIES")
	private ETMATAccessories accessories;

	@JacksonXmlProperty(localName = "IT_MAT_OFF")
	private ITMATOfferings itMatOffering;

	public ETMATAccessories getAccessories()
	{
		this.accessories = accessories == null ? new ETMATAccessories() : accessories;
		return accessories;
	}

	public void setAccessories(final ETMATAccessories accessories)
	{
		this.accessories = accessories;
	}

	public ITMATOfferings getItMatOffering()
	{
		this.itMatOffering = itMatOffering == null ? new ITMATOfferings() : itMatOffering;
		return itMatOffering;
	}

	public void setItMatOffering(final ITMATOfferings itMatOffering)
	{
		this.itMatOffering = itMatOffering;
	}


}
