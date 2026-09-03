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
public class BHGEZWerksDetail
{
	private List<BHGEZWerksDetail> items;
	  
	 @JacksonXmlProperty(localName = "item")	  
	 @JacksonXmlElementWrapper(useWrapping = false) 
	 public List<BHGEZWerksDetail> getItems() 
	 { 
		 this.items = items == null ? new ArrayList<BHGEZWerksDetail>() : items; 
	     return items; 
	 }

	 public void setItems(final List<BHGEZWerksDetail> items) 
	 {
	     this.items = items; 
	 }
	 
	 @JacksonXmlProperty(localName = "MATNR")
	 private String material;
	 @JacksonXmlProperty(localName = "WERKS")
	 private String werks;
	 @JacksonXmlProperty(localName = "QTY")
	 private String qty;
	@JacksonXmlProperty(localName = "TRLT")
	private String leadtime;

	 public String getMaterial()
	{
		return material;
	}

	 public void setMaterial(String material)
	{
		this.material = material;
	}

	 public String getWerks()
	{
		return werks;
	}
	public void setWerks(String werks)
	{
		this.werks = werks;
	}

	public String getQty()
	{
		return qty;
	}

	public void setQty(String qty)
	{
		this.qty = qty;
	}

	public String getLeadtime()
	{
		return leadtime;
	}

	public void setLeadtime(String leadtime)
	{
		this.leadtime = leadtime;
	}


}
