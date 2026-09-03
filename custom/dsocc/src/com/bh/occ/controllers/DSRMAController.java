/**
 * 
 */
package com.bh.occ.controllers;

import com.bh.occ.forms.BHGEUploadAdditionalFileForm;
import com.bh.occ.forms.ServiceOffering;
import com.bh.occ.forms.ServiceOfferingResponse;
import com.bh.occ.util.FileSanitizerUtil;
import com.bh.occ.util.XSSFilterUtil;
import com.bhge.core.category.dao.DefaultBHGECategoryDao;
import com.bhge.core.data.BHGERmaStatusData;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.rmacache.MaterialNumSearchCacheKey;
import com.bhge.core.rmacache.SerialNumSearchCacheKey;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.product.data.BrandNameData;
import com.bhge.facades.product.data.RMAData;
import com.bhge.facades.rma.BHGERmaFormFacade;
import com.bhge.facades.rma.data.*;
import com.bhge.facades.search.BHGEProductSearchFacade;
import com.ds.dsocc.cart.data.DSCartTypeWsDTO;
import com.ds.dsocc.rma.dto.BHGERmaEntryWsDTO;
import com.ds.dsocc.rma.dto.BHGERmaFormEntryWsDTO;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.order.SaveCartFacade;
import de.hybris.platform.commercefacades.order.data.CommerceSaveCartParameterData;
import de.hybris.platform.commercefacades.order.data.CommerceSaveCartResultData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.search.data.AutocompleteResultData;
import de.hybris.platform.commercefacades.search.data.SearchQueryData;
import de.hybris.platform.commercefacades.search.data.SearchStateData;
import de.hybris.platform.commerceservices.order.CommerceSaveCartException;
import de.hybris.platform.commerceservices.search.facetdata.ProductSearchPageData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commercewebservicescommons.dto.product.ProductWsDTO;
import de.hybris.platform.core.Registry;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.key.CacheKey;
import de.hybris.platform.regioncache.region.CacheRegion;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdUserIdAndCartIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.text.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.Resource;
import java.io.IOException;
import java.util.*;

/**
 * This controller is used for RMA related APIs for revamped DS store
 * Added on 15/4/2021
 * @author 212695810
 *
 */

@Controller
@Tag(name = "RMA")
@RequestMapping(value = {"/{baseSiteId}/users/{userId}/rma","/{baseSiteId}/users/{userId}/myReturns"})
public class DSRMAController extends DSBaseController {
	
	private static final Logger LOG = Logger.getLogger(DSRMAController.class);
	
	@Resource(name = "bhgeRmaFormFacade")
	private BHGERmaFormFacade bhgeRmaFormFacade;
	
	@Resource(name = "bhgeCartFacade")
	BHGECartFacade bhgeCartFacade;

