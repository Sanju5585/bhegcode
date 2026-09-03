package com.bhge.integration.invoice.history.impl;


import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.data.BHGESalesOrderAttachmentData;
import com.bhge.core.data.SalesOrderAttachedData;
import com.bhge.core.data.SalesOrderErrorMessageData;
import com.bhge.core.sap.util.BHGESAPJCoUtils;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.orderattachmentdownload.ZHYBOrderItemRequest;
import com.bhge.core.scpi.rfc.orderattachmentdownload.ZHYBOrderPdfRequest;
import com.bhge.core.scpi.rfc.orderattachmentdownload.ZHYBOrderPdfResponse;
import com.bhge.core.scpi.rfc.zinvoices.*;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.facades.invoice.data.InvoicePaymentResponseData;
import com.bhge.facades.invoice.data.InvoiceTrackingRequestData;
import com.bhge.facades.invoice.data.InvoiceTrackingResponseData;
import com.bhge.integration.invoice.history.BHGEInvoiceHistoryService;
import com.ds.dsocc.invoice.data.InvoicePaymentRequestWsDTO;
import com.ds.dsocc.invoice.data.InvoiceTrackingRequestWSDTO;
import com.ds.dsocc.invoice.data.InvoiceTrackingResponseWSDTO;
import com.ofs.core.model.InvoiceModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.user.UserService;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.annotation.Resource;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Collectors;

public class BHGEInvoiceHistoryServiceImpl implements BHGEInvoiceHistoryService {

    private static final Logger LOG = LoggerFactory.getLogger(BHGEInvoiceHistoryServiceImpl.class);

   @Resource
    UserService userService;

    @Resource
    FlexibleSearchService flexibleSearchService;

    @Resource
    SCPIConnector scpiConnector;
    @Resource(name = "modelService")
    private ModelService modelService;
    @Resource(name = "commonI18NService")
    private CommonI18NService commonI18NService;


    private static final String SCPI_ZHYB_INVOICE_HISTORY_URL = "scpi.zhyb.invoice.tracking.endpoint.url";
    private static final String SCPI_ZHYB_INVOICE_CHECKOUT_URL = "scpi.zhyb.invoice.checkout.endpoint.url";
    private static final String SCPI_ZHYB_INVOICE_DOCUMENT_URL = "scpi.zhyb.invoice.document.endpoint.url";


