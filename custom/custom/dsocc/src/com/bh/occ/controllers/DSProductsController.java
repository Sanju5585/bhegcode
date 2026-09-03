package com.bh.occ.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.EnumSet;
import java.util.List;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletResponse;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.rma.service.BHGERmaServiceOffering;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.core.wishlist.service.BHGEWishlistService;
import com.bhge.facades.data.InventoryRequestData;
import com.bhge.facades.data.InventoryRequestProductData;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.order.BHGEPriceAvailabilityFacade;
import com.bhge.facades.order.populators.BHGECartPopulator;
import com.bhge.facades.price.BHGEVCPriceFacade;
import com.bhge.facades.product.BHGEProductFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.product.service.BHGEProductService;
import com.bhge.store.services.BHGEBaseStoreService;
import com.ds.dsocc.common.dto.BHGEVCConfigurationWsDTO;
import com.google.common.collect.Lists;

import de.hybris.platform.acceleratorfacades.order.data.PriceRangeData;
import de.hybris.platform.catalog.enums.ProductReferenceTypeEnum;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.ImageData;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.product.data.ProductReferenceData;
import de.hybris.platform.commercefacades.product.data.ProductReferencesData;
import de.hybris.platform.commercefacades.product.data.PromotionData;
import de.hybris.platform.commercefacades.product.data.ReviewData;
import de.hybris.platform.commercefacades.product.data.StockData;
import de.hybris.platform.commerceservices.request.mapping.annotation.RequestMappingOverride;
import de.hybris.platform.commercewebservicescommons.dto.product.ProductReferenceListWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.product.ProductWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.search.facetdata.ProductSearchPageWsDTO;
import de.hybris.platform.commercewebservicescommons.errors.exceptions.RequestParameterException;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;
import de.hybris.platform.sap.productconfig.facades.ConfigurationFacade;
import de.hybris.platform.sap.productconfig.facades.PricingData;
import de.hybris.platform.sap.productconfig.occ.PriceSummaryWsDTO;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
/**
 * This controller is used for search/PLP/PDP related APIs for revamped DS store
 * Added on 24/3/2021
 *
 * @author 212695810
 */
@Controller
@Tag(name = "Products")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/products")
public class DSProductsController extends DSBaseController {

    private static final Logger LOG = Logger.getLogger(DSProductsController.class);
    private static final String PRODUCT_CODE_PATH_VARIABLE_PATTERN = "/{productCode:.*}";
    private static final String FUTURE_STOCK_ENABLED = "storefront.products.futurestock.enabled";
    private static final String DUMMY_PRODUCT_CODE = "dummy.product.code";
    private static final String COMMA_SEPARATOR = ",";
    private final Collection<ProductOption> OPTIONS = new ArrayList<ProductOption>(
            Arrays.asList(ProductOption.BASIC, ProductOption.PRICE, ProductOption.DESCRIPTION));
    private static final String ERRORCODE = "5001";
    private static final EnumSet<ProductOption> PRODUCT_OPTIONS_SET = EnumSet.allOf(ProductOption.class);
    private static final String MAX_INTEGER = "2147483647";
    
    @Resource(name = "productVariantFacade")
    private ProductFacade productFacade;

    @Resource(name = "userService")
    private UserService userService;

    @Resource(name = "bhgeUserProfileFacade")
    private BHGEUserProfileFacade bhgeUserProfileFacade;

    @Resource(name = "productService")
    private BHGEProductService productService;

    @Resource(name = "baseStoreService")
    private BHGEBaseStoreService baseStoreService;

    @Resource(name = "bhgeCartFacade")
    private BHGECartFacade bhgeCartFacade;

    @Autowired
    private DSProductsHelper dsProductsHelper;

    @Autowired(required = true)
    BHGESoldToUtil bhgeSoldToUtil;

    @Resource(name = "bhgeCartService")
    private BHGECartService bhgeCartService;

    @Resource(name = "bhgeProductFacade")
    private BHGEProductFacade bhgeProductFacade;

    @Resource(name = "bhgeCartPopulator")
    private BHGECartPopulator<CartData> bhgeCartPopulator;

