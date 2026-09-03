/**
 *
 */
package com.bhge.rma.facades.cart.converters;

import de.hybris.platform.catalog.references.ProductReferenceService;
import de.hybris.platform.commercefacades.enums.data.ShippingCarrierMethodData;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.PromotionResultData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.converters.impl.AbstractConverter;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.enumeration.EnumerationValueModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.promotions.PromotionsService;
import de.hybris.platform.promotions.model.PromotionResultModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import de.hybris.platform.voucher.VoucherService;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;

import com.bhge.core.coupon.service.BHGECouponService;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.cart.converters.BHGECartDataConverter;
import com.bhge.facades.cart.converters.BHGECommonUtil;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.rma.data.BHGEAdditionalInfoData;
import com.bhge.facades.rma.data.BHGEChemicalsDetailData;
import com.bhge.facades.rma.data.BHGEHazardousInfoData;
import com.bhge.facades.rma.data.BHGERmaData;
import com.bhge.facades.rma.data.BHGERmaFormData;
import com.bhge.facades.rma.data.BHGEServiceOfferingsData;
import com.bhge.facades.user.BHGEUserProfileFacade;


/**
 * @author 1185137
 *
 */
public class BHGERMACartDataConverter extends AbstractConverter<CartModel, BHGERmaData>
{
	private static final String DEFAULT_LONGEST_EST_SHIP_DATE = Config.getString("DEFAULT_LONGEST_EST_SHIP_DATE", "01-Jan-2100");

