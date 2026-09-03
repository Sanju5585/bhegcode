/**
 *
 */
package com.bhge.store.daos.impl;

import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.store.daos.impl.DefaultBaseStoreDao;
import de.hybris.platform.util.Config;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.model.GEEdgeSystemAlertModel;
import com.bhge.store.daos.BHGEEdgeBaseStoreDao;


public class BHGEEdgeBaseStoreDaoImpl extends DefaultBaseStoreDao implements BHGEEdgeBaseStoreDao
{

	Logger LOG = Logger.getLogger(BHGEEdgeBaseStoreDaoImpl.class);

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Override
	public List<SAPConfigurationModel> findSAPConfigurationWithParams(final String salesRegion, final String distributionChannel,
			final String division)
	{
		final String queryString = "SELECT {s:pk} FROM {" + SAPConfigurationModel._TYPECODE + " AS s} WHERE {s:"
				+ SAPConfigurationModel.SAPCOMMON_SALESORGANIZATION + "}=?salesRegion" + " AND {s:"
				+ SAPConfigurationModel.SAPCOMMON_DISTRIBUTIONCHANNEL + "}=?distributionChannel AND {s:"
				+ SAPConfigurationModel.SAPCOMMON_DIVISION + "}=?division";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("salesRegion", salesRegion);
		params.put("distributionChannel", distributionChannel);
		params.put("division", division);
		query.addQueryParameters(params);
		return flexibleSearchService.<SAPConfigurationModel> search(query).getResult();
	}

	@Override
	public List<BaseStoreModel> findBaseStoreBySAPConfiguration(final String sapConfigurationId)
	{
		final String queryString = "SELECT {bs:pk} FROM {" + BaseStoreModel._TYPECODE + " AS bs} WHERE {bs:"
				+ BaseStoreModel.SAPCONFIGURATION + "}=?sapConfiguration";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("sapConfiguration", sapConfigurationId);
		query.addQueryParameters(params);
		return flexibleSearchService.<BaseStoreModel> search(query).getResult();

	}

	@Override
	public List<GEEdgeSystemAlertModel> findSystemMessage(final String code)
	{
		final String queryString = "SELECT {pk} FROM {" + GEEdgeSystemAlertModel._TYPECODE + "} WHERE {code}=?code";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("code", code);
		query.addQueryParameters(params);
		return flexibleSearchService.<GEEdgeSystemAlertModel> search(query).getResult();
	}

	@Override
	public List<CategoryModel> findCategory(final Date startTime)
	{
		String queryString = null;
		final Map<String, Object> params = new HashMap<String, Object>();
		if (startTime == null)
		{
			queryString = "SELECT DISTINCT{PK} FROM {Category AS cat LEFT JOIN CategoryProductRelation  as CPR ON {CPR.source} = {cat.pk} LEFT JOIN GEEdgeProduct AS GEP ON {CPR.target} = {GEP.pk}}  WHERE {CPR.target} IS NOT NULL";
		}
		else
		{
			if (Config.isSQLServerUsed())
			{
				LOG.info("In isSQLServerUsed DB");
				final SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				final String lastRunTime = formatter.format(startTime);
				LOG.info("Last Run time after formatting is " + lastRunTime);
				queryString = "SELECT DISTINCT{PK} FROM {Category AS cat LEFT JOIN CategoryProductRelation  as CPR ON {CPR.source} = {cat.pk} "
						+ "LEFT JOIN GEEdgeProduct AS GEP ON {CPR.target} = {GEP.pk}} WHERE {CPR.target} IS NOT NULL "
						+ "AND ({cat.modifiedtime} >= convert(datetime,'" + lastRunTime + "',20)"
						+ "OR {cat.creationtime} >= convert( datetime,'" + lastRunTime + "',20) "
						+ "OR {GEP.creationtime} >= convert(datetime, '" + lastRunTime + "',20) "
						+ "OR {GEP.modifiedtime} >= convert(datetime, '" + lastRunTime + "',20))";
				params.put("lastRunTime", lastRunTime);
				LOG.info("Query is " + queryString);

			}
			else if (Config.isOracleUsed())
			{
				LOG.info("In Oracle DB");
				final SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				final String lastRunTime = formatter.format(startTime);
				LOG.info("Last Run time after formatting is " + lastRunTime);
				queryString = "SELECT DISTINCT{PK} FROM {Category AS cat LEFT JOIN CategoryProductRelation  as CPR ON {CPR.source} = {cat.pk} LEFT JOIN GEEdgeProduct AS GEP ON {CPR.target} = {GEP.pk}} WHERE {CPR.target} IS NOT NULL AND ({cat.modifiedtime} >= TO_DATE( '"
						+ lastRunTime + "', 'yyyy-mm-dd hh24:mi:ss') OR {cat.creationtime} >= TO_DATE( '" + lastRunTime
						+ "', 'yyyy-mm-dd hh24:mi:ss') OR {GEP.creationtime} >= TO_DATE( '" + lastRunTime
						+ "', 'yyyy-mm-dd hh24:mi:ss') OR {GEP.modifiedtime} >= TO_DATE( '" + lastRunTime
						+ "', 'yyyy-mm-dd hh24:mi:ss'))";
				params.put("lastRunTime", lastRunTime);
				LOG.info("Query is " + queryString);

			}
			else if (Config.isHSQLDBUsed())
			{
				LOG.info("In HSQL DB");
				final SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				final String lastRunTime = formatter.format(startTime);
				queryString = "SELECT DISTINCT{PK} FROM {Category AS cat LEFT JOIN CategoryProductRelation  as CPR ON {CPR.source} = {cat.pk} LEFT JOIN GEEdgeProduct AS GEP ON {CPR.target} = {GEP.pk}} WHERE {CPR.target} IS NOT NULL AND ({cat.modifiedtime} >= ?lastRunTime OR {cat.creationtime} >= ?lastRunTime OR {GEP.modifiedtime} >= ?lastRunTime OR {GEP.creationtime} >= ?lastRunTime)";
				params.put("lastRunTime", lastRunTime);
			}

		}
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		query.addQueryParameters(params);
		return flexibleSearchService.<CategoryModel> search(query).getResult();
	}


	@Override
	public List<GEEdgeProductModel> findProducts(final CategoryModel category)
	{
		String queryString = null;
		final Map<String, Object> params = new HashMap<String, Object>();
		if (null != category)
		{
			queryString = "SELECT DISTINCT {PK} FROM {GEEdgeProduct LEFT JOIN CatalogVersion ON {GEEdgeProduct.catalogVersion} = {CatalogVersion.pk} LEFT JOIN Catalog ON {Catalog.pk} = {CatalogVersion.catalog} LEFT JOIN CategoryProductRelation ON {GEEdgeProduct.pk} = {CategoryProductRelation.target} LEFT JOIN Category ON {CategoryProductRelation.source} = {Category.pk} } WHERE {CatalogVersion.VERSION}='Staged' AND {Catalog.ID}='bhgeGlobalProductCatalog' AND {Category.code}=?categoryCode";
			params.put("categoryCode", category.getCode());
		}
		else
		{
			return null;
		}
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		query.addQueryParameters(params);
		return flexibleSearchService.<GEEdgeProductModel> search(query).getResult();
	}
}
