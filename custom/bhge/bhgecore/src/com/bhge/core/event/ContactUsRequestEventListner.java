package com.bhge.core.event;

import com.bhge.core.model.BHGEContactUsModel;
import com.bhge.core.model.ContactUsEmailProcessModel;
import de.hybris.platform.acceleratorservices.email.EmailService;
import de.hybris.platform.acceleratorservices.model.email.EmailAddressModel;
import de.hybris.platform.acceleratorservices.model.email.EmailAttachmentModel;
import de.hybris.platform.cms2.model.site.CMSSiteModel;
import de.hybris.platform.cms2.servicelayer.services.CMSSiteService;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.event.impl.AbstractEventListener;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import org.apache.commons.collections4.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import java.io.DataInputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

public class ContactUsRequestEventListner extends AbstractEventListener<ContactUsRequestEvent> {
    private final static Logger LOG = LoggerFactory.getLogger(ContactUsRequestEventListner.class);

    @Autowired
    private ModelService  modelService;

    @Autowired
    private BusinessProcessService businessProcessService;

    @Autowired
    private CMSSiteService cmsSiteService;

    @Autowired
    private MediaService mediaService;

    @Autowired
    private EmailService emailService;

    @Override
    protected void onEvent(ContactUsRequestEvent event) {
        try {
            LOG.info("Inside ContactUsRequestEventListner for event {}", event.getSource());
            final ContactUsEmailProcessModel emailProcess = businessProcessService.createProcess(
                    "contactUsRequest" + "_" + System.currentTimeMillis(),"contactUsEmailProcess"
            );
            final BHGEContactUsModel form = (BHGEContactUsModel) event.getSource();
            emailProcess.setContactUsForm(form);
            updateCMSSite(emailProcess);
            addEmailAttachment(form, emailProcess);
            final List<String> ccEmailList = new ArrayList<>();
            String ccMailId = form.getCompanyEmailAddress();
            ccEmailList.add(ccMailId);
            emailProcess.setCcList(ccEmailList);
            modelService.save(emailProcess);
            businessProcessService.startProcess(emailProcess);
        } catch (Exception e) {
            LOG.error("Exception while generating contact us email request {}", e.getMessage());
        }
    }

    private void addEmailAttachment(BHGEContactUsModel form, ContactUsEmailProcessModel emailProcess) {
        List<EmailAttachmentModel> pdf = new ArrayList<>();
        MediaModel media = form.getContactUsMedia();
        if (null != media){
            String realFileName = media.getRealFileName();
            String timeStamp = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new java.util.Date());
            String attachCode = realFileName + timeStamp;
            DataInputStream dataInputStream = new DataInputStream(mediaService.getStreamFromMedia(media));
            EmailAttachmentModel attachment = emailService.createEmailAttachment(dataInputStream,
                    attachCode, media.getMime());
            attachment.setRealFileName(realFileName);
            modelService.save(attachment);
            pdf.add(attachment);
            if ((CollectionUtils.isNotEmpty(pdf))) {
                emailProcess.setAttachmentss(pdf);
            }
        }
    }

    private void updateCMSSite(ContactUsEmailProcessModel emailProcess) {
        List<CMSSiteModel> cmsSites = (List<CMSSiteModel>) cmsSiteService.getSites();
        CMSSiteModel cmsSite = cmsSites.stream()
                .filter(site -> site.getUid().equalsIgnoreCase("bhge"))
                .findFirst()
                .orElse(null);
        emailProcess.setSite(cmsSite);
    }
}
