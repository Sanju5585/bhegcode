package com.bhge.core.scpi.rfc.quote.quoteTracking;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BHGEZQuoteTrackingItemPrice {

    @JacksonXmlProperty(localName = "STUNR")
    private String stunr;

    @JacksonXmlProperty(localName = "ZAEHK")
    private String zaehk;

    @JacksonXmlProperty(localName = "KSCHL")
    private String kschl;

    @JacksonXmlProperty(localName = "WAERS")
    private String waers;

    @JacksonXmlProperty(localName = "KPEIN")
    private String kpein;

    @JacksonXmlProperty(localName = "KMEIN")
    private String kmein;

    @JacksonXmlProperty(localName = "KRECH")
    private String krech;

    @JacksonXmlProperty(localName = "KINAK")
    private String kinak;

    @JacksonXmlProperty(localName = "KBETR")
    private String kbetr;

    @JacksonXmlProperty(localName = "KWERT")
    private String kwert;
}
