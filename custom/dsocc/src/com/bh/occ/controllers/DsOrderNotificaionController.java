package com.bh.occ.controllers;

import com.bhge.facades.order.BHGEB2BOrderFacade;
import com.bhge.facades.order.data.OrderStatusRequestData;
import com.bhge.facades.order.notification.data.OrderNotificationData;
import com.ds.dsocc.common.dto.OrderNotificationWsDTO;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.commercewebservicescommons.dto.order.CartWsDTO;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import java.util.LinkedList;
import java.util.List;


@Controller
@ApiVersion("v2")
@Tag(name = "Order Notifications")
@RequestMapping(value = "/{baseSiteId}")
public class DsOrderNotificaionController extends DSBaseController
{
    private static final Logger LOG = Logger.getLogger(DsOrderNotificaionController.class);

    @Resource(name = "userService")
    private UserService userService;

    @Resource(name = "b2bOrderFacade")
    private BHGEB2BOrderFacade bhgeB2BOrderFacade;


    @RequestMapping(value = "/users/{userId}/orderNotifications", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "Order Notification", summary = "Get Notificaions Order Data", description  = "Get Notificaion Order Data")
    @ApiBaseSiteIdAndUserIdParam
    public List<OrderNotificationWsDTO> getOrderNotification() {
        List<OrderNotificationWsDTO> orderNotificaionsWsData = new LinkedList<>();
        LOG.info("US552962 : Getting InAPP Notification in Controller");
        List<OrderNotificationData> notificationsData = bhgeB2BOrderFacade.getOrderNotificationData();
        if (CollectionUtils.isNotEmpty(notificationsData)) {
            LOG.info("US552962 : InAPP Notification Reterived : ");
            notificationsData.forEach(notification -> {
                LOG.info("US552962 : API Result :: Notificaiton Detalis : "  + notification.getOrderId() + "-" + notification.getStatus());
                OrderNotificationWsDTO wsDto = getDataMapper().map(
                        notification, OrderNotificationWsDTO.class, StringEscapeUtils.escapeHtml4("FULL")
                );
                orderNotificaionsWsData.add(wsDto);
            });
        }
        LOG.info("US552962 : InAPP Notification Returning Response : " + orderNotificaionsWsData.toString());
        return orderNotificaionsWsData;
    }

    @RequestMapping(value = "users/{userId}/orderRead/{orderId}", method = RequestMethod.POST)
    @ResponseBody
    @Operation(operationId = "Order Notification", summary = "Update Notification as read", description = "Update Notification as read")
    @ApiBaseSiteIdAndUserIdParam
    public ResponseEntity<String> updateOrderNotification(
            @Parameter(description = "Order Id", required = true) @PathVariable final String orderId
    ) {
        if (!userService.isAnonymousUser(userService.getCurrentUser())) {
            boolean notificationUpdated = bhgeB2BOrderFacade.updateNotification(orderId);
            if(BooleanUtils.isTrue(notificationUpdated)){
                return new ResponseEntity<>("Success", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
