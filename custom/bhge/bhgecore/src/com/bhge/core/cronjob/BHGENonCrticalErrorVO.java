package com.bhge.core.cronjob;

public class BHGENonCrticalErrorVO {

	String errorDate;

	String errorTime;

	String errorCategory;

	String errorMsg;

	String userEmail;

	String soldToId;

	public String getErrorDate() {
		return errorDate;
	}

	public void setErrorDate(String errorDate) {
		this.errorDate = errorDate;
	}

	public String getErrorTime() {
		return errorTime;
	}

	public void setErrorTime(String errorTime) {
		this.errorTime = errorTime;
	}

	public String getErrorCategory() {
		return errorCategory;
	}

	public void setErrorCategory(String errorCategory) {
		this.errorCategory = errorCategory;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getSoldToId() {
		return soldToId;
	}

	public void setSoldToId(String soldToId) {
		this.soldToId = soldToId;
	}

}
