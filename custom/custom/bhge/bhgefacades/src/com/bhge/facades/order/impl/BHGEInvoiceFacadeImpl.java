package com.bhge.facades.order.impl;

import com.bhge.core.data.BHGESalesOrderAttachmentData;
import com.bhge.facades.invoice.data.*;
import com.bhge.facades.order.BHGEInvoiceFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.integration.invoice.history.BHGEInvoiceHistoryService;
import com.ds.dsocc.invoice.data.*;
import com.ofs.core.model.InvoiceModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2bacceleratorfacades.order.data.B2BUnitData;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.math.BigDecimal;
import java.util.*;

public class BHGEInvoiceFacadeImpl implements BHGEInvoiceFacade {
    private static final org.apache.log4j.Logger LOG = Logger.getLogger(BHGEInvoiceFacadeImpl.class);
    private static final String PAST_DUE = "Past Due";
    @Resource
    private BHGEInvoiceHistoryService bhgeInvoiceHistoryService;
    @Resource(name = "bhgeUserProfileFacade")
    private BHGEUserProfileFacade bhgeUserProfileFacade;
    @Resource(name = "userService")
    private UserService userService;
    @Resource(name = "commonI18NService")
    private CommonI18NService commonI18NService;
    @Resource(name = "priceDataFactory")
    private PriceDataFactory priceDataFactory;


    @Override
    public SearchPageData<InvoiceTrackingResponseData> getInvoiceTrackingData(InvoiceTrackingRequestData trackingReqData, InvoiceTrackingRequestWSDTO invoiceWsDTO, PageableData pageableData) {
        SearchPageData<InvoiceTrackingResponseData> responseData = new SearchPageData<>();
        try {
            LOG.info("US551924: Inside getInvoiceTracking method");
            responseData = bhgeInvoiceHistoryService.getInvoiceHistory(trackingReqData,invoiceWsDTO, pageableData);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return responseData;
    }


    @Override
    public List<OrderStatusSoldToNameData> getCustomerDetails() {
        final Set<B2BUnitModel> soldToList = bhgeUserProfileFacade.getSoldToListForUser();
        LOG.info("Loaded Order Status " + soldToList.size());
        final List<OrderStatusSoldToNameData> customerAccounts = new ArrayList<OrderStatusSoldToNameData>();
        final List<B2BUnitData> geEdgeSoldToList = getFavoriteSoldTo();

        for (final B2BUnitModel parentSoldTo : soldToList) {
            final OrderStatusSoldToNameData sold = new OrderStatusSoldToNameData();
            sold.setName(parentSoldTo.getName());
            sold.setUid(parentSoldTo.getUid());
            sold.setNumber(parentSoldTo.getUid());
            sold.setFavouritesFlag(false);
            for (final B2BUnitData favValue : geEdgeSoldToList) {
                if (favValue.getUid().contains(parentSoldTo.getUid())) {
                    sold.setFavouritesFlag(true);
                }
            }
            customerAccounts.add(sold);

        }

        return customerAccounts;
    }

    @Override
    public PriceData calculateInvoiceTotalValue(List<InvoiceTrackingResponseData> results, InvoiceTrackingResponseListWSDTO invoiceResponse) {
        Double invoiceValue = Double.valueOf(0.00);
        for (InvoiceTrackingResponseData invoice : results) {
            if (invoice.getInvoiceStatus().equals(PAST_DUE) && invoice.getAmount() > 0) {
                invoiceValue = invoiceValue + invoice.getAmount();

            }
        }
        Optional<InvoiceTrackingResponseData> invoiceData = results.stream().filter(invoice -> null != invoice.getCurrency()).findFirst();
        String invoiceCurrencyCode = invoiceData.isPresent() ? invoiceData.get().getCurrency() : commonI18NService.getCurrentCurrency().getIsocode();
        PriceData totalInvoicePriceData = priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(invoiceValue), invoiceCurrencyCode);
        return totalInvoicePriceData;

    }

