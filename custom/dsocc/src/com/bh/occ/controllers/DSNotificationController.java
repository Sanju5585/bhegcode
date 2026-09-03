package com.bh.occ.controllers;

import com.bhge.core.util.BHGECustomerUtil;
import com.bhge.facades.mysite.MySiteEquipmentFacade;
import com.bhge.facades.notifications.DsNotificationFacade;
import com.bhge.facades.product.data.DSNotificationData;
import com.ds.dsocc.calibration.data.DSNotificationWsDTO;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;



@Controller
@ApiVersion("v2")
@Tag(name = "DS Notifications")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/dsNotifications")

public class DSNotificationController  extends DSBaseController {
	
	private static final Logger LOG = Logger.getLogger(DSNotificationController.class); 
	
	@Resource(name = "userService")
	private UserService userService;
	
	@Resource(name = "mySiteEquipmentFacade")
	private MySiteEquipmentFacade mySiteEquipmentFacade;
	
	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource(name = "customerFacade")
	private CustomerFacade customerFacade;
	
	@Resource(name = "dsNotificationFacade")
	private DsNotificationFacade dsNotificationFacade;
	
	@Operation(operationId = "myNotifications", summary = "get the Notifications for Equipments", description = "Fetches the existing equipment records of the customer")
	@RequestMapping(value = "/myNotifications", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public List<DSNotificationWsDTO> getNotifications(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET)
													 final String fields, @RequestParam(value = "MANorMELflag", required = true)
													 final String MANorMELflag, @RequestParam(value = "filterBy", defaultValue = "totalItems", required = false)
													 final String filterBy, @RequestParam(value = "fromDate", required = false)
													 final String fromDate, @RequestParam(value = "toDate", required = false)
													 final String toDate, @RequestParam(value = "groupBy", required = false)
													 final String groupBy, @RequestParam(value = "sortBy", required = false)
													 final String sortBy, @RequestParam(value = "refreshFlag", required = false)
													 final boolean refreshFlag,@RequestParam(value = "dismissAll", required = false)
													 final String dismissAll, @RequestParam(value = "endCustomerID", required = false)
													 final String endCustomerID) throws ParseException
	{
		LOG.info("=========================== get notifications ====================");
		LOG.info(" /myNotifications method starts- " + java.time.LocalDateTime.now());
		
		String sessionCustomer = null;
		List<DSNotificationWsDTO> dSNotificationWsDTO = new ArrayList<DSNotificationWsDTO>();
		List<DSNotificationData> dSNotificationDataList = new ArrayList<DSNotificationData>();
		if (userService.isAnonymousUser(userService.getCurrentUser())) {
	        return dSNotificationWsDTO;
		}
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			if(null != currentUser.getDefaultB2BUnit()) {
				sessionCustomer = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
			}
		}
		LOG.info("sessionCustomer -" + sessionCustomer);
		final String customerNumber = StringUtils.isNotBlank(sessionCustomer) ? StringEscapeUtils.escapeHtml4(sessionCustomer)
				: null;
	
		// Allow only logged in user to access the API. Guest user is not allowed to get the data
		if (StringUtils.isNotBlank(customerNumber) && BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
		{
			//Sanitize input fields
			final String flag = StringEscapeUtils.escapeHtml4(MANorMELflag);
			final String filterValue = StringEscapeUtils.escapeHtml4(filterBy);
			final String fromDateFilter = StringEscapeUtils.escapeHtml4(fromDate);
			final String toDateFilter = StringEscapeUtils.escapeHtml4(toDate);
			final String groupByFilter = StringEscapeUtils.escapeHtml4(groupBy);
			final String endCustomerFilterValue = StringEscapeUtils.escapeHtml4(endCustomerID);
			final String sortByValue = StringEscapeUtils.escapeHtml4(sortBy);
			dSNotificationDataList = dsNotificationFacade.getNotifications(customerNumber, flag, refreshFlag,
				fromDateFilter, toDateFilter, endCustomerFilterValue);
			if(dismissAll != null) {
				 dsNotificationFacade.dismissAllNotifications(dSNotificationDataList,dismissAll);
			}
			if(sortByValue != null) {
				dSNotificationDataList = dsNotificationFacade.applyBySort(dSNotificationDataList, sortByValue);
			}

	}
		if (dSNotificationDataList != null) {
		for (DSNotificationData notificationData : dSNotificationDataList) {
			if(notificationData.getCustomer().equals(customerNumber)) {
				String notificationTime = dsNotificationFacade.calculateTimeForNotification(notificationData.getNotificationID(), notificationData.getServiceDueDate());
				notificationData.setNotificationTime(notificationTime);
			DSNotificationWsDTO dSNotificationwsdto = getDataMapper().map(notificationData, DSNotificationWsDTO.class ,"DEFAULT");
			dSNotificationWsDTO.add(dSNotificationwsdto);
			}
        }
		}
		
		 return dSNotificationWsDTO;
		
	}
	
