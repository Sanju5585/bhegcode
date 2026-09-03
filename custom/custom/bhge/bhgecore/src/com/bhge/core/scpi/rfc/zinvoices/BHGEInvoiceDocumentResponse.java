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
@JacksonXmlRootElement(localName = "ZHYB_INVOICE_DOCResponse",
        namespace = "urn:sap-com:document:sap:rfc:functions")
@JsonPropertyOrder({"EX_ORDER_ATTC","T_MESSAGETABLE"})
public class BHGEInvoiceDocumentResponse {
    @JacksonXmlProperty(localName = "EX_ORDER_ATTC")
    private ZHYBInvoiceDocumentItemResponse ex_order_attc;

    @JacksonXmlProperty(localName="T_MESSAGETABLE")
    private ZHYBInvoiceDocumentMessage t_messageTable;

    public ZHYBInvoiceDocumentItemResponse getEx_order_attc() {
        return ex_order_attc;
    }

    public void setEx_order_attc(ZHYBInvoiceDocumentItemResponse ex_order_attc) {
        this.ex_order_attc = ex_order_attc;
    }

    public ZHYBInvoiceDocumentMessage getT_messageTable() {
        return t_messageTable;
    }

    public void setT_messageTable(ZHYBInvoiceDocumentMessage t_messageTable) {
        this.t_messageTable = t_messageTable;
    }
}
