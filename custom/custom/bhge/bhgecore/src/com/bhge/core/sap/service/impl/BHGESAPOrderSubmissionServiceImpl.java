package com.bhge.core.sap.service.impl;

import com.bhge.core.scpi.rfc.zordercreate.*;
import com.hybris.ge.edge.core.model.type.BHGECreditCardPaymnentinfoModel;
import de.hybris.platform.b2b.enums.CheckoutPaymentType;
import de.hybris.platform.commerceservices.enums.CustomerType;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.promotionengineservices.model.RuleBasedOrderEntryAdjustActionModel;
import de.hybris.platform.promotions.model.AbstractPromotionActionModel;
import de.hybris.platform.promotions.model.PromotionResultModel;
import de.hybris.platform.ruleengine.model.AbstractRuleEngineRuleModel;
import de.hybris.platform.ruleengine.model.DroolsRuleModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.DiscountValue;
import de.hybris.platform.servicelayer.user.daos.UserDao;

import java.io.ByteArrayInputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

import jakarta.annotation.Resource;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.springframework.util.StringUtils;
import org.apache.log4j.Logger;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.GEEdgeCartType;
import com.bhge.core.enums.GEOrderType;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGECouponModel;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.order.service.impl.DefaultBHGEB2BOrderService;
import com.bhge.core.sap.service.BHGESAPOrderSubmissionService;
import com.bhge.core.sap.util.BHGESAPJCoUtils;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.integration.models.services.BHGESapPlantLogSysOrgService;
import com.bhge.store.services.impl.BHGEBaseStoreServiceImpl;


public class BHGESAPOrderSubmissionServiceImpl implements BHGESAPOrderSubmissionService
{

