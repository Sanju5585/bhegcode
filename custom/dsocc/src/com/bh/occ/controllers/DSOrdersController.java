package com.bh.occ.controllers;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import com.bhge.facades.data.BHGECreditCardData;
import com.bhge.facades.order.impl.DefaultBHGECheckoutFacade;
import com.bhge.facades.order.populators.BHGEOrderPopulator;
import com.ds.dsocc.common.dto.CCPaymentInfoWsDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.bh.occ.facades.DsCheckoutFacade;
import com.ds.dsocc.common.dto.OrderDetailsWsDTO;
import com.ds.facades.orderDetails.OrderDetailsData;

import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.webservicescommons.cache.CacheControl;
import de.hybris.platform.webservicescommons.cache.CacheControlDirective;
import de.hybris.platform.webservicescommons.mapping.DataMapper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;

@Controller
@ApiVersion("v2")
@CacheControl(directive = CacheControlDirective.NO_CACHE)
@Tag(name = "DS Orders Controller")
@RequestMapping(value = "/{baseSiteId}")
public class DSOrdersController extends DSBaseController {
	
	protected static final String API_COMPATIBILITY_B2B_CHANNELS = "api.compatibility.b2b.channels";
	private static final Logger LOG = Logger.getLogger(DSOrdersController.class);
	
	@Resource(name="dsCheckoutFacade")
	private DsCheckoutFacade dsCheckoutFacade;

	@Resource(name = "b2bCheckoutFacade")
	private DefaultBHGECheckoutFacade bhgeCheckoutFacade;
	
	@Resource(name="dataMapper")
	private DataMapper dataMapper;
	
	@RequestMapping(value = "/users/{userId}/dsOrders/{orderCodes}", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "Returns details for the order", summary = "Order details", description = "Order Details")
    @ApiBaseSiteIdAndUserIdParam
    public OrderDetailsWsDTO getDetailsFortheOrder(@Parameter(description = "Order Code Identifier", required = true) @PathVariable final String orderCodes,
    		@Parameter(description = "guest sales area", required = false) @RequestParam(required = false, defaultValue = "") final String guestSalesArea)
    {
		OrderDetailsData orderdetails = dsCheckoutFacade.processOrderCodeForDS(StringEscapeUtils.escapeHtml4(orderCodes),StringEscapeUtils.escapeHtml4(guestSalesArea));
		LOG.info("Order details for order code: " + orderCodes +" order is quote is "+orderdetails.getIsQuote());
		return dataMapper.map(orderdetails, OrderDetailsWsDTO.class, "FULL");
    }

	/***
	 * US-465624 Method to save card details
	 * @param orderCodes
	 * @param ccPaymentInfoWsDTO
	 * @param bindingResult
	 * @param request
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "/users/{userId}/dsOrders/{orderCodes}/savecard", method = RequestMethod.POST)
	@ResponseBody
	@Operation(operationId = "Save card details", summary = "Save card details", description = "Save card Details")
	@ApiBaseSiteIdAndUserIdParam
	public ResponseEntity<String> saveCardDetails(@Parameter(description = "Order Code Identifier", required = true) @PathVariable final String orderCodes,
												  @RequestBody CCPaymentInfoWsDTO ccPaymentInfoWsDTO,
												  final BindingResult bindingResult, HttpServletRequest request, HttpSession session)
	{
		String message = "error";
		BHGECreditCardData bhgeCreditCardData = getDataMapper().map(ccPaymentInfoWsDTO, BHGECreditCardData.class, "FULL");
		Boolean isCardSaved = bhgeCheckoutFacade.savedCardDetails(orderCodes, bhgeCreditCardData);
		if(BooleanUtils.isTrue(isCardSaved)){
			message = "success";
		}
		return new ResponseEntity<>(message, HttpStatus.OK);
	}


}
