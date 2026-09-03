package com.bhge.core.scpi.rfc.zinvoices;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class ZHYBInvoiceDocumentItem {
    @JacksonXmlProperty(localName = "FILE_NAME")
    private String filename;

    @JacksonXmlProperty(localName = "FILE_TYPE")
    private String filetype;

    @JacksonXmlProperty(localName = "HEX_DATA")
    private String hexdata;
    @JacksonXmlProperty(localName = "DESCR")
    private String descr;

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getFiletype() {
        return filetype;
    }

    public void setFiletype(String filetype) {
        this.filetype = filetype;
    }

    public String getHexdata() {
        return hexdata;
    }

    public void setHexdata(String hexdata) {
        this.hexdata = hexdata;
    }

    public String getDescr() {
        return descr;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }
}

