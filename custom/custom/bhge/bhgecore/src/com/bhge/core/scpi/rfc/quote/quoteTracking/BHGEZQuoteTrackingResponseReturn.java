package com.bhge.core.scpi.rfc.quote.quoteTracking;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BHGEZQuoteTrackingResponseReturn {

    @JacksonXmlProperty(localName = "type")
    private String type;

    @JacksonXmlProperty(localName = "id")
    private String id;

    @JacksonXmlProperty(localName = "number")
    private String number;

    @JacksonXmlProperty(localName = "message")
    private String message;

    @JacksonXmlProperty(localName = "logno")
    private String logNo;

    @JacksonXmlProperty(localName = "logmsgno")
    private String logMsgNo;

    @JacksonXmlProperty(localName = "messagev1")
    private String message1;

    @JacksonXmlProperty(localName = "messagev2")
    private String message2;

    @JacksonXmlProperty(localName = "messagev3")
    private String message3;

    @JacksonXmlProperty(localName = "messagev4")
    private String message4;

    @JacksonXmlProperty(localName = "parameter")
    private String parameter;

    @JacksonXmlProperty(localName = "row")
    private String row;

    @JacksonXmlProperty(localName = "field")
    private String field;

    @JacksonXmlProperty(localName = "system")
    private String system;
}
