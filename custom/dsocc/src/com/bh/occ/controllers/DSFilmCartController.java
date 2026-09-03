package com.bh.occ.controllers;

import com.bhge.facades.order.BHGECartFacade;
import de.hybris.platform.b2b.company.B2BCommerceUnitService;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.CartModificationData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.storelocator.data.PointOfServiceData;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.commercewebservicescommons.dto.order.CartModificationWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.order.OrderEntryWsDTO;
import de.hybris.platform.commercewebservicescommons.errors.exceptions.CartEntryException;
import de.hybris.platform.core.PK;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.CartEntryModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.cache.CacheControl;
import de.hybris.platform.webservicescommons.cache.CacheControlDirective;
import de.hybris.platform.webservicescommons.errors.exceptions.WebserviceValidationException;
import de.hybris.platform.webservicescommons.mapping.DataMapper;
import de.hybris.platform.webservicescommons.mapping.FieldSetLevelHelper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdUserIdAndCartIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import java.util.Objects;
import java.util.function.Predicate;




@RestController
@ApiVersion("v2")
@CacheControl(directive = CacheControlDirective.NO_CACHE)
@Tag(name = "DS Film Cart Controller")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/filmcart")
public class DSFilmCartController extends DSBaseController {
    private static final Logger LOG = Logger.getLogger(DSFilmCartController.class);
    protected static final String ENTRY = "entry";
    private static final String ATTACHMENTFLAG = "X";
    @Resource(name = "dataMapper")
    DataMapper dataMapper;
    @Resource(name = "bhgeCartFacade")
    private BHGECartFacade bhgeCartFacade;
    @Resource(name = "modelService")
    private ModelService modelService;
    @Resource(name = "userService")
    private UserService userService;
    @Resource(name = "b2bCommerceUnitService")
    private B2BCommerceUnitService b2bCommerceUnitService;

    @Resource(name = "orderEntryCreateValidator")
    private Validator orderEntryCreateValidator;
    @Resource(name = "orderEntryUpdateValidator")
    private Validator orderEntryUpdateValidator;
    @Resource(name = "orderEntryReplaceValidator")
    private Validator orderEntryReplaceValidator;


