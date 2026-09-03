package com.bhge.core.scpi.rfc.mse;

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
@JsonPropertyOrder({"PART_NUMBER", "SERIAL_NUMBER", "PART_NAME", "STATUS", "ASSET_NUMBER", "LOCATION", "LAST_SERVICE_DATE", "HTS_CODE", "SERVICE_INTERVAL", "ADDITIONAL_INFO", "END_CUSTOMER", "END_CUSTOMER_NAME", "NXT_SERVICE_DUE", "MANEL_FLAG", "CUST_MISMATCH_FLAG", "FAV_FLAG", "PRODH", "PRODUCT_LINE"})
public class MyEquipmentItem {

    @JacksonXmlProperty(localName="PART_NUMBER")
    private String partNumber;
    @JacksonXmlProperty(localName="SERIAL_NUMBER")
    private String serialNumber;
    @JacksonXmlProperty(localName="PART_NAME")
    private String partName;
    @JacksonXmlProperty(localName="STATUS")
    private String status;
    @JacksonXmlProperty(localName="ASSET_NUMBER")
    private String assetNumber;
    @JacksonXmlProperty(localName="LOCATION")
    private String location;
    @JacksonXmlProperty(localName="LAST_SERVICE_DATE")
    private String lastServiceDate;
    @JacksonXmlProperty(localName="HTS_CODE")
    private String htsCode;
    @JacksonXmlProperty(localName="SERVICE_INTERVAL")
    private String serviceInternal;
    @JacksonXmlProperty(localName="ADDITIONAL_INFO")
    private String additionalInfo;
    @JacksonXmlProperty(localName="END_CUSTOMER")
    private String endCustomer;
    @JacksonXmlProperty(localName="END_CUSTOMER_NAME")
    private String endCustomerName;
    @JacksonXmlProperty(localName="NXT_SERVICE_DUE")
    private String nxtServiceDue;
    @JacksonXmlProperty(localName="MANEL_FLAG")
    private String manelFlag;
    @JacksonXmlProperty(localName="CUST_MISMATCH_FLAG")
    private String custMismatchFlag;
    @JacksonXmlProperty(localName="FAV_FLAG")
    private String favFlag;
    @JacksonXmlProperty(localName="PRODH")
    private String prodH;
    @JacksonXmlProperty(localName="USER_ID")
    private String userID; 
	@JacksonXmlProperty(localName="SENSOR_TYPE")
    private String sensorType;
    @JacksonXmlProperty(localName="RMA_STATUS")
    private String rmaStatus;
    @JacksonXmlProperty(localName="CUSTOMER")
    private String customer;
    @JacksonXmlProperty(localName="PRODUCT_LINE")
    private String productLine;
    
    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getPartName() {
        return partName;
    }

    public void setPartName(String partName) {
        this.partName = partName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAssetNumber() {
        return assetNumber;
    }

    public void setAssetNumber(String assetNumber) {
        this.assetNumber = assetNumber;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getLastServiceDate() {
        return lastServiceDate;
    }

    public void setLastServiceDate(String lastServiceDate) {
        this.lastServiceDate = lastServiceDate;
    }

    public String getHtsCode() {
        return htsCode;
    }

    public void setHtsCode(String htsCode) {
        this.htsCode = htsCode;
    }

    public String getServiceInternal() {
        return serviceInternal;
    }

    public void setServiceInternal(String serviceInternal) {
        this.serviceInternal = serviceInternal;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }

    public String getEndCustomer() {
        return endCustomer;
    }

    public void setEndCustomer(String endCustomer) {
        this.endCustomer = endCustomer;
    }

    public String getEndCustomerName() {
        return endCustomerName;
    }

    public void setEndCustomerName(String endCustomerName) {
        this.endCustomerName = endCustomerName;
    }

    public String getNxtServiceDue() {
        return nxtServiceDue;
    }

    public void setNxtServiceDue(String nxtServiceDue) {
        this.nxtServiceDue = nxtServiceDue;
    }

    public String getManelFlag() {
        return manelFlag;
    }

    public void setManelFlag(String manelFlag) {
        this.manelFlag = manelFlag;
    }

    public String getCustMismatchFlag() {
        return custMismatchFlag;
    }

    public void setCustMismatchFlag(String custMismatchFlag) {
        this.custMismatchFlag = custMismatchFlag;
    }

    public String getFavFlag() {
        return favFlag;
    }

    public void setFavFlag(String favFlag) {
        this.favFlag = favFlag;
    }

    public String getProdH() {
        return prodH;
    }

    public void setProdH(String prodH) {
        this.prodH = prodH;
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

	public String getCustomer() {
		return customer;
	}

	public void setCustomer(String customer) {
		this.customer = customer;
	}

	public String getProductLine() {
		return productLine;
	}

	public void setProductLine(String productLine) {
		this.productLine = productLine;
	}
 	
}