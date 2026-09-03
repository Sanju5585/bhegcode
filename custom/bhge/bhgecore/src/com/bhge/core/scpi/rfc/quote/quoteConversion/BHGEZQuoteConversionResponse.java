package com.bhge.core.scpi.rfc.quote.quoteConversion;


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
@JacksonXmlRootElement(localName = "ZHYB_DS_QUOTE_TO_ORDERResponse")
@JsonPropertyOrder({
        "EX_SALESORDER", "T_PARTNER", "T_PRICE", "T_RETURN", "T_SO_ITEM"
})
public class BHGEZQuoteConversionResponse {

    @JacksonXmlProperty(localName = "EX_SALESORDER")
    private String salesOrder;

    @JacksonXmlProperty(localName = "T_PARTNER")
    private BHGEZQuoteConversionPartnerTable partnerTable = new BHGEZQuoteConversionPartnerTable();

    @JacksonXmlProperty(localName = "T_PRICE")
    private BHGEZQuoteConversionPriceTable priceTable = new BHGEZQuoteConversionPriceTable();

    @JacksonXmlProperty(localName = "T_RETURN")
    private BHGEZQuoteConversionReturnTable returnMessages = new BHGEZQuoteConversionReturnTable();

    @JacksonXmlProperty(localName = "T_SO_ITEM")
    private BHGEZQuoteConversionItemTable orderItems = new BHGEZQuoteConversionItemTable();

}
