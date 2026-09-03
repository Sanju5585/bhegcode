
package com.bhge.core.cronjob;

import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.CronJobService;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;

import java.util.StringTokenizer;

import org.apache.log4j.Logger;

import com.bhge.core.model.GEEdgeCacheCleanerJobModel;
//Migration changes start
//import com.sap.custdev.projects.fbs.slc.cml.util.CacheUtil;
//import com.sap.util.cache.CacheFacade;
//import com.sap.util.cache.CacheRegion;
//Migration changes end



/**
 * Performs initial and delta load
 */
public class BHGECacheCleanerJob extends AbstractJobPerformable<GEEdgeCacheCleanerJobModel>
{

	private static final Logger LOG = Logger.getLogger(BHGECacheCleanerJob.class);
	private CronJobService cronJobService = null;
	private String cacheRegionName;

	public String getCacheRegionName()
	{
		return cacheRegionName;
	}

	public void setCacheRegionName(final String cacheRegionName)
	{
		this.cacheRegionName = cacheRegionName;
	}

	@Override
	public PerformResult perform(final GEEdgeCacheCleanerJobModel cacheCleanerJob)
	{
		//cronJob.setNodeID(value);
		final String lastRegionNames = cacheCleanerJob.getCacheRegionName();
		if (lastRegionNames != null && lastRegionNames.length() > 5)
		{
			cacheRegionName = lastRegionNames.trim();
		}
		final StringTokenizer allRegions = new StringTokenizer(cacheRegionName);
		//Migration changes start
		/*while (allRegions.hasMoreTokens())
		{
			final String currentRegionName = allRegions.nextToken();
			final CacheRegion cr = CacheUtil.getCacheRegion(currentRegionName);
			final CacheFacade cf = (cr == null ? null : cr.getCacheFacade());
			final int nbKey = (cf == null ? 0 : cf.keySet().size());
			if (nbKey > 0)
			{
				cf.clear();
			}
			final String message = "Clean cache for " + currentRegionName + " "
					+ (cf == null ? " <<facade not Found!>>" : (nbKey + " entries removed."));
			LOG.info(message);
		}*/
		//Migration changes end
		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);

	}

	/**
	 * @return the cronJobService
	 */
	public CronJobService getCronJobService()
	{
		return cronJobService;
	}

	/**
	 * @param cronJobService
	 */
	public void setCronJobService(final CronJobService cronJobService)
	{
		this.cronJobService = cronJobService;
	}

	protected ModelService getModelService()
	{
		return modelService;
	}



}
