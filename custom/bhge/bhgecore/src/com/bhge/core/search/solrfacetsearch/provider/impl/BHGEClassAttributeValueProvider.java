package com.bhge.core.search.solrfacetsearch.provider.impl;

import de.hybris.platform.catalog.jalo.classification.ClassAttributeAssignment;
import de.hybris.platform.catalog.jalo.classification.util.Feature;
import de.hybris.platform.catalog.jalo.classification.util.FeatureContainer;
import de.hybris.platform.catalog.model.ProductFeatureModel;
import de.hybris.platform.catalog.model.classification.ClassAttributeAssignmentModel;
import de.hybris.platform.catalog.model.classification.ClassificationAttributeModel;
import de.hybris.platform.catalog.model.classification.ClassificationAttributeValueModel;
import de.hybris.platform.catalog.model.classification.ClassificationClassModel;
import de.hybris.platform.classification.daos.ProductFeaturesDao;
import de.hybris.platform.core.model.ItemModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.jalo.product.Product;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.impl.ClassificationPropertyValueProvider;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;


public class BHGEClassAttributeValueProvider extends ClassificationPropertyValueProvider
{

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "productFeaturesDao")
	private ProductFeaturesDao productFeaturesDao;

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.solrfacetsearch.provider.FieldValueProvider#getFieldValues
	 * (de.hybris.platform.solrfacetsearch .config.IndexConfig,
	 * de.hybris.platform.solrfacetsearch.config.IndexedProperty, java.lang.Object)
	 */
	@Override
	public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
			final Object model) throws FieldValueProviderException
	{
		final List<FieldValue> fieldValues = new ArrayList<>();
		if (model instanceof ProductModel)
		{

			final ProductModel productModel = (ProductModel) model;
			final ClassAttributeAssignmentModel classAttributeAssignmentModel = indexedProperty.getClassAttributeAssignment();
			final List<ProductFeatureModel> productFeature = productModel.getFeatures();
			if (productFeature.isEmpty() || classAttributeAssignmentModel == null)
			{
				return Collections.emptyList();
			}
			else
			{
				final List<ClassAttributeAssignmentModel> classAttributeAssignmentModels = getClassAttributeAss(
						indexedProperty.getName(), (ProductModel) model);
				if (CollectionUtils.isEmpty(classAttributeAssignmentModels))
				{
					return Collections.emptyList();
				}
				for (final ClassAttributeAssignmentModel classAttributeAssignmentModel1 : classAttributeAssignmentModels)
				{
					final ClassAttributeAssignment classAttributeAssignment = (ClassAttributeAssignment) this.modelService
							.getSource(classAttributeAssignmentModel1);
					//LOG.info("fieldValues classAttributeAssignment " + classAttributeAssignment);

					final Product product = (Product) modelService.getSource(model);
					//LOG.info("fieldValues product " + product);
					final FeatureContainer cont = FeatureContainer.loadTyped(product, classAttributeAssignment);
					if (cont.hasFeature(classAttributeAssignment))
					{
						final List<ClassAttributeAssignmentModel> assignments = new ArrayList<ClassAttributeAssignmentModel>();
						assignments.add(classAttributeAssignmentModel1);
						final Map<ClassAttributeAssignmentModel, List<ProductFeatureModel>> featuresMap = convertFeaturesResult(productFeaturesDao
								.findProductFeaturesByProductAndAssignment(productModel, assignments));
						final List<ProductFeatureModel> productFeatures = featuresMap.get(classAttributeAssignmentModel1);
						final Feature feature = cont.getFeature(classAttributeAssignment);
						if (feature != null)
						{
							if (productFeatures != null)
							{
								Collections.sort(productFeatures, new ProductFeatureComparator());
								for (final ProductFeatureModel productFeature2 : productFeatures)
								{
									String productFeatureString = "";
									if(productFeature2.getValue() instanceof ClassificationAttributeValueModel)
									{
										productFeatureString = ((ClassificationAttributeValueModel)productFeature2.getValue()).getName();
									}
									else
									{
										productFeatureString = productFeature2.getValue().toString();
									}
									fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", productFeatureString));
									//LOG.info("fieldValues productFeature.getValue() " + productFeature2.getValue());
								}
							}
						}
					}
					else
					{
						final String productFeatureString = "";
						fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", productFeatureString));
					}
				}
			}
			return fieldValues;
		}

		throw new FieldValueProviderException("Cannot provide classification property of non-product item");
		// Y Auto-generated method stub
	}

	private List<ClassAttributeAssignmentModel> getClassAttributeAss(final String code, final ProductModel model)
	{
		final Map<String, Object> params = new HashMap<String, Object>();


		final UserModel user = userService.getCurrentUser();
		userService.setCurrentUser(userService.getAdminUser());

		final FlexibleSearchQuery query = new FlexibleSearchQuery(" select {CAA." + ClassAttributeAssignmentModel.PK + "} from {"
				+ ClassAttributeAssignmentModel._TYPECODE + " AS CAA JOIN " + ClassificationAttributeModel._TYPECODE + " AS CA ON"
				+ " {CAA." + ClassAttributeAssignmentModel.CLASSIFICATIONATTRIBUTE + "}={CA." + ClassificationAttributeModel.PK
				+ "} JOIN " + ClassificationClassModel._TYPECODE + " AS CC ON  {CAA."
				+ ClassAttributeAssignmentModel.CLASSIFICATIONCLASS + "}={CC." + ClassificationClassModel.PK + "}} where {CA."
				+ ClassificationAttributeModel.CODE + "}=?classAttribute");
		params.put("classAttribute", code);
		query.addQueryParameters(params);
		final SearchResult<ClassAttributeAssignmentModel> results = flexibleSearchService.search(query);
		final List<ClassAttributeAssignmentModel> classAttributeAssignmentModelList = results.getResult();
		userService.setCurrentUser(user);
		return classAttributeAssignmentModelList;
	}

	private class ProductFeatureComparator implements Comparator<ProductFeatureModel>
	{

		@Override
		public int compare(final ProductFeatureModel first, final ProductFeatureModel other)
		{
			final Integer firstPosition = first.getValuePosition() == null ? Integer.valueOf(0) : first.getValuePosition();
			final Integer otherPosition = other.getValuePosition() == null ? Integer.valueOf(0) : other.getValuePosition();

			return firstPosition.intValue() - otherPosition.intValue();
		}
	}

	private Map<ClassAttributeAssignmentModel, List<ProductFeatureModel>> convertFeaturesResult(
			final List<List<ItemModel>> features)
	{
		final Map<ClassAttributeAssignmentModel, List<ProductFeatureModel>> result = new LinkedHashMap<ClassAttributeAssignmentModel, List<ProductFeatureModel>>();
		for (final List<ItemModel> row : features)
		{
			final ProductFeatureModel productFeature = (ProductFeatureModel) row.get(0);
			final ClassAttributeAssignmentModel assignment = (ClassAttributeAssignmentModel) row.get(1);
			List<ProductFeatureModel> _features = result.get(assignment);
			if (_features == null)
			{
				result.put(assignment, _features = new ArrayList());
			}
			_features.add(productFeature);
		}
		return result;
	}

}
