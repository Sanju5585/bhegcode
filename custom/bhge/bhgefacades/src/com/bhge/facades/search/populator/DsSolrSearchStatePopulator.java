package com.bhge.facades.search.populator;

import de.hybris.platform.category.CategoryService;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.search.data.SearchStateData;
import de.hybris.platform.commercefacades.search.solrfacetsearch.converters.populator.SolrSearchStatePopulator;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchQueryData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchQueryTermData;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import org.apache.commons.collections4.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.annotation.Resource;
import java.util.List;

public class DsSolrSearchStatePopulator  extends SolrSearchStatePopulator {

    private static final Logger LOG = LoggerFactory.getLogger(DsSolrSearchStatePopulator.class);

    public static final String DS_SOLR_CATEGORY = "ds.facet.allCategories";
    public static final String DS_SOLR_BRAND = "ds.facet.brand";

    @Resource(name = "categoryService")
    private CategoryService categoryService;

    @Resource(name = "configurationService")
    private ConfigurationService configurationService;

    /**
     * @return the configurationService
     */
    public ConfigurationService getConfigurationService()
    {
        return configurationService;
    }

    /**
     * @param configurationService
     *           the configurationService to set
     */
    public void setConfigurationService(final ConfigurationService configurationService)
    {
        this.configurationService = configurationService;
    }


    @Override
    public void populate(final SolrSearchQueryData source, final SearchStateData target)
    {
        super.populate(source, target);
        final List<SolrSearchQueryTermData> filterTerms = source.getFilterTerms();
        if (CollectionUtils.isNotEmpty(filterTerms))
        {
            if (filterTerms.size() == 1)
            {
                if (filterTerms.get(0).getKey()
                        .equalsIgnoreCase(getConfigurationService().getConfiguration().getString(DS_SOLR_CATEGORY)))
                {
                    populateCategoryDetails(filterTerms.get(0).getValue(), target);
                }
            }
            else
            {
                for (final SolrSearchQueryTermData solrSearchQueryTermData : filterTerms)
                {


                    if (solrSearchQueryTermData.getKey()
                            .equalsIgnoreCase(getConfigurationService().getConfiguration().getString(DS_SOLR_BRAND)))
                    {
                        populateCategoryDetails(solrSearchQueryTermData.getValue(), target);
                    }
                }
            }
        }
    }

    /**
     * @param categoryCode
     * @param target
     */
    private void populateCategoryDetails(final String categoryCode, final SearchStateData target)
    {
        try
        {
            final CategoryModel parentCategory = categoryService.getCategoryForCode(categoryCode);
            target.setCategoryName(parentCategory.getName());
            target.setCategoryDescription(parentCategory.getDescription());
            if (parentCategory.getPicture() != null)
            {
                target.setCategoryPictureUrl(parentCategory.getPicture().getURL());
            }
        }
        catch (final UnknownIdentifierException e)
        {
            LOG.info("Category Not found:" + e.getLocalizedMessage());
        }

    }
}