    @Override
    public SearchPageData<InvoiceTrackingResponseData> getInvoiceHistory(InvoiceTrackingRequestData trackingReqData, InvoiceTrackingRequestWSDTO invoiceWsDTO, PageableData pageableData) {
        SearchPageData<InvoiceTrackingResponseData> searchPageData = new SearchPageData<>();
        try {
            LOG.info("US530529: Inside getInvoiceHistory method of BHGEInvoiceHistoryServiceImpl");
            final UserModel user = userService.getCurrentUser();
            List<InvoiceTrackingResponseData> responseData = getResponseFromSCPI(trackingReqData);
            if(CollectionUtils.isNotEmpty(responseData)){
                    final List<InvoiceTrackingResponseData> filterResponseData = filterResponseData(responseData,invoiceWsDTO, trackingReqData, pageableData);
                    searchPageData = createPageableResData(pageableData, filterResponseData);
                }
                else {
                    LOG.error("No response received for invoice history request");
                }
            }
         catch (Exception e) {
            LOG.error("Exception occurred while getting invoice history {}", e.getMessage());
        }
        return searchPageData;
    }
    public List<InvoiceTrackingResponseData> getResponseFromSCPI(InvoiceTrackingRequestData trackingReqData)
    {
         List<InvoiceTrackingResponseData> responseData= new ArrayList<>();
    String invoiceHistoryRequestXML = prepareInvoiceHistoryRequestXML(trackingReqData);
    final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_INVOICE_HISTORY_URL, flexibleSearchService);
            if (StringUtils.isNotBlank(scpiEndpointUrl)) {
                BHGEZInvoiceDetailTrackingResponse invoiceTrackingResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, invoiceHistoryRequestXML, BHGEZInvoiceDetailTrackingResponse.class);
                if (null != invoiceTrackingResponse) {
                    LOG.info("Response received for quote history request: {}", invoiceTrackingResponse);
                      responseData = processResponse(invoiceTrackingResponse);
                }
            }
            LOG.info("BHGEInvoiceHistoryServiceImpl: Total Invoices retrieved from SCPI: {}", responseData.size());
    return responseData;
    }

    @Override
    public void saveInvoiceModel(InvoiceModel invoiceModel) {
        try {
            invoiceModel.setTransactionStatus("TRANSACTION_INITIATED");
            modelService.save(invoiceModel);
            modelService.refresh(invoiceModel);
        } catch (Exception e) {
            LOG.error("Exception occurred while saving invoice model {}", e.getMessage());
        }
    }

    @Override
    public BHGESalesOrderAttachmentData getNewAttachmentPDF(String orderNumber, String flag, String fileName, String fileType,
                                                            String customerNumber) {
        LOG.info(" **************** New Invoice ATTACHMENTS Download RFC - Invoice Attachment Type - "+fileType+" ************ ");
        final String scpiEndPoint = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_INVOICE_DOCUMENT_URL, flexibleSearchService);
        LOG.debug("Making RFC call to get new Invoice Attachments document for " + fileName + " " + fileType);
        if(org.apache.commons.lang3.StringUtils.isNotBlank(orderNumber) && org.apache.commons.lang3.StringUtils.isNotBlank(fileName) && org.apache.commons.lang3.StringUtils.isNotBlank(fileType) && org.apache.commons.lang3.StringUtils.isNotBlank(customerNumber)) {
            final BHGEInvoiceDocumentRequest orderPdfDownloadRequest = createOrderAttachmentDownloadRequestForSCPI(orderNumber, flag, fileType, fileName, customerNumber);
            final BHGEInvoiceDocumentResponse orderPdfDownloadResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, orderPdfDownloadRequest, BHGEInvoiceDocumentResponse.class);
            if(orderPdfDownloadResponse != null) {
                return processOrderAttachmentDownloadResponse(orderPdfDownloadResponse);
            }
        }
        return null;
    }

    private BHGESalesOrderAttachmentData processOrderAttachmentDownloadResponse(BHGEInvoiceDocumentResponse orderPdfDownloadResponse) {
        LOG.info("Invoice Attachment Download RFC response payload BHGEInvoiceDocumentResponse : " + SCPIConnector.toXML(orderPdfDownloadResponse));
        final BHGESalesOrderAttachmentData attachmentData = new BHGESalesOrderAttachmentData();

        try {
            if(null != orderPdfDownloadResponse && null != orderPdfDownloadResponse.getEx_order_attc()
                    && org.apache.commons.collections4.CollectionUtils.isNotEmpty(orderPdfDownloadResponse.getEx_order_attc().getItems())) {
                final List<SalesOrderAttachedData> data = prepareInvoiceAttachmentData(orderPdfDownloadResponse);
                final SalesOrderErrorMessageData errorMessage = prepareInvoiceattachmentdownloadErrorMessageDataRFC(orderPdfDownloadResponse);

                if(org.apache.commons.collections4.CollectionUtils.isNotEmpty(data)) {
                    for(SalesOrderAttachedData attachedData : data) {
                        String fileName = StringEscapeUtils.unescapeHtml4(attachedData.getFileName().replace("%", "%25"));
                        attachedData.setFileName(fileName);
                    }
                    attachmentData.setFileData(data);
                }

                if (attachmentData.getFileData() == null)
                {
                    attachmentData.setErrorMessage(errorMessage);
                }

            }
        }
        catch(Exception e) {
            LOG.error("Error processing the response for download invoice attachment RFC ZHYBOrderPdfResponse :  "+ e.getMessage());
            e.printStackTrace();
        }

        return attachmentData;
    }



    private BHGEInvoiceDocumentRequest createOrderAttachmentDownloadRequestForSCPI(String orderNumber, String flag, String fileType, String fileName, String customerNumber) {
        LOG.info(" Preparing request for  BHGEInvoiceDocumentRequest ATTACHMENTS Download RFC ");

        BHGEInvoiceDocumentRequest request = new BHGEInvoiceDocumentRequest();
        try {
            if(org.apache.commons.lang3.StringUtils.isNotBlank(customerNumber)) {
                customerNumber = BHGESAPJCoUtils.addLeadingZeros(customerNumber, 10);
                request.setCustomer(customerNumber);
            }

            if(org.apache.commons.lang3.StringUtils.isNotBlank(orderNumber)) {
                request.setSalesorder(orderNumber);
            }

            request.setImflag(flag);
            request.setFiletype(fileType);
            //request.setFilename(fileName);
            request.setFilename(URLDecoder.decode(fileName, StandardCharsets.UTF_8).replaceAll("%20", " "));
        }
        catch(Exception e) {
            LOG.error("Exception in download invoice attachment RFC BHGEInvoiceDocumentRequest : " + e.getMessage());
        }
        LOG.info("Order Attachment download RFC BHGEInvoiceDocumentRequest request payload  :" + SCPIConnector.toXML(request));
        return request;
    
    }

    @Override
    public List<InvoicePaymentResponseData> getInvoiceCheckout(List<InvoicePaymentRequestWsDTO> invoicePaymentRequestWsDTOList) {
        LOG.info("US551924: Inside getInvoiceCheckout method of BHGEInvoiceHistoryServiceImpl");
        List<InvoicePaymentResponseData> responseData= new ArrayList<>();
        try{
        String invoicPaymentRequestXML = prepareInvoicePaymentRequestXML(invoicePaymentRequestWsDTOList);
        final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_INVOICE_CHECKOUT_URL, flexibleSearchService);
        if (StringUtils.isNotBlank(scpiEndpointUrl)) {
            BHGEInvoicePaymentResponse invoicePaymentResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, invoicPaymentRequestXML, BHGEInvoicePaymentResponse.class);
            if (null != invoicePaymentResponse) {
                LOG.info("Response received for invoice payment request: {}", invoicePaymentResponse);
                 responseData = processPaymentResponse(invoicePaymentResponse);
            } else {
                LOG.error("No response received for invoice payment request");
            }
        }

    } catch (Exception e) {
        LOG.error("Exception occurred while getting invoice payment {}", e.getMessage());
    }
        return responseData;
    }
    @Override
    public BHGESalesOrderAttachmentData getAttachmentsListForInvoices_SCPI(final String orderID, final String customerNumber, String flag, String fileName, String fileType)
    {
        LOG.info(" **************** Invoice ATTACHMENTS Download RFC ************ ");
        try
        {
            // SCPI Connectivity to be check prior to send a request.
            final String scpiEndPoint = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_INVOICE_DOCUMENT_URL, flexibleSearchService);
            LOG.info("******** SCPI Invoice Attachment URL : "+scpiEndPoint+" ********************");
            if (scpiEndPoint != null ) {
                final BHGEInvoiceDocumentRequest orderAttachmentsRequest = createNewInvoiceDownloadAttRequestforSCPI(orderID, BhgeCoreConstants.SAP_SALES_ORDER_SOURCE, customerNumber, flag, fileName, fileType);
                final BHGEInvoiceDocumentResponse orderAttachmentsResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, orderAttachmentsRequest, BHGEInvoiceDocumentResponse.class);
                if(null!=orderAttachmentsResponse) {
                    return processOrderDownloadAttResponse_New(orderAttachmentsResponse);
                }
            }
        }
        catch (final Exception e)
        {
            LOG.error("Error occured while getting the Attachments for the Sales Order: " + orderID + e);
        }
        return null;
    }
    protected BHGESalesOrderAttachmentData processOrderDownloadAttResponse_New(final BHGEInvoiceDocumentResponse orderAttachmentsResponse)
    {
        BHGESalesOrderAttachmentData salesOrderAttachmentData = new BHGESalesOrderAttachmentData();
        LOG.info("Invoice Attachment Download response payload: " + SCPIConnector.toXML(orderAttachmentsResponse));
        try {
            if (null != orderAttachmentsResponse )
            {
                final List<SalesOrderAttachedData> data = prepareInvoiceAttachmentData(orderAttachmentsResponse);
                final SalesOrderErrorMessageData errorMessage = prepareInvoiceattachmentdownloadErrorMessageDataRFC(orderAttachmentsResponse);

                salesOrderAttachmentData.setFileData(data);
                if (salesOrderAttachmentData.getFileData() == null)
                {
                    salesOrderAttachmentData.setErrorMessage(errorMessage);
                }
            }
        }
        catch(Exception e) {
            LOG.error("Excpetion in Invoice Attachment / Download Invoice Attachment Processing " + e.getMessage());
        }
        return salesOrderAttachmentData;
    }
    private List<SalesOrderAttachedData> prepareInvoiceAttachmentData(final BHGEInvoiceDocumentResponse orderAttachmentsResponse)
    {
        final List<SalesOrderAttachedData> orderAttachmentDataTable = new ArrayList<>();
        try {
            final List<ZHYBInvoiceDocumentItem> orderAttachmentItem = orderAttachmentsResponse.getEx_order_attc() != null
                    && org.apache.commons.collections4.CollectionUtils.isNotEmpty(orderAttachmentsResponse.getEx_order_attc().getItems())
                    ? orderAttachmentsResponse.getEx_order_attc().getItems() : Collections.emptyList();

            final int rowCount = orderAttachmentItem.size();
            if (rowCount > 0)
            {
                for (ZHYBInvoiceDocumentItem zhybInvoiceDocumentItem : orderAttachmentItem) {
                    final SalesOrderAttachedData data = new SalesOrderAttachedData();
                    LOG.info("Original Attachment Filename: " + zhybInvoiceDocumentItem.getFilename());
                    final String filename = URLDecoder.decode(zhybInvoiceDocumentItem.getFilename().replace("%", "%25"), StandardCharsets.UTF_8);
                    LOG.info("Attachment filename: " + filename);
                    final String filetype = zhybInvoiceDocumentItem.getFiletype();
                    String hexdata = zhybInvoiceDocumentItem.getHexdata();
                    hexdata = hexdata.replaceAll("\\r\\n|\\r|\\n", "");

                    if (null != hexdata && null != filename && null != filetype) {
                        data.setFileName(filename);
                        data.setFileType(filetype);
                        data.setHexData(hexdata);
                        orderAttachmentDataTable.add(data);
                    }
                }
            }
        }
        catch(Exception e) {
            LOG.info("Exception while creating RMA Attachment Download Request " + e.getMessage());
            e.printStackTrace();
        }
        return orderAttachmentDataTable;
    }

    private SalesOrderErrorMessageData prepareInvoiceattachmentdownloadErrorMessageDataRFC(final  BHGEInvoiceDocumentResponse orderAttachmentsResponse)
    {
        final SalesOrderErrorMessageData orderErrorMessageData = new SalesOrderErrorMessageData();
        final List<BHGEZInvoiceDocumentMessageItem> orderErrorMessageTable =
                orderAttachmentsResponse.getT_messageTable() != null && org.apache.commons.collections4.CollectionUtils.isNotEmpty(orderAttachmentsResponse.getT_messageTable().getItems())
                        ? orderAttachmentsResponse.getT_messageTable().getItems() : Collections.emptyList();
        final int rowCount = orderErrorMessageTable.size();

        if (rowCount > 0)
        {
            for (BHGEZInvoiceDocumentMessageItem bhgezInvoiceDocumentMessageItem : orderErrorMessageTable) {
                orderErrorMessageData.setType(bhgezInvoiceDocumentMessageItem.getType());
                orderErrorMessageData.setId(bhgezInvoiceDocumentMessageItem.getId());
                orderErrorMessageData.setNumber(bhgezInvoiceDocumentMessageItem.getNumber());
                orderErrorMessageData.setMessage(bhgezInvoiceDocumentMessageItem.getMessage());
                orderErrorMessageData.setLogNumber(bhgezInvoiceDocumentMessageItem.getLogNo());
                orderErrorMessageData.setLogMessageNumber(bhgezInvoiceDocumentMessageItem.getLogMsgNo());
                orderErrorMessageData.setMessageV1(bhgezInvoiceDocumentMessageItem.getMessageV1());
                orderErrorMessageData.setMessageV2(bhgezInvoiceDocumentMessageItem.getMessageV2());
                orderErrorMessageData.setMessageV3(bhgezInvoiceDocumentMessageItem.getMessageV3());
                orderErrorMessageData.setMessageV4(bhgezInvoiceDocumentMessageItem.getMessageV4());
                orderErrorMessageData.setParameter(bhgezInvoiceDocumentMessageItem.getParameter());
                orderErrorMessageData.setRow(bhgezInvoiceDocumentMessageItem.getRow());
                orderErrorMessageData.setField(bhgezInvoiceDocumentMessageItem.getField());
                orderErrorMessageData.setSystem(bhgezInvoiceDocumentMessageItem.getSystem());
            }
        }
        return orderErrorMessageData;
    }
    @Override
    public BHGEInvoiceDocumentRequest createNewInvoiceDownloadAttRequestforSCPI(final String itemNo, final String itemType, String customerNumber, String flag, String fileName, String fileType)
    {
        LOG.info(" **************** Invoice ATTACHMENTS Download RFC Creation Service ************ ");

        BHGEInvoiceDocumentRequest orderattachmentdownloadrequest = new BHGEInvoiceDocumentRequest();
        try
        {
            // setting customer account number
            if (org.apache.commons.lang3.StringUtils.isNotBlank(customerNumber))
            {
                customerNumber = BHGESAPJCoUtils.addLeadingZeros(customerNumber, 10); // Ensuring proper formatted sold to number
                orderattachmentdownloadrequest.setCustomer(customerNumber);
            }
            // setting SO number to get attachments list
            if (BhgeCoreConstants.SAP_SALES_ORDER_SOURCE.equals(itemType))
            {
                orderattachmentdownloadrequest.setSalesorder(itemNo);
            }
            orderattachmentdownloadrequest.setImflag(flag);
            orderattachmentdownloadrequest.setFilename(fileName);
            orderattachmentdownloadrequest.setFiletype(fileType);

            LOG.info("Invoice Document request payload: " + SCPIConnector.toXML(orderattachmentdownloadrequest));
            return orderattachmentdownloadrequest;

        }

        catch (final Exception e)
        {
            LOG.error("Error occured while preparing Order Attachments RFC request for Order# " + itemNo + " and for Type " + itemType + e);
            //handleNewOrderAttachmentsExceptionforSCPI(e, orderattachmentdownloadrequest);
            return null;
        }
    }


    @Override
        public InvoiceModel retrieveInvoice(String invoiceNumber) {
            final StringBuilder queryString = new StringBuilder();
            try {
                queryString.append("SELECT {I:PK} from {Invoice as I} WHERE   ");
                queryString.append(" {I:invoiceID}=?invoiceID ");
                final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString.toString());
                final Map<String, Object> params = new HashMap<String, Object>();
                params.put("invoiceID", invoiceNumber);
                query.addQueryParameters(params);
                final SearchResult<InvoiceModel> result = flexibleSearchService.search(query);
                InvoiceModel invoiceModel = org.apache.commons.collections4.CollectionUtils.isNotEmpty(result.getResult()) ? result.getResult().get(0) : null;
                return invoiceModel;
            }
            catch (Exception e) {
                LOG.error("Exception occurred while retrieving invoice model {}", e.getMessage());
                return null;
            }
        }

    @Override
    public void createInvoiceModel(InvoiceTrackingResponseWSDTO invoice) {
        try {
            LOG.info("US530529: Inside createInvoiceModel method of BHGEInvoiceHistoryServiceImpl");
            InvoiceModel invoiceModel = modelService.create(InvoiceModel.class);
            invoiceModel.setInvoiceID(invoice.getInvoiceNumber());
            invoiceModel.setCheckoutSessionId(invoice.getCustomer());
            invoiceModel.setPaidByUser((CustomerModel) userService.getCurrentUser());
            invoiceModel.setTotalAmount(invoiceModel.getTotalAmount());
            invoiceModel.setInvoiceCurrency(
                    commonI18NService.getCurrency(invoice.getCurrency()));
            invoiceModel.setTransactionStatus("TRANSACTION_INITIATED");
            invoiceModel.setPaymentType("card");
            modelService.save(invoiceModel);
            modelService.refresh(invoiceModel);
        } catch (Exception e) {
            LOG.error("Exception occurred while creating invoice model {}", e.getMessage());
        }
        
    }

    @Override
    public List<InvoiceModel> getInvoicesWithStatus(String status) {

        final StringBuilder queryString = new StringBuilder();
        try {
            queryString.append("SELECT {I:PK} from {Invoice as I} WHERE   ");
            queryString.append(" {I:transactionStatus}=?status ");
            final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString.toString());
            final Map<String, Object> params = new HashMap<String, Object>();
            params.put("status", status);
            query.addQueryParameters(params);
            final SearchResult<InvoiceModel> result = flexibleSearchService.search(query);
            return result.getResult();
        }
        catch (Exception e) {
            LOG.error("Exception occurred while retrieving invoices with status {}: {}", status, e.getMessage());
            return Collections.emptyList();
        }
    }


    private List<InvoicePaymentResponseData> processPaymentResponse(BHGEInvoicePaymentResponse invoicePaymentResponse) {
        List<InvoicePaymentResponseData> invoicePaymentResponseDataList = new ArrayList<>();
        if(CollectionUtils.isNotEmpty(invoicePaymentResponse.getInvoicePaymentMessageItem().getItems())){
            for( BHGEZInvoicePaymentMessage invoiceItem : invoicePaymentResponse.getInvoicePaymentMessageItem().getItems()){
                InvoicePaymentResponseData invoicePaymentResponseData = new InvoicePaymentResponseData();
                invoicePaymentResponseData.setInvoiceNumber(invoiceItem.getInvoiceNumber());
                invoicePaymentResponseData.setCustomer(invoiceItem.getCustomer());
                invoicePaymentResponseData.setCompany(invoiceItem.getCompanyCode());
                if(invoiceItem.getMessage()!=null && StringUtils.isNotBlank(invoiceItem.getMessage() )){
                    invoicePaymentResponseData.setStatus("Payment Successful");
                    invoicePaymentResponseData.setMessage(invoiceItem.getMessage());
                } else {
                    invoicePaymentResponseData.setStatus("SAP Error Occured");
                    invoicePaymentResponseData.setMessage(invoiceItem.getMessage());
                }
                if(invoiceItem.getMessageV2() !=null && StringUtils.isNotBlank( invoiceItem.getMessageV2() )){
                    invoicePaymentResponseData.setDocument(invoiceItem.getMessageV2().substring(3,10));
                    LOG.info("Document Number is "+invoiceItem.getMessageV2().substring(3,10));
                }
                invoicePaymentResponseDataList.add(invoicePaymentResponseData);
            }
        }
        return invoicePaymentResponseDataList;
    }

    private String prepareInvoicePaymentRequestXML(List<InvoicePaymentRequestWsDTO> invoicePaymentRequestWsDTOList) {
        String requestXml = null;
        // Prepare the request object based on invoicePaymentRequestWsDTOList
        // This is a placeholder implementation and should be replaced with actual logic
        BHGEInvoicePaymentRequest request = new  BHGEInvoicePaymentRequest();
        try {
            BHGEZInvoicePaymentInputItem item = new BHGEZInvoicePaymentInputItem();
            for (InvoicePaymentRequestWsDTO dto : invoicePaymentRequestWsDTOList) {
                BHGEZInvoicePayment invoiceitem= new BHGEZInvoicePayment();
                if(dto.getInvoiceNumber()!=null && StringUtils.isNotBlank(dto.getInvoiceNumber())){
                    invoiceitem.setInvoiceNumber(dto.getInvoiceNumber());
                }
                if(dto.getCustomer() !=null && StringUtils.isNotBlank(dto.getCustomer())){
                    invoiceitem.setCustomer(dto.getCustomer());
                }
               if(dto.getAmount() !=null) {
                    invoiceitem.setAmount(Double.valueOf(dto.getAmount()));
                }
               if(dto.getCompany()!=null && StringUtils.isNotBlank(dto.getCompany())) {
                   invoiceitem.setCompanyCode(dto.getCompany());
               }
               invoiceitem.setCreditCardToken("T1");
                item.getItems().add(invoiceitem);
             }
            request.setInput(item);
            requestXml = SCPIConnector.toXML(request);
            LOG.info("Invoice Payment Request is \n"+requestXml);
            return requestXml;
        } catch (Exception e) {
            LOG.error("Exception during invoice payment request XML preparation: {}", e.getMessage());
        }
        return null;
    }



    private List<InvoiceTrackingResponseData> processResponse(BHGEZInvoiceDetailTrackingResponse invoiceTrackingResponse) {
        Map<String, InvoiceTrackingResponseData> invoiceMap = new HashMap<>();
        if(CollectionUtils.isNotEmpty(invoiceTrackingResponse.getInvoice().getItems())){
            for(BHGEZInvoice invoiceItem : invoiceTrackingResponse.getInvoice().getItems()){
                LOG.info("BHGEInvoiceHistoryServiceImpl: Processing invoice item: {}", invoiceItem.getInvoiceNumber());
                String invoiceNumber = invoiceItem.getInvoiceNumber();
                InvoiceModel invoiceModel=retrieveInvoice(invoiceNumber);
                InvoiceTrackingResponseData invoiceTrackingResponseData = invoiceMap.get(invoiceNumber);
                if(null != invoiceTrackingResponseData){
                    // Add entry data processing if needed
                } else {
                    invoiceTrackingResponseData = new InvoiceTrackingResponseData();
                    invoiceTrackingResponseData.setInvoiceNumber(invoiceItem.getInvoiceNumber());
                    invoiceTrackingResponseData.setCustomer(invoiceItem.getCustomer());
                    invoiceTrackingResponseData.setCompany(invoiceItem.getCompanyCode());
                    invoiceTrackingResponseData.setCurrency(invoiceItem.getCurrency());
                    invoiceTrackingResponseData.setInvoiceDate(invoiceItem.getInvoiceDate());
                    invoiceTrackingResponseData.setDueDate(invoiceItem.getDueDate());
                    String amountStr = invoiceItem.getAmount();
                    if((StringUtils.isNotBlank(amountStr))&& (amountStr.endsWith("-"))) {
                        amountStr = '-'+amountStr.substring(0, amountStr.length() - 1);
                        LOG.info("BHGEInvoiceHistoryServiceImpl: Invoice {} has negative amount value:{}", invoiceNumber, amountStr.substring(0, amountStr.length() - 1));
                        LOG.info("BHGEInvoiceHistoryServiceImpl: Adjusted amount string for negative  invoice {}: {}", invoiceNumber, amountStr);
                        amountStr= amountStr.replaceAll("\\s+", "");
                        LOG.info("BHGEInvoiceHistoryServiceImpl: Final amount string for negative  invoice {}: {}", invoiceNumber, amountStr);
                        invoiceTrackingResponseData.setAmount(Double.parseDouble(amountStr));
                        invoiceTrackingResponseData.setInvoiceStatus("Credit Note");
                        LOG.info("BHGEInvoiceHistoryServiceImpl: Setting amount for negative Value invoice {}: {}", invoiceNumber, invoiceTrackingResponseData.getAmount());
                    }
                 else{
                     LOG.info("BHGEInvoiceHistoryServiceImpl: Setting amount for  positive Value invoice {}: {}", invoiceNumber, invoiceItem.getAmount());
                        invoiceTrackingResponseData.setAmount(Double.parseDouble(invoiceItem.getAmount()));
                        invoiceTrackingResponseData.setInvoiceStatus(invoiceItem.getStatus());
                    }
                    invoiceTrackingResponseData.setDocType(invoiceItem.getDocType());
                    invoiceTrackingResponseData.setPaidDate(invoiceItem.getPaidDate());
                    invoiceTrackingResponseData.setPaymentMethod(invoiceItem.getPaymentMethod());
                    invoiceTrackingResponseData.setPaymentMethodDescription(invoiceItem.getPaymentMethodDescription());
                    invoiceTrackingResponseData.setPaymentTerm(invoiceItem.getPaymentTerm());
                    invoiceTrackingResponseData.setPaymentTermDescription(invoiceItem.getPaymentTermDescription());
                    if(invoiceModel!=null) {
                        LOG.info("BHGEInvoiceHistoryServiceImpl: Found existing InvoiceModel for invoice number: {}", invoiceNumber);
                        invoiceTrackingResponseData.setPaymentStatus(invoiceModel.getTransactionStatus());
                    }
                    invoiceMap.put(invoiceNumber, invoiceTrackingResponseData);
                }
            }

        }
        for(InvoiceTrackingResponseData data : invoiceMap.values()){
            LOG.info("BHGEInvoiceHistoryServiceImpl: Compiled InvoiceTrackingResponseData {} Paymet status: {}", data.getInvoiceNumber(),data.getPaymentStatus());
        }
        LOG.info("BHGEInvoiceHistoryServiceImpl: Processed {} invoice items", invoiceMap.size());

        return new ArrayList<>(invoiceMap.values());
    }

    private List<InvoiceTrackingResponseData> filterResponseData(List<InvoiceTrackingResponseData> responseData, InvoiceTrackingRequestWSDTO invoiceWsDTO, InvoiceTrackingRequestData trackingReqData, PageableData pageableData) {
        List<InvoiceTrackingResponseData> filteredData = new ArrayList<>(responseData);

        // Apply filtering based on invoiceWsDTO
        if (StringUtils.isNotBlank(invoiceWsDTO.getInvoiceStatus())) {
            LOG.info("Filtering by Invoice Status: " + invoiceWsDTO.getInvoiceStatus());
            filteredData = filteredData.stream()
                    .filter(data -> invoiceWsDTO.getInvoiceStatus().equalsIgnoreCase(data.getInvoiceStatus()))
                    .collect(Collectors.toList());
            LOG.info("Invoices after Status Filter: " + filteredData.size());
        }

        // Apply sorting
        if (StringUtils.isNotBlank(invoiceWsDTO.getSortBy())) {
            if (invoiceWsDTO.getSortBy().equalsIgnoreCase("dateasc")) {
                LOG.info("Sorting by Date Ascending");
                filteredData.sort((data1, data2) -> {
                    // Example: Sort by invoice date
                    Date date1 = parseDate(data1.getDueDate());
                    Date date2 = parseDate(data2.getDueDate());
                    return date1 != null && date2 != null ? date1.compareTo(date2) : 0;
                });
                LOG.info("Sorting Completed DateAscending" + filteredData.size());
            } else if (invoiceWsDTO.getSortBy().equalsIgnoreCase("datedesc")) {
                LOG.info("Sorting by Date Descending");
                filteredData.sort((data1, data2) -> {
                    // Example: Sort by invoice date
                    Date date1 = parseDate(data1.getDueDate());
                    Date date2 = parseDate(data2.getDueDate());
                    return date1 != null && date2 != null ? date2.compareTo(date1) : 0;
                });
                LOG.info("Sorting Completed DateDescending" + filteredData.size());
            } else if (invoiceWsDTO.getSortBy().equalsIgnoreCase("amountasc")) {
                LOG.info("Sorting by Amount Ascending");
                filteredData.sort(Comparator.comparingDouble(InvoiceTrackingResponseData::getAmount));
            } else if (invoiceWsDTO.getSortBy().equalsIgnoreCase("amountdesc")) {
                LOG.info("Sorting by Amount Descending");
                filteredData.sort((data1, data2) -> Double.compare(data2.getAmount(), data1.getAmount()));
            } else if (invoiceWsDTO.getSortBy().equalsIgnoreCase("invoiceasc")) {
                LOG.info("Sorting by Invoice Ascending");
                filteredData.sort((data1, data2) -> data1.getInvoiceNumber().compareTo(data2.getInvoiceNumber()));
            } else if (invoiceWsDTO.getSortBy().equalsIgnoreCase("invoicedesc")) {
                LOG.info("Sorting by Invoice Descending");
                filteredData.sort((data1, data2) -> data2.getInvoiceNumber().compareTo(data1.getInvoiceNumber()));
            } else if (invoiceWsDTO.getSortBy().equalsIgnoreCase("statusasc")) {
                LOG.info("Sorting by Status Ascending");
                filteredData.sort((data1, data2) -> data1.getInvoiceStatus().compareTo(data2.getInvoiceStatus()));
            } else if (invoiceWsDTO.getSortBy().equalsIgnoreCase("statusdesc")) {
                LOG.info("Sorting by Status Descending");
                filteredData.sort((data1, data2) -> data2.getInvoiceStatus().compareTo(data1.getInvoiceStatus()));
            } else if (invoiceWsDTO.getSortBy().equalsIgnoreCase("invoicedateasc")) {
                LOG.info("Sorting by Invoice Date Ascending");
                filteredData.sort((data1, data2) -> {
                    // Example: Sort by invoice date
                    Date date1 = parseDate(data1.getInvoiceDate());
                    Date date2 = parseDate(data2.getInvoiceDate());
                    return date1 != null && date2 != null ? date1.compareTo(date2) : 0;
                });
            }
            return filteredData;
        }
        return filteredData;
    }

    private Date parseDate(String dateString) {
        try {
            return new java.text.SimpleDateFormat("yyyy-MM-dd").parse(dateString);
        } catch (Exception e) {
            LOG.error("Date parsing error: {}", e.getMessage());
            return null;
        }
    }


    private String prepareInvoiceHistoryRequestXML(InvoiceTrackingRequestData trackingReqData) {
        String requestXml = null;
        BHGEZInvoiceTrackingRequest request = new  BHGEZInvoiceTrackingRequest();
        try {
            if(trackingReqData.getInvoiceNumber()!=null && StringUtils.isNotBlank(trackingReqData.getInvoiceNumber())){
                request.setInvoiceNumber(trackingReqData.getInvoiceNumber());
            }
            if(trackingReqData.getFromDate() !=null) {
                request.setFromDate(trackingReqData.getFromDate());
            }
            if(trackingReqData.getToDate() !=null) {
                request.setToDate(trackingReqData.getToDate());
            }
            final UserModel currentUser = userService.getCurrentUser();
            if(StringUtils.isNotBlank(trackingReqData.getCustomer())) {
                request.getCustomer().getItem().setCustomerNumber(trackingReqData.getCustomer());
            }
            else {
                if (!userService.isAnonymousUser(currentUser) && currentUser instanceof GEEdgeCustomerModel customer) {
                    final B2BUnitModel defaultB2bUnit = customer.getDefaultB2BUnit();
                    final String[] b2bUnit = defaultB2bUnit.getUid().split("_");
                    final String salesOrg = b2bUnit[1];
                    final String b2bUnitId = b2bUnit[0];
                    //request.setCompanyCode(salesOrg);
                    request.getCustomer().getItem().setCustomerNumber(b2bUnitId);
                }
                else{
                    LOG.error("Unable to determine customer number for invoice history request");
                    request.getCustomer().getItem().setCustomerNumber("0000000000");
                }
            }
                request.getCustomer().getItem().setOption("EQ");
                request.getCustomer().getItem().setSign("I");
                requestXml = SCPIConnector.toXML(request);
                LOG.info("Invoice History Request is \n"+requestXml);
                return requestXml;
            }
         catch (Exception e) {
            LOG.error("Exception during invoice history request XML preparation: {}", e.getMessage());
        }
        return null;
    }
    private SearchPageData<InvoiceTrackingResponseData> createPageableResData(PageableData pageableData,
                                                                            List<InvoiceTrackingResponseData> responseData) {
        SearchPageData<InvoiceTrackingResponseData> result = new SearchPageData<>();
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
    private PaginationData getPaginationData(PageableData pageableData, List<InvoiceTrackingResponseData> responseData) {
        final PaginationData paginationData = new PaginationData();
        paginationData.setPageSize(pageableData.getPageSize());
        paginationData.setSort(pageableData.getSort());
        paginationData.setTotalNumberOfResults(responseData.size());
        paginationData.setNumberOfPages((int) Math
                .ceil(Double.valueOf(paginationData.getTotalNumberOfResults()) / Double.valueOf(paginationData.getPageSize())));

        paginationData.setCurrentPage(Math.max(0, Math.min(paginationData.getNumberOfPages(), pageableData.getCurrentPage())));
        return paginationData;
    }

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    public FlexibleSearchService getFlexibleSearchService() {
        return flexibleSearchService;
    }

    public void setFlexibleSearchService(FlexibleSearchService flexibleSearchService) {
        this.flexibleSearchService = flexibleSearchService;
    }

    public SCPIConnector getScpiConnector() {
        return scpiConnector;
    }

    public void setScpiConnector(SCPIConnector scpiConnector) {
        this.scpiConnector = scpiConnector;
    }
}
