package com.bhge.core.scpi.rfc.zinvoices;

import com.bhge.core.scpi.rfc.orderattachmentdownload.ZHYBOrderItemRequest;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "ZHYB_INVOICE_DOC",
        namespace = "urn:sap-com:document:sap:rfc:functions")
@JsonPropertyOrder({"IM_CUSTOMER", "IM_FILE_NAME", "IM_FILE_TYPE", "IM_FLAG", "IM_INVOICE_NO", "T_MESSAGETABLE"})
public class BHGEInvoiceDocumentRequest {
    @JacksonXmlProperty(localName="IM_CUSTOMER")
    private String customer;

    @JacksonXmlProperty(localName = "IM_FILE_NAME")
    private String filename;

    @JacksonXmlProperty(localName="IM_FILE_TYPE")
    private String filetype;

    @JacksonXmlProperty(localName="IM_FLAG")
    private String imflag;

    @JacksonXmlProperty(localName="IM_INVOICE_NO")
    private String salesorder;

    @JacksonXmlProperty(localName = "T_MESSAGETABLE")
    private ZHYBInvoiceDocumentMessage t_messageTable;

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getFiletype() {
        return filetype;
    }

    public void setFiletype(String filetype) {
        this.filetype = filetype;
    }

    public String getImflag() {
        return imflag;
    }

    public void setImflag(String imflag) {
        this.imflag = imflag;
    }

    public String getSalesorder() {
        return salesorder;
    }

    public void setSalesorder(String salesorder) {
        this.salesorder = salesorder;
    }

    public ZHYBInvoiceDocumentMessage getT_messageTable() {
        return t_messageTable;
    }

    public void setT_messageTable(ZHYBInvoiceDocumentMessage t_messageTable) {
        this.t_messageTable = t_messageTable;
    }
}
