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
@JacksonXmlRootElement(localName = "ZHYB_DS_INVOICE_POST",
        namespace = "urn:sap-com:document:sap:rfc:functions")
@JsonPropertyOrder({
        "I_INPUT", "O_MESSAGES"
})
public class BHGEInvoicePaymentRequest {
    @JacksonXmlProperty(localName = "I_INPUT")
    private BHGEZInvoicePaymentInputItem input;
    @JacksonXmlProperty(localName = "O_MESSAGES")
    private BHGEZInvoicePaymentMessageItem message;

    public BHGEZInvoicePaymentInputItem getInput() {
        return input;
    }

    public void setInput(BHGEZInvoicePaymentInputItem input) {
        this.input = input;
    }

    public BHGEZInvoicePaymentMessageItem getMessage() {
        return message;
    }

    public void setMessage(BHGEZInvoicePaymentMessageItem message) {
        this.message = message;
    }
}

