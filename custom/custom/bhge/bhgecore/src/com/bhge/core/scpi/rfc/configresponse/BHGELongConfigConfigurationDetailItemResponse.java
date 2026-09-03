package com.bhge.core.scpi.rfc.configresponse;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
public class BHGELongConfigConfigurationDetailItemResponse {
    @JacksonXmlProperty(localName = "InstId")
    private String instId;

    @JacksonXmlProperty(localName = "Charc")
    private String charc;

    @JacksonXmlProperty(localName = "CharcTxt")
    private String charcTxt;

    @JacksonXmlProperty(localName = "Value")
    private String value;

    @JacksonXmlProperty(localName = "ValueTxt")
    private String valueTxt;

    @JacksonXmlProperty(localName = "Author")
    private String author;

    public String getInstId() {
        return instId;
    }

    public void setInstId(String instId) {
        this.instId = instId;
    }

    public String getCharc() {
        return charc;
    }

    public void setCharc(String charc) {
        this.charc = charc;
    }

    public String getCharcTxt() {
        return charcTxt;
    }

    public void setCharcTxt(String charcTxt) {
        this.charcTxt = charcTxt;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getValueTxt() {
        return valueTxt;
    }

    public void setValueTxt(String valueTxt) {
        this.valueTxt = valueTxt;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
