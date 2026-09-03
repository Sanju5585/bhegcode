/**
 *
 */
package com.bhge.core.scpi.rfc.zofferingprice;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;


/**
 * @author 212695810 This is response XML for RMA offering and price API
 *
 */
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "rfc:ZHYB_OFF_PRC_DATA.Response")
@JsonPropertyOrder(
{ "ET_ERROR_REC","ET_MAT_DATA", "ET_OFFERING_DATA", "ET_OFFERING_DESCR", "ET_PRICING_DATA", "ET_WARRANTY_DATA" })
public class BHGEZOfferingPriceDataResponse
{
	@JacksonXmlProperty(localName = "ET_ERROR_REC")
	private BHGEZOfferingPriceDataRequestItem errorTable;

	@JacksonXmlProperty(localName = "ET_MAT_DATA")
	private BHGEZOfferingPriceDataRequestItem materialDataInputTable;

	@JacksonXmlProperty(localName = "ET_OFFERING_DATA")
	private BHGEZOfferingPriceDataRequestItem offeringDataTable;

	@JacksonXmlProperty(localName = "ET_OFFERING_DESCR")
	private BHGEZOfferingPriceDataRequestItem offeringDescriptionTable;

	@JacksonXmlProperty(localName = "ET_PRICING_DATA")
	private BHGEZOfferingPriceDataRequestItem pricingTable;

	@JacksonXmlProperty(localName = "ET_WARRANTY_DATA")
	private BHGEZOfferingPriceDataRequestItem warrantyTable;
	
	@JacksonXmlProperty(localName = "ET_MAT_OFF_TEXT")
	private BHGEZOfferingPriceDataRequestItem offeringTextTable;

	public BHGEZOfferingPriceDataRequestItem getErrorTable()
	{
		return errorTable;
	}

	public void setErrorTable(final BHGEZOfferingPriceDataRequestItem errorTable)
	{
		this.errorTable = errorTable;
	}

	public BHGEZOfferingPriceDataRequestItem getMaterialDataInputTable() {
		return materialDataInputTable;
	}

	public void setMaterialDataInputTable(BHGEZOfferingPriceDataRequestItem materialDataInputTable) {
		this.materialDataInputTable = materialDataInputTable;
	}

	public BHGEZOfferingPriceDataRequestItem getOfferingDataTable()
	{
		return offeringDataTable;
	}

	public void setOfferingDataTable(final BHGEZOfferingPriceDataRequestItem offeringDataTable)
	{
		this.offeringDataTable = offeringDataTable;
	}

	public BHGEZOfferingPriceDataRequestItem getOfferingDescriptionTable()
	{
		return offeringDescriptionTable;
	}

	public void setOfferingDescriptionTable(final BHGEZOfferingPriceDataRequestItem offeringDescriptionTable)
	{
		this.offeringDescriptionTable = offeringDescriptionTable;
	}

	public BHGEZOfferingPriceDataRequestItem getPricingTable()
	{
		return pricingTable;
	}

	public void setPricingTable(final BHGEZOfferingPriceDataRequestItem pricingTable)
	{
		this.pricingTable = pricingTable;
	}

	public BHGEZOfferingPriceDataRequestItem getWarrantyTable()
	{
		return warrantyTable;
	}

	public void setWarrantyTable(final BHGEZOfferingPriceDataRequestItem warrantyTable)
	{
		this.warrantyTable = warrantyTable;
	}

	public BHGEZOfferingPriceDataRequestItem getOfferingTextTable() {
		return offeringTextTable;
	}

	public void setOfferingTextTable(BHGEZOfferingPriceDataRequestItem offeringTextTable) {
		this.offeringTextTable = offeringTextTable;
	}
	
}