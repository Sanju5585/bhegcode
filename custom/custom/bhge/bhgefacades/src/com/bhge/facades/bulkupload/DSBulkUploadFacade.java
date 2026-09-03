package com.bhge.facades.bulkupload;

import com.bhge.facades.bulkupload.data.DSBulkUploadForm;
import com.bhge.facades.user.data.BHGEBulkUploadEntryData;
import com.bhge.facades.user.data.BHGEBulkUploadListData;
import com.bhge.facades.user.data.BHGEExcelUploadInputEntryData;
import com.ds.facades.bulkOrder.DsBulkOrderData;
import com.ds.facades.bulkOrder.DsBulkOrderRequestData;

import jakarta.servlet.http.HttpSession;

public interface DSBulkUploadFacade {
    public DsBulkOrderData executeBulkUpload(DSBulkUploadForm dsBulkOrderForm);

    BHGEBulkUploadEntryData validateBulkUpload(String partNum, String qty, String lineNo);

    DsBulkOrderRequestData addToCartbulkProducts(BHGEBulkUploadListData bulkUploadListData, BHGEExcelUploadInputEntryData excelInputData, String callingsource, HttpSession session, String customerPO);

	//Added for spartacus migration

	public DsBulkOrderRequestData addToCartbulkProductsWs(BHGEBulkUploadListData bulkUploadListData,
			BHGEExcelUploadInputEntryData excelInputData, String callingsource, HttpSession session, String customerPO,
			String cartId);
	
	public DsBulkOrderData executeBulkUploadWs(DSBulkUploadForm bhgeBulkUploadForm, String cartId, String productLine);
}
