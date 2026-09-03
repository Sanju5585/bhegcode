package com.bhge.facades.user.populators;

import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;

/**
 * Converter implementation for {@link de.hybris.platform.core.model.user.UserModel} as source and
 * {@link de.hybris.platform.commercefacades.user.data.CustomerData} as target type.
 */
public class CustomerExtendedPopulator implements Populator<CustomerModel, CustomerData>
{

    @Override
    public void populate(final CustomerModel source, final CustomerData target)
    {
        if(source instanceof GEEdgeCustomerModel && null != ((GEEdgeCustomerModel)source).getIsPrivateFolderExists()) {
            target.setIsPrivateFolderExists(((GEEdgeCustomerModel) source).getIsPrivateFolderExists());
        } else {
            target.setIsPrivateFolderExists(false);
        }
    }

}
