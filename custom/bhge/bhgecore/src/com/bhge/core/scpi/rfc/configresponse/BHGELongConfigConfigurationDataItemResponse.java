package com.bhge.core.scpi.rfc.configresponse;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
public class BHGELongConfigConfigurationDataItemResponse {
    @JacksonXmlProperty(localName = "ROOT_ID")
    private String rootId;

    @JacksonXmlProperty(localName = "SCE")
    private String sce;

    @JacksonXmlProperty(localName = "KBNAME")
    public String kbName;

    @JacksonXmlProperty(localName = "KBVERSION")
    private String kbVersion;
    @JacksonXmlProperty(localName = "COMPLETE")
    private String complete;

    @JacksonXmlProperty(localName = "CONSISTENT")
    private String consistent;

    public String getRootId() {
        return rootId;
    }

    public void setRootId(String rootId) {
        this.rootId = rootId;
    }

    public String getSce() {
        return sce;
    }

    public void setSce(String sce) {
        this.sce = sce;
    }

    public String getKbName() {
        return kbName;
    }

    public void setKbName(String kbName) {
        this.kbName = kbName;
    }

    public String getKbVersion() {
        return kbVersion;
    }

    public void setKbVersion(String kbVersion) {
        this.kbVersion = kbVersion;
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
