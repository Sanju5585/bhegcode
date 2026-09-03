/**
 *
 */
package com.bhge.facades.rmacache;

import com.bhge.core.rmacache.MaterialNumSearchCacheKey;
import com.bhge.core.rmacache.SerialNumSearchCacheKey;
import com.bhge.core.sap.util.BHGESAPJCoUtils;
import com.bhge.facades.product.data.RMAData;
import com.bhge.facades.rma.BHGERmaFormFacade;
import com.bhge.facades.rma.data.MaterialData;
import com.bhge.facades.rma.data.WarrantyData;
import de.hybris.platform.regioncache.CacheValueLoadException;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.key.CacheKey;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.util.ArrayList;
import java.util.List;


/**
 * @author 1423683
 *
 */
public class PartNumberSearchCacheValueLoader implements CacheValueLoader
{
	private static final Logger LOG = Logger.getLogger(PartNumberSearchCacheValueLoader.class);

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
		LOG.info("US563160 - Inside Cache PartNumSearchCacheValueLoader ....");
		List<MaterialData> partNumList = null;
		if (key instanceof MaterialNumSearchCacheKey)
		{
			final MaterialNumSearchCacheKey materialNumSearchCacheKey = (MaterialNumSearchCacheKey) key;
			LOG.info("US563160 - materialNumSearchCacheKey .." +materialNumSearchCacheKey);
			if (null != materialNumSearchCacheKey && StringUtils.isNotBlank(materialNumSearchCacheKey.getKey()))
			{
				String keys = materialNumSearchCacheKey.getKey();
				LOG.info("US563160 - keyString .." +keys);
				final List<RMAData> data = new ArrayList<>();
				final RMAData rmaData = new RMAData();
				/*int i = keyString.lastIndexOf('-');
				String[] keys =  {keyString.substring(0, i), keyString.substring(i+1)};
				final List<RMAData> data = new ArrayList<>();
				final RMAData rmaData = new RMAData();
				//rmaData.setMaterialNumber(null);
				rmaData.setSerialNumber(null);
				if (keys[1].equalsIgnoreCase("x"))
				{
					LOG.info("US563160 - Inside if of material no cache loader");
					rmaData.setMaterialNumber(
							BHGESAPJCoUtils.isNumericData(keys[0]) ? BHGESAPJCoUtils.addLeadingZeros(keys[0], 18) : keys[0]);

				}
				else
				{
					LOG.info("US563160 - Inside else of material no cache loader");
					rmaData.setMaterialNumber(keys[0]);
				}*/
				rmaData.setMaterialNumber(keys);
				rmaData.setSrvOff("");
				rmaData.setPlant("");
				data.add(rmaData);

				if (null != keys)
				{
					//LOG.info("Inside load - " + keys[0] + " | " + keys[1]);
					if (keys.equalsIgnoreCase("x"))
					{
						LOG.info("US563160 - if key contains x");
						partNumList = bhgeRmaFormFacade.prepareServiceOffering(data, false, null, "");
					}
					else
					{
						LOG.info("US563160 - if key not contains x");
						partNumList = bhgeRmaFormFacade.prepareServiceOffering(data, false, null, keys);
					}

				}
			}
		}
		for(final MaterialData materialData : partNumList)
		{
			LOG.info("PartNumSearchCacheValueLoader : US563160 - Partno: " + materialData.getPartNumber() + ", SerialNo: " + materialData.getSerialNumber() );
		}
		LOG.info("US563160 - Partno list" +partNumList);
		return partNumList;
	}

}
