package com.bhge.core.waygatedataload.service;

import java.util.List;

import com.bhge.core.data.ChemistryData;
import com.bhge.core.data.FilmData;

public interface WaygateDataLoaderService {
	
	
	public void processFilmData(List<FilmData> filmDatalist);
	public void processChemistryData(List<ChemistryData> chemistryDatalist);
	public boolean validateFilmData(List<FilmData> filmDatalist);
	public boolean validateChemistryData(List<ChemistryData> chemistryDatalist);

}