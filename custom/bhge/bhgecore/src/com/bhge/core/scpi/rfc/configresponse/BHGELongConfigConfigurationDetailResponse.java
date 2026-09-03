package com.bhge.core.scpi.rfc.configresponse;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "Configurationdetails")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BHGELongConfigConfigurationDetailResponse {

    private List<BHGELongConfigConfigurationDetailItemResponse> item;

    @JacksonXmlProperty(localName = "item")
    @JacksonXmlElementWrapper(useWrapping = false)
	public List<BHGELongConfigConfigurationDetailItemResponse> getItem() {
		this.item = item == null ? new ArrayList<BHGELongConfigConfigurationDetailItemResponse>() : item;
        return item;
	}

	public void setItem(List<BHGELongConfigConfigurationDetailItemResponse> item) {
		this.item = item;
	}

   
}
