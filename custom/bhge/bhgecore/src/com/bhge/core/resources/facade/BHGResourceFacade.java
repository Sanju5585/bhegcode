package com.bhge.core.resource.facade;

import java.util.List;
import com.bhge.core.data.ResourceData;

public interface BHGResourceFacade
{
    List<ResourceData> getResources();
    List<ResourceData> searchResources(String keyword);
}