package com.bhge.facades.product.impl;

import java.io.InputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import jakarta.annotation.Resource;

import com.bhge.core.scpi.rfc.configresponse.BHGELongConfigHeaderItemResponse;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.model.BHGECategorytoSalesOrgModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.scpi.rfc.configresponse.BHGELongConfigItemResponse;
import com.bhge.core.scpi.rfc.configresponse.BHGELongConfigResponse;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGEProductUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.core.wishlist.service.BHGEWishlistService;
import com.bhge.facades.breadcrumb.data.BHGEBreadCrumbData;
import com.bhge.facades.constants.BhgeFacadesConstants;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.order.BHGEPriceAvailabilityFacade;
import com.bhge.facades.product.BHGEProductFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGEConfigPartNumbersData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.facades.user.impl.DefaultBHGEUserProfileFacade;
import com.bhge.integration.models.services.BHGESapPlantLogSysOrgService;
import com.bhge.product.service.BHGEProductService;
import com.bhge.store.services.impl.BHGEBaseStoreServiceImpl;

import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.product.data.ProductReferenceData;
import de.hybris.platform.commercefacades.product.impl.DefaultProductFacade;
import de.hybris.platform.commerceservices.url.UrlResolver;
import de.hybris.platform.converters.ConfigurablePopulator;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.europe1.model.PriceRowModel;
import de.hybris.platform.ordersplitting.model.WarehouseModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.MediaUtil;


public class BHGEProductFacadeImpl extends DefaultProductFacade implements BHGEProductFacade
{

	private  static final Logger LOG = Logger.getLogger(BHGEProductFacadeImpl.class);

	private static final String FUTURE_STOCK_ENABLED = "storefront.products.futurestock.enabled";
	private static final String CONFIGURATION_CATEGORY = "CPQConfigurableCategory";
	private static final String ERROR_MESSAGE= "Error while fetching product - ";
	 private static final String CONFIGURATION_VALID = "S";

	private UrlResolver<ProductModel> productModelUrlResolver;
	private UrlResolver<CategoryModel> categoryModelUrlResolver;

	@Resource(name = "productConverter")
	private Converter<ProductModel, ProductData> productConverter;

	@Resource(name = "productService")
	private BHGEProductService productService;

	@Resource(name = "bhgePriceAvailabilityFacade")
	private BHGEPriceAvailabilityFacade bhgePriceAvailabilityFacade;

	@Resource
	SessionService sessionService;

	@Resource(name = "priceDataFactory")
	public PriceDataFactory priceDataFactory;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreServiceImpl baseStoreService;

	@Resource(name = "sapPlantLogSysOrgService")
	private BHGESapPlantLogSysOrgService sapPlantLogSysOrgService;
	
	@Resource(name="bhgeCartService")
	private BHGECartService bhgeCartService;

	@Resource(name = "bhgeWishlistService")
	private BHGEWishlistService bhgeWishlistService;

	@Resource
	private BHGESoldToUtil bhgeSoldToUtil;
	
	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;
	
	@Resource(name = "bhgeCartFacade")
    private BHGECartFacade bhgeCartFacade;
	
	@Resource(name = "userService")
    private UserService userService;
	
	@Resource(name = "userProfileService")
	private BHGEUserProfileService bhgeUserProfileService;

	@Resource(name = "productService")
	private BHGEProductService bhgeProductService;

	@Resource(name = "bhgeProductFacade")
	private BHGEProductFacade bhgeProductFacade;
	
	@Resource(name = "mediaService")
	private MediaService mediaService; 
	
	@Resource(name = "mediaCodeGenerator")
	private KeyGenerator mediaCodeGenerator;
	
	@Resource(name = "catalogVersionService")
	private CatalogVersionService catalogVersionService; 
	
	@Resource(name = "modelService")
	private ModelService modelService;

	@Resource(name = "defaultBhgeUserProfileFacade")
	private DefaultBHGEUserProfileFacade defaultBhgeUserProfileFecade;

	@Resource(name = "b2bCustomerFacade")
	protected CustomerFacade customerFacade;

	private static final Collection<ProductOption> OPTIONS = new ArrayList<ProductOption>(
			Arrays.asList(ProductOption.BASIC, ProductOption.PRICE, ProductOption.DESCRIPTION));
	
