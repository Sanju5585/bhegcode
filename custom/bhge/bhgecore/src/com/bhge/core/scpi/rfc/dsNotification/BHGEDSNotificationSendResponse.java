package com.bhge.core.scpi.rfc.dsNotification;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "ZhybDsNotificationSendResponse",
        namespace = "urn:sap-com:document:sap:soap:functions:mc-style")

@JsonPropertyOrder({
        "MtSalesOrderHdr", "MtSalesOrderItem" })

public class BHGEDSNotificationSendResponse {

    @JacksonXmlProperty(localName = "MtSalesOrderHdr")
    private BHGEMtSalesOrderHdrList mtSalesOrderHdrList;

    @JacksonXmlProperty(localName = "MtSalesOrderItem")
    private BHGEMtSalesOrderItems mtSalesOrderItems;
}
