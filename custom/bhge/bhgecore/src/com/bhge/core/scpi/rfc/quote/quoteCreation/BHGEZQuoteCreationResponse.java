package com.bhge.core.scpi.rfc.quote.quoteCreation;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlType;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(
        localName = "ZHYB_DS_QUOTECREATEResponse",
        namespace = "urn:sap-com:document:sap:rfc:functions"
)
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
        "EX_SALESDOCUMENT",
        "T_PARTNER",
        "T_QUOTE_ITEMS",
        "T_RETURN"
})
public class BHGEZQuoteCreationResponse {

    @JacksonXmlProperty(localName = "EX_SALESDOCUMENT")
    private String salesDocument;

    @JacksonXmlProperty(localName = "T_PARTNER")
    private BHGEQuotePartnerTable partnerTable;

    @JacksonXmlProperty(localName = "T_QUOTE_ITEMS")
    private BHGEQuoteItems quoteItems;

    @JacksonXmlProperty(localName = "T_RETURN")
    private BHGEQuoteReturnTable returnTable;
}