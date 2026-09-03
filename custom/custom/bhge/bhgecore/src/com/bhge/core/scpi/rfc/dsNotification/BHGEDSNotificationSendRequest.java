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


@Setter
@Getter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(
        localName = "ZhybDsNotificationSend",
        namespace = "urn:sap-com:document:sap:soap:functions:mc-style"
)

@JsonPropertyOrder({
        "ICustNo", "IDivision", "IFlag", "ISalesOrg", "ISoFdate", "ISoNum",
        "ISoTdate", "ISoType", "MtSalesOrderHdr", "MtSalesOrderItem"
})
public class BHGEDSNotificationSendRequest {

    @JacksonXmlProperty(localName = "ICustNo")
    private String iCustNo;

    @JacksonXmlProperty(localName = "IDivision")
    private String iDivision;

    @JacksonXmlProperty(localName = "IFlag")
    private String iFlag;

    @JacksonXmlProperty(localName = "ISalesOrg")
    private String iSalesOrg;

    @JacksonXmlProperty(localName = "ISoFdate")
    private String iSoFdate;

    @JacksonXmlProperty(localName = "ISoNum")
    private String iSoNum;

    @JacksonXmlProperty(localName = "ISoTdate")
    private String iSoTdate;

    @JacksonXmlProperty(localName = "ISoType")
    private String iSoType;

    @JacksonXmlProperty(localName = "MtSalesOrderHdr")
    private BHGEMtSalesOrderHdrList mtSalesOrderHdrList;

    @JacksonXmlProperty(localName = "MtSalesOrderItem")
    private BHGEMtSalesOrderItems mtSalesOrderItems;
}
