package com.bhge.integration.models.services;

import de.hybris.platform.ordersplitting.model.WarehouseModel;
import de.hybris.platform.sap.sapmodel.services.SapPlantLogSysOrgService;
import de.hybris.platform.store.BaseStoreModel;

import java.util.Set;


public interface BHGESapPlantLogSysOrgService extends SapPlantLogSysOrgService
{

	/**
	 * Get the list of Plants for the Given Sales Organization
	 *
	 * @param baseStoreModel
	 * @return Set<WarehouseModel>
	 */
	public Set<WarehouseModel> getPlantsForSalesOrganization(BaseStoreModel baseStoreModel);

	public boolean checkPlantSDSEnabled(String salesArea, String plant);

	/*
	 * public double getShippingFee(String salesArea, String plant);
	 */
	public String getCountryCode(String plant, String salesArea);


	public String getTimeZone(String plant, String salesArea);

	public String getCutOffTime(String plant);

	public boolean checkSalesAreaSDSEnabled(String salesArea);
}