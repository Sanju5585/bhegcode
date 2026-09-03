package com.bhge.facades.druckportal.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.bynder.druck.service.DsBynderSearchAndDownloadService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.data.AddToMSEInputData;
import com.bhge.core.data.EquipmentData;
import com.bhge.core.mysite.service.MySiteEquipmentService;
import com.bhge.facades.data.bynder.download.DsDruckDownloadData;
import com.bhge.facades.data.bynder.error.DsDruckErrorResponseData;
import com.bhge.facades.data.bynder.search.DsBynderSearchResultData;
import com.bhge.facades.data.bynder.search.DsBynderSearchResultDataList;
import com.bhge.facades.data.bynder.search.DsDruckSearchResultResponseData;
import com.bhge.facades.data.bynder.search.DsDruckSerialNumberSearchListData;
import com.bhge.facades.druckportal.DruckPortalFacade;
import com.bhge.facades.mysite.MySiteEquipmentFacade;

import de.hybris.platform.servicelayer.user.UserService;

public class DefaultDruckPortalFacade implements DruckPortalFacade {

	private static final Logger LOG = Logger.getLogger(DefaultDruckPortalFacade.class);
	
	private static final String MANorMELFLAG = "CP_ALL";
	
	@Resource(name="dsBynderSearchAndDownloadService")
	private DsBynderSearchAndDownloadService dsBynderSearchAndDownloadService;
	
	@Resource(name = "userService")
	private UserService userService;
	
	@Resource(name = "mySiteEquipmentFacade")
	private MySiteEquipmentFacade mySiteEquipmentFacade;

	@Resource(name = "mySiteEquipmentService")
	private MySiteEquipmentService mySiteEquipmentService;
	
	@Override
	public DsDruckSerialNumberSearchListData searchDruckCaliberationData(String serialNumber, String productFamily, String customerNumber, 
			HttpServletRequest request, HttpServletResponse response) {
		LOG.info("Insided DefaultDruckPortalFacade ---  searchDruckCaliberationData()");
		DsBynderSearchResultDataList  searchResult = dsBynderSearchAndDownloadService.getBynderSearchResultsBySerialNumber(serialNumber, productFamily);
		
		DsDruckSerialNumberSearchListData searchList = new DsDruckSerialNumberSearchListData();
		List<DsBynderSearchResultData> data = searchResult.getSearchResults();
		DsDruckErrorResponseData errorMsg = new DsDruckErrorResponseData();
		LOG.info("Message: " + searchResult.getErrorMessage());
		LOG.info("Status code: " + searchResult.getStatusCode());
		
		DsDruckSearchResultResponseData searchResponse = new DsDruckSearchResultResponseData();
		searchResponse.setMediaId(StringUtils.EMPTY);
		searchResponse.setIsInBynder(Boolean.FALSE);
		searchResponse.setSerialNumber(StringEscapeUtils.escapeHtml4(serialNumber));
		/*
		searchResponse.setIsInSAP(Boolean.FALSE);
		searchResponse.setIsPinned(Boolean.FALSE);
		searchResponse.setPartNumber(StringUtils.EMPTY);
		searchResponse.setPartName(StringUtils.EMPTY);
		searchResponse.setCustomer(StringUtils.EMPTY);
		searchResponse.setAdditionalInfo(StringUtils.EMPTY);
		*/
		if(data != null) {
			LOG.info("Bynder size " + data.size());
		}
		if (data != null && searchResult.getStatusCode() != null && searchResult.getStatusCode() == 200) 
		{
			if(data.size() == 1) {
				LOG.info("Inside block of single result from Bynder API");
					searchResponse.setMediaId(data.get(0).getId());
					searchResponse.setIsInBynder(Boolean.TRUE);
			}
			else {
				LOG.info("Inside block of multiple results from Bynder API");
				try {
					Date recentDate = data.get(0).getDateModified();
					for (DsBynderSearchResultData searchData : data) {
						if(searchData.getDateModified().compareTo(recentDate) > 0) { 
							recentDate = searchData.getDateModified();
							searchResponse.setMediaId(searchData.getId());
							searchResponse.setIsInBynder(Boolean.TRUE);
						}
						else if(searchData.getDateModified().compareTo(recentDate) == 0) {
							searchResponse.setMediaId(searchData.getId());
							searchResponse.setIsInBynder(Boolean.TRUE);
						}
					}
				}
				catch(Exception e) {
					LOG.info("Exception caught inside the block of multiple results from Bynder API");
				}
			}
			searchList.setStatusCode(searchResult.getStatusCode());
			//
			errorMsg.setErrorCode(StringUtils.EMPTY);
			errorMsg.setErrorMessage(StringUtils.EMPTY);
			errorMsg.setAdditionalInfo(StringUtils.EMPTY);
		} 
		else 
		{
			LOG.info("Inside empty block");
			//
			searchList.setStatusCode(searchResult.getStatusCode());
			if(StringUtils.isNoneEmpty(searchResult.getErrorMessage())) {
				errorMsg.setErrorCode(String.valueOf(searchResult.getStatusCode()));
				errorMsg.setErrorMessage(searchResult.getErrorMessage());
				errorMsg.setAdditionalInfo(StringUtils.EMPTY);
			}
		}
		searchList.setErrors(errorMsg);
		/*
		if (!userService.isAnonymousUser(userService.getCurrentUser())) {
			isEquipmentInWatchList(searchResponse,customerNumber);
			if(searchResponse.getLastServiceDate() == null) {
				searchResponse.setLastServiceDate(StringUtils.EMPTY);
			}
			if(searchResponse.getRmaStatus() == null) {
				searchResponse.setRmaStatus(StringUtils.EMPTY);
			}
		}
		*/
		searchList.setSearchData(searchResponse);
		return searchList;
	}

