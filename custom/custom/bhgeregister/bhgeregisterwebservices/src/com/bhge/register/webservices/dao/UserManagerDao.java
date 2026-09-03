/**
 *
 */
package com.bhge.register.webservices.dao;

import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserGroupModel;

import java.util.List;

import com.bhge.register.webservices.model.BHGEAppAccessLevelModel;
import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;


public interface UserManagerDao
{

	public List<BHGEUserAccessRequestModel> fetchManagerModel(String userId);

	public BHGERegieterCustomerModel getRequestorData(String uid);

	public BHGEAppAccessLevelModel getAppAccessLevel(String id);

	public BHGEUserAccessRequestModel getFetchPreviousRequest(String userId, String accessId);

	public BHGEApprovalDetailsModel fetchApprovalDetails(String approverId);

	public UserGroupModel fetchGroupModel(String groupName);

	public GEEdgeCustomerModel fetchEdgeCustomer(String sso);

	public List<BHGEAppAccessLevelModel> fetchAccessLevels();

	public String fetchSapLevel(String userId);

	public List<BHGEUserAccessRequestModel> fetchUserRequestList(String uid);

}
