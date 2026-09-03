/**
 *
 */
package com.bh.occ.controllers;

import com.bh.occ.constants.DsoccConstants;
import com.bh.occ.forms.BHGEUpdateCartEntryForm;
import com.bh.occ.forms.BHGEUpdateCartForm;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.product.BHGEProductFacade;
import java.io.IOException;

import com.google.common.base.Stopwatch;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.user.UserFacade;
import de.hybris.platform.commercewebservices.core.order.data.CartDataList;
import de.hybris.platform.commercewebservices.core.requestfrom.RequestFromValueSetter;
import de.hybris.platform.commercewebservices.core.skipfield.SkipCartFieldValueSetter;
import de.hybris.platform.commercewebservicescommons.dto.order.CartListWsDTO;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.servicelayer.session.SessionService;
import org.apache.commons.lang3.StringEscapeUtils;

import java.io.OutputStream;
import java.time.LocalDateTime;
import java.text.ParseException;
import java.time.LocalDate;
import java.net.URISyntaxException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.TimeUnit;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.xml.bind.JAXBException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactoryConfigurationError;

import com.bhge.facades.rma.BHGERmaFormFacade;
import com.bhge.facades.savecart.BHGESaveCartFacade;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.CartModificationData;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.voucher.exceptions.VoucherOperationException;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.commerceservices.request.mapping.annotation.RequestMappingOverride;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commercewebservicescommons.annotation.SiteChannelRestriction;
import de.hybris.platform.commercewebservicescommons.dto.order.CartModificationWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.order.CartWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.order.OrderEntryWsDTO;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.i18n.I18NService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.cache.CacheControl;
import de.hybris.platform.webservicescommons.cache.CacheControlDirective;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdUserIdAndCartIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringUtils;
import org.apache.fop.apps.FOPException;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Row;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.*;

import static de.hybris.platform.commercefacades.order.constants.OrderOccControllerRequestFromConstants.CARTS_CONTROLLER;

/**
 * Cart controller added on 11/5 as part of spartacus revamp
 *
 * @author 212695810
 *
 */
@Controller
@ApiVersion("v2")
@CacheControl(directive = CacheControlDirective.NO_CACHE)
@Tag(name = "DS Shopping Carts")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/carts")
public class DSCartsController extends DSBaseController {

    private static final Logger LOG = LoggerFactory.getLogger(DSCartsController.class);
    protected static final String API_COMPATIBILITY_B2B_CHANNELS = "api.compatibility.b2b.channels";
    private static final long DEFAULT_PRODUCT_QUANTITY = 1;
    private static final String ENTRY = "entry";
    private static final String PAGE_SIZE = "5";

    @Resource(name = "orderEntryCreateValidator")
    private Validator orderEntryCreateValidator;

    @Resource(name = "productVariantFacade")
    private ProductFacade productFacade;

    @Resource(name = "userService")
    private UserService userService;

    @Resource(name = "userFacade")
    private UserFacade userFacade;

    @Resource(name = "bhgeCartFacade")
    private BHGECartFacade bhgeCartFacade;

    @Resource(name = "bhgeSaveCartFacadeImpl")
    private BHGESaveCartFacade bhgeSaveCartFacadeImpl;

    @Resource(name = "i18nService")
    private I18NService i18nService;

    @Resource(name = "messageSource")
    private MessageSource messageSource;

    @Resource(name = "bhgeRmaFormFacade")
    private BHGERmaFormFacade bhgeRmaFormFacade;

    @Resource(name = "bhgeProductFacade")
    private BHGEProductFacade bhgeProductFacade;

    @Resource(name = "sessionService")
    private SessionService sessionService;

    @Resource(name = "skipCartFieldValueSetter")
    private SkipCartFieldValueSetter skipCartFieldValueSetter;

    @Resource(name = "requestFromValueSetter")
    private RequestFromValueSetter requestFromValueSetter;

    public I18NService getI18nService() {
        return i18nService;
    }

    public MessageSource getMessageSource() {
        return messageSource;
    }

