package com.bhge.core.calportal.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import com.bhge.core.data.ProbeCalibrationData;
import com.bhge.core.data.ProbeCalibrationRequest;
import com.bhge.core.data.ProbeCalibrationResponse;
import com.bhge.core.model.DSGuestCalibrationFormRecordsModel;
import com.bhge.facades.calportal.CalibrationSensorType;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import com.ds.dsocc.calibration.data.CalibrationSensorModelType;
import com.ds.dsocc.calibration.data.GuestUserDetailsData;

public interface CalPortalService {
	
	public ProbeCalibrationData getCalPortalData(ProbeCalibrationRequest calibrationRequest);
	public List<ProbeCalibrationResponse> getCalPortalDataForList(List<ProbeCalibrationRequest> calibrationRequestList);
	public List<BHGERegisterKeyValueDataModel> fetchProductFamilyList(String appName);
	public List<CalibrationSensorType> fetchCalibarationSensorType();
	public List<CalibrationSensorModelType> fetchCalibarationSensorModelTypes(final HttpServletRequest request,
			final HttpServletResponse response);
	public void saveGuestModel(DSGuestCalibrationFormRecordsModel model, GuestUserDetailsData data);
	public Map<String, String> populatePartNumberMap();
}
