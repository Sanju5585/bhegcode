/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.bhgestorefrontaddon.controllers.pages.checkout.steps;

import de.hybris.platform.acceleratorstorefrontcommons.annotations.PreValidateCheckoutStep;
import de.hybris.platform.acceleratorstorefrontcommons.annotations.PreValidateQuoteCheckoutStep;
import de.hybris.platform.acceleratorstorefrontcommons.annotations.RequireHardLogIn;
import de.hybris.platform.acceleratorstorefrontcommons.checkout.steps.CheckoutStep;
import de.hybris.platform.acceleratorstorefrontcommons.constants.WebConstants;
import de.hybris.platform.acceleratorstorefrontcommons.controllers.ThirdPartyConstants;
import de.hybris.platform.acceleratorstorefrontcommons.controllers.pages.checkout.steps.AbstractCheckoutStepController;
import de.hybris.platform.acceleratorstorefrontcommons.controllers.util.GlobalMessages;
import de.hybris.platform.acceleratorstorefrontcommons.forms.AddressForm;
import de.hybris.platform.b2bacceleratorfacades.order.data.B2BPaymentTypeData;
import de.hybris.platform.b2b.enums.CheckoutPaymentType;
import de.hybris.platform.b2bcommercefacades.company.B2BCostCenterFacade;
import de.hybris.platform.b2bcommercefacades.company.data.B2BCostCenterData;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.enums.data.ShippingCarrierMethodData;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commercefacades.user.data.RegionData;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.order.exceptions.CalculationException;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Objects;
import java.util.Set;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.bhge.bhgestorefrontaddon.controllers.BhgestorefrontaddonControllerConstants;
import com.bhge.bhgestorefrontaddon.forms.BHGEAddressForm;
import com.bhge.bhgestorefrontaddon.forms.PaymentTypeForm;
import com.bhge.bhgestorefrontaddon.forms.RestResponse;
import com.bhge.bhgestorefrontaddon.forms.validation.PaymentTypeFormValidator;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.constants.GeneratedBhgeCoreConstants.Enumerations.GEEdgeCartType;
import com.bhge.core.model.ReturnPOModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.facades.constants.BhgeFacadesConstants;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.order.impl.DefaultBHGECheckoutFacade;
import com.bhge.facades.rma.BHGERmaFormFacade;
import com.bhge.facades.rma.data.RmaReturnCartData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.storefront.forms.BHGEShippingAddressForm;
import com.bhge.util.exception.BhgeUtilException;
import com.bhge.util.service.BhgecommonutilsService;
import com.bhge.core.b2bunit.service.BHGEB2BUnitService;

@Controller
@RequestMapping(value = "/checkout/multi/payment-type")
public class PaymentTypeCheckoutStepController extends AbstractCheckoutStepController
{
	private final static String PAYMENT_TYPE = "payment-type";
	private static final Logger LOG = Logger.getLogger(PaymentTypeCheckoutStepController.class);
	private static final String SHOW_SAVE_TO_ADDRESS_BOOK_ATTR = "showSaveToAddressBook";
	private static final String DEFAULT_PAYMENT_TYPE = "ACCOUNT";
	private static final String BHGE_SHIPPING_ADDRESS_FORM_ATTR = "bhgeShippingAddressForm";
	private static final String BHGE_SOLDTO_ADDRESS_FORM_ATTR = "bhgeSoldtoAddressForm";
	private static final String BHGE_ENDUSER_ADDRESS_FORM_ATTR = "bhgeEndUserAddressForm";
	private static final String IS_DEFAULT_ADDRESS_ATTR = "isDefaultAddress";
	private static final String COUNTRY_DATA_ATTR = "countryData";
	private static final String REGIONS_ATTR = "regions";
	private static final String DEFAULT_COUNTRY_ISO = "US";
	private static long subQuantity = 0;

	@Resource(name = "b2bProductFacade")
	private ProductFacade productFacade;

	@Resource(name = "b2bCheckoutFacade")
	private DefaultBHGECheckoutFacade bhgeCheckoutFacade;

