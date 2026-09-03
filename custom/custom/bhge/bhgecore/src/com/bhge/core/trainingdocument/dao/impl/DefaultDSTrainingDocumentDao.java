package com.bhge.core.trainingdocument.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.model.TrainingDocumentModel;
import com.bhge.core.notifications.dao.impl.DefaultDsNotificationsDao;
import com.bhge.core.trainingdocument.dao.DSTrainingDocumentDao;

import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;


	public class DefaultDSTrainingDocumentDao implements DSTrainingDocumentDao {
		
		@Autowired
		private FlexibleSearchService flexibleSearchService;
		
		private static final Logger LOG = Logger.getLogger(DefaultDsNotificationsDao.class);
		private static final String GET_DOCUMENT_BY_CODE = "Select {pk} from {TrainingDocument}";
		private static final String GET_DOCUMENT_BY_NAME = "Select {pk} from {TrainingDocument} where lower({name})=lower(?name)";
		
		@Override
		public List<TrainingDocumentModel> searchMediaByCode() {
			final SearchResult<TrainingDocumentModel> result = flexibleSearchService
					.search(new FlexibleSearchQuery(GET_DOCUMENT_BY_CODE));
			return result.getResult();
		}
		
		@Override
		public List<TrainingDocumentModel> downloadMedia(String name) {
			
			final Map<String, Object> queryParams = new HashMap<String, Object>();
			queryParams.put("name", name);
			final SearchResult<TrainingDocumentModel> result = flexibleSearchService
					.search(new FlexibleSearchQuery(GET_DOCUMENT_BY_NAME, queryParams));
			return CollectionUtils.isNotEmpty(result.getResult()) ? result.getResult() : null;
		}
	}