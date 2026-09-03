/**
 *
 */
package com.bhge.register.webservices.dao;

import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;

import java.util.List;

import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import org.apache.commons.mail2.core.EmailException;

import com.bhge.register.webservices.appoval.StatusCountBean;
import com.bhge.register.webservices.data.ManualApprovalData;
import com.bhge.register.webservices.exception.BhgeRegisterException;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import com.bhgeregister.dto.BHGERegisterResponse;
import com.bhgeregister.dto.BHGERegisterRuleData;


/**
 * @author 1121219
 *
 */
public interface BHGEManualApprovalDao
{
	public List<ManualApprovalData> fetchApprovalDetails(final String uid,String name,String productLine,String fromDate,String toDate);

	public StatusCountBean fetchDashboardDetails(final String uid,String name,String productLine,String fromDate,String toDate);

	public ManualApprovalData fetchManualWorkflowDetails(final String requestAccessId);

	public List<BHGERegisterRuleData> fetchApprovalRules(final String requestAccessId);

	public BHGERegisterResponse updateApprovalDetails(final ManualApprovalData approvalData, final String uid)
			throws CMSItemNotFoundException, EmailException;

	public StatusCountBean getStatusCount(final List<ManualApprovalData> countlist);

	public List<ManualApprovalData> fetchDashboardApprovalDetails(final String uid, final String status,final String name,final String productLine,final String fromDate,final String toDate);

	public void authorizeApproverAccess(final String uid, final String requestAccessId) throws BhgeRegisterException;

	public List<ManualApprovalData> fetchHomepageDashboardDetails(final String uid);

	public BHGERegisterKeyValueDataModel fetchManualCsrDetails(String uid, String attributeId);
	
	public BHGEUserAccessRequestModel fetchUserAcessRequest(String requestAccessId);

	BHGERegieterCustomerModel getRegisterCustomer(String userId);
}