    @Resource(name = "bhgeWishlistService")
    private BHGEWishlistService bhgeWishlistService;

    @Resource(name = "bhgeRmaServiceOfferingService")
    private BHGERmaServiceOffering bhgeRmaServiceOfferingService;

    @Resource(name = "bhgePriceAvailabilityFacade")
    public BHGEPriceAvailabilityFacade bhgePriceAvailabilityFacade;

    @Resource
    private BHGEVCPriceFacade bhgeVCPriceFacade;
    
    @Resource(name = "sapProductConfigFacade")
	private ConfigurationFacade configFacade;

    @Resource(name = "configurationService")
    private ConfigurationService configurationService;
    

    @RequestMapping(value = "/details", method = RequestMethod.GET)
    //@CacheControl(directive = CacheControlDirective.PRIVATE, maxAge = 120)
    //@Cacheable(value = "productCache", key = "T(de.hybris.platform.commercewebservicescommons.cache.CommerceCacheKeyGenerator).generateKey(true,true,#productCode,#fields)")
    @ResponseBody
    @Operation(operationId = "getProduct", summary = "Get product details.", description = "Returns details of a single product according to a product code.")
    @ApiBaseSiteIdAndUserIdParam
    @RequestMappingOverride(priorityProperty = "dsocc.B2BProductsController.getProductByCode.priority")
    public ProductWsDTO getProduct(@RequestParam(value = "productCode", required = false) final String productCode,
    		@RequestParam(value = "quantity", required = false, defaultValue = "1") final int quantity,
    		@RequestParam(value = "defaultPlant", required = false) final String defaultPlant,
            @RequestParam(value = "productLine", required = false) final String productLine,
            @RequestParam(value = "offlineSearch", required = false) final String offlineSearch,
            @RequestParam(value="ecaCode", required= false) String ecaCode,
    		@ApiFieldsParam @RequestParam(value = "guestSalesArea", required = false) final String guestSalesArea,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
    {
        ProductWsDTO productWsDTO = null;
        ProductData productData = null;
        ecaCode=StringEscapeUtils.escapeHtml4(ecaCode)==null?StringUtils.EMPTY:StringEscapeUtils.escapeHtml4(ecaCode);
        LOG.info("DSProductsController:: Entered getProduct ecaCode :: " + ecaCode);
        if(null != productCode) {
            final String decodedProductCode = decodeWithScheme(StringEscapeUtils.escapeHtml4(productCode), UTF_8);
      
        if (StringUtils.isEmpty(offlineSearch)) {
            LOG.info("DSProductsController :: Entered getProduct :: " + decodedProductCode + "plant :: " + StringEscapeUtils.escapeHtml4(defaultPlant) + "product line :: " + productLine);
            productData = bhgeProductFacade.getProductData(StringEscapeUtils.unescapeHtml4(decodedProductCode), StringEscapeUtils.escapeHtml4(defaultPlant), quantity, StringEscapeUtils.escapeHtml4(guestSalesArea), productLine,ecaCode);
            LOG.info("product Data" + productData.getCode() + " " + productData.getName() + " " + productData.getDescription());
            productWsDTO = getDataMapper().map(productData, ProductWsDTO.class, "FULL");
            productWsDTO.setActualProductCode(productWsDTO.getCode());
            LOG.info("productWsDTO" + productWsDTO.getCode() + " " + productWsDTO.getName() + " " + productWsDTO.getDescription());
        } else {
            productWsDTO = new ProductWsDTO();
            String dummyProductCode = configurationService.getConfiguration().getString(DUMMY_PRODUCT_CODE);
            LOG.info("DSProductsController:: Dummy Product code is : " + dummyProductCode);
            final String decodedDummyProductCode = decodeWithScheme(StringEscapeUtils.escapeHtml4(productCode.toUpperCase()), UTF_8);
            if (decodedDummyProductCode.contains("-")) {
                LOG.info("DSProductsController :: Dummy Product contains highphen product code is : " + decodedDummyProductCode);
                String[] stringArray = decodedDummyProductCode.split("-");
                String productCodeFromLongNumber = stringArray[0];
                try {
                    productData = bhgeProductFacade.getProductData(StringEscapeUtils.unescapeHtml4(productCodeFromLongNumber), StringEscapeUtils.escapeHtml4(defaultPlant), quantity, StringEscapeUtils.escapeHtml4(guestSalesArea), productLine,"");
                    if (StringUtils.isNotEmpty(productData.getCode())) {
                        productWsDTO = getDataMapper().map(productData, ProductWsDTO.class, "FULL");
                        productWsDTO.setDummyProduct(false);
                        productWsDTO.setActualProductCode(productWsDTO.getCode());
                        productWsDTO.setCode(productCode);
                    } else {
                        productData = bhgeProductFacade.getProductData(StringEscapeUtils.unescapeHtml4(dummyProductCode), StringEscapeUtils.escapeHtml4(defaultPlant), quantity, StringEscapeUtils.escapeHtml4(guestSalesArea), productLine,"");
                        productWsDTO = getDataMapper().map(productData, ProductWsDTO.class, "FULL");
                        productWsDTO.setDummyProduct(true);
                        productWsDTO.setActualProductCode(productWsDTO.getCode());
                        productWsDTO.setCode(productCode);
                    }
                }catch(Exception e){
                    LOG.error("DSProductsController :: Product not found exception" + e.getStackTrace());

                }
            } else {

                LOG.info("DSProductsController :: Dummy Product not contains highphen product code is in if : " + productCode);
                productData = bhgeProductFacade.getProductData(StringEscapeUtils.unescapeHtml4(productCode.toUpperCase()), StringEscapeUtils.escapeHtml4(defaultPlant), quantity, StringEscapeUtils.escapeHtml4(guestSalesArea), productLine,"");
                if(StringUtils.isNotEmpty(productData.getCode())) {
                    productWsDTO = getDataMapper().map(productData, ProductWsDTO.class, "FULL");
                    productWsDTO.setDummyProduct(false);
                    productWsDTO.setActualProductCode(productWsDTO.getCode());
                    productWsDTO.setCode(productCode);
                } else {
                    LOG.info("DSProductsController :: Dummy Product not contains highphen product code is in else : " + dummyProductCode);
                    productData = bhgeProductFacade.getProductData(StringEscapeUtils.unescapeHtml4(dummyProductCode), StringEscapeUtils.escapeHtml4(defaultPlant), quantity, StringEscapeUtils.escapeHtml4(guestSalesArea), productLine,"");
                    productWsDTO = getDataMapper().map(productData, ProductWsDTO.class, "FULL");
                    productWsDTO.setDummyProduct(true);
                    productWsDTO.setActualProductCode(productWsDTO.getCode());
                    productWsDTO.setCode(productCode);
                }
            }
        }
          }
        return productWsDTO;
    }
    //----------PnA
    //new method will take configuration data and populate in request data


    @RequestMapping(value = "/configPrice", method = RequestMethod.POST)
    @ResponseBody
    @Operation(operationId = "getVCProductConfigPrice", summary = "Get VC product Price details.", description = "Returns product Price based on the product code.")
    @ApiBaseSiteIdAndUserIdParam
    public PriceSummaryWsDTO getVCProductPrice(@RequestBody(required = true) final BHGEVCConfigurationWsDTO configurationWsDTO,
    		@Parameter(description = "Fields mapping level") @RequestParam(required = false, defaultValue = DEFAULT_FIELD_SET) final String fields) {

		LOG.info("ConfigurationWsDTO, productCode is : " + configurationWsDTO.getProductCode() + " configId is : "
				+ configurationWsDTO.getConfigId() + " productLine is :" + configurationWsDTO.getProductLine());
		
		if(StringUtils.isBlank(configurationWsDTO.getProductCode()) || StringUtils.isBlank(configurationWsDTO.getConfigId())
				|| StringUtils.isBlank(configurationWsDTO.getProductLine())) {
			throw new RequestParameterException("invalid parameters", RequestParameterException.INVALID);
		}
		
        PriceSummaryWsDTO priceSummaryWsDTO = new PriceSummaryWsDTO();
		final ProductData productData = new ProductData();

		InventoryRequestData requestData = new InventoryRequestData();

		productData.setCode(configurationWsDTO.getProductCode());
		
		final ConfigurationData vcConfigData = populateVCConfiguration(configurationWsDTO.getConfigId());

		final List<ProductData> productDataList = Collections.singletonList(productData);
		if (CollectionUtils.isNotEmpty(productDataList)) {
			Integer count = 0;
			List<InventoryRequestProductData> inventoryRequestProductDataList = new ArrayList<>();
			for (ProductData data : productDataList) {
				InventoryRequestProductData requestProductData = new InventoryRequestProductData();
				requestProductData.setCode(data.getCode());
				requestProductData.setQuantity(1);
				requestProductData.setItemLineNumber(count);
				count++;
				inventoryRequestProductDataList.add(requestProductData);
			}
			requestData.setProductRequestList(inventoryRequestProductDataList);
            
            requestData = bhgePriceAvailabilityFacade.getPriceAndAvailability(requestData, null, configurationWsDTO.getProductLine(), vcConfigData,null);

            if(CollectionUtils.isNotEmpty(requestData.getProductRequestList())) {
                LOG.info("DSProductsController : requestData : base price is : " + requestData.getProductRequestList().get(0).getBasePrice());
                LOG.info("DSProductsController : requestData : discount price is : " + requestData.getProductRequestList().get(0).getDiscountPrice());
                LOG.info("DSProductsController : requestData : discount percentage is : " + requestData.getProductRequestList().get(0).getDiscountPercentage());
            } else {
                LOG.info("requestData : product request list empty");
            }
			
			final PricingData pricingData = bhgeVCPriceFacade.getVCPriceSummary(requestData);
			
			LOG.info("DSProductsController : priceSummaryModel : base price is : " + pricingData.getBasePrice() + " total price is : "
					+ pricingData.getCurrentTotal());
			
			priceSummaryWsDTO = getDataMapper().map(pricingData, PriceSummaryWsDTO.class);
			
        }

		return priceSummaryWsDTO;
	}

	
	private ConfigurationData populateVCConfiguration (final String configId) {
		final ConfigurationData configurationData = new ConfigurationData();
		configurationData.setConfigId(configId);
		configurationData.setGroupIdToDisplay(StringUtils.EMPTY);
		
		final ConfigurationData backendConfiguration = configFacade.getConfiguration(configurationData);
		
		return backendConfiguration;
	}


    @RequestMapping(value = "/search", method = RequestMethod.GET)
    @RequestMappingOverride
    @ResponseBody
    @Operation(operationId = "getProducts", summary = "Get a list of products and additional data", description =
            "Returns a list of products and additional data, such as available facets, "
                    + "available sorting, and pagination options. It can also include spelling suggestions. To make spelling suggestions work, you need to make sure "
                    + "that \"enableSpellCheck\" on the SearchQuery is set to \"true\" (by default, it should already be set to \"true\"). You also need to have indexed "
                    + "properties configured to be used for spellchecking.")
    @ApiBaseSiteIdAndUserIdParam
    public ProductSearchPageWsDTO getProducts(
            @Parameter(description = "Serialized query, free text search, facets. The format of a serialized query: freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2") @RequestParam(required = false) final String query,
            @Parameter(description = "The current result page requested.") @RequestParam(defaultValue = DEFAULT_CURRENT_PAGE) final int currentPage,
            @Parameter(description = "The number of results returned per page.") @RequestParam(defaultValue = DEFAULT_PAGE_SIZE) final int pageSize,
            @Parameter(description = "Sorting method applied to the return results.") @RequestParam(required = false) final String sort,
            @Parameter(description = "The context to be used in the search query.") @RequestParam(required = false) final String searchQueryContext,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FILTER) final String filter,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FILTER) final String guestSalesArea,
            final HttpServletResponse response) {
        final ProductSearchPageWsDTO result = dsProductsHelper
/*                .searchProducts(query, currentPage, pageSize, sort, addPaginationField(fields), searchQueryContext, filter, guestSalesArea);
*/       
	             .searchProducts(StringEscapeUtils.escapeHtml4(query), currentPage, pageSize, StringEscapeUtils.escapeHtml4(sort), addPaginationField(StringEscapeUtils.escapeHtml4(fields)), StringEscapeUtils.escapeHtml4(searchQueryContext), StringEscapeUtils.escapeHtml4(filter), StringEscapeUtils.escapeHtml4(guestSalesArea));
                   setTotalCountHeader(response, result.getPagination());
        return result;
    }

    @RequestMapping(value = "/productList", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "getProductList", summary = "Get product details.", description = "Returns details of list of products according to a product code list.")
    @ApiBaseSiteIdAndUserIdParam
    @RequestMappingOverride(priorityProperty = "dsocc.B2BProductsController.getProductByList.priority")
    public List<ProductWsDTO> getProductsDetail(@RequestParam(value = "productCodeList", required = false) final List<String> productList,
                                                @RequestParam(value = "productLine", required = false) final String productLine,
                                   @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
                                   @ApiFieldsParam @RequestParam(value = "guestSalesArea", required = false) final String guestSalesArea)
    {
        List<ProductWsDTO> productWsDTOList = new ArrayList<>();
        Collection<ProductOption> options = extractProductOptions(fields);
        final int MAX_PRODUCT_LIST_SIZE = Integer.valueOf(MAX_INTEGER);
        if (productList == null || productList.isEmpty()) {
            return productWsDTOList; // Return empty list if input is null or empty
        }
        if (productList.size() > MAX_PRODUCT_LIST_SIZE) {
            throw new RequestParameterException("productCodeList size exceeds allowed limit", RequestParameterException.INVALID);
        }
        List<ProductData> productData = bhgeProductFacade.getProductListData(productList, options, guestSalesArea,productLine);
        for (ProductData data : productData) {
            ProductWsDTO dto = getDataMapper().map(data, ProductWsDTO.class);
            productWsDTOList.add(dto);
        }
        return productWsDTOList;
    }

    @RequestMapping(value = "/productReferences", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "getProductList", summary = "Get related product list.", description = "Returns related list of products according to a product code.")
    @ApiBaseSiteIdAndUserIdParam
    public List<ProductWsDTO> getRelatedProducts(@RequestParam(value = "productCode", required = true) final String productCode,
                                                @RequestParam(value = "referenceType", required = false) final String referenceType,
                                                 @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
    {
        List<ProductWsDTO> productWsDTOList = new ArrayList<>();
        List<ProductOption> options = Arrays.asList(ProductOption.IMAGES, ProductOption.PRICE);
        
        final List<ProductReferenceTypeEnum> productReferenceTypeList = StringUtils.isNotEmpty(referenceType) ?
				getProductReferenceTypeEnums(referenceType) :
				List.of(ProductReferenceTypeEnum.values());
        
        final List<ProductReferenceData> productReferences = productFacade.getProductReferencesForCode(productCode,
				productReferenceTypeList, options, null);
        
        Collection<ProductOption> collection = options;
        collection = extractProductOptions(fields);
        List<String> productList=new ArrayList<>();
        for (ProductReferenceData data : productReferences) {
            productList.add(String.valueOf(data.getTarget().getCode()));
        }
        productList = bhgeProductFacade.removeNonBuyableProducts(productList);
        List<ProductData> productData = bhgeProductFacade.getProductListData(productList, collection, null,null);
        for (ProductData data : productData) {
            //if(data.getListPrice() != null && data.getListPrice().getValue().doubleValue() > 0) {
                ProductWsDTO dto = getDataMapper().map(data, ProductWsDTO.class);
                productWsDTOList.add(dto);
            //}
        }
        return productWsDTOList;
    }

    protected Collection<ProductOption> extractProductOptions(final String fields)
    {
        final ProductData tempProductData = new ProductData();
        tempProductData.setImages(Lists.newArrayList(new ImageData()));
        tempProductData.setReviews(Lists.newArrayList(new ReviewData()));
        tempProductData.setNumberOfReviews(Integer.valueOf(0));
        tempProductData.setPotentialPromotions(Lists.newArrayList(new PromotionData()));
        tempProductData.setPrice(new PriceData());
        tempProductData.setPurchasable(Boolean.FALSE);
        tempProductData.setPriceRange(new PriceRangeData());
        tempProductData.setStock(new StockData());

        final ProductWsDTO productWsDTO = getDataMapper().map(tempProductData, ProductWsDTO.class, fields);
        final boolean skipImages = CollectionUtils.isEmpty(productWsDTO.getImages());
        final EnumSet<ProductOption> options = EnumSet.allOf(ProductOption.class);
        if (skipImages)
        {
            options.remove(ProductOption.IMAGES);
            options.remove(ProductOption.GALLERY);
        }
        final boolean skipReviews = CollectionUtils.isEmpty(productWsDTO.getReviews()) && productWsDTO.getNumberOfReviews() == null;
        if (skipReviews)
        {
            options.remove(ProductOption.REVIEW);
        }
        final boolean skipPromotions = CollectionUtils.isEmpty(productWsDTO.getPotentialPromotions());
        if (skipPromotions)
        {
            options.remove(ProductOption.PROMOTIONS);
        }
        final boolean skipPrice = productWsDTO.getPrice() == null && productWsDTO.getPurchasable() == null;
        if (skipPrice)
        {
            options.remove(ProductOption.PRICE);
        }
        final boolean skipPriceRange = productWsDTO.getPriceRange() == null;
        if (skipPriceRange)
        {
            options.remove(ProductOption.PRICE_RANGE);
        }
        final boolean skipStock = productWsDTO.getStock() == null;
        if (skipStock)
        {
            options.remove(ProductOption.STOCK);
        }
        return options;
    }
    
    protected List<ProductReferenceTypeEnum> getProductReferenceTypeEnums(final String referenceType) {
		final String[] referenceTypes = referenceType.split(COMMA_SEPARATOR);
		return Arrays.stream(referenceTypes).map(ProductReferenceTypeEnum::valueOf).collect(Collectors.toList());
	}
    
    @RequestMapping(value = "/accessoriesReferences", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "getAccessoriesReferences", summary = "Retrieves the product accessories references.")
    @ApiBaseSiteIdAndUserIdParam
	public ProductReferenceListWsDTO getProductReferences(
			@RequestParam(value = "productCode", required = true) final String productCode,
			@Parameter(description = "Number of results returned per page.") @RequestParam(required = false, defaultValue = MAX_INTEGER) final int pageSize,
			@Parameter(description = "Comma-separated list of reference types. If not specified, all types of product references will be used. Example: ACCESSORIES,BASE_PRODUCT.") @RequestParam(required = false) final String referenceType,
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
	{
    	
		//final List<ProductOption> opts = Lists.newArrayList(PRODUCT_OPTIONS_SET); 
		List<ProductOption> options = Arrays.asList(ProductOption.BASIC, ProductOption.IMAGES, ProductOption.PRICE, ProductOption.GALLERY);

		final List<ProductReferenceTypeEnum> productReferenceTypeList = StringUtils.isNotEmpty(referenceType) ?
				getProductReferenceTypeEnums(referenceType) :
				List.of(ProductReferenceTypeEnum.values());

		final List<ProductReferenceData> productReferences = productFacade.getProductReferencesForCode(productCode,
				productReferenceTypeList, options, Integer.valueOf(pageSize));
		
		
		final List<ProductReferenceData> validProductReferences  = bhgeProductFacade.filterBuyableProductReferences(productReferences);
		
		if (CollectionUtils.isNotEmpty(validProductReferences)) {
			LOG.info("getProductReferences : size of valid product references " + validProductReferences.size());
		}
		
		
		for (ProductReferenceData validProductReference :  validProductReferences) {
			
			final ArrayList<String> validProductCodes = new ArrayList<String>();
			final String validTargetProductCode = String.valueOf(validProductReference.getTarget().getCode());
			validProductCodes.add(validTargetProductCode);
			LOG.info("getProductReferences : getting price for target product " + validTargetProductCode);
			
			List<ProductData> productData = bhgeProductFacade.getProductListData(validProductCodes, options, null, null);
			
			LOG.info("getProductReferences : retrived price for target product " + validTargetProductCode);
			
			if(CollectionUtils.isNotEmpty(productData)) {
				validProductReference.setTarget(productData.get(0));
			}
			
		}
		
		final ProductReferencesData productReferencesData = new ProductReferencesData();
		productReferencesData.setReferences(validProductReferences);

		return getDataMapper().map(productReferencesData, ProductReferenceListWsDTO.class, fields);
	}

    @RequestMapping(value = "/validatePartNo", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "validatePartNumber", summary = "validate the partnumber.", description = "validate the part number for the given product code.")
    @ApiBaseSiteIdAndUserIdParam
    public ProductWsDTO validatePartNumber(@RequestParam(value = "productCode", required = true) final String productCode,
                                      @RequestParam(value = "productLine", required = false) final String productLine,
                                      @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {

        ProductWsDTO productWsDTO = new ProductWsDTO();
        ProductData productData = null;
        LOG.info("DSProductsController:: Entered product code  : " + productCode);
        final String decodedProductCode = decodeWithScheme(StringEscapeUtils.escapeHtml4(productCode.toUpperCase()), UTF_8);
        
        final String dummyProductCode = configurationService.getConfiguration().getString(DUMMY_PRODUCT_CODE);
        LOG.info("DSProductsController:: Dummy Product code is : " + dummyProductCode);
        boolean configurationValid = false;
        if (decodedProductCode.contains("-")) {
            LOG.info("DSProductsController : Product code contains highphen : " + decodedProductCode);
            String[] stringArray = decodedProductCode.split("-");
            String productCodeFromLongNumber = stringArray[0];
			try {
				productData = bhgeProductFacade.getValidProductData(StringEscapeUtils.unescapeHtml4(productCodeFromLongNumber), productLine);
				productWsDTO = getDataMapper().map(productData, ProductWsDTO.class, "FULL");
				if (StringUtils.isNotEmpty(productData.getCode())) {
					productWsDTO.setBaseProductValid(true);
					productWsDTO.setDummyProduct(false);
					productWsDTO.setActualProductCode(productWsDTO.getCode());
					productWsDTO.setCode(productCode);
					// Calling SAP for the given product config valid or not
					boolean configValid = bhgeProductFacade.isLongConfigurationValid(productCode);
					LOG.info("DSProductsController : is config valid : " + configValid + " for product code "
							+ productCode);
					productWsDTO.setConfigurationValid(configValid);
					

				} else {
					productData = bhgeProductFacade.getValidProductData(StringEscapeUtils.unescapeHtml4(dummyProductCode), productLine);
					productWsDTO = getDataMapper().map(productData, ProductWsDTO.class, "FULL");
					productWsDTO.setActualProductCode(productWsDTO.getCode());
					productWsDTO.setCode(productCode);
					productWsDTO.setBaseProductValid(false);
					productWsDTO.setDummyProduct(true);
					productWsDTO.setConfigurationValid(false);
				}

			} catch (Exception e) {
                LOG.error("DSProductsController :validatePartNumber Product not found exception" + e.getStackTrace());
            }
        } else {
            LOG.info("DSProductsController : validatePartNumber Product code not contains highphen: " + dummyProductCode);
            productData = bhgeProductFacade.getValidProductData(StringEscapeUtils.unescapeHtml4(dummyProductCode), productLine);
            productWsDTO = getDataMapper().map(productData, ProductWsDTO.class, "FULL");
            productWsDTO.setDummyProduct(true);
            productWsDTO.setBaseProductValid(false);
            productWsDTO.setActualProductCode(productWsDTO.getCode());
            productWsDTO.setCode(productCode);
            productWsDTO.setConfigurationValid(false);
        }
        return productWsDTO;

    }
}