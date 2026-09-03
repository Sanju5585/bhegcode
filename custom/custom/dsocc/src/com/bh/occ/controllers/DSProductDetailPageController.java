package com.bh.occ.controllers;

import com.bhge.core.enums.GEEdgeProductType;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.model.BHGECategorytoSalesOrgModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.rma.service.BHGERmaServiceOffering;
import com.bhge.core.util.BHGEProductUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.core.wishlist.service.BHGEWishlistService;
import com.bhge.facades.constants.BhgeFacadesConstants;
import com.bhge.facades.data.BHGEAvailabilityCheckFormData;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.order.populators.BHGECartPopulator;
import com.bhge.facades.product.BHGEProductFacade;
import com.bhge.facades.product.data.BHGEProductAccessData;
import com.bhge.facades.product.data.RMAData;
import com.bhge.facades.rma.data.BHGERmaOfferingData;
import com.bhge.facades.rma.data.OfferDescriptionData;
import com.bhge.facades.rma.data.OfferingData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.product.service.BHGEProductService;
import com.bhge.store.services.BHGEBaseStoreService;
import com.ds.dsocc.common.dto.ProductDetailsWsDTO;
import de.hybris.platform.acceleratorservices.controllers.page.PageType;
import de.hybris.platform.acceleratorservices.data.RequestContextData;
import de.hybris.platform.acceleratorservices.util.SpringHelper;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.ClassificationData;
import de.hybris.platform.commercefacades.product.data.ImageData;
import de.hybris.platform.commercefacades.product.data.ImageDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercewebservicescommons.dto.order.CartWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.product.ImageWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.product.ProductWsDTO;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;
import de.hybris.platform.webservicescommons.mapping.FieldSetLevelHelper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.ListUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.util.*;

/**
 * This controller is used for search/PLP/PDP related APIs for revamped DS store
 * Added on 24/3/2021
 *
 * @author 212695810
 */
@Controller
@Tag(name = "Products Details")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/productDetails")
public class DSProductDetailPageController  extends DSBaseController {

    private static final Logger LOG = Logger.getLogger(DSProductDetailPageController.class);
    private static final String PRODUCT_CODE_PATH_VARIABLE_PATTERN = "/{productCode:.*}";
    private static final String FUTURE_STOCK_ENABLED = "storefront.products.futurestock.enabled";


    private final Collection<ProductOption> OPTIONS = new ArrayList<ProductOption>(
            Arrays.asList(ProductOption.BASIC, ProductOption.PRICE, ProductOption.DESCRIPTION));

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

    //@Resource(name = "dsProductsHelper")
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

/*    @Resource(name = "variantSortStrategy")
    private VariantSortStrategy variantSortStrategy;*/

    @Resource(name = "bhgeRmaServiceOfferingService")
    private BHGERmaServiceOffering bhgeRmaServiceOfferingService;

