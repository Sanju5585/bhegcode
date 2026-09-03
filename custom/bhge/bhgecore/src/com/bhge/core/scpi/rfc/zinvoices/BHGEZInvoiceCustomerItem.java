package com.bhge.core.scpi.rfc.zinvoices;

import com.bhge.core.scpi.rfc.quote.quoteTracking.BHGEZQuoteTrackingItem;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedList;
import java.util.List;

@Getter
@Setter
public class BHGEZInvoiceCustomerItem {

    @JacksonXmlElementWrapper(useWrapping = false)
    @JacksonXmlProperty(localName = "item")
    private BHGEZInvoiceCustomer item = new BHGEZInvoiceCustomer();

    public BHGEZInvoiceCustomer getItem() {
        return item;
    }

    public void setItem(BHGEZInvoiceCustomer item) {
        this.item = item;
    }
}
