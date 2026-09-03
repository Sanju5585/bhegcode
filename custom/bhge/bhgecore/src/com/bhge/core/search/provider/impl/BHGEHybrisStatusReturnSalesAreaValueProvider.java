package com.bhge.core.search.provider.impl;

import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.FieldValueProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.AbstractPropertyFieldValueProvider;
import org.apache.log4j.Logger;

import java.util.*;

public class BHGEHybrisStatusReturnSalesAreaValueProvider extends AbstractPropertyFieldValueProvider implements FieldValueProvider {
    private final static Logger LOG = Logger.getLogger(BHGEHybrisStatusReturnSalesAreaValueProvider.class);
    @Override
    public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
                                                 final Object model) throws FieldValueProviderException
    {
        final Collection<FieldValue> fieldValues = new ArrayList<FieldValue>();

        GEEdgeProductModel productModel = null;
        if (model instanceof GEEdgeProductModel)
        {
            productModel = (GEEdgeProductModel) model;
            final HashSet<String> listOfHybrisStatusWithSalesAreas = new HashSet<String>();
            if(!Objects.isNull(productModel.getSalesAreaData())){
                for (final BHGESalesAreaDataModel salesArea : productModel.getSalesAreaData()) {
                    if (!Objects.isNull(salesArea) && !Objects.isNull(salesArea.getHybrisStatus()) && !Objects.isNull(salesArea.getHybrisStatus().getCode())) {
                        if (salesArea.getHybrisStatus().getCode().contains("RETURN")) {
                            LOG.info("Salesorg_HybrisStatus"+salesArea.getSalesOrganization() + "_" + salesArea.getHybrisStatus());
                            listOfHybrisStatusWithSalesAreas.add(salesArea.getSalesOrganization() + "_" + salesArea.getHybrisStatus());
                        }
                    }
                }
            }
            LOG.info("ExportId_string_mv_listOfHybrisStatusWithSalesAreas--> "+indexedProperty.getExportId() + "_string_mv"+listOfHybrisStatusWithSalesAreas);
            fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", listOfHybrisStatusWithSalesAreas));
        }
        return fieldValues;
    }
}
