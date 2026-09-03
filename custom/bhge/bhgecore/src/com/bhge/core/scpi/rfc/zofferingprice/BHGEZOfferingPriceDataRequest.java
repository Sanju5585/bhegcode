/**
 *
 */
package com.bhge.core.scpi.rfc.zofferingprice;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;


/**
 * @author 212695810 This class represents the XML structure for RMA offering and price API
 *
 */
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "ZHYB_OFF_PRC_DATA")
public class BHGEZOfferingPriceDataRequest
{
	@JacksonXmlProperty(localName = "CURRENCY")
	private String currency;
	@JacksonXmlProperty(localName = "CUST_NUM")
	private String customerNumber;
	@JacksonXmlProperty(localName = "DISTR_CHNL")
	private String distributionChannel;
	@JacksonXmlProperty(localName = "DIVISION")
	private String division;
	@JacksonXmlProperty(localName = "FLAG")
	private String flag;
	@JacksonXmlProperty(localName = "SALES_ORG")
	private String salesOrganization;
	@JacksonXmlProperty(localName = "LANGUAGE")
	private String language;
	@JacksonXmlProperty(localName = "IT_MAT_OFF_INPUT")
	private BHGEZOfferingPriceDataRequestItem materialInputTable;

	//Response fields not used in request
	@JacksonXmlProperty(localName = "ET_ERROR_REC")
	private BHGEZOfferingPriceDataRequestItem errorInputTable;
	@JacksonXmlProperty(localName = "ET_MAT_DATA")
	private BHGEZOfferingPriceDataRequestItem materialDataInputTable;
	@JacksonXmlProperty(localName = "ET_OFFERING_DATA")
	private BHGEZOfferingPriceDataRequestItem offeringDataInputTable;
	@JacksonXmlProperty(localName = "ET_OFFERING_DESCR")
	private BHGEZOfferingPriceDataRequestItem offeringDescriptionInputTable;
	@JacksonXmlProperty(localName = "ET_PRICING_DATA")
	private BHGEZOfferingPriceDataRequestItem offeringPricingInputTable;
	@JacksonXmlProperty(localName = "ET_WARRANTY_DATA")
	private BHGEZOfferingPriceDataRequestItem warrantyInputTable;
	@JacksonXmlProperty(localName = "ET_MAT_OFF_TEXT")
	private BHGEZOfferingPriceDataRequestItem offeringTextInputTable;

	public String getCurrency()
	{
		return currency;
	}

	public void setCurrency(final String currency)
	{
		this.currency = currency;
	}

	public String getCustomerNumber()
	{
		return customerNumber;
	}

	public void setCustomerNumber(final String customerNumber)
	{
		this.customerNumber = customerNumber;
	}

	public String getDistributionChannel()
	{
		return distributionChannel;
	}

	public void setDistributionChannel(final String distributionChannel)
	{
		this.distributionChannel = distributionChannel;
	}

	public String getDivision()
	{
		return division;
	}

	public void setDivision(final String division)
	{
		this.division = division;
	}

	public String getFlag()
	{
		return flag;
	}

	public void setFlag(final String flag)
	{
		this.flag = flag;
	}

	public String getSalesOrganization()
	{
		return salesOrganization;
	}

	public void setSalesOrganization(final String salesOrganization)
	{
		this.salesOrganization = salesOrganization;
	}

	public BHGEZOfferingPriceDataRequestItem getMaterialInputTable()
	{
		this.materialInputTable = materialInputTable == null ? new BHGEZOfferingPriceDataRequestItem() : materialInputTable;
		return materialInputTable;
	}

	public void setMaterialInputTable(final BHGEZOfferingPriceDataRequestItem materialInputTable)
	{
		this.materialInputTable = materialInputTable;
	}

	public BHGEZOfferingPriceDataRequestItem getErrorInputTable()
	{
		return errorInputTable;
	}

	public void setErrorInputTable(final BHGEZOfferingPriceDataRequestItem errorInputTable)
	{
		this.errorInputTable = errorInputTable;
	}

	public BHGEZOfferingPriceDataRequestItem getMaterialDataInputTable()
	{
		return materialDataInputTable;
	}

	public void setMaterialDataInputTable(final BHGEZOfferingPriceDataRequestItem materialDataInputTable)
	{
		this.materialDataInputTable = materialDataInputTable;
	}

	public BHGEZOfferingPriceDataRequestItem getOfferingDataInputTable()
	{
		return offeringDataInputTable;
	}

	public void setOfferingDataInputTable(final BHGEZOfferingPriceDataRequestItem offeringDataInputTable)
	{
		this.offeringDataInputTable = offeringDataInputTable;
	}

	public BHGEZOfferingPriceDataRequestItem getOfferingDescriptionInputTable()
	{
		return offeringDescriptionInputTable;
	}

	public void setOfferingDescriptionInputTable(final BHGEZOfferingPriceDataRequestItem offeringDescriptionInputTable)
	{
		this.offeringDescriptionInputTable = offeringDescriptionInputTable;
	}

	public BHGEZOfferingPriceDataRequestItem getOfferingPricingInputTable()
	{
		return offeringPricingInputTable;
	}

	public void setOfferingPricingInputTable(final BHGEZOfferingPriceDataRequestItem offeringPricingInputTable)
	{
		this.offeringPricingInputTable = offeringPricingInputTable;
	}

	public BHGEZOfferingPriceDataRequestItem getWarrantyInputTable()
	{
		return warrantyInputTable;
	}

	public void setWarrantyInputTable(final BHGEZOfferingPriceDataRequestItem warrantyInputTable)
	{
		this.warrantyInputTable = warrantyInputTable;
	}

	public BHGEZOfferingPriceDataRequestItem getOfferingTextInputTable() {
		return offeringTextInputTable;
	}

	public void setOfferingTextInputTable(BHGEZOfferingPriceDataRequestItem offeringTextInputTable) {
		this.offeringTextInputTable = offeringTextInputTable;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}
	
}