    @RequestMapping(value = PRODUCT_CODE_PATH_VARIABLE_PATTERN, method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "PDP", summary ="Product Detail page", description = "Product Detail page")
    @ApiBaseSiteIdAndUserIdParam
    public ProductDetailsWsDTO productDetail(@ApiFieldsParam @RequestParam(required = false, defaultValue = FieldSetLevelHelper.DEFAULT_LEVEL) final String fields,
                                             @PathVariable("productCode") final String encodedProductCode, @RequestParam(value = "quantity", required = false, defaultValue = "1") final int quantity, @RequestParam(value = "defaultPlant", required = false) final String defaultPlant, final HttpServletRequest request, final HttpServletResponse response)
            throws CMSItemNotFoundException, UnsupportedEncodingException {
        ProductDetailsWsDTO productDetailsWsDTO = new ProductDetailsWsDTO();
        String salesArea = null;
        String obsoletePart = null;
        CartModel cartModel = null;
        final CartData cartData = new CartData();
        final String productCode = decodeWithScheme(StringEscapeUtils.escapeHtml4(encodedProductCode), UTF_8);

        if (userService.isAnonymousUser(userService.getCurrentUser())) {
            if (Objects.isNull(bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs())) {
                final GEEdgeProductModel productModelTemp = (GEEdgeProductModel) productService.getProductForCode(productCode);
                final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeFacadesConstants.GUEST_BASE_STORE_UID);
                final CountryModel countryModel = baseStoreModel.getDefaultCountry();
                final Collection<CategoryModel> allAllowedCategories = new ArrayList<CategoryModel>();
                for (CategoryModel cat : productModelTemp.getSupercategories()) {
                    allAllowedCategories.addAll(cat.getAllSupercategories());
                }
                final List<BHGECategorytoSalesOrgModel> allCategorytoSalesOrgModel = bhgeUserProfileFacade.getAllSalesOrgToCategoryForAnonymousUser();
                if (CollectionUtils.isNotEmpty(allCategorytoSalesOrgModel)) {
                    for (BHGECategorytoSalesOrgModel allCategorytoSalesOrg : allCategorytoSalesOrgModel) {
                        if (allAllowedCategories.contains(allCategorytoSalesOrg.getCategory())) {
                            final BHGEAnonymousUserCatalogModel anonymousUserCatalogData = bhgeUserProfileFacade.getCountryandSalesOrgMappingForAnonymousUser(allCategorytoSalesOrg.getSalesOrg(), allCategorytoSalesOrg.getDistributionChannel(),
                                    allCategorytoSalesOrg.getDivision(), countryModel);
                            if (null != anonymousUserCatalogData) {
                                final String defaultSessionSalesOrg = anonymousUserCatalogData.getSalesOrg() + "_" + anonymousUserCatalogData.getDistributionChannel() + "_" + anonymousUserCatalogData.getDivision();
                                // Commenting the session related code
                                //getSessionService().setAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESORG, defaultSessionSalesOrg);
                                //setSessionParameters(anonymousUserCatalogData);
                                break;
                            } else {
                                //prepareNotFoundPage(model, response);
                                //return ControllerConstants.Views.Pages.Error.CategoryNotAuthorized;
                                return productDetailsWsDTO;
                            }
                        }
                    }
                } else {
					/*prepareNotFoundPage(model, response);
					return ControllerConstants.Views.Pages.Error.CategoryNotAuthorized;		*/
                    return productDetailsWsDTO;
                }
            }
        }

        final List<ProductOption> extraOptions = Arrays.asList(ProductOption.VARIANT_MATRIX_BASE, ProductOption.VARIANT_MATRIX_URL,
                ProductOption.VARIANT_MATRIX_MEDIA, ProductOption.CLASSIFICATION);

