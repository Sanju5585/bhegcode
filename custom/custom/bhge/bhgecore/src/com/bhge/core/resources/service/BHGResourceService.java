package com.bhge.core.resource.service;

import java.util.List;
import com.bhge.core.data.ResourceData;

public interface BHGResourceService
{
    List<ResourceData> getResources();
    List<ResourceData> searchResources(String keyword);
}