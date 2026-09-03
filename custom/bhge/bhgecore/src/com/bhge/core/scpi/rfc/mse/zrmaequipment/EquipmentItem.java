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
@JacksonXmlRootElement(localName = "item")
@JsonPropertyOrder({ "PART_NUMBER", "SERIAL_NUMBER", "STATUS", "ASSET_NUMBER", "LOCATION", "LAST_SERVICE", "HTS_CODE",
		"MEL_FLAG", "PART_NAME" })
public class EquipmentItem {

	@JacksonXmlProperty(localName = "PART_NUMBER")
	private String partNumer;

	@JacksonXmlProperty(localName = "SERIAL_NUMBER")
	private String serialNumer;

	@JacksonXmlProperty(localName = "STATUS")
	private String status;

	@JacksonXmlProperty(localName = "ASSET_NUMBER")
	private String assetNumber;

	@JacksonXmlProperty(localName = "LOCATION")
	private String location;

	@JacksonXmlProperty(localName = "LAST_SERVICE")
	private String lastService;

	@JacksonXmlProperty(localName = "HTS_CODE")
	private String htsCode;

	@JacksonXmlProperty(localName = "MEL_FLAG")
	private String melFlag;

	@JacksonXmlProperty(localName = "PART_NAME")
	private String partName;

	@JacksonXmlProperty(localName = "USER_ID")
	private String userID;

	@JacksonXmlProperty(localName = "SENSOR_TYPE")
	private String sensorType;

	@JacksonXmlProperty(localName = "RMA_STATUS")
	private String rmaStatus;

	/**
	 * @return the partNumer
	 */
	public String getPartNumer() {
		return partNumer;
	}

	/**
	 * @param partNumer the partNumer to set
	 */
	public void setPartNumer(final String partNumer) {
		this.partNumer = partNumer;
	}

	/**
	 * @return the serialNumer
	 */
	public String getSerialNumer() {
		return serialNumer;
	}

	/**
	 * @param serialNumer the serialNumer to set
	 */
	public void setSerialNumer(final String serialNumer) {
		this.serialNumer = serialNumer;
	}

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(final String status) {
		this.status = status;
	}

	/**
	 * @return the assetNumber
	 */
	public String getAssetNumber() {
		return assetNumber;
	}

	/**
	 * @param assetNumber the assetNumber to set
	 */
	public void setAssetNumber(final String assetNumber) {
		this.assetNumber = assetNumber;
	}

	/**
	 * @return the location
	 */
	public String getLocation() {
		return location;
	}

	/**
	 * @param location the location to set
	 */
	public void setLocation(final String location) {
		this.location = location;
	}

	/**
	 * @return the lastService
	 */
	public String getLastService() {
		return lastService;
	}

	/**
	 * @param lastService the lastService to set
	 */
	public void setLastService(final String lastService) {
		this.lastService = lastService;
	}

	/**
	 * @return the htsCode
	 */
	public String getHtsCode() {
		return htsCode;
	}

	/**
	 * @param htsCode the htsCode to set
	 */
	public void setHtsCode(final String htsCode) {
		this.htsCode = htsCode;
	}

	/**
	 * @return the melFlag
	 */
	public String getMelFlag() {
		return melFlag;
	}

	/**
	 * @param melFlag the melFlag to set
	 */
	public void setMelFlag(final String melFlag) {
		this.melFlag = melFlag;
	}

	/**
	 * @return the partName
	 */
	public String getPartName() {
		return partName;
	}

	/**
	 * @param partName the partName to set
	 */
	public void setPartName(final String partName) {
		this.partName = partName;
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
