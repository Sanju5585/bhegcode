package com.bhge.core.scpi.rfc.quote.quoteCreation;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * This class represents the XML structure for the Quote creation API
 */
@Setter
@Getter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "ZHYB_DS_QUOTECREATE")
@JsonPropertyOrder({
        "IM_EXT_SONUMBER", "IM_QUOTE_HEADER", "T_PARTNER", "T_QUOTE_ITEMS", "T_RETURN"
})
public class BHGEZQuoteCreateRequest {

    @JacksonXmlProperty(localName = "IM_EXT_SONUMBER")
    private String extSonumber;

    @JacksonXmlProperty(localName = "IM_QUOTE_HEADER")
    private BHGEZQuoteCreateRequestHeader quoteHeader = new BHGEZQuoteCreateRequestHeader();

    @JacksonXmlProperty(localName = "T_PARTNER")
    private BHGEQuotePartnerTable partner = new BHGEQuotePartnerTable();

    @JacksonXmlProperty(localName = "T_QUOTE_ITEMS")
    private BHGEQuoteItems quoteItems = new BHGEQuoteItems();

    @JacksonXmlProperty(localName = "T_RETURN")
    private BHGEQuoteReturnTable returnTable = new BHGEQuoteReturnTable();
}
