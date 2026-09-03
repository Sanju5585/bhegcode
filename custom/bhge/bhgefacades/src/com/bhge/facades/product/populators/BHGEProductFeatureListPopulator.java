/**
 *
 */
package com.bhge.facades.product.populators;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.catalog.model.classification.ClassificationClassModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.classification.features.Feature;
import de.hybris.platform.classification.features.FeatureList;
import de.hybris.platform.commercefacades.product.converters.populator.ProductFeatureListPopulator;
import de.hybris.platform.commercefacades.product.data.ClassificationData;
import de.hybris.platform.commercefacades.product.data.FeatureData;
import de.hybris.platform.commercefacades.product.data.FeatureValueData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;


import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.enums.MaterialChannelStatus;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.facades.constants.BhgeFacadesConstants;
import com.bhge.product.service.BHGEProductService;
import com.bhge.store.services.BHGEBaseStoreService;


/**
 * @author 212722447
 *
 */
public class BHGEProductFeatureListPopulator<SOURCE extends FeatureList, TARGET extends ProductData>
		extends ProductFeatureListPopulator<SOURCE, TARGET>
{
	private static final Logger LOG = Logger.getLogger(BHGEProductFeatureListPopulator.class);

	@Resource
	private UserService userService;

	@Resource(name = "productService")
	private BHGEProductService productService;

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	@Resource(name = "sessionService")
	SessionService sessionService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;
	
	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	private Converter<ClassificationClassModel, ClassificationData> classificationConverter;
	private Converter<Feature, FeatureData> featureConverter;

	@Override
	protected Converter<ClassificationClassModel, ClassificationData> getClassificationConverter()
	{
		return classificationConverter;
	}

	@Override

	public void setClassificationConverter(final Converter<ClassificationClassModel, ClassificationData> classificationConverter)
	{
		this.classificationConverter = classificationConverter;
	}

	@Override
	protected Converter<Feature, FeatureData> getFeatureConverter()
	{
		return featureConverter;
	}

	@Override

	public void setFeatureConverter(final Converter<Feature, FeatureData> featureConverter)
	{
		this.featureConverter = featureConverter;
	}

	@Override
	public void populate(final SOURCE source, final TARGET target) throws ConversionException
	{
		target.setClassifications(buildClassificationDataList(source, target));
		if(userService.isAnonymousUser(userService.getCurrentUser()))
		{
			final GEEdgeProductModel productModel = (GEEdgeProductModel) productService.getProductForCode(target.getCode());
			if(Objects.nonNull(sessionService.getAttribute(BhgeFacadesConstants.DEFAULT_SESSION_SALESORG)))
			{
				populateAnonymousUserBuyDetails(productModel, target);
			}
			else {
				if(null != target && target instanceof ProductData)
				{
					ProductData productTarget = (ProductData) target;
					if(null != productTarget.getGuestSalesOrg())
					{
						populateAnonymousUserBuyDetails(productModel, productTarget);
					}
				}
			}
		}
	}


	protected List<ClassificationData> buildClassificationDataList(final FeatureList source, final TARGET target)
	{
		final List<ClassificationData> result = new ArrayList<ClassificationData>();
		final Map<String, ClassificationData> map = new HashMap<String, ClassificationData>();

		for (final Feature feature : source.getFeatures())
		{
			if (feature.getValues() != null && !feature.getValues().isEmpty())
			{
				if (feature.getClassAttributeAssignment() != null)
				{
					final ClassificationData classificationData;
					final ClassificationClassModel classificationClass = feature.getClassAttributeAssignment()
							.getClassificationClass();
					final String classificationClassCode = classificationClass.getCode();
					if (map.containsKey(classificationClassCode))
					{
						classificationData = map.get(classificationClassCode);
					}
					else
					{
						classificationData = classificationConverter.convert(classificationClass);

						map.put(classificationClassCode, classificationData);
						result.add(classificationData);
					}

					// Create the feature
					final FeatureData newFeature = getFeatureConverter().convert(feature);

					// Add the feature to the classification
					if (classificationData.getFeatures() == null)
					{
						classificationData.setFeatures(new ArrayList<FeatureData>(1));
					}
					classificationData.getFeatures().add(newFeature);
				}
			}
		}
		target.setCategoryWithClassifications(map);
		return result.isEmpty() ? null : result;
	}

	private void populateAnonymousUserBuyDetails(final GEEdgeProductModel source, final ProductData target)
	{
		String featureVal = null;
		String sessionSalesOrg = null;
		if(Objects.nonNull(sessionService.getAttribute(BhgeFacadesConstants.DEFAULT_SESSION_SALESORG)))
		{
			sessionSalesOrg = sessionService.getAttribute(BhgeFacadesConstants.DEFAULT_SESSION_SALESORG);
		}
		else
		{
			if(null != target.getGuestSalesOrg())
			{
				sessionSalesOrg = target.getGuestSalesOrg();
			}
		}
		final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeFacadesConstants.GUEST_BASE_STORE_UID);
		final CountryModel countryModel = baseStoreModel.getDefaultCountry();
		if(null != countryModel && null != sessionSalesOrg)
		{
			String[] sessionSalesOrgArray = sessionSalesOrg.split("_");
			final BHGEAnonymousUserCatalogModel anonymousUserCatalog = bhgeUserProfileDao.getCountryandSalesOrgMappingForAnonymousUser(sessionSalesOrgArray[0], sessionSalesOrgArray[1],
					sessionSalesOrgArray[2], countryModel);

			for (final ClassificationData classification : Optional.ofNullable(target.getClassifications())
					.orElse(Collections.emptyList()))
			{
				for (final FeatureData feature : Optional.ofNullable(classification.getFeatures()).orElse(Collections.emptyList()))
				{
					if (null != feature.getCode() && feature.getCode().toUpperCase().contains(BhgeFacadesConstants.GUESTUSER))
					{
						for (final FeatureValueData featureValue : Optional.ofNullable(feature.getFeatureValues())
								.orElse(Collections.emptyList()))
						{
							featureVal = featureValue.getValue();
							break;
						}
					}
				}
			}
				if (CollectionUtils.isNotEmpty(source.getSalesAreaData()) && Objects.nonNull(anonymousUserCatalog))
				{
					BHGESalesAreaDataModel salesArea = null;
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
						if(null != featureVal && featureVal.contains(BhgeFacadesConstants.BUY))
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
						else if(null != featureVal && featureVal.contains(BhgeFacadesConstants.RFQ))
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
						  if(null != featureVal) 
						  { 
							  target.setIsAnonymousQuote(true); 
						  } 
					}				 
				}
		}

	}
}
