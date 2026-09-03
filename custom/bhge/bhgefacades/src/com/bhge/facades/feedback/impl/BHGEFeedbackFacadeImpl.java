/**
 *
 */
package com.bhge.facades.feedback.impl;

import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.servicelayer.model.ModelService;

import jakarta.annotation.Resource;

import org.springframework.web.multipart.MultipartFile;

import com.bhge.facades.feedback.BHGEFeedbackFacade;
import com.bhge.feedback.BHGEFeedbackService;


/**
 * @author ransubra
 *
 */
public class BHGEFeedbackFacadeImpl implements BHGEFeedbackFacade
{

	@Resource(name = "bhgeFeedbackService")
	public BHGEFeedbackService bhgeFeedbackService;
	
	@Resource(name = "modelService")
	public ModelService modelService;



	/**
	 * @return the bhgeFeedbackService
	 */
	public BHGEFeedbackService getBhgeFeedbackService()
	{
		return bhgeFeedbackService;
	}



	/**
	 * @param bhgeFeedbackService
	 *           the bhgeFeedbackService to set
	 */
	public void setBhgeFeedbackService(final BHGEFeedbackService bhgeFeedbackService)
	{
		this.bhgeFeedbackService = bhgeFeedbackService;
	}



	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.hybris.ge.edge.facades.feedback.GEEdgeFeedbackFacade#saveFeedbackAttachments(org.springframework.web.multipart
	 * .MultipartFile)
	 */
	@Override
	public MediaModel saveFeedbackAttachment(final MultipartFile feedbackAttachment)
	{
		return bhgeFeedbackService.saveFeedbackAttachment(feedbackAttachment);
	}
	
	
	
	public void removeAttachmentsWs(CartModel cartModel)
	{
		//final CartModel cartModel = bhgeCartService.getSessionCart();
		if(cartModel!=null ) {
			cartModel.setAttachments(null);
			modelService.save(cartModel);
		}
	}

}
