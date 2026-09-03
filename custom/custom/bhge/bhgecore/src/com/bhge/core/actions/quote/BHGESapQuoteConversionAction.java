package com.bhge.core.actions.quote;

import com.bhge.core.quote.service.BHGECommerceQuoteService;
import de.hybris.platform.core.enums.QuoteState;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.orderprocessing.model.OrderProcessModel;
import de.hybris.platform.processengine.action.AbstractSimpleDecisionAction;
import de.hybris.platform.task.RetryLaterException;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.annotation.Resource;

public class BHGESapQuoteConversionAction extends AbstractSimpleDecisionAction<OrderProcessModel> {

    private static final Logger LOG = LoggerFactory.getLogger(BHGESapQuoteConversionAction.class);

    @Resource
    BHGECommerceQuoteService bhgeCommerceQuoteService;

    @Override
    public Transition executeAction(OrderProcessModel orderProcessModel) throws RetryLaterException, Exception {
        LOG.info("US530529: Quote Conversation process started");
        try {
            final OrderModel order = orderProcessModel.getOrder();
            if (null != order) {
                LOG.info("US530529: Order code : {}", order.getCode());
                if (BooleanUtils.isTrue(order.getIsQuote())) {
                    final QuoteModel quote = order.getQuoteReference();
                    if (null != quote) {
                        LOG.info("US530529: Quote code : {}", quote.getCode());
                        boolean isQuoteConverted = bhgeCommerceQuoteService.isQuoteConverted(quote, order);
                        if (BooleanUtils.isTrue(isQuoteConverted)) {
                            return Transition.OK;
                        } else {
                            return Transition.NOK;
                        }
                    } else {
                        LOG.error("US530529: Quote code is null");
                    }
                }
            } else {
                LOG.error("US530529: Order is null");
            }
        } catch (Exception e) {
            LOG.error("US530529: Error in Quote to Order Conversation Action {}", e.getMessage());
        }
        return Transition.NOK;
    }
}
