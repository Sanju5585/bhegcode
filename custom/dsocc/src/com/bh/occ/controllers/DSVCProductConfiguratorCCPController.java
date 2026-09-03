/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.bh.occ.controllers;

import jakarta.annotation.Resource;

import de.hybris.platform.commercefacades.basestores.converters.populator.BaseStorePopulator;
import de.hybris.platform.servicelayer.session.SessionService;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.facades.product.BHGEProductFacade;

import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.sap.productconfig.facades.ConfigurationCartIntegrationFacade;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;
import de.hybris.platform.sap.productconfig.facades.ConfigurationExpertModeFacade;
import de.hybris.platform.sap.productconfig.occ.ConfigurationWsDTO;
import de.hybris.platform.sap.productconfig.occ.controllers.SapproductconfigoccControllerConstants;
import de.hybris.platform.sap.productconfig.occ.util.CCPControllerHelper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdUserIdAndCartIdParam;
import de.hybris.platform.webservicescommons.util.YSanitizer;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;



@Controller
@ApiVersion("v2")
@Tag(name = "DS VC Product Configurator CCP")
@RequestMapping(value = "/{baseSiteId}/ccpconfigurator")
public class DSVCProductConfiguratorCCPController
{

	private static final Logger LOG = Logger.getLogger(DSVCProductConfiguratorCCPController.class);
	
	private static final String SUCCESS = "success";
	
	private static final String ERROR = "error";
	
	@Resource(name = "sapProductConfigCartIntegrationFacade")
	private ConfigurationCartIntegrationFacade configCartFacade;
	
	@Resource(name = "sapProductConfigCCPControllerHelper")
	private CCPControllerHelper ccpControllerHelper;
	
	@Resource(name = "sapProductConfigExpertModeFacade")
	private ConfigurationExpertModeFacade configExpertModeFacade;
	
	@Resource(name = "bhgeProductFacade")
    private BHGEProductFacade bhgeProductFacade;

	@Resource(name = "sessionService")
	private SessionService sessionService;
	
	@RequestMapping(value = "/products/vcconfiguration", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "BHGE VC Products Configuration", summary = "Gets the default product configuration for a complex product", description = "Returns the default product configuration for a given complex product. This means that a new instance of the configuration runtime object is created that is equipped with the default values from the configuration model. This API always returns the _entire_ group hierarchy, whereas it's capable of both including all attributes or only those for the first group. This is controlled by query attribute provideAllAttributes")
	@ApiBaseSiteIdParam
	public ConfigurationWsDTO getDefaultConfiguration(
			@Parameter(description = "Product code", required = true) 
			@RequestParam final String productCode,
			@Parameter(description = "If this parameter is provided and its value is true, attributes for all groups are returned. Otherwise, attributes only for the first group are considered.") //
			@RequestParam(defaultValue = "false", required = false) final boolean provideAllAttributes,
			@Parameter(description = "If this parameter is provided, the template configuration values will be applied to the default configuration") //
			@RequestParam(defaultValue = "", required = false) final String configIdTemplate,
			@Parameter(description = "If this parameter is provided and its value is true, the system tries to execute the request in expert mode (only possible if the current user belongs to group 'sapproductconfigexpmodegroup'") //
			@RequestParam(defaultValue = "false", required = false) final boolean expMode,
			@Parameter(description = "If this parameter is provided and its value is true, the system will force the creation of a new configuration independent of an existing configuration") //
			@RequestParam(defaultValue = "false", required = false) final boolean forceReset,
			@RequestParam(required = false) final String productLine)
	{
		if (LOG.isDebugEnabled()) {
			LOG.debug("getDefaultConfiguration: pCode=" + sanitize(productCode));
		}

		sessionService.setAttribute(BhgeCoreConstants.KB_DETERMINATION_PRODUCTLINE_SESSION, productLine );

		ConfigurationData configData;
		if (expMode) {
			getConfigExpertModeFacade().enableExpertMode();
		}
		if (StringUtils.isEmpty(configIdTemplate)) {
			configData = getConfigurationHandler().readDefaultConfiguration(productCode, forceReset);
		} else {
			configData = getConfigurationHandler().getConfigurationFromTemplate(productCode,
					sanitize(configIdTemplate));
		}
		if (!provideAllAttributes) {
			final String firstGroupId = getConfigurationHandler().determineFirstGroupId(configData.getGroups());
			getConfigurationHandler().filterGroups(configData, firstGroupId);
		}
		if (sessionService.getAttribute(BhgeCoreConstants.KB_DETERMINATION_PRODUCTLINE_SESSION) != null) {
			sessionService.removeAttribute(BhgeCoreConstants.KB_DETERMINATION_PRODUCTLINE_SESSION);
		}
		
		return getConfigurationHandler().mapDTOData(configData);
	}

	
	@RequestMapping(value = "/reset/{configId}", method = RequestMethod.POST)
	@ResponseBody
	@Operation(operationId = "resetProductConfiguration", summary = "Reset product configuration", description = "Reset product configuration")
	@ApiBaseSiteIdParam
	public ResponseEntity<String> resetConfiguration(@Parameter(description = "Configuration identifier.", required = true) 
			@PathVariable("configId") final String configId) {
		try {
			LOG.debug("Inside reset configuration of DSVCProductConfiguratorCCPController !!");
			configCartFacade.resetConfiguration(configId);
			LOG.debug("Product configuration has been reset successfully");
			return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
		} catch (Exception ex) {
			LOG.error("Error in reseting the product configuration", ex);
			return new ResponseEntity<>(ERROR, HttpStatus.BAD_REQUEST);
		}
		
		
	}
	
	@RequestMapping(value = "/upload/configAttachment", method = RequestMethod.POST,
			consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE })
	@ResponseBody
	@ResponseStatus(HttpStatus.CREATED)
	@Operation(operationId = "uploadConfigAttachment", summary = "Upload configuration attachment")
	@ApiBaseSiteIdUserIdAndCartIdParam
	public String uploadConfigAttachment(@Parameter @PathVariable final String baseSiteId,
			@Parameter @RequestPart(required=false, value = "file") MultipartFile file) {
		
		final MediaModel mediaModel = bhgeProductFacade.createMediaModel(file);
		if (mediaModel != null) {
			return mediaModel.getPk().toString();
		}
		return null;
	}
	
	
	protected CCPControllerHelper getConfigurationHandler() {
		return ccpControllerHelper;
	}
	
	protected static String sanitize(final String input) {
		return YSanitizer.sanitize(input);
	}
	
	protected ConfigurationExpertModeFacade getConfigExpertModeFacade() {
		return configExpertModeFacade;
	}

	
}
