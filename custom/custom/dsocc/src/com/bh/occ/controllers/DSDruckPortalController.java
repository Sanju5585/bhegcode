package com.bh.occ.controllers;

import com.bhge.facades.data.bynder.download.DsDruckDownloadData;
import com.bhge.facades.data.bynder.search.DsDruckSerialNumberSearchListData;
import com.bhge.facades.druckportal.DruckPortalFacade;
import com.ds.dsocc.druck.data.DsDruckDownloadWsDTO;
import com.ds.dsocc.druck.data.DsDruckSerialNumberSearchListWsDTO;
import com.ds.dsocc.druck.data.response.DsDruckErrorResponseWsDTO;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.mapping.DataMapper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
@ApiVersion("v2")
@Tag(name = "DS Druck Caliberation")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/dsDruck")
public class DSDruckPortalController extends DSBaseController{

	@Resource(name = "userService")
	private UserService userService;
	
	@Resource(name = "druckPortalFacade")
	private DruckPortalFacade druckPortalFacade;
	
	@Resource(name = "dataMapper")
	private DataMapper dataMapper;
	
	private static final Logger LOG = Logger.getLogger(DSDruckPortalController.class);
	
	private static final String ANONYMOUS = "Anonymous";
	
	@Operation(operationId = "searchDruckCaliberationDetails", summary = "Search the Druck Calibration Details", description = "Search the Calibration Details for an Equipment")
	@RequestMapping(value = "/searchDruckCalibrationData", method = RequestMethod.GET)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public DsDruckSerialNumberSearchListWsDTO searchDruckCalibrationData(@ApiFieldsParam@RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			 										  @Parameter(description = "The product family requested.") @RequestParam(value = "ProductFamily", required = false) String productFamily,
													  @Parameter(description = "The serial number requested.") @RequestParam(value = "SerialNumber", required = true) String serialNumber,
													  final HttpServletRequest request, final HttpServletResponse response) throws Exception
	{
		LOG.info("Start get DSDruckPortalController == Inside searchDruckCalibrationData");
		serialNumber = StringEscapeUtils.escapeHtml4(serialNumber);
		productFamily = StringEscapeUtils.escapeHtml4(productFamily);
		//
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
		//
		DsDruckSerialNumberSearchListData druckPublicSearchResult = druckPortalFacade
				.searchDruckCaliberationData(serialNumber, productFamily,customerNumber, request, response);
		return getDataMapper().map(druckPublicSearchResult, DsDruckSerialNumberSearchListWsDTO.class,StringEscapeUtils.escapeHtml4(fields));
	}

	@Operation(operationId = "downloadDruckCaliberationDetails", summary = "Download the Druck Calibration Details", description = "Download the Calibration Details for an Equipment")
	@RequestMapping(value = "/downloadDruckCalibrationData", method = RequestMethod.GET)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public DsDruckDownloadWsDTO downlaodDruckCalibrationData(@ApiFieldsParam@RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,			 										  
													  @Parameter(description = "The media id requested.") @RequestParam(value = "MediaId", required = true) String mediaId,
													  @Parameter(description = "The product line.") @RequestParam(value = "ProductLine", required = false) String productLine,
													  final HttpServletRequest request, final HttpServletResponse response) throws Exception
	{
		LOG.info("Start get DSDruckPortalController == Inside downlaodDruckCalibrationData()");
		productLine = StringEscapeUtils.escapeHtml4(productLine);
		mediaId = StringEscapeUtils.escapeHtml4(mediaId);
		DsDruckDownloadWsDTO downloadData = new DsDruckDownloadWsDTO();
		DsDruckErrorResponseWsDTO errorMsg = new DsDruckErrorResponseWsDTO();
		DsDruckDownloadData downloadResult = druckPortalFacade
				.downloadDruckCaliberationData(mediaId, productLine, request, response);
		downloadData.setS3FileUrl(downloadResult.getS3_file());
		downloadData.setMediaId(StringEscapeUtils.escapeHtml4(mediaId));
		LOG.info("Error Message download :" + downloadResult.getErrorMessage());
		LOG.info("Status code download : " + downloadResult.getStatusCode());
		downloadData.setStatusCode(downloadResult.getStatusCode());
		if(StringUtils.isNoneEmpty(downloadResult.getErrorMessage())) {
			errorMsg.setErrorCode(String.valueOf(downloadResult.getStatusCode()));
			errorMsg.setErrorMessage(downloadResult.getErrorMessage());
			errorMsg.setAdditionalInfo(StringUtils.EMPTY);
		}else {
			errorMsg.setErrorCode(StringUtils.EMPTY);
			errorMsg.setErrorMessage(StringUtils.EMPTY);
			errorMsg.setAdditionalInfo(StringUtils.EMPTY);
		}
		downloadData.setErrors(errorMsg);
		return downloadData;
	}

	
}