    @RequestMappingOverride
    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "getCarts", summary = "Get all customer carts.", description = "Lists all customer carts.")
    @ApiBaseSiteIdAndUserIdParam
    public CartListWsDTO getCarts(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        if (userFacade.isAnonymousUser()) {
            throw new AccessDeniedException("Access is denied");
        }
        skipCartFieldValueSetter.setValue(fields);
        requestFromValueSetter.setRequestFrom(CARTS_CONTROLLER);
        final CartDataList cartDataList = new CartDataList();
        List<CartData> sessionCart = new ArrayList<>();
        LOG.info("sessionCart during cart api call started time : " + LocalDateTime.now());
        final Stopwatch stopwatch = Stopwatch.createUnstarted();
        stopwatch.start();
        sessionCart.add(bhgeCartFacade.getSessionCart());
        stopwatch.stop();
        Long timeElapsed = stopwatch.elapsed(TimeUnit.MILLISECONDS);
        LOG.info("sessionCart during cart api call time taken : " + timeElapsed.toString() + " time : " + LocalDateTime.now());
        cartDataList.setCarts(sessionCart);
        if (Objects.nonNull(sessionCart.get(0)) && StringUtils.isEmpty(sessionCart.get(0).getCode())) {
            LOG.info("sessionCart during cart api call code is empty");
        }
        return getDataMapper().map(cartDataList, CartListWsDTO.class, fields);
    }

    /**
     * Method to render cart page
     *
     * @param cartId
     * @param fields
     * @return
     * @throws CommerceCartModificationException
     */
    @RequestMapping(value = "/{cartId}", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "getCart", summary = "Get a cart with a given identifier.", description = "Returns the cart with a given identifier.")
    @ApiBaseSiteIdUserIdAndCartIdParam
    @RequestMappingOverride
    public CartWsDTO getCart(@Parameter(description = "cart Id", required = true) @PathVariable final String cartId,
            @ApiFieldsParam @RequestParam(value = "guestSalesArea", required = false) final String guestSalesArea,
            @ApiFieldsParam @RequestParam(value = "productLine", required = false) final String productLine,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) throws CommerceCartModificationException {
        String lCartId = cartId;
        LOG.info("===================== CARTPAGE - START ===================" + java.time.LocalDateTime.now());
        final long startTime = System.currentTimeMillis();

        LOG.info("===================== CARTPAGECARTID is============" + cartId);
        final StringBuffer deletedProductCodes = new StringBuffer("");
        if (!bhgeCartFacade.validateCart(StringEscapeUtils.escapeHtml4(cartId), StringEscapeUtils.escapeHtml4(guestSalesArea), deletedProductCodes)) {
            LOG.info("Session cart has been removed");
            //TODO Populate isValid on cartData
            bhgeCartFacade.hasSessionCart();
            lCartId = bhgeCartFacade.getSessionCartID();
        }

        final long endTime = System.currentTimeMillis();
        LOG.info("============ Totaltime for CartLoad ============ " + (endTime - startTime));
        LOG.info("===================== CARTPAGE - END ===================" + java.time.LocalDateTime.now());
        // CartMatchingFilter sets current cart based on cartId, so we can return cart from the session
        /* return getDataMapper().map(cartData, CartWsDTO.class, fields); */
        sessionService.setAttribute("productLine", productLine);
        CartData cartData = bhgeCartFacade.getCartDataForCartID(StringEscapeUtils.escapeHtml4(lCartId), StringEscapeUtils.escapeHtml4(guestSalesArea), productLine);
        cartData.setDeletedProductCodes(deletedProductCodes.toString());
        return getDataMapper().map(cartData, CartWsDTO.class, StringEscapeUtils.escapeHtml4(fields));

    }

    @RequestMapping(value = "/{cartId}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    @Operation(operationId = "saveCartType", summary = "save Cart Type.", description = "save Cart Type.")
    @ApiBaseSiteIdUserIdAndCartIdParam
    public void saveCartType(@Parameter(description = "cart Id", required = true) @PathVariable final String cartId,
            @ApiFieldsParam @RequestParam(value = "cartType", required = false) final String cartType,
            @ApiFieldsParam @RequestParam(value = "isQuote", required = false) final boolean isQuote,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        bhgeCartFacade.saveCartType(cartId, cartType, isQuote);
    }

    @RequestMapping(value = "/{cartId}/dsentries", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE,
        MediaType.APPLICATION_XML_VALUE})
    @ResponseBody
    @SiteChannelRestriction(allowedSiteChannelsProperty = API_COMPATIBILITY_B2B_CHANNELS)
    @Operation(operationId = "createCartEntry", summary = "Adds a product to the cart.", description = "Adds a product to the cart.")
    @ApiBaseSiteIdUserIdAndCartIdParam
    public CartModificationWsDTO createCartEntry(
            @Parameter(description = "cart Id", required = true) @PathVariable final String cartId,
            @Parameter(description = "Base site identifier", required = true) @PathVariable final String baseSiteId,
            @Parameter(description = "Request body parameter that contains details such as the product code (product.code), the quantity of product (quantity), and the pickup store name (deliveryPointOfService.name).\n\nThe DTO is in XML or .json format.", required = true) @RequestBody final OrderEntryWsDTO entry,
            @ApiFieldsParam @RequestParam(value = "guestSalesArea", required = false) final String guestSalesArea,
            @Parameter(description = "Response configuration. This is the list of fields that should be returned in the response body.", schema = @Schema(allowableValues = {"BASIC", "DEFAULT", "FULL"})) @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
            throws CommerceCartModificationException {
        LOG.info("################## Starting the API for AddingtoCart  ############# ");
        if (entry.getQuantity() == null) {
            entry.setQuantity(Long.valueOf(DEFAULT_PRODUCT_QUANTITY));
        }
        validate(entry, ENTRY, orderEntryCreateValidator);
        /*
		 * return addCartEntry(baseSiteId, entry.getProduct().getCode(),
		 * entry.getQuantity().longValue(),fields, guestSalesArea);
         */

        return addCartEntry(baseSiteId, StringEscapeUtils.escapeHtml4(entry.getProduct().getCode()),
                entry.getQuantity().longValue(), StringEscapeUtils.escapeHtml4(fields),
                StringEscapeUtils.escapeHtml4(guestSalesArea));

    }

    protected CartModificationWsDTO addCartEntry(final String baseSiteId, final String code, final long qty, String fields, String guestSalesArea) throws CommerceCartModificationException {
        LOG.info("################## Insdie the API for AddingtoCart addCartEntryMethod ############# ");
        final List<ProductOption> extraOptions = Arrays.asList(ProductOption.VARIANT_MATRIX_BASE, ProductOption.VARIANT_MATRIX_URL,
                ProductOption.VARIANT_MATRIX_MEDIA, ProductOption.CLASSIFICATION);
        ProductData productData = new ProductData();
        productData = bhgeProductFacade.getProductForCodeAndOptionsForGuestUser(code, extraOptions, guestSalesArea);
        final UserModel user = userService.getCurrentUser();
        if (userService.isAnonymousUser(user)) {
            bhgeCartFacade.setCartTypeforAnonymousUser(productData);
        }
        CartModificationData cartModificationData;
        cartModificationData = bhgeCartFacade.addToCart(code, qty);
        LOG.info("################## AfterAddingtoCart cartModificationData " + cartModificationData);
        if (bhgeCartFacade.getSessionCart().getQuoteData() == null) {
            if (!userService.isAnonymousUser(user)) {
                bhgeCartFacade.setupBuyCart();
            }
        }
        if (userService.isAnonymousUser(user)) {
            bhgeCartFacade.setupGuestCart(productData);
        }
        final long startTime = System.currentTimeMillis();
        final long endTime = System.currentTimeMillis();

        LOG.info("*******product in cart code: " + cartModificationData.getEntry().getProduct().getCode() + " " + cartModificationData.getEntry().getProduct().getDescription());
        LOG.info("################## Total time for AddingtoCart  ######## " + (endTime - startTime));
        return getDataMapper().map(cartModificationData, CartModificationWsDTO.class, fields);
    }

    /**
     * Method to update cart entry
     *
     * @param entryNumber
     * @param fields
     * @param cartId
     * @return
     * @throws CommerceCartModificationException
     */
    @RequestMapping(value = "/{cartId}/entries/{entryNumber}", method = RequestMethod.PUT, consumes = {
        MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @ResponseBody
    @Operation(operationId = "updateCartEntry", summary = "Set quantity and store details of a cart entry.", description = "Updates the quantity of a single cart entry and the details of the store where the cart entry will be picked up. "
            + "Attributes not provided in request will be defined again (set to null or default)")
    @ApiBaseSiteIdUserIdAndCartIdParam
    @RequestMappingOverride
    public CartModificationWsDTO updateCartEntry(
            @Parameter(description = "The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).", required = true) @PathVariable final long entryNumber,
            @Parameter(description = "Response configuration. This is the list of fields that should be returned in the response body.", schema = @Schema(allowableValues = {"BASIC", "DEFAULT", "FULL"})) @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            @Parameter(description = "Request body parameter that contains details such as the quantity of product (quantity).", required = true) @RequestBody BHGEUpdateCartEntryForm form,
            @Parameter(description = "cart Id", required = true) @PathVariable final String cartId)
            throws CommerceCartModificationException {

        CartModificationData cartModificationData = new CartModificationData();
        if (bhgeCartFacade.hasEntries()) {
            try {
                sessionService.setAttribute("productLine", form.getProductLine());
                cartModificationData = bhgeCartFacade.updateCartEntry(entryNumber,
                        form.getQuantity().longValue());
                LOG.info("Quantityofproduct with part number "
                        + cartModificationData.getEntry().getProduct().getCode() + " has been updated to " + cartModificationData.getQuantity()
                        + " in the Cart page. ");

                //update default plant
                boolean isUpdated = bhgeCartFacade.updateDefaultPlantForEntry(cartId, form.getDefaultPlant(), (int) entryNumber);
                LOG.info("DefaultPlantForCartEntry " + cartId + " updated " + isUpdated);
                if (org.apache.commons.lang3.StringUtils.isNotBlank(form.getReqDate())) {
                    LOG.info("DE153449 updating requested deliver date for entry");
                    bhgeCartFacade.updateEntryReqDate(form.getReqDate(), (int) entryNumber);
                }

            } catch (final CommerceCartModificationException ex) {
                cartModificationData.setStatusCode(DsoccConstants.ERROR);
                cartModificationData.setStatusMessage("Cart update has failed");
                LOG.error("Couldn't update product with the entry number: " + entryNumber + ".", ex);
            }
        } else {
            cartModificationData.setStatusCode(DsoccConstants.ERROR);
            cartModificationData.setStatusMessage("Cart has no entries!");
        }
        return getDataMapper().map(cartModificationData,
                CartModificationWsDTO.class, DsoccConstants.FULL);
    }

    /**
     * Updates notes on entry
     *
     * @param entryNumber
     * @param fields
     * @return
     */
    @RequestMapping(value = "/{cartId}/entries/{entryNumber}/updateCartEntryNotes", method = RequestMethod.PUT, consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @Operation(operationId = "updateCartEntryNotes", summary = "Sets entry notes on cart entry")
    @ApiBaseSiteIdUserIdAndCartIdParam
    @ResponseStatus(HttpStatus.OK)
    public void updateCartEntryNotes(@Parameter(description = "cart Id", required = true) @PathVariable final String cartId,
            @Parameter(description = "The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).", required = true) @PathVariable final long entryNumber,
            @Parameter(description = "Response configuration. This is the list of fields that should be returned in the response body.", schema = @Schema(allowableValues = {"BASIC", "DEFAULT", "FULL"})) @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            @Parameter(description = "Request body parameter that contains details such as the quantity of product (quantity) and entry notes.", required = true) @RequestBody BHGEUpdateCartEntryForm form) throws Exception {

        boolean isUpdated = false;
        try {
            //Update entry notes
            //isUpdated = bhgeCartFacade.updateEntryNotes((int) entryNumber, form.getEntryNotes());
            isUpdated = bhgeCartFacade.updateEntryNotesforWS((int) entryNumber, form.getEntryNotes(), cartId);
            LOG.info("EntryNotesforCartEntry updated " + isUpdated);
        } catch (Exception ex) {
            LOG.error("Error while updating entry notes updateCartEntryNotes" + ex);
            throw new Exception("There was an issue updating entry notes. Please try again!");
        }
    }

    /**
     * Method to change cart shipment method
     *
     * @param form
     */
    @RequestMapping(value = "/{cartId}/changeshipmentmethod", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    @Operation(operationId = "changeShipmentMethod", summary = "Sets shipment method on cart")
    @ApiBaseSiteIdUserIdAndCartIdParam
    public void replaceCartDeliveryAddress(@Parameter(description = "Request body parameter that contains details such as shipment method and end customer", required = true) @RequestBody final BHGEUpdateCartForm form) throws Exception {
        boolean isUpdated = false;
        try {
            //Update shipment method
            bhgeCartFacade.updateShipmentMethod(form.getShipmentMethod(), form.getEndCustomerNumber(),
                    form.getIsEndCustomerChanged());
            LOG.info("ShipMethodMethod updated " + isUpdated);
        } catch (Exception ex) {
            LOG.error("Error while updating shipmentMethodEndUser updateCartForm" + ex);
            throw new Exception("There was an issue updating data. Please try again!");
        }
    }

    /**
     * Checks if a saved cart exists
     *
     * @param saveCartName
     * @param page
     * @param pageSize
     * @param sortCode
     * @return
     * @throws CMSItemNotFoundException
     */
    @RequestMapping(value = "/{cartId}/checkSaveCartName", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "checkSaveCartName", summary = "Checks if a saved cart exists")
    @ApiBaseSiteIdUserIdAndCartIdParam
    public String checkSaveCartName(@Parameter(description = "cart Id", required = true) @PathVariable final String cartId, @RequestParam("saveCartName")
            final String saveCartName, @RequestParam(value = "page", defaultValue = "0")
            final int page, @RequestParam(value = "pageSize", required = false, defaultValue = PAGE_SIZE)
            final String pageSize, @RequestParam(value = "sort", required = false)
            final String sortCode) throws CMSItemNotFoundException {
        try {
            final PageableData pageableData = createPageableData(page, Integer.valueOf(pageSize), sortCode);
            final boolean cartNameStatus = bhgeSaveCartFacadeImpl.checkIfAlreadyExists(pageableData, saveCartName);
            LOG.info("Notes cartNameStatus " + cartNameStatus);
            final String cartStatus = String.valueOf(cartNameStatus);
            return cartStatus;
        } catch (final Exception e) {
            LOG.error("checkSaveCartName DSCartsController " + e);
        }
        return null;
    }

    /**
     * Gets price for VC material
     *
     * @param entryNumber
     * @return
     * @throws Exception
     */
    @ResponseBody
    @Operation(operationId = "getPriceForVCMaterial", summary = "Gets the price for VC Material")
    @ApiBaseSiteIdUserIdAndCartIdParam
    @RequestMapping(value = "/getPriceForVCMaterial", method = {RequestMethod.GET})
    public CartWsDTO getPriceForVCMaterial(@RequestParam("entryNumber") final String entryNumber, @Parameter(description = "Response configuration. This is the list of fields that should be returned in the response body.", schema = @Schema(allowableValues = {"BASIC", "DEFAULT", "FULL"})) @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) throws Exception {
        CartData cartData = new CartData();
        try {
            LOG.info("getPriceForVCMaterial :" + entryNumber);
            if (StringUtils.isNotBlank(entryNumber)) {
                cartData = bhgeCartFacade.getPriceForVCCartEntry(Integer.parseInt(entryNumber));
            }
        } catch (final Exception e) {
            LOG.error("error Occured while getting Price for VC Material", e);
        }
        /* return getDataMapper().map(cartData, CartWsDTO.class, fields); */
        return getDataMapper().map(cartData, CartWsDTO.class, StringEscapeUtils.escapeHtml4(fields));

    }

    @Operation(operationId = "Export Cart", summary = "Exports active cart to excel", description = "Exports active cart to excel")
    @RequestMapping(value = "/{cartId}/export", method = RequestMethod.GET, produces = "text/xls")
    @ResponseBody
    @ApiBaseSiteIdAndUserIdParam
    public void exportCartToExcel(
            @Parameter(description = "Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart", required = true) @PathVariable String cartId,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            final HttpServletResponse response) throws IOException {

        LOG.info("In DSCartsController -- exportCartToExcel method start");
        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment;filename=cart.xls");

        try {
            final HSSFWorkbook xlsFile = new HSSFWorkbook();
            final CreationHelper helper = xlsFile.getCreationHelper();
            final HSSFSheet sheet = xlsFile.createSheet("cart_details");
            sheet.setDefaultColumnWidth(16);
            final Row row = sheet.createRow((short) 0);
            final CartData cartData = bhgeCartFacade.getSessionCartWithEntryOrdering(false);
            boolean vcCart = false;
            if (cartData != null) {
                for (OrderEntryData entryData : cartData.getEntries()) {
                    if (entryData.getProduct().getConfigurable()) {
                        vcCart = true;
                        break;
                    }
                }
            }
            if (vcCart) {
                createCellForVC(cartData, row, helper, xlsFile, sheet);
            } else {
                createCellForNonVC(cartData, row, helper, xlsFile, sheet);
            }
            final OutputStream outputStream = response.getOutputStream();
            xlsFile.write(outputStream);
            outputStream.flush();
            outputStream.close();
            LOG.info("In DSCartsController -- exportExcelFile -- successfully sent response for download");

        } catch (final IOException e) {
            LOG.error(e.getMessage(), e);
        }

    }

    private void createCellForVC(CartData cartData, Row row, CreationHelper helper, HSSFWorkbook xlsFile, HSSFSheet sheet) {
        if (cartData != null) {
            row.createCell(0).setCellValue(helper.createRichTextString(getMessageSource()
                    .getMessage("basket.export.cart.item.sku", null, getI18nService().getCurrentLocale())));
            row.createCell(1).setCellValue(helper.createRichTextString(getMessageSource()
                    .getMessage("basket.export.cart.item.quantity", null, getI18nService().getCurrentLocale())));
            row.createCell(2).setCellValue(helper.createRichTextString(getMessageSource()
                    .getMessage("basket.export.cart.item.name", null, getI18nService().getCurrentLocale())));

            final UserModel user = userService.getCurrentUser();
            if (null != user && user instanceof GEEdgeCustomerModel) {
                LOG.info("Logged-in user -- Price is set");
                row.createCell(3).setCellValue(helper.createRichTextString(getMessageSource()
                        .getMessage("basket.export.cart.item.fullyConfigurePartNumber", null, getI18nService().getCurrentLocale())));
                row.createCell(4).setCellValue(helper.createRichTextString(getMessageSource()
                        .getMessage("basket.export.cart.item.price", null, getI18nService().getCurrentLocale())));
                bhgeRmaFormFacade.generateExcelFromCart(xlsFile, sheet, cartData, helper, Boolean.TRUE);
                LOG.info("In DSCartsController -- exportExcelFile -- successfully created excel file");
            } else {
                LOG.info("For Guest user in DSCartsController --");
                bhgeRmaFormFacade.generateExcelFromCart(xlsFile, sheet, cartData, helper, Boolean.FALSE);
                LOG.info("In DSCartsController -- exportExcelFile -- successfully created excel file");
            }
        }
    }

    private void createCellForNonVC(CartData cartData, Row row, CreationHelper helper, HSSFWorkbook xlsFile, HSSFSheet sheet) {
        if (cartData != null) {
            row.createCell(0).setCellValue(helper.createRichTextString(getMessageSource()
                    .getMessage("basket.export.cart.item.sku", null, getI18nService().getCurrentLocale())));
            row.createCell(1).setCellValue(helper.createRichTextString(getMessageSource()
                    .getMessage("basket.export.cart.item.quantity", null, getI18nService().getCurrentLocale())));
            row.createCell(2).setCellValue(helper.createRichTextString(getMessageSource()
                    .getMessage("basket.export.cart.item.name", null, getI18nService().getCurrentLocale())));

            final UserModel user = userService.getCurrentUser();
            if (null != user && user instanceof GEEdgeCustomerModel) {
                LOG.info("Logged-in user -- Price is set");
                row.createCell(3).setCellValue(helper.createRichTextString(getMessageSource()
                        .getMessage("basket.export.cart.item.price", null, getI18nService().getCurrentLocale())));
                bhgeRmaFormFacade.generateExcelFromCart(xlsFile, sheet, cartData, helper, Boolean.TRUE);
                LOG.info("In DSCartsController -- exportExcelFile -- successfully created excel file");
            } else {
                LOG.info("For Guest user in DSCartsController --");
                bhgeRmaFormFacade.generateExcelFromCart(xlsFile, sheet, cartData, helper, Boolean.FALSE);
                LOG.info("In DSCartsController -- exportExcelFile -- successfully created excel file");
            }
        }
    }

    @RequestMapping(value = "/{cartId}/vouchers", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    @Operation(operationId = "doApplyCartVoucher", summary = "Applies a voucher based on the voucherId defined for the cart.", description = "Applies a voucher based on the voucherId defined for the cart.")
    @ApiBaseSiteIdUserIdAndCartIdParam
    @RequestMappingOverride
    public void doApplyCartVoucher(
            @Parameter(description = "Voucher identifier (code)", required = true) @RequestParam final String voucherId,
            @Parameter(description = "cart Id", required = true) @PathVariable final String cartId)
            throws VoucherOperationException {
        bhgeCartFacade.applyVoucherForCartInternal(voucherId, cartId);

    }

    @RequestMapping(value = "/{cartId}/entries/{entryNumber}/updateReferenceNumber", method = RequestMethod.PUT, consumes = {
        MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @Operation(operationId = "updateReferenceNumber", summary = "Sets Reference Number on cart entry")
    @ApiBaseSiteIdUserIdAndCartIdParam
    @ResponseStatus(HttpStatus.OK)
    public void updateReferenceNumber(@Parameter(description = "cart Id", required = true) @PathVariable final String cartId,
            @Parameter(description = "The entry number", required = true) @PathVariable final long entryNumber,
            @Parameter(description = "Response configuration", schema = @Schema(allowableValues = {"BASIC", "DEFAULT", "FULL"})) @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            @Parameter(description = "Request body parameter that contains details", required = true) @RequestBody BHGEUpdateCartEntryForm form)
            throws Exception {
        try {
            boolean isUpdated = bhgeCartFacade.updateReferenceNumerForEntry((int) entryNumber, form.getReferenceNUmber(), cartId);
            LOG.info("Reference number updated " + isUpdated);
        } catch (Exception ex) {
            LOG.error("Error while updating entry reference number" + ex);
            throw new Exception("There was an issue updating reference number, Please try again!");
        }
    }

    @RequestMapping(value = "/{cartId}/entries/{entryNumber}/updateTagInfo", method = RequestMethod.PUT, consumes = {
        MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @Operation(operationId = "updateTagInformation", summary = "Sets Tag informtion on cart entry")
    @ApiBaseSiteIdUserIdAndCartIdParam
    @ResponseStatus(HttpStatus.OK)
    public void updateTagInformation(@Parameter(description = "cart Id", required = true) @PathVariable final String cartId,
            @Parameter(description = "The entry number", required = true) @PathVariable final long entryNumber,
            @Parameter(description = "Response configuration", schema = @Schema(allowableValues = {"BASIC", "DEFAULT", "FULL"})) @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            @Parameter(description = "Request body parameter that contains details", required = true) @RequestBody BHGEUpdateCartEntryForm form)
            throws Exception {
        try {
            boolean isUpdated = bhgeCartFacade.updateTagInfoForEntry((int) entryNumber, form.getTagInformation(), cartId);
            LOG.info("Tag information updated " + isUpdated);
        } catch (Exception ex) {
            LOG.error("Error while updating tag informstion in entry " + ex);
            throw new Exception("There was an issue updating tag information, Please try again!");
        }
    }

    @PatchMapping("/{cartId}/{earlyShipment}")
    @ResponseStatus(HttpStatus.OK)
    @Operation(operationId = "updateEarlySHipment", summary = "Update Cart Early SHipment Flag", description = "Update Cart Early SHipment Flag")
    @ApiBaseSiteIdUserIdAndCartIdParam
    public void updateEarlyShipmentDate(@PathVariable String cartId, @PathVariable boolean earlyShipment) {
        try {
            LOG.info("US539287 Updating Cart Early Shipment Flag");
            bhgeCartFacade.updateEarlyShipment(cartId, earlyShipment);
        } catch (Exception e) {
            LOG.error("US539287 Error while updating Early Shipment Flag" + e.getMessage());
        }
    }

    @PutMapping("/{cartId}/updateHeaderReqDate")
    @ResponseBody
    @Operation(operationId = "updateHeaderReqDate", summary = "Update Cart Header Req Date", description = "Update Cart Header Req Date")
    @ApiBaseSiteIdUserIdAndCartIdParam
    public void updateHeaderReqDate(@PathVariable String cartId, @RequestParam String reqDate) {
        try {
            LOG.info("US539287 Updating Cart Header Req Date");
            bhgeCartFacade.updateHeaderReqDate(cartId, reqDate);
        } catch (Exception e) {
            LOG.error("US539287 Error while updating Header Req Date" + e.getMessage());
        }
    }

    @PutMapping("/{cartId}/{entryNumber}/updateReqHdrDate")
    @ResponseBody
    @Operation(operationId = "updateReqHdrDate", summary = "Update Cart Entry Header Req Date", description = "Update Cart Entry Header Req Date")
    @ApiBaseSiteIdUserIdAndCartIdParam
    public void updateEntryReqdate(@PathVariable String cartId, @PathVariable int entryNumber, @RequestParam String reqHdrDate) {
        try {
            LOG.info("US539287 Updating Cart Entry Header Req Date");
            bhgeCartFacade.updateEntryReqDate(reqHdrDate, entryNumber);
        } catch (Exception e) {
            LOG.error("US539287 Error while updating Header Req Date" + e.getMessage());
        }
    }


}
