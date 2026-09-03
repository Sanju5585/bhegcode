package com.bhge.core.resource.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.bhge.core.data.ResourceData;
import com.bhge.core.model.ResourceComponentModel;
import com.bhge.core.resource.dao.BHGResourceDao;
import com.bhge.core.resource.service.BHGResourceService;

import de.hybris.platform.servicelayer.user.UserService;

public class DefaultBHGResourceService implements BHGResourceService
{
    private static final Logger LOG = Logger.getLogger(DefaultBHGResourceService.class);

    private BHGResourceDao resourceDao;
    private UserService userService;

    @Override
    public List<ResourceData> getResources()
    {
        List<ResourceComponentModel> models;

        boolean isGuest = userService.isAnonymousUser(userService.getCurrentUser());

        if (isGuest)
        {
            LOG.info("Guest user detected → fetching only Registration documents");
            models = resourceDao.getResourcesByCategory("Registration");
        }
        else
        {
            models = resourceDao.getResources();
        }

        List<ResourceData> result = new ArrayList<>();

        if (models == null || models.isEmpty())
        {
            return result;
        }

        for (ResourceComponentModel model : models)
        {
            ResourceData data = new ResourceData();

            data.setName(model.getName());
            data.setLink(model.getLink());
            data.setDocumentType(model.getDocumentType());
            data.setSize(model.getSize());
            data.setCategory(model.getCategory());

            if (model.getLastUpdated() != null)
            {
                SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
                data.setLastUpdated(format.format(model.getLastUpdated()));
            }

            result.add(data);
        }

        return result;
    }

    @Override
    public List<ResourceData> searchResources(String keyword)
    {
        List<ResourceComponentModel> models =
                (keyword == null || keyword.trim().isEmpty())
                        ? resourceDao.getResources()
                        : resourceDao.searchResources(keyword);

        List<ResourceData> result = new ArrayList<>();

        if (models == null || models.isEmpty())
        {
            return result;
        }

        for (ResourceComponentModel model : models)
        {
            ResourceData data = new ResourceData();

            data.setName(model.getName());
            data.setLink(model.getLink());
            data.setDocumentType(model.getDocumentType());
            data.setSize(model.getSize());
            data.setCategory(model.getCategory());

            if (model.getLastUpdated() != null)
            {
                SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
                data.setLastUpdated(format.format(model.getLastUpdated()));
            }

            result.add(data);
        }

        return result;
    }

    public void setResourceDao(BHGResourceDao resourceDao)
    {
        this.resourceDao = resourceDao;
    }

    public void setUserService(UserService userService)
    {
        this.userService = userService;
    }
}