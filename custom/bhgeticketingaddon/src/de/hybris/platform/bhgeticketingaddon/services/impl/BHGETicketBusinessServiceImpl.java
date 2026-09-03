/**
 *
 */
package de.hybris.platform.bhgeticketingaddon.services.impl;

import jakarta.annotation.Resource;

import com.bhge.core.user.daos.BHGEUserProfileDao;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.feedback.BHGEFeedbackService;
import com.bhge.feedback.impl.BHGEFeedbackUpload;

import de.hybris.platform.bhgeticketingaddon.services.BHGETicketBusinessService;
import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.event.EventService;
import de.hybris.platform.servicelayer.exceptions.ModelSavingException;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.ticket.model.CsTicketModel;
import de.hybris.platform.ticketsystem.data.BHGETicketData;
import de.hybris.platform.ticketsystem.data.CsTicketParameter;
import de.hybris.platform.ticketsystem.events.BHGETicketFormEvent;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.MediaUtil;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

/**
 * @author ashvyas
 *
 */
public class BHGETicketBusinessServiceImpl implements BHGETicketBusinessService {
	private static final Logger LOG = Logger.getLogger(BHGETicketBusinessServiceImpl.class);

	@Resource(name = "modelService")
	private ModelService modelService;

	@Resource(name = "eventService")
	private EventService eventService;

	@Resource(name = "bhgeFeedbackService")
	private BHGEFeedbackService bhgeFeedbackService;

	@Resource(name = "mediaService")
	private MediaService mediaService;

	@Resource(name = "mediaCodeGenerator")
	private KeyGenerator mediaCodeGenerator;

	@Resource(name = "catalogVersionService")
	private CatalogVersionService catalogVersionService;

	@Resource(name = "bhgeFeedbackUpload")
	private BHGEFeedbackUpload bhgeFeedbackUpload;

	@Resource
	BHGEUserProfileDao bhgeUserProfileDao;


	/**
	 * @return the mediaService
	 */
	public MediaService getMediaService() {
		return mediaService;
	}

	/**
	 * @param mediaService
	 *            the mediaService to set
	 */
	public void setMediaService(final MediaService mediaService) {
		this.mediaService = mediaService;
	}

	/**
	 * @return the mediaCodeGenerator
	 */
	public KeyGenerator getMediaCodeGenerator() {
		return mediaCodeGenerator;
	}

	/**
	 * @param mediaCodeGenerator
	 *            the mediaCodeGenerator to set
	 */
	public void setMediaCodeGenerator(final KeyGenerator mediaCodeGenerator) {
		this.mediaCodeGenerator = mediaCodeGenerator;
	}

	/**
	 * @return the catalogVersionService
	 */
	public CatalogVersionService getCatalogVersionService() {
		return catalogVersionService;
	}

	/**
	 * @param catalogVersionService
	 *            the catalogVersionService to set
	 */
	public void setCatalogVersionService(final CatalogVersionService catalogVersionService) {
		this.catalogVersionService = catalogVersionService;
	}

	/**
	 * @return the bhgeFeedbackUpload
	 */
	public BHGEFeedbackUpload getBhgeFeedbackUpload() {
		return bhgeFeedbackUpload;
	}

	/**
	 * @param bhgeFeedbackUpload
	 *            the bhgeFeedbackUpload to set
	 */
	public void setBhgeFeedbackUpload(final BHGEFeedbackUpload bhgeFeedbackUpload) {
		this.bhgeFeedbackUpload = bhgeFeedbackUpload;
	}

	/**
	 * @return the bhgeFeedbackService
	 */
	public BHGEFeedbackService getBhgeFeedbackService() {
		return bhgeFeedbackService;
	}

	/**
	 * @param bhgeFeedbackService
	 *            the bhgeFeedbackService to set
	 */
	public void setBhgeFeedbackService(final BHGEFeedbackService bhgeFeedbackService) {
		this.bhgeFeedbackService = bhgeFeedbackService;
	}

	/**
	 * @return the eventService
	 */
	public EventService getEventService() {
		return eventService;
	}

	/**
	 * @param eventService
	 *            the eventService to set
	 */
	public void setEventService(final EventService eventService) {
		this.eventService = eventService;
	}

	/**
	 * @return the modelService
	 */
	public ModelService getModelService() {
		return modelService;
	}

