/**
 * 
 */
package com.bhge.core.scpi.rfc.rma.create;

import java.util.ArrayList;
import java.util.List;

import com.bhge.core.scpi.rfc.registration.BHGEZSoldtoValidationRequestItem;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

/**
 * @author 212722447
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
public class ZHYBRMACreateRequestItem
{
	
	private List<ZHYBRMACreateRequestItem> items;

	@JacksonXmlProperty(localName = "item")
	@JacksonXmlElementWrapper(useWrapping = false)
	public List<ZHYBRMACreateRequestItem> getItems()
	{
		this.items = items == null ? new ArrayList<ZHYBRMACreateRequestItem>() : items;
		return items;
	}

	/**
	 * @return the material
	 */
	public String getMaterial()
	{
		return material;
	}

	/**
	 * @param material the material to set
	 */
	public void setMaterial(String material)
	{
		this.material = material;
	}

	/**
	 * @return the lineItem
	 */
	public String getLineItem()
	{
		return lineItem;
	}

	/**
	 * @param lineItem the lineItem to set
	 */
	public void setLineItem(String lineItem)
	{
		this.lineItem = lineItem;
	}

	/**
	 * @return the quantity
	 */
	public String getQuantity()
	{
		return quantity;
	}

	/**
	 * @param quantity the quantity to set
	 */
	public void setQuantity(String quantity)
	{
		this.quantity = quantity;
	}

	/**
	 * @return the equipmentNum
	 */
	public String getEquipmentNum()
	{
		return equipmentNum;
	}

	/**
	 * @param equipmentNum the equipmentNum to set
	 */
	public void setEquipmentNum(String equipmentNum)
	{
		this.equipmentNum = equipmentNum;
	}

	/**
	 * @return the warrantyClaimInfo
	 */
	public String getWarrantyClaimInfo()
	{
		return warrantyClaimInfo;
	}

	/**
	 * @param warrantyClaimInfo the warrantyClaimInfo to set
	 */
	public void setWarrantyClaimInfo(String warrantyClaimInfo)
	{
		this.warrantyClaimInfo = warrantyClaimInfo;
	}

	/**
	 * @return the mfgYear
	 */
	public String getMfgYear()
	{
		return mfgYear;
	}

	/**
	 * @param mfgYear the mfgYear to set
	 */
	public void setMfgYear(String mfgYear)
	{
		this.mfgYear = mfgYear;
	}

	/**
	 * @return the serialNum
	 */
	public String getSerialNum()
	{
		return serialNum;
	}

	/**
	 * @param serialNum the serialNum to set
	 */
	public void setSerialNum(String serialNum)
	{
		this.serialNum = serialNum;
	}

	/**
	 * @return the similarPart
	 */
	public String getSimilarPart()
	{
		return similarPart;
	}

	/**
	 * @param similarPart the similarPart to set
	 */
	public void setSimilarPart(String similarPart)
	{
		this.similarPart = similarPart;
	}

	/**
	 * @return the hazardousPart
	 */
	public String getHazardousPart()
	{
		return hazardousPart;
	}

	/**
	 * @param hazardousPart the hazardousPart to set
	 */
	public void setHazardousPart(String hazardousPart)
	{
		this.hazardousPart = hazardousPart;
	}

	/**
	 * @return the offering1
	 */
	public String getOffering1()
	{
		return offering1;
	}

	/**
	 * @param offering1 the offering1 to set
	 */
	public void setOffering1(String offering1)
	{
		this.offering1 = offering1;
	}

	/**
	 * @return the offering2
	 */
	public String getOffering2()
	{
		return offering2;
	}

	/**
	 * @param offering2 the offering2 to set
	 */
	public void setOffering2(String offering2)
	{
		this.offering2 = offering2;
	}

	/**
	 * @return the offering3
	 */
	public String getOffering3()
	{
		return offering3;
	}

	/**
	 * @param offering3 the offering3 to set
	 */
	public void setOffering3(String offering3)
	{
		this.offering3 = offering3;
	}

	/**
	 * @return the offering4
	 */
	public String getOffering4()
	{
		return offering4;
	}

	/**
	 * @param offering4 the offering4 to set
	 */
	public void setOffering4(String offering4)
	{
		this.offering4 = offering4;
	}

	/**
	 * @return the offering5
	 */
	public String getOffering5()
	{
		return offering5;
	}

	/**
	 * @param offering5 the offering5 to set
	 */
	public void setOffering5(String offering5)
	{
		this.offering5 = offering5;
	}

	/**
	 * @return the productDetails
	 */
	public String getProductDetails()
	{
		return productDetails;
	}

	/**
	 * @param productDetails the productDetails to set
	 */
	public void setProductDetails(String productDetails)
	{
		this.productDetails = productDetails;
	}

	/**
	 * @return the problemDescription
	 */
	public String getProblemDescription()
	{
		return problemDescription;
	}

	/**
	 * @param problemDescription the problemDescription to set
	 */
	public void setProblemDescription(String problemDescription)
	{
		this.problemDescription = problemDescription;
	}

	/**
	 * @return the lineNotes
	 */
	public String getLineNotes()
	{
		return lineNotes;
	}

	/**
	 * @param lineNotes the lineNotes to set
	 */
	public void setLineNotes(String lineNotes)
	{
		this.lineNotes = lineNotes;
	}

	/**
	 * @return the tilDetails
	 */
	public String getTilDetails()
	{
		return tilDetails;
	}

	/**
	 * @param tilDetails the tilDetails to set
	 */
	public void setTilDetails(String tilDetails)
	{
		this.tilDetails = tilDetails;
	}

	/**
	 * @return the offeringText
	 */
	public String getOfferingText()
	{
		return offeringText;
	}

	/**
	 * @param offeringText the offeringText to set
	 */
	public void setOfferingText(String offeringText)
	{
		this.offeringText = offeringText;
	}

	/**
	 * @return the isAccessoryPresent
	 */
	public String getIsAccessoryPresent()
	{
		return isAccessoryPresent;
	}

	/**
	 * @param isAccessoryPresent the isAccessoryPresent to set
	 */
	public void setIsAccessoryPresent(String isAccessoryPresent)
	{
		this.isAccessoryPresent = isAccessoryPresent;
	}

	/**
	 * @return the accessoriesNotes
	 */
	public String getAccessoriesNotes()
	{
		return accessoriesNotes;
	}

	/**
	 * @param accessoriesNotes the accessoriesNotes to set
	 */
	public void setAccessoriesNotes(String accessoriesNotes)
	{
		this.accessoriesNotes = accessoriesNotes;
	}

	/**
	 * @return the priceRange
	 */
	public String getPriceRange()
	{
		return priceRange;
	}

	/**
	 * @param priceRange the priceRange to set
	 */
	public void setPriceRange(String priceRange)
	{
		this.priceRange = priceRange;
	}

	/**
	 * @return the chargesExpedite
	 */
	public String getChargesExpedite()
	{
		return chargesExpedite;
	}

	/**
	 * @param chargesExpedite the chargesExpedite to set
	 */
	public void setChargesExpedite(String chargesExpedite)
	{
		this.chargesExpedite = chargesExpedite;
	}

	/**
	 * @return the type
	 */
	public String getType()
	{
		return type;
	}

	/**
	 * @param type the type to set
	 */
	public void setType(String type)
	{
		this.type = type;
	}

	/**
	 * @return the id
	 */
	public String getId()
	{
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id)
	{
		this.id = id;
	}

	/**
	 * @return the number
	 */
	public String getNumber()
	{
		return number;
	}

	/**
	 * @param number the number to set
	 */
	public void setNumber(String number)
	{
		this.number = number;
	}

	/**
	 * @return the message
	 */
	public String getMessage()
	{
		return message;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message)
	{
		this.message = message;
	}

	/**
	 * @return the logNo
	 */
	public String getLogNo()
	{
		return logNo;
	}

	/**
	 * @param logNo the logNo to set
	 */
	public void setLogNo(String logNo)
	{
		this.logNo = logNo;
	}

	/**
	 * @return the logMsgNo
	 */
	public String getLogMsgNo()
	{
		return logMsgNo;
	}

	/**
	 * @param logMsgNo the logMsgNo to set
	 */
	public void setLogMsgNo(String logMsgNo)
	{
		this.logMsgNo = logMsgNo;
	}

	/**
	 * @return the messageV1
	 */
	public String getMessageV1()
	{
		return messageV1;
	}

	/**
	 * @param messageV1 the messageV1 to set
	 */
	public void setMessageV1(String messageV1)
	{
		this.messageV1 = messageV1;
	}

	/**
	 * @return the messageV2
	 */
	public String getMessageV2()
	{
		return messageV2;
	}

	/**
	 * @param messageV2 the messageV2 to set
	 */
	public void setMessageV2(String messageV2)
	{
		this.messageV2 = messageV2;
	}

	/**
	 * @return the messageV3
	 */
	public String getMessageV3()
	{
		return messageV3;
	}

	/**
	 * @param messageV3 the messageV3 to set
	 */
	public void setMessageV3(String messageV3)
	{
		this.messageV3 = messageV3;
	}

	/**
	 * @return the messageV4
	 */
	public String getMessageV4()
	{
		return messageV4;
	}

	/**
	 * @param messageV4 the messageV4 to set
	 */
	public void setMessageV4(String messageV4)
	{
		this.messageV4 = messageV4;
	}

	/**
	 * @return the parameter
	 */
	public String getParameter()
	{
		return parameter;
	}

	/**
	 * @param parameter the parameter to set
	 */
	public void setParameter(String parameter)
	{
		this.parameter = parameter;
	}

	/**
	 * @return the row
	 */
	public String getRow()
	{
		return row;
	}

	/**
	 * @param row the row to set
	 */
	public void setRow(String row)
	{
		this.row = row;
	}

	/**
	 * @return the field
	 */
	public String getField()
	{
		return field;
	}

	/**
	 * @param field the field to set
	 */
	public void setField(String field)
	{
		this.field = field;
	}

	/**
	 * @return the system
	 */
	public String getSystem()
	{
		return system;
	}

	/**
	 * @param system the system to set
	 */
	public void setSystem(String system)
	{
		this.system = system;
	}

	public void setItems(final List<ZHYBRMACreateRequestItem> items)
	{
		this.items = items;
	}


	@JsonProperty(value = "MATERIAL")
	private String material;
	@JsonProperty(value = "LINE_ITEM")
	private String lineItem;
	@JsonProperty(value = "QUANTITY")
	private String quantity;
	@JsonProperty(value = "EQUIPMENT_NUM")
	private String equipmentNum;
	@JsonProperty(value = "WARRANTY_CLAIM_INFO")
	private String warrantyClaimInfo;
	@JsonProperty(value = "MFG_YEAR")
	private String mfgYear;
	@JsonProperty(value = "SERIAL_NUM")
	private String serialNum;
	@JsonProperty(value = "SIMILAR_PART")
	private String similarPart;
	@JsonProperty(value = "HAZARDOUS_PART")
	private String hazardousPart;
	@JsonProperty(value = "OFFERING1")
	private String offering1;
	@JsonProperty(value = "OFFERING2")
	private String offering2;
	@JsonProperty(value = "OFFERING3")
	private String offering3;
	@JsonProperty(value = "OFFERING4")
	private String offering4;
	@JsonProperty(value = "OFFERING5")
	private String offering5;
	@JsonProperty(value = "PRODUCT_DETAILS")
	private String productDetails;
	@JsonProperty(value = "PROBLEM_DESCRIPTION")
	private String problemDescription;
	@JsonProperty(value = "LINE_NOTES")
	private String lineNotes;
	@JsonProperty(value = "TIL_DETAILS")
	private String tilDetails;
	@JsonProperty(value = "OFFERING_TEXT")
	private String offeringText;
	@JsonProperty(value = "ISACCESSORY_PRESENT")
	private String isAccessoryPresent;
	@JsonProperty(value = "ACCESSORIES_NOTES")
	private String accessoriesNotes;
	@JsonProperty(value = "PRICE_RANGE")
	private String priceRange;
	@JsonProperty(value = "CHARGES_EXPEDITE")
	private String chargesExpedite;
	@JsonProperty(value = "TYPE")
	private String type;
	@JsonProperty(value = "ID")
	private String id;
	@JsonProperty(value = "NUMBER")
	private String number;
	@JsonProperty(value = "MESSAGE")
	private String message;
	@JsonProperty(value = "LOG_NO")
	private String logNo;
	@JsonProperty(value = "LOG_MSG_NO")
	private String logMsgNo;
	@JsonProperty(value = "MESSAGE_V1")
	private String messageV1;
	@JsonProperty(value = "MESSAGE_V2")
	private String messageV2;
	@JsonProperty(value = "MESSAGE_V3")
	private String messageV3;
	@JsonProperty(value = "MESSAGE_V4")
	private String messageV4;
	@JsonProperty(value = "PARAMETER")
	private String parameter;
	@JsonProperty(value = "ROW")
	private String row;
	@JsonProperty(value = "FIELD")
	private String field;
	@JsonProperty(value = "SYSTEM")
	private String system;

}
