package com.bhge.core.interceptors;

import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.servicelayer.interceptor.InterceptorContext;
import de.hybris.platform.servicelayer.interceptor.InterceptorException;
import de.hybris.platform.servicelayer.interceptor.LoadInterceptor;
import org.apache.log4j.Logger;

import java.util.*;

public class BHGECategoryLoadInterceptor implements LoadInterceptor
{
    private static final Logger LOG = Logger.getLogger(BHGECategoryLoadInterceptor.class);

    @Override
    public void onLoad(Object model, InterceptorContext interceptorContext) throws InterceptorException {
        if (model instanceof CategoryModel)
        {
            CategoryModel categoryModel = (CategoryModel) model;
            try {
                Set<PrincipalModel> allowedPrincipalSet = categoryModel.getAllowedPrincipals() == null ? Collections.EMPTY_SET
                        : new HashSet(categoryModel.getAllowedPrincipals());
                categoryModel.setNewAllowedPrincipals(new ArrayList<>(allowedPrincipalSet));
                LOG.debug("Inside BHGECategoryLoadInterceptor for Category : " + categoryModel.getCode());
            } catch (RuntimeException re) {
                LOG.error("Exception Inside BHGECategoryLoadInterceptor for Category : " + categoryModel.getCode());
            }
        }
    }
}