        final ProductData productData = productFacade.getProductForCodeAndOptions(productCode, extraOptions);
        final GEEdgeProductModel productModel = (GEEdgeProductModel) productService.getProductForCode(productCode);
        if (userService.isAnonymousUser(userService.getCurrentUser())) {
            if (org.apache.commons.lang3.BooleanUtils.isNotTrue(productData.getIsAnonymousBuy()) && org.apache.commons.lang3.BooleanUtils.isNotTrue(productData.getIsAnonymousQuote())
                    && org.apache.commons.lang3.BooleanUtils.isNotTrue(productData.getIsAnonymousReturn()) && org.apache.commons.lang3.BooleanUtils.isNotTrue(productData.getIsAnonymousCatalog())) {
                // Error scenario of access denied for user
				/*prepareNotFoundPage(model, response);
				return ControllerConstants.Views.Pages.Error.CategoryNotAuthorized;*/
                return productDetailsWsDTO;
            }
        }
        //Restrict products for FPT and non FPT products based on user role
        if (!productService.isVisibleForCurrentUser(productModel)) {
            // Error scenario of access denied for user
			/*prepareNotFoundPage(model, response);
			return ControllerConstants.Views.Pages.Error.CategoryNotAuthorized;*/
            return productDetailsWsDTO;
        }
        final UserModel currentUser = userService.getCurrentUser();
        final List<ProductData> replacementPartsList = new ArrayList<ProductData>();
        final BHGEAvailabilityCheckFormData formData = new BHGEAvailabilityCheckFormData();
        formData.setPartNum(productCode);
        formData.setQty(quantity);
        if (currentUser != null && currentUser instanceof GEEdgeCustomerModel) {
            salesArea = ((GEEdgeCustomerModel) currentUser).getDefaultB2BUnit().getUid();
            LOG.debug(" ############### Checking the Price and Availability of " + quantity
                    + " quantity of Product with Part Number " + productCode + " from the PDP Page ");
            cartModel = bhgeCartFacade.getAvailabilityDetailsForMaterials(formData);
        } else if (userService.isAnonymousUser(currentUser) && null != productData.getIsAnonymousBuy()) {
            final B2BUnitModel defaultB2BUnit = bhgeSoldToUtil.getDefaultB2BUnitModelCurrentUser();
            if (null != defaultB2BUnit) {
                salesArea = defaultB2BUnit.getUid();
                LOG.debug(" ############### Checking the Price and Availability of " + quantity
                        + " quantity of Product with Part Number " + productCode + " from the PDP Page ");
                //cartModel = bhgeCartFacade.getAvailabilityDetailsForMaterialsForWS(formData);
            } else {
                //model.addAttribute("buyWithOutB2BUnit", true);
                productDetailsWsDTO.setBuyWithOutB2BUnit(true);
            }
        }
        if (productModel.getProductType() != null && productModel.getProductType().getCode() != null
                && GEEdgeProductType.FPT.getCode().equalsIgnoreCase(productModel.getProductType().getCode())) {
            //.addAttribute("isFptProduct", "YES");
            productDetailsWsDTO.setIsFptProduct("YES");
        }
        if (cartModel != null) {
            if (null != defaultPlant && StringUtils.isNotEmpty(defaultPlant)) {
                cartModel.setIsShipCompleteOrder(Boolean.TRUE);
                bhgeCartService.updateDefaultPlantForEntry(cartModel.getCode(), defaultPlant, 0);
                //model.addAttribute("availbilityList", "true");
                productDetailsWsDTO.setAvailbilityList("true");
            }
            final BHGEProductUtil productUtil = new BHGEProductUtil();
            final HybrisStatus hybrisStatus = productUtil.getHybrisStatusForCurrentSalesAreaForWS(productModel,
                    userService, bhgeSoldToUtil);
            if (hybrisStatus != null && "OBSOLETE".equals(hybrisStatus.getCode())) {
                obsoletePart = productModel.getCode();
                final Collection<ProductReferenceModel> refCollection = productModel.getProductReferences();
                for (final ProductReferenceModel refModel : refCollection) {
                    if (null != refModel.getReferenceType() && "OBSOLETE".equals(refModel.getReferenceType().getCode())) {
                        final GEEdgeProductModel targetProd = (GEEdgeProductModel) refModel.getTarget();
                        final ProductData replacementPartData = bhgeProductFacade.getProductForOptions(targetProd, OPTIONS);
                        replacementPartData.setConfigurable(targetProd.getSapConfigurable());
                        replacementPartsList.add(replacementPartData);
                    }
                }
            }
            bhgeCartPopulator.populate(cartModel, cartData);
            bhgeCartFacade.removeCart(cartModel);
        } else {
            LOG.debug("PDP Price Check: Cart Model is Null");
            //model.addAttribute("error", productCode);
            productDetailsWsDTO.setError(productCode);
        }
        if (productData != null) {
            productData.setConfigurable(bhgeProductFacade.isCPQProduct(productCode));
        }
        if (bhgeProductFacade.isCPQProduct(productCode)) {
            Map<String, String> plants = null;
            plants = bhgeProductFacade.getPlantsForMaterial(productCode);
            if (plants != null) {
                //model.addAttribute("plantList", plants);
                productDetailsWsDTO.setPlantList(plants);
            }
        }

        // TODO : Check bellow commented redirection code which looks not required.
        /*final String redirection = checkRequestUrl(request, response, productDataUrlResolver.resolve(productData));
        if (StringUtils.isNotEmpty(redirection)) {
            return redirection;
        }*/

