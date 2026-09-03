/**
 *
 */
package com.bhge.facades.mysite.impl;

import com.bhge.integration.order.history.service.BHGEOrderHistoryService;
import com.bhge.integration.order.history.service.impl.DefaultBHGEOrderHistoryService;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.search.data.SearchQueryData;
import de.hybris.platform.commercefacades.search.data.SearchStateData;
import de.hybris.platform.commerceservices.search.facetdata.ProductSearchPageData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.Registry;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.regioncache.CacheController;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.key.CacheKey;
import de.hybris.platform.regioncache.region.CacheRegion;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.session.SessionService;
import java.io.IOException;
import org.xml.sax.SAXException;
import java.text.ParseException;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.MapUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.calportal.service.CalPortalService;
import com.bhge.core.category.dao.DefaultBHGECategoryDao;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.data.AddToMSEInputData;
import com.bhge.core.data.AddToMSEInputList;
import com.bhge.core.data.AddToMSEOutputData;
import com.bhge.core.data.EquipmentData;
import com.bhge.core.data.ManElDataCount;
import com.bhge.core.data.MelDataCount;
import com.bhge.core.data.ServiceHistoryDetails;
import com.bhge.core.mysite.service.MySiteEquipmentService;
import com.bhge.core.regioncache.MSECacheKey;
import com.bhge.facades.constants.BhgeFacadesConstants;
import com.bhge.facades.mysite.MySiteEquipmentFacade;
import com.bhge.facades.product.data.BrandNameData;
import com.bhge.facades.search.BHGEProductSearchFacade;


/**
 * @author 1423683
 *
 */
public class DefaultMySiteEquipmentFacade implements MySiteEquipmentFacade
{
	@Resource(name = "mySiteEquipmentService")
	private MySiteEquipmentService mySiteEquipmentService;

	@Resource(name = "productFacade")
	private ProductFacade productFacade;

	@Resource(name = "sessionService")
	private SessionService sessionService;
	
	@Resource(name = "calPortalService")
	private CalPortalService calPortalService;


	public BHGEProductSearchFacade<ProductData> getProductSearchFacade()
	{
		return productSearchFacade;
	}


	public void setProductSearchFacade(final BHGEProductSearchFacade<ProductData> productSearchFacade)
	{
		this.productSearchFacade = productSearchFacade;
	}

	public ProductService getProductService()
	{
		return productService;
	}


	public void setProductService(final ProductService productService)
	{
		this.productService = productService;
	}


	public Converter<ProductModel, ProductData> getProductConverter()
	{
		return productConverter;
	}


	public void setProductConverter(final Converter<ProductModel, ProductData> productConverter)
	{
		this.productConverter = productConverter;
	}

	@Resource(name = "mseCacheRegion")
	private CacheRegion mseCacheRegion;

	@SuppressWarnings("rawtypes")
	@Resource(name = "mseCacheValueLoader")
	private CacheValueLoader mseCacheValueLoader;

	@Resource(name = "cacheController")
	private CacheController cacheController;

	@Resource(name = "bhgeProductSearchFacade")
	private BHGEProductSearchFacade<ProductData> productSearchFacade;

	@Resource(name = "bhgeCategoryDao")
	private DefaultBHGECategoryDao bhgeCategoryDao;

	@Resource(name = "productService")
	ProductService productService;

	@Resource(name = "productConverter")
	private Converter<ProductModel, ProductData> productConverter;

	@Resource(name = "bhgeOrderHistoryServiceImpl")
	private BHGEOrderHistoryService bhgeOrderHistoryService;


	private static final Logger LOG = Logger.getLogger(DefaultMySiteEquipmentFacade.class);
	public static final String IMAGEFORMAT = "thumbnail";
	public static final String NOIMAGEVALUE = "/_ui/responsive/theme-lambda/images/missing_product_EN_300x300.jpg";
	public static final int MAX_PAGE_LIMIT = 100;
	public static final String MAN_EL_FLAGTOCHECK = "itemsNotInMEL";
	public static final String TOTAL_ITEMS = "totalItems";
	public static final String ACTIVE_FLAG = "active";
	public static final String ITEMS_SERVICE_DUE_1_MONTH = "itemsDueServicein1Month";
	public static final String ITEMS_SERVICE_DUE_1_QUARTER = "itemsDueServiceinQuarter";
	public static final String ITEMS_SERVICE_WAS_DUE = "itemsServiceWasDue";
	public static final String ARCHIVED_ITEMS = "archivedItems";
	public static final String PINNED_ITEMS = "pinnedItems";
	public static final String PENDING_RMA = "pendingRMA";
	public static final String INACTIVE_FLAG = "inactive";
	public static final String DEFAULT = "default";
	public static final String END_CUSTOMER = "endCustomer";
	public static final String PRODUCT = "product";

	public enum ShowMode
	{
		// Constant names cannot be changed due to their usage in dependant extensions, thus nosonar
		Page, // NOSONAR
		All // NOSONAR
	}



