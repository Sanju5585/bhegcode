package com.bhge.core.order.service.impl;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;

import com.bhge.core.util.BHGEPriceAvailabilityUtils;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.log4j.Logger;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.json.JSONException;
import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.order.service.BHGEPriceAvailabilityCheckService;
import com.bhge.core.sap.util.BHGESAPJCoUtils;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZPriceandAvailablityRequest;
import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZPriceandAvailablityRequestItem;
import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZPriceandAvailablityResponse;
import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZVComponentPrice;
import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZWerksDetail;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.BHGEAvailabilityDetailsData;
import com.bhge.facades.BHGEStockDetailsData;
import com.bhge.facades.data.InventoryRequestData;
import com.bhge.facades.data.InventoryRequestProductData;
import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.integration.models.services.BHGESapPlantLogSysOrgService;
import com.bhge.product.service.BHGEProductService;
import com.bhge.store.services.impl.BHGEBaseStoreServiceImpl;
import com.hybris.ge.edge.core.model.type.VCComponentPriceModel;

import de.hybris.platform.b2b.company.B2BCommerceUnitService;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.model.B2BUserGroupModel;
import de.hybris.platform.core.CoreAlgorithms;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.sap.core.jco.exceptions.BackendRuntimeException;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;
import de.hybris.platform.sap.productconfig.services.intf.ProductConfigurationService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;

public class BHGEPriceAvailabilityCheckServiceImpl implements BHGEPriceAvailabilityCheckService {
    private static final Logger LOG = Logger.getLogger(BHGEPriceAvailabilityCheckServiceImpl.class);
    private static final String  SHIPDATE_MESSAGE = Config.getString("EST_SHIP_DATE_NOTAVBL", "NO ESTIMATE AVAILABLE");
    private static final String DISCOUNT_PRICE_MESSAGE = Config.getString("DISC_PRICE_NOTAVBL", "Disc, Price not available");
    private static final String DEFAULT_LONGEST_EST_SHIP_DATE = Config.getString("DEFAULT_LONGEST_EST_SHIP_DATE", "01-Jan-2100");
    private static final int CURRENCY_FORMAT_DIGITS = 2;
    private static final String SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT_URL = "SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT";

    public static final String ZERO_PRICE = "0.00";

    @Resource(name="bhgeB2BUnitService")
    private BHGEB2BUnitService bhgeB2BUnitService;

    //default page size A4 . max size is x: 595 , y: 841
    public static final PDRectangle PAGE_SIZE = PDRectangle.A4;
    public static final float MARGIN = 20;
    public static final boolean IS_LANDSCAPE = false;
    // Table configuration
    public static final float ROW_HEIGHT = 15;
    public static final float CELL_MARGIN = 2;

    @Resource(name = "baseStoreService")
    private BHGEBaseStoreServiceImpl baseStoreService;

    @Resource(name = "flexibleSearchService")
    private FlexibleSearchService flexibleSearchService;

    @Resource(name = "sessionService")
    private SessionService sessionService;

    @Resource(name = "sapPlantLogSysOrgService")
    private BHGESapPlantLogSysOrgService sapPlantLogSysOrgService;

    @Resource(name = "userService")
    private UserService userService;

    @Resource(name = "userProfileService")
    private BHGEUserProfileService userProfileService;

    @Resource
    B2BCommerceUnitService b2bCommerceUnitService;

    @Resource(name = "bhgeEmailService")
    private BHGEEmailService bhgeEmailService;

    @Resource(name = "b2bOrderService")
    private BHGEB2BOrderService bhgeB2BOrderService;

    @Resource(name = "modelService")
    public ModelService modelService;

    @Resource(name = "bhgeSoldToUtil")
    private BHGESoldToUtil bhgeSoldToUtil;

    @Resource(name="scpiConnector")
    SCPIConnector scpiConnector;
    
    @Resource(name = "sapProductConfigConfigurationService")
    private ProductConfigurationService configurationService;

    @Resource
    private BHGEVCAuthorExternalConfiguration bhgeVCAuthorExternalConfiguration;

    @Resource(name = "productService")
    private BHGEProductService bhgeProductService;
    @Resource(name="bhgePriceAvailabilityUtils")
    private BHGEPriceAvailabilityUtils bhgePriceAvailabilityUtils;


    @Override
    public InventoryRequestData getInventoryCheckDataForWS(final String guestSalesArea, InventoryRequestData requestData, List<InventoryRequestProductData> inventoryRequestProductDataList, String productLine, 
    		final ConfigurationData vcConfigData, String ecaCode)
    {
        try
        {
            LOG.info("BHGEPriceAvailabilityCheckServiceImpl getInventoryCheckDataForWS Called");
            String requestType = BhgeCoreConstants.FLAG_PA;
            if (inventoryRequestProductDataList.size() == 1 && inventoryRequestProductDataList.get(0).isSapConfigurable()) {
                if(null != requestData.getRequestType() && requestData.getRequestType().equalsIgnoreCase(BhgeCoreConstants.FLAG_VL)){
                    requestType = requestData.getRequestType();
                }
               else {
                    requestType = BhgeCoreConstants.FLAG_VC;
                }
            }
            String priceAndAvailabilityRequestXml = prepareRequestForWS(requestType, guestSalesArea, requestData, inventoryRequestProductDataList, vcConfigData, ecaCode);
            getResponse(requestData, inventoryRequestProductDataList, productLine, priceAndAvailabilityRequestXml);
        }
        catch (final BackendException backEndException)
        {
            LOG.error("BackendException occured " + backEndException.toString());
        }
        catch (final BackendRuntimeException beckEndRunTimeException)
        {
            LOG.error("BackendRuntimeException occured " + beckEndRunTimeException.toString());
            handleExceptionCase(requestData, beckEndRunTimeException);
        }
        catch (final Exception exception)
        {
            LOG.error("Exception occured " + exception.toString());
            handleExceptionCase(requestData, exception);
            LOG.error("Error Message :" + ExceptionUtils.getStackTrace(exception));
        }
        return requestData;
    }// getInventoryCheckData method ends

    @Override
    public InventoryRequestData getVCQuickOrderInventoryCheckDataForWS(String guestSalesArea, InventoryRequestData requestData, List<InventoryRequestProductData> inventoryRequestVCProductDataList, String productLine, Map<Integer, ConfigurationData> vcQuickOrderConfigDataMap) {
        try
        {
            LOG.info("BHGEPriceAvailabilityCheckServiceImpl getVCQuickOrderInventoryCheckDataForWS Called");
            String requestType = BhgeCoreConstants.FLAG_VL;
            String VCPriceAndAvailabilityRequestXml = prepareVCQuickOrderRequestForWS(requestType, guestSalesArea, requestData, inventoryRequestVCProductDataList, vcQuickOrderConfigDataMap);
            getResponse(requestData, inventoryRequestVCProductDataList, productLine, VCPriceAndAvailabilityRequestXml);
        }
        catch (final BackendException backEndException)
        {
            LOG.error("BackendException occured " + backEndException.toString());
        }
        catch (final BackendRuntimeException beckEndRunTimeException)
        {
            LOG.error("BackendRuntimeException occured " + beckEndRunTimeException.toString());
            handleExceptionCase(requestData, beckEndRunTimeException);
        }
        catch (final Exception exception)
        {
            LOG.error("Exception occured " + exception.toString());
            handleExceptionCase(requestData, exception);
            LOG.error("Error Message :" + ExceptionUtils.getStackTrace(exception));
        }
        return requestData;
    }

