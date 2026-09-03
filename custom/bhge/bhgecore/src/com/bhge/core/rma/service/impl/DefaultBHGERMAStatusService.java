/**
 *
 */
package com.bhge.core.rma.service.impl;

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
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import jakarta.annotation.Resource;

import com.bhge.core.data.*;
import de.hybris.platform.core.model.user.AddressModel;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.hsqldb.lib.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import com.bhge.core.data.*;
import com.bhge.facades.data.BhgeSalesAreaObject;
import com.bhge.facades.user.data.BHGESoldToData;
import com.sap.conn.jco.JCoField;
import com.sap.conn.jco.JCoFieldIterator;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoParameterList;
import com.sap.conn.jco.JCoTable;

import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.rma.dao.BHGERMAStatusDao;
import com.bhge.core.rma.dao.BHGERmaFormDao;
import com.bhge.core.sap.SAPJcoContainer;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.rmaattachment.ZHYBRmaAttachmentsRequest;
import com.bhge.core.scpi.rfc.rmaattachment.ZHYBRmaAttachmentsResponse;
import com.bhge.core.scpi.rfc.rmaattachmentdownload.ZHYBRmaNotifDocAttcRequest;
import com.bhge.core.scpi.rfc.rmaattachmentdownload.ZHYBRmaNotifDocAttcResponse;
import com.bhge.core.scpi.rfc.zrmastatus.ZHYBRmaSTATUSReq;
import com.bhge.core.scpi.rfc.zrmastatus.ZHYBRmaSTATUSRes;
import com.bhge.core.serviceprovider.service.BHGEServiceProviderService;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.integration.order.history.error.service.BHGEOrderHistoryErrorService;
import com.bhge.integration.order.history.service.BHGEOrderHistoryService;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.model.B2BUserGroupModel;
import de.hybris.platform.core.AbstractTenant;
import de.hybris.platform.core.Registry;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
//import de.hybris.platform.commercefacades.storesession.data.CurrencyData;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.sap.core.jco.exceptions.BackendRuntimeException;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.rma.service.BHGERMAStatusService;
import com.bhge.core.sap.util.BHGESAPJCoUtils;
import com.bhge.core.scpi.rfc.rmaattachmentdownload.ZHYBRmaNotifDocAttcRequest$Item;
import com.bhge.core.scpi.rfc.zrmastatus.ZRmaStatusRequest$Item;
import com.bhge.store.services.BHGEBaseStoreService;

/**
 * @author 1423683
 *
 */
public class DefaultBHGERMAStatusService implements BHGERMAStatusService {
	//public static final String TBD = "TBD";

	public static final String SAP_RMA_STATUS_FUNCTION = "SAP_RMA_STATUS_FUNCTION";
	public static final String ZHYB_RMA_STATUS = "ZHYB_RMA_STATUS";
	public static final String RMA_REQUEST_RECIEVED = "RMA REQUEST RECIEVED";
	private static final String SCPI_ZHYB_RMA_STATUS_ENDPOINT_URL = "SCPI_ZHYB_RMA_STATUS_ENDPOINT";

	public static final String GOODS_RECIEVED = "GOODS RECEIVED";

	public static final String REPAIR = "REPAIR";

	public static final String CALIBRATION = "CALIBRATION";
	public static final String AWAITING_REPAIR_PARTS = "AWAITING REPAIR PARTS";
	public static final String AT_THIRD_PARTY = "AT THIRD PARTY";

	public static final String COMPLETE_SHIPPED = "COMPLETE-SHIPPED";
	public static final String COMPLETE_CREDITED = "COMPLETE-CREDITED";
	public static final String COMPLETE_SCRAPPED = "COMPLETE-SCRAPPED";


	public static final String RMA_SUBMITTED = "RMA SUBMITTED";
	public static final String AWAITING_GOODS = "AWAITING GOODS";
	public static final String EVALUATING = "EVALUATING";
	public static final String PROCESSING = "PROCESSING";
	public static final String IN_SHIPPING = "IN SHIPPING";
	public static final String COMPLETE = "COMPLETE";
	public static final String CANCELLED = "CANCELLED";


	public static Map<String, String> PRODUCTLINE_MAP = null;

	private static final String USER_TYPE_INTERNAL = "I";
	private static final String USER_TYPE_EXTERNAL = "E";
	private static final String CREDIT_CARD_CHECK = "zterm.value.for.credit.card.orders";

	@Resource(name = "bhgeRMAStatusDao")
	private BHGERMAStatusDao bhgeRMAStatusDao;

	@Resource(name = "sapJcoContainer")
	private SAPJcoContainer sapJcoContainer;

	@Resource(name = "configurationService")
	ConfigurationService configurationService;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource(name = "bhgeOrderHistoryService")
	private BHGEOrderHistoryService bhgeOrderHistoryService;

	@Resource(name = "mediaService")
	private MediaService mediaService;

	@Resource(name = "bhgeOrderHistoryErrorService")
	private BHGEOrderHistoryErrorService bhgeOrderHistoryErrorService;

	@Resource(name = "bhgeRmaFormDao")
	private BHGERmaFormDao bhgeRmaFormDao;

