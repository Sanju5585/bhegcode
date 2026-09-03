/**
 *
 */
package com.bhge.core.util;

import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.servicelayer.model.ModelService;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;
import com.bhge.store.daos.BHGEEdgeBaseStoreDao;


/**
 * @author 212722447
 *
 */
public class BHGECategorytoproductutil
{

	private static final Logger LOG = Logger.getLogger(BHGECategorytoproductutil.class);


	@Resource(name = "bhgeCommerceCategoryService")
	private BHGECommerceCategoryService bhgeCommerceCategoryService;

	@Resource(name = "baseStoreDao")
	private BHGEEdgeBaseStoreDao baseStoreDao;

	@Resource(name = "modelService")
	private ModelService modelService;

	@Resource
	B2BUnitService b2bUnitService;

	public void categorytoProduct(final Date startTime)
	{

		final List<CategoryModel> categoryList = baseStoreDao.findCategory(startTime);
		if (!categoryList.isEmpty())
		{
			for (final CategoryModel prodcat : categoryList)
			{
				final List<GEEdgeProductModel> productList = baseStoreDao.findProducts(prodcat);

				if (!productList.isEmpty())
				{
					for (final ProductModel prod : productList)
					{
						if (prod != null && prod instanceof GEEdgeProductModel
								&& prod.getCatalogVersion().getCatalog().getId().equalsIgnoreCase("bhgeGlobalProductCatalog")
								&& prod.getCatalogVersion().getVersion().equalsIgnoreCase("Staged"))
						{
							final GEEdgeProductModel product = (GEEdgeProductModel) prod;
							final Set<PrincipalModel> allowset = new HashSet<PrincipalModel>();

							// Getting the super categories of of the product
							for (final CategoryModel productSuperCategory : product.getSupercategories())
							{
								// Adding the consolidated allowed principals of all product's super categories to Set.
								allowset.addAll(productSuperCategory.getAllowedPrincipals());
							}
							//Removing customer accounts that are not allowed to buy this product
							for (final PrincipalModel disallowedPrincipal : product.getDisallowedProdPrincipals())
							{
								if (allowset.contains(disallowedPrincipal))
								{
									allowset.remove(disallowedPrincipal);
								}
							}

							// setting the AllowedProdPrincipals value with the prepared set.
							product.setAllowedProdPrincipals(allowset);

							modelService.save(product);
							LOG.info(" Category used is :" + prodcat.getCode());
							LOG.info(" Product modified is :" + product.getCode());
						}
					}
				}
			}
		}

		LOG.info("BHGECategorytoProductJob is finished");


	}
}
