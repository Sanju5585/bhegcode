package com.bhge.core.b2bunit.dao.impl;

import de.hybris.platform.b2b.dao.impl.DefaultB2BUnitDao;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commerceservices.search.flexiblesearch.data.SortQueryData;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.commerceservices.search.flexiblesearch.PagedFlexibleSearchService;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;

import java.util.*;

import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.annotation.Resource;

import com.bhge.core.b2bunit.dao.BHGEB2BUnitDAO;
import com.bhge.core.constants.BhgeCoreConstants;


public class BHGEB2BUnitDAOImpl extends DefaultB2BUnitDao implements BHGEB2BUnitDAO
{

	private static final Logger LOG = LoggerFactory.getLogger(BHGEB2BUnitDAOImpl.class);
	private static final String CustomerClassListForEndUserDiscount = "customerClassListForEndUserDiscount";
	private static final String CUSTOMERACCOUNTGROUPS = "customerAccountGroups";

	private static final String FIND_B2BCUSTOMERS_IN_DESIRED_GROUPS = "SELECT DISTINCT {b2bcustomer:pk}, {b2bcustomer:name} as CustomerName," +
			"MIN( CASE " +
			"           WHEN {desiredgroups.uid} = 'UG_ADMIN_ORDER_STORE' THEN '0'" +
			"           WHEN {desiredgroups.uid} = 'UG_VIEW_STORE' THEN '1'" +
			"           ELSE '2'" +
			"       END) AS groupsort"
			+ " FROM { GEEdgeCustomer AS b2bcustomer"
			+ " JOIN PrincipalGroupRelation AS b2bunitrelation ON {b2bunitrelation:source} = {b2bcustomer:pk}"
			+ " JOIN B2BUnit AS b2bunit ON {b2bunit:pk} = {b2bunitrelation:target}"
			+ " JOIN PrincipalGroupRelation  AS desiredgrouprelations ON {desiredgrouprelations:source} = {b2bcustomer:pk} "
			+ " JOIN UserGroup AS desiredgroups  ON {desiredgroups:pk} = {desiredgrouprelations:target} }"
			+ " WHERE {b2bunit:uid} LIKE ?unitCustomerNumber AND {desiredgroups:uid} IN (?filterRoles) AND {b2bcustomer:uid} != ?currentUserId";

	private static final String SEARCH_QUERY=" AND (lower({b2bcustomer.name}) LIKE ?searchterm OR lower({b2bcustomer.email}) LIKE ?searchterm)";
	private static final String GROUP_BY_CLAUSE=" GROUP BY {b2bcustomer:pk}, {b2bcustomer:name} ";
	private static final String INTERNAL_USERS_QUERY=" AND {b2bcustomer:isInternalUser} = ?isInternalUsers";
	private static final String ALL_B2bUnits = """
			SELECT DISTINCT {b2b.pk}, {b2b.name}
			FROM {B2BUnit as b2b}
			WHERE {b2b.customerClass} IS NOT NULL
			AND {b2b.ecommerceFlag} = ?ecommerceFlag
			AND ( LOWER({b2b.uid}) LIKE ?searchTerm OR LOWER({b2b.name}) LIKE ?searchTerm )
			ORDER BY {b2b.name} ASC
			""";
	private static final String B2BUNIT_SEARCH_QUERY = """
			SELECT DISTINCT {b2b.pk}
			FROM {B2BUnit as b2b}
			WHERE {b2b.customerClass} IS NOT NULL
			AND {b2b.ecommerceFlag} = ?ecommerceFlag
			AND ( LOWER({b2b.uid}) LIKE ?searchTerm OR LOWER({b2b.name}) LIKE ?searchTerm )
			""";


	@Autowired
	private FlexibleSearchService flexibleSearchService;

	@Resource
	private PagedFlexibleSearchService pagedFlexibleSearchService;
	
	@Override
	public List<String> getCustomerAccountGroupsforB2bUnit()
	{
		final String queryString = "SELECT {value} from {BHGEGlobalProperties} where {uid}='" + CUSTOMERACCOUNTGROUPS
				+ "'";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		query.setResultClassList(Arrays.asList(String.class));
		final SearchResult<String> results = flexibleSearchService.search(query);
		final String result = CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult().get(0) : null;
		return StringUtils.isNotBlank(result) ? Arrays.asList(result.split(",")) : new ArrayList<String>();

	}

	


