package com.bhge.facades.order.populators;

import com.bhge.core.b2bunit.dao.BHGEB2BUnitDAO;
import de.hybris.platform.catalog.enums.ProductReferenceTypeEnum;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.catalog.references.ProductReferenceService;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.enums.data.ShippingCarrierMethodData;
import de.hybris.platform.commercefacades.order.converters.populator.AbstractOrderPopulator;
import de.hybris.platform.commercefacades.order.data.AbstractOrderData;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.product.data.PromotionResultData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commercefacades.user.data.PrincipalData;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.commerceservices.url.UrlResolver;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.CoreAlgorithms;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.enumeration.EnumerationValueModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.product.impl.DefaultProductService;
import de.hybris.platform.promotions.PromotionsService;
import de.hybris.platform.promotions.jalo.PromotionResult;
import de.hybris.platform.promotions.model.PromotionResultModel;
import de.hybris.platform.promotions.result.PromotionOrderResults;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.DiscountValue;
import de.hybris.platform.voucher.VoucherService;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;


import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.coupon.service.BHGECouponService;
import com.bhge.core.model.BHGECouponModel;
import com.bhge.core.model.ReturnPOModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.product.strategy.BHGEProductAccessStrategy;
import com.bhge.core.rma.dao.BHGERmaFormDao;
import com.bhge.facades.BHGEAvailabilityDetailsData;
import com.bhge.facades.BHGEStockDetailsData;
import com.bhge.facades.VCComponentPriceData;
import com.bhge.facades.cart.converters.BHGECommonUtil;
import com.bhge.facades.price.BHGEPriceDataFactory;
import com.bhge.facades.product.data.BHGEProductAccessData;
import com.bhge.facades.product.data.EstimateShipData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.store.services.BHGEBaseStoreService;
import com.hybris.ge.edge.core.model.type.BHGEServiceOfferingsModel;
import com.hybris.ge.edge.core.model.type.GEEdgeAvailabilityDetailModel;
import com.hybris.ge.edge.core.model.type.GEEdgeStockDetailModel;
import com.hybris.ge.edge.core.model.type.VCComponentPriceModel;


public class BHGECartPopulator<T extends CartData> extends AbstractOrderPopulator<CartModel, T>
{
	private static final String DEFAULT_LONGEST_EST_SHIP_DATE = Config.getString("DEFAULT_LONGEST_EST_SHIP_DATE", "01-Jan-2100");
	private static final int CURRENCY_FORMAT_DIGITS = 2;

	private static final Logger LOG = Logger.getLogger(BHGECartPopulator.class);
	final int digits = CURRENCY_FORMAT_DIGITS;


    @Autowired
    private BHGEB2BUnitDAO bhgeB2BUnitDao;

