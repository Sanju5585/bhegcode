/**
 * 
 */
package com.bh.occ.controllers;

import java.io.IOException;
import java.io.OutputStream;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import jakarta.annotation.Resource;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;


import org.apache.commons.lang3.StringUtils;
import org.apache.commons.mail2.core.EmailException;
import org.apache.commons.text.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.client.RestTemplate;
import org.apache.commons.collections4.CollectionUtils;

import com.bh.occ.forms.BHGERmaEnquiryEmailData;
import com.bh.occ.util.XSSFilterUtil;
import com.bhge.core.data.*;
import com.bhge.core.data.context.BHGERmaStatusEmailContext;
import com.bhge.core.mailmessages.context.EmailResponse;
import com.bhge.core.rma.service.BHGERMAStatusService;
import com.bhge.core.util.BHGECustomerUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.rma.BHGERMAStatusFacade;
import com.bhge.util.exception.BhgeUtilException;
import com.bhge.util.service.BhgecommonutilsService;
import com.ds.dsocc.data.PDFDownloadRequestDTO;
import com.ds.dsocc.rma.dto.BHGERmaStatusDataWsDTO;
import com.ds.dsocc.rma.dto.EmailResponseWsDTO;
import com.ds.dsocc.rma.dto.RmaAttachmentWsDTO;
import com.ds.dsocc.rma.dto.RmaHeaderStatusDataWsDTO;
import com.ds.facades.rma.EmailResponseData;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;

import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;


/**
 * 
 * This controller is used for My returns related APIs for revamped DS store
 * Added on 8/4/2021
 * @author 212695810
 */

@RestController
@Tag(name = "My Returns")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/myReturns")
public class DSMyReturnsController extends DSBaseController {
	
	private static final Logger LOG = Logger.getLogger(DSMyReturnsController.class);
	
	private static final String DATERANGE = Config.getParameter("date.range");	
	private static final String PAGE_SIZE = "50";
	public static final String TBD = "TBD";
	private static final String TEMPLATECODE = "bhgeRmaStatusEmailTemplate";
	private static final String TEMPLATECODE_RMAENQUIRY = "bhgeRmaEnquiryEmailTemplate";
	
	private static final String ATTACHMENTFLAG = "X";
	
	@Resource(name = "bhgeRMAStatusService")
	private BHGERMAStatusService bhgeRMAStatusService;
	
	@Resource(name = "bhgeRMAStatusFacade")
	private BHGERMAStatusFacade bhgeRMAStatusFacade;
	
	@Resource(name = "userService")
	private UserService userService;
	
	@Resource(name = "bhgeSoldToUtil")
    private BHGESoldToUtil bhgeSoldToUtil;
	
	@Resource(name="bhgecommonutilsService")
	private BhgecommonutilsService commonUtilsService;
	
	@Resource(name = "restTemplate")
	RestTemplate restTemplate;


	@RequestMapping(value = "/fetchRMAStatusForCustomer", method = { RequestMethod.PUT, RequestMethod.POST })
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public BHGERmaStatusDataWsDTO fetchRMAStatusForCustomer(final RmaInputData rmaStatusInput) throws ParseException, BackendException {
		LOG.info("*********************Inside fetchRMAStatusForCustomer controller******************************");

		// Sanitize and extract input
		String pageSize = safeHtml(rmaStatusInput.getPageSize());
		String pageNumber = safeHtml(rmaStatusInput.getPageNumber());
		String refreshFlag = safeHtml(rmaStatusInput.getIsRefreshedFlag());
		String rmaStatusFilter = nullIfBlankOrNull(safeHtml(rmaStatusInput.getRmaStatus()));
		String fromDateFilter = nullIfBlankOrNull(safeHtml(rmaStatusInput.getFromDate()));
		String toDateFilter = nullIfBlankOrNull(safeHtml(rmaStatusInput.getToDate()));
		String searchBy = nullIfBlankOrNull(safeHtml(rmaStatusInput.getSearchByValue()));
		String sortBy = safeHtml(rmaStatusInput.getSortBy());
		if (StringUtils.isBlank(sortBy)) sortBy = "sortByrmaCreatedDSC";
		int page = StringUtils.isNumeric(pageNumber) ? Integer.parseInt(pageNumber) : 0;
		final String ORDERTYPE_DET = StringUtils.defaultIfBlank(Config.getParameter("ORDERTYPE_DET"), "CP_DET");

		// Prepare customer list
		List<String> customerList = populateCustomerListForRMAInput(rmaStatusInput);
		LOG.info("DSMyReturnsController - Customer List: Clearing Cache " + customerList);
		clearCacheOnRefresh(customerList, "true");

		// Refresh cache if needed
		if ("true".equalsIgnoreCase(refreshFlag)) {
			clearCacheOnRefresh(customerList, refreshFlag);
		}

		// Fetch and format data
		BHGERmaStatusData rmaStatusBaseDataCache = bhgeRMAStatusFacade.getCacheData(customerList, ORDERTYPE_DET, DATERANGE);
		BHGERmaStatusData rmaStatusBaseData = getFormattedPrice(rmaStatusBaseDataCache);

		// Handle exceptions
		if (isEmpty(rmaStatusBaseData.getRmaHeaderStatusDetails())) {
			if (rmaStatusBaseData.isTimeoutException()) {
				clearCacheOnRefresh(customerList, "true");
				return mapExceptionData(customerList, ORDERTYPE_DET);
			}
			if (rmaStatusBaseData.isExecutionException()) {
				return handleExecutionException(rmaStatusBaseData, customerList);
			}
			if (rmaStatusBaseData.isInterruptedException()) {
				return handleInterruptionException(rmaStatusBaseData, customerList);
			}
			if (rmaStatusBaseData.isNotFoundException()) {
				return handleNotFoundException(rmaStatusBaseData, customerList);
			}
		}

		// Prepare pageable
		final PageableData pageableData = createPageableData(page, getUIPageSize(pageSize), sortBy, null);
		final List<String> productLinesFilter = populateProductLinesFilterOnRMAInput(rmaStatusInput);

		// Filtering
		if (hasValue(fromDateFilter) && hasValue(toDateFilter) || (productLinesFilter != null && !productLinesFilter.isEmpty())) {
			BHGERmaStatusData filtered = applyFilterOnRMAListingData(rmaStatusBaseData, pageSize, pageNumber,
					rmaStatusFilter, fromDateFilter, toDateFilter, productLinesFilter, searchBy, sortBy, pageableData);
			return getDataMapper().map(filtered, BHGERmaStatusDataWsDTO.class, "FULL");
		}

		// Status filter
		if (hasValue(rmaStatusFilter)) {
			BHGERmaStatusData statusFiltered = applyStatusOnRMAListingData(rmaStatusBaseData, pageSize, pageNumber,
					rmaStatusFilter, searchBy, sortBy, pageableData);
			return getDataMapper().map(statusFiltered, BHGERmaStatusDataWsDTO.class, "FULL");
		}

		// Search
		if (hasValue(searchBy)) {
			BHGERmaStatusData searched = applySearchOnRMAListingData(rmaStatusBaseData, searchBy, sortBy, pageableData);
			return getDataMapper().map(searched, BHGERmaStatusDataWsDTO.class, "FULL");
		}

		// Sort
		if (hasValue(sortBy)) {
			BHGERmaStatusData sorted = applySortOnRMAListingData(rmaStatusBaseData, pageSize, pageNumber, sortBy, pageableData);
			return getDataMapper().map(sorted, BHGERmaStatusDataWsDTO.class, "FULL");
		}

		// Default
		return getDataMapper().map(rmaStatusBaseData, BHGERmaStatusDataWsDTO.class, "FULL");
	}

// --- Helper methods ---

	private String safeHtml(String input) {
		return StringEscapeUtils.escapeHtml4(input);
	}

	private String nullIfBlankOrNull(String input) {
		return (input == null || "null".equalsIgnoreCase(input) || input.isBlank()) ? null : input;
	}

	private boolean hasValue(String input) {
		return input != null && !input.isBlank();
	}

	private boolean isEmpty(List<?> list) {
		return list == null || list.isEmpty();
	}

	private BHGERmaStatusDataWsDTO mapExceptionData(List<String> customerList, String orderType) throws BackendException {
		bhgeRMAStatusFacade.clearRmaStatusDataFromCache(customerList);
		bhgeRMAStatusFacade.removeRmaStatusDataFromCache();
		return getDataMapper().map(bhgeRMAStatusFacade.rmaStatusExceptionData(customerList, orderType), BHGERmaStatusDataWsDTO.class, "FULL");
	}
	
	
	/*@RequestMapping(value = "/fetchRMAStatusForCustomer", method =
		{ RequestMethod.PUT, RequestMethod.POST })
		@ResponseStatus(value = HttpStatus.OK)
		@ApiBaseSiteIdAndUserIdParam*/



	/**
	 * Applies sort on RMA data
	 * @param rmaStatusBaseData
	 * @param pageSize
	 * @param pageNumber
	 * @param sortBy
	 * @param pageableData
	 * @return
	 */
	private BHGERmaStatusData applySortOnRMAListingData(BHGERmaStatusData rmaStatusBaseData, final String pageSize,
			final String pageNumber, String sortBy, final PageableData pageableData) {
		BHGERmaStatusData rmaStatusSortData;
		LOG.info("**************************************** SORT CALL*************************************");
		if(rmaStatusBaseData.getRmaHeaderStatusDetails() != null) {
			LOG.info("Size of RMA data before sort : " + rmaStatusBaseData.getRmaHeaderStatusDetails().size());
		}
		rmaStatusSortData = bhgeRMAStatusFacade.applySort(rmaStatusBaseData, pageableData, sortBy);

		rmaStatusSortData.setBaseCustomerAccount(bhgeRMAStatusFacade.customerData());
		rmaStatusSortData.setCustomerAccounts(bhgeRMAStatusFacade.fetchCustomerList());
		rmaStatusSortData
				.setProductLines(bhgeRMAStatusService.getProductLineData(rmaStatusBaseData.getRmaHeaderStatusDetails()));

		if (rmaStatusSortData.getRmaHeaderStatusDetails() != null && pageableData != null)
		{
			LOG.info("======== sort Data Size ==========" + rmaStatusSortData.getRmaHeaderStatusDetails().size());
			final int pageNumberRequired = (rmaStatusSortData.getRmaHeaderStatusDetails().size() / Integer.parseInt(pageSize));

			LOG.info("======================== PageNumberRequired & Page Number ============================= "+ pageNumberRequired + " & " + pageNumber);
			if (Integer.parseInt(pageNumber) <= pageNumberRequired)
			{
				final SearchPageData<RmaHeaderStatusData> sortData = bhgeRMAStatusFacade
						.getPaginatedData(rmaStatusSortData.getRmaHeaderStatusDetails(), pageableData);
				final List<RmaHeaderStatusData> paginatedData = sortData.getResults();
				rmaStatusSortData.setRmaHeaderStatusDetails(paginatedData);
				rmaStatusSortData.setPagination(sortData.getPagination());
			}
			else
			{
				rmaStatusSortData.setRmaHeaderStatusDetails(null);
			}
		}
		int count=0;
		for(RmaHeaderStatusData rmaHeaderStatusData : rmaStatusSortData.getRmaHeaderStatusDetails()
				) {
			LOG.info("RMA Number after sort : "+rmaHeaderStatusData.getRmaNumber()+" at position "+(++count));
		}

		return rmaStatusSortData;
	}

	/**
	 * Applies search on RMA data
	 * @param rmaStatusBaseData
	 * @param searchBy
	 * @param sortBy
	 * @param pageableData
	 * @return
	 */
	private BHGERmaStatusData applySearchOnRMAListingData(BHGERmaStatusData rmaStatusBaseData, String searchBy,
			String sortBy, final PageableData pageableData) {
		BHGERmaStatusData rmaStatusSearchData;
		LOG.info("**************************************** SEARCH CALL *************************************");
		rmaStatusSearchData = bhgeRMAStatusFacade.applySearchWs(rmaStatusBaseData, pageableData, searchBy, sortBy);

		rmaStatusSearchData.setBaseCustomerAccount(bhgeRMAStatusFacade.customerData());
		rmaStatusSearchData.setCustomerAccounts(bhgeRMAStatusFacade.fetchCustomerList());
		rmaStatusSearchData
				.setProductLines(bhgeRMAStatusService.getProductLineData(rmaStatusBaseData.getRmaHeaderStatusDetails()));

		if (rmaStatusSearchData.getRmaHeaderStatusDetails() != null && pageableData != null)
		{
			final SearchPageData<RmaHeaderStatusData> searchData = bhgeRMAStatusFacade
					.getPaginatedData(rmaStatusSearchData.getRmaHeaderStatusDetails(), pageableData);
			final List<RmaHeaderStatusData> paginatedData = searchData.getResults();
			rmaStatusSearchData.setRmaHeaderStatusDetails(paginatedData);
			rmaStatusSearchData.setPagination(searchData.getPagination());

		}
		return rmaStatusSearchData;
	}

