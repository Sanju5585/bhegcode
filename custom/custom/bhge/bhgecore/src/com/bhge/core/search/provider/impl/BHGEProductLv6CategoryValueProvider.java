package com.bhge.core.search.provider.impl;

import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commerceservices.search.solrfacetsearch.provider.CategorySource;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.FieldValueProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.AbstractPropertyFieldValueProvider;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


public class BHGEProductLv6CategoryValueProvider extends AbstractPropertyFieldValueProvider implements FieldValueProvider
{

    private static final Logger LOG = Logger.getLogger(BHGEProductLv6CategoryValueProvider.class);

    public CategorySource getCategorySource() {
        return categorySource;
    }

    public void setCategorySource(CategorySource categorySource) {
        this.categorySource = categorySource;
    }
    private CategorySource categorySource;
    private final static String LVL = "LVL6";

    @Override
    public Collection<FieldValue> getFieldValues(IndexConfig indexConfig, IndexedProperty indexedProperty, Object product) throws FieldValueProviderException {
        LOG.info("TA942585: Inside LVL6 Value Provider");
        final Collection<FieldValue> fieldValues = new ArrayList<FieldValue>();
        List<String> categoriesList = new ArrayList<String>();
        try{
            if(product instanceof GEEdgeProductModel productModel) {
                LOG.info("TA942585: Inside Product Instance Check");
                final Collection<CategoryModel> categories = getCategorySource().getCategoriesForConfigAndProperty(indexConfig,
                        indexedProperty, productModel);
                if(CollectionUtils.isNotEmpty(categories)){
                    LOG.info("TA942585: Inside Null Check");
                    categories.stream().filter(category -> StringUtils.contains(category.getCode(), LVL))
                            .forEach(category -> {
                                LOG.info("TA942585: Inside Category Level Check");
                                LOG.info("TA942585: Category is added to list" + category.getCode());
                                categoriesList.add(category.getCode());
                            });
                    fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", categoriesList));
                }
                return fieldValues;
            }
        }
        catch (final Exception ex){
            LOG.info("fieldValues Exception " + ex + "error" + ex.getMessage());
        }
        return null;
    }
}
