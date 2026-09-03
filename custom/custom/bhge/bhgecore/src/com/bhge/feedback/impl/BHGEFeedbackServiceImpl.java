/**
 *
 */
package com.bhge.feedback.impl;

import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.MediaUtil;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.feedback.BHGEFeedbackService;


/**
 * @author ransubra
 *
 */
public class BHGEFeedbackServiceImpl implements BHGEFeedbackService
{

	@Resource(name = "mediaService")
	private MediaService mediaService;

	@Resource(name = "mediaCodeGenerator")
	private KeyGenerator mediaCodeGenerator;

	@Resource(name = "catalogVersionService")
	private CatalogVersionService catalogVersionService;

	@Resource(name = "modelService")
	private ModelService modelService;

	@Resource(name = "bhgeFeedbackUpload")
	private BHGEFeedbackUpload bhgeFeedbackUpload;



	/**
	 * @return the mediaService
	 */
	public MediaService getMediaService()
	{
		return mediaService;
	}



	/**
	 * @param mediaService
	 *           the mediaService to set
	 */
	public void setMediaService(final MediaService mediaService)
	{
		this.mediaService = mediaService;
	}



	/**
	 * @return the mediaCodeGenerator
	 */
	public KeyGenerator getMediaCodeGenerator()
	{
		return mediaCodeGenerator;
	}



	/**
	 * @param mediaCodeGenerator
	 *           the mediaCodeGenerator to set
	 */
	public void setMediaCodeGenerator(final KeyGenerator mediaCodeGenerator)
	{
		this.mediaCodeGenerator = mediaCodeGenerator;
	}



	/**
	 * @return the catalogVersionService
	 */
	public CatalogVersionService getCatalogVersionService()
	{
		return catalogVersionService;
	}



	/**
	 * @param catalogVersionService
	 *           the catalogVersionService to set
	 */
	public void setCatalogVersionService(final CatalogVersionService catalogVersionService)
	{
		this.catalogVersionService = catalogVersionService;
	}



	/**
	 * @return the modelService
	 */
	public ModelService getModelService()
	{
		return modelService;
	}



	/**
	 * @param modelService
	 *           the modelService to set
	 */
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}



	/**
	 * @return the bhgeFeedbackUpload
	 */
	public BHGEFeedbackUpload getBhgeFeedbackUpload()
	{
		return bhgeFeedbackUpload;
	}



	/**
	 * @param bhgeFeedbackUpload
	 *           the bhgeFeedbackUpload to set
	 */
	public void setBhgeFeedbackUpload(final BHGEFeedbackUpload bhgeFeedbackUpload)
	{
		this.bhgeFeedbackUpload = bhgeFeedbackUpload;
	}



	/*
	 * (non-Javadoc)
	 *
	 * @see com.hybris.ge.edge.feedback.GEEdgeFeedbackService#saveFeedbackAttachments(org.springframework.web.multipart.
	 * MultipartFile)
	 */
	@Override
	public MediaModel saveFeedbackAttachment(final MultipartFile feedbackAttachment)
	{
		// YTODO Auto-generated method stub

		String mediaName = null;
		final String contentType = feedbackAttachment.getContentType();
		final MediaModel mediaModel = new MediaModel();
		final MediaFolderModel mediaFolder = mediaService.getFolder(Config.getString("awss3userdata", "customerdata"));
		mediaModel.setFolder(mediaFolder);

		String fileExtension = MediaUtil.getFileExtension(feedbackAttachment.getName());
		if (StringUtils.isBlank(fileExtension))
		{
			fileExtension = MediaUtil.getFileExtension(feedbackAttachment.getOriginalFilename());
		}
		mediaName = mediaCodeGenerator.generate().toString();
		mediaModel.setRealFileName(feedbackAttachment.getOriginalFilename());
		mediaModel.setCode(mediaName);
		// POC mandates catalog version for media.
		final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG, "Online");
		mediaModel.setCatalogVersion(versions);
		modelService.save(mediaModel);
		final MediaModel feedbackAttachmentFile = bhgeFeedbackUpload.uploadFile(feedbackAttachment, mediaModel,
				feedbackAttachment.getOriginalFilename(), contentType);
		return feedbackAttachmentFile;
	}

}
