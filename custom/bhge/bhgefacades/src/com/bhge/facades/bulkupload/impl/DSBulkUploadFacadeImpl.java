package com.bhge.facades.bulkupload.impl;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.GEEdgeCartType;
import com.bhge.core.enums.GEEdgeProductType;
import com.bhge.core.jalo.BHGECurrency;
import com.bhge.core.model.BHGECurrencyModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.util.BHGEPriceAvailabilityUtils;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.bulkupload.BHGEDataReaderFacade;
import com.bhge.facades.bulkupload.BHGEDataValidatorFacade;
import com.bhge.facades.bulkupload.DSBulkUploadFacade;
import com.bhge.facades.bulkupload.data.DSBulkUploadForm;
import com.bhge.facades.configuration.BHGEConfigurationCartIntegrationFacade;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.*;
import com.bhge.product.service.BHGEProductService;
import com.ds.facades.bulkOrder.DsBulkOrderData;
import com.ds.facades.bulkOrder.DsBulkOrderRequestData;
import de.hybris.platform.b2bacceleratorfacades.product.data.CartEntryData;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.CartModificationData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commerceservices.order.CommerceCartService;
import de.hybris.platform.commercewebservicescommons.dto.product.ProductWsDTO;
import de.hybris.platform.core.model.c2l.CurrencyModel;


import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.sap.productconfig.occ.ProductConfigOrderEntryWsDTO;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import static com.bhge.core.constants.GeneratedBhgeCoreConstants.Enumerations.GEEdgeCartType.FILM;
import static com.bhge.core.constants.GeneratedBhgeCoreConstants.Enumerations.GEEdgeCartType.NONFILM;

public class DSBulkUploadFacadeImpl implements DSBulkUploadFacade {

    private  static final Logger LOG = Logger.getLogger(DSBulkUploadFacadeImpl.class);


    @Resource(name = "sessionService")
    SessionService sessionService;

    @Resource(name = "b2bCustomerFacade")
    protected CustomerFacade customerFacade;

    @Resource(name = "bhgeUserProfileFacade")
    private BHGEUserProfileFacade bhgeUserProfileFacade;

    @Resource(name = "bhgeDataReaderFacade")
    private BHGEDataReaderFacade bhgeDataReaderFacade;

    @Resource(name = "bhgeDataValidatorFacade")
    private BHGEDataValidatorFacade bhgeDataValidatorFacade;

    @Resource(name = "bhgeCartFacade")
    BHGECartFacade bhgeCartFacade;

    @Resource
    private UserService userService;
    
   @Resource(name = "bhgeSoldToUtil")
    private BHGESoldToUtil bhgeSoldToUtil;

    @Resource(name = "modelService")
    private ModelService modelService;

    @Resource(name = "commerceCartService")
    private CommerceCartService commerceCartService;

    @Resource(name = "productService")
    private BHGEProductService bhgeProductService;

    @Resource(name = "sapProductConfigCartIntegrationFacade")
    private BHGEConfigurationCartIntegrationFacade vcConfigCartFacade;

    @Resource(name = "bhgeCartService")
    public BHGECartService bhgeCartService;

    @Resource(name="bhgePriceAvailabilityUtils")
    private BHGEPriceAvailabilityUtils bhgePriceAvailabilityUtils;

    public SessionService getSessionService() {
        return sessionService;
    }

    @Override
    public DsBulkOrderData executeBulkUpload(DSBulkUploadForm bhgeBulkUploadForm) {

        DsBulkOrderData dsBulkOrderData = new DsBulkOrderData();
        if (sessionService.getAttribute("sessionSoldTo") != null)
        {
            final String soldToUid = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getUid();
        }
        boolean proceedToShoppingCart = false;
        final boolean isRedirectedFromConfigPage = false;
        final Boolean isAddedToCart = false;
        final Boolean isKBNotFound = false;
        BHGEBulkUploadInputEntryData bhgeBulkUploadInputEntryData = null;

        final CustomerData customerData = customerFacade.getCurrentCustomer();
        if (customerData == null || customerData.getUid() == null || customerData.getUid().equals("anonymous"))
        {
            // TODO : We have to correct the redirection code based on Exception handling by setting Error codes and message
           // return REDIRECT_PREFIX + "/home";
        }
        final BHGECustomerData geEdgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
        dsBulkOrderData.setGeEdgeCustomerData(geEdgeCustomerData);
        dsBulkOrderData.setIsSingleSoldtoSalesArea(sessionService.getAttribute("isSingleSoldtoSalesArea"));
        //model.addAttribute("geEdgeCustomerData", geEdgeCustomerData);
        //model.addAttribute("isSingleSoldtoSalesArea", sessionService.getAttribute("isSingleSoldtoSalesArea"));

        if (isAddedToCart && isRedirectedFromConfigPage)
        {
            final String addedConfigPart = (String) getSessionService().getAttribute(BhgeCoreConstants.ADDED_CONFIG_PART);
            /*GlobalMessages.addMessage(model, GlobalMessages.CONF_MESSAGES_HOLDER,
                    addedConfigPart + " " + Config.getString("basket.config.part.added.message",
                            "has been added successfully to cart, Please validate the remaining items below"),
                    null);*/
        }

        if (isKBNotFound && isRedirectedFromConfigPage)
        {
            //final String kbPartCode = (String) ((null != model.asMap().get("kbPartCode")) ? model.asMap().get("kbPartCode") : "");
            /*GlobalMessages.addMessage(model, GlobalMessages.ERROR_MESSAGES_HOLDER, "product.config.notfound.message", new Object[]
                    { kbPartCode });*/
        }

        getSessionService().removeAttribute(BhgeCoreConstants.UPLOAD_FORM_DATA);
        getSessionService().setAttribute(BhgeCoreConstants.UPLOAD_FORM_DATA, bhgeBulkUploadForm);

        final String csvInput = bhgeBulkUploadForm != null ? bhgeBulkUploadForm.getCsvInput() : "";
        List<BHGEBulkUploadInputEntryData> bulkUploadList = null;
        List<BHGEBulkUploadEntryData> validatedBulkUploadList = null;

        if (isRedirectedFromConfigPage)
        {
            final List<BHGEBulkUploadInputEntryData> bulkUploadListSessionData = (List<BHGEBulkUploadInputEntryData>) getSessionService()
                    .getAttribute(BhgeCoreConstants.UPLOAD_FORM_INPUT_VALUES);
            bulkUploadList = new ArrayList<BHGEBulkUploadInputEntryData>(bulkUploadListSessionData);
            validatedBulkUploadList = (List<BHGEBulkUploadEntryData>) getSessionService()
                    .getAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);

            bhgeBulkUploadInputEntryData = bulkUploadList.get(0);
            if (bhgeBulkUploadInputEntryData != null && bhgeBulkUploadInputEntryData.getExcelInputData() != null
                    && bhgeBulkUploadInputEntryData.getPartNum() == null)
            {
                final BHGEExcelUploadInputEntryData excelInputEntryData = bhgeDataValidatorFacade
                        .validateExcelInputData(bhgeBulkUploadInputEntryData.getExcelInputData());
                dsBulkOrderData.setExcelInputData(excelInputEntryData);
                dsBulkOrderData.setListOfStates(bhgeUserProfileFacade.getRegionsForCountryCode(excelInputEntryData.getShipToCountry()));
                //model.addAttribute("excelInputEntryData", excelInputEntryData);
                /*model.addAttribute("listOfRegions",
                        bhgeUserProfileFacade.getRegionsForCountryCode(excelInputEntryData.getShipToCountry()));*/
                bulkUploadList.remove(0);
            }
        }
        else
        {
            final long startTime = System.currentTimeMillis();
            //if CSV entered
            if (csvInput != null && !csvInput.isEmpty())
            {

                bulkUploadList = bhgeDataReaderFacade.csvDataReader(csvInput);
                final long CSVReadTime = System.currentTimeMillis();

                getSessionService().removeAttribute(BhgeCoreConstants.UPLOAD_FORM_INPUT_VALUES);
                getSessionService().setAttribute(BhgeCoreConstants.UPLOAD_FORM_INPUT_VALUES, bulkUploadList);
            }

            final String configuredBulkUploadLimit = Config.getParameter("bulkupload.allowedlimit");

            if (CollectionUtils.isNotEmpty(bulkUploadList) && bulkUploadList.size() > Integer.valueOf(configuredBulkUploadLimit))
            {
                // TODO : We have to correct the redirection code based on Exception handling by setting Error codes and message
                /*GlobalMessages.addFlashMessage(redirectModel, GlobalMessages.ERROR_MESSAGES_HOLDER, "basket.bulkupload.limit.error",
                        new Object[]
                                { configuredBulkUploadLimit });*/
                // return "redirect:/home";
            }

            final long validateStartTime = System.currentTimeMillis();
            validatedBulkUploadList = bhgeDataValidatorFacade.validateBulkUploadDataList(bulkUploadList);
            LOG.debug("validatedBulkUploadList flag is : " + validatedBulkUploadList);
            final long validateTime = System.currentTimeMillis();
        }

