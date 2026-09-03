/**
 * 
 */
package com.bhge.core.scpi.rfc.priceAndAvailabilty;

/**
 * @author 212722447
 *
 */

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName ="ZHYB_PRICE_LIST_MAT_AVLBT")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BHGEZPriceandAvailablityRequest 
{
	
	@JacksonXmlProperty(localName = "FLAG_PA")
	private String flagPa;
	
	@JacksonXmlProperty(localName="IS_GLOBAL")
	private BHGEZPriceandAvailablityRequestItem isGlobal;	

	@JacksonXmlProperty(localName="IT_HEAD")
	private BHGEZPriceandAvailablityRequestItem itHead;
	
	@JacksonXmlProperty(localName="IT_ITEM")
	private BHGEZPriceandAvailablityRequestItem itItem;
	
	@JacksonXmlProperty(localName = "IT_PARTNER")
	private BHGEZPriceandAvailablityRequestItem itPartner;
	
	@JacksonXmlProperty(localName = "LANGU")
	private String language;
	
	@JacksonXmlProperty(localName = "ES_DESCRIPTION")
	private BHGEZPriceandAvailablityRequestItem esDescription;
	
	@JacksonXmlProperty(localName = "ET_AVAIL")
	private BHGEZPriceandAvailablityRequestItem etAvail;
	
	@JacksonXmlProperty(localName = "ET_MAT_WERK_QTY")
	private BHGEZPriceandAvailablityRequestItem etMatWerkOty;
	
	@JacksonXmlProperty(localName = "ET_RESULT")
	private BHGEZPriceandAvailablityRequestItem etResult;
	
	@JacksonXmlProperty(localName = "ET_RETURN")
	private BHGEZPriceandAvailablityRequestItem etReturn;
	
	@JacksonXmlProperty(localName = "ET_RESULT_EXT")
	private BHGEZPriceandAvailablityRequestItem etResultExt;
	
	@JacksonXmlProperty(localName = "ET_WMDVEX")
	private BHGEZPriceandAvailablityRequestItem etWmdvex;
	
	@JacksonXmlProperty(localName = "ET_WMDVSX")
	private BHGEZPriceandAvailablityRequestItem etWmdvsx;
	
	@JacksonXmlProperty(localName = "ORDER_CFGS_VALUE")
	private BHGEZPriceandAvailablityRequestItem orderCfgsValue;
		
	@JacksonXmlProperty(localName = "VARCOND")
	private BHGEZPriceandAvailablityRequestItem varCond;	

	@JacksonXmlProperty(localName = "VC_COMPONENT_PRICE")
	private String vcComponentPrice;	
	/**
	 * @return the varCond
	 */
	public BHGEZPriceandAvailablityRequestItem getVarCond()
	{
		this.varCond = varCond == null ? new BHGEZPriceandAvailablityRequestItem() : varCond; 
		return varCond;
	}

	/**
	 * @param varCond the varCond to set
	 */
	public void setVarCond(BHGEZPriceandAvailablityRequestItem varCond)
	{
		this.varCond = varCond;
	}

	
	public BHGEZPriceandAvailablityRequestItem getIsGlobal() {
		this.isGlobal = isGlobal == null ? new BHGEZPriceandAvailablityRequestItem() : isGlobal; 
		return isGlobal;
	}

	public void setIsGlobal(BHGEZPriceandAvailablityRequestItem isGlobal) {
		this.isGlobal = isGlobal;
	}
	
	public BHGEZPriceandAvailablityRequestItem getItHead() {
		
		this.itHead = itHead == null ? new BHGEZPriceandAvailablityRequestItem() : itHead;
		return itHead;
	}

	public void setItHead(BHGEZPriceandAvailablityRequestItem itHead) {
		this.itHead = itHead;
	}

	public BHGEZPriceandAvailablityRequestItem getItItem() {
		this.itItem = itItem == null ? new BHGEZPriceandAvailablityRequestItem() : itItem;
		return itItem;
	}

	public void setItItem(BHGEZPriceandAvailablityRequestItem itItem) {
		this.itItem = itItem;
	}

	public BHGEZPriceandAvailablityRequestItem getItPartner() {
		this.itPartner = itPartner == null ? new BHGEZPriceandAvailablityRequestItem() : itPartner;
		return itPartner;
	}

	public void setItPartner(BHGEZPriceandAvailablityRequestItem itPartner) {
		this.itPartner = itPartner;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public BHGEZPriceandAvailablityRequestItem getEsDescription() {
		this.esDescription = esDescription == null ? new BHGEZPriceandAvailablityRequestItem() : esDescription;
		return esDescription;
	}

	public void setEsDescription(BHGEZPriceandAvailablityRequestItem esDescription) {
		this.esDescription = esDescription;
	}

	public BHGEZPriceandAvailablityRequestItem getEtAvail() {
		this.etAvail = etAvail == null ? new BHGEZPriceandAvailablityRequestItem() : etAvail;
		return etAvail;
	}

	public void setEtAvail(BHGEZPriceandAvailablityRequestItem etAvail) {
		this.etAvail = etAvail;
	}

	public BHGEZPriceandAvailablityRequestItem getEtMatWerkOty() {
		this.etMatWerkOty = etMatWerkOty == null ? new BHGEZPriceandAvailablityRequestItem() : etMatWerkOty;
		return etMatWerkOty;
	}

	public void setEtMatWerkOty(BHGEZPriceandAvailablityRequestItem etMatWerkOty) {
		this.etMatWerkOty = etMatWerkOty;
	}

	public BHGEZPriceandAvailablityRequestItem getEtResult() {
		this.etResult = etResult == null ? new BHGEZPriceandAvailablityRequestItem() : etResult;
		return etResult;
	}

	public void setEtResult(BHGEZPriceandAvailablityRequestItem etResult) {
		this.etResult = etResult;
	}

	public BHGEZPriceandAvailablityRequestItem getEtReturn()
	{
		this.etReturn = etReturn == null ? new BHGEZPriceandAvailablityRequestItem() : etReturn;
		return etReturn;
	}

	public void setEtReturn(BHGEZPriceandAvailablityRequestItem etReturn)
	{
		this.etReturn = etReturn;
	}

	public BHGEZPriceandAvailablityRequestItem getEtResultExt() {
		this.etResultExt = etResultExt == null ? new BHGEZPriceandAvailablityRequestItem() : etResultExt;
		return etResultExt;
	}

	public void setEtResultExt(BHGEZPriceandAvailablityRequestItem etResultExt) {
		this.etResultExt = etResultExt;
	}

	public BHGEZPriceandAvailablityRequestItem getEtWmdvex() {
		this.etWmdvex = etWmdvex == null ? new BHGEZPriceandAvailablityRequestItem() : etWmdvex;
		return etWmdvex;
	}

	public void setEtWmdvex(BHGEZPriceandAvailablityRequestItem etWmdvex) {
		this.etWmdvex = etWmdvex;
	}

	public BHGEZPriceandAvailablityRequestItem getEtWmdvsx() {
		this.etWmdvsx = etWmdvsx == null ? new BHGEZPriceandAvailablityRequestItem() : etWmdvsx;
		return etWmdvsx;
	}

	public void setEtWmdvsx(BHGEZPriceandAvailablityRequestItem etWmdvsx) {
		this.etWmdvsx = etWmdvsx;
	}

	public BHGEZPriceandAvailablityRequestItem getOrderCfgsValue() {
		this.orderCfgsValue = orderCfgsValue == null ? new BHGEZPriceandAvailablityRequestItem() : orderCfgsValue;
		return orderCfgsValue;
	}

	public void setOrderCfgsValue(BHGEZPriceandAvailablityRequestItem orderCfgsValue) {
		this.orderCfgsValue = orderCfgsValue;
	}

	public String getVcComponentPrice() {
		return vcComponentPrice;
	}

	public void setVcComponentPrice(String vcComponentPrice) {
		this.vcComponentPrice = vcComponentPrice;
	}
	
	
	public String getFlagPa() {
		return flagPa;
	}

	public void setFlagPa(String flagPa) {
		this.flagPa = flagPa;
	}

}
