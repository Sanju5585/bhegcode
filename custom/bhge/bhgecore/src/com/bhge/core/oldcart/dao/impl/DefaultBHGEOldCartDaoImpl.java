package com.bhge.core.oldcart.dao.impl;

import com.bhge.core.oldcart.dao.BHGEOldCartDao;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.CartEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderEntryModel;
import de.hybris.platform.jalo.order.Cart;
import de.hybris.platform.jalo.order.OrderEntry;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.util.*;

public class DefaultBHGEOldCartDaoImpl implements BHGEOldCartDao {
    private static final Logger LOG = Logger.getLogger(DefaultBHGEOldCartDaoImpl.class);
    private final static String FIND_OLD_CARTS_FOR_SITE = "SELECT {c."+ CartModel.PK+"} FROM {"+ CartModel._TYPECODE +" AS c JOIN "+ GEEdgeCustomerModel._TYPECODE +" AS u ON {c."+ CartModel.USER +"} = {u."+ GEEdgeCustomerModel.PK +"}}"+
             " WHERE {c."+ CartModel.MODIFIEDTIME +"} <= ?modifiedBefore AND exists ({{ SELECT {ce."+CartEntryModel.PK+"} from {"+ CartEntryModel._TYPECODE +" AS ce} WHERE {ce."+CartEntryModel.ORDER+"}={c."+ CartModel.PK+"}}}) AND {u."+ GEEdgeCustomerModel.ACTIVE +"} = 1 AND ({c."+ CartModel.ISOLDCARTNOTIFIED +"} IS NULL OR {c."+ CartModel.ISOLDCARTNOTIFIED +"} = 0)";


    @Override
    public List<CartModel> fetchOldCartDetailForUser(Date pastDate) {
        FlexibleSearchQuery query = new FlexibleSearchQuery(FIND_OLD_CARTS_FOR_SITE);
        final Map<String, Object> params = new HashMap<String, Object>();
        params.put("modifiedBefore", pastDate);
        query.addQueryParameters(params);
        final SearchResult<CartModel> result = getFlexibleSearchService().search(query);
        if (result.getResult() != null && result.getResult().size() > 0)
        {
            LOG.info("Old Cart Detail List");
            List<CartModel> cartModels = result.getResult();
            return cartModels;
        }
        return Collections.emptyList();
    }

    @Resource
    private FlexibleSearchService flexibleSearchService;

    public FlexibleSearchService getFlexibleSearchService()
    {
        return flexibleSearchService;
    }

    public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
    {
        this.flexibleSearchService = flexibleSearchService;
    }
}
