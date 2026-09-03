/**
 *
 */
package com.bhge.core.order.daos.impl;

import com.bhge.core.enums.BHGERMACommerceType;
import com.hybris.ge.edge.core.model.type.*;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.core.enums.ExportStatus;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.enumeration.EnumerationValueModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderEntryModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.deliveryzone.model.ZoneModel;
import de.hybris.platform.ordersplitting.model.WarehouseModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.util.Config;

import java.text.SimpleDateFormat;
import java.util.*;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

//import com.hybris.ge.edge.core.integration.cronjob.GEEdgeRFCLogCleanupJob;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.order.daos.BHGEB2BOrderDao;
import com.hybris.ge.edge.core.model.model.GEEdgeSAPPlantLogSysOrgModel;


/**
 * @author pachoudhary
 *
 */
public class DefaultBHGEB2BOrderDao implements BHGEB2BOrderDao
{

	private static final Logger LOG = Logger.getLogger(DefaultBHGEB2BOrderDao.class);
	
	final String QUERY_CONFIG_ATTACHMENT_ENTRY = "Select {oe.pk} from {Order as o JOIN OrderEntry as oe on {oe.order}={o.pk} JOIN OrderStatus as os on {o.status}={os.pk} JOIN BHGERMACommerceType as ct on {ct.pk}={o.commercetype}} WHERE {oe.configurationAttachment} is not null AND {oe.configAttachmentUploaded} is not null AND {oe.configAttachmentUploaded} = 0 AND {os.code}='SUBMITTED' AND {ct.code} IN ('BUY')";


	private FlexibleSearchService flexibleSearchService;

	public FlexibleSearchService getFlexibleSearchService()
	{
		return flexibleSearchService;
	}

	public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
	{
		this.flexibleSearchService = flexibleSearchService;
	}

	@Resource(name = "modelService")
	ModelService modelService;

	@Override
	public List<OrderModel> getOrderBySubmissionStatus(final String fromDate)
	{
		String queryString = "";
		if(Config.isSQLServerUsed()) {
			 queryString = "select {O.pk} from {" + OrderModel._TYPECODE + " as O JOIN " + OrderStatus._TYPECODE
					+ " as OS on {O.status}={OS.pk}} Where ({OS.Code}='CREATED' OR {OS.Code}='ERROR') and format({O.creationtime},'yyyy/MM/dd HH:mm:ss') < '"
					+ fromDate + "'";
		} else  {
			 queryString = "select {O.pk} from {" + OrderModel._TYPECODE + " as O JOIN " + OrderStatus._TYPECODE
					+ " as OS on {O.status}={OS.pk}} Where ({OS.Code}='CREATED' OR {OS.Code}='ERROR') and to_char({O.creationtime},'YYYY/MM/DD HH24:MI:SS') < '"
					+ fromDate + "'";
		}
		final FlexibleSearchQuery fquery = new FlexibleSearchQuery(queryString);
		fquery.setDisableCaching(true);
		final SearchResult<OrderModel> result = flexibleSearchService.search(fquery);
		LOG.debug("order submission query " + fquery + result.getResult());
		return result.getResult();

	}

	@Override
	public List<BHGERfcCallErrorModel> getErrorModelDaoLst()
	{

		String queryString = "";

		if (Config.isOracleUsed())
		{

			queryString = "SELECT {p:pk}" + "FROM {" + BHGERfcCallErrorModel._TYPECODE + " AS p} " + "WHERE {p.status} = 0";

		}
		else if (Config.isHSQLDBUsed())
		{
			queryString = "SELECT {p:pk}" + "FROM {" + BHGERfcCallErrorModel._TYPECODE + " AS p} " + "WHERE{p.status} = 0";

		}

		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);

