/**
 *
 */
package com.bhge.core.rma.service;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;

import java.util.List;

import com.bhge.core.data.BHGERmaAttachmentData;
import com.bhge.core.data.BHGERmaStatusData;
import com.bhge.core.data.ProductLineData;
import com.bhge.core.data.RmaHeaderStatusData;
import com.bhge.core.data.RmaStatusCountData;
import com.bhge.core.data.uploadFileResponseData;


/**
 * @author 1423683
 *
 */
public interface BHGERMAStatusService
{
	public BHGERmaStatusData getRmaStatusForCustomer(List<String> customerNumber, String orderType, String dateRange)
			throws BackendException;

	public BHGERmaStatusData getRmaStatusForCustomerRFC(List<String> customerNumber, String orderType,
												 String dateRange);

	public RmaStatusCountData getRmaStatusCount(List<RmaHeaderStatusData> rmaHeaderData);

	public List<ProductLineData> getProductLineData(List<RmaHeaderStatusData> rmaHeaders);

	public BHGERmaAttachmentData getAttachments(String rmaNumber, String flag, String fileName, String fileType,
			String customerNumber);


	public BHGERmaStatusData getRmaStatusDataForRmaNumber(String rmaNumber, String orderType);

	public BHGERmaStatusData getRmaStatusDataForRmaNumberRFC(List<String> customerNumber,String rmaNumber, String orderType);

	public String getSoldTo();


	public List<B2BUnitModel> getList();



	public String getUserName();

	// Below method to be remove once testing is done.
	public uploadFileResponseData submitOrderAttachmentsToSAP(String rmaNumber, byte[] fileData, String fileName, String fileType);
	
	public uploadFileResponseData submitOrderAttachmentsToSCPI(String rmaNumber, byte[] fileData, String fileName, String fileType);
	
	public BHGERmaAttachmentData getRMAAttachments(String rmaNumber, String flag, String fileName, String fileType, String customerNumber);

	BHGERmaStatusData getRmaStatusRFC(List<String> customerNumber, String rmaNumber, String poNumber, String orderType, String dateRange);

	public BHGERmaStatusData getQuickRmaStatusForRmaNumberRFC(final List<String> customerNumber, final String orderType,
															  final String rmaNumber, final String poNumber);

}