package com.bh.occ.facades.impl;

import java.math.BigDecimal;
import java.math.MathContext;
import java.util.*;
import java.util.function.Consumer;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;

import com.bhge.core.model.BHGECurrencyModel;
import com.bhge.core.order.service.BHGEPaymentService;
import com.bhge.core.util.BHGEPriceAvailabilityUtils;
import com.ds.dsocc.common.dto.EcaPOWsDTO;
import com.hybris.ge.edge.core.model.type.BHGECreditCardPaymnentinfoModel;
import com.hybris.ge.edge.core.model.type.BHGESavedCreditcardModel;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import com.bhge.facades.PaymentTermsData;
import com.hybris.ge.edge.core.model.type.PaymenttermModel;
import de.hybris.platform.b2b.enums.CheckoutPaymentType;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bh.occ.facades.DsCheckoutFacade;
import com.bh.occ.forms.BHGEPlaceOrderForm;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.BHGERMACommerceType;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.order.service.BHGECalculationService;
import com.bhge.core.util.BHGECustomerUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.order.BHGEB2BOrderFacade;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.order.impl.DefaultBHGECheckoutFacade;
import com.bhge.facades.order.populators.BHGEOrderPopulator;
import com.bhge.facades.rma.BHGERmaFormFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGESoldToData;
import com.ds.facades.orderDetails.OrderDetailsData;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2bacceleratorfacades.checkout.data.PlaceOrderData;
import de.hybris.platform.b2bacceleratorfacades.exception.EntityValidationException;
import de.hybris.platform.b2bacceleratorservices.event.OrderPendingApprovalEvent;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.coupon.data.CouponData;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.OrderData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.core.CoreAlgorithms;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.orderprocessing.model.OrderProcessModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.event.EventService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.DiscountValue;

public class DefaultDsCheckoutFacade implements DsCheckoutFacade {
	
	private static final Logger LOG = Logger.getLogger(DefaultDsCheckoutFacade.class);
	
	@Resource(name = "b2bCheckoutFacade")
	private DefaultBHGECheckoutFacade bhgeCheckoutFacade;
	
	@Resource(name = "userService")
	public UserService userService;
	
	@Resource(name = "bhgeOrderPopulator")
	private BHGEOrderPopulator bhgeOrderPopulator;
	
	@Resource(name = "b2bOrderFacade")
	private BHGEB2BOrderFacade b2bOrderFacade;
	
	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;
	
	@Resource(name="bhgeSoldToUtil")
	private BHGESoldToUtil bhgeSoldToUtil;
	
	@Resource(name = "priceDataFactory")
	private PriceDataFactory priceDataFactory;

