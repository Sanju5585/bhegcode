package com.bhge.facades.rma.impl;

import com.bhge.facades.rma.data.*;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2bacceleratorfacades.order.impl.DefaultB2BCheckoutFacade;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.order.SaveCartFacade;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.OrderData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.order.impl.DefaultCartFacade;
import de.hybris.platform.commercefacades.order.impl.DefaultCheckoutFacade;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.ImageData;
import de.hybris.platform.commercefacades.product.data.ImageDataType;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.search.data.AutocompleteResultData;
import de.hybris.platform.commercefacades.search.data.SearchQueryData;
import de.hybris.platform.commercefacades.search.data.SearchStateData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commerceservices.enums.SalesApplication;
import de.hybris.platform.commerceservices.order.CommerceCartService;
import de.hybris.platform.commerceservices.order.CommerceCheckoutService;
import de.hybris.platform.commerceservices.search.facetdata.ProductSearchPageData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commerceservices.service.data.CommerceCheckoutParameter;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.CartEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.order.CartService;
import de.hybris.platform.order.InvalidCartException;
import de.hybris.platform.order.exceptions.CalculationException;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.regioncache.CacheController;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.region.CacheRegion;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.search.restriction.SearchRestrictionService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.exceptions.ModelSavingException;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.internal.model.impl.ItemModelCloneCreator;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.type.TypeService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.MediaUtil;

import java.io.IOException;
import java.io.Writer;
import java.math.BigDecimal;
import java.math.MathContext;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.stream.Collectors;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

import jakarta.annotation.Resource;

import org.apache.commons.codec.binary.Hex;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.MapUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Row;
import org.springframework.beans.BeanUtils;

import org.springframework.util.ObjectUtils;
//import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.category.dao.DefaultBHGECategoryDao;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.data.BHGERmaStatusData;
import com.bhge.core.data.RmaItemStatusData;
import com.bhge.core.data.uploadFileResponseData;
import com.bhge.core.enums.BHGERMACommerceType;
import com.bhge.core.enums.PdfStatusType;
import com.bhge.core.enums.ShippingCarrierMethod;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGERmaEquipSerialNumberModel;
import com.bhge.core.model.ReturnPOModel;
import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.order.service.BHGECalculationService;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.product.strategy.BHGEProductAccessStrategy;
import com.bhge.core.rma.service.BHGERMAStatusService;
import com.bhge.core.rma.service.BHGERmaFormSearchService;
import com.bhge.core.rma.service.BHGERmaFormService;
import com.bhge.core.rma.service.BHGERmaOrderService;
import com.bhge.core.rma.service.BHGERmaServiceOffering;
import com.bhge.core.sap.SAPJcoContainer;
import com.bhge.core.sap.util.BHGESAPJCoUtils;
import com.bhge.core.savecart.service.BHGECommerceSaveCartService;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.cart.converters.BHGECartDataConverter;
import com.bhge.facades.data.CheckoutRmaData;
import com.bhge.facades.data.CheckoutRmaLineData;
import com.bhge.facades.data.ReturnPoData;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.order.impl.DefaultBHGECheckoutFacade;
import com.bhge.facades.order.populators.BHGECartPopulator;
import com.bhge.facades.order.populators.BHGEOrderPopulator;
import com.bhge.facades.order.populators.BhgeOrderCheckoutPopulator;
import com.bhge.facades.product.data.BHGEProductAccessData;
import com.bhge.facades.product.data.BrandNameData;
import com.bhge.facades.product.data.RMAData;
import com.bhge.facades.rma.BHGERMAStatusFacade;
import com.bhge.facades.rma.BHGERmaFormFacade;
//import com.bhge.register.webservices.services.SubmitRegisterRequestService;
import com.bhge.facades.rma.populators.BHGERmaCartPopulator;
import com.bhge.facades.search.BHGEProductSearchFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.facades.user.impl.DefaultBHGEUserProfileFacade;
import com.bhge.product.service.BHGEProductService;
import com.bhge.rma.facades.cart.converters.BHGERMACartDataConverter;
import com.bhge.store.services.BHGEBaseStoreService;
import com.ds.dsocc.rma.dto.BHGERmaEntryWsDTO;
import com.google.common.collect.ArrayListMultimap;
import com.google.common.collect.Multimap;
import com.hybris.ge.edge.core.model.type.BHGEAdditionalInfoModel;
import com.hybris.ge.edge.core.model.type.BHGEChemicalDetailsModel;
import com.hybris.ge.edge.core.model.type.BHGEHazardousInfoModel;
import com.hybris.ge.edge.core.model.type.BHGEServiceOfferingsModel;


/**
 * @author 1185137
 *
 */
public class BHGERmaFormFacadeImpl extends DefaultB2BCheckoutFacade implements BHGERmaFormFacade
{

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.rma.BHGERmaFormFacade#rmaFormSubmit(com.bhge.facades.rma.data.BHGERmaFormData)
	 */
	private final static Logger LOG = Logger.getLogger(BHGERmaFormFacadeImpl.class);
	private static final String UNDEFINED = "undefined";

	@Resource(name="cartConverter")
	private Converter<CartModel, CartData> cartConverter;

	@Resource(name = "serialNumSearchCacheRegion")
	private CacheRegion serialNumSearchCacheRegion;

	@SuppressWarnings("rawtypes")
	@Resource(name = "serialNumberSearchCacheValueLoader")
	private CacheValueLoader serialNumberSearchCacheValueLoader;

	@Resource(name = "cacheController")
	private CacheController cacheController;


	@Resource(name = "bhgeServiceOfferingPopulator")
	private Populator bhgeServiceOfferingPopulator;

	@Resource(name = "bhgeOrderCheckoutPopulator")
	BhgeOrderCheckoutPopulator bhgeOrderCheckoutPopulator;
	
	@Resource(name = "bhgeCartFacade")
	private BHGECartFacade bhgeCartFacade;

	/*
	 * public SubmitRegisterRequestService getSubmitRegisterRequestService() { return submitRegisterRequestService; }
	 *
	 * public void setSubmitRegisterRequestService(SubmitRegisterRequestService submitRegisterRequestService) {
	 * this.submitRegisterRequestService = submitRegisterRequestService; }
	 *
	 * SubmitRegisterRequestService submitRegisterRequestService;
	 */

	@Resource
	private CommonI18NService commonI18NService;

	@Resource(name = "bhgeAdditionalInfoPopulator")
	private Populator bhgeAdditionalInfoPopulator;

	@Resource(name = "bhgeHazardousInfoPopulator")
	private Populator bhgeHazardousInfoPopulator;

	@Resource(name = "bhgeChemicalDetailPopulator")
	private Populator bhgeChemicalDetailPopulator;

	@Resource(name = "bhgeChemicalDetailReversePopulator")
	private Populator bhgeChemicalDetailReversePopulator;

	@Resource(name = "bhgeAdditionalInfoReversePopulator")
	private Populator bhgeAdditionalInfoReversePopulator;

