package com.bhge.core.scpi.rfc.quote.quoteConversion;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BHGEZQuoteConversionPartner {

    @JacksonXmlProperty(localName = "PARTNER_NUMBER")
    private String partnerNumber;

    @JacksonXmlProperty(localName = "PARTNER_FUNCTION")
    private String partnerFunction;

    @JacksonXmlProperty(localName = "STREET")
    private String street;

    @JacksonXmlProperty(localName = "STREET2")
    private String street2;

    @JacksonXmlProperty(localName = "CITY")
    private String city;

    @JacksonXmlProperty(localName = "STATE")
    private String state;

    @JacksonXmlProperty(localName = "ZIP")
    private String zip;

    @JacksonXmlProperty(localName = "SAVE_FOR_FUTURE")
    private String saveForFuture;

    @JacksonXmlProperty(localName = "COMP_NAME")
    private String compName;

    @JacksonXmlProperty(localName = "DELIV_POINT")
    private String deliveryPoint;

    @JacksonXmlProperty(localName = "COUNTRY")
    private String country;

    @JacksonXmlProperty(localName = "ZNEWUSER_FLAG")
    private String newUserFlag;

    @JacksonXmlProperty(localName = "NAME_1")
    private String name1;

    @JacksonXmlProperty(localName = "NAME_2")
    private String name2;

    @JacksonXmlProperty(localName = "REGION")
    private String region;

    @JacksonXmlProperty(localName = "TELEPHONE")
    private String telephone;
}
