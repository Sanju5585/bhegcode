/**
 *
 */
package com.bhge.facades.rmacache;

import com.bhge.facades.rma.data.MaterialData;
import de.hybris.platform.regioncache.CacheValueLoadException;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.key.CacheKey;

import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.rmacache.SerialNumSearchCacheKey;
import com.bhge.core.sap.util.BHGESAPJCoUtils;
import com.bhge.facades.product.data.RMAData;
import com.bhge.facades.rma.BHGERmaFormFacade;
import com.bhge.facades.rma.data.WarrantyData;


/**
 * @author 1423683
 *
 */
public class SerialNumSearchCacheValueLoader implements CacheValueLoader
{
	private static final Logger LOG = Logger.getLogger(SerialNumSearchCacheValueLoader.class);

	@Resource(name = "bhgeRmaFormFacade")
	private BHGERmaFormFacade bhgeRmaFormFacade;


	public BHGERmaFormFacade getBhgeRmaFormFacade()
	{
		return bhgeRmaFormFacade;
	}

	public void setBhgeRmaFormFacade(final BHGERmaFormFacade bhgeRmaFormFacade)
	{
		this.bhgeRmaFormFacade = bhgeRmaFormFacade;
	}


	@Override
	public List<MaterialData> load(final CacheKey key) throws CacheValueLoadException
	{
		LOG.info("Inside Cache SerialNumSearchCacheValueLoader ....");
		List<MaterialData> partNumList = null;
		if (key instanceof SerialNumSearchCacheKey)
		{
			final SerialNumSearchCacheKey serialNumSearchCacheKey = (SerialNumSearchCacheKey) key;
			if (null != serialNumSearchCacheKey && StringUtils.isNotBlank(serialNumSearchCacheKey.getKey()))
			{
				String keyString = serialNumSearchCacheKey.getKey();
				int i = keyString.lastIndexOf('-');
				String[] keys =  {keyString.substring(0, i), keyString.substring(i+1)};
				final List<RMAData> data = new ArrayList<>();
				final RMAData rmaData = new RMAData();
				rmaData.setMaterialNumber(null);
				if (keys[1].equalsIgnoreCase("x"))
				{
					rmaData.setSerialNumber(
							BHGESAPJCoUtils.isNumericData(keys[0]) ? BHGESAPJCoUtils.addLeadingZeros(keys[0], 18) : keys[0]);
				}
				else
				{
					rmaData.setSerialNumber(keys[0]);
				}
				rmaData.setSrvOff("");
				rmaData.setPlant("");
				data.add(rmaData);

				if (null != keys)
				{
					LOG.info("Inside load - " + keys[0] + " | " + keys[1]);
					if (keys[1].equalsIgnoreCase("x"))
					{
						partNumList = bhgeRmaFormFacade.prepareServiceOffering(data, true, null, "");
					}
					else
					{
						partNumList = bhgeRmaFormFacade.prepareServiceOffering(data, true, null, keys[1]);
					}

				}
			}
		}
		return partNumList;
	}

}
