package com.bhge.integration.models.services.impl;

import de.hybris.platform.ordersplitting.model.WarehouseModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.sap.sapmodel.model.SAPPlantLogSysOrgModel;
import de.hybris.platform.sap.sapmodel.services.impl.DefaultSapPlantLogSysOrgService;
import de.hybris.platform.store.BaseStoreModel;

import java.util.HashSet;
import java.util.Set;

import com.bhge.core.order.daos.BHGEB2BOrderDao;
import com.bhge.integration.models.services.BHGESapPlantLogSysOrgService;


public class BHGESapPlantLogSysOrgServiceImpl extends DefaultSapPlantLogSysOrgService implements BHGESapPlantLogSysOrgService
{

	private BHGEB2BOrderDao bhgeB2BOrderDao;

	/**
	 * Get the list of Plants for the Given Sales Organization
	 *
	 * @param baseStoreModel
	 * @return Set<WarehouseModel>
	 */
	@Override
	public Set<WarehouseModel> getPlantsForSalesOrganization(final BaseStoreModel baseStoreModel)
	{
		SAPConfigurationModel sapConfiguration = null;
		if (null != baseStoreModel)
		{
			sapConfiguration = baseStoreModel.getSAPConfiguration();
			if (null != sapConfiguration)
			{
				return getPlantsForSalesOrg(sapConfiguration.getSapPlantLogSysOrg());
			}
		}
		return null;
	}

	protected Set<WarehouseModel> getPlantsForSalesOrg(final Set<SAPPlantLogSysOrgModel> sapPlantLogOrgModelList)
	{
		final Set<WarehouseModel> plants = new HashSet<WarehouseModel>();
		if (null != sapPlantLogOrgModelList && sapPlantLogOrgModelList.size() > 0)
		{
			for (final SAPPlantLogSysOrgModel plantLogSysOrgModel : sapPlantLogOrgModelList)
			{
				if (null != plantLogSysOrgModel.getPlant())
				{
					plants.add(plantLogSysOrgModel.getPlant());
				}
			}
		}
		return plants;
	}

	@Override
	public boolean checkPlantSDSEnabled(final String salesArea, final String plant)
	{
		return bhgeB2BOrderDao.checkSDSPlantEnabled(salesArea, plant);
	}

	/*
	 * @Override public double getShippingFee(String salesArea, String plant) { return
	 * geEdgeB2BOrderDao.getShippingFee(salesArea,plant); }
	 */
	@Override
	public String getCountryCode(final String plant, final String salesArea)
	{
		return bhgeB2BOrderDao.getCountryCodeForPlant(plant, salesArea);
	}


	@Override
	public String getTimeZone(final String plant, final String salesArea)
	{
		return bhgeB2BOrderDao.getTimeZoneForPlant(plant, salesArea);
	}

	@Override
	public String getCutOffTime(final String plant)
	{
		return bhgeB2BOrderDao.getCutOffTimeForPlant(plant);
	}

	@Override
	public boolean checkSalesAreaSDSEnabled(final String salesArea)
	{
		return bhgeB2BOrderDao.isSalesAreaSDSEnabled(salesArea);
	}


	public BHGEB2BOrderDao getBhgeB2BOrderDao()
	{
		return bhgeB2BOrderDao;
	}

	public void setBhgeB2BOrderDao(final BHGEB2BOrderDao bhgeB2BOrderDao)
	{
		this.bhgeB2BOrderDao = bhgeB2BOrderDao;
	}


}