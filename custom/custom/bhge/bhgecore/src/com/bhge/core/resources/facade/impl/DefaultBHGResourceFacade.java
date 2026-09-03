package com.bhge.core.resource.facade.impl;

import java.util.List;

import com.bhge.core.data.ResourceData;
import com.bhge.core.resource.facade.BHGResourceFacade;
import com.bhge.core.resource.service.BHGResourceService;

public class DefaultBHGResourceFacade implements BHGResourceFacade
{
    private BHGResourceService resourceService;

    @Override
    public List<ResourceData> getResources()
    {
        return resourceService.getResources();
    }

    @Override
    public List<ResourceData> searchResources(String keyword)
    {
        return resourceService.searchResources(keyword);
    }

    public void setResourceService(BHGResourceService resourceService)
    {
        this.resourceService = resourceService;
    }
}