package com.bhge.core.calportal.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.bhge.core.calportal.dao.CalPortalDao;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;

import de.hybris.platform.search.restriction.SearchRestrictionService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;

public class DefaultCalPortalDao implements CalPortalDao {

	private static Logger log = Logger.getLogger(DefaultCalPortalDao.class);

	private FlexibleSearchService flexibleSearchService;
	private SearchRestrictionService searchRestrictionService;

	private static final String PRODUCT_LINE = "productLine";
	private static final String FETCH_PRODUCT_LIST = "select {PK} from {BHGERegisterKeyValueData} where lower({attributeType}) = lower(?productLine) and {activestatus}=1 order by {attributeKey}";

	public SearchRestrictionService getSearchRestrictionService() {
		return searchRestrictionService;
	}

	public void setSearchRestrictionService(SearchRestrictionService searchRestrictionService) {
		this.searchRestrictionService = searchRestrictionService;
	}

	public FlexibleSearchService getFlexibleSearchService() {
		return flexibleSearchService;
	}

	public void setFlexibleSearchService(FlexibleSearchService flexibleSearchService) {
		this.flexibleSearchService = flexibleSearchService;
	}

	@Override
	public List<BHGERegisterKeyValueDataModel> fetchProductFamilyList(final String appName) {
		log.info("Inside fetching Product");

		final List<BHGERegisterKeyValueDataModel> productFamilyList = new ArrayList<>();

		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PRODUCT_LIST);
		fQuery.addQueryParameter(PRODUCT_LINE, appName);

		log.info("productListQuery: " + fQuery);

		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null) {
			querysearchResult.getResult().forEach(eachResult -> {
				productFamilyList.add((BHGERegisterKeyValueDataModel) eachResult);
			});
		}
		log.info("productFamilyList: " + productFamilyList);

		return productFamilyList;
	}

}
