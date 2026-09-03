/**
 *
 */
package com.bhge.facades.rma;

import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;

import java.text.ParseException;
import java.util.List;

import com.bhge.core.data.BHGERmaStatusData;
import com.bhge.core.data.CustomerAccountData;
import com.bhge.core.data.RmaHeaderStatusData;
import com.bhge.core.data.uploadFileResponseData;
import com.bhge.core.mailmessages.context.EmailResponse;


/**
 * @author 1423683
 *
 */
public interface BHGERMAStatusFacade
{

	public BHGERmaStatusData getCacheData(List<String> customerNumber, String orderType, String dateRange);

	//public List<String> getProductLineId(List<String> productLinesList);

	public boolean getRmaStatusWithPLFilter(RmaHeaderStatusData rmaItem, List<String> productLinesList);

	public boolean getRmaStatusWithDateFilter(RmaHeaderStatusData rmaHeader, String fromDate, String toDate) throws ParseException;

	//public BHGERmaStatusData applyFilters(BHGERmaStatusData rmaStatusDataBaseList, RmaInputData rmaInputData) throws ParseException;

	//public BHGERmaStatusData applySearch(BHGERmaStatusData rmaStatusData, RmaInputData rmaInputData);

	public BHGERmaStatusData applySort(BHGERmaStatusData data, final PageableData pageableData, String sortBy);

	public boolean createShareRmaEmail(String TEMPLATECODE, RmaHeaderStatusData rmaHeaderStatusData, String subject,
			String toAddress) throws ParseException;

	//public List<B2BUnitModel> getCustomerList();

	//public boolean removeRmaStatusDataFromCache(List<String> list);


	public BHGERmaStatusData applySearch(BHGERmaStatusData rmaStatusData, PageableData pageableData, String searchBy,
			String sortBy);

	public void removeRmaStatusDataFromCache();

	public void clearRmaStatusDataFromCache(List<String> customerList);


	SearchPageData<RmaHeaderStatusData> getPaginatedData(List<RmaHeaderStatusData> rmaStatusData, PageableData pageableData);


	//public EmailResponse createRmaEnquiryForm(String templatecodeRmaenquiry, String userName, String emailId, String customerName,String rmaNumber, String poNumber, String rmaCreatedDate, String rmaEnquiryType, String rmaEnquiryDetails,String subject, String soldToId, String productHeirarchyName, String productLineData);


	BHGERmaStatusData applyFilters(BHGERmaStatusData rmaStatusDataBaseList, PageableData pageableData, String fromDateFilter,
			String toDateFilter, List<String> productLinesFilter, String rmaStatusFilter, String searchBy, String sortBy)
			throws ParseException;

	public BHGERmaStatusData rmaStatusExceptionData(List<String> customerList, String orderType) throws BackendException;

	public RmaHeaderStatusData quickSearchForRMANo(final BHGERmaStatusData rmaStatusData, final String searchByRMANo,
			final boolean isRecentFlag);

	//public List<B2BUnitModel> getCustomerList();
	public RmaHeaderStatusData quickSearchForPONo(final BHGERmaStatusData rmaStatusData, final String searchByPONo);

	public List<CustomerAccountData> fetchCustomerList();

	public String customerData();

	public uploadFileResponseData uploadFile(byte[] fileData, String rmaNumber, String fileName, String fileType);


	public EmailResponse rmaEnquiryMatrix(String ENQUIRYTEMPLATECODE, String userName, String emailId, String customerName,
			String rmaNumber, String poNumber, String rmaCreatedDate, String rmaEnquiryType, String rmaEnquiryDetails,
			String subject, String soldToId, String productHeirarchy, String productLine) throws ParseException;


	public BHGERmaStatusData applyRmaStatusFilters(BHGERmaStatusData rmaStatusBaseData, PageableData pageableData,
			String rmaStatusFilter, String searchBy, String sortBy);

	BHGERmaStatusData getRmaStatusRFC(List<String> customerNumber, String rmaNumber, String poNumber, String orderType, String dateRange);






	//public BHGERmaStatusData getAllData(List<String> customerNumber, String orderType);

	//public List<BHGERmaStatusData> getMultipleCacheData();

	public BHGERmaStatusData getQuickRmaStatusData(final List<String> customerNumber, final String orderType, final String dateRange,
			final String poNumber);
	public RmaHeaderStatusData quickSearchForRMANoWs(final BHGERmaStatusData rmaStatusData, final String searchByRMANo,
			final boolean isRecentFlag);
	public BHGERmaStatusData applySearchWs(BHGERmaStatusData rmaStatusData, PageableData pageableData, String searchBy,
			String sortBy);
	
}