		return flexibleSearchService.<BHGERfcCallErrorModel> search(query).getResult();
	}

	@Override
	public List<OrderModel> getSubmittedOrders()
	{

		final String queryString = "select {O.pk} from {" + OrderModel._TYPECODE + " as O JOIN " + OrderStatus._TYPECODE
				+ " as OS on {O.status}={OS.pk}} Where {OS.Code}='SUBMITTED' AND {O.isAttachmentMoved}='0'";

		final SearchResult<OrderModel> result = flexibleSearchService.search(queryString);
		return result.getResult();
	}

	@Override
	public List<OrderModel> getSubmittedBuyOrders()
	{

		final String queryString = "select {O.pk} from {" + OrderModel._TYPECODE + " as O JOIN " + OrderStatus._TYPECODE
				+ " as OS on {O.status}={OS.pk} JOIN " + BHGERMACommerceType._TYPECODE + " as ct on {O.commercetype}={ct.pk}} Where {OS.Code}='SUBMITTED' AND {O.isAttachmentMoved}='0' AND {ct.code} !='" + BHGERMACommerceType.RETURNS.getCode() + "'";

		final SearchResult<OrderModel> result = flexibleSearchService.search(queryString);
		return result.getResult();
	}

	@Override
	public List<OrderModel> getSubmittedReturnOrders()
	{

		final String queryString = "select {O.pk} from {" + OrderModel._TYPECODE + " as O JOIN " + OrderStatus._TYPECODE
				+ " as OS on {O.status}={OS.pk} JOIN " + BHGERMACommerceType._TYPECODE + " as ct on {O.commercetype}={ct.pk}} Where {OS.Code}='SUBMITTED' AND {O.isAttachmentMoved}='0' AND {ct.code} ='" + BHGERMACommerceType.RETURNS.getCode() + "'";

		final SearchResult<OrderModel> result = flexibleSearchService.search(queryString);
		return result.getResult();
	}

	@Override
	public List<OrderModel> getRFCFailOrders(){
		final String queryString = "select {O.pk} from {" + OrderModel._TYPECODE + " as O JOIN " + OrderStatus._TYPECODE
				+ " as OS on {O.status}={OS.pk}} Where {OS.Code} IN ('SUBMITTED','ERROR') AND {O.rmaNumber}='-'";

		final SearchResult<OrderModel> result = flexibleSearchService.search(queryString);
		return result.getResult();
	}

	@Override
	public boolean checkSDSPlantEnabled(final String salesArea, final String plant)
	{
		final String queryString = "SELECT {featureMapping.PK} FROM {" + GESalesAreaPlantFeatureMappingModel._TYPECODE
				+ " AS featureMapping" + " JOIN " + GEEdgeSAPPlantLogSysOrgModel._TYPECODE
				+ " AS sapPlantLog ON {featureMapping.pk}={sapPlantLog.gESalesAreaPlantFeatureMapping}" + " JOIN "
				+ SAPSalesOrganizationModel._TYPECODE + " AS salesOrg ON {sapPlantLog.salesOrg}={salesOrg.pk}" + " JOIN "
				+ WarehouseModel._TYPECODE + " AS plant ON {sapPlantLog.plant}={plant.pk}"
				+ " JOIN GESalesAreaPlantFeatureMapping2FeatureSet AS featureSetMapping ON {featureSetMapping.source}={featureMapping.PK}"
				+ " JOIN " + FeatureSetModel._TYPECODE + " as feature ON {featureSetMapping.target}={feature.PK}}"
				+ " WHERE {salesOrg.salesOrganization}='" + salesArea + "' AND {plant.code}='" + plant + "' AND {feature.code}='"
				+ Config.getParameter("SDS_FEATURE_CODE") + "'";

		final SearchResult<GESalesAreaPlantFeatureMappingModel> result = flexibleSearchService.search(queryString);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult().get(0).getIsEnabled();
		}
		else
		{
			return false;
		}
	}

	@Override
	public double getShippingFee(final String salesArea, final String plant)
	{

		final String queryString = "SELECT {sapPlantLog.PK} FROM {" + GEEdgeSAPPlantLogSysOrgModel._TYPECODE + " AS sapPlantLog"
				+ " JOIN " + SAPSalesOrganizationModel._TYPECODE + " AS salesOrg ON {sapPlantLog.salesOrg}={salesOrg.pk}" + " JOIN "
				+ WarehouseModel._TYPECODE + " AS plant ON {sapPlantLog.plant}={plant.pk}}" + " WHERE {salesOrg.salesOrganization}='"
				+ salesArea + "' AND {plant.code}='" + plant + "'";

		final SearchResult<GEEdgeSAPPlantLogSysOrgModel> result = flexibleSearchService.search(queryString);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult().get(0).getShippingFee();
		}
		else
		{
			return 0.00;
		}
	}

	@Override
	public String getCountryCodeForPlant(final String plant, final String salesArea)
	{

		final String queryString = "SELECT {country.PK} FROM {" + GEEdgeSAPPlantLogSysOrgModel._TYPECODE + " AS sapPlantLog"
				+ " JOIN " + SAPSalesOrganizationModel._TYPECODE + " AS salesOrg ON {sapPlantLog.salesOrg}={salesOrg.pk}" + " JOIN "
				+ WarehouseModel._TYPECODE + " AS plant ON {sapPlantLog.plant}={plant.pk}" + " JOIN " + AddressModel._TYPECODE
				+ " as address ON {plant.plantLocation}={address.pk}" + " JOIN " + CountryModel._TYPECODE
				+ " as country ON {address.country}={country.pk}}" + " WHERE {salesOrg.salesOrganization}='" + salesArea
				+ "' AND {plant.code}='" + plant + "'";
		final SearchResult<CountryModel> result = flexibleSearchService.search(queryString);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult().get(0).getIsocode();
		}
		else
		{
			return "";
		}
	}

	@Override
	public String getTimeZoneForPlant(final String plant, final String salesArea)
	{
		final String queryString = "SELECT {zone.PK} FROM {" + GEEdgeSAPPlantLogSysOrgModel._TYPECODE + " AS sapPlantLog" + " JOIN "
				+ SAPSalesOrganizationModel._TYPECODE + " AS salesOrg ON {sapPlantLog.salesOrg}={salesOrg.pk}" + " JOIN "
				+ WarehouseModel._TYPECODE + " AS plant ON {sapPlantLog.plant}={plant.pk}" + " JOIN " + ZoneModel._TYPECODE
				+ " as zone ON {plant.timeZone}={zone.pk}}" + " WHERE {salesOrg.salesOrganization}='" + salesArea
				+ "' AND {plant.code}='" + plant + "'";

		final SearchResult<ZoneModel> result = flexibleSearchService.search(queryString);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult().get(0).getCode();
		}
		else
		{
			return "";
		}
	}

	@Override
	public String getCutOffTimeForPlant(final String plant)
	{
		final String queryString = "SELECT {plant.PK} FROM {" + WarehouseModel._TYPECODE + " AS plant}" + " WHERE {plant.code}='"
				+ plant + "'";
		final SearchResult<WarehouseModel> result = flexibleSearchService.search(queryString);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult().get(0).getCutOffTime();
		}
		else
		{
			return "";
		}
	}

	@Override
	public WarehouseModel getPlantForCode(final String plantCode)
	{
		final String queryString = "SELECT {plant:PK} FROM {" + WarehouseModel._TYPECODE + " AS plant} WHERE {plant:code}=?plant";

		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("plant", plantCode);
		query.addQueryParameters(params);
		final SearchResult<WarehouseModel> searchResult = flexibleSearchService.search(query);
		if (null != searchResult && null != searchResult.getResult() && searchResult.getResult().size() > 0)
		{
			return searchResult.getResult().get(0);
		}
		return null;
	}

	@Override
	public List<EnumerationValueModel> getSalesOrderTypes()
	{

		final String queryString = "SELECT {O:PK} FROM {GEOrderType AS O}";
		final SearchResult<EnumerationValueModel> result = flexibleSearchService.search(queryString);
		return result.getResult();
	}

	@Override
	public boolean isSalesAreaSDSEnabled(final String salesArea)
	{
		final String queryString = "SELECT {sapConfiguration.PK} FROM {" + SAPConfigurationModel._TYPECODE + " AS sapConfiguration}"
				+ " WHERE {sapConfiguration.core_name}='" + salesArea + "_BaseStoreConfiguration'";

		final SearchResult<SAPConfigurationModel> result = flexibleSearchService.search(queryString);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult().get(0).getIsSDSEnabled();
		}
		else
		{
			return false;
		}
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.hybris.ge.edge.core.order.daos.GEEdgeB2BOrderDao#getRFCErrorList()
	 */
	@Override
	public List<BHGERfcCallErrorModel> getRFCErrorList()
	{
		String queryString = "";
		final SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		final Calendar c = Calendar.getInstance();
		c.setTime(new Date()); // Now use today date.
		c.add(Calendar.DATE, Integer.parseInt(Config.getParameter("RFC_ERROR_COUNT"))); // Subtracting 60 days
		//	LOG.info("GEEdgeRFCLogCleanupJob : RFC Log clean up date is : "+formatter.format(c.getTime()));
		if (Config.isSQLServerUsed())
		{
			queryString = "SELECT {RFC_ERROR:PK}" + "FROM {" + BHGERfcCallErrorModel._TYPECODE + " AS RFC_ERROR} "
					+ " WHERE {RFC_ERROR.creationtime} < convert(varchar, '" + formatter.format(c.getTime()) + "', 20)";
		}
		else if (Config.isOracleUsed())
		{
			queryString = "SELECT {RFC_ERROR:PK}" + "FROM {" + BHGERfcCallErrorModel._TYPECODE + " AS RFC_ERROR} "
					+ " WHERE {RFC_ERROR.creationtime} < TO_DATE( '" + formatter.format(c.getTime()) + "', 'yyyy-mm-dd hh24:mi:ss')";
		}
		else if (Config.isHSQLDBUsed())
		{
			queryString = "SELECT {RFC_ERROR:PK}" + "FROM {" + BHGERfcCallErrorModel._TYPECODE + " AS RFC_ERROR} "
					+ " WHERE {RFC_ERROR.creationtime} < TO_DATE( '" + formatter.format(c.getTime()) + "', 'yyyy-mm-dd hh24:mi:ss')";
		}
		final SearchResult<BHGERfcCallErrorModel> result = flexibleSearchService.search(queryString);
		return result.getResult();
	}


	@Override
	public List<GEEdgeProductModel> getProductsWithoutCategories()
	{

		final String queryString = "SELECT DISTINCT {PK} FROM {GEEdgeProduct LEFT JOIN CatalogVersion ON {GEEdgeProduct.catalogVersion} = {CatalogVersion.pk} LEFT JOIN Catalog ON {Catalog.pk} = {CatalogVersion.catalog} LEFT JOIN CategoryProductRelation ON {GEEdgeProduct.pk} = {CategoryProductRelation.target} LEFT JOIN Category ON {CategoryProductRelation.source} = {Category.pk} JOIN GEEdgeProductType as gdp ON {GEEdgeProduct.productType} = {gdp.pk}} WHERE {Category.code} IS NULL AND {Catalog.id}='bhgeGlobalProductCatalog' AND {CatalogVersion.version}='Online'";

		final SearchResult<GEEdgeProductModel> result = flexibleSearchService.search(queryString);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult();
		}
		else
		{
			return null;
		}
	}


	@Override
	public List<GEEdgeProductModel> getProductsWithoutPrices()
	{
		final String queryString = "SELECT DISTINCT {PK} FROM {GEEdgeProduct LEFT JOIN CatalogVersion ON {GEEdgeProduct.catalogVersion} = {CatalogVersion.PK} LEFT JOIN Catalog ON {Catalog.PK} = {CatalogVersion.catalog} LEFT JOIN CategoryProductRelation ON {GEEdgeProduct.PK} = {CategoryProductRelation.target} LEFT JOIN Category ON {CategoryProductRelation.source} = {Category.PK} JOIN GEEdgeProductType as gdp ON {GEEdgeProduct.productType} = {gdp.PK} } WHERE {GEEdgeProduct.basePrice} IS NULL AND {Catalog.id}='bhgeGlobalProductCatalog' AND {CatalogVersion.version}='Online'";
		final SearchResult<GEEdgeProductModel> result = flexibleSearchService.search(queryString);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult();
		}
		else
		{
			return null;
		}
	}


	@Override
	public List<AddressModel> getShipTosWithoutCountries()
	{
		final String queryString = "select {pk} from {address} where {country} is null";
		final SearchResult<AddressModel> result = flexibleSearchService.search(queryString);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult();
		}
		else
		{
			return null;
		}
	}


	@Override
	public List<AddressModel> getInvalidShipTos()
	{
		final String queryString = "select {pk} from {address} where {country} is null";
		final SearchResult<AddressModel> result = flexibleSearchService.search(queryString);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult();
		}
		else
		{
			return null;
		}
	}



	@Override
	public List<GEEdgeProductModel> getProductsWithP5Status()
	{
		final StringBuilder queryString = new StringBuilder();
		queryString.append("SELECT DISTINCT {PK} FROM {GEEdgeProduct AS GEEP ")
		.append("LEFT JOIN CatalogVersion ON {GEEP.catalogVersion} = {CatalogVersion.pk} ") 
		.append("LEFT JOIN Catalog as cat ON {cat.pk} = {GEEP.catalog} ")
		.append("JOIN Product2SalesAreaRelation ON {Product2SalesAreaRelation.source} = {GEEP.pk} ")
		.append("JOIN BHGESalesAreaData ON {BHGESalesAreaData.pk} = {Product2SalesAreaRelation.target} ")
		.append("JOIN MaterialChannelStatus as mcs ON {BHGESalesAreaData.materialStatus} = {mcs.pk} ") 
		.append("JOIN HybrisStatus as hyb ON {BHGESalesAreaData.hybrisStatus} = {hyb.pk}} ")
		.append("WHERE {mcs.code} = 'P5' AND ({hyb.code} = 'NOSELL' OR {hyb.code} = 'SELL'  OR {hyb.code} = 'E5') AND {CatalogVersion.version}='Online'");
		final SearchResult<GEEdgeProductModel> result = flexibleSearchService.search(queryString.toString());
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult();
		}
		else
		{
			return null;
		}
	}


	@Override
	public List<GEEdgeProductModel> getProductsWithType()
	{
		final String queryString = "SELECT DISTINCT {PK} FROM {GEEdgeProduct AS GEP join Catalog AS C on {C.pk} = {GEP.catalog} JOIN GEEdgeProductType AS gdp ON {GEP.productType} = {gdp.pk} JOIN CatalogVersion ON {GEP.catalogVersion} = {CatalogVersion.pk}} WHERE {gdp.code} IS NOT NULL AND {C.id}='bhgeGlobalProductCatalog' AND {CatalogVersion.version}='Online'";
		final SearchResult<GEEdgeProductModel> result = flexibleSearchService.search(queryString);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult();
		}
		else
		{
			return null;
		}
	}


	@Override
	public List<CategoryModel> getCategoriesWithoutProductAssigned()
	{
		final String queryString = "SELECT DISTINCT{PK} FROM {Category AS c LEFT JOIN CategoryProductRelation  as CPR ON {CPR.source} = {c.pk} LEFT JOIN GEEdgeProduct AS GEP ON {CPR.target} = {GEP.pk}} WHERE {CPR.target} IS NULL";
		final SearchResult<CategoryModel> result = flexibleSearchService.search(queryString);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult();
		}
		else
		{
			return null;
		}
	}


	@Override
	public CartModel getExistingCartForSoldTo(final UserModel userModel)
	{
		CartModel returnCart = null;
		final Map<String, Object> params = new HashMap<String, Object>();
		StringBuilder queryString = new StringBuilder("SELECT {c.pk} FROM {cart as c} where {c.user}=?user AND {c.soldToForCart}=?salesArea" +
				" AND {c.name} is null");
		params.put("user", userModel);
		final B2BUnitModel salesArea = ((GEEdgeCustomerModel) userModel).getDefaultB2BUnit();
		final String productLine = ((GEEdgeCustomerModel) userModel).getProductLineMap().get(salesArea.getUid());
		if (StringUtils.isNotBlank(productLine))
		{
			queryString.append(" AND {c.productLine}=?productLine");
			params.put("productLine", productLine);
		}
		params.put("salesArea", salesArea);
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		query.addQueryParameters(params);
		if (CollectionUtils.isNotEmpty(flexibleSearchService.search(query).getResult()))
		{
			returnCart = (CartModel) flexibleSearchService.search(query).getResult().get(0);
		}
		else
		{
			returnCart = checkForEmptyCart(userModel);
		}
		//LOG.info("In getExistingCartForSoldTo - return cart for sold to for cart " + returnCart.getSoldToForCart().getUid());
		return returnCart;
	}

	/**
	 * Checks for empty cart on user and assigns as session cart in case of non existent sales area cart
	 *
	 * @param userModel
	 * @return
	 */
	private CartModel checkForEmptyCart(final UserModel userModel) {
		LOG.info("Inside checkForEmptyCart - Start ");
		if (userModel instanceof GEEdgeCustomerModel customer) {
			final B2BUnitModel defaultB2bUnit = customer.getDefaultB2BUnit();
			final String productLine = customer.getProductLineMap().get(defaultB2bUnit.getUid());
			final Map<String, Object> params = new HashMap<String, Object>();
				String queryString = "SELECT {c:pk}" + "FROM {" + CartModel._TYPECODE
						+ " AS c} where {c:user}=?user and {c.name} is null AND {c.productLine} is NULL";
			params.put("user", userModel);
			final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
			query.addQueryParameters(params);
			final SearchResult<CartModel> result = this.flexibleSearchService.search(query);
			final List<CartModel> cartModels = result.getResult();
			for (final CartModel cartModel : cartModels) {
				if (CollectionUtils.isEmpty(cartModel.getEntries())) {
					//LOG.info("Inside checkForEmptyCart - " + model.getDefaultB2BUnit().getUid());
					cartModel.setSoldToForCart(defaultB2bUnit);
					if (StringUtils.isNotBlank(productLine)) {
						cartModel.setProductLine(productLine);
					}
					modelService.save(cartModel);
					return cartModel;
				}
			}
		}
		return null;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.order.daos.BHGEB2BOrderDao#fetchOrderByCode(java.lang.String)
	 */
	@Override
	public OrderModel fetchOrderByCode(final String orderCode)
	{
		final String queryString = "SELECT {o:pk} from { " + OrderModel._TYPECODE + " as o} WHERE {o:code} = ?code AND {o:"
				+ OrderModel.VERSIONID + "} IS NULL";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put(OrderModel.CODE, orderCode);
		query.addQueryParameters(params);
		final SearchResult<OrderModel> result = this.getFlexibleSearchService().search(query);
		final List<OrderModel> orders = result.getResult();
		return orders.isEmpty() ? null : orders.get(0);
	}




	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.order.daos.BHGEB2BOrderDao#getProductsWithoutFacet()
	 */
	@Override
	public List<GEEdgeProductModel> getProductsWithoutFacet()
	{
		// YTODO Auto-generated method stub
		return null;
	}


	//Weekly Order Report
	@Override
	public List<OrderModel> getWeeklyOrders(String fromDate, String toDate)
	{
		String queryString  = "";

		if(Config.isSQLServerUsed()) {
			queryString = "SELECT {o:pk} FROM {Order as o} WHERE {o.creationtime} >= convert(datetime,'" +fromDate+ "',20) AND {o.creationtime} <= convert(datetime,'" +toDate+ "',20)";
		} else  {
			queryString = "SELECT {o:pk} FROM {Order as o} WHERE to_char({o.creationtime},'yyyy/mm/dd hh:mm:ss AM/PM')>='" + fromDate + "' AND to_char({o.creationtime},'yyyy/mm/dd hh:mm:ss AM/PM')<='" + toDate + "'";
		}
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);

		LOG.debug("Weekly order query " + query.getQuery());
		final SearchResult<OrderModel> result = flexibleSearchService.search(query);

		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult();
		}
		else
		{
			return null;
		}
	}

	//Weekly Quote Order Report
	@Override
	public List<QuoteModel> getWeeklyQuoteOrders(String fromDate, String toDate)	{
		String queryString = "";
		if(Config.isSQLServerUsed()) {
			queryString = "SELECT {o:pk} FROM {Quote as o} WHERE {o.creationtime} >= convert(datetime,'" +fromDate+ "',20) AND {o.creationtime} <= convert(datetime,'" +toDate+ "',20)";
		} else {
			queryString = "SELECT {o:pk} FROM {Quote as o} WHERE to_char({o.creationtime},'yyyy/mm/dd hh:mm:ss AM/PM')>='" + fromDate + "' AND to_char({o.creationtime},'yyyy/mm/dd hh:mm:ss AM/PM')<='" + toDate + "'";
		}
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);

		LOG.info("Weekly Quote order query " + query.getQuery());
		final SearchResult<QuoteModel> result = flexibleSearchService.search(query);

		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult();
		}
		else
		{
			return null;
		}
	}

	@Override
	public List<B2BUnitModel> getB2bunitWithoutAddressAssigned()
	{
		final String queryString = "SELECT distinct({B2B:PK}) FROM {" + B2BUnitModel._TYPECODE + " AS B2B LEFT JOIN "
				+ AddressModel._TYPECODE
				+ " AS A ON {A:OWNER}={B2B:PK}} WHERE ({B2B:UID} LIKE '%_GE_GE%' or {B2B:UID} LIKE '%_BN_BN%' or {B2B:UID} LIKE '%_GC_GC%') and {B2B:UID} not like 'BHGERegister'";
		final SearchResult<B2BUnitModel> result = flexibleSearchService.search(queryString);
		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult();
		}
		else
		{
			return null;
		}
	}

	@Override
	public B2BUnitModel getSoldToForB2BUnit(final String soldTo)
	{
		final String queryString = "SELECT {B2B:pk} from { " + B2BUnitModel._TYPECODE + " as B2B} WHERE {B2B:uid} ='" + soldTo
				+ "'";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		//LOG.info("Query to find SoldTo value " + query.getQuery());
		final SearchResult<B2BUnitModel> result = flexibleSearchService.search(query);

		if (result.getResult() != null && result.getResult().size() > 0)
		{
			return result.getResult().get(0);
		}
		else
		{
			return null;
		}
	}

	@Override
	public List<BHGESavedCreditcardModel> getSavedCards(B2BCustomerModel b2bCustomer) {
		final Map<String, Object> params = new HashMap<String, Object>();
		final String queryString = "SELECT {" + BHGESavedCreditcardModel.PK + "} from {" + BHGESavedCreditcardModel._TYPECODE + "} WHERE {" + BHGESavedCreditcardModel.B2BCUSTOMER + "} =?b2bCustomer";
		params.put("b2bCustomer", b2bCustomer);
		FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		query.addQueryParameters(params);
		final SearchResult<BHGESavedCreditcardModel> searchResult = flexibleSearchService.search(query);
		if (searchResult.getResult() != null && !searchResult.getResult().isEmpty()) {
			return searchResult.getResult();
		} else {
			return null;
		}
	}
	@Override
	public BHGECurrencyCardThresholdModel getCurrencyLimit(CurrencyModel cartCurrency){
		final Map<String, Object> params = new HashMap<String, Object>();
		final String queryString = "SELECT {"+ BHGECurrencyCardThresholdModel.PK+"} from {" + BHGECurrencyCardThresholdModel._TYPECODE + "} WHERE {"+BHGECurrencyCardThresholdModel.CURRENCY+"} =?cartCurrency";
		params.put("cartCurrency", cartCurrency);
		FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		query.addQueryParameters(params);
		final SearchResult<BHGECurrencyCardThresholdModel> searchResult = flexibleSearchService.search(query);
		if(searchResult.getResult() != null && !searchResult.getResult().isEmpty()){
			return searchResult.getResult().get(0);
		}
		return null;
	}

	/**
	 * TA907173
	 * @param paymentTerm
	 * @Return PaymenttermModel
	 */
	@Override
	public PaymenttermModel getCCPaymentTerm(String paymentTerm) {
		final FlexibleSearchQuery query = new FlexibleSearchQuery(
				"SELECT {" + PaymenttermModel.PK + "} FROM {" + PaymenttermModel._TYPECODE + "} " +
						"WHERE {" + PaymenttermModel.CODE + "} =?paymentTerm"
		);
		query.addQueryParameter("paymentTerm", paymentTerm);
		SearchResult<PaymenttermModel> searchResult = getFlexibleSearchService().search(query);
		if(CollectionUtils.isNotEmpty(searchResult.getResult())){
			return searchResult.getResult().get(0);
		}
		return null;
	}

	@Override
	public FiservMerchantIdModel getFiservMerchantId(String currentSalesArea, String currency) {
		try {
			final FlexibleSearchQuery query = new FlexibleSearchQuery(
					"SELECT {" + FiservMerchantIdModel.PK + "} FROM {" + FiservMerchantIdModel._TYPECODE + "} " +
							"WHERE {" + FiservMerchantIdModel.SALESAREAID + "} =?salesAreaId AND {" + FiservMerchantIdModel.CURRENCY + "} =?currency"
			);
			LOG.info("Merchat Id query before params: " + query.toString());
			query.addQueryParameter("salesAreaId", currentSalesArea);
			query.addQueryParameter("currency", currency);
			LOG.info("Merchat Id query: " + query.toString());
			SearchResult<FiservMerchantIdModel> results = getFlexibleSearchService().search(query);
			if (org.apache.commons.collections4.CollectionUtils.isNotEmpty(results.getResult())) {
				return results.getResult().get(0);
			}
			return null;
		}
		catch (Exception e) {
			LOG.error("Error while fetching Fiserv Merchant Id for Sales Area: " + currentSalesArea + " and Currency: " + currency, e);
			return null;
		}
	}

	@Override
	public List<OrderModel> getNotProcessedOrders(final String fromDate) {
		String queryString = StringUtils.EMPTY;
		if (Config.isSQLServerUsed()) {
			LOG.info("DefaultBHGEB2BOrderDao : getNotProcessedOrders :  if block called sqlserver");
			queryString = "select {O.pk} from {" + OrderModel._TYPECODE + " as O JOIN " + OrderStatus._TYPECODE
					+ " as OS on {O.status} = {OS.pk} " + " JOIN " + ExportStatus._TYPECODE
					+ " as ES on {O.exportStatus} = {ES.pk} " + " JOIN " + BHGERMACommerceType._TYPECODE
					+ " as CT on {O.commerceType} = {CT.pk}} Where {OS.Code} IN('CREATED','ERROR','CHECKED_VALID') and {ES.code} = 'NOTEXPORTED' and {CT.code} IN('BUY','GUESTBUY') and format({O.creationtime},'yyyy-MM-dd HH:mm:ss') < '"
					+ fromDate + "'";
		} else {
			LOG.info("DefaultBHGEB2BOrderDao : getNotProcessedOrders :  else block called ");
			queryString = "select {O.pk} from {" + OrderModel._TYPECODE + " as O JOIN " + OrderStatus._TYPECODE
					+ " as OS on {O.status} = {OS.pk} " + " JOIN " + ExportStatus._TYPECODE
					+ " as ES on {O.exportStatus} = {ES.pk} " + " JOIN " + BHGERMACommerceType._TYPECODE
					+ " as CT on {O.commerceType} = {CT.pk}} Where {OS.Code} IN('CREATED','ERROR','CHECKED_VALID') and {ES.code} = 'NOTEXPORTED' and {CT.code} IN('BUY','GUESTBUY') and to_char({O.creationtime},'YYYY-MM-DD HH24:MI:SS') < '"
					+ fromDate + "'";
		}
		final FlexibleSearchQuery fquery = new FlexibleSearchQuery(queryString);
		fquery.setDisableCaching(true);
		final SearchResult<OrderModel> result = flexibleSearchService.search(fquery);
		LOG.info("Not Processed Orders Query is : " + fquery + "and result is :" + result.getResult());
		return result.getResult();
	}
	
	@Override
	public List<OrderModel> getOrderByStatus(String fromDate) {
		String queryString = StringUtils.EMPTY;
		if (Config.isSQLServerUsed()) {
			queryString = "select {O.pk} from {" + OrderModel._TYPECODE + " as O JOIN " + OrderStatus._TYPECODE
					+ " as OS on {O.status} = {OS.pk} " + " JOIN " + ExportStatus._TYPECODE
					+ " as ES on {O.exportStatus} = {ES.pk} " + " JOIN " + BHGERMACommerceType._TYPECODE
					+ " as CT on {O.commerceType} = {CT.pk}} Where {OS.Code} IN('CREATED','ERROR','CHECKED_VALID') and {ES.code} = 'EXPORTED' and {CT.code} IN('BUY','GUESTBUY') and format({O.creationtime},'yyyy-MM-dd HH:mm:ss') < '"
					+ fromDate + "'";
		} else {
			queryString = "select {O.pk} from {" + OrderModel._TYPECODE + " as O JOIN " + OrderStatus._TYPECODE
					+ " as OS on {O.status} = {OS.pk} " + " JOIN " + ExportStatus._TYPECODE
					+ " as ES on {O.exportStatus} = {ES.pk} " + " JOIN " + BHGERMACommerceType._TYPECODE
					+ " as CT on {O.commerceType} = {CT.pk}} Where {OS.Code} IN('CREATED','ERROR','CHECKED_VALID') and {ES.code} = 'EXPORTED' and {CT.code} IN('BUY','GUESTBUY') and to_char({O.creationtime},'YYYY-MM-DD HH24:MI:SS') < '"
					+ fromDate + "'";
		}
		
		final FlexibleSearchQuery fquery = new FlexibleSearchQuery(queryString);
		fquery.setDisableCaching(true);
		final SearchResult<OrderModel> result = flexibleSearchService.search(fquery);
		LOG.info("Order response not received from SAP : " + fquery + "and result is :" + result.getResult());
		return result.getResult();

	}
	
	@Override
	public List<OrderEntryModel> getConfigAttachmentEntries() {

		final String queryString = QUERY_CONFIG_ATTACHMENT_ENTRY ;
		final SearchResult<OrderEntryModel> result = flexibleSearchService.search(queryString);
		
		if (result.getResult() != null && result.getResult().size() > 0) {
			return result.getResult();
		}
		else {
			return null;
		}
	}

    @Override
    public void deleteAllCarts(UserModel user, String b2bUnit, String salesOrg, String commerceType) {
        final Map<String, Object> params = new HashMap<String, Object>();
        StringBuilder queryString = new StringBuilder("SELECT {c.pk} FROM {cart as c JOIN B2BUnit AS unit ON {c.soldToForCart} = {unit.pk}} where {c.name} is null AND {c.user}=?user");
        params.put("user", user);
        LOG.info("DefaultBHGEB2BOrderDao DeleteAllCarts");
        if (StringUtils.isNotBlank(b2bUnit) && StringUtils.isNotBlank(salesOrg))
        {
            queryString.append(" AND {unit.uid} LIKE CONCAT(?b2bUnit,'%')");
            StringBuilder sb = new StringBuilder();
            sb.append(b2bUnit).append("_").append(salesOrg);
            String uid = sb.toString();
            LOG.info("DefaultBHGEB2BOrderDao DeleteAllCarts b2bunitId"+uid);
            params.put("b2bUnit", uid);
        } else if (StringUtils.isNotBlank(b2bUnit)) {
            queryString.append(" AND {unit.uid} LIKE CONCAT(?b2bUnit,'%')");
            LOG.info("DefaultBHGEB2BOrderDao DeleteAllCarts salesOrg null b2bunitId"+b2bUnit);
            params.put("b2bUnit", b2bUnit);
        }
        if(StringUtils.isNotBlank(commerceType)){
            queryString.append(" AND {c.commerceType}=?bhgermaCommerceType");
            LOG.info("DefaultBHGEB2BOrderDao DeleteAllCarts commerceType"+commerceType);
            BHGERMACommerceType bhgermaCommerceType = null;
            bhgermaCommerceType =BHGERMACommerceType.valueOf(commerceType.toUpperCase());
            params.put("bhgermaCommerceType", bhgermaCommerceType);
        }
        final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
        query.addQueryParameters(params);
        SearchResult<CartModel> result = flexibleSearchService.search(query);
        if (CollectionUtils.isNotEmpty(result.getResult()))
        {
            LOG.info("DefaultBHGEB2BOrderDao DeleteAllCarts results");
            modelService.removeAll(result.getResult());
            LOG.info("DefaultBHGEB2BOrderDao DeleteAllCarts results Deleted");
        }
        else{
            LOG.info("DefaultBHGEB2BOrderDao DeleteAllCarts - carts are empty");
        }
    }
}