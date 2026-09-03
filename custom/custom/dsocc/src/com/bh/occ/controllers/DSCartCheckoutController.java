package com.bh.occ.controllers;

import com.bh.occ.constants.DsoccConstants;
import com.bh.occ.facades.DsCheckoutFacade;
import com.bh.occ.forms.*;
import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.constants.GeneratedBhgeCoreConstants;
import com.bhge.core.enums.BHGERMACommerceType;
import com.bhge.core.model.BHGECurrencyModel;
import com.bhge.core.model.ReturnPOModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.core.util.BHGEPriceAvailabilityUtils;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.IncotermsData;
import com.bhge.facades.address.BHGEShippingAddressFormData;
import com.bhge.facades.cart.converters.BHGECartDataConverter;
import com.bhge.facades.cart.converters.BHGECommonUtil;
import com.bhge.facades.constants.BhgeFacadesConstants;
import com.bhge.facades.data.BHGECreditCardData;
import com.bhge.facades.data.ReturnPoData;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.order.impl.DefaultBHGECheckoutFacade;
import com.bhge.facades.rma.BHGERmaFormFacade;
import com.bhge.facades.rma.data.RmaReturnCartData;
import com.bhge.facades.user.BHGECustomerFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.facades.user.data.GetAddressFormData;
import com.bhge.product.service.BHGEProductService;
import com.bhge.services.event.BHGEShippingAddressEmailEvent;
import com.bhge.util.exception.BhgeUtilException;
import com.bhge.util.service.BhgecommonutilsService;
import com.ds.dsocc.common.dto.*;
import com.ds.dsocc.incoTerm.dto.IncoTermListWsDTO;
import de.hybris.platform.acceleratorfacades.order.AcceleratorCheckoutFacade;
import de.hybris.platform.acceleratorservices.config.SiteConfigService;
import de.hybris.platform.b2b.enums.CheckoutPaymentType;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.b2bacceleratorfacades.order.data.B2BPaymentTypeData;
import de.hybris.platform.b2bcommercefacades.company.data.B2BCostCenterData;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.enums.data.ShippingCarrierMethodData;
import de.hybris.platform.commercefacades.i18n.I18NFacade;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commercefacades.user.data.CountryData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commercefacades.user.data.RegionData;
import de.hybris.platform.commerceservices.customer.DuplicateUidException;
import de.hybris.platform.commerceservices.enums.CountryType;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commercewebservices.core.user.data.AddressDataList;
import de.hybris.platform.commercewebservicescommons.dto.order.CartWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.product.PriceWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.user.*;
import de.hybris.platform.commercewebservicescommons.errors.exceptions.CartException;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.order.exceptions.CalculationException;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.event.EventService;
import de.hybris.platform.servicelayer.i18n.I18NService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import de.hybris.platform.webservicescommons.cache.CacheControl;
import de.hybris.platform.webservicescommons.cache.CacheControlDirective;
import de.hybris.platform.webservicescommons.mapping.FieldSetLevelHelper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.util.YSanitizer;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.*;

@Controller
@ApiVersion("v2")
@CacheControl(directive = CacheControlDirective.NO_CACHE)
@Tag(name = "DS Checkout")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/dscheckout")
public class DSCartCheckoutController extends DSBaseController {

    private static final Logger LOG = LoggerFactory.getLogger(DSCartCheckoutController.class);

    String NOINDEX_NOFOLLOW = "noindex,nofollow";
    private static final String BHGE_SHIPPING_ADDRESS_FORM_ATTR = "bhgeShippingAddressForm";
    private static final String BHGE_SOLDTO_ADDRESS_FORM_ATTR = "bhgeSoldtoAddressForm";
    private static final String BHGE_ENDUSER_ADDRESS_FORM_ATTR = "bhgeEndUserAddressForm";
    private static final String COUNTRY_DATA_ATTR = "countryData";
    private static final String REGIONS_ATTR = "regions";
    private static final String DEFAULT_COUNTRY_ISO = "US";
    private static long subQuantity = 0;
    private static final String ADDRESS_MAPPING = "firstName,lastName,titleCode,phone,cellphone,line1,line2,town,postalCode,region(isocode),district,country(isocode),defaultAddress,id,saveForFuture,companyName,endUserType";
    private static final String DEFAULT_PAYMENT_TYPE = "ACCOUNT";
    
    @Resource(name = "userService")
    private UserService userService;

    @Resource(name = "bhgeCartService")
    public BHGECartService bhgeCartService;

    @Resource(name = "bhgeRmaFormFacade")
    private BHGERmaFormFacade bhgeRmaFormFacade;

    @Resource(name = "b2bCheckoutFacade")
    private DefaultBHGECheckoutFacade bhgeCheckoutFacade;

    @Autowired(required = true)
    private BHGEB2BUnitService bhgeB2BUnitService;

    @Resource
    private B2BUnitService b2bUnitService;

    @Resource(name = "bhgeUserProfileFacade")
    private BHGEUserProfileFacade bhgeUserProfileFacade;

    @Resource(name = "bhgeCartFacade")
    private BHGECartFacade bhgeCartFacade;
    
    @Resource(name = "customerFacade")
	BHGECustomerFacade customersFacade;
    
    @Resource(name = "messageSource")
	private MessageSource messageSource;
    
    @Resource(name = "i18nService")
	private I18NService i18nService;

    @Resource(name = "siteConfigService")
    private SiteConfigService siteConfigService;
    
    @Resource(name="dsCheckoutFacade")
	private DsCheckoutFacade dsCheckoutFacade;

    @Resource(name = "acceleratorCheckoutFacade")
    private AcceleratorCheckoutFacade checkoutFacade;

    @Resource(name = "i18NFacade")
    private I18NFacade i18NFacade;

    @Resource(name = "b2bCustomerFacade")
    protected CustomerFacade customerFacade;

    @Resource(name = "b2bProductFacade")
    private ProductFacade productFacade;

    @Resource(name = "priceDataFactory")
    private PriceDataFactory priceDataFactory;

    @Resource(name = "bhgeSoldToUtil")
    private BHGESoldToUtil bhgeSoldToUtil;

    @Resource(name = "bhgeCartDataConverter")
	private BHGECartDataConverter bhgeCartDataConverter;
    
    @Resource(name="cartConverter")
	private Converter<CartModel, CartData> cartConverter;
    @Resource(name="modelService")
    private ModelService modelService;
    
    @Resource(name="addressConverter")
	private Converter<AddressModel, AddressData> addressConverter;
    
    @Resource
	private BhgecommonutilsService commonUtilsService;

    @Resource
	private EventService eventService;
    
    @Resource(name = "restTemplate")
	RestTemplate restTemplate;
    @Resource(name="bhgePriceAvailabilityUtils")
    private BHGEPriceAvailabilityUtils bhgePriceAvailabilityUtils;

    @Resource(name = "bhgeProductService")
    public BHGEProductService bhgeProductService;

    public MessageSource getMessageSource() {
		return messageSource;
	}

	public I18NService getI18nService() {
		return i18nService;
	}

	// TODO : Work on below commented annotations
    //    @Override
    @RequestMapping(value = "/{checkoutCartId}/choose", method = RequestMethod.GET)
//    @RequireHardLogIn
//    @PreValidateQuoteCheckoutStep
//    @PreValidateCheckoutStep(checkoutStep = PAYMENT_TYPE)
    @ResponseBody
    @Operation(operationId = "choose", summary = "Checkout page", description = "Checkout page")
    @ApiBaseSiteIdAndUserIdParam
    public CheckoutWsDTO enterStep(@Parameter @RequestParam(required = false, defaultValue = FieldSetLevelHelper.DEFAULT_LEVEL) final String fields,
    		@Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
    		@Parameter(description = "Provide Guest sales area for anonymous user. For ex. 1800_GE_GE", required = false) @RequestParam(required=false, name="guestSalesArea") String guestSalesArea)
            throws CMSItemNotFoundException, CommerceCartModificationException
    {
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        Boolean isAnonymoususer= userService.isAnonymousUser( currentUser);
        LOG.info("=========================Inside enterStep method in PaymentTypeCheckoutStepController ==========================="
                + currentUser.getUid());

        String sanitizedGuestSalesArea = StringEscapeUtils.escapeHtml4(guestSalesArea);

        // Creating new CheckoutWsDTO object to populate values and return
        CheckoutWsDTO checkoutWsDTO = new CheckoutWsDTO();

        //final CartModel cartModel = bhgeCartService.getSessionCart();
        LOG.info("Cart Id for the user" + checkoutCartId);
        final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);

        //US-465610 - Setting bool flag to show credit card option and hide PO for some b2B units.
        bhgeCheckoutFacade.setAvailablePaymentOptions(cartModel, checkoutWsDTO);
        //US-465613 - Retreive saved cards
        if(BooleanUtils.isTrue(checkoutWsDTO.getShowCreditCard())){
            checkoutWsDTO.setSavedCards(getCreditCardWsDTO(bhgeCheckoutFacade.getSavedCards()));
            checkoutWsDTO.setFiservMerchantId(bhgeCheckoutFacade.getFiservMerchantId());
        }

        //Sets guest session fields if it's guest checkout
        // TODO : commenting the below code as its related to session
        /*checkForAnonymousCheckout(cartModel);*/
        if (Objects.nonNull(cartModel.getCommerceType()) && cartModel.getCommerceType().toString().equals("RETURNS"))
        {
            if ("PARTIAL".equals(bhgeRmaFormFacade.gethazardCompleteness()))
            {
                // TODO : check the below commented redirection
                /*return REDIRECT_PREFIX + "/rma/hazard-info";*/
            }
        }
        String cartCommerceType = "";

        if (Objects.nonNull(cartModel.getCommerceType()))
        {
            cartCommerceType = cartModel.getCommerceType().toString();
        }
        else
        {
            cartCommerceType = "BUY";
        }
        checkoutWsDTO.setCartCommerceType(StringEscapeUtils.escapeHtml4(cartCommerceType));
        LOG.info("Cart model before setting Surcharge");
        bhgeCartService.setSurchargeForOrder(cartModel);
        LOG.info("Cart model after setting Surcharge");
        //model.addAttribute("cartCommerceType", cartCommerceType);
        //CartData cartData = bhgeCartDataConverter.convert(cartModel);
        CartData cartData = cartConverter.convert(cartModel);

        bhgeCartFacade.updatevouchersFromCartData(cartData);
        cartData = bhgeCartFacade.getSessionCartWithEntryOrderingforWS(cartModel, false);
        //LOG.debug("================== Cart Delivery Address choose API ===================== "+(cartData.getDeliveryAddress()!=null));
       // final CartData cartData = bhgeCheckoutFacade.getCheckoutCart();
        if(cartData.getEntries()!=null) {
        	checkoutWsDTO.setTotalItems(StringEscapeUtils.escapeHtml4(String.valueOf(cartData.getEntries().size())));
        }
        checkoutWsDTO.setTotalPrice(getDataMapper().map(cartData.getTotalPrice(), PriceWsDTO.class));
        
        if (cartCommerceType.equalsIgnoreCase("RETURNS"))
        {
            cartData.setCommerceType(StringEscapeUtils.escapeHtml4(cartCommerceType));
            Double rmaTotalDiscountValue = 0.0;
            for (final AbstractOrderEntryModel entry : cartModel.getEntries())
            {
                if (entry.getSilverClause() != null)
                {
                    rmaTotalDiscountValue += (entry.getSilverClause() * entry.getQuantity().doubleValue());
                }
            }
            final PriceData rmaTotalDiscount = bhgePriceAvailabilityUtils.populatePrice(rmaTotalDiscountValue, cartModel.getCurrency());
            cartData.setTotalDiscounts(rmaTotalDiscount);
            //cartData.setTotalReturnDiscount(rmaTotalDiscount);
            final List<RmaReturnCartData> returnList = bhgeRmaFormFacade.createReturnCart();
            final Map<String, Integer> locationMap = showCartEntryByLocation(returnList);
            checkoutWsDTO.setReturnList(getRmaReturnCartDataWsDTO(returnList));
            final List<String> locationList = new ArrayList<>(locationMap.keySet());
            checkoutWsDTO.setLocationList(locationList);
        }


        final Map<String, String> poDocMap = showPoDocByLocation(cartModel);
        checkoutWsDTO.setPoDocMap(poDocMap);
        // model.addAttribute("poDocMap", poDocMap);
        
   

        LOG.info("=========================After setting poDocMap===========================" + currentUser.getUid());
        LOG.info("############## Order Placement Step 1 - /checkout/multi/payment-type/choose - " + cartData.getCode());
        LOG.info(" #################### Cart id of the Current Cart is " + cartData.getCode() + " and the Cart has "
                + cartData.getTotalItems() + " items. ");

        checkoutWsDTO.setCartData(getDataMapper().map(cartData, CartWsDTO.class, "FULL"));
        checkoutWsDTO.setPaymentTypeForm(preparePaymentTypeForm(cartData,currentUser,isAnonymoususer));
        checkoutWsDTO.setShowChangeSoldto(Boolean.FALSE);
        // model.addAttribute("cartData", cartData);
        // model.addAttribute("paymentTypeForm", preparePaymentTypeForm(cartData));
        // model.addAttribute("showChangeSoldto", Boolean.FALSE);
        //Added for Payment Terms
        // TODO : check the below commented lines and get value from current user
        /*final BHGESoldToData defaultSoldTo1 = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
        model.addAttribute("defaultSoldTo", defaultSoldTo1);*/
        prepareDataForPage(checkoutWsDTO);
        /*storeCmsPageInModel(model, getContentPageForLabelOrId(MULTI_CHECKOUT_SUMMARY_CMS_PAGE_LABEL));
        setUpMetaDataForContentPage(model, getContentPageForLabelOrId(MULTI_CHECKOUT_SUMMARY_CMS_PAGE_LABEL));*/
        /*checkoutWsDTO.setBreadcrumbs(getResourceBreadcrumbBuilder().getBreadcrumbs("checkout.multi.paymentType.breadcrumb"));
        model.addAttribute(WebConstants.BREADCRUMBS_KEY,
                getResourceBreadcrumbBuilder().getBreadcrumbs("checkout.multi.paymentType.breadcrumb"));*/
        checkoutWsDTO.setMetaRobots(StringEscapeUtils.escapeHtml4(NOINDEX_NOFOLLOW));
        // model.addAttribute(ThirdPartyConstants.SeoRobots.META_ROBOTS, ThirdPartyConstants.SeoRobots.NOINDEX_NOFOLLOW);
        checkoutWsDTO.setCustomerClassList(bhgeB2BUnitService.getCustomerClassList());
        // model.addAttribute("customerClassList", bhgeB2BUnitService.getCustomerClassList());
        // TODO : Looks like below commented line is not required, check once
        // setCheckoutStepLinksForModel(model, getCheckoutStep());

        LOG.info("=========================After setting checkout step links for model ==========================="
                +currentUser.getDisplayName());
        //Added for Customer Billing address showing in Payment Option.
        
        final Map<String, String> endUserTypes = new LinkedHashMap<>();
        endUserTypes.put("ENDUSER", "I am the end user");
        endUserTypes.put("RESELLER", "I am a Reseller, purchasing for my stockroom");
        endUserTypes.put("RESELLERENDUSER", "I am a Reseller, purchasing for a customer PO");
        endUserTypes.put("MANUFACTURER", "I am an Original Equipment Manufacturer");
		final BHGEShippingAddressForm shippingAddressForm = new BHGEShippingAddressForm();
        shippingAddressForm.setEndUserTypes(endUserTypes);
        checkoutWsDTO.setBhgeEndUserAddressForm(getDataMapper().map(shippingAddressForm, BHGEShippingAddressFormDataWsDTO.class));
        
        if (Boolean.FALSE.equals(isAnonymoususer))
        {
            String sessionSoldTo1 = "";
            String soldToName = "";
            if(null != currentUser.getDefaultB2BUnit()) {
                sessionSoldTo1 = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
                soldToName = currentUser.getDefaultB2BUnit().getName();
            }
            //final String sessionSoldTo1 = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getUid();
            final AddressData soldToAddress = bhgeUserProfileFacade.getSoldToAddress(sessionSoldTo1);
            checkoutWsDTO.setSoldToAddress(getDataMapper().map(soldToAddress, AddressWsDTO.class, "FULL"));
            // model.addAttribute("soldToAddress", soldToAddress);
            // TODO : Check the below sessionSoldToName assignment correctly
            checkoutWsDTO.setSessionSoldToName(StringEscapeUtils.escapeHtml4(soldToName + "-" + sessionSoldTo1));
            //model.addAttribute("sessionSoldToName", sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO_NAME));
            final boolean soldtoBlock = bhgeCartFacade.getSoldtoBlockDetails();
            checkoutWsDTO.setSoldtoBlocksCheck((soldtoBlock ? "YES" : "NO"));
            // model.addAttribute("soldtoBlocksCheck", (soldtoBlock ? "YES" : "NO"));
            LOG.info("bhgeCartFacade.getSoldtoBlockDetails() - " + soldtoBlock);
            if (soldtoBlock)
            {
                // GlobalMessages.addInfoMessage(model, "checkout.info.order.block");
            }
        }
        else
        {
            //Adding address forms onto the model
            /*final Map<String, String> endUserTypes = new LinkedHashMap<>();
            endUserTypes.put("ENDUSER", "I am the end user");
            endUserTypes.put("RESELLER", "I am a Reseller, purchasing for my stockroom");
            endUserTypes.put("RESELLERENDUSER", "I am a Reseller, purchasing for a customer PO");
            endUserTypes.put("MANUFACTURER", "I am an Original Equipment Manufacturer");
			final BHGEShippingAddressForm shippingAddressForm = new BHGEShippingAddressForm();
            shippingAddressForm.setEndUserTypes(endUserTypes);*/
            final BHGEAddressForm addressForm = new BHGEAddressForm();

            checkoutWsDTO.setCountryData(getCountriesAsWsDTO(bhgeCheckoutFacade.getBillingCountries()));
            checkoutWsDTO.setRegions(getRegionsAsWsDTO(getI18NFacade().getRegionsForCountryIso(DEFAULT_COUNTRY_ISO)));
            checkoutWsDTO.setBhgeShippingAddressForm(getDataMapper().map(addressForm, BHGEAddressFormWsDTO.class, "FULL"));
            checkoutWsDTO.setBhgeSoldtoAddressForm(getDataMapper().map(addressForm, BHGEAddressFormWsDTO.class, "FULL"));
            //checkoutWsDTO.setBhgeEndUserAddressForm(getDataMapper().map(shippingAddressForm, BHGEShippingAddressFormDataWsDTO.class));
            // model.addAttribute(COUNTRY_DATA_ATTR, bhgeCheckoutFacade.getBillingCountries());
            // model.addAttribute(REGIONS_ATTR, getI18NFacade().getRegionsForCountryIso(DEFAULT_COUNTRY_ISO));
            // model.addAttribute(BHGE_SHIPPING_ADDRESS_FORM_ATTR, addressForm);
            // model.addAttribute(BHGE_SOLDTO_ADDRESS_FORM_ATTR, addressForm);
            // model.addAttribute(BHGE_ENDUSER_ADDRESS_FORM_ATTR, shippingAddressForm);
        }
        try
        {
            populateCommonModelAttributes(checkoutWsDTO, cartData, new AddressFormWsDTO(),sanitizedGuestSalesArea ,checkoutCartId,currentUser,isAnonymoususer);
        }
        catch (final CalculationException e)
        {
            LOG.error("CalculationException at checkout " + e);
        }
       
