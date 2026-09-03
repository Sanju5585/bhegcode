/**
 *
 */
package com.bhge.core.order.service.impl;

import com.bhge.core.enums.BHGERMACommerceType;
import com.hybris.ge.edge.core.model.type.PaymenttermModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.impl.DefaultB2BOrderService;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.Registry;
import de.hybris.platform.core.model.enumeration.EnumerationValueModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderEntryModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.order.strategies.SubmitOrderStrategy;
import de.hybris.platform.ordersplitting.model.WarehouseModel;
import de.hybris.platform.regioncache.CacheController;
import de.hybris.platform.regioncache.key.CacheKey;
import de.hybris.platform.regioncache.region.CacheRegion;
import de.hybris.platform.util.Config;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.DateFormat;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.order.daos.BHGEB2BOrderDao;
import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.regioncache.BHGECacheKey;


/**
 * @author pachoudharyz
 *
 */
public class DefaultBHGEB2BOrderService extends DefaultB2BOrderService implements BHGEB2BOrderService
{

	private static final Logger LOG = Logger.getLogger(DefaultBHGEB2BOrderService.class);


	private BHGEB2BOrderDao bhgeB2BOrderDao;

	@Resource(name = "cacheController")
	private CacheController cacheController;

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;
	
	private List<SubmitOrderStrategy> submitOrderStrategies;

	/**
	 * @return the geedgeEmailService
	 */
	public BHGEEmailService getBhgeEmailService()
	{
		return bhgeEmailService;
	}

	/**
	 * @param bhgeEmailService
	 *           the geedgeEmailService to set
	 */
	public void setBhgeEmailService(final BHGEEmailService bhgeEmailService)
	{
		this.bhgeEmailService = bhgeEmailService;
	}

	public List<OrderModel> getUnsubmittedOrders(final String fromDate)
	{
		return bhgeB2BOrderDao.getOrderBySubmissionStatus(fromDate);

	}

	public BHGEB2BOrderDao getBhgeB2BOrderDao()
	{
		return bhgeB2BOrderDao;
	}

	public void setBhgeB2BOrderDao(final BHGEB2BOrderDao bhgeB2BOrderDao)
	{
		this.bhgeB2BOrderDao = bhgeB2BOrderDao;
	}

	public List<BHGERfcCallErrorModel> getNonCriticalErrorModelLst()
	{
		return bhgeB2BOrderDao.getErrorModelDaoLst();
	}

	@Override
	public List<OrderModel> getSubmittedOrders()
	{
		final List<OrderModel> result = bhgeB2BOrderDao.getSubmittedOrders();
		return result;
	}

	@Override
	public List<OrderModel> getSubmittedBuyOrders()
	{
		final List<OrderModel> result = bhgeB2BOrderDao.getSubmittedBuyOrders();
		return result;
	}

	@Override
	public List<OrderModel> getSubmittedReturnOrders()
	{
		final List<OrderModel> result = bhgeB2BOrderDao.getSubmittedReturnOrders();
		return result;
	}

	public List<OrderModel> getRFCFailOrders(){
		final List<OrderModel> result = bhgeB2BOrderDao.getRFCFailOrders();
		return result;
	}

	@Override
	public String getPlantNameForCode(final String plantCode)
	{
		final WarehouseModel plant = bhgeB2BOrderDao.getPlantForCode(plantCode);
		if (null != plant)
		{
			return plant.getName();
		}
		return "";
	}

	@Override
	public List<EnumerationValueModel> getSalesOrderTypes()
	{
		return bhgeB2BOrderDao.getSalesOrderTypes();
	}


	/**
	 * Removing Past orders and Open orders from the Cache for given Soldto customer
	 */
	@Override
	public void clearOrderHistoryCacheForCustomer(final Set<String> soldToList)
	{
		final Collection<CacheRegion> regions = getCacheController().getRegions();
		final String regionName = Config.getString("regioncache.orderhistoryregion.name", "orderHistoryCacheRegion");
		String PAST_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_PAST")))? Config.getParameter("ORDERTYPE_PAST"): "CP_PAST";
		String CURRENT_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_CURRENT")))? Config.getParameter("ORDERTYPE_CURRENT"): "CP_OPEN";
		if (null != regions && regions.size() > 0)
		{
			for (final CacheRegion region : regions)
			{
				if (regionName.trim().equals(region.getName()))
				{
					LOG.debug("Clearing Order History from Cache for the customers ");
					for (final String soldTo : soldToList)
					{
						final String pastOrdersKey = getKey(soldTo, PAST_ORDER);
						final String openOrdersKey = getKey(soldTo, CURRENT_ORDER);
						final CacheKey openOrders = new BHGECacheKey(openOrdersKey, Registry.getCurrentTenant().getTenantID());
						final CacheKey pastOrders = new BHGECacheKey(pastOrdersKey, Registry.getCurrentTenant().getTenantID());

						// Invalidate both Open and Closed orders for the soldTo
						region.invalidate(pastOrders, false);
						region.invalidate(openOrders, false);
					}
					break;
				}
			}
		}
	}

	@Override
	public boolean fetchAndSendWeeklyOrders(String fromDate, String toDate)
	{
		FileOutputStream fos = null;
		File file = null;

		// Getting OrderModels based on dates
		final List<OrderModel> weeklyOrders = bhgeB2BOrderDao.getWeeklyOrders(fromDate, toDate);

		// Getting OrderModels based on dates
		final List<QuoteModel> weeklyQuoteOrders = bhgeB2BOrderDao.getWeeklyQuoteOrders(fromDate, toDate);

        if (CollectionUtils.isNotEmpty(weeklyOrders) || CollectionUtils.isNotEmpty(weeklyQuoteOrders))
        {
            // Generating Sheet based on order details
            final Workbook xlsFile = generateXLSFileForWeeklyOrders(weeklyOrders,weeklyQuoteOrders);

			try
			{
				fos = new FileOutputStream("BH_DS_Store_WeeklyOrders.xls");
				xlsFile.write(fos);
				file = new File("BH_DS_Store_WeeklyOrders.xls");

				// Sending Mail with attachment
				bhgeEmailService.sendMailForWeeklyOrders(file, Config.getParameter("weeklyordersJobSubject"),Config.getParameter("weeklyDataJobTo"), fromDate, toDate);

			}
			catch (final RuntimeException re)
			{
				LOG.error("Exception in fetchAndSendWeeklyOrders method ",re);
				return false;
			} catch (FileNotFoundException fne) {
                LOG.error("FileNotFoundException in fetchAndSendWeeklyOrders method ",fne);
                return false;
            } catch (IOException ioe) {
                LOG.error("IOException in fetchAndSendWeeklyOrders method ",ioe);
                return false;
            } finally {
                try {
                    fos.flush();
                    fos.close();
                } catch (IOException ioe) {
                    LOG.error("IOException in fetchAndSendWeeklyOrders method while closing the FileOutputStream",ioe);
                }
            }
		}
		else
		{
			LOG.info("No Weekly Orders found");
		}
		return true;

	}

