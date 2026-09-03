package com.bhge.sap.orderfulfilment.sapcpiorderexchange.service.impl;

import com.bhge.core.enums.GEEdgeCartType;
import com.bhge.core.enums.GEOrderType;
import com.bhge.core.model.BHGECouponModel;
import com.bhge.core.model.BHGECurrencyModel;
import com.bhge.sap.orderfulfilment.constants.BhgesaporderfulfillmentConstants;
import com.bhge.sap.orderfulfilment.sapcpiorderexchange.service.BHGEVCCPSConfigurationOrderEntryMapper;
import com.bhge.sap.orderfulfilment.util.BHGESAPOrderUtils;
import com.hybris.ge.edge.core.model.type.BHGECreditCardPaymnentinfoModel;
import de.hybris.platform.b2b.enums.CheckoutPaymentType;
import de.hybris.platform.commerceservices.enums.CustomerType;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.promotionengineservices.model.RuleBasedOrderEntryAdjustActionModel;
import de.hybris.platform.promotions.model.AbstractPromotionActionModel;
import de.hybris.platform.promotions.model.PromotionResultModel;
import de.hybris.platform.ruleengine.model.AbstractRuleEngineRuleModel;
import de.hybris.platform.ruleengine.model.DroolsRuleModel;
import de.hybris.platform.sap.orderexchange.constants.OrderCsvColumns;
import de.hybris.platform.sap.orderexchange.constants.PartnerCsvColumns;
import de.hybris.platform.sap.orderexchange.constants.PartnerRoles;
import de.hybris.platform.sap.orderexchange.constants.SaporderexchangeConstants;
import de.hybris.platform.sap.sapcpiadapter.data.SapCpiCreditCardPayment;
import de.hybris.platform.sap.sapcpiadapter.data.SapCpiOrder;
import de.hybris.platform.sap.sapcpiadapter.data.SapCpiOrderAddress;
import de.hybris.platform.sap.sapcpiadapter.data.SapCpiOrderItem;
import de.hybris.platform.sap.sapcpiadapter.data.SapCpiOrderPriceComponent;
import de.hybris.platform.sap.sapcpiadapter.data.SapCpiPartnerRole;
import de.hybris.platform.sap.sapcpiadapter.model.SAPCpiOutboundPriceComponentModel;
import de.hybris.platform.sap.sapcpiorderexchange.exceptions.SapCpiOmmOrderConversionServiceException;
import de.hybris.platform.sap.sapcpiorderexchange.service.impl.SapCpiOmmOrderConversionService;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.DiscountValue;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.*;

public class BHGEVCSapCpiOmmOrderConversionService extends SapCpiOmmOrderConversionService {
	
	private static final Logger LOG = LoggerFactory.getLogger(BHGEVCSapCpiOmmOrderConversionService.class);
		
	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;
	private static final String DATE_FORMAT = "yyyyMMdd";
	private static final String NEW_LINE = "\n";
	private static final String NO_ESTIMATE = "No estimate available";
	private static final String QUANTITY = " (Quantity ";
	private static final String DEFAULT_SHIP_DATE_TEXT = "DEFAULT_LONGEST_EST_SHIP_DATE";
	private static final String DEFAULT_SHIP_DATE = "01-Jan-2100";
	private static final char COMMA = ',';
	private static final String PART_NUM = "PartNum:";
	private static final String PART_DESC = "Desc:";
	private static final String SPACE = " ";

	
	