	/**
	 * Apply status on RMA data
	 * @param rmaStatusBaseData
	 * @param pageSize
	 * @param pageNumber
	 * @param rmaStatusFilter
	 * @param searchBy
	 * @param sortBy
	 * @param pageableData
	 * @return
	 */
	private BHGERmaStatusData applyStatusOnRMAListingData(BHGERmaStatusData rmaStatusBaseData, final String pageSize,
			final String pageNumber, String rmaStatusFilter, String searchBy, String sortBy,
			final PageableData pageableData) {
		BHGERmaStatusData statusFilterData;
		LOG.info("**************************************RMA STATUS FILTER CALL **************************************");
		statusFilterData = bhgeRMAStatusFacade.applyRmaStatusFilters(rmaStatusBaseData, pageableData, rmaStatusFilter, searchBy,
				sortBy);

		statusFilterData.setBaseCustomerAccount(bhgeRMAStatusFacade.customerData());
		statusFilterData.setCustomerAccounts(bhgeRMAStatusFacade.fetchCustomerList());
		statusFilterData.setProductLines(bhgeRMAStatusService.getProductLineData(rmaStatusBaseData.getRmaHeaderStatusDetails()));

		if (statusFilterData.getRmaHeaderStatusDetails() != null && pageableData != null)
		{
			LOG.info("======== filtered Data Size ==========" + statusFilterData.getRmaHeaderStatusDetails().size());
			final int pageNumberRequired = (statusFilterData.getRmaHeaderStatusDetails().size() / Integer.parseInt(pageSize));
			LOG.info("======================== PageNumberRequired & Page Number ============================= "+ pageNumberRequired + " & " + pageNumber);

			if (Integer.parseInt(pageNumber) <= pageNumberRequired)
			{
				final SearchPageData<RmaHeaderStatusData> filterData = bhgeRMAStatusFacade
						.getPaginatedData(statusFilterData.getRmaHeaderStatusDetails(), pageableData);
				final List<RmaHeaderStatusData> paginatedData = filterData.getResults();
				statusFilterData.setRmaHeaderStatusDetails(paginatedData);
				statusFilterData.setPagination(filterData.getPagination());
			}
			else
			{
				statusFilterData.setRmaHeaderStatusDetails(null);
			}
		}
		return statusFilterData;
	}

	/**
	 * Apply filter on RMA data
	 * @param rmaStatusBaseData
	 * @param pageSize
	 * @param pageNumber
	 * @param rmaStatusFilter
	 * @param fromDateFilter
	 * @param toDateFilter
	 * @param productLinesFilter
	 * @param searchBy
	 * @param sortBy
	 * @param pageableData
	 * @return
	 */
	private BHGERmaStatusData applyFilterOnRMAListingData(BHGERmaStatusData rmaStatusBaseData, final String pageSize,
			final String pageNumber, String rmaStatusFilter, String fromDateFilter, String toDateFilter,
			final List<String> productLinesFilter, String searchBy, String sortBy, final PageableData pageableData) throws ParseException {
		BHGERmaStatusData rmaStatusFilterData;
		LOG.info("************************************** FILTER CALL **************************************");
		rmaStatusFilterData = bhgeRMAStatusFacade.applyFilters(rmaStatusBaseData, pageableData, fromDateFilter, toDateFilter,
				productLinesFilter, rmaStatusFilter, searchBy, sortBy);

		rmaStatusFilterData.setBaseCustomerAccount(bhgeRMAStatusFacade.customerData());
		rmaStatusFilterData.setCustomerAccounts(bhgeRMAStatusFacade.fetchCustomerList());
		rmaStatusFilterData
				.setProductLines(bhgeRMAStatusService.getProductLineData(rmaStatusBaseData.getRmaHeaderStatusDetails()));

		if (rmaStatusFilterData.getRmaHeaderStatusDetails() != null && pageableData != null)
		{
			//LOG.info("======== filtered Data Size ==========" + rmaStatusFilterData.getRmaHeaderStatusDetails().size());
			final int pageNumberRequired = (rmaStatusFilterData.getRmaHeaderStatusDetails().size() / Integer.parseInt(pageSize));
			//LOG.info("======================== PageNumberRequired & Page Number ============================= "+ pageNumberRequired + " & " + pageNumber);

			if (Integer.parseInt(pageNumber) <= pageNumberRequired)
			{
				final SearchPageData<RmaHeaderStatusData> filterData = bhgeRMAStatusFacade
						.getPaginatedData(rmaStatusFilterData.getRmaHeaderStatusDetails(), pageableData);
				final List<RmaHeaderStatusData> paginatedData = filterData.getResults();
				rmaStatusFilterData.setRmaHeaderStatusDetails(paginatedData);
				rmaStatusFilterData.setPagination(filterData.getPagination());
			}
			else
			{
				rmaStatusFilterData.setRmaHeaderStatusDetails(null);
			}
		}
		return rmaStatusFilterData;
	}

	/**
	 * Handles not found exception for RMA listing
	 * @param rmaStatusBaseData
	 * @param customerList
	 * @return
	 */
	private BHGERmaStatusDataWsDTO handleNotFoundException(BHGERmaStatusData rmaStatusBaseData,
			List<String> customerList) {
		LOG.info("----------------------- NOT FOUND EXCEPTION CONTROLLER------------------------");
		if (customerList != null && customerList.size() > 0)
		{
			bhgeRMAStatusFacade.clearRmaStatusDataFromCache(customerList);
		}
		bhgeRMAStatusFacade.removeRmaStatusDataFromCache();
		return getDataMapper().map(rmaStatusBaseData, BHGERmaStatusDataWsDTO.class, "FULL");
	}

	/**
	 * Handles interruption exception for RMA listing
	 * @param rmaStatusBaseData
	 * @param customerList
	 * @return
	 */
	private BHGERmaStatusDataWsDTO handleInterruptionException(BHGERmaStatusData rmaStatusBaseData,
			List<String> customerList) {
		LOG.info("----------------------- INTERRUPTED EXCEPTION CONTROLLER------------------------");
		if (customerList != null && customerList.size() > 0)
		{
			bhgeRMAStatusFacade.clearRmaStatusDataFromCache(customerList);
		}
		bhgeRMAStatusFacade.removeRmaStatusDataFromCache();
		return getDataMapper().map(rmaStatusBaseData, BHGERmaStatusDataWsDTO.class, "FULL");
	}

	/**
	 * Handles execution exception for RMA listing
	 * @param rmaStatusBaseData
	 * @param customerList
	 * @return
	 */
	private BHGERmaStatusDataWsDTO handleExecutionException(BHGERmaStatusData rmaStatusBaseData,
			List<String> customerList) {
		LOG.info("----------------------- EXECUTION EXCEPTION CONTROLLER------------------------");
		if (customerList != null && customerList.size() > 0)
		{
			bhgeRMAStatusFacade.clearRmaStatusDataFromCache(customerList);
		}
		bhgeRMAStatusFacade.removeRmaStatusDataFromCache();
		return getDataMapper().map(rmaStatusBaseData, BHGERmaStatusDataWsDTO.class, "FULL");
	}

	/**
	 * Clears cache if refresh flag is true
	 * @param customerList
	 * @param refreshFlag
	 */
	private void clearCacheOnRefresh(List<String> customerList, final String refreshFlag) {
		if (StringUtils.isNotBlank(refreshFlag) && StringUtils.isNotEmpty(refreshFlag) && refreshFlag.equalsIgnoreCase("true"))
		{
			LOG.info("-------------------- Refresh Flag -------------------------" + refreshFlag);

			if (customerList != null && customerList.size() > 0)
			{
				LOG.info("DSMyReturnsController -------------------- Clearing cache for customers -------------------------" + customerList);
				bhgeRMAStatusFacade.clearRmaStatusDataFromCache(customerList);
				LOG.info("DSMyReturnsController -------------------- Cache cleared for customers ------------------------- " + customerList);
			}
			bhgeRMAStatusFacade.removeRmaStatusDataFromCache();
			LOG.info("DSMyReturnsController -------------------- Cache cleared for all customers -------------------------");
		}
	}

	/**
	 *
	 * @param rmaStatusInput
	 * @return
	 */
	private List<String> populateProductLinesFilterOnRMAInput(final RmaInputData rmaStatusInput) {
		final List<String> productLinesFilter = new ArrayList<>();
		if (rmaStatusInput != null && CollectionUtils.isNotEmpty(rmaStatusInput.getProductLinesList()))
		{

			rmaStatusInput.getProductLinesList().forEach(products -> {
				productLinesFilter.add(StringEscapeUtils.escapeHtml4(products));
			});
		}

		LOG.info("productLinesFilter -" + productLinesFilter);
		return productLinesFilter;
	}

	/**
	 *
	 * @param rmaStatusInput
	 * @return
	 */
	private List<String> populateCustomerListForRMAInput(final RmaInputData rmaStatusInput) {
		List<String> customerList = new LinkedList<>();
		final List<String> customerListSanitized = new LinkedList<>();
		if (rmaStatusInput.getCustomerNumber() != null)
		{
			rmaStatusInput.getCustomerNumber().forEach(customerNumber -> {
				final String escapedInput = StringEscapeUtils.escapeHtml4(customerNumber);
				customerListSanitized.add(escapedInput);
			});
			if (!CollectionUtils.isEmpty(customerListSanitized))
			{
				customerList = customerListSanitized;
			}
		}
		final String sessionCustomer = bhgeRMAStatusService.getSoldTo();
		LOG.info("sessionCustomer -" + sessionCustomer);
		if (sessionCustomer != null)
		{
			if (!customerList.contains(sessionCustomer))
			{
				customerList.add(0, sessionCustomer);
				LOG.info("======================= customerList ===================" + customerList.get(0));
			}
		}
		LOG.info("customerList -" + customerList);
		return customerList;
	}

	/** Gets formatted price
	 * @param rmaStatusBaseDataCache
	 * @return
	 */
	private BHGERmaStatusData getFormattedPrice(final BHGERmaStatusData rmaStatusBaseDataCache)
	{
		final UserModel user = userService.getCurrentUser();

		//default thousand/decimal separator
		String thousandSepa = "en_US";

		if (user != null && user instanceof GEEdgeCustomerModel)
		{
			final GEEdgeCustomerModel customer = (GEEdgeCustomerModel) user;

			//default currency format from DB
			if (customer.getDefaultCurrencyFormat() != null)
			{
				final String strSepa = customer.getDefaultCurrencyFormat().getCode();

				if (strSepa != null && !strSepa.isEmpty() && !strSepa.isBlank())
				{
					thousandSepa = strSepa;
				}
			}
		}

		final BHGERmaStatusData copy = new BHGERmaStatusData();
		if (null != rmaStatusBaseDataCache)
		{
			copy.setCustomerAccounts(rmaStatusBaseDataCache.getCustomerAccounts());
			copy.setBaseCustomerAccount(rmaStatusBaseDataCache.getBaseCustomerAccount());
			copy.setExecutionException(rmaStatusBaseDataCache.isExecutionException());
			copy.setInterruptedException(rmaStatusBaseDataCache.isInterruptedException());
			copy.setNotFoundException(rmaStatusBaseDataCache.isNotFoundException());
			copy.setTimeoutException(rmaStatusBaseDataCache.isTimeoutException());
			copy.setProductLines(rmaStatusBaseDataCache.getProductLines());
			copy.setRmaErrorMessageDetails(rmaStatusBaseDataCache.getRmaErrorMessageDetails());
			copy.setRmaStatusCount(rmaStatusBaseDataCache.getRmaStatusCount());

			final List<RmaHeaderStatusData> headersList = new ArrayList<RmaHeaderStatusData>();
			if (CollectionUtils.isNotEmpty(rmaStatusBaseDataCache.getRmaHeaderStatusDetails()))
			{
				headersList.addAll(rmaStatusBaseDataCache.getRmaHeaderStatusDetails());
			}
			copy.setRmaHeaderStatusDetails(headersList);
		}
		LOG.info("DSMyReturnsController: Before price formatting call ");
		if(null != copy.getRmaHeaderStatusDetails()) {

			for (final RmaHeaderStatusData rma : copy.getRmaHeaderStatusDetails()) {
				//LOG.info("before header price formatting call " + rma.getNetPrice());

				rma.setFormattedPrice(formatPrice(rma.getNetPrice(), thousandSepa));

				//LOG.info("after header price formatting call " + rma.getFormattedPrice());
				for (final RmaItemStatusData item : rma.getRmaItemStatusDetails()) {
					//LOG.info("before item price formatting call " + item.getNetPrice());

					item.setFormattedPrice(formatPrice(item.getNetPrice(), thousandSepa));

					//LOG.info("after item price formatting call " + item.getFormattedPrice());
				}
			}
		}
		return copy;
	}

