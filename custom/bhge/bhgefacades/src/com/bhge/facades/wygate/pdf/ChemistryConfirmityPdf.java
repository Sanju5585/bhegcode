package com.bhge.facades.wygate.pdf;


import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlSeeAlso;

import com.bhge.facades.data.DSWygateChemistryData;

@XmlRootElement(name = "DSWygateChemistryData")
@XmlSeeAlso(
{ DSWygateChemistryData.class })
public class ChemistryConfirmityPdf {
	
	private String currentDate;
	private String type;
	private String mabcCode;
	private String shippingContent;
	private String fabricationNumber;
	private String expiry;
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getMabcCode() {
		return mabcCode;
	}
	public void setMabcCode(String mabcCode) {
		this.mabcCode = mabcCode;
	}
	public String getShippingContent() {
		return shippingContent;
	}
	public void setShippingContent(String shippingContent) {
		this.shippingContent = shippingContent;
	}
	public String getFabricationNumber() {
		return fabricationNumber;
	}
	public void setFabricationNumber(String fabricationNumber) {
		this.fabricationNumber = fabricationNumber;
	}
	public String getExpiry() {
		return expiry;
	}
	public void setExpiry(String expiry) {
		this.expiry = expiry;
	}
	public String getCurrentDate() {
		return currentDate;
	}
	public void setCurrentDate(String currentDate) {
		this.currentDate = currentDate;
	}
	
}
