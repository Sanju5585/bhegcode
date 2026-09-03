package com.bhge.core.resource.dao.impl;

import java.util.List;

import com.bhge.core.model.ResourceComponentModel;
import com.bhge.core.resource.dao.BHGResourceDao;

import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;

public class DefaultBHGResourceDao implements BHGResourceDao
{
    private FlexibleSearchService flexibleSearchService;

    @Override
    public List<ResourceComponentModel> getResources()
    {
        String query = "SELECT {pk} FROM {ResourceComponent} ORDER BY {name} ASC";
        FlexibleSearchQuery fsq = new FlexibleSearchQuery(query);
        return flexibleSearchService.<ResourceComponentModel>search(fsq).getResult();
    }

    @Override
    public List<ResourceComponentModel> searchResources(String keyword)
    {
        String query = "SELECT {pk} FROM {ResourceComponent} " +
                "WHERE LOWER({name}) LIKE ?keyword " +
                "ORDER BY {name} ASC";

        FlexibleSearchQuery fsq = new FlexibleSearchQuery(query);
        fsq.addQueryParameter("keyword", "%" + keyword.toLowerCase() + "%");

        return flexibleSearchService.<ResourceComponentModel>search(fsq).getResult();
    }

    @Override
    public List<ResourceComponentModel> getResourcesByCategory(String category)
    {
        String query = "SELECT {pk} FROM {ResourceComponent} " +
                "WHERE {category}=?category " +
                "ORDER BY {name} ASC";

        FlexibleSearchQuery fsq = new FlexibleSearchQuery(query);
        fsq.addQueryParameter("category", category);

        return flexibleSearchService.<ResourceComponentModel>search(fsq).getResult();
    }

    public void setFlexibleSearchService(FlexibleSearchService flexibleSearchService)
    {
        this.flexibleSearchService = flexibleSearchService;
    }
}