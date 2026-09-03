/**
 * 
 */
package com.bh.occ.forms;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

/**
 * Form for updating cart entries 
 * @author 212695810
 *
 */
public class BHGEUpdateCartEntryForm {
	
	@NotNull(message = "{basket.error.quantity.notNull}")
	@Min(value = 0, message = "{basket.error.quantity.invalid}")
	@Digits(fraction = 0, integer = 10, message = "{basket.error.quantity.invalid}")
	private Long quantity;
	private String defaultPlant;
	private String entryNotes;
	private String reqDate;
	private String referenceNUmber;
	private String tagInformation;
	private String productLine;

	public String getProductLine() {
		return productLine;
	}

	public void setProductLine(String productLine) {
		this.productLine = productLine;
	}

	public void setQuantity(final Long quantity)
	{
		this.quantity = quantity;
	}

	public Long getQuantity()
	{
		return quantity;
	}

	public String getDefaultPlant() {
		return defaultPlant;
	}

	public void setDefaultPlant(String defaultPlant) {
		this.defaultPlant = defaultPlant;
	}

	public String getEntryNotes() {
		return entryNotes;
	}

	public void setEntryNotes(String entryNotes) {
		this.entryNotes = entryNotes;
	}

	public String getReqDate() {
		return reqDate;
	}

	public void setReqDate(String reqDate) {
		this.reqDate = reqDate;
	}

	public String getReferenceNUmber() {
		return referenceNUmber;
	}

	public void setReferenceNUmber(String referenceNUmber) {
		this.referenceNUmber = referenceNUmber;
	}

	public String getTagInformation() {
		return tagInformation;
	}

	public void setTagInformation(String tagInformation) {
		this.tagInformation = tagInformation;
	}
	
	
	
	
}