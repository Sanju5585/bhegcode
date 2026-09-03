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
 * @author 212695810 This class represents the XML structure for order creation API
 *
 */
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "Z_SORDERCREATE")
@JsonPropertyOrder(
{ "IM_ORDER_HEADER_IN", "T_CCARD", "T_ITEMS", "T_MESSAGETABLE", "T_PARTNER", "T_PRICE", "T_VC" })
public class BHGEZOrderCreateRequest
{
	@JacksonXmlProperty(localName = "IM_ORDER_HEADER_IN")
	private BHGEZOrderCreateRequestHeader headerTable;

	@JacksonXmlProperty(localName = "T_CCARD")
	private BHGEZOrderBappiCard ccItem;

	@JacksonXmlProperty(localName = "T_ITEMS")
	private BHGEZOrderCreateRequestItem itemsTable;

	@JacksonXmlProperty(localName = "T_MESSAGETABLE")
	private BHGEZOrderCreateRequestItem messageTable;

	@JacksonXmlProperty(localName = "T_PARTNER")
	private BHGEZOrderCreateRequestItem partnerTable;

	@JacksonXmlProperty(localName = "T_PRICE")
	private BHGEZOrderCreateRequestItem priceTable;

	@JacksonXmlProperty(localName = "T_VC")
	private BHGEZOrderCreateRequestItem vcTable;

	public BHGEZOrderCreateRequestHeader getHeaderTable()
	{
		this.headerTable = headerTable == null ? new BHGEZOrderCreateRequestHeader() : headerTable;
		return headerTable;
	}

	public void setHeaderTable(final BHGEZOrderCreateRequestHeader headerTable)
	{
		this.headerTable = headerTable;
	}

	public BHGEZOrderCreateRequestItem getItemsTable()
	{
		this.itemsTable = itemsTable == null ? new BHGEZOrderCreateRequestItem() : itemsTable;
		return itemsTable;
	}

	public void setItemsTable(final BHGEZOrderCreateRequestItem itemsTable)
	{
		this.itemsTable = itemsTable;
	}

	public BHGEZOrderCreateRequestItem getMessageTable()
	{
		this.messageTable = messageTable == null ? new BHGEZOrderCreateRequestItem() : messageTable;
		return messageTable;
	}

	public void setMessageTable(final BHGEZOrderCreateRequestItem messageTable)
	{
		this.messageTable = messageTable;
	}

	public BHGEZOrderCreateRequestItem getPartnerTable()
	{
		this.partnerTable = partnerTable == null ? new BHGEZOrderCreateRequestItem() : partnerTable;
		return partnerTable;
	}

	public void setPartnerTable(final BHGEZOrderCreateRequestItem partnerTable)
	{
		this.partnerTable = partnerTable;
	}

	public BHGEZOrderCreateRequestItem getPriceTable()
	{
		this.priceTable = priceTable == null ? new BHGEZOrderCreateRequestItem() : priceTable;
		return priceTable;
	}

	public void setPriceTable(final BHGEZOrderCreateRequestItem priceTable)
	{
		this.priceTable = priceTable;
	}

	public BHGEZOrderCreateRequestItem getVcTable()
	{
		this.vcTable = vcTable == null ? new BHGEZOrderCreateRequestItem() : vcTable;
		return vcTable;
	}

	public void setVcTable(final BHGEZOrderCreateRequestItem vcTable)
	{
		this.vcTable = vcTable;
	}

	public BHGEZOrderBappiCard getCcItem() {
		this.ccItem = ccItem == null ? new BHGEZOrderBappiCard() : ccItem;
		return ccItem;
	}

	public void setCcItem(BHGEZOrderBappiCard ccItem) {
		this.ccItem = ccItem;
	}
}