        getSessionService().removeAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);
        getSessionService().setAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA, validatedBulkUploadList);

        // model.addAttribute("bulkUploadFile", "bulkupload");
        proceedToShoppingCart = proceedToShoppingCart(validatedBulkUploadList, dsBulkOrderData);
        LOG.debug("proceedToShoppingCart flag is : " + proceedToShoppingCart);
        final BHGEBulkUploadListData bulkUploadListData = new BHGEBulkUploadListData();
        bulkUploadListData.setBulkUploadList(validatedBulkUploadList);

        /** If all items in the bulk upload list is added to cart - Redirect to Cart Page */
        List<BHGEBulkUploadEntryData> validatedUploadList = null;
        if (null != validatedBulkUploadList && validatedBulkUploadList.size() > 0)
        {
            validatedUploadList = new ArrayList<BHGEBulkUploadEntryData>(validatedBulkUploadList);
            int addedToCartCount = 0;
            for (final BHGEBulkUploadEntryData bulkUploadEntryData : validatedUploadList)
            {
                if (null != bulkUploadEntryData.getIsAddedToCart() && bulkUploadEntryData.getIsAddedToCart())
                {
                    addedToCartCount++;
                }
            }
            if (validatedUploadList.size() == addedToCartCount)
            {
                LOG.debug("Validated upload list and addedToCartCount are same, hence redirecting to cart page");
                /** Once Cart Page is loaded - Remove Upload Review Data from Session */
                sessionService.removeAttribute("fromUpload");
                sessionService.removeAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);
                // TODO : We have to correct the redirection code based on Exception handling by setting Error codes and message
                // return "redirect:/cart";
            }
        }

        if (proceedToShoppingCart && bhgeBulkUploadInputEntryData != null
                && bhgeBulkUploadInputEntryData.getExcelInputData() != null
                && !bhgeBulkUploadInputEntryData.getExcelInputData().getStatusMap().containsValue(false))
        {
            dsBulkOrderData.setGeEdgeBulkCartData(bulkUploadListData);
            dsBulkOrderData.setExcelInputData(bhgeBulkUploadInputEntryData.getExcelInputData());
            //redirectModel.addFlashAttribute("geEdgeBulkCartData", bulkUploadListData);
            //redirectModel.addFlashAttribute("excelInputData", bhgeBulkUploadInputEntryData.getExcelInputData());
            // TODO : We have to correct the redirection code based on Exception handling by setting Error codes and message
            // return "redirect:/cart/addbulk";
        }
        else if (proceedToShoppingCart && bhgeBulkUploadInputEntryData == null)
        {
            LOG.debug("proceedToShoppingCart is true, hence redirecting to /cart/addbulk page");
            dsBulkOrderData.setGeEdgeBulkCartData(bulkUploadListData);
            // redirectModel.addFlashAttribute("geEdgeBulkCartData", bulkUploadListData);
            // TODO : We have to correct the redirection code based on Exception handling by setting Error codes and message
            // return "redirect:/cart/addbulk";
        }
        else
        {
            dsBulkOrderData.setGeEdgeBulkCartData(bulkUploadListData);
            // model.addAttribute("geEdgeBulkCartData", bulkUploadListData);
            if (bulkUploadList != null)
            {
                dsBulkOrderData.setBulkUploadList(bulkUploadList);
                // model.addAttribute("bulkUploadList", bulkUploadList);
            }
            dsBulkOrderData.setValidatedBulkUploadList(validatedBulkUploadList);
            dsBulkOrderData.setListOfStates(bhgeUserProfileFacade.getRegionsForCountryCode("US"));
            // model.addAttribute("validatedBulkUploadList", validatedBulkUploadList);
            // model.addAttribute("listOfStates", bhgeUserProfileFacade.getRegionsForCountryCode("US"));
            //model.addAttribute("listOfCountries", defaultGEEdgeUserProfileFecade.getCountries());
            //final List<ShippingCarrierMethodData> prepayCarrierTypes = geEdgeCheckoutFacade.retriveCarrierMethods("prepay_add");
            //final List<ShippingCarrierMethodData> collectCarrierTypes = geEdgeCheckoutFacade.retriveCarrierMethods("collect");
            //model.addAttribute("prepay_addTypes", prepayCarrierTypes);
            //model.addAttribute("collectTypes", collectCarrierTypes);

           /* storeCmsPageInModel(model, getContentPageForLabelOrId(null));
            setUpMetaDataForContentPage(model, getContentPageForLabelOrId(null));
            updatePageTitle(model, getContentPageForLabelOrId(null));*/
            if (null != ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency())
            {
                dsBulkOrderData.setCurrencyISO(((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency().getIsocode());
                dsBulkOrderData.setCurrencyFormattedValue(((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency().getSymbol());
                /*model.addAttribute("currencyISO",
                        ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency().getIsocode());
                model.addAttribute("currencyFormattedValue",
                        ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency().getSymbol());*/
            }
            /*storeCmsPageInModel(model, getContentPageForLabelOrId(BULKUPLOAD_CMS_PAGE));
            setUpMetaDataForContentPage(model, getContentPageForLabelOrId(BULKUPLOAD_CMS_PAGE));
            updatePageTitle(model, getContentPageForLabelOrId(BULKUPLOAD_CMS_PAGE));*/
            // return getViewForPage(model);
        }

        return dsBulkOrderData;
    }

    @Override
    public BHGEBulkUploadEntryData validateBulkUpload(String partNum, String qty, String lineNo) {
        final PriceData priceData = bhgeCartFacade.getPriceFromRFCForWS(StringEscapeUtils.escapeHtml4(partNum), null);

        if (priceData != null && priceData.getConnectivityerror() != null) {
            final BHGEBulkUploadEntryData validatedData = new BHGEBulkUploadEntryData();
            validatedData.setStatus("Connectivity Error");
            return validatedData;
        } else {
            final BHGEBulkUploadInputEntryData inputEntry = new BHGEBulkUploadInputEntryData();
            if (StringEscapeUtils.escapeHtml4(qty).equalsIgnoreCase("Er")) {
                qty = "1";
            }

            inputEntry.setPartNum(StringEscapeUtils.escapeHtml4(partNum));
            if (StringUtils.isNotEmpty(StringEscapeUtils.escapeHtml4(qty))) {
                inputEntry.setQuantity(StringEscapeUtils.escapeHtml4(qty));
            }
            inputEntry.setLineNo(StringEscapeUtils.escapeHtml4(lineNo));

            if (priceData != null && priceData.getValue() != null) {
                LOG.info("Inside validateBulkUpload method Price data"+priceData.getValue().toString());
                inputEntry.setUnitPrice(priceData.getValue().toString());
            }

            final BHGEBulkUploadEntryData validatedData = bhgeDataValidatorFacade.validateBulkUploadDataEntry(inputEntry,
                    Integer.parseInt(StringEscapeUtils.escapeHtml4(lineNo)));
            if ("Check Price".equals(validatedData.getStatus())) {
                validatedData.setStatus("Price Not Available");
            }
            return validatedData;
        }
    }

    @Override
    public DsBulkOrderRequestData addToCartbulkProducts(BHGEBulkUploadListData bulkUploadListData,
                                        BHGEExcelUploadInputEntryData excelInputData,
                                        String callingsource,
                                        HttpSession session,
                                        String customerPO) {
        DsBulkOrderRequestData dsBulkOrderRequestData = null;
        try
        {
            final List<BHGEBulkUploadEntryData> bulkList = bulkUploadListData.getBulkUploadList();
            dsBulkOrderRequestData = new DsBulkOrderRequestData();
            final UserModel user = userService.getCurrentUser();

            LOG.info(" ################################# " + user.getUid() + " trying to add Product(s) from " + callingsource
                    + " #########################################");
            final String customerPo = customerPO;
            //final String customerPo = request.getParameter(BhgeCoreConstants.CUSTOMER_PO); //

            final CustomerData customerData = customerFacade.getCurrentCustomer();
            final BHGECustomerData geEdgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
            //final CartModel cartModel = populateCartModel(geEdgeCustomerData);
            //coverity 17679  RC: Questionable use of reference equality rather than calling equals
            if (geEdgeCustomerData.getIsShipCompleteOrder() != null && geEdgeCustomerData.getIsShipCompleteOrder().booleanValue())
            {
                dsBulkOrderRequestData.setShipMode("complete");
                //request.setAttribute("shipMode", "complete"); //
            }
            else
            {
                dsBulkOrderRequestData.setShipMode("partial");
                //request.setAttribute("shipMode", "partial"); //
            }
            if (excelInputData != null)
            {
                if (geEdgeCustomerData.getIsShipCompleteOrder() != null && geEdgeCustomerData.getIsShipCompleteOrder().booleanValue())
                {
                    excelInputData.setShipComplete("complete");
                }
                else
                {
                    excelInputData.setShipComplete("partial");
                }
            }

            dsBulkOrderRequestData.setDelAcc(geEdgeCustomerData.getDeliveryAccount());
            //request.setAttribute("delAcc", geEdgeCustomerData.getDeliveryAccount()); //
            if (excelInputData != null)
            {
                excelInputData.setDeliveryAccount(geEdgeCustomerData.getDeliveryAccount());
            }

            dsBulkOrderRequestData.setShipName(geEdgeCustomerData.getShippingContactName());
            //request.setAttribute("shipName", geEdgeCustomerData.getShippingContactName()); //
            if (excelInputData != null)
            {
                excelInputData.setShipToContactName(geEdgeCustomerData.getShippingContactName());
            }
            dsBulkOrderRequestData.setShipPhone(geEdgeCustomerData.getShippingContactNumber());
            //request.setAttribute("shipPhone", geEdgeCustomerData.getShippingContactNumber()); //
            if (excelInputData != null)
            {
                excelInputData.setShipToContactPhone(geEdgeCustomerData.getShippingContactNumber());
            }

            dsBulkOrderRequestData.setDelOptions(geEdgeCustomerData.getDeliveryOptions());
            //request.setAttribute("delOptions", geEdgeCustomerData.getDeliveryOptions()); //
            if (excelInputData != null)
            {
                excelInputData.setShippingMethod(geEdgeCustomerData.getDeliveryOptions());
            }


            if (StringUtils.isNotEmpty(customerPo) && StringUtils.isEmpty(excelInputData.getShipToZipCode()))
            {
                //addShippingInfoToCart(request, excelInputData, true);
            }

            if (excelInputData != null && StringUtils.isNotEmpty(excelInputData.getShipToZipCode()))
            {
                //addShippingInfoToCart(request, excelInputData, false);
            }

            final List<CartModificationData> modifications = new ArrayList<CartModificationData>();
            // getting sold to and user id
            final String soldTo = (String) session.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO);
            long addedQuantity = 0;
            final String validatedFlag = Config.getString("VALIDATED", "Validated");
            final long startingTime = System.currentTimeMillis();
            LOG.info("Starting bulk upload to cart " + startingTime);
            for (final BHGEBulkUploadEntryData bulkEntry : bulkList)
            {
                if (bulkEntry != null && bulkEntry.getPartNum() == null)
                {
                    continue;
                }
                Boolean modification = false;

                if (null != bulkEntry && validatedFlag.equalsIgnoreCase(bulkEntry.getStatus()))
                {
                    String partNumber = "";
                    if (bulkEntry.getPartNum().contains(","))
                    {
                        final String[] productCodes = bulkEntry.getPartNum().split(",", 2);
                        if (productCodes[0].equalsIgnoreCase(productCodes[1]))
                        {
                            partNumber = productCodes[0];
                        }
                    }
                    if (StringUtils.isNotEmpty(partNumber))
                    {
                        if (bulkEntry.getDescription() != null && bulkEntry.getDescription().contains("Check Price"))
                        {
                            bhgeCartFacade.addToCartWithPrice(partNumber, bulkEntry.getQuantity(), bulkEntry.getUnitPrice());
                            bulkEntry.getDescription().replaceAll("Check Price", "");
                            modification = true;
                        }
                        else
                        {
                            modification = bhgeCartFacade.addToCartBulkUpload(partNumber, bulkEntry.getQuantity());
                            //modification = cartFacade.addToCartBulkUpload(partNumber, bulkEntry.getQuantity(), customerData, geEdgeCustomerData, cartModel);
                        }
                    }
                    else
                    {
                        if (bulkEntry.getDescription() != null && bulkEntry.getDescription().contains("Check Price"))
                        {
                            bhgeCartFacade.addToCartWithPrice(StringEscapeUtils.escapeHtml4(bulkEntry.getPartNum()), bulkEntry.getQuantity(),
                                    bulkEntry.getUnitPrice());
                            bulkEntry.getDescription().replaceAll("Check Price", "");
                            modification = true;
                        }
                        else
                        {
                            modification = bhgeCartFacade.addToCartBulkUpload(bulkEntry.getPartNum(), bulkEntry.getQuantity());
                            //modification = cartFacade.addToCartBulkUpload(StringEscapeUtils.escapeHtml4(bulkEntry.getPartNum()), bulkEntry.getQuantity(), customerData, geEdgeCustomerData, cartModel);
                        }
                    }
                }

                if (modification)
                {
                    addedQuantity++;
                }



            }
            LOG.info(addedQuantity + "items are added to the cart");
            final long endingTime = System.currentTimeMillis();
            LOG.info("Ending bulk upload to cart " + endingTime);

            LOG.info("Total time taken for bulk upload " + (endingTime - startingTime));

            session.removeAttribute("bulkUploadConfigMap");
            session.removeAttribute("bulkUploadConfigXmlMap");
            final CartData cartData = bhgeCartFacade.getMiniCart();
            dsBulkOrderRequestData.setNewCartData(cartData);
            //model.addAttribute("newCartData", cartData); //

            if (addedQuantity > 0)
            {
                dsBulkOrderRequestData.setGlobalMessage(Config.getParameter("basket.bulkupload.file.upload.success.banner"));
                /*GlobalMessages.addFlashMessage(redirectAttributes, GlobalMessages.CONF_MESSAGES_HOLDER,
                        "basket.bulkupload.file.upload.success.banner", new Object[]
                                { Long.toString(addedQuantity) });*/ //

                /*GlobalMessages.addMessage(model, GlobalMessages.CONF_MESSAGES_HOLDER, "basket.bulkupload.file.upload.success.banner",
                        new Object[]
                                { Long.toString(addedQuantity) });*/ //
            }

            // TODO : Needs to add this form object in the DsBulkOrderRequestData
            //final BHGEBulkUploadForm bhgeBulkUploadForm = new BHGEBulkUploadForm();
            //model.addAttribute("bhgeBulkUploadForm", bhgeBulkUploadForm);
            dsBulkOrderRequestData.setBulkUploadFile(null);
            //model.addAttribute("bulkUploadFile", null); //
            //storeCmsPageInModel(model, getContentPageForLabelOrId(null));
            //setUpMetaDataForContentPage(model, getContentPageForLabelOrId(null));

            //** Once Cart Page is loaded - Remove Upload Review Data from Session *//*
            session.removeAttribute("fromUpload");
            sessionService.removeAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);

        }
        catch (final Exception e)
        {
            LOG.error("Error occurred while adding bulk items to the cart - " + e);
        }

        return dsBulkOrderRequestData;
        //return "redirect:/cart"; // TODO : UI - Needs to redirect to /cart method
    }

    
    
    //Added for spartacus migration 
	@Override
    public DsBulkOrderRequestData addToCartbulkProductsWs(BHGEBulkUploadListData bulkUploadListData,
		    BHGEExcelUploadInputEntryData excelInputData,
		    String callingsource,
		    HttpSession session,
		    String customerPO, String cartId) {
        DsBulkOrderRequestData dsBulkOrderRequestData = null;
        try {
            final List<BHGEBulkUploadEntryData> bulkList = bulkUploadListData.getBulkUploadList();
            dsBulkOrderRequestData = new DsBulkOrderRequestData();
            final UserModel user = userService.getCurrentUser();

            LOG.info(" ################################# " + user.getUid() + " trying to add Product(s) from " + callingsource
                    + " #########################################");
            final String customerPo = customerPO;
            //final String customerPo = request.getParameter(BhgeCoreConstants.CUSTOMER_PO); //

            final CustomerData customerData = customerFacade.getCurrentCustomer();
            final BHGECustomerData geEdgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
            //final CartModel cartModel = populateCartModel(geEdgeCustomerData);
            //coverity 17679  RC: Questionable use of reference equality rather than calling equals
            if (geEdgeCustomerData.getIsShipCompleteOrder() != null && geEdgeCustomerData.getIsShipCompleteOrder().booleanValue()) {
                dsBulkOrderRequestData.setShipMode("complete");
                //request.setAttribute("shipMode", "complete"); //
            } else {
                dsBulkOrderRequestData.setShipMode("partial");
                //request.setAttribute("shipMode", "partial"); //
            }
            if (excelInputData != null) {
                if (geEdgeCustomerData.getIsShipCompleteOrder() != null && geEdgeCustomerData.getIsShipCompleteOrder().booleanValue()) {
                    excelInputData.setShipComplete("complete");
                } else {
                    excelInputData.setShipComplete("partial");
                }
            }

            dsBulkOrderRequestData.setDelAcc(geEdgeCustomerData.getDeliveryAccount());
            //request.setAttribute("delAcc", geEdgeCustomerData.getDeliveryAccount()); //
            if (excelInputData != null) {
                excelInputData.setDeliveryAccount(geEdgeCustomerData.getDeliveryAccount());
            }

            dsBulkOrderRequestData.setShipName(geEdgeCustomerData.getShippingContactName());
            //request.setAttribute("shipName", geEdgeCustomerData.getShippingContactName()); //
            if (excelInputData != null) {
                excelInputData.setShipToContactName(geEdgeCustomerData.getShippingContactName());
            }
            dsBulkOrderRequestData.setShipPhone(geEdgeCustomerData.getShippingContactNumber());
            //request.setAttribute("shipPhone", geEdgeCustomerData.getShippingContactNumber()); //
            if (excelInputData != null) {
                excelInputData.setShipToContactPhone(geEdgeCustomerData.getShippingContactNumber());
            }

            dsBulkOrderRequestData.setDelOptions(geEdgeCustomerData.getDeliveryOptions());
            //request.setAttribute("delOptions", geEdgeCustomerData.getDeliveryOptions()); //
            if (excelInputData != null) {
                excelInputData.setShippingMethod(geEdgeCustomerData.getDeliveryOptions());
            }


            if (StringUtils.isNotEmpty(customerPo) && StringUtils.isEmpty(excelInputData.getShipToZipCode())) {
                //addShippingInfoToCart(request, excelInputData, true);
            }

            if (excelInputData != null && StringUtils.isNotEmpty(excelInputData.getShipToZipCode())) {
                //addShippingInfoToCart(request, excelInputData, false);
            }

            final List<CartModificationData> modifications = new ArrayList<CartModificationData>();
            // getting sold to and user id
            //final String soldTo = (String) session.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO);
            final String soldTo = customerData.getUnit().getUid();
            long addedQuantity = 0;
            final String validatedFlag = Config.getString("VALIDATED", "Validated");
            final String configureFlag = Config.getString("CONFIGURE", "Configure");

            final long startingTime = System.currentTimeMillis();
            LOG.info("Starting bulk upload to cart " + startingTime);
            for (final BHGEBulkUploadEntryData bulkEntry : bulkList) {
                if (bulkEntry != null && bulkEntry.getPartNum() == null) {
                    continue;
                }
                Boolean modification = false;

                if (null != bulkEntry && (validatedFlag.equalsIgnoreCase(bulkEntry.getStatus()) || StringUtils.isNotEmpty(bulkEntry.getPartNum())) || configureFlag.equalsIgnoreCase(bulkEntry.getStatus())) {
                    {
                        String partNumber = "";
                        if (bulkEntry.getPartNum().contains(",")) {
                            final String[] productCodes = bulkEntry.getPartNum().split(",", 2);
                            if (productCodes[0].equalsIgnoreCase(productCodes[1])) {
                                partNumber = productCodes[0];
                            }
                        } else {
                            partNumber = bulkEntry.getPartNum();
                        }
                        if (StringUtils.isNotEmpty(partNumber)) {
                            if (bulkEntry.getDescription() != null && bulkEntry.getDescription().contains("Check Price")) {
                                bhgeCartFacade.addToCartWithPriceWs(StringEscapeUtils.escapeHtml4(partNumber), bulkEntry.getQuantity(), bulkEntry.getUnitPrice(), cartId, bhgeSoldToUtil);
                                bulkEntry.getDescription().replaceAll("Check Price", "");
                                modification = true;
                            } else if(bulkEntry.getConfigurationValid().booleanValue()){
                                final OrderEntryData orderEntry = new OrderEntryData();
                                    orderEntry.setQuantity(bulkEntry.getQuantity().longValue());
                                    ProductData productData = new ProductData();
                                    productData.setCode(bulkEntry.getActualPartNum());
                                    orderEntry.setProduct(productData);
                                    orderEntry.setEntryNumber(null);
                                    orderEntry.setLongConfiguration(bulkEntry.getPartNum());
                                if(null != bulkEntry.getEcaCode())
                                {
                                    LOG.info("Adding entry with ECA code in Order Configuration Valid " + bulkEntry.getEcaCode() + " and product code " + bulkEntry.getActualPartNum() + " to cart");
                                    orderEntry.setEcaCode(Long.valueOf(bulkEntry.getEcaCode()));
                                }
                                    bhgeCartFacade.addOrderEntry(orderEntry);
                                    modification = true;
                                } else if(null != bulkEntry.getDummyProduct() && bulkEntry.getDummyProduct().booleanValue()){
                                    final OrderEntryData orderEntry = new OrderEntryData();
                                    orderEntry.setQuantity(bulkEntry.getQuantity().longValue());
                                    ProductData productData = new ProductData();
                                    productData.setCode(bulkEntry.getActualPartNum());
                                    orderEntry.setProduct(productData);
                                    orderEntry.setDummyProductDescription(bulkEntry.getDummyProductDescription());
                                    if(null != bulkEntry.getEcaCode())
                                {
                                    LOG.info("Adding entry with ECA code " + bulkEntry.getEcaCode() + " and product code " + bulkEntry.getActualPartNum() + " to cart");
                                    orderEntry.setEcaCode(Long.valueOf(bulkEntry.getEcaCode()));
                                }
                                    final CartModificationData cartModificationData = bhgeCartFacade.addOrderEntry(orderEntry);
                                    savePartPlaceHolderDetailsInCart(cartModificationData, bulkEntry);
                                    modification = true;
                                } else if(StringUtils.isNotEmpty(bulkEntry.getConfigId())){
                                    ProductConfigOrderEntryWsDTO entry = new ProductConfigOrderEntryWsDTO();
                                    ProductWsDTO productWsDTO = new ProductWsDTO();
                                    productWsDTO.setCode(bulkEntry.getActualPartNum());
                                    entry.setProduct(productWsDTO);
                                    entry.setConfigId(bulkEntry.getConfigId());
                                    entry.setQuantity(bulkEntry.getQuantity().longValue());
                                    vcConfigCartFacade.addVCConfigurationToCart(entry, null);
                                    modification = true;
                                }
                            else {
                                    modification = bhgeCartFacade.addToCartBulkUploadWs(StringEscapeUtils.escapeHtml4(partNumber), bulkEntry.getQuantity(),bulkEntry.getEcaCode(), cartId, bhgeSoldToUtil);
                                } //modification = cartFacade.addToCartBulkUpload(partNumber, bulkEntry.getQuantity(), customerData, geEdgeCustomerData, cartModel);
                            }
                        } /*else {
                            if (bulkEntry.getDescription() != null && bulkEntry.getDescription().contains("Check Price")) {
                                bhgeCartFacade.addToCartWithPriceWs(StringEscapeUtils.escapeHtml4(bulkEntry.getPartNum()), bulkEntry.getQuantity(),
                                        bulkEntry.getUnitPrice(), cartId, bhgeSoldToUtil);
                                bulkEntry.getDescription().replaceAll("Check Price", "");
                                modification = true;
                            } else {
                                modification = bhgeCartFacade.addToCartBulkUploadWs(bulkEntry.getPartNum(), bulkEntry.getQuantity(), cartId, bhgeSoldToUtil);
                                //modification = cartFacade.addToCartBulkUpload(StringEscapeUtils.escapeHtml4(bulkEntry.getPartNum()), bulkEntry.getQuantity(), customerData, geEdgeCustomerData, cartModel);
                            }
                        }*/
                    }

                    if (modification) {
                        addedQuantity++;
                    }


                }
                LOG.info(addedQuantity + "items are added to the cart");
                final long endingTime = System.currentTimeMillis();
                LOG.info("Ending bulk upload to cart " + endingTime);

                LOG.info("Total time taken for bulk upload " + (endingTime - startingTime));

                // session.removeAttribute("bulkUploadConfigMap");
                // session.removeAttribute("bulkUploadConfigXmlMap");
                final CartData cartData = bhgeCartFacade.getMiniCart();
                for (final OrderEntryData entry : cartData.getEntries()) {
                   if(entry.getEcaCode() !=null)
                   {
                       LOG.info("Entry with ECA code " + entry.getEcaCode() + " and product code " + entry.getProduct().getCode() + " is added to cart");
                   }
                   if(entry.getEnduserAddress() !=null)
                   {
                       LOG.info("Entry with End User Address " + entry.getEnduserAddress().getCompanyName() + " and product code " + entry.getProduct().getCode() + " is added to cart");
                   }
                }
                dsBulkOrderRequestData.setNewCartData(cartData);
                //model.addAttribute("newCartData", cartData); //

                if (addedQuantity > 0) {
                    dsBulkOrderRequestData.setGlobalMessage(Config.getParameter("basket.bulkupload.file.upload.success.banner"));
                /*GlobalMessages.addFlashMessage(redirectAttributes, GlobalMessages.CONF_MESSAGES_HOLDER,
                        "basket.bulkupload.file.upload.success.banner", new Object[]
                                { Long.toString(addedQuantity) });*/ //

                /*GlobalMessages.addMessage(model, GlobalMessages.CONF_MESSAGES_HOLDER, "basket.bulkupload.file.upload.success.banner",
                        new Object[]
                                { Long.toString(addedQuantity) });*/ //
                }

                // TODO : Needs to add this form object in the DsBulkOrderRequestData
                //final BHGEBulkUploadForm bhgeBulkUploadForm = new BHGEBulkUploadForm();
                //model.addAttribute("bhgeBulkUploadForm", bhgeBulkUploadForm);
                dsBulkOrderRequestData.setBulkUploadFile(null);
                //model.addAttribute("bulkUploadFile", null); //
                //storeCmsPageInModel(model, getContentPageForLabelOrId(null));
                //setUpMetaDataForContentPage(model, getContentPageForLabelOrId(null));

                //** Once Cart Page is loaded - Remove Upload Review Data from Session *//*
                //session.removeAttribute("fromUpload");
                // sessionService.removeAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);

        }
        catch( final Exception e)
            {
                LOG.error("Error occurred while adding bulk items to the cart - " + e);
            }

            return dsBulkOrderRequestData;
            //return "redirect:/cart"; // TODO : UI - Needs to redirect to /cart method
    }

    
    private boolean proceedToShoppingCart(final List<BHGEBulkUploadEntryData> validatedBulkUploadList, final DsBulkOrderData dsBulkOrderData)
    {
        int invalidPartCount = 0;
        int validPartCount = 0;
        int configurePartCount = 0;
        if (null != validatedBulkUploadList && validatedBulkUploadList.size() > 0)
        {
            for (final BHGEBulkUploadEntryData entryData : validatedBulkUploadList)
            {
            	LOG.info("Inside proceedToShoppingCart - entryData.getStatus()" + entryData.getStatus());
                if (Config.getString("VALIDATED", "Validated").equalsIgnoreCase(entryData.getStatus()))
                {
                    validPartCount++;
                }
                else if (Config.getString("ERROR", "Error").equalsIgnoreCase(entryData.getStatus()))
                {
                    invalidPartCount++;
                }
                else if (Config.getString("CONFIGURE", "Configure").equalsIgnoreCase(entryData.getStatus()))
                {
                    configurePartCount++;
                }
            }
            dsBulkOrderData.setInvalidPartsCount(invalidPartCount);
            dsBulkOrderData.setConfigurePartCount(configurePartCount);
            //model.addAttribute("invalidPartsCount", invalidPartCount);
            //model.addAttribute("configurePartCount", configurePartCount);
            if (validatedBulkUploadList.size() == validPartCount)
            {
                return true;
            }
        }
        return false;
    }

    @Override
    public DsBulkOrderData executeBulkUploadWs(DSBulkUploadForm bhgeBulkUploadForm, String cartId, String productLine) {

        DsBulkOrderData dsBulkOrderData = new DsBulkOrderData();
        /*
         * if (sessionService.getAttribute("sessionSoldTo") != null) { final String
         * soldToUid = ((BHGESoldToData)
         * sessionService.getAttribute("sessionSoldTo")).getUid(); }
         */
        boolean proceedToShoppingCart = false;
        final boolean isRedirectedFromConfigPage = false;
        final Boolean isAddedToCart = false;
        final Boolean isKBNotFound = false;
        BHGEBulkUploadInputEntryData bhgeBulkUploadInputEntryData = null;

        final CustomerData customerData = customerFacade.getCurrentCustomer();
        if (customerData == null || customerData.getUid() == null || customerData.getUid().equals("anonymous")) {
            // TODO : We have to correct the redirection code based on Exception handling by setting Error codes and message
            // return REDIRECT_PREFIX + "/home";
        }
        final BHGECustomerData geEdgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
        dsBulkOrderData.setGeEdgeCustomerData(geEdgeCustomerData);
        dsBulkOrderData.setIsSingleSoldtoSalesArea(sessionService.getAttribute("isSingleSoldtoSalesArea"));
        CartModel cartModel = null;
        cartModel = bhgeCartService.getCartByCodeForDSstore(cartId);
        //model.addAttribute("geEdgeCustomerData", geEdgeCustomerData);
        //model.addAttribute("isSingleSoldtoSalesArea", sessionService.getAttribute("isSingleSoldtoSalesArea"));

        if (isAddedToCart && isRedirectedFromConfigPage) {
            final String addedConfigPart = (String) getSessionService().getAttribute(BhgeCoreConstants.ADDED_CONFIG_PART);
            /*GlobalMessages.addMessage(model, GlobalMessages.CONF_MESSAGES_HOLDER,
                    addedConfigPart + " " + Config.getString("basket.config.part.added.message",
                            "has been added successfully to cart, Please validate the remaining items below"),
                    null);*/
        }

        if (isKBNotFound && isRedirectedFromConfigPage) {
            //final String kbPartCode = (String) ((null != model.asMap().get("kbPartCode")) ? model.asMap().get("kbPartCode") : "");
            /*GlobalMessages.addMessage(model, GlobalMessages.ERROR_MESSAGES_HOLDER, "product.config.notfound.message", new Object[]
                    { kbPartCode });*/
        }

        getSessionService().removeAttribute(BhgeCoreConstants.UPLOAD_FORM_DATA);
        getSessionService().setAttribute(BhgeCoreConstants.UPLOAD_FORM_DATA, bhgeBulkUploadForm);

        final String csvInput = bhgeBulkUploadForm != null ? bhgeBulkUploadForm.getCsvInput() : "";
        List<BHGEBulkUploadInputEntryData> bulkUploadList = null;
        List<BHGEBulkUploadEntryData> validatedBulkUploadList = null;

        List<BHGEBulkUploadEntryData> validatedCurrencyBulkUploadList;
        if (isRedirectedFromConfigPage) {
            final List<BHGEBulkUploadInputEntryData> bulkUploadListSessionData = (List<BHGEBulkUploadInputEntryData>) getSessionService()
                    .getAttribute(BhgeCoreConstants.UPLOAD_FORM_INPUT_VALUES);
            bulkUploadList = new ArrayList<BHGEBulkUploadInputEntryData>(bulkUploadListSessionData);
            validatedBulkUploadList = (List<BHGEBulkUploadEntryData>) getSessionService()
                    .getAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);

            bhgeBulkUploadInputEntryData = bulkUploadList.get(0);
            if (bhgeBulkUploadInputEntryData != null && bhgeBulkUploadInputEntryData.getExcelInputData() != null
                    && bhgeBulkUploadInputEntryData.getPartNum() == null) {
                final BHGEExcelUploadInputEntryData excelInputEntryData = bhgeDataValidatorFacade
                        .validateExcelInputData(bhgeBulkUploadInputEntryData.getExcelInputData());
                dsBulkOrderData.setExcelInputData(excelInputEntryData);
                dsBulkOrderData.setListOfStates(bhgeUserProfileFacade.getRegionsForCountryCode(excelInputEntryData.getShipToCountry()));
                //model.addAttribute("excelInputEntryData", excelInputEntryData);
                /*model.addAttribute("listOfRegions",
                        bhgeUserProfileFacade.getRegionsForCountryCode(excelInputEntryData.getShipToCountry()));*/
                bulkUploadList.remove(0);
            }
        } else {
            final long startTime = System.currentTimeMillis();
            //if CSV entered
            if (csvInput != null && !csvInput.isEmpty()) {

                bulkUploadList = bhgeDataReaderFacade.csvDataReaderWs(csvInput);
                final long CSVReadTime = System.currentTimeMillis();

                //  getSessionService().removeAttribute(BhgeCoreConstants.UPLOAD_FORM_INPUT_VALUES);
                // getSessionService().setAttribute(BhgeCoreConstants.UPLOAD_FORM_INPUT_VALUES, bulkUploadList);
            }

            final String configuredBulkUploadLimit = Config.getParameter("bulkupload.allowedlimit");

            if (CollectionUtils.isNotEmpty(bulkUploadList) && bulkUploadList.size() > Integer.valueOf(configuredBulkUploadLimit)) {
                // TODO : We have to correct the redirection code based on Exception handling by setting Error codes and message
                /*GlobalMessages.addFlashMessage(redirectModel, GlobalMessages.ERROR_MESSAGES_HOLDER, "basket.bulkupload.limit.error",
                        new Object[]
                                { configuredBulkUploadLimit });*/
                // return "redirect:/home";
            }
            final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
            final B2BUnitModel defaultB2bUnit = currentUser.getDefaultB2BUnit();
            LOG.info("Using default B2BUnit model" + defaultB2bUnit.getUid());

            final long validateStartTime = System.currentTimeMillis();
            validatedBulkUploadList = bhgeDataValidatorFacade.validateBulkUploadDataListWs(bulkUploadList, cartId, bhgeBulkUploadForm.isWaygateQuickOrderPage(), productLine);
            List<String> invalidBulkUploadList = new ArrayList<>();
            Iterator<BHGEBulkUploadEntryData> list = validatedBulkUploadList.iterator();
            String cartCurrency = null;
            String productType = null;
            String cartType = null;
            Boolean hasNonBHGECurrency = false;
            String customCurrency = null;
                for (BHGEBulkUploadEntryData listData : validatedBulkUploadList) {
                    if (listData.getProductType() != null) {
                        productType = listData.getProductType();
                        if (null != productType) {
                            cartType = getCartTypeForProductType(productType);
                        }
                        BHGECurrencyModel bhgeCurrency = bhgeProductService.getCustomerCurrency(defaultB2bUnit.getUid(), cartType);
                        if (bhgeCurrency == null) {
                            LOG.info("into the loop to set if there is a mismatch product");
                            hasNonBHGECurrency = true;
                            break;
                        }
                        if (customCurrency == null) {
                            customCurrency = bhgeCurrency.getCurrency();
                        }
                    }
                }

                LOG.info("hasNonBHGECurrency"+hasNonBHGECurrency);
                LOG.info("customCurrency"+customCurrency);

                if(!hasNonBHGECurrency && null != customCurrency && cartModel.getEntries().isEmpty()) {
                        cartModel.setCurrency(bhgeProductService.getcurrencyModel(customCurrency));
                        modelService.save(cartModel);
                        modelService.refresh(cartModel);
                }
                if(cartModel.getCurrency() != null) {
                    cartCurrency = cartModel.getCurrency().getIsocode();
                    LOG.info("cart currency in BULK from CArt "+cartCurrency);
                }
                else {
                    cartCurrency = bhgePriceAvailabilityUtils.determineCurrency();
                }
            while(list.hasNext()) {
                BHGEBulkUploadEntryData bulkUploadEntryData = list.next();
                String currency = null;
                String productCode = null;
                if (bulkUploadEntryData.getProductType() != null) {
                    productType = bulkUploadEntryData.getProductType();
                    if(null != productType){
                        cartType = getCartTypeForProductType(productType);
                    }
                    BHGECurrencyModel bhgeCurrency = bhgeProductService.getCustomerCurrency(defaultB2bUnit.getUid(), cartType);
                    if (null != bhgeCurrency) {
                        currency = bhgeCurrency.getCurrency();
                        LOG.info("currency is " + currency);
                        }
                    else{
                        currency = bhgePriceAvailabilityUtils.determineCurrency();
                    }
                    if (bulkUploadEntryData.getActualPartNum() != null) {
                        productCode = bulkUploadEntryData.getActualPartNum();
                    }
                    if(hasNonBHGECurrency){
                        if(currency != null && productCode != null && !cartCurrency.equalsIgnoreCase(currency)){
                            bulkUploadEntryData.setIsCurrencyDiffFromCart(true);
                            LOG.info("setting the flag for entry"+bulkUploadEntryData.getIsCurrencyDiffFromCart());
                        }
                    }
                    else {
                        if ( !cartCurrency.equalsIgnoreCase(currency) && productCode != null) {
                            bulkUploadEntryData.setIsCurrencyDiffFromCart(true);
                            LOG.info("setting the flag for entry"+bulkUploadEntryData.getIsCurrencyDiffFromCart());
                        }
                    }
                        }
                    }
            if(!invalidBulkUploadList.isEmpty()) {
                dsBulkOrderData.setInvalidPartsList(invalidBulkUploadList);
                LOG.info("invalid product list  after setting "+dsBulkOrderData.getInvalidPartsList());
            }
        LOG.info("validatedBulkUploadList flag is : " + validatedBulkUploadList);
        final long validateTime = System.currentTimeMillis();
        bhgeDataValidatorFacade.fetchAndPopulatePriceAvailabilityDetails(validatedBulkUploadList, productLine);
    }

        //getSessionService().removeAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);
        //getSessionService().setAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA, validatedBulkUploadList);

        // model.addAttribute("bulkUploadFile", "bulkupload");
        proceedToShoppingCart = proceedToShoppingCart(validatedBulkUploadList, dsBulkOrderData);
        LOG.info("proceedToShoppingCart flag is : " + proceedToShoppingCart);
        final BHGEBulkUploadListData bulkUploadListData = new BHGEBulkUploadListData();
        bulkUploadListData.setBulkUploadList(validatedBulkUploadList);

        /** If all items in the bulk upload list is added to cart - Redirect to Cart Page */
        List<BHGEBulkUploadEntryData> validatedUploadList = null;
        if (null != validatedBulkUploadList && validatedBulkUploadList.size() > 0)
        {
            validatedUploadList = new ArrayList<BHGEBulkUploadEntryData>(validatedBulkUploadList);
            int addedToCartCount = 0;
            for (final BHGEBulkUploadEntryData bulkUploadEntryData : validatedUploadList)
            {
                if (null != bulkUploadEntryData.getIsAddedToCart() && bulkUploadEntryData.getIsAddedToCart())
                {
                    addedToCartCount++;
                }
            }
            if (validatedUploadList.size() == addedToCartCount)
            {
                LOG.info("Validated upload list and addedToCartCount are same, hence redirecting to cart page");
                /** Once Cart Page is loaded - Remove Upload Review Data from Session */
                sessionService.removeAttribute("fromUpload");
                sessionService.removeAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);
                // TODO : We have to correct the redirection code based on Exception handling by setting Error codes and message
                // return "redirect:/cart";
            }
        }

        if (proceedToShoppingCart && bhgeBulkUploadInputEntryData != null
                && bhgeBulkUploadInputEntryData.getExcelInputData() != null
                && !bhgeBulkUploadInputEntryData.getExcelInputData().getStatusMap().containsValue(false))
        {
        	LOG.info("Inside if condition");
            dsBulkOrderData.setGeEdgeBulkCartData(bulkUploadListData);

            dsBulkOrderData.setExcelInputData(bhgeBulkUploadInputEntryData.getExcelInputData());
            //redirectModel.addFlashAttribute("geEdgeBulkCartData", bulkUploadListData);
            //redirectModel.addFlashAttribute("excelInputData", bhgeBulkUploadInputEntryData.getExcelInputData());
            // TODO : We have to correct the redirection code based on Exception handling by setting Error codes and message
            // return "redirect:/cart/addbulk";
        }
        /*else if (proceedToShoppingCart && bhgeBulkUploadInputEntryData == null)
        {
            LOG.info("proceedToShoppingCart is true, hence redirecting to /cart/addbulk page");
            dsBulkOrderData.setGeEdgeBulkCartData(bulkUploadListData);
            // redirectModel.addFlashAttribute("geEdgeBulkCartData", bulkUploadListData);
            // TODO : We have to correct the redirection code based on Exception handling by setting Error codes and message
            // return "redirect:/cart/addbulk";
        }*/
        else
        {
        	LOG.info("Inside else condition");
            dsBulkOrderData.setGeEdgeBulkCartData(bulkUploadListData);
            // model.addAttribute("geEdgeBulkCartData", bulkUploadListData);
            if (bulkUploadList != null)
            {
                dsBulkOrderData.setBulkUploadList(bulkUploadList);
                // model.addAttribute("bulkUploadList", bulkUploadList);
            }
            dsBulkOrderData.setValidatedBulkUploadList(validatedBulkUploadList);
            dsBulkOrderData.setListOfStates(bhgeUserProfileFacade.getRegionsForCountryCode("US"));
            // model.addAttribute("validatedBulkUploadList", validatedBulkUploadList);
            // model.addAttribute("listOfStates", bhgeUserProfileFacade.getRegionsForCountryCode("US"));
            //model.addAttribute("listOfCountries", defaultGEEdgeUserProfileFecade.getCountries());
            //final List<ShippingCarrierMethodData> prepayCarrierTypes = geEdgeCheckoutFacade.retriveCarrierMethods("prepay_add");
            //final List<ShippingCarrierMethodData> collectCarrierTypes = geEdgeCheckoutFacade.retriveCarrierMethods("collect");
            //model.addAttribute("prepay_addTypes", prepayCarrierTypes);
            //model.addAttribute("collectTypes", collectCarrierTypes);

           /* storeCmsPageInModel(model, getContentPageForLabelOrId(null));
            setUpMetaDataForContentPage(model, getContentPageForLabelOrId(null));
            updatePageTitle(model, getContentPageForLabelOrId(null));*/
            final BHGESoldToData soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
            
            if (null != soldTo.getCurrency())
            {
            	dsBulkOrderData.setCurrencyISO(soldTo.getCurrency().getIsocode());
                dsBulkOrderData.setCurrencyFormattedValue(soldTo.getCurrency().getSymbol());
                /*model.addAttribute("currencyISO",
                        ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency().getIsocode());
                model.addAttribute("currencyFormattedValue",
                        ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency().getSymbol());*/
            }
            /*storeCmsPageInModel(model, getContentPageForLabelOrId(BULKUPLOAD_CMS_PAGE));
            setUpMetaDataForContentPage(model, getContentPageForLabelOrId(BULKUPLOAD_CMS_PAGE));
            updatePageTitle(model, getContentPageForLabelOrId(BULKUPLOAD_CMS_PAGE));*/
            // return getViewForPage(model);
            LOG.info("dsBulkOrderData : " + dsBulkOrderData);
        }

        return dsBulkOrderData;
    }

    public void savePartPlaceHolderDetailsInCart(final CartModificationData cartModificationData, final BHGEBulkUploadEntryData entry) {

            String cartId = cartModificationData.getCartCode();
            final UserModel currentUser = userService.getCurrentUser();
            Integer entryNumber = cartModificationData.getEntry().getEntryNumber();

            if (StringUtils.isNotEmpty(cartId)) {

                final CartModel cartModel = commerceCartService.getCartForCodeAndUser(cartId, currentUser);
                for (AbstractOrderEntryModel cartEntryModel : cartModel.getEntries()) {
                    if (cartEntryModel.getEntryNumber() == entryNumber) {
                        cartEntryModel.setDummyPartNumber(entry.getActualPartNum());
                        cartEntryModel.setDummyProductDescription(entry.getDummyProductDescription());
                        modelService.save(cartEntryModel);
                        break;
                    }
                }
            }

        }


    public String getCartTypeForProductType(final String productType)
    {
        //This should come from mapping table
        if (productType != null)
        {
            if (productType.equals(GEEdgeProductType.ITFILM.getCode()))
            {
                return FILM;
            }
            else if (productType.equals(GEEdgeProductType.IT.getCode())
                    || productType.equals(GEEdgeProductType.MS.getCode())
                    || productType.equals(GEEdgeProductType.FPT.getCode())
                    || productType.equals(GEEdgeProductType.NC.getCode()))
            {
                return NONFILM;
            }
            else
            {
                return NONFILM;
            }
        }
        return null;
    }
}
