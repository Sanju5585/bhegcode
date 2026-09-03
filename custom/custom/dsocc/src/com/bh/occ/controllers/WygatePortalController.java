package com.bh.occ.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bhge.facades.data.WygateCaliberationData;
import com.bhge.facades.wygate.WygateFacade;
import com.ds.dsocc.product.data.WygateCaliberationWSDTO;

import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
@Tag(name = "Wygate")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/wygate-data")
public class WygatePortalController extends DSBaseController {

	private static final Logger LOG = Logger.getLogger(WygatePortalController.class);

	@Resource(name = "wygateFacade")
	private WygateFacade wygateFacade;

	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	@Operation(operationId = "searchCertificates", summary = "Search Wygate Certificates.", description = "Search Wygate Certificates")
	@RequestMapping(value = { "/search/certificates" }, method = { RequestMethod.GET }, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public WygateCaliberationWSDTO searchCertificates(
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@RequestParam(value = "caliberationNumber", required = true) final String caliberationNumber,
			@RequestParam(value = "searchType", required = true) final String searchType)
			throws Exception {
		LOG.info("Start search Calibration Certificates == Inside searchCertificates");
		//String type = findCaliberationNumberType(StringEscapeUtils.escapeHtml4(caliberationNumber));
		WygateCaliberationData wygateCaliberationData = null;
		try {
			LOG.info("caliberationNumber - " + caliberationNumber);
			LOG.info("searchType - " + searchType);
			wygateCaliberationData = wygateFacade.getWygatePortalData(StringEscapeUtils.escapeHtml4(caliberationNumber), StringEscapeUtils.escapeHtml4(searchType));
		} 
		catch (Exception e) {
			LOG.warn("Error in Searching Wygate Certificates: " + e);
		}
		return getDataMapper().map(wygateCaliberationData, WygateCaliberationWSDTO.class,
				StringEscapeUtils.escapeHtml4(fields));
	}

	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	@Operation(operationId = "printChemistryConfirmityCertificate", summary = "Print Chemistry Confirmity Certificate.", description = "Search Wygate Certificates")
	@RequestMapping(value = { "/print/chemistry-confirmity-certificate" }, method = { RequestMethod.GET }, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public void printChemistryConfirmityCertificate(
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@RequestParam(value = "fabricationNumber", required = true) final String fabricationNumber,
			final HttpServletRequest request, final HttpServletResponse response) throws Exception {
		LOG.info("Start get Chemistry Certificates == Inside printChemistryConfirmityCertificate");
		LOG.info("fabricationNumber" + StringEscapeUtils.escapeHtml4(fabricationNumber));
		try {
			if (StringUtils.isNotBlank(StringEscapeUtils.escapeHtml4(fabricationNumber))) {
				wygateFacade.getChemistryData(StringEscapeUtils.escapeHtml4(fabricationNumber), request, response);
			}
		} 
		catch (Exception e) {
			LOG.warn("Error in Printing Chemistry Confirmity Certificates: " + e);
		}
	}

	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	@Operation(operationId = "printFilmConfirmityCertificate", summary = "Print Film Confirmity Certificate.", description = "Search Wygate Certificates")
	@RequestMapping(value = { "/print/film-confirmity-certificate" }, method = { RequestMethod.GET }, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public void printFilmConfirmityCertificate(
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@RequestParam(value = "batchNumber", required = true) final String batchNumber,
			final HttpServletRequest request, final HttpServletResponse response) throws Exception {
		LOG.info("Start get Film Certificates == Inside printFilmConfirmityCertificate");
		LOG.info("batchNumber" + StringEscapeUtils.escapeHtml4(batchNumber));
		try {
			if (StringUtils.isNotBlank(StringEscapeUtils.escapeHtml4(batchNumber))) {
				wygateFacade.getFilmData(StringEscapeUtils.escapeHtml4(batchNumber), request, response);
			}
		} 
		catch (Exception e) {
			LOG.warn("Error in Printing Film Confirmity Certificates: " + e);
		}
	}

	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	@Operation(operationId = "printFilmTestResults", summary = "Print Film Test Results.", description = "Search Wygate Certificates")
	@RequestMapping(value = { "/print/film-test-results" }, method = { RequestMethod.GET }, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public void printFilmTestResults(
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@RequestParam(value = "batchNumber", required = true) final String batchNumber,
			final HttpServletRequest request, final HttpServletResponse response) throws Exception {
		LOG.info("Start get Film Test Results == Inside printFilmTestResults");
		LOG.info("batchNumber" + StringEscapeUtils.escapeHtml4(batchNumber));
		try {
			if (StringUtils.isNotBlank(StringEscapeUtils.escapeHtml4(batchNumber))) {
				wygateFacade.getFilmData(StringEscapeUtils.escapeHtml4(batchNumber), request, response);
			}
		} 
		catch (Exception e) {
			LOG.warn("Error in Printing Film Test Results Certificates: " + e);		
		}
	}

	public String findCaliberationNumberType(String caliberationNumber) {
		String type = "FABRICATION";
		if (caliberationNumber.trim().length() == 7) {
			type = "BATCH";
		}
		return type;
	}

	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	@Operation(operationId = "printFilmTestResults", summary = "Print Film Test Results.", description = "Search Wygate Certificates")
	@RequestMapping(value = { "/print/{language}/film-identification-test-results" }, method = { RequestMethod.GET }, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public void printFilmIdentificationAndTestResults(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@Parameter @RequestParam(value = "batchNumber", required = true) final String batchNumber,
			@Parameter(description="Please specify 'en' for english or 'fr' for french") @PathVariable(name = "language", required = true) final String language,
			final HttpServletRequest request, final HttpServletResponse response) throws Exception {
		
		String sanitizedBatchNum = StringEscapeUtils.escapeHtml4(batchNumber);
		String sanitizedLang = StringEscapeUtils.escapeHtml4(language); 
	
		try {
			if (StringUtils.isNotBlank(sanitizedBatchNum) && StringUtils.isNotEmpty(sanitizedBatchNum) 
					&& StringUtils.isNotEmpty(sanitizedLang) && StringUtils.isNotBlank(sanitizedLang)) {
				wygateFacade.getFilmIdentificationAndTestResult(sanitizedBatchNum, sanitizedLang, request, response);
			}
		} 
		catch (Exception e) {
			LOG.warn("Error in Printing Film Test Results Certificates: " + e);		
		}
	}
	
}
