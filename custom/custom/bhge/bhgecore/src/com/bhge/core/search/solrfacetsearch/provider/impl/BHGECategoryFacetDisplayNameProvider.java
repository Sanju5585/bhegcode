package com.bhge.core.search.solrfacetsearch.provider.impl;

import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.category.CategoryService;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.i18n.I18NService;
import de.hybris.platform.solrfacetsearch.provider.FacetDisplayNameProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.CategoryFacetDisplayNameProvider;
import de.hybris.platform.solrfacetsearch.search.SearchQuery;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.annotation.Resource;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;

public class BHGECategoryFacetDisplayNameProvider implements FacetDisplayNameProvider {
    private static final Logger LOG = LoggerFactory.getLogger(BHGECategoryFacetDisplayNameProvider.class);
    private CategoryService categoryService;
    @Resource(name = "i18nService")
    private I18NService i18nService;
    public BHGECategoryFacetDisplayNameProvider() {
    }

    protected Locale getLocale(String isoCode) {
        String[] splittedCode = isoCode.split("_");
        Locale result;
        if (splittedCode.length == 1) {
            result = new Locale(splittedCode[0]);
        } else {
            result = new Locale(splittedCode[0], splittedCode[1]);
        }

        return result;
    }

    /**
     * Override for enabling localization fallback language
     * @param query
     * @param name
     * @return
     */
    public String getDisplayName(SearchQuery query, String name) {
        i18nService.setLocalizationFallbackEnabled(true);
        Locale locale = this.getLocale(query.getLanguage());
        LOG.info("Locale-->",locale);
        CategoryModel category = null;
        if (query.getCatalogVersions() != null) {
            category = this.getCategoryForCatalogVersions(query.getCatalogVersions(), name);
        }

        if (category == null) {
            category = this.getCategory(name);
        }

        return category != null ? category.getName(locale) : null;
    }

    public void setCategoryService(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    protected CategoryModel getCategoryForCatalogVersions(List<CatalogVersionModel> catalogVersions, String code) {
        Iterator var4 = catalogVersions.iterator();

        while(var4.hasNext()) {
            CatalogVersionModel catalogVersion = (CatalogVersionModel)var4.next();

            try {
                if (catalogVersion != null) {
                    return this.categoryService.getCategoryForCode(catalogVersion, code);
                }
            } catch (UnknownIdentifierException var5) {
            }
        }

        return null;
    }

    protected CategoryModel getCategory(String code) {
        CategoryModel category = null;

        try {
            category = this.categoryService.getCategoryForCode(code);
        } catch (UnknownIdentifierException var4) {
            LOG.error(var4.getMessage());
        }

        return category;
    }
}
