package com.bhge.facades.pdf;

import jakarta.xml.bind.annotation.XmlElement;

public class BHGEQuoteEntryData {
    private Integer DSItemCount;
    private String DSProductName;
    private String DSProductCode;
    private String DSProductPrice;
    private Long DSProductQuantity;
    private String DSProductCurrency;
    private String DSProductUnit;


    public Integer getDSItemCount()
    {
        return DSItemCount;
    }
    public void setDSItemCount(final Integer DSItemCount)
    {
        this.DSItemCount = DSItemCount;
    }
    public String getDSProductCurrency() {return DSProductCurrency;}
    public void setDSProductCurrency(final String DSProductCurrency)
    {
        this.DSProductCurrency = DSProductCurrency;
    }
    public String getDSProductUnit()
    {
        return DSProductUnit;
    }
    public void setDSProductUnit(final String DSProductUnit)
    {
        this.DSProductUnit = DSProductUnit;
    }
    public String getDSProductName()
    {
        return DSProductName;
    }
    public void setDSProductName(final String DSProductName)
    {
        this.DSProductName = DSProductName;
    }
    public String getDSProductCode()
    {
        return DSProductCode;
    }
    public void setDSProductCode(final String DSProductCode)
    {
        this.DSProductCode = DSProductCode;
    }
    public String getDSProductPrice() {return DSProductPrice;}
    public void setDSProductPrice(final String DSProductPrice)
    {
        this.DSProductPrice = DSProductPrice;
    }
    public Long getDSProductQuantity() {return DSProductQuantity;}
    public void setDSProductQuantity(final Long DSProductQuantity)
    {
        this.DSProductQuantity = DSProductQuantity;
    }
}
