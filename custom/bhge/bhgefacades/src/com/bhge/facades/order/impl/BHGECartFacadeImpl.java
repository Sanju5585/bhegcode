package com.bhge.facades.order.impl;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.*;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.xml.bind.JAXBException;
import javax.xml.transform.TransformerException;

import com.bhge.core.carts.service.BHGECommerceCartService;
import com.bhge.core.model.BHGEProductInfoModel;
import com.bhge.core.order.service.BHGEBudgetoryQuoteService;
import com.bhge.core.util.BHGEPriceAvailabilityUtils;
import com.bhge.facades.data.BHGEConfigRequestValues;
import de.hybris.platform.commercefacades.order.data.AddToCartParams;
import de.hybris.platform.core.PK;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.util.DiscountValue;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.ListUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.fop.apps.FOPException;
import org.apache.log4j.Logger;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.BHGERMACommerceType;
import com.bhge.core.enums.GEEdgeCartType;
import com.bhge.core.enums.GEEdgeProductType;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.enums.MaterialChannelStatus;
import com.bhge.core.enums.ShippingChargeMethod;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.rma.service.BHGERmaServiceOffering;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGEProductUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.core.wishlist.service.BHGEWishlistService;
import com.bhge.facades.data.BHGEAvailabilityCheckFormData;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.order.populators.BHGECartPopulator;
import com.bhge.facades.product.BHGEProductFacade;
import com.bhge.facades.product.data.BHGEProductAccessData;
import com.bhge.facades.product.data.RMAData;
import com.bhge.facades.rma.BHGERmaFormFacade;
import com.bhge.facades.rma.data.BHGERmaOfferingData;
import com.bhge.facades.rma.data.OfferDescriptionData;
import com.bhge.facades.rma.data.OfferingData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.facades.user.data.GetAddressFormData;
import com.bhge.facades.user.impl.DefaultBHGEUserProfileFacade;
import com.bhge.product.service.BHGEProductService;
import com.bhge.store.services.impl.BHGEBaseStoreServiceImpl;

import de.hybris.platform.b2b.company.B2BCommerceUnitService;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2bacceleratorfacades.exception.DomainException;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.i18n.comparators.CountryComparator;
import de.hybris.platform.commercefacades.order.EntryGroupData;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.CartModificationData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.order.impl.DefaultCartFacade;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.user.data.CountryData;
import de.hybris.platform.commerceservices.enums.CountryType;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commercefacades.voucher.VoucherFacade;
import de.hybris.platform.commercefacades.voucher.exceptions.VoucherOperationException;
import de.hybris.platform.commerceservices.order.CommerceCartModification;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.commerceservices.order.CommerceCartService;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.converters.Converters;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.CartEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;
import de.hybris.platform.sap.productconfig.facades.ConfigurationFacade;
import de.hybris.platform.sap.productconfig.occ.ProductConfigOrderEntryWsDTO;
import de.hybris.platform.sap.productconfig.services.model.ProductConfigurationModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;
//Migration changes start
//import de.hybris.platform.sap.productconfig.services.intf.ProductConfigurationService;
//Migration changes end
import de.hybris.platform.servicelayer.exceptions.ModelSavingException;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.util.Config;
import de.hybris.platform.commercefacades.user.data.AddressData;
import org.apache.poi.ss.usermodel.*;

import static de.hybris.platform.util.localization.Localization.getLocalizedString;
import static java.util.stream.Collectors.toList;


public class BHGECartFacadeImpl extends DefaultCartFacade implements BHGECartFacade
{
	private static final Integer MINIMUM_SINGLE_SKU_ADD_CART = 0;
	private static final String BASKET_QUANTITY_NOITEMADDED_ERROR_PREFIX_KEY = "basket.information.quantity.noItemsAdded.";
	private static final String BASKET_QUANTITY_REDUCED_NUMBER_PREFIX_KEY = "basket.information.quantity.reducedNumberOfItemsAdded.";
	private static final String CART_MODIFICATION_ERROR = "basket.error.occurred";
	public static final String BASKET_QUANTITY_REMOVE_SUCCESS = "basket.page.message.remove";
	private static final String FUTURE_STOCK_ENABLED = "storefront.products.futurestock.enabled";
	private static final String UNDEFINED = "undefined";
	private  static  final Logger LOG = Logger.getLogger(BHGECartFacadeImpl.class);
	private static  final String RETRIEVED_CARTMODEL_MESSAGE= "Retrieved CartModel for Cart ID: ";
	private static final String ADDING_PARTNUMBER="Adding Part number : ";
	private static final String PREPAY="PREPAY";
	private static final String COLLECT="COLLECT";

	final BHGEProductUtil productUtil = new BHGEProductUtil();
	private static final Collection<ProductOption> OPTIONS = new ArrayList<>(
			Arrays.asList(ProductOption.BASIC, ProductOption.PRICE, ProductOption.DESCRIPTION));





