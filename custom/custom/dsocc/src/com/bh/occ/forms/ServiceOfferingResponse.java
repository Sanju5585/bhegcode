/**
 *
 */
package com.bh.occ.forms;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.bhge.facades.rma.data.*;


/**
 * @author 1185137
 *
 */
public class ServiceOfferingResponse implements Serializable
{
	private static final long serialVersionUID = 1L;

	List<WarrantyData> partEquipmentMapping;
	List<MaterialData> materialData;
	List<OfferDescriptionData> partOfferingDescription;
	List<ErrorData> errorDataList;
	String partNo;
	String currencyIso;
	String currencySymbol;
	String equipmentImageUrl;
	List<OfferingData> offeringDataList;

	public List<OfferingData> getOfferingDataList() {
		return offeringDataList;
	}

	public void setOfferingDataList(List<OfferingData> offeringDataList) {
		this.offeringDataList = offeringDataList;
	}

	/**
	 * @return the partEquipmentMapping
	 */
	public List<WarrantyData> getPartEquipmentMapping()
	{
		return partEquipmentMapping;
	}

	/**
	 * @param partEquipmentMapping
	 *           the partEquipmentMapping to set
	 */
	public void setPartEquipmentMapping(final List<WarrantyData> partEquipmentMapping)
	{
		this.partEquipmentMapping = partEquipmentMapping;
	}

	/**
	 * @return the partOfferingDescription
	 */
	public List<OfferDescriptionData> getPartOfferingDescription()
	{
		return partOfferingDescription;
	}

	/**
	 * @param partOfferingDescription
	 *           the partOfferingDescription to set
	 */
	public void setPartOfferingDescription(final List<OfferDescriptionData> partOfferingDescription)
	{
		this.partOfferingDescription = partOfferingDescription;
	}

	/**
	 * @return the partNo
	 */
	public String getPartNo()
	{
		return partNo;
	}

	public List<MaterialData> getMaterialData() {
		return materialData;
	}

	public void setMaterialData(List<MaterialData> materialData) {
		this.materialData = materialData;
	}

	/**
	 * @param partNo
	 *           the partNo to set
	 */
	public void setPartNo(final String partNo)
	{
		this.partNo = partNo;
	}

	/**
	 * @return the currencyIso
	 */
	public String getCurrencyIso()
	{
		return currencyIso;
	}

	/**
	 * @param currencyIso
	 *           the currencyIso to set
	 */
	public void setCurrencyIso(final String currencyIso)
	{
		this.currencyIso = currencyIso;
	}

	/**
	 * @return the currencySymbol
	 */
	public String getCurrencySymbol()
	{
		return currencySymbol;
	}

	/**
	 * @param currencySymbol
	 *           the currencySymbol to set
	 */
	public void setCurrencySymbol(final String currencySymbol)
	{
		this.currencySymbol = currencySymbol;
	}

	/**
	 * @return the equipmentImageUrl
	 */
	public String getEquipmentImageUrl()
	{
		return equipmentImageUrl;
	}

	/**
	 * @param equipmentImageUrl
	 *           the equipmentImageUrl to set
	 */
	public void setEquipmentImageUrl(final String equipmentImageUrl)
	{
		this.equipmentImageUrl = equipmentImageUrl;
	}

	public List<ErrorData> getErrorDataList() {
		return errorDataList;
	}

	public void setErrorDataList(List<ErrorData> errorDataList) {
		this.errorDataList = errorDataList;
	}

}