         LOG.info( "=========================  Start Payment Trms===========================" );
        BHGESoldToData defaultSoldTo1= null;
        
        if (!isAnonymoususer)
        {
	        B2BUnitModel b2bUnit = null;
			
			b2bUnit = currentUser.getDefaultB2BUnit();
			defaultSoldTo1 = bhgeSoldToUtil.getBHGESoldToData(b2bUnit);
			//PaymentTermsDataWsDTO paymentTermsDataWsDTO =	getDataMapper().map(defaultSoldTo1,PaymentTermsDataWsDTO.class, "FULL")
			checkoutWsDTO.setPaymentTrms(getDataMapper().map(defaultSoldTo1.getPaymentTrms(),PaymentTermsDataWsDTO.class, "FULL"));
        }
        else if (currentUser instanceof UserModel && isAnonymoususer)
        {
        	defaultSoldTo1 = bhgeSoldToUtil.getDefaultB2BUnitUidOfGuestUser(sanitizedGuestSalesArea);
        	checkoutWsDTO.setPaymentTrms(getDataMapper().map(defaultSoldTo1.getPaymentTrms(),PaymentTermsDataWsDTO.class, "FULL"));
        }
        LOG.info( "=========================  Finished Payment Trms===========================" );
        
        return checkoutWsDTO;
    }

    protected PaymentTypeFormWsDTO preparePaymentTypeForm(final CartData cartData, final GEEdgeCustomerModel currentUser, Boolean isAnonymoususer)
    {
        final PaymentTypeFormWsDTO paymentTypeForm = new PaymentTypeFormWsDTO();
        LOG.info(
                "=========================Inside preparePaymentTypeForm===========================" + currentUser.getUid());
        // set payment type
        if (cartData.getPaymentType() != null && StringUtils.isNotBlank(cartData.getPaymentType().getCode()))
        {
            paymentTypeForm.setPaymentType(cartData.getPaymentType().getCode());
        }
        else
        {
            paymentTypeForm.setPaymentType(CheckoutPaymentType.ACCOUNT.getCode());
        }
        LOG.info("Current user is =======" + currentUser.getUid());
        LOG.info("Is anonymous user is =======" + isAnonymoususer);

        // set purchase order number
        paymentTypeForm.setPurchaseOrderNumber(cartData.getPurchaseOrderNumber());

        //set customer purchase order number
        paymentTypeForm.setEndCustomerOrderNumber(cartData.getEndCustomerPo());

        if (cartData.getPaymentType() != null && StringUtils.isNotBlank(cartData.getPaymentType().getCode()))
        {
            paymentTypeForm.setPaymentType(cartData.getPaymentType().getCode());
        }
        else
        {
            paymentTypeForm.setPaymentType(CheckoutPaymentType.ACCOUNT.getCode());
        }
        paymentTypeForm.setEndUserNumber(cartData.getEndUserNumber());

        return paymentTypeForm;
    }

    @SuppressWarnings("boxing")
    protected void populateCommonModelAttributes(final CheckoutWsDTO checkoutWsDTO, final CartData cartData, final AddressFormWsDTO addressForm, String guestSaleArea, String checkoutCartId, final GEEdgeCustomerModel currentUser, Boolean isAnonymoususer)
            throws CMSItemNotFoundException, CalculationException
    {
        //Adding for DSc Commerce
        // TODO : check the below line and which is for below commented line
        BHGESoldToData defaultSoldTo1 = null;
        if(!currentUser.getUid().equalsIgnoreCase("anonymous")) {
        	defaultSoldTo1 = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
        }
        else {
        	//TODO : To be received in checkoutWSDTO and passed into getDefaultB2BUnitUidOfGuestUser() method, hard coding for testing purpose
        	defaultSoldTo1 = bhgeSoldToUtil.getDefaultB2BUnitUidOfGuestUser(guestSaleArea);
        }
        // = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUser();
        // final BHGESoldToData defaultSoldTo1 = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");

        final List<ShippingCarrierMethodData> prepayCarrierTypes = bhgeCheckoutFacade.retriveCarrierMethods("prepay_add");
        final List<ShippingCarrierMethodData> collectCarrierTypes = bhgeCheckoutFacade.retriveCarrierMethods("collect");

        checkoutWsDTO.setPrepayAddTypes(getShippingCarrierMethodDataWsDTOList(prepayCarrierTypes));
        checkoutWsDTO.setCollectTypes(getShippingCarrierMethodDataWsDTOList(collectCarrierTypes));
        checkoutWsDTO.setDefaultSoldTo(getDataMapper().map(defaultSoldTo1, BHGESoldToDataWsDTO.class, "FULL"));
        // model.addAttribute("prepay_addTypes", prepayCarrierTypes);
        // model.addAttribute("collectTypes", collectCarrierTypes);
        // model.addAttribute("defaultSoldTo", defaultSoldTo1);
        // model.addAttribute("containsDefaultShipToAddress", true);
        final List<RegionData> listOfRegions = bhgeUserProfileFacade.getRegionsForCountryCode(BhgeFacadesConstants.US_COUNTRY_CODE);
        checkoutWsDTO.setListOfRegions(getRegionsAsWsDTO(listOfRegions));
        // model.addAttribute("listOfRegions", listOfRegions);
        CartModel cart = bhgeCartService.getCartByCodeForDSstore(cartData.getCode());
        AddressData defaultShipToData = null;
        Boolean isAPACSalesOrg =false;
        isAPACSalesOrg = bhgeUserProfileFacade.getAPACstatusforSalesOrg();
        if(isAPACSalesOrg) {
            LOG.info("APAC sales in checkout "+isAPACSalesOrg);
                defaultShipToData = bhgeUserProfileFacade.getDefaultShipToforAPAC(isAPACSalesOrg,currentUser,defaultSoldTo1);
        }
        else {
                if (currentUser.getDefaultShipTo() != null && StringUtils.equalsIgnoreCase(currentUser.getDefaultB2BUnit().getUid(), ((B2BUnitModel) currentUser.getDefaultShipTo().getOwner()).getUid())) {
                    defaultShipToData = addressConverter.convert(currentUser.getDefaultShipTo());
                    Boolean isSapBlocked = false;
                    if(null != currentUser.getDefaultShipTo().getSapCustomerID()){
                       isSapBlocked = bhgeSoldToUtil.getSoldToBlockStatus(currentUser.getDefaultShipTo().getSapCustomerID());
                    }
                    defaultShipToData.setIsSapBlocked(isSapBlocked);
                    if (null != currentUser.getDefaultShipTo().getCountry()) {
                        defaultShipToData.setRisk(currentUser.getDefaultShipTo().getCountry().getRisk());
                        defaultShipToData.setSanctioned(currentUser.getDefaultShipTo().getCountry().getSanctioned());
                    }

                }
            if (defaultShipToData == null) {
                LOG.info("populateCommonModelAttributes:: defaultShipToData is null");
                defaultShipToData = cartData.getDeliveryAddress();
                defaultShipToData = bhgeCartFacade.validateDeliveryAddress(defaultShipToData, cartData);
                if (null != cart && null != cart.getDeliveryAddress()) {
                    defaultShipToData.setRisk(cart.getDeliveryAddress().getCountry().getRisk());
                    defaultShipToData.setSanctioned(cart.getDeliveryAddress().getCountry().getSanctioned());
                }
            }
        }
       
        //LOG.debug("============ Inside Choose API cart shipping address is ============="+defaultShipToData);
        String incoTerm1 = null;
        String incoTerm2 = null;
        if(!currentUser.getUid().equalsIgnoreCase("anonymous")) {
        	incoTerm1 = bhgeCartFacade.getIncoterm1ForWs(defaultShipToData, defaultSoldTo1,guestSaleArea);
        	incoTerm2 = bhgeCartFacade.getIncoterm2(defaultShipToData, defaultSoldTo1);
            LOG.info("============ DS OCC Inside Choose API  incoTerm1 and incoTerm2 is =============");

        }
        else {
        	incoTerm1 = defaultSoldTo1.getIncoterms1(); // for guest user
        	incoTerm2 = defaultSoldTo1.getIncoterms2(); // for guest user
        	LOG.info("============ Inside Choose API anonymous incoTerm1 and incoTerm2 is =============");
        }
        //Code for getting Inco_Terms from Ship to
        if(!currentUser.getUid().equalsIgnoreCase("anonymous")) {
        	String incotermName = bhgeCartFacade.getIncotermModel(defaultShipToData, defaultSoldTo1);
        	checkoutWsDTO.setShipToIncotrmName(incotermName!=null?incotermName:defaultSoldTo1.getIncoTrmsName());
        }
        else {
        	//TODO : To be set once the incotrms for guest user is set in soldtoutil
        	//checkoutWsDTO.setShipToIncotrmName(defaultSoldTo1.getIncotrms1().getName());	//for guest user
        }
        
        checkoutWsDTO.setShipToIncoterm1(incoTerm1);
        checkoutWsDTO.setShipToIncoterm2(incoTerm2);
        // model.addAttribute("shipToIncotrmName", bhgeCartFacade.getIncotermModel(defaultShipToData, defaultSoldTo1));
        // model.addAttribute("shipToIncoterm1", incoTerm1);
        // model.addAttribute("shipToIncoterm2", incoTerm2);
        // Checking and populating the defaultShipToAddress

        if (defaultShipToData == null)
        {
            try {
               // If default ship to is not set, find the sold to and get the ship to from the address of sold to
           		LOG.debug("Default Ship to is not set to customer. Trying to fetch the ship to address from the address list assinged to the sold to in session By DE");
           		defaultShipToData = bhgeUserProfileFacade.getDefaultShipToAddressFromSoldTo(defaultSoldTo1.getUid());
            } catch (RuntimeException re) {
                LOG.error("Exception while fetching the ShiptoAddress from SoldTo by DE value");
                re.printStackTrace();
            }
        }
        // defaultShipToAddress check complete
        
        // Payer and Bill To saving to checkoutWsDTO
        if (!isAnonymoususer) {
            AddressData payerAddressData = bhgeUserProfileFacade.getPayerAddressFromCurrentUser();
            if (payerAddressData != null) {
                checkoutWsDTO.setPayerAddress(getDataMapper().map(payerAddressData, AddressWsDTO.class, "FULL"));
                cartData.setPayerAddress(payerAddressData);
            }

            AddressData billToAddressData = bhgeUserProfileFacade.getBillToAddressFromCurrentUser();
            if (billToAddressData != null) {
                checkoutWsDTO.setBillToAddress(getDataMapper().map(billToAddressData, AddressWsDTO.class, "FULL"));

            }
        }
        
        if (defaultShipToData!= null)
        {
            //LOG.info("CompanyName: " + defaultShipToData.getCompanyName() + " SapCustomerID: " + defaultShipToData.getSapCustomerID());
			checkoutWsDTO.setDefaultShiptToAddress(getDataMapper().map(defaultShipToData, AddressWsDTO.class, "FULL"));
            // model.addAttribute("defaultShiptToAddress", defaultShipToData);
            cartData.setDeliveryAddress(defaultShipToData);


            //Code for Disabling Carrier based on Inco_Terms
            final String incoterms = Config.getParameter("INCOTERMS_LIST");
            final List<String> incoterm_list = Arrays.asList(incoterms.split("\\s*,\\s*"));
            if (incoterm_list.contains(bhgeCartFacade.getIncoterm1ForWs(defaultShipToData, defaultSoldTo1,guestSaleArea)))
            {
                checkoutWsDTO.setDisableShippingOptions("true");
                LOG.info("============ Inside Choose API setDisableShippingOptionTrue =============");
                // model.addAttribute("disableShippingOptions", true);
            }
            else
            {
                checkoutWsDTO.setDisableShippingOptions("false");
                // model.addAttribute("disableShippingOptions", false);
            }
        }
        else
        {
        	if(LOG.isDebugEnabled()) {
        		LOG.debug("================= Setting containsDefaultShipToAddress to FALSE =====================");
        	}
            checkoutWsDTO.setContainsDefaultShipToAddress("false");
            // model.addAttribute("containsDefaultShipToAddress", false);
        }

        final AddressData defaultEndUserData = cartData.getEnduserAddress();

        if(null!=cart && null!=cart.getRMAEndUserAddress()) {
            System.out.println("RISK - " + cart.getRMAEndUserAddress().getCountry().getRisk());
            defaultEndUserData.setRisk(cart.getRMAEndUserAddress().getCountry().getRisk());
            defaultEndUserData.setSanctioned(cart.getRMAEndUserAddress().getCountry().getSanctioned());
        }

        if (defaultEndUserData != null)
        {
            checkoutWsDTO.setDefaultEndUserAddress(getDataMapper().map(defaultEndUserData, AddressWsDTO.class, "FULL"));
            // model.addAttribute("defaultEndUserAddress", defaultEndUserData);
            cartData.setEnduserAddress(defaultEndUserData);
        }
        else
        {
            checkoutWsDTO.setContainsDefaultEndUserAddress("false");
            // model.addAttribute("containsDefaultEndUserAddress", false);
        }

        if (cartData.getEntries() != null && !cartData.getEntries().isEmpty())
        {
            for (final OrderEntryData entry : cartData.getEntries())
            {
                final String productCode = entry.getProduct().getCode();
                final ProductData product = productFacade.getProductForCodeAndOptions(productCode,
                        Arrays.asList(ProductOption.BASIC, ProductOption.PRICE));
                entry.setProduct(product);
                subQuantity = subQuantity + (entry.getQuantity());
            }
        }

        cartData.setNotes(cartData.getShippingRemarks());

         if(null !=cart.getCurrency() ){
             LOG.info("cart currency in checkout" + cart.getCurrency().getIsocode());
                checkoutWsDTO.setCurrencyISO(cart.getCurrency().getIsocode());
                checkoutWsDTO.setCurrencyFormattedValue(cart.getCurrency().getSymbol());
        }

        else if (null != defaultSoldTo1 && null != defaultSoldTo1.getCurrency())
        {
            checkoutWsDTO.setCurrencyISO(defaultSoldTo1.getCurrency().getIsocode());
            checkoutWsDTO.setCurrencyFormattedValue(defaultSoldTo1.getCurrency().getSymbol());
        }
        /*if (null != ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency())
        {
            model.addAttribute("currencyISO",
                    ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency().getIsocode());
            model.addAttribute("currencyFormattedValue",
                    ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency().getSymbol());
        }*/

        checkoutWsDTO.setAddressForm(addressForm);
        // model.addAttribute("addressForm", addressForm);

        checkoutWsDTO.setShowSaveToAddressBook(Boolean.TRUE);
        // model.addAttribute(SHOW_SAVE_TO_ADDRESS_BOOK_ATTR, Boolean.TRUE);
        checkoutWsDTO.setMetaRobots("noindex,nofollow");
        // model.addAttribute("metaRobots", "noindex,nofollow");
        if (!isAnonymoususer)
        {
            final AddressData defaultSoldToData = bhgeUserProfileFacade.getDefaultSoldToFromCurrentUser();
            if (defaultSoldToData != null)
            {
                checkoutWsDTO.setDefaultSoldToAddress(getDataMapper().map(defaultSoldToData, AddressWsDTO.class, "FULL"));
                // model.addAttribute("defaultSoldToAddress", defaultSoldToData);
            }

            final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(currentUser.getUid());
            //Setting Notification Mails if account is set
            checkoutWsDTO.setOrderConfirmationMailAttr(bhgeCustomerData.getSendSalesOrderEmail());
            checkoutWsDTO.setShipNotificationMailAttr(bhgeCustomerData.getSendShippingNotificationEmail());
            checkoutWsDTO.setSendInvoiceMailAttr(bhgeCustomerData.getSendInvoiceEmail());
             // Added SOA New fields
            checkoutWsDTO.setInvoiceContact(bhgeCustomerData.getInvoiceContact());
            checkoutWsDTO.setInvoicePhone(bhgeCustomerData.getInvoicePhone());
            checkoutWsDTO.setSoaContact(bhgeCustomerData.getSoaContact());
            checkoutWsDTO.setSoaPhone(bhgeCustomerData.getSoaPhone());
            /*model.addAttribute("orderConfirmationMailAttr", bhgeCustomerData.getSendSalesOrderEmail());
            model.addAttribute("shipNotificationMailAttr", bhgeCustomerData.getSendShippingNotificationEmail());
            model.addAttribute("sendInvoiceMailAttr", bhgeCustomerData.getSendInvoiceEmail());*/
            if (defaultShipToData == null)
            {
                final String userSalesRegion = bhgeUserProfileFacade.getUserDefaultSalesRegion();
                //Condition 1: Check if the default ship to is set for customer and get the default ship to from the customer
                LOG.debug("Check if the default ship to is assigned to customer ");
                if (bhgeCustomerData.getDefaultSoldTo() != null && bhgeCustomerData.getDefaultShipTo() != null
                        && bhgeCustomerData.getDefaultSoldTo().equals(defaultSoldTo1.getUid()))
                {
                    final String defaultSoldToChild = bhgeCustomerData.getDefaultSoldTo() + "_" + userSalesRegion;
                    defaultShipToData = bhgeUserProfileFacade.getDefaultShipto(bhgeCustomerData.getDefaultShipTo(),
                            defaultSoldToChild);
                }

                //Condition 2:If default ship to is not set find the sold to and get the ship to from the address of sold to
                if (defaultShipToData == null)
                {
                    LOG.debug(
                            "Default Ship to is not set to customer. Trying to fetch the ship to address from the address list assinged to the sold to in session");
                    final String childSoldToName = defaultSoldTo1.getUid() + "_" + userSalesRegion;
                    defaultShipToData = bhgeUserProfileFacade.getSoldToAddress(childSoldToName);
                }
            }
            if (cartData.getOrderConfirmation() == null && bhgeCustomerData.getSendSalesOrderEmail() != null)
            {
                cartData.setOrderConfirmation(bhgeCustomerData.getSendSalesOrderEmail());
            }

            if (cartData.getShipNotificationEmail() == null && bhgeCustomerData.getSendShippingNotificationEmail() != null)
            {
                cartData.setShipNotificationEmail(bhgeCustomerData.getSendShippingNotificationEmail());
            }

            if (cartData.getInvoiceEmail() == null && bhgeCustomerData.getSendInvoiceEmail() != null)
            {
                cartData.setInvoiceEmail(bhgeCustomerData.getSendInvoiceEmail());
            }
            if (cartData.getShipToContactName() == null && bhgeCustomerData.getShippingContactName() != null)
            {
                cartData.setShipToContactName(bhgeCustomerData.getShippingContactName());
            }
            if (cartData.getShipToContactPhone() == null && bhgeCustomerData.getShippingContactNumber() != null)
            {
                cartData.setShipToContactPhone(bhgeCustomerData.getShippingContactNumber());
            }
            LOG.info("populateCommonModelAttributes::DeliveryOptions in cartData: " + cartData.getDeliveryOptions() + "DeliveryOptions in bhgeCustomerData: " + bhgeCustomerData.getDeliveryOptions());
            if (cartData.getDeliveryOptions() == null && bhgeCustomerData.getDeliveryOptions() != null)
            {
                cartData.setDeliveryOptions(bhgeCustomerData.getDeliveryOptions());
            }
            if (cartData.getDeliveryAccount() == null && bhgeCustomerData.getDeliveryAccount() != null)
            {
                cartData.setDeliveryAccount(bhgeCustomerData.getDeliveryAccount());
            }
            if (cartData.getDeliveryCarrier() == null && bhgeCustomerData.getDeliveryCarrier() != null
                    && StringUtils.isNotBlank(cartData.getCartType())
                    && cartData.getCartType().equalsIgnoreCase(GeneratedBhgeCoreConstants.Enumerations.GEEdgeCartType.NONFILM))
            {
                cartData.setDeliveryCarrier(bhgeCustomerData.getDeliveryCarrier());
            }
        }
        bhgeCheckoutFacade.updateCheckoutCartWs(cartData,checkoutCartId);
        bhgeCheckoutFacade.recalculate();
		if (Objects.isNull(cartData.getCommerceType()) || cartData.getCommerceType() != "RETURNS")
		{
			bhgeCheckoutFacade.updatevouchersFromCartData(cartData);
		}
        checkoutWsDTO.setCartData(getDataMapper().map(cartData, CartWsDTO.class, "FULL"));
        // model.addAttribute("cartData", cartData);
        prepareDataForPage(checkoutWsDTO);
        // storeCmsPageInModel(model, getContentPageForLabelOrId(MULTI_CHECKOUT_SUMMARY_CMS_PAGE_LABEL));
        // setUpMetaDataForContentPage(model, getContentPageForLabelOrId(MULTI_CHECKOUT_SUMMARY_CMS_PAGE_LABEL));
    }

    private List<ShippingCarrierMethodDataWsDTO> getShippingCarrierMethodDataWsDTOList(List<ShippingCarrierMethodData> prepayCarrierTypes) {
        List<ShippingCarrierMethodDataWsDTO> shippingCarrierMethodDataWsDTOList = new ArrayList<ShippingCarrierMethodDataWsDTO>();
        prepayCarrierTypes.forEach(shippingCarrierMethodData -> {
            shippingCarrierMethodDataWsDTOList.add(getDataMapper().map(shippingCarrierMethodData, ShippingCarrierMethodDataWsDTO.class, "FULL"));
                }
        );
        return shippingCarrierMethodDataWsDTOList;
    }

    // TODO : Need to verify the below logic and test completely.
    private List<RmaReturnCartDataWsDTO> getRmaReturnCartDataWsDTO(List<RmaReturnCartData> returnList) {
        List<RmaReturnCartDataWsDTO> rmaReturnCartDataWsDTOList = new ArrayList<RmaReturnCartDataWsDTO>();
        returnList.forEach(rmaReturnCartData -> {
                    rmaReturnCartDataWsDTOList.add(getDataMapper().map(rmaReturnCartData, RmaReturnCartDataWsDTO.class, "FULL"));
                }
        );
        return rmaReturnCartDataWsDTOList;
    }

    private List<CCPaymentInfoWsDTO> getCreditCardWsDTO(List<BHGECreditCardData> returnList) {
        List<CCPaymentInfoWsDTO> creditCardDataWsDTOList = new ArrayList<CCPaymentInfoWsDTO>();
        returnList.forEach(creditCardData -> {
            creditCardDataWsDTOList.add(getDataMapper().map(creditCardData, CCPaymentInfoWsDTO.class, "FULL"));
                }
        );
        return creditCardDataWsDTOList;
    }

    protected void prepareDataForPage(final CheckoutWsDTO checkoutWsDTO) throws CMSItemNotFoundException
    {
        checkoutWsDTO.setIsOmsEnabled(Boolean.valueOf(getSiteConfigService().getBoolean("oms.enabled", false)));
        checkoutWsDTO.setSupportedCountries(getCountriesAsWsDTO(getCheckoutFacade().getCountries(CountryType.SHIPPING)));
        checkoutWsDTO.setExpressCheckoutAllowed(Boolean.valueOf(getCheckoutFacade().isExpressCheckoutAllowedForCart()));
        checkoutWsDTO.setTaxEstimationEnabled(Boolean.valueOf(getCheckoutFacade().isTaxEstimationEnabledForCart()));
        checkoutWsDTO.setSupportedBillingCountries(getCountriesAsWsDTO(getCheckoutFacade().getCountries(CountryType.BILLING)));
        // model.addAttribute("isOmsEnabled", Boolean.valueOf(getSiteConfigService().getBoolean("oms.enabled", false)));
        // model.addAttribute("supportedCountries", getCheckoutFacade().getCountries(CountryType.SHIPPING));
        // model.addAttribute("expressCheckoutAllowed", Boolean.valueOf(getCheckoutFacade().isExpressCheckoutAllowedForCart()));
        // model.addAttribute("taxEstimationEnabled", Boolean.valueOf(getCheckoutFacade().isTaxEstimationEnabledForCart()));
        // model.addAttribute("supportedBillingCountries", getCheckoutFacade().getCountries(CountryType.BILLING));
    }

    private List<CountryWsDTO> getCountriesAsWsDTO(List<CountryData> countries) {
        List<CountryWsDTO> countryWsDTOList= new ArrayList<CountryWsDTO>();
        countries.forEach(countryData -> countryWsDTOList.add(getDataMapper().map(countryData, CountryWsDTO.class, "FULL")));
        return countryWsDTOList;
    }

    private List<RegionWsDTO> getRegionsAsWsDTO(List<RegionData> regions) {
        List<RegionWsDTO> regionWsDTOList= new ArrayList<RegionWsDTO>();
        regions.forEach(regionData -> regionWsDTOList.add(getDataMapper().map(regionData, RegionWsDTO.class, "FULL")));
        return regionWsDTOList;
    }

    /*protected PaymentTypeForm preparePaymentTypeForm(final CartData cartData)
    {
        final PaymentTypeForm paymentTypeForm = new PaymentTypeForm();
        LOG.info(
                "=========================Inside preparePaymentTypeForm===========================" + userService.getCurrentUser());
        // set payment type
        if (cartData.getPaymentType() != null && StringUtils.isNotBlank(cartData.getPaymentType().getCode()))
        {
            paymentTypeForm.setPaymentType(cartData.getPaymentType().getCode());
        }
        else
        {
            paymentTypeForm.setPaymentType(CheckoutPaymentType.ACCOUNT.getCode());
        }
        LOG.info("Current user is =======" + userService.getCurrentUser());
        LOG.info("Is anonymous user is =======" + userService.isAnonymousUser(userService.getCurrentUser()));

        // set purchase order number
        paymentTypeForm.setPurchaseOrderNumber(cartData.getPurchaseOrderNumber());

        //set customer purchase order number
        paymentTypeForm.setEndCustomerOrderNumber(cartData.getEndCustomerPo());

        if (cartData.getPaymentType() != null && StringUtils.isNotBlank(cartData.getPaymentType().getCode()))
        {
            paymentTypeForm.setPaymentType(cartData.getPaymentType().getCode());
        }
        else
        {
            paymentTypeForm.setPaymentType(CheckoutPaymentType.ACCOUNT.getCode());
        }
        paymentTypeForm.setEndUserNumber(cartData.getEndUserNumber());

        return paymentTypeForm;
    }*/


    private Map<String, String> showPoDocByLocation(final CartModel cartModel)
    {
        final Map<String, String> locationMap = new HashMap<String, String>();
        final List<ReturnPOModel> returnPoList = cartModel.getReturnPO();
        if (returnPoList != null && returnPoList.size() > 0)
        {
            for (final ReturnPOModel poModel : returnPoList)
            {
                if (poModel.getReturnLocation() != null)
                {
                    if (locationMap.containsKey(poModel.getReturnLocation()))
                    {
                        locationMap.put(poModel.getReturnLocation(), locationMap.get(poModel.getReturnLocation()));
                    }
                    else
                    {
                        final Collection<MediaModel> mList = poModel.getPoAttachments();
                        for (final MediaModel m : mList)
                        {
                            locationMap.put(poModel.getReturnLocation(), m.getRealFileName());
                        }
                    }
                }
            }
        }

        return locationMap;
    }

    private Map<String, String> showCartEntryByLocationAndPrice(final List<RmaReturnCartData> returnList)
    {
        final CartModel cartModel = bhgeCartService.getSessionCart();
        final Map<String, String> locationMap = new HashMap<String, String>();
        final Map<String, Double> priceMap = new HashMap<>();
        final List<String> entryPriceZero = new ArrayList<>();
        for (final RmaReturnCartData cartData : returnList)
        {


            if (priceMap.containsKey(cartData.getReturnLocation()) && cartData.getTotalPrice() != null)
            {
                priceMap.put(cartData.getReturnLocation(),
                        priceMap.get(cartData.getReturnLocation()) + cartData.getTotalPrice().getValue().doubleValue());
            }
            else
            {
                priceMap.put(cartData.getReturnLocation(), cartData.getTotalPrice().getValue().doubleValue());
            }
            if (!(cartData.getTotalPrice().getValue().doubleValue() > 0))
            {
                entryPriceZero.add(cartData.getReturnLocation());
            }
        }
        final Set<String> keys = priceMap.keySet();
        for (final String key : keys)
        {
            if (entryPriceZero.contains(key))
            {
                priceMap.replace(key, 0.0);
            }
        }

        for (final Map.Entry<String, Double> entry : priceMap.entrySet())
        {
            final String location = entry.getKey();
            final PriceData price =bhgePriceAvailabilityUtils.populatePrice(priceMap.get(location), cartModel.getCurrency());
            if (price != null)
            {
                if (price.getValue().doubleValue() > 0)
                {
                    locationMap.put(location, price.getFormattedValue());
                }
                else
                {
                    locationMap.put(location, "To be quoted");
                }
            }
        }
        return locationMap;
    }


    private Map<String, Integer> showCartEntryByLocation(final List<RmaReturnCartData> returnList)
    {

        final Map<String, Integer> locationMap = new HashMap<String, Integer>();
        for (final RmaReturnCartData cartData : returnList)
        {


            if (locationMap.containsKey(cartData.getReturnLocation()))
            {
                locationMap.put(cartData.getReturnLocation(), locationMap.get(cartData.getReturnLocation()) + 1);
            }
            else
            {
                locationMap.put(cartData.getReturnLocation(), 1);
            }
        }
        return locationMap;
    }
    
    
    
    
    @RequestMapping(value = "/{checkoutCartId}/address/{searchCode}", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "searchAddress", summary = "Get shipping address details.", description = "Returns addresses.")
    @ApiBaseSiteIdAndUserIdParam
    public AddressListWsDTO searchAddressByCode(@Parameter(description = "Search Code identifier", required = true) @PathVariable final String searchCode,
                                                @Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
                                                @RequestParam(value="state", defaultValue = "companyAsc") String state,
                                                @Parameter(description = "is a shipto or enduser address flag", required = false) @RequestParam(defaultValue = "false") final Boolean shipTo)
    {
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        String defaultSoldTo = null;
        B2BUnitModel b2bUnitModel = currentUser.getDefaultB2BUnit();
        if(currentUser != null && b2bUnitModel != null && b2bUnitModel.getUid() != null) {
            defaultSoldTo = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
        }
        GetAddressFormData addressFormData = new GetAddressFormData();
        //String defaultSoldToName = currentUser.getDefaultB2BUnit().getName();
        addressFormData.setB2bUnit(defaultSoldTo);
        addressFormData.setPageSize(DsoccConstants.MAX_PAGE_SIZE);
        addressFormData.setPageNo("0");
        addressFormData.setState(StringEscapeUtils.escapeHtml4(state));

        if(StringUtils.isNotEmpty(searchCode) && StringUtils.isNotBlank(searchCode)) {
            addressFormData.setZipCode(StringEscapeUtils.escapeHtml4(searchCode));
        }

        List<AddressData> addressDataList = bhgeUserProfileFacade.getAddressForSalesAreaWs(addressFormData, false,shipTo);
        List<AddressWsDTO> shippingAddressWsDTOList = new ArrayList<>();
        AddressListWsDTO addressListWsDTO = new AddressListWsDTO();
        if(addressDataList != null)
        {
            for (AddressData shippingAddressData : addressDataList)
            {
                AddressWsDTO addressdto = new AddressWsDTO();
                addressdto = getDataMapper().map(shippingAddressData, AddressWsDTO.class);
                shippingAddressWsDTOList.add(addressdto);
            }
            addressListWsDTO.setAddresses(shippingAddressWsDTOList);
        }
        else
        {
            if(LOG.isDebugEnabled()) {
                LOG.debug("Shipping Address list is empty");
            }
            addressListWsDTO.setAddresses(Collections.emptyList());
        }
        return addressListWsDTO;
    }

    //Search address in shipping address pop up - end

    
    

    // select address on shipping address pop up - start

    @RequestMapping(value = "/{checkoutCartId}/ship-address/select", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "selectShippingAddress", summary = "Select shipping address.", description = "Sets new shipping address")
    @ApiBaseSiteIdAndUserIdParam
    public AddressWsDTO doSelectDeliveryAddress(@RequestParam("selectedAddressCode")
                                                final String selectedAddressCode, @RequestParam(value="sapCustomerID", required = false) String sapCustomerID,
                                                @RequestParam(value="deliveryPoint", required = false) String deliveryPoint,
                                                @Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId)
    {
//		final ValidationResults validationResults = getCheckoutStep().validate(redirectAttributes);
        CartData cartData = bhgeCheckoutFacade.getCheckoutCart();
//		if (getCheckoutStep().checkIfValidationErrors(validationResults))
//		{
//			return getCheckoutStep().onValidation(validationResults);
//		}
        AddressWsDTO addressDTO = new AddressWsDTO();

        if (StringUtils.isNotBlank(StringEscapeUtils.escapeHtml4(selectedAddressCode)))
        {
            //final AddressData selectedAddressData = getCheckoutFacade().getDeliveryAddressForCode(selectedAddressCode);
            final AddressData selectedAddressData = bhgeCheckoutFacade
                    .getDeliveryAddressForCodeWs(StringEscapeUtils.escapeHtml4(selectedAddressCode),StringEscapeUtils.escapeHtml4(checkoutCartId));
            cartData.setDeliveryAddress(selectedAddressData);
            LOG.info("Risk Data" + selectedAddressData.getRisk());
            LOG.info(" #################### Selected Delivery address at the Checkout page is "
                    + (StringUtils.isNotEmpty(selectedAddressData.getCompanyName()) ? selectedAddressData.getCompanyName() + "-" : "")
                    + " " + (StringUtils.isNotEmpty(selectedAddressData.getLine1()) ? selectedAddressData.getLine1() + "-" : "") + " "
                    + (StringUtils.isNotEmpty(selectedAddressData.getLine2()) ? selectedAddressData.getLine2() + "-" : "") + " "
                    + (StringUtils.isNotEmpty(selectedAddressData.getTown()) ? selectedAddressData.getTown() + "-" : "") + " "
                    + (selectedAddressData.getRegion() != null ? (StringUtils.isNotEmpty(selectedAddressData.getRegion().getName())
                    ? selectedAddressData.getRegion().getName() + "-"
                    : "") : "")
                    + " "
                    + (StringUtils.isNotEmpty(selectedAddressData.getCountry().getName())
                    ? selectedAddressData.getCountry().getName() + "-"
                    : "")
                    + " " + (StringUtils.isNotEmpty(selectedAddressData.getPostalCode()) ? selectedAddressData.getPostalCode() : "") +
                    " " + (selectedAddressData.getCountry()!=null ? selectedAddressData.getSanctioned() : ""));
            /*
             * final boolean hasSelectedAddressData = selectedAddressData != null; if (hasSelectedAddressData) {
             * setDeliveryAddress(selectedAddressData); }
             */
            try{
                populateDisableShippingOptions(null, selectedAddressData);
            }
            catch (RuntimeException ex){
                LOG.error("Exception occurred in populateDisableShippingOptions method" , ex);
                ex.printStackTrace();
            }
            addressDTO.setTitle(StringEscapeUtils.unescapeHtml4(selectedAddressData.getTitle()));
            addressDTO.setFirstName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getFirstName()));
            addressDTO.setLastName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getLastName()));
            addressDTO.setFormattedAddress(StringEscapeUtils.unescapeHtml4(selectedAddressData.getFormattedAddress()));
            addressDTO.setCompanyName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getCompanyName()));
            addressDTO.setLine1(StringEscapeUtils.unescapeHtml4(selectedAddressData.getLine1()));
            addressDTO.setLine2(StringEscapeUtils.unescapeHtml4(selectedAddressData.getLine2()));
            addressDTO.setTown(StringEscapeUtils.unescapeHtml4(selectedAddressData.getTown()));
            sapCustomerID = selectedAddressData.getSapCustomerID();
            addressDTO.setSapCustomerID(StringEscapeUtils.unescapeHtml4(sapCustomerID));
            addressDTO.setIsNuclear(selectedAddressData.getIsNuclear());
            deliveryPoint = selectedAddressData.getDeliveryPoint();
            addressDTO.setDeliveryPoint(StringEscapeUtils.unescapeHtml4(deliveryPoint));
            addressDTO.setCellphone(StringEscapeUtils.unescapeHtml4(selectedAddressData.getCellphone()));

            if(selectedAddressData.getSaveForFuture() != null) {
                addressDTO.setSaveForFuture(StringEscapeUtils.unescapeHtml4(selectedAddressData.getSaveForFuture().toString()));
            }

            RegionWsDTO region = new RegionWsDTO();
            if(selectedAddressData.getRegion() != null) {
                region.setIsocode(StringEscapeUtils.unescapeHtml4(selectedAddressData.getRegion().getIsocode()));
                region.setName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getRegion().getName()));
                region.setIsocodeShort(StringEscapeUtils.unescapeHtml4(selectedAddressData.getRegion().getIsocodeShort()));
                region.setCountryIso(StringEscapeUtils.unescapeHtml4(selectedAddressData.getRegion().getCountryIso()));
                addressDTO.setRegion(region);
            }

            CountryWsDTO country = new CountryWsDTO();
            if(selectedAddressData.getCountry() != null) {
                country.setName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getCountry().getName()));
                country.setIsocode(StringEscapeUtils.unescapeHtml4(selectedAddressData.getCountry().getIsocode()));
                addressDTO.setCountry(country);

            }
            addressDTO.setRisk(selectedAddressData.getRisk());
            addressDTO.setSanctioned(selectedAddressData.getSanctioned());
            addressDTO.setPostalCode(StringEscapeUtils.unescapeHtml4(selectedAddressData.getPostalCode()));
        }
        if (!bhgeCartFacade.isGuestUser())
        {
            final CartModel cartModel = bhgeCartFacade.getAvailabiltyDetailsForCart();
            cartData = bhgeCartDataConverter.convert(cartModel);
        }
        //model.addAttribute("cartData", cartData);
       // bhgeCheckoutFacade.updateCheckoutCart(cartData);
        bhgeCheckoutFacade.updateCheckoutCartWs(cartData,checkoutCartId);
        //return ControllerConstants.Views.Fragments.Checkout.SelctedDeliveryAddress;

        return getDataMapper().map(addressDTO, AddressWsDTO.class, DsoccConstants.FULL);

    }

    @SuppressWarnings("boxing")
    protected void populateDisableShippingOptions(final Model model, AddressData defaultShipToData) {
        //Adding for DSc Commerce
        final CustomerData customerData = customerFacade.getCurrentCustomer();
        final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());

        String defaultSoldTo1 = "";
        String soldToName = "";
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        if(null != currentUser.getDefaultB2BUnit()) {
            defaultSoldTo1 = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
            soldToName = currentUser.getDefaultB2BUnit().getName();
        }

        //final BHGESoldToData defaultSoldTo1 = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
        //model.addAttribute("defaultSoldTo", defaultSoldTo1);
        //AddressData defaultShipToData = cartData.getDeliveryAddress();
        final String userSalesRegion = bhgeUserProfileFacade.getUserDefaultSalesRegion();
        if (defaultShipToData == null)
        {
            //Condition 1: Check if the default ship to is set for customer and get the default ship to from the customer
            LOG.debug("Check if the default ship to is assigned to customer ");
            if (bhgeCustomerData.getDefaultSoldTo() != null && bhgeCustomerData.getDefaultShipTo() != null
                    && bhgeCustomerData.getDefaultSoldTo().equals(defaultSoldTo1))
            {
                final String defaultSoldToChild = bhgeCustomerData.getDefaultSoldTo() + "_" + userSalesRegion;
                defaultShipToData = bhgeUserProfileFacade.getDefaultShipto(bhgeCustomerData.getDefaultShipTo(), defaultSoldToChild);
            }

            //Condition 2:If default ship to is not set find the sold to and get the ship to from the address of sold to
            if (defaultShipToData == null)
            {
                LOG.debug(
                        "Default Ship to is not set to customer. Trying to fetch the ship to address from the address list assinged to the sold to in session");
                final String childSoldToName = defaultSoldTo1 + "_" + userSalesRegion;
                defaultShipToData = bhgeUserProfileFacade.getSoldToAddress(childSoldToName);
            }
        }
        /*
         * if (defaultShipToData != null) { model.addAttribute("defaultShiptToAddress",
         * defaultShipToData); //Code for Disabling Carrier based on Inco_Terms final
         * String incoterms = Config.getParameter("INCOTERMS_LIST"); final List<String>
         * incoterm_list = Arrays.asList(incoterms.split("\\s*,\\s*")); if
         * (incoterm_list.contains(bhgeCartFacade.getIncoterm1(defaultShipToData,
         * defaultSoldTo1))) { model.addAttribute("disableShippingOptions", true); }
         * else { model.addAttribute("disableShippingOptions", false); } } else {
         * model.addAttribute("containsDefaultShipToAddress", false); }
         */

    }

    //select address on shipping address pop up - end




    
    
    //End user address select - start

    @RequestMapping(value = "/{checkoutCartId}/enduser-address/select", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "selectEndUserAddress", summary = "Select End User address.", description = "Sets new end user address")
    @ApiBaseSiteIdAndUserIdParam
    public AddressWsDTO doSelectEnduserAddress(@RequestParam("selectedAddressCode")
                                               final String selectedAddressCode, @RequestParam(value="sapCustomerID", required = false) String sapCustomerID,
                                               @RequestParam(value="deliveryPoint", required = false) String deliveryPoint,
                                               @Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId)
    {
        //final ValidationResults validationResults = getCheckoutStep().validate(redirectAttributes);
        CartData cartData = bhgeCheckoutFacade.getCheckoutCart();
        //if (getCheckoutStep().checkIfValidationErrors(validationResults))
        //{
        //	return getCheckoutStep().onValidation(validationResults);
        //}
        AddressWsDTO addressDTO = new AddressWsDTO();
        if (StringUtils.isNotBlank(StringEscapeUtils.escapeHtml4(selectedAddressCode)))
        {
            final AddressData selectedAddressData = bhgeCheckoutFacade
                    .getEnduserAddressForCodeWs(StringEscapeUtils.escapeHtml4(selectedAddressCode),StringEscapeUtils.escapeHtml4(checkoutCartId));
            cartData.setEnduserAddress(selectedAddressData);
            LOG.info(" #################### Selected EndUser address at the Checkout page is "
                    + (StringUtils.isNotEmpty(selectedAddressData.getCompanyName()) ? selectedAddressData.getCompanyName() + "-" : "")
                    + " " + (StringUtils.isNotEmpty(selectedAddressData.getLine1()) ? selectedAddressData.getLine1() + "-" : "") + " "
                    + (StringUtils.isNotEmpty(selectedAddressData.getLine2()) ? selectedAddressData.getLine2() + "-" : "") + " "
                    + (StringUtils.isNotEmpty(selectedAddressData.getTown()) ? selectedAddressData.getTown() + "-" : "") + " "
                    + (selectedAddressData.getRegion() != null ? (StringUtils.isNotEmpty(selectedAddressData.getRegion().getName())
                    ? selectedAddressData.getRegion().getName() + "-"
                    : "") : "")
                    + " "
                    + (StringUtils.isNotEmpty(selectedAddressData.getCountry().getName())
                    ? selectedAddressData.getCountry().getName() + "-"
                    : "")
                    + " " + (StringUtils.isNotEmpty(selectedAddressData.getPostalCode()) ? selectedAddressData.getPostalCode() : ""));

            addressDTO.setTitle(StringEscapeUtils.unescapeHtml4(selectedAddressData.getTitle()));
            addressDTO.setFirstName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getFirstName()));
            addressDTO.setLastName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getLastName()));
            addressDTO.setFormattedAddress(StringEscapeUtils.unescapeHtml4(selectedAddressData.getFormattedAddress()));
            addressDTO.setCompanyName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getCompanyName()));
            addressDTO.setLine1(StringEscapeUtils.unescapeHtml4(selectedAddressData.getLine1()));
            addressDTO.setLine2(StringEscapeUtils.unescapeHtml4(selectedAddressData.getLine2()));
            addressDTO.setTown(StringEscapeUtils.unescapeHtml4(selectedAddressData.getTown()));
            sapCustomerID = selectedAddressData.getSapCustomerID();
            addressDTO.setSapCustomerID(StringEscapeUtils.unescapeHtml4(sapCustomerID));
            addressDTO.setIsNuclear(selectedAddressData.getIsNuclear());
            deliveryPoint = selectedAddressData.getDeliveryPoint();
            addressDTO.setDeliveryPoint(StringEscapeUtils.unescapeHtml4(deliveryPoint));
            addressDTO.setCellphone(StringEscapeUtils.unescapeHtml4(selectedAddressData.getCellphone()));

            if(selectedAddressData.getSaveForFuture() != null) {
                addressDTO.setSaveForFuture(StringEscapeUtils.unescapeHtml4(selectedAddressData.getSaveForFuture().toString()));
            }

            RegionWsDTO region = new RegionWsDTO();
            if(selectedAddressData.getRegion() != null) {
                region.setIsocode(StringEscapeUtils.unescapeHtml4(selectedAddressData.getRegion().getIsocode()));
                region.setName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getRegion().getName()));
                region.setIsocodeShort(StringEscapeUtils.unescapeHtml4(selectedAddressData.getRegion().getIsocodeShort()));
                region.setCountryIso(StringEscapeUtils.unescapeHtml4(selectedAddressData.getRegion().getCountryIso()));
                addressDTO.setRegion(region);
            }

            CountryWsDTO country = new CountryWsDTO();
            if(selectedAddressData.getCountry() != null) {
                country.setName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getCountry().getName()));
                country.setIsocode(StringEscapeUtils.unescapeHtml4(selectedAddressData.getCountry().getIsocode()));
                addressDTO.setCountry(country);
            }
            addressDTO.setRisk(selectedAddressData.getRisk());
            addressDTO.setSanctioned(selectedAddressData.getSanctioned());
            addressDTO.setPostalCode(StringEscapeUtils.unescapeHtml4(selectedAddressData.getPostalCode()));
        }
        if (!bhgeCartFacade.isGuestUser())
        {
            final CartModel cartModel = bhgeCartFacade.getAvailabiltyDetailsForCart();
            cartData = bhgeCartDataConverter.convert(cartModel);
        }

        return getDataMapper().map(addressDTO, AddressWsDTO.class, "FULL");

        /*
         * model.addAttribute("cartData", cartData); return
         * ControllerConstants.Views.Fragments.Checkout.SelectedEndUserDeliveryAddress;
         */
    }


    
    
    //End user address select - end
    @RequestMapping(value = "/{checkoutCartId}/getIncoTerms", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "getIncoTerms", summary = "Get Inco Terms", description = "Returns Inco Terms.")
    @ApiBaseSiteIdAndUserIdParam
    public IncoTermListWsDTO getIncoTermsForCheckout(@Parameter(description = "Base site identifier.", required = true) @PathVariable
                                                     final String baseSiteId,@Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId)
    {
        final String incoterms = Config.getParameter("INCOTERMS_LIST");
        final List<String> incoterm_list = Arrays.asList(incoterms.split("\\s*,\\s*"));
        List<IncotermsData> list = new ArrayList<>();
        List<IncotermsDataWsDTO> incoTermList = new ArrayList<>();
        for(String incoterm : incoterm_list) {
            IncotermsData incoTermsData = new IncotermsData();
            incoTermsData.setCode(incoterm);
            incoTermsData.setName(incoterm);
            list.add(incoTermsData);

            IncotermsDataWsDTO incoTermsDataWsDTO = new IncotermsDataWsDTO();
            incoTermsDataWsDTO = getDataMapper().map(incoTermsData, IncotermsDataWsDTO.class, DsoccConstants.FULL);
            incoTermList.add(incoTermsDataWsDTO);
        }
        IncoTermListWsDTO incoTermListWsDTO = new IncoTermListWsDTO();
        incoTermListWsDTO.setIncoTerms(incoTermList);
        return incoTermListWsDTO;
    }


    @RequestMapping(value = "/{checkoutCartId}/guest", method = RequestMethod.POST)
    @ResponseBody
    @Operation(operationId = "Guest checkout email", summary = "Guest checkout email", description = "Guest checkout email")
    @ApiBaseSiteIdAndUserIdParam
