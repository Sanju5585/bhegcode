/**
 *
 */
package com.bhge.core.product.daos.impl;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNull;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;

import com.bhge.core.model.BHGECurrencyModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.enums.AccessoryTypeEnum;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.model.GEEdgeProductLineMappingModel;
import com.bhge.core.product.daos.BHGEProductDao;
import com.bhge.core.util.BHGEProductUtil;
import com.bhge.store.services.BHGEBaseStoreService;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.catalog.enums.ArticleApprovalStatus;
import de.hybris.platform.catalog.enums.ProductReferenceTypeEnum;
import de.hybris.platform.catalog.model.CatalogModel;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.EmployeeModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.europe1.model.PriceRowModel;
import de.hybris.platform.product.daos.impl.DefaultProductDao;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;


public class BHGEProductDaoImpl extends DefaultProductDao implements BHGEProductDao
{
	private static final Logger LOG = Logger.getLogger(BHGEProductDaoImpl.class);

	private static final String ONLINE_CATALOG = "Online";
	private static final String EXCLUDED_CHARACTERISTIC_QUERY = "SELECT {pk} FROM {ExcludeProductCharacterisctic} WHERE {productCode}=?productCode";

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	public BHGEProductDaoImpl(final String typecode)
	{
		super(typecode);
	}

	@Override
	public List<ProductModel> findProductsByCode(final String code)
	{
		String catalogId = "";
		final List<ProductModel> productsForCode = new ArrayList<ProductModel>();
		final UserModel user = userService.getCurrentUser();
		if (user != null && user instanceof EmployeeModel)
		{
			if (null != code && code.contains("&quot;"))
			{
				return super.findProductsByCode(StringEscapeUtils.unescapeHtml4(code));
			}
			else
			{
				return super.findProductsByCode(code);
			}
		}
		final String catalogVersion = ONLINE_CATALOG;
		final CatalogModel catalog = baseStoreService.getProductCatalog(baseStoreService.getCurrentBaseStore());
		if (null != catalog)
		{
			catalogId = catalog.getPk().toString();
		}

		validateParameterNotNull(code, "Product code must not be null!");
		validateParameterNotNull(catalogId, "Product catalog must not be null!");

		final Map<String, Object> params = new HashMap<String, Object>();
		if (null != code && code.contains("&quot;"))
		{
			params.put(ProductModel.CODE, StringEscapeUtils.unescapeHtml4(code));
		}
		else
		{
			params.put(ProductModel.CODE, code);
		}
		params.put(ProductModel.CATALOG, catalogId);
		final List<ProductModel> products = find(params);

		if (products != null && products.size() > 0)
		{
			for (final ProductModel product : products)
			{

				if (product instanceof GEEdgeProductModel)
				{
					final GEEdgeProductModel geedgeProductModel = (GEEdgeProductModel) product;
					final BHGEProductUtil productUtil = new BHGEProductUtil();
					if (!userService.isAnonymousUser(user) && HybrisStatus.NOSELL
							.equals(productUtil.getHybrisStatusForCurrentSalesArea(geedgeProductModel, sessionService, userService)))
					{
						continue;
					}
				}
				final String productsCatalogVersion = product.getCatalogVersion().getVersion();
				if (catalogVersion.equals(productsCatalogVersion))
				{
					productsForCode.add(product);
				}

			}
		}
		return productsForCode;
	}


	@Override
	public List<ProductReferenceModel> getMandatoryAccesories(final ProductModel product)
	{
		final String queryString = "SELECT {" + ProductReferenceModel.PK + "} FROM {" + ProductReferenceModel._TYPECODE
				+ "} WHERE {" + ProductReferenceModel.ACCESSORYTYPE + "}=?accessoryType and {" + ProductReferenceModel.REFERENCETYPE
				+ "}=?referenceType and {" + ProductReferenceModel.SOURCE + "}=?item ";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("accessoryType", AccessoryTypeEnum.MANDATORY_ACCESSORIES);
		params.put("referenceType", ProductReferenceTypeEnum.ACCESSORIES);
		params.put("item", product);
		query.addQueryParameters(params);
		return getFlexibleSearchService().<ProductReferenceModel> search(query).getResult();
	}

