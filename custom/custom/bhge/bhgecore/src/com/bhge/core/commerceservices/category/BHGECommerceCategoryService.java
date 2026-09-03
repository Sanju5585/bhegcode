/**
 *
 */
package com.bhge.core.commerceservices.category;

import de.hybris.platform.commercefacades.product.data.CategoryData;
import de.hybris.platform.commerceservices.category.CommerceCategoryService;
import de.hybris.platform.core.model.c2l.CountryModel;

import java.util.List;
import java.util.Set;

import com.bhge.core.category.data.BHGECategoryData;

/**
 * @author 212695810
 *
 */
public interface BHGECommerceCategoryService extends CommerceCategoryService
{
	List<BHGECategoryData> getAllCategoriesForCustomer();
	
	List<BHGECategoryData> getAllCategoriesForCustomerforGuest(String sessionSalesOrg, CountryModel defaultCountryModel);
		
	List<CategoryData> getAllCategoriesForCustomerAccount();
	
	List<CategoryData> getAllCategoriesForCustomerforGuestforWS(String guestSalesArea, CountryModel defaultCountryModel);
	
	List<CategoryData> fetchAllCategories(String guestSalesArea);
	
	CategoryData getBreadCrumbsForCategory(String categoryId);
}
