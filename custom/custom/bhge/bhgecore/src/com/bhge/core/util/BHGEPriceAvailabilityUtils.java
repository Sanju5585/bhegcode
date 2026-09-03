package com.bhge.core.util;

import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.GEEdgeProductType;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.enums.MaterialChannelStatus;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.model.BHGECurrencyModel;
import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.order.service.BHGEPaymentService;
import com.bhge.core.order.service.impl.BHGEVCAuthorExternalConfiguration;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZPriceandAvailablityRequest;
import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZPriceandAvailablityRequestItem;
import com.bhge.facades.BHGEAvailabilityDetailsData;
import com.bhge.facades.PaymentTermsData;
import com.bhge.facades.data.BHGEAvailabilityCheckFormData;
import com.bhge.facades.data.BHGEConfigRequestValues;
import com.bhge.facades.data.InventoryRequestData;
import com.bhge.facades.data.InventoryRequestProductData;
import com.bhge.facades.product.data.EstimateShipData;
import com.bhge.facades.user.data.BHGEBulkUploadEntryData;
import com.bhge.facades.user.data.BHGEPriceAvailabilityEntryData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.integration.models.services.BHGESapPlantLogSysOrgService;
import com.bhge.product.service.BHGEProductService;
import com.bhge.sap.orderfulfilment.sapcpiorderexchange.service.BHGEVCCPSConfigurationOrderEntryMapper;
import com.bhge.store.services.impl.BHGEBaseStoreServiceImpl;
import com.ds.facades.orderDetails.OrderDetailsData;
import com.hybris.ge.edge.core.model.type.BHGECreditCardPaymnentinfoModel;
import com.hybris.ge.edge.core.model.type.BHGESavedCreditcardModel;
import com.hybris.ge.edge.core.model.type.GEEdgeAvailabilityDetailModel;
import com.hybris.ge.edge.core.model.type.PaymenttermModel;
import de.hybris.platform.b2b.company.B2BCommerceUnitService;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.order.data.OrderData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.core.CoreAlgorithms;
import de.hybris.platform.core.PK;
import de.hybris.platform.core.model.c2l.C2LItemModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.c2l.RegionModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.ordersplitting.model.WarehouseModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;
import de.hybris.platform.sap.productconfig.runtime.cps.model.external.CPSCommerceExternalConfiguration;
import de.hybris.platform.sap.productconfig.runtime.cps.model.external.CPSExternalValue;
import de.hybris.platform.sap.productconfig.runtime.cps.model.external.CPSFlatListContainer;
import de.hybris.platform.sap.productconfig.services.intf.ProductConfigurationService;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;
import de.hybris.platform.warehousingfacades.storelocator.data.WarehouseData;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;

import static com.bhge.core.constants.BhgeCoreConstants.BUY;

public class BHGEPriceAvailabilityUtils {
    public static final String EST_SHIP_DATE_NOTAVBL = "EST_SHIP_DATE_NOTAVBL";
    private static final Logger LOG = Logger.getLogger(BHGEPriceAvailabilityUtils.class);
    private static final String DEFAULT_LONGEST_EST_SHIP_DATE = Config.getString("DEFAULT_LONGEST_EST_SHIP_DATE", "01-Jan-2100");
    private static final String FOR_PRODUCT_CODE = " for product code ";
    private static final int CURRENCY_FORMAT_DIGITS = 2;
    private static final String WAERK = "WAERK";
    private static final String KALSM = "KALSM";

    final BHGEProductUtil productUtil = new BHGEProductUtil();

    @Resource(name = "sessionService")
    public SessionService sessionService;
    @Resource(name = "userService")
    public UserService userService;
    @Resource(name = "bhgeCartService")
    public BHGECartService bhgeCartService;
    @Resource(name = "priceDataFactory")
    public PriceDataFactory priceDataFactory;
    @Resource(name = "bhgePaymentService")
    public BHGEPaymentService bhgePaymentService;
    @Resource(name = "modelService")
    public ModelService modelService;
    @Resource(name = "b2bCustomerFacade")
    protected CustomerFacade customerFacade;
    @Resource
    B2BCommerceUnitService b2bCommerceUnitService;
    @Resource(name = "productService")
    BHGEProductService bhgeProductService;
    @Resource(name = "scpiConnector")
    SCPIConnector scpiConnector;
    @Resource(name = "baseStoreService")
    private BHGEBaseStoreServiceImpl baseStoreService;

    //default page size A4 . max size is x: 595 , y: 841
    @Resource(name = "commonI18NService")
    private CommonI18NService commonI18NService;
    @Resource
    private BHGESoldToUtil bhgeSoldToUtil;
    @Resource(name = "bhgeB2BUnitService")
    private BHGEB2BUnitService bhgeB2BUnitService;
    @Resource(name = "flexibleSearchService")
    private FlexibleSearchService flexibleSearchService;
    @Resource(name = "sapPlantLogSysOrgService")
    private BHGESapPlantLogSysOrgService sapPlantLogSysOrgService;
    @Resource(name = "productFacade")
    private ProductFacade productFacade;
    @Resource(name = "bhgeEmailService")
    private BHGEEmailService bhgeEmailService;
    @Resource(name = "b2bOrderService")
    private BHGEB2BOrderService bhgeB2BOrderService;
    @Resource(name = "sapProductConfigConfigurationService")
    private ProductConfigurationService configurationService;

    @Resource
    private BHGEVCAuthorExternalConfiguration bhgeVCAuthorExternalConfiguration;

    @Resource(name = "sapProductConfigOrderEntryMapperCPS")
    private BHGEVCCPSConfigurationOrderEntryMapper sapProductConfigOrderEntryMapperCPS;

    public void populateProductData(InventoryRequestProductData productData, GEEdgeProductModel productModel) {
        productData.setProductType(productModel.getProductType().getCode());
        productData.setUnitSapCode(productModel.getUnit().getSapCode());
        productData.setAtp(productModel.getAtp());
        productData.setProductType(productModel.getProductType().getCode());
        LOG.info("Product Type is " + productModel.getProductType().getCode() + FOR_PRODUCT_CODE + productModel.getCode());
        if (productModel.getSapConfigurable() != null && productModel.getSapConfigurable()) {
            productData.setSapConfigurable(true);
        }
    }

