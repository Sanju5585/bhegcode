package com.bhge.facades.bulkupload;

import java.util.List;

import com.bhge.facades.user.data.*;
import com.bhge.facades.data.SalesAreaData;
import de.hybris.platform.core.model.product.ProductModel;


/**
 * @author riyan
 *
 */
public interface BHGEDataValidatorFacade {

	List<BHGEBulkUploadEntryData> validateBulkUploadDataList(
			List<BHGEBulkUploadInputEntryData> inputList);

	/**
	 * @param inputEntry
	 * @return
	 */
	BHGEBulkUploadEntryData validateBulkUploadDataEntry(
			final BHGEBulkUploadInputEntryData inputEntry, int count);

	public BHGEExcelUploadInputEntryData validateExcelInputData(
			BHGEExcelUploadInputEntryData inputEntryData);

	//Added for spartacus migration
	BHGEBulkUploadEntryData validateBulkUploadDataEntryWs(BHGEBulkUploadInputEntryData inputEntry, int count,
			String cartId);

	List<BHGEBulkUploadEntryData> validateBulkUploadDataListWs(List<BHGEBulkUploadInputEntryData> inputList,
															   String cartId, boolean waygateQuickOrderPage,String productLine);

	void fetchAndPopulatePriceAvailabilityDetails(List<BHGEBulkUploadEntryData> validatedBulkUploadList, String productLine);

	//BHGEBulkUploadEntryData validateBulkUploadDataEntryWs(BHGEBulkUploadInputEntryData inputEntry, int count, String cartId, BHGESoldToData soldTo, String cartCurrency, SalesAreaData sessionSalesAreaData, ProductModel productModel, boolean waygateQuickOrderPage);

	BHGEBulkUploadEntryData validateBulkUploadDataEntryWsNew(BHGEBulkUploadInputEntryData inputEntry, int count,String cartId, String cartCurrency,String productLine);

	}
