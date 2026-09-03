package com.bhge.core.scpi.rfc.zrmastatus;

import com.bhge.core.scpi.rfc.zrmastatus.ZRmaStatusRequest$Item;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement( localName = "rfc:ZHYB_RMA_STATUS.Response")
@JsonPropertyOrder({"CP_FLAG", "FROM_DATE", "PO_NUMBER","RMA_NUM","TO_DATE","ZRAS_ORD_NUM","CUST_NO","ET_DELIVERY","ET_HEADER_STATUS","ET_ITEM_STATUS","ET_MESSAGETABLE"})
public class ZHYBRmaSTATUSRes {
    @JacksonXmlProperty(localName="CP_FLAG")
    private String cpFlag;

    @JacksonXmlProperty(localName = "FROM_DATE")
    private String from_DATE;

    @JacksonXmlProperty(localName="PO_NUMBER")
    private String poNumber;

    @JacksonXmlProperty(localName="RMA_NUM")
    private String rma_num;

    @JacksonXmlProperty(localName="TO_DATE")
    private String toDate;

    @JacksonXmlProperty(localName="ZRAS_ORD_NUM")
    private String zRAOrdNum;

    @JacksonXmlProperty(localName = "CUST_NO")
    private ZRmaStatusRequest$Item cust_NO;

    @JacksonXmlProperty(localName = "ET_DELIVERY")
    private ZRmaStatusRequest$Item et_DELIVERY;

    @JacksonXmlProperty(localName = "ET_HEADER_STATUS")
    private ZRmaStatusRequest$Item et_HEADER_STATUS;

    @JacksonXmlProperty(localName = "ET_ITEM_STATUS")
    private ZRmaStatusRequest$Item et_ITEM_STATUS;

    @JacksonXmlProperty(localName="ET_MESSAGETABLE")
    private ZRmaStatusRequest$Item et_messageTable;


    public String getCpFlag() {
        return cpFlag;
    }

    public void setCpFlag(String cpFlag) {
        this.cpFlag = cpFlag;
    }

    public String getFrom_DATE() {
        return from_DATE;
    }

    public void setFrom_DATE(String from_DATE) {
        this.from_DATE = from_DATE;
    }

    public String getPoNumber() {
        return poNumber;
    }

    public void setPoNumber(String poNumber) {
        this.poNumber = poNumber;
    }

    public String getRmaNumber() {
        return rma_num;
    }

    public void setRmaNumber(String rma_num) {
        this.rma_num = rma_num;
    }

    public String getToDate() {
        return toDate;
    }

    public void setToDate(String toDate) {
        this.toDate = toDate;
    }

    public String getzRAOrdNum() {
        return zRAOrdNum;
    }

    public void setzRAOrdNum(String zRAOrdNum) {
        this.zRAOrdNum = zRAOrdNum;
    }

    public ZRmaStatusRequest$Item getCust_NO() {
        return cust_NO;
    }

    public void setCust_NO(ZRmaStatusRequest$Item cust_NO) {
        this.cust_NO = cust_NO;
    }

    public ZRmaStatusRequest$Item getEt_DELIVERY() {
        return et_DELIVERY;
    }

    public void setEt_DELIVERY(ZRmaStatusRequest$Item et_DELIVERY) {
        this.et_DELIVERY = et_DELIVERY;
    }

    public ZRmaStatusRequest$Item getEt_HEADER_STATUS() {
        return et_HEADER_STATUS;
    }

    public void setEt_HEADER_STATUS(ZRmaStatusRequest$Item et_HEADER_STATUS) {
        this.et_HEADER_STATUS = et_HEADER_STATUS;
    }

    public ZRmaStatusRequest$Item getEt_ITEM_STATUS() {
        return et_ITEM_STATUS;
    }

    public void setEt_ITEM_STATUS(ZRmaStatusRequest$Item et_ITEM_STATUS) {
        this.et_ITEM_STATUS = et_ITEM_STATUS;
    }

    public ZRmaStatusRequest$Item getEt_messageTable() {
        return et_messageTable;
    }

    public void setEt_messageTable(ZRmaStatusRequest$Item et_messageTable) {
        this.et_messageTable = et_messageTable;
    }


}
