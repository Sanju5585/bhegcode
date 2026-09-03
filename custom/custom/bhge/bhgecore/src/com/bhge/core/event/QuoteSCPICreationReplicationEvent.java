package com.bhge.core.event;

import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.servicelayer.event.events.AbstractEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class QuoteSCPICreationReplicationEvent extends AbstractEvent {

    private final static Logger LOG = LoggerFactory.getLogger(QuoteSCPICreationReplicationEvent.class);

    public QuoteSCPICreationReplicationEvent(final QuoteModel quote) {super(quote);}
}