	@Override 
	public final SapCpiOrder convertOrderToSapCpiOrder(final OrderModel order) {
	  LOG.debug("Starting conversion of ordermodel to  sapCpiOrder inside BHGEVCSapCpiOmmOrderConversionService for order {}", order.getCode());
	  final SapCpiOrder sapCpiOrder = super.convertOrderToSapCpiOrder(order);
	  sapCpiOrder.setCourier(getCourier(order));
	  sapCpiOrder.setShippingEmail(order.getShipNotificationEmail());
	  sapCpiOrder.setInvoiceEmail(order.getInvoiceEmail());
	  sapCpiOrder.setSoaEmail(order.getOrderConfirmationEMail());
	  sapCpiOrder.setDeliveryAccountNumber(order.getDeliveryAccountNum());
	  setEndUser(sapCpiOrder, order);
	  
	  sapCpiOrder.setNoRdd(getNoRDD(order));
	  //sapCpiOrder.setNoRdd(BhgesaporderfulfillmentConstants.X);
	  
	  sapCpiOrder.setGovernmentFlag(Character.toString(BHGESAPOrderUtils.getBooleanValue(order.getIsGovernment())));
	  if (order.getDeliveryAddress() != null) {
		  sapCpiOrder.setNuclearFlag(Character.toString(BHGESAPOrderUtils.getBooleanValue(order.getDeliveryAddress().getIsNuclear())));
	  }
	  sapCpiOrder.setExportAddress(order.getExportAddressText());
	  sapCpiOrder.setShippingRemarks(order.getShippingRemarks());
	  sapCpiOrder.setNuclearOpptyFlag(Character.toString(BHGESAPOrderUtils.getBooleanValue(order.getIsNuclearOppurtunity())));
	  sapCpiOrder.setGovermentBuyer(Character.toString(BHGESAPOrderUtils.getBooleanValue(order.getIsBuyer())));
	  sapCpiOrder.setExportFlag(Character.toString(BHGESAPOrderUtils.getBooleanValue(order.getIsExport())));
	  sapCpiOrder.setAlternateNumber(BHGESAPOrderUtils.checkNullForString(order.getShippingConatct2Number()));
	  sapCpiOrder.setAlternateName(BHGESAPOrderUtils.checkNullForString(order.getShippingConatct2Name()));
	  sapCpiOrder.setAlternateEmail(BHGESAPOrderUtils.checkNullForString(order.getAlternateContactEmail()));
	  

	  if (StringUtils.isNotEmpty(order.getSpecialDiscountCode())) {
		  LOG.debug("order special discount code is {} for order {}", order.getSpecialDiscountCode(), order.getCode());
		  sapCpiOrder.setCsrHelp(BHGESAPOrderUtils.checkBooleanValues(Boolean.TRUE));
		}
		else { 
			LOG.debug("order special discount code is empty for order {}", order.getCode());
			sapCpiOrder.setCsrHelp(BHGESAPOrderUtils.checkBooleanValues(Boolean.FALSE));
		}
	  sapCpiOrder.setEndUserPO(BHGESAPOrderUtils.checkNullForString(order.getEndCustomerRefNum()));
	  sapCpiOrder.setInvoiceContact(order.getInvoiceContact());
	  sapCpiOrder.setInvoicePhone(order.getInvoicePhone());
	  sapCpiOrder.setSoaContact(order.getSoaContact());
	  sapCpiOrder.setSoaPhone(order.getSoaPhone());
	  if (StringUtils.isNotEmpty(getReqHeaderDeliveryDate(order))) {
		  sapCpiOrder.setReqHeaderDeliveryDate(getReqHeaderDeliveryDate(order));
	  }
	  
	  sapCpiOrder.setShiptoContact(StringEscapeUtils.unescapeHtml4(order.getShipToContactName()));
	  sapCpiOrder.setShiptoPhone(order.getShipToContactPhone());
	  //Set Discount Code
	  setDiscountCode(sapCpiOrder, order);

	  // : Ahrensburg Hybris Block changes Beign
	  setAhrensburgHybrisBlock(order, sapCpiOrder);


		//Shipping Charge Method
		if (order.getShippingChargeMethod() != null) {
			sapCpiOrder.setShippingCharge(order.getShippingChargeMethod().getCode());
		}
		sapCpiOrder.setIsShipCompleteOrder(Character.toString(BHGESAPOrderUtils.getBooleanValue(order.getIsShipCompleteOrder())));
		Boolean orderPreference = order.getOrderPreference();
			if (orderPreference)
			{
				sapCpiOrder.setTransactionType(GEOrderType.ZDEM.getCode());
			}
		else if (order.getCartType() != null ) {
			if (order.getCartType().equals(GEEdgeCartType.NONFILM)) {
				sapCpiOrder.setTransactionType(GEOrderType.ZOR.getCode());
			} else {
				sapCpiOrder.setTransactionType(GEOrderType.ZFLM.getCode());
			}
		}
	  boolean longConfigItem = false;
	  for (AbstractOrderEntryModel entry : order.getEntries()) {
		  LOG.info("BHGEVCSapCpiOmmOrderConversionService : Checking for long config entry or product configuration issue for order entry with entry number {} and the productconfig Issue is ", entry.getEntryNumber(), entry.getProductPricingIssue());
		  if ( ((null != entry.getLongConfigEntry()) && (Boolean.TRUE.equals(entry.getLongConfigEntry()))) || (entry.getProductPricingIssue())) {
			  longConfigItem = true;
			  break;
		  }
	  }
	  if ((null != order.getConfigurationBlock()) && (Boolean.TRUE.equals(order.getConfigurationBlock()))) {
		  LOG.debug("order configuration block is {} ", order.getConfigurationBlock());
		  sapCpiOrder.setConfigurationBlock(Character.toString(BHGESAPOrderUtils.getBooleanValue(order.getConfigurationBlock())));
	  }

	  if (longConfigItem) {
		  LOG.debug("order has long config item or product configuration issue, setting configuration block to true for order {} ", order.getCode());
		  sapCpiOrder.setConfigurationBlock("L");
	  }

	  if ( (null != order.getConfigurationBlock()) && (Boolean.TRUE.equals(order.getConfigurationBlock()) && longConfigItem)) {
		  sapCpiOrder.setConfigurationBlock("B");
	  }
		List<SapCpiOrderItem> sapCpiSortedOrderItems=sapCpiOrder.getSapCpiOrderItems().stream().sorted(Comparator.comparing(SapCpiOrderItem::getEntryNumber)).toList();

	  for( SapCpiOrderItem orderItem: sapCpiOrder.getSapCpiOrderItems())
	  {
		  LOG.info("BHGEVCSapCpiOmmOrderConversionService : Checking for long config entry for order item with entry number {} ", orderItem.getEntryNumber());
		  LOG.info("BHGEVCSapCpiOmmOrderConversionService : long config entry value for order item with entry number {} is {} ", orderItem.getEntryNumber(), orderItem.getDummyProductDetails1());
		  LOG.info("BHGEVCSapCpiOmmOrderConversionService : entryPoNUmber value for order {} is {} ", order.getCode(), orderItem.getEndCustomerPO());
	  }
	  sapCpiOrder.setSapCpiOrderItems(sapCpiSortedOrderItems);
	  LOG.info("BHGEVCSapCpiOmmOrderConversionService : Completed sorting of order items based on entry number for order {} ", order.getCode());
	  for(SapCpiOrderItem orderItem: sapCpiOrder.getSapCpiOrderItems())
		  	  {
		  LOG.info("BHGEVCSapCpiOmmOrderConversionService : After sorting, order item entry number is {} and EndCustomerPO is {} ", orderItem.getEntryNumber(), orderItem.getEndCustomerPO());
		  LOG.info("After Line Item in Sorting");
	  }


	  for(SapCpiOrderAddress address:sapCpiOrder.getSapCpiOrderAddresses())
	  {
		  LOG.info("BHGEVCSapCpiOmmOrderConversionService : Checking for address with document address id {} ", address.getDocumentAddressId());
		  LOG.info("BHGEVCSapCpiOmmOrderConversionService : company value for address with document address id {} is {} ", address.getDocumentAddressId(), address.getCompany());
		  LOG.info("BHGEVCSapCpiOmmOrderConversionService : check status value for address with document address id {} is {} ", address.getDocumentAddressId(), address.getCheckStatus());
	  }
		 List<SapCpiPartnerRole> partnerRoles = sapCpiOrder.getSapCpiPartnerRoles();
		Iterator<SapCpiPartnerRole> iterator = partnerRoles.iterator();
		try {
			while (iterator.hasNext()) {
				SapCpiPartnerRole partnerRole = iterator.next();
				if ("ZZ".equalsIgnoreCase(partnerRole.getPartnerRoleCode())) {
					LOG.info("BHGEVCSapCpiOmmOrderConversionService : Inside partner role code ZZ check for order {} and size of the partner roles for SapCpiPartnerRoles ", order.getCode(), sapCpiOrder.getSapCpiPartnerRoles().size());
					LOG.info("BHGEVCSapCpiOmmOrderConversionService : Checking for partner role with code ZZ for order {} ans size of partner roles ", order.getCode(), partnerRoles.size());
					if (StringUtils.isNotEmpty(partnerRole.getPartnerId())) {
						LOG.info("BHGEVCSapCpiOmmOrderConversionService : Partner role code is ZZ and partner id is {} ", partnerRole.getPartnerId());
					} else {
						String specialDiscountCode = StringUtils.EMPTY;
						if (sapCpiOrder.getDiscountCode() != null) {
							specialDiscountCode = sapCpiOrder.getDiscountCode();
						}
						specialDiscountCode = specialDiscountCode + NEW_LINE + "Please review the Remitt-to and update as required";
						sapCpiOrder.setDiscountCode(specialDiscountCode);
						LOG.info("BHGEVCSapCpiOmmOrderConversionService : Partner role code is ZZ and Remit value is not found in BHGECurrencyModel, setting discount code message as {} ", specialDiscountCode);
						iterator.remove();
						LOG.info("BHGEVCSapCpiOmmOrderConversionService : Partner role code is ZZ and Remit value is not found in BHGECurrencyModel, removing the partner role from the partner roles list as partner id is empty for order {} and size is {}", order.getCode(), partnerRoles.size());
					}
				}
			}
		}
		catch (Exception e) {
			LOG.error("BHGEVCSapCpiOmmOrderConversionService : Exception occurred while processing partner roles for order {} and size of partner roles {} ", order.getCode(), partnerRoles.size(), e);
		}
		LOG.info("BHGEVCSapCpiOmmOrderConversionService : Completed processing of partner roles for order {} and size of partner roles after removing ZZ partner role if remit value is not found in BHGECurrencyModel is {} ", order.getCode(), partnerRoles.size());
		sapCpiOrder.setSapCpiPartnerRoles(partnerRoles);
		LOG.info("BHGEVCSapCpiOmmOrderConversionService : Completed processing of partner roles for order {} and final size of partner roles is {} ", order.getCode(), sapCpiOrder.getSapCpiPartnerRoles().size());
	  LOG.debug("Conversion completed of ordermodel to sapCpiOrder inside BHGEVCSapCpiOmmOrderConversionService for order {}", order.getCode());
	  LOG.debug(String.format("After BHGEVCSapCpiOmmOrderConversionService, SCPI OMM order object: %n %s", ReflectionToStringBuilder.toString(sapCpiOrder, ToStringStyle.MULTI_LINE_STYLE)));
	  return sapCpiOrder;
	 }