	/**
	 * @param weeklyOrders
	 * @return
	 */
	private Workbook generateXLSFileForWeeklyOrders(final List<OrderModel> weeklyOrders, final List<QuoteModel> weeklyQuoteOrders)
	{

		final Workbook xlsFile = new HSSFWorkbook(); // create a workbook
		final CreationHelper helper = xlsFile.getCreationHelper();
		final Sheet buySheet = xlsFile.createSheet("Weekly Buy Orders");
		final Sheet returnSheet = xlsFile.createSheet("Weekly Return Orders");
		final Sheet guestBuySheet = xlsFile.createSheet("Weekly Guest Buy Orders");
		final Sheet guestRFQSheet = xlsFile.createSheet("Weekly Guest RFQ Orders");
		populateDatainSheetForWeeklyOrders(buySheet, returnSheet, guestBuySheet, guestRFQSheet, helper, weeklyOrders, weeklyQuoteOrders);

		// XXX Auto-generated method stub
		return xlsFile;
	}

	/**
	 * @param buySheet
	 * @param returnSheet
	 * @param helper
	 * @param weeklyOrders
	 */
    private void populateDatainSheetForWeeklyOrders(final Sheet buySheet, final Sheet returnSheet, final Sheet guestBuySheet, final Sheet guestRFQSheet,final CreationHelper helper,
                                                    final List<OrderModel> weeklyOrders, final List<QuoteModel> weeklyQuoteOrders)
    {
        try {
            LOG.debug("In populateDatainSheetForWeeklyOrders Method");
            // Setting default column width of sheet
            buySheet.setDefaultColumnWidth(16);
            returnSheet.setDefaultColumnWidth(16);
			guestBuySheet.setDefaultColumnWidth(16);
			guestRFQSheet.setDefaultColumnWidth(16);

            // add header to excel
            final Row buyRow = buySheet.createRow((short) 0); // create a new row in your Buy sheet
            final Row returnRow = returnSheet.createRow((short) 0); // create a new row in your Return sheet
			final Row guestBuyRow = guestBuySheet.createRow((short) 0); // create a new row in your GUEST Buy sheet
			final Row guestRFQRow = guestRFQSheet.createRow((short) 0); // create a new row in your GUEST Return sheet


			// BUY row header creation
			populateBuyRowHeader(buyRow,helper);

			// RETURN row header creation
			populateReturnRowHeader(returnRow,helper);

			// GUEST BUY row header creation
			populateBuyRowHeader(guestBuyRow,helper);

			// GUEST RFQ row header creation
			populateGuestRFQRowHeader(guestRFQRow,helper);

            int buyCount = 1;
            int returnCount = 1;
			int guestBuyCount = 1;
            if (CollectionUtils.isNotEmpty(weeklyOrders)) {
                for (final OrderModel order : weeklyOrders) {
                    LOG.debug("In populateDatainSheetForWeeklyOrders Method order" + order.getCode());
                    LOG.debug("In populateDatainSheetForWeeklyOrders Method order Type" + order.getCommerceType());

                    if(BHGERMACommerceType.BUY.equals(order.getCommerceType())){
                        final Row r = buySheet.createRow(buyCount);
                        populateDatainSheetForOrders(order,r);
                        buyCount++;
                    }
					else if(BHGERMACommerceType.RETURNS.equals(order.getCommerceType())){
						final Row r = returnSheet.createRow(returnCount);
						populateDatainSheetForOrders(order,r);
						returnCount++;
					}
					else if(BHGERMACommerceType.GUESTBUY.equals(order.getCommerceType())){
						final Row r = guestBuySheet.createRow(guestBuyCount);
						populateDatainSheetForOrders(order,r);
						guestBuyCount++;
					}
                }
            }
            // GUEST RFQ order sheet creation
			if (CollectionUtils.isNotEmpty(weeklyQuoteOrders)) {
				LOG.info("Inside GUESTRFQ population");
				int guestRFQCount = 1;
				// To consider only those Quotes with version value as "1"
				Integer versionValue = 1;
				for (final QuoteModel order : weeklyQuoteOrders) {
					if (BHGERMACommerceType.GUESTRFQ.equals(order.getCommerceType())
							&& versionValue == order.getVersion()) {
						final Row r = guestRFQSheet.createRow(guestRFQCount);
						populateDatainSheetForQuoteOrders(order, r);
						guestRFQCount++;
					}
				}
			}
        }catch (RuntimeException re){
            LOG.error("Exception in populateDatainSheetForWeeklyOrders",re);
        }
    }

    private void populateBuyRowHeader(Row row, CreationHelper helper){
		// cell creation for Buy sheet
		row.createCell(0).setCellValue(helper.createRichTextString("ORDER_NO"));
		row.createCell(1).setCellValue(helper.createRichTextString("CREATED_DATE"));
		row.createCell(2).setCellValue(helper.createRichTextString("SSO_ID"));
		row.createCell(3).setCellValue(helper.createRichTextString("CREATED_BY"));
		row.createCell(4).setCellValue(helper.createRichTextString("SOLD_TO"));
		row.createCell(5).setCellValue(helper.createRichTextString("SOLD_TO NAME"));
		row.createCell(6).setCellValue(helper.createRichTextString("ORDER_TYPE"));
		row.createCell(7).setCellValue(helper.createRichTextString("ORDER_STATUS"));
		row.createCell(8).setCellValue(helper.createRichTextString("PRICE"));
		row.createCell(9).setCellValue(helper.createRichTextString("CURRENCY"));
	}

	private void populateReturnRowHeader(Row row, CreationHelper helper){
		// cell creation for Return sheet
		row.createCell(0).setCellValue(helper.createRichTextString("ORDER_NO"));
		row.createCell(1).setCellValue(helper.createRichTextString("CREATED_DATE"));
		row.createCell(2).setCellValue(helper.createRichTextString("SSO_ID"));
		row.createCell(3).setCellValue(helper.createRichTextString("CREATED_BY"));
		row.createCell(4).setCellValue(helper.createRichTextString("SOLD_TO"));
		row.createCell(5).setCellValue(helper.createRichTextString("SOLD_TO NAME"));
		row.createCell(6).setCellValue(helper.createRichTextString("ORDER_STATUS"));
		row.createCell(7).setCellValue(helper.createRichTextString("PRICE"));
		row.createCell(8).setCellValue(helper.createRichTextString("CURRENCY"));
		row.createCell(9).setCellValue(helper.createRichTextString("SAP_RMA_NUMBER"));
	}

	private void populateGuestRFQRowHeader(Row row, CreationHelper helper){
		// cell creation for Buy sheet
		row.createCell(0).setCellValue(helper.createRichTextString("ORDER_NO"));
		row.createCell(1).setCellValue(helper.createRichTextString("CREATED_DATE"));
        row.createCell(2).setCellValue(helper.createRichTextString("CREATED_BY"));
		row.createCell(3).setCellValue(helper.createRichTextString("SOLD_TO_NAME"));
        row.createCell(4).setCellValue(helper.createRichTextString("EMAIL_ADDRESS"));
		row.createCell(5).setCellValue(helper.createRichTextString("END_USER_COMPANY_NAME"));
        row.createCell(6).setCellValue(helper.createRichTextString("END_USER_CATEGORY"));

	}

