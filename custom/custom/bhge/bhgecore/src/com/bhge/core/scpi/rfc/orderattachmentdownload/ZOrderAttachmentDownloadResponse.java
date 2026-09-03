package com.bhge.core.scpi.rfc.orderattachmentdownload;

import com.bhge.core.scpi.rfc.orderattachmentdownload.ZOrderAttachmentDownloadRequest$Item;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement( localName = "Z_S_ORDER_PDFResponse")
@JsonPropertyOrder({"CUSTOMER", "IM_DELIVERY_NUMBER", "IM_IDENTIFIER", "IM_INVOICE_NUMBER", "IM_SALES_ORDER", "EX_PDF_DATA","T_CUSTOM_INVOICE" , "T_DELIVERY", "T_INVOICELIST", "T_MESSAGETABLE", "T_ORDER", "T_PO" })
public class ZOrderAttachmentDownloadResponse {

   @JacksonXmlProperty(localName="CUSTOMER")
   private String customer;

   @JacksonXmlProperty(localName = "IM_DELIVERY_NUMBER")
   private String diliverynumber;

   @JacksonXmlProperty(localName="IM_IDENTIFIER")
   private String imidentifier;

   @JacksonXmlProperty(localName="IM_INVOICE_NUMBER")
   private String invoicenumber;

   @JacksonXmlProperty(localName="IM_SALES_ORDER")
   private String salesorder;
   
	@JacksonXmlProperty(localName = "EX_PDF_DATA")
    private String ex_pdf_data;
	
	@JacksonXmlProperty(localName = "T_CUSTOM_INVOICE")
   private ZOrderAttachmentDownloadRequest$Item t_customer_invoice;
	
	@JacksonXmlProperty(localName = "T_DELIVERY")
   private ZOrderAttachmentDownloadRequest$Item t_delivery;
	
	@JacksonXmlProperty(localName = "T_INVOICELIST")
   private ZOrderAttachmentDownloadRequest$Item t_invoicelist;
	
    @JacksonXmlProperty(localName="T_MESSAGETABLE")
    private ZOrderAttachmentDownloadRequest$Item t_messagetable;

 	@JacksonXmlProperty(localName = "T_ORDER")
   private ZOrderAttachmentDownloadRequest$Item t_order;
 	
	@JacksonXmlProperty(localName = "T_PO")
   private ZOrderAttachmentDownloadRequest$Item t_po;

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
	 * @return the diliverynumber
	 */
	public String getDiliverynumber()
	{
		return diliverynumber;
	}

	/**
	 * @param diliverynumber the diliverynumber to set
	 */
	public void setDiliverynumber(String diliverynumber)
	{
		this.diliverynumber = diliverynumber;
	}

	/**
	 * @return the imidentifier
	 */
	public String getImidentifier()
	{
		return imidentifier;
	}

	/**
	 * @param imidentifier the imidentifier to set
	 */
	public void setImidentifier(String imidentifier)
	{
		this.imidentifier = imidentifier;
	}

	/**
	 * @return the invoicenumber
	 */
	public String getInvoicenumber()
	{
		return invoicenumber;
	}

	/**
	 * @param invoicenumber the invoicenumber to set
	 */
	public void setInvoicenumber(String invoicenumber)
	{
		this.invoicenumber = invoicenumber;
	}

	/**
	 * @return the salesorder
	 */
	public String getSalesorder()
	{
		return salesorder;
	}

	/**
	 * @param salesorder the salesorder to set
	 */
	public void setSalesorder(String salesorder)
	{
		this.salesorder = salesorder;
	}

	/**
	 * @return the ex_pdf_data
	 */
	public String getEx_pdf_data()
	{
		return ex_pdf_data;
	}

	/**
	 * @param ex_pdf_data the ex_pdf_data to set
	 */
	public void setEx_pdf_data(String ex_pdf_data)
	{
		this.ex_pdf_data = ex_pdf_data;
	}

	/**
	 * @return the t_customer_invoice
	 */
	public ZOrderAttachmentDownloadRequest$Item getT_customer_invoice()
	{
		return t_customer_invoice;
	}

	/**
	 * @param t_customer_invoice the t_customer_invoice to set
	 */
	public void setT_customer_invoice(ZOrderAttachmentDownloadRequest$Item t_customer_invoice)
	{
		this.t_customer_invoice = t_customer_invoice;
	}

	/**
	 * @return the t_delivery
	 */
	public ZOrderAttachmentDownloadRequest$Item getT_delivery()
	{
		return t_delivery;
	}

	/**
	 * @param t_delivery the t_delivery to set
	 */
	public void setT_delivery(ZOrderAttachmentDownloadRequest$Item t_delivery)
	{
		this.t_delivery = t_delivery;
	}

	/**
	 * @return the t_invoicelist
	 */
	public ZOrderAttachmentDownloadRequest$Item getT_invoicelist()
	{
		return t_invoicelist;
	}

	/**
	 * @param t_invoicelist the t_invoicelist to set
	 */
	public void setT_invoicelist(ZOrderAttachmentDownloadRequest$Item t_invoicelist)
	{
		this.t_invoicelist = t_invoicelist;
	}

	/**
	 * @return the t_messagetable
	 */
	public ZOrderAttachmentDownloadRequest$Item getT_messagetable()
	{
		return t_messagetable;
	}

	/**
	 * @param t_messagetable the t_messagetable to set
	 */
	public void setT_messagetable(ZOrderAttachmentDownloadRequest$Item t_messagetable)
	{
		this.t_messagetable = t_messagetable;
	}

	/**
	 * @return the t_order
	 */
	public ZOrderAttachmentDownloadRequest$Item getT_order()
	{
		return t_order;
	}

	/**
	 * @param t_order the t_order to set
	 */
	public void setT_order(ZOrderAttachmentDownloadRequest$Item t_order)
	{
		this.t_order = t_order;
	}

	/**
	 * @return the t_po
	 */
	public ZOrderAttachmentDownloadRequest$Item getT_po()
	{
		return t_po;
	}

	/**
	 * @param t_po the t_po to set
	 */
	public void setT_po(ZOrderAttachmentDownloadRequest$Item t_po)
	{
		this.t_po = t_po;
	}
	

    
	
}
