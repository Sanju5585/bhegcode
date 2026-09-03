/**
 *
 */
package com.bhge.facades.cart.converters;

import de.hybris.platform.catalog.enums.ProductReferenceTypeEnum;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.catalog.references.ProductReferenceService;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.enums.data.ShippingCarrierMethodData;
import de.hybris.platform.commercefacades.order.data.AbstractOrderData;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.product.data.PromotionResultData;
import de.hybris.platform.commercefacades.user.data.AddressData;
//import de.hybris.platform.commerceservices.converter.impl.AbstractConverter;
import de.hybris.platform.converters.impl.AbstractConverter;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.enumeration.EnumerationValueModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.promotions.PromotionsService;
import de.hybris.platform.promotions.jalo.PromotionResult;
import de.hybris.platform.promotions.model.PromotionResultModel;
import de.hybris.platform.promotions.result.PromotionOrderResults;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.DiscountValue;
import de.hybris.platform.voucher.VoucherService;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.*;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.log4j.Logger;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.coupon.service.BHGECouponService;
import com.bhge.core.model.BHGECouponModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.facades.BHGEAvailabilityDetailsData;
import com.bhge.facades.BHGEStockDetailsData;
import com.bhge.facades.VCComponentPriceData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.hybris.ge.edge.core.model.type.GEEdgeAvailabilityDetailModel;
import com.hybris.ge.edge.core.model.type.GEEdgeStockDetailModel;
import com.hybris.ge.edge.core.model.type.VCComponentPriceModel;


/**
 * @author udbmishr
 *
 */
public class BHGECartDataConverter extends AbstractConverter<CartModel, CartData>
{

	private static final String DEFAULT_LONGEST_EST_SHIP_DATE = Config.getString("DEFAULT_LONGEST_EST_SHIP_DATE", "01-Jan-2100");