	@Override
	public DsDruckDownloadData downloadDruckCaliberationData(String serialNumber, String productLine,
			HttpServletRequest request, HttpServletResponse response) {
		LOG.info("Insided DefaultDruckPortalFacade ---  downloadDruckCaliberationData()");
		DsDruckDownloadData downloadData = dsBynderSearchAndDownloadService.downloadDruckCaliberationData(serialNumber, productLine);
		return downloadData;
	}

	/*
	private void isEquipmentInWatchList(final DsDruckSearchResultResponseData searchCalibrationData, final String customerNumber) {
		String MANorMELflag = MANorMELFLAG;
		final SimpleDateFormat simpleDateFormat = new SimpleDateFormat(BhgeCoreConstants.YEAR_MONTH_DATE_FORMAT);
		final Calendar c = Calendar.getInstance();
		String toDate = simpleDateFormat.format(c.getTime());
		c.add(Calendar.MONTH, -6);
		String fromDate = simpleDateFormat.format(c.getTime());
		final String endCustomerID = null;
		EquipmentData equipmentData = mySiteEquipmentService.getEquipmentDataForCustomerMSE(customerNumber,
				MANorMELflag, fromDate, toDate, endCustomerID);
		if (equipmentData != null) {
			mySiteEquipmentFacade.populateProductDataOnEquipmentRecord(equipmentData);
			if (CollectionUtils.isNotEmpty(equipmentData.getEquipmentData())) {
				List<AddToMSEInputData> equipmentList = equipmentData.getEquipmentData();
				final String serialNo = searchCalibrationData.getSerialNumber();
				List<AddToMSEInputData> calEquipmentList = equipmentList.stream()
						.filter(equ -> equ.getSerialNumber().equalsIgnoreCase(serialNo))
						.collect(Collectors.toList());
				if (calEquipmentList != null) {
					calEquipmentList.stream().forEach(calEqu -> {						
						if ("DRUCK".equalsIgnoreCase(calEqu.getProductLine())) { 
							searchCalibrationData.setIsInSAP(Boolean.TRUE);
							if (StringUtils.isNotBlank(calEqu.getPinned())) {
								searchCalibrationData.setIsPinned(Boolean.TRUE);
							}
							searchCalibrationData.setPartNumber(calEqu.getPartNumber());
							searchCalibrationData.setPartName(calEqu.getPartName());
							searchCalibrationData.setCustomer(calEqu.getCustomer());
							searchCalibrationData.setAdditionalInfo(StringUtils.EMPTY);
							
							if(calEqu.getLastServiceDate() != null) {
								searchCalibrationData.setLastServiceDate(calEqu.getLastServiceDate());
							}
							if(calEqu.getRmaStatus() != null) {
								searchCalibrationData.setRmaStatus(StringUtils.isNotBlank(calEqu.getRmaStatus()) ? calEqu.getRmaStatus() : StringUtils.EMPTY);
							}
						}
						 searchCalibrationData.setProductData(calEqu.getProductData());
						 return;
					});
				}
			}
		}
	}
	*/
	
	public DsBynderSearchAndDownloadService getDsBynderSearchAndDownloadService() {
		return dsBynderSearchAndDownloadService;
	}

	public void setDsBynderSearchAndDownloadService(DsBynderSearchAndDownloadService dsBynderSearchAndDownloadService) {
		this.dsBynderSearchAndDownloadService = dsBynderSearchAndDownloadService;
	}
}
