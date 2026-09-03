package com.bhge.facades.druckportal;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import com.bhge.facades.data.bynder.download.DsDruckDownloadData;
import com.bhge.facades.data.bynder.search.DsDruckSerialNumberSearchListData;

public interface DruckPortalFacade {

	
	public DsDruckSerialNumberSearchListData searchDruckCaliberationData(String serialNumber, String productFamily, String customerNumber, 
			final HttpServletRequest request, final HttpServletResponse response);
	
	public DsDruckDownloadData downloadDruckCaliberationData(String serialNumber, String productLine, final HttpServletRequest request, final HttpServletResponse response);
	
}
