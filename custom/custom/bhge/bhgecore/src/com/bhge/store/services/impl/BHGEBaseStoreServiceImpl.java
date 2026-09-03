/**
 *
 */
package com.bhge.store.services.impl;

import de.hybris.platform.catalog.model.CatalogModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.store.services.impl.DefaultBaseStoreService;

import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.model.GEEdgeSystemAlertModel;
import com.bhge.store.daos.BHGEEdgeBaseStoreDao;
import com.bhge.store.services.BHGEBaseStoreService;


public class BHGEBaseStoreServiceImpl extends DefaultBaseStoreService implements BHGEBaseStoreService
{

	private static final Logger LOG = Logger.getLogger(BHGEBaseStoreServiceImpl.class);

	@Resource(name = "baseStoreDao")
	private BHGEEdgeBaseStoreDao baseStoreDao;

	@Override
	public SAPConfigurationModel findSAPConfigurationWithParams(final String salesRegion, final String distributionChannel,
			final String division)
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("Entered into findSAPConfigurationWithParams method");
		}
		final List<SAPConfigurationModel> result = baseStoreDao.findSAPConfigurationWithParams(salesRegion, distributionChannel,
				division);
		if (result.isEmpty())
		{
			LOG.warn("SAPConfiguration not found for Sales Region: " + salesRegion + " Distribution Channel: " + distributionChannel
					+ " Division: " + division);
		}
		else if (result.size() > 1)
		{
			LOG.error("More than one SAPConfiguration found for Sales Region: " + salesRegion + " Distribution Channel: "
					+ distributionChannel + " Division: " + division);
		}
		else
		{
			return result.get(0);
		}
		return null;
	}

	@Override
	public BaseStoreModel findBaseStoreBySAPConfiguration(final String sapConfigurationId)
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("Entered into findBaseStoreBySAPConfiguration method");
		}
		final List<BaseStoreModel> result = baseStoreDao.findBaseStoreBySAPConfiguration(sapConfigurationId);
		if (result.isEmpty())
		{
			LOG.warn("No Base Store found for SAPConfiguration " + sapConfigurationId);
		}
		else
		{
			return result.get(0);
		}
		return null;
	}

	@Override
	public List<CatalogModel> getProductCatalogs(final BaseStoreModel baseStore)
	{
		if (null != baseStore)
		{
			return baseStore.getCatalogs();
		}
		return null;
	}

	@Override
	public CatalogModel getProductCatalog(final BaseStoreModel baseStore)
	{
		if (null != baseStore)
		{
			final List<CatalogModel> catalogs = baseStore.getCatalogs();
			return catalogs.get(0);
		}
		return null;
	}

	@Override
	public GEEdgeSystemAlertModel getSystemMessage(final String code)
	{
		final List<GEEdgeSystemAlertModel> geEdgeSystemAlertModels = baseStoreDao.findSystemMessage(code);

		if (geEdgeSystemAlertModels != null && !geEdgeSystemAlertModels.isEmpty() && geEdgeSystemAlertModels.size() >= 0)
		{
			return geEdgeSystemAlertModels.get(0);
		}
		else
		{

			return null;
		}
	}
}
