package com.bhge.core.search.provider.impl;

import com.bhge.core.enums.HybrisStatus;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.FieldValueProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.AbstractPropertyFieldValueProvider;
import org.apache.commons.collections4.CollectionUtils;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

public class BHNoSellProductValueProvider extends AbstractPropertyFieldValueProvider
        implements FieldValueProvider {

    @Override
    public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
                                                 final Object model) {
        final Collection<FieldValue> fieldValues = new ArrayList<>();
        if (model != null) {
            GEEdgeProductModel productModel = null;
            if (model instanceof GEEdgeProductModel)
            {
                productModel = (GEEdgeProductModel) model;
                final HashSet<String> ne_plants = new HashSet<>();
                Collection<BHGESalesAreaDataModel> salesAreaModels = productModel.getSalesAreaData();
                if (CollectionUtils.isNotEmpty(salesAreaModels)) {
                    for (BHGESalesAreaDataModel bhgeSalesAreaModel : salesAreaModels) {
                        if (bhgeSalesAreaModel.getHybrisStatus()!=null && bhgeSalesAreaModel.getHybrisStatus().equals(HybrisStatus.NOSELL)) {
                            ne_plants.add(bhgeSalesAreaModel.getSalesOrganization());
                        }
                    }
                }

                fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", ne_plants));
            }
        }

        return fieldValues;
    }
}
