/**
 *
 */
package com.bhge.core.scpi.rfc.registration;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;




/**
 * @author 212722447
 *
 */


@JsonIgnoreProperties(ignoreUnknown = true)

//@JacksonXmlRootElement(localName = "rfc:ZHYB_ECOMM_REG.Response")


//@JsonRootName(value = "rfc:ZGB_HYB_ECOMM_REG.Response")
@JsonRootName(value = "rfc:ZHYB_ECOMM_REG.Response") 




@JsonPropertyOrder(
{ "T_MESSAGETABLE", "T_SALES_AREA" })
public class BHGEZSoldToValidationResponse
{

	//@JacksonXmlProperty(localName = "T_MESSAGETABLE")
	@JsonProperty(value="T_MESSAGETABLE")
	private BHGEZSoldtoValidationRequestItem messageTable;

	//@JacksonXmlProperty(localName = "T_SALES_AREA")
	@JsonProperty(value="T_SALES_AREA")
	private BHGEZSoldtoValidationRequestItem tSalesArea;

	/**
	 * @return the messageTable
	 */
	public BHGEZSoldtoValidationRequestItem getMessageTable()
	{
		return messageTable;
	}

	/**
	 * @param messageTable
	 *           the messageTable to set
	 */
	public void setMessageTable(final BHGEZSoldtoValidationRequestItem messageTable)
	{
		this.messageTable = messageTable;
	}

	/**
	 * @return the tSalesArea
	 */
	public BHGEZSoldtoValidationRequestItem gettSalesArea()
	{
		return tSalesArea;
	}

	/**
	 * @param tSalesArea
	 *           the tSalesArea to set
	 */
	public void settSalesArea(final BHGEZSoldtoValidationRequestItem tSalesArea)
	{
		this.tSalesArea = tSalesArea;
	}

}