	/**
	 * @param modelService
	 *            the modelService to set
	 */
	public void setModelService(final ModelService modelService) {
		this.modelService = modelService;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.bhge.core.ticket.service.BHGETicketService#bhgeCreateTicket(de.hybris.
	 * platform.ticketsystem.data. CsTicketParameter )
	 */
	@Override
	public void bhgeCreateTicket(final CsTicketParameter csTicketParameter) {
		LOG.info("Start bhgeCreateTicket() method");
		//LOG.info("Ticket emailID: " +csTicketParameter.getEmailId() );
		String[] attachmentIds = csTicketParameter.getEmailId().split("_");
		String attachmentId =null;
		if(attachmentIds != null && attachmentIds.length >= 2){
			attachmentId = attachmentIds[attachmentIds.length - 1];
		}
		final CsTicketModel csTicketModel = new CsTicketModel();
		csTicketModel.setEmailId(attachmentIds[0]);
		csTicketModel.setSubject(csTicketParameter.getSubject());
		csTicketModel.setMessage(csTicketParameter.getMessage());
		csTicketModel.setName(csTicketParameter.getName());
		csTicketModel.setPhoneNo(csTicketParameter.getPhoneNo());
		csTicketModel.setCategory(csTicketParameter.getCategory());
		csTicketModel.setHeadline(csTicketParameter.getSubject());
		csTicketModel.setPriority(csTicketParameter.getPriority());
		csTicketModel.setCustomer(csTicketParameter.getCustomer());
		csTicketModel.setAssignedGroup(csTicketParameter.getAssignedGroup());

		MediaModel mediaModel = null;
		Collection<MediaModel> files = new ArrayList<>();
		if (csTicketParameter.getAttachments() != null && !csTicketParameter.getAttachments().isEmpty() && csTicketParameter.getAttachments().size() != 0 ) {
			for (MultipartFile file :csTicketParameter.getAttachments()) {
				if (file != null && file.getSize() > 0) {
					mediaModel = bhgeFeedbackService.saveFeedbackAttachment(file);
					files.add(mediaModel);
				}
			}
			csTicketModel.setAttachFiles(files);
		}
		if(null!=attachmentId){
			MediaModel media = bhgeUserProfileDao
					.findFeedbackMedia(attachmentId);
			if (media != null) {
				//LOG.info("media code" + media.getCode());
				files.add(media);
			}
			csTicketModel.setAttachFiles(files);
		}

		try {
			getModelService().save(csTicketModel);
		} catch (final ModelSavingException e) {
			LOG.error("Exception while saving CsTicketModel : " + e.getMessage() + " : " + e.getCause() + " : " + e);
			e.printStackTrace();
		}

		try {
			LOG.info("BHGETicketEvent publishing.");

			getEventService().publishEvent(getTicektEvent(csTicketParameter, files, csTicketModel));

			LOG.info("BHGETicketEvent published successfully.");
		} catch (final Exception e) {
			LOG.error("Exception while publishing BHGETicketEvent : " + e.getMessage() + " : " + e.getCause() + " : "
					+ e);
		}
		LOG.info("End bhgeCreateTicket() method");
	}

	protected BHGETicketFormEvent getTicektEvent(final CsTicketParameter csTicketParameter, final Collection<MediaModel> files,
			final CsTicketModel csTicketModel) {
				
		final BHGETicketFormEvent event = new BHGETicketFormEvent();
		final BHGETicketData data = new BHGETicketData();
		final String environment = Config.getString("currentEnv","");
			if(csTicketParameter.getCustomer().getUid().equalsIgnoreCase("anonymous")){
			if (environment.equalsIgnoreCase("prod"))
			{
				data.setSubject(csTicketParameter.getSubject()+ " - " + "Guest");  
			}
			else if(environment.equalsIgnoreCase("staged"))
			{
				data.setSubject(csTicketParameter.getSubject() + " - " + environment +  " Node(" + Config.getParameter("nodeId") + ") " + "Guest");
			}
			else{
				data.setSubject(csTicketParameter.getSubject() + " " + "(" + environment + ")" + "Guest");
			}
		}
		else{
			if (environment.equalsIgnoreCase("prod"))
			{
				data.setSubject(csTicketParameter.getSubject());  
			}
			else if(environment.equalsIgnoreCase("staged"))
			{
				data.setSubject(csTicketParameter.getSubject() + " - " + environment +  " Node(" + Config.getParameter("nodeId") + ") ");
			}
			else{
				data.setSubject(csTicketParameter.getSubject() + " " + "(" + environment + ")");
			}
		}
		String[] attachmentIds = csTicketParameter.getEmailId().split("_");
		data.setEmailId(attachmentIds[0]);
		data.setName(csTicketParameter.getName());
		data.setMessage(csTicketParameter.getMessage());
		data.setPhoneNo(csTicketParameter.getPhoneNo());
		//data.setSubject(csTicketParameter.getSubject());
		data.setMediaBaseUrl(Config.getParameter("bhge.email.resource"));
		data.setAttachments(new ArrayList<>(files));
		data.setTicketId(csTicketModel.getTicketID());
		event.setBhgeTicketData(data);
		return event;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.ticket.service.BHGETicketBusinessService#
	 * getMediaForFileAttachments(java.util.List)
	 */
	@Override
	public MediaModel getMediaForFileAttachment(final MultipartFile multipartFile) {

		String mediaName = null;
		final String contentType = multipartFile.getContentType();
		final MediaModel mediaModel = new MediaModel();
		final MediaFolderModel mediaFolder = mediaService.getFolder(Config.getString("awss3userdata", "customerdata"));
		mediaModel.setFolder(mediaFolder);

		String fileExtension = MediaUtil.getFileExtension(multipartFile.getName());

		if (StringUtils.isBlank(fileExtension)) {
			fileExtension = MediaUtil.getFileExtension(multipartFile.getOriginalFilename());
		}

		mediaName = mediaCodeGenerator.generate().toString();
		mediaModel.setRealFileName(multipartFile.getOriginalFilename());
		mediaModel.setCode(mediaName);

		final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG,
				"Online");
		mediaModel.setCatalogVersion(versions);

		final MediaModel model = bhgeFeedbackUpload.uploadFile(multipartFile, mediaModel,
				multipartFile.getOriginalFilename(), contentType);
		return model;
	}

}