	@Resource(name = "productFacade")
	private ProductFacade productFacade;
	
	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "bhgeCartFacade")
	private BHGECartFacade bhgeCartFacade;

	@Resource(name = "businessProcessService")
	private BusinessProcessService businessProcessService;
	
	@Resource(name="eventService")
	private EventService eventService;

	@Resource(name = "modelService")
	public ModelService modelService;
	
	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	@Resource(name = "calculationService")
	private BHGECalculationService bhgeCalculationService;
	@Resource(name="bhgePriceAvailabilityUtils")
	private BHGEPriceAvailabilityUtils bhgePriceAvailabilityUtils;

	@Resource(name = "bhgePaymentService")
	public BHGEPaymentService bhgePaymentService;

	@Resource(name = "bhgeRmaFormFacade")
	private BHGERmaFormFacade bhgeRmaFormFacade;

	@Resource(name = "addressConverter")
	private Converter<AddressModel, AddressData> addressConverter;

	private static final String COMPLIANCE_FLAG_TRUE = "true";
	
	private static final int CURRENCY_FORMAT_DIGITS = 2;


	@Override
	public String placeOrderForDsSpartacusStore(BHGEPlaceOrderForm bhgePlaceOrderForm,CartData cartData,CartModel cartModel) {

		String orderNumbers = StringUtils.EMPTY;

		LOG.info("############## Order Placement Step 4 - /checkout/multi/summary/placeOrder - ");

		// Helper to set boolean flags
		setCartDataFlag(cartData::setIsGovernment, bhgePlaceOrderForm.getGovtAgencyFlagVal());
		setCartDataFlag(cartData::setIsExport, bhgePlaceOrderForm.getPlanToExportFlagVal());
		setCartDataFlag(cartData::setIsNuclearOppurtunity, bhgePlaceOrderForm.getNuclearOpportFlagVal());
		LOG.info("NuclearOpportFlagVal"+bhgePlaceOrderForm.getNuclearOpportFlagVal());
		setCartDataFlag(cartData::setIsBuyer, bhgePlaceOrderForm.getIsBuyerFlagVal());
		LOG.info("isNuclearOppurtunity"+cartData.getIsNuclearOppurtunity());
		LOG.info("Order Data placeOrderForDsSpartacusStore Flags - isGovernment: " + cartData.getIsGovernment() +
				", isExport: " + cartData.getIsExport() +
				", isNuclearOppurtunity: " + cartData.getIsNuclearOppurtunity() +
				", isBuyer: " + cartData.getIsBuyer());

		LOG.info("############## Order Placement Step 4.1 - Flag Store Complete - ");
		cartData.setPlanToExport(StringEscapeUtils.escapeHtml4(bhgePlaceOrderForm.getExportAddress()));
		try
		{
		//bhgeCheckoutFacade.updateCheckoutCart(cartData);
		bhgeCheckoutFacade.updateCheckoutCartForDS(cartData, cartModel);

		LOG.info("############## Order Placement Step 4.2 - Data Model Finalized - ");
		//bhgeCheckoutFacade.recalculate();
		bhgeCalculationService.recalculate(cartModel);

		if (Objects.isNull(cartData.getCommerceType()) || cartData.getCommerceType() != "RETURNS")
		{
			bhgeCheckoutFacade.updatevouchersFromCartData(cartData);
		}

		//Generates checkout PDF for guest user
		//final boolean isCheckoutPDFGenerated = userService.isAnonymousUser(userService.getCurrentUser())
				//? bhgeCheckoutFacade.generateCheckoutPdf()
				//: true;
		/*Passing the cartModel instead*/
		final boolean isCheckoutPDFGenerated = userService.isAnonymousUser(userService.getCurrentUser())
				? bhgeCheckoutFacade.generateCheckoutPdfForDs(cartModel)
				: true;
		if (!isCheckoutPDFGenerated)
		{
			LOG.info("Checkout PDF is not generated for cart");
		}
		setEcaPOnumberForCart(cartData, cartModel);

		final PlaceOrderData placeOrderData = buildPlaceOrderData(bhgePlaceOrderForm);

		//		final AbstractOrderData orderData;

			if(StringUtils.isNotEmpty(cartData.getCcNumber())){
				populateCCPaymentInfo(cartData, cartModel);
			}
			LOG.info("############## Order Placement Step 4.4 - Ready for Splitter - ");
			final List<OrderModel> orderDataList = bhgeCheckoutFacade.placeOrderWithSplitForDs(cartModel);

			LOG.info("############## Order Placement Step 4.5 - Post Splitter Execution - ");

			if (CollectionUtils.isNotEmpty(orderDataList))
			{
				for (final OrderModel dataModel : orderDataList)
				{
					final OrderData data = new OrderData();
					bhgeOrderPopulator.populate(dataModel, data);
					final StringBuffer orderData = new StringBuffer();
					orderData.append(orderNumbers).append(data.getCode()).append(BhgeCoreConstants.PIPELINE);
					/*
					 * if (StringUtils.isNotEmpty(dataModel.getRmaNumber())) {
					 * orderData.append(orderNumbers).append(dataModel.getRmaNumber()).append(BhgeCoreConstants.PIPELINE); }
					 * else { orderData.append(orderNumbers).append(data.getCode()).append(BhgeCoreConstants.PIPELINE); }
					 */
					orderNumbers = orderData.toString();
					updateCustomerModel(dataModel);
				}
				if (StringUtils.isNotBlank(orderNumbers) && orderNumbers.length() > 2)
				{
					orderNumbers = orderNumbers.substring(0, orderNumbers.length() - 1);
				}
			}
		}
		//		try
		//		{
		//			//orderData = getB2BCheckoutFacade().placeOrder(placeOrderData);
		//			orderData = bhgeCheckoutFacade.placeOrder(placeOrderData);
		//		}
		catch (final EntityValidationException e)
		{
			LOG.error("Failed to place Order", e);
			/*GlobalMessages.addErrorMessage(model, e.getLocalizedMessage());

			placeOrderForm.setTermsCheck(false);
			model.addAttribute(placeOrderForm);

			return enterStep(model, redirectModel);*/
		}
		catch (final Exception e)
		{
			LOG.error("Failed to place Order", e);
			/*GlobalMessages.addErrorMessage(model, "checkout.placeOrder.failed");
			return enterStep(model, redirectModel);*/
		}
		LOG.info("############## Order Placement Step 4.6 - Order Number Finalization - ");

		//return REDIRECT_URL_ORDER_CONFIRMATION + orderNumbers;
		
		
		
		
		// TODO Auto-generated method stub
		return orderNumbers;
	}
	// Helper method to set boolean flags
	private void setCartDataFlag(Consumer<Boolean> setter, String flagValue) {
		setter.accept(COMPLIANCE_FLAG_TRUE.equalsIgnoreCase(flagValue));
	}
	// Helper to build PlaceOrderData
	private PlaceOrderData buildPlaceOrderData(BHGEPlaceOrderForm form) {
		LOG.info("placeOrderForDsSpartacusStore Building PlaceOrderData from BHGEPlaceOrderForm");
		PlaceOrderData data = new PlaceOrderData();
		data.setNDays(StringEscapeUtils.escapeHtml4(form.getnDays()));
		data.setNDaysOfWeek(form.getnDaysOfWeek());
		data.setNthDayOfMonth(StringEscapeUtils.escapeHtml4(form.getNthDayOfMonth()));
		data.setNWeeks(form.getnWeeks());
		data.setReplenishmentOrder(form.isReplenishmentOrder());
		data.setReplenishmentRecurrence(form.getReplenishmentRecurrence());
		data.setReplenishmentStartDate(form.getReplenishmentStartDate());
		data.setSecurityCode(StringEscapeUtils.escapeHtml4(form.getSecurityCode()));
		data.setTermsCheck(form.isTermsCheck());
		return data;
	}

	private void setEcaPOnumberForCart(CartData cartData, CartModel cartModel) {
		List<OrderEntryData> cartDataEntries = cartData.getEntries();
		List<AbstractOrderEntryModel> cartModelEntries = cartModel.getEntries();
		for (int i = 0; i < cartDataEntries.size(); i++) {
			OrderEntryData entry = cartDataEntries.get(i);
			AbstractOrderEntryModel cartModelEntry = cartModelEntries.get(i);
			if(null !=entry && StringUtils.isNotBlank(entry.getEcaPONumber())&& null !=entry.getEcaCode()) {
					LOG.info("ECA PO Number: " + entry.getEcaPONumber() + " and ECA Code: " + entry.getEcaCode() + " for Cart Entry: " + cartModelEntry.getEntryNumber());
					if (Objects.equals(entry.getEcaCode(), cartModelEntry.getEcaCode())) {
						cartModelEntry.setEcaPONumber(entry.getEcaPONumber());
						modelService.save(cartModelEntry);
						modelService.refresh(cartModelEntry);
						LOG.info("Set ECA PO Number: " + entry.getEcaPONumber() + " for Cart Entry: " + cartModelEntry.getEntryNumber());
					}
			}

		}
		modelService.save(cartModel);
		 modelService.refresh(cartModel);
		 LOG.info("Set ECA PO Number for Cart: " + cartModel.getCode());
	}


	private void updateCustomerModel(OrderModel dataModel) {
		LOG.info("placeOrderForDsSpartacusStore Updating Customer Model with Order Data");
		if (!(dataModel.getUser() instanceof GEEdgeCustomerModel)) {
			return;
		}
		GEEdgeCustomerModel customerModel = (GEEdgeCustomerModel) dataModel.getUser();

		// Map of customer field getters/setters and corresponding order model values
		Map<Runnable, String> updates = new LinkedHashMap<>();
		updates.put(() -> customerModel.setSoaContact(dataModel.getSoaContact()), customerModel.getSoaContact());
		updates.put(() -> customerModel.setSoaPhone(dataModel.getSoaPhone()), customerModel.getSoaPhone());
		updates.put(() -> customerModel.setShippingContactName(dataModel.getShipToContactName()), customerModel.getShippingContactName());
		updates.put(() -> customerModel.setShippingContactNumber(dataModel.getShipToContactPhone()), customerModel.getShippingContactNumber());
		updates.put(() -> customerModel.setDeliveryAccount(dataModel.getDeliveryAccountNum()), customerModel.getDeliveryAccount());
		updates.put(() -> customerModel.setSendShippingNotificationEmail(dataModel.getShipNotificationEmail()), customerModel.getSendShippingNotificationEmail());
		updates.put(() -> customerModel.setInvoiceContact(dataModel.getInvoiceContact()), customerModel.getInvoiceContact());
		updates.put(() -> customerModel.setInvoicePhone(dataModel.getInvoicePhone()), customerModel.getInvoicePhone());
		updates.put(() -> customerModel.setSendInvoiceEmail(dataModel.getInvoiceEmail()), customerModel.getSendInvoiceEmail());
		updates.put(() -> customerModel.setSendSalesOrderEmail(dataModel.getOrderConfirmationEMail()), customerModel.getSendSalesOrderEmail());

		// Only update fields that are blank
		updates.forEach((setter, currentValue) -> {
			if (StringUtils.isBlank(currentValue)) {
				setter.run();
			}
		});

		modelService.save(customerModel);
		modelService.refresh(customerModel);
	}

	private void populateCCPaymentInfo(CartData cartData, CartModel cartModel) {
		BHGECreditCardPaymnentinfoModel ccPaymentModel = new BHGECreditCardPaymnentinfoModel();
		ccPaymentModel.setName(cartData.getCcName());
		ccPaymentModel.setToken(cartData.getCcNumber());
		ccPaymentModel.setValidTru(cartData.getCcValidTru());
		ccPaymentModel.setType(cartData.getCcType());
		cartModel.setBhgeCreditCardPaymentInfo(ccPaymentModel);
	}

	@Override
	public OrderDetailsData processOrderCodeForDS(String orderCode,String guestSalesArea) {
		final String[] orderCodes = (null != orderCode && orderCode.contains(BhgeCoreConstants.PIPELINE))
				? StringUtils.split(orderCode, BhgeCoreConstants.PIPELINE)
				: new String[]
				{ orderCode };
		orderCode = orderCodes[0];
		LOG.info(" ##################### Order number of the currently placed Order is " + orderCode
				+ " and the order has been placed at " + Calendar.getInstance().getTime());
		OrderModel orderModel = null;
		orderModel = bhgeB2BOrderService.fetchOrderForCode(orderCode);
		final List<OrderData> orderDetailsList = getOrderDataList(orderCodes);
		if (CollectionUtils.isNotEmpty(orderDetailsList))
		{
			if (userService.isAnonymousUser(userService.getCurrentUser()))
			{
				//if (getSessionService().getAttribute(WebConstants.ANONYMOUS_CHECKOUT_GUID) != null
						//&& StringUtils.substringBefore(orderModel.getUser().getUid(), "|")
								//.equalsIgnoreCase(getSessionService().getAttribute(WebConstants.ANONYMOUS_CHECKOUT_GUID)))
				//{
					//final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");
					//TO DO /*Will be replaced by guestSalesArea*/
					final SalesAreaData sessionSalesAreaData = bhgeSoldToUtil.getSalesAreaDataForGuestUser("1800_GE_GE");
					//isErrorScenario = processOrderConfirmationDetails(orderCode, model, orderCodes, orderModel, sessionSalesAreaData,
							//orderDetailsList);
					OrderDetailsData orderDetailsData = processOrderConfirmationDetailsForDs(orderCode,orderCodes, orderModel, sessionSalesAreaData,
							orderDetailsList,guestSalesArea);

					triggerEmailProcessForGuest(orderModel);
					// Internal Guest order Notification mail start
					try {
						LOG.info("Internal Guest order Notification mail - Start");
						if(BHGERMACommerceType.GUESTBUY.equals(orderModel.getCommerceType())) {
							LOG.info("Sending Internal Guest order Notification Email");
							bhgeEmailService.sendGuestOrderNotificationEmail(orderModel);
							LOG.info("Successfully sent Internal Guest order Notification Email");
						}
						LOG.info("Internal Guest order Notification mail - End");
					}catch (RuntimeException re) {
						LOG.error("Exception in Sending Internal Guest order Notification Email", re);
						re.printStackTrace();
					}
					return orderDetailsData;
				//}
				
				
			}

			if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
			{
				//final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");
				final SalesAreaData sessionSalesAreaData = bhgeSoldToUtil.getSalesAreaData();
				if (sessionSalesAreaData != null
						&& BHGECustomerUtil.isUserAllowedToView(sessionSalesAreaData.getB2bUnitUid(), userService))
				{
					//isErrorScenario = processOrderConfirmationDetailsForDs(orderCode,orderCodes, orderModel, sessionSalesAreaData,
							//orderDetailsList);
					OrderDetailsData orderDetailsData = processOrderConfirmationDetailsForDs(orderCode,orderCodes, orderModel, sessionSalesAreaData,
							orderDetailsList,guestSalesArea);
					return orderDetailsData;
					
				}
			}
		}
		/*if (isErrorScenario)
		{
			return handleErrorScenario();
		}
		else if (ResponsiveUtils.isResponsive())
		{
			return getViewForPage(model);
		}*/
		return null;

		//return ControllerConstants.Views.Pages.Checkout.CheckoutConfirmationPage;
		
	}

	
	private List<OrderData> getOrderDataList(final String[] orderCodes)
	{
		final List<OrderData> orderDetailsList = new ArrayList<>();
		for (final String orderCode : orderCodes)
		{
			if (StringUtils.isNotBlank(orderCode))
			{
				final OrderData orderDetails = b2bOrderFacade.fetchOrderDetailsForCode(orderCode);
				if (null != orderDetails)
				{
					orderDetailsList.add(orderDetails);
				}
			}
		}
		return orderDetailsList;
	}

	/**
	 * @param orderCode
	 * @param model
	 * @param orderCodes
	 * @param orderModel
	 * @param netAmountConf
	 * @param netDiscount
	 * @param yourPriceDiscountConf
	 * @param couponDiscountConf
	 * @param orderDetailsList
	 * @throws CMSItemNotFoundException
	 */
	private OrderDetailsData processOrderConfirmationDetailsForDs(final String orderCode, final String[] orderCodes,
																  final OrderModel orderModel, final SalesAreaData sessionSalesAreaData, final List<OrderData> orderDetailsList, final String guestSalesArea) {

		OrderDetailsData orderDetailsData = new OrderDetailsData();
		try {
			initializeOrderDetailsData(orderDetailsData, sessionSalesAreaData, orderModel,orderDetailsList);

			if (orderCodes.length > 1) {
				bhgePriceAvailabilityUtils.processMultipleOrders(orderCodes, orderDetailsData, orderModel);
			} else {
				bhgePriceAvailabilityUtils.processSingleOrder(orderModel, orderDetailsData);
			}

			populateOrderDetails(orderDetailsList, sessionSalesAreaData, orderModel, guestSalesArea, orderDetailsData);

			bhgePriceAvailabilityUtils.calculateTotals(orderDetailsList, orderDetailsData, orderModel);

		} catch (final Exception ex) {
			LOG.error("Exception occurred in processOrderConfirmationDetailsForDs method: " + ex.getMessage(), ex);
		}
		return orderDetailsData;
	}
	public void initializeOrderDetailsData(OrderDetailsData orderDetailsData, SalesAreaData sessionSalesAreaData, OrderModel orderModel, List<OrderData> orderDetailsList) {
		LOG.info("initializeOrderDetailsData: Initializing Order Details Data for Order Code: " + orderModel.getCode());

		//Checking whether CC is existing for user or not
		if(orderModel.getPaymentType() != null && orderModel.getPaymentType().equals(CheckoutPaymentType.CARD)) {
			orderDetailsData.setIsCardExist(bhgePriceAvailabilityUtils.checkCardExist(orderModel));
		}
		if(orderModel.getIsQuote())
		{
			orderDetailsData.setIsQuote(true);
			LOG.info("Setting IsQuote Order is a quote");
		}
		else
		{
			orderDetailsData.setIsQuote(false);
			LOG.info("Setting IsQuote Order is not a quote");
		}
		bhgeRmaFormFacade.setCheckoutRmaDataforWS(orderDetailsList, orderModel.getCurrency());
        if(orderModel.getCurrency() !=null){
            LOG.info("currency in order context " + orderModel.getCurrency().getIsocode());
            orderDetailsData.setCurrenyIso(orderModel.getCurrency().getIsocode());
            orderDetailsData.setCurrenySymbol(orderModel.getCurrency().getSymbol());
        }

		else if (sessionSalesAreaData != null) {
			orderDetailsData.setCurrenyIso(sessionSalesAreaData.getCurrencyIso());
			orderDetailsData.setCurrenySymbol(sessionSalesAreaData.getCurrencySymbol());
		}
		if (orderModel.getPayerAddress() != null) {
			orderDetailsData.setPayerAddress(addressConverter.convert(orderModel.getPayerAddress()));
		}
	}
	public void populateOrderDetails(List<OrderData> orderDetailsList, SalesAreaData sessionSalesAreaData, OrderModel orderModel,
									 String guestSalesArea, OrderDetailsData orderDetailsData) {
		LOG.info("populateOrderDetails: Populating Order Details for Order Code: " + orderModel.getCode() + " with Sales Area: " + guestSalesArea);

		for (OrderData orderDetails : orderDetailsList) {
			populateOrderEntries(orderDetails, sessionSalesAreaData, orderModel, guestSalesArea, orderDetailsData);
		}
		orderDetailsData.setOrdersList(orderDetailsList);
	}
	private void populateRegisteredUserOrderDetails(OrderData orderDetails, OrderModel orderModel) {
		GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		B2BUnitModel b2bUnit = currentUser.getDefaultB2BUnit();
		BHGESoldToData defaultSoldTo = bhgeSoldToUtil.getBHGESoldToData(b2bUnit);
		populatesoldToAddress(b2bUnit, orderDetails);
		orderDetails.setShipToIncoterm1(bhgeCartFacade.getIncoterm1(orderDetails.getDeliveryAddress(), defaultSoldTo));
		orderDetails.setShipToIncoterm2(bhgeCartFacade.getIncoterm2(orderDetails.getDeliveryAddress(), defaultSoldTo));
		if(orderModel.getPaymentType() != null && orderModel.getPaymentType().equals(CheckoutPaymentType.CARD)){
			orderDetails.setPaymentTrms(bhgePriceAvailabilityUtils.getCCPaymentTrms());
		}else{
			orderDetails.setPaymentTrms(defaultSoldTo.getPaymentTrms());
		}
		bhgePriceAvailabilityUtils.populateSOAFields(orderDetails, orderModel);
	}
	private void populatesoldToAddress(B2BUnitModel b2bUnit, OrderData orderDetails)
	{
		if(null!= b2bUnit){
			final AddressData soldToAddress1 = userService.isAnonymousUser(userService.getCurrentUser())
					? orderDetails.getPaymentAddress()
					: bhgeUserProfileFacade.getSoldToAddress(b2bUnit.getUid());
			orderDetails.setSoldToAddress(soldToAddress1);
		}
	}
	private void populateGuestOrderDetails(OrderData orderDetails, String guestSalesArea, OrderModel orderModel) {
		BHGEAnonymousUserCatalogModel anonymousUserCatalog = bhgeSoldToUtil.getAnonymousUserCatalog(guestSalesArea);
		B2BUnitModel b2bUnit = anonymousUserCatalog.getB2BUnit();
		BHGESoldToData defaultSoldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfGuestUser(guestSalesArea);
		populatesoldToAddress(b2bUnit, orderDetails);
		orderDetails.setShipToIncoterm1(defaultSoldTo.getIncoterms1());
		orderDetails.setShipToIncoterm2(defaultSoldTo.getIncoterms2());
		orderDetails.setPaymentTrms(defaultSoldTo.getPaymentTrms());
		bhgePriceAvailabilityUtils.populateSOAFields(orderDetails, orderModel);
	}
	private void populateOrderEntries(OrderData orderDetails, SalesAreaData sessionSalesAreaData, OrderModel orderModel,
									  String guestSalesArea, OrderDetailsData orderDetailsData) {
		LOG.info("populateOrderEntries: Populating Order Entries for Order Code: " + orderDetails.getCode() + " with Sales Area: " + guestSalesArea);

		List<OrderEntryData> originalEntries = orderDetails.getEntries();
		List<OrderEntryData> updatedEntries = new ArrayList<>(); // New list to store modified entries
		Double unitSelling = 0.0;
		double netDiscount = 0.0;
		String unitSellingFormattedValue = "";
		double orderlevelSilverClause = 0.0;

		if (originalEntries != null && !originalEntries.isEmpty()) {
			for (final OrderEntryData entry : originalEntries) {
				bhgePriceAvailabilityUtils.populateProductData(entry);
				final double entrySilverClause = entry.getSilverClause() != null ? entry.getSilverClause() : 0d;
				netDiscount += (entrySilverClause * entry.getQuantity());
				orderlevelSilverClause += (entrySilverClause * entry.getQuantity());

				unitSellingFormattedValue = orderDetailsData.getCurrenyIso() + " " + orderDetailsData.getCurrenySymbol() + String.format("%.2f", unitSelling);
				entry.setUnitSellingFormattedValue(unitSellingFormattedValue);

				CurrencyModel currency = new CurrencyModel();
                if(null != orderModel.getCurrency()){
                    currency.setIsocode(orderModel.getCurrency().getIsocode());
                    currency.setSymbol(orderModel.getCurrency().getSymbol());
                }
                else {
                    currency.setIsocode(sessionSalesAreaData.getCurrencyIso());
                    currency.setSymbol(sessionSalesAreaData.getCurrencySymbol());
                }
				entry.setNetSellingPrice(populatePrice(entry.getNetSelling(), currency));

				updatedEntries.add(entry); // Add modified entry to the new list
			}
		}

		PriceData ordersilverClause = populatePrice(orderlevelSilverClause, orderModel.getCurrency());
		PriceData netSilverClause = populatePrice(netDiscount, orderModel.getCurrency());
		orderDetails.setOrdersilverClause(ordersilverClause);
		orderDetailsData.setNetSilverClause(netSilverClause);
		orderDetails.setEntries(updatedEntries); // Replace original entries with updated entries

		if (userService.isAnonymousUser(userService.getCurrentUser())) {
			populateGuestOrderDetails(orderDetails, guestSalesArea, orderModel);
		} else {
			populateRegisteredUserOrderDetails(orderDetails, orderModel);
		}
	}


	//Method to return CC01 payment terms for crdit card order
	protected PriceData populatePrice(final Double price, final CurrencyModel currency)
	{
		final double priceValue = price != null ? price.doubleValue() : 0d;
		if ( priceValue > 0)
		{
			return priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(priceValue), currency);
		}
		else
		{
			final PriceData priceData = new PriceData();
			priceData.setFormattedValue("To be quoted");
			priceData.setValue(new BigDecimal(price, MathContext.DECIMAL64));
			return priceData;
		}
		
	}
		
		/**
		 * @param orderModel
		 */
		private void triggerEmailProcessForGuest(final OrderModel orderModel)
		{
			//getSessionService().removeAttribute("guestCartType");
			final OrderProcessModel orderProcessModel = (OrderProcessModel) businessProcessService.createProcess(
					"orderPendingApprovalEmailProcess" + "-" + orderModel.getCode() + "-" + System.currentTimeMillis(),
					"orderPendingApprovalEmailProcess");
			orderProcessModel.setOrder(orderModel);
			modelService.save(orderProcessModel);
			final OrderPendingApprovalEvent orderPendingApprovalEvent = new OrderPendingApprovalEvent(orderProcessModel);
			eventService.publishEvent(orderPendingApprovalEvent);
		}

	
}
