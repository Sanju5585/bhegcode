package com.bhge.facades.regioncache;

import com.bhge.core.regioncache.BHGEOrderNotificationCacheKey;
import com.bhge.facades.order.notification.data.OrderNotificationData;
import com.bhge.integration.order.history.service.BHGEOrderHistoryService;
import de.hybris.platform.regioncache.CacheValueLoadException;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.key.CacheKey;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.util.LinkedList;
import java.util.List;

public class BHGEOrderNotificationCacheValueLoader implements CacheValueLoader {

    private static final Logger LOG = Logger.getLogger(BHGEOrderNotificationCacheValueLoader.class);


    @Resource(name = "bhgeOrderHistoryService")
    private BHGEOrderHistoryService bhgeOrderHistoryService;

    @Override
    public Object load(CacheKey cacheKey) throws CacheValueLoadException {
        List<OrderNotificationData> orderNotificationData = new LinkedList<>();
        boolean isFreshData = false;

        LOG.info("Inside load BHGEOrderNotificationCacheValueLoader");

        if (cacheKey instanceof BHGEOrderNotificationCacheKey bhgeCacheKey) {
            if (StringUtils.isNotBlank(bhgeCacheKey.getKey())) {
                final String[] keys = bhgeCacheKey.getKey().split("-");
                orderNotificationData = bhgeOrderHistoryService.getNotificationOrders(keys[0]);
                if(CollectionUtils.isNotEmpty(orderNotificationData)){
                    isFreshData = true;
                }
            }
        }
        LOG.info("BHGEOrderNotificationCacheValueLoader fresh data: "+ isFreshData);
        return new CacheLoadResult(orderNotificationData, isFreshData);
    }

    public static class CacheLoadResult {
        private final List<OrderNotificationData> orderNotificationData;
        private final boolean isFreshData;

        public CacheLoadResult(List<OrderNotificationData> orderNotificationData, boolean isFreshData) {
            this.orderNotificationData = orderNotificationData;
            this.isFreshData = isFreshData;
        }

        public List<OrderNotificationData> getOrderNotificationData() {
            return orderNotificationData;
        }

        public boolean isFreshData() {
            return isFreshData;
        }
    }

    public BHGEOrderHistoryService getBhgeOrderHistoryService() {
        return bhgeOrderHistoryService;
    }

    public void setBhgeOrderHistoryService(BHGEOrderHistoryService bhgeOrderHistoryService) {
        this.bhgeOrderHistoryService = bhgeOrderHistoryService;
    }
}