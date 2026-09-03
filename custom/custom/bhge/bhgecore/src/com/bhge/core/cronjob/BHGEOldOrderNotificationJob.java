package com.bhge.core.cronjob;

import com.bhge.core.model.OrderNotificationModel;
import com.bhge.core.order.service.BHGEOrderNotificationService;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.Config;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.log4j.Logger;


import jakarta.annotation.Resource;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

public class BHGEOldOrderNotificationJob  extends AbstractJobPerformable<CronJobModel> {

    private static final Logger LOG = Logger.getLogger(BHGEOldOrderNotificationJob.class);

    @Resource
    private BHGEOrderNotificationService bhgeOrderNotificationService;

    @Resource(name = "modelService")
    private ModelService modelService;

    @Override
    public PerformResult perform(CronJobModel model) {
        try {
            int offsetDays = Integer.parseInt(Config.getParameter("bhge.order.notification.month"));
            LocalDate localDate = LocalDate.now();
            LocalDate pastDate = localDate.minusDays(offsetDays);
            Date date = Date.from(pastDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
            List<OrderNotificationModel> orderNotifications = bhgeOrderNotificationService.getPastNotifications(date);
            if (CollectionUtils.isNotEmpty(orderNotifications)){
                modelService.removeAll(orderNotifications);
            } else {
                LOG.info("No old Order Notifications found to for removal");
            }
            return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
        } catch (Exception e) {
            LOG.error("Exception while Removing old Order Notifications"+ e.getMessage());
            return new PerformResult(CronJobResult.ERROR, CronJobStatus.FINISHED);
        }
    }
}
