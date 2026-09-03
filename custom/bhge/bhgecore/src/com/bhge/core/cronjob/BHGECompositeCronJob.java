package com.bhge.core.cronjob;

import de.hybris.platform.catalog.job.CompositeJobPerformable;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CompositeCronJobModel;
import de.hybris.platform.servicelayer.cronjob.PerformResult;

public class BHGECompositeCronJob extends CompositeJobPerformable {
	@Override
	public PerformResult perform(final CompositeCronJobModel cronJob)
	{
		PerformResult result = new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
		if (cronJob != null){
			result = super.perform(cronJob);
		}
		return result;
	}

}
