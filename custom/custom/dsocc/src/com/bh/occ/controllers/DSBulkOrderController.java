package com.bh.occ.controllers;


import com.bh.occ.forms.BHGEExpressOrderForm;
import com.bhge.core.data.BHGEVCProductSummaryData;
import com.bhge.core.data.BHGEVCProductSummaryData;
import com.bhge.core.enums.ShippingCarrierMethod;
import com.bhge.core.enums.ShippingChargeMethod;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.bulkupload.BHGEDataReaderFacade;
import com.bhge.facades.bulkupload.BHGEDataValidatorFacade;
import com.bhge.facades.bulkupload.DSBulkUploadFacade;
import com.bhge.facades.bulkupload.data.DSBulkUploadForm;
import com.bhge.facades.constants.BhgeFacadesConstants;
import com.bhge.facades.data.InventoryRequestData;
import com.bhge.facades.data.InventoryRequestProductData;
import com.bhge.facades.data.InventoryRequestData;
import com.bhge.facades.data.InventoryRequestProductData;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.order.BHGEPriceAvailabilityFacade;
import com.bhge.facades.order.populators.BHGECartPopulator;
import com.bhge.facades.product.data.BHGEProductAccessData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.*;
import com.bhge.facades.user.impl.DefaultBHGEUserProfileFacade;
import com.ds.dsocc.bulkOrder.dto.*;
import com.ds.dsocc.common.dto.BHGEVCConfigurationWsDTO;
import com.ds.dsocc.common.dto.BHGEVCProductSummaryWSDTO;
import com.ds.dsocc.common.dto.BHGEVCConfigurationWsDTO;
import com.ds.dsocc.common.dto.BHGEVCProductSummaryWSDTO;
import com.ds.dsocc.product.data.BHGEProductAccessDataWsDTO;
import com.ds.facades.bulkOrder.DsBulkOrderData;
import com.ds.facades.bulkOrder.DsBulkOrderRequestData;
import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.product.data.ImageData;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commercefacades.user.data.RegionData;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.commercewebservicescommons.dto.product.ImageWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.product.PriceWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.user.RegionWsDTO;
import de.hybris.platform.commercewebservicescommons.errors.exceptions.RequestParameterException;
import de.hybris.platform.commercewebservicescommons.errors.exceptions.RequestParameterException;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;
import de.hybris.platform.sap.productconfig.facades.PricingData;
import de.hybris.platform.sap.productconfig.occ.PriceSummaryWsDTO;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;
import de.hybris.platform.sap.productconfig.facades.PricingData;
import de.hybris.platform.sap.productconfig.occ.PriceSummaryWsDTO;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.Config;
import de.hybris.platform.webservicescommons.mapping.FieldSetLevelHelper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import de.hybris.platform.webservicescommons.util.YSanitizer;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.*;

/**
 * This Controller is used for Bulk order creation
 */
@RestController
@ApiVersion("v2")
@Tag(name = "Ds Bulk Orders")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/bulkOrders")
public class DSBulkOrderController extends DSBaseController {

    private static final Logger LOG = LoggerFactory.getLogger(DSBulkOrderController.class);

    @Resource(name = "dSBulkUploadFacade")
    private DSBulkUploadFacade dSBulkUploadFacade;
    
    @Resource
    private BHGESoldToUtil bhgeSoldToUtil;
    
    @Resource(name = "bhgeDataReaderFacade")
	private BHGEDataReaderFacade bhgeDataReaderFacade;

	@Resource(name = "bhgeDataValidatorFacade")
	private BHGEDataValidatorFacade bhgeDataValidatorFacade;
	
	@Resource(name = "b2bCustomerFacade")
	protected CustomerFacade customerFacade;
	
	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource
	private ModelService modelService;
	
	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;
	
	@Resource(name = "bhgeCartFacade")
	private BHGECartFacade bhgeCartFacade;

	@Resource(name = "bhgeCartPopulator")
	private BHGECartPopulator<CartData> bhgeCartPopulator;
	
	@Resource(name = "defaultBhgeUserProfileFacade")
	DefaultBHGEUserProfileFacade defaultBhgeUserProfileFecade;

    @Resource(name = "bhgePriceAvailabilityFacade")
    public BHGEPriceAvailabilityFacade bhgePriceAvailabilityFacade;

