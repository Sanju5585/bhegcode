package com.bhge.facades.order.impl;

import java.util.*;




import jakarta.annotation.Resource;


import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.data.BHGEVCProductSummaryData;
import com.bhge.core.enums.BHGERMACommerceType;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGEPriceAvailabilityUtils;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.price.BHGEVCPriceFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.facades.user.impl.DefaultBHGEUserProfileFacade;
import com.ds.dsocc.common.dto.BHGEVCConfigurationWsDTO;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.sap.productconfig.facades.ConfigurationFacade;
import de.hybris.platform.sap.productconfig.facades.PricingData;
import de.hybris.platform.sap.productconfig.occ.PriceSummaryWsDTO;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.order.service.BHGEPriceAvailabilityCheckService;

import com.bhge.facades.data.InventoryRequestData;
import com.bhge.facades.data.InventoryRequestProductData;
import com.bhge.facades.order.BHGEPriceAvailabilityFacade;
import com.bhge.facades.user.data.BHGEBulkUploadEntryData;
import com.bhge.facades.user.data.BHGEPriceAvailabilityEntryData;
import com.bhge.product.service.BHGEProductService;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;


public class BHGEPriceAvailabilityFacadeImpl implements BHGEPriceAvailabilityFacade {
	private  static final Logger LOG = Logger.getLogger(BHGEPriceAvailabilityFacadeImpl.class);
	private static final String FOR_PRODUCT_CODE = " for product code ";
	private static final String WITH_LINE_NUMBER= " with line number: ";

	@Resource(name = "modelService")
	public ModelService modelService;

	@Resource(name = "sessionService")
	public SessionService sessionService;

	@Resource(name = "userService")
	public UserService userService;

