package com.bhge.core.cronjob;

import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.util.Config;

import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.sap.SAPJcoContainer;
import com.bhge.core.sap.service.BHGESAPOrderAttachmentService;
import com.bhge.core.user.service.BHGEUserProfileService;


public class BHGEOrderAttachmentJob extends AbstractJobPerformable<CronJobModel>
{

	private static final Logger LOG = Logger.getLogger(BHGEOrderAttachmentJob.class);

	private static final String BUY = "BUY";
	private static final String RETURNS = "RETURNS";

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "modelService")
	protected ModelService modelService;


	@Resource(name = "baseSiteService")
	private BaseSiteService siteService;

	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;

	@Resource(name = "sapJcoContainer")
	private SAPJcoContainer sapJcoContainer;

	@Resource(name = "bhgeSAPOrderAttachmentService")
	private BHGESAPOrderAttachmentService bhgeSAPOrderAttachmentService;

	@Override
	public PerformResult perform(final CronJobModel arg0)
	{
		List<OrderModel> orderLst = null;
		orderLst = bhgeB2BOrderService.getSubmittedBuyOrders();
		// RFC Connection for Order attachments

		if (orderLst != null && !orderLst.isEmpty())
		{
			siteService.setCurrentBaseSite(siteService.getBaseSiteForUID(Config.getString("GEEDGE_BASE_SITE", "bhge")), false);
			final JCoConnection connectionObj = sapJcoContainer.getRFCConnection();
			if (connectionObj != null)
			{
				for (final OrderModel orderModel : orderLst)
				{
					final String cartCommerceType = orderModel.getCommerceType() != null ? orderModel.getCommerceType().getCode()
							: BUY;
					LOG.info("$$$$$$$$$$$$$ @@@@@@@ ORDER MODEL COMMERCE TYPE IN ORDER SUBMISSION JOB IS " + cartCommerceType);
					if (!RETURNS.equals(cartCommerceType))
					{
						// Below commented method should be remove.
						//bhgeSAPOrderAttachmentService.submitOrderAttachmentsToSAP(orderModel, connectionObj);
						bhgeSAPOrderAttachmentService.submitOrderAttachmentsToSCPI(orderModel);
					}
				}
			}
		}
		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}

}
