package com.bhge.core.event;

import com.bhge.core.model.BHGEContactUsModel;
import de.hybris.platform.servicelayer.event.events.AbstractEvent;
import lombok.Getter;
import lombok.Setter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Setter
@Getter
public class ContactUsRequestEvent extends AbstractEvent {
    private final static Logger LOG = LoggerFactory.getLogger(ContactUsRequestEvent.class);

    public ContactUsRequestEvent(final BHGEContactUsModel contactUsForm) {super(contactUsForm);}
}