	private void setAhrensburgHybrisBlock(OrderModel order, SapCpiOrder sapCpiOrder) {
		LOG.debug("US564046 : Ahrensburg Hybris Block changes Beign for order" + order.getCode());
		//Getting Sales Org
		if (order.getSoldToForCart() != null)
		{
			LOG.debug("US564046 : Getting SoldtoForCart value " + order.getSoldToForCart());

			if (Config.getString("bhge.ahrensburg.soldto", "6040") == null ||
					Config.getString("bhge.ahrensburg.plant", "6045") == null) {
				LOG.debug("US564046 : ahrensburg Configuration Not Found");
				return;
			}
			String soldTo = null;
			if(order.getSoldToForCart().getUid()!=null && order.getSoldToForCart().getUid().contains("_")) {
				String soldToUID = order.getSoldToForCart().getUid();
				LOG.debug("US564046 : Order code of the Order is  " + order.getCode());
				LOG.debug("US564046 :Soldtounit of the Order {0} is {1}", order.getCode(), soldToUID);
				if (null != soldToUID) {
					final String[] splitSoldToUID = soldToUID.split("_");
					soldTo = splitSoldToUID[1];
					LOG.debug("US564046 : SoldtoUnit after Split is " + soldTo);
				}
			}

			if(soldTo.equalsIgnoreCase(Config.getString("bhge.ahrensburg.soldto","6040"))) {
				for (AbstractOrderEntryModel entry : order.getEntries()) {
					final String plant = getPlant(entry);
					if (null !=plant) {
						LOG.debug("US564046 : Plant for Entry " + entry.getEntryNumber() + " is :" + plant);
						LOG.debug("US564046 : bhge.ahrensburg.plant :" + Config.getString("bhge.ahrensburg.plant", "6045"));
						if (plant.equalsIgnoreCase(Config.getString("bhge.ahrensburg.plant", "6045"))) {
							LOG.debug("US564046 : Inside if");
							LOG.debug("US564046 : Plant for Entry found for block " + entry.getEntryNumber() + " Plant code :" + plant);

							sapCpiOrder.setCsrHelp(BHGESAPOrderUtils.checkBooleanValues(Boolean.TRUE));
							String specialDiscountCode = StringUtils.EMPTY;
							if (sapCpiOrder.getDiscountCode() != null) {
								specialDiscountCode = sapCpiOrder.getDiscountCode();
							}
							specialDiscountCode = specialDiscountCode + NEW_LINE + "The Order is marked for CSR Review since the Plant is 6045";
							sapCpiOrder.setDiscountCode(specialDiscountCode);

							LOG.debug("US564046 :Hybris Block applied");
							LOG.debug("US564046 :Hybris Block Text" + specialDiscountCode);
							break;
						} else {
							LOG.debug("US564046 :Plant and bhge.ahrensburg.plant dosent match");
						}
					}
				}
			}else{
				LOG.debug("US564046 : Sold To is not marked for block : " + soldTo );
			}
			LOG.debug("US564046 : End of Ahrensburg Hybris Block check");
		}
	}

	@Override
	protected List<SapCpiOrderItem> mapOrderItems(OrderModel orderModel) {
		 LOG.debug("Starting conversion of orderEntry to  sapCpiOrderItems inside BHGEVCSapCpiOmmOrderConversionService for order {}", orderModel.getCode());
		 final List<SapCpiOrderItem> sapCpiOrderItems = super.mapOrderItems(orderModel);
		 LOG.debug("length of existing sapCpiOrderItems {} ", sapCpiOrderItems.size());
		 final String paymentType = orderModel.getPaymentType().getCode();
		 for (SapCpiOrderItem sapCpiOrderItem : sapCpiOrderItems) {
			 for (AbstractOrderEntryModel entry : orderModel.getEntries()) {
				 if (entry.getEntryNumber().toString().equalsIgnoreCase(sapCpiOrderItem.getEntryNumber())) {
					 LOG.debug("order entrynumber and scpiorder item entry number are equal and entry pk {} ", entry.getPk());
					 LOG.debug("before adding value of note {} in sapCpiOrderItem with entry number {} ", sapCpiOrderItem.getNote(), sapCpiOrderItem.getEntryNumber());
					 final String plant = getPlant(entry);
					 if (StringUtils.isNotEmpty(plant)) {
						 LOG.debug("For order entry reference by pk {} plant is {} ", entry.getPk(), plant);
						 sapCpiOrderItem.setPlant(plant);
					 }
					 
					 if (entry.getRequestedDeliveryDate() != null) {
						 LOG.debug("For order entry reference by pk {} RequestedDeliveryDate is {} ", entry.getPk(), entry.getRequestedDeliveryDate());
						 sapCpiOrderItem.setReqLineDeliveryDate(formatRequestedDelvDate(entry.getRequestedDeliveryDate()));
					 }
					 if(entry.getEcaPONumber()!= null) {
						 LOG.debug("For order entry reference by pk {} EcaPONumber is {} ", entry.getPk(), entry.getEcaPONumber());
						 sapCpiOrderItem.setEndCustomerPO(entry.getEcaPONumber());
						 LOG.info("For order entry reference by pk {} EcaPONumber is set as EndCustomerPO in sapCpiOrderItem with entry number {} ", entry.getPk(), sapCpiOrderItem.getEndCustomerPO());
					 }

					 final String availableLineText = getAvailableLineText(entry);
					 if (StringUtils.isNotEmpty(availableLineText)) {
						 LOG.debug("For order entry reference by pk {} availableLineText {} is ", entry.getPk(), availableLineText);
						 sapCpiOrderItem.setAvailableLineText(availableLineText);
					 }
					 
					 
					// SAVE FOR FUTURE USE
					 sapCpiOrderItem.setSaveForFuture(
								Character.toString(null != orderModel.getDeliveryAddress() ? BHGESAPOrderUtils.getBooleanValue(orderModel.getDeliveryAddress().getSaveForFuture()) : BHGESAPOrderUtils.getBooleanValue(null)));

					 
					 LOG.debug("For order entry reference by pk {} note {} is ", entry.getPk(), entry.getNote());
					 sapCpiOrderItem.setNote(entry.getNote());
					 LOG.debug("after adding value of note {} in sapCpiOrderItem with entry number {} ", sapCpiOrderItem.getNote(), sapCpiOrderItem.getEntryNumber());
					 
					 if (CheckoutPaymentType.CARD.getCode().equalsIgnoreCase(paymentType)) {
						 sapCpiOrderItem.setPaymentTerms("CC01");
					 }
					 sapCpiOrderItem.setTagInformation(entry.getTagInformation());
					 sapCpiOrderItem.setReferenceNumber(entry.getReferenceNumber());
					 final String dummyProductDesc = entry.getDummyProductDescription();
					 final String dummyPartNumber = entry.getDummyPartNumber();
					 if(dummyPartNumber != null) {
						 String dummyProductDetails = PART_NUM.concat(SPACE).concat(dummyPartNumber).concat(SPACE);
						
						 if (dummyProductDesc != null) {
							 dummyProductDetails = dummyProductDetails.concat(PART_DESC).concat(SPACE).concat(dummyProductDesc);
						 }
						 splittedDummyProductDesc(dummyProductDetails, sapCpiOrderItem);
						 
					 } else if ((null != entry.getLongConfigEntry() && entry.getLongConfigEntry())|| entry.getProductPricingIssue() ) {
						 LOG.info("BHGEVCSapCpiOmmOrderConversionService : Setting dummy product details as LN for order entry with pk {} and entry number {} as it is long config entry or product configuration issue is true ", entry.getPk(), entry.getEntryNumber());
						 sapCpiOrderItem.setDummyProductDetails1("LN");
					 }
					 setCoupleDetails(entry, sapCpiOrderItem);
				 }
			 }
		 }
		 LOG.debug("length of sapCpiOrderItems after adding custom fields {} , size has to be same as earlier ", sapCpiOrderItems.size());
		 sapCpiOrderItems.sort(Comparator.comparing(SapCpiOrderItem::getEntryNumber));
		 LOG.debug("Completed conversion of orderEntry to  sapCpiOrderItems inside BHGEVCSapCpiOmmOrderConversionService for order {}", orderModel.getCode());
		 for(SapCpiOrderItem orderItem: sapCpiOrderItems)
		 {
			 LOG.info("BHGEVCSapCpiOmmOrderConversionService : Completed mapOrderItems for order item with entry number {} ", orderItem.getEntryNumber());
		 }
		 return sapCpiOrderItems;
	 }
	
