package com.bhge.core.scpi.rfc.orderattachmentdownload;

import com.bhge.core.scpi.rfc.rmaattachmentdownload.ZHYBRmaNotifDocAttcRequest$Item;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement( localName = "ZHYB_ORDER_PDFResponse")
@JsonPropertyOrder({"EX_ORDER_ATTC","T_MESSAGETABLE"})
public class ZHYBOrderPdfResponse {

	@JacksonXmlProperty(localName = "EX_ORDER_ATTC")
    private ZHYBOrderItemRequest ex_order_attc;

    @JacksonXmlProperty(localName="T_MESSAGETABLE")
    private ZHYBOrderItemRequest t_messageTable;

	public ZHYBOrderItemRequest getEx_order_attc() {
		return ex_order_attc;
	}

	public void setEx_order_attc(ZHYBOrderItemRequest ex_order_attc) {
		this.ex_order_attc = ex_order_attc;
	}

	public ZHYBOrderItemRequest getT_messageTable() {
		return t_messageTable;
	}

	public void setT_messageTable(ZHYBOrderItemRequest t_messageTable) {
		this.t_messageTable = t_messageTable;
	}

}