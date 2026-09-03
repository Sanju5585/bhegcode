package com.bh.occ.controllers;

import com.bh.occ.util.FileSanitizerUtil;
import com.bhge.facades.EndUserTypeData;
import com.bhge.facades.EndUserTypeDataList;
import com.bhge.facades.order.BHGEQuoteFacade;
import com.bhge.facades.order.data.BHGEOrderHistoryData;
import com.bhge.facades.quote.data.QuoteTrackingRequestData;
import com.bhge.facades.quote.data.QuoteTrackingResponseData;
import com.ds.dsocc.common.dto.UpdateCheckoutDetailsWsDTO;
import com.ds.dsocc.quote.data.*;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.quote.data.QuoteData;
import de.hybris.platform.commerceservices.order.CommerceQuoteService;
import de.hybris.platform.commerceservices.order.strategies.QuoteUserIdentificationStrategy;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commercewebservicescommons.dto.order.CartWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.search.pagedata.PaginationWsDTO;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.order.QuoteService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.services.BaseStoreService;
import de.hybris.platform.webservicescommons.cache.CacheControl;
import de.hybris.platform.webservicescommons.cache.CacheControlDirective;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdUserIdAndCartIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.fop.apps.FOPException;
import org.apache.log4j.Logger;
import org.apache.xmlbeans.impl.xb.xsdschema.Public;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.Resource;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactoryConfigurationError;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.xml.bind.JAXBException;


/**
 * @author 212722447
 *
 */
@RestController
@ApiVersion("v2")
@CacheControl(directive = CacheControlDirective.NO_CACHE)
@Tag(name = "DS Quote Controller")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/quote")
public class DSQuoteController extends DSBaseController {
	private QuoteUserIdentificationStrategy quoteUserIdentificationStrategy;

	private static final Logger LOG = Logger.getLogger(DSQuoteController.class);

	@Autowired
	private BHGEQuoteFacade bhgeQuoteFacade;
	@Autowired
	private QuoteService quoteService;

