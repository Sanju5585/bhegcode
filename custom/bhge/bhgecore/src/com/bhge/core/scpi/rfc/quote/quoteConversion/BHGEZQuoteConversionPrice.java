package com.bhge.core.scpi.rfc.quote.quoteConversion;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BHGEZQuoteConversionPrice {

    @JacksonXmlProperty(localName = "POSNR")
    private String posNr;

    @JacksonXmlProperty(localName = "COND_TYPE")
    private String condType;

    @JacksonXmlProperty(localName = "COND_VALUE")
    private String condValue;

    @JacksonXmlProperty(localName = "COND_CURR")
    private String condCurr;

    @JacksonXmlProperty(localName = "DISC_REASON")
    private String discountReason;

    @JacksonXmlProperty(localName = "VOUCHER_CODE")
    private String voucherCode;

}
