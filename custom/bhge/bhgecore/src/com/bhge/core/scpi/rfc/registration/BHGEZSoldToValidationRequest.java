/**
 * 
 */
package com.bhge.core.scpi.rfc.registration;

/**
 * @author 212722447
 *
 */

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
//import com.fasterxml.jackson.jaxrs.json.annotation.JSONP;


import lombok.ToString;




@ToString
@JsonIgnoreProperties(ignoreUnknown = true)

//@JacksonXmlRootElement(localName ="ZGB_HYB_ECOMM_REG")
@JacksonXmlRootElement(localName ="ZHYB_ECOMM_REG")




@JsonPropertyOrder({"INPUT_DET", "T_MESSAGETABLE", "T_SALES_AREA"})

public class BHGEZSoldToValidationRequest
{

   @JacksonXmlProperty(localName="INPUT_DET")
   private BHGEZSoldtoValidationRequestItem inputDetails;

   @JacksonXmlProperty(localName="T_MESSAGETABLE")
   private BHGEZSoldtoValidationRequestItem messageTables;

   @JacksonXmlProperty(localName="T_SALES_AREA")
   private BHGEZSoldtoValidationRequestItem tSalesArea;

	
	  public BHGEZSoldtoValidationRequestItem getInputDetails() 
	  {	  
	  this.inputDetails = inputDetails == null ? new BHGEZSoldtoValidationRequestItem() : inputDetails; 
	  return inputDetails; 
	  }
	  
	  public void setInputDetails(BHGEZSoldtoValidationRequestItem inputDetails) 
	  { 
		  this.inputDetails = inputDetails; 
		}
	 
   
   public BHGEZSoldtoValidationRequestItem getMessageTables() {
       this.messageTables =  messageTables == null ? new BHGEZSoldtoValidationRequestItem() : messageTables;

       return messageTables;
   }

   public void setMessageTables(BHGEZSoldtoValidationRequestItem messageTables) {
       this.messageTables = messageTables;
   }

   public BHGEZSoldtoValidationRequestItem gettSalesArea() {
       this.tSalesArea =  tSalesArea == null ? new BHGEZSoldtoValidationRequestItem() : tSalesArea;

       return tSalesArea;
   }

   public void settSalesArea(BHGEZSoldtoValidationRequestItem tSalesArea) {
       this.tSalesArea = tSalesArea;
   }

   public BHGEZSoldToValidationRequest() {
   }

}
