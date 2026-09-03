/**
 *
 */
package com.bhge.core.user.daos.impl;

import com.bhge.core.model.*;
import com.hybris.ge.edge.core.jalo.type.BHGECustomerClassification;
import com.hybris.ge.edge.core.model.type.BHGECustomerClassificationModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.catalog.model.CatalogModel;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.RegionModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.servicelayer.util.ServicesUtil;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;


import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.model.BHGECategorytoSalesOrgModel;
import com.bhge.core.model.BHGECurrencyFormatModel;
import com.bhge.core.model.ContactusSettingsModel;
//import com.bhge.core.model.GEEdgeCurrencyFormatModel;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.core.util.BHGEProductUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.facades.user.data.GetAddressFormData;
import com.bhge.product.service.BHGEProductService;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import com.bhge.store.services.BHGEBaseStoreService;


@Component(value = "userProfileDao")
public class DefaultBHGEUserProfileDao implements BHGEUserProfileDao
{

	private static final Logger LOG = Logger.getLogger(DefaultBHGEUserProfileDao.class);


	private static final String ONLINE_CATALOG = "Online";
	private static final String FETCH_USER_ACCESS_REQUEST = "select {ac.pk} from {BHGEUserAccessRequest as ac JOIN BHGERegieterCustomer as r ON {r.pk}={ac.requesterId}} where {r.uid} = ?uid";
	private static final String FETCH_REGISTER_CUSTOMER_FROM_SSO = "select {r.pk} from {BHGERegieterCustomer as r} where {r.sso} = ?sso";
	private static final String FETCH_REGISTER_CUSTOMER_FROM_UID = "select {r.pk} from {BHGERegieterCustomer as r} where {r.uid} = ?uid";
	private static final String FETCH_USER_ACCESS_REQUEST_APPACCESSLEVEL = "SELECT {USR.PK} from {BHGERegieterCustomer AS C \r\n"
			+ "                 JOIN BHGEUserAccessRequest AS USR ON {C.PK} = {USR.requesterId}\r\n"
			+ "                 JOIN BHGEApprovalDetails AS AD ON {USR.approverDetails}={AD.PK}\r\n"
			+ "                 JOIN BHGEAppAccessLevel AS AL ON {AD.appAccessLevel}={AL.PK} \r\n"
			+ "                 JOIN BHGEApplicationDetails AS APD ON {AL.applicationInfo}={APD.PK}} \r\n"
			+ "                 WHERE {C.UID}=?uid AND {APD.applicationId}=?appAccessId";

	private static final String SSO = "sso";
	private static final String UID = "uid";
	private static final String APPACCESSID = "appAccessId";
	private static final String GUEST_CATEGORIES = "guestCategories";
	private static final String FPT_CATEGORIES = "fptCategories";
	private static final String DEFAULT_GUEST_COUNTRY_CODE = "US";

	private static final String PARENT_B2BUNITS_EMPTY_CUSTOMER_CLASSIFICATION = """
			SELECT {b2b:PK}
			FROM {B2BUnit as b2b}
			WHERE {b2b:customerClass} IS NOT NULL AND {b2b:customerClassification} IS NULL
			""";
	private static final String CUSTOMER_CLASSFICIATION = """
			SELECT {class:pk}
			FROM {BHGECustomerClassification as class}
			WHERE {class:code} = ?code
			""";

    private static final String FIND_BY_SALESORG_AND_CURRENCY_STRING =
            "SELECT {s:pk} " +
                    "FROM { SapSalesOrganization AS s } " +
                    "WHERE {s:salesOrganization} = ?salesOrg " +
					" AND {s:distributionChannel} = ?distChannel " +
                    "  AND {s:currency} = ?iso " +
                    "  AND {s:limit} IS NOT NULL " +
                    "  AND {s:charge} IS NOT NULL";
    @Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	@Resource(name = "productService")
	private BHGEProductService productService;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;
	
	@Autowired
	private BHGESoldToUtil bhgeSoldToUtil;

	@Override
	public List<GEEdgeCustomerModel> findCurrentUserProfile(final String uid)
	{
		final String queryString = "SELECT {c:pk} FROM {" + GEEdgeCustomerModel._TYPECODE + " AS c} WHERE {c:uid}=?uid ";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("uid", uid);
		query.addQueryParameters(params);
		return flexibleSearchService.<GEEdgeCustomerModel> search(query).getResult();
	}

	@Override
	public List<B2BUnitModel> findSoldTo(final String text, final String soldtos)
	{
		final UserModel user = userService.getCurrentUser();
		// userService.setCurrentUser(userService.getAnonymousUser());

		final String queryString = "SELECT distinct pk from ({{SELECT {b2b." + B2BUnitModel.PK + "} FROM {" + B2BUnitModel._TYPECODE
				+ " as b2b JOIN " + AddressModel._TYPECODE + " as add ON ((((UPPER({add." + AddressModel.POSTALCODE + "}) like '%"
				+ text.toUpperCase() + "%' and {add." + AddressModel.BILLINGADDRESS + "}= 1 AND {b2b." + B2BUnitModel.PK + "}={add."
				+ AddressModel.OWNER + "}) OR (((UPPER({b2b." + B2BUnitModel.UID + "}) like '%" + text.toUpperCase()
				+ "%')) OR (UPPER({b2b." + B2BUnitModel.LOCNAME + "}) like '%" + text.toUpperCase() + "%'))) AND {b2b."
				+ B2BUnitModel.UID + "} IN (" + soldtos + ")) )}}})";

		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("text", text);
		params.put("soldtos", soldtos);
		query.addQueryParameters(params);
		final List<B2BUnitModel> listOfB2Bunit = flexibleSearchService.<B2BUnitModel> search(query).getResult();
		userService.setCurrentUser(user);
		return listOfB2Bunit;
	}


	@Override
	public List<B2BUnitModel> findChildB2BUnitModel(final String uid)
	{
		final UserModel currentUser = userService.getCurrentUser();
		// userService.setCurrentUser(userService.getAnonymousUser());
		final Map<String, Object> params = new HashMap<String, Object>();
		final String queryString = "SELECT {b:pk} FROM {" + B2BUnitModel._TYPECODE + " AS b} WHERE {b:uid} = ?data";

		params.put("data", uid);
		final SearchResult<B2BUnitModel> searchResult = flexibleSearchService.search(queryString, params);
		final List<B2BUnitModel> b2bUnitModelList = searchResult.getResult();
		userService.setCurrentUser(currentUser);
		return b2bUnitModelList;
	}

	@Override
	public List<B2BUnitModel> getAllChildB2BUnitModel(final String uid)
	{
		final UserModel currentUser = userService.getCurrentUser();
		// userService.setCurrentUser(userService.getAnonymousUser());
		final Map<String, Object> params = new HashMap<String, Object>();
		final String queryString = "SELECT {b:pk} FROM {" + B2BUnitModel._TYPECODE + " AS b} WHERE {b:uid} like '%" + uid + "%'";

		params.put("data", uid);
		final SearchResult<B2BUnitModel> searchResult = flexibleSearchService.search(queryString, params);
		final List<B2BUnitModel> b2bUnitModelList = searchResult.getResult();
		userService.setCurrentUser(currentUser);
		return b2bUnitModelList;
	}

