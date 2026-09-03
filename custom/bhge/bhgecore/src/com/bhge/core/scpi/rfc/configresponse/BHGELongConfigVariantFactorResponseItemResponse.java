package com.bhge.core.scpi.rfc.configresponse;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
public class BHGELongConfigVariantFactorResponseItemResponse {
    @JacksonXmlProperty(localName = "INST_ID")
    private String variantInstanceId;
    @JacksonXmlProperty(localName = "VKEY")
    private String variantKey;

    @JacksonXmlProperty(localName = "FACTOR")
    private String variantFactorValue;

    public String getVariantInstanceId() {
        return variantInstanceId;
    }

    public void setVariantInstanceId(String variantInstanceId) {
        this.variantInstanceId = variantInstanceId;
    }

    public String getVariantKey() {
        return variantKey;
    }

    public void setVariantKey(String variantKey) {
        this.variantKey = variantKey;
    }

    public String getVariantFactorValue() {
        return variantFactorValue;
    }

    public void setVariantFactorValue(String variantFactorValue) {
        this.variantFactorValue = variantFactorValue;
    }
}
