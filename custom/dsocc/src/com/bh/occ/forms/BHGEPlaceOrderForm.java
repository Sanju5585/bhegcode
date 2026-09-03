package com.bh.occ.forms;

import java.util.Date;
import java.util.List;

import de.hybris.platform.b2bacceleratorfacades.order.data.B2BReplenishmentRecurrenceEnum;
import de.hybris.platform.cronjob.enums.DayOfWeek;

/**
 * Pojo for 'BHGE place order' form.
 */
public class BHGEPlaceOrderForm {

	private String securityCode;
	private boolean termsCheck;
	private boolean replenishmentOrder;
	private Date replenishmentStartDate;
	private String nDays;
	private String nWeeks;
	private String nthDayOfMonth;
	private B2BReplenishmentRecurrenceEnum replenishmentRecurrence;
	private List<DayOfWeek> nDaysOfWeek;
	private String requestedHdrDeliveryDate;
	private String requestedHdrDeliveryDateFilm;
	private String govtAgencyFlagVal;
	private String nuclearOpportFlagVal;
	private String planToExportFlagVal;

	private String isBuyerFlagVal;

	private String exportAddress;
	private String googleCaptcha;
	
	
	public String getSecurityCode() {
		return securityCode;
	}
	public void setSecurityCode(String securityCode) {
		this.securityCode = securityCode;
	}
	public boolean isTermsCheck() {
		return termsCheck;
	}
	public void setTermsCheck(boolean termsCheck) {
		this.termsCheck = termsCheck;
	}
	public boolean isReplenishmentOrder() {
		return replenishmentOrder;
	}
	public void setReplenishmentOrder(boolean replenishmentOrder) {
		this.replenishmentOrder = replenishmentOrder;
	}
	public Date getReplenishmentStartDate() {
		return replenishmentStartDate;
	}
	public void setReplenishmentStartDate(Date replenishmentStartDate) {
		this.replenishmentStartDate = replenishmentStartDate;
	}
	public String getnDays() {
		return nDays;
	}
	public void setnDays(String nDays) {
		this.nDays = nDays;
	}
	public String getnWeeks() {
		return nWeeks;
	}
	public void setnWeeks(String nWeeks) {
		this.nWeeks = nWeeks;
	}
	public String getNthDayOfMonth() {
		return nthDayOfMonth;
	}
	public void setNthDayOfMonth(String nthDayOfMonth) {
		this.nthDayOfMonth = nthDayOfMonth;
	}
	public B2BReplenishmentRecurrenceEnum getReplenishmentRecurrence() {
		return replenishmentRecurrence;
	}
	public void setReplenishmentRecurrence(B2BReplenishmentRecurrenceEnum replenishmentRecurrence) {
		this.replenishmentRecurrence = replenishmentRecurrence;
	}
	public List<DayOfWeek> getnDaysOfWeek() {
		return nDaysOfWeek;
	}
	public void setnDaysOfWeek(List<DayOfWeek> nDaysOfWeek) {
		this.nDaysOfWeek = nDaysOfWeek;
	}
	public String getRequestedHdrDeliveryDate() {
		return requestedHdrDeliveryDate;
	}
	public void setRequestedHdrDeliveryDate(String requestedHdrDeliveryDate) {
		this.requestedHdrDeliveryDate = requestedHdrDeliveryDate;
	}
	public String getRequestedHdrDeliveryDateFilm() {
		return requestedHdrDeliveryDateFilm;
	}
	public void setRequestedHdrDeliveryDateFilm(String requestedHdrDeliveryDateFilm) {
		this.requestedHdrDeliveryDateFilm = requestedHdrDeliveryDateFilm;
	}
	public String getGovtAgencyFlagVal() {
		return govtAgencyFlagVal;
	}
	public void setGovtAgencyFlagVal(String govtAgencyFlagVal) {
		this.govtAgencyFlagVal = govtAgencyFlagVal;
	}
	public String getNuclearOpportFlagVal() {
		return nuclearOpportFlagVal;
	}
	public void setNuclearOpportFlagVal(String nuclearOpportFlagVal) {
		this.nuclearOpportFlagVal = nuclearOpportFlagVal;
	}
	public String getPlanToExportFlagVal() {
		return planToExportFlagVal;
	}
	public void setPlanToExportFlagVal(String planToExportFlagVal) {
		this.planToExportFlagVal = planToExportFlagVal;
	}
	public String getIsBuyerFlagVal() {
		return isBuyerFlagVal;
	}
	public void setIsBuyerFlagVal(String isBuyerFlagVal) {
		this.isBuyerFlagVal = isBuyerFlagVal;
	}
	public String getExportAddress() {
		return exportAddress;
	}
	public void setExportAddress(String exportAddress) {
		this.exportAddress = exportAddress;
	}
	public String getGoogleCaptcha() {
		return googleCaptcha;
	}
	public void setGoogleCaptcha(String googleCaptcha) {
		this.googleCaptcha = googleCaptcha;
	}
}
