package com.bhge.facades.trainingdocument.impl;

import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;


import com.bhge.core.model.TrainingDocumentModel;
import com.bhge.core.trainingdocument.service.impl.DefaultDSTrainingDocumentService;
import com.bhge.facades.data.TrainingDocumentData;
import com.bhge.facades.trainingdocument.DSTrainingDocumentFacade;
import com.bhge.facades.trainingdocument.populator.DSTrainingDocumentPopulator;




public class DefaultDsTrainingDocumentFacade implements DSTrainingDocumentFacade {


	@Resource(name = "dsTrainingDocumentService")
	private DefaultDSTrainingDocumentService dsTrainingDocumentService;
	@Resource(name = "dsTrainingDocumentPopulator")
	private DSTrainingDocumentPopulator dsTrainingDocumentPopulator;
	
	private static final Logger LOG = Logger.getLogger(DefaultDsTrainingDocumentFacade.class);
	
	@Override
	  public List<TrainingDocumentData> getTrainingDocument ()
	  {
		  List<TrainingDocumentData> trainingDocumentDataList = new ArrayList<TrainingDocumentData>();
		  List<TrainingDocumentModel> result = dsTrainingDocumentService.searchMediaByCode();
		  dsTrainingDocumentPopulator.populate(result, trainingDocumentDataList);
		  return trainingDocumentDataList;
		}
		

	@Override
	  public TrainingDocumentData getTrainingDownloadDocument (String name)
	  {
		  List<TrainingDocumentData> trainingDocumentDataList = new ArrayList<TrainingDocumentData>();
		  List<TrainingDocumentModel> result = dsTrainingDocumentService.downloadMedia(name);
		  if(result !=null)
		  {
		  dsTrainingDocumentPopulator.populate(result, trainingDocumentDataList);
		  }
		  return trainingDocumentDataList.get(0) ;
		}
	  
	  
	 }
	 
