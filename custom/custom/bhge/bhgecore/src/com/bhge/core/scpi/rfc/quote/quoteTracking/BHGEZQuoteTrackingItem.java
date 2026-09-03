package com.bhge.core.scpi.rfc.quote.quoteTracking;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BHGEZQuoteTrackingItem {

    @JacksonXmlProperty(localName = "VBELN")
    private String vbeln;

    @JacksonXmlProperty(localName = "POSNR")
    private String posnr;

    @JacksonXmlProperty(localName = "MATNR")
    private String matnr;

    @JacksonXmlProperty(localName = "ARKTX")
    private String arktx;

    @JacksonXmlProperty(localName = "KWMENG")
    private String kwmeng;

    @JacksonXmlProperty(localName = "ZIEME")
    private String zieme;

    @JacksonXmlProperty(localName = "NETWR")
    private String netwr;

    @JacksonXmlProperty(localName = "WAERK")
    private String waerk;

    @JacksonXmlProperty(localName = "EDATU")
    private String edatu;

    @JacksonXmlProperty(localName = "KDMAT")
    private String kdmat;

    @JacksonXmlProperty(localName = "ZITEM_STATUS")
    private String zItemStatus;

    @JacksonXmlProperty(localName = "ZREJ_REASON_TXT")
    private String zRejReasonTxt;

    @JacksonXmlProperty(localName = "ZO_PARTNER_NAME")
    private String zoPartnerName;

    @JacksonXmlProperty(localName = "SORDER_NUMBER")
    private String sOrderNum;

    @JacksonXmlProperty(localName = "ZSERIAL")
    private String zSerial;

    @JacksonXmlProperty(localName = "ZADD_COMMENTS")
    private String zAddComments;

    @JacksonXmlProperty(localName = "ZDELCO")
    private String zDelco;

    @JacksonXmlProperty(localName = "ZNEW_DELV_DATE")
    private String zNewDelDate;

    @JacksonXmlProperty(localName = "COND")
    private BHGEZQuoteTrackingItemPriceTable prices= new BHGEZQuoteTrackingItemPriceTable();
}
