package com.bhge.core.cronjob;

import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.dataretention.service.BHDataRetentionService;

import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;

public class BHDataRetentionJob extends AbstractJobPerformable<CronJobModel>{
	
	private static final Logger LOG = Logger.getLogger(BHDataRetentionJob.class);
	
	@Resource
	private BHDataRetentionService bhDataRetentionService;
	
	@Resource(name = "modelService")
	private ModelService modelService;

	@Override
	public PerformResult perform(CronJobModel arg0) {
		
		List<OrderModel> ordersList = bhDataRetentionService.getOrdersListToArchive();
		ordersList.forEach(order -> LOG.info("Order to be archived : " + order.getCode()));
		modelService.removeAll(ordersList);
		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}

}
