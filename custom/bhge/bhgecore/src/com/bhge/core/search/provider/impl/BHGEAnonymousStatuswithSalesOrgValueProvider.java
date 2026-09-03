/**
 * 
 */
package com.bhge.core.search.provider.impl;

import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.ClassificationData;
import de.hybris.platform.commercefacades.product.data.FeatureData;
import de.hybris.platform.commercefacades.product.data.FeatureValueData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.i18n.I18NService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.FieldValueProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.AbstractPropertyFieldValueProvider;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.enums.MaterialChannelStatus;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.user.daos.BHGEUserProfileDao;

/**
 * @author 212722447
 *
 */
public class BHGEAnonymousStatuswithSalesOrgValueProvider extends AbstractPropertyFieldValueProvider implements FieldValueProvider
{

	private final static Logger LOG = Logger.getLogger(BHGEAnonymousSellableProductValueProvider.class);

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;
	
	@Resource(name = "bhgeCommerceCategoryService")
	private BHGECommerceCategoryService bhgeCommerceCategoryService;
	
	@Resource(name = "productVariantFacade")
	private ProductFacade productFacade;

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;
	
	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;
	
	@Resource(name = "i18nService")
	private I18NService i18nService;

	@Override
	public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
			final Object model) throws FieldValueProviderException
	{
		final Collection<FieldValue> fieldValues = new ArrayList<FieldValue>();
		boolean anonymousBuyorQuote = false;		
		boolean allowedCategoryGuestforBuyorQuote = false;
		boolean productAllowedforGuestCategories = false;
		GEEdgeProductModel productModel = null;
		GEEdgeProductModel geEdgeproductModel = null;
		String featureVal = null;
		final HashSet<String> listOfAnonymousStatusWithSalesOrg = new HashSet<String>();
		final List<CategoryModel> productSupercategories = new ArrayList<CategoryModel>();
		final FlexibleSearchQuery query = new FlexibleSearchQuery("SELECT DISTINCT {PK} FROM {BHGEAnonymousUserCatalog}");
		final SearchResult<BHGEAnonymousUserCatalogModel> results = flexibleSearchService.search(query);
		final List<BHGEAnonymousUserCatalogModel> anonymousUserCatalogList = results.getResult();
		
		if (model instanceof GEEdgeProductModel)
		{
			geEdgeproductModel = (GEEdgeProductModel) model;
			if(CollectionUtils.isNotEmpty(anonymousUserCatalogList))
			{
				for(BHGEAnonymousUserCatalogModel anonymousUserCatalog : anonymousUserCatalogList)
				{
					final List<CategoryModel> allowedCategories = (List<CategoryModel>) anonymousUserCatalog.getCategories();
					if(CollectionUtils.isNotEmpty(allowedCategories))
					{
						if (CollectionUtils.isNotEmpty(geEdgeproductModel.getSupercategories()) && geEdgeproductModel.getSupercategories().size() > 0)
						{
							for (final CategoryModel category : geEdgeproductModel.getSupercategories())
							{
								productSupercategories.addAll(category.getAllSupercategories());
							}
						}
						if (productSupercategories.stream().anyMatch(category -> allowedCategories.contains(category)))
						{
							productAllowedforGuestCategories = true;
							break;
						 }
			      }
				}
			}
			
			if(productAllowedforGuestCategories)
			{
				final String productCode = geEdgeproductModel.getCode();
				final Map<String, Object> params = new HashMap<String, Object>();
				final FlexibleSearchQuery queryString = new FlexibleSearchQuery("SELECT DISTINCT {PK} FROM {GEEdgeProduct LEFT JOIN CatalogVersion ON "
						+ "{GEEdgeProduct.catalogVersion} = {CatalogVersion.pk} LEFT JOIN Catalog ON {Catalog.pk} = {CatalogVersion.catalog}} WHERE "
						+ "{CatalogVersion.VERSION}='Online' AND {Catalog.ID}='bhgeGlobalProductCatalog' AND {GEEdgeProduct.code}= ?productCode");
				params.put("productCode", productCode);
				queryString.addQueryParameters(params);
				final SearchResult<GEEdgeProductModel> result = flexibleSearchService.search(queryString);
				final List<GEEdgeProductModel> productList = result.getResult();
				productModel = productList.get(0);
				final List<ProductOption> extraOptions = Arrays.asList(ProductOption.CLASSIFICATION);
				
				LanguageModel languageModel = commonI18NService.getLanguage("en");
				final Locale locale = commonI18NService.getLocaleForLanguage(languageModel);
				i18nService.setCurrentLocale(locale);

				final ProductData productData = productFacade.getProductForOptions(productModel, extraOptions);
				
				if(null != productData.getClassifications())
				{
					start : for(ClassificationData classification : productData.getClassifications())
					{
						if(null != classification.getFeatures())
						{
							for(FeatureData feature : classification.getFeatures())
							{
								if(null != feature.getCode() && feature.getCode().toUpperCase().contains(BhgeCoreConstants.GUESTUSER))
								{
									if(null != feature.getFeatureValues())
									{
										for(FeatureValueData featureValue : feature.getFeatureValues())
										{
											featureVal = featureValue.getValue();
											break start;
										}
									}
									
								}
							}
						}
					}
				}			
			}
			
			if(productAllowedforGuestCategories && null != featureVal && (featureVal.contains(BhgeCoreConstants.BUY) || featureVal.contains(BhgeCoreConstants.RFQ)) )
			{
				for(BHGEAnonymousUserCatalogModel anonymousUserCatalog : anonymousUserCatalogList)
				{
					boolean productAllowedforGuest = false;
					final List<CategoryModel> allowedCategories = (List<CategoryModel>) anonymousUserCatalog.getCategories();
					if(CollectionUtils.isNotEmpty(allowedCategories))
					{
						if (CollectionUtils.isNotEmpty(geEdgeproductModel.getSupercategories()) && geEdgeproductModel.getSupercategories().size() > 0)
						{
							for (final CategoryModel category : geEdgeproductModel.getSupercategories())
							{
								productSupercategories.addAll(category.getAllSupercategories());
							}
						}
						if (productSupercategories.stream().anyMatch(category -> allowedCategories.contains(category)))
						{
							productAllowedforGuest = true;
						 }
			      }
				
				if(productAllowedforGuest && !productModel.getSalesAreaData().isEmpty() 
						&& (null != anonymousUserCatalog.getSalesOrg() && StringUtils.isNotBlank(anonymousUserCatalog.getSalesOrg())))
				{
					final String salesOrg = anonymousUserCatalog.getSalesOrg();
					final String distributionChannel = anonymousUserCatalog.getDistributionChannel();
					final String division = anonymousUserCatalog.getDivision();
					final Map<String, Object> param = new HashMap<String, Object>();
					BHGESalesAreaDataModel salesAreaData = null;
					final FlexibleSearchQuery queryString = new FlexibleSearchQuery("SELECT DISTINCT{PK} FROM {BHGESalesAreaData AS BSA JOIN Product2SalesAreaRelation as PSR ON {PSR.target} = {BSA.pk} "
							+ "JOIN GEEdgeProduct AS GEP ON {PSR.source} = {GEP.pk} JOIN CatalogVersion AS CV ON {GEP.catalogVersion}={CV.pk} "
							+ "JOIN Catalog AS C ON {C.pk}={CV.catalog}} WHERE {CV.VERSION}='Online' AND {C.ID}='bhgeGlobalProductCatalog' "
							+ "AND {GEP.code}=?productCode AND {BSA.salesOrganization}=?salesOrg AND {BSA.distributionChannel}=?distributionChannel "
							+ "AND {BSA.division}=?division");
					param.put("productCode", productModel.getCode());
					param.put("salesOrg", salesOrg);
					param.put("distributionChannel", distributionChannel);
					param.put("division", division);
					queryString.addQueryParameters(param);
					final SearchResult<BHGESalesAreaDataModel> result = flexibleSearchService.search(queryString);
					if (result.getResult() != null && result.getResult().size() > 0)
					{
						final List<BHGESalesAreaDataModel> salesAreaList = result.getResult();
						salesAreaData = salesAreaList.get(0);
					}
					if(null != salesAreaData)
					{
			   		if(featureVal.contains(BhgeCoreConstants.BUY))
			   		{
			   			if((salesAreaData.getHybrisStatus() == HybrisStatus.SELL || salesAreaData.getHybrisStatus() == HybrisStatus.SELLANDRETURN)
			   					&& (salesAreaData.getMaterialStatus() == MaterialChannelStatus.P1 || salesAreaData.getMaterialStatus() == MaterialChannelStatus.P2
			   					|| salesAreaData.getMaterialStatus() == MaterialChannelStatus.P3 || salesAreaData.getMaterialStatus() == MaterialChannelStatus.SO
			   					|| salesAreaData.getMaterialStatus() == MaterialChannelStatus.CC))
			   			{
			   				listOfAnonymousStatusWithSalesOrg.add(anonymousUserCatalog.getSalesOrg() + "_" + anonymousUserCatalog.getDistributionChannel() + "_"
			   				+ anonymousUserCatalog.getDivision() + "_" + BhgeCoreConstants.BUY);
			   			}
			   			else if(salesAreaData.getHybrisStatus() == HybrisStatus.CATALOG
			   					&& (salesAreaData.getMaterialStatus() == MaterialChannelStatus.P1 || salesAreaData.getMaterialStatus() == MaterialChannelStatus.P2
			   					|| salesAreaData.getMaterialStatus() == MaterialChannelStatus.P3 || salesAreaData.getMaterialStatus() == MaterialChannelStatus.SO))
			   			{
			   				listOfAnonymousStatusWithSalesOrg.add(anonymousUserCatalog.getSalesOrg() + "_" + anonymousUserCatalog.getDistributionChannel() + "_"
					   				+ anonymousUserCatalog.getDivision() + "_" + BhgeCoreConstants.CATALOG);
			   			}
			   		}

			   		else if(featureVal.contains(BhgeCoreConstants.RFQ))
			   		{
			   			if((salesAreaData.getHybrisStatus() == HybrisStatus.SELL || salesAreaData.getHybrisStatus() == HybrisStatus.SELLANDRETURN)
			   					&& (salesAreaData.getMaterialStatus() == MaterialChannelStatus.P1 || salesAreaData.getMaterialStatus() == MaterialChannelStatus.P2
			   					|| salesAreaData.getMaterialStatus() == MaterialChannelStatus.P3 || salesAreaData.getMaterialStatus() == MaterialChannelStatus.SO
			   					|| salesAreaData.getMaterialStatus() == MaterialChannelStatus.CC))
			   			{
			   				listOfAnonymousStatusWithSalesOrg.add(anonymousUserCatalog.getSalesOrg() + "_" + anonymousUserCatalog.getDistributionChannel() + "_"
					   				+ anonymousUserCatalog.getDivision() + "_" + BhgeCoreConstants.RFQ);
			   			}
			   			else if(salesAreaData.getHybrisStatus() == HybrisStatus.CATALOG
			   					&& (salesAreaData.getMaterialStatus() == MaterialChannelStatus.P1 || salesAreaData.getMaterialStatus() == MaterialChannelStatus.P2
			   					|| salesAreaData.getMaterialStatus() == MaterialChannelStatus.P3 || salesAreaData.getMaterialStatus() == MaterialChannelStatus.SO))
			   			{
			   				listOfAnonymousStatusWithSalesOrg.add(anonymousUserCatalog.getSalesOrg() + "_" + anonymousUserCatalog.getDistributionChannel() + "_"
					   				+ anonymousUserCatalog.getDivision() + "_" + BhgeCoreConstants.RFQ);
			   			}
						else if(salesAreaData.getHybrisStatus() == HybrisStatus.RETURN)
						{
						listOfAnonymousStatusWithSalesOrg.add(anonymousUserCatalog.getSalesOrg() + "_" + anonymousUserCatalog.getDistributionChannel() + "_"
								+ anonymousUserCatalog.getDivision() + "_" + BhgeCoreConstants.RFQ);
						}
			   		}
					}					
					else 
					{ 
						listOfAnonymousStatusWithSalesOrg.add(anonymousUserCatalog.getSalesOrg() + "_" + anonymousUserCatalog.getDistributionChannel() + "_"
			   				+ anonymousUserCatalog.getDivision() + "_" + BhgeCoreConstants.RFQ);
					}						 
				}
			}
		}
			fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", listOfAnonymousStatusWithSalesOrg));
	}

		return fieldValues;
	}

}
