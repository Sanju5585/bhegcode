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

import com.bhge.core.user.service.BHGEUserProfileService;

/**
 * @author 212722447
 *
 */
public class BHGEPendingActivationUserReportJob extends AbstractJobPerformable<CronJobModel>
{
	private static final Logger LOG = Logger.getLogger(BHGEPendingActivationUserReportJob.class);

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;
	
	@Override
	public PerformResult perform(CronJobModel arg0)
	{
		try 
		{
		boolean flag = false;
		try
		{
			flag = userProfileService.fetchAndSendPendingActiveUser();
		}
		catch(RuntimeException re){
			LOG.error("Error in BHGEPendingActivationUserReportJob --- perform method, while calling fetchAndSendPendingActiveUser method");
		}
		
		if (!flag) {
			LOG.error("Error in BHGEPendingActivationUserReportJob");
			return new PerformResult(CronJobResult.FAILURE, CronJobStatus.ABORTED);
		} else {
			LOG.info("BHGEPendingActivationUserReportJob : Mail sent successfully");
			return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
		}
	}
		catch(RuntimeException re)
		{
			LOG.error("Error in BHGEPendingActivationUserReportJob Method level");
			return new PerformResult(CronJobResult.FAILURE, CronJobStatus.ABORTED);
		}
	}

	
}
