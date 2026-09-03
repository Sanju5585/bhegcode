package com.bhge.core.scpi.rfc.zinvoices;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;
@Getter
@Setter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "ZHYB_DS_INVOICEDETAILTRACKINGResponse",
        namespace = "urn:sap-com:document:sap:rfc:functions")
@JsonPropertyOrder(
        { "ET_INVOICES", "E_MESSAGE", "IT_CUSTOMER" })
public class BHGEZInvoiceDetailTrackingResponse {
    @JacksonXmlProperty(localName = "ET_INVOICES")
    private BHGEZInvoiceDetailTrackingItem invoice;

    @JacksonXmlProperty(localName = "E_MESSAGE")
    private String message;

    @JacksonXmlProperty(localName = "IT_CUSTOMER")
    private BHGEZInvoiceCustomerItem customer;

    public BHGEZInvoiceDetailTrackingItem getInvoice() {
        return invoice;
    }

    public void setInvoice(BHGEZInvoiceDetailTrackingItem invoice) {
        this.invoice = invoice;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public BHGEZInvoiceCustomerItem getCustomer() {
        return customer;
    }

    public void setCustomer(BHGEZInvoiceCustomerItem customer) {
        this.customer = customer;
    }
}