	@Resource(name = "b2bCustomerFacade")
	protected CustomerFacade customerFacade;

	@Resource(name = "bhgeCartFacade")
	private BHGECartFacade bhgeCartFacade;

	@Resource(name = "userService")
	private UserService userService;

	//	@Resource(name = "b2bCheckoutFacade")
	//	private CheckoutFacade b2bCheckoutFacade;

	@Resource(name = "costCenterFacade")
	private B2BCostCenterFacade costCenterFacade;

	@Resource(name = "paymentTypeFormValidator")
	private PaymentTypeFormValidator paymentTypeFormValidator;

	@ModelAttribute("paymentTypes")
	public Collection<B2BPaymentTypeData> getAllB2BPaymentTypes()
	{
		return bhgeCheckoutFacade.getPaymentTypes();
	}

	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource
	private BhgecommonutilsService commonUtilsService;

	@Autowired
	RestTemplate restTemplate;

	//@ModelAttribute("costCenters")
	//public List<? extends B2BCostCenterData> getVisibleActiveCostCenters()
	//{

	//	final List<? extends B2BCostCenterData> costCenterData = costCenterFacade.getActiveCostCenters();
	//	return costCenterData == null ? Collections.<B2BCostCenterData> emptyList() : costCenterData;
	//}

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "bhgeRmaFormFacade")
	private BHGERmaFormFacade bhgeRmaFormFacade;

	@Resource(name = "priceDataFactory")
	private PriceDataFactory priceDataFactory;

	@Autowired(required = true)
	private BHGEB2BUnitService bhgeB2BUnitService;

	@Override
	@RequestMapping(value = "/choose", method = RequestMethod.GET)
	@RequireHardLogIn
	@PreValidateQuoteCheckoutStep
	@PreValidateCheckoutStep(checkoutStep = PAYMENT_TYPE)
	public String enterStep(final Model model, final RedirectAttributes redirectAttributes)
			throws CMSItemNotFoundException, CommerceCartModificationException
	{
		LOG.info("=========================Inside enterStep method in PaymentTypeCheckoutStepController ==========================="
				+ userService.getCurrentUser());
		final CartModel cartModel = bhgeCartService.getSessionCart();
		//Sets guest session fields if it's guest checkout
		checkForAnonymousCheckout(cartModel);
		if (Objects.nonNull(cartModel.getCommerceType()) && cartModel.getCommerceType().toString().equals("RETURNS"))
		{
			if ("PARTIAL".equals(bhgeRmaFormFacade.gethazardCompleteness()))
			{
				return REDIRECT_PREFIX + "/rma/hazard-info";
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
		model.addAttribute("cartCommerceType", cartCommerceType);
		final CartData cartData = bhgeCheckoutFacade.getCheckoutCart();

		if (cartCommerceType.equalsIgnoreCase("RETURNS"))
		{
			cartData.setCommerceType(cartCommerceType);
			Double rmaTotalDiscountValue = 0.0;
			for (final AbstractOrderEntryModel entry : cartModel.getEntries())
			{
				if (entry.getSilverClause() != null)
				{
					rmaTotalDiscountValue += (entry.getSilverClause() * entry.getQuantity().doubleValue());
				}
			}
			final PriceData rmaTotalDiscount = populatePrice(rmaTotalDiscountValue, cartModel.getCurrency());
			cartData.setTotalDiscounts(rmaTotalDiscount);
			final List<RmaReturnCartData> returnList = bhgeRmaFormFacade.createReturnCart();
			final Map<String, Integer> locationMap = showCartEntryByLocation(returnList);
			model.addAttribute("returnList", returnList);
			model.addAttribute("locationMap", showCartEntryByLocationAndPrice(returnList));
			model.addAttribute("locationItemMap", locationMap);
			final List<String> locationList = new ArrayList<>(locationMap.keySet());
			model.addAttribute("locationList", locationList);
		}


		final Map<String, String> poDocMap = showPoDocByLocation(cartModel);
		model.addAttribute("poDocMap", poDocMap);

		LOG.info("=========================After setting poDocMap===========================" + userService.getCurrentUser());
		LOG.info("############## Order Placement Step 1 - /checkout/multi/payment-type/choose - " + cartData.getCode());
		LOG.info(" #################### Cart id of the Current Cart is " + cartData.getCode() + " and the Cart has "
				+ cartData.getTotalItems() + " items. ");
		model.addAttribute("cartData", cartData);
		model.addAttribute("paymentTypeForm", preparePaymentTypeForm(cartData));
		model.addAttribute("showChangeSoldto", Boolean.FALSE);
		//Added for Payment Terms
		final BHGESoldToData defaultSoldTo1 = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
		model.addAttribute("defaultSoldTo", defaultSoldTo1);
		prepareDataForPage(model);
		storeCmsPageInModel(model, getContentPageForLabelOrId(MULTI_CHECKOUT_SUMMARY_CMS_PAGE_LABEL));
		setUpMetaDataForContentPage(model, getContentPageForLabelOrId(MULTI_CHECKOUT_SUMMARY_CMS_PAGE_LABEL));
		model.addAttribute(WebConstants.BREADCRUMBS_KEY,
				getResourceBreadcrumbBuilder().getBreadcrumbs("checkout.multi.paymentType.breadcrumb"));
		model.addAttribute(ThirdPartyConstants.SeoRobots.META_ROBOTS, ThirdPartyConstants.SeoRobots.NOINDEX_NOFOLLOW);
		model.addAttribute("customerClassList", bhgeB2BUnitService.getCustomerClassList());
		setCheckoutStepLinksForModel(model, getCheckoutStep());


		LOG.info("=========================After setting checkout step links for model ==========================="
				+ userService.getCurrentUser());
		//Added for Customer Billing address showing in Payment Option.
		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{
			final String sessionSoldTo1 = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getUid();
			final AddressData soldToAddress = bhgeUserProfileFacade.getSoldToAddress(sessionSoldTo1);
			model.addAttribute("soldToAddress", soldToAddress);
			model.addAttribute("sessionSoldToName", sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO_NAME));
			final boolean soldtoBlock = bhgeCartFacade.getSoldtoBlockDetails();
			model.addAttribute("soldtoBlocksCheck", (soldtoBlock ? "YES" : "NO"));
			LOG.info("bhgeCartFacade.getSoldtoBlockDetails() - " + soldtoBlock);
			if (soldtoBlock)
			{
				GlobalMessages.addInfoMessage(model, "checkout.info.order.block");
			}
		}
		else
		{
			//Adding address forms onto the model

			final Map<String, String> endUserTypes = new LinkedHashMap<>();
			endUserTypes.put("ENDUSER", "I am the end user");
			endUserTypes.put("RESELLER", "I am a Reseller, purchasing for my stockroom");
			endUserTypes.put("RESELLERENDUSER", "I am a Reseller, purchasing for a customer PO");
			endUserTypes.put("MANUFACTURER", "I am an Original Equipment Manufacturer");
			final BHGEShippingAddressForm shippingAddressForm = new BHGEShippingAddressForm();
			shippingAddressForm.setEndUserTypes(endUserTypes);

			final BHGEAddressForm addressForm = new BHGEAddressForm();

			model.addAttribute(COUNTRY_DATA_ATTR, bhgeCheckoutFacade.getBillingCountries());
			model.addAttribute(REGIONS_ATTR, getI18NFacade().getRegionsForCountryIso(DEFAULT_COUNTRY_ISO));
			model.addAttribute(BHGE_SHIPPING_ADDRESS_FORM_ATTR, addressForm);
			model.addAttribute(BHGE_SOLDTO_ADDRESS_FORM_ATTR, addressForm);
			model.addAttribute(BHGE_ENDUSER_ADDRESS_FORM_ATTR, shippingAddressForm);
		}
		try
		{
			populateCommonModelAttributes(model, cartData, new AddressForm());
		}
		catch (final CalculationException e)
		{
			LOG.error(e);
		}
		return BhgestorefrontaddonControllerConstants.Views.Pages.MultiStepCheckout.ChoosePaymentTypePage;
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

		for (final Entry<String, Double> entry : priceMap.entrySet())
		{
			final String location = entry.getKey();
			final PriceData price = populatePrice(priceMap.get(location), cartModel.getCurrency());
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

	protected PriceData populatePrice(final Double price, final CurrencyModel currency)
	{
		final double priceValue = price != null ? price.doubleValue() : 0d;
		return priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(priceValue), currency);
	}

	@RequestMapping(value = "/checkputBlocks", method = RequestMethod.GET)
	public String checkputBlocks(final Model model) throws CMSItemNotFoundException, CommerceCartModificationException
	{
		final BHGESoldToData inoutSoldtoData = new BHGESoldToData();
		inoutSoldtoData.setUid("0000125681");
		sessionService.setAttribute("sessionSoldTo", inoutSoldtoData);
		LOG.info("soldtoBlocksCheck 0000125681 = " + bhgeCartFacade.getSoldtoBlockDetails());
		inoutSoldtoData.setUid("0000125462");
		sessionService.setAttribute("sessionSoldTo", inoutSoldtoData);
		LOG.info("soldtoBlocksCheck 0000125462 = " + bhgeCartFacade.getSoldtoBlockDetails());
		storeCmsPageInModel(model, getContentPageForLabelOrId("loadRegisterActivatepage"));
		setUpMetaDataForContentPage(model, getContentPageForLabelOrId("loadRegisterActivatepage"));
		LOG.info("Passed loadActivation");
		return getViewForPage(model);
	}


	@RequestMapping(value = "/choose", method = RequestMethod.POST)
	@RequireHardLogIn
	@ResponseBody
	public RestResponse choose(@ModelAttribute
	final PaymentTypeForm paymentTypeForm, final HttpServletRequest request, final HttpSession session,
			final BindingResult bindingResult, final Model model)
			throws CMSItemNotFoundException, CommerceCartModificationException, BhgeUtilException
	{
		boolean captchaResponse = false;
		final String captcha = paymentTypeForm.getGoogleCaptcha();
		final RestResponse restResponse = new RestResponse();
		if (userService.isAnonymousUser(userService.getCurrentUser()) && null != captcha)
		{
			if (commonUtilsService.validateGoogleCaptchaNew(request, session, restTemplate, captcha))
			{
				captchaResponse = true;
			}
		}
		if (captchaResponse || !userService.isAnonymousUser(userService.getCurrentUser()))
		{
			paymentTypeFormValidator.validate(paymentTypeForm, bindingResult);

			if (bindingResult.hasErrors())
			{
				GlobalMessages.addErrorMessage(model, "checkout.error.paymenttype.formentry.invalid");
				if (paymentTypeForm != null)
				{
					model.addAttribute("paymentTypeForm", paymentTypeForm);
				}
				model.addAttribute("showChangeSoldto", Boolean.FALSE);
				final CartData cartData = bhgeCheckoutFacade.getCheckoutCart();
				final List<OrderEntryData> recentlyAddedListEntries = new ArrayList<>(cartData.getEntries());
				cartData.setEntries(Collections.unmodifiableList(recentlyAddedListEntries));
				model.addAttribute("cartData", cartData);
				prepareDataForPage(model);
				storeCmsPageInModel(model, getContentPageForLabelOrId(MULTI_CHECKOUT_SUMMARY_CMS_PAGE_LABEL));
				setUpMetaDataForContentPage(model, getContentPageForLabelOrId(MULTI_CHECKOUT_SUMMARY_CMS_PAGE_LABEL));
				model.addAttribute(WebConstants.BREADCRUMBS_KEY,
						getResourceBreadcrumbBuilder().getBreadcrumbs("checkout.multi.paymentType.breadcrumb"));
				model.addAttribute(ThirdPartyConstants.SeoRobots.META_ROBOTS, ThirdPartyConstants.SeoRobots.NOINDEX_NOFOLLOW);
				setCheckoutStepLinksForModel(model, getCheckoutStep());

				restResponse.setStatus(RestResponse.STATUS.ERROR);
				restResponse.setMessage(Config.getString("checkout.error.paymenttype.formentry.invalid", "Error occurred"));
				return restResponse;
				//			return BhgestorefrontaddonControllerConstants.Views.Pages.MultiStepCheckout.ChoosePaymentTypePage;
			}

			updateCheckoutCart(paymentTypeForm);

			checkAndSelectDeliveryAddress(paymentTypeForm);
			//final String nextStep = getCheckoutStep().nextStep();
			//		return null;
			restResponse.setStatus(RestResponse.STATUS.SUCCESS);
			restResponse.setMessage("");
		}
		else
		{
			restResponse.setStatus(RestResponse.STATUS.ERROR);
			restResponse.setMessage(Config.getString("inavalid.reCaptcha", "Invalid Captcha"));
		}
		return restResponse;
	}

	protected void updateCheckoutCart(final PaymentTypeForm paymentTypeForm)
	{
		//final CartData cartData = new CartData();
		final CartData cartData = bhgeCheckoutFacade.getCheckoutCart();

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

		bhgeCheckoutFacade.updateCheckoutCart(cartData);
	}

	@RequestMapping(value = "/next", method = RequestMethod.GET)
	@RequireHardLogIn
	@Override
	public String next(final RedirectAttributes redirectAttributes)
	{
		return getCheckoutStep().nextStep();
	}

	@RequestMapping(value = "/back", method = RequestMethod.GET)
	@RequireHardLogIn
	@Override
	public String back(final RedirectAttributes redirectAttributes)
	{
		return getCheckoutStep().previousStep();
	}

	protected PaymentTypeForm preparePaymentTypeForm(final CartData cartData)
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
	}

	protected void checkAndSelectDeliveryAddress(final PaymentTypeForm paymentTypeForm)
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

	protected CheckoutStep getCheckoutStep()
	{
		return getCheckoutStep(PAYMENT_TYPE);
	}

	@SuppressWarnings("boxing")
	protected void populateCommonModelAttributes(final Model model, final CartData cartData, final AddressForm addressForm)
			throws CMSItemNotFoundException, CalculationException
	{
		//Adding for DSc Commerce
		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGESoldToData defaultSoldTo1 = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");

		final List<ShippingCarrierMethodData> prepayCarrierTypes = bhgeCheckoutFacade.retriveCarrierMethods("prepay_add");
		final List<ShippingCarrierMethodData> collectCarrierTypes = bhgeCheckoutFacade.retriveCarrierMethods("collect");

		model.addAttribute("prepay_addTypes", prepayCarrierTypes);
		model.addAttribute("collectTypes", collectCarrierTypes);
		model.addAttribute("defaultSoldTo", defaultSoldTo1);
		//model.addAttribute("containsDefaultShipToAddress", true);
		final List<RegionData> listOfRegions = bhgeUserProfileFacade.getRegionsForCountryCode(BhgeFacadesConstants.US_COUNTRY_CODE);
		model.addAttribute("listOfRegions", listOfRegions);

		AddressData defaultShipToData = cartData.getDeliveryAddress();
		final String incoTerm1 = bhgeCartFacade.getIncoterm1(defaultShipToData, defaultSoldTo1);
		final String incoTerm2 = bhgeCartFacade.getIncoterm2(defaultShipToData, defaultSoldTo1);
		//Code for getting Inco_Terms from Ship to
		model.addAttribute("shipToIncotrmName", bhgeCartFacade.getIncotermModel(defaultShipToData, defaultSoldTo1));
		model.addAttribute("shipToIncoterm1", incoTerm1);
		model.addAttribute("shipToIncoterm2", incoTerm2);

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

		if (defaultShipToData != null)
		{
			model.addAttribute("defaultShiptToAddress", defaultShipToData);
			cartData.setDeliveryAddress(defaultShipToData);


			//Code for Disabling Carrier based on Inco_Terms
			final String incoterms = Config.getParameter("INCOTERMS_LIST");
			final List<String> incoterm_list = Arrays.asList(incoterms.split("\\s*,\\s*"));
			if (incoterm_list.contains(bhgeCartFacade.getIncoterm1(defaultShipToData, defaultSoldTo1)))
			{
				model.addAttribute("disableShippingOptions", true);
			}
			else
			{
				model.addAttribute("disableShippingOptions", false);
			}
		}
		else
		{
			model.addAttribute("containsDefaultShipToAddress", false);
		}

		final AddressData defaultEndUserData = cartData.getEnduserAddress();
		if (defaultEndUserData != null)
		{
			model.addAttribute("defaultEndUserAddress", defaultEndUserData);
			cartData.setEnduserAddress(defaultEndUserData);
		}
		else
		{
			model.addAttribute("containsDefaultEndUserAddress", false);
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

		if (null != ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency())
		{
			model.addAttribute("currencyISO",
					((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency().getIsocode());
			model.addAttribute("currencyFormattedValue",
					((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency().getSymbol());
		}


		model.addAttribute("addressForm", addressForm);
		model.addAttribute(SHOW_SAVE_TO_ADDRESS_BOOK_ATTR, Boolean.TRUE);
		model.addAttribute("metaRobots", "noindex,nofollow");
		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{
			if (bhgeUserProfileFacade.getDefaultSoldTo() != null)
			{
				final AddressData defaultSoldToData = bhgeUserProfileFacade.getDefaultSoldTo();
				model.addAttribute("defaultSoldToAddress", defaultSoldToData);
			}

			final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
			//Setting Notification Mails if account is set
			model.addAttribute("orderConfirmationMailAttr", bhgeCustomerData.getSendSalesOrderEmail());
			model.addAttribute("shipNotificationMailAttr", bhgeCustomerData.getSendShippingNotificationEmail());
			model.addAttribute("sendInvoiceMailAttr", bhgeCustomerData.getSendInvoiceEmail());
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
					&& cartData.getCartType().equalsIgnoreCase(GEEdgeCartType.NONFILM))
			{
				cartData.setDeliveryCarrier(bhgeCustomerData.getDeliveryCarrier());
			}
		}
		bhgeCheckoutFacade.updateCheckoutCart(cartData);
		bhgeCheckoutFacade.recalculate();
		
		if (Objects.isNull(cartData.getCommerceType()) || cartData.getCommerceType() != "RETURNS")
		{
			bhgeCheckoutFacade.updatevouchersFromCartData(cartData);
		}
		model.addAttribute("cartData", cartData);
		prepareDataForPage(model);
		storeCmsPageInModel(model, getContentPageForLabelOrId(MULTI_CHECKOUT_SUMMARY_CMS_PAGE_LABEL));
		setUpMetaDataForContentPage(model, getContentPageForLabelOrId(MULTI_CHECKOUT_SUMMARY_CMS_PAGE_LABEL));
	}

	/**
	 * Sets anonymous session fields
	 *
	 * @return
	 */
	protected boolean checkForAnonymousCheckout(final CartModel cartModel)
	{
		LOG.info("################# value of anonymous_checkout is : "
				+ getSessionService().getAttribute(WebConstants.ANONYMOUS_CHECKOUT));
		if (Boolean.TRUE.equals(sessionService.getAttribute(WebConstants.ANONYMOUS_CHECKOUT)))
		{
			if (sessionService.getAttribute(WebConstants.ANONYMOUS_CHECKOUT_GUID) == null)
			{
				sessionService.setAttribute(WebConstants.ANONYMOUS_CHECKOUT_GUID,
						StringUtils.substringBefore(cartModel.getUser().getUid(), "|"));
			}
			return true;
		}

		return false;
	}
}