	@Override
	public EquipmentData getMSECacheData(final String customerNumber, final String mANorMELflag, final boolean refreshFlag,
			final String fromDate, final String toDate, final String endCustomerID)
	{
		EquipmentData equipmentData = new EquipmentData();
		equipmentData.setEquipmentData(new ArrayList<AddToMSEInputData>());

		LOG.info("Inside MSE CACHE FACADE " + customerNumber);


		if (StringUtils.isNotBlank(customerNumber) && StringUtils.isNotBlank(mANorMELflag))
		{
			final Map<String, String> key = getKey(customerNumber, mANorMELflag, fromDate, toDate, endCustomerID);
			final CacheKey cacheKey = new MSECacheKey(key, Registry.getCurrentTenant().getTenantID());

			if (refreshFlag == true)
			{
				mseCacheRegion.invalidate(cacheKey, false);
			}


			equipmentData = (EquipmentData) mseCacheRegion.getWithLoader(cacheKey, mseCacheValueLoader);

			if (equipmentData != null)
			{
				if (CollectionUtils.isEmpty(equipmentData.getEquipmentData()))
				{
					if (equipmentData.isTimeoutException() == true)
					{
						LOG.info("----------------------- TIMEOUT EXCEPTION------------------------");
						mseCacheRegion.invalidate(cacheKey, false);
						equipmentData.setTimeoutException(true);
						equipmentData.setManElPageCountData(mySiteEquipmentService.prepareCountOfMANElEquipmentData(null));
						equipmentData.setMelPageCountData(mySiteEquipmentService.prepareCountOfMElEquipmentData(null));
					}
					else if (equipmentData.isExecutionException() == true)
					{
						LOG.info("----------------------- EXECUTION EXCEPTION------------------------");
						mseCacheRegion.invalidate(cacheKey, false);
						equipmentData.setExecutionException(true);
						equipmentData.setManElPageCountData(mySiteEquipmentService.prepareCountOfMANElEquipmentData(null));
						equipmentData.setMelPageCountData(mySiteEquipmentService.prepareCountOfMElEquipmentData(null));
					}
					else if (equipmentData.isInterruptedException() == true)
					{
						LOG.info("----------------------- INTERRUPTED EXCEPTION ------------------------");
						mseCacheRegion.invalidate(cacheKey, false);
						equipmentData.setInterruptedException(true);
						equipmentData.setManElPageCountData(mySiteEquipmentService.prepareCountOfMANElEquipmentData(null));
						equipmentData.setMelPageCountData(mySiteEquipmentService.prepareCountOfMElEquipmentData(null));
					}
					else
					{
						LOG.info("----------------------- NO DATA FOUND ------------------------");
						mseCacheRegion.invalidate(cacheKey, false);
						equipmentData.setNotFoundException(true);
						equipmentData.setManElPageCountData(mySiteEquipmentService.prepareCountOfMANElEquipmentData(null));
						equipmentData.setMelPageCountData(mySiteEquipmentService.prepareCountOfMElEquipmentData(null));
					}
				}
			}
		}

		return equipmentData;

	}

	/**
	 * Populate key value for cache method
	 *
	 * @param custNumber
	 * @param MANorMELflag
	 * @param fromDate
	 * @param toDate
	 * @return
	 */
	private Map<String, String> getKey(final String custNumber, final String MANorMELflag, final String fromDate,
			final String toDate, final String endCustomerID)
	{
		final Map<String, String> keySet = new HashMap<String, String>();
		if (StringUtils.isNotBlank(custNumber) && StringUtils.isNotBlank(MANorMELflag))
		{
			keySet.put(BhgeFacadesConstants.CUSTOMER_NUMBER, custNumber);
			keySet.put(BhgeFacadesConstants.MAN_MEL_FLAG, MANorMELflag);
			keySet.put(BhgeFacadesConstants.FROM_DATE, fromDate);
			keySet.put(BhgeFacadesConstants.TO_DATE, toDate);
			keySet.put(BhgeFacadesConstants.ENDCUSTOMERID, endCustomerID);
		}
		return keySet;
	}



	@Override
	public boolean clearMSEDataFromCache(final String customerNumber, final String mANorMELflag, final String fromDate,
			final String toDate, final String endCustomerID)
	{
		final Map<String, String> key = getKey(customerNumber, mANorMELflag, fromDate, toDate, endCustomerID);
		final CacheKey cacheKey = new MSECacheKey(key, Registry.getCurrentTenant().getTenantID());
		mseCacheRegion.invalidate(cacheKey, false);
		return true;
	}

	/**
	 * Handling search parameter for MANEL page
	 *
	 * @param equipmentData
	 * @param searchBy
	 * @param equipmentSearchedData
	 * @return
	 * @throws ParseException
	 */
	private EquipmentData applySearchForMANEL(final EquipmentData equipmentData, final String searchBy,
			final EquipmentData equipmentSearchedData) throws ParseException
	{
		LOG.info("**************************************** SEARCH AFTER FILTER CALL*************************************");
		LOG.info("Search term for MEL page is " + searchBy);
		for (final AddToMSEInputData mseData : equipmentData.getEquipmentData())
		{
			boolean isSearchedByPartNumber = false;
			boolean isSearchedBySerialNumber = false;

			//Search by Part Number
			isSearchedByPartNumber = getSearchedDataWithPartNumber(mseData, searchBy.trim());

			//Search by SerialNumber
			isSearchedBySerialNumber = getSearchedDataWithSerialNumber(mseData, searchBy.trim());

			if (isSearchedByPartNumber || isSearchedBySerialNumber)
			{
				equipmentSearchedData.getEquipmentData().add(mseData);
			}
		}
		return equipmentSearchedData;
	}



	/**
	 * Filters data set based on search parameter
	 *
	 * @param equipmentFilteredData
	 * @param searchBy
	 * @param groupBy
	 * @param filterBy
	 * @return
	 */
	private EquipmentData applySearchForMEL(final EquipmentData equipmentData, final String searchBy,
			final EquipmentData equipmentSearchedData, final String brFilter) throws ParseException
	{
		LOG.info("**************************************** SEARCH AFTER FILTER CALL*************************************");
		LOG.info("Search term for MEL page is " + searchBy);
		//If search and br filters are empty, return the total list
		if (StringUtils.isBlank(searchBy) && StringUtils.isBlank(brFilter))
		{
			return equipmentData;
		}
		for (final AddToMSEInputData mseData : equipmentData.getEquipmentData())
		{
			boolean isSearchedByPartNumber = false;
			boolean isSearchedByPartName = false;
			boolean isSearchedBySerialNumber = false;
			boolean isSearchedByEndCustomerDetails = false;
			boolean isSearchedByRMANumber = false;
			boolean isSearchedByLocation = false;
			final boolean isFilteredByLastServiceDate = false;
			boolean buyOrReturn = StringUtils.isNotBlank(brFilter) ? false : true;

			// Applying buy or return filter
			if (!buyOrReturn)
			{
				if (mseData.getProductData() != null && mseData.getProductData().getProductAccessData() != null)
				{
					if (brFilter.equalsIgnoreCase(BhgeFacadesConstants.BUY)
							&& mseData.getProductData().getProductAccessData().isIsBuy())
					{
						buyOrReturn = true;
					}
					else if (brFilter.equalsIgnoreCase(BhgeFacadesConstants.RETURN)
							&& mseData.getProductData().getProductAccessData().isIsService())
					{
						buyOrReturn = true;
					}

				}
			}
			if (StringUtils.isNotBlank(searchBy))
			{
				//Search by Part Number
				isSearchedByPartNumber = getSearchedDataWithPartNumber(mseData, searchBy.trim());

				//Search by Part Name
				isSearchedByPartName = getSearchedDataWithPartName(mseData, searchBy.trim());

				//Search by SerialNumber
				isSearchedBySerialNumber = getSearchedDataWithSerialNumber(mseData, searchBy.trim());

				//Search by EndCustomerDetails
				isSearchedByEndCustomerDetails = getSearchedDataWithEndCustomerDetails(mseData, searchBy.trim());

				//Search by RMANumber
				isSearchedByRMANumber = getSearchedDataWithRMANumber(mseData, searchBy.trim());

				//Search by Location
				isSearchedByLocation = getSearchedDataWithLocation(mseData, searchBy.trim());

				if (buyOrReturn && (isSearchedByPartNumber || isSearchedByPartName || isSearchedBySerialNumber
						|| isSearchedByEndCustomerDetails || isSearchedByLocation || isSearchedByRMANumber))
				{
					equipmentSearchedData.getEquipmentData().add(mseData);
				}
			}
			else if (buyOrReturn)
			{
				equipmentSearchedData.getEquipmentData().add(mseData);
			}
		}
		return equipmentSearchedData;
	}


