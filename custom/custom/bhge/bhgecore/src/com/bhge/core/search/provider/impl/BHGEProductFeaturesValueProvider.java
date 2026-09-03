package com.bhge.core.search.provider.impl;

import de.hybris.platform.catalog.jalo.classification.ClassAttributeAssignment;
import de.hybris.platform.catalog.jalo.classification.util.Feature;
import de.hybris.platform.catalog.jalo.classification.util.FeatureContainer;
import de.hybris.platform.catalog.model.ProductFeatureModel;
import de.hybris.platform.catalog.model.classification.ClassAttributeAssignmentModel;
import de.hybris.platform.classification.daos.ProductFeaturesDao;
import de.hybris.platform.core.model.ItemModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.jalo.product.Product;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.FieldValueProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.AbstractPropertyFieldValueProvider;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;


public class BHGEProductFeaturesValueProvider extends AbstractPropertyFieldValueProvider implements FieldValueProvider
{

	@Resource(name = "sessionService")
	SessionService sessionService;

	@Resource(name = "productFeaturesDao")
	private ProductFeaturesDao productFeaturesDao;

	@Resource(name = "modelService")
	private ModelService modelService;

	private final static Logger LOG = Logger.getLogger(BHGEProductFeaturesValueProvider.class);

	@Override
	public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
			final Object model) throws FieldValueProviderException
	{
		ProductModel productModel = null;
		final List<FieldValue> fieldValues = new ArrayList<>();
		try
		{
			if (model != null && model instanceof ProductModel)
			{
				productModel = (ProductModel) model;
				final ClassAttributeAssignmentModel classAttributeAssignmentModel = indexedProperty.getClassAttributeAssignment();

				//			final ClassAttributeAssignmentModel classAttributeAssignmentModel1= ;
				final List<ProductFeatureModel> productFeature = productModel.getFeatures();
				if (productFeature.isEmpty())
				{
					final String productFeatureString = "";
					fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", productFeatureString));
				}
				else
				{
					ClassAttributeAssignmentModel classAttributeAssignmentModel1 = null;
					for (final ProductFeatureModel ProductFeature1 : productFeature)
					{
					 if(classAttributeAssignmentModel != null) 
					{
						if (ProductFeature1 != null)
						{
							if (ProductFeature1.getClassificationAttributeAssignment() != null)
							{
								if (ProductFeature1.getClassificationAttributeAssignment().getClassificationAttribute() != null)
								{
									if (ProductFeature1.getClassificationAttributeAssignment().getClassificationAttribute().getName() != null)
									{
											if (classAttributeAssignmentModel.getClassificationAttribute().getName() == ProductFeature1
													.getClassificationAttributeAssignment().getClassificationAttribute().getName())
											{
												classAttributeAssignmentModel1 = ProductFeature1.getClassificationAttributeAssignment();
											}
									}
									else
									{
										final String productFeatureString = "";
										fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", productFeatureString));
									}
								}
								else
								{
									final String productFeatureString = "";
									fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", productFeatureString));
								}
							}
							else
							{
								final String productFeatureString = "";
								fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", productFeatureString));
							}
						}
						else
						{
							final String productFeatureString = "";
							fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", productFeatureString));
						}
						}
						else {
							final String productFeatureString = "";
							fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", productFeatureString));
						}
					}
					final ClassAttributeAssignment classAttributeAssignment = modelService.getSource(classAttributeAssignmentModel1);

					final Product product = (Product) modelService.getSource(model);
					LOG.info("fieldValues product " + product);
					LOG.info("fieldValues ClassificationAttributeModel1 " + classAttributeAssignmentModel1);
					LOG.info("fieldValues classAttributeAssignment " + classAttributeAssignment.toString());
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
									final String productFeatureString = productFeature2.getValue().toString();
									fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", productFeatureString));
									LOG.info("fieldValues productFeature.getValue() " + productFeature2.getValue());
								}
							}
							else
							{
								final String productFeatureString = "";
								fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", productFeatureString));
							}
						}
						else
						{
							final String productFeatureString = "";
							fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", productFeatureString));
						}
					}
					else
					{
						final String productFeatureString = "";
						fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", productFeatureString));
					}
				}
			}
		}
		catch (final Exception ex)
		{
			LOG.info("fieldValues Exception " + ex + "error" + ex.getMessage());
		}

		LOG.info("fieldValues ProductFeature " + fieldValues);
		return fieldValues;
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
