package com.bhge.facades.bulkupload.impl;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.enums.MaterialChannelStatus;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.order.strategies.impl.BHGEFindPricingwithCurrentPriceFactoryStrategy;
import com.bhge.core.scpi.rfc.configresponse.BHGELongConfigConfigurationDetailItemResponse;
import com.bhge.core.scpi.rfc.configresponse.BHGELongConfigItemResponse;
import com.bhge.core.scpi.rfc.configresponse.BHGELongConfigResponse;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGEProductUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.bulkupload.BHGEDataValidatorFacade;
import com.bhge.facades.cart.converters.BHGECommonUtil;
import com.bhge.facades.data.BHGEConfigRequestValues;
import com.bhge.facades.data.InventoryRequestData;
import com.bhge.facades.data.InventoryRequestProductData;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.product.BHGEProductFacade;
import com.bhge.facades.product.data.BHGEProductAccessData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.*;
import com.bhge.product.service.BHGEProductService;
import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.catalog.references.ProductReferenceService;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import com.bhge.facades.order.BHGEPriceAvailabilityFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.europe1.model.PriceRowModel;
import de.hybris.platform.order.CartService;
import de.hybris.platform.order.model.AbstractOrderEntryProductInfoModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;
import de.hybris.platform.sap.productconfig.services.model.CPQOrderEntryProductInfoModel;
import de.hybris.platform.sap.productconfig.services.model.ProductConfigurationModel;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.log4j.Logger;
import org.spockframework.util.ObjectUtil;
import org.springframework.beans.factory.annotation.Autowired;

import jakarta.annotation.Resource;
import java.math.BigDecimal;
import java.util.*;
import java.util.stream.Collectors;


/**
 * @author riyan
 *
 */
public class BHGEDataValidatorFacadeImpl implements BHGEDataValidatorFacade {


	private  static final Logger LOG = Logger.getLogger(BHGEDataValidatorFacadeImpl.class);
	private static final  String OBSOLETE= "OBSOLETE";

	private static final String DUMMY_PRODUCT_CODE = "dummy.product.code";
	private static final String COMMA = ",";

	private static final String DEFAULT_DUMMY_VALIDATE_FLAG = "Validated";

	@Resource(name = "productConverter")
	private Converter<ProductModel, ProductData> productConverter;

	@Resource(name = "productReferenceService")
	private ProductReferenceService productReferenceService;

	@Resource(name = "bhgeProductFacade")
	private BHGEProductFacade productFacade;

	@Resource(name = "productService")
	private ProductService productService;

	@Resource(name = "catalogVersionService")
	private CatalogVersionService catalogVersionService;

	@Resource(name = "sessionService")
	public SessionService sessionService;

	@Resource(name = "currentFactoryFindPricingStrategy")
	public BHGEFindPricingwithCurrentPriceFactoryStrategy currentFactoryFindPricingStrategy;

	@Resource(name = "priceDataFactory")
	public PriceDataFactory priceDataFactory;

	@Resource(name = "b2bCustomerFacade")
	public CustomerFacade customerFacade;

