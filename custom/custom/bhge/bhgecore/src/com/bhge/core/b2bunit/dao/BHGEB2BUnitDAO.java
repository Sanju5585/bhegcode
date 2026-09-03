package com.bhge.core.b2bunit.dao;

import de.hybris.platform.b2b.dao.B2BUnitDao;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;

import java.util.List;


public interface BHGEB2BUnitDAO extends B2BUnitDao
{

	List<B2BUnitModel> getB2bUnitsForSearchCriteria(String text);

	List<B2BUnitModel> getSalesAreaForB2bUnit(String b2bUnit);

	public B2BUnitModel getSoldToB2bUnit(final String b2bUnit);

	List<B2BUnitModel> getB2bUnitsForSearchCriteria(String text, final PageableData pageableData);
	
	List<String> getCustomerClassList();
	
	List<String> getCustomerAccountGroupsforB2bUnit();

	public SAPSalesOrganizationModel getCategoriesFromSalesOrg(String salesOrg, String distributionChannel, String division);

	BHGERegieterCustomerModel getUserBySSO(String inputSsoId);

	SearchPageData<B2BCustomerModel> getAllCustoomersForB2bUnits(PageableData pageableData, String unitCustomerNumber, String searchTerm, List<String> filterRoles, String currentUserId, boolean isInternalUsers);

	SearchPageData<B2BUnitModel> getAllB2bUnits(PageableData pageableData, String searchTerm);

	B2BUnitModel getB2bUnit(String searchTerm);
}