	/**
	 * Currently not in use. Last service date filter has been removed as on 23/03/2020 Checks if date filter is enabled
	 *
	 * @param equipmentSearchedData
	 * @param isDateFilterAdded
	 * @param mseData
	 * @param isFilteredByLastServiceDate
	 */
	private void checkForDateFilter(final EquipmentData equipmentSearchedData, final boolean isDateFilterAdded,
			final AddToMSEInputData mseData, final boolean isFilteredByLastServiceDate)
	{
		if (isDateFilterAdded)
		{
			if (isFilteredByLastServiceDate)
			{
				equipmentSearchedData.getEquipmentData().add(mseData);
			}
		}
		else
		{
			equipmentSearchedData.getEquipmentData().add(mseData);
		}
	}



	private boolean getSearchedDataWithRMANumber(final AddToMSEInputData mseData, final String searchValue)
	{
		if (mseData.getServiceHistoryDetails() != null && mseData.getServiceHistoryDetails().size() > 0)
		{
			for (final ServiceHistoryDetails serviceHistory : mseData.getServiceHistoryDetails())
			{
				if (serviceHistory.getNotification().contains(searchValue))
				{
					return true;
				}
				return false;
			}
		}
		return false;
	}


	private boolean getSearchedDataWithLocation(final AddToMSEInputData mseData, final String searchValue)
	{
		if (mseData.getLocation().contains(searchValue))
		{
			return true;
		}
		return false;
	}


	private boolean getSearchedDataWithEndCustomerDetails(final AddToMSEInputData mseData, final String searchValue)
	{
		if (mseData.getEndCustomerName().contains(searchValue))
		{
			return true;
		}
		return false;
	}


	private boolean getSearchedDataWithSerialNumber(final AddToMSEInputData mseData, final String searchValue)
	{
		if (mseData.getSerialNumber().contains(searchValue))
		{
			return true;
		}
		return false;
	}


	private boolean getSearchedDataWithPartName(final AddToMSEInputData mseData, final String searchValue)
	{
		if (mseData.getPartName().contains(searchValue))
		{
			return true;
		}
		return false;
	}


	private boolean getSearchedDataWithPartNumber(final AddToMSEInputData mseData, final String searchValue)
	{
		if (mseData.getPartNumber().contains(searchValue))
		{
			return true;
		}
		return false;
	}

	/**
	 * Applies top filters and date filter with search
	 *
	 * @param equipmentData
	 * @param filterBy
	 * @param mANorMELFlag
	 * @param fromDate
	 * @param toDate
	 * @param searchBy
	 * @param groupBy
	 * @return
	 * @throws ParseException
	 */
	private EquipmentData applyFilter(final EquipmentData equipmentData, final String filterBy, final String mANorMELFlag,
			final String searchBy, final String groupBy, final String brFilter, final List<String> productLinesSelected)
			throws ParseException
	{
		EquipmentData equipmentFilteredData = new EquipmentData();
		equipmentFilteredData.setEquipmentData(new ArrayList<AddToMSEInputData>());
		LOG.info("================Inside filterby() method of DefaultMySiteEquipmentFacade==============");
		LOG.info("Filter value for MSE is " + filterBy);
		if (CollectionUtils.isNotEmpty(equipmentData.getEquipmentData()))
		{
			//Filter for MAN data - Dashboard(Count) filter
			if (mANorMELFlag.equals(BhgeFacadesConstants.CP_LIST))
			{
				if (StringUtils.isNotBlank(searchBy))
				{
					// Apply search for MANEL data
					equipmentFilteredData = applySearchForMANEL(equipmentData, searchBy, equipmentFilteredData);
				}
				else
				{
					equipmentFilteredData = equipmentData;
				}
				//Calculate record count
				ManElDataCount manElDataCount = new ManElDataCount();
				manElDataCount = mySiteEquipmentService.prepareCountOfMANElEquipmentData(equipmentFilteredData.getEquipmentData());
				equipmentFilteredData = filterListforMANELPage(equipmentFilteredData, filterBy);
				equipmentFilteredData.setManElPageCountData(manElDataCount);
			}
			//Filter for MEL data
			else if (mANorMELFlag.equals(BhgeFacadesConstants.CP_MYLIST) || mANorMELFlag.equals(BhgeFacadesConstants.CP_ALL))
			{
				// Apply search and date filter on filtered data
				equipmentFilteredData = applySearchForMEL(equipmentData, searchBy, equipmentFilteredData, brFilter);

				//Calculate record count
				MelDataCount melDataCount = new MelDataCount();
				MelDataCount afterFilterMelDataCount = new MelDataCount();
				Map<String, Integer> totalCount = new HashMap<String, Integer>();
				Map<String, Integer> filteredCount = new HashMap<String, Integer>();
				Map<String, Integer> endCustomerCount = new HashMap<String, Integer>();
				melDataCount = mySiteEquipmentService.prepareCountOfMElEquipmentData(equipmentFilteredData.getEquipmentData());
				//count before filters
				totalCount = getPartCount(equipmentFilteredData.getEquipmentData());

				//Apply top filters along with Product lines handling
				equipmentFilteredData = filterListForMELPage(equipmentFilteredData, filterBy, productLinesSelected);

				// After Filter count
				if(CollectionUtils.isNotEmpty(productLinesSelected)){
					melDataCount = mySiteEquipmentService.prepareCountOfMElEquipmentData(equipmentFilteredData.getEquipmentData());
				}
				afterFilterMelDataCount = mySiteEquipmentService.prepareCountOfMElEquipmentData(equipmentFilteredData.getEquipmentData());

				// Setting the Archive and Total Count
				afterFilterMelDataCount.setArchivedItems(melDataCount.getArchivedItems());
				afterFilterMelDataCount.setTotalItems(melDataCount.getTotalItems());
				afterFilterMelDataCount.setRmaItems(melDataCount.getRmaItems());
				
				if (!filterBy.equalsIgnoreCase(PINNED_ITEMS)) {
				   afterFilterMelDataCount.setPinnedItems(melDataCount.getPinnedItems());
				}
				if (filterBy.equalsIgnoreCase(ARCHIVED_ITEMS)) {
					afterFilterMelDataCount.setItemsDueServiceinQuarter(melDataCount.getItemsDueServiceinQuarter());
				}
				
				filteredCount = getPartCount(equipmentFilteredData.getEquipmentData());
				endCustomerCount = getEndCustomerCount(equipmentFilteredData.getEquipmentData());
				equipmentFilteredData.setEquipmentPartCount(totalCount);
				equipmentFilteredData.setEquipmentFilteredPartCount(filteredCount);
				equipmentFilteredData.setEquipmentEndCustomerCount(endCustomerCount);
				equipmentFilteredData.setMelPageCountData(afterFilterMelDataCount);
			}
		}
		return equipmentFilteredData;
	}


