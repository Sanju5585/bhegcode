package com.bhge.core.scpi.rfc.configresponse;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "ItemOut")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BHGELongConfigItemLabelResponse {

    private List<BHGELongConfigItemResponse> item;

    @JacksonXmlProperty(localName = "item")
    @JacksonXmlElementWrapper(useWrapping = false)
	public List<BHGELongConfigItemResponse> getItem() {
    	this.item = item == null ? new ArrayList<BHGELongConfigItemResponse>() : item;
        return item;
	}

	public void setItem(List<BHGELongConfigItemResponse> item) {
		this.item = item;
	}
    
}
