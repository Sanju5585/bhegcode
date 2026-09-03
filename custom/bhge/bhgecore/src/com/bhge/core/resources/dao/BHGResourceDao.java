package com.bhge.core.resource.dao;

import java.util.List;
import com.bhge.core.model.ResourceComponentModel;

public interface BHGResourceDao
{
    List<ResourceComponentModel> getResources();

    List<ResourceComponentModel> searchResources(String keyword);

    List<ResourceComponentModel> getResourcesByCategory(String category);
}