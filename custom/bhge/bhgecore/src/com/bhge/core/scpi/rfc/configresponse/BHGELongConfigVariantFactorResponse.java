package com.bhge.core.scpi.rfc.configresponse;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "VarientFactor")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BHGELongConfigVariantFactorResponse {

    @JacksonXmlProperty(localName = "item")
    @JacksonXmlElementWrapper(useWrapping = false)
    private List<BHGELongConfigVariantFactorResponseItemResponse> item;

    public List<BHGELongConfigVariantFactorResponseItemResponse> getItem() {
        this.item = item == null ? new ArrayList<BHGELongConfigVariantFactorResponseItemResponse>() : item;
        return item;
    }

    public void setItem(List<BHGELongConfigVariantFactorResponseItemResponse> item) {
        this.item = item;
    }


}