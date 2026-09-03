package com.bhge.integration.quote.history.impl;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.quote.service.dao.BHGECommerceQuoteDao;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.quote.quoteTracking.*;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.facades.quote.data.QuoteTrackingEntriesResData;
import com.bhge.facades.quote.data.QuoteTrackingRequestData;
import com.bhge.facades.quote.data.QuoteTrackingResponseData;
import com.bhge.integration.quote.history.BHGEQuoteHistoryService;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.CoreAlgorithms;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import jakarta.annotation.Resource;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

public class BHGEQuoteHistoryServiceImpl implements BHGEQuoteHistoryService {

    private static final Logger LOG = LoggerFactory.getLogger(BHGEQuoteHistoryServiceImpl.class);

    @Autowired
    UserService userService;

    @Autowired
    FlexibleSearchService flexibleSearchService;

    @Autowired
    SCPIConnector scpiConnector;

    @Resource
    BHGECommerceQuoteDao bhgeCommerceQuoteDao;

    private static final String SCPI_ZHYB_QUOTE_HISTORY_URL = "scpi.zhyb.quote.tracking.endpoint.url";
    public static final String ZERO_PRICE = "0.00";
    private static final int CURRENCY_FORMAT_DIGITS = 2;

    @Override
    public SearchPageData<QuoteTrackingResponseData> getQuoteHistory(QuoteTrackingRequestData trackingReqData, PageableData pageableData) {
        SearchPageData<QuoteTrackingResponseData> searchPageData = new SearchPageData<>();
        try {
            LOG.info("US530529: Inside getQuoteHistory method of BHGEQuoteHistoryServiceImpl");
            final UserModel user = userService.getCurrentUser();
            String quoteHistoryRequestXML = prepareQuoteHistoryRequestXML(trackingReqData);
            final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_QUOTE_HISTORY_URL, flexibleSearchService);
            if (StringUtils.isNotBlank(scpiEndpointUrl)) {
                BHGEZQuoteTrackingResponse quoteTrackingResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, quoteHistoryRequestXML, BHGEZQuoteTrackingResponse.class);
                if (null != quoteTrackingResponse) {
                    LOG.info("Response received for quote history request: {}", quoteTrackingResponse);
                    final List<QuoteTrackingResponseData> responseData = processResponse(quoteTrackingResponse);
                    final List<QuoteTrackingResponseData> filterResponseData = filterResponseData(responseData, trackingReqData, pageableData);
                    searchPageData = createPageableResData(pageableData, filterResponseData);
                    searchPageData.getResults().forEach(response -> {
                        final QuoteModel quote = bhgeCommerceQuoteDao.getQuoteByCode(response.getQuoteCode());
                        if (null != quote) {
                            response.setCreatedBy(quote.getUser().getName());
                        }
                    });
                } else {
                    LOG.error("No response received for quote history request");
                }
            }
        } catch (Exception e) {
            LOG.error("Exception occurred while getting quote history {}", e.getMessage());
        }
        return searchPageData;
    }

    private List<QuoteTrackingResponseData> filterResponseData(List<QuoteTrackingResponseData> responseData, QuoteTrackingRequestData trackingReqData, PageableData pageableData) {
        List<QuoteTrackingResponseData> filteredResData = new ArrayList<>();
        try {
            if (CollectionUtils.isNotEmpty(responseData) && StringUtils.isBlank(trackingReqData.getQuoteNumber())) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
                LocalDate fromDate = LocalDate.parse(trackingReqData.getFromDate(), formatter);
                LocalDate toDate = LocalDate.parse(trackingReqData.getToDate(), formatter);
                filteredResData = responseData.stream().filter(res -> {
                    LocalDate orderDate = LocalDate.parse(res.getCreatedOn(), formatter);
                    boolean isQuoteInRange = (orderDate.isEqual(fromDate) || orderDate.isAfter(fromDate)) && (orderDate.isEqual(toDate) || orderDate.isBefore(toDate));
                    if (StringUtils.isNotBlank(trackingReqData.getQuoteStatus())) {
                        return isQuoteInRange && StringUtils.equalsIgnoreCase(trackingReqData.getQuoteStatus(), res.getQuoteStatus());
                    } else {
                        return isQuoteInRange;
                    }
                }).sorted((res1, res2) -> {
                    LocalDate date1 = LocalDate.parse(res1.getCreatedOn(), formatter);
                    LocalDate date2 = LocalDate.parse(res2.getCreatedOn(), formatter);
                    if (null != pageableData.getSort() && StringUtils.containsIgnoreCase(pageableData.getSort(), "datedesc")) {
                        return date2.compareTo(date1);
                    } else if (null != pageableData.getSort() && StringUtils.containsIgnoreCase(pageableData.getSort(), "quotedesc")) {
                        return res2.getQuoteCode().compareTo(res1.getQuoteCode());
                    } else if (null != pageableData.getSort() && StringUtils.containsIgnoreCase(pageableData.getSort(), "quoteasc")) {
                        return res1.getQuoteCode().compareTo(res2.getQuoteCode());
                    } else {
                        return date1.compareTo(date2);
                    }
                }).collect(Collectors.toList());
            } else {
                filteredResData = responseData;
            }
        } catch (Exception e) {
            LOG.error("US537895: Error while filtering Quotes");
        }
        return filteredResData;
    }

    private SearchPageData<QuoteTrackingResponseData> createPageableResData(PageableData pageableData,
                                                                            List<QuoteTrackingResponseData> responseData) {
        SearchPageData<QuoteTrackingResponseData> result = new SearchPageData<>();
        try {
            final PaginationData paginationData = getPaginationData(pageableData, responseData);
            result.setPagination(paginationData);
            int startIndex;
            int endIndex;
            if (pageableData.getCurrentPage() == 0)
            {
                startIndex = 0;
                endIndex = pageableData.getPageSize();
            }
            else
            {
                startIndex = pageableData.getCurrentPage() * pageableData.getPageSize();
                endIndex = (pageableData.getCurrentPage() + 1) * pageableData.getPageSize();
            }

            if (responseData.size() <= pageableData.getPageSize())
            {
                result.setResults(responseData);
            }
            else if (endIndex <= responseData.size())
            {
                result.setResults(responseData.subList(startIndex, endIndex));
            }
            else
            {
                result.setResults(responseData.subList(startIndex, responseData.size()));
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return result;
    }

    private PaginationData getPaginationData(PageableData pageableData, List<QuoteTrackingResponseData> responseData) {
        final PaginationData paginationData = new PaginationData();
        paginationData.setPageSize(pageableData.getPageSize());
        paginationData.setSort(pageableData.getSort());
        paginationData.setTotalNumberOfResults(responseData.size());
        paginationData.setNumberOfPages((int) Math
                .ceil(Double.valueOf(paginationData.getTotalNumberOfResults()) / Double.valueOf(paginationData.getPageSize())));

        paginationData.setCurrentPage(Math.max(0, Math.min(paginationData.getNumberOfPages(), pageableData.getCurrentPage())));
        return paginationData;
    }

    private List<QuoteTrackingResponseData> processResponse(BHGEZQuoteTrackingResponse quoteTrackingResponse) {
        Map<String, QuoteTrackingResponseData> quoteMap = new HashMap<>();
        // Process Header Data
        processHeaderData(quoteTrackingResponse, quoteMap);
        //Process Quote Entries Data
        if (CollectionUtils.isNotEmpty(quoteTrackingResponse.getQuoteItems().getItems())) {
            for (BHGEZQuoteTrackingItem quoteItem: quoteTrackingResponse.getQuoteItems().getItems()) {
                String quoteCode = quoteItem.getVbeln();
                QuoteTrackingResponseData quoteTrackingResponseData = quoteMap.get(quoteCode);
                if (null != quoteTrackingResponseData) {
                    QuoteTrackingEntriesResData entryData = new QuoteTrackingEntriesResData();
                    processQuoteEntry(quoteItem, entryData);
                    quoteTrackingResponseData.getQuoteEntries().add(entryData);
                }
            }
        }
        return new ArrayList<>(quoteMap.values());
    }

    private void processHeaderData(BHGEZQuoteTrackingResponse quoteTrackingResponse, Map<String, QuoteTrackingResponseData> quoteMap) {
        if (CollectionUtils.isNotEmpty(quoteTrackingResponse.getQuoteHeader().getItems())) {
            for (BHGEZQuoteTrackingResponseHeader headerItem : quoteTrackingResponse.getQuoteHeader().getItems()) {

                if (StringUtils.isBlank(headerItem.getVbeln())||StringUtils.isBlank(headerItem.getBstnk()))
                {LOG.debug("Skipping quote due to blank values. VBELN={} , BSTNK={}",headerItem.getVbeln(), headerItem.getBstnk());
                    continue;
                }
                if(!headerItem.getVbeln().equals(headerItem.getBstnk()))
                {
                    LOG.debug("Skipping SAP quote (VBELN !=BSTNK). VBELN={}, BSTNK={}",headerItem.getVbeln(), headerItem.getBstnk());
                    continue;
                }
                LOG.debug("Processing ecommerce quote (VBELN == BSTNK).VBELN={}",headerItem.getVbeln());

                String quoteCode = headerItem.getVbeln();
                QuoteTrackingResponseData quoteTrackingResponseData = new QuoteTrackingResponseData();
                quoteTrackingResponseData.setQuoteCode(headerItem.getVbeln());
                quoteTrackingResponseData.setQuoteStatus(headerItem.getZstatus());
                quoteTrackingResponseData.setValidUntill(headerItem.getBnddt());
                quoteTrackingResponseData.setCreatedOn(headerItem.getErdat());
                String totalListPrice = headerItem.getNetwr();
                if(null != headerItem.getWaerk() && headerItem.getWaerk().equalsIgnoreCase("JPY") && null != totalListPrice && totalListPrice.contains(".")){
                    totalListPrice = totalListPrice.substring(0, totalListPrice.indexOf("."));
                }
                quoteTrackingResponseData.setTotalListPrice(headerItem.getWaerk() + " " +totalListPrice);
                quoteTrackingResponseData.setShipTOAddress(headerItem.getShipToAdd());
                quoteTrackingResponseData.setSoldToAddress(headerItem.getSoldToAdd());
                quoteTrackingResponseData.setEndCustomerAddress(headerItem.getEndUserAdd());
                quoteTrackingResponseData.setB2bUnit(headerItem.getKunnr() + "_" + headerItem.getVKorg()
                        + "_" + headerItem.getVTweg() + "_" + headerItem.getSpart());
                quoteTrackingResponseData.setQuoteEntries(new ArrayList<>());
                quoteMap.put(quoteCode, quoteTrackingResponseData);
            }
        }
    }

    private void setStatusForQuote(QuoteTrackingResponseData quoteResponseData) {
        try {
            if (quoteResponseData != null && CollectionUtils.isNotEmpty(quoteResponseData.getQuoteEntries())) {
                boolean allOpen = true;
                boolean anyRejected = false;

                for (QuoteTrackingEntriesResData entry : quoteResponseData.getQuoteEntries()) {
                    String status = entry.getStatus();
                    if (!StringUtils.equalsIgnoreCase(status, "open")) {
                        allOpen = false;
                    }
                    if (StringUtils.equalsIgnoreCase(status, "rejected")) {
                        anyRejected = true;
                    }
                }

                if (StringUtils.isNotBlank(quoteResponseData.getValidUntill())) {
                    if (BooleanUtils.isTrue(isQuoteValid(quoteResponseData.getValidUntill()))) {
                        if (allOpen) {
                            quoteResponseData.setQuoteStatus("In-progress");
                        } else if (anyRejected) {
                            quoteResponseData.setQuoteStatus("Partial");
                        } else {
                            quoteResponseData.setQuoteStatus("Full");
                        }
                    } else {
                        quoteResponseData.setQuoteStatus("Expired");
                    }
                }
            }
        } catch (Exception e) {
            LOG.error("US537895: Exception during Quote status update {}", e.getMessage());
        }
    }

    private Boolean isQuoteValid(String validUntil) {
        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            LocalDate inputDate = LocalDate.parse(validUntil, formatter);
            LocalDate currDate = LocalDate.now();
            return inputDate.isBefore(currDate);
        } catch (Exception e) {
            LOG.error("US537895: Error while validating Quote validity {}", e.getMessage());
        }
        return false;
    }

    private void processQuoteEntry(BHGEZQuoteTrackingItem item, QuoteTrackingEntriesResData entryData) {
        entryData.setProdCode(item.getMatnr());
        entryData.setProdName(item.getArktx());
        entryData.setReqData(item.getEdatu());
        entryData.setShipDate(item.getZNewDelDate());
        entryData.setQty(StringUtils.isNotBlank(item.getKwmeng()) ? Double.parseDouble(item.getKwmeng()) : 0);
        entryData.setUnit(item.getZieme());
        entryData.setStatus(item.getZItemStatus());
        if (CollectionUtils.isNotEmpty(item.getPrices().getPrices())) {
            for (BHGEZQuoteTrackingItemPrice itemPrice : item.getPrices().getPrices()) {
                processPrice(itemPrice, entryData);
            }
        }
    }


    private void processPrice(BHGEZQuoteTrackingItemPrice itemPrice, QuoteTrackingEntriesResData entryData) {
        if (itemPrice == null) {
            return;
        }

        String zcmListPrice = StringUtils.EMPTY;
        String zr02ListPrice = StringUtils.EMPTY;
        String listPrice = StringUtils.EMPTY;
        String price = StringUtils.EMPTY;
        String discountPrice = StringUtils.EMPTY;
        String silverClausePrice = StringUtils.EMPTY;
        String discPercentage = StringUtils.EMPTY;
        double vcOptionsPrice = 0.0;
        double yourPriceTotalDiscount = 0.0;

        final String conditionType = itemPrice.getKschl();

        // Process price based on the first matching condition
        if (Config.getString("SAP_PRICING_CONDITION_BASE_PRICE_FL", "ZCM1").equals(conditionType)) {
            zcmListPrice = getListPriceFromCondTable(itemPrice, "USD", entryData.getQty().longValue());
            listPrice = zcmListPrice;
            entryData.setListPrice(CoreAlgorithms.round(Double.parseDouble(listPrice), CURRENCY_FORMAT_DIGITS));
            entryData.setBasePrice(CoreAlgorithms.round(Double.parseDouble(listPrice), CURRENCY_FORMAT_DIGITS));
            return; // Exit after processing this condition
        }

        if (Config.getString("SAP_PRICING_CONDITION_BASE_PRICE_IT", "ZR02").equals(conditionType)) {
            zr02ListPrice = getListPriceFromCondTable(itemPrice, "USD", entryData.getQty().longValue());
            listPrice = zr02ListPrice;
            entryData.setListPrice(CoreAlgorithms.round(Double.parseDouble(listPrice), CURRENCY_FORMAT_DIGITS));
            entryData.setBasePrice(CoreAlgorithms.round(Double.parseDouble(listPrice), CURRENCY_FORMAT_DIGITS));
            return; // Exit after processing this condition
        }

        if (Config.getString("SAP_PRICING_CONDITION_LIST_PRICE", "YUMU").equals(conditionType)) {
            price = getPriceFromCondTable(itemPrice);
            entryData.setBasePrice(CoreAlgorithms.round(Double.parseDouble(price), CURRENCY_FORMAT_DIGITS));
            return; // Exit after processing this condition
        }

        if (Config.getString("SAP_PRICING_CONDITION_YOUR_PRICE", "ZUMU").equals(conditionType)) {
            discountPrice = getPriceFromCondTable(itemPrice);
            if(itemPrice.getWaers().equalsIgnoreCase("JPY") && null != discountPrice && discountPrice.contains(".")) {
                discountPrice= discountPrice.substring(0,discountPrice.indexOf("."));
            }

            entryData.setDiscountPrice(discountPrice);
            return; // Exit after processing this condition
        }

//        if (Config.getString("SAP_PRICING_CONDITION_OPTIONS_PRICE", "ZZ00").equals(conditionType)) {
//            vcOptionsPrice = getVCPriceFromCondTable(itemPrice, entryData.getQty().longValue());
//            entryData.setVcOptionsPrice(CoreAlgorithms.round(vcOptionsPrice, CURRENCY_FORMAT_DIGITS));
//            return; // Exit after processing this condition
//        }

        if (Config.getString("SAP_PRICING_CONDITION_SILVER_CLAUSE_PRICE", "ZSCL").equals(conditionType)) {
            silverClausePrice = getPriceFromCondTable(itemPrice);
            entryData.setSilverClausePrice(CoreAlgorithms.round(Double.parseDouble(silverClausePrice), CURRENCY_FORMAT_DIGITS));
            return; // Exit after processing this condition
        }

        if (Config.getString("SAP_PRICING_CONDITION_DISC_PERCENTAGE", "ZK09").equals(conditionType)) {
            discPercentage = getPriceFromCondTable(itemPrice);
            discPercentage = discPercentage.replace("-", "");
            double discountValue = getYourPriceDiscountValue(discPercentage, String.valueOf(entryData.getListPrice()));
            entryData.setYourPriceDiscount(CoreAlgorithms.round(discountValue, CURRENCY_FORMAT_DIGITS));
            entryData.setDiscountPercentage(discPercentage);
            return; // Exit after processing this condition
        }

    }

    private double calculateOrderEntryDiscountPrice(QuoteTrackingEntriesResData entryData, String listPrice, double yourPriceValue) {
        if (StringUtils.isNotBlank(listPrice)) {
            if (null != entryData.getSilverClausePricePercentage() && entryData.getSilverClausePricePercentage().contains(BhgeCoreConstants.HYPHEN)) {
                yourPriceValue = Double.valueOf(listPrice) - entryData.getYourPriceDiscount() - entryData.getSilverClausePrice();
            } else {
                yourPriceValue = Double.valueOf(listPrice) - entryData.getYourPriceDiscount() + entryData.getSilverClausePrice();
            }
        }
        return yourPriceValue;
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

    private Double getSilverClausePrice(final String silverClausePricePercentage, final String listPrice)
    {
        Double price = 0.0;
        if (org.apache.commons.lang3.StringUtils.isNotBlank(silverClausePricePercentage) && org.apache.commons.lang3.StringUtils.isNotBlank(listPrice))
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

    private String getListPriceFromCondTable(final BHGEZQuoteTrackingItemPrice itemPrice, final String sessionCurrency, final Long qty)
    {
        String price = "";
        double tempPrice = 0.0;
        //final String sapCurrency = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_WAERS);
        final String sapCurrency = itemPrice.getWaers();

        if (StringUtils.isNotBlank(sapCurrency) && StringUtils.isNotBlank(sessionCurrency)
                && sessionCurrency.equalsIgnoreCase(sapCurrency.trim()))
        {
            price = itemPrice.getKbetr();
        }
        else
        {
            price = itemPrice.getKwert();
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

    private String getPriceFromCondTable(final BHGEZQuoteTrackingItemPrice itemPrice)
    {
        //String price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KBETR);
        String price = itemPrice.getKbetr();
        if (StringUtils.isNotBlank(price))
        {
            price = price.trim();
        }
        return price;
    }

    private String getDiscountValueForItem(final BHGEZQuoteTrackingItemPrice condItem)
    {
        String price = "0.00";
        //price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KWERT);
        price = condItem.getKwert();
        if (org.apache.commons.lang3.StringUtils.isNotBlank(price))
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


    private String prepareQuoteHistoryRequestXML(QuoteTrackingRequestData trackingReqData) {
        String requestXml = null;
        BHGEZQuoteTrackingRequest request = new BHGEZQuoteTrackingRequest();
        try {
            final UserModel currentUser = userService.getCurrentUser();
            if (!userService.isAnonymousUser(currentUser) && currentUser instanceof GEEdgeCustomerModel customer) {
                final B2BUnitModel defaultB2bUnit = customer.getDefaultB2BUnit();
                final String[] b2bUnit = defaultB2bUnit.getUid().split("_");
                final String b2bUnitId = b2bUnit[0];
                final String salesOrg = b2bUnit[1];
                final String division = b2bUnit[3];
                final String distribution = b2bUnit[2];
                request.setDistribution(distribution);
                request.setDivision(division);
                request.setSalesOrg(salesOrg);
                if (StringUtils.isNotBlank(trackingReqData.getQuoteNumber())) {
                    request.setQuoteCode(trackingReqData.getQuoteNumber());
                }
                request.setKunnr(b2bUnitId);
                requestXml = SCPIConnector.toXML(request);
                return requestXml;
            }
        } catch (Exception e) {
            LOG.error("Exception during quote history request XML preparation: {}", e.getMessage());
        }
        return null;
    }

    private String getFormattedDate() {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        return formatter.format(date);
    }
}