	@Override
	protected List<SapCpiCreditCardPayment> mapCreditCards(final OrderModel orderModel) {

	    final List<SapCpiCreditCardPayment> sapCpiCreditCardPayments = new ArrayList<>();
	    try {

	        final BHGECreditCardPaymnentinfoModel  paymentInfo = orderModel.getBhgeCreditCardPaymentInfo();
	        if (paymentInfo != null) {
	      	  final SapCpiCreditCardPayment sapCpiCreditCardPayment = new SapCpiCreditCardPayment();
	      	  LOG.debug("Payment details {} for order {} ", paymentInfo.getPk(), orderModel.getCode());
		        sapCpiCreditCardPayment.setRequestId("1");
		        sapCpiCreditCardPayment.setOrderId(orderModel.getCode());
		        sapCpiCreditCardPayment.setCcOwner(StringUtils.isNotEmpty(paymentInfo.getName())  ? paymentInfo.getName() : StringUtils.EMPTY);
		        sapCpiCreditCardPayment.setPaymentProvider(StringUtils.isNotEmpty(paymentInfo.getType())  ? paymentInfo.getType() : StringUtils.EMPTY);
		        sapCpiCreditCardPayment.setSubscriptionId(StringUtils.isNotEmpty(paymentInfo.getToken())  ? paymentInfo.getToken() : StringUtils.EMPTY);
		        
		        if(StringUtils.isNotEmpty(paymentInfo.getValidTru())) {
		      	  final String ccValidTru = paymentInfo.getValidTru() + "01";
		      	  LOG.debug("valid thru date {} for payment {} for order {} ", ccValidTru, paymentInfo.getPk(), orderModel.getCode());
		      	  sapCpiCreditCardPayment.setValidToYear(ccValidTru);
		        }

		        sapCpiCreditCardPayments.add(sapCpiCreditCardPayment);
	        }

	    } catch (RuntimeException ex) {
	      throw new SapCpiOmmOrderConversionServiceException(String.format("Error occurs while setting the payment information for the order [%s]!", orderModel.getCode()), ex);
	    }

	    return sapCpiCreditCardPayments;

	 }
	
	@Override
	 protected List<SapCpiPartnerRole> mapOrderPartners(OrderModel orderModel) {


		 LOG.info("BHGEVCSapCpiOmmOrderConversionService, inside mapOrderPartners ");

		 final List<SapCpiPartnerRole> sapCpiPartnerRoles = super.mapOrderPartners(orderModel);

		 for(SapCpiPartnerRole sapCpiPartnerRole : sapCpiPartnerRoles) {
			 final String partnerRoleCode = sapCpiPartnerRole.getPartnerRoleCode();
			 LOG.info("BHGEVCSapCpiOmmOrderConversionService, inside mapOrderPartners, partner role code {} ", partnerRoleCode);
			 if (PartnerRoles.SHIP_TO.getCode().equalsIgnoreCase(partnerRoleCode)) {
				 sapCpiPartnerRole.setDeliveryPoint(orderModel.getDeliveryPoint());
			 }

		 }
        if(orderModel.getRMAEndUserAddress() != null && orderModel.getRMAEndUserAddress().getSapCustomerID() == null
                && orderModel.getProductLine().equalsIgnoreCase("cordant")) {
            SapCpiPartnerRole sapCpiPartnerRole = new SapCpiPartnerRole();
            sapCpiPartnerRole.setPartnerId(orderModel.getSoldToForCart().getUid().split("_")[0]);
            sapCpiPartnerRole.setOrderId(orderModel.getCode());
            sapCpiPartnerRole.setPartnerRoleCode("ZE");
            sapCpiPartnerRole.setDocumentAddressId(StringUtils.EMPTY);
            sapCpiPartnerRoles.add(sapCpiPartnerRole);
        }
		 if(GEEdgeCartType.FILM.equals(orderModel.getCartType())) {
			 LOG.info("BHGEVCSapCpiOmmOrderConversionService, Order type is FILM, setting partner role for each order entry for order {} ", orderModel.getCode());
			 for (AbstractOrderEntryModel entry : orderModel.getEntries()) {
				 LOG.info("BHGEVCSapCpiOmmOrderConversionService mapOrderPartners OrderEntry Number is " + entry.getEntryNumber() + " and Product code is  " + entry.getProduct().getCode());
				 SapCpiPartnerRole sapCpiPartnerRole = new SapCpiPartnerRole();
				 sapCpiPartnerRole.setOrderId(orderModel.getCode());
				 sapCpiPartnerRole.setEntryNumber(parseEntryNumber(entry.getEntryNumber()));
				 if (null != entry.getEndCustomerAddress() && org.apache.commons.lang3.StringUtils.isNotBlank(entry.getEndCustomerAddress().getSapCustomerID())) {
					 sapCpiPartnerRole.setPartnerId(entry.getEndCustomerAddress().getSapCustomerID());
				 } else {
					 sapCpiPartnerRole.setPartnerId(orderModel.getSoldToForCart().getUid().split("_")[0]);
					 sapCpiPartnerRole.setDocumentAddressId(parseEntryNumber(entry.getEntryNumber()));
					 LOG.info("BHGEVCSapCpiOmmOrderConversionService mapOrderPartners PartnerId is set for entry number " + entry.getEntryNumber() + " as EndCustomerAddress or SapCustomerID is null/blank");
				 }
				 sapCpiPartnerRole.setPartnerRoleCode("ZE");
				 LOG.info("BHGEVCSapCpiOmmOrderConversionService mapOrderPartners PartnerRoleCode is " + sapCpiPartnerRole.getPartnerRoleCode() + " and PartnerId is  " + sapCpiPartnerRole.getPartnerId());
				 sapCpiPartnerRoles.add(sapCpiPartnerRole);
			 }
		 }
		LOG.info("BHGEVCSapCpiOmmOrderConversionService, completed mapOrderPartners for order {} and started adding zz and size of the partner roles", orderModel.getCode(), sapCpiPartnerRoles.size());
		if (!Objects.equals(orderModel.getCurrency().getIsocode(), orderModel.getSoldToForCart().getCurrency().getIsocode())) {
			LOG.info("BHGEVCSapCpiOmmOrderConversionService, Order currency {} is different from SoldTo Currency {} for order {} ", orderModel.getCurrency().getIsocode(), orderModel.getSoldToForCart().getCurrency().getIsocode(), orderModel.getCode());
			try {
				BHGECurrencyModel bhgeCurrencyModel = getCustomerCurrencyForOrder(orderModel.getSoldToForCart().getUid(), "FILM", orderModel.getCurrency().getIsocode());
				if (bhgeCurrencyModel != null) {
					SapCpiPartnerRole sapCpiPartnerRole = new SapCpiPartnerRole();
					sapCpiPartnerRole.setOrderId(orderModel.getCode());
					if(StringUtils.isNotEmpty(bhgeCurrencyModel.getRemit()))
					{
						sapCpiPartnerRole.setPartnerId(bhgeCurrencyModel.getRemit());
					}
					else {
						LOG.info("BHGEVCSapCpiOmmOrderConversionService, Remit value is not found in BHGECurrencyModel for SoldTo {} and order {} , defaulting partner id to SoldTo UID {} ", orderModel.getSoldToForCart().getUid(), orderModel.getCode(), sapCpiPartnerRole.getPartnerId());
					}
					sapCpiPartnerRole.setPartnerRoleCode("ZZ");
					sapCpiPartnerRoles.add(sapCpiPartnerRole);
					LOG.info("BHGEVCSapCpiOmmOrderConversionService, Added partner role code ZZ for SoldTo in case of currency mismatch for order {} ", orderModel.getCode());
					LOG.info("BHGEVCSapCpiOmmOrderConversionService, Customer currency for SoldTo {} is {} ", orderModel.getSoldToForCart().getUid(), bhgeCurrencyModel.getCurrency());
				} else {
					LOG.info("BHGEVCSapCpiOmmOrderConversionService, No customer currency found for SoldTo {} and defaulting to order currency {} ", orderModel.getSoldToForCart().getUid(), orderModel.getCurrency().getIsocode());
				}
				LOG.info("BHGEVCSapCpiOmmOrderConversionService, Added partner role code ZC for SoldTo in case of currency mismatch for order {} ", orderModel.getCode());
			}
			catch (Exception e)
			{
				LOG.error("BHGEVCSapCpiOmmOrderConversionService, Exception occurred while fetching customer currency for SoldTo {} and order {} ", orderModel.getSoldToForCart().getUid(), orderModel.getCode(), e);
			}
		}
		 else{
				LOG.info("BHGEVCSapCpiOmmOrderConversionService, Order currency {} is same as SoldTo Currency {} for order {} ", orderModel.getCurrency().getIsocode(), orderModel.getSoldToForCart().getCurrency().getIsocode(), orderModel.getCode());
				LOG.info("BHGEVCSapCpiOmmOrderConversionService, No need to add partner role code ZZ for SoldTo in case of currency mismatch for order {} ", orderModel.getCode());
			}
			LOG.info("BHGEVCSapCpiOmmOrderConversionService, completed mapOrderPartners for order {} and completed adding zz and size of the partner roles is {} ", orderModel.getCode(), sapCpiPartnerRoles.size());

			return sapCpiPartnerRoles;
		}

