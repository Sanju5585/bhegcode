package com.bhge.facades.trainingdocument;

import java.util.List;

import com.bhge.facades.data.TrainingDocumentData;

public interface DSTrainingDocumentFacade {

	public List<TrainingDocumentData> getTrainingDocument ();

	 public TrainingDocumentData getTrainingDownloadDocument(String name);
}