	/**
	 * @param equipmentData
	 * @param filterBy
	 * @param fromDate
	 * @param toDate
	 * @param equipmentFilteredData
	 * @throws ParseException
	 */
	private EquipmentData filterListForMELPage(final EquipmentData equipmentSearchedData, final String filterBy,
			final List<String> productLinesSelected)
	{
		final EquipmentData equipmentFilteredData = new EquipmentData();
		equipmentFilteredData.setEquipmentData(new ArrayList<AddToMSEInputData>());
		final Calendar currentCalendar = Calendar.getInstance();
		final Date currentDate = currentCalendar.getTime();
		final Calendar post2MonthCalendar = Calendar.getInstance();
		post2MonthCalendar.add(Calendar.MONTH, 3);
		final Date post2MonthDate = post2MonthCalendar.getTime();
		final Calendar postOneMonthCalendar = Calendar.getInstance();
		postOneMonthCalendar.add(Calendar.MONTH, 2);
		final Date post1MonthDate = postOneMonthCalendar.getTime();
		// Creating a Set for holding unique product lines
		final Set<String> productLineSet = new HashSet<String>();
		// Creating the product Line list to send it to storefront
		List<String> productLineList = null;

		for (final AddToMSEInputData melData : equipmentSearchedData.getEquipmentData())
		{

			boolean isNotArchived = false;
			boolean serviceDueIn1Month = false;
			boolean serviceDueInQuarter = false;
			boolean isArchived = false;
			boolean serviceWasDue = false;
			//boolean isPresentInMEL = true;
			boolean isProductLineAvailable = false;
			boolean isPinned = false;
			boolean isPendingRMA = false;

			// Getting the product line of Item
			final String mseProductLine = getProductLineFromHierarchy(melData);

			// Checking for selected product line filters
			if (CollectionUtils.isEmpty(productLinesSelected) || productLinesSelected.contains(mseProductLine))
			{
				isProductLineAvailable = true;
			}

			if (StringUtils.isNotBlank(melData.getStatus()) && melData.getStatus().equalsIgnoreCase(ACTIVE_FLAG))
			{
				//Filter MEL by totalItems
				if (filterBy.equalsIgnoreCase(TOTAL_ITEMS))
				{
					isNotArchived = true;
				}
				//Filter MEL by itemsDueServiceinQuarter
				else if (filterBy.equalsIgnoreCase(ITEMS_SERVICE_DUE_1_QUARTER) && melData.getPinned() != null && melData.getPinned().equalsIgnoreCase(BhgeCoreConstants.MSE_FAV_FLAG_VALUE))
				{
					if (melData.getServiceDueDate() != null)
					{
						// Service Past due
						if (melData.getServiceDueDate().before(currentDate))
						{
							serviceWasDue = true;
						}

						// Service due in 1 month
						final Calendar serviceDueCalendar = Calendar.getInstance();
						serviceDueCalendar.setTime(melData.getServiceDueDate());
						if ((melData.getServiceDueDate().before(post1MonthDate) && melData.getServiceDueDate().after(currentDate))
								|| (serviceDueCalendar.get(Calendar.ERA) == currentCalendar.get(Calendar.ERA)
								&& serviceDueCalendar.get(Calendar.YEAR) == currentCalendar.get(Calendar.YEAR)
								&& serviceDueCalendar.get(Calendar.DAY_OF_YEAR) == currentCalendar.get(Calendar.DAY_OF_YEAR)))
						{
							serviceDueIn1Month = true;
						}

						// Service due in 3 month
						if (melData.getServiceDueDate().before(post2MonthDate) && melData.getServiceDueDate().after(post1MonthDate))
						{
							serviceDueInQuarter = true;
						}
					}
				}
			}
			else if (melData.getStatus().equalsIgnoreCase(INACTIVE_FLAG) || StringUtils.isBlank(melData.getStatus()))
			{
				//Filter MEL by archivedItems
				if (filterBy.equalsIgnoreCase(ARCHIVED_ITEMS))
				{
					isArchived = true;
				}
			}

			// filter for pinned items
			if (filterBy.equalsIgnoreCase(PINNED_ITEMS))
			{
				if (melData.getPinned() != null && melData.getPinned().equalsIgnoreCase(BhgeCoreConstants.MSE_FAV_FLAG_VALUE))
				{
					isPinned = true;
				}
			}
			// filter for pendingRMA
			
			if (filterBy.equalsIgnoreCase(PENDING_RMA))
			{
				if (melData.getRmaStatus() != null && melData.getRmaStatus().equalsIgnoreCase(BhgeCoreConstants.MSE_RMA_FLAG_VALUE))
				{
					isPendingRMA = true;
				}
			}

			if (isProductLineAvailable
					&& (isNotArchived || serviceDueIn1Month || serviceDueInQuarter || isArchived || serviceWasDue || isPinned || isPendingRMA))
			{
				equipmentFilteredData.getEquipmentData().add(melData);
			}
            // Adding the available product line to set variable
            if (null != mseProductLine)
            {
                productLineSet.add(mseProductLine);
            }
		}
		// setting the product line list to Equipmentdata object
		try
		{
			if (CollectionUtils.isNotEmpty(productLineSet))
			{
				productLineList = new ArrayList<String>(productLineSet); // Setting the product lines of available items
			}
			equipmentFilteredData.setProductLines(productLineList);
		}
		catch (final RuntimeException re)
		{
			LOG.error("Exception in DefaultMySiteEquipmentFacade - applySearchForMEL while setting Product Lines");
		}
		return equipmentFilteredData;
	}

