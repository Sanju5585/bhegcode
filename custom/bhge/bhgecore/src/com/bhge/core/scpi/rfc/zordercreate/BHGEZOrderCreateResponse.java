/**
 *
 */
package com.bhge.core.scpi.rfc.zordercreate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;

import java.util.List;


/**
 * @author 212695810 This is the response XML for order create API
 *
 */
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "rfc:Z_SORDERCREATE.Response")
@JsonPropertyOrder(
{ "EX_SALESDOCUMENT", "T_CCARD", "T_ITEMS", "T_MESSAGETABLE", "T_PARTNER", "T_PRICE", "T_VC" })
public class BHGEZOrderCreateResponse
{
	@JacksonXmlProperty(localName = "T_MESSAGETABLE")
	private BHGEZOrderCreateRequestItem messageTable;

	@JacksonXmlProperty(localName = "T_CCARD")
	private BHGEZOrderBappiCard ccItem;

	@JacksonXmlProperty(localName = "T_PARTNER")
	private BHGEZOrderCreateRequestItem partnerTable;

	public BHGEZOrderCreateRequestItem getMessageTable()
	{
		return messageTable;
	}

	public void setMessageTable(final BHGEZOrderCreateRequestItem messageTable)
	{
		this.messageTable = messageTable;
	}

	public BHGEZOrderCreateRequestItem getPartnerTable()
	{
		return partnerTable;
	}

	public void setPartnerTable(final BHGEZOrderCreateRequestItem partnerTable)
	{
		this.partnerTable = partnerTable;
	}

	public BHGEZOrderBappiCard getCcItem() {
		return ccItem;
	}

	public void setCcItem(BHGEZOrderBappiCard ccItem) {
		this.ccItem = ccItem;
	}
}
