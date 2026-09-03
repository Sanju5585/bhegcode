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
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commerceservices.enums.CustomerType;
import de.hybris.platform.core.CoreAlgorithms;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.orderprocessing.model.OrderProcessModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.DiscountValue;

import java.math.BigDecimal;
import java.math.MathContext;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Objects;
import java.util.Optional;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.text.WordUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.log4j.Logger;


import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.coupon.service.BHGECouponService;
import com.bhge.core.model.BHGECurrencyFormatModel;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.facades.order.BHGEB2BOrderFacade;
//import com.bhge.facades.order.BHGECheckoutFacade;
import com.bhge.facades.order.impl.DefaultBHGECheckoutFacade;
import com.bhge.facades.order.populators.BHGEOrderPopulator;
import com.bhge.facades.price.BHGEPriceDataFactory;
import com.bhge.facades.rma.BHGERmaFormFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.store.services.BHGEBaseStoreService;


/**
 * Context (velocity) for email order notification.
 */
public class OrderNotificationEmailContext extends AbstractEmailContext<OrderProcessModel>
{
	private String currencyISO;
	private String currencyFormattedValue;
	private Converter<OrderModel, OrderData> orderConverter;
	private BHGEOrderPopulator orderPopulator;
	private String sessionSoldToName;
	private AddressModel sessionSoldToAddress;
	private String currencySymbol;
	private String DiscountPrice;
	private String risk;
	private Boolean disc;
	private String isConfiguredProduct ;
	private String productLine;
	int decimalPlaces = 2;
	DecimalFormat f = new DecimalFormat("##.00");
	private static final String DEFAULT_LONGEST_EST_SHIP_DATE = Config.getString("DEFAULT_LONGEST_EST_SHIP_DATE", "01-Jan-2100");
	private static final String CONTACTUS_SUPPORTTEAM = "GEEdgeSupportTeam";
	private static final int CURRENCY_FORMAT_DIGITS = 2;
	private static final String JS_STOREFRONT_URL = "jsUrl";

