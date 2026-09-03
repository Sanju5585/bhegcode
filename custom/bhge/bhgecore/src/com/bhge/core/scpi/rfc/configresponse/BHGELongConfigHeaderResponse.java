package com.bhge.core.scpi.rfc.configresponse;


import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "EtResult")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BHGELongConfigHeaderResponse {
    
    private List<BHGELongConfigHeaderItemResponse> item;

    @JacksonXmlProperty(localName = "item")
    @JacksonXmlElementWrapper(useWrapping = false)
	public List<BHGELongConfigHeaderItemResponse> getItem() {
    	 this.item = item == null ? new ArrayList<BHGELongConfigHeaderItemResponse>() : item;
         return item;
	}

	public void setItem(List<BHGELongConfigHeaderItemResponse> item) {
		this.item = item;
	}

    
}
