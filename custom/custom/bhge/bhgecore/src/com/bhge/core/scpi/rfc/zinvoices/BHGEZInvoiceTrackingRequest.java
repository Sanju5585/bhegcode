package com.bhge.core.scpi.rfc.zinvoices;

import com.bhge.core.scpi.rfc.quote.quoteTracking.BHGEZQuoteTrackingResponseHeaderTable;
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
@JacksonXmlRootElement(localName = "ZHYB_DS_INVOICE_DETAIL",
        namespace = "urn:sap-com:document:sap:rfc:functions")
@JsonPropertyOrder({
        "COMPANY_CODE", "FROM_DATE", "TO_DATE", "INVOICE_NUMBER", "ET_INVOICES","IT_CUSTOMER"
})
public class BHGEZInvoiceTrackingRequest {

    @JacksonXmlProperty(localName = "COMPANY_CODE")
    private String companyCode;

    @JacksonXmlProperty(localName = "FROM_DATE")
    private String fromDate;

    @JacksonXmlProperty(localName = "TO_DATE")
    private String toDate;

    @JacksonXmlProperty(localName = "INVOICE_NUMBER")
    private String invoiceNumber;

    @JacksonXmlProperty(localName = "ET_INVOICES")
    private BHGEZInvoiceDetailTrackingItem  invoice= new BHGEZInvoiceDetailTrackingItem();
    @JacksonXmlProperty(localName = "IT_CUSTOMER")
    private BHGEZInvoiceCustomerItem customer= new BHGEZInvoiceCustomerItem();

    public String getCompanyCode() {
        return companyCode;
    }

    public void setCompanyCode(String companyCode) {
        this.companyCode = companyCode;
    }

    public String getFromDate() {
        return fromDate;
    }

    public void setFromDate(String fromDate) {
        this.fromDate = fromDate;
    }

    public String getToDate() {
        return toDate;
    }

    public void setToDate(String toDate) {
        this.toDate = toDate;
    }

    public String getInvoiceNumber() {
        return invoiceNumber;
    }

    public void setInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }

    public BHGEZInvoiceDetailTrackingItem getInvoice() {
        return invoice;
    }

    public void setInvoice(BHGEZInvoiceDetailTrackingItem invoice) {
        this.invoice = invoice;
    }

    public BHGEZInvoiceCustomerItem getCustomer() {
        return customer;
    }

    public void setCustomer(BHGEZInvoiceCustomerItem customer) {
        this.customer = customer;
    }
}
