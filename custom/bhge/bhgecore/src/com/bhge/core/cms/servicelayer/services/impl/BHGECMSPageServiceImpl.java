/**
 *
 */
package com.bhge.core.cms.servicelayer.services.impl;

import de.hybris.platform.catalog.model.CatalogModel;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.cms2.common.functions.ThrowableSupplier;
import de.hybris.platform.cms2.data.PagePreviewCriteriaData;
import de.hybris.platform.cms2.enums.CmsPageStatus;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.cms2.model.pages.AbstractPageModel;
import de.hybris.platform.cms2.model.pages.CategoryPageModel;
import de.hybris.platform.cms2.servicelayer.data.RestrictionData;
import de.hybris.platform.cms2.servicelayer.services.impl.DefaultCMSPageService;
import de.hybris.platform.core.model.type.ComposedTypeModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;

import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.cms.servicelayer.services.BHGECMSPageService;
import com.bhge.core.constants.BhgeCoreConstants;


/**
 * @author 212695810
 *
 */
public class BHGECMSPageServiceImpl extends DefaultCMSPageService implements BHGECMSPageService
{
	
	@Autowired
	private FlexibleSearchService flexibleSearchService;

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.bhge.core.cms.servicelayer.services.BHGECMSPageService#getPageForCategory(de.hybris.platform.category.model.
	 * CategoryModel, java.lang.String)
	 */
	@Override
	public CategoryPageModel getPageForCategory(final CategoryModel category, final String view) throws CMSItemNotFoundException
	{
		CategoryPageModel page = (CategoryPageModel) this.getSinglePage("CategoryPage");
		if (page != null)
		{
			LOG.debug("Only one CategoryPage for category [" + category.getCode() + "] found. Considering this as default.");
			return page;
		}
		else
		{
			final ComposedTypeModel type = this.getTypeService().getComposedTypeForCode("CategoryPage");
			final Collection versions = this.getCatalogVersionService().getSessionCatalogVersions();
			final RestrictionData data = this.getCmsDataFactory().createRestrictionData(category);
			final Collection pages = this.getCmsPageDao().findAllPagesByTypeAndCatalogVersionsAndPageStatuses(type, versions,
					Arrays.asList(new CmsPageStatus[]
					{ CmsPageStatus.ACTIVE }));
			final Collection result = this.getCmsRestrictionService().evaluatePages(pages, data);
			if(!result.isEmpty()){
				final Iterator categoryIterator = result.iterator();
				while (categoryIterator.hasNext())
				{
					page = getCategoryPageBasedOnView(view, page, categoryIterator);

				}
			}
		}
		return page;
	}

	/**
	 * @param view
	 * @param page
	 * @param categoryIterator
	 * @return
	 */
	private CategoryPageModel getCategoryPageBasedOnView(final String view, CategoryPageModel page,
			final Iterator categoryIterator)
	{
		final CategoryPageModel categoryPage = (CategoryPageModel) categoryIterator.next();
		if (view.equalsIgnoreCase(BhgeCoreConstants.GRID_TEXT))
		{
			if (categoryPage.getUid().equalsIgnoreCase(BhgeCoreConstants.PRODUCTGRID_TEXT))
			{
				page = categoryPage;
			}
		}
		else if (view.equalsIgnoreCase(BhgeCoreConstants.LIST_TEXT))
		{
			if (categoryPage.getUid().equalsIgnoreCase(BhgeCoreConstants.PRODUCTLIST_TEXT))
			{
				page = categoryPage;
			}
		}
		return page;
	}
	
	
	@Override
    public CategoryPageModel getPageForCategoryCode(String categoryCode, PagePreviewCriteriaData pagePreviewCriteria) throws CMSItemNotFoundException {
        ThrowableSupplier<AbstractPageModel> defaultSupplier = () -> {
            return this.getPageForCategoryCode(categoryCode);
        };
        ThrowableSupplier<AbstractPageModel> versionSupplier = () -> {
            return this.getPageForVersionUid(pagePreviewCriteria.getVersionUid());
        };
        return (CategoryPageModel)this.getItemByCriteria(pagePreviewCriteria, defaultSupplier, versionSupplier);
    }
	
	
	@Override
    public CategoryPageModel getPageForCategoryCode(String categoryCode) throws CMSItemNotFoundException {
        CategoryModel category;
        try {
        	LOG.info("Inside the BHGECMSPageServiceImpl for CategoryCode : " + categoryCode);
            category = this.getCategoryService().getCategoryForCode(this.getCatalogVersionforCategory(), categoryCode);
        } catch (Exception var4) {
            throw new CMSItemNotFoundException("Could not find category with code [" + categoryCode + "]", var4);
        }

        return this.getPageForCategory(category);
    }

    
    public CatalogVersionModel getCatalogVersionforCategory() {
    	LOG.info("Inside getCatalogVersionforCategory method ");
    	final CatalogModel catalog = new CatalogModel();
    	catalog.setId("ERP_CLASSIFICATION_HYB");
    	CatalogModel cat = flexibleSearchService.getModelByExample(catalog);
    	final CatalogVersionModel catalogVersion = new CatalogVersionModel();
    	catalogVersion.setVersion("ERP_IMPORT");
    	catalogVersion.setActive(true);
    	catalogVersion.setCatalog(cat);
    	LOG.info("CatalogVersionCategory is : " + catalogVersion);
    	CatalogVersionModel version = flexibleSearchService.getModelByExample(catalogVersion);
    	LOG.info("CatalogVersionModel is : " + version);
        return version;
    }
}
