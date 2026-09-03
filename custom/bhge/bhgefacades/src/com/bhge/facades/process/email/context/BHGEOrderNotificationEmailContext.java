/*
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2013 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 *
 *
 */
package com.bhge.facades.process.email.context;

import com.bhge.core.model.BHGECurrencyModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.product.service.BHGEProductService;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commercefacades.enums.data.ContactUsSettingsData;
import de.hybris.platform.commercefacades.enums.data.ShippingCarrierMethodData;
import de.hybris.platform.commercefacades.order.data.OrderData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.orderprocessing.model.OrderProcessModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;

import org.apache.commons.lang3.text.WordUtils;
import org.apache.log4j.Logger;


import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.coupon.service.BHGECouponService;
import com.bhge.core.model.BHGECurrencyFormatModel;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.facades.order.BHGECheckoutFacade;
import com.bhge.facades.order.populators.BHGEOrderPopulator;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.store.services.BHGEBaseStoreService;
/**
 * Context (velocity) for email order notification.
 */
public class BHGEOrderNotificationEmailContext extends
		AbstractEmailContext<OrderProcessModel> {
	private Converter<OrderModel, OrderData> orderConverter;
	private BHGEOrderPopulator orderPopulator;
	private String currencyISO;
	private String currencyFormattedValue;
	private String sessionSoldToName;
	private AddressModel sessionSoldToAddress;
	private String currencySymbol;
	private ProductService productService;
	private String DiscountPrice;
	private Boolean disc;
	int decimalPlaces = 2;
	DecimalFormat f = new DecimalFormat("##.00");
	private static final String DEFAULT_LONGEST_EST_SHIP_DATE = Config.getString("DEFAULT_LONGEST_EST_SHIP_DATE", "01-Jan-2100");
	private static final String CONTACTUS_SUPPORTTEAM = "GEEdgeSupportTeam";

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "bhgeCouponService")
	public BHGECouponService bhgeCouponService;

	@Resource(name = "priceDataFactory")
	public PriceDataFactory priceDataFactory;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

    @Resource(name = "bhgeProductService")
    public BHGEProductService bhgeProductService;

	public ProductService getProductService() {
		return productService;
	}

	@Resource
	private UserService userService;

	
	public void setProductService(final ProductService productService) {
		this.productService = productService;
	}

	private ProductFacade productFacade;

	public ProductFacade getProductFacade() {
		return productFacade;
	}

	
	public void setProductFacade(final ProductFacade productFacade) {
		this.productFacade = productFacade;
	}

	public String getCurrencyISO() {
		return currencyISO;
	}

	public void setCurrencyISO(final String currencyISO) {
		this.currencyISO = currencyISO;
	}

	public String getCurrencyFormattedValue() {
		return currencyFormattedValue;
	}

	public void setCurrencyFormattedValue(final String currencyFormattedValue) {
		this.currencyFormattedValue = currencyFormattedValue;
	}

	public String getSessionSoldToName() {
		return sessionSoldToName;
	}

	public void setSessionSoldToName(final String sessionSoldToName) {
		this.sessionSoldToName = sessionSoldToName;
	}

	public AddressModel getSessionSoldToAddress() {
		return sessionSoldToAddress;
	}

	public void setSessionSoldToAddress(final AddressModel sessionSoldToAddress) {
		this.sessionSoldToAddress = sessionSoldToAddress;
	}

	public String getCurrencySymbol() {
		return currencySymbol;
	}

	public void setCurrencySymbol(final String currencySymbol) {
		this.currencySymbol = currencySymbol;
	}

	@Resource(name = "defaultBHGECheckoutFacade")
	private BHGECheckoutFacade defaultBHGECheckoutFacade;

	private OrderData orderData;
	private static final Logger LOG = Logger
			.getLogger(BHGEOrderNotificationEmailContext.class);

	@Override
	public void init(final OrderProcessModel orderProcessModel,
			final EmailPageModel emailPageModel) {
		super.init(orderProcessModel, emailPageModel);

		final OrderModel order = orderProcessModel.getOrder();

		orderData = getOrderConverter().convert(orderProcessModel.getOrder());
		orderPopulator.populate(order, orderData);
		populateSoldTo(order);
		orderData.setExportAddress(orderData.getExportAddress() == null ? " "
				: orderData.getExportAddress());
		orderData
				.setDeliveryAccount((orderData.getDeliveryAccount() == null ? " "
						: orderData.getDeliveryAccount()));

		//populateSoldToContactUsDetails(order);
		populateContactUsDetailsWithProductLine(order);

		orderData.setPlanToExport(WordUtils.capitalizeFully(orderData
				.getPlanToExport()));
		 // coverity 17416 DLS: Dead local store
		List<ShippingCarrierMethodData> prepayCarrierTypes = new ArrayList<ShippingCarrierMethodData>();
		if (null != orderData.getDeliveryOptions() && orderData.getDeliveryOptions().contains("Prepay")) {
			prepayCarrierTypes = defaultBHGECheckoutFacade
					.retriveCarrierMethods("prepay_add");
		} else {
			prepayCarrierTypes = defaultBHGECheckoutFacade
					.retriveCarrierMethods("collect");
		}

		for (final ShippingCarrierMethodData shippingCarrierMethodData : prepayCarrierTypes) {
			if (orderData.getDeliveryMode() != null
					&& orderData.getDeliveryMode().getCode() != null
					&& shippingCarrierMethodData.getCode() != null
					&& orderData.getDeliveryMode().getCode().trim()
							.equals(shippingCarrierMethodData.getCode().trim())) {
				orderData.setDeliveryCarrier(shippingCarrierMethodData
						.getName());
			}
		}

		if (orderData.getEntries() != null && !orderData.getEntries().isEmpty()) {
			final List<OrderEntryData> entries = orderData.getEntries();
			//Collections.reverse(entries);
			for (final OrderEntryData entry : entries) {

				final String productCode = entry.getProduct().getCode();

				final ProductData product = productFacade.getProductForCodeAndOptions(productCode,
						Arrays.asList(ProductOption.BASIC, ProductOption.PRICE));

				final ProductModel productModel = productService
						.getProductForCode(productCode);
				if (null != productModel && productModel.getPicture() != null) {
					final MediaModel mediaModel = productModel.getPicture();
					product.setUrl(mediaModel.getURL());
				} else {
					product.setUrl(Config
							.getParameter("PRODUCT_DEFAULT_IMAGE_PATH"));
				}
				entry.setProduct(product);

				disc = true;
				if (entry.getDiscountPrice() != null) {
					try {

						final Double d = Double.parseDouble(entry.getDiscountPrice());

					} catch (final NumberFormatException nfe) {
						disc = false;
						DiscountPrice = Config
								.getParameter("DISC_PRICE_NOTAVBL");
					}
				} else {
					disc = false;
					DiscountPrice = Config.getParameter("DISC_PRICE_NOTAVBL");
				}
				if (disc == true) {
					final BigDecimal discountPrice = new BigDecimal(
							entry.getDiscountPrice());
					final NumberFormat fmtdiscount = getUserCurrencyFormat();
					fmtdiscount.format(discountPrice);
					entry.setDiscountPrice(fmtdiscount.format(discountPrice));
				}

				// String basePrice= entry.getBasePrice().getValue().toString();
				final NumberFormat fmt = getUserCurrencyFormat();
				fmt.format(entry.getBasePrice().getValue());
				final PriceData price = new PriceData();
				price.setFormattedValue(fmt.format(entry.getBasePrice()
						.getValue()));
				price.setValue(entry.getBasePrice().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN));
				entry.setBasePrice(price);
				entry.setCouponDiscountStr(String.format("%.2f", entry.getCouponDiscount()));
				entry.setShipmentCostStr(String.format("%.2f", entry.getShipmentCost()));
				entry.setEntryNotes(entry.getEntryNotes());

				final PriceData yourPriceDiscount = new PriceData();
				yourPriceDiscount.setFormattedValue(fmt.format(entry.getYourPriceDiscount().getValue()));
				yourPriceDiscount.setValue(entry.getYourPriceDiscount().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN));
				entry.setYourPriceDiscount(yourPriceDiscount);

				final List<String> estimatedShipDates = new ArrayList();

				double netPrice = 0.0;

				for (final AbstractOrderEntryModel entryModel : order.getEntries()) {

					if(entry.getEntryNumber().equals(entryModel.getEntryNumber())){
						if(entryModel.getDiscountValues() != null && !entryModel.getDiscountValues().isEmpty() &&
								BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_YP.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(entryModel.getOrder().
								getAppliedCouponCodes().iterator().next(), entryModel.getOrder()))){
							netPrice = entryModel.getTotalPrice().doubleValue() / entryModel.getQuantity();

							if(entryModel.getIsSameDayShipChecked() != null && entryModel.getIsSameDayShipChecked()) {
								netPrice += entryModel.getSameDayShipmentCost();
							}

						}else if(entryModel.getDiscountValues() != null && !entryModel.getDiscountValues().isEmpty() &&
								BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_LP.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(entryModel.getOrder().
								getAppliedCouponCodes().iterator().next(), entryModel.getOrder()))){
							netPrice = entryModel.getTotalPrice().doubleValue() / entryModel.getQuantity();
							if(entryModel.getIsSameDayShipChecked() != null && entryModel.getIsSameDayShipChecked()) {
								netPrice += entryModel.getSameDayShipmentCost();
							}
						}else{

							// Setting Net Total at line level items
							 netPrice = entryModel.getBasePrice();

							if(null != entryModel.getYourPriceDiscount()) {
								netPrice -= entryModel.getYourPriceDiscount();
							}

							if(entryModel.getDiscountValues() != null && !entryModel.getDiscountValues().isEmpty()) {
								netPrice -= entry.getCouponDiscount();
							}

							if(entryModel.getIsSameDayShipChecked() != null && entryModel.getIsSameDayShipChecked()) {
								netPrice += entryModel.getSameDayShipmentCost();
							}
						}

						final String netTotal = String.format("%.2f", new Double(netPrice));
						final String netTotalPrc = String.format("%,.2f", new Double(netPrice));
						entry.setEntryLevelSellingPriceStr(netTotalPrc);
						PriceData subtotalPriceData = populatePrice(new Double(netTotal), new CurrencyModel());
						subtotalPriceData.setFormattedValue(fmt.format(netPrice));
//						entry.setSubTotalListPrice(populatePrice(new Double(netTotal), new CurrencyModel()));
						entry.setSubTotalListPrice(subtotalPriceData);
						// Populating Net Selling Price for the Entry
						final String netSellingPrice = String.format("%.2f", new Double(entryModel.getQuantity() * netPrice));
						final String netSellingPriceStr = String.format("%,.2f", new Double(entryModel.getQuantity() * netPrice));
						entry.setNetSellingPriceStr(netSellingPriceStr);
						PriceData netSellinPriceData = populatePrice(new Double(netSellingPrice), new CurrencyModel());
						netSellinPriceData.setFormattedValue(fmt.format(new Double(entryModel.getQuantity() * netPrice)));//Resume
//						entry.setNetSellingPrice(populatePrice(new Double(netSellingPrice), new CurrencyModel()));
						entry.setNetSellingPrice(netSellinPriceData);
						final PriceData listPrice = new PriceData();
						listPrice.setFormattedValue(fmt.format(entry.getListPrice().getValue()));
						listPrice.setValue(entry.getListPrice().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN));
						entry.setListPrice(listPrice);

						final PriceData silverClausePrice = new PriceData();
						silverClausePrice.setFormattedValue(fmt.format(entry.getSilverClausePrice().getValue()));
						silverClausePrice.setValue(entry.getSilverClausePrice().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN));
						entry.setSilverClausePrice(silverClausePrice);
						entry.setSilverClausePricePercentage(entryModel.getSilverClausePricePercentage());

						final PriceData vcOptions = new PriceData();
						vcOptions.setFormattedValue(fmt.format(entry.getVcOptionsPrice().getValue()));
						vcOptions.setValue(entry.getVcOptionsPrice().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN));
						entry.setVcOptionsPrice(vcOptions);
					}
				}
				final List<String> estimatedShipQtys = new ArrayList();
				for (int j = 0; j < entry.getEstimatedShipDates().size(); j++) {

					try {
						String fromDate = entry.getEstimatedShipDates().get(j);
						if(fromDate.equalsIgnoreCase("No estimate available")){
							estimatedShipDates.add(fromDate);
							estimatedShipQtys.add("1");
						}else{
							final String splitDate[] = StringUtils.split(fromDate);
							if (splitDate.length > 1 && splitDate[1] != null) {
								fromDate = splitDate[1];
							}

							if (fromDate != null && !fromDate.isEmpty()) {
								final SimpleDateFormat originalFormat = new SimpleDateFormat(
										Config.getString("ATP_SHIP_DATE_FORMAT", "MM-dd-yyyy"));
								final SimpleDateFormat targetFormat = new SimpleDateFormat(
										"dd-MMM-yyyy");
								Date date;

								try {
									date = originalFormat.parse(fromDate);
									fromDate = targetFormat.format(date);

									if(DEFAULT_LONGEST_EST_SHIP_DATE.equals(fromDate)){
										fromDate = "No Estimate Available";
									}

									//estimatedShipDates.add("Qty" + " " + splitDate[0] + "-" + "Est. Ship" + " " + fromDate);
									estimatedShipDates.add(fromDate);
                                    estimatedShipQtys.add(splitDate[0]);
								} catch (final Exception e) {
									// Auto-generated catch block
									LOG.error("Error has occured in date Parsing: "	+ e);
									estimatedShipDates.add(entry.getEstimatedShipDates().get(j));
								}

								entry.getEstimatedShipDates().get(j);
							}
						}
					}

					catch (final Exception e) {
						LOG.error("Error has occured in date format: ", e);

					}

				}
				entry.setEstimatedShipDates(estimatedShipDates);
				entry.setEstimatedShipQtys(estimatedShipQtys);
			}

		}
		orderData.getTotalPrice().getValue();
		orderData.getYourPriceDiscount();

		final NumberFormat fmtP = getUserCurrencyFormat();
		//fmtP.format(orderData.getTotalPrice().getValue());
		final PriceData priceTotal = new PriceData();
		priceTotal.setFormattedValue(fmtP.format(orderData.getTotalPrice().getValue()));
		priceTotal.setValue(orderData.getTotalPrice().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN));
		orderData.setTotalPrice(priceTotal);

		final PriceData shippingPriceTotal = new PriceData();
		shippingPriceTotal.setFormattedValue(fmtP.format(orderData.getShipmentCost().getValue()));
		shippingPriceTotal.setValue(orderData.getShipmentCost().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN));
		orderData.setDeliveryCost(shippingPriceTotal);

		final PriceData discountsTotal = new PriceData();
		discountsTotal.setFormattedValue(fmtP.format(orderData.getTotalDiscounts().getValue()));
		discountsTotal.setValue(orderData.getTotalDiscounts().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN));
		orderData.setTotalDiscounts(discountsTotal);

		final PriceData listPriceTotal = new PriceData();
		listPriceTotal.setFormattedValue(fmtP.format(orderData.getTotalListPrice().getValue()));
		listPriceTotal.setValue(orderData.getTotalListPrice().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN));
		orderData.setTotalListPrice(listPriceTotal);

		final PriceData yourPriceDiscountTotal = new PriceData();
		yourPriceDiscountTotal.setFormattedValue(fmtP.format(orderData.getYourPriceDiscount().getValue()));
		yourPriceDiscountTotal.setValue(orderData.getYourPriceDiscount().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN));
		orderData.setYourPriceDiscount(yourPriceDiscountTotal);

		orderData.getShipToContactName();
		orderData.getDeliveryAddress().getPostalCode();
		orderData.setDeliveryOptions(WordUtils.capitalizeFully(orderData
				.getDeliveryOptions()));
		orderData.getDeliveryOptions();
		final String split[] = StringUtils.split(orderData.getUser().getName());
		if (split.length > 0 && split[0] != null) {
			orderData.getUser().setName(split[0]);
			orderData.getUser().getName();
		}

	}

	private void populateSoldToContactUsDetails(final OrderModel order){

		final B2BUnitModel childB2Bunit = order.getSoldToForCart();
		final String soldToId = getSoldToIdForB2bUnit(childB2Bunit);

		final List<ContactUsSettingsData> contactusSettings = bhgeUserProfileFacade.getContactUsForSoldTo(order.getStore().getUid(),
				soldToId, "ordersupport", order.getCode(), order.getCartType().getCode(), order.getCommerceType().getCode());
		for (final ContactUsSettingsData contactus : contactusSettings)
		{
			orderData.setContactusEmail(contactus.getEmail());
			orderData.setContactusPhone(contactus.getPhoneNum());
		}
	}

	private void populateContactUsDetailsWithProductLine(final OrderModel order){

		final B2BUnitModel childB2Bunit = order.getSoldToForCart();
		final String soldToId = getSoldToIdForB2bUnit(childB2Bunit);

		/*final List<ContactUsSettingsData> contactusSettings = bhgeUserProfileFacade.getContactUsForSoldTo(order.getStore().getUid(),
				soldToId, "ordersupport", order.getCode(), order.getCartType().getCode(), order.getCommerceType().getCode());*/

		final List<ContactUsSettingsData> contactusSettings = bhgeUserProfileFacade.getContactUsForRegionAndCommerceTypeValue(order,
				order.getCode(), order.getCartType().getCode(), order.getCommerceType().getCode());

		for (final ContactUsSettingsData contactus : contactusSettings)
		{
			orderData.setContactusEmail(contactus.getEmail());
			orderData.setContactusPhone(contactus.getPhoneNum());
		}
	}
	protected PriceData populatePrice(final Double price,
			final CurrencyModel currency) {
		final double priceValue = price != null ? price.doubleValue() : 0d;
		return priceDataFactory.create(PriceDataType.BUY,
				BigDecimal.valueOf(priceValue), currency);
	}

	private String getSoldToIdForB2bUnit(final B2BUnitModel childB2Bunit){
		String soldToId = null;
		if (null != childB2Bunit && null != childB2Bunit.getUid()
				&& childB2Bunit.getUid().contains("_")) {
			final String[] uid = childB2Bunit.getUid().split("_");
			soldToId = uid[0];
		}
		return soldToId;
	}

	private void populateSoldTo(final OrderModel order) {
		final B2BUnitModel childB2Bunit = order.getSoldToForCart();
		final String soldToId = getSoldToIdForB2bUnit(childB2Bunit);

		final B2BUnitModel soldTo = userProfileService
				.findChildB2BUnitModel(soldToId);
		sessionSoldToName = soldTo.getLocName();
        if(null != order.getCurrency()){
                currencyISO = order.getCurrency().getIsocode();
                currencyFormattedValue = order.getCurrency().getSymbol();
                currencySymbol = currencyFormattedValue;
                LOG.info("currency in order context " + currencyISO);
            }

		else if (childB2Bunit!=null && null != (childB2Bunit.getCurrency())) {
			currencyISO = childB2Bunit.getCurrency() == null ? " "
					: childB2Bunit.getCurrency().getIsocode();
			currencyFormattedValue = childB2Bunit.getCurrency() == null ? " "
					: childB2Bunit.getCurrency().getSymbol();
			currencySymbol = currencyFormattedValue;
		}

		if (childB2Bunit != null) {
			final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) childB2Bunit
					.getAddresses();
			for (final AddressModel address : listOfSoldToAddress) {
				if (address.getBillingAddress()) {
					soldTo.setBillingAddress(address);
					break;
				}
			}
		}

		if (soldTo.getBillingAddress() != null) {
			sessionSoldToAddress = soldTo.getBillingAddress();
			//sessionSoldToAddress.getStreetnumber();
			sessionSoldToAddress
					.setStreetnumber(sessionSoldToAddress == null ? " "
							: (StringUtils.isEmpty(sessionSoldToAddress
									.getStreetnumber()) ? " "
									: sessionSoldToAddress.getStreetnumber()));
			sessionSoldToAddress
					.setStreetname(sessionSoldToAddress == null ? " "
							: (StringUtils.isEmpty(sessionSoldToAddress
									.getStreetname()) ? " "
									: sessionSoldToAddress.getStreetname()));
			sessionSoldToAddress
					.setTown(sessionSoldToAddress == null ? " " : (StringUtils
							.isEmpty(sessionSoldToAddress.getTown()) ? " "
							: sessionSoldToAddress.getTown()));
			sessionSoldToAddress
					.setPostalcode(sessionSoldToAddress == null ? " "
							: (StringUtils.isEmpty(sessionSoldToAddress
									.getPostalcode()) ? " "
									: sessionSoldToAddress.getPostalcode()));
			if (sessionSoldToAddress.getRegion() != null
					&& sessionSoldToAddress.getRegion().getName() != null) {
				sessionSoldToAddress
						.setRegion(sessionSoldToAddress.getRegion());
			}
			if (sessionSoldToAddress.getCountry() != null
					&& sessionSoldToAddress.getCountry().getName() != null) {
				sessionSoldToAddress.setCountry(sessionSoldToAddress
						.getCountry());
			}
		}
	}

	@Override
	protected BaseSiteModel getSite(final OrderProcessModel orderProcessModel) {
		return orderProcessModel.getOrder().getSite();
	}

	@Override
	protected CustomerModel getCustomer(
			final OrderProcessModel orderProcessModel) {
		return (CustomerModel) orderProcessModel.getOrder().getUser();
	}

	protected Converter<OrderModel, OrderData> getOrderConverter() {
		return orderConverter;
	}

	
	public void setOrderConverter(
			final Converter<OrderModel, OrderData> orderConverter) {
		this.orderConverter = orderConverter;
	}

	public OrderData getOrder() {
		return orderData;
	}

	@Override
	protected LanguageModel getEmailLanguage(
			final OrderProcessModel orderProcessModel) {
		return orderProcessModel.getOrder().getLanguage();
	}

	public BHGEOrderPopulator getOrderPopulator() {
		return orderPopulator;
	}

	
	public void setOrderPopulator(final BHGEOrderPopulator orderPopulator) {
		this.orderPopulator = orderPopulator;
	}

	private NumberFormat getUserCurrencyFormat() {
		 GEEdgeCustomerModel customer =  (GEEdgeCustomerModel) userService.getCurrentUser();
		 Optional<BHGECurrencyFormatModel>  optionalCurrencyFormat = Optional.ofNullable(customer.getDefaultCurrencyFormat());
		 String userCurrencyFormat = optionalCurrencyFormat.map(BHGECurrencyFormatModel::getCode).orElse("en_US");
		 String lang = userCurrencyFormat.split("_")[0];
		 String country = userCurrencyFormat.split("_")[1];
		 Locale locale = new Locale(lang, country);
		 NumberFormat numberFormat = NumberFormat.getCurrencyInstance(locale);
		 DecimalFormatSymbols decimalFormatSymbols = ((DecimalFormat) numberFormat).getDecimalFormatSymbols();
		decimalFormatSymbols.setCurrencySymbol("");
		((DecimalFormat) numberFormat).setDecimalFormatSymbols(decimalFormatSymbols);
		return  numberFormat;
	}
}
