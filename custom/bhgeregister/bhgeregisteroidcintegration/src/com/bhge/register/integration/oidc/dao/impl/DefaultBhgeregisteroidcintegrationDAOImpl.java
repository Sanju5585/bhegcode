package com.bhge.register.integration.oidc.dao.impl;

import com.bhge.register.integration.oidc.dao.BhgeregisteroidcintegrationDao;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.log4j.Logger;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;

public class DefaultBhgeregisteroidcintegrationDAOImpl implements BhgeregisteroidcintegrationDao {

    private static final Logger LOG = Logger.getLogger(DefaultBhgeregisteroidcintegrationDAOImpl.class);

    private static final String GEEDGE_CUSTOMER_QUERY = """
        SELECT {b2b.PK}
        FROM {B2bCustomer AS b2b}
        WHERE {b2b.UID}=?userId
        """;

    private static final String BHGE_REGISTER_CUSTOMER = """
            SELECT {b2b.pk}
            FROM {B2BCustomer as b2b}
            WHERE {b2b.sso}=?userId
            """;

    private static final String SAP_SALES_ORG_CATEGORIES = """
            SELECT {salesOrg.PK}
            FROM {SAPSALESORGANIZATION as salesOrg}
            WHERE {salesOrg.salesOrganization}=?salesOrg
            """;

    private FlexibleSearchService flexibleSearchService;

    public FlexibleSearchService getFlexibleSearchService() {
        return flexibleSearchService;
    }

    public void setFlexibleSearchService(FlexibleSearchService flexibleSearchService) {
        this.flexibleSearchService = flexibleSearchService;
    }

    @Override
    public List<B2BCustomerModel> getRegisteredCustomer(String userId) {
        LOG.info("Inside register DAO for Customer");
        List<B2BCustomerModel> customers = new LinkedList<>();
        FlexibleSearchQuery query = new FlexibleSearchQuery(GEEDGE_CUSTOMER_QUERY);
        query.addQueryParameter("userId", userId);
        SearchResult<B2BCustomerModel> results = flexibleSearchService.search(query);
        if(CollectionUtils.isNotEmpty(results.getResult())){
            customers.addAll(results.getResult());
        }
        query = new FlexibleSearchQuery(BHGE_REGISTER_CUSTOMER);
        query.addQueryParameter("userId", userId);
        results = flexibleSearchService.search(query);
        if(CollectionUtils.isNotEmpty(results.getResult())){
            customers.addAll(results.getResult());
        }
        return customers;
    }

    @Override
    public Collection<CategoryModel> fetchCategoriesFromSalesOrg(String salesOrg) {
        final FlexibleSearchQuery query = new FlexibleSearchQuery(SAP_SALES_ORG_CATEGORIES);
        query.addQueryParameter("salesOrg", salesOrg);
        final SearchResult<SAPSalesOrganizationModel> results = flexibleSearchService.search(query);
        if(CollectionUtils.isNotEmpty(results.getResult()) && CollectionUtils.isNotEmpty(results.getResult().get(0).getVisibleCategories())){
            return results.getResult().get(0).getVisibleCategories();
        }
        return CollectionUtils.emptyCollection();
    }
}