	@Override
	public List<B2BUnitModel> getB2bUnitsForSearchCriteria(final String text)
	{
		final StringBuilder queryString = new StringBuilder();
		queryString.append("SELECT {B:PK} from {B2BUNIT AS B } WHERE ");
		queryString.append("(UPPER({B.NAME}) LIKE '%" + text.toUpperCase() + "%' escape '$' OR UPPER({B.UID}) LIKE '%"
				+ text.toUpperCase() + "%')");
		queryString.append(" AND {B.uid} not like '%!_%' escape '!' AND {B.accountGroup} in (?customerAccountGroups)");
		queryString.append(" ORDER BY CASE WHEN (UPPER({B.NAME}) = '" + text.toUpperCase() + "') THEN 0 ");
		queryString.append(" WHEN (UPPER({B.NAME}) LIKE '" + text.toUpperCase() + "%') THEN 1 ");
		queryString.append(" WHEN (UPPER({B.NAME}) LIKE '%" + text.toUpperCase() + "%') THEN 2 ");
		queryString.append(" WHEN (UPPER({B.NAME}) LIKE '%" + text.toUpperCase() + "') THEN 3 ");
		queryString.append(" ELSE 4 ");
		queryString.append(" END, {B.NAME} ");
		/*
		 * queryString.append(" FETCH FIRST "); queryString.append(Config.getParameter("soldToCounts"));
		 * queryString.append(" ROWS ONLY ");
		 */

		List<String> customerAccountGroups= getCustomerAccountGroupsforB2bUnit();
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString.toString());
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("customerAccountGroups", customerAccountGroups);
		query.addQueryParameters(params);
		final SearchResult<B2BUnitModel> result = flexibleSearchService.search(query);
		return result.getResult();
	}

	@Override
	public List<B2BUnitModel> getB2bUnitsForSearchCriteria(final String text, final PageableData pageableData)
	{
		final StringBuilder queryString = new StringBuilder();
		//searchRestrictionService.disableSearchRestrictions();
		String searchStr=text;
		LOG.info("Search text: "+ text);
		if(StringUtils.containsIgnoreCase(text, "&amp;")){
			searchStr=text.replace("&amp;", "&");
			LOG.info("Search searchStr: "+ searchStr);
		}
		queryString.append("SELECT {B:PK} from {B2BUNIT AS B } where ");
		queryString.append("(UPPER({B.NAME}) LIKE '%" + searchStr.toUpperCase() + "%' escape '$' OR UPPER({B.UID}) LIKE '%"
				+ searchStr.toUpperCase() + "%')");
		queryString.append(" AND {B.uid} not like '%!_%' escape '!' AND {B.accountGroup} in (?customerAccountGroups)");
		queryString.append(" AND {B.ecommerceFlag} is not null ");
		queryString.append(" AND {B.ecommerceFlag} != ?ecommerceFlag");
		queryString.append(" ORDER BY CASE WHEN (UPPER({B.NAME}) = '" + searchStr.toUpperCase() + "') THEN 0 ");
		queryString.append(" WHEN (UPPER({B.NAME}) LIKE '" + searchStr.toUpperCase() + "%') THEN 1 ");
		queryString.append(" WHEN (UPPER({B.NAME}) LIKE '%" + searchStr.toUpperCase() + "%') THEN 2 ");
		queryString.append(" WHEN (UPPER({B.NAME}) LIKE '%" + searchStr.toUpperCase() + "') THEN 3 ");
		queryString.append(" ELSE 4 ");
		queryString.append(" END, {B.NAME} ");
		//queryString.append(" where ROWNUM between ?startIndex and ?endIndex ");
		/*
		 * queryString.append(" FETCH FIRST "); queryString.append(Config.getParameter("soldToCounts"));
		 * queryString.append(" ROWS ONLY ");
		 */
		List<String> customerAccountGroups= getCustomerAccountGroupsforB2bUnit();
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString.toString());
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("customerAccountGroups", customerAccountGroups);
		params.put("ecommerceFlag", BhgeCoreConstants.ECOMMFLAG_NE);
		LOG.debug("query is" + query);
		query.addQueryParameters(params);
		final SearchPageData<B2BUnitModel> searchPageData = pagedFlexibleSearchService.search(query, pageableData);
		return searchPageData.getResults();
	}


	@Override
	public List<B2BUnitModel> getSalesAreaForB2bUnit(final String b2bUnit)
	{
		// userService.setCurrentUser(userService.getAnonymousUser());
		//final Map<String, Object> params = new HashMap<String, Object>();

		final String queryString = "SELECT {b:pk} FROM {" + B2BUnitModel._TYPECODE + " AS b} WHERE UPPER({b.UID}) LIKE '%"
				+ b2bUnit.toUpperCase() + "%'";

        //params.put("data", b2bUnit);
		final SearchResult<B2BUnitModel> searchResult = flexibleSearchService.search(queryString);
		final List<B2BUnitModel> b2bUnitModelList = searchResult.getResult();
		return b2bUnitModelList;
	}

	@Override
	public B2BUnitModel getSoldToB2bUnit(final String b2bUnitUid) {
		B2BUnitModel b2bUnitModel = null;

		if (Objects.nonNull(b2bUnitUid) && !b2bUnitUid.trim().isEmpty()) {
			try {
				final String normalizedB2bUnit = String.format("%010d", Long.parseLong(b2bUnitUid.trim()));

				final String queryString = "SELECT {b:pk} FROM {" + B2BUnitModel._TYPECODE + " AS b} WHERE {b.uid} = '"
						+ normalizedB2bUnit + "'";

				final SearchResult<B2BUnitModel> searchResult = flexibleSearchService.search(queryString);

				if (searchResult.getResult().isEmpty()) {
					LOG.warn("No B2BUnit found for UID: " + normalizedB2bUnit);
				} else {
					b2bUnitModel = searchResult.getResult().get(0);
				}
			} catch (final NumberFormatException ex) {
				LOG.error("Invalid B2BUnit UID received: {}", b2bUnitUid, ex);
			} catch (final Exception ex) {
				LOG.error("Exception occurred while fetching B2BUnit for UID:{} ", b2bUnitUid, ex);
			}
		} else {
			LOG.warn("B2BUnit UID is null or empty {}", b2bUnitUid);
		}

		return b2bUnitModel;
	}
	
	
	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.b2bunit.dao.BHGEB2BUnitDAO#getCustomerClassListForEndUserAddress()
	 */
	public List<String> getCustomerClassList()
	{
		final String queryString = "SELECT {value} from {BHGEGlobalProperties} where {uid}='" + CustomerClassListForEndUserDiscount
				+ "'";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		query.setResultClassList(Arrays.asList(String.class));
		final SearchResult<String> results = flexibleSearchService.search(query);
		final String result = CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult().get(0) : null;
		return StringUtils.isNotBlank(result) ? Arrays.asList(result.split(",")) : new ArrayList<String>();

	}

	@Override
	public SAPSalesOrganizationModel getCategoriesFromSalesOrg(String salesOrg ,String distributionChannel,String division) {
        String FETCH_CATEGORIES_FROM_SALES_ORG =
                "SELECT {" + SAPSalesOrganizationModel.PK + "} " +
                        "FROM {" + SAPSalesOrganizationModel._TYPECODE + "} " +
                        "WHERE {" + SAPSalesOrganizationModel.SALESORGANIZATION + "} = ?salesOrg " +
                        "AND ( {" + SAPSalesOrganizationModel.DISTRIBUTIONCHANNEL + "} = ?distributionChannel OR ?distributionChannel = '' ) " +
                        "AND ( {" + SAPSalesOrganizationModel.DIVISION + "} = ?division OR ?division = '' )";
        //changing to fetch categories by division and distribution channel
		//final String FETCH_CATEGORIES_FROM_SALES_ORG = "SELECT {"+ SAPSalesOrganizationModel.PK + "} FROM {"+SAPSalesOrganizationModel._TYPECODE+"} WHERE {"+SAPSalesOrganizationModel.SALESORGANIZATION +"} = ?salesOrg";
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_CATEGORIES_FROM_SALES_ORG);
			fQuery.addQueryParameter("salesOrg", salesOrg);
            if(null != distributionChannel) {
                fQuery.addQueryParameter("distributionChannel", distributionChannel);
            }
            if(null != division) {
                fQuery.addQueryParameter("division", division);
            }
			final SearchResult<SAPSalesOrganizationModel> querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null) {
				return querysearchResult.getResult().get(0);
		}
		return null;
	}

	@Override
	public BHGERegieterCustomerModel getUserBySSO(final String inputSsoId)
	{
		LOG.info("getUserBySSO entry inputSsoId:-" + inputSsoId);
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery("select {pk} from {BHGERegieterCustomer} where lower({sso}) = lower(?inputSsoId)");
		fQuery.addQueryParameter("inputSsoId", inputSsoId);
		final SearchResult<BHGERegieterCustomerModel> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null) {
			LOG.info("getUserBySSO got results:-" + querysearchResult.getResult().get(0));
			return querysearchResult.getResult().get(0);
		}
		return null;
	}

	@Override
	public SearchPageData<B2BCustomerModel> getAllCustoomersForB2bUnits(final PageableData pageableData, String unitCustomerNumber, String searchTerm, List<String> filterRoles, String currentUserId, boolean isInternalUsers)
	{
		try {
			final Map<String, Object> params = new HashMap<String, Object>();
			params.put("unitCustomerNumber", unitCustomerNumber+"%");
			params.put("currentUserId",currentUserId);
			if(CollectionUtils.isEmpty(filterRoles))
			{
				filterRoles=new ArrayList<>();
				filterRoles.add("UG_ADMIN_ORDER_STORE");
				filterRoles.add("UG_VIEW_STORE");
			}
			params.put("filterRoles", filterRoles);
			StringBuilder query=new StringBuilder();
			query.append(FIND_B2BCUSTOMERS_IN_DESIRED_GROUPS);
			if(StringUtils.isNotEmpty(searchTerm))
			{
				query.append(SEARCH_QUERY);
				params.put("searchterm", "%"+searchTerm.toLowerCase()+"%");
			}
			query.append(INTERNAL_USERS_QUERY);
			params.put("isInternalUsers", BooleanUtils.isTrue(isInternalUsers) ? 1 : 0);
			query.append(GROUP_BY_CLAUSE);
			final List<SortQueryData> sortQueries = Arrays.asList(
					createSortQueryData("byNameAsc", query + " ORDER BY CustomerName asc"),
					createSortQueryData("byNameDsc", query + " ORDER BY CustomerName desc"),
					createSortQueryData("byRoleAsc", query + " ORDER BY groupsort asc"),
					createSortQueryData("byRoleDsc", query + " ORDER BY groupsort desc"));
			LOG.info("DE167905 getAllCustomersForB2bUnits query:" + query.toString());
			return pagedFlexibleSearchService.search(sortQueries, "byNameAsc",params, pageableData);
		} catch (Exception ex) {
			LOG.error("Error while executing Users query" + ex.getMessage());
		}
		return null;
	}

	@Override
	public SearchPageData<B2BUnitModel> getAllB2bUnits(PageableData pageableData, String searchTerm) {
		final Map<String, Object> params = new HashMap<>();
		params.put("ecommerceFlag", BhgeCoreConstants.Hybris_Status_E1);
		params.put("searchTerm", "%" + searchTerm.toLowerCase() + "%");
		return pagedFlexibleSearchService.search(ALL_B2bUnits, params, pageableData);
	}

	@Override
	public B2BUnitModel getB2bUnit(String searchTerm) {
		FlexibleSearchQuery fQuery = new FlexibleSearchQuery(B2BUNIT_SEARCH_QUERY);
		fQuery.addQueryParameter("ecommerceFlag", BhgeCoreConstants.Hybris_Status_E1);
		fQuery.addQueryParameter("searchTerm", "%" + searchTerm.toLowerCase() + "%");
		SearchResult<B2BUnitModel> searchResult = getFlexibleSearchService().search(fQuery);
		if (CollectionUtils.isNotEmpty( searchResult.getResult()) ) {
			return searchResult.getResult().get(0);
		}
		return null;
	}

	protected SortQueryData createSortQueryData(final String sortCode, final String query)
	{
		final SortQueryData result = new SortQueryData();
		result.setSortCode(sortCode);
		result.setQuery(query);
		return result;
	}
}