    private void populateDatainSheetForOrders(final OrderModel order,Row r)
    {
    	try {
			// Setting Order Code
			r.createCell(0).setCellValue(order.getCode());
			// Setting Order Creation Date
			Date orderCreationTime = order.getCreationtime();
			if (null != orderCreationTime) {
				String orderCreationDate = DateFormat.getDateInstance(DateFormat.LONG).format(orderCreationTime);
				r.createCell(1).setCellValue(orderCreationDate);
			}

			if (null != order.getUser()) {
				final UserModel user = order.getUser();
				// Setting SSO ID
				r.createCell(2).setCellValue(user.getUid());
				// Setting Created By
				if(BHGERMACommerceType.GUESTBUY.equals(order.getCommerceType()) || BHGERMACommerceType.GUESTRFQ.equals(order.getCommerceType()))
				{
					r.createCell(3).setCellValue(order.getShipToContactName());
				}
				else {
					r.createCell(3).setCellValue(user.getName());
				}
			}

			B2BUnitModel b2BUnitModel = order.getSoldToForCart();
			if (null != b2BUnitModel) {
				// Setting Sold To
				r.createCell(4).setCellValue(b2BUnitModel.getUid());
				r.createCell(5).setCellValue(b2BUnitModel.getName());
			}

			// Setting Order Type
			if (null != order.getCartType() && (BHGERMACommerceType.BUY.equals(order.getCommerceType()) || BHGERMACommerceType.GUESTBUY.equals(order.getCommerceType()) || BHGERMACommerceType.GUESTRFQ.equals(order.getCommerceType()))) {
				r.createCell(6).setCellValue(order.getCartType().getCode());
				LOG.debug("In populateDatainSheetForWeeklyOrders Method Type :" + order.getCartType().getCode());
			}
			if (null != order.getStatus()) {
				if (BHGERMACommerceType.RETURNS.equals(order.getCommerceType())) {
					r.createCell(6).setCellValue(order.getStatus().getCode());
				} else {
					r.createCell(7).setCellValue(order.getStatus().getCode());
				}
			}

			if (null != order.getTotalPrice()) {
				if (BHGERMACommerceType.RETURNS.equals(order.getCommerceType())) {
					r.createCell(7).setCellValue(order.getTotalPrice());
				} else {
					r.createCell(8).setCellValue(order.getTotalPrice());
				}
			}
			if (null != order.getCurrency()) {
				if (BHGERMACommerceType.RETURNS.equals(order.getCommerceType())) {
					r.createCell(8).setCellValue(order.getCurrency().getIsocode());
				} else {
					r.createCell(9).setCellValue(order.getCurrency().getIsocode());
				}
			}
			if ((BHGERMACommerceType.RETURNS.equals(order.getCommerceType())) && null != order.getRmaNumber()) {
				r.createCell(9).setCellValue(order.getRmaNumber());
			}
		} catch (RuntimeException re){
			LOG.error("Exception in populateDatainSheetForOrders",re);
		}
    }

    // Populating GUEST Quote sheet
	private void populateDatainSheetForQuoteOrders(final QuoteModel order,Row r)
	{
		try {
		    if(null != order) {
                // Setting Order Code
                r.createCell(0).setCellValue(order.getCode());
                // Setting Order Creation Date
                Date orderCreationTime = order.getCreationtime();
                if (null != orderCreationTime) {
                    String orderCreationDate = DateFormat.getDateInstance(DateFormat.LONG).format(orderCreationTime);
                    r.createCell(1).setCellValue(orderCreationDate);
                }
                // Setting Created By
                r.createCell(2).setCellValue(order.getUserName());

                // Setting Company Name (SOLD_TO_NAME)
                r.createCell(3).setCellValue(order.getCompany());

                // Setting Email
                r.createCell(4).setCellValue(order.getEmailAddress());

                // Setting End User Company Name
                if (order.getRMAEndUserAddress() != null) {
                    final AddressModel rmaEndUserAddress = order.getRMAEndUserAddress();
                    r.createCell(5).setCellValue(rmaEndUserAddress.getCompany());
                    // Setting End user Category
                    r.createCell(6).setCellValue(rmaEndUserAddress.getEndUserType());
                }
            }
		} catch (RuntimeException re){
			LOG.error("Exception in populateDatainSheetForQuoteOrders",re);
		}
	}

	@Override
	public boolean fetchAndSendInvalidData()
	{
		FileOutputStream fos = null;
		File file = null;
		List<GEEdgeProductModel> productsWithoutCategories = null;
		List<GEEdgeProductModel> productsWithoutPrices = null;
		List<AddressModel> shipTosWithoutCountries = null;
		List<AddressModel> shipTosWithoutAnyAssociation = null;
		List<GEEdgeProductModel> productsWithP5Status = null;
		List<GEEdgeProductModel> productsWithType = null;
		List<CategoryModel> categoriesWithoutProductAssigned = null;
		List<B2BUnitModel> b2bunitWithoutAddressAssigned = null;

		try {
			productsWithoutCategories = bhgeB2BOrderDao.getProductsWithoutCategories();
		}catch (RuntimeException re){
			LOG.error("Exception in getting ProductsWithoutCategories");
		}

		try {
			productsWithoutPrices = bhgeB2BOrderDao.getProductsWithoutPrices();
		}catch (RuntimeException re){
			LOG.error("Exception in getting ProductsWithoutPrices");
		}

		try {
			shipTosWithoutCountries = bhgeB2BOrderDao.getShipTosWithoutCountries();
		}catch (RuntimeException re){
			LOG.error("Exception in getting ShipTosWithoutCountries");
		}

		try {
			shipTosWithoutAnyAssociation = bhgeB2BOrderDao.getInvalidShipTos();
		}catch (RuntimeException re){
			LOG.error("Exception in getting InvalidShipTos");
		}

		try {
			productsWithP5Status = bhgeB2BOrderDao.getProductsWithP5Status();
		}catch (RuntimeException re){
			LOG.error("Exception in getting ProductsWithP5Status");
		}

		try {
			productsWithType = bhgeB2BOrderDao.getProductsWithType();
		}catch (RuntimeException re){
			LOG.error("Exception in getting ProductsWithType");
		}

		try {
			categoriesWithoutProductAssigned = bhgeB2BOrderDao.getCategoriesWithoutProductAssigned();
		}catch (RuntimeException re){
			LOG.error("Exception in getting CategoriesWithoutProductAssigned");
		}

		try {
			b2bunitWithoutAddressAssigned = bhgeB2BOrderDao.getB2bunitWithoutAddressAssigned();
		}catch (RuntimeException re){
			LOG.error("Exception in getting B2bunitWithoutAddressAssigned");
		}
		final Workbook xlsFile = generateXLSFileForInvalidData(productsWithoutCategories, productsWithoutPrices,
				shipTosWithoutCountries, shipTosWithoutAnyAssociation, productsWithP5Status, productsWithType,
				categoriesWithoutProductAssigned,b2bunitWithoutAddressAssigned);

		if (CollectionUtils.isNotEmpty(productsWithoutCategories) || CollectionUtils.isNotEmpty(productsWithoutPrices)
				|| CollectionUtils.isNotEmpty(shipTosWithoutCountries) || CollectionUtils.isNotEmpty(shipTosWithoutAnyAssociation)
				|| CollectionUtils.isNotEmpty(productsWithP5Status) || CollectionUtils.isNotEmpty(productsWithType)
				|| CollectionUtils.isNotEmpty(categoriesWithoutProductAssigned) || CollectionUtils.isNotEmpty(b2bunitWithoutAddressAssigned))
		{
			try
			{
				fos = new FileOutputStream("BakerHughesInvalidData.xls");
				xlsFile.write(fos);
				file = new File("BakerHughesInvalidData.xls");
				bhgeEmailService.sendMailForInvalidData(file, Config.getParameter("invalidDataJobSubject"),
						Config.getParameter("invalidDataJobTo"));

				fos.flush();
				fos.close();
			}
			catch (final Exception e)
			{
				LOG.error(e);
				return false;
			}
		}
		else
		{
			LOG.info("No Invalid data found");
		}
		return true;
	}


