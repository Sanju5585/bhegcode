package com.bhge.core.actions.quote;

import com.bhge.core.quote.service.BHGECommerceQuoteService;
import de.hybris.platform.commerceservices.model.process.BHGEQuoteProcessModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.order.QuoteService;
import de.hybris.platform.processengine.action.AbstractSimpleDecisionAction;
import de.hybris.platform.task.RetryLaterException;
import org.apache.commons.lang3.BooleanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.annotation.Resource;

public class BHGEQuoteAttachmentAction extends AbstractSimpleDecisionAction<BHGEQuoteProcessModel> {

    private static final Logger LOG = LoggerFactory.getLogger(BHGEQuoteAttachmentAction.class);

    @Resource(name = "quoteService")
    private QuoteService quoteService;

    @Resource(name ="bhgeCommerceQuoteService")
    private BHGECommerceQuoteService bhgeCommerceQuoteService;

    @Override
    public Transition executeAction(BHGEQuoteProcessModel quoteProcess) throws RetryLaterException, Exception {
        Transition result = null;
        try {
            LOG.info("US530529: Inside BHGEQuoteAttachmentAction for process code {}", quoteProcess.getCode());
            final QuoteModel quote = quoteService.getCurrentQuoteForCode(quoteProcess.getQuoteCode());
            boolean attachmentUploaded = bhgeCommerceQuoteService.quoteAttachment(quote);
            if (BooleanUtils.isTrue(attachmentUploaded)) {
                result = Transition.OK;
            } else {
                result = Transition.NOK;
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return result;
    }
}
