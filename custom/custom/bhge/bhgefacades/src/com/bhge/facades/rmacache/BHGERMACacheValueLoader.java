/**
 *
 */
package com.bhge.facades.rmacache;

import de.hybris.platform.regioncache.CacheValueLoadException;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.key.CacheKey;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;

import java.util.Arrays;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.data.BHGERmaStatusData;
import com.bhge.core.rma.service.BHGERMAStatusService;
import com.bhge.core.rmacache.RMACacheKey;


/**
 * @author 1423683
 *
 */
@SuppressWarnings("rawtypes")
public class BHGERMACacheValueLoader implements CacheValueLoader
{
	private static final Logger LOG = Logger.getLogger(BHGERMACacheValueLoader.class);

	@Resource(name = "bhgeRMAStatusService")
	private BHGERMAStatusService bhgeRMAStatusService;


	public BHGERMAStatusService getBhgeRMAStatusService()
	{
		return bhgeRMAStatusService;
	}


	public void setBhgeRMAStatusService(final BHGERMAStatusService bhgeRMAStatusService)
	{
		this.bhgeRMAStatusService = bhgeRMAStatusService;
	}




	@Override
	public BHGERmaStatusData load(final CacheKey key) throws CacheValueLoadException
	{
		LOG.info("Inside Cache BHGERMACACHELOADER ....");
		BHGERmaStatusData rmaStatusData = null;
		if (key instanceof RMACacheKey)
		{
			final RMACacheKey rmaCacheKey = (RMACacheKey) key;
			if (null != rmaCacheKey && StringUtils.isNotBlank(rmaCacheKey.getKey()))
			{
				final String[] keys = rmaCacheKey.getKey().split("-");
				final List<String> list = Arrays.asList(keys[0]);
				if (null != keys)
				{
					LOG.info("Inside load - " + keys[0] + " | " + keys[1] + " | " + keys[2]);
					try
					{
						LOG.info("Calling BHGERMAStatusService to get RMA Status Data from SAP RFC");
						  rmaStatusData = bhgeRMAStatusService.getRmaStatusForCustomerRFC(list, keys[1], keys[2]);
					}
					catch (final Exception e)
					{
						LOG.info("Exception : " + e);
						e.printStackTrace();
					}
				}
			}
		}
		return rmaStatusData;
	}

}
