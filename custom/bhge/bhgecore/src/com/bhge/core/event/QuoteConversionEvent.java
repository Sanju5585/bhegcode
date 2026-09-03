package com.bhge.core.event;

import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.servicelayer.event.events.AbstractEvent;

public class QuoteConversionEvent extends AbstractEvent {

    public QuoteConversionEvent(final OrderModel order) {super(order);}
}