	@Override
	protected List<SapCpiOrderAddress> mapOrderAddresses(OrderModel orderModel) {
		
		 LOG.info("BHGEVCSapCpiOmmOrderConversionService, inside mapOrderAddresses ");

	    final List<SapCpiOrderAddress> sapCpiOrderAddresses = super.mapOrderAddresses(orderModel);
	    
	    for(SapCpiOrderAddress sapCpiOrderAddress : sapCpiOrderAddresses) {
	   	 final String addressId = sapCpiOrderAddress.getDocumentAddressId();

	   	 if (StringUtils.isNotBlank(addressId) && addressId.equalsIgnoreCase(SaporderexchangeConstants.ADDRESS_ONE)) {
	   		 final AddressModel addressModel = orderModel.getDeliveryAddress();
	   		 sapCpiOrderAddress.setCompany(addressModel.getCompany());
	   	 }
	   	 
	    }
		if(GEEdgeCartType.FILM.equals(orderModel.getCartType()))
		{
			LOG.info("BHGEVCSapCpiOmmOrderConversionService, Order type is FILM, setting order address for each order entry for order {} ", orderModel.getCode());
		for(AbstractOrderEntryModel entry: orderModel.getEntries()) {
			LOG.info("BHGEVCSapCpiOmmOrderConversionService, inside mapOrderAddresses for order entry with pk {} and entry number {} ", entry.getPk(), entry.getEntryNumber());
			SapCpiOrderAddress sapCpiOrderAddress = new SapCpiOrderAddress();
			AddressModel addressModel = entry.getEndCustomerAddress();
			if (null != addressModel && null == addressModel.getSapCustomerID()) {
				LOG.info("BHGEVCSapCpiOmmOrderConversionService, End customer address is new for order entry with pk {} and entry number {} ", entry.getPk(), entry.getEntryNumber());
				sapCpiOrderAddress.setOrderId(orderModel.getCode());
				sapCpiOrderAddress.setDocumentAddressId(parseEntryNumber(entry.getEntryNumber()));
				sapCpiOrderAddress.setEmail(addressModel.getEmail() != null ? addressModel.getEmail() : StringUtils.EMPTY);
				sapCpiOrderAddress.setFaxNumber(addressModel.getFax() != null ? addressModel.getFax() : StringUtils.EMPTY);
				//have to check
				sapCpiOrderAddress.setLanguageIsoCode("en");
				if(addressModel.getSaveForFuture()) {
					sapCpiOrderAddress.setCheckStatus("T");
				}
				else {
					sapCpiOrderAddress.setCheckStatus("F");
				}
				sapCpiOrderAddress.setTelNumber(addressModel.getPhone1() != null ? addressModel.getPhone1() : StringUtils.EMPTY);
				sapCpiOrderAddress.setTitleCode(addressModel.getTitle() != null ? addressModel.getTitle().getCode() : StringUtils.EMPTY);
				setCpiLocation(sapCpiOrderAddress, addressModel);
				setCpiName(sapCpiOrderAddress, addressModel);
				if (sapCpiOrderAddress.getDocumentAddressId() != null && !sapCpiOrderAddress.getDocumentAddressId().isEmpty()) {
					sapCpiOrderAddresses.add(sapCpiOrderAddress);
				}

			}
			LOG.info("BHGEVCSapCpiOmmOrderConversionService, completed mapOrderAddresses for order entry with pk {} and entry number {} ", entry.getPk(), entry.getEntryNumber());
		}
		}

	    return sapCpiOrderAddresses;
	  }

    @Override
    protected List<SapCpiOrderPriceComponent> mapOrderPrices(OrderModel orderModel) {
        LOG.info("BHGEVCSapCpiOmmOrderConversionService, inside mapOrderPrices ");

        final List<SapCpiOrderPriceComponent> sapCpiOrderPrices = super.mapOrderPrices(orderModel);
        if(orderModel.getSurCharge()!= null){
			LOG.info("BHGEVCSapCpiOmmOrderConversionService, order surcharge value {} for order {} ", orderModel.getSurCharge(), orderModel.getCode());
            SapCpiOrderPriceComponent sapCpiOrderPriceComponent = new SapCpiOrderPriceComponent();
            sapCpiOrderPriceComponent.setConditionCode("ZF00");
            sapCpiOrderPriceComponent.setUnit(orderModel.getEntries().get(0).getUnit().getCode());
            sapCpiOrderPriceComponent.setCurrencyIsoCode(orderModel.getCurrency().getIsocode());
            sapCpiOrderPriceComponent.setOrderId(orderModel.getCode());
            sapCpiOrderPriceComponent.setAbsolute("true");
            sapCpiOrderPriceComponent.setEntryNumber("10");
            sapCpiOrderPriceComponent.setValue(orderModel.getSurCharge());
            sapCpiOrderPriceComponent.setPriceQuantity(orderModel.getEntries().get(0).getQuantity().toString());
            sapCpiOrderPriceComponent.setConditionCounter("5");
            sapCpiOrderPrices.add(sapCpiOrderPriceComponent);
        }
            if ( null != orderModel && CollectionUtils.isNotEmpty(orderModel.getGlobalDiscountValues() )&& CollectionUtils.isNotEmpty(orderModel.getAppliedCouponCodes())) {
                for (DiscountValue discount : orderModel.getGlobalDiscountValues()) {
                    if (discount.getCode().startsWith("Action")) {
                        LOG.info("US644202 order level coupon applied: " + discount.getCode());
                        LOG.info("BHGEVCSapCpiOmmOrderConversionService, coupon discount value {} for order {} ", discount.getAppliedValue(), orderModel.getCode());
                        SapCpiOrderPriceComponent sapCpiOrderPriceComponent = new SapCpiOrderPriceComponent();
                        sapCpiOrderPriceComponent.setConditionCode("ZDOA");
                        //sapCpiOrderPriceComponent.setUnit(orderModel.getEntries().get(0).getUnit().getCode());
                        sapCpiOrderPriceComponent.setCurrencyIsoCode(orderModel.getCurrency().getIsocode());
                        sapCpiOrderPriceComponent.setOrderId(orderModel.getCode());
                        sapCpiOrderPriceComponent.setAbsolute("true");
                        //sapCpiOrderPriceComponent.setEntryNumber("10");
                        sapCpiOrderPriceComponent.setValue(String.valueOf(discount.getAppliedValue()));
                        //sapCpiOrderPriceComponent.setPriceQuantity(orderModel.getEntries().get(0).getQuantity().toString());
                        sapCpiOrderPriceComponent.setConditionCounter("5");
                        sapCpiOrderPrices.add(sapCpiOrderPriceComponent);
                    }
                }
            }
        return sapCpiOrderPrices;
    }

