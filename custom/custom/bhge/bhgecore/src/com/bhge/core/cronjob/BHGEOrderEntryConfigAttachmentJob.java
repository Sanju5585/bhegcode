package com.bhge.core.cronjob;

import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.log4j.Logger;

import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.sap.service.BHGESAPOrderAttachmentService;

import de.hybris.platform.core.model.order.OrderEntryModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;


public class BHGEOrderEntryConfigAttachmentJob extends AbstractJobPerformable<CronJobModel> {

	private static final Logger LOG = Logger.getLogger(BHGEOrderEntryConfigAttachmentJob.class);

	private static final String BUY = "BUY";
	
	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;

	@Resource(name = "bhgeSAPOrderAttachmentService")
	private BHGESAPOrderAttachmentService bhgeSAPOrderAttachmentService;

	@Override
	public PerformResult perform(final CronJobModel cronJob) {
		
		LOG.info("BHGEOrderEntryConfigAttachmentJob, perform");
		try {
			
			final List<OrderEntryModel> orderEntryList = bhgeB2BOrderService.getConfigAttachmentEntries();
			
			if (CollectionUtils.isNotEmpty(orderEntryList)) {
				LOG.info("BHGEOrderEntryConfigAttachmentJob, perform, size of order entry " + orderEntryList.size());
				
				for (final OrderEntryModel orderEntryModel : orderEntryList) {
					OrderModel orderModel = orderEntryModel.getOrder();
					final String cartCommerceType = orderModel.getCommerceType() != null ? orderModel.getCommerceType().getCode()
							: BUY;
					LOG.info("BHGEOrderEntryConfigAttachmentJob, perform, Commerce type is " + cartCommerceType + " in order " + orderModel.getCode());
					if (BUY.equals(cartCommerceType) && orderEntryModel.getConfigAttachmentUploaded() != null
							&& !orderEntryModel.getConfigAttachmentUploaded() 
							&& orderEntryModel.getConfigurationAttachment() != null) {

						bhgeSAPOrderAttachmentService.submitConfigAttachmentsToSCPI(orderEntryModel);
					}
				}
			}
			return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
		}
		catch (final Exception ex) {
            LOG.error("An exception has occured in BHGEOrderEntryConfigAttachmentJob : " + ex);
            return new PerformResult(CronJobResult.ERROR, CronJobStatus.ABORTED);
        }
	}

}