    @PostMapping(value = "/carts/{cartId}/entries")
    @Operation(operationId = "getCartEntries", summary = "Get Cart Entries", description = "Get Cart Entries")
    @ApiBaseSiteIdAndUserIdParam
    public CartModificationWsDTO addFilmCartEntry(
            @Parameter(description = "cart Id", required = true) @PathVariable final String cartId,
            @ApiFieldsParam @RequestParam(value = "code", required = true) final String code,
            @ApiFieldsParam @RequestParam(value = "quantity", required = true) final Long quantity,
            @ApiFieldsParam @RequestParam(value = "ecaCode", required = false) final Long ecaCode,
            @ApiFieldsParam @RequestParam(required = false, defaultValue = FieldSetLevelHelper.DEFAULT_LEVEL) final String fields) {
        LOG.info("Adding film cart entry for cartId: " + cartId + ", product code: " + code + ", quantity: " + quantity + ", ecaCode: " + ecaCode);
        final OrderEntryData orderEntry = getOrderEntryData(quantity, code, ecaCode, null);

        return dataMapper.map(bhgeCartFacade.addOrderEntry(orderEntry), CartModificationWsDTO.class, fields);
    }
    @PatchMapping(value = "/carts/{cartId}/entries/{entryNumber}", consumes = { MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE })
    @ResponseBody
    @Operation(operationId = "updateCartEntry", summary = "Updates the details of a cart entry.", description = "Updates the quantity of a single cart entry and the details of the pickup store.")
    @ApiBaseSiteIdUserIdAndCartIdParam
    public CartModificationWsDTO updateCartEntry(@PathVariable final String baseSiteId,
                                                 @Parameter(description = "Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero.", required = true) @PathVariable final long entryNumber,
                                                 @Parameter(description = "Request body parameter that contains details such as the quantity of product (quantity), and the pickup store name (deliveryPointOfService.name)\n\nThe DTO is in XML or .json format.", required = true) @RequestBody final OrderEntryWsDTO entry,
                                                 @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
            throws CommerceCartModificationException
    {
        final CartData cart = bhgeCartFacade.getSessionCart();
        final OrderEntryData orderEntry = getCartEntryForNumber(cart, entryNumber);

        validateProductCode(orderEntry, entry);

        if (entry.getQuantity() == null)
        {
            LOG.info("Quantity is not provided in the request, setting it to the existing value in cart entry: " + orderEntry.getQuantity());
            entry.setQuantity(orderEntry.getQuantity());
        }
        if(null ==entry.getEcaCode())
        {
            LOG.info("ecaCode is not provided in the request, setting it to the existing value in cart entry: " + orderEntry.getEcaCode());
        }
        else {
            LOG.info("Updating ecaCode for cart entry. Old value: " + orderEntry.getEcaCode() + ", New value: " + entry.getEcaCode());
            orderEntry.setEcaCode(Long.valueOf(entry.getEcaCode()));
        }

        validate(entry, ENTRY, orderEntryUpdateValidator);

        final String pickupStore = entry.getDeliveryPointOfService() == null ? null : entry.getDeliveryPointOfService().getName();
        return updateCartEntryInternal(baseSiteId, cart, orderEntry, entry.getQuantity(), pickupStore, fields, false);
    }

    protected OrderEntryData getOrderEntryData(final long quantity, final String productCode, final Long ecaCode, final Integer entryNumber) {
        final OrderEntryData orderEntry = new OrderEntryData();
        orderEntry.setQuantity(quantity);
        orderEntry.setProduct(new ProductData());
        orderEntry.getProduct().setCode(productCode);
        orderEntry.setEntryNumber(entryNumber);
        if (ecaCode != null) {
            orderEntry.setEcaCode(ecaCode);
        }

        return orderEntry;
    }
    protected static CartModificationData mergeCartModificationData(final CartModificationData cmd1,
                                                                    final CartModificationData cmd2)
    {
        if ((cmd1 == null) && (cmd2 == null))
        {
            return new CartModificationData();
        }
        if (cmd1 == null)
        {
            return cmd2;
        }
        if (cmd2 == null)
        {
            return cmd1;
        }
        final CartModificationData cmd = new CartModificationData();
        cmd.setDeliveryModeChanged(
                Boolean.TRUE.equals(cmd1.getDeliveryModeChanged()) || Boolean.TRUE.equals(cmd2.getDeliveryModeChanged()));
        cmd.setEntry(cmd2.getEntry());
        cmd.setQuantity(cmd2.getQuantity());
        cmd.setQuantityAdded(cmd1.getQuantityAdded() + cmd2.getQuantityAdded());
        cmd.setStatusCode(cmd2.getStatusCode());
        return cmd;
    }

    protected static OrderEntryData getCartEntryForNumber(final CartData cart, final long number)
    {
        return CollectionUtils.emptyIfNull(cart.getEntries()).stream()
                .filter(entry -> entry != null && Objects.equals(number, Long.valueOf(entry.getEntryNumber()))).findFirst()
                .orElseThrow(() -> new CartEntryException("Entry not found", CartEntryException.NOT_FOUND, String.valueOf(number)));
    }

    protected static OrderEntryData getCartEntry(final CartData cart, final String productCode, final String pickupStore)
    {
        final Predicate<OrderEntryData> productsEqualFilter = orderEntryData -> orderEntryData != null
                && orderEntryData.getProduct() != null && orderEntryData.getProduct().getCode() != null //
                && orderEntryData.getProduct().getCode().equals(productCode);

        final Predicate<OrderEntryData> noStoresFilter = orderEntryData -> pickupStore == null
                && orderEntryData.getDeliveryPointOfService() == null;

        final Predicate<OrderEntryData> storesEqualFilter = orderEntryData -> pickupStore != null
                && orderEntryData.getDeliveryPointOfService() != null && pickupStore.equals(
                orderEntryData.getDeliveryPointOfService().getName());

        return cart.getEntries().stream() //
                .filter(productsEqualFilter.and(noStoresFilter.or(storesEqualFilter))).findFirst() //
                .orElse(null);
    }

    protected static void validateForAmbiguousPositions(final CartData currentCart, final OrderEntryData currentEntry,
                                                        final String newPickupStore)
    {
        final OrderEntryData entryToBeModified = getCartEntry(currentCart, currentEntry.getProduct().getCode(), newPickupStore);
        if (entryToBeModified != null && !entryToBeModified.getEntryNumber().equals(currentEntry.getEntryNumber()))
        {
            throw new CartEntryException("Ambiguous cart entries! Entry number " + currentEntry.getEntryNumber()
                    + " after change would be the same as entry " + entryToBeModified.getEntryNumber(),
                    CartEntryException.AMBIGIOUS_ENTRY, entryToBeModified.getEntryNumber().toString());
        }
    }

    protected static void validateProductCode(final OrderEntryData originalEntry, final OrderEntryWsDTO entry)
    {
        final String productCode = originalEntry.getProduct().getCode();
        final Errors errors = new BeanPropertyBindingResult(entry, ENTRY);
        if (entry.getProduct() != null && entry.getProduct().getCode() != null && !entry.getProduct().getCode().equals(productCode))
        {
            errors.reject("cartEntry.productCodeNotMatch");
            throw new WebserviceValidationException(errors);
        }
    }
    protected CartModificationWsDTO updateCartEntryInternal(final String baseSiteId, final CartData cart,
                                                            final OrderEntryData orderEntry, final Long qty, final String pickupStore, final String fields, final boolean putMode)
            throws CommerceCartModificationException
    {
        final long entryNumber = orderEntry.getEntryNumber().longValue();
        final String productCode = orderEntry.getProduct().getCode();
        final PointOfServiceData currentPointOfService = orderEntry.getDeliveryPointOfService();

        CartModificationData cartModificationData1 = null;
        CartModificationData cartModificationData2 = null;

        if (!StringUtils.isEmpty(pickupStore))
        {
            if (currentPointOfService == null || !currentPointOfService.getName().equals(pickupStore))
            {
                //was 'shipping mode' or store is changed
                validateForAmbiguousPositions(cart, orderEntry, pickupStore);
                //stockPOSValidator.validate(baseSiteId, productCode, pickupStore, entryNumber);
                cartModificationData1 = bhgeCartFacade.updateCartEntry(entryNumber, pickupStore);
            }
        }
        else if (putMode && currentPointOfService != null)
        {
            //was 'pickup in store', now switch to 'shipping mode'
            validateForAmbiguousPositions(cart, orderEntry, pickupStore);
            //stockValidator.validate(baseSiteId, productCode, entryNumber);
            cartModificationData1 = bhgeCartFacade.updateCartEntry(entryNumber, pickupStore);
        }
        if (null != orderEntry.getEcaCode()) {
            LOG.info("Current ecaCode for cart entry: " + orderEntry.getEcaCode());
            bhgeCartFacade.updateCartentryECA(cart, (int) entryNumber, orderEntry.getEcaCode());
        }

        if (qty != null)
        {
            LOG.info("Updating quantity for cart entry. Entry number: " + entryNumber + ", Product code: " + productCode + ", Old quantity: " + orderEntry.getQuantity() + ", New quantity: " + qty);
            cartModificationData2 = bhgeCartFacade.updateCartEntry(entryNumber, qty);
            bhgeCartFacade.updateCartentryECA(cart, (int) entryNumber, orderEntry.getEcaCode());
        }

        return getDataMapper().map(mergeCartModificationData(cartModificationData1, cartModificationData2),
                CartModificationWsDTO.class, fields);
    }
}