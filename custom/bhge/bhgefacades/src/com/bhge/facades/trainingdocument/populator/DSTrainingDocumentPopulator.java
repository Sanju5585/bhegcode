package com.bhge.facades.trainingdocument.populator;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.bhge.core.model.TrainingDocumentModel;
import com.bhge.facades.data.TrainingDocumentData;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

public class DSTrainingDocumentPopulator implements Populator<List<TrainingDocumentModel>, List<TrainingDocumentData>> {

	@Override
	public void populate(List<TrainingDocumentModel> source, List<TrainingDocumentData> target)
			throws ConversionException {
		// TODO Auto-generated method stub
		String pdf="PDF";
		String video="VIDEO";
		String youtube= "YOUTUBE";
		SimpleDateFormat formatter = new SimpleDateFormat("EEE MMM dd HH:mm:ss z yyyy");
		if(source !=null)
		{
			for(TrainingDocumentModel trainingSource : source)
			{
				TrainingDocumentData trainingData = new TrainingDocumentData();
				trainingData.setActive(trainingSource.getActive());
				if(trainingSource.getName()!=null)
				{
					trainingData.setName(trainingSource.getName());
				}
				
				
				if (trainingSource.getMediaslink() != null) {
					if (trainingSource.getMediaslink().getMime().equalsIgnoreCase("application/pdf")) {
						trainingData.setMediaslink(trainingSource.getMediaslink().getUrl());
						trainingData.setFileType(pdf);

					} else if (trainingSource.getMediaslink().getMime().equalsIgnoreCase("video/mp4")) {
						trainingData.setMediaslink(trainingSource.getMediaslink().getUrl());
						trainingData.setFileType(video);
					}
						 
				}
				else if(trainingSource.getYoutubeURL()!=null)
				{
					trainingData.setYoutubeURL(trainingSource.getYoutubeURL());
					trainingData.setFileType(youtube);
				}
				Date date;
				try {
					date = formatter.parse(trainingSource.getModifiedtime().toString());
					SimpleDateFormat formatter1=new SimpleDateFormat("dd MMM YYYY");
					trainingData.setModifiedTime(formatter1.format(date));
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				target.add(trainingData);
			}
			
		}
	}	
}
