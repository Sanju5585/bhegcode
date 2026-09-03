package com.bhge.register.integration.oidc.dao;

import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.category.model.CategoryModel;

import java.util.Collection;
import java.util.List;

public interface BhgeregisteroidcintegrationDao {

    List<B2BCustomerModel> getRegisteredCustomer(String userId);

    Collection<CategoryModel> fetchCategoriesFromSalesOrg(String defaultB2bUnit);
}