	/**
	 * @param netPrice
	 * @return
	 */
	private String formatPrice(final String netPrice, final String thousandSepa)
	{
		try {
			//Net Price formatting changes
			final StringBuffer price = new StringBuffer();
			price.append(netPrice);

			//get length
			final int sizePrice = price.length();
			int indexOfDot = price.indexOf("."); // getting the placeholder of "." in the price

			if (sizePrice >= 4) {
				//decimal separation
				if (thousandSepa.equalsIgnoreCase("en_US")) {
					price.setCharAt(indexOfDot, '.');
				} else {
					price.setCharAt(indexOfDot, ',');
				}
			}

			//thousand separation
			for (int ind = indexOfDot - 3; ind >= 1; ind -= 3) {
				if (thousandSepa.equalsIgnoreCase("en_US")) {
					price.insert(ind, ',');
				} else if (thousandSepa.equalsIgnoreCase("fr_CA")) {
					price.insert(ind, ' ');
				} else if (thousandSepa.equalsIgnoreCase("de_DE")) {
					price.insert(ind, '.');
				}
			}

			return price.toString();
		} catch (RuntimeException re){
			LOG.error("Exception while formating the price :",re);
			return "";
		}
	}


	@RequestMapping(value = "/rmaDocuments/{rmaNumber}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public List<RmaAttachmentWsDTO> fetchRmaDocuments(@PathVariable(value = "rmaNumber", required = true) String rmaNumber,
			@Parameter(description = "customer Number", required = false) @RequestParam(required = false, defaultValue = "") String customerNumber)
	{
		LOG.info("*********************Inside DS MY RETURNS controller******************************");
		customerNumber = StringEscapeUtils.escapeHtml4(customerNumber);
		LOG.info("Customer number is " + customerNumber);
		/*
		 * if (StringUtils.isNotBlank(rmaNumber)) { Validate.matchesPattern(rmaNumber, "[a-zA-Z0-9_.-]+",
		 * "Invalid Input"); }
		 */
		rmaNumber = XSSFilterUtil.filter(StringEscapeUtils.escapeHtml4(rmaNumber));

		BHGERmaAttachmentData attachmentData;
		final String flag = null;
		final String fileName = null;
		final String fileType = null;
		if (rmaNumber != null && !userService.isAnonymousUser(userService.getCurrentUser())
				&& StringUtils.isNotBlank(customerNumber) && BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
		{
			//attachmentData = bhgeRMAStatusService.getAttachments(rmaNumber, flag, fileName, fileType, customerNumber);
			attachmentData = bhgeRMAStatusService.getRMAAttachments(rmaNumber, flag, fileName, fileType, customerNumber);
			if (null != attachmentData && CollectionUtils.isNotEmpty(attachmentData.getFileData()))
			{
				final List<RmaAttachmentWsDTO> finalDataDTO = new ArrayList<>();
				final List<AttachedData> data = attachmentData.getFileData();
				final RmaErrorMessageData errorData = attachmentData.getErrorMessage();
				for (final AttachedData d : data)
				{
					final RmaAttachmentWsDTO rmaAttachedwsdto = new RmaAttachmentWsDTO();
					rmaAttachedwsdto.setFileName(d.getFileName());
					rmaAttachedwsdto.setFileType(d.getFileType());
					finalDataDTO.add(rmaAttachedwsdto);
				}
				return finalDataDTO;
			}
		}
		return null;
	}



	//Download Attachments

	@RequestMapping(value = "/rmaDocuments/{rmaNumber}/downloadAttachment/{fileName}/{fileType}", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public void downloadAttachmentPDF(@PathVariable(value = "rmaNumber", required = true)
	final String rmaNumber, @PathVariable(value = "fileName", required = true)
	final String fileName, @PathVariable(value = "fileType", required = true)
	final String fileType, @RequestParam("customerNumber") String customerNumber, final HttpServletRequest request,
			final HttpServletResponse response) throws IOException
	{
		LOG.info("*********************Inside downloadAttachmentPDF DSMYRETURNS controller******************************");
		downloadDocument(rmaNumber, fileName, fileType, customerNumber, response);
	}

	@RequestMapping(value = "/rmaDocuments/{rmaNumber}/downloadAttachment", method = RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public void downloadAttachmentPDFPost(@PathVariable(value = "rmaNumber", required = true)
									  final String rmaNumber, @Parameter(description = "Billing/Payment address and incoterms object.") @RequestBody final PDFDownloadRequestDTO pdfDownloadRequestDTO, final HttpServletRequest request,
									  final HttpServletResponse response) throws IOException
	{
		LOG.info("*********************Inside downloadAttachmentPDF POST method DSMYRETURNS controller******************************");
		downloadDocument(rmaNumber, pdfDownloadRequestDTO.getFileName(), pdfDownloadRequestDTO.getFileType(), pdfDownloadRequestDTO.getCustomerNumber(), response);
	}
	private void downloadDocument(String rmaNumber, String fileName, String fileType, String customerNumber, HttpServletResponse response) {
		// Sanitize inputs
		customerNumber = StringEscapeUtils.escapeHtml4(customerNumber);
		String sanitizedRmaNumber = StringEscapeUtils.escapeHtml4(rmaNumber);
		String escapedFileName = fileName.replace("\n", "").replace("\r", "").trim();
		escapedFileName = URLDecoder.decode(escapedFileName, StandardCharsets.UTF_8);
		String sanitizedFileName = StringEscapeUtils.unescapeHtml4(escapedFileName);
		String sanitizedFileType = StringEscapeUtils.escapeHtml4(fileType);

		// Validate user and permissions
		if (userService.isAnonymousUser(userService.getCurrentUser()) || StringUtils.isBlank(customerNumber)
				|| !BHGECustomerUtil.isUserAllowedToView(customerNumber, userService)) {
			LOG.info("User not authorized or invalid customer number");
			return;
		}

		// File type/content type/extension mapping
		final Map<String, String[]> fileTypeMap = new HashMap<>();
		fileTypeMap.put("DOC", new String[]{"application/doc", ".DOC"});
		fileTypeMap.put("JPG", new String[]{"application/jpg", ".JPG"});
		fileTypeMap.put("PDF", new String[]{"application/pdf", ".PDF"});
		fileTypeMap.put("XLS", new String[]{"application/vnd.ms-excel", ".XLS"});
		fileTypeMap.put("XLSX", new String[]{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ".XLSX"});
		fileTypeMap.put("MOV", new String[]{"video/quicktime", ".MOV"});

		// Fetch attachment data
		final String flag = ATTACHMENTFLAG;
		BHGERmaAttachmentData attachmentData = bhgeRMAStatusService.getRMAAttachments(
				sanitizedRmaNumber, flag, sanitizedFileName, sanitizedFileType, customerNumber);

		if (attachmentData == null || CollectionUtils.isEmpty(attachmentData.getFileData())
				|| sanitizedFileName == null || sanitizedFileType == null) {
			LOG.info("No attachment data found or invalid file name/type");
			return;
		}

		// Find and write the matching file
		for (AttachedData data : attachmentData.getFileData()) {
			if (data.getFileName().equalsIgnoreCase(sanitizedFileName)
					&& data.getFileType().equalsIgnoreCase(sanitizedFileType)) {
				String[] typeInfo = fileTypeMap.get(sanitizedFileType.toUpperCase());
				if (typeInfo == null) {
					LOG.info("Unsupported file type: " + sanitizedFileType);
					return;
				}
				String contentType = typeInfo[0];
				String extension = typeInfo[1];
				String hexData = data.getHexData();
				if (hexData == null) {
					LOG.info("No hex data for file: " + sanitizedFileName);
					return;
				}
				byte[] contents = Base64.getDecoder().decode(hexData);
				String headerFileName;
				if ("PDF".equalsIgnoreCase(sanitizedFileType)) {
					// Special handling for PDF file name (remove commas, decode)
					headerFileName = URLDecoder.decode(sanitizedFileName.replace("%", "%25"), StandardCharsets.UTF_8)
							.replaceAll("%20", " ").replaceAll(",", "") + extension;
				} else {
					headerFileName = sanitizedFileName + extension;
				}
				response.setContentType(StringEscapeUtils.escapeHtml4(contentType));
				response.setHeader("Content-disposition", "attachment; filename=" + headerFileName);
				response.setContentLengthLong(contents.length);
				try (OutputStream out = response.getOutputStream()) {
					out.write(contents);
					out.flush();
				} catch (IOException e) {
					LOG.info("Exception occurred while downloading file: " + e.getMessage());
				}
				return; // Only one file should match
			}
		}
		LOG.info("No matching file found for download: " + sanitizedFileName + " type: " + sanitizedFileType);
	}

	private void downloadDocumentold(String rmaNumber, String fileName, String fileType, String customerNumber, HttpServletResponse response) {
		customerNumber = StringEscapeUtils.escapeHtml4(customerNumber);
		LOG.info("Customer number is " + customerNumber);
		//final String sanatizedRmaNumber1=StringUtils.replaceEach(rmaNumber);

		final String sanatizedRmaNumber=StringEscapeUtils.escapeHtml4(rmaNumber);
		String escapefilename = fileName.replace("\n","").replace("\r","").trim();
		escapefilename = java.net.URLDecoder.decode(escapefilename, StandardCharsets.UTF_8);
		LOG.info("escapefilename number is " + escapefilename);
		final String sanatizedfilename = StringEscapeUtils.unescapeHtml4(escapefilename);
		LOG.info("sanatizedfilename is " + sanatizedfilename);
		final String sanatizedfileType = StringEscapeUtils.escapeHtml4(fileType);
		/*
		 * if (StringUtils.isNotBlank(rmaNumber)) { Validate.matchesPattern(rmaNumber, "[a-zA-Z0-9_.-]+",
		 * "Invalid Input"); } if (StringUtils.isNotBlank(fileName)) { Validate.matchesPattern(fileName,
		 * "[a-zA-Z0-9_.-]+", "Invalid Input"); } if (StringUtils.isNotBlank(fileType)) {
		 * Validate.matchesPattern(fileType, "[a-zA-Z0-9_.-]+", "Invalid Input"); }
		 */
		if (!userService.isAnonymousUser(userService.getCurrentUser()) && StringUtils.isNotBlank(customerNumber)
				&& BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
		{
			final String flag = ATTACHMENTFLAG;

			//final BHGERmaAttachmentData attachmentData = bhgeRMAStatusService.getAttachments(rmaNumber, flag, fileName, fileType, customerNumber);

			final BHGERmaAttachmentData attachmentData = bhgeRMAStatusService.getRMAAttachments(sanatizedRmaNumber, flag,sanatizedfilename, sanatizedfileType,
					customerNumber);

			final List<AttachedData> attchData = attachmentData.getFileData();
			if (sanatizedfilename != null && sanatizedfileType != null)
			{
				for (final AttachedData data : attchData)
				{
					try {
					if (data.getFileName().equalsIgnoreCase(sanatizedfilename) && sanatizedfileType.equalsIgnoreCase("DOC")
							&& data.getFileType().equalsIgnoreCase("DOC"))
					{
						LOG.info("********************* FILE NAME DOC****************************" + sanatizedfilename);

						final String docData = data.getHexData();
						final byte[] contents = Base64.getDecoder().decode(docData);
						//final HttpHeaders headers = new HttpHeaders();
						//headers.setContentType(MediaType.parseMediaType("application/doc"));
						//final String filename = sanatizedfilename + ".DOC";
						//headers.setContentDispositionFormData(filename, filename);
						//headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
						//final ResponseEntity<byte[]> docFile = new ResponseEntity<byte[]>(contents, headers, HttpStatus.OK);
						//return docFile;
						final String contentType = "application/doc";
						final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

						response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
						response.setHeader("Content-disposition", "attachment; filename=" +sanatizedfilename + ".DOC");
						response.setContentLengthLong(contents.length);
						response.getOutputStream().write(contents);
						response.getOutputStream().flush();
					}

					if (data.getFileName().equalsIgnoreCase(sanatizedfilename) && sanatizedfileType.equalsIgnoreCase("JPG")
							&& data.getFileType().equalsIgnoreCase("JPG"))
					{
						LOG.info("********************* FILE NAME JPG****************************" + sanatizedfilename);

						final String jpgData = data.getHexData();
						final byte[] contents = Base64.getDecoder().decode(jpgData);
						//final HttpHeaders headers = new HttpHeaders();
						//headers.setContentType(MediaType.parseMediaType("application/jpg"));
						//final String filename = sanatizedfilename + ".JPG";
						//headers.setContentDispositionFormData(filename, filename);
						//headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
						//final ResponseEntity<byte[]> jpgFile = new ResponseEntity<byte[]>(contents, headers, HttpStatus.OK);
						//return jpgFile;
						final String contentType = "application/jpg";
						final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

						response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
						response.setHeader("Content-disposition", "attachment; filename=" + sanatizedfilename + ".JPG");
						response.setContentLengthLong(contents.length);
						response.getOutputStream().write(contents);
						response.getOutputStream().flush();
					}

					if (data.getFileName().equalsIgnoreCase(sanatizedfilename) && sanatizedfileType.equalsIgnoreCase("PDF")
							&& data.getFileType().equalsIgnoreCase("PDF"))
					{
						LOG.info("********************* FILE NAME PDF ****************************" + sanatizedfilename);

						final String pdfData = data.getHexData();
						final byte[] contents = Base64.getDecoder().decode(pdfData);
						//final HttpHeaders headers = new HttpHeaders();
						//headers.setContentType(MediaType.parseMediaType("application/pdf"));
						//final String filename = sanatizedfilename + ".PDF";
						//headers.setContentDispositionFormData(filename, filename);
						//headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
						//final ResponseEntity<byte[]> pdfFile = new ResponseEntity<byte[]>(contents, headers, HttpStatus.OK);
						//return pdfFile;
						final String contentType = "application/pdf";
						final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();
						LOG.info("escapeContentType number is " + escapeContentType);
						response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
						//response.setHeader("Content-disposition", "attachment; filename=" + sanatizedfilename + ".PDF");
						LOG.info("Original sanitizedfilename: " + sanatizedfilename);
						final String fileNameWithoutComma= URLDecoder.decode(sanatizedfilename.replace("%", "%25"), StandardCharsets.UTF_8.name()).replaceAll("%20", " ").replaceAll(",", "") + ".PDF";
						//final String fileNameWithoutComma= URLDecoder.decode(sanatizedfilename, StandardCharsets.UTF_8.name()).replaceAll("%20", " ").replaceAll(",", "") + ".PDF";
						LOG.info("fileNameWithoutComma ** "+fileNameWithoutComma);
						response.setHeader("Content-disposition", "attachment; filename=" + fileNameWithoutComma);
						response.setContentLengthLong(contents.length);
						response.getOutputStream().write(contents);
						response.getOutputStream().flush();
					}

					if (data.getFileName().equalsIgnoreCase(sanatizedfilename) && sanatizedfileType.equalsIgnoreCase("XLS")
							&& data.getFileType().equalsIgnoreCase("XLS"))
					{
						LOG.info("********************* FILE NAME XLS ****************************" + sanatizedfilename);

						final String xlsData = data.getHexData();
						final byte[] contents = Base64.getDecoder().decode(xlsData);
						//final HttpHeaders headers = new HttpHeaders();
						//headers.setContentType(MediaType.parseMediaType("application/xls"));
						//final String filename = sanatizedfilename + ".XLS";
						//headers.setContentDispositionFormData(filename, filename);
						//headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
						//final ResponseEntity<byte[]> xlsFile = new ResponseEntity<byte[]>(contents, headers, HttpStatus.OK);
						//return xlsFile;
						final String contentType = "application/vnd.ms-excel";
						final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

						response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
						response.setHeader("Content-disposition", "attachment; filename=" +sanatizedfilename + ".XLS");
						response.setContentLengthLong(contents.length);
						response.getOutputStream().write(contents);
						response.getOutputStream().flush();
					}

					if (data.getFileName().equalsIgnoreCase(sanatizedfilename) && sanatizedfileType.equalsIgnoreCase("XLSX")
							&& data.getFileType().equalsIgnoreCase("XLSX"))
					{
						LOG.info("********************* FILE NAME XLSX ****************************" + sanatizedfilename);

						final String xlsData = data.getHexData();
						final byte[] contents = Base64.getDecoder().decode(xlsData);
						//final HttpHeaders headers = new HttpHeaders();
						//headers.setContentType(MediaType.parseMediaType("application/xls"));
						//final String filename = sanatizedfilename + ".XLS";
						//headers.setContentDispositionFormData(filename, filename);
						//headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
						//final ResponseEntity<byte[]> xlsFile = new ResponseEntity<byte[]>(contents, headers, HttpStatus.OK);
						//return xlsFile;
						final String contentType = "vnd.openxmlformats-officedocument.spreadsheetml.sheet";
						final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

						response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
						response.setHeader("Content-disposition", "attachment; filename=" +sanatizedfilename + ".XLSX");
						response.setContentLengthLong(contents.length);
						response.getOutputStream().write(contents);
						response.getOutputStream().flush();
					}

					if (data.getFileName().equalsIgnoreCase(sanatizedfilename) && sanatizedfileType.equalsIgnoreCase("MOV")
							&& data.getFileType().equalsIgnoreCase("MOV"))
					{
						LOG.info("********************* FILE NAME MOV****************************" + sanatizedfilename);

						final String movData = data.getHexData();
						final byte[] contents = Base64.getDecoder().decode(movData);
						//final HttpHeaders headers = new HttpHeaders();
						//headers.setContentType(MediaType.parseMediaType("video/quicktime"));
						//final String filename = sanatizedfilename + ".MOV";
						//headers.setContentDispositionFormData(filename, filename);
						//headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
						//final ResponseEntity<byte[]> movFile = new ResponseEntity<byte[]>(contents, headers, HttpStatus.OK);
						//return movFile;
						final String contentType = "video/quicktime";
						final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

						response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
						response.setHeader("Content-disposition", "attachment; filename=" + sanatizedfilename + ".MOV");
						response.setContentLengthLong(contents.length);
						response.getOutputStream().write(contents);
						response.getOutputStream().flush();
					}

				 }
					catch(IOException e){
						LOG.info("Exception occured while downloading file"+ e.getMessage());
						e.printStackTrace();
					}
				}

			}
		}
	}


	// Download Excel for RMA

	@RequestMapping(value = "/getRMAExcelData", method = RequestMethod.GET ,produces = "application/vnd.ms-excel")
	@ApiBaseSiteIdAndUserIdParam
	public void getRMAExcelData(final HttpServletRequest request,final HttpServletResponse response,
			@RequestParam(value = "customerNumber", required = false)
			final List<String> customerNumberlist,@RequestParam(value = "productLines", required = false)
			final List<String> productLinesList, @RequestParam(value = "fromDate", required = false)
			final String fromDate, @RequestParam(value = "toDate", required = false)
			final String toDate, @RequestParam(value = "statusFilter", required = false)
			final String statusFilter, @RequestParam(value = "searchBy", required = false)
			final String searchBy, @RequestParam(value = "sortBy", defaultValue = "sortByrmaCreatedDSC") String sortBy,
			@RequestParam(value = "pageNumber", defaultValue = "0")
			final String pageNumber, @RequestParam(value = "pageSize", defaultValue = "2000")
			final String pageSize) throws BackendException, ParseException
	{

		BHGERmaStatusData rmaStatusBaseData = new BHGERmaStatusData();
		List<RmaHeaderStatusData> rmaHeaderDataListDTO = new ArrayList<RmaHeaderStatusData>();
		final String ORDERTYPE_DET = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))
				? Config.getParameter("ORDERTYPE_DET")
				: "CP_DET";

		List<String> customerList = new ArrayList<>();

		if (customerNumberlist != null)
		{
			final List<String> customerListSanitized = new LinkedList<>();
			customerNumberlist.forEach(customerNumber -> {
				final String escapedInput = StringEscapeUtils.escapeHtml4(customerNumber);
				customerListSanitized.add(escapedInput);
			});
			if (!CollectionUtils.isEmpty(customerListSanitized))
			{
				customerList = customerListSanitized;
			}
		}
		List<String> productLines = new ArrayList<>();

		if (CollectionUtils.isNotEmpty(productLinesList))
		{
			final List<String> productLinesSanitized = new LinkedList<>();
			productLinesList.forEach(productLine -> {
				final String escapedInput = StringEscapeUtils.escapeHtml4(productLine);
				productLinesSanitized.add(escapedInput);
			});
			if (!CollectionUtils.isEmpty(productLinesSanitized))
			{
				productLines = productLinesSanitized;
			}
		}

		final String sessionCustomer = bhgeRMAStatusService.getSoldTo();
		LOG.info("sessionCustomer -" + sessionCustomer);
		if (sessionCustomer != null)
		{
			if (!customerList.contains(sessionCustomer))
			{
				customerList.add(0, sessionCustomer);
				//LOG.info("======================= customerList ===================" + customerList.get(0));
			}
		}
		LOG.info("customerList -" + customerList);

		LOG.info("pageNumber -" + pageNumber);

		sortBy = StringEscapeUtils.escapeHtml4(sortBy);
		LOG.info("sortBy -" + StringEscapeUtils.escapeHtml4(sortBy));
		if (StringEscapeUtils.escapeHtml4(sortBy) == null || "".equals(StringEscapeUtils.escapeHtml4(sortBy)))
		{
			sortBy = "sortByrmaCreatedDSC";
		}

		int page = 0;
		if (pageNumber != null && !"".equals(pageNumber))
		{
			page = Integer.parseInt(pageNumber);
		}

		final UserModel user = userService.getCurrentUser();
		final String dateRange = DATERANGE;
		final String orderType = ORDERTYPE_DET;

		//rmaStatusBaseData = getBHGERmaStatusDataAfterException(orderType, dateRange, customerList);
		final PageableData pageableData = createPageableData(page, getUIPageSize(pageSize), sortBy, null);


		//final UserModel user = userService.getCurrentUser();

		//if (null != user && user instanceof GEEdgeCustomerModel)
		//{

			BHGERmaStatusData rmaStatusBaseDataCache = new BHGERmaStatusData();
			rmaStatusBaseDataCache = bhgeRMAStatusFacade.getCacheData(customerList, orderType, dateRange);

			//logic for  adding user based price formatting
			rmaStatusBaseData = getFormattedPrice(rmaStatusBaseDataCache);
		for(RmaHeaderStatusData rma : rmaStatusBaseDataCache.getRmaHeaderStatusDetails()) {
			LOG.info("DSMyReturnsController:getRMAExcelData  RMA Numbers in cache data before formatting - " + rma.getRmaNumber() + "in position" + rmaStatusBaseDataCache.getRmaHeaderStatusDetails().indexOf(rma));
		}

			if ((rmaStatusBaseData.getRmaHeaderStatusDetails() == null || rmaStatusBaseData.getRmaHeaderStatusDetails().isEmpty())
					&& rmaStatusBaseData.isTimeoutException() == true)
			{
				LOG.info("*************************** IN RMASTATUSDATA TIMEOUT EXCEPTION CONTROLLER*************************** ");
				if (customerList != null && customerList.size() > 0)
				{
					bhgeRMAStatusFacade.clearRmaStatusDataFromCache(customerList);
				}
				bhgeRMAStatusFacade.removeRmaStatusDataFromCache();
				rmaStatusBaseData=bhgeRMAStatusFacade.rmaStatusExceptionData(customerList, orderType);
			}

			if ((rmaStatusBaseData.getRmaHeaderStatusDetails() == null || rmaStatusBaseData.getRmaHeaderStatusDetails().isEmpty())
					&& rmaStatusBaseData.isExecutionException() == true)
			{
				if (customerList != null && customerList.size() > 0)
				{
					bhgeRMAStatusFacade.clearRmaStatusDataFromCache(customerList);
				}
				bhgeRMAStatusFacade.removeRmaStatusDataFromCache();
			}

			if ((rmaStatusBaseData.getRmaHeaderStatusDetails() == null || rmaStatusBaseData.getRmaHeaderStatusDetails().isEmpty())
					&& rmaStatusBaseData.isInterruptedException() == true)
			{
				if (customerList != null && customerList.size() > 0)
				{
					bhgeRMAStatusFacade.clearRmaStatusDataFromCache(customerList);
				}
				bhgeRMAStatusFacade.removeRmaStatusDataFromCache();
			}

			if ((rmaStatusBaseData.getRmaHeaderStatusDetails() == null || rmaStatusBaseData.getRmaHeaderStatusDetails().isEmpty())
					&& rmaStatusBaseData.isNotFoundException() == true)
			{
				if (customerList != null && customerList.size() > 0)
				{
					bhgeRMAStatusFacade.clearRmaStatusDataFromCache(customerList);
				}
				bhgeRMAStatusFacade.removeRmaStatusDataFromCache();

			}

		for(RmaHeaderStatusData rmaHeaderData : rmaStatusBaseData.getRmaHeaderStatusDetails()) {
			LOG.info("RMA Number before Excel Generation :  " + rmaHeaderData.getRmaNumber() + "In position of list" + rmaStatusBaseData.getRmaHeaderStatusDetails().indexOf(rmaHeaderData));
		}

		//rmaStatusBaseData = bhgeRMAStatusFacade.applySort(rmaStatusBaseData, pageableData, sortBy);


		/*if (rmaStatusBaseData.getRmaHeaderStatusDetails() != null && pageableData != null)
		{
			final SearchPageData<RmaHeaderStatusData> sortData = bhgeRMAStatusFacade
					.getPaginatedData(rmaStatusBaseData.getRmaHeaderStatusDetails(), pageableData);
			final List<RmaHeaderStatusData> paginatedData = sortData.getResults();
			rmaStatusBaseData.setRmaHeaderStatusDetails(paginatedData);

			rmaHeaderDataListDTO.addAll(rmaStatusBaseData.getRmaHeaderStatusDetails());
		}*/


		if (rmaStatusBaseData.getRmaHeaderStatusDetails() != null
				&& (fromDate != null || toDate != null || statusFilter != null || searchBy != null || sortBy != null))
		{
			rmaHeaderDataListDTO = getFilteredOrSearchedData(rmaStatusBaseData, pageableData, StringEscapeUtils.escapeHtml4(fromDate),
					StringEscapeUtils.escapeHtml4(toDate), productLines, StringEscapeUtils.escapeHtml4(statusFilter),
					StringEscapeUtils.escapeHtml4(searchBy), StringEscapeUtils.escapeHtml4(sortBy), pageNumber, pageSize);
		}
		LOG.info("RMA Header Data List Size for Excel : "+rmaHeaderDataListDTO.size());
		for(RmaHeaderStatusData rmaHeaderData : rmaHeaderDataListDTO){
			LOG.info("RMA Number in Excel :  "+rmaHeaderData.getRmaNumber()+"In position of list"+rmaHeaderDataListDTO.indexOf(rmaHeaderData));
		}

	/*	if (rmaHeaderDataListDTO != null && pageableData != null) {
			final SearchPageData<RmaHeaderStatusData> sortData = bhgeRMAStatusFacade
					.getPaginatedData(rmaHeaderDataListDTO, pageableData);
			final List<RmaHeaderStatusData> paginatedData = sortData.getResults();
			LOG.info("Paginated Data Size for Excel : " + paginatedData.size());
			rmaStatusBaseData.setRmaHeaderStatusDetails(paginatedData);
			LOG.info("RMA Header Data List Size after Pagination for Excel : "+rmaStatusBaseData.getRmaHeaderStatusDetails().size());
			rmaHeaderDataListDTO.addAll(rmaStatusBaseData.getRmaHeaderStatusDetails());
			LOG.info("Final RMA Header Data List Size after Pagination for Excel : "+rmaHeaderDataListDTO.size());
		}*/
		for(RmaHeaderStatusData rmaHeaderData : rmaHeaderDataListDTO){
			LOG.info("for loop for rma");
			LOG.info("Final RMA Number in Excel before generation :  "+rmaHeaderData.getRmaNumber()+"In position of list"+rmaHeaderDataListDTO.indexOf(rmaHeaderData));
		}
		LOG.info("Generating Excel for RMA Listing"+rmaHeaderDataListDTO.size());
		generateExcelForRMAListing(rmaHeaderDataListDTO,response);


		//final BHGERMAExcelView viewExcel = new BHGERMAExcelView();
		//return new ModelAndView(viewExcel, "rmaHeaderDataListDTO", rmaHeaderDataListDTO);

	}
	private static final String[] RMA_EXCEL_HEADERS = {
			"Sold To", "Sold to Number", "Customer PO #", "RMA Number #", "RMA created date",
			"Status", "Line Number", "Qty", "Part #", "Serial Number", "Description",
			"Promised Ship Date", "Actual Ship Date", "Currency", "Price", "Courier", "Tracking Number"
	};

	private void generateExcelForRMAListing(List<RmaHeaderStatusData> rmaDataList, HttpServletResponse response) {
		if (rmaDataList == null || rmaDataList.isEmpty()) {
			return;
		}
		try (Workbook workbook = new XSSFWorkbook()) {
			Sheet sheet = workbook.createSheet("RMA");
			sheet.setDefaultColumnWidth(16);

			// Header style
			CellStyle headerStyle = workbook.createCellStyle();
			Font headerFont = workbook.createFont();
			headerFont.setFontName("Calibri");
			headerFont.setBold(true);
			headerStyle.setFont(headerFont);

			// Create header row
			Row headerRow = sheet.createRow(0);
			for (int i = 0; i < RMA_EXCEL_HEADERS.length; i++) {
				headerRow.createCell(i).setCellValue(RMA_EXCEL_HEADERS[i]);
				headerRow.getCell(i).setCellStyle(headerStyle);
			}

			int rowIdx = 1;
			for (RmaHeaderStatusData headerDTO : rmaDataList) {
				List<RmaItemStatusData> items = headerDTO.getRmaItemStatusDetails();
				if (items == null) continue;
				for (RmaItemStatusData itemDTO : items) {
					Row row = sheet.createRow(rowIdx++);
					row.createCell(0).setCellValue(safe(headerDTO.getName()));
					row.createCell(1).setCellValue(safe(headerDTO.getCustomerAcct()));
					row.createCell(2).setCellValue(safe(headerDTO.getPurchaseOrderNumber()));
					row.createCell(3).setCellValue("Do Not Ship".equalsIgnoreCase(headerDTO.getBlockText()) ? "Pending" : safe(headerDTO.getRmaNumber()));
					row.createCell(4).setCellValue(formatDate(headerDTO.getRmaCreatedDate()));
					row.createCell(5).setCellValue(safe(itemDTO.getRmaStatus()));
					row.createCell(6).setCellValue(safe(itemDTO.getLineNumber()));
					row.createCell(7).setCellValue(safe(itemDTO.getQuantity()));
					row.createCell(8).setCellValue(safe(itemDTO.getPartNumber()));
					row.createCell(9).setCellValue(safe(itemDTO.getPartSerialNumber()));
					row.createCell(10).setCellValue(safe(itemDTO.getPartName()));
					row.createCell(11).setCellValue(formatDate(itemDTO.getPromisedShipDate()));
					row.createCell(12).setCellValue(formatDate(itemDTO.getActualShipDate()));
					row.createCell(13).setCellValue("0.00".equals(itemDTO.getNetPrice()) ? "" : safe(itemDTO.getCurrency()));
					row.createCell(14).setCellValue("0.00".equals(itemDTO.getNetPrice()) ? "" : safe(itemDTO.getFormattedPrice()));
					row.createCell(15).setCellValue(safe(itemDTO.getCarrierDetails()));
					row.createCell(16).setCellValue(safe(itemDTO.getTrackingNo()));
				}
			}

			String fileName = "RMA_" + new SimpleDateFormat("dd-MM-yyyy").format(new Date()) + ".xlsx";
			response.setContentType("application/vnd.ms-excel");
			response.setHeader("Content-disposition", "attachment;filename=" + fileName);

			try (OutputStream out = response.getOutputStream()) {
				workbook.write(out);
				out.flush();
			}
		} catch (Exception e) {
			LOG.error("Error creating excel template:", e);
		}
	}

	// Helper to safely handle nulls
	private String safe(String value) {
		return value == null ? "" : value;
	}

	// Helper to format date string, returns "" if invalid or contains "00"
	private String formatDate(String dateStr) {
		if (dateStr == null || dateStr.contains("00")) return "";
		Date date = getDate(dateStr);
		return date != null ? getDateValue(date) : "";
	}

	private void generateExcelForRMAListingold(List<RmaHeaderStatusData> rmaDataList,
			HttpServletResponse response) {


		//final ArrayList<RmaHeaderStatusData> rmaDataList = (ArrayList<RmaHeaderStatusData>) rma.get("rmaHeaderDataListDTO");
			try
			{

			final Workbook workbook = new XSSFWorkbook();
			final Sheet sheet = workbook.createSheet("RMA");
			sheet.setDefaultColumnWidth(16);

			final CellStyle style = workbook.createCellStyle();
			final Font font = workbook.createFont();
			font.setFontName("Calibri");
			font.setBold(true);
			style.setFont(font);

			final Row header = sheet.createRow(0);

			//header.createCell(0).setCellValue("RMA Number #");
			header.createCell(0).setCellValue("Sold To");
			header.getCell(0).setCellStyle(style);
			header.createCell(1).setCellValue("Sold to Number");
			header.getCell(1).setCellStyle(style);
			header.createCell(2).setCellValue("Customer PO #");
			header.getCell(2).setCellStyle(style);
			header.createCell(3).setCellValue("RMA Number #");
			//header.createCell(2).setCellValue("RMA created date");
			header.getCell(3).setCellStyle(style);
			header.createCell(4).setCellValue("RMA created date");
			//header.createCell(3).setCellValue("Sold To");
			header.getCell(4).setCellStyle(style);
			header.createCell(5).setCellValue("Status");
			//header.createCell(4).setCellValue("Line Number");
			header.getCell(5).setCellStyle(style);
			header.createCell(6).setCellValue("Line Number");
			//header.createCell(5).setCellValue("Part #");
			header.getCell(6).setCellStyle(style);
			header.createCell(7).setCellValue("Qty");
			//header.createCell(6).setCellValue("Description");
			header.getCell(7).setCellStyle(style);
			header.createCell(8).setCellValue("Part #");
			//header.createCell(7).setCellValue("Qty");
			header.getCell(8).setCellStyle(style);
			//header.createCell(8).setCellValue("Status");
			header.createCell(9).setCellValue("Serial Number");
			header.getCell(9).setCellStyle(style);
			//header.createCel(9).setCellValue("Courier");
			header.createCell(10).setCellValue("Description");
			header.getCell(10).setCellStyle(style);
			//header.createCell(10).setCellValue("Promised Ship Date");
			header.createCell(11).setCellValue("Promised Ship Date");
			header.getCell(11).setCellStyle(style);
			//header.createCell(11).setCellValue("Actual Ship Date");
			header.createCell(12).setCellValue("Actual Ship Date");
			header.getCell(12).setCellStyle(style);
			//header.createCell(12).setCellValue("Ship to");
			header.createCell(13).setCellValue("Currency");
			header.getCell(13).setCellStyle(style);
			//header.createCell(13).setCellValue("Tracking Number");
			header.createCell(14).setCellValue("Price");
			header.getCell(14).setCellStyle(style);
			header.createCell(15).setCellValue("Courier");
			header.getCell(15).setCellStyle(style);
			header.createCell(16).setCellValue("Tracking Number");
			header.getCell(16).setCellStyle(style);


			int rowsCount = 1;
			LOG.info("DSMyReturnsController: In method generateExcelForRMAListing RMA Data List Size for Excel : "+rmaDataList.size());
			for (final RmaHeaderStatusData headerDTO : rmaDataList)
			{
				final List<RmaItemStatusData> rmaItemStatusDetails = headerDTO.getRmaItemStatusDetails();

				for (final RmaItemStatusData itemDTO : rmaItemStatusDetails)
				{
					final Row row = sheet.createRow(rowsCount++);

					row.createCell(0).setCellValue(headerDTO.getName());
					row.createCell(1).setCellValue(headerDTO.getCustomerAcct());
					row.createCell(2).setCellValue(headerDTO.getPurchaseOrderNumber());
					if (headerDTO.getBlockText().equalsIgnoreCase("Do Not Ship"))
					{
						row.createCell(3).setCellValue("Pending");
					}
					else
					{
						row.createCell(3).setCellValue(headerDTO.getRmaNumber());
					}

					if (headerDTO.getRmaCreatedDate().contains("00"))
					{
						row.createCell(4).setCellValue("");
					}
					else
					{
						row.createCell(4).setCellValue(getDateValue(getDate(headerDTO.getRmaCreatedDate())));
					}

					row.createCell(5).setCellValue(itemDTO.getRmaStatus());
					row.createCell(6).setCellValue(itemDTO.getLineNumber());
					row.createCell(7).setCellValue(itemDTO.getQuantity());
					row.createCell(8).setCellValue(itemDTO.getPartNumber());
					row.createCell(9).setCellValue(itemDTO.getPartSerialNumber());
					row.createCell(10).setCellValue(itemDTO.getPartName());
					if (itemDTO.getPromisedShipDate().contains("00"))
					{
						row.createCell(11).setCellValue("");
					}
					else
					{
						row.createCell(11).setCellValue(getDateValue(getDate(itemDTO.getPromisedShipDate())));
					}

					if (itemDTO.getPromisedShipDate().contains("00"))
					{
						row.createCell(12).setCellValue("");
					}
					else
					{
						row.createCell(12).setCellValue(getDateValue(getDate(itemDTO.getActualShipDate())));
					}

					row.createCell(13).setCellValue(itemDTO.getNetPrice().equalsIgnoreCase("0.00") ? "" : itemDTO.getCurrency());
					row.createCell(14).setCellValue(itemDTO.getNetPrice().equalsIgnoreCase("0.00") ? "" : itemDTO.getFormattedPrice());
					row.createCell(15).setCellValue(itemDTO.getCarrierDetails());
					row.createCell(16).setCellValue(itemDTO.getTrackingNo());

					/*
					 * row.createCell(3).setCellValue(headerDTO.getName());
					 * row.createCell(4).setCellValue(itemDTO.getLineNumber());
					 * row.createCell(5).setCellValue(itemDTO.getPartNumber());
					 * row.createCell(6).setCellValue(itemDTO.getPartName());
					 * row.createCell(7).setCellValue(itemDTO.getQuantity());
					 * row.createCell(8).setCellValue(itemDTO.getRmaStatus());
					 * row.createCell(9).setCellValue(itemDTO.getCarrierDetails());
					 * row.createCell(12).setCellValue(itemDTO.getShipToAddress());
					 * row.createCell(13).setCellValue(itemDTO.getTrackingNo());
					 */
				}
			}

			final Date date = new Date();
			final SimpleDateFormat format1 = new SimpleDateFormat("dd-MM-yyyy");
			final String date1 = format1.format(date);

			response.setContentType("application/vnd.ms-excel");
			response.setHeader("Content-disposition", "attachment;filename=" + "RMA_" + date1 + ".xlsx");
			final OutputStream ouputStream = response.getOutputStream();
			workbook.write(ouputStream);
			ouputStream.flush();
			ouputStream.close();
		}
		catch (final Exception e){
		LOG.error("Error creating excel template:" + e);
		}
	}
	private List<RmaHeaderStatusData> getFilteredOrSearchedData(
			final BHGERmaStatusData rmaStatusBaseData,
			final PageableData pageableData,
			final String fromDateFilter,
			final String toDateFilter,
			final List<String> productLinesFilter,
			final String rmaStatusFilter,
			final String searchBy,
			String sortBy,
			final String pageNumber,
			final String pageSize
	) throws ParseException {
		LOG.info("*********************Inside getFilteredOrSearchedData DSMYRETURNS controller******************************");
		if (CollectionUtils.isEmpty(rmaStatusBaseData.getRmaHeaderStatusDetails())) {
			return null;
		}
		sortBy = StringEscapeUtils.escapeHtml4(sortBy);

		// Helper for pagination
		java.util.function.Function<List<RmaHeaderStatusData>, List<RmaHeaderStatusData>> paginate = list -> {
			if (list != null && pageableData != null) {
				int pageNumberRequired = list.size() / Integer.parseInt(pageSize);
				if (Integer.parseInt(pageNumber) <= pageNumberRequired) {
					SearchPageData<RmaHeaderStatusData> pageData = bhgeRMAStatusFacade.getPaginatedData(list, pageableData);
					return pageData.getResults();
				}
				return null;
			}
			return list;
		};

		// 1. Filtering by date or product lines
		boolean hasDateFilter = fromDateFilter != null && toDateFilter != null;
		boolean hasProductLines = productLinesFilter != null && !productLinesFilter.isEmpty();
		if (hasDateFilter || hasProductLines) {
			BHGERmaStatusData filtered = bhgeRMAStatusFacade.applyFilters(
					rmaStatusBaseData, pageableData, fromDateFilter, toDateFilter,
					productLinesFilter, rmaStatusFilter, searchBy, sortBy
			);
			return paginate.apply(filtered.getRmaHeaderStatusDetails());
		}

		// 2. Filtering by RMA status
		if (rmaStatusFilter != null) {
			BHGERmaStatusData filtered = bhgeRMAStatusFacade.applyRmaStatusFilters(
					rmaStatusBaseData, pageableData, rmaStatusFilter, searchBy, sortBy
			);
			return paginate.apply(filtered.getRmaHeaderStatusDetails());
		}

		// 3. Searching
		if (StringUtils.isNotBlank(searchBy)) {
			BHGERmaStatusData searched = bhgeRMAStatusFacade.applySearch(
					rmaStatusBaseData, pageableData, searchBy, sortBy
			);
			return paginate.apply(searched.getRmaHeaderStatusDetails());
		}

		// 4. Sorting
		if (sortBy != null) {
			BHGERmaStatusData sorted = bhgeRMAStatusFacade.applySort(
					rmaStatusBaseData, pageableData, sortBy
			);
			return paginate.apply(sorted.getRmaHeaderStatusDetails());
		}

		return null;
	}
	private List<RmaHeaderStatusData> getFilteredOrSearchedDataold(final BHGERmaStatusData rmaStatusBaseData,
			final PageableData pageableData, final String fromDateFilter, final String toDateFilter,
			final List<String> productLinesFilter, final String rmaStatusFilter, final String searchBy, String sortBy,
			final String pageNumber, final String pageSize) throws ParseException
	{
		LOG.info("*********************Inside getFilteredOrSearchedData DSMYRETURNS controller******************************");
		LOG.info("Size of RMA Header Data List before filtering/searching: "+rmaStatusBaseData.getRmaHeaderStatusDetails().size());
		BHGERmaStatusData rmaStatusFilterData = new BHGERmaStatusData();
		BHGERmaStatusData statusFilterData = new BHGERmaStatusData();
		BHGERmaStatusData rmaStatusSearchData = new BHGERmaStatusData();
		BHGERmaStatusData rmaStatusSortData = new BHGERmaStatusData();
		sortBy = StringEscapeUtils.escapeHtml4(sortBy);

		//FOR FILTERING
		if (rmaStatusBaseData.getRmaHeaderStatusDetails() != null && (fromDateFilter != null && toDateFilter != null)
				|| (productLinesFilter != null && (productLinesFilter.isEmpty() == false)))

		{
			LOG.info("************************************** FILTER CALL **************************************");
			rmaStatusFilterData = bhgeRMAStatusFacade.applyFilters(rmaStatusBaseData, pageableData, fromDateFilter, toDateFilter,
					productLinesFilter, rmaStatusFilter, searchBy, sortBy);

			if (rmaStatusFilterData.getRmaHeaderStatusDetails() != null && pageableData != null)
			{
				//LOG.info("======== filtered Data Size ==========" + rmaStatusFilterData.getRmaHeaderStatusDetails().size());
				final int pageNumberRequired = (rmaStatusFilterData.getRmaHeaderStatusDetails().size() / Integer.parseInt(pageSize));
				//LOG.info("======================== PageNumberRequired & Page Number ============================= "+ pageNumberRequired + " & " + pageNumber);

				if (Integer.parseInt(pageNumber) <= pageNumberRequired)
				{
					final SearchPageData<RmaHeaderStatusData> filterData = bhgeRMAStatusFacade
							.getPaginatedData(rmaStatusFilterData.getRmaHeaderStatusDetails(), pageableData);
					final List<RmaHeaderStatusData> paginatedData = filterData.getResults();
					rmaStatusFilterData.setRmaHeaderStatusDetails(paginatedData);
				}
				else
				{
					rmaStatusFilterData.setRmaHeaderStatusDetails(null);
				}
			}

			return rmaStatusFilterData.getRmaHeaderStatusDetails();
		}



		//FOR RMA STATUS FILTER
		if (rmaStatusBaseData.getRmaHeaderStatusDetails() != null && rmaStatusFilter != null)
		{
			LOG.info("**************************************RMA STATUS FILTER CALL **************************************");
			statusFilterData = bhgeRMAStatusFacade.applyRmaStatusFilters(rmaStatusBaseData, pageableData, rmaStatusFilter, searchBy,
					sortBy);

			if (statusFilterData.getRmaHeaderStatusDetails() != null && pageableData != null)
			{
				LOG.info("======== filtered Data Size ==========" + statusFilterData.getRmaHeaderStatusDetails().size());
				final int pageNumberRequired = (statusFilterData.getRmaHeaderStatusDetails().size() / Integer.parseInt(pageSize));
				LOG.info("======================== PageNumberRequired & Page Number ============================= "+ pageNumberRequired + " & " + pageNumber);

				if (Integer.parseInt(pageNumber) <= pageNumberRequired)
				{
					LOG.info("********** inside page number condition ********** setting values");
					final SearchPageData<RmaHeaderStatusData> filterData = bhgeRMAStatusFacade
							.getPaginatedData(statusFilterData.getRmaHeaderStatusDetails(), pageableData);
					final List<RmaHeaderStatusData> paginatedData = filterData.getResults();
					statusFilterData.setRmaHeaderStatusDetails(paginatedData);
				}
				else
				{
					statusFilterData.setRmaHeaderStatusDetails(null);
				}
			}

			return statusFilterData.getRmaHeaderStatusDetails();
		}




		//FOR SEARCHING
		if (rmaStatusBaseData.getRmaHeaderStatusDetails() != null && StringUtils.isNotBlank(searchBy)
				&& StringUtils.isNotEmpty(searchBy))
		{
			LOG.info("**************************************** SEARCH CALL *************************************");
			rmaStatusSearchData = bhgeRMAStatusFacade.applySearch(rmaStatusBaseData, pageableData, searchBy, sortBy);

			if (rmaStatusSearchData.getRmaHeaderStatusDetails() != null && pageableData != null)
			{
				final SearchPageData<RmaHeaderStatusData> searchData = bhgeRMAStatusFacade
						.getPaginatedData(rmaStatusSearchData.getRmaHeaderStatusDetails(), pageableData);
				final List<RmaHeaderStatusData> paginatedData = searchData.getResults();
				rmaStatusSearchData.setRmaHeaderStatusDetails(paginatedData);

			}

			return rmaStatusSearchData.getRmaHeaderStatusDetails();
		}


		//FOR SORTING
		if (rmaStatusBaseData.getRmaHeaderStatusDetails() != null && sortBy != null)
		{
			LOG.info("**************************************** SORT CALL*************************************");
			LOG.info("Size of RMA Header Data List before sorting: "+rmaStatusBaseData.getRmaHeaderStatusDetails().size());
			rmaStatusSortData = bhgeRMAStatusFacade.applySort(rmaStatusBaseData, pageableData, sortBy);
			for(RmaHeaderStatusData rma : rmaStatusBaseData.getRmaHeaderStatusDetails()) {
				LOG.info("DSMyReturnsController: RMA Numbers in loop after sorting  before pagination- " + rma.getRmaNumber() + "in position" + rmaStatusBaseData.getRmaHeaderStatusDetails().indexOf(rma));
			}
			if (rmaStatusSortData.getRmaHeaderStatusDetails() != null && pageableData != null)
			{
				LOG.info("======== sort Data Size ==========" + rmaStatusSortData.getRmaHeaderStatusDetails().size());
				final int pageNumberRequired = (rmaStatusSortData.getRmaHeaderStatusDetails().size() / Integer.parseInt(pageSize));

				LOG.info("======================== PageNumberRequired & Page Number ============================= "+ pageNumberRequired + " & " + pageNumber);
				if (Integer.parseInt(pageNumber) <= pageNumberRequired)
				{
					final SearchPageData<RmaHeaderStatusData> sortData = bhgeRMAStatusFacade
							.getPaginatedData(rmaStatusSortData.getRmaHeaderStatusDetails(), pageableData);
					final List<RmaHeaderStatusData> paginatedData = sortData.getResults();
					rmaStatusSortData.setRmaHeaderStatusDetails(paginatedData);
				}
				else
				{
					rmaStatusSortData.setRmaHeaderStatusDetails(null);
				}
			}
			for(RmaHeaderStatusData rma : rmaStatusBaseData.getRmaHeaderStatusDetails()) {
				LOG.info("DSMyReturnsController: RMA Numbers in loop after sorting after pagination - "+rma.getRmaNumber()+"in position"+rmaStatusBaseData.getRmaHeaderStatusDetails().indexOf(rma));
			}

			return rmaStatusSortData.getRmaHeaderStatusDetails();
		}

		return null;

	}

	private BHGERmaStatusData getBHGERmaStatusDataAfterException(final String orderType, final String dateRange,
			final List<String> customerList) throws BackendException
	{

		BHGERmaStatusData rmaStatusBaseData = new BHGERmaStatusData();
		BHGERmaStatusData rmaStatusBaseDataCache = new BHGERmaStatusData();
		if (customerList.size() >= 1)
		{
			LOG.info("********************************* LOGGED IN USER *********************************");

			rmaStatusBaseDataCache = bhgeRMAStatusFacade.getCacheData(customerList, orderType, dateRange);
			for(RmaHeaderStatusData rma : rmaStatusBaseDataCache.getRmaHeaderStatusDetails()) {
				LOG.info("DSMyReturnsController: RMA Numbers in cache data before formatting - " + rma.getRmaNumber() + "in position" + rmaStatusBaseDataCache.getRmaHeaderStatusDetails().indexOf(rma));
			}
			//logic for  adding user based price formatting
			rmaStatusBaseData = getFormattedPrice(rmaStatusBaseDataCache);

			if (rmaStatusBaseData.getRmaHeaderStatusDetails() == null && rmaStatusBaseData.isTimeoutException() == true)
			{
				LOG.info("*************************** IN RMASTATUSDATA EXCEPTION CONTROLLER*************************** ");
				return bhgeRMAStatusFacade.rmaStatusExceptionData(customerList, orderType);
			}

			if (rmaStatusBaseData.getRmaHeaderStatusDetails() == null && rmaStatusBaseData.isExecutionException() == true)
			{
				LOG.info("----------------------- EXECUTION EXCEPTION CONTROLLER------------------------");
				return rmaStatusBaseData;
			}

			if (rmaStatusBaseData.getRmaHeaderStatusDetails() == null && rmaStatusBaseData.isInterruptedException() == true)
			{
				LOG.info("----------------------- INTERRUPTED EXCEPTION CONTROLLER------------------------");
				return rmaStatusBaseData;
			}

			if (rmaStatusBaseData.getRmaHeaderStatusDetails() == null && rmaStatusBaseData.isNotFoundException() == true)
			{
				LOG.info("----------------------- NOT FOUND EXCEPTION CONTROLLER------------------------");
				return rmaStatusBaseData;
			}
		}
		return rmaStatusBaseData;
	}

	protected Date getDate(final String dateValue)
	{
		final SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd");
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
			LOG.error("Error while parsing the date " + e);
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
			LOG.error("Error occured while parsing the date " + e);
		}
		return "";
	}


	// Share RMA

		@RequestMapping(value = "/shareRMA", method =
		{ RequestMethod.PUT, RequestMethod.POST })
		//@Operation(operationId = "share RMA data", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		@ResponseStatus(value = HttpStatus.OK)
		@ApiBaseSiteIdAndUserIdParam
		public EmailResponseWsDTO emailRmaStatus(final BHGERmaStatusEmailContext mailInputData, final HttpServletRequest request,
				final HttpSession session) throws EmailException, ParseException, BhgeUtilException
		{
			LOG.info("****************************************** SHARE RMA ********************************************");

			//validateShareRMAEmailInput(mailInputData);

			final String ORDERTYPE_DET = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))
					? Config.getParameter("ORDERTYPE_DET")
					: "CP_DET";
			final EmailResponseData emailResponse = new EmailResponseData();
			final UserModel user = userService.getCurrentUser();
			String subject = null;
			String orderType = null;
			String rmaNumber = null;
			List<String> emailIds = null;
			final List<String> customerNumber = new ArrayList<String>();
			if(CollectionUtils.isNotEmpty(mailInputData.getCustomerNumber()) ){
				for(String custNo : mailInputData.getCustomerNumber()) {
					String custNum= (null != custNo ? (("0000000000" + custNo).substring(custNo.length())) : null);
					customerNumber.add(custNum);
				}
			}