	@Resource(name = "modelService")
	public ModelService modelService;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "bhgeProductFacade")
	private BHGEProductFacade bhgeProductFacadeImpl;

	@Resource(name = "sessionService")
	public SessionService sessionService;

	@Resource(name = "userService")
	public UserService userService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreServiceImpl baseStoreService;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "defaultBhgeUserProfileFacade")
	DefaultBHGEUserProfileFacade defaultBhgeUserProfileFecade;

	@Resource(name = "b2bCustomerFacade")
	protected CustomerFacade customerFacade;

	@Resource
	B2BCommerceUnitService b2bCommerceUnitService;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;
	
	@Resource(name = "bhgeCartPopulator")
	private BHGECartPopulator<CartData> bhgeCartPopulator;

	@Resource(name = "groupCartModificationListPopulator")
	private Populator<AbstractOrderModel, List<CartModificationData>> groupCartModificationListPopulator;

	@Resource(name = "productService")
	BHGEProductService bhgeProductService;

	@Resource(name = "voucherFacade")
	private VoucherFacade voucherFacade;

	private BaseSiteService baseSiteService;
	
	@Resource(name = "bhgeProductFacade")
	private BHGEProductFacade bhgeProductFacade;
	
	@Resource(name = "bhgeWishlistService")
	private BHGEWishlistService bhgeWishlistService;

	@Resource
	private BHGESoldToUtil bhgeSoldToUtil;

	@Resource(name = "priceDataFactory")
	public PriceDataFactory priceDataFactory;
	
	@Resource(name = "commerceCartService")
	private CommerceCartService commerceCartService;
	
	@Resource(name = "productVariantFacade")
    private ProductFacade productFacade;
	
	@Resource(name = "bhgeRmaServiceOfferingService")
	private BHGERmaServiceOffering bhgeRmaServiceOfferingService;
	
	@Resource(name = "bhgeRmaFormFacade")
	private BHGERmaFormFacade bhgeRmaFormFacade;
	
	@Resource(name = "addressConverter")
	private Converter<AddressModel, AddressData> addressConverter;

	@Resource(name = "bhgeCommerceCartService")
	private BHGECommerceCartService bhgeCommerceCartService;
	
	@Resource(name = "sapProductConfigFacade")
	private ConfigurationFacade configFacade;

	@Resource
	private ProductService productService;
	@Resource
	private BHGEPriceAvailabilityUtils bhgePriceAvailabilityUtils;

	@Resource(name="configurationService")
	private ConfigurationService configurationService;

    @Resource(name="bhgeBudgetoryQuoteService")
    private BHGEBudgetoryQuoteService bhgeBudgetoryQuoteService;


	@Override
	public CartModificationData addToCart(final String code, final long quantity, final long ecaCode) throws CommerceCartModificationException
	{
		LOG.info(ADDING_PARTNUMBER+code+" with quantity :"+quantity+" and ecaCode :"+ecaCode);
		final AddToCartParams params = new AddToCartParams();
		params.setProductCode(code);
		params.setQuantity(quantity);
		if(ecaCode != 0L) {
			params.setEcaCode(ecaCode);
		}

		return addToCart(params);
	}
	@Override
	public CartModificationData addToCart(final AddToCartParams addToCartParams) throws CommerceCartModificationException
	{
		LOG.info(ADDING_PARTNUMBER+addToCartParams.getProductCode()+" with quantity :"+addToCartParams.getQuantity());
		final CommerceCartParameter parameter = getCommerceCartParameterConverter().convert(addToCartParams);

		if(StringUtils.isNotEmpty(addToCartParams.getLongConfiguration())) {
			LOG.info("BHGECartFacadeImpl inside addtocartlongconfig "+addToCartParams.getLongConfiguration());
			if(null !=parameter) {
				parameter.setLongConfiguration(addToCartParams.getLongConfiguration());
			}
		}
		if(null != (addToCartParams.getEcaCode())) {
			LOG.info("BHGECartFacadeImpl get Eca Code "+addToCartParams.getEcaCode());
			if(null !=parameter) {
				parameter.setEcaCode(addToCartParams.getEcaCode());
			}
		}
		final CommerceCartModification modification = bhgeCommerceCartService.addToCart(parameter);
		LOG.info("Modification Status:"+ modification.getEntry().getPk().toString());
		return getCartModificationConverter().convert(modification);
	}
	@Override
	public CartModel getAvailabilityDetailsForMaterials(final BHGEAvailabilityCheckFormData formData) {
		if (formData == null) {
			LOG.warn("Form data is null");
			return null;
		}

		LOG.debug("In getAvailabilityDetailsForMaterials: Part Num: " + formData.getPartNum() + " Qty: " + formData.getQty());

		final String partNum = StringUtils.trimToEmpty(formData.getPartNum());
		final int qty = (formData.getQty() != null && formData.getQty() > 0) ? formData.getQty() : 1;

		final ProductModel productModelTemp = userProfileService.getProductForCode(partNum);
		if (productModelTemp == null) {
			LOG.warn("Product model is null for part number: " + partNum);
			return null;
		}

		final GEEdgeProductModel productModel = (GEEdgeProductModel) productModelTemp;
		final HybrisStatus hybrisStatus = productUtil.getHybrisStatusForCurrentSalesArea(productModel, sessionService, userService);
		final MaterialChannelStatus materialStatus = productUtil.getMaterialStatusForCurrentSalesArea(productModel, sessionService, userService);

		if (!bhgePriceAvailabilityUtils.isValidProductForCurrentUser(hybrisStatus, materialStatus, productModel)) {
			return null;
		}

		final CartModel cartModel = createCartModel(productModel, qty, formData);
		modelService.save(cartModel);

		return bhgeCartService.getInventoryCheckData(cartModel);
	}
	private CartModel createCartModel(GEEdgeProductModel productModel, int qty, BHGEAvailabilityCheckFormData formData) {

		final CartModel cartModel = modelService.create(CartModel.class);
		cartModel.setCommerceType(BHGERMACommerceType.BUY);

		final AbstractOrderEntryModel orderEntryModel = modelService.create(CartEntryModel.class);
		final BHGESoldToData soldTo = sessionService.getAttribute("sessionSoldTo");
		orderEntryModel.setProduct(productModel);
		orderEntryModel.setQuantity((long) qty);
		orderEntryModel.setBasePrice(getBasePrice(productModel));
		orderEntryModel.setUnit(productModel.getUnit());
		orderEntryModel.setTotalPrice(orderEntryModel.getBasePrice() * qty);
		orderEntryModel.setIsEngineeringHold(bhgePriceAvailabilityUtils.isEngineeringHold(productModel));
		cartModel.setEntries(Collections.singletonList(orderEntryModel));
		//check this code after deployment
		if (GEEdgeProductType.ITFILM.equals(productModel.getProductType())) {
			// Set End customer Ref number to the cart model
			if (null != formData.getEndCustomerRefNum()) {
				bhgePriceAvailabilityUtils.setEndUserAddress(formData, cartModel);
			} else {
				cartModel.setEndUserNumber(formData.getEndCustomerRefNum());
			}
			if (null == formData.getDefaultShipTo() || StringUtils.isBlank(formData.getDefaultShipTo()))
			{
				final BHGECustomerData geEdgeCustomerData = bhgeUserProfileFacade
						.getUserProfile(customerFacade.getCurrentCustomerUid());
				final AddressModel defaultShipTo = defaultBhgeUserProfileFecade.getDefaultShipto(geEdgeCustomerData, soldTo);
				cartModel.setDeliveryAddress(defaultShipTo);
			}
			else
			{
				setDefaultShipto(formData, cartModel);
			}
		}

		// Setting Cart type
		if (null != productModel.getProductType())
		{
			cartModel.setCartType(bhgeCartService.getCartTypeForProductType(productModel.getProductType()));
		}

		cartModel.setStore(baseStoreService.getCurrentBaseStore());
		cartModel.setCurrency(bhgePriceAvailabilityUtils.getCurrency());
		LOG.info("In the method getAvailabilityDetailsForMaterials cartModel "+cartModel.getCode()+"Currency is "+cartModel.getCurrency().getIsocode());
		cartModel.setUser(userService.getCurrentUser());
		cartModel.setDate(new Date());
		cartModel.setSoldToForCart(getSessionSoldTo(soldTo));
		orderEntryModel.setOrder(cartModel);

		return cartModel;
	}

	public double getBasePrice(GEEdgeProductModel productModel) {
		final PriceData priceData = bhgeProductFacadeImpl.getProductPriceData(productModel.getCode());
		return (priceData != null && priceData.getValue() != null) ? priceData.getValue().doubleValue() : 0.0;
	}
	public double getBasePriceforWS(GEEdgeProductModel productModel,String guestSalesArea) {
		final PriceData priceData = bhgeProductFacadeImpl.getProductPriceDataForWS(productModel.getCode(), guestSalesArea);
		return (priceData != null && priceData.getValue() != null) ? priceData.getValue().doubleValue() : 0.0;
	}

	private B2BUnitModel getSessionSoldTo(BHGESoldToData soldTo) {

		return (soldTo != null) ? userProfileService.findChildB2BUnitModel(soldTo.getUid()) : null;
	}

	@Override
	public CartModel getAvailabilityDetailsForMaterialsForWS(final BHGEAvailabilityCheckFormData formData, final String guestSalesArea)
	{
		if (formData == null) {
			LOG.warn("Form data is null");
			return null;
		}

		LOG.debug("In getAvailabilityDetailsForMaterials: Part Num: " + formData.getPartNum() + " Qty: " + formData.getQty());

		final String partNum = StringUtils.trimToEmpty(formData.getPartNum());
		final int qty = (formData.getQty() != null && formData.getQty() > 0) ? formData.getQty() : 1;

		final ProductModel productModelTemp = userProfileService.getProductForCode(partNum);
		if (productModelTemp == null) {
			LOG.warn("Product model is null for part number: " + partNum);
			return null;
		}

		final GEEdgeProductModel productModel = (GEEdgeProductModel) productModelTemp;
		final HybrisStatus hybrisStatus = productUtil.getHybrisStatusForCurrentSalesAreaForWS(productModel,
				userService, bhgeSoldToUtil);
		final MaterialChannelStatus materialStatus = productUtil.getMaterialStatusForCurrentSalesAreaForWS(productModel, userService, bhgeSoldToUtil);

		if (!bhgePriceAvailabilityUtils.isValidProductForCurrentUser(hybrisStatus, materialStatus, productModel)) {
			return null;
		}

		final CartModel cartModel = createCartModelforWS(productModel, qty, formData, guestSalesArea);
		modelService.save(cartModel);

		return bhgeCartService.getInventoryCheckDataForWS(cartModel, guestSalesArea);
	}
	private CartModel createCartModelforWS(GEEdgeProductModel productModel, int qty, BHGEAvailabilityCheckFormData formData,String guestSalesArea){
		final CartModel cartModel = modelService.create(CartModel.class);
		cartModel.setCommerceType(BHGERMACommerceType.BUY);

		final AbstractOrderEntryModel orderEntryModel = modelService.create(CartEntryModel.class);
		BHGESoldToData soldTo = null;
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfGuestUser(guestSalesArea);
		}
		else
		{
			soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
		}
		orderEntryModel.setProduct(productModel);
		orderEntryModel.setQuantity((long) qty);
		orderEntryModel.setBasePrice(getBasePriceforWS(productModel,guestSalesArea));
		orderEntryModel.setUnit(productModel.getUnit());
		orderEntryModel.setTotalPrice(orderEntryModel.getBasePrice() * qty);
		orderEntryModel.setIsEngineeringHold(bhgePriceAvailabilityUtils.isEngineeringHold(productModel));
		cartModel.setEntries(Collections.singletonList(orderEntryModel));
		//check this code after deployment
		if (GEEdgeProductType.ITFILM.equals(productModel.getProductType())) {
			// Set End customer Ref number to the cart model
			if (null != formData.getEndCustomerRefNum()) {
				bhgePriceAvailabilityUtils.setEndUserAddress(formData, cartModel);
			} else {
				cartModel.setEndUserNumber(formData.getEndCustomerRefNum());
			}
			if (null == formData.getDefaultShipTo() || StringUtils.isBlank(formData.getDefaultShipTo()))
			{
				final BHGECustomerData geEdgeCustomerData = bhgeUserProfileFacade
						.getUserProfile(customerFacade.getCurrentCustomerUid());
				final AddressModel defaultShipTo = defaultBhgeUserProfileFecade.getDefaultShipto(geEdgeCustomerData, soldTo);
				cartModel.setDeliveryAddress(defaultShipTo);
			}
			else
			{
				setDefaultShiptoforWS(formData, cartModel);
			}
		}

		// Setting Cart type
		if (null != productModel.getProductType())
		{
			cartModel.setCartType(bhgeCartService.getCartTypeForProductType(productModel.getProductType()));
		}
		
		cartModel.setStore(baseStoreService.getCurrentBaseStore());
		cartModel.setCurrency(bhgePriceAvailabilityUtils.getCurrency());
		LOG.info("In the method getAvailabilityDetailsForMaterialsForWS cartModel "+cartModel.getCode()+"Currency is "+cartModel.getCurrency().getIsocode());
		cartModel.setUser(userService.getCurrentUser());
		cartModel.setDate(new Date());
		cartModel.setSoldToForCart(getSessionSoldTo(soldTo));
		orderEntryModel.setOrder(cartModel);

		return cartModel;
	}

	@Override
	public boolean addAccessoriesToCart(final String productId, final String caseAccessoryCode, final String optinalAccessories)
	{

		// Mandatory Accessories
		boolean hasAccessories = false;
		final Collection<ProductReferenceModel> accessoryProductModelList = bhgeProductService.getMandatoryAccesories(productId);
		if (CollectionUtils.isNotEmpty(accessoryProductModelList))
		{
			hasAccessories = true;
			for (final ProductReferenceModel model : accessoryProductModelList)
			{
				try
				{
					addToCart(model.getTarget().getCode(), 1);
				}
				catch (final CommerceCartModificationException e)
				{
					LOG.error(e);
				}
			}
		}

		// Case Accessory
		if (StringUtils.isNotEmpty(caseAccessoryCode))
		{
			hasAccessories = true;
			try
			{
				addToCart(caseAccessoryCode, 1);
			}
			catch (final CommerceCartModificationException e)
			{
				LOG.error(e);
			}
		}

		// Optional Accessories
		if (StringUtils.isNotEmpty(optinalAccessories))
		{
			hasAccessories = true;
			final String[] optinalAccessoriesList = optinalAccessories.split(",");
			for (final String optinalAccessory : optinalAccessoriesList)
			{
				try
				{
					addToCart(optinalAccessory, 1);
				}
				catch (final CommerceCartModificationException e)
				{
					LOG.error(e);
				}
			}
		}
		return hasAccessories;
	}


	@Override
	public boolean removeCart(final CartModel cart)
	{
		if (null != cart)
		{
			modelService.remove(cart);
			return true;
		}
		return false;
	}

	/**
	 * @param formData
	 * @param cartModel
	 */
	private void setDefaultShipto(final BHGEAvailabilityCheckFormData formData, final CartModel cartModel)
	{
		B2BUnitModel salesArea = null;
		AddressModel shipTo = null;
		if ( sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA) instanceof B2BUnitModel)
		{
			salesArea = (B2BUnitModel) sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
			shipTo = b2bCommerceUnitService.getAddressForCode(salesArea, formData.getDefaultShipTo());
		}
		cartModel.setDeliveryAddress(shipTo);
	}
	
	private void setDefaultShiptoforWS(final BHGEAvailabilityCheckFormData formData, final CartModel cartModel)
	{
		B2BUnitModel salesArea = null;
		AddressModel shipTo = null;
		final UserModel user = userService.getCurrentUser();
		if(user instanceof GEEdgeCustomerModel)
		{
			salesArea = ((GEEdgeCustomerModel) userService.getCurrentUser()).getDefaultB2BUnit();
			if(null != salesArea)
			{
				shipTo = b2bCommerceUnitService.getAddressForCode(salesArea, formData.getDefaultShipTo());
			}
		}
		cartModel.setDeliveryAddress(shipTo);
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.hybris.ge.edge.facades.order.GEEdgeCartFacade#getIncoterm1(de.hybris.platform.core.model.user.AddressModel,
	 * com.hybris.ge.edge.facades.user.data.GEEdgeSoldToData)
	 */
	@Override
	public String getIncoterm1(final AddressData shipToData, final BHGESoldToData soldToData)
	{
		return bhgeCartService.getIncoterm1(shipToData, soldToData);
	}
	
	@Override
	public String getIncoterm1ForWs(final AddressData shipToData, final BHGESoldToData soldToData, String guestSalesArea)
	{
		return bhgeCartService.getIncoterm1ForWs(shipToData, soldToData, guestSalesArea);
	}

	@Override
	public AddressData validateDeliveryAddress(AddressData defaultShipToData, final CartData cartData) {
		if (cartData == null || cartData.getCode() == null) {
			LOG.warn("Cart data or cart code is null");
			return defaultShipToData;
		}

		CartModel cart = bhgeCartService.getCartByCodeForDSstore(cartData.getCode());
		if (cart == null || cart.getSoldToForCart() == null) {
			LOG.warn("Cart or SoldToForCart is null for cart code: " + cartData.getCode());
			return defaultShipToData;
		}

		String customerNumber = extractCustomerNumber(cart.getSoldToForCart().getUid());
		if (customerNumber == null) {
			LOG.warn("Customer number could not be extracted from SoldToForCart");
			return defaultShipToData;
		}
		if (defaultShipToData != null && !customerNumber.equalsIgnoreCase(defaultShipToData.getSapCustomerID())) {
			LOG.info("defaultShipToData is not null "+ defaultShipToData.getSapCustomerID());
			final B2BUnitModel soldToChild = userProfileService.findChildB2BUnitModel(cart.getSoldToForCart().getUid());
			AddressModel validAddress = findValidAddress(soldToChild, customerNumber);
			if (validAddress != null) {
				cart.setDeliveryAddress(validAddress);
				modelService.save(cart);
				defaultShipToData = addressConverter.convert(validAddress);
				cartData.setDeliveryAddress(defaultShipToData);
			}
		}

		return defaultShipToData;
	}

	private String extractCustomerNumber(String soldToUid) {
		if (soldToUid != null && soldToUid.contains("_")) {
			return soldToUid.substring(0, soldToUid.indexOf("_"));
		}
		return null;
	}

	private AddressModel findValidAddress(B2BUnitModel soldTo, String customerNumber) {
		if (soldTo == null || soldTo.getAddresses() == null) {
			return null;
		}
		for (AddressModel address : soldTo.getAddresses()) {
			if (Boolean.TRUE.equals(address.getShippingAddress()) &&
					customerNumber.equals(address.getSapCustomerID())) {
				return address;
			}
		}
		return null;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.hybris.ge.edge.facades.order.GEEdgeCartFacade#getIncoterm2(de.hybris.platform.core.model.user.AddressModel,
	 * com.hybris.ge.edge.facades.user.data.GEEdgeSoldToData)
	 */
	@Override
	public String getIncoterm2(final AddressData shipToData, final BHGESoldToData soldToData)
	{
		return bhgeCartService.getIncoterm2(shipToData, soldToData);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.hybris.ge.edge.facades.order.GEEdgeCartFacade#getIncotermModel(de.hybris.platform.core.model.user.
	 * AddressModel, com.hybris.ge.edge.facades.user.data.GEEdgeSoldToData)
	 */
	@Override
	public String getIncotermModel(final AddressData shipToData, final BHGESoldToData soldToData)
	{
		return bhgeCartService.getIncotermModel(shipToData, soldToData);
	}

	/**
	 * @return the bhgeProductService
	 */
	public BHGEProductService getBhgeProductService()
	{
		return bhgeProductService;
	}


	/**
	 * @param bhgeProductService
	 *           the bhgeProductService to set
	 */
	public void setBhgeProductService(final BHGEProductService bhgeProductService)
	{
		this.bhgeProductService = bhgeProductService;
	}


	@Override
	public void clearSessionCart()
	{
		bhgeCartService.clearSessionCart();

	}

	@Override
	public boolean isSDSEnabled()
	{
		boolean isSDSEnabled = false;
		final CartModel sessionCartModel = bhgeCartService.getSessionCart();
		for (final AbstractOrderEntryModel cartEntryModel : sessionCartModel.getEntries())
		{
			if (cartEntryModel.getIsSameDayShipChecked() != null && cartEntryModel.getIsSameDayShipChecked())
			{
				isSDSEnabled = true;
				break;
			}
		}
		return isSDSEnabled;
	}

	@Override
	public BaseSiteService getBaseSiteService()
	{
		return baseSiteService;
	}

	@Override
	public void setBaseSiteService(final BaseSiteService baseSiteService)
	{
		this.baseSiteService = baseSiteService;
	}


	@Override
	public boolean isHybridCart()
	{
		final CartModel sessionCartModel = bhgeCartService.getSessionCart();
		return sessionCartModel != null && sessionCartModel.getCartType() != null
				&& CollectionUtils.isNotEmpty(sessionCartModel.getEntries())
				&& sessionCartModel.getCartType().equals(GEEdgeCartType.HYBRID);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.order.BHGECartFacade#updateShipmentMethod()
	 */
	@Override
	public void updateShipmentMethod(final Boolean shipmentMethod, final String endCustomerNumber,
			final Boolean isEndCustomerChanged)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		if (StringUtils.isNotBlank(endCustomerNumber))
		{
			cartModel.setEndUserNumber(endCustomerNumber);
			final B2BUnitModel salesArea = (B2BUnitModel) sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
			final GetAddressFormData form = new GetAddressFormData();
			form.setB2bUnit(salesArea.getUid());
			form.setSapCustomerID(endCustomerNumber);
			final List<AddressModel> endUserAddress = bhgeUserProfileFacade
					.getAddressesForCurrentCustomerAccountAndSAPCustomerID(form);
			if (CollectionUtils.isNotEmpty(endUserAddress))
			{
				cartModel.setRMAEndUserAddress(endUserAddress.get(0));
			}
		}
		else if (BooleanUtils.isTrue(isEndCustomerChanged))
		{
			cartModel.setEndUserNumber(null);
			cartModel.setRMAEndUserAddress(null);
		}
		if (Boolean.TRUE.equals(shipmentMethod))
		{
			cartModel.setIsShipCompleteOrder(Boolean.TRUE);
			cartModel.setIsPartialShipment(Boolean.FALSE);
		}
		else
		{
			cartModel.setIsShipCompleteOrder(Boolean.FALSE);
			cartModel.setIsPartialShipment(Boolean.TRUE);
		}
		LOG.info("ShipmentMethod values for cart are - PartialShipment : "+ cartModel.getIsPartialShipment() + "CompleteShipment :" +cartModel.getIsShipCompleteOrder());
		modelService.save(cartModel);
	}
	
	//Added for spartacus migration 
	/*@Override
	public void updateShipmentMethodForWs(String cartId, final Boolean shipmentMethod, final String endCustomerNumber,
			final Boolean isEndCustomerChanged)
	{
		final UserModel user = userService.getCurrentUser();
		//final CartModel cartModel = bhgeCartService.getSessionCart();
		final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(cartId);
		if (StringUtils.isNotBlank(endCustomerNumber))
		{
			cartModel.setEndUserNumber(endCustomerNumber);
			B2BUnitModel salesArea = null;
			if(user!=null && user instanceof GEEdgeCustomerModel) {
				GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) user;
				salesArea = currentUser.getDefaultB2BUnit();
			}
			
			//final B2BUnitModel salesArea = (B2BUnitModel) sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
			final GetAddressFormData form = new GetAddressFormData();
			form.setB2bUnit(salesArea.getUid());
			form.setSapCustomerID(endCustomerNumber);
			final List<AddressModel> endUserAddress = bhgeUserProfileFacade
					.getAddressesForCurrentCustomerAccountAndSAPCustomerID(form);
			if (CollectionUtils.isNotEmpty(endUserAddress))
			{
				cartModel.setRMAEndUserAddress(endUserAddress.get(0));
			}
		}
		else if (BooleanUtils.isTrue(isEndCustomerChanged))
		{
			cartModel.setEndUserNumber(null);
			cartModel.setRMAEndUserAddress(null);
		}
		if (shipmentMethod.booleanValue())
		{
			cartModel.setIsShipCompleteOrder(Boolean.TRUE);
			cartModel.setIsPartialShipment(Boolean.FALSE);
		}
		else
		{
			cartModel.setIsShipCompleteOrder(Boolean.FALSE);
			cartModel.setIsPartialShipment(Boolean.TRUE);
		}
		LOG.info("ShipmentMethod values for cart are - PartialShipment : "+ cartModel.getIsPartialShipment() + "CompleteShipment :" +cartModel.getIsShipCompleteOrder());
		modelService.save(cartModel);
	}*/


	@Override
	public boolean isGuestUser()
	{
		final UserModel user = userService.getCurrentUser();
		return !(user instanceof GEEdgeCustomerModel);
	}

	@Override
	public CartData getSessionCartWithEntryOrdering(final boolean recentlyAddedFirst)
	{
		if (hasSessionCart())
		{
			final CartData data = getSessionCart();
			final List<OrderEntryData> recentlyAddedListEntries = new ArrayList<>(data.getEntries());
			data.setEntries(Collections.unmodifiableList(recentlyAddedListEntries));
			final List<EntryGroupData> recentlyChangedEntryGroups = new ArrayList<>(data.getRootGroups());
			Collections.reverse(recentlyChangedEntryGroups); // Re-setting the reversed order from OTTB code
			data.setRootGroups(Collections.unmodifiableList(recentlyChangedEntryGroups));
			return data;
		}
		return createEmptyCart();
	}
	
	
	@Override
	public CartData getSessionCartWithEntryOrderingforWS(final CartModel cartModel, boolean recentlyAddedFirst)
	{
		if (null != cartModel)
		{
			final CartData data = getCartData(cartModel);
			final List<OrderEntryData> recentlyAddedListEntries = new ArrayList<>(data.getEntries());
			data.setEntries(Collections.unmodifiableList(recentlyAddedListEntries));
			final List<EntryGroupData> recentlyChangedEntryGroups = new ArrayList<>(data.getRootGroups());
			Collections.reverse(recentlyChangedEntryGroups); // Re-setting the reversed order from OTTB code
			data.setRootGroups(Collections.unmodifiableList(recentlyChangedEntryGroups));
			return data;
		}
		return createEmptyCart();
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.bhge.facades.order.BHGECartFacade#getPriceAndAvailabiltyDetailsForCart(de.hybris.platform.core.model.order
	 * .CartModel, java.lang.Boolean)
	 */
	@Override
	public CartModel getPriceAndAvailabiltyDetailsForCart()
	{
		CartModel cartModel = bhgeCartService.getSessionCart();
		cartModel.setConnectivityerror(null);
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			boolean shipmentMode = true;
			shipmentMode = cartModel.getIsShipCompleteOrder() == null || cartModel.getIsShipCompleteOrder();
		     final String sessionSalesOrg = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESORG);
			cartModel = bhgeCartService.getRealTimePriceAndAvailabiltyDetails(cartModel, shipmentMode,sessionSalesOrg, null,null);
		}
		else
		{
			final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade
					.getUserProfile(customerFacade.getCurrentCustomer().getUid());
			boolean shipmentMode = false;
			if (cartModel.getIsShipCompleteOrder() == null)
			{
				if (bhgeCustomerData.getIsShipCompleteOrder() == null)
				{
					cartModel.setIsShipCompleteOrder(Boolean.TRUE);
					//setting complete to user profile
					final GEEdgeCustomerModel user = (GEEdgeCustomerModel) cartModel.getUser();
					user.setIsShipCompleteOrder(Boolean.TRUE);
					modelService.save(user);

				}
				else if (Boolean.TRUE.equals(bhgeCustomerData.getIsShipCompleteOrder()))
				{
					cartModel.setIsShipCompleteOrder(Boolean.TRUE);
				}
				else
				{
					cartModel.setIsPartialShipment(Boolean.TRUE);
					cartModel.setIsShipCompleteOrder(Boolean.FALSE);
				}
			}
			if (Boolean.TRUE.equals(cartModel.getIsShipCompleteOrder()))
			{
				shipmentMode = true;
			}
			cartModel = bhgeCartService.getRealTimePriceAndAvailabiltyDetails(cartModel, shipmentMode,null, null,null);
		}
		return cartModel;
	}

	@Override
	public boolean updateEntryNotes(final int entryNo, final String notes)
	{
		try
		{
			final CartModel cartModel = bhgeCartService.getSessionCart();
			if (cartModel != null)
			{
				final CartEntryModel cartEntry = bhgeCartService.getEntryForNumber(cartModel, entryNo);
				cartEntry.setNote(notes);
				modelService.save(cartEntry);
				return true;
			}
		}
		catch (final Exception e)
		{
			LOG.error(e);
		}
		return false;
	}
	
	@Override
	public boolean updateEntryNotesforWS(final int entryNo, final String notes, final String cartId)
	{
		try
		{
			CartModel cartModel = null;
			final UserModel currentUser = userService.getCurrentUser();
			if (!userService.isAnonymousUser(currentUser))
			{
				cartModel = commerceCartService.getCartForCodeAndUser(cartId, currentUser);
			}
			else
			{
				cartModel = commerceCartService.getCartForGuidAndSite(cartId, baseSiteService.getCurrentBaseSite());
			}
			if (cartModel != null)
			{
				final CartEntryModel cartEntry = bhgeCartService.getEntryForNumber(cartModel, entryNo);
				cartEntry.setNote(notes);
				modelService.save(cartEntry);
				return true;
			}
		}
		catch (final Exception e)
		{
			LOG.error(e);
		}
		return false;
	}

	@Override
	public void saveReqHeaderDeliveryDate(final Date reqDelDateNonFilm, final boolean isShipComplete)
	{
		bhgeCartService.saveReqHeaderDeliveryDate(reqDelDateNonFilm, isShipComplete);
	}
	
	//Added for spartacus migration
	@Override
	public void saveReqHeaderDeliveryDateForWs(final Date reqDelDateNonFilm, final boolean isShipComplete, String cartId)
	{
		bhgeCartService.saveReqHeaderDeliveryDateForWs(reqDelDateNonFilm, isShipComplete, cartId);
	}

	@Override
	public void saveReqHeaderDeliveryDateFilm(final Date reqHdrDate)
	{
		bhgeCartService.saveReqHeaderDeliveryDateFilm(reqHdrDate);
	}
	
	//Added for spartacus Migration
	@Override
	public void saveReqHeaderDeliveryDateFilmForWs(final Date reqHdrDate, String cartId)
	{
		bhgeCartService.saveReqHeaderDeliveryDateFilmForWs(reqHdrDate, cartId);
	}
	

	@Override
	public boolean applyIfCouponHasImpact(final String couponCode)
	{
		final boolean isCausingImpactOnOrder = false;
		try
		{
			voucherFacade.applyVoucher(couponCode);
			LOG.info("voucher applied: "+ couponCode);
			final CartModel cart = bhgeCartService.getSessionCart();
			if (cart.getGlobalDiscountValues() != null && !cart.getGlobalDiscountValues().isEmpty())
			{
				LOG.info("Inside getGlobalDiscountValues condition");
				return true;
			}
			else
			{
				LOG.info("Inside else of getGlobalDiscountValues condition");
				for (final AbstractOrderEntryModel entry : cart.getEntries())
				{
					if (entry.getDiscountValues() != null && !entry.getDiscountValues().isEmpty())
					{
						return true;
					}
				}
			}
				voucherFacade.releaseVoucher(couponCode);
				LOG.info("Inside isCausingImpactOnOrder check and release voucher");

		}
		catch (final VoucherOperationException e)
		{
			LOG.error("Error while applying Coupon " + e);
		}

		return false;

	}

	@Override
	public void applyVoucherForCartInternal(final String voucherId, final String cartId)
			throws VoucherOperationException
	{
		LOG.info("apply voucher: " + voucherId);
		voucherFacade.applyVoucher(voucherId);
		LOG.debug("Voucher applied to the facade. Voucher ID: " + voucherId);
		CartModel cartModel = null;
		cartModel = getCartModel(cartId, cartModel,  userService.getCurrentUser());
		LOG.debug(RETRIEVED_CARTMODEL_MESSAGE +cartId);
		LOG.info("cartModel: "+cartModel);
		boolean checkIsProductCoupon = checkIsProductCouponApplied(cartModel);
		LOG.debug(RETRIEVED_CARTMODEL_MESSAGE +cartId);
		CartData cartData = getSessionCart();
		if(CollectionUtils.isNotEmpty(cartData.getAppliedVouchers()) && cartData.getOrderDiscounts().getValue().intValue() <= 0 && !checkIsProductCoupon){
			LOG.debug(RETRIEVED_CARTMODEL_MESSAGE +cartId);
            LOG.debug("appliedVouchers: " + cartData.getAppliedVouchers() + "cartDiscount: " + cartData.getOrderDiscounts().getValue().intValue());
			voucherFacade.releaseVoucher(voucherId);
			throw new VoucherOperationException("text.voucher.apply.invalid.error");
		}
		LOG.info("voucher applied successfully. Voucher ID: "+ voucherId + ", Cart ID: " + cartId);
		}

	@Override
	public void updateEntryReqDate(String reqDate, int entryNumber) {
		try {
			bhgeCartService.updateEntryReqDate(reqDate, entryNumber);
		} catch (Exception ex){
			LOG.info("Error during req date update" + ex.getMessage());
		}
	}

	@Override
	public void updateEarlyShipment(String cartId, boolean earlyShipment) {
		try {
			CartModel cartModel = null;
			final UserModel currentUser = userService.getCurrentUser();
			if (!userService.isAnonymousUser(currentUser))
			{
				cartModel = commerceCartService.getCartForCodeAndUser(cartId, currentUser);
			}
			else
			{
				cartModel = commerceCartService.getCartForGuidAndSite(cartId, baseSiteService.getCurrentBaseSite());
			}
			if (cartModel != null)
			{
				cartModel.setEarlyShipment(earlyShipment);
				modelService.save(cartModel);
			}
		} catch (Exception ex){
			LOG.info("Error while updating Early Shipment Flag" + ex.getMessage());
		}
	}


	private boolean checkIsProductCouponApplied(CartModel cart) {
		boolean isProductCoupon = false;
		for (AbstractOrderEntryModel entry : cart.getEntries()) {
			if (CollectionUtils.isNotEmpty(entry.getDiscountValues())) {
				for (DiscountValue discount : entry.getDiscountValues()) {
					if (discount.getCode().startsWith("Action")) {
						LOG.info("coupon applied: "+discount.getCode());
						isProductCoupon = true;
						break;
					}
				}
			}
		}
		return isProductCoupon;
	}

    private boolean checkIsOrderCouponApplied(CartModel cart) {
    boolean isOrderCoupon = false;
    if ( null != cart && CollectionUtils.isNotEmpty(cart.getGlobalDiscountValues() )&& CollectionUtils.isNotEmpty(cart.getAppliedCouponCodes())){
        for (DiscountValue discount : cart.getGlobalDiscountValues()) {
        if(discount.getCode().startsWith("Action")){
            LOG.info("US644202 order level coupon applied: "+discount.getCode());
        isOrderCoupon =true;
        break;
        }
        }
        }
    return isOrderCoupon;
}

	public CartModel getCartModel(final String cartId, CartModel cartModel, final UserModel currentUser)
	{
		if (!StringUtils.isBlank(cartId))
		{
			if (!getUserService().isAnonymousUser(currentUser))
			{
				cartModel = getCommerceCartService().getCartForCodeAndUser(cartId, currentUser);

			}
			else
			{
				cartModel = getCommerceCartService().getCartForGuidAndSite(cartId, baseSiteService.getCurrentBaseSite());
			}
		}
		return cartModel;
	}


	@Override
	public PriceData getPriceFromRFC(final String productCode) {
		if (StringUtils.isBlank(productCode)) {
			LOG.warn("Product code is null or empty");
			return null;
		}

		try {
			final ProductModel model = getProductService().getProductForCode(productCode);
			if (!(model instanceof GEEdgeProductModel)) {
				LOG.warn("Product is not an instance of GEEdgeProductModel: " + productCode);
				return null;
			}

			final GEEdgeProductModel productModel = (GEEdgeProductModel) model;
			if (!bhgeProductService.isVisibleForCurrentUser(productModel)) {
				LOG.warn("Product is not visible for the current user: " + productCode);
				return null;
			}

			if (userService.isAnonymousUser(userService.getCurrentUser())) {
				final ProductData productData = getProductDataFromProductCode(productCode);
				if (BooleanUtils.isNotTrue(productData.getIsAnonymousBuy()) ||
						Objects.isNull(sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA))) {
					return null;
				}
			}

			final ProductData productData = bhgeCartService.getPriceFromRFC(productModel);
			if (productData == null) {
				LOG.warn("Product data is null for product: " + productCode);
				return null;
			}

			PriceData priceData = productData.getPrice();
			if (priceData != null) {
				formatPriceData(priceData);
			}

			if (productData.getConnectivityerror() != null) {
				return populateConnectivityError(productData);
			}

			return priceData;

		} catch (UnknownIdentifierException e) {
			LOG.debug("Unknown product identifier: " + productCode, e);
		} catch (Exception e) {
			LOG.error("Error fetching price from RFC for product: " + productCode, e);
		}

		return null;
	}
	@Override
	public PriceData getPriceFromRFCForWS(final String productCode, String guestSalesArea) {
		if (StringUtils.isBlank(productCode)) {
			LOG.warn("Product code is null or empty");
			return null;
		}

		try {
			final ProductModel model = getProductService().getProductForCode(productCode);
			if (!(model instanceof GEEdgeProductModel)) {
				LOG.warn("Product is not an instance of GEEdgeProductModel: " + productCode);
				return null;
			}

			final GEEdgeProductModel productModel = (GEEdgeProductModel) model;
			if (!bhgeProductService.isVisibleForCurrentUser(productModel)) {
				LOG.warn("Product is not visible for the current user: " + productCode);
				return null;
			}

			if (userService.isAnonymousUser(userService.getCurrentUser())) {
				final ProductData productPopulatedData = getProductDataFromProductCodeForWS(productCode, guestSalesArea);
				if (BooleanUtils.isNotTrue(productPopulatedData.getIsAnonymousBuy()) || Objects.isNull(guestSalesArea))
				{
					return null;
				}
			}

			ProductData productData = bhgeCartService.getPriceFromRFCForWS(productModel, guestSalesArea);

			if (productData == null) {
				LOG.warn("Product data is null for product: " + productCode);
				return null;
			}

			PriceData priceData = productData.getPrice();
			if (priceData != null) {
				formatPriceData(priceData);
			}

			if (productData.getConnectivityerror() != null) {
				return populateConnectivityError(productData);
			}

			return priceData;

		} catch (UnknownIdentifierException e) {
			LOG.debug("Unknown product identifier: " + productCode, e);
		} catch (Exception e) {
			LOG.error("Error fetching price from RFC for product: " + productCode, e);
		}

		return null;
	}

	private void formatPriceData(PriceData priceData) {
		final CurrencyModel currency = commonI18NService.getCurrency(
				StringUtils.defaultIfBlank(priceData.getCurrencyIso(), "USD"));
		priceData.setFormattedValue(currency.getIsocode() + " " + currency.getSymbol() + priceData.getFormattedValue());
	}
	/**
	 * @param productCode
	 * @return
	 */
	private ProductData getProductDataFromProductCode(final String productCode)
	{
		final List<ProductOption> extraOptions = Arrays.asList(ProductOption.VARIANT_MATRIX_BASE, ProductOption.VARIANT_MATRIX_URL,
				ProductOption.VARIANT_MATRIX_MEDIA, ProductOption.CLASSIFICATION);

		return getProductFacade().getProductForCodeAndOptions(productCode, extraOptions);
	}
	
	private ProductData getProductDataFromProductCodeForWS(final String productCode, final String guestSalesArea)
	{
		final List<ProductOption> extraOptions = Arrays.asList(ProductOption.VARIANT_MATRIX_BASE, ProductOption.VARIANT_MATRIX_URL,
				ProductOption.VARIANT_MATRIX_MEDIA, ProductOption.CLASSIFICATION);

		return bhgeProductFacade.getProductForCodeAndOptionsForGuestUser(productCode, extraOptions, guestSalesArea);
	}

	protected PriceData populateConnectivityError(final ProductData productData)
	{
		final PriceData priceData = new PriceData();

		priceData.setConnectivityerror(productData.getConnectivityerror());
		return priceData;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.order.BHGECartFacade#getAvailabiltyDetailsForCart()
	 */
	@Override
	public CartModel getAvailabiltyDetailsForCart()
	{
		CartModel cartModel = bhgeCartService.getSessionCart();
		boolean shipmentMode = cartModel.getIsShipCompleteOrder() != null && cartModel.getIsShipCompleteOrder();
		cartModel = bhgeCartService.getProductAvailabiltyDetails(cartModel, shipmentMode);
		return cartModel;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.order.BHGECartFacade#getOrderBom(java.lang.String, java.lang.String)
	 */



	@Override
	public List<CartModificationData> validateCartData() throws CommerceCartModificationException
	{
		if (bhgeCartService.hasSessionCart())
		{
			final CommerceCartParameter parameter = new CommerceCartParameter();
			parameter.setEnableHooks(true);
			parameter.setCart(bhgeCartService.getSessionCart());
			return Converters.convertAll(getCommerceCartService().validateCart(parameter), getCartModificationConverter());
		}
		else
		{
			return Collections.emptyList();
		}
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.order.BHGECartFacade#addToCartBulkUpload(java.lang.String, long)
	 */
	@Override
	public boolean addToCartBulkUpload(final String code, final long quantity)
	{
		LOG.debug(ADDING_PARTNUMBER + code);

		final GEEdgeProductModel product = (GEEdgeProductModel) getProductService().getProductForCode(code);

		final CartModel cartModel = bhgeCartService.getSessionCart();
		//Explicitly setting the commerce type of cart to BUY
		cartModel.setCommerceType(BHGERMACommerceType.BUY);
		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData geEdgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());

		cartModel.setIsShipCompleteOrder(geEdgeCustomerData.getIsShipCompleteOrder());

		cartModel.setDeliveryAccountNum(geEdgeCustomerData.getDeliveryAccount());

		cartModel.setShipToContactName(geEdgeCustomerData.getShippingContactName());

		cartModel.setShipToContactPhone(geEdgeCustomerData.getShippingContactNumber());

		if (null != geEdgeCustomerData.getDeliveryOptions() && geEdgeCustomerData.getDeliveryOptions().equalsIgnoreCase("ADD"))
		{
			cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("ADD"));
		}
		else if (null != geEdgeCustomerData.getDeliveryOptions()
				&& geEdgeCustomerData.getDeliveryOptions().toUpperCase().contains(PREPAY))
		{
			cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf(PREPAY));
		}
		else if (null != geEdgeCustomerData.getDeliveryOptions()
				&& geEdgeCustomerData.getDeliveryOptions().equalsIgnoreCase(COLLECT))
		{
			cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf(COLLECT));
		}

		modelService.save(cartModel);

		final CommerceCartParameter parameter = new CommerceCartParameter();
		parameter.setEnableHooks(true);
		parameter.setCart(cartModel);
		parameter.setProduct(product);
		parameter.setQuantity(quantity);
		parameter.setUnit(product.getUnit());
		parameter.setCreateNewEntry(true);
		parameter.setBulkUpload(true);
		//
		try
		{
			final CommerceCartModification modification = bhgeCartService.addProductToCart(parameter);

			if (modification.getStatusCode().equalsIgnoreCase("noStock"))
			{
				return false;
			}
			final MaterialChannelStatus materialStatus = productUtil.getMaterialStatusForCurrentSalesArea(product, sessionService,
					userService);
			final AbstractOrderEntryModel orderEntry = modification.getEntry();
			if (materialStatus != null
					&& (materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO)))
			{
				orderEntry.setIsEngineeringHold(Boolean.TRUE);
				modelService.save(orderEntry);
			}

		}
		catch (final CommerceCartModificationException e)
		{
			throw new DomainException(ExceptionUtils.getStackTrace(e));
		}
		catch (final Exception e)
		{
			LOG.error("addToCartBulkUpload:Error in updating AbstractOrderEntry engineering hold status"
					+ ExceptionUtils.getStackTrace(e));
		}

		return true;
	}

	
	//Added for spartacus migration
	
	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.order.BHGECartFacade#addToCartBulkUpload(java.lang.String, long)
	 */
	@Override
	public boolean addToCartBulkUploadWs(final String code, final long quantity, String ecaCode, String cartId, BHGESoldToUtil bhgeSoldToUtil)
	{
		LOG.info("addToCartBulkUploadWs - Adding product to cart. Product code: " + code + ", Quantity: " + quantity + ", Cart ID: " + cartId);
		LOG.debug(ADDING_PARTNUMBER + code);

		final GEEdgeProductModel product = (GEEdgeProductModel) getProductService().getProductForCode(code);

		final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(cartId);
		//Explicitly setting the commerce type of cart to BUY
		cartModel.setCommerceType(BHGERMACommerceType.BUY);
		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData geEdgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());

		cartModel.setIsShipCompleteOrder(geEdgeCustomerData.getIsShipCompleteOrder());

		cartModel.setDeliveryAccountNum(geEdgeCustomerData.getDeliveryAccount());

		cartModel.setShipToContactName(geEdgeCustomerData.getShippingContactName());

		cartModel.setShipToContactPhone(geEdgeCustomerData.getShippingContactNumber());

		if (null != geEdgeCustomerData.getDeliveryOptions() && geEdgeCustomerData.getDeliveryOptions().equalsIgnoreCase("ADD"))
		{
			cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf("ADD"));
		}
		else if (null != geEdgeCustomerData.getDeliveryOptions()
				&& geEdgeCustomerData.getDeliveryOptions().toUpperCase().contains(PREPAY))
		{
			cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf(PREPAY));
		}
		else if (null != geEdgeCustomerData.getDeliveryOptions()
				&& geEdgeCustomerData.getDeliveryOptions().equalsIgnoreCase(COLLECT))
		{
			cartModel.setShippingChargeMethod(ShippingChargeMethod.valueOf(COLLECT));
		}

		modelService.save(cartModel);

		final CommerceCartParameter parameter = new CommerceCartParameter();
		parameter.setEnableHooks(true);
		parameter.setCart(cartModel);
		parameter.setProduct(product);
		parameter.setQuantity(quantity);
		parameter.setUnit(product.getUnit());
		parameter.setCreateNewEntry(true);
		parameter.setBulkUpload(true);
		//
		try
		{
			final CommerceCartModification modification = bhgeCartService.addProductToCart(parameter);

			if (modification.getStatusCode().equalsIgnoreCase("noStock"))
			{
				return false;
			}
			final BHGEProductUtil productUtil = new BHGEProductUtil();
			final MaterialChannelStatus materialStatus = productUtil.getMaterialStatusForCurrentSalesAreaForWS(product, 
					userService, bhgeSoldToUtil);
			final AbstractOrderEntryModel orderEntry = modification.getEntry();
			if(StringUtils.isNotBlank(ecaCode))
			{
				populateEndCustomerAddress(Long.valueOf(ecaCode), (CartEntryModel) orderEntry);
				LOG.info("ECA code set on order entry: " + ecaCode);
			}
			if (materialStatus != null
					&& (materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO)))
			{
				orderEntry.setIsEngineeringHold(Boolean.TRUE);
				modelService.save(orderEntry);
			}

		}
		catch (final CommerceCartModificationException e)
		{
			throw new DomainException(ExceptionUtils.getStackTrace(e));
		}
		catch (final Exception e)
		{
			LOG.error("addToCartBulkUpload:Error in updating AbstractOrderEntry engineering hold status"
					+ ExceptionUtils.getStackTrace(e));
		}

		return true;
	}

	@Override
	public boolean addToCartBulkUpload(final String code, final long quantity, final CustomerData customerData,
			final BHGECustomerData geEdgeCustomerData, final CartModel cartModel)
	{
		LOG.debug(ADDING_PARTNUMBER + code);

		final GEEdgeProductModel product = (GEEdgeProductModel) getProductService().getProductForCode(code);

		final CommerceCartParameter parameter = new CommerceCartParameter();
		parameter.setEnableHooks(true);
		parameter.setCart(cartModel);
		parameter.setProduct(product);
		parameter.setQuantity(quantity);
		parameter.setUnit(product.getUnit());
		parameter.setCreateNewEntry(true);
		parameter.setBulkUpload(true);
		//
		try
		{
			final CartEntryModel cartEntry = bhgeCartService.addProductToCartEntry(parameter);
			final MaterialChannelStatus materialStatus = productUtil.getMaterialStatusForCurrentSalesArea(product, sessionService,
					userService);
			if (materialStatus != null
					&& (materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO)))
			{
				cartEntry.setIsEngineeringHold(Boolean.TRUE);
				modelService.save(cartEntry);
			}

		}
		catch (final ModelSavingException e)
		{
			throw new DomainException(ExceptionUtils.getStackTrace(e));
		}
		catch (final Exception e)
		{
			LOG.error("@3 addToCartBulkUpload:Error in updating AbstractOrderEntry engineering hold status"
					+ ExceptionUtils.getStackTrace(e));
		}

		return true;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.order.BHGECartFacade#addToCartWithPrice(java.lang.String, long,
	 * de.hybris.platform.commercefacades.product.data.PriceData)
	 */
	@Override
	public CartModificationData addToCartWithPrice(final String code, final long quantity, final PriceData priceData)
			throws CommerceCartModificationException
	{
		final ProductModel product = getProductService().getProductForCode(code);
		final CartModel cartModel = bhgeCartService.getSessionCart();
		final CommerceCartParameter parameter = new CommerceCartParameter();
		parameter.setEnableHooks(true);
		parameter.setCart(cartModel);
		parameter.setProduct(product);
		parameter.setQuantity(quantity);
		parameter.setUnit(product.getUnit());
		parameter.setCreateNewEntry(true);
		final CommerceCartModification modification = getCommerceCartService().addToCart(parameter);
		try
		{
			final GEEdgeProductModel geEdgeProduct = (GEEdgeProductModel) product;
			final MaterialChannelStatus materialStatus = productUtil.getMaterialStatusForCurrentSalesArea(geEdgeProduct,
					sessionService, userService);
			final AbstractOrderEntryModel orderEntry = modification.getEntry();
			orderEntry.setIsEngineeringHold(Boolean.FALSE);
			if (materialStatus != null
					&& (materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO)))
			{
				orderEntry.setIsEngineeringHold(Boolean.TRUE);
			}

			orderEntry.setBasePrice(priceData.getValue().doubleValue());

			modelService.save(orderEntry);
			//modelService.refresh(orderEntry);
		}
		catch (final Exception e)
		{
			LOG.error("@1 addToCart:Error in updating AbstractOrderEntry engineering hold status" + ExceptionUtils.getStackTrace(e));
		}

		return getCartModificationConverter().convert(modification);
	}
	
	//Added for spartacus migration
	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.order.BHGECartFacade#addToCartWithPriceWs(java.lang.String, long,
	 * de.hybris.platform.commercefacades.product.data.PriceData)
	 */
	@Override
	public CartModificationData addToCartWithPriceWs(final String code, final long quantity, final PriceData priceData, String cartId, BHGESoldToUtil bhgeSoldToUtil)
			throws CommerceCartModificationException
	{
		final ProductModel product = getProductService().getProductForCode(code);
		final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(cartId);
		final CommerceCartParameter parameter = new CommerceCartParameter();
		parameter.setEnableHooks(true);
		parameter.setCart(cartModel);
		parameter.setProduct(product);
		parameter.setQuantity(quantity);
		parameter.setUnit(product.getUnit());
		parameter.setCreateNewEntry(true);
		final CommerceCartModification modification = getCommerceCartService().addToCart(parameter);
		try
		{
			final GEEdgeProductModel geEdgeProduct = (GEEdgeProductModel) product;
			final MaterialChannelStatus materialStatus = productUtil.getMaterialStatusForCurrentSalesAreaForWS(geEdgeProduct,
					userService, bhgeSoldToUtil);
			final AbstractOrderEntryModel orderEntry = modification.getEntry();
			orderEntry.setIsEngineeringHold(Boolean.FALSE);
			if (materialStatus != null
					&& (materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO)))
			{
				orderEntry.setIsEngineeringHold(Boolean.TRUE);
			}

			orderEntry.setBasePrice(priceData.getValue().doubleValue());

			modelService.save(orderEntry);
			//modelService.refresh(orderEntry);
		}
		catch (final Exception e)
		{
			LOG.error("@1 addToCart:Error in updating AbstractOrderEntry engineering hold status" + ExceptionUtils.getStackTrace(e));
		}

		return getCartModificationConverter().convert(modification);
	}


	@Override
	public List<CartEntryModel> validateCartForNonSellableProducts(final CartModel cart,String guestSalesArea ,final UserModel user)
	{
		final List<CartEntryModel> deletedProducts = bhgeCartService.nonSellableProductForCart(cart,user);

		//Remove entries for invalid product for guest user
		if (userService.isAnonymousUser(user))
		{
			removeInvalidProductsForGuestCartForWS(cart, deletedProducts,guestSalesArea);
		}
		return deletedProducts;
	}
	private void removeInvalidProductsForGuestCart(final CartModel cart, final List<CartEntryModel> deletedProducts) {
		if (cart == null || CollectionUtils.isEmpty(cart.getEntries())) {
			return;
		}

		final BHGERMACommerceType commerceType = cart.getCommerceType();
		final List<CartEntryModel> entries = (List) cart.getEntries();

		for (final CartEntryModel entry : entries) {
			final GEEdgeProductModel productEntry = (GEEdgeProductModel) entry.getProduct();
			final ProductData productData = getProductDataFromProductCode(productEntry.getCode());
           //Remove non-BUY products for BUY cart and non-RFQ products for RFQ cart
			if (Objects.nonNull(cart.getCommerceType())){
			if (commerceType == BHGERMACommerceType.GUESTBUY && BooleanUtils.isNotTrue(productData.getIsAnonymousBuy())) {
				LOG.info("Product is not accessible for guest user (BUY): " + productEntry.getCode());
				deletedProducts.add(entry);
			} else if (commerceType == BHGERMACommerceType.GUESTRFQ && BooleanUtils.isNotTrue(productData.getIsAnonymousQuote())) {
				LOG.info("Product is not accessible for guest user (RFQ): " + productEntry.getCode());
				deletedProducts.add(entry);
			}
		}
		else {
				LOG.info("Product is not accessible for guest user (Unknown Commerce Type): " + productEntry.getCode());
				deletedProducts.add(entry);
			}
		}
	}
	private void removeInvalidProductsForGuestCartForWS(final CartModel cart, final List<CartEntryModel> deletedProducts,String guestSalesArea) {
		if (cart == null || CollectionUtils.isEmpty(cart.getEntries())) {
			return;
		}

		final BHGERMACommerceType commerceType = cart.getCommerceType();
		final List<CartEntryModel> entries = (List) cart.getEntries();

		for (final CartEntryModel entry : entries) {
			final GEEdgeProductModel productEntry = (GEEdgeProductModel) entry.getProduct();
			final ProductData productData = getProductDataFromProductCodeForWS(productEntry.getCode(),guestSalesArea);
			//Remove non-BUY products for BUY cart and non-RFQ products for RFQ cart
			if (Objects.nonNull(cart.getCommerceType())){
				if (commerceType == BHGERMACommerceType.GUESTBUY && BooleanUtils.isNotTrue(productData.getIsAnonymousBuy())) {
					LOG.info("Product is not accessible for guest user (BUY): " + productEntry.getCode());
					deletedProducts.add(entry);
				} else if (commerceType == BHGERMACommerceType.GUESTRFQ && BooleanUtils.isNotTrue(productData.getIsAnonymousQuote())) {
					LOG.info("Product is not accessible for guest user (RFQ): " + productEntry.getCode());
					deletedProducts.add(entry);
				}
			}
			else {
				LOG.info("Product is not accessible for guest user (Unknown Commerce Type): " + productEntry.getCode());
				deletedProducts.add(entry);
			}
		}
	}
	
	/**
	 * @param cart
	 * @param deletedProducts
	 */
	/**
	 * @param cart
	 * @param deletedProducts
	 */

	@Override
	@SuppressWarnings("boxing")
	public CartModificationData updateOrderEntry(final OrderEntryData orderEntry)
	{
		CartModificationData cartModification = null;
		orderEntry.setEntryNumber(getOrderEntryNumber(orderEntry));

		if (orderEntry.getQuantity() == 0)
		{
			final CartModel cartModel = bhgeCartService.getSessionCart();
			cartModel.setReqHeaderDeliveryDate(null);
			modelService.save(cartModel);
			modelService.refresh(cartModel);
		}

		try
		{
			if (orderEntry.getEntryNumber() != null)
			{
				// grouped items
				if (CollectionUtils.isNotEmpty(orderEntry.getEntries()))
				{
					if (orderEntry.getQuantity().intValue() == 0)
					{
						cartModification = deleteGroupedOrderEntries(orderEntry);
					}
				}
				else
				{
					cartModification = updateCartEntry(orderEntry.getEntryNumber(), orderEntry.getQuantity());
				}
			}
			else
			{
				cartModification = addOrderEntry(orderEntry);
			}

			if (cartModification != null)
			{
				setUpdateStatusMessage(orderEntry, cartModification);
			}
		}
		catch (final CommerceCartModificationException e)
		{
			throw new DomainException(getLocalizedString(CART_MODIFICATION_ERROR), e);
		}

		if (orderEntry.getQuantity() == 0)
		{
			final CartModel cartModel = bhgeCartService.getSessionCart();
			//Code for setting cart type after updating the cart
			final GEEdgeCartType cartType = updateCartType(cartModel);
			cartModel.setCartType(cartType);
			modelService.save(cartModel);
			modelService.refresh(cartModel);
		}

		return cartModification;

	}

	@Override
	public Integer getOrderEntryNumber(final OrderEntryData findEntry)
	{

		if (findEntry.getEntryNumber() != null && findEntry.getEntryNumber().intValue() >= 0)
		{
			return findEntry.getEntryNumber();
		}
		else if (findEntry.getProduct() != null && findEntry.getProduct().getCode() != null)
		{
			for (final OrderEntryData orderEntry : getSessionCart().getEntries())
			{
				// find the entry
				if (orderEntry.getProduct().getCode().equals(findEntry.getProduct().getCode()))
				{
					if (CollectionUtils.isNotEmpty(orderEntry.getEntries()))
					{
						findEntry.setEntries(orderEntry.getEntries());
					}
					return orderEntry.getEntryNumber();
				}
				// check sub entries
				else if (orderEntry.getEntries() != null && !orderEntry.getEntries().isEmpty())
				{
					for (final OrderEntryData subEntry : orderEntry.getEntries())
					{
						// find the entry
						if (subEntry.getProduct().getCode().equals(findEntry.getProduct().getCode()))
						{
							return subEntry.getEntryNumber();
						}
					}
				}
			}
		}
		return null;
	}

	@Override
	public CartModificationData deleteGroupedOrderEntries(final OrderEntryData orderEntry)
	{
		final List<CartModificationData> modificationDataList = new ArrayList<CartModificationData>();

		for (final OrderEntryData subEntry : orderEntry.getEntries())
		{
			subEntry.setEntryNumber(null);
			subEntry.setQuantity(0L);
			subEntry.setEntryNumber(getOrderEntryNumber(subEntry));

			final CartModificationData cartModificationData = updateOrderEntry(subEntry);
			modificationDataList.add(cartModificationData);
		}

		final List<CartModificationData> listCartModifications = groupCartModificationDataList(modificationDataList);

		if (CollectionUtils.isNotEmpty(listCartModifications))
		{
			return listCartModifications.get(0);
		}

		return null;
	}

	@Override
	public CartModificationData updateCartEntry(final long entryNumber, final long quantity)
			throws CommerceCartModificationException
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		final CommerceCartParameter parameter = new CommerceCartParameter();
		parameter.setEnableHooks(true);
		parameter.setCart(cartModel);
		parameter.setEntryNumber(entryNumber);
		parameter.setQuantity(quantity);

		if (quantity == 0)
		{
			getEntryForNumber(cartModel, (int) entryNumber);
		}

		final CommerceCartModification modification = getCommerceCartService().updateQuantityForCartEntry(parameter);

		return getCartModificationConverter().convert(modification);
	}
	@Override
	public void updateCartentryECA(CartData cartData, int entryNumber, Long ecaCode)
	{
		LOG.info("Updating ECA code for cart entry. Cart code: " + cartData.getCode() + ", Entry number: " + entryNumber + ", ECA code: " + ecaCode);
		bhgeCartService.updateCartentryECA(cartData.getCode(),entryNumber, ecaCode);
	}

	protected AbstractOrderEntryModel getEntryForNumber(final AbstractOrderModel order, final int number)
	{
		final List<AbstractOrderEntryModel> entries = order.getEntries();
		if (entries != null && !entries.isEmpty())
		{
			final Integer requestedEntryNumber = Integer.valueOf(number);
			for (final AbstractOrderEntryModel entry : entries)
			{
				if (entry != null && requestedEntryNumber.equals(entry.getEntryNumber()))
				{
					LOG.info(" ##################### Removing the Product(s) of Part number " + entry.getProduct().getCode());
					return entry;
				}
			}
		}
		return null;
	}

	@Override
	public CartModificationData addOrderEntry(final OrderEntryData cartEntry)
	{
		CartModificationData cartModification = null;
		try
		{
			if(StringUtils.isNotEmpty(cartEntry.getLongConfiguration())) {
				cartModification = addLongConfigToCart(cartEntry.getProduct().getCode(), cartEntry.getQuantity(), cartEntry.getLongConfiguration());
			} else {
				cartModification = addToCart(cartEntry.getProduct().getCode(), cartEntry.getQuantity(),cartEntry.getEcaCode());
			}
			final CartModel cartModel = bhgeCartService.getSessionCart();
			//Explicitly setting the commerce type of cart to BUY for adding long part number in new cart
			if (cartModel != null) {
				cartModel.setCommerceType(BHGERMACommerceType.BUY);
				LOG.info("Setting commerce type as buy 1852");
				modelService.save(cartModel);
			}
		}
		catch (final CommerceCartModificationException e)
		{
			throw new DomainException(getLocalizedString(CART_MODIFICATION_ERROR), e);
		}
		setAddStatusMessage(cartEntry, cartModification);
		return cartModification;
	}

	@Override
	public void setUpdateStatusMessage(final OrderEntryData orderEntry, final CartModificationData cartModification)
	{
		if (cartModification.getQuantity() == 0)
		{
			cartModification.setStatusMessage(getLocalizedString(BASKET_QUANTITY_REMOVE_SUCCESS));
		}
		else if (cartModification.getQuantity() < orderEntry.getQuantity())
		{
			cartModification.setStatusMessage(
					getLocalizedString(BASKET_QUANTITY_REDUCED_NUMBER_PREFIX_KEY + cartModification.getStatusCode(), new Object[]
					{ cartModification.getEntry().getProduct().getName() }));
		}
	}

	private GEEdgeCartType updateCartType(final CartModel cartModel)
	{
		final Set<String> cartTypes = new HashSet<String>();

		if (cartModel.getEntries() != null && !cartModel.getEntries().isEmpty())
		{
			for (final AbstractOrderEntryModel cartEntry : cartModel.getEntries())
			{
				final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) cartEntry.getProduct();
				if (null != geEdgeProductModel.getProductType())
				{
					cartTypes.add(geEdgeProductModel.getProductType().getCode());
				}

			}

		}


		if (cartTypes.contains(BhgeCoreConstants.FILM) && cartTypes.contains(BhgeCoreConstants.NON_FILM)
				&& cartTypes.contains(BhgeCoreConstants.MS))
		{
			return GEEdgeCartType.HYBRID;
		}
		else if (cartTypes.contains(BhgeCoreConstants.FILM) && cartTypes.contains(BhgeCoreConstants.NON_FILM))
		{
			return GEEdgeCartType.HYBRID;
		}
		else if (cartTypes.contains(BhgeCoreConstants.FILM) && cartTypes.contains(BhgeCoreConstants.MS))
		{
			return GEEdgeCartType.HYBRID;
		}
		else if (cartTypes.contains(BhgeCoreConstants.FILM))
		{
			return GEEdgeCartType.FILM;
		}
		else
		{
			return GEEdgeCartType.NONFILM;
		}

	}

	private List<CartModificationData> groupCartModificationDataList(final List<CartModificationData> ungroupedList)
	{
		groupCartModificationListPopulator.populate(null, ungroupedList);

		return ungroupedList;
	}

	@Override
	public void setAddStatusMessage(final OrderEntryData orderEntry, final CartModificationData cartModification)
	{
		if (cartModification.getQuantityAdded() <= MINIMUM_SINGLE_SKU_ADD_CART)
		{
			if (cartModification.getEntry() != null && cartModification.getEntry().getProduct() != null)
			{
				cartModification.setStatusMessage(
						getLocalizedString(BASKET_QUANTITY_NOITEMADDED_ERROR_PREFIX_KEY + cartModification.getStatusCode(), new Object[]
						{ cartModification.getEntry().getProduct().getName() }));
			}
		}
		else if (cartModification.getQuantityAdded() < orderEntry.getQuantity())
		{
			cartModification.setStatusMessage(
					getLocalizedString(BASKET_QUANTITY_REDUCED_NUMBER_PREFIX_KEY + cartModification.getStatusCode(), new Object[]
					{ cartModification.getEntry().getProduct().getName() }));
		}
	}

	@Override
	public CartData getPriceForVCCartEntry(final int entryNumber)
	{
		CartData cartData = null;
		//CartModel cart=bhgeCartService.getSessionCart();
		CartModel cart = null;
		if (hasSessionCart())
		{
			cart = bhgeCartService.getPriceForVCCartEntry(entryNumber);
			modelService.save(cart);
			// cartData=(CartData) abstractConveter.convert(cart);
			cartData = getCartConverter().convert(cart);
			return cartData;
		}
		else
		{
			cartData = createEmptyCart();
			return cartData;
		}
	}

	public void setupBuyCart()
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		if (cartModel != null)
		{
			cartModel.setCommerceType(BHGERMACommerceType.BUY);
			modelService.save(cartModel);
		}
	}
	
	public void setupGuestCart(final ProductData productData)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		if (cartModel != null)
		{
			if(BooleanUtils.isTrue(productData.getIsAnonymousBuy()) && Objects.isNull(cartModel.getCommerceType()))
				{
					cartModel.setCommerceType(BHGERMACommerceType.GUESTBUY);
					modelService.save(cartModel);
				}


			if(BooleanUtils.isTrue(productData.getIsAnonymousQuote()) && Objects.isNull(cartModel.getCommerceType()))
				{
					cartModel.setCommerceType(BHGERMACommerceType.GUESTRFQ);
					modelService.save(cartModel);
				}

		}
	}
	
	@Override
	public String getGuestCartType()
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		LOG.info("Inside getCartType of GuestUser - " + cartModel.getCommerceType());
		if (Objects.nonNull(cartModel.getCommerceType()) && cartModel.getEntries() != null && !cartModel.getEntries().isEmpty())
		{
			return cartModel.getCommerceType().toString();
		}
		else
		{
			return "BLANK";
		}
	}
	
	

	@Override
	public boolean isCompleteShipmentWithMultiplePlants()
	{

		return bhgeCartService.isCompleteShipmentWithMultiplePlants();
	}

	@Override
	public boolean getSoldtoBlockDetails()
	{
		return bhgeCartService.getSoldtoBlockDetails();
	}

	@Override
	public List<CountryData> getDeliveryCountries()
	{
		final List<CountryModel> deliveryCountries = new ArrayList<CountryModel>();
		final List<CountryModel> countries = getDeliveryService().getDeliveryCountriesForOrder(null);
		for (CountryModel country : countries) {
			if (!country.getRegions().isEmpty()) {
				deliveryCountries.add(country);
			}
		}
		final List<CountryData> countriesdata = Converters.convertAll(deliveryCountries, getCountryConverter());
		countriesdata.sort(CountryComparator.INSTANCE);
		return countriesdata;
	}
	@Override
	public void populateAvailabilityOnProductData(ProductData productData, String defaultPlant, int quantity, String guestSalesArea) {
		if (productData == null || StringUtils.isEmpty(productData.getCode())) {
			LOG.warn("Product data or product code is null/empty");
			return;
		}

		final BHGEAvailabilityCheckFormData formData = bhgePriceAvailabilityUtils.createAvailabilityCheckFormData(productData.getCode(), quantity);
		final CartModel cartModel = getCartModelForAvailability(formData, guestSalesArea, productData);

		if (cartModel == null) {
			LOG.warn("Cart model is null for product: " + productData.getCode());
			return;
		}

		if (StringUtils.isNotEmpty(defaultPlant)) {
			bhgePriceAvailabilityUtils.updateDefaultPlant(cartModel, defaultPlant);
			productData.setAvailabilityList(true);
		}

		handleObsoleteProduct(productData);
		removeCart(cartModel);

		productData.setConfigurable(bhgeProductFacade.isCPQProduct(productData.getCode()));
		populatePlantListIfConfigurable(productData);
		populateProductDetailForDisplay(productData.getCode());
		productData.setFutureStockEnabled(Config.getBoolean(FUTURE_STOCK_ENABLED, false));
		productData.setWishlistProducts(bhgeWishlistService.getWishlistProductsCodeForUser(userService.getCurrentUser()));
		productData.setPurchasable(Boolean.TRUE);
	}
	public CartModel getCartModelForAvailability(BHGEAvailabilityCheckFormData formData, String guestSalesArea, ProductData productData) {
		UserModel currentUser = userService.getCurrentUser();
		if (currentUser instanceof GEEdgeCustomerModel) {
			LOG.debug(" ############### Checking the Price and Availability of 1"
					+ " quantity of Product with Part Number " + productData.getCode() + " from the PDP Page ");
			CartModel cartModel =getAvailabilityDetailsForMaterialsForWS(formData, guestSalesArea);
			bhgePriceAvailabilityUtils.populateAvailabilityAndPrice(cartModel,productData);
			return cartModel;
		} else if (userService.isAnonymousUser(currentUser) && Boolean.TRUE.equals(productData.getIsAnonymousBuy())) {
			BHGEAnonymousUserCatalogModel catalog = bhgeSoldToUtil.getAnonymousUserCatalog(productData.getGuestSalesOrg());
			if (catalog != null && catalog.getB2BUnit() != null) {
				CartModel cartModel = getAvailabilityDetailsForMaterialsForWS(formData, guestSalesArea);
				bhgePriceAvailabilityUtils.populateAvailabilityAndPrice(cartModel,productData);
				return cartModel;
			} else {
				productData.setBuyWithOutB2BUnit(true);
			}
		}
		return null;
	}
	public void handleObsoleteProduct(ProductData productData) {
		GEEdgeProductModel productModel = (GEEdgeProductModel) bhgeProductService.getProductForCode(productData.getCode());
		HybrisStatus hybrisStatus = new BHGEProductUtil().getHybrisStatusForCurrentB2BUnit(productModel, userService);

		if (hybrisStatus != null && "OBSOLETE".equals(hybrisStatus.getCode())) {
			productData.setObsoletePart(productModel.getCode());
			productData.setReplacementPartsList(getReplacementParts(productModel));
		}
	}

	private List<ProductData> getReplacementParts(GEEdgeProductModel productModel) {
		final Collection<ProductReferenceModel> refCollection = productModel.getProductReferences();
		final List<ProductData> replacementPartsList = new ArrayList<ProductData>();

		for (final ProductReferenceModel refModel : refCollection)
		{
			if (null != refModel.getReferenceType() && "OBSOLETE".equals(refModel.getReferenceType().getCode()))
			{
				final GEEdgeProductModel targetProd = (GEEdgeProductModel) refModel.getTarget();
				final ProductData replacementPartData =bhgeProductFacadeImpl.getProductForOptions(targetProd, OPTIONS);
				replacementPartData.setConfigurable(targetProd.getSapConfigurable());
				replacementPartsList.add(replacementPartData);
			}
		}
		return replacementPartsList;
	}

	public void populatePlantListIfConfigurable(ProductData productData) {
		if (Boolean.TRUE.equals(productData.getConfigurable())) {
			Map<String, String> plants = bhgeProductFacadeImpl.getPlantsForMaterial(productData.getCode());
			if (plants != null) {
				productData.setPlantList(plants);
			}
		}
	}


	protected void populateProductDetailForDisplay(final String productCode)
	{
		final List<ProductOption> options = new ArrayList<>(Arrays.asList(ProductOption.VARIANT_FIRST_VARIANT, ProductOption.BASIC,
				ProductOption.URL, ProductOption.CLASSIFICATION, ProductOption.PRICE, ProductOption.SUMMARY,
				ProductOption.DESCRIPTION, ProductOption.GALLERY, ProductOption.CATEGORIES, ProductOption.REVIEW,
				ProductOption.PROMOTIONS, ProductOption.VARIANT_FULL, ProductOption.STOCK, ProductOption.VOLUME_PRICES,
				ProductOption.PRICE_RANGE, ProductOption.DELIVERY_MODE_AVAILABILITY));

		try
		{
			final ProductData productData = productFacade.getProductForCodeAndOptions(productCode, options);
			//Populate service offerings on the sales area access data object
			populateServiceOfferingsOnProduct(productData);
		}
		catch (final Exception e)
		{
			LOG.error("Error occured " + e);
		}
	}
	
	
	private void populateServiceOfferingsOnProduct(final ProductData productData)
	{
		LOG.info("Inside populateServiceOfferingsOnProduct() in ProductPageController");
		if (productData.getProductAccessData() != null && productData.getProductAccessData().isIsService())
		{
			populateServiceOfferings(productData.getProductAccessData(), productData.getCode());
		}
	}

	/**
	 * Populates the service offerings for the product
	 *
	 * @param target
	 * @param model
	 */
	private void populateServiceOfferings(final BHGEProductAccessData accessData, final String productCode)
	{
		List<BHGERmaOfferingData> serviceOfferingsData = new ArrayList<BHGERmaOfferingData>();
		final List<RMAData> productList = new ArrayList<RMAData>();
		final Set<String> finalOfferingCodes = new HashSet<String>();
		final RMAData currentProduct = new RMAData();
		currentProduct.setMaterialNumber(productCode);
		productList.add(currentProduct);
		serviceOfferingsData = bhgeRmaServiceOfferingService.getServiceOffering(productList, false, null, null);
		for (final BHGERmaOfferingData serviceOfferingData : serviceOfferingsData)
		{
			final List<OfferingData> offeringList = serviceOfferingData.getOfferingsDataTable().get(productCode);
			for (final OfferingData offering : ListUtils.emptyIfNull(offeringList))
			{
				final OfferDescriptionData offeringData = serviceOfferingData.getOfferDescriptionDataTable().stream()
						.filter(data -> data.getServiceOffering().equalsIgnoreCase(offering.getServiceOffering())).findFirst()
						.orElse(new OfferDescriptionData());
				finalOfferingCodes.add(offeringData.getCategory());
			}
		}
		accessData.setAvailableServiceOfferingCodes(finalOfferingCodes);
	}
	@Override
	public CartData getCartDataForCartID(String cartId, String guestSalesArea, String productLine) {
		LOG.info("Inside getCartDataForCartID - BHGECartFacadeImpl, cartId is " + cartId);
		CartModel cart = retrieveCart(cartId);
		LOG.info("Inside getCartDataForCartID - BHGECartFacadeImpl, cartId is " + cartId + "Currency"+ cart.getCurrency().getIsocode());
		if (cart == null) {
			LOG.info("Cart is null inside getCartDataForCartID - BHGECartFacadeImpl");
			return createEmptyCart();
		}

		handleEmptyCart(cart);
        LOG.info("US644202 cart total"+cart.getTotalPrice());
        LOG.info("US644202 cartdiscounts"+cart.getGlobalDiscountValues());
		handleSingleEntryCart(cart);

		// Updating early shipment as false for Cordant product line
		handleforEarlyShipmentFlag(cart,productLine);

		Map<Integer, ConfigurationData> configDataMap = getCartConfigurationData(cart);
		LOG.info("Inside getCartDataForCartID - BHGECartFacadeImpl, configDataMap size is " + configDataMap.size());

		if (!userService.isAnonymousUser(userService.getCurrentUser())) {
			if (isReturnsCart(cart)) {
				return processReturnsCart(cart);
			} else {
				this.populateShipto(cart);
				bhgeCartService.getRealTimePriceAndAvailabiltyDetails(cart, isCompleteShipment(cart,userService.getCurrentUser()), guestSalesArea, productLine, configDataMap);
				return getSessionCartWithEntryOrderingforWS(cart, false);
			}
		} else {
			return processGuestCart(cart, guestSalesArea,productLine,configDataMap);
		}
	}

	private CartModel retrieveCart(String cartId) {
		if (StringUtils.isBlank(cartId) || UNDEFINED.equalsIgnoreCase(cartId)) {
			return getCartService().getSessionCart();
		}
		UserModel currentUser = userService.getCurrentUser();
		return userService.isAnonymousUser(currentUser)
				? commerceCartService.getCartForGuidAndSite(cartId, baseSiteService.getCurrentBaseSite())
				: commerceCartService.getCartForCodeAndUser(cartId, currentUser);
	}

	private void handleEmptyCart(CartModel cart) {
		LOG.info("Inside voucher removal check US515891");
		//If a Coupon is already applied and the cart is emptied then remove the voucher or product is removed
        if(CollectionUtils.isNotEmpty(cart.getAppliedCouponCodes())){
            LOG.info("US644202 coupon is present"+cart.getAppliedCouponCodes());
        }
        boolean isProductCoupon = checkIsProductCouponApplied(cart);
        LOG.info("US644202 product coupon"+isProductCoupon);
        boolean isOrderCoupon = false;
        if(cart != null && "cordant".equalsIgnoreCase(cart.getProductLine())){
            LOG.info("US644202 productline is cordant");
            isOrderCoupon = checkIsOrderCouponApplied(cart);
            LOG.info("US644202 is OrderCoupon"+isOrderCoupon);
        }
        boolean releaseVoucher = CollectionUtils.isEmpty(cart.getEntries()) || (!isProductCoupon && (!"cordant".equalsIgnoreCase(cart.getProductLine()) || !isOrderCoupon));
        LOG.info("US644202 releaseVoucher"+releaseVoucher);
        if (null != cart && releaseVoucher && CollectionUtils.isNotEmpty(cart.getAppliedCouponCodes())){
            LOG.info("Inside voucher removal check US515891");
			try {
				for (String voucherId: cart.getAppliedCouponCodes()) {
					voucherFacade.releaseVoucher(voucherId);}
				} catch (VoucherOperationException e) {
					LOG.error("Error removing voucher: " + e.getMessage());
				}
			}
			modelService.save(cart);
		}
	private void handleSingleEntryCart(CartModel cart) {
		LOG.info("BHGECartFacadeImpl - Setting Cart shipment to Complete in case if cart is having only one entry");
		//		Setting Cart shipment to Complete in case if cart is having only one entry
		if (CollectionUtils.isNotEmpty(cart.getEntries()) && cart.getEntries().size() == 1) {
			cart.setIsShipCompleteOrder(Boolean.TRUE);
			cart.setIsPartialShipment(Boolean.FALSE);
			modelService.save(cart);
		}
	}

	private void handleforEarlyShipmentFlag(CartModel cart, String productLine) {
		if (cart.getEarlyShipment() == null) {
			if(StringUtils.isNotEmpty(cart.getProductLine())){
				productLine = cart.getProductLine();
			}
			if (StringUtils.isNotBlank(productLine) && StringUtils.containsIgnoreCase(productLine, "cordant")) {
				LOG.info("Setting early shipment as false for " + productLine + " productLine");
				cart.setEarlyShipment(false);
			} else {
				LOG.info("Setting early shipment as true for " + productLine + " productLine");
				cart.setEarlyShipment(true);
			}
		}
	}

	private boolean isReturnsCart(CartModel cart) {
		return cart.getCommerceType() != null && "RETURNS".equalsIgnoreCase(cart.getCommerceType().toString());
	}

	private CartData processReturnsCart(CartModel cart) {
		this.populateShipto(cart);
		cart = getCartService().getSessionCart();
		LOG.info("line 2253 Inside processReturnsCart - BHGECartFacadeImpl, cartId is " + cart.getCode() + "Currency"+ cart.getCurrency().getIsocode());
		cart.setCurrency(commonI18NService.getCurrentCurrency());
		modelService.save(cart);
		LOG.info("line 2256 Inside processReturnsCart - BHGECartFacadeImpl, cartId is " + cart.getCode() + "Currency"+ cart.getCurrency().getIsocode());
		CartData cartData = getCartData(cart);
		if (CollectionUtils.isNotEmpty(cartData.getEntries())) {
			// Additional processing for returns cart
			cartData = bhgeRmaFormFacade.getReturnsCart(cartData);
		}
		return cartData;
	}


	private CartData processGuestCart(CartModel cart, String guestSalesArea, String productLine, Map<Integer, ConfigurationData> configDataMap) {
		if (cart.getCommerceType() == BHGERMACommerceType.GUESTBUY && bhgeSoldToUtil.getDefaultB2BUnitUidOfGuestUser(guestSalesArea) != null) {
			// Process guest BUY cart
			bhgeCartService.getRealTimePriceAndAvailabiltyDetails(cart, isCompleteShipment(cart,null), guestSalesArea, productLine, configDataMap);
			return getCartData(cart);
		} else if (cart.getCommerceType() == BHGERMACommerceType.GUESTRFQ) {
			// Process guest RFQ cart
			CartData cartData = getCartData(cart);
			if (null != cartData.getQuoteData()) {
				cartData.setRedirectToEditQuote(true);
				cartData.setQuoteId(null != cartData.getQuoteData().getCode() ?
						cartData.getQuoteData().getCode() : StringUtils.EMPTY);
			} else {
				cartData.setIsQuoteEnable(true);
			}
			return  cartData;
		}
		return getCartData(cart);
	}

	private boolean isCompleteShipment(CartModel cart, UserModel currentuser) {
		if (currentuser != null) {
		String shipmentPreference = getIshipmentOrderComplete((GEEdgeCustomerModel) currentuser);
		if (cart.getIsShipCompleteOrder() == null) {
			return Boolean.parseBoolean(shipmentPreference);
		}
	}
		return  cart.getIsShipCompleteOrder() == null || cart.getIsShipCompleteOrder();
	}
	
	public CartData getCartData(CartModel cart)
	{
		CartData cartData = new CartData();
		if(null != cart)
		{
			return getCartConverter().convert(cart);
		}
		else
		{
			return cartData;
		}
	}
	
	protected Map<Integer, ConfigurationData> getCartConfigurationData (final CartModel cart) {

		final Map<Integer, ConfigurationData> configDataMap = new HashMap<>();
		LOG.info("BHGECartFacadeImpl Inside getCartConfigurationData method"+cart.getCode());
		for(final AbstractOrderEntryModel entry  : cart.getEntries()) {
			LOG.info("BHGECartFacadeImpl Inside getCartConfigurationData for loop entry number "+ entry.getPk().toString());
			if (entry.getProduct() != null && entry.getProduct().getSapConfigurable()) {
				ProductConfigurationModel productConfigModel = entry.getProductConfiguration();
				if(Boolean.TRUE.equals(entry.getLongConfigEntry())){
					LOG.info("BHGECartFacadeImpl Inside getCartConfigurationData longconfig entry");
					List<BHGEProductInfoModel> productInfoList = entry.getCpqentryinfo();
					ConfigurationData longNumberConfigData = new ConfigurationData();
					//Map<String, String> longNumberConfigValues = new HashMap<>();
                    List<BHGEConfigRequestValues> list = new ArrayList<>();
					for(BHGEProductInfoModel entryProductInfoModel : productInfoList) {
                        BHGEConfigRequestValues bhgeConfigRequestValues = new BHGEConfigRequestValues();
                        LOG.info("BHGECartFacadeImpl config char name "+ entryProductInfoModel.getCpqCharacteristicName()+" config char value "+entryProductInfoModel.getCpqCharacteristicAssignedValues() +
                                "config Author Value" + entryProductInfoModel.getAuthor());
                        //longNumberConfigValues.put(entryProductInfoModel.getCpqCharacteristicName(), entryProductInfoModel.getCpqCharacteristicAssignedValues());
                        bhgeConfigRequestValues.setCharc(entryProductInfoModel.getCpqCharacteristicName());
                        bhgeConfigRequestValues.setValue(entryProductInfoModel.getCpqCharacteristicAssignedValues());
                        bhgeConfigRequestValues.setAuthor(entryProductInfoModel.getAuthor());
                        list.add(bhgeConfigRequestValues);
                    }
					//longNumberConfigData.setLongConfigurationValues(longNumberConfigValues);
                    longNumberConfigData.setLongConfigValuesRequest(list);
					configDataMap.put(entry.getEntryNumber(), longNumberConfigData);
					LOG.info("BHGECartFacadeImpl Inside if getCartConfigurationData configDataMap size "+ configDataMap.size());
					
				} else if (productConfigModel != null && productConfigModel.getConfigurationId() != null) {
					LOG.info("BHGECartFacadeImpl Inside else getCartConfigurationData configDataMap size "+ configDataMap.size());
					final ConfigurationData configurationData = new ConfigurationData();
					LOG.info("BHGECartFacadeImpl Inside else getCartConfigurationData configuration id "+ productConfigModel.getConfigurationId());
					configurationData.setConfigId(productConfigModel.getConfigurationId());
					configurationData.setGroupIdToDisplay(StringUtils.EMPTY);
					
					final ConfigurationData backendConfiguration = configFacade.getConfiguration(configurationData);
					configDataMap.put(entry.getEntryNumber(), backendConfiguration);
				}
			}
			
		}
		
		return configDataMap;
	}
	
	public void updatevouchersFromCartData(final CartData cartData)
	{
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
					LOG.warn("Voucher cannot be redeemed: " + voucherCode);
					iterator.remove();
				}
			}
		}
		cartData.setAppliedVouchers(appliedVouchers);
	}

	protected void populateShipto(final CartModel cart)
	{
		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
		final BHGESoldToData defaultSoldTo1 = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
		AddressModel defaultShipToData = cart.getDeliveryAddress();
		final String userSalesRegion = bhgeUserProfileFacade.getUserDefaultSalesRegion();

		if (defaultShipToData == null)
		{
			//Condition 1: Check if the default ship to is set for customer and get the default ship to from the customer
			LOG.debug("Check if the default ship to is assigned to customer ");
			if (bhgeCustomerData.getDefaultSoldTo() != null && bhgeCustomerData.getDefaultShipTo() != null
					&& null != defaultSoldTo1 && bhgeCustomerData.getDefaultSoldTo().equals(defaultSoldTo1.getUid()))
			{
				final String defaultSoldToChild = bhgeCustomerData.getDefaultSoldTo() + "_" + userSalesRegion;
				defaultShipToData = bhgeUserProfileFacade.getDefaultShiptoforWS(bhgeCustomerData.getDefaultShipTo(), defaultSoldToChild);
			}

			//Condition 2:If default ship to is not set find the sold to and get the ship to from the address of sold to
			if (defaultShipToData == null)
			{
				LOG.debug(
						"Default Ship to is not set to customer. Trying to fetch the ship to address from the address list assinged to the sold to in session");
				final String childSoldToName = defaultSoldTo1.getUid() + "_" + userSalesRegion;
				defaultShipToData = bhgeUserProfileFacade.getShipToAddressforWS(childSoldToName);
			}
		}
		if (defaultShipToData != null)
		{
			cart.setDeliveryAddress(defaultShipToData);
		}
		modelService.save(cart);
	}
	
	@Override
	public void saveCartType(final String cartId, final String cartType, boolean isQuote)
	{
		CartModel cart = null;
		final UserModel currentUser = userService.getCurrentUser();
		if (!StringUtils.isBlank(cartId) && !cartId.equalsIgnoreCase(UNDEFINED))
		{
			if (!userService.isAnonymousUser(currentUser))
			{
				cart = commerceCartService.getCartForCodeAndUser(cartId, currentUser);

			}
			else
			{
				cart = commerceCartService.getCartForGuidAndSite(cartId, baseSiteService.getCurrentBaseSite());
			}
		}
		else
		{
			cart = getCartService().getSessionCart();
		}
		if(StringUtils.isNotBlank(cartType))
		{
			cart.setCommerceType(BHGERMACommerceType.valueOf(cartType));
			if (BooleanUtils.isTrue(isQuote)) {
				cart.setIsQuote(isQuote);
			} else {
				cart.setIsQuote(false);
			}
			modelService.save(cart);
		}
	}
	@Override
	public boolean validateCart(String cartID, String guestSalesArea, StringBuffer deletedProductCodes) throws CommerceCartModificationException {
		LOG.info("Starting validateCart method with cartID: " + cartID + ", guestSalesArea: " + guestSalesArea);

		boolean isValid = true;
		String cartCommerceType ;

		// Retrieve the session cart
		final CartModel cartModel = bhgeCartService.getSessionCart();
		if (cartModel == null) {
			LOG.warn("Session cart is null. Exiting validateCart method.");
			return false;
		}

		cartCommerceType = Objects.nonNull(cartModel.getCommerceType()) ? cartModel.getCommerceType().toString() : "BUY";
		LOG.info("Cart commerce type: " + cartCommerceType);

		// Skip validation for RETURNS cart type
		if ("RETURNS".equalsIgnoreCase(cartCommerceType)) {
			LOG.info("Cart type is RETURNS. Skipping validation.");
			return true;
		}

		List<CartEntryModel> productsToBeRemoved = new LinkedList<>();
		final UserModel user = userService.getCurrentUser();

		// Validate for non-anonymous users
		if (!userService.isAnonymousUser(user)) {
			LOG.info("Validating cart for non-anonymous user.");
			final GEEdgeCustomerModel geEdgeCustomer = (GEEdgeCustomerModel) user;
			if (geEdgeCustomer.getDefaultSoldTo() != null && StringUtils.isNotBlank(geEdgeCustomer.getDefaultSoldTo().getEcommerceFlag())) {
				String ecommerceFlag = geEdgeCustomer.getDefaultSoldTo().getEcommerceFlag();
				LOG.info("Ecommerce flag for user: " + ecommerceFlag);

				if ("E4".equalsIgnoreCase(ecommerceFlag) || "NE".equalsIgnoreCase(ecommerceFlag)) {
					LOG.info("Adding all cart entries to productsToBeRemoved due to ecommerce flag.");
					productsToBeRemoved.addAll(new LinkedList(cartModel.getEntries()));
				}
			}
		}
		LOG.info("validate Cart For NonSellable Products - START");
		// Validate non-sellable products
		if (productsToBeRemoved.isEmpty()) {
			LOG.info("Validating cart for non-sellable products.");
			productsToBeRemoved = validateCartForNonSellableProducts(cartModel, guestSalesArea, user);
		}
		LOG.info("validate Cart For NonSellable Products - END");
		LOG.info("Number of products to be removed: " + productsToBeRemoved.size());

		// Remove invalid products and update deletedProductCodes
		for (CartEntryModel entry : productsToBeRemoved) {
			LOG.info("Removing product: " + entry.getProduct().getCode());
			deletedProductCodes.append(entry.getProduct().getCode()).append(",");
		}
		if (!productsToBeRemoved.isEmpty())
		{
			if (cartModel.getEntries() != null && cartModel.getEntries().size() == 0)
			{
				bhgeCartService.removeSessionCart();
				removeCart(cartModel);
				isValid = false;
			}
		}

		LOG.info("Completed validateCart method.");
		return isValid;
	}

	protected OrderEntryData getOrderEntryData( final String productCode, final Integer entryNumber)
	{
		final OrderEntryData orderEntry = new OrderEntryData();
		orderEntry.setQuantity(0L);
		orderEntry.setProduct(new ProductData());
		orderEntry.getProduct().setCode(productCode);
		orderEntry.setEntryNumber(entryNumber);
		return orderEntry;
	}

	public void setCartTypeforAnonymousUser(final ProductData productData)
	{
		if(BooleanUtils.isTrue(productData.getIsAnonymousBuy()))
		{
			final CartModel cartModel = bhgeCartService.getSessionCart();
			if(Objects.isNull(cartModel.getCommerceType()) || cartModel.getCommerceType() == BHGERMACommerceType.GUESTBUY)
			{
				cartModel.setCommerceType(BHGERMACommerceType.GUESTBUY);
				modelService.save(cartModel);
			}
			else
			{
				bhgeCartService.removeSessionCart();
				removeCart(cartModel);
			}
		}
		else if(BooleanUtils.isTrue(productData.getIsAnonymousQuote()))
		{
			final CartModel cartModel = bhgeCartService.getSessionCart();
			if(Objects.isNull(cartModel.getCommerceType()) || cartModel.getCommerceType() == BHGERMACommerceType.GUESTRFQ)
			{
				cartModel.setCommerceType(BHGERMACommerceType.GUESTRFQ);
				modelService.save(cartModel);
			}
			else
			{
				bhgeCartService.removeSessionCart();
				removeCart(cartModel);
			}
		}
	}
	
	public boolean updateDefaultPlantForEntry(final String cartCode, final String defaultPlant,
			final int entryNumber)
	{
		boolean isUpdated = false;
		try
		{
			bhgeCartService.updateDefaultPlantForEntry(cartCode,defaultPlant,entryNumber);
			isUpdated = true;
		}
		catch(Exception ex)
		{
			LOG.error("Error in method updateDefaultPlantForEntry BHGECartFacadeImpl"+ex);
		}
		return isUpdated;
		
	}
	

	
	private String getIshipmentOrderComplete(GEEdgeCustomerModel currentuser) {
		try {
			Boolean shipmentPreference = currentuser.getIsShipCompleteOrder();
			return String.valueOf(shipmentPreference);
		}catch(Exception e) {
			return null;
		}
	}
	
