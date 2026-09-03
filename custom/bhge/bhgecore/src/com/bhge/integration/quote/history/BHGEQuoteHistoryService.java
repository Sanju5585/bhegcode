package com.bhge.integration.quote.history;

import com.bhge.facades.quote.data.QuoteTrackingRequestData;
import com.bhge.facades.quote.data.QuoteTrackingResponseData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;


public interface BHGEQuoteHistoryService {

    SearchPageData<QuoteTrackingResponseData> getQuoteHistory(QuoteTrackingRequestData trackingReqData, PageableData pageableData);
}
