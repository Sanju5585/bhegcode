/**
 *
 */
package com.bhge.facades.feedback;

import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.CartModel;

import org.springframework.web.multipart.MultipartFile;


/**
 * @author ransubra
 *
 */
public interface BHGEFeedbackFacade
{

	public MediaModel saveFeedbackAttachment(MultipartFile feedbackAttachment);
	
	public void removeAttachmentsWs(CartModel cartModel);

}
