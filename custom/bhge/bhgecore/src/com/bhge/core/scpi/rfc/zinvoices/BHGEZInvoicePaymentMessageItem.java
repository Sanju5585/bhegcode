package com.bhge.core.scpi.rfc.zinvoices;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedList;
import java.util.List;

@Getter
@Setter
public class BHGEZInvoicePaymentMessageItem {
    @JacksonXmlElementWrapper(useWrapping = false)
    @JacksonXmlProperty(localName = "item")
    private List<BHGEZInvoicePaymentMessage> items = new LinkedList<>();

    public List<BHGEZInvoicePaymentMessage> getItems() {
        return items;
    }

    public void setItems(List<BHGEZInvoicePaymentMessage> items) {
        this.items = items;
    }
}