    private void setCpiLocation(final SapCpiOrderAddress sapCpiOrderAddress, final AddressModel addressModel) {
		LOG.info("BHGEVCSapCpiOmmOrderConversionService, inside setCpiLocation for address with pk {} ", addressModel.getPk());
		sapCpiOrderAddress.setApartment(addressModel.getAppartment()!=null?addressModel.getAppartment():StringUtils.EMPTY);
		sapCpiOrderAddress.setBuilding(addressModel.getBuilding()!=null?addressModel.getBuilding():StringUtils.EMPTY);
		sapCpiOrderAddress.setCity(addressModel.getTown()!=null?addressModel.getTown():StringUtils.EMPTY);
		sapCpiOrderAddress.setCountryIsoCode(addressModel.getCountry()!=null?addressModel.getCountry().getIsocode():StringUtils.EMPTY);
		sapCpiOrderAddress.setDistrict(addressModel.getDistrict()!=null?addressModel.getDistrict():StringUtils.EMPTY);
		sapCpiOrderAddress.setHouseNumber(addressModel.getLine2()!=null?addressModel.getLine2():StringUtils.EMPTY);
		sapCpiOrderAddress.setPobox(addressModel.getPobox()!=null?addressModel.getPobox():StringUtils.EMPTY);
		sapCpiOrderAddress.setPostalCode(addressModel.getPostalcode()!=null?addressModel.getPostalcode():StringUtils.EMPTY);
		sapCpiOrderAddress.setRegionIsoCode(addressModel.getRegion()!=null?addressModel.getRegion().getIsocodeShort():StringUtils.EMPTY);
		sapCpiOrderAddress.setStreet(addressModel.getLine1()!=null?addressModel.getLine1():StringUtils.EMPTY);
		LOG.info("checkStatus is set as T for address with pk {} in setCpiLocation method ",sapCpiOrderAddress.getCheckStatus());
		LOG.info("BHGEVCSapCpiOmmOrderConversionService, completed setCpiLocation for address with pk {} ", addressModel.getPk());
	}
	private void setCpiName(final SapCpiOrderAddress sapCpiOrderAddress, final AddressModel addressModel) {
		LOG.info("BHGEVCSapCpiOmmOrderConversionService, inside setCpiName for address with pk {} ", addressModel.getPk());
		sapCpiOrderAddress.setFirstName(addressModel.getFirstname()!=null?addressModel.getFirstname():StringUtils.EMPTY);
		sapCpiOrderAddress.setLastName(addressModel.getLastname()!=null?addressModel.getLastname():StringUtils.EMPTY);
		sapCpiOrderAddress.setMiddleName(addressModel.getMiddlename()!=null?addressModel.getMiddlename():StringUtils.EMPTY);
		sapCpiOrderAddress.setMiddleName2(addressModel.getMiddlename2()!=null?addressModel.getMiddlename2():StringUtils.EMPTY);
		LOG.info("BHGEVCSapCpiOmmOrderConversionService, completed setCpiName for address with pk {} ", addressModel.getPk());
	}
	private String parseEntryNumber(Integer entryNumber) {
		String itemNum = "";

		Integer lineItemCount= entryNumber/10;
		if (lineItemCount <= 9)
		{
			itemNum = "00" + lineItemCount * 1000;
		}
		else
		{
			itemNum = "0" + lineItemCount * 1000;
		}
		return itemNum;
	}



	private String getCourier(final OrderModel order) {
		 String courier = StringUtils.EMPTY;
		 if(null != order.getCartType()) {
			 if (GEEdgeCartType.HYBRID.equals(order.getCartType()) || GEEdgeCartType.NONFILM.equals(order.getCartType())) {
				 LOG.debug("GEEdgeCartType value {} for order {}", order.getCartType(), order.getCode());
				 if (order.getShippingCarrierMethod() != null) {
					 LOG.debug("shipping carrier method value {} for order {}", order.getShippingCarrierMethod().getCode(), order.getCode());
					 courier = order.getShippingCarrierMethod().getCode();
				 }
			 }
		 }
		 return courier;
	 } 
	 
	 private void setEndUser(final SapCpiOrder sapCpiOrder, final OrderModel order) {
		 String endUser = StringUtils.EMPTY;
		 String sapSaveMessge = StringUtils.EMPTY;
		 String soldTo = order.getSoldToForCart() != null ? order.getSoldToForCart().getUid() : StringUtils.EMPTY;
		 String soldToCustomer= StringUtils.isNotEmpty(soldTo) ? soldTo.split("_")[0] : StringUtils.EMPTY;
		 if (order.getRMAEndUserAddress() != null) {
			 LOG.debug("RMA end user address is not null and value is {} for order {} ", order.getRMAEndUserAddress(), order.getCode());
			 if (order.getRMAEndUserAddress().getSapCustomerID() != null) {
				 LOG.debug("SAPCustomerID in RMA enduser address is not null and value is {} for order {}", order.getRMAEndUserAddress().getSapCustomerID(), order.getCode());
				 endUser = BHGESAPOrderUtils
						 .checkNullForString(BHGESAPOrderUtils.addLeadingZeros(order.getRMAEndUserAddress().getSapCustomerID(), 10));
				 sapCpiOrder.setEndUser(endUser);
			 }
			 else {
				 if (order.getRMAEndUserAddress().getSaveForFuture() != null) {
					 LOG.debug("SAPCustomerID in RMA enduser address is null but save for future value is not null and value is {} for order {} ", order.getRMAEndUserAddress().getSaveForFuture(), order.getCode());
					 if ( null != order.getRMAEndUserAddress().getSaveForFuture() && order.getRMAEndUserAddress().getSaveForFuture()) {
						 sapSaveMessge = BhgesaporderfulfillmentConstants.END_USER_TEXT1;
					 }
					 else {
						 sapSaveMessge = BhgesaporderfulfillmentConstants.END_USER_TEXT2;
					 }
				 }
				 else {
					 LOG.debug("SAPCustomerID in RMA enduser address and save for future value is null for order {} ", order.getCode());
					 sapSaveMessge = BhgesaporderfulfillmentConstants.END_USER_TEXT2;
				 }
				 
				 String endUserAddress = BhgesaporderfulfillmentConstants.END_USER_DETAIL + BHGESAPOrderUtils.processAddressText(order.getRMAEndUserAddress())
						 + BhgesaporderfulfillmentConstants.SAVE_FLAG_MESSAGE + sapSaveMessge;
				 if (StringUtils.isNotEmpty(order.getEndUserCategory())) {
					 LOG.debug("end user category is {} for order {} ", order.getEndUserCategory(), order.getCode());
					 endUserAddress = BhgesaporderfulfillmentConstants.END_USER_CATEGORY_TEXT + order.getEndUserCategory() + BhgesaporderfulfillmentConstants.END_USER_ADDRESS_TEXT + endUserAddress;
				 }
				 endUser = StringUtils.left(endUserAddress, 246);
				 LOG.debug("SoldTo value {} for order {} In case of new address ", soldTo, order.getCode());
				 sapCpiOrder.setEndUser(soldToCustomer);
				 sapCpiOrder.setEndUserNewDetails(endUser);
			 }
		 }
		 else {
			 LOG.debug("RMA end user address is null for order {} ", order.getCode());
			 Boolean setEndUserFromAddress = Boolean.FALSE;
			 for(AbstractOrderEntryModel entry: order.getEntries())
			 {
				 if(null != entry.getEndCustomerAddress() && StringUtils.isNotBlank(entry.getEndCustomerAddress().getSapCustomerID())) {
					 order.setRMAEndUserAddress(entry.getEndCustomerAddress());
					 sapCpiOrder.setEndUser(entry.getEndCustomerAddress().getSapCustomerID());
					 LOG.debug("SAPCustomerID in enduser address is not null and value is {} for order entry with pk {} and entry number {} ", entry.getEndCustomerAddress().getSapCustomerID(), entry.getPk(), entry.getEntryNumber());
					 setEndUserFromAddress = Boolean.TRUE;
					 break;
				 }
			 }
			 if (!setEndUserFromAddress) {
				 LOG.debug("No end user address with SAPCustomerID found, setting end user as sold to customer for order {} ", order.getCode());
				 order.setRMAEndUserAddress(order.getDeliveryAddress());
				 sapCpiOrder.setEndUser(soldToCustomer);
			 }
		 }
	 }
	 
