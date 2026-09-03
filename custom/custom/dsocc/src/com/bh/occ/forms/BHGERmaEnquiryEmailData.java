package com.bh.occ.forms;

import java.util.Map;

/**
 * @author deepakde
 *
 */
public class BHGERmaEnquiryEmailData {

	private String userName;
	private String emailIds;
	private String businessName;
	private String orderNumber;
	private String poNumber;
	private String datePlaced;
	private String enquiryType;
	private String enquiryDetails;
	private String subject;
	private String soldToId;
	private String loggedInUser;
	private String lineData;
	private String bhgeBasePath;
	private String productLine;
	private String googleCaptcha;
	private String rmaNumber;
	private String emailId;
	private String purchaseOrderNumber;
	private String rmaCreatedDate;
	private String customerAccountId;
	
	private Map<String, Object> messages;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailIds() {
		return emailIds;
	}

	public void setEmailIds(String emailIds) {
		this.emailIds = emailIds;
	}

	public String getBusinessName() {
		return businessName;
	}

	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}

	public String getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(String orderNumber) {
		this.orderNumber = orderNumber;
	}

	public String getPoNumber() {
		return poNumber;
	}

	public void setPoNumber(String poNumber) {
		this.poNumber = poNumber;
	}

	public String getDatePlaced() {
		return datePlaced;
	}

	public void setDatePlaced(String datePlaced) {
		this.datePlaced = datePlaced;
	}

	public String getEnquiryType() {
		return enquiryType;
	}

	public void setEnquiryType(String enquiryType) {
		this.enquiryType = enquiryType;
	}

	public String getEnquiryDetails() {
		return enquiryDetails;
	}

	public void setEnquiryDetails(String enquiryDetails) {
		this.enquiryDetails = enquiryDetails;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getSoldToId() {
		return soldToId;
	}

	public void setSoldToId(String soldToId) {
		this.soldToId = soldToId;
	}

	public String getLoggedInUser() {
		return loggedInUser;
	}

	public void setLoggedInUser(String loggedInUser) {
		this.loggedInUser = loggedInUser;
	}

	public String getLineData() {
		return lineData;
	}

	public void setLineData(String lineData) {
		this.lineData = lineData;
	}

	public String getBhgeBasePath() {
		return bhgeBasePath;
	}

	public void setBhgeBasePath(String bhgeBasePath) {
		this.bhgeBasePath = bhgeBasePath;
	}

	public String getProductLine() {
		return productLine;
	}

	public void setProductLine(String productLine) {
		this.productLine = productLine;
	}

	public String getGoogleCaptcha() {
		return googleCaptcha;
	}

	public void setGoogleCaptcha(String googleCaptcha) {
		this.googleCaptcha = googleCaptcha;
	}

	public Map<String, Object> getMessages() {
		return messages;
	}

	public void setMessages(Map<String, Object> messages) {
		this.messages = messages;
	}
	
	public void setRmaNumber(String rmaNumber) {
		this.rmaNumber = rmaNumber;
	}

	public String getRmaNumber() {
		return rmaNumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPurchaseOrderNumber() {
		return purchaseOrderNumber;
	}

	public void setPurchaseOrderNumber(String purchaseOrderNumber) {
		this.purchaseOrderNumber = purchaseOrderNumber;
	}

	public String getRmaCreatedDate() {
		return rmaCreatedDate;
	}

	public void setRmaCreatedDate(String rmaCreatedDate) {
		this.rmaCreatedDate = rmaCreatedDate;
	}

	public String getCustomerAccountId() {
		return customerAccountId;
	}

	public void setCustomerAccountId(String customerAccountId) {
		this.customerAccountId = customerAccountId;
	}

	@Override
	public String toString() {
		return "BHGERmaEnquiryEmailData [userName=" + userName + ", emailIds=" + emailIds + ", businessName="
				+ businessName + ", orderNumber=" + orderNumber + ", poNumber=" + poNumber + ", datePlaced="
				+ datePlaced + ", enquiryType=" + enquiryType + ", enquiryDetails=" + enquiryDetails + ", subject="
				+ subject + ", soldToId=" + soldToId + ", loggedInUser=" + loggedInUser + ", lineData=" + lineData
				+ ", bhgeBasePath=" + bhgeBasePath + ", productLine=" + productLine + ", googleCaptcha=" + googleCaptcha
				+ ", messages=" + messages + "]";
	}

	

}