	@Resource(name = "modelService")
	protected ModelService modelService;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	@Resource(name = "rendererService")
	private RendererService rendererService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreServiceImpl baseStoreService;

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "userService")
	UserService userService;

	@Resource(name = "bhgeSapPlantLogSysOrgService")
	public BHGESapPlantLogSysOrgService bhgeSapPlantLogSysOrgService;

	@Resource(name = "b2bOrderService")
	private DefaultBHGEB2BOrderService bhgeB2BOrderService;

	@Resource(name = "bhgeUserProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	@Resource(name = "scpiConnector")
	SCPIConnector scpiConnector;

	@Resource(name = "userDao")
	private UserDao userDao;

	private static final Logger LOG = Logger.getLogger(BHGESAPOrderSubmissionServiceImpl.class);

	private static final String SCPI_Z_ORDERCREATE_ENDPOINT_URL = "SCPI_Z_ORDERCREATE_ENDPOINT";
	
	private static final String ORDER_STATUS_ERROR_EMAIL_SUBJECT = "BH Digital Solutions Store Order Response Status Alert";
	

	public void submitOrderToSAP(final OrderModel order, final JCoConnection connection)
	{
		try
		{
			if (order.getEntries() != null && !order.getEntries().isEmpty())
			{
				final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_Z_ORDERCREATE_ENDPOINT_URL,
						flexibleSearchService);

				final BHGEZOrderCreateRequest orderCreateRequest = new BHGEZOrderCreateRequest();

				//Populate header fields for XML
				final BHGEZOrderCreateRequestHeader orderHeaderTable = new BHGEZOrderCreateRequestHeader();
				if (null == order.getRMAEndUserAddress())
				{
					processIncorrectOrder(order, " has no EndUser Address");
					return;	
				}
				populateOrderHeaderDetails(order, orderHeaderTable);

				orderCreateRequest.setHeaderTable(orderHeaderTable);

				//Sold to partner details
				final BHGEZOrderCreateRequestItem soldToPartnerTable = new BHGEZOrderCreateRequestItem();
				if(null ==  getSoldToAddress(order))
				{
					processIncorrectOrder(order, " has no SoldTo Address");
					return;
				}
				setSoldToDetailsOnPartnerTable(order, soldToPartnerTable);
				orderCreateRequest.getPartnerTable().getItems().add(soldToPartnerTable);
				
				//Payer Partner table
				final BHGEZOrderCreateRequestItem payerPartnerTable = new BHGEZOrderCreateRequestItem();
				setPayerDetailsOnPartnerTable(order, payerPartnerTable);
			    orderCreateRequest.getPartnerTable().getItems().add(payerPartnerTable);
			    
				//Ship to partner details
				final BHGEZOrderCreateRequestItem shipToPartnerTable = new BHGEZOrderCreateRequestItem();
				setShiptoDetailsOnPartnerTable(order, shipToPartnerTable);
				orderCreateRequest.getPartnerTable().getItems().add(shipToPartnerTable);
				
				//Bill-to partner details
				final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) order.getSoldToForCart().getAddresses();
				final List<AddressModel> listOfBillToAddress=new ArrayList<>();
				for (final AddressModel address : listOfSoldToAddress)
				{
					if (address.getBillingAddress())
					{
						listOfBillToAddress.add(address);
					}
				}
				
				if (listOfBillToAddress.size() > 1){
				final BHGEZOrderCreateRequestItem billToPartnerTable = new BHGEZOrderCreateRequestItem();
				setBillToDetailsOnPartnerTable(order, billToPartnerTable);
				orderCreateRequest.getPartnerTable().getItems().add(billToPartnerTable);
				}

				//Populate film price details
				final BHGEZOrderCreateRequestItem priceTable = new BHGEZOrderCreateRequestItem();
				setTotalPriceDetailsOnPriceTable(order, priceTable);
				orderCreateRequest.getPriceTable().getItems().add(priceTable);

				//Populate payment details
				String orderPaymentType = CheckoutPaymentType.ACCOUNT.getCode();
				if(CheckoutPaymentType.CARD.getCode().equals(order.getPaymentType().getCode())){
					orderPaymentType = CheckoutPaymentType.CARD.getCode();
					final BHGEZOrderBappiCard bappiCardTable = new BHGEZOrderBappiCard();
					final BHGECreditCardPaymnentinfoModel ccPaymentInfo = order.getBhgeCreditCardPaymentInfo();
					setPaymentDetailsOnBappiCardTable(ccPaymentInfo,bappiCardTable);
					orderCreateRequest.getCcItem().getItems().add(bappiCardTable);
				}

				//Populate applied couple codes price details
				/** Promotion and voucher RFC changes **/
				final Collection<String> couponCodes = order.getAppliedCouponCodes();
				final String couponCode = null;
				final String discountCode = "";
				BHGECouponModel geCoupon = null;
				geCoupon = setCoupleDetailsOnPriceTable(order, orderCreateRequest, couponCodes, couponCode, discountCode, geCoupon);

				//Entry details
				int lineItemCount = 0;
				LOG.debug("Setting CartItems to Order " + order.getCode());
				for (final AbstractOrderEntryModel orderEntry : order.getEntries())
				{
					final BHGEZOrderCreateRequestItem itemsTable = new BHGEZOrderCreateRequestItem();
					final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) orderEntry.getProduct();
					String itemNum = "";

					lineItemCount++;

					if (lineItemCount <= 9)
					{
						itemNum = "00" + lineItemCount * 1000;
					}
					else
					{
						itemNum = "0" + lineItemCount * 1000;
					}
					setLineDetailsOnItemsTable(orderEntry, itemsTable, geEdgeProductModel, itemNum, orderPaymentType);

					orderCreateRequest.getItemsTable().getItems().add(itemsTable);


					//Populate VC table
					setVCValuesOnVCTable(orderCreateRequest, orderEntry, itemNum, geEdgeProductModel);

					//Populate Price table
					setDeliveryCostDetailsOnPriceTable(order, orderCreateRequest, orderEntry, itemsTable, itemNum, geCoupon);

					//Populate discount values
					setDiscountValuesOnPriceTable(order, orderCreateRequest, orderEntry, itemNum, geCoupon);
				}
				final BHGEZOrderCreateResponse responseXML = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl,
						orderCreateRequest, BHGEZOrderCreateResponse.class);


				getErrorFromMessageTable(responseXML.getMessageTable(), order);

				//Clearing Order history From Cache for the Soldto Customers
				final BHGEZOrderCreateRequestItem soldToPartnerResponseTable = responseXML.getPartnerTable();
				if (CollectionUtils.isNotEmpty(soldToPartnerResponseTable.getItems()))
				{
					clearCacheFromSoldTo(soldToPartnerResponseTable);
				}

			}
			else
			{
				processIncorrectOrder(order, " has no entries.");
			}
		}
		catch (final Exception exception)
		{
			getStackTrace(exception);
			handleSAPException(order, exception);
			LOG.error("exception occured during the RFC call to submit order" + exception.getMessage());
		}
	}

	/**
	 * Clears cache from customer for sold to
	 *
	 * @param soldToPartnerResponseTable
	 */
	private void clearCacheFromSoldTo(final BHGEZOrderCreateRequestItem soldToPartnerResponseTable)
	{
		final String soldToPartnerFunction = Config.getString("SOLD_TO_PARTNER_FUNCTION", "AG");
		final Set<String> soldToList = new HashSet<String>();
		for (final BHGEZOrderCreateRequestItem soldToPartner : soldToPartnerResponseTable.getItems())
		{
			final String partnerFunction = soldToPartner.getPartnerFunction();
			if (!StringUtils.isEmpty(partnerFunction) && soldToPartnerFunction.equalsIgnoreCase(partnerFunction))
			{
				soldToList.add(soldToPartner.getPartnerNumber());
			}
		}

		if (soldToList.size() > 0)
		{
			bhgeB2BOrderService.clearOrderHistoryCacheForCustomer(soldToList);
		}
	}

	/**
	 * Processes response for faulty order
	 *
	 * @param order
	 */
	private void processIncorrectOrder(final OrderModel order, String errorMessage)
	{
		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
		final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
		// Get the date today using Calendar object.
		final Date today = Calendar.getInstance().getTime();
		final String reportDate = df.format(today);
		String email = "";
		if (order.getUser() instanceof CustomerModel && ((CustomerModel) order.getUser()).getType() != null
				&& CustomerType.GUEST.getCode().equals(((CustomerModel) order.getUser()).getType().getCode()))
		{
			final UserModel customer = userDao.findUserByUID(order.getUser().getUid());
			email = ((CustomerModel) customer).getContactEmail();
		}
		else
		{
			try 
			{
				email = userProfileService.findCurrentUserProfile(order.getUser().getUid()).getEmail();	
			}
			catch(Exception e)
			{
				LOG.error("CustomerNotFound for user " + order.getUser().getUid());
			}
		}
		model.setCurrentUserEmail(email);
		final String SoldToId = order.getSoldToForCart().getUid();
		model.setOrderID(order.getCode());
		model.setErrorCode("BackendException in Order Batch Submission");
		model.setErrorDescription(order.getCode() + errorMessage);
		model.setCurrentSoldToId(SoldToId);
		model.setErrorTime(reportDate);
		model.setErrorType("Order Submission Error");
		model.setRequestParameterToSAP("Order with OrderID" + order.getCode());
		model.setResponseParameterFromSAP("No Response");
		model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_HIGH);
		model.setStatus(Boolean.TRUE);
		model.setCartType(order.getCartType());
		model.setCommerceType(order.getCommerceType());

		modelService.save(model);
		//Email Trigger

		final String templateCodeCriticalError = "CriticalErrorMailTemplate";
		final String subject = Config.getString("ORDER_SUBMIT_SUBJECT", "EdgeNet Critical Error Alert");
		final String to = Config.getString("ORDER_SUBMITION_TO_ADDRESS", "");
		final String orderId = order.getCode();
		final String userSSO = order.getUser().getUid();
		sendEmail(templateCodeCriticalError, subject, to, model, orderId,userSSO);

		//Email Trigger end
		order.setStatus(OrderStatus.ERROR);
		modelService.save(order);
	}

	/**
	 * setting couple details on order request
	 *
	 * @param order
	 * @param orderCreateRequest
	 * @param couponCodes
	 * @param couponCode
	 * @param discountCode
	 * @param geCoupon
	 * @return
	 */
	private BHGECouponModel setCoupleDetailsOnPriceTable(final OrderModel order, final BHGEZOrderCreateRequest orderCreateRequest,
			final Collection<String> couponCodes, String couponCode, String discountCode, BHGECouponModel geCoupon)
	{
		if (couponCodes != null && !couponCodes.isEmpty())
		{
			couponCode = couponCodes.iterator().next();
		}


		if (couponCode != null)
		{
			geCoupon = getAppliedCouponToCart(couponCode, order);
			if (geCoupon != null)
			{
				Map<String, String> ruleMap = null;
				final Set<PromotionResultModel> promotionResults = order.getAllPromotionResults();
				for (final PromotionResultModel result : promotionResults)
				{
					final Collection<AbstractPromotionActionModel> actions = result.getActions();
					for (final AbstractPromotionActionModel action : actions)
					{
						if (action instanceof RuleBasedOrderEntryAdjustActionModel)
						{
							final RuleBasedOrderEntryAdjustActionModel ruleBasedAction = (RuleBasedOrderEntryAdjustActionModel) action;
							final AbstractRuleEngineRuleModel rule = ruleBasedAction.getRule();
							if (rule instanceof DroolsRuleModel)
							{
								final DroolsRuleModel droolsRule = (DroolsRuleModel) rule;
								ruleMap = droolsRule.getGlobals();
							}
						}
					}

					if (geCoupon.getApplyOnlistPrice())
					{
						if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryFixedDiscountAction"))
						{
							discountCode = BhgeCoreConstants.DISC_CODE_FIXED_VALUE_ON_LP;
						}
						else if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryPercentageDiscountAction"))
						{
							discountCode = BhgeCoreConstants.DISC_CODE_PERCENTAGE_ON_LP;
						}
						else if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryFixedPriceAction"))
						{
							discountCode = BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_LP;
						}
						else if (ruleMap != null && ruleMap.containsKey("ruleOrderFixedDiscountAction"))
						{
							LOG.info("Discount reason is ruleOrderFixedDiscountAction - LP");
							discountCode = BhgeCoreConstants.DISC_CODE_FIXED_VALUE_ON_LP;
						}
						else if (ruleMap != null && ruleMap.containsKey("ruleOrderPercentageDiscountAction"))
						{
							LOG.info("Discount reason is ruleOrderPercentageDiscountAction - LP");
							discountCode = BhgeCoreConstants.DISC_CODE_PERCENTAGE_ON_LP;
						}
					}
					else
					{
						if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryFixedDiscountAction"))
						{
							discountCode = BhgeCoreConstants.DISC_CODE_FIXED_VALUE_ON_YP;
						}
						else if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryPercentageDiscountAction"))
						{
							discountCode = BhgeCoreConstants.DISC_CODE_PERCENTAGE_ON_YP;
						}
						else if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryFixedPriceAction"))
						{
							discountCode = BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_YP;
						}
						else if (ruleMap != null && ruleMap.containsKey("ruleOrderFixedDiscountAction"))
						{
							LOG.info("Discount reason is ruleOrderFixedDiscountAction");
							discountCode = BhgeCoreConstants.DISC_CODE_FIXED_VALUE_ON_YP;
						}
						else if (ruleMap != null && ruleMap.containsKey("ruleOrderPercentageDiscountAction"))
						{
							LOG.info("Discount reason is ruleOrderPercentageDiscountAction");
							discountCode = BhgeCoreConstants.DISC_CODE_PERCENTAGE_ON_YP;
						}
					}

				}
				if (order.getAppliedCouponCodes() != null)
				{
					/** If any coupon code is applied to that order - check for discounts */
					final BHGEZOrderCreateRequestItem coupleTable = new BHGEZOrderCreateRequestItem();
					coupleTable.setConditionType(BhgeCoreConstants.VOUCHER_TYPE);
					if (order.getSoldToForCart() != null && order.getSoldToForCart().getCurrency() != null)
					{
						coupleTable.setConditionCurrency(order.getSoldToForCart().getCurrency().getIsocode());
					}
					else
					{
						coupleTable.setConditionCurrency(order.getCurrency().getIsocode());
					}
					coupleTable.setDiscountReason(geCoupon.getCouponId());
					coupleTable.setVoucherCode(discountCode);
					coupleTable.setConditionValue(Double.toString(order.getTotalDiscounts()));
					orderCreateRequest.getPriceTable().getItems().add(coupleTable);
				}
			}
		}
		return geCoupon;
	}

	/**
	 * Setting total price details on order request
	 *
	 * @param order
	 * @param priceTable
	 */
	private void setTotalPriceDetailsOnPriceTable(final OrderModel order, final BHGEZOrderCreateRequestItem priceTable)
	{
		LOG.info(" Total price of the Order is " + order.getTotalPrice());
		String pattern = "##.##";
        DecimalFormat decimalFormat = new DecimalFormat(pattern);
		priceTable.setConditionType(BhgeCoreConstants.FILM_PRICE_TYPE);
		priceTable.setConditionValue(decimalFormat.format(order.getTotalPrice()));
		priceTable.setConditionCurrency(order.getCurrency().getIsocode());
	}

	/***
	 * Method
	 * @param ccPaymentModel
	 * @param bappiCardTable
	 */
	private void setPaymentDetailsOnBappiCardTable(final BHGECreditCardPaymnentinfoModel ccPaymentModel, final BHGEZOrderBappiCard bappiCardTable)
	{
		LOG.info("Inside setPaymentDetailsOnBappiCardTable");
		bappiCardTable.setCcName(org.apache.commons.lang3.StringUtils.isNotEmpty(ccPaymentModel.getName()) ? ccPaymentModel.getName() : "");
		setCCExpire(ccPaymentModel, bappiCardTable);
		bappiCardTable.setCcType(org.apache.commons.lang3.StringUtils.isNotEmpty(ccPaymentModel.getType()) ? ccPaymentModel.getType() : "");
		bappiCardTable.setCcNumber(org.apache.commons.lang3.StringUtils.isNotEmpty(ccPaymentModel.getToken()) ? ccPaymentModel.getToken() : "");
	}

	//Credit card expiry date in expected format
	private void setCCExpire(BHGECreditCardPaymnentinfoModel ccPaymentModel, BHGEZOrderBappiCard bappiCardTable) {
		if(org.apache.commons.lang3.StringUtils.isNotEmpty(ccPaymentModel.getValidTru())){
			String ccValidTru = ccPaymentModel.getValidTru() + "01";
			DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyyMMdd");
			LocalDate locDate = LocalDate.parse(ccValidTru, inputFormatter);
			DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("YYYY-MM-dd");
			ccValidTru = locDate.format(outputFormatter);
			bappiCardTable.setCcValidTru(ccValidTru);
		}else{
			bappiCardTable.setCcValidTru("");
		}
	}

	/**
	 * Setting delivery cost details on order request
	 *
	 * @param order
	 * @param orderCreateRequest
	 * @param orderEntry
	 * @param itemsTable
	 * @param itemNum
	 */
	private void setDeliveryCostDetailsOnPriceTable(final OrderModel order, final BHGEZOrderCreateRequest orderCreateRequest,
			final AbstractOrderEntryModel orderEntry, final BHGEZOrderCreateRequestItem itemsTable, final String itemNum,
			final BHGECouponModel geCoupon)
	{
		if (order.getDeliveryCost() != null)
		{
			if (orderEntry.getIsSameDayShipChecked() != null && orderEntry.getIsSameDayShipChecked())
			{
				final BHGEZOrderCreateRequestItem priceTable = new BHGEZOrderCreateRequestItem();
				priceTable.setConditionType(BhgeCoreConstants.SDS_TYPE);
				priceTable.setConditionValue(Double.toString(orderEntry.getSameDayShipmentCost()));
				priceTable.setConditionCurrency(order.getCurrency().getIsocode());
				priceTable.setPositionNumber(itemNum);
				orderCreateRequest.getPriceTable().getItems().add(itemsTable);
			}
		}
	}

	/**
	 * Setting discount values on order request
	 *
	 * @param order
	 * @param orderCreateRequest
	 * @param orderEntry
	 * @param itemNum
	 * @param geCoupon
	 */
	private void setDiscountValuesOnPriceTable(final OrderModel order, final BHGEZOrderCreateRequest orderCreateRequest,
			final AbstractOrderEntryModel orderEntry, final String itemNum, final BHGECouponModel geCoupon)
	{
		final List<DiscountValue> discountValues = orderEntry.getDiscountValues();
		if (discountValues != null && !discountValues.isEmpty() && geCoupon != null)
		{
			final DiscountValue discountValue = discountValues.iterator().next();
			final BHGEZOrderCreateRequestItem discountPriceTable = new BHGEZOrderCreateRequestItem();
			discountPriceTable.setPositionNumber(itemNum);
			discountPriceTable.setConditionType(BhgeCoreConstants.VOUCHER_TYPE);

			if (geCoupon.getApplyOnlistPrice())
			{

				final double listpricediscount = discountValue.getAppliedValue();
				discountPriceTable.setConditionValue(Double.toString(listpricediscount));
			}
			else
			{
				discountPriceTable.setConditionValue(Double.toString(discountValue.getAppliedValue()));
			}
			discountPriceTable.setConditionCurrency(order.getCurrency().getIsocode());
			orderCreateRequest.getPriceTable().getItems().add(discountPriceTable);
		}
	}

	/**
	 * Setting item details on order request
	 *
	 * @param orderEntry
	 * @param itemsTable
	 * @param geEdgeProductModel
	 * @param itemNum
	 * @param orderPaymentType
	 */
	private void setLineDetailsOnItemsTable(final AbstractOrderEntryModel orderEntry, final BHGEZOrderCreateRequestItem itemsTable,
											final GEEdgeProductModel geEdgeProductModel, final String itemNum, final String orderPaymentType)
	{
		//Item line number
		itemsTable.setItemNumber(itemNum);
		//Material : product code
		itemsTable.setMaterial(geEdgeProductModel.getCode());
		//Quantity
		itemsTable.setTargetQuantity(Long.toString(orderEntry.getQuantity()));
		//Line item notes
		itemsTable.setNote(orderEntry.getNote());
		LOG.info(" Product code of the Cartitem for Order is " + geEdgeProductModel.getCode() + " and its Quantity is "
				+ orderEntry.getQuantity());

		/** R2.0 Enhancement **/
		if (orderEntry.getRequestedDeliveryDate() != null)
		{
			itemsTable.setRequestedDeliveryDate(formatRequestedDelvDate(orderEntry.getRequestedDeliveryDate()));
		}

		// Plant details
		String plant = "";
		if (!StringUtils.isEmpty(orderEntry.getPlant()) && orderEntry.getPlant().contains(BhgeCoreConstants.PLANT_SEPERATOR))
		{
			final String[] plants = orderEntry.getPlant().split(BhgeCoreConstants.PLANT_SEPERATOR);
			if (null != plants && plants.length > 0)
			{
				plant = plants[0];
			}
		}
		else
		{
			plant = orderEntry.getPlant();
		}
		itemsTable.setPlant(plant);

		final StringBuffer availabilityDetails = new StringBuffer();
		final List<String> availabilityList = orderEntry.getEstShippingDates();
		//Available line text details
		if (availabilityList != null)
		{
			final int size = availabilityList.size();
			int i = 1;
			for (final String str : availabilityList)
			{
				if (i == 1)
				{
					availabilityDetails.append("Estimated Ship Date: ");
				}

				if (str.equalsIgnoreCase("No estimate available"))
				{
					availabilityDetails.append("No estimate available ");
					availabilityDetails.append(" (Quantity ");
					availabilityDetails.append(orderEntry.getQuantity());
					availabilityDetails.append(")");
				}
				else
				{
					final String[] availList = str.split(" ");
					if (Config.getString("DEFAULT_LONGEST_EST_SHIP_DATE", "01-Jan-2100").equals(availList[1]))
					{
						availabilityDetails.append("No estimate available ");
					}
					else
					{
						availabilityDetails.append(availList[1]);
					}
					availabilityDetails.append(" (Quantity ");
					availabilityDetails.append(availList[0]);
					availabilityDetails.append(")");
				}

				if (i < size)
				{
					availabilityDetails.append(',');
				}
				i++;
			}
		}
		LOG.info("availabilityDetails.toString() " + availabilityDetails.toString());
		//Setting Payment term to CC01 for card payments
		if(CheckoutPaymentType.CARD.getCode().equalsIgnoreCase(orderPaymentType)){
			itemsTable.setPaymentTerms("CC01");
		}
		itemsTable.setAvailableLineText(availabilityDetails.toString());
	}

	/**
	 * Setting VC details on order request
	 *
	 * @param orderCreateRequest
	 * @param orderEntry
	 * @param itemNum
	 */
	private void setVCValuesOnVCTable(final BHGEZOrderCreateRequest orderCreateRequest, final AbstractOrderEntryModel orderEntry,
			final String itemNum, final GEEdgeProductModel geEdgeProductModel)
	{
		if (!StringUtils.isEmpty(orderEntry.getExternalConfiguration()))
		{
			Document doc;
			try
			{
				doc = DocumentBuilderFactory.newInstance().newDocumentBuilder()
						.parse(new InputSource(new ByteArrayInputStream(orderEntry.getExternalConfiguration().getBytes("utf-8"))));
				doc.getDocumentElement().normalize();

				final NodeList nodeList = doc.getDocumentElement().getChildNodes();
				for (int i = 0; i < nodeList.getLength(); i++)
				{
					if ("CONFIGURATION".equalsIgnoreCase(nodeList.item(i).getNodeName()))
					{
						final NodeList nodeList1 = nodeList.item(i).getChildNodes();
						for (int j = 0; j < nodeList1.getLength(); j++)
						{
							final NodeList nodeList2 = nodeList1.item(j).getChildNodes();
							for (int k = 0; k < nodeList2.getLength(); k++)
							{
								final NodeList nodeList3 = nodeList2.item(k).getChildNodes();
								for (int l = 0; l < nodeList3.getLength(); l++)
								{
									if (nodeList3.item(l).getNodeName().equals("CSTIC"))
									{
										final BHGEZOrderCreateRequestItem vcTable = new BHGEZOrderCreateRequestItem();
										vcTable.setItemNumber(itemNum);
										vcTable.setMaterial(geEdgeProductModel.getCode());

										final String charact = nodeList3.item(l).getAttributes().getNamedItem("CHARC").getTextContent();
										final String valueChar = nodeList3.item(l).getAttributes().getNamedItem("VALUE").getTextContent();
										vcTable.setCharacter(charact.trim());
										vcTable.setCharacterValue(valueChar.trim());
										orderCreateRequest.getVcTable().getItems().add(vcTable);
									}

								}

							}
						}
						break;
					}
				}
			}
			catch (SAXException | ParserConfigurationException e)
			{
				getStackTrace(e);
				LOG.error("Exception occured" + e);
			}
			catch (final Exception e)
			{
				getStackTrace(e);
				LOG.error("Exception occured" + e);
			}
		}
	}

	/**
	 * Setting ship to details on order request
	 *
	 * @param order
	 * @param shipToPartnerTable
	 */
	private void setShiptoDetailsOnPartnerTable(final OrderModel order, final BHGEZOrderCreateRequestItem shipToPartnerTable)
	{
		if (order.getDeliveryAddress() != null)
		{
			LOG.debug("Setting DeliveryAddress value " + order.getDeliveryAddress());
			LOG.info(" Delivery Address of the Order  is : "
					+ (!StringUtils.isEmpty(order.getDeliveryAddress().getCompany()) ? order.getDeliveryAddress().getCompany() + "-"
							: "")
					+ " "
					+ (!StringUtils.isEmpty(order.getDeliveryAddress().getLine1()) ? order.getDeliveryAddress().getLine1() + "-" : "")
					+ " "
					+ (!StringUtils.isEmpty(order.getDeliveryAddress().getLine2()) ? order.getDeliveryAddress().getLine2() + "-" : "")
					+ " "
					+ (!StringUtils.isEmpty(order.getDeliveryAddress().getTown()) ? order.getDeliveryAddress().getTown() + "-" : "")
					+ " "
					+ (order.getDeliveryAddress().getRegion() != null
							? (!StringUtils.isEmpty(order.getDeliveryAddress().getRegion().getName())
									? order.getDeliveryAddress().getRegion().getName() + "-"
									: "")
							: "")
					+ " "
					+ (order.getDeliveryAddress().getCountry() != null
							? (!StringUtils.isEmpty(order.getDeliveryAddress().getCountry().getName())
									? order.getDeliveryAddress().getCountry().getName() + "-"
									: "")
							: "")
					+ " "
					+ (!StringUtils.isEmpty(order.getDeliveryAddress().getPostalcode()) ? order.getDeliveryAddress().getPostalcode()
							: ""));
			if (order.getDeliveryAddress().getSapCustomerID() != null)
			{
				shipToPartnerTable
						.setPartnerNumber(BHGESAPJCoUtils.addLeadingZeros(order.getDeliveryAddress().getSapCustomerID(), 10));

				shipToPartnerTable.setPartnerFunction(Config.getString("SHIP_TO_PARTNER_FUNCTION", "SH"));

				if (order.getDeliveryAddress().getCountry() != null)
				{
					shipToPartnerTable.setCountry(order.getDeliveryAddress().getCountry().getIsocode());
				}
			}
			else
			{
				shipToPartnerTable.setPartnerNumber(Config.getString("PARTNER_NUMBER_NEW", "NEW"));
				shipToPartnerTable.setPartnerFunction(Config.getString("SHIP_TO_PARTNER_FUNCTION", "SH"));
				shipToPartnerTable.setLine1(order.getDeliveryAddress().getLine1());
				shipToPartnerTable.setLine2(order.getDeliveryAddress().getLine2());
				shipToPartnerTable.setCity(order.getDeliveryAddress().getTown());
				if (order.getDeliveryAddress().getRegion() != null)
				{
					shipToPartnerTable.setState(order.getDeliveryAddress().getRegion().getIsocodeShort());
				}
				shipToPartnerTable.setZip(order.getDeliveryAddress().getPostalcode());
				// SAVE FOR FUTURE USE
				shipToPartnerTable.setSaveForFuture(
						Character.toString(null != order.getDeliveryAddress() ? BHGESAPJCoUtils.getBooleanValue(order.getDeliveryAddress().getSaveForFuture()) : BHGESAPJCoUtils.getBooleanValue(null)));

				/** R1.1 Enhancement **/
				shipToPartnerTable.setCompany(order.getDeliveryAddress().getCompany());
				if (order.getDeliveryAddress().getCountry() != null)
				{
					shipToPartnerTable.setCountry(order.getDeliveryAddress().getCountry().getIsocode());
				}

			}

			/** R1.1 Enhancement **/
			shipToPartnerTable.setDeliveryPoint(order.getDeliveryPoint());
		}
	}

	/**
	 * Setting sold to details on order request
	 *
	 * @param order
	 * @param soldToPartnerTable
	 */
	private void setSoldToDetailsOnPartnerTable(final OrderModel order, final BHGEZOrderCreateRequestItem soldToPartnerTable)
	{
		LOG.info("inside setsoldtodetailsonpartnertable");
		if (order.getSoldToForCart() != null)
		{
			LOG.debug("Setting SoldtoForCart value " + order.getSoldToForCart());

			final String uidOfChild = order.getSoldToForCart().getUid();
			LOG.info(" Order code of the Order is  " + order.getCode());
			LOG.info(" Soldtounit of the Order is " + order.getSoldToForCart().getUid());
			
			if (uidOfChild != null && uidOfChild.contains("_"))
			{
				soldToPartnerTable
				.setPartnerNumber(BHGESAPJCoUtils.addLeadingZeros(uidOfChild.substring(0, uidOfChild.indexOf("_")), 10));
			}
			else
			{
				soldToPartnerTable.setPartnerNumber(BHGESAPJCoUtils.addLeadingZeros(order.getSoldToForCart().getUid(), 10));
			}
			final AddressModel soldToAddress = getSoldToAddress(order);
			if (null != soldToAddress && null != soldToAddress.getCountry())
			{
				soldToPartnerTable.setCountry(soldToAddress.getCountry().getIsocode());
			}
			soldToPartnerTable.setPartnerFunction(Config.getString("SOLD_TO_PARTNER_FUNCTION", "AG"));
		}
	}
	
	/**
	 * Setting Bill to details on order request
	 *
	 * @param order
	 * @param billToPartnerTable
	 */
	private void setBillToDetailsOnPartnerTable(final OrderModel order, final BHGEZOrderCreateRequestItem billToPartnerTable)
	{
		LOG.info("inside setBilltodetailsonpartnertable");
		if (order.getSoldToForCart() != null)
		{
			LOG.debug("Setting SoldtoForCart value " + order.getSoldToForCart());

			LOG.info(" Order code of the Order is  " + order.getCode());
			LOG.info(" Soldtounit of the Order is " + order.getSoldToForCart().getUid());
			final AddressModel billToAddress = getBillToAddress(order);
						
			if (null != billToAddress && billToAddress.getSapCustomerID() != null)
			{
				billToPartnerTable
				.setPartnerNumber(billToAddress.getSapCustomerID());
			}
						
			if (null != billToAddress && null != billToAddress.getCountry())
			{
				billToPartnerTable.setCountry(billToAddress.getCountry().getIsocode());
			}
			billToPartnerTable.setPartnerFunction(Config.getString("BILL_TO_PARTNER_FUNCTION", "BP"));
		}
	}
	
	private void setPayerDetailsOnPartnerTable(final OrderModel order, final BHGEZOrderCreateRequestItem payerPartnerTable)
	{
		LOG.info("inside setPayerDetailsOnPartnerTable");
		if(order.getPayerAddress() != null)
		{
			if (order.getPayerAddress().getSapCustomerID() != null) {
				payerPartnerTable.setPartnerNumber(
						BHGESAPJCoUtils.addLeadingZeros(order.getPayerAddress().getSapCustomerID(), 10));

				payerPartnerTable.setPartnerFunction(Config.getString("PAYER_PARTNER_FUNCTION", "RG"));

				if (order.getPayerAddress().getCountry() != null) {
					payerPartnerTable.setCountry(order.getPayerAddress().getCountry().getIsocode());
				}
			}
			
		}
	}
	
	
	public AddressModel getBillToAddress(final OrderModel order)
	{
		AddressModel billToAddress = null;
		final String soldTo=BHGESAPJCoUtils.addLeadingZeros(order.getSoldToForCart().getUid(), 10);
		LOG.info("SoldTo address "+soldTo );
		if (order.getUser() instanceof GEEdgeCustomerModel && order.getSoldToForCart() != null)
			{
				final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) order.getSoldToForCart().getAddresses();
				final List<AddressModel> listOfBillToAddress=new ArrayList<>();
				for (final AddressModel address : listOfSoldToAddress)
				{
					if (address.getBillingAddress())
					{
						listOfBillToAddress.add(address);
						LOG.info("Billing address "+listOfBillToAddress.size());
						
					}
				}
				if (listOfBillToAddress.size()>1){
					for (final AddressModel addr : listOfBillToAddress){
						if (addr.getSapCustomerID().equals(soldTo))
						{
							LOG.info("SAP customer Id "+addr.getSapCustomerID());
							billToAddress=addr;
							break;
						}
						else
						{
							billToAddress=listOfBillToAddress.get(0);
						}
					}
				}
					
			}
		
		return billToAddress;
	}

	/**
	 * Setting header details on order request
	 *
	 * @param order
	 * @param orderHeaderTable
	 */
	private void populateOrderHeaderDetails(final OrderModel order, final BHGEZOrderCreateRequestHeader orderHeaderTable)
	{
		final SAPConfigurationModel sapConfigurationModel = getSapConfigurationForCurrentStore(order);
		// Document number
		orderHeaderTable.setDocumentNumber(BHGESAPJCoUtils.addLeadingZeros(order.getCode(), 10));
		if (null != sapConfigurationModel)
		{
			// Document type
			if (order.getCartType() != null && order.getCartType().equals(GEEdgeCartType.NONFILM))
			{
				orderHeaderTable.setDocumentType(GEOrderType.ZOR.getCode());
			}
			else
			{
				orderHeaderTable.setDocumentType(GEOrderType.ZFLM.getCode());
			}
			// Sales organization
			if (order.getUser() instanceof CustomerModel)
			{
				if (((CustomerModel) order.getUser()).getType() != null
						&& CustomerType.GUEST.getCode().equals(((CustomerModel) order.getUser()).getType().getCode()))
				{
					final String[] b2bUnitString = order.getSoldToForCart().getUid().split("_");
					final String salesOrg = b2bUnitString != null && b2bUnitString.length > 1 ? b2bUnitString[1] : "1800";
					orderHeaderTable.setSalesOrg(salesOrg);
				}
				//Taking it from properties for guest user
				else if (order.getUser() instanceof GEEdgeCustomerModel)
				{
					orderHeaderTable.setSalesOrg(sapConfigurationModel.getSapcommon_salesOrganization());
				}
			}
			//Distribution channel
			orderHeaderTable.setDistributionChannel(sapConfigurationModel.getSapcommon_distributionChannel());
			//Division
			orderHeaderTable.setDivision(sapConfigurationModel.getSapcommon_division());
		}
		// Courier
		String courier = BhgeCoreConstants.EMPTY_STRING;
		if (GEEdgeCartType.HYBRID.equals(order.getCartType()) || GEEdgeCartType.NONFILM.equals(order.getCartType()))
		{
			if (order.getShippingCarrierMethod() != null)
			{
				courier = order.getShippingCarrierMethod().getCode();
			}
		}
		orderHeaderTable.setCourier(courier);

		//Delivery Account Number
		orderHeaderTable.setDeliveryAccountNumber(StringEscapeUtils.unescapeHtml4(order.getDeliveryAccountNum()));
		//Purchase Order Number
		orderHeaderTable.setPurchaseOrderNumber(StringEscapeUtils.unescapeHtml4(order.getPurchaseOrderNumber()));
		//Shipping Remarks
		orderHeaderTable.setShippingRemarks(StringEscapeUtils.unescapeHtml4(order.getShippingRemarks()));
		// Shipping Notification Email
		orderHeaderTable.setShippingEmail(order.getShipNotificationEmail());
		//Invoice Email
		orderHeaderTable.setInvoiceEmail(order.getInvoiceEmail());
		// Order confirmation Email
		orderHeaderTable.setSoaEmail(order.getOrderConfirmationEMail());
		//Government flag
		orderHeaderTable.setGovernmentFlag(Character.toString(BHGESAPJCoUtils.getBooleanValue(order.getIsGovernment())));
		//Nuclear flag
		if (order.getDeliveryAddress() != null)
		{
			orderHeaderTable
					.setNuclearFlag(Character.toString(BHGESAPJCoUtils.getBooleanValue(order.getDeliveryAddress().getIsNuclear())));
		}
		//Shipping Charge Method
		if (order.getShippingChargeMethod() != null)
		{
			orderHeaderTable.setShippingCharge(order.getShippingChargeMethod().getCode());
		}
		//Export Address
		orderHeaderTable.setExportAddress(order.getExportAddressText());
		// Complete / Partial flag
		orderHeaderTable
				.setIsShipCompleteOrder(Character.toString(BHGESAPJCoUtils.getBooleanValue(order.getIsShipCompleteOrder())));
		// Ship to contact number
		orderHeaderTable.setShiptoPhone(order.getShipToContactPhone());
		//Ship to contact name
		orderHeaderTable.setShiptoContact(StringEscapeUtils.unescapeHtml4(order.getShipToContactName()));

		/** R1.1 Enhancement **/
		String specialDiscountCode = "";
		if (order.getUser() instanceof CustomerModel)
		{
			if (((CustomerModel) order.getUser()).getType() != null
					&& CustomerType.GUEST.getCode().equals(((CustomerModel) order.getUser()).getType().getCode()))
			{
				//Purchase Order Number
				// Add CC mode message if payment terms is CARD
				if (order.getPaymentType() != null && order.getPaymentType().getCode().equals(CheckoutPaymentType.CARD))
				{
					orderHeaderTable.setPurchaseOrderNumber(Config.getString("guest.cc.po.text", "Credit Card Order"));
					specialDiscountCode = Config.getString("guest.cc.csr.text",
							"The user has selected credit card as the payment option for this order");
				}
				final String soldToAddress = "Sold to Address : " + "\n"
						+ BHGESAPJCoUtils.processAddressTextInLineByLineFormat(order.getPaymentAddress());
				specialDiscountCode = "\n" + specialDiscountCode + "\n" + soldToAddress + "\n"
						+ StringEscapeUtils.unescapeHtml4(order.getSpecialDiscountCode()) + "\n";


			}
			else if (order.getUser() instanceof GEEdgeCustomerModel)
			{
				specialDiscountCode = StringEscapeUtils.unescapeHtml4(order.getSpecialDiscountCode());
			}
		}
		//Discount code
		orderHeaderTable.setDiscountCode(specialDiscountCode);
		//Nuclear Opportunity flag
		orderHeaderTable.setNuclearOpptyFlag(Character.toString(BHGESAPJCoUtils.getBooleanValue(order.getIsNuclearOppurtunity())));


		/** R2.0 Enhancement **/
		//Requested Delivery Date
		if (order.getCartType() != null)
		{
			if (order.getCartType().getCode().equalsIgnoreCase("FILM"))
			{
				if (order.getReqHeaderDeliveryDateFilm() != null)
				{
					orderHeaderTable.setRequestDelDate(formatRequestedDelvDate(order.getReqHeaderDeliveryDateFilm()));
					orderHeaderTable.setNoRdd("");
				}
				else
				{
					orderHeaderTable.setRequestDelDate(formatRequestedDelvDate(getNextDayDate()));
					orderHeaderTable.setNoRdd("X");
				}
			}
			if (order.getCartType().getCode().equalsIgnoreCase("NONFILM"))
			{
				if (order.getReqHeaderDeliveryDate() != null)
				{
					orderHeaderTable.setRequestDelDate(formatRequestedDelvDate(order.getReqHeaderDeliveryDate()));
					orderHeaderTable.setNoRdd("");
				}
				else
				{
					orderHeaderTable.setRequestDelDate(formatRequestedDelvDate(getNextDayDate()));
					orderHeaderTable.setNoRdd("X");
				}
			}
		}

		//Currency
		orderHeaderTable.setCurrency(order.getCurrency().getIsocode());

		//Buy order New Attributes
		orderHeaderTable.setGovermentBuyer(BHGESAPJCoUtils.checkBooleanValues(order.getIsBuyer()));
		orderHeaderTable.setAlternateNumber(BHGESAPJCoUtils.checkNullForString(order.getShippingConatct2Number()));
		orderHeaderTable.setAlternateName(BHGESAPJCoUtils.checkNullForString(order.getShippingConatct2Name()));
		orderHeaderTable.setAlternateEmail(BHGESAPJCoUtils.checkNullForString(order.getAlternateContactEmail()));
		String sapSaveMessge = "";
		//End user details
		if (order.getRMAEndUserAddress() != null)
		{
			if (order.getRMAEndUserAddress().getSapCustomerID() != null)
			{
				orderHeaderTable.setEndUser(BHGESAPJCoUtils
						.checkNullForString(BHGESAPJCoUtils.addLeadingZeros(order.getRMAEndUserAddress().getSapCustomerID(), 10)));
			}
			else
			{
                    if (null != order.getRMAEndUserAddress() && order.getRMAEndUserAddress().getSaveForFuture() != null)
				{

					if (order.getRMAEndUserAddress().getSaveForFuture())
					{
						sapSaveMessge = "Customer wants to re-use this End User. Add as an End User partner in SAP";
					}
					else
					{
						sapSaveMessge = "User does not need to re-use this End User record";
					}
				}
				else
				{
					sapSaveMessge = "User does not need to re-use this End User record";
				}
				String endUserAddress = "End User Details : " + BHGESAPJCoUtils.processAddressText(order.getRMAEndUserAddress())
						+ " SaveFlagMessage -" + sapSaveMessge;
				if (!StringUtils.isEmpty(order.getEndUserCategory()))
				{
					endUserAddress = "End User Category - " + order.getEndUserCategory() + " & End User Address - " + endUserAddress;
				}
				orderHeaderTable.setEndUserNewDetails(org.apache.commons.lang3.StringUtils.left(endUserAddress,246));
			}
		}
		// CSR Help
		//CSR block adding for film order
		if ((order.getSpecialDiscountCode() != null && !"".equals(order.getSpecialDiscountCode()))||(order.getCartType() != null && !order.getCartType().getCode().equalsIgnoreCase("NONFILM")))
		{
			LOG.info("Adding CSR Help flag as true for film order  at BHGESAPOrderSubmissionServiceImpl");
			orderHeaderTable.setCsrHelp(BHGESAPJCoUtils.checkBooleanValues(Boolean.TRUE));
		}
		else
		{
			orderHeaderTable.setCsrHelp(BHGESAPJCoUtils.checkBooleanValues(Boolean.FALSE));
		}
		//End user purchase order number
		orderHeaderTable.setEndUserPO(BHGESAPJCoUtils.checkNullForString(order.getEndCustomerRefNum()));

		//TODO: Panacal new changes

		orderHeaderTable.setInvoiceContact(order.getInvoiceContact());
		orderHeaderTable.setInvoicePhone(order.getInvoicePhone());
		orderHeaderTable.setSoaContact(order.getSoaContact());
		orderHeaderTable.setSoaPhone(order.getSoaPhone());
	}

	private void handleSAPException(final OrderModel order, final Exception exception)
	{
		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
		final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
		// Get the date today using Calendar object.
		final Date today = Calendar.getInstance().getTime();
		final String reportDate = df.format(today);
		String email = "";
		if (order.getUser() instanceof CustomerModel && ((CustomerModel) order.getUser()).getType() != null
				&& CustomerType.GUEST.getCode().equals(((CustomerModel) order.getUser()).getType().getCode()))
		{
			final UserModel customer = userDao.findUserByUID(order.getUser().getUid());
			email = ((CustomerModel) customer).getContactEmail();
		}
		else
		{
			email = userProfileService.findCurrentUserProfile(order.getUser().getUid()).getEmail();
		}
		model.setCurrentUserEmail(email);
		final String SoldToId = order.getSoldToForCart().getUid();
		model.setErrorCode("BackendException in Order Batch Submission");
		final String exceptionMsg = exception.getMessage();
		model.setOrderID(order.getCode());
		model.setErrorDescription(exceptionMsg + "with" + order.getCode());
		model.setCurrentSoldToId(SoldToId);
		model.setErrorTime(reportDate);
		model.setErrorType("Order Submission Error");
		model.setRequestParameterToSAP("Order with OrderID" + order.getCode());
		model.setResponseParameterFromSAP("BackendException Object" + exception.toString());
		model.setCartType(order.getCartType());
		model.setCommerceType(order.getCommerceType());

		//model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
		//model.setStatus(Boolean.FALSE);
		model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_HIGH);
		model.setStatus(Boolean.TRUE);
		modelService.save(model);
		//Email Trigger
		final String templateCodeCriticalError = "CriticalErrorMailTemplate";
		final String subject = Config.getString("ORDER_SUBMIT_SUBJECT", "EdgeNet Critical Error Alert");
		final String to = Config.getString("ORDER_SUBMITION_TO_ADDRESS", "");
		final String orderId = order.getCode();
		final String userSSO = order.getUser().getUid();
		sendEmail(templateCodeCriticalError, subject, to, model, orderId,userSSO);
		//Email Trigger End
		order.setStatus(OrderStatus.ERROR);
		modelService.save(order);
	}

	public void getErrorFromMessageTable(final BHGEZOrderCreateRequestItem messageTable, final OrderModel orderModel)
	{
		boolean hasError = false;
		if (CollectionUtils.isNotEmpty(messageTable.getItems()))
		{
			final String[] arrayOfCriticalErrors = StringUtils
					.delimitedListToStringArray(Config.getParameter("CRITICAL_ERROR_ORDER_SUBMISSION"), ",");
			final List<String> messageTypeList = new ArrayList<String>();
			for (final BHGEZOrderCreateRequestItem messageRecord : messageTable.getItems())
			{
				final String messageType = messageRecord.getType();
				final String message = messageRecord.getMessage();
				messageTypeList.add(messageType);

				if (messageType != null && !messageType.equalsIgnoreCase("S") && !messageType.equalsIgnoreCase("W"))
				{

					hasError = true;
					final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
					final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
					// Get the date today using Calendar object.
					final Date today = Calendar.getInstance().getTime();
					final String reportDate = df.format(today);
					String email = "";
					if (orderModel.getUser() instanceof CustomerModel && ((CustomerModel) orderModel.getUser()).getType() != null
							&& CustomerType.GUEST.getCode().equals(((CustomerModel) orderModel.getUser()).getType().getCode()))
					{
						final UserModel customer = userDao.findUserByUID(orderModel.getUser().getUid());
						email = ((CustomerModel) customer).getContactEmail();
					}
					else
					{
						email = userProfileService.findCurrentUserProfile(orderModel.getUser().getUid()).getEmail();
					}
					model.setCurrentUserEmail(email);
					final String SoldToId = orderModel.getSoldToForCart().getUid();
					model.setOrderID(orderModel.getCode());
					model.setErrorCode(messageType);
					model.setErrorDescription(message + " with " + orderModel.getCode());
					model.setCurrentSoldToId(SoldToId);
					model.setErrorTime(reportDate);
					model.setErrorType("Order Submission Error");
					model.setRequestParameterToSAP("Order with OrderID" + orderModel.getCode());
					model.setStatus(Boolean.FALSE);
					model.setResponseParameterFromSAP("Message as" + messageRecord.getMessage());
					model.setCartType(orderModel.getCartType());
					model.setCommerceType(orderModel.getCommerceType());

					if (ArrayUtils.contains(arrayOfCriticalErrors, messageType))
					{
						model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_HIGH);
						final String templateCodeCriticalError = "CriticalErrorMailTemplate";
						final String subject = Config.getString("ORDER_SUBMIT_SUBJECT", "EdgeNet Critical Error Alert");
						final String to = Config.getString("ORDER_SUBMITION_TO_ADDRESS", "");
						final String orderId = orderModel.getCode();
						final String userSSO = orderModel.getUser().getUid();
						sendEmail(templateCodeCriticalError, subject, to, model, orderId,userSSO);
						model.setStatus(Boolean.TRUE);
					}
					else
					{
						model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
						model.setStatus(Boolean.FALSE);
					}
					modelService.save(model);

				}
			}
			//DE3 - Change order status to "Errored" if one item in RFC message table is failed
			if (hasError)
			{
				orderModel.setStatus(OrderStatus.ERROR);
			}
			else
			{
				orderModel.setStatus(OrderStatus.SUBMITTED);
			}
			modelService.save(orderModel);
		}
	}

	/*
	 * This method will be moved to Util class after the bean issue related to order submission is fixed.
	 */
	public void sendEmail(final String templateCode, final String subject, final String to, final BHGERfcCallErrorModel model,
			final String orderId,final String userSSO)
	{

		final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(templateCode);

		bhgeEmailService.orderSubmissionFailureEmail(templateModel, subject, to, model, orderId,userSSO);
	}

	public String getStringQuantity(String actualString)
	{
		if (actualString != null)
		{
			if (actualString.contains("."))
			{
				actualString = actualString.substring(0, actualString.indexOf("."));
			}
			return actualString.replaceAll("[^0-9.]+", "");
		}
		return actualString;
	}

	protected SAPConfigurationModel getSapConfigurationForCurrentStore(final OrderModel order)
	{
		if (null != order)
		{
			final BaseStoreModel baseStore = order.getStore();
			if (null != baseStore)
			{
				return baseStore.getSAPConfiguration();
			}
		}
		return null;
	}

	public String formatRequestedDelvDate(final Date reqDelvdate)
	{
		String formattedDelvDate = "";
		if (!StringUtils.isEmpty(reqDelvdate))
		{
			final SimpleDateFormat formatter = new SimpleDateFormat("YYYY-MM-dd");
			formattedDelvDate = formatter.format(reqDelvdate);
		}
		return formattedDelvDate;
	}

	/* Fetch Coupon coupon applied to cart */
	private BHGECouponModel getAppliedCouponToCart(final String couponId, final OrderModel orderModel)
	{
		if (couponId != null)
		{
			final String query = "select {PK} from {BHGECoupon} WHERE {couponid}= '" + couponId + "'";
			final List<BHGECouponModel> couponList = flexibleSearchService.<BHGECouponModel> search(query).getResult();
			if (couponList != null && !couponList.isEmpty())
			{
				final BHGECouponModel coupon = couponList.get(0);
				return coupon;
			}
			else
			{
				if (orderModel != null)
				{
					//implemented to inform the customer have not used GE coupon.
					LOG.info("inside single coupon mail part");
					final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
					final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
					// Get the date today using Calendar object.
					final Date today = Calendar.getInstance().getTime();
					final String reportDate = df.format(today);
					String email = "";
					if (orderModel.getUser() instanceof CustomerModel && ((CustomerModel) orderModel.getUser()).getType() != null
							&& CustomerType.GUEST.getCode().equals(((CustomerModel) orderModel.getUser()).getType().getCode()))
					{
						final UserModel customer = userDao.findUserByUID(orderModel.getUser().getUid());
						email = ((CustomerModel) customer).getContactEmail();
					}
					else
					{
						email = userProfileService.findCurrentUserProfile(orderModel.getUser().getUid()).getEmail();
					}
					model.setCurrentUserEmail(email);
					final String SoldToId = orderModel.getSoldToForCart().getUid();
					model.setOrderID(orderModel.getCode());
					model.setErrorCode("User used SingleType Coupon");
					model.setErrorDescription("Using single type coupon with " + orderModel.getCode());
					model.setCurrentSoldToId(SoldToId);
					model.setErrorTime(reportDate);
					model.setErrorType("Order Submission Error");
					model.setRequestParameterToSAP("Order with OrderID" + orderModel.getCode());
					model.setStatus(Boolean.FALSE);
					model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_HIGH);
					model.setCartType(orderModel.getCartType());
					model.setCommerceType(orderModel.getCommerceType());
					final String templateCodeCriticalError = "CriticalErrorMailTemplate";
					final String subject = "Non GE coupon is used for order#" + orderModel.getCode();
					LOG.info("inside single coupon mail part: subject " + subject);
					final String to = Config.getString("ORDER_SUBMITION_TO_ADDRESS", "");
					LOG.info("inside single coupon mail part: to " + to);
					final String orderId = orderModel.getCode();
					final String userSSO = orderModel.getUser().getUid();
					LOG.info("inside single coupon mail part: orderId " + orderId);
					sendEmail(templateCodeCriticalError, subject, to, model, orderId,userSSO);
					LOG.info("inside single coupon mail part: email sent " + to);
					model.setStatus(Boolean.TRUE);
				}

				return null;
			}
		}
		return null;
	}

	public AddressModel getSoldToAddress(final OrderModel order)
	{
		AddressModel soldToAddress = null;
		if (order.getUser() instanceof CustomerModel)
		{
			if (((CustomerModel) order.getUser()).getType() != null
					&& CustomerType.GUEST.getCode().equals(((CustomerModel) order.getUser()).getType().getCode()))
			{
				soldToAddress = order.getPaymentAddress();
			}
			else if (order.getUser() instanceof GEEdgeCustomerModel && order.getSoldToForCart() != null)
			{
				final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) order.getSoldToForCart().getAddresses();
				for (final AddressModel address : listOfSoldToAddress)
				{
					if (address.getBillingAddress())
					{
						soldToAddress = address;
						break;
					}
				}
			}
		}
		return soldToAddress;
	}

	public static Date getNextDayDate()
	{
		final Calendar calendar = Calendar.getInstance();
		calendar.setTime(Calendar.getInstance().getTime());
		calendar.set(Calendar.HOUR_OF_DAY, 0);
		calendar.add(Calendar.DAY_OF_YEAR, 1);
		return calendar.getTime();
	}

	public static String getStackTrace(final Throwable e)
	{
		final Writer writer = new StringWriter();
		final PrintWriter printWriter = new PrintWriter(writer);
		//e.printStackTrace(printWriter);
		LOG.error("Error Message" + ExceptionUtils.getStackTrace(e));
		final String s = writer.toString();
		return s;
	}
	
	public void sendOrderStatusEmail(final OrderModel order) {
		final RendererTemplateModel templateModel = rendererService
				.getRendererTemplateForCode("OrderStatusErrorEmailMailTemplate");
		final String subject = ORDER_STATUS_ERROR_EMAIL_SUBJECT;
		final String to = Config.getString("ORDER_SUBMITION_TO_ADDRESS", "");
		bhgeEmailService.orderStatusNotificationEmail(templateModel, subject, to, order);
	}

}