	 private String getNoRDD(final OrderModel order) {
		 return BooleanUtils.isTrue(order.getEarlyShipment()) ? BhgesaporderfulfillmentConstants.X : StringUtils.EMPTY;
	 }
	 
	 
	 private String getReqHeaderDeliveryDate(final OrderModel order) {
		 
		 String deliveryDate = StringUtils.EMPTY;
		 if (order.getCartType() != null) {
			 LOG.debug("Getting Req header delivery date cart type value {} for order {}", order.getCartType(), order.getCode());
			if (order.getCartType().getCode().equalsIgnoreCase(BhgesaporderfulfillmentConstants.CARTTYPE_FILM)) {
				
					LOG.debug("cart type code is equal to FILM for order {} ",order.getCode());
					if (order.getReqHeaderDeliveryDateFilm() != null) {
						 LOG.debug("req header delivery date film is not null and value is {} for order {}when cart type is FILM ", order.getReqHeaderDeliveryDateFilm(), order.getCode());
						 deliveryDate = formatRequestedDelvDate(order.getReqHeaderDeliveryDateFilm());
					}
					else {
						LOG.debug("req header delivery date film value is NULL for order {} when cart type is FILM ", order.getCode());
						deliveryDate = formatRequestedDelvDate(getNextDayDate());
					}
				}
				if (order.getCartType().getCode().equalsIgnoreCase(BhgesaporderfulfillmentConstants.CARTTYPE_NONFILM)) {
					LOG.debug("code value for cartype is equal to NONFILM for order {}", order.getCode());
					if (order.getReqHeaderDeliveryDate() != null) {
					   LOG.debug("req header delivery date film value is not null and value is {} for order {} when cart type is NOFILM ", order.getReqHeaderDeliveryDate(), order.getCode());
					   deliveryDate = formatRequestedDelvDate(order.getReqHeaderDeliveryDate());
					}
					else {
						LOG.debug("req header delivery date film value is null for order {} when cart type is NOFILM ", order.getCode());
						deliveryDate = formatRequestedDelvDate(getNextDayDate());
					}
				}
			}
		 
		return deliveryDate;
	 }
	 
	 private String getPlant(final AbstractOrderEntryModel entry) {
		 
		 String plant = StringUtils.EMPTY;
		 if (StringUtils.isNotEmpty(entry.getPlant()) && entry.getPlant().contains(BhgesaporderfulfillmentConstants.PLANT_SEPERATOR)) {
			 LOG.debug("Getting plant {} details for order {}", entry.getPlant(), entry.getOrder().getCode());
			 final String[] plants = entry.getPlant().split(BhgesaporderfulfillmentConstants.PLANT_SEPERATOR);
			 if (null != plants && plants.length > 0) {
				 plant = plants[0];
			 }
		 }
		 else {
			 plant = entry.getPlant();
		 }
		 return plant;
	 }
	 
	 private void setDiscountCode(final SapCpiOrder sapCpiOrder, final OrderModel order) {
		 
			String specialDiscountCode = StringUtils.EMPTY;
			if (order.getUser() instanceof CustomerModel) {
				final CustomerType customerType = ((CustomerModel) order.getUser()).getType();
				if (customerType != null && CustomerType.GUEST.getCode().equals(customerType.getCode())) {
					
					if (order.getPaymentType() != null && order.getPaymentType().getCode().equals(CheckoutPaymentType.CARD)) {
						sapCpiOrder.setPurchaseOrderNumber(Config.getString("guest.cc.po.text", "Credit Card Order"));
						specialDiscountCode = Config.getString("guest.cc.csr.text",
								"The user has selected credit card as the payment option for this order");
					}
					
					final String soldToAddress = "Sold to Address : " + NEW_LINE
							+ BHGESAPOrderUtils.processAddressTextInLineByLineFormat(order.getPaymentAddress());
					
					specialDiscountCode = NEW_LINE + specialDiscountCode + NEW_LINE + soldToAddress + NEW_LINE
							+ StringEscapeUtils.unescapeHtml4(order.getSpecialDiscountCode()) + NEW_LINE;
					
					LOG.debug("customer is guest customer and special discount code is {} ", specialDiscountCode);

				}
				else if (order.getUser() instanceof GEEdgeCustomerModel) {
					LOG.debug("customer is not guest customer and special discount code is {} ", order.getSpecialDiscountCode());
					specialDiscountCode = StringEscapeUtils.unescapeHtml4(order.getSpecialDiscountCode());
				}
			}
			sapCpiOrder.setDiscountCode(specialDiscountCode); 
	 }
	 
