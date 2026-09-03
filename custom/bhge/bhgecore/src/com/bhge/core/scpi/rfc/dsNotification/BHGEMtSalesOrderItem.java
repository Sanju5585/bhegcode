package com.bhge.core.scpi.rfc.dsNotification;


import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter

public class BHGEMtSalesOrderItem {
    @JacksonXmlProperty(localName = "GeSalesOrder")
    private String geSalesOrder;

    @JacksonXmlProperty(localName = "CustomerNumber")
    private String customerNumber;

    @JacksonXmlProperty(localName = "ItemNo")
    private String itemNo;

    @JacksonXmlProperty(localName = "Material")
    private String material;

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
