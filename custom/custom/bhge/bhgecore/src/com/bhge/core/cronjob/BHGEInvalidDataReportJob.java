/**
 *
 */
package com.bhge.core.cronjob;

import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.order.service.BHGEB2BOrderService;


public class BHGEInvalidDataReportJob extends AbstractJobPerformable<CronJobModel>
{



	private static final Logger LOG = Logger.getLogger(BHGEInvalidDataReportJob.class);

	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;



	@Override
	public final PerformResult perform(final CronJobModel arg0)
	{
		LOG.info("GEEdgeInvalidDataReportJob : Fetching invalid data");
		final boolean flag = bhgeB2BOrderService.fetchAndSendInvalidData();

		if (!flag)
		{
			LOG.error("Error in BHGEInvalidDataReportJob");
			return new PerformResult(CronJobResult.FAILURE, CronJobStatus.ABORTED);
		}
		else
		{
			LOG.info("BHGEInvalidDataReportJob : Mail sent successfully");
			return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
		}
	}


}