	@Resource(name = "b2bCustomerFacade")
	protected CustomerFacade customerFacade;


	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "bhgePriceAvailabilityCheckService")
	public BHGEPriceAvailabilityCheckService bhgePriceAvailabilityCheckService;

	@Resource(name="bhgePriceAvailabilityUtils")
	private BHGEPriceAvailabilityUtils bhgePriceAvailabilityUtils;

	@Resource(name = "productService")
	BHGEProductService bhgeProductService;

	@Resource(name = "priceDataFactory")
	public PriceDataFactory priceDataFactory;
	@Resource(name = "defaultBhgeUserProfileFacade")
	DefaultBHGEUserProfileFacade defaultBhgeUserProfileFecade;
	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;
	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;
	@Resource
	private BHGESoldToUtil bhgeSoldToUtil;

    @Resource
    private BHGEVCPriceFacade bhgeVCPriceFacade;
    @Resource(name = "sapProductConfigFacade")
    private ConfigurationFacade configFacade;


	/**
	 * Retrieves price and availability information for a given inventory request.
	 * Processes the product request list, prepares the request data, and invokes the service
	 * to fetch inventory check data.
	 *
	 * @param requestData The inventory request data containing product details.
	 * @param guestSalesArea The sales area for guest users.
	 * @param productLine The product line associated with the request.
	 * @param vcConfigData Configuration data for the VC (Variant Configuration).
	 * @return The updated inventory request data with price and availability details.
	 */
	@Override
	public InventoryRequestData getPriceAndAvailability(final InventoryRequestData requestData, final String guestSalesArea, String productLine, final ConfigurationData vcConfigData,String ecaCode) {
		LOG.info("BHGEPriceAvailabilityFacadeImpl :: Entered into getPriceAndAvailability");
		LOG.info("BHGEPriceAvailabilityFacadeImpl :: Ecacode is "+ecaCode);
		if (null == requestData) return null;
		List<InventoryRequestProductData> inventoryRequestProductDataList = processProductRequestList(requestData.getProductRequestList());
		prepareRequestData(requestData, guestSalesArea);

		LOG.info("BHGEPriceAvailabilityFacadeImpl : final inventoryRequestProductDataList end size is " + inventoryRequestProductDataList.size());

		return bhgePriceAvailabilityCheckService.getInventoryCheckDataForWS(guestSalesArea, requestData, inventoryRequestProductDataList, productLine, vcConfigData,ecaCode);
	}

	@Override
	public InventoryRequestData getVCQuickOrderPriceAndAvailability(final InventoryRequestData requestData, final String guestSalesArea, String productLine, final Map<Integer, ConfigurationData> vcLongConfigDataMap) {
		LOG.info("BHGEPriceAvailabilityFacadeImpl :: Entered into getPriceAndAvailability");
		if (null == requestData) return null;
		List<InventoryRequestProductData> inventoryRequestVCProductDataList = processProductRequestList(requestData.getVcProductRequestList());
		prepareRequestData(requestData, guestSalesArea);
		LOG.info("BHGEPriceAvailabilityFacadeImpl : final inventoryRequestVCProductDataList end size is " + inventoryRequestVCProductDataList.size());

		return bhgePriceAvailabilityCheckService.getVCQuickOrderInventoryCheckDataForWS(guestSalesArea, requestData, inventoryRequestVCProductDataList, productLine, vcLongConfigDataMap);
	}


    private void prepareRequestData(InventoryRequestData requestData, String guestSalesArea) {
		LOG.info("BHGEPriceAvailabilityFacadeImpl ::Preparing request data for Inventory Request");
		// Setting the commerce type as BUY in this scenario
		requestData.setCommerceType(BHGERMACommerceType.BUY.toString());
		// Setting Cart type
		if(CollectionUtils.isNotEmpty(requestData.getProductRequestList())) {
			requestData.setCartType(bhgePriceAvailabilityUtils.determineCartType(requestData.getProductRequestList()));
		}
		if(CollectionUtils.isNotEmpty(requestData.getVcProductRequestList())) {
			requestData.setCartType(bhgePriceAvailabilityUtils.determineCartType(requestData.getVcProductRequestList()));
		}
		requestData.setCurrency(bhgePriceAvailabilityUtils.determineCurrency());
		requestData.setSoldTo(determineSoldTo(guestSalesArea, requestData));
        LOG.info("cartType is " + requestData.getCartType());
		bhgePriceAvailabilityUtils.setEndUserAddress(requestData);
	}
	private String determineSoldTo(String guestSalesArea, InventoryRequestData requestData) {
		B2BUnitModel sessionSoldto = null;
		BHGESoldToData soldTo = userService.isAnonymousUser(userService.getCurrentUser()) ?
				bhgeSoldToUtil.getDefaultB2BUnitUidOfGuestUser(guestSalesArea) :
				bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
		if (null != soldTo) {
			sessionSoldto = userProfileService.findChildB2BUnitModel(soldTo.getUid());
		}
		// Set Default shipto to the requestdata
		final BHGECustomerData geEdgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerFacade.getCurrentCustomerUid());
		final AddressModel defaultShipTo = defaultBhgeUserProfileFecade.getDefaultShipto(geEdgeCustomerData, soldTo);
		bhgePriceAvailabilityUtils.populateDefaultShipToDetails(requestData, defaultShipTo);

		return (sessionSoldto != null) ? sessionSoldto.getUid() : null;
	}
	private List<InventoryRequestProductData> processProductRequestList(List<InventoryRequestProductData> productRequestList) {
		LOG.info("BHGEPriceAvailabilityFacadeImpl : inside for loop of  inventoryRequestProductDataList");
		List<InventoryRequestProductData> inventoryRequestProductDataList = new ArrayList<>();
		for (InventoryRequestProductData inventoryProductData : productRequestList) {
			GEEdgeProductModel productModel = (GEEdgeProductModel) bhgeProductService.getProductForCode(inventoryProductData.getCode());
			LOG.info("product model pk " + productModel.getPk() + FOR_PRODUCT_CODE + productModel.getCode());
			if (bhgePriceAvailabilityUtils.isValidProduct(productModel,inventoryProductData)) {
				LOG.info("BHGEPriceAvailabilityFacadeImpl ::  Valid product found: " + inventoryProductData.getCode() + WITH_LINE_NUMBER + inventoryProductData.getItemLineNumber());
				bhgePriceAvailabilityUtils.populateProductData(inventoryProductData, productModel);
				inventoryRequestProductDataList.add(inventoryProductData);
			}
		}
		return inventoryRequestProductDataList;
	}

	/**
	 * Populates availability and price details for a given inventory request.
	 * Iterates through the product request list and validated bulk upload list to calculate and set
	 * availability details, estimated shipping dates, and price-related attributes for each product entry.
	 *
	 * @param requestData The inventory request data containing product details.
	 * @param validatedBulkUploadList The list of validated bulk upload entries.
	 * @param productLine The product line associated with the request.
	 */
	@Override
	public void populateAvailabilityAndPrice(final InventoryRequestData requestData,List<InventoryRequestProductData> inventoryProductRequestList, List<BHGEBulkUploadEntryData> validatedBulkUploadList, String productLine) {
		if (requestData == null || validatedBulkUploadList == null || inventoryProductRequestList == null ) return;

		CartModel cartModel = bhgeCartService.getSessionCart();
		try {
			for (InventoryRequestProductData entry : inventoryProductRequestList) {
				if (entry.getItemLineNumber() == null) continue;
				validatedBulkUploadList.stream()
						.filter(validatedEntry -> StringUtils.isNotEmpty(validatedEntry.getProductSNo()) &&
								entry.getItemLineNumber().equals(Integer.parseInt(validatedEntry.getProductSNo()) - 1))
						.forEach(validatedEntry -> {
							BHGEPriceAvailabilityEntryData uploadEntry = bhgePriceAvailabilityUtils.createUploadEntry(entry, productLine, validatedEntry);
							bhgePriceAvailabilityUtils.populateAvailabilityDetails(entry, uploadEntry);
							LOG.info("BHGEPriceAvailabilityFacadeImpl :: populateAvailabilityDetails - Processing entry: " + entry.getCode());
							uploadEntry.setEstShipData(bhgePriceAvailabilityUtils.calculateEstimatedShippingDates(entry, uploadEntry.getLeadTime()));
							bhgePriceAvailabilityUtils.populatePriceDetails(requestData,entry, uploadEntry, cartModel);
							LOG.info("BHGEPriceAvailabilityFacadeImpl :: populatePriceDetails - Setting price availability data for entry: " + WITH_LINE_NUMBER + uploadEntry.getProductSNo());
							validatedEntry.setPriceAvailabilityData(uploadEntry);
							validatedEntry.setProductType(entry.getProductType());
							LOG.info("Product Type for Validated Entry is set as: " + validatedEntry.getProductType() + FOR_PRODUCT_CODE + entry.getCode() + WITH_LINE_NUMBER + entry.getItemLineNumber());
						});
			}
		}
		catch (RuntimeException re) {
			LOG.error("Exception in BHGEPriceAvailabilityFacadeImpl"+ re.getMessage()+ re);
		}
	}

	/**
	 * Fetches and populates price and availability details for a list of favorite products.
	 * Creates an inventory request, retrieves price and availability data, and updates the product list
	 * with calculated attributes such as discount percentage, discount price, availability details, lead time,
	 * estimated shipping dates, and price data.
	 *
	 * @param productDataList The list of favorite products to fetch and populate details for.
	 * @param quantity The quantity of each product to be considered in the request.
	 * @param productLine The product line associated with the request.
	 */
	@Override
	public void fetchAndPopulatePriceAvailabilityDetailsForFavourites(List<ProductData> productDataList, int quantity, String productLine,String ecaCode){
		LOG.info("BHGEPriceAvailabilityFacadeImpl :: Entered into fetchAndPopulatePriceAvailabilityDetailsForFavourites : " + productLine);
		if (productDataList == null || productDataList.isEmpty()) {
			return;
		}
		try {
			//need to create configurable data object for the VC
			InventoryRequestData requestData = createInventoryRequestData(productDataList, quantity);
			requestData = getPriceAndAvailability(requestData, null, productLine, null,ecaCode);

			if (requestData != null) {
				populateAvailabilityAndPriceForFavourites(requestData, productDataList, productLine);
			}
		} catch (Exception ex) {
			LOG.error("Error while fetching requestData fetchAndPopulatePriceAvailabilityDetailsForFavourites - price and availability", ex);
		}
	}


	private InventoryRequestData createInventoryRequestData(List<ProductData> productDataList, int quantity) {
		InventoryRequestData requestData = new InventoryRequestData();
		List<InventoryRequestProductData> inventoryRequestProductDataList = new ArrayList<>();

		for (int i = 0; i < productDataList.size(); i++) {
			ProductData data = productDataList.get(i);
			InventoryRequestProductData requestProductData = new InventoryRequestProductData();
			requestProductData.setCode(data.getCode());
			requestProductData.setQuantity(quantity);
			requestProductData.setItemLineNumber(i);
			inventoryRequestProductDataList.add(requestProductData);
		}
		requestData.setProductRequestList(inventoryRequestProductDataList);
		return requestData;
	}
		public void populateAvailabilityAndPriceForFavourites ( final InventoryRequestData requestData, List<
		ProductData > productDataList, String productLine){
			CartModel cartModel = bhgeCartService.getSessionCart();
			if (requestData == null) return;
			try {
				for (InventoryRequestProductData entry : requestData.getProductRequestList()) {
					LOG.info("BHGEPriceAvailability  populateAvailabilityAndPriceForFavourites Processing entry: " + entry.getCode() + WITH_LINE_NUMBER + entry.getItemLineNumber());
					if (entry.getItemLineNumber() == null) continue;

					for (ProductData uploadEntry : productDataList) {
						if (!entry.getCode().equals(uploadEntry.getCode())) continue;

						uploadEntry.setDiscountPercentage(entry.getDiscountPercentage());
						uploadEntry.setDiscountPrice(entry.getDiscountPrice());

						// Set availability details
						bhgePriceAvailabilityUtils.setAvailabilityDetails(entry, uploadEntry);

						// Set lead time
						uploadEntry.setLeadTime(bhgePriceAvailabilityUtils.calculateLeadTime(entry.getLeadtime(), productLine));

						// Set estimated shipping dates
						uploadEntry.setEstShipData(bhgePriceAvailabilityUtils.calculateEstimatedShippingDates(entry, uploadEntry.getLeadTime()));

						// Populate price data
						bhgePriceAvailabilityUtils.populatePriceData(entry,requestData, uploadEntry, cartModel);
					}
				}
			}
			catch (RuntimeException re) {
				LOG.error("Exception in populateAvailabilityAndPriceForFavourites method BHGEPriceAvailabilityFacadeImpl: " + re.getMessage(), re);
			}
		}

    @Override
    public BHGEVCProductSummaryData getVCPriceAndAvailabilitySummary(BHGEVCConfigurationWsDTO configurationWsDTO, BHGEVCProductSummaryData bhgeVCProductSummaryData) {
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
            LOG.info("BHGEPriceAvailabilityFacadeImpl productRequestList Set for product");
            requestData.setRequestType(BhgeCoreConstants.FLAG_VL);
            LOG.info("BHGEPriceAvailabilityFacadeImpl requestType set "+requestData.getRequestType());

            requestData = getPriceAndAvailability(requestData, null, configurationWsDTO.getProductLine(), vcConfigData,null);

            if(CollectionUtils.isNotEmpty(requestData.getProductRequestList())) {
                LOG.info("DSProductsController : requestData : base price is : " + requestData.getProductRequestList().get(0).getBasePrice());
                LOG.info("DSProductsController : requestData : discount price is : " + requestData.getProductRequestList().get(0).getDiscountPrice());
                LOG.info("DSProductsController : requestData : discount percentage is : " + requestData.getProductRequestList().get(0).getDiscountPercentage());
            } else {
                LOG.info("requestData : product request list empty");
            }

            final PricingData pricingData = bhgeVCPriceFacade.getVCPriceSummary(requestData);
            String longVCProductNumber = getVCProductNumber(requestData);
            LOG.info("BHGEPriceAvailabilityFacadeImpl getVCProductNumber for product"+longVCProductNumber);
            bhgeVCProductSummaryData.setPriceSummary(pricingData);
            if(null != longVCProductNumber) {
                bhgeVCProductSummaryData.setVcLongPartNumber(longVCProductNumber);
            }
            LOG.info("DSProductsController : priceSummaryModel : base price is : " + pricingData.getBasePrice() + " total price is : "
                    + pricingData.getCurrentTotal());
        }
        return bhgeVCProductSummaryData;
    }

    private String getVCProductNumber(InventoryRequestData requestData) {
        String longVCProductNumber = null;
        if(null != requestData && null != requestData.getProductRequestList()){
            for(InventoryRequestProductData requestProductData : requestData.getProductRequestList()){
                if(null != requestProductData.getFullyConfiglongNumber()) {
                    LOG.info("BHGEPriceAvailabilityFacadeImpl fullyConfiglongNumber is " + requestProductData.getFullyConfiglongNumber());
                    longVCProductNumber = requestProductData.getFullyConfiglongNumber();
                }
            }
        }
         return longVCProductNumber;
    }

    private ConfigurationData populateVCConfiguration (final String configId) {
        final ConfigurationData configurationData = new ConfigurationData();
        configurationData.setConfigId(configId);
        configurationData.setGroupIdToDisplay(StringUtils.EMPTY);
        LOG.info("BHGEPriceAvailabilityFacadeImpl populateVCConfiguration: configId " + configId);
        final ConfigurationData backendConfiguration = configFacade.getConfiguration(configurationData);

        return backendConfiguration;
    }
    }


