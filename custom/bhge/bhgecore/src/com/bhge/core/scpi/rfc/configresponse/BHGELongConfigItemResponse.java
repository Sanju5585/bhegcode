package com.bhge.core.scpi.rfc.configresponse;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
public class BHGELongConfigItemResponse {

	@JacksonXmlProperty(localName = "ItemNo")
	private int itemNo;
	private BHGELongConfigConfigurationDetailResponse configurationDetails;
    
    private BHGELongConfigVariantFactorResponse variantFactor;
    
    private BHGELongConfigConfigurationDataResponse configurationData;
    
    private BHGELongConfigConfigurationInstanceResponse configurationInstance;
    
    private BHGELongConfigConfigurationPartResponse configurationPart;

	public int getItemNo() {
		return itemNo;
	}

	public void setItemNo(int itemNo) {
		this.itemNo = itemNo;
	}
	@JacksonXmlProperty(localName = "Configurationdetails")
	@JacksonXmlElementWrapper(useWrapping = false)
	public BHGELongConfigConfigurationDetailResponse getConfigurationDetails() {
		this.configurationDetails = configurationDetails == null ? new BHGELongConfigConfigurationDetailResponse() : configurationDetails;
		return configurationDetails;
	}

	public void setConfigurationDetails(BHGELongConfigConfigurationDetailResponse configurationDetails) {
		this.configurationDetails = configurationDetails;
	}

	@JacksonXmlProperty(localName = "VarientFactor")
	@JacksonXmlElementWrapper(useWrapping = false)
	public BHGELongConfigVariantFactorResponse getVariantFactor() {
		this.variantFactor = variantFactor == null ? new BHGELongConfigVariantFactorResponse() : variantFactor;
		return variantFactor;
	}

	public void setVariantFactor(BHGELongConfigVariantFactorResponse variantFactor) {
		this.variantFactor = variantFactor;
	}
	
	@JacksonXmlProperty(localName = "ConfigurationData")
	@JacksonXmlElementWrapper(useWrapping = false)
	public BHGELongConfigConfigurationDataResponse getConfigurationData() {
		this.configurationData = configurationData == null ? new BHGELongConfigConfigurationDataResponse() : configurationData;
		return configurationData;
	}

	public void setConfigurationData(BHGELongConfigConfigurationDataResponse configurationData) {
		this.configurationData = configurationData;
	}
	
	@JacksonXmlProperty(localName = "ConfigurationInstance")
	@JacksonXmlElementWrapper(useWrapping = false)
	public BHGELongConfigConfigurationInstanceResponse getConfigurationInstance() {
		this.configurationInstance = configurationInstance == null ? new BHGELongConfigConfigurationInstanceResponse() : configurationInstance;
		return configurationInstance;
	}

	public void setConfigurationInstance(BHGELongConfigConfigurationInstanceResponse configurationInstance) {
		this.configurationInstance = configurationInstance;
	}
	
	@JacksonXmlProperty(localName = "ConfigurationPart")
	@JacksonXmlElementWrapper(useWrapping = false)
	public BHGELongConfigConfigurationPartResponse getConfigurationPart() {
		this.configurationPart = configurationPart == null ? new BHGELongConfigConfigurationPartResponse() : configurationPart;
		return configurationPart;
	}

	public void setConfigurationPart(BHGELongConfigConfigurationPartResponse configurationPart) {
		this.configurationPart = configurationPart;
	}

    
}