	@Resource(name = "bhgeServiceOfferingReversePopulator")
	private Populator bhgeServiceOfferingReversePopulator;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "bhgeRmaFormService")
	public BHGERmaFormService bhgeRmaFormService;

	@Resource(name = "bhgeRMAStatusService")
	private BHGERMAStatusService bhgeRMAStatusService;

	private ModelService modelService;

	@Resource(name = "commerceCartService")
	private CommerceCartService commerceCartService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	@Resource(name = "bhgeOrderPopulator")
	private BHGEOrderPopulator bhgeOrderPopulator;

	@Resource(name = "commerceCheckoutService")
	private CommerceCheckoutService commerceCheckoutService;

	@Resource(name = "b2bCheckoutFacade")
	private DefaultBHGECheckoutFacade bhgeCheckoutFacade;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "defaultBhgeUserProfileFacade")
	DefaultBHGEUserProfileFacade defaultBhgeUserProfileFecade;
	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "b2bCustomerFacade")
	protected CustomerFacade customerFacade;

	@Resource(name = "sessionService")
	public SessionService sessionService;

	@Resource(name = "userService")
	public UserService userService;

	@Resource(name = "defaultCartFacade")
	private DefaultCartFacade defaultCartFacade;

	@Resource(name = "bhgeRMAStatusFacade")
	private BHGERMAStatusFacade bhgeRMAStatusFacade;

	@Resource(name = "bhgeHazardousInfoReversePopulator")
	private Populator bhgeHazardousInfoReversePopulator;

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "bhgeRMACartDataConverter")
	private BHGERMACartDataConverter bhgeRMACartDataConverter;

	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;

	@Resource(name = "bhgeRmaServiceOfferingService")
	private BHGERmaServiceOffering bhgeRmaServiceOfferingService;

	@Resource(name = "bhgeRmaFormSearchService")
	private BHGERmaFormSearchService bhgeRmaFormSearchService;

	@Resource(name = "productVariantFacade")
	private ProductFacade productFacade;

	@Resource(name = "sapJcoContainer")
	private SAPJcoContainer sapJcoContainer;


	@Resource(name = "calculationService")
	private BHGECalculationService bhgeCalculationService;

	@Resource(name = "productService")
	ProductService productService;

	@Resource(name = "productConverter")
	private Converter<ProductModel, ProductData> productConverter;

	@Resource(name = "searchRestrictionService")
	SearchRestrictionService searchRestrictionService;

	@Resource(name = "bhgeSerialNoListPopulator")
	private Populator bhgeSerialNoListPopulator;

	@Resource(name = "bhgeRmaCartPopulator")
	private BHGERmaCartPopulator bhgeRmaCartPopulator;

	@Resource(name = "cartService")
	private CartService cartService;

	@Resource(name = "typeService")
	private TypeService typeService;

	@Resource(name = "guidKeyGenerator")
	private KeyGenerator guidKeyGenerator;

	@Resource(name = "itemModelCloneCreator")
	private ItemModelCloneCreator itemModelCloneCreator;

	@Resource(name = "priceDataFactory")
	private PriceDataFactory priceDataFactory;

	@Resource(name = "saveCartFacade")
	private SaveCartFacade saveCartFacade;

	@Resource(name = "bhgeCommerceSaveCartServiceImpl")
	private BHGECommerceSaveCartService bhgeCommerceSaveCartServiceImpl;

	@Resource(name = "baseSiteService")
	private BaseSiteService baseSiteService;

	@Resource(name = "mediaService")
	private MediaService mediaService;

	private DefaultCheckoutFacade defaultCheckoutFacade;

	@Resource(name = "bhgeProductSearchFacade")
	private BHGEProductSearchFacade<ProductData> productSearchFacade;

	@Resource(name = "bhgeCategoryDao")
	private DefaultBHGECategoryDao bhgeCategoryDao;


	@Resource(name = "bhgeCartPopulator")
	private BHGECartPopulator<CartData> bhgeCartPopulator;

	@Resource(name = "bhgeRmaOrderService")
	private BHGERmaOrderService bhgeRmaOrderService;

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	@Resource(name = "bhgeCartDataConverter")
	private BHGECartDataConverter bhgeCartDataConverter;

	@Resource(name = "bhgeSoldToUtil")
	private BHGESoldToUtil bhgeSoldToUtil;
	
	@Resource(name="bhgeProductService")
	private BHGEProductService bhgeProductService;

	public static final String ZHYB_RMA_CREATE = "ZHYB_RMA_CREATE";

	public static final String ZHYB_MAT_ACCESSORIES = "ZHYB_MAT_ACCESSORIES";

	public static final String HAZARD_ATTACH_SECTION = "COSHH";

	public static final String PO_ATTACH_SECTION = "Customer PO";

	public static final String TBD = "TBD";

	public static final String IMAGEFORMAT = "thumbnail";

	public static final String NOIMAGEVALUE = "/_ui/responsive/theme-lambda/images/missing_product_EN_300x300.jpg";
	
	private List<BHGEProductAccessStrategy> strategiesList = new LinkedList();

	/**
	 * @return the strategiesList
	 */
	public List<BHGEProductAccessStrategy> getStrategiesList() {
		return this.strategiesList;
	}

	public void setStrategiesList(final List<BHGEProductAccessStrategy> strategiesList) {
		this.strategiesList = strategiesList;
	}

	double totalPriceforCart = 0.0;
	boolean priceFlag = false;

	@Override
	protected CartService getCartService()
	{
		return cartService;
	}

	@Override
	
	public void setCartService(final CartService cartService)
	{
		this.cartService = cartService;
	}

	protected TypeService getTypeService()
	{
		return typeService;
	}

	
	public void setTypeService(final TypeService typeService)
	{
		this.typeService = typeService;
	}

	@Override
	protected UserService getUserService()
	{
		return userService;
	}

	protected KeyGenerator getGuidKeyGenerator()
	{
		return guidKeyGenerator;
	}

	/**
	 * @return the productService
	 */
	public ProductService getProductService()
	{
		return productService;
	}

	/**
	 * @param productService
	 *           the productService to set
	 */
	public void setProductService(final ProductService productService)
	{
		this.productService = productService;
	}


	/**
	 * @return the productConverter
	 */
	public Converter<ProductModel, ProductData> getProductConverter()
	{
		return productConverter;
	}

	/**
	 * @param productConverter
	 *           the productConverter to set
	 */
	public void setProductConverter(final Converter<ProductModel, ProductData> productConverter)
	{
		this.productConverter = productConverter;
	}

	/**
	 * @return the searchRestrictionService
	 */
	public SearchRestrictionService getSearchRestrictionService()
	{
		return searchRestrictionService;
	}

	/**
	 * @param searchRestrictionService
	 *           the searchRestrictionService to set
	 */
	public void setSearchRestrictionService(final SearchRestrictionService searchRestrictionService)
	{
		this.searchRestrictionService = searchRestrictionService;
	}

	
	public void setGuidKeyGenerator(final KeyGenerator guidKeyGenerator)
	{
		this.guidKeyGenerator = guidKeyGenerator;
	}
	
	@Override
	public Integer saveRmaForm(BHGERmaEntryWsDTO rmaFormEntry, String cartId)
	{
		final PriceData priceData = new PriceData();
		priceData.setCurrencyIso("IN");
		final BHGERmaFormData rmaFormData = new BHGERmaFormData();
		BHGEAdditionalInfoData additonalInfo = null;

		BeanUtils.copyProperties(rmaFormEntry, rmaFormData);
		
		if (Objects.nonNull(rmaFormEntry.getAdditionalInfo())) 
		{
			additonalInfo = new BHGEAdditionalInfoData();
			BeanUtils.copyProperties(rmaFormEntry.getAdditionalInfo(), additonalInfo);
		}
		 
		if (Objects.nonNull(rmaFormEntry.getSimilarPart()))
		{
			rmaFormData.setSimilarPart(rmaFormEntry.getSimilarPart());
		}
		if (Objects.nonNull(additonalInfo))
		{
			rmaFormData.setAdditionalInfo(additonalInfo);
		}
		if (Objects.nonNull(rmaFormEntry.getSerialNumber()))
		{
			rmaFormData.setSerialNumber(rmaFormEntry.getSerialNumber());
		}
		if (Objects.nonNull(rmaFormEntry.getQuantity()))
		{
			rmaFormData.setQuantity(rmaFormEntry.getQuantity());
		}
		
		if (Objects.nonNull(rmaFormEntry.getServiceOfferings())) {
			rmaFormData.setServiceOfferings(rmaFormEntry.getServiceOfferings());
		}
		if (Objects.nonNull(rmaFormEntry.getAvailableSitesList())) {
			LOG.info("setting availablesiteslist from 577 facade");
			rmaFormData.setAvailableSitesList(rmaFormEntry.getAvailableSitesList());
		}
		 
		if (Objects.nonNull(rmaFormEntry.getOtherDetails()))
		{
			rmaFormData.setOtherDetails(rmaFormEntry.getOtherDetails());
		}
		if (Objects.nonNull(rmaFormEntry.getProblemDescription()))
		{
			rmaFormData.setProblemDescription(rmaFormEntry.getProblemDescription());
		}
		if (Objects.nonNull(rmaFormEntry.getProductDetails()))
		{
			rmaFormData.setProductDetails(rmaFormEntry.getProductDetails());
		}
		if (Objects.nonNull(rmaFormEntry.getReturnToSiteId()))
		{
			rmaFormData.setReturnToSiteId(Integer.parseInt(rmaFormEntry.getReturnToSiteId()));
		}
		if (Objects.nonNull(rmaFormEntry.getOfferingDataList()))
		{
			rmaFormData.setOfferingDataList(rmaFormEntry.getOfferingDataList());
		}
		accessoryLocationChange(rmaFormData, cartId);
		Integer cartEntryCode= rmaFormSubmit(rmaFormData);
		if(null != cartEntryCode)
		{
			return cartEntryCode;
		}
		else
		{
			return null;
		}
	
	}
	
	private void accessoryLocationChange(BHGERmaFormData rmaFormData, String cartId){
		if(rmaFormData.getEntryNumber() != null && (rmaFormData.getReturnToSiteName() != null ||
				CollectionUtils.isNotEmpty(rmaFormData.getServiceOfferings())))
		{
			//TODO : Need to fetch cartID from API (URI param) itself and retrieve cart from service layer
			//CartData cart = bhgeCartFacade.getSessionCart();
			CartModel cart = null;
			CartData cartData = new CartData();
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
			if(cart != null)
			{
				cartData = bhgeCartDataConverter.convert(cart);
			}
			for(OrderEntryData entry : cartData.getEntries()){
				if(entry.getParentEntryNumber() != null){
					if(entry.getParentEntryNumber() == rmaFormData.getEntryNumber()){
						BHGERmaFormData bhgeRmaFormData = new BHGERmaFormData();

						if (Objects.nonNull(entry.getEntryNumber()))
						{
							bhgeRmaFormData.setEntryNumber(entry.getEntryNumber());
						}

						if(CollectionUtils.isNotEmpty(rmaFormData.getServiceOfferings()) 
								&& Objects.isNull(rmaFormData.getReturnToSiteId()))
						{
							for(BHGEServiceOfferingsData serviceOffering : rmaFormData.getServiceOfferings())
							{
								if(CollectionUtils.isNotEmpty(serviceOffering.getAvailableSitesList()))
								{
									bhgeRmaFormData.setReturnToSiteName(null != serviceOffering.getAvailableSitesList().get(0).getSiteId() ?
										serviceOffering.getAvailableSitesList().get(0).getSiteId().toString() : "");
									break;
								}
							}
						}
						if (Objects.nonNull(rmaFormData.getReturnToSiteId()))
						{
							bhgeRmaFormData.setReturnToSiteName(rmaFormData.getReturnToSiteId().toString());
						}
						if (Objects.nonNull(rmaFormData.getReturnToSiteName()))
						{
							bhgeRmaFormData.setReturnToSiteName(rmaFormData.getReturnToSiteName());
						}

						rmaFormSubmit(bhgeRmaFormData);
					}
				}
			}
		}
	}

	@Override
	public Integer rmaFormSubmit(final BHGERmaFormData rmaFormData)
	{
		final List<AbstractOrderEntryModel> orderEntries = new ArrayList<>();
		final List<BHGEServiceOfferingsModel> serviceOfferingModel = new ArrayList<>();
		CartModel cartModel = null;
		AbstractOrderEntryModel cartEntry = null;
		GEEdgeProductModel geProductModel = null;
		boolean standardOfferTyp = true;

		for (int ictCount = 0; ictCount <= 1; ictCount++)
		{
			switchCart();
			LOG.info("Inside rmaFormSubmit facade - Tab Data Entry - " + rmaFormData.getEntryNumber());

			cartModel = bhgeCartService.getSessionCart();
			cartEntry = getCartEntry(cartModel, rmaFormData.getEntryNumber());
			if (!StringUtils.isEmpty(rmaFormData.getPartNumber())
					&& rmaFormData.getPartNumber().equalsIgnoreCase(Config.getParameter("OTHER")))
			{
				cartEntry.setPartNumber(Config.getParameter("OTHER"));
			}
			else if (rmaFormData.getPartNumber() != null)
			{
				cartEntry.setPartNumber(rmaFormData.getPartNumber().trim());
			}
			if (Objects.nonNull(rmaFormData.getQuantity()))
			{
				cartEntry.setQuantity(rmaFormData.getQuantity());
			}
			else if (Objects.nonNull(cartEntry.getQuantity()))
			{

			}
			else
			{
				cartEntry.setQuantity(1L);
			}

			if (rmaFormData.getSimilarPart() != null)
			{
				cartEntry.setSimilarPart(rmaFormData.getSimilarPart());
			}
			final BHGEHazardousInfoData hazardinfoData = rmaFormData.getHazardousInfo();
			if (Objects.nonNull(hazardinfoData))
			{
				setHazardInfo(cartEntry, hazardinfoData);
			}
			final BHGEAdditionalInfoData additionalInfoData = rmaFormData.getAdditionalInfo();

			if (Objects.nonNull(additionalInfoData))
			{
				setAdditionalInfo(cartEntry, additionalInfoData);
			}
			final List<BHGEServiceOfferingsData> serviceOffering = rmaFormData.getServiceOfferings();

			if (Objects.nonNull(serviceOffering))
			{
				standardOfferTyp = setServiceOffering(cartEntry, serviceOffering);
			}
			if (StringUtils.isNotEmpty(rmaFormData.getProblemDescription()))
			{
				LOG.info("Inside rmaFormSubmit facade - Problem Statement - " + rmaFormData.getProblemDescription());
				if (cartEntry.getBhgeServiceOfferings() != null && cartEntry.getBhgeServiceOfferings().size() > 0)
				{
					for (final BHGEServiceOfferingsModel serviceOfferinVal : cartEntry.getBhgeServiceOfferings())
					{
						serviceOfferinVal.setProblemDescLong(rmaFormData.getProblemDescription());
					}
				}
			}
			LOG.info("Inside rmaFormSubmit facade - Plant Assignment.");


			if (Objects.nonNull(rmaFormData.getAvailableSitesList()))
			{
				final List<String> availablebleSites = new ArrayList<>();
				for (final AvailableSitesData siteData : rmaFormData.getAvailableSitesList())
				{
					availablebleSites.add(Objects.nonNull(siteData.getSiteId()) ? siteData.getSiteId().toString() : "");
				}
				cartEntry.setAvailableSites(availablebleSites);
				cartEntry.getAvailableSites().forEach(System.out::println);
			}
			//			if (Objects.nonNull(rmaFormData.getPricingInfo()) && cartEntry.getTotalPrice() == 0)
			//			{
			//				cartEntry.setTotalPrice(new Double(rmaFormData.getPricingInfo()));
			//			}

			if (Objects.nonNull(rmaFormData.getSerialNumber()))
			{
				setSerialNoList(cartEntry, rmaFormData.getSerialNumber());
			}
			if (Objects.nonNull(rmaFormData.getReturnToSiteId()))
			{
				//cartEntry.setReturnToSiteCode(rmaFormData.getReturnToSiteId());
			}
			if (!standardOfferTyp)
			{
				cartEntry.setReturnToSiteName(null);
				cartEntry.setReturnToSiteCode(null);
			}
			else if ((Objects.nonNull(rmaFormData.getReturnToSiteName()) && !"".equals(rmaFormData.getReturnToSiteName().trim()))
					|| (null != rmaFormData.getReturnToSiteId() || CollectionUtils.isNotEmpty(rmaFormData.getServiceOfferings())))
			{
				if(Objects.isNull(rmaFormData.getServiceOfferings()))
				{
					rmaFormData.setServiceOfferings(new ArrayList<BHGEServiceOfferingsData>());
				}
				  Integer cartEntryNumber = 0;				
				  for(BHGEServiceOfferingsData srOffering : rmaFormData.getServiceOfferings())
				   { 
					  if(CollectionUtils.isNotEmpty(srOffering.getAvailableSitesList())
							  && Objects.isNull(rmaFormData.getReturnToSiteId())) 
					  {			  
					   if(null != srOffering.getAvailableSitesList().get(0).getSiteId()) 
					   {
				         cartEntry.setReturnToSiteName(srOffering.getAvailableSitesList().get(0).getSiteId().toString()); 
				         final String returnSiteVal = srOffering.getAvailableSitesList().get(0).getSiteId().toString(); 
				         if(returnSiteVal != null) 
				          { 
				        	 try 
				        	 { 
				        		 cartEntryNumber = cartEntry.getEntryNumber();
				                 cartEntry.setReturnToSiteCode(Integer.parseInt(returnSiteVal)); 
				             } 
				        	 catch(final Exception exc) 
				        	 {
				                LOG.info("Inside rmaFormSubmit facade - Return Site Assignment Failure."); 
				             }
				  
 				           if (cartEntryNumber > 0) 
 				            { 
 				        	  for (final AbstractOrderEntryModel entry : cartModel.getEntries()) 
 				        	  { 
 				        		  if (entry.getParentEntryNumber() != null && entry.getParentEntryNumber() > 0) 
 				        		  { if (entry.getParentEntryNumber() == cartEntryNumber) 
 				        		  {
				                     entry.setReturnToSiteCode(Integer.parseInt(returnSiteVal));
				                     modelService.save(entry); 
				                     //modelService.save(cartModel); 
				                     } 
 				        		  } 
 				        		  } 
 				        	  } 
 				          } 
				         } 
					   break;
				  } 
			    }
				 				
					if(null != rmaFormData.getReturnToSiteId() && Objects.isNull(rmaFormData.getReturnToSiteName()))
					{
							cartEntry.setReturnToSiteName(rmaFormData.getReturnToSiteId().toString());
							final String returnSiteVal = rmaFormData.getReturnToSiteId().toString();
							if (returnSiteVal != null)
							{
								try
								{
									cartEntryNumber = cartEntry.getEntryNumber();
									cartEntry.setReturnToSiteCode(Integer.parseInt(returnSiteVal));
								}
								catch (final Exception exc)
								{
									LOG.info("Inside rmaFormSubmit facade - Return Site Assignment Failure.");
								}

								if (cartEntryNumber > 0)
								{
									for (final AbstractOrderEntryModel entry : cartModel.getEntries())
									{
										if (entry.getParentEntryNumber() != null && entry.getParentEntryNumber() > 0)
										{
											if (entry.getParentEntryNumber() == cartEntryNumber)
											{
												entry.setReturnToSiteCode(Integer.parseInt(returnSiteVal));
												modelService.save(entry);
												//modelService.save(cartModel);
											}
										}
									}
								}
							}
					}
				
				if(Objects.nonNull(rmaFormData.getReturnToSiteName()))
				{
					cartEntry.setReturnToSiteName(rmaFormData.getReturnToSiteName());
					if (rmaFormData.getReturnToSiteName().indexOf("-") > -1)
					{
						final String returnSiteVal = rmaFormData.getReturnToSiteName().split("-")[1];
						if (returnSiteVal != null)
						{
							try
							{
								cartEntryNumber = cartEntry.getEntryNumber();
								cartEntry.setReturnToSiteCode(Integer.parseInt(returnSiteVal));
							}
							catch (final Exception exc)
							{
								LOG.info("Inside rmaFormSubmit facade - Return Site Assignment Failure.");
							}

							if (cartEntryNumber > 0)
							{
								for (final AbstractOrderEntryModel entry : cartModel.getEntries())
								{
									if (entry.getParentEntryNumber() != null && entry.getParentEntryNumber() > 0)
									{
										if (entry.getParentEntryNumber() == cartEntryNumber)
										{
											entry.setReturnToSiteCode(Integer.parseInt(returnSiteVal));
											modelService.save(entry);
											//modelService.save(cartModel);
										}
									}
								}
							}
						}
					}
				}
			}
			LOG.info("Inside rmaFormSubmit facade - Product & Pricing Data.");

			geProductModel = fetchReturnPart(rmaFormData.getPartNumber());
			if (!Objects.isNull(geProductModel))
			{
				LOG.info("Inside rmaFormSubmit facade - Product Found. Run 1");
				ictCount = 2;
			}
			else
			{
				LOG.info("Inside rmaFormSubmit facade - Product Found. Run 2");
			}
		}
		if (Objects.isNull(geProductModel))
		{
			LOG.info("Inside rmaFormSubmit facade - Product Not Found.");
			return -1;
		}

		cartEntry.setProduct(geProductModel);
		cartEntry.setUnit(geProductModel.getUnit());
		//cartEntry.setProductDetails(geProductModel.getProductSpecs());
		cartEntry.setIsComplete(bhgeRmaFormService.completenessCheck(cartEntry));
		LOG.info("Inside rmaFormSubmit facade - Value 00 : " + rmaFormData.getProductDetails());
		if (StringUtils.isNotBlank(rmaFormData.getProductDetails()))
		{
			LOG.info("Inside rmaFormSubmit facade - Value 01 : " + rmaFormData.getProductDetails());
			cartEntry.setProductDetails(rmaFormData.getProductDetails());
		}
		LOG.info("Inside rmaFormSubmit facade - Value 02 : " + cartEntry.getProductDetails());
		if (geProductModel.getProductSpecs() != null && StringUtils.isBlank(cartEntry.getProductDetails()))
		{
			LOG.info("Inside rmaFormSubmit facade - Value 03 : " + cartEntry.getProductDetails());
			cartEntry.setProductDetails(geProductModel.getProductSpecs());
		}
		LOG.info("Inside rmaFormSubmit facade - Value 04 : " + cartEntry.getProductDetails());
		cartEntry.setOtherDetails(rmaFormData.getOtherDetails());

		if (rmaFormData.getProblemDescription() != null)
		{
			cartEntry.setProblemDescLong(rmaFormData.getProblemDescription());
		}
		cartEntry.getRmaFormPercentCompletion();

		if (!standardOfferTyp)
		{
			cartEntry.setPlanningSite(null);
		}
		else if (Objects.nonNull(rmaFormData.getPlanningSite()) && !"".equals(rmaFormData.getPlanningSite().trim()))
		{
			LOG.info("Inside rmaFormSubmit facade - Planning Site Path A - " + rmaFormData.getPlanningSite());
			cartEntry.setPlanningSite(rmaFormData.getPlanningSite());
		}
		else
		{
			if(null != sessionService.getAttribute("latestOfferingData"))
			{
				final BHGERmaOfferingData offeringData = (BHGERmaOfferingData) sessionService.getAttribute("latestOfferingData");
				LOG.info("Inside rmaFormSubmit facade - Planning Site Path B.01 - " + offeringData);

				if (offeringData != null && offeringData.getOfferingsDataTable() != null
						&& offeringData.getOfferingsDataTable().get(rmaFormData.getPartNumber()) != null
						&& rmaFormData.getServiceOfferings() != null && rmaFormData.getServiceOfferings().size() > 0)
				{
					final List<OfferingData> offeringList = offeringData.getOfferingsDataTable().get(rmaFormData.getPartNumber());
					LOG.info("Inside rmaFormSubmit facade - Planning Site Path B.02 - " + offeringList.size() + " | "
							+ rmaFormData.getServiceOfferings());
					if (offeringList.size() > 0)
					{
						for (final OfferingData masterOffering : offeringList)
						{
							for (final BHGEServiceOfferingsData serviceOffering : rmaFormData.getServiceOfferings())
							{
								LOG.info("Inside rmaFormSubmit facade - Planning Site Path B.03 - " + masterOffering.getServiceOffering()
										+ " | " + serviceOffering.getOfferingCode());
								if (serviceOffering.getOfferingCode() != null
										&& serviceOffering.getOfferingCode().equals(masterOffering.getServiceOffering())
										&& masterOffering.getPlanningPlant() != null)
								{
									LOG.info("Inside rmaFormSubmit facade - Planning Site Path B.09 - " + masterOffering.getPlanningPlant());
									cartEntry.setPlanningSite(masterOffering.getPlanningPlant());
								}
							}
						}
					}
				}
			}
			else
			{
				final List<OfferingData> offeringDataList = rmaFormData.getOfferingDataList();
				LOG.info("Inside rmaFormSubmit facade - Planning Site Path B.01 - " + offeringDataList);
				if (offeringDataList != null && rmaFormData.getServiceOfferings() != null && rmaFormData.getServiceOfferings().size() > 0)
				{
					LOG.info("Inside rmaFormSubmit facade - Planning Site Path B.02 - " + offeringDataList.size() + " | "
							+ rmaFormData.getServiceOfferings());
					if (offeringDataList.size() > 0)
					{
						for (final OfferingData masterOffering : offeringDataList)
						{
							for (final BHGEServiceOfferingsData serviceOffering : rmaFormData.getServiceOfferings())
							{
								LOG.info("Inside rmaFormSubmit facade - Planning Site Path B.03 - " + masterOffering.getServiceOffering()
										+ " | " + serviceOffering.getOfferingCode());
								if (serviceOffering.getOfferingCode() != null
										&& serviceOffering.getOfferingCode().equals(masterOffering.getServiceOffering())
										&& masterOffering.getPlanningPlant() != null)
								{
									LOG.info("Inside rmaFormSubmit facade - Planning Site Path B.09 - " + masterOffering.getPlanningPlant());
									cartEntry.setPlanningSite(masterOffering.getPlanningPlant());
								}
							}
						}
					}
				}
			}		
		}

		List<String> accessories = new ArrayList<>();
		if (Objects.nonNull(rmaFormData.getAccessoryPartNumbers()))
		{
			if (rmaFormData.getAccessoryPartNumbers().size() > 0)
			{
				LOG.info("This is a parent having accessories in rmaform page");
				accessories = rmaFormData.getAccessoryPartNumbers();
				cartEntry.setAccessoryPartNumbers(accessories);
			}
			else if (cartEntry.getParentEntryNumber() != null && cartEntry.getParentEntryNumber() > 0)
			{
				LOG.info("This is an accessory in rmaform page");
				//cartEntry.setAccessoryPartNumbers(accessories);
			}
			else
			{
				LOG.info("This is a parent not having accessories in rmaform page");
				cartEntry.setAccessoryPartNumbers(accessories);
			}
		}



		LOG.info("Inside rmaFormSubmit CartEntry - " + cartModel.getEntries().size() + " | " + cartEntry.getEntryNumber() + " | "
				+ getMaxCartCount(cartModel));

		orderEntries.addAll(cartModel.getEntries());
		if (getMaxCartCount(cartModel) < cartEntry.getEntryNumber())
		{
			cartEntry.setOrder(cartModel);
			orderEntries.add(cartEntry);
			cartModel.setEntries(orderEntries);
			//modelService.save(cartEntry);
			modelService.save(cartModel);
		}
		else
		{
			try
			{
				totalPriceforCart = 0.0;
				priceFlag = false;
				cartModel.getEntries().forEach(entry -> {
					totalPriceforCart = totalPriceforCart + entry.getTotalReturnPrice();
					if (entry.getTotalReturnPrice() == 0.0)
					{
						priceFlag = true;
					}
				});
				if (priceFlag)
				{
					cartModel.setTotalReturnPrice(new Double(0.0));
				}
				else
				{
					cartModel.setTotalReturnPrice(new Double(totalPriceforCart));
				}

				modelService.save(cartEntry);
				modelService.save(cartModel);
			}
			catch (final Exception e)
			{
				LOG.error("Exception e::: " + e.getMessage());
				e.printStackTrace();
			}
			return cartEntry.getEntryNumber();
		}

		LOG.info("Inside rmaFormSubmit facade - Cart Attribute Data.");

		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		final CurrencyModel currency = baseStore.getDefaultCurrency();
		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		final B2BUnitModel defaultSoldToUnit = currentUser.getDefaultB2BUnit();
		if (null != geProductModel.getProductType())
		{
			cartModel.setCartType(bhgeCartService.getCartTypeForProductType(geProductModel.getProductType()));
		}

		cartModel.setStore(baseStore);
		if (null != defaultSoldToUnit.getCurrency()) {
			LOG.info("In rmaFormSubmit facade - Currency Set." + defaultSoldToUnit.getCurrency().getIsocode() + " | User : " + currentUser.getUid() + "Currency" + defaultSoldToUnit.getCurrency().getIsocode());

			cartModel.setCurrency(defaultSoldToUnit.getCurrency());
			LOG.info("After rmaFormSubmit facade - Currency Set." + cartModel.getCurrency().getIsocode());
		}
		cartModel.setUser(userService.getCurrentUser());
		cartModel.setDate(new Date());
		cartModel.setEntries(orderEntries);
		cartModel.setCommerceType(BHGERMACommerceType.RETURNS);
		totalPriceforCart = 0.0;
		priceFlag = false;
		cartModel.getEntries().forEach(entry -> {

			totalPriceforCart = totalPriceforCart + entry.getTotalReturnPrice();
			if (entry.getTotalReturnPrice() == 0.0)
			{
				priceFlag = true;
			}
		});

		if (priceFlag)
		{
			cartModel.setTotalReturnPrice(new Double(0.0));
		}
		else
		{
			cartModel.setTotalReturnPrice(new Double(totalPriceforCart));
		}

		bhgeRmaFormService.saveRma(cartModel);

		LOG.info("CLOSURE rmaFormSubmit facade - " + cartEntry.getEntryNumber());

		return cartEntry.getEntryNumber();
	}

	private PageableData createPageableData(final int pageNumber, final int pageSize, final String sortCode)
	{
		final PageableData pageableData = new PageableData();
		pageableData.setCurrentPage(pageNumber);
		pageableData.setSort(sortCode);
		pageableData.setPageSize(pageSize);
		return pageableData;
	}


	public Boolean removeEntrys(final List<Integer> entryNumber)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();

		if ((Objects.nonNull(cartModel.getEntries())))
		{
			for (final Integer e : entryNumber)
			{
				for (final AbstractOrderEntryModel entry : cartModel.getEntries())
				{
					if (Objects.nonNull(entry.getEntryNumber()) && entry.getEntryNumber() == e)
					{
						if (null != entry)
						{
							if (entry.getAccessoryProducts() != null && entry.getAccessoryProducts().size() != 0)
							{
								for (final ProductModel pModel : entry.getAccessoryProducts())
								{
									for (final AbstractOrderEntryModel accEntry : cartModel.getEntries())
									{
										if (accEntry.getProduct().getCode() == pModel.getCode() && accEntry.getParentEntryNumber() != null
												&& accEntry.getParentEntryNumber() == entry.getEntryNumber())
										{
											modelService.remove(accEntry);
										}
									}

								}
								modelService.remove(entry);
								continue;
							}
							else if (entry.getParentEntryNumber() != null)
							{
								for (final AbstractOrderEntryModel parentEntry : cartModel.getEntries())
								{
									if (parentEntry.getEntryNumber() == entry.getParentEntryNumber())
									{
										if (parentEntry.getAccessoryProducts() != null)
										{
											for (final ProductModel pModel : parentEntry.getAccessoryProducts())
											{
												for (final AbstractOrderEntryModel accEntry : cartModel.getEntries())
												{
													if (accEntry.getProduct().getCode() == pModel.getCode()
															&& accEntry.getParentEntryNumber() != null
															&& accEntry.getParentEntryNumber() == parentEntry.getEntryNumber())
													{
														modelService.remove(accEntry);
													}
												}

											}
											modelService.remove(parentEntry);
											continue;
										}
									}
									continue;
								}
							}
							else
							{
								modelService.remove(entry);
							}


						}

					}
				}


			}

		}
		return true;

	}

	@Override
	public Boolean removeEntry(final List<Integer> entryNumber)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();

		if ((Objects.nonNull(cartModel.getEntries())))
		{
			for (final Integer e : entryNumber)
			{
				for (final AbstractOrderEntryModel entry : cartModel.getEntries())
				{
					if (Objects.nonNull(entry.getEntryNumber()) && entry.getEntryNumber() == e)
					{
						if (entry != null)
						{
							if (entry.getAccessoryProducts() != null && entry.getAccessoryProducts().size() > 0)
							{
								for (final AbstractOrderEntryModel accEntry : cartModel.getEntries())
								{
									if (accEntry.getParentEntryNumber() != null
											&& accEntry.getParentEntryNumber() == entry.getEntryNumber())
									{
										modelService.remove(accEntry);
										modelService.refresh(cartModel);
									}
								}
								modelService.remove(entry);
								modelService.refresh(cartModel);
								break;
							}
							else
							{
								modelService.remove(entry);
								modelService.refresh(cartModel);
								break;
							}
						}

					}
				}
			}
		}
		return true;
	}


	@Override
	public Integer cloneEntry(final Integer entryNumber)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		GEEdgeProductModel cloneProduct = new GEEdgeProductModel();

		final List<AbstractOrderEntryModel> orderEntries = new ArrayList<>();
		Integer clonedEntry = 0;

		final AbstractOrderEntryModel cartEntry = getCartEntry(cartModel, entryNumber);
		final Integer cartEntryNumber = getMaxCartCount(cartModel) + 1;

		/*
		 * final CartModel cloneCartModel =
		 * getCartService().clone(getTypeService().getComposedTypeForClass(CartModel.class),
		 * getTypeService().getComposedTypeForClass(CartEntryModel.class), cartModel,
		 * getGuidKeyGenerator().generate().toString());
		 */


		AbstractOrderEntryModel cloneCartEntry = modelService.create(AbstractOrderEntryModel.class);
		for (final AbstractOrderEntryModel entry : cartModel.getEntries())
		{
			if (entry.getEntryNumber() == entryNumber)
			{
				cloneCartEntry = getModelService().clone(entry);
			}
		}
		//final AbstractOrderEntryModel cloneCartEntry = getModelService().clone(entry);
		//final AbstractOrderEntryModel cloneCartEntry = modelService.create(CartEntryModel.class);

		/*
		 * for (final AbstractOrderEntryModel cloneCartEntry : cloneCartModel.getEntries()) { if
		 * (cloneCartEntry.getEntryNumber() == entryNumber) {
		 */
		cloneCartEntry.setEntryNumber(cartEntryNumber);
		LOG.info("CLOSURE cloneEntry Entry Value - " + cloneCartEntry.getEntryNumber());

		final BHGEAdditionalInfoData additionalInfoData = new BHGEAdditionalInfoData();
		bhgeAdditionalInfoReversePopulator.populate(cartEntry.getBhgeAdditionalInfo(), additionalInfoData);
		if (Objects.nonNull(additionalInfoData))
		{
			setAdditionalInfo(cloneCartEntry, additionalInfoData);
			if (cloneCartEntry.getBhgeAdditionalInfo() != null)
			{
				cloneCartEntry.getBhgeAdditionalInfo().setManufactureYear(null);
				cloneCartEntry.getBhgeAdditionalInfo().setWarrantyInfoLong(null);
			}
		}

		final List<String> serialNoList = new ArrayList<String>();

		final List<BHGERmaEquipSerialNumberModel> serialListModel = new ArrayList<>();
		cloneCartEntry.setBhgeRmaEquipSerialNumber(serialListModel);

		//				cartEntry.getBhgeRmaEquipSerialNumber().forEach(model -> {
		//					serialNoList.add(model.getSerialNumber());
		//				});
		//				if (Objects.nonNull(serialNoList))
		//				{
		//					setSerialNoList(cloneCartEntry, serialNoList);
		//				}
		if (Objects.nonNull(cartEntry.getBhgeServiceOfferings()))
		{
			final List<BHGEServiceOfferingsData> offeringList = new ArrayList<BHGEServiceOfferingsData>();
			cartEntry.getBhgeServiceOfferings().forEach(OfferingModel -> {
				final BHGEServiceOfferingsData offeringData = new BHGEServiceOfferingsData();
				bhgeServiceOfferingReversePopulator.populate(OfferingModel, offeringData);
				offeringList.add(offeringData);
			});
			if (Objects.nonNull(offeringList))
			{
				setServiceOffering(cloneCartEntry, offeringList);
			}
		}

		cloneCartEntry.setTotalReturnPrice(cartEntry.getTotalReturnPrice());
		cloneCartEntry.setUnitPrice(cartEntry.getUnitPrice());
		cloneCartEntry.setSilverClause(cartEntry.getSilverClausePrice());
		cloneCartEntry.setSilverClausePricePercentage(cartEntry.getSilverClausePricePercentage());
		cloneCartEntry.setSilverClausePrice(cartEntry.getSilverClausePrice());
		cloneCartEntry.setSimilarPart(cartEntry.getSimilarPart());
		cloneCartEntry.setReturnToSiteCode(cartEntry.getReturnToSiteCode());
		cloneCartEntry.setPlanningSite(cartEntry.getPlanningSite());
		cloneCartEntry.setQuantity(cartEntry.getQuantity());
		cloneCartEntry.setProduct(cartEntry.getProduct());
		cloneCartEntry.setUnit(cartEntry.getProduct().getUnit());
		cloneCartEntry.setOrder(cartModel);
		orderEntries.addAll(cartModel.getEntries());
		orderEntries.add(cloneCartEntry);
		cartModel.setEntries(orderEntries);
		clonedEntry = cloneCartEntry.getEntryNumber();
		modelService.save(cloneCartEntry);
		cloneProduct = (GEEdgeProductModel) cloneCartEntry.getProduct();


		/*
		 * } }
		 */

		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		final CurrencyModel currency = baseStore.getDefaultCurrency();
		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		final B2BUnitModel defaultSoldToUnit = currentUser.getDefaultB2BUnit();
		cartModel.setCartType(bhgeCartService.getCartTypeForProductType(cloneProduct.getProductType()));


		cartModel.setStore(baseStore);
		if (null != defaultSoldToUnit.getCurrency())
		{
		cartModel.setCurrency(defaultSoldToUnit.getCurrency());
		}
		LOG.info("After cloneEntry facade - Currency Set."+cartModel.getCurrency().getIsocode());
		cartModel.setUser(userService.getCurrentUser());
		cartModel.setDate(new Date());
		cartModel.setCommerceType(BHGERMACommerceType.RETURNS);
		totalPriceforCart = 0.0;
		priceFlag = false;
		cartModel.getEntries().forEach(entry -> {
			totalPriceforCart = totalPriceforCart + entry.getTotalReturnPrice();
			if (entry.getTotalReturnPrice() == 0.0)
			{
				priceFlag = true;
			}
		});
		if (priceFlag)
		{
			cartModel.setTotalReturnPrice(new Double(0.0));
		}
		else
		{
			cartModel.setTotalReturnPrice(new Double(totalPriceforCart));
		}
		bhgeRmaFormService.saveRma(cartModel);
		return clonedEntry;

	}


	/*
	 * public void createAccessoryEntry(){ CartModel cartModel = bhgeCartService.getSessionCart();
	 * for(AbstractOrderEntryModel entry :cartModel.getEntries()){ if(entry.getAccessoryProducts() != null &&
	 * entry.getAccessoryProducts().size() > 0){
	 * cloneAccessoryEntrys(entry.getEntryNumber(),entry.getAccessoryServiceOffering()); } } }
	 */


	public List<Integer> cloneAccessoryEntrys(final AbstractOrderEntryModel entry, final List<String> serviceOffering,
			final CartModel cartModel, final String accessoryProductCode, final List<BHGERmaOfferingData> offeringsData)
	{
		//final CartModel cartModel = bhgeCartService.getSessionCart();
		final GEEdgeProductModel cloneProduct = new GEEdgeProductModel();

		final List<AbstractOrderEntryModel> orderEntries = new ArrayList<>();
		final List<Integer> clonedEntry = new ArrayList<Integer>();

		GEEdgeProductModel geProductModel = null;

		/*
		 * for (final AbstractOrderEntryModel entry : cartModel.getEntries()) { if (entry.getParentEntryNumber() != null
		 * && entry.getParentEntryNumber() == cartEntryCode) { modelService.remove(entry); } }
		 * modelService.save(cartModel);
		 */

		if (entry != null)
		{
			if (entry.getAccessoryProducts() != null && entry.getAccessoryProducts().size() > 0)
			{
				for (final ProductModel accProduct : entry.getAccessoryProducts())
				{
					if (accessoryProductCode.equals(accProduct.getCode()))
					{
						LOG.info("3.0 Accessory entry to be created for parent entry with accessory product code: "
								+ accProduct.getCode());
						final AbstractOrderEntryModel cloneCartEntry = getModelService().clone(entry);
						LOG.info("3.1. Parent entry cloned");

						cloneCartEntry.setEntryNumber(getMaxCartCount(cartModel) + 1);
						LOG.info("3.2. New accessory entry created with entry number: " + cloneCartEntry.getEntryNumber());
						cloneCartEntry.setOrder(cartModel);

						geProductModel = (GEEdgeProductModel) accProduct;
						cloneCartEntry.setProduct(geProductModel);
						cloneCartEntry.setUnit(geProductModel.getUnit());
						if (geProductModel.getProductSpecs() != null && StringUtils.isBlank(cloneCartEntry.getProductDetails()))
						{
							cloneCartEntry.setProductDetails(geProductModel.getProductSpecs());
						}

						if (geProductModel.getCode() != null)
						{
							cloneCartEntry.setPartNumber(geProductModel.getCode().trim());
							LOG.info("3.3 New accessory Entry has part number: " + cloneCartEntry.getPartNumber());
						}

						final List<ProductModel> empty = new ArrayList<>();
						cloneCartEntry.setAccessoryProducts(empty);
						cloneCartEntry.setAccessoryPartNumbers(new ArrayList<>());
						cloneCartEntry.setParentEntryNumber(entry.getEntryNumber());
						LOG.info("3.4. Parent entry number: " + cloneCartEntry.getParentEntryNumber());
						/*
						 * if(cloneCartEntry.getAccessoryPartNumbers() != null){
						 * LOG.info("AccessoryPartNumbers for entry is empty?: "+cloneCartEntry.getAccessoryPartNumbers().get(
						 * 0). isEmpty()); }
						 */
						final List<BHGEServiceOfferingsData> offeringList = new ArrayList<BHGEServiceOfferingsData>();
						final RMAData data = new RMAData();
						data.setMaterialNumber(accessoryProductCode);
						final List<RMAData> list = new ArrayList<RMAData>();
						list.add(data);
						final List<BHGERmaOfferingData> accessoryOfferingList = offeringsData;

						final List<PricingData> servicePriceList = new ArrayList<>();
						final List<OfferingData> serviceOfferingList = new ArrayList<>();

						for (final BHGERmaOfferingData offeringData : accessoryOfferingList)
						{
							if (offeringData.getPricingDataTable() != null
									&& offeringData.getPricingDataTable().get(BhgeCoreConstants.PRICING) != null)
							{
								servicePriceList.addAll(offeringData.getPricingDataTable().get(BhgeCoreConstants.PRICING));
							}
						}

						for (final BHGERmaOfferingData offeringData : accessoryOfferingList)
						{
							if (offeringData.getOfferingsDataTable() != null
									&& offeringData.getOfferingsDataTable().get(BhgeCoreConstants.OFFERING) != null)
							{
								serviceOfferingList.addAll(offeringData.getOfferingsDataTable().get(BhgeCoreConstants.OFFERING));
							}
						}

						final Iterator<BHGEServiceOfferingsModel> itr = entry.getBhgeServiceOfferings().iterator();
						while (itr.hasNext())
						{
							final BHGEServiceOfferingsModel serviceOfferingsModel = itr.next();
							if (serviceOfferingsModel.getOfferingCode() != null)
							{
								LOG.info(" Service code for parent entry: " + serviceOfferingsModel.getOfferingCode());
								serviceOfferingList.forEach(service -> {
									if (service.getPartNumber().equalsIgnoreCase(accessoryProductCode)
											&& service.getServiceOffering().equalsIgnoreCase(serviceOfferingsModel.getOfferingCode()))
									{
										final BHGEServiceOfferingsData data1 = new BHGEServiceOfferingsData();
										LOG.info("Service offering for parent entry and accessory entry mathes for Accessory - "
												+ accessoryProductCode + " Offering - " + service.getServiceOffering());
										data1.setOfferingCode(service.getServiceOffering());
										servicePriceList.forEach(servicePrice -> {
											if (servicePrice.getPartNumber().equalsIgnoreCase(accessoryProductCode) && servicePrice
													.getServiceOffering().equalsIgnoreCase(serviceOfferingsModel.getOfferingCode()))
											{
												LOG.info(servicePrice.getUnitPrice());
												LOG.info(servicePrice.getUnitDiscount());
												data1.setOfferingPrice(Double.parseDouble(servicePrice.getUnitPrice()));
												data1.setOfferingDiscount(Double.parseDouble(servicePrice.getUnitDiscount()));
											}
										});
										data1.setOfferingType(serviceOfferingsModel.getOfferingType().getCode());
										data1.setOfferingText(serviceOfferingsModel.getOfferingText());
										offeringList.add(data1);
									}
								});
							}
						}
						if (Objects.nonNull(offeringList))
						{
							setServiceOffering(cloneCartEntry, offeringList);
						}
						/*
						 * if (Objects.nonNull(entry.getBhgeServiceOfferings())) { final List<BHGEServiceOfferingsData>
						 * offeringList = new ArrayList<BHGEServiceOfferingsData>();
						 * entry.getBhgeServiceOfferings().forEach(OfferingModel -> { final BHGEServiceOfferingsData
						 * offeringData = new BHGEServiceOfferingsData();
						 * bhgeServiceOfferingReversePopulator.populate(OfferingModel, offeringData);
						 * LOG.info("3.5. Offering data being added to accessory entry with codes:"); for (final String
						 * offering : serviceOffering) {
						 *
						 * if (offeringData.getOfferingCode().equals(offering)) { LOG.info("Offering code: " + offering);
						 * offeringList.add(offeringData); } } }); if (Objects.nonNull(offeringList)) {
						 * setServiceOffering(cloneCartEntry, offeringList); } }
						 */

						cloneCartEntry.setTotalReturnPrice(entry.getTotalReturnPrice());
						cloneCartEntry.setUnitPrice(entry.getUnitPrice());
						cloneCartEntry.setSilverClause(entry.getSilverClausePrice());
						cloneCartEntry.setSilverClausePricePercentage(entry.getSilverClausePricePercentage());
						cloneCartEntry.setSilverClausePrice(entry.getSilverClausePrice());
						cloneCartEntry.setSimilarPart(entry.getSimilarPart());
						cloneCartEntry.setReturnToSiteCode(entry.getReturnToSiteCode());
						cloneCartEntry.setPlanningSite(entry.getPlanningSite());
						cloneCartEntry.setQuantity(entry.getQuantity());
						LOG.info("Quantity: " + cloneCartEntry.getQuantity());

						//modelService.save(cloneCartEntry);

						orderEntries.addAll(cartModel.getEntries());
						orderEntries.add(cloneCartEntry);
						cartModel.setEntries(orderEntries);
						clonedEntry.add(cloneCartEntry.getEntryNumber());

						final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
						final CurrencyModel currency = baseStore.getDefaultCurrency();
						final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
						final B2BUnitModel defaultSoldToUnit = currentUser.getDefaultB2BUnit();

						if (null != geProductModel.getProductType())
						{
							cartModel.setCartType(bhgeCartService.getCartTypeForProductType(geProductModel.getProductType()));
						}

						cartModel.setStore(baseStore);
						if (null != defaultSoldToUnit.getCurrency())
						{
						cartModel.setCurrency(defaultSoldToUnit.getCurrency());
						}
						LOG.info("After cloneAccessoryEntrys facade - Currency Set."+cartModel.getCurrency().getIsocode());
						cartModel.setUser(userService.getCurrentUser());
						cartModel.setDate(new Date());
						cartModel.setCommerceType(BHGERMACommerceType.RETURNS);
						totalPriceforCart = 0.0;
						priceFlag = false;
						cartModel.getEntries().forEach(entrys -> {
							totalPriceforCart = totalPriceforCart + entrys.getTotalReturnPrice();
							if (entry.getTotalReturnPrice() == 0.0)
							{
								priceFlag = true;
							}
						});
						if (priceFlag)
						{
							cartModel.setTotalReturnPrice(new Double(0.0));
						}
						else
						{
							cartModel.setTotalReturnPrice(new Double(totalPriceforCart));
						}
						bhgeRmaFormService.saveRma(cartModel);
					}
				}
			}
		}
		return clonedEntry;
	}

	@Override
	public List<Integer> cloneAccessoryEntry(final Integer cartEntryCode)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		final GEEdgeProductModel cloneProduct = new GEEdgeProductModel();

		final List<AbstractOrderEntryModel> orderEntries = new ArrayList<>();
		final List<Integer> clonedEntry = new ArrayList<Integer>();

		GEEdgeProductModel geProductModel = null;



		for (final AbstractOrderEntryModel entry : cartModel.getEntries())
		{
			if (entry.getEntryNumber() == cartEntryCode && entry.getAccessoryProducts() != null)
			{
				for (final ProductModel accProduct : entry.getAccessoryProducts())
				{

					final AbstractOrderEntryModel cloneCartEntry = getModelService().clone(entry);

					cloneCartEntry.setEntryNumber(getMaxCartCount(cartModel) + 1);
					cloneCartEntry.setOrder(cartModel);

					geProductModel = (GEEdgeProductModel) accProduct;
					cloneCartEntry.setProduct(geProductModel);
					cloneCartEntry.setUnit(geProductModel.getUnit());
					if (geProductModel.getProductSpecs() != null && StringUtils.isBlank(cloneCartEntry.getProductDetails()))
					{
						cloneCartEntry.setProductDetails(geProductModel.getProductSpecs());
					}

					if (geProductModel.getCode() != null)
					{
						cloneCartEntry.setPartNumber(geProductModel.getCode().trim());
					}

					final List<ProductModel> empty = new ArrayList<>();
					cloneCartEntry.setAccessoryProducts(empty);
					cloneCartEntry.setParentEntryNumber(entry.getEntryNumber());

					final List<String> serialNoList = new ArrayList<String>();

					if (Objects.nonNull(entry.getBhgeServiceOfferings()))
					{
						final List<BHGEServiceOfferingsData> offeringList = new ArrayList<BHGEServiceOfferingsData>();
						entry.getBhgeServiceOfferings().forEach(OfferingModel -> {
							final BHGEServiceOfferingsData offeringData = new BHGEServiceOfferingsData();
							bhgeServiceOfferingReversePopulator.populate(OfferingModel, offeringData);
							offeringList.add(offeringData);
						});
						if (Objects.nonNull(offeringList))
						{
							setServiceOffering(cloneCartEntry, offeringList);
						}
					}

					cloneCartEntry.setTotalReturnPrice(entry.getTotalReturnPrice());
					cloneCartEntry.setUnitPrice(entry.getUnitPrice());
					cloneCartEntry.setSilverClause(entry.getSilverClausePrice());
					cloneCartEntry.setSilverClausePricePercentage(entry.getSilverClausePricePercentage());
					cloneCartEntry.setSilverClausePrice(entry.getSilverClausePrice());
					cloneCartEntry.setSimilarPart(entry.getSimilarPart());
					cloneCartEntry.setReturnToSiteCode(entry.getReturnToSiteCode());
					cloneCartEntry.setPlanningSite(entry.getPlanningSite());
					cloneCartEntry.setQuantity(entry.getQuantity());


					orderEntries.addAll(cartModel.getEntries());
					orderEntries.add(cloneCartEntry);
					cartModel.setEntries(orderEntries);
					clonedEntry.add(cloneCartEntry.getEntryNumber());

					//cloneProduct = (GEEdgeProductModel) cloneCartEntry.getProduct();





					final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
					final CurrencyModel currency = baseStore.getDefaultCurrency();
					final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
					final B2BUnitModel defaultSoldToUnit = currentUser.getDefaultB2BUnit();

					if (null != geProductModel.getProductType())
					{
						cartModel.setCartType(bhgeCartService.getCartTypeForProductType(geProductModel.getProductType()));
					}

					cartModel.setStore(baseStore);
					if (null != defaultSoldToUnit.getCurrency())
					{
					cartModel.setCurrency(defaultSoldToUnit.getCurrency());
					}
					LOG.info("After cloneAccessoryEntry facade - Currency Set."+cartModel.getCurrency().getIsocode());
					cartModel.setUser(userService.getCurrentUser());
					cartModel.setDate(new Date());
					cartModel.setCommerceType(BHGERMACommerceType.RETURNS);
					totalPriceforCart = 0.0;
					priceFlag = false;
					cartModel.getEntries().forEach(entrys -> {
						totalPriceforCart = totalPriceforCart + entrys.getTotalReturnPrice();
						if (entry.getTotalReturnPrice() == 0.0)
						{
							priceFlag = true;
						}
					});
					if (priceFlag)
					{
						cartModel.setTotalReturnPrice(new Double(0.0));
					}
					else
					{
						cartModel.setTotalReturnPrice(new Double(totalPriceforCart));
					}
					bhgeRmaFormService.saveRma(cartModel);

				}
			}
		}
		return clonedEntry;
	}


	@Override
	public void cloneAccessories(final Integer cartEntryCode, final Integer newCartEntryCode)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();

		Integer clonedEntry = 0;

		for (final AbstractOrderEntryModel entry : cartModel.getEntries())
		{
			if (entry.getParentEntryNumber() != null && entry.getParentEntryNumber() == cartEntryCode)
			{
				GEEdgeProductModel cloneProduct = new GEEdgeProductModel();

				final List<AbstractOrderEntryModel> orderEntries = new ArrayList<>();


				final AbstractOrderEntryModel cartEntry = getCartEntry(cartModel, entry.getEntryNumber());
				final Integer cartEntryNumber = getMaxCartCount(cartModel) + 1;



				final AbstractOrderEntryModel cloneCartEntry = getModelService().clone(entry);
				//cloneCartEntry = getModelService().clone(entry);

				cloneCartEntry.setEntryNumber(cartEntryNumber);
				LOG.info("CLOSURE cloneEntry Entry Value - " + cloneCartEntry.getEntryNumber());

				final BHGEAdditionalInfoData additionalInfoData = new BHGEAdditionalInfoData();
				bhgeAdditionalInfoReversePopulator.populate(cartEntry.getBhgeAdditionalInfo(), additionalInfoData);
				if (Objects.nonNull(additionalInfoData))
				{
					setAdditionalInfo(cloneCartEntry, additionalInfoData);
					if (cloneCartEntry.getBhgeAdditionalInfo() != null)
					{
						cloneCartEntry.getBhgeAdditionalInfo().setManufactureYear(null);
						cloneCartEntry.getBhgeAdditionalInfo().setWarrantyInfoLong(null);
					}
				}

				final List<String> serialNoList = new ArrayList<String>();

				final List<BHGERmaEquipSerialNumberModel> serialListModel = new ArrayList<>();
				cloneCartEntry.setBhgeRmaEquipSerialNumber(serialListModel);

				//				cartEntry.getBhgeRmaEquipSerialNumber().forEach(model -> {
				//					serialNoList.add(model.getSerialNumber());
				//				});
				//				if (Objects.nonNull(serialNoList))
				//				{
				//					setSerialNoList(cloneCartEntry, serialNoList);
				//				}
				if (Objects.nonNull(cartEntry.getBhgeServiceOfferings()))
				{
					final List<BHGEServiceOfferingsData> offeringList = new ArrayList<BHGEServiceOfferingsData>();
					cartEntry.getBhgeServiceOfferings().forEach(OfferingModel -> {
						final BHGEServiceOfferingsData offeringData = new BHGEServiceOfferingsData();
						bhgeServiceOfferingReversePopulator.populate(OfferingModel, offeringData);
						offeringList.add(offeringData);
					});
					if (Objects.nonNull(offeringList))
					{
						setServiceOffering(cloneCartEntry, offeringList);
					}
				}
				cloneCartEntry.setParentEntryNumber(newCartEntryCode);

				cloneCartEntry.setTotalReturnPrice(cartEntry.getTotalReturnPrice());
				cloneCartEntry.setUnitPrice(cartEntry.getUnitPrice());
				cloneCartEntry.setSilverClause(cartEntry.getSilverClausePrice());
				cloneCartEntry.setSilverClausePricePercentage(cartEntry.getSilverClausePricePercentage());
				cloneCartEntry.setSilverClausePrice(cartEntry.getSilverClausePrice());
				cloneCartEntry.setSimilarPart(cartEntry.getSimilarPart());
				cloneCartEntry.setReturnToSiteCode(cartEntry.getReturnToSiteCode());
				cloneCartEntry.setPlanningSite(cartEntry.getPlanningSite());
				cloneCartEntry.setQuantity(cartEntry.getQuantity());
				cloneCartEntry.setProduct(cartEntry.getProduct());
				cloneCartEntry.setUnit(cartEntry.getProduct().getUnit());
				cloneCartEntry.setOrder(cartModel);
				orderEntries.addAll(cartModel.getEntries());
				orderEntries.add(cloneCartEntry);
				cartModel.setEntries(orderEntries);
				clonedEntry = cloneCartEntry.getEntryNumber();
				modelService.save(cloneCartEntry);
				cloneProduct = (GEEdgeProductModel) cloneCartEntry.getProduct();


				/*
				 * } }
				 */

				final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
				final CurrencyModel currency = baseStore.getDefaultCurrency();
				final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
				final B2BUnitModel defaultSoldToUnit = currentUser.getDefaultB2BUnit();
				cartModel.setCartType(bhgeCartService.getCartTypeForProductType(cloneProduct.getProductType()));


				cartModel.setStore(baseStore);
				if (null != defaultSoldToUnit.getCurrency())
				{
				cartModel.setCurrency(defaultSoldToUnit.getCurrency());
				}
				LOG.info("After cloneAccessories facade - Currency Set."+cartModel.getCurrency().getIsocode());
				cartModel.setUser(userService.getCurrentUser());
				cartModel.setDate(new Date());
				cartModel.setCommerceType(BHGERMACommerceType.RETURNS);
				totalPriceforCart = 0.0;
				priceFlag = false;
				cartModel.getEntries().forEach(entrys -> {
					totalPriceforCart = totalPriceforCart + entry.getTotalReturnPrice();
					if (entrys.getTotalReturnPrice() == 0.0)
					{
						priceFlag = true;
					}
				});
				if (priceFlag)
				{
					cartModel.setTotalReturnPrice(new Double(0.0));
				}
				else
				{
					cartModel.setTotalReturnPrice(new Double(totalPriceforCart));
				}
				bhgeRmaFormService.saveRma(cartModel);
			}
		}
	}



	private void setHazardInfo(final AbstractOrderEntryModel cartEntry, final BHGEHazardousInfoData hazardinfoData)
	{
		final BHGEHazardousInfoModel hazardInfoModel = modelService.create(BHGEHazardousInfoModel.class);
		List<BHGEChemicalsDetailData> bhgeChemicalsDetailData = null;
		final List<BHGEChemicalDetailsModel> chemicalDetails = new ArrayList<>();
		bhgeHazardousInfoPopulator.populate(hazardinfoData, hazardInfoModel);
		bhgeChemicalsDetailData = hazardinfoData.getChemicalDetails();
		bhgeChemicalsDetailData.forEach(data -> {
			final BHGEChemicalDetailsModel model = modelService.create(BHGEChemicalDetailsModel.class);
			bhgeChemicalDetailPopulator.populate(data, model);
			chemicalDetails.add(model);
		});
		hazardInfoModel.setBhgeChemicalDetails(chemicalDetails);
		cartEntry.setBhgeHazardousInfo(hazardInfoModel);
	}

	private void setAdditionalInfo(final AbstractOrderEntryModel cartEntry, final BHGEAdditionalInfoData additionalInfoData)
	{
		final BHGEAdditionalInfoModel bhgeAdditionalInfoModel = modelService.create(BHGEAdditionalInfoModel.class);
		bhgeAdditionalInfoPopulator.populate(additionalInfoData, bhgeAdditionalInfoModel);
		if (cartEntry.getBhgeAdditionalInfo() != null)
		{
			bhgeAdditionalInfoModel.setFormAttachments(cartEntry.getBhgeAdditionalInfo().getFormAttachments());
		}
		cartEntry.setBhgeAdditionalInfo(bhgeAdditionalInfoModel);
	}

	private boolean setServiceOfferingForOrder(final AbstractOrderEntryModel cartEntry,
			final List<BHGEServiceOfferingsData> serviceOffering)
	{
		boolean standardOfferTyp = true;
		final List<BHGEServiceOfferingsModel> serviceOfferingModel = new ArrayList<>();
		for (final BHGEServiceOfferingsData offering : serviceOffering)
		{
			final BHGEServiceOfferingsModel offeringModel = modelService.create(BHGEServiceOfferingsModel.class);
			bhgeServiceOfferingPopulator.populate(offering, offeringModel);
			if ("Z01".equals(offeringModel.getOfferingCode()) || "Z02".equals(offeringModel.getOfferingCode())
					|| "Z03".equals(offeringModel.getOfferingCode()))
			{
				standardOfferTyp = false;
			}
			LOG.info("setServiceOfferingForOrder:: OfferingCode " +offeringModel.getOfferingCode());
			serviceOfferingModel.add(offeringModel);
		}

		cartEntry.setBhgeServiceOfferings(serviceOfferingModel);

		return standardOfferTyp;
	}

	private boolean setServiceOffering(final AbstractOrderEntryModel cartEntry,
			final List<BHGEServiceOfferingsData> serviceOffering)
	{
		boolean standardOfferTyp = true;
		final BHGERmaOfferingData offeringData = (BHGERmaOfferingData) sessionService.getAttribute("latestOfferingData");
		final List<BHGEServiceOfferingsModel> serviceOfferingModel = new ArrayList<>();
		for (final BHGEServiceOfferingsData offering : serviceOffering)
		{
			final BHGEServiceOfferingsModel offeringModel = modelService.create(BHGEServiceOfferingsModel.class);
			bhgeServiceOfferingPopulator.populate(offering, offeringModel);
			if ("Z01".equals(offeringModel.getOfferingCode()) || "Z02".equals(offeringModel.getOfferingCode())
					|| "Z03".equals(offeringModel.getOfferingCode()))
			{
				standardOfferTyp = false;
			}
			serviceOfferingModel.add(offeringModel);
		}
		if (offeringData != null)
		{
			offeringData.getPricingDataTable();
			final List<Double> totalOffpriceList = new ArrayList<>();
			final List<Double> totalOffDiscList = new ArrayList<>();
			for (final BHGEServiceOfferingsData model : serviceOffering)
			{
				//			if (null != model.getOfferingPrice() && null != model.getOfferingDiscount())
				//			{
				//				totalOffpriceList.add(model.getOfferingPrice());
				//				totalOffDiscList.add(model.getOfferingDiscount());
				//			}
				if (model.getOfferingCode() != null && StringUtils.isNotEmpty(cartEntry.getPartNumber()))
				{
					final List<PricingData> pricingList = offeringData.getPricingDataTable().get(cartEntry.getPartNumber().trim());
					if (Objects.nonNull(pricingList))
					{
						pricingList.forEach(price -> {
							LOG.info("Offering Code1: " + (StringUtils.isNotEmpty(model.getOfferingCode())?model.getOfferingCode():"no offering code"));
							if (price.getServiceOffering().equalsIgnoreCase(model.getOfferingCode()))
							{
								totalOffpriceList.add(new Double(price.getUnitPrice()));
								totalOffDiscList.add(new Double(price.getUnitDiscount()));
							}
							else{
								totalOffpriceList.add(new Double(0.0));
								totalOffDiscList.add(new Double(0.0));
							}
						});
					}
				}
			}
			LOG.info("totalOffpriceList1: "+ totalOffpriceList);
			LOG.info("totalOffDiscList1: "+ totalOffDiscList);
			priceCalculation(totalOffpriceList, totalOffDiscList, cartEntry);
		}
		cartEntry.setBhgeServiceOfferings(serviceOfferingModel);
		return standardOfferTyp;
	}

	private void priceCalculation(final List<Double> priceList, final List<Double> discountList,
			final AbstractOrderEntryModel cartEntry)
	{
		LOG.info("Total priceListValue : " + priceList);
		Double unitList = 0.0;
		Double discount = 0.0;
		Double netSelling = 0.0;
		Double unitSelling = 0.0;
		final Boolean isHavingPrice = true;
		if (priceList.size() != 0 && discountList.size() != 0)
		{
			for (final double p : priceList)
			{
				unitList += p;
			}

			LOG.info("Total Unit Price: " + unitList);
			for (final double d : discountList)
			{
				discount += d;
			}
			LOG.info("Total Discount Price: " + discount);
			if (unitList > 0)
			{
				if (discount < 0)
				{
					unitSelling = unitList + discount;
				}
				else
				{
					unitSelling = unitList - discount;//will be '+' considering negetive values are comming from sap
				}
			}

			if (unitSelling > 0)
			{
				netSelling = unitSelling * cartEntry.getQuantity();
				LOG.info("Total Net selling: " + netSelling);
			}

			System.out.println("Price==========" + netSelling + unitList + discount);

		}
		cartEntry.setUnitPrice(unitList);
		cartEntry.setSilverClause(discount);
		cartEntry.setTotalReturnPrice(netSelling);
		LOG.info("TotalCartEntryReturnPrice: " + cartEntry.getTotalReturnPrice());
		//cartEntry.setDiscountPrice(discount);
	}

	private void setSerialNoList(final AbstractOrderEntryModel cartEntry, final List<String> serialList)
	{
		final List<BHGERmaEquipSerialNumberModel> serialListModel = new ArrayList<>();
		serialList.forEach(x -> {
			final BHGERmaEquipSerialNumberModel offeringModel = modelService.create(BHGERmaEquipSerialNumberModel.class);
			bhgeSerialNoListPopulator.populate(x, offeringModel);
			serialListModel.add(offeringModel);
		});
		cartEntry.setBhgeRmaEquipSerialNumber(serialListModel);
	}

	private AbstractOrderEntryModel getCartEntry(final CartModel cartModel, final Integer cartEntryNumber)
	{

		LOG.info("Inside getCartEntry facade - " + cartEntryNumber + " | " + cartModel.getEntries().size());

		if (!(Objects.nonNull(cartEntryNumber)))
		{
			final AbstractOrderEntryModel cartEntry = modelService.create(CartEntryModel.class);
			cartEntry.setEntryNumber(getMaxCartCount(cartModel) + 1);
			cartEntry.getBhgeAdditionalInfo();
			LOG.info("Inside getCartEntry Level 1 - " + cartEntry.getEntryNumber());
			return cartEntry;
		}
		else if ((Objects.nonNull(cartModel.getEntries())))
		{
			for (final AbstractOrderEntryModel entry : cartModel.getEntries())
			{
				if (Objects.nonNull(entry.getEntryNumber()) && entry.getEntryNumber() == cartEntryNumber)
				{
					entry.getRmaFormPercentCompletion();
					LOG.info("Inside getCartEntry Level 2 - " + cartEntryNumber);
					return entry;
				}
			}
		}
		LOG.info("Inside getCartEntry Level 3 - " + cartEntryNumber);
		return modelService.create(CartEntryModel.class);
	}

	private ProductModel getProduct(final String partNumber)
	{
		ProductModel productModel = null;
		LOG.info("Inside RMA getProduct Entry - " + productModel);
		if (Objects.nonNull(partNumber))
		{

			try
			{
				getSearchRestrictionService().disableSearchRestrictions();
				if (partNumber.equalsIgnoreCase(Config.getParameter("OTHER")))
				{
					LOG.info("------ Inside RMA getProduct for OTHER Part----- ");
					productModel = getProductService().getProductForCode(Config.getParameter("OTHER"));
					LOG.info("------ Inside RMA getProduct for OTHER Part product found ----- " + productModel);
				}
				else
				{
					LOG.info("------ Inside RMA getProduct for Part no. ----- " + partNumber);
					productModel = getProductService().getProductForCode(partNumber);
					LOG.info("------ Inside RMA getProduct for Part no." + partNumber + "----- " + productModel);
				}
				LOG.info("Inside RMA getProduct Exit - " + productModel);
			}
			finally
			{
				getSearchRestrictionService().enableSearchRestrictions();
			}
		}
		return productModel;
	}




	@Override

	public ModelService getModelService()
	{
		return modelService;
	}

	/**
	 * @param modelService
	 *           the modelService to set
	 */
	@Override
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	@Resource(name = "bhgeRmaFormFacade")
	private BHGERmaFormFacade bhgeRmaFormFacade;

	protected void validateCart(final CartModel cartModel)
	{
		final List<RMAData> data = new ArrayList<>();


		final String serviceNumber = null;
		final List<String> serviceNumbers = new ArrayList<>();
		final Set<String> partNums = new HashSet<String>();

		for (final AbstractOrderEntryModel entry : cartModel.getEntries())
		{
			partNums.add(entry.getPartNumber());

		}
		partNums.forEach(part -> {
			final RMAData rmaData = new RMAData();
			rmaData.setMaterialNumber(part);
			LOG.info("Material Number: " + part);
			rmaData.setSerialNumber(BHGESAPJCoUtils.addLeadingZeros("", 18));
			LOG.info("Serial Number" + rmaData.getSerialNumber());
			rmaData.setSrvOff("");
			rmaData.setPlant("");
			data.add(rmaData);
		});

		//}


		final List<BHGERmaOfferingData> offeringList = bhgeRmaFormFacade.getServiceOffering(data, false, null, null);

		cartModel.getEntries().forEach(entry -> {

			final List<PricingData> servicePriceList = new ArrayList<>();

			for (final BHGERmaOfferingData offeringData : offeringList)
			{
				if (offeringData.getPricingDataTable() != null
						&& offeringData.getPricingDataTable().get(entry.getPartNumber()) != null)
				{
					servicePriceList.addAll(offeringData.getPricingDataTable().get(entry.getPartNumber()));
				}
			}

			LOG.info("Service offering prices returned - :");
			servicePriceList.forEach(servicePrice -> {
				LOG.info(servicePrice.getServiceOffering());
				LOG.info(servicePrice.getUnitPrice());
				LOG.info(servicePrice.getUnitDiscount());
			});

			final List<Double> totalOffpriceList = new ArrayList<>();
			final List<Double> totalOffDiscList = new ArrayList<>();

			LOG.info(" Entry Number: " + entry.getEntryNumber());
			LOG.info(" Service offerings codes for entry: ");

			final Iterator<BHGEServiceOfferingsModel> itr = entry.getBhgeServiceOfferings().iterator();



			while (itr.hasNext())
			{
				final BHGEServiceOfferingsModel serviceOfferingsModel = itr.next();
				if (serviceOfferingsModel.getOfferingCode() != null)
				{
					LOG.info(" Service code for entry: " + serviceOfferingsModel.getOfferingCode());
					LOG.info(" Service price for code: ");
					/*
					 * serviceNumber = serviceOfferingsModel.getOfferingCode(); serviceNumbers.add(serviceNumber);
					 */
					servicePriceList.forEach(service -> {
						LOG.info("Offering Code2: " + (StringUtils.isNotEmpty(serviceOfferingsModel.getOfferingCode())?serviceOfferingsModel.getOfferingCode():"no offering code"));
						if (service.getServiceOffering().equalsIgnoreCase(serviceOfferingsModel.getOfferingCode()))
						{
							LOG.info(" Service unit price" + service.getUnitPrice());
							LOG.info(" Service unit Discount" + service.getUnitDiscount());
							totalOffpriceList.add(new Double(service.getUnitPrice()));
							totalOffDiscList.add(new Double(service.getUnitDiscount()));
						}
						else{
							totalOffpriceList.add(new Double(0.0));
							totalOffDiscList.add(new Double(0.0));
						}
					});
				}
			}
			LOG.info("totalOffpriceList2: "+ totalOffpriceList);
			LOG.info("totalOffDiscList2: "+ totalOffDiscList);
			priceCalculation(totalOffpriceList, totalOffDiscList, entry);
			modelService.save(entry);
		});

	}

	protected void validateCartPrice(final CartModel cartModel)
	{
		final List<RMAData> dataSet = new ArrayList<>();
		final Map<Integer, Integer> map = new HashMap();

		for (final AbstractOrderEntryModel entry : cartModel.getEntries())
		{
			final Set<String> offeringCode = new HashSet<>();
			LOG.info("Serial Number" + entry.getEntryNumber());
			final Integer offeringSize = entry.getBhgeServiceOfferings().size();
			map.put(entry.getEntryNumber(), offeringSize);
			if (entry.getBhgeServiceOfferings() != null && entry.getBhgeServiceOfferings().size() > 0)
			{
				final Iterator<BHGEServiceOfferingsModel> itr = entry.getBhgeServiceOfferings().iterator();
				while (itr.hasNext())
				{
					final BHGEServiceOfferingsModel offer = itr.next();
					if (dataSet.size() > 0)
					{
						boolean different = true;
						for (final RMAData data : dataSet)
						{
							if (data.getMaterialNumber().equalsIgnoreCase(entry.getPartNumber()))
							{
								if (data.getSrvOff().equalsIgnoreCase(offer.getOfferingCode()))
								{
									LOG.info("Same service offering");
									different = false;
									break;
								}
							}
						}
						if (different)
						{
							LOG.info("Different service or part");
							final RMAData rmaData = new RMAData();
							rmaData.setMaterialNumber(entry.getPartNumber());
							LOG.info("Material Number: " + rmaData.getMaterialNumber());
							rmaData.setSerialNumber("");
							rmaData.setSrvOff(offer.getOfferingCode());
							LOG.info("Service offering" + rmaData.getSrvOff());
							rmaData.setPlant("");
							dataSet.add(rmaData);
						}
					}
					else
					{
						final RMAData rmaData = new RMAData();
						rmaData.setMaterialNumber(entry.getPartNumber());
						LOG.info("Material Number: " + rmaData.getMaterialNumber());
						rmaData.setSerialNumber("");

						rmaData.setSrvOff(offer.getOfferingCode());
						LOG.info("Service offering" + rmaData.getSrvOff());
						rmaData.setPlant("");
						dataSet.add(rmaData);
					}
				}
			}
		}



		LOG.info("Number of Price search Line items: " + dataSet.size());
		final List<PricingData> pricingData = bhgeRmaServiceOfferingService.getServiceOfferingForOffering(dataSet, null, null);

		if (CollectionUtils.isNotEmpty(pricingData))
		{
			LOG.info("Number of price rows returned from SAP: " + pricingData.size());
			for (final AbstractOrderEntryModel entry : cartModel.getEntries())
			{
				List<Double> totalOffpriceList = new ArrayList<>();
				List<Double> totalOffDiscList = new ArrayList<>();
				int count = 0;
				for (final PricingData priceData : pricingData)
				{
					if (entry.getPartNumber() != null && entry.getPartNumber().equalsIgnoreCase(priceData.getPartNumber()))
					{

						final Iterator<BHGEServiceOfferingsModel> itr = entry.getBhgeServiceOfferings().iterator();

						while (itr.hasNext())
						{
							final BHGEServiceOfferingsModel serviceOffering = itr.next();
							LOG.info("Offering Code3: " + (StringUtils.isNotEmpty(serviceOffering.getOfferingCode())?serviceOffering.getOfferingCode():"no offering code"));
							LOG.info("Offering Code from priceData: " + (StringUtils.isNotEmpty(priceData.getServiceOffering())?priceData.getServiceOffering():"no offering code"));
							if (priceData.getServiceOffering() != null
									&& priceData.getServiceOffering().equalsIgnoreCase(serviceOffering.getOfferingCode()))
							{
								LOG.info("Offering code matches from priceData and serviceOffering");
								count++;
								final Double origPriceVal = new Double(priceData.getUnitPrice());
								final Double discPriceVal = new Double(priceData.getUnitDiscount());
								LOG.info("origPriceVal: "+origPriceVal+" count: "+count);
								LOG.info("discPriceVal: "+discPriceVal+" count: "+count);
								totalOffpriceList.add(new Double(origPriceVal));
								totalOffDiscList.add(new Double(discPriceVal));
							}
							else{
								LOG.info("Offering code does not match from priceData and serviceOffering");
								totalOffpriceList.add(new Double(0.0));
								totalOffDiscList.add(new Double(0.0));
								LOG.info("else condition totalOffpriceList: "+totalOffpriceList);
								LOG.info("else condition totalOffDiscList: "+totalOffDiscList);
							}
						}
					}
				}
				LOG.info("***************** Total service offerings for entry in map for entry number " + entry.getEntryNumber()
						+ "is " + map.get(entry.getEntryNumber()));
				LOG.info("***************** Total service offerings for entry in entry for entry number " + entry.getEntryNumber()
						+ "is " + entry.getBhgeServiceOfferings().size());
				LOG.info("***************** Count value for service offering price present " + count);
				if (count != entry.getBhgeServiceOfferings().size())
				{					
					LOG.info("All services dont have price for entry: " + entry.getEntryNumber());
					totalOffpriceList = new ArrayList<>();
					totalOffDiscList = new ArrayList<>();
					LOG.info("if condition totalOffpriceList: "+totalOffpriceList);
					LOG.info("if condition totalOffDiscList: "+totalOffDiscList);
				}
				LOG.info("totalOffpriceList3: " + totalOffpriceList);
				LOG.info("totalOffDiscList3: "+ totalOffDiscList);
				priceCalculation(totalOffpriceList, totalOffDiscList, entry);
				modelService.save(entry);
				modelService.save(cartModel);
			}
		}
		else{
			try {
				LOG.info("PricingData response is not present in SAP");
				List<AbstractOrderEntryModel> entries = new ArrayList<>();
				for (final AbstractOrderEntryModel entry : cartModel.getEntries()) {
					LOG.info("Inside For loop 2351 facade");
					List<Double> totalOffpriceList = new ArrayList<>();
					List<Double> totalOffDiscList = new ArrayList<>();
					totalOffpriceList.add(new Double(0.0));
					totalOffDiscList.add(new Double(0.0));
					LOG.info("else condition totalOffpriceList4: " + totalOffpriceList);
					LOG.info("else condition totalOffDiscList4: " + totalOffDiscList);
					priceCalculation(totalOffpriceList, totalOffDiscList, entry);
					entries.add(entry);
				}
				modelService.saveAll(entries);
				modelService.save(cartModel);
				modelService.refresh(cartModel);
			}
			catch(Exception e){
				LOG.info("Pricing Data Exception: "+e.getMessage());
			}
		}
	}

	public BHGERmaData fetchRMADetails(final Integer entryNumber)
	{
		final CartModel cart = bhgeCartService.getSessionCart();

		sessionService.setAttribute("rmaCartEntryNumber", entryNumber);
		BHGERmaData rmaData = bhgeRMACartDataConverter.convert(cart);
		final List<RMAData> data = new ArrayList<>();
		final RMAData d = new RMAData();
		final List<String> serialNoList = new ArrayList<>();
		d.setMaterialNumber("000053758-971-N237");//rmaData.getRmaFormData().getPartNumber()
		d.setSerialNumber("");//serialNo
		d.setPlant("");
		d.setSrvOff("");
		data.add(d);
		return rmaData;
	}
	
	@Override
	public BHGERmaFormEntryData editRMAForm(Integer entryNumber)
	{
		LOG.info("===================== EDITRMA FUNCTIONALITY - START ===================" + java.time.LocalDateTime.now());
		final BHGERmaData rmaData = fetchRMADetails(entryNumber);
		final List<String> fileNames = new ArrayList<>();
		final List<String> fileSizes = new ArrayList<>();
		final BHGERmaFormEntryData rmaEntry = new BHGERmaFormEntryData();
		final BHGEAdditionalInfoData additionalInfo = new BHGEAdditionalInfoData();
		final BHGERmaFormData rmaFormData = rmaData.getRmaFormData();

		if (Objects.nonNull(rmaFormData.getAdditionalInfo()))
		{
			BeanUtils.copyProperties(rmaFormData.getAdditionalInfo(), additionalInfo);
			rmaData.getRmaFormData().getAdditionalInfo().getFormAttachments().forEach(media -> {
				fileNames.add(media.getRealFileName());
				fileSizes.add(media.getSize().toString());
			});
			additionalInfo.setAdditionalAttachments(fileNames);
			additionalInfo.setAdditionalAttachmentsFileSizes(fileSizes);
			rmaEntry.setAdditionalInfo(additionalInfo);
		}

		BeanUtils.copyProperties(rmaFormData, rmaEntry);
		LOG.info("Fetch RMA Form Data data.getProductDetails() :- " + rmaFormData.getProductDetails() + " | "
				+ rmaEntry.getProductDetails());
		rmaEntry.setHazardousInfo(rmaFormData.getHazardousInfo());
		rmaEntry.setServiceOfferings(rmaFormData.getServiceOfferings());
		if (null != rmaFormData.getTotalPrice())
		{
			rmaEntry.setPrice((rmaFormData.getTotalPrice().getValue()).doubleValue());
			rmaEntry.setFormattedPrice(rmaFormData.getTotalPrice().getFormattedValue());
		}
		rmaEntry.setIsAccessory(rmaFormData.getIsAccessory());

		List<ProductData> pData= parentCartAccessories(entryNumber);
		rmaEntry.setAccessoryProducts(pData);
		fetchParentEntryOffering(rmaEntry, entryNumber);

		if (StringUtils.isNotBlank(rmaEntry.getPartNumber()))
		{
			LOG.info("===================== EDITRMA FUNCTIONALITY - START ===================" + java.time.LocalDateTime.now());
			return rmaEntry;
		}
		else
		{
			return null;
		}
	}
	
	public void fetchParentEntryOffering(BHGERmaFormEntryData rmaEntry, Integer entryNumber)
	{
		final CartModel cart = bhgeCartService.getSessionCart();
		for (final AbstractOrderEntryModel entry : cart.getEntries())
		{
			if (entry.getEntryNumber() != null && entry.getEntryNumber() == entryNumber
					&& null != entry.getParentEntryNumber())
			{
				Optional<AbstractOrderEntryModel> parententry = cart.getEntries().stream().filter(e -> e.getEntryNumber() == entry.getParentEntryNumber()).findFirst();
				if(parententry.isPresent())
				{
					List<String> parentofferingCode = parententry.get().getBhgeServiceOfferings().stream().map(off -> off.getOfferingCode()).collect(Collectors.toList());
					rmaEntry.setParentOfferingList(parentofferingCode);
				}
			}
		}
	}

	private boolean check(final String valueA, final String valueB)
	{
		if (valueA.equalsIgnoreCase(valueB))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	@Override
	public List<ProductData> parentCartAccessories(final Integer cartEntryCode)
	{
		final CartModel cart = bhgeCartService.getSessionCart();
		final List<ProductData> accessoryProductDataList = new ArrayList<ProductData>();

		for (final AbstractOrderEntryModel entry : cart.getEntries())
		{
			if (entry.getParentEntryNumber() != null && entry.getParentEntryNumber() == cartEntryCode)
			{

				final String pCode = entry.getProduct().getCode();
				//String pCodes = entry.getProduct().getCode();
				try
				{
					//pCode="113-241-260";
					final String str = pCode;

					final PageableData pageableData = createPageableData(0, 5, null);
					final SearchStateData searchState = new SearchStateData();
					final SearchQueryData searchQueryData = new SearchQueryData();

					searchQueryData.setValue(str);
					searchState.setQuery(searchQueryData);
					final ProductSearchPageData<SearchStateData, ProductData> pageData = productSearchFacade.textSearch(searchState,
							pageableData);
					if (pageData != null && pageData.getResults() != null)
					{
						for (final ProductData productData : pageData.getResults())
						{
							if (productData.getCode().equals(pCode))
							{
								LOG.info("Product Code before change in accessory " + productData.getCode());
								entry.getBhgeServiceOfferings().forEach(OfferingModel -> {
									final Set<String> offerings = new HashSet<>();
									offerings.add(OfferingModel.getOfferingCode());
									productData.setServiceOffering(offerings);
								});
								//productData.setCode(pCodes);
								accessoryProductDataList.add(productData);
								break;
							}
						}
					}
				}
				catch (final Exception exc)
				{
					LOG.info("Inside rmaFormSubmit Error - Product Data Fetch");
					exc.printStackTrace();
				}
			}
		}
		return accessoryProductDataList;
	}

	@Override
	public List<ProductData> getAccessories(final AccessoryData accessoryData)
	{
		final String partNum = accessoryData.getPartNumber();
		final List<String> serviceOfferings = accessoryData.getServiceOffering();

		final Map<String, Set<String>> accessoryRfcMap = bhgeRmaServiceOfferingService.generateSAPResponseForAccessory(partNum,
				serviceOfferings);
		final List<ProductData> accessoryProductDataList = new ArrayList<ProductData>();
		if (MapUtils.isNotEmpty(accessoryRfcMap) && accessoryRfcMap != null && accessoryRfcMap.size() > 0)
		{
			for (final Map.Entry<String, Set<String>> accessorySet : accessoryRfcMap.entrySet())
			{
				LOG.info("Accessories for service offering : " + accessorySet.getKey());

				LOG.info(accessorySet.getKey());
				final String accessory = accessorySet.getKey();
				try
				{
					final PageableData pageableData = createPageableData(0, 5, null);
					final SearchStateData searchState = new SearchStateData();
					final SearchQueryData searchQueryData = new SearchQueryData();

					searchQueryData.setValue(accessory);
					searchState.setQuery(searchQueryData);
					final ProductSearchPageData<SearchStateData, ProductData> pageData = productSearchFacade.textSearch(searchState,
							pageableData);
					if (pageData != null && pageData.getResults() != null)
					{
						for (final ProductData productData : pageData.getResults())
						{
							if (productData.getCode().equals(accessory))
							{
								productData.setCode(accessory);
								LOG.info("Product Code before change in accessory " + productData.getCode());
								productData.setServiceOffering(accessorySet.getValue());
								accessoryProductDataList.add(productData);
								break;
							}
						}
					}
				}
				catch (final Exception exc)
				{
					LOG.info("Inside rmaFormSubmit Error - Product Data Fetch");
					exc.printStackTrace();
				}
			}
		}
		return accessoryProductDataList;
	}

	public void createAccessoryCart(final Integer parentEntryNumber, final CartModel cart, boolean isEditCart)
	{
		LOG.info("NEW ACCESSORY CART WILL BE CREATED FOR PARENT ENTRY NUMBER: " + parentEntryNumber);
		for (final AbstractOrderEntryModel accEntry : cart.getEntries())
		{
			if (accEntry.getEntryNumber() == parentEntryNumber)
			{
				LOG.info("2. NEW ACCESSORY CREATION WILL START IF ENTRY HAS ACCESSORIES");
				if (accEntry.getAccessoryPartNumbers() != null)
				{
					if (accEntry.getAccessoryPartNumbers().size() > 0)
					{
						final List<BHGERmaOfferingData> offeringsData = getOfferingsForAccessories(accEntry.getAccessoryPartNumbers());
						for (int i = 0; i < accEntry.getAccessoryPartNumbers().size(); i++)
						{
							final String accPartNum = accEntry.getAccessoryPartNumbers().get(i);
							String partNumber = null;
							if(accPartNum.contains("###"))
							{
								partNumber = accPartNum.substring(0, accPartNum.indexOf("###"));
							}
							else
							{
								partNumber = accPartNum;
							}
							LOG.info("2.1 PARENT HAVE ACCESSORIES WITH PART NUMBER: " + partNumber);
							LOG.info("2.2 PARENT HAVE ACCESSORIES WITH OFFERINGS: " + accPartNum);
							final List<String> offerings = new ArrayList<>();
							if(accPartNum.contains("###"))
							{
								final String offering = accPartNum.substring(accPartNum.indexOf("###") + 3);
								if (offering.contains("@@@"))
								{
									offerings.add(offering.substring(0, offering.indexOf("@@@")));
									offerings.add(offering.substring(offering.indexOf("@@@") + 3));
								}
								else
								{
									offerings.add(offering);
								}
							}
							saveAccessories(accEntry, partNumber, offerings, cart, isEditCart, offeringsData);
							isEditCart = isEditCart == true ? false : isEditCart;
						}

					}
				}
				break;
			}
		}
	}

	private List<BHGERmaOfferingData> getOfferingsForAccessories(final List<String> accessoryList)
	{
		LOG.info("Calling Servie Offering for below accessories - ");
		final List<RMAData> list = new ArrayList<RMAData>();
		accessoryList.forEach(accessory -> {
			String partNum  = null;
			if(accessory.contains("###"))
			{
				partNum = accessory.substring(0, accessory.indexOf("###"));
			}
			else
			{
				partNum = accessory;
			}
			LOG.info("PartNum: " + partNum);
			final RMAData data = new RMAData();
			data.setMaterialNumber(partNum);
			list.add(data);
		});

		return bhgeRmaFormFacade.getServiceOfferingsForAccessories(list, false, null, null);
	}

	public boolean saveAccessories(final AbstractOrderEntryModel entry, final String accessoryProductCode,
			final List<String> serviceOffering, final CartModel cart, final boolean isEditCart,
			final List<BHGERmaOfferingData> offeringsData)
	{
		final AbstractOrderEntryModel orderEntry = new AbstractOrderEntryModel();
		final List<ProductModel> existingAccessoryproducts = isEditCart == false ? entry.getAccessoryProducts()
				: new ArrayList<ProductModel>();
		final List<ProductModel> accessoryproducts = new ArrayList<ProductModel>();

		if (entry != null)
		{
			final String accessory = accessoryProductCode;
			final ProductModel pModel = getProduct(accessoryProductCode.trim());

			if (pModel != null)
			{
				LOG.info("2.4. Product Model for accessory found");
				pModel.setCode(accessory);
				if (existingAccessoryproducts != null && !existingAccessoryproducts.isEmpty())
				{
					accessoryproducts.addAll(existingAccessoryproducts);
				}
				accessoryproducts.add(pModel);
			}
			if (accessoryproducts != null)
			{
				entry.setAccessoryProducts(accessoryproducts);
				LOG.info("2.5. Product Model has been set in parent accessoryProducts field");
				modelService.save(entry);
				modelService.refresh(entry);
				cloneAccessoryEntrys(entry, serviceOffering, cart, accessoryProductCode, offeringsData);
				LOG.info("2.6 Accessory entry is created");
				return true;
			}
		}

		if (orderEntry != null)
		{
		}
		LOG.info("2.6 Accessory entry is not created");
		return false;
	}

	private List<BHGERmaFormData> populateEntries(final List<AbstractOrderEntryModel> entries)
	{


		final List<BHGERmaFormData> rmaFormEntryDataList = new ArrayList<BHGERmaFormData>();
		final Integer cartEntryNumber = sessionService.getAttribute("rmaCartEntryNumber");
		final BHGERmaFormData rmaFormData = new BHGERmaFormData();
		for (final AbstractOrderEntryModel entryModel : entries)
		{


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
			rmaFormData.setProductDetails(entryModel.getProductDetails());
			rmaFormData.setQuantity(entryModel.getQuantity());
			rmaFormEntryDataList.add(rmaFormData);

		}
		return rmaFormEntryDataList;
	}

	private double calculatePrice(final String price)
	{
		double amount = 0;
		try
		{
			amount = Double.parseDouble(price);
		}
		catch (final NumberFormatException e)
		{
			return 0;
		}
		return amount;
	}


	private boolean checkCompleteness(final BHGERmaFormData rmaFormData)
	{
		return ((rmaFormData.getPartNumber() != null || rmaFormData.getSerialNumber() != null
				|| rmaFormData.getHazardousInfo() != null) ? true : false);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.rma.BHGERmaFormFacade#getServiceOffering()
	 */
	@Override
	public List<BHGERmaOfferingData> getServiceOffering(final List<RMAData> data, final boolean equipSearch,
			final String wildSearch, final String searchType)
	{
		return bhgeRmaServiceOfferingService.getServiceOffering(data, equipSearch, wildSearch, searchType);


	}

	@Override
	public List<BHGERmaOfferingData> getServiceOfferingsForAccessories(final List<RMAData> data, final boolean equipSearch,
			final String wildSearch, final String searchType)
	{
		return bhgeRmaServiceOfferingService.getServiceOfferingsForAccessories(data, equipSearch, wildSearch, searchType);


	}

	@Override
	public List<String> getInfoForPartNumOrPartSerialNumber(final String partNo, final String srNo)
	{

		LOG.info("Inside getInfoForPartNumOrPartSerialNumber");
		return bhgeRmaServiceOfferingService.getPartNumsForSearch(partNo, srNo);

	}

	public List<ProductData> getProductDataForPartNumbers(final List<String> PartNums)
	{

		LOG.info("Equip Search : START getProductDataForPartNumber");
		final List<ProductData> productDatas = new ArrayList<ProductData>();
		PartNums.forEach(part -> {
			LOG.info("Equip Search : Product Lookup - " + part);

			try
			{
				final String partCombString = part.toString();
				final AutocompleteResultData resultData = new AutocompleteResultData();
				final String partNumVal = partCombString.substring(0, partCombString.indexOf("#$#"));
				String equipSL = "";
				if (partCombString.indexOf("#$#") + 3 < partCombString.length())
				{
					equipSL = partCombString.substring(partCombString.indexOf("#$#") + 3);
				}
				final String filter = "RETURN";
				LOG.info("Equip Search : Product Query - " + partNumVal + " | " + equipSL);
				final PageableData pageableData = createPageableData(0, 5, null);
				final SearchStateData searchState = new SearchStateData();
				final SearchQueryData searchQueryData = new SearchQueryData();

				searchQueryData.setValue(partNumVal);
				searchState.setQuery(searchQueryData);
				final ProductSearchPageData<SearchStateData, ProductData> pageData = productSearchFacade.textSearch(searchState,
						pageableData, filter);
				if (pageData != null && pageData.getResults() != null)
				{
					for (final ProductData productData : pageData.getResults())
					{
						if (productData != null && productData.getCode() != null && partNumVal != null
								&& productData.getCode().equalsIgnoreCase(partNumVal.trim()))
						{
							LOG.info("Equip Search : Product Match Found - " + partNumVal);
							productData.setSummary(equipSL);
							productDatas.add(productData);
						}
					}
				}
			}
			catch (final Exception exc)
			{
				LOG.info("Equip Search : Part Catalog Lookup Fail - " + part);
				exc.printStackTrace();
			}
		});

		for (final ProductData prod : productDatas)
		{
			if (prod != null && prod.getBrandName() != null)
			{
				final Collection<BrandNameData> brandNames = new LinkedList<>();
				prod.getBrandName().forEach(bradNameData -> {
					if (bradNameData != null)
					{
						final Collection<CategoryModel> categories = bhgeCategoryDao.findCategoriesByName(bradNameData.getName());
						if (categories != null && categories.iterator().hasNext())
						{
							final CategoryModel categoryModel = categories.iterator().next();
							final String description = categoryModel.getDescription();
							final String code = categoryModel.getCode();
							final String categoryImageURL = (categoryModel.getPicture() != null
									? (categoryModel.getPicture().getURL() != null ? categoryModel.getPicture().getURL() : "")
									: "");
							bradNameData.setCode(code);
							bradNameData.setImageUrl(categoryImageURL);
							bradNameData.setDescription(description);
							brandNames.add(bradNameData);
						}
					}
				});
				prod.setBrandName(brandNames);
			}
		}
		LOG.info("Equip Search : CLOSE getProductDataForPartNumber - " + productDatas.size());
		return productDatas;
	}

	@Override
	public List<ProductData> getProductDataForPartNumber(final List<String> PartNums)
	{

		LOG.info("Equip Search : START getProductDataForPartNumber");
		final List<ProductData> productDatas = new ArrayList<ProductData>();
		final Set<String> uniqueProductCOde = new HashSet<>();
		final List<ProductData> productSolr = new ArrayList<>();
		final Set<String> SrNos = new HashSet<>();
		final Map<String, Set<String>> pSrList = new HashMap<>();
		LOG.info("&&&&&&&&&&&&&&&&&RFC Data iterate&&&&&&&&&&&&&&&&&&&&");
		PartNums.forEach(part -> {
			final String partCombString = part.toString();
			final String partNumVal = partCombString.substring(0, partCombString.indexOf("#$#"));
			uniqueProductCOde.add(partNumVal);

			String equipSL = "";
			if (partCombString.indexOf("#$#") + 3 < partCombString.length())
			{
				equipSL = partCombString.substring(partCombString.indexOf("#$#") + 3);
			}
			LOG.info("Product Code: " + partNumVal + " Serial Number: " + equipSL);

			if (MapUtils.isNotEmpty(pSrList) && pSrList.containsKey(partNumVal))
			{
				pSrList.get(partNumVal).add(equipSL);
			}
			else
			{
				//Create new child cart and add entry to it
				final Set<String> blankSrNo = new HashSet<>();
				pSrList.put(partNumVal, blankSrNo);
				pSrList.get(partNumVal).add(equipSL);
			}
		});

		LOG.info("^^^^^^^^^^^^^^^^^^^^^^^^RFCDATAiterateend^^^^^^^^^^^^^^^^^^^^");

		LOG.info("^^^^^^^^^^^^^^^^^^^^^^^^SolrSearchStart^^^^^^^^^^^^^^^^^^^^");
		uniqueProductCOde.forEach(pcode -> {
			final String filter = "RETURN";
			final PageableData pageableData = createPageableData(0, 5, null);
			final SearchStateData searchState = new SearchStateData();
			final SearchQueryData searchQueryData = new SearchQueryData();
			LOG.info("^^^^^^^^^^^^^^^^Product Code to be searched: " + pcode);

			searchQueryData.setValue(pcode);
			searchState.setQuery(searchQueryData);
			final ProductSearchPageData<SearchStateData, ProductData> pageData = productSearchFacade.textSearch(searchState,
					pageableData, filter);

			if (pageData != null && pageData.getResults() != null)
			{
				LOG.info("Product results: ");
				for (final ProductData productData : pageData.getResults())
				{
					LOG.info("Product Code: " + productData.getCode());
					if (productData != null && productData.getCode() != null)
					{
						boolean different = true;
						for (final ProductData product : productSolr)
						{
							if (productData.getCode().equalsIgnoreCase(product.getCode()))
							{
								different = false;
								break;
							}
						}
						if (different)
						{
							productSolr.add(productData);
						}

					}
				}
			}
		});
		LOG.info("################### List to be returned******************");
		for (final Map.Entry<String, Set<String>> entry : pSrList.entrySet())
		{
			if (entry.getValue() != null)
			{
				entry.getValue().forEach(equipSL -> {
					productSolr.forEach(product -> {
						if (product.getCode().equalsIgnoreCase(entry.getKey()))
						{
							final List<BrandNameData> newBrands = new ArrayList<>();
							final ProductData newProduct = new ProductData();
							newProduct.setUrl(product.getUrl());
							newProduct.setName(product.getName());
							newProduct.setCode(product.getCode());
							newProduct.setMediaurl(product.getMediaurl());
							final Iterator<BrandNameData> itr = product.getBrandName().iterator();
							while (itr.hasNext())
							{
								final BrandNameData brand = itr.next();

								final BrandNameData newBrand = new BrandNameData();
								newBrand.setCode(brand.getCode());
								newBrand.setDescription(brand.getDescription());
								newBrand.setImageUrl(brand.getImageUrl());
								newBrand.setName(brand.getName());

								newBrands.add(newBrand);
							}

							newProduct.setBrandName(newBrands);

							newProduct.setSummary(equipSL);
							newProduct.setProductAccessData(product.getProductAccessData());

							LOG.info("Final product Code: " + newProduct.getCode() + "  Serial Number " + equipSL);
							productDatas.add(newProduct);
						}
					});
				});
			}
		}

		for (final ProductData prod : productDatas)
		{
			if (prod != null && prod.getBrandName() != null)
			{
				final Collection<BrandNameData> brandNames = new LinkedList<>();
				prod.getBrandName().forEach(bradNameData -> {
					if (bradNameData != null)
					{
						final Collection<CategoryModel> categories = bhgeCategoryDao.findCategoriesByName(bradNameData.getName());
						if (categories != null && categories.iterator().hasNext())
						{
							final CategoryModel categoryModel = categories.iterator().next();
							final String description = categoryModel.getDescription();
							final String code = categoryModel.getCode();
							final String categoryImageURL = (categoryModel.getPicture() != null
									? (categoryModel.getPicture().getURL() != null ? categoryModel.getPicture().getURL() : "")
									: "");
							bradNameData.setCode(code);
							bradNameData.setImageUrl(categoryImageURL);
							bradNameData.setDescription(description);
							brandNames.add(bradNameData);
						}
					}
				});
				prod.setBrandName(brandNames);
			}
		}
		LOG.info("Equip Search : CLOSE getProductDataForPartNumber - " + productDatas.size());
		return productDatas;
	}

	@Override
	public Map<String, Map<String, Collection<Object>>> getOfferingMatrix(final BHGERmaOfferingData rmaOfferingData,
			final String part)
	{


		final Map<String, Map<String, Collection<Object>>> result = new HashMap<>();

		final Multimap<String, Object> offeringmap = ArrayListMultimap.create();
		final Multimap<String, Object> plantMap = ArrayListMultimap.create();
		final Multimap<String, Object> errorMap = ArrayListMultimap.create();

		final Set<String> offeringSet = new HashSet<>();


		final Map<String, List<ErrorData>> errorDataTable = rmaOfferingData.getErrorDescriptionDataTable();
		for (final Entry<String, List<ErrorData>> data : errorDataTable.entrySet())
		{
			if (data.getKey().equalsIgnoreCase(part))
			{
				errorMap.put(part, data.getValue());
			}
		}
		final List<OfferDescriptionData> offerDescriptionDataTable = rmaOfferingData.getOfferDescriptionDataTable();
		rmaOfferingData.getOfferingsDataTable().get(part).forEach(offering -> {

			final String sOffer = offering.getServiceOffering();

			final OfferDescriptionData offeringData = offerDescriptionDataTable.stream()
					.filter(data -> data.getServiceOffering().equalsIgnoreCase(sOffer)).findFirst().orElse(new OfferDescriptionData());

			String serviceOffering = offeringData.getServiceOffering();
			if (StringUtils.isEmpty(serviceOffering))
			{
				serviceOffering = "UNKNOWN";
			}
			offeringSet.add(serviceOffering);

			if (!StringUtils.isEmpty(offering.getAlternatePlant()) || !StringUtils.isEmpty(offering.getDropShipPlant()))
			{
				if (!StringUtils.isEmpty(offering.getAlternatePlant()))
				{
					final PricingData price = rmaOfferingData.getPricingDataTable().get(part).stream()
							.filter(data -> data.getServiceOffering().equalsIgnoreCase(offering.getServiceOffering())).findFirst()
							.orElse(new PricingData());

					final String demoOffering = offeringData.getServiceOffering();

					final PlantService service = new PlantService("Alternate Plant", serviceOffering, price.getUnitPrice(),
							price.getUnitDiscount());
					plantMap.put(offering.getAlternatePlant(), service);
					final PlantService plant = new PlantService("Alternate Plant", offering.getAlternatePlant(), price.getUnitPrice(),
							price.getUnitDiscount());

					offeringmap.put(serviceOffering, plant);
				}
				if (!StringUtils.isEmpty(offering.getDropShipPlant()))
				{
					final PricingData price = rmaOfferingData.getPricingDataTable().get(part).stream()
							.filter(data -> data.getServiceOffering().equalsIgnoreCase(offering.getServiceOffering())).findFirst()
							.orElse(new PricingData());

					final String demoOffering = offeringData.getServiceOffering();

					final PlantService service = new PlantService("DropShip Plant", serviceOffering, price.getUnitPrice(),
							price.getUnitDiscount());
					plantMap.put(offering.getDropShipPlant(), service);
					final PlantService plant = new PlantService("DropShip Plant", offering.getDropShipPlant(), price.getUnitPrice(),
							price.getUnitDiscount());
					offeringmap.put(serviceOffering, plant);
				}
			}
			else if (!StringUtils.isEmpty(offering.getPlanningPlant()))
			{
				final PricingData price = rmaOfferingData.getPricingDataTable().get(part).stream()
						.filter(data -> data.getServiceOffering().equalsIgnoreCase(offering.getServiceOffering())).findFirst()
						.orElse(new PricingData());

				final String demoOffering = offeringData.getServiceOffering();
				final PlantService service = new PlantService("Planning Plant", serviceOffering, price.getUnitPrice(),
						price.getUnitDiscount());
				plantMap.put(offering.getPlanningPlant(), service);
				final PlantService plant = new PlantService("Planning Plant", offering.getPlanningPlant(), price.getUnitPrice(),
						price.getUnitDiscount());
				offeringmap.put(serviceOffering, plant);
			}
		});


		result.put("Offering", offeringmap.asMap());
		result.put("Plant", plantMap.asMap());
		result.put("Error", errorMap.asMap());

		sessionService.setAttribute("offeringSet", offeringSet);
		return result;



	}

	class PlantService
	{
		final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");
		public final String plantType;
		public final String plantService;
		public final String price;
		public final String discount;
		//public final String currencyIso = sessionSalesAreaData.getCurrencyIso();
		//public final String currencySymbol = sessionSalesAreaData.getCurrencySymbol();

		public PlantService(final String plantType, final String plantService, final String price, final String discount)
		{
			this.plantType = plantType;
			this.plantService = plantService;
			this.price = price;
			this.discount = discount;
		}


	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.rma.BHGERmaFormFacade#getCartType()
	 */
	@Override
	public String getCartType()
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		LOG.info("Inside getCartType - " + cartModel.getCommerceType());
		if (Objects.nonNull(cartModel.getCommerceType()) && cartModel.getEntries() != null && cartModel.getEntries().size() > 0)
		{
			return cartModel.getCommerceType().toString();
		}
		else if (cartModel.getEntries() != null && cartModel.getEntries().size() > 0)
		{
			return "BUY";
		}
		else
		{
			return "BLANK";
		}
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.rma.BHGERmaFormFacade#deleteCart()
	 */

	@Override
	public Boolean deleteCart()
	{
		final UserModel user = userService.getCurrentUser();
		final Long userPK = user.getPk().getLong();
		final String queryString = "SELECT {cart:PK} FROM {" + CartModel._TYPECODE + " AS cart} WHERE {cart:user}=?userPK";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("userPK", userPK);
		query.addQueryParameters(params);
		final SearchResult<CartModel> result = flexibleSearchService.search(query);

		modelService.removeAll(result.getResult());
		return new Boolean(true);

	}

	private void switchCart()
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();

		if (Objects.nonNull(cartModel.getCommerceType()) && (cartModel.getCommerceType().toString().equalsIgnoreCase("BUY")
				|| cartModel.getCommerceType().toString().equalsIgnoreCase("")))
		{
			bhgeCartService.removeSessionCart();
		}
	}
	
	@Override
	public CartData getReturnsCart(CartData cartData)
	{
		final List<RmaReturnCartData> returnList = createRmaReturnCart();
		Double totalCartPrice = 0.0;
		Double totalDiscount = 0.0;
		PriceData totalCartPriceData = new PriceData();
		PriceData totalCartDiscount = new PriceData();
		for (final RmaReturnCartData data : returnList)
		{
			if (data.getTotalPrice() != null && data.getTotalPrice().getValue() != null)
			{
				totalCartPrice = totalCartPrice + data.getTotalPrice().getValue().doubleValue();
			}
			if (data.getTotalDiscount() != null && data.getTotalDiscount().getValue() != null)
			{
				totalDiscount = totalDiscount
						+ (data.getTotalDiscount().getValue().doubleValue() * data.getQuantity().longValue());
			}
		}
		CartModel cartModel = bhgeCartService.getSessionCart();
		cartModel.setYourPriceDiscount(totalDiscount);
		totalCartPriceData = populatePrice(cartModel.getTotalReturnPrice(), cartModel.getCurrency());
		totalCartDiscount = populatePrice(totalDiscount, cartModel.getCurrency());
		cartData.setReturnsCartData(returnList);
		cartData.setTotalReturnCartPrice(totalCartPriceData);
		cartData.setTotalReturnCartPriceDiscount(totalCartDiscount);
		modelService.save(cartModel);
		return cartData;

	}

	@Override
	public List<RmaReturnCartData> createRmaReturnCart()
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();

		for (final AbstractOrderEntryModel entry : cartModel.getEntries())
		{
			boolean cartCreated = false;
			boolean removeCartEntries = false;
			// condition to know parent cart entry for accessories scenario
			if ((entry.getParentEntryNumber() == null || !(entry.getParentEntryNumber() > 0))
					&& entry.getAccessoryPartNumbers() != null && entry.getAccessoryPartNumbers().size() > 0)
			{
				final List<String> accessories = new ArrayList<String>();
				final Map<Integer, List<String>> accessoryMap = new HashMap<Integer, List<String>>();
				final Map<Integer, List<Integer>> accessoryCartEntriesMap = new HashMap<Integer, List<Integer>>();
				getAccessoryMapForCart(cartModel, accessoryMap, accessoryCartEntriesMap);
				for (final String s : entry.getAccessoryPartNumbers())
				{
					if(s.contains("###"))
					{
						final String partNumber = s.substring(0, s.indexOf("###"));
						accessories.add(partNumber);
					}
					else
					{
						accessories.add(s);
					}
				}
				final List<String> originalAccessories = accessoryMap.get(entry.getEntryNumber());
				if (originalAccessories != null)
				{
					Collections.sort(originalAccessories);
					Collections.sort(accessories);
					if (!originalAccessories.equals(accessories))
					{
						removeCartEntries = true;
						removeCartEntries(accessoryCartEntriesMap.get(entry.getEntryNumber()));
						entry.setAccessoryProducts(Collections.EMPTY_LIST);
						modelService.save(entry);
						modelService.refresh(entry);
						cartCreated = false;
					}
					else
					{
						cartCreated = true;
					}
				}
			}
			else
			{
				for (final AbstractOrderEntryModel accEntry : cartModel.getEntries())
				{
					if (accEntry.getParentEntryNumber() != null && accEntry.getParentEntryNumber() == entry.getEntryNumber())
					{
						LOG.info("Cart entry related accessory entry will be deleted with entry number: " + accEntry.getEntryNumber());
						modelService.remove(accEntry);
						entry.setAccessoryProducts(Collections.EMPTY_LIST);
						modelService.save(entry);
						modelService.refresh(entry);
						modelService.save(cartModel);
						modelService.refresh(cartModel);
						cartCreated = true;
					}
				}
			}
			if (!cartCreated)
			{
				LOG.info("####### ACCESSORY FOR PARENT CART CREATION BEIGNS #######");
				LOG.info("Accessory will be created for Parent Cart Entry Number: " + entry.getEntryNumber());
				final Integer parentEntryNumber = entry.getEntryNumber();
				createAccessoryCart(parentEntryNumber, cartModel, cartCreated);
			}
		}

		modelService.refresh(cartModel);
		LOG.info("Cart model total entries: " + cartModel.getEntries().size());

		priceFlag = false;
		//CartModel cartModels = bhgeCartService.getSessionCart();
		validateCartPrice(cartModel);
		totalPriceforCart = 0.0;
		LOG.info("totalPriceforCart before price change: " + totalPriceforCart);
		cartModel.getEntries().forEach(entry -> {
			totalPriceforCart = totalPriceforCart + entry.getTotalReturnPrice();
			if (entry.getTotalReturnPrice() == 0.0)
			{
				priceFlag = true;
			}
		});
		LOG.info("totalPriceforCart after price change: " + totalPriceforCart);
		if (priceFlag)
		{
			cartModel.setTotalReturnPrice(new Double(0.0));
		}
		else
		{
			cartModel.setTotalReturnPrice(new Double(totalPriceforCart));
		}
		modelService.save(cartModel);
		final List<RmaReturnCartData> returnList = new ArrayList<>();
		final List<RmaReturnCartData> sorted = new ArrayList<>();
		for (final AbstractOrderEntryModel cartEntry : cartModel.getEntries())
		{
			final RmaReturnCartData obj = bhgeRmaCartPopulator.convert(cartEntry);
			returnList.add(obj);
		}
		Collections.sort(returnList, new SortByPlantName());
		return returnList;
	}

	public void getAccessoryMapForCart(final CartModel cartModel, final Map<Integer, List<String>> accessoryMap,
			final Map<Integer, List<Integer>> accessoryCartEntriesMap)
	{
		/*
		 * final Map<Integer, List<String>> accessoryMap = new HashMap<Integer, List<String>>(); final Map<Integer,
		 * List<Integer>> accessoryCartEntriesMap = new HashMap<Integer, List<Integer>>();
		 */
		for (final AbstractOrderEntryModel entry : cartModel.getEntries())
		{
			if (entry.getAccessoryPartNumbers() == null || entry.getAccessoryPartNumbers().isEmpty())
			{
				if (accessoryMap.get(entry.getParentEntryNumber()) == null)
				{
					final List<String> accessories = new ArrayList<String>();
					final List<Integer> accessoriesEntries = new ArrayList<Integer>();
					accessories.add(entry.getPartNumber());
					accessoryMap.put(entry.getParentEntryNumber(), accessories);
					accessoriesEntries.add(entry.getEntryNumber());
					accessoryCartEntriesMap.put(entry.getParentEntryNumber(), accessoriesEntries);
				}
				else
				{
					final List<String> accessories = accessoryMap.get(entry.getParentEntryNumber());
					accessories.add(entry.getPartNumber());
					accessoryMap.put(entry.getParentEntryNumber(), accessories);
					final List<Integer> accessoriesEntries = accessoryCartEntriesMap.get(entry.getParentEntryNumber());
					accessoriesEntries.add(entry.getEntryNumber());
					accessoryCartEntriesMap.put(entry.getParentEntryNumber(), accessoriesEntries);
				}
			}
		}
		//return accessoryMap;
	}

	public void removeCartEntries(final List<Integer> entries)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		cartModel.getEntries().forEach(entry -> {
			if (entries.contains(entry.getEntryNumber()))
			{
				modelService.remove(entry);
				LOG.info("Cart entry removed is - " + entry.getEntryNumber());
			}
			modelService.save(cartModel);
			modelService.refresh(cartModel);
		});
	}

	public List<RmaReturnCartData> createReturnCart()
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();

		totalPriceforCart = 0.0;
		priceFlag = false;

		cartModel.getEntries().forEach(entry -> {
			totalPriceforCart = totalPriceforCart + entry.getTotalReturnPrice();
			if (entry.getTotalReturnPrice() == 0.0)
			{
				priceFlag = true;
			}
		});
		if (priceFlag)
		{
			cartModel.setTotalReturnPrice(new Double(0.0));
		}
		else
		{
			cartModel.setTotalReturnPrice(new Double(totalPriceforCart));
		}
		modelService.save(cartModel);
		final List<RmaReturnCartData> returnList = new ArrayList<>();
		final List<RmaReturnCartData> sorted = new ArrayList<>();
		for (final AbstractOrderEntryModel cartEntry : cartModel.getEntries())
		{
			final RmaReturnCartData obj = bhgeRmaCartPopulator.convert(cartEntry);
			returnList.add(obj);
		}
		Collections.sort(returnList, new SortByPlantName());
		return returnList;
	}
	@Override
	public List<OrderModel> placeOrderWithSplit() throws InvalidCartException
	{
		final List<OrderModel> orderDataList = new ArrayList<>();
		LOG.info("CART MODEL SPLITING WILL HAPPEN");
		final List<CartModel> childCarts = doSplit();
		LOG.info("CART MODEL SPLITING HAPPENED");
		//Split happened
		if (!childCarts.isEmpty())
		{
			for (final CartModel cartModel : childCarts)
			{
				LOG.info("ORDER MODEL IS GETTING CREATED FOR EACH CHILD");
				final OrderData orderData = new OrderData();
				if (cartModel != null)
				{
					try
					{
						//calculate price method
					}
					catch (final Exception e)
					{
						LOG.error("Error occured while executing the calculate method - processPrice() " + e);
					}
				}

				if (!userService.isAnonymousUser(getUserService().getCurrentUser()))
				{
					beforePlaceOrder(cartModel);
					//orderModel.setRmaNumber(generateSAPResponseForRMA(orderModel));
					LOG.info("rfc FOR ORDER MODEL TO RFC WILL BE CALLED");

					//final RMAOrderRFCData rfcResult = generateSAPResponseForRMA(cartModel);
					final RMAOrderRFCData rfcResult = bhgeRmaOrderService.generateSAPResponseForRMA(cartModel);
					if (rfcResult != null && Objects.nonNull(rfcResult) && rfcResult.getRmaNumber() != null
							&& !rfcResult.getRmaNumber().isEmpty() && rfcResult.getRmaNumber() != "")
					{
						LOG.info("RFC RETURNED RMA NUMBER - " + rfcResult.getRmaNumber());
						cartModel.setRmaNumber(rfcResult.getRmaNumber());
						cartModel.setRmaSapStatus(rfcResult.getRfcStatusFlag());
						//Generate Hazardous PDF for the complete cart
						try
						{
							//bhgeRmaOrderService.generateHazardPdf(cartModel);
							final boolean pdfCreated = bhgeRmaOrderService.generateHazardPdf(cartModel);
							if (pdfCreated)
							{
								cartModel.setCoshPdfStatus(PdfStatusType.GENERATED);
								LOG.info("cosh pdf created-RMA_ORDER " + cartModel.getRmaNumber() + " | " + " Status changed-generated");
							}
						}
						catch (final Exception ex)
						{
							LOG.error("Exception : Issue generating harzardous PDF for cart " + cartModel.getCode());
							cartModel.setCoshPdfStatus(PdfStatusType.BLANK);
							String soldToCosh = "";
							if (cartModel.getSoldToForCart() != null)
							{
								soldToCosh = cartModel.getSoldToForCart().getUid();
							}
							bhgeEmailService.attachmentFailureEmail(cartModel.getRmaNumber(), soldToCosh,
									"Cosh-Pdf generatiom/submission failed-Order", cartModel.getOrderConfirmationEMail(),
									cartModel.getCode(),cartModel.getCartType(),cartModel.getCommerceType(),cartModel.getUser().getUid());

							ex.printStackTrace();
						}
						//Generate Checkout PDF for the complete cart
						try
						{
							final boolean checkoutPdfCreated = bhgeRmaOrderService.generateCheckoutPdf(cartModel);
							if (checkoutPdfCreated)
							{
								cartModel.setCheckoutPdfStatus(PdfStatusType.GENERATED);
								LOG.info(
										"checkout pdf created-RMA_ORDER " + cartModel.getRmaNumber() + " | " + " Status changed-generated");
							}
						}
						catch (final Exception ex)
						{
							LOG.error("Exception : Issue generating Checkout PDF for cart " + cartModel.getCode());
							cartModel.setCheckoutPdfStatus(PdfStatusType.BLANK);
							String soldToCheckout = "";
							if (cartModel.getSoldToForCart() != null)
							{
								soldToCheckout = cartModel.getSoldToForCart().getUid();
							}
							bhgeEmailService.attachmentFailureEmail(cartModel.getRmaNumber(), soldToCheckout,
									"Checkout-Pdf generatiom/submission failed-Order", cartModel.getOrderConfirmationEMail(),
									cartModel.getCode(),cartModel.getCartType(),cartModel.getCommerceType(),cartModel.getUser().getUid());
							ex.printStackTrace();
						}
					}
					else
					{
						LOG.info("RFC RETURNED ERROR");
						if(CollectionUtils.isNotEmpty(cartModel.getEntries())){
							List<AbstractOrderEntryModel> entries = cartModel.getEntries();
							for (AbstractOrderEntryModel entry : entries){
								// Getting the Product
								if(null !=entry.getProduct()){
									LOG.info("Error occured for Product : " +entry.getProduct().getCode());
								}
							}
						}
						cartModel.setRmaNumber("-");
						cartModel.setConnectivityerror(StringUtils.isNotBlank(rfcResult.getErrorNumber()) ? rfcResult.getErrorNumber() : "");
						//submitRegisterRequestService.rfcFailureEmail(cartModel);
						bhgeRmaOrderService.rfcFailureEmail(cartModel);
					}
					LOG.info("oRDER MoDEL FOR CHILD CART WILL HAPPEN");
					final OrderModel orderModel = placeOrder(cartModel);
					LOG.info("oRDER MoDEL FOR CHILD CART - " + cartModel.getCode() + " & RMA Number = " + orderModel.getRmaNumber());
					orderModel.setTotalPrice(cartModel.getTotalPrice());

					if (orderModel.getRmaNumber().equals("-"))
					{
						orderModel.setStatus(OrderStatus.ERROR);
						orderModel.setCheckoutPdfStatus(PdfStatusType.BLANK);
						orderModel.setCoshPdfStatus(PdfStatusType.BLANK);
					}
					modelService.save(orderModel);
					LOG.info("oRDER MoDEL SAVED");
					modelService.refresh(orderModel);

					afterPlaceOrder(cartModel, orderModel);
					LOG.info("CART MODEL REMOVED FROM SESSION");
					orderDataList.add(orderModel);
					//bhgeOrderPopulator.populate(orderModel, orderData);
				}
				//orderDataList.add(orderData);
			}
		}

		return orderDataList;
	}
	
	
	@Override
	public List<OrderModel> placeOrderWithSplitForWs(CartModel cartModel1) throws InvalidCartException
	{
		final List<OrderModel> orderDataList = new ArrayList<>();
		LOG.info("CART MODEL SPLITING WILL HAPPEN");
		final List<CartModel> childCarts = doSplitForWs(cartModel1);
		LOG.info("CART MODEL SPLITING HAPPENED");
		//Split happened
		if (!childCarts.isEmpty())
		{
			for (final CartModel cartModel : childCarts)
			{
				LOG.info("ORDER MODEL IS GETTING CREATED FOR EACH CHILD");
				final OrderData orderData = new OrderData();
				if (cartModel != null)
				{
					try
					{
						//calculate price method
					}
					catch (final Exception e)
					{
						LOG.error("Error occured while executing the calculate method - processPrice() " + e);
					}
				}

				if (!userService.isAnonymousUser(getUserService().getCurrentUser()))
				{
					beforePlaceOrderForWs(cartModel);
					//orderModel.setRmaNumber(generateSAPResponseForRMA(orderModel));
					LOG.info("rfc FOR ORDER MODEL TO RFC WILL BE CALLED");

					//final RMAOrderRFCData rfcResult = generateSAPResponseForRMA(cartModel);
					final RMAOrderRFCData rfcResult = bhgeRmaOrderService.generateSAPResponseForRMA(cartModel);
					if (rfcResult != null && Objects.nonNull(rfcResult) && rfcResult.getRmaNumber() != null
							&& !rfcResult.getRmaNumber().isEmpty() && rfcResult.getRmaNumber() != "")
					{
						LOG.info("RFC RETURNED RMA NUMBER - " + rfcResult.getRmaNumber());
						cartModel.setRmaNumber(rfcResult.getRmaNumber());
						cartModel.setRmaSapStatus(rfcResult.getRfcStatusFlag());
						//Generate Hazardous PDF for the complete cart
						try
						{
							//bhgeRmaOrderService.generateHazardPdf(cartModel);
							final boolean pdfCreated = bhgeRmaOrderService.generateHazardPdf(cartModel);
							if (pdfCreated)
							{
								cartModel.setCoshPdfStatus(PdfStatusType.GENERATED);
								LOG.info("cosh pdf created-RMA_ORDER " + cartModel.getRmaNumber() + " | " + " Status changed-generated");
							}
						}
						catch (final Exception ex)
						{
							LOG.error("Exception : Issue generating harzardous PDF for cart " + cartModel.getCode());
							cartModel.setCoshPdfStatus(PdfStatusType.BLANK);
							String soldToCosh = "";
							if (cartModel.getSoldToForCart() != null)
							{
								soldToCosh = cartModel.getSoldToForCart().getUid();
							}
							bhgeEmailService.attachmentFailureEmail(cartModel.getRmaNumber(), soldToCosh,
									"Cosh-Pdf generatiom/submission failed-Order", cartModel.getOrderConfirmationEMail(),
									cartModel.getCode(),cartModel.getCartType(),cartModel.getCommerceType(),cartModel.getUser().getUid());

							ex.printStackTrace();
						}
						//Generate Checkout PDF for the complete cart
						try
						{
							final boolean checkoutPdfCreated = bhgeRmaOrderService.generateCheckoutPdfForWs(cartModel);
							if (checkoutPdfCreated)
							{
								cartModel.setCheckoutPdfStatus(PdfStatusType.GENERATED);
								LOG.info(
										"checkout pdf created-RMA_ORDER " + cartModel.getRmaNumber() + " | " + " Status changed-generated");
							}
						}
						catch (final Exception ex)
						{
							LOG.error("Exception : Issue generating Checkout PDF for cart " + cartModel.getCode());
							cartModel.setCheckoutPdfStatus(PdfStatusType.BLANK);
							String soldToCheckout = "";
							if (cartModel.getSoldToForCart() != null)
							{
								soldToCheckout = cartModel.getSoldToForCart().getUid();
							}
							bhgeEmailService.attachmentFailureEmail(cartModel.getRmaNumber(), soldToCheckout,
									"Checkout-Pdf generatiom/submission failed-Order", cartModel.getOrderConfirmationEMail(),
									cartModel.getCode(),cartModel.getCartType(),cartModel.getCommerceType(),cartModel.getUser().getUid());
							ex.printStackTrace();
						}
					}
					else
					{
						LOG.info("RFC RETURNED ERROR");
						if(CollectionUtils.isNotEmpty(cartModel.getEntries())){
							List<AbstractOrderEntryModel> entries = cartModel.getEntries();
							for (AbstractOrderEntryModel entry : entries){
								// Getting the Product
								if(null !=entry.getProduct()){
									LOG.info("Error occured for Product : " +entry.getProduct().getCode());
								}
							}
						}
						cartModel.setRmaNumber("-");
						cartModel.setConnectivityerror(StringUtils.isNotBlank(rfcResult.getErrorNumber()) ? rfcResult.getErrorNumber() : "");
						//submitRegisterRequestService.rfcFailureEmail(cartModel);
						bhgeRmaOrderService.rfcFailureEmail(cartModel);
					}
					LOG.info("oRDER MoDEL FOR CHILD CART WILL HAPPEN");
					final OrderModel orderModel = placeOrder(cartModel);
					LOG.info("oRDER MoDEL FOR CHILD CART - " + cartModel.getCode() + " & RMA Number = " + orderModel.getRmaNumber());
					orderModel.setTotalPrice(cartModel.getTotalPrice());

					if (orderModel.getRmaNumber().equals("-"))
					{
						orderModel.setStatus(OrderStatus.ERROR);
						orderModel.setCheckoutPdfStatus(PdfStatusType.BLANK);
						orderModel.setCoshPdfStatus(PdfStatusType.BLANK);
					}
					modelService.save(orderModel);
					LOG.info("oRDER MoDEL SAVED");
					modelService.refresh(orderModel);

					afterPlaceOrder(cartModel, orderModel);
					LOG.info("CART MODEL REMOVED FROM SESSION");
					orderDataList.add(orderModel);
					//bhgeOrderPopulator.populate(orderModel, orderData);
				}
				//orderDataList.add(orderData);
			}
		}

		return orderDataList;
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
			cartModel.setPurchaseOrderNumber(poModel.getPoNumber());
			cartModel.setEndCustomerRefNum(poModel.getEndCustomerPo());
			cartModel.setPoDocs(poModel.getPoAttachments());
			
		}
		modelService.save(cartModel);
	}
	
	@Override
	public void beforePlaceOrderForWs(final CartModel cartModel)
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

		List<MediaModel> attachments = new ArrayList<>();
		for (final ReturnPOModel poModel : cartModel.getReturnPO())
		{
			cartModel.setPurchaseOrderNumber(poModel.getPoNumber());
			cartModel.setEndCustomerRefNum(poModel.getEndCustomerPo());
			attachments.addAll(poModel.getPoAttachments());
		}
		cartModel.setPoDocs(attachments);
		modelService.save(cartModel);
		Collection<MediaModel> poDocs = cartModel.getPoDocs();
		LOG.info("++++++++++++++++++ PODocs SIZE +++++++++++++++++++++ " + poDocs.size());
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

			if (orderModel != null)
			{
				orderModel.setStatus(OrderStatus.SUBMITTED);
				orderModel.setIsAttachmentMoved(Boolean.FALSE);
				getModelService().save(orderModel);
			}
			//			getModelService().refresh(orderModel);
		}

		// Retrieve a session cart.
		//		bhgeCartService.getSessionCart();
	}

	@Override
	protected OrderModel placeOrder(final CartModel cartModel) throws InvalidCartException
	{
		final CommerceCheckoutParameter parameter = createCommerceCheckoutParameter(cartModel, true);
		parameter.setSalesApplication(SalesApplication.WEB);
		final OrderModel order = getCommerceCheckoutService().placeOrder(parameter).getOrder();
		order.setReqHeaderDeliveryDate(cartModel.getReqHeaderDeliveryDate());
		order.setRmaNumber(cartModel.getRmaNumber());
		order.setRmaSapStatus(cartModel.getRmaSapStatus());
		order.setPoDocs(cartModel.getPoDocs());
		order.setReturnPO(cartModel.getReturnPO());
		//order.setCoshPdfStatus(cartModel.getCoshPdfStatus());
		if (order.getCommerceType().getCode() == "RETURNS") {
			if (cartModel.getEntries() != null) {
				AbstractOrderEntryModel cartEntry = null;
				AbstractOrderEntryModel orderEntry = null;
				for (final AbstractOrderEntryModel cartEntry1 : cartModel.getEntries()) {
					LOG.info("cart entryNumber" + cartEntry1.getEntryNumber());
				}
				for (final AbstractOrderEntryModel orderEntry1 : order.getEntries()) {
					LOG.info("Order entryNumber" + orderEntry1.getEntryNumber());
				}
				for (int i = 0; i < cartModel.getEntries().size(); i++) {
					cartEntry = cartModel.getEntries().get(i);
					orderEntry = order.getEntries().get(i);
					LOG.info("placeOrder:: BhgeServiceOfferings1: " + cartEntry.getBhgeServiceOfferings() + "cart entryNumber" + cartEntry.getEntryNumber() + "Order entryNumber" + orderEntry.getEntryNumber());



					/*
					 * final AbstractOrderEntryModel newEntry = getModelService().clone(entry); final String
					 * returnToSiteName = newEntry.getReturnToSiteName();
					 *
					 * final AbstractOrderEntryModel cartEntry = getCartEntry(parentCart, newEntry.getEntryNumber());
					 */
					/*
					 * final BHGEAdditionalInfoData additionalInfoData = new BHGEAdditionalInfoData(); if
					 * (Objects.nonNull(cartEntry.getBhgeAdditionalInfo())) {
					 * bhgeAdditionalInfoReversePopulator.populate(cartEntry.getBhgeAdditionalInfo(), additionalInfoData);
					 *
					 * if (Objects.nonNull(additionalInfoData)) { setAdditionalInfo(newEntry, additionalInfoData); } }
					 */
					/*
					 * final List<String> serialNoList = new ArrayList<String>();
					 * cartEntry.getBhgeRmaEquipSerialNumber().forEach(model -> {
					 * serialNoList.add(model.getSerialNumber()); }); if (Objects.nonNull(serialNoList)) {
					 * setSerialNoList(newEntry, serialNoList); }
					 */
					LOG.info("placeOrder:: BhgeServiceOfferings2: " + cartEntry.getBhgeServiceOfferings());
					if (Objects.nonNull(cartEntry.getBhgeServiceOfferings())) {
						LOG.info("placeOrder:: BhgeServiceOfferings3: " + cartEntry.getBhgeServiceOfferings());
						final List<BHGEServiceOfferingsData> offeringList = new ArrayList<BHGEServiceOfferingsData>();
						cartEntry.getBhgeServiceOfferings().forEach(OfferingModel -> {
							LOG.info("placeOrder :: OfferingCode: " + OfferingModel.getOfferingCode());
							final BHGEServiceOfferingsData offeringData = new BHGEServiceOfferingsData();
							bhgeServiceOfferingReversePopulator.populate(OfferingModel, offeringData);
							offeringList.add(offeringData);
						});
						if (Objects.nonNull(offeringList)) {
							LOG.info("placeOrder :: offeringList: " + offeringList.size());
							setServiceOfferingForOrder(orderEntry, offeringList);
						}
					}
					final BHGEAdditionalInfoData additionalInfoData = new BHGEAdditionalInfoData();
					if (Objects.nonNull(cartEntry.getBhgeAdditionalInfo())) {
						bhgeAdditionalInfoReversePopulator.populate(cartEntry.getBhgeAdditionalInfo(), additionalInfoData);

						if (Objects.nonNull(additionalInfoData)) {
							setAdditionalInfo(orderEntry, additionalInfoData);
						}
					}
					final List<String> serialNoList = new ArrayList<String>();
					cartEntry.getBhgeRmaEquipSerialNumber().forEach(model -> {
						serialNoList.add(model.getSerialNumber());
					});
					if (Objects.nonNull(serialNoList)) {
						setSerialNoList(orderEntry, serialNoList);
					}
					modelService.save(orderEntry);
				}
			}
		}
			modelService.save(order);
			return order;

	}

	@Override
	protected CommerceCheckoutParameter createCommerceCheckoutParameter(final CartModel cart, final boolean enableHooks)
	{
		final CommerceCheckoutParameter parameter = new CommerceCheckoutParameter();
		parameter.setEnableHooks(enableHooks);
		parameter.setCart(cart);
		return parameter;
	}

	private List<CartModel> doSplit()
	{
		final CartModel parentCart = bhgeCartService.getSessionCart();
		final List<CartModel> childCarts = new ArrayList<CartModel>();
		final Map<String, List<AbstractOrderEntryModel>> childCartsWithOrderTypes = new HashMap<String, List<AbstractOrderEntryModel>>();
		final int counter = 1;
		if (parentCart.getEntries() != null && parentCart.getEntries().size() > 1)
		{
			for (final AbstractOrderEntryModel cartEntry : parentCart.getEntries())
			{
				final AbstractOrderEntryModel newEntry = getModelService().clone(cartEntry);
				final String returnToSiteName = newEntry.getReturnToSiteName();

				//final AbstractOrderEntryModel cartEntry = getCartEntry(parentCart, newEntry.getEntryNumber());
				final BHGEAdditionalInfoData additionalInfoData = new BHGEAdditionalInfoData();
				if (Objects.nonNull(cartEntry.getBhgeAdditionalInfo()))
				{
					bhgeAdditionalInfoReversePopulator.populate(cartEntry.getBhgeAdditionalInfo(), additionalInfoData);

					if (Objects.nonNull(additionalInfoData))
					{
						setAdditionalInfo(newEntry, additionalInfoData);
					}
				}
				final List<String> serialNoList = new ArrayList<String>();
				cartEntry.getBhgeRmaEquipSerialNumber().forEach(model -> {
					serialNoList.add(model.getSerialNumber());
				});
				if (Objects.nonNull(serialNoList))
				{
					setSerialNoList(newEntry, serialNoList);
				}
				if (Objects.nonNull(cartEntry.getBhgeServiceOfferings()))
				{
					final List<BHGEServiceOfferingsData> offeringList = new ArrayList<BHGEServiceOfferingsData>();
					cartEntry.getBhgeServiceOfferings().forEach(OfferingModel -> {
						final BHGEServiceOfferingsData offeringData = new BHGEServiceOfferingsData();
						bhgeServiceOfferingReversePopulator.populate(OfferingModel, offeringData);
						offeringList.add(offeringData);
					});
					if (Objects.nonNull(offeringList))
					{
						setServiceOffering(newEntry, offeringList);

						String rmaOfferings = "";
						LOG.info("==================================== OFFERING DATA ==========================================");
						//final List<String> offerList = new ArrayList();

						/*
						 * for (BHGEServiceOfferingsModel s : entryModel.getBhgeServiceOfferings()) { rmaOfferings =
						 * s.getOfferingType().getType() + " ,"; } if (rmaOfferings != null && rmaOfferings.length() > 0 &&
						 * rmaOfferings.charAt(rmaOfferings.length() - 1) == ',') { rmaOfferings = rmaOfferings.substring(0,
						 * rmaOfferings.length() - 1); entry.setRmaOfferings(rmaOfferings); } }
						 */

						if (cartEntry.getBhgeServiceOfferings() != null)
						{
							final Iterator<BHGEServiceOfferingsModel> itr = cartEntry.getBhgeServiceOfferings().iterator();

							while (itr.hasNext())
							{
								final BHGEServiceOfferingsModel offer = itr.next();

								rmaOfferings = rmaOfferings + offer.getOfferingText() + " ,";
								LOG.info(
										"==================================== OFFERING DATA 1 ========================================== "
												+ rmaOfferings);
							}
							if (rmaOfferings != null && rmaOfferings.length() > 0
									&& rmaOfferings.charAt(rmaOfferings.length() - 1) == ',')
							{
								rmaOfferings = rmaOfferings.substring(0, rmaOfferings.length() - 1);
								LOG.info(
										"==================================== OFFERING DATA 2 ========================================== "
												+ rmaOfferings);
								newEntry.setOfferingsListString(rmaOfferings);
							}
						}

						else
						{
							LOG.info("==================================== OFFERING DATA 3 ========================================== ");
							newEntry.setOfferingsListString("");
						}
					}
				}

				newEntry.setTotalReturnPrice(cartEntry.getTotalReturnPrice());
				newEntry.setUnitPrice(cartEntry.getUnitPrice());
				newEntry.setSilverClause(cartEntry.getSilverClause());
				newEntry.setSilverClausePricePercentage(cartEntry.getSilverClausePricePercentage());
				newEntry.setSilverClausePrice(cartEntry.getSilverClausePrice());

				newEntry.setQuantity(cartEntry.getQuantity());

				if (MapUtils.isNotEmpty(childCartsWithOrderTypes) && childCartsWithOrderTypes.containsKey(returnToSiteName))
				{
					childCartsWithOrderTypes.get(returnToSiteName).add(newEntry);
				}
				else
				{
					//Create new child cart and add entry to it
					final List<AbstractOrderEntryModel> entries = new ArrayList<AbstractOrderEntryModel>();
					childCartsWithOrderTypes.put(returnToSiteName, entries);
					childCartsWithOrderTypes.get(returnToSiteName).add(newEntry);
				}


			}
			if (MapUtils.isNotEmpty(childCartsWithOrderTypes) && parentCart != null)
			{

				int cartCounter = 0;

				for (final Map.Entry<String, List<AbstractOrderEntryModel>> entry : childCartsWithOrderTypes.entrySet())
				{
					/*
					 * CartModel cart= getCartService().clone(getTypeService().getComposedTypeForClass(CartModel.class),
					 * getTypeService().getComposedTypeForClass(CartEntryModel.class), parentCart,
					 * getGuidKeyGenerator().generate().toString());
					 */
					final CartModel cart = createNewChildCart(parentCart, cartCounter, entry.getKey());

					setEntriesForChildCarts(entry.getValue(), cart);
					childCarts.add(cart);
					cartCounter++;
				}
			}
		}
		else
		{
			if (parentCart.getEntries() != null)
			{

				for (final AbstractOrderEntryModel entry : parentCart.getEntries())
				{
					String rmaOfferings = "";
					LOG.info("==================================== OFFERING DATA ==========================================");
					//final List<String> offerList = new ArrayList();

					/*
					 * for (BHGEServiceOfferingsModel s : entryModel.getBhgeServiceOfferings()) { rmaOfferings =
					 * s.getOfferingType().getType() + " ,"; } if (rmaOfferings != null && rmaOfferings.length() > 0 &&
					 * rmaOfferings.charAt(rmaOfferings.length() - 1) == ',') { rmaOfferings = rmaOfferings.substring(0,
					 * rmaOfferings.length() - 1); entry.setRmaOfferings(rmaOfferings); } }
					 */

					if (entry.getBhgeServiceOfferings() != null)
					{
						final Iterator<BHGEServiceOfferingsModel> itr = entry.getBhgeServiceOfferings().iterator();

						while (itr.hasNext())
						{
							final BHGEServiceOfferingsModel offer = itr.next();

							rmaOfferings = rmaOfferings + offer.getOfferingText() + " ,";
							LOG.info("==================================== OFFERING DATA 1 ========================================== "
									+ rmaOfferings);
						}
						if (rmaOfferings != null && rmaOfferings.length() > 0 && rmaOfferings.charAt(rmaOfferings.length() - 1) == ',')
						{
							rmaOfferings = rmaOfferings.substring(0, rmaOfferings.length() - 1);
							LOG.info("==================================== OFFERING DATA 2 ========================================== "
									+ rmaOfferings);
							entry.setOfferingsListString(rmaOfferings);
						}
					}

					else
					{
						LOG.info("==================================== OFFERING DATA 3 ========================================== ");
						entry.setOfferingsListString("");
					}
				}
			}
			childCarts.add(parentCart);
		}

		return childCarts;

	}
	
	private List<CartModel> doSplitForWs(CartModel parentCart)
	{
		//final CartModel parentCart = bhgeCartService.getSessionCart();
		final List<CartModel> childCarts = new ArrayList<CartModel>();
		final Map<String, List<AbstractOrderEntryModel>> childCartsWithOrderTypes = new HashMap<String, List<AbstractOrderEntryModel>>();
		final int counter = 1;
		if (parentCart.getEntries() != null && parentCart.getEntries().size() > 1)
		{
			for (final AbstractOrderEntryModel cartEntry : parentCart.getEntries())
			{
				final AbstractOrderEntryModel newEntry = getModelService().clone(cartEntry);
				final String returnToSiteName = newEntry.getReturnToSiteName();

				//final AbstractOrderEntryModel cartEntry = getCartEntry(parentCart, newEntry.getEntryNumber());
				final BHGEAdditionalInfoData additionalInfoData = new BHGEAdditionalInfoData();
				if (Objects.nonNull(cartEntry.getBhgeAdditionalInfo()))
				{
					bhgeAdditionalInfoReversePopulator.populate(cartEntry.getBhgeAdditionalInfo(), additionalInfoData);

					if (Objects.nonNull(additionalInfoData))
					{
						setAdditionalInfo(newEntry, additionalInfoData);
					}
				}
				final List<String> serialNoList = new ArrayList<String>();
				cartEntry.getBhgeRmaEquipSerialNumber().forEach(model -> {
					serialNoList.add(model.getSerialNumber());
				});
				if (Objects.nonNull(serialNoList))
				{
					setSerialNoList(newEntry, serialNoList);
				}
				if (Objects.nonNull(cartEntry.getBhgeServiceOfferings()))
				{
					final List<BHGEServiceOfferingsData> offeringList = new ArrayList<BHGEServiceOfferingsData>();
					cartEntry.getBhgeServiceOfferings().forEach(OfferingModel -> {
						final BHGEServiceOfferingsData offeringData = new BHGEServiceOfferingsData();
						bhgeServiceOfferingReversePopulator.populate(OfferingModel, offeringData);
						offeringList.add(offeringData);
					});
					if (Objects.nonNull(offeringList))
					{
						setServiceOffering(newEntry, offeringList);

						String rmaOfferings = "";
						LOG.info("==================================== OFFERING DATA ==========================================");
						//final List<String> offerList = new ArrayList();

						/*
						 * for (BHGEServiceOfferingsModel s : entryModel.getBhgeServiceOfferings()) { rmaOfferings =
						 * s.getOfferingType().getType() + " ,"; } if (rmaOfferings != null && rmaOfferings.length() > 0 &&
						 * rmaOfferings.charAt(rmaOfferings.length() - 1) == ',') { rmaOfferings = rmaOfferings.substring(0,
						 * rmaOfferings.length() - 1); entry.setRmaOfferings(rmaOfferings); } }
						 */

						if (cartEntry.getBhgeServiceOfferings() != null)
						{
							final Iterator<BHGEServiceOfferingsModel> itr = cartEntry.getBhgeServiceOfferings().iterator();

							while (itr.hasNext())
							{
								final BHGEServiceOfferingsModel offer = itr.next();

								rmaOfferings = rmaOfferings + offer.getOfferingText() + " ,";
								LOG.info(
										"==================================== OFFERING DATA 1 ========================================== "
												+ rmaOfferings);
							}
							if (rmaOfferings != null && rmaOfferings.length() > 0
									&& rmaOfferings.charAt(rmaOfferings.length() - 1) == ',')
							{
								rmaOfferings = rmaOfferings.substring(0, rmaOfferings.length() - 1);
								LOG.info(
										"==================================== OFFERING DATA 2 ========================================== "
												+ rmaOfferings);
								newEntry.setOfferingsListString(rmaOfferings);
							}
						}

						else
						{
							LOG.info("==================================== OFFERING DATA 3 ========================================== ");
							newEntry.setOfferingsListString("");
						}
					}
				}

				newEntry.setTotalReturnPrice(cartEntry.getTotalReturnPrice());
				newEntry.setUnitPrice(cartEntry.getUnitPrice());
				newEntry.setSilverClause(cartEntry.getSilverClause());
				newEntry.setSilverClausePricePercentage(cartEntry.getSilverClausePricePercentage());
				newEntry.setSilverClausePrice(cartEntry.getSilverClausePrice());

				newEntry.setQuantity(cartEntry.getQuantity());

				if (MapUtils.isNotEmpty(childCartsWithOrderTypes) && childCartsWithOrderTypes.containsKey(returnToSiteName))
				{
					childCartsWithOrderTypes.get(returnToSiteName).add(newEntry);
				}
				else
				{
					//Create new child cart and add entry to it
					final List<AbstractOrderEntryModel> entries = new ArrayList<AbstractOrderEntryModel>();
					childCartsWithOrderTypes.put(returnToSiteName, entries);
					childCartsWithOrderTypes.get(returnToSiteName).add(newEntry);
				}


			}
			if (MapUtils.isNotEmpty(childCartsWithOrderTypes) && parentCart != null)
			{

				int cartCounter = 0;

				for (final Map.Entry<String, List<AbstractOrderEntryModel>> entry : childCartsWithOrderTypes.entrySet())
				{
					/*
					 * CartModel cart= getCartService().clone(getTypeService().getComposedTypeForClass(CartModel.class),
					 * getTypeService().getComposedTypeForClass(CartEntryModel.class), parentCart,
					 * getGuidKeyGenerator().generate().toString());
					 */
					final CartModel cart = createNewChildCart(parentCart, cartCounter, entry.getKey());

					setEntriesForChildCarts(entry.getValue(), cart);
					childCarts.add(cart);
					cartCounter++;
				}
			}
		}
		else
		{
			if (parentCart.getEntries() != null)
			{

				for (final AbstractOrderEntryModel entry : parentCart.getEntries())
				{
					String rmaOfferings = "";
					LOG.info("==================================== OFFERING DATA ==========================================");
					//final List<String> offerList = new ArrayList();

					/*
					 * for (BHGEServiceOfferingsModel s : entryModel.getBhgeServiceOfferings()) { rmaOfferings =
					 * s.getOfferingType().getType() + " ,"; } if (rmaOfferings != null && rmaOfferings.length() > 0 &&
					 * rmaOfferings.charAt(rmaOfferings.length() - 1) == ',') { rmaOfferings = rmaOfferings.substring(0,
					 * rmaOfferings.length() - 1); entry.setRmaOfferings(rmaOfferings); } }
					 */

					if (entry.getBhgeServiceOfferings() != null)
					{
						final Iterator<BHGEServiceOfferingsModel> itr = entry.getBhgeServiceOfferings().iterator();

						while (itr.hasNext())
						{
							final BHGEServiceOfferingsModel offer = itr.next();

							rmaOfferings = rmaOfferings + offer.getOfferingText() + " ,";
							LOG.info("==================================== OFFERING DATA 1 ========================================== "
									+ rmaOfferings);
						}
						if (rmaOfferings != null && rmaOfferings.length() > 0 && rmaOfferings.charAt(rmaOfferings.length() - 1) == ',')
						{
							rmaOfferings = rmaOfferings.substring(0, rmaOfferings.length() - 1);
							LOG.info("==================================== OFFERING DATA 2 ========================================== "
									+ rmaOfferings);
							entry.setOfferingsListString(rmaOfferings);
						}
					}

					else
					{
						LOG.info("==================================== OFFERING DATA 3 ========================================== ");
						entry.setOfferingsListString("");
					}
				}
			}
			childCarts.add(parentCart);
		}

		return childCarts;

	}

	private void setEntriesForChildCarts(final List<AbstractOrderEntryModel> entries, final CartModel cart)
	{
		modelService.save(cart);
		int entryCount = 0;
		for (final AbstractOrderEntryModel entry : entries)
		{
			entry.setEntryNumber(Integer.valueOf(entryCount));
			entry.setOrder(cart);
			modelService.save(entry);
			entryCount++;
		}


		//cart.getEntries().removeAll(cart.getEntries());
		cart.setEntries(entries);
		modelService.save(cart);

		totalPriceforCart = 0.0;
		priceFlag = false;
		cart.getEntries().forEach(entry -> {
			totalPriceforCart = totalPriceforCart + entry.getTotalReturnPrice();
			if (entry.getTotalReturnPrice() == 0.0)
			{
				priceFlag = true;
			}
		});
		if (priceFlag)
		{
			cart.setTotalReturnPrice(new Double(0.0));
		}
		else
		{
			cart.setTotalReturnPrice(new Double(totalPriceforCart));
		}
		final List<RmaReturnCartData> returnList = new ArrayList<>();
		for (final AbstractOrderEntryModel entry : cart.getEntries())
		{
			final RmaReturnCartData obj = new RmaReturnCartData();
			obj.setTotalPrice(populateDiscPrice(entry.getTotalReturnPrice(), cart.getCurrency()));
			obj.setTotalDiscount(populateDiscPrice(entry.getSilverClause(), cart.getCurrency()));
			returnList.add(obj);
		}

		Double totalCartPrice = 0.0;
		Double totalDiscount = 0.0;
		for (final RmaReturnCartData data : returnList)
		{
			if (data.getTotalPrice() != null && data.getTotalPrice().getValue() != null)
			{
				totalCartPrice = totalCartPrice + data.getTotalPrice().getValue().doubleValue();
			}
			if (data.getTotalDiscount() != null && data.getTotalDiscount().getValue() != null)
			{
				totalDiscount = totalDiscount + data.getTotalDiscount().getValue().doubleValue();
			}
		}
		//cart.setYourPriceDiscount(new Double(totalDiscount));

		modelService.save(cart);
	}

	protected PriceData populateDiscPrice(final Double price, final CurrencyModel currency)
	{
		final double priceValue = price != null ? price.doubleValue() : 0d;
		return priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(priceValue), currency);
	}


	private CartModel createNewChildCart(final CartModel parentCart, final int counter, final String returnlocation)
	{
		//SDS changes to be done here.
		final CartModel childCart = getModelService().clone(parentCart);
		try
		{
			LOG.info("Split Cart Clean up START - " + parentCart.getCode() + BhgeCoreConstants.HYPHEN + counter);
			getModelService()
					.remove(getCartByCode(parentCart.getCode() + BhgeCoreConstants.HYPHEN + counter, userService.getCurrentUser()));
			LOG.info("Split Cart Clean up CLOSE - " + parentCart.getCode() + BhgeCoreConstants.HYPHEN + counter);
		}
		catch (final Exception exc)
		{
			LOG.info("Split Cart Clean up FAILED - " + parentCart.getCode() + BhgeCoreConstants.HYPHEN + counter);
			exc.printStackTrace();
		}
		childCart.setCode(parentCart.getCode() + BhgeCoreConstants.HYPHEN + counter);
		childCart.setReqHeaderDeliveryDate(parentCart.getReqHeaderDeliveryDate());
		childCart.getEntries().removeAll(childCart.getEntries());
		//Split logic of PO
		final List<ReturnPOModel> retrunPoList = parentCart.getReturnPO();

		if (retrunPoList != null && retrunPoList.size() > 0)
		{

			final List<ReturnPOModel> poList = new ArrayList<>();
			for (final ReturnPOModel poModel : retrunPoList)
			{
				LOG.info("Split PO Fetch - poModel.getReturnLocation(): " + poModel.getReturnLocation() + "| poModel.getReturnLocation().length() "+poModel.getReturnLocation().length()+ " | returnlocation: " + returnlocation + " | poModel.getPoNumber(): " + poModel.getPoNumber()
						+ " | " + poModel.getEndCustomerPo() +"attachments list : "+poModel.getPoAttachments().size());
				if ((poModel.getReturnLocation() != null && !poModel.getReturnLocation().contains("null")) && (returnlocation != null && !returnlocation.contains("null")))
				{
					LOG.info("Split PO Fetch - Condition1");
					try
					{
						if(returnlocation.contains("-") && poModel.getReturnLocation().contains("-"))
						{
							if (poModel.getReturnLocation().substring(poModel.getReturnLocation().lastIndexOf('-') + 1)
									.equalsIgnoreCase(returnlocation.split("-")[1]))
							{
								poList.add(poModel);
								childCart.setPoDocs(poModel.getPoAttachments());
								LOG.info("================== Condition 1 PO Attachments list size  : =============="+poModel.getPoAttachments().size()+" ==== poModel.getReturnLocation().length() ==== "+poModel.getReturnLocation().length());
							}
						}
						else if(poModel.getReturnLocation().equalsIgnoreCase(returnlocation))
						{
							poList.add(poModel);
							childCart.setPoDocs(poModel.getPoAttachments());
							LOG.info("================== Condition 1 else PO Attachments list size  : =============="+poModel.getPoAttachments().size()+" ==== poModel.getReturnLocation().length() ==== "+poModel.getReturnLocation().length());
						}
					}
					catch (final Exception exc)
					{
						LOG.info("Split PO Fail - " + poModel.getReturnLocation() + " | " + returnlocation);
						exc.printStackTrace();
						/*
						 * poList.add(poModel); childCart.setPoDocs(poModel.getPoAttachments()); //
						 */
					}
				}
				else if (poModel.getReturnLocation() == null && returnlocation == null)
				{
					LOG.info("Split PO Fetch - Condition2");
					try
					{
						poList.add(poModel);
						childCart.setPoDocs(poModel.getPoAttachments());
						LOG.info("================== Condition 2 PO Attachments list size  : =============="+poModel.getPoAttachments().size());
					}
					catch (final Exception exc)
					{
						LOG.info("Split PO Fail -Condition2 " + poModel.getReturnLocation() + " | " + returnlocation);
						exc.printStackTrace();
					}
				}
				else if ((poModel.getReturnLocation() != null && (poModel.getReturnLocation().contains("null-") || poModel.getReturnLocation().contains("null")))
						&& (returnlocation == null || returnlocation.contains("null")))
				{
					LOG.info("Split PO Fetch - Condition3");
					try
					{
						poList.add(poModel);
						childCart.setPoDocs(poModel.getPoAttachments());
						LOG.info("================== Condition 3 PO Attachments list size  : =============="+poModel.getPoAttachments().size());
					}
					catch (final Exception exc)
					{
						LOG.info("Split PO Fail -Condition3 " + poModel.getReturnLocation() + " | " + returnlocation);
						exc.printStackTrace();
					}
				}
			}
			childCart.setIsAttachmentMoved(false);
			childCart.setReturnPO(poList);
		}
		getModelService().save(childCart);
		/*
		 * final CommerceCartParameter parameter = new CommerceCartParameter(); parameter.setEnableHooks(true);
		 * parameter.setCart(childCart); getCommerceCartService().removeAllEntries(parameter);
		 */
		getModelService().refresh(childCart);
		return childCart;
	}



	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.rma.BHGERmaFormFacade#uploadOrderAttachment(org.springframework.web.multipart.MultipartFile)
	 */
	@Override
	public Integer uploadAdditionalFile(final MultipartFile file, final Integer cartEntryNumber)
	{
		switchCart();
		final CartModel cartModel = bhgeCartService.getSessionCart();
		final List<AbstractOrderEntryModel> orderEntries = new ArrayList<>();
		BHGEAdditionalInfoModel additionalInfoModel = null;
		final List<MediaModel> additioanalAttachmentList = new ArrayList<>();
		MediaModel mediaModel = null;
		try
		{
			if ((null != file) && ((!file.isEmpty())))
			{

				mediaModel = bhgeRmaFormService.uploadAdditionalFile(file);
				mediaModel.setSize(file.getSize());
				modelService.save(mediaModel);
				if (null != mediaModel)
				{
					final String name = mediaModel.getRealFileName();
				}
			}

			AbstractOrderEntryModel cartEntry = cartEntry = getCartEntry(cartModel, cartEntryNumber);
			if (Objects.nonNull(cartEntry.getBhgeAdditionalInfo()))
			{
				additionalInfoModel = cartEntry.getBhgeAdditionalInfo();
			}
			else
			{
				additionalInfoModel = modelService.create(BHGEAdditionalInfoModel.class);
				cartEntry.setBhgeAdditionalInfo(additionalInfoModel);
			}
			if (Objects.nonNull(additionalInfoModel.getFormAttachments()))
			{
				additioanalAttachmentList.addAll(additionalInfoModel.getFormAttachments());
				additioanalAttachmentList.add(mediaModel);
				additionalInfoModel.setFormAttachments(additioanalAttachmentList);
				modelService.save(additionalInfoModel);
				return cartEntry.getEntryNumber();
			}
			else
			{
				final List<MediaModel> mediaList = new ArrayList<>();
				mediaList.add(mediaModel);
				additionalInfoModel.setFormAttachments(mediaList);
				cartEntry.setBhgeAdditionalInfo(additionalInfoModel);
			}
			if (Objects.isNull(cartEntry.getProduct()))
			{
				final String partNumberVal = cartEntry.getPartNumber() != null ? cartEntry.getPartNumber().trim() : null;
				final GEEdgeProductModel geProductModel = (GEEdgeProductModel) getProduct(partNumberVal);
				if (Objects.isNull(geProductModel))
				{
					return -1;
				}
				cartEntry.setProduct(geProductModel);
				cartEntry.setUnit(geProductModel.getUnit());
				if (geProductModel.getProductSpecs() != null && StringUtils.isBlank(cartEntry.getProductDetails()))
				{
					cartEntry.setProductDetails(geProductModel.getProductSpecs());
				}
				/*
				 * if (rmaFormData.getProductDetails() != null) {
				 * cartEntry.setProductDetails(rmaFormData.getProductDetails()); }
				 */
				cartEntry.setQuantity(1l);
				if (null != geProductModel.getProductType())
				{
					cartModel.setCartType(bhgeCartService.getCartTypeForProductType(geProductModel.getProductType()));
				}
			}
			/*
			 * if (cartModel.getEntries().size() < cartEntry.getEntryNumber()) {
			 * cartEntry.setOrder(cartModel); orderEntries.addAll(cartModel.getEntries());
			 * orderEntries.add(cartEntry); cartModel.setEntries(orderEntries); }
			 */
			//cartEntry.getBhgeAdditionalInfo().getFormAttachments();
			final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
			final CurrencyModel currency = baseStore.getDefaultCurrency();
			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			final B2BUnitModel defaultSoldToUnit = currentUser.getDefaultB2BUnit();
			cartModel.setStore(baseStore);
			if (null != defaultSoldToUnit.getCurrency())
			{
			cartModel.setCurrency(defaultSoldToUnit.getCurrency());
			}
			LOG.info("Cart Currency in uploadAdditionalFile : " + cartModel.getCurrency());
			cartModel.setUser(userService.getCurrentUser());
			cartModel.setDate(new Date());
			cartModel.setCommerceType(BHGERMACommerceType.RETURNS);
			modelService.save(cartEntry);
			bhgeRmaFormService.saveRma(cartModel);
			return cartEntry.getEntryNumber();
		}
		catch (final Exception e)
		{
			LOG.error("Error in uploading attachment to the Rma from." + ExceptionUtils.getStackTrace(e));
		}
		return null;
	}


	@Override
	public String uploadAdditionalFileForCart(final MultipartFile file, final Integer flag, final String returnLocation)
	{
		//switchCart
		final CartModel cartModel = bhgeCartService.getSessionCart();

		final List<ReturnPOModel> retrunPoList = cartModel.getReturnPO();
		boolean flag1 = true;
		final List<MediaModel> additioanalAttachmentList = new ArrayList<>();
		MediaModel mediaModel = null;
		try
		{
			if ((null != file) && ((!file.isEmpty())))
			{

				mediaModel = bhgeRmaFormService.uploadAdditionalFile(file);
				modelService.save(mediaModel);
				if (null != mediaModel)
				{
					final String name = mediaModel.getRealFileName();
				}
			}


			if (retrunPoList != null && retrunPoList.size() > 0)
			{



				for (final ReturnPOModel poModel : retrunPoList)
				{
					if (poModel.getReturnLocation() != null && returnLocation != null)
					{
						if (poModel.getReturnLocation().equalsIgnoreCase(returnLocation))
						{
							if (poModel.getPoAttachments() != null)
							{
								additioanalAttachmentList.addAll(poModel.getPoAttachments());
								additioanalAttachmentList.add(mediaModel);
								poModel.setPoAttachments(additioanalAttachmentList);
								modelService.save(poModel);
								modelService.save(cartModel);

								flag1 = false;
							}
							else
							{
								final List<MediaModel> mediaList = new ArrayList<>();
								mediaList.add(mediaModel);
								poModel.setPoAttachments(mediaList);
								modelService.save(poModel);
								modelService.save(cartModel);
							}
						}
					}
				}

				if (flag1 == true)
				{
					final List<ReturnPOModel> poList = new ArrayList<>();
					final ReturnPOModel poModel = modelService.create(ReturnPOModel.class);
					poModel.setReturnLocation(returnLocation);

					final List<MediaModel> mediaList = new ArrayList<>();
					mediaList.add(mediaModel);
					poModel.setPoAttachments(mediaList);
					modelService.save(poModel);

					poList.addAll(cartModel.getReturnPO());
					poList.add(poModel);
					cartModel.setIsAttachmentMoved(false);
					cartModel.setReturnPO(poList);
					modelService.save(cartModel);
				}
			}
			else
			{
				final List<ReturnPOModel> poList = new ArrayList<>();
				final ReturnPOModel poModel = modelService.create(ReturnPOModel.class);
				poModel.setReturnLocation(returnLocation);

				final List<MediaModel> mediaList = new ArrayList<>();
				mediaList.add(mediaModel);
				poModel.setPoAttachments(mediaList);

				modelService.save(poModel);
				poList.add(poModel);
				cartModel.setIsAttachmentMoved(false);
				cartModel.setReturnPO(poList);
				modelService.save(cartModel);
			}

		}
		catch (final Exception e)
		{
			LOG.error("Error in uploading attachment to the Cart" + ExceptionUtils.getStackTrace(e));
			return "error";
		}
		return "success";
	}





	@Override
	public String uploadAdditionalFileForHazardForm(final MultipartFile file)
	{
		switchCart();
		final CartModel cartModel = bhgeCartService.getSessionCart();

		final BHGEHazardousInfoModel hazardInfoModel = cartModel.getBhgeHazardousInfo();
		final boolean flag1 = true;
		final List<MediaModel> additionalAttachmentList = new ArrayList<>();
		MediaModel mediaModel = null;
		try
		{
			if ((null != file) && ((!file.isEmpty())))
			{

				mediaModel = bhgeRmaFormService.uploadAdditionalFile(file);
				modelService.save(mediaModel);
				if (null != mediaModel)
				{
					final String name = mediaModel.getRealFileName();
				}
			}

			if (hazardInfoModel != null)
			{

				if (hazardInfoModel.getHazardformAttachments() != null)
				{
					additionalAttachmentList.addAll(hazardInfoModel.getHazardformAttachments());
					additionalAttachmentList.add(mediaModel);
					hazardInfoModel.setHazardformAttachments(additionalAttachmentList);
					modelService.save(hazardInfoModel);
					modelService.save(cartModel);
				}
				else
				{
					final List<MediaModel> mediaList = new ArrayList<>();
					mediaList.add(mediaModel);
					hazardInfoModel.setHazardformAttachments(mediaList);
					modelService.save(hazardInfoModel);
					modelService.save(cartModel);
				}

			}

			else
			{
				final BHGEHazardousInfoModel hazardModel = modelService.create(BHGEHazardousInfoModel.class);
				final List<MediaModel> mediaList = new ArrayList<>();
				mediaList.add(mediaModel);
				hazardModel.setHazardformAttachments(mediaList);

				modelService.save(hazardModel);
				cartModel.setBhgeHazardousInfo(hazardModel);
				modelService.save(cartModel);
			}

		}
		catch (final Exception e)
		{
			LOG.error("Error in uploading attachment to the HazardForm" + ExceptionUtils.getStackTrace(e));
			return "error";
		}
		return "success";
	}









	public Map<Map<String, String>, Map<String, String>> mockService(final OrderModel orderModel)
	{
		final Map<Map<String, String>, Map<String, String>> responseList = new HashMap<>();
		final String NOTIF_TYPE = "Z6";
		final String USTAXEXEMPT_ID = "US";
		final String CUSTOMER = "0000110356";//"0000108864";
		final String PRIORITY_REQ = "";
		final String SALES_AREA_ORG = "1800";
		final String SHIPCONTACT1NAME = "";
		final String REPAIR_PLANT = "6180";
		final String SHIPCONTACT1NUM = "";
		final String SHIP_TO_PARTY = "";
		final String SHIPCONTACT2NAME = "";
		final String BILL_TO_PARTY = "";
		final String SHIPCONTACT2NUM = "";
		final String DIVISION = "GE";
		final String DIST_CHANNEL = "GE";
		//final String ISGOVERNMENT = "Y";
		final String CARRIERNAME = "";
		final String SHIPPING_METHOD = "";
		final String USERCOMMENTS = "";
		final String SHIP_TO_ADDR = "";
		final String MATERIAL = "000-018-9HL";
		final String LINE_ITEM = "0001";
		final String QUANTITY = "10000";
		final String EQUIPMENT_NUM = "";
		final String SERIAL_NUM = "";
		final String OFFERINGS = "RE1";
		final String PRODUCT_DETAILS = "PRODUCT DETAILS";
		final String PROBLEM_DESCRIPTION = "";
		final String LINE_NOTES = "";
		final String OFFERING_TEXT = "";
		final String ISACCESSORY_PRESENT = "";
		final String ACCESSORIES_NOTES = "";
		final String PRICE_RANGE = "";
		final String CHARGES_EXPEDITE = "";
		final Map<String, String> headerItemList = new HashMap<>();
		headerItemList.put("NOTIF_TYPE", NOTIF_TYPE);
		//headerItemList.put("USTAXEXEMPT_ID", USTAXEXEMPT_ID);
		headerItemList.put("CUSTOMER", CUSTOMER);
		//headerItemList.put("PRIORITY_REQ", PRIORITY_REQ);
		headerItemList.put("SALES_AREA_ORG", SALES_AREA_ORG);
		headerItemList.put("DIVISION", DIVISION);
		headerItemList.put("DIST_CHANNEL", DIST_CHANNEL);
		//		headerItemList.put("SHIPCONTACT1NAME", SHIPCONTACT1NAME);
		//		headerItemList.put("SHIP_TO_PARTY", SHIP_TO_PARTY);
		//		headerItemList.put("SHIPCONTACT2NAME", SHIPCONTACT2NAME);
		//		headerItemList.put("BILL_TO_PARTY", BILL_TO_PARTY);
		//		headerItemList.put("SHIPCONTACT2NUM", SHIPCONTACT2NUM);
		//headerItemList.put("ISGOVERNMENT", ISGOVERNMENT);
		//headerItemList.put("SHIP_TO_ADDR", SHIP_TO_ADDR);
		//headerItemList.put("CARRIERNAME", CARRIERNAME);
		//headerItemList.put("SHIPPING_METHOD", SHIPPING_METHOD);
		//headerItemList.put("USERCOMMENTS", USERCOMMENTS);
		final Map<String, String> lineItemList = new HashMap<>();
		lineItemList.put("MATERIAL", "");
		lineItemList.put("LINE_ITEM", "");
		lineItemList.put("QUANTITY", "");
		lineItemList.put("EQUIPMENT_NUM", "");
		lineItemList.put("SERIAL_NUM", "");
		lineItemList.put("OFFERING1", "");
		lineItemList.put("OFFERING2", "");
		lineItemList.put("OFFERING3", "");
		/*
		 * lineItemList.put("PRODUCT_DETAILS", PRODUCT_DETAILS); lineItemList.put("PROBLEM_DESCRIPTION",
		 * PROBLEM_DESCRIPTION); lineItemList.put("LINE_NOTES", LINE_NOTES); lineItemList.put("OFFERING_TEXT",
		 * OFFERING_TEXT); lineItemList.put("ISACCESSORY_PRESENT", ISACCESSORY_PRESENT);
		 * lineItemList.put("ACCESSORIES_NOTES", ACCESSORIES_NOTES); lineItemList.put("PRICE_RANGE", PRICE_RANGE);
		 * lineItemList.put("CHARGES_EXPEDITE", CHARGES_EXPEDITE);
		 */ responseList.put(headerItemList, lineItemList);
		return responseList;
	}

	public String getSoldTo()
	{
		final SalesAreaData salesArea = (SalesAreaData) sessionService.getAttribute("defaultSalesAreaData");
		if (null != salesArea)
		{
			return salesArea.getB2bUnitUid();
		}
		return null;
	}

	@Override
	public String testSalesArea(final String salesArea)
	{
		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		bhgeUserProfileFacade.updateUserSoldToSalesArea(null, salesArea);

		return null;
	}


	@Override
	public BHGECheckoutFormData saveCheckoutForm(final BHGECheckoutFormData checkoutForm)
			throws BackendException, InvalidCartException, CalculationException
	{

		final CartModel cartModel = bhgeCartService.getSessionCart();
		LOG.info("Cart Model code= " + cartModel.getCode());

		final CustomerData customerData = customerFacade.getCurrentCustomer();
		LOG.info("Customer ID= " + customerData.getCustomerId());
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
		Date date1;
		try
		{
			date1 = new SimpleDateFormat("dd/MM/yyyy").parse(checkoutForm.getReqShipDate());
			if (null != date1)
			{
				cartModel.setReqHeaderDeliveryDate(date1);
				LOG.info("Customer ReqHeaderDeliveryDate= " + cartModel.getReqHeaderDeliveryDate().toString());
			}
		}
		catch (final ParseException e)
		{
			e.printStackTrace();
		}
		if (null != checkoutForm.getCarrier() && !StringUtils.isEmpty(checkoutForm.getCarrier()))
		{
			final ShippingCarrierMethod deliveryCarrier = ShippingCarrierMethod.valueOf(checkoutForm.getCarrier());
			cartModel.setShippingCarrierMethod(deliveryCarrier);
			LOG.info("Customer ShippingCarrierMethod= " + cartModel.getShippingCarrierMethod().getCode());
		}
		if (null != checkoutForm.getShipContactName())
		{
			cartModel.setShippingConatct1Name(checkoutForm.getShipContactName());
		}
		if (null != checkoutForm.getShipContactPhoneNumber())
		{
			cartModel.setShippingConatct1Number(checkoutForm.getShipContactPhoneNumber());
		}
		if (null != checkoutForm.getExportAddress())
		{
			cartModel.setExportAddressText(checkoutForm.getExportAddress());
			LOG.info("Customer ExportAddressText= " + cartModel.getExportAddressText());
		}
		if (null != checkoutForm.getShipNotification())
		{
			cartModel.setShipNotificationEmail(checkoutForm.getShipNotification());
			LOG.info("Customer ShipNotificationEmail= " + cartModel.getShipNotificationEmail());
		}
		if (null != checkoutForm.getInvoiceMail())
		{
			cartModel.setInvoiceEmail(checkoutForm.getInvoiceMail());
			LOG.info("Customer InvoiceEmail= " + cartModel.getInvoiceEmail());
		}
		if (null != checkoutForm.getOrderConfMail())
		{
			cartModel.setOrderConfirmationEMail(checkoutForm.getOrderConfMail());
			LOG.info("Customer OrderConfirmationEMail= " + cartModel.getOrderConfirmationEMail());
		}
		if (null != checkoutForm.getPoNumber())
		{
			cartModel.setPurchaseOrderNumber(checkoutForm.getPoNumber());
			LOG.info("Customer PurchaseOrderNumber= " + cartModel.getPurchaseOrderNumber());
		}
		if (null != checkoutForm.getIsGovernment())
		{
			cartModel.setIsGovernment(checkoutForm.getIsGovernment());
			LOG.info("Customer IsGovernment= " + cartModel.getIsGovernment().toString());
		}
		if (null != checkoutForm.getShippingMethod())
		{
			cartModel.setShippingMethod(checkoutForm.getShippingMethod());
			LOG.info("Customer ShippingMethod= " + cartModel.getShippingMethod());
		}
		if (null != checkoutForm.getShippingRemarks())
		{
			cartModel.setShippingRemarks(checkoutForm.getShippingRemarks());
			LOG.info("Customer ShippingRemarks= " + cartModel.getShippingRemarks());
		}
		if (null != checkoutForm.getIsNuclear())
		{
			cartModel.setIsNuclearOppurtunity(checkoutForm.getIsNuclear());
			LOG.info("Customer IsNuclearOppurtunity= " + cartModel.getIsNuclearOppurtunity().toString());
		}
		if (null != checkoutForm.getMaterialExport())
		{
			cartModel.setIsExport(checkoutForm.getMaterialExport());
			LOG.info("Customer IsExport= " + cartModel.getIsExport().toString());
		}
		if (null != checkoutForm.getIsGovernmentBuyer())
		{
			cartModel.setIsBuyer(Boolean.valueOf(checkoutForm.getIsGovernmentBuyer()));
			LOG.info("Customer IsBuyer= " + cartModel.getIsBuyer());
		}
		if (null != checkoutForm.getAlternateContactName())
		{
			cartModel.setShippingConatct2Name(checkoutForm.getAlternateContactName());
			LOG.info("Customer ShippingConatct2Name= " + cartModel.getShippingConatct2Name());
		}
		if (null != checkoutForm.getEndUserCategory())
		{
			cartModel.setEndUserCategory(checkoutForm.getEndUserCategory());
			LOG.info("Customer EndUserCategory()= " + cartModel.getEndUserCategory());
		}
		if (null != checkoutForm.getShipNotification())
		{
			cartModel.setShippingConatct2Number(checkoutForm.getShipNotification());
			LOG.info("Customer ShippingConatct2Number= " + cartModel.getShippingConatct2Number());
		}
		if (null != checkoutForm.getDeliveryPoint())
		{
			cartModel.setDeliveryPoint(checkoutForm.getDeliveryPoint());
			LOG.info("Customer DeliveryPoint= " + cartModel.getDeliveryPoint());
		}
		if (null != checkoutForm.getDeliveryAccountNo())
		{
			cartModel.setDeliveryAccountNum(checkoutForm.getDeliveryAccountNo());
			LOG.info("Customer DeliveryAccountNum= " + cartModel.getDeliveryAccountNum());
		}
		final AddressModel endUseraddrModel = modelService.create(AddressModel.class);
		//endUseraddrModel.setOwner(soldto);
		if (null != checkoutForm.getEndUserAddress())
		{
			endUseraddrModel.setLine1(checkoutForm.getEndUserAddress().getLine1());
			endUseraddrModel.setLine2(checkoutForm.getEndUserAddress().getLine2());
			if (null != checkoutForm.getEndUserCountry())
			{
				endUseraddrModel.setCountry(commonI18NService.getCountry(checkoutForm.getEndUserCountry().getCountryCode()));

				if (null != checkoutForm.getEndUserState())
				{
					endUseraddrModel.setRegion(
							commonI18NService.getRegion(endUseraddrModel.getCountry(), checkoutForm.getEndUserState().getStateCode()));

				}
			}
		}
		final UserModel user = userService.getCurrentUser();
		endUseraddrModel.setOwner(user);
		if (null != checkoutForm.getAlternateContactEmail())
		{
			cartModel.setAlternateContactEmail(checkoutForm.getAlternateContactEmail());
		}
		if (null != checkoutForm.getEndUserZip())
		{
			endUseraddrModel.setPostalcode(checkoutForm.getEndUserZip());
		}
		if (null != checkoutForm.getEndUserCity())
		{
			endUseraddrModel.setDistrict(checkoutForm.getEndUserCity());
		}
		cartModel.setRMAEndUserAddress(endUseraddrModel);
		if (checkoutForm.getShipNotification() == null && bhgeCustomerData.getSendShippingNotificationEmail() != null)
		{
			cartModel.setShipNotificationEmail(bhgeCustomerData.getSendShippingNotificationEmail());
		}

		if (checkoutForm.getInvoiceMail() == null && bhgeCustomerData.getSendInvoiceEmail() != null)
		{
			cartModel.setInvoiceEmail(bhgeCustomerData.getSendInvoiceEmail());
		}
		if (checkoutForm.getShipContactName() == null && bhgeCustomerData.getShippingContactName() != null)
		{
			cartModel.setShipToContactName(bhgeCustomerData.getShippingContactName());
		}
		if (checkoutForm.getShipContactPhoneNumber() == null && bhgeCustomerData.getShippingContactNumber() != null)
		{
			cartModel.setShipToContactPhone(bhgeCustomerData.getShippingContactNumber());
		}
		if (checkoutForm.getDeliveryAccountNo() == null && bhgeCustomerData.getDeliveryAccount() != null)
		{
			cartModel.setDeliveryAccountNum(bhgeCustomerData.getDeliveryAccount());
		}
		try
		{
			modelService.save(cartModel);
			LOG.info("Cart Model saved for  " + cartModel.getCode());

		}
		catch (final ModelSavingException e)
		{
			LOG.info("Exception " + e.getMessage());
			LOG.info("Error for Cart model ceation");
		}
		final BHGECheckoutFormData responseData = new BHGECheckoutFormData();
		LOG.info("cart Model to response data populate will happen");
		bhgeOrderCheckoutPopulator.populate(cartModel, responseData);
		LOG.info("cart Model to response data populate happened");
		if (!checkoutForm.getIsSaveDraft())
		{
			LOG.info("CART MODEL TO ORDER MODEL CREATION WILL START");
			LOG.info("CART MODEL RECALCULATION WILL HAPPEN");
			bhgeCheckoutFacade.recalculate();
			LOG.info("CART MODEL RECALCULATION HAPPENED");

			//final List<OrderModel> orders = placeOrderWithSplit();
			//final OrderDetails orderData = new OrderDetails();
			//final List<OrderDetails> orderDataList = new ArrayList<OrderDetails>();
			//for (final OrderModel dataModel : orders)
			//{bhgeCheckoutFacade.recalculate();

			/*
			 * if (validateOrderForm(responseData)) { return null; //return
			 * "{response:failure, message :- checkout.order.failed}"; }
			 */




			List<OrderModel> orders = new ArrayList<OrderModel>();
			if (cartModel.getCommerceType().getCode().isEmpty() || cartModel.getCommerceType().getCode() != "RETURNS")
			{
				LOG.info("CART MODEL IS NOT OF TYPE RETURNS SO OLD SPLIT WILL HAPPEN");

				orders = bhgeCheckoutFacade.placeOrderWithSplit();
				LOG.info("ORDER MODEL FOR OLD SPLIT HAPPEN");

			}
			else
			{

				LOG.info("CART MODEL IS OF TYPE RETURN SO RETURN SPLIT WILL HAPPEN");
				orders = placeOrderWithSplit();
				try
				{
					final String sold = getSoldTo();
					if (sold != null && !sold.isEmpty())
					{
						final String[] strArray = sold.split("_");
						LOG.info("RMA Create - Sold to for Clear - " + strArray[0]);
						final List<String> soldtoList = new ArrayList();
						soldtoList.add(strArray[0]);
						bhgeRMAStatusFacade.clearRmaStatusDataFromCache(soldtoList);
					}
					else
					{
						LOG.info("RMA Create - Sold to Fetch Failed");
					}
				}
				catch (final Exception exc)
				{
					LOG.info("RMA Status Cleanup Exception");
					exc.printStackTrace();
				}
			}

			final OrderDetails orderData = new OrderDetails();
			final List<OrderDetails> orderDataList = new ArrayList<OrderDetails>();
			final String flag = "X";
			//Map<String,Map<String,String>> rfcUploadResponse=new HashMap<String,Map<String,String>>();
			final HashMap<String, String> resp = new HashMap<String, String>();
			final List<HashMap<String, String>> respList = new ArrayList<HashMap<String, String>>();
			final HashMap<String, List<HashMap<String, String>>> rfcUploadResponse = new HashMap<String, List<HashMap<String, String>>>();
			LOG.info("ORDERS DATA LIST IS CREATED ");
			responseData.setOrderDetails(orderDataList);
		}

		LOG.info("ORDERS DATA LIST IS BEING RETURNWED TO CONTROLLER");
		return responseData;
	}

	public List<OrderModel> processRMAOrder() throws InvalidCartException
	{
		final List<OrderModel> orders = placeOrderWithSplit();

		for (final OrderModel dataModel : orders)
		{
			if (!dataModel.getRmaNumber().isEmpty())
			{
				if (dataModel.getHazardInfoDocs() != null)
				{
					LOG.info("HazardInfo docs found - START" + dataModel.getCode() + " | " + dataModel.getRmaNumber());
					final uploadFileResponseData uploadResponseData = new uploadFileResponseData();
					byte[] fileData = null;
					final MediaModel m = dataModel.getHazardInfoDocs();
					if (m != null)
					{
						final String fileDataString = convertMediaToHexString(m);
						fileData = hexStringToByteArray(fileDataString);
					}
					final String fileExtension = MediaUtil.getFileExtension(m.getRealFileName());
					final String fileName = bhgeRmaOrderService.generateRMAFileName(HAZARD_ATTACH_SECTION, m.getRealFileName(), fileExtension, dataModel.getRmaNumber());
					final uploadFileResponseData msgOutput = uploadFile(fileData, dataModel.getRmaNumber(), fileName,
							fileExtension.toUpperCase());
					if (msgOutput != null && msgOutput.getMessageType() != null && msgOutput.getMessageType().equalsIgnoreCase("S"))
					{
						dataModel.setCoshPdfStatus(PdfStatusType.SUBMITTED);
					}
					modelService.save(dataModel);
					LOG.info("HazardInfo docs found - CLOSE" + dataModel.getCode() + " | " + dataModel.getRmaNumber());
				}
			}
		}

		LOG.info("ORDERS DATA LIST IS CREATED ");
		try
		{
			LOG.info("RMA Create - Sold to for Clear BASE");
			final String sold = getSoldTo();
			if (sold != null && !sold.isEmpty())
			{
				final String[] strArray = sold.split("_");
				LOG.info("RMA Create - Sold to for Clear - " + strArray[0]);
				final List<String> soldtoList = new ArrayList();
				soldtoList.add(strArray[0]);
				bhgeRMAStatusFacade.clearRmaStatusDataFromCache(soldtoList);
			}
			else
			{
				LOG.info("RMA Create - Sold to Fetch Failed");
			}
		}
		catch (final Exception exc)
		{
			LOG.info("RMA Status Cleanup Exception");
			exc.printStackTrace();
		}
		return orders;
	}
	
	
	public List<OrderModel> processRMAOrderForWs(CartModel cartModel) throws InvalidCartException
	{
		final List<OrderModel> orders = placeOrderWithSplitForWs(cartModel);

		for (final OrderModel dataModel : orders)
		{
			if (!dataModel.getRmaNumber().isEmpty())
			{
				if (dataModel.getHazardInfoDocs() != null)
				{
					LOG.info("HazardInfo docs found - START" + dataModel.getCode() + " | " + dataModel.getRmaNumber());
					final uploadFileResponseData uploadResponseData = new uploadFileResponseData();
					byte[] fileData = null;
					final MediaModel m = dataModel.getHazardInfoDocs();
					if (m != null)
					{
						final String fileDataString = convertMediaToHexString(m);
						fileData = hexStringToByteArray(fileDataString);
					}
					final String fileExtension = MediaUtil.getFileExtension(m.getRealFileName());
					final String fileName = bhgeRmaOrderService.generateRMAFileName(HAZARD_ATTACH_SECTION, m.getRealFileName(), fileExtension, dataModel.getRmaNumber());
					final uploadFileResponseData msgOutput = uploadFile(fileData, dataModel.getRmaNumber(), fileName,
							fileExtension.toUpperCase());
					if (msgOutput != null && msgOutput.getMessageType() != null && msgOutput.getMessageType().equalsIgnoreCase("S"))
					{
						dataModel.setCoshPdfStatus(PdfStatusType.SUBMITTED);
					}
					modelService.save(dataModel);
					LOG.info("HazardInfo docs found - CLOSE" + dataModel.getCode() + " | " + dataModel.getRmaNumber());
				}
			}
		}

		LOG.info("ORDERS DATA LIST IS CREATED ");
		try
		{
			LOG.info("RMA Create - Sold to for Clear BASE");
			final String sold = getSoldTo();
			if (sold != null && !sold.isEmpty())
			{
				final String[] strArray = sold.split("_");
				LOG.info("RMA Create - Sold to for Clear - " + strArray[0]);
				final List<String> soldtoList = new ArrayList();
				soldtoList.add(strArray[0]);
				bhgeRMAStatusFacade.clearRmaStatusDataFromCache(soldtoList);
			}
			else
			{
				LOG.info("RMA Create - Sold to Fetch Failed");
			}
		}
		catch (final Exception exc)
		{
			LOG.info("RMA Status Cleanup Exception");
			exc.printStackTrace();
		}
		return orders;
	}

	private uploadFileResponseData uploadFile(final byte[] fileData, final String rmaNumber, final String fileName,
			final String fileType)
	{
		LOG.info("****************************************** UPLOAD FILE FACADE ********************************************");
		LOG.info("rmaNumber ------------" + rmaNumber);
		LOG.info("fileName ------------" + fileName);
		LOG.info("fileType ------------" + fileType);

		uploadFileResponseData uploadResponseData = new uploadFileResponseData();
		try
		{
			uploadResponseData = bhgeRMAStatusService.submitOrderAttachmentsToSCPI(rmaNumber, fileData, fileName, fileType);
			if (uploadResponseData != null)
			{
				LOG.info("messageType ------------" + uploadResponseData.getMessageType());
				LOG.info("messageText ------------" + uploadResponseData.getMessageText());
				return uploadResponseData;
			}
		}
		catch (final Exception e)
		{
			LOG.error("Exception while uploading file:" + e);
		}
		return null;

	}

	private String convertMediaToHexString(final MediaModel media)
	{
		String hexMediaFormat = "";
		try
		{
			hexMediaFormat = Hex.encodeHexString(IOUtils.toByteArray(mediaService.getStreamFromMedia(media)));
		}
		catch (final Exception e)
		{
			LOG.error("Error in converting the attachment to Hex string format: " + e);
		}
		return hexMediaFormat;
	}

	public byte[] hexStringToByteArray(final String s)
	{
		final byte[] b = new byte[s.length() / 2];
		for (int i = 0; i < b.length; i++)
		{
			final int index = i * 2;
			final int v = Integer.parseInt(s.substring(index, index + 2), 16);
			b[i] = (byte) v;
		}
		return b;
	}

	@Override
	protected CommerceCheckoutService getCommerceCheckoutService()
	{
		return commerceCheckoutService;
	}

	@Override
	
	public void setCommerceCheckoutService(final CommerceCheckoutService commerceCheckoutService)
	{
		this.commerceCheckoutService = commerceCheckoutService;
	}

	@Override
	public List<SavedCartData> getSavedCarts(final Integer pageSize, final Integer pageNo)
	{
		final PageableData pageableData = new PageableData();
		pageableData.setPageSize(pageSize);
		pageableData.setCurrentPage(pageNo);
		saveCartFacade.getSavedCartsForCurrentUser(pageableData, null);

		final SearchPageData<CartModel> savedCartModels = bhgeCommerceSaveCartServiceImpl.getSavedCartsForUser(pageableData,
				baseSiteService.getCurrentBaseSite(), baseStoreService.getCurrentBaseStore(), userService.getCurrentUser(), null);

		if (savedCartModels == null)
		{
			return populateSavedCart(null);
		}
		else
		{
			return populateSavedCart(savedCartModels.getResults());
		}
	}

	private List<SavedCartData> populateSavedCart(final List<CartModel> cartList)
	{
		final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");
		final List<SavedCartData> savedCartlist = new ArrayList<>();

		if (cartList != null)
		{
			for (final CartModel cart : cartList)
			{
				final SavedCartData savedCart = setSavedCart(cart);
				if (savedCart.getTotalItems() > 0)
				{
					savedCartlist.add(savedCart);
				}

			}
			final SavedCartData savedCart = setSavedCart(bhgeCartService.getSessionCart());
			if (savedCart.getTotalItems() > 0)
			{
				savedCartlist.add(savedCart);
			}
		}
		return savedCartlist;

	}

	private SavedCartData setSavedCart(final CartModel cart)
	{
		final SavedCartData savedCart = new SavedCartData();
		if (cart != null)
		{
			String cartCommerceType = "";

			if (Objects.nonNull(cart.getCommerceType()))
			{
				cartCommerceType = cart.getCommerceType().toString();
			}
			else
			{
				cartCommerceType = "BUY";
			}


			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			final B2BUnitModel defaultSoldToUnit = currentUser.getDefaultB2BUnit();
			final String salesAreaUid = defaultSoldToUnit.getUid();


			if (cartCommerceType.equalsIgnoreCase("RETURNS"))
			{
				savedCart.setCartPrice(populatePrice(cart.getTotalReturnPrice(), cart.getCurrency()));

			}
			else
			{

				savedCart.setCartPrice(populatePrice(cart.getTotalPrice(), cart.getCurrency()));
			}

			if (Objects.nonNull(cart.getSoldToForCart()) && Objects.nonNull(cart.getSoldToForCart().getCurrency()))
			{
				savedCart.setCurrencyIsoCode(cart.getSoldToForCart().getCurrency().getIsocode());
				savedCart.setCurrencySymbol(cart.getSoldToForCart().getCurrency().getSymbol());
			}
			if (cart.getEntries() != null)
			{
				savedCart.setTotalItems(cart.getEntries().size());
			}
			if (cart.getSoldToForCart() != null)
			{
				final String[] salesAreaArr = cart.getSoldToForCart().getUid().split("_");
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
							savedCart.setSalesArea(baseStore.getName());
							savedCart.setSalesAreaID(salesAreaArr[1]);
							savedCart.setSalesAreaUID(cart.getSoldToForCart().getUid());
						}
					}
				}
				//savedCart.setSalesArea(cart.getSoldToForCart().getName());

				if (cart.getSoldToForCart().getUid().equalsIgnoreCase(salesAreaUid))
				{
					savedCart.setChangeSalesArea(false);
				}
				else
				{
					savedCart.setChangeSalesArea(true);
				}

			}
			savedCart.setSavedCartName(cart.getName());
			if (cart.getSaveTime() != null)
			{

				//final DateFormat dateFormat = new SimpleDateFormat("dd-mm-yyyy");
				savedCart.setSavedDate(cart.getSaveTime().toString());
			}
			if (cart.getCommerceType() != null)
			{
				savedCart.setCartType(cart.getCommerceType().toString());
			}
			else
			{
				savedCart.setCartType("BUY");
			}
			if (userService.getCurrentUser() != null && bhgeCartService.getSessionCart() != null && cart.getCode() != null
					&& cart.getCode().equals(bhgeCartService.getSessionCart().getCode()))
			{
				savedCart.setActiveCart("yes");
			}
			else
			{
				savedCart.setActiveCart("no");
			}
			savedCart.setCartID(cart.getCode());
		}
		return savedCart;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.rma.BHGERmaFormFacade#getCheckoutData()
	 */
	@Override
	public CheckoutData getCheckoutData()
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");
		final UserModel user = userService.getCurrentUser();
		String cartCommerceType = "";
		if (Objects.nonNull(cartModel.getCommerceType()))
		{
			cartCommerceType = cartModel.getCommerceType().toString();
		}
		else
		{
			cartCommerceType = "BUY";
		}

		final CheckoutData checkData = new CheckoutData();
		double totalPrice = 0.0;
		int quantity = 0;

		checkData.setCartCommerceType(cartCommerceType);
		final List<CheckoutCartData> checkoutList = new ArrayList<>();
		if (Objects.nonNull(cartModel.getCommerceType()) && (cartModel.getCommerceType().toString().equalsIgnoreCase("RETURNS")))
		{
			//final List<RmaReturnCartData> returnCartData = createRmaReturnCart();

			quantity = cartModel.getEntries().size();

			for (final AbstractOrderEntryModel cartEntry : cartModel.getEntries())
			{
				ProductData product = null;
				final CheckoutCartData checkoutData = new CheckoutCartData();
				if (Config.getParameter("current.env").equalsIgnoreCase("local"))
				{
					product = productFacade.getProductForCodeAndOptions("113-241-240",
							Arrays.asList(ProductOption.IMAGES, ProductOption.GALLERY, ProductOption.VARIANT_MATRIX_MEDIA,
									ProductOption.URL, ProductOption.VARIANT_MATRIX_URL));

				}
				else if (cartEntry.getPartNumber() != null)
				{

					final ProductModel productModel = getProductService().getProductForCode(cartEntry.getPartNumber().trim());
					product = getProductConverter().convert(productModel);
					checkoutData.setProductId(cartEntry.getPartNumber().trim());
				}

				if (!ObjectUtils.isEmpty(product))
				{
					try
					{
						final ImageData imageData = getPrimaryImageForProductAndFormat(product, IMAGEFORMAT);
						if (imageData != null && StringUtils.isNotBlank(imageData.getUrl()))
						{
							checkoutData.setImageUrl(imageData.getUrl());
						}
						else
						{
							checkoutData.setImageUrl(NOIMAGEVALUE);
						}
					}
					catch (final Exception e)
					{
						e.printStackTrace();
						checkoutData.setImageUrl(NOIMAGEVALUE);
					}

					if (!(null == product.getName()))
					{
						checkoutData.setDescription(product.getName());
					}
					else
					{
						checkoutData.setDescription("Dummy part no");
					}
					checkoutData.setQuantity(cartEntry.getQuantity());
					final PriceData price = new PriceData();
					if (Objects.nonNull(cartEntry.getTotalReturnPrice()))
					{
						price.setValue(new BigDecimal(cartEntry.getTotalReturnPrice(), MathContext.DECIMAL64));
					}
					else
					{
						price.setValue(new BigDecimal(0, MathContext.DECIMAL64));
					}
					if (null != sessionSalesAreaData)
					{
						price.setCurrencyIso(sessionSalesAreaData.getCurrencyIso() + sessionSalesAreaData.getCurrencySymbol());
					}
					checkoutData.setPrice(price);
					if (Objects.nonNull(cartEntry.getTotalReturnPrice()))
					{
						totalPrice = totalPrice + cartEntry.getTotalReturnPrice();
					}
					checkoutList.add(checkoutData);
				}
			}
		}
		else
		{
			//final CartData cartData = new CartData();
			//bhgeCartPopulator.populate(cartModel, cartData);
			final CurrencyModel currency = cartModel.getCurrency();
			quantity = cartModel.getEntries().size();
			for (final AbstractOrderEntryModel cartEntry : cartModel.getEntries())
			{

				final CheckoutCartData checkoutData = new CheckoutCartData();
				if (Objects.nonNull(cartEntry.getProduct()))
				{
					final ProductModel productModel = cartEntry.getProduct();
					final ProductData product = getProductConverter().convert(productModel);

					checkoutData.setProductId(productModel.getCode());
					checkoutData.setDescription(product.getName());
					try
					{
						final ImageData imageData = getPrimaryImageForProductAndFormat(product, IMAGEFORMAT);
						if (imageData != null && StringUtils.isNotBlank(imageData.getUrl()))
						{
							checkoutData.setImageUrl(imageData.getUrl());
						}
						else
						{
							checkoutData.setImageUrl(NOIMAGEVALUE);
						}
					}
					catch (final Exception e)
					{
						e.printStackTrace();
						checkoutData.setImageUrl(NOIMAGEVALUE);
					}
				}
				if (user instanceof GEEdgeCustomerModel)
				{
					if (Objects.nonNull(cartEntry.getListPrice()))
					{
						checkoutData.setPrice(populatePrice(cartEntry.getQuantity() * cartEntry.getListPrice(), currency));
						totalPrice = totalPrice + checkoutData.getPrice().getValue().doubleValue();
					}
				}
				checkoutData.setQuantity(cartEntry.getQuantity());
				checkoutList.add(checkoutData);
			}

		}

		final PriceData price = new PriceData();
		price.setValue(new BigDecimal(totalPrice, MathContext.DECIMAL64));
		if (null != sessionSalesAreaData && user instanceof GEEdgeCustomerModel)
		{
			price.setCurrencyIso(sessionSalesAreaData.getCurrencyIso() + sessionSalesAreaData.getCurrencySymbol());
		}
		final CheckoutSummaryData summary = new CheckoutSummaryData();
		if (Objects.nonNull(cartModel.getCommerceType()))
		{
			summary.setCartType(cartModel.getCommerceType().toString());
		}
		summary.setQuantity(new Long(quantity));
		if (user instanceof GEEdgeCustomerModel)
		{
			summary.setOrderTotal(price);
		}
		checkData.setCart(checkoutList);
		checkData.setSummary(summary);

		return checkData;
	}

	public ImageData getPrimaryImageForProductAndFormat(final ProductData product, final String format)
	{
		if (product != null && format != null)
		{
			final Collection<ImageData> images = product.getImages();
			if (images != null && !images.isEmpty())
			{
				for (final ImageData image : images)
				{
					if (ImageDataType.PRIMARY.equals(image.getImageType()) && format.equals(image.getFormat()))
					{
						return image;
					}
				}
				return null;
			}
		}
		return null;
	}

	protected PriceData populatePrice(final Double price, final CurrencyModel currency)
	{
		final double priceValue = price != null ? price.doubleValue() : 0d;
		return priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(priceValue), currency);
	}

	protected boolean validateOrderForm(final BHGECheckoutFormData cartData)
	{
		//final String securityCode = placeOrderForm.getSecurityCode();
		//final CartData cartData = bhgeCheckoutFacade.getCheckoutCart();
		boolean invalid = false;

		if (cartData.getEndUserAddress() == null)
		{
			return invalid;
		}

		if (cartData.getPoNumber() == null)
		{
			invalid = true;
			return invalid;
		}


		if (cartData.getShipContactName() == null)
		{
			invalid = true;
			return invalid;
		}

		if (cartData.getShipContactPhoneNumber() == null)
		{
			invalid = true;
			return invalid;
		}


		if ("collect".equalsIgnoreCase(cartData.getShippingMethod()))
		{
			if (cartData.getDeliveryAccountNo() == null)
			{
				invalid = true;
				return invalid;
			}
		}

		/*
		 * if (cartData.getOrderConfirmation() == null) { invalid = true; return invalid; }
		 */

		/*
		 * if (cartData.getOrderConfMail() == null) { invalid = true; return invalid; }
		 */


		if (cartData.getInvoiceMail() == null)
		{
			invalid = true;
			return invalid;
		}

		if (cartData.getIsGovernment() == null)
		{
			invalid = true;
			return invalid;
		}

		if (cartData.getIsNuclear() == null)
		{
			invalid = true;
			return invalid;
		}


		/*
		 * if (cartData.getIsExport().equals(Boolean.TRUE)) { if (cartData.getExportAddress() == null ||
		 * "".equals(cartData.getExportAddress())) { invalid = true; return invalid; } }
		 */

		/*
		 * if (getCheckoutFlowFacade().hasNoDeliveryAddress()) { GlobalMessages.addErrorMessage(model,
		 * "checkout.deliveryAddress.notSelected"); invalid = true; }
		 */

		/*
		 * if (getCheckoutFlowFacade().hasNoDeliveryMode()) { GlobalMessages.addErrorMessage(model,
		 * "checkout.deliveryMethod.notSelected"); invalid = true; }
		 */

		/*
		 * if (getCheckoutFlowFacade().hasNoPaymentInfo()) { GlobalMessages.addErrorMessage(model,
		 * "checkout.paymentMethod.notSelected"); invalid = true; }
		 */
		/*
		 * else { // Only require the Security Code to be entered on the summary page if the SubscriptionPciOption is set
		 * to Default. if (CheckoutPciOptionEnum.DEFAULT.equals(getCheckoutFlowFacade().getSubscriptionPciOption()) &&
		 * StringUtils.isBlank(securityCode)) { GlobalMessages.addErrorMessage(model,
		 * "checkout.paymentMethod.noSecurityCode"); invalid = true; } }
		 */

		/*
		 * if (!placeOrderForm.isTermsCheck()) { GlobalMessages.addErrorMessage(model,
		 * "checkout.error.terms.not.accepted"); invalid = true; return invalid; }
		 */
		//final CartData cartData = bhgeCheckoutFacade.getCheckoutCart();

		//		if (!getCheckoutFacade().containsTaxValues())
		//		{
		//			LOG.error(String.format(
		//					"Cart %s does not have any tax values, which means the tax cacluation was not properly done, placement of order can't continue",
		//					cartData.getCode()));
		//			GlobalMessages.addErrorMessage(model, "checkout.error.tax.missing");
		//			invalid = true;
		//		}

		/*
		 * if (!cartData.isCalculated()) { LOG.error(
		 * String.format("Cart %s has a calculated flag of FALSE, placement of order can't continue",
		 * cartData.getCode())); invalid = true; return invalid; }
		 */

		return invalid;
	}



	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.rma.BHGERmaFormFacade#switchCartType(java.lang.String)
	 */
	@Override
	public String switchCartType(final String cartCommerceType)
	{

		final CartModel cartModel = bhgeCartService.getSessionCart();

		if (Objects.isNull(cartCommerceType) || cartCommerceType != "RETURNS")
		{
			cartModel.setCommerceType(BHGERMACommerceType.RETURNS);
			LOG.info("Cart commerce type changed to : " + cartModel.getCommerceType().toString());
		}
		else
		{
			cartModel.setCommerceType(BHGERMACommerceType.BUY);
			LOG.info("Cart commerce type changed to : " + cartModel.getCommerceType().toString());
		}
		modelService.save(cartModel);
		return cartModel.getCommerceType().toString();
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.rma.BHGERmaFormFacade#saveHazardInfo(com.bhge.facades.rma.data.BHGEHazardousInfoData)
	 */
	@Override
	public Boolean saveHazardInfo(final BHGEHazardousInfoData hazardousInfo)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		BHGEHazardousInfoModel hazardInfoModelOg = null;
		if (Objects.nonNull(cartModel.getBhgeHazardousInfo()))
		{
			hazardInfoModelOg = cartModel.getBhgeHazardousInfo();
		}
		if (Objects.nonNull(hazardousInfo))
		{
			final BHGEHazardousInfoModel hazardInfoModel = modelService.create(BHGEHazardousInfoModel.class);
			if (Objects.nonNull(hazardInfoModelOg) && hazardInfoModelOg.getHazardformAttachments() != null)
			{
				hazardInfoModel.setHazardformAttachments(hazardInfoModelOg.getHazardformAttachments());
			}

			if (null != hazardousInfo.getIsHazardSaved() && hazardousInfo.getIsHazardSaved() == true && hazardousInfo.getDeclarationA() != null
					&& hazardousInfo.getDeclarationA() == false && hazardousInfo.getDeclarationB() != null
					&& hazardousInfo.getDeclarationB() == true)
			{
				hazardInfoModel.setHazardformAttachments(null);
			}

			final List<BHGEChemicalDetailsModel> chemicalDetails = new ArrayList<>();
			bhgeHazardousInfoPopulator.populate(hazardousInfo, hazardInfoModel);
			final List<BHGEChemicalsDetailData> bhgeChemicalsDetailData = hazardousInfo.getChemicalDetails();
			bhgeChemicalsDetailData.forEach(data -> {
				final BHGEChemicalDetailsModel model = modelService.create(BHGEChemicalDetailsModel.class);
				bhgeChemicalDetailPopulator.populate(data, model);
				chemicalDetails.add(model);
			});
			hazardInfoModel.setBhgeChemicalDetails(chemicalDetails);
			cartModel.setBhgeHazardousInfo(hazardInfoModel);

			try
			{
				modelService.save(cartModel);
				return true;
			}
			catch (final Exception e)
			{
				LOG.info("Exception in saving Hazard info " + e.getMessage());
				e.printStackTrace();
				return false;
			}
		}
		else
		{
			return false;
		}

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.rma.BHGERmaFormFacade#getHazardInfo()
	 */
	@Override
	public BHGEHazardousInfoData getHazardInfo()
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		final BHGEHazardousInfoModel hazardInfoModel = cartModel.getBhgeHazardousInfo();
		final BHGEHazardousInfoData hazardousInfo = new BHGEHazardousInfoData();
		final List<String> fileNames = new ArrayList<>();
		if (Objects.nonNull(hazardInfoModel))
		{
			bhgeHazardousInfoReversePopulator.populate(hazardInfoModel, hazardousInfo);
			if (Objects.nonNull(hazardInfoModel.getHazardformAttachments()))
			{
				hazardInfoModel.getHazardformAttachments().forEach(media -> {
					fileNames.add(media.getRealFileName());
				});
				hazardousInfo.setHazardFormAttachments(fileNames);
			}
			final List<BHGEChemicalsDetailData> chemicalDataList = new ArrayList<BHGEChemicalsDetailData>();
			hazardInfoModel.getBhgeChemicalDetails().forEach(chemicalModel -> {
				final BHGEChemicalsDetailData chemicaldata = new BHGEChemicalsDetailData();
				bhgeChemicalDetailReversePopulator.populate(chemicalModel, chemicaldata);
				chemicalDataList.add(chemicaldata);
			});

			hazardousInfo.setChemicalDetails(chemicalDataList);
		}
		final List<BHGEHazardPartName> partList = new ArrayList<>();

		for (final AbstractOrderEntryModel order : cartModel.getEntries())
		{
			final BHGEHazardPartName part = new BHGEHazardPartName();
			if (order.getProduct() != null)
			{
				part.setPartCode(order.getProduct().getCode());
				part.setPartName(order.getProduct().getName());
				partList.add(part);
			}
		}
		hazardousInfo.setPartList(partList);

		return hazardousInfo;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.rma.BHGERmaFormFacade#gethazardCompleteness()
	 */
	@Override
	public String gethazardCompleteness()
	{
		LOG.info("Inside hazardCompleteness - CALL 1");
		final CartModel cartModel = bhgeCartService.getSessionCart();
		final BHGEHazardousInfoModel hazardInfo = cartModel.getBhgeHazardousInfo();

		LOG.info("Inside hazardCompleteness - CALL 2");

		if (Objects.isNull(hazardInfo))
		{
			LOG.info("Inside hazardCompleteness - CALL 3");
			return "PARTIAL";

		}
		else if (hazardInfo.getDeclerationB() == null || !hazardInfo.getDeclerationB().booleanValue())
		{
			LOG.info("Inside hazardCompleteness - CALL 4");
			return "PARTIAL";
		}
		LOG.info("Inside hazardCompleteness - CALL 5");
		return "COMPLETE";
	}
	
	
	@Override
	public String gethazardCompletenessforWS()
	{
		LOG.info("Inside hazardCompleteness - CALL 1");
		final CartModel cartModel = bhgeCartService.getSessionCart();
		final BHGEHazardousInfoModel hazardInfo = cartModel.getBhgeHazardousInfo();

		LOG.info("Inside hazardCompleteness - CALL 2");

		if (Objects.isNull(hazardInfo))
		{
			LOG.info("Inside hazardCompleteness - CALL 3");
			return "PARTIAL";

		}
		else if ((hazardInfo.getDeclerationA() == null || !hazardInfo.getDeclerationA().booleanValue())
				&& (hazardInfo.getDeclerationB() == null || !hazardInfo.getDeclerationB().booleanValue()))
		{
			LOG.info("Inside hazardCompleteness - CALL 4");
			return "PARTIAL";
		}
		LOG.info("Inside hazardCompleteness - CALL 5");
		return "COMPLETE";
	}

	private Integer getMaxCartCount(final CartModel cartModel)
	{
		LOG.info("START getMaxCartCount facade - ");
		int maxValue = 0;
		if (cartModel != null && cartModel.getEntries() != null && cartModel.getEntries().size() > 0)
		{
			for (final AbstractOrderEntryModel entry : cartModel.getEntries())
			{
				LOG.info("START getMaxCartCount Entry Value - " + entry.getEntryNumber().intValue());
				if (entry != null && maxValue < entry.getEntryNumber().intValue())
				{
					maxValue = entry.getEntryNumber().intValue();
				}
			}
		}
		LOG.info("CLOSURE getMaxCartCount facade - " + maxValue);
		return maxValue;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.rma.BHGERmaFormFacade#setCheckoutRmaData(java.util.List)
	 */
	@Override
	public List<CheckoutRmaData> setCheckoutRmaData(final List<OrderData> orderDetailsList, final CurrencyModel currency)
	{
		final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");

		final List<CheckoutRmaData> rmaDataList = new ArrayList<>();
		for (final OrderData data : orderDetailsList)
		{
			final List<CheckoutRmaLineData> lineDataList = new ArrayList<>();
			final CheckoutRmaData rmaData = new CheckoutRmaData();

			rmaData.setCustNumber(data.getEndCustomerPo());
			rmaData.setPoNumber(data.getCustomerPO());
			rmaData.setRmaNumber(data.getReturnNumber());
			rmaData.setLineItems(String.valueOf(data.getEntries().size()));
			if (Objects.nonNull(data.getEntries()))
			{
				data.getEntries().forEach(entry -> {
					final CheckoutRmaLineData lineData = new CheckoutRmaLineData();
					lineData.setNetSelling(populatePrice(entry.getNetSelling(), currency));
					lineData.setUnitSelling(populatePrice(entry.getUnitSelling(), currency));
					lineData.setUnitList(populatePrice(entry.getUnitList(), currency));
					lineData.setSilverClause(populatePrice(entry.getSilverClause(), currency));
					lineData.setSilverClausePercentage(entry.getSilverClausePercentage());
					lineData.setPartNumber(entry.getPartNumber());
					lineData.setPartName(entry.getPartName());

					lineData.setPartDescription(entry.getProduct().getDescription());

					lineData.setQuantity(entry.getQuantity());
					if (sessionSalesAreaData != null)
					{
						lineData.setCurrencyIsoCode(sessionSalesAreaData.getCurrencyIso());
						lineData.setCurrencySymbol(sessionSalesAreaData.getCurrencySymbol());
					}
					else
					{
						lineData.setCurrencyIsoCode(data.getCurrencyIso());
						lineData.setCurrencySymbol(data.getCurrencySymbol());
					}
					lineData.getServiceOfferingText();
					entry.getServiceOfferingText();
					lineData.setServiceOfferingText(entry.getServiceOfferingText());
					lineDataList.add(lineData);
				});
			}
			rmaData.setRmaLineData(lineDataList);

			rmaDataList.add(rmaData);
		}
		return rmaDataList;
	}


	@Override
	public void setCheckoutRmaDataforWS(final List<OrderData> orderDetailsList, final CurrencyModel currency)
	{
		final SalesAreaData sessionSalesAreaData = bhgeSoldToUtil.getSalesAreaData();

		final List<CheckoutRmaData> rmaDataList = new ArrayList<>();
		for (final OrderData data : orderDetailsList)
		{
			final List<CheckoutRmaLineData> lineDataList = new ArrayList<>();
			final CheckoutRmaData rmaData = new CheckoutRmaData();

			rmaData.setCustNumber(data.getEndCustomerPo());
			rmaData.setPoNumber(data.getCustomerPO());
			rmaData.setRmaNumber(data.getReturnNumber());
			rmaData.setLineItems(String.valueOf(data.getEntries().size()));
			if (Objects.nonNull(data.getEntries()))
			{
				data.getEntries().forEach(entry -> {
					final CheckoutRmaLineData lineData = new CheckoutRmaLineData();
					lineData.setNetSelling(populatePrice(entry.getNetSelling(), currency));
					lineData.setUnitSelling(populatePrice(entry.getUnitSelling(), currency));
					lineData.setUnitList(populatePrice(entry.getUnitList(), currency));
					lineData.setSilverClause(populatePrice(entry.getSilverClause(), currency));
					lineData.setSilverClausePercentage(entry.getSilverClausePercentage());
					lineData.setPartNumber(entry.getPartNumber());
					lineData.setPartName(entry.getPartName());

					lineData.setPartDescription(entry.getProduct().getDescription());

					lineData.setQuantity(entry.getQuantity());
					if (sessionSalesAreaData != null)
					{
						lineData.setCurrencyIsoCode(sessionSalesAreaData.getCurrencyIso());
						lineData.setCurrencySymbol(sessionSalesAreaData.getCurrencySymbol());
					}
					else
					{
						lineData.setCurrencyIsoCode(data.getCurrencyIso());
						lineData.setCurrencySymbol(data.getCurrencySymbol());
					}
					lineData.getServiceOfferingText();
					entry.getServiceOfferingText();
					lineData.setServiceOfferingText(entry.getServiceOfferingText());
					lineDataList.add(lineData);
				});
			}
			rmaData.setRmaLineData(lineDataList);
			data.setRmaData(rmaData);
			rmaDataList.add(rmaData);
		}
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.rma.BHGERmaFormFacade#removeAttachment(java.lang.String)
	 */
	@Override
	public Boolean removeAttachment(final String fileName, final int entryNo)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		final AbstractOrderEntryModel cartEntry = getCartEntry(cartModel, entryNo);

		if (Objects.nonNull(cartEntry) && Objects.nonNull(cartEntry.getBhgeAdditionalInfo())
				&& Objects.nonNull(cartEntry.getBhgeAdditionalInfo().getFormAttachments()))
		{
			if (cartEntry.getBhgeAdditionalInfo().getFormAttachments().size() > 0)
			{
				final List<MediaModel> mediaList = (List<MediaModel>) cartEntry.getBhgeAdditionalInfo().getFormAttachments();
				final List<MediaModel> newlList = new ArrayList<MediaModel>();
				final Iterator<MediaModel> itr = mediaList.iterator();
				while (itr.hasNext())
				{
					final MediaModel model = itr.next();
					final String name = model.getRealFileName();
					if (!name.equalsIgnoreCase(fileName))
					{
						newlList.add(model);
					}

				}
				final BHGEAdditionalInfoModel additionalInfo = cartEntry.getBhgeAdditionalInfo();
				additionalInfo.setFormAttachments(newlList);

				try
				{
					modelService.save(additionalInfo);
					modelService.save(cartEntry);
					return true;
				}
				catch (final Exception e)
				{
					LOG.info("Exception e" + e.getMessage());
				}
			}


		}
		return false;
	}





	@Override
	public Boolean removeHazardInfoFiles(final String fileName)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();
		//final AbstractOrderEntryModel cartEntry = getCartEntry(cartModel, entryNo);

		if (Objects.nonNull(cartModel.getBhgeHazardousInfo())
				&& Objects.nonNull(cartModel.getBhgeHazardousInfo().getHazardformAttachments()))
		{
			if (cartModel.getBhgeHazardousInfo().getHazardformAttachments().size() > 0)
			{
				final List<MediaModel> mediaList = (List<MediaModel>) cartModel.getBhgeHazardousInfo().getHazardformAttachments();
				final List<MediaModel> newlList = new ArrayList<MediaModel>();
				final Iterator<MediaModel> itr = mediaList.iterator();
				while (itr.hasNext())
				{
					final MediaModel model = itr.next();
					final String name = model.getRealFileName();
					if (!name.equalsIgnoreCase(fileName))
					{
						newlList.add(model);
					}

				}
				final BHGEHazardousInfoModel hazardInfoFiles = cartModel.getBhgeHazardousInfo();
				hazardInfoFiles.setHazardformAttachments(newlList);

				try
				{
					modelService.save(hazardInfoFiles);
					modelService.save(cartModel);
					return true;
				}
				catch (final Exception e)
				{
					LOG.info("Exception e" + e.getMessage());
				}
			}


		}
		return false;
	}



	@Override
	public GEEdgeProductModel fetchReturnPart(final String partNumber)
	{
		GEEdgeProductModel geProductModel = null;
		try
		{
			LOG.info("fetchReturnPart Set 01 " + partNumber);
			geProductModel = (GEEdgeProductModel) getProduct(partNumber);
		}
		catch (final Exception exc)
		{
			LOG.info("Inside rmaFormSubmit Error - Product Data Fetch");
			exc.printStackTrace();
			return geProductModel;
		}
		return geProductModel;

	}

	@Override
	public Boolean saveReturnPo(final List<ReturnPoData> poDataList)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();

		final List<ReturnPOModel> retrunPoList = cartModel.getReturnPO();

		if (retrunPoList != null && retrunPoList.size() > 0)
		{

			for (final ReturnPoData poData : poDataList)
			{
				boolean flag = true;
				for (final ReturnPOModel poModel1 : retrunPoList)
				{
					if (poModel1.getReturnLocation() != null && poData.getReturnLocation() != null)
					{

						if (poModel1.getReturnLocation().equalsIgnoreCase(poData.getReturnLocation()))
						{
							poModel1.setPoNumber(poData.getReturnPoNum());
							poModel1.setEndCustomerPo(poData.getReturnCustPoNum());
							poModel1.setReturnLocation(poData.getReturnLocation());
							modelService.save(poModel1);
							modelService.save(cartModel);
							flag = false;
						}
					}

				}
				if (flag == true)
				{
					final List<ReturnPOModel> poList = new ArrayList<>();
					final ReturnPOModel poModel = modelService.create(ReturnPOModel.class);
					poModel.setPoNumber(poData.getReturnPoNum());
					poModel.setEndCustomerPo(poData.getReturnCustPoNum());
					poModel.setReturnLocation(poData.getReturnLocation());
					modelService.save(poModel);
					poList.addAll(cartModel.getReturnPO());
					poList.add(poModel);
					cartModel.setIsAttachmentMoved(false);
					cartModel.setReturnPO(poList);
					modelService.save(cartModel);
				}
			}
		}
		else
		{
			final List<ReturnPOModel> poList = new ArrayList<>();
			for (final ReturnPoData poData : poDataList)
			{
				final ReturnPOModel poModel = modelService.create(ReturnPOModel.class);
				poModel.setPoNumber(poData.getReturnPoNum());
				poModel.setEndCustomerPo(poData.getReturnCustPoNum());
				poModel.setReturnLocation(poData.getReturnLocation());
				modelService.save(poModel);
				poList.add(poModel);
				
			}
			cartModel.setIsAttachmentMoved(false);
			cartModel.setReturnPO(poList);
			modelService.save(cartModel);
		}
		return true;
	}
	
	
	//Added for spartacus migration
	@Override
	public Boolean saveReturnPoForWs(CartModel cartModel, final List<ReturnPoData> poDataList)
	{
		LOG.info("Inside saveReturnPoForWs method in facade");
		List<ReturnPOModel> retrunPoList = cartModel.getReturnPO();
		if (retrunPoList == null) {
			retrunPoList = new ArrayList<>();
		}
		// Use a map for quick lookup by returnLocation (case-insensitive)
		Map<String, ReturnPOModel> locationToPoModel = new HashMap<>();
		for (ReturnPOModel poModel : retrunPoList) {
			LOG.info("Existing ReturnPOModel - PO Number: " + poModel.getPoNumber() + ", Return Location: " + poModel.getReturnLocation());
			if (poModel.getReturnLocation() != null) {
				locationToPoModel.put(poModel.getReturnLocation().toLowerCase(), poModel);
			}
		}
		boolean updated = false;
		List<ReturnPOModel> updatedPoModels = new ArrayList<>();
		for (ReturnPoData poData : poDataList) {
			String locationKey = poData.getReturnLocation() != null ? poData.getReturnLocation().toLowerCase() : null;
			ReturnPOModel poModel = locationKey != null ? locationToPoModel.get(locationKey) : null;
			if (poModel != null) {
				LOG.info(" saveReturnPoForWs Updating existing ReturnPOModel for location: " + poData.getReturnLocation());
				// Update existing
				poModel.setPoNumber(poData.getReturnPoNum());
				poModel.setEndCustomerPo(poData.getReturnCustPoNum());
				poModel.setReturnLocation(poData.getReturnLocation());
				modelService.save(poModel);
				updatedPoModels.addAll(cartModel.getReturnPO());
				updatedPoModels.add(poModel);
				updated = true;
			} else {
				LOG.info("saveReturnPoForWs Creating new ReturnPOModel for location: " + poData.getReturnLocation());
				// Create new
				ReturnPOModel newPoModel = modelService.create(ReturnPOModel.class);
				newPoModel.setPoNumber(poData.getReturnPoNum());
				newPoModel.setEndCustomerPo(poData.getReturnCustPoNum());
				newPoModel.setReturnLocation(poData.getReturnLocation());
				modelService.save(newPoModel);
				updatedPoModels.addAll(cartModel.getReturnPO());
				LOG.info("saveReturnPoForWs Adding new ReturnPOModel to list - PO Number: " + newPoModel.getPoNumber() + ", Return Location: " + newPoModel.getReturnLocation());
				updatedPoModels.add(newPoModel);
				LOG.info("saveReturnPoForWs Updated PO list size: " + updatedPoModels.size() + " for cart: " + cartModel.getCode());
				updated = true;
			}
		}
		if (updated) {
			LOG.info("saveReturnPoForWs Saving updated return PO list to cart");
			cartModel.setIsAttachmentMoved(false);
			LOG.info("saveReturnPoForWs Final PO list size being set to cart: " + updatedPoModels.size() + " for cart: " + cartModel.getCode());
			cartModel.setReturnPO(updatedPoModels);
			modelService.save(cartModel);
		}
		return Boolean.TRUE;
	}

	public static final String LINE_SEPERATOR = "\n";
	public static final String DELIMITER = ",";

	public void generateCsvForGuestUser(final List<String> headers, final boolean includeHeader, final CartData cartData,
			final Writer writer) throws IOException
	{
		LOG.info("Inside generateCsvForGuestUser");
		if (includeHeader && CollectionUtils.isNotEmpty(headers))
		{
			final StringBuilder csvHeader = new StringBuilder();
			int i = 0;
			for (; i < headers.size() - 1; i++)
			{
				csvHeader.append(StringEscapeUtils.escapeCsv(headers.get(i))).append(DELIMITER);
			}
			csvHeader.append(StringEscapeUtils.escapeCsv(headers.get(i))).append(LINE_SEPERATOR);
			writer.write(csvHeader.toString());
		}

		if (cartData != null && CollectionUtils.isNotEmpty(cartData.getEntries()))
		{
			writeOrderEntries(writer, cartData.getEntries());
		}
	}

	protected void writeOrderEntries(final Writer writer, final List<OrderEntryData> entries) throws IOException
	{
		LOG.info("Inside generateCsvForGuestUser-entries");
		for (final OrderEntryData entry : entries)
		{
			if (Boolean.TRUE.equals(entry.getProduct().getMultidimensional()))
			{
				for (final OrderEntryData subEntry : entry.getEntries())
				{
					writeOrderEntry(writer, subEntry);
				}
			}
			else
			{
				writeOrderEntry(writer, entry);
			}
		}
	}

	protected void writeOrderEntry(final Writer writer, final OrderEntryData entry) throws IOException
	{
		LOG.info("Inside generateCsvForGuestUser-entries-writeOrderEntry");
		final StringBuilder csvContent = new StringBuilder();
		csvContent.append(StringEscapeUtils.escapeCsv(entry.getProduct().getCode())).append(DELIMITER)
				.append(StringEscapeUtils.escapeCsv(entry.getQuantity().toString())).append(DELIMITER)
				.append(StringEscapeUtils.escapeCsv(entry.getProduct().getName())).append(LINE_SEPERATOR);

		writer.write(csvContent.toString());
	}

	public void generateExcelFromCart(final HSSFWorkbook xlsFile, final HSSFSheet sheet, final CartData cartData,
			final CreationHelper helper, final Boolean isLoggedInUser)
	{
		LOG.info("Inside generateExcelForLoggedInUserFromCart");
		boolean vcCart = false;
		if (CollectionUtils.isNotEmpty(cartData.getEntries()))
		{
			for (final OrderEntryData entry : cartData.getEntries()) {
				if (entry.getProduct().getConfigurable()) {
					vcCart = true;
					break;
				}

			}
			if(vcCart) {
				int i = 1;
				for (final OrderEntryData entry : cartData.getEntries()) {
					Row newRow = sheet.createRow(i);
					if (null != entry.getProduct() && Boolean.TRUE.equals(entry.getProduct().getMultidimensional())) {
						final Iterator<OrderEntryData> iterator = entry.getEntries().iterator();
						while (iterator.hasNext()) {
							final OrderEntryData orderEntryData = iterator.next();
							if (null != orderEntryData) {
									writeOrderEntryToRowVC(newRow, orderEntryData, helper, isLoggedInUser);
									if (iterator.hasNext()) {
										i++;
										newRow = sheet.createRow(i);
									}
							}
						}
					} else {
						writeOrderEntryToRowVC(newRow, entry, helper, isLoggedInUser);
					}
					i++;
				}
			} else {
				int i = 1;
				for (final OrderEntryData entry : cartData.getEntries()) {
					Row newRow = sheet.createRow(i);
					if (null != entry.getProduct() && Boolean.TRUE.equals(entry.getProduct().getMultidimensional())) {
						final Iterator<OrderEntryData> iterator = entry.getEntries().iterator();
						while (iterator.hasNext()) {
							final OrderEntryData orderEntryData = iterator.next();
							if (null != orderEntryData) {
									writeOrderEntryToRowNonVC(newRow, orderEntryData, helper, isLoggedInUser);
									if (iterator.hasNext()) {
										i++;
										newRow = sheet.createRow(i);
									}
							}
						}
					} else {
						writeOrderEntryToRowNonVC(newRow, entry, helper, isLoggedInUser);
					}
					i++;
				}

			}
		}
	}

	/* To write the dynamic cart value to Excel cell */
	private void writeOrderEntryToRowVC(final Row row, final OrderEntryData entry, final CreationHelper helper,
			final Boolean isLoggedInUser)
	{
		try
		{
			if (null != entry.getProduct())
			{
				row.createCell(0).setCellValue(helper.createRichTextString(entry.getProduct().getCode()));
			}
			if (null != entry.getQuantity())
			{
				row.createCell(1).setCellValue(helper.createRichTextString(entry.getQuantity().toString()));
			}
			if (null != entry.getProduct())
			{
				row.createCell(2).setCellValue(helper.createRichTextString(entry.getProduct().getName()));
			}
			// Price data will be added only if its Logged-in or RMA cart which is based on isLoggedInUser flag .
			//DE5972
			if (isLoggedInUser)
			{
				if (StringUtils.isNotEmpty(entry.getFullyConfigurePartNumber())) {

					row.createCell(3).setCellValue(helper.createRichTextString(entry.getFullyConfigurePartNumber()));
				}
				if (null != entry.getBasePrice() && entry.getBasePrice().getFormattedValue().equalsIgnoreCase("To be quoted"))
				{
					row.createCell(4).setCellValue(helper.createRichTextString(entry.getBasePrice().getFormattedValue()));
				}
				else
				{
					row.createCell(4).setCellValue(helper.createRichTextString(entry.getNetSellingPrice().getFormattedValue()));
				}
			}

		}
		catch (final Exception e)
		{
			LOG.error("Exception in writeOrderEntryToRow method while writing the dynamic cart value to Excel cell", e);
		}
	}

	private void writeOrderEntryToRowNonVC(final Row row, final OrderEntryData entry, final CreationHelper helper,
									  final Boolean isLoggedInUser)
	{
		try
		{
			if (null != entry.getProduct())
			{
				row.createCell(0).setCellValue(helper.createRichTextString(entry.getProduct().getCode()));
			}
			if (null != entry.getQuantity())
			{
				row.createCell(1).setCellValue(helper.createRichTextString(entry.getQuantity().toString()));
			}
			if (null != entry.getProduct())
			{
				row.createCell(2).setCellValue(helper.createRichTextString(entry.getProduct().getName()));
			}
			// Price data will be added only if its Logged-in or RMA cart which is based on isLoggedInUser flag .
			//DE5972
			if (isLoggedInUser)
			{
				if (null != entry.getBasePrice() && entry.getBasePrice().getFormattedValue().equalsIgnoreCase("To be quoted"))
				{
					row.createCell(3).setCellValue(helper.createRichTextString(entry.getBasePrice().getFormattedValue()));
				}
				else
				{
					row.createCell(3).setCellValue(helper.createRichTextString(entry.getNetSellingPrice().getFormattedValue()));
				}
			}

		}
		catch (final Exception e)
		{
			LOG.error("Exception in writeOrderEntryToRow method while writing the dynamic cart value to Excel cell", e);
		}
	}

	private CartModel getCartByCode(final String cartCode, final UserModel customer)
	{
		final CartModel cartModel = commerceCartService.getCartForCodeAndUser(cartCode, customer);
		if (cartModel != null)
		{
			return isAbstractOrderMatchBaseSite(cartModel) ? cartModel : null;
		}
		return commerceCartService.getCartForGuidAndSiteAndUser(cartCode, baseSiteService.getCurrentBaseSite(), customer);
	}

	private boolean isAbstractOrderMatchBaseSite(final AbstractOrderModel abstractOrderModel)
	{
		return abstractOrderModel.getSite() != null
				&& baseSiteService.getCurrentBaseSite().getUid().equals(abstractOrderModel.getSite().getUid());
	}


	@Override
	public Boolean removePOAttachment(final String returnLocation)
	{

		final CartModel cartModel = bhgeCartService.getSessionCart();
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			cartModel.setReturnPO(null);
			modelService.save(cartModel);
		}
		else
		{
			final List<ReturnPOModel> retrunPoList = cartModel.getReturnPO();
			for (final ReturnPOModel poModel : retrunPoList)
			{
				if (poModel.getReturnLocation().equalsIgnoreCase(returnLocation))
				{
					poModel.setPoAttachments(null);
					modelService.save(poModel);
				}
			}
		}
		return true;

	}

	@Override
	public List<MaterialData> prepareServiceOffering(final List<RMAData> data, final boolean equipSearch, final String wildSearch,
													 final String searchType)
	{
		LOG.info("Equip Search : START prepareServiceOffering - " + data + " & WildSearch - " + wildSearch + " & searchType - "
				+ searchType);
		final List<BHGERmaOfferingData> offeringList = bhgeRmaFormFacade.getServiceOffering(data, equipSearch, wildSearch,
				searchType);
		LOG.info("US563160 - offeringList value " +offeringList);
		final List<MaterialData> equipList = new ArrayList<>();

		for (final BHGERmaOfferingData offeringData : offeringList)
		{
			final Set<String> partNos = offeringData.getMaterialDataTable().keySet();
			partNos.forEach(part -> {
				if (offeringData.getMaterialDataTable().get(part) != null)
				{
					equipList.addAll(offeringData.getMaterialDataTable().get(part));
				}
			});
		}
		LOG.info("Equip Search : CLOSE prepareServiceOffering - " + data + " & WildSearch - " + wildSearch
				+ " & offeringResponses - " + equipList.size());
		return equipList;

	}
	
	@Override
	public List<OfferDescriptionData> setOfferDescriptionData(BHGERmaOfferingData rmaOfferingData,String part)
	{
		final List<OfferDescriptionData> offerDescriptionData = new ArrayList<>();
		//Populate Offering Set
		
		Set<String> offeringSet = new HashSet<>();
		rmaOfferingData.getOfferingsDataTable().get(part).forEach(offering -> {
			offeringSet.add(offering.getServiceOffering());
		});
		rmaOfferingData.getOfferDescriptionDataTable().forEach(data -> {
			if (offeringSet.contains(data.getServiceOffering()))
			{
				//Retrieve the offering from offering table
				OfferingData offering = rmaOfferingData.getOfferingsDataTable().get(part).stream().filter(offeringData -> offeringData.getServiceOffering().equalsIgnoreCase(data.getServiceOffering())).findFirst().orElse(new OfferingData());
				List<PlantServiceData> plantsList = new ArrayList<>();
				String serviceOffering = data.getServiceOffering();
				if (!StringUtils.isEmpty(offering.getAlternatePlant()) || !StringUtils.isEmpty(offering.getDropShipPlant()))
				{
					if (!StringUtils.isEmpty(offering.getAlternatePlant()))
					{
						final PricingData price = rmaOfferingData.getPricingDataTable().get(part).stream()
								.filter(plantData -> plantData.getServiceOffering().equalsIgnoreCase(offering.getServiceOffering())).findFirst()
								.orElse(new PricingData());


						final PlantServiceData service = new PlantServiceData();
						service.setPlantType("Alternate Plant");
						service.setPlantCode(offering.getAlternatePlant());
						service.setPrice(price.getUnitPrice());
						service.setDiscount(price.getUnitDiscount());
						plantsList.add(service);
					}
					if (!StringUtils.isEmpty(offering.getDropShipPlant()))
					{
						final PricingData price = rmaOfferingData.getPricingDataTable().get(part).stream()
								.filter(plantData -> plantData.getServiceOffering().equalsIgnoreCase(offering.getServiceOffering())).findFirst()
								.orElse(new PricingData());


						final PlantServiceData service = new PlantServiceData();
						service.setPlantType("DropShip Plant");
						service.setPlantCode(offering.getDropShipPlant());
						service.setPrice(price.getUnitPrice());
						service.setDiscount(price.getUnitDiscount());
						plantsList.add(service);
					}
				}
				else if (!StringUtils.isEmpty(offering.getPlanningPlant()))
				{
					final PricingData price = rmaOfferingData.getPricingDataTable().get(part).stream()
							.filter(plantData -> plantData.getServiceOffering().equalsIgnoreCase(offering.getServiceOffering())).findFirst()
							.orElse(new PricingData());

					final PlantServiceData service = new PlantServiceData();
					service.setPlantType("Planning Plant");
					service.setPlantCode(offering.getPlanningPlant());
					service.setPrice(price.getUnitPrice());
					service.setDiscount(price.getUnitDiscount());
					plantsList.add(service);
				}
				if (Objects.nonNull(data) && StringUtils.isEmpty(data.getCategory()))
				{
					data.setCategory("UNKNOWN");
				}
				data.setPlants(plantsList);
				offerDescriptionData.add(data);
			}
		});
		return offerDescriptionData;
	}
	
	@Override
	public List<ErrorData> getErrorDataList(BHGERmaOfferingData rmaOfferingData,String part)
	{
		final Map<String, List<ErrorData>> errorDataTable = rmaOfferingData.getErrorDescriptionDataTable();
		List<ErrorData> errorDataList = new ArrayList<>();
		for (final Entry<String, List<ErrorData>> data : errorDataTable.entrySet())
		{
			if (data.getKey().equalsIgnoreCase(part))
			{
				for(ErrorData errorData : data.getValue())
				{
					errorDataList.add(errorData);
				}
			}
		}
		return errorDataList;
	}
	
	// Added for DS Store spartacus migration
	@Override
	public String uploadAdditionalFileForCartWs(CartModel cartModel, final MultipartFile file, final Integer flag, final String returnLocation)
	{
		//switchCart();
		//final CartModel cartModel = bhgeCartService.getSessionCart();

		final List<ReturnPOModel> retrunPoList = cartModel.getReturnPO();
		boolean flag1 = true;
		final List<MediaModel> additioanalAttachmentList = new ArrayList<>();
		MediaModel mediaModel = null;
		try
		{
			if ((null != file) && ((!file.isEmpty())))
			{

				mediaModel = bhgeRmaFormService.uploadAdditionalFileWs(file);
				modelService.save(mediaModel);
				if (null != mediaModel)
				{
					final String name = mediaModel.getRealFileName();
				}
			}

//			Below code has been commented to save only the latest PO uploaded by user.
//			if (retrunPoList != null && retrunPoList.size() > 0)
//			{
//
//
//
//				for (final ReturnPOModel poModel : retrunPoList)
//				{
//					if (poModel.getReturnLocation() != null && returnLocation != null)
//					{
//						if (poModel.getReturnLocation().equalsIgnoreCase(returnLocation))
//						{
//							if (poModel.getPoAttachments() != null)
//							{
//								additioanalAttachmentList.addAll(poModel.getPoAttachments());
//								additioanalAttachmentList.add(mediaModel);
//								poModel.setPoAttachments(additioanalAttachmentList);
//								modelService.save(poModel);
//								modelService.save(cartModel);
//
//								flag1 = false;
//							}
//							else
//							{
//								final List<MediaModel> mediaList = new ArrayList<>();
//								mediaList.add(mediaModel);
//								poModel.setPoAttachments(mediaList);
//								modelService.save(poModel);
//								modelService.save(cartModel);
//							}
//						}
//					}
//				}
//
//				if (flag1 == true)
//				{
//					final List<ReturnPOModel> poList = new ArrayList<>();
//					final ReturnPOModel poModel = modelService.create(ReturnPOModel.class);
//					poModel.setReturnLocation(returnLocation);
//
//					final List<MediaModel> mediaList = new ArrayList<>();
//					mediaList.add(mediaModel);
//					poModel.setPoAttachments(mediaList);
//					modelService.save(poModel);
//
//					poList.addAll(cartModel.getReturnPO());
//					poList.add(poModel);
//					cartModel.setIsAttachmentMoved(false);
//					cartModel.setReturnPO(poList);
//					modelService.save(cartModel);
//				}
//			}
//			else
//			{
				final List<ReturnPOModel> poList = new ArrayList<>();
				final ReturnPOModel poModel = modelService.create(ReturnPOModel.class);
				poModel.setReturnLocation(returnLocation);

				final List<MediaModel> mediaList = new ArrayList<>();
				mediaList.add(mediaModel);
				poModel.setPoAttachments(mediaList);

				modelService.save(poModel);
				poList.add(poModel);
				cartModel.setIsAttachmentMoved(false);
				cartModel.setReturnPO(poList);
				modelService.save(cartModel);
//			}

		}
		catch (final Exception e)
		{
			LOG.error("Error in uploading attachment to the Cart" + ExceptionUtils.getStackTrace(e));
			return "error";
		}
		return "success";
	}
	
	@Override
	public Boolean removePOAttachmentWs(CartModel cartModel, final String returnLocation)
	{

		//final CartModel cartModel = bhgeCartService.getSessionCart();
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			cartModel.setReturnPO(null);
			modelService.save(cartModel);
		}
		else
		{
			final List<ReturnPOModel> retrunPoList = cartModel.getReturnPO();
			for (final ReturnPOModel poModel : retrunPoList)
			{
				if (poModel.getReturnLocation().equalsIgnoreCase(returnLocation))
				{
					poModel.setPoAttachments(null);
					modelService.save(poModel);
				}
			}
		}
		return true;

	}
	
	@Override
	public CartData getReturnsCartForSavedCart(CartData cartData,String cartId)
	{
		final UserModel currentUser = userService.getCurrentUser();
		final List<RmaReturnCartData> returnList = createRmaReturnCartForSavedCart(cartId,currentUser);
		Double totalCartPrice = 0.0;
		Double totalDiscount = 0.0;
		PriceData totalCartPriceData = new PriceData();
		PriceData totalCartDiscount = new PriceData();
		for (final RmaReturnCartData data : returnList)
		{
			if (data.getTotalPrice() != null && data.getTotalPrice().getValue() != null)
			{
				totalCartPrice = totalCartPrice + data.getTotalPrice().getValue().doubleValue();
			}
			if (data.getTotalDiscount() != null && data.getTotalDiscount().getValue() != null)
			{
				totalDiscount = totalDiscount
						+ (data.getTotalDiscount().getValue().doubleValue() * data.getQuantity().longValue());
			}
		}
		CartModel cartModel = commerceCartService.getCartForCodeAndUser(cartId, currentUser);
		cartModel.setYourPriceDiscount(totalDiscount);
		totalCartPriceData = populatePrice(cartModel.getTotalReturnPrice(), cartModel.getCurrency());
		totalCartDiscount = populatePrice(totalDiscount, cartModel.getCurrency());
		cartData.setReturnsCartData(returnList);
		cartData.setTotalReturnCartPrice(totalCartPriceData);
		cartData.setTotalReturnCartPriceDiscount(totalCartDiscount);
		modelService.save(cartModel);
		return cartData;

	}
	
	@Override
	public List<RmaReturnCartData> createRmaReturnCartForSavedCart(String cartId,UserModel currentUser)
	{
		final CartModel cartModel = commerceCartService.getCartForCodeAndUser(cartId, currentUser);

		for (final AbstractOrderEntryModel entry : cartModel.getEntries())
		{
			boolean cartCreated = false;
			boolean removeCartEntries = false;
			// condition to know parent cart entry for accessories scenario
			if ((entry.getParentEntryNumber() == null || !(entry.getParentEntryNumber() > 0))
					&& entry.getAccessoryPartNumbers() != null && entry.getAccessoryPartNumbers().size() > 0)
			{
				final List<String> accessories = new ArrayList<String>();
				final Map<Integer, List<String>> accessoryMap = new HashMap<Integer, List<String>>();
				final Map<Integer, List<Integer>> accessoryCartEntriesMap = new HashMap<Integer, List<Integer>>();
				getAccessoryMapForCart(cartModel, accessoryMap, accessoryCartEntriesMap);
				for (final String s : entry.getAccessoryPartNumbers())
				{
					if(s.contains("###"))
					{
						final String partNumber = s.substring(0, s.indexOf("###"));
						accessories.add(partNumber);
					}
					else
					{
						accessories.add(s);
					}
				}
				final List<String> originalAccessories = accessoryMap.get(entry.getEntryNumber());
				if (originalAccessories != null)
				{
					Collections.sort(originalAccessories);
					Collections.sort(accessories);
					if (!originalAccessories.equals(accessories))
					{
						removeCartEntries = true;
						removeCartEntries(accessoryCartEntriesMap.get(entry.getEntryNumber()));
						entry.setAccessoryProducts(Collections.EMPTY_LIST);
						modelService.save(entry);
						modelService.refresh(entry);
						cartCreated = false;
					}
					else
					{
						cartCreated = true;
					}
				}
			}
			else
			{
				for (final AbstractOrderEntryModel accEntry : cartModel.getEntries())
				{
					if (accEntry.getParentEntryNumber() != null && accEntry.getParentEntryNumber() == entry.getEntryNumber())
					{
						LOG.info("Cart entry related accessory entry will be deleted with entry number: " + accEntry.getEntryNumber());
						modelService.remove(accEntry);
						entry.setAccessoryProducts(Collections.EMPTY_LIST);
						modelService.save(entry);
						modelService.refresh(entry);
						modelService.save(cartModel);
						modelService.refresh(cartModel);
						cartCreated = true;
					}
				}
			}
			if (!cartCreated)
			{
				LOG.info("####### ACCESSORY FOR PARENT CART CREATION BEIGNS #######");
				LOG.info("Accessory will be created for Parent Cart Entry Number: " + entry.getEntryNumber());
				final Integer parentEntryNumber = entry.getEntryNumber();
				createAccessoryCart(parentEntryNumber, cartModel, cartCreated);
			}
		}

		modelService.refresh(cartModel);
		LOG.info("Cart model total entries: " + cartModel.getEntries().size());

		priceFlag = false;
		//CartModel cartModels = bhgeCartService.getSessionCart();
		validateCartPrice(cartModel);
		totalPriceforCart = 0.0;
		LOG.info("totalPriceforCart before price change: " + totalPriceforCart);
		cartModel.getEntries().forEach(entry -> {
			totalPriceforCart = totalPriceforCart + entry.getTotalReturnPrice();
			if (entry.getTotalReturnPrice() == 0.0)
			{
				priceFlag = true;
			}
		});
		LOG.info("totalPriceforCart after price change: " + totalPriceforCart);
		if (priceFlag)
		{
			cartModel.setTotalReturnPrice(new Double(0.0));
		}
		else
		{
			cartModel.setTotalReturnPrice(new Double(totalPriceforCart));
		}
		modelService.save(cartModel);
		final List<RmaReturnCartData> returnList = new ArrayList<>();
		final List<RmaReturnCartData> sorted = new ArrayList<>();
		for (final AbstractOrderEntryModel cartEntry : cartModel.getEntries())
		{
			final RmaReturnCartData obj = bhgeRmaCartPopulator.convert(cartEntry);
			returnList.add(obj);
		}
		Collections.sort(returnList, new SortByPlantName());
		return returnList;
	} 
	
	public BHGERmaStatusData createEntireCartFromRMA(final String rmaNumber, final String cartId) {
		final List<String> customerList = new ArrayList<>();
		customerList.add(bhgeRMAStatusService.getSoldTo());
		final String ORDERTYPE_DET = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))
				? Config.getParameter("ORDERTYPE_DET")
				: "CP_DET";
		String orderType = ORDERTYPE_DET;
		String poNumber = "";
		List<String> productNotFound = new ArrayList<>();
		BHGERmaStatusData rmaStatusBaseData = bhgeRMAStatusFacade.getQuickRmaStatusData(customerList, orderType,
				rmaNumber, poNumber);
		List<RmaItemStatusData> itemsList = rmaStatusBaseData.getRmaHeaderStatusDetails().get(0)
				.getRmaItemStatusDetails();
		CartModel cart = bhgeRmaFormService.getCartById(cartId);
		if (cart.getEntries() != null) {
			cart.setEntries(null);
			modelService.save(cart);
		}

		///// calling Existing RMA Start

		for (RmaItemStatusData item : itemsList) {
			try {

			GEEdgeProductModel productModel = (GEEdgeProductModel) bhgeProductService
					.getProductForCode(item.getPartNumber());
			if (productModel != null) {
				BHGEProductAccessData accessData = getProductAccessability(productModel);
				if (accessData.isIsService()) {
									
					saveRMACart(item,productModel,cartId);

				}
				else {
					
					productNotFound.add(item.getPartNumber());
				}

				///// calling Existing RMA end

			} else {
				productNotFound.add(item.getPartNumber());
			}
		}
			catch(UnknownIdentifierException e)
			{
				LOG.error("product not found");
				productNotFound.add(item.getPartNumber());
			}
		}
		
		if(!productNotFound.isEmpty())
		{
			cart.setEntries(null);
			modelService.save(cart);
		}
		rmaStatusBaseData.setProductErrorCodes(productNotFound);;

		return rmaStatusBaseData;
	}

	public BHGERmaStatusData createCartFromRMA(final String rmaNumber, final String cartId, final Integer entryNumber) {
		final List<String> customerList = new ArrayList<>();
		customerList.add(bhgeRMAStatusService.getSoldTo());
		final String ORDERTYPE_DET = (StringUtils.isNotBlank(Config.getParameter("ORDERTYPE_DET")))
				? Config.getParameter("ORDERTYPE_DET")
				: "CP_DET";
		String orderType = ORDERTYPE_DET;
		List<String> productNotFound = new ArrayList<>();

		String poNumber = "";
		BHGERmaStatusData rmaStatusBaseData = bhgeRMAStatusFacade.getQuickRmaStatusData(customerList, orderType,
				rmaNumber, poNumber);
		List<RmaItemStatusData> itemsList = rmaStatusBaseData.getRmaHeaderStatusDetails().get(0)
				.getRmaItemStatusDetails();

		CartModel cart = bhgeRmaFormService.getCartById(cartId);
		if (cart.getEntries() != null) {
			cart.setEntries(null);
			modelService.save(cart);
		}

		Integer index = 1;
		for (RmaItemStatusData item : itemsList) {
			try {
			if (index == entryNumber) {
				GEEdgeProductModel productModel = (GEEdgeProductModel) bhgeProductService
						.getProductForCode(item.getPartNumber());
				if (productModel != null) {
					BHGEProductAccessData accessData = getProductAccessability(productModel);
					if (accessData.isIsService()) {
						saveRMACart(item,productModel,cartId);
						break;
					}
					else {
						index++;
						productNotFound.add(item.getPartNumber());
					}
				}

				else {
					productNotFound.add(item.getPartNumber());
				}
			} 
			else {
				index++;
			}
			
		}
		catch(UnknownIdentifierException e)
		{
			LOG.error("product not found");
			productNotFound.add(item.getPartNumber());
			break;
		}
		}
		if(!productNotFound.isEmpty())
		{
			cart.setEntries(null);
			modelService.save(cart);
		}
		
		rmaStatusBaseData.setProductErrorCodes(productNotFound);
		return rmaStatusBaseData;

	}

	public void serviceOfferingToRMA(List<RMAData> reqBody, RmaItemStatusData item, AbstractOrderEntryModel cartEntry) {
		LOG.info("===================== SERVING OFFERING SAP CALL - START ==================="
				+ java.time.LocalDateTime.now());

		final List<BHGERmaOfferingData> offeringList = getServiceOffering(reqBody, false, null, null);
		LOG.info("===================== SERVING OFFERING SAP CALL - END ==================="
				+ java.time.LocalDateTime.now());
		List<OfferDescriptionData> serviceList = offeringList.get(0).getOfferDescriptionDataTable();
		for (OfferDescriptionData so : serviceList) {
			if (so.getServiceOfferingLongDesc().equals(item.getServiceOffering())) {

				BHGEServiceOfferingsData serviceData = new BHGEServiceOfferingsData();
				serviceData.setOfferingCode(so.getServiceOffering());
				serviceData.setOfferingType(so.getCategory());
				serviceData.setOfferingText(so.getServiceOfferingDescription());
				serviceData.setProblemDescription(item.getRepairReason());

				final BHGEServiceOfferingsModel serviceOfferingModel = modelService
						.create(BHGEServiceOfferingsModel.class);
				bhgeServiceOfferingPopulator.populate(serviceData, serviceOfferingModel);
				serviceOfferingModel.setRmaForm(cartEntry);
				modelService.save(serviceOfferingModel);
				break;
			}
		}
	}

	private BHGEProductAccessData getProductAccessability(final ProductModel model) {
		BHGEProductAccessData accessData = new BHGEProductAccessData();
		for (final BHGEProductAccessStrategy splittingStrategy : getStrategiesList()) {
			accessData = splittingStrategy.isProductAccessible(model, accessData);
		}
		return accessData;
	}
	
	public void saveRMACart(RmaItemStatusData item, GEEdgeProductModel productModel,String cartId)
	{


		BHGERmaEntryWsDTO formData = new BHGERmaEntryWsDTO();
		List<RMAData> reqBody = new ArrayList<>();
		RMAData data = new RMAData();
		data.setMaterialNumber(productModel.getCode());
		reqBody.add(data);

		final List<BHGERmaOfferingData> offeringList = getServiceOffering(reqBody, false, null, null);

		if (offeringList.get(0).getOfferingsDataTable() != null) {
			List<OfferingData> fromSAP = offeringList.get(0).getOfferingsDataTable()
					.get(productModel.getCode());
			formData.setOfferingDataList(fromSAP);

			List<BHGEServiceOfferingsData> selectedOfferingList = new ArrayList<>();

			List<OfferDescriptionData> services = offeringList.get(0).getOfferDescriptionDataTable();
			if (item.getServiceOffering() != null) {
				for (OfferDescriptionData x : services) {
					if (x.getServiceOfferingDescription().toUpperCase()
							.equals(item.getServiceOffering().toUpperCase())) {
						BHGEServiceOfferingsData selectedOffering = new BHGEServiceOfferingsData();
						selectedOffering.setOfferingCode(x.getServiceOffering());
						selectedOffering.setOfferingType(x.getCategory());
						selectedOffering.setOfferingText(x.getServiceOfferingDescription());
						selectedOfferingList.add(selectedOffering);
						formData.setServiceOfferings(selectedOfferingList);

						break;
					}

				}
			}
		}

		com.ds.dsocc.rma.data.BHGEAdditionalInfoData additionalData = new com.ds.dsocc.rma.data.BHGEAdditionalInfoData();
		additionalData.setServiceNotes(item.getServiceNotes());
		additionalData.setManufactureYear(item.getManufacturingYear());
		additionalData.setWarrantyStatement(item.getWarrantyCLaimInformation());
		List<String> serialNumber = new ArrayList<>();
		serialNumber.add(item.getPartSerialNumber());

		formData.setSerialNumber(serialNumber);
		formData.setAdditionalInfo(additionalData);
		formData.setPartNumber(item.getPartNumber());
		formData.setQuantity(Long.parseLong(item.getQuantity()));
		formData.setProblemDescription(item.getRepairReason());
		saveRmaForm(formData, cartId);

		
	}
	

}