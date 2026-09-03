/**
 *
 */
package com.bhge.facades.regioncache;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.regioncache.BHGECacheKey;
import com.bhge.facades.order.data.BHGEOrderHistoryCollectionData;
import com.bhge.integration.order.history.service.BHGEOrderHistoryService;

import de.hybris.platform.regioncache.CacheValueLoadException;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.key.CacheKey;


@SuppressWarnings("rawtypes")
public class BHGECacheValueLoader implements CacheValueLoader
{

	private static final Logger LOG = Logger.getLogger(BHGECacheValueLoader.class);

	@Resource(name = "bhgeOrderHistoryService")
	private BHGEOrderHistoryService bhgeOrderHistoryService;

	@Override
	public BHGEOrderHistoryCollectionData load(final CacheKey key) throws CacheValueLoadException
	{
		LOG.info("Inside load ....");
		BHGEOrderHistoryCollectionData orderHeaderData = null;
		if (key instanceof BHGECacheKey)
		{
			final BHGECacheKey bhgeCacheKey = (BHGECacheKey) key;
			if (null != bhgeCacheKey && StringUtils.isNotBlank(bhgeCacheKey.getKey()))
			{
				final String[] keys = bhgeCacheKey.getKey().split("-");
				if (null != keys)
				{
					LOG.info("Inside load - " + keys[0] + " | " + keys[1]);
					orderHeaderData = bhgeOrderHistoryService.getOrders(keys[0], keys[1]);
				}
			}
		}
		return orderHeaderData;
	}

	public BHGEOrderHistoryService getBhgeOrderHistoryService()
	{
		return bhgeOrderHistoryService;
	}

	public void setBhgeOrderHistoryService(final BHGEOrderHistoryService bhgeOrderHistoryService)
	{
		this.bhgeOrderHistoryService = bhgeOrderHistoryService;
	}

}
