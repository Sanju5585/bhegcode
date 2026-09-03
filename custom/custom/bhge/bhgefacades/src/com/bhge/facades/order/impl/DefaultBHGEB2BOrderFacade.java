/**
 *
 */
package com.bhge.facades.order.impl;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import jakarta.annotation.Resource;

import com.bhge.facades.order.data.*;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.model.OrderNotificationModel;
import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.order.service.impl.BHGEOrderNotificationServiceImpl;
import com.bhge.core.regioncache.BHGECacheKey;
import com.bhge.core.regioncache.BHGEOrderNotificationCacheKey;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.data.BHGEOrderTypeData;
import com.bhge.facades.forms.OrderHistoryFormSearchData;
import com.bhge.facades.order.BHGEB2BOrderFacade;
import com.bhge.facades.order.notification.data.OrderNotificationData;
import com.bhge.facades.order.populators.BHGEOrderNotificationReversePopulator;
import com.bhge.facades.regioncache.BHGEOrderNotificationCacheValueLoader;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.integration.order.history.service.BHGEOrderHistoryService;
import com.ds.dsocc.common.dto.OrderStatusCountWsDTO;
import com.hybris.yprofile.dto.Order;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2bacceleratorfacades.order.impl.DefaultB2BOrderFacade;
import de.hybris.platform.commercefacades.order.data.OrderData;
import de.hybris.platform.commercefacades.order.data.OrderHistoryDeliveryData;
import de.hybris.platform.commercefacades.order.data.OrderHistoryViewData;
import de.hybris.platform.commercefacades.storesession.StoreSessionFacade;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.Registry;
import de.hybris.platform.core.model.enumeration.EnumerationValueModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.regioncache.CacheController;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.key.CacheKey;
import de.hybris.platform.regioncache.region.CacheRegion;
import de.hybris.platform.servicelayer.exceptions.ModelSavingException;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.log4j.Logger;

import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.regioncache.BHGECacheKey;
import com.bhge.facades.data.BHGEOrderTypeData;
import com.bhge.facades.forms.OrderHistoryFormSearchData;
import com.bhge.facades.order.BHGEB2BOrderFacade;
import com.bhge.facades.order.data.BHGEOrderHistoryCollectionData;
import com.bhge.facades.order.data.BHGEOrderHistoryData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.integration.order.history.service.BHGEOrderHistoryService;
import org.springframework.beans.factory.annotation.Autowired;



//import com.hybris.ge.edge.facades.cart.converters.GEEdgeCommonUtil;
/**
 * @author pachoudhary
 *
 */
public class DefaultBHGEB2BOrderFacade extends DefaultB2BOrderFacade implements BHGEB2BOrderFacade
{

	private static final Logger LOG = Logger.getLogger(DefaultBHGEB2BOrderFacade.class);
	private static final String ORDER_NOT_FOUND_FOR_USER_AND_BASE_STORE = "Order with guid %s not found for current user in current BaseStore";

	//Fast Order
	private BHGEOrderHistoryService bhgeOrderHistoryService;
	private SessionService sessionService;

	@Resource(name = "orderHistoryCacheRegion")
	private CacheRegion orderHistoryCacheRegion;

	@SuppressWarnings("rawtypes")
	@Resource(name = "bhgeCacheValueLoader")
	private CacheValueLoader bhgeCacheValueLoader;

