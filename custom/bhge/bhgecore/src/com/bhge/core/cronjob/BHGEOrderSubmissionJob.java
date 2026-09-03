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

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.sap.SAPJcoContainer;
import com.bhge.core.sap.service.BHGESAPOrderSubmissionService;
import com.bhge.core.user.service.BHGEUserProfileService;


public class BHGEOrderSubmissionJob extends AbstractJobPerformable<CronJobModel>
{

	private static final Logger LOG = Logger.getLogger(BHGEOrderSubmissionJob.class);

	private static final String BUY = "BUY";
	private static final String RETURNS = "RETURNS";
	private static final String GUESTRFQ = "GUESTRFQ";

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

	@Resource(name = "bhgeSAPOrderSubmissionService")
	private BHGESAPOrderSubmissionService bhgeSAPOrderSubmissionService;

	@Override
	public PerformResult perform(final CronJobModel arg0)
	{
		List<OrderModel> orderLst = null;
		LOG.info("Fetcing the orderlist for submitting them to SAP system using order submission job");
		final String pattern = "yyyy/MM/dd HH:mm:ss";
		final DateFormat df = new SimpleDateFormat(pattern);
		final String fromDate = df.format(new Date(System.currentTimeMillis() - Config.getInt("TimeLimitForOrderSubmit", 60000)));
		orderLst = bhgeB2BOrderService.getUnsubmittedOrders(fromDate);
		// RFC Connection for Order submission
		LOG.debug("Making an SAP Call for order submission");


		if (orderLst != null && !orderLst.isEmpty())
		{
			siteService.setCurrentBaseSite(siteService.getBaseSiteForUID(Config.getString("BHGE_BASE_SITE", "bhge")), false);
			final JCoConnection connectionObj = sapJcoContainer.getRFCConnection();
			if (connectionObj != null)
			{
				LOG.info("Process entered ");
				for (final OrderModel orderModel : orderLst)
				{
					final String cartCommerceType = orderModel.getCommerceType() != null ? orderModel.getCommerceType().getCode()
							: BUY;
					LOG.info("$$$$$$$$$$$$$ @@@@@@@ ORDER MODEL COMMERCE TYPE IN ORDER SUBMISSION JOB IS " + cartCommerceType);
					if (!(cartCommerceType.equalsIgnoreCase(RETURNS) || cartCommerceType.equalsIgnoreCase(GUESTRFQ)))
					{
						bhgeSAPOrderSubmissionService.submitOrderToSAP(orderModel, connectionObj);
						LOG.info("Process entered connection");
					}
				}
			}
		}
		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}
}
