package com.bhge.core.scpi.rfc.mse.zrmaequipment;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName ="item")
@JsonPropertyOrder({"INDEX_NO", "NOTIFICATION", "RMA_CREATED_ON", "RETURNED_ON", "SERVICE", "PART_NUMBER", "SERIAL_NUMBER", "SERVICE_COMMENT", "FLAG", "PROB_DESC", "SERVICE_DATE"})
public class ETDetailItem {

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
    
    @JacksonXmlProperty(localName="USER_ID")
    private String userID; 
    
	@JacksonXmlProperty(localName="SENSOR_TYPE")
    private String sensorType;
	
    @JacksonXmlProperty(localName="RMA_STATUS")
    private String rmaStatus;

	/**
	 * @return the indexNo
	 */
	public String getIndexNo() {
		return indexNo;
	}

	/**
	 * @param indexNo the indexNo to set
	 */
	public void setIndexNo(String indexNo) {
		this.indexNo = indexNo;
	}

	/**
	 * @return the notification
	 */
	public String getNotification() {
		return notification;
	}

	/**
	 * @param notification the notification to set
	 */
	public void setNotification(String notification) {
		this.notification = notification;
	}

	/**
	 * @return the rmaCreatedOn
	 */
	public String getRmaCreatedOn() {
		return rmaCreatedOn;
	}

	/**
	 * @param rmaCreatedOn the rmaCreatedOn to set
	 */
	public void setRmaCreatedOn(String rmaCreatedOn) {
		this.rmaCreatedOn = rmaCreatedOn;
	}

	/**
	 * @return the returnedOn
	 */
	public String getReturnedOn() {
		return returnedOn;
	}

	/**
	 * @param returnedOn the returnedOn to set
	 */
	public void setReturnedOn(String returnedOn) {
		this.returnedOn = returnedOn;
	}

	/**
	 * @return the service
	 */
	public String getService() {
		return service;
	}

	/**
	 * @param service the service to set
	 */
	public void setService(String service) {
		this.service = service;
	}

	/**
	 * @return the partNumber
	 */
	public String getPartNumber() {
		return partNumber;
	}

	/**
	 * @param partNumber the partNumber to set
	 */
	public void setPartNumber(String partNumber) {
		this.partNumber = partNumber;
	}

	/**
	 * @return the serialNumber
	 */
	public String getSerialNumber() {
		return serialNumber;
	}

	/**
	 * @param serialNumber the serialNumber to set
	 */
	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}

	/**
	 * @return the serviceComment
	 */
	public String getServiceComment() {
		return serviceComment;
	}

	/**
	 * @param serviceComment the serviceComment to set
	 */
	public void setServiceComment(String serviceComment) {
		this.serviceComment = serviceComment;
	}

	/**
	 * @return the flag
	 */
	public String getFlag() {
		return flag;
	}

	/**
	 * @param flag the flag to set
	 */
	public void setFlag(String flag) {
		this.flag = flag;
	}

	/**
	 * @return the probDesc
	 */
	public String getProbDesc() {
		return probDesc;
	}

	/**
	 * @param probDesc the probDesc to set
	 */
	public void setProbDesc(String probDesc) {
		this.probDesc = probDesc;
	}

	/**
	 * @return the serviceDate
	 */
	public String getServiceDate() {
		return serviceDate;
	}

	/**
	 * @param serviceDate the serviceDate to set
	 */
	public void setServiceDate(String serviceDate) {
		this.serviceDate = serviceDate;
	}
	
    public String getUserID() {
 		return userID;
 	}

 	public void setUserID(String userID) {
 		this.userID = userID;
 	}

 	public String getSensorType() {
 		return sensorType;
 	}

 	public void setSensorType(String sensorType) {
 		this.sensorType = sensorType;
 	}

 	public String getRmaStatus() {
 		return rmaStatus;
 	}

 	public void setRmaStatus(String rmaStatus) {
 		this.rmaStatus = rmaStatus;
 	}

    
    
}
