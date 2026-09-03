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
        "CUSTOMER", "COMPANY_CODE", "INVOICE_NUMBER","CREDIT_CARD_TOKEN","AMOUNT"
})
public class BHGEZInvoicePayment {
    @JacksonXmlProperty(localName = "CUSTOMER")
    private String customer;
    @JacksonXmlProperty(localName = "COMPANY_CODE")
    private String companyCode;
    @JacksonXmlProperty(localName = "INVOICE_NUMBER")
    private String invoiceNumber;
    @JacksonXmlProperty(localName = "CREDIT_CARD_TOKEN")
    private String creditCardToken;
    @JacksonXmlProperty(localName = "AMOUNT")
    private Double amount;

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

    public String getInvoiceNumber() {
        return invoiceNumber;
    }

    public void setInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }

    public String getCreditCardToken() {
        return creditCardToken;
    }

    public void setCreditCardToken(String creditCardToken) {
        this.creditCardToken = creditCardToken;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}
