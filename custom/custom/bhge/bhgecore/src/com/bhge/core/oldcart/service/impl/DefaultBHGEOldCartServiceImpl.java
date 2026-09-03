package com.bhge.core.oldcart.service.impl;

import com.bhge.core.oldcart.dao.BHGEOldCartDao;
import com.bhge.core.oldcart.service.BHGEOldCartService;
import de.hybris.platform.core.model.order.CartModel;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.util.Date;
import java.util.List;

public class DefaultBHGEOldCartServiceImpl implements BHGEOldCartService {

    private static final Logger LOG = Logger.getLogger(DefaultBHGEOldCartServiceImpl.class);
    @Resource
    private BHGEOldCartDao bhgeOldCartDaoImpl;

    public DefaultBHGEOldCartServiceImpl(BHGEOldCartDao bhgeOldCartDaoImpl) {
        this.bhgeOldCartDaoImpl = bhgeOldCartDaoImpl;
    }

    @Override
    public List<CartModel> fetchOldCartDetails(Date pastDate) {
        return bhgeOldCartDaoImpl.fetchOldCartDetailForUser(pastDate);
    }
}
