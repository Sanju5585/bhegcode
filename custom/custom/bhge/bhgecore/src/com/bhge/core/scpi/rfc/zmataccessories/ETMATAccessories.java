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
@JacksonXmlRootElement(localName = "ET_MAT_ACCESSORIES")
public class ETMATAccessories {

	private List<ETMATAccessoryItem> items;

	@JacksonXmlProperty(localName = "item")
	@JacksonXmlElementWrapper(useWrapping = false)
	public List<ETMATAccessoryItem> getItems()
	{
		return items;
	}

	public void setItems(final List<ETMATAccessoryItem> items)
	{
		this.items = items;
	}

	public ETMATAccessories()
	{
		this.items = new LinkedList<>();
	}
}
