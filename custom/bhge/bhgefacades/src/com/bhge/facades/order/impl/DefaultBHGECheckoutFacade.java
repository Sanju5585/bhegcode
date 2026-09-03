package com.bhge.facades.order.impl;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.BHGERMACommerceType;
import com.bhge.core.enums.GEEdgeCartType;
import com.bhge.core.enums.ShippingCarrierMethod;
import com.bhge.core.enums.ShippingChargeMethod;
import com.bhge.core.model.ReturnPOModel;
import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.order.service.BHGECalculationService;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.order.service.BHGEPaymentService;
import com.bhge.core.ordersplit.services.impl.DefaultBHGEOrderSplittingService;
import com.bhge.core.quote.service.BHGECommerceQuoteService;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.facades.address.BHGEShippingAddressFormData;
import com.bhge.facades.data.BHGECreditCardData;
import com.bhge.facades.data.BinLookUpResponseData;
import com.bhge.facades.data.SaveCardAuthoriseResponseCardData;
import com.bhge.facades.data.SavedCardAuthoriseResponseData;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.order.BHGECheckoutFacade;
import com.bhge.facades.order.populators.BHGEOrderPopulator;
import com.bhge.facades.rma.BHGERMAStatusFacade;
import com.bhge.facades.rma.BHGERmaFormFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.facades.user.populators.BHGECustomerPopulator;
import com.bhge.integration.models.services.BHGESapPlantLogSysOrgService;
import com.bhge.servicelayer.ordersplit.CommerceSplitOrderParameters;
import com.ds.dsocc.common.dto.CCPaymentInfoWsDTO;
import com.ds.dsocc.common.dto.CheckoutWsDTO;
import com.hybris.ge.edge.core.model.type.BHGECreditCardPaymnentinfoModel;
import com.hybris.ge.edge.core.model.type.BHGECurrencyCardThresholdModel;
import com.hybris.ge.edge.core.model.type.BHGESavedCreditcardModel;
import com.hybris.ge.edge.core.model.type.FiservMerchantIdModel;
import de.hybris.platform.b2b.company.B2BCommerceUnitService;
import de.hybris.platform.b2b.enums.CheckoutPaymentType;
import de.hybris.platform.b2b.model.B2BCommentModel;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2bacceleratorfacades.checkout.data.PlaceOrderData;
import de.hybris.platform.b2bacceleratorfacades.exception.EntityValidationException;
import de.hybris.platform.b2bacceleratorfacades.order.data.B2BCommentData;
import de.hybris.platform.b2bacceleratorfacades.order.data.B2BReplenishmentRecurrenceEnum;
import de.hybris.platform.b2bacceleratorfacades.order.data.TriggerData;
import de.hybris.platform.b2bacceleratorfacades.order.impl.DefaultB2BCheckoutFacade;
import de.hybris.platform.commercefacades.enums.data.ShippingCarrierMethodData;
import de.hybris.platform.commercefacades.i18n.comparators.CountryComparator;
import de.hybris.platform.commercefacades.order.data.AbstractOrderData;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.OrderData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commercefacades.user.data.CountryData;
import de.hybris.platform.commercefacades.voucher.VoucherFacade;
import de.hybris.platform.commercefacades.voucher.exceptions.VoucherOperationException;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.c2l.RegionModel;
import de.hybris.platform.core.model.enumeration.EnumerationValueModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.order.InvalidCartException;
import de.hybris.platform.order.exceptions.CalculationException;
import de.hybris.platform.payment.dto.TransactionStatus;
import de.hybris.platform.payment.enums.PaymentTransactionType;
import de.hybris.platform.payment.model.PaymentTransactionEntryModel;
import de.hybris.platform.payment.model.PaymentTransactionModel;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;
import org.springframework.ui.Model;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.Resource;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

import static de.hybris.platform.util.localization.Localization.getLocalizedString;




public class DefaultBHGECheckoutFacade extends DefaultB2BCheckoutFacade implements BHGECheckoutFacade
{
	private static final Logger LOG = Logger.getLogger(DefaultBHGECheckoutFacade.class);

	private static final String CART_CHECKOUT_NOT_CALCULATED = "cart.not.calculated";
	private static final String CART_CHECKOUT_DELIVERYADDRESS_INVALID = "cart.deliveryAddress.invalid";
	private static final String CART_CHECKOUT_DELIVERYMODE_INVALID = "cart.deliveryMode.invalid";
	private static final String CART_CHECKOUT_PAYMENTINFO_EMPTY = "cart.paymentInfo.empty";
	private static final String CART_CHECKOUT_QUOTE_REQUIREMENTS_NOT_SATISFIED = "cart.quote.requirements.not.satisfied";
	private static final String CART_CHECKOUT_TERM_UNCHECKED = "cart.term.unchecked";
	private static final String CART_CHECKOUT_TRANSACTION_NOT_AUTHORIZED = "cart.transation.notAuthorized";
	private static final String CART_CHECKOUT_NO_QUOTE_DESCRIPTION = "cart.no.quote.description";
	private static final String CART_CHECKOUT_REPLENISHMENT_NO_STARTDATE = "cart.replenishment.no.startdate";
	private static final String CART_CHECKOUT_REPLENISHMENT_NO_FREQUENCY = "cart.replenishment.no.frequency";
	private static final String DEFAULT_GUEST_COUNTRY_CODE = "US";

	private static final Double DEFAULT_SHIPMENT_COST = Double.valueOf(0.00);

