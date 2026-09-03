package com.bhge.core.scpi.rfc.configresponse;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName ="ZhybConfLong")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BHGELongConfigRequest {


    @JacksonXmlProperty(localName="IsGlobal")
    private BHGELongConfigGlobalHeaderRequest isGlobal;

    @JacksonXmlProperty(localName="ItItem")
    private BHGELongConfigItemsRequest itItem;


    public BHGELongConfigGlobalHeaderRequest getIsGlobal() {
        return isGlobal;
    }

    public void setIsGlobal(BHGELongConfigGlobalHeaderRequest isGlobal) {
        this.isGlobal = isGlobal;
    }

    public BHGELongConfigItemsRequest getItItem() {
        this.itItem = itItem == null ? new BHGELongConfigItemsRequest() : itItem;
        return itItem;
    }

    public void setItItem(BHGELongConfigItemsRequest itItem) {
        this.itItem = itItem;
    }

}
