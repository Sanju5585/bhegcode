/**
 *
 */
package com.bhge.facades.order;

//import de.hybris.platform.commercefacades.enums.data.ContactUsSettingsData;
import de.hybris.platform.commercefacades.order.data.OrderHistoryViewData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import com.bhge.core.data.BHGESalesOrderAttachmentData;
//import com.hybris.ge.edge.core.model.ContactusSettingsModel;
import com.bhge.facades.order.attachments.BHGESalesOrderAttachmentsData;
import com.bhge.facades.order.data.BHGEOrderHistoryData;


public interface BHGEB2BOrderDataFetch
{
	public ArrayList<OrderHistoryViewData> getOrderDataDTO(SearchPageData<BHGEOrderHistoryData> searchPageData);

	public ArrayList<OrderHistoryViewData> getOrderDataDTOWS(List<BHGEOrderHistoryData> searchPageData, String pageFlag,
			List<String> multipleSoldToId);

	public ArrayList<OrderHistoryViewData> getLineItem(String orderNo, String pageFlag);

	public BHGESalesOrderAttachmentsData getAttachmentsListForOrder(String orderNo, String customerNumber);

	public ArrayList<OrderHistoryViewData> getOrderDataExcelDTO(String orderNo);

	String getInvoicePDF(String invoiceId, String customerNumber);

	String getSOAPDF(String orderNo, String customerNumber);

	public String getAttachmentPDF(String docNumber, String docType, String customerNumber);

	// Added for new order attachment RFC changes
	BHGESalesOrderAttachmentData getAttachmentsListForOrderNew(String orderNo, String customerNumber, String flag, String fileName, String fileType);

	public BHGESalesOrderAttachmentData getNewAttachmentPDF(String orderNumber, String flag, String fileName, String fileType,
			String customerNumber) throws UnsupportedEncodingException;

	//	public List<List<ContactusSettingsModel>> getContactusListForOrder(String orderNo);

}