	private static final String DEFAULT_LONGEST_EST_SHIP_DATE = "2100-01-01";

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "modelService")
	public ModelService modelService;

	@Resource(name = "bhgeCustomerPopulator")
	private BHGECustomerPopulator bhgeCustomerPopulator;

	@Resource(name = "addressConverter")
	private Converter<AddressModel, AddressData> addressConverter;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "bhgeSapPlantLogSysOrgService")
	public BHGESapPlantLogSysOrgService bhgeSapPlantLogSysOrgService;

	@Resource(name = "calculationService")
	private BHGECalculationService bhgeCalculationService;

	@Resource(name = "bhgeOrderSplittingService")
	private DefaultBHGEOrderSplittingService bhgeOrderSplittingService;

	@Resource(name = "bhgeOrderPopulator")
	private BHGEOrderPopulator bhgeOrderPopulator;

	@Resource(name = "userService")
	public UserService userService;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;

	@Resource
	B2BCommerceUnitService b2bCommerceUnitService;

	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource(name = "bhgeRmaFormFacade")
	private BHGERmaFormFacade bhgeRmaFormFacade;

	@Resource(name = "bhgeCartFacade")
	BHGECartFacade bhgeCartFacade;

	@Resource(name = "voucherFacade")
	private VoucherFacade voucherFacade;

	@Resource(name="cartConverter")
	private Converter<CartModel, CartData> cartConverter;

	@Resource(name = "configurationService")
	ConfigurationService configurationService;

	@Resource(name = "bhgePaymentService")
	public BHGEPaymentService bhgePaymentService;

	@Resource(name = "bhgeCardDetailConverter")
	private Converter<BHGESavedCreditcardModel, BHGECreditCardData> bhgeCardDetailConverter;

	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;

	@Resource(name = "bhgeSaveCardReversePopulator")
	private Populator bhgeSaveCardReversePopulator;

	@Resource
	BHGECommerceQuoteService bhgeCommerceQuoteService;


	/**
	 * @return the bhgeOrderSplittingService
	 */
	public DefaultBHGEOrderSplittingService getBhgeOrderSplittingService()
	{
		return bhgeOrderSplittingService;
	}

	/**
	 * @param bhgeOrderSplittingService
	 *           the bhgeOrderSplittingService to set
	 */
	public void setBhgeOrderSplittingService(final DefaultBHGEOrderSplittingService bhgeOrderSplittingService)
	{
		this.bhgeOrderSplittingService = bhgeOrderSplittingService;
	}

	private static Map<String, String> paymentType;

	static
	{
		paymentType = new HashMap<>();
		paymentType.put("VISA", "SPVI");
		paymentType.put("MC", "SPMC");
		paymentType.put("AMEX", "SPAX");
	}

	@Override
	public CartData updateCheckoutCart(final CartData cartData)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		if (cartModel == null)
		{
			return null;
		}
		AddressModel deliverAddress = null;
		// set payment type
		if (cartData.getPaymentType() != null)
		{
			LOG.info("Payment Type-------------" + cartData.getPaymentType().getCode());
			final String newPaymentTypeCode = cartData.getPaymentType().getCode();

			setPaymentTypeForCart(newPaymentTypeCode, cartModel);
		}
		else
		{
			deliverAddress = cartModel.getDeliveryAddress();
			cartModel.setDeliveryAddress(null);
			cartModel.setDeliveryMode(null);
			cartModel.setPaymentInfo(null);
		}

		// set purchase order number
		if (cartData.getPurchaseOrderNumber() != null)
		{
			cartModel.setPurchaseOrderNumber(cartData.getPurchaseOrderNumber());
		}

		//Setting EndCutomer PO
		if (cartData.getEndCustomerPo() != null)
		{
			cartModel.setEndCustomerRefNum(cartData.getEndCustomerPo());
		}

		//Setting EndCutomer PO
		if (cartData.getEndUserNumber() != null)
		{
			cartModel.setEndUserNumber(cartData.getEndUserNumber());
		}

		// set delivery address
		if (cartData.getDeliveryAddress() != null)
		{
			deliverAddress = cartModel.getDeliveryAddress();
			if (deliverAddress != null)
			{
				cartModel.setDeliveryAddress(deliverAddress);
				getModelService().save(cartModel);
				getModelService().refresh(cartModel);
			}
			else
			{
				setDeliveryAddress(cartData.getDeliveryAddress());
			}
		}

		// set End User address
		if (cartData.getEnduserAddress() != null)
		{
			final AddressModel enduserAddress = cartModel.getRMAEndUserAddress();
			if (enduserAddress != null)
			{
				cartModel.setRMAEndUserAddress(enduserAddress);
				getModelService().save(cartModel);
			}
			else if (!userService.isAnonymousUser(userService.getCurrentUser()))
			{
				setEnduserAddress(cartData.getEnduserAddress());
			}
		}

		//Set Delivery Point
		if (cartData.getDeliveryPoint() != null)
		{
			cartModel.setDeliveryPoint(cartData.getDeliveryPoint());
		}

		//Set Delivery Carrier
		if (cartData.getDeliveryCarrier() != null)
		{
			final ShippingCarrierMethod deliveryCarrier = ShippingCarrierMethod.valueOf(cartData.getDeliveryCarrier());
			cartModel.setShippingCarrierMethod(deliveryCarrier);
		}

		if (cartData.getRequestedHdrDeliveryDate() != null)
		{
			try
			{
				if(cartData.getCartType().equalsIgnoreCase("FILM"))
				{
					cartModel.setReqHeaderDeliveryDateFilm(new SimpleDateFormat("dd-MM-yyyy").parse(cartData.getRequestedHdrDeliveryDate()));
				}
				else
				{
					cartModel.setReqHeaderDeliveryDate(new SimpleDateFormat("dd-MM-yyyy").parse(cartData.getRequestedHdrDeliveryDate()));
				}
			}
			catch (final Exception ex)
			{
				LOG.info(ex.getMessage());
			}
		}
		if (cartData.getNotes() != null)
		{
			cartModel.setShippingRemarks(cartData.getNotes());
		}


		if (cartData.getShipToContactName() != null)
		{
			cartModel.setShipToContactName(cartData.getShipToContactName());
		}


		if (cartData.getShipToContactPhone() != null)
		{
			cartModel.setShipToContactPhone(cartData.getShipToContactPhone());
		}

		if (cartData.getOrderConfirmation() != null)
		{
			cartModel.setOrderConfirmationEMail(cartData.getOrderConfirmation());
		}

		if (cartData.getShipNotificationEmail() != null)
		{
			cartModel.setShipNotificationEmail(cartData.getShipNotificationEmail());
		}

		if (cartData.getInvoiceEmail() != null)
		{
			cartModel.setInvoiceEmail(cartData.getInvoiceEmail());
		}

		if (cartData.getIsSpecialDiscountPresent() != null)
		{
			cartModel.setIsSpecialDiscountPresent(cartData.getIsSpecialDiscountPresent());
		}

		if (cartData.getSpecialDiscountCode() != null)
		{
			cartModel.setSpecialDiscountCode(cartData.getSpecialDiscountCode());
		}

		if (cartData.getDeliveryAccount() != null)
		{
			cartModel.setDeliveryAccountNum(cartData.getDeliveryAccount());
		}

		if (cartData.getIsGovernment() != null)
		{
			cartModel.setIsGovernment(cartData.getIsGovernment());
		}

		if (cartData.getIsNuclearOppurtunity() != null)
		{
			cartModel.setIsNuclearOppurtunity(cartData.getIsNuclearOppurtunity());
		}

		if (cartData.getIsExport() != null)
		{
			cartModel.setIsExport(cartData.getIsExport());
		}

		if (cartData.getPlanToExport() != null)
		{
			cartModel.setExportAddressText(cartData.getPlanToExport());
		}

		if (StringUtils.isNotEmpty(cartData.getDeliveryOptions()))
		{
			if ("ADD".equalsIgnoreCase(cartData.getDeliveryOptions()))
			{
				// final ShippingChargeMethod addMethod=;
				cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("ADD"));
			}
			else if ("prepay".equalsIgnoreCase(cartData.getDeliveryOptions())
					|| ("Pre-pay & Add".equalsIgnoreCase(cartData.getDeliveryOptions())))
			{
				cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("PREPAY"));
			}
			else if ("collect".equalsIgnoreCase(cartData.getDeliveryOptions()))
			{
				cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("COLLECT"));
			}
		}

		if (StringUtils.isNotEmpty(cartData.getAlternateContactName()))
		{
			cartModel.setShippingConatct2Name(cartData.getAlternateContactName());
		}
		if (StringUtils.isNotEmpty(cartData.getAlternateContactNumber()))
		{
			cartModel.setShippingConatct2Number(cartData.getAlternateContactNumber());
		}
		if (StringUtils.isNotEmpty(cartData.getAlternateContactEmail()))
		{
			cartModel.setAlternateContactEmail(cartData.getAlternateContactEmail());
		}
		if (cartData.getIsBuyer() != null)
		{
			cartModel.setIsBuyer(cartData.getIsBuyer());
		}

		// set quote request description
		if (cartData.getB2BComment() != null)
		{
			final B2BCommentModel b2bComment = getModelService().create(B2BCommentModel.class);
			b2bComment.setComment(cartData.getB2BComment().getComment());
			getB2bCommentService().addComment(cartModel, b2bComment);
		}

		getModelService().save(cartModel);
		getModelService().refresh(cartModel);
		return getCheckoutCart();

	}

	//Added for ds checkout spartacus migration - start
	@Override
	public CartData updateCheckoutCartWs(final CartData cartData, String checkoutCartId)
	{
		//final CartModel cartModel = bhgeCartService.getSessionCart();

		final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
		if (cartModel == null)
		{
			return null;
		}
		AddressModel deliverAddress = null;
		AddressModel payerAddress=null;
		// set payment type
		if (cartData.getPaymentType() != null)
		{
			LOG.info("Payment Type-------------" + cartData.getPaymentType().getCode());
			final String newPaymentTypeCode = cartData.getPaymentType().getCode();

			setPaymentTypeForCart(newPaymentTypeCode, cartModel);
		}
		else
		{
			deliverAddress = cartModel.getDeliveryAddress();
			cartModel.setDeliveryAddress(null);
			cartModel.setDeliveryMode(null);
			cartModel.setPaymentInfo(null);
		}

		// set purchase order number
		if (cartData.getPurchaseOrderNumber() != null)
		{
			cartModel.setPurchaseOrderNumber(cartData.getPurchaseOrderNumber());
		}

		//Setting EndCutomer PO
		if (cartData.getEndCustomerPo() != null)
		{
			cartModel.setEndCustomerRefNum(cartData.getEndCustomerPo());
		}

		//Setting EndCutomer PO
		if (cartData.getEndUserNumber() != null)
		{
			cartModel.setEndUserNumber(cartData.getEndUserNumber());
		}

		// set delivery address
		if (cartData.getDeliveryAddress() != null)
		{
			deliverAddress = cartModel.getDeliveryAddress();
			if (deliverAddress != null)
			{
				cartModel.setDeliveryAddress(deliverAddress);
				getModelService().save(cartModel);
				getModelService().refresh(cartModel);
			}
			else
			{
				setDeliveryAddressWs(cartData.getDeliveryAddress(),checkoutCartId);
			}
		}

		if(cartData.getPayerAddress()!=null)
		{
			payerAddress=cartModel.getPayerAddress();
			if(payerAddress!=null)
			{
				cartModel.setPayerAddress(payerAddress);
				getModelService().save(cartModel);
				getModelService().refresh(cartModel);

			}
			else
			{
				setPayerAddressWs(cartData.getPayerAddress(),checkoutCartId);
			}

		}

		// set End User address
		if (cartData.getEnduserAddress() != null)
		{
			final AddressModel enduserAddress = cartModel.getRMAEndUserAddress();
			if (enduserAddress != null)
			{
				cartModel.setRMAEndUserAddress(enduserAddress);
				getModelService().save(cartModel);
			}
			else if (!userService.isAnonymousUser(userService.getCurrentUser()))
			{
				setEnduserAddress(cartData.getEnduserAddress());
			}
		}

		//Set Delivery Point
		if (cartData.getDeliveryPoint() != null)
		{
			cartModel.setDeliveryPoint(cartData.getDeliveryPoint());
		}

		//Set Delivery Carrier
		if (cartData.getDeliveryCarrier() != null)
		{
			final ShippingCarrierMethod deliveryCarrier = ShippingCarrierMethod.valueOf(cartData.getDeliveryCarrier());
			cartModel.setShippingCarrierMethod(deliveryCarrier);
		}

		if (cartData.getRequestedHdrDeliveryDate() != null)
		{
			try
			{
				if(cartData.getCartType().equalsIgnoreCase("FILM"))
				{
					cartModel.setReqHeaderDeliveryDateFilm(new SimpleDateFormat("dd-MM-yyyy").parse(cartData.getRequestedHdrDeliveryDate()));
				}
				else
				{
					cartModel.setReqHeaderDeliveryDate(new SimpleDateFormat("dd-MM-yyyy").parse(cartData.getRequestedHdrDeliveryDate()));
				}
			}
			catch (final Exception ex)
			{
				LOG.info(ex.getMessage());
			}
		}
		if (cartData.getNotes() != null)
		{
			cartModel.setShippingRemarks(cartData.getNotes());
		}


		if (cartData.getShipToContactName() != null)
		{
			cartModel.setShipToContactName(cartData.getShipToContactName());
		}


		if (cartData.getShipToContactPhone() != null)
		{
			cartModel.setShipToContactPhone(cartData.getShipToContactPhone());
		}

		if (cartData.getOrderConfirmation() != null)
		{
			cartModel.setOrderConfirmationEMail(cartData.getOrderConfirmation());
		}

		if (cartData.getShipNotificationEmail() != null)
		{
			cartModel.setShipNotificationEmail(cartData.getShipNotificationEmail());
		}

		if (cartData.getInvoiceEmail() != null)
		{
			cartModel.setInvoiceEmail(cartData.getInvoiceEmail());
		}

		if (cartData.getIsSpecialDiscountPresent() != null)
		{
			cartModel.setIsSpecialDiscountPresent(cartData.getIsSpecialDiscountPresent());
		}

		if (cartData.getSpecialDiscountCode() != null)
		{
			cartModel.setSpecialDiscountCode(cartData.getSpecialDiscountCode());
		}

		if (cartData.getDeliveryAccount() != null)
		{
			cartModel.setDeliveryAccountNum(cartData.getDeliveryAccount());
		}

		if (cartData.getIsGovernment() != null)
		{
			cartModel.setIsGovernment(cartData.getIsGovernment());
		}

		if (cartData.getIsNuclearOppurtunity() != null)
		{
			cartModel.setIsNuclearOppurtunity(cartData.getIsNuclearOppurtunity());
		}

		if (cartData.getIsExport() != null)
		{
			cartModel.setIsExport(cartData.getIsExport());
		}

		if (cartData.getPlanToExport() != null)
		{
			cartModel.setExportAddressText(cartData.getPlanToExport());
		}

		if (StringUtils.isNotEmpty(cartData.getDeliveryOptions()))
		{
			if ("ADD".equalsIgnoreCase(cartData.getDeliveryOptions()))
			{
				// final ShippingChargeMethod addMethod=;
				cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("ADD"));
			}
			else if ("prepay".equalsIgnoreCase(cartData.getDeliveryOptions())
					|| ("Pre-pay & Add".equalsIgnoreCase(cartData.getDeliveryOptions())))
			{
				cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("PREPAY"));
			}
			else if ("collect".equalsIgnoreCase(cartData.getDeliveryOptions()))
			{
				cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("COLLECT"));
			}
		}

		if (StringUtils.isNotEmpty(cartData.getAlternateContactName()))
		{
			cartModel.setShippingConatct2Name(cartData.getAlternateContactName());
		}
		if (StringUtils.isNotEmpty(cartData.getAlternateContactNumber()))
		{
			cartModel.setShippingConatct2Number(cartData.getAlternateContactNumber());
		}
		if (StringUtils.isNotEmpty(cartData.getAlternateContactEmail()))
		{
			cartModel.setAlternateContactEmail(cartData.getAlternateContactEmail());
		}
		if (cartData.getIsBuyer() != null)
		{
			cartModel.setIsBuyer(cartData.getIsBuyer());
		}

		// set quote request description
		if (cartData.getB2BComment() != null)
		{
			final B2BCommentModel b2bComment = getModelService().create(B2BCommentModel.class);
			b2bComment.setComment(cartData.getB2BComment().getComment());
			getB2bCommentService().addComment(cartModel, b2bComment);
		}
		// set InvoiceContact
		if (cartData.getInvoiceContact() != null)
		{
			cartModel.setInvoiceContact(cartData.getInvoiceContact());
		}

		// set Invoice Phone
		if (cartData.getInvoicePhone() != null)
		{
			cartModel.setInvoicePhone(cartData.getInvoicePhone());
		}

		// set SOA Contact
		if (cartData.getSoaContact() != null)
		{
			cartModel.setSoaContact(cartData.getSoaContact());
		}

		// set  SOA Phone
		if(cartData.getSoaPhone() != null)
		{
			cartModel.setSoaPhone(cartData.getSoaPhone());
		}

		getModelService().save(cartModel);
		getModelService().refresh(cartModel);
		return getCheckoutCart();

	}
	//Added for ds checkout spartacus migration - end

	public List<ShippingCarrierMethodData> retriveCarrierMethods(final String shippingCharge)
	{
		final List<EnumerationValueModel> listOfvalues = bhgeCartService.getShippingCarrierMethods(shippingCharge);
		return bhgeCustomerPopulator.populatCarrierMethod(listOfvalues, shippingCharge);

	}

	public void getSameDayShipmentDetails(final Model model)
	{
		//Same Day Shipment Changes Starts //
		final CartModel sessionCartModel = bhgeCartService.getSessionCart();
		boolean isSDSEnabledSalesArea = false;
		final AddressModel defaultShipTo = sessionCartModel.getDeliveryAddress();
		AddressData defaultAddressData = null;
		if (defaultShipTo != null)
		{
			defaultAddressData = addressConverter.convert(defaultShipTo);
		}
		String countryCode = "";
		if (defaultAddressData != null && defaultAddressData.getCountry() != null
				&& defaultAddressData.getCountry().getIsocode() != null)
		{
			countryCode = defaultAddressData.getCountry().getIsocode();
		}
		boolean showSDSValidationmsg = false;
		boolean isSDSDisableCheck = false;
		int entrynumber = -1;
		if (sessionCartModel.getSavedBy() != null)
		{
			for (final AbstractOrderEntryModel entry : sessionCartModel.getEntries())
			{
				if (entry.getIsSameDayShipEnabled().booleanValue())
				{
					LOG.info("SDS Enabled ***********" + entry.getIsSameDayShipEnabled());
					isSDSDisableCheck = true;
					entrynumber = entry.getEntryNumber().intValue();
					break;
				}
			}
		}
		if (sessionCartModel.getIsShipCompleteOrder() != null && (sessionCartModel.getIsShipCompleteOrder().booleanValue()))
		{
			if (isSDSEnabledForSalesArea(getSalesArea()))
			{
				for (final AbstractOrderEntryModel orderEntryModel : sessionCartModel.getEntries())
				{
					if (orderEntryModel.getQuantity() != null)
					{
						if (orderEntryModel.getPlant() != null && orderEntryModel.getAvailableQuantity() != null)
						{
							final long requestedQuantity = orderEntryModel.getQuantity() != null
									? orderEntryModel.getQuantity().longValue()
									: 0;
							final long availableQuantity = Long.parseLong(orderEntryModel.getAvailableQuantity());
							if (availableQuantity >= requestedQuantity)
							{
								if (isSameDayShipmentEnabled(getSalesArea(), orderEntryModel.getPlant())
										&& isDomesticPlant(orderEntryModel.getPlant(), countryCode, getSalesArea())
										&& checkCutOffTime(orderEntryModel.getPlant(), getSalesArea()))
								{
									//model.addAttribute("isSDSCartEnabled",Boolean.TRUE);
									orderEntryModel.setIsSameDayShipEnabled(Boolean.TRUE);
									modelService.save(orderEntryModel);
								}
								else
								{
									orderEntryModel.setIsSameDayShipChecked(Boolean.FALSE);
									orderEntryModel.setIsSameDayShipEnabled(Boolean.FALSE);
									orderEntryModel.setSameDayShipmentCost(DEFAULT_SHIPMENT_COST);
									modelService.save(orderEntryModel);
								}
							}
							else
							{
								orderEntryModel.setIsSameDayShipChecked(Boolean.FALSE);
								orderEntryModel.setIsSameDayShipEnabled(Boolean.FALSE);
								orderEntryModel.setSameDayShipmentCost(DEFAULT_SHIPMENT_COST);
								modelService.save(orderEntryModel);
							}
						}
					}

				}
				//SDS Criteria selection
				for (final AbstractOrderEntryModel orderEntryModel : sessionCartModel.getEntries())
				{
					if (orderEntryModel.getQuantity() != null)
					{
						if (orderEntryModel.getPlant() != null && orderEntryModel.getAvailableQuantity() != null)
						{
							if (isSameDayShipmentEnabled(getSalesArea(), orderEntryModel.getPlant()))
							{
								//isSalesAreaPlantEnabled=true;
								orderEntryModel.setIsPlantEnabled(Boolean.TRUE);
								modelService.save(orderEntryModel);
							}
							if (isDomesticPlant(orderEntryModel.getPlant(), countryCode, getSalesArea()))
							{
								//isDomesticPlant=true;
								orderEntryModel.setIsDomesticPlant(Boolean.TRUE);
								modelService.save(orderEntryModel);
							}
							if (!checkCutOffTime(orderEntryModel.getPlant(), getSalesArea()))
							{
								//isCutOffTime=true;
								orderEntryModel.setIsCutOffTime(Boolean.TRUE);
								modelService.save(orderEntryModel);
							}
							final long requestedQuantity = orderEntryModel.getQuantity() != null
									? orderEntryModel.getQuantity().longValue()
									: 0;
							if (orderEntryModel.getAvailableQuantity() != null && !orderEntryModel.getAvailableQuantity().isEmpty())
							{
								final long availableQuantity = Long.parseLong(orderEntryModel.getAvailableQuantity());
								if (availableQuantity >= requestedQuantity)
								{
									//isQuanAvailable=true;
									orderEntryModel.setIsQtyAvailable(Boolean.TRUE);
									modelService.save(orderEntryModel);
								}
							}
						}
					}
					modelService.save(orderEntryModel);
				}
				if (isSDSDisableCheck)
				{
					for (final AbstractOrderEntryModel entry : sessionCartModel.getEntries())
					{
						if (!entry.getIsSameDayShipEnabled().booleanValue() && (entrynumber == entry.getEntryNumber().intValue()))
						{
							LOG.info(
									"SDS Disabled ***********" + showSDSValidationmsg + "************" + entry.getIsSameDayShipEnabled());
							showSDSValidationmsg = true;
							break;
						}
					}
				}
				isSDSEnabledSalesArea = true;
			}
		}
		else
		{
			LOG.info("Check SDS Enabled for Sales Area for Complete Shipment");
			if (isSDSEnabledForSalesArea(getSalesArea()))
			{
				isSDSEnabledSalesArea = true;
			}
		}
		model.addAttribute("showSDSValidationmsg", Boolean.valueOf(showSDSValidationmsg));
		model.addAttribute("isSDSEnabledSalesArea", Boolean.valueOf(isSDSEnabledSalesArea));
	}

	private String getSalesArea()
	{
		final String userSalesRegion = bhgeUserProfileFacade.getUserDefaultSalesRegion();
		final String[] salesArea = userSalesRegion.split("_");
		return salesArea[0];
	}

	public boolean isSDSEnabledForSalesArea(final String salesArea)
	{
		return bhgeSapPlantLogSysOrgService.checkSalesAreaSDSEnabled(salesArea);
	}

	public boolean isSameDayShipmentEnabled(final String salesArea, final String plant)
	{
		return bhgeSapPlantLogSysOrgService.checkPlantSDSEnabled(salesArea, plant);
	}

	public boolean isDomesticPlant(final String plant, final String countryCode, final String salesArea)
	{
		boolean isEnabledFlag = false;
		final String countryIsoCode = bhgeSapPlantLogSysOrgService.getCountryCode(plant, salesArea);
		if (countryCode != null && countryIsoCode != null)
		{
			if (countryIsoCode.equalsIgnoreCase(countryCode))
			{
				isEnabledFlag = true;
			}
		}
		return isEnabledFlag;
	}

	public boolean checkCutOffTime(final String plant, final String salesArea)
	{
		boolean isEnabledFlag = false;
		final String timeZone = bhgeSapPlantLogSysOrgService.getTimeZone(plant, salesArea);
		if (checkCuttOffTimeForPlant(timeZone, plant))
		{
			isEnabledFlag = true;
		}
		return isEnabledFlag;
	}

	protected boolean checkCuttOffTimeForPlant(final String timeZone, final String plant)
	{
		boolean isCrossedTime = false;
		if (timeZone != null && !timeZone.isEmpty())
		{
			final TimeZone timeZoneCode = TimeZone.getTimeZone(timeZone);
			final Calendar calTZ = new GregorianCalendar(timeZoneCode);
			final Calendar cal = Calendar.getInstance();
			cal.set(Calendar.YEAR, calTZ.get(Calendar.YEAR));
			cal.set(Calendar.MONTH, calTZ.get(Calendar.MONTH));
			cal.set(Calendar.DAY_OF_MONTH, calTZ.get(Calendar.DAY_OF_MONTH));
			cal.set(Calendar.HOUR_OF_DAY, calTZ.get(Calendar.HOUR_OF_DAY));
			cal.set(Calendar.MINUTE, calTZ.get(Calendar.MINUTE));
			cal.set(Calendar.SECOND, calTZ.get(Calendar.SECOND));
			cal.set(Calendar.MILLISECOND, calTZ.get(Calendar.MILLISECOND));
			cal.setTimeZone(timeZoneCode);
			final int cutOffTime = Integer.parseInt(bhgeSapPlantLogSysOrgService.getCutOffTime(plant));
			if (cal.get(Calendar.HOUR_OF_DAY) >= cutOffTime)
			{
				isCrossedTime = true;
			}
		}
		return isCrossedTime;
	}

	public void recalculate() throws CalculationException
	{
		bhgeCalculationService.recalculate(bhgeCartService.getSessionCart());
	}


	public String uploadOrderAttachment(final MultipartFile file)
	{
		try
		{
			if ((null != file) && ((!file.isEmpty())))
			{

				final MediaModel mediaModel = bhgeCartService.uploadOrderAttachment(file);
				if (null != mediaModel)
				{
					return mediaModel.getRealFileName();
				}
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error in uploading attachment to the Order." + ExceptionUtils.getStackTrace(e));
		}
		return null;
	}

	// Added for DS Store Spartacus migration
	public String uploadOrderAttachmentWs(CartModel cartModel, final MultipartFile file, boolean isEUC)
	{
		try
		{
			if ((null != file) && ((!file.isEmpty())))
			{

				final MediaModel mediaModel = bhgeCartService.uploadOrderAttachmentWs(cartModel, file, isEUC);
				if (null != mediaModel)
				{
					return mediaModel.getRealFileName();
				}
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error in uploading attachment to the Order." + ExceptionUtils.getStackTrace(e));
		}
		return null;
	}

	@Override
	public <T extends AbstractOrderData> T placeOrder(final PlaceOrderData placeOrderData) throws InvalidCartException
	{
		// term must be checked
		if (!placeOrderData.getTermsCheck().equals(Boolean.TRUE))
		{
			throw new EntityValidationException(getLocalizedString(CART_CHECKOUT_TERM_UNCHECKED));
		}

		// for CARD type, transaction must be authorized before placing order
		final boolean isCardtPaymentType = CheckoutPaymentType.CARD.equals(getCart().getPaymentType());
		if (isCardtPaymentType)
		{
			final List<PaymentTransactionModel> transactions = getCart().getPaymentTransactions();
			boolean authorized = false;
			for (final PaymentTransactionModel transaction : transactions)
			{
				for (final PaymentTransactionEntryModel entry : transaction.getEntries())
				{
					if (entry.getType().equals(PaymentTransactionType.AUTHORIZATION)
							&& TransactionStatus.ACCEPTED.name().equals(entry.getTransactionStatus()))
					{
						authorized = true;
						break;
					}
				}
			}
			if (!authorized)
			{
				// FIXME - change error message
				throw new EntityValidationException(getLocalizedString(CART_CHECKOUT_TRANSACTION_NOT_AUTHORIZED));
			}
		}

		if (isValidCheckoutCart(placeOrderData))
		{
			// validate quote negotiation
			if (placeOrderData.getNegotiateQuote() != null && placeOrderData.getNegotiateQuote().equals(Boolean.TRUE))
			{
				if (StringUtils.isBlank(placeOrderData.getQuoteRequestDescription()))
				{
					throw new EntityValidationException(getLocalizedString(CART_CHECKOUT_NO_QUOTE_DESCRIPTION));
				}
				else
				{
					final B2BCommentData b2BComment = new B2BCommentData();
					b2BComment.setComment(placeOrderData.getQuoteRequestDescription());

					final CartData cartData = new CartData();
					cartData.setB2BComment(b2BComment);

					updateCheckoutCart(cartData);
				}
			}

			// validate replenishment
			if (placeOrderData.getReplenishmentOrder() != null && placeOrderData.getReplenishmentOrder().equals(Boolean.TRUE))
			{
				if (placeOrderData.getReplenishmentStartDate() == null)
				{
					throw new EntityValidationException(getLocalizedString(CART_CHECKOUT_REPLENISHMENT_NO_STARTDATE));
				}

				if (placeOrderData.getReplenishmentRecurrence().equals(B2BReplenishmentRecurrenceEnum.WEEKLY)
						&& CollectionUtils.isEmpty(placeOrderData.getNDaysOfWeek()))
				{
					throw new EntityValidationException(getLocalizedString(CART_CHECKOUT_REPLENISHMENT_NO_FREQUENCY));
				}

				final TriggerData triggerData = new TriggerData();
				populateTriggerDataFromPlaceOrderData(placeOrderData, triggerData);

				return (T) scheduleOrder(triggerData);
			}

			return (T) super.placeOrder();
		}

		return null;
	}


	@Override
	protected boolean isValidCheckoutCart(final PlaceOrderData placeOrderData)
	{
		final CartData cartData = getCheckoutCart();
		final boolean valid = true;

		if (!cartData.isCalculated())
		{
			throw new EntityValidationException(getLocalizedString(CART_CHECKOUT_NOT_CALCULATED));
		}

		if (cartData.getDeliveryAddress() == null)
		{
			throw new EntityValidationException(getLocalizedString(CART_CHECKOUT_DELIVERYADDRESS_INVALID));
		}

		/*
		 * if (cartData.getDeliveryMode() == null) { throw new
		 * EntityValidationException(getLocalizedString(CART_CHECKOUT_DELIVERYMODE_INVALID)); }
		 */

		final boolean accountPaymentType = CheckoutPaymentType.ACCOUNT.getCode().equals(cartData.getPaymentType().getCode());
		if (!accountPaymentType && cartData.getPaymentInfo() == null)
		{
			throw new EntityValidationException(getLocalizedString(CART_CHECKOUT_PAYMENTINFO_EMPTY));
		}

		if (Boolean.TRUE.equals(placeOrderData.getNegotiateQuote()) && !cartData.getQuoteAllowed())
		{
			throw new EntityValidationException(getLocalizedString(CART_CHECKOUT_QUOTE_REQUIREMENTS_NOT_SATISFIED));
		}

		return valid;
	}

	public CartModel getSessionCartModel()
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		return cartModel;
	}

	@Resource(name = "bhgeRMAStatusFacade")
	private BHGERMAStatusFacade bhgeRMAStatusFacade;

	public List<OrderModel> placeOrderWithSplit() throws InvalidCartException
	{

		final CartModel parentCart = bhgeCartService.getSessionCart();
		List<OrderModel> orderDataList = new ArrayList<>();
		if (Objects.nonNull(parentCart.getCommerceType()) && (parentCart.getCommerceType().toString().equalsIgnoreCase("RETURNS")))
		{
			orderDataList = bhgeRmaFormFacade.processRMAOrder();
			bhgeRMAStatusFacade.removeRmaStatusDataFromCache();
		}
		else
		{
			final CommerceSplitOrderParameters parameters = new CommerceSplitOrderParameters();
			parameters.setEnableHooks(true);
			parameters.setParentCart(parentCart);
			final List<CartModel> childCarts = getBhgeOrderSplittingService().splitOrder(parameters);
			if (CollectionUtils.isNotEmpty(childCarts))
			{
				for (final CartModel cartModel : childCarts)
				{
					final OrderData orderData = new OrderData();
					if (cartModel != null)
					{

						if (childCarts.size() > 1)
						{
							//							cartModel = bhgeCartService.getRealTimePriceAndAvailabiltyDetails(cartModel,
							//									cartModel.getIsShipCompleteOrder());
							try
							{
								bhgeCalculationService.recalculate(cartModel);
							}
							catch (final Exception e)
							{
								LOG.error("Error occured while executing the calculate method - processPrice() " + e);
							}
						}

						final UserModel currentUser = userService.getCurrentUser();
						if (cartModel.getUser().equals(currentUser) || getCheckoutCustomerStrategy().isAnonymousCheckout())
						{
							beforePlaceOrder(cartModel);

							final OrderModel orderModel = placeOrder(cartModel);
							// : Following two lines needs to be removed and Order total
							// logic should be implemented.
							orderModel.setTotalPrice(cartModel.getTotalPrice());

							if (Objects.nonNull(cartModel.getCommerceType()))
							{
								orderModel.setCommerceType(cartModel.getCommerceType());
							}
							else
							{
								orderModel.setCommerceType(BHGERMACommerceType.BUY);
							}
							if (cartModel.getCartType() != null && StringUtils.isNotBlank(cartModel.getCartType().getCode()))
							{
								if (cartModel.getCartType().getCode().equalsIgnoreCase("FILM"))
								{
									orderModel.setReqHeaderDeliveryDateFilm(cartModel.getReqHeaderDeliveryDateFilm());
									orderModel.setReqHeaderDeliveryDate(null);
								}
								if (cartModel.getCartType().getCode().equalsIgnoreCase("NONFILM"))
								{
									orderModel.setReqHeaderDeliveryDateFilm(null);
									orderModel.setReqHeaderDeliveryDate(cartModel.getReqHeaderDeliveryDate());
								}
							}
							modelService.save(orderModel);
							modelService.refresh(orderModel);

							afterPlaceOrder(cartModel, orderModel);

							// Convert the order to an order data
							bhgeOrderPopulator.populate(orderModel, orderData);
							orderDataList.add(orderModel);
						}

					}
				}
			}
		}

		return orderDataList;
	}

	public void removeAttachments()
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		cartModel.setAttachments(null);
		modelService.save(cartModel);
	}

	// Added for DS Store spartacus migration
	public void removeAttachmentsWs(CartModel cartModel,boolean isEUC)
	{
		//final CartModel cartModel = bhgeCartService.getSessionCart();
		if(cartModel!=null ) {
			if(BooleanUtils.isTrue(isEUC)) {
				cartModel.setEuc(null);
			}
			else
			{
				cartModel.setAttachments(null);
			}
			modelService.save(cartModel);
		}
	}

	@Override
	protected void afterPlaceOrder(final CartModel cartModel, final OrderModel orderModel)
	{
		if (orderModel != null)
		{
			bhgeCartService.removeSessionCart();
			final CartModel cartModel1 = bhgeCartService.getSessionCart();
			if (cartModel1 != null)
			{
				getModelService().remove(cartModel);
			}
			//			getModelService().refresh(orderModel);
		}

		// Retrieve a session cart.
		//		bhgeCartService.getSessionCart();
	}


	public void createAndSaveShippingAddress(final BHGEShippingAddressFormData bhgeAddressFormData,
											 final boolean userConsentForSave)
	{

		final CartModel cartModel = bhgeCartService.getSessionCart();

		final UserModel user = userService.getCurrentUser();
		final AddressModel shippingAddress = modelService.create(AddressModel.class);
		CountryModel countryModel = null;

		shippingAddress.setStreetnumber(bhgeAddressFormData.getLine2());
		shippingAddress.setStreetname(bhgeAddressFormData.getLine1());
		shippingAddress.setTown(bhgeAddressFormData.getTown());
		shippingAddress.setPostalcode(bhgeAddressFormData.getPostalCode());
		shippingAddress.setOwner(user);

		if (null != bhgeAddressFormData.getCountry() && StringUtils.isNotEmpty(bhgeAddressFormData.getCountry().getIsocode()))
		{
			countryModel = getCommonI18NService().getCountry(bhgeAddressFormData.getCountry().getIsocode());
			shippingAddress.setCountry(countryModel);
		}

		if (null != countryModel && null != bhgeAddressFormData.getRegion()
				&& StringUtils.isNotEmpty(bhgeAddressFormData.getRegion().getIsocode()))
		{
			final RegionModel regionModel = getCommonI18NService().getRegion(countryModel,
					bhgeAddressFormData.getRegion().getIsocode());
			shippingAddress.setRegion(regionModel);
		}

		shippingAddress.setDeliveryPoint(bhgeAddressFormData.getDeliveryPoint());
		shippingAddress.setCompany(bhgeAddressFormData.getCompanyName());
		shippingAddress.setTown(bhgeAddressFormData.getTown());
		shippingAddress.setFirstname(bhgeAddressFormData.getFirstName());
		if (userConsentForSave)
		{
			shippingAddress.setSaveForFuture(Boolean.TRUE);
		}
		// Saving the shipping address
		cartModel.setDeliveryAddress(shippingAddress);
		modelService.save(cartModel);

		final CartData cartData = getCheckoutCart();


		AddressData addressData=addressConverter.convert(cartModel.getDeliveryAddress());
		if(null!=cartModel.getDeliveryAddress() && StringUtils.isNotBlank(cartModel.getDeliveryAddress().getSapCustomerID())){
			addressData.setSapCustomerID(cartModel.getDeliveryAddress().getSapCustomerID());
		}
		cartData.setDeliveryAddress(addressData);
	}


	/**
	 * Method to save soldToaddress for guest user
	 *
	 * @param bhgeAddressFormData
	 * @param userConsentForSave
	 */
	public void createAndSaveSoldtoAddress(final BHGEShippingAddressFormData bhgeAddressFormData)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();

		final UserModel user = userService.getCurrentUser();
		final AddressModel soldtoAddress = modelService.create(AddressModel.class);
		CountryModel countryModel = null;

		soldtoAddress.setStreetnumber(bhgeAddressFormData.getLine2());
		soldtoAddress.setStreetname(bhgeAddressFormData.getLine1());
		soldtoAddress.setTown(bhgeAddressFormData.getTown());
		soldtoAddress.setPostalcode(bhgeAddressFormData.getPostalCode());
		soldtoAddress.setOwner(user);

		if (null != bhgeAddressFormData.getCountry() && StringUtils.isNotEmpty(bhgeAddressFormData.getCountry().getIsocode()))
		{
			countryModel = getCommonI18NService().getCountry(bhgeAddressFormData.getCountry().getIsocode());
			soldtoAddress.setCountry(countryModel);
		}

		if (null != countryModel && null != bhgeAddressFormData.getRegion()
				&& StringUtils.isNotEmpty(bhgeAddressFormData.getRegion().getIsocode()))
		{
			final RegionModel regionModel = getCommonI18NService().getRegion(countryModel,
					bhgeAddressFormData.getRegion().getIsocode());
			soldtoAddress.setRegion(regionModel);
		}

		soldtoAddress.setDeliveryPoint(bhgeAddressFormData.getDeliveryPoint());
		soldtoAddress.setCompany(bhgeAddressFormData.getCompanyName());
		soldtoAddress.setTown(bhgeAddressFormData.getTown());
		soldtoAddress.setFirstname(bhgeAddressFormData.getFirstName());
		// Saving the sold to address
		cartModel.setPaymentAddress(soldtoAddress);
		modelService.save(cartModel);
	}


	public void createAndSaveEnduserAddress(final BHGEShippingAddressFormData bhgeAddressFormData,
											final boolean userConsentForSave)
	{

		final CartModel cartModel = bhgeCartService.getSessionCart();

		final UserModel user = userService.getCurrentUser();
		final AddressModel shippingAddress = modelService.create(AddressModel.class);
		CountryModel countryModel = null;

		shippingAddress.setStreetnumber(bhgeAddressFormData.getLine2());
		shippingAddress.setStreetname(bhgeAddressFormData.getLine1());
		shippingAddress.setTown(bhgeAddressFormData.getTown());
		shippingAddress.setPostalcode(bhgeAddressFormData.getPostalCode());
		shippingAddress.setOwner(user);
		shippingAddress.setEndUserType(bhgeAddressFormData.getEndUserType());
		if (null != bhgeAddressFormData.getCountry() && StringUtils.isNotEmpty(bhgeAddressFormData.getCountry().getIsocode()))
		{
			countryModel = getCommonI18NService().getCountry(bhgeAddressFormData.getCountry().getIsocode());
			shippingAddress.setCountry(countryModel);
		}

		if (null != countryModel && null != bhgeAddressFormData.getRegion()
				&& StringUtils.isNotEmpty(bhgeAddressFormData.getRegion().getIsocode()))
		{
			final RegionModel regionModel = getCommonI18NService().getRegion(countryModel,
					bhgeAddressFormData.getRegion().getIsocode());
			shippingAddress.setRegion(regionModel);
		}

		//shippingAddress.setDeliveryPoint(bhgeAddressFormData.getDeliveryPoint());
		shippingAddress.setCompany(bhgeAddressFormData.getCompanyName());
		if (userConsentForSave)
		{
			shippingAddress.setSaveForFuture(Boolean.TRUE);
		}
		modelService.save(shippingAddress);
		// Saving the shipping address
		cartModel.setRMAEndUserAddress(shippingAddress);

		if(StringUtils.isNotBlank(cartModel.getEndUserNumber()))
		{
			cartModel.setEndUserNumber("");
		}
		if(null != shippingAddress) {
			bhgeAddressFormData.setId(shippingAddress.getPk().toString());
		}
		modelService.save(cartModel);
		if(null != cartModel.getRMAEndUserAddress()) {
			bhgeAddressFormData.setId(cartModel.getRMAEndUserAddress().getPk().toString());
		}

		final CartData cartData = getCheckoutCart();
		cartData.setEnduserAddress(addressConverter.convert(cartModel.getRMAEndUserAddress()));

	}

	@Override
	public AddressData getDeliveryAddressForCode(final String selectedAddressCode)
	{
		B2BUnitModel salesArea = null;
		AddressModel shipTo = null;
		if (null != sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA)
				&& sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA) instanceof B2BUnitModel)
		{
			salesArea = (B2BUnitModel) sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
			shipTo = b2bCommerceUnitService.getAddressForCode(salesArea, selectedAddressCode);
		}
		final CartModel cartModel = bhgeCartService.getSessionCart();
		cartModel.setDeliveryAddress(shipTo);
		modelService.save(cartModel);
		AddressData addressData=addressConverter.convert(cartModel.getDeliveryAddress());
		if(null!=cartModel.getDeliveryAddress() && StringUtils.isNotBlank(cartModel.getDeliveryAddress().getSapCustomerID())){
			addressData.setSapCustomerID(cartModel.getDeliveryAddress().getSapCustomerID());
		}
		return addressData;
	}


	// Added for OCC Call to set the selected ship to address in checkout - start

	@Override
	public AddressData getDeliveryAddressForCodeWs(final String selectedAddressCode, String checkoutCartId)
	{
		B2BUnitModel salesArea = null;
		AddressModel shipTo = null;

		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		salesArea = currentUser.getDefaultB2BUnit();
		/*
		 * if (null !=
		 * sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA) &&
		 * sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA)
		 * instanceof B2BUnitModel) {
		 */
		//salesArea = (B2BUnitModel) sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
		shipTo = b2bCommerceUnitService.getAddressForCode(salesArea, selectedAddressCode);
		//}
		//final CartModel cartModel = bhgeCartService.getSessionCart();
		final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
		cartModel.setDeliveryAddress(shipTo);
		modelService.save(cartModel);
		AddressData addressData=addressConverter.convert(cartModel.getDeliveryAddress());
		if(null!=cartModel.getDeliveryAddress() && StringUtils.isNotBlank(cartModel.getDeliveryAddress().getSapCustomerID())){
			addressData.setSapCustomerID(cartModel.getDeliveryAddress().getSapCustomerID());
		}
		if(null!=cartModel.getDeliveryAddress() && null!=cartModel.getDeliveryAddress().getCountry()){
			addressData.setRisk(cartModel.getDeliveryAddress().getCountry().getRisk());
			addressData.setSanctioned(cartModel.getDeliveryAddress().getCountry().getSanctioned());
		}
		return addressData;
	}

	// Added for OCC Call to set the selected ship to address in checkout - end

	public AddressData getEnduserAddressForCode(final String selectedAddressCode)
	{
		B2BUnitModel salesArea = null;
		AddressModel shipTo = null;
		if (null != sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA)
				&& sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA) instanceof B2BUnitModel)
		{
			salesArea = (B2BUnitModel) sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
			shipTo = b2bCommerceUnitService.getAddressForCode(salesArea, selectedAddressCode);
		}
		final CartModel cartModel = bhgeCartService.getSessionCart();
		cartModel.setRMAEndUserAddress(shipTo);
		modelService.save(cartModel);
		return addressConverter.convert(cartModel.getRMAEndUserAddress());
	}


	// Added for occ call to set the selected end user address in checkout - start
	@Override
	public AddressData getEnduserAddressForCodeWs(final String selectedAddressCode, String checkoutCartId)
	{
		B2BUnitModel salesArea = null;
		AddressModel shipTo = null;

		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		salesArea = currentUser.getDefaultB2BUnit();
		/*
		 * if (null !=
		 * sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA) &&
		 * sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA)
		 * instanceof B2BUnitModel) { salesArea = (B2BUnitModel)
		 * sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
		 */
		shipTo = b2bCommerceUnitService.getAddressForCode(salesArea, selectedAddressCode);
		//}
		//final CartModel cartModel = bhgeCartService.getSessionCart();
		final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
		//cartModel.setRMAEndUserAddress(shipTo);
		if (shipTo != null) {
			cartModel.setRMAEndUserAddress(shipTo);
		}
		if(null != shipTo && null != shipTo.getSapCustomerID())
		{
			String endCustomerNumbr = StringUtils.EMPTY;
			if (shipTo.getSapCustomerID().contains("_"))
			{
				endCustomerNumbr = shipTo.getSapCustomerID().substring(0, shipTo.getSapCustomerID().indexOf("_"));
			}
			else
			{
				endCustomerNumbr = shipTo.getSapCustomerID();
			}
			cartModel.setEndUserNumber(endCustomerNumbr);
		}
		modelService.save(cartModel);
		AddressData addressData = addressConverter.convert(cartModel.getRMAEndUserAddress());
		if(null!=cartModel.getDeliveryAddress() && null!=cartModel.getDeliveryAddress().getCountry()){
			addressData.setRisk(cartModel.getDeliveryAddress().getCountry().getRisk());
			addressData.setSanctioned(cartModel.getDeliveryAddress().getCountry().getSanctioned());
		}
		return addressData;
	}

	// Added for occ call to set the selected end user address in checkout - end


	@Override
	public CartData getCheckoutCart()
	{
		final CartData cartData = getCartFacade().getSessionCart();
		if (cartData != null)
		{
			//cartData.setDeliveryAddress(getDeliveryAddress());
			//cartData.setDeliveryMode(getDeliveryMode());
			//cartData.setPaymentInfo(getPaymentDetails());
		}
		return cartData;
	}

	@Override
	protected CartModel getCart()
	{
		return hasCheckoutCart() ? bhgeCartService.getSessionCart() : null;
	}

	@Override
	protected AddressData getDeliveryAddress()
	{
		final CartModel cart = bhgeCartService.getSessionCart();
		if (cart != null)
		{
			final AddressModel deliveryAddress = cart.getDeliveryAddress();
			if (deliveryAddress != null)
			{
				return getAddressConverter().convert(deliveryAddress);
				// Ensure that the delivery address is in the set of supported addresses
				/*
				 * final AddressModel supportedAddress = getDeliveryAddressModelForCode(deliveryAddress.getPk().toString());
				 * if (supportedAddress != null) { return getAddressConverter().convert(supportedAddress); }
				 */
			}
		}
		return null;
	}


	@Override
	public boolean setDeliveryAddress(final AddressData addressData)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		if (cartModel != null)
		{
			AddressModel addressModel = null;
			if (addressData != null)
			{
				if (addressData.getId() == null)
				{
					addressModel = createDeliveryAddressModel(addressData, cartModel);
				}
				else
				{
					if (sessionService.getAttribute("sessionSoldTo") != null)
					{
						final String sessionSoldTo1 = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getUid();
						final String userSalesRegion = bhgeUserProfileFacade.getUserDefaultSalesRegion();
						final String defaultSoldToChild = sessionSoldTo1 + "_" + userSalesRegion;
						B2BUnitModel soldToChild = null;
						try {
							soldToChild = bhgeUserProfileFacade.findChildB2BUnitModel(defaultSoldToChild);
							addressModel = b2bCommerceUnitService.getAddressForCode(soldToChild, addressData.getId());
						} catch (RuntimeException re) {
							LOG.error("Exception while fetching the Address from Child B2BUnitModel with uid : " + defaultSoldToChild);
							re.printStackTrace();
						}
						if(addressModel == null) {
							// Getting the Address from Parent B2BUnitModel
							try {
								B2BUnitModel parentB2BUnitModel = bhgeUserProfileFacade.findChildB2BUnitModel(sessionSoldTo1);
								addressModel = b2bCommerceUnitService.getAddressForCode(parentB2BUnitModel, addressData.getId());
							} catch (RuntimeException re) {
								LOG.error("Exception while fetching the Address from Parent B2BUnitModel");
								re.printStackTrace();
							}
						}
						//New Address will be null for child B2b unit. and now it is getting attached to user
						//Cheking for User created address
						if (addressModel == null)
						{
							addressModel = cartModel.getDeliveryAddress();
							if (addressModel != null && addressModel.getOwner() != null
									&& !getUserService().getCurrentUser().getPk().equals(addressModel.getOwner().getPk()))
							{
								addressModel = null;
							}
						}
					}
				}
			}
			cartModel.setDeliveryAddress(addressModel);
			modelService.save(cartModel);
		}
		return false;
	}

	//Added for ds checkout spartacus migration - start

	@Override
	public boolean setDeliveryAddressWs(final AddressData addressData, String checkoutCartId)
	{
		//final CartModel cartModel = bhgeCartService.getSessionCart();

		final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
		UserModel user = userService.getCurrentUser();
		//	final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		String sessionSoldTo1 = null;

		GEEdgeCustomerModel currentUser = null;

		if (user instanceof GEEdgeCustomerModel && cartModel != null)
		{
			currentUser = (GEEdgeCustomerModel) user;
			AddressModel addressModel = null;
			if (addressData != null)
			{
				if (addressData.getId() == null)
				{
					addressModel = createDeliveryAddressModel(addressData, cartModel);
				}
				else
				{
					if(currentUser!=null && null != currentUser.getDefaultB2BUnit()) {
						sessionSoldTo1 = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
					}

					//if (sessionService.getAttribute("sessionSoldTo") != null)
					if(StringUtils.isNotEmpty(sessionSoldTo1) && sessionSoldTo1!=null)
					{
						//final String sessionSoldTo1 = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getUid();
						final String userSalesRegion = bhgeUserProfileFacade.getUserDefaultSalesRegion();
						final String defaultSoldToChild = sessionSoldTo1 + "_" + userSalesRegion;
						final B2BUnitModel soldToChild = bhgeUserProfileFacade.findChildB2BUnitModel(defaultSoldToChild);
						addressModel = b2bCommerceUnitService.getAddressForCode(soldToChild, addressData.getId());
						//New Address will be null for child B2b unit. and now it is getting attached to user
						//Cheking for User created address
						if (addressModel == null)
						{
							addressModel = cartModel.getDeliveryAddress();
							if (addressModel != null && addressModel.getOwner() != null
									&& !getUserService().getCurrentUser().getPk().equals(addressModel.getOwner().getPk()))
							{
								addressModel = null;
							}
						}
					}
				}
			}
			cartModel.setDeliveryAddress(addressModel);
			modelService.save(cartModel);
		}

		return false;
	}

	public boolean setPayerAddressWs(final AddressData addressData, String checkoutCartId)
	{
		final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
		UserModel user = userService.getCurrentUser();
		//	final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		String sessionSoldTo1 = null;

		GEEdgeCustomerModel currentUser = null;

		if (user instanceof GEEdgeCustomerModel && cartModel != null)
		{
			currentUser = (GEEdgeCustomerModel) user;
			AddressModel addressModel = null;
			if (addressData != null)
			{
				if (addressData.getId() == null)
				{
					addressModel = createDeliveryAddressModel(addressData, cartModel);
				}
				else
				{
					if(currentUser!=null && null != currentUser.getDefaultB2BUnit()) {
						sessionSoldTo1 = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
					}

					//if (sessionService.getAttribute("sessionSoldTo") != null)
					if(StringUtils.isNotEmpty(sessionSoldTo1) && sessionSoldTo1!=null)
					{
						//final String sessionSoldTo1 = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getUid();
						final String userSalesRegion = bhgeUserProfileFacade.getUserDefaultSalesRegion();
						final String defaultSoldToChild = sessionSoldTo1 + "_" + userSalesRegion;
						final B2BUnitModel soldToChild = bhgeUserProfileFacade.findChildB2BUnitModel(defaultSoldToChild);
						addressModel = b2bCommerceUnitService.getAddressForCode(soldToChild, addressData.getId());
						//New Address will be null for child B2b unit. and now it is getting attached to user
						//Cheking for User created address
						if (addressModel == null)
						{
							addressModel = cartModel.getPayerAddress();
							if (addressModel != null && addressModel.getOwner() != null
									&& !getUserService().getCurrentUser().getPk().equals(addressModel.getOwner().getPk()))
							{
								addressModel = null;
							}
						}
					}
				}
			}
			cartModel.setPayerAddress(addressModel);
			modelService.save(cartModel);
		}

		return false;

	}

	//Added for ds checkout spartacus migration -end


	public boolean setEnduserAddress(final AddressData addressData)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		if (cartModel != null)
		{
			AddressModel addressModel = null;
			if (addressData != null)
			{
				if (addressData.getId() == null)
				{
					addressModel = createEnduserAddressModel(addressData, cartModel);
				}
				else
				{
					if (sessionService.getAttribute("sessionSoldTo") != null)
					{
						final String sessionSoldTo1 = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getUid();
						final String userSalesRegion = bhgeUserProfileFacade.getUserDefaultSalesRegion();
						final String defaultSoldToChild = sessionSoldTo1 + "_" + userSalesRegion;
						final B2BUnitModel soldToChild = bhgeUserProfileFacade.findChildB2BUnitModel(defaultSoldToChild);
						addressModel = b2bCommerceUnitService.getAddressForCode(soldToChild, addressData.getId());
						//New Address will be null for child B2b unit. and now it is getting attached to user
						//Cheking for User created address
						if (addressModel == null)
						{
							addressModel = cartModel.getRMAEndUserAddress();
							if (addressModel != null && addressModel.getOwner() != null
									&& !getUserService().getCurrentUser().getPk().equals(addressModel.getOwner().getPk()))
							{
								addressModel = null;
							}
						}
					}
				}
			}
			cartModel.setRMAEndUserAddress(addressModel);
			modelService.save(cartModel);
		}
		return false;
	}

	protected AddressModel createEnduserAddressModel(final AddressData addressData, final CartModel cartModel)
	{
		final AddressModel addressModel = getModelService().create(AddressModel.class);
		getAddressReversePopulator().populate(addressData, addressModel);
		addressModel.setOwner(cartModel);
		return addressModel;
	}

	@Override
	public List<CountryData> getDeliveryCountries()
	{
		//return getCartFacade().getDeliveryCountries();
		return bhgeCartFacade.getDeliveryCountries();
	}

	@Override
	protected void beforePlaceOrder(final CartModel cartModel)
	{
		super.beforePlaceOrder(cartModel);

		final boolean isQuoteOrder = !cartModel.getB2bcomments().isEmpty();
		if (isQuoteOrder)
		{
			cartModel.setStatus(OrderStatus.PENDING_QUOTE);
		}
		else
		{
			cartModel.setStatus(OrderStatus.CREATED);
		}
		for (final ReturnPOModel poModel : cartModel.getReturnPO())
		{
			cartModel.setPoDocs(poModel.getPoAttachments());
		}
		getModelService().save(cartModel);
	}

	@Override
	public List<CountryData> getBillingCountries()
	{
		final List<CountryModel> billingCountries = new ArrayList<CountryModel>();
		List<CountryModel> totalCountries = new ArrayList<CountryModel>();
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			final CountryModel countryModel = getCommonI18NService().getCountry(DEFAULT_GUEST_COUNTRY_CODE);
			totalCountries.addAll(countryModel.getGuestShipToCountries());
		}
		else
		{
			totalCountries = getCommonI18NService().getAllCountries();
		}
		for (int i = 0; i < totalCountries.size(); i++)
		{
			if (!totalCountries.get(i).getRegions().isEmpty())
			{
				billingCountries.add(totalCountries.get(i));
			}
		}
		final List<CountryData> countries = getCountryConverter().convertAll(billingCountries);
		Collections.sort(countries, CountryComparator.INSTANCE);
		return countries;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.order.impl.BHGECheckoutFacade#generateCheckoutPdf()
	 */
	@Override
	public Boolean generateCheckoutPdf() throws IOException
	{
		return bhgeCartService.generateCheckoutPdf(bhgeCartService.getSessionCart());
	}

	public void updatevouchersFromCartData(final CartData cartData)
	{
		LOG.info("inside updatevouchersFromCartData method ");
		final List<String> appliedVouchers = cartData.getAppliedVouchers();
		if (appliedVouchers != null)
		{
			final Iterator<String> iterator = appliedVouchers.iterator();
			while (iterator.hasNext())
			{
				final String voucherCode = iterator.next();
				try
				{
					voucherFacade.releaseVoucher(voucherCode);
					voucherFacade.applyVoucher(voucherCode);
				}
				catch (final VoucherOperationException ignore)
				{
					LOG.warn("Voucher cannot be redeemed: ");
					iterator.remove();
				}
			}
		}
		cartData.setAppliedVouchers(appliedVouchers);
	}

	/*
	 * New for OCC web service calls
	 * Method to save sold to address for guest cart based on cart Id
	 */
	public void createAndSaveSoldtoAddressForGuest(final BHGEShippingAddressFormData bhgeAddressFormData,final CartModel cartModel)
	{
		//final CartModel cartModel = bhgeCartService.getSessionCart();

		final UserModel user = userService.getCurrentUser();
		final AddressModel soldtoAddress = modelService.create(AddressModel.class);
		CountryModel countryModel = null;

		soldtoAddress.setStreetnumber(bhgeAddressFormData.getLine2());
		soldtoAddress.setStreetname(bhgeAddressFormData.getLine1());
		soldtoAddress.setTown(bhgeAddressFormData.getTown());
		soldtoAddress.setPostalcode(bhgeAddressFormData.getPostalCode());
		soldtoAddress.setOwner(user);

		if (null != bhgeAddressFormData.getCountry() && StringUtils.isNotEmpty(bhgeAddressFormData.getCountry().getIsocode()))
		{
			countryModel = getCommonI18NService().getCountry(bhgeAddressFormData.getCountry().getIsocode());
			soldtoAddress.setCountry(countryModel);
		}

		if (null != countryModel && null != bhgeAddressFormData.getRegion()
				&& StringUtils.isNotEmpty(bhgeAddressFormData.getRegion().getIsocode()))
		{
			final RegionModel regionModel = getCommonI18NService().getRegion(countryModel,
					bhgeAddressFormData.getRegion().getIsocode());
			soldtoAddress.setRegion(regionModel);
		}

		soldtoAddress.setDeliveryPoint(bhgeAddressFormData.getDeliveryPoint());
		soldtoAddress.setCompany(bhgeAddressFormData.getCompanyName());
		soldtoAddress.setTown(bhgeAddressFormData.getTown());
		soldtoAddress.setFirstname(bhgeAddressFormData.getFirstName());
		// Saving the sold to address
		cartModel.setPaymentAddress(soldtoAddress);
		modelService.save(cartModel);
	}


	/**
	 * New for OCC web service calls
	 * Method to create and save shipping address for cart based on cart Id
	 * @param bhgeAddressFormData
	 * @param userConsentForSave
	 */
	public void createAndSaveShippingAddressForGuest(final BHGEShippingAddressFormData bhgeAddressFormData,
													 final boolean userConsentForSave,final CartModel cartModel)
	{

		//final CartModel cartModel = bhgeCartService.getSessionCart();

		final UserModel user = userService.getCurrentUser();
		final AddressModel shippingAddress = modelService.create(AddressModel.class);
		CountryModel countryModel = null;

		shippingAddress.setStreetnumber(bhgeAddressFormData.getLine2());
		shippingAddress.setStreetname(bhgeAddressFormData.getLine1());
		shippingAddress.setTown(bhgeAddressFormData.getTown());
		shippingAddress.setPostalcode(bhgeAddressFormData.getPostalCode());
		shippingAddress.setOwner(user);

		if (null != bhgeAddressFormData.getCountry() && StringUtils.isNotEmpty(bhgeAddressFormData.getCountry().getIsocode()))
		{
			countryModel = getCommonI18NService().getCountry(bhgeAddressFormData.getCountry().getIsocode());
			shippingAddress.setCountry(countryModel);
		}

		if (null != countryModel && null != bhgeAddressFormData.getRegion()
				&& StringUtils.isNotEmpty(bhgeAddressFormData.getRegion().getIsocode()))
		{
			final RegionModel regionModel = getCommonI18NService().getRegion(countryModel,
					bhgeAddressFormData.getRegion().getIsocode());
			shippingAddress.setRegion(regionModel);
		}

		shippingAddress.setDeliveryPoint(bhgeAddressFormData.getDeliveryPoint());
		shippingAddress.setCompany(bhgeAddressFormData.getCompanyName());
		shippingAddress.setTown(bhgeAddressFormData.getTown());
		shippingAddress.setFirstname(bhgeAddressFormData.getFirstName());
		if (userConsentForSave)
		{
			shippingAddress.setSaveForFuture(Boolean.TRUE);
		}
		// Saving the shipping address
		cartModel.setDeliveryAddress(shippingAddress);
		modelService.save(cartModel);

		//final CartData cartData = getCheckoutCart();
		final CartData cartData = cartConverter.convert(cartModel);

		AddressData addressData=addressConverter.convert(cartModel.getDeliveryAddress());
		if(null!=cartModel.getDeliveryAddress() && StringUtils.isNotBlank(cartModel.getDeliveryAddress().getSapCustomerID())){
			addressData.setSapCustomerID(cartModel.getDeliveryAddress().getSapCustomerID());
		}
		cartData.setDeliveryAddress(addressData);
	}


	/*
	 * New for OCC web service calls
	 * Method to create and save endUser address for cart based on cart Id
	 * @param bhgeAddressFormData
	 * @param userConsentForSave
	 *
	 */
	public void createAndSaveEnduserAddressForGuest(final BHGEShippingAddressFormData bhgeAddressFormData,
													final boolean userConsentForSave,final CartModel cartModel)
	{

		//final CartModel cartModel = bhgeCartService.getSessionCart();

		final UserModel user = userService.getCurrentUser();
		final AddressModel shippingAddress = modelService.create(AddressModel.class);
		CountryModel countryModel = null;

		shippingAddress.setStreetnumber(bhgeAddressFormData.getLine2());
		shippingAddress.setStreetname(bhgeAddressFormData.getLine1());
		shippingAddress.setTown(bhgeAddressFormData.getTown());
		shippingAddress.setPostalcode(bhgeAddressFormData.getPostalCode());
		shippingAddress.setOwner(user);
		shippingAddress.setEndUserType(bhgeAddressFormData.getEndUserType());
		if (null != bhgeAddressFormData.getCountry() && StringUtils.isNotEmpty(bhgeAddressFormData.getCountry().getIsocode()))
		{
			countryModel = getCommonI18NService().getCountry(bhgeAddressFormData.getCountry().getIsocode());
			shippingAddress.setCountry(countryModel);
		}

		if (null != countryModel && null != bhgeAddressFormData.getRegion()
				&& StringUtils.isNotEmpty(bhgeAddressFormData.getRegion().getIsocode()))
		{
			final RegionModel regionModel = getCommonI18NService().getRegion(countryModel,
					bhgeAddressFormData.getRegion().getIsocode());
			shippingAddress.setRegion(regionModel);
		}

		//shippingAddress.setDeliveryPoint(bhgeAddressFormData.getDeliveryPoint());
		shippingAddress.setCompany(bhgeAddressFormData.getCompanyName());
		if (userConsentForSave)
		{
			shippingAddress.setSaveForFuture(Boolean.TRUE);
		}
		// Saving the shipping address
		cartModel.setRMAEndUserAddress(shippingAddress);
		if(StringUtils.isNotBlank(cartModel.getEndUserNumber()))
		{
			cartModel.setEndUserNumber("");
		}
		modelService.save(cartModel);

		//final CartData cartData = getCheckoutCart();
		final CartData cartData = cartConverter.convert(cartModel);
		cartData.setEnduserAddress(addressConverter.convert(cartModel.getRMAEndUserAddress()));

	}


	// Added new for OCC Migration
	@Override
	public CartModel updateCheckoutCartForDS(CartData cartData, CartModel cartModel) {
		// TODO Auto-generated method stub

		//final CartModel cartModel = bhgeCartService.getSessionCart();
		if (cartModel == null)
		{
			return null;
		}
		AddressModel deliverAddress = null;
		// set payment type
		if (cartData.getPaymentType() != null)
		{
			//LOG.info("Payment Type-------------" + cartData.getPaymentType().getCode());
			final String newPaymentTypeCode = cartData.getPaymentType().getCode();

			setPaymentTypeForCart(newPaymentTypeCode, cartModel);
		}
		else
		{
			deliverAddress = cartModel.getDeliveryAddress();
			cartModel.setDeliveryAddress(null);
			cartModel.setDeliveryMode(null);
			cartModel.setPaymentInfo(null);
		}

		// set purchase order number
		if (cartData.getPurchaseOrderNumber() != null)
		{
			cartModel.setPurchaseOrderNumber(cartData.getPurchaseOrderNumber());
		}

		//Setting EndCutomer PO
		if (cartData.getEndCustomerPo() != null)
		{
			cartModel.setEndCustomerRefNum(cartData.getEndCustomerPo());
		}

		//Setting EndCutomer PO
		if (cartData.getEndUserNumber() != null)
		{
			cartModel.setEndUserNumber(cartData.getEndUserNumber());
		}

		// set delivery address
		if (cartData.getDeliveryAddress() != null)
		{
			deliverAddress = cartModel.getDeliveryAddress();
			if (deliverAddress != null)
			{
				cartModel.setDeliveryAddress(deliverAddress);
				getModelService().save(cartModel);
				getModelService().refresh(cartModel);
			}
			else
			{
				setDeliveryAddress(cartData.getDeliveryAddress());
			}
		}

		// set End User address
		if (cartData.getEnduserAddress() != null)
		{
			final AddressModel enduserAddress = cartModel.getRMAEndUserAddress();
			if (enduserAddress != null)
			{
				cartModel.setRMAEndUserAddress(enduserAddress);
				getModelService().save(cartModel);
			}
			else if (!userService.isAnonymousUser(userService.getCurrentUser()))
			{
				setEnduserAddress(cartData.getEnduserAddress());
			}
		}

		//Set Delivery Point
		if (cartData.getDeliveryPoint() != null)
		{
			cartModel.setDeliveryPoint(cartData.getDeliveryPoint());
		}

		//Set Delivery Carrier
		if (cartData.getDeliveryCarrier() != null)
		{
			final ShippingCarrierMethod deliveryCarrier = ShippingCarrierMethod.valueOf(cartData.getDeliveryCarrier());
			cartModel.setShippingCarrierMethod(deliveryCarrier);
		}

		if (cartData.getRequestedHdrDeliveryDate() != null)
		{
			try
			{
				if(cartData.getCartType().equalsIgnoreCase("FILM"))
				{
					cartModel.setReqHeaderDeliveryDateFilm(new SimpleDateFormat("dd-MM-yyyy").parse(cartData.getRequestedHdrDeliveryDate()));
				}
				else
				{
					cartModel.setReqHeaderDeliveryDate(new SimpleDateFormat("dd-MM-yyyy").parse(cartData.getRequestedHdrDeliveryDate()));
				}
			}
			catch (final Exception ex)
			{
				LOG.info(ex.getMessage());
			}
		}
		if (cartData.getNotes() != null)
		{
			cartModel.setShippingRemarks(cartData.getNotes());
		}


		if (cartData.getShipToContactName() != null)
		{
			cartModel.setShipToContactName(cartData.getShipToContactName());
		}


		if (cartData.getShipToContactPhone() != null)
		{
			cartModel.setShipToContactPhone(cartData.getShipToContactPhone());
		}

		if (cartData.getOrderConfirmation() != null)
		{
			cartModel.setOrderConfirmationEMail(cartData.getOrderConfirmation());
		}

		if (cartData.getShipNotificationEmail() != null)
		{
			cartModel.setShipNotificationEmail(cartData.getShipNotificationEmail());
		}

		if (cartData.getInvoiceEmail() != null)
		{
			cartModel.setInvoiceEmail(cartData.getInvoiceEmail());
		}

		if (cartData.getIsSpecialDiscountPresent() != null)
		{
			cartModel.setIsSpecialDiscountPresent(cartData.getIsSpecialDiscountPresent());
		}

		if (cartData.getSpecialDiscountCode() != null)
		{
			cartModel.setSpecialDiscountCode(cartData.getSpecialDiscountCode());
		}

		if (cartData.getDeliveryAccount() != null)
		{
			cartModel.setDeliveryAccountNum(cartData.getDeliveryAccount());
		}

		if (cartData.getIsGovernment() != null)
		{
			cartModel.setIsGovernment(cartData.getIsGovernment());
		}

		if (cartData.getIsNuclearOppurtunity() != null)
		{
			cartModel.setIsNuclearOppurtunity(cartData.getIsNuclearOppurtunity());
            LOG.info("isNuclearOppurtunity - cartModel"+ cartModel.getIsNuclearOppurtunity());
		}

		if (cartData.getIsExport() != null)
		{
			cartModel.setIsExport(cartData.getIsExport());
		}

		if (cartData.getPlanToExport() != null)
		{
			cartModel.setExportAddressText(cartData.getPlanToExport());
		}

		if (StringUtils.isNotEmpty(cartData.getDeliveryOptions()))
		{
			LOG.info("updateCheckoutCartForDS DeliveryOptions: " +cartData.getDeliveryOptions());
			if ("ADD".equalsIgnoreCase(cartData.getDeliveryOptions()))
			{
				// final ShippingChargeMethod addMethod=;
				cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("ADD"));
			}
			else if ("prepay".equalsIgnoreCase(cartData.getDeliveryOptions())
					|| ("Pre-pay & Add".equalsIgnoreCase(cartData.getDeliveryOptions())))
			{
				cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("PREPAY"));
			}
			else if ("collect".equalsIgnoreCase(cartData.getDeliveryOptions()))
			{
				cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("COLLECT"));
			} else if ("Prepay & Add".equalsIgnoreCase(cartData.getDeliveryOptions())) {
				cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("PREPAY"));
			}
		}

		if (StringUtils.isNotEmpty(cartData.getAlternateContactName()))
		{
			cartModel.setShippingConatct2Name(cartData.getAlternateContactName());
		}
		if (StringUtils.isNotEmpty(cartData.getAlternateContactNumber()))
		{
			cartModel.setShippingConatct2Number(cartData.getAlternateContactNumber());
		}
		if (StringUtils.isNotEmpty(cartData.getAlternateContactEmail()))
		{
			cartModel.setAlternateContactEmail(cartData.getAlternateContactEmail());
		}
		if (cartData.getIsBuyer() != null)
		{
			cartModel.setIsBuyer(cartData.getIsBuyer());
		}

		// set quote request description
		if (cartData.getB2BComment() != null)
		{
			final B2BCommentModel b2bComment = getModelService().create(B2BCommentModel.class);
			b2bComment.setComment(cartData.getB2BComment().getComment());
			getB2bCommentService().addComment(cartModel, b2bComment);
		}

		// set InvoiceContactName 
		if (cartData.getInvoiceContactName() != null)
		{
			cartModel.setInvoiceContactName(cartData.getInvoiceContactName());
		}

		// set InvoiceContact1Num 
		if (cartData.getInvoiceContact1Num() != null)
		{
			cartModel.setInvoiceContact1Num(cartData.getInvoiceContact1Num());
		}
		// set OrderConfirmationName
		if (cartData.getOrderConfirmationName() != null)
		{
			cartModel.setOrderConfirmationName(cartData.getOrderConfirmationName());
		}

		// set OrderConfirmationNum
		if (cartData.getOrderConfirmationNum() != null)
		{
			cartModel.setOrderConfirmationNum(cartData.getOrderConfirmationNum());
		}

		// set InvoiceContact
		if (cartData.getInvoiceContact() != null)
		{
			cartModel.setInvoiceContact(cartData.getInvoiceContact());
		}

		// set Invoice Phone
		if (cartData.getInvoicePhone() != null)
		{
			cartModel.setInvoicePhone(cartData.getInvoicePhone());
		}

		// set SOA Contact
		if (cartData.getSoaContact() != null)
		{
			cartModel.setSoaContact(cartData.getSoaContact());
		}

		// set  SOA Phone
		if(cartData.getSoaPhone() != null)
		{
			cartModel.setSoaPhone(cartData.getSoaPhone());
		}

		//set end user type
		if(cartData.getEndUserCategory()!=null) {
			cartModel.setEndUserCategory(cartData.getEndUserCategory());
		}

		//set order preference
		if(cartData.getOrderPreference() != null)
		{
			cartModel.setOrderPreference(cartData.getOrderPreference());
			LOG.debug("Order preference set on CartModel:" + cartData.getOrderPreference());
		}
		else
		{
			LOG.debug("Order preference is null in CartData, skipping CartModel update");
		}

		getModelService().save(cartModel);
		getModelService().refresh(cartModel);
		return cartModel;

	}

	// Added new for OCC Migration
	@Override
	public Boolean generateCheckoutPdfForDs(CartModel cartModel) throws IOException {
		// TODO Auto-generated method stub
		return bhgeCartService.generateCheckoutPdf(cartModel);
	}

	// Added New for OCC Migration
	public List<OrderModel> placeOrderWithSplitForDs(final CartModel checkoutCartModel) throws InvalidCartException
	{

		//final CartModel parentCart = bhgeCartService.getSessionCart();
		List<OrderModel> orderDataList = new ArrayList<>();
		if (Objects.nonNull(checkoutCartModel.getCommerceType()) && (checkoutCartModel.getCommerceType().toString().equalsIgnoreCase("RETURNS")))
		{
			orderDataList = bhgeRmaFormFacade.processRMAOrderForWs(checkoutCartModel);
			bhgeRMAStatusFacade.removeRmaStatusDataFromCache();
		}
		else
		{
			final CommerceSplitOrderParameters parameters = new CommerceSplitOrderParameters();
			parameters.setEnableHooks(true);
			parameters.setParentCart(checkoutCartModel);
			final List<CartModel> childCarts = getBhgeOrderSplittingService().splitOrder(parameters);
			if (CollectionUtils.isNotEmpty(childCarts))
			{
				for (final CartModel cartModel : childCarts)
				{
					final OrderData orderData = new OrderData();
					if (cartModel != null)
					{

						if (childCarts.size() > 1)
						{
							//							cartModel = bhgeCartService.getRealTimePriceAndAvailabiltyDetails(cartModel,
							//									cartModel.getIsShipCompleteOrder());
							try
							{
								bhgeCalculationService.recalculate(cartModel);
							}
							catch (final Exception e)
							{
								LOG.error("Error occured while executing the calculate method - processPrice() " + e);
							}
						}

						final UserModel currentUser = userService.getCurrentUser();
						if (cartModel.getUser().equals(currentUser) || getCheckoutCustomerStrategy().isAnonymousCheckout())
						{
							beforePlaceOrder(cartModel);

							final OrderModel orderModel = placeOrder(cartModel);
							// : Following two lines needs to be removed and Order total
							// logic should be implemented.
							orderModel.setTotalPrice(cartModel.getTotalPrice());

							if (Objects.nonNull(cartModel.getCommerceType()))
							{
								orderModel.setCommerceType(cartModel.getCommerceType());
							}
							else
							{
								orderModel.setCommerceType(BHGERMACommerceType.BUY);
							}
							if (cartModel.getCartType() != null && StringUtils.isNotBlank(cartModel.getCartType().getCode()))
							{
								if (cartModel.getCartType().getCode().equalsIgnoreCase("FILM"))
								{
									orderModel.setReqHeaderDeliveryDateFilm(cartModel.getReqHeaderDeliveryDateFilm());
									orderModel.setReqHeaderDeliveryDate(null);
								}
								if (cartModel.getCartType().getCode().equalsIgnoreCase("NONFILM"))
								{
									orderModel.setReqHeaderDeliveryDateFilm(null);
									orderModel.setReqHeaderDeliveryDate(cartModel.getReqHeaderDeliveryDate());
								}
							}

							// setInvoiceContact
							if (Objects.nonNull(cartModel.getInvoiceContact()))
							{
								orderModel.setInvoiceContact(cartModel.getInvoiceContact());
							}

							// set Invoice Phone
							if (Objects.nonNull(cartModel.getInvoicePhone()))
							{
								orderModel.setInvoicePhone(cartModel.getInvoicePhone());
							}

							// set Soa Contact
							if (Objects.nonNull(cartModel.getSoaContact()))
							{
								orderModel.setSoaContact(cartModel.getSoaContact());
							}

							// set Soa Phone
							if (Objects.nonNull(cartModel.getSoaPhone()))
							{
								orderModel.setSoaPhone(cartModel.getSoaPhone());
							}

							//Setting credit card info to the Order model
							if(null!= cartModel.getBhgeCreditCardPaymentInfo() && StringUtils.isNotEmpty(cartModel.getBhgeCreditCardPaymentInfo().getToken())){
								orderModel.setBhgeCreditCardPaymentInfo(cartModel.getBhgeCreditCardPaymentInfo());
								orderModel.setPaymentType(CheckoutPaymentType.CARD);
							}

							modelService.save(orderModel);
							modelService.refresh(orderModel);

							afterPlaceOrder(cartModel, orderModel);

							// Convert the order to an order data
							bhgeOrderPopulator.populate(orderModel, orderData);
							orderDataList.add(orderModel);
						}

					}
				}
			}
		}

		return orderDataList;
	}


	public AddressData getPayerAddressForCodeWs(final String selectedAddressCode, String checkoutCartId)
	{
		B2BUnitModel salesArea = null;
		AddressModel payer = null;

		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		salesArea = currentUser.getDefaultB2BUnit();
		/*
		 * if (null !=
		 * sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA) &&
		 * sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA)
		 * instanceof B2BUnitModel) {
		 */
		//salesArea = (B2BUnitModel) sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
		payer = b2bCommerceUnitService.getAddressForCode(salesArea, selectedAddressCode);
		//}
		//final CartModel cartModel = bhgeCartService.getSessionCart();
		final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
		cartModel.setPayerAddress(payer);
		modelService.save(cartModel);
		AddressData addressData=addressConverter.convert(cartModel.getPayerAddress());
		if(null!=cartModel.getPayerAddress() && StringUtils.isNotBlank(cartModel.getPayerAddress().getSapCustomerID())){
			addressData.setSapCustomerID(cartModel.getPayerAddress().getSapCustomerID());
		}
		return addressData;
	}

	/***
	 * US-465610
	 * Method to show credit card option for payment
	 * @param cartModel
	 * @param checkoutWsDTO
	 */
	@Override
	public void setAvailablePaymentOptions(CartModel cartModel, CheckoutWsDTO checkoutWsDTO)
	{
		Double cartTotalValue = cartModel.getTotalPrice();
		LOG.debug("showCreditCardOption Cart Total Price:-" + cartModel.getTotalPrice());
		LOG.debug("showCreditCardOption Cart Currency:-" + cartModel.getCurrency().getIsocode());
		B2BCustomerModel currentUser = (B2BCustomerModel) userService.getCurrentUser();
		B2BUnitModel b2BUnit = currentUser.getDefaultB2BUnit();
		BHGECurrencyCardThresholdModel bhgeCurrencyCardThresholdModel = bhgePaymentService.getCardThreshold(b2BUnit.getCurrency());
		if (bhgeCurrencyCardThresholdModel != null) {
			LOG.debug("showCreditCardOption Cart CartType:-" + cartModel.getCartType());
			if (cartModel.getCartType() != null && cartModel.getCartType().equals(GEEdgeCartType.NONFILM) && cartTotalValue < bhgeCurrencyCardThresholdModel.getCardLimit()) {
				checkoutWsDTO.setShowCreditCard(Boolean.TRUE);
				if (null != b2BUnit.getPaymentTerms() && StringUtils.containsIgnoreCase(b2BUnit.getPaymentTerms(), configurationService.getConfiguration().getString("bh.ds.credit.b2bunit.getPaymentTerms"))) {
					checkoutWsDTO.setHidePurchaseOrder(Boolean.TRUE);
				}
			}
		}
	}

	@Override
	public Boolean getBinLookupStatus(String merchantId, String token) {
		Boolean binLookupStatus;
		BinLookUpResponseData binLookUpResponse = bhgePaymentService.getBinLookUpStatus(merchantId, token);
		binLookupStatus = binLookUpResponse != null && BooleanUtils.isTrue(binLookUpResponse.getCorporate());
		return binLookupStatus;
	}

	@Override
	public List<BHGECreditCardData> getSavedCards()
	{
		List<BHGECreditCardData> bhgeCreditCardDataList = new ArrayList<>();
		B2BCustomerModel currentUser = (B2BCustomerModel) userService.getCurrentUser();
		//B2BUnitModel b2BUnit = currentUser.getDefaultB2BUnit();
		List<BHGESavedCreditcardModel> creditCardModelList = bhgePaymentService.getSavedCards(currentUser);
		if(creditCardModelList!=null)
		{
			bhgeCreditCardDataList = bhgeCardDetailConverter.convertAll(creditCardModelList);
		}
		return bhgeCreditCardDataList;
	}

	/***
	 * US-465624 Method to save card details
	 * @param orderCode
	 * @param bhgeCreditCardData
	 * @return
	 */
	@Override
	public Boolean savedCardDetails(String orderCode, BHGECreditCardData bhgeCreditCardData)
	{
		Boolean isCardSaved = false;
		String[] orderCodes = (null != orderCode && orderCode.contains(BhgeCoreConstants.PIPELINE))
				? StringUtils.split(orderCode, BhgeCoreConstants.PIPELINE)
				: new String[]
				{ orderCode };
		orderCode = orderCodes[0];
		LOG.info("Order number of the currently placed Order is: " + orderCode + " savedCardDetails method.");

		try {
			OrderModel orderModel = bhgeB2BOrderService.fetchOrderForCode(orderCode);
			if(orderModel != null){
				B2BCustomerModel customerModel = (B2BCustomerModel) orderModel.getUser();
				BHGESavedCreditcardModel bhgeSavedCreditcard = new BHGESavedCreditcardModel();
				bhgeSaveCardReversePopulator.populate(bhgeCreditCardData,bhgeSavedCreditcard);
				bhgeSavedCreditcard.setB2bCustomer(customerModel);
				modelService.save(bhgeSavedCreditcard);
				isCardSaved=true;
				//Conversion of CC type for SAP order flow
				BHGECreditCardPaymnentinfoModel paymentModel = orderModel.getBhgeCreditCardPaymentInfo();
				paymentModel.setType(paymentType.get(orderModel.getBhgeCreditCardPaymentInfo().getType()));
				modelService.save(paymentModel);
				modelService.refresh(paymentModel);
			}
		}
		catch (Exception e)
		{
			LOG.error("Error in savedCardDetails method",e);
			isCardSaved=false;
		}
		return isCardSaved;
	}

	@Override
	public Boolean savedCardDetails(BHGECreditCardData bhgeCreditCardData) {
		Boolean isCardSaved = false;
		try {
			B2BCustomerModel customerModel = (B2BCustomerModel) userService.getCurrentUser();
			BHGESavedCreditcardModel bhgeSavedCreditcard = new BHGESavedCreditcardModel();
			bhgeSaveCardReversePopulator.populate(bhgeCreditCardData, bhgeSavedCreditcard);
			bhgeSavedCreditcard.setB2bCustomer(customerModel);
			modelService.save(bhgeSavedCreditcard);
			isCardSaved = true;
		} catch (Exception e) {
			LOG.error("Error in savedCardDetails method", e);
			isCardSaved = false;
		}
		return isCardSaved;
	}
	@Override
	public boolean checkIfProductConfigIssue(CartModel cartModel)	{
		LOG.info("DefaultBHGECheckoutFacade Inside checkIfProductConfigIssue method");
		return bhgeCartService.checkIfProductConfigIssue(cartModel);
	}



	public Boolean getSaveCardAuthorisationStatus(CCPaymentInfoWsDTO paymentInfo, String currencyCode, String customerId) {
		LOG.info("Inside getSaveCardAuthorisationStatus method");
		boolean savedCardAuthorisationStatus = false;
		SavedCardAuthoriseResponseData savedCardAuthData = new SavedCardAuthoriseResponseData();
		savedCardAuthData = bhgePaymentService.getSavedCardAuthorisationStatus(paymentInfo, currencyCode, customerId);
		LOG.info("Saved Card Authorization response object: "+savedCardAuthData);
		if(null != savedCardAuthData && CollectionUtils.isNotEmpty(savedCardAuthData.getCards())){
			LOG.info("Saved Card Authorization response: "+savedCardAuthData.getCards().get(0).getReturndescription());
			SaveCardAuthoriseResponseCardData SavedCardData = savedCardAuthData.getCards().get(0);
			if(null != SavedCardData && SavedCardData.getReturndescription().equalsIgnoreCase("Approval")){
				savedCardAuthorisationStatus = true;
			}
		}
		return savedCardAuthorisationStatus;
	}

	@Override
	public String getFiservMerchantId() {
		B2BCustomerModel currentUser = (B2BCustomerModel) userService.getCurrentUser();
		B2BUnitModel b2bUnit = currentUser.getDefaultB2BUnit();
		String currentSalesArea = b2bUnit.getUid().split("_")[1];
		String currency = b2bUnit.getCurrency().getPk().toString();
		return getFiservMerchantIdWithSalesArea(currentSalesArea, currency);
	}
	public String getFiservMerchantIdWithCurrency(String currentSalesArea, String currency)
	{
		try {
			final CurrencyModel currencyModel = getCommonI18NService().getCurrency(currency);
			LOG.info("Inside getFiservMerchantIdWithCurrency method currencyModel: " + currencyModel.getPk().toString());
			return getFiservMerchantIdWithSalesArea(currentSalesArea, currencyModel.getPk().toString());
		}
		catch (final Exception e) {
			LOG.error("Exception in getFiservMerchantIdWithCurrency method: " + e.getMessage());
			return "";
		}
	}
	@Override
	public String getFiservMerchantIdWithSalesArea(String currentSalesArea, String currency)
	{
		FiservMerchantIdModel merchatId = bhgePaymentService.getFiservMerchantId(currentSalesArea, currency);
		if(null != merchatId && StringUtils.isNotBlank(merchatId.getMerchantId())){
			return merchatId.getMerchantId();
		}
		return "";
	}

	@Override
	public void updateRequestedShipDate(CartModel cartModel, boolean isShipComplete, String reqDelDate) {
		LOG.info("Inside updatedRequestedShipDate");
		if (isShipComplete) {
			if(StringUtils.isNotEmpty(reqDelDate)) {
				LOG.info("Inside if condition isShipComplete");
				DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
				LocalDate formattedDate = LocalDate.parse(reqDelDate, dateFormatter);
				LOG.info("reqDelDate: " + reqDelDate);
				LOG.info("formatted Date: " + formattedDate.toString());
				for (final AbstractOrderEntryModel entry : cartModel.getEntries()) {
					bhgeCartFacade.updateEntryReqDate(formattedDate.toString(), entry.getEntryNumber());
				}
			}else {
				LOG.info("reqDelDate is empty");
			}
		} else {
			LOG.info("Inside else condition isShipComplete");
			for (final AbstractOrderEntryModel entry: cartModel.getEntries()) {
				if (entry.getRequestedDeliveryDate() == null) {
					LOG.info("Inside getRequestedDeliveryDate null condition");
					DateTimeFormatter estShipDateFormatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy");
					DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
					final String format = "yyyy-MM-dd";
					final SimpleDateFormat formatter = new SimpleDateFormat(format);
					final List < Date > shipDatesList = new ArrayList < Date > ();
					final List < String > shipDate = entry.getEstShippingDates();
					for (final String date: shipDate) {
						LOG.info("Line 2576");
						if (date != null && !date.equalsIgnoreCase(Config.getString("EST_SHIP_DATE_NOTAVBL", "NO ESTIMATE AVAILABLE"))) {
							LOG.info("shipDate: " + date);
							final String[] tokens = date.split(" ");
							LOG.info("Tokens line 2580:" + tokens);
							if (tokens != null && tokens.length > 1) {
								LocalDate formattedDate = LocalDate.parse(tokens[1], estShipDateFormatter);
								try {
									LOG.info("Token date Line 2583:" + tokens[1]); //shipDatesList.add(formatter.parse(tokens[1]));
									shipDatesList.add(formatter.parse(formattedDate.toString()));
								} catch (final ParseException e) {
									LOG.error("Parse exception occured while parsing the estimated ship date obtained from ATP RFC call: The Date obtained is not in the format of " + formattedDate.toString());
								}
							}
						}
					}
					String largestShipDate = "";
					LOG.info("shipDatesList: " + shipDatesList);
					if (!shipDatesList.isEmpty()) {
						Collections.sort(shipDatesList);
						LOG.info("sorted shipDatesList: " + shipDatesList);
						largestShipDate = formatter.format(shipDatesList.get(shipDatesList.size() - 1));
						LOG.info("largestShipDate: " + largestShipDate);
						if (DEFAULT_LONGEST_EST_SHIP_DATE.equals(largestShipDate)) {
							LOG.info("largestShipDate is longest date");
							LocalDate currentDate = LocalDate.now();
                            int erpLeadTime = entry.getLeadtime() + 5;
                            LOG.info("ERP Lead Time (entry.getLeadtime + 5):" + erpLeadTime);
                            int businessWeeks = (int) Math.ceil((double) erpLeadTime / 5);
                            LOG.info("Business Weeks: " + businessWeeks);
                            LocalDate futureDate = addWeekDays(currentDate, businessWeeks * 5);
							String formattedDate = futureDate.format(dateFormatter);
							LOG.info("formattedDate: " + formattedDate);
							bhgeCartFacade.updateEntryReqDate(formattedDate, entry.getEntryNumber());
						} else {
							LOG.info("largestShipDate is near future date");
							bhgeCartFacade.updateEntryReqDate(largestShipDate, entry.getEntryNumber());
						}
					}
				}
			}
		}
	}

	private static LocalDate addWeekDays(LocalDate currentDate, Integer days) {
		LOG.info("Inside addWeekDays");
		LocalDate futureDate = currentDate;
		int daysToAdd = 0;
		while (daysToAdd < days) {
			futureDate = futureDate.plusDays(1);
			if (futureDate.getDayOfWeek() != DayOfWeek.SATURDAY && futureDate.getDayOfWeek() != DayOfWeek.SUNDAY) {
				daysToAdd++;
			}
		}
		return futureDate;
	}

}