    public boolean isValidProduct(GEEdgeProductModel productModel, InventoryRequestProductData inventoryProductData) {
        //This flow need to verify
        if (!(userService.getCurrentUser() instanceof GEEdgeCustomerModel)) return true;
        HybrisStatus hybrisStatus = productUtil.getHybrisStatusForCurrentSalesAreaForWS(productModel, userService, bhgeSoldToUtil);
        LOG.info("hybrisStatus is " + hybrisStatus + FOR_PRODUCT_CODE + productModel.getCode());
        MaterialChannelStatus materialStatus = productUtil.getMaterialStatusForCurrentSalesAreaForWS(productModel, userService, bhgeSoldToUtil);
        LOG.info("materialStatus is " + materialStatus + FOR_PRODUCT_CODE + productModel.getCode());
        if ((userService.getCurrentUser() instanceof GEEdgeCustomerModel && (hybrisStatus == null || materialStatus == null || hybrisStatus.equals(HybrisStatus.CATALOG)
                || !(materialStatus.equals(MaterialChannelStatus.P1) || materialStatus.equals(MaterialChannelStatus.P2)
                || materialStatus.equals(MaterialChannelStatus.P3) || materialStatus.equals(MaterialChannelStatus.P5)
                || materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO))
                || productModel.getSupercategories().isEmpty()))) {
            return false;
        }
        if (materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO)) {
            inventoryProductData.setIsEngineeringHold(Boolean.TRUE);
        }
        return true;

    }


    public String determineCartType(List<InventoryRequestProductData> inventoryRequestProductDataList) {
        GEEdgeProductType productType = inventoryRequestProductDataList.stream()
                .map(product -> ((GEEdgeProductModel) bhgeProductService.getProductForCode(product.getCode())).getProductType())
                .findFirst().orElse(null);
        return productType != null ? bhgeCartService.getCartTypeForProductType(productType).getCode() : null;
    }

    public String determineCurrency() {
        UserModel user = userService.getCurrentUser();
        BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
        CurrencyModel currency = null;
        // Getting Currency from Current Customer (Sales Area)
        if ((user instanceof GEEdgeCustomerModel) && null != ((GEEdgeCustomerModel) user).getDefaultB2BUnit()) {
            currency = ((GEEdgeCustomerModel) user).getDefaultB2BUnit().getCurrency();
        }
        // If Currency is Null, get it from Base Store default currency
        if (null == currency) {
            if (null != baseStore && null != baseStore.getDefaultCurrency()) {
                currency = baseStore.getDefaultCurrency();
            } else {
                currency = commonI18NService.getCurrentCurrency();
            }
        }
        return (currency != null) ? currency.getIsocode() : null;
    }


    public void populateDefaultShipToDetails(final InventoryRequestData requestData, final AddressModel defaultShipTo) {
        if (defaultShipTo == null) {
            return;
        }
        // Set country and region
        requestData.setCountry(Optional.ofNullable(defaultShipTo.getCountry())
                .map(C2LItemModel::getIsocode)
                .orElse(""));
        requestData.setRegion(Optional.ofNullable(defaultShipTo.getRegion())
                .map(RegionModel::getIsocodeShort)
                .orElse(""));
        String sapCustomerId = extractSapCustomerId(defaultShipTo);
        requestData.setSapCustomerId(sapCustomerId);

    }

    public String extractSapCustomerId(AddressModel defaultShipTo) {
        if (defaultShipTo != null && StringUtils.isNotBlank(defaultShipTo.getSapCustomerID())) {
            String sapCustomerID = defaultShipTo.getSapCustomerID();
            return sapCustomerID.contains("_") ? sapCustomerID.substring(0, sapCustomerID.indexOf("_")) : sapCustomerID;
        }
        return "";
    }

    public BHGEPriceAvailabilityEntryData createUploadEntry(InventoryRequestProductData entry, String productLine, BHGEBulkUploadEntryData validatedEntry) {
        LOG.info("BHGEPriceAvailabilityFacadeImpl :: Creating upload entry for product code: " + entry.getCode() + " with validated entry: " + validatedEntry.getProductSNo());
        LOG.info("Creating upload entry for product code: " + entry.getCode() + " with validated entry: " + validatedEntry.getProductSNo());
        BHGEPriceAvailabilityEntryData uploadEntry = new BHGEPriceAvailabilityEntryData();
        uploadEntry.setPartNum(entry.getCode());
        uploadEntry.setQuantity(entry.getQuantity());
        uploadEntry.setProductSNo(validatedEntry.getProductSNo());
        uploadEntry.setDiscountPercentage(entry.getDiscountPercentage());
        uploadEntry.setDiscountPrice(entry.getDiscountPrice());
        uploadEntry.setLeadTime(calculateLeadTime(entry.getLeadtime(), productLine));
        return uploadEntry;
    }

    public void populateAvailabilityDetails(InventoryRequestProductData entry, BHGEPriceAvailabilityEntryData uploadEntry) {
        Collection<BHGEAvailabilityDetailsData> availabilityDetails = entry.getAvailabilityDetails();
        if (availabilityDetails == null) return;
        //Fetching default plant detail only
        availabilityDetails.stream()
                .filter(BHGEAvailabilityDetailsData::getIsDefaultPlant)
                .findFirst()
                .ifPresent(detail -> {
                    List<BHGEAvailabilityDetailsData> detailsList = List.of(detail);
                    uploadEntry.setAvailabilityDetails(detailsList);
                });
    }


    public int calculateLeadTime(Integer leadTime, String productLine) {
        LOG.info("BHGEPriceAvailabilityFacadeImpl :: Calculating lead time for product line: " + productLine + " with lead time: " + leadTime);
        //Setting roundup (TRLT/5)
        LOG.info("LeadTime in entry level is greater than 0, leadTime: " + leadTime + ", productLine: " + productLine);
        if (leadTime != null && leadTime > 0) {
            int erpLeadTime = 0;
            if (StringUtils.isNotBlank(productLine) && StringUtils.containsIgnoreCase(productLine, "cordant")) {
                erpLeadTime = leadTime + 10;
            } else {
                erpLeadTime = leadTime + 5;
            }
            int businessWeeks = (int) Math.ceil((leadTime + 5) / 5.0);
            LOG.info("erpLeadtime " + businessWeeks);
            return businessWeeks;
        }
        LOG.info("DE163493: Lead time is not available for the product");
        return StringUtils.containsIgnoreCase(productLine, "cordant") ? 2 : 1;
    }

    public List<EstimateShipData> calculateEstimatedShippingDates(InventoryRequestProductData entry, int leadTime) {
        List<EstimateShipData> estimateShipDataList = new ArrayList<>();
        for (String estShipDate : entry.getEstShippingDates()) {
            EstimateShipData estimateShipDate = new EstimateShipData();
            if (Config.getParameter(EST_SHIP_DATE_NOTAVBL).equalsIgnoreCase(estShipDate)) {
                estimateShipDate.setShipDate(Config.getParameter(EST_SHIP_DATE_NOTAVBL));
            } else {
                String[] estDate = estShipDate.split(" ");
                if (estDate.length >= 2) {
                    estimateShipDate.setStockQty(estDate[0]);
                    estimateShipDate.setShipDate(DEFAULT_LONGEST_EST_SHIP_DATE.equals(estDate[1]) || "0".equals(entry.getAvailableQuantity())
                            ? BHGECommonsUtil.addWeekDays(LocalDate.now(), leadTime * 5).format(DateTimeFormatter.ofPattern("dd-MMM-yyyy"))
                            : estDate[1]);
                }
            }
            estimateShipDataList.add(estimateShipDate);
        }
        return estimateShipDataList;
    }

    public void populatePriceData(InventoryRequestProductData entry, InventoryRequestData requestData, ProductData uploadEntry, CartModel cartModel) {
        LOG.info("BHGEPriceAvailabilityFacadeImpl :: Populating price data for product code: " + entry.getCode());
        if (cartModel == null || requestData.isErrorReceived()) return;
        try {
            CurrencyModel currency = null;
            String baseStoreCurrency = null;
            final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
            String b2bUnit = currentUser.getDefaultB2BUnit().getUid();
            if(null != requestData.getCartType()) {
                BHGECurrencyModel bhgecurrency = bhgeProductService.getCustomerCurrency(b2bUnit, requestData.getCartType());
                if (bhgecurrency != null) {
                  String changedCurrency = bhgecurrency.getCurrency();
                    currency = bhgeProductService.getcurrencyModel(changedCurrency);
                }
                else{
                    baseStoreCurrency =determineCurrency();
                    currency =bhgeProductService.getcurrencyModel(baseStoreCurrency);
                }
                }
            else{
                baseStoreCurrency =determineCurrency();
                currency =bhgeProductService.getcurrencyModel(baseStoreCurrency);
            }
            LOG.info("Entered into populatePriceData" + entry.getCode() + " in cart model: " + cartModel.getCode());
            if(null !=entry.getBasePrice()) {
                PriceData priceData = populatePrice(entry.getBasePrice(),currency);
                if (null != priceData) {
                    uploadEntry.setPrice(priceData);
                }
            }
            LOG.info("Price data for product code: " + entry.getCode() + " with base price: " + uploadEntry.getPrice());
            if(null !=entry.getDiscountPrice()) {
                PriceData yourListPrice = populatePrice(
                        Double.valueOf(entry.getDiscountPrice()),currency);
                if (null != yourListPrice) {
                    uploadEntry.setYourPrice(yourListPrice);
                }
            }
            LOG.info("Your price data for product code: " + entry.getCode() + " with your list price: " + uploadEntry.getYourPrice());
            if(null !=entry.getListPrice()) {
                PriceData listPrice = populatePrice(entry.getListPrice(),currency);
                if (null != listPrice) {
                    uploadEntry.setListPrice(listPrice);
                }
            }
            LOG.info("List price data for product code: " + entry.getCode() + " with list price: " + uploadEntry.getListPrice());
            if(null !=entry.getDiscountPrice()) {
                PriceData netSellPrice = populatePrice(
                        entry.getQuantity() * Double.valueOf(entry.getDiscountPrice()),currency);
                if (null != netSellPrice) {
                    uploadEntry.setNetSellingPrice(netSellPrice);
                }
            }
            LOG.info("Net selling price data for product code: " + entry.getCode() + " with net selling price: " + uploadEntry.getNetSellingPrice());
            if(null !=entry.getListPrice()) {
                PriceData subTotalListPrice = populatePrice(
                        entry.getQuantity() * entry.getListPrice(),currency);
                if (null != subTotalListPrice) {
                    uploadEntry.setSubTotalListPrice(subTotalListPrice);
                }
                LOG.info("Sub total list price data for product code: " + entry.getCode() + " with sub total list price: " + uploadEntry.getSubTotalListPrice());
            }
        } catch (RuntimeException re) {
            LOG.error("Exception while populating Price Values populateAvailabilityAndPriceForFavourites method BHGEPriceAvailabilityFacadeImpl : " + re.getMessage(), re);
        }
    }

    public void populatePriceDetails(InventoryRequestData requestData, InventoryRequestProductData entry, BHGEPriceAvailabilityEntryData uploadEntry, CartModel cartModel) {
        if (null == cartModel && requestData.isErrorReceived()) return;
        LOG.info("BHGEPriceAvailabilityFacadeImpl :: Populating price details for product code: " + entry.getCode() + " in cart model: " + cartModel.getCode());
        try {
            CurrencyModel currency = null;
            String baseStorecurrency =null;
            final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
            String b2bUnit = currentUser.getDefaultB2BUnit().getUid();
            if(null != requestData.getCartType()) {
                BHGECurrencyModel bhgecurrency = bhgeProductService.getCustomerCurrency(b2bUnit, requestData.getCartType());
                if (bhgecurrency != null) {
                    String changedCurrency = bhgecurrency.getCurrency();
                    currency = bhgeProductService.getcurrencyModel(changedCurrency);
                }
                else{
                        baseStorecurrency =determineCurrency();
                        currency =bhgeProductService.getcurrencyModel(baseStorecurrency);
                }
            }
            else{
                baseStorecurrency =determineCurrency();
                currency =bhgeProductService.getcurrencyModel(baseStorecurrency);
            }
            PriceData priceData = populatePrice(entry.getBasePrice(),currency);
            if (null != priceData) {
                uploadEntry.setPrice(priceData);
            }
            LOG.info("Price data for product code: " + entry.getCode() + " with base price: " + uploadEntry.getPrice());
            LOG.info("BHGEPriceAvailabilityFacadeImpl :: Completed populating price details for product code: " + entry.getCode() + "the discount price"+ entry.getDiscountPrice() );
            if(null !=entry.getDiscountPrice() && NumberUtils.isNumber(entry.getDiscountPrice())) {
                LOG.info("BHGEPriceAvailabilityFacadeImpl :: Populating your price for product code: " + entry.getCode() + " with discount price as number: " + entry.getDiscountPrice());
                PriceData yourListPrice = populatePrice(
                        Double.valueOf(entry.getDiscountPrice()), currency);
                if (null != yourListPrice) {
                    uploadEntry.setYourPrice(yourListPrice);
                }
            }
            LOG.info("Your price data for product code: " + entry.getCode() + " with your list price: " + uploadEntry.getYourPrice());
            PriceData listPrice = populatePrice(entry.getListPrice(),currency);
            if (null != listPrice) {
                uploadEntry.setListPrice(listPrice);
            }
            LOG.info("List price data for product code: " + entry.getCode() + " with list price: " + uploadEntry.getListPrice());
            LOG.info("BHGEPriceAvailabilityFacadeImpl :: Completed populating price details for product code:  before setting the discount price" + entry.getCode() + "the discount price"+ entry.getDiscountPrice() );
            if(null !=entry.getDiscountPrice() && NumberUtils.isNumber(entry.getDiscountPrice())) {
                LOG.info("BHGEPriceAvailabilityFacadeImpl :: Populating net selling price for product code: " + entry.getCode() + " with discount price as number: " + entry.getDiscountPrice());
                PriceData netSellPrice = populatePrice(
                        entry.getQuantity() * Double.valueOf(entry.getDiscountPrice()), currency);
                if (null != netSellPrice) {
                    uploadEntry.setNetSellingPrice(netSellPrice);
                }
            }
            LOG.info("Net selling price data for product code: " + entry.getCode() + " with net selling price: " + uploadEntry.getNetSellingPrice());
            PriceData subTotalListPrice = populatePrice(
                    entry.getQuantity() * entry.getListPrice(),currency);
            if (null != subTotalListPrice) {
                uploadEntry.setSubTotalListPrice(subTotalListPrice);
            }
            LOG.info("Sub total list price data for product code: " + entry.getCode() + " with sub total list price: " + uploadEntry.getSubTotalListPrice());
            PriceData yourPriceDiscount = populatePrice(entry.getYourPriceDiscount(),currency);
            if (null != yourPriceDiscount) {
                uploadEntry.setYourPriceDiscount(yourPriceDiscount);
            }
            LOG.info("Your price discount data for product code: " + entry.getCode() + " with your price discount: " + uploadEntry.getYourPriceDiscount());
        } catch (RuntimeException re) {
            LOG.error("Exception while populating Price Values BHGEPriceAvailabilityFacadeImpl" + re.getMessage(), re);
        }
    }

    public PriceData populatePrice(final Double price, final CurrencyModel currency) {
        return priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(Optional.ofNullable(price).orElse(0d)), currency);

    }

    public void setEndUserAddress(final InventoryRequestData requestData) {
        B2BUnitModel salesArea = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
        if (null != salesArea) {
            AddressModel shipTo = b2bCommerceUnitService.getAddressForCode(salesArea, null);
            if (shipTo != null) {
                String sapCustomerID = shipTo.getSapCustomerID();
                if (StringUtils.isNotBlank(sapCustomerID)) {
                    requestData.setEndUserNumber(sapCustomerID.contains("_")
                            ? sapCustomerID.substring(0, sapCustomerID.indexOf("_"))
                            : sapCustomerID);
                }
            }
        }
    }


    public boolean isEngineeringHold(GEEdgeProductModel productModel) {

        final MaterialChannelStatus materialStatus = productUtil.getMaterialStatusForCurrentSalesArea(productModel, sessionService, userService);
        return materialStatus == MaterialChannelStatus.CC || materialStatus == MaterialChannelStatus.SO;
    }

    public CurrencyModel getCurrency() {
        LOG.info("BHGEPriceAvailabilityUtils: Getting currency for current user");
        final UserModel user = userService.getCurrentUser();
        if (user instanceof GEEdgeCustomerModel) {
            final B2BUnitModel defaultB2BUnit = ((GEEdgeCustomerModel) user).getDefaultB2BUnit();
            if (defaultB2BUnit != null) {
                LOG.info("BHGEPriceAvailabilityUtils: Currency from user's default B2B unit is " + defaultB2BUnit.getCurrency());
                return defaultB2BUnit.getCurrency();
            }
        }
        final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
        LOG.info("BHGEPriceAvailabilityUtils: Currency from base store is " + (baseStore != null ? baseStore.getDefaultCurrency().getIsocode() : "null"));
        LOG.info("BHGEPriceAvailabilityUtils: Current currency from commonI18NService is " + commonI18NService.getCurrentCurrency().getIsocode());
        return (baseStore != null && null != baseStore.getDefaultCurrency()) ? baseStore.getDefaultCurrency() : commonI18NService.getCurrentCurrency();
    }

    public boolean isValidProductForCurrentUser(HybrisStatus hybrisStatus, MaterialChannelStatus materialStatus, GEEdgeProductModel productModel) {
        if (userService.getCurrentUser() instanceof GEEdgeCustomerModel && (hybrisStatus == null || materialStatus == null || hybrisStatus.equals(HybrisStatus.CATALOG)
                || !isMaterialStatusValid(materialStatus) || CollectionUtils.isEmpty(productModel.getSupercategories()))) {
            LOG.warn("Invalid product for current user");
            return false;
        }

        return true;
    }

    private boolean isMaterialStatusValid(MaterialChannelStatus materialStatus) {
        return (materialStatus.equals(MaterialChannelStatus.P1) || materialStatus.equals(MaterialChannelStatus.P2)
                || materialStatus.equals(MaterialChannelStatus.P3) || materialStatus.equals(MaterialChannelStatus.P5)
                || materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO));
    }


    public void setEndUserAddress(final BHGEAvailabilityCheckFormData formData, final CartModel cartModel) {
        B2BUnitModel salesArea = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
        if (null != salesArea) {
            AddressModel shipTo = b2bCommerceUnitService.getAddressForCode(salesArea, formData.getEndCustomerRefNum());
            if (shipTo != null) {
                String sapCustomerID = shipTo.getSapCustomerID();
                if (StringUtils.isNotBlank(sapCustomerID)) {
                    cartModel.setEndUserNumber(sapCustomerID.contains("_")
                            ? sapCustomerID.substring(0, sapCustomerID.indexOf("_"))
                            : sapCustomerID);
                }

            }
        }
    }


    public void updateDefaultPlant(CartModel cartModel, String defaultPlant) {
        cartModel.setIsShipCompleteOrder(Boolean.TRUE);
        bhgeCartService.updateDefaultPlantForEntry(cartModel.getCode(), defaultPlant, 0);
    }

    public BHGEAvailabilityCheckFormData createAvailabilityCheckFormData(String productCode, int quantity) {
        BHGEAvailabilityCheckFormData formData = new BHGEAvailabilityCheckFormData();
        formData.setPartNum(productCode);
        formData.setQty(quantity);
        return formData;
    }

    public void populateAvailabilityAndPrice(CartModel cartModel, ProductData productData) {
        Double basePrice = 0.0;
        double yourPrice = 0.0;
        String productLine = sessionService.getAttribute("productLine");
        try {
            if (null != cartModel) {
                if (null != cartModel.getConnectivityerror()) {
                    productData.setConnectivityerror(cartModel.getConnectivityerror());
                } else {
                    for (AbstractOrderEntryModel entry : cartModel.getEntries()) {
                        setAvailabilityDetails(entry, productData);
                        //Setting roundup (TRLT/5)
                        productData.setLeadTime(calculateLeadTime(entry.getLeadtime(), productLine));
                        if (null != entry.getProduct() && productData.getCode().equals(entry.getProduct().getCode())) {
                            basePrice = entry.getBasePrice();
                            yourPrice = Double.parseDouble(entry.getDiscountPrice());
                        }
                        productData.setEstShipData(calculateEstimatedShippingDates(entry, productData.getLeadTime()));
                    }
                }
            }
        } catch (RuntimeException re) {
            re.printStackTrace();
            LOG.error("Exception in populateAvailabilityAtValues");
        }
        try {
            if (null != cartModel) {
                PriceData priceData = populatePrice(basePrice, cartModel.getCurrency());
                if (null != priceData) {
                    productData.setPrice(priceData);
                }
                PriceData yourListPrice = populatePrice(yourPrice, cartModel.getCurrency());
                if (null != yourListPrice) {
                    productData.setYourPrice(yourListPrice);
                }
            }
        } catch (RuntimeException re) {
            re.printStackTrace();
            LOG.error("Exception while populating Price Values");
        }
    }

    private List<EstimateShipData> calculateEstimatedShippingDates(AbstractOrderEntryModel entry, int leadTime) {
        List<EstimateShipData> estimateShipDataList = new ArrayList<>();
        for (String estShipDate : entry.getEstShippingDates()) {
            EstimateShipData estimateShipDate = new EstimateShipData();
            if (Config.getParameter(EST_SHIP_DATE_NOTAVBL).equalsIgnoreCase(estShipDate)) {
                estimateShipDate.setShipDate(Config.getParameter(EST_SHIP_DATE_NOTAVBL));
            } else {
                String[] estDate = estShipDate.split(" ");
                if (estDate.length >= 2) {
                    estimateShipDate.setStockQty(estDate[0]);
                    estimateShipDate.setShipDate(DEFAULT_LONGEST_EST_SHIP_DATE.equals(estDate[1]) || "0".equals(entry.getAvailableQuantity())
                            ? BHGECommonsUtil.addWeekDays(LocalDate.now(), leadTime * 5).format(DateTimeFormatter.ofPattern("dd-MMM-yyyy"))
                            : estDate[1]);
                }
            }
            estimateShipDataList.add(estimateShipDate);
        }
        return estimateShipDataList;
    }

    private void setAvailabilityDetails(AbstractOrderEntryModel entry, ProductData uploadEntry) {
        Collection<GEEdgeAvailabilityDetailModel> availabilityDetails = entry.getAvailabilityDetails();
        if (availabilityDetails == null) return;
        //Fetching default plant detail only
        Optional<GEEdgeAvailabilityDetailModel> geEdgeAvailabilityDetailModels = availabilityDetails.stream().filter(p -> p.getIsDefaultPlant().equals(Boolean.TRUE)).findFirst();
        geEdgeAvailabilityDetailModels.ifPresent(detail -> {
            WarehouseData warehouseData = new WarehouseData();
            warehouseData.setCode(detail.getPlant());
            warehouseData.setName(detail.getPlantName());
            warehouseData.setStockAvailable(detail.getActualStockQty());
            warehouseData.setDefaultPlant(detail.getIsDefaultPlant());
            uploadEntry.setPlantAvailableAt(List.of(warehouseData));
        });
    }

    public void setAvailabilityDetails(InventoryRequestProductData entry, ProductData uploadEntry) {
        LOG.info("Setting availability details for product code: " + entry.getCode());
        Collection<BHGEAvailabilityDetailsData> availabilityDetails = entry.getAvailabilityDetails();
        if (availabilityDetails == null) return;
        //Fetching default plant detail only
        Optional<BHGEAvailabilityDetailsData> defaultPlant = availabilityDetails.stream()
                .filter(BHGEAvailabilityDetailsData::getIsDefaultPlant)
                .findFirst();

        defaultPlant.ifPresent(detail -> {
            WarehouseData warehouseData = new WarehouseData();
            warehouseData.setCode(detail.getPlant());
            warehouseData.setName(detail.getPlantName());
            warehouseData.setStockAvailable(detail.getActualStockQty());
            warehouseData.setDefaultPlant(detail.getIsDefaultPlant());
            LOG.info("Line 482-Actual stock quantity: " + detail.getActualStockQty() +"for the product" + entry.getCode());
            uploadEntry.setPlantAvailableAt(List.of(warehouseData));
        });
    }

    public String getLanguageForRequest() {
        BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
        return (baseStore != null && baseStore.getDefaultLanguage() != null)
                ? baseStore.getDefaultLanguage().getIsocode().toUpperCase()
                : BhgeCoreConstants.DEFAULT_LOCALE;
    }

    public void prepareHeadDetails(BHGEZPriceandAvailablityRequest request, InventoryRequestData requestData) {
        BHGEZPriceandAvailablityRequestItem headDetail = new BHGEZPriceandAvailablityRequestItem();
        final String vbelnValue = "0069999999";
        LOG.info("IT_HEAD-VBELN value is " + vbelnValue);
        headDetail.setKunnr(getSoldToForCart(requestData));
        headDetail.setVbeln(vbelnValue);
        request.getItHead().getItems().add(headDetail);
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        String b2bUnit = currentUser.getDefaultB2BUnit().getUid();
        BHGECurrencyModel bhgecurrency = getCustomerCurrency(b2bUnit,requestData.getCartType());
        if(bhgecurrency != null) {
            BHGEZPriceandAvailablityRequestItem currency = new BHGEZPriceandAvailablityRequestItem();
            BHGEZPriceandAvailablityRequestItem pricingProcedurevalue = new BHGEZPriceandAvailablityRequestItem();
           BHGEZPriceandAvailablityRequestItem callerData = new BHGEZPriceandAvailablityRequestItem();
            if(callerData.getItems() != null) {
                callerData.setItems(new ArrayList<>());
            }
            LOG.info("came into the block to fetch customer currency" + bhgecurrency.getCurrency());
            String customerCurrency = bhgecurrency.getCurrency();
            String pricingProcedure = bhgecurrency.getPricingProcedure();
            if(null != bhgecurrency.getCurrency()) {
                currency.setName(WAERK);
                currency.setValue(customerCurrency);
                LOG.info("WAERK :: currency is " + customerCurrency);
                callerData.getItems().add(currency);
            }
            if (null != pricingProcedure) {
                LOG.info("PRICINGPROCEDURE :: pricing procedure is " + pricingProcedure);
                pricingProcedurevalue.setName(KALSM);
                pricingProcedurevalue.setValue(pricingProcedure);
                callerData.getItems().add(pricingProcedurevalue);
            }
            headDetail.setCallerData(callerData);
        }

        }

    public BHGECurrencyModel getCustomerCurrency(String b2bUnit ,String cartType) {
        BHGECurrencyModel bhgeCurrency = bhgeProductService.getCustomerCurrency(b2bUnit,cartType);
        return bhgeCurrency;
    }

    private String getSoldToForCart(InventoryRequestData requestData) {
        String soldTo = null != requestData.getSoldTo() ? requestData.getSoldTo() : "";
        if (StringUtils.isNotBlank(soldTo) && soldTo.contains("_")) {
            return soldTo.substring(0, soldTo.indexOf("_"));
        }
        return soldTo;
    }
    public void prepareHeadDetails(BHGEZPriceandAvailablityRequest request, CartModel cart ) {
        BHGEZPriceandAvailablityRequestItem headDetail = new BHGEZPriceandAvailablityRequestItem();
        final String vbelnValue = "0069999999";
        LOG.info("IT_HEAD-VBELN value is " + vbelnValue);
        headDetail.setKunnr(getSoldToForCart(cart));
        headDetail.setVbeln(vbelnValue);
        request.getItHead().getItems().add(headDetail);
        if(null != cart && null != cart.getCommerceType() && cart.getCommerceType().getCode().equalsIgnoreCase(BUY)
                && null == cart.getQuoteReference() && Boolean.FALSE.equals(cart.getIsQuote())) {
            final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
            String b2bUnit = currentUser.getDefaultB2BUnit().getUid();
            BHGECurrencyModel bhgecurrency = getCustomerCurrency(b2bUnit, cart.getCartType().getCode());
            if (bhgecurrency != null) {
                BHGEZPriceandAvailablityRequestItem currency = new BHGEZPriceandAvailablityRequestItem();
                BHGEZPriceandAvailablityRequestItem pricingProcedurevalue = new BHGEZPriceandAvailablityRequestItem();
                BHGEZPriceandAvailablityRequestItem callerData = new BHGEZPriceandAvailablityRequestItem();
                if (callerData.getItems() != null) {
                    callerData.setItems(new ArrayList<>());
                }
                LOG.info("came into the block to fetch customer currency" + bhgecurrency.getCurrency());
                String customerCurrency = bhgecurrency.getCurrency();
                String pricingProcedure = bhgecurrency.getPricingProcedure();
                if (null != bhgecurrency.getCurrency()) {
                    currency.setName(WAERK);
                    currency.setValue(customerCurrency);
                    LOG.info("WAERK :: currency is " + customerCurrency);
                    callerData.getItems().add(currency);
                }
                if (null != pricingProcedure) {
                    LOG.info("PRICINGPROCEDURE :: pricing procedure is " + pricingProcedure);
                    pricingProcedurevalue.setName(KALSM);
                    pricingProcedurevalue.setValue(pricingProcedure);
                    callerData.getItems().add(pricingProcedurevalue);
                }
                headDetail.setCallerData(callerData);
            }
        }
        }

    public String getSoldToForCart(CartModel cart) {
        String soldTo = null != cart.getSoldToForCart() ? cart.getSoldToForCart() .getUid(): "";
        if (StringUtils.isNotBlank(soldTo) && soldTo.contains("_")) {
            return soldTo.substring(0, soldTo.indexOf("_"));
        }
        return soldTo;
    }
    public void prepareItemDetails(BHGEZPriceandAvailablityRequest request, List<InventoryRequestProductData> inventoryRequestProductDataList,
                                   ConfigurationData vcConfigData, String guestSalesArea,String ecaCode) {
        int lineItemCount = BhgeCoreConstants.LINE_ITEM_COUNT;
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        final B2BUnitModel defaultB2bUnit = currentUser.getDefaultB2BUnit();
        LOG.info("Default B2B Unit for current user " + defaultB2bUnit.getUid());
        AddressModel shipTo;
        String customer=defaultB2bUnit.getUid().split("_")[0];
        if(StringUtils.isNotBlank(ecaCode)) {
            LOG.info("ECA code is present, fetching ship to details for ECA code: " + ecaCode);
           shipTo = modelService.get(PK.parse(ecaCode.toString()));
        } else {
            shipTo = null;
        }
        LOG.info("customer for current user " + customer);
        AtomicReference<Integer> configCounter = new AtomicReference<>(BhgeCoreConstants.CONFIG_KPOSN_COUNTER);
        if(null !=inventoryRequestProductDataList && !inventoryRequestProductDataList.isEmpty()){
            LOG.info("BHGEPriceAvailabilityCheckServiceImpl : PrepareRequestForWS -- size of  inventoryRequestProductDataList " + inventoryRequestProductDataList.size()
                    + " inventoryRequestProductDataList is " + Arrays.toString(inventoryRequestProductDataList.toArray()));
        }
        inventoryRequestProductDataList.forEach(productData -> {
            BHGEZPriceandAvailablityRequestItem itemDetail = new BHGEZPriceandAvailablityRequestItem();
            String itemNum = String.valueOf(lineItemCount + productData.getItemLineNumber());
            String soldTo = "";
            final BHGESoldToData soldToData = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
            if (null != soldToData)
            {
                LOG.info("BHGEPriceAvailabilityCheckServiceImpl prepareRequestForWS :: soldToData from session is " + soldToData.getUid());
                soldTo = soldToData.getUid();
            }
            itemDetail.setKposn(itemNum);
            LOG.info("BHGEPriceAvailabilityCheckServiceImpl prepareRequestForWS :: product type in requestProductData " + productData.getProductType());
            if(Objects.equals(productData.getProductType(), "ITFILM")) {
                itemDetail.setParvw(Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
                LOG.info("Inside BHGEPriceAvailabilityCheckServiceImpl : setting KUNNR as " + soldTo + " for product type ITFILM");
                if (null != shipTo) {
                    String sapCustomerId = shipTo.getSapCustomerID();
                    if (StringUtils.isNotBlank(sapCustomerId)) {
                        itemDetail.setKunnr(sapCustomerId);
                        LOG.info("BHGEPriceAvailabilityCheckServiceImpl prepareRequestForWS :: product type in requestProductData is ITFILM, setting KUNNR as " + itemDetail.getKunnr());
                    } else {
                        itemDetail.setKunnr(customer);
                        LOG.info("BHGEPriceAvailabilityCheckServiceImpl prepareRequestForWS :: product type in requestProductData is ITFILM, setting KUNNR as salesArea " + itemDetail.getKunnr());
                    }
                }
                else
                {
                    itemDetail.setKunnr(customer);
                    LOG.info("BHGEPriceAvailabilityCheckServiceImpl prepareRequestForWS :: product type in requestProductData is ITFILM, setting KUNNR as salesArea " + itemDetail.getKunnr());
                }
            }
            itemDetail.setMaterial(productData.getCode());
            itemDetail.setMgame(getFormattedQuantity(Long.valueOf(productData.getQuantity())));
            // Setting Product Type IT / FL to the Request
            LOG.info("BHGEPriceAvailabilityCheckServiceImpl prepareRequestForWS :: product type in requestProductData " + productData.getProductType()
                    + " for product " + productData.getCode());
            itemDetail.setProdCatFlag(getProductCategoryFlag(productData.getProductType()));
            if (null != productData.getUnitSapCode()) {
                itemDetail.setVrkme(productData.getUnitSapCode());
            }
            itemDetail.setAvbtCheck(vcConfigData != null ? BhgeCoreConstants.ATP_CHECK_DATA : productData.getAtp());

            if (vcConfigData != null) {
                itemDetail.setAvbtCheck(BhgeCoreConstants.ATP_CHECK_DATA);
                String itemNumber = formattedLineNumber(configCounter.get());
                itemDetail.setKposn(itemNumber);
                prepareVCConfiguration(request, vcConfigData, configCounter.get());

            } else {
                itemDetail.setAvbtCheck(productData.getAtp());
            }
            prepareRequestWMDVSX(request, productData,guestSalesArea, itemNum, itemDetail, configCounter);
        });
    }

    private void prepareRequestWMDVSX(BHGEZPriceandAvailablityRequest request, InventoryRequestProductData productData,String guestSalesArea, String itemNum, BHGEZPriceandAvailablityRequestItem itemDetail, AtomicReference<Integer> configCounter) {
        BHGEZPriceandAvailablityRequestItem wmdvsxDetail = new BHGEZPriceandAvailablityRequestItem();
        wmdvsxDetail.setReqQty(getFormattedQuantity(Long.valueOf(productData.getQuantity())));
        wmdvsxDetail.setMaterial(productData.getCode());
        wmdvsxDetail.setYline(itemNum);

        request.getEtWmdvsx().getItems().add(wmdvsxDetail);
            final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();


        preparePlantsForSalesOrgForWS(itemDetail,guestSalesArea,baseStore, productData.getCode());
        request.getItItem().getItems().add(itemDetail);
        configCounter.getAndSet(configCounter.get() + 1);
    }

    public void prepareVCQuickOrderItemDetails(BHGEZPriceandAvailablityRequest request, List<InventoryRequestProductData> inventoryVCRequestProductDataList,
                                   Map<Integer, ConfigurationData> configDataMap, String guestSalesArea) {
        int lineItemCount = BhgeCoreConstants.LINE_ITEM_COUNT;
        AtomicReference<Integer> configCounter = new AtomicReference<>(BhgeCoreConstants.CONFIG_KPOSN_COUNTER);
        LOG.info("BHGEPriceAvailabilityCheckServiceImpl : PrepareRequestForWS -- size of  inventoryRequestProductDataList " + inventoryVCRequestProductDataList.size()
                + " inventoryRequestProductDataList is " + Arrays.toString(inventoryVCRequestProductDataList.toArray()));
        inventoryVCRequestProductDataList.forEach(productData -> {
            BHGEZPriceandAvailablityRequestItem itemDetail = new BHGEZPriceandAvailablityRequestItem();
            String itemNum = String.valueOf(lineItemCount + productData.getItemLineNumber());
            itemDetail.setMgame(getFormattedQuantity(Long.valueOf(productData.getQuantity())));
            LOG.info("BHGEPriceAvailabilityCheckServiceImpl prepareRequestForWS :: product type in requestProductData " + productData.getProductType()
                    + " for product " + productData.getCode());
            itemDetail.setProdCatFlag(getProductCategoryFlag(productData.getProductType()));
            if (null != productData.getUnitSapCode()) {
                itemDetail.setVrkme(productData.getUnitSapCode());
            }
            itemDetail.setAvbtCheck(configDataMap != null ? BhgeCoreConstants.ATP_CHECK_DATA : productData.getAtp());
            if (productData.isSapConfigurable() && MapUtils.isNotEmpty(configDataMap)) {
                LOG.info("Inside prepareVCLongConfigRequestForWS-BHGEPriceAvailabilityCheckServiceImpl : vcLongConfigDataMap size is " + configDataMap.size());
                itemNum = String.valueOf(formattedLineNumber(configCounter.get()));
                itemDetail.setKposn(itemNum);
                itemDetail.setMaterial(productData.getCode());
                for (Map.Entry<Integer, ConfigurationData> configEntry : configDataMap.entrySet()) {
                    if (configEntry.getKey().equals(Integer.parseInt(itemNum))) {
                      //Map<String, String> longConfigValues = configEntry.getValue().getLongConfigurationValues();
                       List<BHGEConfigRequestValues> requestValues = configEntry.getValue().getLongConfigValuesRequest();
                        for (BHGEConfigRequestValues longConfigValue : requestValues) {
//                            LOG.info("Inside BHGEPriceAvailabilityCheckServiceImpl : long config charkey " + longConfigValue.getKey()
//                                    + " and long config charValue " + longConfigValue.getValue());
                            BHGEZPriceandAvailablityRequestItem orderCfgsValueDetail = new BHGEZPriceandAvailablityRequestItem();
                            orderCfgsValueDetail.setConfigId(itemNum);
                            orderCfgsValueDetail.setCharc(longConfigValue.getCharc());
                            orderCfgsValueDetail.setValue(longConfigValue.getValue());
                            orderCfgsValueDetail.setAuthor(longConfigValue.getAuthor());
                            LOG.info("orderCfgsValueDetail Author"+orderCfgsValueDetail.getAuthor());
                            LOG.info("orderCfgsValueDetail Charc:" + orderCfgsValueDetail.getCharc() + "vALUE"+ orderCfgsValueDetail.getValue());
                            request.getOrderCfgsValue().getItems().add(orderCfgsValueDetail);
                        }
                    }
                }
            }
            prepareRequestWMDVSX(request, productData,guestSalesArea, itemNum, itemDetail, configCounter);

        });
    }

   public void prepareItemDetails(BHGEZPriceandAvailablityRequest request,String guestSalesArea, List<AbstractOrderEntryModel> cartEntries,
                                   Map<Integer, ConfigurationData> configDataMap) {
        int lineItemCount = BhgeCoreConstants.LINE_ITEM_COUNT;
        AtomicReference<Integer> configCounter = new AtomicReference<>(BhgeCoreConstants.CONFIG_KPOSN_COUNTER);

        cartEntries.forEach(orderEntry -> {
            BHGEZPriceandAvailablityRequestItem itemDetail = new BHGEZPriceandAvailablityRequestItem();
            String itemNum = String.valueOf(lineItemCount + orderEntry.getEntryNumber());
            final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) orderEntry.getProduct();
            setValuesforItemDetail(orderEntry, itemDetail, itemNum, geEdgeProductModel,guestSalesArea);
            if (Boolean.TRUE.equals(orderEntry.getProduct().getSapConfigurable()) && MapUtils.isNotEmpty(configDataMap)) {
                LOG.info("Inside prepareRequestForWS-BHGECartServiceImpl : configDataMap size is " + configDataMap.size());
                itemDetail.setAvbtCheck(BhgeCoreConstants.ATP_CHECK_DATA);
                String itemNumber = formattedLineNumber(configCounter.get());
                itemDetail.setKposn(itemNumber);
                ConfigurationData vcConfigData = configDataMap.get(orderEntry.getEntryNumber());
                LOG.info("Inside BHGECartServiceImpl : vcConfigData is " + vcConfigData.getConfigId());
                if(isLongConfigEntry(orderEntry)) {
                    LOG.info("Inside BHGECartServiceImpl : entry is long config entry");
                    setValuesForLongConfig(request, configDataMap, orderEntry, itemNumber);
                }
                else {
                    LOG.info("Inside BHGECartServiceImpl : entry is coming to vc flow to fetch extenal configuration");
                    prepareVCConfiguration(request, vcConfigData, configCounter.get());
                }

            } else {
                itemDetail.setAvbtCheck(geEdgeProductModel.getAtp());
            }
            setwmdvsxDetail(request, orderEntry, itemNum, geEdgeProductModel);
            final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
            preparePlantsForSalesOrgForWS(itemDetail,guestSalesArea,baseStore, geEdgeProductModel.getCode());
            request.getItItem().getItems().add(itemDetail);
            configCounter.getAndSet(configCounter.get() + 1);
        });
    }

    private static void setValuesForLongConfig(BHGEZPriceandAvailablityRequest request, Map<Integer, ConfigurationData> configDataMap, AbstractOrderEntryModel orderEntry, String itemNumber) {
        for (Map.Entry<Integer, ConfigurationData> configEntry : configDataMap.entrySet()) {
            if (configEntry.getKey().equals(orderEntry.getEntryNumber())) {
                List<BHGEConfigRequestValues> requestValues = configEntry.getValue().getLongConfigValuesRequest();
                for (BHGEConfigRequestValues longConfigValue : requestValues) {

                    LOG.info("Inside BHGECartServiceImpl : long config charkey " + longConfigValue.getCharc()
                            + " and long config charValue " + longConfigValue.getValue() + "long config Author" +longConfigValue.getAuthor());
                    BHGEZPriceandAvailablityRequestItem orderCfgsValueDetail = new BHGEZPriceandAvailablityRequestItem();
                    orderCfgsValueDetail.setConfigId(itemNumber);
                    orderCfgsValueDetail.setCharc(longConfigValue.getCharc());
                    orderCfgsValueDetail.setValue(longConfigValue.getValue());
                    orderCfgsValueDetail.setAuthor(longConfigValue.getAuthor());
                    request.getOrderCfgsValue().getItems().add(orderCfgsValueDetail);
                }

            }

        }
    }

    public void setValuesforItemDetail(AbstractOrderEntryModel orderEntry, BHGEZPriceandAvailablityRequestItem itemDetail, String itemNum, GEEdgeProductModel geEdgeProductModel, String guestSalesArea) {
        itemDetail.setKposn(itemNum);
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        final B2BUnitModel defaultB2bUnit = currentUser.getDefaultB2BUnit();
        LOG.info("Default B2B Unit for current user " + defaultB2bUnit.getUid());
        String customer=defaultB2bUnit.getUid().split("_")[0];
        LOG.info("customer for current user " + customer);
        if(geEdgeProductModel.getProductType().equals(GEEdgeProductType.ITFILM)) {
            AddressModel endCustomerAddress = orderEntry.getEndCustomerAddress();
            if (null != endCustomerAddress) {
                String sapCustomerID = endCustomerAddress.getSapCustomerID();
                itemDetail.setParvw(Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
                if (StringUtils.isNotBlank(sapCustomerID)) {
                    itemDetail.setKunnr(sapCustomerID);
                    LOG.info("BHGEPriceAvailabilityCheckServiceImpl prepareRequestForWS :: product type in requestProductData is ITFILM, setting KUNNR as " + itemDetail.getKunnr() + " from end customer address");
                } else {
                    itemDetail.setKunnr(customer);
                    LOG.info("Inside BHGEPriceAvailabilityCheckServiceImpl : setting KUNNR as " + customer + " for product type ITFILM");
                }
            } else {
                LOG.info("BHGEPriceAvailabilityCheckServiceImpl prepareRequestForWS :: product type in requestProductData is not ITFILM, setting KUNNR as salesArea " + guestSalesArea);
                itemDetail.setKunnr(customer);
            }
        }
        itemDetail.setMaterial(geEdgeProductModel.getCode());
        itemDetail.setMgame(getFormattedQuantity(orderEntry.getQuantity()));
        // Setting Product Type IT / FL to the Request
        LOG.info("BHGECartServiceImpl prepareRequestForWS :: product type in requestProductData " + geEdgeProductModel.getProductType()
                + " for product " + geEdgeProductModel.getCode());
        itemDetail.setProdCatFlag(getProductCategoryFlag(String.valueOf(geEdgeProductModel.getProductType())));
        if (null != geEdgeProductModel.getUnit())
        {
            itemDetail.setVrkme(geEdgeProductModel.getUnit().getSapCode());
        }
    }

    public void setwmdvsxDetail(BHGEZPriceandAvailablityRequest request, AbstractOrderEntryModel orderEntry, String itemNum, GEEdgeProductModel geEdgeProductModel) {
        BHGEZPriceandAvailablityRequestItem wmdvsxDetail = new BHGEZPriceandAvailablityRequestItem();
        wmdvsxDetail.setReqQty(getFormattedQuantity(Long.valueOf(orderEntry.getQuantity())));
        wmdvsxDetail.setMaterial(geEdgeProductModel.getCode());
        wmdvsxDetail.setYline(itemNum);

        request.getEtWmdvsx().getItems().add(wmdvsxDetail);
    }

    private boolean isLongConfigEntry(AbstractOrderEntryModel entry) {

        return Objects.nonNull(entry.getLongConfigEntry()) && entry.getLongConfigEntry();
    }


    public String getFormattedQuantity(final Long qty) {
        return String.format("%013d", Optional.ofNullable(qty).orElse(0L));
    }

    private String getProductCategoryFlag(String productType) {
        return GEEdgeProductType.ITFILM.getCode().equalsIgnoreCase(productType)
                ? BhgeCoreConstants.PROD_CAT_FLAG_FL
                : BhgeCoreConstants.PROD_CAT_FLAG_IT;
    }

    public void setSoldTO(InventoryRequestData requestData, String guestSalesArea) {
        if (userService.isAnonymousUser(userService.getCurrentUser())) {
            BHGEAnonymousUserCatalogModel bhgeAnonymousUserCatalog = bhgeSoldToUtil.getAnonymousUserCatalog(guestSalesArea);
            if (null != bhgeAnonymousUserCatalog && Objects.nonNull(bhgeAnonymousUserCatalog.getB2BUnit())) {
                requestData.setSoldTo(bhgeAnonymousUserCatalog.getB2BUnit().getUid());
            }
        }
    }
    public void setSoldTO(CartModel cart, String guestSalesArea) {
        if (userService.isAnonymousUser(userService.getCurrentUser())) {
            BHGEAnonymousUserCatalogModel bhgeAnonymousUserCatalog = bhgeSoldToUtil.getAnonymousUserCatalog(guestSalesArea);
            if (null != bhgeAnonymousUserCatalog && Objects.nonNull(bhgeAnonymousUserCatalog.getB2BUnit())) {
                cart.setSoldToForCart(bhgeAnonymousUserCatalog.getB2BUnit());
                modelService.save(cart);
            }
        }
    }
    public void setSoldTO(CartModel cart) {
        if (userService.isAnonymousUser(userService.getCurrentUser()) && Objects.nonNull(sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA)))
            {
                 cart.setSoldToForCart(sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA));
                modelService.save(cart);
            }

    }
    protected BHGEZPriceandAvailablityRequestItem preparePlantsForSalesOrgForWS(final BHGEZPriceandAvailablityRequestItem itItemDetail,  final String guestSalesArea,final BaseStoreModel baseStore,final String productCode)
    {

        final BHGEZPriceandAvailablityRequestItem werksDetail = new BHGEZPriceandAvailablityRequestItem();
        final BHGEProductUtil productUtil = new BHGEProductUtil();
        final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) bhgeProductService.getProductForCode(productCode);
        final String deliveryPlant = productUtil.getPlantForCurrentSalesAreaData(geEdgeProductModel, userService);
        LOG.info("BHGEPriceAvailabilityCheckServiceImpl::The delivery plant for the productcode" +productCode +": is :"+ deliveryPlant);
        if(StringUtils.isNotEmpty(deliveryPlant))
        {
            BHGEZPriceandAvailablityRequestItem werksList = new BHGEZPriceandAvailablityRequestItem();
            werksList.setWerksList(deliveryPlant);
            werksDetail.getItems().add(werksList);
            itItemDetail.setWerks(werksDetail);
            return itItemDetail;

        } else {
            LOG.info("BHGEPriceAvailabilityCheckServiceImpl::The delivery plant is not maintained for the productcode" +productCode);
            if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
                if (null != baseStore) {
                    final Set<WarehouseModel> plants = sapPlantLogSysOrgService.getPlantsForSalesOrganization(baseStore);
                    if (null != plants && !plants.isEmpty()) {
                        for (final WarehouseModel plant : plants) {
                            LOG.info("BHGEPriceAvailabilityCheckServiceImpl::Plants for sales organization are :" + plant.getCode());
                            BHGEZPriceandAvailablityRequestItem werksList = new BHGEZPriceandAvailablityRequestItem();
                            werksList.setWerksList(plant.getCode());
                            werksDetail.getItems().add(werksList);
                        }
                        itItemDetail.setWerks(werksDetail);
                    }
                }
                return itItemDetail;
            } else {
                LOG.info("BHGEPriceAvailabilityCheckServiceImpl::Current user is anonymous user");
                final BHGEAnonymousUserCatalogModel anonymousUserCatalog = bhgeSoldToUtil.getAnonymousUserCatalog(guestSalesArea);
                if (null != anonymousUserCatalog && !anonymousUserCatalog.getPlants().isEmpty()) {
                    for (final String plant : anonymousUserCatalog.getPlants()) {
                        LOG.info("BHGEPriceAvailabilityCheckServiceImpl::Plants for anonymous user are :" + plant);
                        BHGEZPriceandAvailablityRequestItem werksList = new BHGEZPriceandAvailablityRequestItem();
                        werksList.setWerksList(plant);
                        werksDetail.getItems().add(werksList);
                    }
                    itItemDetail.setWerks(werksDetail);
                }
                return itItemDetail;
            }
        }
    }

    public void preparePartnerDetails(BHGEZPriceandAvailablityRequest request, InventoryRequestData requestData) {
        if (StringUtils.isNotBlank(requestData.getEndUserNumber())) {
            BHGEZPriceandAvailablityRequestItem endUserDetail = new BHGEZPriceandAvailablityRequestItem();
            endUserDetail.setParvw(Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
            endUserDetail.setLand1("");
            endUserDetail.setRegio("");
            endUserDetail.setKunnr(requestData.getEndUserNumber());
            request.getItPartner().getItems().add(endUserDetail);
        }

        if (StringUtils.isNotEmpty(requestData.getSapCustomerId())) {
            BHGEZPriceandAvailablityRequestItem shipToDetail = new BHGEZPriceandAvailablityRequestItem();
            shipToDetail.setParvw(Config.getString("SHIP_TO_PARTNER_FUNCTION", "SH"));
            shipToDetail.setKunnr(requestData.getSapCustomerId());
            shipToDetail.setLand1(requestData.getCountry());
            shipToDetail.setRegio(requestData.getRegion());
            request.getItPartner().getItems().add(shipToDetail);
            LOG.info("itPartnerDetail1 BHGEPriceAvailabilityCheckServiceImpl: " + shipToDetail);
        }
    }



    public BHGEZPriceandAvailablityRequestItem setGlobalFuctionValueForWS(String cartType, final String guestSalesArea) {
        if (LOG.isDebugEnabled()) {
            LOG.debug("Trying to make to Function call: Setting the Default Input parameters to JCOStructure");
        }
        BHGEZPriceandAvailablityRequestItem isGlobal = new BHGEZPriceandAvailablityRequestItem();
        final SAPConfigurationModel sapConfigurationModel = getSapConfigurationForCurrentStore();
        String orderType = BhgeCoreConstants.ZOR_TYPE;

        if ((BhgeCoreConstants.CART_TYPE_FILM.equals(cartType)
                || BhgeCoreConstants.CART_TYPE_HYBRID.equals(cartType))) {
            orderType = BhgeCoreConstants.ZFLM_TYPE;
        }
        if (null != sapConfigurationModel) {
            isGlobal.setAuart(orderType);
            isGlobal.setVkorg(sapConfigurationModel.getSapcommon_salesOrganization());
            isGlobal.setVtweg(sapConfigurationModel.getSapcommon_distributionChannel());
            isGlobal.setSpart(sapConfigurationModel.getSapcommon_division());
        }
        if (userService.isAnonymousUser(userService.getCurrentUser()) && StringUtils.isNotBlank(guestSalesArea)) {
            final String[] b2bUnitUidSplit = guestSalesArea.split("_");
            isGlobal.setAuart(orderType);
            if (b2bUnitUidSplit.length >= 2) {
                isGlobal.setVkorg(b2bUnitUidSplit[0]);
                isGlobal.setVtweg(b2bUnitUidSplit[1]);
                isGlobal.setSpart(b2bUnitUidSplit[2]);
            }
        }

        return isGlobal;
    }

    protected SAPConfigurationModel getSapConfigurationForCurrentStore() {
        if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
            final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
            if (null != baseStore) {
                return baseStore.getSAPConfiguration();
            }
            return null;
        }
        return null;
    }

    private void prepareVCConfiguration(BHGEZPriceandAvailablityRequest request, ConfigurationData vcConfigData,
                                        Integer configCounter)  {
        final String itemNumber = formattedLineNumber(configCounter);
        LOG.info("BHGEPriceAvailabilityCheckServiceImpl : Config id value and kposn value is " + itemNumber);
        final String externalConfiguration = configurationService.retrieveExternalConfiguration(vcConfigData.getConfigId());
        LOG.info("BHGEPriceAvailabilityCheckServiceImpl: prepareRequestForWS :: externalConfiguration is " + externalConfiguration
                 + " and for config Id " + vcConfigData.getConfigId());
        CPSCommerceExternalConfiguration cpsConfiguration = sapProductConfigOrderEntryMapperCPS.getCPSExternalConfigByExternalConfiguration(externalConfiguration);
    	CPSFlatListContainer flatList = sapProductConfigOrderEntryMapperCPS.getCPSFlatListContainer(cpsConfiguration);
    	List<CPSExternalValue>  externalValues = flatList.getValues();
    	for(CPSExternalValue value : externalValues ) {
    		BHGEZPriceandAvailablityRequestItem orderCfgsValueDetail = new BHGEZPriceandAvailablityRequestItem();
    		orderCfgsValueDetail.setConfigId(itemNumber.toString());
    		final String characteristicId = value.getParentCharacteristic().getId();
    		LOG.info("BHGEPriceAvailabilityUtils : cps external characteristic id " + characteristicId +" and value "+ value.getValue());
    		orderCfgsValueDetail.setCharc(characteristicId);
            orderCfgsValueDetail.setValue(value.getValue());
            orderCfgsValueDetail.setAuthor(value.getAuthor());
            request.getOrderCfgsValue().getItems().add(orderCfgsValueDetail);
    	}
    	/**
        for(UiGroupData uiGroupData : vcConfigData.getGroups()) {
            LOG.info("BHGEPriceAvailabilityCheckServiceImpl : uiGroupData name " + uiGroupData.getName() +" uiGroupData id "+uiGroupData.getId());
            for(CsticData csticData : uiGroupData.getCstics()) {
                LOG.info("BHGEPriceAvailabilityCheckServiceImpl : csticData name " + csticData.getName() +" csticData value "+csticData.getValue());
                final List<CsticValueData> valuesData = csticData.getDomainvalues().stream().filter(domainValue -> domainValue.isSelected()).collect(Collectors.toList());
                for (CsticValueData valueData : valuesData) {
                    LOG.info("BHGEPriceAvailabilityCheckServiceImpl : CsticValueData name " + valueData.getName());
                    BHGEZPriceandAvailablityRequestItem orderCfgsValueDetail = new BHGEZPriceandAvailablityRequestItem();
                    orderCfgsValueDetail.setConfigId(itemNumber);
                    orderCfgsValueDetail.setCharc(csticData.getName());
                    orderCfgsValueDetail.setValue(valueData.getName());

                    if(StringUtils.isNotEmpty(externalConfiguration)) {
                        try {
                            bhgeVCAuthorExternalConfiguration.requestAuthorPrepare(externalConfiguration, orderCfgsValueDetail);
                        }catch (JSONException e) {
                            throw new RuntimeException(e);
                        }
                    }
                    request.getOrderCfgsValue().getItems().add(orderCfgsValueDetail);
                }
            }

        }**/
    }

    public String formattedLineNumber(final Integer itemCount) {
        Integer configandkposnValue = BhgeCoreConstants.CONFIG_KPOSN_VALUE;
        int kposnConfigValue = itemCount * configandkposnValue;
        String lineItemNumber = String.format("%06d", kposnConfigValue);
        return lineItemNumber;
    }

    public PaymentTermsData getCCPaymentTrms() {
        PaymentTermsData paymentTermsData = new PaymentTermsData();
        PaymenttermModel paymentTermModel = bhgeB2BOrderService.getCCPaymentTerms("CC01");
        paymentTermsData.setCode(paymentTermModel.getCode());
        paymentTermsData.setName(paymentTermModel.getName());
        return paymentTermsData;
    }

    public Boolean checkCardExist(OrderModel orderModel) {
        BHGECreditCardPaymnentinfoModel paymentInfoModel = orderModel.getBhgeCreditCardPaymentInfo();
        Boolean isCardExist = Boolean.FALSE;
        if (paymentInfoModel != null) {
            B2BCustomerModel customerModel = (B2BCustomerModel) orderModel.getUser();
            List<BHGESavedCreditcardModel> creditCardModelList = bhgePaymentService.getSavedCards(customerModel);
            if (CollectionUtils.isNotEmpty(creditCardModelList)) {
                for (BHGESavedCreditcardModel item : creditCardModelList) {
                    if (item.getToken().equals(paymentInfoModel.getToken())) {
                        isCardExist = Boolean.TRUE;
                        LOG.info("Credit Card already saved for the user!");
                    }
                }
            }
        }
        return isCardExist;
    }


    public void processMultipleOrders(final String[] orderCodes, OrderDetailsData orderDetailsData, OrderModel orderModel) {
        LOG.info("processMultipleOrders: Processing multiple orders for order codes: " + Arrays.toString(orderCodes));
        double couponDiscountConf = Arrays.stream(orderCodes)
                .map(bhgeB2BOrderService::fetchOrderForCode)
                .filter(Objects::nonNull)
                .flatMap(order -> order.getEntries().stream())
                .flatMap(entry -> entry.getDiscountValues().stream())
                .mapToDouble(disc -> CoreAlgorithms.round(disc.getValue(), CURRENCY_FORMAT_DIGITS))
                .sum();

        orderDetailsData.setCouponDiscount(populatePrice(couponDiscountConf, orderModel.getCurrency()));
    }

    public void processSingleOrder(OrderModel orderModel, OrderDetailsData orderDetailsData) {
        LOG.info("processSingleOrder: Processing single order for order code: " + orderModel.getCode());
        double couponDiscountConf = orderModel.getEntries().stream()
                .flatMap(entry -> entry.getDiscountValues().stream())
                .mapToDouble(disc -> CoreAlgorithms.round(disc.getValue(), CURRENCY_FORMAT_DIGITS))
                .sum();

        orderDetailsData.setCouponDiscount(populatePrice(couponDiscountConf, orderModel.getCurrency()));
    }


    public void populateProductData(OrderEntryData entry) {
        String productCode = entry.getProduct().getCode();
        ProductData product = productFacade.getProductForCodeAndOptions(productCode,
                Arrays.asList(ProductOption.BASIC, ProductOption.PRICE, ProductOption.CATEGORIES));
        entry.setProduct(product);
    }


    public void populateSOAFields(OrderData orderDetails, OrderModel orderModel) {
        orderDetails.setInvoiceContact(orderModel.getInvoiceContact());
        orderDetails.setInvoicePhone(orderModel.getInvoicePhone());
        orderDetails.setSoaContact(orderModel.getSoaContact());
        orderDetails.setSoaPhone(orderModel.getSoaPhone());
        orderDetails.setEndUserCategory(orderModel.getEndUserCategory());
    }

    public void calculateTotals(List<OrderData> orderDetailsList, OrderDetailsData orderDetailsData, OrderModel orderModel) {
        LOG.info("calculateTotals: Calculating totals for order details list: " + orderDetailsList.size() + " orders.");
        double netAmountConf = 0.0;
        double yourPriceDiscountConf = 0.0;
        double totalListPriceConf = 0.0;
        double totalReturnPriceConf = 0.0;
        double totalDiscountConf = 0.0;

        for (OrderData orderDetails : orderDetailsList) {
            netAmountConf += Optional.ofNullable(orderDetails.getTotalPrice())
                    .map(price -> price.getValue().doubleValue())
                    .orElse(0.0);

            yourPriceDiscountConf += Optional.ofNullable(orderDetails.getYourPriceDiscount())
                    .map(price -> price.getValue().doubleValue())
                    .orElse(0.0);

            totalListPriceConf += Optional.ofNullable(orderDetails.getTotalListPrice())
                    .map(price -> price.getValue().doubleValue())
                    .orElse(0.0);

            totalReturnPriceConf += Optional.ofNullable(orderDetails.getTotalReturnPrice())
                    .map(price -> price.getValue().doubleValue())
                    .orElse(0.0);

            totalDiscountConf += Optional.ofNullable(orderDetails.getTotalDiscounts())
                    .map(price -> price.getValue().doubleValue())
                    .orElse(0.0);
        }

        orderDetailsData.setNetAmount(populatePrice(netAmountConf, orderModel.getCurrency()));
        orderDetailsData.setYourPriceDiscount(populatePrice(yourPriceDiscountConf, orderModel.getCurrency()));
        orderDetailsData.setTotalListPrice(populatePrice(totalListPriceConf, orderModel.getCurrency()));
        orderDetailsData.setTotalReturnListPrice(populatePrice(totalReturnPriceConf, orderModel.getCurrency()));
        orderDetailsData.setTotalDiscount(populatePrice(totalDiscountConf, orderModel.getCurrency()));
    }


}
