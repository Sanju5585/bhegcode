package com.bhge.core.order.pdf;

import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "budgetoryQuote")
public class BHGEBudgetoryQuotePdf {
    private String budgetoryQuoteDate;
    private String soldToParty;
    private String estimatedLeadTime;
    private String quoteTo;
    private String incoterms;
    private String quoteCreatorName;
    private String quoteCreatorEmail;
    private String paymentTerms;
    private List<BHGEBudgetoryQuoteEntryData> entryData;
    private String couponAmount;

    @XmlElement
    public String getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(String totalAmount) {
        this.totalAmount = totalAmount;
    }

    private String totalAmount;

    @XmlElement
    public String getQuoteCreatorEmail() {
        return quoteCreatorEmail;
    }

    public void setQuoteCreatorEmail(String quoteCreatorEmail) {
        this.quoteCreatorEmail = quoteCreatorEmail;
    }
    @XmlElement
    public String getQuoteCreatorName() {
        return quoteCreatorName;
    }

    public void setQuoteCreatorName(String quoteCreatorName) {
        this.quoteCreatorName = quoteCreatorName;
    }

    @XmlElement
    public String getIncoterms() {
        return incoterms;
    }

    public void setIncoterms(String incoterms) {
        this.incoterms = incoterms;
    }

    @XmlElement
    public String getQuoteTo() {
        return quoteTo;
    }

    public void setQuoteTo(String quoteTo) {
        this.quoteTo = quoteTo;
    }

    @XmlElement
    public String getEstimatedLeadTime() {
        return estimatedLeadTime;
    }

    public void setEstimatedLeadTime(String estimatedLeadTime) {
        this.estimatedLeadTime = estimatedLeadTime;
    }

    @XmlElement
    public String getSoldToParty() {
        return soldToParty;
    }

    public void setSoldToParty(String soldToParty) {
        this.soldToParty = soldToParty;
    }

    @XmlElement
    public String getBudgetoryQuoteDate() {
        return budgetoryQuoteDate;
    }

    public void setBudgetoryQuoteDate(String budgetoryQuoteDate) {
        this.budgetoryQuoteDate = budgetoryQuoteDate;
    }

    @XmlElement
    public String getPaymentTerms() {
        return paymentTerms;
    }

    public void setPaymentTerms(String paymentTerms) {
        this.paymentTerms = paymentTerms;
    }

    @XmlElement
    public List<BHGEBudgetoryQuoteEntryData> getEntryData() {
        return entryData;
    }

    public void setEntryData(List<BHGEBudgetoryQuoteEntryData> entryData) {
        this.entryData = entryData;
    }


    public String getCouponAmount() {
        return couponAmount;
    }

    public void setCouponAmount(String couponAmount) {
        this.couponAmount = couponAmount;
    }
}
