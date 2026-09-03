package com.bhge.core.scpi.rfc.mse.hist.req;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;

import java.util.LinkedList;
import java.util.List;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName ="T_MESSAGETABLE")
public class MSEHistETDetail {

    private List<MSEHistETDetailItem> items;

    @JacksonXmlProperty(localName="item")
    @JacksonXmlElementWrapper(useWrapping = false)
    public List<MSEHistETDetailItem> getItems() {
        return items;
    }

    public void setItems(List<MSEHistETDetailItem> items) {
        this.items = items;
    }

    public MSEHistETDetail() {
        this.items = new LinkedList<>();
    }
}
