package com.bh.occ.controllers;

import com.bhge.core.data.ProbeCalibrationRequest;
import com.bhge.core.data.SearchCalibrationResponseData;
import com.bhge.core.data.SearchCalibrationResponseWsDTO;
import com.bhge.core.event.GuestUserCalibrationDataSheetPDFEvent;
import com.bhge.facades.calportal.CalPortalFacade;
import com.bhge.facades.calportal.CalibrationProductFamilyData;
import com.bhge.facades.calportal.CalibrationSensorType;
import com.ds.dsocc.calibration.data.*;
import com.ds.dsocc.calibration.form.GuestUserDetailsForm;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.event.EventService;
import de.hybris.platform.servicelayer.event.events.AbstractEvent;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.store.services.BaseStoreService;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Controller
@ApiVersion("v2")
@Tag(name = "DS Panametric Caliberation")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/dsPanCal")
public class DSCalPortalController extends DSBaseController{
	
	private static final String ANONYMOUS = "Anonymous";

	@Resource(name = "calPortalFacade")
	private CalPortalFacade calPortalFacade;
	
	@Resource(name = "userService")
	private UserService userService;
	
	@Resource
	private EventService eventService;
	
	@Resource(name = "configurationService")
	private ConfigurationService configurationService;
	
	@Resource(name = "baseStoreService")
	private BaseStoreService baseStoreService;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;
	
	@Resource(name = "baseSiteService")
	private BaseSiteService baseSiteService;
	@Resource
	private ModelService modelService;
	@Resource
	private BusinessProcessService businessProcessService;
	
	private static final Logger LOG = Logger.getLogger(DSCalPortalController.class);
	
	private static final String ATTRIBUTETYPE = "panacal.productfamily.attributeType";
	
	@Operation(operationId = "fetchCalibrationDetails", summary = "Fetches the Calibration Details", description = "Fetches the Calibration Details for the Equipment")
	@RequestMapping(value = "/downloadCalibrationDataSheetPDF", method = RequestMethod.GET)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public void getCalibrationDetails(@ApiFieldsParam@RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields, 
													  @RequestParam(value = "ProbeSerialNumber", required = true) final String probeSerialNumber,
													  @RequestParam(value = "ProbeType", required = true) final String probeType,
													  final HttpServletRequest request, final HttpServletResponse response) throws Exception
	{
		LOG.info("Start get CalibrationDetails == Inside getCalibrationDetails");
		GEEdgeCustomerModel currentUser = null;
		
		try {
			currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		} catch (ClassCastException e) {		
			LOG.error(e.toString());			
		}	
		
		ProbeCalibrationRequest calibrationRequest = new ProbeCalibrationRequest();
		if (currentUser != null) {
			calibrationRequest.setSso(StringEscapeUtils.escapeHtml4(currentUser.getSso()));
		}else {
			calibrationRequest.setSso(ANONYMOUS);
		}
		calibrationRequest.setProbeSerialNumber(StringEscapeUtils.escapeHtml4(probeSerialNumber));
		calibrationRequest.setSensorType(StringEscapeUtils.escapeHtml4(probeType)); 
		
		calPortalFacade.getCalibrationData(calibrationRequest,request,response);
		
		
	}
	
	@Operation(operationId = "searchCalibrationDetails", summary = "Search the Calibration Details", description = "Search the Calibration Details for an Equipment")
	@RequestMapping(value = "/searchCalibrationData", method = RequestMethod.GET)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public SearchCalibrationResponseWsDTO searchCalibrationData(@ApiFieldsParam@RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
													  @RequestParam(value = "ProductFamily", required = true) final String productFamily,
													  @RequestParam(value = "ProbeSerialNumber", required = true) final String probeSerialNumber,
													  @RequestParam(value = "ProbeType", required = true) final String probeType,
													  final HttpServletRequest request, final HttpServletResponse response) throws Exception
	{
		LOG.info("Start get CalibrationDetails == Inside getCalibrationDetails");
		String sessionCustomer = null;		
		GEEdgeCustomerModel currentUser = null;
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
			currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			if(null != currentUser.getDefaultB2BUnit()) {
				sessionCustomer = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
			}
		}
		LOG.info("sessionCustomer -" + sessionCustomer);
		final String customerNumber = StringUtils.isNotBlank(sessionCustomer) ? StringEscapeUtils.escapeHtml4(sessionCustomer)
				: null;				
		ProbeCalibrationRequest calibrationRequest = new ProbeCalibrationRequest();
		if (currentUser != null) {
			calibrationRequest.setSso(StringEscapeUtils.escapeHtml4(currentUser.getSso()));
		}else {
			calibrationRequest.setSso(ANONYMOUS);
		}
		calibrationRequest.setProbeSerialNumber(StringEscapeUtils.escapeHtml4(probeSerialNumber));
		calibrationRequest.setSensorType(StringEscapeUtils.escapeHtml4(probeType));		
		
