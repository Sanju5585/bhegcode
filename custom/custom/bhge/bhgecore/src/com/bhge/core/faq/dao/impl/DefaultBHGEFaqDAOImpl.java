package com.bhge.core.faq.dao.impl;

import java.util.List;

import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;

import com.bhge.core.model.FaqComponentModel;
import com.bhge.core.faq.dao.BHGEFaqDAO;

public class DefaultBHGEFaqDAOImpl implements BHGEFaqDAO
{
    private FlexibleSearchService flexibleSearchService;

    @Override
    public List<FaqComponentModel> getFaqsByStore()
    {
        String query = "SELECT {pk} FROM {FaqComponent}";
        FlexibleSearchQuery fsq = new FlexibleSearchQuery(query);

        return flexibleSearchService.<FaqComponentModel>search(fsq).getResult();
    }

    @Override
    public List<FaqComponentModel> searchFaqs(String keyword)
    {
        String query = "SELECT {pk} FROM {FaqComponent} " +
                "WHERE (LOWER({question}) LIKE ?keyword " +
                "OR LOWER({answer}) LIKE ?keyword)";

        FlexibleSearchQuery fsq = new FlexibleSearchQuery(query);
        fsq.addQueryParameter("keyword", "%" + keyword.toLowerCase() + "%");

        return flexibleSearchService.<FaqComponentModel>search(fsq).getResult();
    }

    public void setFlexibleSearchService(FlexibleSearchService flexibleSearchService)
    {
        this.flexibleSearchService = flexibleSearchService;
    }
}
