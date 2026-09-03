package com.bhge.core.scpi.rfc.quote.quoteConversion;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BHGEZQuoteConversionHeader {

    @JacksonXmlProperty(localName = "QUOTATION")
    private String quotation;

    @JacksonXmlProperty(localName = "DOCUMENT_TYPE")
    private String documentType;

    @JacksonXmlProperty(localName = "CONVERSION_INDCTR")
    private String conversionIndCtr;

    @JacksonXmlProperty(localName = "EXT_SONUMBER")
    private String extSoNumber;

    @JacksonXmlProperty(localName = "PO_NUMBER")
    private String poNumber;

    @JacksonXmlProperty(localName = "PO_DATE")
    private String poDate;

    @JacksonXmlProperty(localName = "REQ_DELV_DATE")
    private String reqDelDate;

    @JacksonXmlProperty(localName = "INCOTERMS1")
    private String incoterms1;

    @JacksonXmlProperty(localName = "INCOTERMS2")
    private String incoterms2;

    @JacksonXmlProperty(localName = "CUST_GRP1")
    private String custGrp1;

    @JacksonXmlProperty(localName = "CUST_GRP3")
    private String custGrp3;

    @JacksonXmlProperty(localName = "SHIPPING_REMARKS")
    private String shippingRemarks;

    @JacksonXmlProperty(localName = "SHIP_EMAIL")
    private String shipEmail;

    @JacksonXmlProperty(localName = "INVOICE_EMAIL")
    private String invoiceEmail;

    @JacksonXmlProperty(localName = "SOA_EMAIL")
    private String soaEmail;

    @JacksonXmlProperty(localName = "ISSHIPCOMPLETEORDER")
    private String isShipCompleteOrder;

    @JacksonXmlProperty(localName = "ZSALES_TYPE")
    private String zSalesType;

    @JacksonXmlProperty(localName = "CSR_HELP")
    private String csrHelp;

    @JacksonXmlProperty(localName = "ZH_SALES_TYPE")
    private String zhSalesType;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q1")
    private String zhTextCompQ1;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q2")
    private String zhTextCompQ2;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q3")
    private String zhTextCompQ3;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q4")
    private String zhTextCompQ4;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q5")
    private String zhTextCompQ5;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q6")
    private String zhTextCompQ6;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q7")
    private String zhTextCompQ7;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q8")
    private String zhTextCompQ8;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q9")
    private String zhTextCompQ9;

    @JacksonXmlProperty(localName = "ZHTEXT_COMP_Q4ANS")
    private String zhTextCompQ4ANS;

    @JacksonXmlProperty(localName = "Z_FREIGHT")
    private String zFreight;

    @JacksonXmlProperty(localName = "Z_FREIGHT_TERM")
    private String zFreightTerm;

    @JacksonXmlProperty(localName = "PARTNER_NUMBER")
    private String partnerNumber;

    @JacksonXmlProperty(localName = "CSR_HELP_TEXT")
    private String csrHelpText;

    @JacksonXmlProperty(localName = "Z_TRANSPORTATION")
    private String zTransportation;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C1")
    private String zhTextInstRc1;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C2")
    private String zhTextInstRc2;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C3")
    private String zhTextInstRc3;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C4")
    private String zhTextInstRc4;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C5")
    private String zhTextInstRc5;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C6")
    private String zhTextInstRc6;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C7")
    private String zhTextInstRc7;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C8")
    private String zhTextInstRc8;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C9")
    private String zhTextInstRc9;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C10")
    private String zhTextInstRc10;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C11")
    private String zhTextInstRc11;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C12")
    private String zhTextInstRc12;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C13")
    private String zhTextInstRc13;

    @JacksonXmlProperty(localName = "ZHTEXT_INSTR_C14")
    private String zhTextInstRc14;

    @JacksonXmlProperty(localName = "Z_PLACEHOLDERPART")
    private String zPlaceHolderPart;

    @JacksonXmlProperty(localName = "NUC_FLAG")
    private String nucFlag;

    @JacksonXmlProperty(localName = "GOVT_FLAG")
    private String govtFlag;

    @JacksonXmlProperty(localName = "NUC_OPPTY_FLAG")
    private String nucOpptyFlag;

    @JacksonXmlProperty(localName = "DISC_CODE")
    private String discCode;

    @JacksonXmlProperty(localName = "GOVT_BUYER")
    private String govtBuyer;

    @JacksonXmlProperty(localName = "Z_SPECIAL_INSTRUCTIONS")
    private String zSpecialInstructions;

    @JacksonXmlProperty(localName = "NO_RDD")
    private String noRdd;

    @JacksonXmlProperty(localName = "SHIP_TO_CONTACT")
    private String shipToContact;

    @JacksonXmlProperty(localName = "SHIP_TO_PHONE")
    private String shipToPhone;

    @JacksonXmlProperty(localName = "INVOICE_CONTACT")
    private String invoiceContact;

    @JacksonXmlProperty(localName = "INVOICE_PHONE")
    private String invoicePhone;

    @JacksonXmlProperty(localName = "SOA_CONTACT")
    private String soaContact;

    @JacksonXmlProperty(localName = "SOA_PHONE")
    private String soaPhone;

    @JacksonXmlProperty(localName = "EXPORT_ADDRESS")
    private String exportAddress;

}
