package com.bhge.core.scpi.rfc.configresponse;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
public class BHGELongConfigConfigurationPartResponseItemResponse {
    @JacksonXmlProperty(localName = "PARENT_ID")
    private String parentId;

    @JacksonXmlProperty(localName = "INST_ID")
    private String variantInstanceId;
    @JacksonXmlProperty(localName = "PART_OF_NO")
    private String partOfNo;
    @JacksonXmlProperty(localName = "OBJ_TYPE")
    private String objType;
    @JacksonXmlProperty(localName = "CLASS_TYPE")
    private String classType;

    @JacksonXmlProperty(localName = "OBJ_KEY")
    private String objKey;
    @JacksonXmlProperty(localName = "AUTHOR")
    private String author;
    @JacksonXmlProperty(localName = "SALES_RELEVANT")
    private String salesRelevant;

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public String getVariantInstanceId() {
        return variantInstanceId;
    }

    public void setVariantInstanceId(String variantInstanceId) {
        this.variantInstanceId = variantInstanceId;
    }

    public String getPartOfNo() {
        return partOfNo;
    }

    public void setPartOfNo(String partOfNo) {
        this.partOfNo = partOfNo;
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getSalesRelevant() {
        return salesRelevant;
    }

    public void setSalesRelevant(String salesRelevant) {
        this.salesRelevant = salesRelevant;
    }
}
