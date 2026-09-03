package com.bhge.core.search.solrfacetsearch.provider.impl;

import de.hybris.platform.catalog.enums.ProductReferenceTypeEnum;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.catalog.references.ProductReferenceService;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldNameProvider;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.FieldValueProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.AbstractPropertyFieldValueProvider;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;


/***********************************************************************************************************************
 *
 * @Author :
 * @Version : 1.0
 * @Date Created: Jul 15, 2016
 * @Date Modified :
 * @Modified By :
 * @Contact :
 * @History :
 *
 **********************************************************************************************************************/
public class BHGEObsoleteProductValueProvider extends AbstractPropertyFieldValueProvider
		implements FieldValueProvider, Serializable
{

	/**
	 *
	 */
	private final static Logger LOG = Logger.getLogger(BHGEObsoleteProductValueProvider.class);

	private static final long serialVersionUID = 1L;

	private FieldNameProvider fieldNameProvider;
	@Resource(name = "productReferenceService")
	private ProductReferenceService productReferenceService;

	@Resource(name = "productService")
	private ProductService productService;

	@Override
	public Collection<FieldValue> getFieldValues(final IndexConfig arg0, final IndexedProperty indexedProperty, final Object model)
			throws FieldValueProviderException
	{
		final Collection<FieldValue> fieldValues = new ArrayList<FieldValue>();
		GEEdgeProductModel geEdgeProduct = null;
		if (model instanceof GEEdgeProductModel)
		{
			geEdgeProduct = (GEEdgeProductModel) model;

			final Collection<ProductReferenceModel> productReferenceModels = productReferenceService
					.getProductReferencesForSourceProduct(geEdgeProduct,
							// .getProductReferencesForTargetProduct(geEdgeProduct,
							ProductReferenceTypeEnum.OBSOLETE, Boolean.TRUE);
			for (final ProductReferenceModel productPrefModel : productReferenceModels)
			{
				fieldValues.addAll(createFieldValues(indexedProperty, productPrefModel.getTarget().getCode()));
			}
		}
		return fieldValues;
	}

	protected Collection<FieldValue> createFieldValues(final IndexedProperty indexedProperty, final Object value)
	{
		final List<FieldValue> fieldValues = new ArrayList<FieldValue>();
		final Collection<String> fieldNames = fieldNameProvider.getFieldNames(indexedProperty, null);
		for (final String fieldName : fieldNames)
		{
			fieldValues.add(new FieldValue(fieldName, value));
		}

		return fieldValues;
	}

	/**
	 * @param fieldNameProvider
	 *           the fieldNameProvider to set
	 */
	public void setFieldNameProvider(final FieldNameProvider fieldNameProvider)
	{
		this.fieldNameProvider = fieldNameProvider;
	}

	public ProductReferenceService getProductReferenceService()
	{
		return productReferenceService;
	}

	public void setProductReferenceService(ProductReferenceService productReferenceService)
	{
		this.productReferenceService = productReferenceService;
	}

	public FieldNameProvider getFieldNameProvider()
	{
		return fieldNameProvider;
	}

}
