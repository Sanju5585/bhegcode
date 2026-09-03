package com.bhge.core.search.provider.impl;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.core.model.user.UserGroupModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.solrfacetsearch.search.FacetSearchException;
import de.hybris.platform.solrfacetsearch.search.FacetSearchService;
import de.hybris.platform.solrfacetsearch.search.QueryField;
import de.hybris.platform.solrfacetsearch.search.SearchQuery.Operator;
import de.hybris.platform.solrfacetsearch.search.SearchQuery.QueryOperator;
import de.hybris.platform.solrfacetsearch.search.context.FacetSearchContext;
import de.hybris.platform.solrfacetsearch.search.context.FacetSearchListener;
import de.hybris.platform.store.BaseStoreModel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;
import com.bhge.core.forms.BHGEAdvacedSearchForm;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.core.util.BHGEAdvanceSearchUtil;
import com.bhge.store.services.BHGEBaseStoreService;


public class BHGESolrQueryPostProcessor implements FacetSearchListener
{
	@Resource(name = "userService")
	private UserService userService;


	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	@Resource
	private FacetSearchService facetSearchService;

	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource(name = "bhgeCommerceCategoryService")
	private BHGECommerceCategoryService bhgeCommerceCategoryService;

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	private static final Logger LOG = Logger.getLogger(BHGESolrQueryPostProcessor.class);

	private static final String SEARCH_PAGE_TEXT = "search";

	private static final String SELL="_SELL";
	private static final String RETURN = "_RETURN";
	private static final String SELLANDRETURN = "_SELLANDRETURN";
	private static final String CATALOG = "_CATALOG";
	private static final String OBSOLETE = "_OBSOLETE";


	/**
	 * @param code
	 * @return
	 */
	private String prepareExactMatchCondition(final String code)
	{
		final StringBuilder condition = new StringBuilder();
		condition.append("(");
		condition.append("\"");
		condition.append(StringUtils.trim(code));
		condition.append("\"");
		condition.append(")");
		return condition.toString();
	}


	@Override
	public void afterSearch(final FacetSearchContext arg0) throws FacetSearchException
	{
		LOG.info("After search" + arg0);

	}


	@Override
	public void afterSearchError(final FacetSearchContext arg0) throws FacetSearchException
	{
		LOG.info("Error after search" + arg0.getStatus());

	}