    @RequestMapping(value = "/{cartId}/copyPasteUpload", method=RequestMethod.POST)
    @ResponseBody
    @Operation(operationId = "copyPasteUpload", summary = "Copy paste for Bulk Order", description = "Copy Paste for Bulk Order")
    @ApiBaseSiteIdAndUserIdParam
    @ResponseStatus(HttpStatus.OK)
    public DsBulkOrderWsDTO uploadBulkOrder(@Parameter(description = "Base site identifier", required = true) @PathVariable final String baseSiteId,
       @RequestBody final DSBulkUploadForm dsBulkOrderForm,@Parameter(description = "cartId") @PathVariable(value = "cartId") final String cartId
	,@RequestParam(value = "productLine", required = false) final String productLine) {
		/*
		 * DsBulkOrderData dsBulkOrderData =
		 * dSBulkUploadFacade.executeBulkUpload(dsBulkOrderForm);
		 */      
    	dsBulkOrderForm.setCsvInput(StringEscapeUtils.escapeHtml4(dsBulkOrderForm.getCsvInput()));
    	DsBulkOrderData dsBulkOrderData = dSBulkUploadFacade.executeBulkUploadWs(dsBulkOrderForm,StringEscapeUtils.escapeHtml4(cartId), productLine);

    	DsBulkOrderWsDTO dsBulkOrderWsDTO = getDataMapper().map(dsBulkOrderData, DsBulkOrderWsDTO.class, "FULL");
        return dsBulkOrderWsDTO;
    }

    @RequestMapping(value = "/validateBulkUpload", method = RequestMethod.POST)
    @ResponseBody
    @Operation(operationId = "validateBulkUpload", summary = "Validation for Bulk Order", description = "Validation for Bulk Order")
    @ApiBaseSiteIdAndUserIdParam
    @ResponseStatus(HttpStatus.OK)
    public DsBulkUploadEntryWsDTO validateBulkUploadEntryWithPrice(@Parameter(description = "Part No", required = true) @RequestParam(value = "partNum", required = true) final String partNum,
       @Parameter(description = "Quantity", required = true) @RequestParam(value = "qty", required = false) String qty,
       @Parameter(description = "Line No") @RequestParam(value = "lineNo", required = false) final String lineNo,
       @ApiFieldsParam @RequestParam(required = false, defaultValue = FieldSetLevelHelper.DEFAULT_LEVEL) final String fields) {
        BHGEBulkUploadEntryData bulkUploadEntryData = new BHGEBulkUploadEntryData();
        
		/*
		 * bulkUploadEntryData =
		 * dSBulkUploadFacade.validateBulkUpload(partNum,qty,lineNo);
		 */     
        bulkUploadEntryData = dSBulkUploadFacade.validateBulkUpload(StringEscapeUtils.escapeHtml4(partNum),StringEscapeUtils.escapeHtml4(qty),StringEscapeUtils.escapeHtml4(lineNo));

        DsBulkUploadEntryWsDTO dsBulkUploadEntryWsDTO = getDataMapper().map(bulkUploadEntryData, DsBulkUploadEntryWsDTO.class, "FULL");
        return dsBulkUploadEntryWsDTO;

    }

 
    
