/**
 * 
 */
package com.bhge.core.scpi.rfc.priceAndAvailabilty;

/**
 * @author 212722447
 *
 */
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "rfc:ZHYB_PRICE_LIST_MAT_AVLBT.Response")
public class BHGEZPriceandAvailablityResponse 
{
	@JacksonXmlProperty(localName = "ES_DESCRIPTION")
	private BHGEZPriceandAvailablityRequestItem esDescription;

	@JacksonXmlProperty(localName = "ET_RESULT")
	private BHGEZPriceandAvailablityRequestItem etResult;
	
	@JacksonXmlProperty(localName = "ET_RESULT_EXT")
	private BHGEZPriceandAvailablityRequestItem etResultExt;

	@JacksonXmlProperty(localName = "ITEM")
	private BHGEZPriceandAvailablityRequestItem item;
	
	@JacksonXmlProperty(localName = "ET_AVAIL")
	private BHGEZPriceandAvailablityRequestItem etAvail;

	@JacksonXmlProperty(localName = "ET_LONG")
	private BHGEZPriceandAvailablityRequestItem etLong;


	public BHGEZPriceandAvailablityRequestItem getItem() {
		return item;
	}

	public void setItem(BHGEZPriceandAvailablityRequestItem item) {
		this.item = item;
	}

	//@JacksonXmlProperty(localName = "ET_MAT_WERK_QTY")
	//private BHGEZPriceandAvailablityRequestItem etMatWerkOty;

	@JacksonXmlProperty(localName = "ET_RETURN")
	private BHGEZPriceandAvailablityRequestItem etReturn;
	
	@JacksonXmlProperty(localName = "ET_WMDVEX")
	private BHGEZPriceandAvailablityRequestItem etWmdvex;
	
	@JacksonXmlProperty(localName = "ET_WMDVSX")
	private BHGEZPriceandAvailablityRequestItem etWmdvsx;
	
	@JacksonXmlProperty(localName = "COND")
	private BHGEZPriceandAvailablityRequestItem cond;	

	@JacksonXmlProperty(localName = "ORDER_CFGS_VALUE")
	private BHGEZPriceandAvailablityRequestItem orderCfgsValue;
	
	@JacksonXmlProperty(localName = "VC_COMPONENT_PRICE")
	//private BHGEZPriceandAvailablityRequestItem vcComponentPrice;
	private BHGEZVComponentPrice vcComponentPrice;
	
	@JacksonXmlProperty(localName = "ET_MAT_WERK_QTY")
	//private BHGEZPriceandAvailablityRequestItem vcComponentPrice;
	private BHGEZWerksDetail etMatWerkOty;
	
	/**
	 * @return the etMatWerkOty
	 */
	public BHGEZWerksDetail getEtMatWerkOty()
	{
		return etMatWerkOty;
	}

	/**
	 * @param etMatWerkOty the etMatWerkOty to set
	 */
	public void setEtMatWerkOty(BHGEZWerksDetail etMatWerkOty)
	{
		this.etMatWerkOty = etMatWerkOty;
	}

	public BHGEZPriceandAvailablityRequestItem getCond() {
		return cond;
	}

	public void setCond(BHGEZPriceandAvailablityRequestItem cond) {
		this.cond = cond;
	}

	
	public BHGEZPriceandAvailablityRequestItem getEsDescription() {
		return esDescription;
	}

	public void setEsDescription(BHGEZPriceandAvailablityRequestItem esDescription) {
		this.esDescription = esDescription;
	}

	public BHGEZPriceandAvailablityRequestItem getEtResult() {
		return etResult;
	}

	public void setEtResult(BHGEZPriceandAvailablityRequestItem etResult) {
		this.etResult = etResult;
	}

	public BHGEZPriceandAvailablityRequestItem getEtResultExt() {
		return etResultExt;
	}

	public void setEtResultExt(BHGEZPriceandAvailablityRequestItem etResultExt) {
		this.etResultExt = etResultExt;
	}

	public BHGEZPriceandAvailablityRequestItem getEtAvail() {
		return etAvail;
	}

	public void setEtAvail(BHGEZPriceandAvailablityRequestItem etAvail) {
		this.etAvail = etAvail;
	}

	/*
	 * public BHGEZPriceandAvailablityRequestItem getEtMatWerkOty() { return etMatWerkOty; }
	 * 
	 * public void setEtMatWerkOty(BHGEZPriceandAvailablityRequestItem etMatWerkOty) { this.etMatWerkOty = etMatWerkOty;
	 * }
	 */

	public BHGEZPriceandAvailablityRequestItem getEtReturn() {
		return etReturn;
	}

	public void setEtReturn(BHGEZPriceandAvailablityRequestItem etReturn) {
		this.etReturn = etReturn;
	}

	public BHGEZPriceandAvailablityRequestItem getEtWmdvex() {
		return etWmdvex;
	}

	public void setEtWmdvex(BHGEZPriceandAvailablityRequestItem etWmdvex) {
		this.etWmdvex = etWmdvex;
	}

	public BHGEZPriceandAvailablityRequestItem getEtWmdvsx() {
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

	public BHGEZVComponentPrice getVcComponentPrice() {
		return vcComponentPrice;
	}

	public void setVcComponentPrice(BHGEZVComponentPrice vcComponentPrice) {
		this.vcComponentPrice = vcComponentPrice;
	}

	public BHGEZPriceandAvailablityRequestItem getEtLong() {
		return etLong;
	}

	public void setEtLong(BHGEZPriceandAvailablityRequestItem etLong) {
		this.etLong = etLong;
	}

}
