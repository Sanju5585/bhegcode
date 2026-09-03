package com.bh.occ.controllers;

import java.io.IOException;

import jakarta.annotation.Resource;
import org.springframework.web.multipart.MultipartFile;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import com.bhge.facades.customerCare.BHGEHaveQuestionFacade;
import com.ds.dsocc.common.dto.HaveQuestionWsDTO;

import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;

@Controller
@ApiVersion("v2")
@Tag(name = "DS Have A Question")
@RequestMapping(value = "/{baseSiteId}/users/{userId}")
public class DSHaveQuestionController {
	
	private static final Logger LOG = LoggerFactory.getLogger(DSRegisterSupportTicketsPageController.class);
	
	@Resource(name="bhgeHaveQuestionFacade")
	private BHGEHaveQuestionFacade bhgeHaveQuestionFacade;
	

	@ResponseBody
	@ResponseStatus(code = HttpStatus.CREATED)
	@PostMapping (value = "/query", consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE })
	@Operation(operationId = "sendEmailForHaveAQue", summary = "Send Email For Have A Que", description = "Send Email For Have A Que")
	@ApiBaseSiteIdAndUserIdParam
	public ResponseEntity<String> haveQuery(@Parameter @RequestPart(required=false, value = "file") MultipartFile file,
			@RequestPart(required = true) final HaveQuestionWsDTO haveQuestionWsDTO) throws IOException {
		
		LOG.debug("=======Sending email to customer care for Have a que for product ID==== " + haveQuestionWsDTO.getProductCode());
		try {
			bhgeHaveQuestionFacade.haveQuestion(haveQuestionWsDTO.getBusinessLine(), haveQuestionWsDTO.getCustomerQuery(), 
					haveQuestionWsDTO.getProductCode(), file);
			return new ResponseEntity<>("success", HttpStatus.OK);
		} catch (final Exception ex) {
			LOG.error("Error in sending email to customer care " + ex);
			return new ResponseEntity<>("error", HttpStatus.BAD_REQUEST);
		}
		
	}
	

}