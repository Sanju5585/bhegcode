package com.bhge.core.event;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.acceleratorservices.model.email.EmailMessageModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.orderprocessing.model.OrderProcessModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.event.impl.AbstractEventListener;
import de.hybris.platform.servicelayer.model.ModelService;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class QuoteConversionEventListener extends AbstractEventListener<QuoteConversionEvent> {

    private static final Logger LOG = LoggerFactory.getLogger(QuoteConversionEventListener.class);

    @Autowired
    private ModelService modelService;

    @Autowired
    private BusinessProcessService businessProcessService;

    @Override
    protected void onEvent(QuoteConversionEvent quoteConversionEvent) {
        try {
            LOG.info("US530529: Inside Quote Conversion Event Listener");
            final OrderModel order = (OrderModel) quoteConversionEvent.getSource();
            LOG.info("US530529: Order Id: {}", order.getCode());
            final OrderProcessModel businessProcessModel = businessProcessService.createProcess(
                    "quoteConversionProcess" + "-" + order.getCode() + "-" + System.currentTimeMillis(), BhgeCoreConstants.QUOTE_CONVERSION_PROCESS, null);
            businessProcessModel.setOrder(order);
            businessProcessModel.setUser(order.getUser());
            modelService.save(businessProcessModel);
            businessProcessService.startProcess(businessProcessModel);
        } catch (Exception e) {
            LOG.error("US530529: Error in Quote Conversion Event Listener {}", e.getMessage());
        }
    }
}
