package com.bh.occ.forms;

import java.util.List;

import com.bhge.facades.rma.data.AvailableSitesData;
import com.bhge.facades.rma.data.BHGEHazardousInfoData;
import com.bhge.facades.rma.data.BHGEServiceOfferingsData;

public class BHGERmaEntryForm {
	
	private String partNumber;

	private List<String> serialNumber;

	private Long quantity;
	
	private String returnToSiteName;

	private String lineNotes;

	private List<BHGEServiceOfferingsData> serviceOfferings;
	private BHGEAdditionalInfoForm additionalInfo;
	private BHGEHazardousInfoData hazardousInfo;
	private List<AvailableSitesData> availableSitesList;

	private Double price;

	private String formattedPrice;

	private Integer entryNumber;

	private String otherDetails;

	private String planningSite;

	private Boolean similarPart;
	
	private String productDetails;

	private String problemDescription;

	private String pricingInfo;

	private Boolean isComplete;

	private Boolean isAccessory;

	private List<String> accessoryPartNumbers;


	/**
	 * @return the quantity
	 */
	public Long getQuantity()
	{
		return quantity;
	}

	/**
	 * @param quantity
	 *           the quantity to set
	 */
	public void setQuantity(final Long quantity)
	{
		this.quantity = quantity;
	}

	public List<String> getAccessoryPartNumbers() {
		return accessoryPartNumbers;
	}

	public void setAccessoryPartNumbers(List<String> accessoryPartNumbers) {
		this.accessoryPartNumbers = accessoryPartNumbers;
	}



	/**
	 * @return the formattedPrice
	 */
	public String getFormattedPrice()
	{
		return formattedPrice;
	}

	/**
	 * @param formattedPrice
	 *           the formattedPrice to set
	 */
	public void setFormattedPrice(final String formattedPrice)
	{
		this.formattedPrice = formattedPrice;
	}


	/**
	 * @return the price
	 */
	public Double getPrice()
	{
		return price;
	}

	/**
	 * @param price
	 *           the price to set
	 */
	public void setPrice(final Double price)
	{
		this.price = price;
	}

	/**
	 * @return the partNumber
	 */
	public String getPartNumber()
	{
		return partNumber;
	}

	/**
	 * @param partNumber
	 *           the partNumber to set
	 */
	public void setPartNumber(final String partNumber)
	{
		this.partNumber = partNumber;
	}



	/**
	 * @return the serialNumber
	 */
	public List<String> getSerialNumber()
	{
		return serialNumber;
	}

	/**
	 * @param serialNumber
	 *           the serialNumber to set
	 */
	public void setSerialNumber(final List<String> serialNumber)
	{
		this.serialNumber = serialNumber;
	}



	/**
	 * @return the productDetails
	 */
	public String getProductDetails()
	{
		return productDetails;
	}

	/**
	 * @param productDetails
	 *           the productDetails to set
	 */
	public void setProductDetails(final String productDetails)
	{
		this.productDetails = productDetails;
	}

	/**
	 * @return the problemDescription
	 */
	public String getProblemDescription()
	{
		return problemDescription;
	}

	/**
	 * @param problemDescription
	 *           the problemDescription to set
	 */
	public void setProblemDescription(final String problemDescription)
	{
		this.problemDescription = problemDescription;
	}

	/**
	 * @return the pricingInfo
	 */
	public String getPricingInfo()
	{
		return pricingInfo;
	}

	/**
	 * @param pricingInfo
	 *           the pricingInfo to set
	 */
	public void setPricingInfo(final String pricingInfo)
	{
		this.pricingInfo = pricingInfo;
	}

	/**
	 * @return the isComplete
	 */
	public Boolean getIsComplete()
	{
		return isComplete;
	}

	/**
	 * @param isComplete
	 *           the isComplete to set
	 */
	public void setIsComplete(final Boolean isComplete)
	{
		this.isComplete = isComplete;
	}


	public Boolean getIsAccessory() {
		return isAccessory;
	}

	public void setIsAccessory(Boolean isAccessory) {
		this.isAccessory = isAccessory;
	}

	/**
	 * @return the returnToSiteName
	 */
	public String getReturnToSiteName()
	{
		return returnToSiteName;
	}

	/**
	 * @param returnToSiteName
	 *           the returnToSiteName to set
	 */
	public void setReturnToSiteName(final String returnToSiteName)
	{
		this.returnToSiteName = returnToSiteName;
	}

	/**
	 * @return the lineNotes
	 */
	public String getLineNotes()
	{
		return lineNotes;
	}

	/**
	 * @param lineNotes
	 *           the lineNotes to set
	 */
	public void setLineNotes(final String lineNotes)
	{
		this.lineNotes = lineNotes;
	}

	/**
	 * @return the serviceOfferings
	 */
	public List<BHGEServiceOfferingsData> getServiceOfferings()
	{
		return serviceOfferings;
	}

	/**
	 * @param serviceOfferings
	 *           the serviceOfferings to set
	 */
	public void setServiceOfferings(final List<BHGEServiceOfferingsData> serviceOfferings)
	{
		this.serviceOfferings = serviceOfferings;
	}

	/**
	 * @return the additionalInfo
	 */
	public BHGEAdditionalInfoForm getAdditionalInfo()
	{
		return additionalInfo;
	}

	/**
	 * @param additionalInfo
	 *           the additionalInfo to set
	 */
	public void setAdditionalInfo(final BHGEAdditionalInfoForm additionalInfo)
	{
		this.additionalInfo = additionalInfo;
	}

	/**
	 * @return the hazardousInfo
	 */
	public BHGEHazardousInfoData getHazardousInfo()
	{
		return hazardousInfo;
	}

	/**
	 * @param hazardousInfo
	 *           the hazardousInfo to set
	 */
	public void setHazardousInfo(final BHGEHazardousInfoData hazardousInfo)
	{
		this.hazardousInfo = hazardousInfo;
	}

	/**
	 * @return the entryNumber
	 */
	public Integer getEntryNumber()
	{
		return entryNumber;
	}

	/**
	 * @param entryNumber
	 *           the entryNumber to set
	 */
	public void setEntryNumber(final Integer entryNumber)
	{
		this.entryNumber = entryNumber;
	}

	/**
	 * @return the otherDetails
	 */
	public String getOtherDetails()
	{
		return otherDetails;
	}

	/**
	 * @param otherDetails
	 *           the otherDetails to set
	 */
	public void setOtherDetails(final String otherDetails)
	{
		this.otherDetails = otherDetails;
	}





	/**
	 * @return the planningSite
	 */
	public String getPlanningSite()
	{
		return planningSite;
	}

	/**
	 * @param planningSite
	 *           the planningSite to set
	 */
	public void setPlanningSite(final String planningSite)
	{
		this.planningSite = planningSite;
	}

	/**
	 * @return the availableSitesList
	 */
	public List<AvailableSitesData> getAvailableSitesList()
	{
		return availableSitesList;
	}

	/**
	 * @param availableSitesList
	 *           the availableSitesList to set
	 */
	public void setAvailableSitesList(final List<AvailableSitesData> availableSitesList)
	{
		this.availableSitesList = availableSitesList;
	}

	/**
	 * @return the similarPart
	 */
	public Boolean getSimilarPart()
	{
		return similarPart;
	}

	/**
	 * @param similarPart
	 *           the similarPart to set
	 */
	public void setSimilarPart(final Boolean similarPart)
	{
		this.similarPart = similarPart;
	}

}
