/**
 *
 */
package com.bhge.core.cronjob;

import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.util.Config;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

import com.bhge.core.mailmessages.services.BHGEEmailService;


public class BHGEInactiveUserJob extends AbstractJobPerformable<CronJobModel>
{


	String FETCH_USERLIST_QUERY = "select {pk} from {geedgecustomer} where ({lastLogin} < format('<InputDate>', 'mm/dd/yyyy') or ({lastLogin} is null and {creationtime} < to_date('<InputDate>', 'mm/dd/yyyy'))) and {active} = 1 and {defaultB2BUnit} <> ({{select {pk} from {b2bunit} where {uid} = 'BHGERegister'}})";
	private static final int DEFAULT_INACTIVE_INTERVAL = 90;
	private static final int DEFAULT_DISABLE_INTERVAL = 120;
	private static final String INACTIVE_MAIL_TEMPLATE = "InactiveUserMailTemplate";

	private static final Logger LOG = Logger.getLogger(BHGEInactiveUserJob.class);

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeB2bEmailService;

	@Resource(name = "modelService")
	private ModelService modelService;


	@Override
	public final PerformResult perform(final CronJobModel arg0)
	{
		final String executeJobFlag = Config.getParameter("bhge.inactive.notification.enable");
		LOG.info("BHGEInactiveUserJob : Start - " + executeJobFlag);
		if (executeJobFlag != null && "true".equals(executeJobFlag.trim()))
		{
			int disabledUserCount = 0;
			int inactiveUserCount = 0;
			final Workbook xlsFile = new HSSFWorkbook();
			final CreationHelper helper = xlsFile.getCreationHelper();
			FileOutputStream fos = null;
			File file = null;
			//Disable Users not logged in for 120 days
			String invervalParam = Config.getParameter("bhge.disable.interval.days");
			int intervalDays = 0;
			if (invervalParam != null && !invervalParam.isEmpty())
			{
				intervalDays = Integer.parseInt(invervalParam);
			}
			else
			{
				intervalDays = DEFAULT_DISABLE_INTERVAL;
			}
			LOG.info("bhge.disable.interval.days - " + invervalParam);

			List<GEEdgeCustomerModel> userList = fetchInactiveUsers(intervalDays);
			if (userList != null && userList.size() > 0)
			{
				disabledUserCount = userList.size();
				LOG.info("Disable UserList - " + disabledUserCount);
				for (int ict = 0; ict < disabledUserCount; ict++)
				{
					final GEEdgeCustomerModel userModel = userList.get(ict);
					Collection<String> customerDeActivationComments = new ArrayList<String>();
					final DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss zzz");
					final Calendar cal = Calendar.getInstance();
					String customerDeActivationComment = "User is deactivated through Inactive cronjob on "
							+ dateFormat.format(cal.getTime()) + " as user has not logged-in for last 120 days";
					customerDeActivationComments.add(customerDeActivationComment);
					LOG.info("Disable User - " + userModel.getUid() + " & Last Login - " + userModel.getLastLogin() + " & Create - "
							+ userModel.getCreationtime() + " & Active - " + userModel.getActive());
					userModel.setActive(Boolean.FALSE);
					userModel.setCustomerActivationComments(customerDeActivationComments);
					modelService.save(userModel);
				}
				createExcelSheetWithUsersList(xlsFile, helper, userList, "Disabled Users");
			}

			//Email Users not logged in for 90 days
			invervalParam = Config.getParameter("bhge.inactive.interval.days");
			intervalDays = 0;
			if (invervalParam != null && !invervalParam.isEmpty())
			{
				intervalDays = Integer.parseInt(invervalParam);
			}
			else
			{
				intervalDays = DEFAULT_INACTIVE_INTERVAL;
			}
			LOG.info("bhge.inactive.interval.days - " + invervalParam);

			userList = fetchInactiveUsers(intervalDays);
			if (userList != null && userList.size() > 0)
			{
				inactiveUserCount = userList.size();
				LOG.info("Inactive UserList - " + inactiveUserCount);

				for (int ict = 0; ict < inactiveUserCount; ict++)
				{
					try
					{
						final GEEdgeCustomerModel userModel = userList.get(ict);
						String userEmail = null;
						if (StringUtils.equals(Config.getParameter("current.env"), "local"))
						{
							userEmail = Config.getParameter("bhge.register.email.failure.technical");
						}
						else
						{
							userEmail = userModel.getEmail();
						}

						LOG.info("Disable User - " + userModel.getUid() + " & Last Login - " + userModel.getLastLogin() + " & Create - "
								+ userModel.getCreationtime() + " & Active - " + userModel.getActive() + " & Disable userEmail - "
								+ userEmail);

						bhgeB2bEmailService.registerMail(INACTIVE_MAIL_TEMPLATE, "DS Store – Inactive user", userEmail, null,
								userModel.getName(), null, Config.getParameter("bhge.register.email.failure.technical"),
								Config.getParameter("bhge.ecommerce.url"), null, null, null,null);
					}
					catch (final Exception exc)
					{
						exc.printStackTrace();

					}
				}
				createExcelSheetWithUsersList(xlsFile, helper, userList, "Notified Users");
			}
			if (inactiveUserCount > 0 || disabledUserCount > 0)
			{
				try
				{
					LOG.info("Sending mail");
					fos = new FileOutputStream("InactiveUsersList.xls");
					xlsFile.write(fos);
					file = new File("InactiveUsersList.xls");

					// Sending Mail with attachment
					bhgeB2bEmailService.sendMailForInactiveUser(file, Config.getParameter("inactiveUserEmailSubject"),
							Config.getParameter("inactiveUserJobTo"), inactiveUserCount, disabledUserCount);

				}
				catch (final RuntimeException re)
				{
					LOG.error("Exception in sendMailForInactiveUser method ", re);
				}
				catch (FileNotFoundException fne)
				{
					LOG.error("FileNotFoundException in sendMailForInactiveUser method ", fne);
				}
				catch (IOException ioe)
				{
					LOG.error("IOException in sendMailForInactiveUser method ", ioe);
				}
				finally
				{
					try
					{
						fos.flush();
						fos.close();
					}
					catch (IOException ioe)
					{
						LOG.error("IOException in sendMailForInactiveUser method while closing the FileOutputStream", ioe);
					}
				}
			}
		}
		LOG.info("BHGEInactiveUserJob : End");
		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}



