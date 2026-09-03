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
@JacksonXmlRootElement(localName ="ET_MYEQUIPMENT")
public class MyEquipments {

    private List<MyEquipmentItem> items;

    @JacksonXmlProperty(localName="item")
    @JacksonXmlElementWrapper(useWrapping = false)
    public List<MyEquipmentItem> getItems() {
        return items;
    }

    public void setItems(List<MyEquipmentItem> items) {
        this.items = items;
    }

    public MyEquipments() {
        this.items = new LinkedList<>();
    }
}