    /*BULK ORDER upload*/
    @RequestMapping(value = "{cartId}/addbulk", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    @Operation(operationId = "addToCartbulk", summary ="Adding Bulk Products to Cart", description = "Adding Bulk Products to Cart")
    @ApiBaseSiteIdAndUserIdParam
    @ResponseStatus(HttpStatus.OK)
    public DsBulkOrderRequestWSDTO addToCartbulk(@Parameter(description = "geEdgeBulkCartData", required = true) @RequestBody final BHGEBulkUploadListData bulkUploadListData,
        @Parameter(description = "cartId") @PathVariable(value = "cartId") final String cartId) throws JsonGenerationException, JsonMappingException,
            IOException, CMSItemNotFoundException, CommerceCartModificationException
    {
        //TODO : UI - send customerPO also as part of this request (previously it was getting from HttpRequest)
		/*
		 * DsBulkOrderRequestData dsBulkOrderRequestData =
		 * dSBulkUploadFacade.addToCartbulkProducts(bulkUploadListData, excelInputData,
		 * callingsource, session, customerPO);
		 */ 
    	if(bulkUploadListData.getBulkUploadList() !=null)
    	{
			bulkUploadListData.getBulkUploadList().forEach((bhgeBulkUploadEntryData) -> {
				bhgeBulkUploadEntryData.setConfigurationflag(
						StringEscapeUtils.escapeHtml4(bhgeBulkUploadEntryData.getConfigurationflag()));
				bhgeBulkUploadEntryData.setDescription(StringEscapeUtils.escapeHtml4(bhgeBulkUploadEntryData.getDescription()));
				bhgeBulkUploadEntryData.setPartNum(StringEscapeUtils.escapeHtml4(bhgeBulkUploadEntryData.getPartNum()));
				bhgeBulkUploadEntryData.setProductSNo(StringEscapeUtils.escapeHtml4(bhgeBulkUploadEntryData.getProductSNo()));
				bhgeBulkUploadEntryData.setStatus(StringEscapeUtils.escapeHtml4(bhgeBulkUploadEntryData.getStatus()));
				bhgeBulkUploadEntryData.setUrl(StringEscapeUtils.escapeHtml4(bhgeBulkUploadEntryData.getUrl()));
				LOG.info("ECA Code before escaping: " + bhgeBulkUploadEntryData.getEcaCode());
				if(bhgeBulkUploadEntryData.getEcaCode()!=null) {
					LOG.info("ECA Code is not null, escaping value: " + bhgeBulkUploadEntryData.getEcaCode());
					bhgeBulkUploadEntryData.setEcaCode(StringEscapeUtils.escapeHtml4(bhgeBulkUploadEntryData.getEcaCode()));
				}
				ImageData imgData = bhgeBulkUploadEntryData.getProductImage();
				if(imgData!=null) {
					imgData.setAltText(StringEscapeUtils.escapeHtml4(imgData.getAltText()));
					imgData.setFormat(StringEscapeUtils.escapeHtml4(imgData.getFormat()));
					imgData.setUrl(StringEscapeUtils.escapeHtml4(imgData.getUrl()));
				}
						
				bhgeBulkUploadEntryData.setProductImage(imgData);								
			});
    	}
        	
        DsBulkOrderRequestData dsBulkOrderRequestData = dSBulkUploadFacade.addToCartbulkProductsWs(bulkUploadListData, null, /*StringEscapeUtils.escapeHtml4(callingsource)*/null, null, /*StringEscapeUtils.escapeHtml4(customerPO)*/null, StringEscapeUtils.escapeHtml4(cartId));

    	return getDataMapper().map(dsBulkOrderRequestData, DsBulkOrderRequestWSDTO.class, "FULL");
    }
    
    
    
    	@RequestMapping(value = "/{cartId}/validate", method = RequestMethod.POST)
    	@ResponseBody
	    @Operation(operationId = "validateBulkAddToCart", summary ="Validate bulk add to cart", description = "Validate bulk add to cart")
	    @ApiBaseSiteIdAndUserIdParam
	    @ResponseStatus(HttpStatus.OK)
    	public DsBulkOrderWsDTO expressOrder(@RequestBody BHGEExpressOrderForm expressOrderForm, final Model model,
    			final HttpServletRequest httprequest, @PathVariable String cartId,@RequestParam(value = "productLine", required = false) final String productLine)
    			throws CMSItemNotFoundException, IOException, ServletException
    	{

    		boolean isRedirectedFromConfigPage = false;
    		Boolean isAddedToCart = false;
    		Boolean isKBNotFound = false;

    		if (expressOrderForm != null && expressOrderForm.getCopyPasteData() == null && expressOrderForm.getProductCode() == null
    				&& expressOrderForm.getQty() == null)
    		{
    			//expressOrderForm = (BHGEExpressOrderForm) getSessionService()
    			//		.getAttribute(BhgeCoreConstants.EXPRESS_ORDER_UPLOAD_FORM_DATA);
    			//isAddedToCart = (null != (Boolean) model.asMap().get("addedToCart")) ? (Boolean) model.asMap().get("addedToCart")
    			//		: false;
    			//isKBNotFound = (null != (Boolean) model.asMap().get("isKBNotFoundForPart"))
    			//		? (Boolean) model.asMap().get("isKBNotFoundForPart") : false;
    			//isRedirectedFromConfigPage = true;
    		}

    		//if (isKBNotFound && isRedirectedFromConfigPage)
    		//{
    		//	final String kbPartCode = (String) ((null != model.asMap().get("kbPartCode")) ? model.asMap().get("kbPartCode") : "");
    		//	GlobalMessages.addMessage(model, GlobalMessages.ERROR_MESSAGES_HOLDER, "product.config.notfound.message", new Object[]
    		//	{ kbPartCode });
    		//}

    		//getSessionService().removeAttribute(BhgeCoreConstants.EXPRESS_ORDER_UPLOAD_FORM_DATA);
    		//getSessionService().setAttribute(BhgeCoreConstants.EXPRESS_ORDER_UPLOAD_FORM_DATA, expressOrderForm);
    		final CustomerData customerData = customerFacade.getCurrentCustomer();
    		final BHGECustomerData geEdgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
    		BHGECustomerDataWsDTO customerDataWsDTO = getDataMapper().map(geEdgeCustomerData, BHGECustomerDataWsDTO.class, "FULL");
    		String csvInput = "";
    		String[] productCode = null;
    		String[] qty = null;
    		if (null != expressOrderForm)
    		{
    			csvInput = YSanitizer.sanitize(expressOrderForm.getCopyPasteData());
    			productCode = expressOrderForm.getProductCode();
    			qty = expressOrderForm.getQty();
    		}
    		List<BHGEBulkUploadInputEntryData> bulkUploadList = null;
    		List<BHGEBulkUploadEntryData> validatedBulkUploadList = null;
    		boolean isExpressOrderValidated = false;
    		CartData cartData = null;

    		if (null != expressOrderForm)
    		{
    			cartData = addCartData(expressOrderForm, StringEscapeUtils.escapeHtml4(cartId));
    		}
    		//sessionService.setAttribute("isCartShipMode", true);

    		/*if (isRedirectedFromConfigPage)
    		{
    			if (getSessionService().getAttribute(BhgeCoreConstants.UPLOAD_FORM_INPUT_VALUES) != null)
    			{
    				final List<BHGEBulkUploadInputEntryData> bulkUploadListSessionData = (List<BHGEBulkUploadInputEntryData>) getSessionService()
    						.getAttribute(BhgeCoreConstants.UPLOAD_FORM_INPUT_VALUES);
    				bulkUploadList = new ArrayList<BHGEBulkUploadInputEntryData>(bulkUploadListSessionData);
    				validatedBulkUploadList = (List<BHGEBulkUploadEntryData>) getSessionService()
    						.getAttribute(BhgeCoreConstants.UPLOAD_VALIDATED_DATA);
    			}
    		}*/
    		//else
    		//{
    			final long startTime = System.currentTimeMillis();
    			//if CSV entered
    			if (csvInput != null && !csvInput.isEmpty())
    			{
    				bulkUploadList = bhgeDataReaderFacade.csvDataReader(csvInput);
    				final long CSVReadTime = System.currentTimeMillis();
    				//getSessionService().removeAttribute(BhgeCoreConstants.UPLOAD_FORM_INPUT_VALUES);
    				//getSessionService().setAttribute(BhgeCoreConstants.UPLOAD_FORM_INPUT_VALUES, bulkUploadList);

    			}
    			else if (productCode != null && qty != null)
    			{
    				bulkUploadList = prepareBulkUploadData(productCode, qty);
    				//getSessionService().removeAttribute(BhgeCoreConstants.UPLOAD_FORM_INPUT_VALUES);
    				//getSessionService().setAttribute(BhgeCoreConstants.UPLOAD_FORM_INPUT_VALUES, bulkUploadList);
    			}
    			
    			List<BHGEBulkUploadInputEntryDataWsDTO> bulkInputEntryDataWsDTOList = new ArrayList<>();
    			for(BHGEBulkUploadInputEntryData data : bulkUploadList) {
    				BHGEBulkUploadInputEntryDataWsDTO dto = getDataMapper().map(data, BHGEBulkUploadInputEntryDataWsDTO.class, "FULL");
    				bulkInputEntryDataWsDTOList.add(dto);
    			}

    			final long validateStartTime = System.currentTimeMillis();
    			validatedBulkUploadList = bhgeDataValidatorFacade.validateBulkUploadDataListWs(bulkUploadList, StringEscapeUtils.escapeHtml4(cartId), expressOrderForm.isWaygateQuickOrderPage(),productLine);
    			
    			int validPartCount=0;
    			int invalidPartCount=0;
    			int configurePartCount=0;
    			
    			if (null != validatedBulkUploadList && validatedBulkUploadList.size() > 0)
        		{
        			for (final BHGEBulkUploadEntryData entryData : validatedBulkUploadList)
        			{
        				if (Config.getString("VALIDATED", "Validated").equalsIgnoreCase(entryData.getStatus()))
        				{
        					validPartCount++;
        				}
        				else if (Config.getString("ERROR", "Error").equalsIgnoreCase(entryData.getStatus()))
        				{
        					invalidPartCount++;
        				}
        				else if (Config.getString("CONFIGURE", "Configure").equalsIgnoreCase(entryData.getStatus()))
        				{
        					configurePartCount++;
        				}
        			}
        			if (validatedBulkUploadList.size() == validPartCount)
        			{
        				isExpressOrderValidated = true;
        			}
        		}
    			
    			List<BHGEBulkUploadEntryDataWsDTO> bulkOrderEntryList = new ArrayList<BHGEBulkUploadEntryDataWsDTO>();
//    			for(BHGEBulkUploadEntryData data : validatedBulkUploadList) {
//    				BHGEBulkUploadEntryDataWsDTO dto = getDataMapper().map(data, BHGEBulkUploadEntryDataWsDTO.class, "FULL");
//    				bulkOrderEntryList.add(dto);
//    			}
    			
    			final long validateEndTime = System.currentTimeMillis();
    		//}

    		final BHGEBulkUploadListData bulkUploadListData = new BHGEBulkUploadListData();
    		bulkUploadListData.setBulkUploadList(validatedBulkUploadList);
    		isExpressOrderValidated = proceedToShoppingCart(validatedBulkUploadList, model);
    		
    		BHGEBulkUploadListDataWsDTO bhgeBulkUploadListDataWsDTO = getDataMapper().map(bulkUploadListData, BHGEBulkUploadListDataWsDTO.class);
    		bhgeBulkUploadListDataWsDTO.setBulkUploadList(bulkOrderEntryList);
    		addDataToModel(model, cartData);

    		DsBulkOrderWsDTO dsBulkOrderWsDTO = new DsBulkOrderWsDTO();
			// Adding price and Availability details to response
			bhgeDataValidatorFacade.fetchAndPopulatePriceAvailabilityDetails(validatedBulkUploadList, productLine);
            for(BHGEBulkUploadEntryData data : validatedBulkUploadList) {
                BHGEBulkUploadEntryDataWsDTO dto = getDataMapper().map(data, BHGEBulkUploadEntryDataWsDTO.class, "FULL");
                bulkOrderEntryList.add(dto);
            }

            if (isExpressOrderValidated)
    		{
    			dsBulkOrderWsDTO.setValidatedBulkUploadList(bulkOrderEntryList);
    			dsBulkOrderWsDTO.setGeEdgeBulkCartData(bhgeBulkUploadListDataWsDTO);
    			
    			BHGESoldToData soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
    			String currency = null;
    			String currencySymbol = null;
    			
    			if(soldTo!=null && soldTo.getCurrency()!=null) {
    				currency = soldTo.getCurrency().getIsocode();
    				currencySymbol = soldTo.getCurrency().getSymbol();
    				dsBulkOrderWsDTO.setCurrencyISO(StringEscapeUtils.escapeHtml4(currency));
        			dsBulkOrderWsDTO.setCurrencyFormattedValue(StringEscapeUtils.escapeHtml4(currencySymbol));
        			dsBulkOrderWsDTO.setIsSingleSoldtoSalesArea(StringEscapeUtils.escapeHtml4(soldTo.getLocName()));
    			}
    			else {
    				dsBulkOrderWsDTO.setCurrencyISO(StringUtils.EMPTY);
        			dsBulkOrderWsDTO.setCurrencyFormattedValue(StringUtils.EMPTY);
        			dsBulkOrderWsDTO.setIsSingleSoldtoSalesArea(StringUtils.EMPTY);
    			}
    			    			
    			dsBulkOrderWsDTO.setConfigurePartCount(configurePartCount);
    			dsBulkOrderWsDTO.setInvalidPartsCount(invalidPartCount);
    			dsBulkOrderWsDTO.setSuccessCount(String.valueOf(validPartCount));
    			
    			dsBulkOrderWsDTO.setBulkUploadList(bulkInputEntryDataWsDTOList);
    			dsBulkOrderWsDTO.setGeEdgeCustomerData(customerDataWsDTO);
    			dsBulkOrderWsDTO.setGeEdgeBulkCartData(bhgeBulkUploadListDataWsDTO);
    			final List<RegionData> listOfRegions = bhgeUserProfileFacade.getRegionsForCountryCode(BhgeFacadesConstants.US_COUNTRY_CODE);
    			dsBulkOrderWsDTO.setListOfStates(getRegionsAsWsDTO(listOfRegions));
    			dsBulkOrderWsDTO.setRegions(getRegionsAsWsDTO(listOfRegions));
    			//redirectAttributes.addFlashAttribute("geEdgeBulkCartData", bulkUploadListData);
    			//return "redirect:/cart/addbulk";
    			return dsBulkOrderWsDTO;
    		}
    		else
    		{
    			dsBulkOrderWsDTO.setGeEdgeBulkCartData(bhgeBulkUploadListDataWsDTO);
    			if (bulkOrderEntryList != null)
    			{
    				//model.addAttribute("bulkUploadList", bulkUploadList);
    				dsBulkOrderWsDTO.setValidatedBulkUploadList(bulkOrderEntryList);
    			}
    		    			
    			BHGESoldToData soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
    			String currency = null;
    			String currencySymbol = null;
    			if(soldTo!=null && soldTo.getCurrency()!=null) {
    				currency = soldTo.getCurrency().getIsocode();
        			currencySymbol = soldTo.getCurrency().getSymbol();
        			dsBulkOrderWsDTO.setCurrencyISO(currency);
        			dsBulkOrderWsDTO.setCurrencyFormattedValue(currencySymbol);
        			dsBulkOrderWsDTO.setIsSingleSoldtoSalesArea(soldTo.getLocName());
    			}
    			else {
    				dsBulkOrderWsDTO.setCurrencyISO(StringUtils.EMPTY);
        			dsBulkOrderWsDTO.setCurrencyFormattedValue(StringUtils.EMPTY);
        			dsBulkOrderWsDTO.setIsSingleSoldtoSalesArea(StringUtils.EMPTY);
    			}
    			
    			return dsBulkOrderWsDTO;
    		}

    	}
    	
    	protected List<BHGEBulkUploadInputEntryData> prepareBulkUploadData(final String[] productCodeArray, final String[] qtyArray)
    	{
    		List<BHGEBulkUploadInputEntryData> bulkUploadData = null;
    		if (null != productCodeArray && null != qtyArray)
    		{
    			bulkUploadData = new ArrayList<BHGEBulkUploadInputEntryData>();
    			final List<String> productCodes = Arrays.asList(productCodeArray);
    			final List<String> qtyList = Arrays.asList(qtyArray);
    			if (!productCodes.isEmpty() && productCodes.size() > 0)
    			{
    				/*
    				 * for (final String productCode : productCodes) { final int key = productCodes.indexOf(productCode);
    				 * productCode.replaceAll("\\s+", ""); if (productCode.isEmpty()) { continue; }
    				 *
    				 * final BHGEBulkUploadInputEntryData bulkUploadEntryData = new BHGEBulkUploadInputEntryData();
    				 * bulkUploadEntryData.setPartNum(productCode); final String qty = qtyList.get(key).replaceAll("\\s+", "");
    				 * bulkUploadEntryData.setQuantity(qty);
    				 *
    				 * bulkUploadData.add(bulkUploadEntryData); }
    				 */
    				for (int i = 0; i < productCodes.size(); i++)
    				{
    					String productCode = null;
    					productCode = productCodes.get(i);
    					productCode.replaceAll("\\s+", "");
    					if (productCode.isEmpty())
    					{
    						continue;
    					}
    					final BHGEBulkUploadInputEntryData bulkUploadEntryData = new BHGEBulkUploadInputEntryData();
    					bulkUploadEntryData.setPartNum(StringEscapeUtils.escapeHtml4(productCode));
    					final String qty = qtyList.get(i).replaceAll("\\s+", "");
    					bulkUploadEntryData.setQuantity(StringEscapeUtils.escapeHtml4(qty));
    					bulkUploadData.add(bulkUploadEntryData);
    				}
    			}

    		}
    		return bulkUploadData;
    	}
    	
    	private List<RegionWsDTO> getRegionsAsWsDTO(List<RegionData> regions) {
            List<RegionWsDTO> regionWsDTOList= new ArrayList<RegionWsDTO>();
            regions.forEach(regionData -> regionWsDTOList.add(getDataMapper().map(regionData, RegionWsDTO.class, "FULL")));
            return regionWsDTOList;
        }
    	
    	private boolean proceedToShoppingCart(final List<BHGEBulkUploadEntryData> validatedBulkUploadList, final Model model)
    	{
    		int invalidPartCount = 0;
    		int validPartCount = 0;
    		int configurePartCount = 0;
    		if (null != validatedBulkUploadList && validatedBulkUploadList.size() > 0)
    		{
    			for (final BHGEBulkUploadEntryData entryData : validatedBulkUploadList)
    			{
    				if (Config.getString("VALIDATED", "Validated").equalsIgnoreCase(entryData.getStatus()))
    				{
    					validPartCount++;
    				}
    				else if (Config.getString("ERROR", "Error").equalsIgnoreCase(entryData.getStatus()))
    				{
    					invalidPartCount++;
    				}
    				else if (Config.getString("CONFIGURE", "Configure").equalsIgnoreCase(entryData.getStatus()))
    				{
    					configurePartCount++;
    				}
    			}
    			model.addAttribute("invalidPartsCount", invalidPartCount);
    			model.addAttribute("configurePartCount", configurePartCount);
    			if (validatedBulkUploadList.size() == validPartCount)
    			{
    				return true;
    			}
    		}
    		return false;
    	}
    	
    	private void addDataToModel(final Model model, final CartData cartData)
    	{
    		final CustomerData customerData = customerFacade.getCurrentCustomer();
    		final BHGECustomerData geEdgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
    		model.addAttribute("cartData", cartData);
    		model.addAttribute("geEdgeCustomerData", geEdgeCustomerData);
    		if (null != cartData)
    		{
    			model.addAttribute("defaultShiptToAddress", cartData.getDeliveryAddress());
    		}
    		model.addAttribute("shipModeMessage", Config.getString("shipmode.message", "Ship Mode"));
    	}

    	protected CartData addCartData(final BHGEExpressOrderForm expressOrderForm, String cartId)
    	{
    		final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(cartId);
    		final CustomerData customerData = customerFacade.getCurrentCustomer();
    		final BHGECustomerData geEdgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
    		//final BHGESoldToData defaultSoldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
    		final BHGESoldToData defaultSoldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
    		
    		//cartModel.setEndCustomerRefNum(expressOrderForm.getEndCustomerPo());
    		//cartModel.setPonum(expressOrderForm.getPartnerPO());
    		//cartModel.setDeliveryAccountNum(geEdgeCustomerData.getDeliveryAccount());
    		cartModel
    				.setIsShipCompleteOrder(geEdgeCustomerData.getIsShipCompleteOrder() == Boolean.TRUE ? Boolean.TRUE : Boolean.FALSE);
    		//cartModel.setDeliveryPoint(expressOrderForm.getDeliveryPoint());
    		cartModel.setShipToContactName(geEdgeCustomerData.getShippingContactName());
    		cartModel.setShipToContactPhone(geEdgeCustomerData.getShippingContactNumber());

    		if (StringUtils.isNotEmpty(geEdgeCustomerData.getDeliveryCarrier()))
    		{
    			final ShippingCarrierMethod shippingCarrier = ShippingCarrierMethod.valueOf(geEdgeCustomerData.getDeliveryCarrier());
    			cartModel.setShippingCarrierMethod(shippingCarrier);
    		}

    		LOG.info("Express Order Delivery options: " + geEdgeCustomerData.getDeliveryOptions());

    		if (null != geEdgeCustomerData.getDeliveryOptions() && geEdgeCustomerData.getDeliveryOptions().equalsIgnoreCase("ADD"))
    		{
    			cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("ADD"));
    		}
    		else if (null != geEdgeCustomerData.getDeliveryOptions()
    				&& geEdgeCustomerData.getDeliveryOptions().equalsIgnoreCase("prepay"))
    		{
    			cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("PREPAY"));
    		}
    		else if (null != geEdgeCustomerData.getDeliveryOptions()
    				&& geEdgeCustomerData.getDeliveryOptions().equalsIgnoreCase("collect"))
    		{
    			cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("COLLECT"));
    		}

    		AddressModel defaultShipTo = cartModel.getDeliveryAddress();
    		if (defaultShipTo == null)
    		{
    			defaultShipTo = defaultBhgeUserProfileFecade.getDefaultShipto(geEdgeCustomerData, defaultSoldTo);
    		}

    		if (defaultShipTo != null)
    		{
    			//defaultShipTo.setDeliveryPoint(expressOrderForm.getDeliveryPoint());
    			//modelService.save(defaultShipTo);
    			cartModel.setDeliveryAddress(defaultShipTo);
    		}

    		modelService.save(cartModel);
    		final CartData cartData = new CartData();
    		bhgeCartPopulator.populate(cartModel, cartData);
    		return cartData;
    	}
    	
    	@RequestMapping(value = "/{cartId}/validateBulkUploadEntryForPrice", method = RequestMethod.GET)
    	@ResponseBody
	    @Operation(operationId = "validateBulkUploadEntryForPrice", summary ="Validate bulk upload entry with price", description = "Validate bulk upload entry with price")
	    @ApiBaseSiteIdAndUserIdParam
	    @ResponseStatus(HttpStatus.OK)
    	public DsBulkUploadEntryWsDTO validateBulkUploadEntryForPrice(
    		@Parameter(description = "partNum") @RequestParam(value = "partNum", required = true) final String partNum,
    		@Parameter(description = "qty") @RequestParam(value = "qty", required = true) String qty,
    		@Parameter(description = "lineNo") @RequestParam(value = "lineNo", required = true) final String lineNo,
    		@Parameter(description = "cartId") @PathVariable(value="cartId", required=true) final String cartId)
    	{

    		final PriceData priceData = bhgeCartFacade.getPriceFromRFCForWS(StringEscapeUtils.escapeHtml4(partNum), null);
    		DsBulkUploadEntryWsDTO dsBulkUploadEntryWsDTO = new DsBulkUploadEntryWsDTO();
    		
    		if (priceData != null && priceData.getConnectivityerror() != null)
    		{
    			final BHGEBulkUploadEntryData validatedData = new BHGEBulkUploadEntryData();
    			validatedData.setStatus("Connectivity Error");
    			dsBulkUploadEntryWsDTO = getDataMapper().map(validatedData, DsBulkUploadEntryWsDTO.class, "FULL");
    			return dsBulkUploadEntryWsDTO;
    		}
    		else
    		{
    			final BHGEBulkUploadInputEntryData inputEntry = new BHGEBulkUploadInputEntryData();
    			if (StringEscapeUtils.escapeHtml4(qty).equalsIgnoreCase("Er"))
    			{
    				qty = "1";
    			}

    			inputEntry.setPartNum(StringEscapeUtils.escapeHtml4(partNum));
    			if (StringUtils.isNotEmpty(StringEscapeUtils.escapeHtml4(qty)))
    			{
    				inputEntry.setQuantity(StringEscapeUtils.escapeHtml4(qty));
    			}
    			inputEntry.setLineNo(StringEscapeUtils.escapeHtml4(lineNo));

    			if (priceData != null && priceData.getValue() != null)
    			{
    				inputEntry.setUnitPrice(priceData.getValue().toString());
    			}

    			final BHGEBulkUploadEntryData validatedData = bhgeDataValidatorFacade.validateBulkUploadDataEntryWs(inputEntry,
    					Integer.parseInt(StringEscapeUtils.escapeHtml4(lineNo)), StringEscapeUtils.escapeHtml4(cartId));
    			
    			Map<String, Object> statusMapData = validatedData.getStatusMap();
				
				  Map<String, Object> statusMapDTO = new HashMap<>();
				  for(Map.Entry<String, Object> statusVal : statusMapData.entrySet()) {
					  String key = statusVal.getKey();
					  Object value = statusVal.getValue();
					  statusMapDTO.put(key, value); 
				  }
				 
    			if ("Check Price".equals(validatedData.getStatus()))
    			{
    				validatedData.setStatus("Price Not Available");
    			}
    			PriceWsDTO priceDto = getDataMapper().map(priceData, PriceWsDTO.class);
    			dsBulkUploadEntryWsDTO.setUnitPrice(priceDto);
    			dsBulkUploadEntryWsDTO.setProductImage(getDataMapper().map(validatedData.getProductImage(), ImageWsDTO.class));
    			BHGEProductAccessData productAccessData = validatedData.getProductAccessData();
    			BHGEProductAccessDataWsDTO productAccessDataWsDTO = getDataMapper().map(productAccessData, BHGEProductAccessDataWsDTO.class);
    			dsBulkUploadEntryWsDTO.setProductAccessData(productAccessDataWsDTO);
    			dsBulkUploadEntryWsDTO.setConfigurationflag(validatedData.getConfigurationflag());
    			dsBulkUploadEntryWsDTO.setIsAddedToCart(validatedData.getIsAddedToCart());
    			dsBulkUploadEntryWsDTO.setStatusMap(statusMapData);
    			dsBulkUploadEntryWsDTO = getDataMapper().map(validatedData, DsBulkUploadEntryWsDTO.class, "FULL");
    			
    			return dsBulkUploadEntryWsDTO;
    		}
    	}

    @RequestMapping(value = "/getVCProductData", method = RequestMethod.POST)
    @ResponseBody
    @Operation(operationId = "getVCProductConfigData", summary = "Get VC product Price details.", description = "Returns product Price based on the product code.")
    @ApiBaseSiteIdAndUserIdParam
    public BHGEVCProductSummaryWSDTO getVCProductdetails(@RequestBody(required = true) final BHGEVCConfigurationWsDTO configurationWsDTO,
                                                         @Parameter(description = "Fields mapping level") @RequestParam(required = false, defaultValue = DEFAULT_FIELD_SET) final String fields) {
        if (StringUtils.isBlank(configurationWsDTO.getProductCode()) || StringUtils.isBlank(configurationWsDTO.getConfigId())
                || StringUtils.isBlank(configurationWsDTO.getProductLine())) {
            throw new RequestParameterException("invalid parameters", RequestParameterException.INVALID);
        }
           BHGEVCProductSummaryWSDTO bhgeVCProductSummaryWSDTO = new BHGEVCProductSummaryWSDTO();
        BHGEVCProductSummaryData bhgeVCProductSummaryData = new BHGEVCProductSummaryData();
        LOG.info("DSBulkOrderController:getVCProductdetails: Start for product" + configurationWsDTO.getProductCode());
        bhgeVCProductSummaryData = bhgePriceAvailabilityFacade.getVCPriceAndAvailabilitySummary(configurationWsDTO,bhgeVCProductSummaryData);
        bhgeVCProductSummaryWSDTO = getDataMapper().map(bhgeVCProductSummaryData, BHGEVCProductSummaryWSDTO.class);
        return bhgeVCProductSummaryWSDTO;
    }

    }