			emailResponse.setStatus(false);
			String userName = "";
			if (null != user && user instanceof GEEdgeCustomerModel)
			{
				orderType = ORDERTYPE_DET;
				rmaNumber = StringEscapeUtils.escapeHtml4(mailInputData.getRmaNumber());
				emailIds = mailInputData.getEmailIds();
				userName = user.getName();
				//LOG.info("****************** LOGGED IN USER CALL ********************** " + orderType);
			}
			else
			{
				final String captcha = mailInputData.getGoogleCaptcha();
				//LOG.info("****************** ANONYMOUS CALL ********************** ");
				userName = "Guest";
				//boolean captchaValue = commonUtilsService.validateGoogleCaptchaNew(request, session, restTemplate, captcha);
				if (commonUtilsService.validateGoogleCaptchaNew(request, session, restTemplate, captcha))
				{
					orderType = ORDERTYPE_DET;
					rmaNumber = StringEscapeUtils.escapeHtml4(mailInputData.getRmaNumber());
					emailIds = mailInputData.getEmailIds();
				}
				else
				{
					if (RequestMethod.POST.name().equalsIgnoreCase(request.getMethod()))
					{
						LOG.info("Google Captcha Not validated");
						final String invalidCaptcha = "Google Captcha Not validated";

						emailResponse.setStatus(false);
						emailResponse.setEmailid(null);
						getDataMapper().map(emailResponse, EmailResponseWsDTO.class, "FULL");
					}
				}
			}


