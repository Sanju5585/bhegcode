package com.bhge.core.waygatedataload.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;


import com.bhge.core.data.ChemistryData;
import com.bhge.core.data.FilmData;
import com.bhge.core.model.DSChemistryDataModel;
import com.bhge.core.model.DSFilmDataModel;
import com.bhge.core.model.DSWaygateBatchLookupModel;
import com.bhge.core.waygatedataload.service.WaygateDataLoaderService;

import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;

public class DefaultWaygateDataLoaderService implements WaygateDataLoaderService {

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;
	@Resource(name = "modelService")
	private ModelService modelService;
	private static final Logger LOG = Logger.getLogger(DefaultWaygateDataLoaderService.class);

	private static final String DSWAYGATEBATCHLOOKUPDATA = "SELECT {pk} from {DSWaygateBatchLookup}";
	private static final String DSFILMDATA = "SELECT {pk} from {DSFilmData}";
	private static final String DSCHEMISTRYDATA = "SELECT {pk} from {DSChemistryData}";

	@Override
	public void processFilmData(List<FilmData> filmDatalist) {
		final int[] failureLoop = {0};
		FlexibleSearchQuery fquery1 = new FlexibleSearchQuery(DSFILMDATA);
		SearchResult<DSFilmDataModel> searchResult1 = flexibleSearchService.search(fquery1);
		FlexibleSearchQuery fquery = new FlexibleSearchQuery(DSWAYGATEBATCHLOOKUPDATA);
		SearchResult<DSWaygateBatchLookupModel> searchResult = flexibleSearchService.search(fquery);
		Map<String, DSWaygateBatchLookupModel> typemap = new HashMap<String, DSWaygateBatchLookupModel>();
		searchResult.getResult().forEach(result -> {
			if (!typemap.containsKey(result.getType())) {
				typemap.put(result.getType(), result);
			}
		});
		modelService.removeAll(searchResult1.getResult());
		filmDatalist.forEach(fd -> {
			try
			{
			if (fd.getBatch() != null && StringUtils.isNotBlank(fd.getBatch())) {
				

					DSFilmDataModel dsFilmModel = new DSFilmDataModel();
					dsFilmModel.setBatch(fd.getBatch());
					if (typemap.containsKey(fd.getTypePk())) {
						dsFilmModel.setType(typemap.get(fd.getTypePk()));
					}
					dsFilmModel.setEmNr(fd.getEmNr());
					dsFilmModel.setRol(fd.getRol());
					dsFilmModel.setSper(fd.getSper());
					dsFilmModel.setCper(fd.getCper());
					dsFilmModel.setControl(fd.getControl());
					dsFilmModel.setExpiry(fd.getExpiry());
					modelService.save(dsFilmModel);
					modelService.refresh(dsFilmModel);
					failureLoop[0]++;
			
			}}
			catch (Exception e)
			{
				LOG.error("Exception with duplicate value in FilmData for " + failureLoop[0] + " entry, exception: " + e.getMessage());
				e.printStackTrace();
			}
			

		});
	}
	@Override
	public boolean validateFilmData(List<FilmData> filmDatalist) {
		FlexibleSearchQuery fquery = new FlexibleSearchQuery(DSWAYGATEBATCHLOOKUPDATA);
		SearchResult<DSWaygateBatchLookupModel> searchResult = flexibleSearchService.search(fquery);
		Map<String, DSWaygateBatchLookupModel> typemap = new HashMap<String, DSWaygateBatchLookupModel>();
		searchResult.getResult().forEach(result -> {
			if (!typemap.containsKey(result.getType())) {
				typemap.put(result.getType(), result);
			}
		});
		boolean flag = true;
		for(FilmData fd : filmDatalist)
		{
			if(fd.getBatch() == null || StringUtils.isBlank(fd.getBatch()))
			{
				LOG.info("the batch number is empty or null");
				flag=false;
			}
			if (!(typemap.containsKey(fd.getTypePk())) && typemap.get(fd.getTypePk()) != null) {
                
				LOG.info("the type not present or incorrect");
				flag=false;
			 }
			if(String.valueOf(fd.getBatch()).length()>8)
			{
				LOG.info("the batch number is more than 8  " + fd.getBatch());
				flag=false;
			}
		}
		LOG.info("Validation of Film Data is set as "+flag);
		return flag;
		
	}
	

	@Override
	public void processChemistryData(List<ChemistryData> chemistryDatalist) {
		// TODO Auto-generated method stub
		final int[] failureLoop = {0};
		FlexibleSearchQuery fquery2 = new FlexibleSearchQuery(DSCHEMISTRYDATA);
		SearchResult<DSFilmDataModel> searchResult2 = flexibleSearchService.search(fquery2);
		modelService.removeAll(searchResult2.getResult());
		chemistryDatalist.forEach(cd -> {
			try
			{
			if (cd.getFabricationNumber() != null && StringUtils.isNotBlank(cd.getFabricationNumber())) {
				
					
					DSChemistryDataModel dsChemistryModel = new DSChemistryDataModel();
					dsChemistryModel.setFabricationNumber(cd.getFabricationNumber());
					dsChemistryModel.setArtoms(cd.getArtoms());
					dsChemistryModel.setPart(cd.getPart());
					dsChemistryModel.setMabcCode(cd.getMabcCode());
					dsChemistryModel.setExpiry(cd.getExpiry());
					dsChemistryModel.setType(cd.getType());
					dsChemistryModel.setShippingContent(cd.getShippingContent());
					modelService.save(dsChemistryModel);
					modelService.refresh(dsChemistryModel);
					failureLoop[0]++;
			}}
			catch (Exception e)
			{
				LOG.error("Exception with duplicate value in ChemistryData for " + failureLoop[0] + " entry, exception: " + e.getMessage());
				e.printStackTrace();
			}
		});
	}

	@Override
	public boolean validateChemistryData(List<ChemistryData> chemistryDatalist) {
		boolean flag = true;
		for(ChemistryData cd : chemistryDatalist)
		{
			if((cd.getFabricationNumber()!=null && cd.getFabricationNumber().replaceAll("-", "") == null) || cd.getFabricationNumber() == null || StringUtils.isBlank(cd.getFabricationNumber()) || cd.getShippingContent() == null)
			{
				LOG.info("the fabrication number is empty or null");
				flag=false;
			}
			if(String.valueOf(cd.getFabricationNumber()).length()>10)
			{
				LOG.info("the fabrication number is more than 10  " + cd.getFabricationNumber());
				flag=false;
			}
		}
		LOG.info("Validation of Chemistry Data is set as "+flag);
		return flag;
		
	}

	

}