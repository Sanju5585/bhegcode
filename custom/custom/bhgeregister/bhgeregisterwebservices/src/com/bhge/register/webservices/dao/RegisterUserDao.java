/**
 *
 */
package com.bhge.register.webservices.dao;

import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;

import java.util.List;

import com.bhge.register.webservices.data.AccountLinkingData;
import com.bhge.register.webservices.model.BHGEAccountDataModel;
import com.bhge.register.webservices.model.BHGEAppAccessRulesModel;
import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import com.bhge.register.webservices.model.BHGEMnCEcommMatrixModel;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import com.bhge.register.webservices.model.BHGEUserAccessRulesModel;
import com.bhgeregister.dto.BHGEApplicationData;


public interface RegisterUserDao
{

	public UserModel getUserBySSO(final String inputSsoId);

	public BHGEUserAccessRequestModel getUserAccessRequest(final String accessRequestId);

	public BHGEAppAccessRulesModel getAppAccessRules(final String ruleId);

	public BHGEApprovalDetailsModel getSystemApproverDetails();
	
	//ofs changes
	public BHGEApprovalDetailsModel getOFSApproverDetails();
	
	public BHGEMnCEcommMatrixModel fetchManualApproverforCountry(String country);
	//ofs changes

	/* Anish POST */
	public BHGEApprovalDetailsModel getApproverDetails(String approver_id);
	/* Anish POST */

	public BHGEMnCEcommMatrixModel fetchManualApprover(String country, String productLine, String flag);

	public BHGERegisterKeyValueDataModel fetchProductLine(String productLine);

	public BHGERegisterKeyValueDataModel fetchSubRegion(String countryName);

	public BHGERegisterKeyValueDataModel fetchRegion(String country);

	public BHGERegieterCustomerModel getRequestorData(String uid);

	public BHGEUserAccessRequestModel fetchPreviousUserAccessRequest(Long sequence);

	public BHGEMnCEcommMatrixModel fetchManualApproverAttributeKey(String param, String productLine, String flag);

	public BHGERegisterKeyValueDataModel fetchSubRegionAttributeKey(String countryName);

	public BHGERegisterKeyValueDataModel fetchRegionAttributeKey(String countryName);

	public BHGEAccountDataModel getAccountData(String accountNumber);

	public String fetchIsoCode(String countryName);

	public UserModel getUserBySSODetail(final String inputSsoId);

	public BHGERegieterCustomerModel validateActivateAccount(final String userName);

	public boolean checkActivateAccount(final String userName);

	public BHGEMnCEcommMatrixModel getPlaceHolderMatrix(String productLine);

	public List<BHGEApplicationData> fetchApplications(String userName);

	public List<BHGERegisterKeyValueDataModel> fetchCountry();

	public List<AccountLinkingData> getUserAccounts(final String inputSsoId);

	public List<BHGERegisterKeyValueDataModel> fetchProduct(String appName, String productLine);

	public List<BHGEUserAccessRequestModel> fetchOrderTrackingAccess(String sso);

	public BHGEUserAccessRequestModel fetchUserAccessRequest(String sso);

	public List<BHGEUserAccessRulesModel> fetchUserAccessRules(BHGEUserAccessRequestModel accessRequestData);


	public BHGEApprovalDetailsModel getCSRApproverDetails();

	public BHGEApprovalDetailsModel getIQMApproverDetails(final String role);

	public BHGEApprovalDetailsModel getDAMApproverDetails();

	public BHGERegisterKeyValueDataModel fetchIqmParentkey(final String role);

	public List<BHGEUserAccessRequestModel> fetchUserAccessRequestList(String sso);


	public boolean checkReactivateAccount(final String userName);

	public GEEdgeCustomerModel validateReactivateAccount(final String userName);
	
	public BHGEUserAccessRequestModel fetchUserAccessRequestModel(final BHGERegieterCustomerModel registerUser);

	// US8159: FPT Valv store changes start
	public List<BHGERegisterKeyValueDataModel> fetchUserRolesFPT(final String appName);

	public List<BHGERegisterKeyValueDataModel> fetchVSLegalEntities(String appName);

	public List<BHGERegisterKeyValueDataModel> fetchFptProductLine(List<String> fptProductLine);

	public List<BHGERegisterKeyValueDataModel> fetchFptLegalEntities(List<String> legalEntities);

	BHGEMnCEcommMatrixModel fetchManualApproverForFpt(String legalEntity, String role);
	
	BHGEMnCEcommMatrixModel fetchManualApproverForFpt(String legalEntity, BHGERegieterCustomerModel requestor);
	
	BHGEMnCEcommMatrixModel fetchFptSystemApproval();

	public BHGERegisterKeyValueDataModel fetchFptRoleDetails(String fptRole);

	public BHGERegisterKeyValueDataModel fetchFptProdLineDetails(String prodLine);

	public BHGERegisterKeyValueDataModel fetchFptLegalEntityDetails(String legalEntity);

	public BHGEMnCEcommMatrixModel fetchManualApproverForFptWitCustNo(String productLine, String role);

	public BHGEMnCEcommMatrixModel getFPTPlaceHolderMatrix(String productLine);

	public BHGERegisterKeyValueDataModel fetchFptSalesDetails(String legalSales);
	
	public List<BHGERegisterKeyValueDataModel> fetchFptSalesOrg(String attributeType);
	
	public BHGERegieterCustomerModel customerDetails(String uid);
	
	public String allowAllAddress();
	
	public BHGEMnCEcommMatrixModel fetchManualApproverforProductline(String country, String productLine);

	// US8159: FPT ValvStore changes end

	public List<BHGERegisterKeyValueDataModel> fetchAccountType(String appName);

	public BHGERegisterKeyValueDataModel fetchOfsAccountType(String ofsAccountType);

	List<BHGERegisterKeyValueDataModel> fetchNewAttrList(List<String> newAttrList);

	List<B2BCustomerModel> getUserByIdOrSSO(String userId);
}