		SearchCalibrationResponseData searchCalibrationData = calPortalFacade.searchCalibrationData(calibrationRequest,customerNumber ,request,response);
		return getDataMapper().map(searchCalibrationData, SearchCalibrationResponseWsDTO.class,StringEscapeUtils.escapeHtml4(fields));		
	}
	
	@Operation(operationId = "fetchCalibrationProductFamily", summary = "FetchCalibrationProductFamily", description = "FetchCalibrationProductFamily for the attribute PRODUCTLINE")
	@RequestMapping(value = "/fetchCalibrationProductFamily", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam	
	public List<CalibrationProductFamilyWsDTO> fetchCalibrationProductFamily() throws Exception
	{
		LOG.info("Inside fetchCalibrationProductFamily");
		List<CalibrationProductFamilyWsDTO> calibrationProductFamilyWsDTO = new ArrayList<CalibrationProductFamilyWsDTO>();
		final String attributeType = configurationService.getConfiguration().getString(ATTRIBUTETYPE);
		List<CalibrationProductFamilyData> calibrationProductFamilyList = calPortalFacade.fetchProductFamilyList(attributeType);
		for (CalibrationProductFamilyData categoryData : calibrationProductFamilyList) {
			CalibrationProductFamilyWsDTO categorywsdto = getDataMapper().map(categoryData, CalibrationProductFamilyWsDTO.class ,"FULL");
			calibrationProductFamilyWsDTO.add(categorywsdto);
        }
        return calibrationProductFamilyWsDTO;
    }
	
	@Operation(operationId = "fetchCalibrationSensorType", summary = "fetchCalibrationSensorType", description = "Fetch Calibration SensorType")
	@RequestMapping(value = "/fetchCalibrationSensorType", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam	
	public List<CalibrationSensorTypeWsDTO> fetchCalibrationProbeType() throws Exception
	{
		LOG.info("Inside fetchCalibrationProbeType");
		List<CalibrationSensorTypeWsDTO> calibrationSensorTypeWsDTO = new ArrayList<CalibrationSensorTypeWsDTO>();		
		List<CalibrationSensorType> calibrationSensorTypeList = calPortalFacade.fetchCalibrationSensorType();
		for (CalibrationSensorType probeType : calibrationSensorTypeList) {
			CalibrationSensorTypeWsDTO probeTypewsdto = getDataMapper().map(probeType, CalibrationSensorTypeWsDTO.class ,"FULL");
			calibrationSensorTypeWsDTO.add(probeTypewsdto);
        }
        return calibrationSensorTypeWsDTO;
    }	
	
	@Operation(operationId = "fetchCalibrationSensorModelType", summary = "fetchCalibrationSensorModelType", description = "Fetch Calibration SensorModelType")
	@RequestMapping(value = "/fetchCalibrationSensorModelType", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public List<CalibrationSensorModelWsDTO> fetchCalibrationSensorModelType(final HttpServletRequest request,
			final HttpServletResponse response) throws Exception {
		LOG.info("Inside SensorModelType");
		List<CalibrationSensorModelWsDTO> calibrationSensorModelWsDTOList = new ArrayList<CalibrationSensorModelWsDTO>();
		List<CalibrationSensorModelType> calibrationSensorModelTypeList = calPortalFacade.fetchCalibrationSensorModelTypes(request,response);

		for (CalibrationSensorModelType sensorModelType : calibrationSensorModelTypeList) {
			CalibrationSensorModelWsDTO sensorModelTypeWsDTO = getDataMapper().map(sensorModelType,
					CalibrationSensorModelWsDTO.class, "FULL");
			calibrationSensorModelWsDTOList.add(sensorModelTypeWsDTO);
		}
		return calibrationSensorModelWsDTOList;
	}
	
	@Operation(operationId = "emailCalibrationDataSheetPDFToguestUser", summary = "emailCalibrationDataSheetPDFToguestUser", description = "Email the CalibrationDataSheetPDF to Guest user")
	@RequestMapping(value = "/emailCalibrationDataSheetPDFToguestUser", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public HashMap<String, String> emailCalibrationDataSheetPDFToguestUser(
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@RequestParam(value = "ProbeSerialNumber", required = true) final String probeSerialNumber,
			@RequestParam(value = "ProbeType", required = true) final String probeType,
			@RequestBody final GuestUserDetailsWsDTO guestUserData, final HttpServletRequest request,
			final HttpServletResponse response) throws Exception {
		LOG.info("Start get CalibrationDetails == Inside getCalibrationDetails");
		
		GEEdgeCustomerModel currentUser = null;
		try {
			currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		} catch (ClassCastException e) {
			LOG.error(e.toString());
		}

		ProbeCalibrationRequest calibrationRequest = new ProbeCalibrationRequest();
		if (currentUser != null) {
			calibrationRequest.setSso(StringEscapeUtils.escapeHtml4(currentUser.getSso()));
		} else {
			calibrationRequest.setSso(ANONYMOUS);
		}
		calibrationRequest.setProbeSerialNumber(StringEscapeUtils.escapeHtml4(probeSerialNumber));
		calibrationRequest.setSensorType(StringEscapeUtils.escapeHtml4(probeType));
		
		final ByteArrayOutputStream calibrationOutputStream = calPortalFacade.getCalibrationEmailOutputStream(calibrationRequest,request, response);
		HashMap<String, String> EmailMap = new HashMap<>();
		if(calibrationOutputStream!=null)
		{
			final GuestUserCalibrationDataSheetPDFEvent guestUserCalibrationDataSheetPDFEvent = new GuestUserCalibrationDataSheetPDFEvent();
			eventService.publishEvent(initializeEvent(guestUserCalibrationDataSheetPDFEvent, guestUserData,calibrationOutputStream));
			EmailMap.put("Success", "email send successfully");
			return EmailMap;
		}
		EmailMap.put("Fail", "email Not Sent");
		return EmailMap;

		// calPortalFacade.getCalibrationData(calibrationData,request,response);
	}

	private AbstractEvent initializeEvent(
			final GuestUserCalibrationDataSheetPDFEvent guestUserCalibrationDataSheetPDFEvent,
			final GuestUserDetailsWsDTO guestUserData, ByteArrayOutputStream calibrationOutputStream) {
		guestUserCalibrationDataSheetPDFEvent.setBaseStore(baseStoreService.getCurrentBaseStore());
		guestUserCalibrationDataSheetPDFEvent.setSite(baseSiteService.getCurrentBaseSite());
		guestUserCalibrationDataSheetPDFEvent.setLanguage(commonI18NService.getCurrentLanguage());
		guestUserCalibrationDataSheetPDFEvent.setCurrency(commonI18NService.getCurrentCurrency());
		guestUserCalibrationDataSheetPDFEvent.setGuestUserDetails(guestUserData);
		guestUserCalibrationDataSheetPDFEvent.setCalibrationEmailOutputSteam(calibrationOutputStream);
		return guestUserCalibrationDataSheetPDFEvent;
	}	
	
	@Operation(operationId = "saveGuestUserForm", summary = "saveGuestUserForm", description = "Save the Form datails of Guest user")
	@RequestMapping(value = "/saveGuestUserForm", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public void saveGuestUserForm(
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@RequestBody final GuestUserDetailsForm guestUserform, final HttpServletRequest request,
			final HttpServletResponse response) throws Exception {
		LOG.info("Start get saveGuestUserForm == Inside saveGuestUserForm");
		
		final GuestUserDetailsData data = new GuestUserDetailsData();
		data.setFirstName(guestUserform.getFirstName());
		data.setLastName(guestUserform.getLastName());
		data.setTitle(guestUserform.getTitle());
		data.setOrganization(guestUserform.getOrganization());
		data.setStreetAddress(guestUserform.getStreetAddress());
		data.setAddress(guestUserform.getAddress());
		data.setState(guestUserform.getState());
		data.setCity(guestUserform.getCity());
		data.setZipCode(guestUserform.getZipCode());
		data.setCountry(guestUserform.getCountry());
		data.setWorkPhone(guestUserform.getWorkPhone());
		data.setEmail(guestUserform.getEmail());
		data.setProbeSerialNumber(guestUserform.getProbeSerialNumber());
		data.setCommunicationsPreference(guestUserform.getCommunicationsPreference());
		data.setSensorType(guestUserform.getSensorType());
		data.setLastCalibrationDate(guestUserform.getLastCalibrationDate());
		calPortalFacade.saveGuestData(data);

}
}
