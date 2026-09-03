package com.bhge.core.scpi.rfc.quote.quoteConversion;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BHGEZQuoteConversionItem {

    @JacksonXmlProperty(localName = "QUOT_NUMBER")
    private String quotNumber;

    @JacksonXmlProperty(localName = "ITM_NUMBER")
    private String itmNumber;

    @JacksonXmlProperty(localName = "MATERIAL")
    private String material;

    @JacksonXmlProperty(localName = "REQ_DELV_DATE")
    private String servDate;

}
