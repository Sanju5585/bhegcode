/**
 *
 */
package com.bhge.facades.rma.impl;

import java.util.Collection;
import java.util.List;
import java.util.Map;

import com.bhge.facades.rma.data.MaterialData;
import com.bhge.facades.rma.data.OfferDescriptionData;
import com.bhge.facades.rma.data.WarrantyData;


/**
 * @author 1185137
 *
 */
public class ServiceOffering
{

	Map<String, Map<String, Collection<Object>>> offeringMatrix;
	List<MaterialData> materialData;
	List<WarrantyData> partEquipmentMapping;
	List<OfferDescriptionData> partOfferingDescription;
	String partNo;

	/**
	 * @return the offeringMatrix
	 */
	public Map<String, Map<String, Collection<Object>>> getOfferingMatrix()
	{
		return offeringMatrix;
	}

	/**
	 * @param offeringMatrix
	 *           the offeringMatrix to set
	 */
	public void setOfferingMatrix(final Map<String, Map<String, Collection<Object>>> offeringMatrix)
	{
		this.offeringMatrix = offeringMatrix;
	}

	public List<MaterialData> getMaterialData() {
		return materialData;
	}

	public void setMaterialData(List<MaterialData> materialData) {
		this.materialData = materialData;
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

	/**
	 * @param partNo
	 *           the partNo to set
	 */
	public void setPartNo(final String partNo)
	{
		this.partNo = partNo;
	}


}
