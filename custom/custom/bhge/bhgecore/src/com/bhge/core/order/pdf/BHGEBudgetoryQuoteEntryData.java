package com.bhge.core.order.pdf;

public class BHGEBudgetoryQuoteEntryData {
    private int itemNo;
    private long quantity;
    private String uom;
    private String description;
    private String discountpercentage;

    public String getDiscountamount() {
        return discountamount;
    }

    public void setDiscountamount(String discountamount) {
        this.discountamount = discountamount;
    }

    public String getDiscountpercentage() {
        return discountpercentage;
    }

    public void setDiscountpercentage(String discountpercentage) {
        this.discountpercentage = discountpercentage;
    }

    private String discountamount;

    public String getLeadtime() {
        return leadtime;
    }

    public void setLeadtime(String leadtime) {
        this.leadtime = leadtime;
    }

    private String leadtime;

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    private String partNumber;

    public String getFullconfigLongNumber() {
        return fullconfigLongNumber;
    }

    public void setFullconfigLongNumber(String fullconfigLongNumber) {
        this.fullconfigLongNumber = fullconfigLongNumber;
    }

    private String fullconfigLongNumber;

    public String getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(String unitPrice) {
        this.unitPrice = unitPrice;
    }

    public int getItemNo() {
        return itemNo;
    }

    public void setItemNo(int itemNo) {
        this.itemNo = itemNo;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public String getUom() {
        return uom;
    }

    public void setUom(String uom) {
        this.uom = uom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getNetTotal() {
        return netTotal;
    }

    public void setNetTotal(String netTotal) {
        this.netTotal = netTotal;
    }

    private String unitPrice;
    private String netTotal;
}