	private Workbook generateXLSFileForInvalidData(final List<GEEdgeProductModel> productsWithoutCategories,
			final List<GEEdgeProductModel> productsWithoutPrices, final List<AddressModel> shipTosWithoutCountries,
			final List<AddressModel> shipTosWithoutAnyAssociation, final List<GEEdgeProductModel> productsWithP5Status,
												   final List<GEEdgeProductModel> productsWithType, final List<CategoryModel> categoriesWithoutProductAssigned,final List<B2BUnitModel> b2bunitWithoutAddressAssigned)
	{
		final Workbook xlsFile = new HSSFWorkbook(); // create a workbook
		final CreationHelper helper = xlsFile.getCreationHelper();

		try {
			if(CollectionUtils.isNotEmpty(productsWithoutCategories)) {

				Sheet sheet1 = xlsFile.createSheet("Material_WO_Category");
				populateDatainSheetForMaterialsWithoutCategories(sheet1, helper, productsWithoutCategories, xlsFile);
			}
		} catch (RuntimeException re){
			LOG.error("Exception in Materials Without categories",re);
		}

		try {
			if(CollectionUtils.isNotEmpty(productsWithoutPrices)) {
				Sheet sheet2 = xlsFile.createSheet("Material_WO_Price");
				populateDatainSheetForMaterialWithoutPrices(sheet2, helper, productsWithoutPrices,xlsFile);
			}
		} catch (RuntimeException re){
			LOG.error("Exception in Materials Without Prices",re);
		}

		try {
			if(CollectionUtils.isNotEmpty(shipTosWithoutCountries)) {
				Sheet sheet3 = xlsFile.createSheet("Address_WO_Country");
				populateDatainSheetForAddressesWithoutCountries(sheet3, helper, shipTosWithoutCountries, xlsFile);
			}
		} catch (RuntimeException re){
			LOG.error("Exception in Address Without Countries",re);
		}

		/*
		 * final Sheet sheet4 = xlsFile.createSheet("shipTo Without Any Association"); populateDatainSheetForAddresses(sheet4,
		 * helper, shipTosWithoutAnyAssociation);
		 */

		try {
			if(CollectionUtils.isNotEmpty(productsWithP5Status)) {
				Sheet sheet5 = xlsFile.createSheet("Material_W_P5_Status");
				populateDatainSheetForMaterialsWithP5Status(sheet5, helper, productsWithP5Status, xlsFile);
			}
		} catch (RuntimeException re){
			LOG.error("Exception in Materials With P5 Status",re);
		}

		try {
			if(CollectionUtils.isNotEmpty(productsWithType)) {
				Sheet sheet6 = xlsFile.createSheet("Material_W_Type");
				populateDatainSheetForMaterialsWithType(sheet6, helper, productsWithType, xlsFile);
			}
		} catch (RuntimeException re){
			LOG.error("Exception in Materials With Type",re);
		}

		try {
			if(CollectionUtils.isNotEmpty(categoriesWithoutProductAssigned)) {
				Sheet sheet7 = xlsFile.createSheet("Category_WO_Product");
				populateDatainSheetForCategoriesWithoutMaterialAssigned(sheet7, helper, categoriesWithoutProductAssigned, xlsFile);
			}
		} catch (RuntimeException re){
			LOG.error("Exception in Categories Without Product Assigned",re);
		}

		try {
			if(CollectionUtils.isNotEmpty(b2bunitWithoutAddressAssigned)) {
				Sheet sheet8 = xlsFile.createSheet("Customer_WO_Address");
				populateDatainSheetForB2bUnitsWithoutAddressAssigned(sheet8, helper, b2bunitWithoutAddressAssigned, xlsFile);
			}
		} catch (RuntimeException re){
			LOG.error("Exception in Customer Accounts without Addresses",re);
		}

		return xlsFile;
	}

	//Products Without Categories
	private void populateDatainSheetForMaterialsWithoutCategories(Sheet sheet, final CreationHelper helper,
																  final List<GEEdgeProductModel> productsWithoutCategories, Workbook xlsFile)
	{
		sheet.setDefaultColumnWidth(16);
		String maxRowValue = Config.getParameter("invalid.data.max.row.range");
		int maxLength = Integer.parseInt(maxRowValue);
		int sheetCount = 1;
		// Create Header Row
		createHeaderRowForMaterialsWOCategories(sheet, helper);

		int i = 1;
		if (CollectionUtils.isNotEmpty(productsWithoutCategories))
		{
			for (final GEEdgeProductModel product : productsWithoutCategories)
			{
				List<BHGESalesAreaDataModel> salesAreas = (List<BHGESalesAreaDataModel>) product.getSalesAreaData();
				if(!salesAreas.isEmpty())
				{
					for(BHGESalesAreaDataModel salesArea : salesAreas) {
						// Start - functionality for dynamically creating new sheet if count exceed limit
						try {
							if (sheet.getLastRowNum() >= maxLength) {
								sheet = xlsFile.createSheet("Material_WO_Category_" + sheetCount);
								LOG.info("New sheet created : " + sheet.getSheetName());
								// Create Header Row
								createHeaderRowForMaterialsWOCategories(sheet, helper);
								// initializing the count variables
								i = 1;
								sheetCount += 1;
							}
						}catch (RuntimeException ex) {
							LOG.error("Exception in Materials Without categories at Sheet " + sheet.getSheetName() , ex);
							ex.printStackTrace();
						}
						// End - functionality for dynamically creating new sheet if count exceed limit

						final Row r = sheet.createRow(i);
						r.createCell(0).setCellValue(product.getCode());
						r.createCell(1).setCellValue(salesArea.getMaterialStatus() != null ? salesArea.getMaterialStatus().getCode() : "");
						r.createCell(2).setCellValue(salesArea.getHybrisStatus() != null ? salesArea.getHybrisStatus().getCode() : "");
						r.createCell(3).setCellValue(product.getProductType().getCode());
						r.createCell(4).setCellValue(salesArea.getSalesOrganization() != null ? salesArea.getSalesOrganization() : "");
						i++;
					}
				}
				else{
					// functionality for dynamically creating new sheet if count exceed limit
					try {
						if (sheet.getLastRowNum() >= maxLength) {
							sheet = xlsFile.createSheet("Material_WO_Category_" + sheetCount);
							LOG.info("New sheet created : " + sheet.getSheetName());
							// Create Header Row
							createHeaderRowForMaterialsWOCategories(sheet, helper);
							i = 1; // initializing the count variable
						}
					}catch (RuntimeException ex) {
						LOG.error("Exception in Materials Without categories at Sheet " + sheet.getSheetName() , ex);
						ex.printStackTrace();
					}
					// End - functionality for dynamically creating new sheet if count exceed limit

					final Row r = sheet.createRow(i);
					r.createCell(0).setCellValue(product.getCode());
					r.createCell(1).setCellValue("");
					r.createCell(2).setCellValue("");
					r.createCell(3).setCellValue(product.getProductType().getCode());
					r.createCell(4).setCellValue("");
					i++;
				}
			}
		}
	}

