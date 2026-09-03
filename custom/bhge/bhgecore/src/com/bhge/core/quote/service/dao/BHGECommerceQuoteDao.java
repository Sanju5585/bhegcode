package com.bhge.core.quote.service.dao;


import de.hybris.platform.core.model.order.QuoteModel;

import java.util.List;

public interface BHGECommerceQuoteDao {

    List<QuoteModel> getPendingQuotes();

    QuoteModel getQuoteByCode(String quoteCode);
}
