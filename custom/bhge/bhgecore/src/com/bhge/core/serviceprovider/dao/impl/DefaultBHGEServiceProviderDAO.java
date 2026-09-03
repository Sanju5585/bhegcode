/**
 * 
 */
package com.bhge.core.serviceprovider.dao.impl;

import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hybris.ge.edge.core.model.type.GEEdgeServiceProviderModel;
import com.bhge.core.serviceprovider.dao.BHGEServiceProviderDAO;
import com.bhge.core.user.daos.impl.DefaultBHGEUserProfileDao;

import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.session.SessionService;

public class DefaultBHGEServiceProviderDAO implements
		BHGEServiceProviderDAO {
	private static final Logger LOG = Logger
			.getLogger(DefaultBHGEServiceProviderDAO.class);

	private FlexibleSearchService flexibleSearchService;

	public FlexibleSearchService getFlexibleSearchService() {
		return flexibleSearchService;
	}

	public void setFlexibleSearchService(
			FlexibleSearchService flexibleSearchService) {
		this.flexibleSearchService = flexibleSearchService;
	}

	public boolean validServiceProvider(String name) {
		boolean validServiceProvider = false;
		LOG.debug("Entered into validServiceProvider method");
		final String queryString = "SELECT {c:" + GEEdgeServiceProviderModel.PK
				+ "}" + "FROM {"
				+ GEEdgeServiceProviderModel._TYPECODE
				+ " AS c} "//
				+ "WHERE " + "{c:" + GEEdgeServiceProviderModel.SERVICEPROVIDER
				+ "}=?name ";

		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);

		query.addQueryParameter("name", name);
		LOG.debug("printing query  :  " + query);
		List<GEEdgeServiceProviderModel> result = flexibleSearchService
				.<GEEdgeServiceProviderModel> search(query).getResult();
		if (result != null && result.size() != 0) {
			validServiceProvider = true;
		}
		return validServiceProvider;
	}

	public String getSiteURL(String trackingNum, String serviceProvider) {

		String url;
		LOG.debug("Entered into getSiteURL method");
		final String queryString = "SELECT {c:" + GEEdgeServiceProviderModel.PK
				+ "}" + "FROM {"
				+ GEEdgeServiceProviderModel._TYPECODE
				+ " AS c} "//
				+ "WHERE " + "{c:" + GEEdgeServiceProviderModel.SERVICEPROVIDER
				+ "}=?name ";

		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);

		query.addQueryParameter("name", serviceProvider);
		LOG.debug("printing query  :  " + query);
		List<GEEdgeServiceProviderModel> result = flexibleSearchService
				.<GEEdgeServiceProviderModel> search(query).getResult();
		LOG.debug("printing result  :  " + (String) result.get(0).getUrl());

		return (String) result.get(0).getUrl();
	}
	
	public GEEdgeServiceProviderModel getCourierNameForCode(String courier) {
		final String queryString = "SELECT {c:pk} FROM {GEEdgeServiceProvider AS c} WHERE {c:serviceProvider}=?courier";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		query.addQueryParameter("courier", courier);
		List<GEEdgeServiceProviderModel> result = flexibleSearchService.<GEEdgeServiceProviderModel> search(query).getResult();
		if(null != result && result.size() > 0) {
			return result.get(0);
		}
		return null;
	}

}

