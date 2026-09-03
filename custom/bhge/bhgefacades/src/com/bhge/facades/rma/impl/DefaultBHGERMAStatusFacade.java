/**
 *
 */
package com.bhge.facades.rma.impl;

import de.hybris.platform.acceleratorservices.urlresolver.SiteBaseUrlResolutionService;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.b2bcommercefacades.company.data.B2BUnitData;
import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.Registry;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.regioncache.CacheController;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.key.CacheKey;
import de.hybris.platform.regioncache.region.CacheRegion;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.mail.MailUtils;

import java.io.StringWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.mail2.core.EmailException;
import org.apache.commons.mail2.jakarta.HtmlEmail;
import org.apache.log4j.Logger;

import com.bhge.commons.renderer.BHGEVelocityTemplateRenderer;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.data.BHGERmaStatusData;
import com.bhge.core.data.CustomerAccountData;
import com.bhge.core.data.RmaHeaderStatusData;
import com.bhge.core.data.RmaItemStatusData;
import com.bhge.core.data.uploadFileResponseData;
import com.bhge.core.data.context.BHGERmaEnquiryEmailContext;
import com.bhge.core.data.context.BHGERmaStatusEmailContext;
import com.bhge.core.email.dao.BHGEEmailServiceDao;
import com.bhge.core.mailmessages.context.EmailResponse;
import com.bhge.core.rma.dao.BHGERMAStatusDao;
//import com.bhge.core.rma.Dao.BHGERMAStatusDao;
import com.bhge.core.rma.service.BHGERMAStatusService;
import com.bhge.core.rmacache.RMACacheKey;
import com.bhge.facades.rma.BHGERMAStatusFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.register.webservices.model.BHGEInquiryEmailModel;
import com.bhge.register.webservices.model.BHGEMnCEcommMatrixModel;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;



/**
 * @author 1423683
 *
 */
public class DefaultBHGERMAStatusFacade implements BHGERMAStatusFacade
{
	private static final Logger LOG = Logger.getLogger(DefaultBHGERMAStatusFacade.class);

	@Resource(name = "rmaStatusCacheRegion")
	private CacheRegion rmaStatusCacheRegion;

	@SuppressWarnings("rawtypes")
	@Resource(name = "bhgeRMACacheValueLoader")
	private CacheValueLoader bhgeRMACacheValueLoader;

	@Resource(name = "cacheController")
	private CacheController cacheController;

	@Resource(name = "bhgeRMAStatusService")
	private BHGERMAStatusService bhgeRMAStatusService;

	@Resource(name = "bhgeRMAStatusDao")
	private BHGERMAStatusDao bhgeRMAStatusDao;

	@Resource(name = "rendererService")
	private RendererService rendererService;

	@Resource(name = "bhgeVelocityTemplateRenderer")
	private BHGEVelocityTemplateRenderer bhgeVelocityTemplateRenderer;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource(name = "b2bUnitService")
	private B2BUnitService<B2BUnitModel, UserModel> b2bUnitService;

	@Resource(name = "bhgeEmailServiceDao")
	private BHGEEmailServiceDao bhgeEmailServiceDao;