	 private void setCoupleDetails(final AbstractOrderEntryModel entry, final SapCpiOrderItem sapCpiOrderItem ) {
		 
		 String discountCode = StringUtils.EMPTY;
		 final AbstractOrderModel order = entry.getOrder();
		 final Collection<String> couponCodes = entry.getOrder().getAppliedCouponCodes();
		 String couponCode = StringUtils.EMPTY;
		 
		 if (CollectionUtils.isNotEmpty(couponCodes)) {
				couponCode = couponCodes.iterator().next();
				LOG.info("coupon code {} for entry refernce by pk is {} ", couponCode, entry.getPk());
			}

			if (StringUtils.isNotEmpty(couponCode)) {
				final BHGECouponModel geCoupon = getAppliedCouponToCart(couponCode);
				if (geCoupon != null) {
					Map<String, String> ruleMap = null;
					final Set<PromotionResultModel> promotionResults = order.getAllPromotionResults();
					for (final PromotionResultModel result : promotionResults) {
						final Collection<AbstractPromotionActionModel> actions = result.getActions();
						for (final AbstractPromotionActionModel action : actions) {
							if (action instanceof RuleBasedOrderEntryAdjustActionModel) {
								final RuleBasedOrderEntryAdjustActionModel ruleBasedAction = (RuleBasedOrderEntryAdjustActionModel) action;
								final AbstractRuleEngineRuleModel rule = ruleBasedAction.getRule();
								if (rule instanceof DroolsRuleModel) {
									final DroolsRuleModel droolsRule = (DroolsRuleModel) rule;
									ruleMap = droolsRule.getGlobals();
								}
							}
						}

						if ((null != geCoupon.getApplyOnlistPrice()) && geCoupon.getApplyOnlistPrice()) {
							if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryFixedDiscountAction"))
							{
								discountCode = BhgesaporderfulfillmentConstants.DISC_CODE_FIXED_VALUE_ON_LP;
							}
							else if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryPercentageDiscountAction"))
							{
								discountCode = BhgesaporderfulfillmentConstants.DISC_CODE_PERCENTAGE_ON_LP;
							}
							else if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryFixedPriceAction"))
							{
								discountCode = BhgesaporderfulfillmentConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_LP;
							}
							else if (ruleMap != null && ruleMap.containsKey("ruleOrderFixedDiscountAction"))
							{
								LOG.info("Discount reason is ruleOrderFixedDiscountAction - LP");
								discountCode = BhgesaporderfulfillmentConstants.DISC_CODE_FIXED_VALUE_ON_LP;
							}
							else if (ruleMap != null && ruleMap.containsKey("ruleOrderPercentageDiscountAction"))
							{
								LOG.info("Discount reason is ruleOrderPercentageDiscountAction - LP");
								discountCode = BhgesaporderfulfillmentConstants.DISC_CODE_PERCENTAGE_ON_LP;
							}
						}
						else {
							if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryFixedDiscountAction")) {
								discountCode = BhgesaporderfulfillmentConstants.DISC_CODE_FIXED_VALUE_ON_YP;
							}
							else if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryPercentageDiscountAction")) {
								discountCode = BhgesaporderfulfillmentConstants.DISC_CODE_PERCENTAGE_ON_YP;
							}
							else if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryFixedPriceAction")) {
								discountCode = BhgesaporderfulfillmentConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_YP;
							}
							else if (ruleMap != null && ruleMap.containsKey("ruleOrderFixedDiscountAction")) {
								LOG.info("Discount reason is ruleOrderFixedDiscountAction");
								discountCode = BhgesaporderfulfillmentConstants.DISC_CODE_FIXED_VALUE_ON_YP;
							}
							else if (ruleMap != null && ruleMap.containsKey("ruleOrderPercentageDiscountAction")) {
								LOG.info("Discount reason is ruleOrderPercentageDiscountAction");
								discountCode = BhgesaporderfulfillmentConstants.DISC_CODE_PERCENTAGE_ON_YP;
							}
						}

					}
					if (CollectionUtils.isNotEmpty(couponCodes)) {
						LOG.info("For order entry reference by pk {} coupon id {} is ", entry.getPk(), geCoupon.getCouponId());
						sapCpiOrderItem.setDiscountReason(geCoupon.getCouponId());
						LOG.info("For order entry reference by pk {} discount code {} is ", entry.getPk(), discountCode);
						sapCpiOrderItem.setVoucherCode(discountCode);
					}
				}
			}
			
		}
	 
	 private String getAvailableLineText(final AbstractOrderEntryModel orderEntry) {
		 
		 final StringBuilder availabilityDetails = new StringBuilder();
			final List<String> availabilityList = orderEntry.getEstShippingDates();
			//Available line text details
			if (CollectionUtils.isNotEmpty(availabilityList)) {
				final int size = availabilityList.size();
				int counter = 1;
				for (final String str : availabilityList) {
					if (counter == 1) {
						availabilityDetails.append("Estimated Ship Date: ");
					}

					if (str.equalsIgnoreCase(NO_ESTIMATE)) {
						availabilityDetails.append(NO_ESTIMATE);
						availabilityDetails.append(QUANTITY);
						availabilityDetails.append(orderEntry.getQuantity());
						availabilityDetails.append(")");
					}
					else {
						final String[] availList = str.split(StringUtils.SPACE);
						if (Config.getString(DEFAULT_SHIP_DATE_TEXT, DEFAULT_SHIP_DATE).equals(availList[1])) {
							availabilityDetails.append(NO_ESTIMATE);
						}
						else {
							availabilityDetails.append(availList[1]);
						}
						availabilityDetails.append(QUANTITY);
						availabilityDetails.append(availList[0]);
						availabilityDetails.append(")");
					}

					if (counter < size) {
						availabilityDetails.append(COMMA);
					}
					counter++;
				}
			}
			return availabilityDetails.toString();
	 }
	 
	 private BHGECouponModel getAppliedCouponToCart(final String couponId) {
		  BHGECouponModel coupon = null;
			if (StringUtils.isNotEmpty(couponId)) {
				final String query = "select {PK} from {BHGECoupon} WHERE {couponid}= '" + couponId + "'";
				final List<BHGECouponModel> couponList = flexibleSearchService.<BHGECouponModel> search(query).getResult();
				if (CollectionUtils.isNotEmpty(couponList)) {
					coupon = couponList.get(0);
					LOG.info("BHGECouponModel model found for couponId {} ", couponId);
				}
			}
			return coupon;
	}
	private BHGECurrencyModel getCustomerCurrencyForOrder(String b2bUnit , String productType, String currency){
		LOG.info("Inside getCustomerCurrencyForOrder method for b2bUnit {} , productType {} and currency {} ", b2bUnit, productType, currency);
		String queryString = "Select {c.pk} From {BHGECurrency AS c} Where {c.customerId} =?customerId and {c.salesOrg} =?salesOrg and {c.productType} =?productType and {c.currency} =?currency";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		if (org.apache.commons.lang3.StringUtils.isNotBlank(b2bUnit) && b2bUnit.contains("_")) {
			LOG.info("b2b unit is" + b2bUnit);
			String[] parts = b2bUnit.split("_");
			String customerId = parts[0];
			String salesOrg = parts[1];
			params.put("salesOrg", salesOrg);
			params.put("customerId", customerId);
			params.put("currency", currency);
		}
		if(org.apache.commons.lang3.StringUtils.isNotBlank(productType)){
			LOG.info("productType is"+productType);
			params.put("productType", productType);
		}
		else{
			params.put("productType","");
		}
		query.addQueryParameters(params);
		final SearchResult<BHGECurrencyModel> result = flexibleSearchService.search(query);
		if(org.apache.commons.collections4.CollectionUtils.isNotEmpty(result.getResult())) {
			return result.getResult().get(0);
		}
		else{
			return null;
		}
	}
	 
	 public static Date getNextDayDate() {                                                       
	 	final Calendar calendar = Calendar.getInstance();   
	 	calendar.setTime(Calendar.getInstance().getTime()); 
	 	calendar.set(Calendar.HOUR_OF_DAY, 0);              
	 	calendar.add(Calendar.DAY_OF_YEAR, 1);              
	 	return calendar.getTime();                          
	 }                                                       
	 
	 
	 public String formatRequestedDelvDate(final Date reqDelvdate) {
		 String formattedDelvDate = StringUtils.EMPTY;
		 if (reqDelvdate != null) {
			 final SimpleDateFormat formatter = new SimpleDateFormat(DATE_FORMAT);
			 formattedDelvDate = formatter.format(reqDelvdate);
		 }
		 return formattedDelvDate;
	 }
	 
	 public void splittedDummyProductDesc(final String productDesc, final SapCpiOrderItem sapCpiOrderItem) {
		 List<String> list= new ArrayList<String>();
		 int index = 0;
		 int counter = 0;
		 while (index < productDesc.length()) {
			  if (counter == 0) {
				  sapCpiOrderItem.setDummyProductDetails1(productDesc.substring(index, Math.min(index + 132, productDesc.length())));
			  }
			  if (counter == 1) {
				  sapCpiOrderItem.setDummyProductDetails2(productDesc.substring(index, Math.min(index + 132, productDesc.length())));
			  }
			  if (counter == 2) {
				  sapCpiOrderItem.setDummyProductDetails3(productDesc.substring(index, Math.min(index + 132, productDesc.length())));
			  }
			  if (counter == 3) {
				  sapCpiOrderItem.setDummyProductDetails4(productDesc.substring(index, Math.min(index + 132, productDesc.length())));
			  }
		    
		     index = index + 132;
		     counter++;
		 }
		 
	 }
	 
	 
}
