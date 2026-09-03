/**
 *
 */
package com.bhge.core.cronjob;

import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.util.BHGECategorytoproductutil;


/**
 * @author 212722447
 *
 */

public class BHGECategorytoProductJob extends AbstractJobPerformable<CronJobModel>
{

	private static final Logger LOG = Logger.getLogger(BHGECategorytoProductJob.class);

	@Autowired
	protected BHGECategorytoproductutil bhgeCategorytoproductutil;

	@Override
	public PerformResult perform(final CronJobModel arg0)
	{

		LOG.info("BHGECategorytoProductJob : Start - ");

		Date lastRunTime = arg0.getLastRunTime();
		bhgeCategorytoproductutil.categorytoProduct(lastRunTime);
		arg0.setLastRunTime(new Date());
		modelService.save(arg0);

		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}
}
