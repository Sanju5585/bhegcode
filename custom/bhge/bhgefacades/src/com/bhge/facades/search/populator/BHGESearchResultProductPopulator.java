/**
 *
 */
package com.bhge.facades.search.populator;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.catalog.enums.ProductReferenceTypeEnum;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.catalog.references.ProductReferenceService;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.product.data.ImageData;
import de.hybris.platform.commercefacades.product.data.ImageDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.search.converters.populator.SearchResultProductPopulator;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.commerceservices.search.resultdata.SearchResultValueData;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.media.MediaContainerModel;
import de.hybris.platform.core.model.media.MediaFormatModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.product.UnitModel;
import de.hybris.platform.product.impl.DefaultProductService;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.i18n.I18NService;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.enums.MaterialChannelStatus;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.product.strategy.BHGEProductAccessStrategy;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.core.util.BHGEProductUtil;
import com.bhge.facades.constants.BhgeFacadesConstants;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.product.data.BHGEProductAccessData;
import com.bhge.facades.product.data.BrandNameData;
import com.bhge.store.services.BHGEBaseStoreService;


public class BHGESearchResultProductPopulator extends SearchResultProductPopulator
{
	private static final Logger LOG = Logger.getLogger(BHGESearchResultProductPopulator.class);
	@Resource(name = "productReferenceService")
	private ProductReferenceService productReferenceService;
	private List<BHGEProductAccessStrategy> strategiesList = new LinkedList();

	@Autowired
	private DefaultProductService productService;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;

	@Resource(name = "mediaService")
	private MediaService mediaService;

	@Resource(name = "i18nService")
	private I18NService i18nService;

	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource(name = "userService")
	UserService userService;

	@Resource(name = "bhgeCommerceCategoryService")
	private BHGECommerceCategoryService bhgeCommerceCategoryService;

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	@Resource(name = "modelService")
	public ModelService modelService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;
	
	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	public static final String MISSING_IMAGE_URL = "/_ui/responsive/theme-lambda/images/missing_product_";
	public static final String MISSING_IMAGE_URL_FORMAT = "_65x65.jpg";

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

