/**
 *
 */
package com.bhge.site.impl;

import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.catalog.model.CatalogModel;
import de.hybris.platform.site.impl.DefaultBaseSiteService;
import de.hybris.platform.store.BaseStoreModel;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import jakarta.annotation.Resource;

import com.bhge.store.services.BHGEBaseStoreService;


public class BHGEBaseSiteServiceImpl extends DefaultBaseSiteService
{


	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	@Override
	public List<CatalogModel> getProductCatalogs(final BaseSiteModel site)
	{
		final List<CatalogModel> result = new ArrayList<CatalogModel>();
		if (site == null)
		{
			return result;
		}
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		if (baseStore != null)
		{
			final Collection<CatalogModel> catalogs = baseStore.getCatalogs();
			if (null != catalogs)
			{
				for (final CatalogModel catalog : catalogs)
				{
					if ((!(isPlainCatalogModel(catalog))) ||

					(result.contains(catalog)))
					{
						continue;
					}
					result.add(catalog);
				}
			}
		}
		return result;
	}

	public BHGEBaseStoreService getBaseStoreService()
	{
		return baseStoreService;
	}

	public void setBaseStoreService(final BHGEBaseStoreService baseStoreService)
	{
		this.baseStoreService = baseStoreService;
	}


}
