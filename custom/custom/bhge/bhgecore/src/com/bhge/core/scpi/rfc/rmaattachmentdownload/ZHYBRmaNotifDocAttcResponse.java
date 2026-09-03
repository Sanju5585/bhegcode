package com.bhge.core.scpi.rfc.rmaattachmentdownload;

import com.bhge.core.scpi.rfc.rmaattachmentdownload.ZHYBRmaNotifDocAttcRequest$Item;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement( localName = "ZHYB_RMA_NOTIF_DOC_ATTCResponse")
@JsonPropertyOrder({"EX_NOTIF_ATTC","T_MESSAGETABLE"})
public class ZHYBRmaNotifDocAttcResponse {

	@JacksonXmlProperty(localName = "EX_NOTIF_ATTC")
    private ZHYBRmaNotifDocAttcRequest$Item ex_notif_attc;

    @JacksonXmlProperty(localName="T_MESSAGETABLE")
    private ZHYBRmaNotifDocAttcRequest$Item t_messageTable;

	/**
	 * @return the ex_notif_attc
	 */
	public ZHYBRmaNotifDocAttcRequest$Item getEx_notif_attc()
	{
		return ex_notif_attc;
	}

	/**
	 * @param ex_notif_attc the ex_notif_attc to set
	 */
	public void setEx_notif_attc(ZHYBRmaNotifDocAttcRequest$Item ex_notif_attc)
	{
		this.ex_notif_attc = ex_notif_attc;
	}

	/**
	 * @return the t_messageTable
	 */
	public ZHYBRmaNotifDocAttcRequest$Item getT_messageTable()
	{
		return t_messageTable;
	}

	/**
	 * @param t_messageTable the t_messageTable to set
	 */
	public void setT_messageTable(ZHYBRmaNotifDocAttcRequest$Item t_messageTable)
	{
		this.t_messageTable = t_messageTable;
	}

    
	
}
