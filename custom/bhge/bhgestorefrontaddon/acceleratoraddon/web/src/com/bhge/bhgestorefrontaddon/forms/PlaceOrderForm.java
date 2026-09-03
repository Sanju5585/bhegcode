/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.bhgestorefrontaddon.forms;

import de.hybris.platform.b2bacceleratorfacades.order.data.B2BReplenishmentRecurrenceEnum;
import de.hybris.platform.cronjob.enums.DayOfWeek;

import java.util.Date;
import java.util.List;

import jakarta.validation.constraints.AssertTrue;


/**
 * Pojo for 'place order' form.
 */
public class PlaceOrderForm
{
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

	//private boolean isGovtAgency;
	//private boolean isNuclearOpport;
	//private boolean planToExport;

	private String govtAgencyFlagVal;
	private String nuclearOpportFlagVal;
	private String planToExportFlagVal;

	private String isBuyerFlagVal;

	private String exportAddress;
	private String googleCaptcha;

	/**
	 * @return the googleCaptcha
	 */
	public String getGoogleCaptcha()
	{
		return googleCaptcha;
	}

	/**
	 * @param googleCaptcha the googleCaptcha to set
	 */
	public void setGoogleCaptcha(String googleCaptcha)
	{
		this.googleCaptcha = googleCaptcha;
	}

	public String getSecurityCode()
	{
		return securityCode;
	}

	public void setSecurityCode(final String securityCode)
	{
		this.securityCode = securityCode;
	}

	@AssertTrue(message = "")
	public boolean isTermsCheck()
	{
		return termsCheck;
	}

	public void setTermsCheck(final boolean termsCheck)
	{
		this.termsCheck = termsCheck;
	}

	public Date getReplenishmentStartDate()
	{
		return replenishmentStartDate;
	}

	public void setReplenishmentStartDate(final Date replenishmentStartDate)
	{
		this.replenishmentStartDate = replenishmentStartDate;
	}

	public String getnDays()
	{
		return nDays;
	}

	public void setnDays(final String nDays)
	{
		this.nDays = nDays;
	}

	public String getnWeeks()
	{
		return nWeeks;
	}

	public void setnWeeks(final String nWeeks)
	{
		this.nWeeks = nWeeks;
	}

	public String getNthDayOfMonth()
	{
		return nthDayOfMonth;
	}

	public void setNthDayOfMonth(final String nthDayOfMonth)
	{
		this.nthDayOfMonth = nthDayOfMonth;
	}

	public B2BReplenishmentRecurrenceEnum getReplenishmentRecurrence()
	{
		return replenishmentRecurrence;
	}

	public void setReplenishmentRecurrence(final B2BReplenishmentRecurrenceEnum replenishmentRecurrence)
	{
		this.replenishmentRecurrence = replenishmentRecurrence;
	}

	public List<DayOfWeek> getnDaysOfWeek()
	{
		return nDaysOfWeek;
	}

	public void setnDaysOfWeek(final List<DayOfWeek> nDaysOfWeek)
	{
		this.nDaysOfWeek = nDaysOfWeek;
	}

	public boolean isReplenishmentOrder()
	{
		return replenishmentOrder;
	}

	public void setReplenishmentOrder(final boolean replenishmentOrder)
	{
		this.replenishmentOrder = replenishmentOrder;
	}

	/**
	 * @return the isGovtAgency
	 */
	/*
	 * public boolean isGovtAgency() { return isGovtAgency; }
	 */

	/**
	 * @param isGovtAgency
	 *           the isGovtAgency to set
	 */
	/*
	 * public void setGovtAgency(final boolean isGovtAgency) { this.isGovtAgency = isGovtAgency; }
	 */

	/**
	 * @return the isNuclearOpport
	 */
	/*
	 * public boolean isNuclearOpport() { return isNuclearOpport; }
	 */

	/**
	 * @param isNuclearOpport
	 *           the isNuclearOpport to set
	 */
	/*
	 * public void setNuclearOpport(final boolean isNuclearOpport) { this.isNuclearOpport = isNuclearOpport; }
	 */

	/**
	 * @return the planToExport
	 */
	/*
	 * public boolean isPlanToExport() { return planToExport; }
	 */

	/**
	 * @param planToExport
	 *           the planToExport to set
	 */
	/*
	 * public void setPlanToExport(final boolean planToExport) { this.planToExport = planToExport; }
	 */

	/**
	 * @return the exportAddress
	 */
	public String getExportAddress()
	{
		return exportAddress;
	}

	/**
	 * @param exportAddress
	 *           the exportAddress to set
	 */
	public void setExportAddress(final String exportAddress)
	{
		this.exportAddress = exportAddress;
	}

	/**
	 * @return the govtAgencyFlagVal
	 */
	public String getGovtAgencyFlagVal()
	{
		return govtAgencyFlagVal;
	}

	/**
	 * @param govtAgencyFlagVal
	 *           the govtAgencyFlagVal to set
	 */
	public void setGovtAgencyFlagVal(final String govtAgencyFlagVal)
	{
		this.govtAgencyFlagVal = govtAgencyFlagVal;
	}

	/**
	 * @return the nuclearOpportFlagVal
	 */
	public String getNuclearOpportFlagVal()
	{
		return nuclearOpportFlagVal;
	}

	/**
	 * @param nuclearOpportFlagVal
	 *           the nuclearOpportFlagVal to set
	 */
	public void setNuclearOpportFlagVal(final String nuclearOpportFlagVal)
	{
		this.nuclearOpportFlagVal = nuclearOpportFlagVal;
	}

	/**
	 * @return the planToExportFlagVal
	 */
	public String getPlanToExportFlagVal()
	{
		return planToExportFlagVal;
	}

	/**
	 * @param planToExportFlagVal
	 *           the planToExportFlagVal to set
	 */
	public void setPlanToExportFlagVal(final String planToExportFlagVal)
	{
		this.planToExportFlagVal = planToExportFlagVal;
	}

	public String getIsBuyerFlagVal()
	{
		return isBuyerFlagVal;
	}

	public void setIsBuyerFlagVal(final String isBuyerFlagVal)
	{
		this.isBuyerFlagVal = isBuyerFlagVal;
	}

	/**
	 * @return the requestedHdrDeliveryDate
	 */
	public String getRequestedHdrDeliveryDate()
	{
		return requestedHdrDeliveryDate;
	}

	/**
	 * @param requestedHdrDeliveryDate
	 *           the requestedHdrDeliveryDate to set
	 */
	public void setRequestedHdrDeliveryDate(final String requestedHdrDeliveryDate)
	{
		this.requestedHdrDeliveryDate = requestedHdrDeliveryDate;
	}


}
