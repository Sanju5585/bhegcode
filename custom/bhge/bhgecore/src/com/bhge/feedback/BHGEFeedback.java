/**
 *
 */
package com.bhge.feedback;

import de.hybris.platform.core.model.media.MediaModel;

import org.springframework.web.multipart.MultipartFile;


/**
 * @author madmahal
 *
 */
public interface BHGEFeedback
{
	public MediaModel uploadFile(final MultipartFile file, final MediaModel mediaModel, final String originalFileName,
			final String contentType);

}
