package com.bhge.core.scpi.rfc.zorderhistory;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
@JsonPropertyOrder({"ORDER"})
public class    MTSalesOrderDelivery$Item {

    @JacksonXmlProperty(localName = "ORDER")
    private String order;

    @JacksonXmlProperty(localName = "ORDER_LINE")
    private String order_LINE;

    @JacksonXmlProperty(localName = "DELIVERY")
    private String delivery;

    @JacksonXmlProperty(localName = "DELIVERY_LINE")
    private String delivery_LINE;

    @JacksonXmlProperty(localName = "QUAN")
    private String quan;

    @JacksonXmlProperty(localName = "ACT_SHP_DT")
    private String act_SHP_DT;

    @JacksonXmlProperty(localName = "STATUS")
    private String status;

    @JacksonXmlProperty(localName = "CARRIER")
    private String carrier;

    @JacksonXmlProperty(localName = "TRACKING_NO")
    private String tracking_NO;

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public String getOrder_LINE() {
        return order_LINE;
    }

    public void setOrder_LINE(String order_LINE) {
        this.order_LINE = order_LINE;
    }

    public String getDelivery() {
        return delivery;
    }

    public void setDelivery(String delivery) {
        this.delivery = delivery;
    }

    public String getDelivery_LINE() {
        return delivery_LINE;
    }

    public void setDelivery_LINE(String delivery_LINE) {
        this.delivery_LINE = delivery_LINE;
    }

    public String getQuan() {
        return quan;
    }

    public void setQuan(String quan) {
        this.quan = quan;
    }

    public String getAct_SHP_DT() {
        return act_SHP_DT;
    }

    public void setAct_SHP_DT(String act_SHP_DT) {
        this.act_SHP_DT = act_SHP_DT;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCarrier() {
        return carrier;
    }

    public void setCarrier(String carrier) {
        this.carrier = carrier;
    }

    public String getTracking_NO() {
        return tracking_NO;
    }

    public void setTracking_NO(String tracking_NO) {
        this.tracking_NO = tracking_NO;
    }
}