	/**
	 * @param mseData
	 * @return
	 */
	private String getProductLineFromHierarchy(final AddToMSEInputData mseData)
	{
		String productLine = null;
		if (null != mseData)
		{
			try
			{
				if (bhgeOrderHistoryService instanceof DefaultBHGEOrderHistoryService)
				{
					// Casting to DefaultBHGEOrderHistoryService to get product line
					final DefaultBHGEOrderHistoryService defaultBHGEOrderHistoryService = (DefaultBHGEOrderHistoryService) bhgeOrderHistoryService;
					// Getting the productline based on the Product Hierarchy
					productLine = defaultBHGEOrderHistoryService.defineProductLine(mseData.getProductHierarchy());
				}
			}
			catch (final RuntimeException re)
			{
				LOG.error("Exception in DefaultMySiteEquipmentFacade - getProductLineFromHierarchy for Item : "
						+ mseData.getPartNumber());
			}
		}
		return productLine;
	}

	/**
	 * Filters list for MANEL page
	 *
	 * @param equipmentData
	 * @param filterBy
	 * @param equipmentFilteredData
	 */
	private EquipmentData filterListforMANELPage(final EquipmentData equipmentSearchedData, final String filterBy)
	{
		final EquipmentData equipmentFilteredData = new EquipmentData();
		equipmentFilteredData.setEquipmentData(new ArrayList<AddToMSEInputData>());
		for (final AddToMSEInputData manElData : equipmentSearchedData.getEquipmentData())
		{
			//Filter MAN by itemsNotInMEL
			if (filterBy.equalsIgnoreCase(MAN_EL_FLAGTOCHECK))
			{
				if (!manElData.isThereInMELFlag())
				{
					equipmentFilteredData.getEquipmentData().add(manElData);
				}
			}

			//Filter MAN by totalItems
			else
			{
				equipmentFilteredData.getEquipmentData().add(manElData);
			}
		}
		return equipmentFilteredData;
	}


	/**
	 * Current not in use. Last service date has been removed as on 23/03/2020
	 *
	 * @param melData
	 * @param fromDate
	 * @param toDate
	 * @return
	 * @throws ParseException
	 */
	private boolean getEquipmentDataWithDateFilter(final AddToMSEInputData melData, final String fromDate, final String toDate)
			throws ParseException
	{
		final SimpleDateFormat enteredDateFormat = new SimpleDateFormat("dd MMM yyyy");
		final SimpleDateFormat enteredFiltersFormat = new SimpleDateFormat("dd-MM-yyyy");
		final SimpleDateFormat newdateFormat = new SimpleDateFormat("yyyy-MM-dd");


		if (StringUtils.isNotBlank(melData.getLastServiceDate()))
		{
			final String lastServiceDate = melData.getLastServiceDate();
			final Date lastServiceDate1 = enteredDateFormat.parse(lastServiceDate);
			final String lastServiceDate2 = new SimpleDateFormat("yyyy-MM-dd").format(lastServiceDate1);
			final Date lastServiceDateNew = newdateFormat.parse(lastServiceDate2);

			final Date fromDateFilter = enteredFiltersFormat.parse(fromDate);
			final Date toDateFilter = enteredFiltersFormat.parse(toDate);

			if ((lastServiceDateNew.after(fromDateFilter) || lastServiceDateNew.equals(fromDateFilter))
					&& (lastServiceDateNew.before(toDateFilter) || lastServiceDateNew.equals(toDateFilter)))
			{
				return true;
			}
		}
		return false;
	}

	/**
	 * Applies group by on total result set
	 *
	 * @param equipmentData
	 * @param groupBy
	 * @return
	 */
	private EquipmentData applyGroupBy(final EquipmentData equipmentData, final String groupBy)
	{
		final List<AddToMSEInputData> equipmentDataList = equipmentData.getEquipmentData();
		equipmentData.setGroupByEquipmentList(new ArrayList<AddToMSEInputList>());
		
		if(groupBy == null)
		{
			final AddToMSEInputList listForGroup = new AddToMSEInputList();
			listForGroup.setEquipmentListforGroup(equipmentDataList);
			equipmentData.getGroupByEquipmentList().add(listForGroup);
		}		
		else if (groupBy.equalsIgnoreCase(DEFAULT))
		{		
			final AddToMSEInputList listForGroup = new AddToMSEInputList();
			listForGroup.setEquipmentListforGroup(equipmentDataList);
			equipmentData.getGroupByEquipmentList().add(listForGroup);
		}
		else if (groupBy.equalsIgnoreCase(END_CUSTOMER))
		{
			for (String endCustomer : equipmentData.getEquipmentEndCustomerCount().keySet()) {
				final AddToMSEInputList listForGroup = new AddToMSEInputList();
				final List<AddToMSEInputData> equipmentListforCustomer = equipmentDataList.stream()
						.filter(equ -> equ.getEndCustomer().equals(endCustomer)).collect(Collectors.toList());
				listForGroup.setEquipmentListforGroup(equipmentListforCustomer);
				equipmentData.getGroupByEquipmentList().add(listForGroup);
			}
			
		}
		else if (groupBy.equalsIgnoreCase(PRODUCT))
		{
			for(String partNumber : equipmentData.getEquipmentPartCount().keySet())
			{
				final AddToMSEInputList listForGroup = new AddToMSEInputList();
				final List<AddToMSEInputData> equipmentListforProduct = equipmentDataList.stream()
						.filter(equ -> equ.getPartNumber().equals(partNumber))
						.collect(Collectors.toList());
				listForGroup.setEquipmentListforGroup(equipmentListforProduct);
				equipmentData.getGroupByEquipmentList().add(listForGroup);
			}
		}

		return equipmentData;

	}