	@Resource(name = "priceDataFactory")
	private PriceDataFactory priceDataFactory;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "addressConverter")
	private Converter<AddressModel, AddressData> addressConverter;



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

	/*
	 * @Resource(name = "geEdgeCheckoutFacade") private GEEdgeCheckoutFacadeImpl geEdgeCheckoutFacade;
	 */

	@Resource(name = "promotionResultConverter")
	private Converter<PromotionResultModel, PromotionResultData> promotionResultConverter;

	@Resource(name = "bhgeCouponService")
	public BHGECouponService bhgeCouponService;

	@Resource(name = "productReferenceService")
	private ProductReferenceService productReferenceService;

	private static final Logger LOG = Logger.getLogger(BHGECartDataConverter.class);

	private static final String shipDateMessage = Config.getString("EST_SHIP_DATE_NOTAVBL", "NO ESTIMATE AVAILABLE");

	@Override
	public CartData createTarget()
	{
		return new CartData();
	}

	@Override
	public void populate(final CartModel source, final CartData target)
	{
		//final List<AbstractOrderEntryModel> entries = source.getEntries();
		//Fix for 404 issue
		final List<AbstractOrderEntryModel> entries = CollectionUtils.isNotEmpty(source.getEntries())
				? new ArrayList<>(source.getEntries())
				: new ArrayList<>();

		updateCartForProductRemoval(entries, source);


		final List<OrderEntryData> entryData = populateEntries(entries, source.getCurrency());
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

		target.setShowATPMessage(showATPMessage);
		target.setShowDiscountMessage(showDiscountMessage);

		target.setEntries(entryData);
		if (source.getEntries() != null)
		{
			target.setTotalItems(source.getEntries().size());
		}
		else
		{
			target.setTotalItems(0);
		}

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
		// RMA + BUY new change
		target.setAlternateContactName(source.getShippingConatct2Name());
		target.setEndUserCategory(source.getEndUserCategory());
		target.setAlternateContactEmail(source.getAlternateContactEmail());
		target.setAlternateContactNumber(source.getShippingConatct2Number());
		//
		target.setIsShipCompleteOrder(source.getIsShipCompleteOrder());

		if (source.getPlanToExport() != null)
		{
			target.setPlanToExport(source.getPlanToExport().getCode());
		}

		target.setIsGovernment(source.getIsGovernment());
		target.setIsBuyer(source.getIsBuyer());
		target.setExportAddress(source.getExportAddressText());
		if (source.getShippingChargeMethod() != null)
		{
			if (source.getShippingChargeMethod().getCode().equalsIgnoreCase("Prepay"))
			{
				target.setDeliveryOptions("Prepay & Add");
			}
			else
			{
				target.setDeliveryOptions(source.getShippingChargeMethod().getCode());
			}

		}
		List<ShippingCarrierMethodData> prepayCarrierTypes = new ArrayList<ShippingCarrierMethodData>();
		if (null != target.getDeliveryOptions())
		{
			if (target.getDeliveryOptions().contains("Prepay"))
			{
				final List<EnumerationValueModel> listOfvalues = bhgeCartService.getShippingCarrierMethods("prepay_add");
				if(listOfvalues != null && listOfvalues.size() > 0) 
				{
					prepayCarrierTypes = populatCarrierMethod(listOfvalues, "prepay_add");
				}
			}
			else
			{
				final List<EnumerationValueModel> listOfvalues = bhgeCartService.getShippingCarrierMethods("collect");
				if(listOfvalues != null && listOfvalues.size() > 0) 
				{
					prepayCarrierTypes = populatCarrierMethod(listOfvalues, "collect");
				}
			}
		}

		if(prepayCarrierTypes != null && prepayCarrierTypes.size() > 0) 
		{
			for (final ShippingCarrierMethodData shippingCarrierMethodData : prepayCarrierTypes)
			{
				if (null != source.getShippingCarrierMethod() && null != source.getShippingCarrierMethod().getCode()
						&& (source.getShippingCarrierMethod().getCode().trim().equalsIgnoreCase(shippingCarrierMethodData.getCode())
								|| source.getShippingCarrierMethod().getCode().trim().replace(" ", "")
										.equalsIgnoreCase(shippingCarrierMethodData.getName().trim().replace(" ", ""))))
				{
					target.setDeliveryCarrier(shippingCarrierMethodData.getCode());
				}
			}
		}


		if (source.getDeliveryAddress() != null)
		{
			AddressData addressData=addressConverter.convert(source.getDeliveryAddress());
			if(null!=source.getDeliveryAddress() && StringUtils.isNotBlank(source.getDeliveryAddress().getSapCustomerID())){
				addressData.setSapCustomerID(source.getDeliveryAddress().getSapCustomerID());
			}
			target.setDeliveryAddress(addressData);

		}

		if (source.getRMAEndUserAddress() != null)
		{
			target.setEnduserAddress(addressConverter.convert(source.getRMAEndUserAddress()));
		}

		target.setIsNuclearOppurtunity(source.getIsNuclearOppurtunity());
		target.setIsSpecialDiscountPresent(source.getIsSpecialDiscountPresent());
		LOG.info("inside cartDatConverter");
		if(source.getSpecialDiscountCode()!=null) {
			LOG.info("inside cartDatConverter setSpecialDiscountCode condition");
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
		target.setIsAttachmentMoved(source.getIsAttachmentMoved());
		target.setRequestedHdrDeliveryDate(BHGECommonUtil.formatDate(source.getReqHeaderDeliveryDate()));
		if (source.getReqHeaderDeliveryDateFilm() != null)
		{
			target.setRequestedHdrDeliveryDateFilm(BHGECommonUtil.formatDate(source.getReqHeaderDeliveryDateFilm()));
		}
		//Added for browser compatibility
		target.setRequestedHdrDeliveryDateFormatted(BHGECommonUtil.parseDateForCompatibility(source.getReqHeaderDeliveryDate()));
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
			final String couponCode = target.getAppliedCouponCodes().iterator().next();

			if (BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_LP
					.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(couponCode, source)))
			{
				final double productsDiscountsAmount = getProductsDiscountsAmount(target);
				target.setTotalDiscounts(createPrice(source, productsDiscountsAmount));
			}
			else if (BhgeCoreConstants.DISC_CODE_FIXED_VALUE_ON_LP
					.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(couponCode, source)))
			{
				final double productsDiscountsAmount = getProductsDiscountsAmount(target);
				target.setTotalDiscounts(createPrice(source, productsDiscountsAmount));
			}
			else if (BhgeCoreConstants.DISC_CODE_PERCENTAGE_ON_LP
					.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(couponCode, source)))
			{
				final double productsDiscountsAmount = getProductsDiscountsAmount(target);
				target.setTotalDiscounts(createPrice(source, productsDiscountsAmount));
			}
			else if (BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_YP
					.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(couponCode, source)))
			{
				final double productsDiscountsAmount = getProductsDiscountsAmount(target);
				target.setTotalDiscounts(createPrice(source, productsDiscountsAmount));

			}
		}
		// Adding Pricing details
		double totalDiscounts = 0d;
		if (null != target.getTotalDiscounts() && null != target.getTotalDiscounts().getValue())
		{
			totalDiscounts = target.getTotalDiscounts().getValue().doubleValue();
		}

		final double subTotalPrice = source.getTotalPrice() - source.getDeliveryCost() + totalDiscounts;
		target.setSubTotal(populatePrice(subTotalPrice, source.getCurrency()));

		String cartCommerceType = "";

		if (Objects.nonNull(source.getCommerceType()))
		{
			cartCommerceType = source.getCommerceType().toString();
		}
		else
		{
			cartCommerceType = "BUY";
		}
		if (Objects.isNull(cartCommerceType) || cartCommerceType != "RETURNS")
		{
			target.setTotalPrice(populatePrice(source.getTotalPrice(), source.getCurrency()));
		}
		else
		{
			target.setTotalPrice(populatePrice(source.getTotalReturnPrice(), source.getCurrency()));
		}


		// Setting Total List Price to the CartData
		target.setTotalListPrice(populatePrice(source.getTotalListPrice(), source.getCurrency()));
		target.setShipmentCost(populatePrice(source.getDeliveryCost(), source.getCurrency()));
		target.setYourPriceDiscount(populatePrice(source.getYourPriceDiscount(), source.getCurrency()));
		target.setDeliveryPoint(source.getDeliveryPoint());
		//Code for getting longest lead time for cart
		if (CollectionUtils.isNotEmpty(source.getEntries()))
		{
			if (null != source.getCartType() && source.getCartType().getCode().equalsIgnoreCase("HYBRID"))
			{
				final List<AbstractOrderEntryModel> filmEntries = new ArrayList<AbstractOrderEntryModel>();
				final List<AbstractOrderEntryModel> nonFilmEntries = new ArrayList<AbstractOrderEntryModel>();
				for (final AbstractOrderEntryModel entryModel : source.getEntries())
				{
					final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) entryModel.getProduct();

					if (geEdgeProductModel.getProductType() != null
							&& geEdgeProductModel.getProductType().getCode().equalsIgnoreCase("ITFILM"))
					{
						filmEntries.add(entryModel);
					}
					else
					{
						nonFilmEntries.add(entryModel);
					}
				}
				if (CollectionUtils.isNotEmpty(filmEntries) && CollectionUtils.isNotEmpty(nonFilmEntries))
				{
					target.setLongestLeadTimeFilm(getLongestLeadTime(filmEntries));
					target.setLongestLeadTime(getLongestLeadTime(nonFilmEntries));
				}
			}
			else
			{
				target.setLongestLeadTime(getLongestLeadTime(source.getEntries()));
			}
		}

		//Check-out Cart Enhancements //
		target.setCode(source.getCode());
		if (source.getCartType() != null)
		{
			target.setCartType(source.getCartType().getCode());
		}
		target.setEndUserNumber(source.getEndUserNumber());
		target.setName(source.getName());
		target.setLargestNonFilmLeadtime(source.getLargestNonFilmLeadtime());
		target.setLargestFilmLeadtime(source.getLargestFilmLeadtime());
		if(null != source.getSurCharge()) {
			LOG.info("BHGECartDataConverter Cart has surCharge value: " + source.getSurCharge());
			target.setSurCharge(source.getSurCharge());
		}
		checkMinOrderQty(target);
		if (StringUtils.isNotBlank(source.getProductLine())) {
			target.setProductLine(source.getProductLine());
		}
		LOG.info("US530529: Cart is of cart type: " + source.getIsQuote());
		target.setIsQuote(BooleanUtils.isTrue(source.getIsQuote()));
	}


	public List<OrderEntryData> populateEntries(final List<AbstractOrderEntryModel> entries, final CurrencyModel currency)
	{


		final List<OrderEntryData> entryData = new ArrayList<OrderEntryData>();
		final Set<String> productCodeSet = new HashSet<String>();
		for (final AbstractOrderEntryModel entryModel : entries)
		{
			CategoryModel parentCategory = null;
			final OrderEntryData cartEntryData = new OrderEntryData();
			cartEntryData.setEntryNumber(entryModel.getEntryNumber());
			cartEntryData.setListPrice(populatePrice(entryModel.getListPrice(), currency));
			cartEntryData.setBasePrice(populatePrice(entryModel.getBasePrice(), currency));
			cartEntryData.setVcOptionsPrice(populatePrice(entryModel.getVcOptionsPrice(), currency));
			cartEntryData.setSilverClausePrice(populatePrice(entryModel.getSilverClausePrice(), currency));
			cartEntryData.setSilverClausePricePercentage(entryModel.getSilverClausePricePercentage());
			if (entryModel.getTotalPrice() != 0)
			{
				cartEntryData.setTotalPrice(populatePrice(entryModel.getTotalPrice(), currency));
			}
			else
			{
				cartEntryData.setTotalPrice(populatePrice(entryModel.getTotalReturnPrice(), currency));
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

			if (null != entryModel.getProduct() && entryModel.getProduct().getPicture() != null)
			{
				final MediaModel mediaModel = entryModel.getProduct().getPicture();
				productData.setUrl(mediaModel.getURL());
			}
			else
			{
				productData.setUrl(Config.getParameter("PRODUCT_DEFAULT_IMAGE_PATH"));
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
			productData.setMinOrderQty(entryModel.getProduct().getMinOrderQuantity());
			cartEntryData.setProduct(productData);
			cartEntryData.setIsEngineeringHold(entryModel.getIsEngineeringHold());


			// Setting Estimated Shipping dates to the cart entry
			if(null != cartEntryData.getRequestedDeliveryDate()){
				LOG.info("Inside Est ship date from entry requested delivery date");
				List<String> estShippingDates = new ArrayList<String>();
				SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
				String estShipDate = formatter.format(cartEntryData.getRequestedDeliveryDate());
				LOG.info("Est ship date: " + estShipDate);
				estShippingDates.add(estShipDate);
				cartEntryData.setEstimatedShipDates(estShippingDates);
			} else {
				cartEntryData.setEstimatedShipDates(getEstimatedShipDatesForCartEntry(entryModel));
			}

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

			// Added for the Cart entry notes
			cartEntryData.setEntryNotes(entryModel.getNote());

			// Added for Price and Availability - R2.0
			cartEntryData.setRequestedDeliveryDate(entryModel.getRequestedDeliveryDate());
			cartEntryData.setPlant(entryModel.getPlant());
			cartEntryData.setAvailableQuantity(entryModel.getAvailableQuantity());
			cartEntryData.setAvailabilityDetails(populateAvailabilityDetails(entryModel.getAvailabilityDetails()));

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
			cartEntryData.setRequestedDelvDate(BHGECommonUtil.formatDate(entryModel.getRequestedDeliveryDate()));
			cartEntryData.setPlantName(entryModel.getPlantName());
			//migration changes starts
			//cartEntryData.setItemPK(entryModel.getPk().toString());
			//migration changes ends
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

				// Setting Net Total at line level items
				netPrice = entryModel.getBasePrice();

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

			}

			/*
			 * double netPrice = entryModel.getTotalPrice();
			 *
			 * if(entryModel.getIsSameDayShipChecked() != null && entryModel.getIsSameDayShipChecked()) { netPrice +=
			 * cartEntryData.getShipmentCost(); }
			 */

			cartEntryData.setNetTotal(netPrice);
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
			entryData.add(cartEntryData);
		}
		return entryData;
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

			final String couponcode = entryModel.getOrder().getAppliedCouponCodes().iterator().next();
			if (!discount.isAbsolute())
			{
				cartEntryData.setCouponDiscountPercentage(discountValue);
				if (appliedDiscountValue > 0)
				{

					if (BhgeCoreConstants.DISC_CODE_PERCENTAGE_ON_LP.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(
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
				if (appliedDiscountValue > 0)
				{

					if (BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_YP
							.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(
									entryModel.getOrder().getAppliedCouponCodes().iterator().next(), entryModel.getOrder())))
					{
						final double discountval = new Double(cartEntryData.getDiscountPrice()).doubleValue();
						final double carttotal = cartEntryData.getTotalPrice().getValue().doubleValue() / cartEntryData.getQuantity();
						cartEntryData.setCouponDiscount(discountval - carttotal);
					}
					else if (BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_LP
							.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(couponcode, entryModel.getOrder())))
					{
						final double discountval = new Double(cartEntryData.getDiscountPrice()).doubleValue();
						final double carttotal = cartEntryData.getTotalPrice().getValue().doubleValue() / cartEntryData.getQuantity();
						cartEntryData.setCouponDiscount(discountval - carttotal);
					}
					else if (BhgeCoreConstants.DISC_CODE_FIXED_VALUE_ON_LP
							.equalsIgnoreCase(bhgeCouponService.checkIfTargetPriceDiscountonYP(
									entryModel.getOrder().getAppliedCouponCodes().iterator().next(), entryModel.getOrder())))
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
		if (null != availabilityDetails && availabilityDetails.size() > 0)
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
		return priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(priceValue), currency);
	}

	private List<ShippingCarrierMethodData> populatCarrierMethod(final List<EnumerationValueModel> sourceList,
			final String shippingCharge)
	{
		final List<ShippingCarrierMethodData> targetList = new ArrayList<ShippingCarrierMethodData>();

		if(sourceList != null && sourceList.size() > 0) 
		{
			for (final EnumerationValueModel enumValue : sourceList)
			{
				final ShippingCarrierMethodData shippingCarrierData = new ShippingCarrierMethodData();

				shippingCarrierData.setCode(enumValue.getCode());

				shippingCarrierData.setName(enumValue.getName());

				shippingCarrierData.setShippingCharge(shippingCharge);

				targetList.add(shippingCarrierData);

			}
		}


		return targetList;
	}


	/** Release 2.0 Changes */

	public PriceDataFactory getPriceDataFactory()
	{
		return priceDataFactory;
	}

	public void setPriceDataFactory(final PriceDataFactory priceDataFactory)
	{
		this.priceDataFactory = priceDataFactory;
	}

	public VoucherService getVoucherService()
	{
		return voucherService;
	}

	public void setVoucherService(final VoucherService voucherService)
	{
		this.voucherService = voucherService;
	}

	public ModelService getModelService()
	{
		return modelService;
	}

	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	public PromotionsService getPromotionsService()
	{
		return promotionsService;
	}

	public void setPromotionsService(final PromotionsService promotionsService)
	{
		this.promotionsService = promotionsService;
	}

	public Converter<PromotionResultModel, PromotionResultData> getPromotionResultConverter()
	{
		return promotionResultConverter;
	}

	public void setPromotionResultConverter(final Converter<PromotionResultModel, PromotionResultData> promotionResultConverter)
	{
		this.promotionResultConverter = promotionResultConverter;
	}

	/*
	 * Adds applied and potential promotions.
	 */
	protected void addPromotions(final AbstractOrderModel source, final AbstractOrderData prototype)
	{
		addPromotions(source, getPromotionsService().getPromotionResults(source), prototype);
	}

	protected void addPromotions(final AbstractOrderModel source, final PromotionOrderResults promoOrderResults,
			final AbstractOrderData prototype)
	{
		if (promoOrderResults != null)
		{
			final double productsDiscountsAmount = getProductsDiscountsAmount(source);
			final double orderDiscountsAmount = getOrderDiscountsAmount(source);

			prototype.setProductDiscounts(createPrice(source, Double.valueOf(productsDiscountsAmount)));
			prototype.setOrderDiscounts(createPrice(source, Double.valueOf(orderDiscountsAmount)));
			prototype.setTotalDiscounts(createPrice(source, Double.valueOf(productsDiscountsAmount + orderDiscountsAmount)));
			prototype.setAppliedOrderPromotions(getPromotions(promoOrderResults.getAppliedOrderPromotions()));
			prototype.setAppliedProductPromotions(getPromotions(promoOrderResults.getAppliedProductPromotions()));
		}
	}

	protected double getProductsDiscountsAmount(final AbstractOrderModel source)
	{
		double discounts = 0.0d;

		final List<AbstractOrderEntryModel> entries = source.getEntries();
		if (entries != null)
		{
			for (final AbstractOrderEntryModel entry : entries)
			{
				final List<DiscountValue> discountValues = entry.getDiscountValues();
				if (discountValues != null)
				{
					for (final DiscountValue dValue : discountValues)
					{
						discounts += dValue.getAppliedValue();
					}
				}
			}
		}
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

	protected double getOrderDiscountsAmount(final AbstractOrderModel source)
	{
		double discounts = 0.0d;
		final List<DiscountValue> discountList = source.getGlobalDiscountValues(); // discounts on the cart itself
		if (discountList != null && !discountList.isEmpty())
		{
			for (final DiscountValue discount : discountList)
			{
				final double value = discount.getAppliedValue();
				if (value > 0.0d)
				{
					discounts += value;
				}
			}
		}

		return discounts;
	}

	/*
	 * Extracts (and converts to POJOs) promotions from given results.
	 */
	protected List<PromotionResultData> getPromotions(final List<PromotionResult> promotionsResults)
	{
		final ArrayList<PromotionResultModel> promotionResultModels = getModelService().getAll(promotionsResults,
				new ArrayList<PromotionResultModel>());
		return getPromotionResultConverter().convertAll(promotionResultModels);
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

		return getPriceDataFactory().create(PriceDataType.BUY, BigDecimal.valueOf(priceValue), currency);
	}

	private String getSalesArea()
	{
		final String userSalesRegion = bhgeUserProfileFacade.getUserDefaultSalesRegion();
		final String[] salesArea = userSalesRegion.split("_");
		return salesArea[0];
	}

	private String getLongestLeadTime(final List<AbstractOrderEntryModel> entries)
	{
		String requiredLeadDate = null;
		final SortedSet<Date> estimatedDateList = new TreeSet<>();
		final SortedSet<Date> lineLevelDateList = new TreeSet<>();
		LOG.info("getLongestLeadTime: Processing entries count: " + (entries != null ? entries.size() : 0));
		for (final AbstractOrderEntryModel entry : entries) {
			LOG.info("1139 Processing entry:"+entry.getEntryNumber());
			LOG.info("1140 requestedDeliveryDate :"+entry.getRequestedDeliveryDate());
			LOG.info("1141 estShippingDates:"+entry.getEstShippingDates());
            populateLineItemLeadTime(lineLevelDateList, entry);
            if (lineLevelDateList != null && lineLevelDateList.size() > 0) {
				LOG.info("Line-level dates for current entry: " + lineLevelDateList);
				estimatedDateList.add(lineLevelDateList.last());
			}
		}
		if (CollectionUtils.isNotEmpty(estimatedDateList)) {
			requiredLeadDate = BHGECommonUtil.parseDateForCompatibility(estimatedDateList.last());
			LOG.info("Final required lead date : " + requiredLeadDate);
		}
		return requiredLeadDate;
	}

	private void populateLineItemLeadTime (SortedSet<Date> lineLevelDateList, AbstractOrderEntryModel entry){
		if (entry.getRequestedDeliveryDate() != null) {
			lineLevelDateList.add(entry.getRequestedDeliveryDate());
			LOG.info("Added requested delivery date: " + entry.getRequestedDeliveryDate());
		}
		else if (entry.getEstShippingDates() != null && !entry.getEstShippingDates().isEmpty()) {
			LOG.info("inside else if- estimated shipping dates: " + entry.getEstShippingDates());
			for (final String lineLevelDate : entry.getEstShippingDates()) {
				LOG.info("Evaluating estimated shipping date string: " + lineLevelDate);
				if (StringUtils.isNotBlank(lineLevelDate) && !lineLevelDate.endsWith(shipDateMessage)
						&& !lineLevelDate.endsWith(DEFAULT_LONGEST_EST_SHIP_DATE)) {
					final String[] splitEstDate = lineLevelDate.split(" ");
					LOG.info("Split estimated date from lineLevelDate: "+ lineLevelDate + "to --> "+ Arrays.toString(splitEstDate));
					if (null != splitEstDate && splitEstDate.length > 1
							&& null != BHGECommonUtil.parseEstimatedDate(splitEstDate[1])) {
						lineLevelDateList.add(BHGECommonUtil.parseEstimatedDate(splitEstDate[1]));
						LOG.info("Parsed and added estimated date: " + splitEstDate[1]);
					}
				}
			}
		}
	}

	private double getProductsDiscountsAmount(final CartData source)
	{
		double discounts = 0.0d;

		final List<OrderEntryData> entries = source.getEntries();
		if (entries != null)
		{
			for (final OrderEntryData entry : entries)
			{
				final Double discountValues = entry.getCouponDiscount() * entry.getQuantity();
				if (discountValues != null)
				{
					discounts += discountValues;
				}
			}
		}
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

}