	@Override
	public List<GEEdgeProductModel> getProductWithUnApprovedStatus()
	{
		final StringBuilder queryString = new StringBuilder();
		queryString.append("SELECT {P.PK} FROM {GEEDGEPRODUCT AS P ");
		queryString.append("JOIN CATALOGVERSION AS CV ON {P.catalogVersion} ={CV.PK}");
		queryString.append("JOIN CATALOG AS C ON {CV.catalog}={C.PK}");
		queryString.append("JOIN ArticleApprovalStatus AS S ON {P.APPROVALSTATUS} = {S.PK}}");
		queryString.append(" WHERE {S.CODE}=?status");
		queryString.append(" AND " + Config.getParameter("BASE_STORES") + "");

		/*
		 * queryString.append(
		 * " AND ({C.ID}='6040_GE' OR {C.ID}='6030_GE'  OR {C.ID}='1800_GE'  OR {C.ID}='3000_GE'  OR {C.ID}='1720_GE'  OR {C.ID}='7030_GE'  OR {C.ID}='6020_GE'  OR {C.ID}='6210_GE'  OR {C.ID}='6240_GE'  OR {C.ID}='6270_GE' OR {C.ID}='6250_GE' OR {C.ID}='7140_GE')"
		 * );
		 */
		queryString.append(" AND {CV.VERSION}=?version");
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString.toString());
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("version", "Staged");
		params.put("status", ArticleApprovalStatus.CHECK.getCode());
		query.addQueryParameters(params);
		final SearchResult<GEEdgeProductModel> result = getFlexibleSearchService().search(query);
		return result.getResult();
	}

	// Customer Updated Records
	@Override
	public List<B2BUnitModel> getUpdatedCustomersRecords(final String fromDate)
	{
		try
		{
			String queryString = "";

			if(Config.isSQLServerUsed()) {
				queryString = "SELECT {BB:pk} FROM {B2Bunit AS BB} Where {BB.modifiedtime}>=convert(datetime,'" + fromDate
						+ "',20)";
			}
			else {
				queryString = "SELECT {BB:pk} FROM {B2Bunit AS BB} Where {BB.modifiedtime}>=TO_DATE('" + fromDate
						+ "','yyyy-mm-dd hh24:mi:ss')";
			}
			final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
			LOG.info("Updated Customers records query " + query.getQuery());
			final SearchResult<B2BUnitModel> result = flexibleSearchService.search(query);

			if (result.getResult() != null && result.getResult().size() > 0)
			{
				return result.getResult();
			}
		}
		catch (final RuntimeException re)
		{
			LOG.error("Exception in getUpdatedCustomersRecords method query ", re);
		}
		return null;

	}

	// Address Updated Records
	@Override
	public List<AddressModel> getUpdatedAddressRecords(final String fromDate)
	{
		try
		{
			String queryString = "";
			if(Config.isSQLServerUsed()) {
				queryString = "SELECT {AD:pk} FROM {Address AS AD JOIN B2Bunit AS BB on {BB.PK}={AD.OWNER}} Where {AD.modifiedtime}>=convert(datetime,'" + fromDate + "',20)";
			} else {
				queryString = "SELECT {AD:pk} FROM {Address AS AD JOIN B2Bunit AS BB on {BB.PK}={AD.OWNER}} Where {AD.modifiedtime}>=TO_DATE('"
						+ fromDate + "','yyyy-mm-dd hh24:mi:ss')";
			}
			final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
			LOG.info("Updated Address records query " + query.getQuery());
			final SearchResult<AddressModel> result = flexibleSearchService.search(query);

			if (result.getResult() != null && result.getResult().size() > 0)
			{
				return result.getResult();
			}
		}
		catch (final RuntimeException re)
		{
			LOG.error("Exception in getUpdatedCustomersRecords method query ", re);
		}
		return null;

	}

	// Price Updated Records
	@Override
	public List<PriceRowModel> getUpdatedPriceRecords(final String fromDate)
	{
		try
		{
			String queryString = "";
			if(Config.isSQLServerUsed()) {
				queryString = "select {pr:pk} from {PriceRow AS pr} WHERE {pr.MODIFIEDTIME}>=convert(datetime,'" + fromDate + "',20)";
			} else  {
				queryString = "select {pr:pk} from {PriceRow AS pr} WHERE {pr.MODIFIEDTIME}>=TO_DATE('" + fromDate
						+ "','yyyy-mm-dd hh24:mi:ss')";
			}
			final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
			LOG.info("Updated Price records query " + query.getQuery());
			final SearchResult<PriceRowModel> result = flexibleSearchService.search(query);

			if (result.getResult() != null && result.getResult().size() > 0)
			{
				return result.getResult();
			}
		}
		catch (final RuntimeException re)
		{
			LOG.error("Exception in getUpdatedPriceRecords method query ", re);
		}
		return null;
	}
	
	@Override
	public List<GEEdgeProductModel> getProductWithUnApprovedStatusforGlobalCatalog()
	{
		final StringBuilder queryString = new StringBuilder();
		queryString.append("SELECT {P.PK} FROM {GEEDGEPRODUCT AS P ");
		queryString.append("JOIN CATALOGVERSION AS CV ON {P.catalogVersion} ={CV.PK}");
		queryString.append("JOIN CATALOG AS C ON {CV.catalog}={C.PK}");
		queryString.append("JOIN ArticleApprovalStatus AS S ON {P.APPROVALSTATUS} = {S.PK}}");
		queryString.append(" WHERE {S.CODE}=?status");
		queryString.append(" AND {C.ID}='bhgeGlobalProductCatalog'");
		queryString.append(" AND {CV.VERSION}=?version");
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString.toString());
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("version", "Staged");
		params.put("status", ArticleApprovalStatus.CHECK.getCode());
		query.addQueryParameters(params);
		final SearchResult<GEEdgeProductModel> result = getFlexibleSearchService().search(query);
		return result.getResult();
	}
	@Override
	public List<GEEdgeProductModel>	getProductsforUpdatedSalesArea(final String lastRunTime){
		String queryString = "";
		if(Config.isSQLServerUsed()) {
			queryString = "SELECT distinct({GEP.PK}) FROM {GEEdgeProduct AS GEP JOIN Product2SalesAreaRelation as PSR ON {PSR.source} = {GEP.pk} JOIN BHGESalesAreaData AS BSA ON {BSA.pk} = {PSR.target} JOIN CatalogVersion AS CV ON {GEP.catalogVersion}={CV.pk} JOIN Catalog AS C ON {C.pk}={CV.catalog}} WHERE {CV.VERSION}='Staged' AND {C.ID}='bhgeGlobalProductCatalog' AND {BSA.modifiedtime} >= convert(datetime,'" + lastRunTime+ "', 20)";
		}
		else if (Config.isOracleUsed())
		{

			queryString = "SELECT distinct({GEP.PK}) FROM {GEEdgeProduct AS GEP JOIN Product2SalesAreaRelation as PSR ON {PSR.source} = {GEP.pk} JOIN BHGESalesAreaData AS BSA ON {BSA.pk} = {PSR.target} JOIN CatalogVersion AS CV ON {GEP.catalogVersion}={CV.pk} JOIN Catalog AS C ON {C.pk}={CV.catalog}} WHERE {CV.VERSION}='Staged' AND {C.ID}='bhgeGlobalProductCatalog' AND "
					+ "({BSA.modifiedtime} >= TO_DATE('" + lastRunTime
					+ "', 'yyyy-mm-dd hh24:mi:ss'))";

		}
		else if (Config.isHSQLDBUsed())
		{
			queryString = "SELECT distinct({GEP.PK}) FROM {GEEdgeProduct AS GEP JOIN Product2SalesAreaRelation as PSR ON {PSR.source} = {GEP.pk} JOIN BHGESalesAreaData AS BSA ON {BSA.pk} = {PSR.target} JOIN CatalogVersion AS CV ON {GEP.catalogVersion}={CV.pk} JOIN Catalog AS C ON {C.pk}={CV.catalog}} WHERE {CV.VERSION}='Staged' AND {C.ID}='bhgeGlobalProductCatalog' AND \r\n"
					+ "{BSA.modifiedtime} >= ?lastRunTime";
		}

		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("lastRunTime", lastRunTime);
		query.addQueryParameters(params);
		LOG.info("getProductsforUpdatedSalesArea query: " + queryString.toString());
		return flexibleSearchService.<GEEdgeProductModel> search(query).getResult();
	}

	@Override
	public List<BHGESalesAreaDataModel> getSalesAreaData(final String code, final String lastRunTime)
	{
		String queryString = "";
		if(Config.isSQLServerUsed()) {
			queryString = "SELECT DISTINCT{PK} FROM {BHGESalesAreaData AS BSA JOIN Product2SalesAreaRelation as PSR ON {PSR.target} = {BSA.pk} JOIN GEEdgeProduct AS GEP ON {PSR.source} = {GEP.pk} JOIN CatalogVersion AS CV ON {GEP.catalogVersion}={CV.pk} JOIN Catalog AS C ON {C.pk}={CV.catalog}} WHERE {CV.VERSION}='Staged' AND {C.ID}='bhgeGlobalProductCatalog' AND {GEP.code}=?code AND \r\n"
					+ "({BSA.modifiedtime} >= convert(datetime,'" + lastRunTime
					+ "', 20) OR {BSA.creationtime} >= convert(datetime,'" + lastRunTime + "', 20))";
		}
		else if (Config.isOracleUsed())
		{

			queryString = "SELECT DISTINCT{PK} FROM {BHGESalesAreaData AS BSA JOIN Product2SalesAreaRelation as PSR ON {PSR.target} = {BSA.pk} JOIN GEEdgeProduct AS GEP ON {PSR.source} = {GEP.pk} JOIN CatalogVersion AS CV ON {GEP.catalogVersion}={CV.pk} JOIN Catalog AS C ON {C.pk}={CV.catalog}} WHERE {CV.VERSION}='Staged' AND {C.ID}='bhgeGlobalProductCatalog' AND {GEP.code}=?code AND \r\n"
					+ "({BSA.modifiedtime} >= TO_DATE('" + lastRunTime
					+ "', 'yyyy-mm-dd hh24:mi:ss') OR {BSA.creationtime} >= TO_DATE('" + lastRunTime + "', 'yyyy-mm-dd hh24:mi:ss'))";

		}
		else if (Config.isHSQLDBUsed())
		{
			queryString = "SELECT DISTINCT{PK} FROM {BHGESalesAreaData AS BSA JOIN Product2SalesAreaRelation as PSR ON {PSR.target} = {BSA.pk} JOIN GEEdgeProduct AS GEP ON {PSR.source} = {GEP.pk} JOIN CatalogVersion AS CV ON {GEP.catalogVersion}={CV.pk} JOIN Catalog AS C ON {C.pk}={CV.catalog}} WHERE {CV.VERSION}='Staged' AND {C.ID}='bhgeGlobalProductCatalog' AND {GEP.code}=?code AND \r\n"
					+ "({BSA.modifiedtime} >= ?lastRunTime OR {BSA.creationtime} >= ?lastRunTime)";
		}

		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("lastRunTime", lastRunTime);
		params.put("code", code);
		query.addQueryParameters(params);
		LOG.debug("getNewAndUpdatedProducts query: " + queryString.toString());
		return flexibleSearchService.<BHGESalesAreaDataModel> search(query).getResult();

	}

	@Override
	public List<GEEdgeProductModel> getNewAndUpdatedProducts(final String startTime)
	{
		String queryString = "";
		if(Config.isSQLServerUsed()) {
			queryString = "SELECT {p:pk}" + " FROM { " + GEEdgeProductModel._TYPECODE + " AS p JOIN " + CatalogVersionModel._TYPECODE
					+ " as cv ON {p.catalogVersion}={cv.pk}} " + "WHERE ({p.modifiedtime} >= convert(datetime,'" + startTime
					+ "', 20) OR {p.creationtime} >= convert(datetime,'" + startTime + "', 20)) AND "
					+ "{cv.version}=?version";
		}
		else if (Config.isOracleUsed())
		{

			queryString = "SELECT {p:pk}" + " FROM { " + GEEdgeProductModel._TYPECODE + " AS p JOIN " + CatalogVersionModel._TYPECODE
					+ " as cv ON {p.catalogVersion}={cv.pk}} " + "WHERE ({p.modifiedtime} >= TO_DATE( '" + startTime
					+ "', 'yyyy-mm-dd hh24:mi:ss') OR {p.creationtime} >= TO_DATE( '" + startTime + "', 'yyyy-mm-dd hh24:mi:ss')) AND "
					+ "{cv.version}=?version";

		}
		else if (Config.isHSQLDBUsed())
		{
			queryString = "SELECT {p:pk}" + " FROM {" + GEEdgeProductModel._TYPECODE + " AS p JOIN " + CatalogVersionModel._TYPECODE
					+ " as cv ON {p.catalogVersion}={cv.pk}} "
					+ "WHERE ({p.modifiedtime} >= ?startTime OR {p.creationtime} >= ?startTime) AND {cv.version}=?version";

		}

		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("startTime", startTime);
		params.put("version", "Staged");
		query.addQueryParameters(params);
		LOG.debug("getNewAndUpdatedProducts query: " + queryString.toString());
		return flexibleSearchService.<GEEdgeProductModel> search(query).getResult();
	}


	@Override
	public List<GEEdgeProductModel> getNewAndUpdatedProductsforGlobalCatalog(final String startTime)
	{
		String queryString = "";
		final Map<String, Object> params = new HashMap<String, Object>();
		if(Config.isSQLServerUsed()) {
			if (null != startTime)
			{
				queryString = "SELECT {p:pk}" + " FROM { " + GEEdgeProductModel._TYPECODE + " AS p JOIN "
						+ CatalogVersionModel._TYPECODE + " as cv ON {p.catalogVersion}={cv.pk} " + " JOIN " + CatalogModel._TYPECODE
						+ " as c ON {cv.catalog}={c.pk}} " + "WHERE ({p.modifiedtime} >= convert(datetime, '" + startTime
						+ "', 20) OR {p.creationtime} >= convert(datetime, '" + startTime
						+ "', 20)) AND " + "{cv.version}=?version AND {c.id}='bhgeGlobalProductCatalog'";

				params.put("startTime", startTime);
				LOG.info("Query is " + queryString);
			}
			else
			{
				queryString = "SELECT {p:pk}" + " FROM { " + GEEdgeProductModel._TYPECODE + " AS p JOIN "
						+ CatalogVersionModel._TYPECODE + " as cv ON {p.catalogVersion}={cv.pk} " + " JOIN " + CatalogModel._TYPECODE
						+ " as c ON {cv.catalog}={c.pk}} " + "WHERE {cv.version}=?version AND {c.id}='bhgeGlobalProductCatalog'";
			}
		}
		else if (Config.isOracleUsed())
		{
			if (null != startTime)
			{
				queryString = "SELECT {p:pk}" + " FROM { " + GEEdgeProductModel._TYPECODE + " AS p JOIN "
						+ CatalogVersionModel._TYPECODE + " as cv ON {p.catalogVersion}={cv.pk} " + " JOIN " + CatalogModel._TYPECODE
						+ " as c ON {cv.catalog}={c.pk}} " + "WHERE ({p.modifiedtime} >= TO_DATE( '" + startTime
						+ "', 'yyyy-mm-dd hh24:mi:ss') OR {p.creationtime} >= TO_DATE( '" + startTime
						+ "', 'yyyy-mm-dd hh24:mi:ss')) AND " + "{cv.version}=?version AND {c.id}='bhgeGlobalProductCatalog'";

				params.put("startTime", startTime);
				LOG.info("Query is " + queryString);
			}
			else
			{
				queryString = "SELECT {p:pk}" + " FROM { " + GEEdgeProductModel._TYPECODE + " AS p JOIN "
						+ CatalogVersionModel._TYPECODE + " as cv ON {p.catalogVersion}={cv.pk} " + " JOIN " + CatalogModel._TYPECODE
						+ " as c ON {cv.catalog}={c.pk}} " + "WHERE {cv.version}=?version AND {c.id}='bhgeGlobalProductCatalog'";
			}


		}
		else if (Config.isHSQLDBUsed())
		{
			if (null != startTime)
			{
				queryString = "SELECT {p:pk}" + " FROM {" + GEEdgeProductModel._TYPECODE + " AS p JOIN "
						+ CatalogVersionModel._TYPECODE + " as cv ON {p.catalogVersion}={cv.pk} " + " JOIN " + CatalogModel._TYPECODE
						+ " as c ON {cv.catalog}={c.pk}} "
						+ "WHERE ({p.modifiedtime} >= ?startTime OR {p.creationtime} >= ?startTime) AND {cv.version}=?version AND {c.id}='bhgeGlobalProductCatalog'";
				params.put("startTime", startTime);
			}
			else
			{
				queryString = "SELECT {p:pk}" + " FROM {" + GEEdgeProductModel._TYPECODE + " AS p JOIN "
						+ CatalogVersionModel._TYPECODE + " as cv ON {p.catalogVersion}={cv.pk} " + " JOIN " + CatalogModel._TYPECODE
						+ " as c ON {cv.catalog}={c.pk}} " + "WHERE {cv.version}=?version AND {c.id}='bhgeGlobalProductCatalog'";

			}

		}

		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		params.put("version", "Staged");
		query.addQueryParameters(params);
		LOG.debug("getNewAndUpdatedProductsforGlobalCatalog query: " + queryString.toString());
		return flexibleSearchService.<GEEdgeProductModel> search(query).getResult();
	}

	@Override
	public List<GEEdgeProductLineMappingModel> getProductLineMappingItems()
	{
		final String queryString = "SELECT {PM.PK} FROM {GEEdgeProductLineMapping AS PM}";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final SearchResult<GEEdgeProductLineMappingModel> result = getFlexibleSearchService().search(query);
		return result.getResult();
	}


	@Override
	public List<String> getAllConfigProducts()
	{
		final String queryString = "SELECT {P.pk} FROM {GEEdgeProduct as P JOIN CATALOGVERSION AS CV ON {P.catalogVersion} ={CV.PK} "
				+ "JOIN CATALOG AS C ON {CV.catalog}={C.PK} } where {sapConfigurable}='1'  AND {CV.VERSION}=?version";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("version", "Staged");
		query.addQueryParameters(params);
		final SearchResult<GEEdgeProductModel> result = getFlexibleSearchService().search(query);
		if (CollectionUtils.isNotEmpty(result.getResult()))
		{
			final List<String> namesList = result.getResult().stream().map(GEEdgeProductModel::getCode).collect(Collectors.toList());
			return namesList;
		}
		return null;
	}

	public List<ProductModel> getProdListDetails(List<String> productList)
	{
		final Map<String, Object> params = new HashMap<String, Object>();
		final String queryString = "SELECT {" + ProductModel.PK + "} from {" + ProductModel._TYPECODE + "} WHERE {" + ProductModel.CODE + "} IN (?productList)";
		params.put("productList", productList);
		FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		query.addQueryParameters(params);
		final SearchResult<ProductModel> searchResult = flexibleSearchService.search(query);
		if (searchResult.getResult() != null && !searchResult.getResult().isEmpty()) {
			return searchResult.getResult();
		} else {
			return null;
		}
	}

    @Override
    public BHGECurrencyModel getCustomerCurrency(String b2bUnit , String productType) {
        String queryString = "Select {c.pk} From {BHGECurrency AS c} Where {c.customerId} =?customerId and {c.salesOrg} =?salesOrg and {c.productType} =?productType"  ;
    final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
    final Map<String, Object> params = new HashMap<String, Object>();
        if (StringUtils.isNotBlank(b2bUnit) && b2bUnit.contains("_")) {
            LOG.info("b2b unit is" + b2bUnit);
            String[] parts = b2bUnit.split("_");
            String customerId = parts[0];
            String salesOrg = parts[1];
            params.put("salesOrg", salesOrg);
            params.put("customerId", customerId);
        }
        if(StringUtils.isNotBlank(productType)){
            LOG.info("productType is"+productType);
            params.put("productType", productType);
        }
        else{
            params.put("productType","");
        }
		query.addQueryParameters(params);
        final SearchResult<BHGECurrencyModel> result = getFlexibleSearchService().search(query);
        if(CollectionUtils.isNotEmpty(result.getResult())) {
            return result.getResult().get(0);
        }
        else{
            return null;
        }
    }

    @Override
    public CurrencyModel getcurrencyModel(String currency) {
        String queryString = "Select {currency.pk} from {currency} where {currency.isocode} =?currency"  ;
        final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
        final Map<String, Object> params = new HashMap<String, Object>();
        if(StringUtils.isNotBlank(currency)){
            params.put("currency", currency);
        }
        query.addQueryParameters(params);
        final SearchResult<CurrencyModel> result = getFlexibleSearchService().search(query);
        if(CollectionUtils.isNotEmpty(result.getResult())) {
            return result.getResult().get(0);
        }
        else{
            return null;
        }
    }


}