	private void createHeaderRowForMaterialsWOCategories(Sheet sheet1, CreationHelper helper) {
		// add header to excel
		final Row row = sheet1.createRow((short) 0); // create a new row in your sheet

		row.createCell(0).setCellValue(helper.createRichTextString("PRODUCT_CODE"));
		row.createCell(1).setCellValue(helper.createRichTextString("MATERIAL_STATUS"));
		row.createCell(2).setCellValue(helper.createRichTextString("HYBRIS_STATUS"));
		row.createCell(3).setCellValue(helper.createRichTextString("PRODUCT_TYPE"));
		row.createCell(4).setCellValue(helper.createRichTextString("SALES_AREA"));
	}


	//Products Without Prices
	@SuppressWarnings("boxing")
	private void populateDatainSheetForMaterialWithoutPrices(Sheet sheet, final CreationHelper helper,
			final List<GEEdgeProductModel> productsWithoutPrices, Workbook xlsFile)
	{
		sheet.setDefaultColumnWidth(16);
		String maxRowValue = Config.getParameter("invalid.data.max.row.range");
		int maxLength = Integer.parseInt(maxRowValue);
		int sheetCount = 1;
		// Create Header Row
		createHeaderRowForMaterialWithoutPrices(sheet, helper);

		int i = 1;
		if (CollectionUtils.isNotEmpty(productsWithoutPrices))
		{
			for (final GEEdgeProductModel product : productsWithoutPrices)
			{
				final List<CategoryModel> category = (List<CategoryModel>) product.getSupercategories();
				final StringBuffer sf = new StringBuffer();
				for (final CategoryModel cmodel : category)
				{
					sf.append(cmodel.getCode());
					sf.append(",");
				}
				List<BHGESalesAreaDataModel> salesAreas = (List<BHGESalesAreaDataModel>) product.getSalesAreaData();
				if(!salesAreas.isEmpty())
				{
					for(BHGESalesAreaDataModel salesArea : salesAreas) {
						// Start - functionality for dynamically creating new sheet if count exceed limit
						try {
							if (sheet.getLastRowNum() >= maxLength) {
								sheet = xlsFile.createSheet("Material_WO_Price_" + sheetCount);
								LOG.info("New sheet created : " + sheet.getSheetName());
								// Create Header Row
								createHeaderRowForMaterialWithoutPrices(sheet, helper);
								// initializing the count variables
								i = 1;
								sheetCount += 1;
							}
						}catch (RuntimeException ex) {
							LOG.error("Exception in Materials Without Prices at Sheet " + sheet.getSheetName(), ex);
							ex.printStackTrace();
						}
						// End - functionality for dynamically creating new sheet if count exceed limit
						final Row r = sheet.createRow(i);
						r.createCell(0).setCellValue(product.getCode());
						r.createCell(1).setCellValue(sf.toString());
						r.createCell(2).setCellValue(product.getSapConfigurable());
						r.createCell(3).setCellValue(product.getProductType().getCode());
						r.createCell(4).setCellValue(salesArea.getMaterialStatus() != null ? salesArea.getMaterialStatus().getCode() : "");
						r.createCell(5).setCellValue(salesArea.getHybrisStatus() != null ? salesArea.getHybrisStatus().getCode() : "");
						r.createCell(6).setCellValue(salesArea.getSalesOrganization() != null ? salesArea.getSalesOrganization() : "");
						i++;
					}
				}
				else{
					// Start - functionality for dynamically creating new sheet if count exceed limit
					try {
						if (sheet.getLastRowNum() >= maxLength) {
							sheet = xlsFile.createSheet("Material_WO_Price_" + sheetCount);
							LOG.info("New sheet created : " + sheet.getSheetName());
							// Create Header Row
							createHeaderRowForMaterialWithoutPrices(sheet, helper);
							// initializing the count variables
							i = 1;
							sheetCount += 1;
						}
					}catch (RuntimeException ex) {
						LOG.error("Exception in Materials Without Prices at Sheet " + sheet.getSheetName(), ex);
						ex.printStackTrace();
					}
					// End - functionality for dynamically creating new sheet if count exceed limit
					final Row r = sheet.createRow(i);
					r.createCell(0).setCellValue(product.getCode());
					r.createCell(1).setCellValue(sf.toString());
					r.createCell(2).setCellValue(product.getSapConfigurable());
					r.createCell(3).setCellValue(product.getProductType().getCode());
					r.createCell(4).setCellValue("");
					r.createCell(5).setCellValue("");
					r.createCell(6).setCellValue("");
					i++;
				}

			}
		}
	}

	private void createHeaderRowForMaterialWithoutPrices(Sheet sheet2, CreationHelper helper) {
		// add header to excel
		final Row row = sheet2.createRow((short) 0); // create a new row in your sheet

		row.createCell(0).setCellValue(helper.createRichTextString("PRODUCT_CODE"));
		row.createCell(1).setCellValue(helper.createRichTextString("SUPER_CATEGORIES_CODE"));
		row.createCell(2).setCellValue(helper.createRichTextString("SAP_CONFIGURABLE"));
		row.createCell(3).setCellValue(helper.createRichTextString("PRODUCT_TYPE"));
		row.createCell(4).setCellValue(helper.createRichTextString("MATERIAL_STATUS"));
		row.createCell(5).setCellValue(helper.createRichTextString("HYBRIS_STATUS"));
		row.createCell(6).setCellValue(helper.createRichTextString("SALES_AREA"));
	}


