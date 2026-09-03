package com.bhge.core.b2bunit.service;

import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;

import java.util.Collection;
import java.util.List;


public interface BHGEB2BUnitService extends B2BUnitService<B2BUnitModel, B2BCustomerModel>
{

	public List<B2BUnitModel> getB2bUnitsForSearchCriteria(final String text);

	public List<B2BUnitModel> getSalesAreaForB2BUnit(final String b2bUnit);

	public List<B2BUnitModel> getB2bUnitsForSearchCriteria(final String text, final PageableData pageableData);
	
	List<String> getCustomerClassList();
	
	List<String> getCustomerAccountGroupsforB2bUnit();

	public Collection<CategoryModel> getCategoriesFromSalesOrg(String salesOrg, String distributionChannel, String division);

	public Collection<BHGEApprovalDetailsModel> fetchProductLinesForCSRAccess(String user);

    SearchPageData<B2BCustomerModel> getAllCustoomersForB2bUnits(PageableData pageableData, String unitCustomerNumber, String searchTerm, List<String> filterRoles, String currentUserId, boolean isInternalUsers);

	boolean updateUserDetails(String uid, String role, boolean loginDisabled, String adminId);

	SearchPageData<B2BUnitModel> getAllB2bUnits(PageableData pageableData, String searchTerm);

	B2BUnitModel getB2bUnit(String searchTerm);

	B2BUnitModel getSoldToB2bUnit(String soldToNumber);
}
