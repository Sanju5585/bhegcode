package com.bh.occ.controllers;

import com.bh.occ.forms.BHGEOrderEnquiryEmailData;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.data.BHGESalesOrderAttachmentData;
import com.bhge.core.data.SalesOrderAttachedData;
import com.bhge.core.data.SalesOrderErrorMessageData;
import com.bhge.core.data.context.BHGEOrderShareEmailContext;
import com.bhge.core.mailmessages.context.EmailResponse;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.order.dto.SalesOrderAttachedWsDTO;
import com.bhge.core.util.BHGECustomerUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.forms.OrderHistoryFormSearchData;
import com.bhge.facades.order.BHGEB2BOrderDataFetch;
import com.bhge.facades.order.BHGEB2BOrderFacade;
import com.bhge.facades.order.attachments.BHGESalesOrderAttachmentsData;
import com.bhge.facades.order.data.BHGEOrderHistoryData;
import com.bhge.facades.order.data.OrderErrorData;
import com.bhge.facades.order.data.OrderStatusRequestData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.util.exception.BhgeUtilException;
import com.bhge.util.service.BhgecommonutilsService;
import com.ds.dsocc.common.dto.*;
import com.ds.dsocc.rma.dto.BHGESalesOrderAttachmentsWsDTO;
import com.ds.dsocc.rma.dto.EmailResponseListWsDTO;
import com.ds.dsocc.rma.dto.EmailResponseWsDTO;
import com.ds.facades.rma.EmailResponseData;
import de.hybris.platform.acceleratorservices.config.SiteConfigService;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2bacceleratorfacades.order.data.B2BUnitData;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.order.data.OrderHistoryViewData;
import de.hybris.platform.commerceservices.request.mapping.annotation.RequestMappingOverride;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commercewebservicescommons.dto.search.pagedata.PaginationWsDTO;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import de.hybris.platform.webservicescommons.mapping.DataMapper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import de.hybris.platform.webservicescommons.util.YSanitizer;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.Validate;
import org.apache.commons.mail2.core.EmailException;
import org.apache.log4j.Logger;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.ExecutionException;

@Controller
@Scope("singleton")
@Tag(name = "Ds Order History")
@RequestMapping("/{baseSiteId}/users/{userId}/orderHistory")
public class DSOrderHistoryPageController extends DSBaseController {

	private static final Logger LOG = Logger.getLogger(DSOrderHistoryPageController.class);

