/**
 *
 */
package com.bhge.integration.order.history.service.impl;

import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.core.order.daos.BHGEB2BOrderDao;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.zorderhistory.ZOrderHistoryRequest;
import com.bhge.core.scpi.rfc.zorderhistory.ZOrderHistoryRequest$Item;
import com.bhge.core.scpi.rfc.zorderhistory.ZOrderHistoryResponse;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.facades.order.data.OrderErrorData;
import com.bhge.facades.order.notification.data.OrderNotificationData;
import de.hybris.platform.b2b.dao.impl.DefaultB2BOrderDao;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.impl.DefaultB2BOrderService;
import de.hybris.platform.commercefacades.order.data.OrderHistoryDeliveryData;
import de.hybris.platform.commercefacades.order.data.OrderHistoryViewData;
import de.hybris.platform.commercefacades.storesession.StoreSessionFacade;
import de.hybris.platform.core.AbstractTenant;
import de.hybris.platform.core.Registry;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.sap.core.jco.exceptions.BackendRuntimeException;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
//import org.apache.log4j.Logger;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.bhge.core.constants.BhgeCoreConstants;
//import com.hybris.ge.edge.core.model.ContactusSettingsModel;
import com.bhge.core.sap.SAPJcoContainer;
import com.bhge.core.serviceprovider.service.BHGEServiceProviderService;
//import com.hybris.ge.edge.core.serviceprovider.service.GEEdgeServiceProviderService;
//import com.hybris.ge.edge.core.user.daos.impl.DefaultGEEdgeUserProfileDao;
import com.bhge.facades.forms.OrderHistoryFormSearchData;
import com.bhge.facades.order.data.BHGEOrderHistoryCollectionData;
import com.bhge.facades.order.data.BHGEOrderHistoryData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.integration.order.history.dao.BHGEOrderHistoryDao;
import com.bhge.integration.order.history.error.service.BHGEOrderHistoryErrorService;
import com.bhge.integration.order.history.service.BHGEOrderHistoryService;
import com.sap.conn.jco.JCoField;
import com.sap.conn.jco.JCoFieldIterator;
//import com.hybris.ge.edge.store.services.GEEdgeBaseStoreService;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoTable;
import de.hybris.platform.search.restriction.SearchRestrictionService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class DefaultBHGEOrderHistoryService implements BHGEOrderHistoryService
{
	private static final String CONTACTUS_SUPPORTTEAM_ORDER = "GEEdgeSupportTeamOrder";
	private final static Logger LOG = LoggerFactory.getLogger(DefaultBHGEOrderHistoryService.class);
	public static final String ERROR_CODE = "S0";
	public static final String TBD = "TBD";
	private static final String SCPI_Z_SORDER_HISTORY_ENDPOINT_URL = "SCPI_Z_SORDER_HISTORY_ENDPOINT";
	private static final String USER_TYPE_INTERNAL = "I";
	private static final String USER_TYPE_EXTERNAL = "E";
	private static final String CREDIT_CARD_CHECK = "zterm.value.for.credit.card.orders";
	public static Map<String, String> PRODUCTLINE_MAP = null;


	private BHGEOrderHistoryErrorService bhgeOrderHistoryErrorService;

	private BHGEOrderHistoryDao bhgeOrderHistoryDao;

	@Resource(name = "sapJcoContainer")
	private SAPJcoContainer sapJcoContainer;
	@Resource(name = "scpiConnector")
	private SCPIConnector scpiConnector;

	@Resource(name = "bhgeServiceProviderService")
	private BHGEServiceProviderService bhgeServiceProviderService;


	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource
	private DefaultB2BOrderDao b2bOrderDao;

	@Resource(name = "configurationService")
	ConfigurationService configurationService;
	
	@Resource
	private UserService userService;

	// @Resource(name = "baseStoreService")
	// private GEEdgeBaseStoreService baseStoreService;

	// @Resource(name = "userProfileDao")
	// private DefaultGEEdgeUserProfileDao userProfileDao;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;

	@Resource(name = "b2bOrderService")
	private DefaultB2BOrderService b2bOrderService;

	@Resource(name = "storeSessionFacade")
	private StoreSessionFacade storeSessionFacade;

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;
	
	@Resource(name = "searchRestrictionService")
	SearchRestrictionService searchRestrictionService;

	@Resource(name = "bhgeB2BOrderDao")
	private BHGEB2BOrderDao bhgeB2BOrderDao;

	@Autowired
	private BHGEB2BUnitService bhgeB2BUnitService;

	/**
	 * This method will prepare RFC request to get the orders from SAP for the given soldto and order type combination
	 * and also process the RFC response
	 *
	 */
	public BHGEOrderHistoryCollectionData getOrders_JCO(final String soldto, String orderType)
	{
		LOG.info("Inside getOrders ....");
		try
		{
			String ORDERTYPE_DET = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET"))) ? Config.getParameter("ORDERTYPE_DET"): "CP_DET";
			final ExecutorService executor = Executors.newSingleThreadExecutor();
			final JaloSession currentSession = JaloSession.getCurrentSession();
			final AbstractTenant tenant = (AbstractTenant) Registry.getCurrentTenant();
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			LOG.info("Connection fetched ....");
			if (connection != null && !connection.isBackendOffline())
			{
				LOG.info("Connection finalized ....");
				final int timeout = configurationService.getConfiguration().getInt("bhge.orderhistory.timeout.value", 180);
				LOG.info("The timeout value from the properties is ...." + timeout);
				orderType = ORDERTYPE_DET;

				final JCoFunction function = prepareRequest(connection, soldto, orderType, false);
				BHGEOrderHistoryCollectionData result = new BHGEOrderHistoryCollectionData();
				final Callable<Object> task = new Callable<Object>()
				{
					@Override
					public Object call() throws BackendException
					{
						LOG.info("Inside the call() method for order service exceution..Timeout value is...." + timeout);
						Registry.setCurrentTenant(tenant);
						tenant.setActiveSessionForCurrentThread(currentSession);
						connection.execute(function);
						return processResponse(function);
					}
				};
				LOG.info("Executing future.get() start");
				final Future<Object> future = executor.submit(task);
				LOG.info("Executing future.get() end");
				try
				{
					result = (BHGEOrderHistoryCollectionData) future.get(timeout, TimeUnit.SECONDS);
				}
				catch (final TimeoutException ex)
				{
					LOG.error("Time out exception occurred during getOrder() execution" + ex);
					result.setTimeoutException(true);
					LOG.info("Time out exception occurred - Calling Order History Service with date range mechanism - " + ex);
					return fetchOrderDateRange(soldto, orderType);
				}
				catch (final InterruptedException ex)
				{
					LOG.error("Interrupted exception occurred during getOrder() execution" + ex);
					result.setInterruptedException(true);
				}
				catch (final ExecutionException ex)
				{
					LOG.error("Execution exception occurred during getOrder() execution" + ex);
					result.setExecutionException(true);
				}
				finally
				{
					future.cancel(true); // may or may not desire this
					executor.shutdown();
				}
				return result;

			}
		}
		catch (final Exception backEndException)
		{
			LOG.info("Inside getOrders catch block with exception: " + backEndException.getMessage());
			handleException(soldto, orderType, backEndException);

			return fetchOrderDateRange(soldto, orderType);
		}
		return null;
	}

	/**
	 * This method will prepare RFC request to get the orders from SAP for the given soldto and order type combination
	 * and also process the RFC response SCPI Implementation
	 *
	 */
	@Override
	public BHGEOrderHistoryCollectionData getOrders(String soldto, String orderType)
	{
		LOG.info("Inside getOrders SCPI....");
		LOG.info("Inside the sold to "+soldto+" order type "+orderType);
		if(null == soldto)
		{
			LOG.info("Sold to or Order type is null");
		}
		else if(soldto.equals("null"))
		{
			LOG.info("Sold to fetched from request parameter is null String");
		}
		try
		{
			String ORDERTYPE_DET = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET"))) ? Config.getParameter("ORDERTYPE_DET"): "CP_DET";
			final ExecutorService executor = Executors.newSingleThreadExecutor();
			final JaloSession currentSession = JaloSession.getCurrentSession();
			final AbstractTenant tenant = (AbstractTenant) Registry.getCurrentTenant();
//			final JCoConnection connection = sapJcoContainer.getRFCConnection();
//			LOG.info("Connection fetched ....");
//			if (connection != null && !connection.isBackendOffline())
//			{
				LOG.info("Connection finalized ....");
				final int timeout = configurationService.getConfiguration().getInt("bhge.orderhistory.timeout.value", 180);
				LOG.info("The timeout value from the properties is ...." + timeout);
				orderType = ORDERTYPE_DET;
				final String scpiEndPoint = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_Z_SORDER_HISTORY_ENDPOINT_URL,
					flexibleSearchService);
//				final JCoFunction function = prepareRequest(connection, soldto, orderType, false);
				//ZOrderHistoryRequest zOrderHistoryRequest = prepareRequestSCPI(null, soldto, orderType, false);
				ZOrderHistoryRequest zOrderHistoryRequest = prepareRequestSCPIforOrderHistory(null, soldto, orderType, false);
				String zOrderHistoryRequestXML = SCPIConnector.toXML(zOrderHistoryRequest);
				LOG.debug("Fast Order Request: " + zOrderHistoryRequestXML);

				BHGEOrderHistoryCollectionData result = new BHGEOrderHistoryCollectionData();
				final Callable<Object> task = new Callable<Object>()
				{
					@Override
					public Object call() throws BackendException
					{
						LOG.info("Session values " +currentSession.getSessionID() + " - " + tenant.getTenantID() + " - " + Thread.currentThread().getName()+"before setting the session and tenant" );

						LOG.info("Inside the call() method for order service exceution..Timeout value is...." + timeout);
						Registry.setCurrentTenant(tenant);
						tenant.setActiveSessionForCurrentThread(currentSession);
						LOG.info("Session values"+ currentSession.getSessionID() + " - " + tenant.getTenantID() + " - " + Thread.currentThread().getName()+"after setting the session and tenant");
						LOG.info("Calling SCPI from call() method in order history service implementation");
//						connection.execute(function);
						ZOrderHistoryResponse zOrderHistoryResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, zOrderHistoryRequest, ZOrderHistoryResponse.class);
						LOG.info("SCPI call executed and response received in call() method"+ zOrderHistoryResponse);

//						return processResponse(function);
						return processResponseSCPI(zOrderHistoryResponse,soldto);
					}
				};
				LOG.info("Executing future.get() start");
				final Future<Object> future = executor.submit(task);
				LOG.info("Executing future.get() end");
				try
				{
					result = (BHGEOrderHistoryCollectionData) future.get(timeout, TimeUnit.SECONDS);
					LOG.info("getOrders execution completed within timeout, returning the result" + result);
				}
				catch (final TimeoutException ex)
				{
					LOG.error("Time out exception occurred during getOrder() execution", ex);
					result.setTimeoutException(true);
					LOG.info("Time out exception occurred - Calling Order History Service with date range mechanism", ex);
					return fetchOrderDateRange(soldto, orderType);
				}
				catch (final InterruptedException ex)
				{
					LOG.error("Interrupted exception occurred during getOrder() execution", ex);
					result.setInterruptedException(true);
					return fetchOrderDateRange(soldto, orderType);
				}
				catch (final ExecutionException ex)
				{
					LOG.error("Execution exception occurred during getOrder() execution", ex);
					result.setExecutionException(true);
					return fetchOrderDateRange(soldto, orderType);
				}
				finally
				{
					LOG.info("Inside finally block of getOrders method in order history service implementation");
					future.cancel(true); // may or may not desire this
					executor.shutdown();
				}
				LOG.info("getOrders execution completed, returning the result"+result);
				return result;

//			}
		}
		catch (final Exception backEndException)
		{
			LOG.info("Inside getOrders catch block with exception: " + backEndException.getMessage());
			handleException(soldto, orderType, backEndException);

			return fetchOrderDateRange(soldto, orderType);
		}

