package com.bhge.product.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.bhge.core.model.BHGECurrencyModel;
import com.bhge.core.model.GEEdgeProductLineMappingModel;
import com.bhge.core.scpi.rfc.configresponse.BHGELongConfigResponse;
import com.bhge.facades.user.data.BHGESoldToData;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.europe1.model.PriceRowModel;
import de.hybris.platform.product.ProductService;


public interface BHGEProductService extends ProductService
{

	public PriceRowModel getProductPriceData(final ProductModel productModel, final BHGESoldToData soldTo);

	//public boolean isVisibleForCurrentUser(final ProductModel productModel, final String salesArea);
	
	/**
	 * Accepts product code and determines visibility of product for current user
	 * @param productCode
	 * @return
	 */
	public boolean isVisibleForCurrentUser(final String productCode);

	public boolean isVisibleForCurrentUser(final GEEdgeProductModel productModel);

	public List<ProductReferenceModel> getMandatoryAccesories(String productId);

	public List<GEEdgeProductModel> getProductWithUnApprovedStatus();

	public List<GEEdgeProductModel> getProductWithUnApprovedStatusforGlobalCatalog();

	public List<GEEdgeProductModel> getProductsforUpdatedSalesArea(Date onDate);

	public boolean isVisibleForCurrentUser(CategoryModel categoryModel);

	public boolean isVisibleForGuestUser(CategoryModel categoryModel, String sessionSalesOrg, CountryModel defaultCountryModel);

	//public boolean isFacetVisibleForCurrentUser(String facet, String salesArea);

	public List<GEEdgeProductModel> getNewAndUpdatedProducts(final String startTime);

	public List<GEEdgeProductModel> getNewAndUpdatedProductsforGlobalCatalog(final String startTime);

	public List<GEEdgeProductLineMappingModel> getProductLineMappingItems();

	//public boolean isCategoryVisibleForProduct(final ProductModel productModel, final String salesArea);

	public Double getPriceForPriceCriteria(String materialId, Map<String, String> map);
	
	public Double getPriceForPriceCriteriaforWs(String materialId, Map<String, String> map, String guestSalesArea);

	public List<String> getAllConfigProducts();

	public List<BHGESalesAreaDataModel> getSalesAreaData(final String code, final String lastRunTime);

	public List<B2BUnitModel> getUpdatedCustomersRecords(Date onDate);

	public List<AddressModel> getUpdatedAddressRecords(Date onDate);

	public List<PriceRowModel> getUpdatedPriceRecords(Date onDate);

	public List<ProductModel> getProdListDetails(List<String> productList);

	public BHGELongConfigResponse getConfigurationFromSAP(final Map<Integer, String> productCodes);

    BHGECurrencyModel getCustomerCurrency(String b2bUnit , String productType);

    CurrencyModel getcurrencyModel(String currency);
}
