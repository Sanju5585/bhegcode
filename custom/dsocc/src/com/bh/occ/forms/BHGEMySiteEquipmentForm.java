package com.bh.occ.forms;

import java.util.Date;
import java.util.List;

import com.bhge.core.data.ServiceHistoryDetails;

/**
 * Custom form for MSE
 * @author 212695810
 *
 */
public class BHGEMySiteEquipmentForm {
	
	private String partNumber;
	private String serialNumber;
	private String partName;
	private boolean favourites;
	private String status;
	private boolean inactiveFlag;
	private String assetNumber;
	private String location;
	private String lastServiceDate;
	private String htsCode;
	private String serviceInterval;
	private String additionalInfo;
	private String endCustomerName;
	private String endCustomer;
	private String nextServiceDueInMonths;
	private Date serviceDueDate;
	private List<ServiceHistoryDetails> serviceHistoryDetails;
	private boolean thereInMELFlag;
	private String addUpdateFlag;
	private boolean removeFlag;
	private String pinned;
	private String selectedOption;	
	private String sensorType;
	private String customer;
	private String productLine;
	//private String productFamily;


	public String getProductLine() {
		return productLine;
	}

	public void setProductLine(String productLine) {
		this.productLine = productLine;
	}

	/**
	 * @return
	 */
	public String getPinned() {
		return pinned;
	}

	/**
	 * @param pinned
	 */
	public void setPinned(String pinned) {
		this.pinned = pinned;
	}

	/**
	 * @return
	 */
	public String getSelectedOption() {
		return selectedOption;
	}