			try
			{
				BHGERmaStatusData rmaStatusData = new BHGERmaStatusData();

				for (final String emailId : emailIds)
				{
					rmaStatusData = bhgeRMAStatusService.getRmaStatusDataForRmaNumberRFC(customerNumber,rmaNumber, orderType);
					final List<RmaHeaderStatusData> rmaHeaderStatusData = rmaStatusData.getRmaHeaderStatusDetails();

					if (rmaStatusData.getRmaHeaderStatusDetails() != null || !rmaStatusData.getRmaHeaderStatusDetails().isEmpty())
					{
						for (final RmaHeaderStatusData headerData : rmaHeaderStatusData)
						{
							subject = "DS Store RMA #" + headerData.getRmaNumber() + " " + headerData.getRmaStatus();
							if (headerData.getBlockText().contains("Do Not Ship"))
							{
								headerData.setRmaNumber("Pending");
								subject = "DS Store RMA #" + headerData.getRmaNumber() + " " + headerData.getRmaStatus();
								//LOG.info("--------------------- RMA PENDING -------------------------- : " + headerData.getRmaNumber());
							}

							// Appending Subject content
							if (!Config.getParameter("current.env").equalsIgnoreCase("prod"))
							{
								subject = subject + " from " + userName + "(" + Config.getParameter("current.env") + ")";
							}

							LOG.info("============== Before RMA Share create email ===========");
							bhgeRMAStatusFacade.createShareRmaEmail(TEMPLATECODE, headerData, subject,
									StringEscapeUtils.escapeHtml4(emailId.trim()));
						}
					}
					emailResponse.setStatus(true);
					emailResponse.setEmailid(StringEscapeUtils.escapeHtml4(emailId.trim()));
					LOG.info("============== After RMA Share calling create email ===========");
				}
			}
			catch (final Exception e)
			{
				LOG.error("Error sending RMA Status Email to " + e);
			}
			return getDataMapper().map(emailResponse, EmailResponseWsDTO.class, "FULL");
		}


		// RMA Inquiry

			@RequestMapping(value = "/rmaEnquiry", method =
			{ RequestMethod.PUT, RequestMethod.POST })
			//@Operation(operationId = "share RMA data", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
			@ResponseStatus(value = HttpStatus.OK)
			@ApiBaseSiteIdAndUserIdParam
			public EmailResponseWsDTO rmaEnquiry(@Parameter(description = "Request body for BHGERmaEnquiryEmailData", required = true) @RequestBody BHGERmaEnquiryEmailData inquiryInputData,
					final HttpServletRequest request, final HttpSession session) throws CMSItemNotFoundException, EmailException, ParseException
			{
				LOG.info("****************************************** RMA INQUIRY ********************************************");
				//validateRMAEnquiryEmailInput(inquiryInputData);
				LOG.info("Inside RMAEnquiry: START - & RMA Number - " + StringEscapeUtils.escapeHtml4(inquiryInputData.getRmaNumber()));
				EmailResponse emailResponse = new EmailResponse();
				emailResponse.setStatus(false);
				EmailResponseData emailresponseData = new EmailResponseData();
				try
				{
					String userName = null;
					String emailId = null;
					String customerName = null;

					if (inquiryInputData.getEmailId() == null || inquiryInputData.getEmailId().isBlank()
							|| inquiryInputData.getEmailId().isEmpty())
					{
						final GEEdgeCustomerModel user = (GEEdgeCustomerModel) userService.getCurrentUser();
						//LOG.info("****************** LOGGED IN USER CALL ********************** ");
						//LOG.info("------------- USER ----------------- " + user);
						//LOG.info("------------- USER NAME----------------- " + user.getName());
						//LOG.info("------------- USER Display Name ----------------- " + user.getDisplayName());
						//LOG.info("------------- USER CONTACT EMAIL ID----------------- " + user.getContactEmail());
						//LOG.info("------------- USER EMAIL ID----------------- " + user.getEmail());
						userName = user.getName();
						emailId = Config.getParameter("mail.from");
						//final BHGESoldToData soldToName = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo"));
						final B2BUnitModel soldToName = bhgeSoldToUtil.getDefaultB2BUnitModelCurrentUser();
						customerName = soldToName.getLocName();
					}
					else
					{

						final String captcha = StringEscapeUtils.escapeHtml4(inquiryInputData.getGoogleCaptcha());
						//boolean captchaValue = commonUtilsService.validateGoogleCaptchaNew(request, session, restTemplate, captcha);
						if (commonUtilsService.validateGoogleCaptchaNew(request, session, restTemplate, captcha))
						{
							//LOG.info("****************** ANONYMOUS CALL ********************** ");
							userName = "Guest";
							emailId = StringEscapeUtils.escapeHtml4(inquiryInputData.getEmailId());
							customerName = StringEscapeUtils.escapeHtml4(inquiryInputData.getUserName());
						}
						else
						{
							if (RequestMethod.POST.name().equalsIgnoreCase(request.getMethod()))
							{
								LOG.info("Google Captcha Not validated");
								final String invalidCaptcha = "Google Captcha Not validated";
								emailResponse.setStatus(false);
								emailResponse.setEmailid(null);
								return getDataMapper().map(emailResponse, EmailResponseWsDTO.class, "FULL");
							}
						}
					}

					//LOG.info("------------- USER NAME ------------" + userName);
					//LOG.info("------------- EMAIL ID ------------" + emailId);
					final String rmaNumber = StringEscapeUtils.escapeHtml4(inquiryInputData.getRmaNumber());
					final String poNumber = StringEscapeUtils.escapeHtml4(inquiryInputData.getPurchaseOrderNumber());
					//LOG.info("============== PO Number in Controller ==============" + poNumber);
					final String subject = "Inquiry for RMA #" + rmaNumber + " from " + userName;
					final String rmaCreatedDate = StringEscapeUtils.escapeHtml4(inquiryInputData.getRmaCreatedDate());
					final String rmaEnquiryType = StringEscapeUtils.escapeHtml4(inquiryInputData.getEnquiryType());
					final String rmaEnquiryDetails = StringEscapeUtils.escapeHtml4(inquiryInputData.getEnquiryDetails());
					final String soldToId = StringEscapeUtils.escapeHtml4(null != inquiryInputData.getCustomerAccountId() ? (("0000000000" + inquiryInputData.getCustomerAccountId()).substring(inquiryInputData.getCustomerAccountId().length())) : null);
					String productLine = StringEscapeUtils.escapeHtml4(inquiryInputData.getProductLine());
					if (productLine == null)
					{
						productLine = "";
					}
					if (productLine.contains("&") || productLine.contains("/"))
					{
						productLine = StringEscapeUtils.unescapeHtml4(productLine);
					}

					//LOG.info("------------- CUSTOMER Name ------------" + customerName);

					emailResponse = bhgeRMAStatusFacade.rmaEnquiryMatrix(TEMPLATECODE_RMAENQUIRY, userName, emailId, customerName, rmaNumber,
							poNumber, rmaCreatedDate, rmaEnquiryType, rmaEnquiryDetails, subject, soldToId, null, productLine);
					emailresponseData.setEmailid(emailResponse.getEmailid());
					emailresponseData.setStatus(emailResponse.isStatus());
					return getDataMapper().map(emailResponse, EmailResponseWsDTO.class, "FULL");
				}
				catch (final Exception e)
				{
					LOG.error("Error sending RMA Status Email to " + e.getMessage());
				}
				emailResponse.setStatus(false);
				emailresponseData.setEmailid(emailResponse.getEmailid());
				emailresponseData.setStatus(emailResponse.isStatus());
				LOG.info("Inside RMAEnquiry: CLOSE - " + StringEscapeUtils.escapeHtml4(inquiryInputData.getUserName()) + " & RMA Number - "
						+ StringEscapeUtils.escapeHtml4(inquiryInputData.getRmaNumber()));
				return getDataMapper().map(emailResponse, EmailResponseWsDTO.class, "FULL");
			}


			// Guest RMA STATUS check

			@RequestMapping(value = "/fetchRMAStatusForGuestDS", method = RequestMethod.POST)
			@Operation(operationId = "Fetch RMA Status For Guest ds", description= "Fetch RMA Status For Guest")
			@ResponseStatus(value = HttpStatus.OK)
			@ApiBaseSiteIdAndUserIdParam
			public RmaHeaderStatusDataWsDTO fetchRMAStatusForGuest(final RmaInputData rmaStatusGuestInput, final HttpServletRequest request,
																   final HttpSession session) throws ParseException, BackendException, BhgeUtilException
			{
				final String ORDERTYPE_DET = StringUtils.defaultIfBlank(Config.getParameter("ORDERTYPE_DET"), "CP_DET");
				final String captcha = StringEscapeUtils.escapeHtml4(rmaStatusGuestInput.getGoogleCaptcha());
				final String poNumber = StringEscapeUtils.escapeHtml4(rmaStatusGuestInput.getPoNumber());
				String rmaNumber = StringEscapeUtils.escapeHtml4(rmaStatusGuestInput.getRmaNumber());
				final List<String> customerNumber = new ArrayList<>();
				RmaHeaderStatusData guestRmaHeaderStatus = new RmaHeaderStatusData();

				// Validate captcha
				if (!commonUtilsService.validateGoogleCaptchaNew(request, session, restTemplate, captcha)) {
					if (RequestMethod.POST.name().equalsIgnoreCase(request.getMethod())) {
						LOG.info("Google Captcha Not validated");
						guestRmaHeaderStatus.setErrorMsg("Exception Occured - Google Captcha Not validated");
					}
					return getDataMapper().map(guestRmaHeaderStatus, RmaHeaderStatusDataWsDTO.class, "FULL");
				}

				// Pad RMA number if present
				if (StringUtils.isNotBlank(rmaNumber)) {
					rmaNumber = leftPad(rmaNumber.trim(), 12, '0');
				}

				// Sanitize and pad customer numbers
				if (rmaStatusGuestInput != null && CollectionUtils.isNotEmpty(rmaStatusGuestInput.getCustomerNumber())) {
					for (String number : rmaStatusGuestInput.getCustomerNumber()) {
						if (StringUtils.isNotBlank(number)) {
							customerNumber.add(StringEscapeUtils.escapeHtml4(("0000000000" + number).substring(number.length())));
						}
					}
				}

				// If all required values are missing, return error
				if (StringUtils.isBlank(poNumber) && StringUtils.isBlank(rmaNumber)&& CollectionUtils.isEmpty(customerNumber)) {
					guestRmaHeaderStatus.setErrorMsg("Exception Occured - Missing required input");
					return getDataMapper().map(guestRmaHeaderStatus, RmaHeaderStatusDataWsDTO.class, "FULL");
				}

				// Fetch RMA status data
				final String dateRange = DATERANGE;
				BHGERmaStatusData data = bhgeRMAStatusFacade.getRmaStatusRFC(customerNumber, rmaNumber, poNumber, ORDERTYPE_DET, dateRange);

				// Handle SAP exceptions
				if (data.isExecutionException() || data.isInterruptedException() || data.isTimeoutException()) {
					guestRmaHeaderStatus.setErrorMsg("Exception Occured - SAP Error");
					return getDataMapper().map(guestRmaHeaderStatus, RmaHeaderStatusDataWsDTO.class, "FULL");
				}

				// Select by RMA or PO number
				if (CollectionUtils.isNotEmpty(data.getRmaHeaderStatusDetails())) {
					if (StringUtils.isNotBlank(rmaNumber) && StringUtils.isBlank(poNumber)) {
						if (CollectionUtils.isNotEmpty(customerNumber)
								&& customerNumber.get(0).equals(data.getRmaHeaderStatusDetails().get(0).getCustomerAcct())) {
							guestRmaHeaderStatus = bhgeRMAStatusFacade.quickSearchForRMANoWs(data, rmaNumber, false);
						} else {
							guestRmaHeaderStatus.setErrorMsg("Exception Occured condition 1");
						}
					} else if (StringUtils.isBlank(rmaNumber) && StringUtils.isNotBlank(poNumber)) {
						guestRmaHeaderStatus = bhgeRMAStatusFacade.quickSearchForPONo(data, poNumber);
					} else {
						guestRmaHeaderStatus.setErrorMsg("Exception Occured condition 2");
					}
				} else {
					guestRmaHeaderStatus.setErrorMsg("No RMA data found");
				}

				return getDataMapper().map(guestRmaHeaderStatus, RmaHeaderStatusDataWsDTO.class, "FULL");
			}
			public RmaHeaderStatusDataWsDTO fetchRMAStatusForGuestold(final RmaInputData rmaStatusGuestInput, final HttpServletRequest request,
					final HttpSession session) throws ParseException, BackendException , BhgeUtilException
			{
				//validateRMAStatusInput(StringEscapeUtils.escapeHtml4(rmaStatusGuestInput));
				BHGERmaStatusData data = new BHGERmaStatusData();
				RmaHeaderStatusData guestRmaHeaderStatus = new RmaHeaderStatusData();
				//final Map<String, Object> finalResponse = new HashMap<>();
				final UserModel user = userService.getCurrentUser();
				final String ORDERTYPE_DET = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))
						? Config.getParameter("ORDERTYPE_DET")
						: "CP_DET";

				//INPUT
				String dateRange = null;
				String poNumber = null;
				String rmaNumber = null;
				String paddedRmaNumber = null;
				final List<String> customerNumber = new ArrayList<>();

				String orderType = null;
				final String captcha = StringEscapeUtils.escapeHtml4(rmaStatusGuestInput.getGoogleCaptcha());


				//LOG.info("****************** ANONYMOUS CALL ********************** ");
				//boolean captchaValue = commonUtilsService.validateGoogleCaptchaNew(request, session, restTemplate, captcha);
				if (commonUtilsService.validateGoogleCaptchaNew(request, session, restTemplate, captcha))
				{
					orderType = ORDERTYPE_DET;
					dateRange = DATERANGE;
					poNumber = StringEscapeUtils.escapeHtml4(rmaStatusGuestInput.getPoNumber());
					rmaNumber = StringEscapeUtils.escapeHtml4(rmaStatusGuestInput.getRmaNumber());
					if(!StringUtils.isEmpty(rmaNumber))
					{
						paddedRmaNumber = leftPad(rmaNumber.trim(), 12, '0');
					}
					LOG.info("Padded RMA NUMBER ***************** "+paddedRmaNumber);
					//			customerNumber = rmaStatusGuestInput.getCustomerNumber();
					if (rmaStatusGuestInput != null && CollectionUtils.isNotEmpty(rmaStatusGuestInput.getCustomerNumber()))
					{
						rmaStatusGuestInput.getCustomerNumber().forEach(number -> {
							customerNumber.add(StringEscapeUtils.escapeHtml4(null != number ? (("0000000000" + number).substring(number.length())) : null));
						});
					}

					if (!StringUtils.isBlank(poNumber) || !StringUtils.isBlank(paddedRmaNumber) || !CollectionUtils.isEmpty(customerNumber))
					{
						data = bhgeRMAStatusFacade.getRmaStatusRFC(customerNumber, paddedRmaNumber, poNumber, orderType, dateRange);
						//data = bhgeRMAStatusService.getRmaStatusForCustomer(customerNumber, orderType, dateRange);
						/*Commenting out*/
						if (data.isExecutionException() || data.isInterruptedException() || data.isTimeoutException())
						{
							//finalResponse.put("SAPError", "SAPError");
						}
						if (data.getRmaHeaderStatusDetails() != null && !(rmaNumber == null || rmaNumber.isEmpty())
								&& (poNumber == null || poNumber.isEmpty()))
						{
							if (CollectionUtils.isNotEmpty(customerNumber)
									&& CollectionUtils.isNotEmpty(data.getRmaHeaderStatusDetails()) && customerNumber
											.get(0).equals(data.getRmaHeaderStatusDetails().get(0).getCustomerAcct()))
							{
								//guestRmaHeaderStatus = bhgeRMAStatusFacade.quickSearchForRMANo(data, rmaNumber, false);
								guestRmaHeaderStatus = bhgeRMAStatusFacade.quickSearchForRMANoWs(data, rmaNumber, false);
								//finalResponse.put("rmaStatusGuestData", bhgeRMAStatusFacade.quickSearchForRMANo(data, rmaNumber, false));
							}
							else
							{
								guestRmaHeaderStatus.setErrorMsg("Exception Occured condition 1");
								//finalResponse.put("rmaStatusGuestData", null);
							}
						}
						else if (data.getRmaHeaderStatusDetails() != null && (rmaNumber == null || rmaNumber.isEmpty())
								&& !(poNumber == null || poNumber.isEmpty()))
						{
							guestRmaHeaderStatus = bhgeRMAStatusFacade.quickSearchForPONo(data, poNumber);
							//finalResponse.put("rmaStatusGuestData", bhgeRMAStatusFacade.quickSearchForPONo(data, poNumber));
						}

						else
						{
							LOG.info("======= Guest RMA Header Status setting error msg =======");
							guestRmaHeaderStatus.setErrorMsg("Exception Occured condition 2");
							//finalResponse.put("rmaStatusGuestData", null);
						}
					}
				}
				else
				{
					if (RequestMethod.POST.name().equalsIgnoreCase(request.getMethod()))
					{
						LOG.info("Google Captcha Not validated");
						final String invalidCaptcha = "Google Captcha Not validated";
						//finalResponse.put("rmaStatusGuestData", null);
						guestRmaHeaderStatus.setErrorMsg("Exception Occured - Google Captcha Not validated");
					}
				}

				return getDataMapper().map(guestRmaHeaderStatus, RmaHeaderStatusDataWsDTO.class, "FULL");
			}



			@RequestMapping(value = "/quickRmaStatus", method = RequestMethod.POST)
			@Operation(operationId = "RMA Quick Orders for logged in user", description= "RMA Quick Orders for logged in user")
			@ResponseStatus(value = HttpStatus.OK)
			@ApiBaseSiteIdAndUserIdParam
			public BHGERmaStatusDataWsDTO quickRmaOrderStatus(final RmaInputData rmaStatusInput) throws ParseException, BackendException
			{
				//validateRMAStatusInput(StringEscapeUtils.escapeHtml4(rmaStatusInput));
				//quickOrders
				BHGERmaStatusData rmaStatusBaseData = new BHGERmaStatusData();
				final BHGERmaStatusData rmaStatusBaseData1 = new BHGERmaStatusData();
				final List<RmaHeaderStatusData> listOfRmaHeaderStatusData = new ArrayList<RmaHeaderStatusData>();
				final String ORDERTYPE_DET = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))
						? Config.getParameter("ORDERTYPE_DET")
						: "CP_DET";

				final UserModel user = userService.getCurrentUser();
				final List<String> customerList = new ArrayList<>();

				customerList.add(bhgeRMAStatusService.getSoldTo());
				//customerList.add("0000139175");
				//orderType = ORDERTYPE_DET;
				final String dateRange = DATERANGE;
				String rmaNumber = StringEscapeUtils.escapeHtml4(rmaStatusInput.getRmaNumber());
				final String PoNumber = StringEscapeUtils.escapeHtml4(rmaStatusInput.getPoNumber());
				String orderType = ORDERTYPE_DET;
				final boolean isRecentFlag = rmaStatusInput.isRecentFlag();
				if (null != user && user instanceof GEEdgeCustomerModel)
				{
					orderType = ORDERTYPE_DET;
					//LOG.info("****************** LOGGED IN USER CALL ********************** " + orderType);
				}
				//LOG.info("****************** ANONYMOUS CALL ********************** " + orderType);

				//rmaStatusBaseData = bhgeRMAStatusFacade.getCacheData(customerList, orderType, dateRange);
				//rmaStatusBaseData =bhgeRMAStatusService.getRmaStatusForCustomer(customerList, orderType, dateRange);
				//rmaStatusBaseData = getBHGERmaStatusDataAfterException(orderType, dateRange, customerList);

				// Prefixing with the starting zeros if rmaNumber doesn't have it.
				if(!StringUtils.isEmpty(rmaNumber))
				{
					rmaNumber = leftPad(rmaNumber.trim(), 12, '0');
				}
				// Code to make direct SAP call based on Rma Number
				rmaStatusBaseData = getBHGEQuickRmaStatusData(orderType, rmaNumber, customerList, PoNumber);

				try
				{
					if (!(rmaNumber == null || rmaNumber.isEmpty()) && (PoNumber == null || PoNumber.isEmpty()))
					{
						listOfRmaHeaderStatusData.add(bhgeRMAStatusFacade.quickSearchForRMANoWs(rmaStatusBaseData, rmaNumber, isRecentFlag));
					}
					else if ((rmaNumber == null || rmaNumber.isEmpty()) && !(PoNumber == null || PoNumber.isEmpty()))
					{
						listOfRmaHeaderStatusData.add(bhgeRMAStatusFacade.quickSearchForPONo(rmaStatusBaseData, PoNumber));
					}
				}
				catch (final Exception e)
				{
					LOG.info("No data found " + e);
				}

				rmaStatusBaseData1.setBaseCustomerAccount(StringEscapeUtils.escapeHtml4(rmaStatusBaseData.getBaseCustomerAccount()));
				rmaStatusBaseData1.setRmaErrorMessageDetails(rmaStatusBaseData.getRmaErrorMessageDetails());
				rmaStatusBaseData1.setTimeoutException(rmaStatusBaseData.isTimeoutException());
				rmaStatusBaseData1.setInterruptedException(rmaStatusBaseData.isInterruptedException());
				rmaStatusBaseData1.setExecutionException(rmaStatusBaseData.isExecutionException());
				rmaStatusBaseData1.setNotFoundException(listOfRmaHeaderStatusData.isEmpty());
				rmaStatusBaseData1.setRmaHeaderStatusDetails(listOfRmaHeaderStatusData);
				return getDataMapper().map(rmaStatusBaseData1, BHGERmaStatusDataWsDTO.class, "FULL");

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
			
			private BHGERmaStatusData getBHGEQuickRmaStatusData(final String orderType, final String rmaNumber,
					 final List<String> customerList, String poNumber) throws BackendException
			{

				BHGERmaStatusData rmaStatusBaseData = new BHGERmaStatusData();
				BHGERmaStatusData rmaStatusBaseDataCache = new BHGERmaStatusData();
				if (customerList.size() >= 1) {
					LOG.info("********************************* LOGGED IN USER *********************************");

					rmaStatusBaseDataCache = bhgeRMAStatusFacade.getQuickRmaStatusData(customerList, orderType, rmaNumber, poNumber);
                    LOG.info("DSMyReturnsController: RMA Numbers in quick status cache data before formatting - " );
					//logic for  adding user based price formatting
					rmaStatusBaseData = getFormattedPrice(rmaStatusBaseDataCache);
					if (null != rmaStatusBaseData) {
						if (rmaStatusBaseData.getRmaHeaderStatusDetails() == null && rmaStatusBaseData.isTimeoutException() == true) {
							LOG.info("*************************** IN RMASTATUSDATA EXCEPTION CONTROLLER*************************** ");
							return bhgeRMAStatusFacade.rmaStatusExceptionData(customerList, orderType);
						}

						if (rmaStatusBaseData.getRmaHeaderStatusDetails() == null && rmaStatusBaseData.isExecutionException() == true) {
							LOG.info("----------------------- EXECUTION EXCEPTION CONTROLLER------------------------");
							return rmaStatusBaseData;
						}

						if (rmaStatusBaseData.getRmaHeaderStatusDetails() == null && rmaStatusBaseData.isInterruptedException() == true) {
							LOG.info("----------------------- INTERRUPTED EXCEPTION CONTROLLER------------------------");
							return rmaStatusBaseData;
						}

						if (rmaStatusBaseData.getRmaHeaderStatusDetails() == null && rmaStatusBaseData.isNotFoundException() == true) {
							LOG.info("----------------------- NOT FOUND EXCEPTION CONTROLLER------------------------");
							return rmaStatusBaseData;
						}
					}
				}
				return rmaStatusBaseData;
			}
}