	@Override
	public void populate(final SearchResultValueData source, final ProductData target) throws ConversionException
	{
		final String code = this.<String> getValue(source, "code");
		final String codeText = this.<String> getValue(source, "code_text");
		LOG.info("BH-476506 Search Result Code:" + code);
		LOG.info("BH-476506 Search Result Code_Text:" + codeText);
		try {
			super.populate(source, target);
		} catch (UnknownIdentifierException uie) {
			LOG.error("Product is Invalid, code is : " +code);
			return;
		}
		
		//final ProductModel model = productService.getProductForCode(code);
		String productCode = org.apache.commons.lang3.StringUtils.isNotBlank(code) ? code : codeText;
		LOG.info("BH-476506 Final product code " + productCode);
		final ProductModel model = productService.getProductForCode(productCode);
		if (model instanceof GEEdgeProductModel)
		{
			final GEEdgeProductModel geEdgeProduct = (GEEdgeProductModel) model;
			LOG.info("Product -->" +geEdgeProduct);
			final Collection<ProductReferenceModel> accessoryProductModelList = productReferenceService
					.getProductReferencesForSourceProduct(model, ProductReferenceTypeEnum.ACCESSORIES, false);
			LOG.info("accessoryProductModelList -->" +accessoryProductModelList.toString());
			target.setBrandName(this.createBrandData(getValue(source, "brandName")));
			target.setReturnSalesOrg(this.createReturnSalesOrg(getValue(source, "returnSalesOrg_string_mv")));
			final BHGEProductUtil productUtil = new BHGEProductUtil();
			/*
			 * final MaterialChannelStatus materialStatus =
			 * productUtil.getMaterialStatusForCurrentSalesArea(geEdgeProduct,
			 * sessionService, userService);
			 */
			final MaterialChannelStatus materialStatus = productUtil.getMaterialStatusForCurrentSalesArea(geEdgeProduct, userService);
			/*
			 * final HybrisStatus hybrisStatus =
			 * productUtil.getHybrisStatusForCurrentSalesArea(geEdgeProduct, sessionService,
			 * userService);
			 */
			final HybrisStatus hybrisStatus = productUtil.getHybrisStatusForCurrentSalesArea(geEdgeProduct, userService);
			target.setHasAccessories(CollectionUtils.isNotEmpty(accessoryProductModelList) ? Boolean.TRUE : Boolean.FALSE);
			target.setConfigurable(model.getSapConfigurable());
			target.setHybrisStatus(hybrisStatus != null ? hybrisStatus.getCode() : null);
			target.setMaterialStatus(materialStatus != null ? materialStatus.getCode() : null);
			target.setLeadTimeMaxQty(this.<Integer> getValue(source, "leadTimeMaxQty"));
			target.setLeadTimeType(this.<String> getValue(source, "leadTimeType"));
			target.setObsoleteProductStatus(this.<String> getValue(source, "isObsolete"));
			final List<String> replacementProducts = populateReplacementProduct(model, target);
			//Populate lead time on products based on current sales area
			populateDeliveryTimeBasedonCurrentSalesArea(geEdgeProduct, target);
			if(userService.isAnonymousUser(userService.getCurrentUser()))
			{
				if(Objects.nonNull(sessionService.getAttribute(BhgeFacadesConstants.DEFAULT_SESSION_SALESORG)))
				{
					populateAnonymousUserBuyDetails(source, geEdgeProduct, target);
				}
				if(null != this.<String> getValue(source, "anonymousStatusWithSalesOrg"))
				{
					populateAnonymousUserBuyDetails(source, geEdgeProduct, target);
				}
			}
			if (CollectionUtils.isNotEmpty(replacementProducts))
			{
				target.setReplacementProductStatus(replacementProducts.get(0));
			}
			final UnitModel unitModel = model.getUnit();
			if (null != unitModel && StringUtils.isNotBlank(unitModel.getName()))
			{
				final LanguageModel currentLang = commonI18NService.getCurrentLanguage();
				final Locale currentLocale = commonI18NService.getLocaleForLanguage(currentLang);
				target.setUom(unitModel.getName(currentLocale));
			}

			target.setIsEngineeringHold(Boolean.FALSE);

			if ((materialStatus != null
					&& (materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO)))
					&& (hybrisStatus != null && hybrisStatus.equals(HybrisStatus.SELL)))
			{
				target.setIsEngineeringHold(Boolean.TRUE);
			}
			if (CollectionUtils.isEmpty(target.getImages()))
			{
				target.setMediaurl(MISSING_IMAGE_URL + i18nService.getCurrentLocale() + MISSING_IMAGE_URL_FORMAT);
			}
			populateProductAccessData(target, model);
		}
	}

	/**
	 * Populates the current sales area replacement product
	 *R
	 * @param source
	 * @param target
	 */
	private List<String> populateReplacementProduct(final ProductModel model, final ProductData target)
	{
		final List<String> replacementData = new ArrayList<String>();
		final Collection<ProductReferenceModel> targets = productReferenceService.getProductReferencesForSourceProduct(model,
				ProductReferenceTypeEnum.OBSOLETE, true);

		if (CollectionUtils.isNotEmpty(targets))
		{
			target.setObsoleteProductStatus("true");
			final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");
			if (sessionSalesAreaData != null)
			{
				for (final ProductReferenceModel referenceModel : targets)
				{
					if (referenceModel.getTarget() instanceof GEEdgeProductModel)
					{
						final GEEdgeProductModel geEdgeProduct = (GEEdgeProductModel) referenceModel.getTarget();
						for (final BHGESalesAreaDataModel salesArea : geEdgeProduct.getSalesAreaData())
						{
							if (salesArea.getSalesOrganization().equalsIgnoreCase(sessionSalesAreaData.getSalesOrg()))
							{
								replacementData.add(referenceModel.getTarget().getCode());
							}
						}
					}
				}
			}
		}
		return replacementData;
	}

	/**
	 * Populate lead time on product based on current sales area
	 *
	 * @param source
	 * @param target
	 */
	private void populateDeliveryTimeBasedonCurrentSalesArea(final GEEdgeProductModel source, final ProductData target)
	{
		final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");
		if (sessionSalesAreaData != null)
		{
			for (final BHGESalesAreaDataModel salesArea : source.getSalesAreaData())
			{
				if (salesArea.getSalesOrganization().equalsIgnoreCase(sessionSalesAreaData.getSalesOrg()))
				{
					target.setDeliveryTime(salesArea.getDeliveryTime() != null ? salesArea.getDeliveryTime().toString() : null);
				}
			}
		}
	}

	/**
	 * @param target
	 * @param model
	 */
	private void populateProductAccessData(final ProductData target, final ProductModel model)
	{
		BHGEProductAccessData accessData = new BHGEProductAccessData();
		for (final BHGEProductAccessStrategy splittingStrategy : getStrategiesList())
		{
			accessData = splittingStrategy.isProductAccessible(model, accessData);
		}
		target.setProductAccessData(accessData);
	}

	private String getFormattedCurrencyValue(final BigDecimal value)
	{
		final CurrencyModel curerncy = getCommonI18NService().getCurrentCurrency();

		final int tempDigits = curerncy.getDigits() == null ? 0 : curerncy.getDigits().intValue();
		final int digits = Math.max(0, tempDigits);


		final DecimalFormat format = new DecimalFormat();
		format.setMaximumFractionDigits(digits);
		format.setMinimumFractionDigits(digits);
		if (digits == 0)
		{
			format.setDecimalSeparatorAlwaysShown(false);
		}
		return format.format(value);

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * de.hybris.platform.commercefacades.search.converters.populator.SearchResultProductPopulator#createImageData(de.
	 * hybris.platform.commerceservices.search.resultdata.SearchResultValueData)
	 */
	@Override
	protected List<ImageData> createImageData(final SearchResultValueData source)
	{
		final List<ImageData> result = new ArrayList<ImageData>();

		addImageData(source, "cartIcon", result);
		addImageData(source, "styleSwatch", result);
		addImageData(source, "thumbnail", result);
		addImageData(source, "product", result);

		return result;
	}

	/**
	 * Populating the brand name object for category search
	 *
	 * @param brandNames
	 * @return
	 */
	private Collection<BrandNameData> createBrandData(final Collection<String> brandNames)
	{
		final LinkedList<BrandNameData> brandNameDataList = new LinkedList<>();
		if (brandNames != null)
		{
			for (final String brand : brandNames)
			{
				final BrandNameData brandNameData = new BrandNameData();
				brandNameData.setName(brand);
				brandNameDataList.add(brandNameData);
			}
		}
		return brandNameDataList;
	}
	private Collection<String> createReturnSalesOrg(final Collection<String> returnSalesOrg) {
		LinkedList<String> returnSalesOrgList = null;
		if (returnSalesOrg != null) {
			returnSalesOrgList = new LinkedList<>(returnSalesOrg);
		}
		return returnSalesOrgList;
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * de.hybris.platform.commercefacades.search.converters.populator.SearchResultProductPopulator#addImageData(de.hybris
	 * .platform.commerceservices.search.resultdata.SearchResultValueData, java.lang.String, java.lang.String,
	 * de.hybris.platform.commercefacades.product.data.ImageDataType, java.util.List)
	 */
	@Override
	protected void addImageData(final SearchResultValueData source, final String imageFormat, final String mediaFormatQualifier,
			final ImageDataType type, final List<ImageData> images)
	{
		final String productCode = getValue(source, "code");
		if (!StringUtils.isEmpty(productCode) && productCode != null)
		{
			final ProductModel model = productService.getProductForCode(productCode);
			try
			{
				if (model.getPicture() != null && model.getPicture().getMediaContainer() != null)
				{
					final MediaContainerModel mediaContainer = model.getPicture().getMediaContainer();
					final MediaFormatModel mediaFormat = mediaService.getFormat(mediaFormatQualifier);
					final MediaModel mediaModel = mediaService.getMediaByFormat(mediaContainer, mediaFormat);
					final ImageData imageData = createImageData();
					imageData.setImageType(type);
					imageData.setFormat(imageFormat);
					imageData.setUrl(mediaModel.getURL());

					images.add(imageData);
				}
			}
			catch (final Exception ex)
			{
				LOG.error("Issue with fetching product for imageFormat " + imageFormat + "Media format Qualifier"
						+ mediaFormatQualifier + " for Product " + productCode);
			}
		}
	}


	/**
	 * Populate buy on guest user
	 *
	 * @param source
	 * @param target
	 */
	private void populateAnonymousUserBuyDetails(final SearchResultValueData searchResultData, final GEEdgeProductModel source, final ProductData target)
	{
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			BHGESalesAreaDataModel salesArea = null;
			String sessionSalesOrg = null;
			if(Objects.nonNull(sessionService.getAttribute(BhgeFacadesConstants.DEFAULT_SESSION_SALESORG)))
			{
				sessionSalesOrg = sessionService.getAttribute(BhgeFacadesConstants.DEFAULT_SESSION_SALESORG);
			}
			else 
			{
				if(null != this.<String> getValue(searchResultData, "anonymousStatusWithSalesOrg"))
				{
					sessionSalesOrg = this.<String> getValue(searchResultData, "anonymousStatusWithSalesOrg");
					target.setGuestSalesOrg(this.<String> getValue(searchResultData, "anonymousStatusWithSalesOrg"));
				}
			}
			final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeFacadesConstants.GUEST_BASE_STORE_UID);
		   final CountryModel countryModel = baseStoreModel.getDefaultCountry();
		   String[] sessionSalesOrgArray = sessionSalesOrg.split("_");
			final BHGEAnonymousUserCatalogModel anonymousUserCatalog = bhgeUserProfileDao.getCountryandSalesOrgMappingForAnonymousUser(sessionSalesOrgArray[0], sessionSalesOrgArray[1],
						sessionSalesOrgArray[2], countryModel);
			String guestUser = this.<String> getValue(searchResultData, "GUESTUSER");
			
			if(CollectionUtils.isNotEmpty(source.getSalesAreaData()) && Objects.nonNull(anonymousUserCatalog))
			{
			final Map<String, Object> params = new HashMap<String, Object>();
			final FlexibleSearchQuery query = new FlexibleSearchQuery("SELECT DISTINCT{PK} FROM {BHGESalesAreaData AS BSA JOIN Product2SalesAreaRelation as PSR ON {PSR.target} = {BSA.pk} "
						+ "JOIN GEEdgeProduct AS GEP ON {PSR.source} = {GEP.pk} JOIN CatalogVersion AS CV ON {GEP.catalogVersion}={CV.pk} "
						+ "JOIN Catalog AS C ON {C.pk}={CV.catalog}} WHERE {CV.VERSION}='Online' AND {C.ID}='bhgeGlobalProductCatalog' "
						+ "AND {GEP.code}=?productCode AND {BSA.salesOrganization}=?salesOrg AND {BSA.distributionChannel}=?distributionChannel AND {BSA.division}=?division");
			params.put("productCode", source.getCode());
			params.put("salesOrg", sessionSalesOrgArray[0]);
			params.put("distributionChannel", sessionSalesOrgArray[1]);
			params.put("division", sessionSalesOrgArray[2]);
			query.addQueryParameters(params);
			final SearchResult<BHGESalesAreaDataModel> results = flexibleSearchService.search(query);
			if (results.getResult() != null && results.getResult().size() > 0)
				{
					final List<BHGESalesAreaDataModel> salesAreaList = results.getResult();
					salesArea = salesAreaList.get(0);
				}
			if(Objects.nonNull(salesArea))
				{
					if(null != guestUser && guestUser.contains(BhgeFacadesConstants.BUY))
					{
						if((salesArea.getHybrisStatus() == HybrisStatus.SELL || salesArea.getHybrisStatus() == HybrisStatus.SELLANDRETURN)
		   					&& (salesArea.getMaterialStatus() == MaterialChannelStatus.P1 || salesArea.getMaterialStatus() == MaterialChannelStatus.P2
		   					|| salesArea.getMaterialStatus() == MaterialChannelStatus.P3 || salesArea.getMaterialStatus() == MaterialChannelStatus.SO
		   					|| salesArea.getMaterialStatus() == MaterialChannelStatus.CC))
		   			{
							target.setIsAnonymousBuy(true);
		   			}
		   			else if(salesArea.getHybrisStatus() == HybrisStatus.CATALOG
		   					&& (salesArea.getMaterialStatus() == MaterialChannelStatus.P1 || salesArea.getMaterialStatus() == MaterialChannelStatus.P2
		   					|| salesArea.getMaterialStatus() == MaterialChannelStatus.P3 || salesArea.getMaterialStatus() == MaterialChannelStatus.SO))
		   			{
							target.setIsAnonymousCatalog(true);
		   			}
					}
					else if(null != guestUser && guestUser.contains(BhgeFacadesConstants.RFQ))
						{
								if((salesArea.getHybrisStatus() == HybrisStatus.SELL || salesArea.getHybrisStatus() == HybrisStatus.SELLANDRETURN)
				   					&& (salesArea.getMaterialStatus() == MaterialChannelStatus.P1 || salesArea.getMaterialStatus() == MaterialChannelStatus.P2
				   					|| salesArea.getMaterialStatus() == MaterialChannelStatus.P3 || salesArea.getMaterialStatus() == MaterialChannelStatus.SO
				   					|| salesArea.getMaterialStatus() == MaterialChannelStatus.CC))
				   			{
									target.setIsAnonymousQuote(true);
				   			}
				   			else if(salesArea.getHybrisStatus() == HybrisStatus.CATALOG
				   					&& (salesArea.getMaterialStatus() == MaterialChannelStatus.P1 || salesArea.getMaterialStatus() == MaterialChannelStatus.P2
				   					|| salesArea.getMaterialStatus() == MaterialChannelStatus.P3 || salesArea.getMaterialStatus() == MaterialChannelStatus.SO))
				   			{
				   				target.setIsAnonymousQuote(true);
				   			}
								else if(salesArea.getHybrisStatus() == HybrisStatus.RETURN);
							{
								target.setIsAnonymousQuote(true);
							}
					 }
				}				
				else 
				{ 
						target.setIsAnonymousQuote(true); 
				}	
			}
		}
	}
}
