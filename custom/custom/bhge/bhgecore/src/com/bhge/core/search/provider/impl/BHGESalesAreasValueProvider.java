/**
 *
 */
package com.bhge.core.search.provider.impl;

import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.FieldValueProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.AbstractPropertyFieldValueProvider;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;


/**
 * @author 212695810 This is a custom value provider to populate all product sales areas
 *
 */
public class BHGESalesAreasValueProvider extends AbstractPropertyFieldValueProvider implements FieldValueProvider
{
	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * de.hybris.platform.solrfacetsearch.provider.FieldValueProvider#getFieldValues(de.hybris.platform.solrfacetsearch.
	 * config.IndexConfig, de.hybris.platform.solrfacetsearch.config.IndexedProperty, java.lang.Object)
	 */
	@Override
	public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
			final Object model) throws FieldValueProviderException
	{
		final Collection<FieldValue> fieldValues = new ArrayList<FieldValue>();

		GEEdgeProductModel productModel = null;
		if (model instanceof GEEdgeProductModel)
		{
			productModel = (GEEdgeProductModel) model;
			final HashSet<String> listOfSalesAreas = new HashSet<String>();
			for (final BHGESalesAreaDataModel salesArea : productModel.getSalesAreaData())
			{
				listOfSalesAreas.add(salesArea.getSalesOrganization());
			}
			fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", listOfSalesAreas));
		}
		return fieldValues;
	}
}
