package com.bhge.core.scpi.rfc.quote.quoteCreation;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BHGEQuotePartner {

    @JacksonXmlProperty(localName = "PARTN_ROLE")
    private String partnRole;

    @JacksonXmlProperty(localName = "PARTN_NUMB")
    private String partnNumb;

    @JacksonXmlProperty(localName = "NAME_1")
    private String name1;

    @JacksonXmlProperty(localName = "NAME_2")
    private String name2;

    @JacksonXmlProperty(localName = "NAME_3")
    private String name3;

    @JacksonXmlProperty(localName = "STREET")
    private String street;

    @JacksonXmlProperty(localName = "COUNTRY")
    private String country;

    @JacksonXmlProperty(localName = "POSTL_CODE")
    private String postlCode;

    @JacksonXmlProperty(localName = "CITY")
    private String city;

    @JacksonXmlProperty(localName = "REGION")
    private String region;

    @JacksonXmlProperty(localName = "TELEPHONE")
    private String telephone;

    @JacksonXmlProperty(localName = "ZNEWUSER_FLAG")
    private String znewuserFlag;

    @JacksonXmlProperty(localName = "EMAIL")
    private String email;
}
