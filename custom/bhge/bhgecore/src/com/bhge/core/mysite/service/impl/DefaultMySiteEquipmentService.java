/**
 *
 */
package com.bhge.core.mysite.service.impl;

import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import java.util.concurrent.TimeoutException;

import java.util.concurrent.TimeUnit;
import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import org.xml.sax.SAXException;

import com.bhge.core.calportal.service.CalPortalService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.data.AddToMSEInputData;
import com.bhge.core.data.AddToMSEOutputData;
import com.bhge.core.data.EquipmentData;
import com.bhge.core.data.ManElDataCount;
import com.bhge.core.data.MelDataCount;
import com.bhge.core.data.ProbeCalibrationRequest;
import com.bhge.core.data.ProbeCalibrationResponse;
import com.bhge.core.data.ServiceHistoryDetails;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.mysite.service.MySiteEquipmentService;
import com.bhge.core.sap.SAPJcoContainer;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.mse.MSEMessageTable;
import com.bhge.core.scpi.rfc.mse.MSEMessageTableItem;
import com.bhge.core.scpi.rfc.mse.MyEquipmentItem;
import com.bhge.core.scpi.rfc.mse.MyEquipments;
import com.bhge.core.scpi.rfc.mse.create.req.ZHYBRmaMSECreateReq;
import com.bhge.core.scpi.rfc.mse.create.res.ZHYBRmaMSECreateRes;
import com.bhge.core.scpi.rfc.mse.hist.req.MSEHistETDetailItem;
import com.bhge.core.scpi.rfc.mse.hist.req.ZHYBRmaServHistReq;
import com.bhge.core.scpi.rfc.mse.hist.res.ZHYBRmaServHistRes;
import com.bhge.core.scpi.rfc.mse.zrmaequipment.ETDetailItem;
import com.bhge.core.scpi.rfc.mse.zrmaequipment.ETDetails;
import com.bhge.core.scpi.rfc.mse.zrmaequipment.EquipmentItem;
import com.bhge.core.scpi.rfc.mse.zrmaequipment.Equipments;
import com.bhge.core.scpi.rfc.mse.zrmaequipment.ZHYBRmaEquipRequest;
import com.bhge.core.scpi.rfc.mse.zrmaequipment.ZHYBRmaEquipResponse;
import com.bhge.core.util.BHGECommonsUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoTable;

//Migration changes start
//import com.sap.sxe.db.table;
//Migration changes end
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.AbstractTenant;
import de.hybris.platform.core.Registry;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.regioncache.CacheController;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.region.CacheRegion;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;



/**
 * @author 1423683
 *
 */
public class DefaultMySiteEquipmentService implements MySiteEquipmentService
{
	private static final String PROBE_TYPE = "PR";
	private final static Logger LOG = Logger.getLogger(DefaultMySiteEquipmentService.class);
	private static final String SCPI_ZHYB_RMA_EQUIP_ENDPOINT_URL = "SCPI_ZHYB_RMA_EQUIP_ENDPOINT";
	private static final String SCPI_ZHYB_RMA_MEL_CREATE_ENDPOINT_URL = "SCPI_ZHYB_RMA_MEL_CREATE_ENDPOINT";
	private static final String SCPI_ZHYB_RMA_SERV_HIST_ENDPOINT_URL = "SCPI_ZHYB_RMA_SERV_HIST_ENDPOINT";
	public static final String TBD = "TBD";

	@Resource(name = "sapJcoContainer")
	private SAPJcoContainer sapJcoContainer;

	@Resource(name = "configurationService")
	ConfigurationService configurationService;

	@Resource(name = "productService")
	ProductService productService;

	@Resource(name = "productConverter")
	private Converter<ProductModel, ProductData> productConverter;

