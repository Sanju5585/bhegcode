/**
 *
 */
package com.bhge.core.sap.service;

import java.io.UnsupportedEncodingException;

import com.bhge.core.data.BHGESalesOrderAttachmentData;
import com.bhge.core.scpi.rfc.orderattachmentdownload.ZHYBOrderPdfRequest;
import com.bhge.core.scpi.rfc.orderattachmentdownload.ZOrderAttachmentDownloadRequest;
//import com.hybris.ge.edge.core.model.ContactusSettingsModel;
import com.bhge.facades.order.attachments.BHGESalesOrderAttachmentsData;
import com.sap.conn.jco.JCoFunction;
//import de.hybris.platform.commercefacades.enums.data.ContactUsSettingsData;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;

public interface BHGEInvoiceSoaService
{

	BHGESalesOrderAttachmentsData getAttachmentsListForOrder(String orderID, String customerNumber);

	//String getOrderDoc(String docID, String sapNumberType, String customerNumber);

	JCoFunction prepareOrderAttachmentsRFCRequest(String itemNo, String itemType, String customerNumber,
			JCoConnection jCoConnection);

	//	List<List<ContactusSettingsModel>> getContactusListForOrder(String orderNo);
	
	/*
	 * New Methods added
	 * Reason Below method added for SCPI + Cloud move
	 * Date : 1st Sep 2020
	 */
	BHGESalesOrderAttachmentsData getAttachmentsListForOrder_SCPI(String orderID, String customerNumber);
	
	ZOrderAttachmentDownloadRequest createOrderDownloadAttRequestforSCPI(String itemNo, String itemType, String customerNumber);
	
	String getOrderDoc_SCPI(String docID, String sapNumberType, String customerNumber);

	//Added for changes related to new order attachment RFC
	ZHYBOrderPdfRequest createNewOrderDownloadAttRequestforSCPI(String itemNo, String itemType,
			String customerNumber, String flag, String fileName, String fileType);

	BHGESalesOrderAttachmentData getAttachmentsListForOrderNew_SCPI(String orderID, String customerNumber, String flag,
			String fileName, String fileType);
	
	BHGESalesOrderAttachmentData getOrderDocsNew_SCPI(final String orderNumber, final String flag, final String fileName, final String fileType, final String customerNumber) throws UnsupportedEncodingException;
}
