package com.bhge.core.scpi.rfc.configresponse;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
public class BHGELongConfigConfigurationInstanceItemResponse {
    @JacksonXmlProperty(localName = "INST_ID")
    private String variantInstanceId;
    @JacksonXmlProperty(localName = "OBJ_TYPE")
    private String objType;
    @JacksonXmlProperty(localName = "CLASS_TYPE")
    private String classType;

    @JacksonXmlProperty(localName = "OBJ_KEY")
    private String objKey;

    @JacksonXmlProperty(localName = "QUANTITY")
    private String quantity;
    @JacksonXmlProperty(localName = "Author")
    private String author;

    @JacksonXmlProperty(localName = "QUANTITY_UNIT")
    private String quantityUnit;
    @JacksonXmlProperty(localName = "COMPLETE")
    private String complete;

    @JacksonXmlProperty(localName = "CONSISTENT")
    private String consistent;

    public String getVariantInstanceId() {
        return variantInstanceId;
    }

    public void setVariantInstanceId(String variantInstanceId) {
        this.variantInstanceId = variantInstanceId;
    }

    public String getObjType() {
        return objType;
    }

    public void setObjType(String objType) {
        this.objType = objType;
    }

    public String getClassType() {
        return classType;
    }

    public void setClassType(String classType) {
        this.classType = classType;
    }

    public String getObjKey() {
        return objKey;
    }

    public void setObjKey(String objKey) {
        this.objKey = objKey;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getQuantityUnit() {
        return quantityUnit;
    }

    public void setQuantityUnit(String quantityUnit) {
        this.quantityUnit = quantityUnit;
    }

    public String getComplete() {
        return complete;
    }

    public void setComplete(String complete) {
        this.complete = complete;
    }

    public String getConsistent() {
        return consistent;
    }

    public void setConsistent(String consistent) {
        this.consistent = consistent;
    }
}