	/**
	 * Applies pagination on total result set
	 *
	 * @param equipmentData
	 * @param pageableData
	 * @return
	 */
	private SearchPageData<AddToMSEInputData> getPaginatedData(final List<AddToMSEInputData> equipmentData,
			final PageableData pageableData)
	{

		LOG.info("********************************** PAGINATION *****************************************");
		final SearchPageData<AddToMSEInputData> result = new SearchPageData<AddToMSEInputData>();

		final PaginationData paginationData = new PaginationData();
		paginationData.setPageSize(pageableData.getPageSize());
		paginationData.setTotalNumberOfResults(equipmentData.size());

		paginationData.setNumberOfPages((int) Math
				.ceil(Double.valueOf(paginationData.getTotalNumberOfResults()) / Double.valueOf(paginationData.getPageSize())));

		paginationData.setCurrentPage(Math.max(0, Math.min(paginationData.getNumberOfPages(), pageableData.getCurrentPage())));
		result.setPagination(paginationData);

		int startIndex;
		int endIndex;

		if (pageableData.getCurrentPage() == 0)
		{
			startIndex = 0;
			endIndex = pageableData.getPageSize();
		}
		else
		{
			startIndex = pageableData.getCurrentPage() * pageableData.getPageSize();
			endIndex = (pageableData.getCurrentPage() + 1) * pageableData.getPageSize();
		}


		if (equipmentData.size() <= pageableData.getPageSize())
		{
			result.setResults(equipmentData);
		}
		else if (endIndex <= equipmentData.size())
		{
			result.setResults(equipmentData.subList(startIndex, endIndex));
		}
		else
		{
			result.setResults(equipmentData.subList(startIndex, equipmentData.size()));
		}

		LOG.info("********************************** PAGINATION ENDS*****************************************" + result.toString());
		return result;


	}


	@Override
	public List<ProductData> getProductDataForPartNumber(final List<String> partNums)
	{
		LOG.info("Equip Search : START getProductDataForPartNumber");
		final List<ProductData> productDatas = new ArrayList<ProductData>();
		final Set<String> uniqueProductCOde = new HashSet<>();
		final List<ProductData> productSolr = new ArrayList<>();
		final Set<String> SrNos = new HashSet<>();
		final Map<String, Set<String>> pSrList = new HashMap<>();
		LOG.info("&&&&&&&&&&&&&&&&&RFC Data iterate&&&&&&&&&&&&&&&&&&&&");
		// START log cretae part nums to seach

		partNums.forEach(part -> {
			final String partCombString = part.toString();
			final String partNumVal = partCombString.substring(0, partCombString.indexOf("#$#"));
			uniqueProductCOde.add(partNumVal);

			String equipSL = "";
			if (partCombString.indexOf("#$#") + 3 < partCombString.length())
			{
				equipSL = partCombString.substring(partCombString.indexOf("#$#") + 3);
			}
			LOG.info("Product Code: " + partNumVal + " Serial Number: " + equipSL);

			if (MapUtils.isNotEmpty(pSrList) && pSrList.containsKey(partNumVal))
			{
				pSrList.get(partNumVal).add(equipSL);
			}
			else
			{
				//Create new child cart and add entry to it
				final Set<String> blankSrNo = new HashSet<>();
				pSrList.put(partNumVal, blankSrNo);
				pSrList.get(partNumVal).add(equipSL);
			}
		});

		uniqueProductCOde.forEach(pcode -> {
			//pcode = "113-123-000";
			final String filter = "ALL";

			final PageableData pageableData = createPageableData(0, 5, null);
			final SearchStateData searchState = new SearchStateData();
			final SearchQueryData searchQueryData = new SearchQueryData();
			LOG.info("^^^^^^^^^^^^^^^^Product Code to be searched: " + pcode);

			searchQueryData.setValue(pcode);
			searchState.setQuery(searchQueryData);
			final ProductSearchPageData<SearchStateData, ProductData> pageData = productSearchFacade.textSearch(searchState,
					pageableData, filter);

			if (pageData != null && pageData.getResults() != null)
			{
				LOG.info("Product results: ");
				for (final ProductData productData : pageData.getResults())
				{
					LOG.info("Product Code: " + productData.getCode());
					if (productData != null && productData.getCode() != null)
					{
						boolean different = true;
						for (final ProductData product : productSolr)
						{
							if (productData.getCode().equalsIgnoreCase(product.getCode()))
							{
								different = false;
								break;
							}
						}
						if (different)
						{
							productSolr.add(productData);
						}

					}
				}
			}
		});

		LOG.info("################### List to be returned******************");
		for (final Map.Entry<String, Set<String>> entry : pSrList.entrySet())
		{
			if (entry.getValue() != null)
			{
				entry.getValue().forEach(equipSL -> {
					productSolr.forEach(product -> {
						if (product.getCode().equalsIgnoreCase(entry.getKey()))
						{
							final List<BrandNameData> newBrands = new ArrayList<>();
							final ProductData newProduct = new ProductData();
							newProduct.setUrl(product.getUrl());
							newProduct.setName(product.getName());
							newProduct.setCode(product.getCode());
							newProduct.setMediaurl(product.getMediaurl());
							final Iterator<BrandNameData> itr = product.getBrandName().iterator();
							while (itr.hasNext())
							{
								final BrandNameData brand = itr.next();

								final BrandNameData newBrand = new BrandNameData();
								newBrand.setCode(brand.getCode());
								newBrand.setDescription(brand.getDescription());
								newBrand.setImageUrl(brand.getImageUrl());
								newBrand.setName(brand.getName());

								newBrands.add(newBrand);
							}

							newProduct.setBrandName(newBrands);

							newProduct.setSummary(equipSL);
							newProduct.setProductAccessData(product.getProductAccessData());

							LOG.info("Final product Code: " + newProduct.getCode() + "  Serial Number " + equipSL);
							productDatas.add(newProduct);
						}
					});
				});
			}
		}

		for (final ProductData prod : productDatas)
		{
			if (prod != null && prod.getBrandName() != null)
			{
				final Collection<BrandNameData> brandNames = new LinkedList<>();
				prod.getBrandName().forEach(bradNameData -> {
					if (bradNameData != null)
					{
						final Collection<CategoryModel> categories = bhgeCategoryDao.findCategoriesByName(bradNameData.getName());
						if (categories != null && categories.iterator().hasNext())
						{
							final CategoryModel categoryModel = categories.iterator().next();
							final String description = categoryModel.getDescription();
							final String code = categoryModel.getCode();
							final String categoryImageURL = (categoryModel.getPicture() != null
									? (categoryModel.getPicture().getURL() != null ? categoryModel.getPicture().getURL() : "") : "");
							bradNameData.setCode(code);
							bradNameData.setImageUrl(categoryImageURL);
							bradNameData.setDescription(description);
							brandNames.add(bradNameData);
						}
					}
				});
				prod.setBrandName(brandNames);
			}
		}
		LOG.info("Equip Search : CLOSE getProductDataForPartNumber - " + productDatas.size());
		//LOG.info("---------------------------- processs product data END F LINE 2433 -------------------------- "+ java.time.LocalDateTime.now());
		return productDatas;
		//return productSolr;
	}


