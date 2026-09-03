package com.bhge.core.mailmessages.services.impl;

import java.io.InputStream;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.mailmessages.services.BHGEHaveQuestionService;
import com.bhge.core.model.BHGEHaveAQuestionProcessModel;

import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.store.services.BaseStoreService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.MediaUtil;


public class BHGEHaveQuestionServiceImpl extends DefaultBHGEEmailService implements BHGEHaveQuestionService {


	private static final Logger LOG = Logger.getLogger(BHGEHaveQuestionServiceImpl.class);
	
	@Resource(name = "mediaService")
	private MediaService mediaService; 
	
	@Resource(name = "mediaCodeGenerator")
	private KeyGenerator mediaCodeGenerator;
	
	@Resource(name = "catalogVersionService")
	private CatalogVersionService catalogVersionService; 
	
	@Resource(name = "modelService")
	private ModelService modelService;
	
	@Resource(name="businessProcessService")
	private BusinessProcessService businessProcessService;

	@Resource
	private BaseStoreService baseStoreService;

	@Resource
	private BaseSiteService baseSiteService;

	public void sendEmailForHaveAQue(final String businessLine, final String customerQuery, final String productCode,
			final String customerId, final MultipartFile attachmentFile) {
		LOG.debug("in service for Have A Que email");
		try {
			final BHGEHaveAQuestionProcessModel bhgeHaveAQuestionProcessModel = (BHGEHaveAQuestionProcessModel)getBusinessProcessService()
					.createProcess("generateHaveAQueEmailProcess" + "-"
									+ System.currentTimeMillis(),"generateHaveAQueEmailProcess");
			
			if(attachmentFile != null && attachmentFile.getSize() > 0) {
				LOG.debug("Inside BHGEHaveQuestionServiceImpl -- file debug is grater than 0");
				final MediaModel mediaModel = createMediaModel(attachmentFile);
				bhgeHaveAQuestionProcessModel.setHaveAQuestionAttachmentFile(mediaModel);
			}
			
			bhgeHaveAQuestionProcessModel.setBusinessLine(businessLine);
			bhgeHaveAQuestionProcessModel.setCustomerQuery(customerQuery);
			bhgeHaveAQuestionProcessModel.setProductCode(productCode);
			bhgeHaveAQuestionProcessModel.setCustomerId(customerId);
			bhgeHaveAQuestionProcessModel.setSite(baseSiteService.getCurrentBaseSite());
			bhgeHaveAQuestionProcessModel.setStore(baseStoreService.getCurrentBaseStore());
			modelService.save(bhgeHaveAQuestionProcessModel);
			getBusinessProcessService().startProcess(bhgeHaveAQuestionProcessModel);

		} catch (final Exception e) {
			LOG.error("Error during initiating have a question business process ", e);
		}
	}
	
	private MediaModel createMediaModel(final MultipartFile attachmentFile) {
		
		final MediaModel mediaModel = modelService.create(MediaModel.class);
		try {
			
			final String contentType = attachmentFile.getContentType();
			final MediaFolderModel mediaFolder = mediaService.getFolder(Config.getString("awss3userdata", "customerdata"));
			mediaModel.setFolder(mediaFolder);

			String fileExtension = MediaUtil.getFileExtension(attachmentFile.getName());
			if (StringUtils.isBlank(fileExtension))
			{
				fileExtension = MediaUtil.getFileExtension(attachmentFile.getOriginalFilename());
			}
			final String mediaCode = mediaCodeGenerator.generate().toString();
			mediaModel.setRealFileName(attachmentFile.getOriginalFilename());
			mediaModel.setCode(mediaCode);
			final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG, "Online");
			mediaModel.setCatalogVersion(versions);
			modelService.save(mediaModel);
			
			final InputStream inputStream = attachmentFile.getInputStream();
			mediaService.setStreamForMedia(mediaModel, inputStream, attachmentFile.getOriginalFilename(), contentType);
			
		} catch (Exception ex) {
			
			LOG.error("Error during creating Media from mutipart file ", ex);
			
		}
		LOG.debug("Inside BHGEHaveQuestionServiceImpl -- media has been created successfully");
		return mediaModel;
	}
	
	protected BusinessProcessService getBusinessProcessService() {
		return businessProcessService;
	}


	public void setBusinessProcessService(
			final BusinessProcessService businessProcessService) {
		this.businessProcessService = businessProcessService;
	}


	
}