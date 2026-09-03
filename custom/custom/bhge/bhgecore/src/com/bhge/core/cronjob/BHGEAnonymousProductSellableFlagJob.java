/**
 *
 */
package com.bhge.core.cronjob;

import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.store.BaseStoreModel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.store.services.BHGEBaseStoreService;


/**
 * @author 212695810 Cronjob to set sellability flag of products under enabled guest categories to true
 *
 */
public class BHGEAnonymousProductSellableFlagJob extends AbstractJobPerformable<CronJobModel>
{

	private static final Logger LOG = Logger.getLogger(BHGEAnonymousProductSellableFlagJob.class);

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	@Resource(name = "bhgeCommerceCategoryService")
	private BHGECommerceCategoryService bhgeCommerceCategoryService;

	@Resource(name = "modelService")
	ModelService modelService;
	
	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	@Override
	public PerformResult perform(final CronJobModel job)
	{
		LOG.info("Inside BHGEAnonymousProductSellableFlagJob perform() method");

		final Set<String> subcategoryCodes = new HashSet<String>();
		final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeCoreConstants.GUEST_BASE_STORE_UID);
		final CountryModel countryModel = baseStoreModel.getDefaultCountry();
		final List<BHGEAnonymousUserCatalogModel> anonymousUserCatalogList = bhgeUserProfileDao.getCountryToUnitMappingListForAnonymousUser(countryModel);

		try
		{
			for(BHGEAnonymousUserCatalogModel anonymousUserCatalog : anonymousUserCatalogList)
			{
				if(CollectionUtils.isNotEmpty(anonymousUserCatalog.getCategories()))
				{
					//for (final String categoryCode : guestCategoryCodes)
					for (final CategoryModel categoryModel : anonymousUserCatalog.getCategories())	
					{
						//subcategoryCodes.add(categoryCode);
						//final CategoryModel categoryModel = bhgeCommerceCategoryService.getCategoryForCode(categoryCode);
						subcategoryCodes.add(categoryModel.getCode());

						for (final CategoryModel subCategory : categoryModel.getAllSubcategories())
						{
							subcategoryCodes.add(subCategory.getCode());
						}
					}
					for (final String categoryCode : subcategoryCodes)
					{
						final CategoryModel subCategoryModel = bhgeCommerceCategoryService.getCategoryForCode(categoryCode);
						for (final ProductModel productModel : subCategoryModel.getProducts())
						{
							if (productModel.getSellabilityFlag() == null
									|| (productModel.getSellabilityFlag() != null && !productModel.getSellabilityFlag()))
							{
								LOG.debug("setting sellability flag of product with code" + productModel.getCode() + "to true");
								productModel.setSellabilityFlag(Boolean.TRUE);
								modelService.save(productModel);
							}
						}
					}
				}
			}

		}
		catch (final Exception ex)
		{
			LOG.error("An exception has occured in BHGEAnonymousProductSellableFlagJob" + ex);
			return new PerformResult(CronJobResult.ERROR, CronJobStatus.ABORTED);
		}
		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}

}