	@Resource(name = "priceDataFactory")
	private PriceDataFactory priceDataFactory;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "addressConverter")
	private Converter<AddressModel, AddressData> addressConverter;

	@Resource(name = "bhgeChemicalDetailReversePopulator")
	private Populator bhgeChemicalDetailReversePopulator;

	@Resource(name = "bhgeAdditionalInfoReversePopulator")
	private Populator bhgeAdditionalInfoReversePopulator;

	@Resource(name = "bhgeServiceOfferingReversePopulator")
	private Populator bhgeServiceOfferingReversePopulator;

	@Resource(name = "bhgeHazardousInfoReversePopulator")
	private Populator bhgeHazardousInfoReversePopulator;

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

	@Resource(name = "sessionService")
	public SessionService sessionService;
	
	@Resource(name = "bhgeSoldToUtil")
	private BHGESoldToUtil bhgeSoldToUtil;


	private static final Logger LOG = Logger.getLogger(BHGECartDataConverter.class);

	private static final String shipDateMessage = Config.getString("EST_SHIP_DATE_NOTAVBL", "NO ESTIMATE AVAILABLE");

	@Override
	public BHGERmaData createTarget()
	{
		return new BHGERmaData();
	}

	@Override
	public void populate(final CartModel source, final BHGERmaData target)
	{
		//final List<AbstractOrderEntryModel> entries = source.getEntries();
		//Fix for 404 issue
		final List<AbstractOrderEntryModel> entries = CollectionUtils.isNotEmpty(source.getEntries())
				? new ArrayList<>(source.getEntries())
				: new ArrayList<>();

		updateCartForProductRemoval(entries, source);


		final BHGERmaFormData entryData = populateEntries(entries, source.getCurrency());
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


		target.setRmaFormData(entryData);
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
		target.setAlternateContactEmail(source.getAlternateContactEmail());
		target.setAlternateContactName(source.getShippingConatct2Name());
		target.setAlternateContactNumber(source.getShippingConatct2Number());
		target.setIsShipCompleteOrder(source.getIsShipCompleteOrder());

		if (source.getPlanToExport() != null)
		{
			target.setPlanToExport(source.getPlanToExport().getCode());
		}

		target.setIsGovernment(source.getIsGovernment());
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
				prepayCarrierTypes = populatCarrierMethod(listOfvalues, "prepay_add");
			}
			else
			{
				final List<EnumerationValueModel> listOfvalues = bhgeCartService.getShippingCarrierMethods("collect");
				prepayCarrierTypes = populatCarrierMethod(listOfvalues, "collect");
			}
		}

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

		if (source.getDeliveryAddress() != null)
		{
			AddressData addressData=addressConverter.convert(source.getDeliveryAddress());
			if(null!=source.getDeliveryAddress() && StringUtils.isNotBlank(source.getDeliveryAddress().getSapCustomerID())){
				addressData.setSapCustomerID(source.getDeliveryAddress().getSapCustomerID());
			}
			target.setDeliveryAddress(addressData);
		}

		target.setIsNuclearOppurtunity(source.getIsNuclearOppurtunity());
		target.setIsSpecialDiscountPresent(source.getIsSpecialDiscountPresent());
		LOG.info("inside BHGERMACartDataConverter");
		if(source.getSpecialDiscountCode()!=null) {
			LOG.info("inside BHGERMACartDataConverter setSpecialDiscountCode condition");
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


		//Check-out Cart Enhancements //
		target.setCode(source.getCode());
		if (source.getCartType() != null)
		{
			target.setCartType(source.getCartType().getCode());
		}
		target.setTotalPrice(populatePrice(source.getTotalReturnPrice(), source.getCurrency()));
		target.setEndUserNumber(source.getEndUserNumber());
		target.setName(source.getName());


	}


	private BHGERmaFormData populateEntries(final List<AbstractOrderEntryModel> entries, final CurrencyModel currency)
	{

		//final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");
		final SalesAreaData sessionSalesAreaData = bhgeSoldToUtil.getSalesAreaData();
		final List<BHGERmaFormData> rmaFormEntryDataList = new ArrayList<BHGERmaFormData>();
		final Integer cartEntryNumber = sessionService.getAttribute("rmaCartEntryNumber");
		final BHGERmaFormData rmaFormData = new BHGERmaFormData();
		for (final AbstractOrderEntryModel entryModel : entries)
		{
			if (entryModel.getEntryNumber() == cartEntryNumber)
			{
				if (Objects.nonNull(entryModel.getBhgeAdditionalInfo()))
				{
					final BHGEAdditionalInfoData additionalInfoData = new BHGEAdditionalInfoData();
					bhgeAdditionalInfoReversePopulator.populate(entryModel.getBhgeAdditionalInfo(), additionalInfoData);
					rmaFormData.setAdditionalInfo(additionalInfoData);
				}

				if (Objects.nonNull(entryModel.getBhgeServiceOfferings()))
				{
					final List<BHGEServiceOfferingsData> offeringList = new ArrayList<BHGEServiceOfferingsData>();
					entryModel.getBhgeServiceOfferings().forEach(OfferingModel -> {
						final BHGEServiceOfferingsData offeringData = new BHGEServiceOfferingsData();
						bhgeServiceOfferingReversePopulator.populate(OfferingModel, offeringData);
						offeringList.add(offeringData);
					});
					rmaFormData.setServiceOfferings(offeringList);
				}

				if (Objects.nonNull(entryModel.getBhgeHazardousInfo()))
				{
					final BHGEHazardousInfoData hazardInfoData = new BHGEHazardousInfoData();
					bhgeHazardousInfoReversePopulator.populate(entryModel.getBhgeHazardousInfo(), hazardInfoData);
					final List<BHGEChemicalsDetailData> chemicalDataList = new ArrayList<BHGEChemicalsDetailData>();
					entryModel.getBhgeHazardousInfo().getBhgeChemicalDetails().forEach(chemicalModel -> {
						final BHGEChemicalsDetailData chemicaldata = new BHGEChemicalsDetailData();
						bhgeChemicalDetailReversePopulator.populate(chemicalModel, chemicaldata);
						chemicalDataList.add(chemicaldata);
					});

					hazardInfoData.setChemicalDetails(chemicalDataList);
					rmaFormData.setHazardousInfo(hazardInfoData);
				}
				if (entryModel.getPartNumber() != null)
				{
					rmaFormData.setPartNumber(entryModel.getPartNumber().trim());
				}
				else
				{
					rmaFormData.setPartNumber(null);
				}

				final List<String> serialNoList = new ArrayList<String>();
				entryModel.getBhgeRmaEquipSerialNumber().forEach(model -> {
					serialNoList.add(model.getSerialNumber());
				});
				rmaFormData.setSerialNumber(serialNoList);
				LOG.info("Fetch RMA Entry entryModel.getProductDetails() :- " + entryModel.getProductDetails());
				rmaFormData.setProductDetails(entryModel.getProductDetails());
				rmaFormData.setTotalPrice(populatePrice(entryModel.getUnitPrice(), currency));
				rmaFormData.setQuantity(entryModel.getQuantity());
				rmaFormData.setCurrencyIsoCode(sessionSalesAreaData.getCurrencyIso());
				rmaFormData.setCurrencySymbol(sessionSalesAreaData.getCurrencySymbol());
				rmaFormData.setOtherDetails(entryModel.getOtherDetails());
				rmaFormData.setSimilarPart(entryModel.getSimilarPart());
				rmaFormData.setProblemDescription(entryModel.getProblemDescLong());
				rmaFormData.setReturnToSiteName(entryModel.getReturnToSiteName());
				rmaFormData.setReturnToSiteId(entryModel.getReturnToSiteCode());
				if(entryModel.getParentEntryNumber() != null){
					rmaFormData.setIsAccessory(true);
				}
				else{
					rmaFormData.setIsAccessory(false);
				}
				LOG.info("Cart Entry Details :- ");
				LOG.info("Part no.-- " + entryModel.getPartNumber());
				LOG.info("PlanningSite --" + entryModel.getPlanningSite());
				LOG.info("ReturnToSiteCode --" + entryModel.getReturnToSiteCode());
				LOG.info("Serial no.s " + serialNoList);
			}
		}
		return rmaFormData;
	}

	protected PriceData populatePrice(final Double price, final CurrencyModel currency)
	{
		final double priceValue = price != null ? price.doubleValue() : 0d;
		return priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(priceValue), currency);
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

}
