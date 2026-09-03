/**
 *
 */
package com.bhge.core.search.provider.impl;

import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.core.model.user.UserGroupModel;
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
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.enums.MaterialChannelStatus;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.store.services.impl.BHGEBaseStoreServiceImpl;


/**
 * @author 212695810
 *
 */
public class BHGEAnonymousSellableProductValueProvider extends AbstractPropertyFieldValueProvider implements FieldValueProvider
{
	private final static Logger LOG = Logger.getLogger(BHGEAnonymousSellableProductValueProvider.class);

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreServiceImpl baseStoreService;

	@Override
	public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
			final Object model) throws FieldValueProviderException
	{
		final Collection<FieldValue> fieldValues = new ArrayList<FieldValue>();
		boolean anonymousSellable = false;
		GEEdgeProductModel productModel = null;
		if (model instanceof GEEdgeProductModel)
		{
			productModel = (GEEdgeProductModel) model;
			/*
			 * if (productModel.getHybrisStatus() == HybrisStatus.SELLANDRETURN || productModel.getHybrisStatus() ==
			 * HybrisStatus.RETURN) { anonymousSellable = true; }
			 */
			for (final PrincipalModel allowedPrincipal : productModel.getAllowedProdPrincipals())
			{
				// anonymous user
				if (allowedPrincipal instanceof UserGroupModel || allowedPrincipal instanceof UserModel)
				{
					final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeCoreConstants.GUEST_BASE_STORE_UID);
					final CountryModel countryModel = baseStoreModel.getDefaultCountry();
					final BHGEAnonymousUserCatalogModel anonymousUserCatalog = bhgeUserProfileDao
							.getCountryToUnitMappingForAnonymousUser(countryModel);

					if (null != anonymousUserCatalog && null != anonymousUserCatalog.getB2BUnit()
							&& StringUtils.isNotBlank(anonymousUserCatalog.getB2BUnit().getUid()))
					{
						final String b2bUnitUidSplit[] = anonymousUserCatalog.getB2BUnit().getUid().split("_");
						final String salesOrg = b2bUnitUidSplit[1];
						if (null != productModel.getSalesAreaData())
						{
							/*
							 * if(productModel.getSalesAreaData().stream().anyMatch(salesArea ->
							 * salesArea.getSalesOrganization().equalsIgnoreCase(salesOrg))) { anonymousSellable = true; break;
							 * }
							 */
							for (final BHGESalesAreaDataModel salesArea : productModel.getSalesAreaData())
							{
								if (salesArea.getSalesOrganization().equalsIgnoreCase(salesOrg)
										&& salesArea.getHybrisStatus() != HybrisStatus.OBSOLETE
										&& salesArea.getHybrisStatus() != HybrisStatus.RETURN
										&& (salesArea.getMaterialStatus() == MaterialChannelStatus.P1
												|| salesArea.getMaterialStatus() == MaterialChannelStatus.P2
												|| salesArea.getMaterialStatus() == MaterialChannelStatus.P3
												|| salesArea.getMaterialStatus() == MaterialChannelStatus.SO
												|| salesArea.getMaterialStatus() == MaterialChannelStatus.CC)
										&& !(salesArea.getHybrisStatus() == HybrisStatus.CATALOG
												&& salesArea.getMaterialStatus() == MaterialChannelStatus.CC))
								{
									anonymousSellable = true;
									break;
								}
							}
						}


					}
					/*
					 * if (productModel.getHybrisStatus() == HybrisStatus.SELL || productModel.getHybrisStatus() ==
					 * HybrisStatus.SELLANDRETURN || productModel.getHybrisStatus() == HybrisStatus.RETURN ||
					 * productModel.getHybrisStatus() == HybrisStatus.CATALOG || productModel.getHybrisStatus() ==
					 * HybrisStatus.OBSOLETE) { anonymousSellable = true; } break;
					 */
				}
			}
			anonymousSellable = filterProductBasedOnSellabilityFlag(anonymousSellable, productModel);

			fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_boolean", anonymousSellable));
		}
		return fieldValues;
	}

	/**
	 * Business requirement to hide some products as on 18/11/2019
	 *
	 * @param anonymousSellable
	 * @param productModel
	 * @return
	 */
	private boolean filterProductBasedOnSellabilityFlag(boolean anonymousSellable, final GEEdgeProductModel productModel)
	{
		//Handle product display for UTProbes and other categories
		final String categoriesToConsiderForAnonymousUser = bhgeUserProfileDao.getGuestCategoriesListForUser();
		final List<String> guestCategoryCodes = StringUtils.isNotBlank(categoriesToConsiderForAnonymousUser)
				? Arrays.asList(categoriesToConsiderForAnonymousUser.split(","))
				: new ArrayList<String>();
		if (anonymousSellable && CollectionUtils.isNotEmpty(guestCategoryCodes))
		{
			final List<String> productSupercategoryCodes = new ArrayList<String>();
			for (final CategoryModel superCategory : productModel.getSupercategories())
			{
				for (final CategoryModel superCat : superCategory.getAllSupercategories())
				{
					productSupercategoryCodes.add(superCat.getCode());
				}
			}
			if (productSupercategoryCodes.stream().noneMatch(categoryCode -> guestCategoryCodes.contains(categoryCode))
					|| (productSupercategoryCodes.stream().anyMatch(categoryCode -> guestCategoryCodes.contains(categoryCode))
							&& (productModel.getSellabilityFlag() == null || productModel.getSellabilityFlag() == false)))
			{
				anonymousSellable = false;
			}
		}
		return anonymousSellable;
	}
}
