package com.bhge.core.scpi.rfc.zinvoices;

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
@JacksonXmlRootElement(localName = "item")
@JsonPropertyOrder({
        "SIGN", "OPTION", "LOW", "HIGH"
})
public class BHGEZInvoiceCustomer {
    @JacksonXmlProperty(localName = "SIGN")
    private String sign;

    @JacksonXmlProperty(localName = "OPTION")
    private String option;

    @JacksonXmlProperty(localName = "LOW")
    private String customerNumber;

    @JacksonXmlProperty(localName = "HIGH")
    private String high;

    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign;
    }

    public String getOption() {
        return option;
    }

    public void setOption(String option) {
        this.option = option;
    }

    public String getCustomerNumber() {
        return customerNumber;
    }

    public void setCustomerNumber(String customerNumber) {
        this.customerNumber = customerNumber;
    }

    public String getHigh() {
        return high;
    }

    public void setHigh(String high) {
        this.high = high;
    }
}
