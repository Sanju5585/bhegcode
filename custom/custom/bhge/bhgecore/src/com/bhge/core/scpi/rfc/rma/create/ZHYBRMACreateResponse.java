/**
 * 
 */
package com.bhge.core.scpi.rfc.rma.create;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

import lombok.ToString;

/**
 * @author 212722447
 *
 */

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonRootName(value = "rfc:ZHYB_RMA_CREATE.Response") 
@JsonPropertyOrder(
{ "RMA_HEADERDATA", "RMA_ITEMDATA", "T_MESSAGETABLE" })
public class ZHYBRMACreateResponse
{

   @JacksonXmlProperty(localName="RMA_HEADERDATA")
   private ZHYBRMAHeaderData rmaHeaderData;

   @JacksonXmlProperty(localName="RMA_ITEMDATA")
   private ZHYBRMACreateRequestItem rmaItemData;
   
	@JacksonXmlProperty(localName="T_MESSAGETABLE")
   private ZHYBRMACreateRequestItem messageTables;
	
	/**
	 * @return the rmaHeaderData
	 */
	public ZHYBRMAHeaderData getRmaHeaderData()
	{
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
		return messageTables;
	}
	/**
	 * @param messageTables the messageTables to set
	 */
	public void setMessageTables(ZHYBRMACreateRequestItem messageTables)
	{
		this.messageTables = messageTables;
	}
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
	 * @return the rmaNumber
	 */
	public String getRmaNumber()
	{
		return rmaNumber;
	}
	/**
	 * @param rmaNumber the rmaNumber to set
	 */
	public void setRmaNumber(String rmaNumber)
	{
		this.rmaNumber = rmaNumber;
	}
	@JsonProperty(value = "FLAG")
	private String flag;
	@JsonProperty(value = "RMA_NUMBER")
	private String rmaNumber;

}