//		return null;
	}

	/**
	 * @param soldto
	 * @param orderType
	 * @return
	 */
	public BHGEOrderHistoryCollectionData fetchOrderDateRange(final String soldto, String orderType)
	{
		LOG.info("********************* IN fetchOrderDateRange() METHOD **********************");
		BHGEOrderHistoryCollectionData result = new BHGEOrderHistoryCollectionData();
		final int number = configurationService.getConfiguration().getInt("timeout.next.integer", 180);
		final int limit = configurationService.getConfiguration().getInt("timeout.limit.integer", 60);
		LOG.info("Initial DateRange value : " + number + " and Limit value : " + limit);
		
		for (int i = number; i >= limit; i = (i - limit))
		{
			final String dateRange = Integer.toString(i);
			LOG.info("Getting orders data with Date Range : " + dateRange + "........");
			result = getOrdersWithDateRange(soldto, orderType, dateRange);
			
			if (result.getBhgeOrderHistoryItemData() == null && result.isTimeoutException() == true)
			{
				LOG.info("----------------------- TIMEOUT EXCEPTION AGAIN------------------------");
				LOG.info("Get orders data with less Date Range........");
				continue;
			}
			else
			{
				break;
			}
		}
		return result;
	}




	@Override
	public BHGEOrderHistoryCollectionData getOrderHistoryData(final String soldto, final String orderType, final String fromDate,
			final String toDate)
	{
		try
		{
			LOG.info("Inside getOrderHistoryData");

			String ORDERTYPE_DET = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET"))) ? Config.getParameter("ORDERTYPE_DET"): "CP_DET";
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			LOG.info("Connection fetched ....");
			if (connection != null && !connection.isBackendOffline())
			{
				final String orderTypeforFast = ORDERTYPE_DET;
				final JCoFunction function = prepareRequestOrderHistory(connection, soldto, orderTypeforFast, fromDate, toDate);
				LOG.debug("Fast Order Request: " + function.toXML());
				connection.execute(function);
				return processResponse(function);
			}
		}
		catch (final Exception e)
		{
			handleException(soldto, orderType, e);
		}
		return null;
	}


	//Fast Order
	//Fast Order Now
	@Override
	public BHGEOrderHistoryCollectionData getFastOrder(final String soldto, final String orderType, final String salesOrderNumber,
			final String poNumber)
	{
		try
		{

			LOG.info("Inside getFastOrder");

			String ORDERTYPE_DET = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET"))) ? Config.getParameter("ORDERTYPE_DET"): "CP_DET";
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			LOG.info("Connection fetched ....");
			if (connection != null && !connection.isBackendOffline())
			{
				LOG.info("Connection finalized ....");
				if (soldto != null)
				{
					LOG.info("Condition Check 1 ....");
					if (salesOrderNumber != null && (!salesOrderNumber.equalsIgnoreCase("")) && poNumber.equalsIgnoreCase(""))
					{
						final JCoFunction function = prepareRequest(connection, soldto, orderType, false);
						function.getImportParameterList().setValue(BhgeCoreConstants.F_VBELN, salesOrderNumber);
						LOG.debug("Fast Order Request: " + function.toXML());
						connection.execute(function);
						return processFastOrderResponse(function);
					}
					LOG.info("Condition Check 2 ....");
					if ((salesOrderNumber == null) && poNumber != null && (!poNumber.equalsIgnoreCase("")))
					{
						LOG.info("Condition Check 3 ....");
						final JCoFunction function = prepareRequest(connection, soldto, orderType, false);
						function.getImportParameterList().setValue(BhgeCoreConstants.F_BSTKD, poNumber);
						LOG.info("Fast Order Request: " + function.toXML());
						connection.execute(function);
						return processFastOrderResponse(function);
					}
				}

				else if (StringUtils.isBlank(soldto) && (StringUtils.isNotBlank(salesOrderNumber)))
				{
					final String orderTypeforFast = ORDERTYPE_DET;
					final String soldtoForFastOrder = getSoldTo();
					final JCoFunction function = prepareRequest(connection, soldtoForFastOrder, orderTypeforFast, false);
					function.getImportParameterList().setValue(BhgeCoreConstants.F_VBELN, salesOrderNumber);
					LOG.debug("Fast Order Request: {}" ,function.toXML());
					connection.execute(function);
					return processResponse(function);
				}
				else if (StringUtils.isBlank(soldto) && (StringUtils.isNotBlank(poNumber)))
				{
					final String orderTypeforFast = ORDERTYPE_DET;
					final String soldtoForFastOrder = getSoldTo();
					final JCoFunction function = prepareRequest(connection, soldtoForFastOrder, orderTypeforFast, false);
					function.getImportParameterList().setValue(BhgeCoreConstants.F_BSTKD, poNumber);
					LOG.debug("Fast Order Request:{} " , function.toXML());
					connection.execute(function);
					return processResponse(function);
				}

			}
		}
		catch (final BackendException backEndException)
		{
			handleException(soldto, orderType, backEndException);
		}
		catch (final BackendRuntimeException runtimeException)
		{
			handleException(soldto, orderType, runtimeException);
		}
		catch (final Exception e)
		{
			handleException(soldto, orderType, e);
		}
		return null;
	}
	//Fast Order Now

	//SCPI: Fast Order Now
	public BHGEOrderHistoryCollectionData getFastOrderSCPI(final String soldto, final String orderType, final String salesOrderNumber,
													   final String poNumber)
	{
		try
		{

			LOG.info("Inside getFastOrderSCPI");
			String ORDERTYPE_DET = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET"))) ? Config.getParameter("ORDERTYPE_DET"): "CP_DET";
			final String scpiEndPoint = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_Z_SORDER_HISTORY_ENDPOINT_URL,
					flexibleSearchService);
			if (scpiEndPoint != null )
			{
				if (soldto != null)
				{
					LOG.info("Condition Check 1 ....");
					if (salesOrderNumber != null && (!salesOrderNumber.equalsIgnoreCase("")) && poNumber.equalsIgnoreCase(""))
					{
						ZOrderHistoryRequest zOrderHistoryRequest = prepareRequestSCPI(null, soldto, orderType, false);
						zOrderHistoryRequest.setVblen(StringUtils.right(salesOrderNumber,10));
						String zOrderHistoryRequestXML = SCPIConnector.toXML(zOrderHistoryRequest);
						LOG.debug("Fast Order Request: " + zOrderHistoryRequestXML);
						ZOrderHistoryResponse zOrderHistoryResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint,zOrderHistoryRequest, ZOrderHistoryResponse.class);
						return processFastOrderResponseSCPI(zOrderHistoryResponse,soldto);
					}
					LOG.info("Condition Check 2 ....");
					if ((salesOrderNumber == null) && poNumber != null && (!poNumber.equalsIgnoreCase("")))
					{
						LOG.info("Condition Check 3 ....");
						final ZOrderHistoryRequest function = prepareRequestSCPI(null, soldto, orderType, false);

						function.setBstkd(poNumber);
						ZOrderHistoryResponse zOrderHistoryResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, function, ZOrderHistoryResponse.class);
						return processFastOrderResponseSCPI(zOrderHistoryResponse,soldto);
					}
				}

				else if (StringUtils.isBlank(soldto) && (StringUtils.isNotBlank(salesOrderNumber)))
				{
					final String orderTypeforFast = ORDERTYPE_DET;
					final String soldtoForFastOrder = getSoldTo();
					final ZOrderHistoryRequest function = prepareRequestSCPI(null, soldtoForFastOrder, orderTypeforFast, false);
					function.setVblen(StringUtils.right(salesOrderNumber,10));
					LOG.debug("Fast Order Request:{}", SCPIConnector.toXML(function));
					ZOrderHistoryResponse zOrderHistoryResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, function, ZOrderHistoryResponse.class);
					return processResponseSCPI(zOrderHistoryResponse,soldto);
				}
				else if (StringUtils.isBlank(soldto) && (StringUtils.isNotBlank(poNumber)))
				{
					final String orderTypeforFast = ORDERTYPE_DET;
					final String soldtoForFastOrder = getSoldTo();
					final ZOrderHistoryRequest function= prepareRequestSCPI(null, soldtoForFastOrder, orderTypeforFast, false);
					function.setBstkd(poNumber);
					LOG.debug("Fast Order Request:{} ",SCPIConnector.toXML(function));
					ZOrderHistoryResponse zOrderHistoryResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, function, ZOrderHistoryResponse.class);

					return processResponseSCPI(zOrderHistoryResponse, soldto);
				}

			}
		}
		catch (final Exception backEndException)
		{
			handleException(soldto, orderType, backEndException);
		}
		catch (final Error e)
		{
			handleException(soldto, orderType, null);
		}
		return null;
	}

	//SCPI: WS Fast Order Now
	public BHGEOrderHistoryCollectionData getFastOrderSCPIForWS(final String soldto, final String orderType, final String salesOrderNumber,
														   final String poNumber)
	{
		try
		{

			LOG.info("Inside getFastOrderSCPI");
			String ORDERTYPE_DET = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET"))) ? Config.getParameter("ORDERTYPE_DET"): "CP_DET";
			final String scpiEndPoint = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_Z_SORDER_HISTORY_ENDPOINT_URL,
					flexibleSearchService);
			if (scpiEndPoint != null )
			{
				if (soldto != null)
				{
					LOG.info("Condition Check 1 ....");
					if (salesOrderNumber != null && (!salesOrderNumber.equalsIgnoreCase("")) && poNumber.equalsIgnoreCase(""))
					{
						ZOrderHistoryRequest zOrderHistoryRequest = prepareRequestSCPI(null, soldto, orderType, false);
						zOrderHistoryRequest.setVblen(StringUtils.right(salesOrderNumber,10));
						String zOrderHistoryRequestXML = SCPIConnector.toXML(zOrderHistoryRequest);
						LOG.debug("Fast Order Request: " + zOrderHistoryRequestXML);
						ZOrderHistoryResponse zOrderHistoryResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint,zOrderHistoryRequest, ZOrderHistoryResponse.class);
						return processFastOrderResponseSCPI(zOrderHistoryResponse,soldto);
					}
					LOG.info("Condition Check 2 ....");
					if ((salesOrderNumber == null) && poNumber != null && (!poNumber.equalsIgnoreCase("")))
					{
						LOG.info("Condition Check 3 ....");
						final ZOrderHistoryRequest function = prepareRequestSCPI(null, soldto, orderType, false);

						function.setBstkd(poNumber);
						ZOrderHistoryResponse zOrderHistoryResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, function, ZOrderHistoryResponse.class);
						return processFastOrderResponseSCPI(zOrderHistoryResponse,soldto);
					}
				}

				else if (StringUtils.isBlank(soldto) && (StringUtils.isNotBlank(salesOrderNumber)))
				{
					LOG.info("Condition Check 4 ....");
					final String orderTypeforFast = ORDERTYPE_DET;
					final String soldtoForFastOrder = getSoldToFromCurrentUser();
					final ZOrderHistoryRequest function = prepareRequestSCPI(null, soldtoForFastOrder, orderTypeforFast, false);
					function.setVblen(StringUtils.right(salesOrderNumber,10));
					LOG.info("Fast Order Request: " +  SCPIConnector.toXML(function));
					ZOrderHistoryResponse zOrderHistoryResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, function, ZOrderHistoryResponse.class);
					return processResponseSCPI(zOrderHistoryResponse,soldto);
				}
				else if (StringUtils.isBlank(soldto) && (StringUtils.isNotBlank(poNumber)))
				{
					LOG.info("Condition Check 5 ....");
					final String orderTypeforFast = ORDERTYPE_DET;
					final String soldtoForFastOrder = getSoldToFromCurrentUser();
					final ZOrderHistoryRequest function= prepareRequestSCPI(null, soldtoForFastOrder, orderTypeforFast, false);
					function.setBstkd(poNumber);
					LOG.info("Fast Order Request: " + SCPIConnector.toXML(function));
					ZOrderHistoryResponse zOrderHistoryResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, function, ZOrderHistoryResponse.class);

					return processResponseSCPI(zOrderHistoryResponse,soldto);
				}

			}
		}
		catch (final Exception backEndException)
		{
			handleException(soldto, orderType, backEndException);
		}
		catch (final Error e)
		{
			handleException(soldto, orderType, null);
		}
		return null;
	}

	@Override
	public List<OrderNotificationData> getNotificationOrders(String b2bUnitId) {
		LOG.info("Inside getOrderNotification Order..");
		List<OrderNotificationData> orderNotificationsData = new LinkedList<>();
		try {
			String ORDERTYPE_DET = StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET"))
					? Config.getParameter("ORDERTYPE_DET")
					: "CP_DET";

			final ExecutorService executor = Executors.newSingleThreadExecutor();
			final JaloSession currentSession = JaloSession.getCurrentSession();
			final AbstractTenant tenant = (AbstractTenant) Registry.getCurrentTenant();
			final int timeout = configurationService.getConfiguration().getInt("bhge.orderhistory.timeout.value", 180);

			LOG.info("The timeout value from the properties is ...." + timeout);

			final String scpiEndPoint = BHGECommonsUtil.getValueFromBHGEGlobalProperties(
					SCPI_Z_SORDER_HISTORY_ENDPOINT_URL,
					flexibleSearchService
			);
			if (scpiEndPoint == null) {
				LOG.error("SCPI Endpoint is null. Exiting method.");
				return null;
			}
			ZOrderHistoryRequest zOrderHistoryRequest = prepareRequestSCPIforOrderNotification(b2bUnitId, ORDERTYPE_DET);
			final Callable<List<OrderNotificationData>> task = () -> {
				LOG.info("Inside the call() method for order service execution..Timeout value is...." + timeout);
				Registry.setCurrentTenant(tenant);
				tenant.setActiveSessionForCurrentThread(currentSession);
				ZOrderHistoryResponse zOrderHistoryResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, zOrderHistoryRequest, ZOrderHistoryResponse.class);
				return processOrderNotificationResponse(zOrderHistoryResponse);
			};
			LOG.info("Executing future.get() start");
			final Future<List<OrderNotificationData>> future = executor.submit(task);
			LOG.info("Executing future.get() end");
			try {
				orderNotificationsData = future.get(timeout, TimeUnit.SECONDS);
			} catch (final ExecutionException ex) {
				LOG.error("Execution exception during order notification call", ex);
			} catch (final TimeoutException | InterruptedException ex) {
				LOG.error("Timeout or interruption during order notification call", ex);
			} finally {
				future.cancel(true);
				executor.shutdown();
			}
			return orderNotificationsData;
		} catch (final Exception ex) {
			LOG.error("Exception during order history interface call to get order notification data", ex);
		}
		return null;
	}


	private ZOrderHistoryRequest prepareRequestSCPIforOrderNotification(String b2bUnitId, String orderType) {
		LOG.info("Inside prepareRequestSCPI .... with date range flag: " +  " and soldto: " + b2bUnitId);
		ZOrderHistoryRequest zOrderHistoryRequest = new ZOrderHistoryRequest();
		ZOrderHistoryRequest$Item request$Item = new ZOrderHistoryRequest$Item();
		request$Item.setKunnr(b2bUnitId);
		zOrderHistoryRequest.getCust_NO().getItems().add(request$Item);
		if (isInternalCustomer()) {
			zOrderHistoryRequest.setUserType(USER_TYPE_INTERNAL);
		} else {
			zOrderHistoryRequest.setUserType(USER_TYPE_EXTERNAL);
		}
		zOrderHistoryRequest.setCp_TYPE(orderType);
		final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
		final SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");
		final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy");
		zOrderHistoryRequest.setFrom_DATE(getDateValue(
				(LocalDate.now().minusDays(Long.parseLong(Config.getParameter("bhge.order.notification.month"))))
						.format(formatter),
				inputFormat, outputFormat));
		zOrderHistoryRequest
				.setTo_DATE(getDateValue((LocalDate.now()).format(formatter), inputFormat, outputFormat));
		return zOrderHistoryRequest;
	}

	private List<OrderNotificationData> processOrderNotificationResponse(ZOrderHistoryResponse zOrderHistoryResponse) {
		List<OrderNotificationData> orderNotificationData = new LinkedList<>();
		final List<ZOrderHistoryRequest$Item> orderHeaderTable = null != zOrderHistoryResponse.getMt_SALES_ORDER_HEADER() && CollectionUtils.isNotEmpty(zOrderHistoryResponse.getMt_SALES_ORDER_HEADER().getItems())
				? zOrderHistoryResponse.getMt_SALES_ORDER_HEADER().getItems() : Collections.EMPTY_LIST;
		final int orderHeaderCount = orderHeaderTable.size();
		if(orderHeaderCount > 0){
            for (ZOrderHistoryRequest$Item zOrderHistoryRequest$Item : orderHeaderTable) {
                if (StringUtils.isNotBlank(zOrderHistoryRequest$Item.getBlk_id())) {
                    OrderNotificationData orderNotification = new OrderNotificationData();
					orderNotification.setStatus("Blocked");
					orderNotification.setBlockedReason(zOrderHistoryRequest$Item.getBlk_txt());
					try {
						orderNotification.setOrderId(zOrderHistoryRequest$Item.getGe_sales_order());
						String updatedDate = zOrderHistoryRequest$Item.getDate_order_placed().trim();
						SimpleDateFormat inputFormatter = new SimpleDateFormat("dd.MMM.yyyy");
						SimpleDateFormat outputFormatter = new SimpleDateFormat("dd/MM/yyyy");
                        Date date = inputFormatter.parse(updatedDate);
						String outputDate = outputFormatter.format(date);
						orderNotification.setUpdatedDate(outputDate);
                    } catch (ParseException e) {
                        LOG.error("Exception During Date parsing"+ e.getMessage());
                    }
                    orderNotification.setIsOrderRead(false);
                    orderNotificationData.add(orderNotification);
                }
            }
		}
		return orderNotificationData;
	}
	//SCPI: Fast Order Now


	private void handleException(String soldto, final String orderType, final Exception exception)
	{
		LOG.error("Exception occured while fetching the orders from SAP - {}  and {} " ,soldto,  orderType, exception);
		if (null == soldto)		{
			soldto=getSoldTo();
		}
		LOG.info("Calling Order History Error Service from handleException method in DefaultBHGEOrderHistoryService {}",soldto);
		getBhgeOrderHistoryErrorService().handleNonCriticalError(soldto, orderType, exception.getMessage());
	}

	protected BHGEOrderHistoryCollectionData processResponse(final JCoFunction function)
	{
		LOG.debug("Order History Response:{} ", function.toXML());
		processErrors(function);
		return processOrderHistoryData(function);
	}
	protected BHGEOrderHistoryCollectionData processResponseSCPI(final ZOrderHistoryResponse function, final String soldTo)
	{
		LOG.info("SCPI Order History Response: ", function);
//		processErrors(function);
//		return processOrderHistoryData(function);
		return processOrderHistoryDataSCPI(function,soldTo);
	}
	//Fast Order

	//Fast Order
	@Override
	public BHGEOrderHistoryCollectionData processFastOrderResponse(final JCoFunction function)
	{
		LOG.info("Inside processFastOrderResponse Response: " + function.toXML());
		processErrors(function);
		return processFastOrderHistoryData(function);
	}

	private BHGEOrderHistoryCollectionData processFastOrderHistoryData(final JCoFunction function)
	{
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        final B2BUnitModel defaultB2bUnit = currentUser.getDefaultB2BUnit();
        final String productLine = currentUser.getProductLineMap().get(defaultB2bUnit.getUid());
		final BHGEOrderHistoryCollectionData orderHistoryDataCollection = new BHGEOrderHistoryCollectionData();
		final Map<String, BHGEOrderHistoryData> orderHeaders = prepareFastOrderHistoryHeaderData(function);
		final Map<String, Set<OrderHistoryViewData>> orderItems = prepareFastOrderHistoryItemData(function, orderHeaders);
		final Map<String, Set<OrderHistoryDeliveryData>> orderDeliveryItems = prepareOrderHistoryDeliveryLineItemData(function,
				orderItems);

		if (null != orderItems && orderItems.size() > 0)
		{
            buildOrderHierarchy(orderHeaders, orderItems, orderDeliveryItems);
            orderHistoryDataCollection.setBhgeOrderHistoryHeaderData(orderHeaders);
            orderHistoryDataCollection.setBhgeOrderHistoryItemData(orderItems);
            orderHistoryDataCollection.setBhgeOrderHistoryDeliveryData(orderDeliveryItems);
		}
		return orderHistoryDataCollection;
	}

	/**
	 * SCPI Code For RFC
	 * @param zOrderHistoryResponse
	 * @return
	 */
	public BHGEOrderHistoryCollectionData processFastOrderResponseSCPI(final ZOrderHistoryResponse zOrderHistoryResponse, final String soldTo) {
		LOG.info("Inside processFastOrderResponseSCPI soldTo {} of Response: {}" ,soldTo, SCPIConnector.toXML(zOrderHistoryResponse));
		return processFastOrderHistoryDataSCPI(zOrderHistoryResponse, soldTo);
	}

	private BHGEOrderHistoryCollectionData processFastOrderHistoryDataSCPI(final ZOrderHistoryResponse zOrderHistoryResponse, final String soldTo) {
		LOG.info("Inside processFastOrderHistoryDataSCPI-{}", soldTo);
		final BHGEOrderHistoryCollectionData orderHistoryDataCollection = new BHGEOrderHistoryCollectionData();
		final Map<String, BHGEOrderHistoryData> orderHeaders = prepareFastOrderHistoryHeaderDataSCPI(zOrderHistoryResponse,soldTo);
		final Map<String, Set<OrderHistoryViewData>> orderItems = prepareFastOrderHistoryItemDataSCPI(zOrderHistoryResponse, orderHeaders);
		final Map<String, Set<OrderHistoryDeliveryData>> orderDeliveryItems = prepareOrderHistoryDeliveryLineItemDataSCPI(zOrderHistoryResponse,
				orderItems);

		if (null != orderItems && orderItems.size() > 0)
		{
			buildOrderHierarchy(orderHeaders, orderItems, orderDeliveryItems);
            orderHistoryDataCollection.setBhgeOrderHistoryHeaderData(orderHeaders);
            orderHistoryDataCollection.setBhgeOrderHistoryItemData(orderItems);
            orderHistoryDataCollection.setBhgeOrderHistoryDeliveryData(orderDeliveryItems);
		}
		return orderHistoryDataCollection;
	}

	//Fast Order
	//Fast Order Now
	private Map<String, BHGEOrderHistoryData> prepareFastOrderHistoryHeaderData(final JCoFunction function)
	{

		final Map<String, BHGEOrderHistoryData> orderHeaderItems = new HashMap<String, BHGEOrderHistoryData>();
		final JCoTable orderHeaderTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_MT_SALES_ORDER_HEADER);
		final int orderHeaderCount = orderHeaderTable.getNumRows();

		if (orderHeaderCount > 0)
		{
			for (int i = 0; i < orderHeaderCount; i++)
			{
				final String orderNo = orderHeaderTable.getString(BhgeCoreConstants.GE_SALES_ORDER);
				final String errorCode = orderHeaderTable.getString(BhgeCoreConstants.ERROR);
				// If ERROR tag has value as S0 means, then the order has been
				// successfully fetched from SAP. So, lets process it
				final SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd");
				final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");
				if (StringUtils.isNotBlank(errorCode) && ERROR_CODE.equals(errorCode.trim()) && StringUtils.isNotBlank(orderNo))
				{
					final BHGEOrderHistoryData orderData = new BHGEOrderHistoryData();
					orderData.setCode(orderNo.trim());
					orderData.setPurchaseOrderNumber(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.ITEM_CUSTOMER_PO)));
					orderData.setSoldTo(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SOLD_TO)));
					orderData.setPlaced(getDate(orderHeaderTable.getString(BhgeCoreConstants.DATE_ORDER_PLACED)));
					orderData.setPurchaseOrderDate(getDate(orderHeaderTable.getString(BhgeCoreConstants.PO_DATE)));
					orderData.setOrderType(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.F_AUART)));
					//orderData.setLastUpdated(getDate(orderHeaderTable.getString(BhgeCoreConstants.ORDER_UPDATED_DATE)));


					// Adding Sales Area related information to Order item from
					// RFC response
					orderData.setSalesRegion(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.VKORG)));
					orderData.setDistributionChannel(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.VTWEG)));
					orderData.setDivision(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SPART)));

					orderData

							.setHeaderShippingMethod(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SHIPPING_METHOD)));

					// details for order tracking
					orderData.setIncoterm(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.INCOTERM)));
					orderData.setSalesArea(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SALES_AREA)));
					orderData.setBlkText(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.BLK_TXT)));
					orderData.setBkID(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.BLK_ID)));
					// final String blkId =
					// addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.BLK_ID));
					if(StringUtils.isNotEmpty(orderHeaderTable.getString(BhgeCoreConstants.BLK_ID))){
						orderData.setOrderStatus("Blocked");
						LOG.info("Order data status set blocked");
					}else {
						orderData.setOrderStatus(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.ORDER_STAT)));
					}
					orderData.setPaymentTerm(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.ZTERM)));
					orderData.setCreatedBy(getCreatedBy(orderNo.trim()));

					if (orderData.getBlkText() != null)
					{
						orderData.setActionText("ACTION : " + orderData.getBlkText());
					}
					orderData.setLastUpdated(getDate(orderHeaderTable.getString(BhgeCoreConstants.ORDER_UPDATED_DATE)));
					if (orderData.getLastUpdated() != null)
					{
						orderData.setLastUpdatedDate(getDateValue(orderData.getLastUpdated()));
					}
					if (orderData.getPlaced() != null)
					{
						orderData.setOrderDate(getDateValue(orderData.getPlaced()));
					}
					if (orderData.getPurchaseOrderDate() != null)
					{
						orderData.setPoDate(getDateValue(orderData.getPurchaseOrderDate()));
					}
					orderHeaderItems.put(orderNo.trim(), orderData);
				}
				else if (StringUtils.isNotBlank(errorCode) && !ERROR_CODE.equals(errorCode.trim()))
				{
					// FIXME Add error scenarios here
					// DCJXH-821 implement the logic if record from JCO is empty
					// , then show no order available
					if (orderHeaderCount == 1
							&& StringUtils.trimToEmpty(orderHeaderTable.getString(BhgeCoreConstants.GE_SALES_ORDER)).isEmpty())
					{
						final BHGEOrderHistoryData orderData = new BHGEOrderHistoryData();
						orderData.setCode(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR);
						orderHeaderItems.put(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR, orderData);
					}
				}
				orderHeaderTable.nextRow();
			}
			return orderHeaderItems;
		}
		return null;
	}
	//Fast order Now
	private Map<String, Set<OrderHistoryViewData>> prepareFastOrderHistoryItemDataSCPI(final ZOrderHistoryResponse zOrderHistoryResponse,
			final Map<String, BHGEOrderHistoryData> orderHeaderItems)
	{
		final Map<String, Set<OrderHistoryViewData>> orderItems = new HashMap<String, Set<OrderHistoryViewData>>();
//		final JCoTable orderItemsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_MT_SALES_ORDER_ITEM);
		final List<ZOrderHistoryRequest$Item> orderItemsTable = null != zOrderHistoryResponse.getMt_SALES_ORDER_ITEM() && CollectionUtils.isNotEmpty(zOrderHistoryResponse.getMt_SALES_ORDER_ITEM().getItems())
						? zOrderHistoryResponse.getMt_SALES_ORDER_ITEM().getItems() : Collections.EMPTY_LIST;

//		final int orderItemsCount = orderItemsTable.getNumRows();
		final int orderItemsCount = !CollectionUtils.isEmpty(orderItemsTable) ? orderItemsTable.size() : 0;

		if (orderItemsCount > 0)
		{
			for (int i = 0; i < orderItemsCount; i++)
			{
//				String orderNo = orderItemsTable.getString(BhgeCoreConstants.VBELN);
				String orderNo = orderItemsTable.get(i).getVbeln();
				if (StringUtils.isNotEmpty(orderNo) && StringUtils.isNotBlank(orderNo))
				{
					orderNo = orderNo.trim();
					//TODO
					final OrderHistoryViewData itemData = createFastOrderItemSCPI(orderItemsTable.get(i), orderHeaderItems);
					if (null != itemData)
					{
						// If orderNo already exists in Map then add item to it
						// or else add the key to the Map
						final Set<OrderHistoryViewData> viewItemsData = orderItems.get(orderNo);
						if (null != viewItemsData)
						{
							viewItemsData.add(itemData);
							orderItems.put(orderNo, viewItemsData);
						}
						else
						{
							final Set<OrderHistoryViewData> itemsForOrder = new HashSet<OrderHistoryViewData>();
							itemsForOrder.add(itemData);
							orderItems.put(orderNo, itemsForOrder);
						}
					}
				}
//				orderItemsTable.nextRow();
			}
			return orderItems;
		}
		else
		{
			final Set<OrderHistoryViewData> orderHistoryViewDataError = new HashSet<>(1);
			final OrderHistoryViewData orderHistoryViewData = new OrderHistoryViewData();
			orderHistoryViewData.setOrderNum(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR);
			orderHistoryViewDataError.add(orderHistoryViewData);
			orderItems.put(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR, orderHistoryViewDataError);
			final Map<String, Set<OrderHistoryViewData>> orderHistoryViewDataErrorMap = new HashMap<>();
			orderHistoryViewDataErrorMap.put(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR, orderHistoryViewDataError);
			return orderHistoryViewDataErrorMap;
		}
	}

	//Fast Order Now
	private Map<String, BHGEOrderHistoryData> prepareFastOrderHistoryHeaderDataSCPI(final ZOrderHistoryResponse zOrderHistoryResponse,final String soldTo)
	{

		final Map<String, BHGEOrderHistoryData> orderHeaderItems = new HashMap<String, BHGEOrderHistoryData>();
//		final JCoTable orderHeaderTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_MT_SALES_ORDER_HEADER);
		final List<ZOrderHistoryRequest$Item> orderHeaderTable = null != zOrderHistoryResponse.getMt_SALES_ORDER_HEADER() && CollectionUtils.isNotEmpty(zOrderHistoryResponse.getMt_SALES_ORDER_HEADER().getItems())
						? zOrderHistoryResponse.getMt_SALES_ORDER_HEADER().getItems() : Collections.EMPTY_LIST;
//		final int orderHeaderCount = orderHeaderTable.getNumRows();
		final int orderHeaderCount = orderHeaderTable.size();
		try
		{
			getSearchRestrictionService().disableSearchRestrictions();
		if (orderHeaderCount > 0)
		{
			for (int i = 0; i < orderHeaderCount; i++)
			{
//				final String orderNo = orderHeaderTable.getString(BhgeCoreConstants.GE_SALES_ORDER);
//				final String errorCode = orderHeaderTable.getString(BhgeCoreConstants.ERROR);
				final String orderNo = orderHeaderTable.get(i).getGe_sales_order();
				final String errorCode = orderHeaderTable.get(i).getError();
				// If ERROR tag has value as S0 means, then the order has been
				// successfully fetched from SAP. So, lets process it
				final SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd");
				final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");

				if (StringUtils.isNotBlank(errorCode) && ERROR_CODE.equals(errorCode.trim()) && StringUtils.isNotBlank(orderNo))
				{
					final BHGEOrderHistoryData orderData = new BHGEOrderHistoryData();
					orderData.setCode(orderNo.trim());
//					orderData.setPurchaseOrderNumber(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.ITEM_CUSTOMER_PO)));
//					orderData.setSoldTo(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SOLD_TO)));
//					orderData.setPlaced(getDate(orderHeaderTable.getString(BhgeCoreConstants.DATE_ORDER_PLACED)));
//					orderData.setPurchaseOrderDate(getDate(orderHeaderTable.getString(BhgeCoreConstants.PO_DATE)));
//					orderData.setOrderType(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.F_AUART)));

					orderData.setPurchaseOrderNumber(addFieldToOrderItem(orderHeaderTable.get(i).getCustomer_po()));
					orderData.setSoldTo(addFieldToOrderItem(orderHeaderTable.get(i).getSold_to()));
					orderData.setPlaced(getDate(orderHeaderTable.get(i).getDate_order_placed()));
					orderData.setPurchaseOrderDate(getDate(orderHeaderTable.get(i).getPo_date()));
					orderData.setOrderType(addFieldToOrderItem(orderHeaderTable.get(i).getAuart()));


					//orderData.setLastUpdated(getDate(orderHeaderTable.getString(BhgeCoreConstants.ORDER_UPDATED_DATE)));


					// Adding Sales Area related information to Order item from
					// RFC response
//					orderData.setSalesRegion(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.VKORG)));
//					orderData.setDistributionChannel(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.VTWEG)));
//					orderData.setDivision(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SPART)));
//
//					orderData.setHeaderShippingMethod(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SHIPPING_METHOD)));


					orderData.setSalesRegion(addFieldToOrderItem(orderHeaderTable.get(i).getVkorg()));
					orderData.setDistributionChannel(addFieldToOrderItem(orderHeaderTable.get(i).getVtweg()));
					orderData.setDivision(addFieldToOrderItem(orderHeaderTable.get(i).getSpart()));

					orderData.setHeaderShippingMethod(addFieldToOrderItem(orderHeaderTable.get(i).getShipping_method()));
                    orderData.setCurrency(getCurrencyForCode(addFieldToOrderItem(orderHeaderTable.get(i).getCurrency())));
                    String totalPrice = addFieldToOrderItem(orderHeaderTable.get(i).getNet_price());
                    if(orderData.getCurrency().contains("JPY") && totalPrice != null && totalPrice.contains(".")){
                        totalPrice =totalPrice.substring(0,totalPrice.indexOf("."));
                        LOG.info("setting the totalprice removing decimals as currency is JPY"+totalPrice);
                    }
                    orderData.setTotalNetPrice(totalPrice);
					orderData.setHeaderShippingAddress(addFieldToOrderItem(orderHeaderTable.get(i).getShipping_address()));
					//String soldToAddress = fetchSoldToAddressFromOrder(addFieldToOrderItem(orderHeaderTable.get(i).getSold_to()));
					String soldToAddress = fetchSoldToAddressFromOrder(soldTo);
					orderData.setSoldToAddress(soldToAddress);
					boolean isCreditCardOrder = creditCardCheckForOrder(addFieldToOrderItem(orderHeaderTable.get(i).getZterm()));
					orderData.setIsCreditCardOrder(isCreditCardOrder);

//					// details for order tracking
//					orderData.setIncoterm(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.INCOTERM)));
//					orderData.setSalesArea(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SALES_AREA)));
//					orderData.setBlkText(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.BLK_TXT)));
//					orderData.setBkID(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.BLK_ID)));
//					// final String blkId =
//					// addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.BLK_ID));
//					orderData.setOrderStatus(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.ORDER_STAT)));
//					orderData.setPaymentTerm(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.ZTERM)));
//					orderData.setCreatedBy(getCreatedBy(orderNo.trim()));



					// details for order tracking
					//orderData.setIncoterm(addFieldToOrderItem(orderHeaderTable.get(i).getIncoterm()));
					orderData.setSalesArea(addFieldToOrderItem(orderHeaderTable.get(i).getSales_area()));
					orderData.setBlkText(addFieldToOrderItem(orderHeaderTable.get(i).getBlk_txt()));
					orderData.setBkID(addFieldToOrderItem(orderHeaderTable.get(i).getBlk_id()));
					// final String blkId =
					// addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.BLK_ID));
					if(StringUtils.isNotEmpty(orderHeaderTable.get(i).getBlk_id())){
						orderData.setOrderStatus("Blocked");
						LOG.info("Order data status set blocked SCPI");
					}else {
						orderData.setOrderStatus(addFieldToOrderItem(orderHeaderTable.get(i).getOrder_stat()));
					}
						//orderData.setOrderStatus(addFieldToOrderItem(orderHeaderTable.get(i).getOrder_stat()));
					orderData.setPaymentTerm(addFieldToOrderItem(orderHeaderTable.get(i).getZterm()));
					orderData.setCreatedBy(getCreatedBy(orderNo.trim()));


					if (orderData.getBlkText() != null)
					{
						orderData.setActionText("ACTION : " + orderData.getBlkText());
					}
//					orderData.setLastUpdated(getDate(orderHeaderTable.getString(BhgeCoreConstants.ORDER_UPDATED_DATE)));
					orderData.setLastUpdated(getDate(orderHeaderTable.get(i).getOrder_updated_date()));
					if (orderData.getLastUpdated() != null)
					{
						orderData.setLastUpdatedDate(getDateValue(orderData.getLastUpdated()));
					}
					if (orderData.getPlaced() != null)
					{
						orderData.setOrderDate(getDateValue(orderData.getPlaced()));
					}
					if (orderData.getPurchaseOrderDate() != null)
					{
						orderData.setPoDate(getDateValue(orderData.getPurchaseOrderDate()));
					}

					//US-465623 ADDING NEW ATTRIBUTES
					orderData.setAuthAmt(addFieldToOrderItem(orderHeaderTable.get(i).getAuthAmount()));
					orderData.setAuthDate(addFieldToOrderItem(orderHeaderTable.get(i).getAuthDate()));
					orderData.setSettlAmt(addFieldToOrderItem(orderHeaderTable.get(i).getSettlAmount()));
					orderData.setSettlDate(addFieldToOrderItem(orderHeaderTable.get(i).getSettlDate()));
					orderData.setSettlStat(addFieldToOrderItem(orderHeaderTable.get(i).getSettlStat()));
					orderData.setIncoterm(addFieldToOrderItem(orderHeaderTable.get(i).getIncoterm()));
					orderData.setNotificationDate(addFieldToOrderItem(orderHeaderTable.get(i).getNOTIF_PROM_DT()));
					orderData.setOldAuthAmt(addFieldToOrderItem(orderHeaderTable.get(i).getOLD_AUTH_AMT()));
					orderData.setOldAuthDate(addFieldToOrderItem(orderHeaderTable.get(i).getOLD_AUTH_DATE()));
					orderData.setNotifAuthAmt(addFieldToOrderItem(orderHeaderTable.get(i).getNOTIF_AUTH_AMT()));
					orderData.setPlanSettleDate(addFieldToOrderItem(orderHeaderTable.get(i).getPLAN_SETTL_DATE()));
					orderData.setNotifNetPrice(addFieldToOrderItem(orderHeaderTable.get(i).getNOTIF_NET_PRICE()));
					LOG.info("Order Headers in DefaultBHGEOrderHistoryService added successfully!");
					orderHeaderItems.put(orderNo.trim(), orderData);
				}
				else if (StringUtils.isNotBlank(errorCode) && !ERROR_CODE.equals(errorCode.trim()))
				{
					// FIXME Add error scenarios here
					// DCJXH-821 implement the logic if record from JCO is empty
					// , then show no order available
//					if (orderHeaderCount == 1
//							&& StringUtils.trimToEmpty(orderHeaderTable.getString(BhgeCoreConstants.GE_SALES_ORDER)).isEmpty())

					if (orderHeaderCount == 1
							&& StringUtils.trimToEmpty(orderHeaderTable.get(i).getGe_sales_order()).isEmpty())
					{
						final BHGEOrderHistoryData orderData = new BHGEOrderHistoryData();
						orderData.setCode(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR);
						orderHeaderItems.put(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR, orderData);
					}
				}
//				orderHeaderTable.nextRow();
			}
				return orderHeaderItems;
			}
		} 
		finally 
		{
			getSearchRestrictionService().enableSearchRestrictions();
		}
		return null;
	}

	//Fast order Now
	private Map<String, Set<OrderHistoryViewData>> prepareFastOrderHistoryItemData(final JCoFunction function,
																				   final Map<String, BHGEOrderHistoryData> orderHeaderItems)
	{
		final Map<String, Set<OrderHistoryViewData>> orderItems = new HashMap<String, Set<OrderHistoryViewData>>();
		final JCoTable orderItemsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_MT_SALES_ORDER_ITEM);
		final int orderItemsCount = orderItemsTable.getNumRows();
		if (orderItemsCount > 0)
		{
			for (int i = 0; i < orderItemsCount; i++)
			{
				String orderNo = orderItemsTable.getString(BhgeCoreConstants.VBELN);
				if (StringUtils.isNotEmpty(orderNo) && StringUtils.isNotBlank(orderNo))
				{
					orderNo = orderNo.trim();
					final OrderHistoryViewData itemData = createFastOrderItem(orderItemsTable, orderHeaderItems);
					if (null != itemData)
					{
						// If orderNo already exists in Map then add item to it
						// or else add the key to the Map
						final Set<OrderHistoryViewData> viewItemsData = orderItems.get(orderNo);
						if (null != viewItemsData)
						{
							viewItemsData.add(itemData);
							orderItems.put(orderNo, viewItemsData);
						}
						else
						{
							final Set<OrderHistoryViewData> itemsForOrder = new HashSet<OrderHistoryViewData>();
							itemsForOrder.add(itemData);
							orderItems.put(orderNo, itemsForOrder);
						}
					}
				}
				orderItemsTable.nextRow();
			}
			return orderItems;
		}
		else
		{
			final Set<OrderHistoryViewData> orderHistoryViewDataError = new HashSet<>(1);
			final OrderHistoryViewData orderHistoryViewData = new OrderHistoryViewData();
			orderHistoryViewData.setOrderNum(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR);
			orderHistoryViewDataError.add(orderHistoryViewData);
			orderItems.put(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR, orderHistoryViewDataError);
			final Map<String, Set<OrderHistoryViewData>> orderHistoryViewDataErrorMap = new HashMap<>();
			orderHistoryViewDataErrorMap.put(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR, orderHistoryViewDataError);
			return orderHistoryViewDataErrorMap;
		}
	}




	//Fast Order Now
	private OrderHistoryViewData createFastOrderItem(final JCoTable orderItemsTable,
			final Map<String, BHGEOrderHistoryData> orderHeaders)
	{
		if (null != orderHeaders && orderHeaders.size() > 0)
		{
			final SimpleDateFormat inputFormat = new SimpleDateFormat("dd.MMM.yyyy");
			final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");
			final OrderHistoryViewData itemData = new OrderHistoryViewData();
			final String orderNo = orderItemsTable.getString(BhgeCoreConstants.VBELN);
			if (StringUtils.isNotEmpty(orderNo) && StringUtils.isNotBlank(orderNo))
			{
				final BHGEOrderHistoryData orderData = orderHeaders.get(orderNo.trim());
				if (null != orderData)
				{
					itemData.setOrderNum(orderNo.trim());
					itemData.setCustomerPO(addFieldToOrderItem(orderData.getPurchaseOrderNumber()));
					itemData.setSoldToName(addFieldToOrderItem(orderData.getSoldTo()));
					itemData.setLineNumber(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.ITEM_NO)));
					itemData.setProductHeirarchy(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.PROD_HEIRARCHY)));
					itemData.setPartNumber(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.MAT_NO)));
					itemData.setDescription(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.MAT_DESC)));
					itemData.setQty(getQtyValue(orderItemsTable.getString(BhgeCoreConstants.QUAN)));
					if(StringUtils.equalsIgnoreCase(orderData.getOrderStatus(),"Blocked")){
						itemData.setStatus("Blocked");
						LOG.info("Line item status set blocked");
					}else {
						itemData.setStatus(
								addFieldToOrderItem(getShipStatus(orderItemsTable.getString(BhgeCoreConstants.SHIP_STATUS))));
					}
					itemData.setShipDate(
							getDateValue(orderItemsTable.getString(BhgeCoreConstants.SHIP_DATE), inputFormat, outputFormat));
					itemData.setOrderDate(getDateValue(orderData.getPlaced()));
					itemData.setShipTo(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.SHIPPING_DESTINATION)));
					itemData.setTrackingNumber(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.TRACKING_NO)));
					itemData.setInvoices(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.CUSTOMER_INVOICE)));

					itemData.setShippingMethod(orderData.getHeaderShippingMethod());
					itemData.setRequestedShipDate(getDateValue(orderData.getHeaderRequestedShipDate()));
					itemData.setShippingAddress(orderData.getHeaderShippingAddress());
                    itemData.setCurrency(
                            getCurrencyForCode(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.CURRENCY_DATA))));
					itemData.setTotNetPrice(orderData.getTotalNetPrice());
                    String netPrice =addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.NET_PRICE));
                    if(itemData.getCurrency().contains("JPY") && null != netPrice && netPrice.contains(".")){
                        netPrice= netPrice.substring(0,netPrice.indexOf("."));
                    }
					itemData.setNetPrice(netPrice);
					itemData.setUom(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.UOM_FIELD)));
					//itemData.setCreatedBy(getCreatedBy(orderNo.trim()));

					// Adding Courier name to item

					final String courier = getCourierNameForCode(
							addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.COURIER)));

					itemData.setCourier(courier);

					// Adding Tracking URL to item
					final String url = getTrackingUrlForItem(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.COURIER)),
							addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.TRACKING_NO)));
					itemData.setUrl(url);

					// Adding fields for order Tracking

					itemData.setReqShipDate(
							getDateValue(orderItemsTable.getString(BhgeCoreConstants.REQ_SHP_DT), inputFormat, outputFormat));
					itemData.setActShpDate(
							getDateValue(orderItemsTable.getString(BhgeCoreConstants.ACT_SHP_DT), inputFormat, outputFormat));
					/*
					 * itemData.setGeFromDate( getDateValue(orderItemsTable.getString(BhgeCoreConstants.GE_PROM_DT),
					 * inputFormat, outputFormat));
					 */
					final String date = orderItemsTable.getString(BhgeCoreConstants.GE_PROM_DT);
					if (date != null && date.equalsIgnoreCase("Contact CSR"))
					{
						itemData.setGeFromDate(date);

					}
					else
					{
						itemData.setGeFromDate(getDateValue(date, inputFormat, outputFormat));
					}
					return itemData;
				}
			}
		}
		return null;
	}

	//Fast Order Now
	private OrderHistoryViewData createFastOrderItemSCPI(final ZOrderHistoryRequest$Item orderItemsTable,
														 final Map<String, BHGEOrderHistoryData> orderHeaders)
	{
		if (null != orderHeaders && orderHeaders.size() > 0)
		{
			final SimpleDateFormat inputFormat = new SimpleDateFormat("dd.MMM.yyyy");
			final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");
			final OrderHistoryViewData itemData = new OrderHistoryViewData();
//			final String orderNo = orderItemsTable.getString(BhgeCoreConstants.VBELN);
			final String orderNo = orderItemsTable.getVbeln();
			if (StringUtils.isNotEmpty(orderNo) && StringUtils.isNotBlank(orderNo))
			{
				final BHGEOrderHistoryData orderData = orderHeaders.get(orderNo.trim());
				if (null != orderData)
				{
					itemData.setOrderNum(orderNo.trim());
					itemData.setCustomerPO(addFieldToOrderItem(orderData.getPurchaseOrderNumber()));
					itemData.setSoldToName(addFieldToOrderItem(orderData.getSoldTo()));
//					itemData.setLineNumber(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.ITEM_NO)));
					itemData.setLineNumber(addFieldToOrderItem(orderItemsTable.getItem_no()));
//					itemData.setProductHeirarchy(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.PROD_HEIRARCHY)));
					itemData.setProductHeirarchy(addFieldToOrderItem(orderItemsTable.getProd_h()));
//					itemData.setPartNumber(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.MAT_NO)));
					itemData.setPartNumber(addFieldToOrderItem(orderItemsTable.getMat_no()));

//					itemData.setDescription(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.MAT_DESC)));
					itemData.setDescription(addFieldToOrderItem(orderItemsTable.getMat_desc()));
//					itemData.setQty(getQtyValue(orderItemsTable.getString(BhgeCoreConstants.QUAN)));
					itemData.setQty(getQtyValue(orderItemsTable.getQuan()));
//					itemData.setStatus(
//							addFieldToOrderItem(getShipStatus(orderItemsTable.getString(BhgeCoreConstants.SHIP_STATUS))));
					if(StringUtils.equalsIgnoreCase(orderData.getOrderStatus(),"Blocked")){
						itemData.setStatus("Blocked");
						LOG.info("Line item status set blocked SCPI");
					} else {
						itemData.setStatus(
								addFieldToOrderItem(getShipStatus(orderItemsTable.getShip_status())));
					}
					itemData.setShipDate(
//							getDateValue(orderItemsTable.getString(BhgeCoreConstants.SHIP_DATE), inputFormat, outputFormat));
							getDateValue(orderItemsTable.getExp_ship_date(), inputFormat, outputFormat));
					itemData.setOrderDate(getDateValue(orderData.getPlaced()));
//					itemData.setShipTo(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.SHIPPING_DESTINATION)));
					itemData.setShipTo(addFieldToOrderItem(orderItemsTable.getShipping_destination()));
//					itemData.setTrackingNumber(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.TRACKING_NO)));
					itemData.setTrackingNumber(addFieldToOrderItem(orderItemsTable.getTracking_no()));
//					itemData.setInvoices(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.CUSTOMER_INVOICE)));
					itemData.setInvoices(addFieldToOrderItem(orderItemsTable.getCustomer_invoice()));

					itemData.setShippingMethod(orderData.getHeaderShippingMethod());
					itemData.setRequestedShipDate(getDateValue(orderData.getHeaderRequestedShipDate()));
					itemData.setShippingAddress(orderData.getHeaderShippingAddress());
					itemData.setTotNetPrice(orderData.getTotalNetPrice());
                    itemData.setCurrency(
                            getCurrencyForCode(addFieldToOrderItem(orderItemsTable.getCurrency())));
//					itemData.setNetPrice(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.NET_PRICE)));
                    String netPrice =addFieldToOrderItem(orderItemsTable.getNet_price());
                    if(itemData.getCurrency().contains("JPY") && null != netPrice && netPrice.contains(".")){
                        netPrice= netPrice.substring(0,netPrice.indexOf("."));
                    }
                    itemData.setNetPrice(netPrice);
//					itemData.setCurrency(
//							getCurrencyForCode(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.CURRENCY_DATA))));

//					itemData.setUom(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.UOM_FIELD)));
					itemData.setUom(addFieldToOrderItem(orderItemsTable.getUom()));
					//itemData.setCreatedBy(getCreatedBy(orderNo.trim()));

					// Adding Courier name to item
//
//					final String courier = getCourierNameForCode(
//							addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.COURIER)));
					final String courier = getCourierNameForCode(
							addFieldToOrderItem(orderItemsTable.getCourier()));
					itemData.setCourier(courier);

					// Adding Tracking URL to item
//					final String url = getTrackingUrlForItem(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.COURIER)),
//							addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.TRACKING_NO)));

					final String url = getTrackingUrlForItem(addFieldToOrderItem(orderItemsTable.getCourier()),
							addFieldToOrderItem(orderItemsTable.getTracking_no()));
					itemData.setUrl(url);

					// Adding fields for order Tracking

//					itemData.setReqShipDate(
//							getDateValue(orderItemsTable.getString(BhgeCoreConstants.REQ_SHP_DT), inputFormat, outputFormat));
//					itemData.setActShpDate(
//							getDateValue(orderItemsTable.getString(BhgeCoreConstants.ACT_SHP_DT), inputFormat, outputFormat));
					itemData.setReqShipDate(
							getDateValue(orderItemsTable.getReq_shp_dt(), inputFormat, outputFormat));
					itemData.setActShpDate(
							getDateValue(orderItemsTable.getAct_shp_dt(), inputFormat, outputFormat));
					itemData.setLastFormDate(getDateValue(orderItemsTable.getLAST_PROM_DT(), inputFormat, outputFormat));
					itemData.setOldNetPrice(getDateValue(orderItemsTable.getOLD_NET_PRICE(), inputFormat, outputFormat));
					LOG.info("Fully configure number from SAP Response : " + orderItemsTable.getZzmatcfg());
					itemData.setVcFullyConfigurepartNumber(orderItemsTable.getZzmatcfg());

					/*
					 * itemData.setGeFromDate( getDateValue(orderItemsTable.getString(BhgeCoreConstants.GE_PROM_DT),
					 * inputFormat, outputFormat));
					 */
//					final String date = orderItemsTable.getString(BhgeCoreConstants.GE_PROM_DT);
					final String date = orderItemsTable.getGe_prom_dt();
					if (date != null && date.equalsIgnoreCase("Contact CSR"))
					{
						itemData.setGeFromDate(date);

					}
					else
					{
						itemData.setGeFromDate(getDateValue(date, inputFormat, outputFormat));
					}
					return itemData;
				}
			}
		}
		return null;
	}

	//Fast Order // Full Data
	private BHGEOrderHistoryCollectionData processOrderHistoryData(final JCoFunction function)
	{
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        final B2BUnitModel defaultB2bUnit = currentUser.getDefaultB2BUnit();
        final String productLine = currentUser.getProductLineMap().get(defaultB2bUnit.getUid());
		LOG.info("processOrderHistoryData Product Line from user -{} ",productLine);
		final BHGEOrderHistoryCollectionData orderHistoryDataCollection = new BHGEOrderHistoryCollectionData();
		final Map<String, BHGEOrderHistoryData> orderHeaders = prepareOrderHistoryHeaderData(function);
		final Map<String, Set<OrderHistoryViewData>> orderItems = prepareOrderHistoryItemData(function, orderHeaders);
		final Map<String, Set<OrderHistoryDeliveryData>> orderDeliveryItems = prepareOrderHistoryDeliveryLineItemData(function,
				orderItems);
		if (orderDeliveryItems != null && orderDeliveryItems.size() > 0)
		{
			//LOG.info("Delivery Line Count - " + orderDeliveryItems.size());
		}
		else
		{
			//LOG.info("Delivery Line ZERO - " + orderDeliveryItems);
		}
		if (null != orderItems && orderItems.size() > 0)
		{
			buildOrderHierarchy(orderHeaders, orderItems, orderDeliveryItems);
            Map<String, BHGEOrderHistoryData> filteredOrderHeaders = new HashMap<>();
            Map<String, Set<OrderHistoryViewData>> filteredOrderItems = new HashMap<>();
            Map<String, Set<OrderHistoryDeliveryData>> filteredDeliveryItems = new HashMap<>();
            if(null !=orderHeaders && orderHeaders.size() > 0) {
				Boolean isWrongProductline= Boolean.TRUE;
				Boolean isWrongStore= Boolean.TRUE;
                for (BHGEOrderHistoryData header : orderHeaders.values()) {
                    String headerProductLine = header.getProductLine();
					final String[] availList = header.getSoldTo().split(org.apache.commons.lang3.StringUtils.SPACE);
					String headerCustomerNumber = AddPrecedingZeroes(availList[availList.length - 1]);
					LOG.info("DefaultBHGEOrderHistoryService headerCustomerNumber {} and headerProductLine {} " ,headerCustomerNumber, headerProductLine);
                    if (headerProductLine == null ||
                            !StringUtils.containsIgnoreCase(headerProductLine, productLine)) {
                        continue;
                    }
                    String orderCode = header.getCode();
                    filteredOrderHeaders.put(orderCode, header);
                    if(null != orderItems && !orderItems.isEmpty()) {
                        Set<OrderHistoryViewData> items = orderItems.get(orderCode);
                        if (items != null && !items.isEmpty()) {
                            filteredOrderItems.put(orderCode, items);
                        }
                    }
                    if (null != orderDeliveryItems && !orderDeliveryItems.isEmpty()) {
                        Set<OrderHistoryDeliveryData> deliveries = orderDeliveryItems.get(orderCode);
                        if (deliveries != null && !deliveries.isEmpty()) {
                            filteredDeliveryItems.put(orderCode, deliveries);
                        }
                    }
                }
            }
            orderHistoryDataCollection.setBhgeOrderHistoryHeaderData(filteredOrderHeaders);
            orderHistoryDataCollection.setBhgeOrderHistoryItemData(filteredOrderItems);
            orderHistoryDataCollection.setBhgeOrderHistoryDeliveryData(filteredDeliveryItems);
            }
		return orderHistoryDataCollection;
	}

	private String AddPrecedingZeroes(String s) {
		StringBuilder sb = new StringBuilder();
		int count = 10 - s.length();
		for (int i = 0; i < count; i++) {
			sb.append('0');
		}
		sb.append(s);
		return sb.toString();
	}


	//Fast Order // Full Data
	private BHGEOrderHistoryCollectionData processOrderHistoryDataSCPI(final ZOrderHistoryResponse function, final String soldTo)
	{
		LOG.info("DefaultBHGEOrderHistoryService processOrderHistoryDataSCPI function " + function);
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        final B2BUnitModel defaultB2bUnit = currentUser.getDefaultB2BUnit();
        final String productLine = currentUser.getProductLineMap().get(defaultB2bUnit.getUid());
		LOG.info("DefaultBHGEOrderHistoryService processOrderHistoryDataSCPI productLine {}",productLine);
        Boolean isInternalUser = currentUser.getIsInternalUser();
		LOG.debug("DefaultBHGEOrderHistoryService processOrderHistoryDataSCPI isInternalUser " + isInternalUser);
		final BHGEOrderHistoryCollectionData orderHistoryDataCollection = new BHGEOrderHistoryCollectionData();
		final Map<String, BHGEOrderHistoryData> orderHeaders = prepareFastOrderHistoryHeaderDataSCPI(function,soldTo);
		LOG.info("DefaultBHGEOrderHistoryService processOrderHistoryDataSCPI orderHeaders " );
		final Map<String, Set<OrderHistoryViewData>> orderItems = prepareFastOrderHistoryItemDataSCPI(function, orderHeaders);
		LOG.info("DefaultBHGEOrderHistoryService processOrderHistoryDataSCPI orderItems");
		final Map<String, Set<OrderHistoryDeliveryData>> orderDeliveryItems = prepareOrderHistoryDeliveryLineItemDataSCPI(function,
				orderItems);
		LOG.info("Inside the ProcessOrderHistoryDataSCPI method of DefaultBHGEOrderHistoryService");
		Boolean isWrongProductline = Boolean.TRUE;
		Boolean isWrongCustomer = Boolean.TRUE;

		if (orderDeliveryItems != null && orderDeliveryItems.size() > 0)
		{
			//LOG.info("Delivery Line Count - " + orderDeliveryItems.size());
		}
		else
		{
			//LOG.info("Delivery Line ZERO - " + orderDeliveryItems);
		}

		if (null != orderItems && orderItems.size() > 0)
		{
			LOG.info("DefaultBHGEOrderHistoryService processOrderHistoryDataSCPI before buildOrderHierarchy orderItems " + orderItems.size() );
			buildOrderHierarchy(orderHeaders, orderItems, orderDeliveryItems);
            Map<String, BHGEOrderHistoryData> filteredOrderHeaders = new HashMap<>();
            Map<String, Set<OrderHistoryViewData>> filteredOrderItems = new HashMap<>();
            Map<String, Set<OrderHistoryDeliveryData>> filteredDeliveryItems = new HashMap<>();

            if(null != orderHeaders && orderHeaders.size() > 0) {
				LOG.info("DefaultBHGEOrderHistoryService processOrderHistoryDataSCPI before filtering orderHeaders {}" , orderHeaders.size()  );
                for (BHGEOrderHistoryData header : orderHeaders.values()) {
                    String headerProductLine = header.getProductLine();
					final String[] availList = header.getSoldTo().split(org.apache.commons.lang3.StringUtils.SPACE);
					String customerNumberOfUser=defaultB2bUnit.getUid().split("_")[0];
					LOG.info("DefaultBHGEOrderHistoryService processOrderHistoryDataSCPI  customerNumberOfUser {}", customerNumberOfUser);
					String headerCustomerNumber = AddPrecedingZeroes(availList[availList.length - 1]);
					LOG.info("DefaultBHGEOrderHistoryService headerCustomerNumber {} and  headerProductLine {}",  headerCustomerNumber, headerProductLine);
                    if(!isInternalUser) {
                        if (headerCustomerNumber == null || !(StringUtils.equalsIgnoreCase(headerCustomerNumber, customerNumberOfUser))) {
                            LOG.info("DefaultBHGEOrderHistoryService headerCustomerNumber " + headerCustomerNumber + " headerProductLine " + headerProductLine + " is not matching with the logged in user store number " + customerNumberOfUser);
                            continue;
                        } else {
                            LOG.info("DefaultBHGEOrderHistoryService headerCustomerNumber " + headerCustomerNumber + " headerProductLine " + headerProductLine + " is  matching with the logged in user store number " + customerNumberOfUser);
                            isWrongCustomer = Boolean.FALSE;
                        }
                    }

					if(headerProductLine == null ||
                            !StringUtils.containsIgnoreCase(headerProductLine, productLine))  {
						LOG.info("DefaultBHGEOrderHistoryService headerCustomerNumber " + headerCustomerNumber + " headerProductLine " + headerProductLine + " is not matching with the logged in user product line " + productLine);
                        continue;
                    }
					else {
						LOG.info("DefaultBHGEOrderHistoryService headerCustomerNumber " + headerCustomerNumber + " headerProductLine " + headerProductLine + " is matching with the logged in user product line " + productLine);
						isWrongProductline = Boolean.FALSE;
					}

                    String orderCode = header.getCode();
                    filteredOrderHeaders.put(orderCode, header);
                    if (null != orderItems) {
                        Set<OrderHistoryViewData> items = orderItems.get(orderCode);
                        if (items != null && !items.isEmpty()) {
                            filteredOrderItems.put(orderCode, items);
                        }
                    }
                    if (orderDeliveryItems != null) {
                        Set<OrderHistoryDeliveryData> deliveries = orderDeliveryItems.get(orderCode);
                        if (deliveries != null && !deliveries.isEmpty()) {
                            filteredDeliveryItems.put(orderCode, deliveries);
                        }
                    }
                }
            }
			
            orderHistoryDataCollection.setBhgeOrderHistoryHeaderData(filteredOrderHeaders);
            orderHistoryDataCollection.setBhgeOrderHistoryItemData(filteredOrderItems);
            orderHistoryDataCollection.setBhgeOrderHistoryDeliveryData(filteredDeliveryItems);
        }
        if(isInternalUser){
            isWrongCustomer = Boolean.FALSE;
        }
		OrderErrorData orderErrorData = new OrderErrorData();
		orderErrorData.setWrongStore(isWrongProductline);
		orderErrorData.setWrongCustomer(isWrongCustomer);
		LOG.info("DefaultBHGEOrderHistoryService processOrderHistoryDataSCPI after buildOrderHierarchy orderHeaders  orderItems  isWrongProductline " + isWrongProductline + " isWrongCustomer " + isWrongCustomer);
		if(isWrongProductline)
		{
			orderErrorData.setWrongStore(true);
		}
		if(isWrongCustomer)
		{
			orderErrorData.setWrongCustomer(true);
		}
		orderHistoryDataCollection.setBhgeOrderError(orderErrorData);
		LOG.info("DefaultBHGEOrderHistoryService processOrderHistoryDataSCPI orderErrorData " + orderErrorData.getWrongCustomer() + " " + orderErrorData.getWrongStore());

		return orderHistoryDataCollection;
	}

    /**
     * @param orderHeaders
     * @param orderItems
     * @param orderDeliveryItems
     */
	private void buildOrderHierarchy(final Map<String, BHGEOrderHistoryData> orderHeaderList,
                                     final Map<String, Set<OrderHistoryViewData>> orderItemList,
                                     final Map<String, Set<OrderHistoryDeliveryData>> orderDeliveryItemList)
	{
		if (orderHeaderList != null && orderHeaderList.size() > 0)
		{
			BHGEOrderHistoryData orderDataEntry = null;
			for (final Map.Entry<String, BHGEOrderHistoryData> entry : orderHeaderList.entrySet())
			{
				orderDataEntry = entry.getValue();
				final ArrayList<OrderHistoryViewData> orderItems = new ArrayList<OrderHistoryViewData>();
				final Set<OrderHistoryViewData> itemData = orderItemList.get(orderDataEntry.getCode());
				if (null != itemData && itemData.size() > 0)
				{

					orderItems.addAll(itemData);
					Collections.sort(orderItems, new BHGEOrderLineItemComparator<OrderHistoryViewData>());
					populateOrderItems(orderItems);

					if (orderItems.size() > 0)
					{
						//LOG.debug("Inside1 Delivery Line Count " + orderDeliveryItemList.size() + " & Line Items - " + orderItems.size());

						boolean prodLineFound = false;
						for (final OrderHistoryViewData getLineItem : orderItems)
						{
							LOG.info("DefaultBHGEOrderHistoryService Inside  Setting the Productline order Number {}",orderDataEntry.getCode());
							LOG.info("DefaultBHGEOrderHistoryService Inside  Setting the Productline Product Heirarchy -{} ", getLineItem.getProductHeirarchy());
							LOG.info("DefaultBHGEOrderHistoryService Inside  Setting the Productline Product Number {}", getLineItem.getPartNumber());

							if (!prodLineFound)
							{
								//LOG.info("Inside1 Product Line Count 01 - " + getLineItem.getProductHeirarchy());
								final String productLineVal = defineProductLine(getLineItem.getProductHeirarchy());
								LOG.info("Inside1 Product Line  productLine coming from the Table ", productLineVal);
								if (StringUtils.isNotBlank(productLineVal))
								{
									prodLineFound = true;
									orderDataEntry.setProductLine(productLineVal);
									LOG.info("After setting the Product Line {}",orderDataEntry.getProductLine());
								}
								//LOG.info("Inside1 Product Line Count 03 - " + prodLineFound);
							}

							if (orderDeliveryItemList != null && orderDeliveryItemList.size() > 0)
							{
								//LOG.debug("Inside1 Delivery Line Key " + getLineItem.getOrderNum() + " & Line "+ getLineItem.getLineNumber());
								final Set<OrderHistoryDeliveryData> deliveryDataSet = orderDeliveryItemList
										.get(getLineItem.getOrderNum() + "#" + getLineItem.getLineNumber());
								if (deliveryDataSet != null && deliveryDataSet.size() > 0)
								{
									//LOG.debug("Inside1 Delivery Line Fetch - " + getLineItem.getOrderNum() + "#"+ getLineItem.getLineNumber() + " & Size - " + deliveryDataSet.size());
									final ArrayList<OrderHistoryDeliveryData> deliveryDataList = new ArrayList<OrderHistoryDeliveryData>(
											deliveryDataSet);
									Collections.sort(deliveryDataList, new BHGEOrderDeliveryComparator<OrderHistoryDeliveryData>());
									populateOrderDeliveries(deliveryDataList);
									getLineItem.setDeliveryLineItems(deliveryDataList);
								}
							}
						}
						LOG.info("DefaultBHGEOrderHistoryService  after setting the product line {} & Product Line -{} ", orderDataEntry.getCode(), orderDataEntry.getProductLine());
					}

				}
				orderDataEntry.setLineData(orderItems);
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

	/* Comparator to sort the result by Item Line Number */
	protected class BHGEOrderDeliveryComparator<T> implements java.util.Comparator<T>
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

	/* Comparator to sort the result by Item Line Number */
	protected class BHGEOrderLineItemComparator<T> implements java.util.Comparator<T>
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
				data.setLocalizedOrderDate(getLocalizedDate(data.getOrderDate()));
				LOG.debug("DefaultBHGEOrderHistoryService Inside  Setting the Order Date with localization as per the requirement - " + data.getLocalizedOrderDate());
				LOG.debug("DefaultBHGEOrderHistoryService Inside  Setting the Order Date without localization as per the requirement - " + data.getOrderDate());
				//removed localization as per the requirement
				data.setLocalizedOrderDate(data.getOrderDate());
				data.setOrderDate(getLocalizedDate(data.getOrderDate()));
				LOG.debug("DefaultBHGEOrderHistoryService Inside  Setting the Order Date after removing localization as per the requirement - " + data.getOrderDate());
			}
			if (StringUtils.isNotEmpty(data.getShipDate()))
			{
				data.setLocalizedShipDate(getLocalizedDate(data.getShipDate()));
			}
		}

	}

	/**
	 * @param orderDataEntry
	 */
	public String defineProductLine(final String productHeirarchy)
	{
		if (productHeirarchy != null)
		{
			String prodHierarchyCode = null;
			if (productHeirarchy.length() <= 5)
			{
				prodHierarchyCode = productHeirarchy;
			}
			else
			{
				prodHierarchyCode = productHeirarchy.substring(0, 5);
			}
			//LOG.info("Inside1 Product Line Count 01.1 - " + prodHierarchyCode);
			if (PRODUCTLINE_MAP == null)
			{
				LOG.info("Inside If PRODUCTLINE_MAP " + PRODUCTLINE_MAP);
				PRODUCTLINE_MAP = bhgeOrderHistoryDao.loadProductLine();
			}
			return PRODUCTLINE_MAP.get(prodHierarchyCode);
		}
		return null;
	}

	/**
	 * @param function
	 * @param orderHeaders
	 */
	private Map<String, Set<OrderHistoryDeliveryData>> prepareOrderHistoryDeliveryLineItemData(final JCoFunction function,
			final Map<String, Set<OrderHistoryViewData>> orderItems)
	{


		final Map<String, Set<OrderHistoryDeliveryData>> orderDeliveryItems = new HashMap<String, Set<OrderHistoryDeliveryData>>();
		final JCoTable deliveryTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_MT_SALES_ORDER_DELIVERY);
		final int orderDeliveryItemsCount = deliveryTable.getNumRows();
		//LOG.debug("orderDeliveryItemsCount for new details: " + orderDeliveryItemsCount);
		if (orderDeliveryItemsCount > 0)
		{
			for (int i = 0; i < orderDeliveryItemsCount; i++)
			{
				String orderNo = deliveryTable.getString("ORDER");
				String orderLineNumber = deliveryTable.getString("ORDER_LINE");
				//LOG.info("orderDeliveryItemsCount for new details: " + orderNo + " | " + orderLineNumber);
				if (StringUtils.isNotEmpty(orderNo) && StringUtils.isNotBlank(orderLineNumber))
				{
					orderNo = orderNo.trim();
					orderLineNumber = orderLineNumber.trim();
					final OrderHistoryDeliveryData deliveryData = createOrderDeliveryItem(deliveryTable, orderItems);
					if (null != deliveryData)
					{
						// If orderLineNumber already exists in Map then add item to it
						// or else add the key to the Map
						Set<OrderHistoryDeliveryData> deliveryDataList = orderDeliveryItems.get(orderNo + "#" + orderLineNumber);
						if (null != deliveryDataList)
						{
							deliveryDataList.add(deliveryData);
							orderDeliveryItems.put(orderNo + "#" + orderLineNumber, deliveryDataList);
						}
						else
						{
							deliveryDataList = new HashSet<OrderHistoryDeliveryData>();
							deliveryDataList.add(deliveryData);
							orderDeliveryItems.put(orderNo + "#" + orderLineNumber, deliveryDataList);
						}
						//LOG.info("Delivery Entry - " + orderNo + "#" + orderLineNumber + " & Size - " + deliveryDataList.size());
						//LOG.debug("Delivery Entry - " + orderNo + "#" + orderLineNumber + " & Size - " + deliveryDataList.size());
					}
				}
				deliveryTable.nextRow();
			}
			//LOG.info("orderDeliveryItems - " + orderDeliveryItems.size());
			return orderDeliveryItems;
		}

		else
		{

			return null;
		}
	}

	private Map<String, Set<OrderHistoryDeliveryData>> prepareOrderHistoryDeliveryLineItemDataSCPI(final ZOrderHistoryResponse zOrderHistoryResponse,
																							   final Map<String, Set<OrderHistoryViewData>> orderItems)
	{


		final Map<String, Set<OrderHistoryDeliveryData>> orderDeliveryItems = new HashMap<String, Set<OrderHistoryDeliveryData>>();
//		final JCoTable deliveryTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_MT_SALES_ORDER_DELIVERY);
		final List<ZOrderHistoryRequest$Item> deliveryTable =
				zOrderHistoryResponse.getMt_SALES_ORDER_DELIVERY() != null && CollectionUtils.isNotEmpty(zOrderHistoryResponse.getMt_SALES_ORDER_DELIVERY().getItems())
				? zOrderHistoryResponse.getMt_SALES_ORDER_DELIVERY().getItems() : Collections.EMPTY_LIST;
//		final int orderDeliveryItemsCount = deliveryTable.getNumRows();
		final int orderDeliveryItemsCount = deliveryTable.size();
		//LOG.debug("orderDeliveryItemsCount for new details: " + orderDeliveryItemsCount);
		if (orderDeliveryItemsCount > 0)
		{
			for (int i = 0; i < orderDeliveryItemsCount; i++)
			{
				String orderNo = deliveryTable.get(i).getOrder();
				String orderLineNumber = deliveryTable.get(i).getOrder_line();
				//LOG.info("orderDeliveryItemsCount for new details: " + orderNo + " | " + orderLineNumber);
				if (StringUtils.isNotEmpty(orderNo) && StringUtils.isNotBlank(orderLineNumber))
				{
					orderNo = orderNo.trim();
					orderLineNumber = orderLineNumber.trim();
//					final OrderHistoryDeliveryData deliveryData = createOrderDeliveryItem(deliveryTable.get(i), orderItems);
					final OrderHistoryDeliveryData deliveryData = createOrderDeliveryItemSCPI(deliveryTable.get(i), orderItems);
					if (null != deliveryData)
					{
						// If orderLineNumber already exists in Map then add item to it
						// or else add the key to the Map
						Set<OrderHistoryDeliveryData> deliveryDataList = orderDeliveryItems.get(orderNo + "#" + orderLineNumber);
						if (null != deliveryDataList)
						{
							deliveryDataList.add(deliveryData);
							orderDeliveryItems.put(orderNo + "#" + orderLineNumber, deliveryDataList);
						}
						else
						{
							deliveryDataList = new HashSet<OrderHistoryDeliveryData>();
							deliveryDataList.add(deliveryData);
							orderDeliveryItems.put(orderNo + "#" + orderLineNumber, deliveryDataList);
						}
						//LOG.info("Delivery Entry - " + orderNo + "#" + orderLineNumber + " & Size - " + deliveryDataList.size());
						//LOG.debug("Delivery Entry - " + orderNo + "#" + orderLineNumber + " & Size - " + deliveryDataList.size());
					}
				}
//				deliveryTable.nextRow();
			}
			//LOG.info("orderDeliveryItems - " + orderDeliveryItems.size());
			return orderDeliveryItems;
		}

		else
		{

			return null;
		}
	}


	/**
	 * @param orderItemsTable
	 * @param orderItems
	 * @return
	 */
	private OrderHistoryDeliveryData createOrderDeliveryItem(final JCoTable orderItemsTable,
			final Map<String, Set<OrderHistoryViewData>> orderItems)
	{
		if (null != orderItems && orderItems.size() > 0)
		{
			final SimpleDateFormat inputFormat = new SimpleDateFormat("dd.MMM.yyyy");
			final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");
			final OrderHistoryDeliveryData deliveryData = new OrderHistoryDeliveryData();
			final String orderNumber = orderItemsTable.getString("ORDER");
			final String orderLineNumber = orderItemsTable.getString("ORDER_LINE");
			if (StringUtils.isNotEmpty(orderNumber) && StringUtils.isNotBlank(orderNumber) && StringUtils.isNotEmpty(orderLineNumber)
					&& StringUtils.isNotBlank(orderLineNumber))
			{
				deliveryData.setOrderNum(orderNumber.trim());
				deliveryData.setLineNumber(orderLineNumber.trim());
				deliveryData.setDelivery(addFieldToOrderItem(orderItemsTable.getString("DELIVERY")));
				deliveryData.setDeliveryLine(addFieldToOrderItem(orderItemsTable.getString("DELIVERY_LINE")));
				deliveryData.setQuantity(addFieldToOrderItem(orderItemsTable.getString("QUAN")));
				deliveryData.setShipDate(getDateValue(orderItemsTable.getString("ACT_SHP_DT"), inputFormat, outputFormat));
				deliveryData.setStatus(addFieldToOrderItem(orderItemsTable.getString("STATUS")));
				final String courier = getCourierNameForCode(addFieldToOrderItem(orderItemsTable.getString("CARRIER")));
				deliveryData.setCourier(courier);
				deliveryData.setTrackingNumber(addFieldToOrderItem(orderItemsTable.getString("TRACKING_NO")));
				final String url = getTrackingUrlForItem(addFieldToOrderItem(orderItemsTable.getString("CARRIER")),
						addFieldToOrderItem(orderItemsTable.getString("TRACKING_NO")));
				deliveryData.setUrl(url);
				return deliveryData;
			}
		}

		return null;
	}

	/**
	 * @param orderItemsTable
	 * @param orderItems
	 * @return
	 */
	private OrderHistoryDeliveryData createOrderDeliveryItemSCPI(final ZOrderHistoryRequest$Item orderItemsTable,
															 final Map<String, Set<OrderHistoryViewData>> orderItems)
	{
		if (null != orderItems && orderItems.size() > 0)
		{
//			final SimpleDateFormat inputFormat = new SimpleDateFormat("dd.MMM.yyyy");
//			final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");
//			final OrderHistoryDeliveryData deliveryData = new OrderHistoryDeliveryData();
//			final String orderNumber = orderItemsTable.getString("ORDER");
//			final String orderLineNumber = orderItemsTable.getString("ORDER_LINE");
//			if (StringUtils.isNotEmpty(orderNumber) && StringUtils.isNotBlank(orderNumber) && StringUtils.isNotEmpty(orderLineNumber)
//					&& StringUtils.isNotBlank(orderLineNumber))
//			{
//				deliveryData.setOrderNum(orderNumber.trim());
//				deliveryData.setLineNumber(orderLineNumber.trim());
//				deliveryData.setDelivery(addFieldToOrderItem(orderItemsTable.getString("DELIVERY")));
//				deliveryData.setDeliveryLine(addFieldToOrderItem(orderItemsTable.getString("DELIVERY_LINE")));
//				deliveryData.setQuantity(addFieldToOrderItem(orderItemsTable.getString("QUAN")));
//				deliveryData.setShipDate(getDateValue(orderItemsTable.getString("ACT_SHP_DT"), inputFormat, outputFormat));
//				deliveryData.setStatus(addFieldToOrderItem(orderItemsTable.getString("STATUS")));
//				final String courier = getCourierNameForCode(addFieldToOrderItem(orderItemsTable.getString("CARRIER")));
//				deliveryData.setCourier(courier);
//				deliveryData.setTrackingNumber(addFieldToOrderItem(orderItemsTable.getString("TRACKING_NO")));
//				final String url = getTrackingUrlForItem(addFieldToOrderItem(orderItemsTable.getString("CARRIER")),
//						addFieldToOrderItem(orderItemsTable.getString("TRACKING_NO")));
//				deliveryData.setUrl(url);
			final SimpleDateFormat inputFormat = new SimpleDateFormat("dd.MMM.yyyy");
			final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");
			final OrderHistoryDeliveryData deliveryData = new OrderHistoryDeliveryData();
			final String orderNumber = orderItemsTable.getOrder();
			final String orderLineNumber = orderItemsTable.getOrder_line();
			if (StringUtils.isNotEmpty(orderNumber) && StringUtils.isNotBlank(orderNumber) && StringUtils.isNotEmpty(orderLineNumber)
					&& StringUtils.isNotBlank(orderLineNumber))
			{
				deliveryData.setOrderNum(orderNumber.trim());
				deliveryData.setLineNumber(orderLineNumber.trim());
				deliveryData.setDelivery(addFieldToOrderItem(orderItemsTable.getDelivery()));
				deliveryData.setDeliveryLine(addFieldToOrderItem(orderItemsTable.getDelivery_line()));
				deliveryData.setQuantity(addFieldToOrderItem(orderItemsTable.getQuan()));
				deliveryData.setShipDate(getDateValue(orderItemsTable.getAct_shp_dt(), inputFormat, outputFormat));
				deliveryData.setLastFormDate(getDateValue(orderItemsTable.getLAST_PROM_DT(), inputFormat, outputFormat));
				deliveryData.setOldNetPrice(getDateValue(orderItemsTable.getOLD_NET_PRICE(), inputFormat, outputFormat));
				deliveryData.setStatus(addFieldToOrderItem(orderItemsTable.getStatus()));
				final String courier = getCourierNameForCode(addFieldToOrderItem(orderItemsTable.getCarrier()));
				deliveryData.setCourier(courier);
				deliveryData.setTrackingNumber(addFieldToOrderItem(orderItemsTable.getTracking_no()));
				final String url = getTrackingUrlForItem(addFieldToOrderItem(orderItemsTable.getCarrier()),
						addFieldToOrderItem(orderItemsTable.getTracking_no()));
				deliveryData.setUrl(url);
				return deliveryData;
			}
		}
		return null;
	}

	private Map<String, Set<OrderHistoryViewData>> prepareOrderHistoryItemData(final JCoFunction function,
			final Map<String, BHGEOrderHistoryData> orderHeaderItems)
	{
		final Map<String, Set<OrderHistoryViewData>> orderItems = new HashMap<String, Set<OrderHistoryViewData>>();
		final JCoTable orderItemsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_MT_SALES_ORDER_ITEM);
		final int orderItemsCount = orderItemsTable.getNumRows();
		if (orderItemsCount > 0)
		{
			for (int i = 0; i < orderItemsCount; i++)
			{
				String orderNo = orderItemsTable.getString(BhgeCoreConstants.VBELN);
				if (StringUtils.isNotEmpty(orderNo) && StringUtils.isNotBlank(orderNo))
				{
					orderNo = orderNo.trim();
					final OrderHistoryViewData itemData = createOrderItem(orderItemsTable, orderHeaderItems);
					if (null != itemData)
					{
						// If orderNo already exists in Map then add item to it
						// or else add the key to the Map
						final Set<OrderHistoryViewData> viewItemsData = orderItems.get(orderNo);
						if (null != viewItemsData)
						{
							viewItemsData.add(itemData);
							orderItems.put(orderNo, viewItemsData);
						}
						else
						{
							final Set<OrderHistoryViewData> itemsForOrder = new HashSet<OrderHistoryViewData>();
							itemsForOrder.add(itemData);
							orderItems.put(orderNo, itemsForOrder);
						}
					}
				}
				orderItemsTable.nextRow();
			}
			return orderItems;
		}
		else
		{
			final Set<OrderHistoryViewData> orderHistoryViewDataError = new HashSet<>(1);
			final OrderHistoryViewData orderHistoryViewData = new OrderHistoryViewData();
			orderHistoryViewData.setOrderNum(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR);
			orderHistoryViewDataError.add(orderHistoryViewData);
			orderItems.put(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR, orderHistoryViewDataError);
			final Map<String, Set<OrderHistoryViewData>> orderHistoryViewDataErrorMap = new HashMap<>();
			orderHistoryViewDataErrorMap.put(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR, orderHistoryViewDataError);
			return orderHistoryViewDataErrorMap;
		}
	}

	private OrderHistoryViewData createOrderItem(final JCoTable orderItemsTable,
			final Map<String, BHGEOrderHistoryData> orderHeaders)
	{
		if (null != orderHeaders && orderHeaders.size() > 0)
		{
			final SimpleDateFormat inputFormat = new SimpleDateFormat("dd.MMM.yyyy");
			final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");
			final OrderHistoryViewData itemData = new OrderHistoryViewData();
			final String orderNo = orderItemsTable.getString(BhgeCoreConstants.VBELN);
			if (StringUtils.isNotEmpty(orderNo) && StringUtils.isNotBlank(orderNo))
			{
				final BHGEOrderHistoryData orderData = orderHeaders.get(orderNo.trim());
				if (null != orderData)
				{
					itemData.setOrderNum(orderNo.trim());
					itemData.setCustomerPO(addFieldToOrderItem(orderData.getPurchaseOrderNumber()));
					itemData.setSoldToName(addFieldToOrderItem(orderData.getSoldTo()));
					itemData.setLineNumber(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.ITEM_NO)));
					itemData.setProductHeirarchy(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.PROD_HEIRARCHY)));
					itemData.setPartNumber(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.MAT_NO)));
					itemData.setDescription(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.MAT_DESC)));
					itemData.setQty(getQtyValue(orderItemsTable.getString(BhgeCoreConstants.QUAN)));
					itemData.setStatus(
							addFieldToOrderItem(getShipStatus(orderItemsTable.getString(BhgeCoreConstants.SHIP_STATUS))));

					itemData.setShipDate(
							getDateValue(orderItemsTable.getString(BhgeCoreConstants.SHIP_DATE), inputFormat, outputFormat));
					itemData.setOrderDate(getDateValue(orderData.getPlaced()));
					itemData.setShipTo(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.SHIPPING_DESTINATION)));
					itemData.setTrackingNumber(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.TRACKING_NO)));
					itemData.setInvoices(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.CUSTOMER_INVOICE)));

					itemData.setShippingMethod(orderData.getHeaderShippingMethod());
					itemData.setRequestedShipDate(getDateValue(orderData.getHeaderRequestedShipDate()));
					itemData.setShippingAddress(orderData.getHeaderShippingAddress());
					itemData.setTotNetPrice(orderData.getTotalNetPrice());
                    itemData.setCurrency(
                            getCurrencyForCode(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.CURRENCY_DATA))));
                    String netPrice =addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.NET_PRICE));
                    if(itemData.getCurrency().contains("JPY") && null != netPrice && netPrice.contains(".")){
                        netPrice= netPrice.substring(0,netPrice.indexOf("."));
                    }
                    itemData.setNetPrice(netPrice);

					itemData.setUom(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.UOM_FIELD)));
					//itemData.setCreatedBy(getCreatedBy(orderNo.trim()));

					// Adding Courier name to item

					final String courier = getCourierNameForCode(
							addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.COURIER)));

					itemData.setCourier(courier);

					// Adding Tracking URL to item
					final String url = getTrackingUrlForItem(addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.COURIER)),
							addFieldToOrderItem(orderItemsTable.getString(BhgeCoreConstants.TRACKING_NO)));
					itemData.setUrl(url);

					// Adding fields for order Tracking

					itemData.setReqShipDate(
							getDateValue(orderItemsTable.getString(BhgeCoreConstants.REQ_SHP_DT), inputFormat, outputFormat));
					itemData.setActShpDate(
							getDateValue(orderItemsTable.getString(BhgeCoreConstants.ACT_SHP_DT), inputFormat, outputFormat));
					final String date = orderItemsTable.getString(BhgeCoreConstants.GE_PROM_DT);
					if (date != null && date.equalsIgnoreCase("Contact CSR"))
					{
						itemData.setGeFromDate(date);

					}
					else
					{
						itemData.setGeFromDate(getDateValue(date, inputFormat, outputFormat));
					}

					return itemData;
				}
			}
		}
		return null;
	}

	private String getCreatedBy(final String orderNo)
	{
		try
		{
			final OrderModel order = b2bOrderService.getOrderForCode(orderNo);
			if (null != order && null != order.getUser())
			{
				return order.getUser().getName();
			}
		}
		catch (final Exception e)
		{
			LOG.error("Order# {} not exists in Hybris",orderNo,e);
		}
		return null;
	}

	protected String getCurrencyForCode(final String isocode)
	{
		if (StringUtils.isNotBlank(isocode))
		{
			final CurrencyModel currencyModel = commonI18NService.getCurrency(isocode);
			if (null != currencyModel)
			{
				return isocode + " " + currencyModel.getSymbol();
			}
		}
		return "";
	}

	protected String setLineNumber(final String lineNumber)
	{
		try
		{
			if (StringUtils.isNotEmpty(lineNumber) && StringUtils.isNotBlank(lineNumber))
			{
				final int num = Integer.parseInt(lineNumber) / 1000;
				return String.valueOf(num);
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while setting Order Line item number ", e);
		}
		return "";
	}

	protected String getQtyValue(final String qty)
	{
		if (StringUtils.isNotBlank(qty) && StringUtils.isNotEmpty(qty))
		{
			return String.valueOf(Double.valueOf(qty.trim()).intValue());
		}
		return "";
	}
	protected String getShipStatus(final String status){

		StringBuilder newStatus = new StringBuilder();
		try
		{
			String[] splitStatus = status.split(" ");
			String decimalPattern = "([0-9]*)\\.([0-9]*)";
			for (String statusVal : splitStatus){
				if (Pattern.matches(decimalPattern, statusVal)) {
					String trimValue = String.valueOf(Double.valueOf(statusVal.trim()).intValue());
					newStatus.append(trimValue);
				} else {
					newStatus.append(statusVal);
				}
				newStatus.append(" ");
			}
			int index = newStatus.indexOf("<br>");
			while (index != -1) {
			   newStatus.replace(index, index + 4, ",");
			   index = newStatus.indexOf("<br>", index + 1);
			}
			return newStatus.toString();
		}
		catch (RuntimeException re)
		{
			LOG.info("Ship Status after modification {}", newStatus.toString());
			LOG.error("Error occured while setting the Ship Status", re);
		}
		return "";
	}

	protected String getDateValue(final String dateValue, final SimpleDateFormat inputFormat, final SimpleDateFormat outputFormat)
	{
		//LOG.info("Inside getDateValue for dateValue: " + dateValue + " inputFormat: " + inputFormat + " outputFormat: "	+ outputFormat);
		//LOG.debug("Inside getDateValue for dateValue: " + dateValue + " inputFormat: " + inputFormat + " outputFormat: "+ outputFormat);
		String response = "";

		try
		{
			if (StringUtils.isNotBlank(dateValue) && !TBD.equals(dateValue.trim()))
			{
				final Date date = inputFormat.parse(dateValue);
				response = outputFormat.format(date);

				//LOG.info("Response: " + response);
				//LOG.debug("Response: " + response);

				return response;
			}
		}
		catch (final Exception e)
		{
			//
		}
		return response;
	}

	@Override
	public Date getDateValueForString(final String dateValue, final SimpleDateFormat inputFormat,
			final SimpleDateFormat outputFormat)
	{
		try
		{
			if (StringUtils.isNotBlank(dateValue) && !TBD.equals(dateValue.trim()))
			{
				return inputFormat.parse(dateValue);
			}
		}
		catch (final Exception e)
		{
			//
		}
		return null;
	}

	protected String getDateValue(final Date dateValue)
	{
		final SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
		try
		{
			if (null != dateValue)
			{
				return formatter.format(dateValue);
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while parsing the date ", e);
		}
		return "";
	}

	protected Date getDate(String dateValue)
	{
		final SimpleDateFormat inputFormat = new SimpleDateFormat("dd.MMM.yyyy");
		if (dateValue.equals("0000-00-00"))
		{
			dateValue = "";
		}

		final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");
		try
		{
			if (StringUtils.isNotBlank(dateValue) && !TBD.equals(dateValue.trim()))
			{
				final Date date = inputFormat.parse(dateValue);
				return outputFormat.parse(outputFormat.format(date));
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error while parsing the date ",e);
		}
		return null;
	}

	protected String getTrackingUrlForItem(final String courier, final String trackingNo)
	{
		if (!StringUtils.isBlank(courier) && (bhgeServiceProviderService.validServiceProvider(courier) == true)
				&& !StringUtils.isBlank(trackingNo))
		{
			return bhgeServiceProviderService.getSiteURL(trackingNo, courier);
		}

		return "";
	}

	protected String getCourierNameForCode(final String courier)
	{


		if (StringUtils.isNotBlank(courier))
		{

			return bhgeServiceProviderService.getCourierNameForCode(courier);
		}


		return "";
	}

	protected String addFieldToOrderItem(final String fieldValue)
	{
		return (StringUtils.isNotBlank(fieldValue) && StringUtils.isNotEmpty(fieldValue)) ? fieldValue.trim() : "";
	}

	private Map<String, BHGEOrderHistoryData> prepareOrderHistoryHeaderData(final JCoFunction function)
	{

		final Map<String, BHGEOrderHistoryData> orderHeaderItems = new HashMap<String, BHGEOrderHistoryData>();
		final JCoTable orderHeaderTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_MT_SALES_ORDER_HEADER);
		final int orderHeaderCount = orderHeaderTable.getNumRows();

		if (orderHeaderCount > 0)
		{
			for (int i = 0; i < orderHeaderCount; i++)
			{
				final String orderNo = orderHeaderTable.getString(BhgeCoreConstants.GE_SALES_ORDER);
				final String errorCode = orderHeaderTable.getString(BhgeCoreConstants.ERROR);

				final SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd");
				final SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MMM-yyyy");

				// If ERROR tag has value as S0 means, then the order has been
				// successfully fetched from SAP. So, lets process it
				if (StringUtils.isNotBlank(errorCode) && ERROR_CODE.equals(errorCode.trim()) && StringUtils.isNotBlank(orderNo))
				{
					final BHGEOrderHistoryData orderData = new BHGEOrderHistoryData();
					orderData.setCode(orderNo.trim());
					orderData
							.setPurchaseOrderNumber(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.ITEM_CUSTOMER_PO)));
					orderData.setSoldTo(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SOLD_TO)));
					orderData.setPlaced(getDate(orderHeaderTable.getString(BhgeCoreConstants.DATE_ORDER_PLACED)));
					orderData.setPurchaseOrderDate(getDate(orderHeaderTable.getString(BhgeCoreConstants.PO_DATE)));
					orderData.setOrderType(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.F_AUART)));

					// Adding Sales Area related information to Order item from
					// RFC response
					orderData.setSalesRegion(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.VKORG)));
					orderData.setDistributionChannel(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.VTWEG)));
					orderData.setDivision(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SPART)));

					orderData
							.setHeaderShippingMethod(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SHIPPING_METHOD)));
					orderData.setHeaderRequestedShipDate(getDate(orderHeaderTable.getString(BhgeCoreConstants.REQ_SHIP_DATE)));
					orderData.setHeaderShippingAddress(
							addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SHIPPING_ADDRESS)));
					orderData.setCurrency(
							getCurrencyForCode(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.CURRENCY_DATA))));
                            String totalPrice = addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.NET_PRICE));
                            if(orderData.getCurrency().contains("JPY") && totalPrice != null && totalPrice.contains(".")){
                                totalPrice =totalPrice.substring(0,totalPrice.indexOf("."));
                                LOG.info("setting the totalprice removing decimals as currency is JPY"+totalPrice);
                            }
                    orderData.setTotalNetPrice(totalPrice);

					String soldToAddress = fetchSoldToAddressFromOrder(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SOLD_TO)));
					boolean isCreditCardOrder = creditCardCheckForOrder(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.ZTERM)));
					orderData.setIsCreditCardOrder(isCreditCardOrder);
					orderData.setSoldToAddress(soldToAddress);

					// details for order tracking
					orderData.setIncoterm(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.INCOTERM)));
					orderData.setSalesArea(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.SALES_AREA)));
					orderData.setBlkText(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.BLK_TXT)));
					orderData.setBkID(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.BLK_ID)));
					// final String blkId =
					// addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.BLK_ID));
					orderData.setOrderStatus(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.ORDER_STAT)));
					orderData.setPaymentTerm(addFieldToOrderItem(orderHeaderTable.getString(BhgeCoreConstants.ZTERM)));
					orderData.setCreatedBy(getCreatedBy(orderNo.trim()));

					if (orderData.getBlkText() != null)
					{
						orderData.setActionText("ACTION : " + orderData.getBlkText());
					}
					orderData.setLastUpdated(getDate(orderHeaderTable.getString(BhgeCoreConstants.ORDER_UPDATED_DATE)));
					//orderData.setLastUpdated(orderData.getPlaced());
					if (orderData.getLastUpdated() != null)
					{
						orderData.setLastUpdatedDate(getDateValue(orderData.getLastUpdated()));
					}
					if (orderData.getPlaced() != null)
					{
						orderData.setOrderDate(getDateValue(orderData.getPlaced()));
					}
					if (orderData.getPurchaseOrderDate() != null)
					{
						orderData.setPoDate(getDateValue(orderData.getPurchaseOrderDate()));
					}
					/*
					 * orderData.setOrderCount(awaitingCount); orderData.setOrderCount(value);
					 */
					orderHeaderItems.put(orderNo.trim(), orderData);
				}
				else if (StringUtils.isNotBlank(errorCode) && !ERROR_CODE.equals(errorCode.trim()))
				{
					// FIXME Add error scenarios here
					// DCJXH-821 implement the logic if record from JCO is empty
					// , then show no order available
					if (orderHeaderCount == 1
							&& StringUtils.trimToEmpty(orderHeaderTable.getString(BhgeCoreConstants.GE_SALES_ORDER)).isEmpty())
					{
						final BHGEOrderHistoryData orderData = new BHGEOrderHistoryData();
						orderData.setCode(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR);
						orderHeaderItems.put(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR, orderData);
					}
				}
				orderHeaderTable.nextRow();
			}
			return orderHeaderItems;
		}
		return null;
	}

	/**
	 *
	 */
	public void incrasecount()
	{

		// YTODO Auto-generated method stub

	}

	private void processErrors(final JCoFunction function)
	{
		// TODO process errors
	}


	protected JCoFunction prepareRequestOrderHistory(final JCoConnection connection, final String soldto, final String orderType,
			final String fromDate, final String toDate) throws BackendException
	{

		final JCoFunction function = setFunctionAndDefault(connection, orderType);

		final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
		final SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");

		function.getImportParameterList().setValue(BhgeCoreConstants.F_FROM_DATE,
				getDateValue(fromDate, inputFormat, outputFormat));
		function.getImportParameterList().setValue(BhgeCoreConstants.F_TO_DATE, getDateValue(toDate, inputFormat, outputFormat));

		LOG.info("CHECKING JCOFUNCTION ::prepareRequestOrderHistory {}",function);

		final List<String> lst = new ArrayList<String>();
		lst.add(soldto);
		final JCoFieldIterator iter = function.getTableParameterList().getFieldIterator();
		while (iter.hasNextField())
		{
			final JCoField f = iter.nextField();
			if (f.getName().equals(BhgeCoreConstants.T_CUST_NO) && f.isTable())
			{
				final JCoTable table = f.getTable();
				for (int i = 0; i < lst.size(); i++)
				{
					table.appendRow();
					table.setValue(BhgeCoreConstants.CUST_NO_KUNNR, lst.get(i));
				}
			}
		}
		LOG.info("Order History Request: {}", function.toXML());

		return function;
	}


	protected JCoFunction prepareRequest(final JCoConnection connection, final String soldto, final String orderType,
			final boolean dateRangeFlag) throws BackendException
	{
		LOG.info("CHECKING JCOFUNCTION ::Inside prepareRequest with date range flag: {} and soldto:{}", dateRangeFlag, soldto);
		final JCoFunction function = setFunctionAndDefault(connection, orderType);

		if (dateRangeFlag)
		{
			final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
			final SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");
			final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy");

			function.getImportParameterList().setValue(BhgeCoreConstants.F_FROM_DATE, getDateValue(
					(LocalDate.now().minusDays(Long.parseLong(Config.getParameter("bhge.orderhistory.month")))).format(formatter),
					inputFormat, outputFormat));
			function.getImportParameterList().setValue(BhgeCoreConstants.F_TO_DATE,
					getDateValue((LocalDate.now()).format(formatter), inputFormat, outputFormat));
		}

		LOG.info("CHECKING JCOFUNCTION ::prepareRequest::{}",function);

		final List<String> lst = new ArrayList<String>();
		lst.add(soldto);
		final JCoFieldIterator iter = function.getTableParameterList().getFieldIterator();
		while (iter.hasNextField())
		{
			final JCoField f = iter.nextField();
			if (f.getName().equals(BhgeCoreConstants.T_CUST_NO) && f.isTable())
			{
				final JCoTable table = f.getTable();
				for (int i = 0; i < lst.size(); i++)
				{
					table.appendRow();
					table.setValue(BhgeCoreConstants.CUST_NO_KUNNR, lst.get(i));
				}
			}
		}
		LOG.info("Order History Request:{} ", function.toXML());

		return function;
	}

	protected ZOrderHistoryRequest prepareRequestSCPI(final SCPIConnector connection, final String soldto, final String orderType,
										 final boolean dateRangeFlag)
	{
		LOG.info("Inside prepareRequestSCPI .... with date range flag: " + dateRangeFlag + " and soldto: " + soldto);
		ZOrderHistoryRequest zOrderHistoryRequest = new ZOrderHistoryRequest();
		ZOrderHistoryRequest$Item request$Item = new ZOrderHistoryRequest$Item();
		request$Item.setKunnr(soldto);
		/*
		 * if (StringUtils.isNotEmpty(soldto)) {
		 * zOrderHistoryRequest.setUserType(USER_TYPE_EXTERNAL); } else {
		 * zOrderHistoryRequest.setUserType(USER_TYPE_INTERNAL); }
		 */
		if(isInternalCustomer()) {
			zOrderHistoryRequest.setUserType(USER_TYPE_INTERNAL);
		}
		else {
			zOrderHistoryRequest.setUserType(USER_TYPE_EXTERNAL);
			zOrderHistoryRequest.getCust_NO().getItems().add(request$Item);
		}
		zOrderHistoryRequest.setCp_TYPE(orderType);
		if (dateRangeFlag)
		{
			final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
			final SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");
			final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy");
			zOrderHistoryRequest.setFrom_DATE(getDateValue(
					(LocalDate.now().minusDays(Long.parseLong(Config.getParameter("bhge.orderhistory.month")))).format(formatter),
					inputFormat, outputFormat));
			zOrderHistoryRequest.setTo_DATE(getDateValue((LocalDate.now()).format(formatter), inputFormat, outputFormat));
		}
		return zOrderHistoryRequest;
	}
	
	
	protected ZOrderHistoryRequest prepareRequestSCPIforOrderHistory(final SCPIConnector connection, final String soldto,
			final String orderType, final boolean dateRangeFlag) {
		LOG.info("Inside prepareRequestSCPI .... with date range flag: " + dateRangeFlag + " and soldto: " + soldto);
		ZOrderHistoryRequest zOrderHistoryRequest = new ZOrderHistoryRequest();
		ZOrderHistoryRequest$Item request$Item = new ZOrderHistoryRequest$Item();
		request$Item.setKunnr(soldto);
		zOrderHistoryRequest.getCust_NO().getItems().add(request$Item);
		/*
		 * if (StringUtils.isNotEmpty(soldto)) {
		 * zOrderHistoryRequest.setUserType(USER_TYPE_EXTERNAL); } else {
		 * zOrderHistoryRequest.setUserType(USER_TYPE_INTERNAL); }
		 */
		if (isInternalCustomer()) {
			zOrderHistoryRequest.setUserType(USER_TYPE_INTERNAL);
		} else {
			zOrderHistoryRequest.setUserType(USER_TYPE_EXTERNAL);
		}
		zOrderHistoryRequest.setCp_TYPE(orderType);
		if (dateRangeFlag) {
			final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
			final SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");
			final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy");
			zOrderHistoryRequest.setFrom_DATE(getDateValue(
					(LocalDate.now().minusDays(Long.parseLong(Config.getParameter("bhge.orderhistory.month"))))
							.format(formatter),
					inputFormat, outputFormat));
			zOrderHistoryRequest
					.setTo_DATE(getDateValue((LocalDate.now()).format(formatter), inputFormat, outputFormat));
		}
		return zOrderHistoryRequest;
	}
	
	private boolean isInternalCustomer() {
		boolean internalCustomer = false;
		UserModel currentUser = userService.getCurrentUser();
		if(currentUser instanceof GEEdgeCustomerModel && ((null != ((GEEdgeCustomerModel)currentUser).getIsInternalUser()
				&& ((GEEdgeCustomerModel)currentUser).getIsInternalUser()) || isBakerHughesEmail((GEEdgeCustomerModel)currentUser))) {
			internalCustomer =  true;
		}	
		return internalCustomer;
	}
	
	private boolean isBakerHughesEmail(GEEdgeCustomerModel currentUser) {
		String emailArr[] = currentUser.getEmail().split("@");
		String emailDomain = emailArr.length > 1 ? emailArr[1] : currentUser.getEmail();
		return emailDomain.equalsIgnoreCase("bakerhughes.com") ? true : false;
	}


	private BHGEOrderHistoryCollectionData getOrdersWithDateRange(final String soldto, String orderType, String dateRange)
	{
		BHGEOrderHistoryCollectionData result = new BHGEOrderHistoryCollectionData();
		try
		{
			LOG.info("Inside getOrdersWithDateRange()....");
   		String ORDERTYPE_DET = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET"))) ? Config.getParameter("ORDERTYPE_DET"): "CP_DET";
   		final ExecutorService executor = Executors.newSingleThreadExecutor();
   		final JaloSession currentSession = JaloSession.getCurrentSession();
   		final AbstractTenant tenant = (AbstractTenant) Registry.getCurrentTenant();
   		final JCoConnection connection = sapJcoContainer.getRFCConnection();
   		LOG.info("Connection fetched ....");
   		if (connection != null && !connection.isBackendOffline())
   		{
   			LOG.info("Connection finalized ....");
   			final int timeout = configurationService.getConfiguration().getInt("bhge.orderhistory.timeout.value", 180);
   			LOG.info("The timeout value from the properties is ...." + timeout);
   			orderType = ORDERTYPE_DET;
   
   			final JCoFunction function = prepareRequestWithDateRange(connection, soldto, orderType, true, dateRange);
   			final Callable<Object> task = new Callable<Object>()
   			{
   				@Override
   				public Object call() throws BackendException
   				{
   					LOG.info("Inside the call() method for order service exceution..Timeout value is...." + timeout);
   					Registry.setCurrentTenant(tenant);
   					tenant.setActiveSessionForCurrentThread(currentSession);
   					connection.execute(function);
   					return processResponse(function);
   				}
   			};
   			LOG.info("Executing future.get() start");
   			final Future<Object> future = executor.submit(task);
   			LOG.info("Executing future.get() end");
   			try
   			{
   				result = (BHGEOrderHistoryCollectionData) future.get(timeout, TimeUnit.SECONDS);
   			}
   			catch (final TimeoutException ex)
   			{
   				LOG.error("Time out exception occurred during getOrdersWithDateRange() execution ", ex);
   				result.setTimeoutException(true);
   			}
   			catch (final InterruptedException ex)
   			{
   				LOG.error("Interrupted exception occurred during getOrdersWithDateRange() execution ", ex);
   				result.setInterruptedException(true);
   			}
   			catch (final ExecutionException ex)
   			{
   				LOG.error("Execution exception occurred during getOrdersWithDateRange() execution " ,ex);
   				result.setExecutionException(true);
   			}
   			finally
   			{
   				future.cancel(true); // may or may not desire this
   				executor.shutdown();
   			}
   			return result;
   		}
		}
		catch (final BackendException backEndException)
		{
			LOG.error("Inside getOrdersWithDateRange catch block with exception: {}", backEndException.getMessage());
			handleException(soldto, orderType, backEndException);
			result.setExecutionException(true);
		}
		catch (final BackendRuntimeException runtimeException)
		{
			LOG.error("Inside getOrdersWithDateRange catch block with exception: {}" ,runtimeException.getMessage());
			handleException(soldto, orderType, runtimeException);
			result.setExecutionException(true);
		}
		catch (final Exception e)
		{
			LOG.error("Inside getOrdersWithDateRange catch block with exception:{} ", e.getMessage());
			handleException(soldto, orderType, e);
			result.setExecutionException(true);
		}
		return result;
	}
	
	protected JCoFunction prepareRequestWithDateRange(final JCoConnection connection, final String soldto, final String orderType,
			final boolean dateRangeFlag, String dateRange) throws BackendException
	{
		LOG.info("Inside prepareRequestWithDateRange .... with date range : " + dateRange + " and soldto: " + soldto);
		final JCoFunction function = setFunctionAndDefault(connection, orderType);

		if (dateRangeFlag)
		{
			final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
			final SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");
			final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy");
			String fromDate = getDateValue((LocalDate.now().minusDays(Long.valueOf(dateRange))).format(formatter), inputFormat, outputFormat);
			String toDate = getDateValue((LocalDate.now()).format(formatter), inputFormat, outputFormat);
			
			LOG.info("Date Range : From Date: " + fromDate + " To Date : " + toDate);
			function.getImportParameterList().setValue(BhgeCoreConstants.F_FROM_DATE, fromDate);
			function.getImportParameterList().setValue(BhgeCoreConstants.F_TO_DATE, toDate);
		}

		LOG.info("CHECKING FUNCTION::prepareRequestWithDateRange {}",function);

		final List<String> lst = new ArrayList<String>();
		lst.add(soldto);
		final JCoFieldIterator iter = function.getTableParameterList().getFieldIterator();
		while (iter.hasNextField())
		{
			final JCoField f = iter.nextField();
			if (f.getName().equals(BhgeCoreConstants.T_CUST_NO) && f.isTable())
			{
				final JCoTable table = f.getTable();
				for (int i = 0; i < lst.size(); i++)
				{
					table.appendRow();
					table.setValue(BhgeCoreConstants.CUST_NO_KUNNR, lst.get(i));
				}
			}
		}
		LOG.info("Order History Request: {}", function.toXML());

		return function;
	}

	protected JCoFunction prepareRequestForOrderNumberOnly(final JCoConnection connection, final String orderType)
			throws BackendException
	{

		final JCoFunction function = setFunctionAndDefault(connection, orderType);

		return function;
	}


	protected JCoFunction setFunctionAndDefault(final JCoConnection connection, final String orderType) throws BackendException
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("Order Tracking RFC: Setting the Default Input parameters");
		}
		final String orderHistoryFunction = Config.getString("SAP_ORDER_HISTORY_FUNCTION", "Z_SORDER_HISTORY");
		final JCoFunction function = connection.getFunction(orderHistoryFunction);
		function.getImportParameterList().setValue(BhgeCoreConstants.CP_TYPE, orderType);

		LOG.debug("New Function without CP TYPE" + function.getImportParameterList());

		return function;
	}

	protected JCoFunction setFunctionAndDefaultForSearch(final OrderHistoryFormSearchData searchData,
			final JCoConnection connection, final String orderType) throws BackendException
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("Order Tracking RFC: Setting the Default Input parameters");
		}
		final String orderHistoryFunction = Config.getString("SAP_ORDER_HISTORY_FUNCTION", "Z_SORDER_HISTORY");
		final JCoFunction function = connection.getFunction(orderHistoryFunction);
		function.getImportParameterList().setValue(BhgeCoreConstants.CP_TYPE, orderType);
		addFiltersToFunction(searchData, function);
		return function;
	}

	protected void addFiltersToFunction(final OrderHistoryFormSearchData searchData, final JCoFunction function)
	{
		if (null != searchData)
		{
			final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
			final SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");
			function.getImportParameterList().setValue(BhgeCoreConstants.F_BSTKD, addFilter(searchData.getPoOrderNum()));
			function.getImportParameterList().setValue(BhgeCoreConstants.F_MATNR, addFilter(searchData.getPoOrderNum()));
			function.getImportParameterList().setValue(BhgeCoreConstants.F_VBELN, addFilter(searchData.getPoOrderNum()));
			function.getImportParameterList().setValue(BhgeCoreConstants.F_FROM_DATE,
					getDateValue(searchData.getFromDate(), inputFormat, outputFormat));
			function.getImportParameterList().setValue(BhgeCoreConstants.F_TO_DATE,
					getDateValue(searchData.getToDate(), inputFormat, outputFormat));
		}
	}

	protected String addFilter(final String value)
	{
		if (StringUtils.isNotEmpty(value) && StringUtils.isNotBlank(value))
		{
			return "%" + value.trim() + "%";
		}
		return "";
	}

	public BHGEOrderHistoryCollectionData getSearchOrderResult(final OrderHistoryFormSearchData searchData)
	{
		String orderType = null;
		String CURRENT_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_CURRENT")))? Config.getParameter("ORDERTYPE_CURRENT"): "CP_OPEN";
		final String soldto = getSoldTo();
		try
		{
			if (null == searchData)
			{
				return getOrders(soldto, CURRENT_ORDER);
			}
			orderType = getOrderType(searchData.getPageFlag());
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			if (connection != null && !connection.isBackendOffline())
			{
				final JCoFunction function = prepareSearchRequest(searchData, connection, orderType);
				connection.execute(function);
				return processResponse(function);
			}
		}
		catch (final BackendException backEndException)
		{
			handleException(soldto, orderType, backEndException);
		}
		catch (final BackendRuntimeException runtimeException)
		{
			handleException(soldto, orderType, runtimeException);
		}
		catch (final Exception e)
		{
			handleException(soldto, orderType, e);
		}
		return null;
	}

	@Override
	public String getOrderType(final String pageFlag)
	{
		String orderType = null;
		String Detail_Order = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))? Config.getParameter("ORDERTYPE_DET"): "CP_DET";
		String FAST_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_FAST")))? Config.getParameter("ORDERTYPE_FAST"): "CP_FAST";
		if (StringUtils.isNotBlank(pageFlag) && FAST_ORDER.equals(pageFlag))
		{
			orderType = FAST_ORDER;
		}
		else
		{
			orderType = Detail_Order;
		}

		return orderType;
	}

	protected JCoFunction prepareSearchRequest(final OrderHistoryFormSearchData searchData, final JCoConnection connection,
			final String orderType) throws BackendException
	{
		final String soldto = getSoldTo();
		final JCoFunction function = setFunctionAndDefaultForSearch(searchData, connection, orderType);
		final JCoTable customerTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_CUST_NO);
		customerTable.appendRow();
		customerTable.setValue(BhgeCoreConstants.CUST_NO_KUNNR, soldto);
		LOG.debug("Order History Request: {}" , function.toXML());
		return function;
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
			LOG.info("DefaultBHGEOrderHistoryService : Localized Date: " + formatted + " for input date: " + date + " and locale: "
					+ storeSessionFacade.getCurrentLanguage().getIsocode());
		}
		catch (final Exception e)
		{
			LOG.error("EXCEPTION OCCURED::getLocalizedDate",e);
			return date;
		}
		return formatted;
	}

	public String getSoldTo()
	{
		final BHGESoldToData soldto = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
		if (null != soldto)
		{
			LOG.info("Sold-to number is present in session, fetching the sold-to number from session attribute");
			return soldto.getUid();
		}
		else
		{
			LOG.info("Sold-to number is not present in session, fetching from current user details");
			return getSoldToFromCurrentUser();
		}
	}

	@Override
	public String getSoldToFromCurrentUser()

	{
		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		if(null != currentUser)
		{
		LOG.info("Fetching sold-to number from current user details"+currentUser.getUid());
		}
		String currentUserDefaultB2BUnitUid = "";
		if(null !=  currentUser.getDefaultSoldTo()) {
			B2BUnitModel defaultB2BUnitModel = currentUser.getDefaultSoldTo();
			currentUserDefaultB2BUnitUid = defaultB2BUnitModel.getUid();
			LOG.info("Current user's default B2B unit is: " + currentUserDefaultB2BUnitUid);
		}
		return currentUserDefaultB2BUnitUid;
	}

	protected String fetchSoldToAddressFromOrder(final String soldTo){
//		String regex = "\\d+";
//		String soldToNumber = "";
//		Pattern pattern = Pattern.compile(regex);
//		Matcher matcher = pattern.matcher(soldToNameAndNumber);
//		if(matcher.find()){
//			soldToNumber = matcher.group();
//		}
		LOG.info("CHECKING B2BUNIT-UID::fetchSoldToAddressFromOrder {}", soldTo);
		final B2BUnitModel soldToB2BUnit = bhgeB2BUnitService.getSoldToB2bUnit(soldTo);
		String soldToAddress = "";
		/*if(!allB2BUnits.isEmpty()) {
			B2BUnitModel b2bUnitModel = new B2BUnitModel();
			for (B2BUnitModel parentB2BUnit : allB2BUnits) {
				if (!parentB2BUnit.getUid().contains("_")) {
					b2bUnitModel = parentB2BUnit;
					break;
				}
			}*/
		//if(soldToB2BUnit!=null) {
		if (Objects.nonNull(soldToB2BUnit)) {	
			LOG.info("Sold-to B2BUnit::fetchSoldToAddressFromOrder:: {}", soldToB2BUnit.getUid());
			Collection<AddressModel> soldToAddresses = soldToB2BUnit.getAddresses();
			if (!soldToAddresses.isEmpty()) {
				for (AddressModel addressModel : soldToAddresses) {
					if (addressModel.getSapAddressUsage() != null && addressModel.getSapAddressUsage().equalsIgnoreCase("DE")) {
						soldToAddress = (StringUtils.isNotEmpty(addressModel.getCompany()) ? addressModel.getCompany() + "<br>" : "")
								+ (StringUtils.isNotEmpty(addressModel.getStreetname()) ? addressModel.getStreetname() + "<br>" : "")
								+ (StringUtils.isNotEmpty(addressModel.getTown()) ? addressModel.getTown() + "," : "")
								+ (Objects.nonNull(addressModel.getRegion()) ? (StringUtils.isNotEmpty(addressModel.getRegion().getIsocodeShort()) ? addressModel.getRegion().getIsocodeShort() + "," : "") : "")
								+ (StringUtils.isNotEmpty(addressModel.getPostalcode()) ? addressModel.getPostalcode() + "<br>" : "")
								+ (Objects.nonNull(addressModel.getCountry()) ? (StringUtils.isNotEmpty(addressModel.getCountry().getName()) ? addressModel.getCountry().getName() : "") : "");
						LOG.info("soldToAddress: " + soldToAddress);
						break;
					}
				}
			}
		}

		return soldToAddress;
	}

	protected boolean creditCardCheckForOrder(String zTerm){
		LOG.info("zTerm: " + zTerm);
		String creditCardCheck = configurationService.getConfiguration().getString(CREDIT_CARD_CHECK,"Credit Card");
		LOG.info("creditCardCheck: {}", creditCardCheck);
		boolean isCreditCardOrder = false;
		if(StringUtils.containsIgnoreCase(zTerm,creditCardCheck)) {
			LOG.info("isCreditCardOrder is set to True");
			isCreditCardOrder = true;
		}
		LOG.info("isCreditCardOrder: {}", isCreditCardOrder);
		return isCreditCardOrder;
	}

	/**
	 * @return the bhgeOrderHistoryErrorService
	 */
	public BHGEOrderHistoryErrorService getBhgeOrderHistoryErrorService()
	{
		return bhgeOrderHistoryErrorService;
	}

	/**
	 * @param bhgeOrderHistoryErrorService
	 *           the bhgeOrderHistoryErrorService to set
	 */
	public void setBhgeOrderHistoryErrorService(final BHGEOrderHistoryErrorService bhgeOrderHistoryErrorService)
	{
		this.bhgeOrderHistoryErrorService = bhgeOrderHistoryErrorService;
	}

	/**
	 * @return the bhgeOrderHistoryDao
	 */
	public BHGEOrderHistoryDao getBhgeOrderHistoryDao()
	{
		return bhgeOrderHistoryDao;
	}

	/**
	 * @param bhgeOrderHistoryDao
	 *           the bhgeOrderHistoryDao to set
	 */
	public void setBhgeOrderHistoryDao(final BHGEOrderHistoryDao bhgeOrderHistoryDao)
	{
		this.bhgeOrderHistoryDao = bhgeOrderHistoryDao;
	}
	
	/**
	 * @return the searchRestrictionService
	 */
	public SearchRestrictionService getSearchRestrictionService()
	{
		return searchRestrictionService;
	}

	/**
	 * @param searchRestrictionService
	 *           the searchRestrictionService to set
	 */
	public void setSearchRestrictionService(final SearchRestrictionService searchRestrictionService)
	{
		this.searchRestrictionService = searchRestrictionService;
	}

}