        //updatePageTitle(productCode, model);
        LOG.debug("GET:Product variant option populate start ");
        populateProductDetailForDisplay(productCode, productDetailsWsDTO, request, extraOptions);
        LOG.debug("GET:Product variant option populate end ");
				/*model.addAttribute("updatedQuanity", quantity);
				model.addAttribute("cartData", cartData);
				model.addAttribute(new ReviewForm());
				model.addAttribute("pageType", PageType.PRODUCT.name());
				model.addAttribute("obsoletePart", obsoletePart);
				model.addAttribute("replacementPartsList", replacementPartsList);
				model.addAttribute("futureStockEnabled", Boolean.valueOf(Config.getBoolean(FUTURE_STOCK_ENABLED, false)));
				model.addAttribute("showChangeSoldto", Boolean.TRUE);
				model.addAttribute("wishlistProducts", bhgeWishlistService.getWishlistProductsCodeForUser(currentUser));*/


        productDetailsWsDTO.setUpdatedQuanity(quantity);
        productDetailsWsDTO.setCartData(getDataMapper().map(cartData, CartWsDTO.class, "FULL"));
        productDetailsWsDTO.setPageType(PageType.PRODUCT.name());
        productDetailsWsDTO.setObsoletePart(obsoletePart);
        productDetailsWsDTO.setReplacementPartsList(getReplacementPartsList(replacementPartsList));
        productDetailsWsDTO.setFutureStockEnabled(Boolean.valueOf(Config.getBoolean(FUTURE_STOCK_ENABLED, false)));
        productDetailsWsDTO.setShowChangeSoldto(Boolean.TRUE);
        productDetailsWsDTO.setWishlistProducts(bhgeWishlistService.getWishlistProductsCodeForUser(currentUser));

        // Not required for WS
        /*final String metaKeywords = MetaSanitizerUtil.sanitizeKeywords(productData.getKeywords());
        final String metaDescription = MetaSanitizerUtil.sanitizeDescription(productData.getDescription());
        setUpMetaData(model, metaKeywords, metaDescription);
        return getViewForPage(model);*/

        return productDetailsWsDTO;
    }

    private List<ProductWsDTO> getReplacementPartsList(List<ProductData> replacementPartsList) {
        List<ProductWsDTO> productWsDTOS = new ArrayList<>();
        replacementPartsList.forEach(productData -> {
            productWsDTOS.add(getDataMapper().map(productData, ProductWsDTO.class, "FULL"));
        });
        return productWsDTOS;
    }

    protected void populateProductDetailForDisplay(final String productCode, final ProductDetailsWsDTO productDetailsWsDTO, final HttpServletRequest request,
                                                   final List<ProductOption> extraOptions) throws CMSItemNotFoundException
    {
        final ProductModel productModel = productService.getProductForCode(productCode);

        //getRequestContextData(request).setProduct(productModel);

        final List<ProductOption> options = new ArrayList<>(Arrays.asList(ProductOption.VARIANT_FIRST_VARIANT, ProductOption.BASIC,
                ProductOption.URL, ProductOption.CLASSIFICATION, ProductOption.PRICE, ProductOption.SUMMARY,
                ProductOption.DESCRIPTION, ProductOption.GALLERY, ProductOption.CATEGORIES, ProductOption.REVIEW,
                ProductOption.PROMOTIONS, ProductOption.VARIANT_FULL, ProductOption.STOCK, ProductOption.VOLUME_PRICES,
                ProductOption.PRICE_RANGE, ProductOption.DELIVERY_MODE_AVAILABILITY));

        options.addAll(extraOptions);
        try
        {
            final ProductData productData = productFacade.getProductForCodeAndOptions(productCode, options);
            //Populate service offerings on the sales area access data object
            populateServiceOfferingsOnProduct(productData);
            if (productData != null)
            {
                productData.setConfigurable(bhgeProductFacade.isCPQProduct(productCode));
            }

            //TODO : check below commented line
            //sortVariantOptionData(productData);
            //storeCmsPageInModel(model, getPageForProduct(productCode));
            populateProductData(productData, productDetailsWsDTO);
            //model.addAttribute(WebConstants.BREADCRUMBS_KEY, productBreadcrumbBuilder.getBreadcrumbs(productCode));

            if (CollectionUtils.isNotEmpty(productData.getVariantMatrix()))
            {
                productDetailsWsDTO.setMultiDimensionalProduct(Boolean.valueOf(CollectionUtils.isNotEmpty(productData.getVariantMatrix())));
                /*model.addAttribute(WebConstants.MULTI_DIMENSIONAL_PRODUCT,
                        Boolean.valueOf(CollectionUtils.isNotEmpty(productData.getVariantMatrix())));*/
            }
        }
        catch (final Exception e)
        {
            LOG.error("Error occured " + e);
        }
    }

