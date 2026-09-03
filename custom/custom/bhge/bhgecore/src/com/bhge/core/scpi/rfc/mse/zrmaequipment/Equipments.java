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
@JacksonXmlRootElement(localName ="ET_EQUIPMENT")
public class Equipments {

	private List<EquipmentItem> items;

    @JacksonXmlProperty(localName="item")
    @JacksonXmlElementWrapper(useWrapping = false)
    public List<EquipmentItem> getItems() {
        return items;
    }

    public void setItems(List<EquipmentItem> items) {
        this.items = items;
    }

    public Equipments() {
        this.items = new LinkedList<>();
    }
}
