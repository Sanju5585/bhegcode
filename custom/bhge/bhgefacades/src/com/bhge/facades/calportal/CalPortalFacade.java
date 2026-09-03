package com.bhge.facades.calportal;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.xml.bind.JAXBException;
import javax.xml.transform.TransformerException;

import org.apache.fop.apps.FOPException;

import com.bhge.core.calportal.exception.PDFException;
import com.bhge.core.data.ProbeCalibrationRequest;
import com.bhge.core.data.SearchCalibrationResponseData;
import com.ds.dsocc.calibration.data.CalibrationSensorModelType;
import com.ds.dsocc.calibration.data.GuestUserDetailsData;

public interface CalPortalFacade {
	public void getCalibrationData(ProbeCalibrationRequest calibrationRequest, final HttpServletRequest request,
			final HttpServletResponse response)
					throws JAXBException, IOException, FOPException, TransformerException, URISyntaxException, PDFException;

	public ByteArrayOutputStream getCalibrationEmailOutputStream(ProbeCalibrationRequest calibrationRequest,
			final HttpServletRequest request, final HttpServletResponse response)
					throws JAXBException, IOException, FOPException, TransformerException, URISyntaxException, PDFException;

	public SearchCalibrationResponseData searchCalibrationData(ProbeCalibrationRequest calibrationRequest,String customerNumber,
			final HttpServletRequest request, final HttpServletResponse response);

	public List<CalibrationProductFamilyData> fetchProductFamilyList(String appName);

	public List<CalibrationSensorType> fetchCalibrationSensorType();

	public List<CalibrationSensorModelType> fetchCalibrationSensorModelTypes(final HttpServletRequest request,
			final HttpServletResponse response);	
	
	public void saveGuestData(GuestUserDetailsData data);
}
