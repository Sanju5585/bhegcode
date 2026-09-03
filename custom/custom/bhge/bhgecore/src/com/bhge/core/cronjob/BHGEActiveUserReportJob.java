
package com.bhge.core.cronjob;

import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
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
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

import com.bhge.core.mailmessages.services.BHGEEmailService;



public class BHGEActiveUserReportJob extends AbstractJobPerformable<CronJobModel>
{

	private static final String FETCH_USERLIST_QUERY = "select {C.pk} FROM {GEEDGECUSTOMER AS C JOIN PrincipalGroupRelation AS PGR ON {PGR.SOURCE}={C.PK} JOIN PRINCIPALGROUP AS PG ON {PGR.TARGET}={PG.PK}} where {C.active}=1";
	private static final int DEFAULT_INACTIVE_INTERVAL = 90;
	
	private static final Logger LOG = Logger.getLogger(BHGEActiveUserReportJob.class);

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	@Resource(name = "modelService")
	private ModelService modelService;

	@Resource(name = "rendererService")
	private RendererService rendererService;



	@Override
	public PerformResult perform(final CronJobModel arg0)
	{
		FileOutputStream fos = null;
		try
		{
			final List<GEEdgeCustomerModel> userList = fetchActiveUsers();
			if (userList != null && userList.size() > 0)
			{
				LOG.info("Active Users Report - " + userList.size());

				// Sending Inactive Users Report
				final Workbook xlsFile = new HSSFWorkbook(); // create a workbook
				final CreationHelper helper = xlsFile.getCreationHelper();
				final Sheet sheet = xlsFile.createSheet("Active_users"); // add a sheet to your workbook
				sheet.setDefaultColumnWidth(16);

				// add header to excel
				final Row row = sheet.createRow((short) 0); // create a new row in your sheet
				row.createCell(0).setCellValue(
						helper.createRichTextString(Config.getString("type.bhge.active.users.sheet.header.user.ssoid", "SSO ID")));
				row.createCell(1).setCellValue(
						helper.createRichTextString(Config.getString("type.bhge.active.users.sheet.header.user.name", "Name")));
				row.createCell(2).setCellValue(
						helper.createRichTextString(Config.getString("type.bhge.active.users.sheet.header.user.email", "Email")));
				row.createCell(3).setCellValue(helper.createRichTextString(
						Config.getString("type.bhge.active.users.sheet.header.user.created.date", "Creation Date")));

				row.createCell(4).setCellValue(helper.createRichTextString(
						Config.getString("type.bhge.active.users.sheet.header.user.lastlogin.date", "Last Login Date")));

				row.createCell(5).setCellValue(helper
						.createRichTextString(Config.getString("type.bhge.active.users.sheet.header.user.groups", "User Groups")));

				row.createCell(6).setCellValue(helper.createRichTextString(
						Config.getString("type.bhge.active.users.sheet.header.default.b2bunit", "Default B2bunit")));

				int i = 1;

				for (final GEEdgeCustomerModel users : userList)
				{

					final Row newRow = sheet.createRow(i);

					newRow.createCell(0).setCellValue(helper.createRichTextString(users.getUid()));
					newRow.createCell(1).setCellValue(helper.createRichTextString(users.getName()));
					newRow.createCell(2).setCellValue(helper.createRichTextString(users.getEmail()));

					try
					{
						final String createDate = users.getCreationtime().toString();

						if (createDate != null)
						{
							newRow.createCell(3).setCellValue(helper.createRichTextString(createDate));
						}
						else
						{
							newRow.createCell(3).setCellValue("");
						}

						final String lstlogin = users.getLastLogin().toString();

						if (lstlogin != null)
						{
							newRow.createCell(4).setCellValue(lstlogin);
						}
						else
						{
							newRow.createCell(4).setCellValue("");
						}

					}
					catch (final NullPointerException ne)
					{
						LOG.error("Getting Last Login or b2bunit as Null or Empty");
					}

					StringBuilder grps = new StringBuilder("");
					final Set<PrincipalGroupModel> groups = new HashSet<PrincipalGroupModel>(users.getAllGroups());
					LOG.info("groups---->" + groups);
					if (groups != null)
					{
						for (final PrincipalGroupModel group : groups)
						{
							if (group != null)
							{
								LOG.info("groups1---" + group.getUid());
								grps = grps.append(group.getUid());
								grps.append(",");
							}
						}

					}
					if (grps != null)
					{
						newRow.createCell(5).setCellValue(grps.toString());
					}
					else
					{
						newRow.createCell(5).setCellValue("");
					}

					try
					{
						final PrincipalGroupModel grp = users.getDefaultB2BUnit();

						newRow.createCell(6).setCellValue(grp.getUid().toString());
					}
					catch (final Exception e)
					{
						LOG.info("default");
					}
					i++;
				}

				fos = new FileOutputStream("ActiveUsersReport.xls");
				xlsFile.write(fos);
				final File activeUsersExcel = new File("ActiveUsersReport.xls");
				final String activeUsersReportEmailTemplate = "bhgeActiveUsersEmailTemplate";
				final String subject = Config.getString("type.bhge.active.users.subject", "Active Users Report notification");

				final String to = Config.getString("Active_Users_Report", null);

				if (to == null || to.length() == 0)
				{
					return new PerformResult(CronJobResult.FAILURE, CronJobStatus.FINISHED);
				}

				final RendererTemplateModel templateModel = rendererService
						.getRendererTemplateForCode(activeUsersReportEmailTemplate);

				bhgeEmailService.activeUsersReportEmail(templateModel, subject, to, activeUsersExcel);
			}
			return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
			/* } */
		}
		catch (final Exception e)
		{
			LOG.error("Error in Executing Cronjob BHGEActiveUserReportJob", e);
		}
		finally
		{
			if (fos != null)
			{
				try
				{
					fos.close();
				}
				catch (final IOException e)
				{
					LOG.error("IOException occured in BHGEInactiveUserReportJob" + e);
				}
			}
		}

		LOG.info("BHGEActiveUserReportJob : End");
		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}

	private List<GEEdgeCustomerModel> fetchActiveUsers()
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_USERLIST_QUERY);
		final SearchResult<GEEdgeCustomerModel> searchResult = getFlexibleSearchService().search(fQuery);
		return searchResult.getResult();
	}

	public FlexibleSearchService getFlexibleSearchService()
	{
		return flexibleSearchService;
	}

	@Override
	public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
	{
		this.flexibleSearchService = flexibleSearchService;
	}

	public BHGEEmailService getBhgeEmailService()
	{
		return bhgeEmailService;
	}

	public void setBhgeEmailService(final BHGEEmailService bhgeEmailService)
	{
		this.bhgeEmailService = bhgeEmailService;
	}

	public ModelService getModelService()
	{
		return modelService;
	}

	@Override
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

}
