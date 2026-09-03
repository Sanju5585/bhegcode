package com.bhge.core.wygate.dao.impl;



import org.apache.commons.collections4.CollectionUtils;
import org.apache.log4j.Logger;

import com.bhge.core.model.DSChemistryDataModel;
import com.bhge.core.model.DSFilmDataModel;
import com.bhge.core.wygate.dao.WygateCalPortalDao;

import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;

public class DefaultWygateCalPortalDao implements WygateCalPortalDao{
	
	private static final Logger LOG = Logger.getLogger(DefaultWygateCalPortalDao.class);
	
	private FlexibleSearchService flexibleSearchService;
	
	private static final String FETCH_BATCH_DATA = "SELECT {PK} FROM {DSFilmData} WHERE lower({BATCH})=lower(?batchNumber)";
	
	private static final String FETCH_FABRICATION_DATA  = "SELECT {PK} FROM {DSChemistryData} WHERE lower({FABRICATIONNUMBER})=lower(?fabricationNumber)";
	
	@Override
	public DSFilmDataModel getWygateBatchData(String number) {
		LOG.info("Inside DAO Batch - " + number);
		FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_BATCH_DATA);
		fQuery.addQueryParameter("batchNumber", number);
		final SearchResult<DSFilmDataModel> querysearchResult = getFlexibleSearchService().search(fQuery);
		LOG.info("querysearchResult " + querysearchResult);
		if(null != querysearchResult && CollectionUtils.isNotEmpty(querysearchResult.getResult())) {
			LOG.info("Batch Data " + querysearchResult.getResult().get(0));
			return querysearchResult.getResult().get(0);
		}
		LOG.info("NULL is returning");
		return null;
	}

	@Override
	public DSChemistryDataModel getWygateFabricationData(String number) {
		LOG.info("Inside DAO Film - " + number);
		FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_FABRICATION_DATA);
		fQuery.addQueryParameter("fabricationNumber", number);
		final SearchResult<DSChemistryDataModel> querysearchResult = getFlexibleSearchService().search(fQuery);
		LOG.info("querysearchResult " + querysearchResult);
		if(null != querysearchResult && CollectionUtils.isNotEmpty(querysearchResult.getResult())) {
			LOG.info("Film Data " + querysearchResult.getResult().get(0));
			return querysearchResult.getResult().get(0);
		}
		LOG.info("NULL is returning");
		return null;		
	}

	public FlexibleSearchService getFlexibleSearchService() {
		return flexibleSearchService;
	}

	public void setFlexibleSearchService(FlexibleSearchService flexibleSearchService) {
		this.flexibleSearchService = flexibleSearchService;
	}

}
