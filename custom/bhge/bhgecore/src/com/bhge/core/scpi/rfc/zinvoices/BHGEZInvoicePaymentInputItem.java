package com.bhge.core.scpi.rfc.zinvoices;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedList;
import java.util.List;

@Getter
@Setter
public class BHGEZInvoicePaymentInputItem {
    @JacksonXmlElementWrapper(useWrapping = false)
    @JacksonXmlProperty(localName = "item")
    private List<BHGEZInvoicePayment> items = new LinkedList<>();

    public List<BHGEZInvoicePayment> getItems() {
        return items;
    }

    public void setItems(List<BHGEZInvoicePayment> items) {
        this.items = items;
    }
}

