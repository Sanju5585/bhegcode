package com.bhge.core.scpi.rfc.zinvoices;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.LinkedList;
import java.util.List;

@Setter
@Getter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class ZHYBInvoiceDocumentItemResponse {
    @JacksonXmlElementWrapper(useWrapping = false)
    @JacksonXmlProperty(localName = "item")
    private List<ZHYBInvoiceDocumentItem> items = new LinkedList<>();

    public List<ZHYBInvoiceDocumentItem> getItems() {
        return items;
    }

    public void setItems(List<ZHYBInvoiceDocumentItem> items) {
        this.items = items;
    }
}