	@Resource(name = "bhgeUserProfileFacade")
	public BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "bhgePriceAvailabilityFacade")
	public BHGEPriceAvailabilityFacade bhgePriceAvailabilityFacade;

	@Resource(name = "modelService")
	public ModelService modelService;

	@Resource
	private BHGEUserProfileService userProfileService;

	@Resource(name = "userService")
	public UserService userService;


	@Resource(name = "bhgeProductFacade")
	private BHGEProductFacade bhgeProductFacade;

	@Resource(name = "cartService")
	private CartService cartService;

	@Resource(name = "bhgeCartService")
	private BHGECartService bhgeCartService;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;

	private final Collection<ProductOption> OPTIONS = new ArrayList<ProductOption>(
			Arrays.asList(ProductOption.BASIC, ProductOption.PRICE, ProductOption.DESCRIPTION));

	@Autowired
	private BHGESoldToUtil bhgeSoldToUtil;

	@Resource(name = "configurationService")
	private ConfigurationService configurationService;


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.bulkupload.BHGEDataValidatorFacade#validateBulkUploadDataList(java.util.List)
	 */
	@Override
	public List<BHGEBulkUploadEntryData> validateBulkUploadDataList(final List<BHGEBulkUploadInputEntryData> inputList) {
		if (inputList == null) {
			LOG.error("Invalid bulk upload read list.");
			return null;
		}

		final List<BHGEBulkUploadEntryData> validatedBulkUploadList = new ArrayList<BHGEBulkUploadEntryData>();

		int count = 1;
		for (final BHGEBulkUploadInputEntryData inputEntry : inputList) {
			if (inputEntry == null) {
				continue;
			}

			if (StringUtils.isNotEmpty(inputEntry.getPartNum()) && !inputEntry.getPartNum().equalsIgnoreCase("partnumber")) {
				validatedBulkUploadList.add(validateBulkUploadDataEntry(inputEntry, count));
			}

			count++;
		}

		final GEEdgeCustomerModel geEdgeCustomer = (GEEdgeCustomerModel) userService.getCurrentUser();
		if (geEdgeCustomer.getDefaultSoldTo() != null
				&& StringUtils.isNotBlank(geEdgeCustomer.getDefaultSoldTo().getEcommerceFlag())) {
			if (geEdgeCustomer.getDefaultSoldTo().getEcommerceFlag().equalsIgnoreCase("E4")
					|| geEdgeCustomer.getDefaultSoldTo().getEcommerceFlag().equals(BhgeCoreConstants.ECOMMFLAG_NE)) {
				validatedBulkUploadList.forEach(entry -> entry.setStatus(Config.getString("ERROR", "Error")));
			}
		}
		return validatedBulkUploadList;
	}

	//Added for spartacus migration
	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.bulkupload.BHGEDataValidatorFacade#validateBulkUploadDataListWs(java.util.List)
	 */
	@Override
	public List<BHGEBulkUploadEntryData> validateBulkUploadDataListWs(final List<BHGEBulkUploadInputEntryData> inputList, String cartId, boolean waygateQuickOrderPage,String productLine) {
		if (inputList == null) {
			LOG.error("Invalid bulk upload read list.");
			return null;
		}
		final List<BHGEBulkUploadEntryData> validatedBulkUploadList = new ArrayList<BHGEBulkUploadEntryData>();
		final String cartCurrency = bhgeCartService.getCartByCodeForDSstore(cartId).getCurrency().getIsocode();
		int count = 1;

		for (final BHGEBulkUploadInputEntryData inputEntry : inputList)
		{
			if (inputEntry == null)
			{
				continue;
			}

			if (StringUtils.isNotEmpty(inputEntry.getPartNum()) && !inputEntry.getPartNum().equalsIgnoreCase("partnumber"))
			{
				validatedBulkUploadList.add(validateBulkUploadDataEntryWsNew(inputEntry,count, cartId, cartCurrency,productLine));
			}

			count++;
		}

		final GEEdgeCustomerModel geEdgeCustomer = (GEEdgeCustomerModel) userService.getCurrentUser();
		if (geEdgeCustomer.getDefaultSoldTo() != null
				&& StringUtils.isNotBlank(geEdgeCustomer.getDefaultSoldTo().getEcommerceFlag())) {
			if (geEdgeCustomer.getDefaultSoldTo().getEcommerceFlag().equalsIgnoreCase("E4")
					|| geEdgeCustomer.getDefaultSoldTo().getEcommerceFlag().equals(BhgeCoreConstants.ECOMMFLAG_NE)) {
				validatedBulkUploadList.forEach(entry -> entry.setStatus(Config.getString("ERROR", "Error")));
			}
		}
		return validatedBulkUploadList;
	}

	@Override
	public void fetchAndPopulatePriceAvailabilityDetails(List<BHGEBulkUploadEntryData> validatedBulkUploadList, String productLine) {
		try {
			int count = 0;
			if (validatedBulkUploadList != null) {
				List<BHGEBulkUploadEntryData> nonVCEntries = filterNonVCEntries(validatedBulkUploadList);
				if(CollectionUtils.isNotEmpty(nonVCEntries)) {
					InventoryRequestData requestData = new InventoryRequestData();
					List<InventoryRequestProductData> productDataList = new ArrayList<>();
					for (BHGEBulkUploadEntryData validatedEntry : nonVCEntries) {

						if (validatedEntry.getProductAccessData() != null && validatedEntry.getStatus() != null && !"OBSOLETE".equalsIgnoreCase(validatedEntry.getStatus()) && !"ERROR".equalsIgnoreCase(validatedEntry.getStatus())) {
							InventoryRequestProductData requestProductData = new InventoryRequestProductData();
							requestProductData.setCode(validatedEntry.getActualPartNum());
							requestProductData.setQuantity(validatedEntry.getQuantity());
							requestProductData.setItemLineNumber(Integer.parseInt(validatedEntry.getProductSNo()) - 1);
							requestProductData.setSapConfigurable(validatedEntry.getConfigurable().booleanValue());
							requestProductData.setLongConfigNumber(validatedEntry.getPartNum());
							productDataList.add(requestProductData);
						}
					}
					requestData.setProductRequestList(productDataList);
					List<InventoryRequestProductData> inventoryRequestProductDataList = requestData.getProductRequestList();
					requestData = bhgePriceAvailabilityFacade.getPriceAndAvailability(requestData, null, productLine, null,null);
					bhgePriceAvailabilityFacade.populateAvailabilityAndPrice(requestData, inventoryRequestProductDataList,validatedBulkUploadList, productLine);
				}
				List<BHGEBulkUploadEntryData> vcQuickOrderValidEntries = filterVCQuickOrderValidEntriesValidEnries(validatedBulkUploadList);
				if(CollectionUtils.isNotEmpty(vcQuickOrderValidEntries)) {
					InventoryRequestData requestData = new InventoryRequestData();
					List<InventoryRequestProductData> vcProductDataList = new ArrayList<>();
					for (BHGEBulkUploadEntryData validatedEntry : vcQuickOrderValidEntries) {

						if (validatedEntry.getProductAccessData() != null && validatedEntry.getStatus() != null && !"OBSOLETE".equalsIgnoreCase(validatedEntry.getStatus()) && !"ERROR".equalsIgnoreCase(validatedEntry.getStatus())) {
							InventoryRequestProductData requestProductData = new InventoryRequestProductData();
							requestProductData.setCode(validatedEntry.getActualPartNum());
							requestProductData.setQuantity(validatedEntry.getQuantity());
							requestProductData.setItemLineNumber(Integer.parseInt(validatedEntry.getProductSNo()) - 1);
							requestProductData.setSapConfigurable(validatedEntry.getConfigurable().booleanValue());
							requestProductData.setLongConfigNumber(validatedEntry.getPartNum());
							vcProductDataList.add(requestProductData);
						}
					}
					requestData.setVcProductRequestList(vcProductDataList);
					final Map<Integer, ConfigurationData> vcQuickOrderDataMap = prepareVCQuickOrderData(vcQuickOrderValidEntries);
					requestData = bhgePriceAvailabilityFacade.getVCQuickOrderPriceAndAvailability(requestData, null, productLine, vcQuickOrderDataMap);
					List<InventoryRequestProductData> inventoryRequestVCProductDataList = requestData.getVcProductRequestList();
					bhgePriceAvailabilityFacade.populateAvailabilityAndPrice(requestData,inventoryRequestVCProductDataList,validatedBulkUploadList, productLine);
				}
			}
		} catch (Exception ex) {
			LOG.error("Error while fetching requestData - price & availability", ex);
		}
	}

	private Map<Integer, ConfigurationData> prepareVCQuickOrderData(List<BHGEBulkUploadEntryData> vcQuickOrderValidEntries) {

		int lineItemNumber = 1000;
		int count =1;
		final Map<Integer, String> productCodes = new HashMap<Integer, String>();
		Map<Integer, ConfigurationData> configurationDataMap = new HashMap<Integer, ConfigurationData>();
		for(BHGEBulkUploadEntryData productData : vcQuickOrderValidEntries) {
			int requestLineItemNumber = count*lineItemNumber;
			productCodes.put(requestLineItemNumber, productData.getPartNum());
			count++;
		}
		BHGELongConfigResponse bhgeLongConfigResponse = bhgeProductFacade.getConfigurationFromSAP(productCodes);
		configurationDataMap = getCartConfigurationDataMap(bhgeLongConfigResponse,productCodes);
		return configurationDataMap;
	}


	private Map<Integer, ConfigurationData> getCartConfigurationDataMap(final BHGELongConfigResponse bhgeLongConfigResponse,Map<Integer, String> productCodes) {

		final Map<Integer, ConfigurationData> configDataMap = new HashMap<Integer, ConfigurationData>();
		if (null != bhgeLongConfigResponse.getItemOut() && CollectionUtils.isNotEmpty(bhgeLongConfigResponse.getItemOut().getItem())) {
			for(Map.Entry<Integer,String> entry : productCodes.entrySet()) {
				for (final BHGELongConfigItemResponse itemResponse : bhgeLongConfigResponse.getItemOut().getItem()) {
					if (entry.getKey() == itemResponse.getItemNo() && null != itemResponse.getConfigurationDetails()
							&& CollectionUtils.isNotEmpty(itemResponse.getConfigurationDetails().getItem())) {
						ConfigurationData longNumberConfigData = new ConfigurationData();
						//Map<String, String> longNumberConfigValues = new HashMap<String, String>();
                        List<BHGEConfigRequestValues> list = new ArrayList<>();
						for (BHGELongConfigConfigurationDetailItemResponse configResponse : itemResponse.getConfigurationDetails().getItem()) {
							LOG.info("getCartConfigurationDataMap Config Charc: " + configResponse.getCharc() + " Value: " + configResponse.getValue() + "Author" + configResponse.getAuthor());
							//longNumberConfigValues.put(configResponse.getCharc(), configResponse.getValue());
                            BHGEConfigRequestValues bhgeConfigRequestValues = new BHGEConfigRequestValues();
                            bhgeConfigRequestValues.setValue(configResponse.getValue());
                            bhgeConfigRequestValues.setAuthor(configResponse.getAuthor());
                            bhgeConfigRequestValues.setCharc(configResponse.getCharc());
                            list.add(bhgeConfigRequestValues);
						}
                        longNumberConfigData.setLongConfigValuesRequest(list);
						configDataMap.put(entry.getKey(), longNumberConfigData);
					}
				}
			}
		}
		LOG.info("getCartConfigurationDataMap Config Data Map Size: " + configDataMap.size());
//		for(Map.Entry<Integer, ConfigurationData> configEntry : configDataMap.entrySet()) {
//			LOG.info("getCartConfigurationDataMap Config Data for Line Item: " + configEntry.getKey() + " is " + configEntry.getValue().getCharc() +configEntry.getValue().getValue()+ configEntry.getValue().getAuthor());
////			for(BHGEConfigRequestValues longConfigEntry : configEntry.getValue().getLongConfigValuesRequest()){
////				LOG.info("getCartConfigurationDataMap Long Config Charc: " + longConfigEntry.getKey() + " Value: " + longConfigEntry.getValue());
////			}
//		}
		return configDataMap;
	}

	private List<BHGEBulkUploadEntryData> filterNonVCEntries(List<BHGEBulkUploadEntryData> validatedBulkUploadEntries) {

		final List<BHGEBulkUploadEntryData> nonVCEntries = new ArrayList<BHGEBulkUploadEntryData>();
		validatedBulkUploadEntries.forEach(entry -> {
			if(Objects.nonNull(entry.getConfigurable()) && !entry.getConfigurable().booleanValue()) {
				nonVCEntries.add(entry);
			}
		});
		return nonVCEntries;
	}

	private List<BHGEBulkUploadEntryData> filterVCQuickOrderValidEntriesValidEnries(final List<BHGEBulkUploadEntryData> validatedBulkUploadEntries ) {
			final List<BHGEBulkUploadEntryData> vcQuickOrderValidEntries = new ArrayList<BHGEBulkUploadEntryData>();
			validatedBulkUploadEntries.forEach(entry -> {
				if(Objects.nonNull(entry.getConfigurationValid()) && entry.getConfigurationValid()) {
					vcQuickOrderValidEntries.add(entry);
				}
			});
			return vcQuickOrderValidEntries;
		}
	/*@Override
	public BHGEBulkUploadEntryData validateBulkUploadDataEntryWs(BHGEBulkUploadInputEntryData inputEntry, int count, String cartId, BHGESoldToData soldTo, String cartCurrency, SalesAreaData sessionSalesAreaData, ProductModel productModel, boolean waygateQuickOrderPage) {
		LOG.info("------------------------Inside validateBulkUploadDataEntryWs method------------------------------------------------------");
		final String partNumber = (inputEntry.getPartNum() != null ? inputEntry.getPartNum().trim() : "");
		final BHGEBulkUploadEntryData validatedBulkUploadEntry = new BHGEBulkUploadEntryData();
		boolean isValidEntry = true;
		//final BHGESoldToData soldTo = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO);
		PriceData priceData = null;
		// get product by part#
		ProductData productData = null;
		HybrisStatus hybrisStatus = null;
		MaterialChannelStatus materialStatus = null;
		boolean configurable = false;
		boolean isValidPart = true;
		boolean isValidQty = true;
		boolean isObsoletePart = false;
		boolean isCheckPricePart = false;

		LOG.info("validateBulkUploadDataEntryWs - cartCurrency : " + cartCurrency);
		PriceData defaultPrice = null;
		final List<ProductData> replacementPart = new ArrayList<ProductData>();
		try {
			//final GEEdgeProductModel productModelTemp = (GEEdgeProductModel) userProfileService
			//.getProductForCode(partNumber.toUpperCase());
			if (productModel instanceof GEEdgeProductModel) {
				final GEEdgeProductModel productModelTemp = (GEEdgeProductModel) productModel;

				final BHGEProductUtil productUtil = new BHGEProductUtil();
				hybrisStatus = productUtil.getHybrisStatusForCurrentSalesAreaForBulkUpload(productModelTemp, sessionSalesAreaData, userService);
				LOG.info("validateBulkUploadDataEntryWs - hybrisStatus : " + hybrisStatus);
				materialStatus = productUtil.getMaterialStatusForCurrentSalesAreaForBulkUpload(productModelTemp, sessionSalesAreaData, userService);
				LOG.info("validateBulkUploadDataEntryWs - materialStatus : " + materialStatus);

				if (hybrisStatus != null && OBSOLETE.equals(hybrisStatus.getCode())) {
					isObsoletePart = true;
					LOG.info("validateBulkUploadDataEntryWs - productModelTemp.getHybrisStatus() " + hybrisStatus.getCode());
					*//*
					 * final Collection<ProductReferenceModel> refCollection = productModelTemp.getProductReferences(); for
					 * (final ProductReferenceModel refModel : refCollection) { if (null != refModel.getReferenceType() &&
					 * OBSOLETE.equals(refModel.getReferenceType().getCode())) { final GEEdgeProductModel targetProd =
					 * (GEEdgeProductModel) refModel.getTarget(); break; } }
					 *//*

					throw new Exception("Obsolete Product");
				}
				LOG.debug("isObsoletePart " + isObsoletePart);
				LOG.info("validateBulkUploadDataEntryWs - isObsoletePart : " + isObsoletePart);
				*//** Added case insensitive search for part# **//*
				LOG.debug("partNumber " + partNumber.toUpperCase());
				LOG.info("validateBulkUploadDataEntryWs - partNumber : " + partNumber.toUpperCase());
				//final ProductModel productModel = productModelTemp;//userProfileService.getProductForCode(partNumber.toUpperCase());
				LOG.debug("productModel " + productModel);
				LOG.info("validateBulkUploadDataEntryWs - productModel : " + productModel);
//			productData = productFacade.getProductForOptions(productModel, OPTIONS);
				productData = productConverter.convert(productModel);
				LOG.debug("productData " + productData);
				BHGEProductAccessData productAccessData = productData.getProductAccessData();
				validatedBulkUploadEntry.setProductAccessData(productAccessData);
				LOG.info("validateBulkUploadDataEntryWs - productData : " + productData);

				defaultPrice = bhgeProductFacade.getProductPriceDataWs(productModel.getCode(), bhgeSoldToUtil);
				LOG.debug("defaultPrice " + defaultPrice);
				LOG.info("validateBulkUploadDataEntryWs - defaultPrice : " + defaultPrice);
				LOG.debug("materialStatus " + materialStatus);
				LOG.info("validateBulkUploadDataEntryWs - materialStatus : " + materialStatus);
				if (((GEEdgeProductModel) productModel).getSapConfigurable() != null) {
					configurable = ((GEEdgeProductModel) productModel).getSapConfigurable();
				}
				*//*
				 * LOG.debug("productModel " + productModel); LOG.debug("soldTo " + soldTo);
				 *//*
//				if(BooleanUtils.isTrue(waygateQuickOrderPage)){
//					LOG.info("TA937504: Inside waygate quick Order specfic flow");
//					LOG.info("TA937504: Product Data for product: "+ productData.getCode());
//					//LOG.info("TA937504: Product Price before ERP call"+ productData.getPrice().getFormattedValue());
//					priceData = getPriceData(productModelTemp, productData);
//					LOG.info("TA937504: ERP PriceData: "+ priceData.getFormattedValue());
//					LOG.info("TA937504: Product Data for product: "+ productData.getCode());
//					validatedBulkUploadEntry.setFormattedPrice(priceData.getFormattedValue());
//				}else{
//
//				}
				priceData = getProductPriceData(productModel, soldTo);
				LOG.debug("priceData " + priceData);
				LOG.info("validateBulkUploadDataEntryWs - priceData : " + priceData);
				//productModel.getSupercategories().iterator().next();

				if (hybrisStatus == null || materialStatus == null || hybrisStatus.equals(HybrisStatus.NOSELL)
						|| !(materialStatus.equals(MaterialChannelStatus.P1) || materialStatus.equals(MaterialChannelStatus.P2)
						|| materialStatus.equals(MaterialChannelStatus.P3) || materialStatus.equals(MaterialChannelStatus.P5)
						|| materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO))) {
					LOG.info("TA937504: Inside status check");
					productData = null;
					isValidEntry = false;
					configurable = false;
					isValidPart = false;
					LOG.info("isValidPart 1 " + isValidPart);
				} else if (productModel.getSupercategories().size() == 0) {
					LOG.info("TA937504: Inside Super Categories check");
					productData = null;
					isValidEntry = false;
					configurable = false;
					isValidPart = false;
					LOG.info("isValidPart 2 " + isValidPart);
				}
				// If product has no valid price
				*//*
				 * else if (defaultPrice == null && !hybrisStatus.equals(HybrisStatus.CATALOG)) { productData = null;
				 * isValidEntry = false; isValidPart = false; LOG.debug("isValidPart 3 " + isValidPart); }
				 *//*

				else if (inputEntry.getUnitPrice() != null || priceData == null
						|| (priceData != null && priceData.getCurrencyIso() != null && !priceData.getCurrencyIso().equals(cartCurrency))) {
					LOG.info("TA937504: Inside Unit PRice");
					isCheckPricePart = true;
					LOG.info("isCheckPricePart " + isCheckPricePart);
				}
				if (null == productModelTemp.getProductType()) {
					LOG.info("TA937504: Product model null ");
					isValidEntry = false;
					isCheckPricePart = false;
					configurable = false;
					LOG.info("isCheckPricePart " + isCheckPricePart);
				}
			}
		}
		// invalid part#
		catch (final Exception e) {
			LOG.error("Exception number: '" + e + "'");
			LOG.error("Invalid parts number: '" + partNumber + "'");
			isValidEntry = false;
			isValidPart = false;
			LOG.info("isValidPart 4 exc " + isValidPart);
		}
		validatedBulkUploadEntry.setPartNum(partNumber.isEmpty() ? null : partNumber.trim());
		// set desc and price for bulk upload. May change for OCR requirements
		// set QTY
		Integer qty = new Integer(1);
		final String inputQty = inputEntry.getQuantity();
		try {
			// if no value, default to 1 is done at line 261
			if (null != inputQty && !inputQty.isEmpty() && inputQty.trim().matches("-?\\d+")) {
				qty = Integer.valueOf(inputQty.trim());
			}


			// if non positive integer
			if (qty.intValue() < 1 || qty.intValue() > 9999) {
				isValidEntry = false;
				isValidQty = false;
				LOG.info("isValidPart 5  " + isValidPart);
			}
		}
		// invalid part#
		catch (final Exception e) {
			LOG.error("Invalid quantity: '" + inputEntry.getQuantity() + "' for parts number: '" + partNumber + "'"
					+ ExceptionUtils.getStackTrace(e));
			isValidEntry = false;
			isValidQty = false;
			LOG.info("isValidPart 6  " + isValidPart);
		}
		validatedBulkUploadEntry.setQuantity(qty);
		LOG.info("isValidEntry 6 :  " + isValidEntry);
		if (isValidEntry && null != productData) {
			LOG.info("isValidEntry 7  " + isValidEntry);
			validatedBulkUploadEntry.setDescription(productData.getName() != null ? productData.getName() : "");

			if (priceData != null && priceData.getCurrencyIso().equals(cartCurrency)) {
				validatedBulkUploadEntry.setUnitPrice(priceData);
			} else if (productData.getPrice() != null && productData.getPrice().getCurrencyIso().equals(cartCurrency)) {
				validatedBulkUploadEntry.setUnitPrice(productData.getPrice());
			}

			validatedBulkUploadEntry.setProductImage(productData.getPicture());
			validatedBulkUploadEntry.setUrl(productData.getUrl());
			if (null != productModel && !((GEEdgeProductModel) productModel).getSapConfigurable()) {
				validatedBulkUploadEntry.setPartNum(productData.getCode());
			}

			*//** Add price from SAP for check price products *//*
			if (inputEntry.getUnitPrice() != null) {
				final PriceData priceDataFromSAP = new PriceData();
				priceDataFromSAP.setFormattedValue(inputEntry.getUnitPrice());
				//priceDataFromSAP.setPriceValue(inputEntry.getUnitPrice());
				priceDataFromSAP.setValue(new BigDecimal(inputEntry.getUnitPrice()));
				validatedBulkUploadEntry.setUnitPrice(priceDataFromSAP);
				validatedBulkUploadEntry.setDescription(productData.getName() != null ? productData.getName() : "" + " Check Price");
			}
		} else {
			LOG.info("isValidEntry 8  " + isValidEntry);
			final String inputDescription = inputEntry.getDescription();
			validatedBulkUploadEntry.setDescription(inputDescription);

			if (inputEntry.getUnitPrice() != null && !inputEntry.getUnitPrice().isEmpty()) {
				priceData = new PriceData();
				priceData.setFormattedValue(inputEntry.getUnitPrice());
			}

			validatedBulkUploadEntry.setUnitPrice(priceData);
		}

		// set status
		try {
			final Map<String, Object> statusMap = new HashMap<String, Object>();
			if (LOG.isDebugEnabled()) {
				LOG.debug("configurable1 " + configurable);
			}
			if (configurable && hybrisStatus.equals(HybrisStatus.SELL)) {
				validatedBulkUploadEntry.setStatus(Config.getString("CONFIGURE", "Configure"));
			} else if (isValidPart && hybrisStatus.equals(HybrisStatus.CATALOG)) {
				validatedBulkUploadEntry.setStatus(Config.getString("CATALOG", "Catalog only"));
			} else if (inputEntry.getUnitPrice() == null && isValidPart && isCheckPricePart) {
				validatedBulkUploadEntry.setStatus(Config.getString("CHECKPRICE", "Check Price"));
			} else {
				validatedBulkUploadEntry
						.setStatus(isValidEntry ? Config.getString("VALIDATED", "Validated") : Config.getString("ERROR", "Error"));
			}
			LOG.debug("isObsoletePart  " + isObsoletePart);
			if (isObsoletePart) {
				validatedBulkUploadEntry.setStatus(Config.getString("Obsolete", "Obsolete"));
			}
			LOG.info("validateBulkUploadDataEntryWs - status : " + validatedBulkUploadEntry.getStatus());
			statusMap.put("isValidPart", isValidPart);
			statusMap.put("isValidQty", isValidQty);

			if (isObsoletePart) {
				final GEEdgeProductModel productModelTemp1 = (GEEdgeProductModel) productService.getProductForCode(partNumber);
				final Collection<ProductReferenceModel> refCollection = productModelTemp1.getProductReferences();
				for (final ProductReferenceModel refModel : refCollection) {
					if (null != refModel.getReferenceType() && "OBSOLETE".equals(refModel.getReferenceType().getCode())) {
						final GEEdgeProductModel targetProd = (GEEdgeProductModel) refModel.getTarget();
						final ProductData obsoleteProductData = productFacade.getProductForOptions(targetProd, OPTIONS);
						replacementPart.add(obsoleteProductData);
					}
				}
				statusMap.put("replacementPart", replacementPart);
			}
			validatedBulkUploadEntry.setStatusMap(statusMap);
		} catch (final Exception statusError) {
			BHGECommonUtil.getStackTrace(statusError);
			LOG.error("Invalid Status " + statusError);
		}

		validatedBulkUploadEntry.setProductSNo(count + "");
		*//** Save the validation changes *//*
		List<BHGEBulkUploadEntryData> validatedBulkUploadList = null;
		final List<BHGEBulkUploadEntryData> validatedUploadList = (List<BHGEBulkUploadEntryData>) sessionService
				.getAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);
		if (null != validatedUploadList && validatedUploadList.size() > 0) {
			validatedBulkUploadList = new ArrayList<BHGEBulkUploadEntryData>(validatedUploadList);
			for (final BHGEBulkUploadEntryData bulkUploadEntryData : validatedBulkUploadList) {
				if (StringUtils.isNotBlank(bulkUploadEntryData.getProductSNo()) && StringUtils.isNotBlank(inputEntry.getLineNo())
						&& inputEntry.getLineNo().equals(bulkUploadEntryData.getProductSNo())) {
					//bulkUploadEntryData.setIsAddedToCart(Boolean.TRUE);
					bulkUploadEntryData.setPartNum(partNumber);
					bulkUploadEntryData.setQuantity(qty.intValue());
					bulkUploadEntryData.setStatus(validatedBulkUploadEntry.getStatus());
					bulkUploadEntryData.setConfigurationflag(validatedBulkUploadEntry.getConfigurationflag());
					bulkUploadEntryData.setDescription(validatedBulkUploadEntry.getDescription());
					bulkUploadEntryData.setIsAddedToCart(validatedBulkUploadEntry.getIsAddedToCart());
					bulkUploadEntryData.setProductImage(validatedBulkUploadEntry.getProductImage());
					bulkUploadEntryData.setStatusMap(validatedBulkUploadEntry.getStatusMap());
					bulkUploadEntryData.setUnitPrice(validatedBulkUploadEntry.getUnitPrice());
					bulkUploadEntryData.setUrl(validatedBulkUploadEntry.getUrl());

					sessionService.removeAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);
					sessionService.setAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA, validatedBulkUploadList);

					break;
				}
			}
		}

		return validatedBulkUploadEntry;
	}*/

	/************** New Method start for validateBulkUploadData-- ************/

	@Override
	public BHGEBulkUploadEntryData validateBulkUploadDataEntryWsNew(BHGEBulkUploadInputEntryData inputEntry, int count,String cartId, String cartCurrency,String productLine) {
		LOG.info("------------------------Inside validateBulkUploadDataEntryWsNew method------------------------------------------------------");
		final BHGEBulkUploadEntryData validatedBulkUploadEntry = new BHGEBulkUploadEntryData();
		final SalesAreaData sessionSalesAreaData = bhgeSoldToUtil.getSalesAreaData();
		final String dummyProductCode = configurationService.getConfiguration().getString(DUMMY_PRODUCT_CODE);
		List<String> productLines = getProductLineList();
		LOG.info("BHGEDataValidatorFacadeImpl:: Dummy Product code is : " + dummyProductCode);
			final String partNumber = (inputEntry.getPartNum() != null ? inputEntry.getPartNum().trim() : "");
			if (partNumber.contains("-")) {
				final GEEdgeProductModel geEdgeProductModel = getProductModel(partNumber);
				if (StringUtils.isNotEmpty(geEdgeProductModel.getCode())) {
					validatedBulkUploadEntry.setBaseProductValid(true);
					validatedBulkUploadEntry.setDummyProduct(false);
					validatedBulkUploadEntry.setActualPartNum(geEdgeProductModel.getCode());
					validatedBulkUploadEntry.setConfigurationValid(false);
                    if(null != geEdgeProductModel.getProductType()) {
                        validatedBulkUploadEntry.setProductType(geEdgeProductModel.getProductType().getCode());
                    }
					updateBulkUploadEntryData(inputEntry,count,geEdgeProductModel, validatedBulkUploadEntry, cartId,sessionSalesAreaData);
				} else {
					String[] stringArray = partNumber.split("-");
					String productCodeFromLongNumber = stringArray[0];
					final GEEdgeProductModel geEdgeProductModelFromLongNumber = getProductModel(productCodeFromLongNumber);
						if (StringUtils.isNotEmpty(geEdgeProductModelFromLongNumber.getCode())) {
							validatedBulkUploadEntry.setBaseProductValid(true);
							validatedBulkUploadEntry.setDummyProduct(false);
							validatedBulkUploadEntry.setActualPartNum(geEdgeProductModelFromLongNumber.getCode());
							boolean configValid = bhgeProductFacade.isLongConfigurationValid(partNumber);
							validatedBulkUploadEntry.setConfigurationValid(configValid);
                            if(null != geEdgeProductModel.getProductType()) {
                                validatedBulkUploadEntry.setProductType(geEdgeProductModel.getProductType().getCode());
                            }
							updateBulkUploadEntryData(inputEntry,count,geEdgeProductModelFromLongNumber, validatedBulkUploadEntry, cartId,sessionSalesAreaData);
						} else {
							if (productLines.contains(productLine)) {
								validatedBulkUploadEntry.setBaseProductValid(false);
								validatedBulkUploadEntry.setDummyProduct(true);
								validatedBulkUploadEntry.setActualPartNum(dummyProductCode);
								validatedBulkUploadEntry.setConfigurationValid(false);
                                if(null != geEdgeProductModel.getProductType()) {
                                    validatedBulkUploadEntry.setProductType(geEdgeProductModel.getProductType().getCode());
                                }
								validatedBulkUploadEntry.setStatus(DEFAULT_DUMMY_VALIDATE_FLAG);
								final GEEdgeProductModel dummyProductModel = getProductModel(dummyProductCode);
								updateBulkUploadEntryData(inputEntry,count,dummyProductModel, validatedBulkUploadEntry, cartId,sessionSalesAreaData);
								validatedBulkUploadEntry.getProductAccessData().setIsBuy(true);
								validatedBulkUploadEntry.setStatus(Config.getString("VALIDATED", "Validated"));
							}
						}
					}

			} else {
				final GEEdgeProductModel geEdgeProductModelFromInputProduct = getProductModel(partNumber);
					if (StringUtils.isNotEmpty(geEdgeProductModelFromInputProduct.getCode())) {
						validatedBulkUploadEntry.setActualPartNum(geEdgeProductModelFromInputProduct.getCode());
						validatedBulkUploadEntry.setBaseProductValid(true);
						validatedBulkUploadEntry.setDummyProduct(false);
						validatedBulkUploadEntry.setConfigurationValid(false);
                        if(null != geEdgeProductModelFromInputProduct.getProductType()) {
                            validatedBulkUploadEntry.setProductType(geEdgeProductModelFromInputProduct.getProductType().getCode());
                        }
						updateBulkUploadEntryData(inputEntry,count,geEdgeProductModelFromInputProduct, validatedBulkUploadEntry, cartId,sessionSalesAreaData);
					} else {
						if (productLines.contains(productLine)) {
							validatedBulkUploadEntry.setActualPartNum(dummyProductCode);
							validatedBulkUploadEntry.setBaseProductValid(false);
							validatedBulkUploadEntry.setDummyProduct(true);
							validatedBulkUploadEntry.setConfigurationValid(false);
                            if(null != geEdgeProductModelFromInputProduct.getProductType()) {
                                validatedBulkUploadEntry.setProductType(geEdgeProductModelFromInputProduct.getProductType().getCode());
                            }
                             validatedBulkUploadEntry.setStatus(DEFAULT_DUMMY_VALIDATE_FLAG);
							final GEEdgeProductModel dummyProductModel = getProductModel(dummyProductCode);
							updateBulkUploadEntryData(inputEntry,count,dummyProductModel, validatedBulkUploadEntry, cartId,sessionSalesAreaData);
							validatedBulkUploadEntry.getProductAccessData().setIsBuy(true);
							validatedBulkUploadEntry.setStatus(Config.getString("VALIDATED", "Validated"));
						}
					}
				}
		return validatedBulkUploadEntry;
	}

	private GEEdgeProductModel getProductModel(final String productCode) {

		GEEdgeProductModel geEdgeProductModel = null ;
		try {
			final ProductModel productModel = productService.getProductForCode(productCode);
			if (null != productModel && productModel instanceof GEEdgeProductModel) {
				geEdgeProductModel = (GEEdgeProductModel) productModel;
				return geEdgeProductModel;
			}
		} catch(Exception e){
			LOG.error("BHGEDataValidatorFacadeImpl : product not found for the given partNumber " + productCode);

			geEdgeProductModel =  modelService.create(GEEdgeProductModel.class);
		}
		return geEdgeProductModel;
	}


	private void updateBulkUploadEntryData(final BHGEBulkUploadInputEntryData inputEntry,int count,final GEEdgeProductModel productModelTemp ,final BHGEBulkUploadEntryData validatedBulkUploadEntry,final String cartId,final SalesAreaData sessionSalesAreaData ){

			boolean isValidEntry = true;
			boolean isValidQty = true;
			PriceData priceData = null;
			ProductData productData = null;
			HybrisStatus hybrisStatus = null;
			MaterialChannelStatus materialStatus = null;
			boolean isValidPart = true;
			boolean isObsoletePart = false;
			boolean isCheckPricePart = false;
			PriceData defaultPrice = null;
			boolean configurable = false;
			final List<ProductData> replacementPart = new ArrayList<ProductData>();
			final BHGESoldToData soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
			final String cartCurrency = bhgeCartService.getCartByCodeForDSstore(cartId).getCurrency().getIsocode();

			final String partNumber = (inputEntry.getPartNum() != null ? inputEntry.getPartNum().trim() : "");
			try {
					final BHGEProductUtil productUtil = new BHGEProductUtil();
					hybrisStatus = productUtil.getHybrisStatusForCurrentSalesAreaForBulkUpload(productModelTemp, sessionSalesAreaData, userService);
					LOG.info("validateBulkUploadDataEntryWs - hybrisStatus : " + hybrisStatus);
					materialStatus = productUtil.getMaterialStatusForCurrentSalesAreaForBulkUpload(productModelTemp, sessionSalesAreaData, userService);
					LOG.info("validateBulkUploadDataEntryWs - materialStatus : " + materialStatus);

					if (hybrisStatus != null && "OBSOLETE".equals(hybrisStatus.getCode())) {
						isObsoletePart = true;
						LOG.info("validateBulkUploadDataEntryWs - productModelTemp.getHybrisStatus() " + hybrisStatus.getCode());
						throw new Exception("Obsolete Product");
					}
					LOG.debug("isObsoletePart " + isObsoletePart);
					productData = productConverter.convert(productModelTemp);
					BHGEProductAccessData productAccessData = productData.getProductAccessData();
					validatedBulkUploadEntry.setProductAccessData(productAccessData);

					defaultPrice = bhgeProductFacade.getProductPriceDataWs(productModelTemp.getCode(), bhgeSoldToUtil);
					if (productModelTemp.getSapConfigurable()) {
					configurable =productModelTemp.getSapConfigurable();
					}
					LOG.info("validateBulkUploadDataEntryWs - materialStatus : " + materialStatus);
					priceData = getProductPriceData(productModelTemp, soldTo);

					if (hybrisStatus == null || materialStatus == null || hybrisStatus.equals(HybrisStatus.NOSELL)
							|| !(materialStatus.equals(MaterialChannelStatus.P1) || materialStatus.equals(MaterialChannelStatus.P2)
							|| materialStatus.equals(MaterialChannelStatus.P3) || materialStatus.equals(MaterialChannelStatus.P5)
							|| materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO))) {
						LOG.info("TA937504: Inside status check");
						productData = null;
						isValidEntry = false;
						configurable = false;
						isValidPart = false;
						LOG.info("isValidPart 1 " + isValidPart);
					} else if (productModelTemp.getSupercategories().size() == 0) {
						LOG.info("TA937504: Inside Super Categories check");
						productData = null;
						isValidEntry = false;
						configurable = false;
						isValidPart = false;
						LOG.info("isValidPart 2 " + isValidPart);
					} else if (inputEntry.getUnitPrice() != null || priceData == null
							|| (priceData != null && priceData.getCurrencyIso() != null && !priceData.getCurrencyIso().equals(cartCurrency))) {
						LOG.info("TA937504: Inside Unit PRice");
						isCheckPricePart = true;
						LOG.info("isCheckPricePart " + isCheckPricePart);
					}
					if (null == productModelTemp.getProductType()) {
						LOG.info("TA937504: Product model null ");
						isValidEntry = false;
						isCheckPricePart = false;
						configurable = false;
						LOG.info("isCheckPricePart " + isCheckPricePart);
					}
				validatedBulkUploadEntry.setConfigurable(configurable);
			}
			// invalid part#
			catch (final Exception e) {
				LOG.error("Exception number: '" + e + "'");
				LOG.error("Invalid parts number: '" + inputEntry.getPartNum() != null ? inputEntry.getPartNum() : StringUtils.EMPTY + "'");
				isValidEntry = false;
				isValidPart = false;
				LOG.info("isValidPart 4 exc " + isValidPart);
			}

		validatedBulkUploadEntry.setPartNum(partNumber.isEmpty() ? null : partNumber.trim());
		// set QTY
		Integer qty = new Integer(1);
		final String inputQty = inputEntry.getQuantity();
		try {
			// if no value, default to 1 is done at line 261
			if (null != inputQty && !inputQty.isEmpty() && inputQty.trim().matches("-?\\d+")) {
				qty = Integer.valueOf(inputQty.trim());
			}

			// if non positive integer
			if (qty.intValue() < 1 || qty.intValue() > 9999) {
				isValidEntry = false;
				isValidQty = false;
				LOG.info("isValidPart 5  " + isValidPart);
			}
		}
		// invalid part#
		catch (final Exception e) {
			LOG.error("Invalid quantity: '" + inputEntry.getQuantity() + "' for parts number: '" + partNumber + "'"
					+ ExceptionUtils.getStackTrace(e));
			isValidEntry = false;
			isValidQty = false;
			LOG.info("isValidPart 6  " + isValidPart);
		}
		validatedBulkUploadEntry.setQuantity(qty);
		LOG.info("isValidEntry 6 :  " + isValidEntry);
		if (isValidEntry && null != productData) {
			LOG.info("isValidEntry 7  " + isValidEntry);
			validatedBulkUploadEntry.setDescription(productData.getName() != null ? productData.getName() : "");

			if (priceData != null && priceData.getCurrencyIso().equals(cartCurrency)) {
				validatedBulkUploadEntry.setUnitPrice(priceData);
			} else if (productData.getPrice() != null && productData.getPrice().getCurrencyIso().equals(cartCurrency)) {
				validatedBulkUploadEntry.setUnitPrice(productData.getPrice());
			}

			validatedBulkUploadEntry.setProductImage(productData.getPicture());
			validatedBulkUploadEntry.setUrl(productData.getUrl());
			/** Add price from SAP for check price products */
			if (inputEntry.getUnitPrice() != null) {
				final PriceData priceDataFromSAP = new PriceData();
				priceDataFromSAP.setFormattedValue(inputEntry.getUnitPrice());
				priceDataFromSAP.setValue(new BigDecimal(inputEntry.getUnitPrice()));
				validatedBulkUploadEntry.setUnitPrice(priceDataFromSAP);
				validatedBulkUploadEntry.setDescription(productData.getName() != null ? productData.getName() : "" + " Check Price");
			}
		} else {
			LOG.info("isValidEntry 8  " + isValidEntry);
			final String inputDescription = inputEntry.getDescription();
			validatedBulkUploadEntry.setDescription(inputDescription);

			if (inputEntry.getUnitPrice() != null && !inputEntry.getUnitPrice().isEmpty()) {
				priceData = new PriceData();
				priceData.setFormattedValue(inputEntry.getUnitPrice());
			}

			validatedBulkUploadEntry.setUnitPrice(priceData);
		}

		// set status
		try {
			final Map<String, Object> statusMap = new HashMap<String, Object>();
			if (LOG.isDebugEnabled()) {
				LOG.debug("configurable1 " + configurable);
			}
			configurable = validatedBulkUploadEntry.getConfigurable().booleanValue();
			if (configurable) {
				validatedBulkUploadEntry.setStatus(Config.getString("CONFIGURE", "Configure"));
			} else if (isValidPart && hybrisStatus.equals(HybrisStatus.CATALOG)) {
				validatedBulkUploadEntry.setStatus(Config.getString("CATALOG", "Catalog only"));
			} else if (inputEntry.getUnitPrice() == null && isValidPart && isCheckPricePart) {
				validatedBulkUploadEntry.setStatus(Config.getString("CHECKPRICE", "Check Price"));
			} else if(null != validatedBulkUploadEntry.getDummyProduct() && validatedBulkUploadEntry.getDummyProduct().booleanValue()) {
				LOG.info("Inside validateBulkUploadDataEntryWsNew - Dummy Product validated  :  true and setting status as Validated");
				validatedBulkUploadEntry.setStatus(Config.getString("VALIDATED", "Validated"));
			} else {
				validatedBulkUploadEntry
						.setStatus(isValidEntry ? Config.getString("VALIDATED", "Validated") : Config.getString("ERROR", "Error"));
			}
			LOG.debug("isObsoletePart  " + isObsoletePart);
			if (isObsoletePart) {
				validatedBulkUploadEntry.setStatus(Config.getString("Obsolete", "Obsolete"));
			}
			LOG.info("validateBulkUploadDataEntryWs - status : " + validatedBulkUploadEntry.getStatus());
			statusMap.put("isValidPart", isValidPart);
			statusMap.put("isValidQty", isValidQty);

			if (isObsoletePart) {
				final GEEdgeProductModel productModelTemp1 = (GEEdgeProductModel) productService.getProductForCode(partNumber);
				final Collection<ProductReferenceModel> refCollection = productModelTemp1.getProductReferences();
				for (final ProductReferenceModel refModel : refCollection) {
					if (null != refModel.getReferenceType() && "OBSOLETE".equals(refModel.getReferenceType().getCode())) {
						final GEEdgeProductModel targetProd = (GEEdgeProductModel) refModel.getTarget();
						final ProductData obsoleteProductData = productFacade.getProductForOptions(targetProd, OPTIONS);
						replacementPart.add(obsoleteProductData);
					}
				}
				statusMap.put("replacementPart", replacementPart);
			}
			validatedBulkUploadEntry.setStatusMap(statusMap);
		} catch (final Exception statusError) {
			BHGECommonUtil.getStackTrace(statusError);
			LOG.error("Invalid Status " + statusError);
		}

		validatedBulkUploadEntry.setProductSNo(count + "");
		/** Save the validation changes */
		List<BHGEBulkUploadEntryData> validatedBulkUploadList = null;
		final List<BHGEBulkUploadEntryData> validatedUploadList = (List<BHGEBulkUploadEntryData>) sessionService
				.getAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);
		if (null != validatedUploadList && validatedUploadList.size() > 0) {
			validatedBulkUploadList = new ArrayList<BHGEBulkUploadEntryData>(validatedUploadList);
			for (final BHGEBulkUploadEntryData bulkUploadEntryData : validatedBulkUploadList) {
				if (StringUtils.isNotBlank(bulkUploadEntryData.getProductSNo()) && StringUtils.isNotBlank(inputEntry.getLineNo())
						&& inputEntry.getLineNo().equals(bulkUploadEntryData.getProductSNo())) {
					//bulkUploadEntryData.setIsAddedToCart(Boolean.TRUE);
					bulkUploadEntryData.setPartNum(partNumber);
					bulkUploadEntryData.setQuantity(qty.intValue());
					bulkUploadEntryData.setStatus(validatedBulkUploadEntry.getStatus());
					bulkUploadEntryData.setConfigurationflag(validatedBulkUploadEntry.getConfigurationflag());
					bulkUploadEntryData.setDescription(validatedBulkUploadEntry.getDescription());
					bulkUploadEntryData.setIsAddedToCart(validatedBulkUploadEntry.getIsAddedToCart());
					bulkUploadEntryData.setProductImage(validatedBulkUploadEntry.getProductImage());
					bulkUploadEntryData.setStatusMap(validatedBulkUploadEntry.getStatusMap());
					bulkUploadEntryData.setUnitPrice(validatedBulkUploadEntry.getUnitPrice());
					bulkUploadEntryData.setUrl(validatedBulkUploadEntry.getUrl());

					sessionService.removeAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);
					sessionService.setAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA, validatedBulkUploadList);

					break;
				}
			}
		}

		}


	private List<String> getProductLineList() {
		final String productLine = configurationService.getConfiguration().getString(BhgeCoreConstants.QUICK_ORDER_DUMMY_PRODUCT_UNIT);
		List<String> productLineList = new ArrayList<String>(Arrays.asList(productLine.split(COMMA)));
		return productLineList;
	}




	/************** New Method end---Sridhar ************/



	private PriceData getPriceData(GEEdgeProductModel productModel, ProductData productData) {
		PriceData priceData = new PriceData();
		LOG.info("TA937504: Inside SAP Price call");
		if(((BHGEProductService)productService).isVisibleForCurrentUser(productModel)){
			if (userService.isAnonymousUser(userService.getCurrentUser()))
			{
				final ProductData productPopulatedData = getProductDataFromProductCode(productModel.getCode());
				if (BooleanUtils.isNotTrue(productPopulatedData.getIsAnonymousBuy()) || Objects.isNull(sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA)))
				{
					return priceData;
				}
			}
			productData = bhgeCartService.getPriceFromRFC(productModel);
			if (productData != null)
			{
				priceData = productData.getPrice();
				if (priceData != null)
				{
					final CurrencyModel currency = commonI18NService
							.getCurrency(priceData.getCurrencyIso() != null ? priceData.getCurrencyIso() : "USD");
					priceData.setFormattedValue(
							currency.getIsocode() + " " + currency.getSymbol() + priceData.getFormattedValue());
				}
				if (productData.getConnectivityerror() != null)
				{
					priceData = populateConnectivityError(productData);
				}
			}
		}
		return priceData;
	}

	protected PriceData populateConnectivityError(final ProductData productData)
	{
		final PriceData priceData = new PriceData();

		priceData.setConnectivityerror(productData.getConnectivityerror());
		return priceData;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.bulkupload.BHGEDataValidatorFacade#validateBulkUploadDataEntry(com.bhge.facades.user.data.
	 * BHGEBulkUploadInputEntryData, int)
	 */
	@Override
	public BHGEBulkUploadEntryData validateBulkUploadDataEntry(final BHGEBulkUploadInputEntryData inputEntry, final int count)
	{
		final String partNumber = (inputEntry.getPartNum() != null ? inputEntry.getPartNum().trim() : "");
		final BHGEBulkUploadEntryData validatedBulkUploadEntry = new BHGEBulkUploadEntryData();
		boolean isValidEntry = true;
		final BHGESoldToData soldTo = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO);
		PriceData priceData = null;
		// get product by part#
		ProductData productData = null;
		HybrisStatus hybrisStatus = null;
		MaterialChannelStatus materialStatus = null;
		boolean configurable = false;
		boolean isValidPart = true;
		boolean isValidQty = true;
		boolean isObsoletePart = false;
		boolean isCheckPricePart = false;

		final String cartCurrency = cartService.getSessionCart().getCurrency().getIsocode();

		PriceData defaultPrice = null;
		final List<ProductData> replacementPart = new ArrayList<ProductData>();
		try
		{
			final GEEdgeProductModel productModelTemp = (GEEdgeProductModel) userProfileService
					.getProductForCode(partNumber.toUpperCase());
			final BHGEProductUtil productUtil = new BHGEProductUtil();
			hybrisStatus = productUtil.getHybrisStatusForCurrentSalesArea(productModelTemp, sessionService, userService);
			materialStatus = productUtil.getMaterialStatusForCurrentSalesArea(productModelTemp, sessionService, userService);
			LOG.debug("productModelTemp.getHybrisStatus() " + hybrisStatus.getCode());
			if (OBSOLETE.equals(hybrisStatus.getCode()))
			{
				isObsoletePart = true;
				/*
				 * final Collection<ProductReferenceModel> refCollection = productModelTemp.getProductReferences(); for
				 * (final ProductReferenceModel refModel : refCollection) { if (null != refModel.getReferenceType() &&
				 * OBSOLETE.equals(refModel.getReferenceType().getCode())) { final GEEdgeProductModel targetProd =
				 * (GEEdgeProductModel) refModel.getTarget(); break; } }
				 */

				throw new Exception("Obsolete Product");
			}
			LOG.debug("isObsoletePart " + isObsoletePart);
			/** Added case insensitive search for part# **/
			LOG.debug("partNumber " + partNumber.toUpperCase());
			final ProductModel productModel = productModelTemp;//userProfileService.getProductForCode(partNumber.toUpperCase());
			LOG.debug("productModel " + productModel);
			productData = productFacade.getProductForOptions(productModel, OPTIONS);
			LOG.debug("productData " + productData);

			defaultPrice = bhgeProductFacade.getProductPriceData(productModel.getCode());
			LOG.debug("defaultPrice " + defaultPrice);
			LOG.debug("materialStatus " + materialStatus);
			if (((GEEdgeProductModel) productModel).getSapConfigurable() != null)
			{
				configurable = ((GEEdgeProductModel) productModel).getSapConfigurable();
			}
			/*
			 * LOG.debug("productModel " + productModel); LOG.debug("soldTo " + soldTo);
			 */
			priceData = getProductPriceData(productModel, soldTo);
			LOG.debug("priceData " + priceData);
			//productModel.getSupercategories().iterator().next();

			if (hybrisStatus == null || materialStatus == null || hybrisStatus.equals(HybrisStatus.NOSELL)
					|| !(materialStatus.equals(MaterialChannelStatus.P1) || materialStatus.equals(MaterialChannelStatus.P2)
							|| materialStatus.equals(MaterialChannelStatus.P3) || materialStatus.equals(MaterialChannelStatus.P5)
							|| materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO)))
			{
				productData = null;
				isValidEntry = false;
				configurable = false;
				isValidPart = false;
				LOG.debug("isValidPart 1 " + isValidPart);
			}
			else if (productModel.getSupercategories().size() == 0)
			{
				productData = null;
				isValidEntry = false;
				configurable = false;
				isValidPart = false;
				LOG.debug("isValidPart 2 " + isValidPart);
			}
			// If product has no valid price
			/*
			 * else if (defaultPrice == null && !hybrisStatus.equals(HybrisStatus.CATALOG)) { productData = null;
			 * isValidEntry = false; isValidPart = false; LOG.debug("isValidPart 3 " + isValidPart); }
			 */

			else if (inputEntry.getUnitPrice() != null || priceData == null
					|| (priceData != null && priceData.getCurrencyIso() != null && !priceData.getCurrencyIso().equals(cartCurrency)))
			{
				LOG.debug("isCheckPricePart 1 " + isCheckPricePart);
				isCheckPricePart = true;
			}
			if (null == productModelTemp.getProductType())
			{
				isValidEntry = false;
				isCheckPricePart = false;
				configurable = false;
			}
		}
		// invalid part#
		catch (final Exception e)
		{
			LOG.error("Exception number: '" + e + "'");
			LOG.error("Invalid parts number: '" + partNumber + "'");
			isValidEntry = false;
			isValidPart = false;
			LOG.debug("isValidPart 4 exc " + isValidPart);
		}
		validatedBulkUploadEntry.setPartNum(partNumber.isEmpty() ? null : partNumber.trim());
		// set desc and price for bulk upload. May change for OCR requirements

		// set QTY
		Integer qty = new Integer(1);
		final String inputQty = inputEntry.getQuantity();
		try
		{
			// if no value, default to 1 is done at line 261
			if (null != inputQty && !inputQty.isEmpty() && inputQty.trim().matches("-?\\d+"))
			{
				qty = Integer.valueOf(inputQty.trim());
			}


			// if non positive integer
			if (qty.intValue() < 1 || qty.intValue() > 9999)
			{
				isValidEntry = false;
				isValidQty = false;
				LOG.debug("isValidPart 5  " + isValidPart);
			}
		}
		// invalid part#
		catch (final Exception e)
		{
			LOG.error("Invalid quantity: '" + inputEntry.getQuantity() + "' for parts number: '" + partNumber + "'"
					+ ExceptionUtils.getStackTrace(e));
			isValidEntry = false;
			isValidQty = false;
			LOG.debug("isValidPart 6  " + isValidPart);
		}
		validatedBulkUploadEntry.setQuantity(qty);
		LOG.debug("isValidEntry 6  " + isValidEntry);
		if (isValidEntry)
		{
			LOG.debug("isValidEntry 7  " + isValidEntry);
			validatedBulkUploadEntry.setDescription(productData.getDescription());

			if (priceData != null && priceData.getCurrencyIso().equals(cartCurrency))
			{
				validatedBulkUploadEntry.setUnitPrice(priceData);
			}
			else if (productData.getPrice() != null && productData.getPrice().getCurrencyIso().equals(cartCurrency))
			{
				validatedBulkUploadEntry.setUnitPrice(productData.getPrice());
			}

			validatedBulkUploadEntry.setProductImage(productData.getPicture());
			validatedBulkUploadEntry.setUrl(productData.getUrl());
			validatedBulkUploadEntry.setPartNum(productData.getCode());

			/** Add price from SAP for check price products */
			if (inputEntry.getUnitPrice() != null)
			{
				final PriceData priceDataFromSAP = new PriceData();
				priceDataFromSAP.setFormattedValue(inputEntry.getUnitPrice());
				//priceDataFromSAP.setPriceValue(inputEntry.getUnitPrice());
				priceDataFromSAP.setValue(new BigDecimal(inputEntry.getUnitPrice()));
				validatedBulkUploadEntry.setUnitPrice(priceDataFromSAP);
				validatedBulkUploadEntry.setDescription(productData.getDescription() + " Check Price");
			}
		}
		else
		{
			LOG.debug("isValidEntry 8  " + isValidEntry);
			final String inputDescription = inputEntry.getDescription();
			validatedBulkUploadEntry.setDescription(inputDescription);

			if (inputEntry.getUnitPrice() != null && !inputEntry.getUnitPrice().isEmpty())
			{
				priceData = new PriceData();
				priceData.setFormattedValue(inputEntry.getUnitPrice());
			}

			validatedBulkUploadEntry.setUnitPrice(priceData);
		}

		// set status
		try
		{
			final Map<String, Object> statusMap = new HashMap<String, Object>();
			if (LOG.isDebugEnabled())
			{
				LOG.debug("configurable1 " + configurable);
			}
			if (configurable && hybrisStatus.equals(HybrisStatus.SELL))
			{
				validatedBulkUploadEntry.setStatus(Config.getString("CONFIGURE", "Configure"));
			}
			else if (isValidPart && hybrisStatus.equals(HybrisStatus.CATALOG))
			{
				validatedBulkUploadEntry.setStatus(Config.getString("CATALOG", "Catalog only"));
			}
			else if (inputEntry.getUnitPrice() == null && isValidPart && isCheckPricePart)
			{
				validatedBulkUploadEntry.setStatus(Config.getString("CHECKPRICE", "Check Price"));
			}
			else
			{
				validatedBulkUploadEntry
						.setStatus(isValidEntry ? Config.getString("VALIDATED", "Validated") : Config.getString("ERROR", "Error"));
			}
			LOG.debug("isObsoletePart  " + isObsoletePart);
			if (isObsoletePart)
			{
				validatedBulkUploadEntry.setStatus(Config.getString("Obsolete", "Obsolete"));
			}
			statusMap.put("isValidPart", isValidPart);
			statusMap.put("isValidQty", isValidQty);

			if (isObsoletePart)
			{
				final GEEdgeProductModel productModelTemp1 = (GEEdgeProductModel) productService.getProductForCode(partNumber);
				final Collection<ProductReferenceModel> refCollection = productModelTemp1.getProductReferences();
				for (final ProductReferenceModel refModel : refCollection)
				{
					if (null != refModel.getReferenceType() && OBSOLETE.equals(refModel.getReferenceType().getCode()))
					{
						final GEEdgeProductModel targetProd = (GEEdgeProductModel) refModel.getTarget();
						final ProductData obsoleteProductData = productFacade.getProductForOptions(targetProd, OPTIONS);
						replacementPart.add(obsoleteProductData);
					}
				}
				statusMap.put("replacementPart", replacementPart);
			}

			validatedBulkUploadEntry.setStatusMap(statusMap);
		}
		catch (final Exception statusError)
		{
			BHGECommonUtil.getStackTrace(statusError);
			LOG.error("Invalid Status " + statusError);
		}

		validatedBulkUploadEntry.setProductSNo(count + "");
		/** Save the validation changes */
		List<BHGEBulkUploadEntryData> validatedBulkUploadList = null;
		final List<BHGEBulkUploadEntryData> validatedUploadList = (List<BHGEBulkUploadEntryData>) sessionService
				.getAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);
		if (null != validatedUploadList && validatedUploadList.size() > 0)
		{
			validatedBulkUploadList = new ArrayList<BHGEBulkUploadEntryData>(validatedUploadList);
			for (final BHGEBulkUploadEntryData bulkUploadEntryData : validatedBulkUploadList)
			{
				if (StringUtils.isNotBlank(bulkUploadEntryData.getProductSNo()) && StringUtils.isNotBlank(inputEntry.getLineNo())
						&& inputEntry.getLineNo().equals(bulkUploadEntryData.getProductSNo()))
				{
					//bulkUploadEntryData.setIsAddedToCart(Boolean.TRUE);
					bulkUploadEntryData.setPartNum(partNumber);
					bulkUploadEntryData.setQuantity(qty.intValue());
					bulkUploadEntryData.setStatus(validatedBulkUploadEntry.getStatus());
					bulkUploadEntryData.setConfigurationflag(validatedBulkUploadEntry.getConfigurationflag());
					bulkUploadEntryData.setDescription(validatedBulkUploadEntry.getDescription());
					bulkUploadEntryData.setIsAddedToCart(validatedBulkUploadEntry.getIsAddedToCart());
					bulkUploadEntryData.setProductImage(validatedBulkUploadEntry.getProductImage());
					bulkUploadEntryData.setStatusMap(validatedBulkUploadEntry.getStatusMap());
					bulkUploadEntryData.setUnitPrice(validatedBulkUploadEntry.getUnitPrice());
					bulkUploadEntryData.setUrl(validatedBulkUploadEntry.getUrl());

					sessionService.removeAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);
					sessionService.setAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA, validatedBulkUploadList);

					break;
				}
			}
		}

		return validatedBulkUploadEntry;
	}


	//Added for spartacus migration
	/**
	 *
	 */
	@Override
	public BHGEBulkUploadEntryData validateBulkUploadDataEntryWs(final BHGEBulkUploadInputEntryData inputEntry, final int count, String cartId)
	{
		LOG.info("------------------------Inside validateBulkUploadDataEntryWs method------------------------------------------------------");
		final String partNumber = (inputEntry.getPartNum() != null ? inputEntry.getPartNum().trim() : "");
		final BHGEBulkUploadEntryData validatedBulkUploadEntry = new BHGEBulkUploadEntryData();
		boolean isValidEntry = true;
		//final BHGESoldToData soldTo = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO);
		final BHGESoldToData soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
		PriceData priceData = null;
		// get product by part#
		ProductData productData = null;
		HybrisStatus hybrisStatus = null;
		MaterialChannelStatus materialStatus = null;
		boolean configurable = false;
		boolean isValidPart = true;
		boolean isValidQty = true;
		boolean isObsoletePart = false;
		boolean isCheckPricePart = false;

		final String cartCurrency = bhgeCartService.getCartByCodeForDSstore(cartId).getCurrency().getIsocode();
		LOG.info("validateBulkUploadDataEntryWs - cartCurrency : " + cartCurrency);
		PriceData defaultPrice = null;
		final List<ProductData> replacementPart = new ArrayList<ProductData>();
		try
		{
			final GEEdgeProductModel productModelTemp = (GEEdgeProductModel) userProfileService
					.getProductForCode(partNumber.toUpperCase());
			final BHGEProductUtil productUtil = new BHGEProductUtil();
			hybrisStatus = productUtil.getHybrisStatusForCurrentSalesAreaForWS(productModelTemp, userService, bhgeSoldToUtil);
			LOG.info("validateBulkUploadDataEntryWs - hybrisStatus : " + hybrisStatus);
			materialStatus = productUtil.getMaterialStatusForCurrentSalesAreaForWS(productModelTemp, userService, bhgeSoldToUtil);
			LOG.info("validateBulkUploadDataEntryWs - materialStatus : " + materialStatus);
			
			if (hybrisStatus!=null && OBSOLETE.equals(hybrisStatus.getCode()))
			{
				isObsoletePart = true;
				LOG.info("validateBulkUploadDataEntryWs - productModelTemp.getHybrisStatus() " + hybrisStatus.getCode());
				/*
				 * final Collection<ProductReferenceModel> refCollection = productModelTemp.getProductReferences(); for
				 * (final ProductReferenceModel refModel : refCollection) { if (null != refModel.getReferenceType() &&
				 * OBSOLETE.equals(refModel.getReferenceType().getCode())) { final GEEdgeProductModel targetProd =
				 * (GEEdgeProductModel) refModel.getTarget(); break; } }
				 */

				throw new Exception("Obsolete Product");
			}
			LOG.debug("isObsoletePart " + isObsoletePart);
			LOG.info("validateBulkUploadDataEntryWs - isObsoletePart : " + isObsoletePart);
			/** Added case insensitive search for part# **/
			LOG.debug("partNumber " + partNumber.toUpperCase());
			LOG.info("validateBulkUploadDataEntryWs - partNumber : " + partNumber.toUpperCase());
			final ProductModel productModel = productModelTemp;//userProfileService.getProductForCode(partNumber.toUpperCase());
			LOG.debug("productModel " + productModel);
			LOG.info("validateBulkUploadDataEntryWs - productModel : " + productModel);
			productData = productFacade.getProductForOptions(productModel, OPTIONS);
			LOG.debug("productData " + productData);
			BHGEProductAccessData productAccessData = productData.getProductAccessData();
			validatedBulkUploadEntry.setProductAccessData(productAccessData);
			LOG.info("validateBulkUploadDataEntryWs - productData : " + productData);

			defaultPrice = bhgeProductFacade.getProductPriceDataWs(productModel.getCode(), bhgeSoldToUtil);
			LOG.debug("defaultPrice " + defaultPrice);
			LOG.info("validateBulkUploadDataEntryWs - defaultPrice : " + defaultPrice);
			LOG.debug("materialStatus " + materialStatus);
			LOG.info("validateBulkUploadDataEntryWs - materialStatus : " + materialStatus);
			if (((GEEdgeProductModel) productModel).getSapConfigurable() != null)
			{
				configurable = ((GEEdgeProductModel) productModel).getSapConfigurable();
			}
			/*
			 * LOG.debug("productModel " + productModel); LOG.debug("soldTo " + soldTo);
			 */
			priceData = getProductPriceData(productModel, soldTo);
			LOG.debug("priceData " + priceData);
			LOG.info("validateBulkUploadDataEntryWs - priceData : " + priceData);
			//productModel.getSupercategories().iterator().next();

			if (hybrisStatus == null || materialStatus == null || hybrisStatus.equals(HybrisStatus.NOSELL)
					|| !(materialStatus.equals(MaterialChannelStatus.P1) || materialStatus.equals(MaterialChannelStatus.P2)
							|| materialStatus.equals(MaterialChannelStatus.P3) || materialStatus.equals(MaterialChannelStatus.P5)
							|| materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO)))
			{
				productData = null;
				isValidEntry = false;
				configurable = false;
				isValidPart = false;
				LOG.info("isValidPart 1 " + isValidPart);
			}
			else if (productModel.getSupercategories().size() == 0)
			{
				productData = null;
				isValidEntry = false;
				configurable = false;
				isValidPart = false;
				LOG.info("isValidPart 2 " + isValidPart);
			}
			// If product has no valid price
			/*
			 * else if (defaultPrice == null && !hybrisStatus.equals(HybrisStatus.CATALOG)) { productData = null;
			 * isValidEntry = false; isValidPart = false; LOG.debug("isValidPart 3 " + isValidPart); }
			 */

			else if (inputEntry.getUnitPrice() != null || priceData == null
					|| (priceData != null && priceData.getCurrencyIso() != null && !priceData.getCurrencyIso().equals(cartCurrency)))
			{
				isCheckPricePart = true;
				LOG.info("isCheckPricePart " + isCheckPricePart);
			}
			if (null == productModelTemp.getProductType())
			{
				isValidEntry = false;
				isCheckPricePart = false;
				configurable = false;
				LOG.info("isCheckPricePart " + isCheckPricePart);
			}
		}
		// invalid part#
		catch (final Exception e)
		{
			LOG.error("Exception number: '" + e + "'");
			LOG.error("Invalid parts number: '" + partNumber + "'");
			isValidEntry = false;
			isValidPart = false;
			LOG.info("isValidPart 4 exc " + isValidPart);
		}
		validatedBulkUploadEntry.setPartNum(partNumber.isEmpty() ? null : partNumber.trim());
		// set desc and price for bulk upload. May change for OCR requirements

		// set QTY
		Integer qty = new Integer(1);
		final String inputQty = inputEntry.getQuantity();
		try
		{
			// if no value, default to 1 is done at line 261
			if (null != inputQty && !inputQty.isEmpty() && inputQty.trim().matches("-?\\d+"))
			{
				qty = Integer.valueOf(inputQty.trim());
			}


			// if non positive integer
			if (qty.intValue() < 1 || qty.intValue() > 9999)
			{
				isValidEntry = false;
				isValidQty = false;
				LOG.info("isValidPart 5  " + isValidPart);
			}
		}
		// invalid part#
		catch (final Exception e)
		{
			LOG.error("Invalid quantity: '" + inputEntry.getQuantity() + "' for parts number: '" + partNumber + "'"
					+ ExceptionUtils.getStackTrace(e));
			isValidEntry = false;
			isValidQty = false;
			LOG.info("isValidPart 6  " + isValidPart);
		}
		validatedBulkUploadEntry.setQuantity(qty);
		LOG.info("isValidEntry 6 :  " + isValidEntry);
		if (isValidEntry)
		{
			LOG.info("isValidEntry 7  " + isValidEntry);
			validatedBulkUploadEntry.setDescription(productData.getDescription());

			if (priceData != null && priceData.getCurrencyIso().equals(cartCurrency))
			{
				validatedBulkUploadEntry.setUnitPrice(priceData);
			}
			else if (productData.getPrice() != null && productData.getPrice().getCurrencyIso().equals(cartCurrency))
			{
				validatedBulkUploadEntry.setUnitPrice(productData.getPrice());
			}

			validatedBulkUploadEntry.setProductImage(productData.getPicture());
			validatedBulkUploadEntry.setUrl(productData.getUrl());
			validatedBulkUploadEntry.setPartNum(productData.getCode());

			/** Add price from SAP for check price products */
			if (inputEntry.getUnitPrice() != null)
			{
				LOG.info("Inside validateBulkUploadDataEntryWs - Adding SAP Price for Check Price products------------------------------------------------------");
				final PriceData priceDataFromSAP = new PriceData();
				priceDataFromSAP.setFormattedValue(inputEntry.getUnitPrice());
				//priceDataFromSAP.setPriceValue(inputEntry.getUnitPrice());
				priceDataFromSAP.setValue(new BigDecimal(inputEntry.getUnitPrice()));
				validatedBulkUploadEntry.setUnitPrice(priceDataFromSAP);
				LOG.info("validateBulkUploadDataEntryWs - priceValue : " + inputEntry.getUnitPrice().toString());
				validatedBulkUploadEntry.setDescription(productData.getDescription() + " Check Price");
			}
		}
		else
		{
			LOG.info("isValidEntry 8  " + isValidEntry);
			final String inputDescription = inputEntry.getDescription();
			validatedBulkUploadEntry.setDescription(inputDescription);

			if (inputEntry.getUnitPrice() != null && !inputEntry.getUnitPrice().isEmpty())
			{
				priceData = new PriceData();
				priceData.setFormattedValue(inputEntry.getUnitPrice());
			}

			validatedBulkUploadEntry.setUnitPrice(priceData);
		}

		// set status
		try
		{
			final Map<String, Object> statusMap = new HashMap<String, Object>();
			if (LOG.isDebugEnabled())
			{
				LOG.debug("configurable1 " + configurable);
			}
			if (configurable && hybrisStatus.equals(HybrisStatus.SELL))
			{
				validatedBulkUploadEntry.setStatus(Config.getString("CONFIGURE", "Configure"));
			}
			else if (isValidPart && hybrisStatus.equals(HybrisStatus.CATALOG))
			{
				validatedBulkUploadEntry.setStatus(Config.getString("CATALOG", "Catalog only"));
			}
			else if (inputEntry.getUnitPrice() == null && isValidPart && isCheckPricePart)
			{
				LOG.info("Inside validateBulkUploadDataEntryWs - Setting status as Check Price");
				validatedBulkUploadEntry.setStatus(Config.getString("CHECKPRICE", "Check Price"));
			}
			else
			{
				LOG.info("Inside validateBulkUploadDataEntryWs - Setting status as Validated"+isValidEntry);
				validatedBulkUploadEntry
						.setStatus(isValidEntry ? Config.getString("VALIDATED", "Validated") : Config.getString("ERROR", "Error"));
			}
			LOG.debug("isObsoletePart  " + isObsoletePart);
			if (isObsoletePart)
			{
				validatedBulkUploadEntry.setStatus(Config.getString("Obsolete", "Obsolete"));
			}
			LOG.info("validateBulkUploadDataEntryWs - status : " + validatedBulkUploadEntry.getStatus());
			statusMap.put("isValidPart", isValidPart);
			statusMap.put("isValidQty", isValidQty);

			if (isObsoletePart)
			{
				final GEEdgeProductModel productModelTemp1 = (GEEdgeProductModel) productService.getProductForCode(partNumber);
				final Collection<ProductReferenceModel> refCollection = productModelTemp1.getProductReferences();
				for (final ProductReferenceModel refModel : refCollection)
				{
					if (null != refModel.getReferenceType() && OBSOLETE.equals(refModel.getReferenceType().getCode()))
					{
						final GEEdgeProductModel targetProd = (GEEdgeProductModel) refModel.getTarget();
						final ProductData obsoleteProductData = productFacade.getProductForOptions(targetProd, OPTIONS);
						replacementPart.add(obsoleteProductData);
					}
				}
				statusMap.put("replacementPart", replacementPart);
			}

			validatedBulkUploadEntry.setStatusMap(statusMap);
		}
		catch (final Exception statusError)
		{
			BHGECommonUtil.getStackTrace(statusError);
			LOG.error("Invalid Status " + statusError);
		}

		validatedBulkUploadEntry.setProductSNo(count + "");
		/** Save the validation changes */
		List<BHGEBulkUploadEntryData> validatedBulkUploadList = null;
		final List<BHGEBulkUploadEntryData> validatedUploadList = (List<BHGEBulkUploadEntryData>) sessionService
				.getAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);
		if (null != validatedUploadList && validatedUploadList.size() > 0)
		{
			validatedBulkUploadList = new ArrayList<BHGEBulkUploadEntryData>(validatedUploadList);
			for (final BHGEBulkUploadEntryData bulkUploadEntryData : validatedBulkUploadList)
			{
				if (StringUtils.isNotBlank(bulkUploadEntryData.getProductSNo()) && StringUtils.isNotBlank(inputEntry.getLineNo())
						&& inputEntry.getLineNo().equals(bulkUploadEntryData.getProductSNo()))
				{
					//bulkUploadEntryData.setIsAddedToCart(Boolean.TRUE);
					bulkUploadEntryData.setPartNum(partNumber);
					bulkUploadEntryData.setQuantity(qty.intValue());
					bulkUploadEntryData.setStatus(validatedBulkUploadEntry.getStatus());
					bulkUploadEntryData.setConfigurationflag(validatedBulkUploadEntry.getConfigurationflag());
					bulkUploadEntryData.setDescription(validatedBulkUploadEntry.getDescription());
					bulkUploadEntryData.setIsAddedToCart(validatedBulkUploadEntry.getIsAddedToCart());
					bulkUploadEntryData.setProductImage(validatedBulkUploadEntry.getProductImage());
					bulkUploadEntryData.setStatusMap(validatedBulkUploadEntry.getStatusMap());
					bulkUploadEntryData.setUnitPrice(validatedBulkUploadEntry.getUnitPrice());
					bulkUploadEntryData.setUrl(validatedBulkUploadEntry.getUrl());

					sessionService.removeAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);
					sessionService.setAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA, validatedBulkUploadList);

					break;
				}
			}
		}

		return validatedBulkUploadEntry;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.bulkupload.BHGEDataValidatorFacade#validateExcelInputData(com.bhge.facades.user.data.
	 * BHGEExcelUploadInputEntryData)
	 */
	@Override
	public BHGEExcelUploadInputEntryData validateExcelInputData(final BHGEExcelUploadInputEntryData inputEntryData)
	{
		return null;
	}
	
	private PriceData getProductPriceData(final ProductModel productModel, final BHGESoldToData soldTo)
	{
		// get price value
		final List<PriceRowModel> rankedPriceRows = currentFactoryFindPricingStrategy.sortPriceRowList(
				(List<PriceRowModel>) productModel.getEurope1Prices(),
				currentFactoryFindPricingStrategy.getSoldToPriceMatchCollection(soldTo, productModel.getCode()));
		if (rankedPriceRows == null || rankedPriceRows.isEmpty())
		{
			if (LOG.isDebugEnabled())
			{
				LOG.debug("No valid GE price " + productModel.getCode());
			}
			return null;
		}
		else
		{
			try
			{
				final PriceRowModel pr = rankedPriceRows.get(rankedPriceRows.size() - 1);
				final CurrencyModel priceCurrencyModel = pr.getCurrency();
				final PriceData priceData = priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(pr.getPrice()),
						priceCurrencyModel);
				return priceData;

			}
			catch (final Exception e)
			{
				LOG.error("Cannot convert price for " + productModel.getCode() + ExceptionUtils.getStackTrace(e));
				return null;
			}
		}
	}

	private ProductData getProductDataFromProductCode(final String productCode)
	{
		final List<ProductOption> extraOptions = Arrays.asList(ProductOption.VARIANT_MATRIX_BASE, ProductOption.VARIANT_MATRIX_URL,
				ProductOption.VARIANT_MATRIX_MEDIA, ProductOption.CLASSIFICATION);

        return bhgeProductFacade.getProductForCodeAndOptions(productCode, extraOptions);
	}


}