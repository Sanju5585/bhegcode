package com.bhge.core.cronjob;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.quote.service.BHGECommerceQuoteService;
import de.hybris.platform.commerceservices.model.process.QuoteProcessModel;
import de.hybris.platform.core.enums.QuoteState;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import jakarta.annotation.Resource;
import java.util.List;

public class BHGEPendingQuoteCreationJob extends AbstractJobPerformable<CronJobModel> {

    private final static Logger LOG = LoggerFactory.getLogger(BHGEPendingQuoteCreationJob.class);

    @Resource(name = "commerceQuoteService")
    private BHGECommerceQuoteService bhgeCommerceQuoteService;

    @Autowired
    BusinessProcessService businessProcessService;

    @Override
    public PerformResult perform(CronJobModel cronjob) {
        LOG.info("Pending Quote Creation Job started");
        try {
            List<QuoteModel> pendingQuotes = bhgeCommerceQuoteService.getPendingQuotes();
            if (CollectionUtils.isNotEmpty(pendingQuotes)) {
                for (QuoteModel quote : pendingQuotes) {
                    final QuoteProcessModel businessProcess = (QuoteProcessModel) businessProcessService.createProcess(
                            "quoteCreationProcess" + "-" + quote.getCode() + "-" + System.currentTimeMillis(), BhgeCoreConstants.QUOTE_CREATION_PROCESS, null);
                    businessProcess.setQuoteCode(quote.getCode());
                    businessProcess.setUser(quote.getUser());
                    modelService.save(businessProcess);
                    businessProcessService.startProcess(businessProcess);
                }
            }
        } catch (Exception e) {
            LOG.error("Error occurred while creating pending quotes {}", e.getMessage());
            return new PerformResult(CronJobResult.ERROR, CronJobStatus.FINISHED);
        }
        return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
    }
}
