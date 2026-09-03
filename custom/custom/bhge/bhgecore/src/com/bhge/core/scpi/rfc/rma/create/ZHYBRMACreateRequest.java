/**
 * 
 */
package com.bhge.core.scpi.rfc.rma.create;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;

/**
 * @author 212722447
 *
 */
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName ="ZHYB_RMA_CREATE")
@JsonPropertyOrder({"RMA_HEADERDATA", "RMA_ITEMDATA", "T_MESSAGETABLE"})

public class ZHYBRMACreateRequest
{
   @JacksonXmlProperty(localName="RMA_HEADERDATA")
   private ZHYBRMAHeaderData rmaHeaderData;

   @JacksonXmlProperty(localName="RMA_ITEMDATA")
   private ZHYBRMACreateRequestItem rmaItemData;
   
	@JacksonXmlProperty(localName="T_MESSAGETABLE")
   private ZHYBRMACreateRequestItem messageTables;
	
	@JsonProperty(value = "FLAG")
	private String flag;
	@JsonProperty(value = "RMA_NUMBER")
	private String rmaNumber;


   /**
	 * @return the flag
	 */
	public String getFlag()
	{
		return flag;
	}

	/**
	 * @param flag the flag to set
	 */
	public void setFlag(String flag)
	{
		this.flag = flag;
	}

	/**
	 * @return the rmaHeaderData
	 */
	public ZHYBRMAHeaderData getRmaHeaderData()
	{
		  this.rmaHeaderData = rmaHeaderData == null ? new ZHYBRMAHeaderData() : rmaHeaderData; 
		  return rmaHeaderData; 
	}

	/**
	 * @param rmaHeaderData the rmaHeaderData to set
	 */
	public void setRmaHeaderData(ZHYBRMAHeaderData rmaHeaderData)
	{
		this.rmaHeaderData = rmaHeaderData;
	}

	/**
	 * @return the rmaItemData
	 */
	public ZHYBRMACreateRequestItem getRmaItemData()
	{
		  this.rmaItemData = rmaItemData == null ? new ZHYBRMACreateRequestItem() : rmaItemData; 
		  return rmaItemData; 
	}

	/**
	 * @param rmaItemData the rmaItemData to set
	 */
	public void setRmaItemData(ZHYBRMACreateRequestItem rmaItemData)
	{
		this.rmaItemData = rmaItemData;
	}

	/**
	 * @return the messageTables
	 */
	public ZHYBRMACreateRequestItem getMessageTables()
	{
		  this.messageTables = messageTables == null ? new ZHYBRMACreateRequestItem() : messageTables; 
		  return messageTables;
	}

	/**
	 * @param messageTables the messageTables to set
	 */
	public void setMessageTables(ZHYBRMACreateRequestItem messageTables)
	{
		this.messageTables = messageTables;
	}

}
