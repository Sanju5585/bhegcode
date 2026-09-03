/**
 *
 */

package com.bhge.register.webservices.facades.impl;

import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;

import java.util.List;

import org.apache.commons.mail2.core.EmailException;
import org.apache.log4j.Logger;

import com.bhge.register.webservices.appoval.StatusCountBean;
import com.bhge.register.webservices.data.ManualApprovalData;
import com.bhge.register.webservices.exception.BhgeRegisterException;
import com.bhge.register.webservices.facades.BHGEManualApprovalFacade;
import com.bhge.register.webservices.services.BHGEManualApprovalService;
import com.bhgeregister.dto.BHGECSRRequest;
import com.bhgeregister.dto.BHGERegisterResponse;


public class BHGEManualApprovalFacadeImpl implements BHGEManualApprovalFacade
{
	private final static Logger LOG = Logger.getLogger(BHGEManualApprovalFacadeImpl.class);
	private BHGEManualApprovalService manualApprovalService;

	/**
	 * @return the manualApprovalService
	 */
	public BHGEManualApprovalService getManualApprovalService()
	{
		return manualApprovalService;
	}

	/**
	 * @param manualApprovalService
	 *           the manualApprovalService to set
	 */
	public void setManualApprovalService(final BHGEManualApprovalService manualApprovalService)
	{
		this.manualApprovalService = manualApprovalService;
	}

	@Override
	public List<ManualApprovalData> fetchManualWorkflow(final String uid,String name,String productLine,String fromDate,String toDate)
	{
		LOG.info("Inside facade ");
		final List<ManualApprovalData> data = manualApprovalService.fetchManualapprovaldetails(uid,name,productLine,fromDate,toDate);
		LOG.info("Data size " + data.size());
		LOG.info("Inside facade done ");
		return data;
	}

	@Override
	public SearchPageData<ManualApprovalData> fetchManualWorkflow(final String uid, final PageableData pageableData,String name,String productLine,String fromDate,String toDate)
	{
		LOG.info("Inside facade ");
		final List<ManualApprovalData> data = manualApprovalService.fetchManualapprovaldetails(uid,name,productLine,fromDate,toDate);
		final SearchPageData<ManualApprovalData> result = createSearchPageData(pageableData, data);
		LOG.info("Data size " + data.size());
		LOG.info("Inside facade done ");
		return result;
	}

	@Override
	public List<ManualApprovalData> fetchHomepageDashboardDetails(final String uid)
	{
		final List<ManualApprovalData> data = manualApprovalService.fetchHomepageDashboardDetails(uid);
		return data;
	}

	@Override
	public void authorizeApproverAccess(final String uid, final String requestAccessId) throws BhgeRegisterException
	{
		manualApprovalService.authorizeApproverAccess(uid, requestAccessId);
	}

	@Override
	public StatusCountBean fetchDashboardDetails(final String uid,String name,String productLine,String fromDate,String toDate)
	{
		return manualApprovalService.fetchDashboardDetails(uid,name,productLine,fromDate,toDate);
	}

	@Override
	public SearchPageData<ManualApprovalData> fetchDashboardApprovalDetails(final String uid, final String status,
			final PageableData pageableData,final String name,final String productLine,final String fromDate,final String toDate)
	{
		final List<ManualApprovalData> approvalData = manualApprovalService.fetchDashboardApprovalDetails(uid, status,name,productLine,fromDate,toDate);
		final SearchPageData<ManualApprovalData> result = createSearchPageData(pageableData, approvalData);
		return result;
	}
	public SearchPageData<ManualApprovalData> fetchDashboardApprovalDetailsDownloads(final String uid, final String status,
																			final PageableData pageableData,final String name,final String productLine,final String fromDate,final String toDate)
	{

		final List<ManualApprovalData> approvalData = manualApprovalService.fetchDashboardApprovalDetailsDownloads(uid,status,name,productLine,fromDate,toDate);
		final SearchPageData<ManualApprovalData> result = createSearchPageData(pageableData, approvalData);
		return result;
		//return convertPageData(b2BCustomerModels,bhgeUserManagmentConverter);

	}

	/**
	 * Creates SearchPageData return result from actual data list
	 *
	 * @param pageableData
	 * @param approvalData
	 * @return
	 */
	private SearchPageData<ManualApprovalData> createSearchPageData(final PageableData pageableData,
			final List<ManualApprovalData> approvalData)
	{
		final SearchPageData<ManualApprovalData> result = new SearchPageData<ManualApprovalData>();

		final PaginationData paginationData = new PaginationData();

		paginationData.setPageSize(pageableData.getPageSize());
		paginationData.setSort(pageableData.getSort());
		paginationData.setTotalNumberOfResults(approvalData.size());

		paginationData.setNumberOfPages((int) Math
				.ceil(Double.valueOf(paginationData.getTotalNumberOfResults()) / Double.valueOf(paginationData.getPageSize())));

		paginationData.setCurrentPage(Math.max(0, Math.min(paginationData.getNumberOfPages(), pageableData.getCurrentPage())));
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

		if (approvalData.size() <= pageableData.getPageSize())
		{
			result.setResults(approvalData);
		}
		else if (endIndex <= approvalData.size())
		{
			result.setResults(approvalData.subList(startIndex, endIndex));
		}
		else
		{
			result.setResults(approvalData.subList(startIndex, approvalData.size()));
		}
		return result;
	}

	@Override
	public ManualApprovalData fetchManualWorkflowDetails(final String requestAccessId)
	{
		return manualApprovalService.fetchManualWorkflowDetails(requestAccessId);
	}

	@Override
	public BHGERegisterResponse updateManualWorkflow(final ManualApprovalData approvalData, final String uid)
			throws CMSItemNotFoundException, EmailException
	{
		LOG.info("Inside Facade updateManualWorkflow");
		return manualApprovalService.updateManualapprovaldetails(approvalData, uid);
	}

	@Override
	public BHGERegisterResponse fetchManualCsrDetails(final String uid, final String customerAccNumber)
	{
		return manualApprovalService.fetchManualCsrDetails(uid, customerAccNumber);
	}
	
	@Override
	public BHGERegisterResponse fetchManualOfsCsrDetails(final String uid, final String customerAccNumber)
	{
		return manualApprovalService.fetchManualOfsCsrDetails(uid, customerAccNumber);
	}
	
	@Override
	public String updateCSRData(final BHGECSRRequest csrRequestData)
	{
		return manualApprovalService.updateCSRData(csrRequestData);
	}


}