	@Override
	public ProductModel getProductForCode(final String code)
	{
		try
		{
			String catalogId = "";
			final UserModel user = userService.getCurrentUser();
			String salesArea = null;
			if (null != user && user instanceof GEEdgeCustomerModel && null != ((GEEdgeCustomerModel) user).getDefaultB2BUnit())
			{
				salesArea = ((GEEdgeCustomerModel) user).getDefaultB2BUnit().getUid();
			}

			final String catalogVersion = ONLINE_CATALOG;
			final CatalogModel catalog = baseStoreService.getProductCatalog(baseStoreService.getCurrentBaseStore());
			if (null != catalog)
			{
				catalogId = catalog.getPk().toString();
			}

			final Map<String, Object> params = new HashMap<String, Object>();
			String query = null;

			if (null != catalog)
			{
				query = "select {PK} from {" + ProductModel._TYPECODE + "} where LOWER({code}) = ?code AND {catalog} = ?catalog";

				if (StringUtils.isNotBlank(query))
				{
					if (null != code && code.contains("&quot;"))
					{
						params.put("code", StringUtils.lowerCase(StringEscapeUtils.unescapeHtml4(code)));
					}
					else
					{
						params.put("code", StringUtils.lowerCase(code));
					}
					params.put("catalog", catalogId);
					final SearchResult<ProductModel> searchResult = flexibleSearchService.search(query, params);
					if (null != searchResult)
					{
						final List<ProductModel> productModelList = searchResult.getResult();

						if (productModelList != null && productModelList.size() > 0)
						{
							for (final ProductModel product : productModelList)
							{

								if (product instanceof GEEdgeProductModel)
								{
									final GEEdgeProductModel geedgeProductModel = (GEEdgeProductModel) product;
									if (HybrisStatus.NOSELL.equals(geedgeProductModel.getHybrisStatus()))
									{
										final BHGEProductUtil productUtil = new BHGEProductUtil();
										if (HybrisStatus.NOSELL.equals(productUtil.getHybrisStatusForCurrentSalesArea(geedgeProductModel,
												sessionService, userService)))
										{
											continue;
										}
									}

									if (null != product.getCatalogVersion())
									{
										final String productsCatalogVersion = product.getCatalogVersion().getVersion();
										if (StringUtils.isNotBlank(salesArea) && StringUtils.isNotBlank(productsCatalogVersion)
												&& catalogVersion.equals(productsCatalogVersion))
										{
											return product;
										}
										else if (StringUtils.isBlank(salesArea) && StringUtils.isNotBlank(productsCatalogVersion)
												&& catalogVersion.equals(productsCatalogVersion))
										{
											return product;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		catch (final RuntimeException re)
		{
			LOG.error("Exception in DefaultBHGEUserProfileDao - getProductForCode method ");
		}
		return null;
	}
	
	//Added for spartacus migration
	@Override
	public ProductModel getProductForCodeWs(final String code, BHGESoldToUtil bhgeSoldToUtil)
	{
		try
		{
			String catalogId = "";
			final UserModel user = userService.getCurrentUser();
			String salesArea = null;
			if (null != user && user instanceof GEEdgeCustomerModel && null != ((GEEdgeCustomerModel) user).getDefaultB2BUnit())
			{
				salesArea = ((GEEdgeCustomerModel) user).getDefaultB2BUnit().getUid();
			}

			final String catalogVersion = ONLINE_CATALOG;
			final CatalogModel catalog = baseStoreService.getProductCatalog(baseStoreService.getCurrentBaseStore());
			if (null != catalog)
			{
				catalogId = catalog.getPk().toString();
			}

			final Map<String, Object> params = new HashMap<String, Object>();
			String query = null;

			if (null != catalog)
			{
				query = "select {PK} from {" + ProductModel._TYPECODE + "} where LOWER({code}) = ?code AND {catalog} = ?catalog";

				if (StringUtils.isNotBlank(query))
				{
					if (null != code && code.contains("&quot;"))
					{
						params.put("code", StringUtils.lowerCase(StringEscapeUtils.unescapeHtml4(code)));
					}
					else
					{
						params.put("code", StringUtils.lowerCase(code));
					}
					params.put("catalog", catalogId);
					final SearchResult<ProductModel> searchResult = flexibleSearchService.search(query, params);
					if (null != searchResult)
					{
						final List<ProductModel> productModelList = searchResult.getResult();

						if (productModelList != null && productModelList.size() > 0)
						{
							for (final ProductModel product : productModelList)
							{

								if (product instanceof GEEdgeProductModel)
								{
									final GEEdgeProductModel geedgeProductModel = (GEEdgeProductModel) product;
									if (HybrisStatus.NOSELL.equals(geedgeProductModel.getHybrisStatus()))
									{
										final BHGEProductUtil productUtil = new BHGEProductUtil();
										if (HybrisStatus.NOSELL.equals(productUtil.getHybrisStatusForCurrentSalesAreaForWS(geedgeProductModel,
												userService, bhgeSoldToUtil)))
										{
											continue;
										}
									}

									if (null != product.getCatalogVersion())
									{
										final String productsCatalogVersion = product.getCatalogVersion().getVersion();
										if (StringUtils.isNotBlank(salesArea) && StringUtils.isNotBlank(productsCatalogVersion)
												&& catalogVersion.equals(productsCatalogVersion))
										{
											return product;
										}
										else if (StringUtils.isBlank(salesArea) && StringUtils.isNotBlank(productsCatalogVersion)
												&& catalogVersion.equals(productsCatalogVersion))
										{
											return product;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		catch (final RuntimeException re)
		{
			LOG.error("Exception in DefaultBHGEUserProfileDao - getProductForCode method ");
		}
		return null;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.user.daos.BHGEUserProfileDao#retriveAllCurrencyFormats()
	 */
	@Override
	public List<BHGECurrencyFormatModel> retriveAllCurrencyFormats()
	{
		final String query = "SELECT {pk} FROM {" + BHGECurrencyFormatModel._TYPECODE + "}";
		final SearchResult<BHGECurrencyFormatModel> searchResults = flexibleSearchService.search(query);
		if (searchResults != null)
		{

			return searchResults.getResult();

		}
		return Collections.EMPTY_LIST;
	}

	@Override
	public SearchPageData<AddressModel> getShippingAddressesForMyAccountPage(final GetAddressFormData form,
			final boolean isAccountPage)
	{
		final String pageSize = form.getPageSize();
		final String pageNo = form.getPageNo();
		final String b2bUnitUid = form.getB2bUnit();

		final UserModel currentUser = userService.getCurrentUser();
		// userService.setCurrentUser(userService.getAnonymousUser());
		final Map<String, Object> params = new HashMap<String, Object>();



		if (b2bUnitUid.isEmpty())
		{
			return new SearchPageData<AddressModel>();
		}

		final StringBuilder sb = new StringBuilder();
		sb.append(b2bUnitUid);
		if (!isAccountPage)
		{
			final String userSalesRegion = userProfileService.getUserDefaultSalesRegion();
			if (StringUtils.isNotBlank(userSalesRegion) && StringUtils.isNotEmpty(userSalesRegion))
			{
				sb.append("_").append(userSalesRegion);
			}
		}

		String queryString = "SELECT {AD.pk} " + "FROM {" + AddressModel._TYPECODE
				+ " AS AD JOIN B2BUnit AS BU ON {AD.owner}={BU.pk} " + "JOIN " + CountryModel._TYPECODE
				+ " AS CNY ON {CNY.PK}= {AD.COUNTRY} " + "LEFT JOIN " + RegionModel._TYPECODE + " AS REG ON {REG.PK}= {AD.REGION}} "
				+ "WHERE {AD.shippingAddress}=?shippingAddress " + "AND  {AD.sapCustomerID} IS NOT NULL " + "AND {BU.uid}= ?soldToId "
				+ "AND (UPPER({AD.postalcode}) LIKE ?zipCode " + "OR  UPPER({AD.COMPANY}) LIKE ?zipCode "
				+ "OR  UPPER({AD.STREETNAME}) LIKE ?zipCode " + "OR  UPPER({AD.TOWN}) LIKE ?zipCode "
				+ "OR  UPPER({REG.NAME}) LIKE ?zipCode " + "OR  UPPER({CNY.NAME}) LIKE ?zipCode "
				+ "OR  UPPER({CNY.ISOCODE}) LIKE ?zipCode " + "OR {AD.sapCustomerID} LIKE ?zipCode) ";


		//Sorting Logic
		if (form.getState() != null && form.getState().equals("stateAsc"))
		{
			queryString = queryString + "ORDER BY {REG.NAME} ASC";
		}
		else if (form.getState() != null && form.getState().equals("stateDesc"))
		{
			queryString = queryString + "ORDER BY {REG.NAME} DESC";
		}
		if (form.getState() != null && form.getState().equals("streetAsc"))
		{
			queryString = queryString + "ORDER BY {AD.STREETNAME} ASC";
		}
		else if (form.getState() != null && form.getState().equals("streetDesc"))
		{
			queryString = queryString + "ORDER BY {AD.STREETNAME} DESC";
		}
		else if (form.getState() != null && form.getState().equals("countryAsc"))
		{
			queryString = queryString + "ORDER BY {CNY.NAME} ASC";
		}
		else if (form.getState() != null && form.getState().equals("countryDesc"))
		{
			queryString = queryString + "ORDER BY {CNY.NAME} DESC";
		}
		else if (form.getState() != null && form.getState().equals("zipAsc"))
		{
			queryString = queryString + "ORDER BY {AD.POSTALCODE} ASC";
		}
		else if (form.getState() != null && form.getState().equals("zipDesc"))
		{
			queryString = queryString + "ORDER BY {AD.POSTALCODE} DESC";
		}
		else if (form.getState() != null && form.getState().equals("townAsc"))
		{
			queryString = queryString + "ORDER BY {AD.TOWN} ASC";
		}
		else if (form.getState() != null && form.getState().equals("townDesc"))
		{
			queryString = queryString + "ORDER BY {AD.TOWN} DESC";
		}
		else if (form.getState() != null && form.getState().equals("companyAsc"))
		{
			queryString = queryString + "ORDER BY {AD.COMPANY} ASC";
		}
		else if (form.getState() != null && form.getState().equals("companyDesc"))
		{
			queryString = queryString + "ORDER BY {AD.COMPANY} DESC";
		}

		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);

		params.put("shippingAddress", Boolean.TRUE);
		params.put("soldToId", sb.toString());
		if (null != form.getZipCode())
		{
			params.put("zipCode", "%" + form.getZipCode().toUpperCase() + "%");
		}
		params.put("companyName", "%" + form.getZipCode() + "%");
		query.addQueryParameters(params);

		final int pageSizeVal = Integer.parseInt(pageSize);
		final int pageNumberVal = Integer.parseInt(pageNo);
		final int startNumber = pageSizeVal * pageNumberVal;

		query.setCount(pageSizeVal);
		query.setStart(startNumber);
		query.setNeedTotal(true);

		final SearchResult<AddressModel> results = flexibleSearchService.search(query);
		final List<AddressModel> addressModelList = results.getResult();

		final SearchPageData<AddressModel> resultData = new SearchPageData<AddressModel>();
		resultData.setResults(addressModelList);

		final PaginationData pagination = new PaginationData();

		final double totalCount = results.getTotalCount();
		final double temp = totalCount / Double.parseDouble(pageSize);
		final int noOfPages = (int) Math.ceil(temp);

		pagination.setNumberOfPages(noOfPages);
		pagination.setTotalNumberOfResults(results.getTotalCount());
		pagination.setCurrentPage(pageNumberVal);
		pagination.setPageSize(pageSizeVal); // Setting the page size which is same across all the pages in this pagination.
		LOG.info("Inside getShippingAddressesForMyAccountPage - and Page size is " + pageSizeVal);
		resultData.setPagination(pagination);

		userService.setCurrentUser(currentUser);

		return resultData;

	}

	@Override
	public List<ContactusSettingsModel> getContactUsFromBaseStoreUid(final String basestoreid, final String supportteam)
	{
		//final String queryString = "select {cs.pk} from {ContactusSettings AS cs join GEEdgeBaseStore2ContactUsMapping AS gc on {gc.target}={cs.pk} join basestore as bs on {gc.source}={bs.pk} join GEEdgeSupportTeam as gt on {gt.pk}={cs.supportTeam}} where {bs.uid}=?basestore AND {gt.code} = ?supportteam";

		//final String queryString = "select {cs.pk} from {ContactusSettings AS cs join GEEdgeBaseStore2ContactUsMapping AS gc on {gc.target}={cs.pk} join basestore as bs on {gc.source}={bs.pk} join GEEdgeSupportTeam as gt on {gt.pk}={cs.supportTeam}} where {bs.uid}=?basestore AND {gt.code} = ?supportteam";


		String queryString = "select {cs.pk} from {ContactusSettings AS cs join basestore as bs on {cs.basestore}={bs.pk} join GEEdgeSupportTeam as gt on {cs.supportTeam} = {gt.pk} join GEEdgeContactUsRegion as reg on {cs.contactUsRegion} = {reg.pk}}";
		if (basestoreid != null)
		{
			queryString = queryString + " where {bs.uid}=?basestore AND {gt.code} = ?supportteam";
		}

		queryString = queryString + " order by {reg.name}";


		//final String queryString = "select {cs.pk} from {ContactusSettings AS cs join GEEdgeBaseStore2ContactMapping AS gc on {gc.target}={cs.pk} join basestore as bs on {gc.source}={bs.pk}} where {bs.uid}=?basestore";
		final List<ContactusSettingsModel> contactusSettingsModel = new ArrayList<ContactusSettingsModel>();
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("basestore", basestoreid);
		params.put("supportteam", supportteam);
		query.addQueryParameters(params);
		final SearchResult result = flexibleSearchService.search(query);
		if (result != null)
		{
			final Iterator itr = result.getResult().iterator();
			while (itr.hasNext())
			{
				contactusSettingsModel.add((ContactusSettingsModel) itr.next());
			}
			return contactusSettingsModel;
		}
		return contactusSettingsModel;
	}

	/**
	 * Returns ContactUs By Country
	 *
	 * @return
	 */
	@Override
	public List<ContactusSettingsModel> getContactUsByRegion(final String countryIsoCode)
	{
		final String queryString = "SELECT {CS.pk} FROM {ContactusSettings as CS JOIN GEEdgeContactUsRegion AS CR ON {CS.contactUsRegion}={CR.PK}} WHERE {CR.code}=?code";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("code", countryIsoCode);
		query.addQueryParameters(params);
		final SearchResult<ContactusSettingsModel> results = flexibleSearchService.search(query);
		return CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult() : null;
	}

	@Override
	public List<BHStaticContactUsModel> getStaticBHContactUsList()
	{
		String queryString = "select {scu.pk} from {BHStaticContactUs AS scu}";

		queryString = queryString + " order by {scu.commerceTypeValue} DESC";

		final List<BHStaticContactUsModel> bhStaticContactUsModelList = new ArrayList<BHStaticContactUsModel>();
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final SearchResult result = flexibleSearchService.search(query);
		if (result != null)
		{
			final Iterator itr = result.getResult().iterator();
			while (itr.hasNext())
			{
				bhStaticContactUsModelList.add((BHStaticContactUsModel) itr.next());
			}
			return bhStaticContactUsModelList;
		}
		return bhStaticContactUsModelList;
	}

	/**
	 * Returns ContactUs By Country
	 *
	 * @return
	 */
	@Override
	public List<ContactusSettingsModel> getContactUsByRegionAndCommerceTypeValue(final String countryIsoCode, final String commerceTypeValue)
	{
		final String queryString = "SELECT {CS.pk} FROM {ContactusSettings as CS JOIN GEEdgeContactUsRegion AS CR ON {CS.contactUsRegion}={CR.PK}} WHERE upper({CR.code})=upper(?code) AND upper({CS.commerceTypeValue})=upper(?commerceTypeValue)";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("code", countryIsoCode);
		params.put("commerceTypeValue", commerceTypeValue);
		query.addQueryParameters(params);
		final SearchResult<ContactusSettingsModel> results = flexibleSearchService.search(query);
		return CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult() : null;
	}

	@Override
	public List<ContactusSettingsModel> getContactUsForCurrentSoldto(final String basestoreid, final String supportteam,
			final String soldtoUid)
	{
		//final String queryString = "select {cs.pk} from {ContactusSettings AS cs join GEEdgeBaseStore2ContactUsMapping AS gc on {gc.target}={cs.pk} join basestore as bs on {gc.source}={bs.pk} join GEEdgeSupportTeam as gt on {gt.pk}={cs.supportTeam}} where {bs.uid}=?basestore AND {gt.code} = ?supportteam";

		//final String queryString = "select {cs.pk} from {ContactusSettings AS cs join GEEdgeBaseStore2ContactUsMapping AS gc on {gc.target}={cs.pk} join basestore as bs on {gc.source}={bs.pk} join GEEdgeSupportTeam as gt on {gt.pk}={cs.supportTeam}} where {bs.uid}=?basestore AND {gt.code} = ?supportteam";


		String queryString = "select {cs.pk} from {ContactusSettings AS cs join basestore as bs on {cs.basestore}={bs.pk} join GEEdgeSupportTeam as gt on {cs.supportTeam} = {gt.pk} join Country as con on {cs.contactUsCountry} = {con.pk} join B2BUnit as bu on {con.isoCode} = {bu.countryCP}}";
		if (basestoreid != null)
		{
			queryString = queryString + " where {bs.uid}=?basestore AND {gt.code} = ?supportteam AND {bu.uid}=?soldToId";
		}

		queryString = queryString + " order by {con.name}";


		//final String queryString = "select {cs.pk} from {ContactusSettings AS cs join GEEdgeBaseStore2ContactMapping AS gc on {gc.target}={cs.pk} join basestore as bs on {gc.source}={bs.pk}} where {bs.uid}=?basestore";
		final List<ContactusSettingsModel> contactusSettingsModel = new ArrayList<ContactusSettingsModel>();
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("basestore", basestoreid);
		params.put("supportteam", supportteam);
		params.put("soldToId", soldtoUid);
		query.addQueryParameters(params);
		final SearchResult result = flexibleSearchService.search(query);
		if (result != null)
		{
			final Iterator itr = result.getResult().iterator();
			while (itr.hasNext())
			{
				contactusSettingsModel.add((ContactusSettingsModel) itr.next());
			}
			return contactusSettingsModel;
		}
		return contactusSettingsModel;
	}


	@Override
	public List<ContactusSettingsModel> getContactUsFromBaseStoreUid(final String basestoreid, final String supportteam,
			final String orderCommerceType)
	{
		//final String queryString = "select {cs.pk} from {ContactusSettings AS cs join GEEdgeBaseStore2ContactUsMapping AS gc on {gc.target}={cs.pk} join basestore as bs on {gc.source}={bs.pk} join GEEdgeSupportTeam as gt on {gt.pk}={cs.supportTeam}} where {bs.uid}=?basestore AND {gt.code} = ?supportteam";

		//final String queryString = "select {cs.pk} from {ContactusSettings AS cs join GEEdgeBaseStore2ContactUsMapping AS gc on {gc.target}={cs.pk} join basestore as bs on {gc.source}={bs.pk} join GEEdgeSupportTeam as gt on {gt.pk}={cs.supportTeam}} where {bs.uid}=?basestore AND {gt.code} = ?supportteam";


		String queryString = "select {cs.pk} from {ContactusSettings AS cs join basestore as bs on {cs.basestore}={bs.pk} join GEEdgeSupportTeam as gt on {cs.supportTeam} = {gt.pk} join GEEdgeContactUsRegion as reg on {cs.contactUsRegion} = {reg.pk}}";
		if (basestoreid != null)
		{
			queryString = queryString
					+ " where {bs.uid}=?basestore AND {gt.code} = ?supportteam AND {cs.contactUsCommerceType} = ?orderCommerceType";
		}

		queryString = queryString + " order by {reg.name}";


		//final String queryString = "select {cs.pk} from {ContactusSettings AS cs join GEEdgeBaseStore2ContactMapping AS gc on {gc.target}={cs.pk} join basestore as bs on {gc.source}={bs.pk}} where {bs.uid}=?basestore";
		final List<ContactusSettingsModel> contactusSettingsModel = new ArrayList<ContactusSettingsModel>();
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("basestore", basestoreid);
		params.put("supportteam", supportteam);
		params.put("orderCommerceType", orderCommerceType);
		query.addQueryParameters(params);
		final SearchResult result = flexibleSearchService.search(query);
		if (result != null)
		{
			final Iterator itr = result.getResult().iterator();
			while (itr.hasNext())
			{
				contactusSettingsModel.add((ContactusSettingsModel) itr.next());
			}
			return contactusSettingsModel;
		}
		return contactusSettingsModel;
	}

	@Override
	public List<ContactusSettingsModel> getContactUsForSoldTo(final String soldToId, final String supportteam,
			final String orderType, final String orderCommerceType)
	{
		final String queryString;
		if (StringUtils.isNotBlank(orderType))
		{
			queryString = "SELECT {cs.pk} FROM {ContactusSettings AS cs join basestore as bs on {cs.basestore}={bs.pk} join GEEdgeSupportTeam as gt "
					+ "on {cs.supportTeam} = {gt.pk} join Country as con on {cs.contactUsCountry} = {con.pk} join B2BUnit as bu on {con.isoCode} = {bu.countryCP} "
					+ "join GEEdgeCartType as cartType on {cartType.pk}={cs.productLineType}} WHERE {bu.uid}=?soldToId AND {gt.code} = ?supportteam AND {cs.contactUsCommerceType} = ?orderCommerceType AND {cartType.code}=?orderType";
		}
		else
		{
			queryString = "select {cs.pk} from {ContactusSettings AS cs join basestore as bs on {cs.basestore}={bs.pk} join GEEdgeSupportTeam as gt "
					+ "on {cs.supportTeam} = {gt.pk} join Country as con on {cs.contactUsCountry} = {con.pk} join B2BUnit as bu on {con.isoCode} = {bu.countryCP}} "
					+ "where {bu.uid}=?soldToId AND {cs.contactUsCommerceType} = ?orderCommerceType AND {gt.code} = ?supportteam";

		}
		final List<ContactusSettingsModel> contactusSettingsModel = new ArrayList<ContactusSettingsModel>();
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("soldToId", soldToId);
		params.put("supportteam", supportteam);
		params.put("orderCommerceType", orderCommerceType);
		if (StringUtils.isNotBlank(orderType))
		{
			params.put("orderType", orderType);
		}
		query.addQueryParameters(params);
		final SearchResult result = flexibleSearchService.search(query);
		if (result != null)
		{
			final Iterator itr = result.getResult().iterator();
			while (itr.hasNext())
			{
				contactusSettingsModel.add((ContactusSettingsModel) itr.next());
			}
			return contactusSettingsModel;
		}
		return null;
	}

	@Override
	public List<AddressModel> getAddress(final String zipCode)
	{
		final UserModel currentUser = userService.getCurrentUser();
		// userService.setCurrentUser(userService.getAnonymousUser());
		final Map<String, Object> params = new HashMap<String, Object>();
		final BHGESoldToData bhgeSoldToData = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO);
		String b2bUnitUid = "";
		final String userSalesRegion = userProfileService.getUserDefaultSalesRegion();

		if (null != bhgeSoldToData)
		{
			b2bUnitUid = bhgeSoldToData.getUid();
		}

		if (b2bUnitUid.isEmpty())
		{
			return new ArrayList<AddressModel>();
		}

		final StringBuilder sb = new StringBuilder();
		sb.append(bhgeSoldToData.getUid());

		if (StringUtils.isNotBlank(userSalesRegion) && StringUtils.isNotEmpty(userSalesRegion))
		{
			sb.append("_");
			sb.append(userSalesRegion);
		}

		/*
		 * sb.append("_"); sb.append(Config.getString(GeCoreConstants.SALES_ORG, "1800")); sb.append("_");
		 * sb.append(Config.getString(GeCoreConstants.DISTR_CHAN, "GE")); sb.append("_");
		 * sb.append(Config.getString(GeCoreConstants.DIVISION, "GE"));
		 */

		final FlexibleSearchQuery query = new FlexibleSearchQuery("SELECT {AD.pk} FROM {" + AddressModel._TYPECODE + " AS AD JOIN "
				+ B2BUnitModel._TYPECODE
				+ " AS BU ON {AD.owner}={BU.pk} } WHERE {AD.shippingAddress}=?shippingAddress AND {BU.uid}= ?soldToId AND {AD.postalcode} LIKE ?zipCode");
		params.put("shippingAddress", Boolean.TRUE);
		params.put("soldToId", sb.toString());
		params.put("zipCode", zipCode + "%");
		query.addQueryParameters(params);
		final SearchResult<AddressModel> results = flexibleSearchService.search(query);
		final List<AddressModel> addressModelList = results.getResult();
		userService.setCurrentUser(currentUser);
		return addressModelList;

	}

	@Override
	public SearchPageData<AddressModel> getShippingAddresses(final GetAddressFormData form)
	{
		final String pageSize = form.getPageSize();
		final String pageNo = form.getPageNo();

		final UserModel currentUser = userService.getCurrentUser();
		// userService.setCurrentUser(userService.getAnonymousUser());
		final Map<String, Object> params = new HashMap<String, Object>();
		final BHGESoldToData bhgeSoldToData = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO);
		String b2bUnitUid = "";
		final String userSalesRegion = userProfileService.getUserDefaultSalesRegion();

		if (null != bhgeSoldToData)
		{
			b2bUnitUid = bhgeSoldToData.getUid();
		}

		if (b2bUnitUid.isEmpty())
		{
			return new SearchPageData<AddressModel>();
		}

		final StringBuilder sb = new StringBuilder();
		sb.append(bhgeSoldToData.getUid());

		if (StringUtils.isNotBlank(userSalesRegion) && StringUtils.isNotEmpty(userSalesRegion))
		{
			sb.append("_");
			sb.append(userSalesRegion);
		}

		String queryString = "SELECT {AD.pk} " + "FROM {" + AddressModel._TYPECODE
				+ " AS AD JOIN B2BUnit AS BU ON {AD.owner}={BU.pk} " + "JOIN " + CountryModel._TYPECODE
				+ " AS CNY ON {CNY.PK}= {AD.COUNTRY} " + "LEFT JOIN " + RegionModel._TYPECODE + " AS REG ON {REG.PK}= {AD.REGION}} "
				+ "WHERE {AD.shippingAddress}=?shippingAddress " + "AND {BU.uid}= ?soldToId "
				+ "AND (UPPER({AD.postalcode}) LIKE ?zipCode " + "OR  UPPER({AD.COMPANY}) LIKE ?zipCode "
				+ "OR  UPPER({AD.STREETNAME}) LIKE ?zipCode " + "OR  UPPER({AD.TOWN}) LIKE ?zipCode "
				+ "OR  UPPER({REG.NAME}) LIKE ?zipCode " + "OR  UPPER({CNY.NAME}) LIKE ?zipCode "
				+ "OR  UPPER({CNY.ISOCODE}) LIKE ?zipCode " + "OR {AD.sapcustomerid} IN ({{" + "SELECT distinct({unit.uid}) "
				+ "FROM {" + AddressModel._TYPECODE + " AS temp JOIN " + B2BUnitModel._TYPECODE
				+ " AS unit ON {temp.sapcustomerid}={unit.uid}} " + "WHERE UPPER({unit.name}) LIKE ?zipCode" + "}})) ";


		//Sorting Logic
		if (form.getState() != null && form.getState().equals("stateAsc"))
		{
			queryString = queryString + "ORDER BY {REG.NAME} ASC";
		}
		else if (form.getState() != null && form.getState().equals("stateDesc"))
		{
			queryString = queryString + "ORDER BY {REG.NAME} DESC";
		}
		if (form.getState() != null && form.getState().equals("streetAsc"))
		{
			queryString = queryString + "ORDER BY {AD.STREETNAME} ASC";
		}
		else if (form.getState() != null && form.getState().equals("streetDesc"))
		{
			queryString = queryString + "ORDER BY {AD.STREETNAME} DESC";
		}
		else if (form.getState() != null && form.getState().equals("countryAsc"))
		{
			queryString = queryString + "ORDER BY {CNY.NAME} ASC";
		}
		else if (form.getState() != null && form.getState().equals("countryDesc"))
		{
			queryString = queryString + "ORDER BY {CNY.NAME} DESC";
		}
		else if (form.getState() != null && form.getState().equals("zipAsc"))
		{
			queryString = queryString + "ORDER BY {AD.POSTALCODE} ASC";
		}
		else if (form.getState() != null && form.getState().equals("zipDesc"))
		{
			queryString = queryString + "ORDER BY {AD.POSTALCODE} DESC";
		}
		else if (form.getState() != null && form.getState().equals("townAsc"))
		{
			queryString = queryString + "ORDER BY {AD.TOWN} ASC";
		}
		else if (form.getState() != null && form.getState().equals("townDesc"))
		{
			queryString = queryString + "ORDER BY {AD.TOWN} DESC";
		}
		else if (form.getState() != null && form.getState().equals("companyAsc"))
		{
			queryString = queryString + "ORDER BY {AD.COMPANY} ASC";
		}
		else if (form.getState() != null && form.getState().equals("companyDesc"))
		{
			queryString = queryString + "ORDER BY {AD.COMPANY} DESC";
		}

		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);

		params.put("shippingAddress", Boolean.TRUE);
		params.put("soldToId", sb.toString());
		if (null != form.getZipCode())
		{
			params.put("zipCode", "%" + form.getZipCode().toUpperCase() + "%");
		}
		params.put("companyName", "%" + form.getZipCode() + "%");
		query.addQueryParameters(params);

		final int pageSizeVal = Integer.parseInt(pageSize);
		final int pageNumberVal = Integer.parseInt(pageNo);
		final int startNumber = pageSizeVal * pageNumberVal;

		query.setCount(pageSizeVal);
		query.setStart(startNumber);
		query.setNeedTotal(true);

		final SearchResult<AddressModel> results = flexibleSearchService.search(query);
		final List<AddressModel> addressModelList = results.getResult();

		final SearchPageData<AddressModel> resultData = new SearchPageData<AddressModel>();
		resultData.setResults(addressModelList);

		final PaginationData pagination = new PaginationData();

		final double totalCount = results.getTotalCount();
		final double temp = totalCount / Double.parseDouble(pageSize);
		final int noOfPages = (int) Math.ceil(temp);

		pagination.setNumberOfPages(noOfPages);
		pagination.setTotalNumberOfResults(results.getTotalCount());
		pagination.setCurrentPage(pageNumberVal);
		pagination.setPageSize(results.getCount());

		resultData.setPagination(pagination);

		userService.setCurrentUser(currentUser);

		return resultData;

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.user.daos.BHGEUserProfileDao#getUserAccessRequest(java.lang.String)
	 */
	@Override
	public List<BHGEUserAccessRequestModel> getUserAccessRequestfromRegisterCustUID(final String uid)
	{
		List<BHGEUserAccessRequestModel> userAccessRequestModel = new ArrayList<BHGEUserAccessRequestModel>();
		if (null != uid)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_USER_ACCESS_REQUEST);
			fQuery.addQueryParameter(UID, uid);
			LOG.info("Inside getUserAccessRequest - " + uid);
			userAccessRequestModel = flexibleSearchService.<BHGEUserAccessRequestModel> search(fQuery).getResult();
		}
		return userAccessRequestModel;
	}


	@Override
	public List<BHGEUserAccessRequestModel> getUserAccessRequestfromRegisterCustUID(final String uid, final String appAccessId)
	{
		LOG.info("Inside getUserAccessRequestfromRegisterCustUID uid: "+uid+" appAccessId: "+appAccessId);
		List<BHGEUserAccessRequestModel> userAccessRequestModel = new ArrayList<BHGEUserAccessRequestModel>();
		if (null != uid)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_USER_ACCESS_REQUEST_APPACCESSLEVEL);
			fQuery.addQueryParameter(UID, uid);
			fQuery.addQueryParameter(APPACCESSID, appAccessId);
			LOG.info("Inside getUserAccessRequest - " + uid);
			userAccessRequestModel = flexibleSearchService.<BHGEUserAccessRequestModel> search(fQuery).getResult();
		}
		return userAccessRequestModel;
	}

	@Override
	public BHGERegieterCustomerModel getRegisterCustomerModelFromUid(final String uid)

	{
		LOG.info("Inside getRegisterCustomerModelFromSSO - " + uid);
		BHGERegieterCustomerModel bhgeRegisterModel = null;
		ServicesUtil.validateParameterNotNull(uid, "The given sso is null!");
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_REGISTER_CUSTOMER_FROM_UID);
		fQuery.addQueryParameter(UID, uid);

		if (CollectionUtils.isNotEmpty(flexibleSearchService.search(fQuery).getResult()))
		{
			bhgeRegisterModel = (BHGERegieterCustomerModel) flexibleSearchService.search(fQuery).getResult().get(0); // To be changed after multiple application is in scope
		}
		else
		{
			throw new UnknownIdentifierException(
					(new StringBuilder("Cannot find user with uid '")).append(uid).append("'").toString());
		}
		return bhgeRegisterModel;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.user.daos.BHGEUserProfileDao#getRegisterCustomerModelFromSSO(java.lang.String)
	 */

	@Override
	public BHGERegieterCustomerModel getRegisterCustomerModelFromSSO(final String sso)

	{
		LOG.info("Inside getRegisterCustomerModelFromSSO - " + sso);
		BHGERegieterCustomerModel bhgeRegisterModel = null;
		ServicesUtil.validateParameterNotNull(sso, "The given sso is null!");
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_REGISTER_CUSTOMER_FROM_SSO);
		fQuery.addQueryParameter(SSO, sso);

		if (CollectionUtils.isNotEmpty(flexibleSearchService.search(fQuery).getResult()))
		{
			bhgeRegisterModel = (BHGERegieterCustomerModel) flexibleSearchService.search(fQuery).getResult().get(0); // To be changed after multiple application is in scope
		}
		else
		{
			throw new UnknownIdentifierException(
					(new StringBuilder("Cannot find user with sso '")).append(sso).append("'").toString());
		}
		return bhgeRegisterModel;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.user.daos.BHGEUserProfileDao#getProductForCodeRma(java.lang.String)
	 */
	@Override
	public ProductModel getProductForCodeRma(final String code)
	{
		String catalogId = "";
		final UserModel user = userService.getCurrentUser();
		String salesArea = null;
		if (null != user && user instanceof GEEdgeCustomerModel)
		{
			salesArea = ((GEEdgeCustomerModel) user).getDefaultB2BUnit().getUid();
		}

		final String catalogVersion = ONLINE_CATALOG;
		final CatalogModel catalog = baseStoreService.getProductCatalog(baseStoreService.getCurrentBaseStore());
		if (null != catalog)
		{
			catalogId = catalog.getPk().toString();
		}

		final Map<String, Object> params = new HashMap<String, Object>();

		final String query = "select {PK} from {" + ProductModel._TYPECODE
				+ "} where LOWER({code}) = ?code AND {catalog} = ?catalog";


		if (null != code && code.contains("&quot;"))
		{
			params.put("code", StringUtils.lowerCase(StringEscapeUtils.unescapeHtml4(code)));
		}
		else
		{
			params.put("code", StringUtils.lowerCase(code));
		}
		params.put("catalog", catalogId);
		final SearchResult<ProductModel> searchResult = flexibleSearchService.search(query, params);
		final List<ProductModel> productModelList = searchResult.getResult();

		if (productModelList != null && productModelList.size() > 0)
		{
			for (final ProductModel product : productModelList)
			{

				if (product instanceof GEEdgeProductModel)
				{
					return product;
				}


			}
		}
		return null;
	}

	@Override
	public List<AddressModel> getAddressesForCurrentCustomerAccountAndSAPCustomerID(final GetAddressFormData form)
	{
		final Map<String, Object> params = new HashMap<String, Object>();
		final String queryString = "SELECT {AD.pk} " + "FROM {" + AddressModel._TYPECODE
				+ " AS AD JOIN B2BUnit AS BU ON {AD.owner}={BU.pk}} WHERE {BU.uid}= ?soldToId AND {AD.sapcustomerid}=?sapCustomerID";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);

		params.put("sapCustomerID", form.getSapCustomerID());
		params.put("soldToId", form.getB2bUnit());
		query.addQueryParameters(params);

		final SearchResult<AddressModel> results = flexibleSearchService.search(query);
		return CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult() : null;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.user.daos.BHGEUserProfileDao#getGuestCategoriesListForUser()
	 */
	@Override
	public String getGuestCategoriesListForUser()
	{
		return BHGECommonsUtil.getValueFromBHGEGlobalProperties(GUEST_CATEGORIES, flexibleSearchService);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.user.daos.BHGEUserProfileDao#getFPTCategoriesListForUser()
	 */
	@Override
	public String getFPTCategoriesListForUser()
	{
		return BHGECommonsUtil.getValueFromBHGEGlobalProperties(FPT_CATEGORIES, flexibleSearchService);
	}

	@Override
	public List<BHGEUserAccessRequestModel> fetchPendingActiveUser()
	{
		final String queryString = "SELECT {BA.PK} FROM {BHGEUserAccessRequest AS BA JOIN BHGERegieterCustomer AS BR  ON {BR.PK}={BA.requesterid} JOIN BHGEAccessRequestStatus as BS ON {BS.PK}={BA.requeststatus}} WHERE {BS.code} = 'PENDING_ACTIVATION'";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final SearchResult<BHGEUserAccessRequestModel> results = flexibleSearchService.search(query);
		return CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult() : null;
	}


	/**
	 * Returns country to b2bunit mapping instance
	 *
	 * @return
	 */
	@Override
	public BHGEAnonymousUserCatalogModel getCountryToUnitMappingForAnonymousUser(final CountryModel defaultCountryModel)
	{
		final String queryString = "SELECT {ac.PK} FROM {BHGEAnonymousUserCatalog AS ac JOIN COUNTRY AS c ON {ac.country}={c.PK}} WHERE {c.isocode}=?isoCode "
				+ "AND {ac.defaultSalesOrg}=?defaultSalesOrg"; // Defaulting to US for June release 2020
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("isoCode", defaultCountryModel.getIsocode());
		params.put("defaultSalesOrg", Boolean.TRUE);
		query.addQueryParameters(params);
		final SearchResult<BHGEAnonymousUserCatalogModel> results = flexibleSearchService.search(query);
		return CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult().get(0) : null;
	}

	@Override
	public List<BHGEAnonymousUserCatalogModel> getCountryToUnitMappingListForAnonymousUser(final CountryModel defaultCountryModel)
	{
		final String queryString = "SELECT {ac.PK} FROM {BHGEAnonymousUserCatalog AS ac JOIN COUNTRY AS c ON {ac.country}={c.PK}} WHERE {c.isocode} = ?isoCode"; // Defaulting to US for June release 2020
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("isoCode", defaultCountryModel.getIsocode());
		query.addQueryParameters(params);
		final SearchResult<BHGEAnonymousUserCatalogModel> results = flexibleSearchService.search(query);
		return CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult() : null;
	}

	@Override
	public BHGEAnonymousUserCatalogModel getCountryandSalesOrgMappingForAnonymousUser(final String salesOrg,
			final String distributionChannel, final String division, final CountryModel defaultCountryModel)
	{
		final Map<String, Object> params = new HashMap<String, Object>();
		final String queryString = "SELECT {ac.PK} FROM {BHGEAnonymousUserCatalog AS ac JOIN COUNTRY AS c ON {ac.country}={c.PK}} WHERE {c.isocode} = ?isoCode"
				+ " AND {ac.salesOrg} = ?salesOrg AND {ac.distributionChannel} = ?distributionChannel AND {ac.division} = ?division";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		params.put("isoCode", defaultCountryModel.getIsocode());
		params.put("salesOrg", salesOrg);
		params.put("distributionChannel", distributionChannel);
		params.put("division", division);
		query.addQueryParameters(params);
		final SearchResult<BHGEAnonymousUserCatalogModel> results = flexibleSearchService.search(query);
		return CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult().get(0) : null;
	}

	public List<String> getBHGEPromotionCodes(String code){
		Map<String, Object> params = new HashMap<>();
		String query = "SELECT {psr.code} FROM {PromotionSourceRule AS psr} WHERE {psr.conditions} LIKE ?productCode";
		FlexibleSearchQuery fsq = new FlexibleSearchQuery(query);
		fsq.setResultClassList(Collections.singletonList(String.class));
		params.put("productCode", "%" + code + "%");
		fsq.addQueryParameters(params);
		SearchResult<String> results = flexibleSearchService.search(fsq);
		return CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult() : Collections.emptyList();
	}

	@Override
	public BHGECategorytoSalesOrgModel getSalesOrgToCategoryMappingForAnonymousUser(final String categoryCode)
	{
		final Map<String, Object> params = new HashMap<String, Object>();
		final String queryString = "SELECT {PK} FROM {BHGECategorytoSalesOrg AS CS JOIN Category AS C ON {CS.category}= {C.PK}} WHERE {C.code} = ?categoryCode";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		params.put("categoryCode", categoryCode);
		query.addQueryParameters(params);
		final SearchResult<BHGECategorytoSalesOrgModel> results = flexibleSearchService.search(query);
		return CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult().get(0) : null;
	}

	@Override
	public List<BHGECategorytoSalesOrgModel> getAllSalesOrgToCategoryForAnonymousUser()
	{
		final String queryString = "SELECT {PK} FROM {BHGECategorytoSalesOrg}";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final SearchResult<BHGECategorytoSalesOrgModel> results = flexibleSearchService.search(query);
		return CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult() : null;

	}
	
	@Override
	public List<RegionModel> getRegionsForCountryIso(final String countryIso)
	{
		LOG.info("Inside UserProfile DAO class");
		final Map<String, Object> params = new HashMap<String, Object>();
		//final CountryModel countryModel = getCommonI18NService().getCountry(countryIso);
		final String queryString = "SELECT {r.PK} from {Country AS c JOIN Region AS r ON {c.pk}={r.country}} WHERE {c.isocode}=?countryIso and {r.active}=1 AND {r.name} is not null";
		LOG.info("Query is "+queryString);
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		params.put("countryIso", countryIso);
		query.addQueryParameters(params);
		final SearchResult<RegionModel> results = flexibleSearchService.search(query);
		return CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult() : null;
	}

	public MediaModel findFeedbackMedia(final String mediaCode)
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery("SELECT {PK} FROM {Media} WHERE {code}=?code");
		fQuery.addQueryParameter("code", mediaCode);
		return flexibleSearchService.searchUnique(fQuery);
	}
	
	public SearchPageData<AddressModel> getPayerAddressesForMyAccountPage(final GetAddressFormData form,
			final boolean isAccountPage)
	{
		final String pageSize = form.getPageSize();
		final String pageNo = form.getPageNo();
		final String b2bUnitUid = form.getB2bUnit();
		final String sapAddressUsage="RG";

		final UserModel currentUser = userService.getCurrentUser();
		// userService.setCurrentUser(userService.getAnonymousUser());
		final Map<String, Object> params = new HashMap<String, Object>();



		if (b2bUnitUid.isEmpty())
		{
			return new SearchPageData<AddressModel>();
		}

		final StringBuilder sb = new StringBuilder();
		sb.append(b2bUnitUid);
		if (!isAccountPage)
		{
			final String userSalesRegion = userProfileService.getUserDefaultSalesRegion();
			if (StringUtils.isNotBlank(userSalesRegion) && StringUtils.isNotEmpty(userSalesRegion))
			{
				sb.append("_").append(userSalesRegion);
			}
		}

		String queryString = "SELECT {AD.pk} " + "FROM {" + AddressModel._TYPECODE
				+ " AS AD JOIN B2BUnit AS BU ON {AD.owner}={BU.pk} " + "JOIN " + CountryModel._TYPECODE
				+ " AS CNY ON {CNY.PK}= {AD.COUNTRY} " + "LEFT JOIN " + RegionModel._TYPECODE + " AS REG ON {REG.PK}= {AD.REGION}} "
				+ "WHERE {AD.sapAddressUsage}=?sapAddressUsage " + "AND  {AD.sapCustomerID} IS NOT NULL " + "AND {BU.uid}= ?soldToId "
				+ "AND (UPPER({AD.postalcode}) LIKE ?zipCode " + "OR  UPPER({AD.COMPANY}) LIKE ?zipCode "
				+ "OR  UPPER({AD.STREETNAME}) LIKE ?zipCode " + "OR  UPPER({AD.TOWN}) LIKE ?zipCode "
				+ "OR  UPPER({REG.NAME}) LIKE ?zipCode " + "OR  UPPER({CNY.NAME}) LIKE ?zipCode "
				+ "OR  UPPER({CNY.ISOCODE}) LIKE ?zipCode " + "OR {AD.sapCustomerID} IN ({{" + "SELECT distinct({unit.uid}) "
				+ "FROM {" + AddressModel._TYPECODE + " AS temp JOIN " + B2BUnitModel._TYPECODE
				+ " AS unit ON {temp.sapcustomerid}={unit.uid}} " + "WHERE UPPER({unit.name}) LIKE ?zipCode" + "}})) ";


		//Sorting Logic
		if (form.getState() != null && form.getState().equals("stateAsc"))
		{
			queryString = queryString + "ORDER BY {REG.NAME} ASC";
		}
		else if (form.getState() != null && form.getState().equals("stateDesc"))
		{
			queryString = queryString + "ORDER BY {REG.NAME} DESC";
		}
		if (form.getState() != null && form.getState().equals("streetAsc"))
		{
			queryString = queryString + "ORDER BY {AD.STREETNAME} ASC";
		}
		else if (form.getState() != null && form.getState().equals("streetDesc"))
		{
			queryString = queryString + "ORDER BY {AD.STREETNAME} DESC";
		}
		else if (form.getState() != null && form.getState().equals("countryAsc"))
		{
			queryString = queryString + "ORDER BY {CNY.NAME} ASC";
		}
		else if (form.getState() != null && form.getState().equals("countryDesc"))
		{
			queryString = queryString + "ORDER BY {CNY.NAME} DESC";
		}
		else if (form.getState() != null && form.getState().equals("zipAsc"))
		{
			queryString = queryString + "ORDER BY {AD.POSTALCODE} ASC";
		}
		else if (form.getState() != null && form.getState().equals("zipDesc"))
		{
			queryString = queryString + "ORDER BY {AD.POSTALCODE} DESC";
		}
		else if (form.getState() != null && form.getState().equals("townAsc"))
		{
			queryString = queryString + "ORDER BY {AD.TOWN} ASC";
		}
		else if (form.getState() != null && form.getState().equals("townDesc"))
		{
			queryString = queryString + "ORDER BY {AD.TOWN} DESC";
		}
		else if (form.getState() != null && form.getState().equals("companyAsc"))
		{
			queryString = queryString + "ORDER BY {AD.COMPANY} ASC";
		}
		else if (form.getState() != null && form.getState().equals("companyDesc"))
		{
			queryString = queryString + "ORDER BY {AD.COMPANY} DESC";
		}

		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);

		params.put("sapAddressUsage", sapAddressUsage);
		params.put("soldToId", sb.toString());
		if (null != form.getZipCode())
		{
			params.put("zipCode", "%" + form.getZipCode().toUpperCase() + "%");
		}
		params.put("companyName", "%" + form.getZipCode() + "%");
		query.addQueryParameters(params);

		final int pageSizeVal = Integer.parseInt(pageSize);
		final int pageNumberVal = Integer.parseInt(pageNo);
		final int startNumber = pageSizeVal * pageNumberVal;

		query.setCount(pageSizeVal);
		query.setStart(startNumber);
		query.setNeedTotal(true);

		final SearchResult<AddressModel> results = flexibleSearchService.search(query);
		final List<AddressModel> addressModelList = results.getResult();

		final SearchPageData<AddressModel> resultData = new SearchPageData<AddressModel>();
		resultData.setResults(addressModelList);

		final PaginationData pagination = new PaginationData();

		final double totalCount = results.getTotalCount();
		final double temp = totalCount / Double.parseDouble(pageSize);
		final int noOfPages = (int) Math.ceil(temp);

		pagination.setNumberOfPages(noOfPages);
		pagination.setTotalNumberOfResults(results.getTotalCount());
		pagination.setCurrentPage(pageNumberVal);
		pagination.setPageSize(pageSizeVal); // Setting the page size which is same across all the pages in this pagination.
		LOG.info("Inside getPayerAddressesForMyAccountPage - and Page size is " + pageSizeVal);
		resultData.setPagination(pagination);

		userService.setCurrentUser(currentUser);

		return resultData;

	}
	
	
	public SearchPageData<AddressModel> getBillToAddressesForMyAccountPage(final GetAddressFormData form,
			final boolean isAccountPage)
	{
		final String pageSize = form.getPageSize();
		final String pageNo = form.getPageNo();
		final String b2bUnitUid = form.getB2bUnit();
		final String sapAddressUsage="RE";

		final UserModel currentUser = userService.getCurrentUser();
		// userService.setCurrentUser(userService.getAnonymousUser());
		final Map<String, Object> params = new HashMap<String, Object>();



		if (b2bUnitUid.isEmpty())
		{
			return new SearchPageData<AddressModel>();
		}

		final StringBuilder sb = new StringBuilder();
		sb.append(b2bUnitUid);
		if (!isAccountPage)
		{
			final String userSalesRegion = userProfileService.getUserDefaultSalesRegion();
			if (StringUtils.isNotBlank(userSalesRegion) && StringUtils.isNotEmpty(userSalesRegion))
			{
				sb.append("_").append(userSalesRegion);
			}
		}

		String queryString = "SELECT {AD.pk} " + "FROM {" + AddressModel._TYPECODE
				+ " AS AD JOIN B2BUnit AS BU ON {AD.owner}={BU.pk} " + "JOIN " + CountryModel._TYPECODE
				+ " AS CNY ON {CNY.PK}= {AD.COUNTRY} " + "LEFT JOIN " + RegionModel._TYPECODE + " AS REG ON {REG.PK}= {AD.REGION}} "
				+ "WHERE {AD.sapAddressUsage}=?sapAddressUsage " + "AND  {AD.sapCustomerID} IS NOT NULL " + "AND {BU.uid}= ?soldToId "
				+ "AND (UPPER({AD.postalcode}) LIKE ?zipCode " + "OR  UPPER({AD.COMPANY}) LIKE ?zipCode "
				+ "OR  UPPER({AD.STREETNAME}) LIKE ?zipCode " + "OR  UPPER({AD.TOWN}) LIKE ?zipCode "
				+ "OR  UPPER({REG.NAME}) LIKE ?zipCode " + "OR  UPPER({CNY.NAME}) LIKE ?zipCode "
				+ "OR  UPPER({CNY.ISOCODE}) LIKE ?zipCode " + "OR {AD.sapCustomerID} IN ({{" + "SELECT distinct({unit.uid}) "
				+ "FROM {" + AddressModel._TYPECODE + " AS temp JOIN " + B2BUnitModel._TYPECODE
				+ " AS unit ON {temp.sapcustomerid}={unit.uid}} " + "WHERE UPPER({unit.name}) LIKE ?zipCode" + "}})) ";


		//Sorting Logic
		if (form.getState() != null && form.getState().equals("stateAsc"))
		{
			queryString = queryString + "ORDER BY {REG.NAME} ASC";
		}
		else if (form.getState() != null && form.getState().equals("stateDesc"))
		{
			queryString = queryString + "ORDER BY {REG.NAME} DESC";
		}
		if (form.getState() != null && form.getState().equals("streetAsc"))
		{
			queryString = queryString + "ORDER BY {AD.STREETNAME} ASC";
		}
		else if (form.getState() != null && form.getState().equals("streetDesc"))
		{
			queryString = queryString + "ORDER BY {AD.STREETNAME} DESC";
		}
		else if (form.getState() != null && form.getState().equals("countryAsc"))
		{
			queryString = queryString + "ORDER BY {CNY.NAME} ASC";
		}
		else if (form.getState() != null && form.getState().equals("countryDesc"))
		{
			queryString = queryString + "ORDER BY {CNY.NAME} DESC";
		}
		else if (form.getState() != null && form.getState().equals("zipAsc"))
		{
			queryString = queryString + "ORDER BY {AD.POSTALCODE} ASC";
		}
		else if (form.getState() != null && form.getState().equals("zipDesc"))
		{
			queryString = queryString + "ORDER BY {AD.POSTALCODE} DESC";
		}
		else if (form.getState() != null && form.getState().equals("townAsc"))
		{
			queryString = queryString + "ORDER BY {AD.TOWN} ASC";
		}
		else if (form.getState() != null && form.getState().equals("townDesc"))
		{
			queryString = queryString + "ORDER BY {AD.TOWN} DESC";
		}
		else if (form.getState() != null && form.getState().equals("companyAsc"))
		{
			queryString = queryString + "ORDER BY {AD.COMPANY} ASC";
		}
		else if (form.getState() != null && form.getState().equals("companyDesc"))
		{
			queryString = queryString + "ORDER BY {AD.COMPANY} DESC";
		}

		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);

		params.put("sapAddressUsage", sapAddressUsage);
		params.put("soldToId", sb.toString());
		if (null != form.getZipCode())
		{
			params.put("zipCode", "%" + form.getZipCode().toUpperCase() + "%");
		}
		params.put("companyName", "%" + form.getZipCode() + "%");
		query.addQueryParameters(params);

		final int pageSizeVal = Integer.parseInt(pageSize);
		final int pageNumberVal = Integer.parseInt(pageNo);
		final int startNumber = pageSizeVal * pageNumberVal;

		query.setCount(pageSizeVal);
		query.setStart(startNumber);
		query.setNeedTotal(true);

		final SearchResult<AddressModel> results = flexibleSearchService.search(query);
		final List<AddressModel> addressModelList = results.getResult();

		final SearchPageData<AddressModel> resultData = new SearchPageData<AddressModel>();
		resultData.setResults(addressModelList);

		final PaginationData pagination = new PaginationData();

		final double totalCount = results.getTotalCount();
		final double temp = totalCount / Double.parseDouble(pageSize);
		final int noOfPages = (int) Math.ceil(temp);

		pagination.setNumberOfPages(noOfPages);
		pagination.setTotalNumberOfResults(results.getTotalCount());
		pagination.setCurrentPage(pageNumberVal);
		pagination.setPageSize(pageSizeVal); // Setting the page size which is same across all the pages in this pagination.
		LOG.info("Inside getBillToAddressesForMyAccountPage - and Page size is " + pageSizeVal);
		resultData.setPagination(pagination);

		userService.setCurrentUser(currentUser);

		return resultData;

	}

	@Override
	public List<B2BUnitModel> getB2bUnits() {
		final FlexibleSearchQuery query = new FlexibleSearchQuery(PARENT_B2BUNITS_EMPTY_CUSTOMER_CLASSIFICATION);
		final SearchResult<B2BUnitModel> result = flexibleSearchService.search(query);
		if (CollectionUtils.isNotEmpty(result.getResult())) {
			return result.getResult();
		}
		return null;
	}

	@Override
	public List<BHGECustomerClassificationModel> getCustomerClassification(String code) {
		final FlexibleSearchQuery query = new FlexibleSearchQuery(CUSTOMER_CLASSFICIATION);
		query.addQueryParameter("code", code);
		final SearchResult<BHGECustomerClassificationModel> result = flexibleSearchService.search(query);
		if (CollectionUtils.isNotEmpty(result.getResult())) {
			return result.getResult();
		}
		return null;
	}

    @Override
    public List<SAPSalesOrganizationModel> getFindBySalesOrgAndCurrencyString(
            final String salesOrg, final String currencyCodeAsString) {

        final FlexibleSearchQuery query = new FlexibleSearchQuery(FIND_BY_SALESORG_AND_CURRENCY_STRING);
        query.addQueryParameter("salesOrg", salesOrg);
		query.addQueryParameter("distChannel", "GE");
        query.addQueryParameter("iso", currencyCodeAsString);

        final SearchResult<SAPSalesOrganizationModel> result = flexibleSearchService.search(query);
        return result == null ? Collections.emptyList() : result.getResult();
    }


}
