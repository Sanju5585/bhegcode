package com.bhge.core.cronjob;

import com.bhge.core.data.BHGEOrderUpdateEmailNotificationData;
import com.bhge.core.data.DsEmailNotificationData;
import com.bhge.core.model.DsNotificationCronJobModel;
import com.bhge.core.notifications.service.DsNotificationsService;
import com.bhge.core.scpi.rfc.dsNotification.BHGEMtSalesOrderHdr;
import com.bhge.core.user.service.BHGEUserProfileService;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.util.List;
import java.util.Map;

public class BHGEOrderUpdateEmailNotificationJob extends AbstractJobPerformable<DsNotificationCronJobModel> {
    private static final Logger LOG = Logger.getLogger(BHGEOrderUpdateEmailNotificationJob.class);
    private static final String pattern = "yyyy-MM-dd HH:mm:ss";

    @Resource(name = "dsNotificationsService")
    private DsNotificationsService dsNotificationsService;

    @Resource(name = "userProfileService")
    private BHGEUserProfileService userProfileService;

    @Override
    public PerformResult perform(DsNotificationCronJobModel dsNotificationCronJobModel) {
        try{
            LOG.info("US552962 : Order Update Notification Job Triggered");
            DsEmailNotificationData dsEmailNotificiationData = populateEmailNotificationData(dsNotificationCronJobModel);

            Map<String, List<BHGEOrderUpdateEmailNotificationData>> saleOrderEmailMapGroupByCutomer
                    = dsNotificationsService.getEmailNotificationsMap(dsEmailNotificiationData);
            LOG.info("US552962 : Customer List ");
            if(!saleOrderEmailMapGroupByCutomer.isEmpty()) {
                for (Map.Entry<String, List<BHGEOrderUpdateEmailNotificationData>> entry : saleOrderEmailMapGroupByCutomer.entrySet()) {
                    String customerMailId = entry.getKey();
                    String customerName = getUserName(customerMailId);
                    LOG.info("US552962 : Sending Mail for Customer : " + customerMailId);
                    LOG.info("US552962 : Sending Mail for Customer : " + customerName);
                    List<BHGEOrderUpdateEmailNotificationData> items = entry.getValue();
                    if (items != null && !items.isEmpty()) {
                        LOG.info("US552962: Order item is not empty Sending Mail to : " + customerMailId);
                        dsNotificationsService.sendOrderUpdateEmail(items, customerMailId, customerName);
                    }
                }
            }
            LOG.info("US552962 : BHGEOrderUpdateEmailNotificationJob - Job Completed Successfully... ");
            return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);

        }catch (final Exception ex) {
            LOG.error("US552962 : BHGEOrderUpdateEmailNotificationJob - An Error Occored... " + ex);
            return new PerformResult(CronJobResult.ERROR, CronJobStatus.ABORTED);
        }
    }

    DsEmailNotificationData populateEmailNotificationData(DsNotificationCronJobModel dsNotificationCronJobModel){
        DsEmailNotificationData dsEmailNotificationData = new DsEmailNotificationData();
        dsEmailNotificationData.setCustomerNumber(dsNotificationCronJobModel.getCustomerNumber());
        dsEmailNotificationData.setDivision(dsNotificationCronJobModel.getDivision());
        dsEmailNotificationData.setFlag(dsNotificationCronJobModel.getFlag());
        dsEmailNotificationData.setSalesOrg(dsNotificationCronJobModel.getSalesOrg());
        dsEmailNotificationData.setStartDate(dsNotificationCronJobModel.getStartDate());
        dsEmailNotificationData.setSoNumber(dsNotificationCronJobModel.getSoNumber());
        dsEmailNotificationData.setEndDate(dsNotificationCronJobModel.getEndDate());
        dsEmailNotificationData.setSoType(dsNotificationCronJobModel.getSoType());
        return dsEmailNotificationData;
    }

    private String getUserName(String customerEmailid) {
        GEEdgeCustomerModel customer = null;
        String customerName = "";
        LOG.info("US552962 : Fetching Customer : " + customerEmailid);
        try{
            customer = userProfileService.findCurrentUserProfile(customerEmailid);
            return customer.getName();
        }catch(Exception e){
            LOG.info("US552962 : Customer Not Found : "+ e.toString());
        }
        return customerName;
    }
}
