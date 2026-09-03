package com.bhge.core.order.daos.impl;

import com.bhge.core.model.OrderNotificationModel;
import com.bhge.core.order.daos.BHGEOrderNotificationDao;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.user.UserService;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.util.Date;
import java.util.List;

public class BHGEOrderNotificationDaoImpl implements BHGEOrderNotificationDao {

    private static final Logger LOG = Logger.getLogger(BHGEOrderNotificationDaoImpl.class);

    @Resource(name = "flexibleSearchService")
    private FlexibleSearchService flexibleSearchService;

    @Resource(name = "userService")
    private UserService userService;

    @Resource(name = "modelService")
    private ModelService modelService;

    @Resource(name = "b2bUnitService")
    private B2BUnitService b2bUnitService;

    private final static String ORDER_NOTIFICATION = """
        SELECT {PK}
        FROM {orderNotification}
        where {orderId}=?orderId AND {customer}=?userId AND {b2bUnit}=?b2bUnit AND {lineNo}=?lineNo
    """;

    private final static String ORDER_NOTIFICATIONS = """
            SELECT {PK}
            FROM {OrderNotification}
            WHERE {customer}=?userId AND {b2bUnit}=?b2bUnit
            """;

    private static final String PAST_ORDER_NOTIFICATIONS = """
            SELECT {PK}
            FROM {OrderNotification}
            WHERE {updatedDate} < ?pastDate
            """;

    private static final String NOTIFICATION_EMAIL = """
            SELECT {PK}
            FROM {OrderNotification}
            WHERE {isOrderEmailSent} = 0
            """;

    @Override
    public boolean updateOrderNotification(String orderId) {
        final UserModel user = userService.getCurrentUser();
        if(user instanceof GEEdgeCustomerModel geCustomer){
            final String b2bUnitId = geCustomer.getDefaultB2BUnit().getUid().split("_")[0];
            SearchResult<OrderNotificationModel> results = getOrderNotification(orderId, geCustomer,"00",b2bUnitId);
            if(CollectionUtils.isNotEmpty(results.getResult())){
                for (OrderNotificationModel notification: results.getResult()){
                    notification.setIsOrderRead(true);
                    modelService.save(notification);
                    modelService.refresh(notification);
                }
                return true;
            }
        }
        return false;
    }

    @Override
    public List<OrderNotificationModel> getNotifications() {
        LOG.info("US552962 : Getting InAPP Notification at DAO");
        final UserModel user = userService.getCurrentUser();
        if(user instanceof GEEdgeCustomerModel geCustomer){
            String userId = geCustomer.getPk().toString();
            String b2bUnitId = geCustomer.getDefaultB2BUnit().getUid().split("_")[0];
            LOG.info("US552962-1 : Getting InAPP Notification for Customer UID" +  user.getUid());
            LOG.info("US552962-1 : Getting InAPP Notification for Customer" + userId);
            LOG.info("US552962-1 : Getting InAPP Notification for B2B unit" + b2bUnitId);
            final B2BUnitModel parentB2bUnit = (B2BUnitModel) b2bUnitService.getUnitForUid(b2bUnitId);
            LOG.info("US552962-1 : Getting InAPP Notification for B2B unit PK" + parentB2bUnit.getPk().toString());
            FlexibleSearchQuery query = new FlexibleSearchQuery(ORDER_NOTIFICATIONS);
            query.addQueryParameter("userId", userId);
            query.addQueryParameter("b2bUnit", parentB2bUnit.getPk().toString());
            SearchResult<OrderNotificationModel> results = flexibleSearchService.search(query);
            if(CollectionUtils.isNotEmpty(results.getResult())){
                LOG.info("US552962 : Getting InAPP Notification got Notification");
                return results.getResult();
            }
        }
        return null;
    }

    @Override
    public List<OrderNotificationModel> getPastNotifications(Date pastDate) {
        FlexibleSearchQuery query = new FlexibleSearchQuery(PAST_ORDER_NOTIFICATIONS);
        query.addQueryParameter("pastDate", pastDate);
        SearchResult<OrderNotificationModel> result = flexibleSearchService.search(query);
        if (CollectionUtils.isNotEmpty(result.getResult())){
            return result.getResult();
        }
        return null;
    }

    @Override
    public List<OrderNotificationModel> getNotificationEmail() {
        FlexibleSearchQuery query = new FlexibleSearchQuery(NOTIFICATION_EMAIL);
        SearchResult<OrderNotificationModel> result = flexibleSearchService.search(query);
        if (CollectionUtils.isNotEmpty(result.getResult())){
            return result.getResult();
        }
        return null;
    }

    @Override
    public SearchResult<OrderNotificationModel> getOrderNotification(String orderId, GEEdgeCustomerModel geCustomer, String lineNo, String b2bUnitId) {
        final String userId = geCustomer.getPk().toString();
        //final String b2bUnitId = geCustomer.getDefaultB2BUnit().getUid().split("_")[0];
        final B2BUnitModel parentB2bUnit = (B2BUnitModel) b2bUnitService.getUnitForUid(b2bUnitId);
        LOG.info("US552962 : InAPP Notification Reterving in NotificationIMPL :  " + orderId);
        LOG.info("US552962 : InAPP Notification Reterving in NotificationIMPL :  " + userId);
        LOG.info("US552962 : InAPP Notification Reterving in NotificationIMPL :  " + parentB2bUnit.getPk().toString());
        FlexibleSearchQuery query = new FlexibleSearchQuery(ORDER_NOTIFICATION);
        query.addQueryParameter("orderId", orderId);
        query.addQueryParameter("userId", userId);
        query.addQueryParameter("b2bUnit", parentB2bUnit.getPk().toString());
        query.addQueryParameter("lineNo",lineNo);
        return flexibleSearchService.search(query);
    }
}