	private PageableData createPageableData(final int pageNumber, final int pageSize, final String sortCode)
	{
		final PageableData pageableData = new PageableData();
		pageableData.setCurrentPage(pageNumber);
		pageableData.setSort(sortCode);
		pageableData.setPageSize(pageSize);
		return pageableData;
	}

	/**
	 * Applies sort on default result set
	 *
	 * @param equipmentData
	 * @return
	 */
	private EquipmentData applySort(final EquipmentData equipmentData, final String sortBy)
	{
		LOG.info("================ SORT IN FACADE =============");
		final List<AddToMSEInputData> headerData = equipmentData.getEquipmentData();
		if (CollectionUtils.isNotEmpty(headerData))
		{
			if (null != sortBy && sortBy.equalsIgnoreCase("sortByLastUpdated"))
			{
				Collections.sort(headerData, new EquipmentRecentlyUpdatedComparator<AddToMSEInputData>());
				equipmentData.setEquipmentData(headerData);
			}
			else
			{
				Collections.sort(headerData, new EquipmentRecentlyAddedComparator<AddToMSEInputData>());
				equipmentData.setEquipmentData(headerData);
			}
		}
		return equipmentData;
	}

	/* Comparator to sort the RMA data collection by rma Created Date- DSC */
	protected class EquipmentRecentlyAddedComparator<AddToMSEInputData> implements java.util.Comparator<AddToMSEInputData>
	{
		@Override
		public int compare(final AddToMSEInputData data1, final AddToMSEInputData data2)
		{
			int result = 0;
			try
			{
				// Sort the rma's based on RMA Created Date by DESC
				if (null != data1 && null != data2)
				{
					if (null != ((com.bhge.core.data.AddToMSEInputData) data2).getServiceDueDate()
							&& null != ((com.bhge.core.data.AddToMSEInputData) data1).getServiceDueDate())
					{
						result = ((com.bhge.core.data.AddToMSEInputData) data1).getServiceDueDate()
								.compareTo(((com.bhge.core.data.AddToMSEInputData) data2).getServiceDueDate());
					}
					else if (((com.bhge.core.data.AddToMSEInputData) data2).getServiceDueDate() != null
							&& ((com.bhge.core.data.AddToMSEInputData) data1).getServiceDueDate() == null)
					{
						result = 1;
					}
					else if (((com.bhge.core.data.AddToMSEInputData) data2).getServiceDueDate() == null
							&& ((com.bhge.core.data.AddToMSEInputData) data1).getServiceDueDate() != null)
					{
						result = -1;
					}
					else if (((com.bhge.core.data.AddToMSEInputData) data2).getServiceDueDate() == null
							&& ((com.bhge.core.data.AddToMSEInputData) data1).getServiceDueDate() == null)
					{
						result = 0;
					}
				}

			}
			catch (final Exception e)
			{
				LOG.error("Error occured while sorting the MSE data " + e);
			}
			return result;
		}
	}

	//comparator to sort based on last service date
	protected class EquipmentRecentlyUpdatedComparator<AddToMSEInputData> implements java.util.Comparator<AddToMSEInputData>
	{
		@Override
		public int compare(final AddToMSEInputData data1, final AddToMSEInputData data2)
		{
			int result = 0;
			try
			{
				if (null != data1 && null != data2)
				{
					final Date date1 = formatLastServiceDate(((com.bhge.core.data.AddToMSEInputData) data1).getLastServiceDate());
					final Date date2 = formatLastServiceDate(((com.bhge.core.data.AddToMSEInputData) data2).getLastServiceDate());

					if (null != date1 && null != date2)
					{
						result = date2.compareTo(date1);
					}
					else if (date2 != null && date1 == null)
					{
						result = 1;
					}
					else if (date2 == null && date1 != null)
					{
						result = -1;
					}
					else if (date2 == null && date1 == null)
					{
						result = 0;
					}
				}

			}
			catch (final Exception e)
			{
				LOG.error("Error occured while sorting the MSE data " + e);
			}
			return result;
		}
	}

	private Date formatLastServiceDate(final String date) throws ParseException
	{
		if (StringUtils.isNotBlank(date))
		{
			final SimpleDateFormat enteredDateFormat = new SimpleDateFormat("dd MMM yyyy");
			final SimpleDateFormat enteredFiltersFormat = new SimpleDateFormat("dd-MM-yyyy");
			final SimpleDateFormat newdateFormat = new SimpleDateFormat("yyyy-MM-dd");

			final Date lastServiceDate1 = enteredDateFormat.parse(date);
			final String lastServiceDateFormat = new SimpleDateFormat("yyyy-MM-dd").format(lastServiceDate1);
			return newdateFormat.parse(lastServiceDateFormat);
		}
		return null;
	}

	/**
	 * Populates part number count for the list passed
	 *
	 * @param equipmentList
	 * @return
	 */
	private Map<String, Integer> getPartCount(final List<AddToMSEInputData> equipmentList)
	{
		final Map<String, Integer> locationMap = new HashMap<String, Integer>();
		for (final AddToMSEInputData equipment : equipmentList)
		{
			if (StringUtils.isNotBlank(equipment.getStatus())
					&& equipment.getStatus().equalsIgnoreCase(BhgeFacadesConstants.MSE_REMOVED))
			{
				continue;
			}
			if (locationMap.containsKey(equipment.getPartNumber()))
			{
				locationMap.put(equipment.getPartNumber(), locationMap.get(equipment.getPartNumber()) + 1);
			}
			else
			{
				locationMap.put(equipment.getPartNumber(), 1);
			}
		}
		return locationMap;

	}

