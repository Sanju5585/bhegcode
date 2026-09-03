package com.bhge.core.trainingdocument.dao;

import java.util.List;

import com.bhge.core.model.TrainingDocumentModel;

public interface DSTrainingDocumentDao {

	public List<TrainingDocumentModel> searchMediaByCode();
	public List<TrainingDocumentModel> downloadMedia(String name);
}