	@Resource(name = "modelService")
	private ModelService modelService;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "rendererService")
	private RendererService rendererService;

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	@Resource(name = "mseCacheRegion")
	private CacheRegion mseCacheRegion;

	@SuppressWarnings("rawtypes")
	@Resource(name = "mseCacheValueLoader")
	private CacheValueLoader mseCacheValueLoader;

	@Resource(name = "cacheController")
	private CacheController cacheController;

	@Resource
	private FlexibleSearchService flexibleSearchService;
	
	@Resource(name = "scpiConnector")
	private SCPIConnector scpiConnector;
	
	@Resource(name = "calPortalService")
	private CalPortalService calPortalService;

	public ModelService getModelService()
	{
		return modelService;
	}

	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	public UserService getUserService()
	{
		return userService;
	}

	public void setUserService(final UserService userService)
	{
		this.userService = userService;
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

	public static final String IMAGEFORMAT = "thumbnail";

	public static final String NOIMAGEVALUE = "/_ui/responsive/theme-lambda/images/missing_product_EN_300x300.jpg";



	//FETCHING EQUIPMENT DATA FOR CUSTOMER - START

	@Override
	public EquipmentData getEquipmentDataForCustomer(final String customerNumber, final String MANorMELFlag, final String fromDate,
			final String toDate, final String endCustomerID)
	{
		LOG.info("Inside getMySiteEquipment Service ....");

		EquipmentData result = new EquipmentData();
		try
		{
			final ExecutorService executor = Executors.newSingleThreadExecutor();
			final JaloSession currentSession = JaloSession.getCurrentSession();
			final AbstractTenant tenant = (AbstractTenant) Registry.getCurrentTenant();
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			LOG.info("Connection fetched ....");
			if (connection != null && !connection.isBackendOffline())
			{
				LOG.info("Connection finalized .... " + customerNumber);
				final int timeout = configurationService.getConfiguration().getInt("bhge.rmastatusforcustomer.timeout.value", 180);
				LOG.info("The timeout value from the properties is ...." + timeout);

				final JCoFunction function = prepareRequestForEquipmentData(connection, customerNumber, MANorMELFlag, fromDate,
						toDate);				
				final Callable<Object> task = new Callable<Object>()
				{
					@Override
					public Object call() throws BackendException, ParseException
					{
						LOG.info("Inside the call() method for MSE service exceution..Timeout value is...." + timeout);
						Registry.setCurrentTenant(tenant);
						tenant.setActiveSessionForCurrentThread(currentSession);
						connection.execute(function);
						return processResponseForEquipmentData(function, MANorMELFlag, endCustomerID);
					}
				};

				LOG.info("Executing future.get() start");
				final Future<Object> future = executor.submit(task);
				LOG.info("Executing future.get() end");

				try
				{
					result = (EquipmentData) future.get(timeout, TimeUnit.SECONDS);
					//LOG.info("***************************** RESULT *********************" + result);
				}
				catch (final TimeoutException ex)
				{
					LOG.error("Time out exception occurred during getMELSTATUSForCustomer() execution " + ex);
					result.setTimeoutException(true);
					handleException(customerNumber, MANorMELFlag, ex.getMessage());
					LOG.error(" TimeOutExceptionValue :  " + result.isTimeoutException());
				}
				catch (final InterruptedException ex)
				{
					LOG.error("Interrupted exception occurred during getMELSTATUSForCustomer() execution" + ex);
					result.setInterruptedException(true);
					handleException(customerNumber, MANorMELFlag, ex.getMessage());
				}
				catch (final ExecutionException ex)
				{
					LOG.error("Execution exception occurred during getMELSTATUSCustomer() execution" + ex);
					result.setExecutionException(true);
					handleException(customerNumber, MANorMELFlag, ex.getMessage());
				}
				finally
				{
					future.cancel(true); // may or may not desire this
					executor.shutdown();
				}
				
			}
		}
		catch (final Exception backEndException)
		{
			LOG.info("Inside catch block with exception: " + backEndException.getMessage());
			//handleException(customerNumber, orderType, backEndException);
			backEndException.printStackTrace();
			result.setTimeoutException(true);
		}

		return result;

	}

	public EquipmentData getEquipmentDataForCustomerMSE(final String customerNumber, final String MANorMELFlag,
			final String fromDate, final String toDate, final String endCustomerID)
	{
		LOG.info("Inside getMySiteEquipment Service ....");

		XmlMapper mapper = new XmlMapper();
		EquipmentData equipmentData = null;
		final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_RMA_EQUIP_ENDPOINT_URL,
				flexibleSearchService);
		ZHYBRmaEquipRequest zhybRmaEquipmentRequest = createRequestDataForEquipmentRFC(customerNumber, MANorMELFlag, fromDate,
				toDate);

		ZHYBRmaEquipResponse response = (ZHYBRmaEquipResponse) scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, zhybRmaEquipmentRequest,
				ZHYBRmaEquipResponse.class);
		try {
			String responseValue = mapper.writeValueAsString(response);
			LOG.info("ZHYBRmaEquipResponse : " + responseValue);
		} catch (JsonProcessingException e) {
			LOG.error("ParseException in getEquipmentDataForCustomerMSE");
		}


		try {
			equipmentData = processResponseForEquipmentDataRFC(response, MANorMELFlag, endCustomerID);
		} catch (ParseException e) {
			LOG.error("ParseException in getEquipmentDataForCustomerMSE");
		}
		return equipmentData;
	}

	private JCoFunction prepareRequestForEquipmentData(final JCoConnection connection, final String customerNumber,
			final String mANorMELFlag, final String fromDate, final String toDate) throws BackendException
	{
		LOG.info("Inside prepareRequest .... customerNumber: " + customerNumber + " " + "and mANorMELFlag " + mANorMELFlag);
		final JCoFunction function = setFunctionAndDefaultForEquipmentData(connection, customerNumber, mANorMELFlag, fromDate,
				toDate);
		LOG.info("EQUIPMENT DATA REQUEST FOR CUSTOMER: " + function.toXML());

		LOG.info(function);
		return function;
	}


	private JCoFunction setFunctionAndDefaultForEquipmentData(final JCoConnection connection, final String customerNumber,
			final String mANorMELFlag, final String fromDate, final String toDate) throws BackendException
	{
		LOG.info("EQUIPMENT Tracking RFC: Setting the Default Input parameters");

		final String mySiteEquipmentFunction = Config.getString("SAP_MY_SITE_EQUIPMENT_FUNCTION", "ZHYB_RMA_EQUIP");
		final JCoFunction function = connection.getFunction(mySiteEquipmentFunction);

		LOG.info("--------------------- customerNumber:" + customerNumber);
		LOG.info("--------------------- mANorMELFlag:" + mANorMELFlag);

		function.getImportParameterList().setValue(BhgeCoreConstants.CUST_NUM, customerNumber);
		function.getImportParameterList().setValue(BhgeCoreConstants.MSE_TYPE, mANorMELFlag);
		function.getImportParameterList().setValue(BhgeCoreConstants.MSE_CP_DETAIL, "X");

		//Date range for 3 years
		try
		{
			final SimpleDateFormat simpleDateFormat = new SimpleDateFormat(BhgeCoreConstants.DATE_MONTH_YEAR_FORMAT);
			Date past3YearDate = null;
			final Date currentDate = StringUtils.isNotBlank(toDate) ? simpleDateFormat.parse(toDate)
					: Calendar.getInstance().getTime();
			if (StringUtils.isNotBlank(fromDate))
			{
				past3YearDate = simpleDateFormat.parse(fromDate);
			}
			else
			{
				final Calendar calendar = Calendar.getInstance();
				calendar.add(Calendar.YEAR, -3);
				past3YearDate = calendar.getTime();
			}
			//setting from date and to date
			function.getImportParameterList().setValue(BhgeCoreConstants.FROM_DATE, past3YearDate);
			function.getImportParameterList().setValue(BhgeCoreConstants.TO_DATE, currentDate);
		}
		catch (final Exception ex)
		{
			LOG.error("Issue with setting date for past 3 years in MEL call" + ex);
		}
		LOG.info("New Function" + function.getImportParameterList());

		//LOG.info("--------------------- OUTSIDE SETFUNCTION FOR CUSTOMER ---------------------");

		return function;
	}


	private ZHYBRmaEquipRequest createRequestDataForEquipmentRFC(final String customerNumber, final String mANorMELFlag,
																 final String fromDate, final String toDate) {
		LOG.info("EQUIPMENT Tracking RFC: Setting the Default Input parameters");

		LOG.info("--------------------- customerNumber:" + customerNumber);
		LOG.info("--------------------- mANorMELFlag:" + mANorMELFlag);

		XmlMapper xmlMapper = new XmlMapper();
		final ZHYBRmaEquipRequest zhybRmaEquipment = new ZHYBRmaEquipRequest();

		zhybRmaEquipment.setCustNum(customerNumber);
		zhybRmaEquipment.setCpFLAG(mANorMELFlag);
		zhybRmaEquipment.setCpDetail("X");
		zhybRmaEquipment.setUserID(userService.getCurrentUser().getUid());

		try
		{
			final SimpleDateFormat simpleDateFormat = new SimpleDateFormat(BhgeCoreConstants.YEAR_MONTH_DATE_FORMAT);
			final SimpleDateFormat simpleDateFormatForRequest = new SimpleDateFormat(BhgeCoreConstants.YEAR_MONTH_DATE_FORMAT);
			Date past3YearDate = null;
			final Date currentDate = StringUtils.isNotBlank(toDate) ? simpleDateFormat.parse(toDate)
					: Calendar.getInstance().getTime();
			if (StringUtils.isNotBlank(fromDate))
			{
				past3YearDate = simpleDateFormat.parse(fromDate);
			}
			else
			{
				final Calendar calendar = Calendar.getInstance();
				calendar.add(Calendar.YEAR, -3);
				past3YearDate = calendar.getTime();
			}
			//setting from date and to date
			zhybRmaEquipment.setFromDate(simpleDateFormatForRequest.format(past3YearDate));
			zhybRmaEquipment.setToDate(simpleDateFormatForRequest.format(currentDate));
		}
		catch (final Exception ex)
		{
			LOG.error("Issue with setting date for past 3 years in MEL call" + ex);
		}

		String xml = null;
		try {
			xml = xmlMapper.writeValueAsString(zhybRmaEquipment);
		} catch (JsonProcessingException e) {
			LOG.error("Exception while converting ZHYBRmaEquipRequest",e);
		}
		LOG.info("ZHYBRmaEquipment Request : " + xml);
		return zhybRmaEquipment;
	}

	private EquipmentData processResponseForEquipmentData(final JCoFunction function, final String MANorMELFlag,
			final String endCustomerID) throws ParseException
	{
		LOG.info("MYSITE EQUIPMENT Response: " + function.toXML());
		final EquipmentData equipmentData = new EquipmentData();
		MelDataCount melDataCount = new MelDataCount();
		ManElDataCount manElDataCount = new ManElDataCount();

		List<AddToMSEInputData> listOfEquipmentData = new ArrayList<>();

		if (MANorMELFlag.equals(BhgeCoreConstants.CP_LIST))
		{
			listOfEquipmentData = prepareListOfMANElEquipmentData(function);
			manElDataCount = prepareCountOfMANElEquipmentData(listOfEquipmentData);
		}
		if (MANorMELFlag.equals(BhgeCoreConstants.CP_MYLIST))
		{
			listOfEquipmentData = prepareListOfMELEquipmentData(function, endCustomerID);
			melDataCount = prepareCountOfMElEquipmentData(listOfEquipmentData);
		}
		if (MANorMELFlag.equals(BhgeCoreConstants.CP_ALL))
		{
			listOfEquipmentData = prepareListOfMELEquipmentData(function, endCustomerID);
			melDataCount = prepareCountOfMElEquipmentData(listOfEquipmentData);
		}

		equipmentData.setEquipmentData(listOfEquipmentData);
		equipmentData.setManElPageCountData(manElDataCount);
		equipmentData.setMelPageCountData(melDataCount);


		return equipmentData;
	}

	private EquipmentData processResponseForEquipmentDataRFC(final ZHYBRmaEquipResponse response, final String MANorMELFlag,
			final String endCustomerID) throws ParseException
	{
		LOG.info("MYSITE EQUIPMENT Response: " + response.toString());
		final EquipmentData equipmentData = new EquipmentData();
		MelDataCount melDataCount = new MelDataCount();
		ManElDataCount manElDataCount = new ManElDataCount();

		List<AddToMSEInputData> listOfEquipmentData = new ArrayList<>();

		if (MANorMELFlag.equals(BhgeCoreConstants.CP_LIST))
		{
			listOfEquipmentData = prepareListOfMANElEquipment(response);
			manElDataCount = prepareCountOfMANElEquipmentData(listOfEquipmentData);
		}
		if (MANorMELFlag.equals(BhgeCoreConstants.CP_MYLIST))
		{
			listOfEquipmentData = prepareListOfMELEquipmentResponse(response, endCustomerID);
			melDataCount = prepareCountOfMElEquipmentData(listOfEquipmentData);
		}
		if (MANorMELFlag.equals(BhgeCoreConstants.CP_ALL))
		{
			listOfEquipmentData = prepareListOfMELEquipmentResponse(response, endCustomerID);
			melDataCount = prepareCountOfMElEquipmentData(listOfEquipmentData);
		}

		equipmentData.setEquipmentData(listOfEquipmentData);
		equipmentData.setManElPageCountData(manElDataCount);
		equipmentData.setMelPageCountData(melDataCount);


		return equipmentData;
	}

	@Override
	public MelDataCount prepareCountOfMElEquipmentData(final List<AddToMSEInputData> listOfEquipmentData)
	{
		final MelDataCount melDataCount = new MelDataCount();

		long totalItems = 0;
		long serviceDueIn1Month = 0;
		long serviceDueThisQuarter = 0;
		long archivedItems = 0;
		long serviceWasDueItems = 0;
		long removedItems = 0;
		long pinnedItems = 0;
		long pendingRMA	= 0;

		if (listOfEquipmentData == null)
		{
			melDataCount.setTotalItems(Long.valueOf(0));
			melDataCount.setItemsDueServicein1Month(Long.valueOf(0));
			melDataCount.setItemsDueServiceinQuarter(Long.valueOf(0));
			melDataCount.setArchivedItems(Long.valueOf(0));
		}

		else
		{
			final Calendar currentCalendar = Calendar.getInstance();
			final Date currentDate = currentCalendar.getTime();
			final Calendar post2MonthCalendar = Calendar.getInstance();
			post2MonthCalendar.add(Calendar.MONTH, 3);
			final Date post2MonthDate = post2MonthCalendar.getTime();
			final Calendar postOneMonthCalendar = Calendar.getInstance();
			postOneMonthCalendar.add(Calendar.MONTH, 2);
			final Date post1MonthDate = postOneMonthCalendar.getTime();
			for (final AddToMSEInputData melData : listOfEquipmentData)
			{
				boolean isPinnedFlag = false;
				boolean isRMAFlag = false;
				if(melData.getPinned() != null && melData.getPinned().equalsIgnoreCase(BhgeCoreConstants.MSE_FAV_FLAG_VALUE))
				{
					pinnedItems++;
					isPinnedFlag = true;
				}
				if(melData.getRmaStatus() != null && melData.getRmaStatus().equalsIgnoreCase(BhgeCoreConstants.MSE_RMA_FLAG_VALUE))
				{
					pendingRMA++;
					isRMAFlag = true;
				}
				if (melData.getStatus().equalsIgnoreCase(BhgeCoreConstants.MSE_ACTIVE))
				{
					if (melData.getServiceDueDate() != null && isPinnedFlag)
					{
						final Calendar serviceDueCalendar = Calendar.getInstance();
						serviceDueCalendar.setTime(melData.getServiceDueDate());
						if (melData.getServiceDueDate().before(currentDate))
						{
							serviceWasDueItems++;
						}
						else if ((melData.getServiceDueDate().before(post1MonthDate) && melData.getServiceDueDate().after(currentDate))
								|| (serviceDueCalendar.get(Calendar.ERA) == currentCalendar.get(Calendar.ERA)
										&& serviceDueCalendar.get(Calendar.YEAR) == currentCalendar.get(Calendar.YEAR)
										&& serviceDueCalendar.get(Calendar.DAY_OF_YEAR) == currentCalendar.get(Calendar.DAY_OF_YEAR)))
						{
							serviceDueIn1Month++;
						}

						else if (melData.getServiceDueDate().before(post2MonthDate)
								&& melData.getServiceDueDate().after(post1MonthDate))
						{
							serviceDueThisQuarter++;
						}
					}
				}

				else if (melData.getStatus().equalsIgnoreCase(BhgeCoreConstants.MSE_INACTIVE)
						|| StringUtils.isBlank(melData.getStatus()))
				{
					archivedItems++;
				}

				else if (melData.getStatus().equalsIgnoreCase(BhgeCoreConstants.MSE_REMOVED))
				{
					removedItems++;
				}
			}

			totalItems = Long.valueOf(listOfEquipmentData.size()) - archivedItems - removedItems;
			
			LOG.info("Equipments serviceWasDueItems Count : " +serviceWasDueItems);
			LOG.info("Equipments serviceDueIn1Month Count : " +serviceDueIn1Month);
			LOG.info("Equipments serviceDueIn3Month Count : " +serviceDueThisQuarter);
			// Adding Past_due and Due_in_1_month to the Due_In_2_Month
			serviceDueThisQuarter += serviceDueIn1Month + serviceWasDueItems;
			
			melDataCount.setTotalItems(totalItems);
			melDataCount.setItemsDueServicein1Month(serviceDueIn1Month);
			melDataCount.setItemsDueServiceinQuarter(serviceDueThisQuarter);
			melDataCount.setArchivedItems(archivedItems);
			melDataCount.setItemsServiceWasDue(serviceWasDueItems);
			melDataCount.setPinnedItems(pinnedItems);
			melDataCount.setRmaItems(pendingRMA);
		}

		return melDataCount;
	}


	/**
	 * Calculate service due based on last service date and number of service months left
	 *
	 * @param lastServiceDate
	 * @param serviceInterval
	 * @param melData
	 * @return
	 * @throws ParseException
	 */
	private String getServiceDue(final String lastServiceDate, final String lastcaliberation, String serviceInterval, final AddToMSEInputData melData)
			throws ParseException
	{
		String serviceDue = "";
		//Specifying date format that matches the given date
		final SimpleDateFormat filtersFormat = new SimpleDateFormat(BhgeCoreConstants.YEAR_MONTH_DATE_FORMAT);//Format for SAP
		final SimpleDateFormat ddMMMyyyyFormat = new SimpleDateFormat(BhgeCoreConstants.DATE_MONTH_YEAR_FORMAT2);//Format for sending To UI
		final SimpleDateFormat ddMMMMyyyyFormat = new SimpleDateFormat(BhgeCoreConstants.DATE_MONTH_YEAR_FORMAT3);//Format on Oracle DB

		final Calendar c = Calendar.getInstance();
		try
		{
			//Setting the date to the given date
			if(lastcaliberation == null) {
				c.setTime(ddMMMyyyyFormat.parse(lastServiceDate));
				
			}
			else {
				c.setTime(ddMMMMyyyyFormat.parse(lastcaliberation));
			}
		}
		catch (final ParseException e)
		{
			LOG.error("Issue with parsing date in getServiceDue() method" + e.getMessage());
		}

		//Number of Days to add
		if (StringUtils.isNotBlank(serviceInterval) && !serviceInterval.contains(".") && isNumber(serviceInterval)
				&& (Integer.parseInt(serviceInterval) > 0 && Integer.parseInt(serviceInterval) <= 60))
		{
			c.add(Calendar.MONTH, Integer.parseInt(serviceInterval));
		}

		//Date after adding the days to the given date
		final String nextServiceDateStr = filtersFormat.format(c.getTime());

		final Date nextServiceDate = filtersFormat.parse(nextServiceDateStr);
		//Setting next service due date to equipment record
		melData.setServiceDueDate(nextServiceDate);
		final String nextServiceDate2 = new SimpleDateFormat(BhgeCoreConstants.DATE_MONTH_YEAR_FORMAT2).format(nextServiceDate);

		//Displaying the new Date after addition of Days
		final String currentDate = LocalDate.now().toString();
		final Date cd = filtersFormat.parse(currentDate);
		final Date nd = filtersFormat.parse(nextServiceDateStr);

		final long diff = nd.getTime() - cd.getTime();
		final long diffInDays = TimeUnit.MILLISECONDS.toDays(diff);
		LOG.info("================= Difference ================== " + diffInDays);


		if (diffInDays >= 30)
		{
			final long diffInMonths = diffInDays / 30;
			if (diffInMonths > 1)
			{
				serviceDue = (" " + String.valueOf(diffInMonths) + " Months");
				if(diffInMonths == 2) {
				melData.setNotificationDue(true);
				melData.setNotificationMessage(" " + "due for Calibration in " + String.valueOf(diffInMonths) + " Months ");
				}
				else if (diffInDays < 60 && diffInDays > 30) {
					melData.setNotificationDue(true);
					melData.setNotificationMessage(" " + "due for Calibration in " + String.valueOf(diffInDays) + " days ");
					
				}
				
			}
			else
			{
				serviceDue = (" " + String.valueOf(diffInMonths) + " Month ");
				melData.setNotificationDue(true);
				melData.setNotificationMessage(" " + "due for Calibration in " + String.valueOf(diffInMonths) + " Month ");
			}
		}

		else if (diffInDays < 30 && diffInDays > 0)
		{
			serviceDue = "Service is due in " + diffInDays + " days";
			melData.setNotificationDue(true);
			melData.setNotificationMessage(" " + "due for Calibration in " + String.valueOf(diffInDays) + " days ");
		}

		else if (diffInDays == 1)
		{
			serviceDue = "Service is due in 1 day";
			melData.setNotificationDue(true);
			melData.setNotificationMessage(" " + "due for Calibration in 1 day");
		}

		else if (diffInDays == 0)
		{
			serviceDue = "Service is due today";
			melData.setNotificationDue(true);
			melData.setNotificationMessage(" " + "due for Calibration today");
		}

		else if (diffInDays < 0)
		{
			serviceDue = "Service was due on " + nextServiceDate2;
			melData.setNotificationDue(true);
			melData.setNotificationMessage(" " + "past due for Calibration");
		}

		return serviceDue;
	}



	@Override
	public ManElDataCount prepareCountOfMANElEquipmentData(final List<AddToMSEInputData> listOfEquipmentData)
	{
		final ManElDataCount manElDataCount = new ManElDataCount();

		final long thereInMEL = 0l;
		long notThereInMEL = 0l;

		if (listOfEquipmentData == null)
		{
			manElDataCount.setTotalItems(Long.valueOf(0));
			manElDataCount.setItemsNotInMEL(Long.valueOf(0));
		}

		else
		{
			for (final AddToMSEInputData manELData : listOfEquipmentData)
			{
				if (manELData.isThereInMELFlag() == false)
				{
					notThereInMEL++;
				}
			}

			manElDataCount.setTotalItems(Long.valueOf(listOfEquipmentData.size()));
			manElDataCount.setItemsNotInMEL(notThereInMEL);
		}

		return manElDataCount;
	}



	private List<AddToMSEInputData> prepareListOfMELEquipmentData(final JCoFunction function, final String endCustomerID)
			throws ParseException
	{
		final List<AddToMSEInputData> listMELEquipmentDataTable = new ArrayList<>();
		final JCoTable melEquipmentTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_MYEQUIPMENT);
		final int rowCount = melEquipmentTable.getNumRows();

		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				final AddToMSEInputData melData = new AddToMSEInputData();

				melData.setPartNumber(melEquipmentTable.getString(BhgeCoreConstants.MSE_PART_NUMBER));
				melData.setSerialNumber(melEquipmentTable.getString(BhgeCoreConstants.MSE_SERIAL_NUMBER));
				melData.setPartName(melEquipmentTable.getString(BhgeCoreConstants.MSE_PART_NAME));

				melData.setStatus(melEquipmentTable.getString(BhgeCoreConstants.MSE_STATUS));
				melData.setAssetNumber(melEquipmentTable.getString(BhgeCoreConstants.MSE_ASSET_NUMBER));
				melData.setLocation(melEquipmentTable.getString(BhgeCoreConstants.MSE_LOCATION));

				melData.setHtsCode(melEquipmentTable.getString(BhgeCoreConstants.MSE_HTS_CODE));
				melData.setServiceInterval(melEquipmentTable.getString(BhgeCoreConstants.MSE_SERVICE_INTERVAL));
				melData.setAdditionalInfo(melEquipmentTable.getString(BhgeCoreConstants.MSE_ADDITIONAL_INFO));
				melData.setEndCustomerName(melEquipmentTable.getString(BhgeCoreConstants.MSE_END_CUSTOMER_NAME));
				melData.setEndCustomer(melEquipmentTable.getString(BhgeCoreConstants.MSE_END_CUSTOMER));
				// Adding MANEL flag. If 'Y', this record is present in MANEL date
				melData.setManElFlag(melEquipmentTable.getString(BhgeCoreConstants.MANEL_FLAG));
				// Adding flag for records that are already available for a different customer account
				melData.setIsOwnerDetailsMismatch(melEquipmentTable.getString(BhgeCoreConstants.OWNER_MISMATCH_FLAG));
				melData.setPinned(melEquipmentTable.getString(BhgeCoreConstants.MSE_FAV_FLAG));
				// Adding value for Product Hierarchy
                melData.setProductHierarchy(melEquipmentTable.getString(BhgeCoreConstants.MSE_PRODUCT_HIERARCHY));

				final List<ServiceHistoryDetails> serviceHistoryList = prepareServiceHistoryDetails(function, melData.getPartNumber(),
						melData.getSerialNumber(), melData);

				if (serviceHistoryList != null && serviceHistoryList.size() > 0)
				{
					for (final ServiceHistoryDetails s : serviceHistoryList)
					{
						if (StringUtils.isNotBlank(s.getServiceType()))
						{
							if (s.getServiceType().equalsIgnoreCase("RETURN FOR CREDIT")
									|| s.getServiceType().equalsIgnoreCase("RETURN FOR SCRAP")
									|| s.getServiceType().equalsIgnoreCase("PRODUCT RECALLED"))
							{
								melData.setStatus(BhgeCoreConstants.MSE_INACTIVE);
								melData.setInactiveFlag(true);
							}
							else
							{
								melData.setInactiveFlag(false);
							}
						}
					}
				}

				melData.setServiceHistoryDetails(serviceHistoryList);

				//Populate last service date based on service history. Populates from table if this value is null
				final String lastServiceDatefromSAP = melEquipmentTable.getString(BhgeCoreConstants.MSE_LAST_SERVICE_DATE);
				populateLastServiceDate(melData, lastServiceDatefromSAP);
				if (StringUtils.isNotBlank(melData.getLastServiceDate()) && StringUtils.isNotBlank(melData.getServiceInterval()))
				{
					final String inMonths = getServiceDue(melData.getLastServiceDate(), melData.getLastCalibrationDate() , melData.getServiceInterval(), melData);
					melData.setNextServiceDueInMonths(inMonths);
				}

				// Filter list when end customer is passed in end customer drop down
				if (StringUtils.isNotBlank(endCustomerID))
				{
					if (endCustomerID.equalsIgnoreCase(melData.getEndCustomer()))
					{
						listMELEquipmentDataTable.add(melData);
					}
				}
				else
				{
					listMELEquipmentDataTable.add(melData);
				}

				melEquipmentTable.nextRow();
			}

		}
		return listMELEquipmentDataTable;
	}

	private List<AddToMSEInputData> prepareListOfMELEquipmentResponse(final ZHYBRmaEquipResponse response, final String endCustomerID)
			throws ParseException
	{

		final List<AddToMSEInputData> listManELEquipmentDataTable = new ArrayList<>();
		final List<ProbeCalibrationRequest> calibrationEquipmentList = new ArrayList<ProbeCalibrationRequest>();
		//final JCoTable manElEquipmentTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_EQUIPMENT);
		MyEquipments myEquipments = response.getMyEquipment();
		if(null != myEquipments) {
			final List<MyEquipmentItem> equipmentsList = myEquipments.getItems();
			prepareCalibrationList(equipmentsList,calibrationEquipmentList);
			final List<ProbeCalibrationResponse> calibrationDataList = calPortalService.getCalPortalDataForList(calibrationEquipmentList);
			
			if (!CollectionUtils.isEmpty(equipmentsList)) {
				for (int i = 0; i < equipmentsList.size(); i++) {
					final MyEquipmentItem item = equipmentsList.get(i);
					final AddToMSEInputData melData = new AddToMSEInputData();

					melData.setPartNumber(StringUtils.isNotBlank(item.getPartNumber()) ? item.getPartNumber() : StringUtils.EMPTY);
					melData.setSerialNumber(StringUtils.isNotBlank(item.getSerialNumber()) ? item.getSerialNumber() : StringUtils.EMPTY);
					melData.setPartName(StringUtils.isNotBlank(item.getPartName()) ? item.getPartName() : StringUtils.EMPTY);
				    melData.setCustomer(StringUtils.isNotBlank(item.getCustomer()) ? item.getCustomer() : StringUtils.EMPTY);

					melData.setStatus(StringUtils.isNotBlank(item.getStatus()) ? item.getStatus() : StringUtils.EMPTY);
					melData.setAssetNumber(item.getAssetNumber());
					melData.setLocation(item.getLocation());

					melData.setHtsCode(item.getHtsCode());
					melData.setServiceInterval(item.getServiceInternal());
					melData.setAdditionalInfo(item.getAdditionalInfo());
					melData.setEndCustomerName(StringUtils.isNotBlank(item.getEndCustomerName()) ? item.getEndCustomerName() : StringUtils.EMPTY);
					melData.setEndCustomer(StringUtils.isNotBlank(item.getEndCustomer()) ? item.getEndCustomer() : StringUtils.EMPTY);
					// Adding MANEL flag. If 'Y', this record is present in MANEL date
					melData.setManElFlag(StringUtils.isNotBlank(item.getManelFlag()) ? item.getManelFlag() : StringUtils.EMPTY);
					// Adding flag for records that are already available for a different customer account
					melData.setIsOwnerDetailsMismatch(item.getCustMismatchFlag());
					melData.setPinned(StringUtils.isNotBlank(item.getFavFlag()) ? item.getFavFlag() : StringUtils.EMPTY);
					// Adding value for Product Hierarchy
					melData.setProductHierarchy(StringUtils.isNotBlank(item.getProdH()) ? item.getProdH() : StringUtils.EMPTY);
					
					melData.setUserId(StringUtils.isNotBlank(item.getUserID()) ? item.getUserID() : StringUtils.EMPTY);
					melData.setSensorType(StringUtils.isNotBlank(item.getSensorType()) ? item.getSensorType() : StringUtils.EMPTY);
					melData.setRmaStatus(StringUtils.isNotBlank(item.getRmaStatus()) ? item.getRmaStatus() : StringUtils.EMPTY);
					// Adding value for Product Line for Druck
					melData.setProductLine(StringUtils.isNotBlank(item.getProductLine()) ? item.getProductLine() : StringUtils.EMPTY);

					final List<ServiceHistoryDetails> serviceHistoryList = populateServiceHistoryDetails(response, melData.getPartNumber(),
							melData.getSerialNumber(), melData);

					if (serviceHistoryList != null && serviceHistoryList.size() > 0) {
						for (final ServiceHistoryDetails s : serviceHistoryList) {
							if (StringUtils.isNotBlank(s.getServiceType())) {
								if (s.getServiceType().equalsIgnoreCase("RETURN FOR CREDIT")
										|| s.getServiceType().equalsIgnoreCase("RETURN FOR SCRAP")
										|| s.getServiceType().equalsIgnoreCase("PRODUCT RECALLED")) {
									melData.setStatus(BhgeCoreConstants.MSE_INACTIVE);
									melData.setInactiveFlag(true);
								} else {
									melData.setInactiveFlag(false);
								}
							}
						}
					}
					melData.setServiceHistoryDetails(serviceHistoryList);						
					//Populate last service date based on service history. Populates from table if this value is null
					final String lastServiceDatefromSAP = item.getLastServiceDate();
					populateLastServiceDate(melData, lastServiceDatefromSAP,calibrationDataList);
					populateLastCalibrationDate(melData,calibrationDataList);
					populateHasCalData(melData,calibrationDataList);
					if (StringUtils.isNotBlank(melData.getLastServiceDate()) || StringUtils.isNotBlank(melData.getLastCalibrationDate()) && StringUtils.isNotBlank(melData.getServiceInterval()) && melData.getServiceInterval().chars().allMatch( Character::isDigit)) {
						final String inMonths = getServiceDue(melData.getLastServiceDate(),melData.getLastCalibrationDate(), melData.getServiceInterval(), melData);
						melData.setNextServiceDueInMonths(inMonths);
					}

					// Filter list when end customer is passed in end customer drop down
					if (StringUtils.isNotBlank(endCustomerID)) {
						if (endCustomerID.equalsIgnoreCase(melData.getEndCustomer())) {
							listManELEquipmentDataTable.add(melData);
						}
					} else {
						listManELEquipmentDataTable.add(melData);
					}
				}

			}
		}
		return listManELEquipmentDataTable;
	}

	private String getCalibrationSerialNumber(String mseSerialNumber, String sensorType) {
		String calbrationSerialNumber;
		if (mseSerialNumber.lastIndexOf("-") > -1) {
			if (StringUtils.isNotEmpty(sensorType) && mseSerialNumber.contains(sensorType)
					&& mseSerialNumber.endsWith("-".concat(sensorType))) {
				calbrationSerialNumber = mseSerialNumber.substring(0, mseSerialNumber.lastIndexOf("-"));
			} else {
				calbrationSerialNumber = mseSerialNumber.substring(0, mseSerialNumber.lastIndexOf("-"));
			}
		} else {
			calbrationSerialNumber = mseSerialNumber;
		}
		return calbrationSerialNumber;
	}
	
	private void populateHasCalData(AddToMSEInputData melData,
			List<ProbeCalibrationResponse> calibrationEquipmentList) {
		if (CollectionUtils.isNotEmpty(calibrationEquipmentList)) {
			final String serialNo = getCalibrationSerialNumber(melData.getSerialNumber(), melData.getSensorType());	
			
			calibrationEquipmentList.stream().forEach((calEqu) -> {
				if (calEqu.getProbeSerialNumber().equalsIgnoreCase(serialNo)) {
					melData.setSensorType(calEqu.getSensorType());					
						if (melData.getPinned() != null && StringUtils.isNotBlank(melData.getPinned())) {
							melData.setHasCalData(Boolean.TRUE);						
						}						
						//melData.setProbeModel(calEqu.getProbeModel());
						return;
					
				}
			});
		}
	}

	private void prepareCalibrationList(List<MyEquipmentItem> equipmentsList,
			List<ProbeCalibrationRequest> calibrationEquipmentList) {
		     equipmentsList.stream().forEach((equ) -> {
			ProbeCalibrationRequest probeCalibrationRequest = new ProbeCalibrationRequest();
			
			final String serialNo=getCalibrationSerialNumber(equ.getSerialNumber(), equ.getSensorType());
			if (StringUtils.isNotEmpty(equ.getSensorType())) {
                probeCalibrationRequest.setSensorType(equ.getSensorType());
            } 
			else if (equ.getSerialNumber().lastIndexOf("-") > -1) {
                probeCalibrationRequest.setSensorType(equ.getSerialNumber()
                        .substring(equ.getSerialNumber().lastIndexOf("-") + 1, equ.getSerialNumber().length()));
            }
			 else
	            {
	            probeCalibrationRequest.setSensorType(equ.getSensorType());
	            }
			probeCalibrationRequest.setProbeSerialNumber(serialNo);
			calibrationEquipmentList.add(probeCalibrationRequest);
		});
	}

	/**
	 * Populates last service date based on service history entries. If its null, it checks for date from SAP
	 *
	 * @param melData
	 * @param lastServiceDatefromSAP
	 */
	private void populateLastServiceDate(final AddToMSEInputData melData, final String lastServiceDatefromSAP,
			List<ProbeCalibrationResponse> calibrationEquipmentList) {
		final SimpleDateFormat ddMMMyyyyFormat = new SimpleDateFormat(BhgeCoreConstants.DATE_MONTH_YEAR_FORMAT2);
		final SimpleDateFormat yyyyMMddFormat = new SimpleDateFormat(BhgeCoreConstants.YEAR_MONTH_DATE_FORMAT);
		Date lastServiceDate = null;
		String lastServiceDateString = "";
		try {			
			if (CollectionUtils.isNotEmpty(melData.getServiceDates())) {
				lastServiceDate = Collections.max(melData.getServiceDates());
				lastServiceDateString = ddMMMyyyyFormat.format(lastServiceDate);
				melData.setLastServiceDate(lastServiceDateString);
			} else if (StringUtils.isNotBlank(lastServiceDatefromSAP) && !lastServiceDatefromSAP.equals("0000-00-00")) {
				final Date parsedLastServiceDate = yyyyMMddFormat.parse(lastServiceDatefromSAP);
				lastServiceDateString = ddMMMyyyyFormat.format(parsedLastServiceDate);
				melData.setLastServiceDate(lastServiceDateString);
			}
		} catch (final Exception ex) {
			LOG.error("Exception while setting last service date for equipment with serial number "
					+ melData.getSerialNumber() + " and part number " + melData.getPartNumber());
		}
	}
	
	private void populateLastCalibrationDate(AddToMSEInputData melData,
			List<ProbeCalibrationResponse> calibrationEquipmentList) {
		//final SimpleDateFormat ddMMMyyyyFormat = new SimpleDateFormat(BhgeCoreConstants.DATE_MONTH_YEAR_FORMAT);	
		if (CollectionUtils.isNotEmpty(calibrationEquipmentList)) {
			final String serialNo = getCalibrationSerialNumber(melData.getSerialNumber(), melData.getSensorType());
			
			calibrationEquipmentList.stream().forEach((calEqu) -> {
				if (calEqu.getProbeSerialNumber().equalsIgnoreCase(serialNo)) {
					/*
					 * Map<String,String> partNumberMap = calPortalService.populatePartNumberMap();
					 * String partNumber =
					 * partNumberMap.get(calEqu.getProbeModel())!=null?partNumberMap.get(calEqu.
					 * getProbeModel()):calEqu.getProbeModel();
					 */
					melData.setSensorType(calEqu.getSensorType());	
					//if(partNumber!=null && partNumber.equalsIgnoreCase(melData.getPartNumber())) {
						melData.setLastCalibrationDate(calEqu.getTdate());
						return;
					}
				//}
			});
		}
		
	}
	
	private void populateLastServiceDate(final AddToMSEInputData melData, final String lastServiceDatefromSAP) {
		final SimpleDateFormat ddMMMyyyyFormat = new SimpleDateFormat(BhgeCoreConstants.DATE_MONTH_YEAR_FORMAT2);
		final SimpleDateFormat yyyyMMddFormat = new SimpleDateFormat(BhgeCoreConstants.YEAR_MONTH_DATE_FORMAT);
		Date lastServiceDate = null;
		String lastServiceDateString = "";
		try {
			if (CollectionUtils.isNotEmpty(melData.getServiceDates())) {
				lastServiceDate = Collections.max(melData.getServiceDates());
				lastServiceDateString = ddMMMyyyyFormat.format(lastServiceDate);
				melData.setLastServiceDate(lastServiceDateString);
			} else if (StringUtils.isNotBlank(lastServiceDatefromSAP) && !lastServiceDatefromSAP.equals("0000-00-00")) {
				final Date parsedLastServiceDate = yyyyMMddFormat.parse(lastServiceDatefromSAP);
				lastServiceDateString = ddMMMyyyyFormat.format(parsedLastServiceDate);
				melData.setLastServiceDate(lastServiceDateString);
			}
		} catch (final Exception ex) {
			LOG.error("Exception while setting last service date for equipment with serial number "
					+ melData.getSerialNumber() + " and part number " + melData.getPartNumber());
		}
	}

	private boolean getFavourites(final String partNumber)
	{
		// XXX Auto-generated method stub
		return false;
	}

	private List<ServiceHistoryDetails> prepareServiceHistoryDetails(final JCoFunction function, final String partNumber,
			final String serialNumber, final AddToMSEInputData melData) throws ParseException
	{
		final List<ServiceHistoryDetails> serviceHistoryDataTable = new ArrayList<>();
		final JCoTable serviceHistoryTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_DETAIL);
		final int rowCount = serviceHistoryTable.getNumRows();
		final List<Date> serviceDates = new ArrayList<Date>();
		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				final ServiceHistoryDetails serviceData = new ServiceHistoryDetails();

				serviceData.setPartNumber(serviceHistoryTable.getString(BhgeCoreConstants.MSE_PART_NUMBER));
				serviceData.setSerialNumber(serviceHistoryTable.getString(BhgeCoreConstants.MSE_SERIAL_NUMBER));

				if (partNumber.equalsIgnoreCase(serviceData.getPartNumber())
						&& serialNumber.equalsIgnoreCase(serviceData.getSerialNumber()))
				{
					serviceData.setServiceType(serviceHistoryTable.getString(BhgeCoreConstants.MSE_SERVICE));
					serviceData.setServiceDescription(serviceHistoryTable.getString(BhgeCoreConstants.MSE_PROB_DESC));
					final String serviceDate = serviceHistoryTable.getString(BhgeCoreConstants.MSE_SERVICE_DATE);

					if (!serviceDate.equals("0000-00-00") && StringUtils.isNotBlank(serviceDate))
					{
						final SimpleDateFormat dataFormat = new SimpleDateFormat("yyyy-MM-dd");
						final Date serviceDate1 = dataFormat.parse(serviceDate);
						serviceDates.add(serviceDate1);
						final String serviceDate2 = new SimpleDateFormat("dd MMM, yyy").format(serviceDate1);
						serviceData.setServiceDate(serviceDate2);
					}
					else
					{
						serviceData.setServiceDate("");
					}

					serviceData.setIndex(serviceHistoryTable.getString(BhgeCoreConstants.MSE_INDEX));
					serviceData.setNotification(serviceHistoryTable.getString(BhgeCoreConstants.MSE_NOTIFICATION));
					serviceData.setCreatedOn(serviceHistoryTable.getString(BhgeCoreConstants.MSE_RMA_CREATED_ON));
					serviceData.setReturnedOn(serviceHistoryTable.getString(BhgeCoreConstants.MSE_RETURNED_ON));
					serviceHistoryDataTable.add(serviceData);

				}
				serviceHistoryTable.nextRow();
			}
			melData.setServiceDates(serviceDates);
		}
		return serviceHistoryDataTable;
	}

	private List<ServiceHistoryDetails> populateServiceHistoryDetails(final ZHYBRmaEquipResponse response, final String partNumber,
			final String serialNumber, final AddToMSEInputData melData) throws ParseException
	{
		final List<ServiceHistoryDetails> serviceHistoryDataTable = new ArrayList<>();
		final List<Date> serviceDates = new ArrayList<Date>();
		//final JCoTable serviceHistoryTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_DETAIL);
		ETDetails serviceHistoryTable = response.getEtDetails();
		List<ETDetailItem> items = serviceHistoryTable.getItems();

		if(CollectionUtils.isNotEmpty(items)){
			for (ETDetailItem item : items){
				final ServiceHistoryDetails serviceData = new ServiceHistoryDetails();

				serviceData.setPartNumber(item.getPartNumber());
				serviceData.setSerialNumber(item.getSerialNumber());

				if (partNumber.equalsIgnoreCase(serviceData.getPartNumber())
						&& serialNumber.equalsIgnoreCase(serviceData.getSerialNumber()))
				{
					serviceData.setServiceType(item.getService());
					serviceData.setServiceDescription(item.getProbDesc());
					final String serviceDate = item.getServiceDate();

					if (!serviceDate.equals("0000-00-00") && StringUtils.isNotBlank(serviceDate))
					{
						final SimpleDateFormat dataFormat = new SimpleDateFormat("yyyy-MM-dd");
						final Date serviceDate1 = dataFormat.parse(serviceDate);
						serviceDates.add(serviceDate1);
						final String serviceDate2 = new SimpleDateFormat("dd MMM, yyy").format(serviceDate1);
						serviceData.setServiceDate(serviceDate2);
					}
					else
					{
						serviceData.setServiceDate("");
					}

					serviceData.setIndex(item.getIndexNo());
					serviceData.setNotification(item.getNotification());
					serviceData.setCreatedOn(item.getRmaCreatedOn());
					serviceData.setReturnedOn(item.getReturnedOn());

					serviceHistoryDataTable.add(serviceData);

				}
			}
			melData.setServiceDates(serviceDates);
		}
		return serviceHistoryDataTable;
	}

	private List<AddToMSEInputData> prepareListOfMANElEquipmentData(final JCoFunction function)
	{
		final List<AddToMSEInputData> listManELEquipmentDataTable = new ArrayList<>();
		final JCoTable manElEquipmentTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_EQUIPMENT);
		final int rowCount = manElEquipmentTable.getNumRows();

		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				if (manElEquipmentTable.getString(BhgeCoreConstants.MSE_STATUS) != null && !manElEquipmentTable
						.getString(BhgeCoreConstants.MSE_STATUS).equalsIgnoreCase(BhgeCoreConstants.MSE_INACTIVE))
				{
					final AddToMSEInputData manELData = new AddToMSEInputData();

					manELData.setPartNumber(manElEquipmentTable.getString(BhgeCoreConstants.MSE_PART_NUMBER));
					manELData.setSerialNumber(manElEquipmentTable.getString(BhgeCoreConstants.MSE_SERIAL_NUMBER));
					manELData.setPartName(manElEquipmentTable.getString(BhgeCoreConstants.MSE_PART_NAME));
					manELData.setThereInMELFlag(false);
					if (manElEquipmentTable.getString(BhgeCoreConstants.MSE_MEL_FLAG).equalsIgnoreCase("Y"))
					{
						manELData.setThereInMELFlag(true);
					}

					listManELEquipmentDataTable.add(manELData);
				}
				manElEquipmentTable.nextRow();

			}

		}
		return listManELEquipmentDataTable;
	}

	private List<AddToMSEInputData> prepareListOfMANElEquipment(final ZHYBRmaEquipResponse response)
	{
		final List<AddToMSEInputData> listManELEquipmentDataTable = new ArrayList<>();
		//final JCoTable manElEquipmentTable = function.getTableParameterList().getTable(BhgeCoreConstants.ET_EQUIPMENT);
		final Equipments equipments = response.getEtEquipments();
		final List<EquipmentItem> equipmentsList = equipments.getItems();
		if (!CollectionUtils.isEmpty(equipmentsList))
		{
			for (int i = 0; i < equipmentsList.size(); i++)
			{
				final EquipmentItem equipment = equipmentsList.get(i);
				if (equipment.getStatus() != null && !equipment.getStatus().equalsIgnoreCase(BhgeCoreConstants.MSE_INACTIVE))
				{
					final AddToMSEInputData manELData = new AddToMSEInputData();

					manELData.setPartNumber(equipment.getPartNumer());
					manELData.setSerialNumber(equipment.getSerialNumer());
					manELData.setPartName(equipment.getPartName());
					manELData.setThereInMELFlag(false);
					if (equipment.getMelFlag().equalsIgnoreCase("Y"))
					{
						manELData.setThereInMELFlag(true);
					}

					listManELEquipmentDataTable.add(manELData);
				}
			}
		}
		return listManELEquipmentDataTable;
	}

	//FETCHING EQUIPMENT DATA FOR CUSTOMER - END
	//ADD/UPDATE TO MEL - START

	@Override
	public List<AddToMSEOutputData> addToMEL(final String customerNumber, final List<AddToMSEInputData> inputData)
	{
		LOG.info("Inside getMySiteEquipment Service ....");

		try
		{
			final ExecutorService executor = Executors.newSingleThreadExecutor();
			final JaloSession currentSession = JaloSession.getCurrentSession();
			final AbstractTenant tenant = (AbstractTenant) Registry.getCurrentTenant();
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			LOG.info("Connection fetched ....");
			if (connection != null && !connection.isBackendOffline())
			{
				LOG.info("Connection finalized .... " + customerNumber);
				final int timeout = configurationService.getConfiguration().getInt("bhge.rmastatusforcustomer.timeout.value", 180);
				LOG.info("The timeout value from the properties is ...." + timeout);

				final JCoFunction function = prepareRequestForAddtoMSE(connection, customerNumber, inputData);
				List<AddToMSEOutputData> result = new ArrayList<AddToMSEOutputData>();
				final Callable<Object> task = new Callable<Object>()
				{
					@Override
					public Object call() throws BackendException, ParseException
					{
						LOG.info("Inside the call() method for RMA service exceution..Timeout value is...." + timeout);
						Registry.setCurrentTenant(tenant);
						tenant.setActiveSessionForCurrentThread(currentSession);
						connection.execute(function);
						return processResponseForAddtoMSE(function);
					}
				};

				LOG.info("Executing future.get() start");
				final Future<Object> future = executor.submit(task);
				LOG.info("Executing future.get() end");

				try
				{
					result = (List<AddToMSEOutputData>) future.get(timeout, TimeUnit.SECONDS);
					//LOG.info("***************************** RESULT *********************" + result);
				}
				catch (final TimeoutException ex)
				{
					LOG.error("Time out exception occurred during getRmaStatusForCustomer() execution " + ex);
					//result.setTimeoutException(true);
					handleException(customerNumber, inputData.get(0).getAddUpdateFlag(), ex.getMessage());
					//LOG.error(" TimeOutExceptionValue :  " + result.isTimeoutException());
				}
				catch (final InterruptedException ex)
				{
					LOG.error("Interrupted exception occurred during getRmaStatusForCustomer() execution" + ex);
					//result.setInterruptedException(true);
					handleException(customerNumber, inputData.get(0).getAddUpdateFlag(), ex.getMessage());
				}
				catch (final ExecutionException ex)
				{
					LOG.error("Execution exception occurred during getRmaStatusForCustomer() execution" + ex);
					//result.setExecutionException(true);
					handleException(customerNumber, inputData.get(0).getAddUpdateFlag(), ex.getMessage());
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
			LOG.info("Inside catch block with exception: " + backEndException.getMessage());
			//handleException(customerNumber, orderType, backEndException);
			backEndException.printStackTrace();
		}

		return null;
	}

	//@Override
	public List<AddToMSEOutputData> addToMelRFC(final String customerNumber, final List<AddToMSEInputData> inputData) throws IOException, ParseException, SAXException {

		List<AddToMSEOutputData> addToMSEOutputDataList;
		final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_RMA_MEL_CREATE_ENDPOINT_URL,
				flexibleSearchService);
		ZHYBRmaMSECreateReq addToMelRequest = createAddToMelRequest(customerNumber, inputData);

		ZHYBRmaMSECreateRes result = (ZHYBRmaMSECreateRes)scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, addToMelRequest, ZHYBRmaMSECreateRes.class);

		addToMSEOutputDataList = prepareAddtoMSEResponseDataFromRFC(result);
		return addToMSEOutputDataList;
	}

	private ZHYBRmaMSECreateReq createAddToMelRequest(final String customerNumber, final List<AddToMSEInputData> inputData) throws JsonProcessingException, ParseException {
		LOG.info("Inside prepareRequest .... customerNumber: " + customerNumber);

		XmlMapper xmlMapper = new XmlMapper();
		ZHYBRmaMSECreateReq request = new ZHYBRmaMSECreateReq();
		request.setCustomer(customerNumber);

		MyEquipments myEquipments = new MyEquipments();
		List<MyEquipmentItem> myEquipmentItemList = new ArrayList<>();

		if (inputData.get(0).getAddUpdateFlag().equalsIgnoreCase("CP_ALL"))
		{
			for (final AddToMSEInputData i : inputData)
			{
				request.setCpFlag("CP_ALL");
				MyEquipmentItem myEquipmentItem = new MyEquipmentItem();
				myEquipmentItem.setPartNumber(i.getPartNumber());
				final String serialNo;
				if (StringUtils.isNotEmpty(i.getSerialNumber()) && StringUtils.isNotEmpty(i.getSensorType())) {
					if (i.getSerialNumber().contains(i.getSensorType())
							&& i.getSerialNumber().endsWith("-".concat(i.getSensorType()))) {
						serialNo = i.getSerialNumber();
					}
					else {
						serialNo = i.getSerialNumber().concat("-").concat(i.getSensorType());
					}
				}
				else {
					serialNo = i.getSerialNumber();
				}
				myEquipmentItem.setSerialNumber(serialNo);				
				myEquipmentItemList.add(myEquipmentItem);
			}
		}

		if (inputData.get(0).getAddUpdateFlag().equalsIgnoreCase("CP_REMOVE"))
		{
			for (final AddToMSEInputData i : inputData)
			{
				request.setCpFlag("CP_REMOVE");
				MyEquipmentItem myEquipmentItem = new MyEquipmentItem();
				myEquipmentItem.setPartNumber(i.getPartNumber());				
				final String serialNo;
				if (StringUtils.isNotEmpty(i.getSerialNumber()) && StringUtils.isNotEmpty(i.getSensorType())) {
					if (i.getSerialNumber().contains(i.getSensorType())
							&& i.getSerialNumber().endsWith("-".concat(i.getSensorType()))) {
						serialNo = i.getSerialNumber();
					}
					else {
						serialNo = i.getSerialNumber().concat("-").concat(i.getSensorType());
					}
				}
				else {
					serialNo = i.getSerialNumber();
				}
				myEquipmentItem.setSerialNumber(serialNo);
				myEquipmentItem.setStatus(BhgeCoreConstants.MSE_REMOVED);
				myEquipmentItemList.add(myEquipmentItem);
			}
		}
		else
		{
			for (final AddToMSEInputData i : inputData)
			{
				request.setCpFlag(i.getAddUpdateFlag());

				MyEquipmentItem myEquipmentItem = new MyEquipmentItem();
				myEquipmentItem.setPartNumber(i.getPartNumber() != null ? i.getPartNumber() : "");
				final String serialNo;
				if (StringUtils.isNotEmpty(i.getSerialNumber()) && StringUtils.isNotEmpty(i.getSensorType())) {
					if (i.getSerialNumber().contains(i.getSensorType())
							&& i.getSerialNumber().endsWith("-".concat(i.getSensorType()))) {
						serialNo = i.getSerialNumber();
					} else {
						serialNo = i.getSerialNumber().concat("-").concat(i.getSensorType());
					}
				} else {
					serialNo = i.getSerialNumber();
				}			
				myEquipmentItem.setSerialNumber(serialNo);
				myEquipmentItem.setPartName(i.getPartName() != null ? i.getPartName() : "");
				myEquipmentItem.setUserID(userService.getCurrentUser().getUid());
				myEquipmentItem.setSensorType(i.getSensorType() != null ? i.getSensorType() : "");
				//Setting blank at the moment
				myEquipmentItem.setAdditionalInfo("");
				myEquipmentItem.setProdH("");
				myEquipmentItem.setManelFlag("");
				myEquipmentItem.setCustMismatchFlag("");
				myEquipmentItem.setFavFlag("");
				myEquipmentItem.setRmaStatus("");
				myEquipmentItem.setNxtServiceDue("");
				myEquipmentItem.setProductLine("");
			

				//For Adding an equipment
				if (i.getAddUpdateFlag().equalsIgnoreCase("CP_ADD"))
				{
					myEquipmentItem.setStatus(BhgeCoreConstants.MSE_ACTIVE);
					//Creating item as watchlist item directly. Requirement as part of pana cal Sept release 2021
					myEquipmentItem.setFavFlag(BhgeCoreConstants.MSE_FAV_FLAG_VALUE);
				}
				//For Archiving an equipment
				if (i.getAddUpdateFlag().equalsIgnoreCase("CP_UPDATE") && i.getStatus().equalsIgnoreCase(BhgeCoreConstants.MSE_ACTIVE)
						&& i.isRemoveFlag() && null != i.getSelectedOption() && i.getSelectedOption().equalsIgnoreCase(BhgeCoreConstants.ARCHIVED_CONST))
				{
					myEquipmentItem.setStatus(BhgeCoreConstants.MSE_INACTIVE);
					//If item is archived, it should be removed from the Pinned list.
					myEquipmentItem.setFavFlag("");
				}
				//For Retrieving an equipment
				if (i.getAddUpdateFlag().equalsIgnoreCase("CP_UPDATE")
						&& BhgeCoreConstants.MSE_INACTIVE.equalsIgnoreCase(i.getStatus()) && i.isRemoveFlag() && null != i.getSelectedOption()
						&& BhgeCoreConstants.ARCHIVED_CONST.equalsIgnoreCase(i.getSelectedOption()))
				{
					myEquipmentItem.setStatus(BhgeCoreConstants.MSE_ACTIVE);
					myEquipmentItem.setFavFlag(i.getPinned());
				}
				//For updating an active equipment
				if ("CP_UPDATE".equalsIgnoreCase(i.getAddUpdateFlag()) && BhgeCoreConstants.MSE_ACTIVE.equalsIgnoreCase(i.getStatus())
						&& !i.isRemoveFlag())
				{
					myEquipmentItem.setStatus(BhgeCoreConstants.MSE_ACTIVE);
					myEquipmentItem.setFavFlag(i.getPinned());
				}
				//For updating an inactive equipment
				if ("CP_UPDATE".equalsIgnoreCase(i.getAddUpdateFlag())
						&& BhgeCoreConstants.MSE_INACTIVE.equalsIgnoreCase(i.getStatus()) && !i.isRemoveFlag())
				{
					myEquipmentItem.setStatus(BhgeCoreConstants.MSE_INACTIVE);
					//If item is archived, it should be removed from the Pinned list.
					myEquipmentItem.setFavFlag("");
				}

				//For Pin an equipment
				if ("CP_UPDATE".equalsIgnoreCase(i.getAddUpdateFlag()) && StringUtils.isBlank(i.getPinned()) && null != i.getSelectedOption()
						&& BhgeCoreConstants.PINNED_CONST.equalsIgnoreCase(i.getSelectedOption()))
				{
					myEquipmentItem.setFavFlag(BhgeCoreConstants.MSE_FAV_FLAG_VALUE);
					// If you â€˜pinâ€™ an item from the archived section, it should probably automatically be restored also
					if (i.getStatus().equalsIgnoreCase(BhgeCoreConstants.MSE_INACTIVE))
					{
						myEquipmentItem.setStatus(BhgeCoreConstants.MSE_ACTIVE);
					}
					else
					{
						myEquipmentItem.setStatus(i.getStatus());
					}
				}
				//For Unpin an equipment
				if ("CP_UPDATE".equalsIgnoreCase(i.getAddUpdateFlag()) && StringUtils.isNotBlank(i.getPinned())
						&& BhgeCoreConstants.MSE_FAV_FLAG_VALUE.equalsIgnoreCase(i.getPinned()) && null != i.getSelectedOption()
						&& BhgeCoreConstants.PINNED_CONST.equalsIgnoreCase(i.getSelectedOption()))
				{
					myEquipmentItem.setFavFlag("");
					myEquipmentItem.setStatus(i.getStatus());
				}

//				if (i.getAssetNumber() != null)
//				{
//					myEquipmentItem.setAssetNumber(i.getAssetNumber());
//				}
				myEquipmentItem.setAssetNumber(i.getAssetNumber() != null ? i.getAssetNumber() : "");
			
//				if (i.getLocation() != null)
//				{
//					myEquipmentItem.setLocation(i.getLocation());
//				}
				myEquipmentItem.setLocation(i.getLocation() != null ? i.getLocation() : "");
				//Setting blank. To be replaced with formatted value in following code

				
				myEquipmentItem.setLastServiceDate("");
				
				if (StringUtils.isNotBlank(i.getLastServiceDate()) && i.getLastServiceDate() != null
						&& i.getLastServiceDate().contains("-")) {
					final SimpleDateFormat dataFormat = new SimpleDateFormat("yyyy-MM-dd");
					final Date lastServiceDate = dataFormat.parse(i.getLastServiceDate());
					// table.setValue(BhgeCoreConstants.MSE_LAST_SERVICE_DATE, lastServiceDate);
					myEquipmentItem.setLastServiceDate(dataFormat.format(lastServiceDate));
				}
				if (StringUtils.isNotBlank(i.getLastServiceDate()) && i.getLastServiceDate() != null
						&& !i.getLastServiceDate().contains("-")) {
					final SimpleDateFormat dataFormat = new SimpleDateFormat("dd MMM yyyy");
					final Date lastServiceDate1 = dataFormat.parse(i.getLastServiceDate());
					final String lastServiceDate2 = new SimpleDateFormat("yyyy-MM-dd").format(lastServiceDate1);
					// table.setValue(BhgeCoreConstants.MSE_LAST_SERVICE_DATE, lastServiceDate2);
					myEquipmentItem.setLastServiceDate(lastServiceDate2);
				}
				

				myEquipmentItem.setHtsCode(i.getHtsCode() != null ? i.getHtsCode() : StringUtils.EMPTY);
				myEquipmentItem.setServiceInternal(i.getServiceInterval() != null ? i.getServiceInterval() : StringUtils.EMPTY);
				myEquipmentItem.setAdditionalInfo(i.getAdditionalInfo() != null ? i.getAdditionalInfo() : StringUtils.EMPTY);
				myEquipmentItem.setEndCustomer(StringUtils.isNotBlank(i.getEndCustomer()) ? i.getEndCustomer() : StringUtils.EMPTY);
				myEquipmentItem.setEndCustomerName(i.getEndCustomerName() != null ? i.getEndCustomerName() : StringUtils.EMPTY);
				myEquipmentItem.setCustomer(StringUtils.isNotBlank(i.getCustomer()) ? i.getCustomer() : customerNumber);
				myEquipmentItemList.add(myEquipmentItem);
			}
		}

		myEquipments.setItems(myEquipmentItemList);
		request.setMyequipment(myEquipments);
		String xml = xmlMapper.writeValueAsString(request);
		LOG.info("MYSITE EQUIPMENT REQUEST FOR CUSTOMER: " + xml);

		return request;
	}

	private JCoFunction prepareRequestForAddtoMSE(final JCoConnection connection, final String customerNumber,
			final List<AddToMSEInputData> inputData) throws BackendException, ParseException
	{
		LOG.info("Inside prepareRequest .... customerNumber: " + customerNumber);

		final JCoFunction function = setFunctionAndDefaultForCustomer(connection, customerNumber);
		final JCoTable table = function.getTableParameterList().getTable(BhgeCoreConstants.ET_MYEQUIPMENT);



		if (inputData.get(0).getAddUpdateFlag().equalsIgnoreCase("CP_ALL"))
		{
			for (final AddToMSEInputData i : inputData)
			{
				function.getImportParameterList().setValue(BhgeCoreConstants.MSE_TYPE, "CP_ALL");
				table.appendRow();
				table.setValue(BhgeCoreConstants.MSE_PART_NUMBER, i.getPartNumber());
				table.setValue(BhgeCoreConstants.MSE_SERIAL_NUMBER, i.getSerialNumber());
			}
		}

		if (inputData.get(0).getAddUpdateFlag().equalsIgnoreCase("CP_REMOVE"))
		{
			for (final AddToMSEInputData i : inputData)
			{
				function.getImportParameterList().setValue(BhgeCoreConstants.MSE_TYPE, "CP_REMOVE");
				table.appendRow();
				table.setValue(BhgeCoreConstants.MSE_PART_NUMBER, i.getPartNumber());
				table.setValue(BhgeCoreConstants.MSE_SERIAL_NUMBER, i.getSerialNumber());
				table.setValue(BhgeCoreConstants.MSE_STATUS, BhgeCoreConstants.MSE_REMOVED);
			}
		}

		else
		{
			for (final AddToMSEInputData i : inputData)
			{
				function.getImportParameterList().setValue(BhgeCoreConstants.MSE_TYPE, i.getAddUpdateFlag());

				table.appendRow();
				table.setValue(BhgeCoreConstants.MSE_PART_NUMBER, i.getPartNumber());
				table.setValue(BhgeCoreConstants.MSE_SERIAL_NUMBER, i.getSerialNumber());

				if (i.getPartName() != null)
				{
					table.setValue(BhgeCoreConstants.MSE_PART_NAME, i.getPartName());
				}

				//For Adding an equipment
				if (i.getAddUpdateFlag().equalsIgnoreCase("CP_ADD"))
				{
					table.setValue(BhgeCoreConstants.MSE_STATUS, BhgeCoreConstants.MSE_ACTIVE);
					//Pin the equipment directly
					table.setValue(BhgeCoreConstants.MSE_FAV_FLAG, BhgeCoreConstants.MSE_FAV_FLAG_VALUE);
				}
				//For Archiving an equipment
				if (i.getAddUpdateFlag().equalsIgnoreCase("CP_UPDATE") && i.getStatus().equalsIgnoreCase(BhgeCoreConstants.MSE_ACTIVE)
						&& i.isRemoveFlag() && null != i.getSelectedOption() && i.getSelectedOption().equalsIgnoreCase(BhgeCoreConstants.ARCHIVED_CONST))
				{
					table.setValue(BhgeCoreConstants.MSE_STATUS, BhgeCoreConstants.MSE_INACTIVE);
					//If item is archived, it should be removed from the Pinned list. 
					table.setValue(BhgeCoreConstants.MSE_FAV_FLAG, "");
				}
				//For Retrieving an equipment
				if (i.getAddUpdateFlag().equalsIgnoreCase("CP_UPDATE")
						&& i.getStatus().equalsIgnoreCase(BhgeCoreConstants.MSE_INACTIVE) && i.isRemoveFlag() && null != i.getSelectedOption()
						&& i.getSelectedOption().equalsIgnoreCase(BhgeCoreConstants.ARCHIVED_CONST))
				{
					table.setValue(BhgeCoreConstants.MSE_STATUS, BhgeCoreConstants.MSE_ACTIVE);
					table.setValue(BhgeCoreConstants.MSE_FAV_FLAG, i.getPinned());
				}
				//For updating an active equipment
				if (i.getAddUpdateFlag().equalsIgnoreCase("CP_UPDATE") && i.getStatus().equalsIgnoreCase(BhgeCoreConstants.MSE_ACTIVE)
						&& !i.isRemoveFlag())
				{
					table.setValue(BhgeCoreConstants.MSE_STATUS, BhgeCoreConstants.MSE_ACTIVE);
					table.setValue(BhgeCoreConstants.MSE_FAV_FLAG, i.getPinned());
				}
				//For updating an inactive equipment
				if (i.getAddUpdateFlag().equalsIgnoreCase("CP_UPDATE")
						&& i.getStatus().equalsIgnoreCase(BhgeCoreConstants.MSE_INACTIVE) && !i.isRemoveFlag())
				{
					table.setValue(BhgeCoreConstants.MSE_STATUS, BhgeCoreConstants.MSE_INACTIVE);
					//If item is archived, it should be removed from the Pinned list.
					table.setValue(BhgeCoreConstants.MSE_FAV_FLAG, "");
				}
				
				//For Pin an equipment
				if (i.getAddUpdateFlag().equalsIgnoreCase("CP_UPDATE") && i.getPinned().equalsIgnoreCase("") && null != i.getSelectedOption()
						&& i.getSelectedOption().equalsIgnoreCase(BhgeCoreConstants.PINNED_CONST))
				{
					table.setValue(BhgeCoreConstants.MSE_FAV_FLAG, BhgeCoreConstants.MSE_FAV_FLAG_VALUE);
					// If you â€˜pinâ€™ an item from the archived section, it should probably automatically be restored also
					if (i.getStatus().equalsIgnoreCase(BhgeCoreConstants.MSE_INACTIVE))
					{
						table.setValue(BhgeCoreConstants.MSE_STATUS, BhgeCoreConstants.MSE_ACTIVE);
					}
					else
					{
						table.setValue(BhgeCoreConstants.MSE_STATUS, i.getStatus());
					}
				}
				//For Unpin an equipment
				if (i.getAddUpdateFlag().equalsIgnoreCase("CP_UPDATE")
						&& i.getPinned().equalsIgnoreCase(BhgeCoreConstants.MSE_FAV_FLAG_VALUE) && null != i.getSelectedOption()
						&& i.getSelectedOption().equalsIgnoreCase(BhgeCoreConstants.PINNED_CONST))
				{
					table.setValue(BhgeCoreConstants.MSE_FAV_FLAG, "");
					table.setValue(BhgeCoreConstants.MSE_STATUS, i.getStatus());
				}
				
				if (i.getAssetNumber() != null)
				{
					table.setValue(BhgeCoreConstants.MSE_ASSET_NUMBER, i.getAssetNumber());
				}

				if (i.getLocation() != null)
				{
					table.setValue(BhgeCoreConstants.MSE_LOCATION, i.getLocation());
				}
				//Setting blank. Will be replaced with formatted value in following code
				table.setValue(BhgeCoreConstants.MSE_LAST_SERVICE_DATE, "");
				if (StringUtils.isNotBlank(i.getLastServiceDate()) && i.getLastServiceDate() != null
						&& i.getLastServiceDate().contains("-"))
				{
					final SimpleDateFormat dataFormat = new SimpleDateFormat("yyyy-MM-dd");
					final Date lastServiceDate = dataFormat.parse(i.getLastServiceDate());
					table.setValue(BhgeCoreConstants.MSE_LAST_SERVICE_DATE, lastServiceDate);
				}
				if (StringUtils.isNotBlank(i.getLastServiceDate()) && i.getLastServiceDate() != null
						&& !i.getLastServiceDate().contains("-"))
				{
					final SimpleDateFormat dataFormat = new SimpleDateFormat("dd MMM yyyy");
					final Date lastServiceDate1 = dataFormat.parse(i.getLastServiceDate());
					final String lastServiceDate2 = new SimpleDateFormat("yyyy-MM-dd").format(lastServiceDate1);
					table.setValue(BhgeCoreConstants.MSE_LAST_SERVICE_DATE, lastServiceDate2);
				}

				table.setValue(BhgeCoreConstants.MSE_HTS_CODE, i.getHtsCode() != null ? i.getHtsCode() : StringUtils.EMPTY);
				table.setValue(BhgeCoreConstants.MSE_SERVICE_INTERVAL, i.getServiceInterval() != null ? i.getServiceInterval() : StringUtils.EMPTY);
				table.setValue(BhgeCoreConstants.MSE_ADDITIONAL_INFO, i.getAdditionalInfo() != null ? i.getAdditionalInfo() : StringUtils.EMPTY);
				table.setValue(BhgeCoreConstants.MSE_END_CUSTOMER, StringUtils.isNotBlank(i.getEndCustomer()) ? i.getEndCustomer() : StringUtils.EMPTY);
				table.setValue(BhgeCoreConstants.MSE_END_CUSTOMER_NAME, i.getEndCustomerName() != null ? i.getEndCustomerName() : StringUtils.EMPTY);
				table.setValue(BhgeCoreConstants.CUSTOMER, customerNumber);
			}

		}

		LOG.info("MYSITE EQUIPMENT REQUEST FOR CUSTOMER: " + function.toXML());
		LOG.info(function);
		return function;
	}


	private String getKey(final String custNumber, final String MANorMELflag)
	{
		if (StringUtils.isNotBlank(custNumber) && StringUtils.isNotBlank(MANorMELflag))
		{
			return custNumber + "-" + MANorMELflag;
		}
		return null;
	}


	private JCoFunction setFunctionAndDefaultForCustomer(final JCoConnection connection, final String customerNumber)
			throws BackendException
	{
		LOG.info("MYSITE EQUIPMENT Tracking RFC: Setting the Default Input parameters");

		final String mySiteEquipmentFunction = Config.getString("SAP_MY_SITE_EQUIPMENT_FUNCTION", "ZHYB_RMA_MEL_CREATE");
		final JCoFunction function = connection.getFunction(mySiteEquipmentFunction);

		LOG.info("--------------------- customerNumber:" + customerNumber);

		function.getImportParameterList().setValue(BhgeCoreConstants.MSE_CUSTOMER_ACCOUNT, customerNumber);

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

	private List<AddToMSEOutputData> processResponseForAddtoMseRFC(ZHYBRmaServHistRes response) {
		XmlMapper xmlMapper = new XmlMapper();
		List<AddToMSEOutputData> result = new ArrayList<AddToMSEOutputData>();
		MSEMessageTable messageTable = response.getMessageTable();

		for (MSEMessageTableItem item : messageTable.getItems()){
			final AddToMSEOutputData msedata = new AddToMSEOutputData();
			msedata.setResponseType(item.getType());
			msedata.setNumber(item.getNumber());
			msedata.setMessage(item.getMessage());
			msedata.setMessageNumber(item.getLogMsgNo());
			msedata.setPartNumber(item.getMessageV1());
			msedata.setSerialNumber(item.getMessageV2());

			result.add(msedata);
		}
		try {
			String xml = xmlMapper.writeValueAsString(result);
			LOG.info("Service History Response : " +xml);
		} catch (JsonProcessingException e) {
			LOG.error("Exception while Coverting Service History Response");
		}
		return result;
	}

	private List<AddToMSEOutputData> processResponseForAddtoMSE(final JCoFunction function) throws ParseException
	{
		LOG.info("MYSITE EQUIPMENT Response: " + function.toXML());
		List<AddToMSEOutputData> mseResponseData = new ArrayList<AddToMSEOutputData>();
		mseResponseData = prepareAddtoMSEResponseData(function);
		return mseResponseData;
	}

	private List<AddToMSEOutputData> prepareAddtoMSEResponseData(final JCoFunction function)
	{
		final List<AddToMSEOutputData> mseResponseData = new ArrayList<AddToMSEOutputData>();
		final JCoTable mseMessageTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_MESSAGETABLE);
		final int rowCount = mseMessageTable.getNumRows();

		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				final AddToMSEOutputData msedata = new AddToMSEOutputData();
				msedata.setResponseType(mseMessageTable.getString(BhgeCoreConstants.MSE_RESPONSE_TYPE));
				msedata.setNumber(mseMessageTable.getString(BhgeCoreConstants.MSE_NUMBER));
				msedata.setMessage(mseMessageTable.getString(BhgeCoreConstants.MSE_MESSAGE));
				msedata.setMessageNumber(mseMessageTable.getString(BhgeCoreConstants.MSE_LOG_MSG_NO));
				msedata.setPartNumber(mseMessageTable.getString(BhgeCoreConstants.MSE_MESSAGE_V1));
				msedata.setSerialNumber(mseMessageTable.getString(BhgeCoreConstants.MSE_MESSAGE_V2));

				mseResponseData.add(msedata);

				mseMessageTable.nextRow();
			}

		}
		return mseResponseData;
	}

	private List<AddToMSEOutputData> prepareAddtoMSEResponseDataFromRFC(final ZHYBRmaMSECreateRes result)
	{
		final List<AddToMSEOutputData> mseResponseData = new ArrayList<AddToMSEOutputData>();

		MSEMessageTable messageTable = result.getMessageTable();
		List<MSEMessageTableItem> items = messageTable.getItems();

		if(CollectionUtils.isNotEmpty(items)){
			for (MSEMessageTableItem item : items){
				final AddToMSEOutputData msedata = new AddToMSEOutputData();
				msedata.setResponseType(item.getType());
				msedata.setNumber(item.getNumber());
				msedata.setMessage(item.getMessage());
				msedata.setMessageNumber(item.getLogMsgNo());
				msedata.setPartNumber(item.getMessageV1());
				msedata.setSerialNumber(item.getMessageV2());

				mseResponseData.add(msedata);
			}
		}
		return mseResponseData;
	}

	//ADD/UPDATE TO MEL - END

	//MEL LOOKUP - START

	@Override
	public EquipmentData getMSELookupRFC(final String customerNumber, final String partNumber, final String serialNumber)
	{
		LOG.info("Inside getMySiteEquipment Service ....");

		XmlMapper xmlMapper = new XmlMapper();
		EquipmentData equipmentData = null;
		final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_RMA_EQUIP_ENDPOINT_URL,
				flexibleSearchService);

		ZHYBRmaEquipRequest zhybRmaEquipRequest = null;
		try {
			zhybRmaEquipRequest = prepareRequestForMSELookupRFC(customerNumber, partNumber, serialNumber);
		} catch (BackendException e) {
			LOG.error("Backend Exception in getMSELookupRFC");
		}

		ZHYBRmaEquipResponse response = (ZHYBRmaEquipResponse) scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, zhybRmaEquipRequest,
				ZHYBRmaEquipResponse.class);
		try {
			String responseValue = xmlMapper.writeValueAsString(response);
			LOG.info("ZHYBRmaEquipResponse : " + responseValue);
		} catch (JsonProcessingException e) {
			LOG.error("JsonProcessingException in getMSELookupRFC");
		}


		try {
			equipmentData = processResponseForEquipmentDataRFC(response, BhgeCoreConstants.CP_ALL, null);
		} catch (ParseException e) {
			LOG.error("ParseException in getMSELookupRFC",e);
		}catch (final Exception backEndException)
		{
			LOG.info("Inside catch block with exception: " + backEndException.getMessage());
			LOG.error("ParseException in getMSELookupRFC",backEndException);
		}
		return equipmentData;

	}

	@Override
	public EquipmentData getMSELookup(final String customerNumber, final String partNumber, final String serialNumber)
	{
		LOG.info("Inside getMySiteEquipment Service ....");

		try
		{
			final ExecutorService executor = Executors.newSingleThreadExecutor();
			final JaloSession currentSession = JaloSession.getCurrentSession();
			final AbstractTenant tenant = (AbstractTenant) Registry.getCurrentTenant();
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			LOG.info("Connection fetched ....");
			if (connection != null && !connection.isBackendOffline())
			{
				LOG.info("Connection finalized .... " + customerNumber);
				final int timeout = configurationService.getConfiguration().getInt("bhge.rmastatusforcustomer.timeout.value", 180);
				LOG.info("The timeout value from the properties is ...." + timeout);

				final JCoFunction function = prepareRequestForMSELookup(connection, customerNumber, partNumber, serialNumber);
				EquipmentData result = new EquipmentData();
				final Callable<Object> task = new Callable<Object>()
				{
					@Override
					public Object call() throws BackendException, ParseException
					{
						LOG.info("Inside the call() method for RMA service exceution..Timeout value is...." + timeout);
						Registry.setCurrentTenant(tenant);
						tenant.setActiveSessionForCurrentThread(currentSession);
						connection.execute(function);
						return processResponseForEquipmentData(function, BhgeCoreConstants.CP_ALL, null);
					}

				};

				LOG.info("Executing future.get() start");
				final Future<Object> future = executor.submit(task);
				LOG.info("Executing future.get() end");

				try
				{
					result = (EquipmentData) future.get(timeout, TimeUnit.SECONDS);
					//LOG.info("***************************** RESULT *********************" + result);
				}
				catch (final TimeoutException ex)
				{
					LOG.error("Time out exception occurred during getRmaStatusForCustomer() execution " + ex);
					result.setTimeoutException(true);
					handleException(customerNumber, "MEL_LOOKUP", ex.getMessage());
					//LOG.error(" TimeOutExceptionValue :  " + result.isTimeoutException());
				}
				catch (final InterruptedException ex)
				{
					LOG.error("Interrupted exception occurred during getRmaStatusForCustomer() execution" + ex);
					result.setInterruptedException(true);
					handleException(customerNumber, "MEL_LOOKUP", ex.getMessage());
				}
				catch (final ExecutionException ex)
				{
					LOG.error("Execution exception occurred during getRmaStatusForCustomer() execution" + ex);
					result.setExecutionException(true);
					handleException(customerNumber, "MEL_LOOKUP", ex.getMessage());
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
			LOG.info("Inside catch block with exception: " + backEndException.getMessage());
			//handleException(customerNumber, orderType, backEndException);
			backEndException.printStackTrace();
		}

		return null;
	}

	private ZHYBRmaEquipRequest prepareRequestForMSELookupRFC(final String customerNumber,
												   final String partNumber, final String serialNumber) throws BackendException
	{
		LOG.info("Inside prepareRequest .... customerNumber: " + customerNumber + " " + "and partNumber" + partNumber + " "
				+ "serialNumber " + serialNumber);

		XmlMapper xmlMapper = new XmlMapper();
		final ZHYBRmaEquipRequest zhybRmaEquipment = new ZHYBRmaEquipRequest();

		final String flag = "MEL_LOOKUP";

		zhybRmaEquipment.setCustNum(customerNumber);
		zhybRmaEquipment.setCpFLAG(flag);
		zhybRmaEquipment.setPartNum(partNumber);
		zhybRmaEquipment.setSerNum(serialNumber);
		zhybRmaEquipment.setCpDetail("X");
		zhybRmaEquipment.setUserID(userService.getCurrentUser() != null ? userService.getCurrentUser().getUid() : "");

		//Date range for 3 years
		try
		{
			final Calendar calendar = Calendar.getInstance();
			final Date currentDate = calendar.getTime();
			final SimpleDateFormat simpleDateFormatForRequest = new SimpleDateFormat(BhgeCoreConstants.YEAR_MONTH_DATE_FORMAT);
			calendar.add(Calendar.YEAR, -3);
			final Date past3YearDate = calendar.getTime();
			//setting from date and to date
			zhybRmaEquipment.setFromDate(simpleDateFormatForRequest.format(past3YearDate));
			zhybRmaEquipment.setToDate(simpleDateFormatForRequest.format(currentDate));
		}
		catch (final Exception ex)
		{
			LOG.error("Issue with setting date for past 3 years in MEL call" + ex);
		}

		try {
			String xml = xmlMapper.writeValueAsString(zhybRmaEquipment);
			LOG.info("ZHYBRmaEquipRequest request : " +xml);
		} catch (JsonProcessingException e) {
			LOG.error("Exception while Coverting ZHYBRmaEquipRequest");
		}
		return zhybRmaEquipment;
	}

	private JCoFunction prepareRequestForMSELookup(final JCoConnection connection, final String customerNumber,
			final String partNumber, final String serialNumber) throws BackendException
	{
		LOG.info("Inside prepareRequest .... customerNumber: " + customerNumber + " " + "and partNumber" + partNumber + " "
				+ "serialNumber " + serialNumber);

		LOG.info("MYSITE EQUIPMENT LOOKUP RFC: Setting the Default Input parameters");

		final String mySiteEquipmentFunction = Config.getString("SAP_MY_SITE_EQUIPMENT_LOOKUP_FUNCTION", "ZHYB_RMA_EQUIP");
		final JCoFunction function = connection.getFunction(mySiteEquipmentFunction);
		final String flag = "MEL_LOOKUP";

		function.getImportParameterList().setValue(BhgeCoreConstants.CUST_NUM, customerNumber);
		function.getImportParameterList().setValue(BhgeCoreConstants.MSE_TYPE, flag);
		function.getImportParameterList().setValue(BhgeCoreConstants.MSE_PART_NUM, partNumber);
		function.getImportParameterList().setValue(BhgeCoreConstants.MSE_SER_NUM, serialNumber);
		function.getImportParameterList().setValue(BhgeCoreConstants.MSE_CP_DETAIL, "X");

		//Date range for 3 years
		try
		{
			final Calendar calendar = Calendar.getInstance();
			final Date currentDate = calendar.getTime();
			calendar.add(Calendar.YEAR, -3);
			final Date past3YearDate = calendar.getTime();
			//setting from date and to date
			function.getImportParameterList().setValue(BhgeCoreConstants.FROM_DATE, past3YearDate);
			function.getImportParameterList().setValue(BhgeCoreConstants.TO_DATE, currentDate);
		}
		catch (final Exception ex)
		{
			LOG.error("Issue with setting date for past 3 years in MEL call" + ex);
		}

		LOG.info("New Function" + function.getImportParameterList());
		LOG.info(function);

		return function;

	}
	//MEL LOOKUP - END

	//ADD-REMOVE SERVICE HISTORY - START

	@Override
	public List<AddToMSEOutputData> addServiceHistory(final String customerNumber,
			final ServiceHistoryDetails serviceHistoryInputData)
	{
		LOG.info("Inside addServiceHistory Service ....");

		try
		{
			final ExecutorService executor = Executors.newSingleThreadExecutor();
			final JaloSession currentSession = JaloSession.getCurrentSession();
			final AbstractTenant tenant = (AbstractTenant) Registry.getCurrentTenant();
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			LOG.info("Connection fetched ....");
			if (connection != null && !connection.isBackendOffline())
			{
				LOG.info("Connection finalized .... " + customerNumber);
				final int timeout = configurationService.getConfiguration().getInt("bhge.rmastatusforcustomer.timeout.value", 180);
				LOG.info("The timeout value from the properties is ...." + timeout);

				final JCoFunction function = prepareRequestForAddServiceHistory(connection, customerNumber, serviceHistoryInputData);
				List<AddToMSEOutputData> result = new ArrayList<AddToMSEOutputData>();
				final Callable<Object> task = new Callable<Object>()
				{
					@Override
					public Object call() throws BackendException, ParseException
					{
						LOG.info("Inside the call() method for EQUIPMENT service exceution..Timeout value is...." + timeout);
						Registry.setCurrentTenant(tenant);
						tenant.setActiveSessionForCurrentThread(currentSession);
						connection.execute(function);
						return processResponseForAddtoMSE(function);
					}

				};

				LOG.info("Executing future.get() start");
				final Future<Object> future = executor.submit(task);
				LOG.info("Executing future.get() end");

				try
				{
					result = (List<AddToMSEOutputData>) future.get(timeout, TimeUnit.SECONDS);
					//LOG.info("***************************** RESULT *********************" + result);
				}
				catch (final TimeoutException ex)
				{
					LOG.error("Time out exception occurred during getRmaStatusForCustomer() execution " + ex);
					//result.setTimeoutException(true);
					handleException(customerNumber, serviceHistoryInputData.getAddRemoveFlag(), ex.getMessage());
					//LOG.error(" TimeOutExceptionValue :  " + result.isTimeoutException());
				}
				catch (final InterruptedException ex)
				{
					LOG.error("Interrupted exception occurred during getRmaStatusForCustomer() execution" + ex);
					//result.setInterruptedException(true);
					handleException(customerNumber, serviceHistoryInputData.getAddRemoveFlag(), ex.getMessage());
				}
				catch (final ExecutionException ex)
				{
					LOG.error("Execution exception occurred during getRmaStatusForCustomer() execution" + ex);
					//result.setExecutionException(true);
					handleException(customerNumber, serviceHistoryInputData.getAddRemoveFlag(), ex.getMessage());
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
			LOG.info("Inside catch block with exception: " + backEndException.getMessage());
			//handleException(customerNumber, orderType, backEndException);
			backEndException.printStackTrace();
		}

		return null;
	}


	@Override
	public List<AddToMSEOutputData> addServiceHistoryRFC(final String customerNumber,
													  final ServiceHistoryDetails serviceHistoryInputData)
	{
		LOG.info("Inside addServiceHistory Service ....");
		try
		{
			List<AddToMSEOutputData> result = new ArrayList<AddToMSEOutputData>();

			ZHYBRmaServHistReq zhybRmaServHistReq = prepareRequestForAddServiceHistoryRFC(customerNumber, serviceHistoryInputData);

			LOG.info("Requested for Customer .... " + customerNumber);
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_RMA_SERV_HIST_ENDPOINT_URL,
					flexibleSearchService);

			ZHYBRmaServHistRes response = (ZHYBRmaServHistRes) scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl,zhybRmaServHistReq, ZHYBRmaServHistRes.class);
			result = processResponseForAddtoMseRFC(response);

			return result;
		}
		catch (final Exception backEndException)
		{
			LOG.info("Inside catch block with exception: " + backEndException);
			handleException(customerNumber, serviceHistoryInputData.getAddRemoveFlag(), backEndException.getMessage());
		}
		return null;
	}

	private ZHYBRmaServHistReq prepareRequestForAddServiceHistoryRFC(String customerNumber, ServiceHistoryDetails serviceHistoryInputData) {
		XmlMapper xmlMapper = new XmlMapper();

		ZHYBRmaServHistReq request = new ZHYBRmaServHistReq();

		LOG.info("--------------------- customerNumber:" + customerNumber);
		request.setCpFlag(serviceHistoryInputData.getAddRemoveFlag());
		request.setCustomer(customerNumber);

		MSEHistETDetailItem item = new MSEHistETDetailItem();

		if (serviceHistoryInputData.getAddRemoveFlag().equals("CP_HIS_ADD"))
		{
			item.setPartNumber(serviceHistoryInputData.getPartNumber());
			item.setSerialNumber(serviceHistoryInputData.getSerialNumber());

			item.setNotification(serviceHistoryInputData.getNotification());

			item.setRmaCreatedOn(serviceHistoryInputData.getCreatedOn());
			item.setReturnedOn(serviceHistoryInputData.getReturnedOn());

			if (serviceHistoryInputData.getServiceDate() != null)
			{
				final SimpleDateFormat dataFormat = new SimpleDateFormat(BhgeCoreConstants.DATE_MONTH_YEAR_FORMAT);
				final SimpleDateFormat dataFormatForRequest = new SimpleDateFormat(BhgeCoreConstants.YEAR_MONTH_DATE_FORMAT);
				Date lastServiceDate = null;
				try {
					lastServiceDate = dataFormat.parse(serviceHistoryInputData.getServiceDate());
				} catch (ParseException e) {
					LOG.error("ParseException in prepareRequestForAddServiceHistoryRFC");
				}
				item.setServiceDate(dataFormatForRequest.format(lastServiceDate));
			}

			item.setIndexNo(serviceHistoryInputData.getIndex());
			item.setProbDesc(serviceHistoryInputData.getServiceDescription());

			item.setService(serviceHistoryInputData.getServiceType());

			LOG.info(item);

		}


		if (serviceHistoryInputData.getAddRemoveFlag().equals("CP_HIS_DEL"))
		{
			item.setPartNumber(serviceHistoryInputData.getPartNumber());
			item.setSerialNumber(serviceHistoryInputData.getSerialNumber());
			item.setIndexNo(serviceHistoryInputData.getIndex());

			LOG.info(item);
		}

		request.getmSEHistETDetail().getItems().add(item);
		try {
			String xml = xmlMapper.writeValueAsString(request);
			LOG.info("Add Service History REQUEST: " + xml);
		} catch (JsonProcessingException e) {
			LOG.error("Exception while converting ZHYBRmaServHistReq to String");
		}

		return request;
	}


	private JCoFunction prepareRequestForAddServiceHistory(final JCoConnection connection, final String customerNumber,
			final ServiceHistoryDetails serviceHistoryInputData) throws BackendException, ParseException
	{
		LOG.info("Inside prepareRequest for adding Service History.... customerNumber: " + customerNumber);

		final JCoFunction function = setFunctionAndDefaultforAddingServiceHistory(connection, customerNumber,
				serviceHistoryInputData);

		final JCoTable table = function.getTableParameterList().getTable(BhgeCoreConstants.ET_DETAIL);

		table.appendRow();

		if (serviceHistoryInputData.getAddRemoveFlag().equals("CP_HIS_ADD"))
		{
			table.setValue(BhgeCoreConstants.MSE_PART_NUMBER, serviceHistoryInputData.getPartNumber());
			table.setValue(BhgeCoreConstants.MSE_SERIAL_NUMBER, serviceHistoryInputData.getSerialNumber());

			//table.setValue(BhgeCoreConstants.MSE_NOTIFICATION, serviceHistoryInputData.getNotification());

			//table.setValue(BhgeCoreConstants.MSE_RMA_CREATED_ON, serviceHistoryInputData.getCreatedOn());
			//table.setValue(BhgeCoreConstants.MSE_RETURNED_ON, serviceHistoryInputData.getReturnedOn());

			if (serviceHistoryInputData.getServiceDate() != null)
			{
				final SimpleDateFormat dataFormat = new SimpleDateFormat("dd-MM-yyyy");
				final Date lastServiceDate = dataFormat.parse(serviceHistoryInputData.getServiceDate());
				table.setValue(BhgeCoreConstants.MSE_SERVICE_DATE, lastServiceDate);
			}

			//table.setValue(BhgeCoreConstants.MSE_SERVICE_COMMENT, serviceHistoryInputData.getServiceDescription());
			table.setValue(BhgeCoreConstants.MSE_INDEX, serviceHistoryInputData.getIndex());
			//table.setValue(BhgeCoreConstants.MSE_FLAG, "M");
			table.setValue(BhgeCoreConstants.MSE_PROB_DESC, serviceHistoryInputData.getServiceDescription());

			table.setValue(BhgeCoreConstants.MSE_SERVICE, serviceHistoryInputData.getServiceType());
			//table.setValue(BhgeCoreConstants.MSE_NXT_SERVICE_DUE, i.getNextServiceDue());
			//table.setValue(BhgeCoreConstants.MSE_DOCUMENT, inputData);
			//table.setValue(BhgeCoreConstants.MSE_ACTIVE_INACTIVE, i.getActiveInactive());

			LOG.info(function);

		}


		if (serviceHistoryInputData.getAddRemoveFlag().equals("CP_HIS_DEL"))
		{
			table.setValue(BhgeCoreConstants.MSE_PART_NUMBER, serviceHistoryInputData.getPartNumber());
			table.setValue(BhgeCoreConstants.MSE_SERIAL_NUMBER, serviceHistoryInputData.getSerialNumber());
			table.setValue(BhgeCoreConstants.MSE_INDEX, serviceHistoryInputData.getIndex());

			LOG.info(function);
		}
		LOG.info("MYSITE EQUIPMENT REQUEST FOR CUSTOMER: " + function.toXML());

		return function;
	}



	private JCoFunction setFunctionAndDefaultforAddingServiceHistory(final JCoConnection connection, final String customerNumber,
			final ServiceHistoryDetails serviceHistoryInputData) throws BackendException
	{
		LOG.info("Add to Service History Tracking RFC: Setting the Default Input parameters");

		final String mySiteServiceHistoryFunction = Config.getString("SAP_MY_SITE_SERVICEHISTORY_FUNCTION", "ZHYB_RMA_SERV_HIST");
		final JCoFunction function = connection.getFunction(mySiteServiceHistoryFunction);

		LOG.info("--------------------- customerNumber:" + customerNumber);

		function.getImportParameterList().setValue(BhgeCoreConstants.MSE_TYPE, serviceHistoryInputData.getAddRemoveFlag());
		function.getImportParameterList().setValue(BhgeCoreConstants.MSE_CUSTOMER_ACCOUNT, customerNumber);

		LOG.info("New Function" + function.getImportParameterList());

		//LOG.info("--------------------- OUTSIDE SETFUNCTION FOR CUSTOMER ---------------------");

		return function;
	}

	//ADD-REMOVE SERVICE HISTORY - END















	//Exception handle

	private Boolean handleException(final String customerNumber, final String MANorMELFlag, final String exception)
	{
		String type = null;
		if (MANorMELFlag.equals(BhgeCoreConstants.CP_LIST) || MANorMELFlag.equals(BhgeCoreConstants.CP_ALL))
		{
			type = "fetching My Equipment List";
		}
		if (MANorMELFlag.equals(BhgeCoreConstants.CP_MYLIST))
		{
			type = "fetching Manufacturing Equipment List";
		}
		if (MANorMELFlag.equals(BhgeCoreConstants.CP_ADD))
		{
			type = "Adding to My Equipment List";
		}
		if (MANorMELFlag.equals(BhgeCoreConstants.CP_UPDATE))
		{
			type = "Updating My Equipment List";
		}
		if (MANorMELFlag.equals(BhgeCoreConstants.CP_HIST_ADD))
		{
			type = "Adding Service History";
		}
		if (MANorMELFlag.equals(BhgeCoreConstants.CP_HIST_DEL))
		{
			type = "Deleting Service History";
		}

		LOG.info("Exception occured while fetching the MSE DATA from SAP - " + customerNumber + " and Type - " + type);

		final boolean ex = handleNonCriticalErrorForMSE(customerNumber, type, exception);
		LOG.info("EXCEPTION MAIL Result --------" + ex);
		return ex;
	}


	public boolean handleNonCriticalErrorForMSE(final String soldToId, final String type, final String Errmsg)
	{
		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
		LOG.info("Inside RMA Tracking Error Mail - " + getUserService().getCurrentUser().getUid());
		final DateFormat df1 = new SimpleDateFormat("dd-MMM-yy hh:mm a");
		// Get the date today using Calendar object.
		final Date today1 = Calendar.getInstance().getTime();
		// Using DateFormat format method we can create a string
		final String reportDate1 = df1.format(today1);
		if (getUserService().getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			final GEEdgeCustomerModel geEdgeCustomerModel = (GEEdgeCustomerModel) getUserService().getCurrentUser();
			model.setErrorCode("WebServiceException");
			model.setErrorDescription(Errmsg + "occurred while" + type);
			model.setErrorType("MSE Web Services");
			model.setCurrentUserEmail(geEdgeCustomerModel.getEmail());
			model.setCurrentSoldToId(soldToId);
			model.setErrorTime(reportDate1);
			model.setStatus(Boolean.FALSE);
			final boolean flag = Boolean.parseBoolean(Config.getParameter("geedge.support.mail.flag"));
			final String templateCodeCriticalError = "bhgeRFCFailureMailTemplate";

			String subject = Config.getString("MSE_STATUS_SUBJECT", "EdgeNet Critical Error Alert - My Site Equipments");

			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				subject = Config.getString("MSE_STATUS_SUBJECT_PROD", "EdgeNet Critical Error Alert - My Site Equipments");
			}
			else if (Config.getParameter("current.env").equalsIgnoreCase("QA"))
			{
				subject = Config.getString("MSE_STATUS_SUBJECT_QA", "EdgeNet Critical Error Alert - My Site Equipments");
			}
			else
			{
				subject = Config.getString("MSE_STATUS_SUBJECT_STAGE", "EdgeNet Critical Error Alert - My Site Equipments");
			}


			final String to = Config.getString("MSE_STATUS_TO_ADDRESS", "");
			final String errorCode = model.getErrorCode();
			if (flag)
			{
				LOG.info("Inside MSE Tracking Error Mail - Triggering Mail" + getUserService().getCurrentUser().getUid());
				sendEmail(templateCodeCriticalError, subject, to, model, errorCode,getUserService().getCurrentUser().getUid());
			}
			modelService.save(model);
		}
		return true;
	}


	public void sendEmail(final String templateCode, final String subject, final String to, final BHGERfcCallErrorModel model,
			final String errorCode, String userSSO)
	{

		final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(templateCode);

		bhgeEmailService.orderHistoryFailureEmail(templateModel, subject, to, model, errorCode,userSSO);
	}
	
	// Method to check given input is number or not
	public boolean isNumber(String input) {
		try {
			Integer.parseInt(input);
			return true;
		}
		catch(Exception e) {
			
		}
		return false;
	}
}
