/**
 * 
 */
package com.bhge.integration.oauth.login.dao.impl;

import com.google.common.collect.ImmutableMap;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.util.Config;
import de.hybris.platform.webservicescommons.model.OpenIDClientDetailsModel;

import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.integration.oauth.login.dao.BHGEOAuthLoginDao;

import java.util.Map;

/**
 * @author 212722447
 *
 */
public class BHGEOAuthLoginDaoImpl implements BHGEOAuthLoginDao
{
	

//	private static final String FETCH_OPEN_IDC_CLIENT = "select {pk} from {OpenIDClientDetails}";
	private final String FETCH_OPEN_IDC_CLIENT = String.format("SELECT {%s} FROM {%s} WHERE {%s} = ?clientID", OpenIDClientDetailsModel.PK,
			OpenIDClientDetailsModel._TYPECODE, OpenIDClientDetailsModel.CLIENTID);
	@Autowired
	private FlexibleSearchService flexibleSearchService;


//	@Override
//	public OpenIDClientDetailsModel fetchOpenIDClientDetails()
//	{
//		final FlexibleSearchQuery query = new FlexibleSearchQuery(FETCH_OPEN_IDC_CLIENT);
//		final SearchResult<OpenIDClientDetailsModel> results = flexibleSearchService.search(query);
//		return CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult().get(0) : null;
//
//	}
	//TODO make systemID Specific : Nitish
	@Override
	public OpenIDClientDetailsModel fetchOpenIDClientDetails() {
		final String  clientID = Config.getString("sso.oauth.clientID","GEOG_DS_PRD_CLIENT");
		final Map<String, Object> params = ImmutableMap.of("clientID", clientID);
		final FlexibleSearchQuery query = new FlexibleSearchQuery(FETCH_OPEN_IDC_CLIENT, params);
		return flexibleSearchService.searchUnique(query);
	}
}
