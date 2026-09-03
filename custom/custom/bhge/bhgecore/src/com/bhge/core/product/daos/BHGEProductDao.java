/**
 *
 */
package com.bhge.core.product.daos;

import java.util.List;

import com.bhge.core.model.BHGECurrencyModel;
import com.bhge.core.model.GEEdgeProductLineMappingModel;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.europe1.model.PriceRowModel;


public interface BHGEProductDao
{
	public List<ProductReferenceModel> getMandatoryAccesories(final ProductModel product);

	public List<GEEdgeProductModel> getProductWithUnApprovedStatus();

	public List<GEEdgeProductModel> getProductWithUnApprovedStatusforGlobalCatalog();

	public List<GEEdgeProductModel> getProductsforUpdatedSalesArea(final String lastRunTime);

	public List<GEEdgeProductModel> getNewAndUpdatedProducts(String startTime);

	public List<GEEdgeProductModel> getNewAndUpdatedProductsforGlobalCatalog(String startTime);

	public List<GEEdgeProductLineMappingModel> getProductLineMappingItems();

	public List<String> getAllConfigProducts();

	public List<BHGESalesAreaDataModel> getSalesAreaData(final String code, final String lastRunTime);

	public List<B2BUnitModel> getUpdatedCustomersRecords(String fromDate);

	public List<AddressModel> getUpdatedAddressRecords(String fromDate);

	public List<PriceRowModel> getUpdatedPriceRecords(String fromDate);

	public List<ProductModel> getProdListDetails(List<String> productList);


    BHGECurrencyModel getCustomerCurrency(String b2bUnit , String productType);

    CurrencyModel getcurrencyModel(String currency);
}