	@Resource(name= "productConfiguredPopulator")
	private ConfigurablePopulator<ProductModel, ProductData, ProductOption> productConfiguredPopulator;
	

	@Override
	public Converter<ProductModel, ProductData> getProductConverter()
	{
		return productConverter;
	}

	public void setGeProductConverter(final Converter<ProductModel, ProductData> productConverter)
	{
		this.productConverter = productConverter;
	}

	@Override
	public PriceData getProductPriceData(final String productCode)
	{
		try
		{
			final ProductModel productModel = userProfileService.getProductForCode(productCode);
			if (productModel != null)
			{
				final BHGESoldToData soldTo = (BHGESoldToData) sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO);
				if (soldTo != null)
				{
					final PriceRowModel priceRowModel = productService.getProductPriceData(productModel, soldTo);
					if (priceRowModel != null)
					{
						final CurrencyModel priceCurrencyModel = priceRowModel.getCurrency();
						return priceDataFactory.create(PriceDataType.BUY,
								BigDecimal.valueOf(priceRowModel.getPrice()), priceCurrencyModel);
					}
				}
			}
		}
		catch (final Exception e)
		{
			LOG.error(ERROR_MESSAGE + productCode + ExceptionUtils.getStackTrace(e));
		}

		return null;
	}
	
	
	//Added for spartacus migration
	@Override
	public PriceData getProductPriceDataWs(final String productCode, BHGESoldToUtil bhgeSoldToUtil)
	{
		try
		{
			final ProductModel productModel = userProfileService.getProductForCodeWs(productCode, bhgeSoldToUtil);
			if (productModel != null)
			{
				//final BHGESoldToData soldTo = (BHGESoldToData) sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO);
				final BHGESoldToData soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
				if (soldTo != null)
				{
					final PriceRowModel priceRowModel = productService.getProductPriceData(productModel, soldTo);
					if (priceRowModel != null)
					{
						final CurrencyModel priceCurrencyModel = priceRowModel.getCurrency();
						return priceDataFactory.create(PriceDataType.BUY,
								BigDecimal.valueOf(priceRowModel.getPrice()), priceCurrencyModel);
					}
				}
			}
		}
		catch (final Exception e)
		{
			LOG.error(ERROR_MESSAGE + productCode + ExceptionUtils.getStackTrace(e));
		}

		return null;
	}
	@Override
	public ProductData getProductForCodeAndOptionsForGuestUser(final String code, final Collection<ProductOption> options,
			final String guestSalesArea)
	{
		final ProductModel productModel = getProductService().getProductForCode(code);
		final ProductData productData = getProductConverter().convert(productModel);
		if(null != productData && StringUtils.isNotEmpty(guestSalesArea))
		{
			productData.setGuestSalesOrg(guestSalesArea);
		}
		if (options != null)
		{
			productConfiguredPopulator.populate(productModel, productData, options);
		}
		return productData;
	}

	@Override
	public PriceData getProductPriceDataForWS(final String productCode, final String guestSalesArea)
	{
		try
		{
			final ProductModel productModel = userProfileService.getProductForCode(productCode);
			if (productModel != null)
			{
				BHGESoldToData soldTo = null;
				if (userService.isAnonymousUser(userService.getCurrentUser()))
				{
					 soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfGuestUser(guestSalesArea);
				}
				else
				{
					 soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
				}
				if (soldTo != null)
				{
					final PriceRowModel priceRowModel = productService.getProductPriceData(productModel, soldTo);
					if (priceRowModel != null)
					{
						final CurrencyModel priceCurrencyModel = priceRowModel.getCurrency();
						return priceDataFactory.create(PriceDataType.BUY,
								BigDecimal.valueOf(priceRowModel.getPrice()), priceCurrencyModel);
					}
				}
			}
		}
		catch (final Exception e)
		{
			LOG.error(ERROR_MESSAGE + productCode + ExceptionUtils.getStackTrace(e));
		}

		return null;
	}

	@Override
	public List<BHGEConfigPartNumbersData> retrieveExternalConfiguration(final String configId)
	{
		return null;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.product.BHGEProductFacade#isCPQProduct(java.lang.String)
	 */
	@Override
	public Boolean isCPQProduct(final String productCode)
	{
		final ProductModel model = productService.getProductForCode(productCode);
		return BooleanUtils.isTrue(model.getSapConfigurable()) ? Boolean.TRUE : Boolean.FALSE;
	}


	@Override
	public List<String> getAllConfigProducts()
	{
		return productService.getAllConfigProducts();
	}


	@Override
	public Map<String, String> getPlantsForCurrentBaseStore()
	{
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		if (null != baseStore)
		{
			final Set<WarehouseModel> plants = sapPlantLogSysOrgService.getPlantsForSalesOrganization(baseStore);
			if (CollectionUtils.isNotEmpty(plants))
			{
				final Map<String, String> namesMap = new HashMap<String, String>();
				for (final WarehouseModel plant : plants)
				{
					//namesList.add(plant.getCode()+"-"+plant.getName());
					namesMap.put(plant.getCode(), plant.getName());
				}
				return namesMap;
			}
		}
		return null;
	}
 
	@Override
	public Map<String,String> getPlantsForMaterial(String productCode){
		GEEdgeProductModel productModel=(GEEdgeProductModel)productService.getProductForCode(productCode);
		return bhgeCartService.getPlantsForMaterial(productModel);
		}
 
	@Override
	public ProductData productDataforGuestUser(ProductData productData, String guestSalesArea)
	{
		try
		{
			if(null != guestSalesArea && StringUtils.isNoneEmpty(guestSalesArea))
			{
				productData.setGuestSalesOrg(guestSalesArea);
			}
			else
			{
				boolean allowedforGuest = false;
				final GEEdgeProductModel productModelTemp = (GEEdgeProductModel) productService.getProductForCode(productData.getCode());
				final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeFacadesConstants.GUEST_BASE_STORE_UID);
				final CountryModel countryModel = baseStoreModel.getDefaultCountry();
				final Collection<CategoryModel> allAllowedCategories = new ArrayList<CategoryModel>();
				for(CategoryModel cat : productModelTemp.getSupercategories())
				{
					allAllowedCategories.addAll(cat.getAllSupercategories());
				}
				final List<BHGECategorytoSalesOrgModel> allCategorytoSalesOrgModel = bhgeUserProfileFacade.getAllSalesOrgToCategoryForAnonymousUser();
				if(CollectionUtils.isNotEmpty(allCategorytoSalesOrgModel))
				{
					for(BHGECategorytoSalesOrgModel allCategorytoSalesOrg : allCategorytoSalesOrgModel)
					{
						if(allAllowedCategories.contains(allCategorytoSalesOrg.getCategory()))
						{
							final BHGEAnonymousUserCatalogModel anonymousUserCatalogData = bhgeUserProfileFacade.getCountryandSalesOrgMappingForAnonymousUser(allCategorytoSalesOrg.getSalesOrg(), allCategorytoSalesOrg.getDistributionChannel(),
									allCategorytoSalesOrg.getDivision(), countryModel);
							if(null != anonymousUserCatalogData)
							{
								final String guestSalesOrg = anonymousUserCatalogData.getSalesOrg() + "_" + anonymousUserCatalogData.getDistributionChannel() + "_" + anonymousUserCatalogData.getDivision();
								productData.setGuestSalesOrg(guestSalesOrg);
								allowedforGuest = true;
								break;
							}
							else
							{
								productData.setErrorCode(BhgeFacadesConstants.CategoryNotAuthorized);
							}
						}
					}
					if(BooleanUtils.isFalse(allowedforGuest))
					{
						productData.setErrorCode(BhgeFacadesConstants.CategoryNotAuthorized);
					}
				}
				else
				{
					productData.setErrorCode(BhgeFacadesConstants.CategoryNotAuthorized);
				}

			}
		}
		catch(Exception ex)
		{
			productData.setErrorCode(BhgeFacadesConstants.CategoryNotAuthorized);
		}

		return productData;
	}

	@Override
	public ProductData getProductData(String productCode, String defaultPlant, int quantity, String guestSalesArea, String productLine,String ecaCode)
	{
        final List<ProductOption> extraOptions = Arrays.asList(ProductOption.VARIANT_MATRIX_BASE, ProductOption.VARIANT_MATRIX_URL,
                ProductOption.VARIANT_MATRIX_MEDIA, ProductOption.CLASSIFICATION,
				ProductOption.VARIANT_FIRST_VARIANT, ProductOption.BASIC,
				ProductOption.URL, ProductOption.CLASSIFICATION, ProductOption.PRICE, ProductOption.SUMMARY,
				ProductOption.DESCRIPTION, ProductOption.GALLERY, ProductOption.CATEGORIES, ProductOption.REVIEW,
				ProductOption.PROMOTIONS, ProductOption.VARIANT_FULL, ProductOption.STOCK, ProductOption.VOLUME_PRICES,
				ProductOption.PRICE_RANGE, ProductOption.DELIVERY_MODE_AVAILABILITY);
        ProductData productData = new ProductData();
        try
        {
            final UserModel currentUser = userService.getCurrentUser();
            if (userService.isAnonymousUser(currentUser))
            {
            	productData.setCode(productCode);
            	productDataforGuestUser(productData, guestSalesArea);
            	if(StringUtils.isEmpty(productData.getErrorCode()))
            	{
                    productData = getProductForCodeAndOptionsForGuestUser(productCode, extraOptions, productData.getGuestSalesOrg());
            	}
            }
            else
            {
                productData = getProductForCodeAndOptionsForGuestUser(productCode, extraOptions, productData.getGuestSalesOrg());
            }
            getBreadcrumbs(productData);
			getPopulateExtraAttributes(productData);
    		if (productService.isVisibleForCurrentUser(productData.getCode()) && StringUtils.isEmpty(productData.getErrorCode()))
            {
    			if(userService.isAnonymousUser(currentUser) && null != productData.getGuestSalesOrg())
    			{
    				if(BooleanUtils.isNotTrue(productData.getIsAnonymousBuy()) && BooleanUtils.isNotTrue(productData.getIsAnonymousQuote())
    						&& BooleanUtils.isNotTrue(productData.getIsAnonymousReturn()) && BooleanUtils.isNotTrue(productData.getIsAnonymousCatalog()))
    				{
    					productData.setErrorCode(BhgeFacadesConstants.ProductNotAuthorized);
    					return productData;
    				}
    				else
    				{
    					if(null != productData.getIsAnonymousBuy() && null != productData.getGuestSalesOrg())
    					{
    						BHGEAnonymousUserCatalogModel anonymousUserCatalogModel = bhgeSoldToUtil.getAnonymousUserCatalog(productData.getGuestSalesOrg());
    						if(null != anonymousUserCatalogModel && null != anonymousUserCatalogModel.getB2BUnit())
    						{
								LOG.info("BHGEProductFacadeImpl :: getProductData-if :: " + productLine +" :: qauntity ::"+ quantity);
								//bhgeCartFacade.populateAvailabilityOnProductData(productData, defaultPlant, quantity, guestSalesArea);
								bhgePriceAvailabilityFacade.fetchAndPopulatePriceAvailabilityDetailsForFavourites(Collections.singletonList(productData), quantity,productLine,ecaCode);
								return productData;
    						}
    						else
    						{
    							productData.setBuyWithOutB2BUnit(true);
    							return productData;
    						}
    					}
    				}

    			}
    			else if (currentUser != null && currentUser instanceof GEEdgeCustomerModel)
    			{
					LOG.info("BHGEProductFacadeImpl :: getProductData-else :: " + productLine +" :: qauntity ::"+ quantity);

					//bhgeCartFacade.populateAvailabilityOnProductData(productData, defaultPlant, quantity, guestSalesArea);
					bhgePriceAvailabilityFacade.fetchAndPopulatePriceAvailabilityDetailsForFavourites(Collections.singletonList(productData), quantity,productLine,ecaCode);
                 	return productData;
    			}
            }
            else
            {
            	productData.setErrorCode(BhgeFacadesConstants.ProductNotAuthorized);
				LOG.info("Inside else condition of isVisibleForCurrentUser to check");
            }
        }
        catch(UnknownIdentifierException e)
        {
        	productData.setErrorCode(BhgeFacadesConstants.ProductNotFoud);
        }
        catch(Exception ex)
        {
        	productData.setErrorCode(BhgeFacadesConstants.ProductNotAuthorized);
			LOG.info("Exception while checking isVisibleForCurrentUser current customer" + ex);
        }
        return productData;
	}

	private void getPopulateExtraAttributes(ProductData productData)
	{
		final UserModel currentUser = userService.getCurrentUser();
		String obsoletePart = null;
		final List<ProductData> replacementPartsList = new ArrayList<ProductData>();
		final GEEdgeProductModel productModel = (GEEdgeProductModel) bhgeProductService.getProductForCode(productData.getCode());
		final BHGEProductUtil productUtil = new BHGEProductUtil();
		final HybrisStatus hybrisStatus = productUtil.getHybrisStatusForCurrentB2BUnit(productModel,
				userService);

		if (hybrisStatus != null && "OBSOLETE".equals(hybrisStatus.getCode()))
		{
			obsoletePart = productModel.getCode();
			final Collection<ProductReferenceModel> refCollection = productModel.getProductReferences();
			for (final ProductReferenceModel refModel : refCollection)
			{
				if (null != refModel.getReferenceType() && "OBSOLETE".equals(refModel.getReferenceType().getCode()))
				{
					final GEEdgeProductModel targetProd = (GEEdgeProductModel) refModel.getTarget();
					final ProductData replacementPartData = bhgeProductFacade.getProductForOptions(targetProd, OPTIONS);
					replacementPartData.setConfigurable(targetProd.getSapConfigurable());
					replacementPartsList.add(replacementPartData);
				}
			}
		}
		productData.setObsoletePart(obsoletePart);
		productData.setReplacementPartsList(replacementPartsList);
		productData.setFutureStockEnabled(Boolean.valueOf(Config.getBoolean(FUTURE_STOCK_ENABLED, false)));
		productData.setWishlistProducts(bhgeWishlistService.getWishlistProductsCodeForUser(currentUser));
		productData.setPurchasable(Boolean.TRUE);
	}

	public void getBreadcrumbs(ProductData productData)
	{		
		final ProductModel productModel = getProductService().getProductForCode(StringEscapeUtils.escapeHtml4(productData.getCode()));
		final List<BHGEBreadCrumbData> breadcrumbs = new ArrayList<>();
		final Collection<CategoryModel> categoryModels = new ArrayList<>();
		final BHGEBreadCrumbData last;
		final UserModel currentUser = userService.getCurrentUser();
		last = getProductBreadcrumb(productModel);
		if (currentUser.getUid().contains("anonymous")) {
			for (final CategoryModel Category : productModel.getSupercategories()) {
				String anonymousStatus = "false";
				for (final PrincipalModel myVal : Category.getAllowedPrincipals()) {
					if (myVal.getUid().contains("anonymous")) {
						anonymousStatus = "true";
					}
				}
				if (anonymousStatus.contains("true")) {
					categoryModels.add(Category);
				}

			}
		} else {
			for (CategoryModel productCategory : productModel.getSupercategories()) {
				if (!productCategory.getCode().equalsIgnoreCase(CONFIGURATION_CATEGORY)) {
					categoryModels.add(productCategory);
				}
			}
		}
		breadcrumbs.add(last);
		while (!categoryModels.isEmpty()) {
			CategoryModel toDisplay = null;
			toDisplay = processCategoryModels(categoryModels, toDisplay);
			categoryModels.clear();
			if (toDisplay != null) {
				breadcrumbs.add(getCategoryBreadcrumb(toDisplay));
				categoryModels.addAll(toDisplay.getSupercategories());
			}
		}
		Collections.reverse(breadcrumbs);
		productData.setBreadCrumbs(breadcrumbs);
	}
	
	
	protected CategoryModel processCategoryModels(final Collection<CategoryModel> categoryModels, final CategoryModel toDisplay)
	{
		CategoryModel categoryToDisplay = toDisplay;

		for (final CategoryModel categoryModel : categoryModels)
		{
			if (categoryToDisplay == null)
			{
				categoryToDisplay = categoryModel;
			}
		}
		return categoryToDisplay;
	}

	protected BHGEBreadCrumbData getProductBreadcrumb(final ProductModel product) {
		final String productUrl = getProductModelUrlResolver().resolve(product);
		BHGEBreadCrumbData breadCrumbData = new BHGEBreadCrumbData();
		breadCrumbData.setUrl(productUrl);
		breadCrumbData.setName(product.getName());
		breadCrumbData.setLinkClass(null);
		return breadCrumbData;
	}

	protected BHGEBreadCrumbData getCategoryBreadcrumb(final CategoryModel category) {
		final String categoryUrl = getCategoryModelUrlResolver().resolve(category);
		BHGEBreadCrumbData breadCrumbData = new BHGEBreadCrumbData();
		breadCrumbData.setUrl(categoryUrl);
		breadCrumbData.setName(category.getName());
		breadCrumbData.setLinkClass(null);
		breadCrumbData.setCategoryCode(category.getCode());
		return breadCrumbData;
	}

	public List<ProductData> getProductListData(final List<String> productCodeList, Collection<ProductOption> options, String guestSalesArea, String productLine)
	{
		List<ProductData> productDataList = new ArrayList<>();
		if (options != null && CollectionUtils.isNotEmpty(productCodeList))
		{
			try{
				if(userService.isAnonymousUser(userService.getCurrentUser())){
					for(String code: productCodeList){
						ProductData productData = new ProductData();
						productData.setCode(code);
						productDataforGuestUser(productData, guestSalesArea);
						if(StringUtils.isEmpty(productData.getErrorCode()))
						{
							productData = getProductForCodeAndOptionsForGuestUser(code, options, productData.getGuestSalesOrg());
							getBreadcrumbs(productData);
						}
						productDataList.add(productData);
					}
				}else{
					List<ProductModel> productModelList = productService.getProdListDetails(productCodeList);
					if(CollectionUtils.isNotEmpty(productModelList)) {
						for (final ProductModel productModel : productModelList) {
							ProductData productData = new ProductData();
							getProductConfiguredPopulator().populate(productModel, productData, options);
							getBreadcrumbs(productData);
							productDataList.add(productData);
						}
					}
				}
				LOG.info("BHGEProductfacadeImpl :: getProductListData : " + productLine);
				bhgePriceAvailabilityFacade.fetchAndPopulatePriceAvailabilityDetailsForFavourites(productDataList, 1, productLine,"");
			}catch (Exception ex){
				LOG.info("Exception During Product Data for Featured / Best sellar products: "+ ex.getMessage());
			}
		}
		return productDataList;
	}

	@Override
	public List<String> removeNonBuyableProducts(List<String> productCodeList)
	{
		List<String> productDataList = new ArrayList<>();
		HybrisStatus hybrisStatus = null;
		final BHGEProductUtil productUtil = new BHGEProductUtil();
		for (final String productCode : productCodeList)
		{
			GEEdgeProductModel productModel = (GEEdgeProductModel) userProfileService.getProductForCode(productCode);
			hybrisStatus = productUtil.getHybrisStatusForCurrentSalesArea(productModel,userService);
			if(hybrisStatus != null && (hybrisStatus.equals(HybrisStatus.SELL) || hybrisStatus.equals(HybrisStatus.SELLANDRETURN)))
			{
				productDataList.add(productCode);
			}
		}
		return productDataList;
	}
	
	@Override
	public MediaModel createMediaModel(final MultipartFile attachmentFile) {
		MediaModel mediaModel = modelService.create(MediaModel.class);
		try {

			final String contentType = attachmentFile.getContentType();
			final MediaFolderModel mediaFolder = mediaService.getFolder(Config.getString("awss3userdata", "customerdata"));
			mediaModel.setFolder(mediaFolder);

			String fileExtension = MediaUtil.getFileExtension(attachmentFile.getName());
			
			if (StringUtils.isBlank(fileExtension)) {
				fileExtension = MediaUtil.getFileExtension(attachmentFile.getOriginalFilename());
			}
			
			final String mediaCode = mediaCodeGenerator.generate().toString();
			mediaModel.setRealFileName(attachmentFile.getOriginalFilename());
			mediaModel.setCode(mediaCode);
			final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG, "Online");
			mediaModel.setCatalogVersion(versions);
			modelService.save(mediaModel);
			final InputStream inputStream = attachmentFile.getInputStream();
			mediaService.setStreamForMedia(mediaModel, inputStream, attachmentFile.getOriginalFilename(), contentType);

		} catch (Exception ex) {
			mediaModel = null;
			LOG.error("Error during creating Media from mutipart file ", ex);

		}
		LOG.debug("Inside BHGEConfigurationCartIntegrationFacadeImpl -- media has been created successfully");
		return mediaModel;
	}
	 

	protected UrlResolver<ProductModel> getProductModelUrlResolver()
	{
		return productModelUrlResolver;
	}


	public void setProductModelUrlResolver(final UrlResolver<ProductModel> productModelUrlResolver)
	{
		this.productModelUrlResolver = productModelUrlResolver;
	}

	protected UrlResolver<CategoryModel> getCategoryModelUrlResolver()
	{
		return categoryModelUrlResolver;
	}


	public void setCategoryModelUrlResolver(final UrlResolver<CategoryModel> categoryModelUrlResolver)
	{
		this.categoryModelUrlResolver = categoryModelUrlResolver;
	}
	
	@Override
	public List<ProductReferenceData> filterBuyableProductReferences (final List<ProductReferenceData> productReferences) {
		
		List<ProductReferenceData> buyableProductReferences = new ArrayList<>();
		HybrisStatus hybrisStatus = null;
		final BHGEProductUtil productUtil = new BHGEProductUtil();
		for (final ProductReferenceData productReference : productReferences) {
			
			final String targetProductCode = String.valueOf(productReference.getTarget().getCode());
			
			final GEEdgeProductModel productModel = (GEEdgeProductModel) userProfileService.getProductForCode(targetProductCode);
			hybrisStatus = productUtil.getHybrisStatusForCurrentSalesArea(productModel, userService);
			if(hybrisStatus != null && (hybrisStatus.equals(HybrisStatus.SELL) || hybrisStatus.equals(HybrisStatus.SELLANDRETURN))) {
				buyableProductReferences.add(productReference);
			}
		}
		return buyableProductReferences;
	}
	
	@Override
	public ProductData getValidProductData(String productCode, String productLine) {
		
		final List<ProductOption> extraOptions = Arrays.asList(ProductOption.VARIANT_MATRIX_BASE,
				ProductOption.VARIANT_MATRIX_URL, ProductOption.VARIANT_MATRIX_MEDIA, ProductOption.CLASSIFICATION,
				ProductOption.VARIANT_FIRST_VARIANT, ProductOption.BASIC, ProductOption.URL,
				ProductOption.CLASSIFICATION, ProductOption.PRICE, ProductOption.SUMMARY, ProductOption.DESCRIPTION,
				ProductOption.GALLERY, ProductOption.CATEGORIES, ProductOption.REVIEW, ProductOption.PROMOTIONS,
				ProductOption.VARIANT_FULL, ProductOption.STOCK, ProductOption.VOLUME_PRICES, ProductOption.PRICE_RANGE,
				ProductOption.DELIVERY_MODE_AVAILABILITY);
		
		ProductData productData = new ProductData();
		try {
			final UserModel currentUser = userService.getCurrentUser();
			
			if (!userService.isAnonymousUser(currentUser)) {
				productData = getProductForCodeAndOptionsForGuestUser(productCode, extraOptions, null);
			}

		} catch (UnknownIdentifierException e) {
			productData.setErrorCode(BhgeFacadesConstants.ProductNotFoud);
		} catch (Exception ex) {
			productData.setErrorCode(BhgeFacadesConstants.ProductNotAuthorized);
			LOG.info("Exception while checking isVisibleForCurrentUser current customer" + ex);
		}
		return productData;
	}

	@Override
	public BHGELongConfigResponse getConfigurationFromSAP(final Map<Integer, String> productCodes) {

		return bhgeProductService.getConfigurationFromSAP(productCodes);

	}

    @Override
	public boolean isLongConfigurationValid(final String productCode) {

		final Map<Integer, String> productCodes = new HashMap<Integer, String>();
		final int requestLineItemNumber = 1000;
		productCodes.put(requestLineItemNumber, productCode);
		boolean configurationValid = false;

		BHGELongConfigResponse bhgeLongConfigResponse = getConfigurationFromSAP(productCodes);
		if (null != bhgeLongConfigResponse.getEtResult()) {
			if (Objects.nonNull(bhgeLongConfigResponse.getEtResult())
					&& CollectionUtils.isNotEmpty(bhgeLongConfigResponse.getEtResult().getItem())) {

				for (BHGELongConfigHeaderItemResponse item : bhgeLongConfigResponse.getEtResult().getItem()) {
					final int responseLineItemNum = item.getItemNo();
					if (requestLineItemNumber == responseLineItemNum && item.getType().equalsIgnoreCase(CONFIGURATION_VALID)) {
						configurationValid = true;
						break;

					}
				}

			}

		}
		return configurationValid;
	}

}
