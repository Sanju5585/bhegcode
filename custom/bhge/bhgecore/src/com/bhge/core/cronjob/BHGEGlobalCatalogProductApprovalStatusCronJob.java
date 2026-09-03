package com.bhge.core.cronjob;

import com.bhge.core.model.BHGEProductApprovalStatusCronJobModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.catalog.enums.ArticleApprovalStatus;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.europe1.model.PriceRowModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.Config;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.product.BHGEMaterialPushData;
import com.bhge.product.service.BHGEProductService;


public class BHGEGlobalCatalogProductApprovalStatusCronJob extends AbstractJobPerformable<BHGEProductApprovalStatusCronJobModel>
{

	@Resource(name = "modelService")
	ModelService modelService;

	@Resource(name = "productService")
	private BHGEProductService productService;

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	@Resource(name = "rendererService")
	private RendererService rendererService;

	private static final Logger LOG = Logger.getLogger(BHGEProductApprovalStatusCronJob.class);

	@Override
	public PerformResult perform(final BHGEProductApprovalStatusCronJobModel bHGEProductApprovalStatusCronJobModel)
	{

		FileOutputStream fos = null;
		try
		{
			LOG.info("BHGEGlobalCatalogProductApprovalStatusCronJob job started");
			// Setting default values
			Boolean materialPushFlag = Boolean.TRUE;
			Boolean customerPushFlag = Boolean.TRUE;
			Boolean addressPushFlag = Boolean.TRUE;
			Boolean pricePushFlag = Boolean.TRUE;
			Date onDate = new Date(System.currentTimeMillis() - 24 * 60 * 60 * 1000); // Setting Yesterday's date as default value
			String lastRunTimeValue = null;
			Integer materialPushCount = 0;

			// Getting the flag value from cronJob
			try
			{
				materialPushFlag = bHGEProductApprovalStatusCronJobModel.getMaterialPushFlag();
				customerPushFlag = bHGEProductApprovalStatusCronJobModel.getCustomerPushFlag();
				addressPushFlag = bHGEProductApprovalStatusCronJobModel.getAddressPushFlag();
				pricePushFlag = bHGEProductApprovalStatusCronJobModel.getPricePushFlag();
				if (null != bHGEProductApprovalStatusCronJobModel.getLastRunTime())
				{
					onDate = bHGEProductApprovalStatusCronJobModel.getLastRunTime();
				}
				LOG.info("BHGEGlobalCatalogProductApprovalStatusCronJob Last run time : " + onDate);
			}
			catch (RuntimeException re)
			{
				LOG.error(
						"Exception in BHGEGlobalCatalogProductApprovalStatusCronJob --- perform -- while getting the initial values.",
						re);
			}

			final String materialPushEmailTemplate = "bhgeMaterialPushEmailTemplate";
			final String subject = Config.getString("type.bhge.material.push.subject", "SAP master data change notification");
			final String to = Config.getString("MATERIAL_PUSH_TO_ADDRESS", null);
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(materialPushEmailTemplate);

			// Sending Material Push Email Notification
			final Workbook xlsFile = new HSSFWorkbook(); // create a workbook
			final CreationHelper helper = xlsFile.getCreationHelper();

			// Material Push data
			List<BHGEMaterialPushData> materialPushDataList = null;
			File materialPushExcel = null;

			LOG.info("materialPushFlag value is : " + materialPushFlag);
			try
			{
				if (BooleanUtils.isTrue(materialPushFlag))
				{ // Executes only if materialPushFlag value is TRUE
					final List<GEEdgeProductModel> geEdgeProductsforModifiedStatus = productService.getProductWithUnApprovedStatusforGlobalCatalog();
					final List<GEEdgeProductModel> geEdgeProductsforModifiedSalesArea = productService.getProductsforUpdatedSalesArea(onDate);
					List<GEEdgeProductModel> geEdgeProducts=new ArrayList<GEEdgeProductModel>();
					geEdgeProducts.addAll(geEdgeProductsforModifiedStatus);
					geEdgeProducts.addAll(geEdgeProductsforModifiedSalesArea);

					List<BHGESalesAreaDataModel> salesAreas = new ArrayList<BHGESalesAreaDataModel>();
					if (null != geEdgeProducts && CollectionUtils.isNotEmpty(geEdgeProducts))
					{
						for (final GEEdgeProductModel geEdgeProduct : geEdgeProducts)
						{
							geEdgeProduct.setApprovalStatus(ArticleApprovalStatus.APPROVED);
							modelService.save(geEdgeProduct);
						}

						materialPushCount = geEdgeProducts.size(); // Setting the count of unique products
						LOG.info("BHGEGlobalCatalogProductApprovalStatusCronJob MaterialPushCount : " + materialPushCount);
						final Sheet sheet = xlsFile.createSheet("material_push"); // add a sheet to your workbook
						sheet.setDefaultColumnWidth(16);

						materialPushDataList = new ArrayList<BHGEMaterialPushData>();
						// add header to excel
						final Row row = sheet.createRow((short) 0); // create a new row in your sheet
						row.createCell(0).setCellValue(helper.createRichTextString(
								Config.getString("type.geedge.material.push.sheet.header.part.number", "Part Number")));
						row.createCell(1).setCellValue(
								helper.createRichTextString(Config.getString("type.geedge.material.push.sheet.header.name", "Name")));
						row.createCell(2).setCellValue(helper.createRichTextString(
								Config.getString("type.geedge.material.push.sheet.header.product.type", "Product Type")));
						row.createCell(3).setCellValue(helper.createRichTextString(
								Config.getString("type.geedge.material.push.sheet.header.description", "Description")));
						row.createCell(4).setCellValue(helper
								.createRichTextString(Config.getString("type.geedge.material.push.sheet.header.catalog", "Catalog")));
						row.createCell(5).setCellValue(helper
								.createRichTextString(Config.getString("type.geedge.material.push.sheet.header.catalog", "Sales Area")));
						row.createCell(6).setCellValue(helper.createRichTextString(
								Config.getString("type.geedge.material.push.sheet.header.change.type", "Time Created")));
						row.createCell(7).setCellValue(helper.createRichTextString(
								Config.getString("type.geedge.material.push.sheet.header.change.date", "Time Modified")));
						row.createCell(8).setCellValue(helper.createRichTextString(
								Config.getString("type.geedge.material.push.sheet.header.change.status", "Hybris Status")));
						row.createCell(9).setCellValue(helper.createRichTextString(
								Config.getString("type.geedge.material.push.sheet.header.change.matstatus", "Material Status")));
						row.createCell(10).setCellValue(helper.createRichTextString(
								Config.getString("type.geedge.material.push.sheet.header.change.lead.time", "Lead Time")));


						int i = 1;
						for (final GEEdgeProductModel productModel : geEdgeProducts)
						{
							// Getting the sales area data configured to product
                            salesAreas = (List<BHGESalesAreaDataModel>) productModel.getSalesAreaData();

                            // Commenting the below code because the sales Area details has to be shown irrespective of its modification.
							/*if (null != bHGEProductApprovalStatusCronJobModel.getLastRunTime())
							{
								SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
								String lastRunTime = formatter.format(bHGEProductApprovalStatusCronJobModel.getLastRunTime());
								salesAreas = productService.getSalesAreaData(productModel.getCode(), lastRunTime);
							}
							else
							{
								salesAreas = (List<BHGESalesAreaDataModel>) productModel.getSalesAreaData();
							}*/

							if (!salesAreas.isEmpty())
							{
								for (BHGESalesAreaDataModel salesArea : salesAreas)
								{
									final Row newRow = sheet.createRow(i);
									final BHGEMaterialPushData materialPushData = new BHGEMaterialPushData();
									materialPushData.setPartNumber(productModel.getCode());
									newRow.createCell(0).setCellValue(helper.createRichTextString(productModel.getCode()));

									materialPushData.setName(productModel.getName());
									newRow.createCell(1).setCellValue(helper.createRichTextString(productModel.getName()));

									if (productModel.getProductType() != null)
									{
										materialPushData.setProductType(productModel.getProductType().getCode());
										newRow.createCell(2)
												.setCellValue(helper.createRichTextString(productModel.getProductType().getCode()));
									}

									materialPushData.setDescription(productModel.getDescription());
									newRow.createCell(3).setCellValue(helper.createRichTextString(productModel.getDescription()));
									//String changeType = Config.getString("type.geedge.material.push.sheet.new.part", "New part");
									final SimpleDateFormat format = new SimpleDateFormat(
											Config.getString("type.geedge.material.push.sheet.date.format", "dd-MMM-yy"));
									String changeDateString = format.format(productModel.getCreationtime());

									// Get the date today using Calendar object
									final SimpleDateFormat formatForChangeType = new SimpleDateFormat("yyyy-MM-dd");
									final Date todayDate = Calendar.getInstance().getTime();
									final String creationDate = formatForChangeType.format(productModel.getCreationtime());
									final String currentDate = formatForChangeType.format(todayDate);

									if (productModel.getModifiedtime() != null && !creationDate.equals(currentDate))
									{
										//changeType = Config.getString("type.geedge.material.push.sheet.updated.part", "Updated part");
										changeDateString = format.format(productModel.getModifiedtime());
									}

									/*
									 * materialPushData.setChangeType(changeType);
									 * newRow.createCell(2).setCellValue(helper.createRichTextString(changeType));
									 */

									/*
									 * materialPushData.setCatalogId(productModel.getCatalogVersion().getCatalog().getId());
									 * newRow.createCell(4).setCellValue(
									 * helper.createRichTextString(productModel.getCatalogVersion().getCatalog().getId()));
									 */

									materialPushData.setCatalogId(productModel.getCatalogVersion().getCatalog().getId());
									newRow.createCell(4).setCellValue(
											helper.createRichTextString(productModel.getCatalogVersion().getCatalog().getId()));

									newRow.createCell(5)
											.setCellValue(salesArea.getSalesOrganization() != null ? salesArea.getSalesOrganization() : "");

									materialPushData.setChangeType(format.format(productModel.getCreationtime()));
									newRow.createCell(6)
											.setCellValue(helper.createRichTextString(format.format(productModel.getCreationtime())));

									materialPushData.setChangeDate(changeDateString);
									newRow.createCell(7).setCellValue(helper.createRichTextString(changeDateString));

									materialPushData.setHybrisStatus(
											salesArea.getHybrisStatus() != null ? salesArea.getHybrisStatus().getCode() : "");

									newRow.createCell(8)
											.setCellValue(salesArea.getHybrisStatus() != null ? salesArea.getHybrisStatus().getCode() : "");

									newRow.createCell(9).setCellValue(
											productModel.getMaterialStatus() != null ? productModel.getMaterialStatus().getCode() : "");

									final String leadTime = Config.getString("search.resultgrid.leadTime.notApplicable",
											"Standard lead time not available");
									if (salesArea.getDeliveryTime() == null || salesArea.getDeliveryTime() == 0)
									{
										newRow.createCell(10).setCellValue(helper.createRichTextString(leadTime));
										materialPushData.setLeadTime(null);
									}
									else
									{
										newRow.createCell(10)
												.setCellValue(helper.createRichTextString(salesArea.getDeliveryTime().toString()));
										materialPushData.setLeadTime(salesArea.getDeliveryTime().intValue());
									}

									materialPushDataList.add(materialPushData);
									i++;
								}
							}
							else
							{
								final Row newRow = sheet.createRow(i);
								final BHGEMaterialPushData materialPushData = new BHGEMaterialPushData();
								materialPushData.setPartNumber(productModel.getCode());
								newRow.createCell(0).setCellValue(helper.createRichTextString(productModel.getCode()));

								materialPushData.setName(productModel.getName());
								newRow.createCell(1).setCellValue(helper.createRichTextString(productModel.getName()));

								if (productModel.getProductType() != null)
								{
									materialPushData.setProductType(productModel.getProductType().getCode());
									newRow.createCell(2)
											.setCellValue(helper.createRichTextString(productModel.getProductType().getCode()));
								}

								materialPushData.setDescription(productModel.getDescription());
								newRow.createCell(3).setCellValue(helper.createRichTextString(productModel.getDescription()));
								//String changeType = Config.getString("type.geedge.material.push.sheet.new.part", "New part");
								final SimpleDateFormat format = new SimpleDateFormat(
										Config.getString("type.geedge.material.push.sheet.date.format", "dd-MMM-yy"));
								String changeDateString = format.format(productModel.getCreationtime());

								// Get the date today using Calendar object
								final SimpleDateFormat formatForChangeType = new SimpleDateFormat("yyyy-MM-dd");
								final Date todayDate = Calendar.getInstance().getTime();
								final String creationDate = formatForChangeType.format(productModel.getCreationtime());
								final String currentDate = formatForChangeType.format(todayDate);

								if (productModel.getModifiedtime() != null && !creationDate.equals(currentDate))
								{
									//changeType = Config.getString("type.geedge.material.push.sheet.updated.part", "Updated part");
									changeDateString = format.format(productModel.getModifiedtime());
								}

								/*
								 * materialPushData.setChangeType(changeType);
								 * newRow.createCell(2).setCellValue(helper.createRichTextString(changeType));
								 */

								/*
								 * materialPushData.setCatalogId(productModel.getCatalogVersion().getCatalog().getId());
								 * newRow.createCell(4).setCellValue(
								 * helper.createRichTextString(productModel.getCatalogVersion().getCatalog().getId()));
								 */

								materialPushData.setCatalogId(productModel.getCatalogVersion().getCatalog().getId());
								newRow.createCell(4)
										.setCellValue(helper.createRichTextString(productModel.getCatalogVersion().getCatalog().getId()));

								if (productModel.getSalesAreaData().isEmpty())
								{
									newRow.createCell(5).setCellValue("No Sales Area data");
								}
								else
								{
									newRow.createCell(5).setCellValue("Not Updated");
								}

								materialPushData.setChangeType(format.format(productModel.getCreationtime()));
								newRow.createCell(6)
										.setCellValue(helper.createRichTextString(format.format(productModel.getCreationtime())));

								materialPushData.setChangeDate(changeDateString);
								newRow.createCell(7).setCellValue(helper.createRichTextString(changeDateString));

								materialPushData.setHybrisStatus(null);
								if (productModel.getSalesAreaData().isEmpty())
								{
									newRow.createCell(8).setCellValue("No Sales Area data");

									newRow.createCell(9).setCellValue("No Sales Area data");
								}
								else
								{
									newRow.createCell(8).setCellValue("Not Updated");

									newRow.createCell(9).setCellValue("Not Updated");
								}

								/*
								 * final String leadTime = Config.getString("search.resultgrid.leadTime.notApplicable",
								 * "Standard lead time not available"); if (productModel.getDeliveryTime() == null ||
								 * productModel.getDeliveryTime() == 0) {
								 * newRow.createCell(9).setCellValue(helper.createRichTextString(leadTime));
								 * materialPushData.setLeadTime(null); } else {
								 * newRow.createCell(9).setCellValue(helper.createRichTextString(productModel.getDeliveryTime().
								 * toString())); materialPushData.setLeadTime(productModel.getDeliveryTime().intValue()); }
								 */
								materialPushData.setLeadTime(null);
								if (productModel.getSalesAreaData().isEmpty())
								{
									newRow.createCell(10).setCellValue("No Sales Area data");
								}
								else
								{
									newRow.createCell(10).setCellValue("Not Updated");
								}

								materialPushDataList.add(materialPushData);
								i++;
							}
						}
					}
				}
			}
			catch (RuntimeException re)
			{
				LOG.error(
						"Exception in BHGEProductApprovalStatusCronJob --- perform -- while Creating sheet for Material push Records.",
						re);
			}

			// setting default values for Customer and Address push count
			Integer customerPushCount = 0;
			Integer addressPushCount = 0;
			Integer pricePushCount = 0;

			// Creating sheet for updated Customer Records.
			try
			{
				LOG.info("customerPushFlag value is : " + customerPushFlag);
				if (BooleanUtils.isTrue(customerPushFlag))
				{
					customerPushCount = createUpdatedCustomerSheet(xlsFile, helper, onDate); // Creates the Customer Sheet
					LOG.info("Updated Customer sheet is successfully added to Workbook with Count : " + customerPushCount);
				}
			}
			catch (RuntimeException re)
			{
				LOG.error(
						"Exception in BHGEProductApprovalStatusCronJob --- perform -- while Creating sheet for updated Customer Records.",
						re);
			}

			// Creating sheet for updated Address Records.
			try
			{
				LOG.info("addressPushFlag value is : " + addressPushFlag);
				if (BooleanUtils.isTrue(addressPushFlag))
				{
					addressPushCount = createUpdatedAddressSheet(xlsFile, helper, onDate); // Creates the Address Sheet
					LOG.info("Updated Address sheet is successfully added to Workbook with count : " + addressPushCount);
				}
			}
			catch (RuntimeException re)
			{
				LOG.error(
						"Exception in BHGEProductApprovalStatusCronJob --- perform -- while Creating sheet for updated Address Records.",
						re);
			}

			// Creating sheet for updated Price Records.
			try
			{
				LOG.info("pricePushFlag value is : " + pricePushFlag);
				if (BooleanUtils.isTrue(pricePushFlag))
				{
					pricePushCount = createUpdatedPriceSheet(xlsFile, helper, onDate); // Creates the Address Sheet
					LOG.info("Updated Price sheet is successfully added to Workbook with count : " + pricePushCount);
				}
			}
			catch (RuntimeException re)
			{
				LOG.error(
						"Exception in BHGEProductApprovalStatusCronJob --- perform -- while Creating sheet for updated Price Row Records.",
						re);
			}

			if (xlsFile.getNumberOfSheets() > 0)
			{
				fos = new FileOutputStream("BakerHughesDailyMonitoring.xls");
				xlsFile.write(fos);
				materialPushExcel = new File("BakerHughesDailyMonitoring.xls");
				if (to == null || to.length() == 0)
				{
					return new PerformResult(CronJobResult.FAILURE, CronJobStatus.FINISHED);
				}
			}

			// Email sending functionality
			bhgeEmailService.materialPushEmail(templateModel, subject, to, materialPushExcel, materialPushDataList,
					materialPushCount, customerPushCount, addressPushCount, pricePushCount);

			// Setting the last run time
			bHGEProductApprovalStatusCronJobModel.setLastRunTime(new Date());
			modelService.save(bHGEProductApprovalStatusCronJobModel);
			LOG.info(" BHGEGlobalCatalogProductApprovalStatusCronJob job is finished ");
			return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
		}
		catch (final Exception e)
		{
			LOG.error("Error in Executing Cronjob [BHGEProductApprovalStatusCronJob]", e);
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
					LOG.error("IOException occured in BHGEGlobalCatalogProductApprovalStatusCronJob" + e);
				}
			}
		}
		return new PerformResult(CronJobResult.FAILURE, CronJobStatus.FINISHED);
	}

	private Integer createUpdatedPriceSheet(Workbook xlsFile, CreationHelper helper, Date onDate)
	{
		List<PriceRowModel> priceRowModelList = productService.getUpdatedPriceRecords(onDate); // Get updated PriceRow records
		if (CollectionUtils.isNotEmpty(priceRowModelList))
		{
			LOG.info("Creating sheet for Updated PriceRows");
			final Sheet sheet = xlsFile.createSheet("price_push"); // add a new sheet to your workbook
			populateDataInSheetForUpdatedPriceRows(sheet, helper, priceRowModelList); // Update the records in the sheet
			LOG.info("Total PriceRows update Count : " + priceRowModelList.size());
			return priceRowModelList.size();
		}
		return 0;
	}

	private Integer createUpdatedCustomerSheet(Workbook xlsFile, CreationHelper helper, Date onDate)
	{
		List<B2BUnitModel> b2BUnitModelList = productService.getUpdatedCustomersRecords(onDate); // Get updated B2BUnit records
		if (CollectionUtils.isNotEmpty(b2BUnitModelList))
		{
			LOG.info("Creating sheet for Updated Customers");
			final Sheet sheet = xlsFile.createSheet("customer_push"); // add a new sheet to your workbook
			populateDataInSheetForUpdatedCustomers(sheet, helper, b2BUnitModelList); // Update the records in the sheet
			LOG.info("Total Customers update Count : " + b2BUnitModelList.size());
			return b2BUnitModelList.size();
		}
		return 0;
	}

	private Integer createUpdatedAddressSheet(Workbook xlsFile, CreationHelper helper, Date onDate)
	{
		List<AddressModel> addressModelList = productService.getUpdatedAddressRecords(onDate); // Get updated AddressModel records
		if (CollectionUtils.isNotEmpty(addressModelList))
		{
			LOG.info("Creating sheet for Updated Addresses");
			final Sheet sheet = xlsFile.createSheet("address_push"); // add a new sheet to your workbook
			populateDataInSheetForUpdatedAddresses(sheet, helper, addressModelList); // Update the records in the sheet
			LOG.info("Total Addresses update Count : " + addressModelList.size());
			return addressModelList.size();
		}
		return 0;
	}

	/**
	 * @param customerSheet
	 * @param helper
	 * @param b2BUnitModelList
	 */
	private void populateDataInSheetForUpdatedCustomers(final Sheet customerSheet, final CreationHelper helper,
			final List<B2BUnitModel> b2BUnitModelList)
	{
		try
		{
			LOG.debug("In populateDataInSheetForUpdatedCustomers Method");
			if (CollectionUtils.isNotEmpty(b2BUnitModelList))
			{
				customerSheet.setDefaultColumnWidth(16); // Setting default column width of sheet
				// add header to excel
				final Row row = customerSheet.createRow((short) 0); // create a new row in your sheet

				row.createCell(0).setCellValue(helper.createRichTextString("UID"));
				row.createCell(1).setCellValue(helper.createRichTextString("NAME"));
				row.createCell(2).setCellValue(helper.createRichTextString("ACCOUNT GROUP"));

				row.createCell(3).setCellValue(helper.createRichTextString("COUNTRY CP"));
				row.createCell(4).setCellValue(helper.createRichTextString("CURRENCY"));
				row.createCell(5).setCellValue(helper.createRichTextString("INCOTERMS 1"));
				row.createCell(6).setCellValue(helper.createRichTextString("INCOTERMS 2"));
				row.createCell(7).setCellValue(helper.createRichTextString("PAYMENT TERMS"));
				row.createCell(8).setCellValue(helper.createRichTextString("ECOMMERCE FLAG"));
				row.createCell(9).setCellValue(helper.createRichTextString("GROUPS"));
				row.createCell(10).setCellValue(helper.createRichTextString("CREATED TIME"));
				row.createCell(11).setCellValue(helper.createRichTextString("MODIFIED TIME"));


				int i = 1; // Setting the start value
				for (final B2BUnitModel unit : b2BUnitModelList)
				{
					LOG.debug("In populateDatainSheetForUpdatedCustomers Method uid" + unit.getUid());
					final Row r = customerSheet.createRow(i); // Setting B2BUnitModel UID
					r.createCell(0).setCellValue(unit.getUid()); // Setting B2BUnitModel NAME
					r.createCell(1).setCellValue(unit.getName()); // Setting B2BUnitModel DESCRIPTION
					r.createCell(2).setCellValue(unit.getAccountGroup());
					r.createCell(3).setCellValue(unit.getCountryCP());
					if (null != unit.getCurrency())
					{
						r.createCell(4).setCellValue(unit.getCurrency().getIsocode());
					}
					r.createCell(5).setCellValue(unit.getIncoterms1());
					r.createCell(6).setCellValue(unit.getIncoterms2());
					r.createCell(7).setCellValue(unit.getPaymentTerms());
					r.createCell(8).setCellValue(unit.getEcommerceFlag());

					StringBuilder groups = new StringBuilder();
					for (PrincipalGroupModel principalGroupModel : unit.getGroups())
					{
						if (null != principalGroupModel.getUid())
						{
							groups = groups.append(principalGroupModel.getUid());
							groups = groups.append(",");
						}
					}
					r.createCell(9).setCellValue(groups.toString());

					// Setting Creation Date
					String creationDate = getDateAsString(unit.getCreationtime());
					r.createCell(10).setCellValue(creationDate);

					// Setting Modified Date
					String modifiedDate = getDateAsString(unit.getModifiedtime());
					r.createCell(11).setCellValue(modifiedDate);

					i++; // incrementing the count for next record
				}
			}
		}
		catch (RuntimeException re)
		{
			LOG.error("Exception in populateDataInSheetForUpdatedCustomers", re);
		}
	}

	private String getDateAsString(Date date)
	{
		// Setting Creation Date
		if (null != date)
		{
			return DateFormat.getDateInstance(DateFormat.LONG).format(date);
		}
		return null;
	}

	/**
	 * @param addressSheet
	 * @param helper
	 * @param addressModelList
	 */
	private void populateDataInSheetForUpdatedAddresses(final Sheet addressSheet, final CreationHelper helper,
			final List<AddressModel> addressModelList)
	{
		try
		{
			LOG.debug("In populateDataInSheetForUpdatedAddresses Method");
			if (CollectionUtils.isNotEmpty(addressModelList))
			{
				addressSheet.setDefaultColumnWidth(16); // Setting default column width of sheet
				// add header to excel
				final Row row = addressSheet.createRow((short) 0); // create a new row in your sheet

				row.createCell(0).setCellValue(helper.createRichTextString("PK"));
				row.createCell(1).setCellValue(helper.createRichTextString("SAP CUSTOMER ID"));
				row.createCell(2).setCellValue(helper.createRichTextString("POSTAL CODE"));
				row.createCell(3).setCellValue(helper.createRichTextString("STREET NUMBER"));
				row.createCell(4).setCellValue(helper.createRichTextString("STREET NAME"));
				row.createCell(5).setCellValue(helper.createRichTextString("TOWN"));
				row.createCell(6).setCellValue(helper.createRichTextString("COUNTRY"));
				row.createCell(7).setCellValue(helper.createRichTextString("IS SHIPPINGADDRESS"));
				row.createCell(8).setCellValue(helper.createRichTextString("IS CONTACTADDRESS"));
				row.createCell(9).setCellValue(helper.createRichTextString("IS BILLINGADDRESS"));
				row.createCell(10).setCellValue(helper.createRichTextString("SAP ADDRESS USAGE"));
				row.createCell(11).setCellValue(helper.createRichTextString("CREATION TIME"));
				row.createCell(12).setCellValue(helper.createRichTextString("MODIFIED TIME"));

				int i = 1; // Setting the start value
				for (final AddressModel address : addressModelList)
				{
					LOG.debug("In populateDataInSheetForUpdatedAddresses Method uid" + address.getStreetname());
					final Row r = addressSheet.createRow(i); // Setting B2BUnitModel UID

					r.createCell(0).setCellValue(address.getPk().toString()); // Setting AddressModel PK
					r.createCell(1).setCellValue(address.getSapCustomerID()); // Setting Sap Customer ID
					r.createCell(2).setCellValue(address.getPostalcode()); // Setting Postal code
					r.createCell(3).setCellValue(address.getStreetnumber()); // Setting Street Number
					r.createCell(4).setCellValue(address.getStreetname()); // Setting Street Name
					r.createCell(5).setCellValue(address.getTown()); // Setting Town
					r.createCell(6).setCellValue(address.getCountry().getName()); // Setting Country
					r.createCell(7).setCellValue(address.getShippingAddress()); // Setting Address is Shipping address value
					r.createCell(8).setCellValue(address.getContactAddress()); // Setting Address is Contact address value
					r.createCell(9).setCellValue(address.getBillingAddress()); // Setting Address is Billing address value

					r.createCell(10).setCellValue(address.getSapAddressUsage()); // Setting Sap Address Usage

					// Setting Creation Date
					String creationDate = getDateAsString(address.getCreationtime());
					r.createCell(11).setCellValue(creationDate);
					// Setting Modified Date
					String modifiedDate = getDateAsString(address.getModifiedtime());
					r.createCell(12).setCellValue(modifiedDate);

					i++; // incrementing the count for next record
				}
			}
		}
		catch (RuntimeException re)
		{
			LOG.error("Exception in populateDataInSheetForUpdatedAddresses", re);
		}
	}

	private void populateDataInSheetForUpdatedPriceRows(Sheet priceSheet, CreationHelper helper,
			List<PriceRowModel> priceRowModelList)
	{
		try
		{
			LOG.debug("In populateDataInSheetForUpdatedPriceRows Method");
			if (CollectionUtils.isNotEmpty(priceRowModelList))
			{
				priceSheet.setDefaultColumnWidth(16); // Setting default column width of sheet
				// add header to excel
				final Row row = priceSheet.createRow((short) 0); // create a new row in your sheet

				row.createCell(0).setCellValue(helper.createRichTextString("PK"));
				row.createCell(1).setCellValue(helper.createRichTextString("CATALOG"));
				row.createCell(2).setCellValue(helper.createRichTextString("PRODUCT"));
				row.createCell(3).setCellValue(helper.createRichTextString("PRICE"));
				row.createCell(4).setCellValue(helper.createRichTextString("CURRENCY"));
				row.createCell(5).setCellValue(helper.createRichTextString("UNIT"));
				row.createCell(6).setCellValue(helper.createRichTextString("PRICE CONDITION TYPE"));
				row.createCell(7).setCellValue(helper.createRichTextString("PRICE CRITERIA"));
				row.createCell(8).setCellValue(helper.createRichTextString("SALES AREA PRICE KEY"));
				row.createCell(9).setCellValue(helper.createRichTextString("PRICE CONDITION ID"));
				row.createCell(10).setCellValue(helper.createRichTextString("VALID TO"));
				row.createCell(11).setCellValue(helper.createRichTextString("SOLDTOCUSTOMER"));
				row.createCell(12).setCellValue(helper.createRichTextString("CREATION TIME"));
				row.createCell(13).setCellValue(helper.createRichTextString("MODIFIED TIME"));

				int i = 1; // Setting the start value
				for (final PriceRowModel priceRow : priceRowModelList)
				{
					LOG.debug("In populateDataInSheetForUpdatedAddresses Method pk" + priceRow.getPk().toString());
					final Row r = priceSheet.createRow(i); // Creating new row

					if (null != priceRow.getPk())
					{
						r.createCell(0).setCellValue(priceRow.getPk().toString()); // Setting PriceRowModel PK
					}
					if (null != priceRow.getCatalogVersion())
					{
						r.createCell(1).setCellValue(priceRow.getCatalogVersion().getVersion()); // Setting Catalog
					}
					if (null != priceRow.getProduct())
					{
						r.createCell(2).setCellValue(priceRow.getProduct().getCode()); // Setting Product
					}
					if (null != priceRow.getPrice())
					{
						r.createCell(3).setCellValue(priceRow.getPrice()); // Setting Price
					}
					if (null != priceRow.getCurrency())
					{
						r.createCell(4).setCellValue(priceRow.getCurrency().getIsocode()); // Setting Currency
					}
					if (null != priceRow.getUnit())
					{
						r.createCell(5).setCellValue(priceRow.getUnit().getUnitType()); // Setting UNIT
					}
					if (null != priceRow.getPriceConditionType())
					{
						r.createCell(6).setCellValue(priceRow.getPriceConditionType()); // Setting Price Condition
					}
					if (null != priceRow.getPriceCriteria())
					{
						r.createCell(7).setCellValue(priceRow.getPriceCriteria()); // Setting PriceCriteria
					}
					if (null != priceRow.getSalesAreaPriceKey())
					{
						r.createCell(8).setCellValue(priceRow.getSalesAreaPriceKey()); // Setting SALES AREA PRICEKEY
					}
					if (null != priceRow.getSapConditionId())
					{
						r.createCell(9).setCellValue(priceRow.getSapConditionId()); // Setting SAP Condition Id
					}
					if (null != priceRow.getEndTime())
					{
						r.createCell(10).setCellValue(priceRow.getEndTime()); // Setting End Time
					}
					if (null != priceRow.getSoldtocustomer())
					{
						r.createCell(11).setCellValue(priceRow.getSoldtocustomer().getUid()); // Setting SOLDTOCUSTOMER
					}
					if (null != priceRow.getCreationtime())
					{
						r.createCell(12).setCellValue(getDateAsString(priceRow.getCreationtime())); // Setting Creation Date
					}
					if (null != priceRow.getModifiedtime())
					{
						r.createCell(13).setCellValue(getDateAsString(priceRow.getModifiedtime())); // Setting Modified Date
					}

					i++; // incrementing the count for next record
				}
			}
		}
		catch (RuntimeException re)
		{
			LOG.error("Exception in populateDataInSheetForUpdatedPriceRows", re);
		}
	}
}
