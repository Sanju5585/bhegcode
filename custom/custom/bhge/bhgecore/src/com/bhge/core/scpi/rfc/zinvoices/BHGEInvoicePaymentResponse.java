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
@JacksonXmlRootElement(localName = "ZHYB_DS_INVOICE_POSTResponse",
        namespace = "urn:sap-com:document:sap:rfc:functions")
@JsonPropertyOrder({
        "I_INPUT", "O_MESSAGES"
})
public class BHGEInvoicePaymentResponse {
    @JacksonXmlProperty(localName = "I_INPUT")
    private BHGEZInvoicePaymentInputItem invoicePaymentInputItem;
    @JacksonXmlProperty(localName = "O_MESSAGES")
    private BHGEZInvoicePaymentMessageItem invoicePaymentMessageItem;

    public BHGEZInvoicePaymentInputItem getInvoicePaymentInputItem() {
        return invoicePaymentInputItem;
    }

    public void setInvoicePaymentInputItem(BHGEZInvoicePaymentInputItem invoicePaymentInputItem) {
        this.invoicePaymentInputItem = invoicePaymentInputItem;
    }

    public BHGEZInvoicePaymentMessageItem getInvoicePaymentMessageItem() {
        return invoicePaymentMessageItem;
    }

    public void setInvoicePaymentMessageItem(BHGEZInvoicePaymentMessageItem invoicePaymentMessageItem) {
        this.invoicePaymentMessageItem = invoicePaymentMessageItem;
    }
}