/*
    protected void sortVariantOptionData(final ProductData productData)
    {
        if (CollectionUtils.isNotEmpty(productData.getBaseOptions()))
        {
            for (final BaseOptionData baseOptionData : productData.getBaseOptions())
            {
                if (CollectionUtils.isNotEmpty(baseOptionData.getOptions()))
                {
                    Collections.sort(baseOptionData.getOptions(), variantSortStrategy);
                }
            }
        }

        if (CollectionUtils.isNotEmpty(productData.getVariantOptions()))
        {
            Collections.sort(productData.getVariantOptions(), variantSortStrategy);
        }
    }
*/

    /**
     * Populates the service offerings for the product
     *
     * @param productData
     */
    private void populateServiceOfferingsOnProduct(final ProductData productData)
    {
        LOG.info("Inside populateServiceOfferingsOnProduct() in ProductPageController");
        if (productData.getProductAccessData() != null && productData.getProductAccessData().isIsService())
        {
            populateServiceOfferings(productData.getProductAccessData(), productData.getCode());
        }
    }

    /**
     * Populates the service offerings for the product
     *
     */
    private void populateServiceOfferings(final BHGEProductAccessData accessData, final String productCode)
    {
        List<BHGERmaOfferingData> serviceOfferingsData = new ArrayList<BHGERmaOfferingData>();
        final List<RMAData> productList = new ArrayList<RMAData>();
        final Set<String> finalOfferingCodes = new HashSet<String>();
        final RMAData currentProduct = new RMAData();
        currentProduct.setMaterialNumber(productCode);
        productList.add(currentProduct);
        serviceOfferingsData = bhgeRmaServiceOfferingService.getServiceOffering(productList, false, null, null);
        for (final BHGERmaOfferingData serviceOfferingData : serviceOfferingsData)
        {
            final List<OfferingData> offeringList = serviceOfferingData.getOfferingsDataTable().get(productCode);
            for (final OfferingData offering : ListUtils.emptyIfNull(offeringList))
            {
                final OfferDescriptionData offeringData = serviceOfferingData.getOfferDescriptionDataTable().stream()
                        .filter(data -> data.getServiceOffering().equalsIgnoreCase(offering.getServiceOffering())).findFirst()
                        .orElse(new OfferDescriptionData());
                finalOfferingCodes.add(offeringData.getCategory());
            }
        }
        accessData.setAvailableServiceOfferingCodes(finalOfferingCodes);
    }

    /**
     * Helper method to lookup a spring bean in the context of a request. This should only be used to lookup beans that
     * are request scoped. The looked up bean is cached in the request attributes so it should not have a narrower scope
     * than request scope. This method should not be used for beans that could be injected into this bean.
     *
     * @param request
     *           the current request
     * @param beanName
     *           the name of the bean to lookup
     * @param beanType
     *           the expected type of the bean
     * @param <T>
     *           the expected type of the bean
     * @return the bean found or <tt>null</tt>
     */
    protected <T> T getBean(final HttpServletRequest request, final String beanName, final Class<T> beanType)
    {
        return SpringHelper.getSpringBean(request, beanName, beanType, true);
    }

    protected RequestContextData getRequestContextData(final HttpServletRequest request)
    {
        return getBean(request, "requestContextData", RequestContextData.class);
    }

    protected void populateProductData(final ProductData productData, final ProductDetailsWsDTO productDetailsWsDTO)
    {
        final List<String> categoryCodes = new ArrayList<String>();
        //Populate specific classification data on product based on category selected
        /*final List<Breadcrumb> breadcrumbs = productBreadcrumbBuilder.getBreadcrumbs(productData.getCode());
        final List<String> categoryCodes = new ArrayList<String>();
        for (final Breadcrumb breadcrumb : breadcrumbs)
        {
            categoryCodes.add(breadcrumb.getCategoryCode());
        }*/
        if (productData.getCategoryWithClassifications() != null
                && CollectionUtils.isNotEmpty(productData.getCategoryWithClassifications().keySet())
                && productData.getCategoryWithClassifications().keySet().stream()
                .anyMatch(categoryCode -> categoryCodes.contains(categoryCode)))
        {
            final Optional<String> categoryCode = categoryCodes.stream()
                    .filter(catCode -> productData.getCategoryWithClassifications().keySet().contains(catCode)).findFirst();
            final List<ClassificationData> classificationDataList = new ArrayList<ClassificationData>();
            final ClassificationData classificationData = productData.getCategoryWithClassifications().get(categoryCode.get());
            classificationDataList.add(classificationData);
            productData.setClassifications(classificationDataList);
        }
        else
        {
            productData.setClassifications(null);
        }

        // TODO : Need to work on this images section
        // model.setGalleryImages(getGalleryImages(productData));
        //model.addAttribute("galleryImages", getGalleryImages(productData));
        productDetailsWsDTO.setGalleryImages(getGalleryImages(productData));
        productDetailsWsDTO.setProduct(getDataMapper().map(productData, ProductWsDTO.class, "FULL"));
        //model.addAttribute("product", productData);

        // TODO : Need to work on this Configuration section
        /*if (productData.getConfigurable())
        {
            final List<ConfigurationInfoData> configurations = productFacade.getConfiguratorSettingsForCode(productData.getCode());
            if (CollectionUtils.isNotEmpty(configurations))
            {
                model.addAttribute("configuratorType", configurations.get(0).getConfiguratorType());
            }
        }*/
    }

    protected List<Map<String, ImageWsDTO>> getGalleryImages(final ProductData productData)
    {
        final List<Map<String, ImageWsDTO>> galleryImages = new ArrayList<>();
        if (CollectionUtils.isNotEmpty(productData.getImages()))
        {
            final List<ImageWsDTO> images = new ArrayList<>();
            for (final ImageData image : productData.getImages())
            {
                if (ImageDataType.GALLERY.equals(image.getImageType()))
                {
                    images.add(getDataMapper().map(image, ImageWsDTO.class, "FULL"));
                }
            }
            Collections.sort(images, new Comparator<ImageWsDTO>()
            {
                @Override
                public int compare(final ImageWsDTO image1, final ImageWsDTO image2)
                {
                    return image1.getGalleryIndex().compareTo(image2.getGalleryIndex());
                }
            });

            if (CollectionUtils.isNotEmpty(images))
            {
                addFormatsToGalleryImages(galleryImages, images);
            }
        }
        return galleryImages;
    }

    protected void addFormatsToGalleryImages(final List<Map<String, ImageWsDTO>> galleryImages, final List<ImageWsDTO> images)
    {
        int currentIndex = images.get(0).getGalleryIndex().intValue();
        Map<String, ImageWsDTO> formats = new HashMap<String, ImageWsDTO>();
        for (final ImageWsDTO image : images)
        {
            if (currentIndex != image.getGalleryIndex().intValue())
            {
                galleryImages.add(formats);
                formats = new HashMap<>();
                currentIndex = image.getGalleryIndex().intValue();
            }
            formats.put(image.getFormat(), image);
        }
        if (!formats.isEmpty())
        {
            galleryImages.add(formats);
        }
    }

}
