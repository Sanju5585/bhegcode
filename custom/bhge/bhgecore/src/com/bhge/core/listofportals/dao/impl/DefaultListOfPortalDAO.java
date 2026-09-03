package com.bhge.core.listofportals.dao.impl;

import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bhge.core.listofportals.dao.ListOfPortalDAO;
import com.bhge.core.model.List.ListOfPortalsModel;

import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;

public class DefaultListOfPortalDAO implements ListOfPortalDAO
{

    private static final String searchQuery = "select {pk} from {ListOfPortals}";

 
    public FlexibleSearchService getFlexibleSearchService()
    {
        return flexibleSearchService;
    }
 
    public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
    {
        this.flexibleSearchService = flexibleSearchService;
    }
	
    @Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;
	
	@Override
	public List<ListOfPortalsModel> findLinks() 
	{
        final FlexibleSearchQuery query = new FlexibleSearchQuery(searchQuery);
        return flexibleSearchService.<ListOfPortalsModel>search(query).getResult();
	}
}