package com.bhge.core.scpi.rfc.quote.quoteCreation;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BHGEQuoteItem {

    // Getters and setters
    @JacksonXmlProperty(localName = "MATERIAL")
    private String material;

    @JacksonXmlProperty(localName = "TARGET_QTY")
    private String targetQty;

    @JacksonXmlProperty(localName = "TARGET_QU")
    private String targetQu;

    @JacksonXmlProperty(localName = "PRODUCT_TYPE")
    private String productType;

    @JacksonXmlProperty(localName = "ITM_NUMBER")
    private String itmNumber;

    @JacksonXmlProperty(localName = "PLANT")
    private String plant;

    @JacksonXmlProperty(localName = "PO_ITM_NO")
    private String poItmNo;

    @JacksonXmlProperty(localName = "DLV_GROUP")
    private String dlvGroup;

    @JacksonXmlProperty(localName = "REASON_REJ")
    private String reasonRej;

    @JacksonXmlProperty(localName = "ITEM_CATEG")
    private String itemCategory;

    @JacksonXmlProperty(localName = "SHORT_TEXT")
    private String shortText;

    @JacksonXmlProperty(localName = "PURCH_NO_C")
    private String purchNoC;

    @JacksonXmlProperty(localName = "PURCH_DATE")
    private String purchDate;

    @JacksonXmlProperty(localName = "CUST_MAT35")
    private String custMat35;

    @JacksonXmlProperty(localName = "INCOTERMS1")
    private String incoterms1;

    @JacksonXmlProperty(localName = "INCOTERMS2")
    private String incoterms2;

    @JacksonXmlProperty(localName = "ZREQ_DATE")
    private String zReqDate;

    @JacksonXmlProperty(localName = "ZITEXT_ZHYB")
    private String zItTextZHYB;

    @JacksonXmlProperty(localName = "ZITEXT_Z020")
    private String zItTextZ020;

    @JacksonXmlProperty(localName = "ZITEXT_BRAND")
    private String zItTextBrand;

    @JacksonXmlProperty(localName = "ZITEXT_QUOTE_RESN")
    private String zItTextQuoteRes;

    @JacksonXmlProperty(localName = "ZITEXT_RESN_REJ")
    private String zItTextResRe;

    @JacksonXmlProperty(localName = "ZITEXT_Z021")
    private String zItTextZ021;

    @JacksonXmlProperty(localName = "ZITEXT_CSR_RESPN")
    private String zItTextCsrRes;

    @JacksonXmlProperty(localName = "ZITEXT_UNSOLICITED")
    private String zItTextUnsolicited;

    @JacksonXmlProperty(localName = "ZI_SALES_TYPE")
    private String zItSalesType;
}
