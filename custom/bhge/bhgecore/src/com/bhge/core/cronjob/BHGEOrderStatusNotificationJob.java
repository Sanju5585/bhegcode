package com.bhge.core.cronjob;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.log4j.Logger;

import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.sap.service.BHGESAPOrderSubmissionService;

import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.util.Config;

public class BHGEOrderStatusNotificationJob extends AbstractJobPerformable<CronJobModel> {
	private static final Logger LOG = Logger.getLogger(BHGEOrderStatusNotificationJob.class);
	private static final String pattern = "yyyy-MM-dd HH:mm:ss";

	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;

	@Resource(name = "baseSiteService")
	private BaseSiteService siteService;

	@Resource(name = "bhgeSAPOrderSubmissionService")
	private BHGESAPOrderSubmissionService bhgeSAPOrderSubmissionService;

	@Override
	public PerformResult perform(CronJobModel cronJobModel) {
		
		LOG.info("Fetcing the orderlist for where order response has not be received from SAP");
		try {
			final DateFormat df = new SimpleDateFormat(pattern);
			final String fromDate = df.format(new Date(System.currentTimeMillis() - Config.getInt("time.limit.recent.orders.placed", 120000)));
			final List<OrderModel> orderList = bhgeB2BOrderService.getOrderByStatus(fromDate);
			if (CollectionUtils.isNotEmpty(orderList)) {
				LOG.info(
						"Initiating mail for orders having order status as CheckedValid , Created and Error and exportstatus is EXPORTED");
				for (final OrderModel order : orderList) {
					LOG.info("start sending email for order "+ order.getCode());
					bhgeSAPOrderSubmissionService.sendOrderStatusEmail(order);
					
				}
			}
			return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
		} catch (final Exception ex) {
            LOG.error("An exception has occured in BHGEVCOrderReProcessJob : " + ex);
            return new PerformResult(CronJobResult.ERROR, CronJobStatus.ABORTED);
        }
		
	}
}
