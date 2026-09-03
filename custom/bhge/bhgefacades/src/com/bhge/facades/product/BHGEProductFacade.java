package com.bhge.facades.product;

import com.bhge.core.scpi.rfc.configresponse.BHGELongConfigResponse;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.product.data.ProductReferenceData;
import de.hybris.platform.core.model.media.MediaModel;

import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.user.data.BHGEConfigPartNumbersData;


public interface BHGEProductFacade extends ProductFacade
{

	//public ProductData getGeProductForOptions(ProductModel productModel, Collection<ProductOption> options);
	public PriceData getProductPriceData(final String productCode);

	public List<BHGEConfigPartNumbersData> retrieveExternalConfiguration(final String configId);

	public Boolean isCPQProduct(final String productCode);

	public List<String> getAllConfigProducts();

	public Map<String,String> getPlantsForCurrentBaseStore();
	public Map<String,String> getPlantsForMaterial(String productCode);

	public PriceData getProductPriceDataForWS(final String productCode, final String guestSalesArea);
	
	public ProductData productDataforGuestUser(final ProductData productData, final String guestSalesArea);
	
	public ProductData getProductData(final String decodedProductCode, final String defaultPlant, final int quantity, final String guestSalesArea, String productLine,String ecaCode);

	public ProductData getProductForCodeAndOptionsForGuestUser(final String code, final Collection<ProductOption> options,
			final String guestSalesArea);

	//Added for spartacus migration
	public PriceData getProductPriceDataWs(String productCode, BHGESoldToUtil bhgeSoldToUtil);

	public List<ProductData> getProductListData(final List<String> productCodeList, Collection<ProductOption> options, String guestSalesArea,String productLine);

	public List<String> removeNonBuyableProducts(List<String> productCodeList);

	MediaModel createMediaModel(final MultipartFile attachmentFile);

	List<ProductReferenceData> filterBuyableProductReferences(List<ProductReferenceData> productReferences);

	ProductData getValidProductData(String productCode, String productLine);

	BHGELongConfigResponse getConfigurationFromSAP(final Map<Integer, String> productCodes);

	boolean isLongConfigurationValid(String productCode);
}