	@Resource(name = "bhgeServiceProviderService")
	private BHGEServiceProviderService bhgeServiceProviderService;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name="bhgeB2BUnitService")
	private BHGEB2BUnitService bhgeB2BUnitService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;
	
	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "scpiConnector")
	private SCPIConnector scpiConnector;

	private static final Logger LOG = Logger.getLogger(DefaultBHGERMAStatusService.class);
	public static final String TBD = "TBD";


	//FETCHING RMASTATUS DATA FOR CUSTOMERNO AND ORDERTYPE
	@Override
	public BHGERmaStatusData getRmaStatusForCustomer(final List<String> customerNumber, final String orderType,
													 final String dateRange) {
		LOG.info("Inside getRmaStatus Service ....");

		try {
			final ExecutorService executor = Executors.newSingleThreadExecutor();
			final JaloSession currentSession = JaloSession.getCurrentSession();
			final AbstractTenant tenant = (AbstractTenant) Registry.getCurrentTenant();
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			LOG.info("Connection fetched ....");
			if (connection != null && !connection.isBackendOffline()) {
				LOG.info("Connection finalized .... " + customerNumber);
				final int timeout = configurationService.getConfiguration().getInt("bhge.rmastatusforcustomer.timeout.value", 180);
				LOG.info("The timeout value from the properties is ...." + timeout);

				final JCoFunction function = prepareRequestForCustomer(connection, customerNumber, orderType, dateRange);
				BHGERmaStatusData result = new BHGERmaStatusData();
				final Callable<Object> task = new Callable<Object>() {
					@Override
					public Object call() throws BackendException, ParseException {
						LOG.info("Inside the call() method for RMA service exceution..Timeout value is...." + timeout);
						Registry.setCurrentTenant(tenant);
						tenant.setActiveSessionForCurrentThread(currentSession);
						connection.execute(function);
						return processResponse(function);
					}
				};

				LOG.info("Executing future.get() start");
				final Future<Object> future = executor.submit(task);
				LOG.info("Executing future.get() end");

				try {
					result = (BHGERmaStatusData) future.get(timeout, TimeUnit.SECONDS);
					//LOG.info("***************************** RESULT *********************" + result);
				} catch (final TimeoutException ex) {
					LOG.error("Time out exception occurred during getRmaStatusForCustomer() execution " + ex);
					result.setTimeoutException(true);
					handleException(customerNumber, orderType, ex.getMessage());
					LOG.error(" TimeOutExceptionValue :  " + result.isTimeoutException());
				} catch (final InterruptedException ex) {
					LOG.error("Interrupted exception occurred during getRmaStatusForCustomer() execution" + ex);
					result.setInterruptedException(true);
					handleException(customerNumber, orderType, ex.getMessage());
				} catch (final ExecutionException ex) {
					LOG.error("Execution exception occurred during getRmaStatusForCustomer() execution" + ex);
					result.setExecutionException(true);
					handleException(customerNumber, orderType, ex.getMessage());
				} finally {
					future.cancel(true); // may or may not desire this
					executor.shutdown();
				}
				return result;
			}
		} catch (final Exception backEndException) {
			LOG.info("Inside catch block with exception: " + backEndException.getMessage());
			//handleException(customerNumber, orderType, backEndException);
			backEndException.printStackTrace();
		}

		return null;
	}

	@Override
	public BHGERmaStatusData getRmaStatusForCustomerRFC(final List<String> customerNumber, final String orderType,
                                                        final String dateRange) {
		LOG.info("Inside getRmaStatusForCustomerRFC Method ....orderType: " + orderType + "DateRange " + dateRange);
		BHGERmaStatusData result = new BHGERmaStatusData();
		try {
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_RMA_STATUS_ENDPOINT_URL, flexibleSearchService);
			final ZHYBRmaSTATUSReq zHYBRmaSTATUSReq = createRequestDataForRmaStatusForCustomerRFC(customerNumber, null, null, orderType, dateRange);
			LOG.info("*********************RMARequest**********" +zHYBRmaSTATUSReq);
			final ZHYBRmaSTATUSRes zHYBRmaSTATUSRes = (ZHYBRmaSTATUSRes) scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, zHYBRmaSTATUSReq,
					ZHYBRmaSTATUSRes.class);
			LOG.info("*********************RMAResponse**********" +zHYBRmaSTATUSRes);
			result = processRmaStatusDataRFC(zHYBRmaSTATUSRes);
			return result;
		}
		catch (final Exception backEndException) {
			LOG.info("Inside catch block with exception: " + backEndException.getMessage());
			backEndException.printStackTrace();
			handleException(customerNumber, orderType, backEndException.getMessage());
			result.setExecutionException(true);
		}

		return result;
	}

	@Override
	public BHGERmaStatusData getQuickRmaStatusForRmaNumberRFC(final List<String> customerNumber, final String orderType,
														final String rmaNumber, final String poNumber) {
		LOG.info("Inside getQuickRmaStatusForRmaNumberRFC Method ....orderType: " + orderType + "Rma Number " + rmaNumber + "PO Number" + poNumber);
		BHGERmaStatusData result = new BHGERmaStatusData();
		try {
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_RMA_STATUS_ENDPOINT_URL, flexibleSearchService);
			final ZHYBRmaSTATUSReq zHYBRmaSTATUSReq = createRequestDataForQuickRmaStatusForCustomerRFC(customerNumber, rmaNumber, poNumber, orderType, null);
			zHYBRmaSTATUSReq.setRmaNumber(StringUtils.right(rmaNumber,12));
			final ZHYBRmaSTATUSRes zHYBRmaSTATUSRes = (ZHYBRmaSTATUSRes) scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, zHYBRmaSTATUSReq,
					ZHYBRmaSTATUSRes.class);
			result = processRmaStatusDataRFC(zHYBRmaSTATUSRes);
			return result;
		}
		catch (final Exception backEndException) {
			LOG.info("Inside catch block with exception: " + backEndException.getMessage());
			backEndException.printStackTrace();
			handleException(customerNumber, orderType, backEndException.getMessage());
			result.setExecutionException(true);
		}

		return result;
	}
	
	@Override
	public BHGERmaStatusData getRmaStatusRFC(final List<String> customerNumber, String rmaNumber, String poNumber, final String orderType,
			final String dateRange) {
		LOG.info("Inside getRmaStatusForRMARFC Method ....orderType: " + orderType + "DateRange " + dateRange);
		BHGERmaStatusData result = new BHGERmaStatusData();
		try {
			final String scpiEndpointUrl = BHGECommonsUtil
					.getValueFromBHGEGlobalProperties(SCPI_ZHYB_RMA_STATUS_ENDPOINT_URL, flexibleSearchService);
			final ZHYBRmaSTATUSReq zHYBRmaSTATUSReq = createRequestDataForRmaStatusForCustomerRFC(customerNumber, rmaNumber, poNumber,
					orderType, dateRange);
			final ZHYBRmaSTATUSRes zHYBRmaSTATUSRes = (ZHYBRmaSTATUSRes) scpiConnector
					.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, zHYBRmaSTATUSReq, ZHYBRmaSTATUSRes.class);
			result = processRmaStatusDataRFC(zHYBRmaSTATUSRes);
			return result;
		} catch (final Exception backEndException) {
			LOG.info("Inside catch block with exception: " + backEndException.getMessage());
			backEndException.printStackTrace();
			handleException(customerNumber, orderType, backEndException.getMessage());
			result.setExecutionException(true);
		}

		return result;
	}

	private ZHYBRmaSTATUSReq createRequestDataForRmaStatusForCustomerRFC(final List<String> customerNumber, String rmaNumber, String poNumber, final String orderType,
																		 final String dateRange) {
		LOG.info("RMA STATUS Tracking RFC: Setting the Default Input parameters");
		LOG.info("--------------------- customerNumber:" + customerNumber);
		LOG.info("--------------------- ORDERTYPE:" + orderType + " DateRange: " + dateRange);

		final ZHYBRmaSTATUSReq zHYBRmaSTATUSReq = new ZHYBRmaSTATUSReq();
		zHYBRmaSTATUSReq.setCpFlag(orderType);
		final List<ZRmaStatusRequest$Item> rmaCustomerTable =new ArrayList<ZRmaStatusRequest$Item>();
		final List<String> list = new ArrayList<String>();
		list.addAll(customerNumber);
		for (final String customer : list)
		{
			final ZRmaStatusRequest$Item request$Item = new ZRmaStatusRequest$Item();
			request$Item.setCust_num(customer);
			rmaCustomerTable.add(request$Item);
		}
		zHYBRmaSTATUSReq.getCust_NO().setItems(rmaCustomerTable);
		
		if(null != rmaNumber)
		{
			zHYBRmaSTATUSReq.setRmaNumber(rmaNumber);
		}
		
		if(null != poNumber)
		{
			zHYBRmaSTATUSReq.setPoNumber(poNumber);
		}
		/*if(null != )*/
		final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
		final SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");
		final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy");

		zHYBRmaSTATUSReq.setFrom_DATE(getDateValue((LocalDate.now().minusDays(Long.parseLong(dateRange))).format(formatter), inputFormat, outputFormat));
		zHYBRmaSTATUSReq.setToDate(getDateValue((LocalDate.now()).format(formatter), inputFormat, outputFormat));		
		/*
		 * if (CollectionUtils.isNotEmpty(zHYBRmaSTATUSReq.getCust_NO().getItems())) {
		 * zHYBRmaSTATUSReq.setUserType(USER_TYPE_EXTERNAL); } else {
		 * zHYBRmaSTATUSReq.setUserType(USER_TYPE_INTERNAL); }
		 */
		if(isInternalCustomer()) {
			zHYBRmaSTATUSReq.setUserType(USER_TYPE_INTERNAL);
		}else {
			zHYBRmaSTATUSReq.setUserType(USER_TYPE_EXTERNAL);
		}
		LOG.info("RMA Status Request: " + SCPIConnector.toXML(zHYBRmaSTATUSReq));
		return zHYBRmaSTATUSReq;
	}

	private ZHYBRmaSTATUSReq createRequestDataForQuickRmaStatusForCustomerRFC(final List<String> customerNumber, String rmaNumber, String poNumber, final String orderType,
																		 final String dateRange) {
		LOG.info("RMA STATUS Tracking RFC: Setting the Default Input parameters");
		LOG.info("--------------------- customerNumber:" + customerNumber);
		LOG.info("--------------------- ORDERTYPE:" + orderType + " DateRange: " + dateRange);

		final ZHYBRmaSTATUSReq zHYBRmaSTATUSReq = new ZHYBRmaSTATUSReq();
		zHYBRmaSTATUSReq.setCpFlag(orderType);

		final List<ZRmaStatusRequest$Item> rmaCustomerTable =new ArrayList<ZRmaStatusRequest$Item>();
		final List<String> list = new ArrayList<String>();
		list.addAll(customerNumber);

		if(null != rmaNumber)
		{
			zHYBRmaSTATUSReq.setRmaNumber(rmaNumber);
		}

		if(null != poNumber)
		{
			zHYBRmaSTATUSReq.setPoNumber(poNumber);
		}
		/*
		 * if (CollectionUtils.isNotEmpty(zHYBRmaSTATUSReq.getCust_NO().getItems())) {
		 * zHYBRmaSTATUSReq.setUserType(USER_TYPE_EXTERNAL); } else {
		 * zHYBRmaSTATUSReq.setUserType(USER_TYPE_INTERNAL); }
		 */
		if(isInternalCustomer()) {
			zHYBRmaSTATUSReq.setUserType(USER_TYPE_INTERNAL);
		}else {
			zHYBRmaSTATUSReq.setUserType(USER_TYPE_EXTERNAL);
			for (final String customer : list)
			{
				final ZRmaStatusRequest$Item request$Item = new ZRmaStatusRequest$Item();
				request$Item.setCust_num(customer);
				rmaCustomerTable.add(request$Item);
			}
			zHYBRmaSTATUSReq.getCust_NO().setItems(rmaCustomerTable);
			}
		if(StringUtils.isNotBlank(dateRange)) {
			final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
			final SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");
			final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy");

			zHYBRmaSTATUSReq.setFrom_DATE(getDateValue((LocalDate.now().minusDays(Long.parseLong(dateRange))).format(formatter), inputFormat, outputFormat));
			zHYBRmaSTATUSReq.setToDate(getDateValue((LocalDate.now()).format(formatter), inputFormat, outputFormat));
		}

		LOG.info("RMA Status Request: " + SCPIConnector.toXML(zHYBRmaSTATUSReq));
		return zHYBRmaSTATUSReq;
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

	private Boolean handleException(final List<String> customerNumber, final String orderType, final String exception)
	{
		LOG.info("Exception occured while fetching the orders from SAP - " + customerNumber + " and orderType - " + orderType);
		for (final String cust : customerNumber)
		{
			final boolean ex = bhgeOrderHistoryErrorService.handleNonCriticalErrorForRMA(cust, orderType, exception);
			LOG.info("EXCEPTION MAIL Result --------" + ex);
			return ex;
		}
		return false;
	}


	private JCoFunction prepareRequestForCustomer(final JCoConnection connection, final List<String> customerNumber,
												  final String orderType, final String dateRange) throws BackendException
	{
		LOG.info("Inside prepareRequest .... customerNumber: " + customerNumber + " " + "and orderType" + orderType);
		final JCoFunction function = setFunctionAndDefaultForCustomer(connection, customerNumber, orderType, dateRange);
		LOG.info("RMA STATUS REQUEST FOR CUSTOMER: " + function.toXML());

		LOG.info(function);
		return function;
	}


	private JCoFunction setFunctionAndDefaultForCustomer(final JCoConnection connection, final List<String> customerNumber,
														 final String orderType, final String dateRange) throws BackendException
	{
		LOG.info("RMA STATUS Tracking RFC: Setting the Default Input parameters");

		final String rmaStatusFunction = Config.getString("SAP_RMA_STATUS_FUNCTION", "ZHYB_RMA_STATUS");
		final JCoFunction function = connection.getFunction(rmaStatusFunction);

		LOG.info("--------------------- customerNumber:" + customerNumber);
		LOG.info("--------------------- ORDERTYPE:" + orderType);

		function.getImportParameterList().setValue(BhgeCoreConstants.CP_FLAG, orderType);

		final SimpleDateFormat inputFormat = new SimpleDateFormat("dd-MMM-yyyy");
		final SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");
		final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy");

		function.getImportParameterList().setValue(BhgeCoreConstants.F_FROM_DATE,
				getDateValue((LocalDate.now().minusDays(Long.parseLong(dateRange))).format(formatter), inputFormat, outputFormat));

		function.getImportParameterList().setValue(BhgeCoreConstants.F_TO_DATE,
				getDateValue((LocalDate.now()).format(formatter), inputFormat, outputFormat));

		if (customerNumber != null)
		{
			final List<String> list = new ArrayList<String>();
			list.addAll(customerNumber);

			final JCoFieldIterator iterator = function.getTableParameterList().getFieldIterator();
			while (iterator.hasNextField())
			{

				final JCoField field = iterator.nextField();
				if (field.getName().equals(BhgeCoreConstants.CUSTOMER_TABLE) && field.isTable())
				{
					final JCoTable table = field.getTable();
					for (int i = 0; i < list.size(); i++)
					{
						table.appendRow();
						table.setValue(BhgeCoreConstants.CUSTOMER_NUM, list.get(i));
						LOG.info("------------------5" + table);
					}
				}
			}
		}

		//LOG.info(function);

		LOG.info("New Function" + function.getImportParameterList());

		//LOG.info("--------------------- OUTSIDE SETFUNCTION FOR CUSTOMER ---------------------");

		return function;
	}

	protected String getDateValue(final String dateValue, final SimpleDateFormat inputFormat, final SimpleDateFormat outputFormat)
	{
		LOG.debug("Inside getDateValue for dateValue: " + dateValue + " inputFormat: " + inputFormat + " outputFormat: "
				+ outputFormat);
		String response = "";

		try
		{
			if (StringUtils.isNotBlank(dateValue) && !TBD.equals(dateValue.trim()))
			{
				final Date date = inputFormat.parse(dateValue);
				response = outputFormat.format(date);

				//LOG.info("Response: " + response);
				LOG.debug("Response: " + response);

				return response;
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while parsing the date " + e);
		}
		return response;
	}


	private BHGERmaStatusData processResponse(final JCoFunction function) throws ParseException
	{
		LOG.info("RMA STATUS Response: " + function.toXML());
		return processRmaStatusData(function);
	}

	private BHGERmaStatusData processRmaStatusDataRFC(final ZHYBRmaSTATUSRes zHYBRmaSTATUSRes) throws ParseException
	{
		LOG.info("RMA Status Response: " + SCPIConnector.toXML(zHYBRmaSTATUSRes));
		final BHGERmaStatusData bhgeRmaStatusData = new BHGERmaStatusData();
		final UserModel user = userService.getCurrentUser();
		List<RmaHeaderStatusData> rmaHeaders = new ArrayList<>();
		final RmaErrorMessageData errorMessage = prepareRmaErrorMessageDataRFC(zHYBRmaSTATUSRes);

		if (null != user && user instanceof GEEdgeCustomerModel) {
            final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) user;
            final B2BUnitModel defaultB2bUnit = currentUser.getDefaultB2BUnit();
            final String productLine = currentUser.getProductLineMap().get(defaultB2bUnit.getUid());
            Boolean isInternalUser = currentUser.getIsInternalUser();
            Boolean isWrongCustomer = true;
            Boolean isWrongProductline = true;
            List<RmaHeaderStatusData> rawRmaHeaders = prepareRmaHeaderStatusDataRFC(zHYBRmaSTATUSRes);
            if (null != rawRmaHeaders && !rawRmaHeaders.isEmpty()) {
                for (RmaHeaderStatusData headerStatusData : rawRmaHeaders) {
                    String rmaProductLine = headerStatusData.getProductLine();
                      String customerNumberOfUser = defaultB2bUnit.getUid().split("_")[0];
                    LOG.info("DefaultBHGERMAStatusService customerNumberOfUser " + customerNumberOfUser);
                    String headerCustomerNumber = headerStatusData.getCustomerAcct();
                    LOG.info("DefaultBHGERMAStatusService headerCustomerNumber " + headerCustomerNumber + " headerProductLine " + rmaProductLine);
                   if(!isInternalUser) {
                        if (headerCustomerNumber == null || !(StringUtils.equalsIgnoreCase(headerCustomerNumber, customerNumberOfUser))) {
                            LOG.info("DefaultBHGERMAStatusService headerCustomerNumber " + headerCustomerNumber + " headerProductLine " + rmaProductLine + " is not matching with the logged in user store number " + customerNumberOfUser);
                            continue;
                        } else {
                            LOG.info("DefaultBHGERMAStatusService headerCustomerNumber " + headerCustomerNumber + " headerProductLine " + rmaProductLine + " is  matching with the logged in user store number " + customerNumberOfUser);
                            isWrongCustomer = Boolean.FALSE;
                        }
                    }
                    if (rmaProductLine == null ||
                            !StringUtils.containsIgnoreCase(rmaProductLine, productLine)) {
                        LOG.info("DefaultBHGERMAStatusService headerCustomerNumber " + headerCustomerNumber + " headerProductLine " + rmaProductLine + " is not matching with the logged in user product line " + productLine);
                        continue;
                    } else {
                        LOG.info("DefaultBHGERMAStatusService headerCustomerNumber " + headerCustomerNumber + " headerProductLine " + rmaProductLine + " is matching with the logged in user product line " + productLine);
                        isWrongProductline = Boolean.FALSE;
                    }
                    rmaHeaders.add(headerStatusData);
                    LOG.info("RMA is set in RMAHeaders");
                }
            }
            if(isInternalUser){
                LOG.info("is an internalUser"+isInternalUser);
                isWrongCustomer = Boolean.FALSE;
            }
            RMAErrorData rmaErrorData = new RMAErrorData();
            rmaErrorData.setWrongStore(isWrongProductline);
            rmaErrorData.setWrongCustomer(isWrongCustomer);
             if(isWrongProductline)
            {
                rmaErrorData.setWrongStore(true);
            }
            if(isWrongCustomer)
            {
                rmaErrorData.setWrongCustomer(true);
            }
            bhgeRmaStatusData.setRmaError(rmaErrorData);
        }
		else
		{
			rmaHeaders = prepareRmaHeaderStatusDataForGuestRFC(zHYBRmaSTATUSRes);
			//rmaHeaders = prepareRmaHeaderStatusData(function);
		}

		bhgeRmaStatusData.setRmaHeaderStatusDetails(rmaHeaders);
		//bhgeRmaStatusData.setBaseCustomerAccount(getSoldTo());
		//bhgeRmaStatusData.setCustomerAccounts(fetchCustomerList());
		//bhgeRmaStatusData.setRmaStatusCount(getRmaStatusCount(bhgeRmaStatusData.getRmaHeaderStatusDetails()));
		//bhgeRmaStatusData.setProductLines(getProductLineData(bhgeRmaStatusData.getRmaHeaderStatusDetails()));
		bhgeRmaStatusData.setRmaErrorMessageDetails(errorMessage);


		return bhgeRmaStatusData;
	}


	private BHGERmaStatusData processRmaStatusData(final JCoFunction function) throws ParseException
	{
		final BHGERmaStatusData bhgeRmaStatusData = new BHGERmaStatusData();
		final UserModel user = userService.getCurrentUser();
		List<RmaHeaderStatusData> rmaHeaders = null;
		final RmaErrorMessageData errorMessage = prepareRmaErrorMessageData(function);

		if (user instanceof GEEdgeCustomerModel)
		{
			rmaHeaders = prepareRmaHeaderStatusData(function);
		}
		else
		{
			rmaHeaders = prepareRmaHeaderStatusDataForGuest(function);
			//rmaHeaders = prepareRmaHeaderStatusData(function);
		}

		bhgeRmaStatusData.setRmaHeaderStatusDetails(rmaHeaders);
		//bhgeRmaStatusData.setBaseCustomerAccount(getSoldTo());
		//bhgeRmaStatusData.setCustomerAccounts(fetchCustomerList());
		//bhgeRmaStatusData.setRmaStatusCount(getRmaStatusCount(bhgeRmaStatusData.getRmaHeaderStatusDetails()));
		//bhgeRmaStatusData.setProductLines(getProductLineData(bhgeRmaStatusData.getRmaHeaderStatusDetails()));
		bhgeRmaStatusData.setRmaErrorMessageDetails(errorMessage);


		return bhgeRmaStatusData;
	}


	private List<RmaHeaderStatusData> prepareRmaHeaderStatusDataForGuestRFC(final ZHYBRmaSTATUSRes zhybRmaSTATUSRes) throws ParseException
	{
		LOG.info("****Inside prepareRmaHeaderStatusDataForGuestRFC *****");
		final List<RmaHeaderStatusData> rmaHeaderStatusDataTable = new ArrayList<>();
		//final JCoTable rmaHeaderStatusTable = zhybRmaSTATUSRes.getTableParameterList().getTable(BhgeCoreConstants.ET_HEADER_STATUS);
		final List<ZRmaStatusRequest$Item> rmaHeaderStatusTable =
				zhybRmaSTATUSRes.getEt_HEADER_STATUS() != null && CollectionUtils.isNotEmpty(zhybRmaSTATUSRes.getEt_HEADER_STATUS().getItems())
						? zhybRmaSTATUSRes.getEt_HEADER_STATUS().getItems() : Collections.EMPTY_LIST;
		final int rowCount = rmaHeaderStatusTable.size();

		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				boolean cancelledItemThere = false;
				final RmaHeaderStatusData rmaHeaderStatusData = new RmaHeaderStatusData();

				final String rmaNumber = rmaHeaderStatusTable.get(i).getRma_num();
				LOG.info("******** RmaNumber - prepareRmaHeaderStatusDataForGuestRFC *********" +rmaNumber);
				if (StringUtils.isNotEmpty(rmaNumber) && StringUtils.isNotBlank(rmaNumber))
				{
					rmaHeaderStatusData.setRmaNumber(rmaNumber);
					rmaHeaderStatusData.setEntryNumber(String.valueOf(i));
					rmaHeaderStatusData
							.setPurchaseOrderNumber(rmaHeaderStatusTable.get(i).getPo_num());
					rmaHeaderStatusData.setZrasOrderNumber(zhybRmaSTATUSRes.getzRAOrdNum());

					if (rmaHeaderStatusData.getPurchaseOrderNumber() == "" || rmaHeaderStatusData.getPurchaseOrderNumber() == null)
					{
						rmaHeaderStatusData.setPurchaseOrderNumber("");
					}
					rmaHeaderStatusData.setPurchaseOrderDate(rmaHeaderStatusTable.get(i).getPo_date());
					rmaHeaderStatusData.setRmaStatus((rmaHeaderStatusTable.get(i).getRms_status()));
					if (rmaHeaderStatusData.getRmaStatus().contains("CANCELLED"))
					{
						cancelledItemThere = true;
					}

					rmaHeaderStatusData.setReturnSite(getPlantName(rmaHeaderStatusTable.get(i).getReturn_site()));
					if (rmaHeaderStatusData.getReturnSite() == null || StringUtil.isEmpty(rmaHeaderStatusData.getReturnSite())
							|| rmaHeaderStatusData.getReturnSite() == "")
					{
						rmaHeaderStatusData.setReturnSite("");
					}
					rmaHeaderStatusData.setShippingMethod(rmaHeaderStatusTable.get(i).getShipping_method());
					rmaHeaderStatusData.setCustomerAcct(rmaHeaderStatusTable.get(i).getCustomer_account());
					rmaHeaderStatusData.setName(rmaHeaderStatusTable.get(i).getName1());
					rmaHeaderStatusData.setSalesOrderNumber(rmaHeaderStatusTable.get(i).getSales_order());
					rmaHeaderStatusData.setRmaCreatedDate(rmaHeaderStatusTable.get(i).getRma_created_date());
					rmaHeaderStatusData.setLastUpdatedDate(rmaHeaderStatusTable.get(i).getLast_updated_DATE());
					rmaHeaderStatusData.setIncoterms(rmaHeaderStatusTable.get(i).getIncoterms());
					rmaHeaderStatusData.setShippingAddress(rmaHeaderStatusTable.get(i).getShipping_address());
					rmaHeaderStatusData.setBlockID(rmaHeaderStatusTable.get(i).getBlk_id());
					rmaHeaderStatusData.setBlockText(rmaHeaderStatusTable.get(i).getBlk_txt());
					rmaHeaderStatusData.setCreatedBy(rmaHeaderStatusTable.get(i).getCreated_by());
					rmaHeaderStatusData.setCustAddress(rmaHeaderStatusTable.get(i).getCust_address());
					rmaHeaderStatusData.setNetPrice("");
					rmaHeaderStatusData.setCurrency("");

					rmaHeaderStatusData.setEndUser("");
					rmaHeaderStatusData.setSalesOrg("");
					rmaHeaderStatusData.setDivision("");
					rmaHeaderStatusData.setDistributionChannel("");
					rmaHeaderStatusData.setSalesArea("");
					rmaHeaderStatusData.setPaymentTerm("");

					String soldToName = fetchSoldToNameFromOrder(rmaHeaderStatusTable.get(i).getCustomer_account());
					rmaHeaderStatusData.setSoldToName(soldToName);

					rmaHeaderStatusData.setRmaItemStatusDetails(prepareRmaItemStatusDataForGuestRFC(zhybRmaSTATUSRes,
							rmaHeaderStatusData.getRmaNumber(), rmaHeaderStatusData.getSalesOrderNumber()));

					if (rmaHeaderStatusData.getRmaItemStatusDetails().size() == 0)
					{
						cancelledItemThere = true;
					}

					rmaHeaderStatusData.setProductLine(fetchProductLineForHeader(rmaHeaderStatusData.getRmaItemStatusDetails()));

					rmaHeaderStatusData.setItemCount(rmaHeaderStatusData.getRmaItemStatusDetails().size());

					if (cancelledItemThere == false)
					{
						rmaHeaderStatusDataTable.add(rmaHeaderStatusData);
					}


				}
		//		rmaHeaderStatusTable.nextRow();
			}
			return rmaHeaderStatusDataTable;
		}
		else
		{
			return null;
		}
	}

	private List<RmaHeaderStatusData> prepareRmaHeaderStatusDataForGuest(final JCoFunction function) throws ParseException
	{
		final List<RmaHeaderStatusData> rmaHeaderStatusDataTable = new ArrayList<>();
		final JCoTable rmaHeaderStatusTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_HEADER_STATUS);
		final int rowCount = rmaHeaderStatusTable.getNumRows();

		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				boolean cancelledItemThere = false;
				final RmaHeaderStatusData rmaHeaderStatusData = new RmaHeaderStatusData();

				final String rmaNumber = rmaHeaderStatusTable.getString(BhgeCoreConstants.RMA_NUMBER);
				if (StringUtils.isNotEmpty(rmaNumber) && StringUtils.isNotBlank(rmaNumber))
				{
					rmaHeaderStatusData.setRmaNumber(rmaNumber);
					rmaHeaderStatusData.setEntryNumber(String.valueOf(i));
					rmaHeaderStatusData
							.setPurchaseOrderNumber(rmaHeaderStatusTable.getString(BhgeCoreConstants.PURCHASE_ORDER_NUMBER));

					if (rmaHeaderStatusData.getPurchaseOrderNumber() == "" || rmaHeaderStatusData.getPurchaseOrderNumber() == null)
					{
						rmaHeaderStatusData.setPurchaseOrderNumber("");
					}
					rmaHeaderStatusData.setPurchaseOrderDate(rmaHeaderStatusTable.getString(BhgeCoreConstants.PURCHASE_ORDER_DATE));
					rmaHeaderStatusData.setRmaStatus((rmaHeaderStatusTable.getString(BhgeCoreConstants.RMA_STATUS)));
					if (rmaHeaderStatusData.getRmaStatus().contains("CANCELLED"))
					{
						cancelledItemThere = true;
					}

					rmaHeaderStatusData.setReturnSite(getPlantName(rmaHeaderStatusTable.getString(BhgeCoreConstants.RETURN_SITE)));
					if (rmaHeaderStatusData.getReturnSite() == null || StringUtil.isEmpty(rmaHeaderStatusData.getReturnSite())
							|| rmaHeaderStatusData.getReturnSite() == "")
					{
						rmaHeaderStatusData.setReturnSite("");
					}
					rmaHeaderStatusData.setShippingMethod(rmaHeaderStatusTable.getString(BhgeCoreConstants.SHIPPING_METHOD));
					rmaHeaderStatusData.setCustomerAcct(rmaHeaderStatusTable.getString(BhgeCoreConstants.CUSTOMER_ACCT));
					rmaHeaderStatusData.setName(rmaHeaderStatusTable.getString(BhgeCoreConstants.NAME));
					rmaHeaderStatusData.setSalesOrderNumber(rmaHeaderStatusTable.getString(BhgeCoreConstants.SALES_ORDER));
					rmaHeaderStatusData.setRmaCreatedDate(rmaHeaderStatusTable.getString(BhgeCoreConstants.RMA_CREATED_DATE));
					rmaHeaderStatusData.setLastUpdatedDate(rmaHeaderStatusTable.getString(BhgeCoreConstants.LAST_UPDATED_DATE));
					rmaHeaderStatusData.setIncoterms(rmaHeaderStatusTable.getString(BhgeCoreConstants.INCOTERMS));
					rmaHeaderStatusData.setShippingAddress(rmaHeaderStatusTable.getString(BhgeCoreConstants.SHIPPING_ADDRESS));
					rmaHeaderStatusData.setBlockID(rmaHeaderStatusTable.getString(BhgeCoreConstants.BLOCK_ID));
					rmaHeaderStatusData.setBlockText(rmaHeaderStatusTable.getString(BhgeCoreConstants.BLOCK_TEXT));

					rmaHeaderStatusData.setNetPrice("");
					rmaHeaderStatusData.setCurrency("");

					rmaHeaderStatusData.setEndUser("");
					rmaHeaderStatusData.setSalesOrg("");
					rmaHeaderStatusData.setDivision("");
					rmaHeaderStatusData.setDistributionChannel("");
					rmaHeaderStatusData.setSalesArea("");
					rmaHeaderStatusData.setPaymentTerm("");

					String soldToName = fetchSoldToNameFromOrder(rmaHeaderStatusTable.getString(BhgeCoreConstants.CUSTOMER_ACCT));
					rmaHeaderStatusData.setSoldToName(soldToName);


					rmaHeaderStatusData.setRmaItemStatusDetails(prepareRmaItemStatusDataForGuest(function,
							rmaHeaderStatusData.getRmaNumber(), rmaHeaderStatusData.getSalesOrderNumber()));

					if (rmaHeaderStatusData.getRmaItemStatusDetails().size() == 0)
					{
						cancelledItemThere = true;
					}

					rmaHeaderStatusData.setProductLine(fetchProductLineForHeader(rmaHeaderStatusData.getRmaItemStatusDetails()));

					rmaHeaderStatusData.setItemCount(rmaHeaderStatusData.getRmaItemStatusDetails().size());

					if (cancelledItemThere == false)
					{
						rmaHeaderStatusDataTable.add(rmaHeaderStatusData);
					}


				}
				rmaHeaderStatusTable.nextRow();
			}
			return rmaHeaderStatusDataTable;
		}
		else
		{
			return null;
		}
	}



	private List<RmaItemStatusData> prepareRmaItemStatusDataForGuestRFC(final ZHYBRmaSTATUSRes zhybRmaSTATUSRes, final String rmaNumber,
																	 final String salesOrderNumber) throws ParseException
	{
		final List<RmaItemStatusData> rmaItemStatusDataTable = new ArrayList<>();
		//final JCoTable rmaItemStatusTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_ITEM_STATUS);
		final List<ZRmaStatusRequest$Item> rmaItemStatusTable =
				zhybRmaSTATUSRes.getEt_ITEM_STATUS() != null && CollectionUtils.isNotEmpty(zhybRmaSTATUSRes.getEt_ITEM_STATUS().getItems())
						? zhybRmaSTATUSRes.getEt_ITEM_STATUS().getItems() : Collections.EMPTY_LIST;
		final int rowCount = rmaItemStatusTable.size();
		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				boolean cancelledItemThere = false;
				final RmaItemStatusData rmaItemStatusData = new RmaItemStatusData();

				rmaItemStatusData.setRmaNumber(rmaItemStatusTable.get(i).getRma_num());

				if (rmaNumber.equalsIgnoreCase(rmaItemStatusData.getRmaNumber()))
				{
					rmaItemStatusData.setLineNumber(rmaItemStatusTable.get(i).getLine_no());
					rmaItemStatusData.setPartNumber(rmaItemStatusTable.get(i).getPart_num());
					rmaItemStatusData.setPartName(rmaItemStatusTable.get(i).getPart_descr());
					rmaItemStatusData.setQuantity(getQtyValue(rmaItemStatusTable.get(i).getQuan()));
					rmaItemStatusData.setRmaStatus(rmaItemStatusTable.get(i).getRms_status());
					rmaItemStatusData.setReqDate(rmaItemStatusTable.get(i).getReq_date());
					rmaItemStatusData.setComments(rmaItemStatusTable.get(i).getComments());
					rmaItemStatusData.setListPrice(rmaItemStatusTable.get(i).getList_price());
					rmaItemStatusData.setDiscount(rmaItemStatusTable.get(i).getDiscount());
					rmaItemStatusData.setDiscPercent(rmaItemStatusTable.get(i).getDisc_percent());

					if (rmaItemStatusData.getRmaStatus().contains(CANCELLED) || rmaItemStatusData.getQuantity() == "0")
					{
						cancelledItemThere = true;
					}
					rmaItemStatusData.setShipToAddress(rmaItemStatusTable.get(i).getShip_to());
					rmaItemStatusData.setPromisedShipDate(rmaItemStatusTable.get(i).getProm_ship_dt());
					rmaItemStatusData.setActualShipDate(rmaItemStatusTable.get(i).getActual_ship_dt());
					rmaItemStatusData.setRepairReason(rmaItemStatusTable.get(i).getRepair_reason());
					rmaItemStatusData.setPartSerialNumber(rmaItemStatusTable.get(i).getSerial_num());
					if(StringUtils.isNotEmpty(rmaItemStatusTable.get(i).getService_off())){
						rmaItemStatusData
								.setServiceOffering((rmaItemStatusTable.get(i).getService_off()).replaceAll(",", ";"));

					}
					rmaItemStatusData.setDeliveryNumber(rmaItemStatusTable.get(i).getOutbound_del_nr());

					final String courierNumber = rmaItemStatusTable.get(i).getCarrier();
					if (courierNumber != null || StringUtils.isBlank(courierNumber) || StringUtils.isEmpty(courierNumber))
					{
						rmaItemStatusData.setCarrierDetails(getCourierNameForCode(courierNumber));
					}

					rmaItemStatusData.setTrackingNo(rmaItemStatusTable.get(i).getTracking_no());

					rmaItemStatusData.setProductHierarchy(rmaItemStatusTable.get(i).getProduct_heirarchy());
					rmaItemStatusData.setProductLine(defineProductLine(rmaItemStatusData.getProductHierarchy()));


					rmaItemStatusData.setManufacturingYear("");
					rmaItemStatusData.setAccessoriesList("");
					rmaItemStatusData.setServiceNotes("");
					rmaItemStatusData.setWarrantyCLaimInformation("");
					rmaItemStatusData.setNetPrice("");
					rmaItemStatusData.setCurrency("");
					rmaItemStatusData.setRmaDeliveryLineDetails(
							prepareRmaDeliveryLineDataRFC(zhybRmaSTATUSRes, rmaItemStatusData.getLineNumber(), salesOrderNumber));

					if (cancelledItemThere == false)
					{
						rmaItemStatusDataTable.add(rmaItemStatusData);
					}

					rmaItemStatusDataTable.size();
				}
//				rmaItemStatusTable.nextRow();
			}
			return rmaItemStatusDataTable;
		}
		else
		{
			return null;
		}
	}

	private List<RmaItemStatusData> prepareRmaItemStatusDataForGuest(final JCoFunction function, final String rmaNumber,
																	 final String salesOrderNumber) throws ParseException
	{
		final List<RmaItemStatusData> rmaItemStatusDataTable = new ArrayList<>();
		final JCoTable rmaItemStatusTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_ITEM_STATUS);
		final int rowCount = rmaItemStatusTable.getNumRows();
		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				boolean cancelledItemThere = false;
				final RmaItemStatusData rmaItemStatusData = new RmaItemStatusData();

				rmaItemStatusData.setRmaNumber(rmaItemStatusTable.getString(BhgeCoreConstants.RMA_NUMBER));

				if (rmaNumber.equalsIgnoreCase(rmaItemStatusData.getRmaNumber()))
				{
					rmaItemStatusData.setLineNumber(rmaItemStatusTable.getString(BhgeCoreConstants.LINE_ITEM_NUMBER));
					rmaItemStatusData.setPartNumber(rmaItemStatusTable.getString(BhgeCoreConstants.PART_NUMBER));
					rmaItemStatusData.setPartName(rmaItemStatusTable.getString(BhgeCoreConstants.PART_DESCRIPTION));
					rmaItemStatusData.setQuantity(getQtyValue(rmaItemStatusTable.getString(BhgeCoreConstants.QUAN)));
					rmaItemStatusData.setRmaStatus(rmaItemStatusTable.getString(BhgeCoreConstants.RMA_STATUS));

					if (rmaItemStatusData.getRmaStatus().contains(CANCELLED) || rmaItemStatusData.getQuantity() == "0")
					{
						cancelledItemThere = true;
					}
					rmaItemStatusData.setShipToAddress(rmaItemStatusTable.getString(BhgeCoreConstants.SHIP_TO_ADDRESS));
					rmaItemStatusData.setPromisedShipDate(rmaItemStatusTable.getString(BhgeCoreConstants.PROMISED_SHIP_DATE));
					rmaItemStatusData.setActualShipDate(rmaItemStatusTable.getString(BhgeCoreConstants.ACTUAL_SHIP_DATE));
					rmaItemStatusData.setRepairReason(rmaItemStatusTable.getString(BhgeCoreConstants.REPAIR_REASON));
					rmaItemStatusData.setPartSerialNumber(rmaItemStatusTable.getString(BhgeCoreConstants.PART_SERIAL_NUMBER));
					rmaItemStatusData
							.setServiceOffering((rmaItemStatusTable.getString(BhgeCoreConstants.SERVICE_OFFERING)).replaceAll(",", ";"));

					rmaItemStatusData.setDeliveryNumber(rmaItemStatusTable.getString(BhgeCoreConstants.DELIVERY_NUMBER));

					final String courierNumber = rmaItemStatusTable.getString(BhgeCoreConstants.CARRIER_DETAILS);
					if (courierNumber != null || StringUtils.isBlank(courierNumber) || StringUtils.isEmpty(courierNumber))
					{
						rmaItemStatusData.setCarrierDetails(getCourierNameForCode(courierNumber));
					}

					rmaItemStatusData.setTrackingNo(rmaItemStatusTable.getString(BhgeCoreConstants.TRACKING_NO));

					rmaItemStatusData.setProductHierarchy(rmaItemStatusTable.getString(BhgeCoreConstants.PRODUCT_HIERARCHY));
					rmaItemStatusData.setProductLine(defineProductLine(rmaItemStatusData.getProductHierarchy()));


					rmaItemStatusData.setManufacturingYear("");
					rmaItemStatusData.setAccessoriesList("");
					rmaItemStatusData.setServiceNotes("");
					rmaItemStatusData.setWarrantyCLaimInformation("");
					rmaItemStatusData.setNetPrice("");
					rmaItemStatusData.setCurrency("");
					rmaItemStatusData.setRmaDeliveryLineDetails(
							prepareRmaDeliveryLineData(function, rmaItemStatusData.getLineNumber(), salesOrderNumber));

					if (cancelledItemThere == false)
					{
						rmaItemStatusDataTable.add(rmaItemStatusData);
					}

					rmaItemStatusDataTable.size();
				}
				rmaItemStatusTable.nextRow();
			}
			return rmaItemStatusDataTable;
		}
		else
		{
			return null;
		}
	}

	public RmaStatusCountData getRmaStatusCount(final List<RmaHeaderStatusData> rmaHeaders) {
		final RmaStatusCountData rmaStatusCountData = new RmaStatusCountData();

		if (rmaHeaders == null || rmaHeaders.isEmpty()) {
			return rmaStatusCountData; // all counts default to 0
		}

		Map<String, Long> statusCounts = rmaHeaders.stream()
				.map(RmaHeaderStatusData::getRmaStatus)
				.map(status -> status == null ? "CANCELLED" : status.toUpperCase())
				.collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

		long rmaSubmittedCount = statusCounts.getOrDefault(RMA_SUBMITTED, 0L);
		long awaitingGoodsCount = statusCounts.getOrDefault(AWAITING_GOODS, 0L);
		long evaluatingCount   = statusCounts.getOrDefault(EVALUATING, 0L);
		long processingCount   = statusCounts.getOrDefault(PROCESSING, 0L);
		long inShippingCount   = statusCounts.getOrDefault(IN_SHIPPING, 0L);
		long completeCount     = statusCounts.getOrDefault(COMPLETE, 0L);
		long cancelledCount    = statusCounts.getOrDefault("CANCELLED", 0L);

		long allRMACount = rmaSubmittedCount + awaitingGoodsCount + evaluatingCount +
				processingCount + inShippingCount + completeCount + cancelledCount;

		rmaStatusCountData.setAllRmaCount(allRMACount);
		rmaStatusCountData.setRmaSubmittedCount(rmaSubmittedCount);
		rmaStatusCountData.setAwaitingGoodsCount(awaitingGoodsCount);
		rmaStatusCountData.setEvaluatingCount(evaluatingCount);
		rmaStatusCountData.setProcessingCount(processingCount);
		rmaStatusCountData.setInShippingCount(inShippingCount);
		rmaStatusCountData.setCompleteCount(completeCount);
		rmaStatusCountData.setCancelledCount(cancelledCount);

		return rmaStatusCountData;
	}

	private List<RmaHeaderStatusData> prepareRmaHeaderStatusDataRFC(final ZHYBRmaSTATUSRes zHYBRmaSTATUSRes) throws ParseException {
		LOG.info("****Inside prepareRmaHeaderStatusDataRFC *****");
		final List<RmaHeaderStatusData> rmaHeaderStatusDataTable = new ArrayList<>();
		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		final B2BUnitModel defaultB2bUnit = currentUser.getDefaultB2BUnit();
		String customerNumberOfUser=defaultB2bUnit.getUid().split("_")[0];

		if (zHYBRmaSTATUSRes.getEt_HEADER_STATUS() == null
				|| CollectionUtils.isEmpty(zHYBRmaSTATUSRes.getEt_HEADER_STATUS().getItems())) {
			return Collections.emptyList();
		}

		return zHYBRmaSTATUSRes.getEt_HEADER_STATUS().getItems().stream()
				.filter(item -> StringUtils.isNotBlank(item.getRma_num())) // only valid RMA numbers
				.map(item -> {
					RmaHeaderStatusData data = new RmaHeaderStatusData();
					LOG.info("******** RmaNumber - prepareRmaHeaderStatusDataRFC *********" +item.getRma_num());
					data.setRmaNumber(item.getRma_num());
					data.setEntryNumber(String.valueOf(item.hashCode())); // or index if needed
					data.setPurchaseOrderNumber(Optional.ofNullable(item.getPo_num()).orElse(""));
					data.setPurchaseOrderDate(item.getPo_date());
					data.setZrasOrderNumber(item.getSales_order());

					data.setRmaStatus(item.getRms_status());
					boolean cancelledItemThere = Optional.ofNullable(item.getRms_status())
							.map(status -> status.contains("CANCELLED"))
							.orElse(false);

					data.setReturnSite(Optional.ofNullable(getPlantName(item.getReturn_site())).orElse(""));
					data.setCreatedBy(item.getCreated_by());
					data.setCustAddress(item.getCust_address());
					data.setShippingMethod(item.getShipping_method());
					data.setCustomerAcct(item.getCustomer_account());
					data.setName(item.getName1());
					data.setShippingAddress(item.getShipping_address());
					data.setNetPrice(item.getNet_price());
					data.setCurrency(getCurrencyForCode(item.getCurrency()));
					data.setSalesOrderNumber(item.getSales_order());
					data.setBlockID(item.getBlk_id());
					data.setBlockText(item.getBlk_txt());
					data.setEndUser(item.getEndUser());
					data.setRmaCreatedDate(item.getRma_created_date());
					data.setLastUpdatedDate(item.getLast_updated_DATE());
					data.setIncoterms(item.getIncoterms());

					data.setSalesOrg(item.getVkorg());
					data.setDivision(item.getSpart());
					data.setDistributionChannel(item.getVtweg());

					if (Stream.of(data.getSalesOrg(), data.getDivision(), data.getDistributionChannel())
							.allMatch(StringUtils::isEmpty)) {
						data.setSalesArea("");
					} else {
						String salesAreaCode = String.join("_", data.getSalesOrg(), data.getDivision(), data.getDistributionChannel());
						data.setSalesArea(getSalesAreaValue(salesAreaCode, data.getCustomerAcct()));
					}

					data.setPaymentTerm(item.getZterm());
					data.setSoldToName(fetchSoldToNameFromOrder(item.getCustomer_account()));

					List<RmaItemStatusData> itemStatusDetails = null;
					try {
						itemStatusDetails = prepareRmaItemStatusDataRFC(zHYBRmaSTATUSRes, data.getRmaNumber(), data.getSalesOrderNumber());
					} catch (ParseException e) {
						LOG.info("Error parsing RMA Item Status Data");
						throw new RuntimeException(e);
					}
					data.setRmaItemStatusDetails(itemStatusDetails);

					if (itemStatusDetails.isEmpty()) {
						cancelledItemThere = true;
					}


					data.setProductLine(fetchProductLineForHeader(itemStatusDetails));

					data.setItemCount(itemStatusDetails.size());

					return cancelledItemThere  ? null  : data;
				})
				.filter(Objects::nonNull) // remove cancelled items
				.collect(Collectors.toList());

	}

	private List<RmaHeaderStatusData> prepareRmaHeaderStatusData(final JCoFunction function) throws ParseException {
		final JCoTable rmaHeaderStatusTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_HEADER_STATUS);
		final int rowCount = rmaHeaderStatusTable.getNumRows();

		if (rowCount == 0) {
			return Collections.emptyList();
		}

		List<RmaHeaderStatusData> result = new ArrayList<>(rowCount);

		for (int i = 0; i < rowCount; i++) {
			rmaHeaderStatusTable.setRow(i);

			String rmaNumber = rmaHeaderStatusTable.getString(BhgeCoreConstants.RMA_NUMBER);
			if (StringUtils.isBlank(rmaNumber)) {
				continue; // skip invalid rows
			}

			RmaHeaderStatusData data = new RmaHeaderStatusData();
			data.setRmaNumber(rmaNumber);
			data.setEntryNumber(String.valueOf(i));

			// Purchase order
			data.setPurchaseOrderNumber(
					Objects.requireNonNullElse(rmaHeaderStatusTable.getString(BhgeCoreConstants.PURCHASE_ORDER_NUMBER), "")
			);
			data.setPurchaseOrderDate(rmaHeaderStatusTable.getString(BhgeCoreConstants.PURCHASE_ORDER_DATE));

			// Status
			String status = rmaHeaderStatusTable.getString(BhgeCoreConstants.RMA_STATUS);
			data.setRmaStatus(status);
			boolean cancelled = status != null && status.contains("CANCELLED");

			// Return site
			data.setReturnSite(
					Optional.ofNullable(getPlantName(rmaHeaderStatusTable.getString(BhgeCoreConstants.RETURN_SITE)))
							.filter(StringUtils::isNotBlank)
							.orElse("")
			);

			// Simple mappings
			data.setShippingMethod(rmaHeaderStatusTable.getString(BhgeCoreConstants.SHIPPING_METHOD));
			data.setCustomerAcct(rmaHeaderStatusTable.getString(BhgeCoreConstants.CUSTOMER_ACCT));
			data.setName(rmaHeaderStatusTable.getString(BhgeCoreConstants.NAME));
			data.setShippingAddress(rmaHeaderStatusTable.getString(BhgeCoreConstants.SHIPPING_ADDRESS));
			data.setNetPrice(rmaHeaderStatusTable.getString(BhgeCoreConstants.NET_PRICE));
			data.setCurrency(getCurrencyForCode(rmaHeaderStatusTable.getString(BhgeCoreConstants.CURRENCY)));
			data.setSalesOrderNumber(rmaHeaderStatusTable.getString(BhgeCoreConstants.SALES_ORDER));
			data.setBlockID(rmaHeaderStatusTable.getString(BhgeCoreConstants.BLOCK_ID));
			data.setBlockText(rmaHeaderStatusTable.getString(BhgeCoreConstants.BLOCK_TEXT));
			data.setEndUser(rmaHeaderStatusTable.getString(BhgeCoreConstants.ENDUSER));
			data.setRmaCreatedDate(rmaHeaderStatusTable.getString(BhgeCoreConstants.RMA_CREATED_DATE));
			data.setLastUpdatedDate(rmaHeaderStatusTable.getString(BhgeCoreConstants.LAST_UPDATED_DATE));
			data.setIncoterms(rmaHeaderStatusTable.getString(BhgeCoreConstants.INCOTERMS));

			// Sales area
			String salesOrg = rmaHeaderStatusTable.getString(BhgeCoreConstants.VKORG);
			String division = rmaHeaderStatusTable.getString(BhgeCoreConstants.SPART);
			String channel = rmaHeaderStatusTable.getString(BhgeCoreConstants.VTWEG);
			data.setDivision(division);
			data.setDistributionChannel(channel);
			if (Stream.of(salesOrg, division, channel).allMatch(StringUtils::isBlank)) {
				data.setSalesArea("");
			} else {
				String salesAreaCode = String.join("_", salesOrg, division, channel);
				data.setSalesArea(getSalesAreaValue(salesAreaCode, data.getCustomerAcct()));
			}

			// Payment & sold-to
			data.setPaymentTerm(rmaHeaderStatusTable.getString(BhgeCoreConstants.ZTERM));
			data.setSoldToName(fetchSoldToNameFromOrder(data.getCustomerAcct()));

			// Item details
			List<RmaItemStatusData> itemDetails = prepareRmaItemStatusData(function, data.getRmaNumber(), data.getSalesOrderNumber());
			data.setRmaItemStatusDetails(itemDetails);

			if (itemDetails.isEmpty()) {
				cancelled = true;
			}

			// Sum net prices
			double totalPrice = itemDetails.stream()
					.mapToDouble(item -> Double.parseDouble(item.getNetPrice()))
					.sum();
			// LOG.info("Total Item Price: {}", totalPrice);

			data.setProductLine(fetchProductLineForHeader(itemDetails));
			data.setItemCount(itemDetails.size());

			if (!cancelled) {
				result.add(data);
			}
		}

		return result;
	}

	private String getSalesAreaValue ( final String salesAreaCode, final String customerAcct)
		{
			final List<B2BUnitModel> salesAreasList = bhgeB2BUnitService.getSalesAreaForB2BUnit(customerAcct);
			//final List<BhgeSalesAreaObject> salesAreaObjList = new ArrayList<BhgeSalesAreaObject>();
			for (final B2BUnitModel salesArea : salesAreasList) {
				//LOG.info("---- CODE: " + salesAreaCode + " -------- DB CODE: " + salesArea.getUid());
				if (salesArea.getUid() != null && salesArea.getUid().contains("_") && salesArea.getUid().contains(salesAreaCode)) {

						final String[] salesAreaArr = salesArea.getUid().split("_");
						if (salesAreaArr.length >= 3) {
							final BhgeSalesAreaObject obj = new BhgeSalesAreaObject();
							final SAPConfigurationModel baseStoreConfiguration = baseStoreService
									.findSAPConfigurationWithParams(salesAreaArr[1], salesAreaArr[2], salesAreaArr[3]);
							if (baseStoreConfiguration != null) {
								final BaseStoreModel baseStore = baseStoreService
										.findBaseStoreBySAPConfiguration(baseStoreConfiguration.getPk().toString());
								if (baseStore != null) {
									obj.setSalesAreaName(baseStore.getName());
									//LOG.info("---------------------------------------------------------------- SALES Area Value : " + obj.getSalesAreaName());
									return obj.getSalesAreaName();
								}
							}
							//obj.setSalesAreaId(salesArea.getUid());
							//salesAreaObjList.add(obj);
						}
					}

			}
			return "";
		}


		protected String getCurrencyForCode ( final String isocode)
		{
			if (StringUtils.isNotBlank(isocode)) {
				final CurrencyModel currencyModel = commonI18NService.getCurrency(isocode);
				if (null != currencyModel) {
					return isocode + " " + currencyModel.getSymbol();
				}
			}
			return "";
		}


		private String getPlantName ( final String plantCode)
		{
			LOG.info("--------------- IN GETPLANT ----------- " + plantCode);
			if (!StringUtils.isEmpty(plantCode)) {
				return bhgeRmaFormDao.getPlantName(plantCode.trim());
			} else {
				return plantCode;
			}
		}

	private String fetchProductLineForHeader(final List<RmaItemStatusData> rmaItemStatusDetails) {
		return rmaItemStatusDetails.stream()
				.map(RmaItemStatusData::getProductLine)   // extract productLine
				.filter(Objects::nonNull)                 // keep only non-null
				.findFirst()                              // first match
				.orElse(null);                            // default if none
	}

	private List<RmaItemStatusData> prepareRmaItemStatusDataRFC(final ZHYBRmaSTATUSRes zHYBRmaSTATUSRes,
																final String rmaNumber,
																final String salesOrderNumber) throws ParseException {
		List<ZRmaStatusRequest$Item> items = Optional.ofNullable(zHYBRmaSTATUSRes.getEt_ITEM_STATUS())
				.map(ZRmaStatusRequest$Item::getItems)
				.orElse(Collections.emptyList());

		if (items.isEmpty()) {
			return Collections.emptyList();
		}

		return items.stream()
				.filter(item -> rmaNumber.equalsIgnoreCase(item.getRma_num())) // only matching RMA
				.map(item -> {
					RmaItemStatusData data = new RmaItemStatusData();
					data.setRmaNumber(item.getRma_num());
					data.setLineNumber(item.getLine_no());
					data.setPartNumber(item.getPart_num());
					data.setPartName(item.getPart_descr());
					data.setQuantity(getQtyValue(item.getQuan()));
					data.setRmaStatus(item.getRms_status());

					boolean cancelled = Optional.ofNullable(data.getRmaStatus())
							.map(status -> status.contains(CANCELLED))
							.orElse(false)
							|| "0".equals(data.getQuantity());

					data.setNetPrice(item.getNet_price());
					data.setCurrency(getCurrencyForCode(item.getCurrency()));
					data.setShipToAddress(item.getShip_to());
					data.setPromisedShipDate(item.getProm_ship_dt());
					data.setDeliveryNumber(item.getOutbound_del_nr());
					data.setActualShipDate(item.getActual_ship_dt());
					data.setReqDate(item.getReq_date());
					data.setComments(item.getComments());
					data.setListPrice(item.getList_price());
					data.setDiscount(item.getDiscount());
					data.setDiscPercent(item.getDisc_percent());

					String courierNumber = item.getCarrier();
					if (StringUtils.isNotBlank(courierNumber)) {
						data.setCarrierDetails(getCourierNameForCode(courierNumber));
					}

					data.setTrackingNo(item.getTracking_no());

					if (StringUtils.isNotEmpty(item.getService_off())) {
						data.setServiceOffering(item.getService_off().replace(",", ";"));
					}

					data.setPartSerialNumber(item.getSerial_num());
					data.setProductHierarchy(item.getProduct_heirarchy());
					data.setProductLine(defineProductLine(data.getProductHierarchy()));
					data.setRepairReason(item.getRepair_reason());
					data.setManufacturingYear(item.getMnf_year());
					data.setAccessoriesList(item.getAccessories_list());
					data.setServiceNotes(item.getService_notes());
					data.setWarrantyCLaimInformation(item.getWarranty_claim_info());

					try {
						data.setRmaDeliveryLineDetails(
								prepareRmaDeliveryLineDataRFC(zHYBRmaSTATUSRes, data.getLineNumber(), salesOrderNumber)
						);
					} catch (ParseException e) {
						LOG.info("Error parsing RMA Delivery Line Data");
						throw new RuntimeException(e);
					}

					return cancelled ? null : data;
				})
				.filter(Objects::nonNull) // remove cancelled items
				.collect(Collectors.toList());
	}

	private List<RmaItemStatusData> prepareRmaItemStatusData(final JCoFunction function,
															 final String rmaNumber,
															 final String salesOrderNumber) throws ParseException {
		JCoTable table = function.getTableParameterList().getTable(BhgeCoreConstants.ET_ITEM_STATUS);
		int rowCount = table.getNumRows();

		if (rowCount == 0) {
			return Collections.emptyList();
		}

		List<RmaItemStatusData> result = new ArrayList<>(rowCount);

		for (int i = 0; i < rowCount; i++) {
			table.setRow(i);

			String currentRmaNumber = table.getString(BhgeCoreConstants.RMA_NUMBER);
			if (!rmaNumber.equalsIgnoreCase(currentRmaNumber)) {
				continue;
			}

			RmaItemStatusData data = new RmaItemStatusData();
			data.setRmaNumber(currentRmaNumber);
			data.setLineNumber(table.getString(BhgeCoreConstants.LINE_ITEM_NUMBER));
			data.setPartNumber(table.getString(BhgeCoreConstants.PART_NUMBER));
			data.setPartName(table.getString(BhgeCoreConstants.PART_DESCRIPTION));
			data.setQuantity(getQtyValue(table.getString(BhgeCoreConstants.QUAN)));
			data.setRmaStatus(table.getString(BhgeCoreConstants.RMA_STATUS));

			boolean cancelled = Optional.ofNullable(data.getRmaStatus())
					.map(status -> status.contains(CANCELLED))
					.orElse(false)
					|| "0".equals(data.getQuantity());

			data.setNetPrice(table.getString(BhgeCoreConstants.NET_PRICE_ITEM));
			data.setCurrency(getCurrencyForCode(table.getString(BhgeCoreConstants.CURRENCY)));
			data.setShipToAddress(table.getString(BhgeCoreConstants.SHIP_TO_ADDRESS));
			data.setPromisedShipDate(table.getString(BhgeCoreConstants.PROMISED_SHIP_DATE));
			data.setDeliveryNumber(table.getString(BhgeCoreConstants.DELIVERY_NUMBER));
			data.setActualShipDate(table.getString(BhgeCoreConstants.ACTUAL_SHIP_DATE));

			String courierNumber = table.getString(BhgeCoreConstants.CARRIER_DETAILS);
			if (StringUtils.isNotBlank(courierNumber)) {
				data.setCarrierDetails(getCourierNameForCode(courierNumber));
			}

			data.setTrackingNo(table.getString(BhgeCoreConstants.TRACKING_NO));
			String serviceOffering = table.getString(BhgeCoreConstants.SERVICE_OFFERING);
			if (StringUtils.isNotEmpty(serviceOffering)) {
				data.setServiceOffering(serviceOffering.replace(",", ";"));
			}

			data.setPartSerialNumber(table.getString(BhgeCoreConstants.PART_SERIAL_NUMBER));
			data.setProductHierarchy(table.getString(BhgeCoreConstants.PRODUCT_HIERARCHY));
			data.setProductLine(defineProductLine(data.getProductHierarchy()));
			data.setRepairReason(table.getString(BhgeCoreConstants.REPAIR_REASON));
			data.setManufacturingYear(table.getString(BhgeCoreConstants.MNF_YEAR));
			data.setAccessoriesList(table.getString(BhgeCoreConstants.ACCESSORIES_LIST));
			data.setServiceNotes(table.getString(BhgeCoreConstants.SERVICE_NOTES));
			data.setWarrantyCLaimInformation(table.getString(BhgeCoreConstants.WARRANTY_CLAIM_INFO));

			data.setRmaDeliveryLineDetails(
					prepareRmaDeliveryLineData(function, data.getLineNumber(), salesOrderNumber)
			);

			if (!cancelled) {
				result.add(data);
			}
		}

		return result;
	}


	protected String getQtyValue(final String qty)
	{
		if (StringUtils.isNotBlank(qty) && StringUtils.isNotEmpty(qty))
		{
			return String.valueOf(Double.valueOf(qty.trim()).intValue());
		}
		return "";
	}


	private String getCourierNameForCode(final String courier)
	{

		if (StringUtils.isNotBlank(courier))
		{
			final String courierName = bhgeServiceProviderService.getCourierNameForCode(courier);
			return courierName;

		}

		return "";
	}

	private List<RmaDeliveryLineData> prepareRmaDeliveryLineDataRFC(final ZHYBRmaSTATUSRes zHYBRmaSTATUSRes, final String orderLineNumber,
																 final String salesOrderNumber) throws ParseException
	{
		final List<RmaDeliveryLineData> rmaDeliveryLineDataTable = new ArrayList<>();
		//final JCoTable rmaDeliveryLineTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_DELIVERY);
		 final List<ZRmaStatusRequest$Item> rmaDeliveryLineTable =
				zHYBRmaSTATUSRes.getEt_DELIVERY() != null && CollectionUtils.isNotEmpty(zHYBRmaSTATUSRes.getEt_DELIVERY().getItems())
						? zHYBRmaSTATUSRes.getEt_DELIVERY().getItems() : Collections.EMPTY_LIST;

		final int rowCount = rmaDeliveryLineTable.size();
		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				final RmaDeliveryLineData rmaDeliveryLineData = new RmaDeliveryLineData();

				rmaDeliveryLineData.setOrder(rmaDeliveryLineTable.get(i).getOrder());
				rmaDeliveryLineData.setOrderLine(rmaDeliveryLineTable.get(i).getOrder_line());

				if (salesOrderNumber.equalsIgnoreCase(rmaDeliveryLineData.getOrder())
						&& orderLineNumber.equalsIgnoreCase(rmaDeliveryLineData.getOrderLine()))
				{
					rmaDeliveryLineData.setDelivery(rmaDeliveryLineTable.get(i).getDelivery());
					rmaDeliveryLineData.setDeliveryLine(rmaDeliveryLineTable.get(i).getDelivery_line());
					rmaDeliveryLineData.setQuantity(getQtyValue(rmaDeliveryLineTable.get(i).getQuan()));

					final String actShipDate = rmaDeliveryLineTable.get(i).getAct_shp_dt();
					if (StringUtils.isNotBlank(actShipDate) || StringUtils.isNotEmpty(actShipDate))
					{
						final String actualShipDate = (actShipDate.substring(0, 4) + "-" + actShipDate.substring(4, 6) + "-"
								+ actShipDate.substring(6, 8));
						rmaDeliveryLineData.setActualShipDate(actualShipDate);
					}

					rmaDeliveryLineData.setStatus(rmaDeliveryLineTable.get(i).getStatus());

					final String courierNumber = rmaDeliveryLineTable.get(i).getCarrier();
					if (courierNumber != null || StringUtils.isBlank(courierNumber) || StringUtils.isEmpty(courierNumber))
					{
						rmaDeliveryLineData.setCarrier(getCourierNameForCode(courierNumber));
					}
					if (StringUtils.isBlank(rmaDeliveryLineData.getCarrier()))
					{
						rmaDeliveryLineData.setCarrier("");
					}

					rmaDeliveryLineData.setTrackingNo(rmaDeliveryLineTable.get(i).getTracking_no());

					rmaDeliveryLineDataTable.add(rmaDeliveryLineData);
				}
				//rmaDeliveryLineTable.nextRow();
			}
			return rmaDeliveryLineDataTable;
		}

		return null;
	}
	private List<RmaDeliveryLineData> prepareRmaDeliveryLineData(final JCoFunction function, final String orderLineNumber,
																 final String salesOrderNumber) throws ParseException
	{
		final List<RmaDeliveryLineData> rmaDeliveryLineDataTable = new ArrayList<>();
		final JCoTable rmaDeliveryLineTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_DELIVERY);
		final int rowCount = rmaDeliveryLineTable.getNumRows();
		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				final RmaDeliveryLineData rmaDeliveryLineData = new RmaDeliveryLineData();

				rmaDeliveryLineData.setOrder(rmaDeliveryLineTable.getString(BhgeCoreConstants.ORDER));
				rmaDeliveryLineData.setOrderLine(rmaDeliveryLineTable.getString(BhgeCoreConstants.ORDER_LINE));

				if (salesOrderNumber.equalsIgnoreCase(rmaDeliveryLineData.getOrder())
						&& orderLineNumber.equalsIgnoreCase(rmaDeliveryLineData.getOrderLine()))
				{
					rmaDeliveryLineData.setDelivery(rmaDeliveryLineTable.getString(BhgeCoreConstants.DELIVERY));
					rmaDeliveryLineData.setDeliveryLine(rmaDeliveryLineTable.getString(BhgeCoreConstants.DELIVERY_LINE));
					rmaDeliveryLineData.setQuantity(getQtyValue(rmaDeliveryLineTable.getString(BhgeCoreConstants.QUAN)));

					final String actShipDate = rmaDeliveryLineTable.getString(BhgeCoreConstants.ACT_SHP_DT);
					if (StringUtils.isNotBlank(actShipDate) || StringUtils.isNotEmpty(actShipDate))
					{
						final String actualShipDate = (actShipDate.substring(0, 4) + "-" + actShipDate.substring(4, 6) + "-"
								+ actShipDate.substring(6, 8));
						rmaDeliveryLineData.setActualShipDate(actualShipDate);
					}

					rmaDeliveryLineData.setStatus(rmaDeliveryLineTable.getString(BhgeCoreConstants.STATUS));

					final String courierNumber = rmaDeliveryLineTable.getString(BhgeCoreConstants.CARRIER);
					if (courierNumber != null || StringUtils.isBlank(courierNumber) || StringUtils.isEmpty(courierNumber))
					{
						rmaDeliveryLineData.setCarrier(getCourierNameForCode(courierNumber));
					}
					if (StringUtils.isBlank(rmaDeliveryLineData.getCarrier()))
					{
						rmaDeliveryLineData.setCarrier("");
					}

					rmaDeliveryLineData.setTrackingNo(rmaDeliveryLineTable.getString(BhgeCoreConstants.TRACKING_NO));

					rmaDeliveryLineDataTable.add(rmaDeliveryLineData);
				}
				rmaDeliveryLineTable.nextRow();
			}
			return rmaDeliveryLineDataTable;
		}

		return null;
	}
	private RmaErrorMessageData prepareRmaErrorMessageDataRFC(final ZHYBRmaSTATUSRes zhybRmaSTATUSRes)
	{
		final RmaErrorMessageData rmaErrorMessageData = new RmaErrorMessageData();
		//final JCoTable rmaErrorMessageTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_MESSAGETABLE);
		final List<ZRmaStatusRequest$Item> rmaErrorMessageTable =
				zhybRmaSTATUSRes.getEt_messageTable() != null && CollectionUtils.isNotEmpty(zhybRmaSTATUSRes.getEt_messageTable().getItems())
						? zhybRmaSTATUSRes.getEt_messageTable().getItems() : Collections.EMPTY_LIST;
		final int rowCount = rmaErrorMessageTable.size();

		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				//final RmaErrorMessageData rmaErrorMessageData = new RmaErrorMessageData();

				rmaErrorMessageData.setType(rmaErrorMessageTable.get(i).getType());
				rmaErrorMessageData.setId(rmaErrorMessageTable.get(i).getId());
				rmaErrorMessageData.setNumber(rmaErrorMessageTable.get(i).getNumber());
				rmaErrorMessageData.setMessage(rmaErrorMessageTable.get(i).getMessage());
				rmaErrorMessageData.setLogNumber(rmaErrorMessageTable.get(i).getLog_no());
				rmaErrorMessageData.setLogMessageNumber(rmaErrorMessageTable.get(i).getLog_msg_no());
				rmaErrorMessageData.setMessageV1(rmaErrorMessageTable.get(i).getMessage_v1());
				rmaErrorMessageData.setMessageV2(rmaErrorMessageTable.get(i).getMessage_v2());
				rmaErrorMessageData.setMessageV3(rmaErrorMessageTable.get(i).getMessage_v3());
				rmaErrorMessageData.setMessageV4(rmaErrorMessageTable.get(i).getMessage_v4());
				rmaErrorMessageData.setParameter(rmaErrorMessageTable.get(i).getParameter());
				rmaErrorMessageData.setRow(rmaErrorMessageTable.get(i).getParameter());
				rmaErrorMessageData.setField(rmaErrorMessageTable.get(i).getParameter());
				rmaErrorMessageData.setSystem(rmaErrorMessageTable.get(i).getParameter());
			}
		}
		return rmaErrorMessageData;
	}



	private RmaErrorMessageData prepareRmaErrorMessageData(final JCoFunction function)
	{
		final RmaErrorMessageData rmaErrorMessageData = new RmaErrorMessageData();
		final JCoTable rmaErrorMessageTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_MESSAGETABLE);
		final int rowCount = rmaErrorMessageTable.getNumRows();

		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				//final RmaErrorMessageData rmaErrorMessageData = new RmaErrorMessageData();

				rmaErrorMessageData.setType(rmaErrorMessageTable.getString(BhgeCoreConstants.TYPE));
				rmaErrorMessageData.setId(rmaErrorMessageTable.getString(BhgeCoreConstants.ID));
				rmaErrorMessageData.setNumber(rmaErrorMessageTable.getString(BhgeCoreConstants.NUMBER));
				rmaErrorMessageData.setMessage(rmaErrorMessageTable.getString(BhgeCoreConstants.MESSAGE));
				rmaErrorMessageData.setLogNumber(rmaErrorMessageTable.getString(BhgeCoreConstants.LOG_NO));
				rmaErrorMessageData.setLogMessageNumber(rmaErrorMessageTable.getString(BhgeCoreConstants.LOG_MSG_NO));
				rmaErrorMessageData.setMessageV1(rmaErrorMessageTable.getString(BhgeCoreConstants.MESSAGE_V1));
				rmaErrorMessageData.setMessageV2(rmaErrorMessageTable.getString(BhgeCoreConstants.MESSAGE_V2));
				rmaErrorMessageData.setMessageV3(rmaErrorMessageTable.getString(BhgeCoreConstants.MESSAGE_V3));
				rmaErrorMessageData.setMessageV4(rmaErrorMessageTable.getString(BhgeCoreConstants.MESSAGE_V4));
				rmaErrorMessageData.setParameter(rmaErrorMessageTable.getString(BhgeCoreConstants.PARAMETER));
				rmaErrorMessageData.setRow(rmaErrorMessageTable.getString(BhgeCoreConstants.ROW));
				rmaErrorMessageData.setField(rmaErrorMessageTable.getString(BhgeCoreConstants.FIELD));
				rmaErrorMessageData.setSystem(rmaErrorMessageTable.getString(BhgeCoreConstants.SYSTEM));
			}
		}
		return rmaErrorMessageData;
	}


	private String defineProductLine(final String productHeirarchy)
	{
		if (productHeirarchy != null || !productHeirarchy.isEmpty())
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
				PRODUCTLINE_MAP = bhgeRMAStatusDao.loadProductLine();
			}
			return PRODUCTLINE_MAP.get(prodHierarchyCode);
		}
		return null;
	}







	////FETCHING ATTACHMENTDATA FOR RMA NUMBER
	@Override
	public BHGERmaAttachmentData getAttachments(final String rmaNumber, final String flag, final String fileName,
												final String fileType, final String customerNumber)
	{
		LOG.info("Inside get Attachments Service ....");

		try
		{
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			LOG.info("Connection fetched ....");
			if (connection != null && !connection.isBackendOffline())
			{
				LOG.info("Connection finalized ....");

				final JCoFunction function = prepareRequestForAttachments(connection, rmaNumber, flag, fileName, fileType,
						customerNumber);
				connection.execute(function);

				return processResponseForAttachments(function);
			}
		}
		catch (final Exception backEndException)
		{
			LOG.info("Inside catch block with exception: " + backEndException.getMessage());
			backEndException.printStackTrace();
		}

		return null;
	}

	private JCoFunction prepareRequestForAttachments(final JCoConnection connection, final String rmaNumber, final String flag,
													 final String fileName, final String fileType, final String customerNumber) throws BackendException
	{
		LOG.info("Inside prepareRequest For Get Attachments .... rmaNumber: " + rmaNumber);
		final JCoFunction function = setFunctionAndDefaultForAttachments(connection, rmaNumber, flag, fileName, fileType,
				customerNumber);
		LOG.info("RMA ATTACHMENTS REQUEST: " + function.toXML());

		LOG.info(function);
		return function;
	}



	private JCoFunction setFunctionAndDefaultForAttachments(final JCoConnection connection, final String rmaNumber,
															final String flag, final String fileName, final String fileType, String customerNumber) throws BackendException
	{
		LOG.info("RMA ATTACHMENTS Tracking RFC: Setting the Default Input parameters");

		final String rmaAttachmentFunction = Config.getString("SAP_RMA_ATTACHMENTS_FUNCTION", "ZHYB_RMA_NOTIF_DOC_ATTC");
		final JCoFunction function = connection.getFunction(rmaAttachmentFunction);

		LOG.info("--------------------- rmaNumber:" + rmaNumber);
		// setting customer account number
		if (StringUtils.isNotBlank(customerNumber))
		{
			customerNumber = BHGESAPJCoUtils.addLeadingZeros(customerNumber, 10); // Ensuring proper formatted sold to number
			function.getImportParameterList().setValue(BhgeCoreConstants.SAP_CUSTOMER_ACCOUNT_VALUE, customerNumber);
		}
		function.getImportParameterList().setValue(BhgeCoreConstants.NOTIF_NO, rmaNumber);
		function.getImportParameterList().setValue(BhgeCoreConstants.IM_FLAG, flag);
		function.getImportParameterList().setValue(BhgeCoreConstants.FILE_NAME, fileName);
		function.getImportParameterList().setValue(BhgeCoreConstants.FILE_TYPE, fileType);

		LOG.info(function);

		LOG.info("New Function" + function.getImportParameterList());

		LOG.info("--------------------- OUTSIDE SETFUNCTION FOR ATTACHMENTS ---------------------");

		return function;
	}


	private BHGERmaAttachmentData processResponseForAttachments(final JCoFunction function)
	{
		LOG.debug("RMA ATTACHMENTS Response: " + function.toXML());
		return processRmaStatusAttachments(function);
	}


	private BHGERmaAttachmentData processRmaStatusAttachments(final JCoFunction function)
	{
		final BHGERmaAttachmentData attachmentData = new BHGERmaAttachmentData();

		final List<AttachedData> data = prepareAttachmentData(function);
		final RmaErrorMessageData errorMessage = prepareErrorMessageData(function);

		attachmentData.setFileData(data);
		if (attachmentData.getFileData() == null)
		{
			attachmentData.setErrorMessage(errorMessage);
		}

		return attachmentData;

	}


	private List<AttachedData> prepareAttachmentData(final JCoFunction function)
	{
		final List<AttachedData> attData = new ArrayList<>();
		final List<AttachedData> rmaAttachmentDataTable = new ArrayList<>();
		final JCoTable rmaAttachmentTable = function.getExportParameterList().getTable(BhgeCoreConstants.EX_NOTIF_ATTC);
		final int rowCount = rmaAttachmentTable.getNumRows();

		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				final AttachedData data = new AttachedData();
				data.setFileName(rmaAttachmentTable.getString(BhgeCoreConstants.FILE_NAME));
				data.setFileType(rmaAttachmentTable.getString(BhgeCoreConstants.FILE_TYPE));
				data.setHexData(rmaAttachmentTable.getString(BhgeCoreConstants.HEX_DATA));

				rmaAttachmentDataTable.add(data);

				rmaAttachmentTable.nextRow();
			}

		}
		return rmaAttachmentDataTable;
	}


	private RmaErrorMessageData prepareErrorMessageData(final JCoFunction function)
	{
		final RmaErrorMessageData rmaErrorMessageData = new RmaErrorMessageData();
		final JCoTable rmaErrorMessageTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_MESSAGETABLE);

		final int rowCount = rmaErrorMessageTable.getNumRows();

		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				rmaErrorMessageData.setType(rmaErrorMessageTable.getString(BhgeCoreConstants.TYPE));
				rmaErrorMessageData.setId(rmaErrorMessageTable.getString(BhgeCoreConstants.ID));
				rmaErrorMessageData.setNumber(rmaErrorMessageTable.getString(BhgeCoreConstants.NUMBER));
				rmaErrorMessageData.setMessage(rmaErrorMessageTable.getString(BhgeCoreConstants.MESSAGE));
				rmaErrorMessageData.setLogNumber(rmaErrorMessageTable.getString(BhgeCoreConstants.LOG_NO));
				rmaErrorMessageData.setLogMessageNumber(rmaErrorMessageTable.getString(BhgeCoreConstants.LOG_MSG_NO));
				rmaErrorMessageData.setMessageV1(rmaErrorMessageTable.getString(BhgeCoreConstants.MESSAGE_V1));
				rmaErrorMessageData.setMessageV2(rmaErrorMessageTable.getString(BhgeCoreConstants.MESSAGE_V2));
				rmaErrorMessageData.setMessageV3(rmaErrorMessageTable.getString(BhgeCoreConstants.MESSAGE_V3));
				rmaErrorMessageData.setMessageV4(rmaErrorMessageTable.getString(BhgeCoreConstants.MESSAGE_V4));
				rmaErrorMessageData.setParameter(rmaErrorMessageTable.getString(BhgeCoreConstants.PARAMETER));
				rmaErrorMessageData.setRow(rmaErrorMessageTable.getString(BhgeCoreConstants.ROW));
				rmaErrorMessageData.setField(rmaErrorMessageTable.getString(BhgeCoreConstants.FIELD));
				rmaErrorMessageData.setSystem(rmaErrorMessageTable.getString(BhgeCoreConstants.SYSTEM));
			}
		}
		return rmaErrorMessageData;
	}





	//FETCHING RMASTATUS DATA FOR RMA NUMBER
	@Override
	public BHGERmaStatusData getRmaStatusDataForRmaNumber(final String rmaNumber, final String orderType)
	{
		LOG.info("Inside ShareRMA Service ....");

		try
		{
			final ExecutorService executor = Executors.newSingleThreadExecutor();
			final JaloSession currentSession = JaloSession.getCurrentSession();
			final AbstractTenant tenant = (AbstractTenant) Registry.getCurrentTenant();
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			LOG.info("Connection fetched ....");
			if (connection != null && !connection.isBackendOffline())
			{
				LOG.info("Connection finalized ....");
				final int timeout = configurationService.getConfiguration().getInt("bhge.rmastatusforrma.timeout.value", 180);
				LOG.info("The timeout value from the properties is ...." + timeout);

				final JCoFunction function = prepareRequest(connection, rmaNumber, orderType);
				connection.execute(function);
				return processResponse(function);
			}
		}
		catch (final Exception backEndException)
		{
			LOG.info("Inside catch block with exception: " + backEndException.getMessage());
			backEndException.printStackTrace();
		}

		return null;
	}


	private JCoFunction prepareRequest(final JCoConnection connection, final String rmaNumber, final String orderType)
			throws BackendException
	{
		LOG.info("Inside prepareRequest .... rmaNumber: " + rmaNumber + " orderType" + orderType);
		final JCoFunction function = setFunctionAndDefaultForRmaNumber(connection, rmaNumber, orderType);
		LOG.info("RMA STATUS REQUEST FOR CUSTOMER: " + function.toXML());

		LOG.info(function);
		return function;
	}


	private JCoFunction setFunctionAndDefaultForRmaNumber(final JCoConnection connection, final String rmaNumber,
														  final String orderType) throws BackendException
	{
		LOG.info("RMA STATUS Tracking RFC: Setting the Default Input parameters");

		final String rmaStatusFunction = Config.getString("SAP_RMA_STATUS_FUNCTION", "ZHYB_RMA_STATUS");
		final JCoFunction function = connection.getFunction(rmaStatusFunction);

		LOG.info("--------------------- RMA NUMBER:" + rmaNumber);
		LOG.info("--------------------- ORDER TYPE:" + orderType);

		function.getImportParameterList().setValue(BhgeCoreConstants.RMA_NUMBER, rmaNumber);
		function.getImportParameterList().setValue(BhgeCoreConstants.CP_FLAG, orderType);

		LOG.info("New Function" + function.getImportParameterList());

		//LOG.info("--------------------- OUTSIDE SETFUNCTION FOR CUSTOMER ---------------------");

		return function;
	}

	@Override
	public BHGERmaStatusData getRmaStatusDataForRmaNumberRFC(final List<String> customerNumber, final String rmaNumber, final String orderType)
	{
		LOG.info("Inside ShareRMA Service::getRmaStatusDataForRmaNumberRFC Method ::orderType:" + orderType + "rmaNumber" + rmaNumber);
		try {
			//XmlMapper mapper = new XmlMapper();
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_RMA_STATUS_ENDPOINT_URL, flexibleSearchService);
			final ZHYBRmaSTATUSReq zHYBRmaSTATUSReq = createRequestDataForRmaStatusForRmaNumberRFC(customerNumber,rmaNumber, orderType);
			final ZHYBRmaSTATUSRes zHYBRmaSTATUSRes = (ZHYBRmaSTATUSRes) scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, zHYBRmaSTATUSReq,
					ZHYBRmaSTATUSRes.class);
			final BHGERmaStatusData result = processRmaStatusDataRFC(zHYBRmaSTATUSRes);
			return result;
		}

		catch (final Exception backEndException)
		{
			LOG.info("Inside catch block with exception: " + backEndException.getMessage());
			backEndException.printStackTrace();
		}

		return null;
	}


	private ZHYBRmaSTATUSReq createRequestDataForRmaStatusForRmaNumberRFC(final List<String> customerNumber,final String rmaNumber, final String orderType) {
		LOG.info("Inside prepareRequest .... rmaNumber: " + rmaNumber + " --- orderType: " + orderType);
		final ZHYBRmaSTATUSReq zHYBRmaSTATUSReq = new ZHYBRmaSTATUSReq();
		zHYBRmaSTATUSReq.setCpFlag(orderType);
		zHYBRmaSTATUSReq.setRmaNumber(rmaNumber);
		final List<ZRmaStatusRequest$Item> rmaCustomerTable =new ArrayList<ZRmaStatusRequest$Item>();
		/*final List<String> list = new ArrayList<String>();
		list.addAll(customerNumber);*/
		for (final String customer : customerNumber)
		{
			final ZRmaStatusRequest$Item request$Item = new ZRmaStatusRequest$Item();
			request$Item.setCust_num(customer);
			rmaCustomerTable.add(request$Item);
		}
		zHYBRmaSTATUSReq.getCust_NO().setItems(rmaCustomerTable);
		LOG.info("RMA Status Request: " + SCPIConnector.toXML(zHYBRmaSTATUSReq));
		return zHYBRmaSTATUSReq;
	}

	@Override
	public String getSoldTo()
	{
		UserModel currentUser = userService.getCurrentUser();
		if(currentUser != null && currentUser instanceof GEEdgeCustomerModel)
		{
			final GEEdgeCustomerModel geEdgeUser = (GEEdgeCustomerModel) currentUser;
			if(null != geEdgeUser.getDefaultB2BUnit() && geEdgeUser.getDefaultB2BUnit().getUid().contains("_")) {
				return geEdgeUser.getDefaultB2BUnit().getUid().split("_")[0];
			}
		}
		return null;
	}


	@Override
	public String getUserName()
	{
		final BHGESoldToData soldto = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo"));
		if (null != soldto)
		{
			return (soldto.getLocName() + " #" + soldto.getUid());
		}
		return null;
	}







	@Override
	public List<B2BUnitModel> getList() {
		List<String> customerAccountGroups = bhgeB2BUnitService.getCustomerAccountGroupsforB2bUnit();
		GEEdgeCustomerModel customer = (GEEdgeCustomerModel) userService.getCurrentUser();

		if (customer == null || customer.getAllGroups() == null) {
			return Collections.emptyList();
		}

		// Cache the parent UID once
		final String parentUid = Config.getString("ParentB2BUnit", "GEEDGENETPRIMESOLDTO");

		return customer.getAllGroups().stream()
				.flatMap(group -> {
					if (group instanceof B2BUserGroupModel
							&& !group.getUid().equalsIgnoreCase("getescob2busergroup")) {
						LOG.info("The Current group is getescob2busergroup");
						return ((B2BUserGroupModel) group).getGroups().stream();
					}
					return Stream.of(group);
				})
				.filter(g -> g instanceof B2BUnitModel)
				.map(g -> (B2BUnitModel) g)
				.filter(b2bUnit -> isValidB2BUnit(b2bUnit, customerAccountGroups, parentUid))
				.collect(Collectors.toList());
	}

	private boolean isValidB2BUnit(B2BUnitModel unit, List<String> customerAccountGroups, String parentUid) {
		return !unit.getUid().equalsIgnoreCase(parentUid)
				&& !unit.getUid().contains("_")
				&& customerAccountGroups.contains(unit.getAccountGroup());
	}

	//NOT USED RIGHT NOW
	private Set<B2BUnitModel> sortB2BUnitModelByName(final Set<B2BUnitModel> b2bUnitList)
	{

		final List<B2BUnitModel> b2bSalesAreaListData = new ArrayList<B2BUnitModel>(b2bUnitList);

		Collections.sort(b2bSalesAreaListData, new Comparator<B2BUnitModel>()
		{
			@Override
			public int compare(final B2BUnitModel p1, final B2BUnitModel p2)
			{
				if (p1 != null && p1.getLocName() != null && p2 != null && p2.getLocName() != null)
				{
					return p1.getLocName().compareToIgnoreCase(p2.getLocName());
				}
				return 0;
			}
		});

		final Set<B2BUnitModel> sortedSet = new LinkedHashSet();
		for (final B2BUnitModel b2bUnit : b2bSalesAreaListData)
		{
			sortedSet.add(b2bUnit);
		}

		return sortedSet;
	}


	@Override
	public List<ProductLineData> getProductLineData(final List<RmaHeaderStatusData> rmaHeaders)
	{
		final Map<String, String> productLineMap = new HashMap();

		for (final RmaHeaderStatusData rmaRecord : rmaHeaders)
		{
			final String valProductLine = rmaRecord.getProductLine();
			if (valProductLine != null && StringUtils.isNotBlank(valProductLine) && productLineMap.get(valProductLine) == null)
			{
				productLineMap.put(valProductLine, valProductLine);
			}
		}
		final List<String> productLineList = new ArrayList();
		productLineList.addAll(productLineMap.values());
		//LOG.info("Product Line 1905.J01 .... " + productLineList.size() + " | " + productLineList.toArray().toString());

		final List<ProductLineData> productLineOutputList = new ArrayList<>();

		for (final String p : productLineList)
		{
			final ProductLineData productLineData = new ProductLineData();
			productLineData.setName(p);
			productLineOutputList.add(productLineData);
		}


		//LOG.info("Product Line 1905.J02 .... " + productLineOutputList.size() + " | " + productLineOutputList.toArray().toString());

		return productLineOutputList;
	}


	//Upload PO Method
	@Override
	public uploadFileResponseData submitOrderAttachmentsToSAP(final String rmaNumber, final byte[] fileData, final String fileName,
															  final String fileType)
	{
		LOG.info("****************************************** UPLOAD FILE SERVICE ********************************************");
		try
		{
			final ExecutorService executor = Executors.newSingleThreadExecutor();
			final JaloSession currentSession = JaloSession.getCurrentSession();
			final AbstractTenant tenant = (AbstractTenant) Registry.getCurrentTenant();
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			LOG.info("Connection fetched ....");
			if (connection != null && !connection.isBackendOffline())
			{
				LOG.info("Connection finalized ....");
				final int timeout = configurationService.getConfiguration().getInt("bhge.rmastatusforcustomer.timeout.value", 180);
				LOG.info("The timeout value from the properties is ...." + timeout);

				final JCoFunction function = setFunctionAndDefaultForUpload(connection, BhgeCoreConstants.ZHYB_RMA_ATTACHMENTS,
						rmaNumber, fileData, fileName, fileType);
				connection.execute(function);
				return processUploadResponse(function);
			}
		}
		catch (final BackendException backEndException)
		{
			//handleSAPException(order, backEndException);
			LOG.error("BackendException occured during the RFC call to order attachment: " + backEndException.getMessage());
		}
		catch (final BackendRuntimeException backEndRuntimeException)
		{
			//handleSAPException(order, backEndRuntimeException);
			LOG.error("BackEndRuntimeException occured during the RFC call to order attachment: "
					+ backEndRuntimeException.getMessage());
		}
		catch (final Exception exception)
		{
			//handleSAPException(order, exception);
			LOG.error("exception occured during the RFC call to order attachment: " + exception.getMessage());
		}
		return null;
	}


	public JCoFunction setFunctionAndDefaultForUpload(final JCoConnection connection, final String functionName,
													  final String rmaNumber, final byte[] fileData, final String fileName, final String fileType) throws Exception
	{
		final JCoFunction function = connection.getFunction(functionName);
		final JCoParameterList orderAttachmentInputParameter = function.getImportParameterList();

		if (rmaNumber != null && fileData != null && fileName != null && fileType != null)
		{
			orderAttachmentInputParameter.setValue(BhgeCoreConstants.UPLOAD_RMA_NUMBER, rmaNumber);
			orderAttachmentInputParameter.setValue(BhgeCoreConstants.ORDER_ATTACHMENT_FILE_DATA, convertFileToHexString(fileData));
			orderAttachmentInputParameter.setValue(BhgeCoreConstants.ORDER_ATTACHMENT_FILE_NAME, fileName);
			orderAttachmentInputParameter.setValue(BhgeCoreConstants.ORDER_ATTACHMENT_FILE_TYPE, fileType);
		}
		//LOG.info("RMA UPLOAD REQUEST FOR CUSTOMER: " + function.toXML());

		LOG.info(function);
		return function;
	}


	private String convertFileToHexString(final byte[] fileData) throws Exception
	{
		LOG.info("********************** Converting File data to Hex String**************************");
		String hexMediaFormat = "";
		//String xString = xstr().
		try
		{
			hexMediaFormat = Hex.encodeHexString(fileData);
		}
		catch (final Exception e)
		{
			LOG.error("Error in converting the attachment to Hex string format: " + e);
		}
		return hexMediaFormat;
	}


	private uploadFileResponseData processUploadResponse(final JCoFunction function)
	{
		final uploadFileResponseData uploadResponseData = new uploadFileResponseData();

		final JCoParameterList outputParameter = function.getExportParameterList();
		if (outputParameter != null)
		{
			final String messageType = outputParameter.getString(BhgeCoreConstants.ORDER_ATTACHMENT_EXPORT_MSGTYPE);
			final String messageTxt = outputParameter.getString(BhgeCoreConstants.ORDER_ATTACHMENT_EXPORT_MSGTXT);
			/*
			 * if (messageType.equalsIgnoreCase("S")) { OrderModel orderModel = order; order.setIsAttachmentMoved(true);
			 * modelService.save(orderModel); }
			 */
			uploadResponseData.setMessageType(messageType);
			uploadResponseData.setMessageText(messageTxt);
		}
		LOG.info("RMA UPLOAD RESPONSE FOR CUSTOMER: " + function.toXML());

		return uploadResponseData;
	}

	//******************** SCPI Integration on Send RMA Attachment ***********************************************/
	//Upload PO Method - SCPI RMA Attachment
	@Override
	public uploadFileResponseData submitOrderAttachmentsToSCPI(final String rmaNumber, final byte[] fileData,
			final String fileName, final String fileType)
	{
		LOG.info("****************************************** RMA File Attachment Service ********************************************");
		try
		{
			// SCPI Connectivity to be check prior to send a request.
			final String rfcname = BhgeCoreConstants.ZHYB_RMA_ATTACHMENTS;
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(rfcname, flexibleSearchService);
			LOG.info("******** SCPI RMA Attachment URL : "+scpiEndpointUrl+" ********************");
			if (scpiEndpointUrl != null ) {
				final ZHYBRmaAttachmentsRequest rmaattachmentreq = createRMAAttachmentRequestforSCPIC(rmaNumber, fileData, fileName, fileType);
				final ZHYBRmaAttachmentsResponse rmaattachmentres = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, rmaattachmentreq, ZHYBRmaAttachmentsResponse.class);
				if(null!=rmaattachmentres) {
					return processRMAAttachmentResponse(rmaattachmentres);
				}
			}
		}
		catch (final BackendException backEndException)
		{
			LOG.error("BackendException occured during the RFC call to rma / order attachment: " + backEndException.getMessage());
		}
		catch (final BackendRuntimeException backEndRuntimeException)
		{
			LOG.error("BackEndRuntimeException occured during the RFC call to rma / order attachment: " + backEndRuntimeException.getMessage());
		}
		catch (final Exception exception)
		{
			LOG.error("exception occured during the RFC call to rma / order attachment: " + exception.getMessage());
		}
		return null;
	}

	public ZHYBRmaAttachmentsRequest createRMAAttachmentRequestforSCPIC(final String rmaNumber, final byte[] fileData,
			final String fileName, final String fileType) throws Exception
	{
		LOG.info(" ******************** Create RMA File Attachment Service API Request *************************");
		final ZHYBRmaAttachmentsRequest rmaattachmentreq = new ZHYBRmaAttachmentsRequest();
		try
		{
			if (rmaNumber != null && fileData != null && fileName != null && fileType != null)
			{
				rmaattachmentreq.setFiledata(Base64.getEncoder().encodeToString((fileData)));
				rmaattachmentreq.setFilename(fileName);
				rmaattachmentreq.setFiletype(fileType);
				rmaattachmentreq.setRmanumber(rmaNumber);
			}
		}
		catch (final Exception e)
		{
			LOG.error("Excpetion while creating RMA attachment request" + e.getMessage());
		}
		LOG.info("RMA Attachment request Payload : " + SCPIConnector.toXML(rmaattachmentreq));
		return rmaattachmentreq;
	}

	private uploadFileResponseData processRMAAttachmentResponse(final ZHYBRmaAttachmentsResponse rmaattachmentres)
	{
		LOG.info(" ******************** RMA Attachment response process *************************");
		final uploadFileResponseData uploadResponseData = new uploadFileResponseData();
		try
		{
			LOG.info("RMA Attachment response payload: " + SCPIConnector.toXML(rmaattachmentres));
			if (null != rmaattachmentres)
			{
				uploadResponseData.setMessageType(rmaattachmentres.getMessagetyp());
				uploadResponseData.setMessageText(rmaattachmentres.getMessagetxt());
			}
		}
		catch (final Exception e1)
		{
			LOG.error("Excpetion in RMA Attachment Response " + e1.getMessage());
		}
		return uploadResponseData;
	}
	
	//******************** SCPI Integration on RMA Download *******************/ 
	
	////FETCHING ATTACHMENTDATA FOR RMA NUMBER
	@Override
	public BHGERmaAttachmentData getRMAAttachments(final String rmaNumber, final String flag, final String fileName, final String fileType, final String customerNumber)
	{
		LOG.info(" ****************** Inside Downlaod RMA Attachments Service ********************");
		try
		{
			// SCPI Connectivity to be check prior to send a request.
			final String rfcname = BhgeCoreConstants.ZHYB_RMA_NOTIF_DOC_ATTC;
			final String scpiEndPoint = BHGECommonsUtil.getValueFromBHGEGlobalProperties(rfcname, flexibleSearchService);
			LOG.info("******** SCPI RMA Attachment URL : "+scpiEndPoint+" ********************");
			if (scpiEndPoint != null ) {
				final ZHYBRmaNotifDocAttcRequest downloadrmattachmentreq = createRMADownloadAttRequestforSCPI(rmaNumber, flag, fileName, fileType,customerNumber);
				final ZHYBRmaNotifDocAttcResponse downloadrmattachmentres = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, downloadrmattachmentreq, ZHYBRmaNotifDocAttcResponse.class);
				if(null!=downloadrmattachmentres) {
					return processRMADownloadAttResponse(downloadrmattachmentres);
				}
			}
		}
		catch (final Exception backEndException)
		{
			LOG.info("Exception in Download RMA Attachment Service : " + backEndException.getMessage());
			backEndException.printStackTrace();
		}
		return null;
	}	

	private ZHYBRmaNotifDocAttcRequest createRMADownloadAttRequestforSCPI(final String rmaNumber, final String flag, final String fileName, final String fileType, String customerNumber) throws BackendException
	{
      LOG.info(" **************** RMA ATTACHMENTS Download RFC: Setting the Request Input parameters ************ ");
      ZHYBRmaNotifDocAttcRequest rmaattdownloadrequest = new ZHYBRmaNotifDocAttcRequest();
      try
		{
         // setting customer account number
         if (StringUtils.isNotBlank(customerNumber))
         {
         	customerNumber = BHGESAPJCoUtils.addLeadingZeros(customerNumber, 10); // Ensuring proper formatted sold to number
         	rmaattdownloadrequest.setCustomer(customerNumber);
         }
         rmaattdownloadrequest.setRmanumber(rmaNumber);
         rmaattdownloadrequest.setImflag(flag);
         rmaattdownloadrequest.setFilename(fileName);
         rmaattdownloadrequest.setFiletype(fileType);
      }
      catch(Exception e) {
      	LOG.error("Excpetion in Get RMA Attachment / Download RMA Attachment Request " + e.getMessage());
   	}
      LOG.info(" Download RMA Attachment request payload:" + SCPIConnector.toXML(rmaattdownloadrequest));
      return rmaattdownloadrequest;
	}
	
	private BHGERmaAttachmentData processRMADownloadAttResponse(final ZHYBRmaNotifDocAttcResponse downloadrmattachmentres)
	{
		LOG.info("RMA Attachment Download response payload: " + SCPIConnector.toXML(downloadrmattachmentres));
		final BHGERmaAttachmentData attachmentData = new BHGERmaAttachmentData();

		try {
   		final List<AttachedData> data = prepareRMAAttachmentData(downloadrmattachmentres);
   		final RmaErrorMessageData errorMessage = prepareRmaattachmentdownloadErrorMessageDataRFC(downloadrmattachmentres);
   
   		attachmentData.setFileData(data);
   		if (attachmentData.getFileData() == null)
   		{
   			attachmentData.setErrorMessage(errorMessage);
   		}
		}
		catch(Exception e) {
      	LOG.error("Excpetion in RMA Attachment / Download RMA Attachment Processing " + e.getMessage());
      }
		return attachmentData;
	}
	
	private List<AttachedData> prepareRMAAttachmentData(final ZHYBRmaNotifDocAttcResponse downloadrmattachmentres)
	{
		final List<AttachedData> attData = new ArrayList<>();
		final List<AttachedData> rmaAttachmentDataTable = new ArrayList<>();
		
		try {
   		final List<ZHYBRmaNotifDocAttcRequest$Item> ex_notif_attctable = downloadrmattachmentres.getEx_notif_attc() != null
   				&& CollectionUtils.isNotEmpty(downloadrmattachmentres.getEx_notif_attc().getItems())
   						? downloadrmattachmentres.getEx_notif_attc().getItems() : Collections.EMPTY_LIST;
   
   		final int rowCount = ex_notif_attctable.size();
   		if (rowCount > 0)
   		{
   			for (int i = 0; i < rowCount; i++)
   			{
   				final AttachedData data = new AttachedData();
   				final String filename = ex_notif_attctable.get(i).getFilename();
   				final String filetype = ex_notif_attctable.get(i).getFiletype();
   				String hexdata = ex_notif_attctable.get(i).getHexdata();
   				hexdata = hexdata.replaceAll("\\r\\n|\\r|\\n", "");
   				
   				if (null!= hexdata &&  null!=filename && null!=filetype) {
   					data.setFileName(filename);
   					data.setFileType(filetype);
   					data.setHexData(hexdata);
   					rmaAttachmentDataTable.add(data);
   				}
   			}
   		}
		}
		catch(Exception e) {
			LOG.error("Excpetion while creating RMA Attachment Download Request " + e.getMessage());
		}
		return rmaAttachmentDataTable;
	}
	
	private RmaErrorMessageData prepareRmaattachmentdownloadErrorMessageDataRFC(final ZHYBRmaNotifDocAttcResponse zhybrmaNotifdocattcresponse)
	{
		final RmaErrorMessageData rmaErrorMessageData = new RmaErrorMessageData();
		final List<ZHYBRmaNotifDocAttcRequest$Item> rmaErrorMessageTable =
				zhybrmaNotifdocattcresponse.getT_messageTable() != null && CollectionUtils.isNotEmpty(zhybrmaNotifdocattcresponse.getT_messageTable().getItems())
						? zhybrmaNotifdocattcresponse.getT_messageTable().getItems() : Collections.EMPTY_LIST;
		final int rowCount = rmaErrorMessageTable.size();

		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				rmaErrorMessageData.setType(rmaErrorMessageTable.get(i).getType());
				rmaErrorMessageData.setId(rmaErrorMessageTable.get(i).getId());
				rmaErrorMessageData.setNumber(rmaErrorMessageTable.get(i).getNumber());
				rmaErrorMessageData.setMessage(rmaErrorMessageTable.get(i).getMessage());
				rmaErrorMessageData.setLogNumber(rmaErrorMessageTable.get(i).getLog_no());
				rmaErrorMessageData.setLogMessageNumber(rmaErrorMessageTable.get(i).getLog_msg_no());
				rmaErrorMessageData.setMessageV1(rmaErrorMessageTable.get(i).getMessage_v1());
				rmaErrorMessageData.setMessageV2(rmaErrorMessageTable.get(i).getMessage_v2());
				rmaErrorMessageData.setMessageV3(rmaErrorMessageTable.get(i).getMessage_v3());
				rmaErrorMessageData.setMessageV4(rmaErrorMessageTable.get(i).getMessage_v4());
				rmaErrorMessageData.setParameter(rmaErrorMessageTable.get(i).getParameter());
				rmaErrorMessageData.setRow(rmaErrorMessageTable.get(i).getParameter());
				rmaErrorMessageData.setField(rmaErrorMessageTable.get(i).getParameter());
				rmaErrorMessageData.setSystem(rmaErrorMessageTable.get(i).getParameter());
			}
		}
		return rmaErrorMessageData;
	}

	protected String fetchSoldToNameFromOrder(String soldToUid){
		final List<B2BUnitModel> allB2BUnits = bhgeB2BUnitService.getSalesAreaForB2BUnit(soldToUid);
		String soldToName = "";
		if(!allB2BUnits.isEmpty()) {
			B2BUnitModel b2bUnitModel = new B2BUnitModel();
			for (B2BUnitModel parentB2BUnit : allB2BUnits) {
				if (!parentB2BUnit.getUid().contains("_")) {
					b2bUnitModel = parentB2BUnit;
					break;
				}
			}
			Collection<AddressModel> soldToAddresses = b2bUnitModel.getAddresses();
			if(!soldToAddresses.isEmpty()) {
				for (AddressModel addressModel : soldToAddresses) {
					if (addressModel.getSapAddressUsage() != null && addressModel.getSapAddressUsage().equalsIgnoreCase("DE")) {
						soldToName = (StringUtils.isNotEmpty(addressModel.getCompany()) ? addressModel.getCompany() : "");
						break;
					}
				}
			}
		}
		return soldToName;
	}
}
