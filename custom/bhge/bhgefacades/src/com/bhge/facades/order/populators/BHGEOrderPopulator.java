package com.bhge.facades.order.populators;

import de.hybris.platform.b2bacceleratorfacades.order.populators.B2BOrderPopulator;
import de.hybris.platform.commercefacades.enums.data.ShippingCarrierMethodData;
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
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.enumeration.EnumerationValueModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.util.Config;

import java.math.BigDecimal;
import java.math.MathContext;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.log4j.Logger;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.model.ReturnPOModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.facades.cart.converters.BHGECommonUtil;
import com.bhge.facades.price.BHGEPriceDataFactory;
import com.bhge.facades.user.data.BHGESoldToData;



public class BHGEOrderPopulator<T extends CartData> extends B2BOrderPopulator
{
	private static final Logger LOG = Logger.getLogger(BHGEOrderPopulator.class);
	private PriceDataFactory priceDataFactory;

	/**
	 * @return the priceDataFactory
	 */
	public PriceDataFactory getPriceDataFactory()
	{
		return priceDataFactory;
	}

	/**
	 * @param priceDataFactory
	 *           the priceDataFactory to set
	 */
	public void setPriceDataFactory(final PriceDataFactory priceDataFactory)
	{
		this.priceDataFactory = priceDataFactory;
	}

