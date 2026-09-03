package com.bhge.core.scpi.rfc.zinvoices;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonRootName;
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
        "CUSTOMER", "COMPANY_CODE", "DOC_TYPE", "INVOICE_NUMBER","INVOICE_DATE","DUE_DATE","AMOUNT","CURRENCY","STATUS", "PAID_DATE", "PAYMENT_METHOD", "PAYMENT_METHOD_DESCRIPTION", "PAYMENT_TERM", "PAYMENT_TERM_DESCRIPTION"
})
public class BHGEZInvoice {
    @JacksonXmlProperty(localName = "CUSTOMER")
    private String customer;
    @JacksonXmlProperty(localName = "COMPANY_CODE")
    private String companyCode;
    @JacksonXmlProperty(localName = "DOC_TYPE")
    private String docType;
    @JacksonXmlProperty(localName = "INVOICE_NUMBER")
    private String invoiceNumber;
    @JacksonXmlProperty(localName = "INVOICE_DATE")
    private String invoiceDate;
    @JacksonXmlProperty(localName = "DUE_DATE")
    private String dueDate;
    @JacksonXmlProperty(localName = "AMOUNT")

    private String amount;
    @JacksonXmlProperty(localName = "CURRENCY")
    private String currency;
    @JacksonXmlProperty(localName = "STATUS")
    private String status;

    @JacksonXmlProperty(localName = "PAID_DATE")
    private String paidDate;
    @JacksonXmlProperty(localName = "PAYMENT_METHOD")
    private String paymentMethod;
    @JacksonXmlProperty(localName = "PAYMENT_METHOD_DESCRIPTION")
    private String paymentMethodDescription;
    @JacksonXmlProperty(localName = "PAYMENT_TERM")
    private String paymentTerm;

    @JacksonXmlProperty(localName = "PAYMENT_TERM_DESCRIPTION")
    private String paymentTermDescription;

    public String getPaidDate() {
        return paidDate;
    }

    public void setPaidDate(String paidDate) {
        this.paidDate = paidDate;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getPaymentMethodDescription() {
        return paymentMethodDescription;
    }

    public void setPaymentMethodDescription(String paymentMethodDescription) {
        this.paymentMethodDescription = paymentMethodDescription;
    }

    public String getPaymentTerm() {
        return paymentTerm;
    }

    public void setPaymentTerm(String paymentTerm) {
        this.paymentTerm = paymentTerm;
    }

    public String getPaymentTermDescription() {
        return paymentTermDescription;
    }

    public void setPaymentTermDescription(String paymentTermDescription) {
        this.paymentTermDescription = paymentTermDescription;
    }


    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getCompanyCode() {
        return companyCode;
    }

    public void setCompanyCode(String companyCode) {
        this.companyCode = companyCode;
    }

    public String getDocType() {
        return docType;
    }

    public void setDocType(String docType) {
        this.docType = docType;
    }

    public String getInvoiceNumber() {
        return invoiceNumber;
    }

    public void setInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }

    public String getInvoiceDate() {
        return invoiceDate;
    }

    public void setInvoiceDate(String invoiceDate) {
        this.invoiceDate = invoiceDate;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String  amount) {
        this.amount = amount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
