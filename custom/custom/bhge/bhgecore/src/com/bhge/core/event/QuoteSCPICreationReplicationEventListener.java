package com.bhge.core.event;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.cms2.servicelayer.services.CMSSiteService;
import de.hybris.platform.commerceservices.model.process.QuoteProcessModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.event.impl.AbstractEventListener;
import de.hybris.platform.servicelayer.model.ModelService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

public class QuoteSCPICreationReplicationEventListener extends AbstractEventListener<QuoteSCPICreationReplicationEvent> {

    private static final Logger LOG = LoggerFactory.getLogger(QuoteSCPICreationReplicationEventListener.class);

    @Autowired
    private ModelService modelService;

    @Autowired
    private BusinessProcessService businessProcessService;

    @Autowired
    private CMSSiteService cmsSiteService;

    @Override
    protected void onEvent(QuoteSCPICreationReplicationEvent event) {
        try {
            LOG.info("Inside QuoteSCPICreationReplicationEventListner for event");
            final QuoteModel quote = (QuoteModel) event.getSource();
            LOG.info("Quote Id: {}", quote.getCode());
            // TODO: 02-04-2025 Make SCPI call
            final QuoteProcessModel businessProcess = businessProcessService.createProcess(
                    "quoteCreationProcess" + "-" + quote.getCode() + "-" + System.currentTimeMillis(), BhgeCoreConstants.QUOTE_CREATION_PROCESS, null);
            businessProcess.setQuoteCode(quote.getCode());
            businessProcess.setUser(quote.getUser());
            modelService.save(businessProcess);
            businessProcessService.startProcess(businessProcess);
        } catch (Exception e) {
            LOG.error("Exception in QuoteSCPICreationReplicationEventListner {}", e.getMessage());
        }
    }

}