	@Resource(name = "b2bOrderFacade")
	private BHGEB2BOrderFacade b2bOrderFacade;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "bhgeCouponService")
	public BHGECouponService bhgeCouponService;

	@Resource(name = "priceDataFactory")
	public PriceDataFactory priceDataFactory;

	@Resource(name = "bhgeOrderPopulator")
	private BHGEOrderPopulator bhgeOrderPopulator;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	@Resource
	private UserService userService;

	@Resource(name = "productFacade")
	private ProductFacade productFacade;

	@Resource(name = "productService")
	private ProductService productService;

	@Resource(name = "sessionService")
	SessionService sessionService;

	@Resource(name = "commonI18NService")
	CommonI18NService commonI18NService;

	@Resource(name = "bhgeRmaFormFacade")
	BHGERmaFormFacade bhgeRmaFormFacade;

	@Resource(name = "bhgePriceDataFactory")
	BHGEPriceDataFactory bhgePriceDataFactory;

	@Resource(name = "modelService")
	ModelService modelService;


	public String getCurrencyISO()
	{
		return currencyISO;
	}

	public void setCurrencyISO(final String currencyISO)
	{
		this.currencyISO = currencyISO;
	}

	public String getCurrencyFormattedValue()
	{
		return currencyFormattedValue;
	}

	public void setCurrencyFormattedValue(final String currencyFormattedValue)
	{
		this.currencyFormattedValue = currencyFormattedValue;
	}

	public String getSessionSoldToName()
	{
		return sessionSoldToName;
	}

	public void setSessionSoldToName(final String sessionSoldToName)
	{
		this.sessionSoldToName = sessionSoldToName;
	}

	public String getRisk()
	{
		return risk;
	}

	public void setRisk(final String risk)
	{
		this.risk = risk;
	}

	public AddressModel getSessionSoldToAddress()
	{
		return sessionSoldToAddress;
	}

	public void setSessionSoldToAddress(final AddressModel sessionSoldToAddress)
	{
		this.sessionSoldToAddress = sessionSoldToAddress;
	}

	public String getCurrencySymbol()
	{
		return currencySymbol;
	}

	public void setCurrencySymbol(final String currencySymbol)
	{
		this.currencySymbol = currencySymbol;
	}

	public String getIsConfiguredProduct() {
		return isConfiguredProduct;
	}

	public void setIsConfiguredProduct(String isConfiguredProduct) {
		this.isConfiguredProduct = isConfiguredProduct;
	}

	@Resource(name = "b2bCheckoutFacade")
	private DefaultBHGECheckoutFacade bhgeCheckoutFacade;

	private OrderData orderData;
	private static final Logger LOG = Logger.getLogger(OrderNotificationEmailContext.class);

	@Override
	public void init(final OrderProcessModel orderProcessModel, final EmailPageModel emailPageModel)
	{
		super.init(orderProcessModel, emailPageModel);

		final OrderModel order = orderProcessModel.getOrder();
		productLine = order.getProductLine();

		LOG.info("****************************** Inside OTHERS *********************");
		LOG.info("########### Current basetore is " + baseStoreService.getCurrentBaseStore().getUid());
		LOG.info("########### Current User is " + userService.getCurrentUser().getUid());
		LOG.info("########### Order code is " + order.getCode());
		LOG.info("########### Product Line is " + productLine);

		if (StringUtils.equalsIgnoreCase(order.getCommerceType().getCode(), "BUY")) {
			isConfiguredProduct = String.valueOf(
					order.getEntries().stream()
							.anyMatch(x -> BooleanUtils.isTrue(x.getProduct().getSapConfigurable())));
			LOG.info("DE168640 isConfiguredProduct" + isConfiguredProduct);
			setIsConfiguredProduct(isConfiguredProduct);
		}

		orderData = getOrderConverter().convert(orderProcessModel.getOrder());
		//orderData = b2bOrderFacade.getOrderDetailsForCode(order.getCode());
		//orderData.setMediaBaseUrl("https://api.staging.bakerhughes.com");
		//orderData.setMediaBaseUrl(Config.getParameter("bhge.email.resource"));
		orderData.setMediaBaseUrl(Config.getParameter("bhge.store.base.url"));
		put(JS_STOREFRONT_URL, Config.getParameter("bhge.jsapps.ecommerce.url"));

		//}
		if (order.getCommerceType().getCode() == "RETURNS")
		{
			LOG.info("****************************** Inside returns commercetype *********************");


			//orderData.setMediaBaseUrl("https://api.staging.bakerhughes.com");
			bhgeOrderPopulator.populate(order, orderData);

			double totalDiscount = 0.0;
			double totalList = 0.0;
			Boolean noPrice = false;

			if (orderData.getEntries() != null && !orderData.getEntries().isEmpty())
			{
				final List<OrderEntryData> entries = orderData.getEntries();
				for (final OrderEntryData entry : entries)
				{
					if (entry.getSilverClause() != null && entry.getSilverClause() > 0)
					{
						totalDiscount = totalDiscount + (entry.getSilverClause() * entry.getQuantity().longValue());
					}

					//LOG.info("---------------- UNIT LIST PRICE 1----------------" + entry.getUnitList().toString());
					//LOG.info("---------------- UNIT LIST PRICE 2----------------" + entry.getNetSelling().toString());


					//LOG.info("---------------- UNIT LIST PRICE 3----------------" + entry.getSilverClause().toString());

					for (final AbstractOrderEntryModel entryModel : order.getEntries())
					{
						if (entry.getEntryNumber() != entryModel.getEntryNumber())
						{
							continue;
						}
						if (Objects.nonNull(entryModel.getUnitPrice()) && Objects.nonNull(entryModel.getSilverClausePrice()))
						{
							if (!(entryModel.getUnitPrice().doubleValue() > 0))
							{
								noPrice = true;
							}
							//createPrice(orderModel, orderModel.getTotalReturnPrice())

							totalList = totalList + (entryModel.getUnitPrice() * entry.getQuantity().longValue());

							final NumberFormat fmt = getUserCurrencyFormat();
							if (entryModel.getUnitPrice().doubleValue() > 0)
							{



								final BigDecimal unitPriceValue = new BigDecimal(entryModel.getUnitPrice(), MathContext.DECIMAL64);

								final PriceData unitPrice = new PriceData();
								unitPrice.setFormattedValue(fmt.format(unitPriceValue != null ? unitPriceValue : new BigDecimal(0.0)));
								unitPrice.setValue(unitPriceValue != null ? unitPriceValue.setScale(decimalPlaces, BigDecimal.ROUND_DOWN)
										: new BigDecimal(0.0));
								entry.setUnitListRMA(unitPrice);
								//entry.setUnitListRMA(createPrice(order, entryModel.getUnitPrice()));
								//entry.setUnitSellingRMA(createPrice(order, entryModel.getUnitPrice() - entryModel.getSilverClausePrice()));
								//LOG.info("------------------ 11111 --------------- " + entry.getUnitList());
								final BigDecimal unitSellingValue = new BigDecimal(
										entryModel.getUnitPrice() - entryModel.getSilverClausePrice(), MathContext.DECIMAL64);
								final PriceData unitSelling = new PriceData();
								unitSelling
										.setFormattedValue(fmt.format(unitSellingValue != null ? unitSellingValue : new BigDecimal(0.0)));
								unitSelling
										.setValue(unitSellingValue != null ? unitSellingValue.setScale(decimalPlaces, BigDecimal.ROUND_DOWN)
												: new BigDecimal(0.0));
								entry.setUnitSellingRMA(unitSelling);
							}


							//LOG.info("------------------ 22222 --------------- " + entry.getUnitList());
							//entry.setSilverClausePricePercentage(entryModel.getSilverClausePricePercentage());

							if (entryModel.getTotalReturnPrice().doubleValue() > 0)
							{
								final BigDecimal netSellingValue = new BigDecimal(entryModel.getTotalReturnPrice(),
										MathContext.DECIMAL64);
								final PriceData netSelling = new PriceData();
								netSelling.setFormattedValue(fmt.format(netSellingValue != null ? netSellingValue : new BigDecimal(0.0)));
								netSelling
										.setValue(netSellingValue != null ? netSellingValue.setScale(decimalPlaces, BigDecimal.ROUND_DOWN)
												: new BigDecimal(0.0));
								entry.setNetSellingRMA(netSelling);
							}

							//entry.setSilverClause(entryModel.getSilverClausePrice());
							//entry.setNetSellingRMA(createPrice(order, entryModel.getTotalReturnPrice()));
							//LOG.info("------------------ 33333 --------------- " + entry.getUnitList());
						}



						/*
						 * if (entryModel.getBhgeServiceOfferings() != null) { final Iterator<BHGEServiceOfferingsModel> itr =
						 * entryModel.getBhgeServiceOfferings().iterator();
						 *
						 * while (itr.hasNext()) { final BHGEServiceOfferingsModel offer = itr.next();
						 *
						 * rmaOfferings = rmaOfferings + offer.getOfferingType().getCode() + " ,";
						 * LOG.info("============== OFFERINGS 2=============" + rmaOfferings); } if (rmaOfferings != null &&
						 * rmaOfferings.length() > 0 && rmaOfferings.charAt(rmaOfferings.length() - 1) == ',') { rmaOfferings
						 * = rmaOfferings.substring(0, rmaOfferings.length() - 1);
						 * LOG.info("============== OFFERINGS 3=============" + rmaOfferings); offerList.add(rmaOfferings);
						 * //orderData.setServiceOfferings(offerList); entry.setRmaOfferings(offerList); } else {
						 * offerList.add(rmaOfferings); LOG.info("============== OFFERINGS 4=============" + rmaOfferings);
						 * //orderData.setServiceOfferings(offerList); entry.setRmaOfferings(offerList); } }
						 *
						 * else { //orderData.setServiceOfferings(offerList); entry.setRmaOfferings(offerList); }
						 */
					}
				}
			}
			final NumberFormat fmt = getUserCurrencyFormat();
			if (totalDiscount > 0)
			{

				final BigDecimal rmaDiscountTotal = new BigDecimal(totalDiscount, MathContext.DECIMAL64);

				final PriceData rmaDiscount = new PriceData();
				rmaDiscount.setFormattedValue(fmt.format(rmaDiscountTotal != null ? rmaDiscountTotal : new BigDecimal(0.0)));
				rmaDiscount.setValue(rmaDiscountTotal != null ? rmaDiscountTotal.setScale(decimalPlaces, BigDecimal.ROUND_DOWN)
						: new BigDecimal(0.0));
				orderData.setYourPriceDiscount(rmaDiscount);
			}


			if (noPrice)
			{
				totalList = 0.0;
			}

			if (totalList > 0)
			{
				final BigDecimal rmaListTotal = new BigDecimal(totalList, MathContext.DECIMAL64);

				final PriceData rmaListPrice = new PriceData();
				rmaListPrice.setFormattedValue(fmt.format(rmaListTotal != null ? rmaListTotal : new BigDecimal(0.0)));
				rmaListPrice.setValue(
						rmaListTotal != null ? rmaListTotal.setScale(decimalPlaces, BigDecimal.ROUND_DOWN) : new BigDecimal(0.0));
				orderData.setTotalRmaListPrice(rmaListPrice);
			}
		}

		if (order.getCommerceType().getCode() != null)
		{
			orderData.setCommerceType(order.getCommerceType().getCode());
		}
		orderData.setCustomerPO(order.getPurchaseOrderNumber());
		//orderData.setRmaNumber(order.getRmaNumber());
		if (orderData.getReturnNumber() != null && !orderData.getReturnNumber().isEmpty())
		{
			orderData.setRmaNumber(orderData.getReturnNumber());
		}
		else
		{
			orderData.setRmaNumber(order.getRmaNumber());
		}




		LOG.info("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Inside ORDER NOTIFICATION &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
		populateSoldTo(order);
		orderData.setExportAddress(orderData.getExportAddress() == null ? " " : orderData.getExportAddress());
		orderData.setDeliveryAccount((orderData.getDeliveryAccount() == null ? " " : orderData.getDeliveryAccount()));

		//populateSoldToContactUsDetails(order);
		populateContactUsDetailsWithProductLine(order);

		orderData.setPlanToExport(WordUtils.capitalizeFully(orderData.getPlanToExport()));
		// coverity 17416 DLS: Dead local store
		List<ShippingCarrierMethodData> prepayCarrierTypes = new ArrayList<ShippingCarrierMethodData>();
		if (null != orderData.getDeliveryOptions() && orderData.getDeliveryOptions().contains("Prepay"))
		{
			prepayCarrierTypes = bhgeCheckoutFacade.retriveCarrierMethods("prepay_add");
		}
		else
		{
			prepayCarrierTypes = bhgeCheckoutFacade.retriveCarrierMethods("collect");
		}

		for (final ShippingCarrierMethodData shippingCarrierMethodData : prepayCarrierTypes)
		{
			if (orderData.getDeliveryMode() != null && orderData.getDeliveryMode().getCode() != null
					&& shippingCarrierMethodData.getCode() != null
					&& orderData.getDeliveryMode().getCode().trim().equals(shippingCarrierMethodData.getCode().trim()))
			{
				orderData.setDeliveryCarrier(shippingCarrierMethodData.getName());
			}
		}

		//for list price total
		PriceData listPriceTotal = new PriceData();
		double setListPriceTotal = 0.0;
		Double yourPriceTotalDiscountAmount = 0.0;
		if (orderData.getEntries() != null && !orderData.getEntries().isEmpty())
		{
			final List<OrderEntryData> entries = orderData.getEntries();
			for (final OrderEntryData entry : entries)
			{
				disc = true;
				if (entry.getDiscountPrice() != null)
				{
					try
					{

						Double.parseDouble(entry.getDiscountPrice());

					}
					catch (final NumberFormatException nfe)
					{
						disc = false;
						DiscountPrice = Config.getParameter("DISC_PRICE_NOTAVBL");
					}
				}
				else
				{
					disc = false;
					DiscountPrice = Config.getParameter("DISC_PRICE_NOTAVBL");
				}
				if (disc == true)
				{
					final BigDecimal discountPrice = new BigDecimal(entry.getDiscountPrice());
					final NumberFormat fmtdiscount = getUserCurrencyFormat();
					fmtdiscount.format(discountPrice);
					entry.setDiscountPrice(fmtdiscount.format(discountPrice));
				}

				final NumberFormat fmt = getUserCurrencyFormat();

				final PriceData price = new PriceData();
				price.setFormattedValue(
						fmt.format(entry.getBasePrice() != null ? entry.getBasePrice().getValue() : new BigDecimal(0.0)));
				price.setValue(
						entry.getBasePrice() != null ? entry.getBasePrice().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN)
								: new BigDecimal(0.0));
				entry.setBasePrice(price);
				if (entry.getShipmentCost() != null)
				{
					entry.setShipmentCostStr(String.format("%.2f", entry.getShipmentCost()));
				}
				entry.setEntryNotes(entry.getEntryNotes());

				final PriceData yourPriceDiscount = new PriceData();
				if (entry.getYourPriceDiscount() == null
						|| (entry.getYourPriceDiscount() != null && entry.getYourPriceDiscount().getValue().doubleValue() == 0.0))
				{
					yourPriceDiscount.setFormattedValue(null);
				}
				else
				{
					yourPriceDiscount.setFormattedValue(fmt.format(entry.getYourPriceDiscount().getValue()));
					yourPriceDiscount.setValue(entry.getYourPriceDiscount() != null
							? entry.getYourPriceDiscount().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN)
							: new BigDecimal(0.0));

				}
				entry.setYourPriceDiscount(yourPriceDiscount);

				final List<String> estimatedShipDates = new ArrayList();

				double netPrice = 0.0;
				double entryTotalCouponDisc = 0.0;


				for (final AbstractOrderEntryModel entryModel : order.getEntries())
				{
					yourPriceTotalDiscountAmount = getYourPriceTotalDiscountAmount(entryModel, yourPriceTotalDiscountAmount);
					if (entry.getEntryNumber().equals(entryModel.getEntryNumber()))
					{
						final String rmaOfferings = "";
						LOG.info("==================================== OFFERING DATA ==========================================");
						//final List<String> offerList = new ArrayList();

						/*
						 * for (BHGEServiceOfferingsModel s : entryModel.getBhgeServiceOfferings()) { rmaOfferings =
						 * s.getOfferingType().getType() + " ,"; } if (rmaOfferings != null && rmaOfferings.length() > 0 &&
						 * rmaOfferings.charAt(rmaOfferings.length() - 1) == ',') { rmaOfferings = rmaOfferings.substring(0,
						 * rmaOfferings.length() - 1); entry.setRmaOfferings(rmaOfferings); } }
						 */
						if (!entryModel.getEstShippingDates().isEmpty())
						{
							entry.setEstimatedShipDates(entryModel.getEstShippingDates());
						}

						/*
						 * if (entryModel.getBhgeServiceOfferings() != null) { final Iterator<BHGEServiceOfferingsModel> itr =
						 * entryModel.getBhgeServiceOfferings().iterator();
						 *
						 * while (itr.hasNext()) { final BHGEServiceOfferingsModel offer = itr.next();
						 *
						 * rmaOfferings = rmaOfferings + offer.getOfferingText() + " ,"; LOG.info(
						 * "==================================== OFFERING DATA 1 ========================================== "
						 * + rmaOfferings); } if (rmaOfferings != null && rmaOfferings.length() > 0 &&
						 * rmaOfferings.charAt(rmaOfferings.length() - 1) == ',') { rmaOfferings = rmaOfferings.substring(0,
						 * rmaOfferings.length() - 1); LOG.info(
						 * "==================================== OFFERING DATA 2 ========================================== "
						 * + rmaOfferings); entry.setOfferingData(rmaOfferings); } }
						 */

						if (entryModel.getOfferingsListString() != null)
						{
							entry.setOfferingData(entryModel.getOfferingsListString());
						}

						/*
						 * else { LOG.
						 * info("==================================== OFFERING DATA 3 ========================================== "
						 * ); entry.setOfferingData(""); }
						 */
						if (entryModel.getDiscountValues() != null && !entryModel.getDiscountValues().isEmpty()
								&& BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_YP
										.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(
												entryModel.getOrder().getAppliedCouponCodes().iterator().next(), entryModel.getOrder())))
						{
							netPrice = entryModel.getTotalPrice().doubleValue() / entryModel.getQuantity();

							if (entryModel.getIsSameDayShipChecked() != null && entryModel.getIsSameDayShipChecked())
							{
								netPrice += entryModel.getSameDayShipmentCost();
							}

						}
						else if (entryModel.getDiscountValues() != null && !entryModel.getDiscountValues().isEmpty()
								&& BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_LP
										.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(
												entryModel.getOrder().getAppliedCouponCodes().iterator().next(), entryModel.getOrder())))
						{
							netPrice = entryModel.getTotalPrice().doubleValue() / entryModel.getQuantity();
							if (entryModel.getIsSameDayShipChecked() != null && entryModel.getIsSameDayShipChecked())
							{
								netPrice += entryModel.getSameDayShipmentCost();
							}
						}
						else
						{
							if (entryModel.getListPrice() != null && entryModel.getListPrice().doubleValue() != 0.0)
							{
								// Setting Net Total at line level items
								netPrice = entryModel.getListPrice();
							}
							else if (entryModel.getProduct() != null && entryModel.getProduct().getSapConfigurable() == false)
							{
								netPrice = entryModel.getBasePrice();
							}

							if (null != entryModel.getYourPriceDiscount())
							{
								netPrice -= entryModel.getYourPriceDiscount();
							}

							if (entryModel.getDiscountValues() != null && !entryModel.getDiscountValues().isEmpty())
							{
								for (final DiscountValue discount : entryModel.getDiscountValues())
								{
									if(discount.getValue() > entryModel.getYourPriceDiscount()) {
										Double discountDelta = discount.getValue() - entryModel.getYourPriceDiscount();
										entryTotalCouponDisc += discountDelta;
										netPrice -= discountDelta;
									}
									break;
								}

							}

							if (entryModel.getIsSameDayShipChecked() != null && entryModel.getIsSameDayShipChecked())
							{
								netPrice += entryModel.getSameDayShipmentCost();
							}
							// Adding VC Price if it is available
							if (entryModel.getVcOptionsPrice() != null)
							{
								netPrice += entryModel.getVcOptionsPrice();
							}
							//Subtracting silver clause price
							if (entryModel.getSilverClausePricePercentage() != null)
							{
								if (entryModel.getSilverClausePricePercentage().contains(BhgeCoreConstants.HYPHEN))
								{
									netPrice -= entryModel.getSilverClausePrice();
								}
								else
								{
									netPrice += entryModel.getSilverClausePrice();
								}
							}

						}
						netPrice = CoreAlgorithms.round(netPrice, CURRENCY_FORMAT_DIGITS);
						entry.setCouponDiscountStr(String.format("%.2f", entryTotalCouponDisc));
						final String netTotal = String.format("%.2f", new Double(netPrice));
						final String netTotalPrc = String.format("%,.2f", new Double(netPrice));
						entry.setEntryLevelSellingPriceStr(netTotalPrc);
						final PriceData subtotalPriceData = populatePrice(new Double(netTotal), new CurrencyModel());
						subtotalPriceData.setFormattedValue(fmt.format(netPrice));
						//						entry.setSubTotalListPrice(populatePrice(new Double(netTotal), new CurrencyModel()));
						entry.setSubTotalListPrice(subtotalPriceData);
						// Populating Net Selling Price for the Entry
						final String netSellingPrice = String.format("%.2f", new Double(entryModel.getQuantity() * netPrice));
						final String netSellingPriceStr = String.format("%,.2f", new Double(entryModel.getQuantity() * netPrice));
						entry.setNetSellingPriceStr(netSellingPriceStr);
						final PriceData netSellinPriceData = populatePrice(new Double(netSellingPrice), new CurrencyModel());
						netSellinPriceData.setFormattedValue(fmt.format(new Double(entryModel.getQuantity() * netPrice)));//Resume
						//						entry.setNetSellingPrice(populatePrice(new Double(netSellingPrice), new CurrencyModel()));
						entry.setNetSellingPrice(netSellinPriceData);
						final PriceData listPrice = new PriceData();
						//to fetch the list price from OrderModel as it is not getting fetched in orderEntryData


						final BHGESoldToData soldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
						final PriceData priceData = bhgePriceDataFactory.create(PriceDataType.FROM,
								BigDecimal.valueOf(entryModel.getListPrice() != null ? entryModel.getListPrice().doubleValue() : 0.0),
								soldTo != null && soldTo.getCurrency() != null ? soldTo.getCurrency().getIsocode() : "USD");
						entry.setListPrice(priceData);

						//listPriceTotal += entryModel.getListPrice();


						listPrice.setFormattedValue(
								fmt.format(entry.getListPrice() != null ? entry.getListPrice().getValue() : new BigDecimal(0.0)));
						listPrice.setValue(entry.getListPrice() != null
								? entry.getListPrice().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN)
								: new BigDecimal(0.0));


						entry.setListPrice(listPrice);

						final PriceData silverClausePrice = new PriceData();
						silverClausePrice.setFormattedValue(fmt.format(
								entry.getSilverClausePrice() != null ? entry.getSilverClausePrice().getValue() : new BigDecimal(0.0)));
						silverClausePrice.setValue(entry.getSilverClausePrice() != null
								? entry.getSilverClausePrice().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN)
								: new BigDecimal(0.0));
						entry.setSilverClausePrice(silverClausePrice);
						entry.setSilverClausePricePercentage(entryModel.getSilverClausePricePercentage());

						final PriceData vcOptions = new PriceData();
						if (entry.getVcOptionsPrice() == null
								|| (entry.getVcOptionsPrice() != null && entry.getVcOptionsPrice().getValue().doubleValue() == 0.0))
						{
							//entry.setVcOptionsPrice(null);
							vcOptions.setFormattedValue(null);
						}
						else
						{
							vcOptions.setFormattedValue(fmt.format(
									entry.getVcOptionsPrice() != null ? entry.getVcOptionsPrice().getValue() : new BigDecimal(0.0)));
							vcOptions.setValue(entry.getVcOptionsPrice() != null
									? entry.getVcOptionsPrice().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN)
									: new BigDecimal(0.0));

						}
						if(StringUtils.isNotEmpty(entryModel.getVcFullyConfigurepartNumber())) {
							entry.setFullyConfigurePartNumber(entryModel.getVcFullyConfigurepartNumber());
						}
						entry.setVcOptionsPrice(vcOptions);
						setListPriceTotal = setListPriceTotal + entryModel.getSubTotalListPrice().doubleValue();
						listPriceTotal = bhgePriceDataFactory.create(PriceDataType.FROM,
								BigDecimal.valueOf(entryModel.getSubTotalListPrice() != null ? setListPriceTotal : 0.0),
								soldTo != null && soldTo.getCurrency() != null ? soldTo.getCurrency().getIsocode() : "USD");

						orderData.setTotalListPrice(listPriceTotal);

					}
				}

				final List<String> estimatedShipQtys = new ArrayList();
				if (entry.getEstimatedShipDates() != null)
				{
					for (int j = 0; j < entry.getEstimatedShipDates().size(); j++)
					{

						try
						{
							String fromDate = entry.getEstimatedShipDates().get(j);
							if (fromDate.equalsIgnoreCase("No estimate available"))
							{
								estimatedShipDates.add(fromDate);
								estimatedShipQtys.add("1");
							}
							else
							{
								final String splitDate[] = StringUtils.split(fromDate);
								if (splitDate.length > 1 && splitDate[1] != null)
								{
									fromDate = splitDate[1];
								}

								if (fromDate != null && !fromDate.isEmpty())
								{
									final SimpleDateFormat originalFormat = new SimpleDateFormat(
											Config.getString("ATP_SHIP_DATE_FORMAT", "MM-dd-yyyy"));
									final SimpleDateFormat targetFormat = new SimpleDateFormat("dd-MMM-yyyy");
									Date date;

									try
									{
										date = originalFormat.parse(fromDate);
										fromDate = targetFormat.format(date);

										if (DEFAULT_LONGEST_EST_SHIP_DATE.equals(fromDate))
										{
											fromDate = "Availability will be confirmed";
										}

										//estimatedShipDates.add("Qty" + " " + splitDate[0] + "-" + "Est. Ship" + " " + fromDate);
										estimatedShipDates.add(fromDate);
										estimatedShipQtys.add(splitDate[0]);
									}
									catch (final Exception e)
									{
										// Auto-generated catch block
										LOG.error("Error has occured in date Parsing: " + e);
										estimatedShipDates.add(entry.getEstimatedShipDates().get(j));
									}

									entry.getEstimatedShipDates().get(j);
								}
							}
						}

						catch (final Exception e)
						{
							LOG.error("Error has occured in date format: ", e);

						}

					}
					entry.setEstimatedShipDates(estimatedShipDates);
					entry.setEstimatedShipQtys(estimatedShipQtys);
				}

			}

		}

		final NumberFormat fmtP = getUserCurrencyFormat();




		/*
		 * if (order.getCommerceType().getCode() == "RETURNS") { PriceData priceTotalRMA = createPrice(order,
		 * order.getTotalReturnPrice()); final PriceData priceTotal = new PriceData(); priceTotal.setFormattedValue(
		 * fmtP.format(priceTotalRMA != null ? priceTotalRMA.getValue() : new BigDecimal(0.0)));
		 * priceTotal.setValue(priceTotalRMA != null ? priceTotalRMA.getValue().setScale(decimalPlaces,
		 * BigDecimal.ROUND_DOWN) : new BigDecimal(0.0)); orderData.setTotalPrice(priceTotal); } else{
		 */
		final PriceData priceTotal = new PriceData();
		priceTotal.setFormattedValue(
				fmtP.format(orderData.getTotalPrice() != null ? orderData.getTotalPrice().getValue() : new BigDecimal(0.0)));
		priceTotal.setValue(orderData.getTotalPrice() != null
				? orderData.getTotalPrice().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN)
				: new BigDecimal(0.0));
		orderData.setTotalPrice(priceTotal);
		//}
		if (order.getCommerceType().getCode() == "RETURNS")
		{
			if (!(orderData.getTotalPrice().getValue().doubleValue() > 0))
			{
				orderData.setTotalPrice(null);
			}
		}

		final PriceData shippingPriceTotal = new PriceData();
		shippingPriceTotal.setFormattedValue(
				fmtP.format(orderData.getShipmentCost() != null ? orderData.getShipmentCost().getValue() : new BigDecimal(0.0)));
		shippingPriceTotal.setValue(orderData.getShipmentCost() != null
				? orderData.getShipmentCost().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN)
				: new BigDecimal(0.0));
		orderData.setDeliveryCost(shippingPriceTotal);

		final PriceData discountsTotal = new PriceData();
		if (orderData.getTotalDiscounts() == null
				|| (orderData.getTotalDiscounts() != null && orderData.getTotalDiscounts().getValue().doubleValue() == 0.0))
		{
			discountsTotal.setFormattedValue(null);
		}
		else
		{
			discountsTotal.setFormattedValue(fmtP
					.format(orderData.getTotalDiscounts() != null ? orderData.getTotalDiscounts().getValue() : new BigDecimal(0.0)));
			discountsTotal.setValue(orderData.getTotalDiscounts() != null
					? orderData.getTotalDiscounts().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN)
					: new BigDecimal(0.0));
		}

		orderData.setTotalDiscounts(discountsTotal);

		listPriceTotal.setFormattedValue(
				fmtP.format(orderData.getTotalListPrice() != null ? orderData.getTotalListPrice().getValue() : new BigDecimal(0.0)));
		listPriceTotal.setValue(orderData.getTotalListPrice() != null
				? orderData.getTotalListPrice().getValue().setScale(decimalPlaces, BigDecimal.ROUND_DOWN)
				: new BigDecimal(0.0));
		orderData.setTotalListPrice(listPriceTotal);
		final PriceData yourPriceDiscountTotal = new PriceData();
		if (yourPriceTotalDiscountAmount.doubleValue() == 0.0)
		{
			yourPriceDiscountTotal.setFormattedValue(null);
		}
		else
		{
			yourPriceDiscountTotal.setFormattedValue(fmtP.format(yourPriceTotalDiscountAmount.doubleValue()));
			yourPriceDiscountTotal.setValue(
					BigDecimal.valueOf(yourPriceTotalDiscountAmount.doubleValue()).setScale(decimalPlaces, BigDecimal.ROUND_DOWN));
		}
		orderData.setYourPriceDiscount(yourPriceDiscountTotal);
		orderData.setDeliveryOptions(WordUtils.capitalizeFully(orderData.getDeliveryOptions()));
		final String split[] = StringUtils.split(orderData.getUser().getName());
		if (split.length > 0 && split[0] != null)
		{
			orderData.getUser().setName(split[0]);
		}

	}


	protected PriceData createPrice(final AbstractOrderModel source, final Double val)
	{
		if (source == null)
		{
			throw new IllegalArgumentException("source order must not be null");
		}

		final CurrencyModel currency = source.getCurrency();
		if (currency == null)
		{
			throw new IllegalArgumentException("source order currency must not be null");
		}

		// Get double value, handle null as zero
		final double priceValue = val != null ? val.doubleValue() : 0d;

		if (priceValue != 0d)
		{
			return priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(priceValue), currency);
		}
		return null;
	}





	protected Converter<OrderModel, OrderData> getOrderConverter()
	{
		return orderConverter;
	}

	
	public void setOrderConverter(final Converter<OrderModel, OrderData> orderConverter)
	{
		this.orderConverter = orderConverter;
	}

	private void populateSoldToContactUsDetails(final OrderModel order)
	{

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

	protected PriceData populatePrice(final Double price, final CurrencyModel currency)
	{
		final double priceValue = price != null ? price.doubleValue() : 0d;
		return priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(priceValue), currency);
	}

	private String getSoldToIdForB2bUnit(final B2BUnitModel childB2Bunit)
	{
		String soldToId = null;
		if (null != childB2Bunit && null != childB2Bunit.getUid() && childB2Bunit.getUid().contains("_"))
		{
			final String[] uid = childB2Bunit.getUid().split("_");
			soldToId = uid[0];
		}
		return soldToId;
	}

	private void populateSoldTo(final OrderModel order)
	{
		final B2BUnitModel childB2Bunit = order.getSoldToForCart();
		final String soldToId = getSoldToIdForB2bUnit(childB2Bunit);

		final B2BUnitModel soldTo = userProfileService.findChildB2BUnitModel(soldToId);
		sessionSoldToName = soldTo.getLocName();

		if (childB2Bunit != null && null != (childB2Bunit.getCurrency()))
		{
			currencyISO = childB2Bunit.getCurrency() == null ? " " : childB2Bunit.getCurrency().getIsocode();
			currencyFormattedValue = childB2Bunit.getCurrency() == null ? " " : childB2Bunit.getCurrency().getSymbol();
			currencySymbol = currencyFormattedValue;
		}

		if (childB2Bunit != null)
		{
			final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) childB2Bunit.getAddresses();
			for (final AddressModel address : listOfSoldToAddress)
			{
				if (address.getBillingAddress())
				{
					soldTo.setBillingAddress(address);
					break;
				}
			}
		}
		final CustomerModel currentUser = (CustomerModel) userService.getCurrentUser();
		//Setting Risk and Sanctioned attribute
		if(null!= order.getDeliveryAddress() && (order.getDeliveryAddress().getCountry().getRisk() || order.getDeliveryAddress().getCountry().getSanctioned()))
			risk="TRUE";

		if (CustomerType.GUEST.equals(currentUser.getType()))
		{
			sessionSoldToName = order.getPaymentAddress().getCompany();
			sessionSoldToAddress = order.getPaymentAddress();
		}
		else
		{
			sessionSoldToAddress = soldTo.getBillingAddress();
		}
		if (sessionSoldToAddress != null)
		{
			//sessionSoldToAddress.getStreetnumber();
			sessionSoldToAddress.setStreetnumber(sessionSoldToAddress == null ? " "
					: (StringUtils.isEmpty(sessionSoldToAddress.getStreetnumber()) ? " " : sessionSoldToAddress.getStreetnumber()));
			sessionSoldToAddress.setStreetname(sessionSoldToAddress == null ? " "
					: (StringUtils.isEmpty(sessionSoldToAddress.getStreetname()) ? " " : sessionSoldToAddress.getStreetname()));
			sessionSoldToAddress.setTown(sessionSoldToAddress == null ? " "
					: (StringUtils.isEmpty(sessionSoldToAddress.getTown()) ? " " : sessionSoldToAddress.getTown()));
			sessionSoldToAddress.setPostalcode(sessionSoldToAddress == null ? " "
					: (StringUtils.isEmpty(sessionSoldToAddress.getPostalcode()) ? " " : sessionSoldToAddress.getPostalcode()));
			if (sessionSoldToAddress.getRegion() != null && sessionSoldToAddress.getRegion().getName() != null)
			{
				sessionSoldToAddress.setRegion(sessionSoldToAddress.getRegion());
			}
			if (sessionSoldToAddress.getCountry() != null && sessionSoldToAddress.getCountry().getName() != null)
			{
				sessionSoldToAddress.setCountry(sessionSoldToAddress.getCountry());
			}
		}
	}

	@Override
	protected BaseSiteModel getSite(final OrderProcessModel orderProcessModel)
	{
		return orderProcessModel.getOrder().getSite();
	}

	@Override
	protected CustomerModel getCustomer(final OrderProcessModel orderProcessModel)
	{
		return (CustomerModel) orderProcessModel.getOrder().getUser();
	}

	public OrderData getOrder()
	{
		return orderData;
	}


	public ModelService getModelService()
	{
		return modelService;
	}

	/**
	 * @param modelService
	 *           the modelService to set
	 */
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}


	@Override
	protected LanguageModel getEmailLanguage(final OrderProcessModel orderProcessModel)
	{
		return orderProcessModel.getOrder().getLanguage();
	}

	private NumberFormat getUserCurrencyFormat()
	{
		NumberFormat numberFormat = null;
		final CustomerModel currentUser = (CustomerModel) userService.getCurrentUser();
		if (CustomerType.GUEST.equals(currentUser.getType()))
		{
			final String userCurrencyFormat = "en_US";
			final String lang = userCurrencyFormat.split("_")[0];
			final String country = userCurrencyFormat.split("_")[1];
			final Locale locale = new Locale(lang, country);
			numberFormat = NumberFormat.getCurrencyInstance(locale);
			final DecimalFormatSymbols decimalFormatSymbols = ((DecimalFormat) numberFormat).getDecimalFormatSymbols();
			decimalFormatSymbols.setCurrencySymbol("");
			((DecimalFormat) numberFormat).setDecimalFormatSymbols(decimalFormatSymbols);
		}
		else if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			final GEEdgeCustomerModel customer = (GEEdgeCustomerModel) userService.getCurrentUser();
			final Optional<BHGECurrencyFormatModel> optionalCurrencyFormat = Optional
					.ofNullable(customer.getDefaultCurrencyFormat());
			final String userCurrencyFormat = optionalCurrencyFormat.map(BHGECurrencyFormatModel::getCode).orElse("en_US");
			final String lang = userCurrencyFormat.split("_")[0];
			final String country = userCurrencyFormat.split("_")[1];
			final Locale locale = new Locale(lang, country);
			numberFormat = NumberFormat.getCurrencyInstance(locale);
			final DecimalFormatSymbols decimalFormatSymbols = ((DecimalFormat) numberFormat).getDecimalFormatSymbols();
			decimalFormatSymbols.setCurrencySymbol("");
			((DecimalFormat) numberFormat).setDecimalFormatSymbols(decimalFormatSymbols);
		}
		return numberFormat;
	}

	/**
	 * populates your price total value based on quantity
	 *
	 * @param orderEntry
	 * @param yourPriceTotalDiscount
	 * @return
	 */
	private Double getYourPriceTotalDiscountAmount(final AbstractOrderEntryModel orderEntry, Double yourPriceTotalDiscount)
	{
		if (orderEntry.getYourPriceDiscount() != null)
		{
			yourPriceTotalDiscount += orderEntry.getYourPriceDiscount() * orderEntry.getQuantity();
		}
		return yourPriceTotalDiscount;
	}

	public String getProductLine() {
		return productLine;
	}

	public void setProductLine(String productLine) {
		this.productLine = productLine;
	}
}