	@Resource(name = "cacheController")
	private CacheController cacheController;

	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "storeSessionFacade")
	private StoreSessionFacade storeSessionFacade;

	@Autowired(required = true)
	BHGESoldToUtil bhgeSoldToUtil;

	@Resource(name = "orderNotificationCacheRegion")
	private CacheRegion orderNotificationCache;

	@SuppressWarnings("rawtypes")
	@Resource(name = "bhgeOrderNotificationCacheValueLoader")
	private CacheValueLoader orderNotificationCacheLoader;

	@Resource(name = "bhgeOrderNotificationReversePopulator")
	private BHGEOrderNotificationReversePopulator bhgeOrderNotificationReversePopulator;

	@Resource(name = "bhgeOrderNotificationService")
	private BHGEOrderNotificationServiceImpl bhgeOrderNotificationService;
	
	@Resource
	private ProductService productService;
	

	/**
	 * Get the Open orders for the current soldto user
	 *
	 */
	@Override
	public Map<String, Object> getDefaultCurrentOrderWS(final PageableData pageableData, final List<String> multipleSoldToId,
			final String statusFilter, final String sapOrderType)
	{
		LOG.debug("Inside getDefaultCurrentOrderWS ....");
		final Map<String, Object> responseObject = new HashMap<>();
		Map<String, Object> returnObject = new HashMap<>();
		SearchPageData<BHGEOrderHistoryData> orderHistoryData = null;
		Count countModel = null;
		try
		{
			final String DETAIL_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))
					? Config.getParameter("ORDERTYPE_DET") : "CP_DET";
			returnObject = getMultipleOrdersFromSAP(DETAIL_ORDER, pageableData, multipleSoldToId, statusFilter, sapOrderType,
					responseObject);

			orderHistoryData = (SearchPageData<BHGEOrderHistoryData>) returnObject.get("OrderData");
			countModel = (Count) returnObject.get("DashboardData");

			responseObject.put("orderHistoryData", orderHistoryData);
			responseObject.put("DashboardData", countModel);
			//responseObject.put("status", "");
		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
			LOG.debug("Inside getDefaultCurrentOrderWS catch block with exception: " + ex.getMessage());
			responseObject.put("orderHistoryData", orderHistoryData);
			responseObject.put("status", "EXCEPTION");
			return responseObject;
		}

		LOG.debug("orderHistoryData Final: - " + orderHistoryData);

		return responseObject;
	}


	/**
	 * Get the Closed orders for the current soldto user
	 *
	 */
	public SearchPageData<BHGEOrderHistoryData> getDefaultPastOrderWS(final PageableData pageableData, final String statusFilter,
			final String sapOrderType)
	{
		final String PAST_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_PAST")))
				? Config.getParameter("ORDERTYPE_PAST") : "CP_PAST";
		final SearchPageData<BHGEOrderHistoryData> orderHistoryData = getOrdersFromSAP(PAST_ORDER, pageableData, statusFilter,
				sapOrderType);
		return orderHistoryData;
	}

	//FastOrder
	@Override
	public SearchPageData<BHGEOrderHistoryData> getDefaultFastOrderWS(final String soldto, final String salesOrderNumber,
			final String poNumber, final PageableData pageableData, final String statusFilter, final String sapOrderType)
	{
		LOG.debug("Inside getDefaultFastOrderWS");
		final String FAST_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_FAST")))
				? Config.getParameter("ORDERTYPE_FAST") : "CP_FAST";
		final BHGEOrderHistoryCollectionData orderHistoryData = bhgeOrderHistoryService.getFastOrder(soldto, FAST_ORDER,
				salesOrderNumber, poNumber);
		return prepareOrderHistoryData(pageableData, orderHistoryData, statusFilter, sapOrderType);
	}

	/* Anish */
	@Override
	public SearchPageData<BHGEOrderHistoryData> newGetDefaultFastOrderWS(final String soldto, final String salesOrderNumber,
			final String poNumber, final PageableData pageableData, final String statusFilter, final String sapOrderType)
	{
		LOG.debug("Inside newGetDefaultFastOrderWS");
//		final BHGEOrderHistoryCollectionData orderHistoryDataCollection = bhgeOrderHistoryService.getFastOrder(soldto, sapOrderType,
//				salesOrderNumber, poNumber);

		final BHGEOrderHistoryCollectionData orderHistoryDataCollection = bhgeOrderHistoryService.getFastOrderSCPI(soldto, sapOrderType,
				salesOrderNumber, poNumber);

		List<BHGEOrderHistoryData> orderHeaderItems = null;
		if (null != orderHistoryDataCollection && null != orderHistoryDataCollection.getBhgeOrderHistoryHeaderData()
				&& orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().size() > 0)
		{
			orderHeaderItems = new ArrayList<BHGEOrderHistoryData>(
					orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values());
			Collections.sort(orderHeaderItems, new BHGEWSOrderDataComparator());

		}
		return newPrepareOrderHistoryData(pageableData, orderHeaderItems, statusFilter, sapOrderType);
		//return newPrepareOrderHistoryData(pageableData, orderHistoryData, statusFilter, sapOrderType);
	}
	/* Anish */

	/* For Spartacus WS*/
	@Override
	public SearchPageData<BHGEOrderHistoryData> newGetDefaultFastOrdersForWS(final String soldto, final String salesOrderNumber,
																			 final String poNumber, final PageableData pageableData, final String statusFilter, final String sapOrderType, OrderErrorData orderErrorData)
	{
		LOG.info("Inside newGetDefaultFastOrderWS");
//		final BHGEOrderHistoryCollectionData orderHistoryDataCollection = bhgeOrderHistoryService.getFastOrder(soldto, sapOrderType,
//				salesOrderNumber, poNumber);

		final BHGEOrderHistoryCollectionData orderHistoryDataCollection = bhgeOrderHistoryService.getFastOrderSCPIForWS(soldto, sapOrderType,
				salesOrderNumber, poNumber);

		List<BHGEOrderHistoryData> orderHeaderItems = null;
		LOG.info(" Inside newGetDefaultFastOrdersForWS orderHistoryDataCollection: " + orderHistoryDataCollection);
		if(null != orderHistoryDataCollection) {
			if (null != orderHistoryDataCollection.getBhgeOrderError()) {
				OrderErrorData orderErrorDatatemp = orderHistoryDataCollection.getBhgeOrderError();
				orderErrorData.setWrongStore(orderErrorDatatemp.getWrongStore());
				orderErrorData.setWrongCustomer(orderErrorDatatemp.getWrongCustomer());
				LOG.info(" Inside newGetDefaultFastOrdersForWS orderErrorData: Customer Value " + orderErrorData.getWrongCustomer());
				LOG.info(" Inside newGetDefaultFastOrdersForWS orderErrorData: Store Value " + orderErrorData.getWrongStore());
			}
		}
		else {
			LOG.info(" Inside newGetDefaultFastOrdersForWS orderHistoryDataCollection is null, setting default values in orderErrorData ");
			orderErrorData.setWrongCustomer(false);
			orderErrorData.setWrongStore(false);
			LOG.info(" Inside newGetDefaultFastOrdersForWS orderErrorData: when collection is null Customer Value " + orderErrorData.getWrongCustomer());
			LOG.info(" Inside newGetDefaultFastOrdersForWS orderErrorData: when collection is null Store Value " + orderErrorData.getWrongStore());
		}
		if (null != orderHistoryDataCollection && null != orderHistoryDataCollection.getBhgeOrderHistoryHeaderData()
				&& orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().size() > 0)
		{
			orderHeaderItems = new ArrayList<BHGEOrderHistoryData>(
					orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values());
			Collections.sort(orderHeaderItems, new BHGEWSOrderDataComparator());

		}
		return newPrepareOrderHistoryData(pageableData, orderHeaderItems, statusFilter, sapOrderType);
		//return newPrepareOrderHistoryData(pageableData, orderHistoryData, statusFilter, sapOrderType);
	}

	@Override
	public Map<String, Object> getsearchPageData(final List<String> multipleSoldToId, final String poOrderNumberReplace,
			final PageableData pageableData, final String fromDate, final String toDate, final OrderHistoryFormSearchData searchData,
			final String statusFilter, final String sapOrderType)
	{
		SearchPageData<BHGEOrderHistoryData> orderHistoryObject = null;
		BHGEOrderHistoryCollectionData orderHistoryDataCollection = null;
		final Map<String, Object> responseMap = new HashMap<>();
		String orderType = "";

		// Order Type DET
		final String DETAIL_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))
				? Config.getParameter("ORDERTYPE_DET") : "CP_DET";

		final List<BHGEOrderHistoryCollectionData> subListOfMap = new ArrayList<>();

		if (searchData != null && StringUtils.isNotBlank(searchData.getPageFlag()))
		{
			orderType = bhgeOrderHistoryService.getOrderType(searchData.getPageFlag());
		}

		final String seesionSoldToIDSingle = getSoldTo();
		final String sortByDateType = searchData.getSortByDateType();
		if ((multipleSoldToId != null) && (multipleSoldToId.size() > 0) && (!multipleSoldToId.isEmpty()))
		{

			LOG.debug("Inside processWithFlag - multipleSoldToId - " + multipleSoldToId);

			BHGEOrderHistoryCollectionData multiOrderHistoryDataCollection = null;
			multipleSoldToId.add(seesionSoldToIDSingle);

			for (final String soldto : multipleSoldToId)
			{
				if (!soldto.equalsIgnoreCase(""))
				{

					multiOrderHistoryDataCollection = bhgeOrderHistoryService.getOrderHistoryData(soldto, DETAIL_ORDER, fromDate,
							toDate);
					subListOfMap.add(multiOrderHistoryDataCollection);
				}
			}
			orderHistoryDataCollection = multipleSearchOrdersInCache(subListOfMap, searchData);
			orderHistoryObject = prepareOrderHistoryData(pageableData, orderHistoryDataCollection, sortByDateType, statusFilter,
					sapOrderType);
		}
		else
		{

			LOG.debug("Inside processWithFlag - singleSoldToId - " + seesionSoldToIDSingle);

			final BHGEOrderHistoryCollectionData orderHistoryCacheData = bhgeOrderHistoryService
					.getOrderHistoryData(seesionSoldToIDSingle, DETAIL_ORDER, fromDate, toDate);
			orderHistoryDataCollection = searchOrdersInCache(orderHistoryCacheData, searchData);
			orderHistoryObject = prepareOrderHistoryData(pageableData, orderHistoryDataCollection, statusFilter, sapOrderType);
		}

		responseMap.put("orderHistoryObject", orderHistoryObject);
		responseMap.put("orderHistoryDataCollection", orderHistoryDataCollection);

		return responseMap;

	}



	//FastOrder

	public SearchPageData<BHGEOrderHistoryData> getOrdersFromSAP(final String orderType, final PageableData pageableData,
			final String statusFilter, final String sapOrderType)
	{
		final String soldto = getSoldTo();


		//soldto=getOrderHistoryDataForUser

		// We are implementing the Cache logic to retrieve the Orders from SAP using RFC
		/*
		 * final GEOrderHistoryCollectionData orderHistoryDataCollection = bhgeOrderHistoryService .getOrders(soldto,
		 * orderType);
		 */

		final BHGEOrderHistoryCollectionData orderHistoryDataCollection = getOrderHistoryDataForUser(orderType, soldto);
		LOG.debug("Creating mock sap data");


		if (null != orderHistoryDataCollection)
		{
			return prepareOrderHistoryData(pageableData, orderHistoryDataCollection, statusFilter, sapOrderType);
		}
		return null;
	}

	public Map<String, Object>/* SearchPageData<BHGEOrderHistoryData> */ getMultipleOrdersFromSAP(final String orderType,
			final PageableData pageableData, final List<String> multipleSoldToId, final String statusFilter,
			final String sapOrderType, final Map<String, Object> responseObject)
	{
		final Map<String, Object> returnObject = new HashMap<>();
		LOG.debug("Inside getMultipleOrdersFromSAP ....");
		final List<BHGEOrderHistoryCollectionData> subListOfMap = new ArrayList<BHGEOrderHistoryCollectionData>();

		BHGEOrderHistoryCollectionData orderHistoryDataCollection = null;
		final String seesionSoldToIDSingle = getSoldTo();
		final String soldToIdForSingleCache = getKey(seesionSoldToIDSingle, orderType);
		if ((multipleSoldToId != null) && (multipleSoldToId.size() > 0) && (!multipleSoldToId.isEmpty()))
		{
			multipleSoldToId.add(seesionSoldToIDSingle);

			for (final String soldto : multipleSoldToId)
			{
				if ((!soldto.equalsIgnoreCase("")) && (soldto != null))
				{
					final String soldToIdForCache = getKey(soldto, orderType);
					orderHistoryDataCollection = getOrderHistoryDataForUser(orderType, soldToIdForCache);
					LOG.debug("creating data for multiple sold to id");
					if (orderHistoryDataCollection != null)
					{
						subListOfMap.add(orderHistoryDataCollection);
					}
				}
			}
		}
		else
		{

			orderHistoryDataCollection = getOrderHistoryDataForUser(orderType, soldToIdForSingleCache);
			if (orderHistoryDataCollection != null)
			{
				if (orderHistoryDataCollection.isTimeoutException())
				{
					responseObject.put("status", "TIMEOUT_EXCEPTION");
				}
				else if (orderHistoryDataCollection.isExecutionException() || orderHistoryDataCollection.isInterruptedException())
				{
					responseObject.put("status", "EXCEPTION");
				}
			}
			LOG.info("creating data for single sold to id");
			//return prepareOrderHistoryData(pageableData, orderHistoryDataCollection, statusFilter, sapOrderType);
			Count countModel = new Count();
			/* Anish DashBoard */
			List<BHGEOrderHistoryData> orderHeaderItems = null;
			if (null != orderHistoryDataCollection && null != orderHistoryDataCollection.getBhgeOrderHistoryHeaderData()
					&& orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().size() > 0)
			{
				orderHeaderItems = new ArrayList<BHGEOrderHistoryData>(
						orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values());
				Collections.sort(orderHeaderItems, new BHGEWSOrderDataComparator());

			}

			if (!(null == orderHeaderItems && orderHeaderItems.size() == 0))
			{

				countModel = processCount(orderHeaderItems);
			}
			returnObject.put("DashboardData", countModel);
			returnObject.put("OrderData", newPrepareOrderHistoryData(pageableData, orderHeaderItems, statusFilter, sapOrderType));
			/* Anish Dashboard */
		}
		if (subListOfMap.size() > 0)
		{
			//return prepareMultipleOrderHistoryData(pageableData, subListOfMap, statusFilter, sapOrderType);
			List<BHGEOrderHistoryData> orderHeaderItems = new ArrayList<BHGEOrderHistoryData>();
			final List<BHGEOrderHistoryData> newOrderHeaderItems = new ArrayList<BHGEOrderHistoryData>();
			for (final BHGEOrderHistoryCollectionData orderHistoryDataCollectionItr : subListOfMap)
			{
				if (orderHistoryDataCollectionItr.getBhgeOrderHistoryHeaderData() != null)
				{
					orderHeaderItems = new ArrayList<BHGEOrderHistoryData>(
							orderHistoryDataCollectionItr.getBhgeOrderHistoryHeaderData().values());
					newOrderHeaderItems.addAll(orderHeaderItems);
				}

			}
			Collections.sort(newOrderHeaderItems, new BHGEWSOrderDataComparator());

			if (!(newOrderHeaderItems.size() == 0))
			{
				final Count countModel = processCount(newOrderHeaderItems);
				returnObject.put("DashboardData", countModel);
				returnObject.put("OrderData",
						newPrepareMultipleOrderHistoryData(pageableData, newOrderHeaderItems, statusFilter, sapOrderType));
			}
		}
		//return null;
		return returnObject;
	}

	/**
	 * @param pageableData
	 * @param subListOfMap
	 * @return
	 */
	private SearchPageData<BHGEOrderHistoryData> prepareMultipleOrderHistoryData(final PageableData pageableData,
			final List<BHGEOrderHistoryCollectionData> subListOfMap, final String statusFilter, final String sapOrderType)
	{

		List<BHGEOrderHistoryData> orderHeaderItems = new ArrayList<BHGEOrderHistoryData>();
		final List<BHGEOrderHistoryData> newOrderHeaderItems = new ArrayList<BHGEOrderHistoryData>();

		for (final BHGEOrderHistoryCollectionData orderHistoryDataCollection : subListOfMap)
		{

			if (orderHistoryDataCollection.getBhgeOrderHistoryHeaderData() != null)
			{
				orderHeaderItems = new ArrayList<BHGEOrderHistoryData>(
						orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values());


				newOrderHeaderItems.addAll(orderHeaderItems);

			}

		}
		Collections.sort(newOrderHeaderItems, new BHGEWSOrderDataComparator());

		if (newOrderHeaderItems.size() == 0)
		{
			return new SearchPageData<BHGEOrderHistoryData>();
		}
		final Count countModel = processCount(newOrderHeaderItems);

		return createSearchPageData(newOrderHeaderItems, pageableData, statusFilter, sapOrderType);
		// YTODO Auto-generated method stub

	}

	/* Anish Start */
	private SearchPageData<BHGEOrderHistoryData> newPrepareMultipleOrderHistoryData(final PageableData pageableData,
			final List<BHGEOrderHistoryData> newOrderHeaderItems, final String statusFilter, final String sapOrderType)
	{

		/*
		 * List<BHGEOrderHistoryData> orderHeaderItems = new ArrayList<BHGEOrderHistoryData>(); final
		 * List<BHGEOrderHistoryData> newOrderHeaderItems = new ArrayList<BHGEOrderHistoryData>();
		 *
		 * for (final BHGEOrderHistoryCollectionData orderHistoryDataCollection : subListOfMap) {
		 *
		 * if (orderHistoryDataCollection.getBhgeOrderHistoryHeaderData() != null) { orderHeaderItems = new
		 * ArrayList<BHGEOrderHistoryData>( orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values());
		 *
		 *
		 * newOrderHeaderItems.addAll(orderHeaderItems);
		 *
		 * }
		 *
		 * } Collections.sort(newOrderHeaderItems, new BHGEWSOrderDataComparator());
		 */

		if (newOrderHeaderItems.size() == 0)
		{
			return new SearchPageData<BHGEOrderHistoryData>();
		}

		return createSearchPageData(newOrderHeaderItems, pageableData, statusFilter, sapOrderType);
		// YTODO Auto-generated method stub

	}
	/* Anish End */

	/* overloading method prepareOrderHistoryData for sorting the Orders for multiple cache */
	private SearchPageData<BHGEOrderHistoryData> prepareMultipleOrderHistoryData(final PageableData pageableData,
			final List<BHGEOrderHistoryData> newOrderHeaderItems, final String sortByDateType, final String statusFilter,
			final String sapOrderType)
	{
		LOG.info("DE177215 Inside prepareMultipleOrderHistoryData..");
		final String sortKey = pageableData.getSort();

		if (newOrderHeaderItems.size() == 0)
		{
			LOG.info("DE177215 when newOrderHeaderItems.size() == 0 ");
			return new SearchPageData<BHGEOrderHistoryData>();
		}
		else
		{
			if (sortKey.equalsIgnoreCase("byDateAsc"))
			{
				LOG.info("DE177215 Inside byDateAsc");
				Collections.sort(newOrderHeaderItems, new BHGEWSOrderAscDataComparator().reversed());
			}

		   else if (sortKey.equalsIgnoreCase("byDateDsc"))
			{
				LOG.info("DE177215 Inside byDateDsc");
				Collections.sort(newOrderHeaderItems, new BHGEWSOrderDataComparator());
			}

			else if (sortKey.equalsIgnoreCase("byOrderNumberAsc"))
			{

				LOG.info("DE177215 Inside byOrderNumberAsc");
				Collections.sort(newOrderHeaderItems, new BHGEWSOrderNumberComparator().reversed());
			}
			else if (sortKey.equalsIgnoreCase("byOrderNumberDsc"))
			{

				LOG.info("DE177215 Inside byOrderNumberDsc");
				Collections.sort(newOrderHeaderItems, new BHGEWSOrderNumberComparator());
			}
			else if (sortKey.equalsIgnoreCase("UpdateAsc"))
			{
				LOG.info("DE177215 Inside UpdateAsc");
				Collections.sort(newOrderHeaderItems, new BHGEWSOrderUpdateComparator().reversed());
			}
			else if (sortKey.equalsIgnoreCase("UpdateDsc"))
			{
				LOG.info("DE177215 Inside UpdateDsc");
				Collections.sort(newOrderHeaderItems, new BHGEWSOrderUpdateComparator());
			}
		}

		LOG.debug("orderHistoryData SearchPageData " + newOrderHeaderItems.size() + " pageableData " + pageableData);



		return createSearchPageData(newOrderHeaderItems, pageableData, statusFilter, sapOrderType);
		// YTODO Auto-generated method stub

	}




	/**
	 * @param newOrderHeaderItems
	 * @param pageableData
	 * @param countModel
	 * @return
	 */

	/**
	 * This method will get the Orders collection for the given Ordertype and Soldto combination. First it will check
	 * whether the data exists in Cache or not, if found the data will be returned or RFC call will be made to SAP to get
	 * the data
	 *
	 * @param orderType
	 * @param soldto
	 * @return
	 */
	protected BHGEOrderHistoryCollectionData getOrderHistoryDataForUser(final String orderType, final String soldto)
	{
		LOG.info("Inside getOrderHistoryDataForUser .... " + soldto);
		final String key = soldto;
		final CacheKey cacheKey = new BHGECacheKey(key, Registry.getCurrentTenant().getTenantID());
		BHGEOrderHistoryCollectionData orderHistoryDataCollection;

		final boolean mockData = Config.getBoolean("sap.mockdata", false);
		if (mockData)
		{
			LOG.info("Creating Mock data in getOrderHistoryDataForUser" + mockData);
			//final BHGEOrderHistoryCollectionData orderHistoryDataCollection = (BHGEOrderHistoryCollectionData) orderHistoryCacheRegion
			//		.getWithLoader(cacheKey, bhgeCacheValueLoader);
			orderHistoryDataCollection = new BHGEOrderHistoryCollectionData();


			final BHGEOrderHistoryData orderHistoryData = new BHGEOrderHistoryData();
			orderHistoryData.setCode("test");
			orderHistoryData.setCurrency("USD");
			orderHistoryData.setDivision("Tmo Div");
			orderHistoryData.setHeaderShippingAddress("New Jersey");
			orderHistoryData.setSalesRegion("NJ test");
			orderHistoryData.setOrderType("New Order");
			orderHistoryData.setSoldTo("US Amazon");
			orderHistoryData.setPurchaseOrderNumber("123");

			final HashMap tmp = new HashMap();
			tmp.put("test", orderHistoryData);
			orderHistoryDataCollection.setBhgeOrderHistoryHeaderData(tmp);

		}
		else
		{
			LOG.info("SAP Call Execution - " + mockData + " | " + orderHistoryCacheRegion.getName() + " | "
					+ orderHistoryCacheRegion.getCacheMaxEntries() + " | " + orderHistoryCacheRegion.getAllKeys().toString());
			orderHistoryDataCollection = (BHGEOrderHistoryCollectionData) orderHistoryCacheRegion.getWithLoader(cacheKey,
					bhgeCacheValueLoader);

		}

		return orderHistoryDataCollection;
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

	@SuppressWarnings(
	{ "unchecked", "rawtypes" })
	protected SearchPageData<BHGEOrderHistoryData> prepareOrderHistoryData(final PageableData pageableData,
			final BHGEOrderHistoryCollectionData orderHistoryDataCollection, final String statusFilter, final String sapOrderType)
	{
		List<BHGEOrderHistoryData> orderHeaderItems = null;
		if (null != orderHistoryDataCollection && null != orderHistoryDataCollection.getBhgeOrderHistoryHeaderData()
				&& orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().size() > 0)
		{
			orderHeaderItems = new ArrayList<BHGEOrderHistoryData>(
					orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values());
			Collections.sort(orderHeaderItems, new BHGEWSOrderDataComparator());

		}

		if (null == orderHeaderItems)
		{
			return null;
		}
		else if (orderHeaderItems.size() == 0)
		{
			return new SearchPageData<BHGEOrderHistoryData>();
		}

		Count countModel = new Count();

		countModel = processCount(orderHeaderItems);


		return createSearchPageData(orderHeaderItems, pageableData, statusFilter, sapOrderType);
	}

	/* Anish Start */
	protected SearchPageData<BHGEOrderHistoryData> newPrepareOrderHistoryData(final PageableData pageableData,
			final List<BHGEOrderHistoryData> orderHeaderItems, final String statusFilter, final String sapOrderType)
	{
		/*
		 * List<BHGEOrderHistoryData> orderHeaderItems = null; if (null != orderHistoryDataCollection && null !=
		 * orderHistoryDataCollection.getBhgeOrderHistoryHeaderData() &&
		 * orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().size() > 0) { orderHeaderItems = new
		 * ArrayList<BHGEOrderHistoryData>( orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values());
		 * Collections.sort(orderHeaderItems, new BHGEWSOrderDataComparator());
		 *
		 * }
		 */

		if (null == orderHeaderItems)
		{
			return null;
		}
		else if (orderHeaderItems.size() == 0)
		{
			return new SearchPageData<BHGEOrderHistoryData>();
		}

		return createSearchPageData(orderHeaderItems, pageableData, statusFilter, sapOrderType);
	}
	/* Anish End */

	/* overloading method prepareOrderHistoryData for sorting the Orders */
	protected SearchPageData<BHGEOrderHistoryData> prepareOrderHistoryData(final PageableData pageableData,
			final BHGEOrderHistoryCollectionData orderHistoryDataCollection, final String sortByDateType, final String statusFilter,
			final String sapOrderType)
	{
		//final Map<String, BHGEOrderHistoryData> count = orderHistoryDataCollection.getBhgeOrderHistoryHeaderData();

		final String sortKey = pageableData.getSort();
		List<BHGEOrderHistoryData> orderHeaderItems = null;
		Count countModel = new Count();
		if (null != orderHistoryDataCollection && null != orderHistoryDataCollection.getBhgeOrderHistoryHeaderData()
				&& orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().size() > 0)
		{

			orderHeaderItems = new ArrayList<BHGEOrderHistoryData>(
					orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values());

			countModel = processCount(orderHeaderItems);


			if (sortByDateType != null && sortByDateType.equalsIgnoreCase("Order") && sortKey.equalsIgnoreCase("byDateAsc"))
			{


				Collections.sort(orderHeaderItems, new BHGEWSOrderAscDataComparator().reversed());
			}

			if (sortByDateType != null && sortByDateType.equalsIgnoreCase("Ship") && sortKey.equalsIgnoreCase("byDateAsc"))
			{

				Collections.sort(orderHeaderItems, new BHGEWSOrderDataAscShipComparator().reversed());
			}
			if (sortByDateType != null && sortByDateType.equalsIgnoreCase("Order") && sortKey.equalsIgnoreCase("byDateDsc"))
			{


				Collections.sort(orderHeaderItems, new BHGEWSOrderDataComparator());
			}

			if (sortByDateType != null && sortByDateType.equalsIgnoreCase("Ship") && sortKey.equalsIgnoreCase("byDateDsc"))
			{

				Collections.sort(orderHeaderItems, new BHGEWSOrderDataShipComparator());
			}

			if (sortKey.equalsIgnoreCase("CreateAsc"))
			{
				Collections.sort(orderHeaderItems, new BHGEWSOrderDataComparator().reversed());
			}
			else if (sortKey.equalsIgnoreCase("CreateDsc"))
			{
				Collections.sort(orderHeaderItems, new BHGEWSOrderDataComparator());
			}
			else if (sortKey.equalsIgnoreCase("UpdateAsc"))
			{
				Collections.sort(orderHeaderItems, new BHGEWSOrderUpdateComparator().reversed());
			}
			else if (sortKey.equalsIgnoreCase("UpdateDsc"))
			{
				Collections.sort(orderHeaderItems, new BHGEWSOrderUpdateComparator());
			}
			else if (sortByDateType == null || "".equals(sortByDateType))
			{
				Collections.sort(orderHeaderItems, new BHGEWSOrderDataComparator());
			}

			if (null == orderHeaderItems)
			{
				return null;
			}
			else if (orderHeaderItems.size() == 0)
			{
				return new SearchPageData<BHGEOrderHistoryData>();
			}

			LOG.debug("orderHistoryData SearchPageData " + orderHeaderItems.size() + " pageableData " + pageableData);

		}

		return createSearchPageData(orderHeaderItems, pageableData, statusFilter, sapOrderType);
	}

	/**
	 * Removing Past orders and Open orders from the Cache for the current session user
	 *
	 */
	@Override
	public void removeOrderHistoryDataFromCache()
	{
		final String soldTo = getSoldTo();

		// Order Type DET
		final String DETAIL_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))
				? Config.getParameter("ORDERTYPE_DET") : "CP_DET";
		LOG.info("Loaded Clear Status Session 1905.A05 .... " + soldTo);
		final String detailOrderTrcakingkey = getKey(soldTo, DETAIL_ORDER);
		LOG.info("Loaded Clear Status Session 1905.A06 .... " + detailOrderTrcakingkey);

		final CacheKey detailOrders = new BHGECacheKey(detailOrderTrcakingkey, Registry.getCurrentTenant().getTenantID());
		orderHistoryCacheRegion.invalidate(detailOrders, false);
	}

	/**
	 * Removing Past orders and Open orders from the Cache for given Soldto customer
	 *
	 */
	@Override
	public void clearOrderHistoryCacheForCustomer(final List<String> soldToList)
	{
		final String sessionSoldTo = getSoldTo();
		// Order Type DET
		final String DETAIL_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))
				? Config.getParameter("ORDERTYPE_DET") : "CP_DET";
		if (StringUtils.isNotBlank(sessionSoldTo))
		{
			soldToList.add(sessionSoldTo);
		}
		for (final String soldTo : soldToList)
		{
			LOG.info("Loaded Clear Status Multi 1905.A05 .... " + soldTo);
			final String detailOrderTrcakingkey = getKey(soldTo, DETAIL_ORDER);
			LOG.info("Loaded Clear Status Multi 1905.A06 .... " + detailOrderTrcakingkey);

			final CacheKey detailOrderCache = new BHGECacheKey(detailOrderTrcakingkey, Registry.getCurrentTenant().getTenantID());
			orderHistoryCacheRegion.invalidate(detailOrderCache, false);
		}
	}

	protected SearchPageData<BHGEOrderHistoryData> createSearchPageData(final List<BHGEOrderHistoryData> orderHistoryData,
			final PageableData pageableData, final String statusFilter, final String sapOrderType)
	{

		final List<BHGEOrderHistoryData> orderHistoryAfterFilter = new ArrayList<BHGEOrderHistoryData>();


		if (null != orderHistoryData)
		{

			if (StringUtils.isNotBlank(sapOrderType) && sapOrderType.equalsIgnoreCase("repair")
					&& (StringUtils.isBlank(statusFilter)))
			{
				for (final BHGEOrderHistoryData orderData : orderHistoryData)
				{
					final String OrderStatus = orderData.getOrderStatus();
					final String orderType = orderData.getOrderType();
					if ((OrderStatus.equalsIgnoreCase("Processing")) || (OrderStatus.equalsIgnoreCase("Awaiting Receipt"))
							|| (OrderStatus.equalsIgnoreCase("Scrapped")) || (OrderStatus.equalsIgnoreCase("Shipped"))
							|| (OrderStatus.equalsIgnoreCase("Blocked")))
					{
						if (StringUtils.isNotBlank(orderType) && orderType.equalsIgnoreCase("ZRAS"))
						{
							orderHistoryAfterFilter.add(orderData);
						}
					}

				}
			}
			else if (StringUtils.isNotBlank(sapOrderType) && sapOrderType.equalsIgnoreCase("product")
					&& (StringUtils.isBlank(statusFilter)))
			{
				for (final BHGEOrderHistoryData orderData : orderHistoryData)
				{
					final String OrderStatus = orderData.getOrderStatus();
					final String orderType = orderData.getOrderType();

					if ((OrderStatus.equalsIgnoreCase("Received")) || (OrderStatus.equalsIgnoreCase("Shipped"))
							|| (OrderStatus.equalsIgnoreCase("Shipped & Invoiced")) || (OrderStatus.equalsIgnoreCase("Processing"))
							|| (OrderStatus.equalsIgnoreCase("Blocked")))
					{
						if (StringUtils.isNotBlank(orderType) && !orderType.equalsIgnoreCase("ZRAS"))
						{
							orderHistoryAfterFilter.add(orderData);
						}

					}


				}
			}
			else if (StringUtils.isNotBlank(statusFilter) && StringUtils.isNotBlank(sapOrderType)
					&& (sapOrderType.equalsIgnoreCase("product")))
			{
				for (final BHGEOrderHistoryData orderData : orderHistoryData)
				{
					final String OrderStatus = orderData.getOrderStatus();
					final String orderType = orderData.getOrderType();
					if ((OrderStatus.equalsIgnoreCase(statusFilter)))
					{
						if (StringUtils.isNotBlank(orderType) && !orderType.equalsIgnoreCase("ZRAS"))
						{
							orderHistoryAfterFilter.add(orderData);
						}
                    }
				}
			}
			else if (StringUtils.isNotBlank(statusFilter) && StringUtils.isNotBlank(sapOrderType)
					&& (sapOrderType.equalsIgnoreCase("repair")))
			{
				for (final BHGEOrderHistoryData orderData : orderHistoryData)
				{
					final String OrderStatus = orderData.getOrderStatus();
					final String orderType = orderData.getOrderType();
					if ((OrderStatus.equalsIgnoreCase(statusFilter)))
					{
						if (StringUtils.isNotBlank(orderType) && orderType.equalsIgnoreCase("ZRAS"))
						{
							orderHistoryAfterFilter.add(orderData);
						}

					}
                }
			}
            else
			{

				for (final BHGEOrderHistoryData orderData : orderHistoryData)
				{
					orderHistoryAfterFilter.add(orderData);
				}
			}


			final SearchPageData<BHGEOrderHistoryData> result = new SearchPageData<BHGEOrderHistoryData>();

			final PaginationData paginationData = new PaginationData();

			paginationData.setPageSize(pageableData.getPageSize());
			paginationData.setSort(pageableData.getSort());
			paginationData.setTotalNumberOfResults(orderHistoryAfterFilter.size());

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

			if (orderHistoryAfterFilter.size() <= pageableData.getPageSize())
			{
				result.setResults(orderHistoryAfterFilter);
			}
			else if (endIndex <= orderHistoryAfterFilter.size())
			{
				result.setResults(orderHistoryAfterFilter.subList(startIndex, endIndex));
			}
			else if (startIndex < orderHistoryAfterFilter.size())
			{
				result.setResults(orderHistoryAfterFilter.subList(startIndex, orderHistoryAfterFilter.size()));
			}
			return result;
		}
		return null;
	}

	@Override
	public Map<String, Object> getBhgeOrderStatus(final OrderHistoryFormSearchData searchData, final PageableData pageableData,
			final List<String> multipleSoldToId, final String statusFilter, final String sapOrderType, final String orderNumber)
	{
		final Map<String, Object> responseObject = new HashMap<>();
		List<String> accountListing = null;
		if (multipleSoldToId != null && multipleSoldToId.size() > 0)
		{
			accountListing = multipleSoldToId;
		}
		else
		{
			accountListing = new ArrayList();
			accountListing.add(getSoldTo());
		}
		final SearchPageData<BHGEOrderHistoryData> searchPageData = getSearchOrderResult(searchData, pageableData, accountListing,
				statusFilter, sapOrderType, responseObject, orderNumber);
		responseObject.put("orderHistoryData", searchPageData);
		return responseObject;
	}

	@Override
	public Map<String, Object> getBhgeOrderStatusForWS(final OrderHistoryFormSearchData searchData, final PageableData pageableData,
													   final List<String> multipleSoldToId, final String statusFilter, final String sapOrderType, final String orderNumber, boolean excludeDefaultSoldTo)
	{
		LOG.info("DE177215 Inside getBhgeOrderStatusForWS");
		final Map<String, Object> responseObject = new HashMap<>();
		List<String> accountListing = null;

		if (!multipleSoldToId.isEmpty())
		{
			LOG.info("getBhgeOrderStatusForWS multipleSoldToId size: " + multipleSoldToId.size());
			accountListing = multipleSoldToId;
		}
		else
		{
			LOG.info("getBhgeOrderStatusForWS multipleSoldToId is empty, adding default sold to: " + getSoldTo());
			accountListing = new ArrayList();
			accountListing.add(getSoldTo());
		}
		final SearchPageData<BHGEOrderHistoryData> searchPageData = getSearchOrderResultForWs(searchData, pageableData, accountListing,
				statusFilter, sapOrderType, responseObject, orderNumber, excludeDefaultSoldTo);
		findConfigurableProduct(searchPageData);
		responseObject.put("orderHistoryData", searchPageData);
		return responseObject;
	}
	
	private void findConfigurableProduct (final SearchPageData<BHGEOrderHistoryData> searchPageData) {
		final List<BHGEOrderHistoryData> orderDataList = searchPageData.getResults();
		if (CollectionUtils.isNotEmpty(orderDataList)) {
			for (BHGEOrderHistoryData orderData : orderDataList) {
				final String orderCode = orderData.getCode();
				final OrderModel orderModel = isCommerceOrder(orderCode);
				if (orderModel != null) {
					final List<OrderHistoryViewData> orderHistoryViewDataList = orderData.getLineData();
					for (OrderHistoryViewData orderHistoryViewData: orderHistoryViewDataList) {
						final String partNumber = orderHistoryViewData.getPartNumber();
						try {
							final ProductModel product = productService.getProductForCode(partNumber);
							if (product != null) {
								LOG.debug("In order status - product found for partnumber " + partNumber + " present in order " + orderCode);
								orderModel.getEntries().forEach(entry -> {
									if (entry.getProduct().getCode().equalsIgnoreCase(partNumber)) {
										orderHistoryViewData.setEntryNumber(entry.getEntryNumber());
									}
								});
								if (product.getSapConfigurable() != null) {
									LOG.debug("In order status - product " + partNumber + " is configurable product " + product.getSapConfigurable() + " present in order " + orderCode);
									orderHistoryViewData.setConfigurable(product.getSapConfigurable());
								}
								
							} else {
								LOG.info("In order status - product not found for partnumber " + partNumber + " present in order " + orderCode);
							}
						} catch (Exception ex) {
							LOG.info("In order status - product not found for partnumber " + partNumber + " present in order " + orderCode, ex);
						}
						
					}
				}
			}
		}
		
	}
	
	private OrderModel isCommerceOrder (final String orderCode) {
		
		OrderModel orderModel = null;
		try {
			final BaseStoreModel baseStoreModel = getBaseStoreService().getCurrentBaseStore();
			LOG.debug("current basestore is " + baseStoreModel.getUid());
			orderModel = getCustomerAccountService().getOrderForCode(orderCode, baseStoreModel);
			if (orderModel == null) {
				LOG.info("order not found in commerce with code " + orderCode );
			} else {
				LOG.debug("order found in commerce with code " + orderCode );
			}
		} catch (Exception ex) {
			LOG.info("order not found in commerce with code " + orderCode, ex);
		}
		
		return orderModel;
	}


	@Override
	public Map<String, Object> getBhgeOrderStatusForEmail(final String customerNumber, final OrderHistoryFormSearchData searchData,
			final PageableData pageableData, final List<String> multipleSoldToId, final String statusFilter,
			final String sapOrderType, final String orderNumber)
	{
		final Map<String, Object> responseObject = new HashMap<>();
		List<String> accountListing = null;
		if (multipleSoldToId != null && multipleSoldToId.size() > 0)
		{
			accountListing = multipleSoldToId;
		}
		else
		{
			accountListing = new ArrayList();
			accountListing.add(getSoldTo());
		}
		final SearchPageData<BHGEOrderHistoryData> searchPageData = getSearchOrderResultForEmail(customerNumber, searchData,
				pageableData, accountListing, statusFilter, sapOrderType, responseObject, orderNumber);
		responseObject.put("orderHistoryData", searchPageData);
		return responseObject;
	}



	public SearchPageData<BHGEOrderHistoryData> getSearchOrderResultForEmail(final String customerNumber,
			final OrderHistoryFormSearchData searchData, final PageableData pageableData, final List<String> multipleSoldToId,
			final String statusFilter, final String sapOrderType, final Map<String, Object> responseObject, final String orderNumber)
	{
		// Order Type DET
		String orderType = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET"))) ? Config.getParameter("ORDERTYPE_DET")
				: "CP_DET";

		if (searchData != null && StringUtils.isNotBlank(searchData.getPageFlag()))
		{
			orderType = bhgeOrderHistoryService.getOrderType(searchData.getPageFlag());
		}
		LOG.info("Order Status Type Flag Settings - " + searchData.getPageFlag() + " | " + orderType);

		final String seesionSoldToIDSingle = customerNumber;
		final String soldToIdForSingleCache = getKey(seesionSoldToIDSingle, orderType);
		final String sortByDateType = searchData.getSortByDateType();
		final List<BHGEOrderHistoryCollectionData> subListOfMap = new ArrayList<BHGEOrderHistoryCollectionData>();

		if ((multipleSoldToId != null) && (multipleSoldToId.size() > 0) && (!multipleSoldToId.isEmpty()))
		{
			if (StringUtils.isNotBlank(seesionSoldToIDSingle) && !multipleSoldToId.contains(seesionSoldToIDSingle))
			{
				multipleSoldToId.add(seesionSoldToIDSingle);
			}
			for (final String soldto : multipleSoldToId)
			{
				if (StringUtils.isNotBlank(soldto))
				{
					//LOG.info("creating data for multiple sold to id - " + soldto);
					final BHGEOrderHistoryCollectionData orderHisotryData = getOrderHistoryDataForUser(orderType,
							getKey(soldto, orderType));
					if (orderHisotryData != null)
					{
						subListOfMap.add(orderHisotryData);
					}
				}
			}
		}
		else
		{
			final BHGEOrderHistoryCollectionData orderHisotryData = getOrderHistoryDataForUser(orderType, soldToIdForSingleCache);
			if (orderHisotryData != null)
			{
				subListOfMap.add(orderHisotryData);
			}
		}

		// If PoOrderNum / Order Type / From Date or To Date exists in Search data, then search which will be performed using Order History cache
		final List<BHGEOrderHistoryData> newOrderHeaderItems = new ArrayList<BHGEOrderHistoryData>();
		if (StringUtils.isNotBlank(orderNumber))
		{
			//LOG.info("Order Status Explicit Order Number Flow - " + orderNumber);
			for (final BHGEOrderHistoryCollectionData orderHistoryDataCollection : subListOfMap)
			{
				final Map<String, BHGEOrderHistoryData> orderHeaderData = orderHistoryDataCollection.getBhgeOrderHistoryHeaderData();
				if (orderHeaderData != null && orderHeaderData.get(orderNumber) != null)
				{
					newOrderHeaderItems.add(orderHeaderData.get(orderNumber));
				}
			}
		}
		else
		{
			if (isFiltersPresent(searchData))
			{
				//LOG.info("Order Status Inside Filter Flow - " + searchData.toString());
				final BHGEOrderHistoryCollectionData orderHistoryDataCollection = applyOrderStatusFilters(subListOfMap, searchData);
				if (orderHistoryDataCollection.getBhgeOrderHistoryHeaderData() != null)
				{
					newOrderHeaderItems.addAll(
							new ArrayList<BHGEOrderHistoryData>(orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values()));
				}
			}
			// If No search term (PoOrderNum / Order Type / From Date / To Date) present in searchData, then all orders will be retrieved from Cache
			else
			{
				//LOG.info("Order Status Outside Filter Flow - " + searchData.toString());

				for (final BHGEOrderHistoryCollectionData orderHistoryDataCollection : subListOfMap)
				{
					if (orderHistoryDataCollection.getBhgeOrderHistoryHeaderData() != null)
					{
						newOrderHeaderItems.addAll(
								new ArrayList<BHGEOrderHistoryData>(orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values()));
					}
				}
			}
			responseObject.put("DashboardData", processCount(newOrderHeaderItems));
			final List<String> productLineList = buildProductLineList(newOrderHeaderItems);
			responseObject.put("productLines", productLineList);
		}

		return prepareMultipleOrderHistoryData(pageableData, newOrderHeaderItems, sortByDateType, statusFilter, sapOrderType);
	}



	public Count processCount(final List<BHGEOrderHistoryData> newOrderHeaderItems)
	{

		int count = 0;
		int shippedCount = 0;
		int processingCount = 0;
		int awaitingCount = 0;
		int awaitingReceiptCount = 0;
		int inProcessCount = 0;
		int blkcount = 0;
		int scrappedCount = 0;
		int deliveredCount = 0;
		int totalProductCount = 0;
		int totalRepairCount = 0;
		int repairBlockCount = 0;

		final Count cont = new Count();

		// YTODO Auto-generated method stub
		for (final BHGEOrderHistoryData geHistory : newOrderHeaderItems)
		{
			// YTODO Auto-generated method stub
			if (geHistory.getOrderStatus() != null)
			{
				if (geHistory.getOrderType() != null && !geHistory.getOrderType().equalsIgnoreCase("ZRAS"))
				{
					if (geHistory.getOrderStatus().equalsIgnoreCase("Received"))
					{
						count++;
					}
					if (geHistory.getOrderStatus().equalsIgnoreCase("Shipped"))
					{
						awaitingCount++;
					}
					if (geHistory.getOrderStatus().equalsIgnoreCase("Shipped & Invoiced"))
					{
						shippedCount++;
					}
					if (geHistory.getOrderStatus().equalsIgnoreCase("Processing"))
					{
						processingCount++;
					}
					if ((geHistory.getBkID() != null) && (geHistory.getBkID() != ""))
					{
						blkcount++;
					}
					//totalProductCount++;
					totalProductCount = count + awaitingCount + shippedCount + processingCount + blkcount;

				}
				if (geHistory.getOrderType() != null && geHistory.getOrderType().equalsIgnoreCase("ZRAS"))
				{
					if (geHistory.getOrderStatus().equalsIgnoreCase("Awaiting Receipt"))
					{
						awaitingReceiptCount++;
					}
					if (geHistory.getOrderStatus().equalsIgnoreCase("Processing"))
					{
						inProcessCount++;
					}
					if (geHistory.getOrderStatus().equalsIgnoreCase("Scrapped"))
					{
						scrappedCount++;
					}
					if (geHistory.getOrderStatus().equalsIgnoreCase("Shipped"))
					{
						deliveredCount++;
					}
					if ((geHistory.getBkID() != null) && (geHistory.getBkID() != ""))
					{
						repairBlockCount++;
					}
					//totalRepairCount++;
					totalRepairCount = awaitingReceiptCount + inProcessCount + scrappedCount + deliveredCount + repairBlockCount;
				}
			}

		}
		System.out.println("shippedCount : " + shippedCount);
		cont.setCount(count);
		cont.setAwaitingCount(awaitingCount);
		cont.setBlkcount(blkcount);
		cont.setProcessingCount(processingCount);
		cont.setShippedCount(shippedCount);
		cont.setAwaitingReceipt(awaitingReceiptCount);
		cont.setDelivered(deliveredCount);
		cont.setScrapped(scrappedCount);
		cont.setInProcess(inProcessCount);
		cont.setTotalProductOrderCount(totalProductCount);
		cont.setTotalRepairCount(totalRepairCount);
		cont.setRepairBlockCount(repairBlockCount);
		return cont;
	}

	public OrderStatusCountWsDTO processCountForWs(final List<BHGEOrderHistoryData> newOrderHeaderItems)
	{

		int count = 0;
		int shippedCount = 0;
		int processingCount = 0;
		int awaitingCount = 0;
		int awaitingReceiptCount = 0;
		int inProcessCount = 0;
		int blkcount = 0;
		int scrappedCount = 0;
		int deliveredCount = 0;
		int totalProductCount = 0;
		int totalRepairCount = 0;
		int repairBlockCount = 0;

		final OrderStatusCountWsDTO cont = new OrderStatusCountWsDTO();

		// YTODO Auto-generated method stub
		for (final BHGEOrderHistoryData geHistory : newOrderHeaderItems)
		{
			// YTODO Auto-generated method stub
			if (geHistory.getOrderStatus() != null)
			{
				if (geHistory.getOrderType() != null && !geHistory.getOrderType().equalsIgnoreCase("ZRAS"))
				{
					if (geHistory.getOrderStatus().equalsIgnoreCase("Received"))
					{
						count++;
					}
					if (geHistory.getOrderStatus().equalsIgnoreCase("Shipped"))
					{
						awaitingCount++;
					}
					if (geHistory.getOrderStatus().equalsIgnoreCase("Shipped & Invoiced"))
					{
						shippedCount++;
					}
					if (geHistory.getOrderStatus().equalsIgnoreCase("Processing"))
					{
						processingCount++;
					}
					if ((geHistory.getBkID() != null) && (geHistory.getBkID() != ""))
					{
						blkcount++;
					}
					//totalProductCount++;
					totalProductCount = count + awaitingCount + shippedCount + processingCount + blkcount;

				}
				if (geHistory.getOrderType() != null && geHistory.getOrderType().equalsIgnoreCase("ZRAS"))
				{
					if (geHistory.getOrderStatus().equalsIgnoreCase("Awaiting Receipt"))
					{
						awaitingReceiptCount++;
					}
					if (geHistory.getOrderStatus().equalsIgnoreCase("Processing"))
					{
						inProcessCount++;
					}
					if (geHistory.getOrderStatus().equalsIgnoreCase("Scrapped"))
					{
						scrappedCount++;
					}
					if (geHistory.getOrderStatus().equalsIgnoreCase("Shipped"))
					{
						deliveredCount++;
					}
					if ((geHistory.getBkID() != null) && (geHistory.getBkID() != ""))
					{
						repairBlockCount++;
					}
					//totalRepairCount++;
					totalRepairCount = awaitingReceiptCount + inProcessCount + scrappedCount + deliveredCount + repairBlockCount;
				}
			}

		}
		System.out.println("shippedCount : " + shippedCount);
		cont.setCount(count);
		cont.setAwaitingCount(awaitingCount);
		cont.setBlkcount(blkcount);
		cont.setProcessingCount(processingCount);
		cont.setShippedCount(shippedCount);
		cont.setAwaitingReceipt(awaitingReceiptCount);
		cont.setDelivered(deliveredCount);
		cont.setScrapped(scrappedCount);
		cont.setInProcess(inProcessCount);
		cont.setTotalProductOrderCount(totalProductCount);
		cont.setTotalRepairCount(totalRepairCount);
		cont.setRepairBlockCount(repairBlockCount);
		return cont;
	}



	/**
	 * Get the Orders collection based on the given search criteria
	 *
	 */
	public SearchPageData<BHGEOrderHistoryData> getSearchOrderResult(final OrderHistoryFormSearchData searchData,
			final PageableData pageableData, final List<String> multipleSoldToId, final String statusFilter,
			final String sapOrderType, final Map<String, Object> responseObject, final String orderNumber)
	{
		// Order Type DET
		String orderType = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET"))) ? Config.getParameter("ORDERTYPE_DET")
				: "CP_DET";

		if (searchData != null && StringUtils.isNotBlank(searchData.getPageFlag()))
		{
			orderType = bhgeOrderHistoryService.getOrderType(searchData.getPageFlag());
		}
		//LOG.info("Order Status Type Flag Settings - " + searchData.getPageFlag() + " | " + orderType);

		final String seesionSoldToIDSingle = getSoldTo();
		final String soldToIdForSingleCache = getKey(seesionSoldToIDSingle, orderType);
		final String sortByDateType = searchData.getSortByDateType();
		final List<BHGEOrderHistoryCollectionData> subListOfMap = new ArrayList<BHGEOrderHistoryCollectionData>();

		if ((multipleSoldToId != null) && (multipleSoldToId.size() > 0) && (!multipleSoldToId.isEmpty()))
		{
			if (StringUtils.isNotBlank(seesionSoldToIDSingle) && !multipleSoldToId.contains(seesionSoldToIDSingle))
			{
				multipleSoldToId.add(seesionSoldToIDSingle);
			}
			for (final String soldto : multipleSoldToId)
			{
				if (StringUtils.isNotBlank(soldto))
				{
					final BHGEOrderHistoryCollectionData orderHisotryData = getOrderHistoryDataForUser(orderType,
							getKey(soldto, orderType));
					if (orderHisotryData != null)
					{
						subListOfMap.add(orderHisotryData);
						if (orderHisotryData.isExecutionException() || orderHisotryData.isInterruptedException()
								|| orderHisotryData.isTimeoutException())
						{
							responseObject.put("SAPError", "SAPError");
						}
					}
				}
			}
		}
		else
		{
			final BHGEOrderHistoryCollectionData orderHisotryData = getOrderHistoryDataForUser(orderType, soldToIdForSingleCache);
			if (orderHisotryData != null)
			{
				subListOfMap.add(orderHisotryData);
				if (orderHisotryData.isExecutionException() || orderHisotryData.isInterruptedException()
						|| orderHisotryData.isTimeoutException())
				{
					responseObject.put("SAPError", "SAPError");
				}
			}
		}

		// If PoOrderNum / Order Type / From Date or To Date exists in Search data, then search which will be performed using Order History cache
		final List<BHGEOrderHistoryData> newOrderHeaderItems = new ArrayList<BHGEOrderHistoryData>();
		if (StringUtils.isNotBlank(orderNumber))
		{
			//LOG.info("Order Status Explicit Order Number Flow - " + orderNumber);
			if (!subListOfMap.isEmpty())
			{
				for (final BHGEOrderHistoryCollectionData orderHistoryDataCollection : subListOfMap)
				{
					final Map<String, BHGEOrderHistoryData> orderHeaderData = orderHistoryDataCollection
							.getBhgeOrderHistoryHeaderData();
					if (orderHeaderData != null && orderHeaderData.get(orderNumber) != null)
					{
						newOrderHeaderItems.add(orderHeaderData.get(orderNumber));
					}
				}
			}
		}
		else
		{
			if (isFiltersPresent(searchData))
			{
				//LOG.info("Order Status Inside Filter Flow - " + searchData.toString());
				final BHGEOrderHistoryCollectionData orderHistoryDataCollection = applyOrderStatusFilters(subListOfMap, searchData);
				if (orderHistoryDataCollection.getBhgeOrderHistoryHeaderData() != null)
				{
					newOrderHeaderItems.addAll(
							new ArrayList<BHGEOrderHistoryData>(orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values()));
				}
			}
			// If No search term (PoOrderNum / Order Type / From Date / To Date) present in searchData, then all orders will be retrieved from Cache
			else
			{
				//LOG.info("Order Status Outside Filter Flow - " + searchData.toString());

				if (!subListOfMap.isEmpty())
				{
					for (final BHGEOrderHistoryCollectionData orderHistoryDataCollection : subListOfMap)
					{
						if (orderHistoryDataCollection.getBhgeOrderHistoryHeaderData() != null)
						{
							newOrderHeaderItems.addAll(new ArrayList<BHGEOrderHistoryData>(
									orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values()));
						}
					}
				}

			}
			responseObject.put("DashboardData", processCount(newOrderHeaderItems));
			final List<String> productLineList = buildProductLineList(newOrderHeaderItems);
			responseObject.put("productLines", productLineList);
		}

		return prepareMultipleOrderHistoryData(pageableData, newOrderHeaderItems, sortByDateType, statusFilter, sapOrderType);
	}

	/**
	 * Get the Orders collection based on the given search criteria
	 *
	 */
	public SearchPageData<BHGEOrderHistoryData> getSearchOrderResultForWs(final OrderHistoryFormSearchData searchData,
																		  final PageableData pageableData, final List<String> multipleSoldToId, final String statusFilter,
																		  final String sapOrderType, final Map<String, Object> responseObject, final String orderNumber, boolean excludeDefaultSoldTo)
	{
		LOG.info("DE177215 Inside getBhgeOrderStatusForWS");
		// Order Type DET
		String orderType = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET"))) ? Config.getParameter("ORDERTYPE_DET")
				: "CP_DET";

		if (searchData != null && StringUtils.isNotBlank(searchData.getPageFlag()))
		{
			orderType = bhgeOrderHistoryService.getOrderType(searchData.getPageFlag());
		}
		//LOG.info("Order Status Type Flag Settings - " + searchData.getPageFlag() + " | " + orderType);

		final String soldToIDSingle = getSoldToForWS();
		final String soldToIdForSingleCache = getKey(soldToIDSingle, orderType);
		final String sortByDateType = searchData.getSortByDateType();
		final List<BHGEOrderHistoryCollectionData> subListOfMap = new ArrayList<BHGEOrderHistoryCollectionData>();

		if ((multipleSoldToId != null) && (multipleSoldToId.size() > 0) && (!multipleSoldToId.isEmpty()))
		{
			if (StringUtils.isNotBlank(soldToIDSingle) && !multipleSoldToId.contains(soldToIDSingle) && !excludeDefaultSoldTo)
			{
				multipleSoldToId.add(soldToIDSingle);
			}
			for (final String soldto : multipleSoldToId) {
				if (StringUtils.isNotBlank(soldto)) {
					final BHGEOrderHistoryCollectionData orderHisotryData = getOrderHistoryDataForUser(orderType,
							getKey(soldto, orderType));
					if (orderHisotryData != null) {
						subListOfMap.add(orderHisotryData);
						if (orderHisotryData.isExecutionException() || orderHisotryData.isInterruptedException()
								|| orderHisotryData.isTimeoutException()) {
							responseObject.put("SAPError", "SAPError");
						}
					}
				}
			}
		}		
		else
		{
			final BHGEOrderHistoryCollectionData orderHisotryData = getOrderHistoryDataForUser(orderType, soldToIdForSingleCache);
			if (orderHisotryData != null)
			{
				subListOfMap.add(orderHisotryData);
				if (orderHisotryData.isExecutionException() || orderHisotryData.isInterruptedException()
						|| orderHisotryData.isTimeoutException())
				{
					responseObject.put("SAPError", "SAPError");
				}
			}
		}

		// If PoOrderNum / Order Type / From Date or To Date exists in Search data, then search which will be performed using Order History cache
		final List<BHGEOrderHistoryData> newOrderHeaderItems = new ArrayList<BHGEOrderHistoryData>();
		if (StringUtils.isNotBlank(orderNumber))
		{
			//LOG.info("Order Status Explicit Order Number Flow - " + orderNumber);
			if (!subListOfMap.isEmpty())
			{
				for (final BHGEOrderHistoryCollectionData orderHistoryDataCollection : subListOfMap)
				{
					final Map<String, BHGEOrderHistoryData> orderHeaderData = orderHistoryDataCollection
							.getBhgeOrderHistoryHeaderData();
					if (orderHeaderData != null && orderHeaderData.get(orderNumber) != null)
					{
						newOrderHeaderItems.add(orderHeaderData.get(orderNumber));
					}
				}
			}
		}
		else
		{
			if (isFiltersPresent(searchData))
			{
				//LOG.info("Order Status Inside Filter Flow - " + searchData.toString());
				final BHGEOrderHistoryCollectionData orderHistoryDataCollection = applyOrderStatusFilters(subListOfMap, searchData);
				if (orderHistoryDataCollection.getBhgeOrderHistoryHeaderData() != null)
				{
					newOrderHeaderItems.addAll(
							new ArrayList<BHGEOrderHistoryData>(orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values()));
				}
			}
			// If No search term (PoOrderNum / Order Type / From Date / To Date) present in searchData, then all orders will be retrieved from Cache
			else
			{
				//LOG.info("Order Status Outside Filter Flow - " + searchData.toString());

				if (!subListOfMap.isEmpty())
				{
					for (final BHGEOrderHistoryCollectionData orderHistoryDataCollection : subListOfMap)
					{
						if (orderHistoryDataCollection.getBhgeOrderHistoryHeaderData() != null)
						{
							newOrderHeaderItems.addAll(new ArrayList<BHGEOrderHistoryData>(
									orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().values()));
						}
					}
				}

			}
			responseObject.put("DashboardData", processCountForWs(newOrderHeaderItems));
			final List<String> productLineList = buildProductLineList(newOrderHeaderItems);
			responseObject.put("productLines", productLineList);
		}

		return prepareMultipleOrderHistoryData(pageableData, newOrderHeaderItems, sortByDateType, statusFilter, sapOrderType);
	}

	private List<String> buildProductLineList(final List<BHGEOrderHistoryData> orderHaderData)
	{
		final Map<String, String> productLineMap = new HashMap();
		for (final BHGEOrderHistoryData orderRecord : orderHaderData)
		{
			final String valProductLine = orderRecord.getProductLine();
			if (valProductLine != null && StringUtils.isNotBlank(valProductLine) && productLineMap.get(valProductLine) == null)
			{
				productLineMap.put(valProductLine, valProductLine);
			}
		}
		final List<String> productLineList = new ArrayList();
		productLineList.addAll(productLineMap.values());
		//LOG.info("Product Line 1905.J01 .... " + productLineList.size() + " | " + productLineList.toArray().toString());
		return productLineList;
	}

	private boolean isFiltersPresent(final OrderHistoryFormSearchData searchData)
	{
		if (searchData != null && StringUtils.isNotBlank(searchData.getPoOrderNum())
				|| StringUtils.isNotBlank(searchData.getFromDate()) || StringUtils.isNotBlank(searchData.getToDate())
				|| StringUtils.isNotBlank(searchData.getOrderType())
				|| (searchData.getProductLinesFilter() != null && searchData.getProductLinesFilter().size() > 0))
		{
			return true;
		}
		else
		{
			return false;
		}

	}

	/**
	 * Search the Orders collection in the Order History Cache based on the given search conditions
	 *
	 * @param orderHistoryCacheData
	 * @param searchData
	 * @return
	 */
	protected BHGEOrderHistoryCollectionData searchOrdersInCache(final BHGEOrderHistoryCollectionData orderHistoryCacheData,
			final OrderHistoryFormSearchData searchData)
	{
		Map<String, BHGEOrderHistoryData> searchResultOrders = new HashMap<String, BHGEOrderHistoryData>();
		Map<String, BHGEOrderHistoryData> dateSearchResults = new HashMap<String, BHGEOrderHistoryData>();
		final Map<String, BHGEOrderHistoryData> orderTypeSearchResults = new HashMap<String, BHGEOrderHistoryData>();

		if (null != orderHistoryCacheData && null != searchData)
		{
			final String searchTerm = searchData.getPoOrderNum();
			final Map<String, BHGEOrderHistoryData> cacheOrders = orderHistoryCacheData.getBhgeOrderHistoryHeaderData();
			final Map<String, Set<OrderHistoryViewData>> cacheOrderItems = orderHistoryCacheData.getBhgeOrderHistoryItemData();

			if (null != cacheOrders && cacheOrders.size() > 0)
			{

				// Search Orders based on Order Type (ZOR, ZFLM, ZRAS and ZRSM)
				if (StringUtils.isNotBlank(searchData.getOrderType()))
				{
					for (final Map.Entry<String, BHGEOrderHistoryData> entry : cacheOrders.entrySet())
					{
						final BHGEOrderHistoryData orderData = entry.getValue();
						if (orderData.getOrderType().contains(searchData.getOrderType()))
						{
							orderTypeSearchResults.put(entry.getKey(), orderData);
						}
					}
				}

				// Search Orders based on Order Placed date (From date and To date)
				if ((StringUtils.isNotBlank(searchData.getFromDate()) && StringUtils.isNotBlank(searchData.getToDate()))
						&& StringUtils.isNotBlank(searchData.getOrderType()) && orderTypeSearchResults.size() > 0)
				{
					dateSearchResults = searchOrdersWithDate(searchData, orderTypeSearchResults);
				}
				else if (StringUtils.isNotBlank(searchData.getFromDate()) && StringUtils.isNotBlank(searchData.getToDate())
						&& StringUtils.isBlank(searchData.getOrderType()))
				{
					dateSearchResults = searchOrdersWithDate(searchData, cacheOrders);
				}

				// Search Orders using Keywords like Customer PO, Sold to, Sales Order Number, Material Number and Order Status
				if (StringUtils.isNotBlank(searchTerm) && StringUtils.isNotBlank(searchData.getFromDate())
						&& StringUtils.isNotBlank(searchData.getToDate()) && dateSearchResults.size() > 0)
				{
					searchResultOrders = searchOrdersWithKeyword(dateSearchResults, searchTerm, cacheOrderItems);
				}
				else if (StringUtils.isNotBlank(searchTerm) && StringUtils.isNotBlank(searchData.getOrderType())
						&& StringUtils.isBlank(searchData.getFromDate()) && StringUtils.isBlank(searchData.getToDate())
						&& orderTypeSearchResults.size() > 0)
				{
					searchResultOrders = searchOrdersWithKeyword(orderTypeSearchResults, searchTerm, cacheOrderItems);
				}
				else if (StringUtils.isNotBlank(searchTerm) && StringUtils.isBlank(searchData.getFromDate())
						&& StringUtils.isBlank(searchData.getToDate()) && StringUtils.isBlank(searchData.getOrderType()))
				{
					searchResultOrders = searchOrdersWithKeyword(cacheOrders, searchTerm, cacheOrderItems);
				}
			}


			// Prepare the Search result map which will be returned to the caller function
			if (searchResultOrders.size() > 0)
			{
				return prepareSearchResultsData(searchResultOrders, cacheOrderItems,
						orderHistoryCacheData.getBhgeOrderHistoryDeliveryData());
			}
			else if (dateSearchResults.size() > 0 && StringUtils.isBlank(searchTerm))
			{
				return prepareSearchResultsData(dateSearchResults, cacheOrderItems,
						orderHistoryCacheData.getBhgeOrderHistoryDeliveryData());
			}
			else if (orderTypeSearchResults.size() > 0 && StringUtils.isBlank(searchData.getFromDate())
					&& StringUtils.isBlank(searchData.getToDate()) && StringUtils.isBlank(searchTerm))
			{
				return prepareSearchResultsData(orderTypeSearchResults, cacheOrderItems,
						orderHistoryCacheData.getBhgeOrderHistoryDeliveryData());
			}

		}
		return null;
	}


	protected BHGEOrderHistoryCollectionData multipleSearchOrdersInCache(
			final List<BHGEOrderHistoryCollectionData> orderHistoryCacheData, final OrderHistoryFormSearchData searchData)
	{

		Map<String, BHGEOrderHistoryData> searchResultOrders = new HashMap<String, BHGEOrderHistoryData>();
		Map<String, BHGEOrderHistoryData> dateSearchResults = new HashMap<String, BHGEOrderHistoryData>();
		final Map<String, BHGEOrderHistoryData> orderTypeSearchResults = new HashMap<String, BHGEOrderHistoryData>();
		final Map<String, Set<OrderHistoryViewData>> cacheOrderItemsset = new HashMap<String, Set<OrderHistoryViewData>>();
		final Map<String, BHGEOrderHistoryData> orderTypeSearchOrders = new HashMap<String, BHGEOrderHistoryData>();
		final Map<String, Set<OrderHistoryViewData>> cacheOrderItemssee = new HashMap<String, Set<OrderHistoryViewData>>();
		final Map<String, Set<OrderHistoryDeliveryData>> cacheOrderDelivSet = new HashMap<String, Set<OrderHistoryDeliveryData>>();



		for (final BHGEOrderHistoryCollectionData orderHistoryDataCollection : orderHistoryCacheData)
		{
			final Map<String, BHGEOrderHistoryData> cacheOrders = orderHistoryDataCollection.getBhgeOrderHistoryHeaderData();
			final Map<String, Set<OrderHistoryViewData>> cacheOrderItems = orderHistoryDataCollection.getBhgeOrderHistoryItemData();
			final Map<String, Set<OrderHistoryDeliveryData>> cacheDeliveryLines = orderHistoryDataCollection
					.getBhgeOrderHistoryDeliveryData();
			if (cacheOrders != null && cacheOrders.size() > 0)
			{
				orderTypeSearchOrders.putAll(cacheOrders);
				if (cacheOrderItems != null && cacheOrderItems.size() > 0)
				{
					cacheOrderItemssee.putAll(cacheOrderItems);
				}
				if (cacheDeliveryLines != null && cacheDeliveryLines.size() > 0)
				{
					cacheOrderDelivSet.putAll(cacheDeliveryLines);
				}
			}
		}


		if (null != orderHistoryCacheData && null != searchData)
		{
			final String searchTerm = searchData.getPoOrderNum();
			if (null != orderTypeSearchOrders && orderTypeSearchOrders.size() > 0)
			{

				// Search Orders based on Order Type (ZOR, ZFLM, ZRAS and ZRSM)
				if (StringUtils.isNotBlank(searchData.getOrderType()))
				{
					for (final Map.Entry<String, BHGEOrderHistoryData> entry : orderTypeSearchOrders.entrySet())
					{
						final BHGEOrderHistoryData orderData = entry.getValue();
						if (orderData.getOrderType().contains(searchData.getOrderType()))
						{
							orderTypeSearchResults.put(entry.getKey(), orderData);
						}
					}
				}

				// Search Orders based on Order Placed date (From date and To date)
				if ((StringUtils.isNotBlank(searchData.getFromDate()) && StringUtils.isNotBlank(searchData.getToDate()))
						&& StringUtils.isNotBlank(searchData.getOrderType()) && orderTypeSearchResults.size() > 0)
				{
					dateSearchResults = searchOrdersWithDate(searchData, orderTypeSearchResults);
				}
				else if (StringUtils.isNotBlank(searchData.getFromDate()) && StringUtils.isNotBlank(searchData.getToDate())
						&& StringUtils.isBlank(searchData.getOrderType()))
				{
					dateSearchResults = searchOrdersWithDate(searchData, orderTypeSearchOrders);
				}

				// Search Orders using Keywords like Customer PO, Sold to, Sales Order Number, Material Number and Order Status
				if (StringUtils.isNotBlank(searchTerm) && StringUtils.isNotBlank(searchData.getFromDate())
						&& StringUtils.isNotBlank(searchData.getToDate()) && dateSearchResults.size() > 0)
				{
					searchResultOrders = searchOrdersWithKeyword(dateSearchResults, searchTerm, cacheOrderItemssee);
				}
				else if (StringUtils.isNotBlank(searchTerm) && StringUtils.isNotBlank(searchData.getOrderType())
						&& StringUtils.isBlank(searchData.getFromDate()) && StringUtils.isBlank(searchData.getToDate())
						&& orderTypeSearchResults.size() > 0)
				{
					searchResultOrders = searchOrdersWithKeyword(orderTypeSearchResults, searchTerm, cacheOrderItemssee);
				}
				else if (StringUtils.isNotBlank(searchTerm) && StringUtils.isBlank(searchData.getFromDate())
						&& StringUtils.isBlank(searchData.getToDate()) && StringUtils.isBlank(searchData.getOrderType()))
				{
					searchResultOrders = searchOrdersWithKeyword(orderTypeSearchOrders, searchTerm, cacheOrderItemssee);
				}
			}


			// Prepare the Search result map which will be returned to the caller function
			if (searchResultOrders.size() > 0)
			{
				return prepareSearchResultsData(searchResultOrders, cacheOrderItemssee, cacheOrderDelivSet);
			}
			else if (dateSearchResults.size() > 0 && StringUtils.isBlank(searchTerm))
			{
				return prepareSearchResultsData(dateSearchResults, cacheOrderItemssee, cacheOrderDelivSet);
			}
			else if (orderTypeSearchResults.size() > 0 && StringUtils.isBlank(searchData.getFromDate())
					&& StringUtils.isBlank(searchData.getToDate()) && StringUtils.isBlank(searchTerm))
			{
				return prepareSearchResultsData(orderTypeSearchResults, cacheOrderItemssee, cacheOrderDelivSet);
			}

		}
		return null;
	}

	private BHGEOrderHistoryCollectionData applyOrderStatusFilters(
			final List<BHGEOrderHistoryCollectionData> orderHistoryCacheData, final OrderHistoryFormSearchData searchData)
	{

		//LOG.info("Order Status 1905 Filter 00 - " + searchData.getFromDate() + "|" + searchData.getToDate() + "|"+ searchData.getPoOrderNum() + "|" + searchData.getProductLinesFilter());

		if (null != orderHistoryCacheData)
		{
			final Map<String, BHGEOrderHistoryData> orderTypeSearchOrders = new HashMap<String, BHGEOrderHistoryData>();
			final Map<String, Set<OrderHistoryViewData>> cacheOrderItemssee = new HashMap<String, Set<OrderHistoryViewData>>();
			final Map<String, Set<OrderHistoryDeliveryData>> cacheOrderDelivSet = new HashMap<String, Set<OrderHistoryDeliveryData>>();
			for (final BHGEOrderHistoryCollectionData orderHistoryDataCollection : orderHistoryCacheData)
			{
				if (orderHistoryDataCollection.getBhgeOrderHistoryHeaderData() != null
						&& orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().size() > 0)
				{
					orderTypeSearchOrders.putAll(orderHistoryDataCollection.getBhgeOrderHistoryHeaderData());
					if (orderHistoryDataCollection.getBhgeOrderHistoryItemData() != null
							&& orderHistoryDataCollection.getBhgeOrderHistoryItemData().size() > 0)
					{
						cacheOrderItemssee.putAll(orderHistoryDataCollection.getBhgeOrderHistoryItemData());
					}
					if (orderHistoryDataCollection.getBhgeOrderHistoryDeliveryData() != null
							&& orderHistoryDataCollection.getBhgeOrderHistoryDeliveryData().size() > 0)
					{
						cacheOrderDelivSet.putAll(orderHistoryDataCollection.getBhgeOrderHistoryDeliveryData());
					}
				}
			}

			final Map<String, BHGEOrderHistoryData> orderTypeSearchResults = new HashMap<String, BHGEOrderHistoryData>();
			boolean filterRecord = false;
			if (null != orderTypeSearchOrders && orderTypeSearchOrders.size() > 0)
			{
				for (final Map.Entry<String, BHGEOrderHistoryData> entry : orderTypeSearchOrders.entrySet())
				{
					filterRecord = false;

					final BHGEOrderHistoryData orderData = entry.getValue();

					final SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
					String orderDateValue = null;
					try
					{
						if (null != orderData.getPlaced())
						{
							orderDateValue = formatter.format(orderData.getPlaced());
						}
					}
					catch (final Exception e)
					{
						LOG.error("Error occured while parsing the date " + e);
					}

					//LOG.info("Order Status 1905 Filter 01 - " + orderData.getCode() + "|" + orderDateValue + "|"+ orderData.getProductLine() + "|" + orderData.getPurchaseOrderNumber());

					//LOG.info("Order Status 1905 Filter 01.A - " + StringUtils.isNotBlank(searchData.getFromDate()) + "|"+ StringUtils.isNotBlank(searchData.getToDate()) + "|"+ isOrderPlacedEarly(searchData.getFromDate(), orderData.getPlaced()) + "|"+ isOrderPlacedLate(searchData.getToDate(), orderData.getPlaced()));


					if (StringUtils.isNotBlank(searchData.getFromDate()) && StringUtils.isNotBlank(searchData.getToDate())
							&& (isOrderPlacedBefore(searchData.getFromDate(), orderData.getPlaced())
									|| isOrderPlacedAfter(searchData.getToDate(), orderData.getPlaced())))
					{
						filterRecord = true;
					}

					//LOG.info("Order Status 1905 Filter 02 - " + filterRecord);
					if (searchData.getProductLinesFilter() != null && searchData.getProductLinesFilter().size() > 0)
					{
						if (StringUtils.isBlank(orderData.getProductLine()))
						{
							filterRecord = true;
						}
						else if (!searchData.getProductLinesFilter().contains(orderData.getProductLine()))
						{
							filterRecord = true;
						}
					}

					//LOG.info("Order Status 1905 Filter 03 - " + filterRecord);
					if (StringUtils.isNotBlank(searchData.getPoOrderNum()))
					{
						final String searchKeyword = searchData.getPoOrderNum().trim().toLowerCase();
						boolean keywordFound = false;
						if (StringUtils.isNotBlank(orderData.getCode())
								&& orderData.getCode().trim().toLowerCase().contains(searchKeyword))
						{
							keywordFound = true;
						}
						if (!keywordFound && StringUtils.isNotBlank(orderData.getPurchaseOrderNumber())
								&& orderData.getPurchaseOrderNumber().trim().toLowerCase().contains(searchKeyword))
						{
							keywordFound = true;
						}
						/*
						 * if (!keywordFound && StringUtils.isNotBlank(orderData.getSoldTo()) &&
						 * orderData.getSoldTo().toLowerCase().contains(searchKeyword)) { keywordFound = true; }
						 */
						if (!keywordFound)
						{
							final Set<OrderHistoryViewData> orderItems = cacheOrderItemssee.get(entry.getKey());
							if (null != orderItems && orderItems.size() > 0)
							{
								for (final OrderHistoryViewData orderItem : orderItems)
								{
									//orderItem.getStatus().toLowerCase().contains(searchTerm.toLowerCase())
									if (!keywordFound && orderItem.getPartNumber().trim().toLowerCase().contains(searchKeyword))
									{
										keywordFound = true;
									}
								}
							}
						}
						if (!keywordFound)
						{
							filterRecord = true;
						}
					}

					//LOG.info("Order Status 1905 Filter 04 - " + filterRecord);
					if (!filterRecord)
					{
						orderTypeSearchResults.put(entry.getKey(), orderData);
					}

				}
			}

			//LOG.info("Order Status 1905 Filter 05  " + orderTypeSearchOrders.size() + "|" + orderTypeSearchResults.size());

			return prepareSearchResultsData(orderTypeSearchResults, cacheOrderItemssee, cacheOrderDelivSet);

		}
		return null;
	}

	/**
	 * This method will search orders based on the given date conditions (from date and to date)
	 *
	 * @param searchData
	 * @param cacheOrders
	 * @return
	 */
	protected Map<String, BHGEOrderHistoryData> searchOrdersWithDate(final OrderHistoryFormSearchData searchData,
			final Map<String, BHGEOrderHistoryData> cacheOrders)
	{
		final Map<String, BHGEOrderHistoryData> dateSearchResults = new HashMap<String, BHGEOrderHistoryData>();
		for (final Map.Entry<String, BHGEOrderHistoryData> entry : cacheOrders.entrySet())
		{
			final BHGEOrderHistoryData orderData = entry.getValue();
			if (isOrderPlacedAfter(searchData.getFromDate(), orderData.getPlaced())
					&& isOrderPlacedBefore(searchData.getToDate(), orderData.getPlaced()))
			{
				dateSearchResults.put(entry.getKey(), orderData);
			}
		}
		return dateSearchResults;
	}

	/**
	 * Searching the Orders collection based on the given keyword (The keyword search will check against Sales Order
	 * Customer PO, Soldto name, Material Number and Order Status)
	 *
	 * @param orderTypeDateSearchResult
	 * @param searchTerm
	 * @param cacheOrderItems
	 * @return
	 */
	protected Map<String, BHGEOrderHistoryData> searchOrdersWithKeyword(
			final Map<String, BHGEOrderHistoryData> orderTypeDateSearchResult, final String searchTerm,
			final Map<String, Set<OrderHistoryViewData>> cacheOrderItems)
	{
		final Map<String, BHGEOrderHistoryData> searchResultOrders = new HashMap<String, BHGEOrderHistoryData>();
		for (final Map.Entry<String, BHGEOrderHistoryData> entry : orderTypeDateSearchResult.entrySet())
		{
			final BHGEOrderHistoryData orderData = entry.getValue();

			// Search Based on Customer PO, Sales Order Number and Sold to
			if (StringUtils.isNotBlank(orderData.getCode()) || StringUtils.isNotBlank(orderData.getPurchaseOrderNumber())
					|| StringUtils.isNotBlank(orderData.getSoldTo()))
			{
				if (orderData.getCode().toLowerCase().contains(searchTerm.toLowerCase())
						|| orderData.getPurchaseOrderNumber().toLowerCase().contains(searchTerm.toLowerCase())
						|| orderData.getSoldTo().toLowerCase().contains(searchTerm.toLowerCase()))
				{
					searchResultOrders.put(entry.getKey(), orderData);
				}
				// Search Based on Material Number and Order Status
				else
				{
					final Set<OrderHistoryViewData> orderItems = cacheOrderItems.get(entry.getKey());
					if (null != orderItems && orderItems.size() > 0)
					{
						for (final OrderHistoryViewData orderItem : orderItems)
						{
							if (orderItem.getPartNumber().toLowerCase().contains(searchTerm.toLowerCase())
									|| orderItem.getStatus().toLowerCase().contains(searchTerm.toLowerCase()))
							{
								searchResultOrders.put(entry.getKey(), orderData);
								break;
							}
						}
					}
				}
			}
		}
		return searchResultOrders;
	}

	/**
	 * This method will prepare the data object which will contain both orders along with the order items for the given
	 * search criteria.
	 *
	 * @param searchResults
	 * @param cacheOrderItems
	 * @return
	 */
	protected BHGEOrderHistoryCollectionData prepareSearchResultsData(final Map<String, BHGEOrderHistoryData> searchResults,
			final Map<String, Set<OrderHistoryViewData>> cacheOrderItems,
			final Map<String, Set<OrderHistoryDeliveryData>> cacheOrderDelivSet)
	{
		final Map<String, Set<OrderHistoryViewData>> searchResultItems = new HashMap<String, Set<OrderHistoryViewData>>();
		for (final Map.Entry<String, BHGEOrderHistoryData> entry : searchResults.entrySet())
		{
			searchResultItems.put(entry.getKey(), cacheOrderItems.get(entry.getKey()));
		}
		final BHGEOrderHistoryCollectionData orderHistoryData = new BHGEOrderHistoryCollectionData();
		orderHistoryData.setBhgeOrderHistoryHeaderData(searchResults);
		orderHistoryData.setBhgeOrderHistoryItemData(searchResultItems);
		orderHistoryData.setBhgeOrderHistoryDeliveryData(cacheOrderDelivSet);
		return orderHistoryData;
	}

	protected boolean isOrderPlacedAfter(final String date, final Date orderDate)
	{
		final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
		final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");
		final Date fromDate = bhgeOrderHistoryService.getDateValueForString(date, inputFormat, outputFormat);
		if (null != fromDate && null != orderDate)
		{
			return orderDate.after(fromDate);
		}
		return false;
	}

	protected boolean isOrderPlacedLate(final String date, final Date orderDate)
	{
		final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
		final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");
		final Date fromDate = bhgeOrderHistoryService.getDateValueForString(date, inputFormat, outputFormat);
		if (null != fromDate && null != orderDate)
		{
			return orderDate.after(fromDate);
		}
		return false;
	}

	protected boolean isOrderPlacedBefore(final String date, final Date orderDate)
	{
		final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
		final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");
		final Date toDate = bhgeOrderHistoryService.getDateValueForString(date, inputFormat, outputFormat);
		if (null != toDate && null != orderDate)
		{
			return orderDate.before(toDate);
		}
		return false;
	}

	protected boolean isOrderPlacedEarly(final String date, final Date orderDate)
	{
		final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
		final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");
		final Date toDate = bhgeOrderHistoryService.getDateValueForString(date, inputFormat, outputFormat);
		if (null != toDate && null != orderDate)
		{
			return orderDate.before(toDate);
		}
		return false;
	}

	@Override
	public SearchPageData<BHGEOrderHistoryData> getOrdersForPage(final OrderHistoryFormSearchData searchData,
			final PageableData pageableData, final String statusFilter, final String sapOrderType)
	{
		final String orderType = bhgeOrderHistoryService.getOrderType(searchData.getPageFlag());
		if (StringUtils.isNotBlank(orderType) && StringUtils.isNotEmpty(orderType))
		{
			return getOrdersFromSAP(orderType, pageableData, statusFilter, sapOrderType);
		}
		return null;
	}


	@Override
	public ArrayList<OrderHistoryViewData> getLineItemOrderData(final BHGEOrderHistoryCollectionData orderHistoryData,
			final String orderNo, final String pageType, final List<String> multipleSoldToId)
	{

		final String seesionSoldToIDSingle = getSoldTo();

		LOG.debug("Inside getLineItem - 1 " + orderNo);

		if ((multipleSoldToId != null) && (multipleSoldToId.size() > 0) && (!multipleSoldToId.isEmpty()))
		{
			final ArrayList<OrderHistoryViewData> orderItems = new ArrayList<OrderHistoryViewData>();
			for (final String soldto : multipleSoldToId)
			{
				final String key = getKey(soldto, bhgeOrderHistoryService.getOrderType(pageType));

				if (null != orderHistoryData && null != orderHistoryData.getBhgeOrderHistoryItemData()
						&& orderHistoryData.getBhgeOrderHistoryItemData().size() > 0)
				{
					final Set<OrderHistoryViewData> itemData = orderHistoryData.getBhgeOrderHistoryItemData().get(orderNo);
					if (null != itemData && itemData.size() > 0)
					{
						orderItems.addAll(itemData);
						//final ArrayList<OrderHistoryViewData> orderItems = new ArrayList<OrderHistoryViewData>(itemData);
						Collections.sort(orderItems, new BHGEOrderLineItemComparator<OrderHistoryViewData>());
						populateOrderItems(orderItems);
						//LOG.info("Inside1 Delivery Line Count " + orderHistoryData.getBhgeOrderHistoryDeliveryData().size()+ " & Line Items - " + orderItems.size());
						if (orderItems.size() > 0 && orderHistoryData.getBhgeOrderHistoryDeliveryData() != null
								&& orderHistoryData.getBhgeOrderHistoryDeliveryData().size() > 0)
						{

							for (final OrderHistoryViewData getLineItem : orderItems)
							{
								//LOG.info("Inside1 Delivery Line Key " + getLineItem.getOrderNum() + " & Line "+ getLineItem.getLineNumber());
								final Set<OrderHistoryDeliveryData> deliveryDataSet = orderHistoryData.getBhgeOrderHistoryDeliveryData()
										.get(getLineItem.getOrderNum() + "#" + getLineItem.getLineNumber());
								if (deliveryDataSet != null && deliveryDataSet.size() > 0)
								{
									//LOG.info("Inside1 Delivery Line Fetch - " + getLineItem.getOrderNum() + "#"+ getLineItem.getLineNumber() + " & Size - " + deliveryDataSet.size());
									final ArrayList<OrderHistoryDeliveryData> deliveryDataList = new ArrayList<OrderHistoryDeliveryData>(
											deliveryDataSet);
									Collections.sort(deliveryDataList, new BHGEOrderDeliveryComparator<OrderHistoryDeliveryData>());
									populateOrderDeliveries(deliveryDataList);
									getLineItem.setDeliveryLineItems(deliveryDataList);
								}
							}
						}
					}
				}
			}

			// add elements to al, including duplicates

			return orderItems;
		}
		else
		{

			final String key = getKey(seesionSoldToIDSingle, bhgeOrderHistoryService.getOrderType(pageType));
			if (null != orderHistoryData && null != orderHistoryData.getBhgeOrderHistoryItemData()
					&& orderHistoryData.getBhgeOrderHistoryItemData().size() > 0)
			{
				final Set<OrderHistoryViewData> itemData = orderHistoryData.getBhgeOrderHistoryItemData().get(orderNo);
				if (null != itemData && itemData.size() > 0)
				{
					final ArrayList<OrderHistoryViewData> orderItems = new ArrayList<OrderHistoryViewData>(itemData);
					Collections.sort(orderItems, new BHGEOrderLineItemComparator<OrderHistoryViewData>());
					populateOrderItems(orderItems);
					if (orderItems.size() > 0 && orderHistoryData.getBhgeOrderHistoryDeliveryData() != null
							&& orderHistoryData.getBhgeOrderHistoryDeliveryData().size() > 0)
					{
						//LOG.info("Inside2 Delivery Line Count " + orderHistoryData.getBhgeOrderHistoryDeliveryData().size()+ " & Line Items - " + orderItems.size());
						for (final OrderHistoryViewData getLineItem : orderItems)
						{
							//LOG.info("Inside2 Delivery Line Key " + getLineItem.getOrderNum() + " & Line " + getLineItem.getLineNumber());
							final Set<OrderHistoryDeliveryData> deliveryDataSet = orderHistoryData.getBhgeOrderHistoryDeliveryData()
									.get(getLineItem.getOrderNum() + "#" + getLineItem.getLineNumber());
							if (deliveryDataSet != null && deliveryDataSet.size() > 0)
							{
								//LOG.info("Inside2 Delivery Line Fetch - " + getLineItem.getOrderNum() + "#" + getLineItem.getLineNumber()+ " & Size - " + deliveryDataSet.size());
								final ArrayList<OrderHistoryDeliveryData> deliveryDataList = new ArrayList<OrderHistoryDeliveryData>(
										deliveryDataSet);
								Collections.sort(deliveryDataList, new BHGEOrderDeliveryComparator<OrderHistoryDeliveryData>());
								populateOrderDeliveries(deliveryDataList);
								getLineItem.setDeliveryLineItems(deliveryDataList);
							}
						}
					}
					return orderItems;
				}
			}
		}


		return null;

	}



	@Override
	public ArrayList<OrderHistoryViewData> getLineItem(final String orderNo, final String pageType,
			final List<String> multipleSoldToId)
	{

		final String seesionSoldToIDSingle = getSoldTo();

		LOG.debug("Inside getLineItem - 1 " + orderNo);

		if ((multipleSoldToId != null) && (multipleSoldToId.size() > 0) && (!multipleSoldToId.isEmpty()))
		{
			final ArrayList<OrderHistoryViewData> orderItems = new ArrayList<OrderHistoryViewData>();
			for (final String soldto : multipleSoldToId)
			{
				final String key = getKey(soldto, bhgeOrderHistoryService.getOrderType(pageType));

				//final BHGEOrderHistoryCollectionData orderHistoryDataCollection = null;
				final CacheKey cacheKey = new BHGECacheKey(key, Registry.getCurrentTenant().getTenantID());
				final BHGEOrderHistoryCollectionData orderHistoryData = (BHGEOrderHistoryCollectionData) orderHistoryCacheRegion
						.getWithLoader(cacheKey, bhgeCacheValueLoader);

				if (null != orderHistoryData && null != orderHistoryData.getBhgeOrderHistoryItemData()
						&& orderHistoryData.getBhgeOrderHistoryItemData().size() > 0)
				{
					final Set<OrderHistoryViewData> itemData = orderHistoryData.getBhgeOrderHistoryItemData().get(orderNo);
					if (null != itemData && itemData.size() > 0)
					{
						orderItems.addAll(itemData);
						//final ArrayList<OrderHistoryViewData> orderItems = new ArrayList<OrderHistoryViewData>(itemData);
						Collections.sort(orderItems, new BHGEOrderLineItemComparator<OrderHistoryViewData>());
						populateOrderItems(orderItems);

						if (orderItems.size() > 0 && orderHistoryData.getBhgeOrderHistoryDeliveryData() != null
								&& orderHistoryData.getBhgeOrderHistoryDeliveryData().size() > 0)
						{
							//LOG.debug("Inside1 Delivery Line Count " + orderHistoryData.getBhgeOrderHistoryDeliveryData().size()+ " & Line Items - " + orderItems.size());

							for (final OrderHistoryViewData getLineItem : orderItems)
							{
								//LOG.debug("Inside1 Delivery Line Key " + getLineItem.getOrderNum() + " & Line "+ getLineItem.getLineNumber());
								final Set<OrderHistoryDeliveryData> deliveryDataSet = orderHistoryData.getBhgeOrderHistoryDeliveryData()
										.get(getLineItem.getOrderNum() + "#" + getLineItem.getLineNumber());
								if (deliveryDataSet != null && deliveryDataSet.size() > 0)
								{
									//LOG.debug("Inside1 Delivery Line Fetch - " + getLineItem.getOrderNum() + "#" + getLineItem.getLineNumber() + " & Size - " + deliveryDataSet.size());
									final ArrayList<OrderHistoryDeliveryData> deliveryDataList = new ArrayList<OrderHistoryDeliveryData>(
											deliveryDataSet);
									Collections.sort(deliveryDataList, new BHGEOrderDeliveryComparator<OrderHistoryDeliveryData>());
									populateOrderDeliveries(deliveryDataList);
									getLineItem.setDeliveryLineItems(deliveryDataList);
								}
							}
						}
					}
				}
			}

			// add elements to al, including duplicates

			return orderItems;
		}
		else
		{

			final String key = getKey(seesionSoldToIDSingle, bhgeOrderHistoryService.getOrderType(pageType));
			final CacheKey cacheKey = new BHGECacheKey(key, Registry.getCurrentTenant().getTenantID());
			final BHGEOrderHistoryCollectionData orderHistoryData = (BHGEOrderHistoryCollectionData) orderHistoryCacheRegion
					.getWithLoader(cacheKey, bhgeCacheValueLoader);
			if (null != orderHistoryData && null != orderHistoryData.getBhgeOrderHistoryItemData()
					&& orderHistoryData.getBhgeOrderHistoryItemData().size() > 0)
			{
				final Set<OrderHistoryViewData> itemData = orderHistoryData.getBhgeOrderHistoryItemData().get(orderNo);
				if (null != itemData && itemData.size() > 0)
				{
					final ArrayList<OrderHistoryViewData> orderItems = new ArrayList<OrderHistoryViewData>(itemData);
					Collections.sort(orderItems, new BHGEOrderLineItemComparator<OrderHistoryViewData>());
					populateOrderItems(orderItems);

					if (orderItems.size() > 0 && orderHistoryData.getBhgeOrderHistoryDeliveryData() != null
							&& orderHistoryData.getBhgeOrderHistoryDeliveryData().size() > 0)
					{
						//LOG.debug("Inside2 Delivery Line Count " + orderHistoryData.getBhgeOrderHistoryDeliveryData().size() + " & Line Items - " + orderItems.size());

						for (final OrderHistoryViewData getLineItem : orderItems)
						{
							//LOG.debug("Inside2 Delivery Line Key " + getLineItem.getOrderNum() + " & Line " + getLineItem.getLineNumber());
							final Set<OrderHistoryDeliveryData> deliveryDataSet = orderHistoryData.getBhgeOrderHistoryDeliveryData()
									.get(getLineItem.getOrderNum() + "#" + getLineItem.getLineNumber());
							if (deliveryDataSet != null && deliveryDataSet.size() > 0)
							{
								//LOG.debug("Inside2 Delivery Line Fetch - " + getLineItem.getOrderNum() + "#" + getLineItem.getLineNumber()+ " & Size - " + deliveryDataSet.size());
								final ArrayList<OrderHistoryDeliveryData> deliveryDataList = new ArrayList<OrderHistoryDeliveryData>(
										deliveryDataSet);
								Collections.sort(deliveryDataList, new BHGEOrderDeliveryComparator<OrderHistoryDeliveryData>());
								populateOrderDeliveries(deliveryDataList);
								getLineItem.setDeliveryLineItems(deliveryDataList);
							}
						}
					}
					return orderItems;
				}
			}
		}


		return null;

	}

	//Fast Order
	@Override
	public ArrayList<OrderHistoryViewData> getLineItemForFastOrder(final String orderNo, final String pageType,
			final String soldTo, final String salesOrderNumber, final String poNumber)
	{
		String paddingSoldToid = null;
		if (soldTo != null)
		{
			paddingSoldToid = leftPad(soldTo, 10, '0');
		}
		//final String key = getKey(seesionSoldToIDSingle, bhgeOrderHistoryService.getOrderType(pageType));
		//final CacheKey cacheKey = new BHGECacheKey(key, Registry.getCurrentTenant().getTenantID());
		final String FAST_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_FAST")))
				? Config.getParameter("ORDERTYPE_FAST") : "CP_FAST";
		final BHGEOrderHistoryCollectionData orderHistoryData = bhgeOrderHistoryService.getFastOrder(paddingSoldToid, FAST_ORDER,
				salesOrderNumber, poNumber);
		//		bhgeOrderHistoryService.getFastOrder(soldTo, DETAIL_ORDER);
		//(BHGEOrderHistoryCollectionData) orderHistoryCacheRegion.getWithLoader(cacheKey, bhgeCacheValueLoader);
		if (null != orderHistoryData && null != orderHistoryData.getBhgeOrderHistoryItemData()
				&& orderHistoryData.getBhgeOrderHistoryItemData().size() > 0)
		{
			final Set<OrderHistoryViewData> itemData = orderHistoryData.getBhgeOrderHistoryItemData().get(orderNo);
			if (null != itemData && itemData.size() > 0)
			{
				final ArrayList<OrderHistoryViewData> orderItems = new ArrayList<OrderHistoryViewData>(itemData);
				Collections.sort(orderItems, new BHGEOrderLineItemComparator<OrderHistoryViewData>());
				populateOrderItems(orderItems);
				if (orderItems.size() > 0 && orderHistoryData.getBhgeOrderHistoryDeliveryData() != null
						&& orderHistoryData.getBhgeOrderHistoryDeliveryData().size() > 0)
				{
					for (final OrderHistoryViewData getLineItem : orderItems)
					{
						final Set<OrderHistoryDeliveryData> deliveryDataSet = orderHistoryData.getBhgeOrderHistoryDeliveryData()
								.get(getLineItem.getOrderNum() + "#" + getLineItem.getLineNumber());
						if (deliveryDataSet != null && deliveryDataSet.size() > 0)
						{
							//LOG.debug("Order Tracking - " + deliveryDataSet.size());
							final ArrayList<OrderHistoryDeliveryData> deliveryDataList = new ArrayList<OrderHistoryDeliveryData>(
									deliveryDataSet);
							Collections.sort(deliveryDataList, new BHGEOrderDeliveryComparator<OrderHistoryDeliveryData>());
							populateOrderDeliveries(deliveryDataList);
							getLineItem.setDeliveryLineItems(deliveryDataList);
						}
					}
				}
				return orderItems;
			}
		}



		return null;

	}

	public static String leftPad(final String originalString, final int length, final char padCharacter)
	{
		String paddedString = originalString;
		while (paddedString.length() < length)
		{
			paddedString = padCharacter + paddedString;
		}
		return paddedString;
	}



	/**
	 * @param orderItems
	 */
	private void populateOrderItems(final ArrayList<OrderHistoryViewData> orderItems)
	{

		for (final OrderHistoryViewData data : orderItems)
		{
			if (StringUtils.isNotEmpty(data.getRequestedShipDate()))
			{
				data.setLocalizedReqDate(getLocalizedDate(data.getRequestedShipDate()));
			}
			if (StringUtils.isNotEmpty(data.getOrderDate()))
			{
				LOG.info("DefaultBHGEB2BOrderFacade: Order Date before localization: " + data.getOrderDate());
				//removed localization for order date to maintain consistency
				data.setLocalizedOrderDate(getLocalizedDate(data.getOrderDate()));
				LOG.info("DefaultBHGEB2BOrderFacade: Order Date after localization: " + data.getLocalizedOrderDate());
				data.setOrderDate(getLocalizedDate(data.getOrderDate()));
				LOG.info("DefaultBHGEB2BOrderFacade: Order Date after setting localized order date: " + data.getOrderDate());
			}
			if (StringUtils.isNotEmpty(data.getShipDate()))
			{
				data.setLocalizedShipDate(getLocalizedDate(data.getShipDate()));
			}
		}

	}

	/**
	 * @param orderItems
	 */
	private void populateOrderDeliveries(final ArrayList<OrderHistoryDeliveryData> deliveryDataList)
	{
		for (final OrderHistoryDeliveryData deliveryData : deliveryDataList)
		{
			if (deliveryData.getQuantity() != null)
			{
				deliveryData.setQuantity(deliveryData.getQuantity().replaceAll("\\.0*$", ""));
			}
			if (StringUtils.isNotEmpty(deliveryData.getShipDate()))
			{
				deliveryData.setLocalizedShipDate(getLocalizedDate(deliveryData.getShipDate()));
			}
		}

	}

	/**
	 * @param data
	 */
	private String getLocalizedDate(final String date)
	{
		String formatted = "";
		try
		{
			final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
			final SimpleDateFormat fen = new SimpleDateFormat("dd-MMM-yyyy",
					new Locale(storeSessionFacade.getCurrentLanguage().getIsocode()));
			formatted = fen.format(inputFormat.parse(date));
			LOG.info("DefaultBHGEB2BOrderFacade: Localized Date: " + formatted + " for input date: " + date + " and locale: "
					+ storeSessionFacade.getCurrentLanguage().getIsocode());
		}
		catch (final Exception e)
		{
			LOG.error(e);
			return date;
		}
		return formatted;
	}

	public String getSoldTo()
	{
		final String soldto = bhgeOrderHistoryService.getSoldToFromCurrentUser();
		if (null != soldto)
		{
			return soldto;
		}
		return null;
	}

	public String getSoldToForWS()
	{
		final BHGESoldToData soldto = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
		if (null != soldto)
		{
			return soldto.getUid();
		}
		return null;
	}

	@Override
	public List<BHGEOrderTypeData> getSalesOrderTypes()
	{
		final List<EnumerationValueModel> orderTypes = bhgeB2BOrderService.getSalesOrderTypes();
		if (null != orderTypes && orderTypes.size() > 0)
		{
			return populateOrderTypes(orderTypes);
		}
		return null;
	}

	protected List<BHGEOrderTypeData> populateOrderTypes(final List<EnumerationValueModel> orderTypes)
	{
		final List<BHGEOrderTypeData> listOfOrderTypes = new ArrayList<BHGEOrderTypeData>();
		for (final EnumerationValueModel model : orderTypes)
		{
			final BHGEOrderTypeData orderTypeData = new BHGEOrderTypeData();
			orderTypeData.setCode(model.getCode());
			orderTypeData.setName(model.getName());
			listOfOrderTypes.add(orderTypeData);
		}
		return listOfOrderTypes;
	}

	/* Comparator to sort the result by Item Line Number */
	protected class BHGEOrderLineItemComparator<T> implements Comparator<T>
	{

		public int compare(final T data1, final T data2)
		{

			if (null != data1 && null != data2 && StringUtils.isNotBlank(((OrderHistoryViewData) data1).getLineNumber())
					&& StringUtils.isNotBlank(((OrderHistoryViewData) data2).getLineNumber()))
			{
				final Integer num1 = Integer.valueOf(((OrderHistoryViewData) data1).getLineNumber());
				final Integer num2 = Integer.valueOf(((OrderHistoryViewData) data2).getLineNumber());
				return num1.compareTo(num2);
			}
			return 0;
		}
	}

	/* Comparator to sort the result by Item Line Number */
	protected class BHGEOrderDeliveryComparator<T> implements Comparator<T>
	{
		public int compare(final T data1, final T data2)
		{

			if (null != data1 && null != data2 && StringUtils.isNotBlank(((OrderHistoryDeliveryData) data1).getDeliveryLine())
					&& StringUtils.isNotBlank(((OrderHistoryDeliveryData) data2).getDeliveryLine()))
			{
				final Integer num1 = Integer.valueOf(((OrderHistoryDeliveryData) data1).getDeliveryLine());
				final Integer num2 = Integer.valueOf(((OrderHistoryDeliveryData) data2).getDeliveryLine());
				return num1.compareTo(num2);
			}
			return 0;
		}
	}

	/* Comparator to sort the order data collection by Order Placed Date DESC followed by Order number */
	protected class BHGEWSOrderDataComparator<T> implements Comparator<T>
	{

		public int compare(final T data1, final T data2)
		{
			int result = 0;
			try
			{
				// Sort the orders based on Order Placed date by DESC
				if (null != data1 && null != data2 && null != ((BHGEOrderHistoryData) data2).getPlaced()
						&& null != ((BHGEOrderHistoryData) data1).getPlaced())
				{
					//LOG.debug("Order Placed Date1: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data1).getPlaced());
					//LOG.debug("Order Placed Date2: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data2).getPlaced());
					result = ((BHGEOrderHistoryData) data2).getPlaced()
							.compareTo(((BHGEOrderHistoryData) data1).getPlaced());
				}

				// If both the orders placed on same date, then sort based on Order Number
				if (result == 0 && null != data1 && null != data2
						&& null != ((BHGEOrderHistoryData) data2).getCode()
						&& null != ((BHGEOrderHistoryData) data1).getCode())
				{
					//LOG.debug("Order Number1: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data1).getCode());
					//LOG.debug("Order Number2: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data2).getCode());
					result = ((BHGEOrderHistoryData) data2).getCode()
							.compareTo(((BHGEOrderHistoryData) data1).getCode());
				}

				return result;
			}
			catch (final Exception e)
			{
				LOG.error("Error occured while sorting the Orders " + e);
				//	GEEdgeCommonUtil.getStackTrace(e);
			}
			return result;
		}
	}
	/* Comparator to sort the order data collection by Order number */
