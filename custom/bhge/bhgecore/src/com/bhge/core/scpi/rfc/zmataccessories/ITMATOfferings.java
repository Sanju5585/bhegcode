package com.bhge.core.scpi.rfc.zmataccessories;

import java.util.LinkedList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;


@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "IT_MAT_OFF")
public class ITMATOfferings {

	private List<ITMATOfferingItem> items;
	
	@JacksonXmlProperty(localName = "item")
	@JacksonXmlElementWrapper(useWrapping = false)
	public List<ITMATOfferingItem> getItems()
	{
		return items;
	}
	
	public void setItems(final List<ITMATOfferingItem> items)
	{
		this.items = items;
	}
	
	public ITMATOfferings()
	{
		this.items = new LinkedList<>();
	}
}
