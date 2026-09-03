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
public class BHGEZInvoiceDetailTrackingItem {
    @JacksonXmlElementWrapper(useWrapping = false)
    @JacksonXmlProperty(localName = "item")
    private List<BHGEZInvoice> items = new LinkedList<>();
}
