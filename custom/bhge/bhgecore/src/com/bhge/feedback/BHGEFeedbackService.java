/**
 *
 */
package com.bhge.feedback;

import de.hybris.platform.core.model.media.MediaModel;

import org.springframework.web.multipart.MultipartFile;


/**
 * @author ransubra
 *
 */
public interface BHGEFeedbackService
{

	public MediaModel saveFeedbackAttachment(MultipartFile feedbackAttachment);

}
