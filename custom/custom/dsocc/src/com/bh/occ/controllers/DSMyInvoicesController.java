package com.bh.occ.controllers;

import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.core.data.BHGESalesOrderAttachmentData;
import com.bhge.core.data.SalesOrderAttachedData;
import com.bhge.core.data.SalesOrderErrorMessageData;
import com.bhge.core.order.dto.SalesOrderAttachedWsDTO;
import com.bhge.core.util.BHGECustomerUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.data.BHGECreditCardData;
import com.bhge.facades.invoice.data.InvoicePaymentResponseData;
import com.bhge.facades.invoice.data.InvoiceTrackingRequestData;
import com.bhge.facades.invoice.data.InvoiceTrackingResponseData;
import com.bhge.facades.invoice.data.OrderStatusSoldToNameData;
import com.bhge.facades.order.BHGEInvoiceFacade;
import com.bhge.facades.order.impl.DefaultBHGECheckoutFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGESoldToData;
import com.ds.dsocc.common.dto.CCPaymentInfoWsDTO;
import com.ds.dsocc.common.dto.OrderStatusSoldToNameWsDTO;
import com.ds.dsocc.common.dto.PaymentTermsDataWsDTO;
import com.ds.dsocc.invoice.data.*;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commercewebservicescommons.dto.product.PriceWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.search.pagedata.PaginationWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.user.AddressWsDTO;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.cache.CacheControl;
import de.hybris.platform.webservicescommons.cache.CacheControlDirective;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.Validate;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@RestController
@ApiVersion("v2")
@CacheControl(directive = CacheControlDirective.NO_CACHE)
@Tag(name = "DS Invoice Controller")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/invoice")
public class DSMyInvoicesController extends DSBaseController {
    private static final Logger LOG = Logger.getLogger(DSMyInvoicesController.class);
    private static final String ATTACHMENTFLAG = "X";
    @Resource
    private BHGEInvoiceFacade bhgeInvoiceFacade;
    @Resource(name = "b2bCheckoutFacade")
    private DefaultBHGECheckoutFacade bhgeCheckoutFacade;
    @Resource(name = "bhgeUserProfileFacade")
    private BHGEUserProfileFacade bhgeUserProfileFacade;

    @Resource(name = "userService")
    private UserService userService;
    @Resource(name="bhgeSoldToUtil")
    private BHGESoldToUtil bhgeSoldToUtil;
    @Resource(name = "bhgeB2BUnitService")
    private BHGEB2BUnitService bhgeB2BUnitService;

