/**
 *
 */
package com.bhge.core.scpi.rfc.zordercreate;

import java.util.LinkedList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;


/**
 * @author 212695810 This class is used to add all item level data for order creation XML
 *
 */

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
public class BHGEZOrderCreateRequestItem
{
	private List<BHGEZOrderCreateRequestItem> items;

	@JacksonXmlProperty(localName = "item")
	@JacksonXmlElementWrapper(useWrapping = false)
	public List<BHGEZOrderCreateRequestItem> getItems()
	{
		return items;
	}

	public void setItems(final List<BHGEZOrderCreateRequestItem> items)
	{
		this.items = items;
	}

	public BHGEZOrderCreateRequestItem()
	{
		this.items = new LinkedList<>();
	}


	//Item table fields
	@JacksonXmlProperty(localName = "ITM_NUMBER")
	private String itemNumber;
	@JacksonXmlProperty(localName = "MATERIAL")
	private String material;
	@JacksonXmlProperty(localName = "PLANT")
	private String plant;
	@JacksonXmlProperty(localName = "TARGET_QTY")
	private String targetQuantity;
	@JacksonXmlProperty(localName = "AVAIL_LINE_TEXT")
	private String availableLineText;
	@JacksonXmlProperty(localName = "BLW_LINE_TEXT")
	private String note;
	@JacksonXmlProperty(localName = "SERV_DATE")
	private String requestedDeliveryDate;


	//Partner table
	@JacksonXmlProperty(localName = "PARTNER_NUMBER")
	private String partnerNumber;
	@JacksonXmlProperty(localName = "PARTNER_FUNCTION")
	private String partnerFunction;
	@JacksonXmlProperty(localName = "COUNTRY")
	private String country;
	@JacksonXmlProperty(localName = "STREET")
	private String line1;
	@JacksonXmlProperty(localName = "STREET2")
	private String line2;
	@JacksonXmlProperty(localName = "CITY")
	private String city;
	@JacksonXmlProperty(localName = "STATE")
	private String state;
	@JacksonXmlProperty(localName = "ZIP")
	private String zip;
	@JacksonXmlProperty(localName = "SAVE_FOR_FUTURE")
	private String saveForFuture;
	@JacksonXmlProperty(localName = "COMP_NAME")
	private String company;
	@JacksonXmlProperty(localName = "DELIV_POINT")
	private String deliveryPoint;

	//Price table
	@JacksonXmlProperty(localName = "POSNR")
	private String positionNumber;
	@JacksonXmlProperty(localName = "COND_TYPE")
	private String conditionType;
	@JacksonXmlProperty(localName = "COND_VALUE")
	private String conditionValue;
	@JacksonXmlProperty(localName = "COND_CURR")
	private String conditionCurrency;
	@JacksonXmlProperty(localName = "DISC_REASON")
	private String discountReason;
	@JacksonXmlProperty(localName = "VOUCHER_CODE")
	private String voucherCode;

	//VC table
	@JacksonXmlProperty(localName = "CHARC")
	private String character;
	@JacksonXmlProperty(localName = "VALUE")
	private String characterValue;

	//Message Table for response
	@JacksonXmlProperty(localName = "TYPE")
	private String type;
	@JacksonXmlProperty(localName = "MESSAGE")
	private String message;

	@JacksonXmlProperty(localName = "PMNTTRMS")
	private String paymentTerms;

	public String getItemNumber()
	{
		return itemNumber;
	}

	public void setItemNumber(final String itemNumber)
	{
		this.itemNumber = itemNumber;
	}

	public String getMaterial()
	{
		return material;
	}

	public void setMaterial(final String material)
	{
		this.material = material;
	}

	public String getPlant()
	{
		return plant;
	}

	public void setPlant(final String plant)
	{
		this.plant = plant;
	}

	public String getTargetQuantity()
	{
		return targetQuantity;
	}

	public void setTargetQuantity(final String targetQuantity)
	{
		this.targetQuantity = targetQuantity;
	}

