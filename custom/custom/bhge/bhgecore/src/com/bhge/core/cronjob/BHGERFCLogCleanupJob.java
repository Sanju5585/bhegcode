/**
 * 
 */
package com.bhge.core.cronjob;

import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;

import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.order.service.BHGEB2BOrderService;

/**
 * @author ransubra
 *
 */
public class BHGERFCLogCleanupJob extends AbstractJobPerformable<CronJobModel>{
	
	private static final Logger LOG = Logger.getLogger(BHGERFCLogCleanupJob.class);

	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;
	
	@Resource(name = "modelService")
	protected ModelService modelService;
	
	/* (non-Javadoc)
	 * @see de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable#perform(de.hybris.platform.cronjob.model.CronJobModel)
	 */
	@Override
	public PerformResult perform(CronJobModel arg0)
	{
		LOG.info("BHGERFCLogCleanupJob : Fetching the RFC logs for past 60 days");
		List<BHGERfcCallErrorModel> rfcCallErrorModel = null;
		rfcCallErrorModel = bhgeB2BOrderService.getRFCErrorList();
		if (rfcCallErrorModel != null && !rfcCallErrorModel.isEmpty()) {
		LOG.info("RFC error logs to be deleted: "+rfcCallErrorModel.size());
		modelService.removeAll(rfcCallErrorModel);
		}
		LOG.info("BHGERFCLogCleanupJob Successfully executed");
		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}

}