	@Resource
	SessionService sessionService;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "addressConverter")
	private Converter<AddressModel, AddressData> addressConverter;

	@Resource(name = "productVariantFacade")
	private ProductFacade productFacade;

	@Resource(name = "bhgePriceDataFactory")
	BHGEPriceDataFactory bhgePriceDataFactory;

	/**
	 * @return the addressConverter
	 */
	public Converter<AddressModel, AddressData> getAddressConverter()
	{
		return addressConverter;
	}

	/**
	 * @param addressConverterR
	 *           the addressConverter to set
	 */
	public void setAddressConverter(final Converter<AddressModel, AddressData> addressConverter)
	{
		this.addressConverter = addressConverter;
	}

	@Override
	public void populate(final OrderModel orderModel, final OrderData orderData) throws ConversionException
	{
		LOG.info("Inside BHGEOrderpopulator");
		/*
		 * if (orderModel.getRmaNumber() != null && !orderModel.getRmaNumber().equals("")) {
		 * orderData.setCode(orderModel.getRmaNumber()); } else { orderData.setCode(orderModel.getCode()); }
		 */
		if ("PENDING".equalsIgnoreCase(orderModel.getRmaSapStatus()))
		{
			orderData.setReturnNumber(orderModel.getRmaSapStatus());
		}
		else
		{
			orderData.setReturnNumber(orderModel.getRmaNumber());
		}

		orderData.setCode(orderModel.getCode());
		if (orderModel != null && orderModel.getEndCustomerRefNum() != null)
		{
			orderData.setEndCustomerPo(orderModel.getEndCustomerRefNum());
		}
		if (orderModel != null && orderModel.getPurchaseOrderNumber() != null)
		{
			orderData.setCustomerPO(orderModel.getPurchaseOrderNumber());

		}
		orderData.setDeliveryPoint(orderModel.getDeliveryPoint());
		orderData.setEndUserNumber(orderModel.getEndUserNumber());
		if (orderModel.getCartType() != null)
		{
			orderData.setCartType(orderModel.getCartType().getCode());
		}
        if(null != orderModel.getCurrency()){
            orderData.setCurrencyIso(orderModel.getCurrency().getIsocode());
            orderData.setCurrencySymbol((orderModel.getCurrency().getSymbol()));
        }
		else if(Objects.nonNull(orderModel.getSoldToForCart()) && Objects.nonNull(orderModel.getSoldToForCart().getCurrency()))
		{
			orderData.setCurrencyIso(orderModel.getSoldToForCart().getCurrency().getIsocode());
			orderData.setCurrencySymbol((orderModel.getSoldToForCart().getCurrency().getSymbol()));
		}

		if (Objects.nonNull(orderModel.getSoldToForCart()) && Objects.nonNull(orderModel.getSoldToForCart().getIncoterms1()))
		{
			orderData.setIncoterms(orderModel.getSoldToForCart().getIncoterms1());
		}
		orderData.setShipToContactName(orderModel.getShipToContactName());
		orderData.setShipToContactPhone(orderModel.getShipToContactPhone());
		orderData.setShippingRemarks(orderModel.getShippingRemarks());
		orderData.setNotes(orderModel.getShippingRemarks());
		orderData.setDeliveryAccount(orderModel.getDeliveryAccountNum());
		//orderData.setEndCustonmerPo(orderModel.getEndCustomerRefNum());
		orderData.setOrderConfirmation(orderModel.getOrderConfirmationEMail());
		orderData.setShipNotificationEmail(orderModel.getShipNotificationEmail());
		orderData.setInvoiceEmail(orderModel.getInvoiceEmail());
		orderData.setShippingRemarks(orderModel.getShippingRemarks());
		orderData.setIsExport(orderModel.getIsExport());

		//RMA NEW CHANGE
		orderData.setIsBuyer(orderModel.getIsBuyer());
		orderData.setAlternateContactName(orderModel.getShippingConatct2Name());
		orderData.setAlternateContactNumber(orderModel.getShippingConatct2Number());
		orderData.setAlternateContactEmail(orderModel.getAlternateContactEmail());
		final List<String> poAttachment = new ArrayList<>();
		for (final MediaModel media : ((List<MediaModel>) orderModel.getPoDocs()))
		{
			poAttachment.add(media.getRealFileName());
		}
		orderData.setPoAttachments(poAttachment);
		orderData.setIsShipCompleteOrder(orderModel.getIsShipCompleteOrder());

		if (orderModel.getRMAEndUserAddress() != null)
		{
			orderData.setEnduserAddress(addressConverter.convert(orderModel.getRMAEndUserAddress()));
		}

		if (orderModel.getPaymentAddress() != null)
		{
			orderData.setPaymentAddress(addressConverter.convert(orderModel.getPaymentAddress()));
		}

		if (orderModel.getPlanToExport() != null)
		{
			orderData.setPlanToExport(orderModel.getPlanToExport().getCode());
		}

		if (orderModel.getIsGovernment() != null)
		{
			orderData.setIsGovernment(orderModel.getIsGovernment());
		}
		if (orderModel.getIsNuclearOppurtunity() != null)
		{
			orderData.setIsNuclearOppurtunity(orderModel.getIsNuclearOppurtunity());
		}
		if (orderModel.getIsSpecialDiscountPresent() != null)
		{
			orderData.setIsSpecialDiscountPresent(orderModel.getIsSpecialDiscountPresent());
		}




		if (orderData.getIsSpecialDiscountPresent() != null && orderData.getIsSpecialDiscountPresent().booleanValue())
		{
			LOG.info(" ########################## Baker Hughes Review is required for the Current Order of Order Number "
					+ orderData.getCode());
		}
		else
		{
			LOG.info(" ########################## Baker Hughes Review is not required for the Current Order of Order Number "
					+ orderData.getCode());
		}
		LOG.info("inside BHGEOrderPopulator");
		if (orderModel.getSpecialDiscountCode() != null)
		{
			LOG.info("inside BHGEOrderPopulator setSpecialDiscountCode condition");
			orderData.setSpecialDiscountCode(StringEscapeUtils.unescapeHtml4(orderModel.getSpecialDiscountCode()));
		}
		if (orderModel.getExportAddressText() != null)
		{
			orderData.setExportAddress(orderModel.getExportAddressText());
		}
		LOG.info("ShippingChargeMethod in orderModel is " + orderModel.getShippingChargeMethod());
		if (orderModel.getShippingChargeMethod() != null)
		{
			if (orderModel.getShippingChargeMethod().getCode().equalsIgnoreCase("Prepay"))
			{
				orderData.setDeliveryOptions("Prepay & Add");
			}
			else
			{
				orderData.setDeliveryOptions(orderModel.getShippingChargeMethod().getCode());
			}

		}
		List<ShippingCarrierMethodData> prepayCarrierTypes = new ArrayList<ShippingCarrierMethodData>();
		if (orderData.getDeliveryOptions() != null)
		{
			if (orderData.getDeliveryOptions().contains("Prepay"))
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
			if (null != orderModel.getShippingCarrierMethod() && null != orderModel.getShippingCarrierMethod().getCode()
					&& (orderModel.getShippingCarrierMethod().getCode().trim().equalsIgnoreCase(shippingCarrierMethodData.getCode())
							|| orderModel.getShippingCarrierMethod().getCode().trim().replace(" ", "")
									.equalsIgnoreCase(shippingCarrierMethodData.getName().trim().replace(" ", ""))
							|| orderModel.getShippingCarrierMethod().getCode().trim()
									.equalsIgnoreCase(shippingCarrierMethodData.getCode() + "-" + shippingCarrierMethodData.getName())))
			{
				orderData.setDeliveryCarrier(shippingCarrierMethodData.getCode());
				orderData.setDeliveryCarrierName(shippingCarrierMethodData.getName());
			}
		}

		if (orderModel.getAttachments() != null && !orderModel.getAttachments().isEmpty())
		{
			final List<MediaModel> attachmentFile = (List<MediaModel>) orderModel.getAttachments();
			orderData.setAttachments(attachmentFile);
			for (final MediaModel mediaFile : attachmentFile)
			{
				orderData.setAttachmentName(mediaFile.getRealFileName());
			}
		}
        //Adding EUC doc filename on order detial page
		if (orderModel.getEuc() != null && CollectionUtils.isNotEmpty(orderModel.getEuc()))
		{
			LOG.info("Inside if condition of EUC BHGEOrderpopulator");
			final List<MediaModel> eucattachmentFile = (List<MediaModel>) orderModel.getEuc();
			for (final MediaModel mediaFile : eucattachmentFile)
			{
				orderData.setEucAttachmentName(mediaFile.getRealFileName());
			}
		}
		orderData.setIsAttachmentMoved(orderModel.getIsAttachmentMoved());
		orderData.setRequestedHdrDeliveryDate(BHGECommonUtil.formatDate(orderModel.getReqHeaderDeliveryDate()));
		if (orderModel.getReqHeaderDeliveryDateFilm() != null)
		{
			orderData.setRequestedHdrDeliveryDateFilm(BHGECommonUtil.formatDate(orderModel.getReqHeaderDeliveryDateFilm()));
		}
		//Added for browser compatibility
		orderData.setRequestedHdrDeliveryDateFormatted(
				BHGECommonUtil.parseDateForCompatibility(orderModel.getReqHeaderDeliveryDate()));
		Collection<String> coupons = Collections.emptyList();

		coupons = orderModel.getAppliedCouponCodes();

		if (coupons == null)
		{
			orderData.setAppliedCouponCodes(new ArrayList<>());

		}
		else
		{
			orderData.setAppliedCouponCodes(new ArrayList<>(coupons));
		}
		//orderData.setTotalPrice(createPrice(orderModel, orderModel.getTotalReturnPrice()));
		String CommerceType = "";
		if (null != orderModel.getCommerceType())
		{
			if (orderModel.getCommerceType().toString().equalsIgnoreCase("BUY"))
			{
				CommerceType = orderModel.getCommerceType().toString();
				orderData.setTotalPrice(createPrice(orderModel, orderModel.getTotalPrice()));
				orderData.setCommerceType("BUY");
			}
			if (orderModel.getCommerceType().toString().equalsIgnoreCase("RETURNS"))
			{
				CommerceType = orderModel.getCommerceType().toString();
				orderData.setTotalPrice(createPrice(orderModel, orderModel.getTotalReturnPrice()));
				orderData.setCommerceType("RETURNS");
			}
			if (orderModel.getCommerceType().toString().equalsIgnoreCase("GUESTBUY"))
			{
				CommerceType = orderModel.getCommerceType().toString();
				orderData.setTotalPrice(createPrice(orderModel, orderModel.getTotalPrice()));
				orderData.setCommerceType("GUESTBUY");
			}	
			orderData.setTotalListPrice(createPrice(orderModel, orderModel.getTotalListPrice()));
		}
		else
		{
			CommerceType = "BUY";
			orderData.setTotalPrice(createPrice(orderModel, orderModel.getTotalPrice()));
			orderData.setCommerceType("RETURNS");
		}

		orderData.setEntries(populateOrderEntry(orderModel.getEntries(), CommerceType, orderData, orderModel));
		final List<String> poFiles = new ArrayList<>();
		for (final ReturnPOModel poModel : orderModel.getReturnPO())
		{
			orderData.setEndCustomerPo(poModel.getEndCustomerPo());
			orderData.setCustomerPO(poModel.getPoNumber());
			orderData.setReturnLocation(poModel.getReturnLocation());
			if (poModel.getPoAttachments() != null)
			{
				poModel.getPoAttachments().forEach(file -> {
					poFiles.add(file.getRealFileName());
				});
			}
		}
		orderData.setReturnPoAttachment(poFiles);
		if (orderModel.getEntries() != null)
		{
			orderData.setTotalReturnItems((long) orderModel.getEntries().size());

		}
		double totalReturnPrice = 0.0;
		Boolean priceFlag = false;
		for (final OrderEntryData entryData : orderData.getEntries())
		{

			totalReturnPrice = totalReturnPrice + entryData.getNetSelling();
			if (!(entryData.getNetSelling() > 0))
			{
				priceFlag = true;
			}
		}
		if (priceFlag)
		{
			totalReturnPrice = 0.0;
		}

		orderData.setTotalReturnPrice(createPrice(orderModel, totalReturnPrice));
		
		// set Invoice Contact
		if (orderModel.getInvoiceContact() != null)
		{
		orderData.setInvoiceContact(orderModel.getInvoiceContact());
		}
		
		// set Invoice Contact Name
		if (orderModel.getInvoiceContactName() != null)
		{
		orderData.setInvoiceContactName(orderModel.getInvoiceContactName());
		}
		
		// set Invoice Contact Num
		if (orderModel.getInvoiceContact1Num() != null)
		{
		orderData.setInvoiceContact1Num(orderModel.getInvoiceContact1Num());
		}
		
		// set Invoice Phone
		if (orderModel.getInvoicePhone() != null)
		{
		orderData.setInvoicePhone(orderModel.getInvoicePhone());
		}
		
		// set order confirmation Name
		if (orderModel.getOrderConfirmationName() != null)
		{
		orderData.setOrderConfirmationName(orderModel.getOrderConfirmationName());
		}
		
		// set order confirmation Num
		if (orderModel.getOrderConfirmationNum() != null)
		{
		orderData.setOrderConfirmationNum(orderModel.getOrderConfirmationNum());
		}
		// set SOA Contact
		if (orderModel.getSoaContact() != null)
		{
		orderData.setSoaContact(orderModel.getSoaContact());
		}
		
		// set SOA phone
		if (orderModel.getSoaPhone() != null)
		{
		orderData.setSoaPhone(orderModel.getSoaPhone());
		}
		if(null !=orderModel.getSurCharge())
		{
			LOG.info("BHGEOrderPopulator: SurCharge value in Order Model is : "+orderModel.getSurCharge());
			orderData.setSurCharge(orderModel.getSurCharge());
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
		if (val > 0)
		{
			return getPriceDataFactory().create(PriceDataType.BUY, BigDecimal.valueOf(priceValue), currency);
		}
		else
		{
			final PriceData price = new PriceData();
			price.setFormattedValue("To be quoted");
			price.setValue(new BigDecimal(0.0, MathContext.DECIMAL64));
			return price;
		}


	}


	private List<ShippingCarrierMethodData> populatCarrierMethod(final List<EnumerationValueModel> sourceList,
			final String shippingCharge)
	{
		final List<ShippingCarrierMethodData> targetList = new ArrayList<ShippingCarrierMethodData>();
		if (sourceList != null && !(sourceList.isEmpty()))
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

	private List<OrderEntryData> populateOrderEntry(final List<AbstractOrderEntryModel> entries, final String commerceType,
			final OrderData orderData, final OrderModel orderModel)
	{

		final List<OrderEntryData> orderEntryList = new ArrayList<>();
		Double yourPriceTotalDiscountAmount = 0.0d;
		for (final AbstractOrderEntryModel entry : entries)
		{
			final OrderEntryData data = new OrderEntryData();

			ProductData product = null;
			if (Config.getParameter("current.env").equalsIgnoreCase("local"))
			{
				product = productFacade.getProductForCodeAndOptions("113-241-240",
						Arrays.asList(ProductOption.IMAGES, ProductOption.GALLERY, ProductOption.VARIANT_MATRIX_MEDIA,
								ProductOption.URL, ProductOption.VARIANT_MATRIX_URL));
				data.setProduct(product);
			}
			else if (entry.getPartNumber() != null)
			{
				product = productFacade.getProductForCodeAndOptions(entry.getPartNumber(),
						Arrays.asList(ProductOption.IMAGES, ProductOption.GALLERY, ProductOption.VARIANT_MATRIX_MEDIA,
								ProductOption.URL, ProductOption.VARIANT_MATRIX_URL));
				data.setProduct(product);
			}
			else
			{
				product = productFacade.getProductForCodeAndOptions(entry.getProduct().getCode(),
						Arrays.asList(ProductOption.IMAGES, ProductOption.GALLERY, ProductOption.VARIANT_MATRIX_MEDIA,
								ProductOption.URL, ProductOption.VARIANT_MATRIX_URL));
				data.setProduct(product);
			}
			if (Objects.nonNull(product))
			{
				if (!(null == product.getName()))
				{
					data.setPartName(product.getName());
				}
				else
				{
					data.setPartName("Dummy part no");
				}
				data.setPartNumber(product.getCode());
			}
			else
			{
				data.setPartName("Dummy part no");
			}

			if (Objects.nonNull(entry.getUnitPrice()) && Objects.nonNull(entry.getSilverClausePrice()))
			{
				data.setUnitList(entry.getUnitPrice());
				data.setUnitSelling(entry.getUnitPrice() - entry.getSilverClause());
				data.setSilverClausePricePercentage(entry.getSilverClausePricePercentage());
				data.setSilverClause(entry.getSilverClause());
			}
			/*
			 * if (Objects.nonNull(entry.getTotalReturnPrice())) { data.setNetSelling(entry.getTotalReturnPrice()); }
			 */
			if (commerceType.equalsIgnoreCase("BUY"))
			{
				data.setNetSelling(entry.getTotalPrice());
				data.setUnitSelling(entry.getListPrice());
				data.setSilverClausePricePercentage(entry.getSilverClausePricePercentage());
				Double silverClauseEntrylevel = 0.0;
				silverClauseEntrylevel = getSilverClauseTotalPrice(entry, silverClauseEntrylevel);
				data.setSilverClause(silverClauseEntrylevel);
				//data.setSilverClause(entry.getSilverClausePrice());
				//TO DO To check if sessionSoldTo is blank, need to take data from logged in user's defaultB2BUnit
				final BHGESoldToData soldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
				final PriceData listPriceData = bhgePriceDataFactory.create(PriceDataType.FROM,
						BigDecimal.valueOf(entry.getListPrice() != null ? entry.getListPrice().doubleValue() : 0.0),
						soldTo != null && soldTo.getCurrency() != null ? soldTo.getCurrency().getIsocode() : "USD");
				data.setListPrice(listPriceData);
				final PriceData netSellingPriceData = bhgePriceDataFactory.create(PriceDataType.FROM,
						BigDecimal.valueOf(entry.getTotalPrice() != null ? entry.getTotalPrice().doubleValue() : 0.0),
						soldTo != null && soldTo.getCurrency() != null ? soldTo.getCurrency().getIsocode() : "USD");
				data.setNetSellingPrice(netSellingPriceData);
				yourPriceTotalDiscountAmount = getYourPriceTotalDiscountAmount(entry, yourPriceTotalDiscountAmount);
			}
			if (commerceType.equalsIgnoreCase("RETURNS"))
			{
				data.setNetSelling(entry.getTotalReturnPrice());
			}
			if (commerceType.equalsIgnoreCase("GUESTBUY"))
			{
				data.setNetSelling(entry.getTotalPrice());
				data.setUnitSelling(entry.getListPrice());
				data.setSilverClausePricePercentage(entry.getSilverClausePricePercentage());
				data.setSilverClause(entry.getSilverClausePrice());
				final BHGESoldToData soldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
				final PriceData listPriceData = bhgePriceDataFactory.create(PriceDataType.FROM,
						BigDecimal.valueOf(entry.getListPrice() != null ? entry.getListPrice().doubleValue() : 0.0),
						soldTo != null && soldTo.getCurrency() != null ? soldTo.getCurrency().getIsocode() : "USD");
				data.setListPrice(listPriceData);
				final PriceData netSellingPriceData = bhgePriceDataFactory.create(PriceDataType.FROM,
						BigDecimal.valueOf(entry.getTotalPrice() != null ? entry.getTotalPrice().doubleValue() : 0.0),
						soldTo != null && soldTo.getCurrency() != null ? soldTo.getCurrency().getIsocode() : "USD");
				data.setNetSellingPrice(netSellingPriceData);
				yourPriceTotalDiscountAmount = getYourPriceTotalDiscountAmount(entry, yourPriceTotalDiscountAmount);
			}
			if(null !=entry.getEcaCode())
			{
				LOG.info("ECA Code in Order Entry Populator is : "+entry.getEcaCode());
				data.setEcaCode(entry.getEcaCode());
			}
			if(null !=entry.getEndCustomerAddress())
			{
				LOG.info("End User Address in Order Entry Populator is : "+entry.getEndCustomerAddress().getPk().toString());
				data.setEnduserAddress(addressConverter.convert(entry.getEndCustomerAddress()));
			}
			if(null != entry.getEcaPONumber())
			{
				LOG.info("ECA PO Number in Order Entry Populator : " + entry.getEcaPONumber());
				data.setEcaPONumber(entry.getEcaPONumber());
			}
			data.setQuantity(entry.getQuantity());
			data.setEntryNumber(entry.getEntryNumber());

			data.setServiceOfferingText(entry.getOfferingsListString());
			orderEntryList.add(data);
		}
		if (commerceType.equalsIgnoreCase("BUY"))
		{
			orderData.setYourPriceDiscount(createPrice(orderModel, yourPriceTotalDiscountAmount));
		}

		return orderEntryList;
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
	
	private Double getSilverClauseTotalPrice(final AbstractOrderEntryModel orderEntry, Double silverClauseTotalDiscount)
	{
		if (orderEntry.getSilverClausePrice() != null)
		{
			final Double silverClauseTotalEntryPrice = orderEntry.getSilverClausePrice();
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
}
