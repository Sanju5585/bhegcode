/**
 *
 */
package com.bhge.feedback.impl;

import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.media.MediaService;

import java.io.InputStream;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.web.multipart.MultipartFile;

import com.bhge.feedback.BHGEFeedback;


/**
 * @author madmahal
 *
 */
public class BHGEFeedbackUpload implements BHGEFeedback
{
	private final static Logger LOG = Logger.getLogger(BHGEFeedbackUpload.class);

	@Resource(name = "mediaService")
	private MediaService mediaService;



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



	/*
	 * (non-Javadoc)
	 * 
	 * @see com.hybris.ge.edge.feedback.GEEdgeFeedback#uploadFile(org.springframework.web.multipart.MultipartFile,
	 * de.hybris.platform.core.model.media.MediaModel, java.lang.String, java.lang.String)
	 */
	@Override
	public MediaModel uploadFile(final MultipartFile file, final MediaModel mediaModel, final String originalFileName,
			final String contentType)
	{
		try
		{
			final InputStream inputStream = file.getInputStream();
			mediaService.setStreamForMedia(mediaModel, inputStream, originalFileName, contentType);
		}
		catch (final Exception e)
		{
			LOG.error("Exception while uploading media" + e);
		}
		return mediaModel;
	}


}