	@Resource(name = "priceDataFactory")
	private BHGEPriceDataFactory bhgePriceDataFactory;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "addressConverter")
	private Converter<AddressModel, AddressData> addressConverter;

	@Resource(name = "bhgeRmaFormDao")
	BHGERmaFormDao bhgeRmaFormDao;

	@Resource(name = "voucherService")
	private VoucherService voucherService;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "modelService")
	private ModelService modelService;
	@Resource(name = "promotionsService")
	private PromotionsService promotionsService;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "productModelUrlResolver")
	private UrlResolver<ProductModel> productModelUrlResolver;

	@Resource(name = "sessionService")
	SessionService sessionService;

	/*
	 * @Resource(name = "geEdgeCheckoutFacade") private GEEdgeCheckoutFacadeImpl geEdgeCheckoutFacade;
	 */

	@Resource(name = "promotionResultConverter")
	private Converter<PromotionResultModel, PromotionResultData> promotionResultConverter;

	@Resource(name = "bhgeCouponService")
	public BHGECouponService bhgeCouponService;

	@Resource(name = "productReferenceService")
	private ProductReferenceService productReferenceService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;


	@Autowired
	private DefaultProductService productService;

	private Populator<ProductModel, ProductData> productPrimaryImagePopulator;
	private List<BHGEProductAccessStrategy> strategiesList = new LinkedList();

	/**
	 * @return the strategiesList
	 */
	public List<BHGEProductAccessStrategy> getStrategiesList()
	{
		return this.strategiesList;
	}

	public void setStrategiesList(final List<BHGEProductAccessStrategy> strategiesList)
	{
		this.strategiesList = strategiesList;
	}

	protected Populator<ProductModel, ProductData> getProductPrimaryImagePopulator()
	{
		return productPrimaryImagePopulator;
	}


	public void setProductPrimaryImagePopulator(final Populator<ProductModel, ProductData> productPrimaryImagePopulator)
	{
		this.productPrimaryImagePopulator = productPrimaryImagePopulator;
	}

	private static final String shipDateMessage = Config.getString("EST_SHIP_DATE_NOTAVBL", "NO ESTIMATE AVAILABLE");

	@Override
	public void populate(final CartModel source, final T target) throws ConversionException
	{
		LOG.info("Inside BHGEcart populator");
		LOG.info("TA956171: Inside BHGE Cart Populator");
		//final List<AbstractOrderEntryModel> entries = source.getEntries();
		//Fix for 404 issue
		String cartCommerceType = "";

		if (Objects.nonNull(source.getCommerceType()))
		{
			cartCommerceType = source.getCommerceType().toString();
		}
		else
		{
			if(userService.getCurrentUser() instanceof GEEdgeCustomerModel)
			{
				cartCommerceType = "BUY";
			}
		}

		target.setCommerceType(cartCommerceType);

		if (Objects.isNull(cartCommerceType) || cartCommerceType != "RETURNS")
		{

			LOG.info("In BHGE Cart Populator :- Cart Type is BUY");
			if (Objects.nonNull(source.getSoldToForCart()) && Objects.nonNull(source.getSoldToForCart().getCurrency()))
			{
				target.setCurrencyIso(source.getCurrency().getIsocode());
				target.setCurrencySymbol(source.getCurrency().getSymbol());

				final String[] salesAreaArr = source.getSoldToForCart().getUid().split("_");
				if (salesAreaArr != null && salesAreaArr.length >= 3)
				{
					final SAPConfigurationModel baseStoreConfiguration = baseStoreService
							.findSAPConfigurationWithParams(salesAreaArr[1], salesAreaArr[2], salesAreaArr[3]);
					if (baseStoreConfiguration != null)
					{
						final BaseStoreModel baseStore = baseStoreService
								.findBaseStoreBySAPConfiguration(baseStoreConfiguration.getPk().toString());
						if (baseStore != null)
						{
							target.setSaleaAreaName(baseStore.getName());
						}
					}
				}

				//target.setSaleaAreaName(source.getSoldToForCart().getName());
				target.setSaleaAreaID(source.getSoldToForCart().getUid());
			}
			if (null != source.getConnectivityerror())
			{
				target.setConnectivityerror(source.getConnectivityerror());
			}
			else
			{
				final List<AbstractOrderEntryModel> entries = CollectionUtils.isNotEmpty(source.getEntries())
						? new ArrayList<>(source.getEntries())
						: new ArrayList<>();

				updateCartForProductRemoval(entries, source);


				final List<OrderEntryData> entryData = populateEntries(target, entries, source.getCurrency(), cartCommerceType);
				if (BooleanUtils.isFalse(source.getIsPartialShipment()) && BooleanUtils.isTrue(source.getIsShipCompleteOrder()) && CollectionUtils.isNotEmpty(entryData)){
					//code to Longest Lead Time Value
					populateLeadTime(source, target, entryData);
				}
				// code to set the error message.
				Boolean showATPMessage = Boolean.FALSE;
				Boolean showDiscountMessage = Boolean.FALSE;

				final String shipDateMessage = Config.getParameter("EST_SHIP_DATE_NOTAVBL");
				final String discountPriceMessage = Config.getParameter("DISC_PRICE_NOTAVBL");

				for (final AbstractOrderEntryModel entryModel : entries)
				{
					if (entryModel.getDiscountPrice() != null && entryModel.getDiscountPrice().equals(discountPriceMessage))
					{
						showDiscountMessage = Boolean.TRUE;
						break;
					}

				}
				for (final AbstractOrderEntryModel entryModel : entries)
				{
					final List<String> estShipDates = entryModel.getEstShippingDates();
					if (estShipDates != null && estShipDates.size() > 0 && estShipDates.get(0).endsWith(shipDateMessage))
					{
						showATPMessage = Boolean.TRUE;
						break;
					}
				}
				Double silverClauseTotalDiscount = 0.0;
				Double yourPriceTotalDiscountAmount = 0.0;
				for (final AbstractOrderEntryModel entryModel : entries)
				{
					silverClauseTotalDiscount = getSilverClauseTotalPrice(entryModel, silverClauseTotalDiscount);
					yourPriceTotalDiscountAmount = getYourPriceTotalDiscountAmount(entryModel, yourPriceTotalDiscountAmount);
				}
				target.setSilverClauseTotalPrice(silverClauseTotalDiscount);
				target.setSilverClauseTotal(populatePrice(silverClauseTotalDiscount, source.getCurrency()));
				target.setYourPriceDiscount(populatePrice(yourPriceTotalDiscountAmount, source.getCurrency()));
				target.setShowATPMessage(showATPMessage);
				target.setShowDiscountMessage(showDiscountMessage);
                String salesOrg = null;
                String distributionChannel = null;
                String division = null;
                String[] defaultB2BId = null;
				if (Objects.nonNull(source.getSoldToForCart())) {
					final String defaultUnitId = StringUtils.defaultString(source.getSoldToForCart().getUid());
					if (Objects.nonNull((defaultUnitId)) && defaultUnitId.contains("_")) {
						defaultB2BId = defaultUnitId.split("_");
						salesOrg = defaultB2BId[1];
						if (defaultB2BId.length > 2) {
							distributionChannel = defaultB2BId[2];
						}
						if (defaultB2BId.length > 3) {
							division = defaultB2BId[3];
						}
					}
					Boolean isminValuePresent = true;
					SAPSalesOrganizationModel sapSalesOrganizationModel = bhgeB2BUnitDao.getCategoriesFromSalesOrg(salesOrg, distributionChannel, division);
					if (null != sapSalesOrganizationModel && null != sapSalesOrganizationModel.getMinOrderValue()) {
						String minOrderValue = sapSalesOrganizationModel.getMinOrderValue();
						target.setMinOrderValue(minOrderValue);
//                    BigDecimal minOrderPrice = new BigDecimal(minOrderValue);
//                    LOG.info("minOrderValue="+ minOrderValue);
//                    BigDecimal totalpricewithtax =target.getTotalPriceWithTax().getValue();
//                    LOG.info("totalpricewithtax =" + totalpricewithtax);
//                    if (totalpricewithtax.compareTo(minOrderPrice) <= 0) {
//                        isminValuePresent = false;
//                        target.setIsMinValuePresent(isminValuePresent);
//                    }
					}
				}

				target.setEntries(entryData);
				if (CollectionUtils.isNotEmpty(source.getEntries()))
				{
					target.setTotalItems(source.getEntries().size());
				}
				else
				{
					target.setTotalItems(0);
				}

				Collection<String> coupons = Collections.emptyList();

				coupons = source.getAppliedCouponCodes();

				if (coupons == null)
				{
					target.setAppliedCouponCodes(new ArrayList<>());

				}
				else
				{
					target.setAppliedCouponCodes(new ArrayList<>(coupons));
				}

				//target.setAppliedVouchers(appliedVouchers);

				Collection<String> vouchers = Collections.emptyList();
				vouchers = voucherService.getAppliedVoucherCodes(source);

				target.setAppliedVouchers(new ArrayList<>(vouchers));
				addPromotions(source, target);
				if (target.getAppliedCouponCodes() != null && !target.getAppliedCouponCodes().isEmpty())
				{
					LOG.info("Entering coupon processing block");

					final String couponCode = target.getAppliedCouponCodes().iterator().next();
					LOG.info("couponCode fetched: {}" + couponCode);

					if (BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_LP
							.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(couponCode, source)))
					{
						LOG.info("Condition matched: DISC_CODE_FIXED_PRICE_ON_PRODUCT_LP");

						final double productsDiscountsAmount = getProductsDiscountsAmount(target);
						LOG.info("productsDiscountsAmount calculated: {}"+ productsDiscountsAmount);

						target.setTotalDiscounts(createPrice(source, productsDiscountsAmount));
						LOG.info("Total discounts set for FIXED_PRICE_ON_PRODUCT_LP");
					}
					else if (BhgeCoreConstants.DISC_CODE_FIXED_VALUE_ON_LP
							.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(couponCode, source)))
					{
						LOG.info("Condition matched: DISC_CODE_FIXED_VALUE_ON_LP");

						final double productsDiscountsAmount = getProductsDiscountsAmount(target);
						LOG.info("productsDiscountsAmount calculated: {}"+ productsDiscountsAmount);

						target.setTotalDiscounts(createPrice(source, productsDiscountsAmount));
						LOG.info("Total discounts set for FIXED_VALUE_ON_LP");
					}
					else if (BhgeCoreConstants.DISC_CODE_PERCENTAGE_ON_LP
							.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(couponCode, source)))
					{
						LOG.info("Condition matched: DISC_CODE_PERCENTAGE_ON_LP");

						final double productsDiscountsAmount = getProductsDiscountsAmount(target);
						LOG.info("productsDiscountsAmount calculated: {}" + productsDiscountsAmount);

						target.setTotalDiscounts(createPrice(source, productsDiscountsAmount));
						LOG.info("Total discounts set for PERCENTAGE_ON_LP");
					}
					else if (BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_YP
							.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(couponCode, source)))
					{
						LOG.info("Condition matched: DISC_CODE_FIXED_PRICE_ON_PRODUCT_YP");

						final double productsDiscountsAmount = getProductsDiscountsAmount(target);
						LOG.info("productsDiscountsAmount calculated: {}"+ productsDiscountsAmount);

						target.setTotalDiscounts(createPrice(source, productsDiscountsAmount));
						LOG.info("Total discounts set for FIXED_PRICE_ON_PRODUCT_YP");
					}

					LOG.info("Exiting coupon processing block");
				}
				double totalDiscounts = 0d;


				LOG.info("===== TOTAL DISCOUNT CALC START =====");

				if (null != target.getTotalDiscounts() && null != target.getTotalDiscounts().getValue())
				{

					LOG.info("target.getTotalDiscounts() is NOT NULL");
					LOG.info("Raw totalDiscounts value: " + target.getTotalDiscounts().getValue());

					totalDiscounts = target.getTotalDiscounts().getValue().doubleValue();


					LOG.info("Converted totalDiscounts (double): " + totalDiscounts);
				}

				LOG.info("Final totalDiscounts used: " + totalDiscounts);
				LOG.info("===== TOTAL DISCOUNT CALC END =====");

				final double subTotalPrice = source.getTotalPrice() + source.getDeliveryCost() - totalDiscounts;
				target.setSubTotal(populatePrice(subTotalPrice, source.getCurrency()));
				target.setTotalPrice(populatePrice(source.getTotalPrice(), source.getCurrency()));
				// Setting Total List Price to the CartData
				target.setTotalListPrice(populatePrice(source.getTotalListPrice(), source.getCurrency()));
				target.setShipmentCost(populatePrice(source.getDeliveryCost(), source.getCurrency()));
				checkMinOrderQty(target);

				populateProductAccessData(target, source);
			}
		}
		else
		{
			final List<AbstractOrderEntryModel> entries = CollectionUtils.isNotEmpty(source.getEntries())
					? new ArrayList<>(source.getEntries())
					: new ArrayList<>();
			final List<OrderEntryData> entryData = populateEntries(target, entries, source.getCurrency(), cartCommerceType);
			target.setEntries(entryData);
			if (CollectionUtils.isNotEmpty(source.getEntries()))
			{
				target.setTotalItems(source.getEntries().size());
			}
			else
			{
				target.setTotalItems(0);
			}
			if (Objects.nonNull(source.getSoldToForCart()))
			{
				//target.setSaleaAreaName(source.getSoldToForCart().getName());
				final String[] salesAreaArr = source.getSoldToForCart().getUid().split("_");
				if (salesAreaArr != null && salesAreaArr.length >= 3)
				{
					final SAPConfigurationModel baseStoreConfiguration = baseStoreService
							.findSAPConfigurationWithParams(salesAreaArr[1], salesAreaArr[2], salesAreaArr[3]);
					if (baseStoreConfiguration != null)
					{
						final BaseStoreModel baseStore = baseStoreService
								.findBaseStoreBySAPConfiguration(baseStoreConfiguration.getPk().toString());
						if (baseStore != null)
						{
							target.setSaleaAreaName(baseStore.getName());
						}
					}
				}

				target.setSaleaAreaID(source.getSoldToForCart().getUid());
			}
			target.setTotalPrice(populatePrice(source.getTotalReturnPrice(), source.getCurrency()));
			LOG.info("In BHGE RMA Cart Populator :- Price Total - " + source.getTotalReturnPrice() + " | "
					+ target.getTotalPrice().getFormattedValue());
		}


		if (null == source.getConnectivityerror())
		{
			target.setCustomerPO(source.getPonum());
			target.setShipToContactName(source.getShipToContactName());
			target.setShipToContactPhone(source.getShipToContactPhone());
			target.setDeliveryAccount(source.getDeliveryAccountNum());
			target.setEndCustomerPo(source.getEndCustomerRefNum());
			target.setOrderConfirmation(source.getOrderConfirmationEMail());
			target.setShipNotificationEmail(source.getShipNotificationEmail());
			target.setInvoiceEmail(source.getInvoiceEmail());
			target.setShippingRemarks(source.getShippingRemarks());
			target.setIsExport(source.getIsExport());
			target.setAlternateContactEmail(source.getAlternateContactEmail());
			target.setAlternateContactName(source.getShippingConatct2Name());
			target.setAlternateContactNumber(source.getShippingConatct2Number());
			target.setIsShipCompleteOrder(source.getIsShipCompleteOrder());
			target.setIsBuyer(source.getIsBuyer());

			if (source.getPlanToExport() != null)
			{
				target.setPlanToExport(source.getPlanToExport().getCode());
			}

			target.setIsGovernment(source.getIsGovernment());
			target.setExportAddress(source.getExportAddressText());
			LOG.info("ShippingChargeMethod is " + source.getShippingChargeMethod());
			if (source.getShippingChargeMethod() != null)
			{
				if (source.getShippingChargeMethod().getCode().equalsIgnoreCase("Prepay"))
				{
					LOG.info(" ################################### Shiping method is Prepay");
					target.setDeliveryOptions("Prepay & Add");
				}
				else
				{
					LOG.info(" ################################### Shiping method is " + source.getShippingChargeMethod().getCode());
					target.setDeliveryOptions(source.getShippingChargeMethod().getCode());
				}

			}
			List<ShippingCarrierMethodData> prepayCarrierTypes = new ArrayList<ShippingCarrierMethodData>();
			if (null != target.getDeliveryOptions())
			{
				if (target.getDeliveryOptions().contains("Prepay"))
				{
					final List<EnumerationValueModel> listOfvalues = bhgeCartService.getShippingCarrierMethods("prepay_add");
					prepayCarrierTypes = populatCarrierMethod(listOfvalues, "prepay_add");
				}
				else
				{
					final List<EnumerationValueModel> listOfvalues = bhgeCartService.getShippingCarrierMethods("collect");
					prepayCarrierTypes = populatCarrierMethod(listOfvalues, "collect");
				}
			}

			if (prepayCarrierTypes != null && prepayCarrierTypes.size() > 0)
			{
				for (final ShippingCarrierMethodData shippingCarrierMethodData : prepayCarrierTypes)
				{
					if (null != source.getShippingCarrierMethod() && null != source.getShippingCarrierMethod().getCode()
							&& (source.getShippingCarrierMethod().getCode().trim().equalsIgnoreCase(shippingCarrierMethodData.getCode())
									|| source.getShippingCarrierMethod().getCode().trim().replace(" ", "")
											.equalsIgnoreCase(shippingCarrierMethodData.getName().trim().replace(" ", ""))))
					{
						target.setDeliveryCarrier(shippingCarrierMethodData.getCode());
						target.setDeliveryCarrierName(shippingCarrierMethodData.getName());
						break;
					}
				}
			}

			if (source.getDeliveryAddress() != null)
			{
				AddressData addressData=addressConverter.convert(source.getDeliveryAddress());
				if(null!=source.getDeliveryAddress() && org.apache.commons.lang3.StringUtils.isNotBlank(source.getDeliveryAddress().getSapCustomerID())){
					addressData.setSapCustomerID(source.getDeliveryAddress().getSapCustomerID());
				}
				target.setDeliveryAddress(addressData);
			}

			if (source.getPaymentAddress() != null)
			{
				target.setPaymentAddress(addressConverter.convert(source.getPaymentAddress()));
			}

			target.setIsNuclearOppurtunity(source.getIsNuclearOppurtunity());
			target.setIsSpecialDiscountPresent(source.getIsSpecialDiscountPresent());
			LOG.info("inside BHGECartPopulator");
			if(source.getSpecialDiscountCode()!=null) {
				LOG.info("inside BHGECartPopulator setSpecialDiscountCode condition");
				target.setSpecialDiscountCode(StringEscapeUtils.unescapeHtml4(source.getSpecialDiscountCode()));
			}
			//target.setSpecialDiscountCode(source.getSpecialDiscountCode());
			if (source.getAttachments() != null && !source.getAttachments().isEmpty())
			{
				final List<MediaModel> attachmentFile = (List<MediaModel>) source.getAttachments();
				target.setAttachments(attachmentFile);
				for (final MediaModel mediaFile : attachmentFile)
				{
					target.setAttachmentName(mediaFile.getRealFileName());
				}
			}
			//Adding EUC doc filename
			if (source.getEuc() != null && CollectionUtils.isNotEmpty(source.getEuc()))
			{
				LOG.info("Inside if condition of EUC BHGECartpopulator");
				final List<MediaModel> eucattachmentFile = (List<MediaModel>) source.getEuc();
				for (final MediaModel mediaFile : eucattachmentFile)
				{
					target.setEucAttachmentName(mediaFile.getRealFileName());
				}
			}
			//Adding PO docs
			if (CollectionUtils.isNotEmpty(source.getReturnPO()))
			{
				final List<MediaModel> poAttachments = new ArrayList<MediaModel>();
				for (final ReturnPOModel returnPO : source.getReturnPO())
				{
					if (CollectionUtils.isNotEmpty(returnPO.getPoAttachments()))
					{
						for (final MediaModel poDoc : returnPO.getPoAttachments())
						{
							poAttachments.add(poDoc);
							target.setPoAttachmentName(poDoc.getRealFileName());
						}
					}
				}
				target.setPoAttachmentFiles(poAttachments);
			}

			target.setIsAttachmentMoved(source.getIsAttachmentMoved());
			if (source.getReqHeaderDeliveryDate() != null)
			{
				target.setRequestedHdrDeliveryDate(BHGECommonUtil.formatDate(source.getReqHeaderDeliveryDate()));
				target.setRequestedHdrDeliveryDateFormatted(
						BHGECommonUtil.parseDateForCompatibility(source.getReqHeaderDeliveryDate()));
			}
			if (source.getReqHeaderDeliveryDateFilm() != null)
			{
				target.setRequestedHdrDeliveryDateFilm(BHGECommonUtil.formatDate(source.getReqHeaderDeliveryDateFilm()));
			}
			//Added for browser compatibility
			target.setDeliveryPoint(source.getDeliveryPoint());
			//Check-out Cart Enhancements //
			target.setCode(source.getCode());
			if (source.getCartType() != null)
			{
				target.setCartType(source.getCartType().getCode());
				LOG.info(" ###################### Carttype of the current cart is " + target.getCartType());
			}
			target.setEndUserNumber(source.getEndUserNumber());
			target.setName(source.getName());

			if (source.getRMAEndUserAddress() != null)
			{
				target.setEnduserAddress(addressConverter.convert(source.getRMAEndUserAddress()));
			}
			target.setLargestNonFilmLeadtime(source.getLargestNonFilmLeadtime());
			target.setLargestFilmLeadtime(source.getLargestFilmLeadtime());
			if(null != source.getSurCharge())
			{
				LOG.info("BHGECartPopulator SurCharge value in CartModel is: " + source.getSurCharge());
				target.setSurCharge(source.getSurCharge());
			}

		}

		if (null != source.getEarlyShipment()) {
			target.setEarlyShipment(source.getEarlyShipment());
		} else {
			target.setEarlyShipment(false);
		}
		if (StringUtils.isNotBlank(source.getProductLine())) {
			target.setProductLine(source.getProductLine());
		}
		LOG.info("US530529: Cart is of cart type: " + source.getIsQuote());
        target.setIsQuote(BooleanUtils.isTrue(source.getIsQuote()));
		populateSaveCart(source, target);
	}

	private void populateLeadTime(CartModel source, CartData target, List<OrderEntryData> entryData) {
		LOG.info("US504538 Inside Populate Lead Time for cart: "+source.getCode());
		final List<OrderEntryData> filmEntries = new LinkedList<>();
		final List<OrderEntryData> nonFilmEntries = new LinkedList<>();
		for (OrderEntryData entry: entryData){
			if (source.getCartType().getCode().equalsIgnoreCase("HYBRID")) {
				if (entry.getProductType().equalsIgnoreCase("ITFILM")){
					LOG.info("Adding to filmEntries: "+ entry.getProduct().getCode());
					filmEntries.add(entry);
				} else {
					LOG.info("Adding to nonFilmEntries: "+ entry.getProduct().getCode());
					nonFilmEntries.add(entry);
				}
				if (CollectionUtils.isNotEmpty(filmEntries)){
					LOG.info("Setting longestLeadTimeFilm = "+ getLongestLeadTime(filmEntries));
					target.setLongestLeadTimeFilm(getLongestLeadTime(filmEntries));
				}
				if (CollectionUtils.isNotEmpty(nonFilmEntries)){
					LOG.info("Setting longestLeadTime NonFilm = "+ getLongestLeadTime(nonFilmEntries));
					target.setLongestLeadTime(getLongestLeadTime(nonFilmEntries));
				}
			} else {
				LOG.info("Inside final else condition of populateLeadTime");
				target.setLongestLeadTime(getLongestLeadTime(entryData));
			}
		}
	}

	private void populateSaveCart(CartModel source, T target) {
		LOG.info("TA956171: Saved Cart Populator");
		target.setSaveTime(null != source.getSaveTime() ? source.getSaveTime() : null);
		if (null != source.getSavedBy())
		{
			final PrincipalData savedBy = new PrincipalData();
			if (StringUtils.isNotEmpty(source.getSavedBy().getName()))
			{
				savedBy.setName(source.getSavedBy().getName());
			}

			if (StringUtils.isNotEmpty(source.getSavedBy().getUid()))
			{
				savedBy.setUid(source.getSavedBy().getUid());

			}
			target.setSavedBy(savedBy);
		}
		target.setExpirationTime(null != source.getExpirationTime() ? source.getExpirationTime() : null);
	}

	private void populateProductAccessData(final T target, final CartModel source)
	{
		for (final OrderEntryData order : target.getEntries())
		{

			final ProductData product = order.getProduct();
			final ProductModel model = productService.getProductForCode(product.getCode());

			BHGEProductAccessData accessData = new BHGEProductAccessData();
			for (final BHGEProductAccessStrategy splittingStrategy : getStrategiesList())
			{
				accessData = splittingStrategy.isProductAccessible(model, accessData);
			}
			product.setProductAccessData(accessData);
			order.setProduct(product);
		}
	}

	public List<OrderEntryData> populateEntries(final T target, final List<AbstractOrderEntryModel> entries,
			final CurrencyModel currency, final String cartCommerceType)
	{
		final List<OrderEntryData> entryData = new ArrayList<OrderEntryData>();
		final Set<String> productCodeSet = new HashSet<String>();
		if (entries != null)
		{
			for (final AbstractOrderEntryModel entryModel : entries)
			{
				CategoryModel parentCategory = null;
				final OrderEntryData cartEntryData = getOrderEntryData(target, entryModel.getEntryNumber());
				cartEntryData.setEntryNumber(entryModel.getEntryNumber());
				cartEntryData.setParentEntryNumber(entryModel.getParentEntryNumber());
				cartEntryData.setListPrice(populatePrice(entryModel.getListPrice(), currency));
				if(null != entryModel.getEcaCode())
				{
					LOG.info("ECA Code in Cart Populator: " + entryModel.getEcaCode());
					cartEntryData.setEcaCode(entryModel.getEcaCode());
				}
				if(null != entryModel.getEndCustomerAddress())
				{
					LOG.info("End Customer Address in Cart Populator");
					cartEntryData.setEnduserAddress(addressConverter.convert(entryModel.getEndCustomerAddress()));
					LOG.info("End Customer Address in Cart Populator: "+
							cartEntryData.getEnduserAddress().getTown()+ " " + cartEntryData.getEnduserAddress().getCountry().getIsocode()+""+cartEntryData.getEnduserAddress().getCompanyName());
					AddressData endUserAddress = cartEntryData.getEnduserAddress();
					String formattedAddressnew=endUserAddress.getCompanyName()+","+endUserAddress.getFormattedAddress();
					LOG.info("Formatted End Customer Address in Cart Populator: " + formattedAddressnew);
					endUserAddress.setFormattedAddress(formattedAddressnew);
					LOG.info("Formatted End Customer Address in Cart Populator after setting company name: " + cartEntryData.getEnduserAddress().getFormattedAddress());
				}
				if(null != entryModel.getEcaPONumber())
				{
					LOG.info("ECA PO Number in Cart Populator: " + entryModel.getEcaPONumber());
					cartEntryData.setEcaPONumber(entryModel.getEcaPONumber());
				}

				cartEntryData.setVcOptionsPrice(populatePrice(entryModel.getVcOptionsPrice(), currency));
				Double silverClauseEntrylevel = 0.0;
				silverClauseEntrylevel = getSilverClauseTotalPrice(entryModel, silverClauseEntrylevel);
				//cartEntryData.setSilverClausePrice(populatePrice(entryModel.getSilverClausePrice(), currency));
				cartEntryData.setSilverClausePrice(populatePrice(silverClauseEntrylevel, currency));
				cartEntryData.setSilverClausePricePercentage(entryModel.getSilverClausePricePercentage());
				if (Objects.isNull(cartCommerceType) || cartCommerceType != "RETURNS")
				{
					LOG.info("========================== IN BUY PRICE CALCULATION start================================");
					cartEntryData.setTotalPrice(populatePrice(entryModel.getTotalPrice(), currency));
					cartEntryData.setUnitListRMA(populatePrice(entryModel.getUnitPrice(), currency));
					cartEntryData.setBasePrice(populatePrice(entryModel.getBasePrice(), currency));
					LOG.info("========================== IN BUY PRICE CALCULATION end================================");
				}
				else
				{
					LOG.info("========================== IN RETURN PRICE CALCULATION start================================");
					cartEntryData.setTotalPrice(populatePrice(entryModel.getTotalReturnPrice(), currency));
					cartEntryData.setUnitListRMA(populatePrice(entryModel.getUnitPrice(), currency));
					if (entryModel.getTotalReturnPrice() == 0.0)
					{
						final PriceData price = new PriceData();
						price.setFormattedValue("To be quoted");
						cartEntryData.setBasePrice(price);
					}
					else
					{
						cartEntryData.setBasePrice(populatePrice(entryModel.getTotalReturnPrice(), currency));
					}
					LOG.info("========================== IN RETURN PRICE CALCULATION end================================");
				}

				cartEntryData.setYourPriceDiscount(populatePrice(entryModel.getYourPriceDiscount(), currency));
				// Setting List Price total to the Cart Entry
				cartEntryData.setSubTotalListPrice(populatePrice(entryModel.getSubTotalListPrice(), currency));

				if (entryModel.getOrder().getAppliedCouponCodes() != null && !entryModel.getOrder().getAppliedCouponCodes().isEmpty())
				{
					cartEntryData.setIsListprice(getCouponListPrice(entryModel.getOrder()));
				}
				cartEntryData.setEntryNumber(entryModel.getEntryNumber());
				cartEntryData.setQuantity(entryModel.getQuantity());
				final ProductData productData = new ProductData();
				productData.setCode(entryModel.getProduct().getCode());
				productData.setName(entryModel.getProduct().getName());
				productData.setUrl(productModelUrlResolver.resolve(entryModel.getProduct()));
				if (null != entryModel.getProduct() && entryModel.getProduct().getPicture() != null)
				{
					final MediaModel mediaModel = entryModel.getProduct().getPicture();
					productData.setMediaurl(mediaModel.getURL());
				}
				else
				{
					productData.setMediaurl(Config.getParameter("PRODUCT_DEFAULT_IMAGE_PATH"));
				}
				final List<String> replacementData = new ArrayList<String>();
				final Collection<ProductReferenceModel> targets = productReferenceService
						.getProductReferencesForSourceProduct(entryModel.getProduct(), ProductReferenceTypeEnum.OBSOLETE, true);

				if (CollectionUtils.isNotEmpty(targets))
				{
					productData.setObsoleteProductStatus("true");

					for (final ProductReferenceModel referenceModel : targets)
					{
						replacementData.add(referenceModel.getTarget().getCode());
					}

				}
				if (replacementData != null && replacementData.size() > 0)
				{
					productData.setReplacementProductStatus(replacementData.get(0));
				}

				// Adding the Parent category code of the product to data object
				final List<CategoryModel> superCategories = (List<CategoryModel>) entryModel.getProduct().getSupercategories();
				if (null != superCategories && superCategories.size() > 0)
				{
					for (final CategoryModel category : superCategories)
					{
						if (CollectionUtils.isEmpty(category.getCategories()) || !CollectionUtils.isEmpty(category.getProducts()))
						{
							parentCategory = category;
							break;
						}
					}
				}

				if (null != parentCategory)
				{
					productData.setParentCategoryCode(parentCategory.getCode());
				}

				// This is to set product description
				productData.setDescription(entryModel.getProduct().getDescription());
				productData.setConfigurable(entryModel.getProduct().getSapConfigurable());

				// Populating UOM for the Material
				if (null != entryModel.getProduct().getUnit() && StringUtils.isNotBlank(entryModel.getProduct().getUnit().getName()))
				{
					productData.setUom(entryModel.getProduct().getUnit().getName());
				}
				getProductPrimaryImagePopulator().populate(entryModel.getProduct(), productData);
				cartEntryData.setIsEngineeringHold(entryModel.getIsEngineeringHold());

				//Setting lead time
				if(entryModel.getLeadtime() != null && entryModel.getLeadtime() > 0){
					int erpLeadTime = entryModel.getLeadtime() + 5;
					int businessWeeks = (int) Math.ceil((double) erpLeadTime / 5);
					cartEntryData.setLeadTime(businessWeeks);
				} else {
					LOG.info("DE163493: Lead time is not available for the product");
					String productLine = sessionService.getAttribute("productLine");
					if (StringUtils.isNotBlank(productLine) && StringUtils.containsIgnoreCase(productLine, "cordant")) {
						cartEntryData.setLeadTime(2);
					} else {
						cartEntryData.setLeadTime(1);
					}
				}

				//Setting Availability Details
				cartEntryData.setAvailabilityDetails(populateAvailabilityDetails(entryModel.getAvailabilityDetails()));
				LOG.info("In BHGE Cart Populator Availability Details :::::: " + cartEntryData.getAvailabilityDetails());

				//Fetching default plant detail only
				String getActualStockQty = "";
				if (CollectionUtils.isNotEmpty(cartEntryData.getAvailabilityDetails())){
					LOG.info("DE163493: Added null check for Availability Data");
					List<BHGEAvailabilityDetailsData> getAvailabiltyDetails = cartEntryData.getAvailabilityDetails();
					Optional<BHGEAvailabilityDetailsData> geEdgeAvailabilityDetailData = getAvailabiltyDetails.stream().filter(p -> p.getIsDefaultPlant().equals(Boolean.TRUE)).findFirst();
					if (geEdgeAvailabilityDetailData.isPresent()) {
						BHGEAvailabilityDetailsData detailModel = geEdgeAvailabilityDetailData.get();
						getActualStockQty = detailModel.getActualStockQty();
						LOG.info("Line 758-Actual stock quantity: " + getActualStockQty);
					}
				}
				// Setting Estimated Shipping dates to the cart entry
				cartEntryData.setEstimatedShipDates(getEstimatedShipDatesForCartEntry(entryModel));
				List<EstimateShipData> formattedEstShipDates = new ArrayList<>();
				//Populate ESD in required format
				String estShipDateNotAvailable = Config.getParameter("EST_SHIP_DATE_NOTAVBL");
				final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy");
				final String productLine = sessionService.getAttribute("productLine");
				final boolean isBentlyNevada = StringUtils.isNotBlank(productLine) &&
						StringUtils.containsIgnoreCase("cordant", productLine);
				for (String estShipDate : cartEntryData.getEstimatedShipDates()) {
					LOG.info("Processing estShipDate: " + estShipDate);
					EstimateShipData estimateShipDate = new EstimateShipData();
					boolean isRequestedDeliveryDateAvailable = entryModel.getRequestedDeliveryDate() != null; // Check if requested delivery date exists
					LOG.info("Is Requested Delivery Date Available: " + isRequestedDeliveryDateAvailable);

					if (estShipDate.equalsIgnoreCase(estShipDateNotAvailable)) { // Case when the estimated date is not available
						LOG.info("Handling estShipDateNotAvailable case.");
						LocalDate futureDate = addWeekDays(LocalDate.now(), cartEntryData.getLeadTime() * 5); // Calculate future date
						String formattedFutureDate = futureDate.format(formatter);
						LOG.info("Calculated Future Date: " + formattedFutureDate);

						EstimateShipData estimateShipDate1 = new EstimateShipData();
						estimateShipDate1.setShipDate(formattedFutureDate); // Add future date entry
						formattedEstShipDates.add(estimateShipDate1);

						if (isRequestedDeliveryDateAvailable) { // Add requested delivery date if available
							String shipDate = new SimpleDateFormat("dd-MMM-yyyy").format(entryModel.getRequestedDeliveryDate());
							LOG.info("Found Requested Delivery Date: " + shipDate);
							EstimateShipData estimateShipDate2 = new EstimateShipData();
							estimateShipDate2.setShipDate(shipDate);
							formattedEstShipDates.add(estimateShipDate2);
						}
					} else { // Case when estimated date is available
						LOG.info("Handling normal estShipDate case.");
						String[] estDate = estShipDate.split(" "); // Split date string by space
						LOG.info("Split estShipDate: " + Arrays.toString(estDate));

						if (estDate.length >= 2) {
							if (DEFAULT_LONGEST_EST_SHIP_DATE.equals(estDate[1]) || "0".equals(getActualStockQty)) { // Check for special conditions
								LOG.info("Calculating future date due to DEFAULT_LONGEST_EST_SHIP_DATE or Zero Stock.");
								LocalDate futureDate = addWeekDays(LocalDate.now(), cartEntryData.getLeadTime() * 5); // Calculate future date
								String formattedFutureDate = futureDate.format(formatter);
								LOG.info("Calculated Future Date: " + formattedFutureDate);

								EstimateShipData estimateShipDate1 = new EstimateShipData();
								estimateShipDate1.setStockQty(estDate[0]);
								estimateShipDate1.setShipDate(formattedFutureDate); // Add future date entry
								formattedEstShipDates.add(estimateShipDate1);
							} else { // Normal date handling
								LOG.info("Normal estimated shipping date: " + estDate[1]);
								estimateShipDate.setStockQty(estDate[0]);
								estimateShipDate.setShipDate(estDate[1]);
								formattedEstShipDates.add(estimateShipDate);
							}

							if (isRequestedDeliveryDateAvailable) { // Add requested delivery date if available
								String shipDate = new SimpleDateFormat("dd-MMM-yyyy").format(entryModel.getRequestedDeliveryDate());
								LOG.info("Found Requested Delivery Date: " + shipDate);
								EstimateShipData estimateShipDate2 = new EstimateShipData();
								estimateShipDate2.setStockQty(estDate[0]);
								estimateShipDate2.setShipDate(shipDate);
								formattedEstShipDates.add(estimateShipDate2);
							}
						}
					}
				}
				cartEntryData.setEstShipData(formattedEstShipDates);
				cartEntryData.setDiscountPrice(entryModel.getDiscountPrice());
				cartEntryData.setDiscountPercentage(entryModel.getDiscountPercentage());
				final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) entryModel.getProduct();
				if (geEdgeProductModel.getAtp() != null && geEdgeProductModel.getAtp().equals(Config.getString("ATP_PRODUCT", "S2")))
				{
					cartEntryData.setNotes(Config.getString("ATP_PRODUCT_NAME", "ATP_PRODUCT_NOTES"));
				}
				else
				{
					cartEntryData.setNotes(Config.getString("NON_ATP_PRODUCT_NAME", "NON_ATP_PRODUCT_NOTES"));
				}
				populateSalesAreaSpecificFieldsBasedonCurrentSalesArea(geEdgeProductModel, productData);
				cartEntryData.setProduct(productData);
				// Added for the Cart entry notes
				cartEntryData.setEntryNotes(entryModel.getNote());

				// Added for Price and Availability - R2.0
				cartEntryData.setRequestedDeliveryDate(entryModel.getRequestedDeliveryDate());
				cartEntryData.setPlant(entryModel.getPlant());
				cartEntryData.setAvailableQuantity(entryModel.getAvailableQuantity());

				LOG.info("In BHGE Cart Populator Plant details :::::: " + cartEntryData.getPlant());
				/**
				 * If it is a duplicate item, do not populate stock details
				 *
				 */
				final String productCode = entryModel.getProduct().getCode();
				boolean isRepeatLineItem = false;
				if (productCodeSet.contains(productCode))
				{
					isRepeatLineItem = true;
				}
				productCodeSet.add(productCode);
				if (!isRepeatLineItem)
				{
					cartEntryData.setIsDuplicateLine(false);
				}
				else
				{
					cartEntryData.setIsDuplicateLine(true);
				}
				cartEntryData.setStockDetails(populateStockDetails(entryModel.getStockDetails()));

				LOG.info("In BHGE Cart Populator Stock Details :::::: " + cartEntryData.getStockDetails());
				cartEntryData.setRequestedDelvDate(BHGECommonUtil.formatDate(entryModel.getRequestedDeliveryDate()));
				cartEntryData.setPlantName(entryModel.getPlantName());
				//Migration changes starts
				//cartEntryData.setItemPK(entryModel.getPk().toString());
				//Migration changes ends
				setLineLevelPromotionDetails(currency, entryModel, cartEntryData);
				//SameDayShipment
				cartEntryData.setIsSameDayShipEnabled(entryModel.getIsSameDayShipEnabled());
				cartEntryData.setIsSameDayShipChecked(entryModel.getIsSameDayShipChecked());
				if (entryModel.getPlant() != null && !entryModel.getPlant().isEmpty())
				{
					if (entryModel.getSameDayShipmentCost() != null && entryModel.getIsSameDayShipChecked() != null
							&& entryModel.getIsSameDayShipChecked())
					{
						cartEntryData.setShipmentCost(entryModel.getSameDayShipmentCost());
					}
					else
					{
						cartEntryData.setShipmentCost(entryModel.getSameDayShipmentCost());

						//commented(change after testing)
						//cartEntryData.setShipmentCost(geEdgeCheckoutFacade.getShippingFee(getSalesArea(), entryModel.getPlant()));
					}
				}

				//SDS Criteria set
				//cartEntryData.setSdsCriteria(entryModel.getSdsCriteria());
				cartEntryData.setIsPlantEnabled(entryModel.getIsPlantEnabled());
				cartEntryData.setIsDomesticPlant(entryModel.getIsDomesticPlant());
				cartEntryData.setIsCutOffTime(entryModel.getIsCutOffTime());
				cartEntryData.setIsQtyAvailable(entryModel.getIsQtyAvailable());
				double netPrice = 0.0;
				//fixed price discount on products
				if (entryModel.getDiscountValues() != null && !entryModel.getDiscountValues().isEmpty()
						&& entryModel.getOrder().getAppliedCouponCodes() != null
						&& entryModel.getOrder().getAppliedCouponCodes().size() > 0
						&& BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_YP
								.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(
										entryModel.getOrder().getAppliedCouponCodes().iterator().next(), entryModel.getOrder())))
				{
					netPrice = entryModel.getTotalPrice().doubleValue() / entryModel.getQuantity();

					if (entryModel.getIsSameDayShipChecked() != null && entryModel.getIsSameDayShipChecked())
					{
						netPrice += entryModel.getSameDayShipmentCost();
					}
					LOG.debug("BHGECartPopulator net price scenario 1 is==" + netPrice);
				}
				else if (entryModel.getDiscountValues() != null && !entryModel.getDiscountValues().isEmpty()
						&& entryModel.getOrder().getAppliedCouponCodes() != null
						&& entryModel.getOrder().getAppliedCouponCodes().size() > 0
						&& BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_LP
								.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(
										entryModel.getOrder().getAppliedCouponCodes().iterator().next(), entryModel.getOrder())))
				{

					netPrice = entryModel.getTotalPrice().doubleValue() / entryModel.getQuantity();

					if (entryModel.getIsSameDayShipChecked() != null && entryModel.getIsSameDayShipChecked())
					{
						netPrice += entryModel.getSameDayShipmentCost();
					}
					LOG.debug("BHGECartPopulator net price scenario 2 is==" + netPrice);
				}
				else
				{
					if (entryModel.getListPrice() != null && entryModel.getListPrice().doubleValue() != 0.0)
					{
						// Setting Net Total at line level items
						netPrice = entryModel.getListPrice();
					}
					else if (entryModel.getBasePrice() != null && entryModel.getProduct() != null
							&& entryModel.getProduct().getSapConfigurable() == false)
					{
						netPrice = entryModel.getBasePrice();
					}
					if (cartCommerceType.equalsIgnoreCase("RETURNS"))
					{
						netPrice = entryModel.getTotalReturnPrice().doubleValue() / entryModel.getQuantity();
					}

					if (null != entryModel.getYourPriceDiscount())
					{
						netPrice -= entryModel.getYourPriceDiscount();
					}

					if (entryModel.getDiscountValues() != null && !entryModel.getDiscountValues().isEmpty())
					{
						netPrice -= cartEntryData.getCouponDiscount();
					}

					if (entryModel.getIsSameDayShipChecked() != null && entryModel.getIsSameDayShipChecked())
					{
						netPrice += entryModel.getSameDayShipmentCost();
					}
					// Adding VC Price if it is available
					if (entryModel.getVcOptionsPrice() != null)
					{
						LOG.debug("BHGECartPopulator VC price is " + entryModel.getVcOptionsPrice());
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
				/*
				 * double netPrice = entryModel.getTotalPrice();
				 *
				 * if(entryModel.getIsSameDayShipChecked() != null && entryModel.getIsSameDayShipChecked()) { netPrice +=
				 * cartEntryData.getShipmentCost(); }
				 */

				cartEntryData.setNetTotal(netPrice);

				//Setting netPrice and netTotal for Bently
				if(StringUtils.equalsIgnoreCase(productLine,"cordant") && null != entryModel.getDiscountPrice() && !StringUtils.contains(entryModel.getDiscountPrice(),"Disc, Price not available"))
				{
					netPrice = Double.parseDouble(entryModel.getDiscountPrice());
					cartEntryData.setNetTotal(netPrice);
				}

				LOG.debug("BHGECartPopulator net price scenario 3 is==" + netPrice);
				//Setting Product Type
				if (geEdgeProductModel.getProductType() != null)
				{
					cartEntryData.setProductType(geEdgeProductModel.getProductType().getCode());
				}
				cartEntryData.setNetSellingPrice(populatePrice(entryModel.getQuantity() * netPrice, currency));

				// Populating the VC Component Model price breakup for VC materials
				cartEntryData.setComponentPriceList(populateComponentDetails(entryModel.getComponentPrices(), currency));
				if (cartEntryData.getProduct().getMinOrderQty() != null)
				{
					if (cartEntryData.getQuantity().intValue() < cartEntryData.getProduct().getMinOrderQty().intValue())
					{
						cartEntryData.setMinOrderQtyError(Boolean.TRUE);
					}
				}
				if (cartCommerceType.equalsIgnoreCase("RETURNS"))
				{
					final List<String> offeringList = new ArrayList<>();
					if (Objects.nonNull(entryModel.getBhgeServiceOfferings()))
					{
						for (final BHGEServiceOfferingsModel model : entryModel.getBhgeServiceOfferings())
						{
							if (!StringUtils.isEmpty(model.getOfferingText()))
							{
								offeringList.add(model.getOfferingText());
							}
							else
							{
								offeringList.add(model.getOfferingType().toString());
							}
						}
						cartEntryData.setRmaOfferings(offeringList);
					}
					cartEntryData.setReturnLocation(getPlantName(entryModel.getReturnToSiteName()));
				}
				entryData.add(cartEntryData);
			}
		}
		return entryData;
	}

	private String getPlantName(final String plantCode)
	{
		String code = "";

		if (!StringUtils.isEmpty(plantCode))
		{
			String[] plantCodeArr = plantCode.split("-");
			if(plantCodeArr.length > 1)
			{
				code = plantCodeArr[1];
			}
			return bhgeRmaFormDao.getPlantName(code) + "-" + code;

		}
		else
		{
			return plantCode + "-" + code;
		}
	}

	private List<VCComponentPriceData> populateComponentDetails(final List<VCComponentPriceModel> componentModels,
			final CurrencyModel currency)
	{
		final List<VCComponentPriceData> componentPrices = new ArrayList<VCComponentPriceData>();
		if (null != componentModels && componentModels.size() > 0)
		{
			for (final VCComponentPriceModel model : componentModels)
			{
				final VCComponentPriceData priceData = new VCComponentPriceData();
				priceData.setName(model.getName());
				priceData.setDescription(model.getDescription());
				priceData.setCurrency(model.getCurrency());
				priceData.setComponentPrice(populatePrice(model.getComponentPrice(), currency));
				priceData.setTotalPrice(populatePrice(model.getTotalPrice(), currency));
				componentPrices.add(priceData);
			}
		}
		return componentPrices;
	}

	/*
	 * If Ship mode is Partial then we will have to set the availability details for each line item, If Ship mode is
	 * Complete then we will have to set the largest date to all cart line items.
	 */
	public List<String> getEstimatedShipDatesForCartEntry(final AbstractOrderEntryModel entryModel)
	{
		final AbstractOrderModel cart = entryModel.getOrder();
		List<String> estShippingDates = new ArrayList<String>();
		long remainingCartQty = entryModel.getQuantity();


		// If Ship Mode is Partial then set the line level Estimated ship dates
		if (null != cart.getIsShipCompleteOrder() && cart.getIsShipCompleteOrder())
		{
			for (final String estShipDate : entryModel.getEstShippingDates())
			{
				if (StringUtils.isNotBlank(estShipDate) && !estShipDate.endsWith(shipDateMessage))
				{
					final String[] splitEstDate = estShipDate.split(" ");
					if (null != splitEstDate && StringUtils.isNotBlank(splitEstDate[0]) && StringUtils.isNotBlank(splitEstDate[1])
							&& NumberUtils.isNumber(splitEstDate[0]))
					{
						final long comQty = Long.parseLong(splitEstDate[0]);

						if (comQty <= remainingCartQty)
						{
							estShippingDates.add(estShipDate);
							remainingCartQty -= comQty;
						}
						else
						{
							if (remainingCartQty > 0)
							{
								estShippingDates.add(Long.toString(remainingCartQty) + " " + splitEstDate[1]);
								break;
							}
						}
					}
				}
				else
				{
					LOG.debug("Estimated ship date is either Null or Invalid " + estShipDate);
				}
			}
		}
		else
		{
			// If Ship Mode is Complete then set the largest estimated ship date for all cart items
			LOG.debug("getEstimatedShipDatesForCartEntry: Ship Mode is Complete");
			final List<String> list = new ArrayList<String>();
			list.add(shipDateMessage);
			estShippingDates = (entryModel.getEstShippingDates().size() > 0) ? entryModel.getEstShippingDates() : list;
		}

		if (estShippingDates.size() == 0)
		{
			estShippingDates.add(shipDateMessage);
		}
		LOG.debug("getEstimatedShipDatesForCartEntry: In Entry Data " + estShippingDates);
		return estShippingDates;
	}

	private void setLineLevelPromotionDetails(final CurrencyModel currency, final AbstractOrderEntryModel entryModel,
			final OrderEntryData cartEntryData)
	{
		/** Release 2.0 - Populate Line level coupon discount details */
		final List<DiscountValue> discountList = entryModel.getDiscountValues();
		cartEntryData.setCouponDiscount(0.00);
		if (discountList != null && !discountList.isEmpty())
		{
			/** At any point in this portal - only one discount should be present */
			final DiscountValue discount = discountList.get(0);
			final Double discountValue = discount.getValue();
			final Double appliedDiscountValue = discount.getAppliedValue();
			cartEntryData.setCouponDiscount(discountValue);

			if (!discount.isAbsolute())
			{
				cartEntryData.setCouponDiscountPercentage(discountValue);
				if (appliedDiscountValue > 0)
				{

					if (entryModel.getOrder().getAppliedCouponCodes() != null
							&& entryModel.getOrder().getAppliedCouponCodes().size() > 0
							&& BhgeCoreConstants.DISC_CODE_PERCENTAGE_ON_LP
									.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(
											entryModel.getOrder().getAppliedCouponCodes().iterator().next(), entryModel.getOrder())))
					{
						/**
						 * difference between Applied value and your price should be the coupon discount
						 */
						double discountVal = appliedDiscountValue / entryModel.getQuantity();
						discountVal = discountVal - cartEntryData.getYourPriceDiscount().getValue().doubleValue();
						cartEntryData.setCouponDiscount(discountVal);
					}
					else
					{
						cartEntryData.setCouponDiscount(appliedDiscountValue / entryModel.getQuantity());
					}
				}
				else
				{
					cartEntryData.setCouponDiscount(0.00);
				}
			}
			else
			{
				if (appliedDiscountValue > 0 && entryModel.getOrder().getAppliedCouponCodes() != null
						&& entryModel.getOrder().getAppliedCouponCodes().size() > 0)
				{
					final String couponcode = entryModel.getOrder().getAppliedCouponCodes().iterator().next();
					final String discountCode = bhgeCouponService.checkIfTargetPriceDiscountonYP(couponcode, entryModel.getOrder());
					if (BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_YP.equalsIgnoreCase(discountCode))
					{
						final double discountval = new Double(cartEntryData.getDiscountPrice()).doubleValue();
						final double carttotal = cartEntryData.getTotalPrice().getValue().doubleValue() / cartEntryData.getQuantity();
						cartEntryData.setCouponDiscount(discountval - carttotal);
					}
					else if (BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_LP.equalsIgnoreCase(discountCode))
					{
						final double discountval = new Double(cartEntryData.getDiscountPrice()).doubleValue();
						final double carttotal = cartEntryData.getTotalPrice().getValue().doubleValue() / cartEntryData.getQuantity();
						cartEntryData.setCouponDiscount(discountval - carttotal);
					}
					else if (BhgeCoreConstants.DISC_CODE_FIXED_VALUE_ON_LP.equalsIgnoreCase(discountCode))
					{
						/**
						 * difference between discountValue and your price should be the coupon discount
						 */
						double discountVal = discountValue;
						discountVal = discountVal - cartEntryData.getYourPriceDiscount().getValue().doubleValue();
						cartEntryData.setCouponDiscount(discountVal);
					}
					else
					{
						cartEntryData.setCouponDiscount(appliedDiscountValue / entryModel.getQuantity());
					}

				}
				else
				{
					cartEntryData.setCouponDiscount(0.00);
				}
			}
		}
		/** Overriding OOTB logic and total price of single quantity in this field */
		if (entryModel.getTotalPrice() != 0)
		{
			final double lineLevelPrice = entryModel.getTotalPrice() / entryModel.getQuantity();
			cartEntryData.setTotalPrice(populatePrice(lineLevelPrice, currency));
		}
		else
		{
			final double lineLevelPrice = entryModel.getTotalReturnPrice() / entryModel.getQuantity();
			cartEntryData.setTotalPrice(populatePrice(lineLevelPrice, currency));
		}

	}

	/**
	 * This method will populate the Actual stock details for the cart entry
	 *
	 * @param availabilityDetails
	 * @return
	 */
	protected Set<BHGEStockDetailsData> populateStockDetails(final Collection<GEEdgeStockDetailModel> stockDetails)
	{
		final Set<BHGEStockDetailsData> stockDetailsDatas = new LinkedHashSet<BHGEStockDetailsData>();
		if (null != stockDetails && stockDetails.size() > 0)
		{
			for (final GEEdgeStockDetailModel stockDetail : stockDetails)
			{
				final BHGEStockDetailsData stockDetailData = new BHGEStockDetailsData();
				stockDetailData.setPlant(stockDetail.getPlant());
				stockDetailData.setActualStockQty(stockDetail.getActualStockQty());
				stockDetailData.setMaterial(stockDetail.getMaterial());
				stockDetailData.setPlantName(stockDetail.getPlantName());
				stockDetailData.setLeadtime(stockDetail.getLeadtime());
				stockDetailsDatas.add(stockDetailData);
			}
			return stockDetailsDatas;
		}
		return null;
	}

	/**
	 * To populate the Availability details at the cart entry level
	 *
	 * @param availabilityDetails
	 * @return
	 */
	protected List<BHGEAvailabilityDetailsData> populateAvailabilityDetails(
			final Collection<GEEdgeAvailabilityDetailModel> availabilityDetails)
	{
		final List<BHGEAvailabilityDetailsData> availabiltyDetailDatas = new ArrayList<BHGEAvailabilityDetailsData>();
		if (null != availabilityDetails && !availabilityDetails.isEmpty())
		{
			for (final GEEdgeAvailabilityDetailModel availDetailModel : availabilityDetails)
			{
				final BHGEAvailabilityDetailsData detailData = new BHGEAvailabilityDetailsData();
				detailData.setPlant(availDetailModel.getPlant());
				detailData.setCommittedQuantity(availDetailModel.getCommittedQuantity());
				detailData.setActualStockQty(availDetailModel.getActualStockQty());
				detailData.setCommittedDate(availDetailModel.getCommittedDate());
				detailData.setIsDefaultPlant(availDetailModel.getIsDefaultPlant());
				detailData.setPlantName(availDetailModel.getPlantName());
				availabiltyDetailDatas.add(detailData);
			}
			return availabiltyDetailDatas;
		}
		return null;
	}

	protected PriceData populatePrice(final Double price, final CurrencyModel currency)
	{
		final double priceValue = price != null ? price.doubleValue() : 0d;
		return bhgePriceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(priceValue), currency);
	}

	private List<ShippingCarrierMethodData> populatCarrierMethod(final List<EnumerationValueModel> sourceList,
			final String shippingCharge)
	{
		final List<ShippingCarrierMethodData> targetList = new ArrayList<ShippingCarrierMethodData>();

		if (sourceList != null)
		{
			for (final EnumerationValueModel enumValue : sourceList)
			{
				if (enumValue != null)
				{
					final ShippingCarrierMethodData shippingCarrierData = new ShippingCarrierMethodData();

					shippingCarrierData.setCode(enumValue.getCode());

					shippingCarrierData.setName(enumValue.getName());

					shippingCarrierData.setShippingCharge(shippingCharge);

					targetList.add(shippingCarrierData);
				}

			}
		}

		return targetList;
	}


	/** Release 2.0 Changes */



	public VoucherService getVoucherService()
	{
		return voucherService;
	}

	/**
	 * @return the bhgePriceDataFactory
	 */
	public BHGEPriceDataFactory getBhgePriceDataFactory()
	{
		return bhgePriceDataFactory;
	}

	/**
	 * @param bhgePriceDataFactory
	 *           the bhgePriceDataFactory to set
	 */
	public void setBhgePriceDataFactory(final BHGEPriceDataFactory bhgePriceDataFactory)
	{
		this.bhgePriceDataFactory = bhgePriceDataFactory;
	}

	public void setVoucherService(final VoucherService voucherService)
	{
		this.voucherService = voucherService;
	}

	@Override
	public ModelService getModelService()
	{
		return modelService;
	}

	@Override
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	@Override
	public PromotionsService getPromotionsService()
	{
		return promotionsService;
	}

	@Override
	public void setPromotionsService(final PromotionsService promotionsService)
	{
		this.promotionsService = promotionsService;
	}

	@Override
	public Converter<PromotionResultModel, PromotionResultData> getPromotionResultConverter()
	{
		return promotionResultConverter;
	}

	@Override
	public void setPromotionResultConverter(final Converter<PromotionResultModel, PromotionResultData> promotionResultConverter)
	{
		this.promotionResultConverter = promotionResultConverter;
	}

	/*
	 * Adds applied and potential promotions.
	 */
	@Override
	protected void addPromotions(final AbstractOrderModel source, final AbstractOrderData prototype)
	{
		addPromotions(source, getPromotionsService().getPromotionResults(source), prototype);
	}

	@Override
	protected void addPromotions(final AbstractOrderModel source, final PromotionOrderResults promoOrderResults,
	                             final AbstractOrderData prototype)
	{
		LOG.info("===== addPromotions START =====");

		if (promoOrderResults != null)
		{
			LOG.info("promoOrderResults is NOT NULL");

			final double productsDiscountsAmount = getProductsDiscountsAmount(source);
			final double orderDiscountsAmount = getOrderDiscountsAmount(source);

			LOG.info("productsDiscountsAmount: " + productsDiscountsAmount);
			LOG.info("orderDiscountsAmount: " + orderDiscountsAmount);

			double totalDiscount = productsDiscountsAmount + orderDiscountsAmount;
			LOG.info("totalDiscount (calculated): " + totalDiscount);

			prototype.setProductDiscounts(createPrice(source, Double.valueOf(productsDiscountsAmount)));
			prototype.setOrderDiscounts(createPrice(source, Double.valueOf(orderDiscountsAmount)));
			prototype.setTotalDiscounts(createPrice(source, Double.valueOf(totalDiscount)));

			LOG.info("Applied Order Promotions count: " + promoOrderResults.getAppliedOrderPromotions().size());
			LOG.info("Applied Product Promotions count: " + promoOrderResults.getAppliedProductPromotions().size());

			prototype.setAppliedOrderPromotions(getPromotions(promoOrderResults.getAppliedOrderPromotions()));
			prototype.setAppliedProductPromotions(getPromotions(promoOrderResults.getAppliedProductPromotions()));
		}

		LOG.info("===== addPromotions END =====");
	}

	@Override
	protected double getProductsDiscountsAmount(final AbstractOrderModel source)
	{
		LOG.info("Entering getProductsDiscountsAmount");

		double discounts = 0.0d;
		LOG.info("Initial discounts value: {}" + discounts);

		final List<AbstractOrderEntryModel> entries = source.getEntries();
		LOG.info("Fetched entries: {}"+ entries);

		if (entries != null)
		{
			LOG.info("entries is not null");

			for (final AbstractOrderEntryModel entry : entries)
			{
				LOG.info("Processing entry: {}"+ entry);

				final List<DiscountValue> discountValues = entry.getDiscountValues();
				LOG.info("Fetched discountValues: {}" + discountValues);

				if (discountValues != null)
				{
					LOG.info("discountValues is not null");

					for (final DiscountValue dValue : discountValues)
					{
						LOG.info("Processing discount value: {}" + dValue);

						discounts += dValue.getValue() * entry.getQuantity();
						LOG.info("Updated discounts: {}" + discounts);
					}
				}
			}
		}

		LOG.info("Returning discounts: {}" + discounts);

		return discounts;
	}

	protected Boolean getCouponListPrice(final AbstractOrderModel source)
	{
		boolean islistprice = false;
		final String couponcode = source.getAppliedCouponCodes().iterator().next();
		final BHGECouponModel coupon = bhgeCouponService.getAppliedCouponToCart(couponcode);
		if (coupon != null)
		{
			islistprice = coupon.getApplyOnlistPrice();
		}
		return islistprice;
	}

	@Override
	protected double getOrderDiscountsAmount(final AbstractOrderModel source)
	{
		LOG.info("Entering getOrderDiscountsAmount");

		double discounts = 0.0d;
		LOG.info("Initial discounts value: {}" + discounts);

		final List<DiscountValue> discountList = source.getGlobalDiscountValues();
		LOG.info("Fetched discountList: {}" + discountList);

		if (discountList != null && !discountList.isEmpty())
		{
			LOG.info("discountList is not null or empty");

			for (final DiscountValue discount : discountList)
			{
				LOG.info("Processing discount: {}" + discount);

				final double value = discount.getAppliedValue();
				LOG.info("Applied value: {}" + value);

				if (value > 0.0d)
				{
					LOG.info("Value is greater than 0");

					discounts += value;
					LOG.info("Updated discounts: {}" + discounts);
				}
			}
		}

		LOG.info("Returning discounts: {}" + discounts);

		return discounts;
	}

	/*
	 * Extracts (and converts to POJOs) promotions from given results.
	 */
	@Override
	protected List<PromotionResultData> getPromotions(final List<PromotionResult> promotionsResults)
	{
		final ArrayList<PromotionResultModel> promotionResultModels = getModelService().getAll(promotionsResults,
				new ArrayList<PromotionResultModel>());
		return getPromotionResultConverter().convertAll(promotionResultModels);
	}

	@Override
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

		return getPriceDataFactory().create(PriceDataType.BUY, BigDecimal.valueOf(priceValue), currency);
	}

	private String getSalesArea()
	{
		final String userSalesRegion = bhgeUserProfileFacade.getUserDefaultSalesRegion();
		final String[] salesArea = userSalesRegion.split("_");
		return salesArea[0];
	}

	private String getLongestLeadTime(final List<OrderEntryData> entries)
	{
		String requiredLeadDate = null;
		final SortedSet<Date> estimatedDateList = new TreeSet<Date>();
		final SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
		CartModel cart = bhgeCartService.getSessionCart();
		String productLine = sessionService.getAttribute("productLine");
		for	(OrderEntryData entry: entries){
			LOG.info("line 1566 : " + entry.getRequestedDeliveryDate() + "estShipDate : " + entry.getEstShipData());
			if (StringUtils.isNotBlank(productLine) && StringUtils.containsIgnoreCase(productLine, "cordant") && cart.getIsShipCompleteOrder() && entry.getRequestedDeliveryDate()!=null) {
				LOG.info("Cordant complete shipment: "+productLine);
				LOG.info("line 1569");
				estimatedDateList.add(entry.getRequestedDeliveryDate());
				break;
			}
			else if (CollectionUtils.isNotEmpty(entry.getEstShipData())){
				LOG.info("line 1576");
				for (EstimateShipData estDate: entry.getEstShipData()){
					if	(StringUtils.isNotBlank(estDate.getShipDate()) & !estDate.getShipDate().endsWith(shipDateMessage)
							&& !estDate.getShipDate().endsWith(DEFAULT_LONGEST_EST_SHIP_DATE)){
						LOG.info("line 1580");
						try {
							estimatedDateList.add(formatter.parse(estDate.getShipDate()));
						} catch (ParseException e) {
							LOG.error("Error during date parsing: "+estDate.getShipDate() + "of Entry" + entry.getProduct().getCode());
						}
					}
				}
			}
		}
		LOG.info("US504538 EstimatedShipDates size: "+estimatedDateList.size());
		if (CollectionUtils.isNotEmpty(estimatedDateList)){
			LOG.info("line 1592");
			Date laterDate = estimatedDateList.last();
			requiredLeadDate = formatter.format(laterDate);
		}
		LOG.info("US504538 Lead time date is: "+ requiredLeadDate);
		return requiredLeadDate;
	}

	private double getProductsDiscountsAmount(final CartData source)
	{
		LOG.info("Entering getProductsDiscountsAmount");

		double discounts = 0.0d;
		LOG.info("Initial discounts value: {}" + discounts);

		final List<OrderEntryData> entries = source.getEntries();
		LOG.info("Fetched entries: {}"+ entries);

		if (entries != null)
		{
			LOG.info("entries is not null");

			for (final OrderEntryData entry : entries)
			{
				LOG.info("Processing entry: {}"+ entry);

				final Double discountValues = entry.getCouponDiscount() * entry.getQuantity();
				LOG.info("Calculated discountValues: {}"+ discountValues);

				discounts += discountValues;
				LOG.info("Updated discounts: {}"+discounts);
			}
		}

		LOG.info("Returning discounts: {}"+discounts);

		return discounts;
	}

	private void updateCartForProductRemoval(final List<AbstractOrderEntryModel> entries, final AbstractOrderModel source)
	{
		final List<AbstractOrderEntryModel> delEntries = new ArrayList<>();
		try
		{
			for (final AbstractOrderEntryModel entry : entries)
			{
				if (null == entry.getProduct())
				{
					delEntries.add(entry);
				}
			}
			if (CollectionUtils.isNotEmpty(delEntries))
			{
				for (final AbstractOrderEntryModel entry : delEntries)
				{
					getModelService().remove(entry);
					getModelService().refresh(source);// Fetch a new, updated version of the passed model
					//geEdgeCalculationService.recalculate(source);
					getModelService().save(source);
				}
				entries.removeAll(delEntries);
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error while updating cart based on product removal " + ExceptionUtils.getStackTrace(e));
		}
	}

	private String getDeliveryAccountNumber(final CartModel source)
	{
		final UserModel user = userService.getCurrentUser();
		String custDelAccNumber = null;
		if (null != user && user instanceof GEEdgeCustomerModel)
		{
			custDelAccNumber = ((GEEdgeCustomerModel) user).getDeliveryAccount();
		}
		return (StringUtils.isNotBlank(source.getDeliveryAccountNum())) ? source.getDeliveryAccountNum() : custDelAccNumber;
	}

	/**
	 * @param target
	 */
	private void checkMinOrderQty(final CartData target)
	{
		for (final OrderEntryData data : target.getEntries())
		{
			if (null != data.getMinOrderQtyError() && data.getMinOrderQtyError().booleanValue())
			{
				target.setIsMinOrderQtyProductExists(Boolean.TRUE);
			}
		}

	}

	protected OrderEntryData getOrderEntryData(final AbstractOrderData target, final Integer entryNumber)
	{
		if (target.getEntries() != null && target.getEntries().size() > 0)
		{
			boolean flag = false;
			for (final OrderEntryData entryData : target.getEntries())
			{
				flag = false;
				if (entryNumber.equals(entryData.getEntryNumber()))
				{
					flag = true;
					return entryData;
				}
			}
			//For Adding new item for multiple cart entries
			if (flag == false)
			{
				final OrderEntryData entryData = new OrderEntryData();
				return entryData;
			}
		}
		else
		{
			//For Adding new item for inventory
			final OrderEntryData entryData = new OrderEntryData();
			return entryData;
		}
		return null;
	}

	private Double getSilverClauseTotalPrice(final AbstractOrderEntryModel orderEntry, Double silverClauseTotalDiscount)
	{
		if (orderEntry.getSilverClausePrice() != null)
		{
			final Double silverClauseTotalEntryPrice = orderEntry.getSilverClausePrice() * orderEntry.getQuantity();
			if (orderEntry.getSilverClausePricePercentage() != null
					&& orderEntry.getSilverClausePricePercentage().contains(BhgeCoreConstants.HYPHEN))
			{
				silverClauseTotalDiscount -= silverClauseTotalEntryPrice;
			}
			else
			{
				silverClauseTotalDiscount += silverClauseTotalEntryPrice;
			}
		}

		return Math.round(silverClauseTotalDiscount*100.0)/100.0;
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
			yourPriceTotalDiscount += CoreAlgorithms.round(Double.valueOf(orderEntry.getYourPriceDiscount() * orderEntry.getQuantity()), digits);
		}
		return yourPriceTotalDiscount;
	}

	/**
	 * Populate lead time on product based on current sales area
	 *
	 * @param source
	 * @param target
	 */
	private void populateSalesAreaSpecificFieldsBasedonCurrentSalesArea(final GEEdgeProductModel source, final ProductData target)
	{
		UserModel currentUser = userService.getCurrentUser();
		if(currentUser != null && currentUser instanceof GEEdgeCustomerModel)
		{
			final GEEdgeCustomerModel geEdgeUser = (GEEdgeCustomerModel) currentUser;
			if(null != geEdgeUser.getDefaultB2BUnit() && geEdgeUser.getDefaultB2BUnit().getUid().contains("_")) {
				String sessionSalesArea = geEdgeUser.getDefaultB2BUnit().getUid().split("_")[1];
					for (final BHGESalesAreaDataModel salesArea : source.getSalesAreaData())
					{
						if (salesArea.getSalesOrganization().equalsIgnoreCase(sessionSalesArea))
						{
							target.setDeliveryTime(salesArea.getDeliveryTime() != null ? salesArea.getDeliveryTime().toString() : null);
							target.setMinOrderQty(
									salesArea.getMinOrderQuantity() != null ? salesArea.getMinOrderQuantity() : source.getMinOrderQuantity());
						}
					}
			}
		}
	}

	private static LocalDate addWeekDays(LocalDate currentDate, Integer days) {
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