	@Resource(name = "saveCartFacade")
	private SaveCartFacade saveCartFacade;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "sessionService")
	public SessionService sessionService;

	@Autowired(required = true)
	BHGESoldToUtil bhgeSoldToUtil;
	
	@Resource(name = "bhgeProductSearchFacade")
	public BHGEProductSearchFacade<ProductData> productSearchFacade;
	
	@Resource(name = "bhgeCategoryDao")
	public DefaultBHGECategoryDao bhgeCategoryDao;
	
	@Resource(name = "serialNumSearchCacheRegion")
	public CacheRegion serialNumSearchCacheRegion;

	@Resource(name = "partNumSearchCacheRegion")
	public CacheRegion partNumSearchCacheRegion;
	@Resource(name = "serialNumberSearchCacheValueLoader")
	public CacheValueLoader serialNumberSearchCacheValueLoader;

	@Resource(name = "partNumberSearchCacheValueLoader")
	public CacheValueLoader partNumberSearchCacheValueLoader;


	@RequestMapping(value = "/{cartId}/rmaForm", method = RequestMethod.PUT,consumes = { 
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	@Operation(operationId = "saveRmaForm", summary = "saveRmaForm", description = "saveRmaForm")
	@ApiBaseSiteIdAndUserIdParam
	public Integer saveRmaForm(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@Parameter(description = "cart Id", required = true) @PathVariable final String cartId,
			@Parameter(description = "Request body parameter that contains RmaForm data", required = true) @RequestBody final BHGERmaEntryWsDTO rmaFormEntry)
	{
		LOG.info("Inside controller - /DSRMAForm");	
		//
		if(rmaFormEntry != null && rmaFormEntry.getServiceOfferings() != null) {
			for(BHGEServiceOfferingsData serviceOfferingsData : rmaFormEntry.getServiceOfferings()) {
				LOG.info("==== Inside BHGEServiceOfferingsData loop ====");
				if( rmaFormEntry.getOfferingDataList() != null) {
					for(OfferingData offeringData : rmaFormEntry.getOfferingDataList()) {
						LOG.info("==== Inside OfferingData loop ====Offering Text==="+offeringData.getOfferingText());
						if(serviceOfferingsData.getOfferingCode().equalsIgnoreCase(offeringData.getServiceOffering())) {
							serviceOfferingsData.setOfferingLongText(sanitize(offeringData.getOfferingText()));
							serviceOfferingsData.setOfferingLongTextConfirmation(offeringData.getOfferingTextConfirmation());
							break;
						}
					}
				}
			}
		}
		//
		rmaFormEntry.setPartNumber(rmaFormEntry.getPartNumber());
		rmaFormEntry.setFormattedPrice(StringEscapeUtils.escapeHtml4(rmaFormEntry.getFormattedPrice()));
		rmaFormEntry.setLineNotes(StringEscapeUtils.escapeHtml4(rmaFormEntry.getLineNotes()));
		rmaFormEntry.setOtherDetails(StringEscapeUtils.escapeHtml4(rmaFormEntry.getOtherDetails()));
		rmaFormEntry.setPlanningSite(StringEscapeUtils.escapeHtml4(rmaFormEntry.getPlanningSite()));
		rmaFormEntry.setPricingInfo(StringEscapeUtils.escapeHtml4(rmaFormEntry.getPricingInfo()));
		rmaFormEntry.setProblemDescription(StringEscapeUtils.escapeHtml4(rmaFormEntry.getProblemDescription()));
		rmaFormEntry.setProductDetails(StringEscapeUtils.escapeHtml4(rmaFormEntry.getProductDetails()));
		rmaFormEntry.setReturnToSiteName(StringEscapeUtils.escapeHtml4(rmaFormEntry.getReturnToSiteName()));
		if(rmaFormEntry.getAccessoryPartNumbers() != null)
		{
			rmaFormEntry.getAccessoryPartNumbers().forEach((accessoryPartnumber) -> accessoryPartnumber = StringEscapeUtils.escapeHtml4(accessoryPartnumber));
			}
		if(rmaFormEntry.getAvailableSites() != null)
		{
			rmaFormEntry.getAvailableSites().forEach((availableSites) -> availableSites = StringEscapeUtils.escapeHtml4(availableSites));
		}
		if(rmaFormEntry.getSerialNumber() != null)
		{
		rmaFormEntry.getSerialNumber().forEach((serialNumber) -> serialNumber = StringEscapeUtils.escapeHtml4(serialNumber));
		}
		return bhgeRmaFormFacade.saveRmaForm(rmaFormEntry, StringEscapeUtils.escapeHtml4(cartId));
	}

	
	@RequestMapping(value = "{cartId}/editRMA/{entryNumber}", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "editRMAForm", summary = "editRMAForm", description = "editRMAForm")
	@ApiBaseSiteIdAndUserIdParam
	public BHGERmaFormEntryWsDTO editRMA(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@Parameter(description = "cart Id", required = true) @PathVariable final String cartId,
			@Parameter(description = "entryNumber", required = true) @PathVariable final Integer entryNumber) 
	{
		BHGERmaFormEntryData rmaFormEntryData = bhgeRmaFormFacade.editRMAForm(entryNumber);	
		return getDataMapper().map(rmaFormEntryData, BHGERmaFormEntryWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
	}
	
	
	@RequestMapping(value = "{cartId}/reOrderRMA/{rmaNumber}", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	@Operation(operationId = "reOrderRMA", summary = "reOrderRMA", description = "reOrderRMA")
	@ApiBaseSiteIdAndUserIdParam
	public BHGERmaStatusData reOrderRMA(@Parameter(description = "cart Id", required = true) @PathVariable final String cartId,
			@Parameter(description = "rmaNumber", required = true) @PathVariable final String rmaNumber) 
	{
		BHGERmaStatusData bhgeRmaStatusData = bhgeRmaFormFacade.createEntireCartFromRMA(rmaNumber,cartId);
		return bhgeRmaStatusData; 
		//return getDataMapper().map(cartdata, CartWsDTO.class, StringEscapeUtils.escapeHtml4( fields));
		
	}
	
	@RequestMapping(value = "{cartId}/reOrderRMA/{rmaNumber}/{entryNumber}", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	@Operation(operationId = "reOrderLineRMA", summary = "reOrderLineRMA", description = "reOrderLineRMA")
	@ApiBaseSiteIdAndUserIdParam
	public BHGERmaStatusData reOrderRmaByLine(@Parameter(description = "cart Id", required = true) @PathVariable final String cartId,
			@Parameter(description = "rmaNumber", required = true) @PathVariable final String rmaNumber,
			@Parameter(description = "entryNumber", required = true) @PathVariable final Integer entryNumber) 
	{
		BHGERmaStatusData bhgeRmaStatusData  = bhgeRmaFormFacade.createCartFromRMA(rmaNumber,cartId,entryNumber);
		return bhgeRmaStatusData;
		
	}
	
	@RequestMapping(value = "/{cartId}/entries", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.OK)
	@Operation(operationId = "removeRMACartEntry", summary = "Deletes RMA cart entry.", description = "Deletes RMA cart entry.")
	@ApiBaseSiteIdUserIdAndCartIdParam
	public void removeRMACart(
			@Parameter(description = "The entry number. Each entry in a cart has an entry number.", required = true) @RequestParam final String entryNumber)
	{
		final List<Integer> finalList = new ArrayList<>();
		final String[] a = entryNumber.split(",");
		for (int i = 0; i < a.length; i++)
		{
			finalList.add(Integer.parseInt(a[i].trim()));
		}
		bhgeRmaFormFacade.removeEntry(finalList);
	}
	
	@RequestMapping(value = "{cartId}/cloneRmaForm/{entryNumber}", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "cloneRmaForm", summary = "cloneRmaForm", description = "cloneRmaForm")
	@ApiBaseSiteIdAndUserIdParam
	public Integer cloneRmaForm(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@Parameter(description = "cart Id", required = true) @PathVariable final String cartId,
			@Parameter(description = "entryNumber", required = true) @PathVariable final Integer entryNumber)
	{
		LOG.info("===================== CLONE FUNCTIONALITY - START ===================" + java.time.LocalDateTime.now());
		final Integer clonedEntry = bhgeRmaFormFacade.cloneEntry(entryNumber);
		final CartModel cartModel = bhgeCartService.getSessionCart();
		for(AbstractOrderEntryModel entry:cartModel.getEntries()){
			if (entry.getEntryNumber() == entryNumber){
				if(entry.getAccessoryProducts() != null && entry.getAccessoryProducts().size() > 0){
					bhgeRmaFormFacade.cloneAccessories(entryNumber, clonedEntry);
				}
			}
		}
		LOG.info("===================== CLONE FUNCTIONALITY - END ===================" + java.time.LocalDateTime.now());
		return clonedEntry;
	}
	

	@Secured({ "ROLE_CLIENT", "ROLE_CUSTOMERGROUP", "ROLE_CUSTOMERMANAGERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_GUEST" })
	@RequestMapping(value = "/switchCart", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	@Operation(operationId = "switchCart", summary = "switchCart", description = "RMA switch cart.")
	@ApiBaseSiteIdAndUserIdParam
	public void switchCart(
	@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
	@Parameter(description = "Optional parameter. If the parameter is provided and its value is true, only save cart") @RequestParam(defaultValue = "false") final boolean isSave,
	@Parameter(description = "from save cart") @RequestParam final String formSave)
	{
		LOG.debug("switchCart");
		String cartCommerceType = "";
		final CartModel cartModel = bhgeCartService.getSessionCart();

		if (Objects.nonNull(cartModel.getCommerceType()))
		{
			cartCommerceType = cartModel.getCommerceType().toString();
		}
		else
		{
			cartCommerceType = "BUY";
		}
		LOG.info("switchCart Contoller :- current cart type is " + cartCommerceType + " | " + isSave + " | " + formSave);
		if (isSave)
		{
			final CommerceSaveCartParameterData commerceSaveCartParameterData = new CommerceSaveCartParameterData();
			commerceSaveCartParameterData.setName(formSave);
			commerceSaveCartParameterData.setDescription(formSave);
			commerceSaveCartParameterData.setEnableHooks(true);
			try
			{
				final CommerceSaveCartResultData saveCartData = saveCartFacade.saveCart(commerceSaveCartParameterData);

				LOG.info(" ########################### User has successfully saved the Cart of Cart id : "
						+ saveCartData.getSavedCartData().getCode() + " by Cart Name " + commerceSaveCartParameterData.getName());
			}
			catch (final CommerceSaveCartException csce)
			{
				LOG.error(csce.getMessage(), csce);
			}

			bhgeCartFacade.clearSessionCart();
			bhgeRmaFormFacade.switchCartType(cartCommerceType);
		}
		else
		{
			bhgeCartFacade.clearSessionCart();
			bhgeRmaFormFacade.switchCartType(cartCommerceType);
		}

	}

	@Secured({ "ROLE_CLIENT", "ROLE_CUSTOMERGROUP", "ROLE_CUSTOMERMANAGERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_GUEST" })
	@RequestMapping(value = "/cartType", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "cartType", summary = "cartType", description = "RMA Get cart type.")
	@ApiBaseSiteIdAndUserIdParam
	public DSCartTypeWsDTO getCartType(
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
	{
		LOG.debug("cartType");
		final String cartType = bhgeRmaFormFacade.getCartType();
		DSCartTypeWsDTO cartData = new DSCartTypeWsDTO();
		cartData.setCommerceType(cartType);
		return cartData;
	}


	@Secured({ "ROLE_CLIENT", "ROLE_CUSTOMERGROUP", "ROLE_CUSTOMERMANAGERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_GUEST" })
	@RequestMapping(value = "/switchForce", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "switchForce", summary = "switchForce", description = "switchForce")
	@ApiBaseSiteIdAndUserIdParam
	public DSCartTypeWsDTO switchForce(
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
		LOG.info("switchForce Controller :- START");
		String cartCommerceType, updatedCartType = "";
		DSCartTypeWsDTO cartData = new DSCartTypeWsDTO();
		final CartModel cartModel = bhgeCartService.getSessionCart();

		if (Objects.nonNull(cartModel.getCommerceType()))
		{
			cartCommerceType = cartModel.getCommerceType().toString();
		}
		else
		{
			cartCommerceType = "BUY";
		}
		LOG.info("switchForce Controller :- CLOSE");
		updatedCartType =  bhgeRmaFormFacade.switchCartType(cartCommerceType);
		cartData.setCommerceType(updatedCartType);
		return cartData;
	}

	@RequestMapping(value = "/hazardInfo", method = RequestMethod.PUT,consumes = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	@Operation(operationId = "saveHazardInfo", summary = "saveHazardInfo", description = "saveHazardInfo")
	@ApiBaseSiteIdAndUserIdParam
	public Boolean saveHazardInfo(@Parameter(required = true) @RequestBody
								  final BHGEHazardousInfoData hazardousInfo,
								  @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
		LOG.debug("saveHazardInfo");
		
		// Sanitize hazardousInfo
		if (hazardousInfo.getChemicalDetails() != null) {
			hazardousInfo.getChemicalDetails().forEach((h) -> {
				h.setChemicalName(StringEscapeUtils.escapeHtml4(h.getChemicalName()));
				h.setChemicalNotes(StringEscapeUtils.escapeHtml4(h.getChemicalNotes()));
				h.setUn(StringEscapeUtils.escapeHtml4(h.getUn()));
			});
		}
		if (hazardousInfo.getHazardFormAttachments() != null) {
			hazardousInfo.getHazardFormAttachments().forEach((h) -> h = StringEscapeUtils.escapeHtml4(h));
		}
		if (hazardousInfo.getHazardType() != null) {
			hazardousInfo.getHazardType().forEach((ht) -> ht = StringEscapeUtils.escapeHtml4(ht));
		}
		if (hazardousInfo.getPartList() != null) {
			hazardousInfo.getPartList().forEach((partlist) -> {
				partlist.setPartCode(StringEscapeUtils.escapeHtml4(partlist.getPartCode()));
				partlist.setPartName(StringEscapeUtils.escapeHtml4(partlist.getPartName()));
			});
		}
		hazardousInfo.setOtherText(StringEscapeUtils.escapeHtml4(hazardousInfo.getOtherText()));
		hazardousInfo.setHazardInfo(StringEscapeUtils.escapeHtml4(hazardousInfo.getHazardInfo()));
		hazardousInfo.setFluidText(StringEscapeUtils.escapeHtml4(hazardousInfo.getFluidText()));
		
		String sanitizedFileds = StringEscapeUtils.escapeHtml4(fields);
		return bhgeRmaFormFacade.saveHazardInfo(hazardousInfo);

	}

	@RequestMapping(value = "/hazardInfo", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "getHazardInfo", summary = "getHazardInfo", description = "getHazardInfo")
	@ApiBaseSiteIdAndUserIdParam
	public BHGEHazardousInfoData getHazardInfo() {

		return bhgeRmaFormFacade.getHazardInfo();


	}

	@RequestMapping(value = "/hazardCompleteness", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "gethazardCompleteness", summary = "gethazardCompleteness", description = "gethazardCompleteness")
	@ApiBaseSiteIdAndUserIdParam
	public String gethazardCompleteness(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
		LOG.info("Inside hazardCompleteness - START");
		LOG.info("Inside hazardCompleteness - CALL 0");
		return bhgeRmaFormFacade.gethazardCompletenessforWS();

	}

	@RequestMapping(value = "/removeHazardInfoFiles", method = RequestMethod.GET)
	@ResponseBody
	@ResponseStatus(code=HttpStatus.OK)
	@Operation(operationId = "removeHazardInfoFiles", summary = "removeHazardInfoFiles", description = "removeHazardInfoFiles")
	@ApiBaseSiteIdAndUserIdParam
	public Boolean removeHazardInfoFiles(@ApiFieldsParam @RequestParam(value = "fileName", defaultValue = "", required = false)
										 final String fileName,
										 @ApiFieldsParam @RequestParam("entryNumber") int entryNumber,
										 @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)	{
		return bhgeRmaFormFacade.removeHazardInfoFiles(StringEscapeUtils.escapeHtml4(fileName));
	}

	@RequestMapping(value = "/ServiceOffering", method = RequestMethod.PUT)
	@ResponseBody
	@Operation(operationId = "ServiceOffering", summary = "ServiceOffering", description = "ServiceOffering")
	@ApiBaseSiteIdAndUserIdParam
	public ServiceOffering getOfferingMatrix(@Parameter(required = true) @RequestBody final List<RMAData> data,
											 @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
	{
		if(data != null)
		{
		data.forEach((d) -> {
			d.setMaterialNumber(d.getMaterialNumber());
			d.setPlant(StringEscapeUtils.escapeHtml4(d.getPlant()));
			d.setSerialNumber(StringEscapeUtils.escapeHtml4(d.getSerialNumber()));
			d.setSrvOff(StringEscapeUtils.escapeHtml4(d.getSrvOff()));
		});
		}
		return prepareServiceOffering(data);
	}

		@Secured({ "ROLE_CLIENT", "ROLE_CUSTOMERGROUP", "ROLE_CUSTOMERMANAGERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_GUEST" })
		@ResponseBody
		@ResponseStatus(code=HttpStatus.CREATED)
		@PostMapping(value = "/uploadAdditionalFile", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
		@Operation(operationId = "uploadAdditionalFile", summary = "uploadAdditionalFile", description = "uploadAdditionalFile")
		@ApiBaseSiteIdAndUserIdParam
		public void saveOrderAttachment( @Parameter @RequestPart(value = "file") MultipartFile file,
											@Parameter @RequestParam("entryNumber") int entryNumber,
											@Parameter @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) throws IOException
		{
			try
			{
				if (file != null && FileSanitizerUtil.isFileSanitized(file))
				{
					
					bhgeRmaFormFacade.uploadAdditionalFile(file, entryNumber);
				}
			}
			catch (final Exception ex)
			{
				LOG.error("Error in uploading the attachment to the rma form" + ex);
			}
		}

	@Secured({ "ROLE_CLIENT", "ROLE_CUSTOMERGROUP", "ROLE_CUSTOMERMANAGERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_GUEST" })
	@ResponseBody
	@ResponseStatus(code=HttpStatus.CREATED)
	@PostMapping(value = "/uploadHazardFormAttachments", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	@Operation(operationId = "uploadHazardFormAttachments", summary = "uploadHazardFormAttachments", description = "uploadHazardFormAttachments")
	@ApiBaseSiteIdAndUserIdParam
	public void saveHazardInfoAttachment( @Parameter @RequestPart(value = "file") MultipartFile file,
									 @Parameter @RequestParam("entryNumber") int entryNumber,
									 @Parameter @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) throws IOException
	{
		try
		{
			if (file != null && FileSanitizerUtil.isFileSanitized(file))
			{

				bhgeRmaFormFacade.uploadAdditionalFileForHazardForm(file);
			}
		}
		catch (final Exception ex)
		{
			LOG.error("Error in uploading the attachment to the rma form" + ex);
		}
	}

	@Secured({ "ROLE_CLIENT", "ROLE_CUSTOMERGROUP", "ROLE_CUSTOMERMANAGERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_GUEST" })
	@RequestMapping(value = "/removeAttachment", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "removeAttachment", summary = "removeAttachment", description = "removeAttachment")
	@ApiBaseSiteIdAndUserIdParam
	public Boolean removeAttachment( @ApiFieldsParam  @RequestParam(value = "entryNumber", defaultValue = "", required = false)
									final int entryNumber,  @ApiFieldsParam  @RequestParam(value = "fileName", defaultValue = "", required = false)
									final String fileName,
									@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
	{
		return bhgeRmaFormFacade.removeAttachment(StringEscapeUtils.escapeHtml4(fileName), entryNumber);
	}


	/**
	 *
	 * @param url
	 * @return
	 */
	private String getReplacedString(String url)
	{
		if (url.contains("openingBrack"))
		{
			url = url.replaceAll("openingBrack", "(");
		}
		if (url.contains("closingBrack"))
		{
			url = url.replaceAll("closingBrack", ")");
		}
		if (url.contains("greatSymbol"))
		{
			url = url.replaceAll("greatSymbol", ">");
		}
		if (url.contains("lessSymbol"))
		{
			url = url.replaceAll("lessSymbol", "<");
		}
		if (url.contains("quotes"))
		{
			url = url.replaceAll("quotes", "\"");
		}
		if (url.contains("StraigtQuaote"))
		{
			url = url.replaceAll("StraigtQuaote", "'");
		}
		return url;
	}

	protected <E> List<E> subList(final List<E> list, final int maxElements)
	{
		if (CollectionUtils.isEmpty(list))
		{
			return Collections.emptyList();
		}

		if (list.size() > maxElements)
		{
			return list.subList(0, maxElements);
		}

		return list;
	}

	public ServiceOffering prepareServiceOffering(final List<RMAData> data)	{
		LOG.info("===================== SERVING OFFERING HYBRIS CALL - START ===================" + java.time.LocalDateTime.now());

		final SalesAreaData sessionSalesAreaData = bhgeSoldToUtil.getSalesAreaData();
		final ServiceOffering offering = new ServiceOffering();
		final List<ServiceOfferingResponse> offeringResponses = new ArrayList<>();

		GEEdgeProductModel geProductModel = null;

		if (Objects.nonNull(data) && data.size() > 0)
		{
			geProductModel = bhgeRmaFormFacade.fetchReturnPart(data.get(0).getMaterialNumber());
		}
		else
		{
			final String responseCode = "404";
			offering.setResponseCode(responseCode);
			return offering;
		}
		if (Objects.nonNull(geProductModel))
		{
			LOG.info("===================== SERVING OFFERING SAP CALL - START ===================" + java.time.LocalDateTime.now());
			final List<BHGERmaOfferingData> offeringList = bhgeRmaFormFacade.getServiceOffering(data, false, null, null);
			LOG.info("===================== SERVING OFFERING SAP CALL - END ===================" + java.time.LocalDateTime.now());

			populateOfferingResponse(sessionSalesAreaData, offeringResponses, geProductModel, offeringList);
			offering.setOfferingList(offeringResponses);
			offering.setResponseCode("200");
		}
		else
		{
			offering.setOfferingList(offeringResponses);
			offering.setResponseCode("404");
		}
		LOG.info("===================== SERVING OFFERING HYBRIS CALL - END ===================" + java.time.LocalDateTime.now());
		return offering;

	}
	/**
	 * Populates service offering response on JSON
	 * @param sessionSalesAreaData
	 * @param offeringResponses
	 * @param geProductModel
	 * @param offeringList
	 */
	private void populateOfferingResponse(final SalesAreaData sessionSalesAreaData,
			final List<ServiceOfferingResponse> offeringResponses, GEEdgeProductModel geProductModel,
			final List<BHGERmaOfferingData> offeringList) {
		for (final BHGERmaOfferingData offeringData : offeringList)
		{
			final Set<String> partNos = offeringData.getOfferingsDataTable().keySet();
			for (final String part : partNos)
			{
				final ServiceOfferingResponse offeringResponse = new ServiceOfferingResponse();
				offeringResponse.setPartNo(part);
				offeringResponse.setPartEquipmentMapping(offeringData.getWarrantyDataTable().get(part));
				offeringResponse.setMaterialData(offeringData.getMaterialDataTable().get(part));
				offeringResponse.setOfferingDataList(offeringData.getOfferingsDataTable().get(part));			
				offeringResponse.setErrorDataList(bhgeRmaFormFacade.getErrorDataList(offeringData,part));
				offeringResponse.setPartOfferingDescription(bhgeRmaFormFacade.setOfferDescriptionData(offeringData,part));
				offeringResponse.setCurrencyIso(sessionSalesAreaData.getCurrencyIso());
				offeringResponse.setCurrencySymbol(sessionSalesAreaData.getCurrencySymbol());
				if (geProductModel.getEquipmentImage() != null)
				{
					offeringResponse.setEquipmentImageUrl(geProductModel.getEquipmentImage().getURL());
				}
				offeringResponses.add(offeringResponse);
			}
		}
	}
	
	private List<OfferDescriptionData> setOfferDescriptionData(final List<OfferDescriptionData> OfferDescriptionDataTable)
	{
		final Set offeringSet = sessionService.getAttribute("offeringSet");
		final List<OfferDescriptionData> offerDescriptionData = new ArrayList<>();
		OfferDescriptionDataTable.forEach(data -> {
			if (offeringSet.contains(data.getServiceOffering()))
			{
				if (Objects.nonNull(data) && StringUtils.isEmpty(data.getCategory()))
				{
					data.setCategory("UNKNOWN");
				}
				offerDescriptionData.add(data);
			}
		});
		sessionService.removeAttribute("offeringSet");
		return offerDescriptionData;
	}
	
	/**
	 * Gets list of product accessories for part number and service offering
	 * @param accessoryData
	 * @param fields
	 * @return
	 */
	@RequestMapping(value = "/accessories", method = RequestMethod.PUT)
	@ResponseBody
	@Operation(operationId = "getAccessoriesForRMA", summary = "Gets accessories for part number and service offering")
	@ApiBaseSiteIdAndUserIdParam
	public List<ProductWsDTO> getAccessory(@Parameter(description = "Request body parameter that contains accessory data", required = true) @RequestBody
	final AccessoryData accessoryData,@Parameter(description = "Response configuration. This is the list of fields that should be returned in the response body.", schema = @Schema(allowableValues = {"BASIC", "DEFAULT", "FULL"})) @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
	{
		List<ProductWsDTO> returnList = new ArrayList<ProductWsDTO>();
		if (accessoryData.getPartNumber() != null && accessoryData.getServiceOffering() != null)
		{
			accessoryData.setPartNumber(decodeWithScheme(accessoryData.getPartNumber(), UTF_8));

			if(null != accessoryData.getAccessoryList())
			{
				accessoryData.getAccessoryList().forEach((accessory)-> accessory = StringEscapeUtils.escapeHtml4(accessory));
			}
			if(null != accessoryData.getServiceOffering())
			{
				accessoryData.getServiceOffering().forEach((so)-> so = StringEscapeUtils.escapeHtml4(so));
			}	

			List<ProductData> productList =  bhgeRmaFormFacade.getAccessories(accessoryData);
			for(ProductData product : productList)
			{
				ProductWsDTO productDTO = getDataMapper().map(product, ProductWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
				returnList.add(productDTO);
			}
		}
		return returnList;
	}
	/**
	 * Uploads file onto RMA cart
	 * @param bhgeUploadFormData
	 * @param
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "/myReturns/uploadAdditionalFile", method =
	{ RequestMethod.PUT, RequestMethod.POST })
	@ResponseBody
	@Operation(operationId = "uploadAdditionalFile", summary = "Uploads file onto RMA cart")
	@ApiBaseSiteIdAndUserIdParam
	public Integer saveOrderAttachment(@Parameter(description = "Request body parameter that contains file data", required = true) @RequestBody
	final BHGEUploadAdditionalFileForm bhgeUploadFormData,@Parameter(description = "Response configuration. This is the list of fields that should be returned in the response body.", schema = @Schema(allowableValues = {"BASIC", "DEFAULT", "FULL"})) @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) throws IOException
	{
		try
		{
			final int parsedEntryNumber = Integer.parseInt(bhgeUploadFormData.getEntryNumber().toString());
			if (bhgeUploadFormData != null && FileSanitizerUtil.isFileSanitized(bhgeUploadFormData.getFile()))
			{
				return bhgeRmaFormFacade.uploadAdditionalFile(bhgeUploadFormData.getFile(), parsedEntryNumber);
			}
		}
		catch (final Exception ex)
		{
			LOG.error("Error in uploading the attachment to the rma form" + ex);
		}
		return null;
	}
	
	/**
	 * Method used for serial number search on RMA form
	 * @param partNum
	 * @param filterVal
	 * @param srNum
	 * @param wildSearch
	 * @param searchType
	 * @param pageNumber
	 * @param pageSize
	 * @param isSerialSearch
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/rma-form/partSearch", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "partSearch", summary = "Serial number search on RMA form")
	@ApiBaseSiteIdAndUserIdParam
	public List<ProductWsDTO> search(@RequestParam(value = "partNum", defaultValue = "", required = false)
	final String partNum, @RequestParam(value = "filter", defaultValue = "RETURN")
	final String filterVal, @RequestParam(value = "srNum", defaultValue = "", required = false)
	final String srNum, @RequestParam(value = "wildSearch", defaultValue = "", required = false)
	final String wildSearch, @RequestParam(value = "searchType", defaultValue = "", required = false)
	final String searchType, @RequestParam(value = "pageNumber", defaultValue = "", required = false)
	final String pageNumber, @RequestParam(value = "pageSize", defaultValue = "", required = false)
	final String pageSize, @RequestParam(value = "isSerialSearch", defaultValue = "false", required = false)
	final boolean isSerialSearch) throws Exception
	{
		LOG.info("======================== PARTSEARCHMETHOD CONTROLLER START============================= " + java.time.LocalDateTime.now());
		List<ProductData> productDataList = new ArrayList<ProductData>();
		List<ProductWsDTO> productDTOList = new ArrayList<ProductWsDTO>();

		final String partNo = XSSFilterUtil.filter(StringEscapeUtils.escapeHtml4(partNum));
		final String srNo = XSSFilterUtil.filter(StringEscapeUtils.escapeHtml4(srNum));
		final String filter = XSSFilterUtil.filter(StringEscapeUtils.escapeHtml4(filterVal));
		final String wildSearchVal = XSSFilterUtil.filter(StringEscapeUtils.escapeHtml4(wildSearch));
		String searchTypeVal = XSSFilterUtil.filter(StringEscapeUtils.escapeHtml4(searchType));

		LOG.info("Inside /engage/partSearch controller-wildSearch- " + wildSearch + " |searchType - " + searchType);
		
		if (StringUtils.isNotBlank(partNo) && StringUtils.isBlank(srNo))
		{
			LOG.info("US563160 - Inside Partno search");
			return returnResultForPartNoSearch(pageNumber, pageSize, isSerialSearch, productDataList,
					productDTOList, partNo, searchTypeVal);

		}
		else
		{
			LOG.info("US563160 - Inside serial search ");
			return returnResultForSerialNumberSearch(pageNumber, pageSize, isSerialSearch, productDataList,
					productDTOList, srNo, searchTypeVal);
		}
	}

	/**
	 * Serial number search in RMA form
	 * @param pageNumber
	 * @param pageSize
	 * @param isSerialSearch
	 * @param productDataList
	 * @param productDTOList
	 * @param srNo
	 * @param searchTypeVal
	 * @return
	 */
	private List<ProductWsDTO> returnResultForSerialNumberSearch(final String pageNumber, final String pageSize,
			final boolean isSerialSearch, List<ProductData> productDataList, List<ProductWsDTO> productDTOList,
			final String srNo, String searchTypeVal) {
		if (StringUtils.isBlank(searchTypeVal) || searchTypeVal.isBlank() || searchTypeVal.equals(""))
		{
			searchTypeVal = "x";
		}

		final List<String> partNums = new ArrayList<>();
		LOG.info("Equip Search : SAP Lookup - " + partNums);// START log

		List<MaterialData> equipDataList = null;
		List<MaterialData> equipDataListFromCache = new ArrayList<>();

		final String key = getKey(srNo.trim(), searchTypeVal);
		final CacheKey cacheKey = new SerialNumSearchCacheKey(key, Registry.getCurrentTenant().getTenantID());
		if (isSerialSearch == true)
		{
			serialNumSearchCacheRegion.invalidate(cacheKey, false);
		}


		equipDataListFromCache = (List<MaterialData>) serialNumSearchCacheRegion.getWithLoader(cacheKey,
				serialNumberSearchCacheValueLoader);



		if (equipDataListFromCache == null)
		{
			serialNumSearchCacheRegion.invalidate(cacheKey, false);
		}

		LOG.info("pageSize-" + pageSize + " pageNumber-" + pageNumber);
		int page = 0;
		if (pageNumber != null && !"".equals(pageNumber))
		{
			page = Integer.parseInt(pageNumber);
		}
		int pageNumberRequired = 0;
		if (equipDataListFromCache != null && equipDataListFromCache.size() > 0)
		{
			pageNumberRequired = (equipDataListFromCache.size() / getUIPageSize(pageSize));
			if (page <= pageNumberRequired)
			{
				LOG.info("equipDataListFromCache size- "+  equipDataListFromCache.size());
				final PageableData pageableData = createPageableData(page, getUIPageSize(pageSize),null, ShowMode.Page);
				final SearchPageData<MaterialData> filterData = getPaginatedData(equipDataListFromCache, pageableData);
				equipDataList = filterData.getResults();
			}
			else
			{
				LOG.error("================= PAGE NUMBER IS GREATER THAN REQUIRED ==================");
				return null;

			}
		}

		if (equipDataList != null)
		{
			for (final MaterialData equipDataset : equipDataList)
			{
				if (equipDataset.getPartNumber() != null && equipDataset.getSerialNumber() != null)
				{
					partNums.add(equipDataset.getPartNumber() + "#$#" + equipDataset.getSerialNumber());
				}
			}
		}

		LOG.info("EquipSearch : ProductFetch- " + partNums);
		final int counter = 0;
		if (partNums != null && partNums.size() != 0)
		{
			productDataList = bhgeRmaFormFacade.getProductDataForPartNumber(partNums);
		}

		LOG.info("======================== PARTSEARCHMETHOD CONTROLLER END============================= " + java.time.LocalDateTime.now());
		for(ProductData productData : productDataList)
		{
			ProductWsDTO productWsDTO = getDataMapper().map(productData, ProductWsDTO.class, "FULL");
			productDTOList.add(productWsDTO);
		}
		return productDTOList;
	}

	private List<ProductWsDTO> returnResultForPartNoSearch(final String pageNumber, final String pageSize,
																 final boolean isSerialSearch, List<ProductData> productDataList, List<ProductWsDTO> productDTOList,
																 final String partNo, String searchTypeVal) {
		LOG.info("US563160-Inside returnResultForPartNoSearch");
		/*if (StringUtils.isBlank(searchTypeVal) || searchTypeVal.isBlank() || searchTypeVal.equals(""))
		{
			searchTypeVal = "x";
		}*/

		final List<String> partNums = new ArrayList<>();
		LOG.info("Equip Search : SAP Lookup - " + partNums);// START log

		List<MaterialData> equipDataList = null;
		List<MaterialData> equipDataListFromCache = new ArrayList<>();
        LOG.info("US563160 : Partnum value" +partNo);
		//final String key = getKey(partNo.trim(), searchTypeVal);
		final CacheKey cacheKey = new MaterialNumSearchCacheKey(partNo, Registry.getCurrentTenant().getTenantID());
		if (isSerialSearch == true)
		{
			partNumSearchCacheRegion.invalidate(cacheKey, false);
		}


		equipDataListFromCache = (List<MaterialData>) partNumSearchCacheRegion.getWithLoader(cacheKey,
				partNumberSearchCacheValueLoader);



		if (equipDataListFromCache == null)
		{
			LOG.info("US563160 : Partnum value is null, invalidating cache for partNumSearchCacheRegion" +partNo);
			partNumSearchCacheRegion.invalidate(cacheKey, false);
		}

		LOG.info("pageSize-" + pageSize + " pageNumber-" + pageNumber);
		int page = 0;
		if (pageNumber != null && !"".equals(pageNumber))
		{
			page = Integer.parseInt(pageNumber);
		}
		int pageNumberRequired = 0;
		if (equipDataListFromCache != null && equipDataListFromCache.size() > 0)
		{
			pageNumberRequired = (equipDataListFromCache.size() / getUIPageSize(pageSize));
			if (page <= pageNumberRequired)
			{
				LOG.info("equipDataListFromCache size- "+  equipDataListFromCache.size());
				final PageableData pageableData = createPageableData(page, getUIPageSize(pageSize),null, ShowMode.Page);
				final SearchPageData<MaterialData> filterData = getPaginatedDataForPart(equipDataListFromCache, pageableData);
				equipDataList = filterData.getResults();
			}
			else
			{
				LOG.error("================= PAGE NUMBER IS GREATER THAN REQUIRED ==================");
				return null;

			}
		}

		if (equipDataList != null)
		{
			for (final MaterialData equipDataset : equipDataList)
			{
				if (equipDataset.getPartNumber() != null && equipDataset.getSerialNumber() != null)
				{
					partNums.add(equipDataset.getPartNumber() + "#$#" + equipDataset.getSerialNumber());
				}
			}
		}

		LOG.info("EquipSearch : ProductFetch- " + partNums);
		final int counter = 0;
		if (partNums != null && partNums.size() != 0)
		{
			productDataList = bhgeRmaFormFacade.getProductDataForPartNumber(partNums);
		}

		LOG.info("======================== PARTSEARCHMETHOD CONTROLLER END============================= " + java.time.LocalDateTime.now());
		for(ProductData productData : productDataList)
		{
			LOG.info("DSRMAController: ProductName : " + productData.getName());
			//LOG.info("DSRMAController: ProductImageUrl : " + productData.getMediaurl());
			ProductWsDTO productWsDTO = getDataMapper().map(productData, ProductWsDTO.class, "FULL");
			productDTOList.add(productWsDTO);
		}
		return productDTOList;
	}



	/**
	 * Part number search in RMA form
	 * @param productDataList
	 * @param productDTOList
	 * @param partNo
	 * @return
	 */
	private List<ProductWsDTO> returnResultForPartNumberSearch(List<ProductData> productDataList,
			List<ProductWsDTO> productDTOList, final String partNo) {
		final AutocompleteResultData resultData = new AutocompleteResultData();
		String str = partNo;

		final PageableData pageableData = createPageableData(0, 5, null, ShowMode.Page);
		final SearchStateData searchState = new SearchStateData();
		final SearchQueryData searchQueryData = new SearchQueryData();
		if (str != null)
		{
			str = getReplacedString(str);
		}
		JaloSession.getCurrentSession().setAttribute("rma_search", true);
		searchQueryData.setValue(str);
		searchState.setQuery(searchQueryData);
		final ProductSearchPageData<SearchStateData, ProductData> pageData = productSearchFacade.textSearch(searchState,
				pageableData);
		resultData.setProducts(subList(pageData.getResults(), 5));
		JaloSession.getCurrentSession().removeAttribute("rma_search");
		for (final ProductData prod : resultData.getProducts())
		{
			final Collection<BrandNameData> brandNames = new LinkedList<>();
			prod.getBrandName().forEach(bradNameData -> {
				final Collection<CategoryModel> categories = bhgeCategoryDao.findCategoriesByName(bradNameData.getName());
				if (categories.iterator().hasNext())
				{
					final CategoryModel categoryModel = categories.iterator().next();
					final String description = categoryModel.getDescription();
					final String code = categoryModel.getCode();
					final String categoryImageURL = (categoryModel.getPicture() != null
							? (categoryModel.getPicture().getURL() != null ? categoryModel.getPicture().getURL() : "")
							: "");
					bradNameData.setCode(code);
					bradNameData.setImageUrl(categoryImageURL);
					bradNameData.setDescription(description);
					brandNames.add(bradNameData);
				}
			});
			prod.setBrandName(brandNames);
		}

		productDataList.addAll(resultData.getProducts());

		for (final ProductData p : productDataList)
		{
			LOG.info("ProductName : " + p.getName());
			LOG.info("ProductImageUrl : " + p.getMediaurl());
			LOG.info("ProductPartNo : " + p.getCode());

		}
		for(ProductData productData : productDataList)
		{
			ProductWsDTO productWsDTO = getDataMapper().map(productData, ProductWsDTO.class, "FULL");
			productDTOList.add(productWsDTO);
		}
		return productDTOList;
	}
	
	/**
	 * Get paginated data for warranty data list
	 * @param equipDataList
	 * @param pageableData
	 * @return
	 */
	private SearchPageData<MaterialData> getPaginatedData(final List<MaterialData> equipDataList, final PageableData pageableData)
	{
		LOG.info("********************************** PAGINATION *****************************************");
		final SearchPageData<MaterialData> result = new SearchPageData<MaterialData>();

		final PaginationData paginationData = new PaginationData();
		paginationData.setPageSize(pageableData.getPageSize());
		paginationData.setTotalNumberOfResults(equipDataList.size());

		paginationData.setNumberOfPages((int) Math
				.ceil(Double.valueOf(paginationData.getTotalNumberOfResults()) / Double.valueOf(paginationData.getPageSize())));

		paginationData.setCurrentPage(Math.max(0, Math.min(paginationData.getNumberOfPages(), pageableData.getCurrentPage())));
		result.setPagination(paginationData);

		int startIndex;
		int endIndex;

		if (pageableData.getCurrentPage() == 0)
		{
			startIndex = 0;
			endIndex = pageableData.getPageSize();
		}
		else
		{
			startIndex = pageableData.getCurrentPage() * pageableData.getPageSize();
			endIndex = (pageableData.getCurrentPage() + 1) * pageableData.getPageSize();
		}


		if (equipDataList.size() <= pageableData.getPageSize())
		{
			result.setResults(equipDataList);
		}
		else if (endIndex <= equipDataList.size())
		{
			result.setResults(equipDataList.subList(startIndex, endIndex));
		}
		else
		{
			result.setResults(equipDataList.subList(startIndex, equipDataList.size()));
		}

		LOG.info("********************************** PAGINATION ENDS*****************************************" + result.toString());
		return result;
	}
	private SearchPageData<MaterialData> getPaginatedDataForPart(final List<MaterialData> equipDataList, final PageableData pageableData)
	{
		LOG.info("********************************** PAGINATION *****************************************");
		final SearchPageData<MaterialData> result = new SearchPageData<MaterialData>();

		final PaginationData paginationData = new PaginationData();
		paginationData.setPageSize(pageableData.getPageSize());
		paginationData.setTotalNumberOfResults(equipDataList.size());

		paginationData.setNumberOfPages((int) Math
				.ceil(Double.valueOf(paginationData.getTotalNumberOfResults()) / Double.valueOf(paginationData.getPageSize())));

		paginationData.setCurrentPage(Math.max(0, Math.min(paginationData.getNumberOfPages(), pageableData.getCurrentPage())));
		result.setPagination(paginationData);

		int startIndex;
		int endIndex;

		if (pageableData.getCurrentPage() == 0)
		{
			startIndex = 0;
			endIndex = pageableData.getPageSize();
		}
		else
		{
			startIndex = pageableData.getCurrentPage() * pageableData.getPageSize();
			endIndex = (pageableData.getCurrentPage() + 1) * pageableData.getPageSize();
		}


		if (equipDataList.size() <= pageableData.getPageSize())
		{
			result.setResults(equipDataList);
		}
		else if (endIndex <= equipDataList.size())
		{
			result.setResults(equipDataList.subList(startIndex, endIndex));
		}
		else
		{
			result.setResults(equipDataList.subList(startIndex, equipDataList.size()));
		}

		LOG.info("********************************** PAGINATION ENDS*****************************************" + result.toString());
		return result;
	}
	
	/**
	 * Gets key based on serial number and search type
	 * @param srNum
	 * @param searchType
	 * @return
	 */
	private String getKey(final String srNum, final String searchType)
	{
		if (StringUtils.isNotBlank(srNum))
		{
			return srNum + "-" + searchType;
		}
		return null;
	}
	/**
	 * Method to replicate auto suggestion behaviour for products in RMA form
	 *
	 * @param filter
	 * @param term
	 * @return
	 * @throws CMSItemNotFoundException
	 */
	@ResponseBody
	@RequestMapping(value = "/autocomplete", method = RequestMethod.GET)
	@Operation(operationId = "autocomplete", summary = "autocomplete search on RMA form")
	@ApiBaseSiteIdAndUserIdParam
	public List<ProductWsDTO> getAutocompleteSuggestions(@RequestParam(value = "filter", defaultValue = "RETURN")
																 String filter, @RequestParam("term") final String term,
														 @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields

	) throws CMSItemNotFoundException
	{
		LOG.info("getAutocompleteSuggestions Round 1 : - " + term + "|");

		String str = StringEscapeUtils.escapeHtml4(term);
		filter = StringEscapeUtils.escapeHtml4(filter);
		LOG.info("getAutocompleteSuggestions Round 2 : - " + str + "|");
		if (str != null) {
			str = getReplacedString(str);
		}
		LOG.info("getAutocompleteSuggestions Round 3 : - " + str + "|");
		final AutocompleteResultData resultData = new AutocompleteResultData();
		List<ProductData> productDataList = new ArrayList<ProductData>();
		List<ProductWsDTO> productDTOList = new ArrayList<ProductWsDTO>();
		return returnResultForAutocompleteSearch(productDataList, productDTOList, str, filter);
	}

	/**
	 * Part number search in RMA form
	 * @param productDataList
	 * @param productDTOList
	 * @param term
	 * @return
	 */
	private List<ProductWsDTO> returnResultForAutocompleteSearch(List<ProductData> productDataList,
																 List<ProductWsDTO> productDTOList, final String term, final String filter) {


		final AutocompleteResultData resultData = new AutocompleteResultData();
		String str = term;

		final PageableData pageableData = createPageableData(0, 5, null, ShowMode.Page);
		final SearchStateData searchState = new SearchStateData();
		final SearchQueryData searchQueryData = new SearchQueryData();
		if (str != null)
		{
			str = getReplacedString(str);
		}

		searchQueryData.setValue(str);
		searchState.setQuery(searchQueryData);
		final ProductSearchPageData<SearchStateData, ProductData> pageData = productSearchFacade.textSearch(searchState,
				pageableData, filter);
		resultData.setProducts(subList(pageData.getResults(), 5));

		for (final ProductData prod : resultData.getProducts())
		{
			final Collection<BrandNameData> brandNames = new LinkedList<>();
			prod.getBrandName().forEach(bradNameData -> {
				final Collection<CategoryModel> categories = bhgeCategoryDao.findCategoriesByName(bradNameData.getName());
				if (categories.iterator().hasNext())
				{
					final CategoryModel categoryModel = categories.iterator().next();
					final String description = categoryModel.getDescription();
					final String code = categoryModel.getCode();
					final String categoryImageURL = (categoryModel.getPicture() != null
							? (categoryModel.getPicture().getURL() != null ? categoryModel.getPicture().getURL() : "")
							: "");
					bradNameData.setCode(code);
					bradNameData.setImageUrl(categoryImageURL);
					bradNameData.setDescription(description);
					brandNames.add(bradNameData);
				}
			});
			prod.setBrandName(brandNames);
		}

		productDataList.addAll(resultData.getProducts());

		for (final ProductData p : productDataList)
		{
			LOG.info("ProductName : " + p.getName());
			LOG.info("ProductImageUrl : " + p.getMediaurl());
			LOG.info("ProductPartNo : " + p.getCode());

		}
		for(ProductData productData : productDataList)
		{
			ProductWsDTO productWsDTO = getDataMapper().map(productData, ProductWsDTO.class, "FULL");
			productDTOList.add(productWsDTO);
		}
		return productDTOList;
	}
}
