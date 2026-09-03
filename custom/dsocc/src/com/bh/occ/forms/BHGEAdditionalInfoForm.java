/**
 * 
 */
package com.bh.occ.forms;

import java.util.List;

/**
 * @author 212695810
 *
 */
public class BHGEAdditionalInfoForm {
	
	private String manufactureYear;
	private String warrantyStatement;
	private Boolean asFoundReceived;
	private String recommendedAccessories;
	private Boolean isAccessoryPresent;
	private List<String> additionalAttachments;
	private String serviceNotes;
	private List<String> additionalAttachmentsFileSizes;

	/**
	 * @return the manufactureYear
	 */
	public String getManufactureYear()
	{
		return manufactureYear;
	}

	/**
	 * @return the additionalAttachmentsFileSizes
	 */
	public List<String> getAdditionalAttachmentsFileSizes()
	{
		return additionalAttachmentsFileSizes;
	}

	/**
	 * @param additionalAttachmentsFileSizes
	 *           the additionalAttachmentsFileSizes to set
	 */
	public void setAdditionalAttachmentsFileSizes(final List<String> additionalAttachmentsFileSizes)
	{
		this.additionalAttachmentsFileSizes = additionalAttachmentsFileSizes;
	}

	/**
	 * @param manufactureYear
	 *           the manufactureYear to set
	 */
	public void setManufactureYear(final String manufactureYear)
	{
		this.manufactureYear = manufactureYear;
	}

	/**
	 * @return the warrantyStatement
	 */
	public String getWarrantyStatement()
	{
		return warrantyStatement;
	}

	/**
	 * @param warrantyStatement
	 *           the warrantyStatement to set
	 */
	public void setWarrantyStatement(final String warrantyStatement)
	{
		this.warrantyStatement = warrantyStatement;
	}

	/**
	 * @return the asFoundReceived
	 */
	public Boolean getAsFoundReceived()
	{
		return asFoundReceived;
	}

	/**
	 * @param asFoundReceived
	 *           the asFoundReceived to set
	 */
	public void setAsFoundReceived(final Boolean asFoundReceived)
	{
		this.asFoundReceived = asFoundReceived;
	}

	/**
	 * @return the recommendedAccessories
	 */
	public String getRecommendedAccessories()
	{
		return recommendedAccessories;
	}

	/**
	 * @param recommendedAccessories
	 *           the recommendedAccessories to set
	 */
	public void setRecommendedAccessories(final String recommendedAccessories)
	{
		this.recommendedAccessories = recommendedAccessories;
	}

	/**
	 * @return the isAccessoryPresent
	 */
	public Boolean getIsAccessoryPresent()
	{
		return isAccessoryPresent;
	}

	/**
	 * @param isAccessoryPresent
	 *           the isAccessoryPresent to set
	 */
	public void setIsAccessoryPresent(final Boolean isAccessoryPresent)
	{
		this.isAccessoryPresent = isAccessoryPresent;
	}

	/**
	 * @return the additionalAttachments
	 */
	public List<String> getAdditionalAttachments()
	{
		return additionalAttachments;
	}

	/**
	 * @param additionalAttachments
	 *           the additionalAttachments to set
	 */
	public void setAdditionalAttachments(final List<String> additionalAttachments)
	{
		this.additionalAttachments = additionalAttachments;
	}

	/**
	 * @return the serviceNotes
	 */
	public String getServiceNotes()
	{
		return serviceNotes;
	}

	/**
	 * @param serviceNotes
	 *           the serviceNotes to set
	 */
	public void setServiceNotes(final String serviceNotes)
	{
		this.serviceNotes = serviceNotes;
	}

}