	public QuoteUserIdentificationStrategy getQuoteUserIdentificationStrategy() {
		return quoteUserIdentificationStrategy;
	}

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "baseStoreService")
	private BaseStoreService baseStoreService;

	@Resource(name = "commerceQuoteService")
	private CommerceQuoteService commerceQuoteService;

	public void setQuoteUserIdentificationStrategy(QuoteUserIdentificationStrategy quoteUserIdentificationStrategy) {
		this.quoteUserIdentificationStrategy = quoteUserIdentificationStrategy;
	}
	@RequestMapping(value = "/{rfqCartId}/downloadQuotePDF", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "downloadQuotePDF", summary = "Quote confirmation pdf download.", description = "Quote confirmation pdf download.")
	@ApiBaseSiteIdUserIdAndCartIdParam
	public void downloadQuotePDF(@Parameter(description = "Base site identifier", required = true) @PathVariable final String baseSiteId,
								 @Parameter(description = "rfq cart Id", required = true) @PathVariable final String rfqCartId, final HttpServletRequest request, final HttpServletResponse response) throws TransformerException, IOException, FOPException, JAXBException, TransformerFactoryConfigurationError, URISyntaxException {
		bhgeQuoteFacade.downloadQuotePDF(rfqCartId, request, response);
	}

	@PostMapping(value = "/{cartId}/create")
	@Operation(operationId = "create Quote", summary = "Create a Quote.", description = "Create a Quote.")
	@ApiBaseSiteIdUserIdAndCartIdParam
	public QuoteWsDTO createQuote(@Parameter(description = "Cart Id", required = true) @PathVariable final String cartId,
								  @RequestBody QuoteCreationRequestWSDTO quoteCreationRequest,
								  @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
		QuoteCreationRequestData quoteCreationRequestData = new QuoteCreationRequestData();
		quoteCreationRequestData = getDataMapper().map(quoteCreationRequest, QuoteCreationRequestData.class);
		QuoteData quoteData = bhgeQuoteFacade.createQuote(StringEscapeUtils.escapeHtml4(cartId), quoteCreationRequestData);
		return getDataMapper().map(quoteData, QuoteWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
	}

	@RequestMapping(value = "/{quoteId}/edit", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "Edit Quote", summary = "Edit Quote.", description = "Edit Quote.")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(HttpStatus.OK)
	public QuoteWsDTO editQuote(
			@ApiFieldsParam @RequestParam(value = "quoteCode", required = true) final String quoteCode,
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
		QuoteData quoteData = bhgeQuoteFacade.editQuote(StringEscapeUtils.escapeHtml4(quoteCode));
		return getDataMapper().map(quoteData, QuoteWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
	}

	@RequestMapping(value = "/submit", method = RequestMethod.POST)
	@ResponseBody
	@Operation(operationId = "Sbmit Quote", summary = "Submit Quote.", description = "Submit Quote.")
	@ApiBaseSiteIdAndUserIdParam
	public Boolean submitQuote(@ApiFieldsParam @RequestParam(value = "quoteId", required = true) final String quoteId,
			@Parameter(description = "Request body parameter that contains Quote details", required = true) @RequestBody final QuoteWsDTO quoteWsDTO,
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
		quoteWsDTO.setNameCheckout(StringEscapeUtils.escapeHtml4(quoteWsDTO.getNameCheckout()));
		quoteWsDTO.setUserName(StringEscapeUtils.escapeHtml4(quoteWsDTO.getUserName()));
		quoteWsDTO.setCompanyCheckout(StringEscapeUtils.escapeHtml4(quoteWsDTO.getCompanyCheckout()));
		quoteWsDTO.setEmailAddress(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEmailAddress()));
		quoteWsDTO.setPhoneCheckout(StringEscapeUtils.escapeHtml4(quoteWsDTO.getPhoneCheckout()));
		quoteWsDTO.setAddressCheckout(StringEscapeUtils.escapeHtml4(quoteWsDTO.getAddressCheckout()));
		quoteWsDTO.setAddress1Checkout(StringEscapeUtils.escapeHtml4(quoteWsDTO.getAddress1Checkout()));
		quoteWsDTO.setCountry(StringEscapeUtils.escapeHtml4(quoteWsDTO.getCountry()));
		quoteWsDTO.setRegion(StringEscapeUtils.escapeHtml4(quoteWsDTO.getRegion()));
		quoteWsDTO.setCityCheckout(StringEscapeUtils.escapeHtml4(quoteWsDTO.getCityCheckout()));
		quoteWsDTO.setPostalCheckout(StringEscapeUtils.escapeHtml4(quoteWsDTO.getPostalCheckout()));
		quoteWsDTO.setEmailtype(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEmailtype()));
		quoteWsDTO.setEndUserCategory(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndUserCategory()));
		quoteWsDTO.setEndUserCompanyName(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndUserCompanyName()));
		quoteWsDTO.setEndaddressLine(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndaddressLine()));
		quoteWsDTO.setEndaddress1Line(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndaddress1Line()));
		quoteWsDTO.setEndTown(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndTown()));
		quoteWsDTO.setEndUserRegionIso(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndUserRegionIso()));
		quoteWsDTO.setEndUserRegionName(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndUserRegionName()));
		quoteWsDTO.setEndZipcode(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndZipcode()));
		quoteWsDTO.setEndUserCountryIso(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndUserCountryIso()));
		quoteWsDTO.setErrorCode(StringEscapeUtils.escapeHtml4(quoteWsDTO.getErrorCode()));
		quoteWsDTO.setDescription(StringEscapeUtils.escapeHtml4(quoteWsDTO.getDescription()));
		quoteWsDTO.setCartCode(StringEscapeUtils.escapeHtml4(quoteWsDTO.getCartCode()));
		quoteWsDTO.setCode(StringEscapeUtils.escapeHtml4(quoteWsDTO.getCode()));

		return bhgeQuoteFacade.submitQuote(StringEscapeUtils.escapeHtml4(quoteId), quoteWsDTO);
	}

	@RequestMapping(value = "/cancel", method = RequestMethod.POST)
	@ResponseBody
	@Operation(operationId = "Cancel Quote", summary = "Cancel Quote.", description = "Cancel Quote.")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(HttpStatus.OK)
	public void cancelQuote(@ApiFieldsParam @RequestParam(value = "quoteId", required = true) final String quoteCode,
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
		bhgeQuoteFacade.cancelQuote(quoteCode);
	}

	@RequestMapping(value = "/endUserType", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "Fetch EndUserType Data", summary = "Fetch EndUserType Data", description = "Fetch EndUserType Data")
	@ApiBaseSiteIdAndUserIdParam
	public EndUserTypeListWsDTO getEndUserTypeData(
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
		final EndUserTypeDataList endUserTypeList = new EndUserTypeDataList();
		List<EndUserTypeData> endUserTypes = bhgeQuoteFacade.getEndUserTypeData();
		endUserTypeList.setEndUserTypeList(endUserTypes);
		return getDataMapper().map(endUserTypeList, EndUserTypeListWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
	}

	@ResponseBody
	@ResponseStatus(code = HttpStatus.CREATED)
	@PostMapping(value = "/{quoteId}/uploadQuoteAttachment", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	@Operation(operationId = "uploadQuoteFile", summary = "Upload Quote Attachment", description = "Upload Quote Attachment")
	@ApiBaseSiteIdAndUserIdParam
	public void uploadQuoteAttachment(@Parameter(description = "Quote Id", required = true) @PathVariable final String quoteId,
			@Parameter @RequestPart(value = "file") MultipartFile file) throws IOException {
		LOG.info("================== Upload Quote Attachment ==================");
		try {
			if (file != null && FileSanitizerUtil.isFileSanitized(file)) {
				final QuoteModel quoteModel = quoteService.getCurrentQuoteForCode(quoteId);
				bhgeQuoteFacade.uploadQuoteAttachmentWs(quoteModel, file);
				LOG.info("Uploaded Order attachment for checkout successfully");

			}
		} catch (final Exception ex) {
			LOG.error("Error in uploading the attachment to the order" + ex);
			new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@ResponseBody
    @Operation(operationId = "removeQuoteAttachment", summary = "Remove the quote attachment in checkout page.", description = "Remove the quote attachment in checkout page.")
    @ApiBaseSiteIdAndUserIdParam
    @RequestMapping(value = "/{quoteId}/removeQuoteAttach", method = { RequestMethod.POST })
    public ResponseEntity<String> removeQuoteAttachment(@Parameter(description = "quote Id", required = true) @PathVariable final String quoteId)
	{
		try
		{
			LOG.debug("Removing quote attachments....");
			final QuoteModel quoteModel = quoteService.getCurrentQuoteForCode(quoteId);
			bhgeQuoteFacade.removeQuoteAttachmentsWs(quoteModel);
			LOG.debug("Quote attachments removed successfully.....");
			return new ResponseEntity<>("Success", HttpStatus.OK);
		}
		catch (final Exception ex)
		{
			LOG.error("Error in removing the attachment from the quote" + ex);
		}
		return null;
	}

	@PostMapping(value = "/{quoteId}/acceptQuote")
	@ResponseBody
	@Operation(operationId = "AcceptQuote", summary = "Accept Quote.", description = "Accept Quote.")
	@ApiBaseSiteIdAndUserIdParam
	public CartWsDTO acceptQuote(@Parameter(description = "Base site identifier", required = true) @PathVariable final String baseSiteId,
								 @Parameter(description = "rfq cart Id", required = true) @PathVariable final String quoteId) {
		CartData cartData = bhgeQuoteFacade.acceptQuote(quoteId);
		return getDataMapper().map(cartData, CartWsDTO.class, "FULL");
	}

	public UserService getUserService() {
		return userService;
	}

	protected BaseStoreService getBaseStoreService() {
		return baseStoreService;
	}

	protected CommerceQuoteService getCommerceQuoteService() {
		return commerceQuoteService;
	}

	@PostMapping(value = "/{productLine}/my-quotes", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
	@Operation(operationId = "getQuoteListing", summary = "Get Quote Listing.", description = "Get Quote Listing.")
	@ApiBaseSiteIdAndUserIdParam
	public QuoteTrackingResponseListWSDTO getQuotesListing(
			@Parameter(description = "Product Line", required = true) @PathVariable final String productLine,
			@RequestBody final QuoteTrackingRequestWSDTO quoteWsDTO) {
		QuoteTrackingResponseListWSDTO quoteResponse = new QuoteTrackingResponseListWSDTO();
		try	{
			LOG.info("Getting Quote Listing....");
			final PageableData pageableData = createPageableData(quoteWsDTO.getPageNum(), quoteWsDTO.getPageSize(), quoteWsDTO.getSortBy(), null);
			QuoteTrackingRequestData trackingReqData = new QuoteTrackingRequestData();
			trackingReqData.setFromDate(quoteWsDTO.getFromDate());
			trackingReqData.setToDate(quoteWsDTO.getToDate());
			if (StringUtils.isNotBlank(quoteWsDTO.getQuoteNumber())) {
				trackingReqData.setQuoteNumber(quoteWsDTO.getQuoteNumber());
			}
			if (StringUtils.isNotBlank(quoteWsDTO.getQuoteStatus())) {
				trackingReqData.setQuoteStatus(quoteWsDTO.getQuoteStatus());
			}
			SearchPageData<QuoteTrackingResponseData> responseDataList = bhgeQuoteFacade.getQuoteTrackingData(trackingReqData, pageableData);
			if (CollectionUtils.isNotEmpty(responseDataList.getResults())) {
				if (null == quoteResponse.getQuoteResponse()) {
					quoteResponse.setQuoteResponse(new ArrayList<>());
				}
				responseDataList.getResults().stream().forEach(responseData -> {
					QuoteTrackingResponseWSDTO wsDTO = getDataMapper().map(responseData, QuoteTrackingResponseWSDTO.class);
					quoteResponse.getQuoteResponse().add(wsDTO);
				});
				PaginationWsDTO pagination = new PaginationWsDTO();
				pagination.setCurrentPage(responseDataList.getPagination().getCurrentPage());
				pagination.setTotalPages(responseDataList.getPagination().getNumberOfPages());
				pagination.setTotalResults(responseDataList.getPagination().getTotalNumberOfResults());
				pagination.setPageSize(responseDataList.getPagination().getPageSize());
				quoteResponse.setPagination(pagination);
			}
		} catch (Exception e) {
			LOG.error("Error in getting Quote Listing" + e.getMessage());
		}
		return quoteResponse;
	}

}