package com.bhge.core.search.solrfacetsearch.provider.impl;

import de.hybris.platform.catalog.jalo.classification.ClassAttributeAssignment;
import de.hybris.platform.catalog.jalo.classification.util.Feature;
import de.hybris.platform.catalog.jalo.classification.util.FeatureContainer;
import de.hybris.platform.catalog.model.ProductFeatureModel;
import de.hybris.platform.catalog.model.classification.ClassAttributeAssignmentModel;
import de.hybris.platform.catalog.model.classification.ClassificationAttributeModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
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
import de.hybris.platform.catalog.model.CatalogModel;
import de.hybris.platform.catalog.model.CatalogVersionModel;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;


public class BHGEClassificationAttributeValueProvider extends ClassificationPropertyValueProvider
{

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "userService")
	private UserService userService;

	private static final Logger LOG = Logger.getLogger(BHGEClassificationAttributeValueProvider.class);

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.solrfacetsearch.provider.FieldValueProvider#getFieldValues
	 * (de.hybris.platform.solrfacetsearch .config.IndexConfig, de.hybris.platform.solrfacetsearch.config.IndexedProperty,
	 * java.lang.Object)
	 */
	@Override
	public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
			final Object model) throws FieldValueProviderException
	{
		if (model instanceof ProductModel)
		{
			final ClassAttributeAssignmentModel classAttributeAssignmentModel = getClassAttributeAss(indexedProperty.getName(),
					(ProductModel) model);

			if (null == classAttributeAssignmentModel)
			{
				return Collections.emptyList();
			}

			final ClassAttributeAssignment classAttributeAssignment = (ClassAttributeAssignment) this.modelService
					.getSource(classAttributeAssignmentModel);

			final Product product = (Product) this.modelService.getSource(model);
			final FeatureContainer cont = FeatureContainer.loadTyped(product, new ClassAttributeAssignment[]
			{ classAttributeAssignment });
			if (cont.hasFeature(classAttributeAssignment))
			{
				final Feature feature = cont.getFeature(classAttributeAssignment);
				LOG.debug("feature " + feature.getName() + " classattribute "
						+ classAttributeAssignmentModel.getClassificationClass().getCode() + " product "
						+ ((ProductModel) model).getCode() + " salesArea "
						+ ((ProductModel) model).getCatalogVersion().getCatalog().getId());
				if ((feature == null) || (feature.isEmpty()))
				{
					return Collections.emptyList();
				}

				return getFeaturesValues(indexConfig, feature, indexedProperty);
			}

			return Collections.emptyList();
		}

		throw new FieldValueProviderException("Cannot provide classification property of non-product item");
		// Y Auto-generated method stub
	}

	private ClassAttributeAssignmentModel getClassAttributeAss(final String code, final ProductModel model)
	{
		final Map<String, Object> params = new HashMap<String, Object>();
		
		String classCategoryCode = null;
		if (null != model.getSupercategories() && !model.getSupercategories().isEmpty())
		{
			for (final Iterator iterator = model.getSupercategories().iterator(); iterator.hasNext();)
			{
				final CategoryModel categoryModel = (CategoryModel) iterator.next();
				classCategoryCode = categoryModel.getCode();
			}
		}
		else
		{
			return null;
		}

		final UserModel user = userService.getCurrentUser();
		userService.setCurrentUser(userService.getAdminUser());

		//		final FlexibleSearchQuery query = new FlexibleSearchQuery(" select {CAA." + ClassAttributeAssignmentModel.PK + "} from {"
		//				+ ClassAttributeAssignmentModel._TYPECODE + " AS CAA JOIN " + ClassificationAttributeModel._TYPECODE + " AS CA ON"
		//				+ " {CAA." + ClassAttributeAssignmentModel.CLASSIFICATIONATTRIBUTE + "}={CA." + ClassificationAttributeModel.PK
		//				+ "} JOIN " + ClassificationClassModel._TYPECODE + " AS CC ON  {CAA."
		//				+ ClassAttributeAssignmentModel.CLASSIFICATIONCLASS + "}={CC." + ClassificationClassModel.PK + "}} where {CA."
		//				+ ClassificationAttributeModel.CODE + "}=?classAttribute AND" + " {CC." + ClassificationClassModel.CODE
		//				+ "}=?classCategoryCode");
		//		params.put("classCategoryCode", classCategoryCode);
		//		params.put("classAttribute", code);
		final FlexibleSearchQuery query = new FlexibleSearchQuery(" select {CL." + ClassAttributeAssignmentModel.PK + "} from {"
						+ ClassAttributeAssignmentModel._TYPECODE + " AS CL JOIN " + ProductFeatureModel._TYPECODE + " AS PF ON " + " {PF."
						+ ProductFeatureModel.CLASSIFICATIONATTRIBUTEASSIGNMENT + "}={CL." + ClassAttributeAssignmentModel.PK + "} JOIN "
						+ GEEdgeProductModel._TYPECODE + " AS GE ON  {PF." + ProductFeatureModel.PRODUCT + "}={GE." + GEEdgeProductModel.PK
						+ "} JOIN " + ClassificationAttributeModel._TYPECODE + " AS CA ON  {CL."
						+ ClassAttributeAssignmentModel.CLASSIFICATIONATTRIBUTE + "}={CA." + ClassificationAttributeModel.PK + "}"
						+" JOIN " + CatalogVersionModel._TYPECODE + " AS CV ON {GE:CATALOGVERSION} = {CV:PK}"
						+" JOIN " + CatalogModel._TYPECODE + " AS C ON {C.PK} = {CV.CATALOG}} where {CA."
						+ ClassificationAttributeModel.CODE + "}=?classAttribute AND" + " {GE." + GEEdgeProductModel.CODE + "}=?productCode" 
						+ " AND {C.ID} = 'bhgeGlobalProductCatalog' AND {CV.VERSION} = 'Online'");
		params.put("productCode", model.getCode());
		params.put("classAttribute", code);
		query.addQueryParameters(params);
		final SearchResult<ClassAttributeAssignmentModel> results = flexibleSearchService.search(query);
		final List<ClassAttributeAssignmentModel> classAttributeAssignmentModelList = results.getResult();
		userService.setCurrentUser(user);
		if (null != classAttributeAssignmentModelList && classAttributeAssignmentModelList.size() > 0)
		{
			return classAttributeAssignmentModelList.get(0);
		}
		else
		{
			return null;
		}
	}

}
