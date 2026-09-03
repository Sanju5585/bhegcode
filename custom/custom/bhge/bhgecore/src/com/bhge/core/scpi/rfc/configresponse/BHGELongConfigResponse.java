package com.bhge.core.scpi.rfc.configresponse;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "ZhybConfLongResponse")
public class BHGELongConfigResponse {

    @JacksonXmlProperty(localName = "EtResult")
    private BHGELongConfigHeaderResponse etResult;


    @JacksonXmlProperty(localName = "ItemOut")
    private BHGELongConfigItemLabelResponse itemOut;


	public BHGELongConfigHeaderResponse getEtResult() {
		this.etResult = etResult == null ? new BHGELongConfigHeaderResponse() : etResult;
		return etResult;
	}


	public void setEtResult(BHGELongConfigHeaderResponse etResult) {
		this.etResult = etResult;
	}


	public BHGELongConfigItemLabelResponse getItemOut() {
		this.itemOut = itemOut == null ? new BHGELongConfigItemLabelResponse() : itemOut;
		return itemOut;
	}


	public void setItemOut(BHGELongConfigItemLabelResponse itemOut) {
		this.itemOut = itemOut;
	}

    
}
