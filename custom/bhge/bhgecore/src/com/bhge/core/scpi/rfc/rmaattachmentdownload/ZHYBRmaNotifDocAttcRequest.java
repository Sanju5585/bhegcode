package com.bhge.core.scpi.rfc.rmaattachmentdownload;

import com.bhge.core.scpi.rfc.zmataccessories.ETMATAccessories;
import com.bhge.core.scpi.rfc.rmaattachmentdownload.ZHYBRmaNotifDocAttcRequest$Item;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;


@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName ="ZHYB_RMA_NOTIF_DOC_ATTC")
@JsonPropertyOrder({"CUSTOMER", "FILE_NAME", "FILE_TYPE", "IM_FLAG", "NOTIF_NO", "T_MESSAGETABLE"})
public class ZHYBRmaNotifDocAttcRequest {

    @JacksonXmlProperty(localName="CUSTOMER")
    private String customer;

    @JacksonXmlProperty(localName = "FILE_NAME")
    private String filename;

    @JacksonXmlProperty(localName="FILE_TYPE")
    private String filetype;

    @JacksonXmlProperty(localName="IM_FLAG")
    private String imflag;

    @JacksonXmlProperty(localName="NOTIF_NO")
    private String rmanumber;

    @JacksonXmlProperty(localName = "T_MESSAGETABLE")
    private ZHYBRmaNotifDocAttcRequest$Item t_messageTable;

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

	/**
	 * @return the rmanumber
	 */
	public String getRmanumber()
	{
		return rmanumber;
	}

	/**
	 * @param rmanumber the rmanumber to set
	 */
	public void setRmanumber(String rmanumber)
	{
		this.rmanumber = rmanumber;
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
