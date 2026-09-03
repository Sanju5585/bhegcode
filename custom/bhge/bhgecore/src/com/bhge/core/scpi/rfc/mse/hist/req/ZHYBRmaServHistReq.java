package com.bhge.core.scpi.rfc.mse.hist.req;

import com.bhge.core.scpi.rfc.mse.MSEMessageTable;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName ="ZHYB_RMA_SERV_HIST")
@JsonPropertyOrder({"CP_FLAG", "CUSTOMER", "ET_DETAIL", "T_MESSAGETABLE"})
public class ZHYBRmaServHistReq {

    @JacksonXmlProperty(localName="CP_FLAG")
    private String cpFlag;

    @JacksonXmlProperty(localName="CUSTOMER")
    private String customer;

    @JacksonXmlProperty(localName="ET_DETAIL")
    private MSEHistETDetail mSEHistETDetail;

    @JacksonXmlProperty(localName="T_MESSAGETABLE")
    private MSEMessageTable messageTable;

    public String getCpFlag() {
        return cpFlag;
    }

    public void setCpFlag(String cpFlag) {
        this.cpFlag = cpFlag;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public MSEHistETDetail getmSEHistETDetail() {
        this.mSEHistETDetail =  mSEHistETDetail == null ? new MSEHistETDetail() : mSEHistETDetail;
        return mSEHistETDetail;
    }

    public void setmSEHistETDetail(MSEHistETDetail mSEHistETDetail) {
        this.mSEHistETDetail = mSEHistETDetail;
    }

    public MSEMessageTable getMessageTable() {
        this.messageTable =  messageTable == null ? new MSEMessageTable() : messageTable;
        return messageTable;
    }

    public void setMessageTable(MSEMessageTable messageTable) {
        this.messageTable = messageTable;
    }
}
