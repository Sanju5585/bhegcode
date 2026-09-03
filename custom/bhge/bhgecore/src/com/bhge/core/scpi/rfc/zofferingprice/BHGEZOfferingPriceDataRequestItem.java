/**
 *
 */
package com.bhge.core.scpi.rfc.zofferingprice;

import java.util.LinkedList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

import lombok.ToString;


/**
 * @author 212695810 This class contains all items level fields for offering and price API
 *
 */
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BHGEZOfferingPriceDataRequestItem
{
	private List<BHGEZOfferingPriceDataRequestItem> items;

	@JacksonXmlProperty(localName = "item")
	@JacksonXmlElementWrapper(useWrapping = false)
	public List<BHGEZOfferingPriceDataRequestItem> getItems()
	{
		return items;
	}

	public void setItems(final List<BHGEZOfferingPriceDataRequestItem> items)
	{
		this.items = items;
	}

	public BHGEZOfferingPriceDataRequestItem()
	{
		this.items = new LinkedList<>();
	}

	@JacksonXmlProperty(localName = "MATERIAL_NUM")
	private String requestMaterialNumber;
	@JacksonXmlProperty(localName = "SERIAL_NUM")
	private String requestSerialNumber;
	@JacksonXmlProperty(localName = "SRV_OFF")
	private String requestServiceOffering;
	@JacksonXmlProperty(localName = "PLANT")
	private String requestPlant;

	//Error Table
	@JacksonXmlProperty(localName = "MATNR")
	private String responseMaterialNumber;
	@JacksonXmlProperty(localName = "SERNR")
	private String responseSerialNumber;
	@JacksonXmlProperty(localName = "WERKS")
	private String responseWerks;
	@JacksonXmlProperty(localName = "ZSRV_OFF")
	private String responseServiceOffering;
	@JacksonXmlProperty(localName = "MESSAGE")
	private String errorMessage;

	//Service offering data Table
	@JacksonXmlProperty(localName = "IWERK")
	private String responsePlanningPlant;
	@JacksonXmlProperty(localName = "ZZIWERK")
	private String responseAlternatePlant;
	@JacksonXmlProperty(localName = "ZZWERKS")
	private String responseDropShipPlant;

	//Service offering description table
	@JacksonXmlProperty(localName = "SHORT_OFF_DESC")
	private String offeringShortDescription;
	@JacksonXmlProperty(localName = "LONG_OFF_DESC")
	private String offeringLongDescription;
	@JacksonXmlProperty(localName = "SRV_OFF_CAT")
	private String offeringCategory;

	//Warranty Table
	@JacksonXmlProperty(localName = "EQUNR")
	private String warrantyEquipmentNumber;
	@JacksonXmlProperty(localName = "WARRANTY_DATE")
	private String warrantyDate;
	@JacksonXmlProperty(localName = "WARRANTY_TXT")
	private String warrantyText;

	//Pricing data
	@JacksonXmlProperty(localName = "WAERS")
	private String pricingCurrency;
	@JacksonXmlProperty(localName = "KBETR")
	private String unitPrice;
	@JacksonXmlProperty(localName = "KBETR_D")
	private String discountPrice;
	
	//Offering text table
	@JacksonXmlProperty(localName = "CONFIRMATION")
	private String confirmation;
	@JacksonXmlProperty(localName = "RMA_TEXT")
	private String rmaOfferingText;


	public String getRequestMaterialNumber()
	{
		return requestMaterialNumber;
	}

	public void setRequestMaterialNumber(final String requestMaterialNumber)
	{
		this.requestMaterialNumber = requestMaterialNumber;
	}

	public String getRequestSerialNumber()
	{
		return requestSerialNumber;
	}

	public void setRequestSerialNumber(final String requestSerialNumber)
	{
		this.requestSerialNumber = requestSerialNumber;
	}

	public String getRequestServiceOffering()
	{
		return requestServiceOffering;
	}

	public void setRequestServiceOffering(final String requestServiceOffering)
	{
		this.requestServiceOffering = requestServiceOffering;
	}

	public String getRequestPlant()
	{
		return requestPlant;
	}

	public void setRequestPlant(final String requestPlant)
	{
		this.requestPlant = requestPlant;
	}

	public String getResponseMaterialNumber()
	{
		return responseMaterialNumber;
	}

	public void setResponseMaterialNumber(final String responseMaterialNumber)
	{
		this.responseMaterialNumber = responseMaterialNumber;
	}

	public String getResponseSerialNumber()
	{
		return responseSerialNumber;
	}

	public void setResponseSerialNumber(final String responseSerialNumber)
	{
		this.responseSerialNumber = responseSerialNumber;
	}

	public String getResponseWerks()
	{
		return responseWerks;
	}

	public void setResponseWerks(final String responseWerks)
	{
		this.responseWerks = responseWerks;
	}

	public String getResponseServiceOffering()
	{
		return responseServiceOffering;
	}

	public void setResponseServiceOffering(final String responseServiceOffering)
	{
		this.responseServiceOffering = responseServiceOffering;
	}

	public String getErrorMessage()
	{
		return errorMessage;
	}

	public void setErrorMessage(final String errorMessage)
	{
		this.errorMessage = errorMessage;
	}

	public String getResponsePlanningPlant()
	{
		return responsePlanningPlant;
	}

	public void setResponsePlanningPlant(final String responsePlanningPlant)
	{
		this.responsePlanningPlant = responsePlanningPlant;
	}

	public String getResponseAlternatePlant()
	{
		return responseAlternatePlant;
	}

	public void setResponseAlternatePlant(final String responseAlternatePlant)
	{
		this.responseAlternatePlant = responseAlternatePlant;
	}

	public String getResponseDropShipPlant()
	{
		return responseDropShipPlant;
	}

	public void setResponseDropShipPlant(final String responseDropShipPlant)
	{
		this.responseDropShipPlant = responseDropShipPlant;
	}

	public String getOfferingShortDescription()
	{
		return offeringShortDescription;
	}

	public void setOfferingShortDescription(final String offeringShortDescription)
	{
		this.offeringShortDescription = offeringShortDescription;
	}

	public String getOfferingLongDescription()
	{
		return offeringLongDescription;
	}

	public void setOfferingLongDescription(final String offeringLongDescription)
	{
		this.offeringLongDescription = offeringLongDescription;
	}

	public String getOfferingCategory()
	{
		return offeringCategory;
	}

	public void setOfferingCategory(final String offeringCategory)
	{
		this.offeringCategory = offeringCategory;
	}

	public String getWarrantyEquipmentNumber()
	{
		return warrantyEquipmentNumber;
	}

	public void setWarrantyEquipmentNumber(final String warrantyEquipmentNumber)
	{
		this.warrantyEquipmentNumber = warrantyEquipmentNumber;
	}

	public String getWarrantyDate()
	{
		return warrantyDate;
	}

	public void setWarrantyDate(final String warrantyDate)
	{
		this.warrantyDate = warrantyDate;
	}

	public String getWarrantyText()
	{
		return warrantyText;
	}

	public void setWarrantyText(final String warrantyText)
	{
		this.warrantyText = warrantyText;
	}

	public String getPricingCurrency()
	{
		return pricingCurrency;
	}

	public void setPricingCurrency(final String pricingCurrency)
	{
		this.pricingCurrency = pricingCurrency;
	}

	public String getUnitPrice()
	{
		return unitPrice;
	}

	public void setUnitPrice(final String unitPrice)
	{
		this.unitPrice = unitPrice;
	}

	public String getDiscountPrice()
	{
		return discountPrice;
	}

	public void setDiscountPrice(final String discountPrice)
	{
		this.discountPrice = discountPrice;
	}

	public String getConfirmation() {
		return confirmation;
	}

	public void setConfirmation(String confirmation) {
		this.confirmation = confirmation;
	}

	public String getRmaOfferingText() {
		return rmaOfferingText;
	}

	public void setRmaOfferingText(String rmaOfferingText) {
		this.rmaOfferingText = rmaOfferingText;
	}
	
}