
package com.bh.occ.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import jakarta.annotation.Resource;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.bhge.core.order.service.BHGECartService;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.rma.BHGERmaFormFacade;
import com.bhge.facades.rma.data.RmaReturnCartData;
import com.bhge.facades.savecart.BHGESaveCartFacade;
import com.ds.dsocc.common.dto.RestoreSaveCartFormWsDTO;
import com.ds.dsocc.common.dto.SaveCartsWsDTO;

import de.hybris.platform.commercefacades.order.CartFacade;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.CommerceSaveCartParameterData;
import de.hybris.platform.commercefacades.order.data.CommerceSaveCartResultData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commerceservices.order.CommerceSaveCartException;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commercewebservicescommons.dto.order.CartWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.search.pagedata.PaginationWsDTO;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;

@Controller
@ApiVersion("v2")
@Tag(name = "DSAccount SaveCarts")
@RequestMapping(value = "/{baseSiteId}/users/{userId}")
public class DSSavedCartController extends DSBaseController {



	private static final Logger LOG = Logger.getLogger(DSSavedCartController.class);

	//private static final String PAGE_SIZE = "pageSize";

	@Resource(name = "saveCartFacade")
	private BHGESaveCartFacade saveCartFacade;

	@Resource(name = "productVariantFacade")
	private ProductFacade productFacade;

