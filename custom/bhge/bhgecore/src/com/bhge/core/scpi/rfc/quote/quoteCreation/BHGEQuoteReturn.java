package com.bhge.core.scpi.rfc.quote.quoteCreation;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BHGEQuoteReturn {

    // Getters and setters
    @JacksonXmlProperty(localName = "TYPE")
    private String type;

    @JacksonXmlProperty(localName = "ID")
    private String id;

    @JacksonXmlProperty(localName = "NUMBER")
    private String number;

    @JacksonXmlProperty(localName = "MESSAGE")
    private String message;

    @JacksonXmlProperty(localName = "ROW")
    private String row;

    @JacksonXmlProperty(localName = "LOG_NO")
    private String logNo;

    @JacksonXmlProperty(localName = "LOG_MSG_NO")
    private String logMsgNo;

    @JacksonXmlProperty(localName = "MESSAGE_V1")
    private String messageV1;

    @JacksonXmlProperty(localName = "MESSAGE_V2")
    private String messageV2;

    @JacksonXmlProperty(localName = "MESSAGE_V3")
    private String messageV3;

    @JacksonXmlProperty(localName = "MESSAGE_V4")
    private String messageV4;

    @JacksonXmlProperty(localName = "PARAMETER")
    private String parameter;

    @JacksonXmlProperty(localName = "FIELD")
    private String field;

    @JacksonXmlProperty(localName = "SYSTEM")
    private String system;
}