//	@Override
//	protected Converter<CartModel, CartData> getCartConverter()
//	{
//		return bhgeCartDataConverter;
//	}
	@Override
	public List<CountryData> getCountries(final CountryType countryType)
	{
		final List<CountryData> countries = getCountryConverter()
				.convertAll(bhgeCartService.getCountries(countryType));
		Collections.sort(countries, CountryComparator.INSTANCE);
		return countries;
	}
	
	@Override
	public boolean hasSessionCart(){
		return bhgeCartService.hasSessionCart();
		
	}
	
	@Override
	public String getSessionCartID(){
		CartModel cart=bhgeCartService.getSessionCart();
		if(null != cart){
			return cart.getCode();
		}
		return null;
	}
	
	@Override
	public boolean updateReferenceNumerForEntry(final int entryNo, final String referenceNumber, final String cartId) {
		try {
			CartModel cartModel = null;
			final UserModel currentUser = userService.getCurrentUser();
			if (!userService.isAnonymousUser(currentUser)) {
				cartModel = commerceCartService.getCartForCodeAndUser(cartId, currentUser);
			}
			else {
				cartModel = commerceCartService.getCartForGuidAndSite(cartId, baseSiteService.getCurrentBaseSite());
			}
			if (cartModel != null) {
				final CartEntryModel cartEntry = bhgeCartService.getEntryForNumber(cartModel, entryNo);
				cartEntry.setReferenceNumber(referenceNumber);
				modelService.save(cartEntry);
				return true;
			}
		}
		catch (final Exception e) {
			LOG.error(e);
		}
		return false;
	}
	
	@Override
	public boolean updateTagInfoForEntry(final int entryNo, final String tagInformation, final String cartId) {
		try {
			CartModel cartModel = null;
			final UserModel currentUser = userService.getCurrentUser();
			if (!userService.isAnonymousUser(currentUser)) {
				cartModel = commerceCartService.getCartForCodeAndUser(cartId, currentUser);
			}
			else {
				cartModel = commerceCartService.getCartForGuidAndSite(cartId, baseSiteService.getCurrentBaseSite());
			}
			if (cartModel != null) {
				final CartEntryModel cartEntry = bhgeCartService.getEntryForNumber(cartModel, entryNo);
				cartEntry.setTagInformation(tagInformation);
				modelService.save(cartEntry);
				return true;
			}
		}
		catch (final Exception e) {
			LOG.error(e);
		}
		return false;
	}

	@Override
	public void updateHeaderReqDate(String cartId, String reqDate) {
		try {
			bhgeCartService.updateHeaderReqDate(cartId, reqDate);
		} catch (Exception ex){
			LOG.info("Error during header req date update" + ex.getMessage());
		}
	}
	@Override
	public void saveAccessoriesProducts(final CartModificationData mainCartModificationData,
										final List<Integer> accessoriesEntriesNumbers,
										final List<String> accessoriesProductsList) {
		LOG.info("Starting saveAccessoriesProducts method with mainCartModificationData: " + mainCartModificationData);

		if (mainCartModificationData == null || CollectionUtils.isEmpty(accessoriesProductsList)) {
			LOG.warn("Invalid input parameters. Exiting method.");
			return;
		}

		String cartId = mainCartModificationData.getCartCode();
		Integer mainEntryNumber = mainCartModificationData.getEntry().getEntryNumber();

		if (StringUtils.isBlank(cartId) || mainEntryNumber == null) {
			LOG.warn("Cart ID or main entry number is invalid. Exiting method.");
			return;
		}

		List<ProductModel> accessoriesProducts = getAccessoriesProducts(accessoriesProductsList);

		CartModel cartModel = commerceCartService.getCartForCodeAndUser(cartId, userService.getCurrentUser());
		if (cartModel == null || CollectionUtils.isEmpty(cartModel.getEntries())) {
			LOG.warn("Cart model or entries are null. Exiting method.");
			return;
		}

		updateCartEntryWithAccessories(cartModel, mainEntryNumber, accessoriesEntriesNumbers, accessoriesProducts);

		LOG.info("Completed saveAccessoriesProducts method.");
	}

	private List<ProductModel> getAccessoriesProducts(final List<String> accessoriesProductsList) {
		LOG.info("Fetching accessory products for product codes: " + accessoriesProductsList);
		return accessoriesProductsList.stream()
				.filter(StringUtils::isNotBlank)
				.map(productService::getProductForCode)
				.collect(toList());
	}

	private void updateCartEntryWithAccessories(final CartModel cartModel,
												final Integer mainEntryNumber,
												final List<Integer> accessoriesEntriesNumbers,
												final List<ProductModel> accessoriesProducts) {
		for (AbstractOrderEntryModel cartEntryModel : cartModel.getEntries()) {
			if (Objects.equals(cartEntryModel.getEntryNumber(), mainEntryNumber)) {
				if (CollectionUtils.isNotEmpty(accessoriesEntriesNumbers)) {
					String combinedEntryNumbers = accessoriesEntriesNumbers.stream()
							.map(Object::toString)
							.collect(Collectors.joining(","));
					cartEntryModel.setAccessoryEntriesNumber(combinedEntryNumbers);
					LOG.info("Updated accessory entries numbers for main entry: " + mainEntryNumber);
				}

				if (CollectionUtils.isNotEmpty(accessoriesProducts)) {
					cartEntryModel.setAccessoryProducts(accessoriesProducts);
					LOG.info("Updated accessory products for main entry: " + mainEntryNumber);
				}

				modelService.save(cartEntryModel);
				LOG.info("Saved updated cart entry: " + mainEntryNumber);
			}

			else if (accessoriesEntriesNumbers.contains(cartEntryModel.getEntryNumber())) {
				cartEntryModel.setParentEntryNumber(mainEntryNumber);
				modelService.save(cartEntryModel);
				LOG.info("Updated parent entry number for accessory entry: " + cartEntryModel.getEntryNumber());
			}
		}
	}
	@Override
	public Boolean removeAccessoryCartEntry(final List<Integer> entryNumbers) {
		LOG.info("Starting removeAccessoryCartEntry method with entryNumbers: " + entryNumbers);

		if (CollectionUtils.isEmpty(entryNumbers)) {
			LOG.warn("Entry numbers list is empty. Exiting method.");
			return false;
		}

		final CartModel cartModel = bhgeCartService.getSessionCart();
		if (cartModel == null || CollectionUtils.isEmpty(cartModel.getEntries())) {
			LOG.warn("Cart model or entries are null. Exiting method.");
			return false;
		}

		List<AbstractOrderEntryModel> entriesToRemove = cartModel.getEntries().stream()
				.filter(entry -> entryNumbers.contains(entry.getEntryNumber()))
				.toList();

		if (CollectionUtils.isEmpty(entriesToRemove)) {
			LOG.info("No matching entries found for removal. Exiting method.");
			return false;
		}

		for (AbstractOrderEntryModel entry : entriesToRemove) {
			LOG.info("Removing entry with entryNumber: " + entry.getEntryNumber());
			if (CollectionUtils.isNotEmpty(entry.getAccessoryProducts())) {
				List<AbstractOrderEntryModel> accessoryEntries = cartModel.getEntries().stream()
						.filter(accEntry -> Objects.equals(accEntry.getParentEntryNumber(), entry.getEntryNumber()))
						.toList();

				accessoryEntries.forEach(accEntry -> {
					LOG.info("Removing accessory entry with entryNumber: " + accEntry.getEntryNumber());
					modelService.remove(accEntry);
				});
			}
			modelService.remove(entry);
		}

		modelService.refresh(cartModel);
		LOG.info("Completed removeAccessoryCartEntry method.");
		return true;
	}

	/**@Override
	public void isPartPlaceHolderPresent(CartData cartData) {
		final String cartId = cartData.getCode();
		final UserModel currentUser = userService.getCurrentUser();
		final CartModel cartModel = commerceCartService.getCartForCodeAndUser(cartId, currentUser);
		final String dummyProductCode = configurationService.getConfiguration().getString(DUMMY_PRODUCT_CODE);
		boolean isDummyProductPresent = false;
		for(OrderEntryData orderEntryData : cartData.getEntries()) {
			if(null != orderEntryData.getProduct() && orderEntryData.getProduct().getCode().equalsIgnoreCase(dummyProductCode)){
				isDummyProductPresent = true;
				cartData.setDummyProductPresent(true);
				break;
			}
		}
		
		if (!isDummyProductPresent) {
			cartModel.setConfigurationBlock(false);
			modelService.save(cartModel);
		}
		
	}**/


	@Override
	public void savePartPlaceHolderDetails(final CartModificationData cartModificationData, final ProductConfigOrderEntryWsDTO entry) {

		String cartId = cartModificationData.getCartCode();
		final UserModel currentUser = userService.getCurrentUser();
		Integer entryNumber = cartModificationData.getEntry().getEntryNumber();

		if (StringUtils.isNotEmpty(cartId)) {

			final CartModel cartModel = commerceCartService.getCartForCodeAndUser(cartId, currentUser);
			for (AbstractOrderEntryModel cartEntryModel : cartModel.getEntries()) {
				if (cartEntryModel.getEntryNumber() == entryNumber) {
					cartEntryModel.setDummyPartNumber(entry.getDummyPartNumber());
					cartEntryModel.setDummyProductDescription(entry.getDummyProductDescription());
					modelService.save(cartEntryModel);
					break;
				}
			}
		}

	}


	@Override
	public CartModificationData addLongConfigToCart(final String code, final long quantity, final String longNumberConfig) throws CommerceCartModificationException
	{
		final AddToCartParams params = new AddToCartParams();
		params.setProductCode(code);
		params.setQuantity(quantity);
		params.setLongConfiguration(longNumberConfig);;

		return addToCart(params);
	}

    @Override
    public void deleteAllCarts(UserModel user, String b2bUnit, String salesOrg, String commerceType) {
       LOG.info("BHGECartFacadeImpl Delete all Carts"+b2bUnit );
        bhgeCartService.deleteAllCarts(user,b2bUnit,salesOrg,commerceType);
    }

    @Override
    public void generateExcelForBudgetoryQuote(CartData cartData, String customFileName, HttpServletResponse response, CartModel cartModel) throws IOException {
        String formattedAddress = getFormattedAddress(cartData);
        bhgeBudgetoryQuoteService.generateExcelForBudgetoryQuote(cartData,customFileName,formattedAddress,response,cartModel);
    }

    @Override
    public void downloadBudgetoryQuotePDF(CartData cartData, String customFileName, HttpServletRequest request, HttpServletResponse response, CartModel cartModel) throws FOPException, IOException, URISyntaxException, TransformerException, JAXBException {
       String formattedAddress = getFormattedAddress(cartData);
       bhgeBudgetoryQuoteService.generatePdfForBudgetoryQuote(cartData,customFileName,formattedAddress,request,response,cartModel);
    }

    private String getFormattedAddress(CartData cartData) {
        String formatedAddress = null;
        if(null != cartData.getSaleaAreaID()){
        AddressData soldToaddress = bhgeUserProfileFacade.getSoldToAddress(cartData.getSaleaAreaID());
        if (null != soldToaddress){
            formatedAddress = String.join(",", soldToaddress.getCompanyName(), soldToaddress.getFormattedAddress());
        }
        LOG.info("formatted address BUDGETORYQUOTE"+formatedAddress);
    }
        return formatedAddress;
    }

    private void createRow(Sheet sheet, int i, String header, String value) {
        Row row = sheet.createRow(i);
        row.createCell(0).setCellValue(header);
        row.createCell(1).setCellValue(value);
    }

    private void populateEndCustomerAddress(Long ecaCode, CartEntryModel entryModel) {
		LOG.info("BHGECartFacadeImpl inside of populateEndCustomerAddress method ECA code "+ecaCode);
		entryModel.setEcaCode(ecaCode);

		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		B2BUnitModel salesArea = currentUser.getDefaultB2BUnit();
		AddressModel shipTo = b2bCommerceUnitService.getAddressForCode(salesArea, ecaCode.toString());
		if(null !=shipTo) {
			entryModel.setEndCustomerAddress(shipTo);
			LOG.info("BHGECartFacadeImpl inside of populateEndCustomerAddress method shipTo address " + shipTo.getPk());
		}
		else {
			try {
				shipTo = modelService.get(PK.parse(ecaCode.toString()));
			} catch (Exception e) {
				LOG.error("BHGECartFacadeImpl inside of populateEndCustomerAddress method Exception while getting shipTo address by pk " + ecaCode, e);
			}
			if (null != shipTo) {
				LOG.info("BHGECartFacadeImpl inside of populateEndCustomerAddress method shipTo address after get by pk " + shipTo.getPk());
				entryModel.setEndCustomerAddress(shipTo);
			}
		}
		modelService.save(entryModel);

	}


}
