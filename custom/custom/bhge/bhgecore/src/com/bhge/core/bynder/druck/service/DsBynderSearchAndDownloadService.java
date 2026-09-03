package com.bhge.core.bynder.druck.service;

import com.bhge.facades.data.bynder.download.DsDruckDownloadData;
import com.bhge.facades.data.bynder.search.DsBynderSearchResultDataList;

public interface DsBynderSearchAndDownloadService {
	

	/**
	 *
	 */
	DsBynderSearchResultDataList getBynderSearchResultsBySerialNumber(String serialNumber, String productFamily);
	
	public DsDruckDownloadData downloadDruckCaliberationData(String serialNumber, String productLine);
}
