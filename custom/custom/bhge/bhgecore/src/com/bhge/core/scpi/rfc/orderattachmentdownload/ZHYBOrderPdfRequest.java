package com.bhge.core.scpi.rfc.orderattachmentdownload;

import com.bhge.core.scpi.rfc.zmataccessories.ETMATAccessories;
import com.bhge.core.scpi.rfc.rmaattachmentdownload.ZHYBRmaNotifDocAttcRequest$Item;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;


@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName ="ZHYB_ORDER_PDF")
@JsonPropertyOrder({"CUSTOMER", "FILE_NAME", "FILE_TYPE", "IM_FLAG", "IM_SALES_ORDER", "T_MESSAGETABLE"})
public class ZHYBOrderPdfRequest {

    @JacksonXmlProperty(localName="CUSTOMER")
    private String customer;

    @JacksonXmlProperty(localName = "FILE_NAME")
    private String filename;

    @JacksonXmlProperty(localName="FILE_TYPE")
    private String filetype;

    @JacksonXmlProperty(localName="IM_FLAG")
    private String imflag;

    @JacksonXmlProperty(localName="IM_SALES_ORDER")
    private String salesorder;

    @JacksonXmlProperty(localName = "T_MESSAGETABLE")
    private ZHYBOrderItemRequest t_messageTable;

	/**
	 * @return the customer
	 */
	public String getCustomer()
	{
		return customer;
	}

	/**
	 * @param customer the customer to set
	 */
	public void setCustomer(String customer)
	{
		this.customer = customer;
	}

	/**
	 * @return the filename
	 */
	public String getFilename()
	{
		return filename;
	}

	/**
	 * @param filename the filename to set
	 */
	public void setFilename(String filename)
	{
		this.filename = filename;
	}

	/**
	 * @return the filetype
	 */
	public String getFiletype()
	{
		return filetype;
	}

	/**
	 * @param filetype the filetype to set
	 */
	public void setFiletype(String filetype)
	{
		this.filetype = filetype;
	}

	/**
	 * @return the imflag
	 */
	public String getImflag()
	{
		return imflag;
	}

	/**
	 * @param imflag the imflag to set
	 */
	public void setImflag(String imflag)
	{
		this.imflag = imflag;
	}

	public String getSalesorder() {
		return salesorder;
	}

	public void setSalesorder(String salesorder) {
		this.salesorder = salesorder;
	}

	public ZHYBOrderItemRequest getT_messageTable() {
		return t_messageTable;
	}

	public void setT_messageTable(ZHYBOrderItemRequest t_messageTable) {
		this.t_messageTable = t_messageTable;
	}

	

    
}