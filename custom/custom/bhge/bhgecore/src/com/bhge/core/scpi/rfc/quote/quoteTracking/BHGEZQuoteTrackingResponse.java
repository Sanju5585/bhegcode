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
@JacksonXmlRootElement(localName = "ZHYB_DS_QUOTETRACKINGResponse")
@JsonPropertyOrder({
        "EX_QUOTE_ITEM", "T_MESSAGETABLE", "T_QUOTE_HEADER"
})
public class BHGEZQuoteTrackingResponse {

    @JacksonXmlProperty(localName = "EX_QUOTE_ITEM")
    private BHGEZQuoteTrackingItems quoteItems = new BHGEZQuoteTrackingItems();

    @JacksonXmlProperty(localName = "T_MESSAGETABLE")
    private BHGEZQuoteTrackingResponseReturnTable returnMessages = new BHGEZQuoteTrackingResponseReturnTable();

    @JacksonXmlProperty(localName = "T_QUOTE_HEADER")
    private BHGEZQuoteTrackingResponseHeaderTable quoteHeader = new BHGEZQuoteTrackingResponseHeaderTable();
}