    @Override
    public PriceData calculateInvoiceAmount(List<InvoiceTrackingResponseWSDTO> invoiceDataWsDTOList) {
        Double invoiceValue = Double.valueOf(0.00);
        for (InvoiceTrackingResponseWSDTO invoice : invoiceDataWsDTOList) {
            if (null != invoice.getAmount() && invoice.getAmount().doubleValue() > 0) {
                invoiceValue = invoiceValue + invoice.getAmount().doubleValue();

            }
        }
        Optional<InvoiceTrackingResponseWSDTO> invoiceData = invoiceDataWsDTOList.stream().filter(invoice -> null != invoice.getCurrency()).findFirst();
        String invoiceCurrencyCode = invoiceData.isPresent() ? invoiceData.get().getCurrency() : commonI18NService.getCurrentCurrency().getIsocode();
        PriceData totalInvoicePriceData = priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(invoiceValue), invoiceCurrencyCode);
        return totalInvoicePriceData;
    }

    @Override
    public InvoicePaymentDataWsDTO getInvoicePaymentPageData(List<InvoiceTrackingResponseWSDTO> invoiceDataWsDTOList) {
        LOG.info("US551924: Inside getInvoicePaymentPageData method");
        InvoicePaymentDataWsDTO invoicePaymentDataWsDTO=new InvoicePaymentDataWsDTO();
        Double totalAmount=0.0;
        invoicePaymentDataWsDTO.setInvoicesList(new ArrayList<InvoicePaymentRequestWsDTO>());
        try {
            for (InvoiceTrackingResponseWSDTO invoice : invoiceDataWsDTOList) {
                InvoicePaymentRequestWsDTO invoicePaymentData = new InvoicePaymentRequestWsDTO();
                InvoiceModel invoiceModel = bhgeInvoiceHistoryService.retrieveInvoice(invoice.getInvoiceNumber());
                if (invoiceModel == null) {
                    LOG.info("Creating Invoice Model for Invoice Number: " + invoice.getInvoiceNumber());
                    bhgeInvoiceHistoryService.createInvoiceModel(invoice);
                } else {
                    LOG.info("Invoice Model already exists for Invoice Number: " + invoice.getInvoiceNumber()+"Trasaction Status: "+invoiceModel.getTransactionStatus()+". Updating the same.");
                    invoicePaymentData.setPaymentStatus(invoiceModel.getTransactionStatus());
                    bhgeInvoiceHistoryService.saveInvoiceModel(invoiceModel);
                }
                invoicePaymentData.setStatus("In progress");
                invoicePaymentData.setPaymentMode("card");
                invoicePaymentData.setCustomer(invoice.getCustomer());
                invoicePaymentData.setCompany(invoice.getCompany());
                invoicePaymentData.setInvoiceNumber(invoice.getInvoiceNumber());
                //invoicePaymentData.setIsCredit(Boolean.FALSE);
                PriceData totalPrice = calculateInvoiceAmount(Collections.singletonList(invoice));
                invoicePaymentData.setAmount(String.valueOf(totalPrice.getValue()));
                totalAmount = totalAmount + invoice.getAmount();
                invoicePaymentDataWsDTO.getInvoicesList().add(invoicePaymentData);
            }

            String currencySymbol = invoiceDataWsDTOList.get(0).getCurrency();
            PriceData totalPriceData = priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(totalAmount), currencySymbol);
            Double creditCardConvenienceFee = 0.0;
            invoicePaymentDataWsDTO.setTotalAmount(String.valueOf(totalPriceData.getValue()));
            invoicePaymentDataWsDTO.setConvenienceFee(currencySymbol + creditCardConvenienceFee.toString());
            return invoicePaymentDataWsDTO;
        }
        catch (Exception e) {
            LOG.error("Error Occurred in getInvoicePaymentPageData: " + e.getMessage());
            return invoicePaymentDataWsDTO;
        }
    }


    @Override
    public List<InvoicePaymentResponseData> getInvoiceCheckout(List<InvoicePaymentRequestWsDTO> invoicePaymentRequestWsDTOList) {
        try {
            LOG.info("US551924: Inside getInvoiceCheckout method");
            return bhgeInvoiceHistoryService.getInvoiceCheckout(invoicePaymentRequestWsDTOList);
        } catch (Exception e) {
            LOG.error("Error Occurred in getInvoiceCheckout: " + e.getMessage());
        }
        return null;
    }
    @Override
    public BHGESalesOrderAttachmentData getAttachmentsListForInvoices_SCPI(final String orderNo, final String customerNumber, String flag, String fileName, String fileType)
    {
        LOG.info("US551924: Inside getAttachmentsListForInvoices_SCPI method");
        try {
            return bhgeInvoiceHistoryService.getAttachmentsListForInvoices_SCPI(orderNo, customerNumber, flag, fileName, fileType);
        }
        catch (Exception e) {
            LOG.error("Error Occurred in getAttachmentsListForInvoices_SCPI: " + e.getMessage());
        }
        return null;
    }
    @Override
    public BHGESalesOrderAttachmentData getNewAttachmentPDF(final String orderNumber, final String flag, String fileName, String fileType,
                                                            String customerNumber)
    {
        LOG.info("US551924: Inside getNewAttachmentPDF method");
        if(StringUtils.isNotBlank(orderNumber) && StringUtils.isNotBlank(fileName) && StringUtils.isNotBlank(fileType)) {

            return bhgeInvoiceHistoryService.getNewAttachmentPDF(orderNumber, flag, fileName, fileType, customerNumber);
        }
        return null;
    }


    private List<B2BUnitData> getFavoriteSoldTo() {
        final List<B2BUnitData> FavouriteDataList = new ArrayList<B2BUnitData>();

        GEEdgeCustomerModel currentUser = null;
        if (StringUtils.equals(Config.getParameter("current.env"), "local")) {
            currentUser = (GEEdgeCustomerModel) userService.getUserForUID("localtest");
        } else {
            if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
                currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
            }
        }
        if (null != currentUser) {
            final List<B2BUnitModel> favourites = new ArrayList<>(currentUser.getFavoriteSoldTos());

            for (final B2BUnitModel favModel : favourites) {
                final B2BUnitData favData = new B2BUnitData();
                favData.setUid(favModel.getUid());
                favData.setName(favModel.getName());
                FavouriteDataList.add(favData);
            }
        }

        return FavouriteDataList;
    }

    public BHGEInvoiceHistoryService getBhgeInvoiceHistoryService() {
        return bhgeInvoiceHistoryService;
    }

    public void setBhgeInvoiceHistoryService(BHGEInvoiceHistoryService bhgeInvoiceHistoryService) {
        this.bhgeInvoiceHistoryService = bhgeInvoiceHistoryService;
    }
}

