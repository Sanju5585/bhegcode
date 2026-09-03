package com.bhge.core.scpi.rfc.quote.quoteTracking;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "ZHYB_DS_QUOTETRACKING")
@JsonPropertyOrder({
        "IM_FROM_DATE", "IM_KUNNR", "IM_SPART", "IM_TO_DATE", "IM_VBELN", "IM_VKORG", "IM_VTWEG"
})
public class BHGEZQuoteTrackingRequest {

    @JacksonXmlProperty(localName = "IM_FROM_DATE")
    private String fromDate;

    @JacksonXmlProperty(localName = "IM_KUNNR")
    private String kunnr;

    @JacksonXmlProperty(localName = "IM_SPART")
    private String distribution;

    @JacksonXmlProperty(localName = "IM_TO_DATE")
    private String toDate;

    @JacksonXmlProperty(localName = "IM_VBELN")
    private String quoteCode;

    @JacksonXmlProperty(localName = "IM_VKORG")
    private String salesOrg;

    @JacksonXmlProperty(localName = "IM_VTWEG")
    private String division;

    @JacksonXmlProperty(localName = "T_QUOTE_HEADER")
    private BHGEZQuoteTrackingResponseHeaderTable quoteHeader = new BHGEZQuoteTrackingResponseHeaderTable();
}
