package com.bhge.core.quote.service.dao.impl;

import com.bhge.core.quote.service.dao.BHGECommerceQuoteDao;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import org.apache.commons.collections4.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import jakarta.annotation.Resource;
import java.util.List;

public class BHGECommerceQuoteDaoImpl implements BHGECommerceQuoteDao {

    private static final Logger LOG = LoggerFactory.getLogger(BHGECommerceQuoteDaoImpl.class);

    @Resource(name = "flexibleSearchService")
    FlexibleSearchService flexibleSearchService;

       private static final String PENDING_QUOTES_QUERY = """
            SELECT {qu.pk}
            FROM {QUOTE AS qu
                  JOIN QuoteState AS qs ON {qu.state} = {qs.pk} }
            WHERE {qs.code} IN ('CREATED', 'ERROR', 'PROCESSING_ERROR')
            """;

    private static final String QUOTE_BY_CODE_QUERY = """
            SELECT {qu.pk}
            FROM {QUOTE AS qu}
            WHERE {qu.code} = ?quoteCode
            """;

    @Override
    public List<QuoteModel> getPendingQuotes() {
        LOG.info("US530529: Retrieving pending quotes from");
        final FlexibleSearchQuery searchQuery = new FlexibleSearchQuery(PENDING_QUOTES_QUERY);
        searchQuery.setDisableSearchRestrictions(true);
        final SearchResult<QuoteModel> result = flexibleSearchService.search(searchQuery);
        if (CollectionUtils.isNotEmpty(result.getResult())) {
            return result.getResult();
        }
        return null;
    }

    @Override
    public QuoteModel getQuoteByCode(String quoteCode) {
        LOG.info("US530529: Retrieving quote by code");
        final FlexibleSearchQuery searchQuery = new FlexibleSearchQuery(QUOTE_BY_CODE_QUERY);
        searchQuery.addQueryParameter("quoteCode", quoteCode);
        searchQuery.setDisableSearchRestrictions(true);
        final SearchResult<QuoteModel> result = flexibleSearchService.search(searchQuery);
        if (CollectionUtils.isNotEmpty(result.getResult())) {
            return result.getResult().get(0);
        }
        return null;
    }

}
