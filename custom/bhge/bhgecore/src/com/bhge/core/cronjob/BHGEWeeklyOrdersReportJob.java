/**
 *
 */
package com.bhge.core.cronjob;

import com.bhge.core.model.WeeklyOrderCronJobModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.core.GenericSearchConstants.LOG;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;

import jakarta.annotation.Resource;

import de.hybris.platform.servicelayer.model.ModelService;
import org.apache.log4j.Logger;

import com.bhge.core.order.service.BHGEB2BOrderService;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;


/**
 * @author 1714555
 *
 */
public class BHGEWeeklyOrdersReportJob extends AbstractJobPerformable<WeeklyOrderCronJobModel>
{

	private static final Logger LOG = Logger.getLogger(BHGEWeeklyOrdersReportJob.class);

	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;

	@Resource(name = "modelService")
	private ModelService modelService;


	@Override
	public PerformResult perform(final WeeklyOrderCronJobModel weeklyOrderCronJobModel) {
		try {

			// Setting Default dates
			Long defaultDateRange = 7L;
			Long zeroValue = 0L;
			// Getting the custom date range value from cronjob model
			Long customDaysRange = weeklyOrderCronJobModel.getDaysRange();

			Date fromDate = null;
			Date toDate = null;

			if(null != customDaysRange && ((long) customDaysRange > (long) zeroValue)){
				LOG.info("BHGEWeeklyOrdersReportJob : Custome Date Range is : " + customDaysRange);
				fromDate = new Date(System.currentTimeMillis() - customDaysRange * 24 * 3600 * 1000);
				toDate = Calendar.getInstance().getTime();
			}
			else if (null != weeklyOrderCronJobModel.getFromDate() && null != weeklyOrderCronJobModel.getToDate()) {
				fromDate = weeklyOrderCronJobModel.getFromDate();
				toDate = weeklyOrderCronJobModel.getToDate();
			}
			else {
				fromDate = new Date(System.currentTimeMillis() - defaultDateRange * 24 * 3600 * 1000);
				toDate = Calendar.getInstance().getTime();
			}

			// Converting to String
			String pattern = "yyyy-MM-dd HH:mm:ss";
			DateFormat df = new SimpleDateFormat(pattern);
			String from = df.format(fromDate);
			String to = df.format(toDate);

			LOG.info("BHGEWeeklyOrdersReportJob : From Date : " + from);
			LOG.info("BHGEWeeklyOrdersReportJob : To Date : " + to);

			boolean flag = false;
			try {
				// Fetching Weekly Orders Report data
				LOG.info("BHGEWeeklyOrdersReportJob : Fetching Weekly Orders Report data");
				flag = bhgeB2BOrderService.fetchAndSendWeeklyOrders(from, to);
			}catch (RuntimeException re){
				LOG.error("Error in BHGEWeeklyOrdersReportJob --- perform method, while calling fetchAndSendWeeklyOrders method");
			}

			// Removing "From" and "To" Date form WeeklyOrderCronJob
			removeCustomDatesFromCronjob(weeklyOrderCronJobModel);


			if (!flag) {
				LOG.error("Error in BHGEWeeklyOrdersReportJob");
				return new PerformResult(CronJobResult.FAILURE, CronJobStatus.ABORTED);
			} else {
				LOG.info("BHGEWeeklyOrdersReportJob : Mail sent successfully");
				return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
			}

		}catch(RuntimeException re){
			LOG.error("Error in BHGEWeeklyOrdersReportJob Method level");
			return new PerformResult(CronJobResult.FAILURE, CronJobStatus.ABORTED);
		}
	}

	private void removeCustomDatesFromCronjob(WeeklyOrderCronJobModel weeklyOrderCronJobModel){
		try {
			// Removing "From" and "To" Date form WeeklyOrderCronJob
			weeklyOrderCronJobModel.setFromDate(null);
			weeklyOrderCronJobModel.setToDate(null);

			modelService.save(weeklyOrderCronJobModel);
			modelService.refresh(weeklyOrderCronJobModel);
			LOG.info("Removed 'From' and 'To' Date from WeeklyOrderCronJob");
		}catch (RuntimeException re){
			LOG.error("Error in removing Custom Dates From WeeklyOrder Cronjob. Please remove the fromDate and toDate manually from Backoffice");
		}
	}
}

