package com.bhge.core.order.service.impl;

import com.bhge.core.model.OrderNotificationModel;
import com.bhge.core.order.daos.impl.BHGEOrderNotificationDaoImpl;
import com.bhge.core.order.service.BHGEOrderNotificationService;

import jakarta.annotation.Resource;
import java.util.Date;
import java.util.List;

public class BHGEOrderNotificationServiceImpl implements BHGEOrderNotificationService {

    @Resource(name = "bhgeOrderNotificationDao")
    private BHGEOrderNotificationDaoImpl bhgeOrderNotificationDao;

    @Override
    public boolean updateOrderNotification(String orderId) {
        return bhgeOrderNotificationDao.updateOrderNotification(orderId);
    }

    @Override
    public List<OrderNotificationModel> getNotifications() {
        return bhgeOrderNotificationDao.getNotifications();
    }

    @Override
    public List<OrderNotificationModel> getPastNotifications(Date pastDate) {
        return bhgeOrderNotificationDao.getPastNotifications(pastDate);
    }

    @Override
    public List<OrderNotificationModel> getNotificationsEmail() {
        return bhgeOrderNotificationDao.getNotificationEmail();
    }

}