//    @ApiResponse(responseCode = "200", description = "List of customer's addresses")
	public ResponseEntity<String> doAnonymousCheckout(@RequestBody final GuestFormWsDTO form,@Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
			final BindingResult bindingResult, final Model model,
			final HttpServletRequest request, final HttpServletResponse response) throws CMSItemNotFoundException
	{
		GuestForm guestForm = new GuestForm();
    	guestForm.setEmail(form.getEmail());
		final String guestEmailID = StringEscapeUtils.escapeHtml4(form.getEmail());
		//Updating cart alternate email with guest email
		customersFacade.updateCartAlternateEmailWithGuestEmail(checkoutCartId, guestEmailID);
		return new ResponseEntity<>(processAnonymousCheckoutUserRequest(checkoutCartId, guestForm, bindingResult, model, request, response), HttpStatus.OK);
	}
	
	 
    protected String processAnonymousCheckoutUserRequest(final String checkoutCartId, final GuestForm form, final BindingResult bindingResult, 
    		final Model model, final HttpServletRequest request, final HttpServletResponse response) throws CMSItemNotFoundException { 
    	try {
    		customersFacade.createGuestUserForAnonymousCheckout(checkoutCartId, form.getEmail(), getMessageSource().
    				getMessage("text.guest.customer", null, getI18nService().getCurrentLocale()));
    		return "OK"; 
    	} 
    	catch (final DuplicateUidException e) { 
    		LOG.debug("guest registration failed.");
    		e.printStackTrace(); 
    	} 
    	return null; 
    }
	 
    
    @RequestMapping(value = "/{checkoutCartId}/addresses", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_ATOM_XML_VALUE})
    @ResponseBody
    @Operation(operationId = "Shipping Addresses for b2bunit in cart", summary = "Get shipping address details for child b2b unit in cart", description = "Returns addresses for child b2bunit")
    @ApiBaseSiteIdAndUserIdParam
    @ApiResponse(responseCode = "200", description = "List of customer's addresses")
    public AddressListWsDTO getAddresses(@Parameter(description = "Base site identifier.", required = true) @PathVariable
                                         final String baseSiteId, @Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
                                         @Parameter(description = "isShipTo or endUser address flag", required = false) @RequestParam(defaultValue = "false") final boolean shipTo,
                                         @Parameter(description = "enable Sorting",required = false) @RequestParam(defaultValue = "true") final boolean sort)
    {
        final boolean accountPageFlag = false;
        String user = StringUtils.EMPTY;
        BHGESoldToData soldToData = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
        LOG.info("soldToData: "+ soldToData);
//        SearchPageData<AddressData> searchPageData = new SearchPageData<AddressData>();
        GetAddressFormData addressFormData = new GetAddressFormData();
        addressFormData.setPageNo("0");
        addressFormData.setPageSize("1000");
        addressFormData.setZipCode("");
        addressFormData.setState("");
        addressFormData.setB2bUnit(soldToData.getUid());
        final SearchPageData<AddressData> searchPageData = bhgeUserProfileFacade.getAddressForSalesArea(addressFormData,
                accountPageFlag,shipTo);
        LOG.info("searchPageData"+searchPageData);
        final List<AddressData> addressList = searchPageData.getResults();
        if(!sort) {
            Collections.sort(addressList, new Comparator<AddressData>() {
                @Override
                public int compare(AddressData ad1, AddressData ad2) {
                    if (ad1 != null && ad2 != null && ad1.getCompanyName() != null && ad2.getCompanyName() != null && StringUtils.isNotBlank(ad1.getCompanyName()) && StringUtils.isNotBlank(ad2.getCompanyName())) {
                        return ad1.getCompanyName().compareTo(ad2.getCompanyName());
                    }
                    return 0;
                }
            });
        }
        final AddressDataList addressDataList = new AddressDataList();
        addressDataList.setAddresses(addressList);
        return getDataMapper().map(addressDataList, AddressListWsDTO.class, "FULL");
    }
    
    
    
    @RequestMapping(value = "/{checkoutCartId}/createSoldto-Address", method = RequestMethod.POST)
	@ResponseBody
	@Operation(operationId = "createSoldToAddress", summary = "Creates a new sold to address for b2bunit", description = "Creates a new soldto address for b2bunit")
    @ApiBaseSiteIdAndUserIdParam
	public AddressWsDTO bhgeSoldToAddAddress(@Parameter(description = "Address object.", required = true) @RequestBody final BHGEShippingAddressFormDataWsDTO address, 
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId, 
			@Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId) throws CMSItemNotFoundException
	{
		//final RestResponse returnValue = new RestResponse();
    	address.setCellphone(StringEscapeUtils.escapeHtml4(address.getCellphone()));
    	address.setCompanyName(StringEscapeUtils.escapeHtml4(address.getCompanyName()));
        address.setLine1(StringEscapeUtils.escapeHtml4(address.getLine1()));
        address.setLine2(StringEscapeUtils.escapeHtml4(address.getLine2()));
        address.setTown(StringEscapeUtils.escapeHtml4(address.getTown()));
        address.setDeliveryPoint(StringEscapeUtils.escapeHtml4(address.getDeliveryPoint()));
        address.setCountryName(StringEscapeUtils.escapeHtml4(address.getCountryName()));
        address.setStateName(StringEscapeUtils.escapeHtml4(address.getStateName()));
        address.setEmail(StringEscapeUtils.escapeHtml4(address.getEmail()));
        address.setFromEmail(StringEscapeUtils.escapeHtml4(address.getFromEmail()));
        address.setFromName(StringEscapeUtils.escapeHtml4(address.getFromName()));
        address.setEmailSubject(StringEscapeUtils.escapeHtml4(address.getEmailSubject()));
        address.setCustomerName(StringEscapeUtils.escapeHtml4(address.getCustomerName()));
        address.setEndUserType(StringEscapeUtils.escapeHtml4(address.getEndUserType()));

       
        
		 
		try
		{
			/*final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
	        B2BUnitModel b2bUnit = currentUser.getDefaultB2BUnit();*/
			GEEdgeCustomerModel currentUser = null; 
	    	B2BUnitModel b2bUnit = null;
	        BHGESoldToData defaultB2BUnitUidOfGuestUser=null;
	    	UserModel user = userService.getCurrentUser(); 
	    	

	        final BHGEShippingAddressFormData addressData = getDataMapper().map(address, BHGEShippingAddressFormData.class, ADDRESS_MAPPING);
	        final BHGEShippingAddressFormData bhgeAddressFormData = new BHGEShippingAddressFormData();
			bhgeAddressFormData.setCompanyName(StringEscapeUtils.escapeHtml4(addressData.getCompanyName()));
			bhgeAddressFormData.setLine1(StringEscapeUtils.escapeHtml4(addressData.getLine1()));
			bhgeAddressFormData.setLine2(StringEscapeUtils.escapeHtml4(addressData.getLine2()));
			bhgeAddressFormData.setTown(StringEscapeUtils.escapeHtml4(addressData.getTown()));
			bhgeAddressFormData.setDeliveryPoint(StringEscapeUtils.escapeHtml4(addressData.getDeliveryPoint()));
			if (addressData.getCountry().getIsocode() != null)
			{
				final CountryData countryData = getI18NFacade().getCountryForIsocode(addressData.getCountry().getIsocode());
				bhgeAddressFormData.setCountry(countryData);
				bhgeAddressFormData.setCountryName(StringEscapeUtils.escapeHtml4(countryData.getIsocode()));
			}
			 if (addressData.getRegion().getIsocode() != null && !StringUtils.isEmpty(addressData.getRegion().getIsocode()))
			{
				 final RegionData regionData = getI18NFacade().getRegion(addressData.getCountry().getIsocode(), addressData.getRegion().getIsocode());
		            bhgeAddressFormData.setRegion(regionData);
		            bhgeAddressFormData.setStateName(regionData != null ? regionData.getIsocode() : " ");
			}
			bhgeAddressFormData.setPostalCode(StringEscapeUtils.escapeHtml4(addressData.getPostalCode()));
			if (null != addressData.getSaveForFuture())
			{
				bhgeAddressFormData.setSaveForFuture(addressData.getSaveForFuture());
			}
			if(user instanceof GEEdgeCustomerModel) {
	    		currentUser = (GEEdgeCustomerModel) user; 
	    		b2bUnit = currentUser.getDefaultB2BUnit();
	    		bhgeCheckoutFacade.createAndSaveSoldtoAddress(bhgeAddressFormData);
	    	} 
	    	else if(user instanceof UserModel && userService.isAnonymousUser(userService.getCurrentUser())) { 
	    		//TODO : To be received in checkoutWSDTO from frontend and passed into getDefaultB2BUnitUidOfGuestUser() method, hard coding for testing purpose
	        	defaultB2BUnitUidOfGuestUser = bhgeSoldToUtil.getDefaultB2BUnitUidOfGuestUser("1800_GE_GE");
	        	final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
	        	bhgeCheckoutFacade.createAndSaveSoldtoAddressForGuest(bhgeAddressFormData, cartModel);
	    	}
			
			return getDataMapper().map(bhgeAddressFormData, AddressWsDTO.class, "FULL");
		}
		catch (final Exception ex)
		{
			LOG.error("Error occured while saving sold to address" + ex);
			ex.printStackTrace();
		}
		return null;
	}
    

    @RequestMapping(value = "/{checkoutCartId}/createShipAddress", method = RequestMethod.POST, consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    @ResponseBody
    @Operation(operationId = "createShippingAddress", summary = "Creates a new shipping address for b2bunit", description = "Creates a new shipping address for b2bunit")
    @ApiBaseSiteIdAndUserIdParam
    public AddressWsDTO createShippingAddress(@Parameter(description = "Address object.", required = true) @RequestBody final BHGEShippingAddressFormDataWsDTO address, @Parameter(description = "Base site identifier.", required = true) @PathVariable
    final String baseSiteId, @Parameter(description = "shopping cart Id", required = true)
                                              @PathVariable final String checkoutCartId)
    {
        //final HttpSession session = request.getSession(false);
        //final String userFullName = (String) session.getAttribute("userFullName");
        //final BHGESoldToData soldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
		/*
		 * final CustomerData customerData = customerFacade.getCurrentCustomer();
		 * BHGESoldToData defaultSoldTo1 = null;
		 * 
		 * defaultSoldTo1 = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUser(); } else {
		 * //TODO : To be received in checkoutWSDTO and passed into
		 * getDefaultB2BUnitUidOfGuestUser() method, hard coding for testing purpose
		 * defaultSoldTo1 =
		 * bhgeSoldToUtil.getDefaultB2BUnitUidOfGuestUser("1800_GE_GE"); }
		 */
		
		
		
    	address.setCellphone(StringEscapeUtils.escapeHtml4(address.getCellphone()));
    	address.setCompanyName(StringEscapeUtils.unescapeHtml4(address.getCompanyName()));
        address.setLine1(StringEscapeUtils.unescapeHtml4(address.getLine1()));
        address.setLine2(StringEscapeUtils.unescapeHtml4(address.getLine2()));
        address.setTown(StringEscapeUtils.unescapeHtml4(address.getTown()));
        address.setDeliveryPoint(StringEscapeUtils.escapeHtml4(address.getDeliveryPoint()));
        address.setCountryName(StringEscapeUtils.escapeHtml4(address.getCountryName()));
        address.setStateName(StringEscapeUtils.escapeHtml4(address.getStateName()));
        address.setEmail(StringEscapeUtils.escapeHtml4(address.getEmail()));
        address.setFromEmail(StringEscapeUtils.escapeHtml4(address.getFromEmail()));
        address.setFromName(StringEscapeUtils.escapeHtml4(address.getFromName()));
        address.setEmailSubject(StringEscapeUtils.escapeHtml4(address.getEmailSubject()));
        address.setCustomerName(StringEscapeUtils.escapeHtml4(address.getCustomerName()));
        address.setEndUserType(StringEscapeUtils.escapeHtml4(address.getEndUserType()));
		 
		 
    	GEEdgeCustomerModel currentUser = null; 
    	B2BUnitModel b2bUnit = null;
        BHGESoldToData defaultB2BUnitUidOfGuestUser=null;
    	UserModel user = userService.getCurrentUser(); 
    	if(user instanceof GEEdgeCustomerModel) {
    		currentUser = (GEEdgeCustomerModel) user; 
    		b2bUnit = currentUser.getDefaultB2BUnit();
    	} 
    	else if(user instanceof UserModel && userService.isAnonymousUser(userService.getCurrentUser())) { 
    		//TODO : To be received in checkoutWSDTO from frontend and passed into getDefaultB2BUnitUidOfGuestUser() method, hard coding for testing purpose
        	defaultB2BUnitUidOfGuestUser = bhgeSoldToUtil.getDefaultB2BUnitUidOfGuestUser("1800_GE_GE");
    	}
		

        final BHGEShippingAddressFormData addressData = getDataMapper().map(address, BHGEShippingAddressFormData.class, ADDRESS_MAPPING);
        final BHGEShippingAddressFormData bhgeAddressFormData = new BHGEShippingAddressFormData();
        bhgeAddressFormData.setCompanyName(StringEscapeUtils.unescapeHtml4(addressData.getCompanyName()));
        bhgeAddressFormData.setLine1(StringEscapeUtils.unescapeHtml4(addressData.getLine1()));
        bhgeAddressFormData.setLine2(StringEscapeUtils.unescapeHtml4(addressData.getLine2()));
        bhgeAddressFormData.setTown(StringEscapeUtils.unescapeHtml4(addressData.getTown()));
        bhgeAddressFormData.setDeliveryPoint(StringEscapeUtils.escapeHtml4(addressData.getDeliveryPoint()));
        if (addressData.getCountry().getIsocode() != null)
        {
            final CountryData countryData = getI18NFacade().getCountryForIsocode(addressData.getCountry().getIsocode());
            bhgeAddressFormData.setCountry(countryData);
            bhgeAddressFormData.setCountryName(StringEscapeUtils.escapeHtml4(countryData.getIsocode()));
        }
        if (addressData.getRegion().getIsocode() != null && !StringUtils.isEmpty(addressData.getRegion().getIsocode()))
        {
            final RegionData regionData = getI18NFacade().getRegion(addressData.getCountry().getIsocode(), addressData.getRegion().getIsocode());
            bhgeAddressFormData.setRegion(regionData);
            bhgeAddressFormData.setStateName(regionData != null ? regionData.getIsocode() : " ");
        }
        bhgeAddressFormData.setPostalCode(StringEscapeUtils.escapeHtml4(addressData.getPostalCode()));
        if (null != addressData.getSaveForFuture())
        {
            bhgeAddressFormData.setSaveForFuture(addressData.getSaveForFuture());
        }

        final boolean userConsentForSave = bhgeAddressFormData.getSaveForFuture() != null
                ? (bhgeAddressFormData.getSaveForFuture()).booleanValue()
                : Boolean.FALSE.booleanValue();
        LOG.info("Shipping Address : Save For Future - " + addressData.getSaveForFuture() + " | " + userConsentForSave);
        if(user instanceof GEEdgeCustomerModel) {
        	bhgeCheckoutFacade.createAndSaveShippingAddress(bhgeAddressFormData, userConsentForSave);
    	}
        else
        {
        	final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
        	bhgeCheckoutFacade.createAndSaveShippingAddressForGuest(bhgeAddressFormData, userConsentForSave, cartModel);
        }
        
        LOG.info("Created Shipping address ");
        if (Boolean.parseBoolean(Config.getParameter("shipping.address.create.send.email")))
        {
            bhgeAddressFormData.setEmail(StringEscapeUtils.escapeHtml4(Config.getParameter("TO_MAIL")));
            bhgeAddressFormData.setFromEmail(StringEscapeUtils.escapeHtml4(Config.getParameter("FROM_MAIL")));
            bhgeAddressFormData.setFromName(StringEscapeUtils.escapeHtml4(Config.getParameter("FROM_NAME")));
            if(!currentUser.getUid().equalsIgnoreCase("anonymous")) {
            	bhgeAddressFormData.setEmailSubject(Config.getParameter("SHIPPING_ADDRESS_Email_Subject") + " " + currentUser.getName()
                    + " For the Customer Account " + b2bUnit.getLocName());
            }
            else {
            	 bhgeAddressFormData.setEmailSubject(Config.getParameter("SHIPPING_ADDRESS_Email_Subject") + " " + currentUser.getEmail()
                 + " For the Customer Account " + defaultB2BUnitUidOfGuestUser.getLocName());
            }
            bhgeAddressFormData.setCustomerName(StringEscapeUtils.escapeHtml4(currentUser.getName()));
            final BHGEShippingAddressEmailEvent shipAddressCreateEvent = new BHGEShippingAddressEmailEvent(bhgeAddressFormData);
            shipAddressCreateEvent.setBhgeShippingAddressFormData(bhgeAddressFormData);
            eventService.publishEvent(shipAddressCreateEvent);
            //GlobalMessages.addMessage(model, GlobalMessages.CONF_MESSAGES_HOLDER, SUCCESS_MAIL_SENT, null);
            //GlobalMessages.addInfoMessage(model, SUCCESS_MAIL_SENT);
        }
        
        return getDataMapper().map(bhgeAddressFormData, AddressWsDTO.class, "FULL");
    }



    
    @RequestMapping(value = "/{checkoutCartId}/createEndUserAddress", method = RequestMethod.POST, consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    @ResponseBody
    @Operation(operationId = "createEndUserAddress", summary = "Creates a new end user address for b2bunit", description = "Creates a new end user address for b2bunit")
    @ApiBaseSiteIdAndUserIdParam
    public AddressWsDTO CreateEndUserAddress(@RequestBody final BHGEShippingAddressFormDataWsDTO address, @Parameter(description = "Base site identifier.", required = true) @PathVariable
    final String baseSiteId, @Parameter(description = "shopping cart Id", required = true)
                                                                 @PathVariable final String checkoutCartId) throws CMSItemNotFoundException
    {

        //final HttpSession session = request.getSession(false);
        //final String userFullName = (String) session.getAttribute("userFullName");
        //final BHGESoldToData soldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
    	//final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        //B2BUnitModel b2bUnit = currentUser.getDefaultB2BUnit();
        
    	address.setCellphone(StringEscapeUtils.escapeHtml4(address.getCellphone()));
    	address.setCompanyName(StringEscapeUtils.unescapeHtml4(address.getCompanyName()));
        address.setLine1(StringEscapeUtils.unescapeHtml4(address.getLine1()));
        address.setLine2(StringEscapeUtils.unescapeHtml4(address.getLine2()));
        address.setTown(StringEscapeUtils.unescapeHtml4(address.getTown()));
        address.setDeliveryPoint(StringEscapeUtils.escapeHtml4(address.getDeliveryPoint()));
        address.setCountryName(StringEscapeUtils.escapeHtml4(address.getCountryName()));
        address.setStateName(StringEscapeUtils.escapeHtml4(address.getStateName()));
        address.setEmail(StringEscapeUtils.escapeHtml4(address.getEmail()));
        address.setFromEmail(StringEscapeUtils.escapeHtml4(address.getFromEmail()));
        address.setFromName(StringEscapeUtils.escapeHtml4(address.getFromName()));
        address.setEmailSubject(StringEscapeUtils.escapeHtml4(address.getEmailSubject()));
        address.setCustomerName(StringEscapeUtils.escapeHtml4(address.getCustomerName()));
        address.setEndUserType(StringEscapeUtils.escapeHtml4(address.getEndUserType()));
    	
        GEEdgeCustomerModel currentUser = null; 
    	B2BUnitModel b2bUnit = null;
        BHGESoldToData defaultB2BUnitUidOfGuestUser=null;
    	UserModel user = userService.getCurrentUser(); 
    	if(user instanceof GEEdgeCustomerModel) {
    		currentUser = (GEEdgeCustomerModel) user; 
    		b2bUnit = currentUser.getDefaultB2BUnit();
    	} 
    	else if(user instanceof UserModel && userService.isAnonymousUser(userService.getCurrentUser())) { 
    		//TODO : To be received in checkoutWSDTO from frontend and passed into getDefaultB2BUnitUidOfGuestUser() method, hard coding for testing purpose
        	defaultB2BUnitUidOfGuestUser = bhgeSoldToUtil.getDefaultB2BUnitUidOfGuestUser("1800_GE_GE");
    	}
        
        final BHGEShippingAddressFormData addressData = getDataMapper().map(address, BHGEShippingAddressFormData.class, ADDRESS_MAPPING);
        
        final BHGEShippingAddressFormData bhgeAddressFormData = new BHGEShippingAddressFormData();
        bhgeAddressFormData.setCompanyName(StringEscapeUtils.unescapeHtml4(addressData.getCompanyName()));
        bhgeAddressFormData.setLine1(StringEscapeUtils.unescapeHtml4(addressData.getLine1()));
        bhgeAddressFormData.setLine2(StringEscapeUtils.unescapeHtml4(addressData.getLine2()));
        bhgeAddressFormData.setTown(StringEscapeUtils.unescapeHtml4(addressData.getTown()));
        //bhgeAddressFormData.setDeliveryPoint(bhgeAddressForm.getDeliveryPoint());r̥
        //bhgeAddressFormData.setSaveForFuture(bhgeAddressForm.getSaveInAddressBook());
        bhgeAddressFormData.setEndUserType(StringEscapeUtils.escapeHtml4(addressData.getEndUserType()));
        LOG.info("  flag  " + addressData.getSaveForFuture());
        if (null != addressData.getSaveForFuture())
        {
            bhgeAddressFormData.setSaveForFuture(addressData.getSaveForFuture());
        }
        if (addressData.getCountry().getIsocode() != null)
        {
            final CountryData countryData = getI18NFacade().getCountryForIsocode(addressData.getCountry().getIsocode());
            bhgeAddressFormData.setCountry(countryData);
            bhgeAddressFormData.setCountryName(StringEscapeUtils.escapeHtml4(countryData.getIsocode()));
        }
        if (addressData.getRegion().getIsocode() != null && !StringUtils.isEmpty(addressData.getRegion().getIsocode()))
        {
            final RegionData regionData = getI18NFacade().getRegion(addressData.getCountry().getIsocode(), addressData.getRegion().getIsocode());
            bhgeAddressFormData.setRegion(regionData);
            bhgeAddressFormData.setStateName(regionData != null ? regionData.getIsocode() : " ");
        }
        bhgeAddressFormData.setPostalCode(StringEscapeUtils.escapeHtml4(addressData.getPostalCode()));
        final boolean userConsentForSave = bhgeAddressFormData.getSaveForFuture() != null
                ? (bhgeAddressFormData.getSaveForFuture()).booleanValue()
                : Boolean.FALSE.booleanValue();
        LOG.info("End User address : Save for future - "+addressData.getSaveForFuture()+" | "+userConsentForSave);
        bhgeAddressFormData.setEndUserType(StringEscapeUtils.escapeHtml4(addressData.getEndUserType()));
        if(user instanceof GEEdgeCustomerModel) {
        	bhgeCheckoutFacade.createAndSaveEnduserAddress(bhgeAddressFormData, userConsentForSave);
    	} 
        else
        {
        	final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
        	bhgeCheckoutFacade.createAndSaveEnduserAddressForGuest(bhgeAddressFormData, userConsentForSave, cartModel);
        }
        
        if (Boolean.parseBoolean(Config.getParameter("shipping.address.create.send.email")))
        {
            bhgeAddressFormData.setEmail(StringEscapeUtils.escapeHtml4(Config.getParameter("TO_MAIL")));
            bhgeAddressFormData.setFromEmail(StringEscapeUtils.escapeHtml4(Config.getParameter("FROM_MAIL")));
            bhgeAddressFormData.setFromName(StringEscapeUtils.escapeHtml4(Config.getParameter("FROM_NAME")));
            bhgeAddressFormData.setEmailSubject(Config.getParameter("SHIPPING_ADDRESS_Email_Subject") + " " + currentUser.getName()
                    + " For the Customer Account " + b2bUnit.getLocName());
            bhgeAddressFormData.setCustomerName(StringEscapeUtils.escapeHtml4(currentUser.getName()));
            final BHGEShippingAddressEmailEvent shipAddressCreateEvent = new BHGEShippingAddressEmailEvent(bhgeAddressFormData);
            shipAddressCreateEvent.setBhgeShippingAddressFormData(bhgeAddressFormData);
            eventService.publishEvent(shipAddressCreateEvent);
            //GlobalMessages.addMessage(model, GlobalMessages.CONF_MESSAGES_HOLDER, SUCCESS_MAIL_SENT, null);
            //GlobalMessages.addInfoMessage(model, SUCCESS_MAIL_SENT);
        }
        
        return getDataMapper().map(bhgeAddressFormData, AddressWsDTO.class, "FULL");
    }

	//TODO: Set Value in facade layer
    @RequestMapping(value = "/{checkoutCartId}/updateAndPlaceOrder", method = RequestMethod.POST, consumes ={MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
  	@ResponseBody
  	@Operation(operationId = "updateAndPlaceOrder", summary = "Update checkout details and place order", description = "Update checkout details and place order")
  	@ApiBaseSiteIdAndUserIdParam 
  	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<String> checkoutDetails(@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId, 
            @Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
              @RequestBody UpdateCheckoutDetailsWsDTO updateCheckoutDetails,
              @Valid final BHGEUploadAdditionalFile bhgeUploadPOFormData,
              @Valid final BHGEUploadForm bhgeUploadOrderFormData,
              final BindingResult bindingResult, HttpServletRequest request, HttpSession session) throws BhgeUtilException {
		
		// notifications preferences
		LOG.info("Updating notification preferences for order checkout");
		///changes for anonymous user
		//TODO: Idetified redundant object creation which can be created once and re-used
		final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(StringEscapeUtils.escapeHtml4(checkoutCartId));
        final boolean isProductConfigIssue= bhgeCheckoutFacade.checkIfProductConfigIssue(cartModel);
        LOG.info("Product configuration issue status: " + isProductConfigIssue);
		final CartData cartData = bhgeCartDataConverter.convert(cartModel);
        boolean isAnonymousUser= userService.isAnonymousUser(userService.getCurrentUser());

        //US-465616 Checking payment mode, if new credit card then calling bin lookup to check status
        try {
            Boolean checkCreditStatus;
            Boolean savedCardValidforOrder;
            String salesAreaId = StringUtils.EMPTY;
            String currency = StringUtils.EMPTY;
            final UserModel user = cartModel.getUser();
            if(user instanceof B2BCustomerModel){
                final B2BCustomerModel b2bcustomer = (B2BCustomerModel) user;
                salesAreaId = ((B2BCustomerModel) user).getDefaultB2BUnit().getUid().split("_")[1];
                if(null != cartModel.getCurrency().getIsocode()){
                    currency = cartModel.getCurrency().getIsocode();
                }
                else {
                    currency = ((B2BCustomerModel) user).getDefaultB2BUnit().getCurrency().getIsocode();
                }
            }
            if (updateCheckoutDetails != null && null != updateCheckoutDetails.getPaymentInfo() &&  null != updateCheckoutDetails.getPaymentType() && updateCheckoutDetails.getPaymentType().getPaymentType().equalsIgnoreCase("card")) {
                if (BooleanUtils.isTrue(updateCheckoutDetails.getPaymentInfo().getIsNewCard())) {
                    checkCreditStatus = bhgeCheckoutFacade.getBinLookupStatus(updateCheckoutDetails.getPaymentInfo().getMerchantid(), updateCheckoutDetails.getPaymentInfo().getToken());
                    if(BooleanUtils.isFalse(checkCreditStatus)){
                        //throw new BhgeUtilException("Credit Card is not valid !!");
                        return new ResponseEntity<>("Credit Card is not valid !!", HttpStatus.OK);
                    }
                } else {
                    savedCardValidforOrder = bhgeCheckoutFacade.getSaveCardAuthorisationStatus(updateCheckoutDetails.getPaymentInfo(), currency, salesAreaId);
                    if(BooleanUtils.isNotTrue(savedCardValidforOrder)){
                        return new ResponseEntity<>("SavedCard is not Valid to use for placing an Order", HttpStatus.OK);
                    }
                }
            }
        }
        catch(Exception e){
            LOG.info("Error Validating Credit Card" + e);
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        updateCartDataWithReviewAndEmail(updateCheckoutDetails, cartData,isAnonymousUser);
		  try {
              updateCartData(updateCheckoutDetails,checkoutCartId,cartModel,cartData);
          }
		  catch(Exception e) {
			  LOG.info("Error saving shipping method details");
			  return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		  }
		  //choose - payment type, end customer and PO number details
		validateCaptcha(updateCheckoutDetails, cartData, request, session,isAnonymousUser);
		
		checkAndSelectDeliveryAddress(updateCheckoutDetails.getPaymentType());
        if(null != updateCheckoutDetails.getEcaPoDetails()) {
            LOG.info("Setting ECA PO details for the cart");
            setECAForCart(cartModel, updateCheckoutDetails.getEcaPoDetails());
        }
		
		//Return PO for RMA
		// Return PO LIST
		BHGEPlaceOrderForm bhgePlaceOrderForm = new BHGEPlaceOrderForm();
		try
		{
            LOG.info("updateAndPlaceOrder line 1767");
            bhgePlaceOrderForm=handleReturnPO(updateCheckoutDetails,cartModel,checkoutCartId);
            updatePlaceOrderForm(updateCheckoutDetails, bhgePlaceOrderForm);
        }
		catch(Exception e)
		{
            e.printStackTrace();
			LOG.info("Exception occured in place order:-- "+ e);
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<>(dsCheckoutFacade.placeOrderForDsSpartacusStore(bhgePlaceOrderForm,cartData,cartModel), HttpStatus.OK);

	}
    private void updateCartDataWithReviewAndEmail(UpdateCheckoutDetailsWsDTO updateCheckoutDetails, CartData cartData, boolean isAnonymousUser) {
        String bhgeReviewNeeded = StringEscapeUtils.escapeHtml4(updateCheckoutDetails.getCheckoutDetails().getBhgeReview());
        String bhgeReviewReason = StringEscapeUtils.escapeHtml4(updateCheckoutDetails.getCheckoutDetails().getReason());

        cartData.setOrderConfirmation(StringEscapeUtils.escapeHtml4(updateCheckoutDetails.getCheckoutDetails().getOrderAckMail()));
        cartData.setInvoiceEmail(StringEscapeUtils.escapeHtml4(updateCheckoutDetails.getCheckoutDetails().getInvEmail()));

        if (isAnonymousUser){
            // Handle anonymous user logic
            cartData.setIsSpecialDiscountPresent(true);
            final String specialDiscountCode = Config.getString("guest.order.review.text.line1",
                    "This is an eCommerce order from an anonymous customer.")
                    + "\n"
                    + Config.getString("guest.order.review.text.line2",
                    "Look at this order data and the PO, and decide if this is a known customer or not.")
                    + "\n"
                    + Config.getString("guest.order.review.text.line3",
                    "If you know them,change the Sold-To to the correct customer and move ahead with this order.")
                    + "\n" + Config.getString("guest.order.review.text.line4", "If you do not know them, start the KYC process.")
                    + "\n" + Config.getString("guest.order.review.text.line5",
                    "When the KYC process is complete, you will either create a new Sold-to and update the order or you will reject the order.");

            cartData.setSpecialDiscountCode(specialDiscountCode);
        } else if (bhgeReviewNeeded != null) {
            cartData.setIsSpecialDiscountPresent(false);
            if (bhgeReviewNeeded.equalsIgnoreCase("true"))
            {
                cartData.setIsSpecialDiscountPresent(true);
            }
            cartData.setSpecialDiscountCode(bhgeReviewReason);
        }
        LOG.info("Notification details updated successfully for checkout");
    }

    private void validateCaptcha(UpdateCheckoutDetailsWsDTO updateCheckoutDetails, CartData cartData, HttpServletRequest request, HttpSession session,boolean isAnonymousUser) throws BhgeUtilException {
        boolean captchaResponse = false;
        final String captcha = updateCheckoutDetails.getPaymentType().getGoogleCaptcha();
        if (isAnonymousUser && null != captcha && commonUtilsService.validateGoogleCaptchaNew(request, session, restTemplate, captcha))
            {
                captchaResponse = true;
            }

        if (captchaResponse || !isAnonymousUser)
        {
            //final CartData cartData = bhgeCheckoutFacade.getCheckoutCart();
            final List<OrderEntryData> recentlyAddedListEntries = new ArrayList<>(cartData.getEntries());
            cartData.setEntries(Collections.unmodifiableList(recentlyAddedListEntries));
        }

    }


    private BHGEPlaceOrderForm handleReturnPO(UpdateCheckoutDetailsWsDTO updateCheckoutDetails,CartModel cartModel,String checkoutCartId){
        //Return PO for RMA
        // Return PO LIST
        LOG.info("inside handleReturnPO line 1833");
        BHGEPlaceOrderForm bhgePlaceOrderForm = new BHGEPlaceOrderForm();
        if(cartModel.getCommerceType()!=null && StringUtils.equalsIgnoreCase(cartModel.getCommerceType().getCode(), BHGERMACommerceType.RETURNS.getCode())){
            LOG.info("handleReturnPO line 1835:-- "+ bhgePlaceOrderForm);
            ReturnPOListWsDTO returnPOlistwsdto = updateCheckoutDetails.getReturnPOList();
        LOG.info("handleReturnPO 1837:-- "+ returnPOlistwsdto);
            if(returnPOlistwsdto != null) {
                LOG.info("handleReturnPO line 1839:-- "+ returnPOlistwsdto);

                    List<ReturnPoData> returnPoDataList = convertDataFromReturnDTO(returnPOlistwsdto);
                    boolean result = bhgeRmaFormFacade.saveReturnPoForWs(cartModel, returnPoDataList);
                    LOG.info("Return PO saved successfully:-- "+ result);

        }
            }
        LOG.info("handleReturnPO line 1847");
        return bhgePlaceOrderForm;
    }



    private static void updatePlaceOrderForm(UpdateCheckoutDetailsWsDTO updateCheckoutDetails, BHGEPlaceOrderForm bhgePlaceOrderForm) {
        bhgePlaceOrderForm.setSecurityCode(updateCheckoutDetails.getPlaceOrder().getSecurityCode());
        bhgePlaceOrderForm.setTermsCheck(updateCheckoutDetails.getPlaceOrder().getTermsCheck());
        bhgePlaceOrderForm.setRequestedHdrDeliveryDate(updateCheckoutDetails.getPlaceOrder().getRequestedHdrDeliveryDate());
        bhgePlaceOrderForm.setRequestedHdrDeliveryDateFilm(updateCheckoutDetails.getPlaceOrder().getRequestedHdrDeliveryDateFilm());
        bhgePlaceOrderForm.setGoogleCaptcha(updateCheckoutDetails.getPlaceOrder().getGoogleCaptcha());
        bhgePlaceOrderForm.setReplenishmentStartDate(updateCheckoutDetails.getPlaceOrder().getReplenishmentStartDate());
        bhgePlaceOrderForm.setReplenishmentRecurrence(updateCheckoutDetails.getPlaceOrder().getReplenishmentRecurrence());
        bhgePlaceOrderForm.setReplenishmentOrder(updateCheckoutDetails.getPlaceOrder().getReplenishmentOrder());
        bhgePlaceOrderForm.setPlanToExportFlagVal(updateCheckoutDetails.getPlaceOrder().getPlanToExportFlagVal());
        bhgePlaceOrderForm.setnWeeks(updateCheckoutDetails.getPlaceOrder().getNWeeks());
        LOG.info("nuclear flag - updateCheckoutDetails" + updateCheckoutDetails.getPlaceOrder().getNuclearOpportFlagVal());
		bhgePlaceOrderForm.setNuclearOpportFlagVal(updateCheckoutDetails.getPlaceOrder().getNuclearOpportFlagVal());
        LOG.info("nuclear flag bhgePlaceOrderForm"+bhgePlaceOrderForm.getNuclearOpportFlagVal());
        bhgePlaceOrderForm.setNthDayOfMonth(updateCheckoutDetails.getPlaceOrder().getNthDayOfMonth());
        bhgePlaceOrderForm.setnDaysOfWeek(updateCheckoutDetails.getPlaceOrder().getNDaysOfWeek());
        bhgePlaceOrderForm.setnDays(updateCheckoutDetails.getPlaceOrder().getNDays());
        bhgePlaceOrderForm.setIsBuyerFlagVal(updateCheckoutDetails.getPlaceOrder().getIsBuyerFlagVal());
        bhgePlaceOrderForm.setGovtAgencyFlagVal(updateCheckoutDetails.getPlaceOrder().getGovtAgencyFlagVal());
        bhgePlaceOrderForm.setExportAddress(updateCheckoutDetails.getPlaceOrder().getExportAddress());
    }

    private void updateCartData(UpdateCheckoutDetailsWsDTO updateCheckoutDetails,String checkoutCartId,CartModel cartModel, CartData cartData) {
        if (cartData != null && !cartData.getEntries().isEmpty()) {
            cartData.setDeliveryPoint(updateCheckoutDetails.getCheckoutDetails().getShipDeliveryPointOT());
            cartData.setDeliveryCarrier(updateCheckoutDetails.getCheckoutDetails().getCarrier());
            cartData.setRequestedHdrDeliveryDate(updateCheckoutDetails.getCheckoutDetails().getRequestedHdrDeliveryDate());
            //cartData.setRequestedHdrDeliveryDateFilm(updateCheckoutDetails.getPlaceOrder().getRequestedHdrDeliveryDateFilm());
            cartData.setNotes(updateCheckoutDetails.getCheckoutDetails().getNotes());
            cartData.setShipToContactName(updateCheckoutDetails.getCheckoutDetails().getShipToContactName());
            cartData.setShipToContactPhone(updateCheckoutDetails.getCheckoutDetails().getShipToContactPhone());
            cartData.setDeliveryAccount(updateCheckoutDetails.getCheckoutDetails().getDeliveryAccount());
            LOG.info("DeliveryOptions in CheckoutDetails: " + updateCheckoutDetails.getCheckoutDetails().getDeliveryOptions());
            if (null != cartModel.getCartType() && (BhgeCoreConstants.CART_TYPE_FILM.equals(cartModel.getCartType().getCode())
                    || BhgeCoreConstants.CART_TYPE_HYBRID.equals(cartModel.getCartType().getCode()))) {
                cartData.setDeliveryOptions("prepay");
                LOG.info("DeliveryOptions : " + cartData.getDeliveryOptions());
            } else {
                cartData.setDeliveryOptions(updateCheckoutDetails.getCheckoutDetails().getDeliveryOptions());
            }
            cartData.setEndUserCategory(updateCheckoutDetails.getCheckoutDetails().getEndUserCategory());
            cartData.setAlternateContactName(updateCheckoutDetails.getCheckoutDetails().getAlternateContactName());
            cartData.setAlternateContactNumber(updateCheckoutDetails.getCheckoutDetails().getAlternateContactNumber());
            cartData.setShipNotificationEmail(updateCheckoutDetails.getCheckoutDetails().getShipNotificationEmail());
            cartData.setAlternateContactEmail(updateCheckoutDetails.getCheckoutDetails().getAlternateContactEmail());
            // New fields for SOA
            cartData.setInvoiceContactName(updateCheckoutDetails.getCheckoutDetails().getInvoiceContactName());
            cartData.setInvoiceContact1Num(updateCheckoutDetails.getCheckoutDetails().getInvoiceContact1Num());
            cartData.setOrderConfirmationName(updateCheckoutDetails.getCheckoutDetails().getOrderConfirmationName());
            cartData.setOrderConfirmationNum(updateCheckoutDetails.getCheckoutDetails().getOrderConfirmationNum());
            cartData.setInvoiceContact(updateCheckoutDetails.getCheckoutDetails().getInvoiceContact());
            cartData.setInvoicePhone(updateCheckoutDetails.getCheckoutDetails().getInvoicePhone());
            cartData.setSoaContact(updateCheckoutDetails.getCheckoutDetails().getSoaContact());
            cartData.setSoaPhone(updateCheckoutDetails.getCheckoutDetails().getSoaPhone());

            if (updateCheckoutDetails != null && updateCheckoutDetails.getCheckoutDetails() != null) {
                final Boolean orderPreference = updateCheckoutDetails.getCheckoutDetails().getOrderPreference();
                if (orderPreference != null)
                {cartData.setOrderPreference(orderPreference);
                    LOG.debug("Order Preference set in CartData: {}",orderPreference);
                }
                else
                {LOG.debug("Order Preference is null in CheckoutDetailWsDTO");
                }
            }
            else
            {LOG.warn("UpdateCheckoutDetails or CheckoutDetails is null, cannot set orderPreference");
            }

            updateCheckoutCart(updateCheckoutDetails.getPaymentType(), cartData, cartModel);
            if (null != updateCheckoutDetails.getPaymentInfo() && StringUtils.containsIgnoreCase(updateCheckoutDetails.getPaymentType().getPaymentType(), "CARD")) {
                updateCCPaymentInfo(updateCheckoutDetails.getPaymentInfo(), cartData);
            }
            //bhgeCheckoutFacade.updateCheckoutCart(cartData);
            bhgeCheckoutFacade.updateCheckoutCartForDS(cartData, cartModel);
            LOG.info("Shipping details set successfully for checkout");

        }
        else{
            LOG.error("Cart " + checkoutCartId + " is not having entries present in it.");
            throw new CartException("Cart Entries are empty");
        }
    }

    private void setECAForCart(CartModel cartModel, List<EcaPOWsDTO> ecaPos) {
        List<AbstractOrderEntryModel> entries = cartModel.getEntries();
        if(ecaPos == null || ecaPos.isEmpty()) {
            LOG.info("No ECA PO details found in the request to set for the cart");
            return;
        }
        Map<Integer, String> ecaCodeToPoMap = new HashMap<>();
        for (EcaPOWsDTO ecaPo : ecaPos) {
             if (null !=ecaPo.getEntryNumber()) {
                 LOG.info("Received ECA PO details in request - Entry Number: ECA Code: " + ecaPo.getEcaCode() + ", ECA PO Number: " + ecaPo.getEcaPONumber()+", Entry Number: " + ecaPo.getEntryNumber());
                 if (null != ecaPo.getEcaPONumber()) {
                     ecaCodeToPoMap.put(Integer.valueOf(ecaPo.getEntryNumber()), ecaPo.getEcaPONumber());
                 }
             }
        }
        for(Map.Entry<Integer, String> entry : ecaCodeToPoMap.entrySet()) {
            LOG.info("Mapping for Entry Number: {} is ECA PO Number: {}", entry.getKey(), entry.getValue());
        }
        // Iterate entries only once
        for (AbstractOrderEntryModel entry : entries) {
            Integer entryNumber = entry.getEntryNumber();
            LOG.info("Processing entry number {} for ECA PO mapping", entryNumber);
            if (entryNumber != null) {
                String ecaPoNumber = ecaCodeToPoMap.get(entryNumber);
                if (ecaPoNumber != null) {
                    LOG.info("Setting ECA PO Number {} for entry {} with ECA code {}", ecaPoNumber, entry.getEntryNumber(), entryNumber);
                    entry.setEcaPONumber(ecaPoNumber);
                    modelService.save(entry);
                    modelService.refresh(entry);
                }
            }
        }
            }



    private void updateCCPaymentInfo(CCPaymentInfoWsDTO paymentInfo, CartData cartData) {
        cartData.setCcName(paymentInfo.getCcName());
        cartData.setCcNumber(paymentInfo.getToken());
        cartData.setCcValidTru(paymentInfo.getCcValidTru());
        cartData.setCcType(paymentInfo.getCcType());
    }


    protected void updateCheckoutCart(final PaymentTypeFormWsDTO paymentTypeForm,final CartData cartData,final CartModel cartModel)
	{
		//final CartData cartData = new CartData();
    	/*changed here for OCC Migration*/
		//final CartData cartData = bhgeCheckoutFacade.getCheckoutCart();

		// set payment type
		final B2BPaymentTypeData paymentTypeData = new B2BPaymentTypeData();

		final String code = userService.isAnonymousUser(userService.getCurrentUser()) ? paymentTypeForm.getPaymentType()
				: DEFAULT_PAYMENT_TYPE;
		paymentTypeData.setCode(code);

		cartData.setPaymentType(paymentTypeData);

		// set cost center
		if (CheckoutPaymentType.ACCOUNT.getCode().equals(cartData.getPaymentType().getCode()))
		{
			final B2BCostCenterData costCenter = new B2BCostCenterData();
			costCenter.setCode(paymentTypeForm.getCostCenterId());

			cartData.setCostCenter(costCenter);
		}

		//set purchase order number
		cartData.setPurchaseOrderNumber(paymentTypeForm.getPurchaseOrderNumber());

		//set customer purchase order number
		cartData.setEndCustomerPo(paymentTypeForm.getEndCustomerOrderNumber());
		cartData.setEndUserNumber(paymentTypeForm.getEndUserNumber());

		//bhgeCheckoutFacade.updateCheckoutCart(cartData);
		bhgeCheckoutFacade.updateCheckoutCartForDS(cartData, cartModel);
	}
    
    protected void checkAndSelectDeliveryAddress(final PaymentTypeFormWsDTO paymentTypeForm)
	{
		if (CheckoutPaymentType.ACCOUNT.getCode().equals(paymentTypeForm.getPaymentType()))
		{
			/*
			 * final List<? extends AddressData> deliveryAddresses =
			 * getCheckoutFacade().getSupportedDeliveryAddresses(true); if (deliveryAddresses.size() == 1) {
			 * getCheckoutFacade().setDeliveryAddress(deliveryAddresses.get(0)); }
			 */
		}
	}


    //Guest checkout when checkbox for shipping address is same as sold to address is checked
    @ResponseBody
    @Operation(operationId = "getCheckoutAdressRegions", summary = "Get the region for check on same as sold to address checkbox.", description = "Get the region for check on same as sold to address checkbox.")
    @ApiBaseSiteIdAndUserIdParam
    @RequestMapping(value = "/{checkoutCartId}/getCheckoutAdressRegions", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<String> getCountryAddressForm(@Parameter(description = "Base site identifier.", required = true) @PathVariable
            final String baseSiteId, @Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
            @RequestParam("countryIsoCode") final String countryIsoCode)
	{
    	RegionWsDTO region = new RegionWsDTO();
		if(countryIsoCode.isEmpty()) {
			List<RegionData> regionsList = BHGECommonsUtil.getRegionsWithoutEmptyValues(getI18NFacade().getRegionsForCountryIso("US"));
			for(RegionData dto : regionsList) {
				region = getDataMapper().map(dto, RegionWsDTO.class, "FULL");
			}
			return new ResponseEntity<> (region.getCountryIso(), HttpStatus.OK);	
		}
		else {
			List<RegionData> regionsList = BHGECommonsUtil.getRegionsWithoutEmptyValues(getI18NFacade().getRegionsForCountryIso(StringEscapeUtils.escapeHtml4(countryIsoCode)));
			for(RegionData dto : regionsList) {
				region = getDataMapper().map(dto, RegionWsDTO.class, "FULL");
			}
			return new ResponseEntity<> (region.getCountryIso(), HttpStatus.OK);
		}
	}
    
    
    @ResponseBody
    @Operation(operationId = "removeOrderAttachment", summary = "Remove the order attachment in checkout page.", description = "Remove the order attachment in checkout page.")
    @ApiBaseSiteIdAndUserIdParam
    @RequestMapping(value = "/{checkoutCartId}/{isEUC}/removeOrderAttach", method = { RequestMethod.POST })
    public ResponseEntity<String> removeOrderAttachment(@Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,@Parameter (description = "end user certificate", required = false) @PathVariable final boolean isEUC)
	{
		try
		{
			LOG.debug("Removing order attachments....");
			final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
			bhgeCheckoutFacade.removeAttachmentsWs(cartModel,isEUC);
			LOG.debug("Order attachments removed successfully.....");
			return new ResponseEntity<>("Success", HttpStatus.OK);
		}
		catch (final Exception ex)
		{
			LOG.error("Error in removing the attachment from the order" + ex);
		}
		return null;
	}
    
    @ResponseBody
    @Operation(operationId = "removePOAttachment", summary = "Remove the purchase order attachment in checkout page.", description = "Remove the purchase order attachment in checkout page.")
    @ApiBaseSiteIdAndUserIdParam
	@RequestMapping(value = "/{checkoutCartId}/removePOAttach", method = { RequestMethod.POST })
	public ResponseEntity<Boolean> removePOAttachment(@Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId, 
		@RequestParam(value = "returnLocation", defaultValue = "", required = false)
	final String returnLocation)
	{
		try
		{
			LOG.debug("Removing P.O. attachment......");
			final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
			bhgeRmaFormFacade.removePOAttachmentWs(cartModel, returnLocation);
			LOG.debug("Removed P.O. attachment successfully......");
			return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);
		}
		catch (final Exception ex)
		{
			LOG.error("Error in removing the attachment from the order" + ex);
		}
		return null;
	}
    
    @ResponseBody
    @Operation(operationId = "getCountries", summary = "Gets list of countries.", description = "Gets list of countries.")
    @ApiBaseSiteIdAndUserIdParam
	@RequestMapping(value = "/{checkoutCartId}/getCountries", method = { RequestMethod.GET })
    public CountryListWsDTO getCountry(@Parameter(description = "Base site identifier.", required = true) @PathVariable
            final String baseSiteId, @Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId, 
            @RequestParam(value="countryType", defaultValue = "shipping") String countryType) {
    	List<CountryData> countries = new ArrayList<CountryData>();
    	if(countryType.equalsIgnoreCase("shipping")) {
    		countries = bhgeCartFacade.getCountries(CountryType.SHIPPING);
    	}
    	else if(countryType.equalsIgnoreCase("billing")) {
    		countries = bhgeCartFacade.getCountries(CountryType.BILLING);
    	}
    	 
    	List<CountryWsDTO> countryList = new ArrayList<>();
    	CountryListWsDTO countryListWsDTO = new CountryListWsDTO();
    	
    	for(CountryData country : countries) {
    		CountryWsDTO dto = new CountryWsDTO();
    		dto = getDataMapper().map(country,  CountryWsDTO.class);
    		countryList.add(dto);
    	}
    	countryListWsDTO.setCountries(countryList);
		return getDataMapper().map(countryListWsDTO, CountryListWsDTO.class, "FULL");
    }
    
    @ResponseBody
    @Operation(operationId = "getRegions", summary = "Gets list of regions for a country.", description = "Gets list of regions for a country.")
    @ApiBaseSiteIdAndUserIdParam
	@RequestMapping(value = "/{checkoutCartId}/getRegions", method = { RequestMethod.GET })
    public RegionListWsDTO getRegions(@Parameter(description = "Base site identifier.", required = true) @PathVariable
            final String baseSiteId, @Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
            @RequestParam(value="countryIso", defaultValue = "US") String countryIso) {
    	RegionListWsDTO regionList = new RegionListWsDTO();
    	List<RegionData> regionsForCountryIso = getI18NFacade().getRegionsForCountryIso(StringEscapeUtils.escapeHtml4(countryIso));
    	
    	List<RegionWsDTO> regionDtoList = new ArrayList<RegionWsDTO>();
    	
    	for(RegionData data : regionsForCountryIso) {
    		RegionWsDTO region = new RegionWsDTO();
    		region = getDataMapper().map(data, RegionWsDTO.class);
    		regionDtoList.add(region);
    	}
    	regionList.setRegions(regionDtoList);
    	return getDataMapper().map(regionList, RegionListWsDTO.class, "FULL");
    }

    
    private List<ReturnPoData> convertDataFromReturnDTO(ReturnPOListWsDTO returnPOlistwsdto) {
		// TODO Auto-generated method stub
    	List<ReturnPoData> returnDataList = new ArrayList<>();
    	
    	List<ReturnPoWsDTO> listofreturnPOdto = returnPOlistwsdto.getListOfReturnPO();
    	if(CollectionUtils.isNotEmpty(listofreturnPOdto))
    	{
    		for (ReturnPoWsDTO returnPoWsDTO : listofreturnPOdto) {
    			ReturnPoData returnPo = new ReturnPoData();
    			returnPo.setReturnCustPoNum(returnPoWsDTO.getReturnCustPoNum());
    			returnPo.setReturnLocation(returnPoWsDTO.getReturnLocation());
    			returnPo.setReturnPoNum(returnPoWsDTO.getReturnPoNum());
    			returnDataList.add(returnPo);
			}
    		return returnDataList;
    	}
		return returnDataList;
	}
    
    
//    @Secured({ "ROLE_CLIENT", "ROLE_CUSTOMERGROUP", "ROLE_CUSTOMERMANAGERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_GUEST" })
    @ResponseBody
    @ResponseStatus(code=HttpStatus.CREATED)
    @PostMapping(value = "/{checkoutCartId}/{isEUC}/uploadOrderAttachment", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(operationId = "uploadOrderAttachment", summary = "Upload Order Attachment", description = "Upload Order Attachment")
    @ApiBaseSiteIdAndUserIdParam
    public void uploadOrderAttachment(@Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
                                      @Parameter (description = "end user certificate", required = false) @PathVariable final boolean isEUC,
                                      @Parameter @RequestPart(value = "file") MultipartFile file,
                                      @Parameter @RequestParam("entryNumber") int entryNumber,
                                      @Parameter @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) throws IOException
    {
    	LOG.info("================== Upload Order Attachment ==================");
		try
		{
			//TODO : Shahid to migrate the FileSanitizerUtil class from bhgestorefront
			//if (bhgeUploadFormData != null && FileSanitizerUtil.isFileSanitized(bhgeUploadFormData.getFiletoUpload()))
			if (file != null)
			{
				final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
				bhgeCheckoutFacade.uploadOrderAttachmentWs(cartModel, file, isEUC);
				LOG.info("Uploaded Order attachment for checkout successfully");
			}
		}
		catch (final Exception ex)
		{
			LOG.error("Error in uploading the attachment to the order" + ex);
			new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }

    
    @ResponseBody
    @ResponseStatus(code=HttpStatus.CREATED)
    @PostMapping(value = "/{checkoutCartId}/uploadPOAttachment", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(operationId = "uploadPOAttachment", summary = "Upload P.O. Attachment", description = "Upload P.O. Attachment")
    @ApiBaseSiteIdAndUserIdParam
    public void uploadPOAttachment(@Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
       @Parameter @RequestPart(value = "file") MultipartFile file,
       @Parameter @RequestParam("entryNumber") int entryNumber,
       @Parameter @RequestParam(value="returnLocation", required = false) String returnLocation,
       @Parameter @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) throws IOException
    {
    	LOG.info("==================Upload PO Attachment==================");
    	try
		{
    		
			//			if (bhgeUploadFormData != null) TODO Shahid
			//if (bhgeUploadFormData != null && FileSanitizerUtil.isFileSanitized(bhgeUploadFormData.getFile()))
			if (file != null)
			{
				final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
				bhgeRmaFormFacade.uploadAdditionalFileForCartWs(cartModel, file, entryNumber, StringEscapeUtils.escapeHtml4(returnLocation));
				LOG.info("Uploaded P.O attachment for checkout successfully");
			}
		}
		catch (final Exception ex)
		{
			LOG.error("Error in uploading the PO attachment" + ex);
			new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
    
    @ResponseBody
	@RequestMapping(value = "/{checkoutCartId}/updateRequestedDeliveryDateFilm", method = RequestMethod.POST)
    @ResponseStatus(code=HttpStatus.CREATED)
    @Operation(operationId = "updateRequestedDeliveryDateFilm", summary = "Update Requested Delivery date for Film Products", description = "Update Requested Delivery date for Film Products")
    @ApiBaseSiteIdAndUserIdParam
	public void updateRequestedDeliveryDateFilm(@Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
			@Parameter @RequestParam("reqDelDateFilm") final String reqDelDateFilm) throws CMSItemNotFoundException
	{
		try
		{
			LOG.info("=========== Inside updateRequestedDeliveryDateFilm API call ===========");
			bhgeCartFacade.saveReqHeaderDeliveryDateFilmForWs(BHGECommonUtil.parseStringToDate(reqDelDateFilm), checkoutCartId);
            final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
            LOG.info("updatedRequestedShipDate in");
            boolean isShipmentComplete = BooleanUtils.isTrue(cartModel.getIsShipCompleteOrder())? true : false;
            bhgeCheckoutFacade.updateRequestedShipDate(cartModel, isShipmentComplete, reqDelDateFilm);
            LOG.info("updatedRequestedShipDate out");
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while saving data to cart for updateRequestedDeliveryDateFilm" + e);
			BHGECommonUtil.getStackTrace(e);
		}
	}
    
    
    @ResponseBody
	@RequestMapping(value = "/{checkoutCartId}/updateRequestedDateNonFilm", method = RequestMethod.POST)
    @ResponseStatus(code=HttpStatus.CREATED)
    @Operation(operationId = "updateRequestedDateNonFilm", summary = "Update Requested Delivery date for Non Film Products", description = "Update Requested Delivery date for Non Film Products")
    @ApiBaseSiteIdAndUserIdParam
	public void updateRequestedDateNonFilm(@Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
		@Parameter @RequestParam("reqDelDateNonFilm") final String reqDelDateNonFilm, 
		@Parameter @RequestParam("isShipComplete") final boolean isShipComplete) throws CMSItemNotFoundException
	{
		try
		{
			LOG.info("========== inside updateRequestedDateNonFilm API call ==========");
			bhgeCartFacade.saveReqHeaderDeliveryDateForWs(BHGECommonUtil.parseStringToDate(reqDelDateNonFilm), isShipComplete, checkoutCartId);
            final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
            LOG.info("updatedRequestedShipDate in");
            boolean isShipmentComplete = BooleanUtils.isTrue(cartModel.getIsShipCompleteOrder())? true : false;
            bhgeCheckoutFacade.updateRequestedShipDate(cartModel, isShipmentComplete, reqDelDateNonFilm);
            LOG.info("updatedRequestedShipDate out");
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while saving data to cart for updateRequestedDateNonFilm" + e);
			BHGECommonUtil.getStackTrace(e);
		}
	}
    
    
    @RequestMapping(value = "/{checkoutCartId}/payerAddresses", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_ATOM_XML_VALUE})
    @ResponseBody
    @Operation(operationId = "Payer Addresses for b2bunit in cart", summary = "Get payer address details for child b2b unit in cart", description = "Returns payer addresses for child b2bunit")
    @ApiBaseSiteIdAndUserIdParam
    @ApiResponse(responseCode = "200", description = "List of customer's addresses")
    public AddressListWsDTO getPayerAddresses(@Parameter(description = "Base site identifier.", required = true) @PathVariable
                                         final String baseSiteId, @Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId)
    {
        final boolean accountPageFlag = false;
        String user = StringUtils.EMPTY;
        BHGESoldToData soldToData = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
        LOG.info("soldToData: "+ soldToData);
//        SearchPageData<AddressData> searchPageData = new SearchPageData<AddressData>();
        GetAddressFormData addressFormData = new GetAddressFormData();
        addressFormData.setPageNo("0");
        addressFormData.setPageSize("1000");
        addressFormData.setZipCode("");
        addressFormData.setState("");
        addressFormData.setB2bUnit(soldToData.getUid());
        final SearchPageData<AddressData> searchPageData = bhgeUserProfileFacade.getPayerAddressForSalesArea(addressFormData,
                accountPageFlag);
        LOG.info("searchPageData"+searchPageData);
        final List<AddressData> addressList = searchPageData.getResults();

        Collections.sort(addressList, new Comparator<AddressData>() {
        	@Override
        	public int compare(AddressData ad1,AddressData ad2) {
        		if(ad1!=null && ad2!=null && ad1.getCompanyName()!=null && ad2.getCompanyName()!=null && StringUtils.isNotBlank(ad1.getCompanyName())&& StringUtils.isNotBlank(ad2.getCompanyName())) {
        			return ad1.getCompanyName().compareTo(ad2.getCompanyName());
        		}
        		return 0;
        	}
        });
        final AddressDataList addressDataList = new AddressDataList();
        addressDataList.setAddresses(addressList);
        return getDataMapper().map(addressDataList, AddressListWsDTO.class, "FULL");
    }
    
    @RequestMapping(value = "/{checkoutCartId}/billToAddresses", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_ATOM_XML_VALUE})
    @ResponseBody
    @Operation(operationId = "BillTo Addresses for b2bunit in cart", summary = "Get BillTo address details for child b2b unit in cart", description = "Returns payer addresses for child b2bunit")
    @ApiBaseSiteIdAndUserIdParam
    @ApiResponse(responseCode = "200", description = "List of customer's addresses")
    public AddressListWsDTO getBillToAddresses(@Parameter(description = "Base site identifier.", required = true) @PathVariable
                                         final String baseSiteId, @Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId)
    {
        final boolean accountPageFlag = false;
        String user = StringUtils.EMPTY;
        BHGESoldToData soldToData = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
        LOG.info("soldToData: "+ soldToData);
//        SearchPageData<AddressData> searchPageData = new SearchPageData<AddressData>();
        GetAddressFormData addressFormData = new GetAddressFormData();
        addressFormData.setPageNo("0");
        addressFormData.setPageSize("1000");
        addressFormData.setZipCode("");
        addressFormData.setState("");
        addressFormData.setB2bUnit(soldToData.getUid());
        final SearchPageData<AddressData> searchPageData = bhgeUserProfileFacade.getBillToAddressForSalesArea(addressFormData,
                accountPageFlag);
        LOG.info("searchPageData"+searchPageData);
        final List<AddressData> addressList = searchPageData.getResults();

        Collections.sort(addressList, new Comparator<AddressData>() {
        	@Override
        	public int compare(AddressData ad1,AddressData ad2) {
        		if(ad1!=null && ad2!=null && ad1.getCompanyName()!=null && ad2.getCompanyName()!=null && StringUtils.isNotBlank(ad1.getCompanyName())&& StringUtils.isNotBlank(ad2.getCompanyName())) {
        			return ad1.getCompanyName().compareTo(ad2.getCompanyName());
        		}
        		return 0;
        	}
        });
        final AddressDataList addressDataList = new AddressDataList();
        addressDataList.setAddresses(addressList);
        return getDataMapper().map(addressDataList, AddressListWsDTO.class, "FULL");
    }
    
    
    @RequestMapping(value = "/{checkoutCartId}/payerAddress/{searchCode}", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "searchPayerAddress", summary = "Get payer address details.", description = "Returns addresses.")
    @ApiBaseSiteIdAndUserIdParam
    public AddressListWsDTO searchPayerAddressByCode(@Parameter(description = "Search Code identifier", required = true) @PathVariable final String searchCode,
                                                @Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
                                                @RequestParam(value="state", defaultValue = "companyAsc") String state)
    {
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        String defaultSoldTo = null;
        B2BUnitModel b2bUnitModel = currentUser.getDefaultB2BUnit();
        if(currentUser != null && b2bUnitModel != null && b2bUnitModel.getUid() != null) {
            defaultSoldTo = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
        }
        GetAddressFormData addressFormData = new GetAddressFormData();
        //String defaultSoldToName = currentUser.getDefaultB2BUnit().getName();
        addressFormData.setB2bUnit(defaultSoldTo);
        addressFormData.setPageSize(DsoccConstants.MAX_PAGE_SIZE);
        addressFormData.setPageNo("0");
        addressFormData.setState(StringEscapeUtils.escapeHtml4(state));

        if(StringUtils.isNotEmpty(searchCode) && StringUtils.isNotBlank(searchCode)) {
            addressFormData.setZipCode(StringEscapeUtils.escapeHtml4(searchCode));
        }

        List<AddressData> addressDataList = bhgeUserProfileFacade.getPayerAddressForSalesAreaWs(addressFormData, false);
        List<AddressWsDTO> payerAddressWsDTOList = new ArrayList<>();
        AddressListWsDTO addressListWsDTO = new AddressListWsDTO();
        if(addressDataList != null)
        {
            for (AddressData payerAddressData : addressDataList)
            {
                AddressWsDTO addressdto = new AddressWsDTO();
                addressdto = getDataMapper().map(payerAddressData, AddressWsDTO.class);
                payerAddressWsDTOList.add(addressdto);
            }
            addressListWsDTO.setAddresses(payerAddressWsDTOList);
        }
        else
        {
            if(LOG.isDebugEnabled()) {
                LOG.debug("Payer Address list is empty");
            }
            addressListWsDTO.setAddresses(Collections.emptyList());
        }
        return addressListWsDTO;
    }
    
    @RequestMapping(value = "/{checkoutCartId}/BillToAddress/{searchCode}", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "searchBillToAddress", summary = "Get BillTo address details.", description = "Returns addresses.")
    @ApiBaseSiteIdAndUserIdParam
    public AddressListWsDTO searchBillToAddressByCode(@Parameter(description = "Search Code identifier", required = true) @PathVariable final String searchCode,
                                                @Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
                                                @RequestParam(value="state", defaultValue = "companyAsc") String state)
    {
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        String defaultSoldTo = null;
        B2BUnitModel b2bUnitModel = currentUser.getDefaultB2BUnit();
        if(currentUser != null && b2bUnitModel != null && b2bUnitModel.getUid() != null) {
            defaultSoldTo = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
        }
        GetAddressFormData addressFormData = new GetAddressFormData();
        //String defaultSoldToName = currentUser.getDefaultB2BUnit().getName();
        addressFormData.setB2bUnit(defaultSoldTo);
        addressFormData.setPageSize(DsoccConstants.MAX_PAGE_SIZE);
        addressFormData.setPageNo("0");
        addressFormData.setState(StringEscapeUtils.escapeHtml4(state));

        if(StringUtils.isNotEmpty(searchCode) && StringUtils.isNotBlank(searchCode)) {
            addressFormData.setZipCode(StringEscapeUtils.escapeHtml4(searchCode));
        }

        List<AddressData> addressDataList = bhgeUserProfileFacade.getBillToAddressForSalesAreaWs(addressFormData, false);
        List<AddressWsDTO> billToAddressWsDTOList = new ArrayList<>();
        AddressListWsDTO addressListWsDTO = new AddressListWsDTO();
        if(addressDataList != null)
        {
            for (AddressData BillToAddressData : addressDataList)
            {
                AddressWsDTO addressdto = new AddressWsDTO();
                addressdto = getDataMapper().map(BillToAddressData, AddressWsDTO.class);
                billToAddressWsDTOList.add(addressdto);
            }
            addressListWsDTO.setAddresses(billToAddressWsDTOList);
        }
        else
        {
            if(LOG.isDebugEnabled()) {
                LOG.debug("BillTo Address list is empty");
            }
            addressListWsDTO.setAddresses(Collections.emptyList());
        }
        return addressListWsDTO;
    }
    
    @RequestMapping(value = "/{checkoutCartId}/payer-address/select", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "selectPayerAddress", summary = "Select payer address.", description = "Sets new payer address")
    @ApiBaseSiteIdAndUserIdParam
    public AddressWsDTO doSelectPayerAddress(@RequestParam("selectedAddressCode")
                                                final String selectedAddressCode, @RequestParam(value="sapCustomerID", required = false) String sapCustomerID,
                                                @RequestParam(value="deliveryPoint", required = false) String deliveryPoint,
                                                @Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId)
    {
//		final ValidationResults validationResults = getCheckoutStep().validate(redirectAttributes);
        CartData cartData = bhgeCheckoutFacade.getCheckoutCart();
//		if (getCheckoutStep().checkIfValidationErrors(validationResults))
//		{
//			return getCheckoutStep().onValidation(validationResults);
//		}
        AddressWsDTO addressDTO = new AddressWsDTO();

        if (StringUtils.isNotBlank(StringEscapeUtils.escapeHtml4(selectedAddressCode)))
        {
            //final AddressData selectedAddressData = getCheckoutFacade().getDeliveryAddressForCode(selectedAddressCode);
            final AddressData selectedAddressData = bhgeCheckoutFacade
                    .getPayerAddressForCodeWs(StringEscapeUtils.escapeHtml4(selectedAddressCode),StringEscapeUtils.escapeHtml4(checkoutCartId));
            cartData.setPayerAddress(selectedAddressData);
            
            LOG.info(" #################### Selected payer address at the Checkout page is "
                    + (StringUtils.isNotEmpty(selectedAddressData.getCompanyName()) ? selectedAddressData.getCompanyName() + "-" : "")
                    + " " + (StringUtils.isNotEmpty(selectedAddressData.getLine1()) ? selectedAddressData.getLine1() + "-" : "") + " "
                    + (StringUtils.isNotEmpty(selectedAddressData.getLine2()) ? selectedAddressData.getLine2() + "-" : "") + " "
                    + (StringUtils.isNotEmpty(selectedAddressData.getTown()) ? selectedAddressData.getTown() + "-" : "") + " "
                    + (selectedAddressData.getRegion() != null ? (StringUtils.isNotEmpty(selectedAddressData.getRegion().getName())
                    ? selectedAddressData.getRegion().getName() + "-"
                    : "") : "")
                    + " "
                    + (StringUtils.isNotEmpty(selectedAddressData.getCountry().getName())
                    ? selectedAddressData.getCountry().getName() + "-"
                    : "")
                    + " " + (StringUtils.isNotEmpty(selectedAddressData.getPostalCode()) ? selectedAddressData.getPostalCode() : ""));
            /*
             * final boolean hasSelectedAddressData = selectedAddressData != null; if (hasSelectedAddressData) {
             * setDeliveryAddress(selectedAddressData); }
             */
            try{
                populateDisableShippingOptions(null, selectedAddressData);
            }
            catch (RuntimeException ex){
                LOG.error("Exception occurred in populateDisableShippingOptions method" , ex);
                ex.printStackTrace();
            }
            addressDTO.setTitle(StringEscapeUtils.unescapeHtml4(selectedAddressData.getTitle()));
            addressDTO.setFirstName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getFirstName()));
            addressDTO.setLastName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getLastName()));
            addressDTO.setFormattedAddress(StringEscapeUtils.unescapeHtml4(selectedAddressData.getFormattedAddress()));
            addressDTO.setCompanyName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getCompanyName()));
            addressDTO.setLine1(StringEscapeUtils.unescapeHtml4(selectedAddressData.getLine1()));
            addressDTO.setLine2(StringEscapeUtils.unescapeHtml4(selectedAddressData.getLine2()));
            addressDTO.setTown(StringEscapeUtils.unescapeHtml4(selectedAddressData.getTown()));
            sapCustomerID = selectedAddressData.getSapCustomerID();
            addressDTO.setSapCustomerID(StringEscapeUtils.unescapeHtml4(sapCustomerID));
            addressDTO.setIsNuclear(selectedAddressData.getIsNuclear());
            deliveryPoint = selectedAddressData.getDeliveryPoint();
            addressDTO.setDeliveryPoint(StringEscapeUtils.unescapeHtml4(deliveryPoint));
            addressDTO.setCellphone(StringEscapeUtils.unescapeHtml4(selectedAddressData.getCellphone()));

            if(selectedAddressData.getSaveForFuture() != null) {
                addressDTO.setSaveForFuture(StringEscapeUtils.unescapeHtml4(selectedAddressData.getSaveForFuture().toString()));
            }

            RegionWsDTO region = new RegionWsDTO();
            if(selectedAddressData.getRegion() != null) {
                region.setIsocode(StringEscapeUtils.unescapeHtml4(selectedAddressData.getRegion().getIsocode()));
                region.setName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getRegion().getName()));
                region.setIsocodeShort(StringEscapeUtils.unescapeHtml4(selectedAddressData.getRegion().getIsocodeShort()));
                region.setCountryIso(StringEscapeUtils.unescapeHtml4(selectedAddressData.getRegion().getCountryIso()));
                addressDTO.setRegion(region);
            }

            CountryWsDTO country = new CountryWsDTO();
            if(selectedAddressData.getCountry() != null) {
                country.setName(StringEscapeUtils.unescapeHtml4(selectedAddressData.getCountry().getName()));
                country.setIsocode(StringEscapeUtils.unescapeHtml4(selectedAddressData.getCountry().getIsocode()));
                addressDTO.setCountry(country);
            }

            addressDTO.setPostalCode(StringEscapeUtils.unescapeHtml4(selectedAddressData.getPostalCode()));
        }
        if (!bhgeCartFacade.isGuestUser())
        {
            final CartModel cartModel = bhgeCartFacade.getAvailabiltyDetailsForCart();
            cartData = bhgeCartDataConverter.convert(cartModel);
        }
        //model.addAttribute("cartData", cartData);
       // bhgeCheckoutFacade.updateCheckoutCart(cartData);
        bhgeCheckoutFacade.updateCheckoutCartWs(cartData,checkoutCartId);
        //return ControllerConstants.Views.Fragments.Checkout.SelctedDeliveryAddress;

        return getDataMapper().map(addressDTO, AddressWsDTO.class, DsoccConstants.FULL);

    }

    @Secured({ "ROLE_CLIENT", "ROLE_CUSTOMERGROUP", "ROLE_CUSTOMERMANAGERGROUP", "ROLE_TRUSTED_CLIENT"})
    @RequestMapping(value = "/snapPayKey", method = RequestMethod.GET)
    @ResponseBody
    @ApiBaseSiteIdAndUserIdParam
    public String fetchSnapPayKey(){
        LOG.info("Inside fetchSnapPayKey method in checkout controller 2533 line");
        return Config.getParameter("payment.creditcard.snapPay.key");
    }
    
    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    public BHGECartService getBhgeCartService() {
        return bhgeCartService;
    }

    public void setBhgeCartService(BHGECartService bhgeCartService) {
        this.bhgeCartService = bhgeCartService;
    }

    public BHGERmaFormFacade getBhgeRmaFormFacade() {
        return bhgeRmaFormFacade;
    }

    public void setBhgeRmaFormFacade(BHGERmaFormFacade bhgeRmaFormFacade) {
        this.bhgeRmaFormFacade = bhgeRmaFormFacade;
    }

    public DefaultBHGECheckoutFacade getBhgeCheckoutFacade() {
        return bhgeCheckoutFacade;
    }

    public void setBhgeCheckoutFacade(DefaultBHGECheckoutFacade bhgeCheckoutFacade) {
        this.bhgeCheckoutFacade = bhgeCheckoutFacade;
    }

    public SiteConfigService getSiteConfigService() {
        return siteConfigService;
    }

    public void setSiteConfigService(SiteConfigService siteConfigService) {
        this.siteConfigService = siteConfigService;
    }

    public BHGEB2BUnitService getBhgeB2BUnitService() {
        return bhgeB2BUnitService;
    }

    public void setBhgeB2BUnitService(BHGEB2BUnitService bhgeB2BUnitService) {
        this.bhgeB2BUnitService = bhgeB2BUnitService;
    }

    public BHGEUserProfileFacade getBhgeUserProfileFacade() {
        return bhgeUserProfileFacade;
    }

    public void setBhgeUserProfileFacade(BHGEUserProfileFacade bhgeUserProfileFacade) {
        this.bhgeUserProfileFacade = bhgeUserProfileFacade;
    }

    public BHGECartFacade getBhgeCartFacade() {
        return bhgeCartFacade;
    }

    public void setBhgeCartFacade(BHGECartFacade bhgeCartFacade) {
        this.bhgeCartFacade = bhgeCartFacade;
    }

    public AcceleratorCheckoutFacade getCheckoutFacade() {
        return checkoutFacade;
    }

    public void setCheckoutFacade(AcceleratorCheckoutFacade checkoutFacade) {
        this.checkoutFacade = checkoutFacade;
    }

    public I18NFacade getI18NFacade() {
        return i18NFacade;
    }

    public void setI18NFacade(I18NFacade i18NFacade) {
        this.i18NFacade = i18NFacade;
    }

    public CustomerFacade getCustomerFacade() {
        return customerFacade;
    }

    public void setCustomerFacade(CustomerFacade customerFacade) {
        this.customerFacade = customerFacade;
    }

    public ProductFacade getProductFacade() {
        return productFacade;
    }

    public void setProductFacade(ProductFacade productFacade) {
        this.productFacade = productFacade;
    }

    public PriceDataFactory getPriceDataFactory() {
        return priceDataFactory;
    }

    public void setPriceDataFactory(PriceDataFactory priceDataFactory) {
        this.priceDataFactory = priceDataFactory;
    }
}