	@Operation(operationId = "flagNotification", summary = "set flag for Notification", description = "set flag  Notification for an Equipment")
	@RequestMapping(value = "/flagNotification", method = RequestMethod.GET)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public void setFlagNotification(@ApiFieldsParam@RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
													  @RequestParam(value = "serialNumber", required = true) final String serialNumber,
													  @RequestParam(value = "partNumber", required = true) final String partNumber,
													  @RequestParam(value = "setFlag", required = true) final boolean setFlag,
													  final HttpServletRequest request, final HttpServletResponse response) throws Exception
	{
		LOG.info("Start get flagNotification == Inside flagNotification");
		String sessionCustomer = null;
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			if(null != currentUser.getDefaultB2BUnit()) {
				sessionCustomer = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
			}
		}
		LOG.info("sessionCustomer -" + sessionCustomer);
		final String customerNumber = StringUtils.isNotBlank(sessionCustomer) ? StringEscapeUtils.escapeHtml4(sessionCustomer)
				: null;
	
		// Allow only logged in user to access the API. Guest user is not allowed to get the data
		if (StringUtils.isNotBlank(customerNumber) && BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
		{
			dsNotificationFacade.setFlagNotification(serialNumber, partNumber,customerNumber, 
					setFlag);
		}
	}
	
	@Operation(operationId = "dismissNotifications", summary = "set flag for dismissNotifications", description = "set flag  dismissNotifications for an Equipment")
	@RequestMapping(value = "/dismissNotifications", method = RequestMethod.GET)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public void dismissNotifications(@ApiFieldsParam@RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
													  @RequestParam(value = "serialNumber", required = true) final String serialNumber,
													  @RequestParam(value = "partNumber", required = true) final String partNumber,
													  @RequestParam(value = "setDismissed", required = true) final boolean setDismissed,
													  final HttpServletRequest request, final HttpServletResponse response) throws Exception
	{
		LOG.info("Start get flagNotification == Inside flagNotification");
		String sessionCustomer = null;
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			if(null != currentUser.getDefaultB2BUnit()) {
				sessionCustomer = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
			}
		}
		LOG.info("sessionCustomer -" + sessionCustomer);
		final String customerNumber = StringUtils.isNotBlank(sessionCustomer) ? StringEscapeUtils.escapeHtml4(sessionCustomer)
				: null;
	
		// Allow only logged in user to access the API. Guest user is not allowed to get the data
		if (StringUtils.isNotBlank(customerNumber) && BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
		{
			dsNotificationFacade.dismissNotifications(serialNumber, partNumber,customerNumber,
					setDismissed);
		}
	}
	
	@Operation(operationId = "markasReadNotifications", summary = "set flag for markasReadNotifications", description = "set flag  markasReadNotifications for an Equipment")
	@RequestMapping(value = "/markasReadNotifications", method = RequestMethod.GET)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public void markasReadNotifications(@ApiFieldsParam@RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
													  @RequestParam(value = "serialNumber", required = true) final String serialNumber,
													  @RequestParam(value = "partNumber", required = true) final String partNumber,
													  @RequestParam(value = "marksRead", required = true) final boolean marksRead,
													  final HttpServletRequest request, final HttpServletResponse response) throws Exception
	{
		LOG.info("Start get flagNotification == Inside flagNotification");
		String sessionCustomer = null;
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			if(null != currentUser.getDefaultB2BUnit()) {
				sessionCustomer = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
			}
		}
		LOG.info("sessionCustomer -" + sessionCustomer);
		final String customerNumber = StringUtils.isNotBlank(sessionCustomer) ? StringEscapeUtils.escapeHtml4(sessionCustomer)
				: null;
	
		// Allow only logged in user to access the API. Guest user is not allowed to get the data
		if (StringUtils.isNotBlank(customerNumber) && BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
		{
			dsNotificationFacade.markasReadNotifications(serialNumber, partNumber,customerNumber,
					marksRead);
		}
	}
	
	@Operation(operationId = "searchNotificationsBySerialNo", summary = "Search for Notifications", description = "Search for Notifications for an Equipment")
	@RequestMapping(value = "/searchNotificationsBySerialNo", method = RequestMethod.GET)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public List<DSNotificationWsDTO> searchNotificationsBySerialNo(@ApiFieldsParam@RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
													  @RequestParam(value = "serialNumber", required = true) final String serialNumber,
													  final HttpServletRequest request, final HttpServletResponse response) throws Exception
	{
		LOG.info("Start get searchNotifications == Inside searchNotifications");
		String sessionCustomer = null;
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			if(null != currentUser.getDefaultB2BUnit()) {
				sessionCustomer = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
			}
		}
		LOG.info("sessionCustomer -" + sessionCustomer);
		final String customerNumber = StringUtils.isNotBlank(sessionCustomer) ? StringEscapeUtils.escapeHtml4(sessionCustomer)
				: null;
		List<DSNotificationData> notificationDataList = new ArrayList<DSNotificationData>();
		List<DSNotificationWsDTO> dSNotificationWsDTOList = new ArrayList<DSNotificationWsDTO>();
		// Allow only logged in user to access the API. Guest user is not allowed to get the data
		if (StringUtils.isNotBlank(customerNumber) && BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
		{

			notificationDataList = dsNotificationFacade.searchNotificationsBySerialNo(serialNumber,customerNumber);
		}
		if (notificationDataList != null) {
			for (DSNotificationData notificationData : notificationDataList) {
				if(notificationData.getCustomer().equals(customerNumber)) {
				DSNotificationWsDTO dSNotificationwsdto = getDataMapper().map(notificationData, DSNotificationWsDTO.class ,"DEFAULT");
		        dSNotificationWsDTOList.add(dSNotificationwsdto);
		}
			}
		
	}
		return dSNotificationWsDTOList;
	
}
}
