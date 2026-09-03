/**
 *
 */
package com.bhge.facades.search.populator;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SearchQueryPageableData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchQueryData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchQueryTermData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.SolrSearchRequest;
import de.hybris.platform.commerceservices.search.solrfacetsearch.populators.SearchSolrQueryPopulator;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.solrfacetsearch.config.FacetSearchConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedType;
import de.hybris.platform.solrfacetsearch.search.QueryField;
import de.hybris.platform.solrfacetsearch.search.SearchQuery;
import de.hybris.platform.solrfacetsearch.search.SearchQuery.Operator;
import de.hybris.platform.solrfacetsearch.search.SearchQuery.QueryOperator;
import de.hybris.platform.util.Config;

import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;

import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.search.solrfacetsearch.data.BHGESolrSearchQueryData;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.facades.constants.BhgeFacadesConstants;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.store.services.BHGEBaseStoreService;
import de.hybris.platform.store.BaseStoreModel;
import org.apache.log4j.Logger;
import com.bhge.core.util.BHGESoldToUtil;

/**
 * @author 212695810 Custom class written for BUY/RETURN filters on front end
 *
 */
public class BHGESearchSolrQueryPopulator<INDEXED_PROPERTY_TYPE, INDEXED_TYPE_SORT_TYPE>
		extends SearchSolrQueryPopulator<INDEXED_PROPERTY_TYPE, INDEXED_TYPE_SORT_TYPE>
{
	private final static Logger LOG = Logger.getLogger(BHGESearchSolrQueryPopulator.class);
	
	@Resource(name = "userService")
	UserService userService;
	
	@Resource(name = "sessionService")
	SessionService sessionService;

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;
	
	@Resource(name = "bhgeSoldToUtil")
	BHGESoldToUtil bhgeSoldToUtil;


	@Override
	public void populate(final SearchQueryPageableData<SolrSearchQueryData> source,
			final SolrSearchRequest<FacetSearchConfig, IndexedType, INDEXED_PROPERTY_TYPE, SearchQuery, INDEXED_TYPE_SORT_TYPE> target)
	{
		BaseSiteModel currentSite = (BaseSiteModel) sessionService.getAttribute("currentSite");
		if(null !=currentSite ){
		   LOG.info("currentSite" + currentSite.getUid());
		}
		super.populate(source, target);
		if (source.getSearchQueryData() instanceof BHGESolrSearchQueryData)
		{
			final BHGESolrSearchQueryData solrQueryData = (BHGESolrSearchQueryData) source.getSearchQueryData();
			final List<String> salesAreas = new ArrayList<String>();
			if (StringUtils.isNotBlank(solrQueryData.getFilter())
					&& solrQueryData.getFilter().equalsIgnoreCase(BhgeFacadesConstants.BUY))
			{
				LOG.info("applyingBuyFilter");
				if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
				{
					// Applying BUY filter
					applyBUYFilter(target, salesAreas);

				}
				else if (userService.isAnonymousUser(userService.getCurrentUser()))
				{
					applyBUYFilterForGuestUser(target, salesAreas, solrQueryData);
				}
			}
			else if (StringUtils.isNotBlank(solrQueryData.getFilter())
					&& solrQueryData.getFilter().equalsIgnoreCase(BhgeFacadesConstants.RETURN))
			{
				if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
				{
					LOG.info("applyingReturnFilter");
					// Applying RETURN filter
					applyRETURNFilter(target, salesAreas);
				}
			}
			else if(userService.isAnonymousUser(userService.getCurrentUser()))
			{				
				String salesAreaId = solrQueryData.getGuestSalesArea();
				List<String> guestCode = new ArrayList<String>();
				guestCode.add("BUY");
				guestCode.add("GUESTUSER_BUY");
				guestCode.add("RFQ");
				guestCode.add("GUESTUSER_RFQ");
				final QueryField guestFilter = new QueryField("GUESTUSER_string_mv", Operator.OR,
						QueryOperator.CONTAINS, guestCode.toArray(new String[guestCode.size()]));
				target.getSearchQuery().addFilterQuery(guestFilter);
				final String sessionSalesOrg = sessionService.getAttribute("sessionSalesOrg");
				//final String sessionSalesOrg = bhgeSoldToUtil.getSalesAreaData() != null && StringUtils.isNotBlank(bhgeSoldToUtil.getSalesAreaData().getSalesOrg()) ? bhgeSoldToUtil.getSalesAreaData().getSalesOrg() : null;
				if(null != sessionSalesOrg)
				{
					final String buyAnonymousStatusforSalesOrg = sessionSalesOrg + "_" + BhgeFacadesConstants.BUY;
					final String catalogAnonymousStatusforSalesOrg = sessionSalesOrg + "_" + BhgeFacadesConstants.CATALOG;
					final String rfqAnonymousStatusforSalesOrg = sessionSalesOrg + "_" + BhgeFacadesConstants.RFQ;
					salesAreas.add(buyAnonymousStatusforSalesOrg);
					salesAreas.add(catalogAnonymousStatusforSalesOrg);
					salesAreas.add(rfqAnonymousStatusforSalesOrg);
					final QueryField anonymousSalesOrgStatusFilterQuery = new QueryField(
							"anonymousStatusWithSalesOrg_string_mv", Operator.OR, QueryOperator.CONTAINS,
							salesAreas.toArray(new String[salesAreas.size()]));
					target.getSearchQuery().addFilterQuery(anonymousSalesOrgStatusFilterQuery);
				}
				else
				{
					if(null != salesAreaId && StringUtils.isNotEmpty(salesAreaId))
					  {
						final String buyAnonymousStatusforSalesOrg = salesAreaId + "_" + BhgeFacadesConstants.BUY;
						final String catalogAnonymousStatusforSalesOrg = salesAreaId + "_" + BhgeFacadesConstants.CATALOG;
						final String rfqAnonymousStatusforSalesOrg = salesAreaId + "_" + BhgeFacadesConstants.RFQ;
						salesAreas.add(buyAnonymousStatusforSalesOrg);
						salesAreas.add(catalogAnonymousStatusforSalesOrg);
						salesAreas.add(rfqAnonymousStatusforSalesOrg);
						final QueryField anonymousBuySalesOrgStatusFilterQuery = new QueryField("anonymousStatusWithSalesOrg_string_mv", Operator.OR,
						QueryOperator.CONTAINS, salesAreas.toArray(new String[salesAreas.size()]));
						target.getSearchQuery().addFilterQuery(anonymousBuySalesOrgStatusFilterQuery);
					  }
				}
				 				 
			}
		}
	}


	/**
	 * Apply RETURN filter for guest user
	 *
	 * @param target
	 * @param salesAreas
	 */
	private void applyRETURNFilterForGuestUser(
			final SolrSearchRequest<FacetSearchConfig, IndexedType, INDEXED_PROPERTY_TYPE, SearchQuery, INDEXED_TYPE_SORT_TYPE> target,
			final List<String> salesAreas)
	{
		final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeFacadesConstants.GUEST_BASE_STORE_UID);
		final CountryModel countryModel = baseStoreModel.getDefaultCountry();
		final BHGEAnonymousUserCatalogModel anonymousUserCatalog = bhgeUserProfileDao
				.getCountryToUnitMappingForAnonymousUser(countryModel);
		final List<CategoryModel> allowedCategories = (List<CategoryModel>) anonymousUserCatalog.getCategories();
		final List<String> buyCategoryCode = new ArrayList<String>();
		if (null != allowedCategories)
		{
			for (final CategoryModel category : allowedCategories)
			{
				buyCategoryCode.add(category.getCode());
			}
		}
		final B2BUnitModel defaultB2BUnit = bhgeSoldToUtil.getDefaultB2BUnitModelCurrentUser();
		final String b2bUnitUidSplit[] = defaultB2BUnit.getUid().split("_");
		final String salesOrg = b2bUnitUidSplit[1];
		final String returnHybrisStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.RETURN;

		final QueryField filterQuery = new QueryField("hybrisStatusWithSalesAreas_string_mv", Operator.OR, QueryOperator.CONTAINS,
				salesAreas.toArray(new String[salesAreas.size()]));
		final QueryField categoryfilterQuery = new QueryField("categoryNameList_string_mv", Operator.OR, QueryOperator.CONTAINS,
				buyCategoryCode.toArray(new String[buyCategoryCode.size()]));

		target.getSearchQuery().addFilterQuery(categoryfilterQuery);
		target.getSearchQuery().addFilterQuery(filterQuery);

		final List<String> guestCode = new ArrayList<String>();
		guestCode.add("RMA");
		final QueryField guestFilter = new QueryField("GUESTUSER_string_mv", Operator.OR, QueryOperator.CONTAINS,
				guestCode.toArray(new String[guestCode.size()]));
		target.getSearchQuery().addFilterQuery(guestFilter);

	}


	/**
	 * Apply BUY filter for guest user
	 *
	 * @param target
	 * @param salesAreas
	 */
	private void applyBUYFilterForGuestUser(
			final SolrSearchRequest<FacetSearchConfig, IndexedType, INDEXED_PROPERTY_TYPE, SearchQuery, INDEXED_TYPE_SORT_TYPE> target,
			final List<String> salesAreas, final BHGESolrSearchQueryData solrQueryData)
	{	
		  String salesAreaId = solrQueryData.getGuestSalesArea();
		  List<String> guestCode = new ArrayList<String>(); 
		  guestCode.add("BUY");
		  guestCode.add("GUESTUSER_BUY");
		  guestCode.add("RFQ");
		  guestCode.add("GUESTUSER_RFQ");
		  final QueryField guestFilter = new QueryField("GUESTUSER_string_mv", Operator.OR, QueryOperator.CONTAINS, guestCode.toArray(new String[guestCode.size()]));
		  target.getSearchQuery().addFilterQuery(guestFilter);
		  
		  //final String sessionSalesOrg = bhgeSoldToUtil.getSalesAreaData() != null && StringUtils.isNotBlank(bhgeSoldToUtil.getSalesAreaData().getSalesOrg()) ? bhgeSoldToUtil.getSalesAreaData().getSalesOrg() : null;
		  final String sessionSalesOrg = sessionService.getAttribute("sessionSalesOrg");
		  if(null != sessionSalesOrg)
		  {
			  final String buyAnonymousStatusforSalesOrg = sessionSalesOrg + "_" + BhgeFacadesConstants.BUY; 
			  final String rfqAnonymousStatusforSalesOrg = sessionSalesOrg + "_" + BhgeFacadesConstants.RFQ;
			  salesAreas.add(buyAnonymousStatusforSalesOrg); 
			  salesAreas.add(rfqAnonymousStatusforSalesOrg); 
			  final QueryField anonymousBuySalesOrgStatusFilterQuery = new QueryField("anonymousStatusWithSalesOrg_string_mv", Operator.OR,
			  QueryOperator.CONTAINS, salesAreas.toArray(new String[salesAreas.size()]));
			  target.getSearchQuery().addFilterQuery(anonymousBuySalesOrgStatusFilterQuery);
		  }
		  else 
		  {
			  if(null != salesAreaId && StringUtils.isNotEmpty(salesAreaId))
			  {
				  final String buyAnonymousStatusforSalesOrg = salesAreaId + "_" + BhgeFacadesConstants.BUY; 
				  final String rfqAnonymousStatusforSalesOrg = salesAreaId + "_" + BhgeFacadesConstants.RFQ;
				  salesAreas.add(buyAnonymousStatusforSalesOrg); 
				  salesAreas.add(rfqAnonymousStatusforSalesOrg); 
				  final QueryField anonymousBuySalesOrgStatusFilterQuery = new QueryField("anonymousStatusWithSalesOrg_string_mv", Operator.OR,
				  QueryOperator.CONTAINS, salesAreas.toArray(new String[salesAreas.size()]));
				  target.getSearchQuery().addFilterQuery(anonymousBuySalesOrgStatusFilterQuery);
			  }
		  }
		 
	}


	/**
	 * Apply return filter on PLP
	 *
	 * @param target
	 * @param salesAreas
	 */
	private void applyRETURNFilter(
			final SolrSearchRequest<FacetSearchConfig, IndexedType, INDEXED_PROPERTY_TYPE, SearchQuery, INDEXED_TYPE_SORT_TYPE> target,
			final List<String> salesAreas)
	{
		final SalesAreaData sessionSalesAreaData = bhgeSoldToUtil.getSalesAreaData() != null ? bhgeSoldToUtil.getSalesAreaData() : null;
		GEEdgeCustomerModel user = (GEEdgeCustomerModel) userService.getCurrentUser();
		String recentB2bUnit = null != user.getDefaultB2BUnit() ? user.getDefaultB2BUnit().getUid() : "";
		LOG.info("RecentB2BUnit applyRETURNFilter "+user.getDefaultB2BUnit());
		String salesOrg = null;
		if(null != recentB2bUnit)
		{
			String[] b2BUnitArray = recentB2bUnit.split("_"); 
			if(b2BUnitArray.length >= 3)
			{
				salesOrg = b2BUnitArray[1];
			}
		}
		
		final String returnHybrisStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.RETURN;
		final String buyAndReturnHybrisStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.SELLANDRETURN;
		final String obsoleteHybrisStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.OBSOLETE;
		final String catalogHybrisStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.CATALOG;
		salesAreas.add(returnHybrisStatusWithSalesArea);
		salesAreas.add(buyAndReturnHybrisStatusWithSalesArea);
		final QueryField filterQuery = new QueryField("hybrisStatusWithSalesAreas_string_mv", Operator.OR, QueryOperator.EQUAL_TO,
				salesAreas.toArray(new String[salesAreas.size()]));
		target.getSearchQuery().addFilterQuery(filterQuery);
		//Material status filter query
		final List<String> materialStatusWithsalesAreas = new ArrayList<String>();
		
		final String p1MaterialStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.P1;
		final String p2MaterialStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.P2;
		final String p3MaterialStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.P3;
		final String p4MaterialStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.P4;
		final String bSMaterialStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.BS;
		final String soMaterialStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.SO;
		final String ccMaterialStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.CC;
		materialStatusWithsalesAreas.add(p1MaterialStatusWithSalesArea);
		materialStatusWithsalesAreas.add(p2MaterialStatusWithSalesArea);
		materialStatusWithsalesAreas.add(p3MaterialStatusWithSalesArea);
		materialStatusWithsalesAreas.add(p4MaterialStatusWithSalesArea);
		materialStatusWithsalesAreas.add(bSMaterialStatusWithSalesArea);
		materialStatusWithsalesAreas.add(soMaterialStatusWithSalesArea);
		materialStatusWithsalesAreas.add(ccMaterialStatusWithSalesArea);
		final QueryField materialStatusFilterQuery = new QueryField("materialStatusWithSalesAreas_string_mv", Operator.OR,
				QueryOperator.CONTAINS, materialStatusWithsalesAreas.toArray(new String[materialStatusWithsalesAreas.size()]));
		target.getSearchQuery().addFilterQuery(materialStatusFilterQuery);
	}


	/**
	 * Apply BUY filter on PLP
	 *
	 * @param target
	 * @param salesAreas
	 */
	private void applyBUYFilter(
			final SolrSearchRequest<FacetSearchConfig, IndexedType, INDEXED_PROPERTY_TYPE, SearchQuery, INDEXED_TYPE_SORT_TYPE> target,
			final List<String> salesAreas)
	{
		final SalesAreaData sessionSalesAreaData = bhgeSoldToUtil.getSalesAreaData() != null ? bhgeSoldToUtil.getSalesAreaData() : null;
		GEEdgeCustomerModel user = (GEEdgeCustomerModel) userService.getCurrentUser();
		String recentB2bUnit = null != user.getDefaultB2BUnit() ? user.getDefaultB2BUnit().getUid() : "";
		String salesOrg = null;
		String b2bUnitId = null;
		if(null != recentB2bUnit)
		{
			String[] b2BUnitArray = recentB2bUnit.split("_"); 
			if(b2BUnitArray.length >= 3)
			{
				b2bUnitId = b2BUnitArray[0];
				salesOrg = b2BUnitArray[1];
			}
		}
		LOG.info("RecentB2BUnit applyBUYFilter "+user.getDefaultB2BUnit());
		final String buyHybrisStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.SELL;
		final String buyAndReturnHybrisStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.SELLANDRETURN;
		final String obsoleteHybrisStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.OBSOLETE;
		final String catalogHybrisStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.CATALOG;
		salesAreas.add(buyHybrisStatusWithSalesArea);
		salesAreas.add(buyAndReturnHybrisStatusWithSalesArea);
		//Hybris status filter query
		final QueryField hybrisStatusFilterQuery = new QueryField("hybrisStatusWithSalesAreas_string_mv", Operator.OR,
				QueryOperator.EQUAL_TO, salesAreas.toArray(new String[salesAreas.size()]));
		target.getSearchQuery().addFilterQuery(hybrisStatusFilterQuery);
		//Allowed prod principals filter query
		
		target.getSearchQuery().addFilterQuery("visibleToGroups_string_mv", recentB2bUnit);
		//Material status filter query
		final List<String> materialStatusWithsalesAreas = new ArrayList<String>();
		final String p1MaterialStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.P1;
		final String p2MaterialStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.P2;
		final String p3MaterialStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.P3;
		final String soMaterialStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.SO;
		final String ccMaterialStatusWithSalesArea = salesOrg + "_" + BhgeFacadesConstants.CC;
		materialStatusWithsalesAreas.add(p1MaterialStatusWithSalesArea);
		materialStatusWithsalesAreas.add(p2MaterialStatusWithSalesArea);
		materialStatusWithsalesAreas.add(p3MaterialStatusWithSalesArea);
		materialStatusWithsalesAreas.add(soMaterialStatusWithSalesArea);
		materialStatusWithsalesAreas.add(ccMaterialStatusWithSalesArea);
		final QueryField materialStatusFilterQuery = new QueryField("materialStatusWithSalesAreas_string_mv", Operator.OR,
				QueryOperator.CONTAINS, materialStatusWithsalesAreas.toArray(new String[materialStatusWithsalesAreas.size()]));
		target.getSearchQuery().addFilterQuery(materialStatusFilterQuery);
	}
}
