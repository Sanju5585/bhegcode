package com.bhge.facades.order.populators;

import com.bhge.core.data.ProductLineContactUsData;
import com.bhge.core.event.ContactUsRequestEvent;
import com.bhge.core.model.BHGEContactUsModel;
import com.bhge.core.productlineContactUs.dao.ProductLineContactUsDAO;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.event.EventService;
import de.hybris.platform.servicelayer.model.ModelService;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

public class BHGEContactUsReversePopulator implements Populator<ProductLineContactUsData, BHGEContactUsModel> {

    private final static Logger LOG = LoggerFactory.getLogger(BHGEContactUsReversePopulator.class);

    @Autowired
    private ProductLineContactUsDAO productLineContactUsDAO;

    @Autowired
    private ModelService modelService;

    @Autowired
    private EventService eventService;

    @Override
    public void populate(final ProductLineContactUsData source, final BHGEContactUsModel target) throws ConversionException {
        try {
            if (StringUtils.isNotBlank(source.getAttachmentId())){
                final MediaModel attachmentMedia = productLineContactUsDAO.getMediaByCode(source.getAttachmentId());
                target.setContactUsMedia(attachmentMedia);
            }
            target.setRequestType(source.getRequestType());
            target.setProductLine(source.getProductLine());
            target.setSubProductLine(source.getSubProductLine());
            target.setOrderNumber(source.getOrderNumber());
            target.setRmaNumber(source.getRmaNumber());
            if (StringUtils.isNotBlank(source.getLastName())) {
                target.setFirstName(source.getFirstName());
                target.setLastName(source.getLastName());
            } else if (source.getFirstName().contains(" ")) {
                String fName = StringUtils.isNotBlank(source.getFirstName()) ? source.getFirstName() : "";
                target.setFirstName(fName.split(" ")[0]);
                target.setLastName(fName.split(" ")[1]);
            }
            target.setCompanyName(source.getCompanyName());
            target.setCompanyEmailAddress(source.getEmail());
            target.setPhoneNum(source.getPhoneNum());
            target.setCountry(source.getCountry());
            target.setState(source.getState());
            target.setContactUsNotes(source.getMktoPersonNotes());
            target.setCommunicationsPreference(source.isOptIn());
            target.setContactUsEmail(source.getContactUsEmail());
            modelService.save(target);
            final ContactUsRequestEvent event = new ContactUsRequestEvent(target);
            eventService.publishEvent(event);
        } catch (Exception e) {
            LOG.error(e.getMessage());
        }
    }
}
