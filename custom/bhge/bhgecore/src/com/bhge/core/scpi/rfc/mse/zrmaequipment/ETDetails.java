package com.bhge.core.scpi.rfc.mse.zrmaequipment;

import java.util.LinkedList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName ="ET_DETAIL")
public class ETDetails {

	private List<ETDetailItem> items;

    @JacksonXmlProperty(localName="item")
    @JacksonXmlElementWrapper(useWrapping = false)
    public List<ETDetailItem> getItems() {
        return items;
    }

    public void setItems(List<ETDetailItem> items) {
        this.items = items;
    }

    public ETDetails() {
        this.items = new LinkedList<>();
    }
}