	//AddressWithoutCountries
	private void populateDatainSheetForAddressesWithoutCountries(Sheet sheet, final CreationHelper helper,
			final List<AddressModel> shipTosWithoutCountries, Workbook xlsFile)
	{

		sheet.setDefaultColumnWidth(16);
		String maxRowValue = Config.getParameter("invalid.data.max.row.range");
		int maxLength = Integer.parseInt(maxRowValue);
		int sheetCount = 1;
		// Create Header Row
		createHeaderRowForAddressesWOCountries(sheet, helper);

		int i = 1;
		if (CollectionUtils.isNotEmpty(shipTosWithoutCountries))
		{
			for (final AddressModel address : shipTosWithoutCountries)
			{
				// Start - functionality for dynamically creating new sheet if count exceed limit
				try {
					if (sheet.getLastRowNum() >= maxLength) {
						sheet = xlsFile.createSheet("Address_WO_Country_" + sheetCount);
						LOG.info("New sheet created : " + sheet.getSheetName());
						// Create Header Row
						createHeaderRowForAddressesWOCountries(sheet, helper);
						// initializing the count variables
						i = 1;
						sheetCount += 1;
					}
				}catch (RuntimeException ex) {
					LOG.error("Exception in Address Without Countries at Sheet " + sheet.getSheetName(), ex);
					ex.printStackTrace();
				}
				// End - functionality for dynamically creating new sheet if count exceed limit
				final Row r = sheet.createRow(i);
				r.createCell(0).setCellValue(address.getPk().getLongValueAsString());
				r.createCell(1).setCellValue(address.getSapCustomerID());
				r.createCell(2).setCellValue(address.getPostalcode());
				r.createCell(3).setCellValue(address.getStreetname());
				r.createCell(4).setCellValue(address.getTown());
				r.createCell(5).setCellValue(BooleanUtils.isTrue(address.getShippingAddress()) ? "True" : "False");
				r.createCell(6).setCellValue(BooleanUtils.isTrue(address.getContactAddress()) ? "True" : "False");
				r.createCell(7).setCellValue(address.getSapAddressUsage());

				i++;
			}
		}
	}

	private void createHeaderRowForAddressesWOCountries(Sheet sheet3, CreationHelper helper) {
		// add header to excel
		final Row row = sheet3.createRow((short) 0); // create a new row in your sheet
		row.createCell(0).setCellValue(helper.createRichTextString("PK"));
		row.createCell(1).setCellValue(helper.createRichTextString("SAP Customer ID"));
		row.createCell(2).setCellValue(helper.createRichTextString("Postal Code"));
		row.createCell(3).setCellValue(helper.createRichTextString("Street Name"));
		row.createCell(4).setCellValue(helper.createRichTextString("Town"));
		row.createCell(5).setCellValue(helper.createRichTextString("SHIPPINGADDRESS"));
		row.createCell(6).setCellValue(helper.createRichTextString("CONTACTADDRESS"));
		row.createCell(7).setCellValue(helper.createRichTextString("SapAddressUsage"));
	}


	/*
	 * private void populateDatainSheet(final Sheet sheet, final CreationHelper helper, final List<GEEdgeProductModel> list)
	 * { sheet.setDefaultColumnWidth(16);
	 *
	 * // add header to excel final Row row = sheet.createRow((short) 0); // create a new row in your sheet
	 * row.createCell(0).setCellValue(helper.createRichTextString("Code"));
	 * row.createCell(1).setCellValue(helper.createRichTextString("Last Time Modified"));
	 *
	 * int i = 1; if (CollectionUtils.isNotEmpty(list)) { for (final GEEdgeProductModel model : list) { final Row r =
	 * sheet.createRow(i); r.createCell(0).setCellValue(model.getCode());
	 * r.createCell(1).setCellValue(model.getModifiedtime().toString()); i++; } } }
	 */



	// Need to Modify
	private void populateDatainSheetForMaterialsWithP5Status(Sheet sheet, final CreationHelper helper,
			final List<GEEdgeProductModel> productsWithP5Status, Workbook xlsFile)
	{

		sheet.setDefaultColumnWidth(16);
		String maxRowValue = Config.getParameter("invalid.data.max.row.range");
		int maxLength = Integer.parseInt(maxRowValue);
		int sheetCount = 1;
		// Create Header Row
		createHeaderRowForMaterialsWithP5Status(sheet, helper);

		int i = 1;
		if (CollectionUtils.isNotEmpty(productsWithP5Status))
		{
			for (final GEEdgeProductModel product : productsWithP5Status)
			{
				List<BHGESalesAreaDataModel> salesAreas = (List<BHGESalesAreaDataModel>) product.getSalesAreaData();
				if(!salesAreas.isEmpty())
				{
					for(BHGESalesAreaDataModel salesArea : salesAreas) {
						if (salesArea.getMaterialStatus() != null && !"P5".equalsIgnoreCase(salesArea.getMaterialStatus().getCode())) {
							continue;
						}
						// Start - functionality for dynamically creating new sheet if count exceed limit
						try {
							if (sheet.getLastRowNum() >= maxLength) {
								sheet = xlsFile.createSheet("Material_W_P5_Status_" + sheetCount);
								LOG.info("New sheet created : " + sheet.getSheetName());
								// Create Header Row
								createHeaderRowForMaterialsWithP5Status(sheet, helper);
								// initializing the count variables
								i = 1;
								sheetCount += 1;
							}
						}catch (RuntimeException ex) {
							LOG.error("Exception in Materials With P5 Status at Sheet " + sheet.getSheetName(), ex);
							ex.printStackTrace();
						}
						// End - functionality for dynamically creating new sheet if count exceed limit
						final Row r = sheet.createRow(i);
						r.createCell(0).setCellValue(product.getCode());
						r.createCell(1).setCellValue(product.getCatalogVersion().getCatalog().getName());
						r.createCell(2).setCellValue(salesArea.getSalesOrganization() != null ? salesArea.getSalesOrganization() : "");
						r.createCell(3).setCellValue(salesArea.getMaterialStatus() != null ? salesArea.getMaterialStatus().getCode() : "");
						if (salesArea.getHybrisStatus() != null && salesArea.getHybrisStatus().getCode().equals(HybrisStatus.SELL.getCode())) {
							r.createCell(4).setCellValue(BhgeCoreConstants.Hybris_Status_E1);
						} else if (salesArea.getHybrisStatus() != null && salesArea.getHybrisStatus().getCode().equals(HybrisStatus.CATALOG.getCode())) {
							r.createCell(4).setCellValue(BhgeCoreConstants.Hybris_Status_E3);
						} else if (salesArea.getHybrisStatus() != null && salesArea.getHybrisStatus().getCode().equals(HybrisStatus.OBSOLETE.getCode())) {
							r.createCell(4).setCellValue(BhgeCoreConstants.Hybris_Status_E5);
						} else if (salesArea.getHybrisStatus() != null && salesArea.getHybrisStatus().getCode().equals(HybrisStatus.NOSELL.getCode())) {
							r.createCell(4).setCellValue(BhgeCoreConstants.Hybris_Status_EX);
						}
						i++;
					}
				}
				else{
					// Start - functionality for dynamically creating new sheet if count exceed limit
					try {
						if (sheet.getLastRowNum() >= maxLength) {
							sheet = xlsFile.createSheet("Material_W_P5_Status_" + sheetCount);
							LOG.info("New sheet created : " + sheet.getSheetName());
							// Create Header Row
							createHeaderRowForMaterialsWithP5Status(sheet, helper);
							// initializing the count variables
							i = 1;
							sheetCount += 1;
						}
					}catch (RuntimeException ex) {
						LOG.error("Exception in Materials With P5 Status at Sheet " + sheet.getSheetName(), ex);
						ex.printStackTrace();
					}
					// End - functionality for dynamically creating new sheet if count exceed limit
					final Row r = sheet.createRow(i);
					r.createCell(0).setCellValue(product.getCode());
					r.createCell(1).setCellValue(product.getCatalogVersion().getCatalog().getName());
					r.createCell(2).setCellValue("");
					r.createCell(3).setCellValue("");
					i++;
				}

			}
		}
	}

