package com.bhge.core.scpi.rfc.zorderhistory;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "Z_SORDER_HISTORY")
@JsonPropertyOrder({"AUART", "BSTKD", "CP_TYPE", "FROM_DATE", "MATNR", "PSTLZ", "SALES_GRP", "TO_DATE",
        "VBELN", "CUST_NO", "MT_SALES_ORDER_DELIVERY","MT_SALES_ORDER_HEADER", "MT_SALES_ORDER_ITEM", "T_MESSAGETABLE"})
public class ZOrderHistoryRequest {

    @JacksonXmlProperty(localName = "AUART")
    private String auart;

    @JacksonXmlProperty(localName = "BSTKD")
    private String bstkd;

    @JacksonXmlProperty(localName = "CP_TYPE")
    private String cp_TYPE;

    @JacksonXmlProperty(localName = "FROM_DATE")
    private String from_DATE;

    @JacksonXmlProperty(localName = "MATNR")
    private String matnr;

    @JacksonXmlProperty(localName = "PSTLZ")
    private String pstlz;

    @JacksonXmlProperty(localName = "SALES_GRP")
    private String sales_GRP;

    @JacksonXmlProperty(localName = "TO_DATE")
    private String to_DATE;

    @JacksonXmlProperty(localName = "VBELN")
    private String vblen;
	
	@JacksonXmlProperty(localName = "USER_TYPE")
	private String userType;

	@JacksonXmlProperty(localName = "CUST_NO")
    private ZOrderHistoryRequest$Item cust_NO;

    @JacksonXmlProperty(localName = "MT_SALES_ORDER_DELIVERY")
    private ZOrderHistoryRequest$Item mt_SALES_ORDER_DELIVERY;

    @JacksonXmlProperty(localName = "MT_SALES_ORDER_HEADER")
    private ZOrderHistoryRequest$Item mt_SALES_ORDER_HEADER;

    @JacksonXmlProperty(localName = "MT_SALES_ORDER_ITEM")
    private ZOrderHistoryRequest$Item mt_SALES_ORDER_ITEM;

    @JacksonXmlProperty(localName = "T_MESSAGETABLE")
    private ZOrderHistoryRequest$Item t_MESSAGETABLE;

    public String getAuart() {
        return auart;
    }

    public void setAuart(String auart) {
        this.auart = auart;
    }

    public String getBstkd() {
        return bstkd;
    }

    public void setBstkd(String bstkd) {
        this.bstkd = bstkd;
    }

    public String getCp_TYPE() {
        return cp_TYPE;
    }

    public void setCp_TYPE(String cp_TYPE) {
        this.cp_TYPE = cp_TYPE;
    }

    public String getFrom_DATE() {
        return from_DATE;
    }

    public void setFrom_DATE(String from_DATE) {
        this.from_DATE = from_DATE;
    }

    public String getMatnr() {
        return matnr;
    }

    public void setMatnr(String matnr) {
        this.matnr = matnr;
    }

    public String getPstlz() {
        return pstlz;
    }

    public void setPstlz(String pstlz) {
        this.pstlz = pstlz;
    }

    public String getSales_GRP() {
        return sales_GRP;
    }

    public void setSales_GRP(String sales_GRP) {
        this.sales_GRP = sales_GRP;
    }

    public String getTo_DATE() {
        return to_DATE;
    }

    public void setTo_DATE(String to_DATE) {
        this.to_DATE = to_DATE;
    }

    public String getVblen() {
        return vblen;
    }

    public void setVblen(String vblen) {
        this.vblen = vblen;
    }

    public ZOrderHistoryRequest$Item getCust_NO() {
        this.cust_NO = this.cust_NO == null ? new ZOrderHistoryRequest$Item() :
                cust_NO;
        return cust_NO;
    }

    public void setCust_NO(ZOrderHistoryRequest$Item cust_NO) {
        this.cust_NO = cust_NO;
    }

    public ZOrderHistoryRequest$Item getMt_SALES_ORDER_DELIVERY() {

        this.mt_SALES_ORDER_DELIVERY = this.mt_SALES_ORDER_DELIVERY == null ? new ZOrderHistoryRequest$Item() :
                mt_SALES_ORDER_DELIVERY;
        return mt_SALES_ORDER_DELIVERY;
    }

    public void setMt_SALES_ORDER_DELIVERY(ZOrderHistoryRequest$Item mt_SALES_ORDER_DELIVERY) {
        this.mt_SALES_ORDER_DELIVERY = mt_SALES_ORDER_DELIVERY;
    }

    public ZOrderHistoryRequest$Item getMt_SALES_ORDER_HEADER() {

        this.mt_SALES_ORDER_HEADER = this.mt_SALES_ORDER_HEADER == null ? new ZOrderHistoryRequest$Item() :
                mt_SALES_ORDER_HEADER;
        return mt_SALES_ORDER_HEADER;
    }

    public void setMt_SALES_ORDER_HEADER(ZOrderHistoryRequest$Item mt_SALES_ORDER_HEADER) {
        this.mt_SALES_ORDER_HEADER = mt_SALES_ORDER_HEADER;
    }

    public ZOrderHistoryRequest$Item getMt_SALES_ORDER_ITEM() {

        this.mt_SALES_ORDER_ITEM = this.mt_SALES_ORDER_ITEM == null ? new ZOrderHistoryRequest$Item() :
                mt_SALES_ORDER_ITEM;
        return mt_SALES_ORDER_ITEM;
    }

    public void setMt_SALES_ORDER_ITEM(ZOrderHistoryRequest$Item mt_SALES_ORDER_ITEM) {
        this.mt_SALES_ORDER_ITEM = mt_SALES_ORDER_ITEM;
    }

    public ZOrderHistoryRequest$Item getT_MESSAGETABLE() {
        return t_MESSAGETABLE;
    }

    public void setT_MESSAGETABLE(ZOrderHistoryRequest$Item t_MESSAGETABLE) {
        this.t_MESSAGETABLE = t_MESSAGETABLE;
    }
     
    public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}
}
