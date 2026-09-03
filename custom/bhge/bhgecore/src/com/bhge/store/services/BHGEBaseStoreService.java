/**
 *
 */
package com.bhge.store.services;

import de.hybris.platform.catalog.model.CatalogModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.store.services.BaseStoreService;

import java.util.List;

import com.bhge.core.model.GEEdgeSystemAlertModel;


public interface BHGEBaseStoreService extends BaseStoreService
{

	public abstract SAPConfigurationModel findSAPConfigurationWithParams(String salesRegion, String distributionChannel,
			String division);

	public abstract BaseStoreModel findBaseStoreBySAPConfiguration(String sapConfigurationId);

	public abstract List<CatalogModel> getProductCatalogs(BaseStoreModel baseStore);

	public abstract CatalogModel getProductCatalog(BaseStoreModel baseStore);

	public GEEdgeSystemAlertModel getSystemMessage(String code);

}
