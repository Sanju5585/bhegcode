package com.bhge.facades.order;

import com.bhge.core.data.BHGESalesOrderAttachmentData;
import com.bhge.facades.invoice.data.InvoicePaymentResponseData;
import com.bhge.facades.invoice.data.InvoiceTrackingRequestData;
import com.bhge.facades.invoice.data.InvoiceTrackingResponseData;
import com.bhge.facades.invoice.data.OrderStatusSoldToNameData;
import com.ds.dsocc.invoice.data.*;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;

import java.util.List;

public interface BHGEInvoiceFacade {

        SearchPageData<InvoiceTrackingResponseData> getInvoiceTrackingData(InvoiceTrackingRequestData trackingReqData, InvoiceTrackingRequestWSDTO invoiceWsDTO, PageableData pageableData);
    public List<OrderStatusSoldToNameData> getCustomerDetails();
    public PriceData calculateInvoiceTotalValue(List<InvoiceTrackingResponseData> results, InvoiceTrackingResponseListWSDTO invoiceResponse);

   public PriceData calculateInvoiceAmount(List<InvoiceTrackingResponseWSDTO> invoiceDataWsDTOList);

   public  InvoicePaymentDataWsDTO getInvoicePaymentPageData(List<InvoiceTrackingResponseWSDTO> invoiceDataWsDTOList);

    public List<InvoicePaymentResponseData> getInvoiceCheckout(List<InvoicePaymentRequestWsDTO> invoicePaymentRequestWsDTOList);

    BHGESalesOrderAttachmentData getAttachmentsListForInvoices_SCPI(String orderNo, String customerNumber, String flag, String fileName, String fileType);

    BHGESalesOrderAttachmentData getNewAttachmentPDF(String escapeHtml, String flag, String sanitizedFileName, String escapeHtml1, String customerNumber);
}


