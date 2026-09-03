package com.bhge.core.trainingdocument.service.impl;

import java.util.List;

import jakarta.annotation.Resource;

import com.bhge.core.model.DSNotificationModel;
import com.bhge.core.model.TrainingDocumentModel;
import com.bhge.core.trainingdocument.dao.DSTrainingDocumentDao;
import com.bhge.core.trainingdocument.service.DSTrainingDocumentService;

	public class DefaultDSTrainingDocumentService implements DSTrainingDocumentService {
		
		@Resource(name = "dsTrainingDocumentDao")
		private DSTrainingDocumentDao dsTrainingDocumentDao;

		@Override
		public List<TrainingDocumentModel> searchMediaByCode() {
			// TODO Auto-generated method stub
			List<TrainingDocumentModel> trainingDocumentList = dsTrainingDocumentDao.searchMediaByCode();			
			return trainingDocumentList;
			
		}
		
		@Override
		public List<TrainingDocumentModel> downloadMedia(String name) {
			// TODO Auto-generated method stub
			List<TrainingDocumentModel> trainingDocumentdownloadlist = dsTrainingDocumentDao.downloadMedia(name);
			return trainingDocumentdownloadlist;
		}
	}