    @PostMapping(value = "/{productLine}/my-invoices", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @Operation(operationId = "getInvoiceListing", summary = "Get Invoice Listing.", description = "Get Invoice Listing.")
    @ApiBaseSiteIdAndUserIdParam
    public InvoiceTrackingResponseListWSDTO getInvoiceListing(
            @Parameter(description = "Product Line", required = true) @PathVariable final String productLine,
            @RequestBody final InvoiceTrackingRequestWSDTO invoiceWsDTO) {
        InvoiceTrackingResponseListWSDTO invoiceResponse = new InvoiceTrackingResponseListWSDTO();
        try {
            LOG.info("Getting Invoice Listing....");
            final PageableData pageableData = createPageableData(invoiceWsDTO.getPageNum(), invoiceWsDTO.getPageSize(), invoiceWsDTO.getSortBy(), null);
            InvoiceTrackingRequestData trackingReqData = new InvoiceTrackingRequestData();
            trackingReqData.setFromDate(invoiceWsDTO.getFromDate());
            trackingReqData.setToDate(invoiceWsDTO.getToDate());
            if (StringUtils.isNotBlank(invoiceWsDTO.getInvoiceNumber())) {
                trackingReqData.setInvoiceNumber(invoiceWsDTO.getInvoiceNumber());
            }
            if (StringUtils.isNotBlank(invoiceWsDTO.getCustomer())) {
                trackingReqData.setCustomer(invoiceWsDTO.getCustomer());
            }

            // Fetch data
            SearchPageData<InvoiceTrackingResponseData> responseDataList = bhgeInvoiceFacade.getInvoiceTrackingData(trackingReqData, invoiceWsDTO,pageableData);
            List<InvoiceTrackingResponseData> filteredData = responseDataList.getResults();

            // Map filtered and sorted data to response DTO
            if (CollectionUtils.isNotEmpty(filteredData)) {
                if (null == invoiceResponse.getInvoiceResponse()) {
                    invoiceResponse.setInvoiceResponse(new ArrayList<>());
                }
                filteredData.forEach(responseData -> {
                    InvoiceTrackingResponseWSDTO wsDTO = getDataMapper().map(responseData, InvoiceTrackingResponseWSDTO.class);
                    invoiceResponse.getInvoiceResponse().add(wsDTO);
                });
            }

            // Additional logic for customer accounts and pagination
            List<OrderStatusSoldToNameData> soldToList = bhgeInvoiceFacade.getCustomerDetails();
            List<OrderStatusSoldToNameWsDTO> soldToListWs = new ArrayList<>();
            if (CollectionUtils.isNotEmpty(soldToList)) {
                soldToList.forEach(soldTo -> {
                    OrderStatusSoldToNameWsDTO wsDTO = getDataMapper().map(soldTo, OrderStatusSoldToNameWsDTO.class);
                    soldToListWs.add(wsDTO);
                });
            }
            invoiceResponse.setCustomerAccounts(soldToListWs);

            PriceData totalInvoicePriceData = bhgeInvoiceFacade.calculateInvoiceTotalValue(filteredData, invoiceResponse);
            PriceWsDTO wsDTO = getDataMapper().map(totalInvoicePriceData, PriceWsDTO.class);
            invoiceResponse.setTotalInvoicePrice(wsDTO);
            PaginationWsDTO pagination = new PaginationWsDTO();
            pagination.setCurrentPage(pageableData.getCurrentPage());
            pagination.setTotalPages(responseDataList.getPagination().getNumberOfPages());
            pagination.setTotalResults(responseDataList.getPagination().getTotalNumberOfResults());
            pagination.setPageSize(pageableData.getPageSize());
            invoiceResponse.setPagination(pagination);

        } catch (Exception e) {
            LOG.error("Error in getting Invoice Listing" + e.getMessage());
        }
        return invoiceResponse;
    }

    private Date parseDate(String dateStr) {
        try {
            Date date=new SimpleDateFormat("yyyy-MM-dd").parse(dateStr);
            LOG.info("Parsed date: " + date);
            return date;
        } catch (ParseException e) {
            LOG.error("Error parsing date: " + dateStr, e);
            return null;
        }
    }

    @RequestMapping(value = "/calculateInvoiceAmount", method = {RequestMethod.POST})
    @ResponseBody
    @Operation(operationId = "Selected Invoices Amount", summary = "Get Selected Invoices Amount.", description = "Get Selected Invoices Amount.")
    @ApiBaseSiteIdAndUserIdParam
    public PriceWsDTO calculateInvoiceAmount(@PathVariable final String baseSiteId, @RequestBody List<InvoiceTrackingResponseWSDTO> invoiceDataWsDTOList,
                                             @ApiFieldsParam @RequestParam(defaultValue = "DEFAULT") final String fields) {
        PriceData invoiceAmount = bhgeInvoiceFacade.calculateInvoiceAmount(invoiceDataWsDTOList);
        return getDataMapper().map(invoiceAmount, PriceWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
    }

    @RequestMapping(value = "/invoicePaymentPage", method = { RequestMethod.POST })
    @ResponseBody
    @Operation(operationId = "Invoice Payment Page", summary = "Invoice Payment Page data population")
    @ApiBaseSiteIdAndUserIdParam
    public InvoicePaymentDataWsDTO invoicePaymentPageData(@PathVariable final String baseSiteId, final HttpServletRequest request, final HttpServletResponse response,
                                                          @RequestBody List<InvoiceTrackingResponseWSDTO> invoiceDataWsDTOList)

    {
        InvoicePaymentDataWsDTO invoicePaymentDataWsDTO = new InvoicePaymentDataWsDTO();
        invoicePaymentDataWsDTO = bhgeInvoiceFacade.getInvoicePaymentPageData(invoiceDataWsDTOList);
        invoicePaymentDataWsDTO.setIsCCEnabled(Boolean.TRUE);
        invoicePaymentDataWsDTO.setSavedCards(getCreditCardWsDTO(bhgeCheckoutFacade.getSavedCards()));
        B2BUnitModel b2bUnit = bhgeB2BUnitService.getUnitForUid(invoiceDataWsDTOList.get(0).getCustomer());
        invoicePaymentDataWsDTO.setFiservMerchantId(bhgeCheckoutFacade.getFiservMerchantIdWithCurrency(invoiceDataWsDTOList.get(0).getCompany(),invoiceDataWsDTOList.get(0).getCurrency()));
        LOG.info("Fiserv Merchant Id: " + invoicePaymentDataWsDTO.getFiservMerchantId());
        LOG.info("US551924: Inside invoicePaymentPageData method after setting saved cards");
        if (!userService.isAnonymousUser(userService.getCurrentUser())) {
            if (bhgeUserProfileFacade.getDefaultSoldToFromCurrentUser() != null) {
                //final AddressData defaultSoldToData = bhgeUserProfileFacade.getDefaultSoldToFromCurrentUser();
                final AddressData defaultSoldToData = bhgeUserProfileFacade.getSoldToAddress(invoiceDataWsDTOList.get(0).getCustomer());
                LOG.info("SoldTo Address Data for b2bunit: " + defaultSoldToData.getId());
                LOG.info("SoldTo customer id for b2bunit: " + defaultSoldToData.getSapCustomerID());
                invoicePaymentDataWsDTO.setDefaultSoldToAddress(getDataMapper().map(defaultSoldToData, AddressWsDTO.class, "FULL"));
            }
            AddressData payerAddressData = bhgeUserProfileFacade.getPayerAddressFromCurrentUser();
            if (payerAddressData != null) {
                LOG.info("Payer Address Data for b2b unit: " + payerAddressData.getId());
                invoicePaymentDataWsDTO.setPayerAddress(getDataMapper().map(payerAddressData, AddressWsDTO.class, "FULL"));
            }
            BHGESoldToData defaultSoldTo1;
                defaultSoldTo1 = bhgeSoldToUtil.getBHGESoldToData(b2bUnit);
                LOG.info("SoldTo Payment Terms: " + defaultSoldTo1.getPaymentTerms());
                invoicePaymentDataWsDTO.setPaymentTrms(getDataMapper().map(defaultSoldTo1.getPaymentTrms(), PaymentTermsDataWsDTO.class, "FULL"));

            AddressData billToAddressData = bhgeUserProfileFacade.getBillToAddressFromCurrentUser();
            if (billToAddressData != null) {
                LOG.info("BillTo Address Data: " + billToAddressData.getId());
                invoicePaymentDataWsDTO.setBillToAddress(getDataMapper().map(billToAddressData, AddressWsDTO.class, "FULL"));

            }

        }
        return invoicePaymentDataWsDTO;
    }
    private List<CCPaymentInfoWsDTO> getCreditCardWsDTO(List<BHGECreditCardData> returnList) {
        List<CCPaymentInfoWsDTO> creditCardDataWsDTOList = new ArrayList<CCPaymentInfoWsDTO>();
        returnList.forEach(creditCardData -> {
                    creditCardDataWsDTOList.add(getDataMapper().map(creditCardData, CCPaymentInfoWsDTO.class, "FULL"));
                }
        );
        return creditCardDataWsDTOList;
    }
   /* @RequestMapping(value = "/checkout", method = { RequestMethod.POST })
    @ResponseBody
    @Operation(operationId = "Invoice Payment Checkout", summary = "Invoice Payment Checkout")
    @ApiBaseSiteIdAndUserIdParam
    public List<InvoicePaymentResponseWsDTO> invoiceCheckout(@PathVariable final String baseSiteId, final HttpServletRequest request, final HttpServletResponse response,
                                                         @RequestBody InvoicePaymentDataWsDTO updateCheckoutDetails)

    {
        //have to check once it is target for go live
        LOG.info("Initiating Invoice Payment Checkout...");
        if (updateCheckoutDetails != null && updateCheckoutDetails.getPaymentTypeForm() != null) {
            String paymentType = updateCheckoutDetails.getPaymentTypeForm().getPaymentType();
            if (!isValidPaymentType(paymentType)) {
                LOG.warn("Invalid payment type: " + paymentType);
                return handlingError("Invalid payment type: ");
            }
        }
        ResponseEntity<String> cardPaymentmessage = getPayment(updateCheckoutDetails);
        if(cardPaymentmessage != null && StringUtils.isNotBlank(cardPaymentmessage.getBody())){
            LOG.info("Card Payment is failed and Message: " + cardPaymentmessage.getBody());
            return handlingError(cardPaymentmessage.getBody());
        }
        List<InvoicePaymentResponseWsDTO> invoicePaymentResponseWsDTOs = new ArrayList<>();
        List<InvoicePaymentResponseData> invoicePaymentResponseDatas = new ArrayList<>();
        if(cardPaymentmessage == null){
            LOG.info("Card Payment is success at snappay");
            try {
                invoicePaymentResponseDatas = bhgeInvoiceFacade.getInvoiceCheckout(updateCheckoutDetails.getInvoicesList());
                for (InvoicePaymentResponseData invoicePaymentResponseData : invoicePaymentResponseDatas) {
                    InvoicePaymentResponseWsDTO invoicePaymentResponseWsDTO = new InvoicePaymentResponseWsDTO();
                    invoicePaymentResponseWsDTO = getDataMapper().map(invoicePaymentResponseData, InvoicePaymentResponseWsDTO.class, "FULL");
                    invoicePaymentResponseWsDTOs.add(invoicePaymentResponseWsDTO);
                }
            }
            catch (Exception e) {
                LOG.error("Error Occurred in invoiceCheckout: " + e.getMessage());
               return handlingError(e.getMessage());

            }
        }
        return invoicePaymentResponseWsDTOs;
    }*/
    private boolean isValidPaymentType(String paymentType) {
        // Only allow known payment types
        return "card".equalsIgnoreCase(paymentType);
    }
    public List<InvoicePaymentResponseWsDTO> handlingError(String message)
    {
        InvoicePaymentResponseWsDTO invoicePaymentResponseWsDTO = new InvoicePaymentResponseWsDTO();
        invoicePaymentResponseWsDTO.setStatus("Payment Failed");
        invoicePaymentResponseWsDTO.setMessage(message);
        return List.of(invoicePaymentResponseWsDTO);

    }

    private ResponseEntity<String> getPayment(InvoicePaymentDataWsDTO updateCheckoutDetails) {
        try {
            LOG.info("Validating Credit Card Information...");
            Boolean checkCreditStatus;
            Boolean savedCardValidforOrder;
            String salesAreaId = org.apache.commons.lang3.StringUtils.EMPTY;
            String currency = org.apache.commons.lang3.StringUtils.EMPTY;
            final UserModel user = userService.getCurrentUser();
            if(user instanceof B2BCustomerModel){
                //final B2BCustomerModel b2bcustomer = (B2BCustomerModel) user;
                salesAreaId = ((B2BCustomerModel) user).getDefaultB2BUnit().getUid().split("_")[1];
                currency = ((B2BCustomerModel) user).getDefaultB2BUnit().getCurrency().getIsocode();
            }
            if (updateCheckoutDetails != null && null != updateCheckoutDetails.getPaymentInfo() && updateCheckoutDetails.getPaymentTypeForm().getPaymentType().equalsIgnoreCase("card")) {
                LOG.info("Payment Type is Card");
                if (BooleanUtils.isTrue(updateCheckoutDetails.getPaymentInfo().getIsNewCard())) {
                    LOG.info("New Credit Card is used for Payment");
                    checkCreditStatus = bhgeCheckoutFacade.getBinLookupStatus(updateCheckoutDetails.getPaymentInfo().getMerchantid(), updateCheckoutDetails.getPaymentInfo().getToken());
                    LOG.info("Bin Lookup Status : " + checkCreditStatus);
                    if(BooleanUtils.isFalse(checkCreditStatus)){
                        LOG.info("Credit Card is not valid !!");
                        //throw new BhgeUtilException("Credit Card is not valid !!");
                        return new ResponseEntity<>("Credit Card is not valid !!", HttpStatus.OK);
                    }
                } else {
                    LOG.info("Saved Credit Card is used for Payment");
                    savedCardValidforOrder = bhgeCheckoutFacade.getSaveCardAuthorisationStatus(updateCheckoutDetails.getPaymentInfo(), currency, salesAreaId);
                    if(BooleanUtils.isNotTrue(savedCardValidforOrder)){
                        return new ResponseEntity<>("SavedCard is not Valid to use for placing an Order", HttpStatus.OK);
                    }
                }
            }
            else{
                LOG.info("Payment Type is not Card");
                return new ResponseEntity<>("Payment Type is not Card", HttpStatus.OK);
            }
        }
        catch(Exception e){
            LOG.info("Error Validating Credit Card" + e);
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return null;

    }
    @RequestMapping(value = "/savecard", method = RequestMethod.POST)
    @ResponseBody
    @Operation(operationId = "Save card details", summary = "Save card details", description = "Save card Details")
    @ApiBaseSiteIdAndUserIdParam
    public ResponseEntity<String> saveCardDetails(@RequestBody CCPaymentInfoWsDTO ccPaymentInfoWsDTO,
                                                  final BindingResult bindingResult, HttpServletRequest request, HttpSession session)
    {
        String message = "error";
        BHGECreditCardData bhgeCreditCardData = getDataMapper().map(ccPaymentInfoWsDTO, BHGECreditCardData.class, "FULL");
        Boolean isCardSaved = bhgeCheckoutFacade.savedCardDetails(bhgeCreditCardData);
        if(BooleanUtils.isTrue(isCardSaved)){
            message = "success";
        }
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
    @RequestMapping(value = "/fetchInvoiceAttachment", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "Fetch Invoice Attachment")
    @ResponseStatus(value = HttpStatus.OK)
    public void fetchInvoiceAttachmentListNew(
            @Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
            @Parameter(description = "User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user", required = true) @PathVariable final String userId,
            @Parameter(description = "Invoice Number", required = true) @RequestParam("InvoiceNumber") final String invoiceNumber,
            @Parameter(description = "Customer Number", required = true) @RequestParam("customerNumber") String customerNumber,final HttpServletRequest request,final HttpServletResponse response)
            throws CMSItemNotFoundException, IOException {
        BHGESalesOrderAttachmentData orderAttachments = null;
        customerNumber = StringEscapeUtils.escapeHtml4(null != customerNumber ? (("0000000000" + customerNumber).substring(customerNumber.length())) : null);
        LOG.info("Customer number is " + customerNumber);
        final String flag = null;
        String fileName = null;
        final String fileType = null;
        if (!userService.isAnonymousUser(userService.getCurrentUser()) && org.apache.commons.lang3.StringUtils.isNotBlank(customerNumber)
                && BHGECustomerUtil.isUserAllowedToView(customerNumber, userService)) {
            final String orderNo = StringEscapeUtils.escapeHtml4(invoiceNumber);
            if (org.apache.commons.lang3.StringUtils.isNotBlank(invoiceNumber)) {
                Validate.matchesPattern(invoiceNumber, "[a-zA-Z0-9_.-]+", "Invalid Input");
                orderAttachments = bhgeInvoiceFacade.getAttachmentsListForInvoices_SCPI(orderNo.trim(),
                        StringEscapeUtils.escapeHtml4(customerNumber), flag, fileName, fileType);

                if (null != orderAttachments && org.apache.commons.collections4.CollectionUtils.isNotEmpty(orderAttachments.getFileData()))
                {
                    final List<SalesOrderAttachedWsDTO> finalDataDTO = new ArrayList<>();
                    final List<SalesOrderAttachedData> data = orderAttachments.getFileData();
                    for (final SalesOrderAttachedData d : data)
                    {
                        final SalesOrderAttachedWsDTO salesOrderAttachedwsdto = new SalesOrderAttachedWsDTO();
                        String fileNameResponse = d.getFileName();
                        LOG.info("Original fineNameResponse: " + fileNameResponse);
                        String escapedFileName = URLDecoder.decode(fileNameResponse.replace("%", "%25").replace("\n","").replace("\r","").trim(), StandardCharsets.UTF_8);
                        LOG.info("Escaped fileNameResponse: " + escapedFileName);
                        salesOrderAttachedwsdto.setFileName(escapedFileName);
                        salesOrderAttachedwsdto.setFileType(d.getFileType());
                        salesOrderAttachedwsdto.setHexData(d.getHexData());
                        finalDataDTO.add(salesOrderAttachedwsdto);
                        fileName=escapedFileName;
                        break;
                    }

                    assert fileName != null;
                    downloadInvoiceDocAttachment(baseSiteId, userId, customerNumber, orderNo, fileName,"PDF",  response);
                }
            }
        }

    }
    @RequestMapping(value = "/downloadInvoiceDocAttachment", method = RequestMethod.GET)
    @ResponseBody
    @ApiBaseSiteIdAndUserIdParam
    @Operation(operationId = "Download order attachment Files", summary = "Download order attachment Files", description = "Download order attachment Files")
    public void downloadInvoiceDocAttachment(@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
                                           @Parameter(description = "User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user", required = true) @PathVariable final String userId,
                                           @RequestParam("customerNumber") String customerNumber,
                                           @RequestParam("orderNumber") final String orderNumber,
                                           @RequestParam("fileName") final String fileName,
                                           @RequestParam("fileType") final String fileType, final HttpServletResponse response) throws IOException
    {
        LOG.info("Original fileName: " + fileName);
        final String escapedFileName = URLEncoder.encode(fileName.replace("\n","").replace("\r","").trim(), StandardCharsets.UTF_8).replace("+", "%20");
        LOG.info("Escaped fileName: " + escapedFileName);
        final String sanitizedFileName = StringEscapeUtils.unescapeHtml4(escapedFileName);
        final String sanitizedFileType = StringEscapeUtils.escapeHtml4(fileType);
        customerNumber = StringEscapeUtils.escapeHtml4(customerNumber);
        BHGESalesOrderAttachmentData orderAttachmentData = null;
        customerNumber = StringEscapeUtils.escapeHtml4(customerNumber);
        if (!userService.isAnonymousUser(userService.getCurrentUser()) && org.apache.commons.lang3.StringUtils.isNotBlank(customerNumber)
                && BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
        {
            if (StringEscapeUtils.escapeHtml4(orderNumber) != null && StringEscapeUtils.escapeHtml4(fileType) != null && org.apache.commons.lang3.StringUtils.isNotBlank(sanitizedFileName))
            {
                LOG.info("sanitizedFileName " + sanitizedFileName);
                orderAttachmentData = bhgeInvoiceFacade.getNewAttachmentPDF(StringEscapeUtils.escapeHtml4(orderNumber), ATTACHMENTFLAG,
                        sanitizedFileName, StringEscapeUtils.escapeHtml4(fileType), customerNumber);
            }
            if(orderAttachmentData != null) {
                List<SalesOrderAttachedData> fileList = orderAttachmentData.getFileData();
                if(CollectionUtils.isNotEmpty(fileList)) {
                    for(SalesOrderAttachedData data : fileList) {
                        LOG.info("File name after decoding "+URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8));
                        LOG.info("data.File name after decoding "+URLDecoder.decode(data.getFileName(), StandardCharsets.UTF_8));
                        if(URLDecoder.decode(data.getFileName(), StandardCharsets.UTF_8).equalsIgnoreCase(URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8)) && sanitizedFileType.equalsIgnoreCase("PDF")
                                && data.getFileType().equalsIgnoreCase("PDF")) {
                            final String pdfData = data.getHexData();
                            final byte[] contents = Base64.getDecoder().decode(pdfData);

                            final String contentType = "application/pdf";
                            final String escapedContentType = contentType.replace("\n","").replace("\r","").trim();
                            response.setContentType(escapedContentType);
                            final String fileNameWithoutComma=URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8).replace("%20", " ").replace(",", "") + ".PDF";
                            LOG.info("fileNameWithoutComma ** "+fileNameWithoutComma);
                            response.setHeader("Content-disposition", "attachment; filename=" + fileNameWithoutComma);
                            response.setContentLengthLong(contents.length);
                            response.getOutputStream().write(contents);
                            response.getOutputStream().flush();
                        }

                        if(data.getFileName().equalsIgnoreCase(sanitizedFileName) && sanitizedFileType.equalsIgnoreCase("DOC")
                                && data.getFileType().equalsIgnoreCase("DOC")) {
                            final String docData = data.getHexData();
                            final byte[] contents = Base64.getDecoder().decode(docData);
                            final String contentType = "application/doc";
                            final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

                            response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
                            response.setHeader("Content-disposition", "attachment; filename=" + URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8) + ".DOC");
                            response.setContentLengthLong(contents.length);
                            response.getOutputStream().write(contents);
                            response.getOutputStream().flush();
                        }

                        if(data.getFileName().equalsIgnoreCase(sanitizedFileName) && sanitizedFileType.equalsIgnoreCase("XLS")) {
                            final String xlsData = data.getHexData();
                            final byte[] contents = Base64.getDecoder().decode(xlsData);
                            final String contentType = "application/vnd.ms-excel";
                            final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

                            response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
                            response.setHeader("Content-disposition", "attachment; filename=" + URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8) + ".XLS");
                            response.setContentLengthLong(contents.length);
                            response.getOutputStream().write(contents);
                            response.getOutputStream().flush();
                        }

                        if(data.getFileName().equalsIgnoreCase(sanitizedFileName) && sanitizedFileType.equalsIgnoreCase("XLSX")) {
                            final String xlsData = data.getHexData();
                            final byte[] contents = Base64.getDecoder().decode(xlsData);
                            final String contentType = "vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                            final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

                            response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
                            response.setHeader("Content-disposition", "attachment; filename=" + URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8) + ".XLSX");
                            response.setContentLengthLong(contents.length);
                            response.getOutputStream().write(contents);
                            response.getOutputStream().flush();
                        }

                        if (data.getFileName().equalsIgnoreCase(sanitizedFileName) && sanitizedFileType.equalsIgnoreCase("JPG")
                                && data.getFileType().equalsIgnoreCase("JPG"))
                        {
                            LOG.info("********************* FILE NAME JPG****************************" + sanitizedFileName);

                            final String jpgData = data.getHexData();
                            final byte[] contents = Base64.getDecoder().decode(jpgData);

                            final String contentType = "application/jpg";
                            final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

                            response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
                            response.setHeader("Content-disposition", "attachment; filename=" + URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8) + ".JPG");
                            response.setContentLengthLong(contents.length);
                            response.getOutputStream().write(contents);
                            response.getOutputStream().flush();
                        }

                        if (data.getFileName().equalsIgnoreCase(sanitizedFileName) && sanitizedFileType.equalsIgnoreCase("MOV")
                                && data.getFileType().equalsIgnoreCase("MOV"))
                        {
                            LOG.info("********************* FILE NAME MOV****************************" + sanitizedFileName);

                            final String movData = data.getHexData();
                            final byte[] contents = Base64.getDecoder().decode(movData);
                            final String contentType = "video/quicktime";
                            final String escapeContentType = contentType.replace("\n","").replace("\r","").trim();

                            response.setContentType(StringEscapeUtils.escapeHtml4(escapeContentType));
                            response.setHeader("Content-disposition", "attachment; filename=" + URLDecoder.decode(sanitizedFileName, StandardCharsets.UTF_8) + ".MOV");
                            response.setContentLengthLong(contents.length);
                            response.getOutputStream().write(contents);
                            response.getOutputStream().flush();
                        }
                    }
                }
                else{
                    LOG.info("File Data is empty for the given fileName: " + sanitizedFileName);
                    response.setHeader("Error", "File Data is empty for the given fileName");
                }
            }
            else {
                LOG.info("OrderAttachment info is null");
                response.setHeader("Error", "OrderAttachment info is null");
            }


        }

    }


}
