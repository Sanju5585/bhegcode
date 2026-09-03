package com.bhge.core.trainingdocument.service;

import java.util.List;

import com.bhge.core.model.TrainingDocumentModel;

public interface DSTrainingDocumentService {

	public List<TrainingDocumentModel> searchMediaByCode();

	public List<TrainingDocumentModel> downloadMedia(String name);
}
