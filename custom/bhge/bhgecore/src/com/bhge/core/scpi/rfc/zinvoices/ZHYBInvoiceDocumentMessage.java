package com.bhge.core.scpi.rfc.zinvoices;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Setter;
import lombok.Getter;

import java.util.LinkedList;
import java.util.List;

@Getter
@Setter
public class ZHYBInvoiceDocumentMessage {


    @JacksonXmlElementWrapper(useWrapping = false)
    @JacksonXmlProperty(localName = "item")
    private List<BHGEZInvoiceDocumentMessageItem> items = new LinkedList<>();

    public List<BHGEZInvoiceDocumentMessageItem> getItems() {
        return items;
    }

    public void setItems(List<BHGEZInvoiceDocumentMessageItem> items) {
        this.items = items;
    }
}
