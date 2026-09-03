package com.bhge.core.scpi.rfc.mse;

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
public class MSEMessageTable {

    private List<MSEMessageTableItem> items;

    @JacksonXmlProperty(localName="item")
    @JacksonXmlElementWrapper(useWrapping = false)
    public List<MSEMessageTableItem> getItems() {
        return items;
    }

    public void setItems(List<MSEMessageTableItem> items) {
        this.items = items;
    }

    public MSEMessageTable() {
        this.items = new LinkedList<>();
    }
}