	public String getAvailableLineText()
	{
		return availableLineText;
	}

	public void setAvailableLineText(final String availableLineText)
	{
		this.availableLineText = availableLineText;
	}

	public String getNote()
	{
		return note;
	}

	public void setNote(final String note)
	{
		this.note = note;
	}

	public String getRequestedDeliveryDate()
	{
		return requestedDeliveryDate;
	}

	public void setRequestedDeliveryDate(final String requestedDeliveryDate)
	{
		this.requestedDeliveryDate = requestedDeliveryDate;
	}

	public String getPartnerNumber()
	{
		return partnerNumber;
	}

	public void setPartnerNumber(final String partnerNumber)
	{
		this.partnerNumber = partnerNumber;
	}

	public String getPartnerFunction()
	{
		return partnerFunction;
	}

	public void setPartnerFunction(final String partnerFunction)
	{
		this.partnerFunction = partnerFunction;
	}

	public String getCountry()
	{
		return country;
	}

	public void setCountry(final String country)
	{
		this.country = country;
	}


	public String getLine1()
	{
		return line1;
	}

	public void setLine1(final String line1)
	{
		this.line1 = line1;
	}

	public String getLine2()
	{
		return line2;
	}

	public void setLine2(final String line2)
	{
		this.line2 = line2;
	}

	public String getCity()
	{
		return city;
	}

	public void setCity(final String city)
	{
		this.city = city;
	}

	public String getState()
	{
		return state;
	}

	public void setState(final String state)
	{
		this.state = state;
	}

	public String getZip()
	{
		return zip;
	}

	public void setZip(final String zip)
	{
		this.zip = zip;
	}

	public String getSaveForFuture()
	{
		return saveForFuture;
	}

	public void setSaveForFuture(final String saveForFuture)
	{
		this.saveForFuture = saveForFuture;
	}

	public String getCompany()
	{
		return company;
	}

	public void setCompany(final String company)
	{
		this.company = company;
	}

	public String getDeliveryPoint()
	{
		return deliveryPoint;
	}

	public void setDeliveryPoint(final String deliveryPoint)
	{
		this.deliveryPoint = deliveryPoint;
	}

	public String getPositionNumber()
	{
		return positionNumber;
	}

	public void setPositionNumber(final String positionNumber)
	{
		this.positionNumber = positionNumber;
	}

	public String getConditionType()
	{
		return conditionType;
	}

	public void setConditionType(final String conditionType)
	{
		this.conditionType = conditionType;
	}

	public String getConditionValue()
	{
		return conditionValue;
	}

	public void setConditionValue(final String conditionValue)
	{
		this.conditionValue = conditionValue;
	}

	public String getConditionCurrency()
	{
		return conditionCurrency;
	}

	public String getDiscountReason()
	{
		return discountReason;
	}

	public void setDiscountReason(final String discountReason)
	{
		this.discountReason = discountReason;
	}

	public String getVoucherCode()
	{
		return voucherCode;
	}

	public void setVoucherCode(final String voucherCode)
	{
		this.voucherCode = voucherCode;
	}

	public void setConditionCurrency(final String conditionCurrency)
	{
		this.conditionCurrency = conditionCurrency;
	}

	public String getCharacter()
	{
		return character;
	}

	public void setCharacter(final String character)
	{
		this.character = character;
	}

	public String getCharacterValue()
	{
		return characterValue;
	}

	public void setCharacterValue(final String characterValue)
	{
		this.characterValue = characterValue;
	}

	public String getType()
	{
		return type;
	}

	public void setType(final String type)
	{
		this.type = type;
	}

	public String getMessage()
	{
		return message;
	}

	public void setMessage(final String message)
	{
		this.message = message;
	}

	public String getPaymentTerms() {return paymentTerms;}

	public void setPaymentTerms(String paymentTerms) {this.paymentTerms = paymentTerms;}

}
