package com.bh.occ.forms;

/**
 * @author deepakde
 *
 */
public class ShippingMethodForm {

	private String shipDeliveryPointOT;
	private String requestedHdrDeliveryDate;
	private String deliveryOptions;
	private String carrier;
	private String shipToContactName;
	private String shipToContactPhone;
	private String notes; // shipment remarks
	private String deliveryAccount; // delivery account number
	private String endUserCategory;
	private String alternateContactName;
	private String alternateContactNumber;
	private String alternateContactEmail;
	private String shipNotificationEmail;

	public String getShipDeliveryPointOT() {
		return shipDeliveryPointOT;
	}

	public void setShipDeliveryPointOT(String shipDeliveryPointOT) {
		this.shipDeliveryPointOT = shipDeliveryPointOT;
	}

	public String getRequestedHdrDeliveryDate() {
		return requestedHdrDeliveryDate;
	}

	public void setRequestedHdrDeliveryDate(String requestedHdrDeliveryDate) {
		this.requestedHdrDeliveryDate = requestedHdrDeliveryDate;
	}

	public String getDeliveryOptions() {
		return deliveryOptions;
	}

	public void setDeliveryOptions(String deliveryOptions) {
		this.deliveryOptions = deliveryOptions;
	}

	public String getCarrier() {
		return carrier;
	}

	public void setCarrier(String carrier) {
		this.carrier = carrier;
	}

	public String getShipToContactName() {
		return shipToContactName;
	}

	public void setShipToContactName(String shipToContactName) {
		this.shipToContactName = shipToContactName;
	}

	public String getShipToContactPhone() {
		return shipToContactPhone;
	}

	public void setShipToContactPhone(String shipToContactPhone) {
		this.shipToContactPhone = shipToContactPhone;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public String getDeliveryAccount() {
		return deliveryAccount;
	}

	public void setDeliveryAccount(String deliveryAccount) {
		this.deliveryAccount = deliveryAccount;
	}

	public String getEndUserCategory() {
		return endUserCategory;
	}

	public void setEndUserCategory(String endUserCategory) {
		this.endUserCategory = endUserCategory;
	}

	public String getAlternateContactName() {
		return alternateContactName;
	}

	public void setAlternateContactName(String alternateContactName) {
		this.alternateContactName = alternateContactName;
	}

	public String getAlternateContactNumber() {
		return alternateContactNumber;
	}

	public void setAlternateContactNumber(String alternateContactNumber) {
		this.alternateContactNumber = alternateContactNumber;
	}

	public String getAlternateContactEmail() {
		return alternateContactEmail;
	}

	public void setAlternateContactEmail(String alternateContactEmail) {
		this.alternateContactEmail = alternateContactEmail;
	}

	public String getShipNotificationEmail() {
		return shipNotificationEmail;
	}

	public void setShipNotificationEmail(String shipNotificationEmail) {
		this.shipNotificationEmail = shipNotificationEmail;
	}

}