	/**
	 *
	 */
	private List<GEEdgeCustomerModel> fetchInactiveUsers(final int intervalInput)
	{
		final DateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
		final Calendar calendarVal = Calendar.getInstance();
		final Date dateBase = calendarVal.getTime();
		LOG.info("BaseDate Value = " + dateFormat.format(dateBase));
		//calendarVal.setTime(new Date());
		calendarVal.add(Calendar.DATE, intervalInput * -1);
		final Date datePatam = calendarVal.getTime();
		final String inputDate = dateFormat.format(datePatam);
		final String userListQuery = FETCH_USERLIST_QUERY.replaceAll("<InputDate>", inputDate);

		LOG.info("intervalInput - " + intervalInput + " & NewDate Value = " + inputDate + " & Query - " + userListQuery);

		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(userListQuery);
		final SearchResult<GEEdgeCustomerModel> searchResult = getFlexibleSearchService().search(fQuery);
		return searchResult.getResult();
	}

	private void createExcelSheetWithUsersList(Workbook xlsFile, CreationHelper helper, List<GEEdgeCustomerModel> userList,
			String sheetName)
	{
		try
		{
			if (!CollectionUtils.isEmpty(userList))
			{
				final Sheet sheet = xlsFile.createSheet(sheetName); // Adding a sheet to your workbook
				sheet.setDefaultColumnWidth(16);

				final Row row = sheet.createRow((short) 0); // create a new row in your sheet
				row.createCell(0).setCellValue(
						helper.createRichTextString(Config.getString("type.geedge.users.sheet.header.user.id", "User Id")));
				row.createCell(1)
						.setCellValue(helper.createRichTextString(Config.getString("type.geedge.users.sheet.header.name", "Name")));
				row.createCell(2)
						.setCellValue(helper.createRichTextString(Config.getString("type.geedge.users.sheet.header.email", "EmailId")));
				row.createCell(3).setCellValue(
						helper.createRichTextString(Config.getString("type.geedge.users.sheet.header.creation.time", "Creation time")));
				row.createCell(4).setCellValue(
						helper.createRichTextString(Config.getString("type.geedge.users.sheet.header.last.login", "Last login")));
				row.createCell(5).setCellValue(
						helper.createRichTextString(Config.getString("type.geedge.users.sheet.header.active.status", "Active Status")));

				final SimpleDateFormat format = new SimpleDateFormat(
						Config.getString("type.geedge.users.sheet.date.format", "dd-MMM-yy"));

				int i = 1;
				for (GEEdgeCustomerModel user : userList)
				{
					final Row newRow = sheet.createRow(i);

					newRow.createCell(0).setCellValue(user.getUid());
					newRow.createCell(1).setCellValue(user.getName());
					newRow.createCell(2).setCellValue(user.getEmail());
					newRow.createCell(3).setCellValue(format.format(user.getCreationtime()));
					if (user.getLastLogin() != null)
					{
						newRow.createCell(4).setCellValue(format.format(user.getLastLogin()));
					}
					else
					{
						newRow.createCell(4).setCellValue("NA");
					}
					newRow.createCell(5).setCellValue(user.getActive().toString());
					i++;
				}
			}
		}
		catch (RuntimeException re)
		{
			LOG.error("Exception in createExcelSheetWithUsersList method " + re);

		}
	}

	/**
	 * @return the flexibleSearchService
	 */
	public FlexibleSearchService getFlexibleSearchService()
	{
		return flexibleSearchService;
	}

	/**
	 * @param flexibleSearchService
	 *           the flexibleSearchService to set
	 */
	@Override
	public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
	{
		this.flexibleSearchService = flexibleSearchService;
	}



	/**
	 * @return the bhgeB2bEmailService
	 */
	public BHGEEmailService getBhgeB2bEmailService()
	{
		return bhgeB2bEmailService;
	}



	/**
	 * @param bhgeB2bEmailService
	 *           the bhgeB2bEmailService to set
	 */
	public void setBhgeB2bEmailService(final BHGEEmailService bhgeB2bEmailService)
	{
		this.bhgeB2bEmailService = bhgeB2bEmailService;
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
	@Override
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

}