	private void createHeaderRowForMaterialsWithP5Status(Sheet sheet5, CreationHelper helper) {
		// add header to excel
		final Row row = sheet5.createRow((short) 0); // create a new row in your sheet

		row.createCell(0).setCellValue(helper.createRichTextString("PRODUCT_CODE"));
		row.createCell(1).setCellValue(helper.createRichTextString("PRODUCT_CATALOG"));
		row.createCell(2).setCellValue(helper.createRichTextString("SALES_AREA"));
		row.createCell(3).setCellValue(helper.createRichTextString("MATERIAL_STATUS"));
		row.createCell(4).setCellValue(helper.createRichTextString("HYBRIS_STATUS"));
	}


	private void populateDatainSheetForMaterialsWithType(Sheet sheet, final CreationHelper helper,
			final List<GEEdgeProductModel> productsWithType, Workbook xlsFile)
	{

		sheet.setDefaultColumnWidth(16);
		String maxRowValue = Config.getParameter("invalid.data.max.row.range");
		int maxLength = Integer.parseInt(maxRowValue);
		int sheetCount = 1;
		// Create Header Row
		createHeaderRowForMaterialsWithType(sheet, helper);

		int i = 1;
		if (CollectionUtils.isNotEmpty(productsWithType))
		{
			for (final GEEdgeProductModel product : productsWithType)
			{
				List<BHGESalesAreaDataModel> salesAreas = (List<BHGESalesAreaDataModel>) product.getSalesAreaData();
				if(!salesAreas.isEmpty())
				{
					for(BHGESalesAreaDataModel salesArea : salesAreas) {
						// Start - functionality for dynamically creating new sheet if count exceed limit
						try {
							if (sheet.getLastRowNum() >= maxLength) {
								sheet = xlsFile.createSheet("Material_W_Type_" + sheetCount);
								LOG.info("New sheet created : " + sheet.getSheetName());
								// Create Header Row
								createHeaderRowForMaterialsWithType(sheet, helper);
								// initializing the count variables
								i = 1;
								sheetCount += 1;
							}
						}catch (RuntimeException ex) {
							LOG.error("Exception in Materials With Type at Sheet " + sheet.getSheetName(), ex);
							ex.printStackTrace();
						}
						// End - functionality for dynamically creating new sheet if count exceed limit
						final Row r = sheet.createRow(i);
						r.createCell(0).setCellValue(product.getCode());
						r.createCell(1).setCellValue(product.getProductType().getCode());
						r.createCell(2).setCellValue(salesArea.getSalesOrganization() != null ? salesArea.getSalesOrganization() : "");
						r.createCell(3).setCellValue(salesArea.getHybrisStatus() != null ? salesArea.getHybrisStatus().getCode() : "");
   					r.createCell(4).setCellValue(salesArea.getMaterialStatus() != null ? salesArea.getMaterialStatus().getCode() : "");
   					i++;
					}
				}
				else{
					// Start - functionality for dynamically creating new sheet if count exceed limit
					try {
						if (sheet.getLastRowNum() >= maxLength) {
							sheet = xlsFile.createSheet("Material_W_Type_" + sheetCount);
							LOG.info("New sheet created : " + sheet.getSheetName());
							// Create Header Row
							createHeaderRowForMaterialsWithType(sheet, helper);
							// initializing the count variables
							i = 1;
							sheetCount += 1;
						}
					}catch (RuntimeException ex) {
						LOG.error("Exception in Materials With Type at Sheet " + sheet.getSheetName(), ex);
						ex.printStackTrace();
					}
					// End - functionality for dynamically creating new sheet if count exceed limit
					final Row r = sheet.createRow(i);
					r.createCell(0).setCellValue(product.getCode());
					r.createCell(1).setCellValue(product.getProductType().getCode());
					r.createCell(2).setCellValue("");
					r.createCell(3).setCellValue("");
					r.createCell(4).setCellValue("");
					i++;
				}
			}
		}
	}

	private void createHeaderRowForMaterialsWithType(Sheet sheet7, CreationHelper helper) {
		// add header to excel
		final Row row = sheet7.createRow((short) 0); // create a new row in your sheet

		row.createCell(0).setCellValue(helper.createRichTextString("PRODUCT_CODE"));
		row.createCell(1).setCellValue(helper.createRichTextString("PRODUCT_TYPE"));
		row.createCell(2).setCellValue(helper.createRichTextString("SALES_AREA"));
		row.createCell(3).setCellValue(helper.createRichTextString("HYBRIS_STATUS"));
		row.createCell(4).setCellValue(helper.createRichTextString("MATERIAL_STATUS"));
	}


	// Need to modify
	@SuppressWarnings("unused")
	private void populateDatainSheetForCategoriesWithoutMaterialAssigned(Sheet sheet, final CreationHelper helper,
			final List<CategoryModel> categoriesWithoutProductAssigned, Workbook xlsFile)
	{
		sheet.setDefaultColumnWidth(16);
		String maxRowValue = Config.getParameter("invalid.data.max.row.range");
		int maxLength = Integer.parseInt(maxRowValue);
		int sheetCount = 1;
		// Create Header Row
		createHeaderRowForCategoriesWithoutMaterialAssigned(sheet, helper);

		int i = 1;
		if (CollectionUtils.isNotEmpty(categoriesWithoutProductAssigned))
		{
			for (final CategoryModel product : categoriesWithoutProductAssigned)
			{
				// Start - functionality for dynamically creating new sheet if count exceed limit
				try {
					if (sheet.getLastRowNum() >= maxLength) {
						sheet = xlsFile.createSheet("Category_WO_Product_" + sheetCount);
						LOG.info("New sheet created : " + sheet.getSheetName());
						// Create Header Row
						createHeaderRowForCategoriesWithoutMaterialAssigned(sheet, helper);
						// initializing the count variables
						i = 1;
						sheetCount += 1;
					}
				}catch (RuntimeException ex) {
					LOG.error("Exception in Categories Without Product Assigned at Sheet " + sheet.getSheetName(), ex);
					ex.printStackTrace();
				}
				// End - functionality for dynamically creating new sheet if count exceed limit
				final Row r = sheet.createRow(i);

				final List<CategoryModel> category = product.getSupercategories();
				final StringBuffer sf = new StringBuffer();
				for (final CategoryModel cmodel : category)
				{
					sf.append(cmodel.getCode());
					sf.append(",");
				}

				r.createCell(0).setCellValue(sf.toString());

				i++;

			}
		}
	}

