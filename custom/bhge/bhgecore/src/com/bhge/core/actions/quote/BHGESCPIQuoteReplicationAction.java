package com.bhge.core.actions.quote;

import com.bhge.core.quote.service.BHGECommerceQuoteService;
import de.hybris.platform.commerceservices.model.process.BHGEQuoteProcessModel;
import de.hybris.platform.commerceservices.order.CommerceQuoteService;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.order.QuoteService;
import de.hybris.platform.processengine.action.AbstractSimpleDecisionAction;
import de.hybris.platform.task.RetryLaterException;
import lombok.Getter;
import lombok.Setter;
import org.apache.commons.lang3.BooleanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import jakarta.annotation.Resource;

@Setter
@Getter
public class BHGESCPIQuoteReplicationAction extends AbstractSimpleDecisionAction<BHGEQuoteProcessModel> {

    private static final Logger LOG = LoggerFactory.getLogger(BHGESCPIQuoteReplicationAction.class);

    private QuoteService quoteService;

    private BHGECommerceQuoteService bhgeCommerceQuoteService;

    @Override
    public Transition executeAction(BHGEQuoteProcessModel process) throws RetryLaterException, Exception {

        Transition result = null;
        try {
            LOG.info("In BHGESCPIQuoteReplicationAction for process code : {}", process.getCode());
            final QuoteModel quote = quoteService.getCurrentQuoteForCode(process.getQuoteCode());
            boolean quoteReplicated = bhgeCommerceQuoteService.replicateQuote(quote);
            if (BooleanUtils.isTrue(quoteReplicated)) {
                result = Transition.OK;
            } else {
                result = Transition.NOK;
            }
        } catch (Exception e) {
            LOG.error("Exception in BHGESCPIQuoteReplicationAction {}", e.getMessage());
        }
        return result;
    }
}
