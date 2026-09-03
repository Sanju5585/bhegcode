package com.bhge.integration.invoice.history;


import com.bhge.core.data.BHGESalesOrderAttachmentData;
import com.bhge.core.scpi.rfc.zinvoices.BHGEInvoiceDocumentRequest;
import com.bhge.facades.invoice.data.InvoicePaymentResponseData;
import com.bhge.facades.invoice.data.InvoiceTrackingRequestData;
import com.bhge.facades.invoice.data.InvoiceTrackingResponseData;
import com.ds.dsocc.invoice.data.InvoicePaymentRequestWsDTO;
import com.ds.dsocc.invoice.data.InvoiceTrackingRequestWSDTO;
import com.ds.dsocc.invoice.data.InvoiceTrackingResponseWSDTO;
import com.ofs.core.model.InvoiceModel;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;

import java.util.List;

public interface BHGEInvoiceHistoryService {
    SearchPageData<InvoiceTrackingResponseData> getInvoiceHistory(InvoiceTrackingRequestData trackingReqData, InvoiceTrackingRequestWSDTO invoiceWsDTO, PageableData pageableData);

    List<InvoicePaymentResponseData> getInvoiceCheckout(List<InvoicePaymentRequestWsDTO> invoicePaymentRequestWsDTOList);


    BHGESalesOrderAttachmentData getAttachmentsListForInvoices_SCPI(String orderID, String customerNumber, String flag, String fileName, String fileType);

    BHGEInvoiceDocumentRequest createNewInvoiceDownloadAttRequestforSCPI(String itemNo, String itemType, String customerNumber, String flag, String fileName, String fileType);

    InvoiceModel retrieveInvoice(String invoiceNumber);

    void createInvoiceModel(InvoiceTrackingResponseWSDTO invoice);
  List<InvoiceModel> getInvoicesWithStatus(String status);
  List<InvoiceTrackingResponseData> getResponseFromSCPI(InvoiceTrackingRequestData trackingRequestDataList);

    void saveInvoiceModel(InvoiceModel invoiceModel);

    BHGESalesOrderAttachmentData getNewAttachmentPDF(String escapeHtml, String flag, String sanitizedFileName, String escapeHtml1, String customerNumber);
}
