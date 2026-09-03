/**
 *
 */
package com.bhge.core.cronjob;

import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.catalog.synchronization.CatalogSynchronizationService;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;


/**
 * @author 212602188
 *
 *         This job will sync all the products from 1800_GE:Staged Catalog to bhgeProductCatalog:Staged
 *
 */
public class BHGEProductCatalogSyncCronJob extends AbstractJobPerformable<CronJobModel>
{

	private static final Logger LOG = Logger.getLogger(BHGEProductCatalogSyncCronJob.class);

	private final static String SOURCE_CATALOG_ID = "1800_GE";
	private final static String TARGET_CATALOG_ID = "bhgeProductCatalog";
	private final static String VERSION_STAGED = "Staged";
	private final static String VERSION_ONLINE = "Online";

	@Resource(name = "modelService")
	private ModelService modelService;

	@Resource(name = "catalogVersionService")
	private CatalogVersionService catalogVersionService;

	@Resource(name = "catalogSynchronizationService")
	private CatalogSynchronizationService catalogSynchronizationService;

	@Override
	public PerformResult perform(final CronJobModel cronJob)
	{
		try
		{
			final CatalogVersionModel sourceCatalogVersion = catalogVersionService.getCatalogVersion(SOURCE_CATALOG_ID,
					VERSION_STAGED);
			final CatalogVersionModel targetCatalogVersion = catalogVersionService.getCatalogVersion(TARGET_CATALOG_ID,
					VERSION_STAGED);

			catalogSynchronizationService.synchronizeFully(sourceCatalogVersion, targetCatalogVersion);
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while executing BHGEProductCatalogSyncCronJob " + e);
		}

		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}

}
