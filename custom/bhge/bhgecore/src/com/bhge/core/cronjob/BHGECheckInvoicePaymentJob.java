package com.bhge.core.cronjob;


import com.bhge.facades.invoice.data.InvoiceTrackingRequestData;
import com.bhge.facades.invoice.data.InvoiceTrackingResponseData;
import com.bhge.integration.invoice.history.BHGEInvoiceHistoryService;
import com.ofs.core.model.CheckInvoicePaymentCronJobModel;
import com.ofs.core.model.InvoiceModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

public class BHGECheckInvoicePaymentJob extends AbstractJobPerformable<CheckInvoicePaymentCronJobModel> {
    private static final Logger LOG = org.apache.log4j.Logger.getLogger(BHGECheckInvoicePaymentJob.class);
    @Resource(name="bhgeInvoiceHistoryService")
    private BHGEInvoiceHistoryService bhgeInvoiceHistoryService;
    @Resource(name = "modelService")
    private ModelService modelService;

    @Override
    public PerformResult perform(final CheckInvoicePaymentCronJobModel cronJobModel) {
        try {
            List<InvoiceModel> invoicesToCheck = bhgeInvoiceHistoryService.getInvoicesWithStatus("TRANSACTION_INITIATED");
            for (InvoiceModel invoice : invoicesToCheck) {
                InvoiceTrackingRequestData trackingRequestData = new InvoiceTrackingRequestData();
                String invoiceNumber = invoice.getInvoiceID();
                trackingRequestData.setCustomer(invoice.getCheckoutSessionId());
                LOG.info("BHGECheckInvoicePaymentJob: Checking payment status for Customer ID: " + trackingRequestData.getCustomer());
                trackingRequestData.setInvoiceNumber(invoiceNumber);
                LOG.info("BHGECheckInvoicePaymentJob: Checking payment status for Invoice Number: " + invoiceNumber);
                List<InvoiceTrackingResponseData> responseData = bhgeInvoiceHistoryService.getResponseFromSCPI(trackingRequestData);
                LOG.info("BHGECheckInvoicePaymentJob: Received response for Invoice Number: " + invoiceNumber + " Response Data: " + responseData);
                if (responseData != null && !responseData.isEmpty()) {
                    InvoiceTrackingResponseData invoiceResponse = responseData.get(0);
                    if (invoiceResponse != null && "Paid".equalsIgnoreCase(invoiceResponse.getInvoiceStatus())) {
                        invoice.setTransactionStatus("PAID");
                        modelService.save(invoice);
                        modelService.refresh(invoice);
                    } else if (invoiceResponse != null && "Past Due".equalsIgnoreCase(invoiceResponse.getInvoiceStatus())) {
                        invoice.setTransactionStatus("");
                        modelService.save(invoice);
                        modelService.refresh(invoice);
                    }
                }
            }
            LOG.info("BHGECheckInvoicePaymentJob completed successfully.");


            // Implement the logic to check invoice payment here

            // For demonstration, we will just return a successful PerformResult
            return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
        }
        catch (Exception e) {
            LOG.error("Error occurred while checking invoice payments: ", e);
            return new PerformResult(CronJobResult.FAILURE, CronJobStatus.ABORTED);
        }
    }

    public BHGEInvoiceHistoryService getBhgeInvoiceHistoryService() {
        return bhgeInvoiceHistoryService;
    }

    public void setBhgeInvoiceHistoryService(BHGEInvoiceHistoryService bhgeInvoiceHistoryService) {
        this.bhgeInvoiceHistoryService = bhgeInvoiceHistoryService;
    }

    public ModelService getModelService() {
        return modelService;
    }

    @Override
    public void setModelService(ModelService modelService) {
        this.modelService = modelService;
    }
}