	/**
	 * @param selectedOption
	 */
	public void setSelectedOption(String selectedOption) {
		this.selectedOption = selectedOption;
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
	public String getSerialNumber()
	{
		return serialNumber;
	}

	/**
	 * @param serialNumber
	 *           the serialNumber to set
	 */
	public void setSerialNumber(final String serialNumber)
	{
		this.serialNumber = serialNumber;
	}

	/**
	 * @return the partName
	 */
	public String getPartName()
	{
		return partName;
	}

	/**
	 * @param partName
	 *           the partName to set
	 */
	public void setPartName(final String partName)
	{
		this.partName = partName;
	}

	/**
	 * @return the favourites
	 */
	public boolean isFavourites()
	{
		return favourites;
	}

	/**
	 * @param favourites
	 *           the favourites to set
	 */
	public void setFavourites(final boolean favourites)
	{
		this.favourites = favourites;
	}

	/**
	 * @return the status
	 */
	public String getStatus()
	{
		return status;
	}

	/**
	 * @param status
	 *           the status to set
	 */
	public void setStatus(final String status)
	{
		this.status = status;
	}

	/**
	 * @return the inactiveFlag
	 */
	public boolean isInactiveFlag()
	{
		return inactiveFlag;
	}

	/**
	 * @param inactiveFlag
	 *           the inactiveFlag to set
	 */
	public void setInactiveFlag(final boolean inactiveFlag)
	{
		this.inactiveFlag = inactiveFlag;
	}

	/**
	 * @return the assetNumber
	 */
	public String getAssetNumber()
	{
		return assetNumber;
	}

	/**
	 * @param assetNumber
	 *           the assetNumber to set
	 */
	public void setAssetNumber(final String assetNumber)
	{
		this.assetNumber = assetNumber;
	}

	/**
	 * @return the location
	 */
	public String getLocation()
	{
		return location;
	}

	/**
	 * @param location
	 *           the location to set
	 */
	public void setLocation(final String location)
	{
		this.location = location;
	}

	/**
	 * @return the lastServiceDate
	 */
	public String getLastServiceDate()
	{
		return lastServiceDate;
	}

	/**
	 * @param lastServiceDate
	 *           the lastServiceDate to set
	 */
	public void setLastServiceDate(final String lastServiceDate)
	{
		this.lastServiceDate = lastServiceDate;
	}

	/**
	 * @return the htsCode
	 */
	public String getHtsCode()
	{
		return htsCode;
	}

	/**
	 * @param htsCode
	 *           the htsCode to set
	 */
	public void setHtsCode(final String htsCode)
	{
		this.htsCode = htsCode;
	}

	/**
	 * @return the serviceInterval
	 */
	public String getServiceInterval()
	{
		return serviceInterval;
	}

	/**
	 * @param serviceInterval
	 *           the serviceInterval to set
	 */
	public void setServiceInterval(final String serviceInterval)
	{
		this.serviceInterval = serviceInterval;
	}

	/**
	 * @return the additionalInfo
	 */
	public String getAdditionalInfo()
	{
		return additionalInfo;
	}

	/**
	 * @param additionalInfo
	 *           the additionalInfo to set
	 */
	public void setAdditionalInfo(final String additionalInfo)
	{
		this.additionalInfo = additionalInfo;
	}

	/**
	 * @return the endCustomerName
	 */
	public String getEndCustomerName()
	{
		return endCustomerName;
	}

	/**
	 * @param endCustomerName
	 *           the endCustomerName to set
	 */
	public void setEndCustomerName(final String endCustomerName)
	{
		this.endCustomerName = endCustomerName;
	}

	/**
	 * @return the endCustomer
	 */
	public String getEndCustomer()
	{
		return endCustomer;
	}

	/**
	 * @param endCustomer
	 *           the endCustomer to set
	 */
	public void setEndCustomer(final String endCustomer)
	{
		this.endCustomer = endCustomer;
	}

	/**
	 * @return the nextServiceDueInMonths
	 */
	public String getNextServiceDueInMonths()
	{
		return nextServiceDueInMonths;
	}

	/**
	 * @param nextServiceDueInMonths
	 *           the nextServiceDueInMonths to set
	 */
	public void setNextServiceDueInMonths(final String nextServiceDueInMonths)
	{
		this.nextServiceDueInMonths = nextServiceDueInMonths;
	}

	/**
	 * @return the serviceDueDate
	 */
	public Date getServiceDueDate()
	{
		return serviceDueDate;
	}

	/**
	 * @param serviceDueDate
	 *           the serviceDueDate to set
	 */
	public void setServiceDueDate(final Date serviceDueDate)
	{
		this.serviceDueDate = serviceDueDate;
	}

	/**
	 * @return the serviceHistoryDetails
	 */
	public List<ServiceHistoryDetails> getServiceHistoryDetails()
	{
		return serviceHistoryDetails;
	}

	/**
	 * @param serviceHistoryDetails
	 *           the serviceHistoryDetails to set
	 */
	public void setServiceHistoryDetails(final List<ServiceHistoryDetails> serviceHistoryDetails)
	{
		this.serviceHistoryDetails = serviceHistoryDetails;
	}

	/**
	 * @return the thereInMELFlag
	 */
	public boolean isThereInMELFlag()
	{
		return thereInMELFlag;
	}

	/**
	 * @param thereInMELFlag
	 *           the thereInMELFlag to set
	 */
	public void setThereInMELFlag(final boolean thereInMELFlag)
	{
		this.thereInMELFlag = thereInMELFlag;
	}

	/**
	 * @return the addUpdateFlag
	 */
	public String getAddUpdateFlag()
	{
		return addUpdateFlag;
	}

	/**
	 * @param addUpdateFlag
	 *           the addUpdateFlag to set
	 */
	public void setAddUpdateFlag(final String addUpdateFlag)
	{
		this.addUpdateFlag = addUpdateFlag;
	}

	/**
	 * @return the removeFlag
	 */
	public boolean isRemoveFlag()
	{
		return removeFlag;
	}

	/**
	 * @param removeFlag
	 *           the removeFlag to set
	 */
	public void setRemoveFlag(final boolean removeFlag)
	{
		this.removeFlag = removeFlag;
	}

	

	public String getSensorType() {
		return sensorType;
	}

	public void setSensorType(String sensorType) {
		this.sensorType = sensorType;
	}

	public String getCustomer() {
		return customer;
	}

	public void setCustomer(String customer) {
		this.customer = customer;
	}
//	TODO 23/8 Reintroduce productFamily IF required for druck BRD
//	public String getProductFamily() {
//		return productFamily;
//	}
//
//	public void setProductFamily(String productFamily) {
//		this.productFamily = productFamily;
//	}
	
	

}
