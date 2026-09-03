package com.bhge.core.cronjob;

import com.bhge.core.model.OldCartNotificationEmailProcessModel;
import com.bhge.core.oldcart.service.BHGEOldCartService;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.time.TimeService;
import de.hybris.platform.util.Config;
import org.apache.log4j.Logger;
import org.joda.time.DateTime;

import jakarta.annotation.Resource;
import java.util.Date;
import java.util.List;

public class BHGEOldCartNotificationJob extends AbstractJobPerformable<CronJobModel>{
	
	private static final Logger LOG = Logger.getLogger(BHGEOldCartNotificationJob.class);
	
	@Resource
	private BHGEOldCartService bhgeOldCartService;
	
	@Resource(name = "modelService")
	private ModelService modelService;
	public static final int past24Hrs = 86400;
	@Resource
	public TimeService timeService;
	@Resource
	private BusinessProcessService businessProcessService;

	@Override
	public PerformResult perform(CronJobModel arg0) {
		int offsetSeconds= Config.getInt("bhge.old.cart.notification.job.offsetseconds",past24Hrs);
		Date pastDate = new DateTime(timeService.getCurrentTime()).minusSeconds(offsetSeconds).toDate();
		List<CartModel> cartList = bhgeOldCartService.fetchOldCartDetails(pastDate);
		cartList.forEach(c -> {
			LOG.info("Cart Details : " + c.getCode() +" on date:-"+ pastDate);
			final OldCartNotificationEmailProcessModel oldCartNotificationEmailProcess = (OldCartNotificationEmailProcessModel) businessProcessService.createProcess(
					"oldCartNotificationEmailProcess-" + c.getCode() + "-" + System.currentTimeMillis(),
					"oldCartNotificationEmailProcess");
			oldCartNotificationEmailProcess.setCart(c);
			oldCartNotificationEmailProcess.setSite(c.getSite());
			modelService.save(oldCartNotificationEmailProcess);
			businessProcessService.startProcess(oldCartNotificationEmailProcess);
			c.setIsOldCartNotified(true);
			modelService.save(c);
		});

		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}

}
