/**
 *
 */
package com.bhge.core.search.provider.impl;

import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.FieldValueProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.AbstractPropertyFieldValueProvider;
import de.hybris.platform.store.BaseStoreModel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.enums.MaterialChannelStatus;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.store.services.impl.BHGEBaseStoreServiceImpl;


/**
 * @author 212722447
 *
 */
public class BHGEAnonymousBuyorQuoteProductValueProvider extends AbstractPropertyFieldValueProvider implements FieldValueProvider
{
	private final static Logger LOG = Logger.getLogger(BHGEAnonymousSellableProductValueProvider.class);

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	@Resource(name = "bhgeCommerceCategoryService")
	private BHGECommerceCategoryService bhgeCommerceCategoryService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreServiceImpl baseStoreService;

	@Override
	public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
			final Object model) throws FieldValueProviderException
	{
		final Collection<FieldValue> fieldValues = new ArrayList<FieldValue>();
		boolean anonymousBuyorQuote = false;
		boolean allowedCategoryGuestforBuy = false;
		final boolean allowedCategoryGuestforQuote = false;
		GEEdgeProductModel productModel = null;
		final Set<CategoryModel> allowedGuestCategories = new HashSet<CategoryModel>();
		final Set<CategoryModel> allowedGuestCategoriesforBuy = new HashSet<CategoryModel>();
		final Set<CategoryModel> allowedGuestCategoriesforQuote = new HashSet<CategoryModel>();
		final List<CategoryModel> productSupercategory = new ArrayList<CategoryModel>();
		if (model instanceof GEEdgeProductModel)
		{
			productModel = (GEEdgeProductModel) model;
			final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeCoreConstants.GUEST_BASE_STORE_UID);
			final CountryModel countryModel = baseStoreModel.getDefaultCountry();
			final BHGEAnonymousUserCatalogModel anonymousUserCatalog = bhgeUserProfileDao
					.getCountryToUnitMappingForAnonymousUser(countryModel);
			if (null != anonymousUserCatalog && !anonymousUserCatalog.getCategories().isEmpty())
			{
				for (final CategoryModel buyCategory : anonymousUserCatalog.getCategories())
				{
					allowedGuestCategoriesforBuy.add(buyCategory);
				}
			}

			if (!productModel.getAllowedProdPrincipals().isEmpty())
			{
				for (final PrincipalModel allowedPrincipal : productModel.getAllowedProdPrincipals())
				{
					if (allowedPrincipal instanceof UserModel && allowedPrincipal.getUid().equalsIgnoreCase("anonymous"))
					{
						final String categoriesToConsiderForAnonymousUser = bhgeUserProfileDao.getGuestCategoriesListForUser();
						final List<String> guestCategoryCodes = StringUtils.isNotBlank(categoriesToConsiderForAnonymousUser)
								? Arrays.asList(categoriesToConsiderForAnonymousUser.split(","))
								: new ArrayList<String>();
						if (CollectionUtils.isNotEmpty(guestCategoryCodes))
						{
							for (final String categoryCode : guestCategoryCodes)
							{
								final CategoryModel category = bhgeCommerceCategoryService.getCategoryForCode(categoryCode);
								allowedGuestCategories.add(category);
							}
							/*
							 * for(CategoryModel guestCategory : allowedGuestCategories) {
							 * if(!allowedGuestCategoriesforBuy.contains(guestCategory)) {
							 * allowedGuestCategoriesforQuote.add(guestCategory); } }
							 */
							for (final CategoryModel superCategory : productModel.getSupercategories())
							{
								productSupercategory.addAll(superCategory.getAllSupercategories());
							}
							/*
							 * if(productSupercategory.stream().anyMatch(category -> allowedGuestCategories.contains(category))
							 * && productSupercategory.stream().anyMatch(category ->
							 * allowedGuestCategoriesforBuy.contains(category)))
							 */
							if (productSupercategory.stream().anyMatch(category -> allowedGuestCategories.contains(category)))
							{
								allowedCategoryGuestforBuy = true;
								break;
							}
							/*
							 * else if(!allowedGuestCategoriesforQuote.isEmpty()) {
							 * if(productSupercategory.stream().anyMatch(category -> allowedGuestCategories.contains(category))
							 * && productSupercategory.stream().anyMatch(category ->
							 * allowedGuestCategoriesforQuote.contains(category))) { allowedCategoryGuestforQuote = true;
							 * break; } }
							 */
						}
						/*
						 * else { for (final CategoryModel superCategory : productModel.getSupercategories()) {
						 * productSupercategory.addAll(superCategory.getAllSupercategories()); }
						 * if(productSupercategory.stream().anyMatch(category ->
						 * allowedGuestCategoriesforBuy.contains(category))) { allowedCategoryGuestforBuy = true; break; }
						 * else { allowedCategoryGuestforQuote = true; break; }
						 *
						 * }
						 */
					}
				}
			}

			if (allowedCategoryGuestforBuy && !productModel.getSalesAreaData().isEmpty()
					&& (null != anonymousUserCatalog && null != anonymousUserCatalog.getB2BUnit()
							&& StringUtils.isNotBlank(anonymousUserCatalog.getB2BUnit().getUid())))
			{
				final String b2bUnitUidSplit[] = anonymousUserCatalog.getB2BUnit().getUid().split("_");
				final String salesOrg = b2bUnitUidSplit[1];
				for (final BHGESalesAreaDataModel salesArea : productModel.getSalesAreaData())
				{
					if (salesArea.getSalesOrganization().equalsIgnoreCase(salesOrg)
							&& (salesArea.getHybrisStatus() == HybrisStatus.SELL
									|| salesArea.getHybrisStatus() == HybrisStatus.SELLANDRETURN
									|| salesArea.getHybrisStatus() == HybrisStatus.CATALOG))
					{
						if (salesArea.getMaterialStatus() == MaterialChannelStatus.P1
								|| salesArea.getMaterialStatus() == MaterialChannelStatus.P2
								|| salesArea.getMaterialStatus() == MaterialChannelStatus.P3
								|| salesArea.getMaterialStatus() == MaterialChannelStatus.SO
								|| salesArea.getMaterialStatus() == MaterialChannelStatus.CC)
						{
							anonymousBuyorQuote = true;
							break;
						}
					}
				}
			}
			/*
			 * else if(allowedCategoryGuestforQuote) { anonymousBuyorQuote = true; }
			 */


			fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_boolean", anonymousBuyorQuote));

		}
		return fieldValues;

	}
}
