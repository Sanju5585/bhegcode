package com.bhge.core.scpi.rfc.quote.quoteTracking;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedList;
import java.util.List;

@Getter
@Setter
public class BHGEZQuoteTrackingResponseReturnTable {

    @JacksonXmlElementWrapper(useWrapping = false)
    @JacksonXmlProperty(localName = "item")
    private List<BHGEZQuoteTrackingResponseReturn> items = new LinkedList<>();
}