	@SuppressWarnings("deprecation")
	@Override
	public void beforeSearch(final FacetSearchContext context) throws FacetSearchException
	{
		final HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();

		Boolean isAdvanceSearch = Boolean.FALSE;
		isAdvanceSearch = (Boolean) request.getAttribute("isAdvanceSearch");

		final BHGEAdvacedSearchForm advacedSearchForm = (BHGEAdvacedSearchForm) request.getAttribute("bhgeAdvacedSearchFormData");

		if (null != advacedSearchForm && isAdvanceSearch.booleanValue() && null != advacedSearchForm.getGlobalSearchOperatorType())
		{
			final StringBuilder advSolrQuery = new StringBuilder();
			final List<String> solrSearch = new LinkedList<>();

			final String codeSolrQuery = BHGEAdvanceSearchUtil.filterProductAttributes(advacedSearchForm.getBhgeAdvanceSearchRow(),
					BHGEAdvanceSearchUtil.CODE, advacedSearchForm.getGlobalSearchOperatorType());
			if (null != codeSolrQuery && StringUtils.isNotEmpty(codeSolrQuery))
			{
				solrSearch.add(codeSolrQuery);
			}

			final String nameSolrQuery = BHGEAdvanceSearchUtil.filterProductAttributes(advacedSearchForm.getBhgeAdvanceSearchRow(),
					BHGEAdvanceSearchUtil.NAME, advacedSearchForm.getGlobalSearchOperatorType());
			if (null != nameSolrQuery && StringUtils.isNotEmpty(nameSolrQuery))
			{
				solrSearch.add(nameSolrQuery);
			}
			final String descSolrQuery = BHGEAdvanceSearchUtil.filterProductAttributes(advacedSearchForm.getBhgeAdvanceSearchRow(),
					BHGEAdvanceSearchUtil.DESCRIPTION, advacedSearchForm.getGlobalSearchOperatorType());
			if (null != descSolrQuery && StringUtils.isNotEmpty(descSolrQuery))
			{
				solrSearch.add(descSolrQuery);
			}

			final String hierarchySolrQuery = BHGEAdvanceSearchUtil.filterProductAttributes(
					advacedSearchForm.getBhgeAdvanceSearchRow(), BHGEAdvanceSearchUtil.HIERARCHY,
					advacedSearchForm.getGlobalSearchOperatorType());
			if (null != hierarchySolrQuery && StringUtils.isNotEmpty(hierarchySolrQuery))
			{
				solrSearch.add(hierarchySolrQuery);
			}
			for (int i = 0; i < solrSearch.size(); i++)
			{
				if (i < solrSearch.size() - 1)
				{
					advSolrQuery.append(" ");
					advSolrQuery.append(solrSearch.get(i));
					advSolrQuery.append(" ");
					advSolrQuery.append(advacedSearchForm.getGlobalSearchOperatorType());
					advSolrQuery.append(" ");
				}
				else
				{
					advSolrQuery.append(solrSearch.get(i));
				}
			}
			context.getSearchQuery().addFilterRawQuery(advSolrQuery.toString().trim());
			LOG.info("The solr Query generated is " + advSolrQuery.toString().trim());
		}

		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		if (baseStore != null)
		{
			final String productCatalog = baseStore.getCatalogs().get(0).getId();
			context.getSearchQuery().addFilterQuery("catalogId", productCatalog);
		}

		final String frequency = request.getParameter("frequency");
		final String diameter = request.getParameter("diameter");
		if (frequency != null && !frequency.isEmpty())
		{
			context.getSearchQuery().addFilterQuery("FREQUENCY_string_mv", frequency);
		}
		if (diameter != null && !diameter.isEmpty())
		{
			context.getSearchQuery().addFilterQuery("ELEMENTSIZE_string_mv", diameter);
		}

		final UserModel user = userService.getCurrentUser();
		final List<String> salesAreas = new ArrayList<String>();
		if (user instanceof GEEdgeCustomerModel)
		{
			final GEEdgeCustomerModel geEdgeCustomer = (GEEdgeCustomerModel) user;
			//Adding sales area filter query
			final Set<PrincipalModel> b2bUnitMembers = geEdgeCustomer.getDefaultSoldTo().getMembers();
			for (final PrincipalModel b2bUnitGroup : b2bUnitMembers)
			{
				if (b2bUnitGroup instanceof B2BUnitModel)
				{
					final String[] splitB2BUnit = b2bUnitGroup.getUid().split("_");
					if (splitB2BUnit.length > 1)
					{
						salesAreas.add(splitB2BUnit[1]);
					}
				}
			}
			final QueryField filterQuery = new QueryField("salesAreas_string_mv", Operator.OR, QueryOperator.CONTAINS,
					salesAreas.toArray(new String[salesAreas.size()]));
			context.getSearchQuery().addFilterQuery(filterQuery);

			final UserGroupModel userGroup = userService.getUserGroupForUID("bhgefptb2busergroup");
			final CategoryModel category = bhgeCommerceCategoryService.getCategoryForCode("ECOM_LVL0_00000000");
			final List<String> fptCategories = new ArrayList<String>();
			final List<String> nonfptCategories = new ArrayList<String>();
			final String fptCategoriesInSystem = bhgeUserProfileDao.getFPTCategoriesListForUser();
			final List<String> fptCategoryCodes = StringUtils.isNotBlank(fptCategoriesInSystem)
					? Arrays.asList(fptCategoriesInSystem.split(","))
					: new ArrayList<String>();
			for (final CategoryModel subCat : category.getCategories())
			{
				if (fptCategoryCodes.contains(subCat.getCode()))
				{
					fptCategories.add(subCat.getCode());
				}
				else
				{
					nonfptCategories.add(subCat.getCode());
				}
			}
			//FPT filter
			if (geEdgeCustomer.getGroups().contains(userGroup))
			{
				final QueryField fptFilterQuery = new QueryField("allCategories", Operator.OR, QueryOperator.CONTAINS,
						fptCategories.toArray(new String[fptCategories.size()]));
				context.getSearchQuery().addFilterQuery(fptFilterQuery);
			}
			else
			{
				final QueryField nonFptFilterQuery = new QueryField("allCategories", Operator.OR, QueryOperator.CONTAINS,
						nonfptCategories.toArray(new String[nonfptCategories.size()]));
				context.getSearchQuery().addFilterQuery(nonFptFilterQuery);
			}

			final String[] defaultParentB2BUnit = StringUtils.split(geEdgeCustomer.getDefaultB2BUnit().getUid(), "_");
			if (defaultParentB2BUnit != null && defaultParentB2BUnit.length >= 3) {
				LOG.info("defaultB2BUnit: "+defaultParentB2BUnit.toString());
				String salesOrg = defaultParentB2BUnit[1];
				LOG.info("defaultSalesOrg: "+salesOrg);
				String filterQueryForSalesArea = "hybrisStatusWithSalesAreas_string_mv:"+salesOrg+SELL
						+ " OR hybrisStatusWithSalesAreas_string_mv:"+salesOrg+RETURN
						+ " OR hybrisStatusWithSalesAreas_string_mv:"+salesOrg+SELLANDRETURN
						+ " OR hybrisStatusWithSalesAreas_string_mv:"+salesOrg+CATALOG
						+ " OR hybrisStatusWithSalesAreas_string_mv:"+salesOrg+OBSOLETE;
				LOG.info("search restriction Filter Query: "+ filterQueryForSalesArea);
				context.getSearchQuery().addFilterRawQuery(filterQueryForSalesArea);
				context.getSearchQuery().addFilterRawQuery("!ne_plants_string_mv:" + salesOrg);
			}
		}
		/*
		 * else if (userService.isAnonymousUser(user)) {
		 * context.getSearchQuery().addFilterQuery("anonymousSellable_boolean", "true"); }
		 */
		//		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
//		final String currentSalesArea = currentUser.getDefaultB2BUnit().getUid().split("_")[1];
		if (null != JaloSession.getCurrentSession().getAttribute("rma_search")) {
			if ((Boolean) JaloSession.getCurrentSession().getAttribute("rma_search")) {
				context.getSearchQuery().addFilterRawQuery("returnSalesOrg_string_mv:*RETURN*");
			}
		}
	}
}
