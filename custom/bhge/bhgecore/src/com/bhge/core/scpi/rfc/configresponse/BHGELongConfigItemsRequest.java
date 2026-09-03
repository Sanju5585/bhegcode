package com.bhge.core.scpi.rfc.configresponse;


import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
public class BHGELongConfigItemsRequest {



    private List<BHGELongConfigItemsRequest> items;

    @JacksonXmlProperty(localName = "ItemNo")
    private String itemNo;

    @JacksonXmlProperty(localName = "Matnr")
    private String material;

    @JacksonXmlProperty(localName = "Longnumber")
    private String longNumber;

    public String getItemNo() {
        return itemNo;
    }

    public void setItemNo(String itemNo) {
        this.itemNo = itemNo;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getLongNumber() {
        return longNumber;
    }

    public void setLongNumber(String longNumber) {
        this.longNumber = longNumber;
    }

    @JacksonXmlProperty(localName = "item")
    @JacksonXmlElementWrapper(useWrapping = false)
    public List<BHGELongConfigItemsRequest> getItems()
    {
        this.items = items == null ? new ArrayList<BHGELongConfigItemsRequest>() : items;
        return items;
    }

    public void setItem(List<BHGELongConfigItemsRequest> item) {
        this.items = items;
    }
}
