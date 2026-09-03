/**
 *
 */
package com.bhge.register.webservices.facades;

import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;

import java.util.List;

import org.apache.commons.mail2.core.EmailException;

import com.bhge.register.webservices.appoval.StatusCountBean;
import com.bhge.register.webservices.data.ManualApprovalData;
import com.bhge.register.webservices.exception.BhgeRegisterException;
import com.bhgeregister.dto.BHGECSRRequest;
import com.bhgeregister.dto.BHGERegisterResponse;

public interface BHGEManualApprovalFacade
{

	public List<ManualApprovalData> fetchManualWorkflow(final String uid,String name,String productLine,String fromDate,String toDate);

	public SearchPageData<ManualApprovalData> fetchManualWorkflow(final String uid, final PageableData pageableData,String name,String productLine,String fromDate, String toDate);

	public StatusCountBean fetchDashboardDetails(final String uid,String name,String productLine,String fromDate,String toDate);

	public ManualApprovalData fetchManualWorkflowDetails(final String requestAccessId);

	public SearchPageData<ManualApprovalData> fetchDashboardApprovalDetails(final String uid, final String status,
			final PageableData pageableData,final String name,final String productLine,final String fromDate,final String toDate);
	public SearchPageData<ManualApprovalData> fetchDashboardApprovalDetailsDownloads(final String uid, final String status,
																			final PageableData pageableData,final String name,final String productLine,final String fromDate,final String toDate);

	public BHGERegisterResponse updateManualWorkflow(final ManualApprovalData approvalData, final String uid)
			throws CMSItemNotFoundException, EmailException;

	public void authorizeApproverAccess(final String uid, final String requestAccessId) throws BhgeRegisterException;

	/**
	 * @param uid
	 * @return
	 */
	public List<ManualApprovalData> fetchHomepageDashboardDetails(final String uid);

	public BHGERegisterResponse fetchManualCsrDetails(String uid, String customerAccNumber);
	
	public BHGERegisterResponse fetchManualOfsCsrDetails(String uid, String customerAccNumber);
	
	public String updateCSRData(BHGECSRRequest csrRequestData);
	
}

