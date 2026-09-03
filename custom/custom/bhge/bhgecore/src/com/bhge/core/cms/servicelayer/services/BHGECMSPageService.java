/**
 *
 */
package com.bhge.core.cms.servicelayer.services;

import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.cms2.model.pages.CategoryPageModel;
import de.hybris.platform.cms2.servicelayer.services.CMSPageService;


/**
 * @author 212695810
 *
 */
public interface BHGECMSPageService extends CMSPageService
{
	CategoryPageModel getPageForCategory(CategoryModel category, String view) throws CMSItemNotFoundException;
}
