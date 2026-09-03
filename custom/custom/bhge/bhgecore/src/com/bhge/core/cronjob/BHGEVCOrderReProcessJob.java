package com.bhge.core.cronjob;

import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.sap.orderfulfilment.constants.BhgesaporderfulfillmentConstants;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.orderprocessing.model.OrderProcessModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.processengine.enums.ProcessState;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.util.Config;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class BHGEVCOrderReProcessJob extends AbstractJobPerformable<CronJobModel> {

    private static final Logger LOG = Logger.getLogger(BHGEVCOrderReProcessJob.class);

    private static final String ORDER_RE_PROCESS_START_STATE = "checkSAPOrder";

    @Resource
    private BHGEB2BOrderService defaultBHGEB2BOrderService;

    @Resource
    private BusinessProcessService businessProcessService;

    @Override
    public PerformResult perform(CronJobModel cronJobModel) {
        LOG.info("BHGEVCOrderReProcessJob :: Fetching the Recent Orders Which is placed 2min Before");
        final String pattern = "yyyy-MM-dd HH:mm:ss";
        final DateFormat df = new SimpleDateFormat(pattern);
        final String fromDate = df.format(new Date(System.currentTimeMillis() - Config.getInt("time.limit.recent.orders.placed", 120000)));

        final List<OrderModel> notProcessedOrders = defaultBHGEB2BOrderService.getNotProcessedOrders(fromDate);

        try {
            for (OrderModel order : notProcessedOrders) {
                for (OrderProcessModel orderProcess : order.getOrderProcess()) {
                    if (orderProcess instanceof OrderProcessModel) {
                        if (orderProcess.getProcessDefinitionName().contains(BhgesaporderfulfillmentConstants.ORDER_PROCESS_NAME) && (ProcessState.ERROR.equals(orderProcess.getState()) || ProcessState.RUNNING.equals(orderProcess.getState()) || ProcessState.FAILED.equals(orderProcess.getState()))) {
                            try {
                                businessProcessService.restartProcess(orderProcess, ORDER_RE_PROCESS_START_STATE);
                                LOG.info("BHGEVCOrderReProcessJob :: Order Re-Process Successfull for order : " + order.getCode());

                            } catch (Exception e) {
                                LOG.error("BHGEVCOrderReProcessJob :: Order Re-Process Not Successfull for order : " + order.getCode() + " :Error : " + e.getMessage());
                            }
                        }
                    }
                }
            }
            return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
        } catch (final Exception ex) {
            LOG.error("An exception has occured in BHGEVCOrderReProcessJob : " + ex);
            return new PerformResult(CronJobResult.ERROR, CronJobStatus.ABORTED);
        }
    }
}
