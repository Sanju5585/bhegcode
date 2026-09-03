package com.bhge.core.cronjob;

import com.bhge.core.model.OrderNotificationEmailProcessModel;
import com.bhge.core.model.OrderNotificationModel;
import com.bhge.core.order.service.BHGEOrderNotificationService;
import de.hybris.platform.cms2.model.site.CMSSiteModel;
import de.hybris.platform.cms2.servicelayer.services.CMSSiteService;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.util.List;

public class BHGEBlockedOrderNotificationJob extends AbstractJobPerformable<CronJobModel> {

    private static final Logger LOG = Logger.getLogger(BHGEBlockedOrderNotificationJob.class);

    @Resource
    private BHGEOrderNotificationService bhgeOrderNotificationService;

    @Resource(name = "modelService")
    private ModelService modelService;

    @Resource
    private BusinessProcessService businessProcessService;

    @Resource(name = "cmsSiteService")
    private CMSSiteService cmsSiteService;

    @Override
    public PerformResult perform(CronJobModel model) {
        try {
            LOG.info("BHGEBlockedOrderNotificationJob Start");
            List<OrderNotificationModel> orderNotifications = bhgeOrderNotificationService.getNotificationsEmail();
            if (CollectionUtils.isNotEmpty(orderNotifications)){
                LOG.info("Order Notification found for sending email "+orderNotifications.size());
                orderNotifications.forEach(notification -> {
                    final OrderNotificationEmailProcessModel orderNotificationEmailProcess = businessProcessService.createProcess(
                            "orderNotificationEmailProcess-" + notification.getOrderId() + "-" + System.currentTimeMillis(),
                            "orderNotificationEmailProcess"
                    );
                    orderNotificationEmailProcess.setNotification(notification);
                    List<CMSSiteModel> cmsSites = (List<CMSSiteModel>) cmsSiteService.getSites();
                    CMSSiteModel cmsSite = cmsSites.stream()
                            .filter(site -> site.getUid().equalsIgnoreCase("bhge"))
                            .findFirst()
                            .orElse(null);
                    orderNotificationEmailProcess.setSite(cmsSite);
                    modelService.save(orderNotificationEmailProcess);
                    businessProcessService.startProcess(orderNotificationEmailProcess);
                    notification.setIsOrderEmailSent(true);
                    modelService.save(notification);
                });
            } else {
                LOG.info("No new Notifications found for sending email");
            }
            return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
        } catch (Exception e) {
            LOG.error("Exception while sending order notification email"+ e.getMessage());
            return new PerformResult(CronJobResult.ERROR, CronJobStatus.FINISHED);
        }
    }
}
