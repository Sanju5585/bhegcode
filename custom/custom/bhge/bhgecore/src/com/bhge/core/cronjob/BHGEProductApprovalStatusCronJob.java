package com.bhge.core.cronjob;

import com.bhge.core.model.BHGEProductApprovalStatusCronJobModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.model.B2BUserGroupModel;
import de.hybris.platform.catalog.enums.ArticleApprovalStatus;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.model.ItemModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.Config;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

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


public class BHGEProductApprovalStatusCronJob extends AbstractJobPerformable<CronJobModel>
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
	public PerformResult perform(final CronJobModel bHGEProductApprovalStatusCronJobModel)
	{

		FileOutputStream fos = null;
		try
		{
		    // Getting the flag value from cronJob
            /*Boolean materialPushFlag = bHGEProductApprovalStatusCronJobModel.getMaterialPushFlag();
            Boolean customerPushFlag = bHGEProductApprovalStatusCronJobModel.getCustomerPushFlag();
            Boolean addressPushFlag = bHGEProductApprovalStatusCronJobModel.getAddressPushFlag();
            Boolean pricePushFlag = bHGEProductApprovalStatusCronJobModel.getPricePushFlag();
            Date onDate = bHGEProductApprovalStatusCronJobModel.getOnDate();

            if(null != onDate) {
				removeCustomDatesFromCronjob(bHGEProductApprovalStatusCronJobModel); // removing date value from DB if entered.
			}

            final String materialPushEmailTemplate = "bhgeMaterialPushEmailTemplate";
			final String subject = Config.getString("type.bhge.material.push.subject", "SAP material change notification");
			final String to = Config.getString("MATERIAL_PUSH_TO_ADDRESS", null);
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(materialPushEmailTemplate);

			// Sending Material Push Email Notification
			Workbook xlsFile = new HSSFWorkbook(); // create a workbook
			CreationHelper helper = xlsFile.getCreationHelper();

			// Material Push data
			List<BHGEMaterialPushData> materialPushDataList = null;
			File materialPushExcel = null;

			LOG.info("materialPushFlag value is : " + materialPushFlag);
			try {
				if (BooleanUtils.isTrue(materialPushFlag)) { // Executes only if materialPushFlag value is TRUE
					final List<GEEdgeProductModel> geEdgeProducts = productService.getProductWithUnApprovedStatus();
					if (null != geEdgeProducts && CollectionUtils.isNotEmpty(geEdgeProducts)) {
						LOG.info("Material Push Started");
						for (final GEEdgeProductModel geEdgeProduct : geEdgeProducts) {
							geEdgeProduct.setApprovalStatus(ArticleApprovalStatus.APPROVED);
							modelService.save(geEdgeProduct);
						}

						final Sheet sheet = xlsFile.createSheet("material_push"); // add a sheet to your workbook
						sheet.setDefaultColumnWidth(16);
						materialPushDataList = new ArrayList<BHGEMaterialPushData>();
						// add header to excel
						final Row row = sheet.createRow((short) 0); // create a new row in your sheet
						row.createCell(0).setCellValue(
								helper.createRichTextString(Config.getString("type.geedge.material.push.sheet.header.part.number",
										"Part Number")));
						row.createCell(1).setCellValue(
								helper.createRichTextString(Config.getString("type.geedge.material.push.sheet.header.name", "Name")));
						row.createCell(2).setCellValue(
								helper.createRichTextString(Config.getString("type.geedge.material.push.sheet.header.product.type",
										"Product Type")));
						row.createCell(3).setCellValue(
								helper.createRichTextString(Config.getString("type.geedge.material.push.sheet.header.description",
										"Description")));
						row.createCell(4).setCellValue(
								helper.createRichTextString(Config.getString("type.geedge.material.push.sheet.header.catalog", "Catalog")));
						row.createCell(5).setCellValue(
								helper.createRichTextString(Config.getString("type.geedge.material.push.sheet.header.change.type",
										"Time Created")));
						row.createCell(6).setCellValue(
								helper.createRichTextString(Config.getString("type.geedge.material.push.sheet.header.change.date",
										"Time Modified")));
						row.createCell(7).setCellValue(
								helper.createRichTextString(Config.getString("type.geedge.material.push.sheet.header.change.status",
										"Hybris Status")));
						row.createCell(8).setCellValue(helper.createRichTextString(
								Config.getString("type.geedge.material.push.sheet.header.change.matstatus", "Material Status")));
						row.createCell(9).setCellValue(helper.createRichTextString(
								Config.getString("type.geedge.material.push.sheet.header.change.lead.time", "Lead Time")));


						int i = 1;
						for (final GEEdgeProductModel productModel : geEdgeProducts) {
							final Row newRow = sheet.createRow(i);
							final BHGEMaterialPushData materialPushData = new BHGEMaterialPushData();
							materialPushData.setPartNumber(productModel.getCode());
							newRow.createCell(0).setCellValue(helper.createRichTextString(productModel.getCode()));

							materialPushData.setName(productModel.getName());
							newRow.createCell(1).setCellValue(helper.createRichTextString(productModel.getName()));

							if (productModel.getProductType() != null) {
								materialPushData.setProductType(productModel.getProductType().getCode());
								newRow.createCell(2).setCellValue(helper.createRichTextString(productModel.getProductType().getCode()));
							}

							materialPushData.setDescription(productModel.getDescription());
							newRow.createCell(3).setCellValue(helper.createRichTextString(productModel.getDescription()));
							//String changeType = Config.getString("type.geedge.material.push.sheet.new.part", "New part");
							final SimpleDateFormat format = new SimpleDateFormat(Config.getString(
									"type.geedge.material.push.sheet.date.format", "dd-MMM-yy"));
							String changeDateString = format.format(productModel.getCreationtime());

							// Get the date today using Calendar object
							final SimpleDateFormat formatForChangeType = new SimpleDateFormat("yyyy-MM-dd");
							final Date todayDate = Calendar.getInstance().getTime();
							final String creationDate = formatForChangeType.format(productModel.getCreationtime());
							final String currentDate = formatForChangeType.format(todayDate);

							if (productModel.getModifiedtime() != null && !creationDate.equals(currentDate)) {
								//changeType = Config.getString("type.geedge.material.push.sheet.updated.part", "Updated part");
								changeDateString = format.format(productModel.getModifiedtime());
							}

							*//*
							 * materialPushData.setChangeType(changeType);
							 * newRow.createCell(2).setCellValue(helper.createRichTextString(changeType));
							 *//*

							materialPushData.setCatalogId(productModel.getCatalogVersion().getCatalog().getId());
							newRow.createCell(4).setCellValue(
									helper.createRichTextString(productModel.getCatalogVersion().getCatalog().getId()));

							materialPushData.setChangeType(format.format(productModel.getCreationtime()));
							newRow.createCell(5).setCellValue(helper.createRichTextString(format.format(productModel.getCreationtime())));

							materialPushData.setChangeDate(changeDateString);
							newRow.createCell(6).setCellValue(helper.createRichTextString(changeDateString));

							materialPushData.setHybrisStatus(productModel.getHybrisStatus() != null ? productModel.getHybrisStatus().getCode()
									: "");

							newRow.createCell(7).setCellValue(
									productModel.getHybrisStatus() != null ? productModel.getHybrisStatus().getCode() : "");

							newRow.createCell(8)
									.setCellValue(productModel.getMaterialStatus() != null ? productModel.getMaterialStatus().getCode() : "");

							final String leadTime = Config.getString("search.resultgrid.leadTime.notApplicable",
									"Standard lead time not available");
							if (productModel.getDeliveryTime() == null || productModel.getDeliveryTime() == 0) {
								newRow.createCell(9).setCellValue(helper.createRichTextString(leadTime));
								materialPushData.setLeadTime(null);
							} else {
								newRow.createCell(9).setCellValue(helper.createRichTextString(productModel.getDeliveryTime().toString()));
								materialPushData.setLeadTime(productModel.getDeliveryTime().intValue());
							}

							materialPushDataList.add(materialPushData);
							i++;
						}
						LOG.info("Material Push Completed");
					}
				}
			}catch (RuntimeException re){
				LOG.error("Exception in BHGEProductApprovalStatusCronJob --- perform -- while Creating sheet for Material push Records.", re);
			}
			// Creating sheet for updated Customer Records.
			try {
				LOG.info("customerPushFlag value is : " + customerPushFlag);
				if(BooleanUtils.isTrue(customerPushFlag)) {
					createUpdatedCustomerSheet(xlsFile, helper,onDate); // Creates the Customer Sheet
					LOG.info("Updated Customer sheet is successfully added to Workbook");
				}
			}catch (RuntimeException re){
				LOG.error("Exception in BHGEProductApprovalStatusCronJob --- perform -- while Creating sheet for updated Customer Records.", re);
			}

			// Creating sheet for updated Address Records.
			try {
				LOG.info("addressPushFlag value is : " + addressPushFlag);
				if(BooleanUtils.isTrue(addressPushFlag)) {
					createUpdatedAddressSheet(xlsFile, helper,onDate); // Creates the Address Sheet
					LOG.info("Updated Address sheet is successfully added to Workbook");
				}
			}catch (RuntimeException re){
				LOG.error("Exception in BHGEProductApprovalStatusCronJob --- perform -- while Creating sheet for updated Address Records.", re);
			}

			if(xlsFile.getNumberOfSheets() > 0) {
				fos = new FileOutputStream("BHGEDailyMonitoring.xls");
				xlsFile.write(fos);
				materialPushExcel = new File("BHGEDailyMonitoring.xls");
				if (to == null || to.length() == 0) {
					return new PerformResult(CronJobResult.FAILURE, CronJobStatus.FINISHED);
				}
			}

			// Email sending functionality
			//bhgeEmailService.materialPushEmail(templateModel, subject, to, materialPushExcel, materialPushDataList);

			return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);*/
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
					LOG.error("IOException occured in GEEdgeMaterialPushEmailJob" + e);
				}
			}
		}
		return new PerformResult(CronJobResult.FAILURE, CronJobStatus.FINISHED);
	}

	private void createUpdatedCustomerSheet(Workbook xlsFile, CreationHelper helper, Date onDate) {
		List<B2BUnitModel> b2BUnitModelList = productService.getUpdatedCustomersRecords(onDate); // Get updated B2BUnit records
		if(CollectionUtils.isNotEmpty(b2BUnitModelList)) {
			LOG.info("Creating sheet for Updated Customers");
			final Sheet sheet = xlsFile.createSheet("customer_push"); // add a new sheet to your workbook
			populateDataInSheetForUpdatedCustomers(sheet, helper, b2BUnitModelList); // Update the records in the sheet
		}
	}

	private void createUpdatedAddressSheet(Workbook xlsFile, CreationHelper helper, Date onDate) {
		List<AddressModel> addressModelList = productService.getUpdatedAddressRecords(onDate); // Get updated AddressModel records
		if(CollectionUtils.isNotEmpty(addressModelList)) {
			LOG.info("Creating sheet for Updated Addresses");
			final Sheet sheet = xlsFile.createSheet("address_push"); // add a new sheet to your workbook
			populateDataInSheetForUpdatedAddresses(sheet, helper, addressModelList); // Update the records in the sheet
		}
	}

	private void removeCustomDatesFromCronjob(BHGEProductApprovalStatusCronJobModel bHGEProductApprovalStatusCronJobModel){
		try {
			// Removing "OnDate" date form BHGEProductApprovalStatusCronJob
			bHGEProductApprovalStatusCronJobModel.setOnDate(null);

			modelService.save(bHGEProductApprovalStatusCronJobModel);
			modelService.refresh(bHGEProductApprovalStatusCronJobModel);
			LOG.info("Removed 'OnDate' from BHGEProductApprovalStatusCronJobModel");
		}catch (RuntimeException re){
			LOG.error("Error while removing OnDate value in BHGEProductApprovalStatus Cronjob. Please remove the OnDate value manually from Backoffice");
		}
	}

	/**
	 * @param customerSheet
	 * @param helper
	 * @param b2BUnitModelList
	 */
	private void populateDataInSheetForUpdatedCustomers(final Sheet customerSheet, final CreationHelper helper,
													final List<B2BUnitModel> b2BUnitModelList)
	{
		try {
			LOG.debug("In populateDataInSheetForUpdatedCustomers Method");
			if (CollectionUtils.isNotEmpty(b2BUnitModelList)) {
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
				for (final B2BUnitModel unit : b2BUnitModelList) {
					LOG.debug("In populateDatainSheetForUpdatedCustomers Method uid" + unit.getUid());
					final Row r = customerSheet.createRow(i); // Setting B2BUnitModel UID
					r.createCell(0).setCellValue(unit.getUid()); // Setting B2BUnitModel NAME
					r.createCell(1).setCellValue(unit.getName()); // Setting B2BUnitModel DESCRIPTION
					r.createCell(2).setCellValue(unit.getAccountGroup());
					r.createCell(3).setCellValue(unit.getCountryCP());
					if(null != unit.getCurrency()) {
						r.createCell(4).setCellValue(unit.getCurrency().getIsocode());
					}
					r.createCell(5).setCellValue(unit.getIncoterms1());
					r.createCell(6).setCellValue(unit.getIncoterms2());
					r.createCell(7).setCellValue(unit.getPaymentTerms());
					r.createCell(8).setCellValue(unit.getEcommerceFlag());

					StringBuilder groups = new StringBuilder();
					for(PrincipalGroupModel principalGroupModel : unit.getGroups()){
						if(null != principalGroupModel.getUid()){
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
		}catch (RuntimeException re){
			LOG.error("Exception in populateDataInSheetForUpdatedCustomers",re);
		}
	}

	private String getDateAsString(Date date){
		// Setting Creation Date
		if(null != date) {
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
		try {
			LOG.debug("In populateDataInSheetForUpdatedAddresses Method");
			if (CollectionUtils.isNotEmpty(addressModelList)) {
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
				for (final AddressModel address : addressModelList) {
					LOG.debug("In populateDataInSheetForUpdatedAddresses Method uid" + address.getStreetname());
					final Row r = addressSheet.createRow(i); // Setting B2BUnitModel UID

					r.createCell(0).setCellValue(address.getPk().toString()); // Setting AddressModel PK
					r.createCell(1).setCellValue(address.getSapCustomerID()); // Setting Sap Customer ID
					r.createCell(2).setCellValue(address.getPostalcode()); 	// Setting Postal code
					r.createCell(3).setCellValue(address.getStreetnumber()); // Setting Street Number
					r.createCell(4).setCellValue(address.getStreetname()); 	// Setting Street Name
					r.createCell(5).setCellValue(address.getTown()); 		// Setting Town
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
		}catch (RuntimeException re){
			LOG.error("Exception in populateDataInSheetForUpdatedAddresses",re);
		}
	}
}
