package com.bhge.core.scpi.rfc.quote.quoteTracking;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BHGEZQuoteTrackingResponseHeader {

    @JacksonXmlProperty(localName = "VBELN")
    private String vbeln;

    @JacksonXmlProperty(localName = "ERDAT")
    private String erdat;

    @JacksonXmlProperty(localName = "ZSTATUS")
    private String zstatus;

    @JacksonXmlProperty(localName = "BSTNK")
    private String bstnk;

    @JacksonXmlProperty(localName = "NETWR")
    private String netwr;

    @JacksonXmlProperty(localName = "WAERK")
    private String waerk;

    @JacksonXmlProperty(localName = "BNDDT")
    private String bnddt;

    @JacksonXmlProperty(localName = "KUNNR")
    private String kunnr;

    @JacksonXmlProperty(localName = "VKORG")
    private String vKorg;

    @JacksonXmlProperty(localName = "VTWEG")
    private String vTweg;

    @JacksonXmlProperty(localName = "SPART")
    private String spart;

    @JacksonXmlProperty(localName = "ZEND_USER_IND")
    private String zEndUserInd;

    @JacksonXmlProperty(localName = "ZSALES_TYPE")
    private String zSalesType;

    @JacksonXmlProperty(localName = "ZCONTACT_NAME")
    private String zContactName;

    @JacksonXmlProperty(localName = "ZCONTACT_EMAIL")
    private String zContactEmail;

    @JacksonXmlProperty(localName = "ZHEAD_REJ_REASON")
    private String zHeadrejReason;

    @JacksonXmlProperty(localName = "SOLD_TO_ADD")
    private String soldToAdd;

    @JacksonXmlProperty(localName = "SHIP_TO_ADD")
    private String shipToAdd;

    @JacksonXmlProperty(localName = "enduseradd")
    private String endUserAdd;

    @JacksonXmlProperty(localName = "END_USER_ADD")
    private String zCsrComments;

    @JacksonXmlProperty(localName = "ZFAST_TRACK")
    private String zFastTrack;

    @JacksonXmlProperty(localName = "Z_CSRCOMMENTS")
    private String comments;

}
