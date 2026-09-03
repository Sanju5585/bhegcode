/**
 * 
 */
package com.bhge.core.scpi.rfc.priceAndAvailabilty;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

/**
 * @author 212722447
 *
 */

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
public class BHGEZVComponentPrice
{

	private List<BHGEZVComponentPrice> items;
	  
	 @JacksonXmlProperty(localName = "item")	  
	 @JacksonXmlElementWrapper(useWrapping = false) 
	 public List<BHGEZVComponentPrice> getItems() 
	 { 
		 this.items = items == null ? new ArrayList<BHGEZVComponentPrice>() : items; 
	     return items; 
	 }

	 public void setItems(final List<BHGEZVComponentPrice> items) 
	 {
	     this.items = items; 
	 }
	 
	@JacksonXmlProperty(localName = "ITEM")
	private String item;
	@JacksonXmlProperty(localName = "VARCOND")
	private String varCond;
	/**
	 * @return the item
	 */
	public String getItem()
	{
		return item;
	}
	/**
	 * @param item the item to set
	 */
	public void setItem(String item)
	{
		this.item = item;
	}
	/**
	 * @return the varCond
	 */
	public String getVarCond()
	{
		return varCond;
	}
	/**
	 * @param varCond the varCond to set
	 */
	public void setVarCond(String varCond)
	{
		this.varCond = varCond;
	}
	/**
	 * @return the condValue
	 */
	public String getCondValue()
	{
		return condValue;
	}
	/**
	 * @param condValue the condValue to set
	 */
	public void setCondValue(String condValue)
	{
		this.condValue = condValue;
	}
	/**
	 * @return the condvalue
	 */
	public String getCondvalue()
	{
		return condvalue;
	}
	/**
	 * @param condvalue the condvalue to set
	 */
	public void setCondvalue(String condvalue)
	{
		this.condvalue = condvalue;
	}
	/**
	 * @return the currency
	 */
	public String getCurrency()
	{
		return currency;
	}
	/**
	 * @param currency the currency to set
	 */
	public void setCurrency(String currency)
	{
		this.currency = currency;
	}
	/**
	 * @return the vcText
	 */
	public String getVcText()
	{
		return vcText;
	}
	/**
	 * @param vcText the vcText to set
	 */
	public void setVcText(String vcText)
	{
		this.vcText = vcText;
	}
	@JacksonXmlProperty(localName = "COND_VALUE")
	private String condvalue;
	@JacksonXmlProperty(localName = "CONDVALUE")
	private String condValue;
	@JacksonXmlProperty(localName = "CURRENCY")
	private String currency;
	@JacksonXmlProperty(localName = "VCTEXT")
	private String vcText;
}
