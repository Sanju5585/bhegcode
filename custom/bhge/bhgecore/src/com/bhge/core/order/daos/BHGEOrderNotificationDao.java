package com.bhge.core.order.daos;

import com.bhge.core.model.OrderNotificationModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.search.SearchResult;

import java.util.Date;
import java.util.List;

public interface BHGEOrderNotificationDao {
    boolean updateOrderNotification(String orderId);

    List<OrderNotificationModel> getNotifications();

    List<OrderNotificationModel> getPastNotifications(Date pastDate);

    List<OrderNotificationModel> getNotificationEmail();

    SearchResult<OrderNotificationModel> getOrderNotification(String orderId, GEEdgeCustomerModel geCustomer, String lineNo,String b2bUnitId);
}