protected class BHGEWSOrderNumberComparator<T> implements Comparator<T>
{
	public int compare(final T data2, final T data1)
	{
		int result = 0;
		try
		{ // sort based on Order Number
			if (null != data2 && null != data1
					&& null != ((BHGEOrderHistoryData) data1).getCode()
					&& null != ((BHGEOrderHistoryData) data2).getCode())
			{
				LOG.info("BHGEWSOrderNumberComparator Order Number1: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data2).getCode());
				LOG.info("BHGEWSOrderNumberComparator order Number2: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data1).getCode());
				result = ((BHGEOrderHistoryData) data1).getCode()
						.compareTo(((BHGEOrderHistoryData) data2).getCode());
			}

			return result;
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while sorting the Orders " + e);
			//	GEEdgeCommonUtil.getStackTrace(e);
		}
		return result;
	}
}

/**/

	/* Comparator to sort the order data collection by Order Placed Date DESC followed by Order number */
	protected class BHGEWSOrderUpdateComparator<T> implements Comparator<T>
	{

		public int compare(final T data1, final T data2)
		{
			int result = 0;
			try
			{
				// Sort the orders based on Order Placed date by DESC
				if (null != data1 && null != data2
						&& null != ((BHGEOrderHistoryData) data2).getLastUpdated()
						&& null != ((BHGEOrderHistoryData) data1).getLastUpdated())
				{
					Date date2 = ((BHGEOrderHistoryData) data2).getLastUpdated();
					Date date1 = ((BHGEOrderHistoryData) data2).getLastUpdated();
					LOG.info("=====================Order status Update Descending sorting ===========Date2 : "+date2+"      date1========== "+date1);
					//LOG.debug("Order Update Date1: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data1).getLastUpdated());
					//LOG.debug("Order Update Date2: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data2).getLastUpdated());
					result = ((BHGEOrderHistoryData) data2).getLastUpdated()
							.compareTo(((BHGEOrderHistoryData) data1).getLastUpdated());
				}
			
				// If both the orders placed on same date, then sort based on Order Number
				if (result == 0 && null != data1 && null != data2
						&& null != ((BHGEOrderHistoryData) data2).getCode()
						&& null != ((BHGEOrderHistoryData) data1).getCode())
				{
					LOG.info("Order Number1 updateDsc: " + ((BHGEOrderHistoryData) data1).getCode());
					LOG.info("Order Number2 updateDsc: " + ((BHGEOrderHistoryData) data2).getCode());
					result = ((BHGEOrderHistoryData) data2).getCode()
							.compareTo(((BHGEOrderHistoryData) data1).getCode());
				}

				return result;
			}
			catch (final Exception e)
			{
				LOG.error("Error occured while sorting the Orders " + e);
				//	GEEdgeCommonUtil.getStackTrace(e);
			}
			return result;
		}
	}

	/* Comparator to sort the order data collection by Order Placed Date ASC followed by Order number */
	protected class BHGEWSOrderAscDataComparator<T> implements Comparator<T>
	{

		public int compare(final T data2, final T data1)
		{
			int result = 0;
			try
			{
				// Sort the orders based on Order Placed date by DESC
				if (null != data2 && null != data1 && null != ((BHGEOrderHistoryData) data1).getPlaced()
						&& null != ((BHGEOrderHistoryData) data2).getPlaced())
				{
					//LOG.debug("Order Placed Date1: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data2).getPlaced());
					//LOG.debug("Order Placed Date2: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data1).getPlaced());
					result = ((BHGEOrderHistoryData) data1).getPlaced()
							.compareTo(((BHGEOrderHistoryData) data2).getPlaced());
				}

				// If both the orders placed on same date, then sort based on Order Number
				if (result == 0 && null != data2 && null != data1
						&& null != ((BHGEOrderHistoryData) data1).getCode()
						&& null != ((BHGEOrderHistoryData) data2).getCode())
				{
					//LOG.debug("Order Number1: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data2).getCode());
					//LOG.debug("Order Number2: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data1).getCode());
					result = ((BHGEOrderHistoryData) data1).getCode()
							.compareTo(((BHGEOrderHistoryData) data2).getCode());
				}


				return result;
			}
			catch (final Exception e)
			{
				LOG.error("Error occured while sorting the Orders " + e);
				//	GEEdgeCommonUtil.getStackTrace(e);
			}
			return result;
		}
	}


	/* Comparator to sort the order data collection by Ship Date DESC */
	protected class BHGEWSOrderDataShipComparator<T> implements Comparator<T>
	{
		public int compare(final T data1, final T data2)
		{
			int result = 0;
			try
			{
				// Sort the orders based on Order Placed date by DESC
				if (null != data1 && null != data2
						&& null != ((BHGEOrderHistoryData) data2).getHeaderRequestedShipDate()
						&& null != ((BHGEOrderHistoryData) data1).getHeaderRequestedShipDate())
				{
					//LOG.debug("Order Placed Date1: "+ ((com.bhge.facades.order.data.BHGEOrderHistoryData) data1).getHeaderRequestedShipDate());
					//LOG.debug("Order Placed Date2: "+ ((com.bhge.facades.order.data.BHGEOrderHistoryData) data2).getHeaderRequestedShipDate());
					result = ((BHGEOrderHistoryData) data2).getHeaderRequestedShipDate()
							.compareTo(((BHGEOrderHistoryData) data1).getHeaderRequestedShipDate());
				}

				// If both the orders placed on same date, then sort based on Order Number
				if (result == 0 && null != data1 && null != data2
						&& null != ((BHGEOrderHistoryData) data2).getCode()
						&& null != ((BHGEOrderHistoryData) data1).getCode())
				{
					//LOG.debug("Order Number1: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data1).getCode());
					//LOG.debug("Order Number2: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data2).getCode());
					result = ((BHGEOrderHistoryData) data2).getCode()
							.compareTo(((BHGEOrderHistoryData) data1).getCode());
				}

				return result;
			}
			catch (final Exception e)
			{
				LOG.error("Error occured while sorting the Orders " + e);
				//	GEEdgeCommonUtil.getStackTrace(e);
			}
			return result;
		}
	}

	protected class BHGEWSOrderDataAscShipComparator<T> implements Comparator<T>
	{
		public int compare(final T data1, final T data2)
		{
			int result = 0;
			try
			{
				// Sort the orders based on Order Placed date by Asc
				if (null != data2 && null != data1
						&& null != ((BHGEOrderHistoryData) data1).getHeaderRequestedShipDate()
						&& null != ((BHGEOrderHistoryData) data2).getHeaderRequestedShipDate())
				{
					//LOG.debug("Order Placed Date1: "+ ((com.bhge.facades.order.data.BHGEOrderHistoryData) data2).getHeaderRequestedShipDate());
					//LOG.debug("Order Placed Date2: "+ ((com.bhge.facades.order.data.BHGEOrderHistoryData) data1).getHeaderRequestedShipDate());
					result = ((BHGEOrderHistoryData) data1).getHeaderRequestedShipDate()
							.compareTo(((BHGEOrderHistoryData) data2).getHeaderRequestedShipDate());
				}

				// If both the orders placed on same date, then sort based on Order Number
				if (result == 0 && null != data2 && null != data1
						&& null != ((BHGEOrderHistoryData) data1).getCode()
						&& null != ((BHGEOrderHistoryData) data2).getCode())
				{
					//LOG.debug("Order Number1: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data2).getCode());
					//LOG.debug("Order Number2: " + ((com.bhge.facades.order.data.BHGEOrderHistoryData) data1).getCode());
					result = ((BHGEOrderHistoryData) data1).getCode()
							.compareTo(((BHGEOrderHistoryData) data2).getCode());
				}

				return result;
			}
			catch (final Exception e)
			{
				LOG.error("Error occured while sorting the Orders " + e);
				//	GEEdgeCommonUtil.getStackTrace(e);
			}
			return result;
		}
	}


	/**
	 * To determine if the given order is visible to current user or not
	 *
	 */
	@Override
	public boolean isOrderVisibleForCurrentUser(final String orderCode)
	{
		if (StringUtils.isNotBlank(orderCode) && StringUtils.isNotEmpty(orderCode))
		{
			final OrderModel order = bhgeB2BOrderService.getOrderForCode(orderCode);
			if (null != order && null != order.getSoldToForCart() && null != userService.getCurrentUser()
					&& userService.getCurrentUser() instanceof GEEdgeCustomerModel)
			{
				final String actualCustomerId = order.getSoldToForCart().getUid();
				final String currentCustomerId = ((GEEdgeCustomerModel) userService.getCurrentUser()).getDefaultB2BUnit().getUid();
				if (actualCustomerId.equals(currentCustomerId))
				{
					return true;
				}
			}
		}
		return false;
	}

	public SessionService getSessionService()
	{
		return sessionService;
	}

	public void setSessionService(final SessionService sessionService)
	{
		this.sessionService = sessionService;
	}

	public BHGEOrderHistoryService getBhgeOrderHistoryService()
	{
		return bhgeOrderHistoryService;
	}

	public void setBhgeOrderHistoryService(final BHGEOrderHistoryService bhgeOrderHistoryService)
	{
		this.bhgeOrderHistoryService = bhgeOrderHistoryService;
	}

	public CacheRegion getOrderHistoryCacheRegion()
	{
		return orderHistoryCacheRegion;
	}

	public void setOrderHistoryCacheRegion(final CacheRegion orderHistoryCacheRegion)
	{
		this.orderHistoryCacheRegion = orderHistoryCacheRegion;
	}

	public CacheValueLoader getBhgeCacheValueLoader()
	{
		return bhgeCacheValueLoader;
	}

	public void setBhgeCacheValueLoader(final CacheValueLoader bhgeCacheValueLoader)
	{
		this.bhgeCacheValueLoader = bhgeCacheValueLoader;
	}

	public CacheController getCacheController()
	{
		return cacheController;
	}

	public void setCacheController(final CacheController cacheController)
	{
		this.cacheController = cacheController;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.order.BHGEB2BOrderFacade#getDetailOrderHistory()
	 */

	public class Count
	{

		private Integer count;
		private Integer shippedCount;
		private Integer processingCount;
		private Integer awaitingCount;
		private Integer blkcount;
		private List<String> multiplesold;
		private Integer awaitingReceipt;
		private Integer inProcess;
		private Integer scrapped;
		private Integer delivered;
		private Integer totalProductOrderCount;
		private Integer totalRepairCount;
		private Integer repairBlockCount;



		/**
		 * @return the awaitingReceipt
		 */
		public Integer getAwaitingReceipt()
		{
			return awaitingReceipt;
		}

		/**
		 * @return the totalProductOrderCount
		 */
		public Integer getTotalProductOrderCount()
		{
			return totalProductOrderCount;
		}

		/**
		 * @param totalProductOrderCount
		 *           the totalProductOrderCount to set
		 */
		public void setTotalProductOrderCount(final Integer totalProductOrderCount)
		{
			this.totalProductOrderCount = totalProductOrderCount;
		}

		/**
		 * @return the totalRepairCount
		 */
		public Integer getTotalRepairCount()
		{
			return totalRepairCount;
		}

		/**
		 * @param totalRepairCount
		 *           the totalRepairCount to set
		 */
		public void setTotalRepairCount(final Integer totalRepairCount)
		{
			this.totalRepairCount = totalRepairCount;
		}

		/**
		 * @param awaitingReceipt
		 *           the awaitingReceipt to set
		 */
		public void setAwaitingReceipt(final Integer awaitingReceipt)
		{
			this.awaitingReceipt = awaitingReceipt;
		}

		/**
		 * @return the inProcess
		 */
		public Integer getInProcess()
		{
			return inProcess;
		}

		/**
		 * @param inProcess
		 *           the inProcess to set
		 */
		public void setInProcess(final Integer inProcess)
		{
			this.inProcess = inProcess;
		}

		/**
		 * @return the scrapped
		 */
		public Integer getScrapped()
		{
			return scrapped;
		}

		/**
		 * @param scrapped
		 *           the scrapped to set
		 */
		public void setScrapped(final Integer scrapped)
		{
			this.scrapped = scrapped;
		}

		/**
		 * @return the delivered
		 */
		public Integer getDelivered()
		{
			return delivered;
		}

		/**
		 * @return the repairBlockCount
		 */
		public Integer getRepairBlockCount()
		{
			return repairBlockCount;
		}

		/**
		 * @param repairBlockCount
		 *           the repairBlockCount to set
		 */
		public void setRepairBlockCount(final Integer repairBlockCount)
		{
			this.repairBlockCount = repairBlockCount;
		}

		/**
		 * @param delivered
		 *           the delivered to set
		 */
		public void setDelivered(final Integer delivered)
		{
			this.delivered = delivered;
		}

		/**
		 * @return the multiplesold
		 */
		public List<String> getMultiplesold()
		{
			return multiplesold;
		}

		/**
		 * @param multiplesold
		 *           the multiplesold to set
		 */
		public void setMultiplesold(final List<String> multiplesold)
		{
			this.multiplesold = multiplesold;
		}

		/**
		 * @return the count
		 */
		public Integer getCount()
		{
			return count;
		}

		/**
		 * @param count
		 *           the count to set
		 */
		public void setCount(final Integer count)
		{
			this.count = count;
		}

		/**
		 * @return the shippedCount
		 */
		public Integer getShippedCount()
		{
			return shippedCount;
		}

		/**
		 * @param shippedCount
		 *           the shippedCount to set
		 */
		public void setShippedCount(final Integer shippedCount)
		{
			this.shippedCount = shippedCount;
		}

		/**
		 * @return the processingCount
		 */
		public Integer getProcessingCount()
		{
			return processingCount;
		}

		/**
		 * @param processingCount
		 *           the processingCount to set
		 */
		public void setProcessingCount(final Integer processingCount)
		{
			this.processingCount = processingCount;
		}

		/**
		 * @return the awaitingCount
		 */
		public Integer getAwaitingCount()
		{
			return awaitingCount;
		}

		/**
		 * @param awaitingCount
		 *           the awaitingCount to set
		 */
		public void setAwaitingCount(final Integer awaitingCount)
		{
			this.awaitingCount = awaitingCount;
		}

		/**
		 * @return the blkcount
		 */
		public Integer getBlkcount()
		{
			return blkcount;
		}

		/**
		 * @param blkcount
		 *           the blkcount to set
		 */
		public void setBlkcount(final Integer blkcount)
		{
			this.blkcount = blkcount;
		}




	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.order.BHGEB2BOrderFacade#fetchOrderDetailsForCode(java.lang.String)
	 */
	@Override
	public OrderData fetchOrderDetailsForCode(final String orderCode)
	{
		OrderModel orderModel = null;
		orderModel = bhgeB2BOrderService.fetchOrderForCode(orderCode);
		if (null != orderModel)
		{
			return getOrderConverter().convert(orderModel);
		}
		return null;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.bhge.facades.order.BHGEB2BOrderFacade#getSearchOrderResult(com.bhge.facades.forms.OrderHistoryFormSearchData,
	 * de.hybris.platform.commerceservices.search.pagedata.PageableData, java.util.List)
	 */
	public List<OrderHistoryViewData> getOrderDetailsForCodeWs(String code) {
		final String soldToid = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs().getUid();
		String orderType = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET"))) ? Config.getParameter("ORDERTYPE_DET")
				: "CP_DET";
		final String soldToIDSingle = getSoldToForWS();
		final String soldToIdForSingleCache = getKey(soldToIDSingle, orderType);
		//final List<BHGEOrderHistoryCollectionData> subListOfMap = new ArrayList<BHGEOrderHistoryCollectionData>();
		ArrayList<OrderHistoryViewData> orderItems = new ArrayList<>();
		//if ((multipleSoldToId != null) && (multipleSoldToId.size() > 0) && (!multipleSoldToId.isEmpty()))
		//{
			//if (StringUtils.isNotBlank(soldToIDSingle) && !multipleSoldToId.contains(soldToIDSingle))
			//{
				//multipleSoldToId.add(soldToIDSingle);
			//}
			//for (final String soldto : multipleSoldToId)
				if (StringUtils.isNotBlank(soldToIdForSingleCache))
					//{
				{
					final BHGEOrderHistoryCollectionData orderHistoryData = getOrderHistoryDataForUser(orderType,
							getKey(soldToIDSingle, orderType));

					LOG.info("Order Headers getOrderDetailsForCodeWs with code:-"+code);

					Map<String, Set<OrderHistoryViewData>> bhgeOrderHistoryItemData = orderHistoryData.getBhgeOrderHistoryItemData();
					Map<String, Set<OrderHistoryDeliveryData>> bhgeOrderHistoryDeliveryData = orderHistoryData.getBhgeOrderHistoryDeliveryData();
					
					if (orderHistoryData != null && bhgeOrderHistoryItemData!=null &&
							bhgeOrderHistoryItemData.entrySet()!=null && bhgeOrderHistoryItemData.size() > 0) 
					{
						Set<OrderHistoryViewData> itemData = orderHistoryData.getBhgeOrderHistoryItemData().get(code);
						if(itemData!=null && itemData.size() > 0) 
						{
							orderItems.addAll(itemData);
							Collections.sort(orderItems, new BHGEOrderLineItemComparator<OrderHistoryViewData>());
							populateOrderItems(orderItems);
							if(orderItems!=null && orderItems.size() > 0 && bhgeOrderHistoryDeliveryData!=null
									&& bhgeOrderHistoryDeliveryData.size() > 0) {
								LOG.debug("Inside1 Delivery Line Count " + orderHistoryData.getBhgeOrderHistoryDeliveryData().size()
										+ " & Line Items - " + orderItems.size());
								for (final OrderHistoryViewData getLineItem : orderItems)
								{
									LOG.debug(
											"Inside1 Delivery Line Key " + getLineItem.getOrderNum() + " & Line " + getLineItem.getLineNumber());
									final Set<OrderHistoryDeliveryData> deliveryDataSet = orderHistoryData.getBhgeOrderHistoryDeliveryData()
											.get(getLineItem.getOrderNum() + "#" + getLineItem.getLineNumber());
									if (deliveryDataSet != null && deliveryDataSet.size() > 0)
									{
										LOG.debug("Inside1 Delivery Line Fetch - " + getLineItem.getOrderNum() + "#" + getLineItem.getLineNumber()
										+ " & Size - " + deliveryDataSet.size());
										final ArrayList<OrderHistoryDeliveryData> deliveryDataList = new ArrayList<OrderHistoryDeliveryData>(
												deliveryDataSet);
										//Collections.sort(deliveryDataList, new VsOrderDeliveryComparator<VsOrderHistoryDeliveryData>());
										populateOrderDeliveries(deliveryDataList);
										getLineItem.setDeliveryLineItems(deliveryDataList);
									}

									Map<String, BHGEOrderHistoryData> headerData = orderHistoryData.getBhgeOrderHistoryHeaderData();
									LOG.info("Order Headers getOrderDetailsForCodeWs Received headeraData");
									if(headerData != null) {
										LOG.info("Order Headers with header data getOrderDetailsForCodeWs inside if part!");
										BHGEOrderHistoryData bhgeOrderHistoryData = orderHistoryData.getBhgeOrderHistoryHeaderData().get(code);
										if (bhgeOrderHistoryData != null) {
											getLineItem.setAuthAmt(bhgeOrderHistoryData.getAuthAmt());
											getLineItem.setAuthDate(bhgeOrderHistoryData.getAuthDate());
											getLineItem.setSettlAmt(bhgeOrderHistoryData.getSettlAmt());
											getLineItem.setSettlDate(bhgeOrderHistoryData.getSettlDate());
											getLineItem.setSettlStat(bhgeOrderHistoryData.getSettlStat());
											getLineItem.setIncoTerm(bhgeOrderHistoryData.getIncoterm());
											LOG.info("Order Headers Successfully added new attributes getOrderDetailsForCodeWs inside if part!");
										}
									}
								}
							}
						}else {
							final BHGEOrderHistoryCollectionData orderHistoryDataCollection = bhgeOrderHistoryService.getFastOrderSCPIForWS(soldToIDSingle, orderType,
									code, "");
							if(null != orderHistoryDataCollection && null != orderHistoryDataCollection.getBhgeOrderHistoryItemData()) {
								Map<String, Set<OrderHistoryDeliveryData>> bhgeOrderHistoryDeliveryData1 = orderHistoryDataCollection.getBhgeOrderHistoryDeliveryData();
								Set<OrderHistoryViewData> itemData1 = orderHistoryDataCollection.getBhgeOrderHistoryItemData().get(code);
								orderItems.addAll(itemData1);
								populateOrderItems(orderItems);
								if(orderItems!=null && orderItems.size() > 0 && bhgeOrderHistoryDeliveryData1!=null
										&& bhgeOrderHistoryDeliveryData1.size() > 0) {
									LOG.debug("Inside1 Delivery Line Count " + orderHistoryDataCollection.getBhgeOrderHistoryDeliveryData().size()
											+ " & Line Items - " + orderItems.size());
									for (final OrderHistoryViewData getLineItem : orderItems)
									{
										LOG.debug(
												"Inside1 Delivery Line Key " + getLineItem.getOrderNum() + " & Line " + getLineItem.getLineNumber());
										final Set<OrderHistoryDeliveryData> deliveryDataSet = orderHistoryDataCollection.getBhgeOrderHistoryDeliveryData()
												.get(getLineItem.getOrderNum() + "#" + getLineItem.getLineNumber());
										if (deliveryDataSet != null && deliveryDataSet.size() > 0)
										{
											LOG.debug("Inside1 Delivery Line Fetch - " + getLineItem.getOrderNum() + "#" + getLineItem.getLineNumber()
											+ " & Size - " + deliveryDataSet.size());
											final ArrayList<OrderHistoryDeliveryData> deliveryDataList = new ArrayList<OrderHistoryDeliveryData>(
													deliveryDataSet);
											populateOrderDeliveries(deliveryDataList);
											getLineItem.setDeliveryLineItems(deliveryDataList);
										}

										Map<String, BHGEOrderHistoryData> headerData = orderHistoryDataCollection.getBhgeOrderHistoryHeaderData();
										LOG.info("Order Headers getOrderDetailsForCodeWs Received headeraData");
										if(headerData != null) {
											LOG.info("Order Headers with header data getOrderDetailsForCodeWs inside else part!");
											BHGEOrderHistoryData bhgeOrderHistoryData = orderHistoryDataCollection.getBhgeOrderHistoryHeaderData().get(code);
											if (bhgeOrderHistoryData != null) {
												getLineItem.setAuthAmt(bhgeOrderHistoryData.getAuthAmt());
												getLineItem.setAuthDate(bhgeOrderHistoryData.getAuthDate());
												getLineItem.setSettlAmt(bhgeOrderHistoryData.getSettlAmt());
												getLineItem.setSettlDate(bhgeOrderHistoryData.getSettlDate());
												getLineItem.setSettlStat(bhgeOrderHistoryData.getSettlStat());
												getLineItem.setIncoTerm(bhgeOrderHistoryData.getIncoterm());
												LOG.info("Order Headers Successfully added new attributes getOrderDetailsForCodeWs inside else part!");
											}
										}
									}
								}
							}
						}
						
					}
					
					
				}
			//}
		//}
		return orderItems;
	}

	@Override
	public List<OrderNotificationData> getOrderNotificationData() {
		List<OrderNotificationData> blockedNotifications = new LinkedList<>();
        LOG.info("US552962 : Getting InAPP Notification in Facade");
		try{
			UserModel currentUser = userService.getCurrentUser();
			if (isValidUser(currentUser)) {

				GEEdgeCustomerModel customer = (GEEdgeCustomerModel) currentUser;
                LOG.info("US552962 : Getting InAPP Notification Got the USER: 3312" + customer.getUid());
				//CacheKey cacheKey = createCacheKey(customer.getDefaultB2BUnit());
				blockedNotifications = retrieveAndProcessNotifications();
			}
		} catch (RuntimeException e) {
			LOG.error("Exception in getOrderNotificationData: "+e.getMessage());
		}
		return blockedNotifications;
	}

	private boolean isValidUser(UserModel user) {
		return !userService.isAnonymousUser(user) && user instanceof GEEdgeCustomerModel;
	}

	private CacheKey createCacheKey(B2BUnitModel b2bUnit) {
		String key = Objects.requireNonNull(b2bUnit).getUid().split("_")[0];
		return new BHGEOrderNotificationCacheKey(key, Registry.getCurrentTenant().getTenantID());
	}

	private List<OrderNotificationData> retrieveAndProcessNotifications() {
		List<OrderNotificationData> blockedNotifications = new LinkedList<>();
		List<OrderNotificationData> blockReleasedNotifications;
        LOG.info("US552962 : Getting InAPP Notification retrieving the Notiifcation");

		try {
			loadDbNotifications(blockedNotifications);
		} catch (RuntimeException e) {
			LOG.error("Exception in retrieveAndProcessNotifications method: ", e);
		}
		return blockedNotifications;
	}

	private void processBlockedNotifications(List<OrderNotificationData> blockedNotifications) {
		try {
			List<OrderNotificationModel> notificationModels = createNotificationModels(blockedNotifications);
			if (CollectionUtils.isNotEmpty(notificationModels)) {
				getModelService().saveAll(notificationModels);
			}
		} catch (Exception ex) {
			LOG.error("Exception during processBlockedNotifications: ", ex);
		}
	}

	private void loadDbNotifications(List<OrderNotificationData> blockedNotifications) {
        LOG.info("US552962 : Getting InAPP Notification loadDBNotification");
		try {
			LocalDate thirtyDaysAgo = LocalDate.now().minusDays(Integer.parseInt(Config.getParameter("bhge.order.notification.month")));
			List<OrderNotificationModel> dbNotifications = bhgeOrderNotificationService.getNotifications();
			if (CollectionUtils.isNotEmpty(dbNotifications)) {
                LOG.info("US552962-1 : Got dbNotification not empty : "+dbNotifications.size());
				dbNotifications.forEach(dbNotification -> {
					LocalDate updatedDate = convertToLocalDate(dbNotification.getUpdatedDate());
                    LOG.info("US552962-1 : Thirty Days ago : " + thirtyDaysAgo);
					if (!updatedDate.isBefore(thirtyDaysAgo)) {
                        LOG.info("US552962-1 : Updated date : - NotificationNumber " + updatedDate + "-"+ dbNotification.getOrderId());
						populateDbOrderNotification(dbNotification, blockedNotifications);
					}
				});
			}
		} catch (Exception e) {
			LOG.error("Exception in loadDbNotifications: ", e);
		}
	}

	private void populateDbOrderNotification(OrderNotificationModel dbNotification, List<OrderNotificationData> blockedNotifications) {
		try {
			OrderNotificationData notificationData = createNotificationDataFromModel(dbNotification);
			blockedNotifications.add(notificationData);
		} catch (RuntimeException e) {
			LOG.error("Error while populating order notification from DB: ", e);
		}
	}

	private OrderNotificationData createNotificationDataFromModel(OrderNotificationModel dbNotification) {
		OrderNotificationData notificationData = new OrderNotificationData();
		notificationData.setIsOrderRead(dbNotification.getIsOrderRead());
		notificationData.setOrderId(dbNotification.getOrderId());
		notificationData.setStatus(dbNotification.getOrderStatus());
		notificationData.setUpdatedDate(formatDate(dbNotification.getModifiedtime()));
		return notificationData;
	}

	private List<OrderNotificationModel> createNotificationModels(List<OrderNotificationData> blockedNotifications) {
		List<OrderNotificationModel> notificationModels = new LinkedList<>();
		try {
			List<OrderNotificationModel> dbNotifications = bhgeOrderNotificationService.getNotifications();
			Map<String, OrderNotificationModel> existingNotificationsMap = new HashMap<>();

			if (CollectionUtils.isNotEmpty(dbNotifications)) {
				existingNotificationsMap = dbNotifications.stream()
						.collect(Collectors.toMap(
								notification -> notification.getOrderId().toLowerCase(),
								notification -> notification
						));
			}

			for (OrderNotificationData blockedNotification : blockedNotifications) {
				String blockedOrderId = blockedNotification.getOrderId().toLowerCase();
				if (!existingNotificationsMap.containsKey(blockedOrderId)) {
					OrderNotificationModel notificationModel = new OrderNotificationModel();
					bhgeOrderNotificationReversePopulator.populate(blockedNotification, notificationModel);
					notificationModels.add(notificationModel);
				} else {
					OrderNotificationModel existingNotification = existingNotificationsMap.get(blockedOrderId);
					blockedNotification.setIsOrderRead(existingNotification.getIsOrderRead());
					Date date = existingNotification.getUpdatedDate();
					SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
					String updatedDate = formatter.format(date);
					blockedNotification.setUpdatedDate(updatedDate);
				}
			}
		} catch (Exception e) {
			LOG.error("Exception while creating Order Notifications: ", e);
		}
		return notificationModels;
	}



	private List<OrderNotificationData> processBlockReleasedNotifications(List<OrderNotificationData> blockedNotifications) {
		List<OrderNotificationData> blockReleasedNotifications = new LinkedList<>();
		try {
			List<OrderNotificationModel> orderNotifications = bhgeOrderNotificationService.getNotifications();

			if (CollectionUtils.isNotEmpty(orderNotifications)) {
				List<OrderNotificationModel> blockReleasedNotificationModels = orderNotifications.stream()
						.filter(orderNotification -> isBlockReleased(orderNotification, blockedNotifications))
						.map(this::createBlockReleasedNotification)
						.collect(Collectors.toList());

				populateBlockReleasedNotificationsData(blockReleasedNotificationModels, blockReleasedNotifications);
			}
		} catch (RuntimeException e) {
			LOG.error("Exception in processBlockReleasedNotifications: ", e);
		}
		return blockReleasedNotifications;
	}

	private boolean isBlockReleased(OrderNotificationModel orderNotification, List<OrderNotificationData> blockedNotifications) {
		int notificationPeriodInDays = Integer.parseInt(Config.getParameter("bhge.order.notification.month"));
		LocalDate thirtyDaysAgo = LocalDate.now().minusDays(notificationPeriodInDays);
		LocalDate updatedDate = convertToLocalDate(orderNotification.getUpdatedDate());
		boolean isOrderIdNotMatch = blockedNotifications.stream()
				.noneMatch(blockedNotification -> StringUtils.containsIgnoreCase(orderNotification.getOrderId(), blockedNotification.getOrderId()));
		return isOrderIdNotMatch && !updatedDate.isBefore(thirtyDaysAgo);
    }


	private void populateBlockReleasedNotificationsData(List<OrderNotificationModel> blockReleasedNotificationModels, List<OrderNotificationData> blockReleasedNotifications) {
		try {
			if (CollectionUtils.isNotEmpty(blockReleasedNotificationModels)) {
				getModelService().saveAll(blockReleasedNotificationModels);
				blockReleasedNotificationModels.forEach(orderNotification -> {
					OrderNotificationData blockReleasedNotification = createBlockReleasedNotificationData(orderNotification);
                    blockReleasedNotifications.add(blockReleasedNotification);
                });
			}
		} catch (RuntimeException e) {
			LOG.error("Exception in populateBlockReleasedNotificationsData: ", e);
		}
	}

	private OrderNotificationData createBlockReleasedNotificationData(OrderNotificationModel orderNotification) {
		OrderNotificationData blockReleasedNotification = new OrderNotificationData();
		try {
			blockReleasedNotification.setIsOrderRead(false);
			blockReleasedNotification.setOrderId(orderNotification.getOrderId());
			blockReleasedNotification.setStatus("Block Released");
			blockReleasedNotification.setUpdatedDate(getCurrentFormattedDate());
		} catch (Exception e) {
			LOG.error("Exception while creating Block released Notifications "+e.getMessage());
		}
		return blockReleasedNotification;
	}


	private LocalDate convertToLocalDate(Date date) {
		if (date == null) {
			return LocalDate.MIN;
		}
		return date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
	}

	private OrderNotificationModel createBlockReleasedNotification(OrderNotificationModel orderNotification) {
		orderNotification.setOrderStatus("Block Released");
		orderNotification.setIsOrderRead(false);
		orderNotification.setBlockReason("");
		orderNotification.setIsOrderEmailSent(false);
		return orderNotification;
	}

	private String formatDate(Date date) {
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		return formatter.format(date);
	}

	private String getCurrentFormattedDate() {
		return LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
	}


	@Override
	public boolean updateNotification(String orderId) {
		return bhgeOrderNotificationService.updateOrderNotification(orderId);
	}
}