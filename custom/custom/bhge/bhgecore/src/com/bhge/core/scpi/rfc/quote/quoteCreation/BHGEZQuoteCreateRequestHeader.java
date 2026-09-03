package com.bhge.core.scpi.rfc.quote.quoteCreation;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BHGEZQuoteCreateRequestHeader {

    // Getters and setters
    @JacksonXmlProperty(localName = "DOC_NUMBER")
    private String docNumber;

    @JacksonXmlProperty(localName = "DOC_TYPE")
    private String docType;

    @JacksonXmlProperty(localName = "SALES_ORG")
    private String salesOrg;

    @JacksonXmlProperty(localName = "DISTR_CHAN")
    private String distrChan;

    @JacksonXmlProperty(localName = "DIVISION")
    private String division;

    @JacksonXmlProperty(localName = "CUST_GRP3")
    private String custGrp3;

    @JacksonXmlProperty(localName = "ZH_SALES_TYPE")
    private String zhSalesType;

    @JacksonXmlProperty(localName = "PURCH_NO_C")
    private String purchNoC;

    @JacksonXmlProperty(localName = "PURCH_DATE")
    private String purchDate;

    @JacksonXmlProperty(localName = "REQ_DATE_H")
    private String reqDateH;

    @JacksonXmlProperty(localName = "QT_VALID_F")
    private String quoteValidFrom;

    @JacksonXmlProperty(localName = "QT_VALID_T")
    private String quoteValidTo;

    @JacksonXmlProperty(localName = "INCOTERMS1")
    private String incoterms1;

    @JacksonXmlProperty(localName = "INCOTERMS2")
    private String incoterms2;

    @JacksonXmlProperty(localName = "VERSION")
    private String version;

    @JacksonXmlProperty(localName = "ZHTEXT_Z034")
    private String zTextZ034;

    @JacksonXmlProperty(localName = "ZUSER_STATUS")
    private String userStatus;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q1")
    private String zTextCompQ1;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q2")
    private String zTextCompQ2;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q3")
    private String zTextCompQ3;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q4")
    private String zTextCompQ4;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q5")
    private String zTextCompQ5;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q6")
    private String zTextCompQ6;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q7")
    private String zTextCompQ7;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q8")
    private String zTextCompQ8;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q9")
    private String zTextCompQ9;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q4ANS")
    private String zTextCompQ4ANS;

    @JacksonXmlProperty(localName = "ZHTEXT_CSR_HELP")
    private String zTextCsrHelp;

    @JacksonXmlProperty(localName = "ZHTEXT_NUCLEAR_CHECK")
    private String zTextNuclearCheck;

    @JacksonXmlProperty(localName = "ZFAST_TRACK")
    private String zFastTrack;

    @JacksonXmlProperty(localName = "QUOTE_EMAIL")
    private String quoteEmail;

    @JacksonXmlProperty(localName = "QUOTE_CONTACT")
    private String quoteContact;

    @JacksonXmlProperty(localName = "QUOTE_PHONE")
    private String quotePhone;

    @JacksonXmlProperty(localName = "EXPORT_ADDRESS")
    private String exportAddress;
}
