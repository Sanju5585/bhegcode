package com.bhge.facades.UserManage;

import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.facades.user.data.ManageUsersB2bUnitData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;

import java.util.List;

public interface BHGEUserManageFacade {

    SearchPageData<BHGECustomerData> getUserDetails(PageableData pageableData, String searchTerm, List<String> filterRoles, String b2bUnit, boolean isInternalUsers);
    boolean updateUserDetails(String uid, String role, boolean loginDisabled);

    SearchPageData<ManageUsersB2bUnitData> getB2bUnits(PageableData pageableData, String searchTerm);

    ManageUsersB2bUnitData getB2bUnit(String searchTerm);
}
