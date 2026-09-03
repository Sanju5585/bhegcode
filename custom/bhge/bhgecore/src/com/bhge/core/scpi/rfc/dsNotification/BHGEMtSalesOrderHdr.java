package com.bhge.core.scpi.rfc.dsNotification;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BHGEMtSalesOrderHdr {
    @JacksonXmlProperty(localName = "GeSalesOrder")
    private String geSalesOrder;

    @JacksonXmlProperty(localName = "CustomerPo")
    private String customerPo;

    @JacksonXmlProperty(localName = "DateOrderPlaced")
    private String dateOrderPlaced;

    @JacksonXmlProperty(localName = "CustomerNumber")
    private String customerNumber;

    @JacksonXmlProperty(localName = "SalesOrderType")
    private String salesOrderType;

    @JacksonXmlProperty(localName = "SalesOrganization")
    private String salesOrganization;

    @JacksonXmlProperty(localName = "Division")
    private String division;

    @JacksonXmlProperty(localName = "Field")
    private String field;

    @JacksonXmlProperty(localName = "OldValue")
    private String oldValue;

    @JacksonXmlProperty(localName = "NewValue")
    private String newValue;

    @JacksonXmlProperty(localName = "Description")
    private String description;

    @JacksonXmlProperty(localName = "Emailid")
    private String emailId;
}
