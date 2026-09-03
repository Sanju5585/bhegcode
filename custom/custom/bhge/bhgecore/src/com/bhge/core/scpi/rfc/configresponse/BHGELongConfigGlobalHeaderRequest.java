package com.bhge.core.scpi.rfc.configresponse;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "IsGlobal")
public class BHGELongConfigGlobalHeaderRequest {

    @JacksonXmlProperty(localName = "Vkorg")
    private String vkorg;
    @JacksonXmlProperty(localName = "Vtweg")
    private String vtweg;
    @JacksonXmlProperty(localName = "Spart")
    private String spart;
    @JacksonXmlProperty(localName = "Kunnr")
    private String kunnr;

    public String getVkorg() {
        return vkorg;
    }

    public void setVkorg(String vkorg) {
        this.vkorg = vkorg;
    }

    public String getVtweg() {
        return vtweg;
    }

    public void setVtweg(String vtweg) {
        this.vtweg = vtweg;
    }

    public String getSpart() {
        return spart;
    }

    public void setSpart(String spart) {
        this.spart = spart;
    }

    public String getKunnr() {
        return kunnr;
    }

    public void setKunnr(String kunnr) {
        this.kunnr = kunnr;
    }

}