	@Resource(name = "cartFacade")
	private CartFacade cartFacade;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "bhgeSaveCartFacadeImpl") 
	private BHGESaveCartFacade bhgeSaveCartFacadeImpl;
	
	@Resource(name = "bhgeCartFacade")
	private BHGECartFacade bhgeCartFacade;
	
	@Resource(name = "bhgeRmaFormFacade")
	private BHGERmaFormFacade bhgeRmaFormFacade;

	public enum CommerceType
	{
		All,
		Buy,
		Returns,
		Quote
	}
	

	@RequestMapping(value = "/savedCarts", method = { RequestMethod.GET }, produces = "application/json")
	@ResponseBody
	@Operation(operationId = "SavedCarts", summary ="Checks if a saved cart exists")
	@ApiBaseSiteIdAndUserIdParam
	public SaveCartsWsDTO SaveCarts(@RequestParam(value = "page", defaultValue = "0") final int page,
			@RequestParam(value = "show", defaultValue = "Page") final ShowMode showMode, 
			@RequestParam(value = "pageSize", required = false, defaultValue = PAGE_SIZE) final int pageSize, 
			@RequestParam(value = "sort", required = false) final String fields,
			@RequestParam final String sortCode,@RequestParam(value = "type", defaultValue = "All")	final CommerceType commerceType)
	{
		
		final PageableData pageableData = createPageableData(page, pageSize, StringEscapeUtils.escapeHtml4( sortCode), showMode); 
		PaginationData paginationData = new PaginationData();
		final SearchPageData<CartData> searchPageData = saveCartFacade.getSavedCartsForUser(pageableData, null);
		PaginationData pagination = searchPageData.getPagination();
		List<CartData> cartDataList = searchPageData.getResults();
		List<CartWsDTO> cartWsDTOListResp = new ArrayList<>();

		if(!cartDataList.isEmpty()) {
			for(CartData cartData : cartDataList) {
				if(commerceType.equals(CommerceType.All) || cartData.getCommerceType().equalsIgnoreCase(commerceType.toString())) {
					CartWsDTO cartws = new CartWsDTO();
					cartws = getDataMapper().map(cartData, CartWsDTO.class, "FULL");
					cartWsDTOListResp.add(cartws);
				}
			}
		}

        SaveCartsWsDTO saveCartwsDTO = new SaveCartsWsDTO();
		saveCartwsDTO.setSaveCartsList(cartWsDTOListResp);
        saveCartwsDTO.setPagination((getDataMapper().map(pagination, PaginationWsDTO.class, "FULL")));

		return getDataMapper().map(saveCartwsDTO, SaveCartsWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
	}
	
	@RequestMapping(value = "/{cartId}/viewSavedCart", method = { RequestMethod.GET })
	@ResponseBody
	@Operation(operationId = "ViewSavedCart", summary ="Checks if a saved cart exists and returns cart details")
	@ApiBaseSiteIdAndUserIdParam
	public CartWsDTO savedCart(@Parameter(description = "cartId")@PathVariable final String cartId){
		final CommerceSaveCartParameterData parameter = new CommerceSaveCartParameterData();
		CartWsDTO cartWsDto = new CartWsDTO();
		CartData cartData = new CartData();
		String cartCommerceType = "";
		try {
			parameter.setCartId(StringEscapeUtils.escapeHtml4(cartId));
			
			final CommerceSaveCartResultData resultData = saveCartFacade.getCartForCodeAndCurrentUser(parameter);
			
			cartData = resultData.getSavedCartData();

			if (Objects.nonNull(cartData.getCommerceType())){
				cartCommerceType = cartData.getCommerceType();
			}else{
				cartCommerceType = "BUY";
			}
			LOG.info("=================== CommerceType ==================" + cartData.getCommerceType());
			if(cartCommerceType.equalsIgnoreCase("RETURNS")) {
				cartData = bhgeRmaFormFacade.getReturnsCartForSavedCart(cartData,StringEscapeUtils.escapeHtml4(cartId));
				cartData.setLocationMap(showCartEntryByLocationForReturn(cartData.getReturnsCartData()));
			}else {
				cartData.setLocationMap(showCartEntryByLocation(cartData.getEntries()));
			}

			cartWsDto = getDataMapper().map(cartData, CartWsDTO.class);

		}catch(final CommerceSaveCartException e) {
			LOG.warn("Attempted to load a saved cart that does not exist or is not visible", e);

		}
		return cartWsDto;
	}
	
	private Map<String, Integer> showCartEntryByLocationForReturn(final List<RmaReturnCartData> entryData)
	{
		final Map<String, Integer> locationMap = new HashMap<String, Integer>();
		for (final RmaReturnCartData cartData : entryData)		{
			if (locationMap.containsKey(cartData.getReturnLocationId()))			{
				locationMap.put(cartData.getReturnLocationId(), locationMap.get(cartData.getReturnLocationId()) + 1);
			}else{
				locationMap.put(cartData.getReturnLocationId(), 1);
			}
		}
		return locationMap;
	}
	
	private Map<String, Integer> showCartEntryByLocation(final List<OrderEntryData> entryData)
	{
		final Map<String, Integer> locationMap = new HashMap<String, Integer>();
		for (final OrderEntryData cartData : entryData)		{
			if (locationMap.containsKey(cartData.getReturnLocation()))			{
				locationMap.put(cartData.getReturnLocation(), locationMap.get(cartData.getReturnLocation()) + 1);
			}else{
				locationMap.put(cartData.getReturnLocation(), 1);
			}
		}
		return locationMap;
	}
	
	@RequestMapping(value = "/{cartId}/restore", method = { RequestMethod.POST },consumes ={MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
	@ResponseBody
	@Operation(operationId = "RestoreCart", summary ="Restores the cart")
	@ApiBaseSiteIdAndUserIdParam
  	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<String> postRestoreSaveCartForId(@Parameter(description = "cartId") @PathVariable final String cartId,
			@Parameter(description = "restoreSaveCartForm", required = true) @RequestBody final RestoreSaveCartFormWsDTO restoreSaveCartForm){
		LOG.info("===================== CART RESTORE - START ===================" + java.time.LocalDateTime.now());
		try {
			
			if(restoreSaveCartForm.getCartName() != null && cartFacade.hasEntries()) {
				if (restoreSaveCartForm.getPreventSaveActiveCart())
				{
					// Deleting the session cart
					cartFacade.removeSessionCart();
				}
				else
				{
					LOG.info("===================== CART RESTORE ===================> saving active cart");
					LOG.info("===================== CART RESTORE ===================> active cart Id : "  + cartFacade.getSessionCart().getCode());
					final CommerceSaveCartParameterData commerceSaveActiveCart = new CommerceSaveCartParameterData();
					commerceSaveActiveCart.setCartId(cartFacade.getSessionCart().getCode());
					commerceSaveActiveCart.setName(restoreSaveCartForm.getCartName());
					commerceSaveActiveCart.setEnableHooks(true);
					saveCartFacade.saveCart(commerceSaveActiveCart);
					LOG.info("===================== CART RESTORE ===================> saved active cart : " );
				}
			}
			
			final CommerceSaveCartParameterData commerceSaveCartParameterData = new CommerceSaveCartParameterData();
			commerceSaveCartParameterData.setCartId(StringEscapeUtils.escapeHtml4(cartId));
			commerceSaveCartParameterData.setEnableHooks(true);
			
			if (restoreSaveCartForm.getKeepRestoredCart()){
				saveCartFacade.cloneSavedCart(commerceSaveCartParameterData);
			}
			LOG.info("===================== CART RESTORE ===================> restoring saved cart started" );
			saveCartFacade.restoreSavedCart(commerceSaveCartParameterData);
			LOG.info("===================== CART RESTORE ===================> restoring saved cart completed" );
			return new ResponseEntity<>("success",HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			LOG.info("Exception in DSSavedCartController - postRestoreSaveCartForId : " + e.getMessage());
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}
	
	@RequestMapping(value = "/{cartId}/delete", method = RequestMethod.DELETE)
	@Operation(operationId = "DeleteSavedCart", summary ="Checks if a saved cart exists and deletes cart details")
	@ResponseStatus(HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public void deleteSaveCartForId(@Parameter(description = "cartId")@PathVariable final String cartId) throws CommerceSaveCartException {
		try{
			LOG.info("In delete saved cart API line 245");
			bhgeSaveCartFacadeImpl.deleteSavedCart(cartId);
			LOG.info("Cart " + cartId + " has been deleted successfully ");
		}catch (final Exception ex){
			LOG.error("Error while deleting the saved cart with cartId " + cartId + " because of " + ex);
		}
		
	}
}