	/**
	 * Populates end customer record count for group by
	 *
	 * @param equipmentList
	 * @return
	 */
	private Map<String, Integer> getEndCustomerCount(final List<AddToMSEInputData> equipmentList)
	{
		final Map<String, Integer> locationMap = new HashMap<String, Integer>();
		try {
			for (final AddToMSEInputData equipment : equipmentList)
			{
				if (locationMap.containsKey(equipment.getEndCustomer()))
				{
					locationMap.put(equipment.getEndCustomer(), locationMap.get(equipment.getEndCustomer()) + 1);
				} else if(StringUtils.isBlank(equipment.getEndCustomer())) {
					if(locationMap.containsKey("0000000000")) {
						locationMap.put("0000000000", locationMap.get("0000000000") + 1);
					}
					else {
						locationMap.put("0000000000", 1);
					}
				}
				else
				{
					locationMap.put(equipment.getEndCustomer(), 1);
				}
			}
		} catch (Exception ex)
		{
			LOG.error("Exception in fecthing getEndCustomerCount ", ex);
		}


		return locationMap;

	}


	//FILTER BY
	@Override
	public EquipmentData getFinalEquipmentList(final EquipmentData equipmentData, final String filterBy, final String mANorMELFlag,
			final String searchBy, final String groupBy, final PageableData pageableData, final String brFilter,
			final List<String> productLinesSelected, final String sortBY)
	{
		EquipmentData filterEquipmentData = null;
		try
		{
			//Apply Filter (Includes date and search)
			filterEquipmentData = applyFilter(equipmentData, filterBy, mANorMELFlag, searchBy, groupBy, brFilter,
					productLinesSelected);
			if (equipmentData.isTimeoutException())
			{
				filterEquipmentData.setTimeoutException(true);
			}
			else if (equipmentData.isExecutionException())
			{
				filterEquipmentData.setExecutionException(true);
			}
			else if (equipmentData.isInterruptedException())
			{
				filterEquipmentData.setInterruptedException(true);
			}
			else if (CollectionUtils.isEmpty(filterEquipmentData.getEquipmentData()))
			{
				LOG.info("--------------------------- NO DATA * SEARCH ----------------------------");
				filterEquipmentData.setNotFoundException(true);
			}
			else
			{
				//Apply sort
				filterEquipmentData = applySort(filterEquipmentData, sortBY);

				//Apply Pagination
				final SearchPageData<AddToMSEInputData> filterData = getPaginatedData(filterEquipmentData.getEquipmentData(),
						pageableData);
				final List<AddToMSEInputData> paginatedData = filterData.getResults();
				filterEquipmentData.setPaginatedEquipmentData(paginatedData);
				//Applying group by and populating product data object only for MEL
				if (mANorMELFlag.equals(BhgeFacadesConstants.CP_MYLIST) || mANorMELFlag.equals(BhgeFacadesConstants.CP_ALL))
				{
					//Populate productData object
					populateProductDataOnEquipmentRecord(filterEquipmentData);

					// Apply Group by
					filterEquipmentData = applyGroupBy(filterEquipmentData, groupBy);
				}
			}
		}
		catch (final ParseException parseException)
		{
			LOG.error("Error occured while applying filter for equipment record with search parameter" + searchBy);
			LOG.error("Exception is " + parseException);
		}
		catch (final Exception exception)
		{
			LOG.error("Error occured while applying filter for equipment record with search parameter" + searchBy);
			LOG.error("Exception is " + exception);
		}
		return filterEquipmentData;
	}
	
	@Override
	public void updateFilterList(EquipmentData finalEquipmentData, Boolean itemsInWatchlist) {
		// TODO Auto-generated method stub
		final List<AddToMSEInputData> mseDataList = new ArrayList<AddToMSEInputData>();
		if (CollectionUtils.isNotEmpty(finalEquipmentData.getEquipmentData()))			
		{
			for (final AddToMSEInputData mseData : finalEquipmentData.getEquipmentData())
			{
				if(itemsInWatchlist == Boolean.TRUE && mseData.getPinned().equalsIgnoreCase(BhgeCoreConstants.MSE_FAV_FLAG_VALUE))
				{
					mseDataList.add(mseData);
				}
				if(itemsInWatchlist == Boolean.FALSE && !mseData.getPinned().equalsIgnoreCase(BhgeCoreConstants.MSE_FAV_FLAG_VALUE))
				{
					mseDataList.add(mseData);
				}
				
			}
			finalEquipmentData.setEquipmentData(mseDataList);
		}
	}

	@Override
	public void populateProductDataOnEquipmentRecord(final EquipmentData filterEquipmentData)
	{
		final List<AddToMSEInputData> mseInputDataList = new ArrayList<AddToMSEInputData>();
		for (final AddToMSEInputData mseInputData : filterEquipmentData.getEquipmentData())
		{
			if (StringUtils.isNotBlank(mseInputData.getPartNumber()))
			{
				try
				{
					final List<ProductOption> extraOptions = Arrays.asList(ProductOption.PRICE);
					final ProductData productData = productFacade.getProductForCodeAndOptions(mseInputData.getPartNumber(),
							extraOptions);
					mseInputData.setProductData(productData);
					mseInputData.setIsCaltalogProduct(Boolean.TRUE);
				}
				catch (final Exception exception)
				{
					mseInputData.setIsCaltalogProduct(Boolean.FALSE);
					LOG.error("Issue with finding Product with code " + mseInputData.getPartNumber() + " in the system");
				}
			}
			mseInputDataList.add(mseInputData);
		}
		filterEquipmentData.setEquipmentData(mseInputDataList);
	}
	
	@Override
	public List<AddToMSEOutputData> addServiceHistoryRFC(final String customerNumber,
			 final ServiceHistoryDetails serviceHistoryInputData)
	{
		return mySiteEquipmentService.addServiceHistoryRFC(customerNumber,serviceHistoryInputData);
	}
	
	@Override
	public EquipmentData getMSELookupRFC(final String customerNumber, final String partNumber, final String serialNumber)
	{
		return mySiteEquipmentService.getMSELookupRFC(customerNumber,partNumber,serialNumber);
	}
	
	@Override
	public List<AddToMSEOutputData> addToMelRFC(final String customerNumber, final List<AddToMSEInputData> inputData) throws IOException, ParseException, SAXException
	{
		return mySiteEquipmentService.addToMelRFC(customerNumber,inputData);
	}
	@Override
	public String searchBySanity(String url)
	{
		if (url != null && StringUtils.isNotBlank(url))
		{
			if (url.contains("!"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("@"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("#"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("$"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("%"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("("))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains(")"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("}"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("{"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains(":"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains(""))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("?"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains(">"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("<"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("-"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("/"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
		}
		return url;
	}
}
