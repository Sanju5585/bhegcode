package com.bhge.core.scpi.rfc.mse.hist.req;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

public class MSEHistETDetailItem {

    @JacksonXmlProperty(localName="INDEX_NO")
    private String indexNo;
    @JacksonXmlProperty(localName="NOTIFICATION")
    private String notification;
    @JacksonXmlProperty(localName="RMA_CREATED_ON")
    private String rmaCreatedOn;
    @JacksonXmlProperty(localName="RETURNED_ON")
    private String returnedOn;
    @JacksonXmlProperty(localName="SERVICE")
    private String service;
    @JacksonXmlProperty(localName="PART_NUMBER")
    private String partNumber;
    @JacksonXmlProperty(localName="SERIAL_NUMBER")
    private String serialNumber;
    @JacksonXmlProperty(localName="SERVICE_COMMENT")
    private String serviceComment;
    @JacksonXmlProperty(localName="FLAG")
    private String flag;
    @JacksonXmlProperty(localName="PROB_DESC")
    private String probDesc;
    @JacksonXmlProperty(localName="SERVICE_DATE")
    private String serviceDate;

    public String getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(String indexNo) {
        this.indexNo = indexNo;
    }

    public String getNotification() {
        return notification;
    }

    public void setNotification(String notification) {
        this.notification = notification;
    }

    public String getRmaCreatedOn() {
        return rmaCreatedOn;
    }

    public void setRmaCreatedOn(String rmaCreatedOn) {
        this.rmaCreatedOn = rmaCreatedOn;
    }

    public String getReturnedOn() {
        return returnedOn;
    }

    public void setReturnedOn(String returnedOn) {
        this.returnedOn = returnedOn;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNo) {
        this.partNumber = partNo;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getServiceComment() {
        return serviceComment;
    }

    public void setServiceComment(String serviceComment) {
        this.serviceComment = serviceComment;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public String getProbDesc() {
        return probDesc;
    }

    public void setProbDesc(String probDesc) {
        this.probDesc = probDesc;
    }

    public String getServiceDate() {
        return serviceDate;
    }

    public void setServiceDate(String serviceDate) {
        this.serviceDate = serviceDate;
    }
}