    private void getResponse(InventoryRequestData requestData, List<InventoryRequestProductData> inventoryRequestProductDataList, String productLine, String priceAndAvailabilityRequestXml) {
        final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT_URL,
                flexibleSearchService);
        BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, priceAndAvailabilityRequestXml, BHGEZPriceandAvailablityResponse.class);
        if(null != zPriceandAvailablityResponse) {
            LOG.info("BHGEPriceAvailabilityCheckServiceImpl CPI response received!");
            processResponse(scpiEndpointUrl, zPriceandAvailablityResponse, requestData, inventoryRequestProductDataList, productLine);
            if (inventoryRequestProductDataList.size() == 1 && inventoryRequestProductDataList.get(0).isSapConfigurable()
                && null != requestData.getRequestType() && requestData.getRequestType().equalsIgnoreCase(BhgeCoreConstants.FLAG_VL)){
                    processlongNumber(zPriceandAvailablityResponse,requestData);
                }
        }

        else
        {
            LOG.info("Connection failed:SAP has an error");
            for (final InventoryRequestProductData orderEntry: inventoryRequestProductDataList)
            {
                final List<String> estShipData = new ArrayList<>();
                estShipData.add(SHIPDATE_MESSAGE);
                orderEntry.setDiscountPrice(DISCOUNT_PRICE_MESSAGE);
                orderEntry.setEstShippingDates(estShipData);
            }
        }
    }

    private void processlongNumber(BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse, InventoryRequestData requestData) {
        if(null != zPriceandAvailablityResponse) {
            final BHGEZPriceandAvailablityRequestItem etLong = zPriceandAvailablityResponse.getEtLong();
            if (null != etLong && CollectionUtils.isNotEmpty(etLong.getItems())) {
                LOG.info("configNumber etLong items size :" + etLong.getItems().size() +"product code is :" + etLong.getItems().get(0).getMaterial()+"posnr is :"+etLong.getItems().get(0).getPosnr());
                for (final InventoryRequestProductData productData : requestData.getProductRequestList()) {
                      final String productCode = productData.getCode();
                    for (BHGEZPriceandAvailablityRequestItem responseItem : etLong.getItems()) {
                             productData.setFullyConfiglongNumber(productCode + responseItem.getZzmatcfg());
                        }
                    }
                }
            }
    }

    protected String prepareRequestForWS(final String requestType, final String guestSalesArea, InventoryRequestData requestData,
                                         List<InventoryRequestProductData> inventoryRequestProductDataList, final ConfigurationData vcConfigData, String ecaCode)
            throws BackendException, JSONException {
        BHGEZPriceandAvailablityRequest zPriceandAvailablityRequest = prepareRequest(requestType, guestSalesArea, requestData);
        bhgePriceAvailabilityUtils.prepareItemDetails(zPriceandAvailablityRequest, inventoryRequestProductDataList, vcConfigData, guestSalesArea, ecaCode);
        bhgePriceAvailabilityUtils.preparePartnerDetails(zPriceandAvailablityRequest, requestData);
        String requestXml = scpiConnector.toXML(zPriceandAvailablityRequest);
        LOG.info("BHGEPriceAvailabilityCheckServiceImpl : Price and Availability Request XML: " + requestXml);
        return requestXml;
    }

    private BHGEZPriceandAvailablityRequest prepareRequest(String requestType, String guestSalesArea, InventoryRequestData requestData) {
        BHGEZPriceandAvailablityRequest zPriceandAvailablityRequest = new BHGEZPriceandAvailablityRequest();
        zPriceandAvailablityRequest.setIsGlobal(bhgePriceAvailabilityUtils.setGlobalFuctionValueForWS(requestData.getCartType(), guestSalesArea));
        // Setting Language to the request
        zPriceandAvailablityRequest.setLanguage(bhgePriceAvailabilityUtils.getLanguageForRequest());
        zPriceandAvailablityRequest.setFlagPa(requestType);
        bhgePriceAvailabilityUtils.prepareHeadDetails(zPriceandAvailablityRequest, requestData);
        bhgePriceAvailabilityUtils.setSoldTO(requestData, guestSalesArea);
        return zPriceandAvailablityRequest;
    }

    protected String prepareVCQuickOrderRequestForWS(final String requestType, final String guestSalesArea, InventoryRequestData requestData,
                                         List<InventoryRequestProductData> inventoryRequestVCProductDataList, final Map<Integer, ConfigurationData> vcQuickOrderConfigDataMap)
            throws BackendException, JSONException {
        BHGEZPriceandAvailablityRequest zPriceandAvailablityRequest = prepareRequest(requestType, guestSalesArea, requestData);
        bhgePriceAvailabilityUtils.prepareVCQuickOrderItemDetails(zPriceandAvailablityRequest, inventoryRequestVCProductDataList, vcQuickOrderConfigDataMap, guestSalesArea);
        bhgePriceAvailabilityUtils.preparePartnerDetails(zPriceandAvailablityRequest, requestData);
        String requestXml = scpiConnector.toXML(zPriceandAvailablityRequest);
        LOG.info("BHGEPriceAvailabilityCheckServiceImpl : VC QuickOrder Price and Availability Request XML: " + requestXml);
        return requestXml;
    }
    protected void processResponse(final String page, final BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse, InventoryRequestData requestData, List<InventoryRequestProductData> inventoryRequestProductDataList,String productLine)
    {
        LOG.info("BHGEPriceAvailabilityCheckServiceImpl : Price & Availability - Response XML: " + scpiConnector.toXML(zPriceandAvailablityResponse));
        //LOG.info("Price & Availability - Response getOrderCfgsValue : " + zPriceandAvailablityResponse.getOrderCfgsValue());
        processErrors(zPriceandAvailablityResponse, requestData);
        processPrice(zPriceandAvailablityResponse, page, requestData, productLine);
        processAvailability(zPriceandAvailablityResponse, requestData);
    }

    protected void processErrors(final BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse, InventoryRequestData requestData)
    {

            LOG.info("BHGEPriceAvailabilityCheckServiceImpl : Processing the errors");
        BHGEZPriceandAvailablityRequestItem etReturn = zPriceandAvailablityResponse.getEtReturn();
        List<InventoryRequestProductData> inventoryRequestProductDataList = requestData.getProductRequestList();
        List<InventoryRequestProductData> inventoryRequestVCProductDataList = requestData.getVcProductRequestList();


        if(null != etReturn && CollectionUtils.isNotEmpty(etReturn.getItems()))
        {
            final Boolean containsErrors = getErrorFromMessageTable(etReturn, requestData);
            if (Boolean.TRUE.equals(containsErrors))
            {
                if(null != inventoryRequestVCProductDataList && CollectionUtils.isNotEmpty(inventoryRequestVCProductDataList)) {
                    for (final InventoryRequestProductData orderEntry : inventoryRequestVCProductDataList) {
                        final List<String> estShipData = new ArrayList<String>();
                        estShipData.add(SHIPDATE_MESSAGE);
                        orderEntry.setDiscountPrice(DISCOUNT_PRICE_MESSAGE);
                        orderEntry.setEstShippingDates(estShipData);
                    }
                }
            }
        }

        // Processing END_USER error
        if(null != etReturn && CollectionUtils.isNotEmpty(etReturn.getItems()))
        {
            for (BHGEZPriceandAvailablityRequestItem item : etReturn.getItems())
            {
                final String messageCode = item.getCode();
                final String messageType = item.getType();
                final String message = item.getMessage();
                LOG.debug("Message Type: " + messageType);
                LOG.debug("Message: " + message);
                LOG.debug("Message Code: " + messageCode);
                if (StringUtils.isNotBlank(messageCode) && BhgeCoreConstants.END_USER_ERROR_CODE.equals(messageCode.trim()))
                {
                    sessionService.setAttribute("isEndUserValid", false);
                    break;
                }
            }
        }
    }
    protected void processPrice(final BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse, final String page, InventoryRequestData requestData, String productLine) {
        LOG.info("BHGEPriceAvailabilityCheckServiceImpl : Processing the Price");
        List<InventoryRequestProductData> inventoryRequestProductDataList = requestData.getProductRequestList();
        List<InventoryRequestProductData> inventoryRequestVCProductDataList = requestData.getVcProductRequestList();

        final BHGEZPriceandAvailablityRequestItem etResultExt = zPriceandAvailablityResponse.getEtResultExt();
        final String currency = (requestData.getCurrency() != null) ? requestData.getCurrency() : "";
        int lineItemCount = BhgeCoreConstants.LINE_ITEM_COUNT;
        Integer configandkposnCounter = BhgeCoreConstants.CONFIG_KPOSN_COUNTER;

        if (etResultExt == null || CollectionUtils.isEmpty(etResultExt.getItems())) {
            return;
        }

        LOG.info("BHGEPriceAvailabilityCheckServiceImpl : processPrice : Inside if estResult :" + etResultExt.getItems().size());
        Double yourPriceTotalDiscount = 0.0;

        Map<Integer, BHGEZPriceandAvailablityRequestItem> requestItemMap = etResultExt.getItems().stream()
                .filter(item -> item.getItem() != null && CollectionUtils.isNotEmpty(item.getItem().getItems()))
                .flatMap(item -> item.getItem().getItems().stream())
                .collect(Collectors.toMap(
                        reqItem -> Integer.parseInt(reqItem.getKposn()),
                        reqItem -> reqItem,
                        (existing, replacement) -> existing
                ));

        if(CollectionUtils.isNotEmpty(inventoryRequestProductDataList)) {
            for (final InventoryRequestProductData orderEntry : inventoryRequestProductDataList) {
                int lineNumber = orderEntry.getItemLineNumber() + lineItemCount;//100000

                if (orderEntry.isSapConfigurable()) {
                    lineNumber = Integer.parseInt(bhgePriceAvailabilityUtils.formattedLineNumber(configandkposnCounter));
                    LOG.info("BHGEPriceAvailabilityCheckServiceImpl : processPrice : Inside if lineNumber is :" + lineNumber);//001000
                }

                for (Map.Entry<Integer, BHGEZPriceandAvailablityRequestItem> entry : requestItemMap.entrySet()) {
                    Integer key = entry.getKey();
                    BHGEZPriceandAvailablityRequestItem value = entry.getValue();
                    LOG.info("BHGEPriceAvailabilityCheckServiceImpl : requestItemMap Key: " + key + ", Value: " + value);
                }

                BHGEZPriceandAvailablityRequestItem reqItem = requestItemMap.get(lineNumber);
                LOG.info("BHGEPriceAvailabilityCheckServiceImpl : processPrice : lineNumber is :" + lineNumber + " and reqItem is :" + reqItem);
                if (reqItem != null) {
                    LOG.info("BHGEPriceAvailabilityCheckServiceImpl : processPrice : lineNumber and itemLinenumber is matched" + lineNumber + ":");
                    processRequestItem(reqItem, orderEntry, currency, productLine, yourPriceTotalDiscount);
                }

                configandkposnCounter++;

            }
            processComponentPrice(zPriceandAvailablityResponse, inventoryRequestVCProductDataList);
        }

        if(CollectionUtils.isNotEmpty(inventoryRequestVCProductDataList)) {
            for (final InventoryRequestProductData vcOrderEntry : inventoryRequestVCProductDataList) {
                int lineNumber = vcOrderEntry.getItemLineNumber() + lineItemCount;//100000

                if (vcOrderEntry.isSapConfigurable()) {
                    lineNumber = Integer.parseInt(bhgePriceAvailabilityUtils.formattedLineNumber(configandkposnCounter));
                    LOG.info("BHGEPriceAvailabilityCheckServiceImpl : processPrice : Inside if lineNumber is :" + lineNumber);//001000
                }
                for (Map.Entry<Integer, BHGEZPriceandAvailablityRequestItem> entry : requestItemMap.entrySet()) {
                    Integer key = entry.getKey();
                    BHGEZPriceandAvailablityRequestItem value = entry.getValue();
                    LOG.info("BHGEPriceAvailabilityCheckServiceImpl : requestItemMap Key: " + key + ", Value: " + value);
                }

                BHGEZPriceandAvailablityRequestItem reqItem = requestItemMap.get(lineNumber);
                LOG.info("BHGEPriceAvailabilityCheckServiceImpl : processPrice : lineNumber is :" + lineNumber + " and reqItem is :" + reqItem);
                if (reqItem != null) {
                    LOG.info("BHGEPriceAvailabilityCheckServiceImpl : processPrice : lineNumber and itemLinenumber is matched" + lineNumber + ":");
                    processRequestItem(reqItem, vcOrderEntry, currency, productLine, yourPriceTotalDiscount);
                }

                configandkposnCounter++;

            }

            processComponentPrice(zPriceandAvailablityResponse, inventoryRequestVCProductDataList);
        }
    }

    private boolean processRequestItem(BHGEZPriceandAvailablityRequestItem reqItem, InventoryRequestProductData orderEntry, String currency, String productLine, Double yourPriceTotalDiscount) {
        LOG.info("BHGEPriceAvailabilityCheckServiceImpl : processRequestItem : Inside processRequestItem for reqItem :" + reqItem.getKposn() + " and orderEntry is :" + orderEntry.getCode());
        String zcmListPrice = StringUtils.EMPTY;
        String zr02ListPrice = StringUtils.EMPTY;
        String listPrice ;
        String price = StringUtils.EMPTY;
        double vcOptionsPrice = 0.0;
        boolean isPriceSet = false;
        String silverClausePrice = StringUtils.EMPTY;
        String discountPrice = StringUtils.EMPTY;
        String discPercentage = StringUtils.EMPTY;

        if (reqItem.getCond() != null && CollectionUtils.isNotEmpty(reqItem.getCond().getItems())) {
            for (BHGEZPriceandAvailablityRequestItem condItem : reqItem.getCond().getItems()) {
                String conditionType = condItem.getKschl();

                switch (conditionType) {
                    case "ZCM1" ->
                        // Getting Base Price from the response (price condition - ZCM1)
                            zcmListPrice = getListPriceFromCondTable(condItem, currency, Long.valueOf(orderEntry.getQuantity()));
                    case "ZR02" ->
                        // Getting Base Price from the response (price condition - ZR02)
                            zr02ListPrice = getListPriceFromCondTable(condItem, currency, Long.valueOf(orderEntry.getQuantity()));
                    case "YUMU" -> {
                        // Getting Base Price from the response (price condition - ZR02)
                        price = getPriceFromCondTable(condItem);
                        LOG.info("13.BHGEPriceAvailabilityCheckServiceImpl YUMU price is  " + price);
                    }
                    case "ZUMU" -> {
                        // Getting Your Price from the response (price condition - ZUMU)
                        discountPrice = getPriceFromCondTable(condItem);
                        LOG.info("14.BHGEPriceAvailabilityCheckServiceImpl ZUMU price is  " + discountPrice);
                    }
                    case "ZZ00" -> {
                    // Getting Options Price for VC Materials from the response (price condition - ZZ00)
                    vcOptionsPrice += getVCPriceFromCondTable(condItem, Long.valueOf(orderEntry.getQuantity()));
                    LOG.info("Total VC options price in this loop is =====" + vcOptionsPrice);
                }
                    case "ZSCL" -> {
                        silverClausePrice = getPriceFromCondTable(condItem);
                    }
                    case "ZK09" -> {
                        discPercentage = getPriceFromCondTable(condItem);
                    }
                    default -> {
                    }
                }

            }
        }

        listPrice = StringUtils.isNotBlank(zcmListPrice) && NumberUtils.isNumber(zcmListPrice) && Double.valueOf(zcmListPrice) > 0
                ? zcmListPrice
                : zr02ListPrice;

        isPriceSet=setOrderEntryPrices(orderEntry, listPrice, price, vcOptionsPrice, silverClausePrice, discPercentage, discountPrice, productLine, yourPriceTotalDiscount,isPriceSet);
        return isPriceSet;
    }

    private boolean setOrderEntryPrices(InventoryRequestProductData orderEntry, String listPrice, String price, double vcOptionsPrice, String silverClausePrice, String discPercentage, String discountPrice,String productLine, Double yourPriceTotalDiscount,boolean isPriceSet) {
        int digits = CURRENCY_FORMAT_DIGITS;
        if (StringUtils.isNotBlank(listPrice) && !listPrice.startsWith(ZERO_PRICE) && NumberUtils.isNumber(listPrice)) {
            orderEntry.setListPrice(CoreAlgorithms.round(Double.parseDouble(listPrice), digits));
        } else {
            orderEntry.setListPrice(Double.valueOf(0));
        }

        if (StringUtils.isNotBlank(price) && !price.startsWith(ZERO_PRICE) && NumberUtils.isNumber(price)) {
            orderEntry.setBasePrice(CoreAlgorithms.round(Double.parseDouble(price), digits));
            LOG.info("BHGEPriceAvailabilityCheckServiceImpl YUMU price is  " + price + "orderentry base price is :"+ orderEntry.getBasePrice());
            if (BhgeCoreConstants.BENTLY_NEVADA.equalsIgnoreCase(productLine) || isBentlyStore() || BhgeCoreConstants.PANA_PRODUCTLINE.equalsIgnoreCase(productLine))
            {
                listPrice = price;
                orderEntry.setListPrice(CoreAlgorithms.round(Double.parseDouble(listPrice), digits));
            }
        } else {
            orderEntry.setBasePrice((double) 0);
        }
        if (StringUtils.isNotBlank(listPrice) && !listPrice.startsWith(ZERO_PRICE) && NumberUtils.isNumber(listPrice))
        {
            orderEntry.setBasePrice(CoreAlgorithms.round(Double.parseDouble(listPrice), digits));
        }
        if (vcOptionsPrice > 0) {
            orderEntry.setVcOptionsPrice(CoreAlgorithms.round(vcOptionsPrice, digits));
        } else {
            orderEntry.setVcOptionsPrice((double) 0);
        }

        if (StringUtils.isNotBlank(silverClausePrice) && !silverClausePrice.startsWith(ZERO_PRICE)) {
            orderEntry.setSilverClausePricePercentage(BHGESAPJCoUtils.getSilverClauseDiscPercentage(silverClausePrice));
            orderEntry.setSilverClausePrice(CoreAlgorithms.round(getSilverClausePrice(orderEntry.getSilverClausePricePercentage(), listPrice), digits));
        } else {
            orderEntry.setSilverClausePrice(0.00);
            orderEntry.setSilverClausePricePercentage(null);
        }

        if (StringUtils.isNotBlank(discPercentage) && !discPercentage.startsWith(ZERO_PRICE) && StringUtils.isNotBlank(price) && !price.startsWith(ZERO_PRICE) && NumberUtils.isNumber(price)) {
            discPercentage = BHGESAPJCoUtils.getFormattedDiscountPercentage(discPercentage.trim());
            Double yourPriceDiscAmount = getYourPriceDiscountValue(discPercentage, price);
            orderEntry.setYourPriceDiscount(CoreAlgorithms.round(yourPriceDiscAmount, digits));
            orderEntry.setDiscountPercentage(discPercentage);
        } else {
            orderEntry.setYourPriceDiscount(0.00);
            orderEntry.setDiscountPercentage(null);
        }

        double yourPriceValue = calculateOrderEntryDiscountPrice(orderEntry, listPrice, vcOptionsPrice, 0.0);
        if (yourPriceValue > 0) {
            orderEntry.setDiscountPrice(Double.toString(CoreAlgorithms.round(yourPriceValue, digits)));
        } else {
            orderEntry.setDiscountPrice(Double.toString(0));
        }

       // if (BhgeCoreConstants.BENTLY_NEVADA.equalsIgnoreCase(productLine) && StringUtils.isNotBlank(discountPrice) && NumberUtils.isNumber(discountPrice)) {
            orderEntry.setDiscountPrice(discountPrice);
            LOG.info("16.BHGEPriceAvailabilityCheckServiceImpl ZUMU discountPrice Price is " + discountPrice + "order entry discount price :" + orderEntry.getDiscountPrice());
        //}
        LOG.info(" ########################## BHGEPriceAvailabilityCheckServiceImpl Fetching the Price values of Product of Part Number "
                + orderEntry.getCode());
        LOG.info(" ########################## BHGEPriceAvailabilityCheckServiceImpl List Price is "
                + (StringUtils.isNotBlank(listPrice) ? listPrice : " Not Available"));
        LOG.info(" ########################## BHGEPriceAvailabilityCheckServiceImpl YourPriceDiscount is  " + orderEntry.getYourPriceDiscount());
        LOG.info(" ########################## BHGEPriceAvailabilityCheckServiceImpl SilverClausePrice is  " + orderEntry.getSilverClausePrice());
        LOG.info(" ########################## BHGEPriceAvailabilityCheckServiceImpl Price of Product after applying the discounts is  "
                + orderEntry.getDiscountPrice());
        return true;


    }

    
    private void processComponentPrice (final BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse, final List<InventoryRequestProductData> inventoryRequestProductDataList) {
        final BHGEZVComponentPrice componentPrice = zPriceandAvailablityResponse.getVcComponentPrice();
        final int numberOfComponentItems = null != componentPrice ? (CollectionUtils.isNotEmpty(componentPrice.getItems()) ? componentPrice.getItems().size() : 0) : 0;
        LOG.debug("No of Component result Items " + (null != componentPrice
                ? (CollectionUtils.isNotEmpty(componentPrice.getItems()) ? componentPrice.getItems().size() : 0) : 0));

        final Map<String, VCComponentPriceModel> componentPriceMap = prepareComponentPriceMap(componentPrice,
                numberOfComponentItems);

        if (numberOfComponentItems > 0) {
            if (null != inventoryRequestProductDataList && !inventoryRequestProductDataList.isEmpty()) {
                for (final InventoryRequestProductData entry : inventoryRequestProductDataList) {
                    final int lineNumber = entry.getItemLineNumber();
                    final List<VCComponentPriceModel> componentPrices = new ArrayList<VCComponentPriceModel>();
                    for (final Map.Entry<String, VCComponentPriceModel> key : componentPriceMap.entrySet()) {
                        if (StringUtils.isNotBlank(key.getKey()) && key.getKey().startsWith(String.valueOf(lineNumber))) {
                            final VCComponentPriceModel componentPriceModel = componentPriceMap.get(key);
                            if (null != componentPriceModel) {
                                componentPriceModel.setComponentPrice(
                                        CoreAlgorithms.round(componentPriceModel.getTotalPrice() / entry.getQuantity(), CURRENCY_FORMAT_DIGITS));
                                componentPrices.add(componentPriceModel);
                            }
                        }
                    }
                }
            }
        }
    }

    protected void processAvailability(final BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse, InventoryRequestData requestData)
    {
        Map<String, BHGEAvailabilityDetailsData> availabilityMap = null;
        Map<String, BHGEStockDetailsData> stockDetailsMap = null;
        List<InventoryRequestProductData> inventoryRequestProductDataList = requestData.getProductRequestList();
        List<InventoryRequestProductData> inventoryRequestVCProductDataList = requestData.getVcProductRequestList();


        final BHGEZWerksDetail stockDetailsTable = zPriceandAvailablityResponse.getEtMatWerkOty();
        final int numberOfStockItems = null != stockDetailsTable ? (CollectionUtils.isNotEmpty(stockDetailsTable.getItems())
                ? stockDetailsTable.getItems().size() : 0) : 0;
        stockDetailsMap = prepareStockDetailsMap(stockDetailsTable);
        LOG.info("BHGEPriceAvailabilityCheckServiceImpl stockDetailsMap received!");

        final BHGEZPriceandAvailablityRequestItem availabilityItemsTable = zPriceandAvailablityResponse.getEtWmdvex();
        final int numberOfAvailabilityItems = null != availabilityItemsTable ? (CollectionUtils.isNotEmpty(availabilityItemsTable.getItems())
                ? stockDetailsTable.getItems().size() : 0) : 0;
        availabilityMap = prepareAvailabilityDetailsMap(stockDetailsMap, availabilityItemsTable);
        LOG.info("BHGEPriceAvailabilityCheckServiceImpl availabilityMap received!");
        ArrayList<Integer> listOfFilmLeadtimes = new ArrayList<Integer>();
        ArrayList<Integer> listOfNonFilmLeadtimes = new ArrayList<Integer>();
        if(CollectionUtils.isNotEmpty(inventoryRequestProductDataList)) {
            for (final InventoryRequestProductData entry : inventoryRequestProductDataList) {
                // Setting the Default plant and Availability details to Cart entry
                if (numberOfAvailabilityItems > 0) {
                    setAvailabilityDetailsToCartEntry(availabilityMap, entry);
                } else {
                    setShipDateMessage(entry);
                }

                // Setting the Stock details to Cart entry
                if (numberOfStockItems > 0) {
                    setStockDetailsToCartEntry(stockDetailsMap, entry);
                }
                //final GEEdgeProductModel productEntry = (GEEdgeProductModel) entry.getProduct();
                if (entry.getLeadtime() != null && entry.getProductType() != null
                        && entry.getProductType().equalsIgnoreCase("ITFILM")) {

                    listOfFilmLeadtimes.add(entry.getLeadtime());
                    LOG.info("FilmLeadtime at entry level" + entry.getLeadtime());
                } else if (entry.getLeadtime() != null) {
                    listOfNonFilmLeadtimes.add(entry.getLeadtime());
                    LOG.info("NonFilmLeadtime at entry level" + entry.getLeadtime());
                }
            }
        }

        if(CollectionUtils.isNotEmpty(inventoryRequestVCProductDataList)) {

            for (final InventoryRequestProductData vcEntry : inventoryRequestVCProductDataList) {
                // Setting the Default plant and Availability details to Cart entry
                if (numberOfAvailabilityItems > 0) {
                    setAvailabilityDetailsToCartEntry(availabilityMap, vcEntry);
                } else {
                    setShipDateMessage(vcEntry);
                }

                // Setting the Stock details to Cart entry
                if (numberOfStockItems > 0) {
                    setStockDetailsToCartEntry(stockDetailsMap, vcEntry);
                }
                //final GEEdgeProductModel productEntry = (GEEdgeProductModel) entry.getProduct();
                if (vcEntry.getLeadtime() != null && vcEntry.getProductType() != null
                        && vcEntry.getProductType().equalsIgnoreCase("ITFILM")) {

                    listOfFilmLeadtimes.add(vcEntry.getLeadtime());
                    LOG.info("FilmLeadtime at entry level" + vcEntry.getLeadtime());
                } else if (vcEntry.getLeadtime() != null) {
                    listOfNonFilmLeadtimes.add(vcEntry.getLeadtime());
                    LOG.info("NonFilmLeadtime at entry level" + vcEntry.getLeadtime());
                }
            }
        }

        Integer largestFilmLeadtime =0;
        Integer largestNonFilmLeadtime =0;
        if (!listOfFilmLeadtimes.isEmpty())
        {
            Collections.sort(listOfFilmLeadtimes);
            LOG.info("listOfFilmLeadtimes.size()"+ listOfFilmLeadtimes.size());
            largestFilmLeadtime = listOfFilmLeadtimes.get(listOfFilmLeadtimes.size() - 1);
        }
        if (!listOfNonFilmLeadtimes.isEmpty())
        {
            Collections.sort(listOfNonFilmLeadtimes);
            LOG.info("listOfNonFilmLeadtimes.size()"+ listOfNonFilmLeadtimes.size());
            largestNonFilmLeadtime = listOfNonFilmLeadtimes.get(listOfNonFilmLeadtimes.size() - 1);
        }
    }

    protected void handleExceptionCase(final InventoryRequestData requestData, final Exception exception)
    {
        List<InventoryRequestProductData> dataList = requestData.getProductRequestList();
        requestData.setErrorReceived(true);
        for (final InventoryRequestProductData requestProductData : dataList)
        {
            requestProductData.setDiscountPrice(Config.getString("DISC_PRICE_NOTAVBL", "Disc, Price not available"));
            final List<String> estShipData = new ArrayList<String>();
            estShipData.add(Config.getString("EST_SHIP_DATE_NOTAVBL", "NO ESTIMATE AVAILABLE"));
            requestProductData.setEstShippingDates(estShipData);
        }
        final BHGESoldToData soldTo = sessionService.getAttribute("sessionSoldTo");
        GEEdgeCustomerModel geEdgeCustomerModel = null;
        if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
        {
            geEdgeCustomerModel = (GEEdgeCustomerModel) userService.getCurrentUser();
        }
        final String soldToID = ((soldTo == null) ? "no sold to found" : soldTo.getUid());
        final String userEmail = geEdgeCustomerModel == null ? "no_user_found" : geEdgeCustomerModel.getEmail();

        final BHGERfcCallErrorModel model = modelService.create(BHGERfcCallErrorModel.class);
        final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
        // Get the date today using Calendar object.
        final Date today = Calendar.getInstance().getTime();
        final String reportDate = df.format(today);

        model.setErrorCode("BackendException in ATP Service");
        final String exceptionMsg = exception.getMessage();
        model.setErrorDescription(exceptionMsg);
        model.setCurrentUserEmail(userEmail);
        model.setCurrentSoldToId(soldToID);
        model.setErrorTime(reportDate);
        model.setErrorType("ATP Error");
        model.setResponseParameterFromSAP("BackendException Object" + exception.toString());
        model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
        model.setStatus(Boolean.FALSE);
        modelService.save(model);
        bhgeEmailService.sendEmailForRFCFailure(Config.getParameter("RFCFailureSubject"), Config.getParameter("RFCFailureMailTo"),
                exception.getMessage());
    }

    private String getListPriceFromCondTable(final BHGEZPriceandAvailablityRequestItem condItem, final String sessionCurrency, final Long qty)
    {
        String price = "";
        double tempPrice = 0.0;
        //final String sapCurrency = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_WAERS);
        final String sapCurrency = condItem.getWaers();
        
        if (StringUtils.isNotBlank(sapCurrency) && StringUtils.isNotBlank(sessionCurrency)
                && sessionCurrency.equalsIgnoreCase(sapCurrency.trim()))
        {
            price = condItem.getKbetr();
        }
        else
        {
            price = condItem.getKwert();
            if (StringUtils.isNotBlank(price))
            {
                tempPrice = Double.valueOf(price.trim()) / qty;
                price = String.valueOf(tempPrice);
            }
        }

        if (StringUtils.isNotBlank(price))
        {
            price = price.trim();
        }
        return price;
    }

    private String getPriceFromCondTable(final BHGEZPriceandAvailablityRequestItem condItem)
    {
        //String price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KBETR);
        String price = condItem.getKbetr();
        if (StringUtils.isNotBlank(price))
        {
            price = price.trim();
        }
        return price;
    }

    private double getVCPriceFromCondTable(final BHGEZPriceandAvailablityRequestItem condItem, final Long qty)
    {
        //String price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KWERT);
        String price = condItem.getKwert();
        double vcPrice = 0.0;
        if (StringUtils.isNotBlank(price))
        {
            price = price.trim();
            if (NumberUtils.isNumber(price))
            {
                vcPrice = Double.valueOf(price) / qty;
            }
            else if (price.contains("-"))
            {
                price = price.replace("-", "");
                if (NumberUtils.isNumber(price))
                {
                    vcPrice = -Double.valueOf(price) / qty;
                }
            }
        }
        LOG.debug("VC OPTION PRICE for Qty " + qty + " is " + vcPrice);
        return vcPrice;
    }

    private String getDiscountValueForItem(final BHGEZPriceandAvailablityRequestItem condItem)
    {
        String price = condItem.getKwert();
        if (StringUtils.isNotBlank(price))
        {
            price = price.trim();
            // Removing '-' sign, if its present in the discount percentage
            if (BhgeCoreConstants.HYPHEN.equals(price.substring(price.length() - 1)))
            {
                price = price.substring(0, price.length() - 1);
            }
        }
        return price;
    }

    /**
     * @param silverClausePricePercentage
     * @return
     */
    private Double getSilverClausePrice(final String silverClausePricePercentage, final String listPrice)
    {
        Double price = 0.0;
        if (StringUtils.isNotBlank(silverClausePricePercentage) && StringUtils.isNotBlank(listPrice))
        {
            if (silverClausePricePercentage.contains(BhgeCoreConstants.HYPHEN))
            {
                final String tempPrice = silverClausePricePercentage.replace(BhgeCoreConstants.HYPHEN, "");
                price = (Double.valueOf(listPrice) / 100) * (Double.valueOf(tempPrice));
            }
            else
            {
                price = (Double.valueOf(listPrice) / 100) * (Double.valueOf(silverClausePricePercentage));
            }
        }
        return price;
    }


    private Double getYourPriceDiscountValue(final String discPercentage, final String listPrice)
    {
        double yourPriceDiscount = 0.0;
        if (StringUtils.isNotBlank(listPrice) && NumberUtils.isNumber(listPrice) && StringUtils.isNotBlank(discPercentage)
                && NumberUtils.isNumber(discPercentage))
        {
            yourPriceDiscount = (Double.valueOf(discPercentage) / 100) * Double.valueOf(listPrice);
        }
        return yourPriceDiscount;
    }
    private BHGECustomerData prepareCustomerData(final GEEdgeCustomerModel customer)
    {
        List<String> CustomerAccountGroups = bhgeB2BUnitService.getCustomerAccountGroupsforB2bUnit();
        final BHGECustomerData bhgeCustomerData = new BHGECustomerData();
        if (null != customer.getDefaultSoldTo())
        {
            bhgeCustomerData.setDefaultSoldTo(customer.getDefaultSoldTo().getUid());
        }

        if (null != customer.getDefaultShipTo())
        {
            bhgeCustomerData.setDefaultShipTo(customer.getDefaultShipTo().getPk().toString());
        }

        if (customer.getDefaultSoldTo() == null || customer.getDefaultShipTo() == null)
        {
            final Set<B2BUnitModel> b2bUnitModelList = new LinkedHashSet<B2BUnitModel>();
            for (final PrincipalGroupModel myVal : customer.getAllGroups())
            {
                if (myVal instanceof B2BUserGroupModel)
                {
                    for (final PrincipalGroupModel myB2b : ((B2BUserGroupModel) myVal).getGroups())
                    {
                        if (myB2b instanceof B2BUnitModel && !myB2b.getUid().equalsIgnoreCase("GEEDGENETPRIMESOLDTO")
                                && !myVal.getUid().contains("_")
                                && CustomerAccountGroups.contains(((B2BUnitModel) myB2b).getAccountGroup()))
                        {
                            b2bUnitModelList.add(((B2BUnitModel) myB2b));
                        }
                    }
                }
                else if (myVal instanceof B2BUnitModel && !myVal.getUid().equalsIgnoreCase("GEEDGENETPRIMESOLDTO")
                        && !myVal.getUid().contains("_")
                        && CustomerAccountGroups.contains(((B2BUnitModel) myVal).getAccountGroup()))
                {
                    b2bUnitModelList.add(((B2BUnitModel) myVal));
                }
            }

            // adding default sold to and ship to
            for (final B2BUnitModel b2bUnitModel : b2bUnitModelList)
            {
                if (customer.getDefaultSoldTo() == null)
                {
                    bhgeCustomerData.setDefaultSoldTo(b2bUnitModel.getUid());
                    if (b2bUnitModel.getAddresses() != null && b2bUnitModel.getAddresses().size() > 0)
                    {
                        for (final AddressModel addrModel : b2bUnitModel.getAddresses())
                        {
                            if (addrModel.getShippingAddress())
                            {
                                bhgeCustomerData.setDefaultShipTo(addrModel.getPk().toString());
                                break;
                            }
                        }
                    }
                }
                else if (customer.getDefaultSoldTo() != null)
                {
                    bhgeCustomerData.setDefaultSoldTo(customer.getDefaultSoldTo().getUid());
                    if (customer.getDefaultShipTo() != null)
                    {
                        bhgeCustomerData.setDefaultShipTo(customer.getDefaultShipTo().getPk().toString());
                    }
                    else if (customer.getDefaultSoldTo().getAddresses() != null
                            && customer.getDefaultSoldTo().getAddresses().size() > 0)
                    {
                        for (final AddressModel addrModel : customer.getDefaultSoldTo().getAddresses())
                        {
                            if (addrModel.getShippingAddress())
                            {
                                bhgeCustomerData.setDefaultShipTo(addrModel.getPk().toString());
                                break;
                            }
                        }
                    }
                }
            }
            // end of block for adding default sold to and default ship to
        }
        return bhgeCustomerData;
    }

    public Boolean getErrorFromMessageTable(final BHGEZPriceandAvailablityRequestItem etReturn, final InventoryRequestData requestData)
    {
        Boolean containsErrors = Boolean.FALSE;
        if(null != etReturn && CollectionUtils.isNotEmpty(etReturn.getItems()))
        {
            if (LOG.isDebugEnabled())
            {
                LOG.debug("Size of message table " + (null != etReturn ? (CollectionUtils.isNotEmpty(etReturn.getItems())
                        ? etReturn.getItems().size() : 0) : 0));
            }
            final String[] arrayOfCriticalErrors = StringUtils.split(Config.getParameter("CRITICAL_ERROR_ORDER_SUBMISSION"), ",");
            for (BHGEZPriceandAvailablityRequestItem item :etReturn.getItems())
            {
                final String messageType = item.getType();
                final String message = item.getMessage();

                if (messageType != null && "E".equalsIgnoreCase(messageType))
                {
                    containsErrors = Boolean.TRUE;
                    final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
                    if (LOG.isDebugEnabled())
                    {
                       
                        LOG.debug("Message TYPE " + item.getType() + " Message CODE " + item.getCode() + " Message LOG NO "
                                + item.getLogMsgNo() + " Message MESSAGE " + item.getMessage());
                    }
                    final DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
                    // Get the date today using Calendar object.
                    final Date today = Calendar.getInstance().getTime();
                    final String reportDate = df.format(today);

                        model.setCurrentUserEmail(requestData.getEmail());

                    final String soldToId = requestData.getSoldTo();
                    model.setErrorCode(messageType);
                    model.setErrorDescription(message);
                    model.setCurrentSoldToId(soldToId);
                    model.setErrorTime(reportDate);
                    model.setStatus(Boolean.FALSE);

                    if (ArrayUtils.contains(arrayOfCriticalErrors, message))
                    {
                        model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_HIGH);
                        model.setStatus(Boolean.TRUE);
                    }
                    else
                    {
                        model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
                        model.setStatus(Boolean.FALSE);
                    }
                    modelService.save(model);

                }
            }

        }
        return containsErrors;
    }

    private double calculateOrderEntryDiscountPrice(final InventoryRequestProductData orderEntry, final String listPrice, final double vcOptionsPrice, double yourPriceValue)
    {
        if (orderEntry.isSapConfigurable())
        {
            if (StringUtils.isNotBlank(listPrice) && NumberUtils.isNumber(listPrice))
            {
                yourPriceValue = vcOptionsPrice + Double.parseDouble(listPrice) - orderEntry.getYourPriceDiscount()
                        + orderEntry.getSilverClausePrice();
            }
            else
            {
                yourPriceValue = vcOptionsPrice - orderEntry.getYourPriceDiscount()
                        + orderEntry.getSilverClausePrice();
            }
        }
        else if (StringUtils.isNotBlank(listPrice) && !listPrice.startsWith("0.00") && NumberUtils.isNumber(listPrice))
        {
            if (orderEntry.getSilverClausePricePercentage() != null
                    && orderEntry.getSilverClausePricePercentage().contains(BhgeCoreConstants.HYPHEN))
            {
                //Setting the difference of list price and your price discount with silver clause as your price value
                yourPriceValue = Double.parseDouble(listPrice) - orderEntry.getYourPriceDiscount() - orderEntry.getSilverClausePrice();
            }
            else
            {
                yourPriceValue = Double.parseDouble(listPrice) - orderEntry.getYourPriceDiscount() + orderEntry.getSilverClausePrice();
            }
        }
        return yourPriceValue;
    }

    private Map<String, VCComponentPriceModel> prepareComponentPriceMap(final BHGEZVComponentPrice componentPrice, final long qty)
    {
        final Map<String, VCComponentPriceModel> componentPriceMap = new HashMap<String, VCComponentPriceModel>();
        if(null != componentPrice && CollectionUtils.isNotEmpty(componentPrice.getItems()))
        {
            for (BHGEZVComponentPrice compPrice : componentPrice.getItems())
            {
                final String itemLineNumber = compPrice.getItem();
                final String componentName = getFieldValue(compPrice.getVarCond());
                if (StringUtils.isNotBlank(componentName))
                {
                    final VCComponentPriceModel componentPriceModel = modelService.create(VCComponentPriceModel.class);
                    componentPriceModel.setName(componentName);
                    componentPriceModel.setCurrency(getFieldValue(compPrice.getCurrency()));
                    componentPriceModel.setTotalPrice(getPrice(compPrice.getCondValue()));
                    componentPriceModel.setDescription(getFieldValue(compPrice.getVcText()));
                    componentPriceMap.put(itemLineNumber + "_" + componentName, componentPriceModel);
                }
            }
        }
        return componentPriceMap;
    }
    private String getFieldValue(final String value)
    {
        if (StringUtils.isNotBlank(value))
        {
            return value.trim();
        }
        return null;
    }
    private Double getPrice(String price)
    {
        if (StringUtils.isNotBlank(price))
        {
            price = price.trim();
            if (NumberUtils.isNumber(price))
            {
                return Double.valueOf(price);
            }
        }
        return 0.0;
    }
    protected Map<String, BHGEStockDetailsData> prepareStockDetailsMap(final BHGEZWerksDetail stockDetailsTable) {
        if (stockDetailsTable == null || CollectionUtils.isEmpty(stockDetailsTable.getItems())) {
            return Collections.emptyMap();
        }
        return stockDetailsTable.getItems().stream()
                .filter(stockItem -> StringUtils.isNotEmpty(stockItem.getMaterial()) && StringUtils.isNotEmpty(stockItem.getWerks()))
                .collect(Collectors.toMap(
                        stockItem -> generateKey(stockItem.getMaterial(), stockItem.getWerks()),
                        this::createStockDetailsData,
                        (existing, replacement) -> existing,
                        LinkedHashMap::new
                ));
    }

    private String generateKey(String material, String plant) {
        return material.replaceAll("\\s", "") + "_" + plant.replaceAll("\\s", "");
    }

    private BHGEStockDetailsData createStockDetailsData(BHGEZWerksDetail stockItem) {
        BHGEStockDetailsData stockDetailsData = new BHGEStockDetailsData();
        stockDetailsData.setMaterial(stockItem.getMaterial());
        stockDetailsData.setActualStockQty(getStringQuantity(stockItem.getQty()));
        stockDetailsData.setLeadtime(StringUtils.isEmpty(stockItem.getLeadtime()) ? 0 : Integer.parseInt(stockItem.getLeadtime()));
        stockDetailsData.setPlant(stockItem.getWerks());
        stockDetailsData.setPlantName(extractPlantName(stockItem.getWerks()));
        LOG.info(" Available quantity of the Product with Part Number " + stockItem.getMaterial() + " is " +stockItem.getQty() + " in the Plant "
                + (stockDetailsData.getPlantName() != null ? stockDetailsData.getPlantName() : stockDetailsData.getPlant() + "(Default)"));
        return stockDetailsData;
    }
    protected Map<String, BHGEAvailabilityDetailsData> prepareAvailabilityDetailsMap(
            final Map<String, BHGEStockDetailsData> stockDetailsMap, final BHGEZPriceandAvailablityRequestItem availabilityItemsTable) {

        if (availabilityItemsTable == null || CollectionUtils.isEmpty(availabilityItemsTable.getItems())) {
            return Collections.emptyMap();
        }

        return availabilityItemsTable.getItems().stream()
                .filter(item -> StringUtils.isNotEmpty(item.getPlant()) && StringUtils.isNotEmpty(item.getMaterial()))
                .map(item -> {
                    BHGEAvailabilityDetailsData model = new BHGEAvailabilityDetailsData();
                    String plant = item.getPlant();
                    String key = item.getMaterial().replaceAll("\\s", "") + "_" + plant.replaceAll("\\s", "");

                    model.setPlant(plant);
                    model.setPlantName(extractPlantName(plant));
                    model.setCommittedDate(formatDate(item.getComDate()));
                    model.setCommittedQuantity(getStringQuantity(item.getComQty()));
                    model.setActualStockQty(getActualStockDetailsOfMaterialAndPlant(stockDetailsMap, key));
                    model.setIsDefaultPlant(BHGESAPJCoUtils.getBooleanValueForString(item.getDefaultPlant()));

                    return Map.entry(key + "_" + model.getCommittedQuantity() + "_" + model.getCommittedDate(), model);
                })
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (existing, replacement) -> existing, LinkedHashMap::new));//to preserve original order
    }

    private String extractPlantName(String plant) {
        if (StringUtils.isNotBlank(plant) && plant.contains(BhgeCoreConstants.PLANT_SEPERATOR)) {
            String[] plants = plant.split(BhgeCoreConstants.PLANT_SEPERATOR);
            if (plants.length == 4) {
                return plants[plants.length - 1];
            }
        }
        return bhgeB2BOrderService.getPlantNameForCode(plant);
    }

    protected void setAvailabilityDetailsToCartEntry(final Map<String, BHGEAvailabilityDetailsData> availabilityMap,
                                                     final InventoryRequestProductData entry) {
        if (availabilityMap == null || availabilityMap.isEmpty()) {
            setShipDateMessage(entry);
            return;
        }

        // Filter relevant keys and map to availability details
        List<BHGEAvailabilityDetailsData> detailsDataList = availabilityMap.entrySet().stream()
                .filter(e -> e.getKey().startsWith(entry.getCode().replaceAll("\\s", "") + "_"))
                .map(Map.Entry::getValue)
                .toList();

        if (detailsDataList.isEmpty()) {
            setShipDateMessage(entry);
            return;
        }

        // Set default plant and collect estimated ship dates
        Set<String> estimatedShipDates = new LinkedHashSet<>();
        for (BHGEAvailabilityDetailsData availabilityDetails : detailsDataList) {
            if (Boolean.TRUE.equals(availabilityDetails.getIsDefaultPlant()) && StringUtils.isEmpty(entry.getPlant())) {
                setDefaultPlantToCartEntry(entry, availabilityDetails);
            }
            if (availabilityDetails.getPlant().equals(entry.getPlant())) {
                estimatedShipDates.add(getEstimatedShipDateForEntry(availabilityDetails));
            }
        }

        // Set estimated ship dates or fallback message
        entry.setEstShippingDates(estimatedShipDates.isEmpty() ? List.of(SHIPDATE_MESSAGE) : new ArrayList<>(estimatedShipDates));
        entry.setAvailabilityDetails(detailsDataList);
    }

    protected void setShipDateMessage(final InventoryRequestProductData entry)
    {
        if (null != entry)
        {
            final List<String> estShipData = new ArrayList<>();
            estShipData.add(SHIPDATE_MESSAGE);
            entry.setEstShippingDates(estShipData);
        }
    }

    protected void setStockDetailsToCartEntry(final Map<String, BHGEStockDetailsData> stockDetailsMap,
                                              final InventoryRequestProductData entry) {
        if (stockDetailsMap == null || stockDetailsMap.isEmpty()) {
            return;
        }

        // Filter stock details for the given product code
        final String productCodeKeyPrefix = entry.getCode().replaceAll("\\s", "") + "_";
        List<BHGEStockDetailsData> stockDetailsDataList = stockDetailsMap.entrySet().stream()
                .filter(entrySet -> entrySet.getKey().startsWith(productCodeKeyPrefix))
                .map(Map.Entry::getValue)
                .toList();

        // Set stock details to the cart entry
        stockDetailsDataList.forEach(stockDetailsData -> {
            if (stockDetailsData.getPlant().equals(entry.getPlant())) {
                entry.setAvailableQuantity(stockDetailsData.getActualStockQty());
                entry.setLeadtime(stockDetailsData.getLeadtime());
            }
        });

        entry.setStockDetails(stockDetailsDataList);
    }


    protected String getStringQuantity(String actualString)
    {
        if (actualString != null && actualString.contains("."))
        {
            actualString = actualString.substring(0, actualString.indexOf("."));
            if (actualString.startsWith("-"))
            {
                actualString = "0";
            }
        }
        return actualString;
    }

    protected String getActualStockDetailsOfMaterialAndPlant(final Map<String, BHGEStockDetailsData> stockDetailsMap,
                                                             final String key)
    {
        if (null != stockDetailsMap && stockDetailsMap.size() > 0 && StringUtils.isNotEmpty(key))
        {
            final BHGEStockDetailsData stockDetail = stockDetailsMap.get(key);
            return null != stockDetail ? stockDetail.getActualStockQty() : null;
        }
        return null;
    }

    public String formatDate(final String date)
    {
        if (StringUtils.isNotEmpty(date) && StringUtils.isNotBlank(date) && !BhgeCoreConstants.DEFAULT_DATE_VALUE.equals(date))
        {
            Date sapDate;
            String requiredDate = "";
            final String sapDateFormat = Config.getString("ATP_SHIP_DATE_FORMAT_FROM_SAP", "yyyy-MM-dd");
            final String requiredFormat = Config.getString("ATP_SHIP_DATE_FORMAT", "dd-MMM-yyyy");
            final SimpleDateFormat sapDateFormatter = new SimpleDateFormat(sapDateFormat);
            final SimpleDateFormat requiredDateFormatter = new SimpleDateFormat(requiredFormat);
            try
            {
                sapDate = sapDateFormatter.parse(date);
                requiredDate = requiredDateFormatter.format(sapDate);
            }
            catch (final ParseException e)
            {
                LOG.error(
                        "Parse exception occured while parsing the estimated ship date obtained from ATP RFC call: The Date obtained is not in the format of "
                                + sapDateFormatter);
                LOG.error(e);
            }
            return requiredDate;
        }
        return null;
    }

    protected void setDefaultPlantToCartEntry(final InventoryRequestProductData entry,
                                              final BHGEAvailabilityDetailsData availabilityModel)
    {
        entry.setPlant(availabilityModel.getPlant());
        entry.setAvailableQuantity(availabilityModel.getActualStockQty());

        if (StringUtils.isNotBlank(availabilityModel.getPlant())
                && availabilityModel.getPlant().contains(BhgeCoreConstants.PLANT_SEPERATOR))
        {
            final String[] plants = availabilityModel.getPlant().split(BhgeCoreConstants.PLANT_SEPERATOR);
            if (plants.length == 4)
            {
                entry.setPlantName(plants[plants.length - 1]);
            }
        }
        else
        {
            entry.setPlantName(bhgeB2BOrderService.getPlantNameForCode(availabilityModel.getPlant()));
        }
    }

    public String getEstimatedShipDateForEntry(final BHGEAvailabilityDetailsData availabiltyDetail)
    {
        if (null != availabiltyDetail)
        {
            final String comQty = availabiltyDetail.getCommittedQuantity();

            /*
             * If the Committed Date is blank then we will set some largest date and also in storefront we will show like
             * No Estimate Available if this date found.
             */
            final String date = (StringUtils.isBlank(availabiltyDetail.getCommittedDate())) ? DEFAULT_LONGEST_EST_SHIP_DATE
                    : availabiltyDetail.getCommittedDate();
            return comQty + " " + date;
        }
        return null;
    }
    
    protected boolean isBentlyStore() {
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		LOG.info("inside isBentlyStore method of BHGECartServiceImpl- base store is " + baseStore);
		boolean isBentlyStore = false;
		if (baseStore != null && baseStore.getUid().contains(BhgeCoreConstants.BENTLY_NEVADA_STORE)) {
			LOG.info("inside isBentlyStore method of BHGECartServiceImpl- current base store is bently store and id is " + baseStore.getUid());
			isBentlyStore = true;
		}
		
		return isBentlyStore;
	}
}