	private static final String PAGE_SIZE = "50";
	private static final String EXCEL_PAGE_SIZE = "excel.result.page.size";

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "b2bOrderFacade")
	private BHGEB2BOrderFacade bhgeB2BOrderFacade;

	@Resource
	private BhgecommonutilsService commonUtilsService;

	@Autowired
	RestTemplate restTemplate;

	@Autowired(required = true)
	BHGESoldToUtil bhgeSoldToUtil;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "bhgeB2BOrderDataFetch")
	private BHGEB2BOrderDataFetch bhgeB2BOrderDataFetch;

	@Resource(name = "siteConfigService")
	private SiteConfigService siteConfigService;
	
	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeB2bEmailService;
	@Resource(name="dataMapper")
	private DataMapper dataMapper;

	public SiteConfigService getSiteConfigService() {
		return siteConfigService;
	}
	
	private static final String SHARE_ORDER_TEMPLATECODE = "bhgeOrderShareEmailTemplate";
	private static final String TEMPLATECODE_ENQUIRY = "bhgeOrderEnquiryEmailTemplate";
	
	private static final String ATTACHMENTFLAG = "X";

	@RequestMapping(value = "/quickOrders", method = { RequestMethod.PUT, RequestMethod.POST }, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	@Operation(operationId = "Quick Order Status")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(value = HttpStatus.OK)
	public OrderStatusWsDTO quickOrders(
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			final OrderStatusRequestData orderStatusInput, final HttpServletRequest request, final HttpSession session)
			throws ParseException, CMSItemNotFoundException, InterruptedException, ExecutionException,
			BhgeUtilException {
		// LOG.info("Input Param : CustomerNumber" +
		// orderStatusInput.getCustomerNumber() + " | PoNumber" +
		// orderStatusInput.getPoNumber() + " | " + orderStatusInput.getOrderNumber());

		OrderStatusWsDTO orderStatusWsDTO = new OrderStatusWsDTO();
		OrderErrorData orderErrorData = new OrderErrorData();

		final Map<String, Object> finalResponseObject = new HashMap<>();
		final String DETAIL_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))
				? Config.getParameter("ORDERTYPE_DET")
				: "CP_DET";
		final String FAST_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_FAST")))
				? Config.getParameter("ORDERTYPE_FAST")
				: "CP_FAST";
		final UserModel user = userService.getCurrentUser();
		String poNumber = null;
		String salesOrderNumber = null;
		SearchPageData<BHGEOrderHistoryData> searchPageData = null;
		if (StringUtils.isNotBlank(orderStatusInput.getPoNumber())) {
			poNumber = StringEscapeUtils.escapeHtml4(orderStatusInput.getPoNumber().trim());
		}
		if (poNumber == null) {
			poNumber = "";
		}

		final String poOrderNumberReplace = poNumber.replace("*", "#");
		if(StringUtils.isNotBlank(orderStatusInput.getOrderNumber())) {
			salesOrderNumber = StringEscapeUtils.escapeHtml4(orderStatusInput.getOrderNumber().trim());
		}
		String pageType = FAST_ORDER;
		String paddingSalesorder = null;
		String paddingSoldToid = null;
		final String pageSize = "100";
		final String sortCode = "false";
		final String sortKey = "false";
		final int page = 0;
		String soldTo = null;

		final PageableData pageableData = createPageableData(page, getPageSize(pageSize), sortCode, null);
		if (salesOrderNumber != null && (!salesOrderNumber.equalsIgnoreCase(""))) {
			paddingSalesorder = leftPad(salesOrderNumber, 10, '0');
		}

		if (null != user && user instanceof GEEdgeCustomerModel) {
			// FullData
			pageType = DETAIL_ORDER;
			// soldTo = ((DefaultBHGEB2BOrderFacade) bhgeB2BOrderFacade).getSoldTo();
			soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs().getUid();
			if (soldTo != null) {
				paddingSoldToid = leftPad(soldTo, 10, '0');
			}

			pageType = DETAIL_ORDER;
			searchPageData = bhgeB2BOrderFacade.newGetDefaultFastOrdersForWS(paddingSoldToid, paddingSalesorder,
					poOrderNumberReplace, pageableData, null, pageType,orderErrorData);
		} else {
			final String captcha = StringEscapeUtils.escapeHtml4(orderStatusInput.getGoogleCaptcha());

			//if (commonUtilsService.validateGoogleCaptchaNew(request, session, restTemplate, captcha)) 
			if(commonUtilsService.validateGoogleCaptchaNew(request, session, restTemplate, captcha)){
				soldTo = StringEscapeUtils.escapeHtml4(orderStatusInput.getCustomerNumber().get(0));
				LOG.info("Input Param : soldto" + soldTo);
				if (soldTo != null) {
					paddingSoldToid = leftPad(soldTo, 10, '0');
				}

				// SubsetData
				LOG.info("Input Param : soldto" + soldTo);
				LOG.info("Input Param : paddingSoldToid" + paddingSoldToid);
				LOG.info("Input Param : paddingSalesorder" + paddingSalesorder);
				LOG.info("Input Param : poOrderNumberReplace" + poOrderNumberReplace);
				pageType = FAST_ORDER;
				searchPageData = bhgeB2BOrderFacade.newGetDefaultFastOrderWS(paddingSoldToid, paddingSalesorder,
						poOrderNumberReplace, pageableData, null, pageType);
			} else {
				if (RequestMethod.POST.name().equalsIgnoreCase(request.getMethod())) {
					LOG.info("Google Captcha Not validated");
					final String invalidCaptcha = "Google Captcha Not validated";
					finalResponseObject.put("OrderData", "");
					orderStatusWsDTO.setOrderData(Collections.emptyList());
					return orderStatusWsDTO;
				}
			}
		}

		if (searchPageData == null) {
			LOG.info("searchPageData == null");
		} else {
			LOG.info("searchPageData is not null");
			final List<BHGEOrderHistoryData> list = searchPageData.getResults();


			/*
			 * for (final BHGEOrderHistoryData geHistory : list) { /* final
			 * ArrayList<OrderHistoryViewData> listOrderView =
			 * bhgeB2BOrderFacade.getLineItemForFastOrder( geHistory.getCode(), pageType,
			 * paddingSoldToid, paddingSalesorder, poOrderNumberReplace);
			 *
			 *
			 * final List<String> lst = new ArrayList<String>(); lst.add(paddingSoldToid);
			 * final ArrayList<OrderHistoryViewData> listOrderView =
			 * bhgeB2BOrderFacade.getLineItem(geHistory.getCode(), pageType, lst);
			 *
			 * geHistory.setLineData(listOrderView); }
			 *
			 * //populateModel(model, searchPageData, showMode, getSortCode(sortCode,
			 * sortKey), sortKey);
			 */
			finalResponseObject.put("OrderData", list);
			List<BHGEOrderHistoryDataWsDTO> bhgeOrderHistoryDataList = getBHGEOrderHistoryDataList(list);
			orderStatusWsDTO.setOrderData(bhgeOrderHistoryDataList);
		}
		LOG.info("Order Status 1905 orderErrorData.... " + orderErrorData);
		if(null !=orderErrorData.getWrongCustomer()) {
			LOG.info("Order Status 1905 orderErrorData.... " + orderErrorData.getWrongCustomer());
		}
		if(null !=orderErrorData.getWrongStore())
		{
			LOG.info("Order Status 1905 orderErrorData.... " + orderErrorData.getWrongStore());
		}
		orderStatusWsDTO.setOrderError(dataMapper.map(orderErrorData, OrderErrorWsDTO.class));
		LOG.info("Exiting Order Status 1905 orderError.... " + orderStatusWsDTO.getOrderError());
		if(null !=(orderStatusWsDTO.getOrderError().getWrongCustomer()))
		{
			LOG.info("Exiting Order Status 1905 with response size .... " + orderStatusWsDTO.getOrderError().getWrongCustomer());
		}
		if((null !=(orderStatusWsDTO.getOrderError().getWrongStore())))
		{
			LOG.info("Exiting Order Status 1905 with response size .... " + orderStatusWsDTO.getOrderError().getWrongStore());
		}
		return orderStatusWsDTO;
	}

	@RequestMapping(value = "/customerOrderStatus", method = { RequestMethod.PUT, RequestMethod.POST }, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	@Operation(operationId = "Fetch Order Status")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(value = HttpStatus.OK)
	public OrderStatusWsDTO customerOrderStatus(
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			final OrderStatusRequestData orderStatusInput, final HttpServletRequest request)
			throws ParseException, CMSItemNotFoundException, InterruptedException, ExecutionException {

		LOG.info("Inside Order Status 1905 .... ");
		LOG.info("DSOrderHistoryPageController Clearing Cache......... ");
		//final String soldToid = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs().getUid();
		bhgeB2BOrderFacade.clearOrderHistoryCacheForCustomer(new LinkedList<>());
		bhgeB2BOrderFacade.removeOrderHistoryDataFromCache();
		LOG.info("DSOrderHistoryPageController Clearing Cache......... ");
		LOG.info("DSOrderHistoryPageController Cache Cleared......... ");

		OrderStatusWsDTO orderStatusWsDTO = new OrderStatusWsDTO();
		// sessionService.removeAttribute("successMessage");
		// sessionService.removeAttribute("errorMessage");

		validateOrderStatusInput(orderStatusInput);
		boolean excludeDefaultSoldTo= orderStatusInput.isExcludeDefaultSoldTo();
		final Map<String, Object> finalResponseObject = new HashMap<>();
		final List<OrderStatusSoldToNameWsDTO> finalSoldToIdWithName = new ArrayList<OrderStatusSoldToNameWsDTO>();
		List<String> multipleSoldToId = new LinkedList<>();
		final List<String> multipleSoldToIdSantized = new LinkedList<>();
		if (orderStatusInput != null && orderStatusInput.getCustomerNumber() != null) {
			LOG.info("Line 307 customer number from payload:"+ orderStatusInput.getCustomerNumber());
			orderStatusInput.getCustomerNumber().forEach(customerNumber -> {
				if (customerNumber != null) {
					final String escapedInput = StringEscapeUtils.escapeHtml4(customerNumber);
					multipleSoldToIdSantized.add(escapedInput);
				}
			});
		}
		if (multipleSoldToIdSantized!=null && multipleSoldToIdSantized.stream().anyMatch(Objects::nonNull)) {
			LOG.info("Inside multipleSoldToIdSantized: "+multipleSoldToIdSantized);
			multipleSoldToId = multipleSoldToIdSantized;
		}
		final String pageSize = StringEscapeUtils.escapeHtml4(orderStatusInput.getPageSize());
		final String pageNumber = StringEscapeUtils.escapeHtml4(orderStatusInput.getPageNumber());
		final String multipleCacheRefresh = StringEscapeUtils.escapeHtml4(orderStatusInput.getIsRefreshedFlag());
		String statusFilter = StringEscapeUtils.escapeHtml4(orderStatusInput.getOrderStatus());
		if (statusFilter != null) {
			if (statusFilter.contains("&")) {
				statusFilter = StringEscapeUtils.unescapeHtml4(statusFilter);
			}
		}
		final String sapOrderType = "product";
		final UserModel user = userService.getCurrentUser();
		String sortCode = StringEscapeUtils.escapeHtml4(orderStatusInput.getSortBy());
		LOG.info("DE177215 Value of sortcode of myorder page before if condition"+sortCode);
		if (null == user || !(user instanceof GEEdgeCustomerModel)) {
			return null;
		}

		final String orderNumber = null;

		/*if (sortCode == null || "".equals(sortCode)) {
			sortCode = "UpdateDsc";
		}*/
		LOG.info("DE177215 Value of sortcode of myorder page after if condition"+sortCode);
		final String sortKey = "";
		final String pageType = StringEscapeUtils.escapeHtml4(orderStatusInput.getOrderType());

		int page = 0;
		if (pageNumber != null && !"".equals(pageNumber)) {
			page = Integer.parseInt(pageNumber);
		}

		/*
		 * if (null != user && user instanceof GEEdgeCustomerModel) {
		 */
		try {
			LOG.info("Loaded Order Status 1905.A01 .... " + pageSize);

			if (StringUtils.isNotBlank(multipleCacheRefresh) && StringUtils.isNotEmpty(multipleCacheRefresh)
					&& multipleCacheRefresh.equalsIgnoreCase("true")) {
				LOG.info("Loaded Order Status 1905.A02 .... " + multipleCacheRefresh);

				if (CollectionUtils.isNotEmpty(multipleSoldToId)) {
					LOG.info("Clear cache for multipleSoldToId");
					bhgeB2BOrderFacade.clearOrderHistoryCacheForCustomer(multipleSoldToId);
				}
				bhgeB2BOrderFacade.removeOrderHistoryDataFromCache();
			}
			LOG.info("Loaded Order Status 1905.A0X .... " + pageSize);
		} catch (final Exception e) {
			LOG.error("Error occured while refreshing Order history data in the Cache " + e);
		}

		LOG.info("Loaded Order Status 1905.D01 .... " + pageSize);
		final PageableData pageableData = createPageableData(Integer.parseInt(pageNumber), getPageSize(pageSize),
				sortCode, null);
		final Map<String, Object> responseObject = bhgeB2BOrderFacade.getBhgeOrderStatusForWS(
				loadOrderStatusFilters(orderStatusInput), pageableData, multipleSoldToId, statusFilter, sapOrderType,
				orderNumber,excludeDefaultSoldTo);

		final SearchPageData<BHGEOrderHistoryData> searchPageData = (SearchPageData<BHGEOrderHistoryData>) responseObject
				.get("orderHistoryData");
		PaginationData paginationData = searchPageData.getPagination();
		orderStatusWsDTO.setDashboardData((OrderStatusCountWsDTO) responseObject.get("DashboardData"));
		// finalResponseObject.put("DashboardData",
		// responseObject.get("DashboardData"));
		final List<BHGEOrderHistoryData> orderDataList = searchPageData.getResults();

		if (orderDataList != null && orderDataList.size() > 0
				&& !orderDataList.get(0).getCode().equals(BhgeCoreConstants.ORDER_HISTORY_JCO_NO_RECORDFOUND_ERROR)) {
			LOG.info("Loaded Order Status 1905.D02 .... " + orderDataList.size());
			orderStatusWsDTO.setOrderData(getBHGEOrderHistoryDataList(orderDataList));
			orderStatusWsDTO.setProductLines((List<String>) responseObject.get("productLines"));
			orderStatusWsDTO.setPagination(getDataMapper().map(paginationData, PaginationWsDTO.class, "FULL"));
			// finalResponseObject.put("OrderData", orderDataList);
			// finalResponseObject.put("productLines", responseObject.get("productLines"));
		} else {
			orderStatusWsDTO.setOrderData(Collections.EMPTY_LIST);
			// finalResponseObject.put("OrderData", Collections.EMPTY_LIST);
			LOG.info("Loaded Order Status 1905.D03 .... NO RECORDS FOUND ");
		}

		if (StringUtils.isNotEmpty((String) responseObject.get("SAPError"))) {
			LOG.info("Invalidating Cache........");
			orderStatusWsDTO.setSapError(StringUtils.EMPTY);
			// finalResponseObject.put("SAPError", Collections.EMPTY_LIST);
			if (multipleSoldToId != null && multipleSoldToId.size() > 0) {
				bhgeB2BOrderFacade.clearOrderHistoryCacheForCustomer(multipleSoldToId);
			}
			bhgeB2BOrderFacade.removeOrderHistoryDataFromCache();
		}

		final Set<B2BUnitModel> soldToList = bhgeUserProfileFacade.getSoldToListForUser();
		LOG.info("Loaded Order Status 1905.H01 .... " + soldToList.size());
		final List<OrderStatusSoldToNameWsDTO> customerAccounts = new ArrayList<OrderStatusSoldToNameWsDTO>();
		final List<B2BUnitData> geEdgeSoldToList = getFavoriteSoldTo();

		for (final B2BUnitModel parentSoldTo : soldToList) {
			/*
			 * if (parentSoldTo.getUid() != null && (multipleSoldToId != null &&
			 * multipleSoldToId.size() > 0 &&
			 * !multipleSoldToId.contains(parentSoldTo.getUid())) &&
			 * !parentSoldTo.getUid().equalsIgnoreCase(getSoldTo())) {
			 */
			final OrderStatusSoldToNameWsDTO sold = new OrderStatusSoldToNameWsDTO();
			sold.setName(parentSoldTo.getName());
			sold.setUid(parentSoldTo.getUid());
			sold.setNumber(parentSoldTo.getUid());
			sold.setFavouritesFlag(false);
			for (final B2BUnitData favValue : geEdgeSoldToList) {
				// LOG.info("----------- Id: " + sold.getUid());
				// LOG.info("-----------FAV Id: " + favValue.getUid());
				if (favValue.getUid().contains(parentSoldTo.getUid())) {
					// LOG.info(" IM THERE " + sold.getUid());
					sold.setFavouritesFlag(true);
				}
			}
			customerAccounts.add(sold);
			// }
		}
		LOG.info("Loaded Order Status 1905.H02 .... " + customerAccounts.size());
		// orderStatusWsDTO.set
		orderStatusWsDTO.setBaseCustomerAccount(getSoldToName());
		orderStatusWsDTO.setCustomerAccounts(customerAccounts);
		// finalResponseObject.put("customerAccounts", customerAccounts);
		// finalResponseObject.put("baseCustomerAccount", getSoldToName());
		// }

		return orderStatusWsDTO;
	}

	public String getSoldToName() {
		final BHGESoldToData soldto = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
		if (null != soldto) {
			final String Uid = soldto.getUid();
			final String LocName = soldto.getLocName();
			final String soldTo = Uid + "-" + LocName;
			return soldTo;
		}
		return null;
	}

	private List<B2BUnitData> getFavoriteSoldTo() {
		final List<B2BUnitData> FavouriteDataList = new ArrayList<B2BUnitData>();

		GEEdgeCustomerModel currentUser = null;
		if (StringUtils.equals(Config.getParameter("current.env"), "local")) {
			currentUser = (GEEdgeCustomerModel) userService.getUserForUID("localtest");
		} else {
			if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
				currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			}
		}
		if (null != currentUser) {
			final List<B2BUnitModel> favourites = new ArrayList<>(currentUser.getFavoriteSoldTos());

			for (final B2BUnitModel favModel : favourites) {
				final B2BUnitData favData = new B2BUnitData();
				favData.setUid(favModel.getUid());
				favData.setName(favModel.getName());
				FavouriteDataList.add(favData);
			}
		}

		return FavouriteDataList;
	}

	protected OrderHistoryFormSearchData loadOrderStatusFilters(final OrderStatusRequestData requestData) {
		if (null != requestData) {
			final OrderHistoryFormSearchData data = new OrderHistoryFormSearchData();
			data.setPageFlag(org.apache.commons.text.StringEscapeUtils.escapeHtml4(requestData.getOrderType()));

			String fromDateFilter = org.apache.commons.text.StringEscapeUtils.escapeHtml4(requestData.getFromDate());
			if (fromDateFilter == null || fromDateFilter.equals("null")) {
				fromDateFilter = null;
			}
			data.setFromDate(fromDateFilter);

			String toDateFilter = org.apache.commons.text.StringEscapeUtils.escapeHtml4(requestData.getToDate());
			if (toDateFilter == null || toDateFilter.equals("null")) {
				toDateFilter = null;
			}
			data.setToDate(toDateFilter);

			String searchByValue = StringEscapeUtils.escapeHtml4(requestData.getSearchByValue());
			if (searchByValue == null || searchByValue.equals("null")) {
				searchByValue = null;
			}
			data.setPoOrderNum(searchByValue);

			data.setOrderType(null);
			data.setSortByDateType(null);
			data.setProductLinesFilter(requestData.getProductLinesList());
			// If the from date is selected, then today date will be the default to date
			if (StringUtils.isNotBlank(requestData.getFromDate()) && StringUtils.isBlank(requestData.getToDate())) {
				final SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
				data.setToDate(formatter.format(new Date()));
			}
			return data;
		}
		return null;
	}

	private void validateOrderStatusInput(final OrderStatusRequestData orderStatusInput) {
		if (StringUtils.isNotBlank(orderStatusInput.getFromDate())) {
			Validate.matchesPattern(orderStatusInput.getFromDate(), "[a-zA-Z0-9_.-]+", "Invalid Input");
		}
		if (StringUtils.isNotBlank(orderStatusInput.getIsRefreshedFlag())) {
			Validate.matchesPattern(orderStatusInput.getIsRefreshedFlag(), "[a-zA-Z0-9_.-]+", "Invalid Input");
		}
		/*
		 * if (StringUtils.isNotBlank(orderStatusInput.getOrderStatus())) {
		 * Validate.matchesPattern(orderStatusInput.getOrderStatus(),
		 * "[a-zA-Z0-9&;_.-]+", "Invalid Input"); }
		 */
		if (StringUtils.isNotBlank(orderStatusInput.getOrderType())) {
			Validate.matchesPattern(orderStatusInput.getOrderType(), "[a-zA-Z0-9_.-]+", "Invalid Input");
		}
		if (StringUtils.isNotBlank(orderStatusInput.getPageNumber())) {
			Validate.matchesPattern(orderStatusInput.getPageNumber(), "[a-zA-Z0-9_.-]+", "Invalid Input");
		}
		if (StringUtils.isNotBlank(orderStatusInput.getQueryEmail())) {
			Validate.matchesPattern(orderStatusInput.getQueryEmail(), "[a-zA-Z0-9_.-@]+", "Invalid Input");
		}
		if (StringUtils.isNotBlank(orderStatusInput.getQueryOrderNo())) {
			Validate.matchesPattern(orderStatusInput.getQueryOrderNo(), "[a-zA-Z0-9_.-]+", "Invalid Input");
		}
		if (StringUtils.isNotBlank(orderStatusInput.getQueryStatus())) {
			Validate.matchesPattern(orderStatusInput.getQueryStatus(), "[a-zA-Z0-9_.-]+", "Invalid Input");
		}
		if (StringUtils.isNotBlank(orderStatusInput.getQueryText())) {
			Validate.matchesPattern(orderStatusInput.getQueryText(), "[a-zA-Z0-9_.-]+", "Invalid Input");
		}
		if (StringUtils.isNotBlank(orderStatusInput.getQueryType())) {
			Validate.matchesPattern(orderStatusInput.getQueryType(), "[a-zA-Z0-9_.-]+", "Invalid Input");
		}
		if (StringUtils.isNotBlank(orderStatusInput.getSearchByValue())) {
			StringEscapeUtils.escapeHtml4(orderStatusInput.getSearchByValue());
		}
		if (StringUtils.isNotBlank(orderStatusInput.getSortBy())) {
			Validate.matchesPattern(orderStatusInput.getSortBy(), "[a-zA-Z0-9_.-]+", "Invalid Input");
		}
		if (StringUtils.isNotBlank(orderStatusInput.getToDate())) {
			Validate.matchesPattern(orderStatusInput.getToDate(), "[a-zA-Z0-9_.-]+", "Invalid Input");
		}
		if (orderStatusInput.getCustomerNumber() != null && orderStatusInput.getCustomerNumber().size() > 0) {
			LOG.info("customer is not null:"+orderStatusInput.getCustomerNumber()+" "+orderStatusInput.getCustomerNumber().size());
			for (final String listEntryVal : orderStatusInput.getCustomerNumber()) {
				if (StringUtils.isNotBlank(listEntryVal)) {
					Validate.matchesPattern(listEntryVal, "[a-zA-Z0-9_.-]+", "Invalid Input");
				}
			}
		}
		/*
		 * if (orderStatusInput.getProductLinesList() != null &&
		 * orderStatusInput.getProductLinesList().size() > 0) { for (final String
		 * listEntryVal : orderStatusInput.getProductLinesList()) { if
		 * (StringUtils.isNotBlank(listEntryVal)) {
		 * Validate.matchesPattern(listEntryVal, "[a-zA-Z0-9_.-]+", "Invalid Input"); }
		 * } }
		 */

	}

	private List<BHGEOrderHistoryDataWsDTO> getBHGEOrderHistoryDataList(List<BHGEOrderHistoryData> list) {

		List<BHGEOrderHistoryDataWsDTO> bhgeOrderHistoryDataWsDTOList = new ArrayList<BHGEOrderHistoryDataWsDTO>();

		list.forEach(bhgeOrderHistoryData -> {
			bhgeOrderHistoryDataWsDTOList
					.add(getDataMapper().map(bhgeOrderHistoryData, BHGEOrderHistoryDataWsDTO.class, "FULL"));
		});

		return bhgeOrderHistoryDataWsDTOList;
	}

	protected PageableData createPageableData(final int pageNumber, final int pageSize, final String sortCode,
			final ShowMode showMode) {
		final PageableData pageableData = new PageableData();
		pageableData.setCurrentPage(pageNumber);
		pageableData.setSort(sortCode);

		if (ShowMode.All == showMode) {
			pageableData.setPageSize(MAX_PAGE_LIMIT);
		} else {
			pageableData.setPageSize(pageSize);
		}
		LOG.info("DE177215 - Sortcode in pagebledata" +pageableData.getSort());
		return pageableData;
	}

	private int getPageSize(final String pageSize) {
		if (StringUtils.isBlank(pageSize)) {
			return Integer.parseInt(PAGE_SIZE);
		} else {
			return Integer.parseInt(pageSize);
		}
	}

	public static String leftPad(final String originalString, final int length, final char padCharacter) {
		String paddedString = originalString;
		while (paddedString.length() < length) {
			paddedString = padCharacter + paddedString;
		}
		return paddedString;
	}

	@RequestMapping(value = "/orderDetails/{orderCode}", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "getUserOrders", summary = "Get a order.", description = "Returns specific order details based on a specific order code. The response contains detailed order information.")
	@ApiBaseSiteIdAndUserIdParam
	@RequestMappingOverride
	public BHGEOrderHistoryDataWsDTO getUserOrders(
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "Order GUID (Globally Unique Identifier) or order CODE", required = true) @PathVariable final String orderCode,
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {

		List<OrderHistoryViewDataWsDTO> listHistoryViewWsDTOs = new ArrayList<>();
		List<OrderHistoryViewData> orderHistoryViewDatas = bhgeB2BOrderFacade
				.getOrderDetailsForCodeWs(YSanitizer.sanitize(orderCode));
		for (OrderHistoryViewData orderHistoryViewData : orderHistoryViewDatas) {
			//US-465623 ADDING NEW ATTRIBUTES
			LOG.info("Order Headers getUserOrders controller:- AuthAmt- " + orderHistoryViewData.getAuthAmt() + " ,AuthDate- " + orderHistoryViewData.getAuthDate()
					+ " ,SettlAmt- " + orderHistoryViewData.getSettlAmt() + " ,SettlDate- " + orderHistoryViewData.getSettlDate()
					+ " ,SettlStat- " + orderHistoryViewData.getSettlStat() + " ,IncoTerm- " + orderHistoryViewData.getIncoTerm());

			OrderHistoryViewDataWsDTO orderHistoryViewWsDTO = getDataMapper().map(orderHistoryViewData,
					OrderHistoryViewDataWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
			listHistoryViewWsDTOs.add(orderHistoryViewWsDTO);
		}
		BHGEOrderHistoryDataWsDTO orderHistoryDataWsDTO = new BHGEOrderHistoryDataWsDTO();
		orderHistoryDataWsDTO.setLineData(listHistoryViewWsDTOs);
		return getDataMapper().map(orderHistoryDataWsDTO, BHGEOrderHistoryDataWsDTO.class, "FULL");
	}

	@RequestMapping(value = "/{orderCode}/fetchAttachmentList", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "Fetch Order Status Attachments")
	@ResponseStatus(value = HttpStatus.OK)
	public BHGESalesOrderAttachmentsWsDTO fetchAttachmentList(
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user", required = true) @PathVariable final String userId,
			@Parameter(description = "Order GUID (Globally Unique Identifier) or order CODE", required = true) @RequestParam("orderCode") final String orderCode,
			@Parameter(description = "Customer Number", required = true) @RequestParam("customerNumber") String customerNumber)
			throws CMSItemNotFoundException {
		BHGESalesOrderAttachmentsData orderAttachments = null;
		customerNumber = StringEscapeUtils.escapeHtml4(null != customerNumber ? (("0000000000" + customerNumber).substring(customerNumber.length())) : null);
		LOG.info("Customer number is " + customerNumber);

		if (!userService.isAnonymousUser(userService.getCurrentUser()) && StringUtils.isNotBlank(customerNumber)
				&& BHGECustomerUtil.isUserAllowedToView(customerNumber, userService)) {
			final String orderNo = StringEscapeUtils.escapeHtml4(orderCode);
			if (StringUtils.isNotBlank(orderCode)) {
				Validate.matchesPattern(orderCode, "[a-zA-Z0-9_.-]+", "Invalid Input");
				orderAttachments = bhgeB2BOrderDataFetch.getAttachmentsListForOrder(orderNo.trim(),
						StringEscapeUtils.escapeHtml4(customerNumber));

				return getDataMapper().map(orderAttachments, BHGESalesOrderAttachmentsWsDTO.class, "FULL");
			}
		}
		return null;
	}

	
	// New Order documents RFC -start
	@RequestMapping(value = "/fetchOrderAttachments", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "Fetch Order Attachments")
	@ResponseStatus(value = HttpStatus.OK)
	public List<SalesOrderAttachedWsDTO> fetchOrderAttachmentListNew(
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user", required = true) @PathVariable final String userId,
			@Parameter(description = "Order GUID (Globally Unique Identifier) or order CODE", required = true) @RequestParam("orderCode") final String orderCode,
			@Parameter(description = "Customer Number", required = true) @RequestParam("customerNumber") String customerNumber)
			throws CMSItemNotFoundException, UnsupportedEncodingException {
		BHGESalesOrderAttachmentData orderAttachments = null;
		customerNumber = StringEscapeUtils.escapeHtml4(null != customerNumber ? (("0000000000" + customerNumber).substring(customerNumber.length())) : null);
		LOG.info("Customer number is " + customerNumber);
		final String flag = null;
		final String fileName = null;
		final String fileType = null;
		if (!userService.isAnonymousUser(userService.getCurrentUser()) && StringUtils.isNotBlank(customerNumber)
				&& BHGECustomerUtil.isUserAllowedToView(customerNumber, userService)) {
			final String orderNo = StringEscapeUtils.escapeHtml4(orderCode);
			if (StringUtils.isNotBlank(orderCode)) {
				Validate.matchesPattern(orderCode, "[a-zA-Z0-9_.-]+", "Invalid Input");
				orderAttachments = bhgeB2BOrderDataFetch.getAttachmentsListForOrderNew(orderNo.trim(),
						StringEscapeUtils.escapeHtml4(customerNumber), flag, fileName, fileType);

				if (null != orderAttachments && CollectionUtils.isNotEmpty(orderAttachments.getFileData()))
				{
					final List<SalesOrderAttachedWsDTO> finalDataDTO = new ArrayList<>();
					final List<SalesOrderAttachedData> data = orderAttachments.getFileData();
					final SalesOrderErrorMessageData errorData = orderAttachments.getErrorMessage();
					for (final SalesOrderAttachedData d : data)
					{
						final SalesOrderAttachedWsDTO salesOrderAttachedwsdto = new SalesOrderAttachedWsDTO();
						String fileNameResponse = d.getFileName();
						LOG.info("Original fineNameResponse: " + fileNameResponse);
						String escapedFileName = URLDecoder.decode(fileNameResponse.replace("%", "%25").replace("\n","").replace("\r","").trim(), StandardCharsets.UTF_8);
						LOG.info("Escaped fileNameResponse: " + escapedFileName);
						salesOrderAttachedwsdto.setFileName(escapedFileName);
						salesOrderAttachedwsdto.setFileType(d.getFileType());
						salesOrderAttachedwsdto.setHexData(d.getHexData());
						finalDataDTO.add(salesOrderAttachedwsdto);
					}
					return finalDataDTO;
				}
			}
		}
		return null;
	}
	//New Order Attachment RFC -end
	
	
	/**
	 *
	 *
	 * @param page
	 * @param sortCode
	 * @param toDate
	 * @param orderType
	 * @param pageSize
	 * @return
	 * @throws CMSItemNotFoundException
	 */
	@RequestMapping(value = "/exportOrdersToExcel", method = RequestMethod.GET,produces = "application/vnd.ms-excel")
	@ResponseBody
	@Operation(operationId = "Export orders to excel", summary = "Export order history data to excel", description = "Export order listing page data to excel")
	public void getOrderPaginatedExcelData(HttpServletResponse response,
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user", required = true) @PathVariable final String userId,
			@RequestParam(value = "page", defaultValue = "0") final int page,
			@RequestParam(value = "sort", required = false) final String sortCode,
			@RequestParam(value = "poNumber", required = false) final String poNumber,
			@RequestParam(value = "fromDate", required = false) final String frmDate,
			@RequestParam(value = "toDate", required = false) final String toDate,
			@RequestParam(value = "orderType", required = false) final String orderType,
			@RequestParam(value = "multipleSoldToId", required = false) final List<String> multipleSoldToIdParam,
			@RequestParam(value = "pageSize", required = false) final String pageSize,
			@RequestParam(value = "statusFilter", required = false) String statusFilter,
			@RequestParam(value = "sapOrderType", required = false) String sapOrderType,
			@RequestParam(value = "searchByValue", required = false) final String searchByValue,
			@RequestParam(value = "productLine", required = false) final List<String> productLine,
			@RequestParam(value = "excludeDefaultSoldTo", required = false) final boolean excludeDefaultSoldTo)
			throws CMSItemNotFoundException {
		final String sanitizepageSize = pageSize;
		final String sanitizeSortCode = StringEscapeUtils.escapeHtml4(sortCode);
	//	final String sanitizepageFlag = StringEscapeUtils.escapeHtml4(pageFlag);

		final List<String> multipleSoldToId = new LinkedList<>();
		final List<String> multipleSoldToIdListSanitized = new LinkedList<>();

		if (multipleSoldToIdParam != null && multipleSoldToIdParam.size() > 0) {
			for (final String listEntryVal : multipleSoldToIdParam) {
				if (StringUtils.isNotBlank(listEntryVal)) {
					Validate.matchesPattern(listEntryVal, "[a-zA-Z0-9_.-]+", "Invalid Input");
					final String escapedInput = StringEscapeUtils.escapeHtml4(listEntryVal);
					multipleSoldToId.add(escapedInput);
				}
			}
		}

		OrderStatusWsDTO orderStatusWsDTO = new OrderStatusWsDTO();

		final PageableData pageableData = createPageableData(page, getPageSize(sanitizepageSize), sanitizeSortCode,
				ShowMode.All);
		pageableData.setPageSize(getSiteConfigService().getInt(EXCEL_PAGE_SIZE, 5000));
		SearchPageData<BHGEOrderHistoryData> searchPageData = null;

		final OrderStatusRequestData data = new OrderStatusRequestData();
		data.setFromDate(StringEscapeUtils.escapeHtml4(frmDate));
		if("ALL".equalsIgnoreCase(StringEscapeUtils.escapeHtml4(statusFilter)))
		{
			statusFilter=null;
		}
		else if (statusFilter != null) {
			if (statusFilter.contains("&")) {
				statusFilter = StringEscapeUtils.unescapeHtml4(statusFilter);
			}
			else {
				statusFilter=StringEscapeUtils.escapeHtml4(statusFilter);
			}
		}
		if(StringUtils.isEmpty(sapOrderType))
		{
			sapOrderType="product";
		}
		data.setOrderStatus(statusFilter);
		data.setToDate(StringEscapeUtils.escapeHtml4(toDate));
		data.setSortBy(sanitizeSortCode);
		data.setSearchByValue(StringEscapeUtils.escapeHtml4(searchByValue));
		data.setProductLinesList(productLine);
		/*
		 * if (statusFilter.equals("Shipped ")) { statusFilter = "Shipped & Invoiced"; }
		 */
		final Map<String, Object> responseObject = bhgeB2BOrderFacade.getBhgeOrderStatusForWS(loadOrderStatusFilters(data),
				pageableData, multipleSoldToId, statusFilter, StringEscapeUtils.escapeHtml4(sapOrderType), null,excludeDefaultSoldTo );

		searchPageData = (SearchPageData<BHGEOrderHistoryData>) responseObject.get("orderHistoryData");
		List<BHGEOrderHistoryData> orderDataListDTO = new ArrayList<BHGEOrderHistoryData>();
		orderStatusWsDTO.setDashboardData((OrderStatusCountWsDTO) responseObject.get("DashboardData"));
		PaginationData paginationData = null;
		if (null != searchPageData && CollectionUtils.isNotEmpty(searchPageData.getResults())) {
			// orderDataListDTO =
			// bhgeB2BOrderDataFetch.getOrderDataDTOWS(searchPageData.getResults(),
			// sanitizepageFlag,multipleSoldToId);
			orderDataListDTO = searchPageData.getResults();
			paginationData = searchPageData.getPagination();
			orderStatusWsDTO.setOrderData(getBHGEOrderHistoryDataList(orderDataListDTO));
			orderStatusWsDTO.setProductLines((List<String>) responseObject.get("productLines"));
			orderStatusWsDTO.setPagination(getDataMapper().map(paginationData, PaginationWsDTO.class, "FULL"));

		}
		//final BHGEOrderExcelView viewExcel = new BHGEOrderExcelView();
		// return new ModelAndView(viewExcel, "orderDataListDTO", orderDataListDTO);
		generateExcelForOrderListing(orderStatusWsDTO.getOrderData(), response);

	}

	private void generateExcelForOrderListing(List<BHGEOrderHistoryDataWsDTO> orderHistoryData, HttpServletResponse response) 
	{
		try
		{
			final Workbook workbook = new XSSFWorkbook();
			final Sheet sheet = workbook.createSheet("OrderDataList");
			sheet.setDefaultColumnWidth(16);
			
			final CellStyle style = workbook.createCellStyle();
			final Font font = workbook.createFont();
			font.setFontName("Calibri");
			font.setBold(true);
			style.setFont(font);
	
			final Row header = sheet.createRow(0);
			
			header.createCell(0).setCellValue("BH Sales Order #");
			header.getCell(0).setCellStyle(style);
			header.createCell(1).setCellValue("Customer PO #");
			header.getCell(1).setCellStyle(style);
			header.createCell(2).setCellValue("Date Order Placed");
			header.getCell(2).setCellStyle(style);
			header.createCell(3).setCellValue("Sold To");
			header.getCell(3).setCellStyle(style);
			header.createCell(4).setCellValue("Line Number");
			header.getCell(4).setCellStyle(style);
			header.createCell(5).setCellValue("Part #");
			header.getCell(5).setCellStyle(style);
			header.createCell(6).setCellValue("Description");
			header.getCell(6).setCellStyle(style);
			header.createCell(7).setCellValue("Qty");
			header.getCell(7).setCellStyle(style);
			header.createCell(8).setCellValue("Currency");
			header.getCell(8).setCellStyle(style);
			header.createCell(9).setCellValue("NetPrice");
			header.getCell(9).setCellStyle(style);
			header.createCell(10).setCellValue("Status");
			header.getCell(10).setCellStyle(style);
			header.createCell(11).setCellValue("Courier");
			header.getCell(11).setCellStyle(style);
			header.createCell(12).setCellValue("Promised Ship Date");
			header.getCell(12).setCellStyle(style);
			header.createCell(13).setCellValue("Ship To");
			header.getCell(13).setCellStyle(style);
			header.createCell(14).setCellValue("Tracking Number");
			header.getCell(14).setCellStyle(style);
			
			int rowCount = 1;
			
			for(BHGEOrderHistoryDataWsDTO order : orderHistoryData)
			{
				
				for(OrderHistoryViewDataWsDTO lineItem : order.getLineData())
				{
					final Row row = sheet.createRow(rowCount++);
					row.createCell(0).setCellValue(order.getCode());
					row.createCell(1).setCellValue(order.getPurchaseOrderNumber());
					row.createCell(2).setCellValue(order.getOrderDate());
					row.createCell(3).setCellValue(order.getSoldTo());
					row.createCell(4).setCellValue(lineItem.getLineNumber());
					row.createCell(5).setCellValue(lineItem.getPartNumber());
					row.createCell(6).setCellValue(lineItem.getDescription());
					row.createCell(7).setCellValue(lineItem.getQty());
					row.createCell(8).setCellValue(lineItem.getCurrency());
					row.createCell(9).setCellValue(lineItem.getNetPrice());
					row.createCell(10).setCellValue(lineItem.getStatus());
					row.createCell(11).setCellValue(lineItem.getCourier());
					if (lineItem.getGeFromDate().contains("00")) {
					   row.createCell(12).setCellValue("");
					}
					else {
					   row.createCell(12).setCellValue(lineItem.getGeFromDate());
					}
					row.createCell(13).setCellValue(lineItem.getShipTo());
					row.createCell(14).setCellValue(lineItem.getTrackingNumber());
				}
			}
			
			final Date date = new Date();
			final SimpleDateFormat format1 = new SimpleDateFormat("dd-MM-yyyy");
			final String date1 = format1.format(date);
	
			response.setContentType("application/vnd.ms-excel");
			response.setHeader("Content-disposition", "attachment;filename=" + "SalesOrder_" + date1 + ".xlsx");
			final OutputStream ouputStream = response.getOutputStream();
			workbook.write(ouputStream);
			ouputStream.flush();
			ouputStream.close();
		}
		catch (final Exception e)
		{
			LOG.error("Error creating excel template for orderlisting export :" + e);
		}
	}
	
	
	/**
	 *
	 *
	 * @param orderNo
	 * @return
	 * @throws CMSItemNotFoundException
	 */
	@RequestMapping(value = "/getAttachmentsListForOrder", method = RequestMethod.GET)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	@Operation(operationId = "List of order attachments", summary = "List of order attachments", description = "List of order attachments")
	public BHGESalesOrderAttachmentsWsDTO getAttachmentsListForOrder(@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user", required = true) @PathVariable final String userId,
			@RequestParam("orderNo") final String orderNo,
			@RequestParam("customerNumber") String customerNumber) throws CMSItemNotFoundException
	{
		customerNumber = (null != customerNumber ? (("0000000000" + customerNumber).substring(customerNumber.length())) : null);
		LOG.info("Customer number is " + customerNumber);
		final String sanitizeorderNo = StringEscapeUtils.escapeHtml4(orderNo);
		BHGESalesOrderAttachmentsWsDTO salesOrderAttachmentsDto = new BHGESalesOrderAttachmentsWsDTO();
		if (StringUtils.isNotBlank(sanitizeorderNo))
		{
			final BHGESalesOrderAttachmentsData orderAttachments = bhgeB2BOrderDataFetch
					.getAttachmentsListForOrder(sanitizeorderNo.trim(), StringEscapeUtils.escapeHtml4(customerNumber));
			
			salesOrderAttachmentsDto = getDataMapper().map(orderAttachments, BHGESalesOrderAttachmentsWsDTO.class, "FULL");
                   			return salesOrderAttachmentsDto;
		//	model.addAttribute("orderAttachments", orderAttachments);
		//	model.addAttribute("orderNo", sanitizeorderNo);

		}
		else
		{
			//model.addAttribute("error", "Sales Order Number is Empty");
			return salesOrderAttachmentsDto;
		}

	}
	
	
	/**
	 *
	 *
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/downloadpdf", method = RequestMethod.GET)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	@Operation(operationId = "Download SOA attachment", summary = "Download SOA attachment", description = "Download SOA attachment")
	public void downloadPoDocument(@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user", required = true) @PathVariable final String userId, 
			@Parameter(description = "Order Number.", required = true) @RequestParam("orderNumber") final String orderNumber,
			@RequestParam("customerNumber") final String customerNumber,
			final HttpServletRequest request, final HttpServletResponse response) throws IOException
	{
		LOG.info("Customer number is " + customerNumber);
		final String escapeorderNumber = orderNumber.replace("\n","").replace("\r","").replaceAll("\\s","").trim();
		final String sanitizedOrderNumber = StringEscapeUtils.escapeHtml4(escapeorderNumber);

		final String pdfdata = bhgeB2BOrderDataFetch.getSOAPDF(sanitizedOrderNumber, StringEscapeUtils.escapeHtml4(customerNumber));
		//if failed to get SOA
		if (pdfdata == null)
		{
			//request.getSession().setAttribute(BhgeCoreConstants.DOCUMENT_RFC_ERROR_STATUS, Boolean.TRUE);
			final HttpHeaders headers = new HttpHeaders();
			headers.add("Location", request.getHeader("Referer"));
			//return new ResponseEntity<byte[]>(null, headers, HttpStatus.FOUND);
		}
		final byte[] contents = Base64.getDecoder().decode(pdfdata);
		//final HttpHeaders headers = new HttpHeaders();
		//headers.setContentType(MediaType.parseMediaType("application/pdf"));
		//final String filename = "SalesOrderAcknowledgement_" + ordersString + ".pdf";
		//headers.setContentDispositionFormData(filename, filename);
		//headers.setCacheControl("no-cache, no-store, must-revalidate, post-check=0, pre-check=0");
		//final ResponseEntity<byte[]> response1 = new ResponseEntity<byte[]>(contents, headers, HttpStatus.OK);
		//return response1;
		final String contentType = "application/pdf";
		final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();
		response.setContentType(escapeContentType);
		response.setHeader("Content-disposition", "attachment; filename=" + sanitizedOrderNumber + ".PDF");
		response.setContentLengthLong(contents.length);
		response.getOutputStream().write(contents);
		response.getOutputStream().flush();
	}

	/**
	 *
	 *
	 * @param docNumber
	 * @param docType
	 * @param fileName
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/downloadAttachment", method = RequestMethod.GET,produces = MediaType.APPLICATION_PDF_VALUE)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	@Operation(operationId = "Download order attachment", summary = "Download order attachment", description = "Download order attachment")
	public void downloadAttachmentPDF(@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user", required = true) @PathVariable final String userId,
			@RequestParam("customerNumber") String customerNumber,
			@RequestParam("docNumber") final String docNumber, 
			@RequestParam("docType") final String docType,
			@RequestParam("fileName") final String fileName, final HttpServletRequest request,
			final HttpServletResponse response) throws IOException
	{
		 final String escapefilename = fileName.replace("\n","").replace("\r","").replaceAll("\\s","").trim();
		 final String sanatizedfilename = StringEscapeUtils.escapeHtml4(escapefilename);
		customerNumber = StringEscapeUtils.escapeHtml4(customerNumber);
		LOG.info("Customer number is " + customerNumber);
		String pdfdata = null;
	//	ResponseEntity<byte[]> pdfFile = null;
		if (!userService.isAnonymousUser(userService.getCurrentUser()) && StringUtils.isNotBlank(customerNumber)
				&& BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
		{
			if (StringEscapeUtils.escapeHtml4(docNumber) != null && StringEscapeUtils.escapeHtml4(docType) != null)
			{
				pdfdata = bhgeB2BOrderDataFetch.getAttachmentPDF(StringEscapeUtils.escapeHtml4(docNumber),
						StringEscapeUtils.escapeHtml4(docType), customerNumber);
			}
			if (pdfdata == null)
			{
				//request.getSession().setAttribute(BhgeCoreConstants.DOCUMENT_RFC_ERROR_STATUS, Boolean.TRUE);
				final HttpHeaders headers = new HttpHeaders();
				headers.add("Location", request.getHeader("Referer"));
				
			}
			final byte[] contents = Base64.getDecoder().decode(pdfdata);

			//final HttpHeaders headers = new HttpHeaders();
			//headers.setContentType(MediaType.parseMediaType("application/pdf"));
			//final String filename = StringEscapeUtils.escapeHtml4(fileName) + "_" + StringEscapeUtils.escapeHtml4(docNumber) + ".pdf";
			//headers.setContentDispositionFormData(filename, filename);
			//headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
			//pdfFile = new ResponseEntity<byte[]>(contents, headers, HttpStatus.OK);
			final String contentType = "application/pdf";
			final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();
			response.setContentType(escapeContentType);
			response.setHeader("Content-disposition", "attachment; filename=" + sanatizedfilename + ".PDF");
			response.setContentLengthLong(contents.length);
			response.getOutputStream().write(contents);
			response.getOutputStream().flush();
		}
		
	}
	
	// Added for changes to order attachments RFC for attachment download - start
	/**
	 *
	 * @param fileName
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/downloadOrderDocAttachment", method = RequestMethod.GET)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	@Operation(operationId = "Download order attachment Files", summary = "Download order attachment Files", description = "Download order attachment Files")
	public void downloadOrderAttachmentPDF(@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user", required = true) @PathVariable final String userId,
			@RequestParam("customerNumber") String customerNumber,
			@RequestParam("orderNumber") final String orderNumber, 
			@RequestParam("fileName") final String fileName,
			@RequestParam("fileType") final String fileType,
			final HttpServletRequest request, final HttpServletResponse response) throws IOException
	{
		LOG.info("Original fileName: " + fileName);
		final String escapedFileName = URLEncoder.encode(fileName.replace("\n","").replace("\r","").trim(), StandardCharsets.UTF_8.name()).replace("+", "%20");
		//final String escapedFileName = URLEncoder.encode(fileName.replace("\n","").replace("\r","").trim(), StandardCharsets.UTF_8.name()).replace("+", "%20");
		LOG.info("Escaped fileName: " + escapedFileName);
		final String sanitizedFileName = StringEscapeUtils.unescapeHtml4(escapedFileName);
		final String sanitizedFileType = StringEscapeUtils.escapeHtml4(fileType);
		customerNumber = StringEscapeUtils.escapeHtml4(customerNumber);
		BHGESalesOrderAttachmentData orderAttachmentData = null;
		//final String sanitizedFileName = StringEscapeUtils.escapeHtml4(escapedFileName);
		customerNumber = StringEscapeUtils.escapeHtml4(customerNumber);
		BHGESalesOrderAttachmentData pdfdata = null;
		String fileData = null;
		if (!userService.isAnonymousUser(userService.getCurrentUser()) && StringUtils.isNotBlank(customerNumber)
				&& BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
		{
			if (StringEscapeUtils.escapeHtml4(orderNumber) != null && StringEscapeUtils.escapeHtml4(fileType) != null && StringUtils.isNotBlank(sanitizedFileName))
			{
				final String flag = ATTACHMENTFLAG;
				LOG.info("sanitizedFileName " + sanitizedFileName);
				orderAttachmentData = bhgeB2BOrderDataFetch.getNewAttachmentPDF(StringEscapeUtils.escapeHtml4(orderNumber), flag,
						sanitizedFileName, StringEscapeUtils.escapeHtml4(fileType), customerNumber);
			}
			if(orderAttachmentData != null) {
				List<SalesOrderAttachedData> fileList = orderAttachmentData.getFileData();
				if(fileList!=null && CollectionUtils.isNotEmpty(fileList)) {
					for(SalesOrderAttachedData data : fileList) {
						LOG.info("File name after decoding "+URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8.name()));
						LOG.info("data.File name after decoding "+URLDecoder.decode(data.getFileName(), StandardCharsets.UTF_8.name()));
						if(URLDecoder.decode(data.getFileName(), StandardCharsets.UTF_8.name()).equalsIgnoreCase(URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8.name())) && sanitizedFileType.equalsIgnoreCase("PDF")
								&& data.getFileType().equalsIgnoreCase("PDF")) {							
							final String pdfData = data.getHexData();
							final byte[] contents = Base64.getDecoder().decode(pdfData);

							final String contentType = "application/pdf";
							final String escapedContentType = contentType.replace("\n","").replace("\r","").trim();
							response.setContentType(escapedContentType);
							final String fileNameWithoutComma=URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8.name()).replaceAll("%20", " ").replaceAll(",", "") + ".PDF";
							LOG.info("fileNameWithoutComma ** "+fileNameWithoutComma);
							response.setHeader("Content-disposition", "attachment; filename=" + fileNameWithoutComma);
							response.setContentLengthLong(contents.length);
							response.getOutputStream().write(contents);
							response.getOutputStream().flush();
						}

						if(data.getFileName().equalsIgnoreCase(sanitizedFileName) && sanitizedFileType.equalsIgnoreCase("DOC")
								&& data.getFileType().equalsIgnoreCase("DOC")) {
							final String docData = data.getHexData();
							final byte[] contents = Base64.getDecoder().decode(docData);
							final String contentType = "application/doc";
							final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

							response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
							response.setHeader("Content-disposition", "attachment; filename=" + URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8) + ".DOC");
							response.setContentLengthLong(contents.length);
							response.getOutputStream().write(contents);
							response.getOutputStream().flush();
						}

						if(data.getFileName().equalsIgnoreCase(sanitizedFileName) && sanitizedFileType.equalsIgnoreCase("XLS")) {
							final String xlsData = data.getHexData();
							final byte[] contents = Base64.getDecoder().decode(xlsData);
							final String contentType = "application/vnd.ms-excel";
							final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

							response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
							response.setHeader("Content-disposition", "attachment; filename=" + URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8) + ".XLS");
							response.setContentLengthLong(contents.length);
							response.getOutputStream().write(contents);
							response.getOutputStream().flush();
						}

						if(data.getFileName().equalsIgnoreCase(sanitizedFileName) && sanitizedFileType.equalsIgnoreCase("XLSX")) {
							final String xlsData = data.getHexData();
							final byte[] contents = Base64.getDecoder().decode(xlsData);
							final String contentType = "vnd.openxmlformats-officedocument.spreadsheetml.sheet";
							final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

							response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
							response.setHeader("Content-disposition", "attachment; filename=" + URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8) + ".XLSX");
							response.setContentLengthLong(contents.length);
							response.getOutputStream().write(contents);
							response.getOutputStream().flush();
						}

						if (data.getFileName().equalsIgnoreCase(sanitizedFileName) && sanitizedFileType.equalsIgnoreCase("JPG")
								&& data.getFileType().equalsIgnoreCase("JPG"))
						{
							LOG.info("********************* FILE NAME JPG****************************" + sanitizedFileName);

							final String jpgData = data.getHexData();
							final byte[] contents = Base64.getDecoder().decode(jpgData);

							final String contentType = "application/jpg";
							final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

							response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
							response.setHeader("Content-disposition", "attachment; filename=" + URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8) + ".JPG");
							response.setContentLengthLong(contents.length);
							response.getOutputStream().write(contents);
							response.getOutputStream().flush();
						}

						if (data.getFileName().equalsIgnoreCase(sanitizedFileName) && sanitizedFileType.equalsIgnoreCase("MOV")
								&& data.getFileType().equalsIgnoreCase("MOV"))
						{
							LOG.info("********************* FILE NAME MOV****************************" + sanitizedFileName);

							final String movData = data.getHexData();
							final byte[] contents = Base64.getDecoder().decode(movData);
							final String contentType = "video/quicktime";
							final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

							response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
							response.setHeader("Content-disposition", "attachment; filename=" + URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8) + ".MOV");
							response.setContentLengthLong(contents.length);
							response.getOutputStream().write(contents);
							response.getOutputStream().flush();
						}
					}
				}
			}
			else {
				LOG.info("OrderAttachment info is null");
			}
			/*if(pdfdata != null && CollectionUtils.isNotEmpty(pdfdata.getFileData())) {
			if (StringEscapeUtils.escapeHtml4(orderNumber) != null && StringEscapeUtils.escapeHtml4(fileType) != null)
			{
				final String flag = ATTACHMENTFLAG;
				pdfdata = bhgeB2BOrderDataFetch.getNewAttachmentPDF(StringEscapeUtils.escapeHtml4(orderNumber), flag,
						sanitizedFileName, StringEscapeUtils.escapeHtml4(fileType), customerNumber);
			}
			
			if(pdfdata != null && CollectionUtils.isNotEmpty(pdfdata.getFileData())) {
				fileData = pdfdata.getFileData().get(0).getHexData();
			}
			if (fileData == null)
			{
				//request.getSession().setAttribute(BhgeCoreConstants.DOCUMENT_RFC_ERROR_STATUS, Boolean.TRUE);
				final HttpHeaders headers = new HttpHeaders();
				headers.add("Location", request.getHeader("Referer"));
				
			}*/
			
		}
		
	}
	// Added for changes to order attachments RFC for attachment download - end
	


	@RequestMapping(value = "/orderInquiry", method = { RequestMethod.PUT, RequestMethod.POST })
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(value = HttpStatus.OK)
	//@Operation(operationId = "order Inquiry", summary = "Order Inquiry", description = "Order Inquiry")
	public EmailResponseWsDTO orderEnquiryNew(@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user", required = true) @PathVariable final String userId, 
			@Parameter(description = "Request body parameter for BHGEOrderEnquiryEmailData", required = true) @RequestBody final BHGEOrderEnquiryEmailData inquiryData, final HttpServletRequest request) throws EmailException
	{
		LOG.info("Inside orderEnquiry: START - & Order Number - " + inquiryData.getOrderNumber());
		EmailResponse emailResponse = new EmailResponse();
		emailResponse.setStatus(false);
		EmailResponseData emailresponseData = new EmailResponseData();
		try
		{
			String subject = null;
			final UserModel user = userService.getCurrentUser();
			String userName = null;
			String emailIds = null;
			String customerName = null;
			final String orderNumber = StringEscapeUtils.escapeHtml4(inquiryData.getOrderNumber());
			final String businessName = StringEscapeUtils.escapeHtml4(inquiryData.getBusinessName());
			//LOG.info("Inside orderEnquiry: PreCheck - " + emailIds);
			if (null != user && user instanceof GEEdgeCustomerModel)
			{
				//emailIds = ((GEEdgeCustomerModel) user).getEmail();
				emailIds = Config.getParameter("mail.from");
				userName = user.getName();
				final B2BUnitModel soldToName = bhgeSoldToUtil.getDefaultB2BUnitModelCurrentUser();
				customerName = soldToName.getLocName();
				subject = "Inquiry about: " + businessName + " & Order Number: " + orderNumber;
				//LOG.info("Inside orderEnquiry: IntraCheck - " + emailIds);
			}
			else
			{
				//TODO : need to test for guest/anonymous 
					LOG.info("****************** ANONYMOUS CALL ********************** ");
					final String captcha = StringEscapeUtils.escapeHtml4(inquiryData.getGoogleCaptcha());
				//	if (commonUtilsService.validateGoogleCaptchaNew(request, null, restTemplate, captcha))
					//boolean captchaValue = commonUtilsService.validateGoogleCaptchaNew(request, null, restTemplate, captcha);
					if(commonUtilsService.validateGoogleCaptchaNew(request, null, restTemplate, captcha)){	
						userName = "Guest";
						//emailIds = inquiryData.getEmailIds();
						emailIds = Config.getParameter("mail.from");
						subject = "Inquiry about order number " + orderNumber;
					}
					else
					{
						if (RequestMethod.POST.name().equalsIgnoreCase(request.getMethod()))
						{
							LOG.info("Google Captcha Not validated");
							final String invalidCaptcha = "Google Captcha Not validated";



							//userName = "Guest";
							//emailIds = inquiryData.getEmailIds();
							//subject = "Inquiry about order number " + orderNumber;



							emailResponse.setStatus(false);
							emailResponse.setEmailid(null);
							return getDataMapper().map(emailResponse, EmailResponseWsDTO.class, "FULL");
						}
					}
			}

			LOG.info("Inside orderEnquiry: PostCheck - " + emailIds);

			final String poNumber = StringEscapeUtils.escapeHtml4(inquiryData.getPoNumber());
			final String datePlaced = StringEscapeUtils.escapeHtml4(inquiryData.getDatePlaced());
			final String enquiryType = StringEscapeUtils.escapeHtml4(inquiryData.getEnquiryType());
			final String inquiryDetails = StringEscapeUtils.escapeHtml4(inquiryData.getInquiryDetails());
			final String soldToId = StringEscapeUtils.escapeHtml4(null != inquiryData.getSoldToId() ? (("0000000000" + inquiryData.getSoldToId()).substring(inquiryData.getSoldToId().length())) : null);
			LOG.info("============ Padded SoldTo ID is ============= "+soldToId);
			final String lineItem = StringEscapeUtils.escapeHtml4(inquiryData.getLineData());
			String productLine = StringEscapeUtils.escapeHtml4(inquiryData.getProductLine());
			if (productLine == null)
			{
				productLine = "";
			}
			if (productLine.contains("&") || productLine.contains("/"))
			{
				productLine = StringEscapeUtils.unescapeHtml4(productLine);
			}

			emailResponse = bhgeB2bEmailService.createEnquiryForm(TEMPLATECODE_ENQUIRY, StringEscapeUtils.escapeHtml4(userName),
					StringEscapeUtils.escapeHtml4(emailIds.trim()), businessName, orderNumber, poNumber, datePlaced, enquiryType,
					inquiryDetails, subject, soldToId, lineItem, productLine);
			LOG.info("============ After order inquiry send email ==============");
			return getDataMapper().map(emailResponse, EmailResponseWsDTO.class, "FULL");
		}
		catch (final Exception e)
		{
			LOG.error("Error sending Order Status Email to "+e);
		}
		emailResponse.setStatus(false);
		emailresponseData.setEmailid(emailResponse.getEmailid());
		emailresponseData.setStatus(emailResponse.isStatus());
		LOG.info("Inside orderEnquiry: CLOSE - " + inquiryData.getUserName() + " & Order Number - " + inquiryData.getOrderNumber());
		return getDataMapper().map(emailResponse, EmailResponseWsDTO.class, "FULL");
	}
	


	@RequestMapping(value = "/shareDSOrders", method = RequestMethod.POST)
	@ResponseBody
	@Operation(operationId = "shareDSOrders", summary = "Email order details", description = "Email order details")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(HttpStatus.OK)
	public EmailResponseListWsDTO shareDSOrders(@Parameter(description = "Order number", required = true) @RequestParam final String orderNo,
			@Parameter(description = "Customer number", required = true) @RequestParam final String customerNo,
			@Parameter(description = "List of EmailIds", required = true) @RequestParam final List<String> emailIds,
			@Parameter(description = "Google Captcha", required = false) @RequestParam(required = false, defaultValue = "") final String googleCaptcha,
			final HttpServletRequest request) throws BhgeUtilException
	{
		BHGEOrderShareEmailContext mailInputData = new BHGEOrderShareEmailContext();
		EmailResponseListWsDTO emailResponseListWsDTO = new EmailResponseListWsDTO();
		List<EmailResponseWsDTO> responseListWsDto = new ArrayList<>();
		LOG.info("****************************************** SHARE Order ********************************************");
		final EmailResponseData emailResponse = new EmailResponseData();
		final int page = 0;
		final String sapOrderType = "product";
		final UserModel user = userService.getCurrentUser();
		String pageType = null;
		String orderNumber = StringEscapeUtils.escapeHtml4(orderNo);
		String customerNumber = StringEscapeUtils.escapeHtml4(null != customerNo ? (("0000000000" + customerNo).substring(customerNo.length())) : null);
		// added for SAAS scan
		List<String> emaiIdlist = new  ArrayList<String>();
		for(String emaiId : emailIds) {
			String  str = StringEscapeUtils.escapeHtml4(emaiId) ;
			emaiIdlist.add(str);
		}
		// 
		List<String> emailIdList =emaiIdlist;
		String captcha = StringEscapeUtils.escapeHtml4(googleCaptcha);
		
		SearchPageData<BHGEOrderHistoryData> searchPageData = null;
		final PageableData pageableData = createPageableData(page, Integer.parseInt(PAGE_SIZE), "UpdateDsc", null);
		final String DETAIL_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))
				? Config.getParameter("ORDERTYPE_DET") : "CP_DET";
		final String FAST_ORDER = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_FAST")))
				? Config.getParameter("ORDERTYPE_FAST") : "CP_FAST";

		String userName = "";
		mailInputData.setOrderNumber(StringEscapeUtils.escapeHtml4(orderNumber));
		mailInputData.setCustomerNumber(StringEscapeUtils.escapeHtml4(null != customerNumber ? (("0000000000" + customerNumber).substring(customerNumber.length())) : null));
		LOG.info("=========== Updated customer Number after padding is ========== "+mailInputData.getCustomerNumber());
		mailInputData.setEmailIds(emailIdList);
		mailInputData.setGoogleCaptcha(StringEscapeUtils.escapeHtml4(captcha));
		if (null != user && user instanceof GEEdgeCustomerModel)
		{
			//orderNumber = StringEscapeUtils.escapeHtml4(mailInputData.getOrderNumber());
			//customerNumber = StringEscapeUtils.escapeHtml4(mailInputData.getCustomerNumber());
			//emailIdList = mailInputData.getEmailIds();
			pageType = DETAIL_ORDER;
			userName = StringEscapeUtils.escapeHtml4(user.getName());
			//LOG.info("****************** LOGGED IN USER CALL ********************** " + pageType);
			final OrderHistoryFormSearchData data = new OrderHistoryFormSearchData();
			data.setPageFlag(pageType);
			final Map<String, Object> responseObject = bhgeB2BOrderFacade.getBhgeOrderStatusForEmail(StringEscapeUtils.escapeHtml4(customerNumber), data,
					pageableData, null, null, StringEscapeUtils.escapeHtml4(sapOrderType),StringEscapeUtils.escapeHtml4(orderNumber));
			searchPageData = (SearchPageData<BHGEOrderHistoryData>) responseObject.get("orderHistoryData");


			//searchPageData = bhgeB2BOrderFacade.newGetDefaultFastOrderWS(customerNumber, orderNumber, "", pageableData, null,pageType);
		}

		else
		{
			//TODO test with anonymous flow
			LOG.info("****************** ANONYMOUS CALL ********************** ");
			captcha = StringEscapeUtils.escapeHtml4(mailInputData.getGoogleCaptcha());
			/*try {
				boolean captchValue = commonUtilsService.validateGoogleCaptchaNew(request, null, restTemplate, captcha);
			}
			catch(BhgeUtilException e) {
				LOG.info("Captcha validation error "+e);
			}
			boolean captchaValue1;*/
			if (commonUtilsService.validateGoogleCaptchaNew(request, null, restTemplate, captcha))	
			{
				userName = "Guest";
				orderNumber = StringEscapeUtils.escapeHtml4(mailInputData.getOrderNumber());
				customerNumber = StringEscapeUtils.escapeHtml4(mailInputData.getCustomerNumber());
				emailIdList = mailInputData.getEmailIds();
				pageType = FAST_ORDER;
				searchPageData = bhgeB2BOrderFacade.newGetDefaultFastOrderWS(StringEscapeUtils.escapeHtml4(customerNumber),StringEscapeUtils.escapeHtml4(orderNumber), "", pageableData, null,
						pageType);

			}
			else
			{
				if (RequestMethod.POST.name().equalsIgnoreCase(request.getMethod()))
				{
					LOG.info("Google Captcha Not validated");
					final String invalidCaptcha = "Google Captcha Not validated";

					//orderNumber = StringEscapeUtils.escapeHtml4(mailInputData.getOrderNumber());
					//customerNumber = StringEscapeUtils.escapeHtml4(mailInputData.getCustomerNumber());
					//emailIdList = mailInputData.getEmailIds();
					//pageType = FAST_ORDER;

					emailResponse.setStatus(false);
					emailResponse.setEmailid(null);
					EmailResponseWsDTO emailResponsWsDTO = getDataMapper().map(emailResponse, EmailResponseWsDTO.class);
					responseListWsDto.add(emailResponsWsDTO);
					emailResponseListWsDTO.setEmailResponses(responseListWsDto);
					return emailResponseListWsDTO;
				}
			}
		}

	//	final boolean value = false;
		emailResponse.setStatus(false);

		try
		{
			List<BHGEOrderHistoryData> orderDataList = null;
			if (searchPageData.getResults() != null)
			{
				orderDataList = searchPageData.getResults();
			}

			for (final String emailId : emailIdList)
			{
				if (orderDataList != null || !orderDataList.isEmpty())
				{
					for (final BHGEOrderHistoryData orderData : orderDataList)
					{
						LOG.info("----- IN Sending Share Order Email start ----- ");
						String subject = "DS Store Sales Order Number " + orderNumber + " "
								+ StringEscapeUtils.escapeHtml4(orderData.getOrderStatus());
						if (orderData.getOrderStatus().contains("&"))
						{
							subject = "DS Store Sales Order Number " + orderNumber + " "
									+ StringEscapeUtils.unescapeHtml4(orderData.getOrderStatus());
						}
						if (orderData.getOrderStatus().equalsIgnoreCase("Received"))
						{
							subject = "DS Store Sales Order Number " + orderNumber + " Order Received";
						}
						else if (StringEscapeUtils.escapeHtml4(orderData.getOrderStatus()).equalsIgnoreCase("Processing"))
						{
							subject = "DS Store Sales Order Number " + orderNumber + " Order in Progress";
						}
						else if ((orderData.getBkID() != null) && StringUtils.isNotBlank(orderData.getBkID()))
						{
							subject = "DS Store Sales Order Number " + orderNumber + " Blocked";
						}

						// Appending Subject content
						if (!Config.getParameter("current.env").equalsIgnoreCase("prod"))
						{
							subject = subject + " from " + userName + "(" + Config.getParameter("current.env") + ")";
						}

						bhgeB2bEmailService.createShareOrderEmail(SHARE_ORDER_TEMPLATECODE, orderData, StringEscapeUtils.escapeHtml4(subject),
								StringEscapeUtils.escapeHtml4(emailId));
						LOG.info("============== After Share order email call =================");
					}
				}
				emailResponse.setStatus(true);
				emailResponse.setEmailid(StringEscapeUtils.escapeHtml4(emailId));
				
				EmailResponseWsDTO emailResponsWsDTO = getDataMapper().map(emailResponse, EmailResponseWsDTO.class);
				responseListWsDto.add(emailResponsWsDTO);
				emailResponseListWsDTO.setEmailResponses(responseListWsDto);
			}
			
		}
		catch (final Exception e)
		{
			LOG.error("Error sending Order Status Email to " + e);
		}
		return emailResponseListWsDTO;
	} 
}
