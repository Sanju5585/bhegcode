package com.bhge.core.scpi.rfc.configresponse;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "ConfigurationData")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BHGELongConfigConfigurationDataResponse {

    private BHGELongConfigConfigurationDataItemResponse item;

    @JacksonXmlProperty(localName = "item")
    @JacksonXmlElementWrapper(useWrapping = false)
	public BHGELongConfigConfigurationDataItemResponse getItem() {
		this.item = item == null ? new BHGELongConfigConfigurationDataItemResponse() : item;
        return item;
	}

	public void setItem(BHGELongConfigConfigurationDataItemResponse item) {
		this.item = item;
	}

   
}