	@Resource(name = "modelService")
	private ModelService modelService;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "mediaService")
	private MediaService mediaService;

	@Resource(name = "catalogVersionService")
	private CatalogVersionService catalogVersionService;

	@Resource(name = "configurationService")
	ConfigurationService configurationService;

	@Resource(name = "siteBaseUrlResolutionService")
	private SiteBaseUrlResolutionService siteBaseUrlResolutionService;

	@Resource(name = "baseSiteService")
	private BaseSiteService baseSiteService;


	public BaseSiteService getBaseSiteService()
	{
		return baseSiteService;
	}


	public void setBaseSiteService(final BaseSiteService baseSiteService)
	{
		this.baseSiteService = baseSiteService;
	}


	public SiteBaseUrlResolutionService getSiteBaseUrlResolutionService()
	{
		return siteBaseUrlResolutionService;
	}


	public void setSiteBaseUrlResolutionService(final SiteBaseUrlResolutionService siteBaseUrlResolutionService)
	{
		this.siteBaseUrlResolutionService = siteBaseUrlResolutionService;
	}

	protected ModelService getModelService()
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

	public SessionService getSessionService()
	{
		return sessionService;
	}

	public void setSessionService(final SessionService sessionService)
	{
		this.sessionService = sessionService;
	}

	public B2BUnitService<B2BUnitModel, UserModel> getB2bUnitService()
	{
		return b2bUnitService;
	}

	public void setB2bUnitService(final B2BUnitService<B2BUnitModel, UserModel> b2bUnitService)
	{
		this.b2bUnitService = b2bUnitService;
	}

	public BHGEEmailServiceDao getBhgeEmailServiceDao()
	{
		return bhgeEmailServiceDao;
	}

	public void setBhgeEmailServiceDao(final BHGEEmailServiceDao bhgeEmailServiceDao)
	{
		this.bhgeEmailServiceDao = bhgeEmailServiceDao;
	}

	public CacheRegion getRmaStatusCacheRegion()
	{
		return rmaStatusCacheRegion;
	}

	public void setRmaStatusCacheRegion(final CacheRegion rmaStatusCacheRegion)
	{
		this.rmaStatusCacheRegion = rmaStatusCacheRegion;
	}

	public CacheValueLoader getBhgeRMACacheValueLoader()
	{
		return bhgeRMACacheValueLoader;
	}

	public void setBhgeRMACacheValueLoader(final CacheValueLoader bhgeRMACacheValueLoader)
	{
		this.bhgeRMACacheValueLoader = bhgeRMACacheValueLoader;
	}

	public CacheController getCacheController()
	{
		return cacheController;
	}

	public void setCacheController(final CacheController cacheController)
	{
		this.cacheController = cacheController;
	}

	public BHGERMAStatusService getBhgeRMAStatusService()
	{
		return bhgeRMAStatusService;
	}

	public void setBhgeRMAStatusService(final BHGERMAStatusService bhgeRMAStatusService)
	{
		this.bhgeRMAStatusService = bhgeRMAStatusService;
	}

	public BHGERMAStatusDao getBhgeRMAStatusDao()
	{
		return bhgeRMAStatusDao;
	}

	public void setBhgeRMAStatusDao(final BHGERMAStatusDao bhgeRMAStatusDao)
	{
		this.bhgeRMAStatusDao = bhgeRMAStatusDao;
	}

	public RendererService getRendererService()
	{
		return rendererService;
	}

	public void setRendererService(final RendererService rendererService)
	{
		this.rendererService = rendererService;
	}

	public BHGEVelocityTemplateRenderer getBhgeVelocityTemplateRenderer()
	{
		return bhgeVelocityTemplateRenderer;
	}

	public void setBhgeVelocityTemplateRenderer(final BHGEVelocityTemplateRenderer bhgeVelocityTemplateRenderer)
	{
		this.bhgeVelocityTemplateRenderer = bhgeVelocityTemplateRenderer;
	}



	@Override
	public BHGERmaStatusData getCacheData(final List<String> customerNumber, final String orderType, final String dateRange) {
		sessionService.removeAttribute("key");
		sessionService.removeAttribute("customer");

		if (customerNumber == null || customerNumber.isEmpty()) {
			return null;
		}

		BHGERmaStatusData baseData = new BHGERmaStatusData();
		baseData.setRmaHeaderStatusDetails(new ArrayList<>());

		for (String custNum : customerNumber) {
			sessionService.setAttribute("customer", custNum);
			sessionService.setAttribute("dateRange", dateRange);

			String key = getKey(custNum, orderType, dateRange);
			LOG.info("********************************** KEY **********************************+ " + key);
			sessionService.setAttribute("key", key);

			CacheKey cacheKey = new RMACacheKey(key, Registry.getCurrentTenant().getTenantID());
			LOG.info("********************************** CACHEKEY **********************************+ " + cacheKey);
			rmaStatusCacheRegion.invalidate(cacheKey, false);
			LOG.info("Cache invalidated for key: " + cacheKey);
			BHGERmaStatusData rmaStatusData = (BHGERmaStatusData) rmaStatusCacheRegion.getWithLoader(cacheKey, bhgeRMACacheValueLoader);
			if(rmaStatusData != null) {
				LOG.info("RMA STATUS DATA FROM CACHE " + rmaStatusData.getRmaHeaderStatusDetails());
			}
			else {
				LOG.info("RMA STATUS DATA FROM CACHE IS NULL");
			}
			if (rmaStatusData != null) {
				// Handle timeout/exec/interrupted exceptions
				if (rmaStatusData.getRmaHeaderStatusDetails() == null) {
					if (rmaStatusData.isTimeoutException()) {
						rmaStatusCacheRegion.invalidate(cacheKey, false);
						if (baseData.getRmaHeaderStatusDetails().isEmpty()) {
							setExceptionFlags(baseData, "timeout", rmaStatusData);
							return baseData;
						}
						continue;
					}
					if (rmaStatusData.isExecutionException()) {
						rmaStatusCacheRegion.invalidate(cacheKey, false);
						if (baseData.getRmaHeaderStatusDetails().isEmpty()) {
							setExceptionFlags(baseData, "execution", rmaStatusData);
							return baseData;
						}
						continue;
					}
					if (rmaStatusData.isInterruptedException()) {
						rmaStatusCacheRegion.invalidate(cacheKey, false);
						if (baseData.getRmaHeaderStatusDetails().isEmpty()) {
							setExceptionFlags(baseData, "interrupted", rmaStatusData);
							return baseData;
						}
						continue;
					}
					// No data found
					rmaStatusCacheRegion.invalidate(cacheKey, false);
					if (baseData.getRmaHeaderStatusDetails().isEmpty()) {
						handleNoDataFound(baseData,rmaStatusData, customerNumber);
					}
					continue;
				}
				// Add found data
				baseData.getRmaHeaderStatusDetails().addAll(rmaStatusData.getRmaHeaderStatusDetails());
			} else {
				// No data found in cache
				if (baseData.getRmaHeaderStatusDetails().isEmpty()) {
					handleNoDataFound(baseData, rmaStatusData,customerNumber);
				}
			}
		}
		return baseData.getRmaHeaderStatusDetails().isEmpty() ? null : baseData;
	}

	// Helper to set exception flags and details
	private void setExceptionFlags(BHGERmaStatusData data, String type, BHGERmaStatusData cachedData) {
		data.setBaseCustomerAccount(customerData());
		data.setCustomerAccounts(fetchCustomerList());
		data.setRmaHeaderStatusDetails(null);
		data.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(null));
		switch (type) {
			case "timeout" -> {
				LOG.info("----------------------- TIMEOUT EXCEPTION BUT BASE DATA IS NOT NULL------------------------");
				data.setTimeoutException(true);
			}
			case "execution" -> {
				LOG.info("----------------------- EXECUTION EXCEPTION BUT BASE DATA IS NOT NULL------------------------");
				data.setExecutionException(true);
				data.setRmaErrorMessageDetails(cachedData.getRmaErrorMessageDetails());
			}
			case "interrupted" -> {
				LOG.info("----------------------- INTERRUPTED EXCEPTION BUT BASE DATA IS NOT NULL------------------------");
				data.setInterruptedException(true);
			}
		}
	}

	// Helper to handle no data found
	private void handleNoDataFound(BHGERmaStatusData data,
								   BHGERmaStatusData rmaStatusData, List<String> customerNumber) {
		data.setBaseCustomerAccount(customerData());
		data.setCustomerAccounts(fetchCustomerList());
		data.setRmaHeaderStatusDetails(null);
		data.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(null));
		data.setNotFoundException(true);
		if (customerNumber.size() == 1) {
			data.setRmaErrorMessageDetails(rmaStatusData.getRmaErrorMessageDetails());
		}
	}

	@Override
	public BHGERmaStatusData getQuickRmaStatusData(final List<String> customerNumber, final String orderType, final String rmaNumber,
												   final String poNumber) {
		sessionService.removeAttribute("key");
		sessionService.removeAttribute("customer");
		BHGERmaStatusData baseData = new BHGERmaStatusData();
		baseData.setRmaHeaderStatusDetails(new ArrayList<>());
		LOG.info("Inside QuickRmaStatusData Method of FACADE " + customerNumber);

		if (customerNumber == null || customerNumber.isEmpty()) {
			return null;
		}

		BHGERmaStatusData rmaStatusData = bhgeRMAStatusService.getQuickRmaStatusForRmaNumberRFC(customerNumber, orderType, rmaNumber, poNumber);

		if (rmaStatusData == null || CollectionUtils.isEmpty(rmaStatusData.getRmaHeaderStatusDetails())) {
			return null;
		}
			// Handle timeout/exec/interrupted exceptions
		if( rmaStatusData != null) {
			if (rmaStatusData.getRmaHeaderStatusDetails() == null) {
				if (rmaStatusData.isTimeoutException() && rmaStatusData.getRmaHeaderStatusDetails().isEmpty()) {
						setExceptionFlags(rmaStatusData, "timeout", rmaStatusData);
						return baseData;
					}

				if (rmaStatusData.isExecutionException() && baseData.getRmaHeaderStatusDetails().isEmpty()) {
						setExceptionFlags(baseData, "execution", rmaStatusData);
						return baseData;
					}

				if (rmaStatusData.isInterruptedException() && baseData.getRmaHeaderStatusDetails().isEmpty()) {
						setExceptionFlags(baseData, "interrupted", rmaStatusData);
						return baseData;
					}

				// No data found
				if (baseData.getRmaHeaderStatusDetails().isEmpty()) {
					handleNoDataFound(baseData,rmaStatusData, customerNumber);
				}

			}
			// Add found data
			baseData.getRmaHeaderStatusDetails().addAll(rmaStatusData.getRmaHeaderStatusDetails());

		}
		 else {
			// No data found in cache
			if (baseData.getRmaHeaderStatusDetails().isEmpty()) {
				handleNoDataFound(baseData,rmaStatusData, customerNumber);
			}
		}


		return baseData;
	}

	@Override
	public String customerData()
	{
		final String data = bhgeRMAStatusService.getUserName();
		return data;
	}



	@Override
	public BHGERmaStatusData rmaStatusExceptionData(final List<String> customer, final String orderType) throws BackendException
	{
		LOG.info("********************* IN EXCEPTION METHOD **********************");
		final BHGERmaStatusData rmaStatusExceptionBaseData = new BHGERmaStatusData();
		BHGERmaStatusData rmaStatusExceptionData = new BHGERmaStatusData();

		final int number = configurationService.getConfiguration().getInt("timeout.next.integer", 180);
		final int limit = configurationService.getConfiguration().getInt("timeout.limit.integer", 60);

		for (int i = number; i >= limit; i = (i - limit))
		{
			final String stringRange = Integer.toString(i);
			//LOG.info("************************************* DATE RANGE *******************************" + stringRange);

			//rmaStatusExceptionData = bhgeRMAStatusService.getRmaStatusForCustomer(customer, orderType, stringRange);
			  rmaStatusExceptionData = bhgeRMAStatusService.getRmaStatusForCustomerRFC(customer, orderType, stringRange);
			if (rmaStatusExceptionData.getRmaHeaderStatusDetails() == null && rmaStatusExceptionData.isTimeoutException() == true)
			{
				LOG.info("----------------------- TIMEOUT EXCEPTION AGAIN------------------------");

				if (i == limit)
				{
					rmaStatusExceptionBaseData.setBaseCustomerAccount(customerData());
					rmaStatusExceptionBaseData.setCustomerAccounts(fetchCustomerList());
					rmaStatusExceptionBaseData.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(null));
					rmaStatusExceptionBaseData.setTimeoutException(true);
					break;
				}

				continue;
			}

			LOG.info("********************************** FOUND DATA YAYYY!**********************************");
			rmaStatusExceptionBaseData.getRmaHeaderStatusDetails().addAll(rmaStatusExceptionData.getRmaHeaderStatusDetails());
			//rmaStatusExceptionBaseData.setBaseCustomerAccount(customerData());
			//rmaStatusExceptionBaseData.setCustomerAccounts(fetchCustomerList());
			//rmaStatusExceptionBaseData.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(rmaStatusExceptionBaseData.getRmaHeaderStatusDetails()));
			//rmaStatusExceptionBaseData.setProductLines(bhgeRMAStatusService.getProductLineData(rmaStatusExceptionBaseData.getRmaHeaderStatusDetails()));
			//break;
		}
		return rmaStatusExceptionBaseData;
	}




	private String getKey(final String custNumber, final String orderType, final String dateRange)
	{
		if (StringUtils.isNotBlank(custNumber) && StringUtils.isNotBlank(orderType) && StringUtils.isNotBlank(dateRange))
		{
			return custNumber + "-" + orderType + "-" + dateRange;
		}
		return null;
	}







	//CLEAR CACHE LOGIC


	//FOR MORE THAN 1 CUSTOMER
	@Override
	public void clearRmaStatusDataFromCache(final List<String> customerList)
	{
		//final String customer = sessionService.getAttribute("customer");
		String Detail_Order = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))? Config.getParameter("ORDERTYPE_DET"): "CP_DET";
		final String dateRange = sessionService.getAttribute("dateRange");
		LOG.info("--------------------- CLEAR FROM CACHE KEY -------------------------" + dateRange);
		/*
		 * if (StringUtils.isNotBlank(customer)) { customerList.add(customer); }
		 */
		for (final String customerData : customerList)
		{
			LOG.info("Loaded Clear Status 1905.A05 .... " + customerData);
			final String key = getKey(customerData, Detail_Order, dateRange);
			LOG.info("Loaded Clear Status 1905.A06 .... " + key);
			final CacheKey cacheKey = new RMACacheKey(key, Registry.getCurrentTenant().getTenantID());
			rmaStatusCacheRegion.invalidate(cacheKey, false);
		}
	}


	//ONLY FOR SESSION USER
	@Override
	public void removeRmaStatusDataFromCache()
	{
		final String key = sessionService.getAttribute("key");
		LOG.info("--------------------- REMOVE FROM CACHE KEY -------------------------" + key);
		final CacheKey cacheKey = new RMACacheKey(key, Registry.getCurrentTenant().getTenantID());
		rmaStatusCacheRegion.invalidate(cacheKey, false);
	}

	//FILTERING STARTS HERE

	//Filter Logic
	@Override
	public BHGERmaStatusData applyFilters(
			final BHGERmaStatusData rmaStatusDataBaseList,
			final PageableData pageableData,
			final String fromDateFilter,
			final String toDateFilter,
			final List<String> productLinesFilter,
			final String rmaStatusFilter,
			final String searchBy,
			final String sortBy
	) throws ParseException {
		BHGERmaStatusData filteredData = new BHGERmaStatusData();
		List<RmaHeaderStatusData> result = new ArrayList<>();

		List<RmaHeaderStatusData> headers = rmaStatusDataBaseList.getRmaHeaderStatusDetails();
		if (CollectionUtils.isEmpty(headers)) {
			filteredData.setRmaHeaderStatusDetails(result);
			filteredData.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(null));
			filteredData.setNotFoundException(true);
			return filteredData;
		}

		for (RmaHeaderStatusData header : headers) {
			// Product line filter
			if (productLinesFilter != null && !productLinesFilter.isEmpty() && (header.getProductLine() == null || !getRmaStatusWithPLFilter(header, productLinesFilter))) {
					continue;
				}

			// RMA status filter
			if (rmaStatusFilter != null && !rmaStatusFilter.equalsIgnoreCase(header.getRmaStatus())) {
				continue;
			}
			// Date filter
			if (fromDateFilter != null && toDateFilter != null && (header.getRmaCreatedDate() == null || !getRmaStatusWithDateFilter(header, fromDateFilter, toDateFilter))) {
					continue;
				}

			result.add(header);
		}

		filteredData.setRmaHeaderStatusDetails(result);

		if (result.isEmpty()) {
			filteredData.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(null));
			filteredData.setNotFoundException(true);
			return filteredData;
		}

		// Apply search if needed
		if (StringUtils.isNotBlank(searchBy)) {
			return applySearch(filteredData, pageableData, searchBy, sortBy);
		}
		// Apply sort if needed
		if (StringUtils.isNotBlank(sortBy)) {
			return applySort(filteredData, pageableData, sortBy);
		}

		return filteredData;
	}


	//For Date filter
	@Override
	public boolean getRmaStatusWithDateFilter(final RmaHeaderStatusData rmaHeader, final String fromDate, final String toDate)
			throws ParseException
	{
		final SimpleDateFormat dataFormat = new SimpleDateFormat("yyyy-MM-dd");
		final SimpleDateFormat filtersFormat = new SimpleDateFormat("dd-MM-yyyy");

		final String CreatedDate = rmaHeader.getRmaCreatedDate();

		final Date rmaCreatedDate = dataFormat.parse(CreatedDate);

		final Date fromDateFilter = filtersFormat.parse(fromDate);
		final Date toDateFilter = filtersFormat.parse(toDate);

		if ((rmaCreatedDate.after(fromDateFilter) || rmaCreatedDate.equals(fromDateFilter))
				&& (rmaCreatedDate.before(toDateFilter) || rmaCreatedDate.equals(toDateFilter)))
		{
			return true;
		}
		else
		{
			return false;
		}

	}



	//For ProductLine filter (Comparing productLineName with Code)
	@Override
	public boolean getRmaStatusWithPLFilter(final RmaHeaderStatusData rmaHeader, final List<String> productLinesList)
	{
		for (final String productLine : productLinesList)
		{
			//LOG.info("============ productLine" + rmaHeader.getProductLine().equalsIgnoreCase(productLine));
			if (rmaHeader.getProductLine().equalsIgnoreCase(productLine) || rmaHeader.getProductLine().contains(productLine))
			{
				return true;
			}
		}

		return false;
	}



	@Override
	public BHGERmaStatusData applyRmaStatusFilters(final BHGERmaStatusData rmaStatusBaseData, final PageableData pageableData,
			final String rmaStatusFilter, final String searchBy, final String sortBy)
	{
		LOG.info("====================== RMA STATUS FILTER =====================");
		final BHGERmaStatusData rmaStatusFilteredData1 = new BHGERmaStatusData();
		rmaStatusFilteredData1.setRmaHeaderStatusDetails(new ArrayList<RmaHeaderStatusData>());
		List<RmaHeaderStatusData> rmaHeaders= new ArrayList<RmaHeaderStatusData>();
		int count=0;
		LOG.info("RMA STATUS FILTER VALUE "+ rmaStatusFilter);
		for (final RmaHeaderStatusData rmaHeader : rmaStatusBaseData.getRmaHeaderStatusDetails())
		{
			//boolean isFilteredByDate = true;
			//boolean isFilteredByProductLine = true;
			boolean isFilteredByRMAStatus = false;
			LOG.info("RMA HEADER IN LOOP " + rmaHeader.getRmaNumber()+" COUNT "+ count +"RMA STATUS IN LOOP " + rmaHeader.getRmaStatus());
			//filtering by rma status logic
			if (rmaStatusFilter != null && rmaStatusFilter.equalsIgnoreCase(rmaHeader.getRmaStatus()))
			{
				LOG.info("====================== RMA STATUS FILTER MATCHED =====================");
				isFilteredByRMAStatus = true;
			}
			else
			{
				if (rmaStatusFilter == null)
				{
					isFilteredByRMAStatus = true;
				}
			}


			if (isFilteredByRMAStatus)
			{
				LOG.info("====================== RMA STATUS FILTER ADDED =====================");
				/*rmaStatusFilteredData1.getRmaHeaderStatusDetails().add(rmaHeader);
				rmaStatusFilteredData1
						.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(rmaStatusBaseData.getRmaHeaderStatusDetails()));*/
				rmaHeaders.add(rmaHeader);
				LOG.info("RMA HEADER ADDED IN LIST " + rmaHeader.getRmaNumber()+" COUNT "+ count);
				count++;
							}
		}
		LOG.info("RMA STATUS FILTER FINAL COUNT "+ count);
		LOG.info("RMA STATUS FILTER FINAL LIST "+ rmaHeaders.size());
		rmaStatusFilteredData1.setRmaHeaderStatusDetails(rmaHeaders);
		rmaStatusFilteredData1.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(rmaStatusBaseData.getRmaHeaderStatusDetails()));

		if (CollectionUtils.isEmpty(rmaStatusFilteredData1.getRmaHeaderStatusDetails()))
		{
			LOG.info("--------------------------- NO DATA * STATUS FILTER ----------------------------");
			rmaStatusFilteredData1
					.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(rmaStatusBaseData.getRmaHeaderStatusDetails()));
			rmaStatusFilteredData1.setNotFoundException(true);
			return rmaStatusFilteredData1;
		}

		if (rmaStatusFilteredData1.getRmaHeaderStatusDetails() != null && (StringUtils.isNotBlank(searchBy) || searchBy != null))
		{
			LOG.info(
					"**************************************** SEARCH AFTER STATUS FILTER CALL*************************************");
			return applySearch(rmaStatusFilteredData1, pageableData, searchBy, sortBy);
		}

		if (rmaStatusFilteredData1.getRmaHeaderStatusDetails() != null && (StringUtils.isNotBlank(sortBy) || sortBy != null))
		{
			LOG.info("**************************************** SORT AFTER STATUS FILTER CALL*************************************");
			return applyRmaSort(rmaStatusFilteredData1, rmaStatusBaseData, sortBy);
		}

		return rmaStatusFilteredData1;

	}





	private BHGERmaStatusData applyRmaSort(final BHGERmaStatusData rmaStatusFilteredData1,
			final BHGERmaStatusData rmaStatusBaseData, final String sortBy)
	{
		final List<RmaHeaderStatusData> headerData = rmaStatusFilteredData1.getRmaHeaderStatusDetails();
		final BHGERmaStatusData data = new BHGERmaStatusData();

		if (headerData != null && !headerData.isEmpty())
		{
			if (sortBy.equalsIgnoreCase("sortByrmaCreatedASC"))
			{
				Collections.sort(headerData, new rmaCreatedDataComparator<RmaHeaderStatusData>().reversed());
				data.setRmaHeaderStatusDetails(headerData);
				data.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(rmaStatusBaseData.getRmaHeaderStatusDetails()));
			}

			if (sortBy.equalsIgnoreCase("sortByrmaCreatedDSC"))
			{
				Collections.sort(headerData, new rmaCreatedDataComparator<RmaHeaderStatusData>());
				data.setRmaHeaderStatusDetails(headerData);
				data.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(rmaStatusBaseData.getRmaHeaderStatusDetails()));
			}

			if (sortBy.equalsIgnoreCase("sortBylastUpdatedASC"))
			{
				Collections.sort(headerData, new lastUpdatedDataComparator<RmaHeaderStatusData>().reversed());
				data.setRmaHeaderStatusDetails(headerData);
				data.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(rmaStatusBaseData.getRmaHeaderStatusDetails()));
			}

			if (sortBy.equalsIgnoreCase("sortBylastUpdatedDSC"))
			{
				Collections.sort(headerData, new lastUpdatedDataComparator<RmaHeaderStatusData>());
				data.setRmaHeaderStatusDetails(headerData);
				data.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(rmaStatusBaseData.getRmaHeaderStatusDetails()));
			}

			return data;
		}
		else
		{
			LOG.info("------------- No Data for Sorting -------------");
			data.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(null));
			//data.setRmaErrorMessageDetails(data.getRmaErrorMessageDetails());
			data.setNotFoundException(true);
			return data;
		}
	}


	//SEARCHING STARTS HERE





	//Search Logic

	@Override
	public BHGERmaStatusData applySearch(final BHGERmaStatusData rmaStatusData, final PageableData pageableData,
										 final String searchBy, final String sortBy) {
		BHGERmaStatusData resultData = new BHGERmaStatusData();
		resultData.setRmaHeaderStatusDetails(new ArrayList<>());

		// Early exit if input is empty or searchBy is blank
		if (rmaStatusData == null || CollectionUtils.isEmpty(rmaStatusData.getRmaHeaderStatusDetails()) || StringUtils.isBlank(searchBy)) {
			resultData.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(null));
			resultData.setNotFoundException(true);
			return resultData;
		}

		String search = searchBy.trim();
		for (RmaHeaderStatusData header : rmaStatusData.getRmaHeaderStatusDetails()) {
			boolean match = false;

			// RMA No
			if (getSearchedDataWithRMANo(header, search)) {
				match = true;
			}
			// PO No
			else if (getSearchedDataWithPONo(header, search)) {
				match = true;
			}
			// Sales Order No
			else if (getSearchedDataWithSalesOrderNo(header, search)) {
				match = true;
			}
			// Part No in any item
			else if (header.getRmaItemStatusDetails() != null) {
				for (RmaItemStatusData item : header.getRmaItemStatusDetails()) {
					if (getSearchedDataWithPartNo(item, search)) {
						match = true;
						break;
					}
				}
			}

			if (match) {
				resultData.getRmaHeaderStatusDetails().add(header);
				resultData.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(resultData.getRmaHeaderStatusDetails()));
			}
		}

		if (CollectionUtils.isEmpty(resultData.getRmaHeaderStatusDetails())) {
			resultData.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(null));
			resultData.setNotFoundException(true);
			return resultData;
		}

		// Apply sort if needed
		if (StringUtils.isNotBlank(sortBy)) {
			return applySort(resultData, pageableData, sortBy);
		}

		return resultData;
	}
	@Override
	public RmaHeaderStatusData quickSearchForRMANo(final BHGERmaStatusData rmaStatusData, final String searchByRMAAndZRASNo,
			final boolean isRecentFlag)
	{

		for (final RmaHeaderStatusData rmaHeader : rmaStatusData.getRmaHeaderStatusDetails())
		{
			if (StringUtils.isNotBlank(searchByRMAAndZRASNo) && StringUtils.isNotEmpty(searchByRMAAndZRASNo))
			{
				//Search by RMA No
				if (getGuestSearchedDataWithRMANoAndZRASOrderNumber(rmaHeader, searchByRMAAndZRASNo, isRecentFlag))
				{
					return rmaHeader;
				}
			}
		}
		return null;
	}

	@Override
	public RmaHeaderStatusData quickSearchForPONo(final BHGERmaStatusData rmaStatusData, final String searchByPONo)
	{

		for (final RmaHeaderStatusData rmaHeader : rmaStatusData.getRmaHeaderStatusDetails())
		{
			if (StringUtils.isNotBlank(searchByPONo) && StringUtils.isNotEmpty(searchByPONo))
			{
				//Search by PO No
				if (getGuestSearchedDataWithPONo(rmaHeader, searchByPONo))
				{
					return rmaHeader;
				}
			}
		}
		return null;
	}


	//Search with RMA No
	private boolean getSearchedDataWithRMANo(final RmaHeaderStatusData rmaHeader, final String searchValue)
	{
		//LOG.info("********************************** RMANO" + rmaHeader.getRmaNumber().contains(searchValue));
		if (!rmaHeader.getBlockText().equals("Do Not Ship"))
		{
			if (rmaHeader.getRmaNumber().equalsIgnoreCase(searchValue) || rmaHeader.getRmaNumber().contains(searchValue))
			{
				return true;
			}
		}
		return false;
	}


	//Search with PO No
	private boolean getSearchedDataWithPONo(final RmaHeaderStatusData rmaHeader, final String searchValue)
	{
		//LOG.info("********************************** PONO" + rmaHeader.getPurchaseOrderNumber().contains(searchValue));

		if (rmaHeader.getPurchaseOrderNumber().equalsIgnoreCase(searchValue)
				|| rmaHeader.getPurchaseOrderNumber().contains(searchValue))
		{
			return true;
		}
		return false;
	}

	//Search with RMA No GUEST
	private boolean getGuestSearchedDataWithRMANoAndZRASOrderNumber(final RmaHeaderStatusData rmaHeader, final String searchValue,
			final boolean isRecentFlag)
	{
		if (isRecentFlag)
		{
			if (rmaHeader.getRmaNumber().equalsIgnoreCase(searchValue.trim())
					|| rmaHeader.getSalesOrderNumber().equalsIgnoreCase(searchValue.trim()))
			{
				return true;
			}
			else if (rmaHeader.getRmaNumber().equalsIgnoreCase(leftPad(searchValue.trim(), 12, '0')))
			{
				return true;
			}
			else if (rmaHeader.getSalesOrderNumber().equalsIgnoreCase(leftPad(searchValue.trim(), 10, '0')))
			{
				return true;
			}
		}
		else
		{
			if (!rmaHeader.getBlockText().equals("Do Not Ship"))
			{
				if (rmaHeader.getRmaNumber().equalsIgnoreCase(searchValue.trim())
						|| rmaHeader.getSalesOrderNumber().equalsIgnoreCase(searchValue.trim()))
				{
					return true;
				}
				else if (rmaHeader.getRmaNumber().equalsIgnoreCase(leftPad(searchValue.trim(), 12, '0')))
				{
					return true;
				}
				else if (rmaHeader.getSalesOrderNumber().equalsIgnoreCase(leftPad(searchValue.trim(), 10, '0')))
				{
					return true;
				}
			}
		}
		return false;
	}
	
	private boolean getGuestSearchedDataWithRMANoAndZRASOrderNumberForWs(final RmaHeaderStatusData rmaHeader, final String searchValue,
			final boolean isRecentFlag)
	{
		if (isRecentFlag)
		{
			if (rmaHeader.getRmaNumber().equalsIgnoreCase(searchValue.trim())
					|| rmaHeader.getSalesOrderNumber().equalsIgnoreCase(searchValue.trim()))
			{
				return true;
			}
			else if (rmaHeader.getRmaNumber().equalsIgnoreCase(leftPad(searchValue.trim(), 12, '0')))
			{
				return true;
			}
			else if (rmaHeader.getSalesOrderNumber().equalsIgnoreCase(leftPad(searchValue.trim(), 10, '0')))
			{
				return true;
			}
		}
		else
		{
			/*if (!rmaHeader.getBlockText().equals("Do Not Ship"))
			{
				if (rmaHeader.getRmaNumber().equalsIgnoreCase(searchValue.trim())
						|| rmaHeader.getSalesOrderNumber().equalsIgnoreCase(searchValue.trim()))
				{
					return true;
				}
				else if (rmaHeader.getRmaNumber().equalsIgnoreCase(leftPad(searchValue.trim(), 12, '0')))
				{
					return true;
				}
				else if (rmaHeader.getSalesOrderNumber().equalsIgnoreCase(leftPad(searchValue.trim(), 10, '0')))
				{
					return true;
				}
			}*/
			return true;
		}
		return false;
	}


	//Search with PO No GUEST
	private boolean getGuestSearchedDataWithPONo(final RmaHeaderStatusData rmaHeader, final String searchValue)
	{
		//LOG.info("********************************** PONO" + rmaHeader.getPurchaseOrderNumber().contains(searchValue));

		if (rmaHeader.getPurchaseOrderNumber().equalsIgnoreCase(searchValue.trim()))
		{
			return true;
		}
		return false;
	}






	//Search with Sales Order No
	private boolean getSearchedDataWithSalesOrderNo(final RmaHeaderStatusData rmaHeader, final String searchValue)
	{
		//LOG.info("********************************** SALESORDERNO" + rmaHeader.getSalesOrderNumber().contains(searchValue));

		if (rmaHeader.getSalesOrderNumber().equalsIgnoreCase(searchValue) || rmaHeader.getSalesOrderNumber().contains(searchValue))
		{
			return true;
		}
		return false;
	}



	//Search with Part No
	private boolean getSearchedDataWithPartNo(final RmaItemStatusData rmaItem, final String searchValue)
	{
		//LOG.info("********************************** PartNo" + rmaItem.getPartNumber().contains(searchValue));

		if (rmaItem.getPartNumber().equalsIgnoreCase(searchValue) || rmaItem.getPartNumber().contains(searchValue))
		{
			return true;
		}
		return false;
	}
















	//SORTING STARTS HERE







	@Override
	public BHGERmaStatusData applySort(final BHGERmaStatusData oldData, final PageableData pageableData, final String sortBy)
	{
		LOG.info("================ SORT IN FACADE =============");
		if(StringUtils.isBlank(sortBy)&& pageableData.getSort()==null) {
			LOG.info("NO SORT APPLIED");
			pageableData.setSort(sortBy);
		}
		final List<RmaHeaderStatusData> headerData = oldData.getRmaHeaderStatusDetails();
        if (headerData != null && !headerData.isEmpty()) {
            LOG.info("HEADER DATA SIZE FOR SORTING " + headerData.size());
        }
		final BHGERmaStatusData data = new BHGERmaStatusData();

		if (headerData != null && !headerData.isEmpty())
		{
			if (sortBy.equalsIgnoreCase("sortByrmaCreatedASC"))
			{
				LOG.info("================ SORT BY RMA CREATED DATE ASC =============");
				Collections.sort(headerData, new rmaCreatedDataComparator<RmaHeaderStatusData>().reversed());
				data.setRmaHeaderStatusDetails(headerData);
				data.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(data.getRmaHeaderStatusDetails()));
			}

			if (sortBy.equalsIgnoreCase("sortByrmaCreatedDSC"))
			{
				LOG.info("================ SORT BY RMA CREATED DATE DSC =============");
				Collections.sort(headerData, new rmaCreatedDataComparator<RmaHeaderStatusData>());
				data.setRmaHeaderStatusDetails(headerData);
				data.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(data.getRmaHeaderStatusDetails()));
			}

			if (sortBy.equalsIgnoreCase("sortBylastUpdatedASC"))
			{
				LOG.info("================ SORT BY LAST UPDATED DATE ASC =============");
				Collections.sort(headerData, new lastUpdatedDataComparator<RmaHeaderStatusData>().reversed());
				data.setRmaHeaderStatusDetails(headerData);
				data.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(data.getRmaHeaderStatusDetails()));
			}

			if (sortBy.equalsIgnoreCase("sortBylastUpdatedDSC"))
			{
				LOG.info("================ SORT BY LAST UPDATED DATE DSC =============");
				Collections.sort(headerData, new lastUpdatedDataComparator<RmaHeaderStatusData>());
				data.setRmaHeaderStatusDetails(headerData);
				data.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(data.getRmaHeaderStatusDetails()));
			}

			return data;
		}
		else
		{
			LOG.info("------------- No Data for Sorting -------------");
			//data.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(null));
			//data.setRmaErrorMessageDetails(data.getRmaErrorMessageDetails());
			//data.setNotFoundException(true);
			return oldData;
		}

	}




	/* Comparator to sort the RMA data collection by rma Created Date- DSC */
	protected class rmaCreatedDataComparator<RmaHeaderStatusData> implements java.util.Comparator<RmaHeaderStatusData>
	{
		@Override
		public int compare(final RmaHeaderStatusData data1, final RmaHeaderStatusData data2)
		{
			int result = 0;
			try
			{
				// Sort the rma's based on RMA Created Date by DESC
				if (null != data1 && null != data2 && null != ((com.bhge.core.data.RmaHeaderStatusData) data2).getRmaCreatedDate()
						&& null != ((com.bhge.core.data.RmaHeaderStatusData) data1).getRmaCreatedDate())
				{
					//LOG.info("RMA CREATED DATE1: " + ((com.bhge.core.data.RmaHeaderStatusData) data1).getRmaCreatedDate());
					//LOG.info("RMA CREATED DATE2: " + ((com.bhge.core.data.RmaHeaderStatusData) data2).getRmaCreatedDate());
					result = ((com.bhge.core.data.RmaHeaderStatusData) data2).getRmaCreatedDate()
							.compareTo(((com.bhge.core.data.RmaHeaderStatusData) data1).getRmaCreatedDate());
				}

				// If both the rma's are created on same date, then sort based on rma number
				if (result == 0 && null != data1 && null != data2
						&& null != ((com.bhge.core.data.RmaHeaderStatusData) data2).getRmaNumber()
						&& null != ((com.bhge.core.data.RmaHeaderStatusData) data1).getRmaNumber())
				{
					//LOG.info("RMA Number1: " + ((com.bhge.core.data.RmaHeaderStatusData) data1).getRmaNumber());
					//LOG.info("RMA Number2: " + ((com.bhge.core.data.RmaHeaderStatusData) data2).getRmaNumber());
					result = ((com.bhge.core.data.RmaHeaderStatusData) data2).getRmaNumber()
							.compareTo(((com.bhge.core.data.RmaHeaderStatusData) data1).getRmaNumber());
				}

				return result;
			}
			catch (final Exception e)
			{
				LOG.error("Error occured while sorting the RMA's " + e);
			}
			return result;
		}
	}


	/* Comparator to sort the RMA data collection by last Updated Date- DSC */
	protected class lastUpdatedDataComparator<RmaHeaderStatusData> implements java.util.Comparator<RmaHeaderStatusData>
	{

		@Override
		public int compare(final RmaHeaderStatusData data1, final RmaHeaderStatusData data2)
		{
			int result = 0;
			try
			{
				// Sort the orders based on Order Placed date by DESC
				if (null != data1 && null != data2 && null != ((com.bhge.core.data.RmaHeaderStatusData) data2).getLastUpdatedDate()
						&& null != ((com.bhge.core.data.RmaHeaderStatusData) data1).getLastUpdatedDate())
				{
					//LOG.info("LAST UPDATED DATE1: " + ((com.bhge.core.data.RmaHeaderStatusData) data1).getLastUpdatedDate());
					//LOG.info("LAST UPDATED DATE2: " + ((com.bhge.core.data.RmaHeaderStatusData) data2).getLastUpdatedDate());
					result = ((com.bhge.core.data.RmaHeaderStatusData) data2).getLastUpdatedDate()
							.compareTo(((com.bhge.core.data.RmaHeaderStatusData) data1).getLastUpdatedDate());
				}

				// If for both RMA's, last updated date is same, then sort based on Order Number
				if (result == 0 && null != data1 && null != data2
						&& null != ((com.bhge.core.data.RmaHeaderStatusData) data2).getRmaNumber()
						&& null != ((com.bhge.core.data.RmaHeaderStatusData) data1).getRmaNumber())
				{
					//LOG.info("RMA Number1: " + ((com.bhge.core.data.RmaHeaderStatusData) data1).getRmaNumber());
					//LOG.info("RMA Number1: " + ((com.bhge.core.data.RmaHeaderStatusData) data2).getRmaNumber());
					result = ((com.bhge.core.data.RmaHeaderStatusData) data2).getRmaNumber()
							.compareTo(((com.bhge.core.data.RmaHeaderStatusData) data1).getRmaNumber());
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









	//	 EMAIL STARTS HERE






	@Override
	public boolean createShareRmaEmail(final String SHARETEMPLATECODE, final RmaHeaderStatusData headerData, final String subject,
			final String toAddress) throws ParseException
	{
		LOG.info("**********************************+ Email sending context ***********************************************");
		try
		{
			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(SHARETEMPLATECODE);

			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}

			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setSubject(subject);
			htmlEmail.setCharset("UTF-8");

			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = toAddress.split(delimiter);

			for (int i = 0; i < emails.length; i++)
			{
				final String email = emails[i];
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}

			final BHGERmaStatusEmailContext myMailContext = new BHGERmaStatusEmailContext();
			myMailContext.setSubject(subject);
			//myMailContext.setMediaBaseUrl(getSiteBaseUrlResolutionService().getMediaUrlForSite(getBaseSiteService().getBaseSiteForUID("bhge"), false));
			myMailContext.setMediaBaseUrl(Config.getParameter("bhge.email.resource"));
			myMailContext.setRmaHeaderData(headerData);

			if (StringUtils.isNotBlank(headerData.getRmaCreatedDate()) || StringUtils.isNotEmpty(headerData.getRmaCreatedDate()))
			{
				final String rmaCreatedDate = headerData.getRmaCreatedDate();
				final SimpleDateFormat dataFormat = new SimpleDateFormat("yyyy-MM-dd");
				final Date date1 = dataFormat.parse(rmaCreatedDate);
				final SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
				final String createdDate = formatter.format(date1);
				//LOG.info("==============  RMA Created Date: " + createdDate);
				myMailContext.setRmaCreatedDate(createdDate);
			}

			LOG.info("Email sending context");
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.send();

			LOG.info("Inside SendMail: CLOSE");
			return true;
		}

		catch (

		final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed." + ex);
			}
			catch (final Exception e)
			{
				// YTODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return false;
	}


	//RMA ENQUIRY EMAIL STARTS HERE
	@Override
	public EmailResponse rmaEnquiryMatrix(final String ENQUIRYTEMPLATECODE, final String userName, final String emailId,
			final String customerName, final String rmaNumber, final String poNumber, final String rmaCreatedDate,
			final String rmaEnquiryType, final String rmaEnquiryDetails, final String subject, final String soldToId,
			final String productHeirarchy, final String productLine) throws ParseException
	{
		LOG.info("Inside createRMAEnquiryForm Facade: START - " + rmaNumber + " & User - " + userName);
		final EmailResponse resp = new EmailResponse();
		try
		{
			String emailMatrix = null;

			emailMatrix = fetchEmail(userName, rmaNumber, rmaEnquiryType, soldToId, productHeirarchy, productLine);
			LOG.info("--------------------------------- MATRIX IS NOT NULL ---------------------------------" + emailMatrix);

			if (emailMatrix == null)
			{
				LOG.info("--------------------------------- MATRIX IS NULL ---------------------------------");
				emailMatrix = Config.getParameter("rmaEnquiry.email");
			}
			LOG.info("Inside createEnquiryForm: EMAIL - " + emailMatrix);

			final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(ENQUIRYTEMPLATECODE);

			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			//final String emailId = Config.getParameter("rmaEnquiry.email");
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setFrom(emailId);
			htmlEmail.addReplyTo(emailId);
			htmlEmail.setSubject(subject);
			//set encoding
			htmlEmail.setCharset("UTF-8");
			final StringWriter mailMessage = new StringWriter();
			String[] emails;
			final String delimiter = ",";
			emails = emailMatrix.split(delimiter);
			for (final String email : emails) {
				MailUtils.validateEmailAddress(email, "TO");
				htmlEmail.addTo(email);
			}
			final BHGERmaEnquiryEmailContext myMailContext = new BHGERmaEnquiryEmailContext();
			//myMailContext.setBhgeBasePath(Config.getParameter("bhge.email.resource"));
			if (Config.getParameter("current.env").equalsIgnoreCase("prod"))
			{
				htmlEmail.setSubject(subject);
				myMailContext.setSubject(subject);
			}
			else
			{
				htmlEmail.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
				myMailContext.setSubject(subject + " " + "(" + Config.getParameter("current.env") + ")");
			}
			myMailContext.setSubject(subject);
			myMailContext.setEnquiryDetails(rmaEnquiryDetails);
			myMailContext.setUserName(userName);
			myMailContext.setCustomerName(customerName);
			myMailContext.setCustomerAccountId(soldToId);
			myMailContext.setPurchaseOrderNumber(poNumber);
			myMailContext.setRmaNumber(rmaNumber);
			final String sDate1 = rmaCreatedDate;
			final SimpleDateFormat dataFormat = new SimpleDateFormat("yyyy-MM-dd");
			final Date date1 = dataFormat.parse(sDate1);
			final SimpleDateFormat formatter = new SimpleDateFormat("E, MMM dd yyyy z");
			final String createdDate = formatter.format(date1);
			//LOG.info("==============  RMA Created Date: " + createdDate);


			myMailContext.setRmaCreatedDate(createdDate);
			myMailContext.setEnquiryType(rmaEnquiryType);
			//myMailContext.setMediaBaseUrl(getSiteBaseUrlResolutionService().getMediaUrlForSite(getBaseSiteService().getBaseSiteForUID("bhge"), false));
			myMailContext.setMediaBaseUrl(Config.getParameter("bhge.email.resource"));
			LOG.info("Inside createEnquiryForm: RENDER");
			if(myMailContext.getSubject()!="" || myMailContext.getSubject()!=null) 
			{
				LOG.info("========== RMA myMailContext subject ========== "+myMailContext.getSubject());
			}
			if(myMailContext.getCustomerName()!="" || myMailContext.getCustomerName()!=null) 
			{
				LOG.info("========== RMA myMailContext Customer Name ========== "+myMailContext.getCustomerName());
			}
			if(myMailContext.getPurchaseOrderNumber()!="" || myMailContext.getPurchaseOrderNumber()!=null)
			{
				LOG.info("========== RMA myMailContext Purchase Order Number ========== "+myMailContext.getPurchaseOrderNumber());
			}
			if(myMailContext.getRmaNumber()!="" || myMailContext.getRmaNumber()!=null) 
			{
				LOG.info("========== RMA myMailContext RMA Number ========== "+myMailContext.getRmaNumber());
			}
			if(myMailContext.getRmaCreatedDate()!="" || myMailContext.getRmaCreatedDate()!=null) 
			{
				LOG.info("========== RMA myMailContext RMA Created Date ========== "+myMailContext.getRmaCreatedDate());
			}
			if(myMailContext.getCustomerAccountId()!="" || myMailContext.getCustomerAccountId()!=null)
			{
				LOG.info("========== RMA myMailContext Customer Account Number ========= "+myMailContext.getCustomerAccountId());
			}
			if(myMailContext.getEnquiryDetails()!="" || myMailContext.getEnquiryDetails()!=null)
			{
				LOG.info("========== RMA myMailContext Inquiry details ========= "+myMailContext.getEnquiryDetails());
			}
			if(myMailContext.getEnquiryType()!="" || myMailContext.getEnquiryType()!=null)
			{
				LOG.info("========== RMA myMailContext Inquiry Type ========= "+myMailContext.getEnquiryType());
			}
			bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);
			htmlEmail.setHtmlMsg(mailMessage.toString());
			htmlEmail.send();
			LOG.info("============ myMailContext Email Message for RMA Inquiry sent successfully to ============= "+emailMatrix);
			resp.setEmailid(emailMatrix);
			resp.setStatus(true);
			LOG.info("Inside createEnquiryForm: CLOSE");
			return resp;
		}

		catch (final EmailException ex)
		{
			LOG.error("Email sending failed ", ex);
			try
			{
				throw new Exception("Email sending failed.");
			}
			catch (final Exception e)
			{
				// YTODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return resp;

	}



	private String fetchEmail(final String userName, final String rmaNumber, final String rmaEnquiryType, final String soldToId,
			final String productHeirarchy, final String productLineValue)
	{
		String email = null;
		try
		{
			LOG.info("Inside fetchEmail: START - " + userName + " & RMA Number - " + rmaNumber);

			BHGERegisterKeyValueDataModel countryValueData = getModelService().create(BHGERegisterKeyValueDataModel.class);
			BHGEMnCEcommMatrixModel matrixData = getModelService().create(BHGEMnCEcommMatrixModel.class);
			BHGERegisterKeyValueDataModel productLine = getModelService().create(BHGERegisterKeyValueDataModel.class);


			B2BUnitModel soldTo = null;
			if(null != soldToId) {
				soldTo = b2bUnitService.getUnitForUid(null != soldToId ? leftPad(soldToId, 10, '0') : "");
			}

			//final B2BUnitModel soldTo = getBhgeEmailServiceDao().fetchSoldTo(soldToId);

			if (null == soldTo)
			{
				LOG.info("Inside fetchEmail: COUNTRY - ");
				return Config.getParameter("rmaEnquiry.email");
			}

				countryValueData = fetchCountryData(soldTo.getCountryCP());

			productLine = fetchLinkedProductLine(productHeirarchy, productLineValue);

			LOG.info("Inside fetchEmail: MATRIX - " + countryValueData.getAttributeKey() + " & Region - "
					+ countryValueData.getParentAttrib().getParentAttrib().getAttributeKey() + " & ProductLine - "
					+ productLine.getAttributeKey());


			for (int i = 0; i < 3; i++)
			{
				matrixData = fetchInquiryMatrix(countryValueData, productLine, i);
				LOG.info("------------- Matrix Data --------------- " + matrixData);

				if (null != matrixData)
				{
					break;
				}

			}

			if (null != matrixData)
			{
				if (checkForGovtUser(soldTo))
				{
					email = matrixData.getEmailInquiryType().getGovernmentUser();
					LOG.info("------------- EMAIL USING CHECK FOR GOVT CHECK--------------- " + email);
				}
				else
				{
					final BHGEInquiryEmailModel enquiryTable = matrixData.getEmailInquiryType();
					email = compareEmailType(enquiryTable, rmaEnquiryType);
					LOG.info("------------- EMAIL USING ENQUIRY TYPE--------------- " + email);
				}
			}

			else
			{
				LOG.info("------------- NO MATRIX DATA --------------- " + matrixData);
				return Config.getParameter("rmaEnquiry.email");
			}

			return (null != email ? email : Config.getParameter("rmaEnquiry.email"));
		}

		catch (final Exception ex)
		{
			ex.printStackTrace();
			if (null == email)
			{
				email = Config.getParameter("rmaEnquiry.email");
			}
		}
		return email;
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


	private BHGERegisterKeyValueDataModel fetchCountryData(final String countryCP)
	{
		return getBhgeEmailServiceDao().fetchLinkedRegion(countryCP);

	}


	private BHGERegisterKeyValueDataModel fetchLinkedProductLine(final String productHeirarchyId, final String productLine)
	{
		return getBhgeEmailServiceDao().fetchLinkedProductLine(productHeirarchyId, productLine);

	}


	private BHGEMnCEcommMatrixModel fetchInquiryMatrix(final BHGERegisterKeyValueDataModel countryValueData,
			final BHGERegisterKeyValueDataModel productLine, final int counter)
	{
		LOG.info("Inside fetchInquiryMatrix: START");

		if (counter == 0)
		{
			LOG.info("Inside fetchInquiryMatrix: START - Product Line " + productLine.getPk().toString() + " & Country - "
					+ countryValueData.getAttributeValue() + "-" + countryValueData.getPk().toString());

			return getBhgeEmailServiceDao().fetchInquiryMatrixData(countryValueData.getPk().toString(),
					productLine.getPk().toString(), "country");

		}
		else if (counter == 1)
		{
			LOG.info("Inside fetchInquiryMatrix: START - Product Line " + productLine.getPk().toString() + " & SubRegion - "
					+ countryValueData.getParentAttrib().getAttributeValue() + "-" + countryValueData.getParentAttrib().getPk());

			return getBhgeEmailServiceDao().fetchInquiryMatrixData(countryValueData.getParentAttrib().getPk().toString(),
					productLine.getPk().toString(), "subRegion");

		}
		else if (counter == 2)
		{
			LOG.info("Inside fetchInquiryMatrix: START - Product Line " + productLine.getPk().toString() + " & Region - "
					+ countryValueData.getParentAttrib().getParentAttrib().getAttributeValue() + "-"
					+ countryValueData.getParentAttrib().getParentAttrib().getPk().toString());

			return getBhgeEmailServiceDao().fetchInquiryMatrixData(
					countryValueData.getParentAttrib().getParentAttrib().getPk().toString(), productLine.getPk().toString(), "region");

		}
		LOG.info("Inside fetchInquiryMatrix: NOMATCH - " + productLine + " & Country - " + countryValueData);
		return null;
	}


	private boolean checkForGovtUser(final B2BUnitModel customerAccountId)
	{
		boolean govtUserFlag = false;
		String govtUser = null;
		if(null != customerAccountId) {
			govtUser = customerAccountId.getAccountGroup();
		}
		if (govtUser != null && Config.getParameter("email.goverment.check").indexOf(govtUser) >= 0)
		{
			govtUserFlag = true;
		}

		return govtUserFlag;

	}

	private String compareEmailType(final BHGEInquiryEmailModel enquiryTable, final String enquiryType)

	{
		String emailId = null;
		LOG.info("Comparing Email UI values --- " + enquiryType);
		if (enquiryType.equalsIgnoreCase(Config.getParameter("government.user")))
		{
			emailId = enquiryTable.getGovernmentUser();
		}
		if (enquiryType.equalsIgnoreCase(Config.getParameter("callibration.repair")))
		{
			emailId = enquiryTable.getServiceReturnsInquiry();
		}
		if (enquiryType.equalsIgnoreCase(Config.getParameter("invoicing")))
		{
			emailId = enquiryTable.getInvoicingInquiry();
		}
		if (enquiryType.equalsIgnoreCase(Config.getParameter("shipping")))
		{
			emailId = enquiryTable.getShippingInquiry();
		}
		if (enquiryType.equalsIgnoreCase(Config.getParameter("quotes.orders.returns")))
		{
			emailId = enquiryTable.getQuoteOrderInquiry();
		}
		LOG.info("Email id for RMA Inquiry : " + emailId);
		return emailId;
	}







	//UPLOAD FILE LOGIC HERE



	@Override
	public uploadFileResponseData uploadFile(final byte[] fileData, final String rmaNumber, final String fileName,
			final String fileType)
	{
		LOG.info("****************************************** UPLOAD FILE FACADE ********************************************");
		//LOG.info("rmaNumber ------------" + rmaNumber);
		//LOG.info("fileName ------------" + fileName);
		//LOG.info("fileType ------------" + fileType);

		uploadFileResponseData uploadResponseData = new uploadFileResponseData();
		try
		{
			uploadResponseData = bhgeRMAStatusService.submitOrderAttachmentsToSAP(rmaNumber, fileData, fileName, fileType);
			if (uploadResponseData != null)
			{
				//LOG.info("messageType ------------" + uploadResponseData.getMessageType());
				//LOG.info("messageText ------------" + uploadResponseData.getMessageText());
				return uploadResponseData;
			}
		}
		catch (final Exception e)
		{
			LOG.error("Exception while uploading file:" + e);
		}
		return null;

	}





















	//CUSTOMER ACCOUNT LOOKUP
	@Override
	public List<CustomerAccountData> fetchCustomerList()
	{
		LOG.info("************************************* INSIDE GETCUSTOMER ******************************************");
		final List<CustomerAccountData> listOfCustomer = new ArrayList<>();
		UserModel user = null;
		if (StringUtils.equals("current.env", "local"))
		{
			user = userService.getUserForUID("localtest");
		}
		else
		{
			user = userService.getCurrentUser();
		}

		LOG.info("******************************** USER **********************************" + user);
		if (null != user && user instanceof GEEdgeCustomerModel)
		{
			final List<B2BUnitModel> customerListModel = bhgeRMAStatusService.getList();
			final List<B2BUnitData> customerListData = new ArrayList<B2BUnitData>();

			for (final B2BUnitModel parentCustomer : customerListModel)
			{
				final B2BUnitData customerData = new B2BUnitData();

				customerData.setUid(parentCustomer.getUid());
				customerData.setName(parentCustomer.getName());
				customerListData.add(customerData);
			}

			for (final B2BUnitData custName : customerListData)
			{
				final boolean thereFlag = false;
				final boolean notThereFlag = false;
				final List<B2BUnitData> geEdgeSoldToList = getFavoriteSoldTo();

				final CustomerAccountData cust = new CustomerAccountData();

				cust.setNumber(custName.getUid());
				cust.setName(custName.getName());
				cust.setFavouritesFlag(false);

				for (final B2BUnitData fav : geEdgeSoldToList)
				{
					//LOG.info("----------- Id: " + custName.getUid());
					//LOG.info("-----------FAV Id: " + fav.getUid());

					if (fav.getUid().contains(custName.getUid()))
					{
						//LOG.info(" IM THERE " + custName.getUid());
						cust.setFavouritesFlag(true);
					}
				}

				listOfCustomer.add(cust);
			}
		}
		return listOfCustomer;

	}





	private List<B2BUnitData> getFavoriteSoldTo()
	{
		final List<B2BUnitData> FavouriteDataList = new ArrayList<B2BUnitData>();

		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		final List<B2BUnitModel> favourites = new ArrayList<>(currentUser.getFavoriteSoldTos());

		for (final B2BUnitModel favModel : favourites)
		{
			final B2BUnitData favData = new B2BUnitData();
			favData.setUid(favModel.getUid());
			favData.setName(favModel.getName());
			FavouriteDataList.add(favData);
		}

		return FavouriteDataList;
	}











	//PAGINATION LOGIC



	@Override
	public SearchPageData<RmaHeaderStatusData> getPaginatedData(final List<RmaHeaderStatusData> rmaStatusData,
			final PageableData pageableData)
	{
		LOG.info("********************************** PAGINATION *****************************************");
		final SearchPageData<RmaHeaderStatusData> result = new SearchPageData<RmaHeaderStatusData>();

		final PaginationData paginationData = new PaginationData();
		paginationData.setPageSize(pageableData.getPageSize());
		paginationData.setSort(pageableData.getSort());
		LOG.info("Page Size in Facade: " + paginationData.getPageSize()+" PageableData Current Page: "+pageableData.getCurrentPage()+"Sorting is : "+paginationData.getSort()+" RMA DATA SIZE: "+rmaStatusData.size());
		paginationData.setTotalNumberOfResults(rmaStatusData.size());

		paginationData.setNumberOfPages((int) Math
				.ceil(Double.valueOf(paginationData.getTotalNumberOfResults()) / Double.valueOf(paginationData.getPageSize())));

		paginationData.setCurrentPage(Math.max(0, Math.min(paginationData.getNumberOfPages(), pageableData.getCurrentPage())));
		result.setPagination(paginationData);

		int startIndex;
		int endIndex;

		if (pageableData.getCurrentPage() == 0)
		{
			LOG.info("=================== Current Page ============== is 0");
			startIndex = 0;
			endIndex = pageableData.getPageSize();
		}
		else
		{
			LOG.info("=================== Current Page is not Zero ==============");
			startIndex = pageableData.getCurrentPage() * pageableData.getPageSize();
			endIndex = (pageableData.getCurrentPage() + 1) * pageableData.getPageSize();
		}


		if (rmaStatusData.size() <= pageableData.getPageSize())
		{
			LOG.info("================== 1st CONDITION, DATA SIZE=================" + rmaStatusData.size());
			result.setResults(rmaStatusData);
		}
		else if (endIndex <= rmaStatusData.size())
		{
			LOG.info("================== 2nd CONDITION, END INDEX =================" + endIndex);
			result.setResults(rmaStatusData.subList(startIndex, endIndex));
		}
		else
		{
			LOG.info("================== 3rd CONDITION, END INDEX =================" + endIndex);
			result.setResults(rmaStatusData.subList(startIndex, rmaStatusData.size()));
		}

		LOG.info("********************************** PAGINATION ENDS*****************************************" + result.toString());
		return result;
	}


	@Override
	public BHGERmaStatusData getRmaStatusRFC(List<String> customerNumber, String rmaNumber, String poNumber, String orderType,
			String dateRange) {
		if(!StringUtils.isEmpty(rmaNumber))
		{
			rmaNumber = leftPad(rmaNumber.trim(), 12, '0');
		}
		return bhgeRMAStatusService.getRmaStatusRFC(customerNumber, rmaNumber, poNumber, orderType, dateRange);
	}

	@Override
	public RmaHeaderStatusData quickSearchForRMANoWs(final BHGERmaStatusData rmaStatusData, final String searchByRMAAndZRASNo,
			final boolean isRecentFlag)
	{

		for (final RmaHeaderStatusData rmaHeader : rmaStatusData.getRmaHeaderStatusDetails())
		{
			if (StringUtils.isNotBlank(searchByRMAAndZRASNo) && StringUtils.isNotEmpty(searchByRMAAndZRASNo))
			{
				//Search by RMA No
				if (getGuestSearchedDataWithRMANoAndZRASOrderNumberWs(rmaHeader, searchByRMAAndZRASNo, isRecentFlag))
				{
					return rmaHeader;
				}
			}
		}
		return null;
	}


	private boolean getGuestSearchedDataWithRMANoAndZRASOrderNumberWs(final RmaHeaderStatusData rmaHeader, final String searchValue,
			final boolean isRecentFlag)
	{
		if (isRecentFlag)
		{
			if (rmaHeader.getRmaNumber().equalsIgnoreCase(searchValue.trim())
					|| rmaHeader.getSalesOrderNumber().equalsIgnoreCase(searchValue.trim()))
			{
				return true;
			}
			else if (rmaHeader.getRmaNumber().equalsIgnoreCase(leftPad(searchValue.trim(), 12, '0')))
			{
				return true;
			}
			else if (rmaHeader.getSalesOrderNumber().equalsIgnoreCase(leftPad(searchValue.trim(), 10, '0')))
			{
				return true;
			}
		}
		else
		{
			/*if (!rmaHeader.getBlockText().equals("Do Not Ship"))
			{
				if (rmaHeader.getRmaNumber().equalsIgnoreCase(searchValue.trim())
						|| rmaHeader.getSalesOrderNumber().equalsIgnoreCase(searchValue.trim()))
				{
					return true;
				}
				else if (rmaHeader.getRmaNumber().equalsIgnoreCase(leftPad(searchValue.trim(), 12, '0')))
				{
					return true;
				}
				else if (rmaHeader.getSalesOrderNumber().equalsIgnoreCase(leftPad(searchValue.trim(), 10, '0')))
				{
					return true;
				}
			}*/
			return true;
		}
		return false;
	}

	private boolean getSearchedDataWithRMANoWs(final RmaHeaderStatusData rmaHeader, final String searchValue)
	{
		//LOG.info("********************************** RMANO" + rmaHeader.getRmaNumber().contains(searchValue));
		/*if (!rmaHeader.getBlockText().equals("Do Not Ship"))
		{
			if (rmaHeader.getRmaNumber().equalsIgnoreCase(searchValue) || rmaHeader.getRmaNumber().contains(searchValue))
			{
				return true;
			}
		}*/
		//return false;
		if (rmaHeader.getRmaNumber().equalsIgnoreCase(searchValue) || rmaHeader.getRmaNumber().contains(searchValue))
		{
			return true;
		}
		return false;
	}

	@Override
	public BHGERmaStatusData applySearchWs(final BHGERmaStatusData rmaStatusData, final PageableData pageableData,
										   final String searchBy, final String sortBy)
	{
		BHGERmaStatusData resultData = new BHGERmaStatusData();
		resultData.setRmaHeaderStatusDetails(new ArrayList<>());

		// Early exit if input is empty
		if (rmaStatusData == null || CollectionUtils.isEmpty(rmaStatusData.getRmaHeaderStatusDetails()) || StringUtils.isBlank(searchBy)) {
			resultData.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(null));
			resultData.setNotFoundException(true);
			return resultData;
		}

		String search = searchBy.trim();
		for (RmaHeaderStatusData header : rmaStatusData.getRmaHeaderStatusDetails()) {
			boolean match = false;

			// RMA No
			if (getSearchedDataWithRMANoWs(header, search)) {
				match = true;
			}
			// PO No
			else if (getSearchedDataWithPONo(header, search)) {
				match = true;
			}
			// Sales Order No
			else if (getSearchedDataWithSalesOrderNo(header, search)) {
				match = true;
			}
			// Part No in any item
			else if (header.getRmaItemStatusDetails() != null) {
				for (RmaItemStatusData item : header.getRmaItemStatusDetails()) {
					if (getSearchedDataWithPartNo(item, search)) {
						match = true;
						break;
					}
				}
			}

			if (match) {
				resultData.getRmaHeaderStatusDetails().add(header);
				resultData
						.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(resultData.getRmaHeaderStatusDetails()));
			}
		}

		if (CollectionUtils.isEmpty(resultData.getRmaHeaderStatusDetails())) {
			resultData.setRmaStatusCount(bhgeRMAStatusService.getRmaStatusCount(null));
			resultData.setNotFoundException(true);
			return resultData;
		}

		// Apply sort if needed
		if (StringUtils.isNotBlank(sortBy)) {
			LOG.info("**************************************** SORT AFTER SEARCH CALL*************************************");
			return applySort(resultData, pageableData, sortBy);
		}

		return resultData;
	}

	









}