	private void createHeaderRowForCategoriesWithoutMaterialAssigned(Sheet sheet8, CreationHelper helper) {
		// add header to excel
		final Row row = sheet8.createRow((short) 0); // create a new row in your sheet
		row.createCell(0).setCellValue(helper.createRichTextString("SUPER_CATEGORIES_CODE"));
	}

	@SuppressWarnings("unused")
	private void populateDatainSheetForB2bUnitsWithoutAddressAssigned(Sheet sheet, final CreationHelper helper,
																	  final List<B2BUnitModel> b2bunitWithoutAddressAssigned, Workbook xlsFile)
	{
		sheet.setDefaultColumnWidth(16);
		String maxRowValue = Config.getParameter("invalid.data.max.row.range");
		int maxLength = Integer.parseInt(maxRowValue);
		int sheetCount = 1;
		// Create Header Row
		createHeaderRowForB2bUnitsWithoutAddressAssigned(sheet, helper);

		LOG.info("Inside populateDatainSheetForB2bUnitsWithoutAddressAssigned method");
		LOG.info("Total B2B Units " + b2bunitWithoutAddressAssigned.size());

		int i = 1;
		if (CollectionUtils.isNotEmpty(b2bunitWithoutAddressAssigned))
		{
			for (final B2BUnitModel b2bUnit : b2bunitWithoutAddressAssigned)
			{
				boolean hasShippingAddress = false;
				// Start - functionality for dynamically creating new sheet if count exceed limit
				try {
					if (sheet.getLastRowNum() >= maxLength) {
						sheet = xlsFile.createSheet("Customer_WO_Address_" + sheetCount);
						LOG.info("New sheet created : " + sheet.getSheetName());
						// Create Header Row
						createHeaderRowForB2bUnitsWithoutAddressAssigned(sheet, helper);
						// initializing the count variables
						i = 1;
						sheetCount += 1;
					}
				}catch (RuntimeException ex) {
					LOG.error("Exception in Customer Accounts without Addresses at Sheet " + sheet.getSheetName(), ex);
					ex.printStackTrace();
				}
				// End - functionality for dynamically creating new sheet if count exceed limit
				for (final AddressModel address : b2bUnit.getAddresses())
				{
					if (address.getShippingAddress())
					{
						hasShippingAddress = true;
						break;
					}
				}
				if (!hasShippingAddress)
				{
					LOG.info("Inside populateDatainSheetForB2bUnitsWithoutAddressAssigned method hasShippingAddress check");
					final Row r = sheet.createRow(i);
					r.createCell(0).setCellValue(b2bUnit.getUid());
					r.createCell(1).setCellValue(b2bUnit.getName());
					r.createCell(2).setCellValue(b2bUnit.getAccountGroup());
					final String[] soldToArray = b2bUnit.getUid().split("_");
					final String soldTo = soldToArray[0];
					final B2BUnitModel customer = bhgeB2BOrderDao.getSoldToForB2BUnit(soldTo);
					r.createCell(3).setCellValue(customer.getEcommerceFlag());
					i++;
				}
			}
		}
	}

	private void createHeaderRowForB2bUnitsWithoutAddressAssigned(Sheet sheet8, CreationHelper helper) {
		// add header to excel
		final Row row = sheet8.createRow((short) 0); // create a new row in your sheet
		row.createCell(0).setCellValue(helper.createRichTextString("Customer Account Number"));
		row.createCell(1).setCellValue(helper.createRichTextString("Customer Account Name"));
		row.createCell(2).setCellValue(helper.createRichTextString("Account Group"));
		row.createCell(3).setCellValue(helper.createRichTextString("Ecommerce Flag"));
	}
	
	@Override
	public List<OrderEntryModel> getConfigAttachmentEntries() {
		return bhgeB2BOrderDao.getConfigAttachmentEntries();
	}

    @Override
    public void deleteAllCarts(UserModel user, String b2bUnit, String salesOrg, String commerceType) {
       bhgeB2BOrderDao.deleteAllCarts(user,b2bUnit,salesOrg,commerceType);
    }

    /*
	 * (non-Javadoc)
	 *
	 * @see com.hybris.ge.edge.core.order.service.GEEdgeB2BOrderService#getRFCErrorList()
	 */
	@Override
	public List<BHGERfcCallErrorModel> getRFCErrorList()
	{
		return bhgeB2BOrderDao.getRFCErrorList();
	}

	/**
	 * Get the Cache key for the Order tracking
	 *
	 * @param soldto
	 * @param orderType
	 * @return
	 */
	protected String getKey(final String soldto, final String orderType)
	{
		if (StringUtils.isNotBlank(soldto) && StringUtils.isNotBlank(orderType))
		{
			return soldto + "-" + orderType;
		}
		return null;
	}

	public CacheController getCacheController()
	{
		return cacheController;
	}

	public void setCacheController(final CacheController cacheController)
	{
		this.cacheController = cacheController;
	}


	@Override
	public CartModel getExistingCartForSoldTo(final UserModel userModel)
	{
		return bhgeB2BOrderDao.getExistingCartForSoldTo(userModel);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.order.service.BHGEB2BOrderService#fetchOrderForCode(java.lang.String)
	 */
	@Override
	public OrderModel fetchOrderForCode(final String orderCode)
	{
		return bhgeB2BOrderDao.fetchOrderByCode(orderCode);
	}

	/**
	 * TA907173
	 * @param paymentTerm
	 * @Return PaymenttermModel
	 */
	@Override
	public PaymenttermModel getCCPaymentTerms(String paymentTerm) {
		return bhgeB2BOrderDao.getCCPaymentTerm(paymentTerm);
	}

	@Override
	public List<OrderModel> getNotProcessedOrders(final String fromDate) {
		return bhgeB2BOrderDao.getNotProcessedOrders(fromDate);
	}

	public List<SubmitOrderStrategy> getSubmitOrderStrategies() {
		return submitOrderStrategies;
	}

	public void setSubmitOrderStrategies(List<SubmitOrderStrategy> submitOrderStrategies) {
		this.submitOrderStrategies = submitOrderStrategies;
		super.setSubmitOrderStrategies(submitOrderStrategies);
	}
	
	public List<OrderModel> getOrderByStatus(String fromDate) {
		return bhgeB2BOrderDao.getOrderByStatus(fromDate);
	}

}
