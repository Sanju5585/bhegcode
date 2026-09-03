package com.bhge.core.scpi.rfc.zrmastatus;

import com.bhge.core.scpi.rfc.zmataccessories.ETMATAccessories;
import com.bhge.core.scpi.rfc.zorderhistory.ZOrderHistoryRequest$Item;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;


@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName ="ZHYB_RMA_STATUS")
@JsonPropertyOrder({"CP_FLAG", "FROM_DATE", "PO_NUMBER","RMA_NUM","TO_DATE","ZRAS_ORD_NUM","ET_CUST_NUM","ET_DELIVERY","ET_HEADER_STATUS","ET_ITEM_STATUS","ET_MESSAGETABLE"})
public class ZHYBRmaSTATUSReq {

    @JacksonXmlProperty(localName="CP_FLAG")
    private String cpFlag;

    @JacksonXmlProperty(localName = "FROM_DATE")
    private String from_DATE;

    @JacksonXmlProperty(localName="PO_NUMBER")
    private String poNumber;

    @JacksonXmlProperty(localName="RMA_NUM")
    private String rmaNumber;

    @JacksonXmlProperty(localName="TO_DATE")
    private String toDate;

    @JacksonXmlProperty(localName="ZRAS_ORD_NUM")
    private String zRAOrdNum;
	
	@JacksonXmlProperty(localName = "USER_TYPE")
	private String userType;

	@JacksonXmlProperty(localName = "ET_CUST_NUM")
    private ZRmaStatusRequest$Item cust_NO;

    @JacksonXmlProperty(localName = "ET_DELIVERY")
    private ZRmaStatusRequest$Item etDelivery;

    @JacksonXmlProperty(localName = "ET_HEADER_STATUS")
    private ZRmaStatusRequest$Item etHeaderStatus;

    @JacksonXmlProperty(localName = "ET_ITEM_STATUS")
    private ZRmaStatusRequest$Item etItemStatus;

    @JacksonXmlProperty(localName = "ET_MESSAGETABLE")
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
        return rmaNumber;
    }

    public void setRmaNumber(String rmaNumber) {
        this.rmaNumber = rmaNumber;
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

        this.cust_NO = cust_NO == null ? new ZRmaStatusRequest$Item() : cust_NO;
        return cust_NO;
  }

    public void setCust_NO(ZRmaStatusRequest$Item cust_NO) {
        this.cust_NO = cust_NO;
    }

    public ZRmaStatusRequest$Item getEtDelivery() {
        this.etDelivery = this.etDelivery == null ? new ZRmaStatusRequest$Item() :
                etDelivery;
        return etDelivery;

    }

    public void setEtDelivery(ZRmaStatusRequest$Item etDelivery) {
        this.etDelivery = etDelivery;
    }

    public ZRmaStatusRequest$Item getEtHeaderStatus() {
        this.etHeaderStatus = etHeaderStatus == null ? new ZRmaStatusRequest$Item() : etHeaderStatus;
        return etHeaderStatus;
    }

    public void setEtHeaderStatus(ZRmaStatusRequest$Item etHeaderStatus) {
        this.etHeaderStatus = etHeaderStatus;
    }

    public ZRmaStatusRequest$Item getEtItemStatus() {
        this.etItemStatus = etItemStatus == null ? new ZRmaStatusRequest$Item() : etItemStatus;
        return etItemStatus;
    }

    public void setEtItemStatus(ZRmaStatusRequest$Item etItemStatus) {
        this.etItemStatus = etItemStatus;
    }

    public ZRmaStatusRequest$Item getEt_messageTable() {
        this.et_messageTable = et_messageTable == null ? new ZRmaStatusRequest$Item() : et_messageTable;
        return et_messageTable;
    }

    public void setEt_messageTable(ZRmaStatusRequest$Item et_messageTable) {
        this.et_messageTable = et_messageTable;
    }   

    public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}
}
