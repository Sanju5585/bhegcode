/**
 *
 */
package com.bhge.store.daos;

import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.store.BaseStoreModel;

import java.util.Date;
import java.util.List;

import com.bhge.core.model.GEEdgeSystemAlertModel;


public interface BHGEEdgeBaseStoreDao
{
	public abstract List<SAPConfigurationModel> findSAPConfigurationWithParams(String salesRegion, String distributionChannel,
			String division);

	public abstract List<BaseStoreModel> findBaseStoreBySAPConfiguration(String sapConfigurationId);

	public List<GEEdgeSystemAlertModel> findSystemMessage(String code);

	public List<CategoryModel> findCategory(Date startTime);

	public List<GEEdgeProductModel> findProducts(CategoryModel category);
}
