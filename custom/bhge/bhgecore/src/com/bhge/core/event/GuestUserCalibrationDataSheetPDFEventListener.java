package com.bhge.core.event;

import de.hybris.platform.acceleratorservices.email.EmailService;
import de.hybris.platform.acceleratorservices.model.email.EmailAttachmentModel;
import de.hybris.platform.commerceservices.model.process.GuestUserCalportalDataSheetPDFEmailProcessModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.event.impl.AbstractEventListener;
import de.hybris.platform.servicelayer.model.ModelService;

import java.io.ByteArrayInputStream;
import java.io.DataInputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang3.RandomStringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class GuestUserCalibrationDataSheetPDFEventListener
		extends AbstractEventListener<GuestUserCalibrationDataSheetPDFEvent> {

	private static final String APPLICATION_PDF = "application/pdf";

	private static final Logger LOG = LoggerFactory.getLogger(GuestUserCalibrationDataSheetPDFEventListener.class);

	private ModelService modelService;

	private BusinessProcessService businessProcessService;

	private EmailService emailService;

	/**
	 * @return the emailService
	 */
	public EmailService getEmailService() {
		return emailService;
	}

	/**
	 * @param emailService the emailService to set
	 */
	public void setEmailService(EmailService emailService) {
		this.emailService = emailService;
	}

	/**
	 * @return the modelService
	 */
	public ModelService getModelService() {
		return modelService;
	}

	/**
	 * @param modelService the modelService to set
	 */
	public void setModelService(ModelService modelService) {
		this.modelService = modelService;
	}

	/**
	 * @return the businessProcessService
	 */
	public BusinessProcessService getBusinessProcessService() {
		return businessProcessService;
	}

	/**
	 * @param businessProcessService the businessProcessService to set
	 */
	public void setBusinessProcessService(BusinessProcessService businessProcessService) {
		this.businessProcessService = businessProcessService;
	}

	@Override
	protected void onEvent(GuestUserCalibrationDataSheetPDFEvent event) {
		// TODO Auto-generated method stub
		LOG.info("Inside GuestUserCalibrationDataSheetPDFEventListener");
		try {
			final GuestUserCalportalDataSheetPDFEmailProcessModel guestUserCalportalDataSheetPDFEmailProcessModel = (GuestUserCalportalDataSheetPDFEmailProcessModel) getBusinessProcessService()
					.createProcess("guestUserCalportalDataSheetPDFEmailProcess" + "_" + System.currentTimeMillis(),
							"guestUserCalportalDataSheetPDFEmailProcess");
			
			guestUserCalportalDataSheetPDFEmailProcessModel.setStore(event.getBaseStore());
			guestUserCalportalDataSheetPDFEmailProcessModel.setSite(event.getSite());
			guestUserCalportalDataSheetPDFEmailProcessModel.setFirstName(event.getGuestUserDetails().getFirstName());
			guestUserCalportalDataSheetPDFEmailProcessModel.setLastName(event.getGuestUserDetails().getLastName());
			guestUserCalportalDataSheetPDFEmailProcessModel.setTitle(event.getGuestUserDetails().getTitle());
			guestUserCalportalDataSheetPDFEmailProcessModel
					.setOrganization(event.getGuestUserDetails().getOrganization());
			guestUserCalportalDataSheetPDFEmailProcessModel
					.setStreetAddress(event.getGuestUserDetails().getStreetAddress());
			guestUserCalportalDataSheetPDFEmailProcessModel.setZipCode(event.getGuestUserDetails().getZipCode());
			guestUserCalportalDataSheetPDFEmailProcessModel.setEmail(event.getGuestUserDetails().getEmail());
			guestUserCalportalDataSheetPDFEmailProcessModel.setAddress(event.getGuestUserDetails().getAddress());
			guestUserCalportalDataSheetPDFEmailProcessModel.setCity(event.getGuestUserDetails().getCity());
			guestUserCalportalDataSheetPDFEmailProcessModel.setCountry(event.getGuestUserDetails().getCountry());
			guestUserCalportalDataSheetPDFEmailProcessModel.setWorkPhone(event.getGuestUserDetails().getWorkPhone());

			ByteArrayInputStream calibrationEmailInput = new ByteArrayInputStream(
					event.getCalibrationEmailOutputSteam().toByteArray());
			DataInputStream calibrationEmailInputStream = new DataInputStream(calibrationEmailInput);

			String filename = "";
		    long millis = System.currentTimeMillis();
		    String datetime = new Date().toGMTString();
		    datetime = datetime.replace(" ", "");
		    datetime = datetime.replace(":", "");
		    String rndchars = "CaliberationData";
		    filename = rndchars + "_" + datetime + "_" + millis;
		    String calibrationFileName = filename + ".pdf";
		   
			final String mimeType = APPLICATION_PDF;

			final EmailAttachmentModel attachment = getEmailService().createEmailAttachment(calibrationEmailInputStream,
					calibrationFileName, mimeType);
			List<EmailAttachmentModel> attachments = new ArrayList<>();
			attachments.add(attachment);
			guestUserCalportalDataSheetPDFEmailProcessModel.setAttachmentss(attachments);

			getBusinessProcessService().startProcess(guestUserCalportalDataSheetPDFEmailProcessModel);
			LOG.info("Starting guestUserCalportalDataSheetPDFEmailProcess");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		}
	}

}
