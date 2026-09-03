package com.bhge.core.order.service;

import com.bhge.core.model.OrderNotificationModel;

import java.util.Date;
import java.util.List;

public interface BHGEOrderNotificationService {
    boolean updateOrderNotification(String orderId);

    List<OrderNotificationModel> getNotifications();

    List<OrderNotificationModel> getPastNotifications(Date pastDate);

    List<OrderNotificationModel> getNotificationsEmail();
}
